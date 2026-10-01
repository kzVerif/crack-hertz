const {
  execSync
} = require("child_process");
const crypto = require("crypto");
const os = require("os");
let cachedHwid = null;
function getHwid() {
  if (cachedHwid) {
    return cachedHwid;
  }
  let _0x150da5 = "";
  if (process.platform === "win32") {
    try {
      const _0x13cacb = execSync("reg query \"HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography\" /v MachineGuid", {
        encoding: "utf8",
        stdio: ["pipe", "pipe", "ignore"],
        timeout: 3000
      });
      const _0x184975 = _0x13cacb.match(/MachineGuid\s+REG_SZ\s+([a-fA-F0-9-]+)/i);
      if (_0x184975 && _0x184975[1]) {
        _0x150da5 = _0x184975[1].trim();
      }
    } catch {}
    if (!_0x150da5) {
      try {
        const _0x16cb26 = execSync("wmic csproduct get uuid", {
          encoding: "utf8",
          stdio: ["pipe", "pipe", "ignore"],
          timeout: 3000
        });
        const _0x55b8c8 = _0x16cb26.split("\n").map(_0x5b04fd => _0x5b04fd.trim()).filter(_0x5114f2 => _0x5114f2 && !_0x5114f2.toLowerCase().includes("uuid"));
        if (_0x55b8c8.length > 0 && _0x55b8c8[0]) {
          _0x150da5 = _0x55b8c8[0];
        }
      } catch {}
    }
  } else if (process.platform === "darwin") {
    try {
      const _0x26bb80 = execSync("ioreg -rd1 -c IOPlatformExpertDevice | grep IOPlatformUUID", {
        encoding: "utf8",
        stdio: ["pipe", "pipe", "ignore"],
        timeout: 3000
      });
      const _0x4cd35f = _0x26bb80.match(/"IOPlatformUUID"\s*=\s*"([^"]+)"/);
      if (_0x4cd35f && _0x4cd35f[1]) {
        _0x150da5 = _0x4cd35f[1].trim();
      }
    } catch {}
  } else if (process.platform === "linux") {
    const _0x5a1ee3 = require("fs");
    try {
      if (_0x5a1ee3.existsSync("/etc/machine-id")) {
        _0x150da5 = _0x5a1ee3.readFileSync("/etc/machine-id", "utf8").trim();
      } else if (_0x5a1ee3.existsSync("/var/lib/dbus/machine-id")) {
        _0x150da5 = _0x5a1ee3.readFileSync("/var/lib/dbus/machine-id", "utf8").trim();
      }
    } catch {}
  }
  if (!_0x150da5) {
    try {
      const _0x41211a = os.cpus() || [];
      const _0x5e6b43 = _0x41211a[0]?.model || "unknown-cpu";
      const _0x334d46 = os.hostname() || "unknown-host";
      const _0x426e88 = os.networkInterfaces() || {};
      let _0x31fb90 = [];
      for (const _0x209b40 of Object.keys(_0x426e88)) {
        for (const _0x431f37 of _0x426e88[_0x209b40] || []) {
          if (_0x431f37 && _0x431f37.mac && _0x431f37.mac !== "00:00:00:00:00:00") {
            _0x31fb90.push(_0x431f37.mac);
          }
        }
      }
      _0x150da5 = _0x5e6b43 + "-" + _0x334d46 + "-" + _0x31fb90.sort().join("-");
    } catch {
      _0x150da5 = os.hostname() + "-" + os.platform() + "-" + os.arch();
    }
  }
  cachedHwid = crypto.createHash("sha256").update(_0x150da5).digest("hex");
  return cachedHwid;
}
const _0x150432 = {
  getHwid: getHwid
};
module.exports = _0x150432;
