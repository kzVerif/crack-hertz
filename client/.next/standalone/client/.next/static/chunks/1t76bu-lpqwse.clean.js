(globalThis.TURBOPACK ||= []).push([typeof document == "object" ? document.currentScript : undefined, 18308, e => {
  "use strict";

  var t = e.i(66497);
  var r = e.i(10977);
  var n = e.i(2692);
  let s = {
    name: "minus",
    size: 24,
    node: [["path", {
      d: "M5 12h14",
      key: "1ays0h"
    }]]
  };
  s.node;
  let _Component = (0, n.default)(s);
  var o = e.i(63915);
  var i = e.i(58955);
  var l = e.i(64282);
  var u = e.i(16870);
  var c = e.i(59742);
  var d = e.i(45281);
  e.s(["default", 0, () => {
    (0, r.useEffect)(() => {
      let t = window.electronApi?.remote;
      if (t && t.onDataChanged) {
        return t.onDataChanged(() => {
          (async () => {
            try {
              let [t, r, n, s, a] = await Promise.all([e.A(98072), e.A(88362), e.A(64289), e.A(2670), e.A(86212)]);
              await t.useAccountsStore.getState().fetchAccounts();
              let o = r.useGroupsStore.getState().currentUserId;
              await r.useGroupsStore.getState().fetchGroups(o !== undefined ? String(o) : undefined);
              n.useConfigStore.getState().fetchConfig();
              s.useStatsStore.getState().fetchOverallStats();
              a.usePostStore.getState().fetchStatus();
            } catch {}
          })();
        });
      }
    }, []);
    let {
      toast: n
    } = (0, d.useToast)();
    let s = r.default.useRef(false);
    (0, r.useEffect)(() => window.electronApi?.post?.onNetStatus?.(e => {
      if (e && typeof e.online == "boolean") {
        if (e.online) {
          if (s.current) {
            s.current = false;
            n.success(e.message || "อินเทอร์เน็ตกลับมาแล้ว — งานโพสต์ทำงานต่อ", "เน็ตกลับมาแล้ว");
          }
        } else if (!s.current) {
          s.current = true;
          n.warning(e.message || "อินเทอร์เน็ตขัดข้อง — งานค้างไว้ชั่วคราว จะทำต่อเมื่อเน็ตกลับมา", "เน็ตหลุด");
        }
      }
    }), [n]);
    let {
      isAuthenticated: f,
      isInitialLoading: g,
      isOffline: p,
      keyDetails: h,
      initAuth: m
    } = (0, c.useAuthStore)();
    let [y, w] = r.default.useState(() => Date.now());
    let [v, b] = r.default.useState(null);
    let A = r.default.useRef(false);
    let x = r.default.useCallback(async () => {
      let {
        key: e,
        hwid: t
      } = c.useAuthStore.getState();
      if (!e?.code) {
        b(null);
        return;
      }
      if (!A.current) {
        A.current = true;
        try {
          let r = await window.electronApi?.auth?.checkStatus?.({
            code: e.code,
            hwid: t || undefined
          });
          b(!!r && r.status !== "SERVER_UNREACHABLE");
        } catch {
          b(false);
        } finally {
          A.current = false;
        }
      }
    }, []);
    (0, r.useEffect)(() => {
      x();
      let e = setInterval(() => {
        x();
      }, 60000);
      return () => clearInterval(e);
    }, [x, f]);
    (0, r.useEffect)(() => {
      m();
    }, [m]);
    (0, r.useEffect)(() => {
      if (!f || !h?.expiresAt) {
        return;
      }
      let e = setInterval(() => {
        w(Date.now());
      }, 1000);
      return () => clearInterval(e);
    }, [f, h?.expiresAt]);
    let S = function (e, t, r, n, s = Date.now()) {
      if (t) {
        return {
          text: "กำลังตรวจสอบ...",
          colorClass: "border-neutral-700/60 bg-neutral-800/40 text-neutral-400",
          dotClass: "bg-neutral-500",
          ping: false
        };
      }
      if (!e) {
        return {
          text: "ยังไม่ได้เปิดใช้งาน",
          colorClass: "border-rose-500/25 bg-rose-500/10 text-rose-300 hover:bg-rose-500/15 hover:border-rose-500/40",
          dotClass: "bg-rose-400",
          ping: false
        };
      }
      if (r) {
        return {
          text: "โหมดออฟไลน์",
          colorClass: "border-amber-500/25 bg-amber-500/10 text-amber-300 hover:bg-amber-500/15 hover:border-amber-500/40",
          dotClass: "bg-amber-400",
          ping: false
        };
      }
      let a = 0;
      if (n?.expiresAt) {
        let e = new Date(n.expiresAt).getTime() - s;
        if (e <= 0) {
          return {
            text: "คีย์หมดอายุ",
            colorClass: "border-rose-500/25 bg-rose-500/10 text-rose-300",
            dotClass: "bg-rose-500",
            ping: false
          };
        }
        a = Math.floor(e / 1000);
      } else if (typeof n?.remainingSeconds == "number") {
        a = n.remainingSeconds;
      } else {
        if (typeof n?.remainingDays != "number") {
          return {
            text: "Active",
            colorClass: "border-emerald-500/25 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/15 hover:border-emerald-500/40",
            dotClass: "bg-emerald-400",
            ping: true
          };
        }
        a = n.remainingDays * 86400;
      }
      let o = Math.floor(a / 86400);
      let i = Math.floor(a % 86400 / 3600);
      let l = Math.floor(a % 3600 / 60);
      let u = a % 60;
      let c = o <= 3;
      return {
        text: o > 0 ? `${o} วัน ${i} ชม. ${l} นาที ${u} วินาที` : i > 0 ? `${i} ชม. ${l} นาที ${u} วินาที` : l > 0 ? `${l} นาที ${u} วินาที` : ` ${u} วินาที`,
        colorClass: c ? "border-amber-500/25 bg-amber-500/10 text-amber-300 hover:bg-amber-500/15 hover:border-amber-500/40" : "border-emerald-500/25 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/15 hover:border-emerald-500/40",
        dotClass: c ? "bg-amber-400" : "bg-emerald-400",
        ping: true
      };
    }(f, g, p, h, y);
    let k = e => {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
        window.electronApi?.dragEnd();
      }
    };
    return <header className="flex h-12 w-full shrink-0 select-none items-center border-b border-white/[0.06] bg-neutral-950 px-2"><div className="window-drag-region flex h-full shrink-0 items-center"><u.default href="/" className="flex h-9 w-10 items-center justify-center" style={{
          WebkitAppRegion: "no-drag"
        }}><i.Monitor size={22} strokeWidth={2} className="text-neutral-300" /></u.default></div><div className="flex items-center gap-2.5 shrink-0 pl-1.5 pr-2"><span className="window-drag-region text-sm font-semibold tracking-tight text-neutral-300">Hertz Manager</span><u.default href="/auth" style={{
          WebkitAppRegion: "no-drag"
        }} title="คลิกเพื่อตรวจสอบหรือจัดการสิทธิ์การใช้งาน" className={`
            inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full
            border text-[11px] font-medium tracking-wide transition-all
            shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] cursor-pointer
            active:scale-95
            ${S.colorClass}
          `}><span className="relative flex h-2 w-2 items-center justify-center">{S.ping && <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${S.dotClass} opacity-75`} />}<span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${S.dotClass}`} /></span><span className="font-mono tabular-nums">{S.text}</span></u.default>{v !== null && <span title={v ? "เชื่อมต่อเซิร์ฟเวอร์ hertzx.xyz ปกติ" : "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้ — ตรวจสอบอินเทอร์เน็ตหรือหน้า /auth"} className={`
              inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full
              border text-[11px] font-medium tracking-wide
              shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
              ${v ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-300" : "border-red-500/25 bg-red-500/10 text-red-300"}
            `}><span className="relative flex h-2 w-2 items-center justify-center">{v && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />}<span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${v ? "bg-emerald-400" : "bg-red-500"}`} /></span><span>{v ? "เซิร์ฟเวอร์เชื่อมต่อ" : "เซิร์ฟเวอร์หลุด"}</span></span>}</div><div className="window-drag-region flex h-full flex-1 items-center" onPointerDown={e => {
        if (e.button === 0) {
          e.currentTarget.setPointerCapture(e.pointerId);
          window.electronApi?.dragStart(e.screenX, e.screenY);
        }
      }} onPointerMove={e => {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          window.electronApi?.dragMove(e.screenX, e.screenY);
        }
      }} onPointerUp={k} onPointerCancel={k} /><div className="flex h-full items-center gap-1 px-2" style={{
        WebkitAppRegion: "no-drag"
      }}><button type="button" onClick={() => window.electronApi?.minimize?.()} aria-label="Minimize" title="ย่อหน้าต่าง" className="flex h-8 w-10 items-center justify-center rounded-md text-neutral-400 transition-colors duration-150 hover:bg-white/[0.08] hover:text-neutral-100 active:scale-95"><_Component size={14} strokeWidth={2} /></button><button type="button" aria-label="Maximize" className="flex h-8 w-10 items-center justify-center rounded-md text-neutral-400 transition-colors duration-150 hover:bg-white/[0.08] hover:text-neutral-100 active:scale-95"><l.Square size={12} strokeWidth={2} /></button><button type="button" onClick={() => window.electronApi?.close?.()} aria-label="Close" title="ปิดโปรแกรม" className="flex h-8 w-10 items-center justify-center rounded-md text-neutral-400 transition-colors duration-150 hover:bg-red-500/90 hover:text-white active:scale-95"><o.X size={14} strokeWidth={2} /></button></div></header>;
  }], 18308);
}, 16054, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
    name: "external-link",
    size: 24,
    node: [["path", {
      d: "M15 3h6v6",
      key: "1q9fwt"
    }], ["path", {
      d: "M10 14 21 3",
      key: "gplh6r"
    }], ["path", {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp"
    }]]
  };
  r.node;
  let n = (0, t.default)(r);
  e.s(["ExternalLink", 0, n], 16054);
}, 55718, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
    name: "loader-circle",
    size: 24,
    node: [["path", {
      d: "M21 12a9 9 0 1 1-6.219-8.56",
      key: "13zald"
    }]],
    aliases: ["loader-2"]
  };
  r.node;
  let n = (0, t.default)(r);
  e.s(["Loader2", 0, n], 55718);
}, 58955, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
    name: "monitor",
    size: 24,
    node: [["rect", {
      width: "20",
      height: "14",
      x: "2",
      y: "3",
      rx: "2",
      key: "48i651"
    }], ["line", {
      x1: "8",
      x2: "16",
      y1: "21",
      y2: "21",
      key: "1svkeh"
    }], ["line", {
      x1: "12",
      x2: "12",
      y1: "17",
      y2: "21",
      key: "vw1qmm"
    }]]
  };
  r.node;
  let n = (0, t.default)(r);
  e.s(["Monitor", 0, n], 58955);
}, 14326, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
    name: "rotate-ccw",
    size: 24,
    node: [["path", {
      d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
      key: "1357e3"
    }], ["path", {
      d: "M3 3v5h5",
      key: "1xhq8a"
    }]]
  };
  r.node;
  let n = (0, t.default)(r);
  e.s(["RotateCcw", 0, n], 14326);
}, 24091, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
    name: "send",
    size: 24,
    node: [["path", {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }], ["path", {
      d: "m21.854 2.147-10.94 10.939",
      key: "12cjpa"
    }]]
  };
  r.node;
  let n = (0, t.default)(r);
  e.s(["Send", 0, n], 24091);
}, 64282, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
    name: "square",
    size: 24,
    node: [["rect", {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      key: "afitv7"
    }]]
  };
  r.node;
  let n = (0, t.default)(r);
  e.s(["Square", 0, n], 64282);
}, 46034, e => {
  "use strict";

  var t = e.i(2692);
  let r = {
    name: "users",
    size: 24,
    node: [["path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      key: "1yyitq"
    }], ["path", {
      d: "M16 3.128a4 4 0 0 1 0 7.744",
      key: "16gr8j"
    }], ["path", {
      d: "M22 21v-2a4 4 0 0 0-3-3.87",
      key: "kshegd"
    }], ["circle", {
      cx: "9",
      cy: "7",
      r: "4",
      key: "nufk8"
    }]]
  };
  r.node;
  let n = (0, t.default)(r);
  e.s(["Users", 0, n], 46034);
}, 16870, (e, t, r) => {
  "use strict";

  e.i(93677);
  Object.defineProperty(r, "__esModule", {
    value: true
  });
  var n = {
    default: function () {
      return y;
    },
    useLinkStatus: function () {
      return v;
    }
  };
  for (var s in n) {
    Object.defineProperty(r, s, {
      enumerable: true,
      get: n[s]
    });
  }
  let a = e.r(33558);
  let o = e.r(66497);
  let i = a._(e.r(10977));
  let l = e.r(31003);
  let u = e.r(12793);
  let c = e.r(453);
  let d = e.r(16729);
  let f = e.r(19862);
  let g = e.r(76975);
  let p = e.r(77873);
  let h = e.r(8056);
  let m = e.r(92677);
  function y(t) {
    var r;
    let n;
    let s;
    let a;
    let [y, v] = (0, i.useOptimistic)(p.IDLE_LINK_STATUS);
    let b = (0, i.useRef)(null);
    let {
      href: A,
      as: x,
      children: S,
      prefetch: k = null,
      passHref: C,
      replace: I,
      shallow: L,
      scroll: E,
      onClick: P,
      onMouseEnter: j,
      onTouchStart: T,
      legacyBehavior: N = false,
      onNavigate: R,
      transitionTypes: _,
      ref: M,
      unstable_dynamicOnHover: O,
      ...D
    } = t;
    n = S;
    if (N && (typeof n == "string" || typeof n == "number")) {
      n = <a>{n}</a>;
    }
    let U = i.default.useContext(u.AppRouterContext);
    let $ = k !== false;
    let F = k === false ? "none" : k === true ? "full" : "auto";
    let z = F !== "none" ? F === "auto" ? m.FetchStrategy.PPR : m.FetchStrategy.Full : m.FetchStrategy.PPR;
    let H = typeof (r = x || A) == "string" ? r : (0, l.formatUrl)(r);
    if (N) {
      if (n?.$$typeof === Symbol.for("react.lazy")) {
        throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
          value: "E863",
          enumerable: false,
          configurable: true
        });
      }
      s = i.default.Children.only(n);
    }
    let W = N ? s && typeof s == "object" && s.ref : M;
    let B;
    let K = i.default.useCallback(e => {
      if (U !== null) {
        b.current = (0, p.mountLinkInstance)(e, H, U, z, $, v, B);
      }
      return () => {
        if (b.current) {
          (0, p.unmountLinkForCurrentNavigation)(b.current);
          b.current = null;
        }
        (0, p.unmountPrefetchableInstance)(e);
      };
    }, [$, H, U, z, v, B]);
    let q = {
      ref: (0, c.useMergedRef)(K, W),
      onClick(t) {
        if (!N && typeof P == "function") {
          P(t);
        }
        if (N && s.props && typeof s.props.onClick == "function") {
          s.props.onClick(t);
        }
        if (!!U && !t.defaultPrevented) {
          (function (t, r, n, s, a, o, l, u = "none") {
            if (typeof window !== "undefined") {
              let c;
              let {
                nodeName: d
              } = t.currentTarget;
              if (d.toUpperCase() === "A" && ((c = t.currentTarget.getAttribute("target")) && c !== "_self" || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && t.nativeEvent.which === 2) || t.currentTarget.hasAttribute("download")) {
                return;
              }
              if (!(0, h.isLocalURL)(r)) {
                if (s) {
                  t.preventDefault();
                  location.replace(r);
                }
                return;
              }
              t.preventDefault();
              if (o) {
                let e = false;
                o({
                  preventDefault: () => {
                    e = true;
                  }
                });
                if (e) {
                  return;
                }
              }
              let {
                dispatchNavigateAction: f
              } = e.r(1361);
              i.default.startTransition(() => {
                f(r, s ? "replace" : "push", a === false ? g.ScrollBehavior.NoScroll : g.ScrollBehavior.Default, n.current, l, u);
              });
            }
          })(t, H, b, I, E, R, _, F);
        }
      },
      onMouseEnter(e) {
        if (!N && typeof j == "function") {
          j(e);
        }
        if (N && s.props && typeof s.props.onMouseEnter == "function") {
          s.props.onMouseEnter(e);
        }
        if (U && $) {
          (0, p.onNavigationIntent)(e.currentTarget, O === true);
        }
      },
      onTouchStart: function (e) {
        if (!N && typeof T == "function") {
          T(e);
        }
        if (N && s.props && typeof s.props.onTouchStart == "function") {
          s.props.onTouchStart(e);
        }
        if (U && $) {
          (0, p.onNavigationIntent)(e.currentTarget, O === true);
        }
      }
    };
    if ((0, d.isAbsoluteUrl)(H)) {
      q.href = H;
    } else if (!N || !!C || s.type === "a" && !("href" in s.props)) {
      q.href = (0, f.addBasePath)(H);
    }
    a = N ? i.default.cloneElement(s, q) : <a {...D} {...q}>{n}</a>;
    return <w.Provider value={y}>{a}</w.Provider>;
  }
  let w = (0, i.createContext)(p.IDLE_LINK_STATUS);
  let v = () => (0, i.useContext)(w);
  if ((typeof r.default == "function" || typeof r.default == "object" && r.default !== null) && r.default.__esModule === undefined) {
    Object.defineProperty(r.default, "__esModule", {
      value: true
    });
    Object.assign(r.default, r);
    t.exports = r.default;
  }
}, 453, (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: true
  });
  Object.defineProperty(r, "useMergedRef", {
    enumerable: true,
    get: function () {
      return s;
    }
  });
  let n = e.r(10977);
  function s(e, t) {
    let r = (0, n.useRef)(null);
    let s = (0, n.useRef)(null);
    return (0, n.useCallback)(n => {
      if (n === null) {
        let e = r.current;
        if (e) {
          r.current = null;
          e();
        }
        let t = s.current;
        if (t) {
          s.current = null;
          t();
        }
      } else {
        if (e) {
          r.current = a(e, n);
        }
        if (t) {
          s.current = a(t, n);
        }
      }
    }, [e, t]);
  }
  function a(e, t) {
    if (typeof e != "function") {
      e.current = t;
      return () => {
        e.current = null;
      };
    }
    {
      let r = e(t);
      if (typeof r == "function") {
        return r;
      } else {
        return () => e(null);
      }
    }
  }
  if ((typeof r.default == "function" || typeof r.default == "object" && r.default !== null) && r.default.__esModule === undefined) {
    Object.defineProperty(r.default, "__esModule", {
      value: true
    });
    Object.assign(r.default, r);
    t.exports = r.default;
  }
}, 16729, (e, t, r) => {
  "use strict";

  e.i(93677);
  Object.defineProperty(r, "__esModule", {
    value: true
  });
  var n = {
    DecodeError: function () {
      return y;
    },
    MiddlewareNotFoundError: function () {
      return A;
    },
    MissingStaticPage: function () {
      return b;
    },
    NormalizeError: function () {
      return w;
    },
    PageNotFoundError: function () {
      return v;
    },
    SP: function () {
      return h;
    },
    ST: function () {
      return m;
    },
    WEB_VITALS: function () {
      return a;
    },
    execOnce: function () {
      return o;
    },
    getDisplayName: function () {
      return d;
    },
    getLocationOrigin: function () {
      return u;
    },
    getURL: function () {
      return c;
    },
    isAbsoluteUrl: function () {
      return l;
    },
    isResSent: function () {
      return f;
    },
    loadGetInitialProps: function () {
      return p;
    },
    normalizeRepeatedSlashes: function () {
      return g;
    },
    stringifyError: function () {
      return x;
    }
  };
  for (var s in n) {
    Object.defineProperty(r, s, {
      enumerable: true,
      get: n[s]
    });
  }
  let a = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
  function o(e) {
    let t;
    let r = false;
    return (...n) => {
      if (!r) {
        r = true;
        t = e(...n);
      }
      return t;
    };
  }
  let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
  let l = e => {
    let t = e.charCodeAt(0);
    return (!!(t >= 65) && !!(t <= 90) || !!(t >= 97) && !!(t <= 122)) && i.test(e);
  };
  function u() {
    let {
      protocol: e,
      hostname: t,
      port: r
    } = window.location;
    return `${e}//${t}${r ? ":" + r : ""}`;
  }
  function c() {
    let {
      href: e
    } = window.location;
    let t = u();
    return e.substring(t.length);
  }
  function d(e) {
    if (typeof e == "string") {
      return e;
    } else {
      return e.displayName || e.name || "Unknown";
    }
  }
  function f(e) {
    return e.finished || e.headersSent;
  }
  function g(e) {
    let t = e.split("?");
    return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "");
  }
  async function p(e, t) {
    let r = t.res || t.ctx && t.ctx.res;
    if (!e.getInitialProps) {
      if (t.ctx && t.Component) {
        return {
          pageProps: await p(t.Component, t.ctx)
        };
      } else {
        return {};
      }
    }
    let n = await e.getInitialProps(t);
    if (r && f(r)) {
      return n;
    }
    if (!n) {
      throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", {
        value: "E1025",
        enumerable: false,
        configurable: true
      });
    }
    return n;
  }
  let h = typeof performance !== "undefined";
  let m = h && ["mark", "measure", "getEntriesByName"].every(e => typeof performance[e] == "function");
  class y extends Error {}
  class w extends Error {}
  class v extends Error {
    constructor(e) {
      super();
      this.code = "ENOENT";
      this.name = "PageNotFoundError";
      this.message = `Cannot find module for page: ${e}`;
    }
  }
  class b extends Error {
    constructor(e, t) {
      super();
      this.message = `Failed to load static file for page: ${e} ${t}`;
    }
  }
  class A extends Error {
    constructor() {
      super();
      this.code = "ENOENT";
      this.message = "Cannot find the middleware module";
    }
  }
  function x(e) {
    return JSON.stringify({
      message: e.message,
      stack: e.stack
    });
  }
}, 8056, (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: true
  });
  Object.defineProperty(r, "isLocalURL", {
    enumerable: true,
    get: function () {
      return a;
    }
  });
  let n = e.r(16729);
  let s = e.r(26176);
  function a(e) {
    if (!(0, n.isAbsoluteUrl)(e)) {
      return true;
    }
    try {
      let t = (0, n.getLocationOrigin)();
      let r = new URL(e, t);
      return r.origin === t && (0, s.hasBasePath)(r.pathname);
    } catch (e) {
      return false;
    }
  }
}, 91052, (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: true
  });
  var n = {
    assign: function () {
      return l;
    },
    searchParamsToUrlQuery: function () {
      return a;
    },
    urlQueryToSearchParams: function () {
      return i;
    }
  };
  for (var s in n) {
    Object.defineProperty(r, s, {
      enumerable: true,
      get: n[s]
    });
  }
  function a(e) {
    let t = {};
    for (let [r, n] of e.entries()) {
      let e = t[r];
      if (e === undefined) {
        t[r] = n;
      } else if (Array.isArray(e)) {
        e.push(n);
      } else {
        t[r] = [e, n];
      }
    }
    return t;
  }
  function o(e) {
    if (typeof e == "string") {
      return e;
    } else if ((typeof e != "number" || isNaN(e)) && typeof e != "boolean") {
      return "";
    } else {
      return String(e);
    }
  }
  function i(e) {
    let t = new URLSearchParams();
    for (let [r, n] of Object.entries(e)) {
      if (Array.isArray(n)) {
        for (let e of n) {
          t.append(r, o(e));
        }
      } else {
        t.set(r, o(n));
      }
    }
    return t;
  }
  function l(e, ...t) {
    for (let r of t) {
      for (let t of r.keys()) {
        e.delete(t);
      }
      for (let [t, n] of r.entries()) {
        e.append(t, n);
      }
    }
    return e;
  }
}, 31003, (e, t, r) => {
  "use strict";

  e.i(93677);
  Object.defineProperty(r, "__esModule", {
    value: true
  });
  var n = {
    formatUrl: function () {
      return i;
    },
    formatWithValidation: function () {
      return u;
    },
    urlObjectKeys: function () {
      return l;
    }
  };
  for (var s in n) {
    Object.defineProperty(r, s, {
      enumerable: true,
      get: n[s]
    });
  }
  let a = e.r(33558)._(e.r(91052));
  let o = /https?|ftp|gopher|file/;
  function i(e) {
    let {
      auth: t,
      hostname: r
    } = e;
    let n = e.protocol || "";
    let s = e.pathname || "";
    let i = e.hash || "";
    let l = e.query || "";
    let u = false;
    t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "";
    if (e.host) {
      u = t + e.host;
    } else if (r) {
      u = t + (~r.indexOf(":") ? `[${r}]` : r);
      if (e.port) {
        u += ":" + e.port;
      }
    }
    if (l && typeof l == "object") {
      l = String(a.urlQueryToSearchParams(l));
    }
    let c = e.search || l && `?${l}` || "";
    if (n && !n.endsWith(":")) {
      n += ":";
    }
    if (e.slashes || (!n || o.test(n)) && u !== false) {
      u = "//" + (u || "");
      if (s && s[0] !== "/") {
        s = "/" + s;
      }
    } else {
      u ||= "";
    }
    if (i && i[0] !== "#") {
      i = "#" + i;
    }
    if (c && c[0] !== "?") {
      c = "?" + c;
    }
    s = s.replace(/[?#]/g, encodeURIComponent);
    c = c.replace("#", "%23");
    return `${n}${u}${s}${c}${i}`;
  }
  let l = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
  function u(e) {
    return i(e);
  }
}, 3139, (e, t, r) => {
  t.exports = e.r(96232);
}, 66842, e => {
  "use strict";

  var t = e.i(1347);
  let r = () => window.electronApi?.account ? window.electronApi.account : null;
  let n = (0, t.create)((t, n) => ({
    accounts: [],
    selectedAccountId: null,
    isLoading: true,
    isAdding: false,
    deletingId: null,
    error: null,
    isCustomProfileOpen: false,
    customProfileInitialData: null,
    setSelectedAccountId: e => {
      t({
        selectedAccountId: e
      });
    },
    fetchAccounts: async () => {
      let e = r();
      if (!e) {
        t({
          isLoading: false
        });
        return;
      }
      t({
        isLoading: true,
        error: null
      });
      try {
        let r = (await e.getAll()) || [];
        let s = n().selectedAccountId;
        let a = r.some(e => e.id === s);
        t({
          accounts: r,
          selectedAccountId: a ? s : r[0]?.id || null,
          isLoading: false
        });
      } catch (r) {
        let e = r instanceof Error ? r.message : "Failed to fetch accounts";
        console.error("Failed to fetch accounts:", r);
        t({
          error: e,
          isLoading: false
        });
      }
    },
    deleteAccount: async n => {
      let s = r();
      if (!s) {
        return {
          success: false,
          message: "Electron API ไม่พร้อมใช้งาน"
        };
      }
      t({
        deletingId: n
      });
      try {
        let r = await s.delete(n);
        if (r?.success) {
          t(e => {
            let t = e.accounts.filter(e => e.id !== n);
            let r = e.selectedAccountId === n ? t[0]?.id || null : e.selectedAccountId;
            return {
              accounts: t,
              selectedAccountId: r
            };
          });
          try {
            let {
              useStatsStore: t
            } = await e.A(2670);
            t.getState().removeUserStat(n);
            t.getState().fetchOverallStats();
          } catch {}
        }
        return r;
      } catch (t) {
        let e = t instanceof Error ? t.message : "เกิดข้อผิดพลาดในการลบบัญชี";
        console.error("Failed to delete account:", t);
        return {
          success: false,
          message: e
        };
      } finally {
        t({
          deletingId: null
        });
      }
    },
    startAddingAccount: async () => {
      let e = r();
      if (!e) {
        return {
          status: "error",
          message: "Electron API ไม่พร้อมใช้งาน"
        };
      }
      try {
        let r = await e.startAdding();
        if (r.status === "started" || r.status === "already_running") {
          t({
            isAdding: true
          });
        }
        return r;
      } catch (r) {
        let e = r instanceof Error ? r.message : "เกิดข้อผิดพลาดในการเริ่มระบบล็อกอิน";
        console.error("Failed to start adding account:", r);
        t({
          isAdding: false
        });
        return {
          status: "error",
          message: e
        };
      }
    },
    stopAddingAccount: async () => {
      let e = r();
      if (!e) {
        return {
          status: "error",
          message: "Electron API ไม่พร้อมใช้งาน"
        };
      }
      try {
        let r = await e.stopAdding();
        if (r.status === "stopped" || r.status === "not_running") {
          t({
            isAdding: false
          });
        }
        return r;
      } catch (t) {
        let e = t instanceof Error ? t.message : "เกิดข้อผิดพลาดในการยกเลิกล็อกอิน";
        console.error("Failed to stop adding account:", t);
        return {
          status: "error",
          message: e
        };
      }
    },
    getAccountById: e => n().accounts.find(t => t.id === e),
    initAccountListeners: e => {
      let s = r();
      if (!s?.onLoginDone) {
        return () => {};
      }
      let a = s.onLoginDone(r => {
        t({
          isAdding: false
        });
        if (r?.success) {
          n().fetchAccounts();
        }
        e?.(r);
      });
      let o = window.electronApi?.remote;
      let i = o?.onDataChanged ? o.onDataChanged(() => {
        n().fetchAccounts();
      }) : () => {};
      return () => {
        a();
        i();
      };
    },
    openCustomProfile: (e = null) => {
      t({
        isCustomProfileOpen: true,
        customProfileInitialData: e
      });
    },
    closeCustomProfile: () => {
      t({
        isCustomProfileOpen: false,
        customProfileInitialData: null
      });
    },
    selectAvatar: async () => {
      let e = r();
      if (e?.selectAvatar) {
        return await e.selectAvatar();
      } else {
        return null;
      }
    },
    saveCustomProfile: async e => {
      let t = r();
      if (!t?.saveCustomProfile) {
        return {
          success: false,
          message: "Electron API ไม่พร้อมใช้งาน"
        };
      }
      try {
        let r = await t.saveCustomProfile(e);
        if (r?.success) {
          await n().fetchAccounts();
        }
        return r;
      } catch (e) {
        return {
          success: false,
          message: e instanceof Error ? e.message : "เกิดข้อผิดพลาดในการบันทึกโปรไฟล์"
        };
      }
    }
  }));
  e.s(["default", 0, n, "useAccountsStore", 0, n]);
}, 59742, e => {
  "use strict";

  var t = e.i(1347);
  let r = () => window.electronApi?.auth ? window.electronApi.auth : null;
  let n = null;
  let s = false;
  let a = (0, t.create)((e, t) => ({
    key: null,
    hwid: null,
    keyDetails: null,
    isAuthenticated: false,
    isInitialLoading: true,
    isActivating: false,
    isResettingHwid: false,
    isOffline: false,
    error: null,
    statusMessage: null,
    fetchHwid: async () => {
      let t = r();
      if (!t) {
        return null;
      }
      try {
        let r = await t.getHwid();
        e({
          hwid: r
        });
        return r;
      } catch {
        return null;
      }
    },
    initAuth: async (a = false) => {
      if (!a && s && t().isAuthenticated) {
        return {
          authenticated: true,
          key: t().key || undefined,
          details: t().keyDetails || undefined,
          hwid: t().hwid || undefined
        };
      }
      if (n) {
        return n;
      }
      let o = r();
      if (o) {
        if (!s) {
          e({
            isInitialLoading: true,
            error: null
          });
        }
        return n = (async () => {
          try {
            if (!t().hwid) {
              t().fetchHwid();
            }
            let r = await o.validate();
            if (r.authenticated && r.key) {
              s = true;
              e({
                key: r.key,
                hwid: r.hwid || r.key.hwid || t().hwid,
                keyDetails: r.details || null,
                isAuthenticated: true,
                isOffline: !!r.offline,
                statusMessage: r.warning || null,
                isInitialLoading: false,
                error: null
              });
            } else {
              s = false;
              e({
                key: null,
                hwid: r.hwid || t().hwid,
                keyDetails: null,
                isAuthenticated: false,
                isOffline: false,
                error: r.error || null,
                isInitialLoading: false
              });
            }
            return r;
          } catch (r) {
            let t = r instanceof Error ? r.message : "Failed to validate license key";
            s = false;
            e({
              key: null,
              isAuthenticated: false,
              error: t,
              isInitialLoading: false
            });
            return {
              authenticated: false,
              error: t
            };
          } finally {
            n = null;
          }
        })();
      } else {
        e({
          isInitialLoading: false,
          isAuthenticated: false
        });
        return {
          authenticated: false,
          error: "Electron API not available"
        };
      }
    },
    activateKey: async t => {
      let n = r();
      if (!n) {
        return {
          success: false,
          error: "Electron API not available"
        };
      }
      let a = t.trim();
      if (!a) {
        let t = "กรุณากรอกรหัส License Key";
        e({
          error: t
        });
        return {
          success: false,
          error: t
        };
      }
      e({
        isActivating: true,
        error: null
      });
      try {
        let t = await n.activate(a);
        if (t.success && t.data) {
          s = true;
          e({
            key: {
              id: t.data.id,
              code: t.data.code,
              hwid: t.data.hwid
            },
            hwid: t.data.hwid,
            keyDetails: t.data.details || null,
            isAuthenticated: true,
            isOffline: false,
            isActivating: false,
            error: null
          });
          return t;
        }
        {
          let r = t.error || "ไม่สามารถเปิดใช้งานคีย์ได้";
          e({
            error: r,
            isActivating: false
          });
          return {
            success: false,
            error: r
          };
        }
      } catch (r) {
        let t = r instanceof Error ? r.message : "เกิดข้อผิดพลาดในการเปิดใช้งานคีย์";
        e({
          error: t,
          isActivating: false
        });
        return {
          success: false,
          error: t
        };
      }
    },
    resetHwid: async t => {
      let n = r();
      if (!n || typeof n.resetHwid != "function") {
        return {
          success: false,
          error: "ฟังก์ชันรีเซ็ต HWID ไม่พร้อมใช้งาน"
        };
      }
      let s = t.trim();
      if (!s) {
        return {
          success: false,
          error: "กรุณาระบุรหัส License Key"
        };
      }
      e({
        isResettingHwid: true,
        error: null
      });
      try {
        let t = await n.resetHwid(s);
        e({
          isResettingHwid: false
        });
        if (t.success) {
          return {
            success: true,
            message: t.message || "รีเซ็ต HWID สำเร็จ"
          };
        }
        e({
          error: t.error || "ไม่สามารถรีเซ็ต HWID ได้"
        });
        return {
          success: false,
          error: t.error || "ไม่สามารถรีเซ็ต HWID ได้"
        };
      } catch (r) {
        let t = r instanceof Error ? r.message : "เกิดข้อผิดพลาดในการรีเซ็ต HWID";
        e({
          isResettingHwid: false,
          error: t
        });
        return {
          success: false,
          error: t
        };
      }
    },
    checkStatus: async n => {
      let s = r();
      if (!s) {
        return false;
      }
      let a = n || t().key?.code;
      if (!a) {
        return false;
      }
      try {
        let r = await s.checkStatus({
          code: a,
          hwid: t().hwid || undefined
        });
        if (r.valid && r.key) {
          e({
            keyDetails: r.key,
            error: null
          });
          return true;
        }
        if (r.status === "EXPIRED" || r.status === "HWID_MISMATCH" || r.status === "INACTIVE") {
          e({
            isAuthenticated: false,
            error: r.error || "คีย์ไม่ถูกต้องหรือหมดอายุ"
          });
        }
        return false;
      } catch {
        return false;
      }
    },
    logout: async () => {
      let t = r();
      if (!t) {
        return false;
      }
      try {
        await t.deactivate();
        s = false;
        e({
          key: null,
          keyDetails: null,
          isAuthenticated: false,
          isOffline: false,
          error: null
        });
        return true;
      } catch {
        return false;
      }
    },
    clearError: () => {
      e({
        error: null
      });
    }
  }));
  e.s(["useAuthStore", 0, a]);
}, 43649, e => {
  "use strict";

  var t = e.i(1347);
  let r = () => {
    let e = new Date();
    let t = String(e.getHours()).padStart(2, "0");
    let r = String(e.getMinutes()).padStart(2, "0");
    let n = String(e.getSeconds()).padStart(2, "0");
    return `${t}:${r}:${n}`;
  };
  let n = 0;
  let s = [];
  let a = (0, t.create)((e, t) => ({
    logs: [{
      id: "initial-1",
      timestamp: r(),
      level: "info",
      source: "SYSTEM",
      message: "ระบบเริ่มต้นการทำงานเรียบร้อยแล้ว"
    }],
    autoScroll: true,
    levelFilter: "all",
    searchQuery: "",
    addLog: t => {
      let n = (t.level || "info").toLowerCase();
      let s = ["info", "success", "warn", "error", "debug"].includes(n) ? n : "info";
      let a = {
        id: `${Date.now()}-${Math.random().toString(36).substring(2, 8)}`,
        timestamp: t.timestamp || r(),
        level: s,
        message: t.message,
        source: t.source || "SYSTEM",
        meta: t.meta
      };
      e(e => {
        let t = [...e.logs, a];
        return {
          logs: t.length > 1000 ? t.slice(t.length - 1000) : t
        };
      });
    },
    clearLogs: () => {
      e({
        logs: []
      });
    },
    setAutoScroll: t => {
      e({
        autoScroll: t
      });
    },
    toggleAutoScroll: () => {
      e(e => ({
        autoScroll: !e.autoScroll
      }));
    },
    setLevelFilter: t => {
      e({
        levelFilter: t
      });
    },
    setSearchQuery: t => {
      e({
        searchQuery: t
      });
    },
    copyLogs: async () => {
      let {
        logs: e,
        levelFilter: r,
        searchQuery: n
      } = t();
      let s = e.filter(e => {
        let t = r === "all" || e.level === r;
        let s = !n || e.message.toLowerCase().includes(n.toLowerCase()) || e.source?.toLowerCase().includes(n.toLowerCase()) || e.level.toLowerCase().includes(n.toLowerCase());
        return t && s;
      });
      if (s.length === 0) {
        return false;
      }
      let a = s.map(e => `[${e.timestamp}] [${e.level.toUpperCase()}] ${e.message}`).join("\n");
      try {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
          await navigator.clipboard.writeText(a);
          return true;
        }
        return false;
      } catch (e) {
        console.error("Failed to copy logs:", e);
        return false;
      }
    },
    initLogListeners: () => {
      if (n === 0) {
        if (window.electronApi?.account?.onLog) {
          let e = window.electronApi.account.onLog(e => {
            if (e) {
              if (typeof e == "string") {
                t().addLog({
                  level: "info",
                  source: "ELECTRON",
                  message: e
                });
                return;
              }
              t().addLog({
                timestamp: e.time,
                level: (e.level || "info").toLowerCase(),
                message: e.message || JSON.stringify(e),
                source: "WORKER",
                meta: e.meta
              });
            }
          });
          s.push(e);
        }
        if (window.electronApi?.post?.onLog) {
          let e = window.electronApi.post.onLog(e => {
            if (!e || !e.isLoggerEntry && !e.message?.includes(" -> ")) {
              return;
            }
            let n = (e.level || "info").toLowerCase();
            let s = ["info", "success", "warn", "error", "debug"].includes(n) ? n : "info";
            t().addLog({
              timestamp: e.time || r(),
              level: s,
              message: e.message || "",
              source: e.accountName || e.userId || "POSTER",
              meta: e.meta
            });
          });
          s.push(e);
        }
      }
      n++;
      return () => {
        if (--n <= 0) {
          n = 0;
          s.forEach(e => e?.());
          s = [];
        }
      };
    }
  }));
  e.s(["default", 0, a]);
}, 93652, e => {
  "use strict";

  var t = e.i(1347);
  let r = () => window.electronApi?.post ? window.electronApi.post : null;
  let n = (0, t.create)((e, t) => ({
    runningUserIds: [],
    isAllRunning: false,
    actionLoading: {},
    workerFilter: "all",
    tasks: {},
    taskTimers: {},
    groupInfo: {},
    error: null,
    setWorkerFilter: t => {
      e({
        workerFilter: t
      });
    },
    isUserRunning: e => t().runningUserIds.includes(String(e)),
    isActionLoading: e => !!t().actionLoading[String(e)],
    fetchStatus: async () => {
      let t = r();
      if (t) {
        try {
          let r = await t.getStatus();
          e({
            runningUserIds: r?.activeUsers || [],
            isAllRunning: !!r?.isRunning,
            error: null
          });
        } catch (r) {
          let t = r instanceof Error ? r.message : "Failed to fetch status";
          console.error("Failed to fetch post status:", r);
          e({
            error: t
          });
        }
      }
    },
    startAll: async () => {
      let n = r();
      if (!n) {
        return {
          success: false,
          message: "Electron API ไม่พร้อมใช้งาน"
        };
      }
      e(e => ({
        actionLoading: {
          ...e.actionLoading,
          all: true
        },
        error: null
      }));
      try {
        let r = await n.startAll();
        e({
          isAllRunning: true
        });
        await t().fetchStatus();
        return {
          success: r.success,
          message: r.message
        };
      } catch (r) {
        let t = r instanceof Error ? r.message : "เกิดข้อผิดพลาดในการสั่งรันทั้งหมด";
        e({
          error: t
        });
        return {
          success: false,
          message: t
        };
      } finally {
        e(e => ({
          actionLoading: {
            ...e.actionLoading,
            all: false
          }
        }));
      }
    },
    cancelAll: async () => {
      let t = r();
      if (!t) {
        return {
          success: false,
          message: "Electron API ไม่พร้อมใช้งาน"
        };
      }
      e(e => ({
        actionLoading: {
          ...e.actionLoading,
          all: true
        },
        error: null
      }));
      try {
        let r = await t.stopAll();
        e({
          isAllRunning: false,
          runningUserIds: []
        });
        return {
          success: r.success,
          message: r.message
        };
      } catch (r) {
        let t = r instanceof Error ? r.message : "เกิดข้อผิดพลาดในการยกเลิกทั้งหมด";
        e({
          error: t
        });
        return {
          success: false,
          message: t
        };
      } finally {
        e(e => ({
          actionLoading: {
            ...e.actionLoading,
            all: false
          }
        }));
      }
    },
    startUser: async t => {
      let n = r();
      let s = String(t);
      if (!n) {
        return {
          success: false,
          message: "Electron API ไม่พร้อมใช้งาน"
        };
      }
      e(e => ({
        actionLoading: {
          ...e.actionLoading,
          [s]: true
        },
        error: null
      }));
      try {
        let t = await n.startUser(s);
        if (t.success) {
          e(e => ({
            runningUserIds: Array.from(new Set([...e.runningUserIds, s])),
            isAllRunning: true
          }));
        }
        return {
          success: t.success,
          message: t.message
        };
      } catch (r) {
        let t = r instanceof Error ? r.message : `เกิดข้อผิดพลาดในการสั่งรัน User ${s}`;
        e({
          error: t
        });
        return {
          success: false,
          message: t
        };
      } finally {
        e(e => ({
          actionLoading: {
            ...e.actionLoading,
            [s]: false
          }
        }));
      }
    },
    cancelUser: async t => {
      let n = r();
      let s = String(t);
      if (!n) {
        return {
          success: false,
          message: "Electron API ไม่พร้อมใช้งาน"
        };
      }
      e(e => ({
        actionLoading: {
          ...e.actionLoading,
          [s]: true
        },
        error: null
      }));
      try {
        let t = await n.stopUser(s);
        e(e => {
          let t = e.runningUserIds.filter(e => e !== s);
          return {
            runningUserIds: t,
            isAllRunning: t.length > 0
          };
        });
        return {
          success: t.success,
          message: t.message
        };
      } catch (r) {
        let t = r instanceof Error ? r.message : `เกิดข้อผิดพลาดในการยกเลิก User ${s}`;
        e({
          error: t
        });
        return {
          success: false,
          message: t
        };
      } finally {
        e(e => ({
          actionLoading: {
            ...e.actionLoading,
            [s]: false
          }
        }));
      }
    },
    initPostListeners: () => {
      let n = r();
      if (!n?.onStatusChange) {
        return () => {};
      }
      t().fetchStatus();
      let s = n.onStatusChange(t => {
        let r = String(t.userId);
        let n = t.status === "running";
        e(e => {
          let t;
          let s = {
            ...e.tasks
          };
          if (n) {
            t = Array.from(new Set([...e.runningUserIds, r]));
            if (!s[r] || s[r] === "-") {
              s[r] = "กำลังเริ่มงาน...";
            }
          } else {
            t = e.runningUserIds.filter(e => e !== r);
            s[r] = "-";
          }
          let a = {
            ...e.taskTimers
          };
          if (!n) {
            delete a[r];
          }
          return {
            runningUserIds: t,
            isAllRunning: t.length > 0,
            tasks: s,
            taskTimers: a
          };
        });
      });
      let a = () => {};
      if (n.onTask) {
        a = n.onTask(t => {
          let r = String(t.userId);
          let n = typeof t.duration == "number" ? t.duration : typeof t.stepDelay == "number" ? t.stepDelay / 1000 : 0;
          let s = typeof t.endTime == "number" ? t.endTime : n > 0 ? Date.now() + n * 1000 : 0;
          e(e => {
            let a = {
              ...e.tasks,
              [r]: t.task
            };
            let o = {
              ...e.groupInfo
            };
            let i = {
              ...e.taskTimers,
              [r]: {
                duration: n,
                endTime: s
              }
            };
            if (t.groupName || t.linkTotal != null) {
              o[r] = {
                groupName: t.groupName ?? e.groupInfo[r]?.groupName ?? "",
                groupCurrent: t.groupCurrent ?? e.groupInfo[r]?.groupCurrent ?? 0,
                groupTotal: t.groupTotal ?? e.groupInfo[r]?.groupTotal ?? 0,
                linkCurrent: t.linkCurrent ?? e.groupInfo[r]?.linkCurrent ?? 0,
                linkTotal: t.linkTotal ?? e.groupInfo[r]?.linkTotal ?? 0
              };
            }
            return {
              tasks: a,
              groupInfo: o,
              taskTimers: i
            };
          });
        });
      }
      return () => {
        s();
        a();
      };
    }
  }));
  e.s(["default", 0, n, "usePostStore", 0, n]);
}]);
