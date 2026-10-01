module.exports = [93695, (a, b, c) => {
  b.exports = a.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));
}, 59002, a => {
  a.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis.NEXT_CLIENT_ASSET_SUFFIX || ""));
}, 73764, a => {
  "use strict";

  let b = {
    src: a.i(59002).default,
    width: 256,
    height: 256
  };
  a.s(["default", 0, b]);
}, 81086, (a, b, c) => {
  "use strict";

  c._ = function (a) {
    if (a && a.__esModule) {
      return a;
    } else {
      return {
        default: a
      };
    }
  };
}, 7856, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    WarningIcon: function () {
      return i;
    },
    errorStyles: function () {
      return g;
    },
    errorThemeCss: function () {
      return h;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  a.r(81086);
  let f = a.r(39100);
  a.r(48390);
  let g = {
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
  let h = `
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
  function i() {
    return <svg width="32" height="32" viewBox="-0.2 -1.5 32 32" fill="none" style={g.icon}><path d="M16.9328 0C18.0839 0.000116771 19.1334 0.658832 19.634 1.69531L31.4299 26.1309C32.0708 27.4588 31.1036 28.9999 29.6291 29H2.00215C0.527541 29 -0.439628 27.4588 0.201371 26.1309L11.9973 1.69531C12.4979 0.658823 13.5474 7.75066e-05 14.6984 0H16.9328ZM3.59493 26H28.0363L16.9328 3H14.6984L3.59493 26ZM15.8156 19C16.9202 19.0001 17.8156 19.8955 17.8156 21C17.8156 22.1045 16.9202 22.9999 15.8156 23C14.7111 23 13.8156 22.1046 13.8156 21C13.8156 19.8954 14.7111 19 15.8156 19ZM17.3156 16.5H14.3156V8.5H17.3156V16.5Z" fill="var(--next-error-title)" /></svg>;
  }
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 42732, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  Object.defineProperty(c, "default", {
    enumerable: true,
    get: function () {
      return f;
    }
  });
  a.r(81086);
  let d = a.r(39100);
  a.r(48390);
  let e = a.r(7856);
  let f = function () {
    return <html id="__next_error__"><head><title>500: This page couldn’t load</title><style dangerouslySetInnerHTML={{
          __html: e.errorThemeCss
        }} /></head><body><div style={e.errorStyles.container}><div style={e.errorStyles.card}><e.WarningIcon /><h1 style={e.errorStyles.title}>This page couldn’t load</h1><p style={e.errorStyles.message}>A server error occurred. Reload to try again.</p><form style={e.errorStyles.form}><button type="submit" style={e.errorStyles.button}>Reload</button></form></div></div></body></html>;
  };
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 64179, function (a) {
  a.n(a.i(42732));
}, 16422, a => {
  "use strict";

  var b = a.i(17672);
  var c = a.i(99216);
  var d = a.i(86120);
  a.i(50214);
  let e = (0, b.instrumentModuleGetter)(() => a.r(73764));
  let f = (0, b.instrumentModuleGetter)(() => a.r(56457));
  let g = ["", {
    children: ["__PAGE__", {}, {
      metadata: {},
      page: [(0, b.instrumentModuleGetter)(() => a.r(64179)), "[project]/client/node_modules/next/dist/client/components/builtin/app-error.js"]
    }, []]
  }, {
    metadata: {
      icon: [async () => {
        let a = (0, d.interopDefault)(await e());
        return [{
          url: `/favicon.ico?${a.src.split("/").splice(-1)[0]}`,
          sizes: `${a.width}x${a.height}`,
          type: "image/x-icon"
        }];
      }]
    },
    "global-error": [f, "[project]/client/node_modules/next/dist/client/components/builtin/global-error.js"]
  }, []];
  let h = a.r.bind(a);
  let i = a.l.bind(a);
  let j = (0, c.createAppPageEntrypoint)({
    tree: g,
    page: "/_global-error/page",
    pathname: "/_global-error",
    require: h,
    loadChunk: i,
    interopDefault: d.interopDefault
  });
  let k = j.__next_app__;
  let l = j.routeModule;
  let m = j.handler;
  a.s(["__next_app__", 0, k, "handler", 0, m, "routeModule", 0, l], 51751);
  a.i(51751);
  var n = a.i(7124);
  a.s(["ClientPageRoot", () => n.ClientPageRoot, "ClientSegmentRoot", () => n.ClientSegmentRoot, "Fragment", () => n.Fragment, "HTTPAccessFallbackBoundary", () => n.HTTPAccessFallbackBoundary, "InstantValidation", () => n.InstantValidation, "LayoutRouter", () => n.LayoutRouter, "LoadingBoundaryProvider", () => n.LoadingBoundaryProvider, "Postpone", () => n.Postpone, "RenderFromTemplateContext", () => n.RenderFromTemplateContext, "RootLayoutBoundary", () => n.RootLayoutBoundary, "SegmentViewNode", () => n.SegmentViewNode, "SegmentViewStateNode", () => n.SegmentViewStateNode, "__next_app__", 0, k, "captureOwnerStack", () => n.captureOwnerStack, "collectPrefetchHints", () => n.collectPrefetchHints, "collectSegmentData", () => n.collectSegmentData, "createElement", () => n.createElement, "createMetadataComponents", () => n.createMetadataComponents, "createPrerenderParamsForClientSegment", () => n.createPrerenderParamsForClientSegment, "createPrerenderSearchParamsForClientPage", () => n.createPrerenderSearchParamsForClientPage, "createServerParamsForServerSegment", () => n.createServerParamsForServerSegment, "createServerSearchParamsForServerPage", () => n.createServerSearchParamsForServerPage, "createTemporaryReferenceSet", () => n.createTemporaryReferenceSet, "decodeAction", () => n.decodeAction, "decodeFormState", () => n.decodeFormState, "decodeReply", () => n.decodeReply, "handler", 0, m, "isEmptyHTMLPrelude", () => n.isEmptyHTMLPrelude, "patchFetch", () => n.patchFetch, "preconnect", () => n.preconnect, "preloadFont", () => n.preloadFont, "preloadStyle", () => n.preloadStyle, "prerender", () => n.prerender, "prerenderToNodeStream", () => n.prerenderToNodeStream, "renderToPipeableStream", () => n.renderToPipeableStream, "renderToReadableStream", () => n.renderToReadableStream, "routeModule", 0, l, "serverHooks", () => n.serverHooks, "taintObjectReference", () => n.taintObjectReference], 16422);
}];

//# sourceMappingURL=%5Broot-of-the-server%5D__1wfihc-._.js.map
