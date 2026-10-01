module.exports = [66358, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(1441);
  let d = {
    name: "zap",
    size: 24,
    node: [["path", {
      d: "M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",
      key: "1v7up4"
    }]]
  };
  d.node;
  let _Component = (0, c.default)(d);
  var f = a.i(86053);
  var g = a.i(76950);
  var h = a.i(15723);
  var i = a.i(5526);
  let _Component7 = () => {
    let {
      isAllRunning: a,
      isActionLoading: c,
      startAll: d,
      cancelAll: j
    } = (0, i.default)();
    let k = c("all");
    let l = async () => {
      if (!k) {
        if (a) {
          await j();
        } else {
          await d();
        }
      }
    };
    return <div><h.default variant={a ? "danger" : "primary"} size="md" onClick={l} disabled={k}>{k ? <b.Fragment><g.Loader2 size={16} className="animate-spin" /><span>{a ? "กำลังหยุดทั้งหมด..." : "กำลังเริ่มทั้งหมด..."}</span></b.Fragment> : a ? <b.Fragment><f.Square size={15} className="fill-current" /><span>หยุดทำงานทั้งหมด</span></b.Fragment> : <b.Fragment><_Component size={16} /><span>เริ่มทำงานทั้งหมด</span></b.Fragment>}</h.default></div>;
  };
  var k = a.i(9651);
  let l = {
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
  l.node;
  let m = (0, c.default)(l);
  var n = a.i(5835);
  let o = {
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
  o.node;
  let p = (0, c.default)(o);
  let q = {
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
  let r = {
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
    items: a,
    options: c,
    value: d,
    onChange: e,
    className: f = "",
    size: g = "md",
    disabled: h = false
  }) => {
    let i = a ?? c ?? [];
    let [j, l] = (0, k.useState)(() => i[0]?.id ?? i[0]?.value);
    let m = d !== undefined ? d : j;
    let n = r[g] ?? r.md;
    return <div className={`
        inline-flex items-center gap-2 rounded-2xl
        border border-white/[0.08] bg-neutral-950/80 p-1.5
        shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.05)]
        backdrop-blur-md
        ${h ? "opacity-50 pointer-events-none" : ""}
        ${f}
      `}>{i.map(a => {
        let _Component2;
        let d = a.id ?? a.value;
        let f = m === d;
        let g = h || a.disabled;
        let i = a.color && q[a.color] ? a.color : "blue";
        let j = q[i];
        return <button type="button" disabled={g} onClick={() => {
          if (!h) {
            if (e) {
              e(d);
            } else {
              l(d);
            }
          }
        }} className={`
              group relative
              flex items-center
              overflow-hidden
              border
              ${n.button}
              cursor-pointer select-none
              transition-all duration-200 ease-out

              ${f ? `
                    bg-neutral-950
                    ${j.activeBorder}
                    ${j.activeRing}
                    ${j.activeGlow}
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
              ${g ? "opacity-40 cursor-not-allowed pointer-events-none" : ""}
            `} key={String(d)}><div className={`
                pointer-events-none
                absolute inset-x-2.5 top-0
                h-px
                transition-all duration-200
                ${f ? j.activeTopLine : "bg-white/10 group-hover:bg-white/20"}
              `} /><div className={`
                pointer-events-none
                absolute -left-6 -top-6
                h-16 w-16
                rounded-full
                blur-xl
                transition-all duration-300
                ${f ? j.activeSoftLight : "bg-white/[0.02] group-hover:bg-white/[0.05]"}
              `} /><div className="relative z-10 flex items-center gap-[inherit]">{a.icon && <b.Fragment>{k.default.isValidElement(a.icon) ? <span className={`
                        shrink-0 transition-transform duration-200 group-hover:scale-105
                        ${f ? `${j.activeIcon} drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]` : "text-neutral-500 group-hover:text-neutral-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"}
                      `}>{a.icon}</span> : (_Component2 = a.icon, <_Component2 className={`
                            ${n.icon} shrink-0
                            transition-transform duration-200 group-hover:scale-105
                            ${f ? `${j.activeIcon} drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]` : "text-neutral-500 group-hover:text-neutral-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"}
                          `} strokeWidth={1.8} />)}</b.Fragment>}<span className={`
                  font-medium whitespace-nowrap
                  ${n.text}
                  ${f ? "text-white font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]" : "text-neutral-400 group-hover:text-neutral-200"}
                `}>{a.label}</span>{typeof a.count == "number" && <span className={`
                    border-l
                    font-semibold tabular-nums
                    ${n.count}
                    ${f ? `border-white/[0.15] ${j.activeCountText} drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]` : "border-white/[0.08] text-neutral-500 group-hover:text-neutral-300"}
                  `}>{a.count}</span>}</div><div className="\n                pointer-events-none\n                absolute\n                inset-x-0\n                bottom-0\n                h-2.5\n                bg-gradient-to-t\n                from-black/25\n                to-transparent\n              " /></button>;
      })}</div>;
  };
  var t = a.i(13320);
  let _Component6 = ({
    className: a = "",
    size: c = "md",
    value: d,
    onChange: e
  }) => {
    let {
      accounts: f
    } = (0, t.default)();
    let {
      workerFilter: g,
      setWorkerFilter: h,
      isUserRunning: j
    } = (0, i.default)();
    let l = (0, k.useMemo)(() => {
      let a = 0;
      let b = 0;
      for (let c of f) {
        if (j(c.id)) {
          a++;
        } else {
          b++;
        }
      }
      return {
        all: f.length,
        running: a,
        idle: b
      };
    }, [f, j]);
    let o = (0, k.useMemo)(() => [{
      id: "all",
      label: "ข้อมูลทั้งหมด",
      count: l.all,
      icon: m,
      color: "blue"
    }, {
      id: "running",
      label: "กำลังทำงาน",
      count: l.running,
      icon: n.Play,
      color: "emerald"
    }, {
      id: "idle",
      label: "ว่างงาน",
      count: l.idle,
      icon: p,
      color: "amber"
    }], [l]);
    return <_Component3 items={o} value={d ?? g} onChange={e ?? h} size={c} className={a} />;
  };
  var v = a.i(79162);
  var w = a.i(3322);
  let _Component5 = ({
    userId: a,
    userName: c,
    className: d = ""
  }) => {
    let {
      isUserRunning: j,
      isActionLoading: k,
      startUser: l,
      cancelUser: m
    } = (0, i.default)();
    let n = j(a);
    let o = k(a);
    let p = async b => {
      b.stopPropagation();
      if (!o) {
        if (n) {
          await m(a);
        } else {
          await l(a);
        }
      }
    };
    return <h.default variant={n ? "danger" : "primary"} size="sm" onClick={p} disabled={o} className={`shadow-sm ${d}`} title={n ? `หยุดการทำงานของ ${c || a}` : `เริ่มการทำงานของ ${c || a}`}>{o ? <b.Fragment><g.Loader2 size={13} className="animate-spin" /><span>{n ? "กำลังหยุด..." : "กำลังเริ่ม..."}</span></b.Fragment> : n ? <b.Fragment><f.Square size={12} className="fill-current" /><span>หยุดทำงาน</span></b.Fragment> : <b.Fragment><_Component size={13} /><span>เริ่มทำงาน</span></b.Fragment>}</h.default>;
  };
  var y = a.i(93301);
  var z = a.i(72370);
  var A = a.i(36972);
  var B = a.i(2906);
  var C = a.i(76396);
  let D = {
    name: "heart",
    size: 24,
    node: [["path", {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }]]
  };
  D.node;
  let E = (0, c.default)(D);
  var F = a.i(75875);
  let G = ({
    userId: a,
    stats: c,
    className: d = ""
  }) => {
    let {
      accountStats: e,
      fetchAccountStats: f,
      initStatsListeners: g
    } = (0, F.default)();
    let h = a ? String(a) : "";
    (0, k.useEffect)(() => {
      if (h) {
        f(h);
        let a = g();
        return () => {
          a();
        };
      }
    }, [h, f, g]);
    let i = c || (h ? e[h] : null);
    let j = [{
      label: "ทั้งหมด",
      value: i?.total ?? 0,
      icon: y.ListChecks,
      color: "text-blue-400",
      iconColor: "text-blue-400/15"
    }, {
      label: "สำเร็จ",
      value: i?.success ?? 0,
      icon: z.CheckCircle2,
      color: "text-emerald-400",
      iconColor: "text-emerald-400/15"
    }, {
      label: "ผิดพลาด",
      value: i?.failed ?? 0,
      icon: A.XCircle,
      color: "text-rose-400",
      iconColor: "text-rose-400/15"
    }, {
      label: "โพสต์",
      value: i?.post ?? 0,
      icon: B.Send,
      color: "text-sky-400",
      iconColor: "text-sky-400/15"
    }, {
      label: "คอมเมนต์",
      value: i?.comment ?? 0,
      icon: C.MessageSquare,
      color: "text-amber-400",
      iconColor: "text-amber-400/15"
    }, {
      label: "ความรู้สึก",
      value: i?.reaction ?? 0,
      icon: E,
      color: "text-pink-400",
      iconColor: "text-pink-400/15"
    }];
    return <div className={`grid grid-cols-3 gap-2 ${d}`}>{j.map(a => {
        let _Component4 = a.icon;
        return <div className="\n              group relative\n              h-[52px]\n              overflow-hidden\n              rounded-xl\n              bg-neutral-950\n              border border-white/[0.12]\n              px-2.5 py-1.5\n              shadow-[0_4px_0_rgba(0,0,0,0.35),0_8px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.5)]\n              transition-all duration-200 ease-out select-none\n              hover:border-white/20\n            " key={a.label}><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/20 z-10" /><div className="pointer-events-none absolute -left-5 -top-5 h-12 w-12 rounded-full bg-white/[0.04] blur-lg transition-all duration-300 group-hover:bg-white/[0.07]" /><div className="relative z-10"><p className="text-[10px] font-medium text-neutral-400 leading-tight">{a.label}</p><p className={`
                  text-base font-semibold tracking-tight leading-tight mt-0.5
                  ${a.color}
                  drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]
                `}>{a.value.toLocaleString()}</p></div><_Component4 size={40} strokeWidth={1.2} className={`
                pointer-events-none
                absolute
                -right-1
                -bottom-1.5
                ${a.iconColor}
                drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]
                transition-transform duration-300
                group-hover:scale-105 group-hover:-rotate-3
              `} /><div className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-t from-black/20 to-transparent" /></div>;
      })}</div>;
  };
  var H = a.i(55667);
  let I = ({
    isRunning: a = false,
    className: c = "",
    size: d = 20
  }) => <div className={`relative flex items-center justify-center select-none m-0 p-0 leading-none ${c}`} style={{
    width: d,
    height: d
  }} title={a ? "กำลังทำงาน (เดิน)" : "สแตนด์บาย (ยืนนิ่ง)"}><svg viewBox="0 0 24 24" width={d} height={d} className="block overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><filter id="green-visor-glow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="0.8" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter><style>{`
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
          `}</style></defs>{a ? <g className="char-walk-body"><path d="M7.5 12 L5.5 15.8" stroke="#059669" strokeWidth="2.3" strokeLinecap="round" className="char-walk-arm-l" /><path d="M10 16.5 L10 21 L8.5 21.6" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="char-walk-leg-l" /><rect x="7.5" y="11" width="9" height="6.2" rx="2.2" fill="#059669" stroke="#10b981" strokeWidth="1" /><circle cx="12" cy="14" r="1.1" fill="#34d399" /><path d="M14 16.5 L14 21 L15.5 21.6" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="char-walk-leg-r" /><rect x="5.8" y="5.2" width="1.6" height="3.2" rx="0.8" fill="#10b981" /><rect x="16.6" y="5.2" width="1.6" height="3.2" rx="0.8" fill="#10b981" /><rect x="7" y="2.5" width="10" height="8.8" rx="4.4" fill="#064e3b" stroke="#10b981" strokeWidth="1.1" /><rect x="8.5" y="4.8" width="7" height="3.6" rx="1.8" fill="#34d399" filter="url(#green-visor-glow)" /><path d="M16.5 12 L18.5 15.8" stroke="#34d399" strokeWidth="2.3" strokeLinecap="round" className="char-walk-arm-r" /></g> : <g className="char-idle-breath"><path d="M7.5 12 L5.8 16" stroke="#525252" strokeWidth="2.2" strokeLinecap="round" /><path d="M9.5 16.5 L9.5 21.2 L8 21.8" stroke="#525252" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 16.5 L14.5 21.2 L16 21.8" stroke="#525252" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><rect x="7.5" y="11" width="9" height="6.2" rx="2.2" fill="#262626" stroke="#404040" strokeWidth="1" /><circle cx="12" cy="14" r="1.1" fill="#525252" /><rect x="5.8" y="5.2" width="1.6" height="3.2" rx="0.8" fill="#525252" /><rect x="16.6" y="5.2" width="1.6" height="3.2" rx="0.8" fill="#525252" /><rect x="7" y="2.5" width="10" height="8.8" rx="4.4" fill="#171717" stroke="#404040" strokeWidth="1.1" /><rect x="8.5" y="4.8" width="7" height="3.6" rx="1.8" fill="#737373" opacity="0.85" /><path d="M16.5 12 L18.2 16" stroke="#525252" strokeWidth="2.2" strokeLinecap="round" /></g>}</svg></div>;
  let J = ({
    userId: a,
    task: c,
    groupName: d,
    groupCurrent: e = 0,
    groupTotal: f = 0,
    linkCurrent: g = 0,
    linkTotal: h = 0,
    className: j = ""
  }) => {
    let l;
    let m;
    let n;
    let {
      isUserRunning: o,
      tasks: p,
      groupInfo: q,
      taskTimers: r
    } = (0, i.default)();
    let s = a ? String(a) : "";
    let t = !!s && o(s);
    let [u, v] = k.default.useState(0);
    let [w, x] = k.default.useState(0);
    let y = s ? r[s] : undefined;
    let z = y?.endTime || 0;
    k.default.useEffect(() => {
      if (!t) {
        return;
      }
      let a = setInterval(() => {
        v(a => a + 1);
      }, 1000);
      return () => {
        clearInterval(a);
        v(0);
      };
    }, [t]);
    k.default.useEffect(() => {
      if (!z || !t) {
        return;
      }
      let a = () => {
        let a = Math.max(0, (z - Date.now()) / 1000);
        x(a);
        return a > 0;
      };
      let b = setTimeout(a, 0);
      let c = setInterval(() => {
        if (!a()) {
          clearInterval(c);
        }
      }, 100);
      return () => {
        clearTimeout(b);
        clearInterval(c);
        x(0);
      };
    }, [z, t]);
    let A = c || (t ? p[s] || "กำลังเริ่มงาน..." : "-");
    let B = (a => {
      if (a <= 0) {
        return "";
      }
      let b = Math.max(0, a);
      let c = Math.floor(b / 3600);
      let d = Math.floor(b % 3600 / 60);
      let e = Math.floor(b % 60);
      if (c > 0) {
        return `${c} ชม. ${d} นาที`;
      } else if (d > 0) {
        return `${d} นาที ${e} วินาที`;
      } else {
        return `${b.toFixed(1)} วินาที`;
      }
    })(w);
    let C = /\b\d+(\.\d+)?s$/i.test(A.trim());
    let D = t && B && !C;
    let E = d || t && q[s]?.groupName || "-";
    let F = q[s]?.groupCurrent ?? e;
    let G = q[s]?.groupTotal ?? f;
    let J = q[s]?.linkCurrent ?? g;
    let K = q[s]?.linkTotal ?? h;
    return <div className={`
        group relative flex flex-col justify-between
        overflow-hidden rounded-xl border border-white/[0.12]
        bg-neutral-950 p-2.5 select-none
        shadow-[0_4px_0_rgba(0,0,0,0.35),0_8px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.5)]
        transition-all duration-200 hover:border-white/20
        ${j}
      `}><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/20 z-10" /><div className={`pointer-events-none absolute -left-5 -top-5 h-12 w-12 rounded-full blur-lg transition-all duration-300 ${t ? "bg-blue-500/[0.08] group-hover:bg-blue-500/[0.12]" : "bg-white/[0.03] group-hover:bg-white/[0.06]"}`} /><div className="relative z-10 flex flex-col gap-2"><div className="flex flex-col gap-1"><div className="flex items-center justify-between"><div className="flex items-center gap-1.5"><div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-200 ${t ? "bg-emerald-500/15 border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]" : "bg-neutral-900 border-white/[0.08]"}`}><I isRunning={t} size={20} /></div><div className="flex flex-col"><span className={`text-[10px] uppercase tracking-wider transition-colors duration-200 ${t ? "text-neutral-400" : "text-neutral-500"}`}>TASK</span><div className={`flex max-w-[185px] items-baseline gap-1.5 overflow-hidden text-xs font-medium leading-snug transition-colors duration-200 ${t ? "text-neutral-300" : "text-neutral-500"}`}><span className="truncate">{A}</span>{D && <span className="shrink-0 font-mono text-[11px] font-semibold text-emerald-400">{B}</span>}</div></div></div><span className={`rounded-md border px-1.5 py-0.5 font-mono text-[10px] shadow-sm transition-colors duration-200 ${t ? "border-blue-500/25 bg-blue-500/15 font-semibold text-blue-400" : "border-white/[0.08] bg-neutral-900 font-medium text-neutral-500"}`}>{(l = Math.floor(u / 3600), m = Math.floor(u % 3600 / 60), n = Math.floor(u % 60), l > 0 ? `${l} ชม. ${m} นาที` : m > 0 ? `${m} นาที ${n} วิ` : `${n} วิ`)}</span></div></div><div className="h-px w-full bg-white/[0.06]" /><div className="flex flex-col gap-1"><div className="flex items-center justify-between"><div className="flex items-center gap-1.5"><div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-200 ${t ? "bg-sky-400/15 border-sky-400/30 shadow-[0_0_12px_rgba(56,189,248,0.15)]" : "bg-neutral-900 border-white/[0.08]"}`}><H.Users size={20} className={`shrink-0 transition-colors duration-200 ${t ? "text-sky-400" : "text-neutral-500"}`} /></div><div className="flex flex-col"><span className={`text-[10px] uppercase tracking-wider transition-colors duration-200 ${t ? "text-neutral-400" : "text-neutral-500"}`}>GROUPS {t && G > 1 ? `(${F}/${G})` : ""}</span><p className={`max-w-[180px] truncate text-xs font-medium leading-snug transition-colors duration-200 ${t ? "text-neutral-300" : "text-neutral-500"}`}>{E}</p></div></div><span className={`rounded-md border px-1.5 py-0.5 font-mono text-[10px] shadow-sm transition-colors duration-200 ${t ? "border-sky-500/25 bg-sky-500/15 font-semibold text-sky-400" : "border-white/[0.08] bg-neutral-900 font-medium text-neutral-500"}`}>{J} / {K}</span></div></div></div><div className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-t from-black/25 to-transparent" /></div>;
  };
  let K = ({
    account: a
  }) => {
    let {
      isUserRunning: c
    } = (0, i.default)();
    let d = c(a.id);
    let e = a.avatarLocal || a.avatar;
    return <div className={`
        group relative flex min-h-0 flex-col overflow-hidden
        rounded-2xl border bg-neutral-950 p-3.5
        select-none transition-all duration-200
        border-white/[0.12] shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.5)] hover:border-white/20
      `}><div className="pointer-events-none absolute inset-x-3 top-0 z-10 h-px bg-white/20" /><div className={`
          pointer-events-none absolute -left-10 -top-10 h-24 w-24
          rounded-full blur-2xl transition-all duration-300
          ${d ? "bg-blue-500/[0.12]" : "bg-white/[0.03] group-hover:bg-white/[0.06]"}
        `} /><div className="relative z-10 flex min-w-0 items-center justify-between gap-3 pl-1"><div className="flex min-w-0 items-center gap-3"><div className={`
              relative flex h-11 w-11 shrink-0 items-center justify-center
              overflow-hidden rounded-xl border bg-neutral-900
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.4)]
              ${d ? "border-blue-400/60 ring-2 ring-blue-500/25" : "border-white/[0.12] group-hover:border-white/20"}
            `}>{e ? <img src={e} alt={a.name} className="h-full w-full object-cover" onError={a => {
              a.currentTarget.style.display = "none";
            }} /> : <v.User size={20} className="text-neutral-400" />}</div><div className="min-w-0"><h4 className="truncate text-sm font-semibold tracking-tight text-white">{a.name}</h4><p className="mt-0.5 truncate font-mono text-xs text-neutral-400">ID: {a.fbId || a.id}</p></div></div><div className="relative z-20 shrink-0"><_Component5 userId={a.id} userName={a.name} /></div></div><div className="relative z-10 mt-3.5 border-t border-white/[0.08] pt-3"><J userId={a.id} /></div><div className="relative z-10 mt-3 border-t border-white/[0.08] pt-3"><G userId={a.id} /></div><div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black/25 to-transparent" /></div>;
  };
  let L = () => {
    let {
      accounts: a,
      isLoading: c,
      fetchAccounts: d,
      initAccountListeners: e
    } = (0, t.default)();
    let {
      workerFilter: f,
      isUserRunning: h,
      initPostListeners: j
    } = (0, i.default)();
    (0, k.useEffect)(() => {
      d();
      let a = e();
      let b = j();
      return () => {
        a();
        b();
      };
    }, [d, e, j]);
    let l = (0, k.useMemo)(() => f === "running" ? a.filter(a => h(a.id)) : f === "idle" ? a.filter(a => !h(a.id)) : a, [a, f, h]);
    if (c) {
      return <div className="flex flex-1 min-h-[380px] w-full flex-col items-center justify-center gap-3 text-neutral-400"><g.Loader2 className="h-6 w-6 animate-spin text-blue-500" /><span className="text-xs font-medium">กำลังโหลดข้อมูล Worker...</span></div>;
    } else if (a.length === 0) {
      return <w.default icon={v.User} title="ยังไม่มีบัญชีในระบบ" desc={<b.Fragment>กรุณาเพิ่มบัญชี Facebook ที่หน้า <span className="font-semibold text-blue-400">Accounts</span> ก่อนเริ่มต้นใช้งาน Worker</b.Fragment>} minHeight="min-h-[380px]" />;
    } else if (l.length === 0) {
      return <w.default icon={v.User} iconColor="text-neutral-400" title={f === "running" ? "ไม่มีบัญชีที่กำลังทำงานอยู่ในขณะนี้" : "ไม่มีบัญชีที่ยังไม่ทำงาน (กำลังทำงานครบทุกบัญชีแล้ว)"} desc={f === "running" ? "กดปุ่มเริ่มงานที่บัญชีที่ต้องการเพื่อเริ่มทำงาน หรือกดปุ่มเริ่มงานทั้งหมดด้านบน" : "คุณสามารถสลับดูที่แท็บ ข้อมูลทั้งหมด หรือ กำลังทำงาน เพื่อดูสถานะ"} minHeight="min-h-[380px]" />;
    } else {
      return <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">{l.map(a => <K account={a} key={a.id} />)}</div>;
    }
  };
  a.s(["default", 0, () => <div className="flex flex-col gap-6 flex-1 min-h-0 w-full"><div className="flex items-center justify-between gap-4 shrink-0"><_Component6 /><_Component7 /></div><section className="flex-1 flex flex-col min-h-0 w-full"><L /></section></div>], 66358);
}];

//# sourceMappingURL=client_app_%28user%29_worker_page_tsx_1tmm4o5._.js.map
