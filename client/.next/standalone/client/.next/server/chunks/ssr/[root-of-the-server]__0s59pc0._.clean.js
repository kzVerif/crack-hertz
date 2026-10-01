module.exports = [93695, (a, b, c) => {
  b.exports = a.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));
}, 33946, a => {
  "use strict";

  a.s(["default", () => b]);
  let b = (0, a.i(70225).registerClientReference)(function () {
    throw Error("Attempted to call the default export of [project]/client/app/auth/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
  }, "[project]/client/app/auth/page.tsx", "default");
}, 30668, a => {
  "use strict";

  var b = a.i(33946);
  a.n(b);
}, 97366, function (a) {
  a.n(a.i(30668));
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
}, 19109, a => {
  "use strict";

  var b = a.i(17672);
  var c = a.i(99216);
  var d = a.i(86120);
  a.i(50214);
  let e = (0, b.instrumentModuleGetter)(() => a.r(73764));
  let f = (0, b.instrumentModuleGetter)(() => a.r(76744));
  let g = (0, b.instrumentModuleGetter)(() => a.r(2404));
  let h = (0, b.instrumentModuleGetter)(() => a.r(98135));
  let i = (0, b.instrumentModuleGetter)(() => a.r(79787));
  let j = (0, b.instrumentModuleGetter)(() => a.r(56457));
  let k = (0, b.instrumentModuleGetter)(() => a.r(56700));
  let l = ["", {
    children: ["auth", {
      children: ["__PAGE__", {}, {
        metadata: {},
        page: [(0, b.instrumentModuleGetter)(() => a.r(97366)), "[project]/client/app/auth/page.tsx"]
      }, []]
    }, {
      metadata: {},
      layout: [k, "[project]/client/app/auth/layout.tsx"]
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
    layout: [f, "[project]/client/app/layout.tsx"],
    "not-found": [g, "[project]/client/node_modules/next/dist/client/components/builtin/not-found.js"],
    forbidden: [h, "[project]/client/node_modules/next/dist/client/components/builtin/forbidden.js"],
    unauthorized: [i, "[project]/client/node_modules/next/dist/client/components/builtin/unauthorized.js"],
    "global-error": [j, "[project]/client/node_modules/next/dist/client/components/builtin/global-error.js"]
  }, []];
  let m = a.r.bind(a);
  let n = a.l.bind(a);
  let o = (0, c.createAppPageEntrypoint)({
    tree: l,
    page: "/auth/page",
    pathname: "/auth",
    require: m,
    loadChunk: n,
    interopDefault: d.interopDefault
  });
  let p = o.__next_app__;
  let q = o.routeModule;
  let r = o.handler;
  a.s(["__next_app__", 0, p, "handler", 0, r, "routeModule", 0, q], 81877);
  a.i(81877);
  var s = a.i(7124);
  a.s(["ClientPageRoot", () => s.ClientPageRoot, "ClientSegmentRoot", () => s.ClientSegmentRoot, "Fragment", () => s.Fragment, "HTTPAccessFallbackBoundary", () => s.HTTPAccessFallbackBoundary, "InstantValidation", () => s.InstantValidation, "LayoutRouter", () => s.LayoutRouter, "LoadingBoundaryProvider", () => s.LoadingBoundaryProvider, "Postpone", () => s.Postpone, "RenderFromTemplateContext", () => s.RenderFromTemplateContext, "RootLayoutBoundary", () => s.RootLayoutBoundary, "SegmentViewNode", () => s.SegmentViewNode, "SegmentViewStateNode", () => s.SegmentViewStateNode, "__next_app__", 0, p, "captureOwnerStack", () => s.captureOwnerStack, "collectPrefetchHints", () => s.collectPrefetchHints, "collectSegmentData", () => s.collectSegmentData, "createElement", () => s.createElement, "createMetadataComponents", () => s.createMetadataComponents, "createPrerenderParamsForClientSegment", () => s.createPrerenderParamsForClientSegment, "createPrerenderSearchParamsForClientPage", () => s.createPrerenderSearchParamsForClientPage, "createServerParamsForServerSegment", () => s.createServerParamsForServerSegment, "createServerSearchParamsForServerPage", () => s.createServerSearchParamsForServerPage, "createTemporaryReferenceSet", () => s.createTemporaryReferenceSet, "decodeAction", () => s.decodeAction, "decodeFormState", () => s.decodeFormState, "decodeReply", () => s.decodeReply, "handler", 0, r, "isEmptyHTMLPrelude", () => s.isEmptyHTMLPrelude, "patchFetch", () => s.patchFetch, "preconnect", () => s.preconnect, "preloadFont", () => s.preloadFont, "preloadStyle", () => s.preloadStyle, "prerender", () => s.prerender, "prerenderToNodeStream", () => s.prerenderToNodeStream, "renderToPipeableStream", () => s.renderToPipeableStream, "renderToReadableStream", () => s.renderToReadableStream, "routeModule", 0, q, "serverHooks", () => s.serverHooks, "taintObjectReference", () => s.taintObjectReference], 19109);
}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0s59pc0._.js.map
