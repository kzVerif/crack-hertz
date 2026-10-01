(globalThis.TURBOPACK ||= []).push([typeof document == "object" ? document.currentScript : undefined, 38785, (e, r, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = {
    WarningIcon: function () {
      return u;
    },
    errorStyles: function () {
      return l;
    },
    errorThemeCss: function () {
      return a;
    }
  };
  for (var o in n) {
    Object.defineProperty(t, o, {
      enumerable: true,
      get: n[o]
    });
  }
  e.r(51432);
  let i = e.r(66497);
  e.r(10977);
  let l = {
    container: {
      fontFamily: "system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    card: {
      marginTop: "-32px",
      maxWidth: "325px",
      padding: "32px 28px",
      textAlign: "left"
    },
    icon: {
      marginBottom: "24px"
    },
    title: {
      fontSize: "24px",
      fontWeight: 500,
      letterSpacing: "-0.02em",
      lineHeight: "32px",
      margin: "0 0 12px 0",
      color: "var(--next-error-title)"
    },
    message: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21px",
      margin: "0 0 20px 0",
      color: "var(--next-error-message)"
    },
    form: {
      margin: 0
    },
    buttonGroup: {
      display: "flex",
      gap: "8px",
      alignItems: "center"
    },
    button: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: "32px",
      padding: "0 12px",
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "20px",
      borderRadius: "6px",
      cursor: "pointer",
      color: "var(--next-error-btn-text)",
      background: "var(--next-error-btn-bg)",
      border: "var(--next-error-btn-border)"
    },
    buttonSecondary: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: "32px",
      padding: "0 12px",
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "20px",
      borderRadius: "6px",
      cursor: "pointer",
      color: "var(--next-error-btn-secondary-text)",
      background: "var(--next-error-btn-secondary-bg)",
      border: "var(--next-error-btn-secondary-border)"
    },
    digestFooter: {
      position: "fixed",
      bottom: "32px",
      left: "0",
      right: "0",
      textAlign: "center",
      fontFamily: "ui-monospace,SFMono-Regular,\"SF Mono\",Menlo,Consolas,monospace",
      fontSize: "12px",
      lineHeight: "18px",
      fontWeight: 400,
      margin: "0",
      color: "var(--next-error-digest)"
    }
  };
  let a = `
:root {
  --next-error-bg: #fff;
  --next-error-text: #171717;
  --next-error-title: #171717;
  --next-error-message: #171717;
  --next-error-digest: #666666;
  --next-error-btn-text: #fff;
  --next-error-btn-bg: #171717;
  --next-error-btn-border: none;
  --next-error-btn-secondary-text: #171717;
  --next-error-btn-secondary-bg: transparent;
  --next-error-btn-secondary-border: 1px solid rgba(0,0,0,0.08);
}
@media (prefers-color-scheme: dark) {
  :root {
    --next-error-bg: #0a0a0a;
    --next-error-text: #ededed;
    --next-error-title: #ededed;
    --next-error-message: #ededed;
    --next-error-digest: #a0a0a0;
    --next-error-btn-text: #0a0a0a;
    --next-error-btn-bg: #ededed;
    --next-error-btn-border: none;
    --next-error-btn-secondary-text: #ededed;
    --next-error-btn-secondary-bg: transparent;
    --next-error-btn-secondary-border: 1px solid rgba(255,255,255,0.14);
  }
}
body { margin: 0; color: var(--next-error-text); background: var(--next-error-bg); }
`.replace(/\n\s*/g, "");
  function u() {
    return <svg width="32" height="32" viewBox="-0.2 -1.5 32 32" fill="none" style={l.icon}><path d="M16.9328 0C18.0839 0.000116771 19.1334 0.658832 19.634 1.69531L31.4299 26.1309C32.0708 27.4588 31.1036 28.9999 29.6291 29H2.00215C0.527541 29 -0.439628 27.4588 0.201371 26.1309L11.9973 1.69531C12.4979 0.658823 13.5474 7.75066e-05 14.6984 0H16.9328ZM3.59493 26H28.0363L16.9328 3H14.6984L3.59493 26ZM15.8156 19C16.9202 19.0001 17.8156 19.8955 17.8156 21C17.8156 22.1045 16.9202 22.9999 15.8156 23C14.7111 23 13.8156 22.1046 13.8156 21C13.8156 19.8954 14.7111 19 15.8156 19ZM17.3156 16.5H14.3156V8.5H17.3156V16.5Z" fill="var(--next-error-title)" /></svg>;
  }
  if ((typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && t.default.__esModule === undefined) {
    Object.defineProperty(t.default, "__esModule", {
      value: true
    });
    Object.assign(t.default, t);
    r.exports = t.default;
  }
}, 76920, (e, r, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "default", {
    enumerable: true,
    get: function () {
      return l;
    }
  });
  e.r(51432);
  let n = e.r(66497);
  e.r(10977);
  let o = e.r(98726);
  let i = e.r(38785);
  let l = function ({
    error: e
  }) {
    let r = e?.digest;
    let t = !!r;
    (0, o.handleISRError)({
      error: e
    });
    return <html id="__next_error__"><head><style dangerouslySetInnerHTML={{
          __html: i.errorThemeCss
        }} /></head><body><div style={i.errorStyles.container}><div style={i.errorStyles.card}><i.WarningIcon /><h1 style={i.errorStyles.title}>This page couldn’t load</h1><p style={i.errorStyles.message}>{t ? "A server error occurred. Reload to try again." : "Reload to try again, or go back."}</p><div style={i.errorStyles.buttonGroup}><form style={i.errorStyles.form}><button type="submit" style={i.errorStyles.button}>Reload</button></form>{!t && <button type="button" style={i.errorStyles.buttonSecondary} onClick={() => {
                if (window.history.length > 1) {
                  window.history.back();
                } else {
                  window.location.href = "/";
                }
              }}>Back</button>}</div></div></div>{r && <p style={i.errorStyles.digestFooter}>ERROR {r}</p>}</body></html>;
  };
  if ((typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && t.default.__esModule === undefined) {
    Object.defineProperty(t.default, "__esModule", {
      value: true
    });
    Object.assign(t.default, t);
    r.exports = t.default;
  }
}, 53354, (e, r, t) => {
  "use strict";

  e.i(93677);
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = {
    ErrorBoundary: function () {
      return _;
    },
    ErrorBoundaryHandler: function () {
      return _Component;
    }
  };
  for (var o in n) {
    Object.defineProperty(t, o, {
      enumerable: true,
      get: n[o]
    });
  }
  let i = e.r(33558);
  let l = e.r(66497);
  let a = i._(e.r(10977));
  let u = e.r(7784);
  let d = e.r(64285);
  e.r(43141);
  let s = e.r(98726);
  let c = e.r(69186);
  let f = e.r(12793);
  let p = typeof window !== "undefined" && (0, c.isBot)(window.navigator.userAgent);
  class _Component extends a.default.Component {
    static {
      this.contextType = f.AppRouterContext;
    }
    constructor(e) {
      super(e);
      this.reset = () => {
        this.setState({
          error: null
        });
      };
      this.retry = () => {
        (0, a.startTransition)(() => {
          this.context?.refresh();
          this.reset();
        });
      };
      this.state = {
        error: null,
        previousPathname: this.props.pathname
      };
    }
    static getDerivedStateFromError(e) {
      if ((0, d.isNextRouterError)(e)) {
        throw e;
      }
      return {
        error: {
          thrownValue: e
        }
      };
    }
    static getDerivedStateFromProps(e, r) {
      let {
        error: t
      } = r;
      if (e.pathname !== r.previousPathname && r.error) {
        return {
          error: null,
          previousPathname: e.pathname
        };
      } else {
        return {
          error: r.error,
          previousPathname: e.pathname
        };
      }
    }
    render() {
      if (this.state.error && !p) {
        let e = this.state.error.thrownValue;
        (0, s.handleISRError)({
          error: e
        });
        const Component = this.props.errorComponent;
        return <l.Fragment>{this.props.errorStyles}{this.props.errorScripts}<Component error={e} reset={this.reset} retry={this.retry} /></l.Fragment>;
      }
      return this.props.children;
    }
  }
  function _({
    errorComponent: e,
    errorStyles: r,
    errorScripts: t,
    children: n
  }) {
    let o = (0, u.useUntrackedPathname)();
    if (e) {
      return <_Component pathname={o} errorComponent={e} errorStyles={r} errorScripts={t}>{n}</_Component>;
    } else {
      return <l.Fragment>{n}</l.Fragment>;
    }
  }
  if ((typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && t.default.__esModule === undefined) {
    Object.defineProperty(t.default, "__esModule", {
      value: true
    });
    Object.assign(t.default, t);
    r.exports = t.default;
  }
}, 98726, (e, r, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "handleISRError", {
    enumerable: true,
    get: function () {
      return o;
    }
  });
  let n = e.r(57807);
  function o({
    error: e
  }) {
    if (n.workAsyncStorage) {
      let r = n.workAsyncStorage.getStore();
      if (r?.isStaticGeneration) {
        if (e) {
          console.error(e);
        }
        throw e;
      }
    }
  }
  if ((typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && t.default.__esModule === undefined) {
    Object.defineProperty(t.default, "__esModule", {
      value: true
    });
    Object.assign(t.default, t);
    r.exports = t.default;
  }
}, 43141, (e, r, t) => {
  "use strict";

  e.i(93677);
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = {
    handleHardNavError: function () {
      return l;
    },
    useNavFailureHandler: function () {
      return a;
    }
  };
  for (var o in n) {
    Object.defineProperty(t, o, {
      enumerable: true,
      get: n[o]
    });
  }
  e.r(10977);
  let i = e.r(73496);
  function l(e) {
    return typeof window !== "undefined" && !!window.next.__pendingUrl && (0, i.createHrefFromUrl)(new URL(window.location.href)) !== (0, i.createHrefFromUrl)(window.next.__pendingUrl) && (console.error("Error occurred during navigation, falling back to hard navigation", e), window.location.href = window.next.__pendingUrl.toString(), true);
  }
  function a() {}
  if ((typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && t.default.__esModule === undefined) {
    Object.defineProperty(t.default, "__esModule", {
      value: true
    });
    Object.assign(t.default, t);
    r.exports = t.default;
  }
}, 7784, (e, r, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "useUntrackedPathname", {
    enumerable: true,
    get: function () {
      return l;
    }
  });
  let n = e.r(10977);
  let o = e.r(93824);
  let i = e.r(57807);
  function l() {
    if (!function () {
      if (typeof window === "undefined") {
        let e = i.workUnitAsyncStorage.getStore();
        if (!e) {
          return false;
        }
        switch (e.type) {
          case "prerender":
          case "prerender-client":
          case "prerender-ppr":
          case "validation-client":
            let r = e.fallbackRouteParams;
            return !!r && r.size > 0;
        }
      }
      return false;
    }()) {
      return (0, n.useContext)(o.PathnameContext);
    } else {
      return null;
    }
  }
  if ((typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && t.default.__esModule === undefined) {
    Object.defineProperty(t.default, "__esModule", {
      value: true
    });
    Object.assign(t.default, t);
    r.exports = t.default;
  }
}, 26044, (e, r, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = {
    RedirectBoundary: function () {
      return p;
    },
    RedirectErrorBoundary: function () {
      return _Component3;
    }
  };
  for (var o in n) {
    Object.defineProperty(t, o, {
      enumerable: true,
      get: n[o]
    });
  }
  let i = e.r(33558);
  let l = e.r(66497);
  let a = i._(e.r(10977));
  let u = e.r(96232);
  let d = e.r(84291);
  let s = e.r(39266);
  function _Component2({
    redirect: e,
    reset: r,
    redirectType: t
  }) {
    let n = (0, u.useRouter)();
    (0, a.useEffect)(() => {
      a.default.startTransition(() => {
        if (t === "push") {
          n.push(e, {});
        } else {
          n.replace(e, {});
        }
        r();
      });
    }, [e, t, r, n]);
    return null;
  }
  class _Component3 extends a.default.Component {
    constructor(e) {
      super(e);
      this.state = {
        redirect: null,
        redirectType: null
      };
    }
    static getDerivedStateFromError(e) {
      if ((0, s.isRedirectError)(e)) {
        let r = (0, d.getURLFromRedirectError)(e);
        let t = (0, d.getRedirectTypeFromError)(e);
        if ("handled" in e) {
          return {
            redirect: null,
            redirectType: null
          };
        } else {
          return {
            redirect: r,
            redirectType: t
          };
        }
      }
      throw e;
    }
    render() {
      let {
        redirect: e,
        redirectType: r
      } = this.state;
      if (e !== null && r !== null) {
        return <_Component2 redirect={e} redirectType={r} reset={() => this.setState({
          redirect: null
        })} />;
      } else {
        return this.props.children;
      }
    }
  }
  function p({
    children: e
  }) {
    let r = (0, u.useRouter)();
    return <_Component3 router={r}>{e}</_Component3>;
  }
  if ((typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && t.default.__esModule === undefined) {
    Object.defineProperty(t.default, "__esModule", {
      value: true
    });
    Object.assign(t.default, t);
    r.exports = t.default;
  }
}, 75761, (e, r, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "createRouterCacheKey", {
    enumerable: true,
    get: function () {
      return o;
    }
  });
  let n = e.r(9004);
  function o(e, r = false) {
    if (Array.isArray(e)) {
      return `${e[0]}|${e[1]}|${e[2]}`;
    } else if (r && e.startsWith(n.PAGE_SEGMENT_KEY)) {
      return n.PAGE_SEGMENT_KEY;
    } else {
      return e;
    }
  }
  if ((typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && t.default.__esModule === undefined) {
    Object.defineProperty(t.default, "__esModule", {
      value: true
    });
    Object.assign(t.default, t);
    r.exports = t.default;
  }
}, 27764, (e, r, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "unresolvedThenable", {
    enumerable: true,
    get: function () {
      return n;
    }
  });
  let n = {
    then: () => {}
  };
  if ((typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && t.default.__esModule === undefined) {
    Object.defineProperty(t.default, "__esModule", {
      value: true
    });
    Object.assign(t.default, t);
    r.exports = t.default;
  }
}, 51330, (e, r, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = {
    METADATA_BOUNDARY_NAME: function () {
      return i;
    },
    OUTLET_BOUNDARY_NAME: function () {
      return a;
    },
    ROOT_LAYOUT_BOUNDARY_NAME: function () {
      return u;
    },
    VIEWPORT_BOUNDARY_NAME: function () {
      return l;
    }
  };
  for (var o in n) {
    Object.defineProperty(t, o, {
      enumerable: true,
      get: n[o]
    });
  }
  let i = "__next_metadata_boundary__";
  let l = "__next_viewport_boundary__";
  let a = "__next_outlet_boundary__";
  let u = "__next_root_layout_boundary__";
}, 79101, (e, r, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = {
    MetadataBoundary: function () {
      return a;
    },
    OutletBoundary: function () {
      return d;
    },
    RootLayoutBoundary: function () {
      return s;
    },
    ViewportBoundary: function () {
      return u;
    }
  };
  for (var o in n) {
    Object.defineProperty(t, o, {
      enumerable: true,
      get: n[o]
    });
  }
  let i = e.r(51330);
  let l = {
    [i.METADATA_BOUNDARY_NAME]: function ({
      children: e
    }) {
      return e;
    },
    [i.VIEWPORT_BOUNDARY_NAME]: function ({
      children: e
    }) {
      return e;
    },
    [i.OUTLET_BOUNDARY_NAME]: function ({
      children: e
    }) {
      return e;
    },
    [i.ROOT_LAYOUT_BOUNDARY_NAME]: function ({
      children: e
    }) {
      return e;
    }
  };
  let a = l[i.METADATA_BOUNDARY_NAME.slice(0)];
  let u = l[i.VIEWPORT_BOUNDARY_NAME.slice(0)];
  let d = l[i.OUTLET_BOUNDARY_NAME.slice(0)];
  let s = l[i.ROOT_LAYOUT_BOUNDARY_NAME.slice(0)];
}]);
