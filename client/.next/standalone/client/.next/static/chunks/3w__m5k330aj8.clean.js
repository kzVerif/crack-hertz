(globalThis.TURBOPACK ||= []).push([typeof document == "object" ? document.currentScript : undefined, 48522, (e, t, r) => {
  "use strict";

  e.i(93677);
  Object.defineProperty(r, "__esModule", {
    value: true
  });
  Object.defineProperty(r, "useRouterBFCache", {
    enumerable: true,
    get: function () {
      return l;
    }
  });
  let n = e.r(10977);
  function l(e, t, r) {
    let [l, u] = (0, n.useState)(() => ({
      tree: e,
      cacheNode: t,
      stateKey: r,
      next: null
    }));
    if (l.tree === e) {
      return l;
    }
    let a = {
      tree: e,
      cacheNode: t,
      stateKey: r,
      next: null
    };
    let o = 1;
    let d = l;
    let s = a;
    while (d !== null && o < 1) {
      if (d.stateKey === r) {
        s.next = d.next;
        break;
      }
      {
        o++;
        let e = {
          tree: d.tree,
          cacheNode: d.cacheNode,
          stateKey: d.stateKey,
          next: null
        };
        s.next = e;
        s = e;
      }
      d = d.next;
    }
    u(a);
    return a;
  }
  if ((typeof r.default == "function" || typeof r.default == "object" && r.default !== null) && r.default.__esModule === undefined) {
    Object.defineProperty(r.default, "__esModule", {
      value: true
    });
    Object.assign(r.default, r);
    t.exports = r.default;
  }
}, 28079, (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: true
  });
  Object.defineProperty(r, "ClientPageRoot", {
    enumerable: true,
    get: function () {
      return s;
    }
  });
  let n = e.r(66497);
  let l = e.r(12793);
  let u = e.r(10977);
  let a = e.r(95823);
  let o = e.r(93824);
  let d = e.r(16659);
  function s({
    Component: _Component,
    serverProvidedParams: t
  }) {
    let r;
    let i;
    if (t !== null) {
      r = t.searchParams;
      i = t.params;
    } else {
      let e = (0, u.use)(l.LayoutRouterContext);
      i = e !== null ? e.parentParams : {};
      r = (0, a.urlSearchParamsToParsedUrlQuery)((0, u.use)(o.SearchParamsContext));
    }
    let c = (0, d.createClientSearchParams)(r);
    let f = (0, d.createClientParams)(i);
    return <_Component params={f} searchParams={c} />;
  }
  if ((typeof r.default == "function" || typeof r.default == "object" && r.default !== null) && r.default.__esModule === undefined) {
    Object.defineProperty(r.default, "__esModule", {
      value: true
    });
    Object.assign(r.default, r);
    t.exports = r.default;
  }
}, 54139, (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: true
  });
  Object.defineProperty(r, "ClientSegmentRoot", {
    enumerable: true,
    get: function () {
      return o;
    }
  });
  let n = e.r(66497);
  let l = e.r(12793);
  let u = e.r(10977);
  let a = e.r(16659);
  function o({
    Component: _Component2,
    slots: t,
    serverProvidedParams: r
  }) {
    let d;
    if (r !== null) {
      d = r.params;
    } else {
      let e = (0, u.use)(l.LayoutRouterContext);
      d = e !== null ? e.parentParams : {};
    }
    let s = (0, a.createClientParams)(d);
    return <_Component2 {...t} params={s} />;
  }
  if ((typeof r.default == "function" || typeof r.default == "object" && r.default !== null) && r.default.__esModule === undefined) {
    Object.defineProperty(r.default, "__esModule", {
      value: true
    });
    Object.assign(r.default, r);
    t.exports = r.default;
  }
}, 94304, (e, t, r) => {
  "use strict";

  e.i(93677);
  Object.defineProperty(r, "__esModule", {
    value: true
  });
  Object.defineProperty(r, "HTTPAccessFallbackBoundary", {
    enumerable: true,
    get: function () {
      return i;
    }
  });
  let n = e.r(33558);
  let l = e.r(66497);
  let u = n._(e.r(10977));
  let a = e.r(7784);
  let o = e.r(70002);
  let d = e.r(12793);
  class _Component3 extends u.default.Component {
    constructor(e) {
      super(e);
      this.state = {
        triggeredStatus: undefined,
        previousPathname: e.pathname
      };
    }
    componentDidCatch() {}
    static getDerivedStateFromError(e) {
      if ((0, o.isHTTPAccessFallbackError)(e)) {
        return {
          triggeredStatus: (0, o.getAccessFallbackHTTPStatus)(e)
        };
      }
      throw e;
    }
    static getDerivedStateFromProps(e, t) {
      if (e.pathname !== t.previousPathname && t.triggeredStatus) {
        return {
          triggeredStatus: undefined,
          previousPathname: e.pathname
        };
      } else {
        return {
          triggeredStatus: t.triggeredStatus,
          previousPathname: e.pathname
        };
      }
    }
    render() {
      let {
        notFound: e,
        forbidden: t,
        unauthorized: r,
        children: n
      } = this.props;
      let {
        triggeredStatus: u
      } = this.state;
      let a = {
        [o.HTTPAccessErrorStatus.NOT_FOUND]: e,
        [o.HTTPAccessErrorStatus.FORBIDDEN]: t,
        [o.HTTPAccessErrorStatus.UNAUTHORIZED]: r
      };
      if (u) {
        let d = u === o.HTTPAccessErrorStatus.NOT_FOUND && e;
        let s = u === o.HTTPAccessErrorStatus.FORBIDDEN && t;
        let i = u === o.HTTPAccessErrorStatus.UNAUTHORIZED && r;
        if (d || s || i) {
          return <l.Fragment><meta name="robots" content="noindex" />{false}{a[u]}</l.Fragment>;
        } else {
          return n;
        }
      }
      return n;
    }
  }
  function i({
    notFound: e,
    forbidden: t,
    unauthorized: r,
    children: n
  }) {
    let o = (0, a.useUntrackedPathname)();
    let c = (0, u.useContext)(d.MissingSlotContext);
    if (e || t || r) {
      return <_Component3 pathname={o} notFound={e} forbidden={t} unauthorized={r} missingSlots={c}>{n}</_Component3>;
    } else {
      return <l.Fragment>{n}</l.Fragment>;
    }
  }
  if ((typeof r.default == "function" || typeof r.default == "object" && r.default !== null) && r.default.__esModule === undefined) {
    Object.defineProperty(r.default, "__esModule", {
      value: true
    });
    Object.assign(r.default, r);
    t.exports = r.default;
  }
}, 34410, (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: true
  });
  var n = {
    InstantValidationBoundaryContext: function () {
      return u;
    },
    PlaceValidationBoundaryBelowThisLevel: function () {
      return a;
    },
    RenderValidationBoundaryAtThisLevel: function () {
      return o;
    },
    SlotMarker: function () {
      return d;
    }
  };
  for (var l in n) {
    Object.defineProperty(r, l, {
      enumerable: true,
      get: n[l]
    });
  }
  let u = null;
  let a = null;
  let o = null;
  let d = null;
  if ((typeof r.default == "function" || typeof r.default == "object" && r.default !== null) && r.default.__esModule === undefined) {
    Object.defineProperty(r.default, "__esModule", {
      value: true
    });
    Object.assign(r.default, r);
    t.exports = r.default;
  }
}, 912, (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: true
  });
  var n = {
    InstantValidationBoundaryContext: function () {
      return u.InstantValidationBoundaryContext;
    },
    PlaceValidationBoundaryBelowThisLevel: function () {
      return u.PlaceValidationBoundaryBelowThisLevel;
    },
    RenderValidationBoundaryAtThisLevel: function () {
      return u.RenderValidationBoundaryAtThisLevel;
    },
    SlotMarker: function () {
      return u.SlotMarker;
    }
  };
  for (var l in n) {
    Object.defineProperty(r, l, {
      enumerable: true,
      get: n[l]
    });
  }
  let u = e.r(34410);
  if ((typeof r.default == "function" || typeof r.default == "object" && r.default !== null) && r.default.__esModule === undefined) {
    Object.defineProperty(r.default, "__esModule", {
      value: true
    });
    Object.assign(r.default, r);
    t.exports = r.default;
  }
}, 8165, (e, t, r) => {
  "use strict";

  e.i(93677);
  Object.defineProperty(r, "__esModule", {
    value: true
  });
  var n = {
    LoadingBoundaryProvider: function () {
      return C;
    },
    default: function () {
      return T;
    }
  };
  for (var l in n) {
    Object.defineProperty(r, l, {
      enumerable: true,
      get: n[l]
    });
  }
  let u = e.r(51432);
  let a = e.r(33558);
  let o = e.r(66497);
  let d = a._(e.r(10977));
  let s = u._(e.r(16568));
  let i = e.r(12793);
  let c = e.r(27764);
  let f = e.r(53354);
  let p = e.r(97709);
  let y = e.r(26044);
  let m = e.r(94304);
  e.r(912);
  let b = e.r(75761);
  let _ = e.r(48522);
  e.r(52869);
  let h = e.r(93824);
  let P = e.r(95823);
  let v = e.r(28104);
  s.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(e, t, r) {
    let n = e.getClientRects();
    if (n.length === 0) {
      return 0;
    }
    let l = Infinity;
    for (let e = 0; e < n.length; e++) {
      let t = n[e];
      if (t.top < l) {
        l = t.top;
      }
    }
    if (l >= r() && l <= t) {
      return 1;
    } else {
      return 2;
    }
  }
  d.default.Component;
  let _Component4 = function (e) {
    let t = d.default.useRef(null);
    (0, d.useLayoutEffect)(() => {
      let {
        focusAndScrollRef: r,
        cacheNode: n
      } = e;
      let l = r.forceScroll ? r.scrollRef : n.scrollRef;
      if (l === null || !l.current) {
        return;
      }
      let u = null;
      let a = r.hashFragment;
      if (a) {
        var o;
        if ((u = (o = a) === "top" ? document.body : document.getElementById(o) ?? document.getElementsByName(o)[0] ?? null) === null) {
          l.current = false;
          r.onlyHashChange = false;
          r.hashFragment = null;
          return;
        }
      } else {
        u = t.current;
      }
      if (u === null) {
        return;
      }
      let d = false;
      (0, p.disableSmoothScrollDuringRouteTransition)(() => {
        let e = document.documentElement;
        let t = null;
        let r = null;
        let n = null;
        let o = () => {
          var r;
          var l;
          let u;
          let a;
          if (n === null) {
            r = e;
            l = t;
            n = !Number.isFinite(a = Number.parseFloat(u = getComputedStyle(r).scrollPaddingTop)) || a < 0 ? 0 : u.endsWith("px") ? a : u.endsWith("%") ? a / 100 * l : 0;
          }
          return n;
        };
        if (a || (t = e.clientHeight, (r = g(u, t, o)) !== 0)) {
          d = true;
          l.current = false;
          if (a) {
            u.scrollIntoView();
          } else if (r !== 1) {
            e.scrollTop = 0;
            if (g(u, t, o) === 2) {
              u.scrollIntoView();
            }
          }
        }
      }, {
        dontForceLayout: true,
        onlyHashChange: r.onlyHashChange
      });
      if (d) {
        r.onlyHashChange = false;
        r.hashFragment = null;
      }
    }, undefined);
    return <d.Fragment ref={t}>{e.children}</d.Fragment>;
  };
  function O({
    children: e,
    cacheNode: t
  }) {
    let r = (0, d.useContext)(i.GlobalLayoutRouterContext);
    if (!r) {
      throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", {
        value: "E473",
        enumerable: false,
        configurable: true
      });
    }
    return <_Component4 focusAndScrollRef={r.focusAndScrollRef} cacheNode={t}>{e}</_Component4>;
  }
  function _Component5({
    tree: e,
    segmentPath: t,
    debugNameContext: r,
    cacheNode: n,
    params: l,
    url: u,
    isActive: a
  }) {
    let s;
    let f = (0, d.useContext)(i.GlobalLayoutRouterContext);
    (0, d.useContext)(h.NavigationPromisesContext);
    if (!f) {
      throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", {
        value: "E473",
        enumerable: false,
        configurable: true
      });
    }
    let p = n !== null ? n : (0, d.use)(c.unresolvedThenable);
    let y = p.prefetchRsc !== null ? p.prefetchRsc : p.rsc;
    let m = (0, d.useDeferredValue)(p.rsc, y);
    if ((0, v.isDeferredRsc)(m)) {
      let e = (0, d.use)(m);
      if (e === null) {
        (0, d.use)(c.unresolvedThenable);
      }
      s = e;
    } else {
      if (m === null) {
        (0, d.use)(c.unresolvedThenable);
      }
      s = m;
    }
    let b = s;
    return <i.LayoutRouterContext.Provider value={{
      parentTree: e,
      parentCacheNode: p,
      parentSegmentPath: t,
      parentParams: l,
      parentLoadingData: null,
      debugNameContext: r,
      url: u,
      isActive: a
    }}>{b}</i.LayoutRouterContext.Provider>;
  }
  function C({
    loading: e,
    children: t
  }) {
    let r = (0, d.use)(i.LayoutRouterContext);
    if (r === null) {
      return t;
    } else {
      return <i.LayoutRouterContext.Provider value={{
        parentTree: r.parentTree,
        parentCacheNode: r.parentCacheNode,
        parentSegmentPath: r.parentSegmentPath,
        parentParams: r.parentParams,
        parentLoadingData: e,
        debugNameContext: r.debugNameContext,
        url: r.url,
        isActive: r.isActive
      }}>{t}</i.LayoutRouterContext.Provider>;
    }
  }
  function R({
    name: e,
    loading: t,
    children: r
  }) {
    if (t !== null) {
      let n = t[0];
      let l = t[1];
      let u = t[2];
      return <d.Suspense name={e} fallback={<o.Fragment>{l}{u}{n}</o.Fragment>}>{r}</d.Suspense>;
    }
    return <o.Fragment>{r}</o.Fragment>;
  }
  function T({
    parallelRouterKey: e,
    error: t,
    errorStyles: r,
    errorScripts: n,
    templateStyles: l,
    templateScripts: u,
    template: a,
    notFound: s,
    forbidden: p,
    unauthorized: h,
    segmentViewBoundaries: v
  }) {
    let g = (0, d.useContext)(i.LayoutRouterContext);
    if (!g) {
      throw Object.defineProperty(Error("invariant expected layout router to be mounted"), "__NEXT_ERROR_CODE", {
        value: "E56",
        enumerable: false,
        configurable: true
      });
    }
    let {
      parentTree: j,
      parentCacheNode: C,
      parentSegmentPath: S,
      parentParams: M,
      parentLoadingData: E,
      url: N,
      isActive: F,
      debugNameContext: A
    } = g;
    let B = j[0];
    let D = S === null ? [e] : S.concat([B, e]);
    let L = j[1][e];
    let H = C.slots;
    if (L === undefined || H === null) {
      (0, d.use)(c.unresolvedThenable);
    }
    let w = L[0];
    let k = H[e] ?? null;
    let U = (0, b.createRouterCacheKey)(w, true);
    let V = (0, _.useRouterBFCache)(L, k, U);
    let I = [];
    do {
      let e = V.tree;
      let d = V.cacheNode;
      let c = V.stateKey;
      let b = e[0];
      let _ = M;
      if (Array.isArray(b)) {
        let e = b[0];
        let t = b[1];
        let r = b[2];
        let n = (0, P.getParamValueFromCacheKey)(t, r);
        if (n !== null) {
          _ = {
            ...M,
            [e]: n
          };
        }
      }
      let v = function (e) {
        if (e === "/") {
          return "/";
        }
        if (typeof e == "string") {
          if (e === "(__SLOT__)") {
            return;
          } else {
            return e + "/";
          }
        }
        return e[1] + "/";
      }(b);
      let g = v ?? A;
      let j = v === undefined ? undefined : A;
      let C = <O cacheNode={d}><f.ErrorBoundary errorComponent={t} errorStyles={r} errorScripts={n}><R name={j} loading={E}><m.HTTPAccessFallbackBoundary notFound={s} forbidden={p} unauthorized={h}><y.RedirectBoundary><_Component5 url={N} tree={e} params={_} cacheNode={d} segmentPath={D} debugNameContext={g} isActive={F && c === U} />{null}</y.RedirectBoundary></m.HTTPAccessFallbackBoundary></R></f.ErrorBoundary>{null}</O>;
      let T = <i.TemplateContext.Provider value={C} key={c}>{l}{u}{a}</i.TemplateContext.Provider>;
      I.push(T);
      V = V.next;
    } while (V !== null);
    return I;
  }
  if ((typeof r.default == "function" || typeof r.default == "object" && r.default !== null) && r.default.__esModule === undefined) {
    Object.defineProperty(r.default, "__esModule", {
      value: true
    });
    Object.assign(r.default, r);
    t.exports = r.default;
  }
}, 73400, (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: true
  });
  Object.defineProperty(r, "default", {
    enumerable: true,
    get: function () {
      return o;
    }
  });
  let n = e.r(33558);
  let l = e.r(66497);
  let u = n._(e.r(10977));
  let a = e.r(12793);
  function o() {
    let e = (0, u.useContext)(a.TemplateContext);
    return <l.Fragment>{e}</l.Fragment>;
  }
  if ((typeof r.default == "function" || typeof r.default == "object" && r.default !== null) && r.default.__esModule === undefined) {
    Object.defineProperty(r.default, "__esModule", {
      value: true
    });
    Object.assign(r.default, r);
    t.exports = r.default;
  }
}, 41100, (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: true
  });
  Object.defineProperty(r, "createRenderParamsFromClient", {
    enumerable: true,
    get: function () {
      return l;
    }
  });
  let n = new WeakMap();
  function l(e) {
    let t = n.get(e);
    if (t) {
      return t;
    }
    let r = Promise.resolve(e);
    n.set(e, r);
    return r;
  }
  if ((typeof r.default == "function" || typeof r.default == "object" && r.default !== null) && r.default.__esModule === undefined) {
    Object.defineProperty(r.default, "__esModule", {
      value: true
    });
    Object.assign(r.default, r);
    t.exports = r.default;
  }
}, 87695, (e, t, r) => {
  "use strict";

  e.i(93677);
  Object.defineProperty(r, "__esModule", {
    value: true
  });
  Object.defineProperty(r, "createRenderParamsFromClient", {
    enumerable: true,
    get: function () {
      return n;
    }
  });
  let n = e.r(41100).createRenderParamsFromClient;
  if ((typeof r.default == "function" || typeof r.default == "object" && r.default !== null) && r.default.__esModule === undefined) {
    Object.defineProperty(r.default, "__esModule", {
      value: true
    });
    Object.assign(r.default, r);
    t.exports = r.default;
  }
}, 34335, (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: true
  });
  Object.defineProperty(r, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function () {
      return l;
    }
  });
  let n = new WeakMap();
  function l(e) {
    let t = n.get(e);
    if (t) {
      return t;
    }
    let r = Promise.resolve(e);
    n.set(e, r);
    return r;
  }
  if ((typeof r.default == "function" || typeof r.default == "object" && r.default !== null) && r.default.__esModule === undefined) {
    Object.defineProperty(r.default, "__esModule", {
      value: true
    });
    Object.assign(r.default, r);
    t.exports = r.default;
  }
}, 20445, (e, t, r) => {
  "use strict";

  e.i(93677);
  Object.defineProperty(r, "__esModule", {
    value: true
  });
  Object.defineProperty(r, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function () {
      return n;
    }
  });
  let n = e.r(34335).createRenderSearchParamsFromClient;
  if ((typeof r.default == "function" || typeof r.default == "object" && r.default !== null) && r.default.__esModule === undefined) {
    Object.defineProperty(r.default, "__esModule", {
      value: true
    });
    Object.assign(r.default, r);
    t.exports = r.default;
  }
}, 16659, (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: true
  });
  var n = {
    createClientParams: function () {
      return u.createRenderParamsFromClient;
    },
    createClientSearchParams: function () {
      return a.createRenderSearchParamsFromClient;
    }
  };
  for (var l in n) {
    Object.defineProperty(r, l, {
      enumerable: true,
      get: n[l]
    });
  }
  let u = e.r(87695);
  let a = e.r(20445);
  if ((typeof r.default == "function" || typeof r.default == "object" && r.default !== null) && r.default.__esModule === undefined) {
    Object.defineProperty(r.default, "__esModule", {
      value: true
    });
    Object.assign(r.default, r);
    t.exports = r.default;
  }
}, 57304, (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: true
  });
  Object.defineProperty(r, "IconMark", {
    enumerable: true,
    get: function () {
      return l;
    }
  });
  let n = e.r(66497);
  let l = () => typeof window !== "undefined" ? null : <meta name="«nxt-icon»" />;
}, 97709, (e, t, r) => {
  "use strict";

  function n(e, t = {}) {
    if (t.onlyHashChange) {
      e();
      return;
    }
    let r = document.documentElement;
    if (r.dataset.scrollBehavior !== "smooth") {
      e();
      return;
    }
    let l = r.style.scrollBehavior;
    r.style.scrollBehavior = "auto";
    if (!t.dontForceLayout) {
      r.getClientRects();
    }
    e();
    r.style.scrollBehavior = l;
  }
  e.i(93677);
  Object.defineProperty(r, "__esModule", {
    value: true
  });
  Object.defineProperty(r, "disableSmoothScrollDuringRouteTransition", {
    enumerable: true,
    get: function () {
      return n;
    }
  });
}]);
