(globalThis.TURBOPACK ||= []).push([typeof document == "object" ? document.currentScript : undefined, 66842, e => {
  "use strict";

  var t = e.i(1347);
  let s = () => window.electronApi?.account ? window.electronApi.account : null;
  let n = (0, t.create)((t, n) => ({
    accounts: [],
    selectedAccountId: null,
    isLoading: true,
    isAdding: false,
    deletingId: null,
    error: null,
    isCustomProfileOpen: false,
    customProfileInitialData: null,
    setSelectedAccountId: e => {
      t({
        selectedAccountId: e
      });
    },
    fetchAccounts: async () => {
      let e = s();
      if (!e) {
        t({
          isLoading: false
        });
        return;
      }
      t({
        isLoading: true,
        error: null
      });
      try {
        let s = (await e.getAll()) || [];
        let r = n().selectedAccountId;
        let c = s.some(e => e.id === r);
        t({
          accounts: s,
          selectedAccountId: c ? r : s[0]?.id || null,
          isLoading: false
        });
      } catch (s) {
        let e = s instanceof Error ? s.message : "Failed to fetch accounts";
        console.error("Failed to fetch accounts:", s);
        t({
          error: e,
          isLoading: false
        });
      }
    },
    deleteAccount: async n => {
      let r = s();
      if (!r) {
        return {
          success: false,
          message: "Electron API ไม่พร้อมใช้งาน"
        };
      }
      t({
        deletingId: n
      });
      try {
        let s = await r.delete(n);
        if (s?.success) {
          t(e => {
            let t = e.accounts.filter(e => e.id !== n);
            let s = e.selectedAccountId === n ? t[0]?.id || null : e.selectedAccountId;
            return {
              accounts: t,
              selectedAccountId: s
            };
          });
          try {
            let {
              useStatsStore: t
            } = await e.A(2670);
            t.getState().removeUserStat(n);
            t.getState().fetchOverallStats();
          } catch {}
        }
        return s;
      } catch (t) {
        let e = t instanceof Error ? t.message : "เกิดข้อผิดพลาดในการลบบัญชี";
        console.error("Failed to delete account:", t);
        return {
          success: false,
          message: e
        };
      } finally {
        t({
          deletingId: null
        });
      }
    },
    startAddingAccount: async () => {
      let e = s();
      if (!e) {
        return {
          status: "error",
          message: "Electron API ไม่พร้อมใช้งาน"
        };
      }
      try {
        let s = await e.startAdding();
        if (s.status === "started" || s.status === "already_running") {
          t({
            isAdding: true
          });
        }
        return s;
      } catch (s) {
        let e = s instanceof Error ? s.message : "เกิดข้อผิดพลาดในการเริ่มระบบล็อกอิน";
        console.error("Failed to start adding account:", s);
        t({
          isAdding: false
        });
        return {
          status: "error",
          message: e
        };
      }
    },
    stopAddingAccount: async () => {
      let e = s();
      if (!e) {
        return {
          status: "error",
          message: "Electron API ไม่พร้อมใช้งาน"
        };
      }
      try {
        let s = await e.stopAdding();
        if (s.status === "stopped" || s.status === "not_running") {
          t({
            isAdding: false
          });
        }
        return s;
      } catch (t) {
        let e = t instanceof Error ? t.message : "เกิดข้อผิดพลาดในการยกเลิกล็อกอิน";
        console.error("Failed to stop adding account:", t);
        return {
          status: "error",
          message: e
        };
      }
    },
    getAccountById: e => n().accounts.find(t => t.id === e),
    initAccountListeners: e => {
      let r = s();
      if (!r?.onLoginDone) {
        return () => {};
      }
      let c = r.onLoginDone(s => {
        t({
          isAdding: false
        });
        if (s?.success) {
          n().fetchAccounts();
        }
        e?.(s);
      });
      let o = window.electronApi?.remote;
      let a = o?.onDataChanged ? o.onDataChanged(() => {
        n().fetchAccounts();
      }) : () => {};
      return () => {
        c();
        a();
      };
    },
    openCustomProfile: (e = null) => {
      t({
        isCustomProfileOpen: true,
        customProfileInitialData: e
      });
    },
    closeCustomProfile: () => {
      t({
        isCustomProfileOpen: false,
        customProfileInitialData: null
      });
    },
    selectAvatar: async () => {
      let e = s();
      if (e?.selectAvatar) {
        return await e.selectAvatar();
      } else {
        return null;
      }
    },
    saveCustomProfile: async e => {
      let t = s();
      if (!t?.saveCustomProfile) {
        return {
          success: false,
          message: "Electron API ไม่พร้อมใช้งาน"
        };
      }
      try {
        let s = await t.saveCustomProfile(e);
        if (s?.success) {
          await n().fetchAccounts();
        }
        return s;
      } catch (e) {
        return {
          success: false,
          message: e instanceof Error ? e.message : "เกิดข้อผิดพลาดในการบันทึกโปรไฟล์"
        };
      }
    }
  }));
  e.s(["default", 0, n, "useAccountsStore", 0, n]);
}]);
