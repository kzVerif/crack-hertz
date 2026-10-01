module.exports = [93695, (a, b, c) => {
  b.exports = a.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));
}, 23927, a => {
  "use strict";

  a.s(["default", () => b]);
  let b = (0, a.i(70225).registerClientReference)(function () {
    throw Error("Attempted to call the default export of [project]/client/app/(user)/worker/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
  }, "[project]/client/app/(user)/worker/page.tsx", "default");
}, 82845, a => {
  "use strict";

  var b = a.i(23927);
  a.n(b);
}, 60743, function (a) {
  a.n(a.i(82845));
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
}, 8011, a => {
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
  let k = (0, b.instrumentModuleGetter)(() => a.r(80693));
  let l = (0, b.instrumentModuleGetter)(() => a.r(2404));
  let m = (0, b.instrumentModuleGetter)(() => a.r(98135));
  let n = (0, b.instrumentModuleGetter)(() => a.r(79787));
  let o = ["", {
    children: ["(user)", {
      children: ["worker", {
        children: ["__PAGE__", {}, {
          metadata: {},
          page: [(0, b.instrumentModuleGetter)(() => a.r(60743)), "[project]/client/app/(user)/worker/page.tsx"]
        }, []]
      }, {
        metadata: {}
      }, []]
    }, {
      metadata: {},
      layout: [k, "[project]/client/app/(user)/layout.tsx"],
      "not-found": [l, "[project]/client/node_modules/next/dist/client/components/builtin/not-found.js"],
      forbidden: [m, "[project]/client/node_modules/next/dist/client/components/builtin/forbidden.js"],
      unauthorized: [n, "[project]/client/node_modules/next/dist/client/components/builtin/unauthorized.js"]
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
  let p = a.r.bind(a);
  let q = a.l.bind(a);
  let r = (0, c.createAppPageEntrypoint)({
    tree: o,
    page: "/(user)/worker/page",
    pathname: "/worker",
    require: p,
    loadChunk: q,
    interopDefault: d.interopDefault
  });
  let s = r.__next_app__;
  let t = r.routeModule;
  let u = r.handler;
  a.s(["__next_app__", 0, s, "handler", 0, u, "routeModule", 0, t], 83488);
  a.i(83488);
  var v = a.i(7124);
  a.s(["ClientPageRoot", () => v.ClientPageRoot, "ClientSegmentRoot", () => v.ClientSegmentRoot, "Fragment", () => v.Fragment, "HTTPAccessFallbackBoundary", () => v.HTTPAccessFallbackBoundary, "InstantValidation", () => v.InstantValidation, "LayoutRouter", () => v.LayoutRouter, "LoadingBoundaryProvider", () => v.LoadingBoundaryProvider, "Postpone", () => v.Postpone, "RenderFromTemplateContext", () => v.RenderFromTemplateContext, "RootLayoutBoundary", () => v.RootLayoutBoundary, "SegmentViewNode", () => v.SegmentViewNode, "SegmentViewStateNode", () => v.SegmentViewStateNode, "__next_app__", 0, s, "captureOwnerStack", () => v.captureOwnerStack, "collectPrefetchHints", () => v.collectPrefetchHints, "collectSegmentData", () => v.collectSegmentData, "createElement", () => v.createElement, "createMetadataComponents", () => v.createMetadataComponents, "createPrerenderParamsForClientSegment", () => v.createPrerenderParamsForClientSegment, "createPrerenderSearchParamsForClientPage", () => v.createPrerenderSearchParamsForClientPage, "createServerParamsForServerSegment", () => v.createServerParamsForServerSegment, "createServerSearchParamsForServerPage", () => v.createServerSearchParamsForServerPage, "createTemporaryReferenceSet", () => v.createTemporaryReferenceSet, "decodeAction", () => v.decodeAction, "decodeFormState", () => v.decodeFormState, "decodeReply", () => v.decodeReply, "handler", 0, u, "isEmptyHTMLPrelude", () => v.isEmptyHTMLPrelude, "patchFetch", () => v.patchFetch, "preconnect", () => v.preconnect, "preloadFont", () => v.preloadFont, "preloadStyle", () => v.preloadStyle, "prerender", () => v.prerender, "prerenderToNodeStream", () => v.prerenderToNodeStream, "renderToPipeableStream", () => v.renderToPipeableStream, "renderToReadableStream", () => v.renderToReadableStream, "routeModule", 0, t, "serverHooks", () => v.serverHooks, "taintObjectReference", () => v.taintObjectReference], 8011);
}];

//# sourceMappingURL=%5Broot-of-the-server%5D__03sg--e._.js.map
