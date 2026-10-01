const {
  chromium
} = require("playwright");
const fs = require("fs");
const path = require("path");
const {
  BASE_DIR,
  TEMP_PROFILE_DIR,
  FACEBOOK_URLS,
  SELECTORS_LOGIN,
  SELECTORS_PROFILE,
  ensureBaseDir,
  ensureUserDir,
  getUserAvatarPath,
  getUserProfilePath,
  getUserBrowserProfileDir
} = require("../config/path");
const {
  getChromiumPath,
  getRealUserAgent
} = require("../utils/chrome");
const {
  log,
  onLog
} = require("../logger");
const {
  applyStealthToContext
} = require("../detect/stealth");
function prepareTempProfile(_0x57621c) {
  if (fs.existsSync(_0x57621c)) {
    try {
      fs.rmSync(_0x57621c, {
        recursive: true,
        force: true
      });
    } catch (_0x8fb5ae) {
      log("warn", "[LOGIN] ไม่สามารถลบ temp profile เก่าได้: " + _0x8fb5ae.message);
    }
  }
}
async function getContextPage(_0x3661b8) {
  const _0x40a75c = _0x3661b8.pages();
  if (_0x40a75c.length > 0) {
    return _0x40a75c[0];
  }
  return _0x3661b8.newPage();
}
async function openFacebookLoginPage(_0x2f3a28) {
  await _0x2f3a28.goto(FACEBOOK_URLS.login, {
    waitUntil: "domcontentloaded"
  });
}
async function launchBrowser(_0x39bda6, _0x476745 = []) {
  ensureBaseDir();
  const _0x476103 = getChromiumPath();
  const _0x2b149a = {
    headless: false,
    viewport: null,
    executablePath: _0x476103,
    args: ["--disable-blink-features=AutomationControlled", "--test-type", ..._0x476745],
    ignoreDefaultArgs: ["--enable-automation"]
  };
  const _0x34ef1 = _0x2b149a;
  const _0x1baeae = getRealUserAgent(_0x476103);
  if (_0x1baeae) {
    _0x34ef1.userAgent = _0x1baeae;
  }
  const _0x5d42c0 = await chromium.launchPersistentContext(_0x39bda6, _0x34ef1);
  await applyStealthToContext(_0x5d42c0, "hertz-login");
  return _0x5d42c0;
}
async function waitForLogin(_0xa394e4, _0xc92d7b = {}) {
  const _0x4c472e = _0xc92d7b.existingPage ?? (await getContextPage(_0xa394e4));
  if (!_0xc92d7b.existingPage) {
    await openFacebookLoginPage(_0x4c472e);
  }
  const _0x586e55 = _0xc92d7b.timeoutMs || 300000;
  const _0xa6e36f = Date.now();
  const _0x2ca3ba = {};
  const _0x4186eb = /facebook\.com\/(login(\.php|\/?([?#]|$))|checkpoint|captcha|recover|identity)/;
  while (true) {
    if (Date.now() - _0xa6e36f > _0x586e55) {
      throw new Error("[LOGIN] หมดเวลา — การเข้าสู่ระบบเกิน 5 นาที");
    }
    const _0x2a19b2 = await _0xa394e4.cookies();
    const _0x3e3fbe = _0x2a19b2.find(_0x48565d => _0x48565d.name === "c_user");
    if (_0x3e3fbe) {
      const _0x5338ed = _0x4c472e.url();
      _0x2ca3ba[_0x5338ed] = (_0x2ca3ba[_0x5338ed] || 0) + 1;
      if (_0x2ca3ba[_0x5338ed] >= 4) {
        throw new Error("[LOGIN] ตรวจพบ Redirect loop ที่: " + _0x5338ed);
      }
      if (_0x5338ed.includes("save-device")) {
        try {
          const _0x332e13 = _0x4c472e.locator(SELECTORS_PROFILE.saveDeviceDismiss).first();
          await _0x332e13.waitFor({
            state: "visible",
            timeout: 2000
          });
          await _0x332e13.click();
          log("info", "[LOGIN] ปิดหน้าต่างแจ้งเตือนบันทึกอุปกรณ์ (save-device)");
        } catch {}
        await new Promise(_0x3b934f => setTimeout(_0x3b934f, 1000));
        continue;
      }
      if (!_0x4186eb.test(_0x5338ed)) {
        await _0x4c472e.waitForTimeout(3000);
        const _0x5765f0 = {
          userId: _0x3e3fbe.value,
          page: _0x4c472e
        };
        return _0x5765f0;
      }
      log("info", "[LOGIN] พบคุกกี้ c_user แล้ว แต่เบราว์เซอร์ยังอยู่ที่: " + _0x5338ed);
    }
    await new Promise(_0x2d40d8 => setTimeout(_0x2d40d8, 2000));
  }
}
async function extractProfileData(_0x51831f, _0x19e1df) {
  try {
    await _0x51831f.goto(FACEBOOK_URLS.profile, {
      waitUntil: "domcontentloaded"
    });
    try {
      const _0x5c9d38 = await _0x51831f.waitForSelector(SELECTORS_PROFILE.closeBtn, {
        timeout: 3000
      });
      await _0x5c9d38.click();
    } catch {}
    try {
      await _0x51831f.waitForSelector(SELECTORS_PROFILE.mainContainer, {
        state: "attached",
        timeout: 15000
      });
    } catch (_0xf7ed16) {
      log("warn", "[LOGIN] รอ Selector timeout แต่จะพยายามดึงข้อมูลต่อ: " + _0xf7ed16.message);
    }
    const _0x416d3d = await _0x51831f.evaluate(() => {
      const _0x4c03e4 = _0x4d6fd1 => (_0x4d6fd1 || "").replace(/\u00a0/g, " ").trim();
      const _0x20c1bb = document.querySelector("div[role=\"main\"]") || document.body;
      let _0x42d704 = null;
      const _0x278bb4 = _0x20c1bb.querySelector("a[href*=\"friends_all\"]") || _0x20c1bb.querySelector("a[href*=\"/friends\"]");
      if (_0x278bb4) {
        let _0x3cebd8 = _0x278bb4;
        for (let _0x590cbd = 0; _0x590cbd < 8 && _0x3cebd8 && !_0x42d704; _0x590cbd++) {
          _0x3cebd8 = _0x3cebd8.parentElement;
          if (!_0x3cebd8) {
            break;
          }
          const _0x31dccd = _0x3cebd8.querySelector("[role=\"button\"]");
          const _0x4e073 = _0x4c03e4(_0x31dccd?.innerText);
          if (_0x4e073 && _0x4e073.length <= 80 && _0x4e073 !== "Facebook" && !_0x4e073.includes("เข้าสู่ระบบ") && !_0x4e073.includes("Log in") && !/^(add|edit|share|see|follow|message|unfollow|สร้าง|เพิ่ม|แก้ไข|แชร์|ดู|ติดตาม|ส่งข้อความ)/i.test(_0x4e073)) {
            _0x42d704 = _0x4e073;
          }
        }
      }
      if (!_0x42d704) {
        const _0x2a368f = document.querySelector("[role=\"main\"] span[dir=\"auto\"] div[role=\"button\"][tabindex=\"0\"]") || document.querySelector("span[dir=\"auto\"] div[role=\"button\"][tabindex=\"0\"]") || document.querySelector("span[dir=\"auto\"] div[role=\"button\"]") || document.querySelector("span[dir=\"auto\"]");
        const _0x5ed393 = _0x4c03e4(_0x2a368f?.innerText);
        if (_0x5ed393 && _0x5ed393.length <= 80 && _0x5ed393 !== "Facebook" && !_0x5ed393.includes("เข้าสู่ระบบ") && !_0x5ed393.includes("Log in")) {
          _0x42d704 = _0x5ed393;
        }
      }
      let _0xb49d8f = null;
      for (const _0x3c27d0 of _0x20c1bb.querySelectorAll("svg image")) {
        const _0x1e1d49 = _0x3c27d0.getAttribute("xlink:href") || _0x3c27d0.getAttribute("href");
        if (_0x1e1d49 && _0x1e1d49.includes("scontent")) {
          _0xb49d8f = _0x1e1d49;
          break;
        }
      }
      if (!_0xb49d8f) {
        const _0x54bae9 = document.querySelector("svg[aria-label=\"การดำเนินการกับรูปโปรไฟล์\"] image, svg[aria-label=\"Profile picture actions\"] image, svg[aria-label=\"รูปโปรไฟล์\"] image, svg[aria-label=\"Profile picture\"] image, svg[aria-label*=\"รูปโปรไฟล์\" i] image, svg[aria-label*=\"Profile picture\" i] image");
        _0xb49d8f = _0x54bae9?.getAttribute("xlink:href") || _0x54bae9?.getAttribute("href") || null;
      }
      if (!_0xb49d8f) {
        const _0x3fdbfb = Array.from(document.querySelectorAll("svg image"));
        for (const _0x7bf1c4 of _0x3fdbfb) {
          const _0xcd8e7a = _0x7bf1c4.getAttribute("xlink:href") || _0x7bf1c4.getAttribute("href");
          if (_0xcd8e7a && (_0xcd8e7a.includes("profile") || _0xcd8e7a.includes("scontent"))) {
            _0xb49d8f = _0xcd8e7a;
            break;
          }
        }
      }
      const _0x4347af = window.location.href;
      let _0x136dd8 = null;
      const _0x5d8e57 = _0x20c1bb.querySelector("a[href*=\"profile_edit_entry_point\"]");
      const _0x69a5a6 = (_0x5d8e57?.getAttribute("href") || "").match(/[?&]id=(\d+)/);
      if (_0x69a5a6) {
        _0x136dd8 = _0x69a5a6[1];
      }
      if (!_0x136dd8) {
        const _0x97eaa6 = document.documentElement.innerHTML.match(/"userID":"(\d+)"/);
        if (_0x97eaa6) {
          _0x136dd8 = _0x97eaa6[1];
        }
      }
      if (!_0x136dd8) {
        const _0x4d6294 = document.querySelector("meta[property=\"al:android:url\"], meta[property=\"al:ios:url\"]");
        if (_0x4d6294) {
          const _0x50b426 = _0x4d6294.getAttribute("content") || "";
          const _0x10e962 = _0x50b426.match(/(?:profile\/|page\/|\?id=)(\d+)/);
          if (_0x10e962) {
            _0x136dd8 = _0x10e962[1];
          }
        }
      }
      if (!_0x136dd8) {
        const _0x49dea2 = new URLSearchParams(window.location.search);
        _0x136dd8 = _0x49dea2.get("id");
      }
      if (!_0x136dd8) {
        const _0xe44b9d = document.documentElement.innerHTML;
        const _0x696c97 = _0xe44b9d.match(/"delegate_page"\s*:\s*\{\s*"id"\s*:\s*"(\d+)"/);
        if (_0x696c97) {
          _0x136dd8 = _0x696c97[1];
        } else {
          const _0xaf0cef = _0xe44b9d.match(/"pageID"\s*:\s*"(\d+)"/);
          if (_0xaf0cef) {
            _0x136dd8 = _0xaf0cef[1];
          }
        }
      }
      if (!_0x42d704 && !_0xb49d8f) {
        return null;
      }
      const _0x5f9b8e = {
        name: _0x42d704,
        avatar: _0xb49d8f,
        profile: _0x4347af,
        id: _0x136dd8
      };
      return _0x5f9b8e;
    });
    return normalizeProfileData(_0x416d3d, _0x19e1df);
  } catch (_0x442c8b) {
    log("error", "[LOGIN] เกิดข้อผิดพลาดในการดึง Profile: " + _0x442c8b.message);
    return normalizeProfileData(null, _0x19e1df);
  }
}
function normalizeProfileData(_0x218d41, _0x506c11) {
  const _0x9915a2 = {
    name: _0x506c11 ? "User " + _0x506c11 : "Facebook User",
    profile: _0x506c11 ? "https://www.facebook.com/profile.php?id=" + _0x506c11 : FACEBOOK_URLS.profile,
    avatar: null,
    fbId: _0x506c11
  };
  const _0x4c3aa1 = _0x9915a2;
  if (!_0x218d41) {
    return _0x4c3aa1;
  }
  return {
    name: _0x218d41.name && String(_0x218d41.name).trim() || _0x4c3aa1.name,
    profile: _0x218d41.profile || _0x4c3aa1.profile,
    avatar: _0x218d41.avatar || _0x4c3aa1.avatar,
    fbId: _0x218d41.id || _0x506c11
  };
}
async function downloadAvatar(_0x41a1e9, _0x9fa80c, _0x251744) {
  if (!_0x41a1e9 || !_0x251744?.avatar?.startsWith("http")) {
    return;
  }
  ensureUserDir(_0x9fa80c);
  try {
    const _0x4847b0 = getUserAvatarPath(_0x9fa80c);
    const _0x1ced0a = await _0x41a1e9.context().request.get(_0x251744.avatar);
    if (_0x1ced0a.ok()) {
      const _0x13e2f4 = await _0x1ced0a.body();
      fs.writeFileSync(_0x4847b0, _0x13e2f4);
      log("info", "[LOGIN] บันทึกรูปโปรไฟล์เรียบร้อย: " + _0x4847b0);
    } else {
      log("warn", "[LOGIN] ดาวน์โหลดรูปโปรไฟล์ไม่สำเร็จ (HTTP Status " + _0x1ced0a.status() + ")");
    }
  } catch (_0x5db325) {
    log("warn", "[LOGIN] เกิดข้อผิดพลาดขณะดาวน์โหลดรูปภาพ: " + _0x5db325.message);
  }
}
async function renameWithRetry(_0x34bc84, _0x5138e9, _0x2a8acc = 15, _0x2735b5 = 500) {
  for (let _0x2738c6 = 0; _0x2738c6 < _0x2a8acc; _0x2738c6++) {
    try {
      if (fs.existsSync(_0x5138e9)) {
        fs.rmSync(_0x5138e9, {
          recursive: true,
          force: true
        });
      }
      fs.renameSync(_0x34bc84, _0x5138e9);
      return;
    } catch (_0x45b0ee) {
      if (_0x2738c6 === _0x2a8acc - 1) {
        throw _0x45b0ee;
      }
      await new Promise(_0x18c30c => setTimeout(_0x18c30c, _0x2735b5));
    }
  }
}
async function saveUserFiles(_0x216265, _0x5d6078, _0x5e3232) {
  const _0x4a72b1 = getUserBrowserProfileDir(_0x216265);
  try {
    ensureUserDir(_0x216265);
    if (fs.existsSync(_0x5e3232)) {
      await renameWithRetry(_0x5e3232, _0x4a72b1);
    }
    const _0x190910 = getUserProfilePath(_0x216265);
    const _0x2bf02c = _0x5d6078 || normalizeProfileData(null, _0x216265);
    fs.writeFileSync(_0x190910, JSON.stringify(_0x2bf02c, null, 2), "utf-8");
    log("success", "[LOGIN] บันทึกข้อมูลบัญชีลงไฟล์: " + _0x190910);
    try {
      const {
        prisma: _0x5ef46a
      } = require("../../electron/db");
      const _0x4c64aa = getUserAvatarPath(_0x216265);
      await _0x5ef46a.account.upsert({
        where: {
          id: String(_0x216265)
        },
        create: {
          id: String(_0x216265),
          name: _0x2bf02c.name || "User " + _0x216265,
          profileUrl: _0x2bf02c.profile || "https://www.facebook.com/" + _0x216265,
          avatarUrl: _0x2bf02c.avatar || null,
          avatarPath: fs.existsSync(_0x4c64aa) ? _0x4c64aa : null,
          sessionPath: _0x4a72b1,
          isActive: true
        },
        update: {
          name: _0x2bf02c.name || "User " + _0x216265,
          profileUrl: _0x2bf02c.profile || "https://www.facebook.com/" + _0x216265,
          avatarUrl: _0x2bf02c.avatar || null,
          avatarPath: fs.existsSync(_0x4c64aa) ? _0x4c64aa : null,
          sessionPath: _0x4a72b1,
          isActive: true,
          updatedAt: new Date()
        }
      });
      log("success", "[LOGIN] บันทึกข้อมูลบัญชีลง SQLite Database เรียบร้อยแล้ว");
    } catch (_0x133ffe) {
      log("warn", "[LOGIN] ไม่สามารถบันทึกลง Database ได้: " + _0x133ffe.message);
    }
  } catch (_0x286473) {
    log("error", "[LOGIN] บันทึกไฟล์โปรไฟล์ไม่สำเร็จ: " + _0x286473.message);
    throw _0x286473;
  }
}
async function runLogin(_0x2b2141 = {}) {
  log("info", "[LOGIN] เริ่มกระบวนการ Login...");
  const _0x20f4f4 = TEMP_PROFILE_DIR;
  log("info", "[LOGIN] จัดเตรียม temporary profile...");
  prepareTempProfile(_0x20f4f4);
  log("info", "[LOGIN] กำลังเปิดเบราว์เซอร์ Chrome...");
  const _0x514278 = await launchBrowser(_0x20f4f4, _0x2b2141.extraArgs || []);
  log("info", "[LOGIN] เบราว์เซอร์เปิดแล้ว กรุณาล็อกอินบนหน้าต่าง Facebook");
  try {
    const {
      userId: _0x149959,
      page: _0x1fe5c5
    } = await waitForLogin(_0x514278, _0x2b2141);
    log("success", "[LOGIN] ตรวจพบคุกกี้ c_user สำเร็จ! User ID: " + _0x149959);
    log("info", "[LOGIN] กำลังดึงข้อมูล Profile (ชื่อ, รูปภาพ, UID)...");
    const _0x301d1e = await extractProfileData(_0x1fe5c5, _0x149959);
    log("info", "[LOGIN] กำลังดาวน์โหลดรูปประจำตัว...");
    await downloadAvatar(_0x1fe5c5, _0x149959, _0x301d1e);
    await _0x514278.close();
    log("info", "[LOGIN] กำลังบันทึกไฟล์และย้ายโฟลเดอร์โปรไฟล์...");
    await saveUserFiles(_0x149959, _0x301d1e, _0x20f4f4);
    log("success", "[LOGIN] เพิ่มบัญชีสำเร็จ: " + _0x301d1e.name + " (ID: " + _0x149959 + ")");
    const _0x167d11 = {
      success: true,
      userId: _0x149959,
      profileData: _0x301d1e
    };
    return _0x167d11;
  } catch (_0x420c7) {
    try {
      await _0x514278.close();
    } catch {}
    log("error", "[LOGIN] การทำงานล้มเหลว: " + _0x420c7.message);
    throw _0x420c7;
  }
}
if (require.main === module) {
  onLog(_0x3e73fc => {
    if (process.send) {
      try {
        const _0x6266be = {
          type: "account:log",
          ..._0x3e73fc
        };
        process.send(_0x6266be);
      } catch {}
    }
  });
  runLogin().then(_0x470b7a => {
    log("success", "[MAIN] สำเร็จ! เข้าสู่ระบบในชื่อ: " + _0x470b7a.profileData.name);
    process.exit(0);
  }).catch(_0x44782e => {
    log("error", "[MAIN] สิ้นสุดด้วยข้อผิดพลาด: " + _0x44782e.message);
    process.exit(1);
  });
}
const _0x554025 = {
  runLogin: runLogin,
  prepareTempProfile: prepareTempProfile,
  launchBrowser: launchBrowser,
  waitForLogin: waitForLogin,
  extractProfileData: extractProfileData,
  downloadAvatar: downloadAvatar,
  saveUserFiles: saveUserFiles
};
module.exports = _0x554025;
