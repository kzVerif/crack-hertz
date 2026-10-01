(globalThis.TURBOPACK ||= []).push([typeof document == "object" ? document.currentScript : undefined, 93652, e => {
  "use strict";

  var r = e.i(1347);
  let n = () => window.electronApi?.post ? window.electronApi.post : null;
  let s = (0, r.create)((e, r) => ({
    runningUserIds: [],
    isAllRunning: false,
    actionLoading: {},
    workerFilter: "all",
    tasks: {},
    taskTimers: {},
    groupInfo: {},
    error: null,
    setWorkerFilter: r => {
      e({
        workerFilter: r
      });
    },
    isUserRunning: e => r().runningUserIds.includes(String(e)),
    isActionLoading: e => !!r().actionLoading[String(e)],
    fetchStatus: async () => {
      let r = n();
      if (r) {
        try {
          let n = await r.getStatus();
          e({
            runningUserIds: n?.activeUsers || [],
            isAllRunning: !!n?.isRunning,
            error: null
          });
        } catch (n) {
          let r = n instanceof Error ? n.message : "Failed to fetch status";
          console.error("Failed to fetch post status:", n);
          e({
            error: r
          });
        }
      }
    },
    startAll: async () => {
      let s = n();
      if (!s) {
        return {
          success: false,
          message: "Electron API ไม่พร้อมใช้งาน"
        };
      }
      e(e => ({
        actionLoading: {
          ...e.actionLoading,
          all: true
        },
        error: null
      }));
      try {
        let n = await s.startAll();
        e({
          isAllRunning: true
        });
        await r().fetchStatus();
        return {
          success: n.success,
          message: n.message
        };
      } catch (n) {
        let r = n instanceof Error ? n.message : "เกิดข้อผิดพลาดในการสั่งรันทั้งหมด";
        e({
          error: r
        });
        return {
          success: false,
          message: r
        };
      } finally {
        e(e => ({
          actionLoading: {
            ...e.actionLoading,
            all: false
          }
        }));
      }
    },
    cancelAll: async () => {
      let r = n();
      if (!r) {
        return {
          success: false,
          message: "Electron API ไม่พร้อมใช้งาน"
        };
      }
      e(e => ({
        actionLoading: {
          ...e.actionLoading,
          all: true
        },
        error: null
      }));
      try {
        let n = await r.stopAll();
        e({
          isAllRunning: false,
          runningUserIds: []
        });
        return {
          success: n.success,
          message: n.message
        };
      } catch (n) {
        let r = n instanceof Error ? n.message : "เกิดข้อผิดพลาดในการยกเลิกทั้งหมด";
        e({
          error: r
        });
        return {
          success: false,
          message: r
        };
      } finally {
        e(e => ({
          actionLoading: {
            ...e.actionLoading,
            all: false
          }
        }));
      }
    },
    startUser: async r => {
      let s = n();
      let t = String(r);
      if (!s) {
        return {
          success: false,
          message: "Electron API ไม่พร้อมใช้งาน"
        };
      }
      e(e => ({
        actionLoading: {
          ...e.actionLoading,
          [t]: true
        },
        error: null
      }));
      try {
        let r = await s.startUser(t);
        if (r.success) {
          e(e => ({
            runningUserIds: Array.from(new Set([...e.runningUserIds, t])),
            isAllRunning: true
          }));
        }
        return {
          success: r.success,
          message: r.message
        };
      } catch (n) {
        let r = n instanceof Error ? n.message : `เกิดข้อผิดพลาดในการสั่งรัน User ${t}`;
        e({
          error: r
        });
        return {
          success: false,
          message: r
        };
      } finally {
        e(e => ({
          actionLoading: {
            ...e.actionLoading,
            [t]: false
          }
        }));
      }
    },
    cancelUser: async r => {
      let s = n();
      let t = String(r);
      if (!s) {
        return {
          success: false,
          message: "Electron API ไม่พร้อมใช้งาน"
        };
      }
      e(e => ({
        actionLoading: {
          ...e.actionLoading,
          [t]: true
        },
        error: null
      }));
      try {
        let r = await s.stopUser(t);
        e(e => {
          let r = e.runningUserIds.filter(e => e !== t);
          return {
            runningUserIds: r,
            isAllRunning: r.length > 0
          };
        });
        return {
          success: r.success,
          message: r.message
        };
      } catch (n) {
        let r = n instanceof Error ? n.message : `เกิดข้อผิดพลาดในการยกเลิก User ${t}`;
        e({
          error: r
        });
        return {
          success: false,
          message: r
        };
      } finally {
        e(e => ({
          actionLoading: {
            ...e.actionLoading,
            [t]: false
          }
        }));
      }
    },
    initPostListeners: () => {
      let s = n();
      if (!s?.onStatusChange) {
        return () => {};
      }
      r().fetchStatus();
      let t = s.onStatusChange(r => {
        let n = String(r.userId);
        let s = r.status === "running";
        e(e => {
          let r;
          let t = {
            ...e.tasks
          };
          if (s) {
            r = Array.from(new Set([...e.runningUserIds, n]));
            if (!t[n] || t[n] === "-") {
              t[n] = "กำลังเริ่มงาน...";
            }
          } else {
            r = e.runningUserIds.filter(e => e !== n);
            t[n] = "-";
          }
          let a = {
            ...e.taskTimers
          };
          if (!s) {
            delete a[n];
          }
          return {
            runningUserIds: r,
            isAllRunning: r.length > 0,
            tasks: t,
            taskTimers: a
          };
        });
      });
      let a = () => {};
      if (s.onTask) {
        a = s.onTask(r => {
          let n = String(r.userId);
          let s = typeof r.duration == "number" ? r.duration : typeof r.stepDelay == "number" ? r.stepDelay / 1000 : 0;
          let t = typeof r.endTime == "number" ? r.endTime : s > 0 ? Date.now() + s * 1000 : 0;
          e(e => {
            let a = {
              ...e.tasks,
              [n]: r.task
            };
            let o = {
              ...e.groupInfo
            };
            let i = {
              ...e.taskTimers,
              [n]: {
                duration: s,
                endTime: t
              }
            };
            if (r.groupName || r.linkTotal != null) {
              o[n] = {
                groupName: r.groupName ?? e.groupInfo[n]?.groupName ?? "",
                groupCurrent: r.groupCurrent ?? e.groupInfo[n]?.groupCurrent ?? 0,
                groupTotal: r.groupTotal ?? e.groupInfo[n]?.groupTotal ?? 0,
                linkCurrent: r.linkCurrent ?? e.groupInfo[n]?.linkCurrent ?? 0,
                linkTotal: r.linkTotal ?? e.groupInfo[n]?.linkTotal ?? 0
              };
            }
            return {
              tasks: a,
              groupInfo: o,
              taskTimers: i
            };
          });
        });
      }
      return () => {
        t();
        a();
      };
    }
  }));
  e.s(["default", 0, s, "usePostStore", 0, s]);
}]);
