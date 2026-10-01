const colors = {
  reset: "[0m",
  bright: "[1m",
  dim: "[2m",
  info: "[36m",
  success: "[32m",
  warn: "[33m",
  error: "[31m"
};
function getTimestamp() {
  const _0x1daea3 = new Date();
  const _0x2ac85c = String(_0x1daea3.getHours()).padStart(2, "0");
  const _0x37c9b1 = String(_0x1daea3.getMinutes()).padStart(2, "0");
  const _0x3f0ac1 = String(_0x1daea3.getSeconds()).padStart(2, "0");
  return _0x2ac85c + ":" + _0x37c9b1 + ":" + _0x3f0ac1;
}
let logListeners = [];
function log(_0x362f96, _0x3d8d97, _0x36e08d = {}) {
  const _0x4dec9c = _0x362f96.toLowerCase();
  const _0x5c4e06 = getTimestamp();
  const _0x862d1c = colors[_0x4dec9c] || colors.info;
  const _0x4e0f47 = _0x4dec9c.toUpperCase().padEnd(7);
  console.log(colors.dim + "[" + _0x5c4e06 + "]" + colors.reset + " " + _0x862d1c + _0x4e0f47 + colors.reset + " " + _0x3d8d97);
  for (const _0x2e2505 of logListeners) {
    try {
      const _0x555496 = {
        time: _0x5c4e06,
        level: _0x4dec9c,
        message: _0x3d8d97,
        meta: _0x36e08d
      };
      _0x2e2505(_0x555496);
    } catch {}
  }
}
function onLog(_0x40cf38) {
  logListeners.push(_0x40cf38);
  return () => {
    logListeners = logListeners.filter(_0x31f4b0 => _0x31f4b0 !== _0x40cf38);
  };
}
const _0x58e635 = {
  log: log,
  onLog: onLog
};
module.exports = _0x58e635;
