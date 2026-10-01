module.exports = [13329, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(9651);
  var d = a.i(54949);
  var e = a.i(44146);
  var f = a.i(76950);
  var g = a.i(22370);
  a.s(["default", 0, function ({
    children: a
  }) {
    let h = (0, d.useRouter)();
    let {
      isAuthenticated: i,
      isInitialLoading: j,
      isOffline: k,
      statusMessage: l,
      keyDetails: m,
      initAuth: n
    } = (0, e.useAuthStore)();
    let {
      toast: o
    } = (0, g.useToast)();
    let p = (0, c.useRef)(false);
    (0, c.useEffect)(() => {
      n();
    }, [n]);
    (0, c.useEffect)(() => {
      if (j || i) {
        if (!j && !!i && !p.current) {
          p.current = true;
        }
      } else {
        h.replace("/auth");
      }
    }, [i, j, k, l, m, h, o]);
    if (j) {
      return <div className="flex min-h-[400px] flex-1 flex-col items-center justify-center gap-3"><div className="relative flex h-12 w-12 items-center justify-center"><div className="absolute inset-0 rounded-full border-2 border-sky-500/20 animate-ping" /><f.Loader2 size={28} className="animate-spin text-sky-400" /></div><p className="text-xs font-medium text-neutral-400 tracking-wide animate-pulse">กำลังตรวจสอบสิทธิ์การใช้งาน...</p></div>;
    } else if (i) {
      return <b.Fragment>{a}</b.Fragment>;
    } else {
      return null;
    }
  }]);
}, 1290, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(9651);
  let _Component3 = ({
    isRunning: a = false,
    size: d = 64,
    className: e = "",
    isHovered: f = false,
    isSleeping: g = false,
    isWaving: h = false
  }) => {
    let i = (0, c.useRef)(null);
    let [j, k] = (0, c.useState)({
      x: 0,
      y: 0
    });
    let [l, m] = (0, c.useState)(false);
    let n = (0, c.useMemo)(() => Math.random().toString(36).slice(2, 8), []);
    let o = (f || h) && !g;
    (0, c.useEffect)(() => {
      let a;
      let b = 0;
      let c = 0;
      let d = a => {
        if (!i.current || g) {
          return;
        }
        let d = i.current.getBoundingClientRect();
        let e = d.left + d.width / 2;
        let f = d.top + d.height / 2;
        let h = (a.clientX - e) / (window.innerWidth / 2);
        let j = (a.clientY - f) / (window.innerHeight / 2);
        b = Math.max(-1, Math.min(1, h));
        c = Math.max(-1, Math.min(1, j));
      };
      let e = () => {
        k(a => ({
          x: a.x + (b - a.x) * 0.12,
          y: a.y + (c - a.y) * 0.12
        }));
        a = requestAnimationFrame(e);
      };
      window.addEventListener("mousemove", d, {
        passive: true
      });
      a = requestAnimationFrame(e);
      return () => {
        window.removeEventListener("mousemove", d);
        cancelAnimationFrame(a);
      };
    }, [g]);
    (0, c.useEffect)(() => {
      if (g) {
        return;
      }
      let a = setInterval(() => {
        m(true);
        setTimeout(() => m(false), 160);
      }, 3800);
      return () => clearInterval(a);
    }, [g]);
    let p = g ? 0 : j.x * 14;
    let q = g ? 6 : -(j.y * 12);
    let r = g ? 0 : j.x * 2.5;
    let s = g ? 0 : j.x * -1.2;
    let t = g || o ? 0 : j.x * 1.1;
    let u = g || o ? 0 : j.y * 0.9;
    let v = a ? "#34d399" : "#38bdf8";
    let w = a ? "#34d399" : "#4d9dff";
    let x = l && !g;
    let y = d >= 120;
    let z = c => g || x ? <path d={`M${c - 5.2},55.2 Q${c},${g ? 57.2 : 58.4} ${c + 5.2},55.2`} stroke="#23262e" strokeWidth="2" strokeLinecap="round" fill="none" /> : o ? <path d={`M${c - 5.4},57.2 Q${c},50.4 ${c + 5.4},57.2`} stroke="#23262e" strokeWidth="2.4" strokeLinecap="round" fill="none" /> : <g><ellipse cx={c} cy="56.6" rx={a ? 5 : 5.2} ry={a ? 5.6 : 6.6} fill={`url(#gIris-${n})`} stroke="#16336b" strokeWidth="0.6" /><path d={`M${c - 5},53.4 Q${c},51.9 ${c + 5},53.4 L${c + 5},55.3 Q${c},53.9 ${c - 5},55.3 Z`} fill="#0e2f6e" opacity="0.5" /><g transform={`translate(${t} ${u})`}><ellipse cx={c} cy="57.4" rx="2.3" ry="3.1" fill="#0d2650" /><circle cx={c - 1.8} cy="53.9" r="1.7" fill="#ffffff" opacity="0.95" /><circle cx={c + 1.6} cy="54.6" r="0.55" fill="#ffffff" opacity="0.9" /><circle cx={c + 2} cy="60.2" r="0.9" fill="#cfe8ff" opacity="0.85" /></g><path d={`M${c - 3.4},61 Q${c},62.7 ${c + 3.4},61`} stroke="#8fd0ff" strokeWidth="1" opacity="0.55" fill="none" /><path d={`M${c - 4},61.9 Q${c},63.4 ${c + 4},61.9`} stroke="#d99a6e" strokeWidth="0.7" opacity="0.6" fill="none" />{a && <path d={`M${c - 5.4},52.6 L${c + 5.4},52.6`} stroke="#23262e" strokeWidth="2.4" strokeLinecap="round" />}<path d={`M${c - 5.5},52.4 Q${c},49.6 ${c + 5.5},52.4`} stroke="#23262e" strokeWidth="2.4" strokeLinecap="round" fill="none" /></g>;
    let A = <g filter={`url(#fGlow-${n})`}><path d="M-3.2,-3.5 h1.7 v7 h-1.7 Z" fill={w} /><path d="M1.5,-3.5 h1.7 v7 h-1.7 Z" fill={w} /><path d="M1.2,-3.8 L-0.6,-0.7 L0.5,-0.7 L-1.4,3.8 L-0.3,0.4 L-1.5,0.4 Z" fill={w} /></g>;
    return <div ref={i} className={`relative flex items-center justify-center select-none ${e}`} style={{
      width: d,
      height: d * 1.1,
      perspective: 650
    }}><style>{`
        /* 1. ลอยตัวปกติ (Zero-G Float) */
        @keyframes hz-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        /* 2. หลับ หายใจช้าๆ */
        @keyframes hz-sleep-float {
          0%, 100% { transform: translateY(0px) scale(0.98); }
          50% { transform: translateY(2px) scale(1.01); }
        }

        /* 3. ร่วมเร่งจังหวะเมื่อ Worker กำลังทำงาน */
        @keyframes hz-active-float {
          0%, 100% { transform: translateY(0px) scale(1.02); }
          50% { transform: translateY(-7px) scale(0.99); }
        }

        /* 4. แขนซ้ายโบกมือทักทายเมื่อคลิก (Wave Gesture) */
        @keyframes hz-wave-arm {
          0%, 100% { transform: rotate(108deg); }
          50% { transform: rotate(142deg); }
        }

        /* 5. ตัว Zzz ลอยตอนหลับ */
        @keyframes hz-zzz-float {
          0% { transform: translateY(0) scale(0.6); opacity: 0; }
          30% { opacity: 0.85; }
          100% { transform: translateY(-20px) translateX(8px) scale(1.2); opacity: 0; }
        }

        .hz-body {
          animation: ${g ? "hz-sleep-float 3.8s ease-in-out infinite" : a ? "hz-active-float 1.6s ease-in-out infinite" : "hz-float 2.8s ease-in-out infinite"};
        }

        .hz-wave-arm {
          animation: hz-wave-arm 0.85s ease-in-out infinite;
          transform-origin: 42px 82px;
        }

        .hz-zzz-1 { animation: hz-zzz-float 2.6s ease-in-out infinite; }
        .hz-zzz-2 { animation: hz-zzz-float 2.6s ease-in-out infinite 0.7s; }
        .hz-zzz-3 { animation: hz-zzz-float 2.6s ease-in-out infinite 1.4s; }
      `}</style>{g && <div className="pointer-events-none absolute -top-6 right-0 z-40 flex flex-col font-mono text-[9px] font-bold text-sky-300"><span className="hz-zzz-1 opacity-0 leading-none">z</span><span className="hz-zzz-2 -mt-1 ml-1.5 opacity-0 text-[11px] leading-none text-sky-200">z</span><span className="hz-zzz-3 -mt-1 ml-3 opacity-0 text-[13px] leading-none text-white">Z</span></div>}<div className="transition-transform duration-100 ease-out" style={{
        position: "relative",
        width: "100%",
        height: "100%",
        transform: `rotateX(${q}deg) rotateY(${p}deg)`
      }}><div className="hz-body" style={{
          width: "100%",
          height: "100%"
        }}><svg width="100%" height="100%" viewBox="0 0 120 132" style={{
            overflow: "visible"
          }}><defs><linearGradient id={`gHair-${n}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffffff" /><stop offset="0.55" stopColor="#eef3fa" /><stop offset="1" stopColor="#c3d2e8" /></linearGradient><linearGradient id={`gSkin-${n}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffeedd" /><stop offset="1" stopColor="#f3c9a6" /></linearGradient><linearGradient id={`gHood-${n}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2a2e39" /><stop offset="1" stopColor="#101218" /></linearGradient><linearGradient id={`gHoodInner-${n}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1d4ed8" /><stop offset="1" stopColor="#0b1e56" /></linearGradient><linearGradient id={`gJacket-${n}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2b303b" /><stop offset="1" stopColor="#13151b" /></linearGradient><linearGradient id={`gPants-${n}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1d2027" /><stop offset="1" stopColor="#0f1116" /></linearGradient><linearGradient id={`gCup-${n}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2b303c" /><stop offset="1" stopColor="#0c0e13" /></linearGradient><radialGradient id={`gIris-${n}`} cx="0.5" cy="0.38" r="0.75"><stop offset="0" stopColor="#cdeeff" /><stop offset="0.3" stopColor="#7cc4f8" /><stop offset="0.62" stopColor="#2e7ae0" /><stop offset="0.85" stopColor="#1a53b8" /><stop offset="1" stopColor="#123f95" /></radialGradient><linearGradient id={`gSole-${n}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3b82f6" /><stop offset="1" stopColor="#1d4ed8" /></linearGradient><linearGradient id={`gRing-${n}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={v} /><stop offset="1" stopColor="#1d4ed8" /></linearGradient><filter id={`fGlow-${n}`} x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="1.7" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs><rect x="45" y="103" width="11" height="17" rx="4.5" fill={`url(#gPants-${n})`} /><rect x="64" y="103" width="11" height="17" rx="4.5" fill={`url(#gPants-${n})`} /><g transform="rotate(-4 50 122)"><rect x="41" y="121" width="19" height="6.5" rx="3.2" fill={`url(#gSole-${n})`} /><rect x="42" y="113.5" width="17" height="9.5" rx="4.7" fill="#15171d" /><rect x="43" y="116.5" width="6" height="6" rx="3" fill="#262b36" opacity="0.85" />{y && <g><rect x="48.4" y="114.2" width="3.2" height="2" rx="0.9" fill="#262b36" /><path d="M45.5,115.6 l3.4,2.2 M49.5,115.4 l-3.2,2.4" stroke="#3a4150" strokeWidth="0.7" /><g fill="#1e50c0" opacity="0.85"><rect x="44.6" y="124.2" width="1.3" height="2.2" rx="0.6" /><rect x="49.4" y="124.6" width="1.3" height="2.2" rx="0.6" /><rect x="54.2" y="124.2" width="1.3" height="2.2" rx="0.6" /></g></g>}</g><g transform="rotate(4 70 122)"><rect x="60" y="121" width="19" height="6.5" rx="3.2" fill={`url(#gSole-${n})`} /><rect x="61" y="113.5" width="17" height="9.5" rx="4.7" fill="#15171d" /><rect x="62" y="116.5" width="6" height="6" rx="3" fill="#262b36" opacity="0.85" />{y && <g><rect x="68.4" y="114.2" width="3.2" height="2" rx="0.9" fill="#262b36" /><path d="M65.5,115.6 l3.4,2.2 M69.5,115.4 l-3.2,2.4" stroke="#3a4150" strokeWidth="0.7" /><g fill="#1e50c0" opacity="0.85"><rect x="63.6" y="124.2" width="1.3" height="2.2" rx="0.6" /><rect x="68.4" y="124.6" width="1.3" height="2.2" rx="0.6" /><rect x="73.2" y="124.2" width="1.3" height="2.2" rx="0.6" /></g></g>}</g><path d="M39,86 Q39,77 48,75 L72,75 Q81,77 81,86 L83,105 Q83.5,112 75,112 L45,112 Q36.5,112 37,105 Z" fill={`url(#gJacket-${n})`} /><path d="M44,76.5 Q60,72.5 76,76.5" stroke="#3a4150" strokeWidth="1.2" fill="none" opacity="0.9" /><path d="M43,75 Q60,84.5 77,75 Q79.5,79 76,82.5 Q60,91 44,82.5 Q40.5,79 43,75 Z" fill="#171a21" stroke="#2a2f3a" strokeWidth="0.8" /><path d="M43,75 Q60,84.5 77,75" stroke={w} strokeWidth="1.3" fill="none" opacity="0.9" />{y && <path d="M45.2,77 Q60,85.8 74.8,77" stroke="#7cc9ff" strokeWidth="0.6" fill="none" opacity="0.5" />}<line x1="60" y1="84" x2="60" y2="111" stroke="#274b8f" strokeWidth="1.4" /><line x1="60" y1="85" x2="60" y2="110" stroke="#4d82e8" strokeWidth="0.9" strokeDasharray="1.6 1.3" /><circle cx="60" cy="85.5" r="1.4" fill="#6aa2ff" /><path d="M42.5,93 l4.5,9" stroke={w} strokeWidth="1.5" strokeLinecap="round" opacity="0.9" /><path d="M77.5,93 l-4.5,9" stroke={w} strokeWidth="1.5" strokeLinecap="round" opacity="0.9" /><g transform="translate(60 97)" filter={`url(#fGlow-${n})`}><path d="M-4.2,-4.5 h2.2 v9 h-2.2 Z" fill={w} /><path d="M2,-4.5 h2.2 v9 h-2.2 Z" fill={w} /><path d="M1.5,-4.8 L-0.75,-0.9 L0.65,-0.9 L-1.75,4.8 L-0.4,0.5 L-1.9,0.5 Z" fill={w} /></g>{y && <g><path d="M49,84 Q48.4,90 49.4,95" stroke="#22252e" strokeWidth="0.8" fill="none" /><path d="M71,84 Q71.6,90 70.6,95" stroke="#22252e" strokeWidth="0.8" fill="none" /><path d="M44,77.5 Q47,81 48.2,85" stroke="#22252e" strokeWidth="0.8" fill="none" /><path d="M76,77.5 Q73,81 71.8,85" stroke="#22252e" strokeWidth="0.8" fill="none" /><path d="M47,103.5 q4,1.8 8,1.4" stroke="#0b0d12" strokeWidth="1" fill="none" opacity="0.75" /><path d="M73,103.5 q-4,1.8 -8,1.4" stroke="#0b0d12" strokeWidth="1" fill="none" opacity="0.75" /><path d="M42.5,99 l4.6,6.2" stroke="#0c0e13" strokeWidth="1.5" strokeLinecap="round" /><path d="M77.5,99 l-4.6,6.2" stroke="#0c0e13" strokeWidth="1.5" strokeLinecap="round" /><path d="M57.3,88 L57.3,108" stroke="#343a48" strokeWidth="0.7" opacity="0.6" /><path d="M62.7,88 L62.7,108" stroke="#05060a" strokeWidth="0.9" opacity="0.7" /></g>}{y && <g><rect x="59.1" y="86.8" width="1.8" height="3.6" rx="0.8" fill="#6aa2ff" /><circle cx="60" cy="89.3" r="0.45" fill="#0b1220" /></g>}<g transform="rotate(-10 88 100)"><rect x="79" y="86" width="18" height="25" rx="2.6" fill="#0b0d12" stroke="#2c3342" strokeWidth="1" /><rect x="81" y="88.2" width="14" height="20.6" rx="1.3" fill="#141926" /><rect x="81" y="88.2" width="14" height="20.6" rx="1.3" fill="none" stroke={v} strokeWidth="0.8" opacity="0.35" /><g transform="translate(88 99)" filter={`url(#fGlow-${n})`}><path d="M-2,-3 h1.6 v2.4 h0.8 v-2.4 h1.6 v6 h-1.6 v-2.5 h-0.8 v2.5 h-1.6 Z" fill={w} /></g></g><g className={h && !g ? "hz-wave-arm" : undefined} style={h && !g ? undefined : {
              transformOrigin: "42px 82px"
            }}><path d="M42,82 C35,86 30,93 30.5,100" stroke="#191c23" strokeWidth="7" strokeLinecap="round" fill="none" /><path d="M31.8,95.5 l4.2,1.6" stroke={w} strokeWidth="1.3" strokeLinecap="round" opacity="0.9" /><circle cx="30.5" cy="101.5" r="3.9" fill={`url(#gSkin-${n})`} /><rect x="26.8" y="100.2" width="3.2" height="6.5" rx="1.6" fill={`url(#gSkin-${n})`} transform="rotate(20 28.4 103)" /></g><path d="M78,82 C84,85 87,91 87,97" stroke="#191c23" strokeWidth="7" strokeLinecap="round" fill="none" /><path d="M83.6,93.5 l4.2,1.6" stroke={w} strokeWidth="1.3" strokeLinecap="round" opacity="0.9" /><circle cx="87" cy="99" r="3.7" fill={`url(#gSkin-${n})`} /><g transform={`rotate(${r} 60 78)`}><ellipse cx="60" cy="46" rx="36" ry="35" fill={`url(#gHood-${n})`} /><ellipse cx="60" cy="48" rx="29.5" ry="30.5" fill={`url(#gHoodInner-${n})`} /><ellipse cx="60" cy="48" rx="29.5" ry="30.5" fill="none" stroke={v} strokeWidth="1" opacity="0.55" filter={`url(#fGlow-${n})`} /><path d="M35.5,46 Q35.5,36 45,33.5 L75,33.5 Q84.5,36 84.5,46 Q84.5,60 77.5,68.5 Q70,76.5 60,76.5 Q50,76.5 42.5,68.5 Q35.5,60 35.5,46 Z" fill={`url(#gSkin-${n})`} /><path d="M31,53 L30,38 Q31,26.5 43,22 Q51.5,19 60,19 Q68.5,19 77,22 Q89,26.5 90,38 L89,53 L82,38 L77,51.5 L71,35 L65,50.5 L59,33 L53,49.5 L47.5,34 L42,50.5 L36.5,38 Z" transform="translate(0 2.4)" fill="#eeb58c" opacity="0.3" /><path d="M36,50 L29.5,63 L35,60.5 L33,69 L39.5,61.5 Z" fill="#dfe9f6" /><path d="M84,50 L90.5,63 L85,60.5 L87,69 L80.5,61.5 Z" fill="#dfe9f6" /><ellipse cx="41" cy="63.5" rx="3.2" ry="1.9" fill="#ffb09a" opacity="0.55" /><ellipse cx="79" cy="63.5" rx="3.2" ry="1.9" fill="#ffb09a" opacity="0.55" />{z(48)}{z(72)}{g ? <path d="M58,68.6 Q60,70.2 62,68.6" stroke="#a34a33" strokeWidth="1.4" strokeLinecap="round" fill="none" /> : o || a ? <path d="M55.8,66.8 Q60,72.6 64.2,66.8 Q60,69.4 55.8,66.8 Z" fill="#96412f" /> : d >= 120 ? <path d="M56.5,66.6 Q60,71.6 63.5,66.6 Q60,68.6 56.5,66.6 Z" fill="#96412f" /> : <path d="M56.5,67.4 Q60,70.4 63.5,67.4" stroke="#a34a33" strokeWidth="1.6" strokeLinecap="round" fill="none" />}<path d="M60,62.4 q0.9,0.8 0.1,1.5" stroke="#e2a97f" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.85" /><path d="M35,26 L28.5,12 L44,21 Z" fill={`url(#gHair-${n})`} /><path d="M49,22.5 L46,7 L57,19.5 Z" fill={`url(#gHair-${n})`} /><path d="M59,21.5 Q57,6.5 71,4.5 Q61.5,11 64.5,21 Z" fill={`url(#gHair-${n})`} /><path d="M31,53 L30,38 Q31,26.5 43,22 Q51.5,19 60,19 Q68.5,19 77,22 Q89,26.5 90,38 L89,53 L82,38 L77,51.5 L71,35 L65,50.5 L59,33 L53,49.5 L47.5,34 L42,50.5 L36.5,38 Z" fill={`url(#gHair-${n})`} stroke="#b9c9e2" strokeWidth="0.5" /><path d="M46,25.5 L44,40" stroke="#ffffff" strokeWidth="1" opacity="0.7" strokeLinecap="round" /><path d="M66,23.5 L68,40" stroke="#ffffff" strokeWidth="1" opacity="0.7" strokeLinecap="round" />{y && <g stroke="#aebfd8" strokeWidth="0.7" opacity="0.6" strokeLinecap="round"><path d="M53,25 L50.5,39" /><path d="M60.5,23 L60.5,38" /><path d="M74,25 L76.5,40" /><path d="M40,28 L37.5,42" /><path d="M83,30 L84.5,44" /></g>}<path d="M77,22 Q89,26.5 90,38 L89,53" stroke="#7cc9ff" strokeWidth="0.9" fill="none" opacity="0.55" strokeLinecap="round" /><path d="M84.2,59 L87,68" stroke="#7cc9ff" strokeWidth="0.8" opacity="0.5" strokeLinecap="round" /><path d="M25,47 Q25,13.5 60,13.5 Q95,13.5 95,47" stroke="#14161d" strokeWidth="5.5" fill="none" strokeLinecap="round" /><path d="M25,47 Q25,13.5 60,13.5 Q95,13.5 95,47" stroke={`url(#gRing-${n})`} strokeWidth="2" fill="none" opacity="1" />{y && <path d="M27.5,45 Q27.5,16.5 60,16.5 Q92.5,16.5 92.5,45" stroke="#2e3542" strokeWidth="0.7" fill="none" strokeDasharray="2 1.6" opacity="0.85" />}<path d="M40,16.5 Q60,12.5 80,16.5" stroke="#3a4150" strokeWidth="1" fill="none" opacity="0.6" /><g transform={`translate(${24.5 + s} 50)`}><ellipse rx="8" ry="9.8" fill={`url(#gCup-${n})`} stroke="#272d39" strokeWidth="1" /><ellipse rx="6.9" ry="8.7" fill="#05070b" /><ellipse rx="5.6" ry="7.4" fill="#0a0e16" stroke={`url(#gRing-${n})`} strokeWidth="2" filter={`url(#fGlow-${n})`} />{y && <path d="M-3.6,-4.6 Q0,-7 3.6,-4.6" stroke="#bfe6ff" strokeWidth="0.9" opacity="0.35" fill="none" />}{A}{y && <g fill="#3a4150"><circle cx="-6.4" cy="-3" r="0.55" /><circle cx="6.4" cy="-3" r="0.55" /></g>}<circle cy="6.4" r="0.8" fill={v} opacity="0.9" /></g><g transform={`translate(${95.5 + s} 50)`}><ellipse rx="8" ry="9.8" fill={`url(#gCup-${n})`} stroke="#272d39" strokeWidth="1" /><ellipse rx="6.9" ry="8.7" fill="#05070b" /><ellipse rx="5.6" ry="7.4" fill="#0a0e16" stroke={`url(#gRing-${n})`} strokeWidth="2" filter={`url(#fGlow-${n})`} />{y && <path d="M-3.6,-4.6 Q0,-7 3.6,-4.6" stroke="#bfe6ff" strokeWidth="0.9" opacity="0.35" fill="none" />}{A}{y && <g fill="#3a4150"><circle cx="-6.4" cy="-3" r="0.55" /><circle cx="6.4" cy="-3" r="0.55" /></g>}<circle cy="6.4" r="0.8" fill={v} opacity="0.9" /></g></g></svg></div></div></div>;
  };
  var e = a.i(54949);
  var f = a.i(5526);
  var g = a.i(13320);
  let h = a => {
    if (!a) {
      return "";
    }
    let b = a.toLowerCase();
    return (b = (b = (b = b.replace(/อนุมัตร/g, "อนุมัติ").replace(/บั๊ก/g, "บัค").replace(/อย่างไร/g, "ยังไง").replace(/มั๊ย|มั้ย/g, "ไหม")).replace(/[\u0E48-\u0E4C]/g, "")).replace(/[?!/\\.,;:#'"“”()[\]{}_—\-+*&^%$@~`<>|]/g, " ")).replace(/\s+/g, " ").trim();
  };
  let i = "มีอะไรให้ช่วยไหมครับ?";
  let j = [{
    id: "setup-เริ่มต้นใช้งาน-1",
    title: "เริ่มต้นใช้งาน",
    category: "setup",
    keywords: ["เริ่มต้นใช้งาน", "เริ่มยังไง", "เริ่มใช้ยังไง", "วิธีใช้", "สอนใช้"],
    reply: "1. เพิ่มบัญชี 2. เพิ่มกลุ่มและคอนเทนต์ 3. ตรวจสอบการตั้งค่า 4. ไปหน้า Worker แล้วเริ่มงานได้เลยครับ",
    actions: [{
      label: "ไปหน้าจัดการบัญชี",
      path: "/accounts"
    }, {
      label: "ไปหน้า Worker",
      path: "/worker"
    }]
  }, {
    id: "setup-เพิ่มบัญชียังไง-2",
    title: "เพิ่มบัญชียังไง",
    category: "setup",
    keywords: ["เพิ่มบัญชียังไง", "วิธีเพิ่มบัญชี", "เพิ่มแอคเคาท์", "เพิ่มเฟส"],
    reply: "ไปที่หน้าจัดการบัญชี แล้วกดเพิ่มบัญชีและทำตามขั้นตอนบนหน้าจอจนเชื่อมต่อสำเร็จครับ",
    actions: [{
      label: "ไปหน้าจัดการบัญชี",
      path: "/accounts"
    }]
  }, {
    id: "setup-เพิ่มกลุ่มยังไง-3",
    title: "เพิ่มกลุ่มยังไง",
    category: "setup",
    keywords: ["เพิ่มกลุ่มยังไง", "วิธีเพิ่มกลุ่ม", "เพิ่มกลุ่มเฟส"],
    reply: "เลือกบัญชีที่ต้องการ แล้วเพิ่มกลุ่มพร้อมเตรียมคอนเทนต์ รูปภาพ และลิงก์ครับ",
    actions: [{
      label: "ไปหน้าจัดการบัญชี",
      path: "/accounts"
    }]
  }, {
    id: "setup-รันงานยังไง-4",
    title: "รันงานยังไง",
    category: "setup",
    keywords: ["รันงานยังไง", "เริ่ม worker", "สั่งรันยังไง", "เริ่มงานยังไง"],
    reply: "ตั้งค่าบัญชีและกลุ่มเรียบร้อยแล้ว ไปหน้า Worker เลือกงานที่พร้อม แล้วกดเริ่มได้เลยครับ",
    actions: [{
      label: "ไปหน้า Worker",
      path: "/worker"
    }]
  }, {
    id: "setup-ตั้งค่าแบบไหนดี-5",
    title: "ตั้งค่าแบบไหนดี",
    category: "setup",
    keywords: ["ตั้งค่าแบบไหนดี", "ตั้งค่าที่แนะนำ", "แนะนำการตั้งค่า", "preset"],
    reply: "เริ่มจากค่าเริ่มต้นของโปรแกรมก่อนครับ แล้วค่อยปรับตามรูปแบบงานของตัวเอง",
    actions: [{
      label: "ไปหน้าตั้งค่า",
      path: "/settings"
    }]
  }, {
    id: "setup-เพิ่มบัญชีได้กี่บัญชี-6",
    title: "เพิ่มบัญชีได้กี่บัญชี",
    category: "setup",
    keywords: ["เพิ่มบัญชีได้กี่บัญชี", "จำกัดบัญชีไหม", "เพิ่มได้กี่บัญชี", "กี่ไอดี"],
    reply: "เพิ่มบัญชีได้ไม่จำกัดจำนวนครับ"
  }, {
    id: "general-โปรแกรมนี้ทำอะไรได้บ้าง-7",
    title: "โปรแกรมนี้ทำอะไรได้บ้าง",
    category: "general",
    keywords: ["โปรแกรมนี้ทำอะไรได้บ้าง", "โปรแกรมทำงานยังไง", "โปรแกรมทำอะไร"],
    reply: "Hertz Manager ช่วยจัดการบัญชี กลุ่ม และตั้งค่างานผ่านหน้า Worker ครับ"
  }, {
    id: "general-รองรับระบบอะไร-8",
    title: "รองรับระบบอะไร",
    category: "general",
    keywords: ["รองรับระบบอะไร", "ใช้กับ mac ได้ไหม", "mac ใช้ได้ไหม", "ใช้กับ windows"],
    reply: "ตอนนี้รองรับเฉพาะ Windows 10 และ Windows 11 นะครับ"
  }, {
    id: "general-อัปเดตโปรแกรมยังไง-9",
    title: "อัปเดตโปรแกรมยังไง",
    category: "general",
    keywords: ["อัปเดตโปรแกรมยังไง", "อัพเดท", "เวอร์ชั่นล่าสุด", "update"],
    reply: "ติดตามข่าวและไฟล์อัปเดตได้จาก Discord ของทีมงานครับ",
    actions: [{
      label: "ไปที่ Discord",
      path: "https://discord.gg/jnSMerfV4c"
    }]
  }, {
    id: "general-หน่วยเวลาใช้หน่วยอะไร-10",
    title: "หน่วยเวลาใช้หน่วยอะไร",
    category: "general",
    keywords: ["หน่วยเวลาใช้หน่วยอะไร", "หน่วยเวลา", "เวลาเป็นอะไร", "วินาทีไหม"],
    reply: "หน่วยเวลาของโปรแกรมใช้วินาทีครับ"
  }, {
    id: "troubleshooting-ดู-error-ตรงไหน-11",
    title: "ดู error ตรงไหน",
    category: "troubleshooting",
    keywords: ["ดู error ตรงไหน", "ดูเออเร่อตรงไหน", "ดู log ตรงไหน", "logger อยู่ไหน"],
    reply: "เปิดหน้า Logger ได้เลยครับ ที่นั่นแสดงรายละเอียดเหตุการณ์และข้อผิดพลาด",
    actions: [{
      label: "เปิด Logger",
      path: "/logger"
    }]
  }, {
    id: "troubleshooting-โปรแกรมค้างหรือปิดเอง-12",
    title: "โปรแกรมค้างหรือปิดเอง",
    category: "troubleshooting",
    keywords: ["โปรแกรมค้างหรือปิดเอง", "โปรแกรมค้าง", "โปรแกรมปิดเอง", "ค้างตอนรัน", "crash"],
    reply: "ลองปิดโปรแกรมอื่นที่ใช้ทรัพยากรมาก แล้วดูรายละเอียดใน Logger ครับ",
    actions: [{
      label: "เปิด Logger",
      path: "/logger"
    }]
  }, {
    id: "troubleshooting-เข้าบัญชีไม่ได้-13",
    title: "เข้าบัญชีไม่ได้",
    category: "troubleshooting",
    keywords: ["เข้าบัญชีไม่ได้", "ล็อกอินไม่ผ่าน", "เซสชันหลุด", "login failed"],
    reply: "ตรวจสอบว่าบัญชียังเข้าสู่ระบบได้ตามปกติ แล้วลองเชื่อมต่อใหม่ครับ",
    actions: [{
      label: "ไปหน้าจัดการบัญชี",
      path: "/accounts"
    }]
  }, {
    id: "troubleshooting-โพสต์รออนุมัติ-14",
    title: "โพสต์รออนุมัติ",
    category: "troubleshooting",
    keywords: ["โพสต์รออนุมัติ", "ติดอนุมัติ", "รออนุมัติ", "โพสต์ติดอนุมัติ"],
    reply: "สถานะนี้ขึ้นกับ Facebook และการตั้งค่ากลุ่มครับ แนะนำตรวจสอบกฎกลุ่มและเนื้อหาโพสต์"
  }, {
    id: "troubleshooting-ใช้งานปลอดภัยไหม-15",
    title: "ใช้งานปลอดภัยไหม",
    category: "troubleshooting",
    keywords: ["ใช้งานปลอดภัยไหม", "โดนแบนไหม", "เสี่ยงแบนไหม", "กันแบน"],
    reply: "ไม่มีระบบไหนรับประกันได้ 100% ครับ ควรใช้งานตามนโยบายของแพลตฟอร์ม"
  }, {
    id: "contact-ติดต่อทีมงานยังไง-16",
    title: "ติดต่อทีมงานยังไง",
    category: "contact",
    keywords: ["ติดต่อทีมงานยังไง", "ติดต่อแอดมิน", "ติดต่อผู้พัฒนา", "discord", "ดิสคอร์ด", "support"],
    reply: "ติดต่อทีมงานผ่าน Discord ได้เลยครับ: https://discord.gg/jnSMerfV4c",
    actions: [{
      label: "เข้าร่วม Discord",
      path: "https://discord.gg/jnSMerfV4c"
    }]
  }, {
    id: "casual-hi-17",
    title: "Hi",
    category: "casual",
    keywords: ["Hi", "hi", "hii", "hiii"],
    reply: "หวัดดีครับ มีอะไรให้ช่วยไหม"
  }, {
    id: "casual-hello-18",
    title: "Hello",
    category: "casual",
    keywords: ["Hello", "hello", "hey"],
    reply: "สวัสดีครับ ยินดีช่วยเต็มที่เลย"
  }, {
    id: "casual-สวัสดี-19",
    title: "สวัสดี",
    category: "casual",
    keywords: ["สวัสดี", "สวัสดีครับ", "สวัสดีค่ะ", "หวัดดี", "ดีจ้า"],
    reply: "สวัสดีครับ พร้อมช่วยแนะนำการใช้งานอยู่เลย"
  }, {
    id: "casual-อรุณสวัสดิ์-20",
    title: "อรุณสวัสดิ์",
    category: "casual",
    keywords: ["อรุณสวัสดิ์", "good morning", "สวัสดีตอนเช้า"],
    reply: "อรุณสวัสดิ์ครับ ขอให้วันนี้ราบรื่นนะ"
  }, {
    id: "casual-สวัสดีตอนเย็น-21",
    title: "สวัสดีตอนเย็น",
    category: "casual",
    keywords: ["สวัสดีตอนเย็น", "good evening"],
    reply: "สวัสดีตอนเย็นครับ มีอะไรให้ช่วยไหม"
  }, {
    id: "casual-ราตรีสวัสดิ์-22",
    title: "ราตรีสวัสดิ์",
    category: "casual",
    keywords: ["ราตรีสวัสดิ์", "good night", "ฝันดี"],
    reply: "ราตรีสวัสดิ์ครับ พักผ่อนให้เต็มที่นะ"
  }, {
    id: "casual-คุณคือใคร-23",
    title: "คุณคือใคร",
    category: "casual",
    keywords: ["คุณคือใคร", "ชื่ออะไร", "บอทคือใคร", "mascot คืออะไร", "hertz assistant"],
    reply: "เราเป็น Hertz Assistant ผู้ช่วยสำหรับลูกค้าใหม่ของ Hertz Manager ครับ"
  }, {
    id: "casual-คุณช่วยอะไรได้บ้าง-24",
    title: "คุณช่วยอะไรได้บ้าง",
    category: "casual",
    keywords: ["คุณช่วยอะไรได้บ้าง", "ทำอะไรได้บ้าง", "ช่วยอะไรได้บ้าง", "help"],
    reply: "เราช่วยสอนเริ่มต้นใช้งาน ตอบคำถามยอดนิยม และพาไปหน้าที่ต้องใช้ได้ครับ"
  }, {
    id: "casual-ขอบคุณ-25",
    title: "ขอบคุณ",
    category: "casual",
    keywords: ["ขอบคุณ", "thank you", "thanks", "ขอบคุณมาก", "ขอบใจ"],
    reply: "ยินดีมากครับ"
  }, {
    id: "casual-โอเค-26",
    title: "โอเค",
    category: "casual",
    keywords: ["โอเค", "ok", "okay", "ได้เลย", "เข้าใจแล้ว"],
    reply: "เยี่ยมเลยครับ ถ้ามีอะไรถามต่อได้เสมอ"
  }, {
    id: "casual-เยี่ยม-27",
    title: "เยี่ยม",
    category: "casual",
    keywords: ["เยี่ยม", "ดีมาก", "สุดยอด", "awesome"],
    reply: "ขอบคุณครับ ดีใจที่ช่วยได้"
  }, {
    id: "casual-เก่งจัง-28",
    title: "เก่งจัง",
    category: "casual",
    keywords: ["เก่งจัง", "เก่งมาก", "ฉลาดจัง"],
    reply: "ขอบคุณครับ เราอยู่ช่วยคุณเสมอ"
  }, {
    id: "casual-ช่วยหน่อย-29",
    title: "ช่วยหน่อย",
    category: "casual",
    keywords: ["ช่วยหน่อย", "ช่วยด้วย", "ขอความช่วยเหลือ"],
    reply: "ได้เลยครับ บอกอาการหรือสิ่งที่อยากทำมาได้เลย"
  }, {
    id: "casual-ลาก่อน-30",
    title: "ลาก่อน",
    category: "casual",
    keywords: ["ลาก่อน", "บ๊ายบาย", "bye", "ไปก่อน", "เจอกัน"],
    reply: "ได้เลยครับ แล้วเจอกันใหม่"
  }, {
    id: "casual-สบายดีไหม-31",
    title: "สบายดีไหม",
    category: "casual",
    keywords: ["สบายดีไหม", "เป็นไงบ้าง", "เป็นไง"],
    reply: "สบายดีครับ พร้อมช่วยงานคุณอยู่เลย"
  }, {
    id: "casual-วันนี้เป็นไงบ้าง-32",
    title: "วันนี้เป็นไงบ้าง",
    category: "casual",
    keywords: ["วันนี้เป็นไงบ้าง", "วันนี้เป็นไง"],
    reply: "พร้อมช่วยเต็มที่ครับ คุณล่ะเป็นไงบ้าง"
  }, {
    id: "casual-เหงาไหม-33",
    title: "เหงาไหม",
    category: "casual",
    keywords: ["เหงาไหม", "เหงาหรือเปล่า"],
    reply: "ไม่เหงาครับ มีคุณแวะมาคุยด้วยนี่นา"
  }, {
    id: "casual-เบื่อไหม-34",
    title: "เบื่อไหม",
    category: "casual",
    keywords: ["เบื่อไหม", "เบื่อหรือเปล่า"],
    reply: "ไม่เบื่อครับ ถามเรื่องโปรแกรมได้เสมอ"
  }, {
    id: "casual-เล่ามุกหน่อย-35",
    title: "เล่ามุกหน่อย",
    category: "casual",
    keywords: ["เล่ามุกหน่อย", "มุกหน่อย", "joke"],
    reply: "ทำไมคอมพิวเตอร์ไปหาหมอ? เพราะมันมีไวรัสครับ"
  }, {
    id: "casual-เล่าเรื่องหน่อย-36",
    title: "เล่าเรื่องหน่อย",
    category: "casual",
    keywords: ["เล่าเรื่องหน่อย", "มีเรื่องเล่าไหม"],
    reply: "เราเก่งเรื่องพาเริ่มใช้งานมากกว่าครับ ลองถามว่าเพิ่มบัญชียังไงได้เลย"
  }, {
    id: "casual-ขอคำแนะนำ-37",
    title: "ขอคำแนะนำ",
    category: "casual",
    keywords: ["ขอคำแนะนำ", "แนะนำหน่อย"],
    reply: "บอกมาว่ากำลังติดตรงไหน แล้วเราจะช่วยไล่เป็นขั้นตอนให้ครับ"
  }, {
    id: "casual-รอนานไหม-38",
    title: "รอนานไหม",
    category: "casual",
    keywords: ["รอนานไหม", "นานไหม", "ต้องรอไหม"],
    reply: "คำถามทั่วไปเราตอบได้ทันทีครับ"
  }, {
    id: "casual-ทำไมตอบช้า-39",
    title: "ทำไมตอบช้า",
    category: "casual",
    keywords: ["ทำไมตอบช้า", "ตอบช้า", "ช้าจัง"],
    reply: "ขออภัยครับ ลองพิมพ์คำถามใหม่ หรือบอกหัวข้อสั้น ๆ ได้เลย"
  }, {
    id: "casual-พูดไทยได้ไหม-40",
    title: "พูดไทยได้ไหม",
    category: "casual",
    keywords: ["พูดไทยได้ไหม", "ภาษาไทย", "คุยไทยได้ไหม"],
    reply: "ได้เลยครับ เราพูดไทยแบบกันเองได้"
  }, {
    id: "casual-พูดอังกฤษได้ไหม-41",
    title: "พูดอังกฤษได้ไหม",
    category: "casual",
    keywords: ["พูดอังกฤษได้ไหม", "english", "speak english"],
    reply: "ได้ครับ แต่คู่มือหลักเป็นภาษาไทย"
  }, {
    id: "casual-คุณเป็น-ai-ไหม-42",
    title: "คุณเป็น AI ไหม",
    category: "casual",
    keywords: ["คุณเป็น AI ไหม", "ai หรือเปล่า", "เป็นบอทไหม"],
    reply: "เราเป็นผู้ช่วยดิจิทัลในโปรแกรมครับ"
  }, {
    id: "casual-มีชีวิตไหม-43",
    title: "มีชีวิตไหม",
    category: "casual",
    keywords: ["มีชีวิตไหม", "เป็นคนไหม"],
    reply: "เราเป็นผู้ช่วยดิจิทัลครับ แต่พร้อมช่วยเสมอ"
  }, {
    id: "casual-จำฉันได้ไหม-44",
    title: "จำฉันได้ไหม",
    category: "casual",
    keywords: ["จำฉันได้ไหม", "จำได้ไหม"],
    reply: "ตอนนี้เราโฟกัสช่วยตอบคำถามในหน้าที่กำลังใช้งานครับ"
  }, {
    id: "casual-รู้ทุกอย่างไหม-45",
    title: "รู้ทุกอย่างไหม",
    category: "casual",
    keywords: ["รู้ทุกอย่างไหม", "รู้หมดไหม"],
    reply: "เราเก่งเรื่อง Hertz Manager ครับ เรื่องที่ไม่แน่ใจเราจะไม่เดา"
  }, {
    id: "casual-หิวไหม-46",
    title: "หิวไหม",
    category: "casual",
    keywords: ["หิวไหม", "กินข้าวยัง"],
    reply: "เราไม่หิวครับ แต่คุณอย่าลืมหาอะไรกินด้วยนะ"
  }, {
    id: "casual-ดื่มน้ำหรือยัง-47",
    title: "ดื่มน้ำหรือยัง",
    category: "casual",
    keywords: ["ดื่มน้ำหรือยัง", "ดื่มน้ำยัง"],
    reply: "เราดื่มไม่ได้ครับ แต่คุณพักจิบน้ำสักหน่อยก็ดีนะ"
  }, {
    id: "casual-เหนื่อยไหม-48",
    title: "เหนื่อยไหม",
    category: "casual",
    keywords: ["เหนื่อยไหม", "เหนื่อยหรือเปล่า"],
    reply: "ไม่เหนื่อยครับ พร้อมช่วยต่อเสมอ"
  }, {
    id: "casual-ชอบอะไร-49",
    title: "ชอบอะไร",
    category: "casual",
    keywords: ["ชอบอะไร", "ชอบอะไรบ้าง"],
    reply: "เราชอบเวลาที่ช่วยให้ลูกค้าเริ่มใช้งานได้ง่ายขึ้นครับ"
  }, {
    id: "casual-สีอะไรสวย-50",
    title: "สีอะไรสวย",
    category: "casual",
    keywords: ["สีอะไรสวย", "ชอบสีอะไร"],
    reply: "สีที่อ่านสบายและมองเห็นชัดคือสีที่สวยที่สุดครับ"
  }, {
    id: "casual-ร้องเพลงได้ไหม-51",
    title: "ร้องเพลงได้ไหม",
    category: "casual",
    keywords: ["ร้องเพลงได้ไหม", "ร้องเพลงหน่อย"],
    reply: "เราไม่ถนัดร้องเพลง แต่ช่วยสอนใช้โปรแกรมได้เต็มที่ครับ"
  }, {
    id: "casual-เต้นได้ไหม-52",
    title: "เต้นได้ไหม",
    category: "casual",
    keywords: ["เต้นได้ไหม", "เต้นหน่อย"],
    reply: "เราเต้นไม่เก่ง แต่พาไปหน้า Worker ได้เก่งครับ"
  }, {
    id: "casual-เล่นเกมไหม-53",
    title: "เล่นเกมไหม",
    category: "casual",
    keywords: ["เล่นเกมไหม", "เล่นเกมกัน"],
    reply: "เราอยู่ช่วยเรื่องโปรแกรมเป็นหลัก แต่คุยเล่นสั้น ๆ ได้ครับ"
  }, {
    id: "casual-โกรธไหม-54",
    title: "โกรธไหม",
    category: "casual",
    keywords: ["โกรธไหม", "โมโหไหม"],
    reply: "ไม่โกรธครับ ถ้าคำตอบไม่ตรงบอกเราได้เลย"
  }, {
    id: "casual-ขอโทษ-55",
    title: "ขอโทษ",
    category: "casual",
    keywords: ["ขอโทษ", "sorry", "โทษที"],
    reply: "ไม่เป็นไรเลยครับ มีอะไรให้ช่วยต่อบอกได้เลย"
  }, {
    id: "casual-รอแป๊บ-56",
    title: "รอแป๊บ",
    category: "casual",
    keywords: ["รอแป๊บ", "เดี๋ยวมานะ"],
    reply: "ได้เลยครับ เราอยู่ตรงนี้"
  }, {
    id: "casual-ฟังอยู่ไหม-57",
    title: "ฟังอยู่ไหม",
    category: "casual",
    keywords: ["ฟังอยู่ไหม", "อยู่ไหม", "ยังอยู่ไหม"],
    reply: "อยู่ครับ พร้อมช่วยอยู่เลย"
  }, {
    id: "casual-กลับมาแล้ว-58",
    title: "กลับมาแล้ว",
    category: "casual",
    keywords: ["กลับมาแล้ว", "มาแล้ว"],
    reply: "ยินดีต้อนรับกลับครับ มีอะไรให้ช่วยต่อไหม"
  }, {
    id: "casual-ขอให้โชคดี-59",
    title: "ขอให้โชคดี",
    category: "casual",
    keywords: ["ขอให้โชคดี", "good luck"],
    reply: "ขอบคุณครับ ขอให้การใช้งานราบรื่นเหมือนกัน"
  }, {
    id: "casual-วันนี้วันอะไร-60",
    title: "วันนี้วันอะไร",
    category: "casual",
    keywords: ["วันนี้วันอะไร", "วันอะไร"],
    reply: "เราไม่ได้ใช้ข้อมูลปฏิทินในตอนนี้ครับ แต่ช่วยเรื่องโปรแกรมได้เลย"
  }, {
    id: "casual-พร้อมทำงานไหม-61",
    title: "พร้อมทำงานไหม",
    category: "casual",
    keywords: ["พร้อมทำงานไหม", "ทำงานได้ไหม"],
    reply: "พร้อมตอบคำถามและช่วยสอนเริ่มต้นใช้งานครับ"
  }, {
    id: "casual-มาช่วยหน่อย-62",
    title: "มาช่วยหน่อย",
    category: "casual",
    keywords: ["มาช่วยหน่อย", "มาช่วยที", "help me"],
    reply: "มาแล้วครับ บอกได้เลยว่ากำลังอยากทำอะไรในโปรแกรม"
  }, {
    id: "casual-วันนี้อากาศเป็นไง-63",
    title: "วันนี้อากาศเป็นไง",
    category: "casual",
    keywords: ["วันนี้อากาศเป็นไง", "อากาศเป็นไง", "ฝนตกไหม"],
    reply: "เราไม่ได้เชื่อมข้อมูลอากาศครับ แต่ช่วยเรื่องโปรแกรมได้เสมอ"
  }, {
    id: "casual-คิดถึงไหม-64",
    title: "คิดถึงไหม",
    category: "casual",
    keywords: ["คิดถึงไหม", "คิดถึงหรือเปล่า"],
    reply: "คิดถึงสิครับ กลับมาถามเราได้ทุกเมื่อเลย"
  }, {
    id: "casual-นอนหรือยัง-65",
    title: "นอนหรือยัง",
    category: "casual",
    keywords: ["นอนหรือยัง", "หลับหรือยัง"],
    reply: "เรายังไม่นอนครับ พร้อมช่วยอยู่เสมอ"
  }, {
    id: "casual-ขอบคุณที่ช่วย-66",
    title: "ขอบคุณที่ช่วย",
    category: "casual",
    keywords: ["ขอบคุณที่ช่วย", "ช่วยได้มากเลย"],
    reply: "ยินดีมากครับ ถ้าติดตรงไหนกลับมาถามได้เลย"
  }];
  let k = 0;
  let l = () => {};
  var m = a.i(1441);
  let n = {
    name: "bot",
    size: 24,
    node: [["path", {
      d: "M12 8V4H8",
      key: "hb8ula"
    }], ["rect", {
      width: "16",
      height: "12",
      x: "4",
      y: "8",
      rx: "2",
      key: "enze0r"
    }], ["path", {
      d: "M2 14h2",
      key: "vft8re"
    }], ["path", {
      d: "M20 14h2",
      key: "4cs60a"
    }], ["path", {
      d: "M15 13v2",
      key: "1xurst"
    }], ["path", {
      d: "M9 13v2",
      key: "rq6x2g"
    }]]
  };
  n.node;
  let _Component = (0, m.default)(n);
  var p = a.i(75140);
  var q = a.i(38169);
  var r = a.i(2906);
  var s = a.i(16330);
  var t = a.i(62926);
  let _Component2 = ({
    quadrant: a
  }) => {
    let c = {
      "top-left": {
        fillPath: "M -16 0 L 10 10 L 0 -16 L -3 -16 L -3 -3 L -16 -3 Z",
        strokePath: "M -16 0 L 10 10 L 0 -16"
      },
      "top-right": {
        fillPath: "M 16 0 L -10 10 L 0 -16 L 3 -16 L 3 -3 L 16 -3 Z",
        strokePath: "M 16 0 L -10 10 L 0 -16"
      },
      "bottom-left": {
        fillPath: "M -16 0 L 10 -10 L 0 16 L -3 16 L -3 3 L -16 3 Z",
        strokePath: "M -16 0 L 10 -10 L 0 16"
      },
      "bottom-right": {
        fillPath: "M 16 0 L -10 -10 L 0 16 L 3 16 L 3 3 L 16 3 Z",
        strokePath: "M 16 0 L -10 -10 L 0 16"
      }
    }[a];
    return <div className="absolute pointer-events-none z-30 overflow-visible" style={{
      ...{
        "top-left": {
          bottom: 0,
          right: 0
        },
        "top-right": {
          bottom: 0,
          left: 0
        },
        "bottom-left": {
          top: 0,
          right: 0
        },
        "bottom-right": {
          top: 0,
          left: 0
        }
      }[a],
      width: 0,
      height: 0
    }}><svg className="overflow-visible" fill="none"><path d={c.fillPath} fill="#0a0a0a" /><path d={c.strokePath} stroke="rgba(56, 189, 248, 0.45)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="miter" /></svg></div>;
  };
  let _Component4 = ({
    isVisible: a,
    quadrant: d,
    isTop: k = false,
    isLeft: m = false,
    onClose: n,
    onInteract: v,
    onFocusChange: w
  }) => {
    let x = (0, e.useRouter)();
    let {
      runningUserIds: y
    } = (0, f.default)();
    let {
      accounts: z
    } = (0, g.default)();
    let [A, B] = (0, c.useState)("");
    let [C, D] = (0, c.useState)(null);
    let [E, F] = (0, c.useState)(a);
    let [G, H] = (0, c.useState)(false);
    (0, c.useEffect)(() => {
      if (a) {
        F(true);
        let a = requestAnimationFrame(() => {
          H(true);
        });
        return () => cancelAnimationFrame(a);
      }
      {
        H(false);
        let a = setTimeout(() => {
          F(false);
        }, 320);
        return () => clearTimeout(a);
      }
    }, [a]);
    let I = (0, c.useRef)(null);
    let J = (0, c.useMemo)(() => ({
      accountsCount: z.length,
      runningCount: y.length
    }), [z.length, y.length]);
    let K = (0, c.useMemo)(() => d || (k ? m ? "bottom-right" : "bottom-left" : m ? "top-right" : "top-left"), [d, k, m]);
    if (E) {
      return <div style={{
        "top-left": {
          bottom: "calc(100% - 6px)",
          right: "calc(100% - 6px)"
        },
        "top-right": {
          bottom: "calc(100% - 6px)",
          left: "calc(100% - 6px)"
        },
        "bottom-left": {
          top: "calc(100% - 6px)",
          right: "calc(100% - 6px)"
        },
        "bottom-right": {
          top: "calc(100% - 6px)",
          left: "calc(100% - 6px)"
        }
      }[K]} className={`
        absolute z-50 w-[320px] sm:w-[350px] max-w-[calc(100vw-80px)]
        transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${{
        "top-left": "origin-bottom-right",
        "top-right": "origin-bottom-left",
        "bottom-left": "origin-top-right",
        "bottom-right": "origin-top-left"
      }[K]}
        ${G ? "opacity-100 scale-100 translate-x-0 translate-y-0 pointer-events-auto" : {
        "top-left": "opacity-0 scale-90 translate-x-1.5 translate-y-1.5 pointer-events-none",
        "top-right": "opacity-0 scale-90 -translate-x-1.5 translate-y-1.5 pointer-events-none",
        "bottom-left": "opacity-0 scale-90 translate-x-1.5 -translate-y-1.5 pointer-events-none",
        "bottom-right": "opacity-0 scale-90 -translate-x-1.5 -translate-y-1.5 pointer-events-none"
      }[K]}
      `} onClick={a => {
        a.stopPropagation();
        v?.();
      }} onPointerDown={a => {
        a.stopPropagation();
      }}><div className="relative"><div className={`
            relative flex flex-col overflow-hidden
            ${{
            "top-left": "rounded-2xl rounded-br-none",
            "top-right": "rounded-2xl rounded-bl-none",
            "bottom-left": "rounded-2xl rounded-tr-none",
            "bottom-right": "rounded-2xl rounded-tl-none"
          }[K]} border border-sky-400/35 bg-neutral-950
            backdrop-blur-2xl
          `}><div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" /><div className="flex items-center justify-between border-b border-sky-500/15 px-3.5 py-2 bg-sky-950/20"><div className="flex items-center gap-2"><span className="text-[11px] font-bold tracking-wider text-sky-300 uppercase flex items-center gap-1.5">Hertz Assistant<span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /></span></div><div className="flex items-center gap-1">{C && <button type="button" onClick={() => {
                  v?.();
                  l();
                  D(null);
                  B("");
                  I.current?.focus();
                }} title="กลับไปหน้าเริ่มต้น" className="flex h-6 w-6 items-center justify-center rounded-md text-neutral-400 hover:text-sky-300 hover:bg-white/5 transition-colors cursor-pointer"><s.RotateCcw size={12} /></button>}{n && <button type="button" onClick={a => {
                  a.stopPropagation();
                  n();
                }} title="ปิด" className="flex h-6 w-6 items-center justify-center rounded-md text-neutral-400 hover:text-red-400 hover:bg-white/5 transition-colors cursor-pointer"><q.X size={13} /></button>}</div></div><div className="p-3.5 space-y-2.5">{C ? <div className="space-y-2"><div className="flex justify-end"><div className="max-w-[85%] rounded-xl rounded-tr-none bg-sky-600/30 border border-sky-400/30 px-2.5 py-1 text-xs text-sky-100 font-medium">{C.question}</div></div><div className="flex items-center gap-2 pt-0.5"><div className="flex size-6 shrink-0 items-center justify-center rounded-full border border-sky-400/20 bg-sky-500/10 text-sky-400"><_Component size={16} strokeWidth={2} /></div><div className="min-w-0 flex-1 space-y-2"><p className="text-xs font-normal leading-relaxed text-neutral-200">{C.reply}</p>{C.actions && C.actions.length > 0 && <div className="flex flex-wrap items-center gap-1.5 pt-0.5">{C.actions.map((a, c) => <button type="button" onClick={() => {
                        var b;
                        b = a.path;
                        l();
                        if (b.startsWith("http://") || b.startsWith("https://")) {
                          window.open(b, "_blank", "noopener,noreferrer");
                        } else {
                          x.push(b);
                        }
                        n?.();
                        return;
                      }} className="\r\n\n              inline-flex h-7 items-center gap-1.5\r\n\n              rounded-lg border border-sky-400/20\r\n\n              bg-sky-500/[0.08] px-2.5\r\n\n              text-[11px] font-medium text-sky-300\r\n\n              transition-colors duration-150\r\n\n              hover:border-sky-400/40\r\n\n              hover:bg-sky-500/15\r\n\n              hover:text-sky-200\r\n\n              active:scale-[0.98]\r\n\n              cursor-pointer\r\n\n            " key={`${a.path}-${c}`}><span>{a.label}</span><t.ExternalLink size={11} strokeWidth={1.8} /></button>)}</div>}</div></div></div> : <div className="flex items-center gap-2.5 py-1"><div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sky-400"><p.Sparkles size={14} /></div><p className="text-[13px] font-semibold text-neutral-100 leading-snug">{i}</p></div>}</div><div className="border-t border-neutral-800/80 p-2.5 bg-neutral-950/90"><form onSubmit={a => {
                let b;
                a.preventDefault();
                if (b = A.trim()) {
                  v?.();
                  l();
                  D(((a, b) => {
                    let c;
                    let d = a.trim();
                    if (!d) {
                      return {
                        question: a,
                        reply: i
                      };
                    }
                    let e = ((a, b = j) => ((a, b = []) => {
                      let c = h(a);
                      if (!c) {
                        return null;
                      }
                      let d = null;
                      let e = 0;
                      for (let a of b) {
                        for (let b of a.keywords) {
                          let f = h(b);
                          if (!f) {
                            continue;
                          }
                          let g = 0;
                          if (c === f) {
                            g = 100 + f.length;
                          } else if (c.startsWith(f)) {
                            g = 80 + f.length;
                          } else if (c.includes(f)) {
                            g = 50 + f.length;
                          } else if (f.includes(c) && c.length >= 3) {
                            g = 30 + c.length;
                          }
                          if (g > e) {
                            e = g;
                            d = a;
                          }
                        }
                      }
                      return d;
                    })(a, b))(d);
                    if (e) {
                      let c = e.reply;
                      if (e.replyWhenRunning && b.runningCount > 0) {
                        c = e.replyWhenRunning;
                      } else if (e.replyWhenIdle && b.accountsCount > 0) {
                        c = e.replyWhenIdle;
                      } else if (e.replyWhenEmpty && b.accountsCount === 0) {
                        c = e.replyWhenEmpty;
                      }
                      return {
                        question: a,
                        reply: c.replace(/{accountsCount}/g, b.accountsCount.toString()).replace(/{runningCount}/g, b.runningCount.toString()),
                        actions: e.actions
                      };
                    }
                    if ((c = a?.trim()) && typeof console !== "undefined" && console.warn) {
                      console.warn("[Hertz Assistant] Unmatched question:", c);
                    }
                    return {
                      question: a,
                      reply: "ขออภัยครับผมยังไม่สามารถตอบได้ครับ!"
                    };
                  })(b, J));
                  B("");
                }
              }} className="relative flex items-center gap-1.5"><input ref={I} type="text" value={A} onChange={a => {
                  B(a.target.value);
                  v?.();
                }} onFocus={() => {
                  v?.();
                  w?.(true);
                }} onBlur={() => {
                  w?.(false);
                }} placeholder="พิมพ์ถาม เช่น สถานะ, ตั้งค่า, เพิ่มบัญชี..." className="\r\n\n                w-full rounded-xl bg-neutral-900/90 border border-neutral-800\r\n\n                px-3 py-1.5 text-xs text-neutral-100 placeholder-neutral-500\r\n\n                focus:border-sky-400/60 focus:bg-neutral-900 focus:outline-none focus:ring-1 focus:ring-sky-400/40\r\n\n                transition-all\r\n\n              " /><button type="submit" disabled={!A.trim()} title="ส่งคำถาม (Enter)" className="\r\n\n                flex h-7 w-7 shrink-0 items-center justify-center rounded-xl\r\n\n                bg-sky-500 text-white disabled:opacity-30 disabled:bg-neutral-800 disabled:text-neutral-500\r\n\n                hover:bg-sky-400 active:scale-95 transition-all cursor-pointer\r\n\n              "><r.Send size={12} /></button></form></div></div><_Component2 quadrant={K} /></div></div>;
    } else {
      return null;
    }
  };
  var w = a.i(81716);
  let x = "hertz_mascot_coord";
  let y = () => {
    let {
      runningUserIds: a,
      fetchStatus: e,
      initPostListeners: g
    } = (0, f.default)();
    let [h, i] = (0, c.useState)(null);
    let [j, m] = (0, c.useState)(false);
    let n = (0, c.useRef)(null);
    let [o, p] = (0, c.useState)(false);
    let [q, r] = (0, c.useState)(false);
    let [s, t] = (0, c.useState)(false);
    let [u, y] = (0, c.useState)(false);
    let [z, A] = (0, c.useState)(false);
    let B = (0, c.useRef)(null);
    let C = (0, c.useRef)(null);
    (0, c.useEffect)(() => {
      let a = (a, b) => ({
        x: Math.max(16, Math.min(window.innerWidth - 84, a)),
        y: Math.max(50, Math.min(window.innerHeight - 100, b))
      });
      try {
        let b = localStorage.getItem(x);
        if (b) {
          let c = JSON.parse(b);
          if (typeof c.x == "number" && typeof c.y == "number") {
            i(a(c.x, c.y));
            return;
          }
        }
      } catch {}
      i(a(window.innerWidth - 98, window.innerHeight - 112));
      let b = () => {
        i(b => b ? a(b.x, b.y) : null);
      };
      window.addEventListener("resize", b);
      return () => window.removeEventListener("resize", b);
    }, []);
    (0, c.useEffect)(() => {
      e();
      let a = g();
      let b = w.default.getState().initLogListeners();
      return () => {
        a?.();
        b?.();
      };
    }, [e, g]);
    (0, c.useEffect)(() => {
      let a;
      let b = () => {
        t(false);
        clearTimeout(a);
        a = setTimeout(() => {
          t(true);
        }, 60000);
      };
      b();
      let c = ["mousemove", "mousedown", "keydown", "wheel"];
      c.forEach(a => window.addEventListener(a, b, {
        passive: true
      }));
      return () => {
        clearTimeout(a);
        c.forEach(a => window.removeEventListener(a, b));
      };
    }, []);
    let D = (0, c.useCallback)(() => {
      if (C.current) {
        clearTimeout(C.current);
        C.current = null;
      }
    }, []);
    let E = (0, c.useCallback)(() => {
      D();
      C.current = setTimeout(() => {
        r(false);
        p(false);
        A(false);
        C.current = null;
      }, 5000);
    }, [D]);
    (0, c.useEffect)(() => {
      let a = a => {
        if (a.key === "Escape" && (q || o)) {
          D();
          r(false);
          p(false);
          A(false);
        }
      };
      window.addEventListener("keydown", a);
      return () => window.removeEventListener("keydown", a);
    }, [q, o, D]);
    let F = a.length > 0;
    let G = a => {
      if (n.current) {
        if (a.currentTarget.hasPointerCapture(a.pointerId)) {
          a.currentTarget.releasePointerCapture(a.pointerId);
        }
        if (j && h) {
          try {
            localStorage.setItem(x, JSON.stringify(h));
          } catch {}
        } else {
          H();
        }
        n.current = null;
        m(false);
      }
    };
    let H = (0, c.useCallback)(() => {
      l();
      t(false);
      y(true);
      D();
      r(a => !a);
      setTimeout(() => {
        y(false);
      }, 1800);
    }, [D]);
    let I = () => {
      B.current = setTimeout(() => {
        p(false);
      }, 150);
    };
    let J = !j && (q || o);
    (0, c.useEffect)(() => J ? (o || z ? D() : E(), () => {
      D();
    }) : void D(), [J, o, z, D, E]);
    if (!h) {
      return null;
    }
    let K = h.y <= 320;
    let L = h.x < 380;
    return <div style={{
      position: "fixed",
      left: `${h.x}px`,
      top: `${h.y}px`
    }} className={`
        z-40 flex items-center justify-center select-none touch-none
        ${j ? "cursor-grabbing" : "cursor-grab"}
      `} onPointerDown={a => {
      if (a.button === 0 && h) {
        a.currentTarget.setPointerCapture(a.pointerId);
        n.current = {
          startX: a.clientX,
          startY: a.clientY,
          initX: h.x,
          initY: h.y
        };
        m(false);
      }
    }} onPointerMove={a => {
      if (!n.current) {
        return;
      }
      let b = a.clientX - n.current.startX;
      let c = a.clientY - n.current.startY;
      if (Math.hypot(b, c) > 4) {
        m(true);
        i({
          x: Math.max(16, Math.min(window.innerWidth - 84, n.current.initX + b)),
          y: Math.max(50, Math.min(window.innerHeight - 100, n.current.initY + c))
        });
      }
    }} onPointerUp={G} onPointerCancel={G} onMouseEnter={() => {
      let a;
      if (B.current) {
        clearTimeout(B.current);
        B.current = null;
      }
      D();
      p(true);
      if (!j && !q && !((a = Date.now()) - k < 180)) {
        k = a;
      }
    }} onMouseLeave={I} title="คลิกเพื่อถามผู้ช่วย หรือลากเพื่อเปลี่ยนตำแหน่ง"><div className={`
          pointer-events-none absolute -inset-2 rounded-full blur-xl transition-all duration-300
          ${F ? "bg-emerald-500/[0.22]" : s ? "bg-sky-500/[0.06]" : "bg-sky-500/[0.16]"}
        `} /><div className={`
            group relative flex items-center justify-center p-1
            transition-transform duration-200 ease-out
            ${j ? "scale-115 rotate-3" : "hover:scale-110 active:scale-95"}
          `}><_Component3 size={64} isRunning={F} isHovered={(o || q) && !j} isSleeping={s && !j} isWaving={u} /></div><div onMouseEnter={() => {
        if (B.current) {
          clearTimeout(B.current);
          B.current = null;
        }
        D();
        p(true);
      }} onMouseLeave={I}><_Component4 isVisible={J} quadrant={K ? L ? "bottom-right" : "bottom-left" : L ? "top-right" : "top-left"} onClose={() => {
          D();
          r(false);
          p(false);
          A(false);
        }} onInteract={() => {
          r(true);
          D();
        }} onFocusChange={a => {
          A(a);
          if (a) {
            D();
          }
        }} /></div></div>;
  };
  a.s(["NavbarMascot", 0, y, "default", 0, y], 1290);
}, 24832, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(3642);
  var d = a.i(54949);
  var e = a.i(1441);
  let f = {
    name: "house",
    size: 24,
    node: [["path", {
      d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
      key: "5wwlr5"
    }], ["path", {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }]],
    aliases: ["home"]
  };
  f.node;
  let g = (0, e.default)(f);
  let h = {
    name: "code-xml",
    size: 24,
    node: [["path", {
      d: "m18 16 4-4-4-4",
      key: "1inbqp"
    }], ["path", {
      d: "m6 8-4 4 4 4",
      key: "15zrgr"
    }], ["path", {
      d: "m14.5 4-5 16",
      key: "e7oirm"
    }]],
    aliases: ["code-2"]
  };
  h.node;
  let i = (0, e.default)(h);
  var j = a.i(55667);
  let k = {
    name: "settings",
    size: 24,
    node: [["path", {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }], ["circle", {
      cx: "12",
      cy: "12",
      r: "3",
      key: "1v7zrd"
    }]]
  };
  k.node;
  let l = (0, e.default)(k);
  let m = {
    name: "rocket",
    size: 24,
    node: [["path", {
      d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
      key: "qeys4"
    }], ["path", {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
      key: "u4xsad"
    }], ["path", {
      d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
      key: "676m9"
    }], ["path", {
      d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",
      key: "92ym6u"
    }]]
  };
  m.node;
  let n = [{
    icon: g,
    path: "/"
  }, {
    icon: (0, e.default)(m),
    path: "/worker"
  }, {
    icon: j.Users,
    path: "/accounts"
  }, {
    icon: i,
    path: "/logger"
  }, {
    icon: l,
    path: "/settings"
  }];
  a.s(["default", 0, () => {
    let a = (0, d.usePathname)();
    return <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none"><nav className="flex h-20 w-full items-center justify-center"><div className="group relative pointer-events-auto flex items-center justify-center h-14"><div className="\n              absolute bottom-2\n              h-1.5 w-48\n              rounded-full\n              bg-white\n              opacity-90\n              transition-all duration-300\n              group-hover:opacity-0\n              group-hover:scale-75\n              pointer-events-none\n            " /><div className="\n              relative\n              transition-all duration-300 ease-out\n              scale-75 opacity-0 translate-y-2\n              group-hover:scale-100 group-hover:opacity-100 group-hover:translate-y-0\n              pointer-events-none\n              group-hover:pointer-events-auto\n            "><div className="\n                absolute -inset-0.5\n                rounded-full\n                animate-beam-angle\n                opacity-30\n                blur-sm\n                pointer-events-none\n              " /><div className="\n                relative\n                rounded-full\n                p-[1.5px]\n                overflow-hidden\n                border border-white/10\n                bg-white/5\n                shadow-[0_12px_35px_rgba(0,0,0,0.6)]\n              "><div className="absolute inset-0 rounded-full animate-beam-angle" /><div className="\n                  relative z-10\n                  flex items-center gap-1\n                  rounded-full\n                  bg-neutral-950/95\n                  px-7 py-2\n                  backdrop-blur-xl\n                ">{n.map(d => {
                  let _Component5 = d.icon;
                  let f = d.path === "/" ? a === "/" : a === d.path || a.startsWith(`${d.path}/`);
                  return <c.default href={d.path} className={`
                        group/item relative
                        flex items-center justify-center
                        rounded-xl
                        transition-all duration-200
                        border-none
                        ${f ? `
                              h-12 w-12
                              -translate-y-2
                              text-white
                              bg-gradient-to-b
                              from-blue-400
                              via-blue-500
                              to-blue-700
                              border border-blue-300/70
                              shadow-[0_5px_0_#1e40af,0_8px_14px_rgba(0,0,0,0.45),inset_0_1px_2px_rgba(255,255,255,0.55),inset_0_-3px_5px_rgba(0,0,0,0.25)]
                            ` : `
                              h-10 w-10
                              text-neutral-400
                              hover:h-12 hover:w-12
                              hover:bg-white/10
                              hover:text-white
                            `}
                      `} key={d.path}>{f && <span className="\n                            pointer-events-none\n                            absolute inset-x-2 top-1\n                            h-[2px]\n                            rounded-full\n                            bg-white/50\n                            blur-[1px]\n                          " />}<_Component5 size={f ? 23 : 20} strokeWidth={1.7} className={`
                          relative z-10
                          transition-all duration-200
                          ${f ? "drop-shadow-[0_2px_1px_rgba(0,0,0,0.35)]" : ""}
                        `} /></c.default>;
                })}</div></div></div></div></nav></div>;
  }], 24832);
}, 13781, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(54949);
  let _Component7 = ({
    text: a,
    className: c = "",
    as: _Component6 = "h1",
    variant: e
  }) => {
    let f = e ? `water-wave-${e}` : "";
    return <_Component6 className={`water-wave-header ${f} ${c}`.trim()}><span className="water-wave-base">{a}</span><span aria-hidden="true" className="water-wave-back">{a}</span><span aria-hidden="true" className="water-wave-front">{a}</span></_Component6>;
  };
  a.s(["default", 0, () => {
    let a = (0, c.usePathname)();
    let {
      title: e,
      description: f
    } = a === "/" ? {
      title: "ภาพรวมระบบ",
      description: "ติดตามสถิติและสถานะการทำงานของระบบ"
    } : a === "/worker" ? {
      title: "จัดการงาน",
      description: "จัดการและติดตามการทำงานของระบบอัตโนมัติ"
    } : a === "/logger" ? {
      title: "บันทึกกิจกรรม",
      description: "ตรวจสอบประวัติการทำงานและกิจกรรมของระบบ"
    } : a === "/settings" ? {
      title: "ตั้งค่าพื้นฐาน",
      description: "กำหนดค่าการทำงานและระยะเวลาหน่วงของระบบ"
    } : a === "/settings/advance" ? {
      title: "ตั้งค่าขั้นสูง",
      description: "จัดการฟังก์ชันและตัวเลือกการทำงานเพิ่มเติม"
    } : a === "/settings/update" ? {
      title: "อัปเดตโปรแกรม",
      description: "ตรวจสอบเวอร์ชันและอัปเดตโปรแกรมให้เป็นเวอร์ชันล่าสุด"
    } : a === "/settings/data" ? {
      title: "จัดการข้อมูล",
      description: "จัดการข้อมูลการตั้งค่าและสำรองหรือกู้คืนข้อมูลของโปรแกรม"
    } : a === "/settings/help" ? {
      title: "ช่วยเหลือ",
      description: "ช่วยเหลือในการตั้งค่าข้อมูลต่างๆของโปรแกรม"
    } : a === "/accounts" ? {
      title: "จัดการบัญชี",
      description: "จัดการบัญชีและตรวจสอบข้อมูลผู้ใช้งาน"
    } : {
      title: "ไม่พบหน้า",
      description: "ไม่พบหน้าที่คุณกำลังค้นหา"
    };
    return <header><_Component7 text={e} as="h1" className="text-3xl font-semibold tracking-tight uppercase" /><p className="mt-1 text-sm text-neutral-500">{f}</p></header>;
  }], 13781);
}];

//# sourceMappingURL=client_components_0xoz_dt._.js.map
