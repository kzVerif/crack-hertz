module.exports = [88115, a => {
  "use strict";

  let b = (0, a.i(91402).create)((a, b) => ({
    groups: [],
    currentUserId: undefined,
    selectedGroup: null,
    statusFilter: "all",
    isLoading: false,
    isCreating: false,
    isDeleting: false,
    error: null,
    isCreateDialogOpen: false,
    createPrefillData: null,
    openCreateDialog: (b = null) => {
      a({
        isCreateDialogOpen: true,
        createPrefillData: b
      });
    },
    closeCreateDialog: () => {
      a({
        isCreateDialogOpen: false,
        createPrefillData: null
      });
    },
    fetchGroups: async c => {
      if (c === undefined) {
        b().currentUserId;
      }
      if (c !== undefined) {
        a({
          currentUserId: c
        });
      }
      a({
        isLoading: false
      });
    },
    createGroup: async a => ({
      success: false,
      message: "Electron API ไม่พร้อมใช้งาน"
    }),
    updateGroup: async a => ({
      success: false,
      message: "Electron API ไม่พร้อมใช้งาน"
    }),
    deleteGroup: async (a, b) => ({
      success: false,
      message: "Electron API ไม่พร้อมใช้งาน"
    }),
    getGroupByName: async (a, b) => null,
    selectImages: async () => [],
    getImagePreview: async (a, b, c) => null,
    toggleActiveGroup: async (c, d, e) => {
      let f = b().groups;
      let g = f.find(a => a.name === c);
      if (!g) {
        return {
          success: false,
          message: "ไม่พบกลุ่มที่ต้องการ"
        };
      }
      let h = g.isActive !== false;
      let i = e !== undefined ? e : !h;
      a({
        groups: f.map(a => a.name === c ? {
          ...a,
          isActive: i
        } : a)
      });
      return {
        success: true,
        message: "อัปเดตสถานะสำเร็จ (Local)",
        isActive: i
      };
    },
    setSelectedGroup: b => {
      a({
        selectedGroup: b
      });
    },
    setStatusFilter: b => {
      a({
        statusFilter: b
      });
    },
    clearError: () => {
      a({
        error: null
      });
    }
  }));
  a.s(["default", 0, b, "useGroupsStore", 0, b]);
}];

//# sourceMappingURL=client_store_groupsStore_ts_0a5lx-s._.js.map
