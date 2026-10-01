module.exports = [99216, a => {
  "use strict";

  var b = a.i(44959);
  var c = a.i(12920);
  var d = a.i(67478);
  var e = a.i(23467);
  var f = a.i(80599);
  var g = a.i(527);
  var h = a.i(45435);
  var i = a.i(93324);
  var j = a.i(52811);
  var k = a.i(41321);
  var l = a.i(55654);
  var m = a.i(8289);
  var n = a.i(10107);
  var o = a.i(82237);
  var p = a.i(65272);
  var q = a.i(24348);
  var r = a.i(4962);
  var s = a.i(12030);
  var t = a.i(80913);
  a.i(49339);
  var u = a.i(21835);
  var v = a.i(87709);
  var w = a.i(68410);
  var x = a.i(14846);
  var y = a.i(89387);
  var z = a.i(63403);
  var A = a.i(93695);
  var B = a.i(77299);
  var C = a.i(341);
  var D = a.i(23199);
  a.i(50214);
  var E = a.i(7124);
  var F = a.i(46497);
  var G = a.i(15942);
  var H = a.i(9051);
  var I = a.i(97350);
  var J = a.i(5470);
  a.s(["createAppPageEntrypoint", 0, function ({
    tree: K,
    page: L,
    pathname: M,
    require: N,
    loadChunk: O,
    interopDefault: P
  }) {
    let Q = {
      require: N,
      loadChunk: O
    };
    let R = new b.AppPageRouteModule({
      definition: {
        kind: c.RouteKind.APP_PAGE,
        page: L,
        pathname: M,
        bundlePath: "",
        filename: "",
        appPaths: []
      },
      userland: {
        loaderTree: K
      },
      distDir: ".next",
      relativeProjectDir: ""
    });
    let S = L;
    S = S.replace(/\/index$/, "") || "/";
    let T = (0, q.normalizeAppPath)(S);
    async function U(b, q, L) {
      var M;
      var N;
      var O;
      var V;
      var W;
      var X;
      var Y;
      if (L.requestMeta) {
        (0, f.setRequestMeta)(b, L.requestMeta);
      }
      if (R.isDev) {
        (0, f.addRequestMeta)(b, "devRequestTimingInternalsEnd", process.hrtime.bigint());
      }
      let Z = !!(0, f.getRequestMeta)(b, "minimalMode");
      let $ = b.url;
      let _ = await R.prepare(b, q, {
        srcPage: S,
        multiZoneDraftMode: false
      });
      if (!_) {
        q.statusCode = 400;
        q.end("Bad Request");
        if (L.waitUntil != null) {
          L.waitUntil.call(L, Promise.resolve());
        }
        return null;
      }
      let {
        buildId: aa,
        query: ab,
        params: ac,
        pageIsDynamic: ad,
        buildManifest: ae,
        nextFontManifest: af,
        reactLoadableManifest: ag,
        serverActionsManifest: ah,
        clientReferenceManifest: ai,
        subresourceIntegrityManifest: aj,
        prerenderManifest: ak,
        prefetchHintsManifest: al,
        isDraftMode: am,
        resolvedPathname: an,
        revalidateOnlyGenerated: ao,
        routerServerContext: ap,
        nextConfig: aq,
        parsedUrl: ar,
        interceptionRoutePatterns: as,
        deploymentId: at,
        clientAssetToken: au
      } = _;
      let {
        isOnDemandRevalidate: av
      } = _;
      let aw = aq.experimental.ppr && !aq.cacheComponents && (0, I.isInterceptionRouteAppPath)(an) ? null : R.match(an, ak);
      let ax = (aw == null ? undefined : aw.route) ?? null;
      let ay = !!ak.routes[an];
      let az = b.headers["user-agent"] || "";
      let aA = (0, t.getBotType)(az);
      let aB = (0, f.getRequestMeta)(b, "isPrefetchRSCRequest") ?? b.headers[s.NEXT_ROUTER_PREFETCH_HEADER] === "1";
      let aC = (0, f.getRequestMeta)(b, "isRSCRequest") ?? (0, k.isRSCRequestHeader)(b.headers[s.RSC_HEADER]);
      let aD = (0, r.getIsPossibleServerAction)(b);
      if (T === m.UNDERSCORE_NOT_FOUND_ROUTE && (b.method === "GET" || b.method === "HEAD") && !aC && (0, l.isNonHtmlSecFetchDest)(b.headers["sec-fetch-dest"])) {
        q.statusCode = 404;
        q.setHeader("Cache-Control", "private, no-cache, no-store, max-age=0, must-revalidate");
        q.setHeader("Content-Type", "text/plain; charset=utf-8");
        q.end("Not Found");
        if (L.waitUntil != null) {
          L.waitUntil.call(L, Promise.resolve());
        }
        return null;
      }
      let aE = (0, j.checkIsAppPPREnabled)(aq.experimental.ppr);
      let aF = b.headers[x.NEXT_RESUME_STATE_LENGTH_HEADER];
      if (!(0, f.getRequestMeta)(b, "postponed") && Z && aE && aD && aF && typeof aF == "string") {
        let c = parseInt(aF, 10);
        let {
          maxPostponedStateSize: d,
          maxPostponedStateSizeBytes: e
        } = (0, C.getMaxPostponedStateSize)(aq.experimental.maxPostponedStateSize);
        if (!isNaN(c) && c > 0) {
          if (c > e) {
            q.statusCode = 413;
            q.end((0, C.getPostponedStateExceededErrorMessage)(d));
            if (L.waitUntil != null) {
              L.waitUntil.call(L, Promise.resolve());
            }
            return null;
          }
          let g = "1 MB";
          let h = ((X = aq.experimental.serverActions) == null ? undefined : X.bodySizeLimit) ?? g;
          let i = c + (h !== g ? a.r(59556).parse(h) : 1048576);
          let j = await (0, C.readBodyWithSizeLimit)(b, i);
          if (j === null) {
            q.statusCode = 413;
            q.end("Request body exceeded limit. To configure the body size limit for Server Actions, see: https://nextjs.org/docs/app/api-reference/next-config-js/serverActions#bodysizelimit");
            if (L.waitUntil != null) {
              L.waitUntil.call(L, Promise.resolve());
            }
            return null;
          }
          if (j.length >= c) {
            let a = j.subarray(0, c).toString("utf8");
            (0, f.addRequestMeta)(b, "postponed", a);
            let d = j.subarray(c);
            (0, f.addRequestMeta)(b, "actionBody", d);
          } else {
            throw Object.defineProperty(Error(`invariant: expected ${c} bytes of postponed state but only received ${j.length} bytes`), "__NEXT_ERROR_CODE", {
              value: "E979",
              enumerable: false,
              configurable: true
            });
          }
        }
      }
      if (typeof (0, f.getRequestMeta)(b, "postponed") != "string" && aE && b.headers[x.NEXT_RESUME_HEADER] === "1" && b.method === "POST") {
        let {
          maxPostponedStateSize: a,
          maxPostponedStateSizeBytes: c
        } = (0, C.getMaxPostponedStateSize)(aq.experimental.maxPostponedStateSize);
        let d = await (0, C.readBodyWithSizeLimit)(b, c);
        if (d === null) {
          q.statusCode = 413;
          q.end((0, C.getPostponedStateExceededErrorMessage)(a));
          if (L.waitUntil != null) {
            L.waitUntil.call(L, Promise.resolve());
          }
          return null;
        }
        let e = d.toString("utf8");
        (0, f.addRequestMeta)(b, "postponed", e);
      }
      let aG = R.isDev === true || aq.experimental.exposeTestingApiInProductionBuild === true;
      let aH = aG && typeof b.headers.cookie == "string" && b.headers.cookie.includes(s.NEXT_INSTANT_TEST_COOKIE + "=") && (!(0, k.isRSCRequestHeader)(b.headers[s.RSC_HEADER]) || b.headers[s.NEXT_ROUTER_PREFETCH_HEADER] === "1");
      let aI = (aE || aH) && (((M = ak.routes[T] ?? ak.dynamicRoutes[T]) == null ? undefined : M.renderingMode) === "PARTIALLY_STATIC" || aH && (aG || (ap == null ? undefined : ap.experimentalTestProxy) === true));
      let aJ = aH && aI;
      let aK = aJ && R.isDev === true;
      let aL = false;
      let aM = aI ? (0, f.getRequestMeta)(b, "postponed") : undefined;
      let aN = typeof aM == "string";
      let aO = (N = ak.routes[an]) == null ? undefined : N.prefetchDataRoute;
      let aP = aI && aC && !aB && !aO;
      if (Z) {
        aP = aP && aN;
      }
      let aQ = b.headers[s.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER];
      let aR = (0, f.getRequestMeta)(b, "segmentPrefetchRSCRequest") ?? (aB ? typeof aQ == "string" ? aQ : Array.isArray(aQ) ? aQ[0] : undefined : undefined);
      let aS = !az || (0, p.shouldServeStreamingMetadata)(az, aq.htmlLimitedBots);
      let aT = aI && !aS;
      let aU = (!!ax || !!ay || !!ak.routes[T]) && !aT;
      let aV = aI && aq.cacheComponents === true;
      let aW = R.isDev === true || am || !aU || aN || (aV && (0, f.getRequestMeta)(b, "onCacheEntryV2") ? aP && !Z : aP);
      let aX = (ax == null ? undefined : ax.remainingPrerenderableParams) ?? [];
      let aY = ay && aX.some(a => {
        let b = ac == null ? undefined : ac[a.paramName];
        return b == null || Array.isArray(b) && b.length === 0;
      });
      let aZ = (ax == null ? undefined : ax.fallback) === null && (((O = ax.fallbackRootParams) == null ? undefined : O.length) ?? 0) > 0;
      let a$ = null;
      let a_ = false;
      if (!am && aU && !aW && !aD && !aN && !aP) {
        let a = aw ? typeof (ax == null ? undefined : ax.fallback) == "string" ? ax.fallback : aw.source : null;
        if (aq.partialPrefetching && a && (ax == null || (Y = ax.fallbackRouteParams) == null ? undefined : Y.length)) {
          if (aX.length > 0) {
            let b;
            b = new Map(aX.map(a => [a.paramName, a]));
            let c = a.split("/").map(a => {
              let c = (0, J.getSegmentParam)(a);
              if (!c) {
                return a;
              }
              let d = b.get(c.paramName);
              if (!d) {
                return a;
              }
              let e = ac == null ? undefined : ac[d.paramName];
              if (!e) {
                return a;
              }
              let f = Array.isArray(e) ? e.map(a => encodeURIComponent(a)).join("/") : encodeURIComponent(e);
              return a.replace((0, n.buildDynamicSegmentPlaceholder)(d), f);
            }).join("/") || "/";
            if (c !== a) {
              a$ = c;
              a_ = true;
            }
          }
        } else {
          a$ = an;
        }
      }
      let a0 = a$;
      if (!a0 && (R.isDev || aU && ad && (ax == null || (V = ax.fallbackRouteParams) == null ? undefined : V.length) && !aD)) {
        a0 = an;
      }
      if (!R.isDev && !am && !!aU && !!aC && !aP) {
        (0, h.stripFlightHeaders)(b.headers);
      }
      let a1 = {
        ...E,
        tree: K,
        handler: U,
        routeModule: R,
        __next_app__: Q
      };
      if (ah && ai) {
        (0, o.setManifestsSingleton)({
          page: S,
          clientReferenceManifest: ai,
          serverActionsManifest: ah
        });
      }
      let a2 = b.method || "GET";
      let a3 = (0, e.getTracer)();
      let a4 = a3.getActiveScopeSpan();
      let a5 = !!(ap == null ? undefined : ap.isWrappedByNextServer);
      let a6 = aq.partialPrefetching && aX.length > 0 ? (ax == null || (W = ax.fallbackRouteParams) == null ? undefined : W.filter(a => !aX.some(b => b.paramName === a.paramName))) ?? [] : [];
      let a7 = async () => {
        if (ap == null ? undefined : ap.render404) {
          await ap.render404(b, q, ar, false);
        } else {
          q.end("This page could not be found");
        }
        return null;
      };
      try {
        let a;
        let h = R.getVaryHeader(an, as);
        q.setHeader("Vary", h);
        let j = async (c, d) => {
          let f = new i.NodeNextRequest(b);
          let h = new i.NodeNextResponse(q);
          return R.render(f, h, d).finally(() => {
            if (!c) {
              return;
            }
            c.setAttributes({
              "http.status_code": q.statusCode,
              "next.rsc": aC
            });
            if (q.statusCode && q.statusCode >= 500) {
              c.setStatus({
                code: e.SpanStatusCode.ERROR
              });
              c.setAttribute("error.type", q.statusCode.toString());
            }
            let b = a3.getRootSpanAttributes();
            if (!b) {
              return;
            }
            if (b.get("next.span_type") !== g.BaseServerSpan.handleRequest) {
              console.warn(`Unexpected root span type '${b.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);
              return;
            }
            let d = b.get("next.route") || T;
            let f = aC ? `RSC ${a2} ${d}` : `${a2} ${d}`;
            c.setAttributes({
              "next.route": d,
              "http.route": d,
              "next.span_name": f
            });
            c.updateName(f);
            if (a && a !== c) {
              a.setAttribute("http.route", d);
              a.updateName(f);
            }
          });
        };
        let k = (0, f.getRequestMeta)(b, "incrementalCache") || (await R.getIncrementalCache(b, aq, ak, Z));
        if (k != null) {
          k.resetRequestCache();
        }
        globalThis.__incrementalCache = k;
        let l = async ({
          span: a,
          postponed: c,
          fallbackRouteParams: d,
          forceStaticRender: e,
          allowEmptyStaticShell: g
        }) => {
          let h = {
            query: ab,
            params: ac,
            page: T,
            sharedContext: {
              buildId: aa,
              deploymentId: at,
              clientAssetToken: au
            },
            serverComponentsHmrCache: (0, f.getRequestMeta)(b, "serverComponentsHmrCache"),
            fallbackRouteParams: d,
            renderOpts: {
              App: () => null,
              Document: () => null,
              pageConfig: {},
              ComponentMod: a1,
              Component: P(a1),
              params: ac,
              routeModule: R,
              page: S,
              postponed: c,
              allowEmptyStaticShell: g,
              serveStreamingMetadata: aS,
              supportsDynamicResponse: typeof c == "string" || aW,
              buildManifest: ae,
              nextFontManifest: af,
              reactLoadableManifest: ag,
              subresourceIntegrityManifest: aj,
              setCacheStatus: ap == null ? undefined : ap.setCacheStatus,
              setIsrStatus: ap == null ? undefined : ap.setIsrStatus,
              setReactDebugChannel: ap == null ? undefined : ap.setReactDebugChannel,
              sendErrorsToBrowser: ap == null ? undefined : ap.sendErrorsToBrowser,
              dir: require("path").join(process.cwd(), R.relativeProjectDir),
              isDraftMode: am,
              botType: aA,
              isOnDemandRevalidate: av,
              isPossibleServerAction: aD,
              assetPrefix: aq.assetPrefix,
              nextConfigOutput: aq.output,
              crossOrigin: aq.crossOrigin,
              trailingSlash: aq.trailingSlash,
              images: aq.images,
              previewProps: ak.preview,
              enableTainting: aq.experimental.taint,
              htmlLimitedBots: aq.htmlLimitedBots,
              reactMaxHeadersLength: aq.reactMaxHeadersLength,
              multiZoneDraftMode: false,
              prefetchHints: al,
              incrementalCache: k,
              cacheLifeProfiles: aq.cacheLife,
              staticPageGenerationTimeout: aq.staticPageGenerationTimeout,
              basePath: aq.basePath,
              serverActions: aq.experimental.serverActions,
              logServerFunctions: typeof aq.logging == "object" && !!aq.logging.serverFunctions,
              ...(aJ || aK || aL ? {
                isBuildTimePrerendering: true,
                supportsDynamicResponse: false,
                isStaticGeneration: true,
                isDebugDynamicAccesses: aK
              } : {}),
              cacheComponents: !!aq.cacheComponents,
              partialPrefetching: aq.partialPrefetching,
              isFallbackUpgradeable: !!aq.partialPrefetching && aX.length > 0,
              validationLevel: aq.experimental.instantInsights.validationLevel,
              experimental: {
                isRoutePPREnabled: aI,
                expireTime: aq.expireTime,
                staleTimes: aq.experimental.staleTimes,
                dynamicOnHover: !!aq.experimental.dynamicOnHover,
                optimisticRouting: !!aq.experimental.optimisticRouting,
                inlineCss: !!aq.experimental.inlineCss,
                prefetchInlining: aq.experimental.prefetchInlining ?? false,
                authInterrupts: !!aq.experimental.authInterrupts,
                serverComponentsHmrCancellation: !!aq.experimental.serverComponentsHmrCancellation,
                useCacheTimeout: aq.experimental.useCacheTimeout,
                cachedNavigations: aq.experimental.cachedNavigations ?? false,
                clientTraceMetadata: aq.experimental.clientTraceMetadata || [],
                clientParamParsingOrigins: aq.experimental.clientParamParsingOrigins,
                maxPostponedStateSizeBytes: (0, B.parseMaxPostponedStateSize)(aq.experimental.maxPostponedStateSize),
                exposeTestingApi: aG
              },
              waitUntil: L.waitUntil,
              onClose: a => {
                q.on("close", a);
              },
              onAfterTaskError: () => {},
              onInstrumentationRequestError: (a, c, d, e) => R.onRequestError(b, a, d, e, ap),
              err: (0, f.getRequestMeta)(b, "invokeError")
            }
          };
          if (e) {
            h.renderOpts.supportsDynamicResponse = false;
          }
          let i = await j(a, h);
          let {
            metadata: l
          } = i;
          let {
            cacheControl: m,
            headers: n = {},
            fetchTags: o,
            fetchMetrics: p
          } = l;
          if (m && m.revalidate !== false && m.revalidate > 0 && m.expire === undefined) {
            m.expire = aq.expireTime;
          }
          if (o) {
            n[x.NEXT_CACHE_TAGS_HEADER] = o;
          }
          b.fetchMetrics = p;
          if (aU && (m == null ? undefined : m.revalidate) === 0 && !R.isDev && !aI) {
            let a = l.staticBailoutInfo;
            let b = Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${an}${(a == null ? undefined : a.description) ? `, reason: ${a.description}` : ""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`), "__NEXT_ERROR_CODE", {
              value: "E132",
              enumerable: false,
              configurable: true
            });
            if (a == null ? undefined : a.stack) {
              let c = a.stack;
              b.stack = b.message + c.substring(c.indexOf("\n"));
            }
            throw b;
          }
          return {
            value: {
              kind: u.CachedRouteKind.APP_PAGE,
              html: i,
              headers: n,
              rscData: l.flightData,
              postponed: l.postponed,
              status: l.statusCode,
              segmentData: l.segmentData
            },
            cacheControl: m
          };
        };
        let m = async ({
          hasResolved: a,
          previousCacheEntry: e,
          isRevalidating: g,
          span: h,
          forceStaticRender: i = false
        }) => {
          let j = R.isDev === false;
          let o = a || q.writableEnded;
          try {
            var p;
            let d;
            if (av && ao && !e && !Z) {
              if (ap == null ? undefined : ap.render404) {
                await ap.render404(b, q);
              } else {
                q.statusCode = 404;
                q.end("This page could not be found");
              }
              return null;
            }
            if (ax) {
              d = (0, v.parseFallbackField)(ax.fallback);
            }
            if (aq.partialPrefetching && (ax == null ? undefined : ax.fallback) === null && !aY && !aZ && aX.length > 0) {
              d = v.FallbackMode.PRERENDER;
            }
            if (d === v.FallbackMode.PRERENDER && !(aI ? aS : !aA)) {
              d = v.FallbackMode.BLOCKING_STATIC_RENDER;
            }
            if ((e == null ? undefined : e.isStale) === -1) {
              av = true;
            }
            if (av && (d !== v.FallbackMode.NOT_FOUND || e)) {
              d = v.FallbackMode.BLOCKING_STATIC_RENDER;
            }
            if (!Z && d !== v.FallbackMode.BLOCKING_STATIC_RENDER && a0 && !o && !am && ad && (j || !ay)) {
              if ((j || ax) && d === v.FallbackMode.NOT_FOUND) {
                if (aq.adapterPath) {
                  return await a7();
                }
                throw new A.NoFallbackError();
              }
              if (aI && (aq.cacheComponents ? !aP : !aC)) {
                let d;
                let e = j && typeof (ax == null ? undefined : ax.fallback) == "string" ? ax.fallback : T;
                d = j ? (ax == null ? undefined : ax.fallbackRouteParams) ? (0, n.createOpaqueFallbackRouteParams)(ax.fallbackRouteParams) : aL ? (0, n.getFallbackRouteParams)(T, R) : null : aL ? (0, n.getFallbackRouteParams)(T, R) : aJ ? (0, f.getRequestMeta)(b, "fallbackParams") ?? null : null;
                if (aJ && d) {
                  (0, f.addRequestMeta)(b, "fallbackParams", d);
                }
                let g = await R.handleResponse({
                  cacheKey: e,
                  req: b,
                  nextConfig: aq,
                  routeKind: c.RouteKind.APP_PAGE,
                  isFallback: true,
                  prerenderManifest: ak,
                  isRoutePPREnabled: aI,
                  responseGenerator: async () => l({
                    span: h,
                    postponed: undefined,
                    fallbackRouteParams: d,
                    forceStaticRender: true,
                    allowEmptyStaticShell: aH || undefined
                  }),
                  waitUntil: L.waitUntil,
                  isMinimalMode: Z
                });
                if (g === null) {
                  return null;
                }
                if (g) {
                  if (!Z && aI && aq.partialPrefetching && aX.length > 0 && a$ && k && !av && !aL && !aG && !aH) {
                    (0, H.scheduleOnNextTick)(async () => {
                      let c = R.getResponseCache(b);
                      try {
                        await c.revalidate(a$, k, aI, false, a => l({
                          span: a.span,
                          postponed: undefined,
                          fallbackRouteParams: a6.length > 0 ? (0, n.createOpaqueFallbackRouteParams)(a6) : null,
                          forceStaticRender: true
                        }), null, a, L.waitUntil);
                      } catch (a) {
                        console.error("Error revalidating the page in the background", a);
                      }
                    });
                  }
                  delete g.cacheControl;
                  return g;
                }
              }
            }
            let r = av || g || !aM ? undefined : aM;
            if (aV && !Z && k && (aP || aD) && !i) {
              let c = await k.get(an, {
                kind: u.IncrementalCacheKind.APP_PAGE,
                isRoutePPREnabled: true,
                isFallback: false
              });
              if (c && c.value && c.value.kind === u.CachedRouteKind.APP_PAGE) {
                r = c.value.postponed;
                if (c && (c.isStale === -1 || c.isStale === true)) {
                  (0, H.scheduleOnNextTick)(async () => {
                    let c = R.getResponseCache(b);
                    try {
                      await c.revalidate(an, k, aI, false, a => m({
                        ...a,
                        forceStaticRender: true
                      }), null, a, L.waitUntil);
                    } catch (a) {
                      console.error("Error revalidating the page in the background", a);
                    }
                  });
                }
              }
            }
            if ((aJ || aK) && r !== undefined) {
              return {
                cacheControl: {
                  revalidate: 1,
                  expire: undefined
                },
                value: {
                  kind: u.CachedRouteKind.APP_PAGE,
                  html: w.default.fromStatic("", aC ? s.RSC_CONTENT_TYPE_HEADER : x.HTML_CONTENT_TYPE_HEADER),
                  rscData: undefined,
                  postponed: r,
                  segmentData: undefined,
                  headers: undefined,
                  status: undefined
                }
              };
            }
            let t = !R.isDev && ad && (ax == null ? undefined : ax.fallbackRouteParams) ? (0, n.getPlaceholderFallbackRouteParams)(ac, ax.fallbackRouteParams) : null;
            let y = t && t.length > 0 ? t : ax == null ? undefined : ax.fallbackRouteParams;
            let z = t != null && t.length > 0;
            let B = null;
            if (aq.cacheComponents && (ax == null ? undefined : ax.fallbackRouteParams)) {
              let a = (0, f.getRequestMeta)(b, "resolvedRouteParamKeys");
              if (a && a.size > 0) {
                B = ax.fallbackRouteParams.filter(b => !a.has(b.paramName));
              }
            }
            let C = (j && (0, f.getRequestMeta)(b, "renderFallbackShell") || z || aJ && !ay) && y ? (0, n.createOpaqueFallbackRouteParams)(y) : B && B.length > 0 && B.length < ((ax == null || (p = ax.fallbackRouteParams) == null ? undefined : p.length) ?? 0) ? (0, n.createOpaqueFallbackRouteParams)(B) : !Z && a_ && a6.length > 0 ? (0, n.createOpaqueFallbackRouteParams)(a6) : aL ? (0, n.getFallbackRouteParams)(T, R) : null;
            if ((j || aJ) && aq.cacheComponents && !ay && (ax == null ? undefined : ax.fallbackRouteParams)) {
              let a = (0, n.createOpaqueFallbackRouteParams)(y ?? ax.fallbackRouteParams);
              if (a) {
                (0, f.addRequestMeta)(b, "fallbackParams", a);
              }
            }
            return l({
              span: h,
              postponed: r,
              fallbackRouteParams: C,
              forceStaticRender: i,
              allowEmptyStaticShell: aH || undefined
            });
          } catch (a) {
            if (e == null ? undefined : e.isStale) {
              await R.onRequestError(b, a, {
                routerKind: "App Router",
                routePath: S,
                routeType: "render",
                revalidateReason: (0, d.getRevalidateReason)({
                  isStaticGeneration: aU,
                  isOnDemandRevalidate: av
                })
              }, false, ap);
            }
            throw a;
          }
        };
        let o = async a => {
          var d;
          var e;
          var g;
          var h;
          var i;
          let j;
          let k = await R.handleResponse({
            cacheKey: a$,
            responseGenerator: b => m({
              span: a,
              ...b
            }),
            routeKind: c.RouteKind.APP_PAGE,
            isOnDemandRevalidate: av,
            isRoutePPREnabled: aI,
            req: b,
            nextConfig: aq,
            prerenderManifest: ak,
            waitUntil: L.waitUntil,
            isMinimalMode: Z
          });
          if (am) {
            q.setHeader("Cache-Control", "private, no-cache, no-store, max-age=0, must-revalidate");
          }
          if (R.isDev) {
            q.setHeader("Cache-Control", b.headers[s.NEXT_HMR_REFRESH_HEADER] === "1" ? "no-store" : "no-cache, must-revalidate");
          }
          if (!k) {
            if (a$) {
              throw Object.defineProperty(Error("invariant: cache entry required but not generated"), "__NEXT_ERROR_CODE", {
                value: "E62",
                enumerable: false,
                configurable: true
              });
            }
            return null;
          }
          if (((d = k.value) == null ? undefined : d.kind) !== u.CachedRouteKind.APP_PAGE) {
            throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${(g = k.value) == null ? undefined : g.kind}`), "__NEXT_ERROR_CODE", {
              value: "E707",
              enumerable: false,
              configurable: true
            });
          }
          let o = typeof k.value.postponed == "string";
          if (aC && !aD && at) {
            q.setHeader(x.NEXT_NAV_DEPLOYMENT_ID_HEADER, at);
          }
          if (aU && !aP && (!o || aB)) {
            if (!Z) {
              q.setHeader("x-nextjs-cache", av ? "REVALIDATED" : k.isMiss ? "MISS" : k.isStale ? "STALE" : "HIT");
            }
            q.setHeader(s.NEXT_IS_PRERENDER_HEADER, "1");
          }
          let {
            value: p
          } = k;
          if (aN) {
            j = {
              revalidate: 0,
              expire: undefined
            };
          } else if (aP) {
            j = {
              revalidate: 0,
              expire: undefined
            };
          } else if (!R.isDev) {
            if (am) {
              j = {
                revalidate: 0,
                expire: undefined
              };
            } else if (aU) {
              if (k.cacheControl) {
                if (typeof k.cacheControl.revalidate == "number") {
                  if (k.cacheControl.revalidate < 1) {
                    throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${k.cacheControl.revalidate} < 1`), "__NEXT_ERROR_CODE", {
                      value: "E22",
                      enumerable: false,
                      configurable: true
                    });
                  }
                  j = {
                    revalidate: k.cacheControl.revalidate,
                    expire: k.cacheControl.expire
                  };
                } else {
                  j = {
                    revalidate: x.CACHE_ONE_YEAR_SECONDS,
                    expire: undefined
                  };
                }
              }
            } else if (!q.getHeader("Cache-Control")) {
              j = {
                revalidate: 0,
                expire: undefined
              };
            }
          }
          k.cacheControl = j;
          if (typeof aR == "string" && (p == null ? undefined : p.kind) === u.CachedRouteKind.APP_PAGE && p.segmentData) {
            q.setHeader(s.NEXT_DID_POSTPONE_HEADER, "2");
            let a = (h = p.headers) == null ? undefined : h[x.NEXT_CACHE_TAGS_HEADER];
            if (Z && aU && a && typeof a == "string") {
              q.setHeader(x.NEXT_CACHE_TAGS_HEADER, a);
            }
            let c = p.segmentData.get(aR);
            if (c !== undefined) {
              return (0, z.sendRenderResult)({
                req: b,
                res: q,
                generateEtags: aq.generateEtags,
                poweredByHeader: aq.poweredByHeader,
                result: w.default.fromStatic(c, s.RSC_CONTENT_TYPE_HEADER),
                cacheControl: k.cacheControl
              });
            } else {
              q.statusCode = 404;
              return (0, z.sendRenderResult)({
                req: b,
                res: q,
                generateEtags: aq.generateEtags,
                poweredByHeader: aq.poweredByHeader,
                result: w.default.EMPTY,
                cacheControl: k.cacheControl
              });
            }
          }
          let r = aV ? (0, f.getRequestMeta)(b, "onCacheEntryV2") ?? (0, f.getRequestMeta)(b, "onCacheEntry") : (0, f.getRequestMeta)(b, "onCacheEntry");
          if (r && !aJ) {
            let a = (0, f.getRequestMeta)(b, "initURL") ?? b.url;
            let c = a ? ((i = (0, D.parseUrl)(a)) == null ? undefined : i.pathname) ?? a : undefined;
            if (await r(k, {
              url: c
            })) {
              return null;
            }
          }
          if (p.headers) {
            let a = {
              ...p.headers
            };
            if (!Z || !aU) {
              delete a[x.NEXT_CACHE_TAGS_HEADER];
            }
            for (let [b, c] of Object.entries(a)) {
              if (c !== undefined) {
                if (Array.isArray(c)) {
                  for (let a of c) {
                    q.appendHeader(b, a);
                  }
                } else {
                  if (typeof c == "number") {
                    c = c.toString();
                  }
                  q.appendHeader(b, c);
                }
              }
            }
          }
          let t = (e = p.headers) == null ? undefined : e[x.NEXT_CACHE_TAGS_HEADER];
          if (Z && aU && t && typeof t == "string") {
            q.setHeader(x.NEXT_CACHE_TAGS_HEADER, t);
          }
          if (!!p.status && (!aC || !aI)) {
            q.statusCode = p.status;
          }
          if (!Z && p.status && F.RedirectStatusCode[p.status] && aC) {
            q.statusCode = 200;
          }
          if (o && !aP) {
            q.setHeader(s.NEXT_DID_POSTPONE_HEADER, "1");
          }
          if (aC && !am) {
            if (p.rscData === undefined) {
              if (p.html.contentType !== s.RSC_CONTENT_TYPE_HEADER) {
                if (aq.cacheComponents) {
                  q.statusCode = 404;
                  return (0, z.sendRenderResult)({
                    req: b,
                    res: q,
                    generateEtags: aq.generateEtags,
                    poweredByHeader: aq.poweredByHeader,
                    result: w.default.EMPTY,
                    cacheControl: k.cacheControl
                  });
                } else {
                  throw Object.defineProperty(new G.InvariantError(`Expected RSC response, got ${p.html.contentType}`), "__NEXT_ERROR_CODE", {
                    value: "E789",
                    enumerable: false,
                    configurable: true
                  });
                }
              }
              return (0, z.sendRenderResult)({
                req: b,
                res: q,
                generateEtags: aq.generateEtags,
                poweredByHeader: aq.poweredByHeader,
                result: p.html,
                cacheControl: k.cacheControl
              });
            }
            return (0, z.sendRenderResult)({
              req: b,
              res: q,
              generateEtags: aq.generateEtags,
              poweredByHeader: aq.poweredByHeader,
              result: w.default.fromStatic(p.rscData, s.RSC_CONTENT_TYPE_HEADER),
              cacheControl: k.cacheControl
            });
          }
          let v = p.html;
          if (aH && aJ) {
            if (typeof p.postponed == "string" && E.isEmptyHTMLPrelude(p.postponed)) {
              if (R.isDev === true) {
                throw Object.defineProperty(Error(`The Navigation Inspector was active, but you attempted to load a blocking route. Reload the page to reset the inspector.

To identify why this route is blocking, refer to the Instant Navigation docs: https://preview.nextjs.org/docs/app/guides/instant-navigation`), "__NEXT_ERROR_CODE", {
                  value: "E1387",
                  enumerable: false,
                  configurable: true
                });
              }
              let a = `<!DOCTYPE html><html><head><meta charSet="utf-8"/></head><body><script>document.cookie="${s.NEXT_INSTANT_TEST_COOKIE}=; Path=/; Max-Age=0"</script><p>The Navigation Inspector was active, but you attempted to load a blocking route. Reload the page to reset the inspector.</p><p>To identify why this route is blocking, refer to the <a href="https://preview.nextjs.org/docs/app/guides/instant-navigation">Instant Navigation docs</a>.</p></body></html>`;
              return (0, z.sendRenderResult)({
                req: b,
                res: q,
                generateEtags: aq.generateEtags,
                poweredByHeader: aq.poweredByHeader,
                result: w.default.fromStatic(a, x.HTML_CONTENT_TYPE_HEADER),
                cacheControl: {
                  revalidate: 0,
                  expire: undefined
                }
              });
            }
            v.push(new ReadableStream({
              start(a) {
                a.enqueue(y.ENCODED_TAGS.CLOSED.BODY_AND_HTML);
                a.close();
              }
            }));
            return (0, z.sendRenderResult)({
              req: b,
              res: q,
              generateEtags: aq.generateEtags,
              poweredByHeader: aq.poweredByHeader,
              result: v,
              cacheControl: {
                revalidate: 0,
                expire: undefined
              }
            });
          }
          if (!o || Z || aC) {
            return (0, z.sendRenderResult)({
              req: b,
              res: q,
              generateEtags: aq.generateEtags,
              poweredByHeader: aq.poweredByHeader,
              result: v,
              cacheControl: k.cacheControl
            });
          }
          if (aJ || aK) {
            v.push(new ReadableStream({
              start(a) {
                a.enqueue(y.ENCODED_TAGS.CLOSED.BODY_AND_HTML);
                a.close();
              }
            }));
            return (0, z.sendRenderResult)({
              req: b,
              res: q,
              generateEtags: aq.generateEtags,
              poweredByHeader: aq.poweredByHeader,
              result: v,
              cacheControl: {
                revalidate: 0,
                expire: undefined
              }
            });
          }
          let A = new TransformStream();
          v.push(A.readable);
          if (aq.cacheComponents && (ax == null ? undefined : ax.fallbackRouteParams)) {
            let a = (0, n.createOpaqueFallbackRouteParams)(ax.fallbackRouteParams);
            if (a) {
              (0, f.addRequestMeta)(b, "fallbackParams", a);
            }
          }
          l({
            span: a,
            postponed: p.postponed,
            fallbackRouteParams: null,
            forceStaticRender: false
          }).then(async a => {
            var b;
            var c;
            if (!a) {
              throw Object.defineProperty(Error("Invariant: expected a result to be returned"), "__NEXT_ERROR_CODE", {
                value: "E463",
                enumerable: false,
                configurable: true
              });
            }
            if (((b = a.value) == null ? undefined : b.kind) !== u.CachedRouteKind.APP_PAGE) {
              throw Object.defineProperty(Error(`Invariant: expected a page response, got ${(c = a.value) == null ? undefined : c.kind}`), "__NEXT_ERROR_CODE", {
                value: "E305",
                enumerable: false,
                configurable: true
              });
            }
            await a.value.html.pipeTo(A.writable);
          }).catch(a => {
            A.writable.abort(a).catch(a => {
              console.error("couldn't abort transformer", a);
            });
          });
          return (0, z.sendRenderResult)({
            req: b,
            res: q,
            generateEtags: aq.generateEtags,
            poweredByHeader: aq.poweredByHeader,
            result: v,
            cacheControl: {
              revalidate: 0,
              expire: undefined
            }
          });
        };
        if (!a5 || !a4) {
          a = a3.getActiveScopeSpan();
          return await a3.withPropagatedContext(b.headers, () => a3.trace(g.BaseServerSpan.handleRequest, {
            spanName: `${a2} ${S}`,
            kind: e.SpanKind.SERVER,
            attributes: {
              "http.method": a2,
              "http.target": $
            }
          }, o), undefined, !a5);
        }
        await o(a4);
      } catch (a) {
        if (aH && !q.headersSent) {
          q.setHeader("Set-Cookie", `${s.NEXT_INSTANT_TEST_COOKIE}=; Path=/; Max-Age=0`);
        }
        if (!(a instanceof A.NoFallbackError)) {
          await R.onRequestError(b, a, {
            routerKind: "App Router",
            routePath: S,
            routeType: "render",
            revalidateReason: (0, d.getRevalidateReason)({
              isStaticGeneration: aU,
              isOnDemandRevalidate: av
            })
          }, false, ap);
        }
        throw a;
      }
    }
    return {
      __next_app__: Q,
      routeModule: R,
      handler: U
    };
  }]);
}, 12030, function (a) {
  a.n(a.i(28311));
}, 46497, function (a) {
  a.n(a.i(78230));
}, 14846, function (a) {
  a.n(a.i(59068));
}, 87709, function (a) {
  a.n(a.i(78357));
}, 9051, function (a) {
  a.n(a.i(39150));
}, 23199, function (a) {
  a.n(a.i(46809));
}, 7124, function (a) {
  a.n(a.i(92860));
}, 50214, function (a) {
  a.n(a.i(93010));
}, 86120, function (a) {
  a.n(a.i(98910));
}, 82237, function (a) {
  a.n(a.i(93367));
}, 45435, function (a) {
  a.n(a.i(28462));
}, 93324, function (a) {
  a.n(a.i(8201));
}, 67478, function (a) {
  a.n(a.i(14282));
}, 52811, function (a) {
  a.n(a.i(87707));
}, 55654, function (a) {
  a.n(a.i(94796));
}, 41321, function (a) {
  a.n(a.i(57386));
}, 341, function (a) {
  a.n(a.i(89315));
}, 4962, function (a) {
  a.n(a.i(78065));
}, 65272, function (a) {
  a.n(a.i(2788));
}, 527, function (a) {
  a.n(a.i(58170));
}, 23467, function (a) {
  a.n(a.i(80734));
}, 68410, function (a) {
  a.n(a.i(27878));
}, 80599, function (a) {
  a.n(a.i(38808));
}, 10107, function (a) {
  a.n(a.i(46156));
}, 49339, function (a) {
  a.n(a.i(55030));
}, 21835, function (a) {
  a.n(a.i(45045));
}, 12920, function (a) {
  a.n(a.i(8059));
}, 44959, (a, b, c) => {
  b.exports = a.r(18622);
}, 63403, function (a) {
  a.n(a.i(7031));
}, 89387, function (a) {
  a.n(a.i(86097));
}, 8289, function (a) {
  a.n(a.i(46110));
}, 15942, function (a) {
  a.n(a.i(99394));
}, 24348, function (a) {
  a.n(a.i(87348));
}, 5470, function (a) {
  a.n(a.i(27488));
}, 97350, function (a) {
  a.n(a.i(32094));
}, 80913, function (a) {
  a.n(a.i(56794));
}, 77299, function (a) {
  a.n(a.i(11478));
}, 17672, (a, b, c) => {
  "use strict";

  function d(a) {
    return a;
  }
  Object.defineProperty(c, "__esModule", {
    value: true
  });
  Object.defineProperty(c, "instrumentModuleGetter", {
    enumerable: true,
    get: function () {
      return d;
    }
  });
}];

//# sourceMappingURL=097k_next_dist_1te93v1._.js.map
