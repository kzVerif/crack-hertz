module.exports = (_0x63b122, _0x482bfa, _0x54e0d4) => {
  _0x63b122.handle("post:start-all", async () => {
    return _0x54e0d4.post.startAll(_0x482bfa);
  });
  _0x63b122.handle("post:stop-all", async () => {
    return _0x54e0d4.post.stopAll();
  });
  _0x63b122.handle("post:start-user", async (_0x5572cb, _0x575e5c) => {
    return _0x54e0d4.post.startUser(_0x575e5c, _0x482bfa);
  });
  _0x63b122.handle("post:stop-user", async (_0x4655f2, _0x4808da) => {
    return _0x54e0d4.post.stopUser(_0x4808da);
  });
  _0x63b122.handle("post:get-status", async () => {
    return _0x54e0d4.post.getStatus();
  });
};
