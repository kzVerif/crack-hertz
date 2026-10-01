(globalThis.TURBOPACK ||= []).push([typeof document == "object" ? document.currentScript : undefined, 28719, t => {
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
  let r = 0;
  let l = null;
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
      let r = String(e);
      try {
        let e = await s.getUser(r);
        let a = {
          total: e?.total ?? 0,
          success: e?.success ?? 0,
          failed: e?.failed ?? 0,
          pending: e?.pending ?? 0,
          post: e?.post ?? 0,
          comment: e?.comment ?? 0,
          reaction: e?.reaction ?? 0,
          updatedAt: e?.updatedAt,
          userId: r
        };
        t(t => ({
          accountStats: {
            ...t.accountStats,
            [r]: a
          }
        }));
        return a;
      } catch (t) {
        console.error(`Failed to fetch stats for user ${r}:`, t);
        return null;
      }
    },
    fetchDailyStats: async s => {
      let r = a();
      if (!r) {
        return;
      }
      let l = typeof s == "number" ? s : e().dailyRange;
      t({
        dailyRange: l
      });
      try {
        let e = await r.getDaily(l);
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
    recordOutcome: async (e, r) => {
      let l = String(e);
      t(t => {
        let e = t.overallStats;
        let a = t.accountStats[l] || {
          ...s,
          userId: l
        };
        return {
          overallStats: {
            ...e,
            total: e.total + 1,
            [r]: (e[r] || 0) + 1
          },
          accountStats: {
            ...t.accountStats,
            [l]: {
              ...a,
              total: a.total + 1,
              [r]: (a[r] || 0) + 1
            }
          }
        };
      });
      let c = a();
      if (c) {
        try {
          await c.record(l, r);
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
    resetUserStats: async r => {
      let l = a();
      if (!l) {
        return false;
      }
      let c = String(r);
      try {
        let a = await l.resetUser(c);
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
      let r = a();
      if (!r) {
        return false;
      }
      try {
        let a = await r.resetAll();
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
        r++;
        l ||= a.onProgress(a => {
          let r = a.outcome || (a.success ? "success" : "failed");
          if (!["success", "failed", "pending"].includes(r)) {
            return;
          }
          let l = String(a.userId);
          let n = !!(a.stats?.isFullSuccess ?? r === "success");
          let i = !!(a.stats?.hasFailed ?? r === "failed");
          let u = !!(a.stats?.isPending ?? r === "pending");
          let d = !!(a.stats?.postSuccess ?? r === "success");
          let S = typeof a.stats?.commentCount == "number" ? a.stats.commentCount : a.comment?.success && typeof a.comment.count == "number" ? a.comment.count : 0;
          let f = typeof a.stats?.reactionSuccess == "boolean" ? +!!a.stats.reactionSuccess : a.reaction?.success && a.reaction.outcome !== "already_reacted" ? 1 : 0;
          t(t => {
            let e = t.overallStats;
            let a = t.accountStats[l] || {
              ...s,
              userId: l
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
                [l]: {
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
          o = l;
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
          if ((r = Math.max(0, r - 1)) === 0) {
            if (l) {
              l();
              l = null;
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
