module.exports = [5526, a => {
  "use strict";

  let b = (0, a.i(91402).create)((a, b) => ({
    runningUserIds: [],
    isAllRunning: false,
    actionLoading: {},
    workerFilter: "all",
    tasks: {},
    taskTimers: {},
    groupInfo: {},
    error: null,
    setWorkerFilter: b => {
      a({
        workerFilter: b
      });
    },
    isUserRunning: a => b().runningUserIds.includes(String(a)),
    isActionLoading: a => !!b().actionLoading[String(a)],
    fetchStatus: async () => {},
    startAll: async () => ({
      success: false,
      message: "Electron API ไม่พร้อมใช้งาน"
    }),
    cancelAll: async () => ({
      success: false,
      message: "Electron API ไม่พร้อมใช้งาน"
    }),
    startUser: async a => {
      String(a);
      return {
        success: false,
        message: "Electron API ไม่พร้อมใช้งาน"
      };
    },
    cancelUser: async a => {
      String(a);
      return {
        success: false,
        message: "Electron API ไม่พร้อมใช้งาน"
      };
    },
    initPostListeners: () => () => {}
  }));
  a.s(["default", 0, b, "usePostStore", 0, b]);
}];

//# sourceMappingURL=client_store_postStore_ts_0rdyvxo._.js.map
