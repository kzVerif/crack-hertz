module.exports = [61724, (A, e, t) => {
  e.exports = A.x("next/dist/compiled/next-server/app-route-turbo.runtime.prod.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.prod.js"));
}, 89927, (A, e, t) => {
  e.exports = A.r(61724);
}, 46216, (A, e, t) => {
  "use strict";

  var r = Object.defineProperty;
  var n = Object.getOwnPropertyDescriptor;
  var a = Object.getOwnPropertyNames;
  var i = Object.prototype.hasOwnProperty;
  var o = {};
  var s = {
    RequestCookies: () => g,
    ResponseCookies: () => f,
    parseCookie: () => u,
    parseSetCookie: () => d,
    stringifyCookie: () => l
  };
  for (var c in s) {
    r(o, c, {
      get: s[c],
      enumerable: true
    });
  }
  function l(A) {
    let t = ["path" in A && A.path && `Path=${A.path}`, "expires" in A && (A.expires || A.expires === 0) && `Expires=${(typeof A.expires == "number" ? new Date(A.expires) : A.expires).toUTCString()}`, "maxAge" in A && typeof A.maxAge == "number" && `Max-Age=${A.maxAge}`, "domain" in A && A.domain && `Domain=${A.domain}`, "secure" in A && A.secure && "Secure", "httpOnly" in A && A.httpOnly && "HttpOnly", "sameSite" in A && A.sameSite && `SameSite=${A.sameSite}`, "partitioned" in A && A.partitioned && "Partitioned", "priority" in A && A.priority && `Priority=${A.priority}`].filter(Boolean);
    let r = `${A.name}=${encodeURIComponent(A.value ?? "")}`;
    if (t.length === 0) {
      return r;
    } else {
      return `${r}; ${t.join("; ")}`;
    }
  }
  function u(A) {
    let e = new Map();
    for (let t of A.split(/; */)) {
      if (!t) {
        continue;
      }
      let A = t.indexOf("=");
      if (A === -1) {
        e.set(t, "true");
        continue;
      }
      let [r, n] = [t.slice(0, A), t.slice(A + 1)];
      try {
        e.set(r, decodeURIComponent(n ?? "true"));
      } catch {}
    }
    return e;
  }
  function d(A) {
    if (!A) {
      return;
    }
    let [[e, t], ...r] = u(A);
    let {
      domain: n,
      expires: a,
      httponly: i,
      maxage: o,
      path: s,
      samesite: c,
      secure: l,
      partitioned: d,
      priority: g
    } = Object.fromEntries(r.map(([A, e]) => [A.toLowerCase().replace(/-/g, ""), e]));
    {
      var f;
      var w;
      var m = {
        name: e,
        value: decodeURIComponent(t),
        domain: n,
        ...(a && {
          expires: new Date(a)
        }),
        ...(i && {
          httpOnly: true
        }),
        ...(typeof o == "string" && {
          maxAge: Number(o)
        }),
        path: s,
        ...(c && {
          sameSite: p.includes(f = (f = c).toLowerCase()) ? f : undefined
        }),
        ...(l && {
          secure: true
        }),
        ...(g && {
          priority: h.includes(w = (w = g).toLowerCase()) ? w : undefined
        }),
        ...(d && {
          partitioned: true
        })
      };
      let A = {};
      for (let e in m) {
        if (m[e]) {
          A[e] = m[e];
        }
      }
      return A;
    }
  }
  e.exports = ((A, e, t) => {
    if (e && typeof e == "object" || typeof e == "function") {
      for (let o of a(e)) {
        if (!i.call(A, o) && o !== undefined) {
          r(A, o, {
            get: () => e[o],
            enumerable: !(t = n(e, o)) || t.enumerable
          });
        }
      }
    }
    return A;
  })(r({}, "__esModule", {
    value: true
  }), o);
  var p = ["strict", "lax", "none"];
  var h = ["low", "medium", "high"];
  var g = class {
    constructor(A) {
      this._parsed = new Map();
      this._headers = A;
      const e = A.get("cookie");
      if (e) {
        for (const [A, t] of u(e)) {
          this._parsed.set(A, {
            name: A,
            value: t
          });
        }
      }
    }
    [Symbol.iterator]() {
      return this._parsed[Symbol.iterator]();
    }
    get size() {
      return this._parsed.size;
    }
    get(...A) {
      let e = typeof A[0] == "string" ? A[0] : A[0].name;
      return this._parsed.get(e);
    }
    getAll(...A) {
      var e;
      let t = Array.from(this._parsed);
      if (!A.length) {
        return t.map(([A, e]) => e);
      }
      let r = typeof A[0] == "string" ? A[0] : (e = A[0]) == null ? undefined : e.name;
      return t.filter(([A]) => A === r).map(([A, e]) => e);
    }
    has(A) {
      return this._parsed.has(A);
    }
    set(...A) {
      let [e, t] = A.length === 1 ? [A[0].name, A[0].value] : A;
      let r = this._parsed;
      r.set(e, {
        name: e,
        value: t
      });
      this._headers.set("cookie", Array.from(r).map(([A, e]) => l(e)).join("; "));
      return this;
    }
    delete(A) {
      let e = this._parsed;
      let t = Array.isArray(A) ? A.map(A => e.delete(A)) : e.delete(A);
      this._headers.set("cookie", Array.from(e).map(([A, e]) => l(e)).join("; "));
      return t;
    }
    clear() {
      this.delete(Array.from(this._parsed.keys()));
      return this;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
      return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
      return [...this._parsed.values()].map(A => `${A.name}=${encodeURIComponent(A.value)}`).join("; ");
    }
  };
  var f = class {
    constructor(A) {
      var e;
      this._parsed = new Map();
      this._headers = A;
      const n = ((e = A.getSetCookie) == null ? undefined : e.call(A)) ?? A.get("set-cookie") ?? [];
      for (const A of Array.isArray(n) ? n : function (A) {
        if (!A) {
          return [];
        }
        var e;
        var t;
        var r;
        var n;
        var a;
        var i = [];
        var o = 0;
        function s() {
          while (o < A.length && /\s/.test(A.charAt(o))) {
            o += 1;
          }
          return o < A.length;
        }
        while (o < A.length) {
          e = o;
          a = false;
          while (s()) {
            if ((t = A.charAt(o)) === ",") {
              r = o;
              o += 1;
              s();
              n = o;
              while (o < A.length && (t = A.charAt(o)) !== "=" && t !== ";" && t !== ",") {
                o += 1;
              }
              if (o < A.length && A.charAt(o) === "=") {
                a = true;
                o = n;
                i.push(A.substring(e, r));
                e = o;
              } else {
                o = r + 1;
              }
            } else {
              o += 1;
            }
          }
          if (!a || o >= A.length) {
            i.push(A.substring(e, A.length));
          }
        }
        return i;
      }(n)) {
        const e = d(A);
        if (e) {
          this._parsed.set(e.name, e);
        }
      }
    }
    get(...A) {
      let e = typeof A[0] == "string" ? A[0] : A[0].name;
      return this._parsed.get(e);
    }
    getAll(...A) {
      var e;
      let t = Array.from(this._parsed.values());
      if (!A.length) {
        return t;
      }
      let r = typeof A[0] == "string" ? A[0] : (e = A[0]) == null ? undefined : e.name;
      return t.filter(A => A.name === r);
    }
    has(A) {
      return this._parsed.has(A);
    }
    set(...A) {
      let [e, t, r] = A.length === 1 ? [A[0].name, A[0].value, A[0]] : A;
      let n = this._parsed;
      n.set(e, function (A = {
        name: "",
        value: ""
      }) {
        if (typeof A.expires == "number") {
          A.expires = new Date(A.expires);
        }
        if (A.maxAge) {
          A.expires = new Date(Date.now() + A.maxAge * 1000);
        }
        if (A.path === null || A.path === undefined) {
          A.path = "/";
        }
        return A;
      }({
        name: e,
        value: t,
        ...r
      }));
      (function (A, e) {
        e.delete("set-cookie");
        for (let [, t] of A) {
          let A = l(t);
          e.append("set-cookie", A);
        }
      })(n, this._headers);
      return this;
    }
    delete(...A) {
      let [e, t] = typeof A[0] == "string" ? [A[0]] : [A[0].name, A[0]];
      return this.set({
        ...t,
        name: e,
        value: "",
        expires: new Date(0)
      });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
      return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
      return [...this._parsed.values()].map(l).join("; ");
    }
  };
}, 51930, (A, e, t) => {
  (() => {
    "use strict";

    if (typeof __nccwpck_require__ !== "undefined") {
      __nccwpck_require__.ab = "/ROOT/client/node_modules/next/dist/compiled/cookie/";
    }
    var A;
    var t;
    var r;
    var n;
    var a = {};
    a.parse = function (e, t) {
      if (typeof e != "string") {
        throw TypeError("argument str must be a string");
      }
      var n = {};
      for (var a = e.split(r), i = (t || {}).decode || A, o = 0; o < a.length; o++) {
        var s = a[o];
        var c = s.indexOf("=");
        if (!(c < 0)) {
          var l = s.substr(0, c).trim();
          var u = s.substr(++c, s.length).trim();
          if (u[0] == "\"") {
            u = u.slice(1, -1);
          }
          if (n[l] == undefined) {
            n[l] = function (A, e) {
              try {
                return e(A);
              } catch (e) {
                return A;
              }
            }(u, i);
          }
        }
      }
      return n;
    };
    a.serialize = function (A, e, r) {
      var a = r || {};
      var i = a.encode || t;
      if (typeof i != "function") {
        throw TypeError("option encode is invalid");
      }
      if (!n.test(A)) {
        throw TypeError("argument name is invalid");
      }
      var o = i(e);
      if (o && !n.test(o)) {
        throw TypeError("argument val is invalid");
      }
      var s = A + "=" + o;
      if (a.maxAge != null) {
        var c = a.maxAge - 0;
        if (isNaN(c) || !isFinite(c)) {
          throw TypeError("option maxAge is invalid");
        }
        s += "; Max-Age=" + Math.floor(c);
      }
      if (a.domain) {
        if (!n.test(a.domain)) {
          throw TypeError("option domain is invalid");
        }
        s += "; Domain=" + a.domain;
      }
      if (a.path) {
        if (!n.test(a.path)) {
          throw TypeError("option path is invalid");
        }
        s += "; Path=" + a.path;
      }
      if (a.expires) {
        if (typeof a.expires.toUTCString != "function") {
          throw TypeError("option expires is invalid");
        }
        s += "; Expires=" + a.expires.toUTCString();
      }
      if (a.httpOnly) {
        s += "; HttpOnly";
      }
      if (a.secure) {
        s += "; Secure";
      }
      if (a.sameSite) {
        switch (typeof a.sameSite == "string" ? a.sameSite.toLowerCase() : a.sameSite) {
          case true:
          case "strict":
            s += "; SameSite=Strict";
            break;
          case "lax":
            s += "; SameSite=Lax";
            break;
          case "none":
            s += "; SameSite=None";
            break;
          default:
            throw TypeError("option sameSite is invalid");
        }
      }
      return s;
    };
    A = decodeURIComponent;
    t = encodeURIComponent;
    r = /; */;
    n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    e.exports = a;
  })();
}, 30999, (A, e, t) => {
  (() => {
    "use strict";

    let t;
    let r;
    let n;
    let a;
    let i;
    var o;
    var s;
    var c;
    var l;
    var u;
    var d;
    var p;
    var h;
    var g;
    var f;
    var w;
    var m;
    var b;
    var P;
    var v;
    var D;
    var y = {
      912: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.ContextAPI = undefined;
        let r = t(108);
        let n = t(221);
        let a = t(44);
        let i = "context";
        let o = new r.NoopContextManager();
        e.ContextAPI = class A {
          static getInstance() {
            this._instance ||= new A();
            return this._instance;
          }
          setGlobalContextManager(A) {
            return (0, n.registerGlobal)(i, A, a.DiagAPI.instance());
          }
          active() {
            return this._getContextManager().active();
          }
          with(A, e, t, ...r) {
            return this._getContextManager().with(A, e, t, ...r);
          }
          bind(A, e) {
            return this._getContextManager().bind(A, e);
          }
          _getContextManager() {
            return (0, n.getGlobal)(i) || o;
          }
          disable() {
            this._getContextManager().disable();
            (0, n.unregisterGlobal)(i, a.DiagAPI.instance());
          }
        };
      },
      44: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.DiagAPI = undefined;
        let r = t(757);
        let n = t(412);
        let a = t(711);
        let i = t(221);
        e.DiagAPI = class A {
          constructor() {
            function A(A) {
              return function (...e) {
                let t = (0, i.getGlobal)("diag");
                if (t) {
                  return t[A](...e);
                }
              };
            }
            const e = this;
            e.setLogger = (A, t = {
              logLevel: a.DiagLogLevel.INFO
            }) => {
              if (A === e) {
                let A = Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                e.error(A.stack ?? A.message);
                return false;
              }
              if (typeof t == "number") {
                t = {
                  logLevel: t
                };
              }
              let c = (0, i.getGlobal)("diag");
              let l = (0, n.createLogLevelDiagLogger)(t.logLevel ?? a.DiagLogLevel.INFO, A);
              if (c && !t.suppressOverrideMessage) {
                let A = Error().stack ?? "<failed to generate stacktrace>";
                c.warn(`Current logger will be overwritten from ${A}`);
                l.warn(`Current logger will overwrite one already registered from ${A}`);
              }
              return (0, i.registerGlobal)("diag", l, e, true);
            };
            e.disable = () => {
              (0, i.unregisterGlobal)("diag", e);
            };
            e.createComponentLogger = A => new r.DiagComponentLogger(A);
            e.verbose = A("verbose");
            e.debug = A("debug");
            e.info = A("info");
            e.warn = A("warn");
            e.error = A("error");
          }
          static instance() {
            this._instance ||= new A();
            return this._instance;
          }
        };
      },
      262: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.MetricsAPI = undefined;
        let r = t(586);
        let n = t(221);
        let a = t(44);
        let i = "metrics";
        e.MetricsAPI = class A {
          static getInstance() {
            this._instance ||= new A();
            return this._instance;
          }
          setGlobalMeterProvider(A) {
            return (0, n.registerGlobal)(i, A, a.DiagAPI.instance());
          }
          getMeterProvider() {
            return (0, n.getGlobal)(i) || r.NOOP_METER_PROVIDER;
          }
          getMeter(A, e, t) {
            return this.getMeterProvider().getMeter(A, e, t);
          }
          disable() {
            (0, n.unregisterGlobal)(i, a.DiagAPI.instance());
          }
        };
      },
      25: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.PropagationAPI = undefined;
        let r = t(221);
        let n = t(19);
        let a = t(92);
        let i = t(398);
        let o = t(504);
        let s = t(44);
        let c = "propagation";
        let l = new n.NoopTextMapPropagator();
        e.PropagationAPI = class A {
          constructor() {
            this.createBaggage = o.createBaggage;
            this.getBaggage = i.getBaggage;
            this.getActiveBaggage = i.getActiveBaggage;
            this.setBaggage = i.setBaggage;
            this.deleteBaggage = i.deleteBaggage;
          }
          static getInstance() {
            this._instance ||= new A();
            return this._instance;
          }
          setGlobalPropagator(A) {
            return (0, r.registerGlobal)(c, A, s.DiagAPI.instance());
          }
          inject(A, e, t = a.defaultTextMapSetter) {
            return this._getGlobalPropagator().inject(A, e, t);
          }
          extract(A, e, t = a.defaultTextMapGetter) {
            return this._getGlobalPropagator().extract(A, e, t);
          }
          fields() {
            return this._getGlobalPropagator().fields();
          }
          disable() {
            (0, r.unregisterGlobal)(c, s.DiagAPI.instance());
          }
          _getGlobalPropagator() {
            return (0, r.getGlobal)(c) || l;
          }
        };
      },
      397: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.TraceAPI = undefined;
        let r = t(221);
        let n = t(498);
        let a = t(477);
        let i = t(793);
        let o = t(44);
        let s = "trace";
        e.TraceAPI = class A {
          constructor() {
            this._proxyTracerProvider = new n.ProxyTracerProvider();
            this.wrapSpanContext = a.wrapSpanContext;
            this.isSpanContextValid = a.isSpanContextValid;
            this.deleteSpan = i.deleteSpan;
            this.getSpan = i.getSpan;
            this.getActiveSpan = i.getActiveSpan;
            this.getSpanContext = i.getSpanContext;
            this.setSpan = i.setSpan;
            this.setSpanContext = i.setSpanContext;
          }
          static getInstance() {
            this._instance ||= new A();
            return this._instance;
          }
          setGlobalTracerProvider(A) {
            let e = (0, r.registerGlobal)(s, this._proxyTracerProvider, o.DiagAPI.instance());
            if (e) {
              this._proxyTracerProvider.setDelegate(A);
            }
            return e;
          }
          getTracerProvider() {
            return (0, r.getGlobal)(s) || this._proxyTracerProvider;
          }
          getTracer(A, e) {
            return this.getTracerProvider().getTracer(A, e);
          }
          disable() {
            (0, r.unregisterGlobal)(s, o.DiagAPI.instance());
            this._proxyTracerProvider = new n.ProxyTracerProvider();
          }
        };
      },
      398: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.deleteBaggage = e.setBaggage = e.getActiveBaggage = e.getBaggage = undefined;
        let r = t(912);
        let n = (0, t(23).createContextKey)("OpenTelemetry Baggage Key");
        function a(A) {
          return A.getValue(n) || undefined;
        }
        e.getBaggage = a;
        e.getActiveBaggage = function () {
          return a(r.ContextAPI.getInstance().active());
        };
        e.setBaggage = function (A, e) {
          return A.setValue(n, e);
        };
        e.deleteBaggage = function (A) {
          return A.deleteValue(n);
        };
      },
      152: (A, e) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.BaggageImpl = undefined;
        e.BaggageImpl = class A {
          constructor(A) {
            this._entries = A ? new Map(A) : new Map();
          }
          getEntry(A) {
            let e = this._entries.get(A);
            if (e) {
              return Object.assign({}, e);
            }
          }
          getAllEntries() {
            return Array.from(this._entries.entries()).map(([A, e]) => [A, e]);
          }
          setEntry(e, t) {
            let r = new A(this._entries);
            r._entries.set(e, t);
            return r;
          }
          removeEntry(e) {
            let t = new A(this._entries);
            t._entries.delete(e);
            return t;
          }
          removeEntries(...e) {
            let t = new A(this._entries);
            for (let A of e) {
              t._entries.delete(A);
            }
            return t;
          }
          clear() {
            return new A();
          }
        };
      },
      647: (A, e) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.baggageEntryMetadataSymbol = undefined;
        e.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
      },
      504: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.baggageEntryMetadataFromString = e.createBaggage = undefined;
        let r = t(44);
        let n = t(152);
        let a = t(647);
        let i = r.DiagAPI.instance();
        e.createBaggage = function (A = {}) {
          return new n.BaggageImpl(new Map(Object.entries(A)));
        };
        e.baggageEntryMetadataFromString = function (A) {
          if (typeof A != "string") {
            i.error(`Cannot create baggage metadata from unknown type: ${typeof A}`);
            A = "";
          }
          return {
            __TYPE__: a.baggageEntryMetadataSymbol,
            toString: () => A
          };
        };
      },
      778: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.context = undefined;
        e.context = t(912).ContextAPI.getInstance();
      },
      108: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.NoopContextManager = undefined;
        let r = t(23);
        e.NoopContextManager = class {
          active() {
            return r.ROOT_CONTEXT;
          }
          with(A, e, t, ...r) {
            return e.call(t, ...r);
          }
          bind(A, e) {
            return e;
          }
          enable() {
            return this;
          }
          disable() {
            return this;
          }
        };
      },
      23: (A, e) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.ROOT_CONTEXT = e.createContextKey = undefined;
        e.createContextKey = function (A) {
          return Symbol.for(A);
        };
        e.ROOT_CONTEXT = new class A {
          constructor(e) {
            const t = this;
            t._currentContext = e ? new Map(e) : new Map();
            t.getValue = A => t._currentContext.get(A);
            t.setValue = (e, r) => {
              let n = new A(t._currentContext);
              n._currentContext.set(e, r);
              return n;
            };
            t.deleteValue = e => {
              let r = new A(t._currentContext);
              r._currentContext.delete(e);
              return r;
            };
          }
        }();
      },
      304: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.diag = undefined;
        e.diag = t(44).DiagAPI.instance();
      },
      757: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.DiagComponentLogger = undefined;
        let r = t(221);
        function n(A, e, t) {
          let n = (0, r.getGlobal)("diag");
          if (n) {
            t.unshift(e);
            return n[A](...t);
          }
        }
        e.DiagComponentLogger = class {
          constructor(A) {
            this._namespace = A.namespace || "DiagComponentLogger";
          }
          debug(...A) {
            return n("debug", this._namespace, A);
          }
          error(...A) {
            return n("error", this._namespace, A);
          }
          info(...A) {
            return n("info", this._namespace, A);
          }
          warn(...A) {
            return n("warn", this._namespace, A);
          }
          verbose(...A) {
            return n("verbose", this._namespace, A);
          }
        };
      },
      83: (A, e) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.DiagConsoleLogger = undefined;
        let t = [{
          n: "error",
          c: "error"
        }, {
          n: "warn",
          c: "warn"
        }, {
          n: "info",
          c: "info"
        }, {
          n: "debug",
          c: "debug"
        }, {
          n: "verbose",
          c: "trace"
        }];
        e.DiagConsoleLogger = class {
          constructor() {
            for (let A = 0; A < t.length; A++) {
              this[t[A].n] = function (A) {
                return function (...e) {
                  if (console) {
                    let t = console[A];
                    if (typeof t != "function") {
                      t = console.log;
                    }
                    if (typeof t == "function") {
                      return t.apply(console, e);
                    }
                  }
                };
              }(t[A].c);
            }
          }
        };
      },
      412: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.createLogLevelDiagLogger = undefined;
        let r = t(711);
        e.createLogLevelDiagLogger = function (A, e) {
          function t(t, r) {
            let n = e[t];
            if (typeof n == "function" && A >= r) {
              return n.bind(e);
            } else {
              return function () {};
            }
          }
          if (A < r.DiagLogLevel.NONE) {
            A = r.DiagLogLevel.NONE;
          } else if (A > r.DiagLogLevel.ALL) {
            A = r.DiagLogLevel.ALL;
          }
          e = e || {};
          return {
            error: t("error", r.DiagLogLevel.ERROR),
            warn: t("warn", r.DiagLogLevel.WARN),
            info: t("info", r.DiagLogLevel.INFO),
            debug: t("debug", r.DiagLogLevel.DEBUG),
            verbose: t("verbose", r.DiagLogLevel.VERBOSE)
          };
        };
      },
      711: (A, e) => {
        var t;
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.DiagLogLevel = undefined;
        (t = e.DiagLogLevel ||= {})[t.NONE = 0] = "NONE";
        t[t.ERROR = 30] = "ERROR";
        t[t.WARN = 50] = "WARN";
        t[t.INFO = 60] = "INFO";
        t[t.DEBUG = 70] = "DEBUG";
        t[t.VERBOSE = 80] = "VERBOSE";
        t[t.ALL = 9999] = "ALL";
      },
      221: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.unregisterGlobal = e.getGlobal = e.registerGlobal = undefined;
        let r = t(678);
        let n = t(652);
        let a = t(662);
        let i = n.VERSION.split(".")[0];
        let o = Symbol.for(`opentelemetry.js.api.${i}`);
        let s = r._globalThis;
        e.registerGlobal = function (A, e, t, r = false) {
          let i = s[o] = s[o] ?? {
            version: n.VERSION
          };
          if (!r && i[A]) {
            let e = Error(`@opentelemetry/api: Attempted duplicate registration of API: ${A}`);
            t.error(e.stack || e.message);
            return false;
          }
          if (i.version !== n.VERSION) {
            let e = Error(`@opentelemetry/api: Registration of version v${i.version} for ${A} does not match previously registered API v${n.VERSION}`);
            t.error(e.stack || e.message);
            return false;
          }
          i[A] = e;
          t.debug(`@opentelemetry/api: Registered a global for ${A} v${n.VERSION}.`);
          return true;
        };
        e.getGlobal = function (A) {
          var e;
          var t;
          let r = (e = s[o]) == null ? undefined : e.version;
          if (r && (0, a.isCompatible)(r)) {
            if ((t = s[o]) == null) {
              return undefined;
            } else {
              return t[A];
            }
          }
        };
        e.unregisterGlobal = function (A, e) {
          e.debug(`@opentelemetry/api: Unregistering a global for ${A} v${n.VERSION}.`);
          let t = s[o];
          if (t) {
            delete t[A];
          }
        };
      },
      662: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.isCompatible = e._makeCompatibilityCheck = undefined;
        let r = t(652);
        let n = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
        function a(A) {
          let e = new Set([A]);
          let t = new Set();
          let r = A.match(n);
          if (!r) {
            return () => false;
          }
          let a = {
            major: +r[1],
            minor: +r[2],
            patch: +r[3],
            prerelease: r[4]
          };
          if (a.prerelease != null) {
            return function (e) {
              return e === A;
            };
          }
          function i(A) {
            t.add(A);
            return false;
          }
          return function (A) {
            if (e.has(A)) {
              return true;
            }
            if (t.has(A)) {
              return false;
            }
            let r = A.match(n);
            if (!r) {
              return i(A);
            }
            let o = {
              major: +r[1],
              minor: +r[2],
              patch: +r[3],
              prerelease: r[4]
            };
            if (o.prerelease != null || a.major !== o.major) {
              return i(A);
            }
            if (a.major === 0) {
              if (a.minor === o.minor && a.patch <= o.patch) {
                e.add(A);
                return true;
              } else {
                return i(A);
              }
            }
            if (a.minor <= o.minor) {
              e.add(A);
              return true;
            } else {
              return i(A);
            }
          };
        }
        e._makeCompatibilityCheck = a;
        e.isCompatible = a(r.VERSION);
      },
      120: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.metrics = undefined;
        e.metrics = t(262).MetricsAPI.getInstance();
      },
      532: (A, e) => {
        var t;
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.ValueType = undefined;
        (t = e.ValueType ||= {})[t.INT = 0] = "INT";
        t[t.DOUBLE = 1] = "DOUBLE";
      },
      440: (A, e) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.createNoopMeter = e.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = e.NOOP_OBSERVABLE_GAUGE_METRIC = e.NOOP_OBSERVABLE_COUNTER_METRIC = e.NOOP_UP_DOWN_COUNTER_METRIC = e.NOOP_HISTOGRAM_METRIC = e.NOOP_COUNTER_METRIC = e.NOOP_METER = e.NoopObservableUpDownCounterMetric = e.NoopObservableGaugeMetric = e.NoopObservableCounterMetric = e.NoopObservableMetric = e.NoopHistogramMetric = e.NoopUpDownCounterMetric = e.NoopCounterMetric = e.NoopMetric = e.NoopMeter = undefined;
        class t {
          createHistogram(A, t) {
            return e.NOOP_HISTOGRAM_METRIC;
          }
          createCounter(A, t) {
            return e.NOOP_COUNTER_METRIC;
          }
          createUpDownCounter(A, t) {
            return e.NOOP_UP_DOWN_COUNTER_METRIC;
          }
          createObservableGauge(A, t) {
            return e.NOOP_OBSERVABLE_GAUGE_METRIC;
          }
          createObservableCounter(A, t) {
            return e.NOOP_OBSERVABLE_COUNTER_METRIC;
          }
          createObservableUpDownCounter(A, t) {
            return e.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
          }
          addBatchObservableCallback(A, e) {}
          removeBatchObservableCallback(A) {}
        }
        e.NoopMeter = t;
        class r {}
        e.NoopMetric = r;
        class n extends r {
          add(A, e) {}
        }
        e.NoopCounterMetric = n;
        class a extends r {
          add(A, e) {}
        }
        e.NoopUpDownCounterMetric = a;
        class i extends r {
          record(A, e) {}
        }
        e.NoopHistogramMetric = i;
        class o {
          addCallback(A) {}
          removeCallback(A) {}
        }
        e.NoopObservableMetric = o;
        class s extends o {}
        e.NoopObservableCounterMetric = s;
        class c extends o {}
        e.NoopObservableGaugeMetric = c;
        class l extends o {}
        e.NoopObservableUpDownCounterMetric = l;
        e.NOOP_METER = new t();
        e.NOOP_COUNTER_METRIC = new n();
        e.NOOP_HISTOGRAM_METRIC = new i();
        e.NOOP_UP_DOWN_COUNTER_METRIC = new a();
        e.NOOP_OBSERVABLE_COUNTER_METRIC = new s();
        e.NOOP_OBSERVABLE_GAUGE_METRIC = new c();
        e.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new l();
        e.createNoopMeter = function () {
          return e.NOOP_METER;
        };
      },
      586: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.NOOP_METER_PROVIDER = e.NoopMeterProvider = undefined;
        let r = t(440);
        class n {
          getMeter(A, e, t) {
            return r.NOOP_METER;
          }
        }
        e.NoopMeterProvider = n;
        e.NOOP_METER_PROVIDER = new n();
      },
      678: function (A, e, t) {
        var r = this && this.__createBinding || (Object.create ? function (A, e, t, r = t) {
          Object.defineProperty(A, r, {
            enumerable: true,
            get: function () {
              return e[t];
            }
          });
        } : function (A, e, t, r = t) {
          A[r] = e[t];
        });
        var n = this && this.__exportStar || function (A, e) {
          for (var t in A) {
            if (t !== "default" && !Object.prototype.hasOwnProperty.call(e, t)) {
              r(e, A, t);
            }
          }
        };
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        n(t(59), e);
      },
      460: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t._globalThis = undefined;
        t._globalThis = typeof globalThis == "object" ? globalThis : A.g;
      },
      59: function (A, e, t) {
        var r = this && this.__createBinding || (Object.create ? function (A, e, t, r = t) {
          Object.defineProperty(A, r, {
            enumerable: true,
            get: function () {
              return e[t];
            }
          });
        } : function (A, e, t, r = t) {
          A[r] = e[t];
        });
        var n = this && this.__exportStar || function (A, e) {
          for (var t in A) {
            if (t !== "default" && !Object.prototype.hasOwnProperty.call(e, t)) {
              r(e, A, t);
            }
          }
        };
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        n(t(460), e);
      },
      27: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.propagation = undefined;
        e.propagation = t(25).PropagationAPI.getInstance();
      },
      19: (A, e) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.NoopTextMapPropagator = undefined;
        e.NoopTextMapPropagator = class {
          inject(A, e) {}
          extract(A, e) {
            return A;
          }
          fields() {
            return [];
          }
        };
      },
      92: (A, e) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.defaultTextMapSetter = e.defaultTextMapGetter = undefined;
        e.defaultTextMapGetter = {
          get(A, e) {
            if (A != null) {
              return A[e];
            }
          },
          keys: A => A == null ? [] : Object.keys(A)
        };
        e.defaultTextMapSetter = {
          set(A, e, t) {
            if (A != null) {
              A[e] = t;
            }
          }
        };
      },
      816: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.trace = undefined;
        e.trace = t(397).TraceAPI.getInstance();
      },
      374: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.NonRecordingSpan = undefined;
        let r = t(546);
        e.NonRecordingSpan = class {
          constructor(A = r.INVALID_SPAN_CONTEXT) {
            this._spanContext = A;
          }
          spanContext() {
            return this._spanContext;
          }
          setAttribute(A, e) {
            return this;
          }
          setAttributes(A) {
            return this;
          }
          addEvent(A, e) {
            return this;
          }
          setStatus(A) {
            return this;
          }
          updateName(A) {
            return this;
          }
          end(A) {}
          isRecording() {
            return false;
          }
          recordException(A, e) {}
        };
      },
      637: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.NoopTracer = undefined;
        let r = t(912);
        let n = t(793);
        let a = t(374);
        let i = t(477);
        let o = r.ContextAPI.getInstance();
        e.NoopTracer = class {
          startSpan(A, e, t = o.active()) {
            var r;
            if (e == null ? undefined : e.root) {
              return new a.NonRecordingSpan();
            }
            let s = t && (0, n.getSpanContext)(t);
            if (typeof (r = s) == "object" && typeof r.spanId == "string" && typeof r.traceId == "string" && typeof r.traceFlags == "number" && (0, i.isSpanContextValid)(s)) {
              return new a.NonRecordingSpan(s);
            } else {
              return new a.NonRecordingSpan();
            }
          }
          startActiveSpan(A, e, t, r) {
            let a;
            let i;
            let s;
            if (arguments.length < 2) {
              return;
            }
            if (arguments.length == 2) {
              s = e;
            } else if (arguments.length == 3) {
              a = e;
              s = t;
            } else {
              a = e;
              i = t;
              s = r;
            }
            let c = i ?? o.active();
            let l = this.startSpan(A, a, c);
            let u = (0, n.setSpan)(c, l);
            return o.with(u, s, undefined, l);
          }
        };
      },
      76: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.NoopTracerProvider = undefined;
        let r = t(637);
        e.NoopTracerProvider = class {
          getTracer(A, e, t) {
            return new r.NoopTracer();
          }
        };
      },
      779: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.ProxyTracer = undefined;
        let r = new (t(637).NoopTracer)();
        e.ProxyTracer = class {
          constructor(A, e, t, r) {
            this._provider = A;
            this.name = e;
            this.version = t;
            this.options = r;
          }
          startSpan(A, e, t) {
            return this._getTracer().startSpan(A, e, t);
          }
          startActiveSpan(A, e, t, r) {
            let n = this._getTracer();
            return Reflect.apply(n.startActiveSpan, n, arguments);
          }
          _getTracer() {
            if (this._delegate) {
              return this._delegate;
            }
            let A = this._provider.getDelegateTracer(this.name, this.version, this.options);
            if (A) {
              this._delegate = A;
              return this._delegate;
            } else {
              return r;
            }
          }
        };
      },
      498: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.ProxyTracerProvider = undefined;
        let r = t(779);
        let n = new (t(76).NoopTracerProvider)();
        e.ProxyTracerProvider = class {
          getTracer(A, e, t) {
            return this.getDelegateTracer(A, e, t) ?? new r.ProxyTracer(this, A, e, t);
          }
          getDelegate() {
            return this._delegate ?? n;
          }
          setDelegate(A) {
            this._delegate = A;
          }
          getDelegateTracer(A, e, t) {
            var r;
            if ((r = this._delegate) == null) {
              return undefined;
            } else {
              return r.getTracer(A, e, t);
            }
          }
        };
      },
      312: (A, e) => {
        var t;
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.SamplingDecision = undefined;
        (t = e.SamplingDecision ||= {})[t.NOT_RECORD = 0] = "NOT_RECORD";
        t[t.RECORD = 1] = "RECORD";
        t[t.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
      },
      793: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.getSpanContext = e.setSpanContext = e.deleteSpan = e.setSpan = e.getActiveSpan = e.getSpan = undefined;
        let r = t(23);
        let n = t(374);
        let a = t(912);
        let i = (0, r.createContextKey)("OpenTelemetry Context Key SPAN");
        function o(A) {
          return A.getValue(i) || undefined;
        }
        function s(A, e) {
          return A.setValue(i, e);
        }
        e.getSpan = o;
        e.getActiveSpan = function () {
          return o(a.ContextAPI.getInstance().active());
        };
        e.setSpan = s;
        e.deleteSpan = function (A) {
          return A.deleteValue(i);
        };
        e.setSpanContext = function (A, e) {
          return s(A, new n.NonRecordingSpan(e));
        };
        e.getSpanContext = function (A) {
          var e;
          if ((e = o(A)) == null) {
            return undefined;
          } else {
            return e.spanContext();
          }
        };
      },
      285: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.TraceStateImpl = undefined;
        let r = t(240);
        e.TraceStateImpl = class A {
          constructor(A) {
            this._internalState = new Map();
            if (A) {
              this._parse(A);
            }
          }
          set(A, e) {
            let t = this._clone();
            if (t._internalState.has(A)) {
              t._internalState.delete(A);
            }
            t._internalState.set(A, e);
            return t;
          }
          unset(A) {
            let e = this._clone();
            e._internalState.delete(A);
            return e;
          }
          get(A) {
            return this._internalState.get(A);
          }
          serialize() {
            return this._keys().reduce((A, e) => {
              A.push(e + "=" + this.get(e));
              return A;
            }, []).join(",");
          }
          _parse(A) {
            if (!(A.length > 512)) {
              this._internalState = A.split(",").reverse().reduce((A, e) => {
                let t = e.trim();
                let n = t.indexOf("=");
                if (n !== -1) {
                  let a = t.slice(0, n);
                  let i = t.slice(n + 1, e.length);
                  if ((0, r.validateKey)(a) && (0, r.validateValue)(i)) {
                    A.set(a, i);
                  }
                }
                return A;
              }, new Map());
              if (this._internalState.size > 32) {
                this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, 32));
              }
            }
          }
          _keys() {
            return Array.from(this._internalState.keys()).reverse();
          }
          _clone() {
            let e = new A();
            e._internalState = new Map(this._internalState);
            return e;
          }
        };
      },
      240: (A, e) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.validateValue = e.validateKey = undefined;
        let t = "[_0-9a-z-*/]";
        let r = `[a-z]${t}{0,255}`;
        let n = `[a-z0-9]${t}{0,240}@[a-z]${t}{0,13}`;
        let a = RegExp(`^(?:${r}|${n})$`);
        let i = /^[ -~]{0,255}[!-~]$/;
        let o = /,|=/;
        e.validateKey = function (A) {
          return a.test(A);
        };
        e.validateValue = function (A) {
          return i.test(A) && !o.test(A);
        };
      },
      87: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.createTraceState = undefined;
        let r = t(285);
        e.createTraceState = function (A) {
          return new r.TraceStateImpl(A);
        };
      },
      546: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = undefined;
        let r = t(731);
        e.INVALID_SPANID = "0000000000000000";
        e.INVALID_TRACEID = "00000000000000000000000000000000";
        e.INVALID_SPAN_CONTEXT = {
          traceId: e.INVALID_TRACEID,
          spanId: e.INVALID_SPANID,
          traceFlags: r.TraceFlags.NONE
        };
      },
      613: (A, e) => {
        var t;
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.SpanKind = undefined;
        (t = e.SpanKind ||= {})[t.INTERNAL = 0] = "INTERNAL";
        t[t.SERVER = 1] = "SERVER";
        t[t.CLIENT = 2] = "CLIENT";
        t[t.PRODUCER = 3] = "PRODUCER";
        t[t.CONSUMER = 4] = "CONSUMER";
      },
      477: (A, e, t) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.wrapSpanContext = e.isSpanContextValid = e.isValidSpanId = e.isValidTraceId = undefined;
        let r = t(546);
        let n = t(374);
        let a = /^([0-9a-f]{32})$/i;
        let i = /^[0-9a-f]{16}$/i;
        function o(A) {
          return a.test(A) && A !== r.INVALID_TRACEID;
        }
        function s(A) {
          return i.test(A) && A !== r.INVALID_SPANID;
        }
        e.isValidTraceId = o;
        e.isValidSpanId = s;
        e.isSpanContextValid = function (A) {
          return o(A.traceId) && s(A.spanId);
        };
        e.wrapSpanContext = function (A) {
          return new n.NonRecordingSpan(A);
        };
      },
      854: (A, e) => {
        var t;
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.SpanStatusCode = undefined;
        (t = e.SpanStatusCode ||= {})[t.UNSET = 0] = "UNSET";
        t[t.OK = 1] = "OK";
        t[t.ERROR = 2] = "ERROR";
      },
      731: (A, e) => {
        var t;
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.TraceFlags = undefined;
        (t = e.TraceFlags ||= {})[t.NONE = 0] = "NONE";
        t[t.SAMPLED = 1] = "SAMPLED";
      },
      652: (A, e) => {
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        e.VERSION = undefined;
        e.VERSION = "1.6.0";
      }
    };
    var E = {};
    function _(A) {
      var e = E[A];
      if (e !== undefined) {
        return e.exports;
      }
      var t = E[A] = {
        exports: {}
      };
      var r = true;
      try {
        y[A].call(t.exports, t, t.exports, _);
        r = false;
      } finally {
        if (r) {
          delete E[A];
        }
      }
      return t.exports;
    }
    _.ab = "/ROOT/client/node_modules/next/dist/compiled/@opentelemetry/api/";
    var R = {};
    Object.defineProperty(R, "__esModule", {
      value: true
    });
    R.trace = R.propagation = R.metrics = R.diag = R.context = R.INVALID_SPAN_CONTEXT = R.INVALID_TRACEID = R.INVALID_SPANID = R.isValidSpanId = R.isValidTraceId = R.isSpanContextValid = R.createTraceState = R.TraceFlags = R.SpanStatusCode = R.SpanKind = R.SamplingDecision = R.ProxyTracerProvider = R.ProxyTracer = R.defaultTextMapSetter = R.defaultTextMapGetter = R.ValueType = R.createNoopMeter = R.DiagLogLevel = R.DiagConsoleLogger = R.ROOT_CONTEXT = R.createContextKey = R.baggageEntryMetadataFromString = undefined;
    o = _(504);
    Object.defineProperty(R, "baggageEntryMetadataFromString", {
      enumerable: true,
      get: function () {
        return o.baggageEntryMetadataFromString;
      }
    });
    s = _(23);
    Object.defineProperty(R, "createContextKey", {
      enumerable: true,
      get: function () {
        return s.createContextKey;
      }
    });
    Object.defineProperty(R, "ROOT_CONTEXT", {
      enumerable: true,
      get: function () {
        return s.ROOT_CONTEXT;
      }
    });
    c = _(83);
    Object.defineProperty(R, "DiagConsoleLogger", {
      enumerable: true,
      get: function () {
        return c.DiagConsoleLogger;
      }
    });
    l = _(711);
    Object.defineProperty(R, "DiagLogLevel", {
      enumerable: true,
      get: function () {
        return l.DiagLogLevel;
      }
    });
    u = _(440);
    Object.defineProperty(R, "createNoopMeter", {
      enumerable: true,
      get: function () {
        return u.createNoopMeter;
      }
    });
    d = _(532);
    Object.defineProperty(R, "ValueType", {
      enumerable: true,
      get: function () {
        return d.ValueType;
      }
    });
    p = _(92);
    Object.defineProperty(R, "defaultTextMapGetter", {
      enumerable: true,
      get: function () {
        return p.defaultTextMapGetter;
      }
    });
    Object.defineProperty(R, "defaultTextMapSetter", {
      enumerable: true,
      get: function () {
        return p.defaultTextMapSetter;
      }
    });
    h = _(779);
    Object.defineProperty(R, "ProxyTracer", {
      enumerable: true,
      get: function () {
        return h.ProxyTracer;
      }
    });
    g = _(498);
    Object.defineProperty(R, "ProxyTracerProvider", {
      enumerable: true,
      get: function () {
        return g.ProxyTracerProvider;
      }
    });
    f = _(312);
    Object.defineProperty(R, "SamplingDecision", {
      enumerable: true,
      get: function () {
        return f.SamplingDecision;
      }
    });
    w = _(613);
    Object.defineProperty(R, "SpanKind", {
      enumerable: true,
      get: function () {
        return w.SpanKind;
      }
    });
    m = _(854);
    Object.defineProperty(R, "SpanStatusCode", {
      enumerable: true,
      get: function () {
        return m.SpanStatusCode;
      }
    });
    b = _(731);
    Object.defineProperty(R, "TraceFlags", {
      enumerable: true,
      get: function () {
        return b.TraceFlags;
      }
    });
    P = _(87);
    Object.defineProperty(R, "createTraceState", {
      enumerable: true,
      get: function () {
        return P.createTraceState;
      }
    });
    v = _(477);
    Object.defineProperty(R, "isSpanContextValid", {
      enumerable: true,
      get: function () {
        return v.isSpanContextValid;
      }
    });
    Object.defineProperty(R, "isValidTraceId", {
      enumerable: true,
      get: function () {
        return v.isValidTraceId;
      }
    });
    Object.defineProperty(R, "isValidSpanId", {
      enumerable: true,
      get: function () {
        return v.isValidSpanId;
      }
    });
    D = _(546);
    Object.defineProperty(R, "INVALID_SPANID", {
      enumerable: true,
      get: function () {
        return D.INVALID_SPANID;
      }
    });
    Object.defineProperty(R, "INVALID_TRACEID", {
      enumerable: true,
      get: function () {
        return D.INVALID_TRACEID;
      }
    });
    Object.defineProperty(R, "INVALID_SPAN_CONTEXT", {
      enumerable: true,
      get: function () {
        return D.INVALID_SPAN_CONTEXT;
      }
    });
    t = _(778);
    Object.defineProperty(R, "context", {
      enumerable: true,
      get: function () {
        return t.context;
      }
    });
    r = _(304);
    Object.defineProperty(R, "diag", {
      enumerable: true,
      get: function () {
        return r.diag;
      }
    });
    n = _(120);
    Object.defineProperty(R, "metrics", {
      enumerable: true,
      get: function () {
        return n.metrics;
      }
    });
    a = _(27);
    Object.defineProperty(R, "propagation", {
      enumerable: true,
      get: function () {
        return a.propagation;
      }
    });
    i = _(816);
    Object.defineProperty(R, "trace", {
      enumerable: true,
      get: function () {
        return i.trace;
      }
    });
    R.default = {
      context: t.context,
      diag: r.diag,
      metrics: n.metrics,
      propagation: a.propagation,
      trace: i.trace
    };
    e.exports = R;
  })();
}, 93382, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var r = {
    isRequestApiAllowedInCurrentPhase: function () {
      return l;
    },
    throwForSearchParamsAccessInUseCache: function () {
      return c;
    },
    throwWithStaticGenerationBailoutErrorWithDynamicError: function () {
      return s;
    }
  };
  for (var n in r) {
    Object.defineProperty(t, n, {
      enumerable: true,
      get: r[n]
    });
  }
  let a = A.r(4824);
  let i = A.r(20635);
  let o = A.r(24725);
  function s(A, e) {
    throw Object.defineProperty(new a.StaticGenBailoutError(`Route ${A} with \`dynamic = "error"\` couldn't be rendered statically because it used ${e}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
      value: "E543",
      enumerable: false,
      configurable: true
    });
  }
  function c(A, e) {
    let t = Object.defineProperty(Error(`Route ${A.route} used \`searchParams\` inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await \`searchParams\` outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
      value: "E842",
      enumerable: false,
      configurable: true
    });
    Error.captureStackTrace(t, e);
    A.invalidDynamicUsageError ??= t;
    throw t;
  }
  function l(A) {
    switch (A.phase) {
      case "action":
      case "render":
        return true;
      case "after":
        {
          let A = i.actionAsyncStorage.getStore();
          if (A && (A.isAppRoute || A.isAction)) {
            return true;
          }
          let e = o.afterTaskAsyncStorage.getStore();
          if (e) {
            return e.rootTaskSpawnPhase === "action";
          }
          return false;
        }
    }
  }
}, 47129, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "connection", {
    enumerable: true,
    get: function () {
      return l;
    }
  });
  let r = A.r(56704);
  let n = A.r(32319);
  let a = A.r(78466);
  let i = A.r(4824);
  let o = A.r(49137);
  let s = A.r(93382);
  A.r(75697);
  let c = A.r(28338);
  function l() {
    let A = r.workAsyncStorage.getStore();
    let e = n.workUnitAsyncStorage.getStore();
    if (A) {
      if (e && !(0, s.isRequestApiAllowedInCurrentPhase)(e)) {
        throw Object.defineProperty(Error(`Route ${A.route} used \`connection()\` inside \`after()\` while rendering. The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but \`after()\` executes after the request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
          value: "E1377",
          enumerable: false,
          configurable: true
        });
      }
      if (A.forceStatic) {
        return Promise.resolve(undefined);
      }
      if (A.dynamicShouldError) {
        throw Object.defineProperty(new i.StaticGenBailoutError(`Route ${A.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`connection()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
          value: "E847",
          enumerable: false,
          configurable: true
        });
      }
      if (e) {
        switch (e.type) {
          case "cache":
            {
              let e = Object.defineProperty(Error(`Route ${A.route} used \`connection()\` inside "use cache". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual request, but caches must be able to be produced before a request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                value: "E841",
                enumerable: false,
                configurable: true
              });
              Error.captureStackTrace(e, l);
              (0, o.applyOwnerStack)(e);
              A.invalidDynamicUsageError ??= e;
              throw e;
            }
          case "private-cache":
            {
              let e = Object.defineProperty(Error(`Route ${A.route} used \`connection()\` inside "use cache: private". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual navigation request, but caches must be able to be produced before a navigation request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                value: "E837",
                enumerable: false,
                configurable: true
              });
              Error.captureStackTrace(e, l);
              (0, o.applyOwnerStack)(e);
              A.invalidDynamicUsageError ??= e;
              throw e;
            }
          case "unstable-cache":
            throw Object.defineProperty(Error(`Route ${A.route} used \`connection()\` inside a function cached with \`unstable_cache()\`. The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
              value: "E840",
              enumerable: false,
              configurable: true
            });
          case "generate-static-params":
            throw Object.defineProperty(Error(`Route ${A.route} used \`connection()\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
              value: "E1125",
              enumerable: false,
              configurable: true
            });
          case "prerender":
          case "prerender-client":
          case "prerender-runtime":
            return (0, o.makeDynamicHangingPromise)(e.renderSignal, A.route, "`connection()`");
          case "validation-client":
            {
              let A = "`connection`";
              throw Object.defineProperty(new c.InvariantError(`${A} must not be used within a Client Component. Next.js should be preventing ${A} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E1063",
                enumerable: false,
                configurable: true
              });
            }
          case "prerender-ppr":
            return (0, a.postponeWithTracking)(A.route, "connection", e.dynamicTracking);
          case "prerender-legacy":
            return (0, a.throwToInterruptStaticGeneration)("connection", A, e);
          case "request":
            (0, a.trackDynamicDataInDynamicRender)(e);
            if (e.asyncApiPromises) {
              return e.asyncApiPromises.connection;
            }
            return Promise.resolve(undefined);
        }
      }
    }
    (0, n.throwForMissingRequestStore)("connection");
  }
}, 48296, (A, e, t) => {
  let r = {
    NextRequest: A.r(56105).NextRequest,
    NextResponse: A.r(69465).NextResponse,
    ImageResponse: A.r(19928).ImageResponse,
    userAgentFromString: A.r(91830).userAgentFromString,
    userAgent: A.r(91830).userAgent,
    URLPattern: A.r(10011).URLPattern,
    after: A.r(62900).after,
    connection: A.r(47129).connection
  };
  e.exports = r;
  t.NextRequest = r.NextRequest;
  t.NextResponse = r.NextResponse;
  t.ImageResponse = r.ImageResponse;
  t.userAgentFromString = r.userAgentFromString;
  t.userAgent = r.userAgent;
  t.URLPattern = r.URLPattern;
  t.after = r.after;
  t.connection = r.connection;
}, 75839, A => {
  "use strict";

  var e = A.i(48296);
  let t = Buffer.from("AAABAAQAEBAAAAEAIAAoBQAARgAAACAgAAABACAAKBQAAG4FAAAwMAAAAQAgACgtAACWGQAAAAAAAAEAIACNHgAAvkYAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAAABdAAAAugAAALoAAABdAAAAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAKAAAADyAAAA/wAAAP8AAAD/AAAA/wAAAPIAAACgAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAOAAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAOAAAAA4AAAAAAAAAAAAAAAAAAAAHwAAAOIAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA4gAAAB8AAAAAAAAAAAAAAKEAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAChAAAAAAAAACMAAAD0AAAA/wAAAP9PT0//rq6u/6urq/+rq6v/q6ur/6urq/+tra3/Z2dn/wAAAP8AAAD/AAAA9AAAACMAAABZAAAA/wAAAP8AAAD/Hx8f/+3t7f///////////////////////f39/zU1Nf8AAAD/AAAA/wAAAP8AAABZAAAAuwAAAP8AAAD/AAAA/wAAAP9ra2v//////////////////////46Ojv8AAAD/AAAA/wAAAP8AAAD/AAAAuwAAALsAAAD/AAAA/wAAAP8AAAD/CQkJ/83Nzf///////////+Tk5P8YGBj/AAAA/wAAAP8AAAD/AAAA/wAAALsAAABZAAAA/wAAAP8AAAD/AAAA/wAAAP9KSkr//f39//////9ra2v/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAABZAAAAIwAAAPQAAAD/AAAA/wAAAP8AAAD/AQEB/7a2tv/V1dX/CQkJ/wAAAP8AAAD/AAAA/wAAAP8AAAD0AAAAIwAAAAAAAAChAAAA/wAAAP8AAAD/AAAA/wAAAP8xMTH/RERE/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAoQAAAAAAAAAAAAAAHwAAAOIAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA4gAAAB8AAAAAAAAAAAAAAAAAAAA4AAAA4AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA4AAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAACgAAAA8gAAAP8AAAD/AAAA/wAAAP8AAADyAAAAoAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAAABdAAAAugAAALoAAABdAAAAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAsAAAAVQAAAIEAAADoAAAA6AAAAIEAAABVAAAALAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoAAACFAAAA0gAAAPkAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD5AAAA0gAAAIUAAAAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAACWAAAA8wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPMAAACWAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRAAAA4QAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADhAAAAUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcgAAAPsAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD7AAAAcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHIAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPAAAA+wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD7AAAATwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGwAAAOQAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADjAAAAGwAAAAAAAAAAAAAAAAAAAAAAAACXAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAACXAAAAAAAAAAAAAAAAAAAAKAAAAPUAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPQAAAAnAAAAAAAAAAAAAACGAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/ODg4/4uLi/+IiIj/iIiI/4iIiP+IiIj/iIiI/4iIiP+IiIj/iIiI/4iIiP+IiIj/iIiI/4iIiP+JiYn/X19f/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAIYAAAAAAAAABwAAANQAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8eHh7/7u7u//////////////////////////////////////////////////////////////////////9TU1P/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA1AAAAAcAAAArAAAA+gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP9oaGj/////////////////////////////////////////////////////////////////rq6u/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD6AAAAKwAAAFQAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wgICP/Ly8v///////////////////////////////////////////////////////T09P8sLCz/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAABUAAAAggAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/0dHR//9/f3/////////////////////////////////////////////////jY2N/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAIEAAADpAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/62trf///////////////////////////////////////////+Tk5P8XFxf/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA6QAAAOkAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/Kysr//Pz8///////////////////////////////////////ampq/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADpAAAAgQAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/i4uL/////////////////////////////////8zMzP8ICAj/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAIIAAABUAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8WFhb/4+Pj///////////////////////9/f3/SUlJ/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAVAAAACsAAAD6AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP9oaGj//////////////////////6+vr/8BAQH/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPoAAAArAAAABwAAANQAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wgICP/Ly8v////////////09PT/LCws/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA1AAAAAcAAAAAAAAAhgAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/0dHR//9/f3//////42Njf8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAACGAAAAAAAAAAAAAAAnAAAA9AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/7Gxsf/s7Oz/FxcX/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA9QAAACgAAAAAAAAAAAAAAAAAAACXAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/MzMz/19fX/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAACXAAAAAAAAAAAAAAAAAAAAAAAAABoAAADjAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA5AAAABsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE8AAAD7AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPsAAABPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHIAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHIAAAD7AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+wAAAHIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFEAAADhAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAOEAAABRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAACWAAAA8wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPMAAACWAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqAAAAhQAAANIAAAD5AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+QAAANIAAACFAAAAKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAACwAAABVAAAAgQAAAOgAAADoAAAAgQAAAFUAAAAsAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAwAAAAYAAAAAEAIAAAAAAAAC0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAAAAKAAAAEwAAABqAAAAswAAAPgAAAD3AAAAswAAAGoAAABLAAAAKAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATAAAAVgAAAKAAAADYAAAA+AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+AAAANgAAACgAAAAVQAAABMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJQAAAIsAAADhAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAOEAAACLAAAAJgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYAAACLAAAA7wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA7wAAAIsAAAAWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUQAAANwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADcAAAAUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAACKAAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAIoAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAK0AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAACtAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAuAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAuAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAACuAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAK4AAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIoAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAACKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAP0AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD9AAAATwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVAAAA3wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA3wAAABUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACLAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAIsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMAAADxAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPEAAAAjAAAAAAAAAAAAAAAAAAAAAAAAAIwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAACLAAAAAAAAAAAAAAAAAAAAEQAAAOQAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8kJCT/aGho/2VlZf9lZWX/ZWVl/2VlZf9lZWX/ZWVl/2VlZf9lZWX/ZWVl/2VlZf9lZWX/ZWVl/2VlZf9lZWX/ZWVl/2VlZf9lZWX/ZWVl/2VlZf9lZWX/ZWVl/1BQUP8BAQH/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADkAAAAEQAAAAAAAAAAAAAAVQAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8cHBz/6+vr/////////////////////////////////////////////////////////////////////////////////////////////////////////////////3Nzc/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAVQAAAAAAAAAAAAAAoQAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/ZWVl////////////////////////////////////////////////////////////////////////////////////////////////////////////zMzM/wgICP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAoQAAAAAAAAAJAAAA2gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/BwcH/8nJyf/////////////////////////////////////////////////////////////////////////////////////////////////9/f3/SEhI/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA2gAAAAkAAAAoAAAA+QAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/0VFRf/8/Pz///////////////////////////////////////////////////////////////////////////////////////////+urq7/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+AAAACgAAABLAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP+qqqr///////////////////////////////////////////////////////////////////////////////////////T09P8sLCz/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAEwAAABqAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8pKSn/8vLy/////////////////////////////////////////////////////////////////////////////////4yMjP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAGoAAAC0AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/iIiI////////////////////////////////////////////////////////////////////////////4+Pj/xYWFv8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAALMAAAD4AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/FBQU/+Hh4f//////////////////////////////////////////////////////////////////////aWlp/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPgAAAD4AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/2VlZf/////////////////////////////////////////////////////////////////Ly8v/CAgI/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPgAAACzAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wcHB//Jycn///////////////////////////////////////////////////////39/f9ISEj/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAALQAAABqAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP9FRUX//Pz8/////////////////////////////////////////////////66u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AAAAAAAAAAAAAAAAAAAAAAAVAAAA3wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA3wAAABUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATwAAAP0AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD9AAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIoAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAACKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAACuAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAK4AAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAuAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAuAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAK0AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAACtAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAACKAAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAIoAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUgAAANwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADcAAAAUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYAAACLAAAA7wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA7wAAAIsAAAAWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJgAAAIsAAADhAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAOEAAACLAAAAJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATAAAAVQAAAKAAAADYAAAA+AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+AAAANgAAACgAAAAVgAAABMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAAAAKAAAAEsAAABqAAAAswAAAPcAAAD4AAAAswAAAGoAAABMAAAAKAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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", "base64");
  A.s(["GET", 0, function () {
    return new e.NextResponse(t, {
      headers: {
        "Content-Type": "image/x-icon",
        "Cache-Control": "public, max-age=0, must-revalidate"
      }
    });
  }, "dynamic", 0, "force-static"]);
}, 80722, A => {
  "use strict";

  let e;
  let t;
  let r;
  var n;
  var a;
  var i;
  var o;
  var s;
  var c;
  var l;
  var u;
  var d;
  var p;
  var h;
  var g;
  var f;
  var w;
  var m;
  var b;
  var P;
  var v;
  var D;
  var y;
  var E = A.i(89927);
  (n = {}).PAGES = "PAGES";
  n.PAGES_API = "PAGES_API";
  n.APP_PAGE = "APP_PAGE";
  n.APP_ROUTE = "APP_ROUTE";
  n.IMAGE = "IMAGE";
  var _ = n;
  (a = R || {}).handleRequest = "BaseServer.handleRequest";
  a.run = "BaseServer.run";
  a.pipe = "BaseServer.pipe";
  a.getStaticHTML = "BaseServer.getStaticHTML";
  a.render = "BaseServer.render";
  a.renderToResponseWithComponents = "BaseServer.renderToResponseWithComponents";
  a.renderToResponse = "BaseServer.renderToResponse";
  a.renderToHTML = "BaseServer.renderToHTML";
  a.renderError = "BaseServer.renderError";
  a.renderErrorToResponse = "BaseServer.renderErrorToResponse";
  a.renderErrorToHTML = "BaseServer.renderErrorToHTML";
  a.render404 = "BaseServer.render404";
  var R = a;
  (i = S || {}).loadDefaultErrorComponents = "LoadComponents.loadDefaultErrorComponents";
  i.loadComponents = "LoadComponents.loadComponents";
  var S = i;
  (o = O || {}).getRequestHandler = "NextServer.getRequestHandler";
  o.getRequestHandlerWithMetadata = "NextServer.getRequestHandlerWithMetadata";
  o.getServer = "NextServer.getServer";
  o.getServerRequestHandler = "NextServer.getServerRequestHandler";
  o.createServer = "createServer.createServer";
  var O = o;
  (s = x || {}).compression = "NextNodeServer.compression";
  s.getBuildId = "NextNodeServer.getBuildId";
  s.createComponentTree = "NextNodeServer.createComponentTree";
  s.clientComponentLoading = "NextNodeServer.clientComponentLoading";
  s.getLayoutOrPageModule = "NextNodeServer.getLayoutOrPageModule";
  s.generateStaticRoutes = "NextNodeServer.generateStaticRoutes";
  s.generateFsStaticRoutes = "NextNodeServer.generateFsStaticRoutes";
  s.generatePublicRoutes = "NextNodeServer.generatePublicRoutes";
  s.generateImageRoutes = "NextNodeServer.generateImageRoutes.route";
  s.sendRenderResult = "NextNodeServer.sendRenderResult";
  s.proxyRequest = "NextNodeServer.proxyRequest";
  s.runApi = "NextNodeServer.runApi";
  s.render = "NextNodeServer.render";
  s.renderHTML = "NextNodeServer.renderHTML";
  s.imageOptimizer = "NextNodeServer.imageOptimizer";
  s.getPagePath = "NextNodeServer.getPagePath";
  s.getRoutesManifest = "NextNodeServer.getRoutesManifest";
  s.findPageComponents = "NextNodeServer.findPageComponents";
  s.getFontManifest = "NextNodeServer.getFontManifest";
  s.getServerComponentManifest = "NextNodeServer.getServerComponentManifest";
  s.getRequestHandler = "NextNodeServer.getRequestHandler";
  s.renderToHTML = "NextNodeServer.renderToHTML";
  s.renderError = "NextNodeServer.renderError";
  s.renderErrorToHTML = "NextNodeServer.renderErrorToHTML";
  s.render404 = "NextNodeServer.render404";
  s.startResponse = "NextNodeServer.startResponse";
  s.route = "route";
  s.onProxyReq = "onProxyReq";
  s.apiResolver = "apiResolver";
  s.internalFetch = "internalFetch";
  var x = s;
  (c = T || {}).startServer = "startServer.startServer";
  var T = c;
  (l = C || {}).getServerSideProps = "Render.getServerSideProps";
  l.getStaticProps = "Render.getStaticProps";
  l.renderToString = "Render.renderToString";
  l.renderDocument = "Render.renderDocument";
  l.createBodyResult = "Render.createBodyResult";
  var C = l;
  (u = N || {}).renderToString = "AppRender.renderToString";
  u.renderToReadableStream = "AppRender.renderToReadableStream";
  u.getBodyResult = "AppRender.getBodyResult";
  u.fetch = "AppRender.fetch";
  u.waitShellReady = "AppRender.waitShellReady";
  u.renderToNodeFizzStream = "AppRender.renderToNodeFizzStream";
  u.instantInsights = "AppRender.instantInsights";
  u.instantInsightsPrepareValidation = "AppRender.instantInsights.prepareValidation";
  u.instantInsightsRunValidation = "AppRender.instantInsights.runValidation";
  var N = u;
  (d = I || {}).executeRoute = "Router.executeRoute";
  var I = d;
  (p = j || {}).runHandler = "Node.runHandler";
  var j = p;
  (h = M || {}).runHandler = "AppRouteRouteHandlers.runHandler";
  var M = h;
  (g = k || {}).generateMetadata = "ResolveMetadata.generateMetadata";
  g.generateViewport = "ResolveMetadata.generateViewport";
  var k = g;
  (f = B || {}).execute = "Middleware.execute";
  var B = f;
  let L = new Set(["Middleware.execute", "BaseServer.handleRequest", "Render.getServerSideProps", "Render.getStaticProps", "AppRender.fetch", "AppRender.getBodyResult", "Render.renderDocument", "Node.runHandler", "AppRouteRouteHandlers.runHandler", "ResolveMetadata.generateMetadata", "ResolveMetadata.generateViewport", "NextNodeServer.createComponentTree", "NextNodeServer.findPageComponents", "NextNodeServer.getLayoutOrPageModule", "NextNodeServer.startResponse", "NextNodeServer.clientComponentLoading"]);
  let G = new Set(["NextNodeServer.findPageComponents", "NextNodeServer.createComponentTree", "NextNodeServer.clientComponentLoading"]);
  Symbol.for("@next/request-insights-store");
  Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
    value: "E504",
    enumerable: false,
    configurable: true
  });
  Symbol.for("@next/request-insights-identity-storage");
  let U = process.env.NEXT_OTEL_PERFORMANCE_PREFIX;
  function H() {}
  Symbol.for("@next/local-span-recorder");
  try {
    e = A.r(70406);
  } catch (t) {
    e = A.r(30999);
  }
  let {
    context: V,
    propagation: X,
    trace: q,
    SpanStatusCode: F,
    SpanKind: Q,
    ROOT_CONTEXT: W
  } = e;
  class Y extends Error {
    constructor(A, e) {
      super();
      this.bubble = A;
      this.result = e;
    }
  }
  let z = (A, e) => {
    if (typeof e == "object" && e !== null && e instanceof Y && e.bubble) {
      A.setAttribute("next.bubble", true);
    } else {
      if (e) {
        A.recordException(e);
        A.setAttribute("error.type", e.name);
      }
      A.setStatus({
        code: F.ERROR,
        message: e == null ? undefined : e.message
      });
    }
    A.end();
  };
  let $ = new Map();
  let K = e.createContextKey("next.rootSpanId");
  let J = 0;
  let Z = {
    set(A, e, t) {
      A.push({
        key: e,
        value: t
      });
    }
  };
  r = new class A {
    getTracerInstance() {
      return q.getTracer("next.js", "0.0.1");
    }
    isOpenTelemetryEnabled() {
      var A;
      var e;
      let t = q.getSpan(V.active());
      if (t == null ? undefined : t.isRecording()) {
        return true;
      }
      let r = q.getTracerProvider();
      return !("getDelegate" in r) || (r.getDelegate == null || (e = r.getDelegate.call(r)) == null || (A = e.constructor) == null ? undefined : A.name) !== "NoopTracerProvider";
    }
    getContext() {
      return V;
    }
    getTracePropagationData() {
      let A = V.active();
      let e = [];
      X.inject(A, e, Z);
      return e;
    }
    getActiveScopeSpan() {
      let A = H();
      let e = A == null ? undefined : A.getActiveLocalSpan();
      if (e && (A == null ? undefined : A.isOpenTelemetryIsolatedSpan(e))) {
        return e;
      } else {
        return q.getSpan(V.active());
      }
    }
    runWithDetachedContext(A) {
      if (U || this.isOpenTelemetryEnabled()) {
        return V.with(W, A);
      } else {
        return A();
      }
    }
    withPropagatedContext(A, e, t, r = false) {
      let n = V.active();
      if (!U && !this.isOpenTelemetryEnabled() && !q.getSpanContext(n)) {
        return e();
      }
      if (r) {
        let r = X.extract(W, A, t);
        if (q.getSpanContext(r)) {
          return V.with(r, e);
        }
        let a = X.extract(n, A, t);
        return V.with(a, e);
      }
      if (q.getSpanContext(n)) {
        return e();
      }
      let a = X.extract(n, A, t);
      return V.with(a, e);
    }
    trace(...A) {
      let [e, t, r] = A;
      let n = !!U || this.isOpenTelemetryEnabled();
      let a = H();
      let i = (a == null ? undefined : a.isLocalSpanRecordingEnabled()) ?? false;
      if (!n && !i) {
        if (typeof t == "function") {
          return t();
        } else {
          return r();
        }
      }
      let {
        fn: o,
        options: s
      } = typeof t == "function" ? {
        fn: t,
        options: {}
      } : {
        fn: r,
        options: {
          ...t
        }
      };
      let c = s.spanName ?? e;
      let l = s.parentSpan ?? this.getActiveScopeSpan();
      let u = l && (a == null ? undefined : a.isOpenTelemetryIsolatedSpan(l)) ? l : undefined;
      let d = !u && (L.has(e) || process.env.NEXT_OTEL_VERBOSE === "1");
      if (!d && !(a == null ? undefined : a.isRequestInsightsEnabled()) || s.hideSpan) {
        return o();
      }
      let p = u ? V.active() : this.getSpanContext(l);
      p ||= (V == null ? undefined : V.active()) ?? W;
      let h = p.getValue(K);
      let g = typeof h != "number" || !$.has(h);
      let f = J++;
      s.attributes = {
        "next.span_category": "nextjs",
        "next.span_name": c,
        "next.span_type": e,
        ...s.attributes
      };
      return V.with(p.setValue(K, f), () => this.runWithActiveSpan(c, s, p, n && d, i, u, A => {
        let t;
        if (U && e && G.has(e)) {
          t = "performance" in globalThis && "measure" in performance ? globalThis.performance.now() : undefined;
        }
        let r = false;
        let n = () => {
          if (!r) {
            r = true;
            $.delete(f);
            if (t) {
              performance.measure(`${U}:next-${(e.split(".").pop() || "").replace(/[A-Z]/g, A => "-" + A.toLowerCase())}`, {
                start: t,
                end: performance.now()
              });
            }
          }
        };
        if (g) {
          $.set(f, new Map(Object.entries(s.attributes ?? {})));
        }
        if (o.length > 1) {
          try {
            return o(A, e => {
              if (e) {
                z(A, e);
              } else {
                A.end();
              }
            });
          } catch (e) {
            z(A, e);
            throw e;
          } finally {
            n();
          }
        }
        try {
          let e = o(A);
          if (e !== null && typeof e == "object" && "then" in e && typeof e.then == "function") {
            return e.then(e => {
              A.end();
              return e;
            }).catch(e => {
              z(A, e);
              throw e;
            }).finally(n);
          }
          A.end();
          n();
          return e;
        } catch (e) {
          z(A, e);
          n();
          throw e;
        }
      }));
    }
    runWithActiveSpan(A, e, t, r, n, a, i) {
      if (r) {
        return this.getTracerInstance().startActiveSpan(A, e, r => i(n ? this.createLocalRecordingSpan(A, e, t, r, a) : r));
      }
      let o = this.createLocalRecordingSpan(A, e, t, undefined, a);
      let s = H();
      return s.withLocalSpan(o, () => s.isOpenTelemetryIsolatedSpan(o) ? i(o) : V.with(q.setSpan(V.active(), o), i, undefined, o));
    }
    createLocalRecordingSpan(A, e, t, r, n) {
      let a = (n == null ? undefined : n.spanContext()) ?? q.getSpanContext(t);
      let i = r == null ? undefined : r.spanContext();
      return H().createLocalSpan({
        name: A,
        attributes: e.attributes,
        links: e.links,
        startTime: e.startTime,
        delegateSpan: r,
        traceId: (i == null ? undefined : i.traceId) ?? (a == null ? undefined : a.traceId),
        spanId: i == null ? undefined : i.spanId,
        parentSpanId: a == null ? undefined : a.spanId,
        isolateOpenTelemetry: n !== undefined
      });
    }
    wrap(...A) {
      let e = this;
      let [t, r, n] = A.length === 3 ? A : [A[0], {}, A[1]];
      if (L.has(t) || process.env.NEXT_OTEL_VERBOSE === "1") {
        return function () {
          let A = r;
          if (typeof A == "function" && typeof n == "function") {
            A = A.apply(this, arguments);
          }
          let a = arguments.length - 1;
          let i = arguments[a];
          if (typeof i != "function") {
            return e.trace(t, A, () => n.apply(this, arguments));
          }
          {
            let r = e.getContext().bind(V.active(), i);
            return e.trace(t, A, (A, e) => {
              arguments[a] = function (A) {
                if (e != null) {
                  e(A);
                }
                return r.apply(this, arguments);
              };
              return n.apply(this, arguments);
            });
          }
        };
      } else {
        return n;
      }
    }
    startSpan(...A) {
      let [e, t] = A;
      let r = t ? {
        ...t,
        attributes: {
          "next.span_category": "nextjs",
          ...t.attributes
        }
      } : {
        attributes: {
          "next.span_category": "nextjs"
        }
      };
      let n = H();
      let a = r.parentSpan ?? this.getActiveScopeSpan();
      let i = a && (n == null ? undefined : n.isOpenTelemetryIsolatedSpan(a)) ? a : undefined;
      let o = (i ? undefined : this.getSpanContext(a)) ?? V.active();
      if (!(n == null ? undefined : n.isLocalSpanRecordingEnabled())) {
        return this.getTracerInstance().startSpan(e, r, o);
      }
      let s = !i && this.isOpenTelemetryEnabled() ? this.getTracerInstance().startSpan(e, r, o) : undefined;
      return this.createLocalRecordingSpan(e, r, o, s, i);
    }
    getSpanContext(A) {
      if (A) {
        return q.setSpan(V.active(), A);
      } else {
        return undefined;
      }
    }
    getRootSpanAttributes() {
      let A = V.active().getValue(K);
      return $.get(A);
    }
    setRootSpanAttribute(A, e) {
      let t = V.active().getValue(K);
      let r = $.get(t);
      if (r && !r.has(A)) {
        r.set(A, e);
      }
    }
    withSpan(A, e) {
      let t = H();
      if (t == null ? undefined : t.isLocalRecordingSpan(A)) {
        return t.withLocalSpan(A, () => t.isOpenTelemetryIsolatedSpan(A) ? e() : V.with(q.setSpan(V.active(), A), e));
      } else {
        return V.with(q.setSpan(V.active(), A), e);
      }
    }
  }();
  let AA = () => r;
  let Ae = "x-next-cache-tags";
  let At = {
    shared: "shared",
    reactServerComponents: "rsc",
    serverSideRendering: "ssr",
    actionBrowser: "action-browser",
    apiNode: "api-node",
    apiEdge: "api-edge",
    middleware: "middleware",
    instrument: "instrument",
    edgeAsset: "edge-asset",
    appPagesBrowser: "app-pages-browser",
    pagesDirBrowser: "pages-dir-browser",
    pagesDirEdge: "pages-dir-edge",
    pagesDirNode: "pages-dir-node"
  };
  ({
    ...At,
    GROUP: {
      builtinReact: [At.reactServerComponents, At.actionBrowser],
      serverOnly: [At.reactServerComponents, At.actionBrowser, At.instrument, At.middleware],
      neutralTarget: [At.apiNode, At.apiEdge],
      clientOnly: [At.serverSideRendering, At.appPagesBrowser],
      bundled: [At.reactServerComponents, At.actionBrowser, At.serverSideRendering, At.appPagesBrowser, At.shared, At.instrument, At.middleware],
      appPages: [At.reactServerComponents, At.serverSideRendering, At.appPagesBrowser, At.actionBrowser]
    }
  });
  var Ar = A.i(20103);
  class An extends Error {
    constructor(A) {
      super(`Dynamic server usage: ${A}`);
      this.description = A;
      this.digest = "DYNAMIC_SERVER_USAGE";
    }
  }
  class Aa extends Error {
    constructor(...A) {
      super(...A);
      this.code = "NEXT_STATIC_GEN_BAILOUT";
    }
  }
  var Ai = A.i(32319);
  var Ao = A.i(56704);
  class As extends Error {
    constructor(A, e) {
      super(`Invariant: ${A.endsWith(".") ? A : A + "."} This is a bug in Next.js.`, e);
      Object.defineProperty(this, "__NEXT_ERROR_CODE", {
        value: "E1179",
        enumerable: false,
        configurable: true
      });
      this.name = "InvariantError";
    }
  }
  (w = {})[w.Before = 1] = "Before";
  w[w.ShellStatic = 11] = "ShellStatic";
  w[w.Static = 13] = "Static";
  w[w.ShellRuntime = 21] = "ShellRuntime";
  w[w.Runtime = 23] = "Runtime";
  w[w.Dynamic = 30] = "Dynamic";
  w[w.Abandoned = 40] = "Abandoned";
  var Ac = w;
  A.i(59043);
  class Al extends Error {
    constructor(A, e) {
      super(`During prerendering, ${e} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${e} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${A}".`);
      this.route = A;
      this.expression = e;
      this.digest = "HANGING_PROMISE_REJECTION";
    }
  }
  let Au = new WeakMap();
  function Ad(A, e, t) {
    var r = A;
    var n = new Al(e, t);
    if (r.aborted) {
      return Promise.reject(n);
    }
    {
      let A = new Promise((A, e) => {
        let t = e.bind(null, n);
        let a = Au.get(r);
        if (a) {
          a.push(t);
        } else {
          let A = [t];
          Au.set(r, A);
          r.addEventListener("abort", () => {
            for (let e = 0; e < A.length; e++) {
              A[e]();
            }
          }, {
            once: true
          });
        }
      });
      A.catch(Ap);
      return A;
    }
  }
  function Ap() {}
  Ac.ShellRuntime;
  Ac.Static;
  Ac.Runtime;
  let Ah = typeof Ar.default.unstable_postpone == "function";
  function Ag(A, e, t) {
    if (e) {
      switch (e.type) {
        case "cache":
        case "unstable-cache":
        case "private-cache":
          return;
      }
    }
    if (!A.forceDynamic && !A.forceStatic) {
      if (A.dynamicShouldError) {
        throw Object.defineProperty(new Aa(`Route ${A.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${t}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
          value: "E553",
          enumerable: false,
          configurable: true
        });
      }
      if (e) {
        switch (e.type) {
          case "prerender-ppr":
            var r;
            var n;
            var a;
            r = A.route;
            n = t;
            a = e.dynamicTracking;
            (function () {
              if (!Ah) {
                throw Object.defineProperty(Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
                  value: "E224",
                  enumerable: false,
                  configurable: true
                });
              }
            })();
            if (a) {
              a.dynamicAccesses.push({
                stack: a.isDebugDynamicAccesses ? Error().stack : undefined,
                expression: n
              });
            }
            Ar.default.unstable_postpone(Af(r, n));
            return;
          case "prerender-legacy":
            e.revalidate = 0;
            let i = Object.defineProperty(new An(`Route ${A.route} couldn't be rendered statically because it used ${t}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
              value: "E550",
              enumerable: false,
              configurable: true
            });
            A.dynamicUsageDescription = t;
            A.dynamicUsageStack = i.stack;
            throw i;
        }
      }
    }
  }
  function Af(A, e) {
    return `Route ${A} needs to bail out of prerendering at this point because it used ${e}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
  }
  if (((m = Af("%%%", "^^^")).includes("needs to bail out of prerendering at this point because it used") && m.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error")) === false) {
    throw Object.defineProperty(Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
      value: "E296",
      enumerable: false,
      configurable: true
    });
  }
  RegExp("\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at __next_root_layout_boundary__ \\([^\\n]*\\)");
  RegExp("\\n\\s+at __next_metadata_boundary__[\\n\\s]");
  RegExp("\\n\\s+at __next_viewport_boundary__[\\n\\s]");
  RegExp("\\n\\s+at __next_outlet_boundary__[\\n\\s]");
  RegExp("\\n\\s+at __next_instant_validation_boundary__[\\n\\s]");
  RegExp("\\n\\s+at __next_instant_slot_(\\d+)__[\\n\\s]");
  let Aw = () => {};
  function Am(A) {
    if (!A.body) {
      return [A, A];
    }
    let [e, r] = A.body.tee();
    let n = new Response(e, {
      status: A.status,
      statusText: A.statusText,
      headers: A.headers
    });
    Object.defineProperty(n, "url", {
      value: A.url,
      configurable: true,
      enumerable: true,
      writable: false
    });
    let a = new Response(r, {
      status: A.status,
      statusText: A.statusText,
      headers: A.headers
    });
    Object.defineProperty(a, "url", {
      value: A.url,
      configurable: true,
      enumerable: true,
      writable: false
    });
    if (t) {
      if (n.body) {
        t.register(n, new WeakRef(n.body));
      }
      if (a.body) {
        t.register(a, new WeakRef(a.body));
      }
    }
    return [n, a];
  }
  if (globalThis.FinalizationRegistry) {
    t = new FinalizationRegistry(A => {
      let e = A.deref();
      if (e && !e.locked) {
        e.cancel("Response object has been garbage collected").then(Aw);
      }
    });
  }
  let Ab = new Set(["traceparent", "tracestate"]);
  class AP {
    constructor() {
      let A;
      let e;
      this.promise = new Promise((t, r) => {
        A = t;
        e = r;
      });
      this.resolve = A;
      this.reject = e;
    }
  }
  class Av {
    constructor(A, e, t) {
      this.prev = null;
      this.next = null;
      this.key = A;
      this.data = e;
      this.size = t;
    }
  }
  class AD {
    constructor() {
      this.prev = null;
      this.next = null;
    }
  }
  class Ay {
    constructor(A, e, t) {
      this.cache = new Map();
      this.totalSize = 0;
      this.maxSize = A;
      this.calculateSize = e;
      this.onEvict = t;
      this.head = new AD();
      this.tail = new AD();
      this.head.next = this.tail;
      this.tail.prev = this.head;
    }
    addToHead(A) {
      A.prev = this.head;
      A.next = this.head.next;
      this.head.next.prev = A;
      this.head.next = A;
    }
    removeNode(A) {
      A.prev.next = A.next;
      A.next.prev = A.prev;
    }
    moveToHead(A) {
      this.removeNode(A);
      this.addToHead(A);
    }
    removeTail() {
      let A = this.tail.prev;
      this.removeNode(A);
      return A;
    }
    set(A, e) {
      let t = (this.calculateSize == null ? undefined : this.calculateSize.call(this, e, A)) ?? 1;
      if (t <= 0) {
        throw Object.defineProperty(Error(`LRUCache: calculateSize returned ${t}, but size must be > 0. Items with size 0 would never be evicted, causing unbounded cache growth.`), "__NEXT_ERROR_CODE", {
          value: "E1045",
          enumerable: false,
          configurable: true
        });
      }
      if (t > this.maxSize) {
        console.warn("Single item size exceeds maxSize");
        return false;
      }
      let r = this.cache.get(A);
      if (r) {
        r.data = e;
        this.totalSize = this.totalSize - r.size + t;
        r.size = t;
        this.moveToHead(r);
      } else {
        let r = new Av(A, e, t);
        this.cache.set(A, r);
        this.addToHead(r);
        this.totalSize += t;
      }
      while (this.totalSize > this.maxSize && this.cache.size > 0) {
        let A = this.removeTail();
        this.cache.delete(A.key);
        this.totalSize -= A.size;
        if (this.onEvict != null) {
          this.onEvict.call(this, A.key, A.data);
        }
      }
      return true;
    }
    has(A) {
      return this.cache.has(A);
    }
    get(A) {
      let e = this.cache.get(A);
      if (e) {
        this.moveToHead(e);
        return e.data;
      }
    }
    *[Symbol.iterator]() {
      let A = this.head.next;
      while (A && A !== this.tail) {
        let e = A;
        yield [e.key, e.data];
        A = A.next;
      }
    }
    remove(A) {
      let e = this.cache.get(A);
      if (e) {
        this.removeNode(e);
        this.cache.delete(A);
        this.totalSize -= e.size;
      }
    }
    get size() {
      return this.cache.size;
    }
    get currentSize() {
      return this.totalSize;
    }
  }
  let {
    env: AE,
    stdout: A_
  } = ((D = globalThis) == null ? undefined : D.process) ?? {};
  let AR = AE && !AE.NO_COLOR && (AE.FORCE_COLOR || (A_ == null ? undefined : A_.isTTY) && !AE.CI && AE.TERM !== "dumb");
  let AS = (A, e, t, r) => {
    let n = A.substring(0, r) + t;
    let a = A.substring(r + e.length);
    let i = a.indexOf(e);
    if (~i) {
      return n + AS(a, e, t, i);
    } else {
      return n + a;
    }
  };
  let AO = (A, e, t = A) => AR ? r => {
    let n = "" + r;
    let a = n.indexOf(e, A.length);
    if (~a) {
      return A + AS(n, e, t, a) + e;
    } else {
      return A + n + e;
    }
  } : String;
  let Ax = AO("[1m", "[22m", "[22m[1m");
  AO("[2m", "[22m", "[22m[2m");
  AO("[3m", "[23m");
  AO("[4m", "[24m");
  AO("[7m", "[27m");
  AO("[8m", "[28m");
  AO("[9m", "[29m");
  AO("[30m", "[39m");
  let AT = AO("[31m", "[39m");
  let AC = AO("[32m", "[39m");
  let AN = AO("[33m", "[39m");
  AO("[34m", "[39m");
  let AI = AO("[35m", "[39m");
  AO("[38;2;173;127;168m", "[39m");
  AO("[36m", "[39m");
  let Aj = AO("[37m", "[39m");
  AO("[90m", "[39m");
  AO("[40m", "[49m");
  AO("[41m", "[49m");
  AO("[42m", "[49m");
  AO("[43m", "[49m");
  AO("[44m", "[49m");
  AO("[45m", "[49m");
  AO("[46m", "[49m");
  AO("[47m", "[49m");
  Aj(Ax("○"));
  AT(Ax("⨯"));
  AN(Ax("⚠"));
  Aj(Ax(" "));
  AC(Ax("✓"));
  AI(Ax("»"));
  new Ay(10000, A => A.length);
  new Ay(10000, A => A.length);
  (b = {}).APP_PAGE = "APP_PAGE";
  b.APP_ROUTE = "APP_ROUTE";
  b.PAGES = "PAGES";
  b.FETCH = "FETCH";
  b.REDIRECT = "REDIRECT";
  b.IMAGE = "IMAGE";
  var AM = b;
  (P = {}).APP_PAGE = "APP_PAGE";
  P.APP_ROUTE = "APP_ROUTE";
  P.PAGES = "PAGES";
  P.FETCH = "FETCH";
  P.IMAGE = "IMAGE";
  var Ak = P;
  function AB() {}
  new TextEncoder();
  let AL = new TextEncoder();
  function AG(A) {
    return new ReadableStream({
      start(e) {
        e.enqueue(AL.encode(A));
        e.close();
      }
    });
  }
  function AU(A) {
    return new ReadableStream({
      start(e) {
        e.enqueue(A);
        e.close();
      }
    });
  }
  async function AH(A, e) {
    let t = new TextDecoder("utf-8", {
      fatal: true
    });
    let r = "";
    for await (let n of A) {
      if (e == null ? undefined : e.aborted) {
        return r;
      }
      r += t.decode(n, {
        stream: true
      });
    }
    return r + t.decode();
  }
  let AV = Symbol.for("NextInternalRequestMeta");
  function AX(A, e) {
    let t = A[AV] || {};
    if (typeof e == "string") {
      return t[e];
    } else {
      return t;
    }
  }
  function Aq(A) {
    let e = new Headers();
    for (let [t, r] of Object.entries(A)) {
      for (let A of Array.isArray(r) ? r : [r]) {
        if (A !== undefined) {
          if (typeof A == "number") {
            A = A.toString();
          }
          e.append(t, A);
        }
      }
    }
    return e;
  }
  function AF(A) {
    var e;
    var t;
    var r;
    var n;
    var a;
    var i = [];
    var o = 0;
    function s() {
      while (o < A.length && /\s/.test(A.charAt(o))) {
        o += 1;
      }
      return o < A.length;
    }
    while (o < A.length) {
      e = o;
      a = false;
      while (s()) {
        if ((t = A.charAt(o)) === ",") {
          r = o;
          o += 1;
          s();
          n = o;
          while (o < A.length && (t = A.charAt(o)) !== "=" && t !== ";" && t !== ",") {
            o += 1;
          }
          if (o < A.length && A.charAt(o) === "=") {
            a = true;
            o = n;
            i.push(A.substring(e, r));
            e = o;
          } else {
            o = r + 1;
          }
        } else {
          o += 1;
        }
      }
      if (!a || o >= A.length) {
        i.push(A.substring(e, A.length));
      }
    }
    return i;
  }
  function AQ(A) {
    let e = {};
    let t = [];
    if (A) {
      for (let [r, n] of A.entries()) {
        if (r.toLowerCase() === "set-cookie") {
          t.push(...AF(n));
          e[r] = t.length === 1 ? t[0] : t;
        } else {
          e[r] = n;
        }
      }
    }
    return e;
  }
  function AW(A) {
    if (A.charCodeAt(A.length - 1) === 47 && A.length > 1) {
      return A.slice(0, -1);
    } else {
      return A;
    }
  }
  function AY(A) {
    let e = A.indexOf("#");
    let t = A.indexOf("?");
    let r = t > -1 && (e < 0 || t < e);
    if (r || e > -1) {
      return {
        pathname: A.substring(0, r ? t : e),
        query: r ? A.substring(t, e > -1 ? e : undefined) : "",
        hash: e > -1 ? A.slice(e) : ""
      };
    } else {
      return {
        pathname: A,
        query: "",
        hash: ""
      };
    }
  }
  function Az(A, e) {
    if (!A.startsWith("/") || !e) {
      return A;
    }
    let {
      pathname: t,
      query: r,
      hash: n
    } = AY(A);
    return `${e}${t}${r}${n}`;
  }
  function A$(A, e) {
    if (!A.startsWith("/") || !e) {
      return A;
    }
    let {
      pathname: t,
      query: r,
      hash: n
    } = AY(A);
    return `${t}${e}${r}${n}`;
  }
  function AK(A, e) {
    if (typeof A != "string") {
      return false;
    }
    let {
      pathname: t
    } = AY(A);
    return t === e || t.startsWith(e + "/");
  }
  let AJ = new WeakMap();
  function AZ(A, e) {
    let t;
    if (!e) {
      return {
        pathname: A
      };
    }
    let r = AJ.get(e);
    if (!r) {
      r = e.map(A => A.toLowerCase());
      AJ.set(e, r);
    }
    let n = A.split("/", 2);
    if (!n[1]) {
      return {
        pathname: A
      };
    }
    let a = n[1].toLowerCase();
    let i = r.indexOf(a);
    if (i < 0) {
      return {
        pathname: A
      };
    } else {
      t = e[i];
      return {
        pathname: A = A.slice(t.length + 1) || "/",
        detectedLocale: t
      };
    }
  }
  let A0 = /^(?:127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)$/;
  function A8(A, e) {
    let t = new URL(String(A), e && String(e));
    if (A0.test(t.hostname)) {
      t.hostname = "localhost";
    }
    return t;
  }
  let A1 = Symbol("NextURLInternal");
  class A4 {
    constructor(A, e, t) {
      let r;
      let n;
      if (typeof e == "object" && "pathname" in e || typeof e == "string") {
        r = e;
        n = t || {};
      } else {
        n = t || e || {};
      }
      this[A1] = {
        url: A8(A, r ?? n.base),
        options: n,
        basePath: ""
      };
      this.analyze();
    }
    analyze() {
      var A;
      var e;
      var t;
      var r;
      var n;
      let a = function (A, e) {
        let {
          basePath: t,
          i18n: r,
          trailingSlash: n
        } = e.nextConfig ?? {};
        let a = {
          pathname: A,
          trailingSlash: A !== "/" ? A.endsWith("/") : n
        };
        if (t && AK(a.pathname, t)) {
          a.pathname = function (A, e) {
            if (!AK(A, e)) {
              return A;
            }
            let t = A.slice(e.length);
            if (t.startsWith("/")) {
              return t;
            } else {
              return `/${t}`;
            }
          }(a.pathname, t);
          a.basePath = t;
        }
        let i = a.pathname;
        if (a.pathname.startsWith("/_next/data/") && a.pathname.endsWith(".json")) {
          let A = a.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
          a.buildId = A[0];
          i = A[1] !== "index" ? `/${A.slice(1).join("/")}` : "/";
          if (e.parseData === true) {
            a.pathname = i;
          }
        }
        if (r) {
          let A = e.i18nProvider ? e.i18nProvider.analyze(a.pathname) : AZ(a.pathname, r.locales);
          a.locale = A.detectedLocale;
          a.pathname = A.pathname ?? a.pathname;
          if (!A.detectedLocale && a.buildId && (A = e.i18nProvider ? e.i18nProvider.analyze(i) : AZ(i, r.locales)).detectedLocale) {
            a.locale = A.detectedLocale;
          }
        }
        return a;
      }(this[A1].url.pathname, {
        nextConfig: this[A1].options.nextConfig,
        parseData: true,
        i18nProvider: this[A1].options.i18nProvider
      });
      let i = function (A, e) {
        let t;
        if (e?.host && !Array.isArray(e.host)) {
          t = e.host.toString().split(":", 1)[0];
        } else {
          if (!A.hostname) {
            return;
          }
          t = A.hostname;
        }
        return t.toLowerCase();
      }(this[A1].url, this[A1].options.headers);
      this[A1].domainLocale = this[A1].options.i18nProvider ? this[A1].options.i18nProvider.detectDomainLocale(i) : function (A, e, t) {
        if (A) {
          t &&= t.toLowerCase();
          for (let r of A) {
            if (e === r.domain?.split(":", 1)[0].toLowerCase() || t === r.defaultLocale.toLowerCase() || r.locales?.some(A => A.toLowerCase() === t)) {
              return r;
            }
          }
        }
      }((e = this[A1].options.nextConfig) == null || (A = e.i18n) == null ? undefined : A.domains, i);
      let o = ((t = this[A1].domainLocale) == null ? undefined : t.defaultLocale) || ((n = this[A1].options.nextConfig) == null || (r = n.i18n) == null ? undefined : r.defaultLocale);
      this[A1].url.pathname = a.pathname;
      this[A1].defaultLocale = o;
      this[A1].basePath = a.basePath ?? "";
      this[A1].buildId = a.buildId;
      this[A1].locale = a.locale ?? o;
      this[A1].trailingSlash = a.trailingSlash;
    }
    formatPathname() {
      var A;
      let e;
      e = function (A, e, t, r) {
        if (!e || e === t) {
          return A;
        }
        let n = A.toLowerCase();
        if (!r && (AK(n, "/api") || AK(n, `/${e.toLowerCase()}`))) {
          return A;
        } else {
          return Az(A, `/${e}`);
        }
      }((A = {
        basePath: this[A1].basePath,
        buildId: this[A1].buildId,
        defaultLocale: this[A1].options.forceLocale ? undefined : this[A1].defaultLocale,
        locale: this[A1].locale,
        pathname: this[A1].url.pathname,
        trailingSlash: this[A1].trailingSlash
      }).pathname, A.locale, A.buildId ? undefined : A.defaultLocale, A.ignorePrefix);
      if (A.buildId || !A.trailingSlash) {
        e = AW(e);
      }
      if (A.buildId) {
        e = A$(Az(e, `/_next/data/${A.buildId}`), A.pathname === "/" ? "index.json" : ".json");
      }
      e = Az(e, A.basePath);
      if (!A.buildId && A.trailingSlash) {
        if (e.endsWith("/")) {
          return e;
        } else {
          return A$(e, "/");
        }
      } else {
        return AW(e);
      }
    }
    formatSearch() {
      return this[A1].url.search;
    }
    get buildId() {
      return this[A1].buildId;
    }
    set buildId(A) {
      this[A1].buildId = A;
    }
    get locale() {
      return this[A1].locale ?? "";
    }
    set locale(A) {
      var e;
      var t;
      if (!this[A1].locale || !((t = this[A1].options.nextConfig) == null || (e = t.i18n) == null ? undefined : e.locales.includes(A))) {
        throw Object.defineProperty(TypeError(`The NextURL configuration includes no locale "${A}"`), "__NEXT_ERROR_CODE", {
          value: "E597",
          enumerable: false,
          configurable: true
        });
      }
      this[A1].locale = A;
    }
    get defaultLocale() {
      return this[A1].defaultLocale;
    }
    get domainLocale() {
      return this[A1].domainLocale;
    }
    get searchParams() {
      return this[A1].url.searchParams;
    }
    get host() {
      return this[A1].url.host;
    }
    set host(A) {
      this[A1].url.host = A;
    }
    get hostname() {
      return this[A1].url.hostname;
    }
    set hostname(A) {
      this[A1].url.hostname = A;
    }
    get port() {
      return this[A1].url.port;
    }
    set port(A) {
      this[A1].url.port = A;
    }
    get protocol() {
      return this[A1].url.protocol;
    }
    set protocol(A) {
      this[A1].url.protocol = A;
    }
    get href() {
      let A = this.formatPathname();
      let e = this.formatSearch();
      return `${this.protocol}//${this.host}${A}${e}${this.hash}`;
    }
    set href(A) {
      this[A1].url = A8(A);
      this.analyze();
    }
    get origin() {
      return this[A1].url.origin;
    }
    get pathname() {
      return this[A1].url.pathname;
    }
    set pathname(A) {
      this[A1].url.pathname = A;
    }
    get hash() {
      return this[A1].url.hash;
    }
    set hash(A) {
      this[A1].url.hash = A;
    }
    get search() {
      return this[A1].url.search;
    }
    set search(A) {
      this[A1].url.search = A;
    }
    get password() {
      return this[A1].url.password;
    }
    set password(A) {
      this[A1].url.password = A;
    }
    get username() {
      return this[A1].url.username;
    }
    set username(A) {
      this[A1].url.username = A;
    }
    get basePath() {
      return this[A1].basePath;
    }
    set basePath(A) {
      this[A1].basePath = A.startsWith("/") ? A : `/${A}`;
    }
    toString() {
      return this.href;
    }
    toJSON() {
      return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
      return {
        href: this.href,
        origin: this.origin,
        protocol: this.protocol,
        username: this.username,
        password: this.password,
        host: this.host,
        hostname: this.hostname,
        port: this.port,
        pathname: this.pathname,
        search: this.search,
        searchParams: this.searchParams,
        hash: this.hash
      };
    }
    clone() {
      return new A4(String(this), this[A1].options);
    }
  }
  class A3 extends Error {
    constructor() {
      super("The request.page has been deprecated in favour of `URLPattern`.\n  Read more: https://nextjs.org/docs/messages/middleware-request-page\n  ");
      Object.defineProperty(this, "__NEXT_ERROR_CODE", {
        value: "E1178",
        enumerable: false,
        configurable: true
      });
    }
  }
  class A2 extends Error {
    constructor() {
      super("The request.ua has been removed in favour of `userAgent` function.\n  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent\n  ");
      Object.defineProperty(this, "__NEXT_ERROR_CODE", {
        value: "E1172",
        enumerable: false,
        configurable: true
      });
    }
  }
  var A9 = A.i(46216);
  let A5 = Symbol("internal request");
  class A6 extends Request {
    constructor(A, e = {}) {
      const t = typeof A != "string" && "url" in A ? A.url : String(A);
      (function (A) {
        try {
          String(new URL(String(A)));
        } catch (e) {
          throw Object.defineProperty(Error(`URL is malformed "${String(A)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: e
          }), "__NEXT_ERROR_CODE", {
            value: "E61",
            enumerable: false,
            configurable: true
          });
        }
      })(t);
      if (e.body && e.duplex !== "half") {
        e.duplex = "half";
      }
      if (A instanceof Request) {
        super(A, e);
      } else {
        super(t, e);
      }
      const r = new A4(t, {
        headers: AQ(this.headers),
        nextConfig: e.nextConfig
      });
      this[A5] = {
        cookies: new A9.RequestCookies(this.headers),
        nextUrl: r,
        url: r.toString()
      };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
      return {
        cookies: this.cookies,
        nextUrl: this.nextUrl,
        url: this.url,
        bodyUsed: this.bodyUsed,
        cache: this.cache,
        credentials: this.credentials,
        destination: this.destination,
        headers: Object.fromEntries(this.headers),
        integrity: this.integrity,
        keepalive: this.keepalive,
        method: this.method,
        mode: this.mode,
        redirect: this.redirect,
        referrer: this.referrer,
        referrerPolicy: this.referrerPolicy,
        signal: this.signal
      };
    }
    get cookies() {
      return this[A5].cookies;
    }
    get nextUrl() {
      return this[A5].nextUrl;
    }
    get page() {
      throw new A3();
    }
    get ua() {
      throw new A2();
    }
    get url() {
      return this[A5].url;
    }
  }
  let A7 = "ResponseAborted";
  class eA extends Error {
    constructor(...A) {
      super(...A);
      this.name = A7;
    }
  }
  function ee(A) {
    let e = new AbortController();
    A.once("close", () => {
      if (!A.writableFinished) {
        e.abort(new eA());
      }
    });
    return e;
  }
  class et {
    static fromBaseNextRequest(A, e) {
      return et.fromNodeNextRequest(A, e);
    }
    static fromNodeNextRequest(A, e) {
      let t;
      let r = null;
      if (A.method !== "GET" && A.method !== "HEAD" && A.body) {
        r = A.body;
      }
      if (A.url.startsWith("http")) {
        t = new URL(A.url);
      } else {
        let e = AX(A, "initURL");
        t = e && e.startsWith("http") ? new URL(A.url, e) : new URL(A.url, "http://n");
      }
      return new A6(t, {
        method: A.method,
        headers: Aq(A.headers),
        duplex: "half",
        signal: e,
        ...(e.aborted ? {} : {
          body: r
        })
      });
    }
    static fromWebNextRequest(A) {
      let e = null;
      if (A.method !== "GET" && A.method !== "HEAD") {
        e = A.body;
      }
      return new A6(A.url, {
        method: A.method,
        headers: Aq(A.headers),
        duplex: "half",
        signal: A.request.signal,
        ...(A.request.signal.aborted ? {} : {
          body: e
        })
      });
    }
  }
  let er = 0;
  let en = 0;
  let ea = 0;
  function ei(A = {}) {
    let e = er === 0 ? undefined : {
      clientComponentLoadStart: er,
      clientComponentLoadTimes: en,
      clientComponentLoadCount: ea
    };
    if (A.reset) {
      er = 0;
      en = 0;
      ea = 0;
    }
    return e;
  }
  function eo(A) {
    return (A == null ? undefined : A.name) === "AbortError" || (A == null ? undefined : A.name) === A7;
  }
  let es = "performance" in globalThis && process.env.NEXT_OTEL_PERFORMANCE_PREFIX;
  async function ec(A, e, t) {
    try {
      let {
        errored: r,
        destroyed: n
      } = e;
      if (r || n) {
        return;
      }
      let a = ee(e);
      let i = function (A, e) {
        let t = false;
        let r = new AP();
        function n() {
          r.resolve();
        }
        A.on("drain", n);
        A.once("close", () => {
          A.off("drain", n);
          r.resolve();
        });
        let a = new AP();
        A.once("finish", () => {
          a.resolve();
        });
        return new WritableStream({
          write: async e => {
            if (!t) {
              t = true;
              if (es) {
                let A = ei();
                if (A) {
                  performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-client-component-loading`, {
                    start: A.clientComponentLoadStart,
                    end: A.clientComponentLoadStart + A.clientComponentLoadTimes
                  });
                }
              }
              A.flushHeaders();
              AA().trace(x.startResponse, {
                spanName: "start response"
              }, () => undefined);
            }
            try {
              let t = A.write(e);
              if ("flush" in A && typeof A.flush == "function") {
                A.flush();
              }
              if (!t) {
                await r.promise;
                r = new AP();
              }
            } catch (e) {
              A.end();
              throw Object.defineProperty(Error("failed to write chunk to response", {
                cause: e
              }), "__NEXT_ERROR_CODE", {
                value: "E321",
                enumerable: false,
                configurable: true
              });
            }
          },
          abort: e => {
            if (!A.writableFinished) {
              A.destroy(e);
            }
          },
          close: async () => {
            if (e) {
              await e;
            }
            if (!A.writableFinished) {
              A.end();
              return a.promise;
            }
          }
        });
      }(e, t);
      await A.pipeTo(i, {
        signal: a.signal
      });
    } catch (A) {
      if (eo(A)) {
        return;
      }
      throw Object.defineProperty(Error("failed to pipe response", {
        cause: A
      }), "__NEXT_ERROR_CODE", {
        value: "E180",
        enumerable: false,
        configurable: true
      });
    }
  }
  async function el(A, e, t) {
    try {
      let {
        errored: r,
        destroyed: n
      } = e;
      if (r || n) {
        return;
      }
      let a = false;
      let i = new AP();
      e.once("close", () => {
        A.destroy();
        i.resolve();
      });
      A.on("data", t => {
        if (!a) {
          a = true;
          if ("performance" in globalThis && process.env.NEXT_OTEL_PERFORMANCE_PREFIX) {
            let A = ei();
            if (A) {
              performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-client-component-loading`, {
                start: A.clientComponentLoadStart,
                end: A.clientComponentLoadStart + A.clientComponentLoadTimes
              });
            }
          }
          e.flushHeaders();
          AA().trace(x.startResponse, {
            spanName: "start response"
          }, () => undefined);
        }
        let r = e.write(t);
        if ("flush" in e && typeof e.flush == "function") {
          e.flush();
        }
        if (!r) {
          A.pause();
          e.once("drain", () => {
            A.resume();
          });
        }
      });
      A.on("end", async () => {
        if (t) {
          await t;
        }
        if (!e.writableFinished) {
          e.end();
        }
        i.resolve();
      });
      A.on("error", A => {
        if (!eo(A)) {
          e.destroy(A);
        }
        i.resolve();
      });
      await i.promise;
    } catch (A) {
      if (eo(A)) {
        return;
      }
      throw Object.defineProperty(Error("failed to pipe response", {
        cause: A
      }), "__NEXT_ERROR_CODE", {
        value: "E180",
        enumerable: false,
        configurable: true
      });
    }
  }
  function eu(A) {
    return A !== null && typeof A == "object" && typeof A.pipe == "function" && typeof A.on == "function" && !(A instanceof ReadableStream);
  }
  class ed {
    static #A = this.EMPTY = new ed(null, {
      metadata: {},
      contentType: null
    });
    static fromStatic(A, e) {
      return new ed(A, {
        metadata: {},
        contentType: e
      });
    }
    constructor(A, {
      contentType: e,
      waitUntil: t,
      metadata: r
    }) {
      this.response = A;
      this.contentType = e;
      this.metadata = r;
      this.waitUntil = t;
    }
    assignMetadata(A) {
      Object.assign(this.metadata, A);
    }
    get isNull() {
      return this.response === null;
    }
    get isDynamic() {
      return typeof this.response != "string";
    }
    toUnchunkedString(A = false) {
      if (this.response === null) {
        return "";
      }
      if (typeof this.response != "string") {
        if (!A) {
          throw Object.defineProperty(new As("dynamic responses cannot be unchunked. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
            value: "E732",
            enumerable: false,
            configurable: true
          });
        }
        return AH(this.readable);
      }
      return this.response;
    }
    get readable() {
      if (this.response === null) {
        return new ReadableStream({
          start(A) {
            A.close();
          }
        });
      } else if (typeof this.response == "string") {
        return AG(this.response);
      } else if (Buffer.isBuffer(this.response)) {
        return AU(this.response);
      } else if (Array.isArray(this.response)) {
        return function (...A) {
          if (A.length === 0) {
            return new ReadableStream({
              start(A) {
                A.close();
              }
            });
          }
          if (A.length === 1) {
            return A[0];
          }
          let {
            readable: e,
            writable: t
          } = new TransformStream();
          let r = A[0].pipeTo(t, {
            preventClose: true
          });
          let n = 1;
          for (; n < A.length - 1; n++) {
            let e = A[n];
            r = r.then(() => e.pipeTo(t, {
              preventClose: true
            }));
          }
          let a = A[n];
          (r = r.then(() => a.pipeTo(t))).catch(AB);
          return e;
        }(...this.response);
      } else if (eu(this.response)) {
        return A.r(81111).Readable.toWeb(this.response);
      } else {
        return this.response;
      }
    }
    coerce() {
      if (this.response === null) {
        return [];
      } else if (typeof this.response == "string") {
        return [AG(this.response)];
      } else if (Array.isArray(this.response)) {
        return this.response;
      } else if (Buffer.isBuffer(this.response)) {
        return [AU(this.response)];
      } else if (eu(this.response)) {
        return [A.r(81111).Readable.toWeb(this.response)];
      } else {
        return [this.response];
      }
    }
    pipeThrough(A) {
      this.response = this.readable.pipeThrough(A);
    }
    unshift(A) {
      this.response = this.coerce();
      this.response.unshift(A);
    }
    push(A) {
      this.response = this.coerce();
      this.response.push(A);
    }
    async pipeTo(A) {
      try {
        await this.readable.pipeTo(A, {
          preventClose: true
        });
        if (this.waitUntil) {
          await this.waitUntil;
        }
        await A.close();
      } catch (e) {
        if (eo(e)) {
          await A.abort(e);
          return;
        }
        throw e;
      }
    }
    async pipeToNodeResponse(A) {
      if (this.response !== null && typeof this.response != "string" && !Buffer.isBuffer(this.response) && !Array.isArray(this.response) && eu(this.response)) {
        await el(this.response, A, this.waitUntil);
      } else {
        await ec(this.readable, A, this.waitUntil);
      }
    }
  }
  function ep(A, e) {
    if (!A) {
      return e;
    }
    let t = parseInt(A, 10);
    if (Number.isFinite(t) && t > 0) {
      return t;
    } else {
      return e;
    }
  }
  ep(process.env.NEXT_PRIVATE_RESPONSE_CACHE_TTL, 10000);
  ep(process.env.NEXT_PRIVATE_RESPONSE_CACHE_MAX_SIZE, 150);
  let eh = /[^\t\x20-\x7e]/;
  let eg = /[^\t\x20-\x7e]+/g;
  let ef = Symbol.for("next-patch");
  function ew(A, e, t) {
    let r = {
      ...t,
      end: performance.timeOrigin + performance.now(),
      idx: A.nextFetchId || 0
    };
    if (e != null) {
      e.setAttributes({
        "http.status_code": r.status,
        "next.fetch.idx": r.idx,
        "next.fetch.cache_status": r.cacheStatus,
        "next.fetch.cache_reason": r.cacheReason
      });
    }
    if (A.shouldTrackFetchMetrics) {
      A.fetchMetrics ??= [];
      A.fetchMetrics.push(r);
    }
  }
  async function em(A, e, t, r, n, a) {
    let i = await A.arrayBuffer();
    let o = {
      headers: Object.fromEntries(A.headers.entries()),
      body: Buffer.from(i).toString("base64"),
      status: A.status,
      url: A.url
    };
    if (t) {
      await r.set(e, {
        kind: AM.FETCH,
        data: o,
        revalidate: n
      }, t);
    }
    await a();
    return new Response(i, {
      headers: A.headers,
      status: A.status,
      statusText: A.statusText
    });
  }
  async function eb(A, e, t, r, n, a, i, o, s, c) {
    let [l, u] = Am(e);
    let d = l.arrayBuffer().then(async A => {
      let e = Buffer.from(A);
      let o = {
        headers: Object.fromEntries(l.headers.entries()),
        body: e.toString("base64"),
        status: l.status,
        url: l.url
      };
      if (a != null) {
        a.set(t, o);
      }
      if (r) {
        await n.set(t, {
          kind: AM.FETCH,
          data: o,
          revalidate: i
        }, r);
      }
    }).catch(A => {
      if (!(c == null ? undefined : c.aborted)) {
        console.warn("Failed to set fetch cache", o, A);
      }
    }).finally(s);
    let p = `cache-set-${t}`;
    let h = A.pendingRevalidates ??= {};
    let g = Promise.resolve();
    if (p in h) {
      g = h[p];
    }
    h[p] = g.then(() => d).finally(() => {
      if (h == null ? undefined : h[p]) {
        delete h[p];
      }
    });
    return u;
  }
  let eP = null;
  function ev(A) {
    var e;
    if ((e = A.split("/").reduce((A, e, t, r) => e ? e[0] === "(" && e.endsWith(")") || e[0] === "@" || (e === "page" || e === "route") && t === r.length - 1 ? A : `${A}/${e}` : A, "")).startsWith("/")) {
      return e;
    } else {
      return `/${e}`;
    }
  }
  let eD = new Set(["hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toString", "valueOf", "toLocaleString", "then", "catch", "finally", "status", "displayName", "_debugInfo", "toJSON", "$$typeof", "__esModule", "@@iterator"]);
  function ey(A) {
    return Object.defineProperty(Error(`Failed to find Server Action${A ? ` "${A}"` : ""}. This request might be from an older or newer deployment.
Read more: https://nextjs.org/docs/messages/failed-to-find-server-action`), "__NEXT_ERROR_CODE", {
      value: "E974",
      enumerable: false,
      configurable: true
    });
  }
  let eE = Symbol.for("next.server.manifests");
  let e_ = globalThis;
  Symbol("__next_preview_data");
  let eR = Symbol("__prerender_bypass");
  (v = {})[v.SeeOther = 303] = "SeeOther";
  v[v.TemporaryRedirect = 307] = "TemporaryRedirect";
  v[v.PermanentRedirect = 308] = "PermanentRedirect";
  var eS = v;
  class eO {
    constructor(A, e, t) {
      this.method = A;
      this.url = e;
      this.body = t;
    }
    get cookies() {
      var e;
      if (this._cookies) {
        return this._cookies;
      } else {
        return this._cookies = (e = this.headers, function () {
          let {
            cookie: t
          } = e;
          if (!t) {
            return {};
          }
          let {
            parse: r
          } = A.r(51930);
          return r(Array.isArray(t) ? t.join("; ") : t);
        })();
      }
    }
  }
  class ex {
    constructor(A) {
      this.destination = A;
    }
    redirect(A, e) {
      this.setHeader("Location", A);
      this.statusCode = e;
      if (e === eS.PermanentRedirect) {
        this.setHeader("Refresh", `0;url=${A}`);
      }
      return this;
    }
  }
  class eT extends eO {
    static #A = y = AV;
    constructor(A) {
      var e;
      super(A.method.toUpperCase(), A.url, A);
      this._req = A;
      this.headers = this._req.headers;
      this.fetchMetrics = (e = this._req) == null ? undefined : e.fetchMetrics;
      this[y] = this._req[AV] || {};
      this.streaming = false;
    }
    get originalRequest() {
      this._req[AV] = this[AV];
      this._req.url = this.url;
      this._req.cookies = this.cookies;
      return this._req;
    }
    set originalRequest(A) {
      this._req = A;
    }
    stream() {
      if (this.streaming) {
        throw Object.defineProperty(Error("Invariant: NodeNextRequest.stream() can only be called once"), "__NEXT_ERROR_CODE", {
          value: "E467",
          enumerable: false,
          configurable: true
        });
      }
      this.streaming = true;
      return new ReadableStream({
        start: A => {
          this._req.on("data", e => {
            A.enqueue(new Uint8Array(e));
          });
          this._req.on("end", () => {
            A.close();
          });
          this._req.on("error", e => {
            A.error(e);
          });
        }
      });
    }
  }
  class eC extends ex {
    get originalResponse() {
      if (eR in this) {
        this._res[eR] = this[eR];
      }
      return this._res;
    }
    constructor(A) {
      super(A);
      this._res = A;
      this.textBody = undefined;
    }
    get sent() {
      return this._res.finished || this._res.headersSent;
    }
    get statusCode() {
      return this._res.statusCode;
    }
    set statusCode(A) {
      this._res.statusCode = A;
    }
    get statusMessage() {
      return this._res.statusMessage;
    }
    set statusMessage(A) {
      this._res.statusMessage = A;
    }
    setHeader(A, e) {
      this._res.setHeader(A, e);
      return this;
    }
    removeHeader(A) {
      this._res.removeHeader(A);
      return this;
    }
    getHeaderValues(A) {
      let e = this._res.getHeader(A);
      if (e !== undefined) {
        return (Array.isArray(e) ? e : [e]).map(A => A.toString());
      }
    }
    hasHeader(A) {
      return this._res.hasHeader(A);
    }
    getHeader(A) {
      let e = this.getHeaderValues(A);
      if (Array.isArray(e)) {
        return e.join(",");
      } else {
        return undefined;
      }
    }
    getHeaders() {
      return this._res.getHeaders();
    }
    appendHeader(A, e) {
      let t = this.getHeaderValues(A) ?? [];
      if (!t.includes(e)) {
        this._res.setHeader(A, [...t, e]);
      }
      return this;
    }
    body(A) {
      this.textBody = A;
      return this;
    }
    send() {
      this._res.end(this.textBody);
    }
    onClose(A) {
      this.originalResponse.on("close", A);
    }
  }
  function eN(A) {
    if (A.isOnDemandRevalidate) {
      return "on-demand";
    } else if (A.isStaticGeneration) {
      return "stale";
    } else {
      return undefined;
    }
  }
  async function eI(A, e, t, r) {
    {
      var n;
      e.statusCode = t.status;
      e.statusMessage = t.statusText;
      let a = ["set-cookie", "www-authenticate", "proxy-authenticate", "vary"];
      if ((n = t.headers) != null) {
        n.forEach((A, t) => {
          if (t.toLowerCase() !== "x-middleware-set-cookie") {
            if (t.toLowerCase() === "set-cookie") {
              for (let r of AF(A)) {
                e.appendHeader(t, r);
              }
            } else {
              let r = e.getHeader(t) !== undefined;
              if (a.includes(t.toLowerCase()) || !r) {
                e.appendHeader(t, A);
              }
            }
          }
        });
      }
      let {
        originalResponse: i
      } = e;
      if (t.body && A.method !== "HEAD") {
        await ec(t.body, i, r);
      } else {
        i.end();
      }
    }
  }
  var ej = A.i(93695);
  let eM = new E.AppRouteRouteModule({
    definition: {
      kind: _.APP_ROUTE,
      page: "/favicon.ico/route",
      pathname: "/favicon.ico",
      filename: "favicon.ico--route-entry",
      bundlePath: ""
    },
    distDir: ".next",
    relativeProjectDir: "",
    resolvedPagePath: "[project]/client/app/favicon.ico--route-entry.js",
    nextConfigOutput: "standalone",
    userland: () => A.r(75839),
    ...{}
  });
  let {
    workAsyncStorage: ek,
    workUnitAsyncStorage: eB,
    serverHooks: eL
  } = eM;
  async function eG(A, e, t) {
    var r;
    var n;
    let a;
    if (t.requestMeta) {
      r = t.requestMeta;
      A[AV] = r;
    }
    if (eM.isDev) {
      n = process.hrtime.bigint();
      (a = AX(A)).devRequestTimingInternalsEnd = n;
      A[AV] = a;
    }
    let i = "/favicon.ico/route";
    i = i.replace(/\/index$/, "") || "/";
    let o = await eM.prepare(A, e, {
      srcPage: i,
      multiZoneDraftMode: false
    });
    if (!o) {
      e.statusCode = 400;
      e.end("Bad Request");
      if (t.waitUntil != null) {
        t.waitUntil.call(t, Promise.resolve());
      }
      return null;
    }
    let {
      buildId: s,
      deploymentId: c,
      params: l,
      nextConfig: u,
      parsedUrl: d,
      isDraftMode: p,
      prerenderManifest: h,
      routerServerContext: g,
      isOnDemandRevalidate: f,
      revalidateOnlyGenerated: w,
      resolvedPathname: m,
      clientReferenceManifest: b,
      serverActionsManifest: P
    } = o;
    let v = ev(i);
    let D = !!h.dynamicRoutes[v] || !!h.routes[m];
    let y = async () => {
      if (g == null ? undefined : g.render404) {
        await g.render404(A, e, d, false);
      } else {
        e.end("This page could not be found");
      }
      return null;
    };
    if (D && !p) {
      let A = !!h.routes[m];
      let e = h.dynamicRoutes[v];
      if (e && e.fallback === false && !A) {
        if (u.adapterPath) {
          return await y();
        }
        throw new ej.NoFallbackError();
      }
    }
    let E = null;
    if (!!D && !eM.isDev && !p) {
      E = (E = m) === "/index" ? "/" : E;
    }
    let S = eM.isDev === true || !D;
    let O = D && !S;
    if (P && b) {
      (function ({
        page: A,
        clientReferenceManifest: e,
        serverActionsManifest: t
      }) {
        let r = e_[eE];
        let n = ev(A);
        let a = {
          encryptionKey: t.encryptionKey,
          node: Object.assign(Object.create(null), t.node),
          edge: Object.assign(Object.create(null), t.edge)
        };
        if (r) {
          r.clientReferenceManifestsPerRoute.set(n, {
            page: A,
            clientReferenceManifest: e
          });
          r.serverActionsManifest = a;
        } else {
          let t;
          let r = new Map([[n, {
            page: A,
            clientReferenceManifest: e
          }]]);
          t = new Map();
          let i = new Proxy({}, {
            get(A, e) {
              let n = Ao.workAsyncStorage.getStore();
              switch (e) {
                case "moduleLoading":
                case "entryCSSFiles":
                case "entryJSFiles":
                  {
                    if (!n) {
                      throw Object.defineProperty(new As(`Cannot access "${e}" without a work store.`), "__NEXT_ERROR_CODE", {
                        value: "E952",
                        enumerable: false,
                        configurable: true
                      });
                    }
                    let A = r.get(n.route);
                    if (!A) {
                      throw Object.defineProperty(new As(`The client reference manifest for route "${n.route}" does not exist.`), "__NEXT_ERROR_CODE", {
                        value: "E951",
                        enumerable: false,
                        configurable: true
                      });
                    }
                    return A.clientReferenceManifest[e];
                  }
                case "clientModules":
                case "rscModuleMapping":
                case "edgeRscModuleMapping":
                case "ssrModuleMapping":
                case "edgeSSRModuleMapping":
                  {
                    let A = t.get(e);
                    if (!A) {
                      A = new Proxy({}, {
                        get(A, t) {
                          let n = Ao.workAsyncStorage.getStore();
                          if (n) {
                            var a;
                            let A = (a = r.get(n.route)) == null ? undefined : a.clientReferenceManifest;
                            if (A == null ? undefined : A[e][t]) {
                              return A[e][t];
                            }
                          } else {
                            for (let {
                              clientReferenceManifest: A
                            } of r.values()) {
                              let r = A[e][t];
                              if (r !== undefined) {
                                return r;
                              }
                            }
                          }
                        }
                      });
                      t.set(e, A);
                    }
                    return A;
                  }
                default:
                  throw Object.defineProperty(new As(`This is a proxied client reference manifest. The property "${String(e)}" is not handled.`), "__NEXT_ERROR_CODE", {
                    value: "E953",
                    enumerable: false,
                    configurable: true
                  });
              }
            }
          });
          e_[eE] = {
            clientReferenceManifestsPerRoute: r,
            proxiedClientReferenceManifest: i,
            serverActionsManifest: a,
            serverModuleMap: new Proxy(Object.create(null), {
              get: (A, e, t) => {
                var r;
                var n;
                var a;
                let i;
                if (typeof e != "string" || eD.has(e)) {
                  return Reflect.get(A, e, t);
                }
                if (e.length !== 42) {
                  let A;
                  A = JSON.stringify(e.length > 100 ? e.slice(0, 90) + "…" : e);
                  throw Object.defineProperty(Error(`The Server Reference ID did not match the expected format. Received ${A}.
Read more: https://nextjs.org/docs/messages/failed-to-find-server-action`), "__NEXT_ERROR_CODE", {
                    value: "E1442",
                    enumerable: false,
                    configurable: true
                  });
                }
                let o = (n = function () {
                  let A = e_[eE];
                  if (!A) {
                    throw Object.defineProperty(new As("The manifests singleton was not initialized."), "__NEXT_ERROR_CODE", {
                      value: "E950",
                      enumerable: false,
                      configurable: true
                    });
                  }
                  return A;
                }().serverActionsManifest.node) == null || (r = n[e]) == null ? undefined : r.workers;
                if (!o) {
                  throw ey(e);
                }
                let s = Ao.workAsyncStorage.getStore();
                if (!(i = s ? o[AK(a = s.page, "app") ? a : "app" + a] : Object.values(o).at(0))) {
                  throw ey(e);
                }
                let {
                  moduleId: c,
                  async: l
                } = i;
                return {
                  id: c,
                  name: e,
                  chunks: [],
                  async: l
                };
              }
            })
          };
        }
      })({
        page: i,
        clientReferenceManifest: b,
        serverActionsManifest: P
      });
    }
    let x = A.method || "GET";
    let T = AA();
    let C = T.getActiveScopeSpan();
    let N = !!(g == null ? undefined : g.isWrappedByNextServer);
    let I = !!AX(A, "minimalMode");
    let j = AX(A, "incrementalCache") || (await eM.getIncrementalCache(A, u, h, I));
    if (j != null) {
      j.resetRequestCache();
    }
    globalThis.__incrementalCache = j;
    let M = {
      params: l,
      previewProps: h.preview,
      renderOpts: {
        experimental: {
          authInterrupts: !!u.experimental.authInterrupts,
          useCacheTimeout: u.experimental.useCacheTimeout
        },
        cacheComponents: !!u.cacheComponents,
        validationLevel: u.experimental.instantInsights.validationLevel,
        supportsDynamicResponse: S,
        incrementalCache: j,
        hmrRefreshHash: AX(A, "hmrRefreshHash"),
        cacheLifeProfiles: u.cacheLife,
        staticPageGenerationTimeout: u.staticPageGenerationTimeout,
        waitUntil: t.waitUntil,
        onClose: A => {
          e.on("close", A);
        },
        onAfterTaskError: undefined,
        onInstrumentationRequestError: (e, t, r, n) => eM.onRequestError(A, e, r, n, g)
      },
      sharedContext: {
        buildId: s,
        deploymentId: c
      }
    };
    let k = new eT(A);
    let B = new eC(e);
    let L = et.fromNodeNextRequest(k, function (A) {
      let {
        errored: e,
        destroyed: t
      } = A;
      if (e || t) {
        return AbortSignal.abort(e ?? new eA());
      }
      let {
        signal: r
      } = ee(A);
      return r;
    }(e));
    let G = async ({
      previousCacheEntry: r
    }) => {
      try {
        if (!I && f && w && !r) {
          e.statusCode = 404;
          e.setHeader("x-nextjs-cache", "REVALIDATED");
          e.end("This page could not be found");
          return null;
        }
        let n = await eM.handle(L, M);
        A.fetchMetrics = M.renderOpts.fetchMetrics;
        let a = M.renderOpts.pendingWaitUntil;
        if (a && t.waitUntil) {
          t.waitUntil(a);
          a = undefined;
        }
        let i = M.renderOpts.collectedTags;
        if (!D) {
          await eI(k, B, n, a);
          return null;
        }
        {
          let A = await n.blob();
          let e = AQ(n.headers);
          if (i) {
            e[Ae] = i;
          }
          if (!e["content-type"] && A.type) {
            e["content-type"] = A.type;
          }
          let t = M.renderOpts.collectedRevalidate !== undefined && !(M.renderOpts.collectedRevalidate >= 4294967294) && M.renderOpts.collectedRevalidate;
          let r = M.renderOpts.collectedExpire === undefined || M.renderOpts.collectedExpire >= 4294967294 ? t !== false && t > 0 ? u.expireTime : undefined : M.renderOpts.collectedExpire;
          return {
            value: {
              kind: AM.APP_ROUTE,
              status: n.status,
              body: Buffer.from(await A.arrayBuffer()),
              headers: e
            },
            cacheControl: {
              revalidate: t,
              expire: r
            }
          };
        }
      } catch (e) {
        if (r == null ? undefined : r.isStale) {
          await eM.onRequestError(A, e, {
            routerKind: "App Router",
            routePath: i,
            routeType: "route",
            revalidateReason: eN({
              isStaticGeneration: O,
              isOnDemandRevalidate: f
            })
          }, false, g);
        }
        throw e;
      }
    };
    let U = async (r, n) => {
      try {
        var a;
        var i;
        let r = await eM.handleResponse({
          req: A,
          nextConfig: u,
          cacheKey: E,
          routeKind: _.APP_ROUTE,
          isFallback: false,
          prerenderManifest: h,
          isRoutePPREnabled: false,
          isOnDemandRevalidate: f,
          revalidateOnlyGenerated: w,
          responseGenerator: G,
          waitUntil: t.waitUntil,
          isMinimalMode: I
        });
        if (!D) {
          return;
        }
        if ((r == null || (a = r.value) == null ? undefined : a.kind) !== AM.APP_ROUTE) {
          throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${r == null || (i = r.value) == null ? undefined : i.kind}`), "__NEXT_ERROR_CODE", {
            value: "E701",
            enumerable: false,
            configurable: true
          });
        }
        if (!I) {
          e.setHeader("x-nextjs-cache", f ? "REVALIDATED" : r.isMiss ? "MISS" : r.isStale ? "STALE" : "HIT");
        }
        if (p) {
          e.setHeader("Cache-Control", "private, no-cache, no-store, max-age=0, must-revalidate");
        }
        let n = Aq(r.value.headers);
        if (!I || !D) {
          n.delete(Ae);
        }
        if (!!r.cacheControl && !e.getHeader("Cache-Control") && !n.get("Cache-Control")) {
          n.set("Cache-Control", function ({
            revalidate: A,
            expire: e
          }) {
            let t = typeof A == "number" && e !== undefined && A < e ? `, stale-while-revalidate=${e - A}` : "";
            if (A === 0) {
              return "private, no-cache, no-store, max-age=0, must-revalidate";
            } else if (typeof A == "number") {
              return `s-maxage=${A}${t}`;
            } else {
              return `s-maxage=31536000${t}`;
            }
          }(r.cacheControl));
        }
        await eI(k, B, new Response(r.value.body, {
          headers: n,
          status: r.value.status || 200
        }));
        return;
      } catch (e) {
        if (!(e instanceof ej.NoFallbackError)) {
          await eM.onRequestError(A, e, {
            routerKind: "App Router",
            routePath: v,
            routeType: "route",
            revalidateReason: eN({
              isStaticGeneration: O,
              isOnDemandRevalidate: f
            })
          }, false, g);
        }
        if (D) {
          throw e;
        }
        await eI(k, B, new Response(null, {
          status: 500
        }));
        return;
      } finally {
        (() => {
          if (!r) {
            return;
          }
          let A = e.statusCode;
          r.setAttributes({
            "http.status_code": A,
            "next.rsc": false
          });
          if (A && A >= 500) {
            r.setStatus({
              code: F.ERROR
            });
            r.setAttribute("error.type", A.toString());
          }
          let t = T.getRootSpanAttributes();
          if (!t) {
            return;
          }
          if (t.get("next.span_type") !== R.handleRequest) {
            return console.warn(`Unexpected root span type '${t.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);
          }
          let a = t.get("next.route") || v;
          let i = `${x} ${a}`;
          r.setAttributes({
            "next.route": a,
            "http.route": a,
            "next.span_name": i
          });
          r.updateName(i);
          if (n && n !== r) {
            n.setAttribute("http.route", a);
            n.updateName(i);
          }
        })();
      }
    };
    if (N && C) {
      await U(C, undefined);
    } else {
      let e = T.getActiveScopeSpan();
      await T.withPropagatedContext(A.headers, () => T.trace(R.handleRequest, {
        spanName: `${x} ${i}`,
        kind: Q.SERVER,
        attributes: {
          "http.method": x,
          "http.target": A.url
        }
      }, A => U(A, e)), undefined, !N);
    }
  }
  A.s(["handler", 0, eG, "patchFetch", 0, function () {
    return function (A) {
      var e;
      let t;
      if (globalThis[ef] === true) {
        return;
      }
      e = globalThis.fetch;
      t = Ar.cache(A => []);
      let r = function (A, r) {
        let n;
        let a;
        if (r && r.signal) {
          return e(A, r);
        }
        if (typeof A != "string" || r) {
          let t;
          let i = typeof A == "string" || A instanceof URL ? new Request(A, r) : A;
          if (i.method !== "GET" && i.method !== "HEAD" || i.keepalive) {
            return e(A, r);
          }
          t = Array.from(i.headers.entries()).filter(([A]) => !Ab.has(A.toLowerCase()));
          a = JSON.stringify([i.method, t, i.mode, i.redirect, i.credentials, i.referrer, i.referrerPolicy, i.integrity]);
          n = i.url;
        } else {
          a = "[\"GET\",[],null,\"follow\",null,null,null,null]";
          n = A;
        }
        let i = t(n);
        for (let A = 0, e = i.length; A < e; A += 1) {
          let [e, t] = i[A];
          if (e === a) {
            return t.then(() => {
              let e = i[A][2];
              if (!e) {
                throw Object.defineProperty(new As("No cached response"), "__NEXT_ERROR_CODE", {
                  value: "E579",
                  enumerable: false,
                  configurable: true
                });
              }
              let [t, r] = Am(e);
              i[A][2] = r;
              return t;
            });
          }
        }
        let o = e(A, r);
        let s = [a, o, null];
        i.push(s);
        return o.then(A => {
          let [e, t] = Am(A);
          s[2] = t;
          return e;
        });
      };
      globalThis.fetch = function (A, {
        workAsyncStorage: e,
        workUnitAsyncStorage: t
      }) {
        let r = async function (r, n) {
          var a;
          var i;
          let o;
          try {
            (o = new URL(r instanceof Request ? r.url : r)).username = "";
            o.password = "";
          } catch {
            o = undefined;
          }
          let s = (o == null ? undefined : o.href) ?? "";
          let c = (n == null || (a = n.method) == null ? undefined : a.toUpperCase()) || "GET";
          let l = (n == null || (i = n.next) == null ? undefined : i.internal) === true;
          let u = process.env.NEXT_OTEL_FETCH_DISABLED === "1";
          let d = l ? undefined : performance.timeOrigin + performance.now();
          let p = e.getStore();
          let h = t.getStore();
          let g = h ? (0, Ai.getCacheSignal)(h) : null;
          if (g) {
            g.beginRead();
          }
          let f = AA().trace(l ? x.internalFetch : N.fetch, {
            hideSpan: u,
            kind: Q.CLIENT,
            spanName: ["fetch", c, s].filter(Boolean).join(" "),
            attributes: {
              "http.url": s,
              "http.method": c,
              "net.peer.name": o == null ? undefined : o.hostname,
              "net.peer.port": (o == null ? undefined : o.port) || undefined
            }
          }, async e => {
            var t;
            let a;
            let i;
            let o;
            let c;
            let u;
            let f;
            if (l || !p || p.isDraftMode) {
              return A(r, n);
            }
            let w = r && typeof r == "object" && typeof r.method == "string";
            if (w && n) {
              let {
                next: A,
                ...e
              } = n;
              r = new Request(r, e);
              n = A ? {
                next: A
              } : undefined;
            }
            let m = A => (n == null ? undefined : n[A]) || (w ? r[A] : null);
            let b = A => {
              var e;
              var t;
              var a;
              if ((n == null || (e = n.next) == null ? undefined : e[A]) !== undefined) {
                if (n == null || (t = n.next) == null) {
                  return undefined;
                } else {
                  return t[A];
                }
              } else if (w) {
                if ((a = r.next) == null) {
                  return undefined;
                } else {
                  return a[A];
                }
              } else {
                return undefined;
              }
            };
            let P = b("revalidate");
            let v = P;
            let D = function (A, e) {
              let t = [];
              let r = [];
              for (let n = 0; n < A.length; n++) {
                let a = A[n];
                if (typeof a != "string") {
                  r.push({
                    tag: a,
                    reason: "invalid type, must be a string"
                  });
                } else if (a.length > 256) {
                  r.push({
                    tag: a,
                    reason: "exceeded max length of 256"
                  });
                } else {
                  t.push(eh.test(a) ? a.replace(eg, A => encodeURIComponent(A)) : a);
                }
                if (t.length > 128) {
                  console.warn(`Warning: exceeded max tag count for ${e}, dropped tags:`, A.slice(n).join(", "));
                  break;
                }
              }
              if (r.length > 0) {
                console.warn(`Warning: invalid tags passed to ${e}: `);
                for (let {
                  tag: A,
                  reason: t
                } of r) {
                  console.log(`tag: "${A}" ${t}`);
                }
              }
              return t;
            }(b("tags") || [], `fetch ${r.toString()}`);
            if (h) {
              switch (h.type) {
                case "prerender":
                case "prerender-runtime":
                case "prerender-client":
                case "validation-client":
                case "prerender-ppr":
                case "prerender-legacy":
                case "cache":
                case "private-cache":
                  a = h;
              }
            }
            if (a && Array.isArray(D)) {
              let A = a.tags ??= [];
              for (let e of D) {
                if (!A.includes(e)) {
                  A.push(e);
                }
              }
            }
            let y = h == null ? undefined : h.implicitTags;
            let E = p.fetchCache;
            if (h && h.type === "unstable-cache") {
              E = "force-no-store";
            }
            let _ = !!p.isUnstableNoStore;
            let R = m("cache");
            let S = "";
            if (typeof R == "string" && v !== undefined && (R === "force-cache" && v === 0 || R === "no-store" && (v > 0 || v === false))) {
              i = `Specified "cache: ${R}" and "revalidate: ${v}", only one should be specified.`;
              R = undefined;
              v = undefined;
            }
            let O = R === "no-cache" || R === "no-store" || E === "force-no-store" || E === "only-no-store";
            let x = !E && !R && !v && p.forceDynamic;
            if (R === "force-cache" && v === undefined) {
              v = false;
            } else if (O || x) {
              v = 0;
            }
            if (R === "no-cache" || R === "no-store") {
              S = `cache: ${R}`;
            }
            f = function (A, e) {
              try {
                let t;
                if (A === false || A === Infinity) {
                  t = 4294967294;
                } else if (typeof A == "number" && !isNaN(A) && A > -1) {
                  t = A;
                } else if (A !== undefined) {
                  throw Object.defineProperty(Error(`Invalid revalidate value "${A}" on "${e}", must be a non-negative number or false`), "__NEXT_ERROR_CODE", {
                    value: "E179",
                    enumerable: false,
                    configurable: true
                  });
                }
                return t;
              } catch (A) {
                if (A instanceof Error && A.message.includes("Invalid revalidate")) {
                  throw A;
                }
                return;
              }
            }(v, p.route);
            let T = m("headers");
            let C = typeof (T == null ? undefined : T.get) == "function" ? T : new Headers(T || {});
            let N = C.get("authorization") || C.get("cookie");
            let I = !["get", "head"].includes(((t = m("method")) == null ? undefined : t.toLowerCase()) || "get");
            let j = E == undefined && (R == undefined || R === "default") && v == undefined;
            let M = (!!N || !!I) && (a == null ? undefined : a.revalidate) === 0;
            let k = false;
            if (!M && j) {
              if (p.isBuildTimePrerendering) {
                k = true;
              } else {
                M = true;
              }
            }
            if (j && h !== undefined) {
              switch (h.type) {
                case "prerender":
                case "prerender-runtime":
                case "prerender-client":
                  if (g) {
                    g.endRead();
                    g = null;
                  }
                  return Ad(h.renderSignal, p.route, "fetch()");
              }
            }
            switch (E) {
              case "force-no-store":
                S = "fetchCache = force-no-store";
                break;
              case "only-no-store":
                if (R === "force-cache" || f !== undefined && f > 0) {
                  throw Object.defineProperty(Error(`cache: 'force-cache' used on fetch for ${s} with 'export const fetchCache = 'only-no-store'`), "__NEXT_ERROR_CODE", {
                    value: "E448",
                    enumerable: false,
                    configurable: true
                  });
                }
                S = "fetchCache = only-no-store";
                break;
              case "only-cache":
                if (R === "no-store") {
                  throw Object.defineProperty(Error(`cache: 'no-store' used on fetch for ${s} with 'export const fetchCache = 'only-cache'`), "__NEXT_ERROR_CODE", {
                    value: "E521",
                    enumerable: false,
                    configurable: true
                  });
                }
                break;
              case "force-cache":
                if (v === undefined || v === 0) {
                  S = "fetchCache = force-cache";
                  f = 4294967294;
                }
            }
            if (f === undefined) {
              if (E !== "default-cache" || _) {
                if (E === "default-no-store") {
                  f = 0;
                  S = "fetchCache = default-no-store";
                } else if (_) {
                  f = 0;
                  S = "noStore call";
                } else if (M) {
                  f = 0;
                  S = "auto no cache";
                } else {
                  S = "auto cache";
                  f = a ? a.revalidate : 4294967294;
                }
              } else {
                f = 4294967294;
                S = "fetchCache = default-cache";
              }
            } else {
              S ||= `revalidate: ${f}`;
            }
            if ((!p.forceStatic || f !== 0) && !M && a && f < a.revalidate) {
              if (f === 0) {
                if (h) {
                  switch (h.type) {
                    case "prerender":
                    case "prerender-client":
                    case "prerender-runtime":
                    case "validation-client":
                      if (g) {
                        g.endRead();
                        g = null;
                      }
                      return Ad(h.renderSignal, p.route, "fetch()");
                  }
                }
                Ag(p, h, `revalidate: 0 fetch ${r} ${p.route}`);
              }
              if (a && P === f) {
                a.revalidate = f;
              }
            }
            let B = typeof f == "number" && f > 0;
            let {
              incrementalCache: L
            } = p;
            let G = false;
            if (h) {
              switch (h.type) {
                case "request":
                case "cache":
                case "private-cache":
                  G = h.isHmrRefresh ?? false;
                  c = h.serverComponentsHmrCache;
              }
            }
            if (L && (B || c)) {
              try {
                o = await L.generateCacheKey(s, w ? r : n);
              } catch (A) {
                console.error("Failed to generate cache key for", r, A);
              }
            }
            let U = p.nextFetchId ?? 1;
            p.nextFetchId = U + 1;
            let H = () => {};
            let V = async (t, a) => {
              let l = ["cache", "credentials", "headers", "integrity", "keepalive", "method", "mode", "redirect", "referrer", "referrerPolicy", "window", "duplex", ...(t ? [] : ["signal"])];
              if (w) {
                let A = r;
                let e = {
                  body: A._ogBody || A.body
                };
                for (let t of l) {
                  e[t] = A[t];
                }
                r = new Request(A.url, e);
              } else if (n) {
                let {
                  _ogBody: A,
                  body: e,
                  signal: r,
                  ...a
                } = n;
                n = {
                  ...a,
                  body: A || e,
                  signal: t ? undefined : r
                };
              }
              let u = {
                ...n,
                next: {
                  ...(n == null ? undefined : n.next),
                  fetchType: "origin",
                  fetchIdx: U
                }
              };
              return A(r, u).then(async A => {
                if (!t && d) {
                  ew(p, e, {
                    start: d,
                    url: s,
                    cacheReason: a || S,
                    cacheStatus: f === 0 || a ? "skip" : "miss",
                    cacheWarning: i,
                    status: A.status,
                    method: u.method || "GET"
                  });
                }
                if (A.status === 200 && L && o && (B || c)) {
                  let e = f >= 4294967294 ? 31536000 : f;
                  let t = B ? {
                    fetchCache: true,
                    fetchUrl: s,
                    fetchIdx: U,
                    tags: D,
                    isImplicitBuildTimeCache: k
                  } : undefined;
                  switch (h == null ? undefined : h.type) {
                    case "prerender":
                    case "prerender-client":
                    case "validation-client":
                    case "prerender-runtime":
                      return em(A, o, t, L, e, H);
                    case "request":
                    case "prerender-ppr":
                    case "prerender-legacy":
                    case "cache":
                    case "private-cache":
                    case "unstable-cache":
                    case "generate-static-params":
                    case undefined:
                      return eb(p, A, o, t, L, c, e, r, H, m("signal"));
                  }
                }
                await H();
                return A;
              }).catch(A => {
                H();
                throw A;
              });
            };
            let X = false;
            let q = false;
            if (o && L) {
              let A;
              if (G && c) {
                A = c.get(o);
                q = true;
              }
              if (B && !A) {
                H = await L.lock(o);
                let e = p.isOnDemandRevalidate ? null : await L.get(o, {
                  kind: Ak.FETCH,
                  revalidate: f,
                  fetchUrl: s,
                  fetchIdx: U,
                  tags: D,
                  softTags: y == null ? undefined : y.tags
                });
                if (j && h) {
                  switch (h.type) {
                    case "prerender":
                    case "prerender-client":
                    case "validation-client":
                    case "prerender-runtime":
                      await (eP ||= new Promise(A => {
                        setTimeout(() => {
                          eP = null;
                          A();
                        }, 0);
                      }), eP);
                  }
                }
                if (e) {
                  await H();
                } else {
                  u = "cache-control: no-cache (hard refresh)";
                }
                if ((e == null ? undefined : e.value) && e.value.kind === AM.FETCH) {
                  if (p.isStaticGeneration && e.isStale) {
                    X = true;
                  } else {
                    if (e.isStale && (p.pendingRevalidates ??= {}, !p.pendingRevalidates[o])) {
                      let A = V(true).then(async A => ({
                        body: await A.arrayBuffer(),
                        headers: A.headers,
                        status: A.status,
                        statusText: A.statusText
                      })).finally(() => {
                        p.pendingRevalidates ??= {};
                        delete p.pendingRevalidates[o || ""];
                      });
                      A.catch(console.error);
                      p.pendingRevalidates[o] = A;
                    }
                    A = e.value.data;
                  }
                }
              }
              if (A) {
                if (d) {
                  ew(p, e, {
                    start: d,
                    url: s,
                    cacheReason: S,
                    cacheStatus: q ? "hmr" : "hit",
                    cacheWarning: i,
                    status: A.status || 200,
                    method: (n == null ? undefined : n.method) || "GET"
                  });
                }
                let t = new Response(Buffer.from(A.body, "base64"), {
                  headers: A.headers,
                  status: A.status
                });
                Object.defineProperty(t, "url", {
                  value: A.url
                });
                return t;
              }
            }
            if (p.isStaticGeneration && n && typeof n == "object") {
              let {
                cache: A
              } = n;
              if (A === "no-store") {
                if (h) {
                  switch (h.type) {
                    case "prerender":
                    case "prerender-client":
                    case "prerender-runtime":
                    case "validation-client":
                      if (g) {
                        g.endRead();
                        g = null;
                      }
                      return Ad(h.renderSignal, p.route, "fetch()");
                  }
                }
                Ag(p, h, `no-store fetch ${r} ${p.route}`);
              }
              let e = "next" in n;
              let {
                next: t = {}
              } = n;
              if (typeof t.revalidate == "number" && a && t.revalidate < a.revalidate) {
                if (t.revalidate === 0) {
                  if (h) {
                    switch (h.type) {
                      case "prerender":
                      case "prerender-client":
                      case "prerender-runtime":
                      case "validation-client":
                        return Ad(h.renderSignal, p.route, "fetch()");
                    }
                  }
                  Ag(p, h, `revalidate: 0 fetch ${r} ${p.route}`);
                }
                if (!p.forceStatic || t.revalidate !== 0) {
                  a.revalidate = t.revalidate;
                }
              }
              if (e) {
                delete n.next;
              }
            }
            if (!o || !X) {
              return V(false, u);
            }
            {
              let A = o;
              p.pendingRevalidates ??= {};
              let e = p.pendingRevalidates[A];
              if (e) {
                let A = await e;
                return new Response(A.body, {
                  headers: A.headers,
                  status: A.status,
                  statusText: A.statusText
                });
              }
              let t = V(true, u).then(Am);
              (e = t.then(async A => {
                let e = A[0];
                return {
                  body: await e.arrayBuffer(),
                  headers: e.headers,
                  status: e.status,
                  statusText: e.statusText
                };
              }).finally(() => {
                var e;
                if ((e = p.pendingRevalidates) == null ? undefined : e[A]) {
                  delete p.pendingRevalidates[A];
                }
              })).catch(() => {});
              p.pendingRevalidates[A] = e;
              return t.then(A => A[1]);
            }
          });
          if (g) {
            try {
              return await f;
            } finally {
              if (g) {
                g.endRead();
              }
            }
          }
          return f;
        };
        r.__nextPatched = true;
        r.__nextGetStaticStore = () => e;
        r._nextOriginalFetch = A;
        globalThis[ef] = true;
        Object.defineProperty(r, "name", {
          value: "fetch",
          writable: false
        });
        return r;
      }(r, A);
    }({
      workAsyncStorage: ek,
      workUnitAsyncStorage: eB
    });
  }, "routeModule", 0, eM, "serverHooks", 0, eL, "workAsyncStorage", 0, ek, "workUnitAsyncStorage", 0, eB], 80722);
}, 41187, (A, e, t) => {
  "use strict";

  e.exports = A.r(18622);
}, 20103, (A, e, t) => {
  "use strict";

  e.exports = A.r(41187).vendored["react-rsc"].React;
}, 52525, (A, e, t) => {
  "use strict";

  function r(A, e, t) {
    if (A) {
      t &&= t.toLowerCase();
      for (let r of A) {
        if (e === r.domain?.split(":", 1)[0].toLowerCase() || t === r.defaultLocale.toLowerCase() || r.locales?.some(A => A.toLowerCase() === t)) {
          return r;
        }
      }
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "detectDomainLocale", {
    enumerable: true,
    get: function () {
      return r;
    }
  });
}, 39106, (A, e, t) => {
  "use strict";

  function r(A) {
    if (A.charCodeAt(A.length - 1) === 47 && A.length > 1) {
      return A.slice(0, -1);
    } else {
      return A;
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "removeTrailingSlash", {
    enumerable: true,
    get: function () {
      return r;
    }
  });
}, 1598, (A, e, t) => {
  "use strict";

  function r(A) {
    let e = A.indexOf("#");
    let t = A.indexOf("?");
    let r = t > -1 && (e < 0 || t < e);
    if (r || e > -1) {
      return {
        pathname: A.substring(0, r ? t : e),
        query: r ? A.substring(t, e > -1 ? e : undefined) : "",
        hash: e > -1 ? A.slice(e) : ""
      };
    } else {
      return {
        pathname: A,
        query: "",
        hash: ""
      };
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "parsePath", {
    enumerable: true,
    get: function () {
      return r;
    }
  });
}, 90165, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "addPathPrefix", {
    enumerable: true,
    get: function () {
      return n;
    }
  });
  let r = A.r(1598);
  function n(A, e) {
    if (!A.startsWith("/") || !e) {
      return A;
    }
    let {
      pathname: t,
      query: n,
      hash: a
    } = (0, r.parsePath)(A);
    return `${e}${t}${n}${a}`;
  }
}, 9269, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "addPathSuffix", {
    enumerable: true,
    get: function () {
      return n;
    }
  });
  let r = A.r(1598);
  function n(A, e) {
    if (!A.startsWith("/") || !e) {
      return A;
    }
    let {
      pathname: t,
      query: n,
      hash: a
    } = (0, r.parsePath)(A);
    return `${t}${e}${n}${a}`;
  }
}, 35685, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "pathHasPrefix", {
    enumerable: true,
    get: function () {
      return n;
    }
  });
  let r = A.r(1598);
  function n(A, e) {
    if (typeof A != "string") {
      return false;
    }
    let {
      pathname: t
    } = (0, r.parsePath)(A);
    return t === e || t.startsWith(e + "/");
  }
}, 25081, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "addLocale", {
    enumerable: true,
    get: function () {
      return a;
    }
  });
  let r = A.r(90165);
  let n = A.r(35685);
  function a(A, e, t, a) {
    if (!e || e === t) {
      return A;
    }
    let i = A.toLowerCase();
    if (!a && ((0, n.pathHasPrefix)(i, "/api") || (0, n.pathHasPrefix)(i, `/${e.toLowerCase()}`))) {
      return A;
    } else {
      return (0, r.addPathPrefix)(A, `/${e}`);
    }
  }
}, 51675, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "formatNextPathnameInfo", {
    enumerable: true,
    get: function () {
      return o;
    }
  });
  let r = A.r(39106);
  let n = A.r(90165);
  let a = A.r(9269);
  let i = A.r(25081);
  function o(A) {
    let e = (0, i.addLocale)(A.pathname, A.locale, A.buildId ? undefined : A.defaultLocale, A.ignorePrefix);
    if (A.buildId || !A.trailingSlash) {
      e = (0, r.removeTrailingSlash)(e);
    }
    if (A.buildId) {
      e = (0, a.addPathSuffix)((0, n.addPathPrefix)(e, `/_next/data/${A.buildId}`), A.pathname === "/" ? "index.json" : ".json");
    }
    e = (0, n.addPathPrefix)(e, A.basePath);
    if (!A.buildId && A.trailingSlash) {
      if (e.endsWith("/")) {
        return e;
      } else {
        return (0, a.addPathSuffix)(e, "/");
      }
    } else {
      return (0, r.removeTrailingSlash)(e);
    }
  }
}, 9314, (A, e, t) => {
  "use strict";

  function r(A, e) {
    let t;
    if (e?.host && !Array.isArray(e.host)) {
      t = e.host.toString().split(":", 1)[0];
    } else {
      if (!A.hostname) {
        return;
      }
      t = A.hostname;
    }
    return t.toLowerCase();
  }
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "getHostname", {
    enumerable: true,
    get: function () {
      return r;
    }
  });
}, 20098, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "normalizeLocalePath", {
    enumerable: true,
    get: function () {
      return n;
    }
  });
  let r = new WeakMap();
  function n(A, e) {
    let t;
    if (!e) {
      return {
        pathname: A
      };
    }
    let n = r.get(e);
    if (!n) {
      n = e.map(A => A.toLowerCase());
      r.set(e, n);
    }
    let a = A.split("/", 2);
    if (!a[1]) {
      return {
        pathname: A
      };
    }
    let i = a[1].toLowerCase();
    let o = n.indexOf(i);
    if (o < 0) {
      return {
        pathname: A
      };
    } else {
      t = e[o];
      return {
        pathname: A = A.slice(t.length + 1) || "/",
        detectedLocale: t
      };
    }
  }
}, 51436, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "removePathPrefix", {
    enumerable: true,
    get: function () {
      return n;
    }
  });
  let r = A.r(35685);
  function n(A, e) {
    if (!(0, r.pathHasPrefix)(A, e)) {
      return A;
    }
    let t = A.slice(e.length);
    if (t.startsWith("/")) {
      return t;
    } else {
      return `/${t}`;
    }
  }
}, 54939, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "getNextPathnameInfo", {
    enumerable: true,
    get: function () {
      return i;
    }
  });
  let r = A.r(20098);
  let n = A.r(51436);
  let a = A.r(35685);
  function i(A, e) {
    let {
      basePath: t,
      i18n: i,
      trailingSlash: o
    } = e.nextConfig ?? {};
    let s = {
      pathname: A,
      trailingSlash: A !== "/" ? A.endsWith("/") : o
    };
    if (t && (0, a.pathHasPrefix)(s.pathname, t)) {
      s.pathname = (0, n.removePathPrefix)(s.pathname, t);
      s.basePath = t;
    }
    let c = s.pathname;
    if (s.pathname.startsWith("/_next/data/") && s.pathname.endsWith(".json")) {
      let A = s.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
      s.buildId = A[0];
      c = A[1] !== "index" ? `/${A.slice(1).join("/")}` : "/";
      if (e.parseData === true) {
        s.pathname = c;
      }
    }
    if (i) {
      let A = e.i18nProvider ? e.i18nProvider.analyze(s.pathname) : (0, r.normalizeLocalePath)(s.pathname, i.locales);
      s.locale = A.detectedLocale;
      s.pathname = A.pathname ?? s.pathname;
      if (!A.detectedLocale && s.buildId && (A = e.i18nProvider ? e.i18nProvider.analyze(c) : (0, r.normalizeLocalePath)(c, i.locales)).detectedLocale) {
        s.locale = A.detectedLocale;
      }
    }
    return s;
  }
}, 53278, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "NextURL", {
    enumerable: true,
    get: function () {
      return l;
    }
  });
  let r = A.r(52525);
  let n = A.r(51675);
  let a = A.r(9314);
  let i = A.r(54939);
  let o = /^(?:127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)$/;
  function s(A, e) {
    let t = new URL(String(A), e && String(e));
    if (o.test(t.hostname)) {
      t.hostname = "localhost";
    }
    return t;
  }
  let c = Symbol("NextURLInternal");
  class l {
    constructor(A, e, t) {
      let r;
      let n;
      if (typeof e == "object" && "pathname" in e || typeof e == "string") {
        r = e;
        n = t || {};
      } else {
        n = t || e || {};
      }
      this[c] = {
        url: s(A, r ?? n.base),
        options: n,
        basePath: ""
      };
      this.analyze();
    }
    analyze() {
      var A;
      var e;
      var t;
      var n;
      var o;
      let s = (0, i.getNextPathnameInfo)(this[c].url.pathname, {
        nextConfig: this[c].options.nextConfig,
        parseData: true,
        i18nProvider: this[c].options.i18nProvider
      });
      let l = (0, a.getHostname)(this[c].url, this[c].options.headers);
      this[c].domainLocale = this[c].options.i18nProvider ? this[c].options.i18nProvider.detectDomainLocale(l) : (0, r.detectDomainLocale)((e = this[c].options.nextConfig) == null || (A = e.i18n) == null ? undefined : A.domains, l);
      let u = ((t = this[c].domainLocale) == null ? undefined : t.defaultLocale) || ((o = this[c].options.nextConfig) == null || (n = o.i18n) == null ? undefined : n.defaultLocale);
      this[c].url.pathname = s.pathname;
      this[c].defaultLocale = u;
      this[c].basePath = s.basePath ?? "";
      this[c].buildId = s.buildId;
      this[c].locale = s.locale ?? u;
      this[c].trailingSlash = s.trailingSlash;
    }
    formatPathname() {
      return (0, n.formatNextPathnameInfo)({
        basePath: this[c].basePath,
        buildId: this[c].buildId,
        defaultLocale: this[c].options.forceLocale ? undefined : this[c].defaultLocale,
        locale: this[c].locale,
        pathname: this[c].url.pathname,
        trailingSlash: this[c].trailingSlash
      });
    }
    formatSearch() {
      return this[c].url.search;
    }
    get buildId() {
      return this[c].buildId;
    }
    set buildId(A) {
      this[c].buildId = A;
    }
    get locale() {
      return this[c].locale ?? "";
    }
    set locale(A) {
      var e;
      var t;
      if (!this[c].locale || !((t = this[c].options.nextConfig) == null || (e = t.i18n) == null ? undefined : e.locales.includes(A))) {
        throw Object.defineProperty(TypeError(`The NextURL configuration includes no locale "${A}"`), "__NEXT_ERROR_CODE", {
          value: "E597",
          enumerable: false,
          configurable: true
        });
      }
      this[c].locale = A;
    }
    get defaultLocale() {
      return this[c].defaultLocale;
    }
    get domainLocale() {
      return this[c].domainLocale;
    }
    get searchParams() {
      return this[c].url.searchParams;
    }
    get host() {
      return this[c].url.host;
    }
    set host(A) {
      this[c].url.host = A;
    }
    get hostname() {
      return this[c].url.hostname;
    }
    set hostname(A) {
      this[c].url.hostname = A;
    }
    get port() {
      return this[c].url.port;
    }
    set port(A) {
      this[c].url.port = A;
    }
    get protocol() {
      return this[c].url.protocol;
    }
    set protocol(A) {
      this[c].url.protocol = A;
    }
    get href() {
      let A = this.formatPathname();
      let e = this.formatSearch();
      return `${this.protocol}//${this.host}${A}${e}${this.hash}`;
    }
    set href(A) {
      this[c].url = s(A);
      this.analyze();
    }
    get origin() {
      return this[c].url.origin;
    }
    get pathname() {
      return this[c].url.pathname;
    }
    set pathname(A) {
      this[c].url.pathname = A;
    }
    get hash() {
      return this[c].url.hash;
    }
    set hash(A) {
      this[c].url.hash = A;
    }
    get search() {
      return this[c].url.search;
    }
    set search(A) {
      this[c].url.search = A;
    }
    get password() {
      return this[c].url.password;
    }
    set password(A) {
      this[c].url.password = A;
    }
    get username() {
      return this[c].url.username;
    }
    set username(A) {
      this[c].url.username = A;
    }
    get basePath() {
      return this[c].basePath;
    }
    set basePath(A) {
      this[c].basePath = A.startsWith("/") ? A : `/${A}`;
    }
    toString() {
      return this.href;
    }
    toJSON() {
      return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
      return {
        href: this.href,
        origin: this.origin,
        protocol: this.protocol,
        username: this.username,
        password: this.password,
        host: this.host,
        hostname: this.hostname,
        port: this.port,
        pathname: this.pathname,
        search: this.search,
        searchParams: this.searchParams,
        hash: this.hash
      };
    }
    clone() {
      return new l(String(this), this[c].options);
    }
  }
}, 23110, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var r = {
    ACTION_SUFFIX: function () {
      return f;
    },
    APP_DIR_ALIAS: function () {
      return H;
    },
    CACHE_ONE_YEAR_SECONDS: function () {
      return C;
    },
    DOT_NEXT_ALIAS: function () {
      return G;
    },
    ESLINT_DEFAULT_DIRS: function () {
      return Ao;
    },
    GSP_NO_RETURNED_VALUE: function () {
      return Ae;
    },
    GSSP_COMPONENT_MEMBER_ERROR: function () {
      return An;
    },
    GSSP_NO_RETURNED_VALUE: function () {
      return At;
    },
    HTML_CONTENT_TYPE_HEADER: function () {
      return i;
    },
    INFINITE_CACHE: function () {
      return N;
    },
    INSTRUMENTATION_HOOK_FILENAME: function () {
      return B;
    },
    JSON_CONTENT_TYPE_HEADER: function () {
      return o;
    },
    MATCHED_PATH_HEADER: function () {
      return l;
    },
    MIDDLEWARE_FILENAME: function () {
      return I;
    },
    MIDDLEWARE_LOCATION_REGEXP: function () {
      return j;
    },
    NEXT_BODY_SUFFIX: function () {
      return b;
    },
    NEXT_CACHE_IMPLICIT_TAG_ID: function () {
      return x;
    },
    NEXT_CACHE_REVALIDATED_TAGS_HEADER: function () {
      return D;
    },
    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function () {
      return y;
    },
    NEXT_CACHE_ROOT_PARAM_TAG_ID: function () {
      return T;
    },
    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function () {
      return O;
    },
    NEXT_CACHE_TAGS_HEADER: function () {
      return v;
    },
    NEXT_CACHE_TAG_MAX_ITEMS: function () {
      return R;
    },
    NEXT_CACHE_TAG_MAX_LENGTH: function () {
      return S;
    },
    NEXT_DATA_SUFFIX: function () {
      return w;
    },
    NEXT_INTERCEPTION_MARKER_PREFIX: function () {
      return c;
    },
    NEXT_META_SUFFIX: function () {
      return m;
    },
    NEXT_NAV_DEPLOYMENT_ID_HEADER: function () {
      return P;
    },
    NEXT_QUERY_PARAM_PREFIX: function () {
      return s;
    },
    NEXT_RESUME_HEADER: function () {
      return E;
    },
    NEXT_RESUME_STATE_LENGTH_HEADER: function () {
      return _;
    },
    NON_STANDARD_NODE_ENV: function () {
      return Aa;
    },
    PAGES_DIR_ALIAS: function () {
      return L;
    },
    PRERENDER_REVALIDATE_HEADER: function () {
      return u;
    },
    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function () {
      return d;
    },
    PROXY_FILENAME: function () {
      return M;
    },
    PROXY_LOCATION_REGEXP: function () {
      return k;
    },
    PUBLIC_DIR_MIDDLEWARE_CONFLICT: function () {
      return z;
    },
    ROOT_DIR_ALIAS: function () {
      return U;
    },
    RSC_ACTION_CLIENT_WRAPPER_ALIAS: function () {
      return Y;
    },
    RSC_ACTION_ENCRYPTION_ALIAS: function () {
      return W;
    },
    RSC_ACTION_PROXY_ALIAS: function () {
      return q;
    },
    RSC_ACTION_VALIDATE_ALIAS: function () {
      return X;
    },
    RSC_CACHE_WRAPPER_ALIAS: function () {
      return F;
    },
    RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function () {
      return Q;
    },
    RSC_MOD_REF_PROXY_ALIAS: function () {
      return V;
    },
    RSC_SEGMENTS_DIR_SUFFIX: function () {
      return p;
    },
    RSC_SEGMENT_SUFFIX: function () {
      return h;
    },
    RSC_SUFFIX: function () {
      return g;
    },
    SERVER_PROPS_EXPORT_ERROR: function () {
      return AA;
    },
    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function () {
      return K;
    },
    SERVER_PROPS_SSG_CONFLICT: function () {
      return J;
    },
    SERVER_RUNTIME: function () {
      return As;
    },
    SSG_FALLBACK_EXPORT_ERROR: function () {
      return Ai;
    },
    SSG_GET_INITIAL_PROPS_CONFLICT: function () {
      return $;
    },
    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function () {
      return Z;
    },
    TEXT_PLAIN_CONTENT_TYPE_HEADER: function () {
      return a;
    },
    UNSTABLE_REVALIDATE_RENAME_ERROR: function () {
      return Ar;
    },
    WEBPACK_LAYERS: function () {
      return Au;
    },
    WEBPACK_RESOURCE_QUERIES: function () {
      return Ad;
    },
    WEB_SOCKET_MAX_RECONNECTIONS: function () {
      return Ac;
    }
  };
  for (var n in r) {
    Object.defineProperty(t, n, {
      enumerable: true,
      get: r[n]
    });
  }
  let a = "text/plain";
  let i = "text/html; charset=utf-8";
  let o = "application/json; charset=utf-8";
  let s = "nxtP";
  let c = "nxtI";
  let l = "x-matched-path";
  let u = "x-prerender-revalidate";
  let d = "x-prerender-revalidate-if-generated";
  let p = ".segments";
  let h = ".segment.rsc";
  let g = ".rsc";
  let f = ".action";
  let w = ".json";
  let m = ".meta";
  let b = ".body";
  let P = "x-nextjs-deployment-id";
  let v = "x-next-cache-tags";
  let D = "x-next-revalidated-tags";
  let y = "x-next-revalidate-tag-token";
  let E = "next-resume";
  let _ = "x-next-resume-state-length";
  let R = 128;
  let S = 256;
  let O = 1024;
  let x = "_N_T_";
  let T = "_N_RP_";
  let C = 31536000;
  let N = 4294967294;
  let I = "middleware";
  let j = `(?:src/)?${I}`;
  let M = "proxy";
  let k = `(?:src/)?${M}`;
  let B = "instrumentation";
  let L = "private-next-pages";
  let G = "private-dot-next";
  let U = "private-next-root-dir";
  let H = "private-next-app-dir";
  let V = "private-next-rsc-mod-ref-proxy";
  let X = "private-next-rsc-action-validate";
  let q = "private-next-rsc-server-reference";
  let F = "private-next-rsc-cache-wrapper";
  let Q = "private-next-rsc-track-dynamic-import";
  let W = "private-next-rsc-action-encryption";
  let Y = "private-next-rsc-action-client-wrapper";
  let z = "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict";
  let $ = "You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps";
  let K = "You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.";
  let J = "You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps";
  let Z = "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props";
  let AA = "pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export";
  let Ae = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
  let At = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
  let Ar = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.";
  let An = "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member";
  let Aa = "You are using a non-standard \"NODE_ENV\" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env";
  let Ai = "Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export";
  let Ao = ["app", "pages", "components", "lib", "src"];
  let As = {
    edge: "edge",
    experimentalEdge: "experimental-edge",
    nodejs: "nodejs"
  };
  let Ac = 12;
  let Al = {
    shared: "shared",
    reactServerComponents: "rsc",
    serverSideRendering: "ssr",
    actionBrowser: "action-browser",
    apiNode: "api-node",
    apiEdge: "api-edge",
    middleware: "middleware",
    instrument: "instrument",
    edgeAsset: "edge-asset",
    appPagesBrowser: "app-pages-browser",
    pagesDirBrowser: "pages-dir-browser",
    pagesDirEdge: "pages-dir-edge",
    pagesDirNode: "pages-dir-node"
  };
  let Au = {
    ...Al,
    GROUP: {
      builtinReact: [Al.reactServerComponents, Al.actionBrowser],
      serverOnly: [Al.reactServerComponents, Al.actionBrowser, Al.instrument, Al.middleware],
      neutralTarget: [Al.apiNode, Al.apiEdge],
      clientOnly: [Al.serverSideRendering, Al.appPagesBrowser],
      bundled: [Al.reactServerComponents, Al.actionBrowser, Al.serverSideRendering, Al.appPagesBrowser, Al.shared, Al.instrument, Al.middleware],
      appPages: [Al.reactServerComponents, Al.serverSideRendering, Al.appPagesBrowser, Al.actionBrowser]
    }
  };
  let Ad = {
    edgeSSREntry: "__next_edge_ssr_entry__",
    metadata: "__next_metadata__",
    metadataRoute: "__next_metadata_route__",
    metadataImageMeta: "__next_metadata_image_meta__"
  };
}, 65129, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var r = {
    fromNodeOutgoingHttpHeaders: function () {
      return i;
    },
    normalizeNextQueryParam: function () {
      return l;
    },
    splitCookiesString: function () {
      return o;
    },
    toNodeOutgoingHttpHeaders: function () {
      return s;
    },
    validateURL: function () {
      return c;
    }
  };
  for (var n in r) {
    Object.defineProperty(t, n, {
      enumerable: true,
      get: r[n]
    });
  }
  let a = A.r(23110);
  function i(A) {
    let e = new Headers();
    for (let [t, r] of Object.entries(A)) {
      for (let A of Array.isArray(r) ? r : [r]) {
        if (A !== undefined) {
          if (typeof A == "number") {
            A = A.toString();
          }
          e.append(t, A);
        }
      }
    }
    return e;
  }
  function o(A) {
    var e;
    var t;
    var r;
    var n;
    var a;
    var i = [];
    var o = 0;
    function s() {
      while (o < A.length && /\s/.test(A.charAt(o))) {
        o += 1;
      }
      return o < A.length;
    }
    while (o < A.length) {
      e = o;
      a = false;
      while (s()) {
        if ((t = A.charAt(o)) === ",") {
          r = o;
          o += 1;
          s();
          n = o;
          while (o < A.length && (t = A.charAt(o)) !== "=" && t !== ";" && t !== ",") {
            o += 1;
          }
          if (o < A.length && A.charAt(o) === "=") {
            a = true;
            o = n;
            i.push(A.substring(e, r));
            e = o;
          } else {
            o = r + 1;
          }
        } else {
          o += 1;
        }
      }
      if (!a || o >= A.length) {
        i.push(A.substring(e, A.length));
      }
    }
    return i;
  }
  function s(A) {
    let e = {};
    let t = [];
    if (A) {
      for (let [r, n] of A.entries()) {
        if (r.toLowerCase() === "set-cookie") {
          t.push(...o(n));
          e[r] = t.length === 1 ? t[0] : t;
        } else {
          e[r] = n;
        }
      }
    }
    return e;
  }
  function c(A) {
    try {
      return String(new URL(String(A)));
    } catch (e) {
      throw Object.defineProperty(Error(`URL is malformed "${String(A)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
        cause: e
      }), "__NEXT_ERROR_CODE", {
        value: "E61",
        enumerable: false,
        configurable: true
      });
    }
  }
  function l(A) {
    for (let e of [a.NEXT_QUERY_PARAM_PREFIX, a.NEXT_INTERCEPTION_MARKER_PREFIX]) {
      if (A !== e && A.startsWith(e)) {
        return A.substring(e.length);
      }
    }
    return null;
  }
}, 2492, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var r = {
    PageSignatureError: function () {
      return a;
    },
    RemovedPageError: function () {
      return i;
    },
    RemovedUAError: function () {
      return o;
    }
  };
  for (var n in r) {
    Object.defineProperty(t, n, {
      enumerable: true,
      get: r[n]
    });
  }
  class a extends Error {
    constructor({
      page: A
    }) {
      super(`The middleware "${A}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
      Object.defineProperty(this, "__NEXT_ERROR_CODE", {
        value: "E1177",
        enumerable: false,
        configurable: true
      });
    }
  }
  class i extends Error {
    constructor() {
      super("The request.page has been deprecated in favour of `URLPattern`.\n  Read more: https://nextjs.org/docs/messages/middleware-request-page\n  ");
      Object.defineProperty(this, "__NEXT_ERROR_CODE", {
        value: "E1178",
        enumerable: false,
        configurable: true
      });
    }
  }
  class o extends Error {
    constructor() {
      super("The request.ua has been removed in favour of `userAgent` function.\n  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent\n  ");
      Object.defineProperty(this, "__NEXT_ERROR_CODE", {
        value: "E1172",
        enumerable: false,
        configurable: true
      });
    }
  }
}, 34669, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var r = {
    RequestCookies: function () {
      return a.RequestCookies;
    },
    ResponseCookies: function () {
      return a.ResponseCookies;
    },
    stringifyCookie: function () {
      return a.stringifyCookie;
    }
  };
  for (var n in r) {
    Object.defineProperty(t, n, {
      enumerable: true,
      get: r[n]
    });
  }
  let a = A.r(46216);
}, 56105, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var r = {
    INTERNALS: function () {
      return c;
    },
    NextRequest: function () {
      return l;
    }
  };
  for (var n in r) {
    Object.defineProperty(t, n, {
      enumerable: true,
      get: r[n]
    });
  }
  let a = A.r(53278);
  let i = A.r(65129);
  let o = A.r(2492);
  let s = A.r(34669);
  let c = Symbol("internal request");
  class l extends Request {
    constructor(A, e = {}) {
      const t = typeof A != "string" && "url" in A ? A.url : String(A);
      (0, i.validateURL)(t);
      if (e.body && e.duplex !== "half") {
        e.duplex = "half";
      }
      if (A instanceof Request) {
        super(A, e);
      } else {
        super(t, e);
      }
      const r = new a.NextURL(t, {
        headers: (0, i.toNodeOutgoingHttpHeaders)(this.headers),
        nextConfig: e.nextConfig
      });
      this[c] = {
        cookies: new s.RequestCookies(this.headers),
        nextUrl: r,
        url: r.toString()
      };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
      return {
        cookies: this.cookies,
        nextUrl: this.nextUrl,
        url: this.url,
        bodyUsed: this.bodyUsed,
        cache: this.cache,
        credentials: this.credentials,
        destination: this.destination,
        headers: Object.fromEntries(this.headers),
        integrity: this.integrity,
        keepalive: this.keepalive,
        method: this.method,
        mode: this.mode,
        redirect: this.redirect,
        referrer: this.referrer,
        referrerPolicy: this.referrerPolicy,
        signal: this.signal
      };
    }
    get cookies() {
      return this[c].cookies;
    }
    get nextUrl() {
      return this[c].nextUrl;
    }
    get page() {
      throw new o.RemovedPageError();
    }
    get ua() {
      throw new o.RemovedUAError();
    }
    get url() {
      return this[c].url;
    }
  }
}, 51157, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "ReflectAdapter", {
    enumerable: true,
    get: function () {
      return r;
    }
  });
  class r {
    static get(A, e, t) {
      let r = Reflect.get(A, e, t);
      if (typeof r == "function") {
        return r.bind(A);
      } else {
        return r;
      }
    }
    static set(A, e, t, r) {
      return Reflect.set(A, e, t, r);
    }
    static has(A, e) {
      return Reflect.has(A, e);
    }
    static deleteProperty(A, e) {
      return Reflect.deleteProperty(A, e);
    }
  }
}, 69465, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "NextResponse", {
    enumerable: true,
    get: function () {
      return u;
    }
  });
  let r = A.r(34669);
  let n = A.r(53278);
  let a = A.r(65129);
  let i = A.r(51157);
  let o = A.r(34669);
  let s = Symbol("internal response");
  let c = new Set([301, 302, 303, 307, 308]);
  function l(A, e) {
    var t;
    if (A == null || (t = A.request) == null ? undefined : t.headers) {
      if (!(A.request.headers instanceof Headers)) {
        throw Object.defineProperty(Error("request.headers must be an instance of Headers"), "__NEXT_ERROR_CODE", {
          value: "E119",
          enumerable: false,
          configurable: true
        });
      }
      let t = [];
      for (let [r, n] of A.request.headers) {
        e.set("x-middleware-request-" + r, n);
        t.push(r);
      }
      e.set("x-middleware-override-headers", t.join(","));
    }
  }
  class u extends Response {
    constructor(A, e = {}) {
      super(A, e);
      const t = this.headers;
      const c = new Proxy(new o.ResponseCookies(t), {
        get(A, n, a) {
          switch (n) {
            case "delete":
            case "set":
              return (...a) => {
                let i = Reflect.apply(A[n], A, a);
                let s = new Headers(t);
                if (i instanceof o.ResponseCookies) {
                  t.set("x-middleware-set-cookie", i.getAll().map(A => (0, r.stringifyCookie)(A)).join(","));
                }
                l(e, s);
                return i;
              };
            default:
              return i.ReflectAdapter.get(A, n, a);
          }
        }
      });
      this[s] = {
        cookies: c,
        url: e.url ? new n.NextURL(e.url, {
          headers: (0, a.toNodeOutgoingHttpHeaders)(t),
          nextConfig: e.nextConfig
        }) : undefined
      };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
      return {
        cookies: this.cookies,
        url: this.url,
        body: this.body,
        bodyUsed: this.bodyUsed,
        headers: Object.fromEntries(this.headers),
        ok: this.ok,
        redirected: this.redirected,
        status: this.status,
        statusText: this.statusText,
        type: this.type
      };
    }
    get cookies() {
      return this[s].cookies;
    }
    static json(A, e) {
      let t = Response.json(A, e);
      return new u(t.body, t);
    }
    static redirect(A, e) {
      let t = typeof e == "number" ? e : (e == null ? undefined : e.status) ?? 307;
      if (!c.has(t)) {
        throw Object.defineProperty(RangeError("Failed to execute \"redirect\" on \"response\": Invalid status code"), "__NEXT_ERROR_CODE", {
          value: "E529",
          enumerable: false,
          configurable: true
        });
      }
      let r = typeof e == "object" ? e : {};
      let n = new Headers(r == null ? undefined : r.headers);
      n.set("Location", (0, a.validateURL)(A));
      return new u(null, {
        ...r,
        headers: n,
        status: t
      });
    }
    static rewrite(A, e) {
      let t = new Headers(e == null ? undefined : e.headers);
      t.set("x-middleware-rewrite", (0, a.validateURL)(A));
      l(e, t);
      return new u(null, {
        ...e,
        headers: t
      });
    }
    static next(A) {
      let e = new Headers(A == null ? undefined : A.headers);
      e.set("x-middleware-next", "1");
      l(A, e);
      return new u(null, {
        ...A,
        headers: e
      });
    }
  }
}, 19928, (A, e, t) => {
  "use strict";

  function r() {
    throw Object.defineProperty(Error("ImageResponse moved from \"next/server\" to \"next/og\" since Next.js 14, please import from \"next/og\" instead"), "__NEXT_ERROR_CODE", {
      value: "E183",
      enumerable: false,
      configurable: true
    });
  }
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "ImageResponse", {
    enumerable: true,
    get: function () {
      return r;
    }
  });
}, 31943, (A, e, t) => {
  var r = {
    943: function (e, t) {
      (function (r) {
        "use strict";

        var n = "function";
        var a = "undefined";
        var i = "object";
        var o = "string";
        var s = "major";
        var c = "model";
        var l = "name";
        var u = "type";
        var d = "vendor";
        var p = "version";
        var h = "architecture";
        var g = "console";
        var f = "mobile";
        var w = "tablet";
        var m = "smarttv";
        var b = "wearable";
        var P = "embedded";
        var v = "Amazon";
        var D = "Apple";
        var y = "ASUS";
        var E = "BlackBerry";
        var _ = "Browser";
        var R = "Chrome";
        var S = "Firefox";
        var O = "Google";
        var x = "Huawei";
        var T = "Microsoft";
        var C = "Motorola";
        var N = "Opera";
        var I = "Samsung";
        var j = "Sharp";
        var M = "Sony";
        var k = "Xiaomi";
        var B = "Zebra";
        var L = "Facebook";
        var G = "Chromium OS";
        var U = "Mac OS";
        function H(A, e) {
          var t = {};
          for (var r in A) {
            if (e[r] && e[r].length % 2 == 0) {
              t[r] = e[r].concat(A[r]);
            } else {
              t[r] = A[r];
            }
          }
          return t;
        }
        function V(A) {
          var e = {};
          for (var t = 0; t < A.length; t++) {
            e[A[t].toUpperCase()] = A[t];
          }
          return e;
        }
        function X(A, e) {
          return typeof A === o && q(e).indexOf(q(A)) !== -1;
        }
        function q(A) {
          return A.toLowerCase();
        }
        function F(A, e) {
          if (typeof A === o) {
            A = A.replace(/^\s\s*/, "");
            if (typeof e === a) {
              return A;
            } else {
              return A.substring(0, 350);
            }
          }
        }
        function Q(A, e) {
          var t;
          var r;
          var a;
          var o;
          for (var s, c, l = 0; l < e.length && !s;) {
            var u = e[l];
            var d = e[l + 1];
            for (t = r = 0; t < u.length && !s && u[t];) {
              if (s = u[t++].exec(A)) {
                for (a = 0; a < d.length; a++) {
                  c = s[++r];
                  if (typeof (o = d[a]) === i && o.length > 0) {
                    if (o.length === 2) {
                      if (typeof o[1] == n) {
                        this[o[0]] = o[1].call(this, c);
                      } else {
                        this[o[0]] = o[1];
                      }
                    } else if (o.length === 3) {
                      if (typeof o[1] !== n || o[1].exec && o[1].test) {
                        this[o[0]] = c ? c.replace(o[1], o[2]) : undefined;
                      } else {
                        this[o[0]] = c ? o[1].call(this, c, o[2]) : undefined;
                      }
                    } else if (o.length === 4) {
                      this[o[0]] = c ? o[3].call(this, c.replace(o[1], o[2])) : undefined;
                    }
                  } else {
                    this[o] = c || undefined;
                  }
                }
              }
            }
            l += 2;
          }
        }
        function W(A, e) {
          for (var t in e) {
            if (typeof e[t] === i && e[t].length > 0) {
              for (var r = 0; r < e[t].length; r++) {
                if (X(e[t][r], A)) {
                  if (t === "?") {
                    return undefined;
                  } else {
                    return t;
                  }
                }
              }
            } else if (X(e[t], A)) {
              if (t === "?") {
                return undefined;
              } else {
                return t;
              }
            }
          }
          return A;
        }
        var Y = {
          ME: "4.90",
          "NT 3.11": "NT3.51",
          "NT 4.0": "NT4.0",
          2000: "NT 5.0",
          XP: ["NT 5.1", "NT 5.2"],
          Vista: "NT 6.0",
          7: "NT 6.1",
          8: "NT 6.2",
          8.1: "NT 6.3",
          10: ["NT 6.4", "NT 10.0"],
          RT: "ARM"
        };
        var z = {
          browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [p, [l, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [p, [l, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [l, p], [/opios[\/ ]+([\w\.]+)/i], [p, [l, N + " Mini"]], [/\bopr\/([\w\.]+)/i], [p, [l, N]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [l, p], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [p, [l, "UC" + _]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [p, [l, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [p, [l, "WeChat"]], [/konqueror\/([\w\.]+)/i], [p, [l, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [p, [l, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [p, [l, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[l, /(.+)/, "$1 Secure " + _], p], [/\bfocus\/([\w\.]+)/i], [p, [l, S + " Focus"]], [/\bopt\/([\w\.]+)/i], [p, [l, N + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [p, [l, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [p, [l, "Dolphin"]], [/coast\/([\w\.]+)/i], [p, [l, N + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [p, [l, "MIUI " + _]], [/fxios\/([-\w\.]+)/i], [p, [l, S]], [/\bqihu|(qi?ho?o?|360)browser/i], [[l, "360 " + _]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[l, /(.+)/, "$1 " + _], p], [/(comodo_dragon)\/([\w\.]+)/i], [[l, /_/g, " "], p], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [l, p], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [l], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[l, L], p], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [l, p], [/\bgsa\/([\w\.]+) .*safari\//i], [p, [l, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [p, [l, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [p, [l, R + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[l, R + " WebView"], p], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [p, [l, "Android " + _]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [l, p], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [p, [l, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [p, l], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [l, [p, W, {
            "1.0": "/8",
            1.2: "/1",
            1.3: "/3",
            "2.0": "/412",
            "2.0.2": "/416",
            "2.0.3": "/417",
            "2.0.4": "/419",
            "?": "/"
          }]], [/(webkit|khtml)\/([\w\.]+)/i], [l, p], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[l, "Netscape"], p], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [p, [l, S + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [l, p], [/(cobalt)\/([\w\.]+)/i], [l, [p, /master.|lts./, ""]]],
          cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[h, "amd64"]], [/(ia32(?=;))/i], [[h, q]], [/((?:i[346]|x)86)[;\)]/i], [[h, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[h, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[h, "armhf"]], [/windows (ce|mobile); ppc;/i], [[h, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[h, /ower/, "", q]], [/(sun4\w)[;\)]/i], [[h, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[h, q]]],
          device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [c, [d, I], [u, w]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [c, [d, I], [u, f]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [c, [d, D], [u, f]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [c, [d, D], [u, w]], [/(macintosh);/i], [c, [d, D]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [c, [d, j], [u, f]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [c, [d, x], [u, w]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [c, [d, x], [u, f]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[c, /_/g, " "], [d, k], [u, f]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[c, /_/g, " "], [d, k], [u, w]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [c, [d, "OPPO"], [u, f]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [c, [d, "Vivo"], [u, f]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [c, [d, "Realme"], [u, f]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [c, [d, C], [u, f]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [c, [d, C], [u, w]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [c, [d, "LG"], [u, w]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [c, [d, "LG"], [u, f]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [c, [d, "Lenovo"], [u, w]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[c, /_/g, " "], [d, "Nokia"], [u, f]], [/(pixel c)\b/i], [c, [d, O], [u, w]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [c, [d, O], [u, f]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [c, [d, M], [u, f]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[c, "Xperia Tablet"], [d, M], [u, w]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [c, [d, "OnePlus"], [u, f]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [c, [d, v], [u, w]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[c, /(.+)/g, "Fire Phone $1"], [d, v], [u, f]], [/(playbook);[-\w\),; ]+(rim)/i], [c, d, [u, w]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [c, [d, E], [u, f]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [c, [d, y], [u, w]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [c, [d, y], [u, f]], [/(nexus 9)/i], [c, [d, "HTC"], [u, w]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [d, [c, /_/g, " "], [u, f]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [c, [d, "Acer"], [u, w]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [c, [d, "Meizu"], [u, f]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [d, c, [u, f]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [d, c, [u, w]], [/(surface duo)/i], [c, [d, T], [u, w]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [c, [d, "Fairphone"], [u, f]], [/(u304aa)/i], [c, [d, "AT&T"], [u, f]], [/\bsie-(\w*)/i], [c, [d, "Siemens"], [u, f]], [/\b(rct\w+) b/i], [c, [d, "RCA"], [u, w]], [/\b(venue[\d ]{2,7}) b/i], [c, [d, "Dell"], [u, w]], [/\b(q(?:mv|ta)\w+) b/i], [c, [d, "Verizon"], [u, w]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [c, [d, "Barnes & Noble"], [u, w]], [/\b(tm\d{3}\w+) b/i], [c, [d, "NuVision"], [u, w]], [/\b(k88) b/i], [c, [d, "ZTE"], [u, w]], [/\b(nx\d{3}j) b/i], [c, [d, "ZTE"], [u, f]], [/\b(gen\d{3}) b.+49h/i], [c, [d, "Swiss"], [u, f]], [/\b(zur\d{3}) b/i], [c, [d, "Swiss"], [u, w]], [/\b((zeki)?tb.*\b) b/i], [c, [d, "Zeki"], [u, w]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[d, "Dragon Touch"], c, [u, w]], [/\b(ns-?\w{0,9}) b/i], [c, [d, "Insignia"], [u, w]], [/\b((nxa|next)-?\w{0,9}) b/i], [c, [d, "NextBook"], [u, w]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[d, "Voice"], c, [u, f]], [/\b(lvtel\-)?(v1[12]) b/i], [[d, "LvTel"], c, [u, f]], [/\b(ph-1) /i], [c, [d, "Essential"], [u, f]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [c, [d, "Envizen"], [u, w]], [/\b(trio[-\w\. ]+) b/i], [c, [d, "MachSpeed"], [u, w]], [/\btu_(1491) b/i], [c, [d, "Rotor"], [u, w]], [/(shield[\w ]+) b/i], [c, [d, "Nvidia"], [u, w]], [/(sprint) (\w+)/i], [d, c, [u, f]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [d, T], [u, f]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [c, [d, B], [u, w]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [c, [d, B], [u, f]], [/smart-tv.+(samsung)/i], [d, [u, m]], [/hbbtv.+maple;(\d+)/i], [[c, /^/, "SmartTV"], [d, I], [u, m]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[d, "LG"], [u, m]], [/(apple) ?tv/i], [d, [c, D + " TV"], [u, m]], [/crkey/i], [[c, R + "cast"], [d, O], [u, m]], [/droid.+aft(\w)( bui|\))/i], [c, [d, v], [u, m]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [c, [d, j], [u, m]], [/(bravia[\w ]+)( bui|\))/i], [c, [d, M], [u, m]], [/(mitv-\w{5}) bui/i], [c, [d, k], [u, m]], [/Hbbtv.*(technisat) (.*);/i], [d, c, [u, m]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[d, F], [c, F], [u, m]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[u, m]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [d, c, [u, g]], [/droid.+; (shield) bui/i], [c, [d, "Nvidia"], [u, g]], [/(playstation [345portablevi]+)/i], [c, [d, M], [u, g]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [c, [d, T], [u, g]], [/((pebble))app/i], [d, c, [u, b]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [c, [d, D], [u, b]], [/droid.+; (glass) \d/i], [c, [d, O], [u, b]], [/droid.+; (wt63?0{2,3})\)/i], [c, [d, B], [u, b]], [/(quest( 2| pro)?)/i], [c, [d, L], [u, b]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [d, [u, P]], [/(aeobc)\b/i], [c, [d, v], [u, P]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [c, [u, f]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [c, [u, w]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[u, w]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[u, f]], [/(android[-\w\. ]{0,9});.+buil/i], [c, [d, "Generic"]]],
          engine: [[/windows.+ edge\/([\w\.]+)/i], [p, [l, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [p, [l, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [l, p], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [p, l]],
          os: [[/microsoft (windows) (vista|xp)/i], [l, p], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [l, [p, W, Y]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[l, "Windows"], [p, W, Y]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[p, /_/g, "."], [l, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[l, U], [p, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [p, l], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [l, p], [/\(bb(10);/i], [p, [l, E]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [p, [l, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [p, [l, S + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [p, [l, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [p, [l, "watchOS"]], [/crkey\/([\d\.]+)/i], [p, [l, R + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[l, G], p], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [l, p], [/(sunos) ?([\w\.\d]*)/i], [[l, "Solaris"], p], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [l, p]]
        };
        function $(A, e) {
          if (typeof A === i) {
            e = A;
            A = undefined;
          }
          if (!(this instanceof $)) {
            return new $(A, e).getResult();
          }
          var t = typeof r !== a && r.navigator ? r.navigator : undefined;
          var g = A || (t && t.userAgent ? t.userAgent : "");
          var m = t && t.userAgentData ? t.userAgentData : undefined;
          var b = e ? H(z, e) : z;
          var P = t && t.userAgent == g;
          this.getBrowser = function () {
            var A;
            var e = {
              [l]: undefined,
              [p]: undefined
            };
            Q.call(e, g, b.browser);
            e[s] = typeof (A = e[p]) === o ? A.replace(/[^\d\.]/g, "").split(".")[0] : undefined;
            if (P && t && t.brave && typeof t.brave.isBrave == n) {
              e[l] = "Brave";
            }
            return e;
          };
          this.getCPU = function () {
            var A = {
              [h]: undefined
            };
            Q.call(A, g, b.cpu);
            return A;
          };
          this.getDevice = function () {
            var A = {
              [d]: undefined,
              [c]: undefined,
              [u]: undefined
            };
            Q.call(A, g, b.device);
            if (P && !A[u] && m && m.mobile) {
              A[u] = f;
            }
            if (P && A[c] == "Macintosh" && t && typeof t.standalone !== a && t.maxTouchPoints && t.maxTouchPoints > 2) {
              A[c] = "iPad";
              A[u] = w;
            }
            return A;
          };
          this.getEngine = function () {
            var A = {
              [l]: undefined,
              [p]: undefined
            };
            Q.call(A, g, b.engine);
            return A;
          };
          this.getOS = function () {
            var A = {
              [l]: undefined,
              [p]: undefined
            };
            Q.call(A, g, b.os);
            if (P && !A[l] && m && m.platform != "Unknown") {
              A[l] = m.platform.replace(/chrome os/i, G).replace(/macos/i, U);
            }
            return A;
          };
          this.getResult = function () {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            };
          };
          this.getUA = function () {
            return g;
          };
          this.setUA = function (A) {
            g = typeof A === o && A.length > 350 ? F(A, 350) : A;
            return this;
          };
          this.setUA(g);
          return this;
        }
        $.VERSION = "1.0.35";
        $.BROWSER = V([l, p, s]);
        $.CPU = V([h]);
        $.DEVICE = V([c, d, u, g, f, m, w, b, P]);
        $.ENGINE = $.OS = V([l, p]);
        if (typeof t !== a) {
          if (e.exports) {
            t = e.exports = $;
          }
          t.UAParser = $;
        } else if (typeof define === n && define.amd) {
          A.r;
          if ($ !== undefined) {
            A.v($);
          }
        } else if (typeof r !== a) {
          r.UAParser = $;
        }
        var K = typeof r !== a && (r.jQuery || r.Zepto);
        if (K && !K.ua) {
          var J = new $();
          K.ua = J.getResult();
          K.ua.get = function () {
            return J.getUA();
          };
          K.ua.set = function (A) {
            J.setUA(A);
            var e = J.getResult();
            for (var t in e) {
              K.ua[t] = e[t];
            }
          };
        }
      })(this);
    }
  };
  var n = {};
  function a(A) {
    var e = n[A];
    if (e !== undefined) {
      return e.exports;
    }
    var t = n[A] = {
      exports: {}
    };
    var i = true;
    try {
      r[A].call(t.exports, t, t.exports, a);
      i = false;
    } finally {
      if (i) {
        delete n[A];
      }
    }
    return t.exports;
  }
  a.ab = "/ROOT/client/node_modules/next/dist/compiled/ua-parser-js/";
  e.exports = a(943);
}, 91830, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var r;
  var n = {
    isBot: function () {
      return o;
    },
    userAgent: function () {
      return c;
    },
    userAgentFromString: function () {
      return s;
    }
  };
  for (var a in n) {
    Object.defineProperty(t, a, {
      enumerable: true,
      get: n[a]
    });
  }
  let i = (r = A.r(31943)) && r.__esModule ? r : {
    default: r
  };
  function o(A) {
    return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver|GPTBot/i.test(A);
  }
  function s(A) {
    return {
      ...(0, i.default)(A),
      isBot: A !== undefined && o(A)
    };
  }
  function c({
    headers: A
  }) {
    return s(A.get("user-agent") || undefined);
  }
}, 10011, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "URLPattern", {
    enumerable: true,
    get: function () {
      return r;
    }
  });
  let r = typeof URLPattern === "undefined" ? undefined : URLPattern;
}, 51053, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "after", {
    enumerable: true,
    get: function () {
      return a;
    }
  });
  let r = A.r(56704);
  let n = A.r(32319);
  function a(A) {
    let e = r.workAsyncStorage.getStore();
    let t = n.workUnitAsyncStorage.getStore();
    if (!e || !t) {
      throw Object.defineProperty(Error("`after` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context"), "__NEXT_ERROR_CODE", {
        value: "E468",
        enumerable: false,
        configurable: true
      });
    }
    let {
      afterContext: a
    } = e;
    return a.after(A, t);
  }
}, 62900, (A, e, t) => {
  "use strict";

  var r;
  var n;
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  r = A.r(51053);
  n = t;
  Object.keys(r).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(n, A)) {
      Object.defineProperty(n, A, {
        enumerable: true,
        get: function () {
          return r[A];
        }
      });
    }
  });
}, 90705, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var r = {
    DynamicServerError: function () {
      return i;
    },
    isDynamicServerError: function () {
      return o;
    }
  };
  for (var n in r) {
    Object.defineProperty(t, n, {
      enumerable: true,
      get: r[n]
    });
  }
  let a = "DYNAMIC_SERVER_USAGE";
  class i extends Error {
    constructor(A) {
      super(`Dynamic server usage: ${A}`);
      this.description = A;
      this.digest = a;
    }
  }
  function o(A) {
    return typeof A == "object" && A !== null && "digest" in A && typeof A.digest == "string" && A.digest === a;
  }
  if ((typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && t.default.__esModule === undefined) {
    Object.defineProperty(t.default, "__esModule", {
      value: true
    });
    Object.assign(t.default, t);
    e.exports = t.default;
  }
}, 4824, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var r = {
    StaticGenBailoutError: function () {
      return i;
    },
    isStaticGenBailoutError: function () {
      return o;
    }
  };
  for (var n in r) {
    Object.defineProperty(t, n, {
      enumerable: true,
      get: r[n]
    });
  }
  let a = "NEXT_STATIC_GEN_BAILOUT";
  class i extends Error {
    constructor(...A) {
      super(...A);
      this.code = a;
    }
  }
  function o(A) {
    return typeof A == "object" && A !== null && "code" in A && A.code === a;
  }
  if ((typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && t.default.__esModule === undefined) {
    Object.defineProperty(t.default, "__esModule", {
      value: true
    });
    Object.assign(t.default, t);
    e.exports = t.default;
  }
}, 28338, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "InvariantError", {
    enumerable: true,
    get: function () {
      return r;
    }
  });
  class r extends Error {
    constructor(A, e) {
      super(`Invariant: ${A.endsWith(".") ? A : A + "."} This is a bug in Next.js.`, e);
      Object.defineProperty(this, "__NEXT_ERROR_CODE", {
        value: "E1179",
        enumerable: false,
        configurable: true
      });
      this.name = "InvariantError";
    }
  }
}, 59758, (A, e, t) => {
  "use strict";

  function r() {
    let A;
    let e;
    let t = new Promise((t, r) => {
      A = t;
      e = r;
    });
    return {
      resolve: A,
      reject: e,
      promise: t
    };
  }
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  Object.defineProperty(t, "createPromiseWithResolvers", {
    enumerable: true,
    get: function () {
      return r;
    }
  });
}, 75697, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var r;
  var n;
  var a = {
    RENDER_STAGE_ADVANCE_ORDER: function () {
      return l;
    },
    RenderStage: function () {
      return c;
    },
    StagedRenderingController: function () {
      return h;
    },
    SyncIOMode: function () {
      return p;
    },
    getNextStage: function () {
      return u;
    },
    isAdvanceableRenderStage: function () {
      return d;
    }
  };
  for (var i in a) {
    Object.defineProperty(t, i, {
      enumerable: true,
      get: a[i]
    });
  }
  let o = A.r(28338);
  let s = A.r(59758);
  (r = {})[r.Before = 1] = "Before";
  r[r.ShellStatic = 11] = "ShellStatic";
  r[r.Static = 13] = "Static";
  r[r.ShellRuntime = 21] = "ShellRuntime";
  r[r.Runtime = 23] = "Runtime";
  r[r.Dynamic = 30] = "Dynamic";
  r[r.Abandoned = 40] = "Abandoned";
  var c = r;
  let l = [11, 13, 21, 23, 30];
  function u(A) {
    return l[l.indexOf(A) + 1];
  }
  function d(A) {
    return A > 1 && A <= 30;
  }
  (n = {})[n.Untracked = 1] = "Untracked";
  n[n.AllowedInRuntimeOrDynamic = 2] = "AllowedInRuntimeOrDynamic";
  n[n.AllowedInDynamic = 3] = "AllowedInDynamic";
  var p = n;
  class h {
    constructor({
      abortSignal: A,
      abandonController: e,
      syncIO: t,
      finalStage: r
    }) {
      this.currentStage = 1;
      this.syncInterruptReason = null;
      this.triggers = {
        11: f(),
        13: f(),
        21: f(),
        23: f(),
        30: f()
      };
      this.abortSignal = A;
      this.abandonController = e;
      this.syncIOMode = t;
      this.finalStage = r;
      if (A) {
        A.addEventListener("abort", () => {
          let {
            reason: e
          } = A;
          for (let A of Object.values(this.triggers)) {
            var t;
            var r;
            t = A;
            r = e;
            if (t.state === "pending") {
              t.state = "cancelled";
              t._listeners.length = 0;
              t.promise.catch(g);
              t._rejectPromise(r);
            }
          }
        }, {
          once: true
        });
      }
      if (e) {
        e.signal.addEventListener("abort", () => {
          this.abandonRender();
        }, {
          once: true
        });
      }
    }
    onStage(A, e) {
      var t;
      var r;
      t = this.triggers[A];
      r = e;
      if (t.state === "pending") {
        t._listeners.push(r);
      } else {
        r();
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
    syncInterruptCurrentStageWithReason(A) {
      let {
        currentStage: e
      } = this;
      if (e !== 1 && e !== 30 && e !== 40) {
        if (this.abandonController) {
          this.abandonController.abort();
          return;
        }
        if (this.abortSignal) {
          this.syncInterruptReason = A;
          this.currentStage = 40;
          return;
        }
        this.syncInterruptReason = A;
        this.advanceStage(30);
      }
    }
    getSyncInterruptReason() {
      return this.syncInterruptReason;
    }
    getStageEndTime(A) {
      return this.triggers[u(A)].triggeredAt ?? Infinity;
    }
    abandonRender() {
      let {
        currentStage: A
      } = this;
      if (A === 1) {
        throw Object.defineProperty(new o.InvariantError("A render that hasn't started yet cannot be abandoned"), "__NEXT_ERROR_CODE", {
          value: "E1300",
          enumerable: false,
          configurable: true
        });
      }
      if (A === 30 || A === 40) {
        return;
      }
      let e = l.indexOf(A) + 1;
      let t = l.indexOf(30);
      for (let A = e; A < t; A++) {
        this.resolveStage(l[A]);
      }
      this.currentStage = 40;
    }
    advanceStage(A) {
      if (this.finalStage !== null && A > this.finalStage) {
        throw Object.defineProperty(new o.InvariantError(`Attempted to advance to stage ${c[A]} but the render is limited to ${c[this.finalStage]}`), "__NEXT_ERROR_CODE", {
          value: "E1302",
          enumerable: false,
          configurable: true
        });
      }
      let {
        currentStage: e
      } = this;
      if (e === 30 || e === 40 || A <= e) {
        return;
      }
      this.currentStage = A;
      let t = e === 1 ? 0 : l.indexOf(e) + 1;
      let r = l.indexOf(A);
      for (let A = t; A <= r; A++) {
        this.resolveStage(l[A]);
      }
    }
    resolveStage(A) {
      var e = this.triggers[A];
      if (e.state === "pending") {
        e.state = "triggered";
        e.triggeredAt = performance.now() + performance.timeOrigin;
        try {
          let {
            _listeners: A
          } = e;
          for (let e = 0; e < A.length; e++) {
            A[e]();
          }
          A.length = 0;
        } finally {
          e._resolvePromise();
        }
      }
    }
    getStagePromise(A) {
      return this.triggers[A].promise;
    }
    waitForStage(A) {
      return this.getStagePromise(A);
    }
    delayUntilStage(A, e, t) {
      let r = this.getStagePromise(A).then(() => t);
      if (this.abortSignal) {
        r.catch(g);
      }
      return r;
    }
  }
  function g() {}
  function f() {
    let {
      promise: A,
      resolve: e,
      reject: t
    } = (0, s.createPromiseWithResolvers)();
    return {
      state: "pending",
      triggeredAt: null,
      promise: A,
      _listeners: [],
      _resolvePromise: e,
      _rejectPromise: t
    };
  }
}, 49137, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var r = {
    ClientHookDynamicError: function () {
      return l;
    },
    RENDER_STAGES_BY_DATA_KIND: function () {
      return R;
    },
    applyOwnerStack: function () {
      return S;
    },
    isClientHookDynamicError: function () {
      return u;
    },
    isHangingPromiseRejectionError: function () {
      return i;
    },
    makeClientHookHangingPromise: function () {
      return v;
    },
    makeDevtoolsIOAwarePromise: function () {
      return _;
    },
    makeDynamicHangingPromise: function () {
      return p;
    },
    makeFallbackParamsHangingPromise: function () {
      return f;
    },
    makePromiseFromTrigger: function () {
      return E;
    },
    makeRuntimeHangingPromise: function () {
      return g;
    },
    makeStageHangingPromise: function () {
      return w;
    },
    makeUntrackedHangingPromise: function () {
      return h;
    },
    trackFallbackParamsAccessed: function () {
      return b;
    },
    trackRuntimeDataAccessed: function () {
      return m;
    }
  };
  for (var n in r) {
    Object.defineProperty(t, n, {
      enumerable: true,
      get: r[n]
    });
  }
  let a = A.r(75697);
  function i(A) {
    return typeof A == "object" && A !== null && "digest" in A && A.digest === o;
  }
  A.r(32319);
  A.r(59043);
  let o = "HANGING_PROMISE_REJECTION";
  class s extends Error {
    constructor(A, e) {
      super(`During prerendering, ${e} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${e} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${A}".`);
      this.route = A;
      this.expression = e;
      this.digest = o;
    }
  }
  let c = "CLIENT_HOOK_DYNAMIC";
  class l extends Error {
    constructor(A, e) {
      super(`Route "${A}": Next.js encountered URL data \`${e}\` in a Client Component outside of \`<Suspense>\`.

This blocks prerendering because the value is only available at runtime.

Ways to fix this:
  - [stream] Wrap the component in \`<Suspense fallback={...}>\` so the hook value streams in after prerendering
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-client-hook`);
      this.digest = c;
      Object.defineProperty(this, "__NEXT_ERROR_CODE", {
        value: "E1433",
        enumerable: false,
        configurable: true
      });
    }
  }
  function u(A) {
    return typeof A == "object" && A !== null && "digest" in A && A.digest === c;
  }
  let d = new WeakMap();
  function p(A, e, t) {
    return D(A, new s(e, t));
  }
  function h(A, e, t) {
    return D(A, new s(e, t));
  }
  function g(A, e, t, r) {
    if (r !== null) {
      m(r);
    }
    return D(A, new s(e, t));
  }
  function f(A, e, t, r) {
    if (r !== null) {
      b(r);
    }
    return D(A, new s(e, t));
  }
  function w(A, e, t, r) {
    m(r);
    return D(A, new s(e, t));
  }
  function m(A) {
    P(A, false);
  }
  function b(A) {
    P(A, true);
  }
  function P(A, e) {
    if (A.type === "prerender") {
      var t;
      if ((t = A.runtimeDataAccessed) != null) {
        t.resolve(true);
      }
      let r = A.shouldAttemptStaticPrefetch;
      if (r !== null && (!e || !A.isFallbackUpgradeable)) {
        r.current = false;
      }
    }
  }
  function v(A, e) {
    return D(A, e);
  }
  function D(A, e) {
    if (A.aborted) {
      return Promise.reject(e);
    }
    {
      let t = new Promise((t, r) => {
        let n = r.bind(null, e);
        let a = d.get(A);
        if (a) {
          a.push(n);
        } else {
          let e = [n];
          d.set(A, e);
          A.addEventListener("abort", () => {
            for (let A = 0; A < e.length; A++) {
              e[A]();
            }
          }, {
            once: true
          });
        }
      });
      t.catch(y);
      return t;
    }
  }
  function y() {}
  function E(A, e) {
    let t = A.then(() => e);
    t.catch(y);
    return t;
  }
  function _(A, e, t) {
    if (e.stagedRendering) {
      return e.stagedRendering.delayUntilStage(t, undefined, A);
    } else {
      return new Promise(e => {
        setTimeout(() => {
          e(A);
        }, 0);
      });
    }
  }
  let R = {
    sessionData: a.RenderStage.ShellRuntime,
    staticLinkData: a.RenderStage.Static,
    runtimeLinkData: a.RenderStage.Runtime
  };
  function S(A) {
    return A;
  }
}, 96385, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var r = {
    METADATA_BOUNDARY_NAME: function () {
      return a;
    },
    OUTLET_BOUNDARY_NAME: function () {
      return o;
    },
    ROOT_LAYOUT_BOUNDARY_NAME: function () {
      return s;
    },
    VIEWPORT_BOUNDARY_NAME: function () {
      return i;
    }
  };
  for (var n in r) {
    Object.defineProperty(t, n, {
      enumerable: true,
      get: r[n]
    });
  }
  let a = "__next_metadata_boundary__";
  let i = "__next_viewport_boundary__";
  let o = "__next_outlet_boundary__";
  let s = "__next_root_layout_boundary__";
}, 68832, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var r = {
    atLeastOneTask: function () {
      return o;
    },
    scheduleImmediate: function () {
      return i;
    },
    scheduleOnNextTick: function () {
      return a;
    },
    waitAtLeastOneReactRenderTask: function () {
      return s;
    }
  };
  for (var n in r) {
    Object.defineProperty(t, n, {
      enumerable: true,
      get: r[n]
    });
  }
  let a = A => {
    Promise.resolve().then(() => {
      process.nextTick(A);
    });
  };
  let i = A => {
    setImmediate(A);
  };
  function o() {
    return new Promise(A => i(A));
  }
  function s() {
    return new Promise(A => setImmediate(A));
  }
}, 8404, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var r = {
    BailoutToCSRError: function () {
      return i;
    },
    isBailoutToCSRError: function () {
      return o;
    }
  };
  for (var n in r) {
    Object.defineProperty(t, n, {
      enumerable: true,
      get: r[n]
    });
  }
  let a = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
  class i extends Error {
    constructor(A) {
      super(`Bail out to client-side rendering: ${A}`);
      this.reason = A;
      this.digest = a;
    }
  }
  function o(A) {
    return typeof A == "object" && A !== null && "digest" in A && A.digest === a;
  }
}, 24257, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var r = {
    createDynamicBodyError: function () {
      return i;
    },
    createDynamicBodyErrorInNavigation: function () {
      return c;
    },
    createDynamicMetadataError: function () {
      return p;
    },
    createDynamicOrRuntimeBodyError: function () {
      return l;
    },
    createDynamicOrRuntimeMetadataError: function () {
      return m;
    },
    createDynamicOrRuntimeViewportError: function () {
      return w;
    },
    createDynamicViewportError: function () {
      return f;
    },
    createLinkBodyErrorInNavigation: function () {
      return s;
    },
    createLinkMetadataError: function () {
      return u;
    },
    createLinkViewportError: function () {
      return h;
    },
    createRuntimeBodyError: function () {
      return a;
    },
    createRuntimeBodyErrorInNavigation: function () {
      return o;
    },
    createRuntimeMetadataError: function () {
      return d;
    },
    createRuntimeViewportError: function () {
      return g;
    },
    logBuildDebugHint: function () {
      return b;
    }
  };
  for (var n in r) {
    Object.defineProperty(t, n, {
      enumerable: true,
      get: r[n]
    });
  }
  function a(A) {
    return Object.defineProperty(Error(`Route "${A}": Next.js encountered runtime data during prerendering.

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
  function i(A) {
    return Object.defineProperty(Error(`Route "${A}": Next.js encountered uncached data during prerendering.

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
  function o(A) {
    return Object.defineProperty(Error(`Route "${A}": Next.js encountered runtime data during prerendering or a navigation.

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
  function s(A) {
    return Object.defineProperty(Error(`Route "${A}": Next.js encountered URL data during prerendering or a navigation.

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
  function c(A) {
    return Object.defineProperty(Error(`Route "${A}": Next.js encountered uncached data during prerendering or a navigation.

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
  function l(A) {
    return Object.defineProperty(Error(`Route "${A}": Next.js encountered uncached or runtime data during prerendering.

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
  function u(A) {
    return Object.defineProperty(Error(`Route "${A}": Next.js encountered URL data in \`generateMetadata()\`.

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
  function d(A) {
    return Object.defineProperty(Error(`Route "${A}": Next.js encountered runtime data in \`generateMetadata()\`.

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
  function p(A) {
    return Object.defineProperty(Error(`Route "${A}": Next.js encountered uncached data in \`generateMetadata()\`.

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
  function h(A) {
    return Object.defineProperty(Error(`Route "${A}": Next.js encountered URL data in \`generateViewport()\`.

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
  function g(A) {
    return Object.defineProperty(Error(`Route "${A}": Next.js encountered runtime data in \`generateViewport()\`.

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
  function f(A) {
    return Object.defineProperty(Error(`Route "${A}": Next.js encountered uncached data in \`generateViewport()\`.

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
  function w(A) {
    return Object.defineProperty(Error(`Route "${A}": Next.js encountered uncached or runtime data in \`generateViewport()\`.

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
  function m(A) {
    return Object.defineProperty(Error(`Route "${A}": Next.js encountered uncached or runtime data in \`generateMetadata()\`.

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
  function b(A) {
    console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${A}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
  }
}, 30069, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var r = {
    INSTANT_SLOT_MARKER_PREFIX: function () {
      return i;
    },
    INSTANT_SLOT_MARKER_SUFFIX: function () {
      return o;
    },
    INSTANT_VALIDATION_BOUNDARY_NAME: function () {
      return a;
    }
  };
  for (var n in r) {
    Object.defineProperty(t, n, {
      enumerable: true,
      get: r[n]
    });
  }
  let a = "__next_instant_validation_boundary__";
  let i = "__next_instant_slot_";
  let o = "__";
}, 18114, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var r = {
    allRequiredBoundariesRendered: function () {
      return i;
    },
    createValidationBoundaryTracking: function () {
      return a;
    }
  };
  for (var n in r) {
    Object.defineProperty(t, n, {
      enumerable: true,
      get: r[n]
    });
  }
  function a() {
    return {
      requiredIds: new Map(),
      renderedIds: new Set()
    };
  }
  function i(A) {
    for (let e of A.requiredIds.keys()) {
      if (!A.renderedIds.has(e)) {
        return false;
      }
    }
    return true;
  }
}, 30531, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var r = {
    createLinkPrefetchPartialError: function () {
      return i;
    },
    createUnrenderedSegmentError: function () {
      return a;
    }
  };
  for (var n in r) {
    Object.defineProperty(t, n, {
      enumerable: true,
      get: r[n]
    });
  }
  function a(A, e) {
    let t = `Route "${A}": Could not validate that a segment in your UI has instant navigation.`;
    if (e.length > 0) {
      let A = e.length === 1 ? "Dropped segment" : "Dropped segments";
      t += `

This segment was dropped from rendering. Issues that would prevent instant navigation will go undetected.

${A}:
${e.map(A => `  ${A}`).join("\n")}

Ways to fix this:
  - [render] Render the dropped segment
  - [ignore] Set \`export const instant = false\` to opt the dropped segment out of instant-navigation validation

Learn more: https://nextjs.org/docs/messages/instant-unrendered-segment`;
    }
    return Object.defineProperty(Error(t), "__NEXT_ERROR_CODE", {
      value: "E1286",
      enumerable: false,
      configurable: true
    });
  }
  function i(A) {
    return Object.defineProperty(Error(`Next.js encountered dynamic data during prefetching for "${A}".

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
}, 78466, (A, e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var r;
  var n;
  var a;
  var i = {
    DynamicHoleKind: function () {
      return Aa;
    },
    Postpone: function () {
      return I;
    },
    PreludeState: function () {
      return Ad;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function () {
      return N;
    },
    abortOnSynchronousPlatformIOAccess: function () {
      return C;
    },
    accessedDynamicData: function () {
      return H;
    },
    annotateDynamicAccess: function () {
      return W;
    },
    consumeDynamicAccess: function () {
      return V;
    },
    createDynamicTrackingState: function () {
      return y;
    },
    createDynamicValidationState: function () {
      return E;
    },
    createHangingInputAbortSignal: function () {
      return F;
    },
    createInstantValidationState: function () {
      return Ai;
    },
    createRenderInBrowserAbortSignal: function () {
      return q;
    },
    formatDynamicAPIAccesses: function () {
      return X;
    },
    getFirstDynamicReason: function () {
      return R;
    },
    getNavigationDisallowedDynamicReasons: function () {
      return Aw;
    },
    getStaticShellDisallowedDynamicReasons: function () {
      return Af;
    },
    isDynamicPostpone: function () {
      return k;
    },
    isPrerenderInterruptedError: function () {
      return U;
    },
    logDisallowedDynamicError: function () {
      return Ap;
    },
    markCurrentScopeAsDynamic: function () {
      return S;
    },
    postponeWithTracking: function () {
      return j;
    },
    throwIfDisallowedDynamic: function () {
      return Ag;
    },
    throwIfSyncIOUsed: function () {
      return Ah;
    },
    throwToInterruptStaticGeneration: function () {
      return O;
    },
    trackAllowedDynamicAccess: function () {
      return An;
    },
    trackDynamicDataInDynamicRender: function () {
      return x;
    },
    trackDynamicHoleInNavigation: function () {
      return Ao;
    },
    trackDynamicHoleInRuntimeShell: function () {
      return Ac;
    },
    trackDynamicHoleInStaticShell: function () {
      return Al;
    },
    trackThrownErrorInNavigation: function () {
      return As;
    },
    useDynamicRouteParams: function () {
      return Y;
    },
    useDynamicSearchParams: function () {
      return z;
    }
  };
  for (var o in i) {
    Object.defineProperty(t, o, {
      enumerable: true,
      get: i[o]
    });
  }
  let s = (r = A.r(20103)) && r.__esModule ? r : {
    default: r
  };
  let c = A.r(90705);
  let l = A.r(4824);
  let u = A.r(32319);
  let d = A.r(56704);
  let p = A.r(49137);
  let h = A.r(96385);
  let g = A.r(68832);
  let f = A.r(8404);
  let w = A.r(24257);
  let m = A.r(28338);
  let b = A.r(30069);
  let P = A.r(18114);
  let v = A.r(30531);
  let D = typeof s.default.unstable_postpone == "function";
  function y(A) {
    return {
      isDebugDynamicAccesses: A,
      dynamicAccesses: [],
      syncDynamicErrorWithStack: null,
      syncDynamicErrorWithStackPostMicrotask: false
    };
  }
  function E() {
    return {
      hasSuspenseAboveBody: false,
      hasDynamicMetadata: false,
      dynamicMetadata: null,
      hasDynamicViewport: false,
      hasAllowedDynamic: false,
      dynamicErrors: []
    };
  }
  function _(A) {
    if (A.syncDynamicErrorWithStackPostMicrotask) {
      return null;
    } else {
      return A.syncDynamicErrorWithStack;
    }
  }
  function R(A) {
    var e;
    if ((e = A.dynamicAccesses[0]) == null) {
      return undefined;
    } else {
      return e.expression;
    }
  }
  function S(A, e, t) {
    if (e) {
      switch (e.type) {
        case "cache":
        case "unstable-cache":
        case "private-cache":
          return;
      }
    }
    if (!A.forceDynamic && !A.forceStatic) {
      if (A.dynamicShouldError) {
        throw Object.defineProperty(new l.StaticGenBailoutError(`Route ${A.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${t}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
          value: "E553",
          enumerable: false,
          configurable: true
        });
      }
      if (e) {
        switch (e.type) {
          case "prerender-ppr":
            return j(A.route, t, e.dynamicTracking);
          case "prerender-legacy":
            e.revalidate = 0;
            let r = Object.defineProperty(new c.DynamicServerError(`Route ${A.route} couldn't be rendered statically because it used ${t}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
              value: "E550",
              enumerable: false,
              configurable: true
            });
            A.dynamicUsageDescription = t;
            A.dynamicUsageStack = r.stack;
            throw r;
        }
      }
    }
  }
  function O(A, e, t) {
    let r = Object.defineProperty(new c.DynamicServerError(`Route ${e.route} couldn't be rendered statically because it used \`${A}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
      value: "E558",
      enumerable: false,
      configurable: true
    });
    t.revalidate = 0;
    e.dynamicUsageDescription = A;
    e.dynamicUsageStack = r.stack;
    throw r;
  }
  function x(A) {
    switch (A.type) {
      case "cache":
      case "unstable-cache":
      case "private-cache":
        return;
    }
  }
  function T(A, e, t) {
    let r = G(`Route ${A} needs to bail out of prerendering at this point because it used ${e}.`);
    t.controller.abort(r);
    let n = t.dynamicTracking;
    if (n) {
      n.dynamicAccesses.push({
        stack: n.isDebugDynamicAccesses ? Error().stack : undefined,
        expression: e
      });
    }
  }
  function C(A, e, t, r) {
    let n = r.dynamicTracking;
    if (n && n.syncDynamicErrorWithStack === null) {
      n.syncDynamicErrorWithStack = t;
      queueMicrotask(() => {
        n.syncDynamicErrorWithStackPostMicrotask = true;
      });
    }
    T(A, e, r);
  }
  function N(A, e, t, r) {
    (0, p.trackRuntimeDataAccessed)(r);
    if (r.controller.signal.aborted === false) {
      T(A, e, r);
      let n = r.dynamicTracking;
      if (n && n.syncDynamicErrorWithStack === null) {
        n.syncDynamicErrorWithStack = t;
      }
    }
    throw G(`Route ${A} needs to bail out of prerendering at this point because it used ${e}.`);
  }
  function I({
    reason: A,
    route: e
  }) {
    let t = u.workUnitAsyncStorage.getStore();
    j(e, A, t && t.type === "prerender-ppr" ? t.dynamicTracking : null);
  }
  function j(A, e, t) {
    (function () {
      if (!D) {
        throw Object.defineProperty(Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
          value: "E224",
          enumerable: false,
          configurable: true
        });
      }
    })();
    if (t) {
      t.dynamicAccesses.push({
        stack: t.isDebugDynamicAccesses ? Error().stack : undefined,
        expression: e
      });
    }
    s.default.unstable_postpone(M(A, e));
  }
  function M(A, e) {
    return `Route ${A} needs to bail out of prerendering at this point because it used ${e}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
  }
  function k(A) {
    return typeof A == "object" && A !== null && typeof A.message == "string" && B(A.message);
  }
  function B(A) {
    return A.includes("needs to bail out of prerendering at this point because it used") && A.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
  }
  if (B(M("%%%", "^^^")) === false) {
    throw Object.defineProperty(Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
      value: "E296",
      enumerable: false,
      configurable: true
    });
  }
  let L = "NEXT_PRERENDER_INTERRUPTED";
  function G(A) {
    let e = Object.defineProperty(Error(A), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: false,
      configurable: true
    });
    e.digest = L;
    return e;
  }
  function U(A) {
    return typeof A == "object" && A !== null && A.digest === L && "name" in A && "message" in A && A instanceof Error;
  }
  function H(A) {
    return A.length > 0;
  }
  function V(A, e) {
    A.dynamicAccesses.push(...e.dynamicAccesses);
    return A.dynamicAccesses;
  }
  function X(A) {
    return A.filter(A => typeof A.stack == "string" && A.stack.length > 0).map(({
      expression: A,
      stack: e
    }) => {
      e = e.split("\n").slice(4).filter(A => !A.includes("node_modules/next/") && !A.includes(" (<anonymous>)") && !A.includes(" (node:")).join("\n");
      return `Dynamic API Usage Debug - ${A}:
${e}`;
    });
  }
  function q() {
    let A = new AbortController();
    A.abort(Object.defineProperty(new f.BailoutToCSRError("Render in Browser"), "__NEXT_ERROR_CODE", {
      value: "E721",
      enumerable: false,
      configurable: true
    }));
    return A.signal;
  }
  function F(A) {
    switch (A.type) {
      case "prerender":
      case "prerender-runtime":
        let e = new AbortController();
        if (A.cacheSignal) {
          A.cacheSignal.inputReady().then(() => {
            e.abort();
          });
        } else {
          let t = (0, u.getStagedRenderingController)(A);
          if (t && t.finalStage !== null) {
            t.waitForStage(t.finalStage).then(() => (0, g.scheduleOnNextTick)(() => e.abort()), Q);
          } else {
            (0, g.scheduleOnNextTick)(() => e.abort());
          }
        }
        return e.signal;
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
  function Q() {}
  function W(A, e) {
    let t = e.dynamicTracking;
    if (t) {
      t.dynamicAccesses.push({
        stack: t.isDebugDynamicAccesses ? Error().stack : undefined,
        expression: A
      });
    }
  }
  function Y(A) {
    let e = d.workAsyncStorage.getStore();
    let t = u.workUnitAsyncStorage.getStore();
    if (e && t) {
      switch (t.type) {
        case "prerender-client":
          {
            let r = t.fallbackRouteParams;
            if (r && r.size > 0) {
              s.default.use((0, p.makeClientHookHangingPromise)(t.renderSignal, new p.ClientHookDynamicError(e.route, A)));
            }
            break;
          }
        case "prerender":
          throw Object.defineProperty(new m.InvariantError(`\`${A}\` was called from a Server Component. Next.js should be preventing ${A} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E795",
            enumerable: false,
            configurable: true
          });
        case "prerender-ppr":
          {
            let r = t.fallbackRouteParams;
            if (r && r.size > 0) {
              return j(e.route, A, t.dynamicTracking);
            }
            break;
          }
        case "validation-client":
        case "prerender-legacy":
        case "request":
        case "unstable-cache":
          break;
        case "prerender-runtime":
          throw Object.defineProperty(new m.InvariantError(`\`${A}\` was called during a runtime prerender. Next.js should be preventing ${A} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E771",
            enumerable: false,
            configurable: true
          });
        case "cache":
        case "private-cache":
          throw Object.defineProperty(new m.InvariantError(`\`${A}\` was called inside a cache scope. Next.js should be preventing ${A} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E745",
            enumerable: false,
            configurable: true
          });
        case "generate-static-params":
          throw Object.defineProperty(new m.InvariantError(`\`${A}\` was called in \`generateStaticParams\`. Next.js should be preventing ${A} from being included in server component files statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E1130",
            enumerable: false,
            configurable: true
          });
      }
    }
  }
  function z(A) {
    let e = d.workAsyncStorage.getStore();
    let t = u.workUnitAsyncStorage.getStore();
    if (e) {
      if (!t) {
        (0, u.throwForMissingRequestStore)(A);
      }
      switch (t.type) {
        case "validation-client":
        case "request":
          return;
        case "prerender-client":
          s.default.use((0, p.makeClientHookHangingPromise)(t.renderSignal, new p.ClientHookDynamicError(e.route, A)));
          break;
        case "prerender-legacy":
        case "prerender-ppr":
          if (e.forceStatic) {
            return;
          }
          throw Object.defineProperty(new f.BailoutToCSRError(A), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
          });
        case "prerender":
        case "prerender-runtime":
          throw Object.defineProperty(new m.InvariantError(`\`${A}\` was called from a Server Component. Next.js should be preventing ${A} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E795",
            enumerable: false,
            configurable: true
          });
        case "cache":
        case "unstable-cache":
        case "private-cache":
          throw Object.defineProperty(new m.InvariantError(`\`${A}\` was called inside a cache scope. Next.js should be preventing ${A} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E745",
            enumerable: false,
            configurable: true
          });
        case "generate-static-params":
          throw Object.defineProperty(new m.InvariantError(`\`${A}\` was called in \`generateStaticParams\`. Next.js should be preventing ${A} from being included in server component files statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E1130",
            enumerable: false,
            configurable: true
          });
      }
    }
  }
  let $ = /\n\s+at Suspense \(<anonymous>\)/;
  let K = RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${h.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`);
  let J = RegExp(`\\n\\s+at ${h.METADATA_BOUNDARY_NAME}[\\n\\s]`);
  let Z = RegExp(`\\n\\s+at ${h.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
  let AA = RegExp(`\\n\\s+at ${h.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
  let Ae = RegExp(`\\n\\s+at ${b.INSTANT_VALIDATION_BOUNDARY_NAME}[\\n\\s]`);
  let At = RegExp(`\\n\\s+at ${b.INSTANT_SLOT_MARKER_PREFIX}(\\d+)${b.INSTANT_SLOT_MARKER_SUFFIX}[\\n\\s]`);
  function Ar(A, e) {
    if (K.test(A)) {
      e.hasSuspenseAboveBody = true;
    }
  }
  function An(A, e, t, r, n) {
    let a = _(n);
    if (AA.test(t)) {
      Ar(t, r);
      return;
    }
    if (J.test(t)) {
      r.hasDynamicMetadata = true;
      return;
    }
    if (Z.test(t)) {
      r.hasDynamicViewport = true;
      return;
    }
    if (K.test(t)) {
      r.hasAllowedDynamic = true;
      r.hasSuspenseAboveBody = true;
      return;
    }
    if ($.test(t)) {
      r.hasAllowedDynamic = true;
      return;
    } else if (a) {
      r.dynamicErrors.push(a);
      return;
    }
    if ((0, p.isClientHookDynamicError)(A)) {
      r.dynamicErrors.push(Au(A, t, null));
      return;
    }
    let i = Au((0, w.createDynamicOrRuntimeBodyError)(e.route), t, null);
    r.dynamicErrors.push(i);
  }
  (n = {})[n.Link = 1] = "Link";
  n[n.Runtime = 2] = "Runtime";
  n[n.Dynamic = 3] = "Dynamic";
  var Aa = n;
  function Ai(A) {
    return {
      hasDynamicMetadata: false,
      hasAllowedClientDynamicAboveBoundary: false,
      dynamicMetadata: null,
      hasDynamicViewport: false,
      hasAllowedDynamic: false,
      dynamicErrors: [],
      validationPreventingErrors: [],
      thrownErrorsOutsideBoundary: [],
      slotStacks: A
    };
  }
  function Ao(A, e, t, r, n, a, i) {
    let o = _(n);
    if (AA.test(t)) {
      return;
    }
    let s = function (A, e) {
      let {
        slotStacks: t
      } = e;
      if (t.length > 1) {
        let e = At.exec(A);
        if (e) {
          let A = t[parseInt(e[1], 10) + 1];
          if (A != null) {
            return A;
          }
        }
      }
      return t[0] ?? null;
    }(t, r);
    if (J.test(t)) {
      r.dynamicMetadata = Au(a === 1 ? (0, w.createLinkMetadataError)(e.route) : a === 2 ? (0, w.createRuntimeMetadataError)(e.route) : (0, w.createDynamicMetadataError)(e.route), t, s);
      return;
    }
    if (Z.test(t)) {
      let A = Au(a === 1 ? (0, w.createLinkViewportError)(e.route) : a === 2 ? (0, w.createRuntimeViewportError)(e.route) : (0, w.createDynamicViewportError)(e.route), t, s);
      r.dynamicErrors.push(A);
      return;
    }
    let c = Ae.exec(t);
    if (c) {
      let A = $.exec(t);
      if (A && A.index < c.index) {
        r.hasAllowedDynamic = true;
        return;
      }
    } else if ((0, P.allRequiredBoundariesRendered)(i)) {
      r.hasAllowedClientDynamicAboveBoundary = true;
      r.hasAllowedDynamic = true;
      return;
    } else {
      let A = Au(Object.defineProperty(Error(`Route "${e.route}": Could not validate \`instant\` because a Client Component in a parent segment prevented the page from rendering.`), "__NEXT_ERROR_CODE", {
        value: "E1331",
        enumerable: false,
        configurable: true
      }), t, s);
      r.validationPreventingErrors.push(A);
      return;
    }
    if (o) {
      if (s !== null && o.cause === undefined) {
        o.cause = s();
      }
      r.dynamicErrors.push(o);
      return;
    }
    if ((0, p.isClientHookDynamicError)(A)) {
      r.dynamicErrors.push(Au(A, t, s));
      return;
    }
    let l = Au(a === 1 ? (0, w.createLinkBodyErrorInNavigation)(e.route) : a === 2 ? (0, w.createRuntimeBodyErrorInNavigation)(e.route) : (0, w.createDynamicBodyErrorInNavigation)(e.route), t, s);
    r.dynamicErrors.push(l);
  }
  function As(A, e, t, r) {
    let n = Ae.exec(r);
    if (n) {
      let a = $.exec(r);
      if (a && a.index < n.index) {
        return;
      }
      let i = Au(Object.defineProperty(Error(`Route "${A.route}": Could not validate \`instant\` because an error prevented the target segment from rendering.`, {
        cause: t
      }), "__NEXT_ERROR_CODE", {
        value: "E1338",
        enumerable: false,
        configurable: true
      }), r, null);
      e.validationPreventingErrors.push(i);
    } else {
      let A = Au(Object.defineProperty(Error("An error occurred while attempting to validate instant UI. This error may be preventing the validation from completing.", {
        cause: t
      }), "__NEXT_ERROR_CODE", {
        value: "E1118",
        enumerable: false,
        configurable: true
      }), r, null);
      e.thrownErrorsOutsideBoundary.push(A);
    }
  }
  function Ac(A, e, t, r, n) {
    let a = _(n);
    if (AA.test(t)) {
      Ar(t, r);
      return;
    }
    if (J.test(t)) {
      r.dynamicMetadata = Au((0, w.createDynamicMetadataError)(e.route), t, null);
      return;
    }
    if (Z.test(t)) {
      let A = Au((0, w.createDynamicViewportError)(e.route), t, null);
      r.dynamicErrors.push(A);
      return;
    }
    if (K.test(t)) {
      r.hasAllowedDynamic = true;
      r.hasSuspenseAboveBody = true;
      return;
    }
    if ($.test(t)) {
      r.hasAllowedDynamic = true;
      return;
    } else if (a) {
      r.dynamicErrors.push(a);
      return;
    }
    if ((0, p.isClientHookDynamicError)(A)) {
      r.dynamicErrors.push(Au(A, t, null));
      return;
    }
    let i = Au((0, w.createDynamicBodyError)(e.route), t, null);
    r.dynamicErrors.push(i);
  }
  function Al(A, e, t, r, n) {
    let a = _(n);
    if (AA.test(t)) {
      Ar(t, r);
      return;
    }
    if (J.test(t)) {
      r.dynamicMetadata = Au((0, w.createRuntimeMetadataError)(e.route), t, null);
      return;
    }
    if (Z.test(t)) {
      let A = Au((0, w.createRuntimeViewportError)(e.route), t, null);
      r.dynamicErrors.push(A);
      return;
    }
    if (K.test(t)) {
      r.hasAllowedDynamic = true;
      r.hasSuspenseAboveBody = true;
      return;
    }
    if ($.test(t)) {
      r.hasAllowedDynamic = true;
      return;
    } else if (a) {
      r.dynamicErrors.push(a);
      return;
    }
    if ((0, p.isClientHookDynamicError)(A)) {
      r.dynamicErrors.push(Au(A, t, null));
      return;
    }
    let i = Au((0, w.createRuntimeBodyError)(e.route), t, null);
    r.dynamicErrors.push(i);
  }
  function Au(A, e, t) {
    if (t !== null) {
      A.cause = t();
    }
    A.stack = A.name + ": " + A.message + e;
    return A;
  }
  (a = {})[a.Full = 0] = "Full";
  a[a.Empty = 1] = "Empty";
  a[a.Errored = 2] = "Errored";
  var Ad = a;
  function Ap(A, e) {
    console.error(e);
    (0, w.logBuildDebugHint)(A.route);
  }
  function Ah(A, e) {
    if (e.syncDynamicErrorWithStack) {
      Ap(A, e.syncDynamicErrorWithStack);
      throw new l.StaticGenBailoutError();
    }
  }
  function Ag(A, e, t, r, n) {
    Ah(A, r);
    if (e === 0 && t.hasAllowedDynamic === false && t.hasDynamicMetadata) {
      console.error((0, w.createDynamicOrRuntimeMetadataError)(A.route).message);
      throw new l.StaticGenBailoutError();
    }
    if (!n && !t.hasSuspenseAboveBody && e !== 0) {
      let r = t.dynamicErrors;
      if (r.length > 0) {
        for (let e = 0; e < r.length; e++) {
          Ap(A, r[e]);
        }
        throw new l.StaticGenBailoutError();
      }
      if (t.hasDynamicViewport) {
        console.error((0, w.createDynamicOrRuntimeViewportError)(A.route).message);
        throw new l.StaticGenBailoutError();
      }
      if (e === 1) {
        console.error(`Route "${A.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
        throw new l.StaticGenBailoutError();
      }
    }
  }
  function Af(A, e, t, r) {
    if (e === 0 && t.hasAllowedDynamic === false && t.dynamicErrors.length === 0 && t.dynamicMetadata) {
      return [t.dynamicMetadata];
    }
    if (r || t.hasSuspenseAboveBody) {
      return [];
    }
    if (e !== 0) {
      let r = t.dynamicErrors;
      if (r.length > 0) {
        return r;
      }
      if (e === 1) {
        return [Object.defineProperty(new m.InvariantError(`Route "${A.route}" did not produce a static shell and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
          value: "E936",
          enumerable: false,
          configurable: true
        })];
      }
    }
    return [];
  }
  function Aw(A, e, t, r, n, a) {
    if (r) {
      let {
        missingSampleErrors: A
      } = r;
      if (A.length > 0) {
        return A;
      }
    }
    let {
      validationPreventingErrors: i
    } = t;
    if (i.length > 0) {
      return i;
    }
    if (e !== 0) {
      let r = t.dynamicErrors;
      if (r.length > 0) {
        return r;
      }
      if (e === 1 && !t.hasAllowedClientDynamicAboveBoundary && (0, P.allRequiredBoundariesRendered)(n)) {
        return Object.defineProperty(new m.InvariantError(`Route "${A.route}" failed to render during instant validation and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
          value: "E1055",
          enumerable: false,
          configurable: true
        });
      }
    } else {
      let A = t.dynamicErrors;
      if (A.length > 0) {
        return A;
      }
      if (t.hasAllowedDynamic === false && t.dynamicMetadata) {
        return [t.dynamicMetadata];
      }
    }
    if (!(0, P.allRequiredBoundariesRendered)(n)) {
      let {
        thrownErrorsOutsideBoundary: e
      } = t;
      let r = t.slotStacks[0];
      if (e.length === 0) {
        let e = [];
        for (let [A, t] of n.requiredIds) {
          if (!n.renderedIds.has(A)) {
            for (let A of t) {
              let t = A.replace(/^\[project\][\\/]?/, "").replace(process.cwd() + "/", "").replace(process.cwd() + "\\", "");
              e.push(t);
            }
          }
        }
        e.sort();
        return (0, v.createUnrenderedSegmentError)(A.route, e);
      }
      if (e.length === 1) {
        let t = `Route "${A.route}": Could not validate \`instant\` because the target segment was prevented from rendering, likely due to the following error.`;
        let n = r !== null ? r() : Error();
        n.name = "Error";
        n.message = t;
        return AggregateError([n, e[0]]);
      }
      {
        let t = `Route "${A.route}": Could not validate \`instant\` because the target segment was prevented from rendering, likely due to one of the following errors.`;
        let n = r !== null ? r() : Error();
        n.name = "Error";
        n.message = t;
        return AggregateError([n, ...e]);
      }
    }
    return [];
  }
}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0d6l-5n._.js.map
