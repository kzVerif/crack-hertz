(globalThis.TURBOPACK ||= []).push([typeof document == "object" ? document.currentScript : undefined, 58259, e => {
  "use strict";

  var r = e.i(1347);
  let t = () => window.electronApi?.group ? window.electronApi.group : null;
  let s = (0, r.create)((e, r) => ({
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
    openCreateDialog: (r = null) => {
      e({
        isCreateDialogOpen: true,
        createPrefillData: r
      });
    },
    closeCreateDialog: () => {
      e({
        isCreateDialogOpen: false,
        createPrefillData: null
      });
    },
    fetchGroups: async s => {
      let a = s !== undefined ? s : r().currentUserId;
      if (s !== undefined) {
        e({
          currentUserId: s
        });
      }
      let l = t();
      if (!l) {
        e({
          isLoading: false
        });
        return;
      }
      e({
        isLoading: true,
        error: null
      });
      try {
        let r = await l.getAll(a);
        e({
          groups: r || [],
          isLoading: false
        });
      } catch (t) {
        let r = t instanceof Error ? t.message : "Failed to fetch groups";
        console.error("Failed to fetch groups:", t);
        e({
          error: r,
          isLoading: false
        });
      }
    },
    createGroup: async s => {
      let a = t();
      if (!a) {
        return {
          success: false,
          message: "Electron API ไม่พร้อมใช้งาน"
        };
      }
      e({
        isCreating: true,
        error: null
      });
      try {
        let t = await a.create(s);
        if (t.success) {
          await r().fetchGroups(s.userId);
        } else {
          e({
            error: t.message
          });
        }
        return t;
      } catch (t) {
        let r = t instanceof Error ? t.message : "เกิดข้อผิดพลาดในการสร้างกลุ่ม";
        console.error("Failed to create group:", t);
        e({
          error: r
        });
        return {
          success: false,
          message: r
        };
      } finally {
        e({
          isCreating: false
        });
      }
    },
    updateGroup: async s => {
      let a = t();
      if (!a) {
        return {
          success: false,
          message: "Electron API ไม่พร้อมใช้งาน"
        };
      }
      e({
        isCreating: true,
        error: null
      });
      try {
        let t = await a.update(s);
        if (t.success) {
          await r().fetchGroups(s.userId);
        } else {
          e({
            error: t.message
          });
        }
        return t;
      } catch (t) {
        let r = t instanceof Error ? t.message : "เกิดข้อผิดพลาดในการแก้ไขกลุ่ม";
        console.error("Failed to update group:", t);
        e({
          error: r
        });
        return {
          success: false,
          message: r
        };
      } finally {
        e({
          isCreating: false
        });
      }
    },
    deleteGroup: async (r, s) => {
      let a = t();
      if (!a) {
        return {
          success: false,
          message: "Electron API ไม่พร้อมใช้งาน"
        };
      }
      e({
        isDeleting: true,
        error: null
      });
      try {
        let t = await a.delete(r, s);
        if (t?.success) {
          e(e => ({
            groups: e.groups.filter(e => e.name !== r),
            selectedGroup: e.selectedGroup?.name === r ? null : e.selectedGroup
          }));
        } else {
          e({
            error: t.message
          });
        }
        return t;
      } catch (t) {
        let r = t instanceof Error ? t.message : "เกิดข้อผิดพลาดในการลบกลุ่ม";
        console.error("Failed to delete group:", t);
        e({
          error: r
        });
        return {
          success: false,
          message: r
        };
      } finally {
        e({
          isDeleting: false
        });
      }
    },
    getGroupByName: async (e, r) => {
      let s = t();
      if (!s) {
        return null;
      }
      try {
        return await s.getByName(e, r);
      } catch (e) {
        console.error("Failed to get group by name:", e);
        return null;
      }
    },
    selectImages: async () => {
      let e = t();
      if (!e) {
        return [];
      }
      try {
        return await e.selectImages();
      } catch (e) {
        console.error("Failed to select images:", e);
        return [];
      }
    },
    getImagePreview: async (e, r, s) => {
      let a = t();
      if (!a?.getImagePreview) {
        return null;
      }
      try {
        return await a.getImagePreview(e, r, s);
      } catch (e) {
        console.error("Failed to get image preview:", e);
        return null;
      }
    },
    toggleActiveGroup: async (s, a, l) => {
      let o = r().groups;
      let c = o.find(e => e.name === s);
      if (!c) {
        return {
          success: false,
          message: "ไม่พบกลุ่มที่ต้องการ"
        };
      }
      let i = c.isActive !== false;
      let u = l !== undefined ? l : !i;
      e({
        groups: o.map(e => e.name === s ? {
          ...e,
          isActive: u
        } : e)
      });
      let n = t();
      if (!n) {
        return {
          success: true,
          message: "อัปเดตสถานะสำเร็จ (Local)",
          isActive: u
        };
      }
      try {
        if (n.toggleActive) {
          let r = await n.toggleActive(s, a, u);
          if (!r.success) {
            e({
              groups: o
            });
          }
          return r;
        }
        {
          let r = await n.update({
            oldName: s,
            name: s,
            userId: a,
            isActive: u
          });
          if (!r.success) {
            e({
              groups: o
            });
          }
          return {
            success: r.success,
            message: r.message,
            isActive: u
          };
        }
      } catch (r) {
        e({
          groups: o
        });
        return {
          success: false,
          message: r instanceof Error ? r.message : "เกิดข้อผิดพลาดในการเปลี่ยนสถานะ"
        };
      }
    },
    setSelectedGroup: r => {
      e({
        selectedGroup: r
      });
    },
    setStatusFilter: r => {
      e({
        statusFilter: r
      });
    },
    clearError: () => {
      e({
        error: null
      });
    }
  }));
  e.s(["default", 0, s, "useGroupsStore", 0, s]);
}]);
