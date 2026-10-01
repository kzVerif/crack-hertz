(globalThis.TURBOPACK ||= []).push([typeof document == "object" ? document.currentScript : undefined, {
  otherChunks: ["static/chunks/1n_a9teaili2u.js", "static/chunks/0icrr_flwqqst.js", "static/chunks/4508pxjldfj9x.js", "static/chunks/2vry6y6pod96w.js"],
  runtimeModuleIds: [27845]
}]);
(() => {
  let e;
  if (!Array.isArray(globalThis.TURBOPACK)) {
    return;
  }
  var t;
  var r = function () {
    if (self.TURBOPACK_ASSET_SUFFIX != null) {
      return self.TURBOPACK_ASSET_SUFFIX;
    }
    let e = document?.currentScript?.getAttribute?.("src") ?? "";
    let t = e.indexOf("?");
    if (t >= 0) {
      return e.slice(t);
    } else {
      return "";
    }
  }();
  (t = n || {})[t.Runtime = 0] = "Runtime";
  t[t.Parent = 1] = "Parent";
  t[t.Update = 2] = "Update";
  var n = t;
  let o = new WeakMap();
  function l(e, t) {
    this.m = e;
    this.e = t;
  }
  let i = l.prototype;
  let u = Object.prototype.hasOwnProperty;
  let s = typeof Symbol !== "undefined" && Symbol.toStringTag;
  function c(e, t, r) {
    if (!u.call(e, t)) {
      Object.defineProperty(e, t, r);
    }
  }
  function a(e, t) {
    let r = e[t];
    if (!r) {
      r = f(t);
      e[t] = r;
    }
    return r;
  }
  function f(e) {
    return {
      exports: {},
      error: undefined,
      id: e,
      namespaceObject: undefined
    };
  }
  function p(e, t, r) {
    c(e, "__esModule", {
      value: true
    });
    if (s) {
      c(e, s, {
        value: "Module"
      });
    }
    let n = 0;
    while (n < t.length) {
      let r = t[n++];
      let o = t[n++];
      if (typeof o == "number") {
        if (o === 0) {
          c(e, r, {
            value: t[n++],
            enumerable: true,
            writable: false
          });
        } else {
          throw Error(`unexpected tag: ${o}`);
        }
      } else if (typeof t[n] == "function") {
        c(e, r, {
          get: o,
          set: t[n++],
          enumerable: true
        });
      } else {
        c(e, r, {
          get: o,
          enumerable: true
        });
      }
    }
    if (!r) {
      Object.seal(e);
    }
  }
  function d(e, t) {
    (t != null ? a(this.c, t) : this.m).exports = e;
  }
  i.s = function (e, t, r) {
    let n;
    let o;
    if (t != null) {
      o = (n = a(this.c, t)).exports;
    } else {
      n = this.m;
      o = this.e;
    }
    n.namespaceObject = o;
    p(o, e, r);
  };
  i.j = function (e, t) {
    let r;
    let n;
    if (t != null) {
      n = (r = a(this.c, t)).exports;
    } else {
      r = this.m;
      n = this.e;
    }
    let l = function (e, t) {
      let r = o.get(e);
      if (!r) {
        o.set(e, r = []);
        let n = e => {
          if (e !== "default") {
            for (let t of r) {
              if (u.call(t, e)) {
                return t;
              }
            }
          }
        };
        e.exports = e.namespaceObject = new Proxy(t, {
          get(e, t) {
            if (u.call(e, t) || t === "default" || t === "__esModule") {
              return Reflect.get(e, t);
            }
            let r = n(t);
            return r && Reflect.get(r, t);
          },
          set: () => false,
          defineProperty: () => false,
          deleteProperty: () => false,
          has: (e, t) => !!Reflect.has(e, t) || t !== "default" && t !== "__esModule" && n(t) !== undefined,
          ownKeys(e) {
            let t = Reflect.ownKeys(e);
            for (let e of r) {
              for (let r of Reflect.ownKeys(e)) {
                if (r !== "default" && !t.includes(r)) {
                  t.push(r);
                }
              }
            }
            return t;
          },
          getOwnPropertyDescriptor(e, t) {
            let r = Reflect.getOwnPropertyDescriptor(e, t);
            if (r || t === "default" || t === "__esModule") {
              return r;
            }
            let o = n(t);
            if (o) {
              return {
                enumerable: true,
                configurable: true,
                get: () => Reflect.get(o, t)
              };
            }
          }
        });
      }
      return r;
    }(r, n);
    if (typeof e == "object" && e !== null) {
      l.push(e);
    }
  };
  i.v = d;
  i.n = function (e, t) {
    let r;
    (r = t != null ? a(this.c, t) : this.m).exports = r.namespaceObject = e;
  };
  let h = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
  let m = [null, h({}), h([]), h(h)];
  function y(e, t, r) {
    let n = [];
    let o = -1;
    for (let t = e; (typeof t == "object" || typeof t == "function") && !m.includes(t); t = h(t)) {
      for (let r of Object.getOwnPropertyNames(t)) {
        n.push(r, function (e, t) {
          return () => e[t];
        }(e, r));
        if (o === -1 && r === "default") {
          o = n.length - 1;
        }
      }
    }
    if (!r || !(o >= 0)) {
      if (o >= 0) {
        n.splice(o, 1, 0, e);
      } else {
        n.push("default", 0, e);
      }
    }
    p(t, n);
    return t;
  }
  function g(e) {
    let t = K(e, this.m);
    if (t.namespaceObject) {
      return t.namespaceObject;
    }
    let r = t.exports;
    return t.namespaceObject = y(r, typeof r == "function" ? function (...e) {
      return r.apply(this, e);
    } : Object.create(null), r && r.__esModule);
  }
  function b(e) {
    let t = e.indexOf("#");
    if (t !== -1) {
      e = e.substring(0, t);
    }
    let r = e.indexOf("?");
    if (r !== -1) {
      e = e.substring(0, r);
    }
    return e;
  }
  i.i = g;
  i.A = function (e) {
    return this.r(e)(g.bind(this));
  };
  i.t = typeof require == "function" ? require : function () {
    throw Error("Unexpected use of runtime require");
  };
  i.r = function (e) {
    return K(e, this.m).exports;
  };
  i.f = function (e) {
    function t(t) {
      t = b(t);
      if (u.call(e, t)) {
        return e[t].module();
      }
      let r = Error(`Cannot find module '${t}'`);
      r.code = "MODULE_NOT_FOUND";
      throw r;
    }
    t.keys = () => Object.keys(e);
    t.resolve = t => {
      t = b(t);
      if (u.call(e, t)) {
        return e[t].id();
      }
      let r = Error(`Cannot find module '${t}'`);
      r.code = "MODULE_NOT_FOUND";
      throw r;
    };
    t.import = async e => await t(e);
    return t;
  };
  let O = function (e) {
    let t = new URL(e, "x:/");
    let r = {};
    for (let e in t) {
      r[e] = t[e];
    }
    r.href = e;
    r.pathname = e.replace(/[?#].*/, "");
    r.origin = r.protocol = "";
    r.toString = r.toJSON = (...t) => e;
    for (let t in r) {
      Object.defineProperty(this, t, {
        enumerable: true,
        configurable: true,
        value: r[t]
      });
    }
  };
  function w(e, t) {
    throw Error(`Invariant: ${t(e)}`);
  }
  O.prototype = URL.prototype;
  i.U = O;
  i.z = function (e) {
    throw Error("dynamic usage of require is not supported");
  };
  i.g = globalThis;
  let R = l.prototype;
  let k = typeof TURBOPACK_CHUNK_BASE_PATH == "string" ? TURBOPACK_CHUNK_BASE_PATH : "/_next/";
  let U = new Map();
  i.M = U;
  let _ = new Map();
  let v = new Map();
  let P = new Map();
  async function j(e, t, r) {
    let n;
    if (typeof r == "string") {
      return function (e, t, r) {
        return A(e, t, r);
      }(e, t, E(r));
    }
    let o = r.included || [];
    let l = o.map(e => !!U.has(e) || _.get(e));
    if (l.length > 0 && l.every(e => e)) {
      await Promise.all(l);
      return;
    }
    n = A(e, t, E(r.path));
    for (let l of o) {
      if (!_.has(l)) {
        _.set(l, n);
      }
    }
    await n;
  }
  R.l = function (e) {
    return j(n.Parent, this.m.id, e);
  };
  let C = Promise.resolve(undefined);
  let $ = new WeakMap();
  function A(t, r, o) {
    let l = e.loadChunkCached(t, o);
    let i = $.get(l);
    if (i === undefined) {
      let e = $.set.bind($, l, C);
      i = l.then(e).catch(e => {
        let l;
        switch (t) {
          case n.Runtime:
            l = `as a runtime dependency of chunk ${r}`;
            break;
          case n.Parent:
            l = `from module ${r}`;
            break;
          case n.Update:
            l = "from an HMR update";
            break;
          default:
            w(t, e => `Unknown source type: ${e}`);
        }
        let i = Error(`Failed to load chunk ${o} ${l}${e ? `: ${e}` : ""}`, e ? {
          cause: e
        } : undefined);
        i.name = "ChunkLoadError";
        throw i;
      });
      $.set(l, i);
    }
    return i;
  }
  R.L = function (e) {
    var t;
    var r;
    t = n.Parent;
    r = this.m.id;
    return A(t, r, e);
  };
  R.R = function (e) {
    let t = this.r(e);
    return t?.default ?? t;
  };
  R.P = function (e) {
    return `/ROOT/${e ?? ""}`;
  };
  R.F = function (e) {
    if (e) {
      return `file:///ROOT/${e.split("/").map(encodeURIComponent).join("/")}`;
    } else {
      return "file:///ROOT/";
    }
  };
  R.q = function (e, t) {
    d.call(this, `${e}${r}`, t);
  };
  let T = /[^A-Za-z0-9\-_.!~*'()/]/;
  function E(e, t = k) {
    let n = T.test(e) ? e.split("/").map(encodeURIComponent).join("/") : e;
    return `${t}${n}${r}`;
  }
  function S(e, t) {
    let r;
    let n = e.indexOf("?");
    if (n !== -1) {
      r = n;
    } else {
      let t = e.indexOf("#");
      r = t !== -1 ? t : e.length;
    }
    return r >= t.length && e.startsWith(t, r - t.length);
  }
  R.b = k;
  R.X = r;
  R.h = E;
  function x(e) {
    return S(e, ".css");
  }
  let M = {};
  i.c = M;
  let K = (e, t) => {
    let r = M[e];
    if (r) {
      if (r.error) {
        throw r.error;
      }
      return r;
    }
    return N(e, n.Parent, t.id);
  };
  function N(e, t, r) {
    let n = U.get(e);
    if (typeof n != "function") {
      throw Error(function (e, t, r) {
        let n;
        switch (t) {
          case 0:
            n = `as a runtime entry of chunk ${r}`;
            break;
          case 1:
            n = `because it was required from module ${r}`;
            break;
          case 2:
            n = "because of an HMR update";
            break;
          default:
            w(t, e => `Unknown source type: ${e}`);
        }
        return `Module ${e} was instantiated ${n}, but the module factory is not available.`;
      }(e, t, r));
    }
    let o = f(e);
    let i = o.exports;
    M[e] = o;
    let u = new l(o, i);
    try {
      n(u, o, i);
    } catch (e) {
      o.error = e;
      throw e;
    }
    if (o.namespaceObject && o.exports !== o.namespaceObject) {
      y(o.exports, o.namespaceObject);
    }
    return o;
  }
  function B(t) {
    let r;
    if (!Array.isArray(t)) {
      return e.registerChunk(undefined, t);
    }
    let n = function (e) {
      if (typeof e == "string") {
        return e;
      }
      if (e) {
        return {
          src: e.getAttribute("src")
        };
      }
      if (typeof TURBOPACK_NEXT_CHUNK_URLS !== "undefined") {
        return {
          src: TURBOPACK_NEXT_CHUNK_URLS.pop()
        };
      }
      throw Error("chunk path empty but not in a worker");
    }(t[0]);
    if (t.length === 2) {
      r = t[1];
    } else {
      r = undefined;
      (function (e, t) {
        let r = 1;
        while (r < e.length) {
          let n;
          let o = r + 1;
          while (o < e.length && typeof e[o] != "function") {
            o++;
          }
          if (o === e.length) {
            throw Error("malformed chunk format, expected a factory function");
          }
          let l = e[o];
          for (let l = r; l < o; l++) {
            let r = e[l];
            let o = t.get(r);
            if (o) {
              n = o;
              break;
            }
          }
          let i = n ?? l;
          let u = false;
          for (let n = r; n < o; n++) {
            let r = e[n];
            if (!t.has(r)) {
              if (!u) {
                if (i === l) {
                  Object.defineProperty(l, "name", {
                    value: "module evaluation"
                  });
                }
                u = true;
              }
              t.set(r, i);
            }
          }
          r = o + 1;
        }
      })(t, U);
    }
    return e.registerChunk(n, r);
  }
  let L = new Map();
  function q(e) {
    let t = L.get(e);
    if (!t) {
      let r;
      let n;
      t = {
        resolved: false,
        loadingStarted: false,
        retryAttempts: 0,
        promise: new Promise((e, t) => {
          r = e;
          n = t;
        }),
        resolve: () => {
          t.resolved = true;
          r();
        },
        reject: n
      };
      L.set(e, t);
    }
    return t;
  }
  function I(e, t, r, n, o) {
    if (n != null && (!(n instanceof DOMException) || n.name !== "NetworkError") || r.retryAttempts >= 1 || L.get(t) !== r) {
      if (L.get(t) === r) {
        L.delete(t);
      }
      r.reject(n);
    } else {
      r.retryAttempts++;
      setTimeout(() => {
        if (!r.resolved && L.get(t) === r) {
          if (o) {
            o();
          } else {
            r.loadingStarted = false;
            H(e, t);
          }
        }
      }, 200 + Math.floor(Math.random() * 401));
    }
  }
  function H(e, t) {
    let r = q(t);
    if (r.loadingStarted) {
      return r.promise;
    }
    if (e === n.Runtime) {
      r.loadingStarted = true;
      if (x(t)) {
        r.resolve();
      }
      return r.promise;
    }
    if (typeof importScripts == "function") {
      if (x(t)) ;else if (S(t, ".js")) {
        self.TURBOPACK_NEXT_CHUNK_URLS.push(t);
        try {
          importScripts(t);
        } catch (n) {
          I(e, t, r, n);
        }
      } else {
        throw Error(`can't infer type of chunk from URL ${t} in worker`);
      }
    } else {
      let n = decodeURI(t);
      if (x(t)) {
        if (document.querySelectorAll(`link[rel=stylesheet][href="${t}"],link[rel=stylesheet][href^="${t}?"],link[rel=stylesheet][href="${n}"],link[rel=stylesheet][href^="${n}?"]`).length > 0) {
          r.resolve();
        } else {
          let n = () => {
            let o = document.createElement("link");
            o.rel = "stylesheet";
            o.crossOrigin = null;
            o.href = t;
            o.onerror = () => {
              let l = document.createComment("");
              o.replaceWith(l);
              I(e, t, r, undefined, () => l.replaceWith(n()));
            };
            o.onload = () => {
              r.resolve();
            };
            return o;
          };
          document.head.appendChild(n());
        }
      } else if (S(t, ".js")) {
        let o = document.querySelectorAll(`script[src="${t}"],script[src^="${t}?"],script[src="${n}"],script[src^="${n}?"]`);
        if (o.length > 0) {
          for (let n of Array.from(o)) {
            n.addEventListener("error", () => {
              n.remove();
              I(e, t, r);
            }, {
              once: true
            });
          }
        } else {
          let n = document.createElement("script");
          n.crossOrigin = null;
          n.src = t;
          n.onerror = () => {
            n.remove();
            I(e, t, r);
          };
          document.head.appendChild(n);
        }
      } else {
        throw Error(`can't infer type of chunk from URL ${t}`);
      }
    }
    r.loadingStarted = true;
    return r.promise;
  }
  e = {
    async registerChunk(e, t) {
      let r;
      if (e != null) {
        r = function (e) {
          if (typeof e == "string") {
            return e;
          }
          let t = decodeURIComponent(e.src.replace(/[?#].*$/, ""));
          if (t.startsWith(k)) {
            return t.slice(k.length);
          } else {
            return t;
          }
        }(e);
        q(typeof e == "string" ? E(e) : e.src).resolve();
      }
      if (t != null) {
        for (let e of t.otherChunks) {
          q(E(typeof e == "string" ? e : e.path));
        }
        await Promise.all(t.otherChunks.map(e => {
          var t;
          t = r;
          return j(n.Runtime, t, e);
        }));
        if (t.runtimeModuleIds.length > 0) {
          for (let e of t.runtimeModuleIds) {
            (function (e, t) {
              let r = M[t];
              if (r) {
                if (r.error) {
                  throw r.error;
                }
                return;
              }
              N(t, n.Runtime, e);
            })(r, e);
          }
        }
      }
    },
    loadChunkCached: (e, t) => H(e, t)
  };
  var F = globalThis.TURBOPACK;
  globalThis.TURBOPACK = {
    push: B
  };
  F.forEach(B);
})();
