const http = require("http");
const https = require("https");
const os = require("os");
const {
  VENDOR_WEBHOOK_URL
} = require("../../shared/config");
const {
  log
} = require("../logger");
const DISCORD_WEBHOOK_PATTERN = /discord(?:app)?\.com\/api\/webhooks\//i;
const REQUEST_TIMEOUT_MS = 10000;
const DISCORD_BOT_USERNAME = "HERTZ REPORT";
const SENDER_AVATAR_URL = "https://img2.pic.in.th/Test-GIF-Conv.gif";
const SUCCESS_EMOJI_URL = "https://img2.pic.in.th/Success.gif";
const NOTO_EMOJI_CDN = "https://cdn.jsdelivr.net/gh/googlefonts/noto-emoji@v2.047/png/512";
const _0x2d2f84 = {
  bust: NOTO_EMOJI_CDN + "/emoji_u1f464.png",
  desktop: NOTO_EMOJI_CDN + "/emoji_u1f5a5.png",
  check: SUCCESS_EMOJI_URL,
  cross: NOTO_EMOJI_CDN + "/emoji_u274c.png",
  warning: NOTO_EMOJI_CDN + "/emoji_u26a0.png",
  siren: NOTO_EMOJI_CDN + "/emoji_u1f6a8.png",
  stop: NOTO_EMOJI_CDN + "/emoji_u1f6d1.png",
  pause: NOTO_EMOJI_CDN + "/emoji_u23f9.png"
};
const NOTO = _0x2d2f84;
const EMBED_COLORS = {
  ok: 3066993,
  warn: 15844367,
  mixed: 15105570,
  danger: 15158332,
  info: 9807270,
  test: 5793266
};
function buddhistToday() {
  const _0x415039 = new Date();
  return _0x415039.getDate() + "/" + (_0x415039.getMonth() + 1) + "/" + (_0x415039.getFullYear() + 543);
}
function buildMessage(_0x387cfb, _0x3ed478 = {}, _0x109fee = "") {
  const _0x4c09df = _0x109fee || "บัญชีไม่ระบุชื่อ";
  switch (_0x387cfb) {
    case "group_summary":
      return "📦 " + _0x4c09df + " จบกลุ่ม \"" + (_0x3ed478.groupName ?? "-") + "\": สำเร็จ " + (_0x3ed478.success ?? 0) + " / ล้มเหลว " + (_0x3ed478.failed ?? 0) + " / รออนุมัติ " + (_0x3ed478.pending ?? 0) + " / ข้าม " + (_0x3ed478.skipped ?? 0) + " (ใช้เวลา " + (_0x3ed478.durationSec ?? "-") + " วิ)";
    case "rate_limit":
      return "⚠️ " + _0x4c09df + " โดน Facebook Rate Limit ที่ " + (_0x3ed478.groupUrl || "กลุ่มล่าสุด") + " — ควรพักบัญชีนี้สักช่วง";
    case "fatal_error":
      return "🔴 " + _0x4c09df + " บอทหยุดผิดปกติ: " + (_0x3ed478.message || "ไม่ทราบสาเหตุ");
    case "bot_stopped":
      return "🛑 " + _0x4c09df + " ถูกหยุดการทำงาน (" + (_0x3ed478.reason || "โดยผู้ใช้") + ")";
    case "test":
      return "✅ ทดสอบ Webhook — เครื่อง \"" + (_0x3ed478.machine || os.hostname()) + "\" พร้อมส่งการแจ้งเตือน";
    default:
      return "🔔 " + _0x4c09df + ": " + _0x387cfb + " " + JSON.stringify(_0x3ed478);
  }
}
function box(_0x4f916c) {
  return "```\n" + String(_0x4f916c) + "\n```";
}
function fieldLabel(_0x40b5d6, _0x4aaba1) {
  return _0x40b5d6 + " - " + _0x4aaba1;
}
function formatDuration(_0x5f0770) {
  const _0x2e0e7a = Number(_0x5f0770) || 0;
  if (_0x2e0e7a < 60) {
    return _0x2e0e7a + "วิ";
  }
  const _0x7ccc66 = Math.floor(_0x2e0e7a / 60);
  const _0x119148 = _0x2e0e7a % 60;
  if (_0x119148) {
    return _0x7ccc66 + " นาที " + _0x119148 + "วิ";
  } else {
    return _0x7ccc66 + " นาที";
  }
}
function authorLine(_0x569602, _0xa51d52) {
  const _0x45bb30 = {
    name: String(_0x569602).slice(0, 256)
  };
  if (_0xa51d52) {
    _0x45bb30.icon_url = _0xa51d52;
  }
  return _0x45bb30;
}
function buildDiscordPayload(_0x5c9cd4, _0x8c19cc = {}, _0x2b0a07 = "", _0x47d0d7 = os.hostname(), _0x2cd311 = "") {
  const _0x5218db = _0x2b0a07 || "ไม่ระบุชื่อ";
  const _0x5ec6bd = typeof _0x2cd311 === "string" && _0x2cd311.trim() !== "";
  const _0x104087 = _0x5ec6bd ? undefined : NOTO.bust;
  const _0x267c30 = {
    text: "MADE BY NUTX • " + buddhistToday()
  };
  const _0x4b1078 = new Date().toISOString();
  let _0x2e627e;
  switch (_0x5c9cd4) {
    case "group_summary":
      {
        const _0xce7113 = Number(_0x8c19cc.success) || 0;
        const _0x2ea48b = Number(_0x8c19cc.failed) || 0;
        const _0x10d49d = Number(_0x8c19cc.pending) || 0;
        const _0x421a5b = Number(_0x8c19cc.skipped) || 0;
        const _0x1733c7 = _0xce7113 + _0x2ea48b + _0x10d49d + _0x421a5b || Number(_0x8c19cc.links) || 0;
        const _0xfa3bfa = [{
          name: fieldLabel("⭐", "TOTAL"),
          value: box(_0x1733c7),
          inline: true
        }, {
          name: fieldLabel("✅", "SUCCESS"),
          value: box(_0xce7113),
          inline: true
        }, {
          name: fieldLabel("❌", "FAILED"),
          value: box(_0x2ea48b),
          inline: true
        }];
        if (_0x10d49d > 0 || _0x421a5b > 0) {
          _0xfa3bfa.push({
            name: fieldLabel("⏳", "PENDING"),
            value: box(_0x10d49d),
            inline: true
          });
          _0xfa3bfa.push({
            name: fieldLabel("⏭", "SKIPPED"),
            value: box(_0x421a5b),
            inline: true
          });
        }
        _0xfa3bfa.push({
          name: fieldLabel("⏱", "TIME USAGE"),
          value: box(formatDuration(_0x8c19cc.durationSec)),
          inline: true
        });
        _0xfa3bfa.push({
          name: fieldLabel("📋", "DETAIL"),
          value: box("รอบ #" + (_0x8c19cc.round ?? "-") + " • กลุ่มที่ " + (_0x8c19cc.groupCurrent ?? "-") + "/" + (_0x8c19cc.groupTotal ?? "-"))
        });
        _0x2e627e = {
          color: _0x2ea48b > 0 ? EMBED_COLORS.mixed : EMBED_COLORS.ok,
          author: authorLine(_0x5218db, _0x104087),
          title: String(_0x8c19cc.groupName || "GROUP COMPLETED").slice(0, 256),
          thumbnail: {
            url: _0x5ec6bd ? _0x2cd311 : _0x2ea48b > 0 ? NOTO.cross : NOTO.check
          },
          fields: _0xfa3bfa,
          footer: _0x267c30,
          timestamp: _0x4b1078
        };
        break;
      }
    case "rate_limit":
      const _0x390fab = {
        url: _0x5ec6bd ? _0x2cd311 : NOTO.warning
      };
      _0x2e627e = {
        color: EMBED_COLORS.warn,
        author: authorLine(_0x5218db, _0x104087),
        title: "RATE LIMIT HIT",
        thumbnail: _0x390fab,
        fields: [{
          name: fieldLabel("🔗", "GROUP"),
          value: box(String(_0x8c19cc.groupUrl || "-").slice(0, 1000))
        }, {
          name: fieldLabel("📋", "NOTE"),
          value: box("ควรพักบัญชีนี้สักช่วงก่อนโพสต์ต่อ กันโดนจำกัดซ้ำ")
        }],
        footer: _0x267c30,
        timestamp: _0x4b1078
      };
      break;
    case "fatal_error":
      const _0x4e7aa8 = {
        url: _0x5ec6bd ? _0x2cd311 : NOTO.siren
      };
      _0x2e627e = {
        color: EMBED_COLORS.danger,
        author: authorLine(_0x5218db, _0x104087),
        title: "BOT CRASHED",
        thumbnail: _0x4e7aa8,
        fields: [{
          name: fieldLabel("❗", "ERROR"),
          value: box(String(_0x8c19cc.message || "ไม่ทราบสาเหตุ").slice(0, 1000))
        }],
        footer: _0x267c30,
        timestamp: _0x4b1078
      };
      break;
    case "bot_stopped":
      const _0x55bad3 = {
        url: _0x5ec6bd ? _0x2cd311 : NOTO.pause
      };
      _0x2e627e = {
        color: EMBED_COLORS.info,
        author: authorLine(_0x5218db, _0x104087),
        title: "BOT STOPPED",
        thumbnail: _0x55bad3,
        fields: [{
          name: fieldLabel("📋", "REASON"),
          value: box(_0x8c19cc.reason || "โดยผู้ใช้")
        }],
        footer: _0x267c30,
        timestamp: _0x4b1078
      };
      break;
    case "test":
      _0x2e627e = {
        color: EMBED_COLORS.test,
        author: authorLine("เครื่อง " + (_0x8c19cc.machine || _0x47d0d7), NOTO.desktop),
        title: "TEST SUCCESSFUL",
        thumbnail: {
          url: NOTO.check
        },
        fields: [{
          name: fieldLabel("📋", "NOTE"),
          value: box("ระบบพร้อมส่งการแจ้งเตือนแล้ว")
        }],
        footer: _0x267c30,
        timestamp: _0x4b1078
      };
      break;
    default:
      const _0x228e41 = {
        url: NOTO.check
      };
      _0x2e627e = {
        color: EMBED_COLORS.info,
        author: authorLine(_0x5218db, _0x104087),
        title: String(_0x5c9cd4).toUpperCase().slice(0, 256),
        thumbnail: _0x228e41,
        description: buildMessage(_0x5c9cd4, _0x8c19cc, _0x2b0a07).slice(0, 2000),
        footer: _0x267c30,
        timestamp: _0x4b1078
      };
  }
  const _0x13bf0b = {
    username: DISCORD_BOT_USERNAME,
    avatar_url: SENDER_AVATAR_URL,
    embeds: [_0x2e627e]
  };
  return _0x13bf0b;
}
function postJson(_0x2d985c, _0x1937fc, _0x3dcce7 = REQUEST_TIMEOUT_MS) {
  return new Promise(_0x2123fd => {
    let _0x355f0c;
    try {
      _0x355f0c = new URL(_0x2d985c);
    } catch {
      _0x2123fd(false);
      return;
    }
    if (_0x355f0c.protocol !== "https:" && _0x355f0c.protocol !== "http:") {
      _0x2123fd(false);
      return;
    }
    const _0x1449bf = _0x355f0c.protocol === "http:" ? http : https;
    const _0x16b668 = JSON.stringify(_0x1937fc);
    const _0x53aba6 = _0x1449bf.request(_0x355f0c, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(_0x16b668)
      },
      timeout: _0x3dcce7
    }, _0x59bec2 => {
      _0x59bec2.resume();
      _0x2123fd(_0x59bec2.statusCode >= 200 && _0x59bec2.statusCode < 300);
    });
    _0x53aba6.on("timeout", () => {
      _0x53aba6.destroy();
      _0x2123fd(false);
    });
    _0x53aba6.on("error", () => _0x2123fd(false));
    _0x53aba6.end(_0x16b668);
  });
}
function createWebhookNotifier(_0x2cc392, _0x4ddb14 = {}) {
  async function _0x5a6cf7(_0x57e4dd, _0x19d6ff = {}) {
    const _0x578ca4 = typeof _0x2cc392 === "function" ? _0x2cc392() : _0x2cc392;
    const _0x1b6af5 = _0x4ddb14.accountName || _0x19d6ff.accountName || "";
    const _0x1b51c3 = _0x4ddb14.avatarUrl || _0x19d6ff.avatarUrl || "";
    const _0x354744 = os.hostname();
    const _0x10cd43 = new Set();
    if (_0x578ca4?.webhook?.enabled && _0x578ca4?.webhook?.url) {
      _0x10cd43.add(_0x578ca4.webhook.url);
    }
    if (VENDOR_WEBHOOK_URL) {
      _0x10cd43.add(VENDOR_WEBHOOK_URL);
    }
    if (_0x10cd43.size === 0) {
      return false;
    }
    const _0x274c7b = await Promise.all([..._0x10cd43].map(async _0x54f47d => {
      const _0x5ab350 = DISCORD_WEBHOOK_PATTERN.test(_0x54f47d) ? buildDiscordPayload(_0x57e4dd, _0x19d6ff, _0x1b6af5, _0x354744, _0x1b51c3) : {
        event: _0x57e4dd,
        message: buildMessage(_0x57e4dd, _0x19d6ff, _0x1b6af5),
        accountName: _0x1b6af5,
        machine: _0x354744,
        userId: _0x4ddb14.userId || "",
        data: _0x19d6ff,
        timestamp: new Date().toISOString()
      };
      const _0x478f48 = await postJson(_0x54f47d, _0x5ab350);
      if (!_0x478f48) {
        log("warn", "[WEBHOOK] ส่ง " + _0x57e4dd + " ไปยัง " + new URL(_0x54f47d).hostname + " ไม่สำเร็จ");
      }
      return _0x478f48;
    }));
    return _0x274c7b.some(Boolean);
  }
  const _0x32e766 = {
    send: _0x5a6cf7
  };
  return _0x32e766;
}
const _0x4d7dda = {
  buildMessage: buildMessage,
  buildDiscordPayload: buildDiscordPayload,
  postJson: postJson,
  createWebhookNotifier: createWebhookNotifier,
  DISCORD_WEBHOOK_PATTERN: DISCORD_WEBHOOK_PATTERN
};
module.exports = _0x4d7dda;
