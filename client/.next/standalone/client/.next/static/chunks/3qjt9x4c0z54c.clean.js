(globalThis.TURBOPACK ||= []).push([typeof document == "object" ? document.currentScript : undefined, 18308, e => {
  "use strict";

  var t = e.i(66497);
  var r = e.i(10977);
  var n = e.i(2692);
  let i = {
    name: "minus",
    size: 24,
    node: [["path", {
      d: "M5 12h14",
      key: "1ays0h"
    }]]
  };
  i.node;
  let _Component = (0, n.default)(i);
  var o = e.i(63915);
  var s = e.i(58955);
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
              let [t, r, n, i, a] = await Promise.all([e.A(98072), e.A(88362), e.A(64289), e.A(2670), e.A(86212)]);
              await t.useAccountsStore.getState().fetchAccounts();
              let o = r.useGroupsStore.getState().currentUserId;
              await r.useGroupsStore.getState().fetchGroups(o !== undefined ? String(o) : undefined);
              n.useConfigStore.getState().fetchConfig();
              i.useStatsStore.getState().fetchOverallStats();
              a.usePostStore.getState().fetchStatus();
            } catch {}
          })();
        });
      }
    }, []);
    let {
      toast: n
    } = (0, d.useToast)();
    let i = r.default.useRef(false);
    (0, r.useEffect)(() => window.electronApi?.post?.onNetStatus?.(e => {
      if (e && typeof e.online == "boolean") {
        if (e.online) {
          if (i.current) {
            i.current = false;
            n.success(e.message || "อินเทอร์เน็ตกลับมาแล้ว — งานโพสต์ทำงานต่อ", "เน็ตกลับมาแล้ว");
          }
        } else if (!i.current) {
          i.current = true;
          n.warning(e.message || "อินเทอร์เน็ตขัดข้อง — งานค้างไว้ชั่วคราว จะทำต่อเมื่อเน็ตกลับมา", "เน็ตหลุด");
        }
      }
    }), [n]);
    let {
      isAuthenticated: f,
      isInitialLoading: h,
      isOffline: p,
      keyDetails: g,
      initAuth: m
    } = (0, c.useAuthStore)();
    let [y, b] = r.default.useState(() => Date.now());
    let [v, w] = r.default.useState(null);
    let x = r.default.useRef(false);
    let A = r.default.useCallback(async () => {
      let {
        key: e,
        hwid: t
      } = c.useAuthStore.getState();
      if (!e?.code) {
        w(null);
        return;
      }
      if (!x.current) {
        x.current = true;
        try {
          let r = await window.electronApi?.auth?.checkStatus?.({
            code: e.code,
            hwid: t || undefined
          });
          w(!!r && r.status !== "SERVER_UNREACHABLE");
        } catch {
          w(false);
        } finally {
          x.current = false;
        }
      }
    }, []);
    (0, r.useEffect)(() => {
      A();
      let e = setInterval(() => {
        A();
      }, 60000);
      return () => clearInterval(e);
    }, [A, f]);
    (0, r.useEffect)(() => {
      m();
    }, [m]);
    (0, r.useEffect)(() => {
      if (!f || !g?.expiresAt) {
        return;
      }
      let e = setInterval(() => {
        b(Date.now());
      }, 1000);
      return () => clearInterval(e);
    }, [f, g?.expiresAt]);
    let k = function (e, t, r, n, i = Date.now()) {
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
        let e = new Date(n.expiresAt).getTime() - i;
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
      let s = Math.floor(a % 86400 / 3600);
      let l = Math.floor(a % 3600 / 60);
      let u = a % 60;
      let c = o <= 3;
      return {
        text: o > 0 ? `${o} วัน ${s} ชม. ${l} นาที ${u} วินาที` : s > 0 ? `${s} ชม. ${l} นาที ${u} วินาที` : l > 0 ? `${l} นาที ${u} วินาที` : ` ${u} วินาที`,
        colorClass: c ? "border-amber-500/25 bg-amber-500/10 text-amber-300 hover:bg-amber-500/15 hover:border-amber-500/40" : "border-emerald-500/25 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/15 hover:border-emerald-500/40",
        dotClass: c ? "bg-amber-400" : "bg-emerald-400",
        ping: true
      };
    }(f, h, p, g, y);
    let S = e => {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
        window.electronApi?.dragEnd();
      }
    };
    return <header className="flex h-12 w-full shrink-0 select-none items-center border-b border-white/[0.06] bg-neutral-950 px-2"><div className="window-drag-region flex h-full shrink-0 items-center"><u.default href="/" className="flex h-9 w-10 items-center justify-center" style={{
          WebkitAppRegion: "no-drag"
        }}><s.Monitor size={22} strokeWidth={2} className="text-neutral-300" /></u.default></div><div className="flex items-center gap-2.5 shrink-0 pl-1.5 pr-2"><span className="window-drag-region text-sm font-semibold tracking-tight text-neutral-300">Hertz Manager</span><u.default href="/auth" style={{
          WebkitAppRegion: "no-drag"
        }} title="คลิกเพื่อตรวจสอบหรือจัดการสิทธิ์การใช้งาน" className={`
            inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full
            border text-[11px] font-medium tracking-wide transition-all
            shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] cursor-pointer
            active:scale-95
            ${k.colorClass}
          `}><span className="relative flex h-2 w-2 items-center justify-center">{k.ping && <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${k.dotClass} opacity-75`} />}<span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${k.dotClass}`} /></span><span className="font-mono tabular-nums">{k.text}</span></u.default>{v !== null && <span title={v ? "เชื่อมต่อเซิร์ฟเวอร์ hertzx.xyz ปกติ" : "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้ — ตรวจสอบอินเทอร์เน็ตหรือหน้า /auth"} className={`
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
      }} onPointerUp={S} onPointerCancel={S} /><div className="flex h-full items-center gap-1 px-2" style={{
        WebkitAppRegion: "no-drag"
      }}><button type="button" onClick={() => window.electronApi?.minimize?.()} aria-label="Minimize" title="ย่อหน้าต่าง" className="flex h-8 w-10 items-center justify-center rounded-md text-neutral-400 transition-colors duration-150 hover:bg-white/[0.08] hover:text-neutral-100 active:scale-95"><_Component size={14} strokeWidth={2} /></button><button type="button" aria-label="Maximize" className="flex h-8 w-10 items-center justify-center rounded-md text-neutral-400 transition-colors duration-150 hover:bg-white/[0.08] hover:text-neutral-100 active:scale-95"><l.Square size={12} strokeWidth={2} /></button><button type="button" onClick={() => window.electronApi?.close?.()} aria-label="Close" title="ปิดโปรแกรม" className="flex h-8 w-10 items-center justify-center rounded-md text-neutral-400 transition-colors duration-150 hover:bg-red-500/90 hover:text-white active:scale-95"><o.X size={14} strokeWidth={2} /></button></div></header>;
  }], 18308);
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
  for (var i in n) {
    Object.defineProperty(r, i, {
      enumerable: true,
      get: n[i]
    });
  }
  let a = e.r(33558);
  let o = e.r(66497);
  let s = a._(e.r(10977));
  let l = e.r(31003);
  let u = e.r(12793);
  let c = e.r(453);
  let d = e.r(16729);
  let f = e.r(19862);
  let h = e.r(76975);
  let p = e.r(77873);
  let g = e.r(8056);
  let m = e.r(92677);
  function y(t) {
    var r;
    let n;
    let i;
    let a;
    let [y, v] = (0, s.useOptimistic)(p.IDLE_LINK_STATUS);
    let w = (0, s.useRef)(null);
    let {
      href: x,
      as: A,
      children: k,
      prefetch: S = null,
      passHref: j,
      replace: P,
      shallow: C,
      scroll: E,
      onClick: _,
      onMouseEnter: N,
      onTouchStart: I,
      legacyBehavior: O = false,
      onNavigate: R,
      transitionTypes: T,
      ref: D,
      unstable_dynamicOnHover: M,
      ...$
    } = t;
    n = k;
    if (O && (typeof n == "string" || typeof n == "number")) {
      n = <a>{n}</a>;
    }
    let L = s.default.useContext(u.AppRouterContext);
    let z = S !== false;
    let U = S === false ? "none" : S === true ? "full" : "auto";
    let H = U !== "none" ? U === "auto" ? m.FetchStrategy.PPR : m.FetchStrategy.Full : m.FetchStrategy.PPR;
    let W = typeof (r = A || x) == "string" ? r : (0, l.formatUrl)(r);
    if (O) {
      if (n?.$$typeof === Symbol.for("react.lazy")) {
        throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
          value: "E863",
          enumerable: false,
          configurable: true
        });
      }
      i = s.default.Children.only(n);
    }
    let B = O ? i && typeof i == "object" && i.ref : D;
    let F;
    let K = s.default.useCallback(e => {
      if (L !== null) {
        w.current = (0, p.mountLinkInstance)(e, W, L, H, z, v, F);
      }
      return () => {
        if (w.current) {
          (0, p.unmountLinkForCurrentNavigation)(w.current);
          w.current = null;
        }
        (0, p.unmountPrefetchableInstance)(e);
      };
    }, [z, W, L, H, v, F]);
    let q = {
      ref: (0, c.useMergedRef)(K, B),
      onClick(t) {
        if (!O && typeof _ == "function") {
          _(t);
        }
        if (O && i.props && typeof i.props.onClick == "function") {
          i.props.onClick(t);
        }
        if (!!L && !t.defaultPrevented) {
          (function (t, r, n, i, a, o, l, u = "none") {
            if (typeof window !== "undefined") {
              let c;
              let {
                nodeName: d
              } = t.currentTarget;
              if (d.toUpperCase() === "A" && ((c = t.currentTarget.getAttribute("target")) && c !== "_self" || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && t.nativeEvent.which === 2) || t.currentTarget.hasAttribute("download")) {
                return;
              }
              if (!(0, g.isLocalURL)(r)) {
                if (i) {
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
              s.default.startTransition(() => {
                f(r, i ? "replace" : "push", a === false ? h.ScrollBehavior.NoScroll : h.ScrollBehavior.Default, n.current, l, u);
              });
            }
          })(t, W, w, P, E, R, T, U);
        }
      },
      onMouseEnter(e) {
        if (!O && typeof N == "function") {
          N(e);
        }
        if (O && i.props && typeof i.props.onMouseEnter == "function") {
          i.props.onMouseEnter(e);
        }
        if (L && z) {
          (0, p.onNavigationIntent)(e.currentTarget, M === true);
        }
      },
      onTouchStart: function (e) {
        if (!O && typeof I == "function") {
          I(e);
        }
        if (O && i.props && typeof i.props.onTouchStart == "function") {
          i.props.onTouchStart(e);
        }
        if (L && z) {
          (0, p.onNavigationIntent)(e.currentTarget, M === true);
        }
      }
    };
    if ((0, d.isAbsoluteUrl)(W)) {
      q.href = W;
    } else if (!O || !!j || i.type === "a" && !("href" in i.props)) {
      q.href = (0, f.addBasePath)(W);
    }
    a = O ? s.default.cloneElement(i, q) : <a {...$} {...q}>{n}</a>;
    return <b.Provider value={y}>{a}</b.Provider>;
  }
  let b = (0, s.createContext)(p.IDLE_LINK_STATUS);
  let v = () => (0, s.useContext)(b);
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
      return i;
    }
  });
  let n = e.r(10977);
  function i(e, t) {
    let r = (0, n.useRef)(null);
    let i = (0, n.useRef)(null);
    return (0, n.useCallback)(n => {
      if (n === null) {
        let e = r.current;
        if (e) {
          r.current = null;
          e();
        }
        let t = i.current;
        if (t) {
          i.current = null;
          t();
        }
      } else {
        if (e) {
          r.current = a(e, n);
        }
        if (t) {
          i.current = a(t, n);
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
      return x;
    },
    MissingStaticPage: function () {
      return w;
    },
    NormalizeError: function () {
      return b;
    },
    PageNotFoundError: function () {
      return v;
    },
    SP: function () {
      return g;
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
      return h;
    },
    stringifyError: function () {
      return A;
    }
  };
  for (var i in n) {
    Object.defineProperty(r, i, {
      enumerable: true,
      get: n[i]
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
  let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
  let l = e => {
    let t = e.charCodeAt(0);
    return (!!(t >= 65) && !!(t <= 90) || !!(t >= 97) && !!(t <= 122)) && s.test(e);
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
  function h(e) {
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
  let g = typeof performance !== "undefined";
  let m = g && ["mark", "measure", "getEntriesByName"].every(e => typeof performance[e] == "function");
  class y extends Error {}
  class b extends Error {}
  class v extends Error {
    constructor(e) {
      super();
      this.code = "ENOENT";
      this.name = "PageNotFoundError";
      this.message = `Cannot find module for page: ${e}`;
    }
  }
  class w extends Error {
    constructor(e, t) {
      super();
      this.message = `Failed to load static file for page: ${e} ${t}`;
    }
  }
  class x extends Error {
    constructor() {
      super();
      this.code = "ENOENT";
      this.message = "Cannot find the middleware module";
    }
  }
  function A(e) {
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
  let i = e.r(26176);
  function a(e) {
    if (!(0, n.isAbsoluteUrl)(e)) {
      return true;
    }
    try {
      let t = (0, n.getLocationOrigin)();
      let r = new URL(e, t);
      return r.origin === t && (0, i.hasBasePath)(r.pathname);
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
      return s;
    }
  };
  for (var i in n) {
    Object.defineProperty(r, i, {
      enumerable: true,
      get: n[i]
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
  function s(e) {
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
      return s;
    },
    formatWithValidation: function () {
      return u;
    },
    urlObjectKeys: function () {
      return l;
    }
  };
  for (var i in n) {
    Object.defineProperty(r, i, {
      enumerable: true,
      get: n[i]
    });
  }
  let a = e.r(33558)._(e.r(91052));
  let o = /https?|ftp|gopher|file/;
  function s(e) {
    let {
      auth: t,
      hostname: r
    } = e;
    let n = e.protocol || "";
    let i = e.pathname || "";
    let s = e.hash || "";
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
      if (i && i[0] !== "/") {
        i = "/" + i;
      }
    } else {
      u ||= "";
    }
    if (s && s[0] !== "#") {
      s = "#" + s;
    }
    if (c && c[0] !== "?") {
      c = "?" + c;
    }
    i = i.replace(/[?#]/g, encodeURIComponent);
    c = c.replace("#", "%23");
    return `${n}${u}${i}${c}${s}`;
  }
  let l = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
  function u(e) {
    return s(e);
  }
}, 98072, e => {
  e.v(t => Promise.all(["static/chunks/0cpiyz4hukds4.js"].map(t => e.l(t))).then(() => t(66842)));
}, 59742, e => {
  "use strict";

  var t = e.i(1347);
  let r = () => window.electronApi?.auth ? window.electronApi.auth : null;
  let n = null;
  let i = false;
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
      if (!a && i && t().isAuthenticated) {
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
        if (!i) {
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
              i = true;
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
              i = false;
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
            i = false;
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
          i = true;
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
      let i = t.trim();
      if (!i) {
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
        let t = await n.resetHwid(i);
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
      let i = r();
      if (!i) {
        return false;
      }
      let a = n || t().key?.code;
      if (!a) {
        return false;
      }
      try {
        let r = await i.checkStatus({
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
        i = false;
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
}, 64289, e => {
  e.v(e => Promise.resolve().then(() => e(76582)));
}, 88362, e => {
  e.v(t => Promise.all(["static/chunks/0dltzug5tpbiu.js"].map(t => e.l(t))).then(() => t(58259)));
}, 86212, e => {
  e.v(t => Promise.all(["static/chunks/144idnt3rq9_e.js"].map(t => e.l(t))).then(() => t(93652)));
}, 2670, e => {
  e.v(t => Promise.all(["static/chunks/1ri98pzgj-wz5.js"].map(t => e.l(t))).then(() => t(28719)));
}]);
