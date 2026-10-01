const fs = require("fs");
const path = require("path");
function getChromePath() {
  const _0x5ed3a0 = [path.join(process.env.ProgramFiles || "C:\\Program Files", "Google\\Chrome\\Application\\chrome.exe"), path.join(process.env["ProgramFiles(x86)"] || "C:\\Program Files (x86)", "Google\\Chrome\\Application\\chrome.exe"), path.join(process.env.LOCALAPPDATA || "C:\\Users\\Default\\AppData\\Local", "Google\\Chrome\\Application\\chrome.exe")];
  for (const _0x3ffc7a of _0x5ed3a0) {
    if (fs.existsSync(_0x3ffc7a)) {
      return _0x3ffc7a;
    }
  }
  const _0x2ebdfd = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  if (fs.existsSync(_0x2ebdfd)) {
    return _0x2ebdfd;
  }
  const _0x15d41e = ["/usr/bin/google-chrome", "/usr/bin/google-chrome-stable", "/usr/bin/chromium", "/usr/bin/chromium-browser"];
  for (const _0x39bed4 of _0x15d41e) {
    if (fs.existsSync(_0x39bed4)) {
      return _0x39bed4;
    }
  }
  return undefined;
}
function getChromiumPath() {
  const _0x23755f = getChromePath();
  if (_0x23755f) {
    return _0x23755f;
  }
  throw new Error("ไม่พบ Google Chrome ในเครื่องของคุณ กรุณาติดตั้ง Google Chrome เพื่อใช้งานโปรแกรมนี้ (Google Chrome is not installed on this system. Please install Google Chrome to run this application.)");
}
function getChromeVersion(_0x6711ef) {
  try {
    const _0x44d4cc = _0x6711ef || getChromiumPath();
    if (process.platform === "win32") {
      const _0x226456 = path.dirname(_0x44d4cc);
      const _0x3c6bbd = fs.readdirSync(_0x226456, {
        withFileTypes: true
      });
      for (const _0x335cdf of _0x3c6bbd) {
        if (_0x335cdf.isDirectory() && /^\d+(\.\d+){3}$/.test(_0x335cdf.name)) {
          return _0x335cdf.name;
        }
      }
      return null;
    }
    if (process.platform === "darwin") {
      const _0x2c983d = path.join(path.dirname(path.dirname(_0x44d4cc)), "Info.plist");
      const _0x872ce2 = fs.readFileSync(_0x2c983d, "utf8");
      const _0x5d9e3c = _0x872ce2.match(/<key>CFBundleShortVersionString<\/key>\s*<string>([^<]+)<\/string>/);
      if (_0x5d9e3c) {
        return _0x5d9e3c[1];
      } else {
        return null;
      }
    }
    const {
      execFileSync: _0x5ed13b
    } = require("child_process");
    const _0x285aa5 = _0x5ed13b(_0x44d4cc, ["--version"], {
      timeout: 5000
    }).toString();
    const _0x40acef = _0x285aa5.match(/(\d+\.\d+\.\d+\.\d+)/);
    if (_0x40acef) {
      return _0x40acef[1];
    } else {
      return null;
    }
  } catch {
    return null;
  }
}
function getRealUserAgent(_0x2e3751) {
  if (process.platform !== "win32") {
    return null;
  }
  try {
    const _0x43ce28 = getChromeVersion(_0x2e3751);
    if (!_0x43ce28) {
      return null;
    }
    const _0x1a32bc = _0x43ce28.split(".")[0];
    return ["Mozilla/5.0 (Windows NT 10.0; Win64; x64)", "AppleWebKit/537.36 (KHTML, like Gecko)", "Chrome/" + _0x1a32bc + ".0.0.0", "Safari/537.36"].join(" ");
  } catch {
    return null;
  }
}
const _0x3929ef = {
  getChromePath: getChromePath,
  getChromiumPath: getChromiumPath,
  getChromeVersion: getChromeVersion,
  getRealUserAgent: getRealUserAgent
};
module.exports = _0x3929ef;
