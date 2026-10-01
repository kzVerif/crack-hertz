module.exports = (_0x14e3cd, _0xf0e12d, _0x3b978e) => {
  _0x14e3cd.handle("account:start-adding", async () => {
    return _0x3b978e.account.startAdding(_0xf0e12d);
  });
  _0x14e3cd.handle("account:stop-adding", async () => {
    return _0x3b978e.account.stopAdding();
  });
  _0x14e3cd.handle("account:get-all", async () => {
    return _0x3b978e.account.getAccounts();
  });
  _0x14e3cd.handle("account:delete", async (_0x5bd5c5, _0x5ca0ad) => {
    return _0x3b978e.account.deleteAccount(_0x5ca0ad);
  });
  _0x14e3cd.handle("account:select-avatar", async () => {
    return _0x3b978e.account.selectAvatarDialog(_0xf0e12d);
  });
  _0x14e3cd.handle("account:save-custom-profile", async (_0x12eec9, _0x38375d) => {
    return _0x3b978e.account.saveCustomProfile(_0x38375d);
  });
};
