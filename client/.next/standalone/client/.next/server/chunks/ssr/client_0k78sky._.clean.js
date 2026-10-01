module.exports = [3322, a => {
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
}, 79040, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(9651);
  var d = a.i(94748);
  var e = a.i(48416);
  let f = {
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
  let g = {
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
  a.s(["default", 0, ({
    options: a,
    value: h,
    onChange: i,
    className: j = "",
    size: k = "md",
    placeholder: l = "เลือกตัวกรอง",
    disabled: m = false
  }) => {
    let [n, o] = (0, c.useState)(false);
    let p = (0, c.useRef)(null);
    (0, c.useEffect)(() => {
      let a = a => {
        if (p.current && !p.current.contains(a.target)) {
          o(false);
        }
      };
      let b = a => {
        if (a.key === "Escape") {
          o(false);
        }
      };
      if (n) {
        document.addEventListener("mousedown", a);
        document.addEventListener("keydown", b);
      }
      return () => {
        document.removeEventListener("mousedown", a);
        document.removeEventListener("keydown", b);
      };
    }, [n]);
    let q = a.find(a => (a.id ?? a.value) === h) || a[0];
    let r = q?.color && f[q.color] ? f[q.color] : f.blue;
    let s = q?.dotColor ? q.dotColor : q?.color ? r.dot : null;
    let t = g[k] ?? g.md;
    return <div ref={p} className={`relative inline-block ${j}`}><button type="button" onClick={() => !m && o(a => !a)} disabled={m} aria-haspopup="listbox" aria-expanded={n} className={`
          group relative
          flex items-center justify-between
          overflow-hidden
          border
          ${t.button}
          cursor-pointer select-none
          transition-all duration-200 ease-out
          ${n ? `
                bg-neutral-950
                ${r.border}
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
          ${m ? "opacity-40 cursor-not-allowed pointer-events-none" : ""}
        `}><div className={`
            pointer-events-none
            absolute inset-x-2.5 top-0
            h-px
            transition-all duration-200
            ${n ? r.topLine : "bg-white/15 group-hover:bg-white/25"}
          `} /><div className={`
            pointer-events-none
            absolute -left-6 -top-6
            h-16 w-16
            rounded-full
            blur-xl
            transition-all duration-300
            ${n ? r.softLight : "bg-white/[0.03] group-hover:bg-white/[0.06]"}
          `} /><div className="relative z-10 flex items-center gap-[inherit] min-w-0">{s && <span className={`h-2 w-2 rounded-full shrink-0 ${s}`} />}{q?.icon && <span className={`
                flex items-center shrink-0 transition-transform duration-200 group-hover:scale-105
                ${r.text}
                drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]
              `}>{q.icon}</span>}<span className={`
              font-medium whitespace-nowrap truncate
              ${t.text}
              ${n ? "text-white font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]" : "text-neutral-200"}
            `}>{q?.label || l}</span>{typeof q?.count == "number" && <span className={`
                border-l font-semibold tabular-nums
                ${t.count}
                ${n ? `border-white/[0.15] ${r.text} drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]` : "border-white/[0.08] text-neutral-400 group-hover:text-neutral-200"}
              `}>{q.count}</span>}</div><d.ChevronDown className={`
            relative z-10 ml-2 h-4 w-4 shrink-0
            transition-transform duration-200
            drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]
            ${n ? "rotate-180 text-blue-400" : "text-neutral-400 group-hover:text-neutral-200"}
          `} /><div className="\n            pointer-events-none\n            absolute\n            inset-x-0\n            bottom-0\n            h-2.5\n            bg-gradient-to-t\n            from-black/25\n            to-transparent\n          " /></button>{n && <div role="listbox" className="\n            group/menu\n            absolute left-0 top-full mt-2 z-50\n            min-w-[200px] w-max max-w-xs\n            overflow-hidden\n            rounded-2xl\n            border border-white/[0.12]\n            bg-neutral-950/95\n            p-1.5\n            backdrop-blur-2xl\n            shadow-[0_8px_0_rgba(0,0,0,0.5),0_16px_36px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.14),inset_0_-1px_2px_rgba(0,0,0,0.6)]\n            animate-in fade-in zoom-in-95 duration-150\n          "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20" /><div className="pointer-events-none absolute -left-8 -top-8 h-20 w-20 rounded-full bg-white/[0.04] blur-xl" /><div className="relative z-10 flex flex-col gap-0.5">{a.map(a => {
            let c = a.id ?? a.value;
            let d = h === c;
            let g = a.color && f[a.color] ? f[a.color] : f.blue;
            let j = a.dotColor ? a.dotColor : a.color ? g.dot : null;
            return <button type="button" role="option" aria-selected={d} disabled={a.disabled} onClick={() => {
              i(c);
              o(false);
            }} className={`
                    relative flex w-full items-center justify-between
                    rounded-xl px-3 py-2 text-xs sm:text-sm font-medium
                    transition-all duration-150
                    cursor-pointer select-none text-left
                    border
                    ${d ? `
                          bg-white/[0.08] text-white border-white/[0.12]
                          shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.12)]
                        ` : "text-neutral-400 hover:bg-white/[0.04] hover:text-white border-transparent"}
                    active:scale-[0.98]
                    ${a.disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : ""}
                  `} key={String(c)}><div className="flex min-w-0 items-center gap-2.5">{j && <span className={`h-2 w-2 shrink-0 rounded-full ${j} ${d ? "opacity-100 scale-110" : "opacity-60"} transition-transform`} />}{a.icon && <span className={`flex shrink-0 items-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] ${d ? g.text : "text-neutral-400"}`}>{a.icon}</span>}<span className={`truncate whitespace-nowrap ${d ? "font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" : ""}`}>{a.label}</span></div><div className="ml-4 flex shrink-0 items-center">{typeof a.count == "number" && <span className={`tabular-nums text-xs font-semibold ${d ? `${g.text} drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]` : "text-neutral-500"}`}>{a.count}</span>}{d && <e.Check className="ml-2 h-3.5 w-3.5 text-blue-400 drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]" />}</div></button>;
          })}</div><div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black/25 to-transparent" /></div>}</div>;
  }]);
}, 56663, a => {
  "use strict";

  var b = a.i(16547);
  a.s(["default", 0, ({
    checked: a = false,
    onChange: c,
    disabled: d = false,
    ...e
  }) => <label className={`relative inline-flex ${d ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}><input {...e} type="checkbox" checked={a} disabled={d} onChange={a => c?.(a.target.checked)} className="sr-only" /><div className={`relative h-6 w-13 rounded-md border transition-all duration-200 ${a ? "bg-blue-600 border-blue-400/40 shadow-[0_0_10px_rgba(37,99,235,0.3),inset_0_1px_2px_rgba(0,0,0,0.2)]" : "bg-neutral-900 border-white/[0.08] shadow-[inset_0_1px_3px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.05)]"}`}><div className={`absolute left-0.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-md bg-gradient-to-b from-white to-neutral-200 shadow-[0_2px_4px_rgba(0,0,0,0.4),0_1px_1px_rgba(0,0,0,0.2)] transition-transform duration-200 ${a ? "translate-x-7 -translate-y-1/2" : "translate-x-0 -translate-y-1/2"}`} /></div></label>]);
}, 48416, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
    name: "check",
    size: 24,
    node: [["path", {
      d: "M20 6 9 17l-5-5",
      key: "1gmf2c"
    }]]
  };
  c.node;
  let d = (0, b.default)(c);
  a.s(["Check", 0, d], 48416);
}, 94748, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
    name: "chevron-down",
    size: 24,
    node: [["path", {
      d: "m6 9 6 6 6-6",
      key: "qrunsl"
    }]]
  };
  c.node;
  let d = (0, b.default)(c);
  a.s(["ChevronDown", 0, d], 94748);
}, 84877, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
    name: "chevron-up",
    size: 24,
    node: [["path", {
      d: "m18 15-6-6-6 6",
      key: "153udz"
    }]]
  };
  c.node;
  let d = (0, b.default)(c);
  a.s(["ChevronUp", 0, d], 84877);
}, 39541, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
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
  c.node;
  let d = (0, b.default)(c);
  a.s(["Copy", 0, d], 39541);
}, 84934, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
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
  c.node;
  let d = (0, b.default)(c);
  a.s(["Globe", 0, d], 84934);
}, 68606, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
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
  c.node;
  let d = (0, b.default)(c);
  a.s(["Link", 0, d], 68606);
}, 76396, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
    name: "message-square",
    size: 24,
    node: [["path", {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }]]
  };
  c.node;
  let d = (0, b.default)(c);
  a.s(["MessageSquare", 0, d], 76396);
}, 5835, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
    name: "play",
    size: 24,
    node: [["path", {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }]]
  };
  c.node;
  let d = (0, b.default)(c);
  a.s(["Play", 0, d], 5835);
}, 58262, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
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
  c.node;
  let d = (0, b.default)(c);
  a.s(["RefreshCw", 0, d], 58262);
}, 90257, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
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
  c.node;
  let d = (0, b.default)(c);
  a.s(["Search", 0, d], 90257);
}, 18032, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
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
  c.node;
  let d = (0, b.default)(c);
  a.s(["Trash2", 0, d], 18032);
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
}, 88115, a => {
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

//# sourceMappingURL=client_0k78sky._.js.map
