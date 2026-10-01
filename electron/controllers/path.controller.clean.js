module.exports = (_0x21f8e5, _0x222715, _0x5e7ceb) => {
  _0x21f8e5.handle("paths:get-all", async () => {
    return _0x5e7ceb.path.getPaths();
  });
  _0x21f8e5.handle("paths:open", async (_0x27c70f, _0x398177) => {
    return _0x5e7ceb.path.openFolder(_0x398177);
  });
  _0x21f8e5.handle("paths:open-user", async (_0x5bd972, _0x43ad19) => {
    return _0x5e7ceb.path.openUserFolder(_0x43ad19);
  });
};
