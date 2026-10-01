module.exports = [40322, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(9651);
  var d = a.i(16330);
  var e = a.i(79162);
  var f = a.i(76950);
  var g = a.i(72370);
  var h = a.i(36972);
  var i = a.i(22426);
  var j = a.i(93301);
  var k = a.i(15723);
  var l = a.i(3322);
  var m = a.i(22370);
  var n = a.i(13320);
  var o = a.i(75875);
  a.s(["default", 0, () => {
    let {
      toast: a,
      confirm: p
    } = (0, m.useToast)();
    let {
      accounts: q,
      isLoading: r,
      fetchAccounts: s
    } = (0, n.default)();
    let {
      overallStats: t,
      accountStats: u,
      fetchOverallStats: v,
      fetchAccountStats: w,
      resetUserStats: x,
      resetAllStats: y
    } = (0, o.default)();
    let [z, A] = (0, c.useState)(null);
    let [B, C] = (0, c.useState)(false);
    let D = (0, c.useCallback)(async () => {
      await Promise.allSettled([s(), v()]);
    }, [s, v]);
    (0, c.useEffect)(() => {
      D();
    }, [D]);
    (0, c.useEffect)(() => {
      if (q.length > 0) {
        q.forEach(a => {
          w(a.id);
        });
      }
    }, [q, w]);
    let E = async (b, c) => {
      if (await p({
        title: "ยืนยันการรีเซ็ตสถิติบัญชี",
        message: `คุณแน่ใจหรือไม่ว่าต้องการรีเซ็ตสถิติของบัญชี "${c}"? ยอดโพสต์สำเร็จ ล้มเหลว และรออนุมัติของบัญชีนี้จะถูกรีเซ็ตกลับเป็น 0`,
        confirmText: "รีเซ็ตสถิติ",
        cancelText: "ยกเลิก",
        variant: "danger"
      })) {
        A(b);
        try {
          if (await x(b)) {
            a.success(`รีเซ็ตสถิติของบัญชี "${c}" เรียบร้อยแล้ว`, "สำเร็จ");
            v();
          } else {
            a.error(`ไม่สามารถรีเซ็ตสถิติของบัญชี "${c}" ได้`, "ข้อผิดพลาด");
          }
        } catch {
          a.error("เกิดข้อผิดพลาดในการรีเซ็ตสถิติ", "ข้อผิดพลาด");
        } finally {
          A(null);
        }
      }
    };
    let F = async () => {
      if (await p({
        title: "ยืนยันการล้างสถิติทั้งหมด",
        message: "คุณแน่ใจหรือไม่ว่าต้องการรีเซ็ตสถิติทั้งหมดของระบบ? ข้อมูลกราฟย้อนหลัง ยอดรวม และสถิติของทุกบัญชีจะถูกรีเซ็ตเป็น 0 ทั้งหมด และไม่สามารถกู้คืนได้",
        confirmText: "ล้างสถิติทั้งหมด",
        cancelText: "ยกเลิก",
        variant: "danger"
      })) {
        C(true);
        try {
          if (await y()) {
            a.success("รีเซ็ตสถิติทั้งหมดของระบบเรียบร้อยแล้ว", "สำเร็จ");
            q.forEach(a => {
              w(a.id);
            });
          } else {
            a.error("ไม่สามารถรีเซ็ตสถิติทั้งหมดได้", "ข้อผิดพลาด");
          }
        } catch {
          a.error("เกิดข้อผิดพลาดในการรีเซ็ตสถิติ", "ข้อผิดพลาด");
        } finally {
          C(false);
        }
      }
    };
    return <div className="\n        group relative\n        overflow-clip\n        rounded-2xl\n        bg-neutral-950\n        border border-white/[0.12]\n        p-5\n        shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]\n        transition-all\n        duration-200\n        ease-out\n      "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20 z-10" /><div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/[0.04] blur-2xl transition-all duration-300 group-hover:bg-white/[0.07]" /><div className="relative z-10"><div className="\n            sticky top-0 z-30\n            -mx-5 -mt-5 px-5 pt-5 pb-4\n            bg-neutral-950/90 backdrop-blur-md\n            border-b border-white/[0.08]\n            rounded-t-2xl\n            shadow-[0_8px_20px_rgba(0,0,0,0.45)]\n          "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20 z-40" /><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"><div className="min-w-0"><div className="flex items-center gap-2"><h3 className="text-base font-semibold text-sky-400 tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">ข้อมูลและสถิติ</h3></div><p className="mt-1 text-xs text-neutral-400 leading-relaxed">จัดการและรีเซ็ตประวัติสถิติการโพสต์ของแต่ละบัญชีผู้ใช้ หรือล้างข้อมูลสถิติภาพรวมทั้งหมดในระบบ</p></div><div className="shrink-0"><k.default type="button" variant="danger" size="sm" onClick={F} disabled={B || r} className="w-full sm:w-auto">{B ? <f.Loader2 size={14} className="animate-spin text-white" /> : <d.RotateCcw size={14} />}รีเซ็ตสถิติทั้งหมด</k.default></div></div></div><div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5"><div className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-2.5 shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400"><j.ListChecks size={16} /></div><div><p className="text-[11px] font-medium text-neutral-400">ยอดโพสต์รวม</p><p className="text-sm font-semibold text-blue-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">{t.total.toLocaleString()}</p></div></div><div className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-2.5 shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"><g.CheckCircle2 size={16} /></div><div><p className="text-[11px] font-medium text-neutral-400">สำเร็จ</p><p className="text-sm font-semibold text-emerald-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">{t.success.toLocaleString()}</p></div></div><div className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-2.5 shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 text-red-400"><h.XCircle size={16} /></div><div><p className="text-[11px] font-medium text-neutral-400">ล้มเหลว</p><p className="text-sm font-semibold text-red-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">{t.failed.toLocaleString()}</p></div></div><div className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-2.5 shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400"><i.Clock3 size={16} /></div><div><p className="text-[11px] font-medium text-neutral-400">รออนุมัติ</p><p className="text-sm font-semibold text-amber-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">{t.pending.toLocaleString()}</p></div></div></div><div className="mt-5 mb-3 flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">สถิติรายบัญชี ({q.length})</span></div>{r && <div className="flex h-36 w-full flex-col items-center justify-center gap-2 text-neutral-400"><f.Loader2 className="h-5 w-5 animate-spin text-sky-400" /><span className="text-xs">กำลังโหลดข้อมูลบัญชี...</span></div>}{!r && q.length === 0 && <l.default icon={e.User} title="ยังไม่มีบัญชีในระบบ" desc="เพิ่มบัญชี Facebook ที่เมนู “บัญชีผู้ใช้” เพื่อเริ่มต้นจัดการสถิติ" minHeight="min-h-[160px]" />}{!r && q.length > 0 && <div className="space-y-2.5">{q.map(a => {
            let c = a.avatarLocal || a.avatar;
            let g = z === a.id;
            let h = u[a.id] || {
              total: 0,
              success: 0,
              failed: 0,
              pending: 0
            };
            return <div className="\n                    group/item relative\n                    overflow-hidden\n                    flex flex-col md:flex-row md:items-center justify-between gap-3\n                    rounded-xl\n                    border border-white/[0.08]\n                    bg-white/[0.02]\n                    hover:bg-white/[0.04]\n                    hover:border-white/[0.16]\n                    p-3.5\n                    shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]\n                    transition-all\n                    duration-200\n                  " key={a.id}><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/10" /><div className="flex items-center gap-3 min-w-0 md:w-56 shrink-0"><div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/[0.12] bg-neutral-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.4)]">{c ? <img src={c} alt={a.name} className="h-full w-full object-cover" onError={a => {
                    a.currentTarget.style.display = "none";
                  }} /> : <e.User size={18} className="text-neutral-400" />}</div><div className="min-w-0 flex-1"><h4 className="truncate text-sm font-semibold tracking-tight text-neutral-100">{a.name}</h4><p className="truncate text-[11px] text-neutral-400 font-mono">ID: {a.fbId || a.id}</p></div></div><div className="flex flex-wrap items-center gap-2 min-w-0 flex-1"><div className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-xs"><span className="text-neutral-400 text-[11px]">ทั้งหมด:</span><span className="font-semibold text-blue-400">{h.total.toLocaleString()}</span></div><div className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs"><span className="text-neutral-400 text-[11px]">สำเร็จ:</span><span className="font-semibold text-emerald-400">{h.success.toLocaleString()}</span></div><div className="inline-flex items-center gap-1.5 rounded-lg border border-red-500/20 bg-red-500/10 px-2.5 py-1 text-xs"><span className="text-neutral-400 text-[11px]">ล้มเหลว:</span><span className="font-semibold text-red-400">{h.failed.toLocaleString()}</span></div><div className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-xs"><span className="text-neutral-400 text-[11px]">รออนุมัติ:</span><span className="font-semibold text-amber-400">{h.pending.toLocaleString()}</span></div></div><div className="shrink-0 flex items-center justify-end"><k.default type="button" variant="secondary" size="sm" onClick={() => E(a.id, a.name)} disabled={g || B} title={`รีเซ็ตสถิติของ ${a.name}`} className="hover:border-red-500/40 hover:text-red-400">{g ? <f.Loader2 size={13} className="animate-spin text-red-400" /> : <d.RotateCcw size={13} className="text-neutral-400 group-hover:text-red-400" />}<span className="text-xs">รีเซ็ตสถิติ</span></k.default></div></div>;
          })}</div>}</div><div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/20 to-transparent" /></div>;
  }]);
}, 3322, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(9651);
  a.s(["default", 0, ({
    icon: _Component,
    title: d,
    desc: e,
    description: f,
    action: g,
    children: h,
    className: i = "",
    iconColor: j = "text-blue-400",
    minHeight: k = "min-h-[320px]"
  }) => {
    let l = e ?? f;
    return <div className={`
        group relative overflow-hidden flex flex-1 w-full flex-col items-center justify-center
        rounded-2xl border border-white/[0.12] bg-neutral-950 p-8 text-center select-none
        shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]
        ${k}
        ${i}
      `}><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20" /><div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/[0.03] blur-2xl" />{_Component && <div className="\n            mb-4 flex h-16 w-16 items-center justify-center\n            rounded-2xl border border-white/[0.12] bg-neutral-900\n            shadow-[0_4px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)]\n          ">{_Component ? c.default.isValidElement(_Component) ? _Component : <_Component size={28} className={`${j} drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]`} strokeWidth={1.8} /> : null}</div>}{d && <h3 className="text-base font-semibold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">{d}</h3>}{l && <p className="mt-2 max-w-sm text-xs leading-relaxed text-neutral-400">{l}</p>}{g && <div className="mt-5">{g}</div>}{h}<div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black/25 to-transparent" /></div>;
  }]);
}, 36972, a => {
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
}, 79162, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
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
  c.node;
  let d = (0, b.default)(c);
  a.s(["User", 0, d], 79162);
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

//# sourceMappingURL=client_0ug-zng._.js.map
