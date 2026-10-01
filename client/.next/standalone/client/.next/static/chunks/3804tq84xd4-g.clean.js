(globalThis.TURBOPACK ||= []).push([typeof document == "object" ? document.currentScript : undefined, 28926, e => {
  "use strict";

  var t = e.i(66497);
  var r = e.i(2692);
  let a = {
    name: "zap",
    size: 24,
    node: [["path", {
      d: "M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",
      key: "1v7up4"
    }]]
  };
  a.node;
  let _Component = (0, r.default)(a);
  var l = e.i(64282);
  var n = e.i(55718);
  var i = e.i(57445);
  var o = e.i(93652);
  let _Component7 = () => {
    let {
      isAllRunning: e,
      isActionLoading: r,
      startAll: a,
      cancelAll: c
    } = (0, o.default)();
    let d = r("all");
    let x = async () => {
      if (!d) {
        if (e) {
          await c();
        } else {
          await a();
        }
      }
    };
    return <div><i.default variant={e ? "danger" : "primary"} size="md" onClick={x} disabled={d}>{d ? <t.Fragment><n.Loader2 size={16} className="animate-spin" /><span>{e ? "กำลังหยุดทั้งหมด..." : "กำลังเริ่มทั้งหมด..."}</span></t.Fragment> : e ? <t.Fragment><l.Square size={15} className="fill-current" /><span>หยุดทำงานทั้งหมด</span></t.Fragment> : <t.Fragment><_Component size={16} /><span>เริ่มทำงานทั้งหมด</span></t.Fragment>}</i.default></div>;
  };
  var d = e.i(10977);
  let x = {
    name: "list",
    size: 24,
    node: [["path", {
      d: "M3 5h.01",
      key: "18ugdj"
    }], ["path", {
      d: "M3 12h.01",
      key: "nlz23k"
    }], ["path", {
      d: "M3 19h.01",
      key: "noohij"
    }], ["path", {
      d: "M8 5h13",
      key: "1pao27"
    }], ["path", {
      d: "M8 12h13",
      key: "1za7za"
    }], ["path", {
      d: "M8 19h13",
      key: "m83p4d"
    }]]
  };
  x.node;
  let u = (0, r.default)(x);
  var h = e.i(32705);
  let p = {
    name: "pause",
    size: 24,
    node: [["rect", {
      x: "14",
      y: "3",
      width: "5",
      height: "18",
      rx: "1",
      key: "kaeet6"
    }], ["rect", {
      x: "5",
      y: "3",
      width: "5",
      height: "18",
      rx: "1",
      key: "1wsw3u"
    }]]
  };
  p.node;
  let m = (0, r.default)(p);
  let g = {
    blue: {
      activeBorder: "border-blue-500/40",
      activeRing: "ring-1 ring-blue-500/25",
      activeTopLine: "bg-blue-400/40",
      activeSoftLight: "bg-blue-500/[0.12]",
      activeIcon: "text-blue-400",
      activeCountText: "text-blue-300",
      activeGlow: "shadow-blue-500/10"
    },
    emerald: {
      activeBorder: "border-emerald-500/40",
      activeRing: "ring-1 ring-emerald-500/25",
      activeTopLine: "bg-emerald-400/40",
      activeSoftLight: "bg-emerald-500/[0.12]",
      activeIcon: "text-emerald-400",
      activeCountText: "text-emerald-300",
      activeGlow: "shadow-emerald-500/10"
    },
    amber: {
      activeBorder: "border-amber-500/40",
      activeRing: "ring-1 ring-amber-500/25",
      activeTopLine: "bg-amber-400/40",
      activeSoftLight: "bg-amber-500/[0.12]",
      activeIcon: "text-amber-400",
      activeCountText: "text-amber-300",
      activeGlow: "shadow-amber-500/10"
    },
    rose: {
      activeBorder: "border-rose-500/40",
      activeRing: "ring-1 ring-rose-500/25",
      activeTopLine: "bg-rose-400/40",
      activeSoftLight: "bg-rose-500/[0.12]",
      activeIcon: "text-rose-400",
      activeCountText: "text-rose-300",
      activeGlow: "shadow-rose-500/10"
    },
    red: {
      activeBorder: "border-red-500/40",
      activeRing: "ring-1 ring-red-500/25",
      activeTopLine: "bg-red-400/40",
      activeSoftLight: "bg-red-500/[0.12]",
      activeIcon: "text-red-400",
      activeCountText: "text-red-300",
      activeGlow: "shadow-red-500/10"
    },
    purple: {
      activeBorder: "border-purple-500/40",
      activeRing: "ring-1 ring-purple-500/25",
      activeTopLine: "bg-purple-400/40",
      activeSoftLight: "bg-purple-500/[0.12]",
      activeIcon: "text-purple-400",
      activeCountText: "text-purple-300",
      activeGlow: "shadow-purple-500/10"
    }
  };
  let b = {
    sm: {
      button: "h-8 px-3 text-xs gap-2 rounded-xl",
      icon: "h-3.5 w-3.5",
      text: "text-xs",
      count: "text-[11px] pl-2.5 ml-1.5"
    },
    md: {
      button: "h-10 px-3.5 text-sm gap-2.5 rounded-xl",
      icon: "h-4 w-4",
      text: "text-sm",
      count: "text-xs pl-3 ml-2"
    },
    lg: {
      button: "h-12 px-4.5 text-base gap-3 rounded-2xl",
      icon: "h-5 w-5",
      text: "text-base",
      count: "text-sm pl-3.5 ml-2.5"
    }
  };
  let _Component3 = ({
    items: e,
    options: r,
    value: a,
    onChange: s,
    className: l = "",
    size: n = "md",
    disabled: i = false
  }) => {
    let o = e ?? r ?? [];
    let [c, x] = (0, d.useState)(() => o[0]?.id ?? o[0]?.value);
    let u = a !== undefined ? a : c;
    let h = b[n] ?? b.md;
    return <div className={`
        inline-flex items-center gap-2 rounded-2xl
        border border-white/[0.08] bg-neutral-950/80 p-1.5
        shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.05)]
        backdrop-blur-md
        ${i ? "opacity-50 pointer-events-none" : ""}
        ${l}
      `}>{o.map(e => {
        let _Component2;
        let a = e.id ?? e.value;
        let l = u === a;
        let n = i || e.disabled;
        let o = e.color && g[e.color] ? e.color : "blue";
        let c = g[o];
        return <button type="button" disabled={n} onClick={() => {
          if (!i) {
            if (s) {
              s(a);
            } else {
              x(a);
            }
          }
        }} className={`
              group relative
              flex items-center
              overflow-hidden
              border
              ${h.button}
              cursor-pointer select-none
              transition-all duration-200 ease-out

              ${l ? `
                    bg-neutral-950
                    ${c.activeBorder}
                    ${c.activeRing}
                    ${c.activeGlow}
                    text-white
                    shadow-[0_4px_0_rgba(0,0,0,0.45),0_10px_20px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.16),inset_0_-1px_2px_rgba(0,0,0,0.5)]
                    active:translate-y-[2px]
                    active:shadow-[0_2px_0_rgba(0,0,0,0.45),0_4px_8px_rgba(0,0,0,0.25)]
                  ` : `
                    bg-neutral-950/70
                    border-white/[0.08]
                    text-neutral-400
                    hover:text-neutral-200
                    hover:border-white/[0.14]
                    hover:bg-neutral-900/80
                    shadow-[0_3px_0_rgba(0,0,0,0.35),0_6px_12px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.08),inset_0_-1px_1px_rgba(0,0,0,0.4)]
                    hover:shadow-[0_4px_0_rgba(0,0,0,0.4),0_8px_16px_rgba(0,0,0,0.22),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_1px_rgba(0,0,0,0.4)]
                    active:translate-y-[1.5px]
                    active:shadow-[0_1.5px_0_rgba(0,0,0,0.35),0_3px_6px_rgba(0,0,0,0.18)]
                  `}
              ${n ? "opacity-40 cursor-not-allowed pointer-events-none" : ""}
            `} key={String(a)}><div className={`
                pointer-events-none
                absolute inset-x-2.5 top-0
                h-px
                transition-all duration-200
                ${l ? c.activeTopLine : "bg-white/10 group-hover:bg-white/20"}
              `} /><div className={`
                pointer-events-none
                absolute -left-6 -top-6
                h-16 w-16
                rounded-full
                blur-xl
                transition-all duration-300
                ${l ? c.activeSoftLight : "bg-white/[0.02] group-hover:bg-white/[0.05]"}
              `} /><div className="relative z-10 flex items-center gap-[inherit]">{e.icon && <t.Fragment>{d.default.isValidElement(e.icon) ? <span className={`
                        shrink-0 transition-transform duration-200 group-hover:scale-105
                        ${l ? `${c.activeIcon} drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]` : "text-neutral-500 group-hover:text-neutral-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"}
                      `}>{e.icon}</span> : (_Component2 = e.icon, <_Component2 className={`
                            ${h.icon} shrink-0
                            transition-transform duration-200 group-hover:scale-105
                            ${l ? `${c.activeIcon} drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]` : "text-neutral-500 group-hover:text-neutral-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"}
                          `} strokeWidth={1.8} />)}</t.Fragment>}<span className={`
                  font-medium whitespace-nowrap
                  ${h.text}
                  ${l ? "text-white font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]" : "text-neutral-400 group-hover:text-neutral-200"}
                `}>{e.label}</span>{typeof e.count == "number" && <span className={`
                    border-l
                    font-semibold tabular-nums
                    ${h.count}
                    ${l ? `border-white/[0.15] ${c.activeCountText} drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]` : "border-white/[0.08] text-neutral-500 group-hover:text-neutral-300"}
                  `}>{e.count}</span>}</div><div className="\n                pointer-events-none\n                absolute\n                inset-x-0\n                bottom-0\n                h-2.5\n                bg-gradient-to-t\n                from-black/25\n                to-transparent\n              " /></button>;
      })}</div>;
  };
  var v = e.i(66842);
  let _Component6 = ({
    className: e = "",
    size: r = "md",
    value: a,
    onChange: s
  }) => {
    let {
      accounts: l
    } = (0, v.default)();
    let {
      workerFilter: n,
      setWorkerFilter: i,
      isUserRunning: c
    } = (0, o.default)();
    let x = (0, d.useMemo)(() => {
      let e = 0;
      let t = 0;
      for (let r of l) {
        if (c(r.id)) {
          e++;
        } else {
          t++;
        }
      }
      return {
        all: l.length,
        running: e,
        idle: t
      };
    }, [l, c]);
    let p = (0, d.useMemo)(() => [{
      id: "all",
      label: "ข้อมูลทั้งหมด",
      count: x.all,
      icon: u,
      color: "blue"
    }, {
      id: "running",
      label: "กำลังทำงาน",
      count: x.running,
      icon: h.Play,
      color: "emerald"
    }, {
      id: "idle",
      label: "ว่างงาน",
      count: x.idle,
      icon: m,
      color: "amber"
    }], [x]);
    return <_Component3 items={p} value={a ?? n} onChange={s ?? i} size={r} className={e} />;
  };
  var _ = e.i(55932);
  var j = e.i(9741);
  let _Component5 = ({
    userId: e,
    userName: r,
    className: a = ""
  }) => {
    let {
      isUserRunning: c,
      isActionLoading: d,
      startUser: x,
      cancelUser: u
    } = (0, o.default)();
    let h = c(e);
    let p = d(e);
    let m = async t => {
      t.stopPropagation();
      if (!p) {
        if (h) {
          await u(e);
        } else {
          await x(e);
        }
      }
    };
    return <i.default variant={h ? "danger" : "primary"} size="sm" onClick={m} disabled={p} className={`shadow-sm ${a}`} title={h ? `หยุดการทำงานของ ${r || e}` : `เริ่มการทำงานของ ${r || e}`}>{p ? <t.Fragment><n.Loader2 size={13} className="animate-spin" /><span>{h ? "กำลังหยุด..." : "กำลังเริ่ม..."}</span></t.Fragment> : h ? <t.Fragment><l.Square size={12} className="fill-current" /><span>หยุดทำงาน</span></t.Fragment> : <t.Fragment><_Component size={13} /><span>เริ่มทำงาน</span></t.Fragment>}</i.default>;
  };
  var y = e.i(14024);
  var N = e.i(40702);
  var S = e.i(26874);
  var $ = e.i(24091);
  var L = e.i(83870);
  let z = {
    name: "heart",
    size: 24,
    node: [["path", {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }]]
  };
  z.node;
  let M = (0, r.default)(z);
  var C = e.i(28719);
  let T = ({
    userId: e,
    stats: r,
    className: a = ""
  }) => {
    let {
      accountStats: s,
      fetchAccountStats: l,
      initStatsListeners: n
    } = (0, C.default)();
    let i = e ? String(e) : "";
    (0, d.useEffect)(() => {
      if (i) {
        l(i);
        let e = n();
        return () => {
          e();
        };
      }
    }, [i, l, n]);
    let o = r || (i ? s[i] : null);
    let c = [{
      label: "ทั้งหมด",
      value: o?.total ?? 0,
      icon: y.ListChecks,
      color: "text-blue-400",
      iconColor: "text-blue-400/15"
    }, {
      label: "สำเร็จ",
      value: o?.success ?? 0,
      icon: N.CheckCircle2,
      color: "text-emerald-400",
      iconColor: "text-emerald-400/15"
    }, {
      label: "ผิดพลาด",
      value: o?.failed ?? 0,
      icon: S.XCircle,
      color: "text-rose-400",
      iconColor: "text-rose-400/15"
    }, {
      label: "โพสต์",
      value: o?.post ?? 0,
      icon: $.Send,
      color: "text-sky-400",
      iconColor: "text-sky-400/15"
    }, {
      label: "คอมเมนต์",
      value: o?.comment ?? 0,
      icon: L.MessageSquare,
      color: "text-amber-400",
      iconColor: "text-amber-400/15"
    }, {
      label: "ความรู้สึก",
      value: o?.reaction ?? 0,
      icon: M,
      color: "text-pink-400",
      iconColor: "text-pink-400/15"
    }];
    return <div className={`grid grid-cols-3 gap-2 ${a}`}>{c.map(e => {
        let _Component4 = e.icon;
        return <div className="\n              group relative\n              h-[52px]\n              overflow-hidden\n              rounded-xl\n              bg-neutral-950\n              border border-white/[0.12]\n              px-2.5 py-1.5\n              shadow-[0_4px_0_rgba(0,0,0,0.35),0_8px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.5)]\n              transition-all duration-200 ease-out select-none\n              hover:border-white/20\n            " key={e.label}><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/20 z-10" /><div className="pointer-events-none absolute -left-5 -top-5 h-12 w-12 rounded-full bg-white/[0.04] blur-lg transition-all duration-300 group-hover:bg-white/[0.07]" /><div className="relative z-10"><p className="text-[10px] font-medium text-neutral-400 leading-tight">{e.label}</p><p className={`
                  text-base font-semibold tracking-tight leading-tight mt-0.5
                  ${e.color}
                  drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]
                `}>{e.value.toLocaleString()}</p></div><_Component4 size={40} strokeWidth={1.2} className={`
                pointer-events-none
                absolute
                -right-1
                -bottom-1.5
                ${e.iconColor}
                drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]
                transition-transform duration-300
                group-hover:scale-105 group-hover:-rotate-3
              `} /><div className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-t from-black/20 to-transparent" /></div>;
      })}</div>;
  };
  var A = e.i(46034);
  let I = ({
    isRunning: e = false,
    className: r = "",
    size: a = 20
  }) => <div className={`relative flex items-center justify-center select-none m-0 p-0 leading-none ${r}`} style={{
    width: a,
    height: a
  }} title={e ? "กำลังทำงาน (เดิน)" : "สแตนด์บาย (ยืนนิ่ง)"}><svg viewBox="0 0 24 24" width={a} height={a} className="block overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><filter id="green-visor-glow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="0.8" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter><style>{`
            /* ========== 1. ท่ายืนนิ่ง โทน NEUTRAL ========== */
            .char-idle-breath {
              animation: idle-breathe 2.4s ease-in-out infinite;
              transform-origin: 12px 21px;
            }
            @keyframes idle-breathe {
              0%, 100% {
                transform: translateY(0px) scale(1);
              }
              50% {
                transform: translateY(-0.5px) scaleY(1.02);
              }
            }

            /* ========== 2. ท่าเดิน 2D (WALKING) โทน เขียว ========== */
            /* ลำตัวโยกขึ้นลงตามจังหวะก้าวเดิน (Bobbing) */
            .char-walk-body {
              animation: walk-bob 0.38s ease-in-out infinite alternate;
              transform-origin: 12px 21px;
            }
            @keyframes walk-bob {
              0% { transform: translateY(0.4px); }
              100% { transform: translateY(-0.7px); }
            }

            /* ขาซ้ายก้าวเดิน */
            .char-walk-leg-l {
              animation: walk-leg-cycle-l 0.76s ease-in-out infinite;
              transform-origin: 10px 16px;
            }
            @keyframes walk-leg-cycle-l {
              0% { transform: rotate(-24deg); }
              50% { transform: rotate(24deg); }
              100% { transform: rotate(-24deg); }
            }

            /* ขาขวาก้าวเดิน (สลับจังหวะ) */
            .char-walk-leg-r {
              animation: walk-leg-cycle-r 0.76s ease-in-out infinite;
              transform-origin: 14px 16px;
            }
            @keyframes walk-leg-cycle-r {
              0% { transform: rotate(24deg); }
              50% { transform: rotate(-24deg); }
              100% { transform: rotate(24deg); }
            }

            /* แขนซ้ายแกว่งตามจังหวะเดิน */
            .char-walk-arm-l {
              animation: walk-arm-cycle-l 0.76s ease-in-out infinite;
              transform-origin: 7.5px 12px;
            }
            @keyframes walk-arm-cycle-l {
              0% { transform: rotate(20deg); }
              50% { transform: rotate(-20deg); }
              100% { transform: rotate(20deg); }
            }

            /* แขนขวาแกว่งตามจังหวะเดิน (สลับด้าน) */
            .char-walk-arm-r {
              animation: walk-arm-cycle-r 0.76s ease-in-out infinite;
              transform-origin: 16.5px 12px;
            }
            @keyframes walk-arm-cycle-r {
              0% { transform: rotate(-20deg); }
              50% { transform: rotate(20deg); }
              100% { transform: rotate(-20deg); }
            }
          `}</style></defs>{e ? <g className="char-walk-body"><path d="M7.5 12 L5.5 15.8" stroke="#059669" strokeWidth="2.3" strokeLinecap="round" className="char-walk-arm-l" /><path d="M10 16.5 L10 21 L8.5 21.6" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="char-walk-leg-l" /><rect x="7.5" y="11" width="9" height="6.2" rx="2.2" fill="#059669" stroke="#10b981" strokeWidth="1" /><circle cx="12" cy="14" r="1.1" fill="#34d399" /><path d="M14 16.5 L14 21 L15.5 21.6" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="char-walk-leg-r" /><rect x="5.8" y="5.2" width="1.6" height="3.2" rx="0.8" fill="#10b981" /><rect x="16.6" y="5.2" width="1.6" height="3.2" rx="0.8" fill="#10b981" /><rect x="7" y="2.5" width="10" height="8.8" rx="4.4" fill="#064e3b" stroke="#10b981" strokeWidth="1.1" /><rect x="8.5" y="4.8" width="7" height="3.6" rx="1.8" fill="#34d399" filter="url(#green-visor-glow)" /><path d="M16.5 12 L18.5 15.8" stroke="#34d399" strokeWidth="2.3" strokeLinecap="round" className="char-walk-arm-r" /></g> : <g className="char-idle-breath"><path d="M7.5 12 L5.8 16" stroke="#525252" strokeWidth="2.2" strokeLinecap="round" /><path d="M9.5 16.5 L9.5 21.2 L8 21.8" stroke="#525252" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 16.5 L14.5 21.2 L16 21.8" stroke="#525252" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><rect x="7.5" y="11" width="9" height="6.2" rx="2.2" fill="#262626" stroke="#404040" strokeWidth="1" /><circle cx="12" cy="14" r="1.1" fill="#525252" /><rect x="5.8" y="5.2" width="1.6" height="3.2" rx="0.8" fill="#525252" /><rect x="16.6" y="5.2" width="1.6" height="3.2" rx="0.8" fill="#525252" /><rect x="7" y="2.5" width="10" height="8.8" rx="4.4" fill="#171717" stroke="#404040" strokeWidth="1.1" /><rect x="8.5" y="4.8" width="7" height="3.6" rx="1.8" fill="#737373" opacity="0.85" /><path d="M16.5 12 L18.2 16" stroke="#525252" strokeWidth="2.2" strokeLinecap="round" /></g>}</svg></div>;
  let F = ({
    userId: e,
    task: r,
    groupName: a,
    groupCurrent: s = 0,
    groupTotal: l = 0,
    linkCurrent: n = 0,
    linkTotal: i = 0,
    className: c = ""
  }) => {
    let x;
    let u;
    let h;
    let {
      isUserRunning: p,
      tasks: m,
      groupInfo: g,
      taskTimers: b
    } = (0, o.default)();
    let f = e ? String(e) : "";
    let v = !!f && p(f);
    let [w, _] = d.default.useState(0);
    let [j, k] = d.default.useState(0);
    let y = f ? b[f] : undefined;
    let N = y?.endTime || 0;
    d.default.useEffect(() => {
      if (!v) {
        return;
      }
      let e = setInterval(() => {
        _(e => e + 1);
      }, 1000);
      return () => {
        clearInterval(e);
        _(0);
      };
    }, [v]);
    d.default.useEffect(() => {
      if (!N || !v) {
        return;
      }
      let e = () => {
        let e = Math.max(0, (N - Date.now()) / 1000);
        k(e);
        return e > 0;
      };
      let t = setTimeout(e, 0);
      let r = setInterval(() => {
        if (!e()) {
          clearInterval(r);
        }
      }, 100);
      return () => {
        clearTimeout(t);
        clearInterval(r);
        k(0);
      };
    }, [N, v]);
    let S = r || (v ? m[f] || "กำลังเริ่มงาน..." : "-");
    let $ = (e => {
      if (e <= 0) {
        return "";
      }
      let t = Math.max(0, e);
      let r = Math.floor(t / 3600);
      let a = Math.floor(t % 3600 / 60);
      let s = Math.floor(t % 60);
      if (r > 0) {
        return `${r} ชม. ${a} นาที`;
      } else if (a > 0) {
        return `${a} นาที ${s} วินาที`;
      } else {
        return `${t.toFixed(1)} วินาที`;
      }
    })(j);
    let L = /\b\d+(\.\d+)?s$/i.test(S.trim());
    let z = v && $ && !L;
    let M = a || v && g[f]?.groupName || "-";
    let C = g[f]?.groupCurrent ?? s;
    let T = g[f]?.groupTotal ?? l;
    let F = g[f]?.linkCurrent ?? n;
    let W = g[f]?.linkTotal ?? i;
    return <div className={`
        group relative flex flex-col justify-between
        overflow-hidden rounded-xl border border-white/[0.12]
        bg-neutral-950 p-2.5 select-none
        shadow-[0_4px_0_rgba(0,0,0,0.35),0_8px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.5)]
        transition-all duration-200 hover:border-white/20
        ${c}
      `}><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/20 z-10" /><div className={`pointer-events-none absolute -left-5 -top-5 h-12 w-12 rounded-full blur-lg transition-all duration-300 ${v ? "bg-blue-500/[0.08] group-hover:bg-blue-500/[0.12]" : "bg-white/[0.03] group-hover:bg-white/[0.06]"}`} /><div className="relative z-10 flex flex-col gap-2"><div className="flex flex-col gap-1"><div className="flex items-center justify-between"><div className="flex items-center gap-1.5"><div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-200 ${v ? "bg-emerald-500/15 border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]" : "bg-neutral-900 border-white/[0.08]"}`}><I isRunning={v} size={20} /></div><div className="flex flex-col"><span className={`text-[10px] uppercase tracking-wider transition-colors duration-200 ${v ? "text-neutral-400" : "text-neutral-500"}`}>TASK</span><div className={`flex max-w-[185px] items-baseline gap-1.5 overflow-hidden text-xs font-medium leading-snug transition-colors duration-200 ${v ? "text-neutral-300" : "text-neutral-500"}`}><span className="truncate">{S}</span>{z && <span className="shrink-0 font-mono text-[11px] font-semibold text-emerald-400">{$}</span>}</div></div></div><span className={`rounded-md border px-1.5 py-0.5 font-mono text-[10px] shadow-sm transition-colors duration-200 ${v ? "border-blue-500/25 bg-blue-500/15 font-semibold text-blue-400" : "border-white/[0.08] bg-neutral-900 font-medium text-neutral-500"}`}>{(x = Math.floor(w / 3600), u = Math.floor(w % 3600 / 60), h = Math.floor(w % 60), x > 0 ? `${x} ชม. ${u} นาที` : u > 0 ? `${u} นาที ${h} วิ` : `${h} วิ`)}</span></div></div><div className="h-px w-full bg-white/[0.06]" /><div className="flex flex-col gap-1"><div className="flex items-center justify-between"><div className="flex items-center gap-1.5"><div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-200 ${v ? "bg-sky-400/15 border-sky-400/30 shadow-[0_0_12px_rgba(56,189,248,0.15)]" : "bg-neutral-900 border-white/[0.08]"}`}><A.Users size={20} className={`shrink-0 transition-colors duration-200 ${v ? "text-sky-400" : "text-neutral-500"}`} /></div><div className="flex flex-col"><span className={`text-[10px] uppercase tracking-wider transition-colors duration-200 ${v ? "text-neutral-400" : "text-neutral-500"}`}>GROUPS {v && T > 1 ? `(${C}/${T})` : ""}</span><p className={`max-w-[180px] truncate text-xs font-medium leading-snug transition-colors duration-200 ${v ? "text-neutral-300" : "text-neutral-500"}`}>{M}</p></div></div><span className={`rounded-md border px-1.5 py-0.5 font-mono text-[10px] shadow-sm transition-colors duration-200 ${v ? "border-sky-500/25 bg-sky-500/15 font-semibold text-sky-400" : "border-white/[0.08] bg-neutral-900 font-medium text-neutral-500"}`}>{F} / {W}</span></div></div></div><div className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-t from-black/25 to-transparent" /></div>;
  };
  let W = ({
    account: e
  }) => {
    let {
      isUserRunning: r
    } = (0, o.default)();
    let a = r(e.id);
    let s = e.avatarLocal || e.avatar;
    return <div className={`
        group relative flex min-h-0 flex-col overflow-hidden
        rounded-2xl border bg-neutral-950 p-3.5
        select-none transition-all duration-200
        border-white/[0.12] shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.5)] hover:border-white/20
      `}><div className="pointer-events-none absolute inset-x-3 top-0 z-10 h-px bg-white/20" /><div className={`
          pointer-events-none absolute -left-10 -top-10 h-24 w-24
          rounded-full blur-2xl transition-all duration-300
          ${a ? "bg-blue-500/[0.12]" : "bg-white/[0.03] group-hover:bg-white/[0.06]"}
        `} /><div className="relative z-10 flex min-w-0 items-center justify-between gap-3 pl-1"><div className="flex min-w-0 items-center gap-3"><div className={`
              relative flex h-11 w-11 shrink-0 items-center justify-center
              overflow-hidden rounded-xl border bg-neutral-900
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.4)]
              ${a ? "border-blue-400/60 ring-2 ring-blue-500/25" : "border-white/[0.12] group-hover:border-white/20"}
            `}>{s ? <img src={s} alt={e.name} className="h-full w-full object-cover" onError={e => {
              e.currentTarget.style.display = "none";
            }} /> : <_.User size={20} className="text-neutral-400" />}</div><div className="min-w-0"><h4 className="truncate text-sm font-semibold tracking-tight text-white">{e.name}</h4><p className="mt-0.5 truncate font-mono text-xs text-neutral-400">ID: {e.fbId || e.id}</p></div></div><div className="relative z-20 shrink-0"><_Component5 userId={e.id} userName={e.name} /></div></div><div className="relative z-10 mt-3.5 border-t border-white/[0.08] pt-3"><F userId={e.id} /></div><div className="relative z-10 mt-3 border-t border-white/[0.08] pt-3"><T userId={e.id} /></div><div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black/25 to-transparent" /></div>;
  };
  let R = () => {
    let {
      accounts: e,
      isLoading: r,
      fetchAccounts: a,
      initAccountListeners: s
    } = (0, v.default)();
    let {
      workerFilter: l,
      isUserRunning: i,
      initPostListeners: c
    } = (0, o.default)();
    (0, d.useEffect)(() => {
      a();
      let e = s();
      let t = c();
      return () => {
        e();
        t();
      };
    }, [a, s, c]);
    let x = (0, d.useMemo)(() => l === "running" ? e.filter(e => i(e.id)) : l === "idle" ? e.filter(e => !i(e.id)) : e, [e, l, i]);
    if (r) {
      return <div className="flex flex-1 min-h-[380px] w-full flex-col items-center justify-center gap-3 text-neutral-400"><n.Loader2 className="h-6 w-6 animate-spin text-blue-500" /><span className="text-xs font-medium">กำลังโหลดข้อมูล Worker...</span></div>;
    } else if (e.length === 0) {
      return <j.default icon={_.User} title="ยังไม่มีบัญชีในระบบ" desc={<t.Fragment>กรุณาเพิ่มบัญชี Facebook ที่หน้า <span className="font-semibold text-blue-400">Accounts</span> ก่อนเริ่มต้นใช้งาน Worker</t.Fragment>} minHeight="min-h-[380px]" />;
    } else if (x.length === 0) {
      return <j.default icon={_.User} iconColor="text-neutral-400" title={l === "running" ? "ไม่มีบัญชีที่กำลังทำงานอยู่ในขณะนี้" : "ไม่มีบัญชีที่ยังไม่ทำงาน (กำลังทำงานครบทุกบัญชีแล้ว)"} desc={l === "running" ? "กดปุ่มเริ่มงานที่บัญชีที่ต้องการเพื่อเริ่มทำงาน หรือกดปุ่มเริ่มงานทั้งหมดด้านบน" : "คุณสามารถสลับดูที่แท็บ ข้อมูลทั้งหมด หรือ กำลังทำงาน เพื่อดูสถานะ"} minHeight="min-h-[380px]" />;
    } else {
      return <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">{x.map(e => <W account={e} key={e.id} />)}</div>;
    }
  };
  e.s(["default", 0, () => <div className="flex flex-col gap-6 flex-1 min-h-0 w-full"><div className="flex items-center justify-between gap-4 shrink-0"><_Component6 /><_Component7 /></div><section className="flex-1 flex flex-col min-h-0 w-full"><R /></section></div>], 28926);
}, 9741, e => {
  "use strict";

  var t = e.i(66497);
  var r = e.i(10977);
  e.s(["default", 0, ({
    icon: _Component8,
    title: a,
    desc: s,
    description: l,
    action: n,
    children: i,
    className: o = "",
    iconColor: c = "text-blue-400",
    minHeight: d = "min-h-[320px]"
  }) => {
    let x = s ?? l;
    return <div className={`
        group relative overflow-hidden flex flex-1 w-full flex-col items-center justify-center
        rounded-2xl border border-white/[0.12] bg-neutral-950 p-8 text-center select-none
        shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]
        ${d}
        ${o}
      `}><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20" /><div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/[0.03] blur-2xl" />{_Component8 && <div className="\n            mb-4 flex h-16 w-16 items-center justify-center\n            rounded-2xl border border-white/[0.12] bg-neutral-900\n            shadow-[0_4px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)]\n          ">{_Component8 ? r.default.isValidElement(_Component8) ? _Component8 : <_Component8 size={28} className={`${c} drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]`} strokeWidth={1.8} /> : null}</div>}{a && <h3 className="text-base font-semibold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">{a}</h3>}{x && <p className="mt-2 max-w-sm text-xs leading-relaxed text-neutral-400">{x}</p>}{n && <div className="mt-5">{n}</div>}{i}<div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black/25 to-transparent" /></div>;
  }]);
}, 26874, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
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
  r.node;
  let a = (0, t.default)(r);
  e.s(["XCircle", 0, a], 26874);
}, 14024, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
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
  r.node;
  let a = (0, t.default)(r);
  e.s(["ListChecks", 0, a], 14024);
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
}, 28719, e => {
  "use strict";

  var t = e.i(1347);
  let r = () => window.electronApi?.stats ? window.electronApi.stats : null;
  let a = {
    total: 0,
    success: 0,
    failed: 0,
    pending: 0,
    post: 0,
    comment: 0,
    reaction: 0
  };
  let s = 0;
  let l = null;
  let n = null;
  let i = null;
  let o = (0, t.create)((e, t) => ({
    overallStats: {
      ...a
    },
    accountStats: {},
    dailyStats: [],
    dailyRange: 1,
    isLoading: true,
    error: null,
    fetchOverallStats: async () => {
      let t = r();
      if (!t) {
        e({
          isLoading: false
        });
        return;
      }
      try {
        let r = await t.getAll();
        e({
          overallStats: {
            total: r?.total ?? 0,
            success: r?.success ?? 0,
            failed: r?.failed ?? 0,
            pending: r?.pending ?? 0,
            updatedAt: r?.updatedAt
          },
          isLoading: false,
          error: null
        });
      } catch (r) {
        let t = r instanceof Error ? r.message : "Failed to fetch overall stats";
        console.error("Failed to fetch overall stats:", r);
        e({
          error: t,
          isLoading: false
        });
      }
    },
    fetchAccountStats: async t => {
      let a = r();
      if (!a) {
        return null;
      }
      let s = String(t);
      try {
        let t = await a.getUser(s);
        let r = {
          total: t?.total ?? 0,
          success: t?.success ?? 0,
          failed: t?.failed ?? 0,
          pending: t?.pending ?? 0,
          post: t?.post ?? 0,
          comment: t?.comment ?? 0,
          reaction: t?.reaction ?? 0,
          updatedAt: t?.updatedAt,
          userId: s
        };
        e(e => ({
          accountStats: {
            ...e.accountStats,
            [s]: r
          }
        }));
        return r;
      } catch (e) {
        console.error(`Failed to fetch stats for user ${s}:`, e);
        return null;
      }
    },
    fetchDailyStats: async a => {
      let s = r();
      if (!s) {
        return;
      }
      let l = typeof a == "number" ? a : t().dailyRange;
      e({
        dailyRange: l
      });
      try {
        let t = await s.getDaily(l);
        e({
          dailyStats: Array.isArray(t) ? t : []
        });
      } catch (e) {
        console.error("Failed to fetch daily stats:", e);
      }
    },
    fetchAll: async (r = 14) => {
      e({
        isLoading: true,
        error: null
      });
      await Promise.allSettled([t().fetchOverallStats(), t().fetchDailyStats(r)]);
      e({
        isLoading: false
      });
    },
    recordOutcome: async (t, s) => {
      let l = String(t);
      e(e => {
        let t = e.overallStats;
        let r = e.accountStats[l] || {
          ...a,
          userId: l
        };
        return {
          overallStats: {
            ...t,
            total: t.total + 1,
            [s]: (t[s] || 0) + 1
          },
          accountStats: {
            ...e.accountStats,
            [l]: {
              ...r,
              total: r.total + 1,
              [s]: (r[s] || 0) + 1
            }
          }
        };
      });
      let n = r();
      if (n) {
        try {
          await n.record(l, s);
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
      let r = String(t);
      e(e => {
        let t = {
          ...e.accountStats
        };
        delete t[r];
        return {
          accountStats: t
        };
      });
    },
    resetUserStats: async s => {
      let l = r();
      if (!l) {
        return false;
      }
      let n = String(s);
      try {
        let r = await l.resetUser(n);
        if (r?.success) {
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
      let s = r();
      if (!s) {
        return false;
      }
      try {
        let r = await s.resetAll();
        if (r?.success) {
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
      let r = window.electronApi?.post ? window.electronApi.post : null;
      if (r?.onProgress) {
        s++;
        l ||= r.onProgress(r => {
          let s = r.outcome || (r.success ? "success" : "failed");
          if (!["success", "failed", "pending"].includes(s)) {
            return;
          }
          let l = String(r.userId);
          let o = !!(r.stats?.isFullSuccess ?? s === "success");
          let c = !!(r.stats?.hasFailed ?? s === "failed");
          let d = !!(r.stats?.isPending ?? s === "pending");
          let x = !!(r.stats?.postSuccess ?? s === "success");
          let u = typeof r.stats?.commentCount == "number" ? r.stats.commentCount : r.comment?.success && typeof r.comment.count == "number" ? r.comment.count : 0;
          let h = typeof r.stats?.reactionSuccess == "boolean" ? +!!r.stats.reactionSuccess : r.reaction?.success && r.reaction.outcome !== "already_reacted" ? 1 : 0;
          e(e => {
            let t = e.overallStats;
            let r = e.accountStats[l] || {
              ...a,
              userId: l
            };
            return {
              overallStats: {
                ...t,
                total: t.total + 1,
                success: t.success + +!!o,
                failed: t.failed + +!!c,
                pending: t.pending + +!!d
              },
              accountStats: {
                ...e.accountStats,
                [l]: {
                  ...r,
                  total: r.total + 1,
                  success: r.success + +!!o,
                  failed: r.failed + +!!c,
                  pending: r.pending + +!!d,
                  post: (r.post || 0) + +!!x,
                  comment: (r.comment || 0) + u,
                  reaction: (r.reaction || 0) + h
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
          if ((s = Math.max(0, s - 1)) === 0) {
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
  e.s(["default", 0, o, "useStatsStore", 0, o]);
}]);
