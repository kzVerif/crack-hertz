module.exports = [36972, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
    name: "circle-x",
    size: 24,
    node: [["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }], ["path", {
      d: "m15 9-6 6",
      key: "1uzhvr"
    }], ["path", {
      d: "m9 9 6 6",
      key: "z0biqf"
    }]],
    aliases: ["x-circle"]
  };
  c.node;
  let d = (0, b.default)(c);
  a.s(["XCircle", 0, d], 36972);
}, 22426, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
    name: "clock-3",
    size: 24,
    node: [["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }], ["path", {
      d: "M12 6v6h4",
      key: "135r8i"
    }]]
  };
  c.node;
  let d = (0, b.default)(c);
  a.s(["Clock3", 0, d], 22426);
}, 93301, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
    name: "list-checks",
    size: 24,
    node: [["path", {
      d: "M13 5h8",
      key: "a7qcls"
    }], ["path", {
      d: "M13 12h8",
      key: "h98zly"
    }], ["path", {
      d: "M13 19h8",
      key: "c3s6r1"
    }], ["path", {
      d: "m3 17 2 2 4-4",
      key: "1jhpwq"
    }], ["path", {
      d: "m3 7 2 2 4-4",
      key: "1obspn"
    }]]
  };
  c.node;
  let d = (0, b.default)(c);
  a.s(["ListChecks", 0, d], 93301);
}, 75875, a => {
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

//# sourceMappingURL=client_0wrba8u._.js.map
