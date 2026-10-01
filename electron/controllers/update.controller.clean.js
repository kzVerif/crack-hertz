module.exports = (_0x40f858, _0xff8c9d, _0x2b7b68) => {
  _0x40f858.handle("update:check", async () => {
    return _0x2b7b68.update.fetchReleases();
  });
  _0x40f858.handle("update:open-url", async (_0x1da6de, _0x567436) => {
    return _0x2b7b68.update.openReleaseUrl(_0x567436);
  });
  _0x40f858.handle("update:get-current-version", async () => {
    return _0x2b7b68.update.getCurrentVersion();
  });
  _0x40f858.handle("update:start-download", async () => {
    return _0x2b7b68.update.startDownload(_0x26bb39 => {
      if (_0xff8c9d && !_0xff8c9d.isDestroyed()) {
        _0xff8c9d.webContents.send("update:download-progress", _0x26bb39);
      }
    });
  });
  _0x40f858.handle("update:cancel-download", async () => {
    return _0x2b7b68.update.cancelDownload();
  });
};
