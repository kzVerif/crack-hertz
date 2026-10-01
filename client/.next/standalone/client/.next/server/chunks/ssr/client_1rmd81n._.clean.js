module.exports = [62576, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(9651);
  var d = a.i(1441);
  let e = {
    name: "minus",
    size: 24,
    node: [["path", {
      d: "M5 12h14",
      key: "1ays0h"
    }]]
  };
  e.node;
  let _Component = (0, d.default)(e);
  var g = a.i(38169);
  var h = a.i(14285);
  var i = a.i(86053);
  var j = a.i(3642);
  var k = a.i(44146);
  var l = a.i(22370);
  a.s(["default", 0, () => {
    (0, c.useEffect)(() => {
      let b = window.electronApi?.remote;
      if (b && b.onDataChanged) {
        return b.onDataChanged(() => {
          (async () => {
            try {
              let [b, c, d, e, f] = await Promise.all([a.A(3270), a.A(83968), a.A(3383), a.A(29014), a.A(76352)]);
              await b.useAccountsStore.getState().fetchAccounts();
              let g = c.useGroupsStore.getState().currentUserId;
              await c.useGroupsStore.getState().fetchGroups(g !== undefined ? String(g) : undefined);
              d.useConfigStore.getState().fetchConfig();
              e.useStatsStore.getState().fetchOverallStats();
              f.usePostStore.getState().fetchStatus();
            } catch {}
          })();
        });
      }
    }, []);
    let {
      toast: d
    } = (0, l.useToast)();
    let e = c.default.useRef(false);
    (0, c.useEffect)(() => window.electronApi?.post?.onNetStatus?.(a => {
      if (a && typeof a.online == "boolean") {
        if (a.online) {
          if (e.current) {
            e.current = false;
            d.success(a.message || "อินเทอร์เน็ตกลับมาแล้ว — งานโพสต์ทำงานต่อ", "เน็ตกลับมาแล้ว");
          }
        } else if (!e.current) {
          e.current = true;
          d.warning(a.message || "อินเทอร์เน็ตขัดข้อง — งานค้างไว้ชั่วคราว จะทำต่อเมื่อเน็ตกลับมา", "เน็ตหลุด");
        }
      }
    }), [d]);
    let {
      isAuthenticated: m,
      isInitialLoading: n,
      isOffline: o,
      keyDetails: p,
      initAuth: q
    } = (0, k.useAuthStore)();
    let [r, s] = c.default.useState(() => Date.now());
    let [t, u] = c.default.useState(null);
    let v = c.default.useRef(false);
    let w = c.default.useCallback(async () => {
      let {
        key: a,
        hwid: b
      } = k.useAuthStore.getState();
      if (!a?.code) {
        u(null);
        return;
      }
      if (!v.current) {
        v.current = true;
        try {
          let c = await window.electronApi?.auth?.checkStatus?.({
            code: a.code,
            hwid: b || undefined
          });
          u(!!c && c.status !== "SERVER_UNREACHABLE");
        } catch {
          u(false);
        } finally {
          v.current = false;
        }
      }
    }, []);
    (0, c.useEffect)(() => {
      w();
      let a = setInterval(() => {
        w();
      }, 60000);
      return () => clearInterval(a);
    }, [w, m]);
    (0, c.useEffect)(() => {
      q();
    }, [q]);
    (0, c.useEffect)(() => {
      if (!m || !p?.expiresAt) {
        return;
      }
      let a = setInterval(() => {
        s(Date.now());
      }, 1000);
      return () => clearInterval(a);
    }, [m, p?.expiresAt]);
    let x = function (a, b, c, d, e = Date.now()) {
      if (b) {
        return {
          text: "กำลังตรวจสอบ...",
          colorClass: "border-neutral-700/60 bg-neutral-800/40 text-neutral-400",
          dotClass: "bg-neutral-500",
          ping: false
        };
      }
      if (!a) {
        return {
          text: "ยังไม่ได้เปิดใช้งาน",
          colorClass: "border-rose-500/25 bg-rose-500/10 text-rose-300 hover:bg-rose-500/15 hover:border-rose-500/40",
          dotClass: "bg-rose-400",
          ping: false
        };
      }
      if (c) {
        return {
          text: "โหมดออฟไลน์",
          colorClass: "border-amber-500/25 bg-amber-500/10 text-amber-300 hover:bg-amber-500/15 hover:border-amber-500/40",
          dotClass: "bg-amber-400",
          ping: false
        };
      }
      let f = 0;
      if (d?.expiresAt) {
        let a = new Date(d.expiresAt).getTime() - e;
        if (a <= 0) {
          return {
            text: "คีย์หมดอายุ",
            colorClass: "border-rose-500/25 bg-rose-500/10 text-rose-300",
            dotClass: "bg-rose-500",
            ping: false
          };
        }
        f = Math.floor(a / 1000);
      } else if (typeof d?.remainingSeconds == "number") {
        f = d.remainingSeconds;
      } else {
        if (typeof d?.remainingDays != "number") {
          return {
            text: "Active",
            colorClass: "border-emerald-500/25 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/15 hover:border-emerald-500/40",
            dotClass: "bg-emerald-400",
            ping: true
          };
        }
        f = d.remainingDays * 86400;
      }
      let g = Math.floor(f / 86400);
      let h = Math.floor(f % 86400 / 3600);
      let i = Math.floor(f % 3600 / 60);
      let j = f % 60;
      let k = g <= 3;
      return {
        text: g > 0 ? `${g} วัน ${h} ชม. ${i} นาที ${j} วินาที` : h > 0 ? `${h} ชม. ${i} นาที ${j} วินาที` : i > 0 ? `${i} นาที ${j} วินาที` : ` ${j} วินาที`,
        colorClass: k ? "border-amber-500/25 bg-amber-500/10 text-amber-300 hover:bg-amber-500/15 hover:border-amber-500/40" : "border-emerald-500/25 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/15 hover:border-emerald-500/40",
        dotClass: k ? "bg-amber-400" : "bg-emerald-400",
        ping: true
      };
    }(m, n, o, p, r);
    let y = a => {
      if (a.currentTarget.hasPointerCapture(a.pointerId)) {
        a.currentTarget.releasePointerCapture(a.pointerId);
        window.electronApi?.dragEnd();
      }
    };
    return <header className="flex h-12 w-full shrink-0 select-none items-center border-b border-white/[0.06] bg-neutral-950 px-2"><div className="window-drag-region flex h-full shrink-0 items-center"><j.default href="/" className="flex h-9 w-10 items-center justify-center" style={{
          WebkitAppRegion: "no-drag"
        }}><h.Monitor size={22} strokeWidth={2} className="text-neutral-300" /></j.default></div><div className="flex items-center gap-2.5 shrink-0 pl-1.5 pr-2"><span className="window-drag-region text-sm font-semibold tracking-tight text-neutral-300">Hertz Manager</span><j.default href="/auth" style={{
          WebkitAppRegion: "no-drag"
        }} title="คลิกเพื่อตรวจสอบหรือจัดการสิทธิ์การใช้งาน" className={`
            inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full
            border text-[11px] font-medium tracking-wide transition-all
            shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] cursor-pointer
            active:scale-95
            ${x.colorClass}
          `}><span className="relative flex h-2 w-2 items-center justify-center">{x.ping && <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${x.dotClass} opacity-75`} />}<span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${x.dotClass}`} /></span><span className="font-mono tabular-nums">{x.text}</span></j.default>{t !== null && <span title={t ? "เชื่อมต่อเซิร์ฟเวอร์ hertzx.xyz ปกติ" : "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้ — ตรวจสอบอินเทอร์เน็ตหรือหน้า /auth"} className={`
              inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full
              border text-[11px] font-medium tracking-wide
              shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
              ${t ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-300" : "border-red-500/25 bg-red-500/10 text-red-300"}
            `}><span className="relative flex h-2 w-2 items-center justify-center">{t && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />}<span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${t ? "bg-emerald-400" : "bg-red-500"}`} /></span><span>{t ? "เซิร์ฟเวอร์เชื่อมต่อ" : "เซิร์ฟเวอร์หลุด"}</span></span>}</div><div className="window-drag-region flex h-full flex-1 items-center" onPointerDown={a => {
        if (a.button === 0) {
          a.currentTarget.setPointerCapture(a.pointerId);
          window.electronApi?.dragStart(a.screenX, a.screenY);
        }
      }} onPointerMove={a => {
        if (a.currentTarget.hasPointerCapture(a.pointerId)) {
          window.electronApi?.dragMove(a.screenX, a.screenY);
        }
      }} onPointerUp={y} onPointerCancel={y} /><div className="flex h-full items-center gap-1 px-2" style={{
        WebkitAppRegion: "no-drag"
      }}><button type="button" onClick={() => window.electronApi?.minimize?.()} aria-label="Minimize" title="ย่อหน้าต่าง" className="flex h-8 w-10 items-center justify-center rounded-md text-neutral-400 transition-colors duration-150 hover:bg-white/[0.08] hover:text-neutral-100 active:scale-95"><_Component size={14} strokeWidth={2} /></button><button type="button" aria-label="Maximize" className="flex h-8 w-10 items-center justify-center rounded-md text-neutral-400 transition-colors duration-150 hover:bg-white/[0.08] hover:text-neutral-100 active:scale-95"><i.Square size={12} strokeWidth={2} /></button><button type="button" onClick={() => window.electronApi?.close?.()} aria-label="Close" title="ปิดโปรแกรม" className="flex h-8 w-10 items-center justify-center rounded-md text-neutral-400 transition-colors duration-150 hover:bg-red-500/90 hover:text-white active:scale-95"><g.X size={14} strokeWidth={2} /></button></div></header>;
  }], 62576);
}, 49883, (a, b, c) => {
  "use strict";

  function d(a) {
    if (typeof WeakMap != "function") {
      return null;
    }
    var b = new WeakMap();
    var c = new WeakMap();
    return (d = function (a) {
      if (a) {
        return c;
      } else {
        return b;
      }
    })(a);
  }
  c._ = function (a, b) {
    if (!b && a && a.__esModule) {
      return a;
    }
    if (a === null || typeof a != "object" && typeof a != "function") {
      return {
        default: a
      };
    }
    var c = d(b);
    if (c && c.has(a)) {
      return c.get(a);
    }
    var e = {
      __proto__: null
    };
    var f = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var g in a) {
      if (g !== "default" && Object.prototype.hasOwnProperty.call(a, g)) {
        var h = f ? Object.getOwnPropertyDescriptor(a, g) : null;
        if (h && (h.get || h.set)) {
          Object.defineProperty(e, g, h);
        } else {
          e[g] = a[g];
        }
      }
    }
    e.default = a;
    if (c) {
      c.set(a, e);
    }
    return e;
  };
}, 14285, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
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
  c.node;
  let d = (0, b.default)(c);
  a.s(["Monitor", 0, d], 14285);
}, 86053, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
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
  c.node;
  let d = (0, b.default)(c);
  a.s(["Square", 0, d], 86053);
}, 81915, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    createLinkPrefetchPartialError: function () {
      return g;
    },
    createUnrenderedSegmentError: function () {
      return f;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  function f(a, b) {
    let c = `Route "${a}": Could not validate that a segment in your UI has instant navigation.`;
    if (b.length > 0) {
      let a = b.length === 1 ? "Dropped segment" : "Dropped segments";
      c += `

This segment was dropped from rendering. Issues that would prevent instant navigation will go undetected.

${a}:
${b.map(a => `  ${a}`).join("\n")}

Ways to fix this:
  - [render] Render the dropped segment
  - [ignore] Set \`export const instant = false\` to opt the dropped segment out of instant-navigation validation

Learn more: https://nextjs.org/docs/messages/instant-unrendered-segment`;
    }
    return Object.defineProperty(Error(c), "__NEXT_ERROR_CODE", {
      value: "E1286",
      enumerable: false,
      configurable: true
    });
  }
  function g(a) {
    return Object.defineProperty(Error(`Next.js encountered dynamic data during prefetching for "${a}".

This will lead to slower, more expensive prefetches.

Ways to fix this:
  - [upgrade] Opt into Partial Prefetching by exporting \`const prefetch = 'partial'\` from the page or layout, or by setting \`partialPrefetching: true\` in next.config to opt the whole app in
  - [disable] Remove \`prefetch={true}\` from the <Link> to use the default prefetch
  - [ignore] Set \`export const instant = false\` to opt the route out of instant-navigation validation

Learn more: https://nextjs.org/docs/messages/instant-link-prefetch-partial`), "__NEXT_ERROR_CODE", {
      value: "E1435",
      enumerable: false,
      configurable: true
    });
  }
}, 10062, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  Object.defineProperty(c, "InvariantError", {
    enumerable: true,
    get: function () {
      return d;
    }
  });
  class d extends Error {
    constructor(a, b) {
      super(`Invariant: ${a.endsWith(".") ? a : a + "."} This is a bug in Next.js.`, b);
      Object.defineProperty(this, "__NEXT_ERROR_CODE", {
        value: "E1179",
        enumerable: false,
        configurable: true
      });
      this.name = "InvariantError";
    }
  }
}, 46507, (a, b, c) => {
  "use strict";

  function d() {
    let a;
    let b;
    let c = new Promise((c, d) => {
      a = c;
      b = d;
    });
    return {
      resolve: a,
      reject: b,
      promise: c
    };
  }
  Object.defineProperty(c, "__esModule", {
    value: true
  });
  Object.defineProperty(c, "createPromiseWithResolvers", {
    enumerable: true,
    get: function () {
      return d;
    }
  });
}, 20760, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    DEFAULT_SEGMENT_KEY: function () {
      return l;
    },
    NOT_FOUND_SEGMENT_KEY: function () {
      return m;
    },
    PAGE_SEGMENT_KEY: function () {
      return k;
    },
    addSearchParamsIfPageSegment: function () {
      return i;
    },
    computeSelectedLayoutSegment: function () {
      return j;
    },
    getSegmentValue: function () {
      return f;
    },
    getSelectedLayoutSegmentPath: function () {
      return function a(b, c, d = true, e = []) {
        let g;
        if (d) {
          g = b[1][c];
        } else {
          let a = b[1];
          g = a.children ?? Object.values(a)[0];
        }
        if (!g) {
          return e;
        }
        let h = f(g[0]);
        if (!h || h.startsWith(k)) {
          return e;
        } else {
          e.push(h);
          return a(g, c, false, e);
        }
      };
    },
    isGroupSegment: function () {
      return g;
    },
    isParallelRouteSegment: function () {
      return h;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  function f(a) {
    if (Array.isArray(a)) {
      return a[1];
    } else {
      return a;
    }
  }
  function g(a) {
    return a[0] === "(" && a.endsWith(")");
  }
  function h(a) {
    return a.startsWith("@") && a !== "@children";
  }
  function i(a, b) {
    if (a.includes(k)) {
      let a = JSON.stringify(b);
      if (a !== "{}") {
        return k + "?" + a;
      } else {
        return k;
      }
    }
    return a;
  }
  function j(a, b) {
    if (!a || a.length === 0) {
      return null;
    }
    let c = b === "children" ? a[0] : a[a.length - 1];
    if (c === l) {
      return null;
    } else {
      return c;
    }
  }
  let k = "__PAGE__";
  let l = "__DEFAULT__";
  let m = "/_not-found";
}, 44146, a => {
  "use strict";

  let b = (0, a.i(91402).create)((a, b) => ({
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
    fetchHwid: async () => null,
    initAuth: async (b = false) => {
      a({
        isInitialLoading: false,
        isAuthenticated: false
      });
      return {
        authenticated: false,
        error: "Electron API not available"
      };
    },
    activateKey: async a => ({
      success: false,
      error: "Electron API not available"
    }),
    resetHwid: async a => ({
      success: false,
      error: "ฟังก์ชันรีเซ็ต HWID ไม่พร้อมใช้งาน"
    }),
    checkStatus: async a => false,
    logout: async () => false,
    clearError: () => {
      a({
        error: null
      });
    }
  }));
  a.s(["useAuthStore", 0, b]);
}];

//# sourceMappingURL=client_1rmd81n._.js.map
