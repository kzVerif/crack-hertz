(globalThis.TURBOPACK ||= []).push([typeof document == "object" ? document.currentScript : undefined, 78828, e => {
  "use strict";

  var t = e.i(66497);
  var s = e.i(10977);
  var a = e.i(14326);
  var r = e.i(55932);
  var l = e.i(55718);
  var n = e.i(40702);
  var i = e.i(26874);
  var c = e.i(23049);
  var o = e.i(14024);
  var d = e.i(57445);
  var x = e.i(9741);
  var u = e.i(45281);
  var m = e.i(66842);
  var p = e.i(28719);
  e.s(["default", 0, () => {
    let {
      toast: e,
      confirm: h
    } = (0, u.useToast)();
    let {
      accounts: b,
      isLoading: g,
      fetchAccounts: f
    } = (0, m.default)();
    let {
      overallStats: v,
      accountStats: _,
      fetchOverallStats: j,
      fetchAccountStats: w,
      resetUserStats: y,
      resetAllStats: N
    } = (0, p.default)();
    let [S, k] = (0, s.useState)(null);
    let [z, L] = (0, s.useState)(false);
    let A = (0, s.useCallback)(async () => {
      await Promise.allSettled([f(), j()]);
    }, [f, j]);
    (0, s.useEffect)(() => {
      A();
    }, [A]);
    (0, s.useEffect)(() => {
      if (b.length > 0) {
        b.forEach(e => {
          w(e.id);
        });
      }
    }, [b, w]);
    let C = async (t, s) => {
      if (await h({
        title: "ยืนยันการรีเซ็ตสถิติบัญชี",
        message: `คุณแน่ใจหรือไม่ว่าต้องการรีเซ็ตสถิติของบัญชี "${s}"? ยอดโพสต์สำเร็จ ล้มเหลว และรออนุมัติของบัญชีนี้จะถูกรีเซ็ตกลับเป็น 0`,
        confirmText: "รีเซ็ตสถิติ",
        cancelText: "ยกเลิก",
        variant: "danger"
      })) {
        k(t);
        try {
          if (await y(t)) {
            e.success(`รีเซ็ตสถิติของบัญชี "${s}" เรียบร้อยแล้ว`, "สำเร็จ");
            j();
          } else {
            e.error(`ไม่สามารถรีเซ็ตสถิติของบัญชี "${s}" ได้`, "ข้อผิดพลาด");
          }
        } catch {
          e.error("เกิดข้อผิดพลาดในการรีเซ็ตสถิติ", "ข้อผิดพลาด");
        } finally {
          k(null);
        }
      }
    };
    let T = async () => {
      if (await h({
        title: "ยืนยันการล้างสถิติทั้งหมด",
        message: "คุณแน่ใจหรือไม่ว่าต้องการรีเซ็ตสถิติทั้งหมดของระบบ? ข้อมูลกราฟย้อนหลัง ยอดรวม และสถิติของทุกบัญชีจะถูกรีเซ็ตเป็น 0 ทั้งหมด และไม่สามารถกู้คืนได้",
        confirmText: "ล้างสถิติทั้งหมด",
        cancelText: "ยกเลิก",
        variant: "danger"
      })) {
        L(true);
        try {
          if (await N()) {
            e.success("รีเซ็ตสถิติทั้งหมดของระบบเรียบร้อยแล้ว", "สำเร็จ");
            b.forEach(e => {
              w(e.id);
            });
          } else {
            e.error("ไม่สามารถรีเซ็ตสถิติทั้งหมดได้", "ข้อผิดพลาด");
          }
        } catch {
          e.error("เกิดข้อผิดพลาดในการรีเซ็ตสถิติ", "ข้อผิดพลาด");
        } finally {
          L(false);
        }
      }
    };
    return <div className="\n        group relative\n        overflow-clip\n        rounded-2xl\n        bg-neutral-950\n        border border-white/[0.12]\n        p-5\n        shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]\n        transition-all\n        duration-200\n        ease-out\n      "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20 z-10" /><div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/[0.04] blur-2xl transition-all duration-300 group-hover:bg-white/[0.07]" /><div className="relative z-10"><div className="\n            sticky top-0 z-30\n            -mx-5 -mt-5 px-5 pt-5 pb-4\n            bg-neutral-950/90 backdrop-blur-md\n            border-b border-white/[0.08]\n            rounded-t-2xl\n            shadow-[0_8px_20px_rgba(0,0,0,0.45)]\n          "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20 z-40" /><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"><div className="min-w-0"><div className="flex items-center gap-2"><h3 className="text-base font-semibold text-sky-400 tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">ข้อมูลและสถิติ</h3></div><p className="mt-1 text-xs text-neutral-400 leading-relaxed">จัดการและรีเซ็ตประวัติสถิติการโพสต์ของแต่ละบัญชีผู้ใช้ หรือล้างข้อมูลสถิติภาพรวมทั้งหมดในระบบ</p></div><div className="shrink-0"><d.default type="button" variant="danger" size="sm" onClick={T} disabled={z || g} className="w-full sm:w-auto">{z ? <l.Loader2 size={14} className="animate-spin text-white" /> : <a.RotateCcw size={14} />}รีเซ็ตสถิติทั้งหมด</d.default></div></div></div><div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5"><div className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-2.5 shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400"><o.ListChecks size={16} /></div><div><p className="text-[11px] font-medium text-neutral-400">ยอดโพสต์รวม</p><p className="text-sm font-semibold text-blue-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">{v.total.toLocaleString()}</p></div></div><div className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-2.5 shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"><n.CheckCircle2 size={16} /></div><div><p className="text-[11px] font-medium text-neutral-400">สำเร็จ</p><p className="text-sm font-semibold text-emerald-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">{v.success.toLocaleString()}</p></div></div><div className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-2.5 shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 text-red-400"><i.XCircle size={16} /></div><div><p className="text-[11px] font-medium text-neutral-400">ล้มเหลว</p><p className="text-sm font-semibold text-red-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">{v.failed.toLocaleString()}</p></div></div><div className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-2.5 shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400"><c.Clock3 size={16} /></div><div><p className="text-[11px] font-medium text-neutral-400">รออนุมัติ</p><p className="text-sm font-semibold text-amber-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">{v.pending.toLocaleString()}</p></div></div></div><div className="mt-5 mb-3 flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">สถิติรายบัญชี ({b.length})</span></div>{g && <div className="flex h-36 w-full flex-col items-center justify-center gap-2 text-neutral-400"><l.Loader2 className="h-5 w-5 animate-spin text-sky-400" /><span className="text-xs">กำลังโหลดข้อมูลบัญชี...</span></div>}{!g && b.length === 0 && <x.default icon={r.User} title="ยังไม่มีบัญชีในระบบ" desc="เพิ่มบัญชี Facebook ที่เมนู “บัญชีผู้ใช้” เพื่อเริ่มต้นจัดการสถิติ" minHeight="min-h-[160px]" />}{!g && b.length > 0 && <div className="space-y-2.5">{b.map(e => {
            let s = e.avatarLocal || e.avatar;
            let n = S === e.id;
            let i = _[e.id] || {
              total: 0,
              success: 0,
              failed: 0,
              pending: 0
            };
            return <div className="\n                    group/item relative\n                    overflow-hidden\n                    flex flex-col md:flex-row md:items-center justify-between gap-3\n                    rounded-xl\n                    border border-white/[0.08]\n                    bg-white/[0.02]\n                    hover:bg-white/[0.04]\n                    hover:border-white/[0.16]\n                    p-3.5\n                    shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]\n                    transition-all\n                    duration-200\n                  " key={e.id}><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/10" /><div className="flex items-center gap-3 min-w-0 md:w-56 shrink-0"><div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/[0.12] bg-neutral-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.4)]">{s ? <img src={s} alt={e.name} className="h-full w-full object-cover" onError={e => {
                    e.currentTarget.style.display = "none";
                  }} /> : <r.User size={18} className="text-neutral-400" />}</div><div className="min-w-0 flex-1"><h4 className="truncate text-sm font-semibold tracking-tight text-neutral-100">{e.name}</h4><p className="truncate text-[11px] text-neutral-400 font-mono">ID: {e.fbId || e.id}</p></div></div><div className="flex flex-wrap items-center gap-2 min-w-0 flex-1"><div className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-xs"><span className="text-neutral-400 text-[11px]">ทั้งหมด:</span><span className="font-semibold text-blue-400">{i.total.toLocaleString()}</span></div><div className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs"><span className="text-neutral-400 text-[11px]">สำเร็จ:</span><span className="font-semibold text-emerald-400">{i.success.toLocaleString()}</span></div><div className="inline-flex items-center gap-1.5 rounded-lg border border-red-500/20 bg-red-500/10 px-2.5 py-1 text-xs"><span className="text-neutral-400 text-[11px]">ล้มเหลว:</span><span className="font-semibold text-red-400">{i.failed.toLocaleString()}</span></div><div className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-xs"><span className="text-neutral-400 text-[11px]">รออนุมัติ:</span><span className="font-semibold text-amber-400">{i.pending.toLocaleString()}</span></div></div><div className="shrink-0 flex items-center justify-end"><d.default type="button" variant="secondary" size="sm" onClick={() => C(e.id, e.name)} disabled={n || z} title={`รีเซ็ตสถิติของ ${e.name}`} className="hover:border-red-500/40 hover:text-red-400">{n ? <l.Loader2 size={13} className="animate-spin text-red-400" /> : <a.RotateCcw size={13} className="text-neutral-400 group-hover:text-red-400" />}<span className="text-xs">รีเซ็ตสถิติ</span></d.default></div></div>;
          })}</div>}</div><div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/20 to-transparent" /></div>;
  }]);
}, 9741, e => {
  "use strict";

  var t = e.i(66497);
  var s = e.i(10977);
  e.s(["default", 0, ({
    icon: _Component,
    title: a,
    desc: r,
    description: l,
    action: n,
    children: i,
    className: c = "",
    iconColor: o = "text-blue-400",
    minHeight: d = "min-h-[320px]"
  }) => {
    let x = r ?? l;
    return <div className={`
        group relative overflow-hidden flex flex-1 w-full flex-col items-center justify-center
        rounded-2xl border border-white/[0.12] bg-neutral-950 p-8 text-center select-none
        shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]
        ${d}
        ${c}
      `}><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20" /><div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/[0.03] blur-2xl" />{_Component && <div className="\n            mb-4 flex h-16 w-16 items-center justify-center\n            rounded-2xl border border-white/[0.12] bg-neutral-900\n            shadow-[0_4px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)]\n          ">{_Component ? s.default.isValidElement(_Component) ? _Component : <_Component size={28} className={`${o} drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]`} strokeWidth={1.8} /> : null}</div>}{a && <h3 className="text-base font-semibold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">{a}</h3>}{x && <p className="mt-2 max-w-sm text-xs leading-relaxed text-neutral-400">{x}</p>}{n && <div className="mt-5">{n}</div>}{i}<div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black/25 to-transparent" /></div>;
  }]);
}, 26874, e => {
  "use strict";

  var t = e.i(2692);
  let s = {
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
  s.node;
  let a = (0, t.default)(s);
  e.s(["XCircle", 0, a], 26874);
}, 23049, e => {
  "use strict";

  var t = e.i(2692);
  let s = {
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
  s.node;
  let a = (0, t.default)(s);
  e.s(["Clock3", 0, a], 23049);
}, 14024, e => {
  "use strict";

  var t = e.i(2692);
  let s = {
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
  s.node;
  let a = (0, t.default)(s);
  e.s(["ListChecks", 0, a], 14024);
}, 55932, e => {
  "use strict";

  var t = e.i(2692);
  let s = {
    name: "user",
    size: 24,
    node: [["path", {
      d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
      key: "975kel"
    }], ["circle", {
      cx: "12",
      cy: "7",
      r: "4",
      key: "17ys0d"
    }]]
  };
  s.node;
  let a = (0, t.default)(s);
  e.s(["User", 0, a], 55932);
}, 28719, e => {
  "use strict";

  var t = e.i(1347);
  let s = () => window.electronApi?.stats ? window.electronApi.stats : null;
  let a = {
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
  let n = null;
  let i = null;
  let c = (0, t.create)((e, t) => ({
    overallStats: {
      ...a
    },
    accountStats: {},
    dailyStats: [],
    dailyRange: 1,
    isLoading: true,
    error: null,
    fetchOverallStats: async () => {
      let t = s();
      if (!t) {
        e({
          isLoading: false
        });
        return;
      }
      try {
        let s = await t.getAll();
        e({
          overallStats: {
            total: s?.total ?? 0,
            success: s?.success ?? 0,
            failed: s?.failed ?? 0,
            pending: s?.pending ?? 0,
            updatedAt: s?.updatedAt
          },
          isLoading: false,
          error: null
        });
      } catch (s) {
        let t = s instanceof Error ? s.message : "Failed to fetch overall stats";
        console.error("Failed to fetch overall stats:", s);
        e({
          error: t,
          isLoading: false
        });
      }
    },
    fetchAccountStats: async t => {
      let a = s();
      if (!a) {
        return null;
      }
      let r = String(t);
      try {
        let t = await a.getUser(r);
        let s = {
          total: t?.total ?? 0,
          success: t?.success ?? 0,
          failed: t?.failed ?? 0,
          pending: t?.pending ?? 0,
          post: t?.post ?? 0,
          comment: t?.comment ?? 0,
          reaction: t?.reaction ?? 0,
          updatedAt: t?.updatedAt,
          userId: r
        };
        e(e => ({
          accountStats: {
            ...e.accountStats,
            [r]: s
          }
        }));
        return s;
      } catch (e) {
        console.error(`Failed to fetch stats for user ${r}:`, e);
        return null;
      }
    },
    fetchDailyStats: async a => {
      let r = s();
      if (!r) {
        return;
      }
      let l = typeof a == "number" ? a : t().dailyRange;
      e({
        dailyRange: l
      });
      try {
        let t = await r.getDaily(l);
        e({
          dailyStats: Array.isArray(t) ? t : []
        });
      } catch (e) {
        console.error("Failed to fetch daily stats:", e);
      }
    },
    fetchAll: async (s = 14) => {
      e({
        isLoading: true,
        error: null
      });
      await Promise.allSettled([t().fetchOverallStats(), t().fetchDailyStats(s)]);
      e({
        isLoading: false
      });
    },
    recordOutcome: async (t, r) => {
      let l = String(t);
      e(e => {
        let t = e.overallStats;
        let s = e.accountStats[l] || {
          ...a,
          userId: l
        };
        return {
          overallStats: {
            ...t,
            total: t.total + 1,
            [r]: (t[r] || 0) + 1
          },
          accountStats: {
            ...e.accountStats,
            [l]: {
              ...s,
              total: s.total + 1,
              [r]: (s[r] || 0) + 1
            }
          }
        };
      });
      let n = s();
      if (n) {
        try {
          await n.record(l, r);
        } catch (e) {
          console.error("Failed to record stat outcome:", e);
        }
      }
    },
    setOverallStats: t => {
      e(e => ({
        overallStats: {
          ...e.overallStats,
          ...t
        }
      }));
    },
    resetStats: () => {
      e({
        overallStats: {
          ...a
        },
        accountStats: {},
        dailyStats: [],
        error: null
      });
    },
    removeUserStat: t => {
      let s = String(t);
      e(e => {
        let t = {
          ...e.accountStats
        };
        delete t[s];
        return {
          accountStats: t
        };
      });
    },
    resetUserStats: async r => {
      let l = s();
      if (!l) {
        return false;
      }
      let n = String(r);
      try {
        let s = await l.resetUser(n);
        if (s?.success) {
          e(e => ({
            accountStats: {
              ...e.accountStats,
              [n]: {
                ...a,
                userId: n
              }
            }
          }));
          await Promise.allSettled([t().fetchOverallStats(), t().fetchDailyStats()]);
          return true;
        }
        return false;
      } catch (e) {
        console.error(`Failed to reset stats for user ${n}:`, e);
        return false;
      }
    },
    resetAllStats: async () => {
      let r = s();
      if (!r) {
        return false;
      }
      try {
        let s = await r.resetAll();
        if (s?.success) {
          e({
            overallStats: {
              ...a
            },
            accountStats: {},
            dailyStats: []
          });
          await Promise.allSettled([t().fetchOverallStats(), t().fetchDailyStats()]);
          return true;
        }
        return false;
      } catch (e) {
        console.error("Failed to reset all stats:", e);
        return false;
      }
    },
    initStatsListeners: () => {
      let s = window.electronApi?.post ? window.electronApi.post : null;
      if (s?.onProgress) {
        r++;
        l ||= s.onProgress(s => {
          let r = s.outcome || (s.success ? "success" : "failed");
          if (!["success", "failed", "pending"].includes(r)) {
            return;
          }
          let l = String(s.userId);
          let c = !!(s.stats?.isFullSuccess ?? r === "success");
          let o = !!(s.stats?.hasFailed ?? r === "failed");
          let d = !!(s.stats?.isPending ?? r === "pending");
          let x = !!(s.stats?.postSuccess ?? r === "success");
          let u = typeof s.stats?.commentCount == "number" ? s.stats.commentCount : s.comment?.success && typeof s.comment.count == "number" ? s.comment.count : 0;
          let m = typeof s.stats?.reactionSuccess == "boolean" ? +!!s.stats.reactionSuccess : s.reaction?.success && s.reaction.outcome !== "already_reacted" ? 1 : 0;
          e(e => {
            let t = e.overallStats;
            let s = e.accountStats[l] || {
              ...a,
              userId: l
            };
            return {
              overallStats: {
                ...t,
                total: t.total + 1,
                success: t.success + +!!c,
                failed: t.failed + +!!o,
                pending: t.pending + +!!d
              },
              accountStats: {
                ...e.accountStats,
                [l]: {
                  ...s,
                  total: s.total + 1,
                  success: s.success + +!!c,
                  failed: s.failed + +!!o,
                  pending: s.pending + +!!d,
                  post: (s.post || 0) + +!!x,
                  comment: (s.comment || 0) + u,
                  reaction: (s.reaction || 0) + m
                }
              }
            };
          });
          i = l;
          if (n) {
            clearTimeout(n);
          }
          n = setTimeout(() => {
            n = null;
            let e = i;
            t().fetchOverallStats();
            t().fetchDailyStats();
            if (e) {
              t().fetchAccountStats(e);
            }
          }, 3000);
        });
        return () => {
          if ((r = Math.max(0, r - 1)) === 0) {
            if (l) {
              l();
              l = null;
            }
            if (n) {
              clearTimeout(n);
              n = null;
            }
          }
        };
      } else {
        return () => {};
      }
    }
  }));
  e.s(["default", 0, c, "useStatsStore", 0, c]);
}]);
