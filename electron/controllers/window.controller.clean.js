module.exports = (_0xaa7b3a, _0xa1ea23, _0x4e7e3e) => {
  let _0x1b40d2 = null;
  _0xaa7b3a.on("window-drag-start", (_0x194389, _0x462245, _0x576811) => {
    const [_0xbc8f3, _0x8b57f8] = _0xa1ea23.getPosition();
    _0x1b40d2 = {
      x: _0x462245 - _0xbc8f3,
      y: _0x576811 - _0x8b57f8
    };
  });
  _0xaa7b3a.on("window-drag-move", (_0x301790, _0x2fbffd, _0x2f42fe) => {
    if (!_0x1b40d2 || _0xa1ea23.isDestroyed()) {
      return;
    }
    _0xa1ea23.setPosition(Math.round(_0x2fbffd - _0x1b40d2.x), Math.round(_0x2f42fe - _0x1b40d2.y), false);
  });
  _0xaa7b3a.on("window-drag-end", () => {
    _0x1b40d2 = null;
  });
  _0xaa7b3a.on("window-minimize", () => {
    _0x4e7e3e.window.minimize(_0xa1ea23);
  });
  _0xaa7b3a.on("window-maximize", () => {
    _0x4e7e3e.window.toggleMaximize(_0xa1ea23);
  });
  _0xaa7b3a.on("window-close", () => {
    _0x4e7e3e.window.close(_0xa1ea23);
  });
  _0xaa7b3a.on("window-reload", () => {
    _0x4e7e3e.window.reload(_0xa1ea23);
  });
};
