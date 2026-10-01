module.exports = (_0x294ca8, _0x5d2e21, _0x30df3a) => {
  _0x294ca8.handle("stats:get-all", async () => {
    return _0x30df3a.stats.getAllStats();
  });
  _0x294ca8.handle("stats:get-user", async (_0x28edca, _0x66e8ce) => {
    return _0x30df3a.stats.getAccountStats(_0x66e8ce);
  });
  _0x294ca8.handle("stats:get-all-users", async () => {
    return _0x30df3a.stats.getAllAccountStats();
  });
  _0x294ca8.handle("stats:get-daily", async (_0x3571ac, _0x176913) => {
    return _0x30df3a.stats.getDailyStats(_0x176913);
  });
  _0x294ca8.handle("stats:record", async (_0x1cfd37, {
    userId: _0x57c6aa,
    outcome: _0x1015dd,
    ..._0xbf643
  }) => {
    return _0x30df3a.stats.recordPostResult(_0x57c6aa, _0x1015dd, _0xbf643);
  });
  _0x294ca8.handle("stats:reset-user", async (_0x252696, _0x3c5879) => {
    return _0x30df3a.stats.resetAccountStats(_0x3c5879);
  });
  _0x294ca8.handle("stats:reset-all", async () => {
    return _0x30df3a.stats.resetAllStats();
  });
};
