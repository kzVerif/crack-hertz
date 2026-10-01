function minimize(_0xd7a743) {
  if (_0xd7a743 && !_0xd7a743.isDestroyed()) {
    _0xd7a743.minimize();
  }
}
function toggleMaximize(_0x260e7e) {
  if (_0x260e7e && !_0x260e7e.isDestroyed() && _0x260e7e.isMaximizable()) {
    if (_0x260e7e.isMaximized()) {
      _0x260e7e.unmaximize();
    } else {
      _0x260e7e.maximize();
    }
  }
}
function close(_0x31064e) {
  if (_0x31064e && !_0x31064e.isDestroyed()) {
    _0x31064e.close();
  }
}
function reload(_0x52edd8) {
  if (_0x52edd8 && !_0x52edd8.isDestroyed()) {
    _0x52edd8.webContents.reload();
  }
}
var _0x281c61 = {
  minimize: minimize,
  toggleMaximize: toggleMaximize,
  close: close,
  reload: reload
};
module.exports = _0x281c61;
