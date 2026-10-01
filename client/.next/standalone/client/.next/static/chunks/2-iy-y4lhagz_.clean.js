(globalThis.TURBOPACK ||= []).push([typeof document == "object" ? document.currentScript : undefined, 9741, e => {
  "use strict";

  var t = e.i(66497);
  var r = e.i(10977);
  e.s(["default", 0, ({
    icon: _Component,
    title: a,
    desc: s,
    description: o,
    action: n,
    children: l,
    className: i = "",
    iconColor: d = "text-blue-400",
    minHeight: c = "min-h-[320px]"
  }) => {
    let u = s ?? o;
    return <div className={`
        group relative overflow-hidden flex flex-1 w-full flex-col items-center justify-center
        rounded-2xl border border-white/[0.12] bg-neutral-950 p-8 text-center select-none
        shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]
        ${c}
        ${i}
      `}><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20" /><div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/[0.03] blur-2xl" />{_Component && <div className="\n            mb-4 flex h-16 w-16 items-center justify-center\n            rounded-2xl border border-white/[0.12] bg-neutral-900\n            shadow-[0_4px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)]\n          ">{_Component ? r.default.isValidElement(_Component) ? _Component : <_Component size={28} className={`${d} drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]`} strokeWidth={1.8} /> : null}</div>}{a && <h3 className="text-base font-semibold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">{a}</h3>}{u && <p className="mt-2 max-w-sm text-xs leading-relaxed text-neutral-400">{u}</p>}{n && <div className="mt-5">{n}</div>}{l}<div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black/25 to-transparent" /></div>;
  }]);
}, 62980, e => {
  "use strict";

  var t = e.i(66497);
  var r = e.i(10977);
  var a = e.i(6794);
  var s = e.i(55169);
  let o = {
    blue: {
      dot: "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]",
      text: "text-blue-400",
      border: "border-blue-500/40",
      topLine: "bg-blue-400/40",
      softLight: "bg-blue-500/[0.12]"
    },
    emerald: {
      dot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]",
      text: "text-emerald-400",
      border: "border-emerald-500/40",
      topLine: "bg-emerald-400/40",
      softLight: "bg-emerald-500/[0.12]"
    },
    green: {
      dot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]",
      text: "text-emerald-400",
      border: "border-emerald-500/40",
      topLine: "bg-emerald-400/40",
      softLight: "bg-emerald-500/[0.12]"
    },
    red: {
      dot: "bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.6)]",
      text: "text-rose-400",
      border: "border-rose-500/40",
      topLine: "bg-rose-400/40",
      softLight: "bg-rose-500/[0.12]"
    },
    rose: {
      dot: "bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.6)]",
      text: "text-rose-400",
      border: "border-rose-500/40",
      topLine: "bg-rose-400/40",
      softLight: "bg-rose-500/[0.12]"
    },
    amber: {
      dot: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]",
      text: "text-amber-400",
      border: "border-amber-500/40",
      topLine: "bg-amber-400/40",
      softLight: "bg-amber-500/[0.12]"
    },
    yellow: {
      dot: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]",
      text: "text-amber-400",
      border: "border-amber-500/40",
      topLine: "bg-amber-400/40",
      softLight: "bg-amber-500/[0.12]"
    },
    purple: {
      dot: "bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.6)]",
      text: "text-purple-400",
      border: "border-purple-500/40",
      topLine: "bg-purple-400/40",
      softLight: "bg-purple-500/[0.12]"
    }
  };
  let n = {
    sm: {
      button: "h-8 px-3 text-xs gap-2 rounded-xl",
      text: "text-xs",
      count: "text-[11px] pl-2.5 ml-1.5",
      icon: "h-3.5 w-3.5"
    },
    md: {
      button: "h-10 px-3.5 text-xs sm:text-sm gap-2.5 rounded-xl",
      text: "text-xs sm:text-sm",
      count: "text-xs pl-3 ml-2",
      icon: "h-4 w-4"
    },
    lg: {
      button: "h-12 px-4.5 text-sm sm:text-base gap-3 rounded-2xl",
      text: "text-sm sm:text-base",
      count: "text-sm pl-3.5 ml-2.5",
      icon: "h-5 w-5"
    }
  };
  e.s(["default", 0, ({
    options: e,
    value: l,
    onChange: i,
    className: d = "",
    size: c = "md",
    placeholder: u = "เลือกตัวกรอง",
    disabled: p = false
  }) => {
    let [x, b] = (0, r.useState)(false);
    let g = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
      let e = e => {
        if (g.current && !g.current.contains(e.target)) {
          b(false);
        }
      };
      let t = e => {
        if (e.key === "Escape") {
          b(false);
        }
      };
      if (x) {
        document.addEventListener("mousedown", e);
        document.addEventListener("keydown", t);
      }
      return () => {
        document.removeEventListener("mousedown", e);
        document.removeEventListener("keydown", t);
      };
    }, [x]);
    let h = e.find(e => (e.id ?? e.value) === l) || e[0];
    let m = h?.color && o[h.color] ? o[h.color] : o.blue;
    let _ = h?.dotColor ? h.dotColor : h?.color ? m.dot : null;
    let w = n[c] ?? n.md;
    return <div ref={g} className={`relative inline-block ${d}`}><button type="button" onClick={() => !p && b(e => !e)} disabled={p} aria-haspopup="listbox" aria-expanded={x} className={`
          group relative
          flex items-center justify-between
          overflow-hidden
          border
          ${w.button}
          cursor-pointer select-none
          transition-all duration-200 ease-out
          ${x ? `
                bg-neutral-950
                ${m.border}
                ring-1 ring-blue-500/25
                text-white
                shadow-[0_4px_0_rgba(0,0,0,0.45),0_10px_20px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.18),inset_0_-1px_2px_rgba(0,0,0,0.5)]
                active:translate-y-[2px]
                active:shadow-[0_2px_0_rgba(0,0,0,0.45),0_4px_8px_rgba(0,0,0,0.25)]
              ` : `
                bg-neutral-950/80
                border-white/[0.10]
                text-neutral-300
                hover:text-white
                hover:border-white/[0.16]
                hover:bg-neutral-900/80
                shadow-[0_3px_0_rgba(0,0,0,0.35),0_6px_14px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_1px_rgba(0,0,0,0.4)]
                hover:shadow-[0_4px_0_rgba(0,0,0,0.4),0_8px_18px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.14),inset_0_-1px_1px_rgba(0,0,0,0.4)]
                active:translate-y-[1.5px]
                active:shadow-[0_1.5px_0_rgba(0,0,0,0.35),0_3px_6px_rgba(0,0,0,0.2)]
              `}
          ${p ? "opacity-40 cursor-not-allowed pointer-events-none" : ""}
        `}><div className={`
            pointer-events-none
            absolute inset-x-2.5 top-0
            h-px
            transition-all duration-200
            ${x ? m.topLine : "bg-white/15 group-hover:bg-white/25"}
          `} /><div className={`
            pointer-events-none
            absolute -left-6 -top-6
            h-16 w-16
            rounded-full
            blur-xl
            transition-all duration-300
            ${x ? m.softLight : "bg-white/[0.03] group-hover:bg-white/[0.06]"}
          `} /><div className="relative z-10 flex items-center gap-[inherit] min-w-0">{_ && <span className={`h-2 w-2 rounded-full shrink-0 ${_}`} />}{h?.icon && <span className={`
                flex items-center shrink-0 transition-transform duration-200 group-hover:scale-105
                ${m.text}
                drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]
              `}>{h.icon}</span>}<span className={`
              font-medium whitespace-nowrap truncate
              ${w.text}
              ${x ? "text-white font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]" : "text-neutral-200"}
            `}>{h?.label || u}</span>{typeof h?.count == "number" && <span className={`
                border-l font-semibold tabular-nums
                ${w.count}
                ${x ? `border-white/[0.15] ${m.text} drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]` : "border-white/[0.08] text-neutral-400 group-hover:text-neutral-200"}
              `}>{h.count}</span>}</div><a.ChevronDown className={`
            relative z-10 ml-2 h-4 w-4 shrink-0
            transition-transform duration-200
            drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]
            ${x ? "rotate-180 text-blue-400" : "text-neutral-400 group-hover:text-neutral-200"}
          `} /><div className="\n            pointer-events-none\n            absolute\n            inset-x-0\n            bottom-0\n            h-2.5\n            bg-gradient-to-t\n            from-black/25\n            to-transparent\n          " /></button>{x && <div role="listbox" className="\n            group/menu\n            absolute left-0 top-full mt-2 z-50\n            min-w-[200px] w-max max-w-xs\n            overflow-hidden\n            rounded-2xl\n            border border-white/[0.12]\n            bg-neutral-950/95\n            p-1.5\n            backdrop-blur-2xl\n            shadow-[0_8px_0_rgba(0,0,0,0.5),0_16px_36px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.14),inset_0_-1px_2px_rgba(0,0,0,0.6)]\n            animate-in fade-in zoom-in-95 duration-150\n          "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20" /><div className="pointer-events-none absolute -left-8 -top-8 h-20 w-20 rounded-full bg-white/[0.04] blur-xl" /><div className="relative z-10 flex flex-col gap-0.5">{e.map(e => {
            let r = e.id ?? e.value;
            let a = l === r;
            let n = e.color && o[e.color] ? o[e.color] : o.blue;
            let d = e.dotColor ? e.dotColor : e.color ? n.dot : null;
            return <button type="button" role="option" aria-selected={a} disabled={e.disabled} onClick={() => {
              i(r);
              b(false);
            }} className={`
                    relative flex w-full items-center justify-between
                    rounded-xl px-3 py-2 text-xs sm:text-sm font-medium
                    transition-all duration-150
                    cursor-pointer select-none text-left
                    border
                    ${a ? `
                          bg-white/[0.08] text-white border-white/[0.12]
                          shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.12)]
                        ` : "text-neutral-400 hover:bg-white/[0.04] hover:text-white border-transparent"}
                    active:scale-[0.98]
                    ${e.disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : ""}
                  `} key={String(r)}><div className="flex min-w-0 items-center gap-2.5">{d && <span className={`h-2 w-2 shrink-0 rounded-full ${d} ${a ? "opacity-100 scale-110" : "opacity-60"} transition-transform`} />}{e.icon && <span className={`flex shrink-0 items-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] ${a ? n.text : "text-neutral-400"}`}>{e.icon}</span>}<span className={`truncate whitespace-nowrap ${a ? "font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" : ""}`}>{e.label}</span></div><div className="ml-4 flex shrink-0 items-center">{typeof e.count == "number" && <span className={`tabular-nums text-xs font-semibold ${a ? `${n.text} drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]` : "text-neutral-500"}`}>{e.count}</span>}{a && <s.Check className="ml-2 h-3.5 w-3.5 text-blue-400 drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]" />}</div></button>;
          })}</div><div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black/25 to-transparent" /></div>}</div>;
  }]);
}, 71661, e => {
  "use strict";

  var t = e.i(66497);
  e.s(["default", 0, ({
    checked: e = false,
    onChange: r,
    disabled: a = false,
    ...s
  }) => <label className={`relative inline-flex ${a ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}><input {...s} type="checkbox" checked={e} disabled={a} onChange={e => r?.(e.target.checked)} className="sr-only" /><div className={`relative h-6 w-13 rounded-md border transition-all duration-200 ${e ? "bg-blue-600 border-blue-400/40 shadow-[0_0_10px_rgba(37,99,235,0.3),inset_0_1px_2px_rgba(0,0,0,0.2)]" : "bg-neutral-900 border-white/[0.08] shadow-[inset_0_1px_3px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.05)]"}`}><div className={`absolute left-0.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-md bg-gradient-to-b from-white to-neutral-200 shadow-[0_2px_4px_rgba(0,0,0,0.4),0_1px_1px_rgba(0,0,0,0.2)] transition-transform duration-200 ${e ? "translate-x-7 -translate-y-1/2" : "translate-x-0 -translate-y-1/2"}`} /></div></label>]);
}, 55169, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
    name: "check",
    size: 24,
    node: [["path", {
      d: "M20 6 9 17l-5-5",
      key: "1gmf2c"
    }]]
  };
  r.node;
  let a = (0, t.default)(r);
  e.s(["Check", 0, a], 55169);
}, 6794, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
    name: "chevron-down",
    size: 24,
    node: [["path", {
      d: "m6 9 6 6 6-6",
      key: "qrunsl"
    }]]
  };
  r.node;
  let a = (0, t.default)(r);
  e.s(["ChevronDown", 0, a], 6794);
}, 66177, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
    name: "chevron-up",
    size: 24,
    node: [["path", {
      d: "m18 15-6-6-6 6",
      key: "153udz"
    }]]
  };
  r.node;
  let a = (0, t.default)(r);
  e.s(["ChevronUp", 0, a], 66177);
}, 1880, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
    name: "copy",
    size: 24,
    node: [["rect", {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea"
    }], ["path", {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf"
    }]]
  };
  r.node;
  let a = (0, t.default)(r);
  e.s(["Copy", 0, a], 1880);
}, 36158, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
    name: "globe",
    size: 24,
    node: [["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }], ["path", {
      d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
      key: "13o1zl"
    }], ["path", {
      d: "M2 12h20",
      key: "9i4pu4"
    }]]
  };
  r.node;
  let a = (0, t.default)(r);
  e.s(["Globe", 0, a], 36158);
}, 15887, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
    name: "link",
    size: 24,
    node: [["path", {
      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
      key: "1cjeqo"
    }], ["path", {
      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
      key: "19qd67"
    }]]
  };
  r.node;
  let a = (0, t.default)(r);
  e.s(["Link", 0, a], 15887);
}, 83870, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
    name: "message-square",
    size: 24,
    node: [["path", {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }]]
  };
  r.node;
  let a = (0, t.default)(r);
  e.s(["MessageSquare", 0, a], 83870);
}, 32705, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
    name: "play",
    size: 24,
    node: [["path", {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }]]
  };
  r.node;
  let a = (0, t.default)(r);
  e.s(["Play", 0, a], 32705);
}, 66700, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
    name: "refresh-cw",
    size: 24,
    node: [["path", {
      d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
      key: "v9h5vc"
    }], ["path", {
      d: "M21 3v5h-5",
      key: "1q7to0"
    }], ["path", {
      d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
      key: "3uifl3"
    }], ["path", {
      d: "M8 16H3v5",
      key: "1cv678"
    }]]
  };
  r.node;
  let a = (0, t.default)(r);
  e.s(["RefreshCw", 0, a], 66700);
}, 67494, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
    name: "search",
    size: 24,
    node: [["path", {
      d: "m21 21-4.34-4.34",
      key: "14j7rj"
    }], ["circle", {
      cx: "11",
      cy: "11",
      r: "8",
      key: "4ej97u"
    }]]
  };
  r.node;
  let a = (0, t.default)(r);
  e.s(["Search", 0, a], 67494);
}, 83382, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
    name: "trash",
    size: 24,
    node: [["path", {
      d: "M10 11v6",
      key: "nco0om"
    }], ["path", {
      d: "M14 11v6",
      key: "outv1u"
    }], ["path", {
      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
      key: "miytrc"
    }], ["path", {
      d: "M3 6h18",
      key: "d0wm0j"
    }], ["path", {
      d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
      key: "e791ji"
    }]],
    aliases: ["trash-2"]
  };
  r.node;
  let a = (0, t.default)(r);
  e.s(["Trash2", 0, a], 83382);
}, 55932, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
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
  r.node;
  let a = (0, t.default)(r);
  e.s(["User", 0, a], 55932);
}, 58259, e => {
  "use strict";

  var t = e.i(1347);
  let r = () => window.electronApi?.group ? window.electronApi.group : null;
  let a = (0, t.create)((e, t) => ({
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
    openCreateDialog: (t = null) => {
      e({
        isCreateDialogOpen: true,
        createPrefillData: t
      });
    },
    closeCreateDialog: () => {
      e({
        isCreateDialogOpen: false,
        createPrefillData: null
      });
    },
    fetchGroups: async a => {
      let s = a !== undefined ? a : t().currentUserId;
      if (a !== undefined) {
        e({
          currentUserId: a
        });
      }
      let o = r();
      if (!o) {
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
        let t = await o.getAll(s);
        e({
          groups: t || [],
          isLoading: false
        });
      } catch (r) {
        let t = r instanceof Error ? r.message : "Failed to fetch groups";
        console.error("Failed to fetch groups:", r);
        e({
          error: t,
          isLoading: false
        });
      }
    },
    createGroup: async a => {
      let s = r();
      if (!s) {
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
        let r = await s.create(a);
        if (r.success) {
          await t().fetchGroups(a.userId);
        } else {
          e({
            error: r.message
          });
        }
        return r;
      } catch (r) {
        let t = r instanceof Error ? r.message : "เกิดข้อผิดพลาดในการสร้างกลุ่ม";
        console.error("Failed to create group:", r);
        e({
          error: t
        });
        return {
          success: false,
          message: t
        };
      } finally {
        e({
          isCreating: false
        });
      }
    },
    updateGroup: async a => {
      let s = r();
      if (!s) {
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
        let r = await s.update(a);
        if (r.success) {
          await t().fetchGroups(a.userId);
        } else {
          e({
            error: r.message
          });
        }
        return r;
      } catch (r) {
        let t = r instanceof Error ? r.message : "เกิดข้อผิดพลาดในการแก้ไขกลุ่ม";
        console.error("Failed to update group:", r);
        e({
          error: t
        });
        return {
          success: false,
          message: t
        };
      } finally {
        e({
          isCreating: false
        });
      }
    },
    deleteGroup: async (t, a) => {
      let s = r();
      if (!s) {
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
        let r = await s.delete(t, a);
        if (r?.success) {
          e(e => ({
            groups: e.groups.filter(e => e.name !== t),
            selectedGroup: e.selectedGroup?.name === t ? null : e.selectedGroup
          }));
        } else {
          e({
            error: r.message
          });
        }
        return r;
      } catch (r) {
        let t = r instanceof Error ? r.message : "เกิดข้อผิดพลาดในการลบกลุ่ม";
        console.error("Failed to delete group:", r);
        e({
          error: t
        });
        return {
          success: false,
          message: t
        };
      } finally {
        e({
          isDeleting: false
        });
      }
    },
    getGroupByName: async (e, t) => {
      let a = r();
      if (!a) {
        return null;
      }
      try {
        return await a.getByName(e, t);
      } catch (e) {
        console.error("Failed to get group by name:", e);
        return null;
      }
    },
    selectImages: async () => {
      let e = r();
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
    getImagePreview: async (e, t, a) => {
      let s = r();
      if (!s?.getImagePreview) {
        return null;
      }
      try {
        return await s.getImagePreview(e, t, a);
      } catch (e) {
        console.error("Failed to get image preview:", e);
        return null;
      }
    },
    toggleActiveGroup: async (a, s, o) => {
      let n = t().groups;
      let l = n.find(e => e.name === a);
      if (!l) {
        return {
          success: false,
          message: "ไม่พบกลุ่มที่ต้องการ"
        };
      }
      let i = l.isActive !== false;
      let d = o !== undefined ? o : !i;
      e({
        groups: n.map(e => e.name === a ? {
          ...e,
          isActive: d
        } : e)
      });
      let c = r();
      if (!c) {
        return {
          success: true,
          message: "อัปเดตสถานะสำเร็จ (Local)",
          isActive: d
        };
      }
      try {
        if (c.toggleActive) {
          let t = await c.toggleActive(a, s, d);
          if (!t.success) {
            e({
              groups: n
            });
          }
          return t;
        }
        {
          let t = await c.update({
            oldName: a,
            name: a,
            userId: s,
            isActive: d
          });
          if (!t.success) {
            e({
              groups: n
            });
          }
          return {
            success: t.success,
            message: t.message,
            isActive: d
          };
        }
      } catch (t) {
        e({
          groups: n
        });
        return {
          success: false,
          message: t instanceof Error ? t.message : "เกิดข้อผิดพลาดในการเปลี่ยนสถานะ"
        };
      }
    },
    setSelectedGroup: t => {
      e({
        selectedGroup: t
      });
    },
    setStatusFilter: t => {
      e({
        statusFilter: t
      });
    },
    clearError: () => {
      e({
        error: null
      });
    }
  }));
  e.s(["default", 0, a, "useGroupsStore", 0, a]);
}]);
