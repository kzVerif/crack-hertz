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
}, 13346, a => {
  "use strict";

  a.s(["default", () => b]);
  let b = (0, a.i(70225).registerClientReference)(function () {
    throw Error("Attempted to call the default export of [project]/client/components/help/key.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
  }, "[project]/client/components/help/key.tsx", "default");
}, 40725, a => {
  "use strict";

  var b = a.i(13346);
  a.n(b);
}, 69160, a => {
  "use strict";

  var b = a.i(39100);
  var c = a.i(40725);
  a.s(["default", 0, () => <div className="\n        group relative\n        overflow-clip\n        rounded-2xl\n        bg-neutral-950\n        border border-white/[0.12]\n        p-5\n       \n        transition-all\n        duration-200\n        ease-out\n      "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20 z-10" /><div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/[0.04] blur-2xl transition-all duration-300 group-hover:bg-white/[0.07]" /><div className="relative z-10"><div className="pb-4 border-b border-white/[0.08]"><h3 className="text-base font-semibold text-sky-400 tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">ช่วยเหลือและสิทธิ์การใช้งาน</h3><p className="mt-1 text-xs text-neutral-400 leading-relaxed">จัดการสิทธิ์การใช้งาน License Key และ Hardware ID (HWID) ของเครื่องนี้</p></div><div className="mt-4 space-y-3"><c.default /></div></div><div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/20 to-transparent" /></div>]);
}, 62681, function (a) {
  a.n(a.i(69160));
}, 12716, a => {
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
  let o = (0, b.instrumentModuleGetter)(() => a.r(42863));
  let p = ["", {
    children: ["(user)", {
      children: ["settings", {
        children: ["help", {
          children: ["__PAGE__", {}, {
            metadata: {},
            page: [(0, b.instrumentModuleGetter)(() => a.r(62681)), "[project]/client/app/(user)/settings/help/page.tsx"]
          }, []]
        }, {
          metadata: {}
        }, []]
      }, {
        metadata: {},
        layout: [o, "[project]/client/app/(user)/settings/layout.tsx"]
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
  let q = a.r.bind(a);
  let r = a.l.bind(a);
  let s = (0, c.createAppPageEntrypoint)({
    tree: p,
    page: "/(user)/settings/help/page",
    pathname: "/settings/help",
    require: q,
    loadChunk: r,
    interopDefault: d.interopDefault
  });
  let t = s.__next_app__;
  let u = s.routeModule;
  let v = s.handler;
  a.s(["__next_app__", 0, t, "handler", 0, v, "routeModule", 0, u], 31346);
  a.i(31346);
  var w = a.i(7124);
  a.s(["ClientPageRoot", () => w.ClientPageRoot, "ClientSegmentRoot", () => w.ClientSegmentRoot, "Fragment", () => w.Fragment, "HTTPAccessFallbackBoundary", () => w.HTTPAccessFallbackBoundary, "InstantValidation", () => w.InstantValidation, "LayoutRouter", () => w.LayoutRouter, "LoadingBoundaryProvider", () => w.LoadingBoundaryProvider, "Postpone", () => w.Postpone, "RenderFromTemplateContext", () => w.RenderFromTemplateContext, "RootLayoutBoundary", () => w.RootLayoutBoundary, "SegmentViewNode", () => w.SegmentViewNode, "SegmentViewStateNode", () => w.SegmentViewStateNode, "__next_app__", 0, t, "captureOwnerStack", () => w.captureOwnerStack, "collectPrefetchHints", () => w.collectPrefetchHints, "collectSegmentData", () => w.collectSegmentData, "createElement", () => w.createElement, "createMetadataComponents", () => w.createMetadataComponents, "createPrerenderParamsForClientSegment", () => w.createPrerenderParamsForClientSegment, "createPrerenderSearchParamsForClientPage", () => w.createPrerenderSearchParamsForClientPage, "createServerParamsForServerSegment", () => w.createServerParamsForServerSegment, "createServerSearchParamsForServerPage", () => w.createServerSearchParamsForServerPage, "createTemporaryReferenceSet", () => w.createTemporaryReferenceSet, "decodeAction", () => w.decodeAction, "decodeFormState", () => w.decodeFormState, "decodeReply", () => w.decodeReply, "handler", 0, v, "isEmptyHTMLPrelude", () => w.isEmptyHTMLPrelude, "patchFetch", () => w.patchFetch, "preconnect", () => w.preconnect, "preloadFont", () => w.preloadFont, "preloadStyle", () => w.preloadStyle, "prerender", () => w.prerender, "prerenderToNodeStream", () => w.prerenderToNodeStream, "renderToPipeableStream", () => w.renderToPipeableStream, "renderToReadableStream", () => w.renderToReadableStream, "routeModule", 0, u, "serverHooks", () => w.serverHooks, "taintObjectReference", () => w.taintObjectReference], 12716);
}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0zbuidn._.js.map
