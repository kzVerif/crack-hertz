const fs = require("fs");
const http = require("http");
const https = require("https");
const {
  desktopCapturer,
  BrowserWindow,
  dialog
} = require("electron");
const {
  prisma
} = require("../db");
const accountService = require("./account.service");
const groupService = require("./group.service");
const postService = require("./post.service");
const statsService = require("./stats.service");
const configService = require("./config.service");
const {
  getHwid
} = require("../../shared/hwid");
let activeLicenseKey = "";
let activeHwid = "";
const SERVER_BASE_URL = (process.env.HERTZ_SERVER_URL || "https://hertzx.xyz").replace(/\/+$/, "");
async function getRemoteSyncFlags() {
  try {
    const _0x10452c = await configService.getConfig();
    return {
      remoteSyncEnabled: _0x10452c?.remoteSyncEnabled === true,
      screenShareEnabled: _0x10452c?.screenShareEnabled === true
    };
  } catch {
    return {
      remoteSyncEnabled: false,
      screenShareEnabled: false
    };
  }
}
async function resolveLicenseKey() {
  try {
    const _0x4f41db = await prisma.key.findFirst();
    if (_0x4f41db && _0x4f41db.code && _0x4f41db.code.trim()) {
      activeLicenseKey = _0x4f41db.code.trim();
      return activeLicenseKey;
    }
    const _0x4e51ca = await prisma.setting.findUnique({
      where: {
        key: "license_key"
      }
    });
    if (_0x4e51ca && _0x4e51ca.value && _0x4e51ca.value.trim()) {
      activeLicenseKey = _0x4e51ca.value.trim();
      return activeLicenseKey;
    }
  } catch {}
  return activeLicenseKey;
}
async function resolveCredentials() {
  const _0x3ef5ed = await resolveLicenseKey();
  if (!activeHwid) {
    try {
      activeHwid = getHwid() || "";
    } catch {}
  }
  const _0x189a20 = {
    code: _0x3ef5ed,
    hwid: activeHwid
  };
  return _0x189a20;
}
let heartbeatTimer = null;
const pendingAckCommandIds = [];
let syncTimer = null;
let screenCaptureWin = null;
let isLaunchingCaptureWin = false;
let sseReq = null;
let sseReconnectTimer = null;
let isSyncing = false;
let mainWindowRef = null;
const processedCommandIds = new Set();
const monitorState = {
  hasWebViewers: true,
  paused: false
};
const remoteLogs = [{
  id: "boot-1",
  timestamp: new Date().toLocaleTimeString("th-TH", {
    hour12: false
  }),
  level: "info",
  source: "SYSTEM",
  message: "เชื่อมต่อ Real-Time Sync กับ " + SERVER_BASE_URL
}];
function pushRemoteLog(_0x39af67, _0xf91703, _0xc34fb7) {
  remoteLogs.push({
    id: Date.now() + "-" + Math.random().toString(36).slice(2, 6),
    timestamp: new Date().toLocaleTimeString("th-TH", {
      hour12: false
    }),
    level: _0x39af67,
    source: _0xf91703 || "SYSTEM",
    message: _0xc34fb7
  });
  if (remoteLogs.length > 150) {
    remoteLogs.splice(0, remoteLogs.length - 150);
  }
}
function notifyDesktopUiChanged(_0x3f1efb, _0x234fcd = {}) {
  try {
    if (mainWindowRef && !mainWindowRef.isDestroyed()) {
      mainWindowRef.webContents.send("remote:data-changed", {
        action: _0x3f1efb,
        payload: _0x234fcd,
        timestamp: Date.now()
      });
    }
  } catch {}
}
function postJson(_0x39dc97, _0x5227d0) {
  return new Promise((_0x502625, _0x32c2c2) => {
    try {
      const _0x21f98f = new URL(_0x39dc97);
      const _0x325d85 = _0x21f98f.protocol === "https:" ? https : http;
      const _0x46190a = JSON.stringify(_0x5227d0);
      const _0x150f3c = _0x325d85.request({
        hostname: _0x21f98f.hostname,
        port: _0x21f98f.port || (_0x21f98f.protocol === "https:" ? 443 : 80),
        path: _0x21f98f.pathname + _0x21f98f.search,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(_0x46190a)
        },
        timeout: 4000
      }, _0x2cb43a => {
        let _0x485194 = "";
        _0x2cb43a.on("data", _0x42ee48 => {
          _0x485194 += _0x42ee48;
        });
        _0x2cb43a.on("end", () => {
          try {
            _0x502625(JSON.parse(_0x485194));
          } catch {
            _0x502625(null);
          }
        });
      });
      _0x150f3c.on("error", _0x59ddd0 => _0x32c2c2(_0x59ddd0));
      _0x150f3c.on("timeout", () => {
        _0x150f3c.destroy();
        _0x32c2c2(new Error("Request timeout"));
      });
      _0x150f3c.write(_0x46190a);
      _0x150f3c.end();
    } catch (_0x46b571) {
      _0x32c2c2(_0x46b571);
    }
  });
}
async function sendHeartbeat() {
  try {
    const _0x382ba9 = await getRemoteSyncFlags();
    if (!_0x382ba9.remoteSyncEnabled) {
      teardownIfDisabled();
      return;
    }
    const _0x27ac0d = await resolveCredentials();
    const _0x2fed5c = [...pendingAckCommandIds];
    const _0x593b84 = {
      code: _0x27ac0d.code,
      hwid: _0x27ac0d.hwid,
      action: "HEARTBEAT",
      ackCommandIds: _0x2fed5c
    };
    const _0x84ddb9 = _0x593b84;
    const _0x110199 = await postJson(SERVER_BASE_URL + "/api/v1/public/controller/from-program", _0x84ddb9);
    if (_0x110199 && _0x110199.success) {
      if (_0x2fed5c.length > 0) {
        for (const _0x5096b0 of _0x2fed5c) {
          const _0x4ecce1 = pendingAckCommandIds.indexOf(_0x5096b0);
          if (_0x4ecce1 !== -1) {
            pendingAckCommandIds.splice(_0x4ecce1, 1);
          }
        }
      }
      if (_0x110199.monitorConfig && typeof _0x110199.monitorConfig.paused === "boolean") {
        monitorState.paused = Boolean(_0x110199.monitorConfig.paused);
        syncMonitorStateToWorker();
      }
      if (Array.isArray(_0x110199.commands) && _0x110199.commands.length > 0) {
        for (const _0x3b0e60 of _0x110199.commands) {
          await executeCommand(_0x3b0e60);
          if (_0x3b0e60.id && !pendingAckCommandIds.includes(_0x3b0e60.id)) {
            pendingAckCommandIds.push(_0x3b0e60.id);
          }
        }
      }
    }
  } catch (_0x50714e) {}
}
async function pushTaskLog(_0xe9d0cd) {
  try {
    const _0x4ba51f = await getRemoteSyncFlags();
    if (!_0x4ba51f.remoteSyncEnabled) {
      return;
    }
    const _0x5d9da9 = await resolveCredentials();
    const _0x31ee57 = {
      code: _0x5d9da9.code,
      hwid: _0x5d9da9.hwid,
      action: "PUSH_LOG",
      autoCountStats: true,
      log: {
        action: _0xe9d0cd.action || "POST",
        status: _0xe9d0cd.status || "SUCCESS",
        message: String(_0xe9d0cd.message || ""),
        accountName: String(_0xe9d0cd.accountName || "Facebook Account"),
        accountId: String(_0xe9d0cd.accountId || ""),
        groupName: String(_0xe9d0cd.groupName || "")
      }
    };
    const _0x48f7c8 = await postJson(SERVER_BASE_URL + "/api/v1/public/controller/from-program", _0x31ee57);
    if (_0x48f7c8 && Array.isArray(_0x48f7c8.commands) && _0x48f7c8.commands.length > 0) {
      for (const _0xa2e659 of _0x48f7c8.commands) {
        await executeCommand(_0xa2e659);
        if (_0xa2e659.id && !pendingAckCommandIds.includes(_0xa2e659.id)) {
          pendingAckCommandIds.push(_0xa2e659.id);
        }
      }
    }
  } catch (_0x34331d) {
    console.warn("[RemoteSync] Failed to push task log:", _0x34331d.message);
  }
}
async function pushTaskLogs(_0xc69359) {
  if (!Array.isArray(_0xc69359) || _0xc69359.length === 0) {
    return;
  }
  if (_0xc69359.length === 1) {
    return pushTaskLog(_0xc69359[0]);
  }
  try {
    const _0x16478f = await getRemoteSyncFlags();
    if (!_0x16478f.remoteSyncEnabled) {
      return;
    }
    const _0x63a6f0 = await resolveCredentials();
    const _0x22db46 = {
      code: _0x63a6f0.code,
      hwid: _0x63a6f0.hwid,
      action: "PUSH_LOGS",
      autoCountStats: true,
      logs: _0xc69359.map(_0x1be923 => ({
        action: _0x1be923.action || "POST",
        status: _0x1be923.status || "SUCCESS",
        message: String(_0x1be923.message || ""),
        accountName: String(_0x1be923.accountName || "Facebook Account"),
        accountId: String(_0x1be923.accountId || ""),
        groupName: String(_0x1be923.groupName || "")
      }))
    };
    const _0x53ded6 = await postJson(SERVER_BASE_URL + "/api/v1/public/controller/from-program", _0x22db46);
    if (_0x53ded6 && Array.isArray(_0x53ded6.commands) && _0x53ded6.commands.length > 0) {
      for (const _0xde5aa9 of _0x53ded6.commands) {
        await executeCommand(_0xde5aa9);
        if (_0xde5aa9.id && !pendingAckCommandIds.includes(_0xde5aa9.id)) {
          pendingAckCommandIds.push(_0xde5aa9.id);
        }
      }
    }
  } catch (_0x3e7530) {
    console.warn("[RemoteSync] Failed to push task logs:", _0x3e7530.message);
  }
}
async function buildTelemetryPayload() {
  const [_0x16dfb8, _0x279699, _0x1b5f74, _0x600bcb, _0x2a3ea6] = await Promise.all([statsService.getAllStats().catch(() => ({
    total: 0,
    success: 0,
    failed: 0,
    pending: 0
  })), statsService.getDailyStats(30).catch(() => []), accountService.getAccounts().catch(() => []), statsService.getAllAccountStats().catch(() => ({})), configService.getConfig().catch(() => null)]);
  const _0x2e4171 = postService.getStatus();
  const _0x279b24 = new Set(_0x2e4171.activeUsers || []);
  const _0x59ca29 = _0x2e4171.statuses || {};
  const _0x1b3315 = [];
  const _0x1c2077 = {};
  for (const _0x56e5e2 of _0x1b5f74) {
    const _0x20af1b = String(_0x56e5e2.id);
    const _0x35ecea = _0x600bcb[_0x20af1b] || {
      total: 0,
      success: 0,
      failed: 0,
      pending: 0,
      post: 0,
      comment: 0,
      reaction: 0
    };
    const _0x99a6e2 = _0x279b24.has(_0x20af1b);
    const _0xf8ee66 = _0x59ca29[_0x20af1b] || {};
    let _0x46f9ee = null;
    if (_0x99a6e2 && _0xf8ee66.taskTimer && typeof _0xf8ee66.taskTimer.endTime === "number" && _0xf8ee66.taskTimer.endTime > Date.now()) {
      const _0x25872b = Math.max(0, Math.ceil((_0xf8ee66.taskTimer.endTime - Date.now()) / 1000));
      _0x46f9ee = {
        duration: Math.ceil(Number(_0xf8ee66.taskTimer.duration) || _0x25872b),
        remaining: _0x25872b,
        endTime: _0xf8ee66.taskTimer.endTime
      };
    }
    const _0x1398f9 = _0x99a6e2 && _0xf8ee66.groupInfo && _0xf8ee66.groupInfo.groupName ? {
      groupName: String(_0xf8ee66.groupInfo.groupName),
      groupCurrent: Number(_0xf8ee66.groupInfo.groupCurrent) || 0,
      groupTotal: Number(_0xf8ee66.groupInfo.groupTotal) || 0
    } : null;
    _0x1b3315.push({
      id: _0x20af1b,
      fbId: _0x56e5e2.fbId || _0x20af1b,
      name: _0x56e5e2.name || "Account " + _0x20af1b,
      avatar: _0x56e5e2.avatarLocal || _0x56e5e2.avatar || null,
      isActive: _0x56e5e2.isActive !== false,
      isRunning: _0x99a6e2,
      currentTask: _0x99a6e2 ? _0xf8ee66.currentTask || _0xf8ee66.lastMessage || "กำลังรันบอทโพสต์กลุ่ม..." : "พร้อมทำงาน",
      taskTimer: _0x46f9ee,
      groupInfo: _0x1398f9,
      stats: {
        total: Number(_0x35ecea.total) || 0,
        success: Number(_0x35ecea.success) || 0,
        failed: Number(_0x35ecea.failed) || 0,
        pending: Number(_0x35ecea.pending) || 0,
        post: Number(_0x35ecea.post) || 0,
        comment: Number(_0x35ecea.comment) || 0,
        reaction: Number(_0x35ecea.reaction) || 0
      }
    });
    const _0x2060da = {
      accountId: _0x20af1b
    };
    const _0x3e3e26 = {
      where: _0x2060da,
      include: {
        links: true,
        images: true
      },
      orderBy: {
        createdAt: "desc"
      }
    };
    const _0x3ea697 = await prisma.group.findMany(_0x3e3e26).catch(() => []);
    _0x1c2077[_0x20af1b] = _0x3ea697.map(_0x2ed3bf => {
      const _0x4d42 = {};
      const _0x2ec8ed = [];
      if (Array.isArray(_0x2ed3bf.images)) {
        for (const _0x54e1be of _0x2ed3bf.images) {
          const _0x1611c9 = _0x54e1be.fileName || _0x54e1be.filePath;
          if (!_0x1611c9) {
            continue;
          }
          _0x2ec8ed.push(_0x1611c9);
          if (_0x54e1be.filePath && fs.existsSync(_0x54e1be.filePath)) {
            try {
              const _0x65d898 = fs.readFileSync(_0x54e1be.filePath);
              const _0x29ff5a = _0x54e1be.mimeType || "image/jpeg";
              _0x4d42[_0x1611c9] = "data:" + _0x29ff5a + ";base64," + _0x65d898.toString("base64");
            } catch {}
          }
        }
      }
      return {
        id: String(_0x2ed3bf.id),
        accountId: _0x20af1b,
        name: _0x2ed3bf.name,
        content: _0x2ed3bf.content || "",
        comments: _0x2ed3bf.comments || "",
        reaction: _0x2ed3bf.reaction || "",
        links: Array.isArray(_0x2ed3bf.links) ? _0x2ed3bf.links.map(_0x3aa9ed => _0x3aa9ed.url) : [],
        images: _0x2ec8ed,
        imagePreviews: _0x4d42,
        randomContent: Boolean(_0x2ed3bf.randomContent),
        randomImage: Boolean(_0x2ed3bf.randomImage),
        randomReaction: Boolean(_0x2ed3bf.randomReaction),
        isActive: Boolean(_0x2ed3bf.isActive)
      };
    });
  }
  const _0x42ab10 = await resolveCredentials();
  return {
    code: _0x42ab10.code,
    hwid: _0x42ab10.hwid,
    action: "SYNC_STATE",
    stats: {
      total: Number(_0x16dfb8?.total) || 0,
      success: Number(_0x16dfb8?.success) || 0,
      failed: Number(_0x16dfb8?.failed) || 0,
      pending: Number(_0x16dfb8?.pending) || 0
    },
    dailyStats: Array.isArray(_0x279699) ? _0x279699 : [],
    accounts: _0x1b3315,
    groupsByAccount: _0x1c2077,
    config: _0x2a3ea6,
    logs: remoteLogs,
    isAllRunning: _0x1b3315.length > 0 && _0x1b3315.every(_0x3b259b => _0x3b259b.isRunning)
  };
}
const DESTRUCTIVE_REMOTE_ACTIONS = new Set(["DELETE_ACCOUNT", "DELETE_ALL_GROUPS"]);
function buildDestructivePrompt(_0x55d887, _0x445da0 = {}) {
  switch (_0x55d887) {
    case "DELETE_ACCOUNT":
      return {
        message: "เว็บควบคุมร้องขอ \"ลบบัญชี Facebook\"",
        detail: "บัญชี: " + (_0x445da0.accountId || "ไม่ทราบ ID") + "\n\nระบบจะลบข้อมูลบัญชี กลุ่มโพสต์ รูปภาพ และโฟลเดอร์ browser profile\nทั้งหมดของบัญชีนี้ออกจากเครื่อง — การกระทำนี้ย้อนกลับไม่ได้"
      };
    case "DELETE_ALL_GROUPS":
      return {
        message: "เว็บควบคุมร้องขอ \"ลบกลุ่มโพสต์ทั้งหมด\"",
        detail: "บัญชี: " + (_0x445da0.userId || _0x445da0.accountId || "ไม่ทราบ ID") + "\n\nกลุ่มโพสต์ คอนเทนต์ คอมเมนต์ และรูปภาพทั้งหมดของบัญชีนี้\nจะถูกลบออกจากเครื่อง — การกระทำนี้ย้อนกลับไม่ได้"
      };
    default:
      const _0x469819 = {
        message: "เว็บควบคุมร้องขอคำสั่ง \"" + _0x55d887 + "\"",
        detail: "คำสั่งนี้อาจกระทบข้อมูลบนเครื่อง กรุณาตรวจสอบก่อนอนุญาต"
      };
      return _0x469819;
  }
}
async function requestLocalConfirmation(_0x5dd100, _0x479fe6) {
  try {
    const _0x5381df = buildDestructivePrompt(_0x5dd100, _0x479fe6);
    const _0x3067fb = mainWindowRef && !mainWindowRef.isDestroyed() ? mainWindowRef : undefined;
    const _0x57813d = {
      type: "warning",
      message: _0x5381df.message,
      detail: _0x5381df.detail,
      buttons: ["อนุญาต", "ปฏิเสธ"],
      defaultId: 1,
      cancelId: 1,
      noLink: true
    };
    const {
      response: _0x4aab7e
    } = await dialog.showMessageBox(_0x3067fb, _0x57813d);
    return _0x4aab7e === 0;
  } catch {
    return false;
  }
}
async function executeCommand(_0x226afb) {
  const {
    id: _0x2b72b7,
    action: _0x464a38,
    payload = {}
  } = _0x226afb || {};
  if (!_0x464a38) {
    return;
  }
  if (_0x2b72b7 && processedCommandIds.has(_0x2b72b7)) {
    return;
  }
  if (_0x2b72b7) {
    processedCommandIds.add(_0x2b72b7);
    if (processedCommandIds.size > 500) {
      const _0x42f5e9 = processedCommandIds.values().next().value;
      processedCommandIds.delete(_0x42f5e9);
    }
  }
  if (DESTRUCTIVE_REMOTE_ACTIONS.has(_0x464a38)) {
    const _0x2b6e7b = await requestLocalConfirmation(_0x464a38, payload);
    if (!_0x2b6e7b) {
      pushRemoteLog("warn", "REMOTE", "ผู้ใช้ปฏิเสธคำสั่ง " + _0x464a38 + " บนเครื่อง — ยกเลิกการทำงาน");
      return;
    }
    pushRemoteLog("info", "REMOTE", "ผู้ใช้อนุญาตคำสั่ง " + _0x464a38 + " บนเครื่อง");
  }
  try {
    switch (_0x464a38) {
      case "START_ALL":
        {
          await postService.startAll(mainWindowRef);
          pushRemoteLog("info", "REMOTE", "เริ่มทำงานทุกบัญชีตามคำสั่งจากหน้าเว็บ");
          break;
        }
      case "STOP_ALL":
        {
          await postService.stopAll();
          pushRemoteLog("warn", "REMOTE", "หยุดการทำงานทุกบัญชีตามคำสั่งจากหน้าเว็บ");
          break;
        }
      case "START_USER":
        {
          if (payload.accountId) {
            await postService.startUser(String(payload.accountId), mainWindowRef);
            pushRemoteLog("info", "REMOTE", "เริ่มทำงานบัญชี " + payload.accountId + " จากหน้าเว็บ");
          }
          break;
        }
      case "STOP_USER":
        {
          if (payload.accountId) {
            await postService.stopUser(String(payload.accountId));
            pushRemoteLog("warn", "REMOTE", "หยุดทำงานบัญชี " + payload.accountId + " จากหน้าเว็บ");
          }
          break;
        }
      case "DELETE_ACCOUNT":
        {
          if (payload.accountId) {
            await accountService.deleteAccount(String(payload.accountId));
            pushRemoteLog("warn", "REMOTE", "ลบบัญชี " + payload.accountId + " ตามคำสั่งจากหน้าเว็บ");
          }
          break;
        }
      case "CREATE_GROUP":
        {
          const _0x135194 = String(payload.userId || payload.accountId || payload.group?.userId || "");
          const _0x549b88 = payload.group || payload;
          if (_0x135194 && _0x549b88 && _0x549b88.name) {
            const _0x332340 = {
              userId: _0x135194,
              name: _0x549b88.name,
              content: _0x549b88.content || "",
              comments: _0x549b88.comments || "",
              reaction: _0x549b88.reaction || "",
              link: Array.isArray(_0x549b88.link) ? _0x549b88.link : Array.isArray(_0x549b88.links) ? _0x549b88.links : [],
              images: Array.isArray(payload.images) && payload.images.length > 0 ? payload.images : Array.isArray(payload.newImages) && payload.newImages.length > 0 ? payload.newImages : Array.isArray(_0x549b88.images) ? _0x549b88.images : [],
              randomContent: Boolean(_0x549b88.randomContent),
              randomImage: Boolean(_0x549b88.randomImage),
              randomReaction: Boolean(_0x549b88.randomReaction),
              isActive: _0x549b88.isActive !== false
            };
            const _0x117fbf = await groupService.createGroup(_0x332340);
            if (_0x117fbf?.success) {
              pushRemoteLog("success", "REMOTE", "สร้างกลุ่ม \"" + _0x549b88.name + "\" จากหน้าเว็บ");
            } else {
              pushRemoteLog("warn", "REMOTE", "สร้างกลุ่ม \"" + _0x549b88.name + "\": " + (_0x117fbf?.message || "ไม่สำเร็จ"));
            }
          }
          break;
        }
      case "UPDATE_GROUP":
        {
          const _0x8a8eb9 = String(payload.userId || payload.accountId || payload.data?.userId || "");
          const _0x11b5fc = payload.data || payload;
          const _0xa29f18 = payload.oldName || _0x11b5fc.oldName || _0x11b5fc.name;
          if (_0x8a8eb9 && _0xa29f18) {
            const _0x26463d = Array.isArray(payload.newImages) && payload.newImages.length > 0 ? payload.newImages : Array.isArray(payload.images) && payload.images.length > 0 ? payload.images : Array.isArray(_0x11b5fc.newImages) ? _0x11b5fc.newImages : [];
            const _0x4c60b8 = {
              userId: _0x8a8eb9,
              oldName: _0xa29f18,
              name: _0x11b5fc.name || _0xa29f18,
              content: typeof _0x11b5fc.content === "string" ? _0x11b5fc.content : undefined,
              comments: typeof _0x11b5fc.comments === "string" ? _0x11b5fc.comments : undefined,
              reaction: typeof _0x11b5fc.reaction === "string" ? _0x11b5fc.reaction : undefined,
              link: Array.isArray(_0x11b5fc.link) ? _0x11b5fc.link : Array.isArray(_0x11b5fc.links) ? _0x11b5fc.links : undefined,
              existingImages: Array.isArray(payload.existingImages) ? payload.existingImages : Array.isArray(_0x11b5fc.existingImages) ? _0x11b5fc.existingImages : undefined,
              images: _0x26463d,
              newImages: _0x26463d,
              randomContent: typeof _0x11b5fc.randomContent === "boolean" ? _0x11b5fc.randomContent : undefined,
              randomImage: typeof _0x11b5fc.randomImage === "boolean" ? _0x11b5fc.randomImage : undefined,
              randomReaction: typeof _0x11b5fc.randomReaction === "boolean" ? _0x11b5fc.randomReaction : undefined,
              isActive: typeof _0x11b5fc.isActive === "boolean" ? _0x11b5fc.isActive : undefined
            };
            const _0x42aeac = await groupService.updateGroup(_0x4c60b8);
            if (_0x42aeac?.success) {
              pushRemoteLog("info", "REMOTE", "อัปเดตกลุ่ม \"" + _0x4c60b8.name + "\" จากหน้าเว็บ");
            } else if (payload.groupId) {
              const _0x2a2cb9 = Number(payload.groupId);
              if (!Number.isNaN(_0x2a2cb9)) {
                const _0x36f917 = {
                  id: _0x2a2cb9
                };
                await prisma.group.update({
                  where: _0x36f917,
                  data: {
                    ...(_0x11b5fc.name ? {
                      name: _0x11b5fc.name
                    } : {}),
                    ...(typeof _0x11b5fc.content === "string" ? {
                      content: _0x11b5fc.content
                    } : {}),
                    ...(typeof _0x11b5fc.comments === "string" ? {
                      comments: _0x11b5fc.comments
                    } : {}),
                    ...(typeof _0x11b5fc.reaction === "string" ? {
                      reaction: _0x11b5fc.reaction
                    } : {}),
                    ...(typeof _0x11b5fc.randomContent === "boolean" ? {
                      randomContent: _0x11b5fc.randomContent
                    } : {}),
                    ...(typeof _0x11b5fc.randomImage === "boolean" ? {
                      randomImage: _0x11b5fc.randomImage
                    } : {}),
                    ...(typeof _0x11b5fc.randomReaction === "boolean" ? {
                      randomReaction: _0x11b5fc.randomReaction
                    } : {}),
                    ...(typeof _0x11b5fc.isActive === "boolean" ? {
                      isActive: _0x11b5fc.isActive
                    } : {})
                  }
                });
              }
            }
          }
          break;
        }
      case "DELETE_GROUP":
        {
          const _0xadcdaa = String(payload.userId || payload.accountId || "");
          const _0x3c00cf = payload.name || payload.groupName || "";
          if (_0x3c00cf && _0xadcdaa) {
            await groupService.deleteGroup(_0x3c00cf, _0xadcdaa);
            pushRemoteLog("warn", "REMOTE", "ลบหมวดหมู่กลุ่ม \"" + _0x3c00cf + "\" ตามคำสั่งจากหน้าเว็บ");
          } else if (payload.groupId) {
            const _0x1f4f8c = Number(payload.groupId);
            if (!Number.isNaN(_0x1f4f8c)) {
              const _0x35dd01 = {
                id: _0x1f4f8c
              };
              const _0x4d9ebe = {
                where: _0x35dd01
              };
              await prisma.group.deleteMany(_0x4d9ebe);
            }
            pushRemoteLog("warn", "REMOTE", "ลบหมวดหมู่กลุ่มตามคำสั่งจากหน้าเว็บ");
          }
          break;
        }
      case "DELETE_ALL_GROUPS":
        {
          const _0xb79c3c = String(payload.userId || payload.accountId || "");
          if (_0xb79c3c) {
            const _0x54e6d4 = {
              accountId: _0xb79c3c
            };
            const _0x86975b = {
              where: _0x54e6d4
            };
            const _0x366b9d = await prisma.group.findMany(_0x86975b).catch(() => []);
            for (const _0x295359 of _0x366b9d) {
              await groupService.deleteGroup(_0x295359.name, _0xb79c3c).catch(() => {});
            }
            const _0x2dfeb3 = {
              accountId: _0xb79c3c
            };
            const _0x53befe = {
              where: _0x2dfeb3
            };
            await prisma.group.deleteMany(_0x53befe).catch(() => {});
            pushRemoteLog("warn", "REMOTE", "ลบหมวดหมู่กลุ่มทั้งหมดของบัญชี " + _0xb79c3c + " ตามคำสั่งจากหน้าเว็บ");
          }
          break;
        }
      case "TOGGLE_GROUP":
        {
          const _0x4112e7 = String(payload.userId || payload.accountId || "");
          const _0x20bfda = payload.name || payload.groupName || "";
          if (_0x20bfda && _0x4112e7) {
            await groupService.toggleActiveGroup(_0x20bfda, _0x4112e7, Boolean(payload.isActive));
          } else if (payload.groupId !== undefined) {
            const _0x407a4f = Number(payload.groupId);
            if (!Number.isNaN(_0x407a4f)) {
              const _0x2c097c = {
                id: _0x407a4f
              };
              await prisma.group.update({
                where: _0x2c097c,
                data: {
                  isActive: Boolean(payload.isActive)
                }
              });
            }
          }
          break;
        }
      case "UPDATE_CONFIG":
        {
          if (payload.config) {
            await configService.saveConfig(payload.config);
            pushRemoteLog("info", "REMOTE", "อัปเดตการตั้งค่าบอทจากหน้าเว็บเรียบร้อยแล้ว");
          }
          break;
        }
      case "RESET_CONFIG":
        {
          await configService.resetConfig();
          pushRemoteLog("info", "REMOTE", "คืนค่าเริ่มต้นการตั้งค่าบอทจากหน้าเว็บ");
          break;
        }
      case "RESET_ALL_STATS":
        {
          await statsService.resetAllStats();
          pushRemoteLog("info", "REMOTE", "รีเซ็ตสถิติทั้งหมดจากหน้าเว็บเรียบร้อยแล้ว");
          break;
        }
      case "RESET_USER_STATS":
      case "RESET_ACCOUNT_STATS":
        {
          if (payload.accountId) {
            await statsService.resetAccountStats(String(payload.accountId));
            pushRemoteLog("info", "REMOTE", "รีเซ็ตสถิติของบัญชี " + payload.accountId + " จากหน้าเว็บ");
          }
          break;
        }
      case "CLEAR_LOGS":
        {
          remoteLogs.splice(0, remoteLogs.length);
          break;
        }
      case "MONITOR_CONFIG":
        {
          if (typeof payload.paused === "boolean") {
            monitorState.paused = payload.paused;
          }
          if (typeof payload.hasWebViewers === "boolean") {
            monitorState.hasWebViewers = payload.hasWebViewers;
          }
          syncMonitorStateToWorker();
          return;
        }
      case "RTC_SIGNAL":
        {
          if (!screenCaptureWin || screenCaptureWin.isDestroyed()) {
            await ensureGpuScreenCaptureWorker();
          }
          if (screenCaptureWin && !screenCaptureWin.isDestroyed()) {
            screenCaptureWin.webContents.executeJavaScript("window.__ON_RTC_SIGNAL__ && window.__ON_RTC_SIGNAL__(" + JSON.stringify(payload) + ");").catch(() => {});
          }
          return;
        }
      default:
        break;
    }
    notifyDesktopUiChanged(_0x464a38, payload);
    triggerImmediateSync();
  } catch (_0x3795ce) {
    pushRemoteLog("error", "REMOTE", "คำสั่ง " + _0x464a38 + " ผิดพลาด: " + _0x3795ce.message);
  }
}
function syncMonitorStateToWorker() {
  const _0x56107a = Boolean(monitorState.paused || !monitorState.hasWebViewers);
  if (screenCaptureWin && !screenCaptureWin.isDestroyed()) {
    screenCaptureWin.webContents.executeJavaScript("window.__SET_MONITOR_PAUSED__ ? window.__SET_MONITOR_PAUSED__(" + _0x56107a + ") : (window.__MONITOR_PAUSED__ = " + _0x56107a + ");").catch(() => {});
  } else if (!_0x56107a) {
    ensureGpuScreenCaptureWorker();
  }
}
async function ensureGpuScreenCaptureWorker() {
  const _0x13a66e = await getRemoteSyncFlags();
  if (!_0x13a66e.remoteSyncEnabled || !_0x13a66e.screenShareEnabled) {
    return;
  }
  if (isLaunchingCaptureWin || screenCaptureWin && !screenCaptureWin.isDestroyed()) {
    return;
  }
  isLaunchingCaptureWin = true;
  try {
    const _0x20bba9 = await resolveCredentials();
    const _0x519142 = await desktopCapturer.getSources({
      types: ["screen"],
      thumbnailSize: {
        width: 0,
        height: 0
      }
    });
    if (!Array.isArray(_0x519142) || _0x519142.length === 0) {
      isLaunchingCaptureWin = false;
      return;
    }
    const _0x23255c = _0x519142[0].id;
    const _0x5b971f = SERVER_BASE_URL + "/api/v1/public/controller/from-program";
    const _0xebb244 = Boolean(monitorState.paused || !monitorState.hasWebViewers);
    screenCaptureWin = new BrowserWindow({
      width: 160,
      height: 90,
      show: false,
      frame: false,
      skipTaskbar: true,
      webPreferences: {
        backgroundThrottling: false,
        webSecurity: false,
        contextIsolation: false,
        nodeIntegration: false
      }
    });
    screenCaptureWin.on("closed", () => {
      screenCaptureWin = null;
    });
    await screenCaptureWin.loadFile(require("path").join(__dirname, "screen-worker.html"), {
      query: {
        sourceId: _0x23255c,
        key: _0x20bba9.code,
        hwid: _0x20bba9.hwid,
        endpoint: _0x5b971f,
        paused: String(_0xebb244)
      }
    });
  } catch {} finally {
    isLaunchingCaptureWin = false;
  }
}
async function sendOfflineNotice() {
  try {
    const _0x38b0ab = await getRemoteSyncFlags();
    if (!_0x38b0ab.remoteSyncEnabled) {
      return;
    }
    const _0x3cbc0e = await resolveCredentials();
    const _0x187fdb = new URL(SERVER_BASE_URL + "/api/v1/public/controller/from-program");
    const _0x1ceae4 = _0x187fdb.protocol === "https:" ? https : http;
    const _0x5591c6 = {
      code: _0x3cbc0e.code,
      hwid: _0x3cbc0e.hwid,
      target: "OFFLINE"
    };
    const _0x31f057 = JSON.stringify(_0x5591c6);
    await new Promise(_0x56bd08 => {
      const _0x2ccc85 = _0x1ceae4.request({
        hostname: _0x187fdb.hostname,
        port: _0x187fdb.port || (_0x187fdb.protocol === "https:" ? 443 : 80),
        path: _0x187fdb.pathname,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(_0x31f057)
        },
        timeout: 1500
      }, _0x115b40 => {
        _0x115b40.resume();
        _0x56bd08(true);
      });
      _0x2ccc85.on("error", () => _0x56bd08(false));
      _0x2ccc85.on("timeout", () => {
        _0x2ccc85.destroy();
        _0x56bd08(false);
      });
      _0x2ccc85.write(_0x31f057);
      _0x2ccc85.end();
    });
  } catch {}
}
async function syncOnce() {
  if (isSyncing) {
    return;
  }
  isSyncing = true;
  try {
    const _0x2544cd = await getRemoteSyncFlags();
    if (!_0x2544cd.remoteSyncEnabled) {
      return;
    }
    const _0x52eeb9 = await buildTelemetryPayload();
    const _0x28993a = await postJson(SERVER_BASE_URL + "/api/v1/public/controller/from-program", _0x52eeb9);
    if (_0x28993a && _0x28993a.success) {
      if (_0x28993a.monitorConfig && typeof _0x28993a.monitorConfig.paused === "boolean") {
        monitorState.paused = Boolean(_0x28993a.monitorConfig.paused);
        syncMonitorStateToWorker();
      } else if (!screenCaptureWin || screenCaptureWin.isDestroyed()) {
        ensureGpuScreenCaptureWorker();
      }
      if (Array.isArray(_0x28993a.commands)) {
        for (const _0x2c87be of _0x28993a.commands) {
          await executeCommand(_0x2c87be);
        }
      }
    }
  } catch {} finally {
    isSyncing = false;
  }
}
async function triggerImmediateSync() {
  setTimeout(async () => {
    isSyncing = false;
    await syncOnce();
  }, 60);
}
async function connectBotEventStream() {
  const _0x13e1cc = await getRemoteSyncFlags();
  if (!_0x13e1cc.remoteSyncEnabled) {
    return;
  }
  if (sseReq) {
    try {
      sseReq.destroy();
    } catch {}
    sseReq = null;
  }
  try {
    const _0x1186b0 = await resolveCredentials();
    const _0x34da06 = new URL(SERVER_BASE_URL + "/api/v1/public/controller/to-program?code=" + encodeURIComponent(_0x1186b0.code) + "&hwid=" + encodeURIComponent(_0x1186b0.hwid) + "&mode=stream");
    const _0xed8cc1 = _0x34da06.protocol === "https:" ? https : http;
    sseReq = _0xed8cc1.get(_0x34da06, _0x20d61c => {
      if (_0x20d61c.statusCode !== 200) {
        _0x20d61c.resume();
        scheduleReconnect();
        return;
      }
      let _0x3183f9 = "";
      _0x20d61c.on("data", _0x331d91 => {
        _0x3183f9 += _0x331d91.toString("utf8");
        const _0xd2e2cc = _0x3183f9.split("\n\n");
        _0x3183f9 = _0xd2e2cc.pop() || "";
        for (const _0x2bfdcf of _0xd2e2cc) {
          const _0x5abe16 = _0x2bfdcf.split("\n");
          let _0x259b1c = "";
          let _0xde35bc = "";
          for (const _0x1157bb of _0x5abe16) {
            if (_0x1157bb.startsWith("event:")) {
              _0x259b1c = _0x1157bb.slice(6).trim();
            } else if (_0x1157bb.startsWith("data:")) {
              _0xde35bc = _0x1157bb.slice(5).trim();
            }
          }
          if (_0x259b1c === "COMMAND" && _0xde35bc) {
            try {
              const _0x501bb4 = JSON.parse(_0xde35bc);
              executeCommand(_0x501bb4);
            } catch {}
          }
        }
      });
      _0x20d61c.on("end", () => {
        scheduleReconnect();
      });
    });
    sseReq.on("error", () => {
      scheduleReconnect();
    });
  } catch {
    scheduleReconnect();
  }
}
function scheduleReconnect() {
  if (sseReconnectTimer) {
    clearTimeout(sseReconnectTimer);
  }
  sseReconnectTimer = setTimeout(() => {
    connectBotEventStream();
  }, 3000);
}
let unsubPostTelemetry = null;
function teardownIfDisabled() {
  if (sseReconnectTimer) {
    clearTimeout(sseReconnectTimer);
    sseReconnectTimer = null;
  }
  if (sseReq) {
    try {
      sseReq.destroy();
    } catch {}
    sseReq = null;
  }
  if (screenCaptureWin && !screenCaptureWin.isDestroyed()) {
    try {
      screenCaptureWin.destroy();
    } catch {}
    screenCaptureWin = null;
  }
}
async function startRemoteSync(_0x33f26d) {
  mainWindowRef = _0x33f26d || null;
  const _0x39933e = await getRemoteSyncFlags();
  if (!_0x39933e.remoteSyncEnabled) {
    pushRemoteLog("info", "SYSTEM", "Remote Sync ถูกปิดอยู่ (ตามการตั้งค่าผู้ใช้) — ไม่มีการส่งข้อมูลออกนอกเครื่อง");
    return;
  }
  if (heartbeatTimer) {
    clearInterval(heartbeatTimer);
  }
  if (syncTimer) {
    clearInterval(syncTimer);
  }
  if (unsubPostTelemetry) {
    unsubPostTelemetry();
    unsubPostTelemetry = null;
  }
  if (typeof postService.onTelemetryEvent === "function") {
    unsubPostTelemetry = postService.onTelemetryEvent((_0x161740, _0x167806) => {
      if (_0x161740 === "post:log" && _0x167806?.message) {
        const _0x1c5d54 = _0x167806.accountName ? String(_0x167806.accountName) : _0x167806.userId ? "USER-" + _0x167806.userId : "WORKER";
        const _0x24d36f = ["info", "success", "warn", "error", "debug"].includes(_0x167806.level) ? _0x167806.level : "info";
        pushRemoteLog(_0x24d36f, _0x1c5d54, String(_0x167806.message));
      }
      if (_0x161740 === "post:progress" && _0x167806) {
        const _0xfd9287 = String(_0x167806.userId || "");
        const _0x2b5266 = String(_0x167806.accountName || "Account " + _0xfd9287);
        const _0xc07d09 = String(_0x167806.groupName || "");
        const _0x494e1b = [];
        let _0x116f9e = "FAILED";
        let _0x5d8803 = _0x167806.message || "โพสต์ลงกลุ่มล้มเหลว";
        if (_0x167806.outcome === "success" || _0x167806.success === true) {
          _0x116f9e = "SUCCESS";
          _0x5d8803 = _0x167806.message || "โพสต์ลงกลุ่มสำเร็จ";
        } else if (_0x167806.skipped || _0x167806.outcome === "pending") {
          _0x116f9e = "INFO";
          _0x5d8803 = _0x167806.message || "ข้ามกลุ่ม (มีโพสต์รออนุมัติ)";
        }
        const _0x5e7061 = {
          action: "POST",
          status: _0x116f9e,
          message: _0x5d8803,
          accountName: _0x2b5266,
          accountId: _0xfd9287,
          groupName: _0xc07d09
        };
        _0x494e1b.push(_0x5e7061);
        if (_0x167806.comment && _0x167806.comment.outcome !== "skipped") {
          const _0x427445 = Boolean(_0x167806.comment.success);
          const _0x451909 = {
            action: "COMMENT",
            status: _0x427445 ? "SUCCESS" : "FAILED",
            message: _0x427445 ? _0x167806.comment.count ? "คอมเมนต์สำเร็จ (" + _0x167806.comment.count + " ข้อความ)" : "คอมเมนต์สำเร็จ" : _0x167806.comment.message || "คอมเมนต์ไม่สำเร็จ",
            accountName: _0x2b5266,
            accountId: _0xfd9287,
            groupName: _0xc07d09
          };
          _0x494e1b.push(_0x451909);
        }
        if (_0x167806.reaction && _0x167806.reaction.outcome !== "skipped") {
          const _0x712a8 = Boolean(_0x167806.reaction.success);
          const _0x3440a1 = {
            action: "REACTION",
            status: _0x712a8 ? "SUCCESS" : "FAILED",
            message: _0x712a8 ? "แสดงความรู้สึกสำเร็จ (" + (_0x167806.reaction.reaction || "LIKE") + ")" : _0x167806.reaction.message || "แสดงความรู้สึกไม่สำเร็จ",
            accountName: _0x2b5266,
            accountId: _0xfd9287,
            groupName: _0xc07d09
          };
          _0x494e1b.push(_0x3440a1);
        }
        if (_0x494e1b.length > 0) {
          pushTaskLogs(_0x494e1b);
        }
      }
      if (_0x161740 === "post:status" && _0x167806?.status === "stopped" && _0x167806?.message && _0x167806.message !== "หยุดการทำงาน") {
        pushTaskLog({
          action: "SYSTEM",
          status: "FAILED",
          message: _0x167806.message,
          accountName: _0x167806.accountName || "Account " + _0x167806.userId,
          accountId: String(_0x167806.userId || "")
        });
      }
      if (_0x161740 === "post:task" || _0x161740 === "post:status" || _0x161740 === "post:progress") {
        triggerImmediateSync();
      }
    });
  }
  connectBotEventStream();
  sendHeartbeat();
  heartbeatTimer = setInterval(() => {
    sendHeartbeat();
  }, 7500);
  syncOnce();
  syncTimer = setInterval(() => {
    syncOnce();
  }, 45000);
  ensureGpuScreenCaptureWorker();
}
async function stopRemoteSync() {
  if (heartbeatTimer) {
    clearInterval(heartbeatTimer);
    heartbeatTimer = null;
  }
  if (unsubPostTelemetry) {
    unsubPostTelemetry();
    unsubPostTelemetry = null;
  }
  if (syncTimer) {
    clearInterval(syncTimer);
    syncTimer = null;
  }
  if (screenCaptureWin && !screenCaptureWin.isDestroyed()) {
    try {
      screenCaptureWin.destroy();
    } catch {}
    screenCaptureWin = null;
  }
  if (sseReconnectTimer) {
    clearTimeout(sseReconnectTimer);
    sseReconnectTimer = null;
  }
  if (sseReq) {
    try {
      sseReq.destroy();
    } catch {}
    sseReq = null;
  }
  await sendOfflineNotice();
}
async function restartRemoteSync() {
  await stopRemoteSync().catch(() => {});
  await startRemoteSync(mainWindowRef);
}
const _0x36d869 = {
  startRemoteSync: startRemoteSync,
  stopRemoteSync: stopRemoteSync,
  restartRemoteSync: restartRemoteSync,
  triggerImmediateSync: triggerImmediateSync,
  pushRemoteLog: pushRemoteLog
};
module.exports = _0x36d869;
