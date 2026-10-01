module.exports = [13320, a => {
  "use strict";

  let b = (0, a.i(91402).create)((a, b) => ({
    accounts: [],
    selectedAccountId: null,
    isLoading: true,
    isAdding: false,
    deletingId: null,
    error: null,
    isCustomProfileOpen: false,
    customProfileInitialData: null,
    setSelectedAccountId: b => {
      a({
        selectedAccountId: b
      });
    },
    fetchAccounts: async () => {
      a({
        isLoading: false
      });
    },
    deleteAccount: async a => ({
      success: false,
      message: "Electron API ไม่พร้อมใช้งาน"
    }),
    startAddingAccount: async () => ({
      status: "error",
      message: "Electron API ไม่พร้อมใช้งาน"
    }),
    stopAddingAccount: async () => ({
      status: "error",
      message: "Electron API ไม่พร้อมใช้งาน"
    }),
    getAccountById: a => b().accounts.find(b => b.id === a),
    initAccountListeners: a => () => {},
    openCustomProfile: (b = null) => {
      a({
        isCustomProfileOpen: true,
        customProfileInitialData: b
      });
    },
    closeCustomProfile: () => {
      a({
        isCustomProfileOpen: false,
        customProfileInitialData: null
      });
    },
    selectAvatar: async () => null,
    saveCustomProfile: async a => ({
      success: false,
      message: "Electron API ไม่พร้อมใช้งาน"
    })
  }));
  a.s(["default", 0, b, "useAccountsStore", 0, b]);
}];

//# sourceMappingURL=client_store_accountsStore_ts_052-ln0._.js.map
