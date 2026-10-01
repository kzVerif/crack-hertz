module.exports = (_0x5662bc, _0x8156df, _0x38003a) => {
  _0x5662bc.handle("auth:get-hwid", async () => {
    return _0x38003a.auth.getHwid();
  });
  _0x5662bc.handle("auth:get-key", async () => {
    return _0x38003a.auth.getStoredKey();
  });
  _0x5662bc.handle("auth:check-status", async (_0x105f4b, _0x1f7b2f) => {
    const {
      code: _0x79ac8c,
      hwid: _0x2ef540
    } = _0x1f7b2f || {};
    return _0x38003a.auth.checkKeyStatus(_0x79ac8c, _0x2ef540);
  });
  _0x5662bc.handle("auth:activate", async (_0xe3c49a, _0x5b3a20) => {
    const _0x4cfac9 = await _0x38003a.auth.activateKey(_0x5b3a20);
    if (_0x4cfac9.success && _0x38003a.remoteSync && typeof _0x38003a.remoteSync.startRemoteSync === "function") {
      _0x38003a.remoteSync.startRemoteSync(_0x8156df);
    }
    return _0x4cfac9;
  });
  _0x5662bc.handle("auth:reset-hwid", async (_0x217e65, _0x209e96) => {
    return _0x38003a.auth.resetKeyHwid(_0x209e96);
  });
  _0x5662bc.handle("auth:deactivate", async () => {
    const _0x204113 = await _0x38003a.auth.deactivateKey();
    if (_0x38003a.remoteSync && typeof _0x38003a.remoteSync.stopRemoteSync === "function") {
      await _0x38003a.remoteSync.stopRemoteSync();
    }
    return _0x204113;
  });
  _0x5662bc.handle("auth:validate", async () => {
    return _0x38003a.auth.validateStartupKey();
  });
};
