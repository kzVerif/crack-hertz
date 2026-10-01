module.exports = [75875, a => {
  "use strict";

  var b = a.i(91402);
  let c = {
    total: 0,
    success: 0,
    failed: 0,
    pending: 0,
    post: 0,
    comment: 0,
    reaction: 0
  };
  let d = (0, b.create)((a, b) => ({
    overallStats: {
      ...c
    },
    accountStats: {},
    dailyStats: [],
    dailyRange: 1,
    isLoading: true,
    error: null,
    fetchOverallStats: async () => {
      a({
        isLoading: false
      });
    },
    fetchAccountStats: async a => null,
    fetchDailyStats: async a => {},
    fetchAll: async (c = 14) => {
      a({
        isLoading: true,
        error: null
      });
      await Promise.allSettled([b().fetchOverallStats(), b().fetchDailyStats(c)]);
      a({
        isLoading: false
      });
    },
    recordOutcome: async (b, d) => {
      let e = String(b);
      a(a => {
        let b = a.overallStats;
        let f = a.accountStats[e] || {
          ...c,
          userId: e
        };
        return {
          overallStats: {
            ...b,
            total: b.total + 1,
            [d]: (b[d] || 0) + 1
          },
          accountStats: {
            ...a.accountStats,
            [e]: {
              ...f,
              total: f.total + 1,
              [d]: (f[d] || 0) + 1
            }
          }
        };
      });
    },
    setOverallStats: b => {
      a(a => ({
        overallStats: {
          ...a.overallStats,
          ...b
        }
      }));
    },
    resetStats: () => {
      a({
        overallStats: {
          ...c
        },
        accountStats: {},
        dailyStats: [],
        error: null
      });
    },
    removeUserStat: b => {
      let c = String(b);
      a(a => {
        let b = {
          ...a.accountStats
        };
        delete b[c];
        return {
          accountStats: b
        };
      });
    },
    resetUserStats: async a => false,
    resetAllStats: async () => false,
    initStatsListeners: () => () => {}
  }));
  a.s(["default", 0, d, "useStatsStore", 0, d]);
}];

//# sourceMappingURL=client_store_statsStore_ts_0oj3u5_._.js.map
