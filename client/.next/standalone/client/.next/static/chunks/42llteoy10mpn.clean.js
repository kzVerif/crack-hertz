(globalThis.TURBOPACK ||= []).push([typeof document == "object" ? document.currentScript : undefined, 26874, t => {
  "use strict";

  var e = t.i(2692);
  let a = {
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
  a.node;
  let s = (0, e.default)(a);
  t.s(["XCircle", 0, s], 26874);
}, 23049, t => {
  "use strict";

  var e = t.i(2692);
  let a = {
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
  a.node;
  let s = (0, e.default)(a);
  t.s(["Clock3", 0, s], 23049);
}, 14024, t => {
  "use strict";

  var e = t.i(2692);
  let a = {
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
  a.node;
  let s = (0, e.default)(a);
  t.s(["ListChecks", 0, s], 14024);
}, 28719, t => {
  "use strict";

  var e = t.i(1347);
  let a = () => window.electronApi?.stats ? window.electronApi.stats : null;
  let s = {
    total: 0,
    success: 0,
    failed: 0,
    pending: 0,
    post: 0,
    comment: 0,
    reaction: 0
  };
  let l = 0;
  let r = null;
  let c = null;
  let o = null;
  let n = (0, e.create)((t, e) => ({
    overallStats: {
      ...s
    },
    accountStats: {},
    dailyStats: [],
    dailyRange: 1,
    isLoading: true,
    error: null,
    fetchOverallStats: async () => {
      let e = a();
      if (!e) {
        t({
          isLoading: false
        });
        return;
      }
      try {
        let a = await e.getAll();
        t({
          overallStats: {
            total: a?.total ?? 0,
            success: a?.success ?? 0,
            failed: a?.failed ?? 0,
            pending: a?.pending ?? 0,
            updatedAt: a?.updatedAt
          },
          isLoading: false,
          error: null
        });
      } catch (a) {
        let e = a instanceof Error ? a.message : "Failed to fetch overall stats";
        console.error("Failed to fetch overall stats:", a);
        t({
          error: e,
          isLoading: false
        });
      }
    },
    fetchAccountStats: async e => {
      let s = a();
      if (!s) {
        return null;
      }
      let l = String(e);
      try {
        let e = await s.getUser(l);
        let a = {
          total: e?.total ?? 0,
          success: e?.success ?? 0,
          failed: e?.failed ?? 0,
          pending: e?.pending ?? 0,
          post: e?.post ?? 0,
          comment: e?.comment ?? 0,
          reaction: e?.reaction ?? 0,
          updatedAt: e?.updatedAt,
          userId: l
        };
        t(t => ({
          accountStats: {
            ...t.accountStats,
            [l]: a
          }
        }));
        return a;
      } catch (t) {
        console.error(`Failed to fetch stats for user ${l}:`, t);
        return null;
      }
    },
    fetchDailyStats: async s => {
      let l = a();
      if (!l) {
        return;
      }
      let r = typeof s == "number" ? s : e().dailyRange;
      t({
        dailyRange: r
      });
      try {
        let e = await l.getDaily(r);
        t({
          dailyStats: Array.isArray(e) ? e : []
        });
      } catch (t) {
        console.error("Failed to fetch daily stats:", t);
      }
    },
    fetchAll: async (a = 14) => {
      t({
        isLoading: true,
        error: null
      });
      await Promise.allSettled([e().fetchOverallStats(), e().fetchDailyStats(a)]);
      t({
        isLoading: false
      });
    },
    recordOutcome: async (e, l) => {
      let r = String(e);
      t(t => {
        let e = t.overallStats;
        let a = t.accountStats[r] || {
          ...s,
          userId: r
        };
        return {
          overallStats: {
            ...e,
            total: e.total + 1,
            [l]: (e[l] || 0) + 1
          },
          accountStats: {
            ...t.accountStats,
            [r]: {
              ...a,
              total: a.total + 1,
              [l]: (a[l] || 0) + 1
            }
          }
        };
      });
      let c = a();
      if (c) {
        try {
          await c.record(r, l);
        } catch (t) {
          console.error("Failed to record stat outcome:", t);
        }
      }
    },
    setOverallStats: e => {
      t(t => ({
        overallStats: {
          ...t.overallStats,
          ...e
        }
      }));
    },
    resetStats: () => {
      t({
        overallStats: {
          ...s
        },
        accountStats: {},
        dailyStats: [],
        error: null
      });
    },
    removeUserStat: e => {
      let a = String(e);
      t(t => {
        let e = {
          ...t.accountStats
        };
        delete e[a];
        return {
          accountStats: e
        };
      });
    },
    resetUserStats: async l => {
      let r = a();
      if (!r) {
        return false;
      }
      let c = String(l);
      try {
        let a = await r.resetUser(c);
        if (a?.success) {
          t(t => ({
            accountStats: {
              ...t.accountStats,
              [c]: {
                ...s,
                userId: c
              }
            }
          }));
          await Promise.allSettled([e().fetchOverallStats(), e().fetchDailyStats()]);
          return true;
        }
        return false;
      } catch (t) {
        console.error(`Failed to reset stats for user ${c}:`, t);
        return false;
      }
    },
    resetAllStats: async () => {
      let l = a();
      if (!l) {
        return false;
      }
      try {
        let a = await l.resetAll();
        if (a?.success) {
          t({
            overallStats: {
              ...s
            },
            accountStats: {},
            dailyStats: []
          });
          await Promise.allSettled([e().fetchOverallStats(), e().fetchDailyStats()]);
          return true;
        }
        return false;
      } catch (t) {
        console.error("Failed to reset all stats:", t);
        return false;
      }
    },
    initStatsListeners: () => {
      let a = window.electronApi?.post ? window.electronApi.post : null;
      if (a?.onProgress) {
        l++;
        r ||= a.onProgress(a => {
          let l = a.outcome || (a.success ? "success" : "failed");
          if (!["success", "failed", "pending"].includes(l)) {
            return;
          }
          let r = String(a.userId);
          let n = !!(a.stats?.isFullSuccess ?? l === "success");
          let i = !!(a.stats?.hasFailed ?? l === "failed");
          let u = !!(a.stats?.isPending ?? l === "pending");
          let d = !!(a.stats?.postSuccess ?? l === "success");
          let S = typeof a.stats?.commentCount == "number" ? a.stats.commentCount : a.comment?.success && typeof a.comment.count == "number" ? a.comment.count : 0;
          let f = typeof a.stats?.reactionSuccess == "boolean" ? +!!a.stats.reactionSuccess : a.reaction?.success && a.reaction.outcome !== "already_reacted" ? 1 : 0;
          t(t => {
            let e = t.overallStats;
            let a = t.accountStats[r] || {
              ...s,
              userId: r
            };
            return {
              overallStats: {
                ...e,
                total: e.total + 1,
                success: e.success + +!!n,
                failed: e.failed + +!!i,
                pending: e.pending + +!!u
              },
              accountStats: {
                ...t.accountStats,
                [r]: {
                  ...a,
                  total: a.total + 1,
                  success: a.success + +!!n,
                  failed: a.failed + +!!i,
                  pending: a.pending + +!!u,
                  post: (a.post || 0) + +!!d,
                  comment: (a.comment || 0) + S,
                  reaction: (a.reaction || 0) + f
                }
              }
            };
          });
          o = r;
          if (c) {
            clearTimeout(c);
          }
          c = setTimeout(() => {
            c = null;
            let t = o;
            e().fetchOverallStats();
            e().fetchDailyStats();
            if (t) {
              e().fetchAccountStats(t);
            }
          }, 3000);
        });
        return () => {
          if ((l = Math.max(0, l - 1)) === 0) {
            if (r) {
              r();
              r = null;
            }
            if (c) {
              clearTimeout(c);
              c = null;
            }
          }
        };
      } else {
        return () => {};
      }
    }
  }));
  t.s(["default", 0, n, "useStatsStore", 0, n]);
}]);
