module.exports = [8118, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    DynamicServerError: function () {
      return g;
    },
    isDynamicServerError: function () {
      return h;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  let f = "DYNAMIC_SERVER_USAGE";
  class g extends Error {
    constructor(a) {
      super(`Dynamic server usage: ${a}`);
      this.description = a;
      this.digest = f;
    }
  }
  function h(a) {
    return typeof a == "object" && a !== null && "digest" in a && typeof a.digest == "string" && a.digest === f;
  }
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 8349, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    StaticGenBailoutError: function () {
      return g;
    },
    isStaticGenBailoutError: function () {
      return h;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  let f = "NEXT_STATIC_GEN_BAILOUT";
  class g extends Error {
    constructor(...a) {
      super(...a);
      this.code = f;
    }
  }
  function h(a) {
    return typeof a == "object" && a !== null && "code" in a && a.code === f;
  }
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 85423, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    getRedirectError: function () {
      return i;
    },
    getRedirectStatusCodeFromError: function () {
      return n;
    },
    getRedirectTypeFromError: function () {
      return m;
    },
    getURLFromRedirectError: function () {
      return l;
    },
    permanentRedirect: function () {
      return k;
    },
    redirect: function () {
      return j;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  let f = a.r(41325);
  let g = a.r(24388);
  let h = a.r(14077);
  function i(a, b, c = f.RedirectStatusCode.TemporaryRedirect) {
    let d = Object.defineProperty(Error(g.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: false,
      configurable: true
    });
    d.digest = `${g.REDIRECT_ERROR_CODE};${b};${a};${c};`;
    return d;
  }
  function j(a, b) {
    throw i(a, b ??= h.actionAsyncStorage?.getStore()?.isAction ? "push" : "replace", f.RedirectStatusCode.TemporaryRedirect);
  }
  function k(a, b = "replace") {
    throw i(a, b, f.RedirectStatusCode.PermanentRedirect);
  }
  function l(a) {
    if ((0, g.isRedirectError)(a)) {
      return a.digest.split(";").slice(2, -2).join(";");
    } else {
      return null;
    }
  }
  function m(a) {
    if (!(0, g.isRedirectError)(a)) {
      throw Object.defineProperty(Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
        value: "E260",
        enumerable: false,
        configurable: true
      });
    }
    return a.digest.split(";", 2)[1];
  }
  function n(a) {
    if (!(0, g.isRedirectError)(a)) {
      throw Object.defineProperty(Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
        value: "E260",
        enumerable: false,
        configurable: true
      });
    }
    return Number(a.digest.split(";").at(-2));
  }
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 67209, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    HTTPAccessErrorStatus: function () {
      return f;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function () {
      return h;
    },
    getAccessFallbackErrorTypeByStatus: function () {
      return k;
    },
    getAccessFallbackHTTPStatus: function () {
      return j;
    },
    isHTTPAccessFallbackError: function () {
      return i;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  let f = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
  };
  let g = new Set(Object.values(f));
  let h = "NEXT_HTTP_ERROR_FALLBACK";
  function i(a) {
    if (typeof a != "object" || a === null || !("digest" in a) || typeof a.digest != "string") {
      return false;
    }
    let [b, c] = a.digest.split(";");
    return b === h && g.has(Number(c));
  }
  function j(a) {
    return Number(a.digest.split(";")[1]);
  }
  function k(a) {
    switch (a) {
      case 401:
        return "unauthorized";
      case 403:
        return "forbidden";
      case 404:
        return "not-found";
      default:
        return;
    }
  }
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 77335, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  Object.defineProperty(c, "notFound", {
    enumerable: true,
    get: function () {
      return f;
    }
  });
  let d = a.r(67209);
  let e = `${d.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
  function f() {
    let a = Object.defineProperty(Error(e), "__NEXT_ERROR_CODE", {
      value: "E1041",
      enumerable: false,
      configurable: true
    });
    a.digest = e;
    throw a;
  }
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 90459, (a, b, c) => {
  "use strict";

  function d() {
    throw Object.defineProperty(Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
      value: "E488",
      enumerable: false,
      configurable: true
    });
  }
  Object.defineProperty(c, "__esModule", {
    value: true
  });
  Object.defineProperty(c, "forbidden", {
    enumerable: true,
    get: function () {
      return d;
    }
  });
  a.r(67209).HTTP_ERROR_FALLBACK_ERROR_CODE;
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 86895, (a, b, c) => {
  "use strict";

  function d() {
    throw Object.defineProperty(Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
      value: "E411",
      enumerable: false,
      configurable: true
    });
  }
  Object.defineProperty(c, "__esModule", {
    value: true
  });
  Object.defineProperty(c, "unauthorized", {
    enumerable: true,
    get: function () {
      return d;
    }
  });
  a.r(67209).HTTP_ERROR_FALLBACK_ERROR_CODE;
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 19883, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  Object.defineProperty(c, "isPostpone", {
    enumerable: true,
    get: function () {
      return e;
    }
  });
  let d = Symbol.for("react.postpone");
  function e(a) {
    return typeof a == "object" && a !== null && a.$$typeof === d;
  }
}, 69551, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  Object.defineProperty(c, "isNextRouterError", {
    enumerable: true,
    get: function () {
      return f;
    }
  });
  let d = a.r(67209);
  let e = a.r(24388);
  function f(a) {
    return (0, e.isRedirectError)(a) || (0, d.isHTTPAccessFallbackError)(a);
  }
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 76608, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  Object.defineProperty(c, "unstable_rethrow", {
    enumerable: true,
    get: function () {
      return function a(b) {
        if ((0, g.isNextRouterError)(b) || (0, f.isBailoutToCSRError)(b) || (0, i.isDynamicServerError)(b) || (0, h.isDynamicPostpone)(b) || (0, e.isPostpone)(b) || (0, d.isHangingPromiseRejectionError)(b) || (0, h.isPrerenderInterruptedError)(b)) {
          throw b;
        }
        if (b instanceof Error && "cause" in b) {
          a(b.cause);
        }
      };
    }
  });
  let d = a.r(24894);
  let e = a.r(19883);
  let f = a.r(71095);
  let g = a.r(69551);
  let h = a.r(87353);
  let i = a.r(8118);
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 77823, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    ReadonlyURLSearchParams: function () {
      return f.ReadonlyURLSearchParams;
    },
    RedirectType: function () {
      return m;
    },
    forbidden: function () {
      return i.forbidden;
    },
    notFound: function () {
      return h.notFound;
    },
    permanentRedirect: function () {
      return g.permanentRedirect;
    },
    redirect: function () {
      return g.redirect;
    },
    unauthorized: function () {
      return j.unauthorized;
    },
    unstable_isUnrecognizedActionError: function () {
      return l;
    },
    unstable_rethrow: function () {
      return k.unstable_rethrow;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  let f = a.r(49650);
  let g = a.r(85423);
  let h = a.r(77335);
  let i = a.r(90459);
  let j = a.r(86895);
  let k = a.r(76608);
  function l() {
    throw Object.defineProperty(Error("`unstable_isUnrecognizedActionError` can only be used on the client."), "__NEXT_ERROR_CODE", {
      value: "E776",
      enumerable: false,
      configurable: true
    });
  }
  let m = {
    push: "push",
    replace: "replace"
  };
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 78179, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    ReadonlyURLSearchParams: function () {
      return h.ReadonlyURLSearchParams;
    },
    RedirectType: function () {
      return m.RedirectType;
    },
    ServerInsertedHTMLContext: function () {
      return k.ServerInsertedHTMLContext;
    },
    forbidden: function () {
      return m.forbidden;
    },
    notFound: function () {
      return m.notFound;
    },
    permanentRedirect: function () {
      return m.permanentRedirect;
    },
    redirect: function () {
      return m.redirect;
    },
    unauthorized: function () {
      return m.unauthorized;
    },
    unstable_isUnrecognizedActionError: function () {
      return l.unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function () {
      return m.unstable_rethrow;
    },
    useParams: function () {
      return t;
    },
    usePathname: function () {
      return r;
    },
    useRouter: function () {
      return s;
    },
    useSearchParams: function () {
      return q;
    },
    useSelectedLayoutSegment: function () {
      return v;
    },
    useSelectedLayoutSegments: function () {
      return u;
    },
    useServerInsertedHTML: function () {
      return k.useServerInsertedHTML;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  let f = a.r(49883)._(a.r(9651));
  let g = a.r(45524);
  let h = a.r(90346);
  let i = a.r(20760);
  let j = a.r(65177);
  let k = a.r(31756);
  let l = a.r(27122);
  let m = a.r(77823);
  let {
    instrumentParamsForClientValidation: n,
    instrumentSearchParamsForClientValidation: o,
    expectCompleteParamsInClientValidation: p
  } = {};
  function q() {
    j.useDynamicSearchParams?.("useSearchParams()");
    let a = (0, f.useContext)(h.SearchParamsContext);
    return (0, f.useMemo)(() => a ? new h.ReadonlyURLSearchParams(a) : null, [a]);
  }
  function r() {
    j.useDynamicRouteParams?.("usePathname()");
    return (0, f.useContext)(h.PathnameContext);
  }
  function s() {
    let a = (0, f.useContext)(g.AppRouterContext);
    if (a === null) {
      throw Object.defineProperty(Error("invariant expected app router to be mounted"), "__NEXT_ERROR_CODE", {
        value: "E238",
        enumerable: false,
        configurable: true
      });
    }
    let b = (0, f.useContext)(g.LayoutRouterContext);
    let c = b?.parentCacheNode.bfcacheId ?? 0;
    return (0, f.useMemo)(() => ({
      back: a.back,
      forward: a.forward,
      refresh: a.refresh,
      hmrRefresh: a.hmrRefresh,
      push: a.push,
      replace: a.replace,
      prefetch: a.prefetch,
      experimental_gesturePush: a.experimental_gesturePush,
      bfcacheId: "_b_" + c + "_"
    }), [a, c]);
  }
  function t() {
    j.useDynamicRouteParams?.("useParams()");
    return (0, f.useContext)(h.PathParamsContext);
  }
  function u(a = "children") {
    j.useDynamicRouteParams?.("useSelectedLayoutSegments()");
    let b = (0, f.useContext)(g.LayoutRouterContext);
    if (b) {
      return (0, i.getSelectedLayoutSegmentPath)(b.parentTree, a);
    } else {
      return null;
    }
  }
  function v(a = "children") {
    j.useDynamicRouteParams?.("useSelectedLayoutSegment()");
    (0, f.useContext)(h.NavigationPromisesContext);
    let b = u(a);
    return (0, i.computeSelectedLayoutSegment)(b, a);
  }
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 54949, (a, b, c) => {
  b.exports = a.r(78179);
}, 27122, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    UnrecognizedActionError: function () {
      return f;
    },
    unstable_isUnrecognizedActionError: function () {
      return g;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  class f extends Error {
    constructor(...a) {
      super(...a);
      this.name = "UnrecognizedActionError";
    }
  }
  function g(a) {
    return !!a && typeof a == "object" && !!(a instanceof f);
  }
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 49650, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  Object.defineProperty(c, "ReadonlyURLSearchParams", {
    enumerable: true,
    get: function () {
      return e;
    }
  });
  class d extends Error {
    constructor() {
      super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
      Object.defineProperty(this, "__NEXT_ERROR_CODE", {
        value: "E1174",
        enumerable: false,
        configurable: true
      });
    }
  }
  class e extends URLSearchParams {
    append() {
      throw new d();
    }
    delete() {
      throw new d();
    }
    set() {
      throw new d();
    }
    sort() {
      throw new d();
    }
  }
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 41325, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  Object.defineProperty(c, "RedirectStatusCode", {
    enumerable: true,
    get: function () {
      return e;
    }
  });
  var d;
  (d = {})[d.SeeOther = 303] = "SeeOther";
  d[d.TemporaryRedirect = 307] = "TemporaryRedirect";
  d[d.PermanentRedirect = 308] = "PermanentRedirect";
  var e = d;
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 24388, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    REDIRECT_ERROR_CODE: function () {
      return g;
    },
    isRedirectError: function () {
      return h;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  let f = a.r(41325);
  let g = "NEXT_REDIRECT";
  function h(a) {
    if (typeof a != "object" || a === null || !("digest" in a) || typeof a.digest != "string") {
      return false;
    }
    let b = a.digest.split(";");
    let [c, d] = b;
    let e = b.slice(2, -2).join(";");
    let h = Number(b.at(-2));
    return c === g && (d === "replace" || d === "push") && typeof e == "string" && !isNaN(h) && h in f.RedirectStatusCode;
  }
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 87353, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d;
  var e;
  var f;
  var g = {
    DynamicHoleKind: function () {
      return af;
    },
    Postpone: function () {
      return H;
    },
    PreludeState: function () {
      return am;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function () {
      return G;
    },
    abortOnSynchronousPlatformIOAccess: function () {
      return F;
    },
    accessedDynamicData: function () {
      return P;
    },
    annotateDynamicAccess: function () {
      return V;
    },
    consumeDynamicAccess: function () {
      return Q;
    },
    createDynamicTrackingState: function () {
      return x;
    },
    createDynamicValidationState: function () {
      return y;
    },
    createHangingInputAbortSignal: function () {
      return T;
    },
    createInstantValidationState: function () {
      return ag;
    },
    createRenderInBrowserAbortSignal: function () {
      return S;
    },
    formatDynamicAPIAccesses: function () {
      return R;
    },
    getFirstDynamicReason: function () {
      return A;
    },
    getNavigationDisallowedDynamicReasons: function () {
      return ar;
    },
    getStaticShellDisallowedDynamicReasons: function () {
      return aq;
    },
    isDynamicPostpone: function () {
      return K;
    },
    isPrerenderInterruptedError: function () {
      return O;
    },
    logDisallowedDynamicError: function () {
      return an;
    },
    markCurrentScopeAsDynamic: function () {
      return B;
    },
    postponeWithTracking: function () {
      return I;
    },
    throwIfDisallowedDynamic: function () {
      return ap;
    },
    throwIfSyncIOUsed: function () {
      return ao;
    },
    throwToInterruptStaticGeneration: function () {
      return C;
    },
    trackAllowedDynamicAccess: function () {
      return ae;
    },
    trackDynamicDataInDynamicRender: function () {
      return D;
    },
    trackDynamicHoleInNavigation: function () {
      return ah;
    },
    trackDynamicHoleInRuntimeShell: function () {
      return aj;
    },
    trackDynamicHoleInStaticShell: function () {
      return ak;
    },
    trackThrownErrorInNavigation: function () {
      return ai;
    },
    useDynamicRouteParams: function () {
      return W;
    },
    useDynamicSearchParams: function () {
      return X;
    }
  };
  for (var h in g) {
    Object.defineProperty(c, h, {
      enumerable: true,
      get: g[h]
    });
  }
  let i = (d = a.r(9651)) && d.__esModule ? d : {
    default: d
  };
  let j = a.r(8118);
  let k = a.r(8349);
  let l = a.r(32319);
  let m = a.r(56704);
  let n = a.r(24894);
  let o = a.r(50165);
  let p = a.r(30251);
  let q = a.r(71095);
  let r = a.r(64326);
  let s = a.r(10062);
  let t = a.r(45973);
  let u = a.r(78489);
  let v = a.r(81915);
  let w = typeof i.default.unstable_postpone == "function";
  function x(a) {
    return {
      isDebugDynamicAccesses: a,
      dynamicAccesses: [],
      syncDynamicErrorWithStack: null,
      syncDynamicErrorWithStackPostMicrotask: false
    };
  }
  function y() {
    return {
      hasSuspenseAboveBody: false,
      hasDynamicMetadata: false,
      dynamicMetadata: null,
      hasDynamicViewport: false,
      hasAllowedDynamic: false,
      dynamicErrors: []
    };
  }
  function z(a) {
    if (a.syncDynamicErrorWithStackPostMicrotask) {
      return null;
    } else {
      return a.syncDynamicErrorWithStack;
    }
  }
  function A(a) {
    var b;
    if ((b = a.dynamicAccesses[0]) == null) {
      return undefined;
    } else {
      return b.expression;
    }
  }
  function B(a, b, c) {
    if (b) {
      switch (b.type) {
        case "cache":
        case "unstable-cache":
        case "private-cache":
          return;
      }
    }
    if (!a.forceDynamic && !a.forceStatic) {
      if (a.dynamicShouldError) {
        throw Object.defineProperty(new k.StaticGenBailoutError(`Route ${a.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${c}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
          value: "E553",
          enumerable: false,
          configurable: true
        });
      }
      if (b) {
        switch (b.type) {
          case "prerender-ppr":
            return I(a.route, c, b.dynamicTracking);
          case "prerender-legacy":
            b.revalidate = 0;
            let d = Object.defineProperty(new j.DynamicServerError(`Route ${a.route} couldn't be rendered statically because it used ${c}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
              value: "E550",
              enumerable: false,
              configurable: true
            });
            a.dynamicUsageDescription = c;
            a.dynamicUsageStack = d.stack;
            throw d;
        }
      }
    }
  }
  function C(a, b, c) {
    let d = Object.defineProperty(new j.DynamicServerError(`Route ${b.route} couldn't be rendered statically because it used \`${a}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
      value: "E558",
      enumerable: false,
      configurable: true
    });
    c.revalidate = 0;
    b.dynamicUsageDescription = a;
    b.dynamicUsageStack = d.stack;
    throw d;
  }
  function D(a) {
    switch (a.type) {
      case "cache":
      case "unstable-cache":
      case "private-cache":
        return;
    }
  }
  function E(a, b, c) {
    let d = N(`Route ${a} needs to bail out of prerendering at this point because it used ${b}.`);
    c.controller.abort(d);
    let e = c.dynamicTracking;
    if (e) {
      e.dynamicAccesses.push({
        stack: e.isDebugDynamicAccesses ? Error().stack : undefined,
        expression: b
      });
    }
  }
  function F(a, b, c, d) {
    let e = d.dynamicTracking;
    if (e && e.syncDynamicErrorWithStack === null) {
      e.syncDynamicErrorWithStack = c;
      queueMicrotask(() => {
        e.syncDynamicErrorWithStackPostMicrotask = true;
      });
    }
    E(a, b, d);
  }
  function G(a, b, c, d) {
    (0, n.trackRuntimeDataAccessed)(d);
    if (d.controller.signal.aborted === false) {
      E(a, b, d);
      let e = d.dynamicTracking;
      if (e && e.syncDynamicErrorWithStack === null) {
        e.syncDynamicErrorWithStack = c;
      }
    }
    throw N(`Route ${a} needs to bail out of prerendering at this point because it used ${b}.`);
  }
  function H({
    reason: a,
    route: b
  }) {
    let c = l.workUnitAsyncStorage.getStore();
    I(b, a, c && c.type === "prerender-ppr" ? c.dynamicTracking : null);
  }
  function I(a, b, c) {
    (function () {
      if (!w) {
        throw Object.defineProperty(Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
          value: "E224",
          enumerable: false,
          configurable: true
        });
      }
    })();
    if (c) {
      c.dynamicAccesses.push({
        stack: c.isDebugDynamicAccesses ? Error().stack : undefined,
        expression: b
      });
    }
    i.default.unstable_postpone(J(a, b));
  }
  function J(a, b) {
    return `Route ${a} needs to bail out of prerendering at this point because it used ${b}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
  }
  function K(a) {
    return typeof a == "object" && a !== null && typeof a.message == "string" && L(a.message);
  }
  function L(a) {
    return a.includes("needs to bail out of prerendering at this point because it used") && a.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
  }
  if (L(J("%%%", "^^^")) === false) {
    throw Object.defineProperty(Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
      value: "E296",
      enumerable: false,
      configurable: true
    });
  }
  let M = "NEXT_PRERENDER_INTERRUPTED";
  function N(a) {
    let b = Object.defineProperty(Error(a), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: false,
      configurable: true
    });
    b.digest = M;
    return b;
  }
  function O(a) {
    return typeof a == "object" && a !== null && a.digest === M && "name" in a && "message" in a && a instanceof Error;
  }
  function P(a) {
    return a.length > 0;
  }
  function Q(a, b) {
    a.dynamicAccesses.push(...b.dynamicAccesses);
    return a.dynamicAccesses;
  }
  function R(a) {
    return a.filter(a => typeof a.stack == "string" && a.stack.length > 0).map(({
      expression: a,
      stack: b
    }) => {
      b = b.split("\n").slice(4).filter(a => !a.includes("node_modules/next/") && !a.includes(" (<anonymous>)") && !a.includes(" (node:")).join("\n");
      return `Dynamic API Usage Debug - ${a}:
${b}`;
    });
  }
  function S() {
    let a = new AbortController();
    a.abort(Object.defineProperty(new q.BailoutToCSRError("Render in Browser"), "__NEXT_ERROR_CODE", {
      value: "E721",
      enumerable: false,
      configurable: true
    }));
    return a.signal;
  }
  function T(a) {
    switch (a.type) {
      case "prerender":
      case "prerender-runtime":
        let b = new AbortController();
        if (a.cacheSignal) {
          a.cacheSignal.inputReady().then(() => {
            b.abort();
          });
        } else {
          let c = (0, l.getStagedRenderingController)(a);
          if (c && c.finalStage !== null) {
            c.waitForStage(c.finalStage).then(() => (0, p.scheduleOnNextTick)(() => b.abort()), U);
          } else {
            (0, p.scheduleOnNextTick)(() => b.abort());
          }
        }
        return b.signal;
      case "prerender-client":
      case "validation-client":
      case "prerender-ppr":
      case "prerender-legacy":
      case "request":
      case "cache":
      case "private-cache":
      case "unstable-cache":
      case "generate-static-params":
        return;
    }
  }
  function U() {}
  function V(a, b) {
    let c = b.dynamicTracking;
    if (c) {
      c.dynamicAccesses.push({
        stack: c.isDebugDynamicAccesses ? Error().stack : undefined,
        expression: a
      });
    }
  }
  function W(a) {
    let b = m.workAsyncStorage.getStore();
    let c = l.workUnitAsyncStorage.getStore();
    if (b && c) {
      switch (c.type) {
        case "prerender-client":
          {
            let d = c.fallbackRouteParams;
            if (d && d.size > 0) {
              i.default.use((0, n.makeClientHookHangingPromise)(c.renderSignal, new n.ClientHookDynamicError(b.route, a)));
            }
            break;
          }
        case "prerender":
          throw Object.defineProperty(new s.InvariantError(`\`${a}\` was called from a Server Component. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E795",
            enumerable: false,
            configurable: true
          });
        case "prerender-ppr":
          {
            let d = c.fallbackRouteParams;
            if (d && d.size > 0) {
              return I(b.route, a, c.dynamicTracking);
            }
            break;
          }
        case "validation-client":
        case "prerender-legacy":
        case "request":
        case "unstable-cache":
          break;
        case "prerender-runtime":
          throw Object.defineProperty(new s.InvariantError(`\`${a}\` was called during a runtime prerender. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E771",
            enumerable: false,
            configurable: true
          });
        case "cache":
        case "private-cache":
          throw Object.defineProperty(new s.InvariantError(`\`${a}\` was called inside a cache scope. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E745",
            enumerable: false,
            configurable: true
          });
        case "generate-static-params":
          throw Object.defineProperty(new s.InvariantError(`\`${a}\` was called in \`generateStaticParams\`. Next.js should be preventing ${a} from being included in server component files statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E1130",
            enumerable: false,
            configurable: true
          });
      }
    }
  }
  function X(a) {
    let b = m.workAsyncStorage.getStore();
    let c = l.workUnitAsyncStorage.getStore();
    if (b) {
      if (!c) {
        (0, l.throwForMissingRequestStore)(a);
      }
      switch (c.type) {
        case "validation-client":
        case "request":
          return;
        case "prerender-client":
          i.default.use((0, n.makeClientHookHangingPromise)(c.renderSignal, new n.ClientHookDynamicError(b.route, a)));
          break;
        case "prerender-legacy":
        case "prerender-ppr":
          if (b.forceStatic) {
            return;
          }
          throw Object.defineProperty(new q.BailoutToCSRError(a), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
          });
        case "prerender":
        case "prerender-runtime":
          throw Object.defineProperty(new s.InvariantError(`\`${a}\` was called from a Server Component. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E795",
            enumerable: false,
            configurable: true
          });
        case "cache":
        case "unstable-cache":
        case "private-cache":
          throw Object.defineProperty(new s.InvariantError(`\`${a}\` was called inside a cache scope. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E745",
            enumerable: false,
            configurable: true
          });
        case "generate-static-params":
          throw Object.defineProperty(new s.InvariantError(`\`${a}\` was called in \`generateStaticParams\`. Next.js should be preventing ${a} from being included in server component files statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E1130",
            enumerable: false,
            configurable: true
          });
      }
    }
  }
  let Y = /\n\s+at Suspense \(<anonymous>\)/;
  let Z = RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${o.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`);
  let $ = RegExp(`\\n\\s+at ${o.METADATA_BOUNDARY_NAME}[\\n\\s]`);
  let _ = RegExp(`\\n\\s+at ${o.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
  let aa = RegExp(`\\n\\s+at ${o.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
  let ab = RegExp(`\\n\\s+at ${t.INSTANT_VALIDATION_BOUNDARY_NAME}[\\n\\s]`);
  let ac = RegExp(`\\n\\s+at ${t.INSTANT_SLOT_MARKER_PREFIX}(\\d+)${t.INSTANT_SLOT_MARKER_SUFFIX}[\\n\\s]`);
  function ad(a, b) {
    if (Z.test(a)) {
      b.hasSuspenseAboveBody = true;
    }
  }
  function ae(a, b, c, d, e) {
    let f = z(e);
    if (aa.test(c)) {
      ad(c, d);
      return;
    }
    if ($.test(c)) {
      d.hasDynamicMetadata = true;
      return;
    }
    if (_.test(c)) {
      d.hasDynamicViewport = true;
      return;
    }
    if (Z.test(c)) {
      d.hasAllowedDynamic = true;
      d.hasSuspenseAboveBody = true;
      return;
    }
    if (Y.test(c)) {
      d.hasAllowedDynamic = true;
      return;
    } else if (f) {
      d.dynamicErrors.push(f);
      return;
    }
    if ((0, n.isClientHookDynamicError)(a)) {
      d.dynamicErrors.push(al(a, c, null));
      return;
    }
    let g = al((0, r.createDynamicOrRuntimeBodyError)(b.route), c, null);
    d.dynamicErrors.push(g);
  }
  (e = {})[e.Link = 1] = "Link";
  e[e.Runtime = 2] = "Runtime";
  e[e.Dynamic = 3] = "Dynamic";
  var af = e;
  function ag(a) {
    return {
      hasDynamicMetadata: false,
      hasAllowedClientDynamicAboveBoundary: false,
      dynamicMetadata: null,
      hasDynamicViewport: false,
      hasAllowedDynamic: false,
      dynamicErrors: [],
      validationPreventingErrors: [],
      thrownErrorsOutsideBoundary: [],
      slotStacks: a
    };
  }
  function ah(a, b, c, d, e, f, g) {
    let h = z(e);
    if (aa.test(c)) {
      return;
    }
    let i = function (a, b) {
      let {
        slotStacks: c
      } = b;
      if (c.length > 1) {
        let b = ac.exec(a);
        if (b) {
          let a = c[parseInt(b[1], 10) + 1];
          if (a != null) {
            return a;
          }
        }
      }
      return c[0] ?? null;
    }(c, d);
    if ($.test(c)) {
      d.dynamicMetadata = al(f === 1 ? (0, r.createLinkMetadataError)(b.route) : f === 2 ? (0, r.createRuntimeMetadataError)(b.route) : (0, r.createDynamicMetadataError)(b.route), c, i);
      return;
    }
    if (_.test(c)) {
      let a = al(f === 1 ? (0, r.createLinkViewportError)(b.route) : f === 2 ? (0, r.createRuntimeViewportError)(b.route) : (0, r.createDynamicViewportError)(b.route), c, i);
      d.dynamicErrors.push(a);
      return;
    }
    let j = ab.exec(c);
    if (j) {
      let a = Y.exec(c);
      if (a && a.index < j.index) {
        d.hasAllowedDynamic = true;
        return;
      }
    } else if ((0, u.allRequiredBoundariesRendered)(g)) {
      d.hasAllowedClientDynamicAboveBoundary = true;
      d.hasAllowedDynamic = true;
      return;
    } else {
      let a = al(Object.defineProperty(Error(`Route "${b.route}": Could not validate \`instant\` because a Client Component in a parent segment prevented the page from rendering.`), "__NEXT_ERROR_CODE", {
        value: "E1331",
        enumerable: false,
        configurable: true
      }), c, i);
      d.validationPreventingErrors.push(a);
      return;
    }
    if (h) {
      if (i !== null && h.cause === undefined) {
        h.cause = i();
      }
      d.dynamicErrors.push(h);
      return;
    }
    if ((0, n.isClientHookDynamicError)(a)) {
      d.dynamicErrors.push(al(a, c, i));
      return;
    }
    let k = al(f === 1 ? (0, r.createLinkBodyErrorInNavigation)(b.route) : f === 2 ? (0, r.createRuntimeBodyErrorInNavigation)(b.route) : (0, r.createDynamicBodyErrorInNavigation)(b.route), c, i);
    d.dynamicErrors.push(k);
  }
  function ai(a, b, c, d) {
    let e = ab.exec(d);
    if (e) {
      let f = Y.exec(d);
      if (f && f.index < e.index) {
        return;
      }
      let g = al(Object.defineProperty(Error(`Route "${a.route}": Could not validate \`instant\` because an error prevented the target segment from rendering.`, {
        cause: c
      }), "__NEXT_ERROR_CODE", {
        value: "E1338",
        enumerable: false,
        configurable: true
      }), d, null);
      b.validationPreventingErrors.push(g);
    } else {
      let a = al(Object.defineProperty(Error("An error occurred while attempting to validate instant UI. This error may be preventing the validation from completing.", {
        cause: c
      }), "__NEXT_ERROR_CODE", {
        value: "E1118",
        enumerable: false,
        configurable: true
      }), d, null);
      b.thrownErrorsOutsideBoundary.push(a);
    }
  }
  function aj(a, b, c, d, e) {
    let f = z(e);
    if (aa.test(c)) {
      ad(c, d);
      return;
    }
    if ($.test(c)) {
      d.dynamicMetadata = al((0, r.createDynamicMetadataError)(b.route), c, null);
      return;
    }
    if (_.test(c)) {
      let a = al((0, r.createDynamicViewportError)(b.route), c, null);
      d.dynamicErrors.push(a);
      return;
    }
    if (Z.test(c)) {
      d.hasAllowedDynamic = true;
      d.hasSuspenseAboveBody = true;
      return;
    }
    if (Y.test(c)) {
      d.hasAllowedDynamic = true;
      return;
    } else if (f) {
      d.dynamicErrors.push(f);
      return;
    }
    if ((0, n.isClientHookDynamicError)(a)) {
      d.dynamicErrors.push(al(a, c, null));
      return;
    }
    let g = al((0, r.createDynamicBodyError)(b.route), c, null);
    d.dynamicErrors.push(g);
  }
  function ak(a, b, c, d, e) {
    let f = z(e);
    if (aa.test(c)) {
      ad(c, d);
      return;
    }
    if ($.test(c)) {
      d.dynamicMetadata = al((0, r.createRuntimeMetadataError)(b.route), c, null);
      return;
    }
    if (_.test(c)) {
      let a = al((0, r.createRuntimeViewportError)(b.route), c, null);
      d.dynamicErrors.push(a);
      return;
    }
    if (Z.test(c)) {
      d.hasAllowedDynamic = true;
      d.hasSuspenseAboveBody = true;
      return;
    }
    if (Y.test(c)) {
      d.hasAllowedDynamic = true;
      return;
    } else if (f) {
      d.dynamicErrors.push(f);
      return;
    }
    if ((0, n.isClientHookDynamicError)(a)) {
      d.dynamicErrors.push(al(a, c, null));
      return;
    }
    let g = al((0, r.createRuntimeBodyError)(b.route), c, null);
    d.dynamicErrors.push(g);
  }
  function al(a, b, c) {
    if (c !== null) {
      a.cause = c();
    }
    a.stack = a.name + ": " + a.message + b;
    return a;
  }
  (f = {})[f.Full = 0] = "Full";
  f[f.Empty = 1] = "Empty";
  f[f.Errored = 2] = "Errored";
  var am = f;
  function an(a, b) {
    console.error(b);
    (0, r.logBuildDebugHint)(a.route);
  }
  function ao(a, b) {
    if (b.syncDynamicErrorWithStack) {
      an(a, b.syncDynamicErrorWithStack);
      throw new k.StaticGenBailoutError();
    }
  }
  function ap(a, b, c, d, e) {
    ao(a, d);
    if (b === 0 && c.hasAllowedDynamic === false && c.hasDynamicMetadata) {
      console.error((0, r.createDynamicOrRuntimeMetadataError)(a.route).message);
      throw new k.StaticGenBailoutError();
    }
    if (!e && !c.hasSuspenseAboveBody && b !== 0) {
      let d = c.dynamicErrors;
      if (d.length > 0) {
        for (let b = 0; b < d.length; b++) {
          an(a, d[b]);
        }
        throw new k.StaticGenBailoutError();
      }
      if (c.hasDynamicViewport) {
        console.error((0, r.createDynamicOrRuntimeViewportError)(a.route).message);
        throw new k.StaticGenBailoutError();
      }
      if (b === 1) {
        console.error(`Route "${a.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
        throw new k.StaticGenBailoutError();
      }
    }
  }
  function aq(a, b, c, d) {
    if (b === 0 && c.hasAllowedDynamic === false && c.dynamicErrors.length === 0 && c.dynamicMetadata) {
      return [c.dynamicMetadata];
    }
    if (d || c.hasSuspenseAboveBody) {
      return [];
    }
    if (b !== 0) {
      let d = c.dynamicErrors;
      if (d.length > 0) {
        return d;
      }
      if (b === 1) {
        return [Object.defineProperty(new s.InvariantError(`Route "${a.route}" did not produce a static shell and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
          value: "E936",
          enumerable: false,
          configurable: true
        })];
      }
    }
    return [];
  }
  function ar(a, b, c, d, e, f) {
    if (d) {
      let {
        missingSampleErrors: a
      } = d;
      if (a.length > 0) {
        return a;
      }
    }
    let {
      validationPreventingErrors: g
    } = c;
    if (g.length > 0) {
      return g;
    }
    if (b !== 0) {
      let d = c.dynamicErrors;
      if (d.length > 0) {
        return d;
      }
      if (b === 1 && !c.hasAllowedClientDynamicAboveBoundary && (0, u.allRequiredBoundariesRendered)(e)) {
        return Object.defineProperty(new s.InvariantError(`Route "${a.route}" failed to render during instant validation and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
          value: "E1055",
          enumerable: false,
          configurable: true
        });
      }
    } else {
      let a = c.dynamicErrors;
      if (a.length > 0) {
        return a;
      }
      if (c.hasAllowedDynamic === false && c.dynamicMetadata) {
        return [c.dynamicMetadata];
      }
    }
    if (!(0, u.allRequiredBoundariesRendered)(e)) {
      let {
        thrownErrorsOutsideBoundary: b
      } = c;
      let d = c.slotStacks[0];
      if (b.length === 0) {
        let b = [];
        for (let [a, c] of e.requiredIds) {
          if (!e.renderedIds.has(a)) {
            for (let a of c) {
              let c = a.replace(/^\[project\][\\/]?/, "").replace(process.cwd() + "/", "").replace(process.cwd() + "\\", "");
              b.push(c);
            }
          }
        }
        b.sort();
        return (0, v.createUnrenderedSegmentError)(a.route, b);
      }
      if (b.length === 1) {
        let c = `Route "${a.route}": Could not validate \`instant\` because the target segment was prevented from rendering, likely due to the following error.`;
        let e = d !== null ? d() : Error();
        e.name = "Error";
        e.message = c;
        return AggregateError([e, b[0]]);
      }
      {
        let c = `Route "${a.route}": Could not validate \`instant\` because the target segment was prevented from rendering, likely due to one of the following errors.`;
        let e = d !== null ? d() : Error();
        e.name = "Error";
        e.message = c;
        return AggregateError([e, ...b]);
      }
    }
    return [];
  }
}, 65177, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    useDynamicRouteParams: function () {
      return f.useDynamicRouteParams;
    },
    useDynamicSearchParams: function () {
      return f.useDynamicSearchParams;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  let f = a.r(87353);
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 88166, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d;
  var e;
  var f = {
    RENDER_STAGE_ADVANCE_ORDER: function () {
      return k;
    },
    RenderStage: function () {
      return j;
    },
    StagedRenderingController: function () {
      return o;
    },
    SyncIOMode: function () {
      return n;
    },
    getNextStage: function () {
      return l;
    },
    isAdvanceableRenderStage: function () {
      return m;
    }
  };
  for (var g in f) {
    Object.defineProperty(c, g, {
      enumerable: true,
      get: f[g]
    });
  }
  let h = a.r(10062);
  let i = a.r(46507);
  (d = {})[d.Before = 1] = "Before";
  d[d.ShellStatic = 11] = "ShellStatic";
  d[d.Static = 13] = "Static";
  d[d.ShellRuntime = 21] = "ShellRuntime";
  d[d.Runtime = 23] = "Runtime";
  d[d.Dynamic = 30] = "Dynamic";
  d[d.Abandoned = 40] = "Abandoned";
  var j = d;
  let k = [11, 13, 21, 23, 30];
  function l(a) {
    return k[k.indexOf(a) + 1];
  }
  function m(a) {
    return a > 1 && a <= 30;
  }
  (e = {})[e.Untracked = 1] = "Untracked";
  e[e.AllowedInRuntimeOrDynamic = 2] = "AllowedInRuntimeOrDynamic";
  e[e.AllowedInDynamic = 3] = "AllowedInDynamic";
  var n = e;
  class o {
    constructor({
      abortSignal: a,
      abandonController: b,
      syncIO: c,
      finalStage: d
    }) {
      this.currentStage = 1;
      this.syncInterruptReason = null;
      this.triggers = {
        11: q(),
        13: q(),
        21: q(),
        23: q(),
        30: q()
      };
      this.abortSignal = a;
      this.abandonController = b;
      this.syncIOMode = c;
      this.finalStage = d;
      if (a) {
        a.addEventListener("abort", () => {
          let {
            reason: b
          } = a;
          for (let a of Object.values(this.triggers)) {
            var c;
            var d;
            c = a;
            d = b;
            if (c.state === "pending") {
              c.state = "cancelled";
              c._listeners.length = 0;
              c.promise.catch(p);
              c._rejectPromise(d);
            }
          }
        }, {
          once: true
        });
      }
      if (b) {
        b.signal.addEventListener("abort", () => {
          this.abandonRender();
        }, {
          once: true
        });
      }
    }
    onStage(a, b) {
      var c;
      var d;
      c = this.triggers[a];
      d = b;
      if (c.state === "pending") {
        c._listeners.push(d);
      } else {
        d();
      }
    }
    shouldTrackSyncInterrupt() {
      if (this.syncIOMode === 1) {
        return false;
      }
      switch (this.currentStage) {
        case 1:
          return false;
        case 11:
        case 13:
          return true;
        case 21:
        case 23:
          switch (this.syncIOMode) {
            case 2:
              return false;
            case 3:
              return true;
          }
        case 30:
        case 40:
          return false;
        default:
          this.currentStage;
          return false;
      }
    }
    syncInterruptCurrentStageWithReason(a) {
      let {
        currentStage: b
      } = this;
      if (b !== 1 && b !== 30 && b !== 40) {
        if (this.abandonController) {
          this.abandonController.abort();
          return;
        }
        if (this.abortSignal) {
          this.syncInterruptReason = a;
          this.currentStage = 40;
          return;
        }
        this.syncInterruptReason = a;
        this.advanceStage(30);
      }
    }
    getSyncInterruptReason() {
      return this.syncInterruptReason;
    }
    getStageEndTime(a) {
      return this.triggers[l(a)].triggeredAt ?? Infinity;
    }
    abandonRender() {
      let {
        currentStage: a
      } = this;
      if (a === 1) {
        throw Object.defineProperty(new h.InvariantError("A render that hasn't started yet cannot be abandoned"), "__NEXT_ERROR_CODE", {
          value: "E1300",
          enumerable: false,
          configurable: true
        });
      }
      if (a === 30 || a === 40) {
        return;
      }
      let b = k.indexOf(a) + 1;
      let c = k.indexOf(30);
      for (let a = b; a < c; a++) {
        this.resolveStage(k[a]);
      }
      this.currentStage = 40;
    }
    advanceStage(a) {
      if (this.finalStage !== null && a > this.finalStage) {
        throw Object.defineProperty(new h.InvariantError(`Attempted to advance to stage ${j[a]} but the render is limited to ${j[this.finalStage]}`), "__NEXT_ERROR_CODE", {
          value: "E1302",
          enumerable: false,
          configurable: true
        });
      }
      let {
        currentStage: b
      } = this;
      if (b === 30 || b === 40 || a <= b) {
        return;
      }
      this.currentStage = a;
      let c = b === 1 ? 0 : k.indexOf(b) + 1;
      let d = k.indexOf(a);
      for (let a = c; a <= d; a++) {
        this.resolveStage(k[a]);
      }
    }
    resolveStage(a) {
      var b = this.triggers[a];
      if (b.state === "pending") {
        b.state = "triggered";
        b.triggeredAt = performance.now() + performance.timeOrigin;
        try {
          let {
            _listeners: a
          } = b;
          for (let b = 0; b < a.length; b++) {
            a[b]();
          }
          a.length = 0;
        } finally {
          b._resolvePromise();
        }
      }
    }
    getStagePromise(a) {
      return this.triggers[a].promise;
    }
    waitForStage(a) {
      return this.getStagePromise(a);
    }
    delayUntilStage(a, b, c) {
      let d = this.getStagePromise(a).then(() => c);
      if (this.abortSignal) {
        d.catch(p);
      }
      return d;
    }
  }
  function p() {}
  function q() {
    let {
      promise: a,
      resolve: b,
      reject: c
    } = (0, i.createPromiseWithResolvers)();
    return {
      state: "pending",
      triggeredAt: null,
      promise: a,
      _listeners: [],
      _resolvePromise: b,
      _rejectPromise: c
    };
  }
}, 24894, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    ClientHookDynamicError: function () {
      return k;
    },
    RENDER_STAGES_BY_DATA_KIND: function () {
      return A;
    },
    applyOwnerStack: function () {
      return B;
    },
    isClientHookDynamicError: function () {
      return l;
    },
    isHangingPromiseRejectionError: function () {
      return g;
    },
    makeClientHookHangingPromise: function () {
      return v;
    },
    makeDevtoolsIOAwarePromise: function () {
      return z;
    },
    makeDynamicHangingPromise: function () {
      return n;
    },
    makeFallbackParamsHangingPromise: function () {
      return q;
    },
    makePromiseFromTrigger: function () {
      return y;
    },
    makeRuntimeHangingPromise: function () {
      return p;
    },
    makeStageHangingPromise: function () {
      return r;
    },
    makeUntrackedHangingPromise: function () {
      return o;
    },
    trackFallbackParamsAccessed: function () {
      return t;
    },
    trackRuntimeDataAccessed: function () {
      return s;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  let f = a.r(88166);
  function g(a) {
    return typeof a == "object" && a !== null && "digest" in a && a.digest === h;
  }
  a.r(32319);
  a.r(59043);
  let h = "HANGING_PROMISE_REJECTION";
  class i extends Error {
    constructor(a, b) {
      super(`During prerendering, ${b} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${b} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${a}".`);
      this.route = a;
      this.expression = b;
      this.digest = h;
    }
  }
  let j = "CLIENT_HOOK_DYNAMIC";
  class k extends Error {
    constructor(a, b) {
      super(`Route "${a}": Next.js encountered URL data \`${b}\` in a Client Component outside of \`<Suspense>\`.

This blocks prerendering because the value is only available at runtime.

Ways to fix this:
  - [stream] Wrap the component in \`<Suspense fallback={...}>\` so the hook value streams in after prerendering
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-client-hook`);
      this.digest = j;
      Object.defineProperty(this, "__NEXT_ERROR_CODE", {
        value: "E1433",
        enumerable: false,
        configurable: true
      });
    }
  }
  function l(a) {
    return typeof a == "object" && a !== null && "digest" in a && a.digest === j;
  }
  let m = new WeakMap();
  function n(a, b, c) {
    return w(a, new i(b, c));
  }
  function o(a, b, c) {
    return w(a, new i(b, c));
  }
  function p(a, b, c, d) {
    if (d !== null) {
      s(d);
    }
    return w(a, new i(b, c));
  }
  function q(a, b, c, d) {
    if (d !== null) {
      t(d);
    }
    return w(a, new i(b, c));
  }
  function r(a, b, c, d) {
    s(d);
    return w(a, new i(b, c));
  }
  function s(a) {
    u(a, false);
  }
  function t(a) {
    u(a, true);
  }
  function u(a, b) {
    if (a.type === "prerender") {
      var c;
      if ((c = a.runtimeDataAccessed) != null) {
        c.resolve(true);
      }
      let d = a.shouldAttemptStaticPrefetch;
      if (d !== null && (!b || !a.isFallbackUpgradeable)) {
        d.current = false;
      }
    }
  }
  function v(a, b) {
    return w(a, b);
  }
  function w(a, b) {
    if (a.aborted) {
      return Promise.reject(b);
    }
    {
      let c = new Promise((c, d) => {
        let e = d.bind(null, b);
        let f = m.get(a);
        if (f) {
          f.push(e);
        } else {
          let b = [e];
          m.set(a, b);
          a.addEventListener("abort", () => {
            for (let a = 0; a < b.length; a++) {
              b[a]();
            }
          }, {
            once: true
          });
        }
      });
      c.catch(x);
      return c;
    }
  }
  function x() {}
  function y(a, b) {
    let c = a.then(() => b);
    c.catch(x);
    return c;
  }
  function z(a, b, c) {
    if (b.stagedRendering) {
      return b.stagedRendering.delayUntilStage(c, undefined, a);
    } else {
      return new Promise(b => {
        setTimeout(() => {
          b(a);
        }, 0);
      });
    }
  }
  let A = {
    sessionData: f.RenderStage.ShellRuntime,
    staticLinkData: f.RenderStage.Static,
    runtimeLinkData: f.RenderStage.Runtime
  };
  function B(a) {
    return a;
  }
}, 50165, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    METADATA_BOUNDARY_NAME: function () {
      return f;
    },
    OUTLET_BOUNDARY_NAME: function () {
      return h;
    },
    ROOT_LAYOUT_BOUNDARY_NAME: function () {
      return i;
    },
    VIEWPORT_BOUNDARY_NAME: function () {
      return g;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  let f = "__next_metadata_boundary__";
  let g = "__next_viewport_boundary__";
  let h = "__next_outlet_boundary__";
  let i = "__next_root_layout_boundary__";
}, 30251, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    atLeastOneTask: function () {
      return h;
    },
    scheduleImmediate: function () {
      return g;
    },
    scheduleOnNextTick: function () {
      return f;
    },
    waitAtLeastOneReactRenderTask: function () {
      return i;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  let f = a => {
    Promise.resolve().then(() => {
      process.nextTick(a);
    });
  };
  let g = a => {
    setImmediate(a);
  };
  function h() {
    return new Promise(a => g(a));
  }
  function i() {
    return new Promise(a => setImmediate(a));
  }
}, 71095, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    BailoutToCSRError: function () {
      return g;
    },
    isBailoutToCSRError: function () {
      return h;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  let f = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
  class g extends Error {
    constructor(a) {
      super(`Bail out to client-side rendering: ${a}`);
      this.reason = a;
      this.digest = f;
    }
  }
  function h(a) {
    return typeof a == "object" && a !== null && "digest" in a && a.digest === f;
  }
}, 64326, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    createDynamicBodyError: function () {
      return g;
    },
    createDynamicBodyErrorInNavigation: function () {
      return j;
    },
    createDynamicMetadataError: function () {
      return n;
    },
    createDynamicOrRuntimeBodyError: function () {
      return k;
    },
    createDynamicOrRuntimeMetadataError: function () {
      return s;
    },
    createDynamicOrRuntimeViewportError: function () {
      return r;
    },
    createDynamicViewportError: function () {
      return q;
    },
    createLinkBodyErrorInNavigation: function () {
      return i;
    },
    createLinkMetadataError: function () {
      return l;
    },
    createLinkViewportError: function () {
      return o;
    },
    createRuntimeBodyError: function () {
      return f;
    },
    createRuntimeBodyErrorInNavigation: function () {
      return h;
    },
    createRuntimeMetadataError: function () {
      return m;
    },
    createRuntimeViewportError: function () {
      return p;
    },
    logBuildDebugHint: function () {
      return t;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  function f(a) {
    return Object.defineProperty(Error(`Route "${a}": Next.js encountered runtime data during prerendering.

\`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` accessed outside of \`<Suspense>\` prevents the route from being prerendered, blocking the page load and leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-runtime`), "__NEXT_ERROR_CODE", {
      value: "E1427",
      enumerable: false,
      configurable: true
    });
  }
  function g(a) {
    return Object.defineProperty(Error(`Route "${a}": Next.js encountered uncached data during prerendering.

\`fetch(...)\` or \`connection()\` accessed outside of \`<Suspense>\` prevents the route from being prerendered, blocking the page load and leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access
  - [cache] Cache the data access with \`"use cache"\` (does not apply to \`connection()\`)
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-dynamic`), "__NEXT_ERROR_CODE", {
      value: "E1440",
      enumerable: false,
      configurable: true
    });
  }
  function h(a) {
    return Object.defineProperty(Error(`Route "${a}": Next.js encountered runtime data during prerendering or a navigation.

\`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` accessed outside of \`<Suspense>\` prevents the route from being prerendered or the navigation from being instant, leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-runtime`), "__NEXT_ERROR_CODE", {
      value: "E1430",
      enumerable: false,
      configurable: true
    });
  }
  function i(a) {
    return Object.defineProperty(Error(`Route "${a}": Next.js encountered URL data during prerendering or a navigation.

\`params\` or \`searchParams\` accessed outside of \`<Suspense>\` may prevent the navigation from being instant, leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/instant-shell-url-data`), "__NEXT_ERROR_CODE", {
      value: "E1439",
      enumerable: false,
      configurable: true
    });
  }
  function j(a) {
    return Object.defineProperty(Error(`Route "${a}": Next.js encountered uncached data during prerendering or a navigation.

\`fetch(...)\` or \`connection()\` accessed outside of \`<Suspense>\` prevents the route from being prerendered or the navigation from being instant, leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access
  - [cache] Cache the data access with \`"use cache"\` (does not apply to \`connection()\`)
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-dynamic`), "__NEXT_ERROR_CODE", {
      value: "E1437",
      enumerable: false,
      configurable: true
    });
  }
  function k(a) {
    return Object.defineProperty(Error(`Route "${a}": Next.js encountered uncached or runtime data during prerendering.

\`fetch(...)\`, \`cookies()\`, \`headers()\`, \`params\`, \`searchParams\`, or \`connection()\` accessed outside of \`<Suspense>\` prevents the route from being prerendered, blocking the page load and leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access
  - [cache] For uncached data (\`fetch\`, database calls): cache the access with \`"use cache"\` (does not apply to \`connection()\`)
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-dynamic`), "__NEXT_ERROR_CODE", {
      value: "E1428",
      enumerable: false,
      configurable: true
    });
  }
  function l(a) {
    return Object.defineProperty(Error(`Route "${a}": Next.js encountered URL data in \`generateMetadata()\`.

This route's metadata is blocked, but the rest of its content can be prefetched. \`params\` or \`searchParams\` accessed in \`generateMetadata()\` prevent it from being prefetched.

Ways to fix this:
  - [static] Use a static metadata export instead of \`generateMetadata()\`
  - [dynamic] Render a marker component that calls \`await connection()\` inside \`<Suspense>\` on the page

Learn more: https://nextjs.org/docs/messages/blocking-prerender-metadata-runtime`), "__NEXT_ERROR_CODE", {
      value: "E1429",
      enumerable: false,
      configurable: true
    });
  }
  function m(a) {
    return Object.defineProperty(Error(`Route "${a}": Next.js encountered runtime data in \`generateMetadata()\`.

This route's metadata is blocked, but the rest of its content can be prerendered. \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` accessed in \`generateMetadata()\` cause it to run dynamically.

Ways to fix this:
  - [static] Use a static metadata export instead of \`generateMetadata()\`
  - [dynamic] Render a marker component that calls \`await connection()\` inside \`<Suspense>\` on the page

Learn more: https://nextjs.org/docs/messages/blocking-prerender-metadata-runtime`), "__NEXT_ERROR_CODE", {
      value: "E1423",
      enumerable: false,
      configurable: true
    });
  }
  function n(a) {
    return Object.defineProperty(Error(`Route "${a}": Next.js encountered uncached data in \`generateMetadata()\`.

This route's metadata is blocked, but the rest of its content can be prerendered. \`fetch(...)\` or \`connection()\` accessed in \`generateMetadata()\` cause it to run dynamically.

Ways to fix this:
  - [cache] Cache the metadata with \`"use cache"\` in \`generateMetadata()\` (does not apply to \`connection()\`)
  - [dynamic] Render a marker component that calls \`await connection()\` inside \`<Suspense>\` on the page

Learn more: https://nextjs.org/docs/messages/blocking-prerender-metadata-dynamic`), "__NEXT_ERROR_CODE", {
      value: "E1425",
      enumerable: false,
      configurable: true
    });
  }
  function o(a) {
    return Object.defineProperty(Error(`Route "${a}": Next.js encountered URL data in \`generateViewport()\`.

\`params\` or \`searchParams\` in \`generateViewport()\` prevents the page from being prerendered, leading to a slower user experience.

Ways to fix this:
  - [static] Use a static viewport export instead of \`generateViewport()\`
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-viewport-runtime`), "__NEXT_ERROR_CODE", {
      value: "E1431",
      enumerable: false,
      configurable: true
    });
  }
  function p(a) {
    return Object.defineProperty(Error(`Route "${a}": Next.js encountered runtime data in \`generateViewport()\`.

\`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` in \`generateViewport()\` prevents the page from being prerendered, leading to a slower user experience.

Ways to fix this:
  - [static] Use a static viewport export instead of \`generateViewport()\`
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-viewport-runtime`), "__NEXT_ERROR_CODE", {
      value: "E1424",
      enumerable: false,
      configurable: true
    });
  }
  function q(a) {
    return Object.defineProperty(Error(`Route "${a}": Next.js encountered uncached data in \`generateViewport()\`.

\`fetch(...)\` or \`connection()\` in \`generateViewport()\` prevents the page from being prerendered, leading to a slower user experience.

Ways to fix this:
  - [cache] Cache the viewport data with \`"use cache"\` in \`generateViewport()\` (does not apply to \`connection()\`)
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-viewport-dynamic`), "__NEXT_ERROR_CODE", {
      value: "E1438",
      enumerable: false,
      configurable: true
    });
  }
  function r(a) {
    return Object.defineProperty(Error(`Route "${a}": Next.js encountered uncached or runtime data in \`generateViewport()\`.

This prevents the page from being prerendered, leading to a slower user experience. Unlike metadata, viewport cannot be streamed behind \`<Suspense>\` because it affects the initial page load.

Ways to fix this:
  - [static] Use a static viewport export instead of \`generateViewport()\`
  - [cache] For uncached data (\`fetch\`, database calls): cache the viewport with \`"use cache"\` in \`generateViewport()\` (does not apply to \`connection()\`)
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-viewport-runtime`), "__NEXT_ERROR_CODE", {
      value: "E1436",
      enumerable: false,
      configurable: true
    });
  }
  function s(a) {
    return Object.defineProperty(Error(`Route "${a}": Next.js encountered uncached or runtime data in \`generateMetadata()\`.

This route's metadata is blocked, but the rest of its content can be prerendered.

Ways to fix this:
  - [static] Use a static metadata export instead of \`generateMetadata()\`
  - [cache] Cache the metadata with \`"use cache"\` in \`generateMetadata()\` (does not apply to \`connection()\`)
  - [dynamic] Render a marker component that calls \`await connection()\` inside \`<Suspense>\` on the page

Learn more: https://nextjs.org/docs/messages/blocking-prerender-metadata-runtime`), "__NEXT_ERROR_CODE", {
      value: "E1426",
      enumerable: false,
      configurable: true
    });
  }
  function t(a) {
    console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${a}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
  }
}, 45973, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    INSTANT_SLOT_MARKER_PREFIX: function () {
      return g;
    },
    INSTANT_SLOT_MARKER_SUFFIX: function () {
      return h;
    },
    INSTANT_VALIDATION_BOUNDARY_NAME: function () {
      return f;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  let f = "__next_instant_validation_boundary__";
  let g = "__next_instant_slot_";
  let h = "__";
}, 78489, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    allRequiredBoundariesRendered: function () {
      return g;
    },
    createValidationBoundaryTracking: function () {
      return f;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  function f() {
    return {
      requiredIds: new Map(),
      renderedIds: new Set()
    };
  }
  function g(a) {
    for (let b of a.requiredIds.keys()) {
      if (!a.renderedIds.has(b)) {
        return false;
      }
    }
    return true;
  }
}];

//# sourceMappingURL=097k_next_012b57j._.js.map
