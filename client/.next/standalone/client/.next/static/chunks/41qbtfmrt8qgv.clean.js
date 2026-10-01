(globalThis.TURBOPACK ||= []).push([typeof document == "object" ? document.currentScript : undefined, 47412, e => {
  "use strict";

  var t = e.i(66497);
  var r = e.i(10977);
  var n = r;
  var i = e.i(79519);
  var a = e.i(53108);
  var o = e.i(64237);
  var l = e.i(43287);
  var u = e.i(58657);
  var c = e.i(130);
  function s() {
    return (s = Object.assign.bind()).apply(null, arguments);
  }
  var f = e => {
    var t = e.cx;
    var n = e.cy;
    var a = e.r;
    var o = e.className;
    var f = (0, i.clsx)("recharts-dot", o);
    if ((0, c.isNumber)(t) && (0, c.isNumber)(n) && (0, c.isNumber)(a)) {
      return r.createElement("circle", s({}, (0, u.svgPropertiesNoEvents)(e), (0, l.adaptEventHandlers)(e), {
        className: f,
        cx: t,
        cy: n,
        r: a
      }));
    } else {
      return null;
    }
  };
  var d = e.i(34440);
  var p = e.i(41364);
  var h = e.i(35304);
  var y = e.i(30671);
  var v = ["points"];
  function m(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function g(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        m(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        m(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function b() {
    return (b = Object.assign.bind()).apply(null, arguments);
  }
  function x(e) {
    var t = e.option;
    var n = e.dotProps;
    var a = e.className;
    if ((0, r.isValidElement)(t)) {
      return (0, r.cloneElement)(t, n);
    }
    if (typeof t == "function") {
      return t(n);
    }
    var o = (0, i.clsx)(a, typeof t != "boolean" ? t.className : "");
    var l = n ?? {};
    l.points;
    var u = function (e, t) {
      if (e == null) {
        return {};
      }
      var r;
      var n;
      var i = function (e, t) {
        if (e == null) {
          return {};
        }
        var r = {};
        for (var n in e) {
          if ({}.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) !== -1) {
              continue;
            }
            r[n] = e[n];
          }
        }
        return r;
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) {
          r = a[n];
          if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
            i[r] = e[r];
          }
        }
      }
      return i;
    }(l, v);
    return r.createElement(f, b({}, u, {
      className: o
    }));
  }
  function w(e) {
    var t = e.points;
    var n = e.dot;
    var i = e.className;
    var o = e.dotClassName;
    var l = e.dataKey;
    var u = e.baseProps;
    var c = e.needClip;
    var s = e.clipPathId;
    var f = e.zIndex;
    var v = f === undefined ? y.DefaultZIndexes.scatter : f;
    if (t == null || !n && t.length !== 1) {
      return null;
    }
    var m = (0, d.isClipDot)(n);
    var w = (0, p.svgPropertiesAndEventsFromUnknown)(n);
    var O = t.map((e, i) => {
      var s = g(g(g({
        r: 3
      }, u), w), {}, {
        index: i,
        cx: e.x ?? undefined,
        cy: e.y ?? undefined,
        dataKey: l,
        value: e.value,
        payload: e.payload,
        points: t
      });
      return r.createElement(x, {
        key: `dot-${i}`,
        option: n,
        dotProps: s,
        className: o
      });
    });
    var A = {};
    if (c && s != null) {
      A.clipPath = `url(#clipPath-${m ? "" : "dots-"}${s})`;
    }
    return r.createElement(h.ZIndexLayer, {
      zIndex: v
    }, r.createElement(a.Layer, b({
      className: i
    }, A), O));
  }
  var O = e.i(78450);
  var A = e.i(19379);
  var S = e.i(53926);
  var E = e.i(3260);
  function P(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function j(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        P(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        P(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  var k = e => {
    var t;
    var n = e.point;
    var i = e.childIndex;
    var o = e.mainColor;
    var c = e.activeDot;
    var s = e.dataKey;
    var d = e.clipPath;
    if (c === false || n.x == null || n.y == null) {
      return null;
    }
    var p = j(j(j({}, {
      index: i,
      dataKey: s,
      cx: n.x,
      cy: n.y,
      r: 4,
      fill: o ?? "none",
      strokeWidth: 2,
      stroke: "#fff",
      payload: n.payload,
      value: n.value
    }), (0, u.svgPropertiesNoEventsFromUnknown)(c)), (0, l.adaptEventHandlers)(c));
    t = (0, r.isValidElement)(c) ? (0, r.cloneElement)(c, p) : typeof c == "function" ? c(p) : r.createElement(f, p);
    return r.createElement(a.Layer, {
      className: "recharts-active-dot",
      clipPath: d
    }, t);
  };
  function I(e) {
    var t = e.points;
    var n = e.mainColor;
    var i = e.activeDot;
    var a = e.itemDataKey;
    var o = e.clipPath;
    var l = e.zIndex;
    var u = l === undefined ? y.DefaultZIndexes.activeDot : l;
    var s = (0, A.useAppSelector)(S.selectActiveTooltipIndex);
    var f = (0, E.useActiveTooltipDataPoints)();
    if (t == null || f == null) {
      return null;
    }
    var d = t.find(e => f.includes(e.payload));
    if ((0, c.isNullish)(d)) {
      return null;
    } else {
      return r.createElement(h.ZIndexLayer, {
        zIndex: u
      }, r.createElement(k, {
        point: d,
        childIndex: Number(s),
        mainColor: n,
        dataKey: a,
        activeDot: i,
        clipPath: o
      }));
    }
  }
  var C = e.i(60909);
  var T = e.i(6588);
  function M(e, t) {
    var i = (0, A.useAppSelector)(t => (0, T.selectXAxisSettings)(t, e));
    var a = (0, A.useAppSelector)(e => (0, T.selectYAxisSettings)(e, t));
    var o = (i == null ? undefined : i.allowDataOverflow) ?? T.implicitXAxis.allowDataOverflow;
    var l = (a == null ? undefined : a.allowDataOverflow) ?? T.implicitYAxis.allowDataOverflow;
    return {
      needClip: o || l,
      needClipX: o,
      needClipY: l
    };
  }
  function _(e) {
    var t = e.xAxisId;
    var n = e.yAxisId;
    var i = e.clipPathId;
    var a = (0, E.usePlotArea)();
    var o = M(t, n);
    var l = o.needClipX;
    var u = o.needClipY;
    var c = o.needClip;
    var s = (0, A.useAppSelector)(e => (0, T.selectXAxisRange)(e, t, false));
    var f = (0, A.useAppSelector)(e => (0, T.selectYAxisRange)(e, n, false));
    if (!c || !a) {
      return null;
    }
    var d = a.x;
    var p = a.y;
    var h = a.width;
    var y = a.height;
    var v = l && s ? Math.min(s[0], s[1]) : d - h / 2;
    var m = u && f ? Math.min(f[0], f[1]) : p - y / 2;
    var g = l && s ? Math.abs(s[1] - s[0]) : h * 2;
    var b = u && f ? Math.abs(f[1] - f[0]) : y * 2;
    return r.createElement("clipPath", {
      id: `clipPath-${i}`
    }, r.createElement("rect", {
      x: v,
      y: m,
      width: g,
      height: b
    }));
  }
  var D = e.i(79896);
  var N = e.i(64214);
  var L = e.i(80101);
  var R = e.i(71171);
  var z = e.i(43913);
  var B = e.i(25512);
  function F(e, t) {
    var n;
    return ((n = e.graphicalItems.cartesianItems.find(e => e.id === t)) == null ? undefined : n.xAxisId) ?? B.defaultAxisId;
  }
  function U(e, t) {
    var n;
    return ((n = e.graphicalItems.cartesianItems.find(e => e.id === t)) == null ? undefined : n.yAxisId) ?? B.defaultAxisId;
  }
  var $ = (e, t, r) => (0, T.selectAxisWithScale)(e, "xAxis", F(e, t), r);
  var K = (e, t, r) => (0, T.selectTicksOfGraphicalItem)(e, "xAxis", F(e, t), r);
  var W = (e, t, r) => (0, T.selectAxisWithScale)(e, "yAxis", U(e, t), r);
  var V = (e, t, r) => (0, T.selectTicksOfGraphicalItem)(e, "yAxis", U(e, t), r);
  var H = (0, D.createSelector)([N.selectChartLayout, $, W, K, V], (e, t, r, n, i) => (0, O.isCategoricalAxis)(e, "xAxis") ? (0, O.getBandSizeOfAxis)(t, n, false) : (0, O.getBandSizeOfAxis)(r, i, false));
  var G = (0, D.createSelector)([T.selectUnfilteredCartesianItems, (e, t) => t], (e, t) => e.filter(e => e.type === "area").find(e => e.id === t));
  var Y = e => {
    var t = (0, N.selectChartLayout)(e);
    if ((0, O.isCategoricalAxis)(t, "xAxis")) {
      return "yAxis";
    } else {
      return "xAxis";
    }
  };
  var q = (e, t, r) => (0, T.selectStackGroups)(e, Y(e), Y(e) === "yAxis" ? U(e, t) : F(e, t), r);
  var X = (0, D.createSelector)([G, q], (e, t) => {
    if (e != null && t != null) {
      var r;
      var n = e.stackId;
      var i = (0, R.getStackSeriesIdentifier)(e);
      if (n != null && i != null) {
        var a = (r = t[n]) == null ? undefined : r.stackedData;
        var o = a == null ? undefined : a.find(e => e.key === i);
        if (o != null) {
          return o.map(e => [e[0], e[1]]);
        }
      }
    }
  });
  var Z = (0, D.createSelector)([G, q], (e, t) => {
    if (e != null && e.stackId != null && t != null) {
      var r = t[e.stackId];
      if (r != null) {
        return r.graphicalItems.map(e => e.dataKey).filter(c.isNotNil);
      }
    }
  });
  var Q = (0, D.createSelector)([N.selectChartLayout, $, W, K, V, X, L.selectChartDataWithIndexesIfNotInPanoramaPosition3, H, G, z.selectChartBaseValue, Z], (e, t, r, n, i, a, o, l, u, s, f) => {
    var d;
    var p = o.chartData;
    var h = o.dataStartIndex;
    var y = o.dataEndIndex;
    if (u != null && (e === "horizontal" || e === "vertical") && t != null && r != null && n != null && i != null && n.length !== 0 && i.length !== 0 && l != null) {
      var v;
      var m;
      var g;
      var b;
      var x;
      var w;
      var A;
      var S;
      var E;
      var P;
      var j;
      var k;
      var I;
      var C;
      var T;
      var M;
      var _;
      var D;
      var N;
      var L;
      var R;
      var z;
      var B = u.data;
      if ((d = B && B.length > 0 ? B : p == null ? undefined : p.slice(h, y + 1)) != null) {
        b = (g = (v = {
          layout: e,
          xAxis: t,
          yAxis: r,
          xAxisTicks: n,
          yAxisTicks: i,
          dataStartIndex: h,
          areaSettings: u,
          stackedData: a,
          displayedData: d,
          chartBaseValue: s,
          bandSize: l,
          stackDataKeys: f
        }).areaSettings).connectNulls;
        x = g.baseValue;
        w = g.dataKey;
        A = v.stackedData;
        S = v.layout;
        E = v.chartBaseValue;
        P = v.xAxis;
        j = v.yAxis;
        k = v.displayedData;
        I = v.dataStartIndex;
        C = v.xAxisTicks;
        T = v.yAxisTicks;
        M = v.bandSize;
        _ = v.stackDataKeys;
        D = A && A.length;
        N = ((e, t, r, n, i) => {
          var a = r ?? t;
          if ((0, c.isNumber)(a)) {
            return a;
          }
          var o = e === "horizontal" ? i : n;
          var l = o.scale.domain();
          if (o.type === "number") {
            var u = Math.max(l[0], l[1]);
            var s = Math.min(l[0], l[1]);
            if (a === "dataMin") {
              return s;
            } else if (a === "dataMax" || u < 0) {
              return u;
            } else {
              return Math.max(Math.min(l[0], l[1]), 0);
            }
          }
          if (a === "dataMin") {
            return l[0];
          } else if (a === "dataMax") {
            return l[1];
          } else {
            return l[0];
          }
        })(S, E, x, P, j);
        L = S === "horizontal";
        R = false;
        z = k.map((e, t) => {
          if (D) {
            a = A[I + t];
          } else {
            var n;
            var a;
            var l = (0, O.getValueByDataKey)(e, w);
            if (Array.isArray(l)) {
              a = l;
              R = true;
            } else {
              a = [N, l];
            }
          }
          var u = ((n = a) == null ? undefined : n[1]) ?? null;
          var c = (0, O.getValueByDataKey)(e, w);
          var s = D && c == null && _ != null && _.length > 0 && _.every(t => (0, O.getValueByDataKey)(e, t) == null);
          var f = u == null || D && !b && c == null || s;
          if (L) {
            return {
              x: (0, O.getCateCoordinateOfLine)({
                axis: P,
                ticks: C,
                bandSize: M,
                entry: e,
                index: t
              }),
              y: f ? null : j.scale.map(u) ?? null,
              value: a,
              payload: e
            };
          } else {
            return {
              x: f ? null : P.scale.map(u) ?? null,
              y: (0, O.getCateCoordinateOfLine)({
                axis: j,
                ticks: T,
                bandSize: M,
                entry: e,
                index: t
              }),
              value: a,
              payload: e
            };
          }
        });
        m = D || R ? z.map(e => {
          var t;
          var r;
          var n = Array.isArray(e.value) ? e.value[0] : null;
          if (L) {
            return {
              x: e.x,
              y: n != null && e.y != null && (r = j.scale.map(n)) != null ? r : null,
              payload: e.payload
            };
          } else {
            return {
              x: n != null && (t = P.scale.map(n)) != null ? t : null,
              y: e.y,
              payload: e.payload
            };
          }
        }) : L ? j.scale.map(N) : P.scale.map(N);
        return {
          points: z,
          baseLine: m ?? 0,
          isRange: R
        };
      }
    }
  });
  var J = e.i(47856);
  var ee = e.i(59179);
  var et = e.i(3850);
  var er = e.i(56383);
  var en = e.i(68444);
  var ei = e.i(20819);
  var ea = e.i(19966);
  var eo = e.i(1480);
  var el = e.i(4874);
  function eu(e) {
    var t = (0, u.svgPropertiesNoEventsFromUnknown)(e);
    if (t != null) {
      var r = t.r;
      var n = t.strokeWidth;
      var i = Number(r);
      var a = Number(n);
      if (Number.isNaN(i) || i < 0) {
        i = 3;
      }
      if (Number.isNaN(a) || a < 0) {
        a = 2;
      }
      return {
        r: i,
        strokeWidth: a
      };
    }
    return {
      r: 3,
      strokeWidth: 2
    };
  }
  var ec = e.i(13627);
  var es = e.i(75436);
  var ef = e.i(22124);
  var ed = e.i(99428);
  var ep = e.i(8316);
  var eh = ["animationElapsedTime", "isAnimating", "isEntrance", "layout", "isRange", "stroke", "connectNulls"];
  var ey = ["id", "baseLine"];
  function ev() {
    return (ev = Object.assign.bind()).apply(null, arguments);
  }
  function em(e, t) {
    if (e == null) {
      return {};
    }
    var r;
    var n;
    var i = function (e, t) {
      if (e == null) {
        return {};
      }
      var r = {};
      for (var n in e) {
        if ({}.hasOwnProperty.call(e, n)) {
          if (t.indexOf(n) !== -1) {
            continue;
          }
          r[n] = e[n];
        }
      }
      return r;
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) {
        r = a[n];
        if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
          i[r] = e[r];
        }
      }
    }
    return i;
  }
  function eg(e) {
    var t;
    var n;
    var i = e.alpha;
    var a = e.baseLine;
    var o = e.points;
    var l = e.strokeWidth;
    var u = (t = o[0]) == null ? undefined : t.x;
    var s = (n = o[o.length - 1]) == null ? undefined : n.x;
    if (!(0, ed.isWellBehavedNumber)(u) || !(0, ed.isWellBehavedNumber)(s)) {
      return null;
    }
    var f = i * Math.abs(u - s);
    var d = Math.max(...o.map(e => e.y || 0));
    if ((0, c.isNumber)(a)) {
      d = Math.max(a, d);
    } else if (a && Array.isArray(a) && a.length) {
      d = Math.max(...a.map(e => e.y || 0), d);
    }
    if ((0, c.isNumber)(d)) {
      return r.createElement("rect", {
        x: u < s ? u : u - f,
        y: 0,
        width: f,
        height: Math.floor(d + (l ? parseInt(`${l}`, 10) : 1))
      });
    } else {
      return null;
    }
  }
  function eb(e) {
    var t;
    var n;
    var i = e.alpha;
    var a = e.baseLine;
    var o = e.points;
    var l = e.strokeWidth;
    var u = (t = o[0]) == null ? undefined : t.y;
    var s = (n = o[o.length - 1]) == null ? undefined : n.y;
    if (!(0, ed.isWellBehavedNumber)(u) || !(0, ed.isWellBehavedNumber)(s)) {
      return null;
    }
    var f = i * Math.abs(u - s);
    var d = Math.max(...o.map(e => e.x || 0));
    if ((0, c.isNumber)(a)) {
      d = Math.max(a, d);
    } else if (a && Array.isArray(a) && a.length) {
      d = Math.max(...a.map(e => e.x || 0), d);
    }
    if ((0, c.isNumber)(d)) {
      return r.createElement("rect", {
        x: 0,
        y: u < s ? u : u - f,
        width: d + (l ? parseInt(`${l}`, 10) : 1),
        height: Math.floor(f)
      });
    } else {
      return null;
    }
  }
  function ex(e) {
    var t = e.alpha;
    var n = e.layout;
    var i = e.points;
    var a = e.baseLine;
    var o = e.strokeWidth;
    if (n === "vertical") {
      return r.createElement(eb, {
        alpha: t,
        points: i,
        baseLine: a,
        strokeWidth: o
      });
    } else {
      return r.createElement(eg, {
        alpha: t,
        points: i,
        baseLine: a,
        strokeWidth: o
      });
    }
  }
  var ew = ["id"];
  var eO = ["activeDot", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "fill", "fillOpacity", "hide", "isAnimationActive", "legendType", "stroke", "xAxisId", "yAxisId"];
  function eA() {
    return (eA = Object.assign.bind()).apply(null, arguments);
  }
  function eS(e, t) {
    if (e == null) {
      return {};
    }
    var r;
    var n;
    var i = function (e, t) {
      if (e == null) {
        return {};
      }
      var r = {};
      for (var n in e) {
        if ({}.hasOwnProperty.call(e, n)) {
          if (t.indexOf(n) !== -1) {
            continue;
          }
          r[n] = e[n];
        }
      }
      return r;
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) {
        r = a[n];
        if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
          i[r] = e[r];
        }
      }
    }
    return i;
  }
  function eE(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function eP(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        eE(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        eE(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  var ej = {
    activeDot: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
    animationMatchBy: en.matchByIndex,
    animationInterpolateFn: (e, t) => e == null ? [] : t === 1 ? e.flatMap(e => e.status === "removed" ? [] : [e.next]) : e.flatMap(e => e.status === "matched" ? [eP(eP({}, e.next), {}, {
      x: (0, c.interpolate)(e.prev.x, e.next.x, t),
      y: (0, c.interpolate)(e.prev.y, e.next.y, t)
    })] : e.status === "added" ? [e.next] : []),
    connectNulls: false,
    dot: false,
    fill: "#3182bd",
    fillOpacity: 0.6,
    hide: false,
    isAnimationActive: "auto",
    legendType: "line",
    stroke: "#3182bd",
    strokeWidth: 1,
    type: "linear",
    label: false,
    shape: function (e) {
      var n = e.animationElapsedTime;
      var i = n === undefined ? 1 : n;
      var o = e.isAnimating;
      var l = e.isEntrance;
      var c = e.layout;
      var s = e.isRange;
      var f = e.stroke;
      var d = e.connectNulls;
      var p = em(e, eh);
      var h = c === "vertical" ? "vertical" : "horizontal";
      var y = d != null && d;
      var v = (0, ep.useId)();
      var m = p.id;
      var g = p.baseLine;
      var b = em(p, ey);
      var x = (0, u.svgPropertiesNoEvents)(b);
      var w = r.createElement(ef.Curve, ev({}, p, {
        id: m,
        baseLine: g,
        connectNulls: y,
        stroke: "none",
        className: "recharts-area-area",
        layout: h
      }));
      var O = f !== "none" && r.createElement(ef.Curve, ev({}, x, {
        className: "recharts-area-curve",
        layout: h,
        type: p.type,
        connectNulls: y,
        fill: "none",
        stroke: f,
        points: p.points
      }));
      var A = f !== "none" && s && Array.isArray(g) && r.createElement(ef.Curve, ev({}, x, {
        className: "recharts-area-curve",
        layout: h,
        type: p.type,
        connectNulls: y,
        fill: "none",
        stroke: f,
        points: g
      }));
      if (l !== undefined && l && (o !== undefined && o || i < 1)) {
        return r.createElement(a.Layer, null, r.createElement("defs", null, r.createElement("clipPath", {
          id: v
        }, r.createElement(ex, {
          alpha: i,
          points: p.points ?? [],
          baseLine: g,
          layout: h,
          strokeWidth: p.strokeWidth
        }))), r.createElement(a.Layer, {
          clipPath: `url(#${v})`
        }, w, O, A));
      } else {
        return r.createElement(r.Fragment, null, w, O, A);
      }
    },
    xAxisId: 0,
    yAxisId: 0,
    zIndex: y.DefaultZIndexes.area
  };
  function ek(e, t) {
    if (e && e !== "none") {
      return e;
    } else {
      return t;
    }
  }
  var eI = n.memo(e => {
    var t = e.dataKey;
    var r = e.data;
    var i = e.stroke;
    var a = e.strokeWidth;
    var o = e.fill;
    var l = e.name;
    var u = e.hide;
    var s = e.unit;
    var f = e.formatter;
    var d = e.tooltipType;
    var p = e.id;
    var h = {
      dataDefinedOnItem: r,
      getPosition: c.noop,
      settings: {
        stroke: i,
        strokeWidth: a,
        fill: o,
        dataKey: t,
        nameKey: undefined,
        name: (0, O.getTooltipNameProp)(l, t),
        hide: u,
        type: d,
        color: ek(i, o),
        unit: s,
        formatter: f,
        graphicalItemId: p
      }
    };
    return n.createElement(C.SetTooltipEntrySettings, {
      tooltipEntrySettings: h
    });
  });
  function eC(e) {
    var t = e.clipPathId;
    var r = e.points;
    var i = e.props;
    var a = i.needClip;
    var o = i.dot;
    var l = i.dataKey;
    var c = (0, u.svgPropertiesNoEvents)(i);
    return n.createElement(w, {
      points: r,
      dot: o,
      className: "recharts-area-dots",
      dotClassName: "recharts-area-dot",
      dataKey: l,
      baseProps: c,
      needClip: a,
      clipPathId: t
    });
  }
  function eT(e) {
    var t = e.showLabels;
    var r = e.children;
    var i = e.points.map(e => {
      var n = {
        x: e.x ?? 0,
        y: e.y ?? 0,
        width: 0,
        lowerWidth: 0,
        upperWidth: 0,
        height: 0
      };
      return eP(eP({}, n), {}, {
        value: e.value,
        payload: e.payload,
        parentViewBox: undefined,
        viewBox: n,
        fill: undefined
      });
    });
    return n.createElement(o.CartesianLabelListContextProvider, {
      value: t ? i : undefined
    }, r);
  }
  function eM(e) {
    var t = e.points;
    var r = e.baseLine;
    var i = e.needClip;
    var o = e.clipPathId;
    var l = e.props;
    var u = e.animationElapsedTime;
    var c = e.isAnimating;
    var s = e.isEntrance;
    var f = l.layout;
    var d = l.type;
    var h = l.stroke;
    var y = l.connectNulls;
    var v = l.isRange;
    var m = l.shape;
    var g = l.id;
    var b = eS(l, ew);
    var x = eP(eP({}, (0, p.svgPropertiesAndEvents)(b)), {}, {
      id: g,
      points: t,
      connectNulls: y,
      type: d,
      baseLine: r,
      layout: f,
      stroke: h,
      isRange: v,
      animationElapsedTime: u,
      isAnimating: c,
      isEntrance: s
    });
    return n.createElement(n.Fragment, null, (t == null ? undefined : t.length) > 1 && n.createElement(a.Layer, {
      clipPath: i ? `url(#clipPath-${o})` : undefined
    }, n.createElement(ec.Shape, {
      option: m,
      DefaultShape: ej.shape,
      shapeProps: x
    })), n.createElement(eC, {
      points: t,
      props: b,
      clipPathId: o
    }));
  }
  function e_(e) {
    var t;
    var r = e.needClip;
    var i = e.clipPathId;
    var a = e.props;
    var l = e.previousPointsRef;
    var u = e.previousBaselineRef;
    var s = a.points;
    var f = a.baseLine;
    var d = a.isAnimationActive;
    var p = a.animationBegin;
    var h = a.animationDuration;
    var y = a.animationEasing;
    var v = a.animationMatchBy;
    var m = a.animationInterpolateFn;
    var g = (0, n.useMemo)(() => ({
      points: s,
      baseLine: f
    }), [s, f]);
    var b = (0, ei.useAnimationStartSnapshot)(g, u);
    var x = (0, N.useCartesianChartLayout)();
    var w = (0, er.useAnimationCallbacks)(a.onAnimationStart, a.onAnimationEnd);
    var O = w.isAnimating;
    var A = w.handleAnimationStart;
    var S = w.handleAnimationEnd;
    var E = b.startValue;
    if (x == null) {
      return null;
    } else {
      t = Array.isArray(f) && Array.isArray(E) ? (0, en.matchAnimationItems)(E, f, v) : Array.isArray(f) ? (0, en.matchAnimationItems)(null, f, v) : null;
      return n.createElement(er.AnimatedItems, {
        animationInput: g,
        animationIdPrefix: "recharts-area-",
        items: s,
        previousItemsRef: l,
        isAnimationActive: d,
        animationBegin: p,
        animationDuration: h,
        animationEasing: y,
        onAnimationStart: A,
        onAnimationEnd: S,
        animationInterpolateFn: m,
        animationMatchBy: v,
        layout: x
      }, (e, l, u) => {
        var d;
        d = l === 1 ? f : Array.isArray(f) ? m(t, l, x) : u ? f : function (e, t, r) {
          if ((0, c.isNumber)(e)) {
            var n = (0, c.isNumber)(t) ? t : undefined;
            return (0, c.interpolate)(n, e, r);
          }
          if ((0, c.isNullish)(e) || (0, c.isNan)(e)) {
            var i = (0, c.isNumber)(t) ? t : undefined;
            return (0, c.interpolate)(i, 0, r);
          }
          return e;
        }(f, E, l);
        b.syncStepValue(d, l);
        return n.createElement(eT, {
          showLabels: !O,
          points: s
        }, a.children, n.createElement(eM, {
          points: e,
          baseLine: d,
          needClip: r,
          clipPathId: i,
          props: a,
          animationElapsedTime: l,
          isAnimating: O || l < 1,
          isEntrance: u
        }), n.createElement(o.LabelListFromLabelProp, {
          label: a.label
        }));
      });
    }
  }
  function eD(e) {
    var t = e.needClip;
    var r = e.clipPathId;
    var i = e.props;
    var a = (0, n.useRef)(null);
    var o = (0, n.useRef)();
    return n.createElement(e_, {
      needClip: t,
      clipPathId: r,
      props: i,
      previousPointsRef: a,
      previousBaselineRef: o
    });
  }
  class eN extends n.PureComponent {
    render() {
      var e = this.props;
      var t = e.hide;
      var r = e.dot;
      var o = e.points;
      var l = e.className;
      var u = e.top;
      var c = e.left;
      var s = e.needClip;
      var f = e.xAxisId;
      var p = e.yAxisId;
      var y = e.width;
      var v = e.height;
      var m = e.id;
      var g = e.baseLine;
      var b = e.zIndex;
      if (t) {
        return null;
      }
      var x = (0, i.clsx)("recharts-area", l);
      var w = eu(r);
      var O = w.r;
      var A = w.strokeWidth;
      var S = (0, d.isClipDot)(r);
      var E = O * 2 + A;
      var P = s ? `url(#clipPath-${S ? "" : "dots-"}${m})` : undefined;
      return n.createElement(h.ZIndexLayer, {
        zIndex: b
      }, n.createElement(a.Layer, {
        className: x
      }, s && n.createElement("defs", null, n.createElement(_, {
        clipPathId: m,
        xAxisId: f,
        yAxisId: p
      }), !S && n.createElement("clipPath", {
        id: `clipPath-dots-${m}`
      }, n.createElement("rect", {
        x: c - E / 2,
        y: u - E / 2,
        width: y + E,
        height: v + E
      }))), n.createElement(eD, {
        needClip: s,
        clipPathId: m,
        props: this.props
      })), n.createElement(I, {
        points: o,
        mainColor: ek(this.props.stroke, this.props.fill),
        itemDataKey: this.props.dataKey,
        activeDot: this.props.activeDot,
        clipPath: P
      }), this.props.isRange && Array.isArray(g) && n.createElement(I, {
        points: g,
        mainColor: ek(this.props.stroke, this.props.fill),
        itemDataKey: this.props.dataKey,
        activeDot: this.props.activeDot,
        clipPath: P
      }));
    }
  }
  function eL(e) {
    var r = e.activeDot;
    var i = e.animationBegin;
    var a = e.animationDuration;
    var o = e.animationEasing;
    var l = e.connectNulls;
    var u = e.dot;
    var c = e.fill;
    var s = e.fillOpacity;
    var f = e.hide;
    var d = e.isAnimationActive;
    var p = e.legendType;
    var h = e.stroke;
    var y = e.xAxisId;
    var v = e.yAxisId;
    var m = eS(e, eO);
    var g = (0, N.useChartLayout)();
    var b = (0, ee.useChartName)();
    var x = M(y, v).needClip;
    var w = (0, J.useIsPanorama)();
    var O = (0, A.useAppSelector)(t => Q(t, e.id, w)) ?? {};
    var S = O.points;
    var P = O.isRange;
    var j = O.baseLine;
    var k = (0, E.usePlotArea)();
    if (g !== "horizontal" && g !== "vertical" || k == null || b !== "AreaChart" && b !== "ComposedChart") {
      return null;
    }
    var I = k.height;
    var C = k.width;
    var T = k.x;
    var _ = k.y;
    if (S && S.length) {
      return n.createElement(eN, eA({}, m, {
        activeDot: r,
        animationBegin: i,
        animationDuration: a,
        animationEasing: o,
        baseLine: j,
        connectNulls: l,
        dot: u,
        fill: c,
        fillOpacity: s,
        height: I,
        hide: f,
        layout: g,
        isAnimationActive: d,
        isRange: P,
        legendType: p,
        needClip: x,
        points: S,
        stroke: h,
        width: C,
        left: T,
        top: _,
        xAxisId: y,
        yAxisId: v
      }));
    } else {
      return null;
    }
  }
  var _Component5 = n.memo(function (e) {
    var t = (0, ea.resolveDefaultProps)(e, ej);
    var r = (0, J.useIsPanorama)();
    return n.createElement(eo.RegisterGraphicalItemId, {
      id: t.id,
      type: "area"
    }, e => {
      var i;
      var a;
      var o;
      var l;
      var u;
      return n.createElement(n.Fragment, null, n.createElement(et.SetLegendPayload, {
        legendPayload: (i = t.dataKey, a = t.name, o = t.stroke, l = t.fill, u = t.legendType, [{
          inactive: t.hide,
          dataKey: i,
          type: u,
          color: ek(o, l),
          value: (0, O.getTooltipNameProp)(a, i),
          payload: t
        }])
      }), n.createElement(eI, {
        dataKey: t.dataKey,
        data: t.data,
        stroke: t.stroke,
        strokeWidth: t.strokeWidth,
        fill: t.fill,
        name: t.name,
        hide: t.hide,
        unit: t.unit,
        formatter: t.formatter,
        tooltipType: t.tooltipType,
        id: e
      }), n.createElement(el.SetCartesianGraphicalItem, {
        type: "area",
        id: e,
        data: t.data,
        dataKey: t.dataKey,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        stackId: (0, O.getNormalizedStackId)(t.stackId),
        hide: t.hide,
        barSize: undefined,
        baseValue: t.baseValue,
        isPanorama: r,
        connectNulls: t.connectNulls
      }), n.createElement(eL, eA({}, t, {
        id: e
      })));
    });
  }, es.propsAreEqual);
  _Component5.displayName = "Area";
  var ez = e.i(62123);
  var eB = e.i(24160);
  var eF = e.i(99545);
  var eU = e.i(25367);
  var e$ = e.i(67775);
  var eK = e.i(19779);
  var eW = e.i(60588);
  function eV() {
    return (eV = Object.assign.bind()).apply(null, arguments);
  }
  function eH(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  var eG = function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        eH(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        eH(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }({
    accessibilityLayer: true,
    barCategoryGap: "10%",
    barGap: 4,
    layout: "horizontal",
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    responsive: false,
    reverseStackOrder: false,
    stackOffset: "none",
    syncMethod: "index"
  }, e.i(47071).initialEventSettingsState);
  var eY = (0, r.forwardRef)(function (e, t) {
    var i = (0, ea.resolveDefaultProps)(e.categoricalChartProps, eG);
    var a = e.chartName;
    var o = e.defaultTooltipEventType;
    var l = e.validateTooltipEventTypes;
    var u = e.tooltipPayloadSearcher;
    var c = e.categoricalChartProps;
    return r.createElement(eB.RechartsStoreProvider, {
      preloadedState: {
        options: {
          chartName: a,
          defaultTooltipEventType: o,
          validateTooltipEventTypes: l,
          tooltipPayloadSearcher: u,
          eventEmitter: undefined
        }
      },
      reduxStoreName: c.id ?? a
    }, r.createElement(eF.ChartDataContextProvider, {
      chartData: c.data
    }), r.createElement(eU.ReportMainChartProps, {
      layout: i.layout,
      margin: i.margin
    }), r.createElement(eK.ReportEventSettings, {
      throttleDelay: i.throttleDelay,
      throttledEvents: i.throttledEvents
    }), r.createElement(e$.ReportChartProps, {
      baseValue: i.baseValue,
      accessibilityLayer: i.accessibilityLayer,
      barCategoryGap: i.barCategoryGap,
      maxBarSize: i.maxBarSize,
      stackOffset: i.stackOffset,
      barGap: i.barGap,
      barSize: i.barSize,
      syncId: i.syncId,
      syncMethod: i.syncMethod,
      className: i.className,
      reverseStackOrder: i.reverseStackOrder
    }), r.createElement(eW.CategoricalChart, eV({}, i, {
      ref: t
    })));
  });
  var eq = ["axis"];
  var _Component7 = (0, r.forwardRef)((e, t) => r.createElement(eY, {
    chartName: "AreaChart",
    defaultTooltipEventType: "axis",
    validateTooltipEventTypes: eq,
    tooltipPayloadSearcher: ez.arrayTooltipSearcher,
    categoricalChartProps: e,
    ref: t
  }));
  var eZ = e.i(24712);
  var eQ = e.i(80009);
  var eJ = e.i(25663);
  function e0(e) {
    var t = e.width;
    var r = e.height;
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var i = (n % 180 + 180) % 180 * Math.PI / 180;
    var a = Math.atan(r / t);
    return Math.abs(i > a && i < Math.PI - a ? r / Math.sin(i) : t / Math.cos(i));
  }
  function e1(e, t) {
    if (t < 1) {
      return [];
    }
    if (t === 1) {
      return e;
    }
    var r = [];
    for (var n = 0; n < e.length; n += t) {
      var i = e[n];
      if (i !== undefined) {
        r.push(i);
      }
    }
    return r;
  }
  function e2(e, t, r, n, i) {
    if (e * t < e * n || e * t > e * i) {
      return false;
    }
    var a = r();
    return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
  }
  function e5(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function e3(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        e5(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        e5(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function e6(e, t, r) {
    var n;
    var i;
    var a;
    var o;
    var l;
    var s = e.tick;
    var f = e.ticks;
    var d = e.viewBox;
    var p = e.minTickGap;
    var h = e.orientation;
    var y = e.interval;
    var v = e.tickFormatter;
    var m = e.unit;
    var g = e.angle;
    if (!f || !f.length || !s) {
      return [];
    }
    if ((0, c.isNumber)(y) || eJ.Global.isSsr) {
      return e1(f, ((0, c.isNumber)(y) ? y : 0) + 1) ?? [];
    }
    var b = h === "top" || h === "bottom" ? "width" : "height";
    var x = m && b === "width" ? (0, eQ.getStringSize)(m, {
      fontSize: t,
      letterSpacing: r
    }) : {
      width: 0,
      height: 0
    };
    var w = (e, n) => {
      var i;
      var a = typeof v == "function" ? v(e.value, n) : e.value;
      if (b === "width") {
        i = (0, eQ.getStringSize)(a, {
          fontSize: t,
          letterSpacing: r
        });
        return e0({
          width: i.width + x.width,
          height: i.height + x.height
        }, g);
      } else {
        return (0, eQ.getStringSize)(a, {
          fontSize: t,
          letterSpacing: r
        })[b];
      }
    };
    var O = f[0];
    var A = f[1];
    var S = f.length >= 2 && O != null && A != null ? (0, c.mathSign)(A.coordinate - O.coordinate) : 1;
    n = b === "width";
    i = d.x;
    a = d.y;
    o = d.width;
    l = d.height;
    var E = S === 1 ? {
      start: n ? i : a,
      end: n ? i + o : a + l
    } : {
      start: n ? i + o : a + l,
      end: n ? i : a
    };
    if (y === "equidistantPreserveStart") {
      return function (e, t, r, n, i) {
        var a;
        for (var o = (n || []).slice(), l = t.start, u = t.end, c = 0, s = 1, f = l; s <= o.length;) {
          if (a = function () {
            var t;
            var a = n == null ? undefined : n[c];
            if (a === undefined) {
              return {
                v: e1(n, s)
              };
            }
            var o = c;
            var d = () => {
              if (t === undefined) {
                t = r(a, o);
              }
              return t;
            };
            var p = a.coordinate;
            var h = c === 0 || e2(e, p, d, f, u);
            if (!h) {
              c = 0;
              f = l;
              s += 1;
            }
            if (h) {
              f = p + e * (d() / 2 + i);
              c += s;
            }
          }()) {
            return a.v;
          }
        }
        return [];
      }(S, E, w, f, p);
    } else if (y === "equidistantPreserveEnd") {
      return function (e, t, r, n, i) {
        var a = (n || []).slice().length;
        if (a === 0) {
          return [];
        }
        var o = t.start;
        var l = t.end;
        for (var u = 1; u <= a; u++) {
          for (var c, s = (a - 1) % u, f = o, d = true, p = s; p < a && ((c = function () {
            var t;
            var a = n[p];
            if (a == null) {
              return 0;
            }
            var o = p;
            var u = () => {
              if (t === undefined) {
                t = r(a, o);
              }
              return t;
            };
            var c = a.coordinate;
            var h = p === s || e2(e, c, u, f, l);
            if (!h) {
              d = false;
              return 1;
            }
            if (h) {
              f = c + e * (u() / 2 + i);
            }
          }()) === 0 || c !== 1); p += u);
          if (d) {
            var h = [];
            for (var y = s; y < a; y += u) {
              var v = n[y];
              if (v != null) {
                h.push(v);
              }
            }
            return h;
          }
        }
        return [];
      }(S, E, w, f, p);
    } else {
      return (y === "preserveStart" || y === "preserveStartEnd" ? function (e, t, r, n, i, a) {
        var o = (n || []).slice();
        var l = o.length;
        var u = t.start;
        var c = t.end;
        if (a) {
          var s = n[l - 1];
          if (s != null) {
            var f = r(s, l - 1);
            var d = e * (s.coordinate + e * f / 2 - c);
            o[l - 1] = s = e3(e3({}, s), {}, {
              tickCoord: d > 0 ? s.coordinate - d * e : s.coordinate
            });
            if (s.tickCoord != null && e2(e, s.tickCoord, () => f, u, c)) {
              c = s.tickCoord - e * (f / 2 + i);
              o[l - 1] = e3(e3({}, s), {}, {
                isShow: true
              });
            }
          }
        }
        for (var p = a ? l - 1 : l, h = function (t) {
            var n;
            var a = o[t];
            if (a == null) {
              return 1;
            }
            var l = a;
            var s = () => {
              if (n === undefined) {
                n = r(a, t);
              }
              return n;
            };
            if (t === 0) {
              var f = e * (l.coordinate - e * s() / 2 - u);
              o[t] = l = e3(e3({}, l), {}, {
                tickCoord: f < 0 ? l.coordinate - f * e : l.coordinate
              });
            } else {
              o[t] = l = e3(e3({}, l), {}, {
                tickCoord: l.coordinate
              });
            }
            if (l.tickCoord != null && e2(e, l.tickCoord, s, u, c)) {
              u = l.tickCoord + e * (s() / 2 + i);
              o[t] = e3(e3({}, l), {}, {
                isShow: true
              });
            }
          }, y = 0; y < p; y++) {
          if (h(y)) {
            continue;
          }
        }
        return o;
      }(S, E, w, f, p, y === "preserveStartEnd") : function (e, t, r, n, i) {
        var a = (n || []).slice();
        var o = a.length;
        var l = t.start;
        var u = t.end;
        var c = function (t) {
          var n;
          var c = a[t];
          if (c == null) {
            return 1;
          }
          var s = c;
          var f = () => {
            if (n === undefined) {
              n = r(c, t);
            }
            return n;
          };
          if (t === o - 1) {
            var d = e * (s.coordinate + e * f() / 2 - u);
            a[t] = s = e3(e3({}, s), {}, {
              tickCoord: d > 0 ? s.coordinate - d * e : s.coordinate
            });
          } else {
            a[t] = s = e3(e3({}, s), {}, {
              tickCoord: s.coordinate
            });
          }
          if (s.tickCoord != null && e2(e, s.tickCoord, f, l, u)) {
            u = s.tickCoord - e * (f() / 2 + i);
            a[t] = e3(e3({}, s), {}, {
              isShow: true
            });
          }
        };
        for (var s = o - 1; s >= 0; s--) {
          if (c(s)) {
            continue;
          }
        }
        return a;
      }(S, E, w, f, p)).filter(e => e.isShow);
    }
  }
  var e4 = e.i(52089);
  function e8() {}
  var e7 = e.i(90824);
  var e9 = e.i(82430);
  var te = e.i(90659);
  var tt = e.i(48839);
  function tr(e) {
    if (!e || typeof e != "object") {
      return false;
    }
    let t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && Object.prototype.toString.call(e) === "[object Object]";
  }
  var tn = e.i(59051);
  var ti = e.i(96013);
  var ta = e.i(20722);
  var to = e.i(9919);
  var tl = e.i(95024);
  var tu = ["axisLine", "width", "height", "className", "hide", "ticks", "axisType", "axisId"];
  function tc(e, t) {
    return function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(e) || function (e, t) {
      var r = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (r != null) {
        var n;
        var i;
        var a;
        var o;
        var l = [];
        var u = true;
        var c = false;
        try {
          a = (r = r.call(e)).next;
          if (t === 0) {
            if (Object(r) !== r) {
              return;
            }
            u = false;
          } else {
            for (; !(u = (n = a.call(r)).done) && (l.push(n.value), l.length !== t); u = true);
          }
        } catch (e) {
          c = true;
          i = e;
        } finally {
          try {
            if (!u && r.return != null && (o = r.return(), Object(o) !== o)) {
              return;
            }
          } finally {
            if (c) {
              throw i;
            }
          }
        }
        return l;
      }
    }(e, t) || function (e, t) {
      if (e) {
        if (typeof e == "string") {
          return ts(e, t);
        }
        var r = {}.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor) {
          r = e.constructor.name;
        }
        if (r === "Map" || r === "Set") {
          return Array.from(e);
        } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
          return ts(e, t);
        } else {
          return undefined;
        }
      }
    }(e, t) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function ts(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  function tf() {
    return (tf = Object.assign.bind()).apply(null, arguments);
  }
  function td(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function tp(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        td(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        td(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  var th = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    viewBox: {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    orientation: "bottom",
    ticks: [],
    stroke: "#666",
    tickLine: true,
    axisLine: true,
    tick: true,
    mirror: false,
    minTickGap: 5,
    tickSize: 6,
    tickMargin: 2,
    interval: "preserveEnd",
    zIndex: y.DefaultZIndexes.axis
  };
  function ty(e) {
    var t = e.x;
    var n = e.y;
    var a = e.width;
    var o = e.height;
    var l = e.orientation;
    var c = e.mirror;
    var s = e.axisLine;
    var f = e.otherSvgProps;
    if (!s) {
      return null;
    }
    var d = tp(tp(tp({}, f), (0, u.svgPropertiesNoEvents)(s)), {}, {
      fill: "none"
    });
    if (l === "top" || l === "bottom") {
      var p = +(l === "top" && !c || l === "bottom" && c);
      d = tp(tp({}, d), {}, {
        x1: t,
        y1: n + p * o,
        x2: t + a,
        y2: n + p * o
      });
    } else {
      var h = +(l === "left" && !c || l === "right" && c);
      d = tp(tp({}, d), {}, {
        x1: t + h * a,
        y1: n,
        x2: t + h * a,
        y2: n + o
      });
    }
    return r.createElement("line", tf({}, d, {
      className: (0, i.clsx)("recharts-cartesian-axis-line", (0, e4.default)(s, "className"))
    }));
  }
  function tv(e) {
    var t;
    var n = e.option;
    var a = e.tickProps;
    var o = e.value;
    var l = (0, i.clsx)(a.className, "recharts-cartesian-axis-tick-value");
    if (r.isValidElement(n)) {
      t = r.cloneElement(n, tp(tp({}, a), {}, {
        className: l
      }));
    } else if (typeof n == "function") {
      t = n(tp(tp({}, a), {}, {
        className: l
      }));
    } else {
      var u = "recharts-cartesian-axis-tick-value";
      if (typeof n != "boolean") {
        u = (0, i.clsx)(u, (0, to.getClassNameFromUnknown)(n));
      }
      t = r.createElement(ti.Text, tf({}, a, {
        className: u
      }), o);
    }
    return t;
  }
  function tm(e) {
    var t = e.ticks;
    var n = e.axisType;
    var i = e.axisId;
    var a = (0, A.useAppDispatch)();
    var o = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
      if (i != null && n != null) {
        var e;
        var r = t.map(e => ({
          value: e.value,
          coordinate: e.coordinate,
          offset: e.offset,
          index: e.index
        }));
        var l = o.current;
        if (l == null || l.axisId !== i || l.axisType !== n || !(e = l.ticks, function e(t, r, n, i, a, o, l) {
          let u = l(t, r, n, i, a, o);
          if (u !== undefined) {
            return u;
          }
          if (typeof t == typeof r) {
            switch (typeof t) {
              case "bigint":
              case "string":
              case "boolean":
              case "symbol":
              case "undefined":
              case "function":
                return t === r;
              case "number":
                return t === r || Object.is(t, r);
            }
          }
          return function t(r, n, i, a) {
            if (Object.is(r, n)) {
              return true;
            }
            let o = (0, e9.getTag)(r);
            let l = (0, e9.getTag)(n);
            if (o === "[object Arguments]") {
              o = te.objectTag;
            }
            if (l === "[object Arguments]") {
              l = te.objectTag;
            }
            if (o !== l) {
              return false;
            }
            switch (o) {
              case te.stringTag:
                return r.toString() === n.toString();
              case te.numberTag:
                return (0, tn.eq)(r.valueOf(), n.valueOf());
              case te.booleanTag:
              case te.dateTag:
              case te.symbolTag:
                return Object.is(r.valueOf(), n.valueOf());
              case te.regexpTag:
                return r.source === n.source && r.flags === n.flags;
              case te.functionTag:
                return r === n;
            }
            let u = (i = i ?? new Map()).get(r);
            let c = i.get(n);
            if (u != null && c != null) {
              return u === n;
            }
            i.set(r, n);
            i.set(n, r);
            try {
              switch (o) {
                case te.mapTag:
                  if (r.size !== n.size) {
                    return false;
                  }
                  for (let [t, o] of r.entries()) {
                    if (!n.has(t) || !e(o, n.get(t), t, r, n, i, a)) {
                      return false;
                    }
                  }
                  return true;
                case te.setTag:
                  {
                    if (r.size !== n.size) {
                      return false;
                    }
                    let t = Array.from(r.values());
                    let o = Array.from(n.values());
                    for (let l = 0; l < t.length; l++) {
                      let u = t[l];
                      let c = o.findIndex(t => e(u, t, undefined, r, n, i, a));
                      if (c === -1) {
                        return false;
                      }
                      o.splice(c, 1);
                    }
                    return true;
                  }
                case te.arrayTag:
                case te.uint8ArrayTag:
                case te.uint8ClampedArrayTag:
                case te.uint16ArrayTag:
                case te.uint32ArrayTag:
                case te.bigUint64ArrayTag:
                case te.int8ArrayTag:
                case te.int16ArrayTag:
                case te.int32ArrayTag:
                case te.bigInt64ArrayTag:
                case te.float32ArrayTag:
                case te.float64ArrayTag:
                  if ((0, tt.isBuffer)(r) !== (0, tt.isBuffer)(n) || r.length !== n.length) {
                    return false;
                  }
                  for (let t = 0; t < r.length; t++) {
                    if (!e(r[t], n[t], t, r, n, i, a)) {
                      return false;
                    }
                  }
                  return true;
                case te.arrayBufferTag:
                  if (r.byteLength !== n.byteLength) {
                    return false;
                  }
                  return t(new Uint8Array(r), new Uint8Array(n), i, a);
                case te.dataViewTag:
                  if (r.byteLength !== n.byteLength || r.byteOffset !== n.byteOffset) {
                    return false;
                  }
                  return t(new Uint8Array(r), new Uint8Array(n), i, a);
                case te.errorTag:
                  return r.name === n.name && r.message === n.message;
                case te.objectTag:
                  {
                    if (!t(r.constructor, n.constructor, i, a) && (!tr(r) || !tr(n))) {
                      return false;
                    }
                    let o = [...Object.keys(r), ...(0, e7.getSymbols)(r)];
                    let l = [...Object.keys(n), ...(0, e7.getSymbols)(n)];
                    if (o.length !== l.length) {
                      return false;
                    }
                    for (let t = 0; t < o.length; t++) {
                      let l = o[t];
                      let u = r[l];
                      if (!Object.hasOwn(n, l)) {
                        return false;
                      }
                      let c = n[l];
                      if (!e(u, c, l, r, n, i, a)) {
                        return false;
                      }
                    }
                    return true;
                  }
                default:
                  return false;
              }
            } finally {
              i.delete(r);
              i.delete(n);
            }
          }(t, r, o, l);
        }(e, r, undefined, undefined, undefined, undefined, e8))) {
          o.current = {
            ticks: r,
            axisId: i,
            axisType: n
          };
          a((0, tl.setRenderedTicks)({
            ticks: r,
            axisId: i,
            axisType: n
          }));
        }
      }
    }, [a, t, i, n]);
    (0, r.useEffect)(() => i == null || n == null ? c.noop : () => {
      a((0, tl.removeRenderedTicks)({
        axisId: i,
        axisType: n
      }));
    }, [a, i, n]);
    return null;
  }
  var tg = (0, r.forwardRef)((e, t) => {
    var n = e.ticks;
    var o = e.tick;
    var s = e.tickLine;
    var f = e.stroke;
    var d = e.tickFormatter;
    var p = e.unit;
    var v = e.padding;
    var m = e.tickTextProps;
    var g = e.orientation;
    var b = e.mirror;
    var x = e.x;
    var w = e.y;
    var O = e.width;
    var A = e.height;
    var S = e.tickSize;
    var E = e.tickMargin;
    var P = e.fontSize;
    var j = e.letterSpacing;
    var k = e.getTicksConfig;
    var I = e.events;
    var C = e.axisType;
    var T = e.axisId;
    var M = e6(tp(tp({}, k), {}, {
      ticks: n === undefined ? [] : n
    }), P, j);
    var _ = (0, u.svgPropertiesNoEvents)(k);
    var D = (0, u.svgPropertiesNoEventsFromUnknown)(o);
    var N = (0, ti.isValidTextAnchor)(_.textAnchor) ? _.textAnchor : function (e, t) {
      switch (e) {
        case "left":
          if (t) {
            return "start";
          } else {
            return "end";
          }
        case "right":
          if (t) {
            return "end";
          } else {
            return "start";
          }
        default:
          return "middle";
      }
    }(g, b);
    var L = function (e, t) {
      switch (e) {
        case "left":
        case "right":
          return "middle";
        case "top":
          if (t) {
            return "start";
          } else {
            return "end";
          }
        default:
          if (t) {
            return "end";
          } else {
            return "start";
          }
      }
    }(g, b);
    var R = {};
    if (typeof s == "object") {
      R = s;
    }
    var z = tp(tp({}, _), {}, {
      fill: "none"
    }, R);
    var B = M.map(e => tp({
      entry: e
    }, function (e, t, r, n, i, a, o, l, u) {
      var s;
      var f;
      var d;
      var p;
      var h;
      var y;
      var v = l ? -1 : 1;
      var m = e.tickSize || o;
      var g = (0, c.isNumber)(e.tickCoord) ? e.tickCoord : e.coordinate;
      switch (a) {
        case "top":
          s = f = e.coordinate;
          y = (d = (p = r + !l * i) - v * m) - v * u;
          h = g;
          break;
        case "left":
          d = p = e.coordinate;
          h = (s = (f = t + !l * n) - v * m) - v * u;
          y = g;
          break;
        case "right":
          d = p = e.coordinate;
          h = (s = (f = t + l * n) + v * m) + v * u;
          y = g;
          break;
        default:
          s = f = e.coordinate;
          y = (d = (p = r + l * i) + v * m) + v * u;
          h = g;
      }
      return {
        line: {
          x1: s,
          y1: d,
          x2: f,
          y2: p
        },
        tick: {
          x: h,
          y: y
        }
      };
    }(e, x, w, O, A, g, S, b, E)));
    var F = B.map(e => {
      var t = e.entry;
      var n = e.line;
      return r.createElement(a.Layer, {
        className: "recharts-cartesian-axis-tick",
        key: `tick-${t.value}-${t.coordinate}-${t.tickCoord}`
      }, s && r.createElement("line", tf({}, z, n, {
        className: (0, i.clsx)("recharts-cartesian-axis-tick-line", (0, e4.default)(s, "className"))
      })));
    });
    var U = B.map((e, t) => {
      var u = e.entry;
      var c = e.tick;
      var s = tp(tp(tp(tp({
        verticalAnchor: L
      }, _), {}, {
        textAnchor: N,
        stroke: "none",
        fill: f
      }, c), {}, {
        index: t,
        payload: u,
        visibleTicksCount: M.length,
        tickFormatter: d,
        padding: v
      }, m), {}, {
        angle: (m == null ? undefined : m.angle) ?? _.angle ?? 0
      });
      var h = tp(tp({}, s), D);
      return r.createElement(a.Layer, tf({
        className: "recharts-cartesian-axis-tick-label",
        key: `tick-label-${u.value}-${u.coordinate}-${u.tickCoord}`
      }, (0, l.adaptEventsOfChild)(I, u, t)), o && r.createElement(tv, {
        option: o,
        tickProps: h,
        value: `${typeof d == "function" ? d(u.value, t) : u.value}${p || ""}`
      }));
    });
    return r.createElement("g", {
      className: `recharts-cartesian-axis-ticks recharts-${C}-ticks`
    }, r.createElement(tm, {
      ticks: M,
      axisId: T,
      axisType: C
    }), U.length > 0 && r.createElement(h.ZIndexLayer, {
      zIndex: y.DefaultZIndexes.label
    }, r.createElement("g", {
      className: `recharts-cartesian-axis-tick-labels recharts-${C}-tick-labels`,
      ref: t
    }, U)), F.length > 0 && r.createElement("g", {
      className: `recharts-cartesian-axis-tick-lines recharts-${C}-tick-lines`
    }, F));
  });
  var tb = (0, r.forwardRef)((e, t) => {
    var n = e.axisLine;
    var o = e.width;
    var l = e.height;
    var c = e.className;
    var s = e.hide;
    var f = e.ticks;
    var d = e.axisType;
    var p = e.axisId;
    var y = function (e, t) {
      if (e == null) {
        return {};
      }
      var r;
      var n;
      var i = function (e, t) {
        if (e == null) {
          return {};
        }
        var r = {};
        for (var n in e) {
          if ({}.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) !== -1) {
              continue;
            }
            r[n] = e[n];
          }
        }
        return r;
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) {
          r = a[n];
          if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
            i[r] = e[r];
          }
        }
      }
      return i;
    }(e, tu);
    var v = tc((0, r.useState)(""), 2);
    var m = v[0];
    var g = v[1];
    var b = tc((0, r.useState)(""), 2);
    var x = b[0];
    var w = b[1];
    var O = (0, r.useRef)(null);
    (0, r.useImperativeHandle)(t, () => ({
      getCalculatedWidth: () => {
        var t;
        return (e => {
          var t = e.ticks;
          var r = e.label;
          var n = e.labelGapWithTick;
          var i = e.tickSize;
          var a = e.tickMargin;
          var o = 0;
          if (t) {
            Array.from(t).forEach(e => {
              if (e) {
                var t = e.getBoundingClientRect();
                if (t.width > o) {
                  o = t.width;
                }
              }
            });
            var l = r ? r.getBoundingClientRect().width : 0;
            return Math.round(o + ((i === undefined ? 0 : i) + (a === undefined ? 0 : a)) + l + (r ? n === undefined ? 5 : n : 0));
          }
          return 0;
        })({
          ticks: O.current,
          label: (t = e.labelRef) == null ? undefined : t.current,
          labelGapWithTick: 5,
          tickSize: e.tickSize,
          tickMargin: e.tickMargin
        });
      },
      getCalculatedHeight: () => {
        var t;
        return (e => {
          var t = e.ticks;
          var r = e.label;
          var n = e.labelGapWithTick;
          var i = e.tickSize;
          var a = e.tickMargin;
          var o = 0;
          if (t) {
            Array.from(t).forEach(e => {
              if (e) {
                var t = e.getBoundingClientRect();
                if (t.height > o) {
                  o = t.height;
                }
              }
            });
            var l = r ? r.getBoundingClientRect().height : 0;
            return Math.round(o + ((i === undefined ? 0 : i) + (a === undefined ? 0 : a)) + l + (r ? n === undefined ? 5 : n : 0));
          }
          return 0;
        })({
          ticks: O.current,
          label: (t = e.labelRef) == null ? undefined : t.current,
          labelGapWithTick: 5,
          tickSize: e.tickSize,
          tickMargin: e.tickMargin
        });
      }
    }));
    var A = (0, r.useCallback)(e => {
      if (e) {
        var t = e.getElementsByClassName("recharts-cartesian-axis-tick-value");
        O.current = t;
        var r = t[0];
        if (r) {
          var n = window.getComputedStyle(r);
          var i = n.fontSize;
          var a = n.letterSpacing;
          if (i !== m || a !== x) {
            g(i);
            w(a);
          }
        }
      }
    }, [m, x]);
    if (s || o != null && o <= 0 || l != null && l <= 0) {
      return null;
    } else {
      return r.createElement(h.ZIndexLayer, {
        zIndex: e.zIndex
      }, r.createElement(a.Layer, {
        className: (0, i.clsx)("recharts-cartesian-axis", c)
      }, r.createElement(ty, {
        x: e.x,
        y: e.y,
        width: o,
        height: l,
        orientation: e.orientation,
        mirror: e.mirror,
        axisLine: n,
        otherSvgProps: (0, u.svgPropertiesNoEvents)(e)
      }), r.createElement(tg, {
        ref: A,
        axisType: d,
        events: y,
        fontSize: m,
        getTicksConfig: e,
        height: e.height,
        letterSpacing: x,
        mirror: e.mirror,
        orientation: e.orientation,
        padding: e.padding,
        stroke: e.stroke,
        tick: e.tick,
        tickFormatter: e.tickFormatter,
        tickLine: e.tickLine,
        tickMargin: e.tickMargin,
        tickSize: e.tickSize,
        tickTextProps: e.tickTextProps,
        ticks: f,
        unit: e.unit,
        width: e.width,
        x: e.x,
        y: e.y,
        axisId: p
      }), r.createElement(ta.CartesianLabelContextProvider, {
        x: e.x,
        y: e.y,
        width: e.width,
        height: e.height,
        lowerWidth: e.width,
        upperWidth: e.width
      }, r.createElement(ta.CartesianLabelFromLabelProp, {
        label: e.label,
        labelRef: e.labelRef
      }), e.children)));
    }
  });
  var tx = r.forwardRef((e, t) => {
    var n = (0, ea.resolveDefaultProps)(e, th);
    return r.createElement(tb, tf({}, n, {
      ref: t
    }));
  });
  tx.displayName = "CartesianAxis";
  var tw = (0, r.createContext)({
    grid: {
      stroke: "#ccc",
      fill: "none"
    }
  });
  tw.Provider;
  var tO = ["x1", "y1", "x2", "y2", "key"];
  var tA = ["offset"];
  var tS = ["xAxisId", "yAxisId"];
  var tE = ["xAxisId", "yAxisId"];
  function tP(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function tj(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        tP(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        tP(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function tk() {
    return (tk = Object.assign.bind()).apply(null, arguments);
  }
  function tI(e, t) {
    if (e == null) {
      return {};
    }
    var r;
    var n;
    var i = function (e, t) {
      if (e == null) {
        return {};
      }
      var r = {};
      for (var n in e) {
        if ({}.hasOwnProperty.call(e, n)) {
          if (t.indexOf(n) !== -1) {
            continue;
          }
          r[n] = e[n];
        }
      }
      return r;
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) {
        r = a[n];
        if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
          i[r] = e[r];
        }
      }
    }
    return i;
  }
  var tC = e => {
    var t = e.fill;
    if (!t || t === "none") {
      return null;
    }
    var n = e.fillOpacity;
    var i = e.x;
    var a = e.y;
    var o = e.width;
    var l = e.height;
    var u = e.ry;
    return r.createElement("rect", {
      x: i,
      y: a,
      ry: u,
      width: o,
      height: l,
      stroke: "none",
      fill: t,
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg"
    });
  };
  function tT(e) {
    var t = e.option;
    var n = e.lineItemProps;
    if (r.isValidElement(t)) {
      i = r.cloneElement(t, n);
    } else if (typeof t == "function") {
      i = t(n);
    } else {
      var i;
      var o = n.x1;
      var l = n.y1;
      var c = n.x2;
      var s = n.y2;
      var f = n.key;
      var d = tI(n, tO);
      var p = (0, u.svgPropertiesNoEvents)(d) ?? {};
      p.offset;
      var h = tI(p, tA);
      var y = Array.isArray(h.strokeDasharray) ? h.strokeDasharray.join(",") : h.strokeDasharray;
      i = r.createElement("line", tk({}, h, {
        strokeDasharray: y,
        x1: o,
        y1: l,
        x2: c,
        y2: s,
        fill: "none",
        key: f
      }));
    }
    return i;
  }
  function tM(e) {
    var t = e.x;
    var n = e.width;
    var i = e.horizontal;
    var a = i === undefined || i;
    var o = e.horizontalPoints;
    if (!a || !o || !o.length) {
      return null;
    }
    e.xAxisId;
    e.yAxisId;
    var l = tI(e, tS);
    var u = o.map((e, i) => {
      var o = tj(tj({}, l), {}, {
        x1: t,
        y1: e,
        x2: t + n,
        y2: e,
        key: `line-${i}`,
        index: i
      });
      return r.createElement(tT, {
        key: `line-${i}`,
        option: a,
        lineItemProps: o
      });
    });
    return r.createElement("g", {
      className: "recharts-cartesian-grid-horizontal"
    }, u);
  }
  function t_(e) {
    var t = e.y;
    var n = e.height;
    var i = e.vertical;
    var a = i === undefined || i;
    var o = e.verticalPoints;
    if (!a || !o || !o.length) {
      return null;
    }
    e.xAxisId;
    e.yAxisId;
    var l = tI(e, tE);
    var u = o.map((e, i) => {
      var o = tj(tj({}, l), {}, {
        x1: e,
        y1: t,
        x2: e,
        y2: t + n,
        key: `line-${i}`,
        index: i
      });
      return r.createElement(tT, {
        option: a,
        lineItemProps: o,
        key: `line-${i}`
      });
    });
    return r.createElement("g", {
      className: "recharts-cartesian-grid-vertical"
    }, u);
  }
  function tD(e) {
    var t = e.horizontalFill;
    var n = e.fillOpacity;
    var i = e.x;
    var a = e.y;
    var o = e.width;
    var l = e.height;
    var u = e.horizontalPoints;
    var c = e.horizontal;
    if (c !== undefined && !c || !t || !t.length || u == null) {
      return null;
    }
    var s = u.map(e => Math.round(e + a - a)).sort((e, t) => e - t);
    if (a !== s[0]) {
      s.unshift(0);
    }
    var f = s.map((e, u) => {
      var c = s[u + 1];
      var f = c == null ? a + l - e : c - e;
      if (f <= 0) {
        return null;
      }
      var d = u % t.length;
      return r.createElement("rect", {
        key: `react-${u}`,
        y: e,
        x: i,
        height: f,
        width: o,
        stroke: "none",
        fill: t[d],
        fillOpacity: n,
        className: "recharts-cartesian-grid-bg"
      });
    });
    return r.createElement("g", {
      className: "recharts-cartesian-gridstripes-horizontal"
    }, f);
  }
  function tN(e) {
    var t = e.vertical;
    var n = e.verticalFill;
    var i = e.fillOpacity;
    var a = e.x;
    var o = e.y;
    var l = e.width;
    var u = e.height;
    var c = e.verticalPoints;
    if (t !== undefined && !t || !n || !n.length) {
      return null;
    }
    var s = c.map(e => Math.round(e + a - a)).sort((e, t) => e - t);
    if (a !== s[0]) {
      s.unshift(0);
    }
    var f = s.map((e, t) => {
      var c = s[t + 1];
      var f = c == null ? a + l - e : c - e;
      if (f <= 0) {
        return null;
      }
      var d = t % n.length;
      return r.createElement("rect", {
        key: `react-${t}`,
        x: e,
        y: o,
        width: f,
        height: u,
        stroke: "none",
        fill: n[d],
        fillOpacity: i,
        className: "recharts-cartesian-grid-bg"
      });
    });
    return r.createElement("g", {
      className: "recharts-cartesian-gridstripes-vertical"
    }, f);
  }
  var tL = (e, t) => {
    var r = e.xAxis;
    var n = e.width;
    var i = e.height;
    var a = e.offset;
    return (0, O.getCoordinatesOfGrid)(e6(tj(tj(tj({}, th), r), {}, {
      ticks: (0, O.getTicksOfAxis)(r, true),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      }
    })), a.left, a.left + a.width, t);
  };
  var tR = (e, t) => {
    var r = e.yAxis;
    var n = e.width;
    var i = e.height;
    var a = e.offset;
    return (0, O.getCoordinatesOfGrid)(e6(tj(tj(tj({}, th), r), {}, {
      ticks: (0, O.getTicksOfAxis)(r, true),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      }
    })), a.top, a.top + a.height, t);
  };
  var tz = {
    horizontal: true,
    vertical: true,
    horizontalPoints: [],
    verticalPoints: [],
    verticalFill: [],
    horizontalFill: [],
    xAxisId: 0,
    yAxisId: 0,
    syncWithTicks: false,
    zIndex: y.DefaultZIndexes.grid
  };
  function _Component(e) {
    var u = (0, N.useChartWidth)();
    var s = (0, N.useChartHeight)();
    var f = (0, N.useOffsetInternal)();
    var d = tj(tj({}, (0, ea.resolveDefaultProps)(e, tz)), {}, {
      x: (0, c.isNumber)(e.x) ? e.x : f.left,
      y: (0, c.isNumber)(e.y) ? e.y : f.top,
      width: (0, c.isNumber)(e.width) ? e.width : f.width,
      height: (0, c.isNumber)(e.height) ? e.height : f.height
    });
    var p = d.xAxisId;
    var y = d.yAxisId;
    var v = d.x;
    var m = d.y;
    var g = d.width;
    var b = d.height;
    var x = d.syncWithTicks;
    var w = d.horizontalValues;
    var O = d.verticalValues;
    var S = (0, J.useIsPanorama)();
    var E = (0, A.useAppSelector)(e => (0, T.selectAxisPropsNeededForCartesianGridTicksGenerator)(e, "xAxis", p, S));
    var P = (0, A.useAppSelector)(e => (0, T.selectAxisPropsNeededForCartesianGridTicksGenerator)(e, "yAxis", y, S));
    var j = (0, r.useContext)(tw);
    var k = {
      stroke: d.stroke ?? j.grid.stroke,
      strokeWidth: d.strokeWidth ?? j.grid.strokeWidth,
      strokeOpacity: d.strokeOpacity ?? j.grid.strokeOpacity,
      strokeDasharray: d.strokeDasharray ?? j.grid.strokeDasharray
    };
    if (!(0, ed.isPositiveNumber)(g) || !(0, ed.isPositiveNumber)(b) || !(0, c.isNumber)(v) || !(0, c.isNumber)(m)) {
      return null;
    }
    var I = d.verticalCoordinatesGenerator || tL;
    var C = d.horizontalCoordinatesGenerator || tR;
    var M = d.horizontalPoints;
    var _ = d.verticalPoints;
    if ((!M || !M.length) && typeof C == "function") {
      var D = w && w.length;
      var L = C({
        yAxis: P ? tj(tj({}, P), {}, {
          ticks: D ? w : P.ticks
        }) : undefined,
        width: u ?? g,
        height: s ?? b,
        offset: f
      }, !!D || x);
      (0, eZ.warn)(Array.isArray(L), `horizontalCoordinatesGenerator should return Array but instead it returned [${typeof L}]`);
      if (Array.isArray(L)) {
        M = L;
      }
    }
    if ((!_ || !_.length) && typeof I == "function") {
      var R = O && O.length;
      var z = I({
        xAxis: E ? tj(tj({}, E), {}, {
          ticks: R ? O : E.ticks
        }) : undefined,
        width: u ?? g,
        height: s ?? b,
        offset: f
      }, !!R || x);
      (0, eZ.warn)(Array.isArray(z), `verticalCoordinatesGenerator should return Array but instead it returned [${typeof z}]`);
      if (Array.isArray(z)) {
        _ = z;
      }
    }
    return r.createElement(h.ZIndexLayer, {
      zIndex: d.zIndex
    }, r.createElement("g", {
      className: "recharts-cartesian-grid"
    }, r.createElement(tC, {
      fill: d.fill ?? j.grid.fill,
      fillOpacity: d.fillOpacity ?? j.grid.fillOpacity,
      x: d.x,
      y: d.y,
      width: d.width,
      height: d.height,
      ry: d.ry
    }), r.createElement(tD, tk({}, d, {
      horizontalPoints: M
    })), r.createElement(tN, tk({}, d, {
      verticalPoints: _
    })), r.createElement(tM, tk({}, d, k, {
      offset: f,
      horizontalPoints: M,
      xAxis: E,
      yAxis: P
    })), r.createElement(t_, tk({}, d, k, {
      offset: f,
      verticalPoints: _,
      xAxis: E,
      yAxis: P
    }))));
  }
  _Component.displayName = "CartesianGrid";
  var tF = e.i(16568);
  var tU = e.i(54034);
  var t$ = e.i(44835);
  var tK = e.i(80164);
  var tW = e.i(52977);
  var tV = e.i(92485);
  let tH = Math.cos;
  let tG = Math.sin;
  let tY = Math.sqrt;
  let tq = Math.PI;
  let tX = tq * 2;
  tY(3);
  let tZ = {
    draw(e, t) {
      let r = tY(t / tq);
      e.moveTo(r, 0);
      e.arc(0, 0, r, 0, tX);
    }
  };
  let tQ = tY(1 / 3);
  let tJ = tQ * 2;
  let t0 = tG(tq / 10) / tG(tq * 7 / 10);
  let t1 = tG(tX / 10) * t0;
  let t2 = -tH(tX / 10) * t0;
  let t5 = tY(3);
  tY(3);
  let t3 = tY(3) / 2;
  let t6 = 1 / tY(12);
  let t4 = (t6 / 2 + 1) * 3;
  var t8 = ["type", "size", "sizeType"];
  function t7() {
    return (t7 = Object.assign.bind()).apply(null, arguments);
  }
  function t9(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function re(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        t9(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        t9(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  var rt = {
    symbolCircle: tZ,
    symbolCross: {
      draw(e, t) {
        let r = tY(t / 5) / 2;
        e.moveTo(r * -3, -r);
        e.lineTo(-r, -r);
        e.lineTo(-r, r * -3);
        e.lineTo(r, r * -3);
        e.lineTo(r, -r);
        e.lineTo(r * 3, -r);
        e.lineTo(r * 3, r);
        e.lineTo(r, r);
        e.lineTo(r, r * 3);
        e.lineTo(-r, r * 3);
        e.lineTo(-r, r);
        e.lineTo(r * -3, r);
        e.closePath();
      }
    },
    symbolDiamond: {
      draw(e, t) {
        let r = tY(t / tJ);
        let n = r * tQ;
        e.moveTo(0, -r);
        e.lineTo(n, 0);
        e.lineTo(0, r);
        e.lineTo(-n, 0);
        e.closePath();
      }
    },
    symbolSquare: {
      draw(e, t) {
        let r = tY(t);
        let n = -r / 2;
        e.rect(n, n, r, r);
      }
    },
    symbolStar: {
      draw(e, t) {
        let r = tY(t * 0.8908130915292852);
        let n = t1 * r;
        let i = t2 * r;
        e.moveTo(0, -r);
        e.lineTo(n, i);
        for (let t = 1; t < 5; ++t) {
          let a = tX * t / 5;
          let o = tH(a);
          let l = tG(a);
          e.lineTo(l * r, -o * r);
          e.lineTo(o * n - l * i, l * n + o * i);
        }
        e.closePath();
      }
    },
    symbolTriangle: {
      draw(e, t) {
        let r = -tY(t / (t5 * 3));
        e.moveTo(0, r * 2);
        e.lineTo(-t5 * r, -r);
        e.lineTo(t5 * r, -r);
        e.closePath();
      }
    },
    symbolWye: {
      draw(e, t) {
        let r = tY(t / t4);
        let n = r / 2;
        let i = r * t6;
        let a = r * t6 + r;
        let o = -n;
        e.moveTo(n, i);
        e.lineTo(n, a);
        e.lineTo(o, a);
        e.lineTo(n * -0.5 - t3 * i, t3 * n + i * -0.5);
        e.lineTo(n * -0.5 - t3 * a, t3 * n + a * -0.5);
        e.lineTo(o * -0.5 - t3 * a, t3 * o + a * -0.5);
        e.lineTo(n * -0.5 + t3 * i, i * -0.5 - t3 * n);
        e.lineTo(n * -0.5 + t3 * a, a * -0.5 - t3 * n);
        e.lineTo(o * -0.5 + t3 * a, a * -0.5 - t3 * o);
        e.closePath();
      }
    }
  };
  var rr = Math.PI / 180;
  var rn = e => {
    var t = e.type;
    var n = t === undefined ? "circle" : t;
    var a = e.size;
    var o = a === undefined ? 64 : a;
    var l = e.sizeType;
    var u = l === undefined ? "area" : l;
    var s = re(re({}, function (e, t) {
      if (e == null) {
        return {};
      }
      var r;
      var n;
      var i = function (e, t) {
        if (e == null) {
          return {};
        }
        var r = {};
        for (var n in e) {
          if ({}.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) !== -1) {
              continue;
            }
            r[n] = e[n];
          }
        }
        return r;
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) {
          r = a[n];
          if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
            i[r] = e[r];
          }
        }
      }
      return i;
    }(e, t8)), {}, {
      type: n,
      size: o,
      sizeType: u
    });
    var f = "circle";
    if (typeof n == "string") {
      f = n;
    }
    var d = s.className;
    var h = s.cx;
    var y = s.cy;
    var v = (0, p.svgPropertiesAndEvents)(s);
    if ((0, c.isNumber)(h) && (0, c.isNumber)(y) && (0, c.isNumber)(o)) {
      return r.createElement("path", t7({}, v, {
        className: (0, i.clsx)("recharts-symbols", d),
        transform: `translate(${h}, ${y})`,
        d: (() => {
          var e;
          e = f;
          var t = rt[`symbol${(0, c.upperFirst)(e)}`] || tZ;
          var r = function (e, t) {
            let r = null;
            let n = (0, tV.withPath)(i);
            function i() {
              let i;
              r ||= i = n();
              e.apply(this, arguments).draw(r, +t.apply(this, arguments));
              if (i) {
                r = null;
                return i + "" || null;
              }
            }
            e = typeof e == "function" ? e : (0, tW.default)(e || tZ);
            t = typeof t == "function" ? t : (0, tW.default)(t === undefined ? 64 : +t);
            i.type = function (t) {
              if (arguments.length) {
                e = typeof t == "function" ? t : (0, tW.default)(t);
                return i;
              } else {
                return e;
              }
            };
            i.size = function (e) {
              if (arguments.length) {
                t = typeof e == "function" ? e : (0, tW.default)(+e);
                return i;
              } else {
                return t;
              }
            };
            i.context = function (e) {
              if (arguments.length) {
                r = e == null ? null : e;
                return i;
              } else {
                return r;
              }
            };
            return i;
          }().type(t).size(((e, t, r) => {
            if (t === "area") {
              return e;
            }
            switch (r) {
              case "cross":
                return e * 5 * e / 9;
              case "diamond":
                return e * 0.5 * e / Math.sqrt(3);
              case "square":
                return e * e;
              case "star":
                var n = rr * 18;
                return e * 1.25 * e * (Math.tan(n) - Math.tan(n * 2) * Math.tan(n) ** 2);
              case "triangle":
                return Math.sqrt(3) * e * e / 4;
              case "wye":
                return (21 - Math.sqrt(3) * 10) * e * e / 8;
              default:
                return Math.PI * e * e / 4;
            }
          })(o, u, f))();
          if (r !== null) {
            return r;
          }
        })()
      }));
    } else {
      return null;
    }
  };
  function ri() {
    return (ri = Object.assign.bind()).apply(null, arguments);
  }
  function ra(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function ro(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        ra(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        ra(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  rn.registerSymbol = (e, t) => {
    rt[`symbol${(0, c.upperFirst)(e)}`] = t;
  };
  var rl = {
    align: "center",
    iconSize: 14,
    inactiveColor: "#ccc",
    layout: "horizontal",
    verticalAlign: "middle",
    labelStyle: {}
  };
  function ru(e) {
    var t = e.data;
    var n = e.iconType;
    var i = e.inactiveColor;
    var a = 32 / 6;
    var o = 32 / 3;
    var l = t.inactive ? i : t.color;
    var u = n ?? t.type;
    if (u === "none") {
      return null;
    }
    if (u === "plainline") {
      return r.createElement("line", {
        strokeWidth: 4,
        fill: "none",
        stroke: l,
        strokeDasharray: function (e) {
          if (typeof e == "object" && e !== null && "strokeDasharray" in e) {
            return String(e.strokeDasharray);
          }
        }(t.payload),
        x1: 0,
        y1: 16,
        x2: 32,
        y2: 16,
        className: "recharts-legend-icon"
      });
    }
    if (u === "line") {
      return r.createElement("path", {
        strokeWidth: 4,
        fill: "none",
        stroke: l,
        d: `M0,${16}h${o}
            A${a},${a},0,1,1,${o * 2},${16}
            H${32}M${o * 2},${16}
            A${a},${a},0,1,1,${o},${16}`,
        className: "recharts-legend-icon"
      });
    }
    if (u === "rect") {
      return r.createElement("path", {
        stroke: "none",
        fill: l,
        d: `M0,${4}h${32}v${24}h${-32}z`,
        className: "recharts-legend-icon"
      });
    }
    if (r.isValidElement(t.legendIcon)) {
      var c = ro({}, t);
      delete c.legendIcon;
      return r.cloneElement(t.legendIcon, c);
    }
    return r.createElement(rn, {
      fill: l,
      cx: 16,
      cy: 16,
      size: 32,
      sizeType: "diameter",
      type: u
    });
  }
  function rc(e) {
    var t = e.payload;
    var n = e.iconSize;
    var a = e.layout;
    var o = e.formatter;
    var u = e.inactiveColor;
    var c = e.iconType;
    var s = e.labelStyle;
    var f = {
      x: 0,
      y: 0,
      width: 32,
      height: 32
    };
    var d = {
      display: a === "horizontal" ? "inline-block" : "block",
      marginRight: 10,
      whiteSpace: "nowrap"
    };
    var p = {
      display: "inline-block",
      verticalAlign: "middle",
      marginRight: 4
    };
    return t.map((t, a) => {
      var h = t.formatter || o;
      var y = (0, i.clsx)({
        "recharts-legend-item": true,
        [`legend-item-${a}`]: true,
        inactive: t.inactive
      });
      if (t.type === "none") {
        return null;
      }
      var v = typeof s == "object" ? ro({}, s) : {};
      v.color = t.inactive ? u : v.color || t.color;
      if (v.whiteSpace == null) {
        v.whiteSpace = "normal";
      }
      if (v.overflowWrap == null) {
        v.overflowWrap = "break-word";
      }
      var m = h ? h(t.value, t, a) : t.value;
      return r.createElement("li", ri({
        className: y,
        style: d,
        key: `legend-item-${a}`
      }, (0, l.adaptEventsOfChild)(e, t, a)), r.createElement(tK.Surface, {
        width: n,
        height: n,
        viewBox: f,
        style: p,
        "aria-label": t.value == null ? "legend icon" : `${t.value} legend icon`
      }, r.createElement(ru, {
        data: t,
        iconType: c,
        inactiveColor: u
      })), r.createElement("span", {
        className: "recharts-legend-item-text",
        style: v
      }, m));
    });
  }
  var rs = e => {
    var t = (0, ea.resolveDefaultProps)(e, rl);
    var n = t.payload;
    var i = t.layout;
    var a = t.align;
    if (n && n.length) {
      return r.createElement("ul", {
        className: "recharts-default-legend",
        style: {
          padding: 0,
          margin: 0,
          textAlign: i === "horizontal" ? a : "left"
        }
      }, r.createElement(rc, ri({}, t, {
        payload: n
      })));
    } else {
      return null;
    }
  };
  var rf = e.i(95011);
  var rd = e.i(79576);
  var rp = e.i(77720);
  var rh = e.i(16686);
  var ry = e.i(95292);
  var rv = (0, D.createSelector)([ry.selectChartWidth, ry.selectChartHeight, ry.selectMargin], (e, t, r) => ({
    x: r.left || 0,
    y: r.top || 0,
    width: Math.max(e - (r.left || 0) - (r.right || 0), 0),
    height: Math.max(t - (r.top || 0) - (r.bottom || 0), 0)
  }));
  var rm = e.i(58467);
  var rg = ["contextPayload"];
  function rb() {
    return (rb = Object.assign.bind()).apply(null, arguments);
  }
  function rx(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  function rw(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function rO(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        rw(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        rw(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function rA(e) {
    return e.value;
  }
  function rS(e) {
    var t = e.contextPayload;
    var n = function (e, t) {
      if (e == null) {
        return {};
      }
      var r;
      var n;
      var i = function (e, t) {
        if (e == null) {
          return {};
        }
        var r = {};
        for (var n in e) {
          if ({}.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) !== -1) {
              continue;
            }
            r[n] = e[n];
          }
        }
        return r;
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) {
          r = a[n];
          if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
            i[r] = e[r];
          }
        }
      }
      return i;
    }(e, rg);
    var i = (0, rf.getUniqPayload)(t, e.payloadUniqBy, rA);
    var a = rO(rO({}, n), {}, {
      payload: i
    });
    if (r.isValidElement(e.content)) {
      return r.cloneElement(e.content, a);
    } else if (typeof e.content == "function") {
      return r.createElement(e.content, a);
    } else {
      return r.createElement(rs, a);
    }
  }
  function rE(e) {
    var t = e.align;
    var n = e.layout;
    var i = e.verticalAlign;
    var a = e.itemSorter;
    var o = e.position;
    var l = e.offset;
    var u = (0, A.useAppDispatch)();
    (0, r.useLayoutEffect)(() => {
      u((0, rh.setLegendSettings)({
        align: t,
        layout: n,
        verticalAlign: i,
        itemSorter: a,
        position: o,
        offset: l
      }));
    }, [u, t, n, i, a, o, l]);
    return null;
  }
  function rP(e) {
    var t = e.width;
    var n = e.height;
    var i = (0, A.useAppDispatch)();
    (0, r.useLayoutEffect)(() => {
      i((0, rh.setLegendSize)({
        width: t,
        height: n
      }));
    }, [i, t, n]);
    (0, r.useLayoutEffect)(() => () => {
      i((0, rh.setLegendSize)({
        width: 0,
        height: 0
      }));
    }, [i]);
    return null;
  }
  var rj = {
    align: "center",
    iconSize: 14,
    inactiveColor: "#ccc",
    itemSorter: "value",
    labelStyle: {},
    layout: "auto",
    verticalAlign: "bottom",
    offset: 0
  };
  var _Component4 = r.memo(function (e) {
    var t;
    var n;
    var i;
    var a;
    var o;
    var l;
    var u;
    var c;
    var s;
    var b = (0, ea.resolveDefaultProps)(e, rj);
    var x = e.layout && e.layout !== "auto" ? e.layout : (t = b.position) === "left" || t === "right" || t === "insideLeft" || t === "insideRight" ? "vertical" : "horizontal";
    var w = (0, A.useAppSelector)(rd.selectLegendPayload);
    var O = (0, t$.useLegendPortal)();
    var S = (0, N.useMargin)();
    var E = (0, A.useAppSelector)(e => {
      var t;
      if ((t = b.position) == null) {
        return null;
      } else if ((0, tU.isOutsidePosition)(t)) {
        return rv(e);
      } else {
        return (0, rm.selectChartViewBox)(e);
      }
    });
    var P = b.width;
    var j = b.height;
    var k = b.wrapperStyle;
    var I = b.portal;
    var C = I == null && (b.position == null || (0, tU.isOutsidePosition)(b.position));
    var T = function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(n = (0, rp.useElementOffset)([w])) || function (e) {
      var t = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (t != null) {
        var r;
        var n;
        var i;
        var a;
        var o = [];
        var l = true;
        var u = false;
        try {
          i = (t = t.call(e)).next;
          false;
          for (; !(l = (r = i.call(t)).done) && (o.push(r.value), o.length !== 2); l = true);
        } catch (e) {
          u = true;
          n = e;
        } finally {
          try {
            if (!l && t.return != null && (a = t.return(), Object(a) !== a)) {
              return;
            }
          } finally {
            if (u) {
              throw n;
            }
          }
        }
        return o;
      }
    }(n) || function (e) {
      if (e) {
        if (typeof e == "string") {
          return rx(e, 2);
        }
        var t = {}.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor) {
          t = e.constructor.name;
        }
        if (t === "Map" || t === "Set") {
          return Array.from(e);
        } else if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) {
          return rx(e, 2);
        } else {
          return undefined;
        }
      }
    }(n) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
    var M = T[0];
    var _ = T[1];
    var D = (0, N.useChartWidth)();
    var L = (0, N.useChartHeight)();
    if (D == null || L == null || b.position != null && E == null) {
      return null;
    }
    var R = D - ((S == null ? undefined : S.left) || 0) - ((S == null ? undefined : S.right) || 0);
    var z = x === "vertical" && j != null ? {
      height: j
    } : x === "horizontal" ? {
      width: P || R
    } : null;
    var B = b.position == null ? null : (0, tU.getCartesianPosition)({
      viewBox: E ?? {
        x: 0,
        y: 0,
        width: D,
        height: L
      },
      position: b.position,
      offset: b.offset ?? 0
    });
    i = b.position;
    a = b.offset ?? 0;
    var F = i === "top" ? {
      top: M.height + a
    } : i === "bottom" ? {
      top: -M.height - a
    } : i === "left" ? {
      left: M.width + a
    } : i === "right" ? {
      left: -M.width - a
    } : {};
    var U = x === "vertical" ? ((E == null ? undefined : E.width) ?? 0) / 2 : (E == null ? undefined : E.width) ?? 0;
    var $ = x === "horizontal" ? ((E == null ? undefined : E.height) ?? 0) / 2 : (E == null ? undefined : E.height) ?? 0;
    var K = B ? {
      width: "max-content",
      height: "max-content",
      maxWidth: U,
      maxHeight: $,
      overflowY: "auto",
      top: B.y + (F.top ?? 0),
      left: B.x + (F.left ?? 0),
      transform: function (e, t) {
        if (e === "start" && t === "start") {
          return "";
        }
        var n = {
          start: "0",
          middle: "-50%",
          end: "-100%"
        }[t] ?? "0";
        return `translate(${e === "inherit" ? "0" : {
          start: "0",
          middle: "-50%",
          end: "-100%"
        }[e]}, ${n})`;
      }(B.horizontalAnchor, B.verticalAnchor)
    } : (u = b.layout, c = b.align, s = b.verticalAlign, k && (k.left !== undefined && k.left !== null || k.right !== undefined && k.right !== null) || (o = c === "center" && u === "vertical" ? {
      left: ((D || 0) - M.width) / 2
    } : c === "right" ? {
      right: S && S.right || 0
    } : {
      left: S && S.left || 0
    }), k && (k.top !== undefined && k.top !== null || k.bottom !== undefined && k.bottom !== null) || (l = s === "middle" ? {
      top: ((L || 0) - M.height) / 2
    } : s === "bottom" ? {
      bottom: S && S.bottom || 0
    } : {
      top: S && S.top || 0
    }), rO(rO({}, o), l));
    var W = I ? k : rO(rO({
      position: "absolute",
      width: (z == null ? undefined : z.width) || P || "auto",
      height: (z == null ? undefined : z.height) || j || "auto"
    }, K), k);
    var V = I ?? O;
    if (V == null || w == null) {
      return null;
    }
    var H = r.createElement("div", {
      className: "recharts-legend-wrapper",
      style: W,
      ref: _
    }, r.createElement(rE, {
      layout: x,
      align: b.align,
      verticalAlign: b.verticalAlign,
      itemSorter: b.itemSorter,
      position: b.position,
      offset: b.offset
    }), C && r.createElement(rP, M), r.createElement(rS, rb({}, b, {
      layout: x
    }, z, {
      margin: S,
      chartWidth: D,
      chartHeight: L,
      contextPayload: w
    })));
    return (0, tF.createPortal)(H, V);
  }, es.propsAreEqual);
  _Component4.displayName = "Legend";
  var rI = r;
  var rC = ["animationElapsedTime", "isAnimating", "isEntrance", "visibleLength", "strokeDasharray", "connectNulls"];
  function rT() {
    return (rT = Object.assign.bind()).apply(null, arguments);
  }
  function rM(e, t) {
    return `${t}px ${e}px`;
  }
  var r_ = e.i(74481);
  var rD = ["children"];
  var rN = (0, r.createContext)({
    data: [],
    xAxisId: "xAxis-0",
    yAxisId: "yAxis-0",
    dataPointFormatter: () => ({
      x: 0,
      y: 0,
      value: 0
    }),
    errorBarOffset: 0
  });
  function rL(e) {
    var t = e.children;
    var n = function (e, t) {
      if (e == null) {
        return {};
      }
      var r;
      var n;
      var i = function (e, t) {
        if (e == null) {
          return {};
        }
        var r = {};
        for (var n in e) {
          if ({}.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) !== -1) {
              continue;
            }
            r[n] = e[n];
          }
        }
        return r;
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) {
          r = a[n];
          if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
            i[r] = e[r];
          }
        }
      }
      return i;
    }(e, rD);
    return r.createElement(rN.Provider, {
      value: n
    }, t);
  }
  var rR = (e, t, r, n) => (0, T.selectAxisWithScale)(e, "xAxis", t, n);
  var rz = (e, t, r, n) => (0, T.selectTicksOfGraphicalItem)(e, "xAxis", t, n);
  var rB = (e, t, r, n) => (0, T.selectAxisWithScale)(e, "yAxis", r, n);
  var rF = (e, t, r, n) => (0, T.selectTicksOfGraphicalItem)(e, "yAxis", r, n);
  var rU = (0, D.createSelector)([N.selectChartLayout, rR, rB, rz, rF], (e, t, r, n, i) => (0, O.isCategoricalAxis)(e, "xAxis") ? (0, O.getBandSizeOfAxis)(t, n, false) : (0, O.getBandSizeOfAxis)(r, i, false));
  function r$(e) {
    return e.type === "line";
  }
  var rK = (0, D.createSelector)([T.selectUnfilteredCartesianItems, (e, t, r, n, i) => i], (e, t) => e.filter(r$).find(e => e.id === t));
  var rW = (0, D.createSelector)([N.selectChartLayout, rR, rB, rz, rF, rK, rU, L.selectChartDataWithIndexesIfNotInPanoramaPosition4], (e, t, r, n, i, a, o, l) => {
    var u;
    var s = l.chartData;
    var f = l.dataStartIndex;
    var d = l.dataEndIndex;
    if (a != null && t != null && r != null && n != null && i != null && n.length !== 0 && i.length !== 0 && o != null && (e === "horizontal" || e === "vertical")) {
      var p;
      var h;
      var y;
      var v;
      var m;
      var g;
      var b;
      var x;
      var w = a.dataKey;
      var A = a.data;
      if ((u = A != null && A.length > 0 ? A : s == null ? undefined : s.slice(f, d + 1)) != null) {
        h = (p = {
          layout: e,
          xAxis: t,
          yAxis: r,
          xAxisTicks: n,
          yAxisTicks: i,
          dataKey: w,
          bandSize: o,
          displayedData: u
        }).layout;
        y = p.xAxis;
        v = p.yAxis;
        m = p.xAxisTicks;
        g = p.yAxisTicks;
        b = p.dataKey;
        x = p.bandSize;
        return p.displayedData.map((e, t) => {
          var r = (0, O.getValueByDataKey)(e, b);
          if (h === "horizontal") {
            var n = (0, O.getCateCoordinateOfLine)({
              axis: y,
              ticks: m,
              bandSize: x,
              entry: e,
              index: t
            });
            var i = (0, c.isNullish)(r) ? null : v.scale.map(r);
            return {
              x: n,
              y: i ?? null,
              value: r,
              payload: e
            };
          }
          var a = (0, c.isNullish)(r) ? null : y.scale.map(r);
          var o = (0, O.getCateCoordinateOfLine)({
            axis: v,
            ticks: g,
            bandSize: x,
            entry: e,
            index: t
          });
          if (a == null || o == null) {
            return null;
          } else {
            return {
              x: a,
              y: o,
              value: r,
              payload: e
            };
          }
        }).filter(Boolean);
      }
    }
  });
  var rV = ["id"];
  var rH = ["type", "layout", "connectNulls", "needClip", "shape", "strokeDasharray"];
  var rG = ["activeDot", "animateNewValues", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "hide", "isAnimationActive", "label", "legendType", "xAxisId", "yAxisId", "id"];
  function rY() {
    return (rY = Object.assign.bind()).apply(null, arguments);
  }
  function rq(e, t) {
    if (e == null) {
      return {};
    }
    var r;
    var n;
    var i = function (e, t) {
      if (e == null) {
        return {};
      }
      var r = {};
      for (var n in e) {
        if ({}.hasOwnProperty.call(e, n)) {
          if (t.indexOf(n) !== -1) {
            continue;
          }
          r[n] = e[n];
        }
      }
      return r;
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) {
        r = a[n];
        if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
          i[r] = e[r];
        }
      }
    }
    return i;
  }
  function rX(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function rZ(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        rX(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        rX(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  var rQ = {
    activeDot: true,
    animateNewValues: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
    animationInterpolateFn: (e, t) => {
      if (e == null) {
        return [];
      }
      if (t === 1) {
        return e.flatMap(e => e.status === "removed" ? [] : [e.next]);
      }
      var r = function (e) {
        var t = 0;
        var r = 0;
        for (var n of e) {
          if (n.status === "matched" && n.prev.x != null && n.next.x != null) {
            t += n.next.x - n.prev.x;
            r++;
          }
        }
        if (r > 0) {
          return t / r;
        } else {
          return 0;
        }
      }(e);
      var n = [];
      for (var i of e) {
        if (i.status === "matched") {
          n.push(rZ(rZ({}, i.next), {}, {
            x: (0, c.interpolate)(i.prev.x, i.next.x, t),
            y: (0, c.interpolate)(i.prev.y, i.next.y, t)
          }));
        } else if (i.status === "added") {
          if (i.next.x != null) {
            var a = i.next.x - r;
            n.push(rZ(rZ({}, i.next), {}, {
              x: (0, c.interpolate)(a, i.next.x, t),
              y: i.next.y
            }));
          } else {
            n.push(i.next);
          }
        } else if (i.status === "removed" && i.prev.x != null) {
          var o = i.prev.x + r;
          n.push(rZ(rZ({}, i.prev), {}, {
            x: (0, c.interpolate)(i.prev.x, o, t),
            y: i.prev.y
          }));
        }
      }
      return n;
    },
    animationMatchBy: en.matchByIndex,
    connectNulls: false,
    dot: true,
    fill: "#fff",
    hide: false,
    isAnimationActive: "auto",
    label: false,
    legendType: "line",
    shape: function (e) {
      e.animationElapsedTime;
      e.isAnimating;
      e.isEntrance;
      var t = e.visibleLength;
      var n = e.strokeDasharray;
      var i = e.connectNulls;
      var a = function (e, t) {
        if (e == null) {
          return {};
        }
        var r;
        var n;
        var i = function (e, t) {
          if (e == null) {
            return {};
          }
          var r = {};
          for (var n in e) {
            if ({}.hasOwnProperty.call(e, n)) {
              if (t.indexOf(n) !== -1) {
                continue;
              }
              r[n] = e[n];
            }
          }
          return r;
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++) {
            r = a[n];
            if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
              i[r] = e[r];
            }
          }
        }
        return i;
      }(e, rC);
      if (t != null) {
        var o;
        var u = a.pathRef;
        var c = function (e) {
          try {
            return e && e.getTotalLength && e.getTotalLength() || 0;
          } catch (e) {
            return 0;
          }
        }((u == null ? undefined : u.current) ?? null);
        o = n ? function (e, t, r) {
          var n = r.length % 2 != 0 ? [...r, ...r] : r;
          var i = n.reduce((e, t) => e + t, 0);
          if (!i) {
            return rM(t, e);
          }
          var a = Math.floor(e / i);
          var o = e % i;
          var l = [];
          for (var u = 0, c = 0; u < n.length; c += n[u] ?? 0, ++u) {
            var f = n[u];
            if (f != null && c + f > o) {
              l = [...n.slice(0, u), o - c];
              break;
            }
          }
          var d = l.length % 2 == 0 ? [0, t] : [t];
          return [...function (e, t) {
            var r = [];
            for (var n = 0; n < t; ++n) {
              r.push(...e);
            }
            return r;
          }(n, a), ...l, ...d].map(e => `${e}px`).join(", ");
        }(t, c, `${n}`.split(/[,\s]+/gim).map(e => parseFloat(e))) : rM(c, t);
      } else if (n != null) {
        o = String(n);
      }
      return r.createElement(ef.Curve, rT({}, a, {
        connectNulls: i != null && i,
        strokeDasharray: o
      }));
    },
    stroke: "#3182bd",
    strokeWidth: 1,
    xAxisId: 0,
    yAxisId: 0,
    zIndex: y.DefaultZIndexes.line,
    type: "linear"
  };
  var rJ = rI.memo(e => {
    var t = e.dataKey;
    var r = e.data;
    var n = e.stroke;
    var i = e.strokeWidth;
    var a = e.fill;
    var o = e.name;
    var l = e.hide;
    var u = e.unit;
    var s = e.formatter;
    var f = e.tooltipType;
    var d = e.id;
    var p = {
      dataDefinedOnItem: r,
      getPosition: c.noop,
      settings: {
        stroke: n,
        strokeWidth: i,
        fill: a,
        dataKey: t,
        nameKey: undefined,
        name: (0, O.getTooltipNameProp)(o, t),
        hide: l,
        type: f,
        color: n,
        unit: u,
        formatter: s,
        graphicalItemId: d
      }
    };
    return rI.createElement(C.SetTooltipEntrySettings, {
      tooltipEntrySettings: p
    });
  });
  function r0(e) {
    var t = e.clipPathId;
    var r = e.points;
    var n = e.props;
    var i = n.dot;
    var a = n.dataKey;
    var o = n.needClip;
    n.id;
    var l = rq(n, rV);
    var c = (0, u.svgPropertiesNoEvents)(l);
    return rI.createElement(w, {
      points: r,
      dot: i,
      className: "recharts-line-dots",
      dotClassName: "recharts-line-dot",
      dataKey: a,
      baseProps: c,
      needClip: o,
      clipPathId: t
    });
  }
  function r1(e) {
    var t = e.showLabels;
    var r = e.children;
    var n = e.points;
    var i = (0, rI.useMemo)(() => n == null ? undefined : n.map(e => {
      var n = {
        x: e.x ?? 0,
        y: e.y ?? 0,
        width: 0,
        lowerWidth: 0,
        upperWidth: 0,
        height: 0
      };
      return rZ(rZ({}, n), {}, {
        value: e.value,
        payload: e.payload,
        viewBox: n,
        parentViewBox: undefined,
        fill: undefined
      });
    }), [n]);
    return rI.createElement(o.CartesianLabelListContextProvider, {
      value: t ? i : undefined
    }, r);
  }
  function r2(e) {
    var t = e.clipPathId;
    var r = e.pathRef;
    var n = e.points;
    var i = e.props;
    var a = e.animationElapsedTime;
    var o = e.isAnimating;
    var l = e.isEntrance;
    var u = e.visibleLength;
    var c = i.type;
    var s = i.layout;
    var f = i.connectNulls;
    var d = i.needClip;
    var h = i.shape;
    var y = i.strokeDasharray;
    var v = rq(i, rH);
    var m = rZ(rZ({}, (0, p.svgPropertiesAndEvents)(v)), {}, {
      fill: "none",
      className: "recharts-line-curve",
      clipPath: d ? `url(#clipPath-${t})` : undefined,
      points: n,
      type: c,
      layout: s,
      connectNulls: f,
      strokeDasharray: y ?? i.strokeDasharray,
      pathRef: r,
      animationElapsedTime: a,
      isAnimating: o,
      isEntrance: !!i.animateNewValues && l,
      visibleLength: u
    });
    return rI.createElement(rI.Fragment, null, (n == null ? undefined : n.length) > 1 && rI.createElement(ec.Shape, {
      option: h,
      DefaultShape: rQ.shape,
      shapeProps: m
    }), rI.createElement(r0, {
      points: n,
      clipPathId: t,
      props: i
    }));
  }
  function r5(e) {
    var t;
    var n;
    var i;
    var a;
    var l = e.clipPathId;
    var u = e.props;
    var c = e.pathRef;
    var s = e.previousPointsRef;
    var f = u.points;
    var d = u.isAnimationActive;
    var p = u.animationBegin;
    var h = u.animationDuration;
    var y = u.animationEasing;
    var v = u.animationMatchBy;
    var m = u.animationInterpolateFn;
    var g = u.layout;
    var b = function (e) {
      try {
        return e && e.getTotalLength && e.getTotalLength() || 0;
      } catch (e) {
        return 0;
      }
    }(c.current);
    var x = (0, er.useAnimationCallbacks)(u.onAnimationStart, u.onAnimationEnd);
    var w = x.isAnimating;
    var O = x.handleAnimationStart;
    var A = x.handleAnimationEnd;
    t = (0, r.useRef)(0);
    n = (0, r.useRef)(0);
    i = (0, r.useRef)(false);
    if ((a = (0, r.useRef)(f)).current !== f) {
      t.current = n.current;
      a.current = f;
    }
    var S = (0, r.useCallback)((e, r) => {
      if (i.current) {
        return null;
      }
      var a = Math.min((0, r_.round)(t.current + e * r), r);
      if (e > 0 && r > 0 && (n.current = Math.max(n.current, a), a >= r)) {
        i.current = true;
        return null;
      } else {
        return a;
      }
    }, []);
    var E = (0, rI.useCallback)(e => e > 0 && b > 0, [b]);
    return rI.createElement(r1, {
      points: f,
      showLabels: !w
    }, u.children, rI.createElement(er.AnimatedItems, {
      animationInput: f,
      animationIdPrefix: "recharts-line-",
      items: f,
      previousItemsRef: s,
      isAnimationActive: d,
      animationBegin: p,
      animationDuration: h,
      animationEasing: y,
      onAnimationStart: O,
      onAnimationEnd: A,
      animationInterpolateFn: m,
      animationMatchBy: v,
      shouldUpdatePreviousRef: E,
      layout: g
    }, (e, t, r) => {
      var n = w || t < 1;
      var i = n ? S(t, b) : null;
      return rI.createElement(r2, {
        props: u,
        points: e,
        clipPathId: l,
        pathRef: c,
        animationElapsedTime: t,
        isAnimating: n,
        isEntrance: r,
        visibleLength: i
      });
    }), rI.createElement(o.LabelListFromLabelProp, {
      label: u.label
    }));
  }
  function r3(e) {
    var t = e.clipPathId;
    var r = e.props;
    var n = (0, rI.useRef)(null);
    var i = (0, rI.useRef)(null);
    return rI.createElement(r5, {
      props: r,
      clipPathId: t,
      previousPointsRef: n,
      pathRef: i
    });
  }
  var r6 = (e, t) => {
    return {
      x: e.x ?? undefined,
      y: e.y ?? undefined,
      value: e.value,
      errorVal: (0, O.getValueByDataKey)(e.payload, t)
    };
  };
  class r4 extends rI.Component {
    render() {
      var e = this.props;
      var t = e.hide;
      var r = e.dot;
      var n = e.points;
      var o = e.className;
      var l = e.xAxisId;
      var u = e.yAxisId;
      var c = e.top;
      var s = e.left;
      var f = e.width;
      var p = e.height;
      var y = e.id;
      var v = e.needClip;
      var m = e.zIndex;
      if (t) {
        return null;
      }
      var g = (0, i.clsx)("recharts-line", o);
      var b = eu(r);
      var x = b.r;
      var w = b.strokeWidth;
      var O = (0, d.isClipDot)(r);
      var A = x * 2 + w;
      var S = v ? `url(#clipPath-${O ? "" : "dots-"}${y})` : undefined;
      return rI.createElement(h.ZIndexLayer, {
        zIndex: m
      }, rI.createElement(a.Layer, {
        className: g
      }, v && rI.createElement("defs", null, rI.createElement(_, {
        clipPathId: y,
        xAxisId: l,
        yAxisId: u
      }), !O && rI.createElement("clipPath", {
        id: `clipPath-dots-${y}`
      }, rI.createElement("rect", {
        x: s - A / 2,
        y: c - A / 2,
        width: f + A,
        height: p + A
      }))), rI.createElement(rL, {
        xAxisId: l,
        yAxisId: u,
        data: n,
        dataPointFormatter: r6,
        errorBarOffset: 0
      }, rI.createElement(r3, {
        props: this.props,
        clipPathId: y
      }))), rI.createElement(I, {
        activeDot: this.props.activeDot,
        points: n,
        mainColor: this.props.stroke,
        itemDataKey: this.props.dataKey,
        clipPath: S
      }));
    }
  }
  function r8(e) {
    var t = (0, ea.resolveDefaultProps)(e, rQ);
    var r = t.activeDot;
    var n = t.animateNewValues;
    var i = t.animationBegin;
    var a = t.animationDuration;
    var o = t.animationEasing;
    var l = t.connectNulls;
    var u = t.dot;
    var c = t.hide;
    var s = t.isAnimationActive;
    var f = t.label;
    var d = t.legendType;
    var p = t.xAxisId;
    var h = t.yAxisId;
    var y = t.id;
    var v = rq(t, rG);
    var m = M(p, h).needClip;
    var g = (0, E.usePlotArea)();
    var b = (0, N.useChartLayout)();
    var x = (0, J.useIsPanorama)();
    var w = (0, A.useAppSelector)(e => rW(e, p, h, x, y));
    if (b !== "horizontal" && b !== "vertical" || w == null || g == null) {
      return null;
    }
    var O = g.height;
    var S = g.width;
    var P = g.x;
    var j = g.y;
    return rI.createElement(r4, rY({}, v, {
      id: y,
      connectNulls: l,
      dot: u,
      activeDot: r,
      animateNewValues: n,
      animationBegin: i,
      animationDuration: a,
      animationEasing: o,
      isAnimationActive: s,
      hide: c,
      label: f,
      legendType: d,
      xAxisId: p,
      yAxisId: h,
      points: w,
      layout: b,
      height: O,
      width: S,
      left: P,
      top: j,
      needClip: m
    }));
  }
  var _Component6 = rI.memo(function (e) {
    var t = (0, ea.resolveDefaultProps)(e, rQ);
    var r = (0, J.useIsPanorama)();
    return rI.createElement(eo.RegisterGraphicalItemId, {
      id: t.id,
      type: "line"
    }, e => {
      var n;
      var i;
      var a;
      var o;
      return rI.createElement(rI.Fragment, null, rI.createElement(et.SetLegendPayload, {
        legendPayload: (n = t.dataKey, i = t.name, a = t.stroke, o = t.legendType, [{
          inactive: t.hide,
          dataKey: n,
          type: o,
          color: a,
          value: (0, O.getTooltipNameProp)(i, n),
          payload: t
        }])
      }), rI.createElement(rJ, {
        dataKey: t.dataKey,
        data: t.data,
        stroke: t.stroke,
        strokeWidth: t.strokeWidth,
        fill: t.fill,
        name: t.name,
        hide: t.hide,
        unit: t.unit,
        formatter: t.formatter,
        tooltipType: t.tooltipType,
        id: e
      }), rI.createElement(el.SetCartesianGraphicalItem, {
        type: "line",
        id: e,
        data: t.data,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        dataKey: t.dataKey,
        hide: t.hide,
        isPanorama: r
      }), rI.createElement(r8, rY({}, t, {
        id: e
      })));
    });
  }, es.propsAreEqual);
  _Component6.displayName = "Line";
  var r9 = e.i(10427);
  var ne = e.i(81615);
  var nt = ["domain", "range"];
  var nr = ["domain", "range"];
  function nn(e, t) {
    if (e == null) {
      return {};
    }
    var r;
    var n;
    var i = function (e, t) {
      if (e == null) {
        return {};
      }
      var r = {};
      for (var n in e) {
        if ({}.hasOwnProperty.call(e, n)) {
          if (t.indexOf(n) !== -1) {
            continue;
          }
          r[n] = e[n];
        }
      }
      return r;
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) {
        r = a[n];
        if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
          i[r] = e[r];
        }
      }
    }
    return i;
  }
  function ni(e, t) {
    return e === t || !!Array.isArray(e) && e.length === 2 && !!Array.isArray(t) && t.length === 2 && e[0] === t[0] && e[1] === t[1];
  }
  function na(e, t) {
    if (e === t) {
      return true;
    }
    var r = e.domain;
    var n = e.range;
    var i = nn(e, nt);
    var a = t.domain;
    var o = t.range;
    var l = nn(t, nr);
    return !!ni(r, a) && !!ni(n, o) && (0, es.propsAreEqual)(i, l);
  }
  var no = e.i(16187);
  var nl = ["type"];
  var nu = ["dangerouslySetInnerHTML", "ticks", "scale"];
  var nc = ["id", "scale"];
  function ns() {
    return (ns = Object.assign.bind()).apply(null, arguments);
  }
  function nf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function nd(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        nf(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        nf(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function np(e, t) {
    if (e == null) {
      return {};
    }
    var r;
    var n;
    var i = function (e, t) {
      if (e == null) {
        return {};
      }
      var r = {};
      for (var n in e) {
        if ({}.hasOwnProperty.call(e, n)) {
          if (t.indexOf(n) !== -1) {
            continue;
          }
          r[n] = e[n];
        }
      }
      return r;
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) {
        r = a[n];
        if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
          i[r] = e[r];
        }
      }
    }
    return i;
  }
  function nh(e) {
    var t = (0, A.useAppDispatch)();
    var n = (0, r.useRef)(null);
    var i = (0, N.useCartesianChartLayout)();
    var a = e.type;
    var o = np(e, nl);
    var l = (0, no.getAxisTypeBasedOnLayout)(i, "xAxis", a);
    var u = (0, r.useMemo)(() => {
      if (l != null) {
        return nd(nd({}, o), {}, {
          type: l
        });
      }
    }, [o, l]);
    (0, r.useLayoutEffect)(() => {
      if (u != null) {
        if (n.current === null) {
          t((0, B.addXAxis)(u));
        } else if (n.current !== u) {
          t((0, B.replaceXAxis)({
            prev: n.current,
            next: u
          }));
        }
        n.current = u;
      }
    }, [u, t]);
    (0, r.useLayoutEffect)(() => () => {
      if (n.current) {
        t((0, B.removeXAxis)(n.current));
        n.current = null;
      }
    }, [t]);
    return null;
  }
  var ny = e => {
    var t = e.xAxisId;
    var n = e.className;
    var a = e.height;
    var o = e.label;
    var l = (0, r.useRef)(null);
    var u = (0, r.useRef)(null);
    var c = (0, A.useAppSelector)(rm.selectAxisViewBox);
    var s = (0, J.useIsPanorama)();
    var f = (0, A.useAppDispatch)();
    var d = "xAxis";
    var p = (0, A.useAppSelector)(e => (0, T.selectTicksOfAxis)(e, d, t, s));
    var h = (0, A.useAppSelector)(e => (0, T.selectXAxisSize)(e, t));
    var y = (0, A.useAppSelector)(e => (0, T.selectXAxisPosition)(e, t));
    var v = (0, A.useAppSelector)(e => (0, T.selectXAxisSettingsNoDefaults)(e, t));
    (0, r.useLayoutEffect)(() => {
      if (a === "auto" && !!h && !(0, ta.isLabelContentAFunction)(o) && !(0, r.isValidElement)(o) && v != null) {
        var e = l.current;
        if (e) {
          var n = e.getCalculatedHeight();
          if (Math.round(h.height) !== Math.round(n)) {
            f((0, B.updateXAxisHeight)({
              id: t,
              height: n
            }));
          }
        }
      }
    }, [p, h, f, o, t, a, v]);
    if (h == null || y == null || v == null) {
      return null;
    }
    e.dangerouslySetInnerHTML;
    e.ticks;
    e.scale;
    var m = np(e, nu);
    v.id;
    v.scale;
    var g = np(v, nc);
    return r.createElement(tx, ns({}, m, g, {
      ref: l,
      labelRef: u,
      x: y.x,
      y: y.y,
      width: h.width,
      height: h.height,
      className: (0, i.clsx)(`recharts-${d} ${d}`, n),
      viewBox: c,
      ticks: p,
      axisType: d,
      axisId: t
    }));
  };
  var nv = {
    allowDataOverflow: T.implicitXAxis.allowDataOverflow,
    allowDecimals: T.implicitXAxis.allowDecimals,
    allowDuplicatedCategory: T.implicitXAxis.allowDuplicatedCategory,
    angle: T.implicitXAxis.angle,
    axisLine: th.axisLine,
    height: T.implicitXAxis.height,
    hide: false,
    includeHidden: T.implicitXAxis.includeHidden,
    interval: T.implicitXAxis.interval,
    label: false,
    minTickGap: T.implicitXAxis.minTickGap,
    mirror: T.implicitXAxis.mirror,
    orientation: T.implicitXAxis.orientation,
    padding: T.implicitXAxis.padding,
    reversed: T.implicitXAxis.reversed,
    scale: T.implicitXAxis.scale,
    tick: T.implicitXAxis.tick,
    tickCount: T.implicitXAxis.tickCount,
    tickLine: th.tickLine,
    tickSize: th.tickSize,
    type: T.implicitXAxis.type,
    niceTicks: T.implicitXAxis.niceTicks,
    xAxisId: 0
  };
  var _Component2 = r.memo(e => {
    var t = (0, ea.resolveDefaultProps)(e, nv);
    return r.createElement(r.Fragment, null, r.createElement(nh, {
      allowDataOverflow: t.allowDataOverflow,
      allowDecimals: t.allowDecimals,
      allowDuplicatedCategory: t.allowDuplicatedCategory,
      angle: t.angle,
      dataKey: t.dataKey,
      domain: t.domain,
      height: t.height,
      hide: t.hide,
      id: t.xAxisId,
      includeHidden: t.includeHidden,
      interval: t.interval,
      minTickGap: t.minTickGap,
      mirror: t.mirror,
      name: t.name,
      orientation: t.orientation,
      padding: t.padding,
      reversed: t.reversed,
      scale: t.scale,
      tick: t.tick,
      tickCount: t.tickCount,
      tickFormatter: t.tickFormatter,
      ticks: t.ticks,
      type: t.type,
      unit: t.unit,
      niceTicks: t.niceTicks
    }), r.createElement(ny, t));
  }, na);
  _Component2.displayName = "XAxis";
  var ng = ["type"];
  var nb = ["dangerouslySetInnerHTML", "ticks", "scale"];
  var nx = ["id", "scale"];
  function nw() {
    return (nw = Object.assign.bind()).apply(null, arguments);
  }
  function nO(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function nA(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        nO(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        nO(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function nS(e, t) {
    if (e == null) {
      return {};
    }
    var r;
    var n;
    var i = function (e, t) {
      if (e == null) {
        return {};
      }
      var r = {};
      for (var n in e) {
        if ({}.hasOwnProperty.call(e, n)) {
          if (t.indexOf(n) !== -1) {
            continue;
          }
          r[n] = e[n];
        }
      }
      return r;
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) {
        r = a[n];
        if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
          i[r] = e[r];
        }
      }
    }
    return i;
  }
  function nE(e) {
    var t = (0, A.useAppDispatch)();
    var n = (0, r.useRef)(null);
    var i = (0, N.useCartesianChartLayout)();
    var a = e.type;
    var o = nS(e, ng);
    var l = (0, no.getAxisTypeBasedOnLayout)(i, "yAxis", a);
    var u = (0, r.useMemo)(() => {
      if (l != null) {
        return nA(nA({}, o), {}, {
          type: l
        });
      }
    }, [l, o]);
    (0, r.useLayoutEffect)(() => {
      if (u != null) {
        if (n.current === null) {
          t((0, B.addYAxis)(u));
        } else if (n.current !== u) {
          t((0, B.replaceYAxis)({
            prev: n.current,
            next: u
          }));
        }
        n.current = u;
      }
    }, [u, t]);
    (0, r.useLayoutEffect)(() => () => {
      if (n.current) {
        t((0, B.removeYAxis)(n.current));
        n.current = null;
      }
    }, [t]);
    return null;
  }
  function nP(e) {
    var t = e.yAxisId;
    var n = e.className;
    var a = e.width;
    var o = e.label;
    var l = (0, r.useRef)(null);
    var u = (0, r.useRef)(null);
    var c = (0, A.useAppSelector)(rm.selectAxisViewBox);
    var s = (0, J.useIsPanorama)();
    var f = (0, A.useAppDispatch)();
    var d = "yAxis";
    var p = (0, A.useAppSelector)(e => (0, T.selectYAxisSize)(e, t));
    var h = (0, A.useAppSelector)(e => (0, T.selectYAxisPosition)(e, t));
    var y = (0, A.useAppSelector)(e => (0, T.selectTicksOfAxis)(e, d, t, s));
    var v = (0, A.useAppSelector)(e => (0, T.selectYAxisSettingsNoDefaults)(e, t));
    (0, r.useLayoutEffect)(() => {
      if (a === "auto" && !!p && !(0, ta.isLabelContentAFunction)(o) && !(0, r.isValidElement)(o) && v != null) {
        var e = l.current;
        if (e) {
          var n = e.getCalculatedWidth();
          if (Math.round(p.width) !== Math.round(n)) {
            f((0, B.updateYAxisWidth)({
              id: t,
              width: n
            }));
          }
        }
      }
    }, [y, p, f, o, t, a, v]);
    if (p == null || h == null || v == null) {
      return null;
    }
    e.dangerouslySetInnerHTML;
    e.ticks;
    e.scale;
    var m = nS(e, nb);
    v.id;
    v.scale;
    var g = nS(v, nx);
    return r.createElement(tx, nw({}, m, g, {
      ref: l,
      labelRef: u,
      x: h.x,
      y: h.y,
      tickTextProps: a === "auto" ? {
        width: undefined
      } : {
        width: a
      },
      width: p.width,
      height: p.height,
      className: (0, i.clsx)(`recharts-${d} ${d}`, n),
      viewBox: c,
      ticks: y,
      axisType: d,
      axisId: t
    }));
  }
  var nj = {
    allowDataOverflow: T.implicitYAxis.allowDataOverflow,
    allowDecimals: T.implicitYAxis.allowDecimals,
    allowDuplicatedCategory: T.implicitYAxis.allowDuplicatedCategory,
    angle: T.implicitYAxis.angle,
    axisLine: th.axisLine,
    hide: false,
    includeHidden: T.implicitYAxis.includeHidden,
    interval: T.implicitYAxis.interval,
    label: false,
    minTickGap: T.implicitYAxis.minTickGap,
    mirror: T.implicitYAxis.mirror,
    orientation: T.implicitYAxis.orientation,
    padding: T.implicitYAxis.padding,
    reversed: T.implicitYAxis.reversed,
    scale: T.implicitYAxis.scale,
    tick: T.implicitYAxis.tick,
    tickCount: T.implicitYAxis.tickCount,
    tickLine: th.tickLine,
    tickSize: th.tickSize,
    type: T.implicitYAxis.type,
    niceTicks: T.implicitYAxis.niceTicks,
    width: T.implicitYAxis.width,
    yAxisId: 0
  };
  var _Component3 = r.memo(e => {
    var t = (0, ea.resolveDefaultProps)(e, nj);
    return r.createElement(r.Fragment, null, r.createElement(nE, {
      interval: t.interval,
      id: t.yAxisId,
      scale: t.scale,
      type: t.type,
      domain: t.domain,
      allowDataOverflow: t.allowDataOverflow,
      dataKey: t.dataKey,
      allowDuplicatedCategory: t.allowDuplicatedCategory,
      allowDecimals: t.allowDecimals,
      tickCount: t.tickCount,
      padding: t.padding,
      includeHidden: t.includeHidden,
      reversed: t.reversed,
      ticks: t.ticks,
      width: t.width,
      orientation: t.orientation,
      mirror: t.mirror,
      hide: t.hide,
      unit: t.unit,
      name: t.name,
      angle: t.angle,
      minTickGap: t.minTickGap,
      tick: t.tick,
      tickFormatter: t.tickFormatter,
      niceTicks: t.niceTicks
    }), r.createElement(nP, t));
  }, na);
  _Component3.displayName = "YAxis";
  var nI = e.i(28719);
  let nC = [{
    key: "success",
    label: "สำเร็จ",
    color: "#22c55e"
  }, {
    key: "failed",
    label: "ผิดพลาด",
    color: "#ef4444"
  }, {
    key: "pending",
    label: "ติดอนุมัติ",
    color: "#eab308"
  }];
  let nT = [{
    label: "1 วัน",
    value: 1
  }, {
    label: "7 วัน",
    value: 7
  }, {
    label: "30 วัน",
    value: 30
  }, {
    label: "90 วัน",
    value: 90
  }];
  e.s(["default", 0, () => {
    let [e, n] = (0, r.useState)(1);
    let {
      dailyStats: i,
      fetchDailyStats: a,
      initStatsListeners: o
    } = (0, nI.useStatsStore)();
    (0, r.useEffect)(() => {
      a(e);
    }, [e, a]);
    (0, r.useEffect)(() => {
      let e = o();
      return () => e();
    }, [o]);
    let l = (0, r.useMemo)(() => {
      if (e === 1) {
        if (i && i.length > 0 && i[0]?.date?.includes(":")) {
          return i.map(e => {
            let t = e.total || e.success + e.failed + e.pending;
            return {
              date: e.date,
              total: t,
              success: e.success,
              failed: e.failed,
              pending: e.pending
            };
          });
        } else {
          return ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"].map(e => ({
            date: e,
            total: 0,
            success: 0,
            failed: 0,
            pending: 0
          }));
        }
      }
      if (i && i.length > 0) {
        return i.map(e => {
          let t = e.total || e.success + e.failed + e.pending;
          return {
            date: function (e) {
              try {
                let t = e.split("-");
                if (t.length === 3) {
                  return new Date(Number(t[0]), Number(t[1]) - 1, Number(t[2])).toLocaleDateString("th-TH", {
                    day: "numeric",
                    month: "short"
                  });
                }
                return e;
              } catch {
                return e;
              }
            }(e.date),
            total: t,
            success: e.success,
            failed: e.failed,
            pending: e.pending
          };
        });
      }
      let t = [];
      let r = new Date();
      for (let n = e - 1; n >= 0; n--) {
        let e = new Date(r);
        e.setDate(e.getDate() - n);
        t.push({
          date: e.toLocaleDateString("th-TH", {
            day: "numeric",
            month: "short"
          }),
          total: 0,
          success: 0,
          failed: 0,
          pending: 0
        });
      }
      return t;
    }, [i, e]);
    let u = (0, r.useMemo)(() => {
      let e = 0;
      for (let t of l) {
        let r = t.total ?? t.success + t.failed + t.pending;
        if (r > e) {
          e = r;
        }
      }
      return e;
    }, [l]);
    return <div className="group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-neutral-950 shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)] transition-all duration-200 ease-out"><div className="pointer-events-none absolute inset-x-3 top-0 z-20 h-px bg-white/20" /><div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-white/[0.04] blur-2xl transition-all duration-300 group-hover:bg-white/[0.07]" /><div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/20 to-transparent" /><div className="relative z-10 flex items-center justify-between px-6 py-5"><div><h2 className="text-sm font-semibold text-white">สถิติการทำงาน</h2><p className="mt-1 text-xs text-neutral-500">ภาพรวมกิจกรรมในช่วงเวลาที่เลือก</p></div><div className="flex items-center rounded-lg border border-white/10 bg-white/[0.03] p-1">{nT.map(r => <button onClick={() => n(r.value)} className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${e === r.value ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"}`} key={r.value}>{r.label}</button>)}</div></div><div className="h-[240px] w-full px-3 pb-5"><r9.ResponsiveContainer width="100%" height="100%" style={{
          outline: "none"
        }}><_Component7 accessibilityLayer={false} style={{
            outline: "none"
          }} data={l} margin={{
            top: 10,
            right: 12,
            left: -8,
            bottom: 0
          }}><defs>{nC.map(e => <linearGradient id={`${e.key}Gradient`} x1="0" y1="0" x2="0" y2="1" key={e.key}><stop offset="0%" stopColor={e.color} stopOpacity={0.3} /><stop offset="100%" stopColor={e.color} stopOpacity={0} /></linearGradient>)}</defs><_Component vertical={false} stroke="rgba(255,255,255,0.06)" /><_Component2 dataKey="date" axisLine={false} tickLine={false} tickMargin={10} minTickGap={e === 90 ? 24 : e === 30 ? 16 : 8} tick={{
              fill: "#737373",
              fontSize: 11
            }} /><_Component3 axisLine={false} tickLine={false} tickMargin={8} width={36} allowDecimals={false} domain={[0, () => Math.max(u, 4)]} tick={{
              fill: "#737373",
              fontSize: 11
            }} tickFormatter={e => e >= 1000 ? `${(e / 1000).toFixed(1)}k` : String(e)} /><ne.Tooltip cursor={{
              stroke: "rgba(255,255,255,0.12)"
            }} content={({
              active: e,
              payload: r,
              label: n
            }) => {
              if (!e || !r?.length) {
                return null;
              }
              let i = l.find(e => e.date === n);
              let a = i?.total ?? r.reduce((e, t) => e + Number(t.value || 0), 0);
              return <div className="rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 shadow-xl"><div className="flex items-center justify-between gap-4 border-b border-white/10 pb-1.5 mb-1.5"><p className="text-[11px] font-medium text-neutral-400">{n}</p><span className="text-[11px] font-semibold text-sky-400">รวม {a.toLocaleString("th-TH")}</span></div><div className="space-y-0.5">{r.filter(e => e.dataKey !== "total").map(e => {
                    let r = nC.find(t => t.key === String(e.dataKey));
                    return <div className="flex items-center justify-between gap-3 text-xs font-semibold text-white" key={String(e.dataKey)}><div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full" style={{
                          backgroundColor: e.color
                        }} /><span className="font-normal text-neutral-300">{r?.label ?? String(e.dataKey)}</span></div><span>{Number(e.value ?? 0).toLocaleString("th-TH")}</span></div>;
                  })}</div></div>;
            }} /><_Component4 iconType="circle" iconSize={8} wrapperStyle={{
              fontSize: 11,
              color: "#a3a3a3",
              paddingTop: 12
            }} />{nC.map(e => <_Component5 type="monotone" dataKey={e.key} name={e.label} stroke={e.color} strokeWidth={2} fill={`url(#${e.key}Gradient)`} dot={false} activeDot={{
              r: 4,
              strokeWidth: 2,
              stroke: e.color,
              fill: "#171717"
            }} key={e.key} />)}<_Component6 type="monotone" dataKey="total" name="ทั้งหมด" stroke="#38bdf8" strokeWidth={1.5} strokeDasharray="4 4" dot={false} activeDot={{
              r: 4,
              strokeWidth: 2,
              stroke: "#38bdf8",
              fill: "#0f172a"
            }} /></_Component7></r9.ResponsiveContainer></div></div>;
  }], 47412);
}, 52353, e => {
  "use strict";

  var t = e.i(66497);
  var r = e.i(10977);
  var _Component8 = e => null;
  _Component8.displayName = "Cell";
  var i = e.i(52089);
  var a = e.i(79519);
  var o = e.i(79896);
  var l = e.i(80101);
  var u = e.i(58467);
  var c = e.i(78450);
  var s = e.i(6588);
  var f = e.i(64214);
  var d = e.i(97386);
  var p = e.i(50512);
  var h = e.i(43913);
  var y = e.i(39862);
  var v = e => e.graphicalItems.polarItems;
  var m = (0, o.createSelector)([d.pickAxisType, p.pickAxisId], s.itemAxisPredicate);
  var g = (0, o.createSelector)([v, s.selectBaseAxis, m], s.combineGraphicalItemsSettings);
  var b = (0, o.createSelector)([g], s.combineGraphicalItemsData);
  var x = (0, o.createSelector)([b, l.selectChartDataAndAlwaysIgnoreIndexes], s.combineDisplayedData);
  var w = (0, o.createSelector)([x, s.selectBaseAxis, g], s.combineAppliedValues);
  (0, o.createSelector)([x, s.selectBaseAxis, g], (e, t, r) => r.length > 0 ? e.flatMap(e => r.flatMap(r => {
    return {
      value: (0, c.getValueByDataKey)(e, t.dataKey ?? r.dataKey),
      errorDomain: []
    };
  })).filter(Boolean) : (t == null ? undefined : t.dataKey) != null ? e.map(e => ({
    value: (0, c.getValueByDataKey)(e, t.dataKey),
    errorDomain: []
  })) : e.map(e => ({
    value: e,
    errorDomain: []
  })));
  var O = () => undefined;
  var A = (0, o.createSelector)([x, s.selectBaseAxis, g, s.selectAllErrorBarSettings, d.pickAxisType, l.selectChartDataSliceIgnoringIndexes], s.combineDomainOfAllAppliedNumericalValuesIncludingErrorValues);
  var S = (0, o.createSelector)([s.selectBaseAxis, s.selectDomainDefinition, s.selectDomainFromUserPreference, O, A, O, f.selectChartLayout, d.pickAxisType], s.combineNumericalDomain);
  var E = (0, o.createSelector)([s.selectBaseAxis, f.selectChartLayout, x, w, h.selectStackOffsetType, d.pickAxisType, S], s.combineAxisDomain);
  var P = (0, o.createSelector)([E, s.selectRenderableAxisSettings, s.selectRealScaleType], s.combineNiceTicks);
  var j = (0, o.createSelector)([s.selectBaseAxis, E, P, d.pickAxisType], s.combineAxisDomainWithNiceTicks);
  function k(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function I(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        k(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        k(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  (0, o.createSelector)([s.selectRealScaleType, j], y.combineCheckedDomain);
  var C = (0, o.createSelector)([v, (e, t) => t], (e, t) => e.filter(e => e.type === "pie").find(e => e.id === t));
  var T = [];
  var M = (e, t, r) => (r == null ? undefined : r.length) === 0 ? T : r;
  var _ = (0, o.createSelector)([l.selectChartDataAndAlwaysIgnoreIndexes, C, M], (e, t, r) => {
    var n;
    var i = e.chartData;
    if (t != null && ((n = (t == null ? undefined : t.data) != null && t.data.length > 0 ? t.data : i) && n.length || r == null || (n = r.map(e => I(I({}, t.presentationProps), e.props))), n != null)) {
      return n;
    }
  });
  var D = (0, o.createSelector)([_, C, M], (e, t, r) => {
    if (e != null && t != null) {
      return e.map((e, n) => {
        var i;
        var a;
        var o = (0, c.getValueByDataKey)(e, t.nameKey, t.name);
        a = r != null && (i = r[n]) != null && (i = i.props) != null && i.fill ? r[n].props.fill : typeof e == "object" && e != null && "fill" in e ? e.fill : t.fill;
        return {
          value: (0, c.getTooltipNameProp)(o, t.dataKey),
          dataKey: t.dataKey,
          color: a,
          payload: e,
          type: t.legendType
        };
      });
    }
  });
  var N = (0, o.createSelector)([_, C, M, u.selectChartOffsetInternal], (e, t, r, n) => {
    if (t != null && e != null) {
      return function (e) {
        var r;
        var n;
        var i = e.pieSettings;
        var a = e.displayedData;
        var o = e.cells;
        var l = e.offset;
        var u = i.cornerRadius;
        var s = i.startAngle;
        var f = i.endAngle;
        var d = i.dataKey;
        var p = i.nameKey;
        var h = i.tooltipType;
        var y = Math.abs(i.minAngle);
        var v = (0, K.mathSign)(f - s) * Math.min(Math.abs(f - s), 360);
        var m = Math.abs(v);
        var g = a.length <= 1 ? 0 : i.paddingAngle ?? 0;
        var b = a.filter(e => (0, c.getValueByDataKey)(e, d, 0) !== 0).length;
        var x = a.reduce((e, t) => {
          var r = (0, c.getValueByDataKey)(t, d, 0);
          return e + ((0, K.isNumber)(r) ? r : 0);
        }, 0);
        var w = y > 0 && x > 0 && a.some(e => {
          var t = (0, c.getValueByDataKey)(e, d, 0);
          var r = ((0, K.isNumber)(t) ? t : 0) / x;
          return t !== 0 && r * m < y;
        }) ? y : 0;
        var O = m - b * w - (m >= 360 ? b : b - 1) * g;
        if (x > 0) {
          r = a.map((e, t) => {
            var r;
            var a;
            var f;
            var y;
            var m;
            var b;
            var A;
            var S;
            var E;
            var P = (0, c.getValueByDataKey)(e, d, 0);
            var j = (0, c.getValueByDataKey)(e, p, t);
            r = l.top;
            a = l.left;
            f = l.width;
            y = l.height;
            m = (0, $.getMaxRadius)(f, y);
            b = a + (0, K.getPercentValue)(i.cx, f, f / 2);
            A = r + (0, K.getPercentValue)(i.cy, y, y / 2);
            var k = {
              cx: b,
              cy: A,
              innerRadius: (0, K.getPercentValue)(i.innerRadius, m, 0),
              outerRadius: (S = i.outerRadius, typeof S == "function" ? (0, K.getPercentValue)(S(e), m, m * 0.8) : (0, K.getPercentValue)(S, m, m * 0.8)),
              maxRadius: i.maxRadius || Math.sqrt(f * f + y * y) / 2
            };
            var I = ((0, K.isNumber)(P) ? P : 0) / x;
            var C = ey(ey({}, e), o && o[t] && o[t].props);
            var T = C != null && "fill" in C && typeof C.fill == "string" ? C.fill : i.fill;
            var M = (E = t ? n.endAngle + (0, K.mathSign)(v) * g * (P !== 0) : s) + (0, K.mathSign)(v) * ((P !== 0 ? w : 0) + I * O);
            var _ = (E + M) / 2;
            var D = (k.innerRadius + k.outerRadius) / 2;
            var N = [{
              name: j,
              value: P,
              payload: C,
              dataKey: d,
              type: h,
              color: T,
              fill: T,
              graphicalItemId: i.id
            }];
            var L = (0, $.polarToCartesian)(k.cx, k.cy, D, _);
            return n = ey(ey(ey(ey({}, i.presentationProps), {}, {
              percent: I,
              cornerRadius: typeof u == "string" ? parseFloat(u) : u,
              name: j,
              tooltipPayload: N,
              midAngle: _,
              middleRadius: D,
              tooltipPosition: L
            }, C), k), {}, {
              value: P,
              dataKey: d,
              startAngle: E,
              endAngle: M,
              payload: C,
              paddingAngle: P !== 0 ? (0, K.mathSign)(v) * g : 0
            });
          });
        }
        return r;
      }({
        offset: n,
        pieSettings: t,
        displayedData: e,
        cells: r
      });
    }
  });
  var L = e.i(19379);
  var R = e.i(53108);
  var z = e.i(22124);
  var B = e.i(12144);
  var F = e.i(96013);
  var U = e.i(34440);
  var $ = e.i(75699);
  var K = e.i(130);
  var W = e.i(43287);
  var V = e.i(13627);
  var H = e.i(87957);
  var G = e.i(60909);
  var Y = e.i(53926);
  var q = e.i(3850);
  var X = e.i(35001);
  var Z = e.i(56383);
  var Q = e.i(68444);
  var J = e.i(19966);
  var ee = e.i(1480);
  var et = e.i(4874);
  var er = e.i(58657);
  var en = e.i(64237);
  var ei = e.i(20722);
  var ea = e.i(35304);
  var eo = e.i(30671);
  var el = e.i(9919);
  var eu = ["key"];
  var ec = ["onMouseEnter", "onClick", "onMouseLeave"];
  var es = ["id"];
  var ef = ["id"];
  function ed() {
    return (ed = Object.assign.bind()).apply(null, arguments);
  }
  function ep(e, t) {
    if (e == null) {
      return {};
    }
    var r;
    var n;
    var i = function (e, t) {
      if (e == null) {
        return {};
      }
      var r = {};
      for (var n in e) {
        if ({}.hasOwnProperty.call(e, n)) {
          if (t.indexOf(n) !== -1) {
            continue;
          }
          r[n] = e[n];
        }
      }
      return r;
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) {
        r = a[n];
        if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
          i[r] = e[r];
        }
      }
    }
    return i;
  }
  function eh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function ey(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        eh(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        eh(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  var ev = B.Sector;
  function em(e) {
    var t = (0, r.useMemo)(() => (0, U.findAllByType)(e.children, _Component8), [e.children]);
    var i = (0, L.useAppSelector)(r => D(r, e.id, t));
    if (i == null) {
      return null;
    } else {
      return r.createElement(q.SetPolarLegendPayload, {
        legendPayload: i
      });
    }
  }
  var eg = r.memo(e => {
    var t = e.dataKey;
    var n = e.nameKey;
    var i = e.sectors;
    var a = e.stroke;
    var o = e.strokeWidth;
    var l = e.fill;
    var u = e.name;
    var s = e.hide;
    var f = e.tooltipType;
    var d = e.formatter;
    var p = e.id;
    var h = function (e) {
      if (e != null && typeof e != "boolean" && typeof e != "function") {
        if (r.isValidElement(e)) {
          var t;
          var n = (t = e.props) == null ? undefined : t.fill;
          if (typeof n == "string") {
            return n;
          } else {
            return undefined;
          }
        }
        var i = e.fill;
        if (typeof i == "string") {
          return i;
        } else {
          return undefined;
        }
      }
    }(e.activeShape);
    var y = {
      dataDefinedOnItem: i.map(e => {
        var t = e.tooltipPayload;
        if (h == null || t == null) {
          return t;
        } else {
          return t.map(e => ey(ey({}, e), {}, {
            color: h,
            fill: h
          }));
        }
      }),
      getPosition: e => {
        var t;
        if ((t = i[Number(e)]) == null) {
          return undefined;
        } else {
          return t.tooltipPosition;
        }
      },
      settings: {
        stroke: a,
        strokeWidth: o,
        fill: l,
        dataKey: t,
        nameKey: n,
        name: (0, c.getTooltipNameProp)(u, t),
        hide: s,
        type: f,
        color: l,
        unit: "",
        formatter: d,
        graphicalItemId: p
      }
    };
    return r.createElement(G.SetTooltipEntrySettings, {
      tooltipEntrySettings: y
    });
  });
  function eb(e) {
    var t = e.sectors;
    var n = e.props;
    var i = e.showLabels;
    var o = n.label;
    var l = n.labelLine;
    var u = n.dataKey;
    if (!i || !o || !t) {
      return null;
    }
    var s = (0, er.svgPropertiesNoEvents)(n);
    var f = (0, er.svgPropertiesNoEventsFromUnknown)(o);
    var d = (0, er.svgPropertiesNoEventsFromUnknown)(l);
    var p = typeof o == "object" && "offsetRadius" in o && typeof o.offsetRadius == "number" && o.offsetRadius || 20;
    var h = t.map((e, t) => {
      var n;
      var i;
      var h = (e.startAngle + e.endAngle) / 2;
      var y = (0, $.polarToCartesian)(e.cx, e.cy, e.outerRadius + p, h);
      var v = ey(ey(ey(ey({}, s), e), {}, {
        stroke: "none"
      }, f), {}, {
        index: t,
        textAnchor: (n = y.x) > (i = e.cx) ? "start" : n < i ? "end" : "middle"
      }, y);
      var m = ey(ey(ey(ey({}, s), e), {}, {
        fill: "none",
        stroke: e.fill
      }, d), {}, {
        index: t,
        points: [(0, $.polarToCartesian)(e.cx, e.cy, e.outerRadius, h), y],
        key: "line"
      });
      return r.createElement(ea.ZIndexLayer, {
        zIndex: eo.DefaultZIndexes.label,
        key: `label-${e.startAngle}-${e.endAngle}-${e.midAngle}-${t}`
      }, r.createElement(R.Layer, null, l && ((e, t) => {
        if (r.isValidElement(e)) {
          return r.cloneElement(e, t);
        }
        if (typeof e == "function") {
          return e(t);
        }
        var n = (0, a.clsx)("recharts-pie-label-line", typeof e != "boolean" ? e.className : "");
        t.key;
        var i = ep(t, eu);
        return r.createElement(z.Curve, ed({}, i, {
          type: "linear",
          className: n
        }));
      })(l, m), ((e, t, n) => {
        if (r.isValidElement(e)) {
          return r.cloneElement(e, t);
        }
        var i = n;
        if (typeof e == "function" && (i = e(t), r.isValidElement(i))) {
          return i;
        }
        var o = (0, a.clsx)("recharts-pie-label-text", (0, el.getClassNameFromUnknown)(e));
        return r.createElement(F.Text, ed({}, t, {
          alignmentBaseline: "middle",
          className: o
        }), i);
      })(o, v, (0, c.getValueByDataKey)(e, u))));
    });
    return r.createElement(R.Layer, {
      className: "recharts-pie-labels"
    }, h);
  }
  function ex(e) {
    var t = e.sectors;
    var n = e.props;
    var i = e.showLabels;
    var a = n.label;
    if (typeof a == "object" && a != null && "position" in a) {
      return r.createElement(en.LabelListFromLabelProp, {
        label: a
      });
    } else {
      return r.createElement(eb, {
        sectors: t,
        props: n,
        showLabels: i
      });
    }
  }
  function ew(e) {
    var t;
    var n;
    var i;
    var a;
    var o;
    var l = e.sectors;
    var u = e.activeShape;
    var c = e.inactiveShape;
    var s = e.allOtherPieProps;
    var f = e.shape;
    var d = e.id;
    var p = e.animationElapsedTime;
    var h = e.isAnimating;
    var y = e.isEntrance;
    var v = (0, L.useAppSelector)(Y.selectActiveTooltipIndex);
    var m = (0, L.useAppSelector)(Y.selectActiveTooltipDataKey);
    var g = (0, L.useAppSelector)(Y.selectActiveTooltipGraphicalItemId);
    var b = s.onMouseEnter;
    var x = s.onClick;
    var w = s.onMouseLeave;
    var O = ep(s, ec);
    t = s.dataKey;
    n = (0, L.useAppDispatch)();
    var A = (e, r) => i => {
      if (b != null) {
        b(e, r, i);
      }
      n((0, H.setActiveMouseOverItemIndex)({
        activeIndex: String(r),
        activeDataKey: t,
        activeCoordinate: e.tooltipPosition,
        activeGraphicalItemId: d
      }));
    };
    i = (0, L.useAppDispatch)();
    var S = (e, t) => r => {
      if (w != null) {
        w(e, t, r);
      }
      i((0, H.mouseLeaveItem)());
    };
    a = s.dataKey;
    o = (0, L.useAppDispatch)();
    var E = (e, t) => r => {
      if (x != null) {
        x(e, t, r);
      }
      o((0, H.setActiveClickItemIndex)({
        activeIndex: String(t),
        activeDataKey: a,
        activeCoordinate: e.tooltipPosition,
        activeGraphicalItemId: d
      }));
    };
    if (l == null || l.length === 0) {
      return null;
    } else {
      return r.createElement(r.Fragment, null, l.map((e, t) => {
        if ((e == null ? undefined : e.startAngle) === 0 && (e == null ? undefined : e.endAngle) === 0 && l.length !== 1) {
          return null;
        }
        var n = g == null || g === d;
        var i = String(t) === v && (m == null || s.dataKey === m) && n;
        var a = u && i ? u : v ? c : null;
        var o = ey(ey({}, e), {}, {
          stroke: e.stroke,
          tabIndex: -1,
          index: t,
          isActive: i,
          animationElapsedTime: p,
          isAnimating: h,
          isEntrance: y,
          [X.DATA_ITEM_INDEX_ATTRIBUTE_NAME]: t,
          [X.DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]: d
        });
        return r.createElement(R.Layer, ed({
          key: `sector-${e == null ? undefined : e.startAngle}-${e == null ? undefined : e.endAngle}-${e.midAngle}-${t}`,
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, (0, W.adaptEventsOfChild)(O, e, t), {
          onMouseEnter: A(e, t),
          onMouseLeave: S(e, t),
          onClick: E(e, t)
        }), r.createElement(V.Shape, {
          option: a ?? f,
          DefaultShape: ev,
          shapeProps: o
        }));
      }));
    }
  }
  function eO(e) {
    var t = e.showLabels;
    var n = e.sectors;
    var i = e.children;
    var a = (0, r.useMemo)(() => t && n ? n.map(e => ({
      value: e.value,
      payload: e.payload,
      clockWise: false,
      parentViewBox: undefined,
      viewBox: {
        cx: e.cx,
        cy: e.cy,
        innerRadius: e.innerRadius,
        outerRadius: e.outerRadius,
        startAngle: e.startAngle,
        endAngle: e.endAngle,
        clockWise: false
      },
      fill: e.fill
    })) : [], [n, t]);
    return r.createElement(en.PolarLabelListContextProvider, {
      value: t ? a : undefined
    }, i);
  }
  function eA(e) {
    var o = e.props;
    var l = e.previousSectorsRef;
    var u = e.id;
    var c = o.sectors;
    var s = o.activeShape;
    var d = o.inactiveShape;
    var p = o.animationInterpolateFn;
    var h = (0, Z.useAnimationCallbacks)(o.onAnimationStart, o.onAnimationEnd);
    var y = h.isAnimating;
    var v = h.handleAnimationStart;
    var m = h.handleAnimationEnd;
    var g = (0, f.usePolarChartLayout)();
    if (g == null) {
      return null;
    }
    var b = c[0];
    return r.createElement(eO, {
      showLabels: !y,
      sectors: c
    }, r.createElement(Z.AnimatedItems, {
      animationInput: o,
      animationIdPrefix: "recharts-pie-",
      items: c,
      previousItemsRef: l,
      isAnimationActive: o.isAnimationActive,
      animationBegin: o.animationBegin,
      animationDuration: o.animationDuration,
      animationEasing: o.animationEasing,
      onAnimationStart: v,
      onAnimationEnd: m,
      animationInterpolateFn: p,
      animationMatchBy: o.animationMatchBy,
      layout: g
    }, (e, t, n) => r.createElement(R.Layer, null, r.createElement(ew, {
      sectors: e,
      activeShape: s,
      inactiveShape: d,
      allOtherPieProps: o,
      shape: o.shape,
      id: u,
      animationElapsedTime: t,
      isAnimating: y || t < 1,
      isEntrance: n
    }))), r.createElement(ex, {
      showLabels: !y,
      sectors: c,
      props: o
    }), r.createElement(ei.PolarLabelContextProvider, {
      cx: (b == null ? undefined : b.cx) ?? 0,
      cy: (b == null ? undefined : b.cy) ?? 0,
      innerRadius: (b == null ? undefined : b.innerRadius) ?? 0,
      outerRadius: (b == null ? undefined : b.outerRadius) ?? 0,
      startAngle: o.startAngle,
      endAngle: o.endAngle,
      clockWise: false
    }, o.children));
  }
  var eS = {
    animationBegin: 400,
    animationDuration: 1500,
    animationEasing: "ease",
    animationInterpolateFn: (e, t) => {
      if (e == null) {
        return [];
      }
      var r = [];
      var n = e.find(e => e.status !== "removed");
      var a = n ? n.next.startAngle : 0;
      e.forEach((e, n) => {
        if (e.status !== "removed") {
          var o = n > 0 ? (0, i.default)(e.next, "paddingAngle", 0) : 0;
          if (e.status === "matched") {
            var l = (0, K.interpolate)(e.prev.endAngle - e.prev.startAngle, e.next.endAngle - e.next.startAngle, t);
            var u = ey(ey({}, e.next), {}, {
              startAngle: a + o,
              endAngle: a + l + o
            });
            r.push(u);
            a = u.endAngle;
          } else {
            var c = (0, K.interpolate)(0, e.next.endAngle - e.next.startAngle, t);
            var s = ey(ey({}, e.next), {}, {
              startAngle: a + o,
              endAngle: a + c + o
            });
            r.push(s);
            a = s.endAngle;
          }
        }
      });
      return r;
    },
    animationMatchBy: Q.matchAppend,
    cx: "50%",
    cy: "50%",
    dataKey: "value",
    endAngle: 360,
    fill: "#808080",
    hide: false,
    innerRadius: 0,
    isAnimationActive: "auto",
    label: false,
    labelLine: true,
    legendType: "rect",
    minAngle: 0,
    nameKey: "name",
    outerRadius: "80%",
    paddingAngle: 0,
    rootTabIndex: 0,
    shape: ev,
    startAngle: 0,
    stroke: "#fff",
    zIndex: eo.DefaultZIndexes.area
  };
  function eE(e) {
    var t = e.id;
    var i = ep(e, es);
    var o = e.hide;
    var l = e.className;
    var u = e.rootTabIndex;
    var c = (0, r.useMemo)(() => (0, U.findAllByType)(e.children, _Component8), [e.children]);
    var s = (0, L.useAppSelector)(e => N(e, t, c));
    var f = (0, r.useRef)(null);
    var d = (0, a.clsx)("recharts-pie", l);
    if (o || s == null) {
      f.current = null;
      return r.createElement(R.Layer, {
        tabIndex: u,
        className: d
      });
    } else {
      return r.createElement(ea.ZIndexLayer, {
        zIndex: e.zIndex
      }, r.createElement(eg, {
        dataKey: e.dataKey,
        nameKey: e.nameKey,
        sectors: s,
        stroke: e.stroke,
        strokeWidth: e.strokeWidth,
        fill: e.fill,
        name: e.name,
        hide: e.hide,
        tooltipType: e.tooltipType,
        formatter: e.formatter,
        id: t,
        activeShape: e.activeShape
      }), r.createElement(R.Layer, {
        tabIndex: u,
        className: d
      }, r.createElement(eA, {
        props: ey(ey({}, i), {}, {
          sectors: s
        }),
        previousSectorsRef: f,
        id: t
      })));
    }
  }
  function _Component9(e) {
    var t = (0, J.resolveDefaultProps)(e, eS);
    var n = t.id;
    var i = ep(t, ef);
    var a = (0, er.svgPropertiesNoEvents)(i);
    return r.createElement(ee.RegisterGraphicalItemId, {
      id: n,
      type: "pie"
    }, e => r.createElement(r.Fragment, null, r.createElement(et.SetPolarGraphicalItem, {
      type: "pie",
      id: e,
      data: i.data,
      dataKey: i.dataKey,
      hide: i.hide,
      angleAxisId: 0,
      radiusAxisId: 0,
      name: i.name,
      nameKey: i.nameKey,
      tooltipType: i.tooltipType,
      legendType: i.legendType,
      fill: i.fill,
      cx: i.cx,
      cy: i.cy,
      startAngle: i.startAngle,
      endAngle: i.endAngle,
      paddingAngle: i.paddingAngle,
      minAngle: i.minAngle,
      innerRadius: i.innerRadius,
      outerRadius: i.outerRadius,
      cornerRadius: i.cornerRadius,
      presentationProps: a,
      maxRadius: t.maxRadius
    }), r.createElement(em, ed({}, i, {
      id: e
    })), r.createElement(eE, ed({}, i, {
      id: e
    }))));
  }
  _Component9.displayName = "Pie";
  var ej = e.i(62123);
  var ek = e.i(24160);
  var eI = e.i(99545);
  var eC = e.i(25367);
  var eT = e.i(67775);
  var eM = e.i(19779);
  var e_ = e.i(62568);
  function eD(e) {
    var t = (0, L.useAppDispatch)();
    (0, r.useEffect)(() => {
      t((0, e_.updatePolarOptions)(e));
    }, [t, e]);
    return null;
  }
  var eN = e.i(60588);
  var eL = e.i(47071);
  var eR = ["layout"];
  function ez() {
    return (ez = Object.assign.bind()).apply(null, arguments);
  }
  function eB(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  var eF = function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        eB(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        eB(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }({
    accessibilityLayer: true,
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: false,
    syncMethod: "index",
    layout: "radial",
    responsive: false,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }, eL.initialEventSettingsState);
  var eU = (0, r.forwardRef)(function (e, t) {
    var i = (0, J.resolveDefaultProps)(e.categoricalChartProps, eF);
    var a = i.layout;
    var o = function (e, t) {
      if (e == null) {
        return {};
      }
      var r;
      var n;
      var i = function (e, t) {
        if (e == null) {
          return {};
        }
        var r = {};
        for (var n in e) {
          if ({}.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) !== -1) {
              continue;
            }
            r[n] = e[n];
          }
        }
        return r;
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) {
          r = a[n];
          if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
            i[r] = e[r];
          }
        }
      }
      return i;
    }(i, eR);
    var l = e.chartName;
    var u = e.defaultTooltipEventType;
    var c = e.validateTooltipEventTypes;
    var s = e.tooltipPayloadSearcher;
    return r.createElement(ek.RechartsStoreProvider, {
      preloadedState: {
        options: {
          chartName: l,
          defaultTooltipEventType: u,
          validateTooltipEventTypes: c,
          tooltipPayloadSearcher: s,
          eventEmitter: undefined
        }
      },
      reduxStoreName: i.id ?? l
    }, r.createElement(eI.ChartDataContextProvider, {
      chartData: i.data
    }), r.createElement(eC.ReportMainChartProps, {
      layout: a,
      margin: i.margin
    }), r.createElement(eM.ReportEventSettings, {
      throttleDelay: i.throttleDelay,
      throttledEvents: i.throttledEvents
    }), r.createElement(eT.ReportChartProps, {
      baseValue: undefined,
      accessibilityLayer: i.accessibilityLayer,
      barCategoryGap: i.barCategoryGap,
      maxBarSize: i.maxBarSize,
      stackOffset: i.stackOffset,
      barGap: i.barGap,
      barSize: i.barSize,
      syncId: i.syncId,
      syncMethod: i.syncMethod,
      className: i.className,
      reverseStackOrder: i.reverseStackOrder
    }), r.createElement(eD, {
      cx: i.cx,
      cy: i.cy,
      startAngle: i.startAngle,
      endAngle: i.endAngle,
      innerRadius: i.innerRadius,
      outerRadius: i.outerRadius
    }), r.createElement(eN.CategoricalChart, ez({}, o, {
      ref: t
    })));
  });
  function e$(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function eK(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        e$(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        e$(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  var eW = ["item"];
  var eV = eK(eK({}, eF), {}, {
    layout: "centric",
    startAngle: 0,
    endAngle: 360
  });
  var _Component0 = (0, r.forwardRef)((e, t) => {
    var n = (0, J.resolveDefaultProps)(e, eV);
    return r.createElement(eU, {
      chartName: "PieChart",
      defaultTooltipEventType: "item",
      validateTooltipEventTypes: eW,
      tooltipPayloadSearcher: ej.arrayTooltipSearcher,
      categoricalChartProps: n,
      ref: t
    });
  });
  var eG = e.i(10427);
  var eY = e.i(81615);
  var eq = e.i(28719);
  e.s(["default", 0, () => {
    let {
      overallStats: e,
      fetchOverallStats: i,
      initStatsListeners: a
    } = (0, eq.useStatsStore)();
    (0, r.useEffect)(() => {
      i();
      let e = a();
      return () => e();
    }, [i, a]);
    let o = [{
      key: "success",
      label: "สำเร็จ",
      value: e.success,
      color: "#22c55e"
    }, {
      key: "failed",
      label: "ผิดพลาด",
      value: e.failed,
      color: "#ef4444"
    }, {
      key: "pending",
      label: "ติดอนุมัติ",
      value: e.pending,
      color: "#eab308"
    }];
    let l = e.total;
    let u = l === 0;
    let c = u ? [{
      key: "empty",
      label: "ไม่มีข้อมูล",
      value: 1,
      color: "rgba(255,255,255,0.06)"
    }] : o;
    return <div className="group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-neutral-950 shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)] transition-all duration-200 ease-out"><div className="pointer-events-none absolute inset-x-3 top-0 z-20 h-px bg-white/20" /><div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-white/[0.04] blur-2xl transition-all duration-300 group-hover:bg-white/[0.07]" /><div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/20 to-transparent" /><div className="relative z-10 px-6 py-5"><h2 className="text-sm font-semibold text-white">สรุปสถานะการทำงาน</h2><p className="mt-1 text-xs text-neutral-500">สัดส่วนคำขอตามผลลัพธ์การทำงาน</p></div><div className="relative h-[200px] w-full px-3 pb-5"><eG.ResponsiveContainer width="100%" height="100%" style={{
          outline: "none"
        }}><_Component0 accessibilityLayer={false} style={{
            outline: "none"
          }}><eY.Tooltip cursor={false} content={({
              active: e,
              payload: r
            }) => {
              if (!e || !r?.length || u) {
                return null;
              }
              let n = r[0];
              return <div className="rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 shadow-xl"><div className="flex items-center gap-2 text-sm font-semibold text-white"><span className="h-1.5 w-1.5 rounded-full" style={{
                    backgroundColor: n.payload.color
                  }} /><span>{n.payload.label}</span><span>{Number(n.value ?? 0).toLocaleString("th-TH")}</span></div></div>;
            }} /><_Component9 data={c} dataKey="value" nameKey="label" innerRadius="65%" outerRadius="90%" paddingAngle={!u * 3} cornerRadius={4} stroke="none" isAnimationActive={false}>{c.map(e => <_Component8 fill={e.color} key={e.key} />)}</_Component9></_Component0></eG.ResponsiveContainer><div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pb-5"><span className="text-xl font-semibold text-white">{l.toLocaleString("th-TH")}</span><span className="text-[11px] text-neutral-500">รายการทั้งหมด</span></div></div><div className="flex items-center justify-center gap-4 pb-5">{o.map(e => <div className="flex items-center gap-1.5 text-xs text-neutral-400" key={e.key}><span className="h-1.5 w-1.5 rounded-full" style={{
            backgroundColor: e.color
          }} />{e.label}</div>)}</div></div>;
  }], 52353);
}, 14794, e => {
  "use strict";

  var t = e.i(66497);
  var r = e.i(10977);
  var n = e.i(14024);
  var i = e.i(40702);
  var a = e.i(26874);
  var o = e.i(23049);
  var l = e.i(28719);
  e.s(["default", 0, () => {
    let {
      overallStats: e,
      fetchOverallStats: u,
      initStatsListeners: c
    } = (0, l.useStatsStore)();
    (0, r.useEffect)(() => {
      u();
      let e = c();
      return () => e();
    }, [u, c]);
    let s = [{
      label: "ทั้งหมด",
      value: e.total,
      icon: n.ListChecks,
      color: "text-blue-400",
      iconColor: "text-blue-400/20",
      glow: "shadow-blue-500/10"
    }, {
      label: "สำเร็จ",
      value: e.success,
      icon: i.CheckCircle2,
      color: "text-emerald-400",
      iconColor: "text-emerald-400/20",
      glow: "shadow-emerald-500/10"
    }, {
      label: "ผิดพลาด",
      value: e.failed,
      icon: a.XCircle,
      color: "text-red-400",
      iconColor: "text-red-400/20",
      glow: "shadow-red-500/10"
    }, {
      label: "ติดอนุมัติ",
      value: e.pending,
      icon: o.Clock3,
      color: "text-amber-400",
      iconColor: "text-amber-400/20",
      glow: "shadow-amber-500/10"
    }];
    return <div className="grid grid-cols-4 gap-4">{s.map(e => {
        let _Component1 = e.icon;
        return <div className={`
              group relative
              h-[88px]
              overflow-hidden
              rounded-2xl
              bg-neutral-950
              border border-white/[0.12]

              px-4 py-3

              shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]

              transition-all
              duration-200
              ease-out
    
              active:translate-y-[2px]
              active:shadow-[0_3px_0_rgba(0,0,0,0.45),0_6px_12px_rgba(0,0,0,0.25)]
            `} key={e.label}><div className="\n                pointer-events-none\n                absolute inset-x-3 top-0\n                h-px\n                bg-white/20\n              " /><div className="\n                pointer-events-none\n                absolute -left-10 -top-10\n                h-24 w-24\n                rounded-full\n                bg-white/[0.04]\n                blur-2xl\n                transition-all duration-300\n                group-hover:bg-white/[0.07]\n              " /><div className="relative z-10"><p className="text-sm font-medium text-neutral-300">{e.label}</p><p className={`
                  mt-0.5
                  text-3xl
                  font-semibold
                  tracking-tight
                  ${e.color}

                  drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]
                `}>{e.value.toLocaleString()}</p></div><_Component1 size={90} strokeWidth={1.2} className={`
                pointer-events-none
                absolute
                -right-1
                -bottom-4

                ${e.iconColor}

                drop-shadow-[0_3px_4px_rgba(0,0,0,0.4)]

                transition-transform
                duration-300
                group-hover:scale-105
                group-hover:-rotate-3
              `} /><div className="\n                pointer-events-none\n                absolute\n                inset-x-0\n                bottom-0\n                h-4\n                bg-gradient-to-t\n                from-black/20\n                to-transparent\n              " /></div>;
      })}</div>;
  }]);
}, 48198, (e, t, r) => {
  (function (r) {
    "use strict";

    var n;
    var i = {
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    };
    var a = true;
    var o = "[DecimalError] ";
    var l = o + "Invalid argument: ";
    var u = o + "Exponent out of range: ";
    var c = Math.floor;
    var s = Math.pow;
    var f = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var d = c(1286742750677284.5);
    var p = {};
    function h(e, t) {
      var r;
      var n;
      var i;
      var o;
      var l;
      var u;
      var c;
      var s;
      var f = e.constructor;
      var d = f.precision;
      if (!e.s || !t.s) {
        if (!t.s) {
          t = new f(e);
        }
        if (a) {
          return S(t, d);
        } else {
          return t;
        }
      }
      c = e.d;
      s = t.d;
      l = e.e;
      i = t.e;
      c = c.slice();
      if (o = l - i) {
        if (o < 0) {
          n = c;
          o = -o;
          u = s.length;
        } else {
          n = s;
          i = l;
          u = c.length;
        }
        if (o > (u = (l = Math.ceil(d / 7)) > u ? l + 1 : u + 1)) {
          o = u;
          n.length = 1;
        }
        n.reverse();
        while (o--) {
          n.push(0);
        }
        n.reverse();
      }
      if ((u = c.length) - (o = s.length) < 0) {
        o = u;
        n = s;
        s = c;
        c = n;
      }
      r = 0;
      while (o) {
        r = (c[--o] = c[o] + s[o] + r) / 10000000 | 0;
        c[o] %= 10000000;
      }
      if (r) {
        c.unshift(r);
        ++i;
      }
      u = c.length;
      while (c[--u] == 0) {
        c.pop();
      }
      t.d = c;
      t.e = i;
      if (a) {
        return S(t, d);
      } else {
        return t;
      }
    }
    function y(e, t, r) {
      if (e !== ~~e || e < t || e > r) {
        throw Error(l + e);
      }
    }
    function v(e) {
      var t;
      var r;
      var n;
      var i = e.length - 1;
      var a = "";
      var o = e[0];
      if (i > 0) {
        a += o;
        t = 1;
        for (; t < i; t++) {
          if (r = 7 - (n = e[t] + "").length) {
            a += w(r);
          }
          a += n;
        }
        if (r = 7 - (n = (o = e[t]) + "").length) {
          a += w(r);
        }
      } else if (o === 0) {
        return "0";
      }
      while (o % 10 == 0) {
        o /= 10;
      }
      return a + o;
    }
    p.absoluteValue = p.abs = function () {
      var e = new this.constructor(this);
      e.s &&= 1;
      return e;
    };
    p.comparedTo = p.cmp = function (e) {
      var t;
      var r;
      var n;
      var i;
      e = new this.constructor(e);
      if (this.s !== e.s) {
        return this.s || -e.s;
      }
      if (this.e !== e.e) {
        if (this.e > e.e ^ this.s < 0) {
          return 1;
        } else {
          return -1;
        }
      }
      n = this.d.length;
      t = 0;
      r = n < (i = e.d.length) ? n : i;
      for (; t < r; ++t) {
        if (this.d[t] !== e.d[t]) {
          if (this.d[t] > e.d[t] ^ this.s < 0) {
            return 1;
          } else {
            return -1;
          }
        }
      }
      if (n === i) {
        return 0;
      } else if (n > i ^ this.s < 0) {
        return 1;
      } else {
        return -1;
      }
    };
    p.decimalPlaces = p.dp = function () {
      var e = this.d.length - 1;
      var t = (e - this.e) * 7;
      if (e = this.d[e]) {
        for (; e % 10 == 0; e /= 10) {
          t--;
        }
      }
      if (t < 0) {
        return 0;
      } else {
        return t;
      }
    };
    p.dividedBy = p.div = function (e) {
      return m(this, new this.constructor(e));
    };
    p.dividedToIntegerBy = p.idiv = function (e) {
      var t = this.constructor;
      return S(m(this, new t(e), 0, 1), t.precision);
    };
    p.equals = p.eq = function (e) {
      return !this.cmp(e);
    };
    p.exponent = function () {
      return b(this);
    };
    p.greaterThan = p.gt = function (e) {
      return this.cmp(e) > 0;
    };
    p.greaterThanOrEqualTo = p.gte = function (e) {
      return this.cmp(e) >= 0;
    };
    p.isInteger = p.isint = function () {
      return this.e > this.d.length - 2;
    };
    p.isNegative = p.isneg = function () {
      return this.s < 0;
    };
    p.isPositive = p.ispos = function () {
      return this.s > 0;
    };
    p.isZero = function () {
      return this.s === 0;
    };
    p.lessThan = p.lt = function (e) {
      return this.cmp(e) < 0;
    };
    p.lessThanOrEqualTo = p.lte = function (e) {
      return this.cmp(e) < 1;
    };
    p.logarithm = p.log = function (e) {
      var t;
      var r = this.constructor;
      var i = r.precision;
      var l = i + 5;
      if (e === undefined) {
        e = new r(10);
      } else if ((e = new r(e)).s < 1 || e.eq(n)) {
        throw Error(o + "NaN");
      }
      if (this.s < 1) {
        throw Error(o + (this.s ? "NaN" : "-Infinity"));
      }
      if (this.eq(n)) {
        return new r(0);
      } else {
        a = false;
        t = m(O(this, l), O(e, l), l);
        a = true;
        return S(t, i);
      }
    };
    p.minus = p.sub = function (e) {
      e = new this.constructor(e);
      if (this.s == e.s) {
        return E(this, e);
      } else {
        return h(this, (e.s = -e.s, e));
      }
    };
    p.modulo = p.mod = function (e) {
      var t;
      var r = this.constructor;
      var n = r.precision;
      if (!(e = new r(e)).s) {
        throw Error(o + "NaN");
      }
      if (this.s) {
        a = false;
        t = m(this, e, 0, 1).times(e);
        a = true;
        return this.minus(t);
      } else {
        return S(new r(this), n);
      }
    };
    p.naturalExponential = p.exp = function () {
      return g(this);
    };
    p.naturalLogarithm = p.ln = function () {
      return O(this);
    };
    p.negated = p.neg = function () {
      var e = new this.constructor(this);
      e.s = -e.s || 0;
      return e;
    };
    p.plus = p.add = function (e) {
      e = new this.constructor(e);
      if (this.s == e.s) {
        return h(this, e);
      } else {
        return E(this, (e.s = -e.s, e));
      }
    };
    p.precision = p.sd = function (e) {
      var t;
      var r;
      var n;
      if (e !== undefined && !!e !== e && e !== 1 && e !== 0) {
        throw Error(l + e);
      }
      t = b(this) + 1;
      r = (n = this.d.length - 1) * 7 + 1;
      if (n = this.d[n]) {
        for (; n % 10 == 0; n /= 10) {
          r--;
        }
        for (n = this.d[0]; n >= 10; n /= 10) {
          r++;
        }
      }
      if (e && t > r) {
        return t;
      } else {
        return r;
      }
    };
    p.squareRoot = p.sqrt = function () {
      var e;
      var t;
      var r;
      var n;
      var i;
      var l;
      var u;
      var s = this.constructor;
      if (this.s < 1) {
        if (!this.s) {
          return new s(0);
        }
        throw Error(o + "NaN");
      }
      e = b(this);
      a = false;
      if ((i = Math.sqrt(+this)) == 0 || i == Infinity) {
        if (((t = v(this.d)).length + e) % 2 == 0) {
          t += "0";
        }
        i = Math.sqrt(t);
        e = c((e + 1) / 2) - (e < 0 || e % 2);
        n = new s(t = i == Infinity ? "5e" + e : (t = i.toExponential()).slice(0, t.indexOf("e") + 1) + e);
      } else {
        n = new s(i.toString());
      }
      i = u = (r = s.precision) + 3;
      while (true) {
        n = (l = n).plus(m(this, l, u + 2)).times(0.5);
        if (v(l.d).slice(0, u) === (t = v(n.d)).slice(0, u)) {
          t = t.slice(u - 3, u + 1);
          if (i == u && t == "4999") {
            S(l, r + 1, 0);
            if (l.times(l).eq(this)) {
              n = l;
              break;
            }
          } else if (t != "9999") {
            break;
          }
          u += 4;
        }
      }
      a = true;
      return S(n, r);
    };
    p.times = p.mul = function (e) {
      var t;
      var r;
      var n;
      var i;
      var o;
      var l;
      var u;
      var c;
      var s;
      var f = this.constructor;
      var d = this.d;
      var p = (e = new f(e)).d;
      if (!this.s || !e.s) {
        return new f(0);
      }
      e.s *= this.s;
      r = this.e + e.e;
      if ((c = d.length) < (s = p.length)) {
        o = d;
        d = p;
        p = o;
        l = c;
        c = s;
        s = l;
      }
      o = [];
      n = l = c + s;
      while (n--) {
        o.push(0);
      }
      for (n = s; --n >= 0;) {
        t = 0;
        i = c + n;
        while (i > n) {
          u = o[i] + p[n] * d[i - n - 1] + t;
          o[i--] = u % 10000000 | 0;
          t = u / 10000000 | 0;
        }
        o[i] = (o[i] + t) % 10000000 | 0;
      }
      while (!o[--l]) {
        o.pop();
      }
      if (t) {
        ++r;
      } else {
        o.shift();
      }
      e.d = o;
      e.e = r;
      if (a) {
        return S(e, f.precision);
      } else {
        return e;
      }
    };
    p.toDecimalPlaces = p.todp = function (e, t) {
      var r = this;
      var n = r.constructor;
      r = new n(r);
      if (e === undefined) {
        return r;
      } else {
        y(e, 0, 1000000000);
        if (t === undefined) {
          t = n.rounding;
        } else {
          y(t, 0, 8);
        }
        return S(r, e + b(r) + 1, t);
      }
    };
    p.toExponential = function (e, t) {
      var r;
      var n = this;
      var i = n.constructor;
      if (e === undefined) {
        r = P(n, true);
      } else {
        y(e, 0, 1000000000);
        if (t === undefined) {
          t = i.rounding;
        } else {
          y(t, 0, 8);
        }
        r = P(n = S(new i(n), e + 1, t), true, e + 1);
      }
      return r;
    };
    p.toFixed = function (e, t) {
      var r;
      var n;
      var i = this.constructor;
      if (e === undefined) {
        return P(this);
      } else {
        y(e, 0, 1000000000);
        if (t === undefined) {
          t = i.rounding;
        } else {
          y(t, 0, 8);
        }
        r = P((n = S(new i(this), e + b(this) + 1, t)).abs(), false, e + b(n) + 1);
        if (this.isneg() && !this.isZero()) {
          return "-" + r;
        } else {
          return r;
        }
      }
    };
    p.toInteger = p.toint = function () {
      var e = this.constructor;
      return S(new e(this), b(this) + 1, e.rounding);
    };
    p.toNumber = function () {
      return +this;
    };
    p.toPower = p.pow = function (e) {
      var t;
      var r;
      var i;
      var l;
      var u;
      var s;
      var f = this;
      var d = f.constructor;
      var p = +(e = new d(e));
      if (!e.s) {
        return new d(n);
      }
      if (!(f = new d(f)).s) {
        if (e.s < 1) {
          throw Error(o + "Infinity");
        }
        return f;
      }
      if (f.eq(n)) {
        return f;
      }
      i = d.precision;
      if (e.eq(n)) {
        return S(f, i);
      }
      s = (t = e.e) >= (r = e.d.length - 1);
      u = f.s;
      if (s) {
        if ((r = p < 0 ? -p : p) <= 9007199254740991) {
          l = new d(n);
          t = Math.ceil(i / 7 + 4);
          a = false;
          while (r % 2 && j((l = l.times(f)).d, t), (r = c(r / 2)) !== 0) {
            j((f = f.times(f)).d, t);
          }
          a = true;
          if (e.s < 0) {
            return new d(n).div(l);
          } else {
            return S(l, i);
          }
        }
      } else if (u < 0) {
        throw Error(o + "NaN");
      }
      u = u < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1;
      f.s = 1;
      a = false;
      l = e.times(O(f, i + 12));
      a = true;
      (l = g(l)).s = u;
      return l;
    };
    p.toPrecision = function (e, t) {
      var r;
      var n;
      var i = this;
      var a = i.constructor;
      if (e === undefined) {
        r = b(i);
        n = P(i, r <= a.toExpNeg || r >= a.toExpPos);
      } else {
        y(e, 1, 1000000000);
        if (t === undefined) {
          t = a.rounding;
        } else {
          y(t, 0, 8);
        }
        r = b(i = S(new a(i), e, t));
        n = P(i, e <= r || r <= a.toExpNeg, e);
      }
      return n;
    };
    p.toSignificantDigits = p.tosd = function (e, t) {
      var r = this.constructor;
      if (e === undefined) {
        e = r.precision;
        t = r.rounding;
      } else {
        y(e, 1, 1000000000);
        if (t === undefined) {
          t = r.rounding;
        } else {
          y(t, 0, 8);
        }
      }
      return S(new r(this), e, t);
    };
    p.toString = p.valueOf = p.val = p.toJSON = function () {
      var e = b(this);
      var t = this.constructor;
      return P(this, e <= t.toExpNeg || e >= t.toExpPos);
    };
    var m = function () {
      function e(e, t) {
        var r;
        var n = 0;
        var i = e.length;
        for (e = e.slice(); i--;) {
          r = e[i] * t + n;
          e[i] = r % 10000000 | 0;
          n = r / 10000000 | 0;
        }
        if (n) {
          e.unshift(n);
        }
        return e;
      }
      function t(e, t, r, n) {
        var i;
        var a;
        if (r != n) {
          a = r > n ? 1 : -1;
        } else {
          for (i = a = 0; i < r; i++) {
            if (e[i] != t[i]) {
              a = e[i] > t[i] ? 1 : -1;
              break;
            }
          }
        }
        return a;
      }
      function r(e, t, r) {
        var n = 0;
        while (r--) {
          e[r] -= n;
          n = +(e[r] < t[r]);
          e[r] = n * 10000000 + e[r] - t[r];
        }
        while (!e[0] && e.length > 1) {
          e.shift();
        }
      }
      return function (n, i, a, l) {
        var u;
        var c;
        var s;
        var f;
        var d;
        var p;
        var h;
        var y;
        var v;
        var m;
        var g;
        var x;
        var w;
        var O;
        var A;
        var E;
        var P;
        var j;
        var k = n.constructor;
        var I = n.s == i.s ? 1 : -1;
        var C = n.d;
        var T = i.d;
        if (!n.s) {
          return new k(n);
        }
        if (!i.s) {
          throw Error(o + "Division by zero");
        }
        c = n.e - i.e;
        P = T.length;
        A = C.length;
        y = (h = new k(I)).d = [];
        s = 0;
        while (T[s] == (C[s] || 0)) {
          ++s;
        }
        if (T[s] > (C[s] || 0)) {
          --c;
        }
        if ((x = a == null ? a = k.precision : l ? a + (b(n) - b(i)) + 1 : a) < 0) {
          return new k(0);
        }
        x = x / 7 + 2 | 0;
        s = 0;
        if (P == 1) {
          f = 0;
          T = T[0];
          x++;
          for (; (s < A || f) && x--; s++) {
            w = f * 10000000 + (C[s] || 0);
            y[s] = w / T | 0;
            f = w % T | 0;
          }
        } else {
          if ((f = 10000000 / (T[0] + 1) | 0) > 1) {
            T = e(T, f);
            C = e(C, f);
            P = T.length;
            A = C.length;
          }
          O = P;
          m = (v = C.slice(0, P)).length;
          while (m < P) {
            v[m++] = 0;
          }
          (j = T.slice()).unshift(0);
          E = T[0];
          if (T[1] >= 5000000) {
            ++E;
          }
          do {
            f = 0;
            if ((u = t(T, v, P, m)) < 0) {
              g = v[0];
              if (P != m) {
                g = g * 10000000 + (v[1] || 0);
              }
              if ((f = g / E | 0) > 1) {
                if (f >= 10000000) {
                  f = 9999999;
                }
                p = (d = e(T, f)).length;
                m = v.length;
                if ((u = t(d, v, p, m)) == 1) {
                  f--;
                  r(d, P < p ? j : T, p);
                }
              } else {
                if (f == 0) {
                  u = f = 1;
                }
                d = T.slice();
              }
              if ((p = d.length) < m) {
                d.unshift(0);
              }
              r(v, d, m);
              if (u == -1) {
                m = v.length;
                if ((u = t(T, v, P, m)) < 1) {
                  f++;
                  r(v, P < m ? j : T, m);
                }
              }
              m = v.length;
            } else if (u === 0) {
              f++;
              v = [0];
            }
            y[s++] = f;
            if (u && v[0]) {
              v[m++] = C[O] || 0;
            } else {
              v = [C[O]];
              m = 1;
            }
          } while ((O++ < A || v[0] !== undefined) && x--);
        }
        if (!y[0]) {
          y.shift();
        }
        h.e = c;
        return S(h, l ? a + b(h) + 1 : a);
      };
    }();
    function g(e, t) {
      var r;
      var i;
      var o;
      var l;
      var c;
      var f = 0;
      var d = 0;
      var p = e.constructor;
      var h = p.precision;
      if (b(e) > 16) {
        throw Error(u + b(e));
      }
      if (!e.s) {
        return new p(n);
      }
      if (t == null) {
        a = false;
        c = h;
      } else {
        c = t;
      }
      l = new p(0.03125);
      while (e.abs().gte(0.1)) {
        e = e.times(l);
        d += 5;
      }
      c += Math.log(s(2, d)) / Math.LN10 * 2 + 5 | 0;
      r = i = o = new p(n);
      p.precision = c;
      while (true) {
        i = S(i.times(e), c);
        r = r.times(++f);
        if (v((l = o.plus(m(i, r, c))).d).slice(0, c) === v(o.d).slice(0, c)) {
          while (d--) {
            o = S(o.times(o), c);
          }
          p.precision = h;
          if (t == null) {
            a = true;
            return S(o, h);
          } else {
            return o;
          }
        }
        o = l;
      }
    }
    function b(e) {
      var t = e.e * 7;
      for (var r = e.d[0]; r >= 10; r /= 10) {
        t++;
      }
      return t;
    }
    function x(e, t, r) {
      if (t > e.LN10.sd()) {
        a = true;
        if (r) {
          e.precision = r;
        }
        throw Error(o + "LN10 precision limit exceeded");
      }
      return S(new e(e.LN10), t);
    }
    function w(e) {
      var t = "";
      while (e--) {
        t += "0";
      }
      return t;
    }
    function O(e, t) {
      var r;
      var i;
      var l;
      var u;
      var c;
      var s;
      var f;
      var d;
      var p;
      var h = 1;
      var y = e;
      var g = y.d;
      var w = y.constructor;
      var A = w.precision;
      if (y.s < 1) {
        throw Error(o + (y.s ? "NaN" : "-Infinity"));
      }
      if (y.eq(n)) {
        return new w(0);
      }
      if (t == null) {
        a = false;
        d = A;
      } else {
        d = t;
      }
      if (y.eq(10)) {
        if (t == null) {
          a = true;
        }
        return x(w, d);
      }
      w.precision = d += 10;
      i = (r = v(g)).charAt(0);
      if (!(Math.abs(u = b(y)) < 1500000000000000)) {
        f = x(w, d + 2, A).times(u + "");
        y = O(new w(i + "." + r.slice(1)), d - 10).plus(f);
        w.precision = A;
        if (t == null) {
          a = true;
          return S(y, A);
        } else {
          return y;
        }
      }
      while (i < 7 && i != 1 || i == 1 && r.charAt(1) > 3) {
        i = (r = v((y = y.times(e)).d)).charAt(0);
        h++;
      }
      u = b(y);
      if (i > 1) {
        y = new w("0." + r);
        u++;
      } else {
        y = new w(i + "." + r.slice(1));
      }
      s = c = y = m(y.minus(n), y.plus(n), d);
      p = S(y.times(y), d);
      l = 3;
      while (true) {
        c = S(c.times(p), d);
        if (v((f = s.plus(m(c, new w(l), d))).d).slice(0, d) === v(s.d).slice(0, d)) {
          s = s.times(2);
          if (u !== 0) {
            s = s.plus(x(w, d + 2, A).times(u + ""));
          }
          s = m(s, new w(h), d);
          w.precision = A;
          if (t == null) {
            a = true;
            return S(s, A);
          } else {
            return s;
          }
        }
        s = f;
        l += 2;
      }
    }
    function A(e, t) {
      var r;
      var n;
      var i;
      if ((r = t.indexOf(".")) > -1) {
        t = t.replace(".", "");
      }
      if ((n = t.search(/e/i)) > 0) {
        if (r < 0) {
          r = n;
        }
        r += +t.slice(n + 1);
        t = t.substring(0, n);
      } else if (r < 0) {
        r = t.length;
      }
      n = 0;
      while (t.charCodeAt(n) === 48) {
        ++n;
      }
      for (i = t.length; t.charCodeAt(i - 1) === 48;) {
        --i;
      }
      if (t = t.slice(n, i)) {
        i -= n;
        e.e = c((r = r - n - 1) / 7);
        e.d = [];
        n = (r + 1) % 7;
        if (r < 0) {
          n += 7;
        }
        if (n < i) {
          if (n) {
            e.d.push(+t.slice(0, n));
          }
          i -= 7;
          while (n < i) {
            e.d.push(+t.slice(n, n += 7));
          }
          n = 7 - (t = t.slice(n)).length;
        } else {
          n -= i;
        }
        while (n--) {
          t += "0";
        }
        e.d.push(+t);
        if (a && (e.e > d || e.e < -d)) {
          throw Error(u + r);
        }
      } else {
        e.s = 0;
        e.e = 0;
        e.d = [0];
      }
      return e;
    }
    function S(e, t, r) {
      var n;
      var i;
      var o;
      var l;
      var f;
      var p;
      var h;
      var y;
      var v = e.d;
      l = 1;
      o = v[0];
      for (; o >= 10; o /= 10) {
        l++;
      }
      if ((n = t - l) < 0) {
        n += 7;
        i = t;
        h = v[y = 0];
      } else {
        if ((y = Math.ceil((n + 1) / 7)) >= (o = v.length)) {
          return e;
        }
        h = o = v[y];
        l = 1;
        for (; o >= 10; o /= 10) {
          l++;
        }
        n %= 7;
        i = n - 7 + l;
      }
      if (r !== undefined) {
        f = h / (o = s(10, l - i - 1)) % 10 | 0;
        p = t < 0 || v[y + 1] !== undefined || h % o;
        p = r < 4 ? (f || p) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : f > 5 || f == 5 && (r == 4 || p || r == 6 && (n > 0 ? i > 0 ? h / s(10, l - i) : 0 : v[y - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7));
      }
      if (t < 1 || !v[0]) {
        if (p) {
          o = b(e);
          v.length = 1;
          t = t - o - 1;
          v[0] = s(10, (7 - t % 7) % 7);
          e.e = c(-t / 7) || 0;
        } else {
          v.length = 1;
          v[0] = e.e = e.s = 0;
        }
        return e;
      }
      if (n == 0) {
        v.length = y;
        o = 1;
        y--;
      } else {
        v.length = y + 1;
        o = s(10, 7 - n);
        v[y] = i > 0 ? (h / s(10, l - i) % s(10, i) | 0) * o : 0;
      }
      if (p) {
        while (true) {
          if (y == 0) {
            if ((v[0] += o) == 10000000) {
              v[0] = 1;
              ++e.e;
            }
            break;
          } else {
            v[y] += o;
            if (v[y] != 10000000) {
              break;
            }
            v[y--] = 0;
            o = 1;
          }
        }
      }
      for (n = v.length; v[--n] === 0;) {
        v.pop();
      }
      if (a && (e.e > d || e.e < -d)) {
        throw Error(u + b(e));
      }
      return e;
    }
    function E(e, t) {
      var r;
      var n;
      var i;
      var o;
      var l;
      var u;
      var c;
      var s;
      var f;
      var d;
      var p = e.constructor;
      var h = p.precision;
      if (!e.s || !t.s) {
        if (t.s) {
          t.s = -t.s;
        } else {
          t = new p(e);
        }
        if (a) {
          return S(t, h);
        } else {
          return t;
        }
      }
      c = e.d;
      d = t.d;
      n = t.e;
      s = e.e;
      c = c.slice();
      if (l = s - n) {
        if (f = l < 0) {
          r = c;
          l = -l;
          u = d.length;
        } else {
          r = d;
          n = s;
          u = c.length;
        }
        if (l > (i = Math.max(Math.ceil(h / 7), u) + 2)) {
          l = i;
          r.length = 1;
        }
        r.reverse();
        i = l;
        while (i--) {
          r.push(0);
        }
        r.reverse();
      } else {
        if (f = (i = c.length) < (u = d.length)) {
          u = i;
        }
        i = 0;
        for (; i < u; i++) {
          if (c[i] != d[i]) {
            f = c[i] < d[i];
            break;
          }
        }
        l = 0;
      }
      if (f) {
        r = c;
        c = d;
        d = r;
        t.s = -t.s;
      }
      u = c.length;
      i = d.length - u;
      for (; i > 0; --i) {
        c[u++] = 0;
      }
      for (i = d.length; i > l;) {
        if (c[--i] < d[i]) {
          for (o = i; o && c[--o] === 0;) {
            c[o] = 9999999;
          }
          --c[o];
          c[i] += 10000000;
        }
        c[i] -= d[i];
      }
      while (c[--u] === 0) {
        c.pop();
      }
      for (; c[0] === 0; c.shift()) {
        --n;
      }
      if (c[0]) {
        t.d = c;
        t.e = n;
        if (a) {
          return S(t, h);
        } else {
          return t;
        }
      } else {
        return new p(0);
      }
    }
    function P(e, t, r) {
      var n;
      var i = b(e);
      var a = v(e.d);
      var o = a.length;
      if (t) {
        if (r && (n = r - o) > 0) {
          a = a.charAt(0) + "." + a.slice(1) + w(n);
        } else if (o > 1) {
          a = a.charAt(0) + "." + a.slice(1);
        }
        a = a + (i < 0 ? "e" : "e+") + i;
      } else if (i < 0) {
        a = "0." + w(-i - 1) + a;
        if (r && (n = r - o) > 0) {
          a += w(n);
        }
      } else if (i >= o) {
        a += w(i + 1 - o);
        if (r && (n = r - i - 1) > 0) {
          a = a + "." + w(n);
        }
      } else {
        if ((n = i + 1) < o) {
          a = a.slice(0, n) + "." + a.slice(n);
        }
        if (r && (n = r - o) > 0) {
          if (i + 1 === o) {
            a += ".";
          }
          a += w(n);
        }
      }
      if (e.s < 0) {
        return "-" + a;
      } else {
        return a;
      }
    }
    function j(e, t) {
      if (e.length > t) {
        e.length = t;
        return true;
      }
    }
    function k(e) {
      if (!e || typeof e != "object") {
        throw Error(o + "Object expected");
      }
      var t;
      var r;
      var n;
      var i = ["precision", 1, 1000000000, "rounding", 0, 8, "toExpNeg", -Infinity, 0, "toExpPos", 0, Infinity];
      for (t = 0; t < i.length; t += 3) {
        if ((n = e[r = i[t]]) !== undefined) {
          if (c(n) === n && n >= i[t + 1] && n <= i[t + 2]) {
            this[r] = n;
          } else {
            throw Error(l + r + ": " + n);
          }
        }
      }
      if ((n = e[r = "LN10"]) !== undefined) {
        if (n == Math.LN10) {
          this[r] = new this(n);
        } else {
          throw Error(l + r + ": " + n);
        }
      }
      return this;
    }
    (i = function e(t) {
      var r;
      var n;
      var i;
      function a(e) {
        if (!(this instanceof a)) {
          return new a(e);
        }
        this.constructor = a;
        if (e instanceof a) {
          this.s = e.s;
          this.e = e.e;
          this.d = (e = e.d) ? e.slice() : e;
          return;
        }
        if (typeof e == "number") {
          if (e * 0 != 0) {
            throw Error(l + e);
          }
          if (e > 0) {
            this.s = 1;
          } else if (e < 0) {
            e = -e;
            this.s = -1;
          } else {
            this.s = 0;
            this.e = 0;
            this.d = [0];
            return;
          }
          if (e === ~~e && e < 10000000) {
            this.e = 0;
            this.d = [e];
            return;
          }
          return A(this, e.toString());
        }
        if (typeof e != "string") {
          throw Error(l + e);
        }
        if (e.charCodeAt(0) === 45) {
          e = e.slice(1);
          this.s = -1;
        } else {
          this.s = 1;
        }
        if (f.test(e)) {
          A(this, e);
        } else {
          throw Error(l + e);
        }
      }
      a.prototype = p;
      a.ROUND_UP = 0;
      a.ROUND_DOWN = 1;
      a.ROUND_CEIL = 2;
      a.ROUND_FLOOR = 3;
      a.ROUND_HALF_UP = 4;
      a.ROUND_HALF_DOWN = 5;
      a.ROUND_HALF_EVEN = 6;
      a.ROUND_HALF_CEIL = 7;
      a.ROUND_HALF_FLOOR = 8;
      a.clone = e;
      a.config = a.set = k;
      if (t === undefined) {
        t = {};
      }
      if (t) {
        r = 0;
        i = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
        while (r < i.length) {
          if (!t.hasOwnProperty(n = i[r++])) {
            t[n] = this[n];
          }
        }
      }
      a.config(t);
      return a;
    }(i)).default = i.Decimal = i;
    n = new i(1);
    if (typeof define == "function" && define.amd) {
      let t;
      e.r;
      if ((t = i) !== undefined) {
        e.v(t);
      }
    } else if (t.exports) {
      t.exports = i;
    } else {
      r ||= typeof self !== "undefined" && self && self.self == self ? self : Function("return this")();
      r.Decimal = i;
    }
  })(e.e);
}, 52089, 79519, 79896, 80101, 59051, 79576, 52977, 74481, 130, 99428, 54034, 78450, 95292, 35001, 58467, 19379, 47856, 24712, 10427, 64214, 43913, 75699, 30671, 16187, 97386, 50512, 71171, 39862, 6588, 58657, 41364, 53108, 92485, 43287, 22124, 19966, 12144, 25663, 80009, 96013, 34440, 13627, 87957, 60909, 53926, 16686, 3850, 68444, 20819, 56383, 8316, 1480, 4874, 35304, 20722, 64237, 9919, 62123, 59179, 25512, 62568, 47071, 95024, 24160, 99545, 75436, 25367, 67775, 19779, 80164, 44835, 3260, 60588, 90824, 82430, 90659, 48839, 95011, 77720, 81615, e => {
  "use strict";

  function t(e) {
    return e === "__proto__";
  }
  let r = /\.|(\[(?:[^[\]]*|(["'])(?:(?!\2)[^\\]|\\.)*?\2)\])/;
  function n(e) {
    switch (typeof e) {
      case "number":
      case "symbol":
      default:
        return false;
      case "string":
        if (e === "" || e.startsWith(".") || e.endsWith(".")) {
          return false;
        }
        return r.test(e);
    }
  }
  function i(e) {
    if (typeof e == "string" || typeof e == "symbol") {
      return e;
    } else if (Object.is(e?.valueOf?.(), -0)) {
      return "-0";
    } else {
      return String(e);
    }
  }
  function a(e) {
    return typeof e == "symbol" || e instanceof Symbol;
  }
  function o(e) {
    var t;
    if (Array.isArray(e)) {
      return e.map(i);
    }
    if (typeof e == "symbol") {
      return [e];
    }
    e = (t = e) == null ? "" : function e(t) {
      if (typeof t == "string") {
        return t;
      }
      if (Array.isArray(t)) {
        return t.map(e).join(",");
      }
      if (a(t)) {
        return t.toString();
      }
      let r = t + "";
      if (r === "0" && Object.is(Number(t), -0)) {
        return "-0";
      } else {
        return r;
      }
    }(t);
    let r = [];
    let n = e.length;
    if (n === 0) {
      return r;
    }
    let o = 0;
    let l = "";
    let u = "";
    let c = false;
    let s = false;
    let f = /^-?\d+(?:\.\d+)?$/;
    for (e.charCodeAt(0) === 46 && r.push(""); o < n;) {
      let t = e[o];
      if (u) {
        if (t === "\\" && o + 1 < n) {
          l += e[++o];
        } else if (t === u) {
          u = "";
        } else {
          l += t;
        }
      } else if (c) {
        if (t === "\"" || t === "'") {
          u = t;
          s = true;
        } else if (t === "]") {
          c = false;
          if (!s && l.includes(".") && !f.test(l)) {
            let e = l.split(".");
            for (let t = 0; t < e.length; t++) {
              if (e[t] !== "") {
                r.push(e[t]);
              }
            }
          } else {
            r.push(l);
          }
          l = "";
        } else {
          l += t;
        }
      } else if (t === "[") {
        c = true;
        s = false;
        if (l) {
          r.push(l);
          l = "";
        }
      } else if (t === ".") {
        if (l) {
          r.push(l);
          l = "";
        }
        let t = e[o + 1];
        if (t === undefined || t === ".") {
          r.push("");
        }
      } else {
        l += t;
      }
      o++;
    }
    if (l) {
      r.push(l);
    }
    return r;
  }
  function l(e, r, a) {
    if (e == null) {
      return a;
    }
    switch (typeof r) {
      case "string":
        {
          if (t(r)) {
            return a;
          }
          let i = e[r];
          if (i === undefined) {
            if (n(r) && !Object.hasOwn(e, r)) {
              return l(e, o(r), a);
            } else {
              return a;
            }
          }
          return i;
        }
      case "number":
      case "symbol":
        {
          if (typeof r == "number") {
            r = i(r);
          }
          let t = e[r];
          if (t === undefined) {
            return a;
          }
          return t;
        }
      default:
        {
          if (Array.isArray(r)) {
            var u = e;
            var c = r;
            var s = a;
            if (c.length === 0) {
              return s;
            }
            let n = u;
            for (let e = 0; e < c.length; e++) {
              if (n == null || t(c[e])) {
                return s;
              }
              n = n[c[e]];
            }
            if (n === undefined) {
              return s;
            } else {
              return n;
            }
          }
          if (t(r = Object.is(r?.valueOf(), -0) ? "-0" : String(r))) {
            return a;
          }
          let n = e[r];
          if (n === undefined) {
            return a;
          }
          return n;
        }
    }
  }
  function u() {
    var e;
    var t;
    for (var r = 0, n = "", i = arguments.length; r < i; r++) {
      if ((e = arguments[r]) && (t = function e(t) {
        var r;
        var n;
        var i = "";
        if (typeof t == "string" || typeof t == "number") {
          i += t;
        } else if (typeof t == "object") {
          if (Array.isArray(t)) {
            var a = t.length;
            for (r = 0; r < a; r++) {
              if (t[r] && (n = e(t[r]))) {
                if (i) {
                  i += " ";
                }
                i += n;
              }
            }
          } else {
            for (n in t) {
              if (t[n]) {
                if (i) {
                  i += " ";
                }
                i += n;
              }
            }
          }
        }
        return i;
      }(e))) {
        if (n) {
          n += " ";
        }
        n += t;
      }
    }
    return n;
  }
  e.s(["default", 0, l], 52089);
  e.s(["clsx", 0, u], 79519);
  var c;
  var s;
  var f;
  var d;
  var p;
  var h;
  var y;
  var v;
  var m;
  var g;
  var b;
  var x;
  var w;
  var O;
  var A;
  var S;
  var E;
  var P;
  var j;
  var I;
  var C;
  var T;
  var M;
  var _;
  var D;
  var N;
  var L;
  var R;
  var z;
  var B = Symbol("NOT_FOUND");
  var F = e => Array.isArray(e) ? e : [e];
  var U = 0;
  var $ = class {
    revision = U;
    _value;
    _lastValue;
    _isEqual = K;
    constructor(e, t = K) {
      this._value = this._lastValue = e;
      this._isEqual = t;
    }
    get value() {
      return this._value;
    }
    set value(e) {
      if (this.value !== e) {
        this._value = e;
        this.revision = ++U;
      }
    }
  };
  function K(e, t) {
    return e === t;
  }
  function W(e) {
    if (!(e instanceof $)) {
      console.warn("Not a valid cell! ", e);
    }
    return e.value;
  }
  var V = (e, t) => false;
  function H() {
    return function (e = K) {
      return new $(null, e);
    }(V);
  }
  var G = e => {
    let t = e.collectionTag;
    if (t === null) {
      t = e.collectionTag = H();
    }
    W(t);
  };
  var Y = 0;
  var q = Object.getPrototypeOf({});
  var X = class {
    constructor(e) {
      this.value = e;
      this.value = e;
      this.tag.value = e;
    }
    proxy = new Proxy(this, Z);
    tag = H();
    tags = {};
    children = {};
    collectionTag = null;
    id = Y++;
  };
  var Z = {
    get: (e, t) => function () {
      let {
        value: r
      } = e;
      let n = Reflect.get(r, t);
      if (typeof t == "symbol" || t in q) {
        return n;
      }
      if (typeof n == "object" && n !== null) {
        var i;
        let r = e.children[t];
        if (r === undefined) {
          r = e.children[t] = Array.isArray(i = n) ? new Q(i) : new X(i);
        }
        if (r.tag) {
          W(r.tag);
        }
        return r.proxy;
      }
      {
        let r = e.tags[t];
        if (r === undefined) {
          (r = e.tags[t] = H()).value = n;
        }
        W(r);
        return n;
      }
    }(),
    ownKeys: e => {
      G(e);
      return Reflect.ownKeys(e.value);
    },
    getOwnPropertyDescriptor: (e, t) => Reflect.getOwnPropertyDescriptor(e.value, t),
    has: (e, t) => Reflect.has(e.value, t)
  };
  var Q = class {
    constructor(e) {
      this.value = e;
      this.value = e;
      this.tag.value = e;
    }
    proxy = new Proxy([this], J);
    tag = H();
    tags = {};
    children = {};
    collectionTag = null;
    id = Y++;
  };
  var J = {
    get: ([e], t) => {
      if (t === "length") {
        G(e);
      }
      return Z.get(e, t);
    },
    ownKeys: ([e]) => Z.ownKeys(e),
    getOwnPropertyDescriptor: ([e], t) => Z.getOwnPropertyDescriptor(e, t),
    has: ([e], t) => Z.has(e, t)
  };
  var ee = (e, t) => e === t;
  var et = typeof WeakRef === "undefined" ? class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  } : WeakRef;
  function er() {
    return {
      s: 0,
      v: undefined,
      o: null,
      p: null
    };
  }
  function en(e, t = {}) {
    let r;
    let n = er();
    let {
      resultEqualityCheck: i
    } = t;
    let a = 0;
    function o() {
      let t;
      let o = n;
      let {
        length: l
      } = arguments;
      for (let e = 0; e < l; e++) {
        let t = arguments[e];
        if (typeof t == "function" || typeof t == "object" && t !== null) {
          let e = o.o;
          if (e === null) {
            o.o = e = new WeakMap();
          }
          let r = e.get(t);
          if (r === undefined) {
            o = er();
            e.set(t, o);
          } else {
            o = r;
          }
        } else {
          let e = o.p;
          if (e === null) {
            o.p = e = new Map();
          }
          let r = e.get(t);
          if (r === undefined) {
            o = er();
            e.set(t, o);
          } else {
            o = r;
          }
        }
      }
      let u = o;
      if (o.s === 1) {
        t = o.v;
      } else {
        t = e.apply(null, arguments);
        a++;
        if (i) {
          var c;
          let e = (c = r) instanceof et ? c.deref() : c;
          if (e != null && i(e, t)) {
            t = e;
            if (a !== 0) {
              a--;
            }
          }
          r = typeof t == "object" && t !== null || typeof t == "function" ? new et(t) : t;
        }
      }
      u.s = 1;
      u.v = t;
      return t;
    }
    o.clearCache = () => {
      n = er();
      o.resetResultsCount();
    };
    o.resultsCount = () => a;
    o.resetResultsCount = () => {
      a = 0;
    };
    return o;
  }
  function ei(e, ...t) {
    let r = typeof e == "function" ? {
      memoize: e,
      memoizeOptions: t
    } : e;
    let n = (...e) => {
      let t;
      let n;
      let i = 0;
      let a = 0;
      let o = {};
      let l = e.pop();
      if (typeof l == "object") {
        o = l;
        l = e.pop();
      }
      (function (e, t = `expected a function, instead received ${typeof e}`) {
        if (typeof e != "function") {
          throw TypeError(t);
        }
      })(l, `createSelector expects an output function after the inputs, but received: [${typeof l}]`);
      let {
        memoize: u,
        memoizeOptions: c = [],
        argsMemoize: s = en,
        argsMemoizeOptions: f = []
      } = {
        ...r,
        ...o
      };
      let d = F(c);
      let p = F(f);
      (function (e, t = "expected all items to be functions, instead received the following types: ") {
        if (!e.every(e => typeof e == "function")) {
          let r = e.map(e => typeof e == "function" ? `function ${e.name || "unnamed"}()` : typeof e).join(", ");
          throw TypeError(`${t}[${r}]`);
        }
      })(t = Array.isArray(e[0]) ? e[0] : e, "createSelector expects all input-selectors to be functions, but received the following types: ");
      let h = t;
      let y = u(function () {
        i++;
        return l.apply(null, arguments);
      }, ...d);
      return Object.assign(s(function () {
        a++;
        let e = function (e, t) {
          let r = [];
          let {
            length: n
          } = e;
          for (let i = 0; i < n; i++) {
            r.push(e[i].apply(null, t));
          }
          return r;
        }(h, arguments);
        return n = y.apply(null, e);
      }, ...p), {
        resultFunc: l,
        memoizedResultFunc: y,
        dependencies: h,
        dependencyRecomputations: () => a,
        resetDependencyRecomputations: () => {
          a = 0;
        },
        lastResult: () => n,
        recomputations: () => i,
        resetRecomputations: () => {
          i = 0;
        },
        memoize: u,
        argsMemoize: s
      });
    };
    Object.assign(n, {
      withTypes: () => n
    });
    return n;
  }
  var ea = ei(en);
  var eo = Object.assign((e, t = ea) => {
    (function (e, t = `expected an object, instead received ${typeof e}`) {
      if (typeof e != "object") {
        throw TypeError(t);
      }
    })(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
    let r = Object.keys(e);
    return t(r.map(t => e[t]), (...e) => e.reduce((e, t, n) => {
      e[r[n]] = t;
      return e;
    }, {}));
  }, {
    withTypes: () => eo
  });
  e.s(["createSelector", 0, ea, "createSelectorCreator", 0, ei, "lruMemoize", 0, function (e, t) {
    let r;
    let {
      equalityCheck: n = ee,
      maxSize: i = 1,
      resultEqualityCheck: a
    } = typeof t == "object" ? t : {
      equalityCheck: t
    };
    let o = function (e, t) {
      if (e === null || t === null || e.length !== t.length) {
        return false;
      }
      let {
        length: r
      } = e;
      for (let i = 0; i < r; i++) {
        if (!n(e[i], t[i])) {
          return false;
        }
      }
      return true;
    };
    let l = 0;
    let u = i <= 1 ? {
      get: e => r && o(r.key, e) ? r.value : B,
      put(e, t) {
        r = {
          key: e,
          value: t
        };
      },
      getEntries: () => r ? [r] : [],
      clear() {
        r = undefined;
      }
    } : function (e, t) {
      let r = [];
      function n(e) {
        let n = r.findIndex(r => t(e, r.key));
        if (n > -1) {
          let e = r[n];
          if (n > 0) {
            r.splice(n, 1);
            r.unshift(e);
          }
          return e.value;
        }
        return B;
      }
      return {
        get: n,
        put: function (t, i) {
          if (n(t) === B) {
            r.unshift({
              key: t,
              value: i
            });
            if (r.length > e) {
              r.pop();
            }
          }
        },
        getEntries: function () {
          return r;
        },
        clear: function () {
          r = [];
        }
      };
    }(i, o);
    function c() {
      let t = u.get(arguments);
      if (t === B) {
        t = e.apply(null, arguments);
        l++;
        if (a) {
          let e = u.getEntries().find(e => a(e.value, t));
          if (e) {
            t = e.value;
            if (l !== 0) {
              l--;
            }
          }
        }
        u.put(arguments, t);
      }
      return t;
    }
    c.clearCache = () => {
      u.clear();
      c.resetResultsCount();
    };
    c.resultsCount = () => l;
    c.resetResultsCount = () => {
      l = 0;
    };
    return c;
  }, "weakMapMemoize", 0, en], 79896);
  var el = e => e.chartData;
  var eu = ea([el], e => {
    var t = e.chartData != null ? e.chartData.length - 1 : 0;
    return {
      chartData: e.chartData,
      computedData: e.computedData,
      dataEndIndex: t,
      dataStartIndex: 0
    };
  });
  var ec = (e, t, r, n) => n ? eu(e) : el(e);
  var es = ea([ec], e => {
    var t = e.chartData;
    var r = e.dataStartIndex;
    var n = e.dataEndIndex;
    if (t != null) {
      return t.slice(r, n + 1);
    } else {
      return [];
    }
  });
  var ef = ea([eu], e => {
    var t = e.chartData;
    var r = e.dataStartIndex;
    var n = e.dataEndIndex;
    if (t != null) {
      return t.slice(r, n + 1);
    } else {
      return [];
    }
  });
  var ed = ea([el], e => {
    var t = e.chartData;
    var r = e.dataStartIndex;
    var n = e.dataEndIndex;
    if (t != null) {
      return t.slice(r, n + 1);
    } else {
      return [];
    }
  });
  function ep(e, t) {
    return e === t || Number.isNaN(e) && Number.isNaN(t);
  }
  function eh(e) {
    var t;
    return e != null && typeof e != "function" && Number.isSafeInteger(t = e.length) && t >= 0;
  }
  function ey(e) {
    return e !== null && (typeof e == "object" || typeof e == "function");
  }
  e.s(["selectChartDataAndAlwaysIgnoreIndexes", 0, eu, "selectChartDataSliceIfNotInPanorama", 0, es, "selectChartDataSliceIgnoringIndexes", 0, ef, "selectChartDataSliceWithIndexes", 0, ed, "selectChartDataWithIndexes", 0, el, "selectChartDataWithIndexesIfNotInPanoramaPosition3", 0, (e, t, r) => r ? eu(e) : el(e), "selectChartDataWithIndexesIfNotInPanoramaPosition4", 0, ec], 80101);
  e.s(["eq", 0, ep], 59051);
  let ev = /^(?:0|[1-9]\d*)$/;
  function em(e, t = Number.MAX_SAFE_INTEGER) {
    switch (typeof e) {
      case "number":
        return Number.isInteger(e) && e >= 0 && e < t;
      case "symbol":
        return false;
      case "string":
        return ev.test(e);
    }
  }
  function eg(e, t, r) {
    return !!ey(r) && (typeof t == "number" && !!eh(r) && !!em(t) && t < r.length || typeof t == "string" && t in r) && ep(r[t], e);
  }
  function eb(e) {
    if (typeof e == "symbol") {
      return 1;
    } else if (e === null) {
      return 2;
    } else if (e === undefined) {
      return 3;
    } else {
      return (e != e) * 4;
    }
  }
  let ex = (e, t, r) => {
    if (e !== t) {
      let n = eb(e);
      let i = eb(t);
      if (n === i && n === 0) {
        if (e < t) {
          if (r === "desc") {
            return 1;
          } else {
            return -1;
          }
        }
        if (e > t) {
          if (r === "desc") {
            return -1;
          } else {
            return 1;
          }
        }
      }
      if (r === "desc") {
        return i - n;
      } else {
        return n - i;
      }
    }
    return 0;
  };
  let ew = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
  let eO = /^\w*$/;
  function eA(e, ...t) {
    let r = t.length;
    if (r > 1 && eg(e, t[0], t[1])) {
      t = [];
    } else if (r > 2 && eg(t[0], t[1], t[2])) {
      t = [t[0]];
    }
    return function (e, t, r) {
      if (e == null) {
        return [];
      }
      if (!Array.isArray(e)) {
        e = eh(e) ? Array.from(e) : Object.values(e);
      }
      if (!Array.isArray(t)) {
        t = t == null ? [null] : [t];
      }
      if (t.length === 0) {
        t = [null];
      }
      if (!Array.isArray(r)) {
        r = r == null ? [] : [r];
      }
      r = r.map(e => String(e));
      let n = (e, t) => {
        let r = e;
        let n = 0;
        for (; n < t.length && r != null; ++n) {
          r = r[t[n]];
        }
        if (n > 0 && n === t.length) {
          return r;
        } else {
          return undefined;
        }
      };
      let i = t.map(e => {
        var t;
        if (Array.isArray(e) && e.length === 1) {
          e = e[0];
        }
        if (e == null || typeof e == "function" || Array.isArray(e) || !Array.isArray(t = e) && (typeof t == "number" || typeof t == "boolean" || t == null || a(t) || typeof t == "string" && (eO.test(t) || !ew.test(t)) || 0)) {
          return e;
        } else {
          return {
            key: e,
            path: o(e)
          };
        }
      });
      return e.map(e => ({
        original: e,
        criteria: i.map(t => ((e, t) => {
          if (e == null) {
            return t;
          }
          if (t != null) {
            if (typeof e == "object" && "key" in e) {
              if (Object.hasOwn(t, e.key)) {
                return t[e.key];
              } else {
                return n(t, e.path);
              }
            } else if (typeof e == "function") {
              return e(t);
            } else if (Array.isArray(e)) {
              return n(t, e);
            } else {
              return t[e];
            }
          }
        })(t, e))
      })).slice().sort((e, t) => {
        for (let n = 0; n < i.length; n++) {
          let i = ex(e.criteria[n], t.criteria[n], r[n]);
          if (i !== 0) {
            return i;
          }
        }
        return 0;
      }).map(e => e.original);
    }(e, function (e, t = 1) {
      let r = [];
      let n = Math.floor(t);
      let i = (e, t) => {
        for (let a = 0; a < e.length; a++) {
          let o = e[a];
          if (Array.isArray(o) && t < n) {
            i(o, t + 1);
          } else {
            r.push(o);
          }
        }
      };
      i(e, 0);
      return r;
    }(t), ["asc"]);
  }
  var eS = e => e.legend.settings;
  var eE = e => e.legend.size;
  var eP = ea([e => e.legend.payload, eS], (e, t) => {
    var r = t.itemSorter;
    var n = e.flat(1);
    if (r) {
      return eA(n, r);
    } else {
      return n;
    }
  });
  function ej(e) {
    if (typeof e == "object" && "length" in e) {
      return e;
    } else {
      return Array.from(e);
    }
  }
  function ek(e) {
    return function () {
      return e;
    };
  }
  function eI(e, t) {
    if ((i = e.length) > 1) {
      var r;
      var n;
      for (var i, a = 1, o = e[t[0]], l = o.length; a < i; ++a) {
        n = o;
        o = e[t[a]];
        r = 0;
        for (; r < l; ++r) {
          o[r][1] += o[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1];
        }
      }
    }
  }
  function eC(e) {
    for (var t = e.length, r = Array(t); --t >= 0;) {
      r[t] = t;
    }
    return r;
  }
  function eT(e, t) {
    return e[t];
  }
  function eM(e) {
    let t = [];
    t.key = e;
    return t;
  }
  function e_(e, t = 4) {
    var r = 10 ** t;
    var n = Math.round(e * r) / r;
    if (Object.is(n, -0)) {
      return 0;
    } else {
      return n;
    }
  }
  function eD(e) {
    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
      r[n - 1] = arguments[n];
    }
    return e.reduce((e, t, n) => {
      var i = r[n - 1];
      if (typeof i == "string") {
        return e + i + t;
      } else if (i !== undefined) {
        return e + e_(i) + t;
      } else {
        return e + t;
      }
    }, "");
  }
  e.s(["selectLegendPayload", 0, eP, "selectLegendSettings", 0, eS, "selectLegendSize", 0, eE], 79576);
  Array.prototype.slice;
  e.s(["default", 0, ek], 52977);
  e.s(["round", 0, e_, "roundTemplateLiteral", 0, eD], 74481);
  var eN = e => e === 0 ? 0 : e > 0 ? 1 : -1;
  var eL = e => typeof e == "number" && e != +e;
  var eR = e => typeof e == "string" && e.length > 1 && e.indexOf("%") === e.length - 1;
  var ez = e => (typeof e == "number" || e instanceof Number) && !eL(e);
  var eB = e => ez(e) || typeof e == "string";
  var eF = 0;
  var eU = e => {
    var t = ++eF;
    return `${e || ""}${t}`;
  };
  function e$(e, t) {
    var r;
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var i = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    if (!ez(e) && typeof e != "string") {
      return n;
    }
    if (eR(e)) {
      if (t == null) {
        return n;
      }
      var a = e.indexOf("%");
      r = t * parseFloat(e.slice(0, a)) / 100;
    } else {
      r = +e;
    }
    if (eL(r)) {
      r = n;
    }
    if (i && t != null && r > t) {
      r = t;
    }
    return r;
  }
  var eK = e => {
    if (!Array.isArray(e)) {
      return false;
    }
    for (var t = e.length, r = {}, n = 0; n < t; n++) {
      if (r[String(e[n])]) {
        return true;
      } else {
        r[String(e[n])] = true;
      }
    }
    return false;
  };
  function eW(e, t, r) {
    if (ez(e) && ez(t)) {
      return e_(e + r * (t - e));
    } else {
      return t;
    }
  }
  function eV(e, t, r) {
    if (e && e.length) {
      return e.find(e => e && (typeof t == "function" ? t(e) : l(e, t)) === r);
    }
  }
  var eH = e => e == null;
  var eG = e => eH(e) ? e : `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
  function eY(e) {
    return e != null;
  }
  function eq() {}
  function eX(e, t, r) {
    if (Array.isArray(e) && e && t + r !== 0) {
      return e.slice(t, r + 1);
    } else {
      return e;
    }
  }
  function eZ(e) {
    return Number.isFinite(e);
  }
  function eQ(e) {
    return typeof e == "number" && e > 0 && Number.isFinite(e);
  }
  function eJ(e) {
    if (e) {
      return {
        x: e.x,
        y: e.y,
        upperWidth: "upperWidth" in e ? e.upperWidth : e.width,
        lowerWidth: "lowerWidth" in e ? e.lowerWidth : e.width,
        width: e.width,
        height: e.height
      };
    }
  }
  function e0(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function e1(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        e0(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        e0(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  e.s(["findEntryInArray", 0, eV, "getPercentValue", 0, e$, "hasDuplicate", 0, eK, "interpolate", 0, eW, "isNan", 0, eL, "isNotNil", 0, eY, "isNullish", 0, eH, "isNumOrStr", 0, eB, "isNumber", 0, ez, "isPercent", 0, eR, "mathSign", 0, eN, "noop", 0, eq, "uniqueId", 0, eU, "upperFirst", 0, eG], 130);
  e.s(["isPositiveNumber", 0, eQ, "isWellBehavedNumber", 0, eZ], 99428);
  var e2 = e => {
    var t = e.viewBox;
    var r = e.position;
    var n = e.offset;
    var i = n === undefined ? 0 : n;
    var a = e.parentViewBox;
    var o = e.clamp;
    var l = eJ(t);
    var u = l.x;
    var c = l.y;
    var s = l.height;
    var f = l.upperWidth;
    var d = l.lowerWidth;
    var p = u + (f - d) / 2;
    var h = (u + p) / 2;
    var y = (f + d) / 2;
    var v = s >= 0 ? 1 : -1;
    var m = v * i;
    var g = v > 0 ? "end" : "start";
    var b = v > 0 ? "start" : "end";
    var x = f >= 0 ? 1 : -1;
    var w = x * i;
    var O = x > 0 ? "end" : "start";
    var A = x > 0 ? "start" : "end";
    if (r === "top") {
      var S = {
        x: u + f / 2,
        y: c - m,
        horizontalAnchor: "middle",
        verticalAnchor: g
      };
      if (o && a) {
        S.height = Math.max(c - a.y, 0);
        S.width = f;
      }
      return S;
    }
    if (r === "bottom") {
      var E = {
        x: p + d / 2,
        y: c + s + m,
        horizontalAnchor: "middle",
        verticalAnchor: b
      };
      if (o && a) {
        E.height = Math.max(a.y + a.height - (c + s), 0);
        E.width = d;
      }
      return E;
    }
    if (r === "left") {
      var P = {
        x: h - w,
        y: c + s / 2,
        horizontalAnchor: O,
        verticalAnchor: "middle"
      };
      if (o && a) {
        P.width = Math.max(P.x - a.x, 0);
        P.height = s;
      }
      return P;
    }
    if (r === "right") {
      var j = {
        x: h + y + w,
        y: c + s / 2,
        horizontalAnchor: A,
        verticalAnchor: "middle"
      };
      if (o && a) {
        j.width = Math.max(a.x + a.width - j.x, 0);
        j.height = s;
      }
      return j;
    }
    var k = o && a ? {
      width: y,
      height: s
    } : {};
    if (r === "insideLeft") {
      return e1({
        x: h + w,
        y: c + s / 2,
        horizontalAnchor: A,
        verticalAnchor: "middle"
      }, k);
    } else if (r === "insideRight") {
      return e1({
        x: h + y - w,
        y: c + s / 2,
        horizontalAnchor: O,
        verticalAnchor: "middle"
      }, k);
    } else if (r === "insideTop") {
      return e1({
        x: u + f / 2,
        y: c + m,
        horizontalAnchor: "middle",
        verticalAnchor: b
      }, k);
    } else if (r === "insideBottom") {
      return e1({
        x: p + d / 2,
        y: c + s - m,
        horizontalAnchor: "middle",
        verticalAnchor: g
      }, k);
    } else if (r === "insideTopLeft") {
      return e1({
        x: u + w,
        y: c + m,
        horizontalAnchor: A,
        verticalAnchor: b
      }, k);
    } else if (r === "insideTopRight") {
      return e1({
        x: u + f - w,
        y: c + m,
        horizontalAnchor: O,
        verticalAnchor: b
      }, k);
    } else if (r === "insideBottomLeft") {
      return e1({
        x: p + w,
        y: c + s - m,
        horizontalAnchor: A,
        verticalAnchor: g
      }, k);
    } else if (r === "insideBottomRight") {
      return e1({
        x: p + d - w,
        y: c + s - m,
        horizontalAnchor: O,
        verticalAnchor: g
      }, k);
    } else if (r && typeof r == "object" && (ez(r.x) || eR(r.x)) && (ez(r.y) || eR(r.y))) {
      return e1({
        x: u + e$(r.x, y),
        y: c + e$(r.y, s),
        horizontalAnchor: "end",
        verticalAnchor: "end"
      }, k);
    } else {
      return e1({
        x: u + f / 2,
        y: c + s / 2,
        horizontalAnchor: "middle",
        verticalAnchor: "middle"
      }, k);
    }
  };
  var e5 = ["top", "left", "right", "bottom"];
  function e3(e) {
    return e != null && (typeof e == "object" || e5.includes(e));
  }
  function e6(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function e4(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        e6(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        e6(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function e8(e, t, r) {
    if (eH(e) || eH(t)) {
      return r;
    } else if (eB(t)) {
      return l(e, t, r);
    } else if (typeof t == "function") {
      return t(e);
    } else {
      return r;
    }
  }
  e.s(["getCartesianPosition", 0, e2, "isOutsidePosition", 0, e3], 54034);
  var e7 = (e, t, r) => {
    if (t && r) {
      var n = r.width;
      var i = r.height;
      var a = t.align;
      var o = t.verticalAlign;
      var l = t.layout;
      var u = t.position;
      var c = t.offset;
      var s = c === undefined ? 0 : c;
      if (u != null) {
        if (e3(u)) {
          if (u === "top" && ez(e.top)) {
            return e4(e4({}, e), {}, {
              top: e.top + (i || 0) + s
            });
          }
          if (u === "bottom" && ez(e.bottom)) {
            return e4(e4({}, e), {}, {
              bottom: e.bottom + (i || 0) + s
            });
          }
          if (u === "left" && ez(e.left)) {
            return e4(e4({}, e), {}, {
              left: e.left + (n || 0) + s
            });
          }
          if (u === "right" && ez(e.right)) {
            return e4(e4({}, e), {}, {
              right: e.right + (n || 0) + s
            });
          }
        }
        return e;
      }
      if ((l === "vertical" || l === "horizontal" && o === "middle") && a !== "center" && ez(e[a])) {
        return e4(e4({}, e), {}, {
          [a]: e[a] + (n || 0)
        });
      }
      if ((l === "horizontal" || l === "vertical" && a === "center") && o !== "middle" && ez(e[o])) {
        return e4(e4({}, e), {}, {
          [o]: e[o] + (i || 0)
        });
      }
    }
    return e;
  };
  var e9 = (e, t) => e === "horizontal" && t === "xAxis" || e === "vertical" && t === "yAxis" || e === "centric" && t === "angleAxis" || e === "radial" && t === "radiusAxis";
  var te = {
    sign: e => {
      var t;
      var r = e.length;
      if (!(r <= 0)) {
        var n = (t = e[0]) == null ? undefined : t.length;
        if (n != null && !(n <= 0)) {
          for (var i = 0; i < n; ++i) {
            var a = 0;
            var o = 0;
            for (var l = 0; l < r; ++l) {
              var u = e[l];
              var c = u == null ? undefined : u[i];
              if (c != null) {
                var s = c[1];
                var f = c[0];
                var d = eL(s) ? f : s;
                if (d >= 0) {
                  c[0] = a;
                  a += d;
                  c[1] = a;
                } else {
                  c[0] = o;
                  o += d;
                  c[1] = o;
                }
              }
            }
          }
        }
      }
    },
    expand: function (e, t) {
      if ((n = e.length) > 0) {
        var r;
        var n;
        var i;
        for (var a = 0, o = e[0].length; a < o; ++a) {
          for (i = r = 0; r < n; ++r) {
            i += e[r][a][1] || 0;
          }
          if (i) {
            for (r = 0; r < n; ++r) {
              e[r][a][1] /= i;
            }
          }
        }
        eI(e, t);
      }
    },
    none: eI,
    silhouette: function (e, t) {
      if ((r = e.length) > 0) {
        var r;
        for (var n = 0, i = e[t[0]], a = i.length; n < a; ++n) {
          for (var o = 0, l = 0; o < r; ++o) {
            l += e[o][n][1] || 0;
          }
          i[n][1] += i[n][0] = -l / 2;
        }
        eI(e, t);
      }
    },
    wiggle: function (e, t) {
      if ((i = e.length) > 0 && (n = (r = e[t[0]]).length) > 0) {
        var r;
        for (var n, i, a = 0, o = 1; o < n; ++o) {
          for (var l = 0, u = 0, c = 0; l < i; ++l) {
            var s = e[t[l]];
            var f = s[o][1] || 0;
            var d = (f - (s[o - 1][1] || 0)) / 2;
            for (var p = 0; p < l; ++p) {
              var h = e[t[p]];
              d += (h[o][1] || 0) - (h[o - 1][1] || 0);
            }
            u += f;
            c += d * f;
          }
          r[o - 1][1] += r[o - 1][0] = a;
          if (u) {
            a -= c / u;
          }
        }
        r[o - 1][1] += r[o - 1][0] = a;
        eI(e, t);
      }
    },
    positive: e => {
      var t;
      var r = e.length;
      if (!(r <= 0)) {
        var n = (t = e[0]) == null ? undefined : t.length;
        if (n != null && !(n <= 0)) {
          for (var i = 0; i < n; ++i) {
            var a = 0;
            for (var o = 0; o < r; ++o) {
              var l = e[o];
              var u = l == null ? undefined : l[i];
              if (u != null) {
                var c = eL(u[1]) ? u[0] : u[1];
                if (c >= 0) {
                  u[0] = a;
                  a += c;
                  u[1] = a;
                } else {
                  u[0] = 0;
                  u[1] = 0;
                }
              }
            }
          }
        }
      }
    }
  };
  var tt = (e, t, r) => {
    var i = te[r] ?? eI;
    var a = function () {
      var e = ek([]);
      var t = eC;
      var r = eI;
      var n = eT;
      function i(i) {
        var a;
        var o;
        var l = Array.from(e.apply(this, arguments), eM);
        var u = l.length;
        var c = -1;
        for (let e of i) {
          a = 0;
          ++c;
          for (; a < u; ++a) {
            (l[a][c] = [0, +n(e, l[a].key, c, i)]).data = e;
          }
        }
        a = 0;
        o = ej(t(l));
        for (; a < u; ++a) {
          l[o[a]].index = a;
        }
        r(l, o);
        return l;
      }
      i.keys = function (t) {
        if (arguments.length) {
          e = typeof t == "function" ? t : ek(Array.from(t));
          return i;
        } else {
          return e;
        }
      };
      i.value = function (e) {
        if (arguments.length) {
          n = typeof e == "function" ? e : ek(+e);
          return i;
        } else {
          return n;
        }
      };
      i.order = function (e) {
        if (arguments.length) {
          t = e == null ? eC : typeof e == "function" ? e : ek(Array.from(e));
          return i;
        } else {
          return t;
        }
      };
      i.offset = function (e) {
        if (arguments.length) {
          r = e == null ? eI : e;
          return i;
        } else {
          return r;
        }
      };
      return i;
    }().keys(t).value((e, t) => Number(e8(e, t, 0))).order(eC).offset(i)(e);
    a.forEach((r, n) => {
      r.forEach((r, i) => {
        var a = e8(e[i], t[n], 0);
        if (Array.isArray(a) && a.length === 2 && ez(a[0]) && ez(a[1])) {
          r[0] = a[0];
          r[1] = a[1];
        }
      });
    });
    return a;
  };
  var tr = (e, t, r) => {
    if (e != null && Object.keys(e).length !== 0) {
      let n;
      return [(n = Object.keys(e).reduce((n, i) => {
        var a = e[i];
        if (!a) {
          return n;
        }
        var o = a.stackedData.reduce((e, n) => {
          var i;
          var a = [Math.min(...(i = eX(n, t, r).flat(2).filter(ez))), Math.max(...i)];
          if (eZ(a[0]) && eZ(a[1])) {
            return [Math.min(e[0], a[0]), Math.max(e[1], a[1])];
          } else {
            return e;
          }
        }, [Infinity, -Infinity]);
        return [Math.min(o[0], n[0]), Math.max(o[1], n[1])];
      }, [Infinity, -Infinity]))[0] === Infinity ? 0 : n[0], n[1] === -Infinity ? 0 : n[1]];
    }
  };
  var tn = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
  var ti = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
  var ta = (e, t, r) => {
    if (e && e.scale && e.scale.bandwidth) {
      var n = e.scale.bandwidth();
      if (!r || n > 0) {
        return n;
      }
    }
    if (e && t && t.length >= 2) {
      var i = eA(t, e => e.coordinate);
      var a = [];
      var o = 0;
      for (var l = 1, u = i.length; l < u; l++) {
        var c;
        var s;
        var f = (((c = i[l]) == null ? undefined : c.coordinate) || 0) - (((s = i[l - 1]) == null ? undefined : s.coordinate) || 0);
        a.push(f);
        o = Math.max(f, o);
      }
      var d = o * 0.0001;
      var p = Infinity;
      for (var h of a) {
        if (h > d) {
          p = Math.min(h, p);
        }
      }
      if (p === Infinity) {
        return 0;
      } else {
        return p;
      }
    }
    if (r) {
      return undefined;
    } else {
      return 0;
    }
  };
  function to(e) {
    var t = e.tooltipEntrySettings;
    var r = e.dataKey;
    var n = e.payload;
    var i = e.value;
    var a = e.name;
    return e4(e4({}, t), {}, {
      dataKey: r,
      payload: n,
      value: i,
      name: a
    });
  }
  var tl = (e, t) => t === "horizontal" ? e.relativeX : t === "vertical" ? e.relativeY : undefined;
  var tu = (e, t) => t === "centric" ? e.angle : e.radius;
  e.s(["MAX_VALUE_REG", 0, ti, "MIN_VALUE_REG", 0, tn, "appendOffsetOfLegend", 0, e7, "calculateCartesianTooltipPos", 0, tl, "calculatePolarTooltipPos", 0, tu, "getBandSizeOfAxis", 0, ta, "getCateCoordinateOfLine", 0, function (e) {
    var t = e.axis;
    var r = e.ticks;
    var n = e.bandSize;
    var i = e.entry;
    var a = e.index;
    var o = e.dataKey;
    if (t.type === "category") {
      if (!t.allowDuplicatedCategory && t.dataKey && !eH(i[t.dataKey])) {
        var l = eV(r, "value", i[t.dataKey]);
        if (l) {
          return l.coordinate + n / 2;
        }
      }
      if (r != null && r[a]) {
        return r[a].coordinate + n / 2;
      } else {
        return null;
      }
    }
    var u = e8(i, eH(o) ? t.dataKey : o);
    var c = t.scale.map(u);
    if (ez(c)) {
      return c;
    } else {
      return null;
    }
  }, "getCoordinatesOfGrid", 0, (e, t, r, n) => {
    if (n) {
      return e.map(e => e.coordinate);
    }
    var i;
    var a;
    var o = e.map(e => {
      if (e.coordinate === t) {
        i = true;
      }
      if (e.coordinate === r) {
        a = true;
      }
      return e.coordinate;
    });
    if (!i) {
      o.push(t);
    }
    if (!a) {
      o.push(r);
    }
    return o;
  }, "getDomainOfStackGroups", 0, tr, "getNormalizedStackId", 0, function (e) {
    if (e == null) {
      return undefined;
    } else {
      return String(e);
    }
  }, "getStackedData", 0, tt, "getTicksOfAxis", 0, (e, t, r) => {
    if (!e) {
      return null;
    }
    var n = e.duplicateDomain;
    var i = e.type;
    var a = e.range;
    var o = e.scale;
    var l = e.realScaleType;
    var u = e.isCategorical;
    var c = e.categoricalDomain;
    var s = e.tickCount;
    var f = e.ticks;
    var d = e.niceTicks;
    var p = e.axisType;
    if (!o) {
      return null;
    }
    var h = l === "scaleBand" && o.bandwidth ? o.bandwidth() / 2 : 2;
    var y = (t || r) && i === "category" && o.bandwidth ? o.bandwidth() / h : 0;
    y = p === "angleAxis" && a && a.length >= 2 ? eN(a[0] - a[1]) * 2 * y : y;
    if (t && (f || d)) {
      return (f || d || []).map((e, t) => {
        var r = n ? n.indexOf(e) : e;
        var i = o.map(r);
        if (eZ(i)) {
          return {
            coordinate: i + y,
            value: e,
            offset: y,
            index: t
          };
        } else {
          return null;
        }
      }).filter(eY);
    } else if (u && c) {
      return c.map((e, t) => {
        var r = o.map(e);
        if (eZ(r)) {
          return {
            coordinate: r + y,
            value: e,
            index: t,
            offset: y
          };
        } else {
          return null;
        }
      }).filter(eY);
    } else if (o.ticks && !r && s != null) {
      return o.ticks(s).map((e, t) => {
        var r = o.map(e);
        if (eZ(r)) {
          return {
            coordinate: r + y,
            value: e,
            index: t,
            offset: y
          };
        } else {
          return null;
        }
      }).filter(eY);
    } else {
      return o.domain().map((e, t) => {
        var r = o.map(e);
        if (eZ(r)) {
          return {
            coordinate: r + y,
            value: n ? n[e] : e,
            index: t,
            offset: y
          };
        } else {
          return null;
        }
      }).filter(eY);
    }
  }, "getTooltipEntry", 0, to, "getTooltipNameProp", 0, function (e, t) {
    if (e != null) {
      return String(e);
    } else if (typeof t == "string") {
      return t;
    } else {
      return undefined;
    }
  }, "getValueByDataKey", 0, e8, "isCategoricalAxis", 0, e9], 78450);
  var tc = e => e.layout.width;
  var ts = e => e.layout.height;
  var tf = e => e.layout.scale;
  var td = e => e.layout.margin;
  e.s(["selectChartHeight", 0, ts, "selectChartWidth", 0, tc, "selectContainerScale", 0, tf, "selectMargin", 0, td], 95292);
  var tp = ea(e => e.cartesianAxis.xAxis, e => Object.values(e));
  var th = ea(e => e.cartesianAxis.yAxis, e => Object.values(e));
  var ty = "data-recharts-item-index";
  var tv = "data-recharts-item-id";
  function tm(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function tg(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        tm(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        tm(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  e.s(["DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME", 0, tv, "DATA_ITEM_INDEX_ATTRIBUTE_NAME", 0, ty, "DEFAULT_X_AXIS_HEIGHT", 0, 30, "DEFAULT_Y_AXIS_WIDTH", 0, 60], 35001);
  var tb = ea([tc, ts, td, e => e.brush.height, function (e) {
    return th(e).reduce((e, t) => t.orientation !== "left" || t.mirror || t.hide ? e : e + (typeof t.width == "number" ? t.width : 60), 0);
  }, function (e) {
    return th(e).reduce((e, t) => t.orientation !== "right" || t.mirror || t.hide ? e : e + (typeof t.width == "number" ? t.width : 60), 0);
  }, function (e) {
    return tp(e).reduce((e, t) => t.orientation !== "top" || t.mirror || t.hide ? e : e + (typeof t.height == "number" ? t.height : 30), 0);
  }, function (e) {
    return tp(e).reduce((e, t) => t.orientation !== "bottom" || t.mirror || t.hide ? e : e + (typeof t.height == "number" ? t.height : 30), 0);
  }, eS, eE], (e, t, r, n, i, a, o, l, u, c) => {
    var s = {
      left: (r.left || 0) + i,
      right: (r.right || 0) + a
    };
    var f = tg(tg({}, {
      top: (r.top || 0) + o,
      bottom: (r.bottom || 0) + l
    }), s);
    var d = f.bottom;
    f.bottom += n;
    var p = e - (f = e7(f, u, c)).left - f.right;
    var h = t - f.top - f.bottom;
    return tg(tg({
      brushBottom: d
    }, f), {}, {
      width: Math.max(p, 0),
      height: Math.max(h, 0)
    });
  });
  var tx = ea(tb, e => ({
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  }));
  var tw = ea(tc, ts, (e, t) => ({
    x: 0,
    y: 0,
    width: e,
    height: t
  }));
  function tO(e) {
    var t;
    if (e) {
      if ((e = a(t = e) ? NaN : Number(t)) === Infinity || e === -Infinity) {
        return (e < 0 ? -1 : 1) * Number.MAX_VALUE;
      } else if (e == e) {
        return e;
      } else {
        return 0;
      }
    } else if (e === 0) {
      return e;
    } else {
      return 0;
    }
  }
  function tA(e, t, r) {
    if (r && typeof r != "number" && eg(e, t, r)) {
      t = r = undefined;
    }
    e = tO(e);
    if (t === undefined) {
      t = e;
      e = 0;
    } else {
      t = tO(t);
    }
    r = r === undefined ? e < t ? 1 : -1 : tO(r);
    let n = Math.max(Math.ceil((t - e) / (r || 1)), 0);
    let i = Array(n);
    for (let t = 0; t < n; t++) {
      i[t] = e;
      e += r;
    }
    return i;
  }
  e.s(["selectAxisViewBox", 0, tw, "selectChartOffsetInternal", 0, tb, "selectChartViewBox", 0, tx], 58467);
  var tS = e.i(10977);
  var tE = e.i(42782);
  var tP = (0, tS.createContext)(null);
  var tj = e => e;
  var tk = () => {
    var e = (0, tS.useContext)(tP);
    if (e) {
      return e.store.dispatch;
    } else {
      return tj;
    }
  };
  var tI = () => {};
  var tC = () => tI;
  var tT = (e, t) => e === t;
  function tM(e) {
    var t = (0, tS.useContext)(tP);
    var r = (0, tS.useMemo)(() => t ? t => {
      if (t != null) {
        return e(t);
      }
    } : tI, [t, e]);
    return (0, tE.useSyncExternalStoreWithSelector)(t ? t.subscription.addNestedSub : tC, t ? t.store.getState : tI, t ? t.store.getState : tI, r, tT);
  }
  e.s(["useAppDispatch", 0, tk, "useAppSelector", 0, tM], 19379);
  var t_ = Symbol.for("immer-nothing");
  var tD = Symbol.for("immer-draftable");
  var tN = Symbol.for("immer-state");
  function tL(e) {
    throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
  }
  var tR = Object;
  var tz = tR.getPrototypeOf;
  var tB = "constructor";
  var tF = "prototype";
  var tU = "configurable";
  var t$ = "enumerable";
  var tK = "writable";
  var tW = "value";
  var tV = e => !!e && !!e[tN];
  function tH(e) {
    return !!e && (tq(e) || t1(e) || !!e[tD] || !!e[tB]?.[tD] || t2(e) || t5(e));
  }
  var tG = tR[tF][tB].toString();
  var tY = new WeakMap();
  function tq(e) {
    if (!e || !t3(e)) {
      return false;
    }
    let t = tz(e);
    if (t === null || t === tR[tF]) {
      return true;
    }
    let r = tR.hasOwnProperty.call(t, tB) && t[tB];
    if (r === Object) {
      return true;
    }
    if (!t6(r)) {
      return false;
    }
    let n = tY.get(r);
    if (n === undefined) {
      n = Function.toString.call(r);
      tY.set(r, n);
    }
    return n === tG;
  }
  function tX(e, t, r = true) {
    if (tZ(e) === 0) {
      (r ? Reflect.ownKeys(e) : tR.keys(e)).forEach(r => {
        t(r, e[r], e);
      });
    } else {
      e.forEach((r, n) => t(n, r, e));
    }
  }
  function tZ(e) {
    let t = e[tN];
    if (t) {
      return t.type_;
    } else if (t1(e)) {
      return 1;
    } else if (t2(e)) {
      return 2;
    } else {
      return !!t5(e) * 3;
    }
  }
  var tQ = (e, t, r = tZ(e)) => r === 2 ? e.has(t) : tR[tF].hasOwnProperty.call(e, t);
  var tJ = (e, t, r = tZ(e)) => r === 2 ? e.get(t) : e[t];
  var t0 = (e, t, r, n = tZ(e)) => {
    if (n === 2) {
      e.set(t, r);
    } else if (n === 3) {
      e.add(r);
    } else {
      e[t] = r;
    }
  };
  var t1 = Array.isArray;
  var t2 = e => e instanceof Map;
  var t5 = e => e instanceof Set;
  var t3 = e => typeof e == "object";
  var t6 = e => typeof e == "function";
  var t4 = e => e.modified_ ? e.copy_ : e.base_;
  function t8(e, t) {
    if (t2(e)) {
      return new Map(e);
    }
    if (t5(e)) {
      return new Set(e);
    }
    if (t1(e)) {
      return Array[tF].slice.call(e);
    }
    let r = tq(e);
    if (t !== true && (t !== "class_only" || r)) {
      let t = tz(e);
      if (t !== null && r) {
        return {
          ...e
        };
      }
      let n = tR.create(t);
      return tR.assign(n, e);
    }
    {
      let t = tR.getOwnPropertyDescriptors(e);
      delete t[tN];
      let r = Reflect.ownKeys(t);
      for (let n = 0; n < r.length; n++) {
        let i = r[n];
        let a = t[i];
        if (a[tK] === false) {
          a[tK] = true;
          a[tU] = true;
        }
        if (a.get || a.set) {
          t[i] = {
            [tU]: true,
            [tK]: true,
            [t$]: a[t$],
            [tW]: e[i]
          };
        }
      }
      return tR.create(tz(e), t);
    }
  }
  function t7(e, t = false) {
    if (!re(e) && !tV(e) && !!tH(e)) {
      if (tZ(e) > 1) {
        tR.defineProperties(e, {
          set: t9,
          add: t9,
          clear: t9,
          delete: t9
        });
      }
      tR.freeze(e);
      if (t) {
        tX(e, (e, t) => {
          t7(t, true);
        }, false);
      }
    }
    return e;
  }
  var t9 = {
    [tW]: function () {
      tL(2);
    }
  };
  function re(e) {
    return e === null || !t3(e) || tR.isFrozen(e);
  }
  var rt = "MapSet";
  var rr = "Patches";
  var rn = "ArrayMethods";
  var ri = {};
  function ra(e) {
    let t = ri[e];
    if (!t) {
      tL(0);
    }
    return t;
  }
  var ro = e => !!ri[e];
  function rl(e, t) {
    if (t) {
      e.patchPlugin_ = ra(rr);
      e.patches_ = [];
      e.inversePatches_ = [];
      e.patchListener_ = t;
    }
  }
  function ru(e) {
    rc(e);
    e.drafts_.forEach(rf);
    e.drafts_ = null;
  }
  function rc(e) {
    if (e === p) {
      p = e.parent_;
    }
  }
  var rs = e => p = {
    drafts_: [],
    parent_: p,
    immer_: e,
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0,
    handledSet_: new Set(),
    processedForPatches_: new Set(),
    mapSetPlugin_: ro(rt) ? ra(rt) : undefined,
    arrayMethodsPlugin_: ro(rn) ? ra(rn) : undefined
  };
  function rf(e) {
    let t = e[tN];
    if (t.type_ === 0 || t.type_ === 1) {
      t.revoke_();
    } else {
      t.revoked_ = true;
    }
  }
  function rd(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    let r = t.drafts_[0];
    if (e !== undefined && e !== r) {
      if (r[tN].modified_) {
        ru(t);
        tL(4);
      }
      if (tH(e)) {
        e = rp(t, e);
      }
      let {
        patchPlugin_: n
      } = t;
      if (n) {
        n.generateReplacementPatches_(r[tN].base_, e, t);
      }
    } else {
      e = rp(t, r);
    }
    (function (e, t, r = false) {
      if (!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_) {
        t7(t, r);
      }
    })(t, e, true);
    ru(t);
    if (t.patches_) {
      t.patchListener_(t.patches_, t.inversePatches_);
    }
    if (e !== t_) {
      return e;
    } else {
      return undefined;
    }
  }
  function rp(e, t) {
    if (re(t)) {
      return t;
    }
    let r = t[tN];
    if (!r) {
      return rb(t, e.handledSet_, e);
    }
    if (!ry(r, e)) {
      return t;
    }
    if (!r.modified_) {
      return r.base_;
    }
    if (!r.finalized_) {
      let {
        callbacks_: t
      } = r;
      if (t) {
        while (t.length > 0) {
          t.pop()(e);
        }
      }
      rg(r, e);
    }
    return r.copy_;
  }
  function rh(e) {
    e.finalized_ = true;
    e.scope_.unfinalizedDrafts_--;
  }
  var ry = (e, t) => e.scope_ === t;
  var rv = [];
  function rm(e, t, r, n) {
    let i = e.copy_ || e.base_;
    let a = e.type_;
    if (n !== undefined && tJ(i, n, a) === t) {
      t0(i, n, r, a);
      return;
    }
    if (!e.draftLocations_) {
      let t = e.draftLocations_ = new Map();
      tX(i, (e, r) => {
        if (tV(r)) {
          let n = t.get(r) || [];
          n.push(e);
          t.set(r, n);
        }
      });
    }
    for (let n of e.draftLocations_.get(t) ?? rv) {
      t0(i, n, r, a);
    }
  }
  function rg(e, t) {
    if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (e.assigned_?.size ?? 0) > 0)) {
      let {
        patchPlugin_: r
      } = t;
      if (r) {
        let n = r.getPath(e);
        if (n) {
          r.generatePatches_(e, n, t);
        }
      }
      rh(e);
    }
  }
  function rb(e, t, r) {
    if ((!!r.immer_.autoFreeze_ || !(r.unfinalizedDrafts_ < 1)) && !tV(e) && !t.has(e) && !!tH(e) && !re(e)) {
      t.add(e);
      tX(e, (n, i) => {
        if (tV(i)) {
          let t = i[tN];
          if (ry(t, r)) {
            t0(e, n, t4(t), e.type_);
            rh(t);
          }
        } else if (tH(i)) {
          rb(i, t, r);
        }
      });
    }
    return e;
  }
  var rx = {
    get(e, t) {
      var r;
      var n;
      var i;
      var a;
      let o;
      if (t === tN) {
        return e;
      }
      let l = e.scope_.arrayMethodsPlugin_;
      let u = e.type_ === 1 && typeof t == "string";
      if (u && l?.isArrayOperationMethod(t)) {
        return l.createMethodInterceptor(e, t);
      }
      let c = e.copy_ || e.base_;
      if (!tQ(c, t, e.type_)) {
        let n;
        r = e;
        if (n = rA(c, t)) {
          if (tW in n) {
            return n[tW];
          } else {
            return n.get?.call(r.draft_);
          }
        } else {
          return undefined;
        }
      }
      let s = c[t];
      if (e.finalized_ || !tH(s) || u && e.operationMethod && l?.isMutatingArrayMethod(e.operationMethod) && Number.isInteger(o = +t) && String(o) === t) {
        return s;
      }
      if (s === rO(e.base_, t) || (n = e, i = t, a = s, n.type_ === 1 && !!n.allIndicesReassigned_ && !n.assigned_?.get(i) && tH(a) && !a[tN] && n.baseRefs_.has(a))) {
        rE(e);
        let r = e.type_ === 1 ? +t : t;
        let n = rj(e.scope_, s, e, r);
        return e.copy_[r] = n;
      }
      return s;
    },
    has: (e, t) => t in (e.copy_ || e.base_),
    ownKeys: e => Reflect.ownKeys(e.copy_ || e.base_),
    set(e, t, r) {
      let n = rA(e.copy_ || e.base_, t);
      if (n?.set) {
        n.set.call(e.draft_, r);
        return true;
      }
      if (!e.modified_) {
        let n = rO(e.copy_ || e.base_, t);
        let i = n?.[tN];
        if (i && i.base_ === r) {
          e.copy_[t] = r;
          e.assigned_.set(t, false);
          return true;
        }
        if ((r === n ? r !== 0 || 1 / r == 1 / n : r != r && n != n) && (r !== undefined || tQ(e.base_, t, e.type_))) {
          return true;
        }
        rE(e);
        rS(e);
      }
      return e.copy_[t] === r && (r !== undefined || !!tQ(e.copy_, t, e.type_)) || !!Number.isNaN(r) && !!Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_.set(t, true), !function (e, t, r) {
        let {
          scope_: n
        } = e;
        if (tV(r)) {
          let i = r[tN];
          if (ry(i, n)) {
            i.callbacks_.push(function () {
              rE(e);
              rm(e, r, t4(i), t);
            });
          }
        } else if (tH(r)) {
          e.callbacks_.push(function () {
            let i = e.copy_ || e.base_;
            if (e.type_ === 3) {
              if (i.has(r)) {
                rb(r, n.handledSet_, n);
              }
            } else if (tJ(i, t, e.type_) === r && n.drafts_.length > 1 && (e.assigned_.get(t) ?? false) === true && e.copy_) {
              rb(tJ(e.copy_, t, e.type_), n.handledSet_, n);
            }
          });
        }
      }(e, t, r), true);
    },
    deleteProperty: (e, t) => {
      rE(e);
      if (rO(e.base_, t) !== undefined || t in e.base_) {
        e.assigned_.set(t, false);
        rS(e);
      } else {
        e.assigned_.delete(t);
      }
      if (e.copy_) {
        delete e.copy_[t];
      }
      return true;
    },
    getOwnPropertyDescriptor(e, t) {
      let r = e.copy_ || e.base_;
      let n = Reflect.getOwnPropertyDescriptor(r, t);
      if (n) {
        return {
          [tK]: true,
          [tU]: e.type_ !== 1 || t !== "length",
          [t$]: n[t$],
          [tW]: r[t]
        };
      } else {
        return n;
      }
    },
    defineProperty() {
      tL(11);
    },
    getPrototypeOf: e => tz(e.base_),
    setPrototypeOf() {
      tL(12);
    }
  };
  var rw = {};
  for (let e in rx) {
    let t = rx[e];
    rw[e] = function () {
      let e = arguments;
      e[0] = e[0][0];
      return t.apply(this, e);
    };
  }
  function rO(e, t) {
    let r = e[tN];
    return (r ? r.copy_ || r.base_ : e)[t];
  }
  function rA(e, t) {
    if (!(t in e)) {
      return;
    }
    let r = tz(e);
    while (r) {
      let e = Object.getOwnPropertyDescriptor(r, t);
      if (e) {
        return e;
      }
      r = tz(r);
    }
  }
  function rS(e) {
    if (!e.modified_) {
      e.modified_ = true;
      if (e.parent_) {
        rS(e.parent_);
      }
    }
  }
  function rE(e) {
    if (!e.copy_) {
      e.assigned_ = new Map();
      e.copy_ = t8(e.base_, e.scope_.immer_.useStrictShallowCopy_);
    }
  }
  rw.deleteProperty = function (e, t) {
    return rw.set.call(this, e, t, undefined);
  };
  rw.set = function (e, t, r) {
    return rx.set.call(this, e[0], t, r, e[0]);
  };
  var rP = class {
    constructor(e) {
      this.autoFreeze_ = true;
      this.useStrictShallowCopy_ = false;
      this.useStrictIteration_ = false;
      this.produce = (e, t, r) => {
        let n;
        if (t6(e) && !t6(t)) {
          let r = t;
          t = e;
          let n = this;
          return function (e = r, ...i) {
            return n.produce(e, e => t.call(this, e, ...i));
          };
        }
        if (!t6(t)) {
          tL(6);
        }
        if (r !== undefined && !t6(r)) {
          tL(7);
        }
        if (tH(e)) {
          let i = rs(this);
          let a = rj(i, e, undefined);
          let o = true;
          try {
            n = t(a);
            o = false;
          } finally {
            if (o) {
              ru(i);
            } else {
              rc(i);
            }
          }
          rl(i, r);
          return rd(n, i);
        }
        if (e && t3(e)) {
          tL(1);
        } else {
          if ((n = t(e)) === undefined) {
            n = e;
          }
          if (n === t_) {
            n = undefined;
          }
          if (this.autoFreeze_) {
            t7(n, true);
          }
          if (r) {
            let t = [];
            let i = [];
            ra(rr).generateReplacementPatches_(e, n, {
              patches_: t,
              inversePatches_: i
            });
            r(t, i);
          }
          return n;
        }
      };
      this.produceWithPatches = (e, t) => {
        let r;
        let n;
        if (t6(e)) {
          return (t, ...r) => this.produceWithPatches(t, t => e(t, ...r));
        } else {
          return [this.produce(e, t, (e, t) => {
            r = e;
            n = t;
          }), r, n];
        }
      };
      if ((e => typeof e == "boolean")(e?.autoFreeze)) {
        this.setAutoFreeze(e.autoFreeze);
      }
      if ((e => typeof e == "boolean")(e?.useStrictShallowCopy)) {
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
      }
      if ((e => typeof e == "boolean")(e?.useStrictIteration)) {
        this.setUseStrictIteration(e.useStrictIteration);
      }
    }
    createDraft(e) {
      if (!tH(e)) {
        tL(8);
      }
      if (tV(e)) {
        e = rk(e);
      }
      let t = rs(this);
      let r = rj(t, e, undefined);
      r[tN].isManual_ = true;
      rc(t);
      return r;
    }
    finishDraft(e, t) {
      let r = e && e[tN];
      if (!r || !r.isManual_) {
        tL(9);
      }
      let {
        scope_: n
      } = r;
      rl(n, t);
      return rd(undefined, n);
    }
    setAutoFreeze(e) {
      this.autoFreeze_ = e;
    }
    setUseStrictShallowCopy(e) {
      this.useStrictShallowCopy_ = e;
    }
    setUseStrictIteration(e) {
      this.useStrictIteration_ = e;
    }
    shouldUseStrictIteration() {
      return this.useStrictIteration_;
    }
    applyPatches(e, t) {
      let r;
      for (r = t.length - 1; r >= 0; r--) {
        let n = t[r];
        if (n.path.length === 0 && n.op === "replace") {
          e = n.value;
          break;
        }
      }
      if (r > -1) {
        t = t.slice(r + 1);
      }
      let n = ra(rr).applyPatches_;
      if (tV(e)) {
        return n(e, t);
      } else {
        return this.produce(e, e => n(e, t));
      }
    }
  };
  function rj(e, t, r, n) {
    let [i, a] = t2(t) ? ra(rt).proxyMap_(t, r) : t5(t) ? ra(rt).proxySet_(t, r) : function (e, t) {
      let r = t1(e);
      let n = {
        type_: +!!r,
        scope_: t ? t.scope_ : p,
        modified_: false,
        finalized_: false,
        assigned_: undefined,
        parent_: t,
        base_: e,
        draft_: null,
        copy_: null,
        revoke_: null,
        isManual_: false,
        callbacks_: undefined
      };
      let i = n;
      let a = rx;
      if (r) {
        i = [n];
        a = rw;
      }
      let {
        revoke: o,
        proxy: l
      } = Proxy.revocable(i, a);
      n.draft_ = l;
      n.revoke_ = o;
      return [l, n];
    }(t, r);
    (r?.scope_ ?? p).drafts_.push(i);
    a.callbacks_ = r?.callbacks_ ?? [];
    a.key_ = n;
    if (r && n !== undefined) {
      r.callbacks_.push(function (e) {
        if (!a || !ry(a, e)) {
          return;
        }
        e.mapSetPlugin_?.fixSetContents(a);
        let t = t4(a);
        rm(r, a.draft_ ?? a, t, n);
        rg(a, e);
      });
    } else {
      a.callbacks_.push(function (e) {
        e.mapSetPlugin_?.fixSetContents(a);
        let {
          patchPlugin_: t
        } = e;
        if (a.modified_ && t) {
          t.generatePatches_(a, [], e);
        }
      });
    }
    return i;
  }
  function rk(e) {
    if (!tV(e)) {
      tL(10);
    }
    return function e(t) {
      let r;
      if (!tH(t) || re(t)) {
        return t;
      }
      let n = t[tN];
      let i = true;
      if (n) {
        if (!n.modified_) {
          return n.base_;
        }
        n.finalized_ = true;
        r = t8(t, n.scope_.immer_.useStrictShallowCopy_);
        i = n.scope_.immer_.shouldUseStrictIteration();
      } else {
        r = t8(t, true);
      }
      tX(r, (t, n) => {
        t0(r, t, e(n));
      }, i);
      if (n) {
        n.finalized_ = false;
      }
      return r;
    }(e);
  }
  var rI = globalThis.Iterator;
  rI?.from;
  var rC = new rP().produce;
  function rT(e) {
    return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
  }
  var rM = typeof Symbol == "function" && Symbol.observable || "@@observable";
  var r_ = () => Math.random().toString(36).substring(7).split("").join(".");
  var rD = {
    INIT: `@@redux/INIT${r_()}`,
    REPLACE: `@@redux/REPLACE${r_()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${r_()}`
  };
  function rN(e) {
    if (typeof e != "object" || e === null) {
      return false;
    }
    let t = e;
    while (Object.getPrototypeOf(t) !== null) {
      t = Object.getPrototypeOf(t);
    }
    return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
  }
  function rL(e) {
    let t;
    let r = Object.keys(e);
    let n = {};
    for (let t = 0; t < r.length; t++) {
      let i = r[t];
      if (typeof e[i] == "function") {
        n[i] = e[i];
      }
    }
    let i = Object.keys(n);
    try {
      Object.keys(n).forEach(e => {
        let t = n[e];
        if (t(undefined, {
          type: rD.INIT
        }) === undefined) {
          throw Error(rT(12));
        }
        if (t(undefined, {
          type: rD.PROBE_UNKNOWN_ACTION()
        }) === undefined) {
          throw Error(rT(13));
        }
      });
    } catch (e) {
      t = e;
    }
    return function (e = {}, r) {
      if (t) {
        throw t;
      }
      let a = false;
      let o = {};
      for (let t = 0; t < i.length; t++) {
        let l = i[t];
        let u = n[l];
        let c = e[l];
        let s = u(c, r);
        if (s === undefined) {
          if (r) {
            r.type;
          }
          throw Error(rT(14));
        }
        o[l] = s;
        a = a || s !== c;
      }
      if (a = a || i.length !== Object.keys(e).length) {
        return o;
      } else {
        return e;
      }
    };
  }
  function rR(...e) {
    if (e.length === 0) {
      return e => e;
    } else if (e.length === 1) {
      return e[0];
    } else {
      return e.reduce((e, t) => (...r) => e(t(...r)));
    }
  }
  function rz(e) {
    return rN(e) && "type" in e && typeof e.type == "string";
  }
  function rB(e) {
    return ({
      dispatch: t,
      getState: r
    }) => n => i => typeof i == "function" ? i(t, r, e) : n(i);
  }
  var rF = rB();
  var rU = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
    if (arguments.length != 0) {
      if (typeof arguments[0] == "object") {
        return rR;
      } else {
        return rR.apply(null, arguments);
      }
    }
  };
  function r$(e, t) {
    function r(...n) {
      if (t) {
        let r = t(...n);
        if (!r) {
          throw Error(nw(0));
        }
        return {
          type: e,
          payload: r.payload,
          ...("meta" in r && {
            meta: r.meta
          }),
          ...("error" in r && {
            error: r.error
          })
        };
      }
      return {
        type: e,
        payload: n[0]
      };
    }
    r.toString = () => `${e}`;
    r.type = e;
    r.match = t => rz(t) && t.type === e;
    return r;
  }
  if (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__) {
    window.__REDUX_DEVTOOLS_EXTENSION__;
  }
  var rK = class e extends Array {
    constructor(...t) {
      super(...t);
      Object.setPrototypeOf(this, e.prototype);
    }
    static get [Symbol.species]() {
      return e;
    }
    concat(...e) {
      return super.concat.apply(this, e);
    }
    prepend(...t) {
      if (t.length === 1 && Array.isArray(t[0])) {
        return new e(...t[0].concat(this));
      } else {
        return new e(...t.concat(this));
      }
    }
  };
  function rW(e) {
    if (tH(e)) {
      return rC(e, () => {});
    } else {
      return e;
    }
  }
  function rV(e, t, r) {
    if (e.has(t)) {
      return e.get(t);
    } else {
      return e.set(t, r(t)).get(t);
    }
  }
  var rH = "RTK_autoBatch";
  var rG = () => e => ({
    payload: e,
    meta: {
      [rH]: true
    }
  });
  var rY = e => t => {
    setTimeout(t, e);
  };
  var rq = (e = {
    type: "raf"
  }) => t => (...r) => {
    let n;
    let i = t(...r);
    let a = true;
    let o = false;
    let l = false;
    let u = new Set();
    let c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? typeof window !== "undefined" && window.requestAnimationFrame ? (n = window.requestAnimationFrame, e => {
      let t = false;
      let r = () => {
        if (!t) {
          t = true;
          cancelAnimationFrame(i);
          clearTimeout(a);
          e();
        }
      };
      let i = n(r);
      let a = setTimeout(r, 100);
    }) : rY(10) : e.type === "callback" ? e.queueNotification : rY(e.timeout);
    let s = () => {
      l = false;
      if (o) {
        o = false;
        u.forEach(e => e());
      }
    };
    return Object.assign({}, i, {
      subscribe(e) {
        let t = i.subscribe(() => a && e());
        u.add(e);
        return () => {
          t();
          u.delete(e);
        };
      },
      dispatch(e) {
        try {
          if ((o = !(a = !e?.meta?.[rH])) && !l) {
            l = true;
            c(s);
          }
          return i.dispatch(e);
        } finally {
          a = true;
        }
      }
    });
  };
  function rX(e) {
    let t;
    let r = {};
    let n = [];
    let i = {
      addCase(e, t) {
        let n = typeof e == "string" ? e : e.type;
        if (!n) {
          throw Error(nw(28));
        }
        if (n in r) {
          throw Error(nw(29));
        }
        r[n] = t;
        return i;
      },
      addAsyncThunk: (e, t) => {
        if (t.pending) {
          r[e.pending.type] = t.pending;
        }
        if (t.rejected) {
          r[e.rejected.type] = t.rejected;
        }
        if (t.fulfilled) {
          r[e.fulfilled.type] = t.fulfilled;
        }
        if (t.settled) {
          n.push({
            matcher: e.settled,
            reducer: t.settled
          });
        }
        return i;
      },
      addMatcher: (e, t) => {
        n.push({
          matcher: e,
          reducer: t
        });
        return i;
      },
      addDefaultCase: e => {
        t = e;
        return i;
      }
    };
    e(i);
    return [r, n, t];
  }
  var rZ = Symbol.for("rtk-slice-createasyncthunk");
  (s = rQ || {}).reducer = "reducer";
  s.reducerWithPrepare = "reducerWithPrepare";
  s.asyncThunk = "asyncThunk";
  var rQ = s;
  var rJ = function ({
    creators: e
  } = {}) {
    let t = e?.asyncThunk?.[rZ];
    return function (e) {
      let r;
      let {
        name: n,
        reducerPath: i = n
      } = e;
      if (!n) {
        throw Error(nw(11));
      }
      let a = (typeof e.reducers == "function" ? e.reducers(function () {
        function e(e, t) {
          return {
            _reducerDefinitionType: "asyncThunk",
            payloadCreator: e,
            ...t
          };
        }
        e.withTypes = () => e;
        return {
          reducer: e => Object.assign({
            [e.name]: (...t) => e(...t)
          }[e.name], {
            _reducerDefinitionType: "reducer"
          }),
          preparedReducer: (e, t) => ({
            _reducerDefinitionType: "reducerWithPrepare",
            prepare: e,
            reducer: t
          }),
          asyncThunk: e
        };
      }()) : e.reducers) || {};
      let o = Object.keys(a);
      let l = {};
      let u = {};
      let c = {};
      let s = [];
      let f = {
        addCase(e, t) {
          let r = typeof e == "string" ? e : e.type;
          if (!r) {
            throw Error(nw(12));
          }
          if (r in u) {
            throw Error(nw(13));
          }
          u[r] = t;
          return f;
        },
        addMatcher: (e, t) => {
          s.push({
            matcher: e,
            reducer: t
          });
          return f;
        },
        exposeAction: (e, t) => {
          c[e] = t;
          return f;
        },
        exposeCaseReducer: (e, t) => {
          l[e] = t;
          return f;
        }
      };
      function d() {
        let [t = {}, r = [], n] = typeof e.extraReducers == "function" ? rX(e.extraReducers) : [e.extraReducers];
        let i = {
          ...t,
          ...u
        };
        return function (e, t) {
          let r;
          let [n, i, a] = rX(t);
          if (typeof e == "function") {
            r = () => rW(e());
          } else {
            let t = rW(e);
            r = () => t;
          }
          function o(e = r(), t) {
            let l = [n[t.type], ...i.filter(({
              matcher: e
            }) => e(t)).map(({
              reducer: e
            }) => e)];
            if (l.filter(e => !!e).length === 0) {
              l = [a];
            }
            return l.reduce((e, r) => {
              if (r) {
                if (tV(e)) {
                  let n = r(e, t);
                  if (n === undefined) {
                    return e;
                  } else {
                    return n;
                  }
                } else {
                  if (tH(e)) {
                    return rC(e, e => r(e, t));
                  }
                  let n = r(e, t);
                  if (n === undefined) {
                    if (e === null) {
                      return e;
                    }
                    throw Error("A case reducer on a non-draftable value must not return undefined");
                  }
                  return n;
                }
              }
              return e;
            }, e);
          }
          o.getInitialState = r;
          return o;
        }(e.initialState, e => {
          for (let t in i) {
            e.addCase(t, i[t]);
          }
          for (let t of s) {
            e.addMatcher(t.matcher, t.reducer);
          }
          for (let t of r) {
            e.addMatcher(t.matcher, t.reducer);
          }
          if (n) {
            e.addDefaultCase(n);
          }
        });
      }
      o.forEach(r => {
        let i = a[r];
        let o = {
          reducerName: r,
          type: `${n}/${r}`,
          createNotation: typeof e.reducers == "function"
        };
        if (i._reducerDefinitionType === "asyncThunk") {
          (function ({
            type: e,
            reducerName: t
          }, r, n, i) {
            if (!i) {
              throw Error(nw(18));
            }
            let {
              payloadCreator: a,
              fulfilled: o,
              pending: l,
              rejected: u,
              settled: c,
              options: s
            } = r;
            let f = i(e, a, s);
            n.exposeAction(t, f);
            if (o) {
              n.addCase(f.fulfilled, o);
            }
            if (l) {
              n.addCase(f.pending, l);
            }
            if (u) {
              n.addCase(f.rejected, u);
            }
            if (c) {
              n.addMatcher(f.settled, c);
            }
            n.exposeCaseReducer(t, {
              fulfilled: o || r0,
              pending: l || r0,
              rejected: u || r0,
              settled: c || r0
            });
          })(o, i, f, t);
        } else {
          (function ({
            type: e,
            reducerName: t,
            createNotation: r
          }, n, i) {
            let a;
            let o;
            if ("reducer" in n) {
              if (r && n._reducerDefinitionType !== "reducerWithPrepare") {
                throw Error(nw(17));
              }
              a = n.reducer;
              o = n.prepare;
            } else {
              a = n;
            }
            i.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, o ? r$(e, o) : r$(e));
          })(o, i, f);
        }
      });
      let p = e => e;
      let h = new Map();
      let y = new WeakMap();
      function v(e, t) {
        r ||= d();
        return r(e, t);
      }
      function m() {
        r ||= d();
        return r.getInitialState();
      }
      function g(t, r = false) {
        function n(e) {
          let i = e[t];
          if (i === undefined && r) {
            i = rV(y, n, m);
          }
          return i;
        }
        function i(t = p) {
          let n = rV(h, r, () => new WeakMap());
          return rV(n, t, () => {
            let n = {};
            for (let [i, a] of Object.entries(e.selectors ?? {})) {
              n[i] = function (e, t, r, n) {
                function i(a, ...o) {
                  let l = t(a);
                  if (l === undefined && n) {
                    l = r();
                  }
                  return e(l, ...o);
                }
                i.unwrapped = e;
                return i;
              }(a, t, () => rV(y, t, m), r);
            }
            return n;
          });
        }
        return {
          reducerPath: t,
          getSelectors: i,
          get selectors() {
            return i(n);
          },
          selectSlice: n
        };
      }
      let b = {
        name: n,
        reducer: v,
        actions: c,
        caseReducers: l,
        getInitialState: m,
        ...g(i),
        injectInto(e, {
          reducerPath: t,
          ...r
        } = {}) {
          let n = t ?? i;
          e.inject({
            reducerPath: n,
            reducer: v
          }, r);
          return {
            ...b,
            ...g(n, true)
          };
        }
      };
      return b;
    };
  }();
  function r0() {}
  var r1 = "listener";
  var r2 = "completed";
  var r5 = "cancelled";
  var r3 = `task-${r5}`;
  var r6 = `task-${r2}`;
  var r4 = `${r1}-${r5}`;
  var r8 = `${r1}-${r2}`;
  var r7 = class {
    constructor(e) {
      this.code = e;
      this.message = `task ${r5} (reason: ${e})`;
    }
    code;
    name = "TaskAbortError";
    message;
  };
  var r9 = (e, t) => {
    if (typeof e != "function") {
      throw TypeError(nw(32));
    }
  };
  var ne = () => {};
  var nt = (e, t = ne) => {
    e.catch(t);
    return e;
  };
  var nr = (e, t) => {
    e.addEventListener("abort", t, {
      once: true
    });
    return () => e.removeEventListener("abort", t);
  };
  var nn = e => {
    if (e.aborted) {
      throw new r7(e.reason);
    }
  };
  function ni(e, t) {
    let r = ne;
    return new Promise((n, i) => {
      let a = () => i(new r7(e.reason));
      if (e.aborted) {
        a();
      } else {
        r = nr(e, a);
        t.finally(() => r()).then(n, i);
      }
    }).finally(() => {
      r = ne;
    });
  }
  var na = async (e, t) => {
    try {
      await Promise.resolve();
      let t = await e();
      return {
        status: "ok",
        value: t
      };
    } catch (e) {
      return {
        status: e instanceof r7 ? "cancelled" : "rejected",
        error: e
      };
    } finally {
      t?.();
    }
  };
  var no = e => t => nt(ni(e, t).then(t => {
    nn(e);
    return t;
  }));
  var nl = e => {
    let t = no(e);
    return e => t(new Promise(t => setTimeout(t, e)));
  };
  var {
    assign: nu
  } = Object;
  var nc = {};
  var ns = "listenerMiddleware";
  var nf = e => {
    let {
      type: t,
      actionCreator: r,
      matcher: n,
      predicate: i,
      effect: a
    } = e;
    if (t) {
      i = r$(t).match;
    } else if (r) {
      t = r.type;
      i = r.match;
    } else if (n) {
      i = n;
    } else if (i) ;else {
      throw Error(nw(21));
    }
    r9(a, "options.listener");
    return {
      predicate: i,
      type: t,
      effect: a
    };
  };
  var nd = nu(e => {
    let {
      type: t,
      predicate: r,
      effect: n
    } = nf(e);
    return {
      id: ((e = 21) => {
        let t = "";
        let r = e;
        while (r--) {
          t += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[Math.random() * 64 | 0];
        }
        return t;
      })(),
      effect: n,
      type: t,
      predicate: r,
      pending: new Set(),
      unsubscribe: () => {
        throw Error(nw(22));
      }
    };
  }, {
    withTypes: () => nd
  });
  var np = (e, t) => {
    let {
      type: r,
      effect: n,
      predicate: i
    } = nf(t);
    return Array.from(e.values()).find(e => (typeof r == "string" ? e.type === r : e.predicate === i) && e.effect === n);
  };
  var nh = e => {
    e.pending.forEach(e => {
      e.abort(r4);
    });
  };
  var ny = (e, t, r) => {
    try {
      e(t, r);
    } catch (e) {
      setTimeout(() => {
        throw e;
      }, 0);
    }
  };
  var nv = nu(r$(`${ns}/add`), {
    withTypes: () => nv
  });
  var nm = r$(`${ns}/removeAll`);
  var ng = nu(r$(`${ns}/remove`), {
    withTypes: () => ng
  });
  var nb = (...e) => {
    console.error(`${ns}/error`, ...e);
  };
  var nx = (e = {}) => {
    let t = new Map();
    let r = new Map();
    let {
      extra: n,
      onError: i = nb
    } = e;
    r9(i, "onError");
    let a = e => {
      var r;
      (r = np(t, e) ?? nd(e)).unsubscribe = () => t.delete(r.id);
      t.set(r.id, r);
      return e => {
        r.unsubscribe();
        if (e?.cancelActive) {
          nh(r);
        }
      };
    };
    nu(a, {
      withTypes: () => a
    });
    let o = e => {
      let r = np(t, e);
      if (r) {
        r.unsubscribe();
        if (e.cancelActive) {
          nh(r);
        }
      }
      return !!r;
    };
    nu(o, {
      withTypes: () => o
    });
    let l = async (e, o, l, u) => {
      var c;
      var s;
      let f;
      let d = new AbortController();
      c = d.signal;
      f = async (e, t) => {
        nn(c);
        let r = () => {};
        let n = [new Promise((t, n) => {
          let i = a({
            predicate: e,
            effect: (e, r) => {
              r.unsubscribe();
              t([e, r.getState(), r.getOriginalState()]);
            }
          });
          r = () => {
            i();
            n();
          };
        })];
        if (t != null) {
          n.push(new Promise(e => setTimeout(e, t, null)));
        }
        try {
          let e = await ni(c, Promise.race(n));
          nn(c);
          return e;
        } finally {
          r();
        }
      };
      let p = (e, t) => nt(f(e, t));
      let h = [];
      try {
        let i;
        e.pending.add(d);
        i = r.get(e) ?? 0;
        r.set(e, i + 1);
        await Promise.resolve(e.effect(o, nu({}, l, {
          getOriginalState: u,
          condition: (e, t) => p(e, t).then(Boolean),
          take: p,
          delay: nl(d.signal),
          pause: no(d.signal),
          extra: n,
          signal: d.signal,
          fork: (s = d.signal, (e, t) => {
            r9(e, "taskExecutor");
            let r = new AbortController();
            nr(s, () => r.abort(s.reason));
            let n = na(async () => {
              nn(s);
              nn(r.signal);
              let t = await e({
                pause: no(r.signal),
                delay: nl(r.signal),
                signal: r.signal
              });
              nn(r.signal);
              return t;
            }, () => r.abort(r6));
            if (t?.autoJoin) {
              h.push(n.catch(ne));
            }
            return {
              result: no(s)(n),
              cancel() {
                r.abort(r3);
              }
            };
          }),
          unsubscribe: e.unsubscribe,
          subscribe: () => {
            t.set(e.id, e);
          },
          cancelActiveListeners: () => {
            e.pending.forEach((e, t, r) => {
              if (e !== d) {
                e.abort(r4);
                r.delete(e);
              }
            });
          },
          cancel: () => {
            d.abort(r4);
            e.pending.delete(d);
          },
          throwIfCancelled: () => {
            nn(d.signal);
          }
        })));
      } catch (e) {
        if (!(e instanceof r7)) {
          ny(i, e, {
            raisedBy: "effect"
          });
        }
      } finally {
        let t;
        await Promise.all(h);
        d.abort(r8);
        if ((t = r.get(e) ?? 1) === 1) {
          r.delete(e);
        } else {
          r.set(e, t - 1);
        }
        e.pending.delete(d);
      }
    };
    let u = () => {
      for (let e of r.keys()) {
        nh(e);
      }
      t.clear();
    };
    return {
      middleware: e => r => n => {
        let c;
        if (!rz(n)) {
          return r(n);
        }
        if (nv.match(n)) {
          return a(n.payload);
        }
        if (nm.match(n)) {
          u();
          return;
        }
        if (ng.match(n)) {
          return o(n.payload);
        }
        let s = e.getState();
        let f = () => {
          if (s === nc) {
            throw Error(nw(23));
          }
          return s;
        };
        try {
          c = r(n);
          if (t.size > 0) {
            let r = e.getState();
            for (let a of Array.from(t.values())) {
              let t = false;
              try {
                t = a.predicate(n, r, s);
              } catch (e) {
                t = false;
                ny(i, e, {
                  raisedBy: "predicate"
                });
              }
              if (t) {
                l(a, n, e, f);
              }
            }
          }
        } finally {
          s = nc;
        }
        return c;
      },
      startListening: a,
      stopListening: o,
      clearListeners: u
    };
  };
  function nw(e) {
    return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
  }
  var nO = rJ({
    name: "chartLayout",
    initialState: {
      layoutType: "horizontal",
      width: 0,
      height: 0,
      margin: {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
      },
      scale: 1
    },
    reducers: {
      setLayout(e, t) {
        e.layoutType = t.payload;
      },
      setChartSize(e, t) {
        e.width = t.payload.width;
        e.height = t.payload.height;
      },
      setMargin(e, t) {
        e.margin.top = t.payload.top ?? 0;
        e.margin.right = t.payload.right ?? 0;
        e.margin.bottom = t.payload.bottom ?? 0;
        e.margin.left = t.payload.left ?? 0;
      },
      setScale(e, t) {
        e.scale = t.payload;
      }
    }
  });
  var nA = nO.actions;
  var nS = nA.setMargin;
  var nE = nA.setLayout;
  var nP = nA.setChartSize;
  var nj = nA.setScale;
  var nk = nO.reducer;
  var nI = (0, tS.createContext)(null);
  var nC = () => (0, tS.useContext)(nI) != null;
  e.s(["useIsPanorama", 0, nC], 47856);
  var nT = e => e.brush;
  var nM = ea([nT, tb, td], (e, t, r) => ({
    height: e.height,
    x: ez(e.x) ? e.x : t.left,
    y: ez(e.y) ? e.y : t.top + t.height + t.brushBottom - ((r == null ? undefined : r.bottom) || 0),
    width: ez(e.width) ? e.width : t.width
  }));
  function n_(e, t) {
    for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) {
      n[i - 2] = arguments[i];
    }
    if (typeof console !== "undefined" && console.warn && (t === undefined && console.warn("LogUtils requires an error message argument"), !e)) {
      if (t === undefined) {
        console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      } else {
        var a = 0;
        console.warn(t.replace(/%s/g, () => n[a++]));
      }
    }
  }
  e.s(["warn", 0, n_], 24712);
  var nD = "100%";
  var nN = "100%";
  var nL = {
    width: -1,
    height: -1
  };
  var nR = (e, t, r) => {
    var n = r.width;
    var i = n === undefined ? nD : n;
    var a = r.height;
    var o = a === undefined ? nN : a;
    var l = r.aspect;
    var u = r.maxHeight;
    var c = eR(i) ? e : Number(i);
    var s = eR(o) ? t : Number(o);
    if (l && l > 0) {
      if (c) {
        s = c / l;
      } else if (s) {
        c = s * l;
      }
      if (u && s != null && s > u) {
        s = u;
      }
    }
    return {
      calculatedWidth: c,
      calculatedHeight: s
    };
  };
  var nz = {
    width: 0,
    height: 0,
    overflow: "visible"
  };
  var nB = {
    width: 0,
    overflowX: "visible"
  };
  var nF = {
    height: 0,
    overflowY: "visible"
  };
  var nU = {};
  var n$ = ["aspect", "initialDimension", "width", "height", "minWidth", "minHeight", "maxHeight", "children", "debounce", "id", "className", "onResize", "style"];
  function nK() {
    return (nK = Object.assign.bind()).apply(null, arguments);
  }
  function nW(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function nV(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        nW(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        nW(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function nH(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  var nG = (0, tS.createContext)(nL);
  function nY(e) {
    var t = e.children;
    var r = e.width;
    var n = e.height;
    var i = (0, tS.useMemo)(() => ({
      width: r,
      height: n
    }), [r, n]);
    if (eQ(i.width) && eQ(i.height)) {
      return tS.createElement(nG.Provider, {
        value: i
      }, t);
    } else {
      return null;
    }
  }
  var nq = () => (0, tS.useContext)(nG);
  var nX = (0, tS.forwardRef)((e, t) => {
    var r;
    var n;
    var i;
    var a;
    var o;
    var l;
    var c = e.aspect;
    var s = e.initialDimension;
    var f = s === undefined ? nL : s;
    var d = e.width;
    var p = e.height;
    var h = e.minWidth;
    var y = h === undefined ? 0 : h;
    var v = e.minHeight;
    var m = e.maxHeight;
    var g = e.children;
    var b = e.debounce;
    var x = b === undefined ? 0 : b;
    var w = e.id;
    var O = e.className;
    var A = e.onResize;
    var S = e.style;
    var E = function (e, t) {
      if (e == null) {
        return {};
      }
      var r;
      var n;
      var i = function (e, t) {
        if (e == null) {
          return {};
        }
        var r = {};
        for (var n in e) {
          if ({}.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) !== -1) {
              continue;
            }
            r[n] = e[n];
          }
        }
        return r;
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) {
          r = a[n];
          if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
            i[r] = e[r];
          }
        }
      }
      return i;
    }(e, n$);
    var P = (0, tS.useRef)(null);
    var j = (0, tS.useRef)();
    j.current = A;
    (0, tS.useImperativeHandle)(t, () => P.current);
    var k = function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(r = (0, tS.useState)({
      containerWidth: f.width,
      containerHeight: f.height
    })) || function (e) {
      var t = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (t != null) {
        var r;
        var n;
        var i;
        var a;
        var o = [];
        var l = true;
        var u = false;
        try {
          i = (t = t.call(e)).next;
          false;
          for (; !(l = (r = i.call(t)).done) && (o.push(r.value), o.length !== 2); l = true);
        } catch (e) {
          u = true;
          n = e;
        } finally {
          try {
            if (!l && t.return != null && (a = t.return(), Object(a) !== a)) {
              return;
            }
          } finally {
            if (u) {
              throw n;
            }
          }
        }
        return o;
      }
    }(r) || function (e) {
      if (e) {
        if (typeof e == "string") {
          return nH(e, 2);
        }
        var t = {}.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor) {
          t = e.constructor.name;
        }
        if (t === "Map" || t === "Set") {
          return Array.from(e);
        } else if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) {
          return nH(e, 2);
        } else {
          return undefined;
        }
      }
    }(r) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
    var I = k[0];
    var C = k[1];
    var T = (0, tS.useCallback)((e, t) => {
      C(r => {
        var n = Math.round(e);
        var i = Math.round(t);
        if (r.containerWidth === n && r.containerHeight === i) {
          return r;
        } else {
          return {
            containerWidth: n,
            containerHeight: i
          };
        }
      });
    }, []);
    (0, tS.useEffect)(() => {
      if (P.current == null || typeof ResizeObserver === "undefined") {
        return eq;
      }
      var e = e => {
        var t;
        var r = e[0];
        if (r != null) {
          var n = r.contentRect;
          var i = n.width;
          var a = n.height;
          T(i, a);
          if ((t = j.current) != null) {
            t.call(j, i, a);
          }
        }
      };
      if (x > 0) {
        e = function (e, t = 0, r = {}) {
          let {
            leading: n = true,
            trailing: i = true
          } = r;
          return function (e, t = 0, r = {}) {
            let n;
            if (typeof r != "object") {
              r = {};
            }
            let {
              leading: i = false,
              trailing: a = true,
              maxWait: o
            } = r;
            let l = [,,];
            if (i) {
              l[0] = "leading";
            }
            if (a) {
              l[1] = "trailing";
            }
            let u = null;
            let c = function (e, t, {
              signal: r,
              edges: n
            } = {}) {
              let i;
              let a = null;
              let o = n != null && n.includes("leading");
              let l = n == null || n.includes("trailing");
              let u = () => {
                if (a !== null) {
                  e.apply(i, a);
                  i = undefined;
                  a = null;
                }
              };
              let c = null;
              let s = () => {
                if (c != null) {
                  clearTimeout(c);
                }
                c = setTimeout(() => {
                  c = null;
                  if (l) {
                    u();
                  }
                  f();
                }, t);
              };
              let f = () => {
                if (c !== null) {
                  clearTimeout(c);
                  c = null;
                }
                i = undefined;
                a = null;
              };
              let d = function (...e) {
                if (r?.aborted) {
                  return;
                }
                i = this;
                a = e;
                let t = c == null;
                s();
                if (o && t) {
                  u();
                }
              };
              d.schedule = s;
              d.cancel = f;
              d.flush = () => {
                u();
              };
              r?.addEventListener("abort", f, {
                once: true
              });
              return d;
            }(function (...t) {
              n = e.apply(this, t);
              u = null;
            }, t, {
              edges: l
            });
            let s = function (...t) {
              if (o != null && (u === null && (u = Date.now()), Date.now() - u >= o)) {
                if (i || a) {
                  n = e.apply(this, t);
                }
                u = Date.now();
                c.cancel();
                c.schedule();
                return n;
              } else {
                c.apply(this, t);
                return n;
              }
            };
            s.cancel = c.cancel;
            s.flush = () => {
              c.flush();
              return n;
            };
            return s;
          }(e, t, {
            leading: n,
            maxWait: t,
            trailing: i
          });
        }(e, x, {
          trailing: true,
          leading: false
        });
      }
      var t = new ResizeObserver(e);
      var r = P.current.getBoundingClientRect();
      T(r.width, r.height);
      t.observe(P.current);
      return () => {
        t.disconnect();
      };
    }, [T, x]);
    var M = I.containerWidth;
    var _ = I.containerHeight;
    n_(!c || c > 0, "The aspect(%s) must be greater than zero.", c);
    var D = nR(M, _, {
      width: d,
      height: p,
      aspect: c,
      maxHeight: m
    });
    var N = D.calculatedWidth;
    var L = D.calculatedHeight;
    n_(M < 0 || _ < 0 || N != null && N > 0 || L != null && L > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", N, L, d, p, y, v, c);
    return tS.createElement("div", nK({
      id: w ? `${w}` : undefined,
      className: u("recharts-responsive-container", O),
      style: nV(nV({}, S === undefined ? {} : S), {}, {
        width: d,
        height: p,
        minWidth: y,
        minHeight: v,
        maxHeight: m
      }),
      ref: P
    }, E), tS.createElement("div", {
      style: (i = (n = {
        width: d,
        height: p
      }).width, a = n.height, o = eR(i), l = eR(a), o && l ? nz : o ? nB : l ? nF : nU)
    }, tS.createElement(nY, {
      width: N,
      height: L
    }, g)));
  });
  var nZ = (0, tS.forwardRef)((e, t) => {
    var r;
    var n;
    var i;
    var a;
    var o;
    var l;
    var u = nq();
    if (eQ(u.width) && eQ(u.height)) {
      return e.children;
    }
    n = (r = {
      width: e.width,
      height: e.height,
      aspect: e.aspect
    }).width;
    i = r.height;
    a = r.aspect;
    o = n;
    l = i;
    if (o === undefined && l === undefined) {
      o = nD;
      l = nN;
    } else if (o === undefined) {
      o = a && a > 0 ? undefined : nD;
    } else if (l === undefined) {
      l = a && a > 0 ? undefined : nN;
    }
    var c = {
      width: o,
      height: l
    };
    var s = c.width;
    var f = c.height;
    var d = nR(undefined, undefined, {
      width: s,
      height: f,
      aspect: e.aspect,
      maxHeight: e.maxHeight
    });
    var p = d.calculatedWidth;
    var h = d.calculatedHeight;
    if (ez(p) && ez(h)) {
      return tS.createElement(nY, {
        width: p,
        height: h
      }, e.children);
    } else {
      return tS.createElement(nX, nK({}, e, {
        width: s,
        height: f,
        ref: t
      }));
    }
  });
  e.s(["ResponsiveContainer", 0, nZ, "useResponsiveContainerContext", 0, nq], 10427);
  var nQ = () => {
    var e;
    var t = nC();
    var r = tM(tx);
    var n = tM(nM);
    var i = (e = tM(nT)) == null ? undefined : e.padding;
    if (t && n && i) {
      return {
        width: n.width - i.left - i.right,
        height: n.height - i.top - i.bottom,
        x: i.left,
        y: i.top
      };
    } else {
      return r;
    }
  };
  var nJ = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    brushBottom: 0
  };
  var n0 = () => {
    return tM(tb) ?? nJ;
  };
  var n1 = () => tM(tc);
  var n2 = () => tM(ts);
  var n5 = e => e.layout.layoutType;
  var n3 = () => tM(n5);
  var n6 = e => {
    var t = e.layout.layoutType;
    if (t === "centric" || t === "radial") {
      return t;
    }
  };
  var n4 = () => n3() !== undefined;
  var n8 = e => {
    var t = tk();
    var r = nC();
    var n = e.width;
    var i = e.height;
    var a = nq();
    var o = n;
    var l = i;
    if (a) {
      o = a.width > 0 ? a.width : n;
      l = a.height > 0 ? a.height : i;
    }
    (0, tS.useEffect)(() => {
      if (!r && eQ(o) && eQ(l)) {
        t(nP({
          width: o,
          height: l
        }));
      }
    }, [t, r, o, l]);
    return null;
  };
  function n7(e, t) {
    return function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(e) || function (e, t) {
      var r = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (r != null) {
        var n;
        var i;
        var a;
        var o;
        var l = [];
        var u = true;
        var c = false;
        try {
          a = (r = r.call(e)).next;
          if (t === 0) {
            if (Object(r) !== r) {
              return;
            }
            u = false;
          } else {
            for (; !(u = (n = a.call(r)).done) && (l.push(n.value), l.length !== t); u = true);
          }
        } catch (e) {
          c = true;
          i = e;
        } finally {
          try {
            if (!u && r.return != null && (o = r.return(), Object(o) !== o)) {
              return;
            }
          } finally {
            if (c) {
              throw i;
            }
          }
        }
        return l;
      }
    }(e, t) || function (e, t) {
      if (e) {
        if (typeof e == "string") {
          return n9(e, t);
        }
        var r = {}.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor) {
          r = e.constructor.name;
        }
        if (r === "Map" || r === "Set") {
          return Array.from(e);
        } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
          return n9(e, t);
        } else {
          return undefined;
        }
      }
    }(e, t) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function n9(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  function ie(e) {
    if (Array.isArray(e) && e.length === 2) {
      var t = n7(e, 2);
      var r = t[0];
      var n = t[1];
      if (eZ(r) && eZ(n)) {
        return true;
      }
    }
    return false;
  }
  function it(e, t, r) {
    if (r) {
      return e;
    } else {
      return [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
    }
  }
  function ir(e, t) {
    if (t && typeof e != "function" && Array.isArray(e) && e.length === 2) {
      var r;
      var n;
      var i = n7(e, 2);
      var a = i[0];
      var o = i[1];
      if (eZ(a)) {
        r = a;
      } else if (typeof a == "function") {
        return;
      }
      if (eZ(o)) {
        n = o;
      } else if (typeof o == "function") {
        return;
      }
      var l = [r, n];
      if (ie(l)) {
        return l;
      }
    }
  }
  e.s(["ReportChartSize", 0, n8, "selectChartLayout", 0, n5, "selectPolarChartLayout", 0, n6, "useCartesianChartLayout", 0, () => {
    var e = n3();
    if (e === "horizontal" || e === "vertical") {
      return e;
    }
  }, "useChartHeight", 0, n2, "useChartLayout", 0, n3, "useChartWidth", 0, n1, "useIsInChartContext", 0, n4, "useMargin", 0, () => tM(e => e.layout.margin), "useOffsetInternal", 0, n0, "usePolarChartLayout", 0, () => tM(n6), "useViewBox", 0, nQ], 64214);
  var ii = e.i(48198);
  function ia(e) {
    if (e === 0) {
      return 1;
    } else {
      return Math.floor(new ii.default(e).abs().log(10).toNumber()) + 1;
    }
  }
  function io(e, t, r) {
    for (var n = new ii.default(e), i = 0, a = []; n.lt(t) && i < 100000;) {
      a.push(n.toNumber());
      n = n.add(r);
      i++;
    }
    return a;
  }
  function il(e, t) {
    return function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(e) || function (e, t) {
      var r = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (r != null) {
        var n;
        var i;
        var a;
        var o;
        var l = [];
        var u = true;
        var c = false;
        try {
          a = (r = r.call(e)).next;
          if (t === 0) {
            if (Object(r) !== r) {
              return;
            }
            u = false;
          } else {
            for (; !(u = (n = a.call(r)).done) && (l.push(n.value), l.length !== t); u = true);
          }
        } catch (e) {
          c = true;
          i = e;
        } finally {
          try {
            if (!u && r.return != null && (o = r.return(), Object(o) !== o)) {
              return;
            }
          } finally {
            if (c) {
              throw i;
            }
          }
        }
        return l;
      }
    }(e, t) || function (e, t) {
      if (e) {
        if (typeof e == "string") {
          return iu(e, t);
        }
        var r = {}.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor) {
          r = e.constructor.name;
        }
        if (r === "Map" || r === "Set") {
          return Array.from(e);
        } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
          return iu(e, t);
        } else {
          return undefined;
        }
      }
    }(e, t) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function iu(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  var ic = e => {
    var t = il(e, 2);
    var r = t[0];
    var n = t[1];
    var i = r;
    var a = n;
    if (r > n) {
      i = n;
      a = r;
    }
    return [i, a];
  };
  var is = (e, t, r) => {
    if (e.lte(0)) {
      return new ii.default(0);
    }
    var n = ia(e.toNumber());
    var i = new ii.default(10).pow(n);
    var a = e.div(i);
    var o = n !== 1 ? 0.05 : 0.1;
    var l = new ii.default(Math.ceil(a.div(o).toNumber())).add(r).mul(o).mul(i);
    return new ii.default(t ? l.toNumber() : Math.ceil(l.toNumber()));
  };
  var id = (e, t, r) => {
    if (e.lte(0)) {
      return new ii.default(0);
    }
    var i = [1, 2, 2.5, 5];
    var a = e.toNumber();
    var o = Math.floor(new ii.default(a).abs().log(10).toNumber());
    var l = new ii.default(10).pow(o);
    var u = e.div(l).toNumber();
    var c = i.findIndex(e => e >= u - 1e-10);
    if (c === -1) {
      l = l.mul(10);
      c = 0;
    }
    if ((c += r) >= i.length) {
      var s = Math.floor(c / i.length);
      c %= i.length;
      l = l.mul(new ii.default(10).pow(s));
    }
    var f = i[c] ?? 1;
    var d = new ii.default(f).mul(l);
    if (t) {
      return d;
    } else {
      return new ii.default(Math.ceil(d.toNumber()));
    }
  };
  function ip(e, t, r, n) {
    var i;
    var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : is;
    if (!Number.isFinite((t - e) / (r - 1))) {
      return {
        step: new ii.default(0),
        tickMin: new ii.default(0),
        tickMax: new ii.default(0)
      };
    }
    var l = o(new ii.default(t).sub(e).div(r - 1), n, a);
    var u = Math.ceil((i = e <= 0 && t >= 0 ? new ii.default(0) : (i = new ii.default(e).add(t).div(2)).sub(new ii.default(i).mod(l))).sub(e).div(l).toNumber());
    var c = Math.ceil(new ii.default(t).sub(i).div(l).toNumber());
    var s = u + c + 1;
    if (s > r) {
      return ip(e, t, r, n, a + 1, o);
    } else {
      if (s < r) {
        c = t > 0 ? c + (r - s) : c;
        u = t > 0 ? u : u + (r - s);
      }
      return {
        step: l,
        tickMin: i.sub(new ii.default(u).mul(l)),
        tickMax: i.add(new ii.default(c).mul(l))
      };
    }
  }
  function ih(e) {
    var t = il(e, 2);
    var r = t[0];
    var n = t[1];
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
    var a = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "auto";
    var l = Math.max(i, 2);
    var u = il(ic([r, n]), 2);
    var c = u[0];
    var s = u[1];
    if (c === -Infinity || s === Infinity) {
      var f = s === Infinity ? [c, ...Array(i - 1).fill(Infinity)] : [...Array(i - 1).fill(-Infinity), s];
      if (r > n) {
        return f.reverse();
      } else {
        return f;
      }
    }
    if (c === s) {
      return ((e, t, r) => {
        var n = new ii.default(1);
        var i = new ii.default(e);
        if (!i.isint() && r) {
          var a = Math.abs(e);
          if (a < 1) {
            n = new ii.default(10).pow(ia(e) - 1);
            i = new ii.default(Math.floor(i.div(n).toNumber())).mul(n);
          } else if (a > 1) {
            i = new ii.default(Math.floor(e));
          }
        } else if (e === 0) {
          i = new ii.default(Math.floor((t - 1) / 2));
        } else if (!r) {
          i = new ii.default(Math.floor(e));
        }
        var o = Math.floor((t - 1) / 2);
        var l = [];
        for (var u = 0; u < t; u++) {
          l.push(i.add(new ii.default(u - o).mul(n)).toNumber());
        }
        return l;
      })(c, i, a);
    }
    var d = ip(c, s, l, a, 0, o === "snap125" ? id : is);
    var p = d.step;
    var h = io(d.tickMin, d.tickMax.add(new ii.default(0.1).mul(p)), p);
    if (r > n) {
      return h.reverse();
    } else {
      return h;
    }
  }
  function iy(e, t) {
    var r = il(e, 2);
    var n = r[0];
    var i = r[1];
    var a = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "auto";
    var l = il(ic([n, i]), 2);
    var u = l[0];
    var c = l[1];
    if (u === -Infinity || c === Infinity) {
      return [n, i];
    }
    if (u === c) {
      return [u];
    }
    var s = Math.max(t, 2);
    var f = (o === "snap125" ? id : is)(new ii.default(c).sub(u).div(s - 1), a, 0);
    var d = [...io(new ii.default(u), new ii.default(c), f), c];
    if (a === false) {
      var p = (d = d.map(e => Math.round(e))).length - 1;
      if (p > 0 && d[p] === d[p - 1]) {
        d = d.slice(0, p);
      }
    }
    if (n > i) {
      return d.reverse();
    } else {
      return d;
    }
  }
  var iv = e => e.rootProps.barCategoryGap;
  var im = e => e.rootProps.stackOffset;
  var ig = e => e.rootProps.reverseStackOrder;
  var ib = e => e.options.chartName;
  var ix = e => e.rootProps.syncId;
  var iw = e => e.rootProps.syncMethod;
  var iO = e => e.options.eventEmitter;
  function iA(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function iS(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        iA(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        iA(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  e.s(["selectBarCategoryGap", 0, iv, "selectChartBaseValue", 0, e => e.rootProps.baseValue, "selectChartName", 0, ib, "selectEventEmitter", 0, iO, "selectReverseStackOrder", 0, ig, "selectStackOffsetType", 0, im, "selectSyncId", 0, ix, "selectSyncMethod", 0, iw], 43913);
  var iE = Math.PI / 180;
  var iP = (e, t, r, n) => ({
    x: e + Math.cos(-iE * n) * r,
    y: t + Math.sin(-iE * n) * r
  });
  function ij(e, t, r = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 0,
    height: 0,
    brushBottom: 0
  }) {
    return Math.min(Math.abs(e - (r.left || 0) - (r.right || 0)), Math.abs(t - (r.top || 0) - (r.bottom || 0))) / 2;
  }
  var ik = (e, t) => {
    var r;
    var n;
    var i;
    var a;
    var o = ((e, t) => {
      var r;
      var n;
      var i;
      var a;
      var o = e.x;
      var l = e.y;
      var u = t.cx;
      var c = t.cy;
      r = {
        x: o,
        y: l
      };
      n = {
        x: u,
        y: c
      };
      i = r.x;
      a = r.y;
      var s = Math.sqrt((i - n.x) ** 2 + (a - n.y) ** 2);
      if (s <= 0) {
        return {
          radius: s,
          angle: 0
        };
      }
      var f = Math.acos((o - u) / s);
      if (l > c) {
        f = Math.PI * 2 - f;
      }
      return {
        radius: s,
        angle: f * 180 / Math.PI,
        angleInRadian: f
      };
    })({
      x: e.relativeX,
      y: e.relativeY
    }, t);
    var l = o.radius;
    var u = o.angle;
    var c = t.innerRadius;
    var s = t.outerRadius;
    if (l < c || l > s || l === 0) {
      return null;
    }
    i = Math.min(Math.floor((r = t.startAngle) / 360), Math.floor((n = t.endAngle) / 360));
    var f = {
      startAngle: r - i * 360,
      endAngle: n - i * 360
    };
    var d = f.startAngle;
    var p = f.endAngle;
    var h = u;
    if (d <= p) {
      while (h > p) {
        h -= 360;
      }
      while (h < d) {
        h += 360;
      }
      a = h >= d && h <= p;
    } else {
      while (h > d) {
        h -= 360;
      }
      while (h < p) {
        h += 360;
      }
      a = h >= p && h <= d;
    }
    if (a) {
      return iS(iS({}, t), {}, {
        radius: l,
        angle: h + Math.min(Math.floor(t.startAngle / 360), Math.floor(t.endAngle / 360)) * 360
      });
    } else {
      return null;
    }
  };
  e.s(["RADIAN", 0, iE, "getMaxRadius", 0, ij, "inRangeOfSector", 0, ik, "polarToCartesian", 0, iP], 75699);
  var iI = {
    grid: -100,
    barBackground: -50,
    area: 100,
    cursorRectangle: 200,
    bar: 300,
    line: 400,
    axis: 500,
    scatter: 600,
    activeBar: 1000,
    cursorLine: 1100,
    activeDot: 1200,
    label: 2000
  };
  e.s(["DefaultZIndexes", 0, iI], 30671);
  var iC = {
    allowDecimals: false,
    allowDuplicatedCategory: true,
    allowDataOverflow: false,
    angle: 0,
    angleAxisId: 0,
    axisLine: true,
    axisLineType: "polygon",
    cx: 0,
    cy: 0,
    hide: false,
    includeHidden: false,
    label: false,
    niceTicks: "auto",
    orientation: "outer",
    reversed: false,
    scale: "auto",
    tick: true,
    tickLine: true,
    tickSize: 8,
    type: "auto",
    zIndex: iI.axis
  };
  var iT = {
    allowDataOverflow: false,
    allowDecimals: false,
    allowDuplicatedCategory: true,
    angle: 0,
    axisLine: true,
    includeHidden: false,
    hide: false,
    niceTicks: "auto",
    label: false,
    orientation: "right",
    radiusAxisId: 0,
    reversed: false,
    scale: "auto",
    stroke: "#ccc",
    tick: true,
    tickCount: 5,
    tickLine: true,
    type: "auto",
    zIndex: iI.axis
  };
  var iM = (e, t) => {
    if (e && t) {
      if (e != null && e.reversed) {
        return [t[1], t[0]];
      } else {
        return t;
      }
    }
  };
  function i_(e, t, r) {
    if (r !== "auto") {
      return r;
    } else if (e != null) {
      if (e9(e, t)) {
        return "category";
      } else {
        return "number";
      }
    } else {
      return undefined;
    }
  }
  function iD(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function iN(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        iD(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        iD(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  e.s(["getAxisTypeBasedOnLayout", 0, i_], 16187);
  var iL = {
    allowDataOverflow: iC.allowDataOverflow,
    allowDecimals: iC.allowDecimals,
    allowDuplicatedCategory: false,
    dataKey: undefined,
    domain: undefined,
    id: iC.angleAxisId,
    includeHidden: false,
    name: undefined,
    reversed: iC.reversed,
    scale: iC.scale,
    tick: iC.tick,
    tickCount: undefined,
    ticks: undefined,
    type: iC.type,
    unit: undefined,
    niceTicks: "auto"
  };
  var iR = {
    allowDataOverflow: iT.allowDataOverflow,
    allowDecimals: iT.allowDecimals,
    allowDuplicatedCategory: iT.allowDuplicatedCategory,
    dataKey: undefined,
    domain: undefined,
    id: iT.radiusAxisId,
    includeHidden: iT.includeHidden,
    name: undefined,
    reversed: iT.reversed,
    scale: iT.scale,
    tick: iT.tick,
    tickCount: iT.tickCount,
    ticks: undefined,
    type: iT.type,
    unit: undefined,
    niceTicks: "auto"
  };
  var iz = ea([(e, t) => {
    if (t != null) {
      return e.polarAxis.angleAxis[t];
    }
  }, n6], (e, t) => {
    if (e != null) {
      return e;
    }
    var n = i_(t, "angleAxis", iL.type) ?? "category";
    return iN(iN({}, iL), {}, {
      type: n
    });
  });
  var iB = ea([(e, t) => e.polarAxis.radiusAxis[t], n6], (e, t) => {
    if (e != null) {
      return e;
    }
    var n = i_(t, "radiusAxis", iR.type) ?? "category";
    return iN(iN({}, iR), {}, {
      type: n
    });
  });
  var iF = e => e.polarOptions;
  var iU = ea([tc, ts, tb], ij);
  var i$ = ea([iF, iU], (e, t) => {
    if (e != null) {
      return e$(e.innerRadius, t, 0);
    }
  });
  var iK = ea([iF, iU], (e, t) => {
    if (e != null) {
      return e$(e.outerRadius, t, t * 0.8);
    }
  });
  var iW = ea([iF], e => e == null ? [0, 0] : [e.startAngle, e.endAngle]);
  ea([iz, iW], iM);
  var iV = ea([iU, i$, iK], (e, t, r) => {
    if (e != null && t != null && r != null) {
      return [t, r];
    }
  });
  ea([iB, iV], iM);
  var iH = ea([n5, iF, i$, iK, tc, ts], (e, t, r, n, i, a) => {
    if ((e === "centric" || e === "radial") && t != null && r != null && n != null) {
      var o = t.cx;
      var l = t.cy;
      var u = t.startAngle;
      var c = t.endAngle;
      return {
        cx: e$(o, i, i / 2),
        cy: e$(l, a, a / 2),
        innerRadius: r,
        outerRadius: n,
        startAngle: u,
        endAngle: c,
        clockWise: false
      };
    }
  });
  var iG = (e, t) => t;
  e.s(["pickAxisType", 0, iG], 97386);
  var iY = (e, t, r) => r;
  function iq(e) {
    if (e == null) {
      return undefined;
    } else {
      return e.id;
    }
  }
  function iX(e, t, r) {
    var n = t.chartData;
    var i = n === undefined ? [] : n;
    var a = r.allowDuplicatedCategory;
    var o = r.dataKey;
    var l = new Map();
    e.forEach(e => {
      var r = e.data ?? i;
      if (r != null && r.length !== 0) {
        var n = iq(e);
        r.forEach((t, r) => {
          var i;
          var u = o == null || a ? r : String(e8(t, o, null));
          var c = e8(t, e.dataKey, 0);
          Object.assign(i = l.has(u) ? l.get(u) : {}, {
            [n]: c
          });
          l.set(u, i);
        });
      }
    });
    return Array.from(l.values());
  }
  function iZ(e) {
    return "stackId" in e && e.stackId != null && e.dataKey != null;
  }
  e.s(["pickAxisId", 0, iY], 50512);
  e.s(["getStackSeriesIdentifier", 0, iq], 71171);
  var iQ = (e, t) => e === t || e != null && t != null && e[0] === t[0] && e[1] === t[1];
  function iJ(e, t) {
    return !!Array.isArray(e) && !!Array.isArray(t) && e.length === 0 && t.length === 0 || e === t;
  }
  var i0 = e => {
    var t = n5(e);
    if (t === "horizontal") {
      return "xAxis";
    } else if (t === "vertical") {
      return "yAxis";
    } else if (t === "centric") {
      return "angleAxis";
    } else {
      return "radiusAxis";
    }
  };
  var i1 = e => e.tooltip.settings.axisId;
  function i2(e) {
    if (e != null) {
      var t = e.ticks;
      var r = e.bandwidth;
      var n = e.range();
      var i = [Math.min(...n), Math.max(...n)];
      return {
        domain: () => e.domain(),
        range: function (e) {
          function t() {
            return e.apply(this, arguments);
          }
          t.toString = function () {
            return e.toString();
          };
          return t;
        }(() => i),
        rangeMin: () => i[0],
        rangeMax: () => i[1],
        isInRange(e) {
          var t = i[0];
          var r = i[1];
          if (t <= r) {
            return e >= t && e <= r;
          } else {
            return e >= r && e <= t;
          }
        },
        bandwidth: r ? () => r.call(e) : undefined,
        ticks: t ? r => t.call(e, r) : undefined,
        map: (t, r) => {
          var n = e(t);
          if (n != null) {
            if (e.bandwidth && r != null && r.position) {
              var i = e.bandwidth();
              switch (r.position) {
                case "middle":
                  n += i / 2;
                  break;
                case "end":
                  n += i;
              }
            }
            return n;
          }
        }
      };
    }
  }
  var i5 = (e, t) => {
    if (t != null) {
      if (e !== "linear") {
        return t;
      } else {
        if (!ie(t)) {
          var r;
          var n;
          for (var i = 0; i < t.length; i++) {
            var a = t[i];
            if (eZ(a)) {
              if (r === undefined || a < r) {
                r = a;
              }
              if (n === undefined || a > n) {
                n = a;
              }
            }
          }
          if (r !== undefined && n !== undefined) {
            return [r, n];
          } else {
            return undefined;
          }
        }
        return t;
      }
    }
  };
  function i3(e, t) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(e);
        break;
      default:
        this.range(t).domain(e);
    }
    return this;
  }
  function i6(e, t) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        if (typeof e == "function") {
          this.interpolator(e);
        } else {
          this.range(e);
        }
        break;
      default:
        this.domain(e);
        if (typeof t == "function") {
          this.interpolator(t);
        } else {
          this.range(t);
        }
    }
    return this;
  }
  e.s(["combineCheckedDomain", 0, i5], 39862);
  e.s([], 61500);
  e.i(61500);
  e.s([], 73656);
  e.i(73656);
  class i4 extends Map {
    constructor(e, t = i7) {
      super();
      Object.defineProperties(this, {
        _intern: {
          value: new Map()
        },
        _key: {
          value: t
        }
      });
      if (e != null) {
        for (const [t, r] of e) {
          this.set(t, r);
        }
      }
    }
    get(e) {
      return super.get(i8(this, e));
    }
    has(e) {
      return super.has(i8(this, e));
    }
    set(e, t) {
      return super.set(function ({
        _intern: e,
        _key: t
      }, r) {
        let n = t(r);
        if (e.has(n)) {
          return e.get(n);
        } else {
          e.set(n, r);
          return r;
        }
      }(this, e), t);
    }
    delete(e) {
      return super.delete(function ({
        _intern: e,
        _key: t
      }, r) {
        let n = t(r);
        if (e.has(n)) {
          r = e.get(n);
          e.delete(n);
        }
        return r;
      }(this, e));
    }
  }
  function i8({
    _intern: e,
    _key: t
  }, r) {
    let n = t(r);
    if (e.has(n)) {
      return e.get(n);
    } else {
      return r;
    }
  }
  function i7(e) {
    if (e !== null && typeof e == "object") {
      return e.valueOf();
    } else {
      return e;
    }
  }
  let i9 = Symbol("implicit");
  function ae() {
    var e = new i4();
    var t = [];
    var r = [];
    var n = i9;
    function i(i) {
      let a = e.get(i);
      if (a === undefined) {
        if (n !== i9) {
          return n;
        }
        e.set(i, a = t.push(i) - 1);
      }
      return r[a % r.length];
    }
    i.domain = function (r) {
      if (!arguments.length) {
        return t.slice();
      }
      t = [];
      e = new i4();
      for (let n of r) {
        if (!e.has(n)) {
          e.set(n, t.push(n) - 1);
        }
      }
      return i;
    };
    i.range = function (e) {
      if (arguments.length) {
        r = Array.from(e);
        return i;
      } else {
        return r.slice();
      }
    };
    i.unknown = function (e) {
      if (arguments.length) {
        n = e;
        return i;
      } else {
        return n;
      }
    };
    i.copy = function () {
      return ae(t, r).unknown(n);
    };
    i3.apply(i, arguments);
    return i;
  }
  function at() {
    var e;
    var t;
    var r = ae().unknown(undefined);
    var n = r.domain;
    var i = r.range;
    var a = 0;
    var o = 1;
    var l = false;
    var u = 0;
    var c = 0;
    var s = 0.5;
    function f() {
      var r = n().length;
      var f = o < a;
      var d = f ? o : a;
      var p = f ? a : o;
      e = (p - d) / Math.max(1, r - u + c * 2);
      if (l) {
        e = Math.floor(e);
      }
      d += (p - d - e * (r - u)) * s;
      t = e * (1 - u);
      if (l) {
        d = Math.round(d);
        t = Math.round(t);
      }
      var h = function (e, t, r) {
        e *= 1;
        t *= 1;
        r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
        for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = Array(i); ++n < i;) {
          a[n] = e + n * r;
        }
        return a;
      }(r).map(function (t) {
        return d + e * t;
      });
      return i(f ? h.reverse() : h);
    }
    delete r.unknown;
    r.domain = function (e) {
      if (arguments.length) {
        n(e);
        return f();
      } else {
        return n();
      }
    };
    r.range = function (e) {
      if (arguments.length) {
        [a, o] = e;
        a *= 1;
        o *= 1;
        return f();
      } else {
        return [a, o];
      }
    };
    r.rangeRound = function (e) {
      [a, o] = e;
      a *= 1;
      o *= 1;
      l = true;
      return f();
    };
    r.bandwidth = function () {
      return t;
    };
    r.step = function () {
      return e;
    };
    r.round = function (e) {
      if (arguments.length) {
        l = !!e;
        return f();
      } else {
        return l;
      }
    };
    r.padding = function (e) {
      if (arguments.length) {
        u = Math.min(1, c = +e);
        return f();
      } else {
        return u;
      }
    };
    r.paddingInner = function (e) {
      if (arguments.length) {
        u = Math.min(1, e);
        return f();
      } else {
        return u;
      }
    };
    r.paddingOuter = function (e) {
      if (arguments.length) {
        c = +e;
        return f();
      } else {
        return c;
      }
    };
    r.align = function (e) {
      if (arguments.length) {
        s = Math.max(0, Math.min(1, e));
        return f();
      } else {
        return s;
      }
    };
    r.copy = function () {
      return at(n(), [a, o]).round(l).paddingInner(u).paddingOuter(c).align(s);
    };
    return i3.apply(f(), arguments);
  }
  function ar() {
    return function e(t) {
      var r = t.copy;
      t.padding = t.paddingOuter;
      delete t.paddingInner;
      delete t.paddingOuter;
      t.copy = function () {
        return e(r());
      };
      return t;
    }(at.apply(null, arguments).paddingInner(1));
  }
  let an = Math.sqrt(50);
  let ai = Math.sqrt(10);
  let aa = Math.sqrt(2);
  function ao(e, t, r) {
    let n;
    let i;
    let a;
    let o = (t - e) / Math.max(0, r);
    let l = Math.floor(Math.log10(o));
    let u = o / Math.pow(10, l);
    let c = u >= an ? 10 : u >= ai ? 5 : u >= aa ? 2 : 1;
    if (l < 0) {
      n = Math.round(e * (a = Math.pow(10, -l) / c));
      i = Math.round(t * a);
      if (n / a < e) {
        ++n;
      }
      if (i / a > t) {
        --i;
      }
      a = -a;
    } else {
      n = Math.round(e / (a = Math.pow(10, l) * c));
      i = Math.round(t / a);
      if (n * a < e) {
        ++n;
      }
      if (i * a > t) {
        --i;
      }
    }
    if (i < n && r >= 0.5 && r < 2) {
      return ao(e, t, r * 2);
    } else {
      return [n, i, a];
    }
  }
  function al(e, t, r) {
    t *= 1;
    e *= 1;
    if (!((r *= 1) > 0)) {
      return [];
    }
    if (e === t) {
      return [e];
    }
    let n = t < e;
    let [i, a, o] = n ? ao(t, e, r) : ao(e, t, r);
    if (!(a >= i)) {
      return [];
    }
    let l = a - i + 1;
    let u = Array(l);
    if (n) {
      if (o < 0) {
        for (let e = 0; e < l; ++e) {
          u[e] = -((a - e) / o);
        }
      } else {
        for (let e = 0; e < l; ++e) {
          u[e] = (a - e) * o;
        }
      }
    } else if (o < 0) {
      for (let e = 0; e < l; ++e) {
        u[e] = -((i + e) / o);
      }
    } else {
      for (let e = 0; e < l; ++e) {
        u[e] = (i + e) * o;
      }
    }
    return u;
  }
  function au(e, t, r) {
    return ao(e *= 1, t *= 1, r *= 1)[2];
  }
  function ac(e, t, r) {
    t *= 1;
    e *= 1;
    r *= 1;
    let n = t < e;
    let i = n ? au(t, e, r) : au(e, t, r);
    return (n ? -1 : 1) * (i < 0 ? -(1 / i) : i);
  }
  function as(e, t) {
    if (e == null || t == null) {
      return NaN;
    } else if (e < t) {
      return -1;
    } else if (e > t) {
      return 1;
    } else if (e >= t) {
      return 0;
    } else {
      return NaN;
    }
  }
  function af(e, t) {
    if (e == null || t == null) {
      return NaN;
    } else if (t < e) {
      return -1;
    } else if (t > e) {
      return 1;
    } else if (t >= e) {
      return 0;
    } else {
      return NaN;
    }
  }
  function ad(e) {
    let t;
    let r;
    let n;
    function i(e, n, a = 0, o = e.length) {
      if (a < o) {
        if (t(n, n) !== 0) {
          return o;
        }
        do {
          let t = a + o >>> 1;
          if (r(e[t], n) < 0) {
            a = t + 1;
          } else {
            o = t;
          }
        } while (a < o);
      }
      return a;
    }
    if (e.length !== 2) {
      t = as;
      r = (t, r) => as(e(t), r);
      n = (t, r) => e(t) - r;
    } else {
      t = e === as || e === af ? e : ap;
      r = e;
      n = e;
    }
    return {
      left: i,
      center: function (e, t, r = 0, a = e.length) {
        let o = i(e, t, r, a - 1);
        if (o > r && n(e[o - 1], t) > -n(e[o], t)) {
          return o - 1;
        } else {
          return o;
        }
      },
      right: function (e, n, i = 0, a = e.length) {
        if (i < a) {
          if (t(n, n) !== 0) {
            return a;
          }
          do {
            let t = i + a >>> 1;
            if (r(e[t], n) <= 0) {
              i = t + 1;
            } else {
              a = t;
            }
          } while (i < a);
        }
        return i;
      }
    };
  }
  function ap() {
    return 0;
  }
  function ah(e) {
    if (e === null) {
      return NaN;
    } else {
      return +e;
    }
  }
  let ay = ad(as);
  let av = ay.right;
  function am(e, t, r) {
    e.prototype = t.prototype = r;
    r.constructor = e;
  }
  function ag(e, t) {
    var r = Object.create(e.prototype);
    for (var n in t) {
      r[n] = t[n];
    }
    return r;
  }
  function ab() {}
  ay.left;
  ad(ah).center;
  var ax = "\\s*([+-]?\\d+)\\s*";
  var aw = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var aO = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var aA = /^#([0-9a-f]{3,8})$/;
  var aS = RegExp(`^rgb\\(${ax},${ax},${ax}\\)$`);
  var aE = RegExp(`^rgb\\(${aO},${aO},${aO}\\)$`);
  var aP = RegExp(`^rgba\\(${ax},${ax},${ax},${aw}\\)$`);
  var aj = RegExp(`^rgba\\(${aO},${aO},${aO},${aw}\\)$`);
  var ak = RegExp(`^hsl\\(${aw},${aO},${aO}\\)$`);
  var aI = RegExp(`^hsla\\(${aw},${aO},${aO},${aw}\\)$`);
  var aC = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };
  function aT() {
    return this.rgb().formatHex();
  }
  function aM() {
    return this.rgb().formatRgb();
  }
  function a_(e) {
    var t;
    var r;
    e = (e + "").trim().toLowerCase();
    if (t = aA.exec(e)) {
      r = t[1].length;
      t = parseInt(t[1], 16);
      if (r === 6) {
        return aD(t);
      } else if (r === 3) {
        return new aR(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1);
      } else if (r === 8) {
        return aN(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255);
      } else if (r === 4) {
        return aN(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255);
      } else {
        return null;
      }
    } else if (t = aS.exec(e)) {
      return new aR(t[1], t[2], t[3], 1);
    } else if (t = aE.exec(e)) {
      return new aR(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1);
    } else if (t = aP.exec(e)) {
      return aN(t[1], t[2], t[3], t[4]);
    } else if (t = aj.exec(e)) {
      return aN(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]);
    } else if (t = ak.exec(e)) {
      return aK(t[1], t[2] / 100, t[3] / 100, 1);
    } else if (t = aI.exec(e)) {
      return aK(t[1], t[2] / 100, t[3] / 100, t[4]);
    } else if (aC.hasOwnProperty(e)) {
      return aD(aC[e]);
    } else if (e === "transparent") {
      return new aR(NaN, NaN, NaN, 0);
    } else {
      return null;
    }
  }
  function aD(e) {
    return new aR(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
  }
  function aN(e, t, r, n) {
    if (n <= 0) {
      e = t = r = NaN;
    }
    return new aR(e, t, r, n);
  }
  function aL(e, t, r, n) {
    var i;
    if (arguments.length == 1) {
      if (!((i = e) instanceof ab)) {
        i = a_(i);
      }
      if (i) {
        return new aR((i = i.rgb()).r, i.g, i.b, i.opacity);
      } else {
        return new aR();
      }
    } else {
      return new aR(e, t, r, n == null ? 1 : n);
    }
  }
  function aR(e, t, r, n) {
    this.r = +e;
    this.g = +t;
    this.b = +r;
    this.opacity = +n;
  }
  function az() {
    return `#${a$(this.r)}${a$(this.g)}${a$(this.b)}`;
  }
  function aB() {
    let e = aF(this.opacity);
    return `${e === 1 ? "rgb(" : "rgba("}${aU(this.r)}, ${aU(this.g)}, ${aU(this.b)}${e === 1 ? ")" : `, ${e})`}`;
  }
  function aF(e) {
    if (isNaN(e)) {
      return 1;
    } else {
      return Math.max(0, Math.min(1, e));
    }
  }
  function aU(e) {
    return Math.max(0, Math.min(255, Math.round(e) || 0));
  }
  function a$(e) {
    return ((e = aU(e)) < 16 ? "0" : "") + e.toString(16);
  }
  function aK(e, t, r, n) {
    if (n <= 0) {
      e = t = r = NaN;
    } else if (r <= 0 || r >= 1) {
      e = t = NaN;
    } else if (t <= 0) {
      e = NaN;
    }
    return new aV(e, t, r, n);
  }
  function aW(e) {
    if (e instanceof aV) {
      return new aV(e.h, e.s, e.l, e.opacity);
    }
    if (!(e instanceof ab)) {
      e = a_(e);
    }
    if (!e) {
      return new aV();
    }
    if (e instanceof aV) {
      return e;
    }
    var t = (e = e.rgb()).r / 255;
    var r = e.g / 255;
    var n = e.b / 255;
    var i = Math.min(t, r, n);
    var a = Math.max(t, r, n);
    var o = NaN;
    var l = a - i;
    var u = (a + i) / 2;
    if (l) {
      o = t === a ? (r - n) / l + (r < n) * 6 : r === a ? (n - t) / l + 2 : (t - r) / l + 4;
      l /= u < 0.5 ? a + i : 2 - a - i;
      o *= 60;
    } else {
      l = u > 0 && u < 1 ? 0 : o;
    }
    return new aV(o, l, u, e.opacity);
  }
  function aV(e, t, r, n) {
    this.h = +e;
    this.s = +t;
    this.l = +r;
    this.opacity = +n;
  }
  function aH(e) {
    if ((e = (e || 0) % 360) < 0) {
      return e + 360;
    } else {
      return e;
    }
  }
  function aG(e) {
    return Math.max(0, Math.min(1, e || 0));
  }
  function aY(e, t, r) {
    return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
  }
  function aq(e, t, r, n, i) {
    var a = e * e;
    var o = a * e;
    return ((1 - e * 3 + a * 3 - o) * t + (4 - a * 6 + o * 3) * r + (1 + e * 3 + a * 3 - o * 3) * n + o * i) / 6;
  }
  am(ab, a_, {
    copy(e) {
      return Object.assign(new this.constructor(), this, e);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: aT,
    formatHex: aT,
    formatHex8: function () {
      return this.rgb().formatHex8();
    },
    formatHsl: function () {
      return aW(this).formatHsl();
    },
    formatRgb: aM,
    toString: aM
  });
  am(aR, aL, ag(ab, {
    brighter(e) {
      e = e == null ? 1.4285714285714286 : Math.pow(1.4285714285714286, e);
      return new aR(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    darker(e) {
      e = e == null ? 0.7 : Math.pow(0.7, e);
      return new aR(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new aR(aU(this.r), aU(this.g), aU(this.b), aF(this.opacity));
    },
    displayable() {
      return this.r >= -0.5 && this.r < 255.5 && this.g >= -0.5 && this.g < 255.5 && this.b >= -0.5 && this.b < 255.5 && this.opacity >= 0 && this.opacity <= 1;
    },
    hex: az,
    formatHex: az,
    formatHex8: function () {
      return `#${a$(this.r)}${a$(this.g)}${a$(this.b)}${a$((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
    },
    formatRgb: aB,
    toString: aB
  }));
  am(aV, function (e, t, r, n) {
    if (arguments.length == 1) {
      return aW(e);
    } else {
      return new aV(e, t, r, n == null ? 1 : n);
    }
  }, ag(ab, {
    brighter(e) {
      e = e == null ? 1.4285714285714286 : Math.pow(1.4285714285714286, e);
      return new aV(this.h, this.s, this.l * e, this.opacity);
    },
    darker(e) {
      e = e == null ? 0.7 : Math.pow(0.7, e);
      return new aV(this.h, this.s, this.l * e, this.opacity);
    },
    rgb() {
      var e = this.h % 360 + (this.h < 0) * 360;
      var t = isNaN(e) || isNaN(this.s) ? 0 : this.s;
      var r = this.l;
      var n = r + (r < 0.5 ? r : 1 - r) * t;
      var i = r * 2 - n;
      return new aR(aY(e >= 240 ? e - 240 : e + 120, i, n), aY(e, i, n), aY(e < 120 ? e + 240 : e - 120, i, n), this.opacity);
    },
    clamp() {
      return new aV(aH(this.h), aG(this.s), aG(this.l), aF(this.opacity));
    },
    displayable() {
      return (this.s >= 0 && this.s <= 1 || isNaN(this.s)) && this.l >= 0 && this.l <= 1 && this.opacity >= 0 && this.opacity <= 1;
    },
    formatHsl() {
      let e = aF(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${aH(this.h)}, ${aG(this.s) * 100}%, ${aG(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    }
  }));
  let aX = e => () => e;
  function aZ(e, t) {
    var r = t - e;
    if (r) {
      return function (t) {
        return e + t * r;
      };
    } else {
      return aX(isNaN(e) ? t : e);
    }
  }
  let aQ = function e(t) {
    var r;
    var n = (r = +t) == 1 ? aZ : function (e, t) {
      var n;
      var i;
      var a;
      if (t - e) {
        n = e;
        i = t;
        n = Math.pow(n, a = r);
        i = Math.pow(i, a) - n;
        a = 1 / a;
        return function (e) {
          return Math.pow(n + e * i, a);
        };
      } else {
        return aX(isNaN(e) ? t : e);
      }
    };
    function i(e, t) {
      var r = n((e = aL(e)).r, (t = aL(t)).r);
      var i = n(e.g, t.g);
      var a = n(e.b, t.b);
      var o = aZ(e.opacity, t.opacity);
      return function (t) {
        e.r = r(t);
        e.g = i(t);
        e.b = a(t);
        e.opacity = o(t);
        return e + "";
      };
    }
    i.gamma = e;
    return i;
  }(1);
  function aJ(e) {
    return function (t) {
      var r;
      var n;
      var i = t.length;
      var a = Array(i);
      var o = Array(i);
      var l = Array(i);
      for (r = 0; r < i; ++r) {
        n = aL(t[r]);
        a[r] = n.r || 0;
        o[r] = n.g || 0;
        l[r] = n.b || 0;
      }
      a = e(a);
      o = e(o);
      l = e(l);
      n.opacity = 1;
      return function (e) {
        n.r = a(e);
        n.g = o(e);
        n.b = l(e);
        return n + "";
      };
    };
  }
  function a0(e, t) {
    e *= 1;
    t *= 1;
    return function (r) {
      return e * (1 - r) + t * r;
    };
  }
  aJ(function (e) {
    var t = e.length - 1;
    return function (r) {
      var n = r <= 0 ? r = 0 : r >= 1 ? (r = 1, t - 1) : Math.floor(r * t);
      var i = e[n];
      var a = e[n + 1];
      var o = n > 0 ? e[n - 1] : i * 2 - a;
      var l = n < t - 1 ? e[n + 2] : a * 2 - i;
      return aq((r - n / t) * t, o, i, a, l);
    };
  });
  aJ(function (e) {
    var t = e.length;
    return function (r) {
      var n = Math.floor(((r %= 1) < 0 ? ++r : r) * t);
      var i = e[(n + t - 1) % t];
      var a = e[n % t];
      var o = e[(n + 1) % t];
      var l = e[(n + 2) % t];
      return aq((r - n / t) * t, i, a, o, l);
    };
  });
  var a1 = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var a2 = RegExp(a1.source, "g");
  function a5(e, t) {
    var r;
    var n;
    var i = typeof t;
    if (t == null || i === "boolean") {
      return aX(t);
    } else {
      return (i === "number" ? a0 : i === "string" ? (n = a_(t)) ? (t = n, aQ) : function (e, t) {
        var r;
        var n;
        var i;
        var a;
        var o;
        var l = a1.lastIndex = a2.lastIndex = 0;
        var u = -1;
        var c = [];
        var s = [];
        e += "";
        t += "";
        while ((i = a1.exec(e)) && (a = a2.exec(t))) {
          if ((o = a.index) > l) {
            o = t.slice(l, o);
            if (c[u]) {
              c[u] += o;
            } else {
              c[++u] = o;
            }
          }
          if ((i = i[0]) === (a = a[0])) {
            if (c[u]) {
              c[u] += a;
            } else {
              c[++u] = a;
            }
          } else {
            c[++u] = null;
            s.push({
              i: u,
              x: a0(i, a)
            });
          }
          l = a2.lastIndex;
        }
        if (l < t.length) {
          o = t.slice(l);
          if (c[u]) {
            c[u] += o;
          } else {
            c[++u] = o;
          }
        }
        if (c.length < 2) {
          if (s[0]) {
            r = s[0].x;
            return function (e) {
              return r(e) + "";
            };
          } else {
            n = t;
            return function () {
              return n;
            };
          }
        } else {
          t = s.length;
          return function (e) {
            var r;
            for (var n = 0; n < t; ++n) {
              c[(r = s[n]).i] = r.x(e);
            }
            return c.join("");
          };
        }
      } : t instanceof a_ ? aQ : t instanceof Date ? function (e, t) {
        var r = new Date();
        e *= 1;
        t *= 1;
        return function (n) {
          r.setTime(e * (1 - n) + t * n);
          return r;
        };
      } : !ArrayBuffer.isView(r = t) || r instanceof DataView ? Array.isArray(t) ? function (e, t) {
        var r;
        var n = t ? t.length : 0;
        var i = e ? Math.min(n, e.length) : 0;
        var a = Array(i);
        var o = Array(n);
        for (r = 0; r < i; ++r) {
          a[r] = a5(e[r], t[r]);
        }
        for (; r < n; ++r) {
          o[r] = t[r];
        }
        return function (e) {
          for (r = 0; r < i; ++r) {
            o[r] = a[r](e);
          }
          return o;
        };
      } : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? function (e, t) {
        var r;
        var n = {};
        var i = {};
        if (e === null || typeof e != "object") {
          e = {};
        }
        if (t === null || typeof t != "object") {
          t = {};
        }
        for (r in t) {
          if (r in e) {
            n[r] = a5(e[r], t[r]);
          } else {
            i[r] = t[r];
          }
        }
        return function (e) {
          for (r in n) {
            i[r] = n[r](e);
          }
          return i;
        };
      } : a0 : function (e, t) {
        t ||= [];
        var r;
        var n = e ? Math.min(t.length, e.length) : 0;
        var i = t.slice();
        return function (a) {
          for (r = 0; r < n; ++r) {
            i[r] = e[r] * (1 - a) + t[r] * a;
          }
          return i;
        };
      })(e, t);
    }
  }
  function a3(e, t) {
    e *= 1;
    t *= 1;
    return function (r) {
      return Math.round(e * (1 - r) + t * r);
    };
  }
  function a6(e) {
    return +e;
  }
  var a4 = [0, 1];
  function a8(e) {
    return e;
  }
  function a7(e, t) {
    var r;
    if (t -= e *= 1) {
      return function (r) {
        return (r - e) / t;
      };
    } else {
      r = isNaN(t) ? NaN : 0.5;
      return function () {
        return r;
      };
    }
  }
  function a9(e, t, r) {
    var n = e[0];
    var i = e[1];
    var a = t[0];
    var o = t[1];
    if (i < n) {
      n = a7(i, n);
      a = r(o, a);
    } else {
      n = a7(n, i);
      a = r(a, o);
    }
    return function (e) {
      return a(n(e));
    };
  }
  function oe(e, t, r) {
    var n = Math.min(e.length, t.length) - 1;
    var i = Array(n);
    var a = Array(n);
    var o = -1;
    for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n;) {
      i[o] = a7(e[o], e[o + 1]);
      a[o] = r(t[o], t[o + 1]);
    }
    return function (t) {
      var r = av(e, t, 1, n) - 1;
      return a[r](i[r](t));
    };
  }
  function ot(e, t) {
    return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
  }
  function or() {
    var e;
    var t;
    var r;
    var n;
    var i;
    var a;
    var o = a4;
    var l = a4;
    var u = a5;
    var c = a8;
    function s() {
      var e;
      var t;
      var r;
      var u = Math.min(o.length, l.length);
      if (c !== a8) {
        e = o[0];
        t = o[u - 1];
        if (e > t) {
          r = e;
          e = t;
          t = r;
        }
        c = function (r) {
          return Math.max(e, Math.min(t, r));
        };
      }
      n = u > 2 ? oe : a9;
      i = a = null;
      return f;
    }
    function f(t) {
      if (t == null || isNaN(t *= 1)) {
        return r;
      } else {
        return (i ||= n(o.map(e), l, u))(e(c(t)));
      }
    }
    f.invert = function (r) {
      return c(t((a ||= n(l, o.map(e), a0))(r)));
    };
    f.domain = function (e) {
      if (arguments.length) {
        o = Array.from(e, a6);
        return s();
      } else {
        return o.slice();
      }
    };
    f.range = function (e) {
      if (arguments.length) {
        l = Array.from(e);
        return s();
      } else {
        return l.slice();
      }
    };
    f.rangeRound = function (e) {
      l = Array.from(e);
      u = a3;
      return s();
    };
    f.clamp = function (e) {
      if (arguments.length) {
        c = !!e || a8;
        return s();
      } else {
        return c !== a8;
      }
    };
    f.interpolate = function (e) {
      if (arguments.length) {
        u = e;
        return s();
      } else {
        return u;
      }
    };
    f.unknown = function (e) {
      if (arguments.length) {
        r = e;
        return f;
      } else {
        return r;
      }
    };
    return function (r, n) {
      e = r;
      t = n;
      return s();
    };
  }
  function on() {
    return or()(a8, a8);
  }
  function oi(e, t) {
    if (!isFinite(e) || e === 0) {
      return null;
    }
    var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e");
    var n = e.slice(0, r);
    return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
  }
  function oa(e) {
    if (e = oi(Math.abs(e))) {
      return e[1];
    } else {
      return NaN;
    }
  }
  var oo = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function ol(e) {
    var t;
    if (!(t = oo.exec(e))) {
      throw Error("invalid format: " + e);
    }
    return new ou({
      fill: t[1],
      align: t[2],
      sign: t[3],
      symbol: t[4],
      zero: t[5],
      width: t[6],
      comma: t[7],
      precision: t[8] && t[8].slice(1),
      trim: t[9],
      type: t[10]
    });
  }
  function ou(e) {
    this.fill = e.fill === undefined ? " " : e.fill + "";
    this.align = e.align === undefined ? ">" : e.align + "";
    this.sign = e.sign === undefined ? "-" : e.sign + "";
    this.symbol = e.symbol === undefined ? "" : e.symbol + "";
    this.zero = !!e.zero;
    this.width = e.width === undefined ? undefined : +e.width;
    this.comma = !!e.comma;
    this.precision = e.precision === undefined ? undefined : +e.precision;
    this.trim = !!e.trim;
    this.type = e.type === undefined ? "" : e.type + "";
  }
  function oc(e, t) {
    var r = oi(e, t);
    if (!r) {
      return e + "";
    }
    var n = r[0];
    var i = r[1];
    if (i < 0) {
      return "0." + Array(-i).join("0") + n;
    } else if (n.length > i + 1) {
      return n.slice(0, i + 1) + "." + n.slice(i + 1);
    } else {
      return n + Array(i - n.length + 2).join("0");
    }
  }
  ol.prototype = ou.prototype;
  ou.prototype.toString = function () {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };
  let os = {
    "%": (e, t) => (e * 100).toFixed(t),
    b: e => Math.round(e).toString(2),
    c: e => e + "",
    d: function (e) {
      if (Math.abs(e = Math.round(e)) >= 1e+21) {
        return e.toLocaleString("en").replace(/,/g, "");
      } else {
        return e.toString(10);
      }
    },
    e: (e, t) => e.toExponential(t),
    f: (e, t) => e.toFixed(t),
    g: (e, t) => e.toPrecision(t),
    o: e => Math.round(e).toString(8),
    p: (e, t) => oc(e * 100, t),
    r: oc,
    s: function (e, t) {
      var r = oi(e, t);
      if (!r) {
        h = undefined;
        return e.toPrecision(t);
      }
      var n = r[0];
      var i = r[1];
      var a = i - (h = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1;
      var o = n.length;
      if (a === o) {
        return n;
      } else if (a > o) {
        return n + Array(a - o + 1).join("0");
      } else if (a > 0) {
        return n.slice(0, a) + "." + n.slice(a);
      } else {
        return "0." + Array(1 - a).join("0") + oi(e, Math.max(0, t + a - 1))[0];
      }
    },
    X: e => Math.round(e).toString(16).toUpperCase(),
    x: e => Math.round(e).toString(16)
  };
  function of(e) {
    return e;
  }
  var od = Array.prototype.map;
  var op = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function oh(e, t, r, n) {
    var i;
    var a;
    var o = ac(e, t, r);
    switch ((n = ol(n == null ? ",f" : n)).type) {
      case "s":
        var l = Math.max(Math.abs(e), Math.abs(t));
        if (n.precision == null && !isNaN(a = Math.max(0, Math.max(-8, Math.min(8, Math.floor(oa(l) / 3))) * 3 - oa(Math.abs(o))))) {
          n.precision = a;
        }
        return m(n, l);
      case "":
      case "e":
      case "g":
      case "p":
      case "r":
        if (n.precision == null && !isNaN(a = Math.max(0, oa(Math.abs(Math.max(Math.abs(e), Math.abs(t))) - (i = Math.abs(i = o))) - oa(i)) + 1)) {
          n.precision = a - (n.type === "e");
        }
        break;
      case "f":
      case "%":
        if (n.precision == null && !isNaN(a = Math.max(0, -oa(Math.abs(o))))) {
          n.precision = a - (n.type === "%") * 2;
        }
    }
    return v(n);
  }
  function oy(e) {
    var t = e.domain;
    e.ticks = function (e) {
      var r = t();
      return al(r[0], r[r.length - 1], e == null ? 10 : e);
    };
    e.tickFormat = function (e, r) {
      var n = t();
      return oh(n[0], n[n.length - 1], e == null ? 10 : e, r);
    };
    e.nice = function (r) {
      if (r == null) {
        r = 10;
      }
      var n;
      var i;
      var a = t();
      var o = 0;
      var l = a.length - 1;
      var u = a[o];
      var c = a[l];
      var s = 10;
      for (c < u && (i = u, u = c, c = i, i = o, o = l, l = i); s-- > 0;) {
        if ((i = au(u, c, r)) === n) {
          a[o] = u;
          a[l] = c;
          return t(a);
        }
        if (i > 0) {
          u = Math.floor(u / i) * i;
          c = Math.ceil(c / i) * i;
        } else if (i < 0) {
          u = Math.ceil(u * i) / i;
          c = Math.floor(c * i) / i;
        } else {
          break;
        }
        n = i;
      }
      return e;
    };
    return e;
  }
  function ov() {
    var e = on();
    e.copy = function () {
      return ot(e, ov());
    };
    i3.apply(e, arguments);
    return oy(e);
  }
  function om(e) {
    var t;
    function r(e) {
      if (e == null || isNaN(e *= 1)) {
        return t;
      } else {
        return e;
      }
    }
    r.invert = r;
    r.domain = r.range = function (t) {
      if (arguments.length) {
        e = Array.from(t, a6);
        return r;
      } else {
        return e.slice();
      }
    };
    r.unknown = function (e) {
      if (arguments.length) {
        t = e;
        return r;
      } else {
        return t;
      }
    };
    r.copy = function () {
      return om(e).unknown(t);
    };
    e = arguments.length ? Array.from(e, a6) : [0, 1];
    return oy(r);
  }
  function og(e, t) {
    e = e.slice();
    var r;
    var n = 0;
    var i = e.length - 1;
    var a = e[n];
    var o = e[i];
    if (o < a) {
      r = n;
      n = i;
      i = r;
      r = a;
      a = o;
      o = r;
    }
    e[n] = t.floor(a);
    e[i] = t.ceil(o);
    return e;
  }
  function ob(e) {
    return Math.log(e);
  }
  function ox(e) {
    return Math.exp(e);
  }
  function ow(e) {
    return -Math.log(-e);
  }
  function oO(e) {
    return -Math.exp(-e);
  }
  function oA(e) {
    if (isFinite(e)) {
      return +("1e" + e);
    } else if (e < 0) {
      return 0;
    } else {
      return e;
    }
  }
  function oS(e) {
    return (t, r) => -e(-t, r);
  }
  function oE(e) {
    let t;
    let r;
    let n = e(ob, ox);
    let i = n.domain;
    let a = 10;
    function o() {
      var o;
      var l;
      t = (o = a) === Math.E ? Math.log : o === 10 && Math.log10 || o === 2 && Math.log2 || (o = Math.log(o), e => Math.log(e) / o);
      r = (l = a) === 10 ? oA : l === Math.E ? Math.exp : e => Math.pow(l, e);
      if (i()[0] < 0) {
        t = oS(t);
        r = oS(r);
        e(ow, oO);
      } else {
        e(ob, ox);
      }
      return n;
    }
    n.base = function (e) {
      if (arguments.length) {
        a = +e;
        return o();
      } else {
        return a;
      }
    };
    n.domain = function (e) {
      if (arguments.length) {
        i(e);
        return o();
      } else {
        return i();
      }
    };
    n.ticks = e => {
      let n;
      let o;
      let l = i();
      let u = l[0];
      let c = l[l.length - 1];
      let s = c < u;
      if (s) {
        [u, c] = [c, u];
      }
      let f = t(u);
      let d = t(c);
      let p = e == null ? 10 : +e;
      let h = [];
      if (!(a % 1) && d - f < p) {
        f = Math.floor(f);
        d = Math.ceil(d);
        if (u > 0) {
          for (; f <= d; ++f) {
            for (n = 1; n < a; ++n) {
              if (!((o = f < 0 ? n / r(-f) : n * r(f)) < u)) {
                if (o > c) {
                  break;
                }
                h.push(o);
              }
            }
          }
        } else {
          for (; f <= d; ++f) {
            for (n = a - 1; n >= 1; --n) {
              if (!((o = f > 0 ? n / r(-f) : n * r(f)) < u)) {
                if (o > c) {
                  break;
                }
                h.push(o);
              }
            }
          }
        }
        if (h.length * 2 < p) {
          h = al(u, c, p);
        }
      } else {
        h = al(f, d, Math.min(d - f, p)).map(r);
      }
      if (s) {
        return h.reverse();
      } else {
        return h;
      }
    };
    n.tickFormat = (e, i) => {
      if (e == null) {
        e = 10;
      }
      if (i == null) {
        i = a === 10 ? "s" : ",";
      }
      if (typeof i != "function") {
        if (!(a % 1) && (i = ol(i)).precision == null) {
          i.trim = true;
        }
        i = v(i);
      }
      if (e === Infinity) {
        return i;
      }
      let o = Math.max(1, a * e / n.ticks().length);
      return e => {
        let n = e / r(Math.round(t(e)));
        if (n * a < a - 0.5) {
          n *= a;
        }
        if (n <= o) {
          return i(e);
        } else {
          return "";
        }
      };
    };
    n.nice = () => i(og(i(), {
      floor: e => r(Math.floor(t(e))),
      ceil: e => r(Math.ceil(t(e)))
    }));
    return n;
  }
  function oP() {
    let e = oE(or()).domain([1, 10]);
    e.copy = () => ot(e, oP()).base(e.base());
    i3.apply(e, arguments);
    return e;
  }
  function oj(e) {
    return function (t) {
      return Math.sign(t) * Math.log1p(Math.abs(t / e));
    };
  }
  function ok(e) {
    return function (t) {
      return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
    };
  }
  function oI(e) {
    var t = 1;
    var r = e(oj(1), ok(t));
    r.constant = function (r) {
      if (arguments.length) {
        return e(oj(t = +r), ok(t));
      } else {
        return t;
      }
    };
    return oy(r);
  }
  function oC() {
    var e = oI(or());
    e.copy = function () {
      return ot(e, oC()).constant(e.constant());
    };
    return i3.apply(e, arguments);
  }
  function oT(e) {
    return function (t) {
      if (t < 0) {
        return -Math.pow(-t, e);
      } else {
        return Math.pow(t, e);
      }
    };
  }
  function oM(e) {
    if (e < 0) {
      return -Math.sqrt(-e);
    } else {
      return Math.sqrt(e);
    }
  }
  function o_(e) {
    if (e < 0) {
      return -e * e;
    } else {
      return e * e;
    }
  }
  function oD(e) {
    var t = e(a8, a8);
    var r = 1;
    t.exponent = function (t) {
      if (arguments.length) {
        if ((r = +t) == 1) {
          return e(a8, a8);
        } else if (r === 0.5) {
          return e(oM, o_);
        } else {
          return e(oT(r), oT(1 / r));
        }
      } else {
        return r;
      }
    };
    return oy(t);
  }
  function oN() {
    var e = oD(or());
    e.copy = function () {
      return ot(e, oN()).exponent(e.exponent());
    };
    i3.apply(e, arguments);
    return e;
  }
  function oL() {
    return oN.apply(null, arguments).exponent(0.5);
  }
  function oR(e) {
    return Math.sign(e) * e * e;
  }
  function oz() {
    var e;
    var t = on();
    var r = [0, 1];
    var n = false;
    function i(r) {
      var i;
      var a = Math.sign(i = t(r)) * Math.sqrt(Math.abs(i));
      if (isNaN(a)) {
        return e;
      } else if (n) {
        return Math.round(a);
      } else {
        return a;
      }
    }
    i.invert = function (e) {
      return t.invert(oR(e));
    };
    i.domain = function (e) {
      if (arguments.length) {
        t.domain(e);
        return i;
      } else {
        return t.domain();
      }
    };
    i.range = function (e) {
      if (arguments.length) {
        t.range((r = Array.from(e, a6)).map(oR));
        return i;
      } else {
        return r.slice();
      }
    };
    i.rangeRound = function (e) {
      return i.range(e).round(true);
    };
    i.round = function (e) {
      if (arguments.length) {
        n = !!e;
        return i;
      } else {
        return n;
      }
    };
    i.clamp = function (e) {
      if (arguments.length) {
        t.clamp(e);
        return i;
      } else {
        return t.clamp();
      }
    };
    i.unknown = function (t) {
      if (arguments.length) {
        e = t;
        return i;
      } else {
        return e;
      }
    };
    i.copy = function () {
      return oz(t.domain(), r).round(n).clamp(t.clamp()).unknown(e);
    };
    i3.apply(i, arguments);
    return oy(i);
  }
  function oB(e, t) {
    let r;
    if (t === undefined) {
      for (let t of e) {
        if (t != null && (r < t || r === undefined && t >= t)) {
          r = t;
        }
      }
    } else {
      let n = -1;
      for (let i of e) {
        if ((i = t(i, ++n, e)) != null && (r < i || r === undefined && i >= i)) {
          r = i;
        }
      }
    }
    return r;
  }
  function oF(e, t) {
    let r;
    if (t === undefined) {
      for (let t of e) {
        if (t != null && (r > t || r === undefined && t >= t)) {
          r = t;
        }
      }
    } else {
      let n = -1;
      for (let i of e) {
        if ((i = t(i, ++n, e)) != null && (r > i || r === undefined && i >= i)) {
          r = i;
        }
      }
    }
    return r;
  }
  function oU(e, t) {
    return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : +(e > t));
  }
  function o$(e, t, r) {
    let n = e[t];
    e[t] = e[r];
    e[r] = n;
  }
  function oK() {
    var e;
    var t = [];
    var r = [];
    var n = [];
    function i() {
      var e = 0;
      var i = Math.max(1, r.length);
      for (n = Array(i - 1); ++e < i;) {
        n[e - 1] = function (e, t, r = ah) {
          if (!!(n = e.length) && !isNaN(t *= 1)) {
            if (t <= 0 || n < 2) {
              return +r(e[0], 0, e);
            }
            if (t >= 1) {
              return +r(e[n - 1], n - 1, e);
            }
            var n;
            var i = (n - 1) * t;
            var a = Math.floor(i);
            var o = +r(e[a], a, e);
            return o + (r(e[a + 1], a + 1, e) - o) * (i - a);
          }
        }(t, e / i);
      }
      return a;
    }
    function a(t) {
      if (t == null || isNaN(t *= 1)) {
        return e;
      } else {
        return r[av(n, t)];
      }
    }
    a.invertExtent = function (e) {
      var i = r.indexOf(e);
      if (i < 0) {
        return [NaN, NaN];
      } else {
        return [i > 0 ? n[i - 1] : t[0], i < n.length ? n[i] : t[t.length - 1]];
      }
    };
    a.domain = function (e) {
      if (!arguments.length) {
        return t.slice();
      }
      t = [];
      for (let r of e) {
        if (r != null && !isNaN(r *= 1)) {
          t.push(r);
        }
      }
      t.sort(as);
      return i();
    };
    a.range = function (e) {
      if (arguments.length) {
        r = Array.from(e);
        return i();
      } else {
        return r.slice();
      }
    };
    a.unknown = function (t) {
      if (arguments.length) {
        e = t;
        return a;
      } else {
        return e;
      }
    };
    a.quantiles = function () {
      return n.slice();
    };
    a.copy = function () {
      return oK().domain(t).range(r).unknown(e);
    };
    return i3.apply(a, arguments);
  }
  function oW() {
    var e;
    var t = 0;
    var r = 1;
    var n = 1;
    var i = [0.5];
    var a = [0, 1];
    function o(t) {
      if (t != null && t <= t) {
        return a[av(i, t, 0, n)];
      } else {
        return e;
      }
    }
    function l() {
      var e = -1;
      for (i = Array(n); ++e < n;) {
        i[e] = ((e + 1) * r - (e - n) * t) / (n + 1);
      }
      return o;
    }
    o.domain = function (e) {
      if (arguments.length) {
        [t, r] = e;
        t *= 1;
        r *= 1;
        return l();
      } else {
        return [t, r];
      }
    };
    o.range = function (e) {
      if (arguments.length) {
        n = (a = Array.from(e)).length - 1;
        return l();
      } else {
        return a.slice();
      }
    };
    o.invertExtent = function (e) {
      var o = a.indexOf(e);
      if (o < 0) {
        return [NaN, NaN];
      } else if (o < 1) {
        return [t, i[0]];
      } else if (o >= n) {
        return [i[n - 1], r];
      } else {
        return [i[o - 1], i[o]];
      }
    };
    o.unknown = function (t) {
      if (arguments.length) {
        e = t;
      }
      return o;
    };
    o.thresholds = function () {
      return i.slice();
    };
    o.copy = function () {
      return oW().domain([t, r]).range(a).unknown(e);
    };
    return i3.apply(oy(o), arguments);
  }
  function oV() {
    var e;
    var t = [0.5];
    var r = [0, 1];
    var n = 1;
    function i(i) {
      if (i != null && i <= i) {
        return r[av(t, i, 0, n)];
      } else {
        return e;
      }
    }
    i.domain = function (e) {
      if (arguments.length) {
        n = Math.min((t = Array.from(e)).length, r.length - 1);
        return i;
      } else {
        return t.slice();
      }
    };
    i.range = function (e) {
      if (arguments.length) {
        r = Array.from(e);
        n = Math.min(t.length, r.length - 1);
        return i;
      } else {
        return r.slice();
      }
    };
    i.invertExtent = function (e) {
      var n = r.indexOf(e);
      return [t[n - 1], t[n]];
    };
    i.unknown = function (t) {
      if (arguments.length) {
        e = t;
        return i;
      } else {
        return e;
      }
    };
    i.copy = function () {
      return oV().domain(t).range(r).unknown(e);
    };
    return i3.apply(i, arguments);
  }
  v = (y = function (e) {
    var t;
    var r;
    var n;
    var i = e.grouping === undefined || e.thousands === undefined ? of : (t = od.call(e.grouping, Number), r = e.thousands + "", function (e, n) {
      for (var i = e.length, a = [], o = 0, l = t[0], u = 0; i > 0 && l > 0 && (u + l + 1 > n && (l = Math.max(1, n - u)), a.push(e.substring(i -= l, i + l)), !((u += l + 1) > n));) {
        l = t[o = (o + 1) % t.length];
      }
      return a.reverse().join(r);
    });
    var a = e.currency === undefined ? "" : e.currency[0] + "";
    var o = e.currency === undefined ? "" : e.currency[1] + "";
    var l = e.decimal === undefined ? "." : e.decimal + "";
    var u = e.numerals === undefined ? of : (n = od.call(e.numerals, String), function (e) {
      return e.replace(/[0-9]/g, function (e) {
        return n[+e];
      });
    });
    var c = e.percent === undefined ? "%" : e.percent + "";
    var s = e.minus === undefined ? "−" : e.minus + "";
    var f = e.nan === undefined ? "NaN" : e.nan + "";
    function d(e, t) {
      var r = (e = ol(e)).fill;
      var n = e.align;
      var d = e.sign;
      var p = e.symbol;
      var y = e.zero;
      var v = e.width;
      var m = e.comma;
      var g = e.precision;
      var b = e.trim;
      var x = e.type;
      if (x === "n") {
        m = true;
        x = "g";
      } else if (!os[x]) {
        if (g === undefined) {
          g = 12;
        }
        b = true;
        x = "g";
      }
      if (y || r === "0" && n === "=") {
        y = true;
        r = "0";
        n = "=";
      }
      var w = (t && t.prefix !== undefined ? t.prefix : "") + (p === "$" ? a : p === "#" && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "");
      var O = (p === "$" ? o : /[%p]/.test(x) ? c : "") + (t && t.suffix !== undefined ? t.suffix : "");
      var A = os[x];
      var S = /[defgprs%]/.test(x);
      function E(e) {
        var t;
        var a;
        var o;
        var c = w;
        var p = O;
        if (x === "c") {
          p = A(e) + p;
          e = "";
        } else {
          var E = (e *= 1) < 0 || 1 / e < 0;
          e = isNaN(e) ? f : A(Math.abs(e), g);
          if (b) {
            e = function (e) {
              var t;
              e: for (var r = e.length, n = 1, i = -1; n < r; ++n) {
                switch (e[n]) {
                  case ".":
                    i = t = n;
                    break;
                  case "0":
                    if (i === 0) {
                      i = n;
                    }
                    t = n;
                    break;
                  default:
                    if (!+e[n]) {
                      break e;
                    }
                    if (i > 0) {
                      i = 0;
                    }
                }
              }
              if (i > 0) {
                return e.slice(0, i) + e.slice(t + 1);
              } else {
                return e;
              }
            }(e);
          }
          if (E && +e == 0 && d !== "+") {
            E = false;
          }
          c = (E ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + c;
          p = (x !== "s" || isNaN(e) || h === undefined ? "" : op[8 + h / 3]) + p + (E && d === "(" ? ")" : "");
          if (S) {
            t = -1;
            a = e.length;
            while (++t < a) {
              if ((o = e.charCodeAt(t)) < 48 || o > 57) {
                p = (o === 46 ? l + e.slice(t + 1) : e.slice(t)) + p;
                e = e.slice(0, t);
                break;
              }
            }
          }
        }
        if (m && !y) {
          e = i(e, Infinity);
        }
        var P = c.length + e.length + p.length;
        var j = P < v ? Array(v - P + 1).join(r) : "";
        if (m && y) {
          e = i(j + e, j.length ? v - p.length : Infinity);
          j = "";
        }
        switch (n) {
          case "<":
            e = c + e + p + j;
            break;
          case "=":
            e = c + j + e + p;
            break;
          case "^":
            e = j.slice(0, P = j.length >> 1) + c + e + p + j.slice(P);
            break;
          default:
            e = j + c + e + p;
        }
        return u(e);
      }
      g = g === undefined ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g));
      E.toString = function () {
        return e + "";
      };
      return E;
    }
    return {
      format: d,
      formatPrefix: function (e, t) {
        var r = Math.max(-8, Math.min(8, Math.floor(oa(t) / 3))) * 3;
        var n = Math.pow(10, -r);
        var i = d(((e = ol(e)).type = "f", e), {
          suffix: op[8 + r / 3]
        });
        return function (e) {
          return i(n * e);
        };
      }
    };
  }({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  })).format;
  m = y.formatPrefix;
  let oH = new Date();
  let oG = new Date();
  function oY(e, t, r, n) {
    function i(t) {
      e(t = arguments.length == 0 ? new Date() : new Date(+t));
      return t;
    }
    i.floor = t => {
      e(t = new Date(+t));
      return t;
    };
    i.ceil = r => {
      e(r = new Date(r - 1));
      t(r, 1);
      e(r);
      return r;
    };
    i.round = e => {
      let t = i(e);
      let r = i.ceil(e);
      if (e - t < r - e) {
        return t;
      } else {
        return r;
      }
    };
    i.offset = (e, r) => {
      t(e = new Date(+e), r == null ? 1 : Math.floor(r));
      return e;
    };
    i.range = (r, n, a) => {
      let o;
      let l = [];
      r = i.ceil(r);
      a = a == null ? 1 : Math.floor(a);
      if (!(r < n) || !(a > 0)) {
        return l;
      }
      do {
        l.push(o = new Date(+r));
        t(r, a);
        e(r);
      } while (o < r && r < n);
      return l;
    };
    i.filter = r => oY(t => {
      if (t >= t) {
        while (e(t), !r(t)) {
          t.setTime(t - 1);
        }
      }
    }, (e, n) => {
      if (e >= e) {
        if (n < 0) {
          while (++n <= 0) {
            while (t(e, -1), !r(e));
          }
        } else {
          while (--n >= 0) {
            while (t(e, 1), !r(e));
          }
        }
      }
    });
    if (r) {
      i.count = (t, n) => {
        oH.setTime(+t);
        oG.setTime(+n);
        e(oH);
        e(oG);
        return Math.floor(r(oH, oG));
      };
      i.every = e => isFinite(e = Math.floor(e)) && e > 0 ? e > 1 ? i.filter(n ? t => n(t) % e == 0 : t => i.count(0, t) % e == 0) : i : null;
    }
    return i;
  }
  let oq = oY(e => {
    e.setMonth(0, 1);
    e.setHours(0, 0, 0, 0);
  }, (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  }, (e, t) => t.getFullYear() - e.getFullYear(), e => e.getFullYear());
  oq.every = e => isFinite(e = Math.floor(e)) && e > 0 ? oY(t => {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e);
    t.setMonth(0, 1);
    t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setFullYear(t.getFullYear() + r * e);
  }) : null;
  oq.range;
  let oX = oY(e => {
    e.setUTCMonth(0, 1);
    e.setUTCHours(0, 0, 0, 0);
  }, (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  }, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), e => e.getUTCFullYear());
  oX.every = e => isFinite(e = Math.floor(e)) && e > 0 ? oY(t => {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e);
    t.setUTCMonth(0, 1);
    t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCFullYear(t.getUTCFullYear() + r * e);
  }) : null;
  oX.range;
  let oZ = oY(e => {
    e.setDate(1);
    e.setHours(0, 0, 0, 0);
  }, (e, t) => {
    e.setMonth(e.getMonth() + t);
  }, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, e => e.getMonth());
  oZ.range;
  let oQ = oY(e => {
    e.setUTCDate(1);
    e.setUTCHours(0, 0, 0, 0);
  }, (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  }, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, e => e.getUTCMonth());
  oQ.range;
  function oJ(e) {
    return oY(t => {
      t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7);
      t.setHours(0, 0, 0, 0);
    }, (e, t) => {
      e.setDate(e.getDate() + t * 7);
    }, (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * 60000) / 604800000);
  }
  let o0 = oJ(0);
  let o1 = oJ(1);
  let o2 = oJ(2);
  let o5 = oJ(3);
  let o3 = oJ(4);
  let o6 = oJ(5);
  let o4 = oJ(6);
  function o8(e) {
    return oY(t => {
      t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7);
      t.setUTCHours(0, 0, 0, 0);
    }, (e, t) => {
      e.setUTCDate(e.getUTCDate() + t * 7);
    }, (e, t) => (t - e) / 604800000);
  }
  o0.range;
  o1.range;
  o2.range;
  o5.range;
  o3.range;
  o6.range;
  o4.range;
  let o7 = o8(0);
  let o9 = o8(1);
  let le = o8(2);
  let lt = o8(3);
  let lr = o8(4);
  let ln = o8(5);
  let li = o8(6);
  o7.range;
  o9.range;
  le.range;
  lt.range;
  lr.range;
  ln.range;
  li.range;
  let la = oY(e => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * 60000) / 86400000, e => e.getDate() - 1);
  la.range;
  let lo = oY(e => {
    e.setUTCHours(0, 0, 0, 0);
  }, (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  }, (e, t) => (t - e) / 86400000, e => e.getUTCDate() - 1);
  lo.range;
  let ll = oY(e => {
    e.setUTCHours(0, 0, 0, 0);
  }, (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  }, (e, t) => (t - e) / 86400000, e => Math.floor(e / 86400000));
  ll.range;
  let lu = oY(e => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * 1000 - e.getMinutes() * 60000);
  }, (e, t) => {
    e.setTime(+e + t * 3600000);
  }, (e, t) => (t - e) / 3600000, e => e.getHours());
  lu.range;
  let lc = oY(e => {
    e.setUTCMinutes(0, 0, 0);
  }, (e, t) => {
    e.setTime(+e + t * 3600000);
  }, (e, t) => (t - e) / 3600000, e => e.getUTCHours());
  lc.range;
  let ls = oY(e => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * 1000);
  }, (e, t) => {
    e.setTime(+e + t * 60000);
  }, (e, t) => (t - e) / 60000, e => e.getMinutes());
  ls.range;
  let lf = oY(e => {
    e.setUTCSeconds(0, 0);
  }, (e, t) => {
    e.setTime(+e + t * 60000);
  }, (e, t) => (t - e) / 60000, e => e.getUTCMinutes());
  lf.range;
  let ld = oY(e => {
    e.setTime(e - e.getMilliseconds());
  }, (e, t) => {
    e.setTime(+e + t * 1000);
  }, (e, t) => (t - e) / 1000, e => e.getUTCSeconds());
  ld.range;
  let lp = oY(() => {}, (e, t) => {
    e.setTime(+e + t);
  }, (e, t) => t - e);
  function lh(e, t, r, n, i, a) {
    let o = [[ld, 1, 1000], [ld, 5, 5000], [ld, 15, 15000], [ld, 30, 30000], [a, 1, 60000], [a, 5, 300000], [a, 15, 900000], [a, 30, 1800000], [i, 1, 3600000], [i, 3, 10800000], [i, 6, 21600000], [i, 12, 43200000], [n, 1, 86400000], [n, 2, 172800000], [r, 1, 604800000], [t, 1, 2592000000], [t, 3, 7776000000], [e, 1, 31536000000]];
    function l(t, r, n) {
      let i = Math.abs(r - t) / n;
      let a = ad(([,, e]) => e).right(o, i);
      if (a === o.length) {
        return e.every(ac(t / 31536000000, r / 31536000000, n));
      }
      if (a === 0) {
        return lp.every(Math.max(ac(t, r, n), 1));
      }
      let [l, u] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
      return l.every(u);
    }
    return [function (e, t, r) {
      let n = t < e;
      if (n) {
        [e, t] = [t, e];
      }
      let i = r && typeof r.range == "function" ? r : l(e, t, r);
      let a = i ? i.range(e, +t + 1) : [];
      if (n) {
        return a.reverse();
      } else {
        return a;
      }
    }, l];
  }
  lp.every = e => isFinite(e = Math.floor(e)) && e > 0 ? e > 1 ? oY(t => {
    t.setTime(Math.floor(t / e) * e);
  }, (t, r) => {
    t.setTime(+t + r * e);
  }, (t, r) => (r - t) / e) : lp : null;
  lp.range;
  let [ly, lv] = lh(oX, oQ, o7, ll, lc, lf);
  let [lm, lg] = lh(oq, oZ, o0, la, lu, ls);
  function lb(e) {
    if (e.y >= 0 && e.y < 100) {
      var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
      t.setFullYear(e.y);
      return t;
    }
    return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
  }
  function lx(e) {
    if (e.y >= 0 && e.y < 100) {
      var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
      t.setUTCFullYear(e.y);
      return t;
    }
    return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
  }
  function lw(e, t, r) {
    return {
      y: e,
      m: t,
      d: r,
      H: 0,
      M: 0,
      S: 0,
      L: 0
    };
  }
  var lO = {
    "-": "",
    _: " ",
    0: "0"
  };
  var lA = /^\s*\d+/;
  var lS = /^%/;
  var lE = /[\\^$*+?|[\]().{}]/g;
  function lP(e, t, r) {
    var n = e < 0 ? "-" : "";
    var i = (n ? -e : e) + "";
    var a = i.length;
    return n + (a < r ? Array(r - a + 1).join(t) + i : i);
  }
  function lj(e) {
    return e.replace(lE, "\\$&");
  }
  function lk(e) {
    return RegExp("^(?:" + e.map(lj).join("|") + ")", "i");
  }
  function lI(e) {
    return new Map(e.map((e, t) => [e.toLowerCase(), t]));
  }
  function lC(e, t, r) {
    var n = lA.exec(t.slice(r, r + 1));
    if (n) {
      e.w = +n[0];
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function lT(e, t, r) {
    var n = lA.exec(t.slice(r, r + 1));
    if (n) {
      e.u = +n[0];
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function lM(e, t, r) {
    var n = lA.exec(t.slice(r, r + 2));
    if (n) {
      e.U = +n[0];
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function l_(e, t, r) {
    var n = lA.exec(t.slice(r, r + 2));
    if (n) {
      e.V = +n[0];
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function lD(e, t, r) {
    var n = lA.exec(t.slice(r, r + 2));
    if (n) {
      e.W = +n[0];
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function lN(e, t, r) {
    var n = lA.exec(t.slice(r, r + 4));
    if (n) {
      e.y = +n[0];
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function lL(e, t, r) {
    var n = lA.exec(t.slice(r, r + 2));
    if (n) {
      e.y = +n[0] + (+n[0] > 68 ? 1900 : 2000);
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function lR(e, t, r) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
    if (n) {
      e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"));
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function lz(e, t, r) {
    var n = lA.exec(t.slice(r, r + 1));
    if (n) {
      e.q = n[0] * 3 - 3;
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function lB(e, t, r) {
    var n = lA.exec(t.slice(r, r + 2));
    if (n) {
      e.m = n[0] - 1;
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function lF(e, t, r) {
    var n = lA.exec(t.slice(r, r + 2));
    if (n) {
      e.d = +n[0];
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function lU(e, t, r) {
    var n = lA.exec(t.slice(r, r + 3));
    if (n) {
      e.m = 0;
      e.d = +n[0];
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function l$(e, t, r) {
    var n = lA.exec(t.slice(r, r + 2));
    if (n) {
      e.H = +n[0];
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function lK(e, t, r) {
    var n = lA.exec(t.slice(r, r + 2));
    if (n) {
      e.M = +n[0];
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function lW(e, t, r) {
    var n = lA.exec(t.slice(r, r + 2));
    if (n) {
      e.S = +n[0];
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function lV(e, t, r) {
    var n = lA.exec(t.slice(r, r + 3));
    if (n) {
      e.L = +n[0];
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function lH(e, t, r) {
    var n = lA.exec(t.slice(r, r + 6));
    if (n) {
      e.L = Math.floor(n[0] / 1000);
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function lG(e, t, r) {
    var n = lS.exec(t.slice(r, r + 1));
    if (n) {
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function lY(e, t, r) {
    var n = lA.exec(t.slice(r));
    if (n) {
      e.Q = +n[0];
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function lq(e, t, r) {
    var n = lA.exec(t.slice(r));
    if (n) {
      e.s = +n[0];
      return r + n[0].length;
    } else {
      return -1;
    }
  }
  function lX(e, t) {
    return lP(e.getDate(), t, 2);
  }
  function lZ(e, t) {
    return lP(e.getHours(), t, 2);
  }
  function lQ(e, t) {
    return lP(e.getHours() % 12 || 12, t, 2);
  }
  function lJ(e, t) {
    return lP(1 + la.count(oq(e), e), t, 3);
  }
  function l0(e, t) {
    return lP(e.getMilliseconds(), t, 3);
  }
  function l1(e, t) {
    return l0(e, t) + "000";
  }
  function l2(e, t) {
    return lP(e.getMonth() + 1, t, 2);
  }
  function l5(e, t) {
    return lP(e.getMinutes(), t, 2);
  }
  function l3(e, t) {
    return lP(e.getSeconds(), t, 2);
  }
  function l6(e) {
    var t = e.getDay();
    if (t === 0) {
      return 7;
    } else {
      return t;
    }
  }
  function l4(e, t) {
    return lP(o0.count(oq(e) - 1, e), t, 2);
  }
  function l8(e) {
    var t = e.getDay();
    if (t >= 4 || t === 0) {
      return o3(e);
    } else {
      return o3.ceil(e);
    }
  }
  function l7(e, t) {
    e = l8(e);
    return lP(o3.count(oq(e), e) + (oq(e).getDay() === 4), t, 2);
  }
  function l9(e) {
    return e.getDay();
  }
  function ue(e, t) {
    return lP(o1.count(oq(e) - 1, e), t, 2);
  }
  function ut(e, t) {
    return lP(e.getFullYear() % 100, t, 2);
  }
  function ur(e, t) {
    return lP((e = l8(e)).getFullYear() % 100, t, 2);
  }
  function un(e, t) {
    return lP(e.getFullYear() % 10000, t, 4);
  }
  function ui(e, t) {
    var r = e.getDay();
    return lP((e = r >= 4 || r === 0 ? o3(e) : o3.ceil(e)).getFullYear() % 10000, t, 4);
  }
  function ua(e) {
    var t = e.getTimezoneOffset();
    return (t > 0 ? "-" : (t *= -1, "+")) + lP(t / 60 | 0, "0", 2) + lP(t % 60, "0", 2);
  }
  function uo(e, t) {
    return lP(e.getUTCDate(), t, 2);
  }
  function ul(e, t) {
    return lP(e.getUTCHours(), t, 2);
  }
  function uu(e, t) {
    return lP(e.getUTCHours() % 12 || 12, t, 2);
  }
  function uc(e, t) {
    return lP(1 + lo.count(oX(e), e), t, 3);
  }
  function us(e, t) {
    return lP(e.getUTCMilliseconds(), t, 3);
  }
  function uf(e, t) {
    return us(e, t) + "000";
  }
  function ud(e, t) {
    return lP(e.getUTCMonth() + 1, t, 2);
  }
  function up(e, t) {
    return lP(e.getUTCMinutes(), t, 2);
  }
  function uh(e, t) {
    return lP(e.getUTCSeconds(), t, 2);
  }
  function uy(e) {
    var t = e.getUTCDay();
    if (t === 0) {
      return 7;
    } else {
      return t;
    }
  }
  function uv(e, t) {
    return lP(o7.count(oX(e) - 1, e), t, 2);
  }
  function um(e) {
    var t = e.getUTCDay();
    if (t >= 4 || t === 0) {
      return lr(e);
    } else {
      return lr.ceil(e);
    }
  }
  function ug(e, t) {
    e = um(e);
    return lP(lr.count(oX(e), e) + (oX(e).getUTCDay() === 4), t, 2);
  }
  function ub(e) {
    return e.getUTCDay();
  }
  function ux(e, t) {
    return lP(o9.count(oX(e) - 1, e), t, 2);
  }
  function uw(e, t) {
    return lP(e.getUTCFullYear() % 100, t, 2);
  }
  function uO(e, t) {
    return lP((e = um(e)).getUTCFullYear() % 100, t, 2);
  }
  function uA(e, t) {
    return lP(e.getUTCFullYear() % 10000, t, 4);
  }
  function uS(e, t) {
    var r = e.getUTCDay();
    return lP((e = r >= 4 || r === 0 ? lr(e) : lr.ceil(e)).getUTCFullYear() % 10000, t, 4);
  }
  function uE() {
    return "+0000";
  }
  function uP() {
    return "%";
  }
  function uj(e) {
    return +e;
  }
  function uk(e) {
    return Math.floor(e / 1000);
  }
  function uI(e) {
    return new Date(e);
  }
  function uC(e) {
    if (e instanceof Date) {
      return +e;
    } else {
      return +new Date(+e);
    }
  }
  function uT(e, t, r, n, i, a, o, l, u, c) {
    var s = on();
    var f = s.invert;
    var d = s.domain;
    var p = c(".%L");
    var h = c(":%S");
    var y = c("%I:%M");
    var v = c("%I %p");
    var m = c("%a %d");
    var g = c("%b %d");
    var b = c("%B");
    var x = c("%Y");
    function w(e) {
      return (u(e) < e ? p : l(e) < e ? h : o(e) < e ? y : a(e) < e ? v : n(e) < e ? i(e) < e ? m : g : r(e) < e ? b : x)(e);
    }
    s.invert = function (e) {
      return new Date(f(e));
    };
    s.domain = function (e) {
      if (arguments.length) {
        return d(Array.from(e, uC));
      } else {
        return d().map(uI);
      }
    };
    s.ticks = function (t) {
      var r = d();
      return e(r[0], r[r.length - 1], t == null ? 10 : t);
    };
    s.tickFormat = function (e, t) {
      if (t == null) {
        return w;
      } else {
        return c(t);
      }
    };
    s.nice = function (e) {
      var r = d();
      if (!e || typeof e.range != "function") {
        e = t(r[0], r[r.length - 1], e == null ? 10 : e);
      }
      if (e) {
        return d(og(r, e));
      } else {
        return s;
      }
    };
    s.copy = function () {
      return ot(s, uT(e, t, r, n, i, a, o, l, u, c));
    };
    return s;
  }
  function uM() {
    return i3.apply(uT(lm, lg, oq, oZ, o0, la, lu, ls, ld, b).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
  }
  function u_() {
    return i3.apply(uT(ly, lv, oX, oQ, o7, lo, lc, lf, ld, x).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
  }
  function uD() {
    var e;
    var t;
    var r;
    var n;
    var i;
    var a = 0;
    var o = 1;
    var l = a8;
    var u = false;
    function c(t) {
      if (t == null || isNaN(t *= 1)) {
        return i;
      } else {
        return l(r === 0 ? 0.5 : (t = (n(t) - e) * r, u ? Math.max(0, Math.min(1, t)) : t));
      }
    }
    function s(e) {
      return function (t) {
        var r;
        var n;
        if (arguments.length) {
          [r, n] = t;
          l = e(r, n);
          return c;
        } else {
          return [l(0), l(1)];
        }
      };
    }
    c.domain = function (i) {
      if (arguments.length) {
        [a, o] = i;
        e = n(a *= 1);
        t = n(o *= 1);
        r = e === t ? 0 : 1 / (t - e);
        return c;
      } else {
        return [a, o];
      }
    };
    c.clamp = function (e) {
      if (arguments.length) {
        u = !!e;
        return c;
      } else {
        return u;
      }
    };
    c.interpolator = function (e) {
      if (arguments.length) {
        l = e;
        return c;
      } else {
        return l;
      }
    };
    c.range = s(a5);
    c.rangeRound = s(a3);
    c.unknown = function (e) {
      if (arguments.length) {
        i = e;
        return c;
      } else {
        return i;
      }
    };
    return function (i) {
      n = i;
      e = i(a);
      t = i(o);
      r = e === t ? 0 : 1 / (t - e);
      return c;
    };
  }
  function uN(e, t) {
    return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
  }
  function uL() {
    var e = oy(uD()(a8));
    e.copy = function () {
      return uN(e, uL());
    };
    return i6.apply(e, arguments);
  }
  function uR() {
    var e = oE(uD()).domain([1, 10]);
    e.copy = function () {
      return uN(e, uR()).base(e.base());
    };
    return i6.apply(e, arguments);
  }
  function uz() {
    var e = oI(uD());
    e.copy = function () {
      return uN(e, uz()).constant(e.constant());
    };
    return i6.apply(e, arguments);
  }
  function uB() {
    var e = oD(uD());
    e.copy = function () {
      return uN(e, uB()).exponent(e.exponent());
    };
    return i6.apply(e, arguments);
  }
  function uF() {
    return uB.apply(null, arguments).exponent(0.5);
  }
  function uU() {
    var e = [];
    var t = a8;
    function r(r) {
      if (r != null && !isNaN(r *= 1)) {
        return t((av(e, r, 1) - 1) / (e.length - 1));
      }
    }
    r.domain = function (t) {
      if (!arguments.length) {
        return e.slice();
      }
      e = [];
      for (let r of t) {
        if (r != null && !isNaN(r *= 1)) {
          e.push(r);
        }
      }
      e.sort(as);
      return r;
    };
    r.interpolator = function (e) {
      if (arguments.length) {
        t = e;
        return r;
      } else {
        return t;
      }
    };
    r.range = function () {
      return e.map((r, n) => t(n / (e.length - 1)));
    };
    r.quantiles = function (t) {
      return Array.from({
        length: t + 1
      }, (r, n) => function (e, t) {
        if (!!(r = (e = Float64Array.from(function* (e, t) {
          if (t === undefined) {
            for (let t of e) {
              if (t != null && (t *= 1) >= t) {
                yield t;
              }
            }
          } else {
            let r = -1;
            for (let n of e) {
              if ((n = t(n, ++r, e)) != null && (n *= 1) >= n) {
                yield n;
              }
            }
          }
        }(e, undefined))).length) && !isNaN(t *= 1)) {
          if (t <= 0 || r < 2) {
            return oF(e);
          }
          if (t >= 1) {
            return oB(e);
          }
          var r;
          var n = (r - 1) * t;
          var i = Math.floor(n);
          var a = oB(function e(t, r, n = 0, i = Infinity, a) {
            r = Math.floor(r);
            n = Math.floor(Math.max(0, n));
            i = Math.floor(Math.min(t.length - 1, i));
            if (!(n <= r) || !(r <= i)) {
              return t;
            }
            for (a = a === undefined ? oU : function (e = as) {
              if (e === as) {
                return oU;
              }
              if (typeof e != "function") {
                throw TypeError("compare is not a function");
              }
              return (t, r) => {
                let n = e(t, r);
                if (n || n === 0) {
                  return n;
                } else {
                  return (e(r, r) === 0) - (e(t, t) === 0);
                }
              };
            }(a); i > n;) {
              if (i - n > 600) {
                let o = i - n + 1;
                let l = r - n + 1;
                let u = Math.log(o);
                let c = Math.exp(u * 2 / 3) * 0.5;
                let s = Math.sqrt(u * c * (o - c) / o) * 0.5 * (l - o / 2 < 0 ? -1 : 1);
                let f = Math.max(n, Math.floor(r - l * c / o + s));
                let d = Math.min(i, Math.floor(r + (o - l) * c / o + s));
                e(t, r, f, d, a);
              }
              let o = t[r];
              let l = n;
              let u = i;
              o$(t, n, r);
              if (a(t[i], o) > 0) {
                o$(t, n, i);
              }
              while (l < u) {
                o$(t, l, u);
                ++l;
                --u;
                while (a(t[l], o) < 0) {
                  ++l;
                }
                while (a(t[u], o) > 0) {
                  --u;
                }
              }
              if (a(t[n], o) === 0) {
                o$(t, n, u);
              } else {
                o$(t, ++u, i);
              }
              if (u <= r) {
                n = u + 1;
              }
              if (r <= u) {
                i = u - 1;
              }
            }
            return t;
          }(e, i).subarray(0, i + 1));
          return a + (oF(e.subarray(i + 1)) - a) * (n - i);
        }
      }(e, n / t));
    };
    r.copy = function () {
      return uU(t).domain(e);
    };
    return i6.apply(r, arguments);
  }
  function u$() {
    var e;
    var t;
    var r;
    var n;
    var i;
    var a;
    var o;
    var l = 0;
    var u = 0.5;
    var c = 1;
    var s = 1;
    var f = a8;
    var d = false;
    function p(e) {
      if (isNaN(e *= 1)) {
        return o;
      } else {
        e = 0.5 + ((e = +a(e)) - t) * (s * e < s * t ? n : i);
        return f(d ? Math.max(0, Math.min(1, e)) : e);
      }
    }
    function h(e) {
      return function (t) {
        var r;
        var n;
        var i;
        if (arguments.length) {
          [r, n, i] = t;
          f = function (e, t) {
            if (t === undefined) {
              t = e;
              e = a5;
            }
            for (var r = 0, n = t.length - 1, i = t[0], a = Array(n < 0 ? 0 : n); r < n;) {
              a[r] = e(i, i = t[++r]);
            }
            return function (e) {
              var t = Math.max(0, Math.min(n - 1, Math.floor(e *= n)));
              return a[t](e - t);
            };
          }(e, [r, n, i]);
          return p;
        } else {
          return [f(0), f(0.5), f(1)];
        }
      };
    }
    p.domain = function (o) {
      if (arguments.length) {
        [l, u, c] = o;
        e = a(l *= 1);
        t = a(u *= 1);
        r = a(c *= 1);
        n = e === t ? 0 : 0.5 / (t - e);
        i = t === r ? 0 : 0.5 / (r - t);
        s = t < e ? -1 : 1;
        return p;
      } else {
        return [l, u, c];
      }
    };
    p.clamp = function (e) {
      if (arguments.length) {
        d = !!e;
        return p;
      } else {
        return d;
      }
    };
    p.interpolator = function (e) {
      if (arguments.length) {
        f = e;
        return p;
      } else {
        return f;
      }
    };
    p.range = h(a5);
    p.rangeRound = h(a3);
    p.unknown = function (e) {
      if (arguments.length) {
        o = e;
        return p;
      } else {
        return o;
      }
    };
    return function (o) {
      a = o;
      e = o(l);
      t = o(u);
      r = o(c);
      n = e === t ? 0 : 0.5 / (t - e);
      i = t === r ? 0 : 0.5 / (r - t);
      s = t < e ? -1 : 1;
      return p;
    };
  }
  function uK() {
    var e = oy(u$()(a8));
    e.copy = function () {
      return uN(e, uK());
    };
    return i6.apply(e, arguments);
  }
  function uW() {
    var e = oE(u$()).domain([0.1, 1, 10]);
    e.copy = function () {
      return uN(e, uW()).base(e.base());
    };
    return i6.apply(e, arguments);
  }
  function uV() {
    var e = oI(u$());
    e.copy = function () {
      return uN(e, uV()).constant(e.constant());
    };
    return i6.apply(e, arguments);
  }
  function uH() {
    var e = oD(u$());
    e.copy = function () {
      return uN(e, uH()).exponent(e.exponent());
    };
    return i6.apply(e, arguments);
  }
  function uG() {
    return uH.apply(null, arguments).exponent(0.5);
  }
  b = (g = function (e) {
    var t = e.dateTime;
    var r = e.date;
    var n = e.time;
    var i = e.periods;
    var a = e.days;
    var o = e.shortDays;
    var l = e.months;
    var u = e.shortMonths;
    var c = lk(i);
    var s = lI(i);
    var f = lk(a);
    var d = lI(a);
    var p = lk(o);
    var h = lI(o);
    var y = lk(l);
    var v = lI(l);
    var m = lk(u);
    var g = lI(u);
    var b = {
      a: function (e) {
        return o[e.getDay()];
      },
      A: function (e) {
        return a[e.getDay()];
      },
      b: function (e) {
        return u[e.getMonth()];
      },
      B: function (e) {
        return l[e.getMonth()];
      },
      c: null,
      d: lX,
      e: lX,
      f: l1,
      g: ur,
      G: ui,
      H: lZ,
      I: lQ,
      j: lJ,
      L: l0,
      m: l2,
      M: l5,
      p: function (e) {
        return i[+(e.getHours() >= 12)];
      },
      q: function (e) {
        return 1 + ~~(e.getMonth() / 3);
      },
      Q: uj,
      s: uk,
      S: l3,
      u: l6,
      U: l4,
      V: l7,
      w: l9,
      W: ue,
      x: null,
      X: null,
      y: ut,
      Y: un,
      Z: ua,
      "%": uP
    };
    var x = {
      a: function (e) {
        return o[e.getUTCDay()];
      },
      A: function (e) {
        return a[e.getUTCDay()];
      },
      b: function (e) {
        return u[e.getUTCMonth()];
      },
      B: function (e) {
        return l[e.getUTCMonth()];
      },
      c: null,
      d: uo,
      e: uo,
      f: uf,
      g: uO,
      G: uS,
      H: ul,
      I: uu,
      j: uc,
      L: us,
      m: ud,
      M: up,
      p: function (e) {
        return i[+(e.getUTCHours() >= 12)];
      },
      q: function (e) {
        return 1 + ~~(e.getUTCMonth() / 3);
      },
      Q: uj,
      s: uk,
      S: uh,
      u: uy,
      U: uv,
      V: ug,
      w: ub,
      W: ux,
      x: null,
      X: null,
      y: uw,
      Y: uA,
      Z: uE,
      "%": uP
    };
    var w = {
      a: function (e, t, r) {
        var n = p.exec(t.slice(r));
        if (n) {
          e.w = h.get(n[0].toLowerCase());
          return r + n[0].length;
        } else {
          return -1;
        }
      },
      A: function (e, t, r) {
        var n = f.exec(t.slice(r));
        if (n) {
          e.w = d.get(n[0].toLowerCase());
          return r + n[0].length;
        } else {
          return -1;
        }
      },
      b: function (e, t, r) {
        var n = m.exec(t.slice(r));
        if (n) {
          e.m = g.get(n[0].toLowerCase());
          return r + n[0].length;
        } else {
          return -1;
        }
      },
      B: function (e, t, r) {
        var n = y.exec(t.slice(r));
        if (n) {
          e.m = v.get(n[0].toLowerCase());
          return r + n[0].length;
        } else {
          return -1;
        }
      },
      c: function (e, r, n) {
        return S(e, t, r, n);
      },
      d: lF,
      e: lF,
      f: lH,
      g: lL,
      G: lN,
      H: l$,
      I: l$,
      j: lU,
      L: lV,
      m: lB,
      M: lK,
      p: function (e, t, r) {
        var n = c.exec(t.slice(r));
        if (n) {
          e.p = s.get(n[0].toLowerCase());
          return r + n[0].length;
        } else {
          return -1;
        }
      },
      q: lz,
      Q: lY,
      s: lq,
      S: lW,
      u: lT,
      U: lM,
      V: l_,
      w: lC,
      W: lD,
      x: function (e, t, n) {
        return S(e, r, t, n);
      },
      X: function (e, t, r) {
        return S(e, n, t, r);
      },
      y: lL,
      Y: lN,
      Z: lR,
      "%": lG
    };
    function O(e, t) {
      return function (r) {
        var n;
        var i;
        var a;
        var o = [];
        var l = -1;
        var u = 0;
        var c = e.length;
        for (r instanceof Date || (r = new Date(+r)); ++l < c;) {
          if (e.charCodeAt(l) === 37) {
            o.push(e.slice(u, l));
            if ((i = lO[n = e.charAt(++l)]) != null) {
              n = e.charAt(++l);
            } else {
              i = n === "e" ? " " : "0";
            }
            if (a = t[n]) {
              n = a(r, i);
            }
            o.push(n);
            u = l + 1;
          }
        }
        o.push(e.slice(u, l));
        return o.join("");
      };
    }
    function A(e, t) {
      return function (r) {
        var n;
        var i;
        var a = lw(1900, undefined, 1);
        if (S(a, e, r += "", 0) != r.length) {
          return null;
        }
        if ("Q" in a) {
          return new Date(a.Q);
        }
        if ("s" in a) {
          return new Date(a.s * 1000 + ("L" in a ? a.L : 0));
        }
        if (!!t && !("Z" in a)) {
          a.Z = 0;
        }
        if ("p" in a) {
          a.H = a.H % 12 + a.p * 12;
        }
        if (a.m === undefined) {
          a.m = "q" in a ? a.q : 0;
        }
        if ("V" in a) {
          if (a.V < 1 || a.V > 53) {
            return null;
          }
          if (!("w" in a)) {
            a.w = 1;
          }
          if ("Z" in a) {
            n = (i = (n = lx(lw(a.y, 0, 1))).getUTCDay()) > 4 || i === 0 ? o9.ceil(n) : o9(n);
            n = lo.offset(n, (a.V - 1) * 7);
            a.y = n.getUTCFullYear();
            a.m = n.getUTCMonth();
            a.d = n.getUTCDate() + (a.w + 6) % 7;
          } else {
            n = (i = (n = lb(lw(a.y, 0, 1))).getDay()) > 4 || i === 0 ? o1.ceil(n) : o1(n);
            n = la.offset(n, (a.V - 1) * 7);
            a.y = n.getFullYear();
            a.m = n.getMonth();
            a.d = n.getDate() + (a.w + 6) % 7;
          }
        } else if ("W" in a || "U" in a) {
          if (!("w" in a)) {
            a.w = "u" in a ? a.u % 7 : +("W" in a);
          }
          i = "Z" in a ? lx(lw(a.y, 0, 1)).getUTCDay() : lb(lw(a.y, 0, 1)).getDay();
          a.m = 0;
          a.d = "W" in a ? (a.w + 6) % 7 + a.W * 7 - (i + 5) % 7 : a.w + a.U * 7 - (i + 6) % 7;
        }
        if ("Z" in a) {
          a.H += a.Z / 100 | 0;
          a.M += a.Z % 100;
          return lx(a);
        } else {
          return lb(a);
        }
      };
    }
    function S(e, t, r, n) {
      var i;
      var a;
      for (var o = 0, l = t.length, u = r.length; o < l;) {
        if (n >= u) {
          return -1;
        }
        if ((i = t.charCodeAt(o++)) === 37) {
          if (!(a = w[(i = t.charAt(o++)) in lO ? t.charAt(o++) : i]) || (n = a(e, r, n)) < 0) {
            return -1;
          }
        } else if (i != r.charCodeAt(n++)) {
          return -1;
        }
      }
      return n;
    }
    b.x = O(r, b);
    b.X = O(n, b);
    b.c = O(t, b);
    x.x = O(r, x);
    x.X = O(n, x);
    x.c = O(t, x);
    return {
      format: function (e) {
        var t = O(e += "", b);
        t.toString = function () {
          return e;
        };
        return t;
      },
      parse: function (e) {
        var t = A(e += "", false);
        t.toString = function () {
          return e;
        };
        return t;
      },
      utcFormat: function (e) {
        var t = O(e += "", x);
        t.toString = function () {
          return e;
        };
        return t;
      },
      utcParse: function (e) {
        var t = A(e += "", true);
        t.toString = function () {
          return e;
        };
        return t;
      }
    };
  }({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  })).format;
  g.parse;
  x = g.utcFormat;
  g.utcParse;
  e.s(["scaleBand", 0, at, "scaleDiverging", 0, uK, "scaleDivergingLog", 0, uW, "scaleDivergingPow", 0, uH, "scaleDivergingSqrt", 0, uG, "scaleDivergingSymlog", 0, uV, "scaleIdentity", 0, om, "scaleImplicit", 0, i9, "scaleLinear", 0, ov, "scaleLog", 0, oP, "scaleOrdinal", 0, ae, "scalePoint", 0, ar, "scalePow", 0, oN, "scaleQuantile", 0, oK, "scaleQuantize", 0, oW, "scaleRadial", 0, oz, "scaleSequential", 0, uL, "scaleSequentialLog", 0, uR, "scaleSequentialPow", 0, uB, "scaleSequentialQuantile", 0, uU, "scaleSequentialSqrt", 0, uF, "scaleSequentialSymlog", 0, uz, "scaleSqrt", 0, oL, "scaleSymlog", 0, oC, "scaleThreshold", 0, oV, "scaleTime", 0, uM, "scaleUtc", 0, u_, "tickFormat", 0, oh], 98928);
  e.i(98928);
  e.s(["scaleBand", 0, at, "scaleDiverging", 0, uK, "scaleDivergingLog", 0, uW, "scaleDivergingPow", 0, uH, "scaleDivergingSqrt", 0, uG, "scaleDivergingSymlog", 0, uV, "scaleIdentity", 0, om, "scaleImplicit", 0, i9, "scaleLinear", 0, ov, "scaleLog", 0, oP, "scaleOrdinal", 0, ae, "scalePoint", 0, ar, "scalePow", 0, oN, "scaleQuantile", 0, oK, "scaleQuantize", 0, oW, "scaleRadial", 0, oz, "scaleSequential", 0, uL, "scaleSequentialLog", 0, uR, "scaleSequentialPow", 0, uB, "scaleSequentialQuantile", 0, uU, "scaleSequentialSqrt", 0, uF, "scaleSequentialSymlog", 0, uz, "scaleSqrt", 0, oL, "scaleSymlog", 0, oC, "scaleThreshold", 0, oV, "scaleTime", 0, uM, "scaleUtc", 0, u_, "tickFormat", 0, oh], 60396);
  var uY = e.i(60396);
  function uq(e, t, r) {
    if (typeof e == "function") {
      return e.copy().domain(t).range(r);
    }
    if (e != null) {
      var n = function (e) {
        if (e in uY && typeof uY[e] == "function") {
          return uY[e]();
        }
        var t = `scale${eG(e)}`;
        if (t in uY && typeof uY[t] == "function") {
          return uY[t]();
        }
      }(e);
      if (n != null) {
        n.domain(t).range(r);
        return n;
      }
    }
  }
  function uX(e, t, r, n) {
    if (r != null && n != null) {
      if (typeof e.scale == "function") {
        return uq(e.scale, r, n);
      } else {
        return uq(t, r, n);
      }
    }
  }
  var uZ = (e, t, r) => {
    if (e != null) {
      var n = e.scale;
      var i = e.type;
      if (n === "auto") {
        if (i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !t)) {
          return "point";
        } else if (i === "category") {
          return "band";
        } else {
          return "linear";
        }
      }
      if (typeof n == "string") {
        if (`scale${eG(n)}` in uY) {
          return n;
        } else {
          return "point";
        }
      }
    }
  };
  function uQ(e, t) {
    if (e) {
      var r = t ?? e.domain();
      var n = r.map(t => {
        return e(t) ?? 0;
      });
      var i = e.range();
      if (r.length !== 0 && !(i.length < 2)) {
        return e => {
          var a = function (e, t) {
            for (var r = 0, n = e.length, i = e[0] < e[e.length - 1]; r < n;) {
              var a = Math.floor((r + n) / 2);
              if (i ? e[a] < t : e[a] > t) {
                r = a + 1;
              } else {
                n = a;
              }
            }
            return r;
          }(n, e);
          if (a <= 0) {
            return r[0];
          } else if (a >= r.length) {
            return r[r.length - 1];
          } else if (Math.abs(e - (n[a - 1] ?? 0)) <= Math.abs(e - (n[a] ?? 0))) {
            return r[a - 1];
          } else {
            return r[a];
          }
        };
      }
    }
  }
  function uJ(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function u0(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        uJ(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        uJ(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function u1(e, t) {
    return function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(e) || function (e, t) {
      var r = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (r != null) {
        var n;
        var i;
        var a;
        var o;
        var l = [];
        var u = true;
        var c = false;
        try {
          a = (r = r.call(e)).next;
          if (t === 0) {
            if (Object(r) !== r) {
              return;
            }
            u = false;
          } else {
            for (; !(u = (n = a.call(r)).done) && (l.push(n.value), l.length !== t); u = true);
          }
        } catch (e) {
          c = true;
          i = e;
        } finally {
          try {
            if (!u && r.return != null && (o = r.return(), Object(o) !== o)) {
              return;
            }
          } finally {
            if (c) {
              throw i;
            }
          }
        }
        return l;
      }
    }(e, t) || function (e, t) {
      if (e) {
        if (typeof e == "string") {
          return u2(e, t);
        }
        var r = {}.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor) {
          r = e.constructor.name;
        }
        if (r === "Map" || r === "Set") {
          return Array.from(e);
        } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
          return u2(e, t);
        } else {
          return undefined;
        }
      }
    }(e, t) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function u2(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  var u5 = [0, "auto"];
  var u3 = {
    allowDataOverflow: false,
    allowDecimals: true,
    allowDuplicatedCategory: true,
    angle: 0,
    dataKey: undefined,
    domain: undefined,
    height: 30,
    hide: true,
    id: 0,
    includeHidden: false,
    interval: "preserveEnd",
    minTickGap: 5,
    mirror: false,
    name: undefined,
    orientation: "bottom",
    padding: {
      left: 0,
      right: 0
    },
    reversed: false,
    scale: "auto",
    tick: true,
    tickCount: 5,
    tickFormatter: undefined,
    ticks: undefined,
    type: "category",
    unit: undefined,
    niceTicks: "auto"
  };
  var u6 = (e, t) => e.cartesianAxis.xAxis[t];
  var u4 = (e, t) => {
    var r = u6(e, t);
    if (r == null) {
      return u3;
    } else {
      return r;
    }
  };
  var u8 = {
    allowDataOverflow: false,
    allowDecimals: true,
    allowDuplicatedCategory: true,
    angle: 0,
    dataKey: undefined,
    domain: u5,
    hide: true,
    id: 0,
    includeHidden: false,
    interval: "preserveEnd",
    minTickGap: 5,
    mirror: false,
    name: undefined,
    orientation: "left",
    padding: {
      top: 0,
      bottom: 0
    },
    reversed: false,
    scale: "auto",
    tick: true,
    tickCount: 5,
    tickFormatter: undefined,
    ticks: undefined,
    type: "number",
    unit: undefined,
    niceTicks: "auto",
    width: 60
  };
  var u7 = (e, t) => e.cartesianAxis.yAxis[t];
  var u9 = (e, t) => {
    var r = u7(e, t);
    if (r == null) {
      return u8;
    } else {
      return r;
    }
  };
  var ce = {
    domain: [0, "auto"],
    includeHidden: false,
    reversed: false,
    allowDataOverflow: false,
    allowDuplicatedCategory: false,
    dataKey: undefined,
    id: 0,
    name: "",
    range: [64, 64],
    scale: "auto",
    type: "number",
    unit: ""
  };
  var ct = (e, t) => {
    var r = e.cartesianAxis.zAxis[t];
    if (r == null) {
      return ce;
    } else {
      return r;
    }
  };
  var cr = (e, t, r) => {
    switch (t) {
      case "xAxis":
        return u4(e, r);
      case "yAxis":
        return u9(e, r);
      case "zAxis":
        return ct(e, r);
      case "angleAxis":
        return iz(e, r);
      case "radiusAxis":
        return iB(e, r);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  };
  var cn = (e, t, r) => {
    switch (t) {
      case "xAxis":
        return u4(e, r);
      case "yAxis":
        return u9(e, r);
      case "angleAxis":
        return iz(e, r);
      case "radiusAxis":
        return iB(e, r);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  };
  var ci = e => e.graphicalItems.cartesianItems.some(e => e.type === "bar") || e.graphicalItems.polarItems.some(e => e.type === "radialBar");
  function ca(e, t) {
    return r => {
      switch (e) {
        case "xAxis":
          return "xAxisId" in r && r.xAxisId === t;
        case "yAxis":
          return "yAxisId" in r && r.yAxisId === t;
        case "zAxis":
          return "zAxisId" in r && r.zAxisId === t;
        case "angleAxis":
          return "angleAxisId" in r && r.angleAxisId === t;
        case "radiusAxis":
          return "radiusAxisId" in r && r.radiusAxisId === t;
        default:
          return false;
      }
    };
  }
  var co = e => e.graphicalItems.cartesianItems;
  var cl = ea([iG, iY], ca);
  var cu = (e, t, r) => e.filter(r).filter(e => (t == null ? undefined : t.includeHidden) === true || !e.hide);
  var cc = ea([co, cr, cl], cu, {
    memoizeOptions: {
      resultEqualityCheck: iJ
    }
  });
  var cs = ea([cc], e => e.filter(e => e.type === "area" || e.type === "bar").filter(iZ));
  var cf = e => e.filter(e => !("stackId" in e) || e.stackId === undefined);
  var cd = ea([cc], cf);
  var cp = e => e.map(e => e.data).filter(Boolean).flat(1);
  var ch = ea([cc], e => e.some(e => !e.data));
  var cy = ea([cc], cp, {
    memoizeOptions: {
      resultEqualityCheck: iJ
    }
  });
  var cv = (e, t) => {
    var r = t.chartData;
    var n = t.dataStartIndex;
    var i = t.dataEndIndex;
    if (e.length > 0) {
      return e;
    } else {
      return (r === undefined ? [] : r).slice(n, i + 1);
    }
  };
  var cm = ea([cy, ec], cv);
  var cg = (e, t, r) => (t == null ? undefined : t.dataKey) != null ? e.map(e => ({
    value: e8(e, t.dataKey)
  })) : r.length > 0 ? r.map(e => e.dataKey).flatMap(t => e.map(e => ({
    value: e8(e, t)
  }))) : e.map(e => ({
    value: e
  }));
  var cb = (e, t, r, n, i, a) => {
    var o = n.chartData;
    var l = n.dataStartIndex;
    var u = n.dataEndIndex;
    var c = cg(e, t, r);
    if (i && (t == null ? undefined : t.dataKey) != null && a.length > 0) {
      return [...(o === undefined ? [] : o).slice(l, u + 1).map(e => ({
        value: e8(e, t.dataKey)
      })).filter(e => e.value != null), ...c];
    } else {
      return c;
    }
  };
  var cx = ea([cm, cr, cc, ec, ch, cy], cb);
  function cw(e) {
    if (eB(e) || e instanceof Date) {
      var t = Number(e);
      if (eZ(t)) {
        return t;
      }
    }
  }
  function cO(e) {
    if (Array.isArray(e)) {
      var t = [cw(e[0]), cw(e[1])];
      if (ie(t)) {
        return t;
      } else {
        return undefined;
      }
    }
    var r = cw(e);
    if (r != null) {
      return [r, r];
    }
  }
  function cA(e) {
    return e.map(cw).filter(eY);
  }
  function cS(e, t) {
    var r = cw(e);
    var n = cw(t);
    if (r == null && n == null) {
      return 0;
    } else if (r == null) {
      return -1;
    } else if (n == null) {
      return 1;
    } else {
      return r - n;
    }
  }
  var cE = ea([cx], e => e == null ? undefined : e.map(e => e.value).sort(cS));
  function cP(e, t) {
    switch (e) {
      case "xAxis":
        return t.direction === "x";
      case "yAxis":
        return t.direction === "y";
      default:
        return false;
    }
  }
  var cj = e => {
    var t = i0(e);
    var r = i1(e);
    return cn(e, t, r);
  };
  var ck = ea([cj], e => e == null ? undefined : e.dataKey);
  var cI = ea([cs, ec, cj], iX);
  var cC = (e, t, r, n) => Object.fromEntries(Object.entries(t.reduce((e, t) => {
    if (t.stackId == null) {
      return e;
    }
    var r = e[t.stackId];
    if (r == null) {
      r = [];
    }
    r.push(t);
    e[t.stackId] = r;
    return e;
  }, {})).map(t => {
    var i = u1(t, 2);
    var a = i[0];
    var o = i[1];
    var l = n ? [...o].reverse() : o;
    return [a, {
      stackedData: tt(e, l.map(iq), r),
      graphicalItems: l
    }];
  }));
  var cT = ea([cI, cs, im, ig], cC);
  var cM = (e, t, r, n) => {
    var i = t.dataStartIndex;
    var a = t.dataEndIndex;
    if (n == null && r !== "zAxis") {
      return tr(e, i, a);
    }
  };
  var c_ = ea([cr], e => e.allowDataOverflow);
  var cD = e => {
    if (e == null || !("domain" in e)) {
      return u5;
    }
    if (e.domain != null) {
      return e.domain;
    }
    if ("ticks" in e && e.ticks != null) {
      if (e.type === "number") {
        var r = cA(e.ticks);
        return [Math.min(...r), Math.max(...r)];
      }
      if (e.type === "category") {
        return e.ticks.map(String);
      }
    }
    return (e == null ? undefined : e.domain) ?? u5;
  };
  var cN = ea([cr], cD);
  var cL = ea([cN, c_], ir);
  var cR = ea([cT, el, iG, cL], cM, {
    memoizeOptions: {
      resultEqualityCheck: iQ
    }
  });
  var cz = e => e.errorBars;
  function cB() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) {
      t[r] = arguments[r];
    }
    var n = t.filter(Boolean);
    if (n.length !== 0) {
      var i = n.flat();
      return [Math.min(...i), Math.max(...i)];
    }
  }
  function cF(e, t, r, n, i) {
    var a;
    var o;
    var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
    if (r.length > 0) {
      r.forEach(e => {
        var r;
        var u = e.data != null ? [...e.data] : l;
        var c = (r = n[e.id]) == null ? undefined : r.filter(e => cP(i, e));
        u.forEach(r => {
          var i = e8(r, t.dataKey ?? e.dataKey);
          var l = function (e, t, r) {
            if (!r || !r.length) {
              return [];
            }
            if (typeof t != "number" || eL(t)) {
              if (Array.isArray(t)) {
                var n;
                var i = cA(t);
                if (i.length > 0) {
                  n = Math.max(...i);
                }
              }
            } else {
              n = t;
            }
            if (n == null) {
              return [];
            } else {
              return cA(r.flatMap(t => {
                var r;
                var i;
                var a = e8(e, t.dataKey);
                if (Array.isArray(a)) {
                  var o = u1(a, 2);
                  r = o[0];
                  i = o[1];
                } else {
                  r = i = a;
                }
                if (eZ(r) && eZ(i)) {
                  return [n - r, n + i];
                }
              }));
            }
          }(r, i, c);
          if (l.length >= 2) {
            var u = Math.min(...l);
            var s = Math.max(...l);
            if (a == null || u < a) {
              a = u;
            }
            if (o == null || s > o) {
              o = s;
            }
          }
          var f = cO(i);
          if (f != null) {
            a = a == null ? f[0] : Math.min(a, f[0]);
            o = o == null ? f[1] : Math.max(o, f[1]);
          }
        });
      });
    }
    if ((t == null ? undefined : t.dataKey) != null && r.length === 0) {
      e.forEach(e => {
        var r = cO(e8(e, t.dataKey));
        if (r != null) {
          a = a == null ? r[0] : Math.min(a, r[0]);
          o = o == null ? r[1] : Math.max(o, r[1]);
        }
      });
    }
    if (eZ(a) && eZ(o)) {
      return [a, o];
    }
  }
  var cU = ea([cm, cr, cd, cz, iG, es], cF, {
    memoizeOptions: {
      resultEqualityCheck: iQ
    }
  });
  function c$(e) {
    var t = e.value;
    if (eB(t) || t instanceof Date) {
      return t;
    }
  }
  var cK = e => e.referenceElements.dots;
  var cW = (e, t, r) => e.filter(e => e.ifOverflow === "extendDomain").filter(e => t === "xAxis" ? e.xAxisId === r : e.yAxisId === r);
  var cV = ea([cK, iG, iY], cW);
  var cH = e => e.referenceElements.areas;
  var cG = ea([cH, iG, iY], cW);
  var cY = e => e.referenceElements.lines;
  var cq = ea([cY, iG, iY], cW);
  var cX = (e, t) => {
    if (e != null) {
      var r = cA(e.map(e => t === "xAxis" ? e.x : e.y));
      if (r.length !== 0) {
        return [Math.min(...r), Math.max(...r)];
      }
    }
  };
  var cZ = ea(cV, iG, cX);
  var cQ = (e, t) => {
    if (e != null) {
      var r = cA(e.flatMap(e => [t === "xAxis" ? e.x1 : e.y1, t === "xAxis" ? e.x2 : e.y2]));
      if (r.length !== 0) {
        return [Math.min(...r), Math.max(...r)];
      }
    }
  };
  var cJ = ea([cG, iG], cQ);
  var c0 = (e, t) => {
    if (e != null) {
      var r = e.flatMap(e => t === "xAxis" ? function (e) {
        if (e.x != null) {
          return cA([e.x]);
        }
        var t;
        var r = (t = e.segment) == null ? undefined : t.map(e => e.x);
        if (r == null || r.length === 0) {
          return [];
        } else {
          return cA(r);
        }
      }(e) : function (e) {
        if (e.y != null) {
          return cA([e.y]);
        }
        var t;
        var r = (t = e.segment) == null ? undefined : t.map(e => e.y);
        if (r == null || r.length === 0) {
          return [];
        } else {
          return cA(r);
        }
      }(e));
      if (r.length !== 0) {
        return [Math.min(...r), Math.max(...r)];
      }
    }
  };
  var c1 = ea([cq, iG], c0);
  var c2 = ea(cZ, c1, cJ, (e, t, r) => cB(e, r, t));
  var c5 = (e, t, r, n, i, a, o, l, u) => {
    if (r != null) {
      return r;
    }
    var c = o === "vertical" && l === "xAxis" || o === "horizontal" && l === "yAxis" ? cB(n, a, i) : cB(a, i);
    var s = function (e, t, r) {
      if (r || t != null) {
        if (typeof e == "function" && t != null) {
          try {
            var n = e(t, r);
            if (ie(n)) {
              return it(n, t, r);
            }
          } catch (e) {}
        }
        if (Array.isArray(e) && e.length === 2) {
          var i;
          var a;
          var o = n7(e, 2);
          var l = o[0];
          var u = o[1];
          if (l === "auto") {
            if (t != null) {
              i = Math.min(...t);
            }
          } else if (ez(l)) {
            i = l;
          } else if (typeof l == "function") {
            try {
              if (t != null) {
                i = l(t == null ? undefined : t[0]);
              }
            } catch (e) {}
          } else if (typeof l == "string" && tn.test(l)) {
            var c = tn.exec(l);
            if (c == null || c[1] == null || t == null) {
              i = undefined;
            } else {
              var s = +c[1];
              i = t[0] - s;
            }
          } else {
            i = t == null ? undefined : t[0];
          }
          if (u === "auto") {
            if (t != null) {
              a = Math.max(...t);
            }
          } else if (ez(u)) {
            a = u;
          } else if (typeof u == "function") {
            try {
              if (t != null) {
                a = u(t == null ? undefined : t[1]);
              }
            } catch (e) {}
          } else if (typeof u == "string" && ti.test(u)) {
            var f = ti.exec(u);
            if (f == null || f[1] == null || t == null) {
              a = undefined;
            } else {
              var d = +f[1];
              a = t[1] + d;
            }
          } else {
            a = t == null ? undefined : t[1];
          }
          var p = [i, a];
          if (ie(p)) {
            if (t == null) {
              return p;
            } else {
              return it(p, t, r);
            }
          }
        }
      }
    }(t, c, e.allowDataOverflow);
    return s ?? (e.allowDataOverflow && c == null && u != null ? u : s);
  };
  var c3 = ea([cr], e => {
    if (e != null && e.type === "number" && "ticks" in e && e.ticks != null) {
      var t = cA(e.ticks);
      if (t.length !== 0) {
        return [Math.min(...t), Math.max(...t)];
      }
    }
  }, {
    memoizeOptions: {
      resultEqualityCheck: iQ
    }
  });
  var c6 = ea([cr, cN, cL, cR, cU, c2, n5, iG, c3], c5, {
    memoizeOptions: {
      resultEqualityCheck: iQ
    }
  });
  var c4 = [0, 1];
  var c8 = (e, t, r, n, i, a, o) => {
    if (e != null && r != null && r.length !== 0 || o !== undefined) {
      var l;
      var c = e.dataKey;
      var s = e.type;
      var f = e9(t, a);
      if (f && c == null) {
        return tA(0, (r == null ? undefined : r.length) ?? 0);
      } else if (s === "category") {
        l = n.map(c$).filter(e => e != null);
        if (f && (e.dataKey == null || e.allowDuplicatedCategory && eK(l))) {
          return tA(0, n.length);
        } else if (e.allowDuplicatedCategory) {
          return l;
        } else {
          return Array.from(new Set(l));
        }
      } else if (i !== "expand" || f) {
        return o;
      } else {
        return c4;
      }
    }
  };
  var c7 = ea([cr, n5, cm, cx, im, iG, c6], c8);
  var c9 = ea([cr, ci, ib], uZ);
  var se = (e, t, r) => {
    var n = t.niceTicks;
    if (n !== "none") {
      var i = cD(t);
      var a = Array.isArray(i) && (i[0] === "auto" || i[1] === "auto");
      if ((n === "snap125" || n === "adaptive") && t != null && t.tickCount && ie(e)) {
        if (a) {
          return ih(e, t.tickCount, t.allowDecimals, n);
        }
        if (t.type === "number") {
          return iy(e, t.tickCount, t.allowDecimals, n);
        }
      }
      if (n === "auto" && r === "linear" && t != null && t.tickCount) {
        if (a && ie(e)) {
          return ih(e, t.tickCount, t.allowDecimals, "adaptive");
        }
        if (t.type === "number" && ie(e)) {
          return iy(e, t.tickCount, t.allowDecimals, "adaptive");
        }
      }
    }
  };
  var st = ea([c7, cn, c9], se);
  var sr = (e, t, r, n) => {
    if (n !== "angleAxis" && (e == null ? undefined : e.type) === "number" && ie(t) && Array.isArray(r) && r.length > 0) {
      return [Math.min(t[0], r[0] ?? 0), Math.max(t[1], r[r.length - 1] ?? 0)];
    }
    return t;
  };
  var sn = ea([cr, c7, st, iG], sr);
  var si = ea(cx, cr, (e, t) => {
    if (t && t.type === "number") {
      var r = Infinity;
      var n = Array.from(cA(e.map(e => e.value))).sort((e, t) => e - t);
      var i = n[0];
      var a = n[n.length - 1];
      if (i == null || a == null) {
        return Infinity;
      }
      var o = a - i;
      if (o === 0) {
        return Infinity;
      }
      for (var l = 0; l < n.length - 1; l++) {
        var u = n[l];
        var c = n[l + 1];
        if (u != null && c != null) {
          r = Math.min(r, c - u);
        }
      }
      return r / o;
    }
  });
  var sa = ea(si, n5, iv, tb, (e, t, r, n, i) => i, (e, t, r, n, i) => {
    if (!eZ(e)) {
      return 0;
    }
    var a = t === "vertical" ? n.height : n.width;
    if (i === "gap") {
      return e * a / 2;
    }
    if (i === "no-gap") {
      var o = e$(r, e * a);
      var l = e * a / 2;
      return l - o - (l - o) / a * o;
    }
    return 0;
  });
  var so = ea(u4, (e, t, r) => {
    var n = u4(e, t);
    if (n == null || typeof n.padding != "string") {
      return 0;
    } else {
      return sa(e, "xAxis", t, r, n.padding);
    }
  }, (e, t) => {
    if (e == null) {
      return {
        left: 0,
        right: 0
      };
    }
    var i = e.padding;
    if (typeof i == "string") {
      return {
        left: t,
        right: t
      };
    } else {
      return {
        left: (i.left ?? 0) + t,
        right: (i.right ?? 0) + t
      };
    }
  });
  var sl = ea(u9, (e, t, r) => {
    var n = u9(e, t);
    if (n == null || typeof n.padding != "string") {
      return 0;
    } else {
      return sa(e, "yAxis", t, r, n.padding);
    }
  }, (e, t) => {
    if (e == null) {
      return {
        top: 0,
        bottom: 0
      };
    }
    var i = e.padding;
    if (typeof i == "string") {
      return {
        top: t,
        bottom: t
      };
    } else {
      return {
        top: (i.top ?? 0) + t,
        bottom: (i.bottom ?? 0) + t
      };
    }
  });
  var su = ea([tb, so, nM, nT, (e, t, r) => r], (e, t, r, n, i) => {
    var a = n.padding;
    if (i) {
      return [a.left, r.width - a.right];
    } else {
      return [e.left + t.left, e.left + e.width - t.right];
    }
  });
  var sc = ea([tb, n5, sl, nM, nT, (e, t, r) => r], (e, t, r, n, i, a) => {
    var o = i.padding;
    if (a) {
      return [n.height - o.bottom, o.top];
    } else if (t === "horizontal") {
      return [e.top + e.height - r.bottom, e.top + r.top];
    } else {
      return [e.top + r.top, e.top + e.height - r.bottom];
    }
  });
  var ss = (e, t, r, n) => {
    var i;
    switch (t) {
      case "xAxis":
        return su(e, r, n);
      case "yAxis":
        return sc(e, r, n);
      case "zAxis":
        if ((i = ct(e, r)) == null) {
          return undefined;
        } else {
          return i.range;
        }
      case "angleAxis":
        return iW(e);
      case "radiusAxis":
        return iV(e, r);
      default:
        return;
    }
  };
  var sf = ea([cr, ss], iM);
  var sd = ea([c9, sn], i5);
  var sp = ea([cr, c9, sd, sf], uX);
  var sh = (e, t, r, n) => {
    if (r != null && r.dataKey != null) {
      var i = r.type;
      var a = r.scale;
      if (e9(e, n) && (i === "number" || a !== "auto")) {
        return t.map(e => e.value);
      }
    }
  };
  var sy = ea([n5, cx, cn, iG], sh);
  var sv = ea([sp], i2);
  var sm = ea([sp], function (e) {
    if (e != null) {
      if ("invert" in e && typeof e.invert == "function") {
        return e.invert.bind(e);
      } else {
        return uQ(e, undefined);
      }
    }
  });
  var sg = ea([sp, cE], uQ);
  function sb(e, t) {
    if (e.id < t.id) {
      return -1;
    } else {
      return +(e.id > t.id);
    }
  }
  ea([cc, cz, iG], (e, t, r) => e.flatMap(e => t[e.id]).filter(Boolean).filter(e => cP(r, e)));
  var sx = (e, t) => t;
  var sw = (e, t, r) => r;
  var sO = ea(tp, sx, sw, (e, t, r) => e.filter(e => e.orientation === t).filter(e => e.mirror === r).sort(sb));
  var sA = ea(th, sx, sw, (e, t, r) => e.filter(e => e.orientation === t).filter(e => e.mirror === r).sort(sb));
  var sS = (e, t) => {
    var r = typeof t.height == "number" ? t.height : 30;
    return {
      width: e.width,
      height: r
    };
  };
  var sE = ea(tb, u4, sS);
  var sP = ea(ts, tb, sO, sx, sw, (e, t, r, n, i) => {
    var a;
    var o = {};
    r.forEach(r => {
      var l = sS(t, r);
      if (a == null) {
        a = ((e, t, r) => {
          switch (t) {
            case "top":
              return e.top;
            case "bottom":
              return r - e.bottom;
            default:
              return 0;
          }
        })(t, n, e);
      }
      var u = n === "top" && !i || n === "bottom" && i;
      o[r.id] = a - Number(u) * l.height;
      a += (u ? -1 : 1) * l.height;
    });
    return o;
  });
  var sj = ea(tc, tb, sA, sx, sw, (e, t, r, n, i) => {
    var a;
    var o = {};
    r.forEach(r => {
      var l = {
        width: typeof r.width == "number" ? r.width : 60,
        height: t.height
      };
      if (a == null) {
        a = ((e, t, r) => {
          switch (t) {
            case "left":
              return e.left;
            case "right":
              return r - e.right;
            default:
              return 0;
          }
        })(t, n, e);
      }
      var u = n === "left" && !i || n === "right" && i;
      o[r.id] = a - Number(u) * l.width;
      a += (u ? -1 : 1) * l.width;
    });
    return o;
  });
  var sk = ea([tb, u4, (e, t) => {
    var r = u4(e, t);
    if (r != null) {
      return sP(e, r.orientation, r.mirror);
    }
  }, (e, t) => t], (e, t, r, n) => {
    if (t != null) {
      var i = r == null ? undefined : r[n];
      if (i == null) {
        return {
          x: e.left,
          y: 0
        };
      } else {
        return {
          x: e.left,
          y: i
        };
      }
    }
  });
  var sI = ea([tb, u9, (e, t) => {
    var r = u9(e, t);
    if (r != null) {
      return sj(e, r.orientation, r.mirror);
    }
  }, (e, t) => t], (e, t, r, n) => {
    if (t != null) {
      var i = r == null ? undefined : r[n];
      if (i == null) {
        return {
          x: 0,
          y: e.top
        };
      } else {
        return {
          x: i,
          y: e.top
        };
      }
    }
  });
  var sC = ea(tb, u9, (e, t) => ({
    width: typeof t.width == "number" ? t.width : 60,
    height: e.height
  }));
  var sT = (e, t, r, n) => {
    if (r != null) {
      var i = r.allowDuplicatedCategory;
      var a = r.type;
      var o = r.dataKey;
      var l = e9(e, n);
      var u = t.map(e => e.value);
      var c = u.filter(e => e != null);
      if (o && l && a === "category" && i && eK(c)) {
        return u;
      }
    }
  };
  var sM = ea([n5, cx, cr, iG], sT);
  var s_ = ea([n5, (e, t, r) => {
    switch (t) {
      case "xAxis":
        return u4(e, r);
      case "yAxis":
        return u9(e, r);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  }, c9, sv, sM, sy, ss, st, iG], (e, t, r, n, i, a, o, l, u) => {
    if (t != null) {
      var c = e9(e, u);
      return {
        angle: t.angle,
        interval: t.interval,
        minTickGap: t.minTickGap,
        orientation: t.orientation,
        tick: t.tick,
        tickCount: t.tickCount,
        tickFormatter: t.tickFormatter,
        ticks: t.ticks,
        type: t.type,
        unit: t.unit,
        axisType: u,
        categoricalDomain: a,
        duplicateDomain: i,
        isCategorical: c,
        niceTicks: l,
        range: o,
        realScaleType: r,
        scale: n
      };
    }
  });
  var sD = ea([n5, cn, c9, sv, st, ss, sM, sy, iG], (e, t, r, n, i, a, o, l, u) => {
    if (t != null && n != null) {
      var c = e9(e, u);
      var s = t.type;
      var f = t.ticks;
      var d = t.tickCount;
      var p = r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2;
      var h = s === "category" && n.bandwidth ? n.bandwidth() / p : 0;
      h = u === "angleAxis" && a != null && a.length >= 2 ? eN(a[0] - a[1]) * 2 * h : h;
      var y = f || i;
      if (y) {
        return y.map((e, t) => {
          var r = o ? o.indexOf(e) : e;
          var i = n.map(r);
          if (eZ(i)) {
            return {
              index: t,
              coordinate: i + h,
              value: e,
              offset: h
            };
          } else {
            return null;
          }
        }).filter(eY);
      } else if (c && l) {
        return l.map((e, t) => {
          var r = n.map(e);
          if (eZ(r)) {
            return {
              coordinate: r + h,
              value: e,
              index: t,
              offset: h
            };
          } else {
            return null;
          }
        }).filter(eY);
      } else if (n.ticks) {
        return n.ticks(d).map((e, t) => {
          var r = n.map(e);
          if (eZ(r)) {
            return {
              coordinate: r + h,
              value: e,
              index: t,
              offset: h
            };
          } else {
            return null;
          }
        }).filter(eY);
      } else {
        return n.domain().map((e, t) => {
          var r = n.map(e);
          if (eZ(r)) {
            return {
              coordinate: r + h,
              value: o ? o[e] : e,
              index: t,
              offset: h
            };
          } else {
            return null;
          }
        }).filter(eY);
      }
    }
  });
  var sN = ea([n5, cn, sv, ss, sM, sy, iG], (e, t, r, n, i, a, o) => {
    if (t != null && r != null && n != null && n[0] !== n[1]) {
      var l = e9(e, o);
      var u = t.tickCount;
      var c = 0;
      c = o === "angleAxis" && (n == null ? undefined : n.length) >= 2 ? eN(n[0] - n[1]) * 2 * c : c;
      if (l && a) {
        return a.map((e, t) => {
          var n = r.map(e);
          if (eZ(n)) {
            return {
              coordinate: n + c,
              value: e,
              index: t,
              offset: c
            };
          } else {
            return null;
          }
        }).filter(eY);
      } else if (r.ticks) {
        return r.ticks(u).map((e, t) => {
          var n = r.map(e);
          if (eZ(n)) {
            return {
              coordinate: n + c,
              value: e,
              index: t,
              offset: c
            };
          } else {
            return null;
          }
        }).filter(eY);
      } else {
        return r.domain().map((e, t) => {
          var n = r.map(e);
          if (eZ(n)) {
            return {
              coordinate: n + c,
              value: i ? i[e] : e,
              index: t,
              offset: c
            };
          } else {
            return null;
          }
        }).filter(eY);
      }
    }
  });
  var sL = ea(cr, sv, (e, t) => {
    if (e != null && t != null) {
      return u0(u0({}, e), {}, {
        scale: t
      });
    }
  });
  var sR = ea([cr, c9, c7, sf], uX);
  var sz = ea([sR], i2);
  ea((e, t, r) => ct(e, r), sz, (e, t) => {
    if (e != null && t != null) {
      return u0(u0({}, e), {}, {
        scale: t
      });
    }
  });
  var sB = ea([n5, tp, th], (e, t, r) => {
    switch (e) {
      case "horizontal":
        if (t.some(e => e.reversed)) {
          return "right-to-left";
        } else {
          return "left-to-right";
        }
      case "vertical":
        if (r.some(e => e.reversed)) {
          return "bottom-to-top";
        } else {
          return "top-to-bottom";
        }
      case "centric":
      case "radial":
        return "left-to-right";
      default:
        return;
    }
  });
  var sF = (e, t, r) => {
    var n;
    if ((n = e.renderedTicks[t]) == null) {
      return undefined;
    } else {
      return n[r];
    }
  };
  var sU = ea([sF], e => {
    if (e && e.length !== 0) {
      return t => {
        var r;
        var n = Infinity;
        var i = e[0];
        for (var a of e) {
          var o = Math.abs(a.coordinate - t);
          if (o < n) {
            n = o;
            i = a;
          }
        }
        if ((r = i) == null) {
          return undefined;
        } else {
          return r.value;
        }
      };
    }
  });
  e.s(["combineAllAppliedValues", 0, cb, "combineAppliedValues", 0, cg, "combineAreasDomain", 0, cQ, "combineAxisDomain", 0, c8, "combineAxisDomainWithNiceTicks", 0, sr, "combineCategoricalDomain", 0, sh, "combineDisplayedData", 0, cv, "combineDomainOfAllAppliedNumericalValuesIncludingErrorValues", 0, cF, "combineDomainOfStackGroups", 0, cM, "combineDotsDomain", 0, cX, "combineDuplicateDomain", 0, sT, "combineGraphicalItemsData", 0, cp, "combineGraphicalItemsSettings", 0, cu, "combineLinesDomain", 0, c0, "combineNiceTicks", 0, se, "combineNumericalDomain", 0, c5, "combineStackGroups", 0, cC, "filterGraphicalNotStackedItems", 0, cf, "filterReferenceElements", 0, cW, "getDomainDefinition", 0, cD, "implicitXAxis", 0, u3, "implicitYAxis", 0, u8, "itemAxisPredicate", 0, ca, "mergeDomains", 0, cB, "selectAllErrorBarSettings", 0, cz, "selectAxisDomain", 0, c7, "selectAxisInverseDataSnapScale", 0, sg, "selectAxisInverseScale", 0, sm, "selectAxisInverseTickSnapScale", 0, sU, "selectAxisPropsNeededForCartesianGridTicksGenerator", 0, s_, "selectAxisRange", 0, ss, "selectAxisScale", 0, sv, "selectAxisWithScale", 0, sL, "selectBaseAxis", 0, cr, "selectChartDirection", 0, sB, "selectDomainDefinition", 0, cN, "selectDomainFromUserPreference", 0, cL, "selectHasBar", 0, ci, "selectRealScaleType", 0, c9, "selectReferenceAreas", 0, cH, "selectReferenceDots", 0, cK, "selectReferenceLines", 0, cY, "selectRenderableAxisSettings", 0, cn, "selectRenderedTicksOfAxis", 0, sF, "selectStackGroups", 0, cT, "selectTicksOfAxis", 0, sD, "selectTicksOfGraphicalItem", 0, sN, "selectTooltipAxis", 0, cj, "selectTooltipAxisDataKey", 0, ck, "selectUnfilteredCartesianItems", 0, co, "selectXAxisPosition", 0, sk, "selectXAxisRange", 0, su, "selectXAxisSettings", 0, u4, "selectXAxisSettingsNoDefaults", 0, u6, "selectXAxisSize", 0, sE, "selectYAxisPosition", 0, sI, "selectYAxisRange", 0, sc, "selectYAxisSettings", 0, u9, "selectYAxisSettingsNoDefaults", 0, u7, "selectYAxisSize", 0, sC], 6588);
  var s$ = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
  function sK(e) {
    return typeof e == "string" && s$.includes(e);
  }
  var sW = new Set(["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"]);
  function sV(e) {
    return typeof e == "string" && sW.has(e);
  }
  function sH(e) {
    return typeof e == "string" && e.startsWith("data-");
  }
  function sG(e) {
    if (typeof e != "object" || e === null) {
      return {};
    }
    var t = {};
    for (var r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r) && (sV(r) || sH(r))) {
        t[r] = e[r];
      }
    }
    return t;
  }
  function sY(e) {
    if (e == null) {
      return null;
    } else if ((0, tS.isValidElement)(e) && typeof e.props == "object" && e.props !== null) {
      return sG(e.props);
    } else if (typeof e != "object" || Array.isArray(e)) {
      return null;
    } else {
      return sG(e);
    }
  }
  function sq(e) {
    var t = {};
    for (var r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r) && (sV(r) || sH(r) || sK(r))) {
        t[r] = e[r];
      }
    }
    return t;
  }
  e.s(["isDataAttribute", 0, sH, "isSvgElementPropKey", 0, sV, "svgPropertiesNoEvents", 0, sG, "svgPropertiesNoEventsFromUnknown", 0, sY], 58657);
  e.s(["svgPropertiesAndEvents", 0, sq, "svgPropertiesAndEventsFromUnknown", 0, function (e) {
    if (e == null) {
      return null;
    } else if ((0, tS.isValidElement)(e)) {
      return sq(e.props);
    } else if (typeof e != "object" || Array.isArray(e)) {
      return null;
    } else {
      return sq(e);
    }
  }], 41364);
  var sX = ["children", "className"];
  function sZ() {
    return (sZ = Object.assign.bind()).apply(null, arguments);
  }
  var sQ = tS.forwardRef((e, t) => {
    var r = e.children;
    var n = e.className;
    var i = function (e, t) {
      if (e == null) {
        return {};
      }
      var r;
      var n;
      var i = function (e, t) {
        if (e == null) {
          return {};
        }
        var r = {};
        for (var n in e) {
          if ({}.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) !== -1) {
              continue;
            }
            r[n] = e[n];
          }
        }
        return r;
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) {
          r = a[n];
          if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
            i[r] = e[r];
          }
        }
      }
      return i;
    }(e, sX);
    var a = u("recharts-layer", n);
    return tS.createElement("g", sZ({
      className: a
    }, sq(i), {
      ref: t
    }), r);
  });
  function sJ(e) {
    this._context = e;
  }
  function s0(e) {
    return new sJ(e);
  }
  e.s(["Layer", 0, sQ], 53108);
  sJ.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      if (this._line || this._line !== 0 && this._point === 1) {
        this._context.closePath();
      }
      this._line = 1 - this._line;
    },
    point: function (e, t) {
      e *= 1;
      t *= 1;
      switch (this._point) {
        case 0:
          this._point = 1;
          if (this._line) {
            this._context.lineTo(e, t);
          } else {
            this._context.moveTo(e, t);
          }
          break;
        case 1:
          this._point = 2;
        default:
          this._context.lineTo(e, t);
      }
    }
  };
  let s1 = Math.PI;
  let s2 = s1 * 2;
  let s5 = s2 - 0.000001;
  function s3(e) {
    this._ += e[0];
    for (let t = 1, r = e.length; t < r; ++t) {
      this._ += arguments[t] + e[t];
    }
  }
  class s6 {
    constructor(e) {
      this._x0 = this._y0 = this._x1 = this._y1 = null;
      this._ = "";
      this._append = e == null ? s3 : function (e) {
        let t = Math.floor(e);
        if (!(t >= 0)) {
          throw Error(`invalid digits: ${e}`);
        }
        if (t > 15) {
          return s3;
        }
        let r = 10 ** t;
        return function (e) {
          this._ += e[0];
          for (let t = 1, n = e.length; t < n; ++t) {
            this._ += Math.round(arguments[t] * r) / r + e[t];
          }
        };
      }(e);
    }
    moveTo(e, t) {
      this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}`;
    }
    closePath() {
      if (this._x1 !== null) {
        this._x1 = this._x0;
        this._y1 = this._y0;
        this._append`Z`;
      }
    }
    lineTo(e, t) {
      this._append`L${this._x1 = +e},${this._y1 = +t}`;
    }
    quadraticCurveTo(e, t, r, n) {
      this._append`Q${+e},${+t},${this._x1 = +r},${this._y1 = +n}`;
    }
    bezierCurveTo(e, t, r, n, i, a) {
      this._append`C${+e},${+t},${+r},${+n},${this._x1 = +i},${this._y1 = +a}`;
    }
    arcTo(e, t, r, n, i) {
      e *= 1;
      t *= 1;
      r *= 1;
      n *= 1;
      if ((i *= 1) < 0) {
        throw Error(`negative radius: ${i}`);
      }
      let a = this._x1;
      let o = this._y1;
      let l = r - e;
      let u = n - t;
      let c = a - e;
      let s = o - t;
      let f = c * c + s * s;
      if (this._x1 === null) {
        this._append`M${this._x1 = e},${this._y1 = t}`;
      } else if (f > 0.000001) {
        if (Math.abs(s * l - u * c) > 0.000001 && i) {
          let d = r - a;
          let p = n - o;
          let h = l * l + u * u;
          let y = Math.sqrt(h);
          let v = Math.sqrt(f);
          let m = i * Math.tan((s1 - Math.acos((h + f - (d * d + p * p)) / (y * 2 * v))) / 2);
          let g = m / v;
          let b = m / y;
          if (Math.abs(g - 1) > 0.000001) {
            this._append`L${e + g * c},${t + g * s}`;
          }
          this._append`A${i},${i},0,0,${+(s * d > c * p)},${this._x1 = e + b * l},${this._y1 = t + b * u}`;
        } else {
          this._append`L${this._x1 = e},${this._y1 = t}`;
        }
      }
    }
    arc(e, t, r, n, i, a) {
      e *= 1;
      t *= 1;
      r *= 1;
      a = !!a;
      if (r < 0) {
        throw Error(`negative radius: ${r}`);
      }
      let o = r * Math.cos(n);
      let l = r * Math.sin(n);
      let u = e + o;
      let c = t + l;
      let s = a ^ 1;
      let f = a ? n - i : i - n;
      if (this._x1 === null) {
        this._append`M${u},${c}`;
      } else if (Math.abs(this._x1 - u) > 0.000001 || Math.abs(this._y1 - c) > 0.000001) {
        this._append`L${u},${c}`;
      }
      if (r) {
        if (f < 0) {
          f = f % s2 + s2;
        }
        if (f > s5) {
          this._append`A${r},${r},0,1,${s},${e - o},${t - l}A${r},${r},0,1,${s},${this._x1 = u},${this._y1 = c}`;
        } else if (f > 0.000001) {
          this._append`A${r},${r},0,${+(f >= s1)},${s},${this._x1 = e + r * Math.cos(i)},${this._y1 = t + r * Math.sin(i)}`;
        }
      }
    }
    rect(e, t, r, n) {
      this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}h${r *= 1}v${+n}h${-r}Z`;
    }
    toString() {
      return this._;
    }
  }
  function s4(e) {
    let t = 3;
    e.digits = function (r) {
      if (!arguments.length) {
        return t;
      }
      if (r == null) {
        t = null;
      } else {
        let e = Math.floor(r);
        if (!(e >= 0)) {
          throw RangeError(`invalid digits: ${r}`);
        }
        t = e;
      }
      return e;
    };
    return () => new s6(t);
  }
  function s8(e) {
    return e[0];
  }
  function s7(e) {
    return e[1];
  }
  function s9(e, t) {
    var r = ek(true);
    var n = null;
    var i = s0;
    var a = null;
    var o = s4(l);
    function l(l) {
      var u;
      var c;
      var s;
      var f = (l = ej(l)).length;
      var d = false;
      if (n == null) {
        a = i(s = o());
      }
      u = 0;
      for (; u <= f; ++u) {
        if ((!(u < f) || !r(c = l[u], u, l)) === d) {
          if (d = !d) {
            a.lineStart();
          } else {
            a.lineEnd();
          }
        }
        if (d) {
          a.point(+e(c, u, l), +t(c, u, l));
        }
      }
      if (s) {
        a = null;
        return s + "" || null;
      }
    }
    e = typeof e == "function" ? e : e === undefined ? s8 : ek(e);
    t = typeof t == "function" ? t : t === undefined ? s7 : ek(t);
    l.x = function (t) {
      if (arguments.length) {
        e = typeof t == "function" ? t : ek(+t);
        return l;
      } else {
        return e;
      }
    };
    l.y = function (e) {
      if (arguments.length) {
        t = typeof e == "function" ? e : ek(+e);
        return l;
      } else {
        return t;
      }
    };
    l.defined = function (e) {
      if (arguments.length) {
        r = typeof e == "function" ? e : ek(!!e);
        return l;
      } else {
        return r;
      }
    };
    l.curve = function (e) {
      if (arguments.length) {
        i = e;
        if (n != null) {
          a = i(n);
        }
        return l;
      } else {
        return i;
      }
    };
    l.context = function (e) {
      if (arguments.length) {
        if (e == null) {
          n = a = null;
        } else {
          a = i(n = e);
        }
        return l;
      } else {
        return n;
      }
    };
    return l;
  }
  function fe(e, t, r) {
    var n = null;
    var i = ek(true);
    var a = null;
    var o = s0;
    var l = null;
    var u = s4(c);
    function c(c) {
      var s;
      var f;
      var d;
      var p;
      var h;
      var y = (c = ej(c)).length;
      var v = false;
      var m = Array(y);
      var g = Array(y);
      if (a == null) {
        l = o(h = u());
      }
      s = 0;
      for (; s <= y; ++s) {
        if ((!(s < y) || !i(p = c[s], s, c)) === v) {
          if (v = !v) {
            f = s;
            l.areaStart();
            l.lineStart();
          } else {
            l.lineEnd();
            l.lineStart();
            d = s - 1;
            for (; d >= f; --d) {
              l.point(m[d], g[d]);
            }
            l.lineEnd();
            l.areaEnd();
          }
        }
        if (v) {
          m[s] = +e(p, s, c);
          g[s] = +t(p, s, c);
          l.point(n ? +n(p, s, c) : m[s], r ? +r(p, s, c) : g[s]);
        }
      }
      if (h) {
        l = null;
        return h + "" || null;
      }
    }
    function s() {
      return s9().defined(i).curve(o).context(a);
    }
    e = typeof e == "function" ? e : e === undefined ? s8 : ek(+e);
    t = typeof t == "function" ? t : t === undefined ? ek(0) : ek(+t);
    r = typeof r == "function" ? r : r === undefined ? s7 : ek(+r);
    c.x = function (t) {
      if (arguments.length) {
        e = typeof t == "function" ? t : ek(+t);
        n = null;
        return c;
      } else {
        return e;
      }
    };
    c.x0 = function (t) {
      if (arguments.length) {
        e = typeof t == "function" ? t : ek(+t);
        return c;
      } else {
        return e;
      }
    };
    c.x1 = function (e) {
      if (arguments.length) {
        n = e == null ? null : typeof e == "function" ? e : ek(+e);
        return c;
      } else {
        return n;
      }
    };
    c.y = function (e) {
      if (arguments.length) {
        t = typeof e == "function" ? e : ek(+e);
        r = null;
        return c;
      } else {
        return t;
      }
    };
    c.y0 = function (e) {
      if (arguments.length) {
        t = typeof e == "function" ? e : ek(+e);
        return c;
      } else {
        return t;
      }
    };
    c.y1 = function (e) {
      if (arguments.length) {
        r = e == null ? null : typeof e == "function" ? e : ek(+e);
        return c;
      } else {
        return r;
      }
    };
    c.lineX0 = c.lineY0 = function () {
      return s().x(e).y(t);
    };
    c.lineY1 = function () {
      return s().x(e).y(r);
    };
    c.lineX1 = function () {
      return s().x(n).y(t);
    };
    c.defined = function (e) {
      if (arguments.length) {
        i = typeof e == "function" ? e : ek(!!e);
        return c;
      } else {
        return i;
      }
    };
    c.curve = function (e) {
      if (arguments.length) {
        o = e;
        if (a != null) {
          l = o(a);
        }
        return c;
      } else {
        return o;
      }
    };
    c.context = function (e) {
      if (arguments.length) {
        if (e == null) {
          a = l = null;
        } else {
          l = o(a = e);
        }
        return c;
      } else {
        return a;
      }
    };
    return c;
  }
  function ft(e, t, r) {
    e._context.bezierCurveTo((e._x0 * 2 + e._x1) / 3, (e._y0 * 2 + e._y1) / 3, (e._x0 + e._x1 * 2) / 3, (e._y0 + e._y1 * 2) / 3, (e._x0 + e._x1 * 4 + t) / 6, (e._y0 + e._y1 * 4 + r) / 6);
  }
  function fr(e) {
    this._context = e;
  }
  function fn() {}
  function fi(e) {
    this._context = e;
  }
  function fa(e) {
    this._context = e;
  }
  s6.prototype;
  e.s(["withPath", 0, s4], 92485);
  fr.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 3:
          ft(this, this._x1, this._y1);
        case 2:
          this._context.lineTo(this._x1, this._y1);
      }
      if (this._line || this._line !== 0 && this._point === 1) {
        this._context.closePath();
      }
      this._line = 1 - this._line;
    },
    point: function (e, t) {
      e *= 1;
      t *= 1;
      switch (this._point) {
        case 0:
          this._point = 1;
          if (this._line) {
            this._context.lineTo(e, t);
          } else {
            this._context.moveTo(e, t);
          }
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          this._context.lineTo((this._x0 * 5 + this._x1) / 6, (this._y0 * 5 + this._y1) / 6);
        default:
          ft(this, e, t);
      }
      this._x0 = this._x1;
      this._x1 = e;
      this._y0 = this._y1;
      this._y1 = t;
    }
  };
  fi.prototype = {
    areaStart: fn,
    areaEnd: fn,
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x2, this._y2);
          this._context.closePath();
          break;
        case 2:
          this._context.moveTo((this._x2 + this._x3 * 2) / 3, (this._y2 + this._y3 * 2) / 3);
          this._context.lineTo((this._x3 + this._x2 * 2) / 3, (this._y3 + this._y2 * 2) / 3);
          this._context.closePath();
          break;
        case 3:
          this.point(this._x2, this._y2);
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
      }
    },
    point: function (e, t) {
      e *= 1;
      t *= 1;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._x2 = e;
          this._y2 = t;
          break;
        case 1:
          this._point = 2;
          this._x3 = e;
          this._y3 = t;
          break;
        case 2:
          this._point = 3;
          this._x4 = e;
          this._y4 = t;
          this._context.moveTo((this._x0 + this._x1 * 4 + e) / 6, (this._y0 + this._y1 * 4 + t) / 6);
          break;
        default:
          ft(this, e, t);
      }
      this._x0 = this._x1;
      this._x1 = e;
      this._y0 = this._y1;
      this._y1 = t;
    }
  };
  fa.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      if (this._line || this._line !== 0 && this._point === 3) {
        this._context.closePath();
      }
      this._line = 1 - this._line;
    },
    point: function (e, t) {
      e *= 1;
      t *= 1;
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          var r = (this._x0 + this._x1 * 4 + e) / 6;
          var n = (this._y0 + this._y1 * 4 + t) / 6;
          if (this._line) {
            this._context.lineTo(r, n);
          } else {
            this._context.moveTo(r, n);
          }
          break;
        case 3:
          this._point = 4;
        default:
          ft(this, e, t);
      }
      this._x0 = this._x1;
      this._x1 = e;
      this._y0 = this._y1;
      this._y1 = t;
    }
  };
  class fo {
    constructor(e, t) {
      this._context = e;
      this._x = t;
    }
    areaStart() {
      this._line = 0;
    }
    areaEnd() {
      this._line = NaN;
    }
    lineStart() {
      this._point = 0;
    }
    lineEnd() {
      if (this._line || this._line !== 0 && this._point === 1) {
        this._context.closePath();
      }
      this._line = 1 - this._line;
    }
    point(e, t) {
      e *= 1;
      t *= 1;
      switch (this._point) {
        case 0:
          this._point = 1;
          if (this._line) {
            this._context.lineTo(e, t);
          } else {
            this._context.moveTo(e, t);
          }
          break;
        case 1:
          this._point = 2;
        default:
          if (this._x) {
            this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, t, e, t);
          } else {
            this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + t) / 2, e, this._y0, e, t);
          }
      }
      this._x0 = e;
      this._y0 = t;
    }
  }
  function fl(e) {
    this._context = e;
  }
  fl.prototype = {
    areaStart: fn,
    areaEnd: fn,
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      if (this._point) {
        this._context.closePath();
      }
    },
    point: function (e, t) {
      e *= 1;
      t *= 1;
      if (this._point) {
        this._context.lineTo(e, t);
      } else {
        this._point = 1;
        this._context.moveTo(e, t);
      }
    }
  };
  function fu(e, t, r) {
    var n = e._x1 - e._x0;
    var i = t - e._x1;
    var a = (e._y1 - e._y0) / (n || i < 0 && -0);
    var o = (r - e._y1) / (i || n < 0 && -0);
    return ((a < 0 ? -1 : 1) + (o < 0 ? -1 : 1)) * Math.min(Math.abs(a), Math.abs(o), Math.abs((a * i + o * n) / (n + i)) * 0.5) || 0;
  }
  function fc(e, t) {
    var r = e._x1 - e._x0;
    if (r) {
      return ((e._y1 - e._y0) * 3 / r - t) / 2;
    } else {
      return t;
    }
  }
  function fs(e, t, r) {
    var n = e._x0;
    var i = e._y0;
    var a = e._x1;
    var o = e._y1;
    var l = (a - n) / 3;
    e._context.bezierCurveTo(n + l, i + l * t, a - l, o - l * r, a, o);
  }
  function ff(e) {
    this._context = e;
  }
  function fd(e) {
    this._context = new fp(e);
  }
  function fp(e) {
    this._context = e;
  }
  function fh(e) {
    this._context = e;
  }
  function fy(e) {
    var t;
    var r;
    var n = e.length - 1;
    var i = Array(n);
    var a = Array(n);
    var o = Array(n);
    i[0] = 0;
    a[0] = 2;
    o[0] = e[0] + e[1] * 2;
    t = 1;
    for (; t < n - 1; ++t) {
      i[t] = 1;
      a[t] = 4;
      o[t] = e[t] * 4 + e[t + 1] * 2;
    }
    i[n - 1] = 2;
    a[n - 1] = 7;
    o[n - 1] = e[n - 1] * 8 + e[n];
    t = 1;
    for (; t < n; ++t) {
      r = i[t] / a[t - 1];
      a[t] -= r;
      o[t] -= r * o[t - 1];
    }
    i[n - 1] = o[n - 1] / a[n - 1];
    t = n - 2;
    for (; t >= 0; --t) {
      i[t] = (o[t] - i[t + 1]) / a[t];
    }
    a[n - 1] = (e[n] + i[n - 1]) / 2;
    t = 0;
    for (; t < n - 1; ++t) {
      a[t] = e[t + 1] * 2 - i[t + 1];
    }
    return [i, a];
  }
  function fv(e, t) {
    this._context = e;
    this._t = t;
  }
  ff.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
        case 3:
          fs(this, this._t0, fc(this, this._t0));
      }
      if (this._line || this._line !== 0 && this._point === 1) {
        this._context.closePath();
      }
      this._line = 1 - this._line;
    },
    point: function (e, t) {
      var r = NaN;
      t *= 1;
      if ((e *= 1) !== this._x1 || t !== this._y1) {
        switch (this._point) {
          case 0:
            this._point = 1;
            if (this._line) {
              this._context.lineTo(e, t);
            } else {
              this._context.moveTo(e, t);
            }
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            fs(this, fc(this, r = fu(this, e, t)), r);
            break;
          default:
            fs(this, this._t0, r = fu(this, e, t));
        }
        this._x0 = this._x1;
        this._x1 = e;
        this._y0 = this._y1;
        this._y1 = t;
        this._t0 = r;
      }
    }
  };
  (fd.prototype = Object.create(ff.prototype)).point = function (e, t) {
    ff.prototype.point.call(this, t, e);
  };
  fp.prototype = {
    moveTo: function (e, t) {
      this._context.moveTo(t, e);
    },
    closePath: function () {
      this._context.closePath();
    },
    lineTo: function (e, t) {
      this._context.lineTo(t, e);
    },
    bezierCurveTo: function (e, t, r, n, i, a) {
      this._context.bezierCurveTo(t, e, n, r, a, i);
    }
  };
  fh.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x = [];
      this._y = [];
    },
    lineEnd: function () {
      var e = this._x;
      var t = this._y;
      var r = e.length;
      if (r) {
        if (this._line) {
          this._context.lineTo(e[0], t[0]);
        } else {
          this._context.moveTo(e[0], t[0]);
        }
        if (r === 2) {
          this._context.lineTo(e[1], t[1]);
        } else {
          var n = fy(e);
          var i = fy(t);
          for (var a = 0, o = 1; o < r; ++a, ++o) {
            this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
          }
        }
      }
      if (this._line || this._line !== 0 && r === 1) {
        this._context.closePath();
      }
      this._line = 1 - this._line;
      this._x = this._y = null;
    },
    point: function (e, t) {
      this._x.push(+e);
      this._y.push(+t);
    }
  };
  fv.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x = this._y = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      if (this._t > 0 && this._t < 1 && this._point === 2) {
        this._context.lineTo(this._x, this._y);
      }
      if (this._line || this._line !== 0 && this._point === 1) {
        this._context.closePath();
      }
      if (this._line >= 0) {
        this._t = 1 - this._t;
        this._line = 1 - this._line;
      }
    },
    point: function (e, t) {
      e *= 1;
      t *= 1;
      switch (this._point) {
        case 0:
          this._point = 1;
          if (this._line) {
            this._context.lineTo(e, t);
          } else {
            this._context.moveTo(e, t);
          }
          break;
        case 1:
          this._point = 2;
        default:
          if (this._t <= 0) {
            this._context.lineTo(this._x, t);
            this._context.lineTo(e, t);
          } else {
            var r = this._x * (1 - this._t) + e * this._t;
            this._context.lineTo(r, this._y);
            this._context.lineTo(r, t);
          }
      }
      this._x = e;
      this._y = t;
    }
  };
  var fm = e => "radius" in e && "startAngle" in e && "endAngle" in e;
  var fg = (e, t) => {
    if (!e || typeof e == "function" || typeof e == "boolean") {
      return null;
    }
    var r = e;
    if ((0, tS.isValidElement)(e)) {
      r = e.props;
    }
    if (typeof r != "object" && typeof r != "function") {
      return null;
    }
    var n = {};
    Object.keys(r).forEach(e => {
      if (sK(e) && typeof r[e] == "function") {
        n[e] = t || (t => r[e](r, t));
      }
    });
    return n;
  };
  function fb() {
    return (fb = Object.assign.bind()).apply(null, arguments);
  }
  function fx(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function fw(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        fx(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        fx(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  e.s(["adaptEventHandlers", 0, fg, "adaptEventsOfChild", 0, (e, t, r) => {
    if (e === null || typeof e != "object" && typeof e != "function") {
      return null;
    }
    var n = null;
    Object.keys(e).forEach(i => {
      var a = e[i];
      if (sK(i) && typeof a == "function") {
        n ||= {};
        n[i] = e => {
          a(t, r, e);
          return null;
        };
      }
    });
    return n;
  }, "isPolarCoordinate", 0, fm], 43287);
  var fO = {
    curveBasisClosed: function (e) {
      return new fi(e);
    },
    curveBasisOpen: function (e) {
      return new fa(e);
    },
    curveBasis: function (e) {
      return new fr(e);
    },
    curveBumpX: function (e) {
      return new fo(e, true);
    },
    curveBumpY: function (e) {
      return new fo(e, false);
    },
    curveLinearClosed: function (e) {
      return new fl(e);
    },
    curveLinear: s0,
    curveMonotoneX: function (e) {
      return new ff(e);
    },
    curveMonotoneY: function (e) {
      return new fd(e);
    },
    curveNatural: function (e) {
      return new fh(e);
    },
    curveStep: function (e) {
      return new fv(e, 0.5);
    },
    curveStepAfter: function (e) {
      return new fv(e, 1);
    },
    curveStepBefore: function (e) {
      return new fv(e, 0);
    }
  };
  var fA = e => eZ(e.x) && eZ(e.y);
  var fS = e => e.base != null && fA(e.base) && fA(e);
  var fE = e => e.x;
  var fP = e => e.y;
  var fj = e => {
    var t = e.className;
    var r = e.points;
    var n = e.path;
    var i = e.pathRef;
    var a = n3();
    if ((!r || !r.length) && !n) {
      return null;
    }
    var o = {
      type: e.type,
      points: e.points,
      baseLine: e.baseLine,
      layout: e.layout || a,
      connectNulls: e.connectNulls
    };
    var l = r && r.length ? (e => {
      var t = e.type;
      var r = e.points;
      var n = r === undefined ? [] : r;
      var i = e.baseLine;
      var a = e.layout;
      var o = e.connectNulls;
      var l = o !== undefined && o;
      var u = ((e, t) => {
        if (typeof e == "function") {
          return e;
        }
        var r = `curve${eG(e)}`;
        if ((r === "curveMonotone" || r === "curveBump") && t) {
          var n = fO[`${r}${t === "vertical" ? "Y" : "X"}`];
          if (n) {
            return n;
          }
        }
        return fO[r] || s0;
      })(t === undefined ? "linear" : t, a);
      var c = l ? n.filter(fA) : n;
      if (Array.isArray(i)) {
        var s = n.map((e, t) => fw(fw({}, e), {}, {
          base: i[t]
        }));
        return (a === "vertical" ? fe().y(fP).x1(fE).x0(e => e.base.x) : fe().x(fE).y1(fP).y0(e => e.base.y)).defined(fS).curve(u)(l ? s.filter(fS) : s);
      }
      return (a === "vertical" && ez(i) ? fe().y(fP).x1(fE).x0(i) : ez(i) ? fe().x(fE).y1(fP).y0(i) : s9().x(fE).y(fP)).defined(fA).curve(u)(c);
    })(o) : n;
    return tS.createElement("path", fb({}, sG(e), fg(e), {
      className: u("recharts-curve", t),
      d: l === null ? undefined : l,
      ref: i
    }));
  };
  function fk(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function fI(e, t) {
    var r = function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] ?? {};
        if (t % 2) {
          fk(Object(r), true).forEach(function (t) {
            var n;
            var i;
            var a;
            n = e;
            i = t;
            a = r[t];
            if ((i = function (e) {
              var t = function (e, t) {
                if (typeof e != "object" || !e) {
                  return e;
                }
                var r = e[Symbol.toPrimitive];
                if (r !== undefined) {
                  var n = r.call(e, t || "default");
                  if (typeof n != "object") {
                    return n;
                  }
                  throw TypeError("@@toPrimitive must return a primitive value.");
                }
                return (t === "string" ? String : Number)(e);
              }(e, "string");
              if (typeof t == "symbol") {
                return t;
              } else {
                return t + "";
              }
            }(i)) in n) {
              Object.defineProperty(n, i, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              n[i] = a;
            }
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
        } else {
          fk(Object(r)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
        }
      }
      return e;
    }({}, e);
    return Object.keys(t).reduce((e, r) => {
      if (e[r] === undefined && t[r] !== undefined) {
        e[r] = t[r];
      }
      return e;
    }, r);
  }
  function fC() {
    return (fC = Object.assign.bind()).apply(null, arguments);
  }
  function fT(e, t) {
    t ||= e.slice(0);
    return Object.freeze(Object.defineProperties(e, {
      raw: {
        value: Object.freeze(t)
      }
    }));
  }
  e.s(["Curve", 0, fj], 22124);
  e.s(["resolveDefaultProps", 0, fI], 19966);
  var fM = e => {
    var t = e.cx;
    var r = e.cy;
    var n = e.radius;
    var i = e.angle;
    var a = e.sign;
    var o = e.isExternal;
    var l = e.cornerRadius;
    var u = e.cornerIsExternal;
    var c = l * (o ? 1 : -1) + n;
    var s = Math.asin(l / c) / iE;
    var f = u ? i : i + a * s;
    var d = iP(t, r, c, f);
    return {
      center: d,
      circleTangency: iP(t, r, n, f),
      lineTangency: iP(t, r, c * Math.cos(s * iE), u ? i - a * s : i),
      theta: s
    };
  };
  var f_ = e => {
    var t = e.cx;
    var r = e.cy;
    var n = e.innerRadius;
    var i = e.outerRadius;
    var a = e.startAngle;
    var o = e.endAngle;
    var l = eN(o - a) * Math.min(Math.abs(o - a), 359.999);
    var u = a + l;
    var c = iP(t, r, i, a);
    var s = iP(t, r, i, u);
    var f = eD(w ||= fT(["M ", ",", "\n    A ", ",", ",0,\n    ", ",", ",\n    ", ",", "\n  "]), c.x, c.y, i, i, +(Math.abs(l) > 180), +(a > u), s.x, s.y);
    if (n > 0) {
      var d = iP(t, r, n, a);
      var p = iP(t, r, n, u);
      f += eD(O ||= fT(["L ", ",", "\n            A ", ",", ",0,\n            ", ",", ",\n            ", ",", " Z"]), p.x, p.y, n, n, +(Math.abs(l) > 180), +(a <= u), d.x, d.y);
    } else {
      f += eD(A ||= fT(["L ", ",", " Z"]), t, r);
    }
    return f;
  };
  var fD = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: false,
    cornerIsExternal: false
  };
  var fN = e => {
    var t;
    var r = fI(e, fD);
    var n = r.cx;
    var i = r.cy;
    var a = r.innerRadius;
    var o = r.outerRadius;
    var l = r.cornerRadius;
    var c = r.forceCornerRadius;
    var s = r.cornerIsExternal;
    var f = r.startAngle;
    var d = r.endAngle;
    var p = r.className;
    if (o < a || f === d) {
      return null;
    }
    var h = u("recharts-sector", p);
    var y = o - a;
    var v = e$(l, y, 0, true);
    t = v > 0 && Math.abs(f - d) < 360 ? (e => {
      var t = e.cx;
      var r = e.cy;
      var n = e.innerRadius;
      var i = e.outerRadius;
      var a = e.cornerRadius;
      var o = e.forceCornerRadius;
      var l = e.cornerIsExternal;
      var u = e.startAngle;
      var c = e.endAngle;
      var s = eN(c - u);
      var f = fM({
        cx: t,
        cy: r,
        radius: i,
        angle: u,
        sign: s,
        cornerRadius: a,
        cornerIsExternal: l
      });
      var d = f.circleTangency;
      var p = f.lineTangency;
      var h = f.theta;
      var y = fM({
        cx: t,
        cy: r,
        radius: i,
        angle: c,
        sign: -s,
        cornerRadius: a,
        cornerIsExternal: l
      });
      var v = y.circleTangency;
      var m = y.lineTangency;
      var g = y.theta;
      var b = l ? Math.abs(u - c) : Math.abs(u - c) - h - g;
      if (b < 0) {
        if (o) {
          return eD(S ||= fT(["M ", ",", "\n        a", ",", ",0,0,1,", ",0\n        a", ",", ",0,0,1,", ",0\n      "]), p.x, p.y, a, a, a * 2, a, a, -(a * 2));
        } else {
          return f_({
            cx: t,
            cy: r,
            innerRadius: n,
            outerRadius: i,
            startAngle: u,
            endAngle: c
          });
        }
      }
      var x = eD(E ||= fT(["M ", ",", "\n    A", ",", ",0,0,", ",", ",", "\n    A", ",", ",0,", ",", ",", ",", "\n    A", ",", ",0,0,", ",", ",", "\n  "]), p.x, p.y, a, a, +(s < 0), d.x, d.y, i, i, +(b > 180), +(s < 0), v.x, v.y, a, a, +(s < 0), m.x, m.y);
      if (n > 0) {
        var w = fM({
          cx: t,
          cy: r,
          radius: n,
          angle: u,
          sign: s,
          isExternal: true,
          cornerRadius: a,
          cornerIsExternal: l
        });
        var O = w.circleTangency;
        var A = w.lineTangency;
        var k = w.theta;
        var I = fM({
          cx: t,
          cy: r,
          radius: n,
          angle: c,
          sign: -s,
          isExternal: true,
          cornerRadius: a,
          cornerIsExternal: l
        });
        var C = I.circleTangency;
        var T = I.lineTangency;
        var M = I.theta;
        var _ = l ? Math.abs(u - c) : Math.abs(u - c) - k - M;
        if (_ < 0 && a === 0) {
          return `${x}L${t},${r}Z`;
        }
        x += eD(P ||= fT(["L", ",", "\n      A", ",", ",0,0,", ",", ",", "\n      A", ",", ",0,", ",", ",", ",", "\n      A", ",", ",0,0,", ",", ",", "Z"]), T.x, T.y, a, a, +(s < 0), C.x, C.y, n, n, +(_ > 180), +(s > 0), O.x, O.y, a, a, +(s < 0), A.x, A.y);
      } else {
        x += eD(j ||= fT(["L", ",", "Z"]), t, r);
      }
      return x;
    })({
      cx: n,
      cy: i,
      innerRadius: a,
      outerRadius: o,
      cornerRadius: Math.min(v, y / 2),
      forceCornerRadius: c,
      cornerIsExternal: s,
      startAngle: f,
      endAngle: d
    }) : f_({
      cx: n,
      cy: i,
      innerRadius: a,
      outerRadius: o,
      startAngle: f,
      endAngle: d
    });
    return tS.createElement("path", fC({}, sq(r), {
      className: h,
      d: t
    }));
  };
  e.s(["Sector", 0, fN], 12144);
  var fL = {
    devToolsEnabled: true,
    isSsr: typeof window === "undefined" || !window.document || !window.document.createElement || !window.setTimeout
  };
  function fR(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  e.s(["Global", 0, fL], 25663);
  var fz = function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        fR(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        fR(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }({}, {
    cacheSize: 2000,
    enableCache: true
  });
  var fB = new class {
    constructor(e) {
      (function (e, t, r) {
        var n;
        if ((t = typeof (n = function (e, t) {
          if (typeof e != "object" || !e) {
            return e;
          }
          var r = e[Symbol.toPrimitive];
          if (r !== undefined) {
            var n = r.call(e, t || "default");
            if (typeof n != "object") {
              return n;
            }
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(t, "string")) == "symbol" ? n : n + "") in e) {
          Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          e[t] = r;
        }
      })(this, "cache", new Map());
      this.maxSize = e;
    }
    get(e) {
      var t = this.cache.get(e);
      if (t !== undefined) {
        this.cache.delete(e);
        this.cache.set(e, t);
      }
      return t;
    }
    set(e, t) {
      if (this.cache.has(e)) {
        this.cache.delete(e);
      } else if (this.cache.size >= this.maxSize) {
        var r = this.cache.keys().next().value;
        if (r != null) {
          this.cache.delete(r);
        }
      }
      this.cache.set(e, t);
    }
    clear() {
      this.cache.clear();
    }
    size() {
      return this.cache.size;
    }
  }(fz.cacheSize);
  var fF = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre"
  };
  var fU = "recharts_measurement_span";
  var f$ = (e, t) => {
    try {
      var r = document.getElementById(fU);
      if (!r) {
        (r = document.createElement("span")).setAttribute("id", fU);
        r.setAttribute("aria-hidden", "true");
        document.body.appendChild(r);
      }
      Object.assign(r.style, fF, t);
      r.textContent = `${e}`;
      var n = r.getBoundingClientRect();
      return {
        width: n.width,
        height: n.height
      };
    } catch (e) {
      return {
        width: 0,
        height: 0
      };
    }
  };
  function fK(e) {
    var t;
    var r;
    var n;
    var i;
    var a;
    var o;
    var l = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (e == null || fL.isSsr) {
      return {
        width: 0,
        height: 0
      };
    }
    if (!fz.enableCache) {
      return f$(e, l);
    }
    t = l.fontSize || "";
    r = l.fontFamily || "";
    n = l.fontWeight || "";
    i = l.fontStyle || "";
    a = l.letterSpacing || "";
    o = l.textTransform || "";
    var u = `${e}|${t}|${r}|${n}|${i}|${a}|${o}`;
    var c = fB.get(u);
    if (c) {
      return c;
    }
    var s = f$(e, l);
    fB.set(u, s);
    return s;
  }
  function fW(e, t) {
    return function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(e) || function (e, t) {
      var r = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (r != null) {
        var n;
        var i;
        var a;
        var o;
        var l = [];
        var u = true;
        var c = false;
        try {
          a = (r = r.call(e)).next;
          if (t === 0) {
            if (Object(r) !== r) {
              return;
            }
            u = false;
          } else {
            for (; !(u = (n = a.call(r)).done) && (l.push(n.value), l.length !== t); u = true);
          }
        } catch (e) {
          c = true;
          i = e;
        } finally {
          try {
            if (!u && r.return != null && (o = r.return(), Object(o) !== o)) {
              return;
            }
          } finally {
            if (c) {
              throw i;
            }
          }
        }
        return l;
      }
    }(e, t) || function (e, t) {
      if (e) {
        if (typeof e == "string") {
          return fV(e, t);
        }
        var r = {}.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor) {
          r = e.constructor.name;
        }
        if (r === "Map" || r === "Set") {
          return Array.from(e);
        } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
          return fV(e, t);
        } else {
          return undefined;
        }
      }
    }(e, t) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function fV(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  e.s(["getStringSize", 0, fK], 80009);
  var fH = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
  var fG = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
  var fY = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/;
  var fq = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/;
  var fX = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 16,
    in: 96,
    Q: 96 / 101.6,
    px: 1
  };
  var fZ = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
  class fQ {
    static parse(e) {
      var r = fW(fq.exec(e) ?? [], 3);
      var n = r[1];
      var i = r[2];
      if (n == null) {
        return fQ.NaN;
      } else {
        return new fQ(parseFloat(n), i ?? "");
      }
    }
    constructor(e, t) {
      this.num = e;
      this.unit = t;
      this.num = e;
      this.unit = t;
      if (eL(e)) {
        this.unit = "";
      }
      if (t !== "" && !fY.test(t)) {
        this.num = NaN;
        this.unit = "";
      }
      if (function (e) {
        return fZ.includes(e);
      }(t)) {
        this.num = function (e, t) {
          return e * fX[t];
        }(e, t);
        this.unit = "px";
      }
    }
    add(e) {
      if (this.unit !== e.unit) {
        return new fQ(NaN, "");
      } else {
        return new fQ(this.num + e.num, this.unit);
      }
    }
    subtract(e) {
      if (this.unit !== e.unit) {
        return new fQ(NaN, "");
      } else {
        return new fQ(this.num - e.num, this.unit);
      }
    }
    multiply(e) {
      if (this.unit !== "" && e.unit !== "" && this.unit !== e.unit) {
        return new fQ(NaN, "");
      } else {
        return new fQ(this.num * e.num, this.unit || e.unit);
      }
    }
    divide(e) {
      if (this.unit !== "" && e.unit !== "" && this.unit !== e.unit) {
        return new fQ(NaN, "");
      } else {
        return new fQ(this.num / e.num, this.unit || e.unit);
      }
    }
    toString() {
      return `${this.num}${this.unit}`;
    }
    isNaN() {
      return eL(this.num);
    }
  }
  function fJ(e) {
    if (e == null || e.includes("NaN")) {
      return "NaN";
    }
    for (var t = e; t.includes("*") || t.includes("/");) {
      var n = fW(fH.exec(t) ?? [], 4);
      var i = n[1];
      var a = n[2];
      var o = n[3];
      var l = fQ.parse(i ?? "");
      var u = fQ.parse(o ?? "");
      var c = a === "*" ? l.multiply(u) : l.divide(u);
      if (c.isNaN()) {
        return "NaN";
      }
      t = t.replace(fH, c.toString());
    }
    while (t.includes("+") || /.-\d+(?:\.\d+)?/.test(t)) {
      var f = fW(fG.exec(t) ?? [], 4);
      var d = f[1];
      var p = f[2];
      var h = f[3];
      var y = fQ.parse(d ?? "");
      var v = fQ.parse(h ?? "");
      var m = p === "+" ? y.add(v) : y.subtract(v);
      if (m.isNaN()) {
        return "NaN";
      }
      t = t.replace(fG, m.toString());
    }
    return t;
  }
  f = "NaN";
  d = new fQ(NaN, "");
  if ((f = typeof (c = function (e, t) {
    if (typeof e != "object" || !e) {
      return e;
    }
    var r = e[Symbol.toPrimitive];
    if (r !== undefined) {
      var n = r.call(e, t || "default");
      if (typeof n != "object") {
        return n;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }(f, "string")) == "symbol" ? c : c + "") in fQ) {
    Object.defineProperty(fQ, f, {
      value: d,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    fQ[f] = d;
  }
  var f0 = /\(([^()]*)\)/;
  function f1(e) {
    var t = function (e) {
      try {
        var t;
        t = e.replace(/\s+/g, "");
        t = function (e) {
          for (var t, r = e; (t = f0.exec(r)) != null;) {
            var n = fW(t, 2)[1];
            r = r.replace(f0, fJ(n));
          }
          return r;
        }(t);
        return t = fJ(t);
      } catch (e) {
        return "NaN";
      }
    }(e.slice(5, -1));
    if (t === "NaN") {
      return "";
    } else {
      return t;
    }
  }
  var f2 = ["x", "y", "lineHeight", "capHeight", "fill", "scaleToFit", "textAnchor", "verticalAnchor"];
  var f5 = ["dx", "dy", "angle", "className", "breakAll"];
  function f3() {
    return (f3 = Object.assign.bind()).apply(null, arguments);
  }
  function f6(e, t) {
    if (e == null) {
      return {};
    }
    var r;
    var n;
    var i = function (e, t) {
      if (e == null) {
        return {};
      }
      var r = {};
      for (var n in e) {
        if ({}.hasOwnProperty.call(e, n)) {
          if (t.indexOf(n) !== -1) {
            continue;
          }
          r[n] = e[n];
        }
      }
      return r;
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) {
        r = a[n];
        if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
          i[r] = e[r];
        }
      }
    }
    return i;
  }
  function f4(e, t) {
    return function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(e) || function (e, t) {
      var r = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (r != null) {
        var n;
        var i;
        var a;
        var o;
        var l = [];
        var u = true;
        var c = false;
        try {
          a = (r = r.call(e)).next;
          if (t === 0) {
            if (Object(r) !== r) {
              return;
            }
            u = false;
          } else {
            for (; !(u = (n = a.call(r)).done) && (l.push(n.value), l.length !== t); u = true);
          }
        } catch (e) {
          c = true;
          i = e;
        } finally {
          try {
            if (!u && r.return != null && (o = r.return(), Object(o) !== o)) {
              return;
            }
          } finally {
            if (c) {
              throw i;
            }
          }
        }
        return l;
      }
    }(e, t) || function (e, t) {
      if (e) {
        if (typeof e == "string") {
          return f8(e, t);
        }
        var r = {}.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor) {
          r = e.constructor.name;
        }
        if (r === "Map" || r === "Set") {
          return Array.from(e);
        } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
          return f8(e, t);
        } else {
          return undefined;
        }
      }
    }(e, t) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function f8(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  var f7 = /[ \f\n\r\t\v\u2028\u2029]+/;
  var f9 = e => {
    var t = e.children;
    var r = e.breakAll;
    var n = e.style;
    try {
      var i = [];
      if (!eH(t)) {
        i = r ? t.toString().split("") : t.toString().split(f7);
      }
      var a = i.map(e => ({
        word: e,
        width: fK(e, n).width
      }));
      var o = r ? 0 : fK("\xA0", n).width;
      return {
        wordsWithComputedWidth: a,
        spaceWidth: o
      };
    } catch (e) {
      return null;
    }
  };
  function de(e) {
    return e === "start" || e === "middle" || e === "end" || e === "inherit";
  }
  function dt(e) {
    return eH(e) || typeof e == "string" || typeof e == "number" || typeof e == "boolean";
  }
  var dr = (e, t, r, n) => e.reduce((e, i) => {
    var a = i.word;
    var o = i.width;
    var l = e[e.length - 1];
    if (l && o != null && (t == null || n || l.width + o + r < Number(t))) {
      l.words.push(a);
      l.width += o + r;
    } else {
      e.push({
        words: [a],
        width: o
      });
    }
    return e;
  }, []);
  var dn = e => e.reduce((e, t) => e.width > t.width ? e : t);
  var di = (e, t, r, n, i, a, o, l) => {
    var u = f9({
      breakAll: r,
      style: n,
      children: e.slice(0, t) + "…"
    });
    if (!u) {
      return [false, []];
    }
    var c = dr(u.wordsWithComputedWidth, a, o, l);
    return [c.length > i || dn(c).width > Number(a), c];
  };
  var da = e => [{
    words: eH(e) ? [] : e.toString().split(f7),
    width: undefined
  }];
  var dl = "#808080";
  var du = {
    angle: 0,
    breakAll: false,
    capHeight: "0.71em",
    fill: dl,
    lineHeight: "1em",
    scaleToFit: false,
    textAnchor: "start",
    verticalAnchor: "end",
    x: 0,
    y: 0
  };
  var dc = (0, tS.forwardRef)((e, t) => {
    var r;
    var n = fI(e, du);
    var i = n.x;
    var a = n.y;
    var o = n.lineHeight;
    var l = n.capHeight;
    var c = n.fill;
    var s = n.scaleToFit;
    var f = n.textAnchor;
    var d = n.verticalAnchor;
    var p = f6(n, f2);
    var h = (0, tS.useMemo)(() => (e => {
      var t = e.width;
      var r = e.scaleToFit;
      var n = e.children;
      var i = e.style;
      var a = e.breakAll;
      var o = e.maxLines;
      if ((t || r) && !fL.isSsr) {
        var l = f9({
          breakAll: a,
          children: n,
          style: i
        });
        if (!l) {
          return da(n);
        }
        var u = l.wordsWithComputedWidth;
        var c = l.spaceWidth;
        return ((e, t, r, n, i) => {
          var a;
          var o = e.maxLines;
          var l = e.children;
          var u = e.style;
          var c = e.breakAll;
          var s = ez(o);
          var f = String(l);
          var d = dr(t, n, r, i);
          if (!s || i || !(d.length > o) && !(dn(d).width > Number(n))) {
            return d;
          }
          for (var p = 0, h = f.length - 1, y = 0; p <= h && y <= f.length - 1;) {
            var v = Math.floor((p + h) / 2);
            var m = f4(di(f, v - 1, c, u, o, n, r, i), 2);
            var g = m[0];
            var b = m[1];
            var x = f4(di(f, v, c, u, o, n, r, i), 1)[0];
            if (!g && !x) {
              p = v + 1;
            }
            if (g && x) {
              h = v - 1;
            }
            if (!g && x) {
              a = b;
              break;
            }
            y++;
          }
          return a || d;
        })({
          breakAll: a,
          children: n,
          maxLines: o,
          style: i
        }, u, c, t, !!r);
      }
      return da(n);
    })({
      breakAll: p.breakAll,
      children: p.children,
      maxLines: p.maxLines,
      scaleToFit: s,
      style: p.style,
      width: p.width
    }), [p.breakAll, p.children, p.maxLines, s, p.style, p.width]);
    var y = p.dx;
    var v = p.dy;
    var m = p.angle;
    var g = p.className;
    var b = p.breakAll;
    var x = f6(p, f5);
    if (!eB(i) || !eB(a) || h.length === 0) {
      return null;
    }
    var w = Number(i) + (ez(y) ? y : 0);
    var O = Number(a) + (ez(v) ? v : 0);
    if (!eZ(w) || !eZ(O)) {
      return null;
    }
    switch (d) {
      case "start":
        r = f1(`calc(${l})`);
        break;
      case "middle":
        r = f1(`calc(${(h.length - 1) / 2} * -${o} + (${l} / 2))`);
        break;
      default:
        r = f1(`calc(${h.length - 1} * -${o})`);
    }
    var A = [];
    var S = h[0];
    if (s && S != null) {
      var E = S.width;
      var P = p.width;
      A.push(`scale(${ez(P) && ez(E) ? P / E : 1})`);
    }
    if (m) {
      A.push(`rotate(${m}, ${w}, ${O})`);
    }
    if (A.length) {
      x.transform = A.join(" ");
    }
    return tS.createElement("text", f3({}, sq(x), {
      ref: t,
      x: w,
      y: O,
      className: u("recharts-text", g),
      textAnchor: f,
      fill: c.includes("url") ? dl : c
    }), h.map((e, t) => {
      var n = e.words.join(b ? "" : " ");
      return tS.createElement("tspan", {
        x: w,
        dy: t === 0 ? r : o,
        key: `${n}-${t}`
      }, n);
    }));
  });
  dc.displayName = "Text";
  e.s(["Text", 0, dc, "isRenderableText", 0, dt, "isValidTextAnchor", 0, de], 96013);
  var ds = e.i(21849);
  var df = e => typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "";
  var dd = null;
  var dp = null;
  var dh = e => {
    if (e === dd && Array.isArray(dp)) {
      return dp;
    }
    var t = [];
    tS.Children.forEach(e, e => {
      if (!eH(e)) {
        if ((0, ds.isFragment)(e)) {
          t = t.concat(dh(e.props.children));
        } else {
          t.push(e);
        }
      }
    });
    dp = t;
    dd = e;
    return t;
  };
  function dy(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function dv(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        dy(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        dy(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  e.s(["findAllByType", 0, function (e, t) {
    var r = [];
    var n = [];
    n = Array.isArray(t) ? t.map(e => df(e)) : [df(t)];
    dh(e).forEach(e => {
      var t = l(e, "type.displayName") || l(e, "type.name");
      if (t && n.indexOf(t) !== -1) {
        r.push(e);
      }
    });
    return r;
  }, "isClipDot", 0, e => !e || typeof e != "object" || !("clipDot" in e) || !!e.clipDot], 34440);
  e.s(["Shape", 0, function (e) {
    var t;
    var r;
    var n = e.option;
    var i = e.DefaultShape;
    var a = e.shapeProps;
    var o = e.activeClassName;
    var l = e.inActiveClassName;
    var u = function (e) {
      if ("index" in e) {
        var t = e.index;
        if (typeof t == "number" || typeof t == "string") {
          return t;
        } else {
          return undefined;
        }
      }
    }(a);
    r = (0, tS.isValidElement)(n) ? (0, tS.cloneElement)(n, (t = (0, tS.isValidElement)(n) ? n.props : n, dv(dv({}, a), t))) : n === i ? tS.createElement(i, a) : typeof n == "function" ? n(a, u) : typeof n == "object" ? tS.createElement(i, dv(dv({}, a), n)) : tS.createElement(i, a);
    if ("isActive" in a && a.isActive === true) {
      return tS.createElement(sQ, {
        className: o === undefined ? "recharts-active-shape" : o
      }, r);
    } else {
      return tS.createElement(sQ, {
        className: l === undefined ? "recharts-shape" : l
      }, r);
    }
  }], 13627);
  var dm = {
    active: false,
    index: null,
    dataKey: undefined,
    graphicalItemId: undefined,
    coordinate: undefined
  };
  var dg = rJ({
    name: "tooltip",
    initialState: {
      itemInteraction: {
        click: dm,
        hover: dm
      },
      axisInteraction: {
        click: dm,
        hover: dm
      },
      keyboardInteraction: dm,
      syncInteraction: {
        active: false,
        index: null,
        dataKey: undefined,
        label: undefined,
        coordinate: undefined,
        sourceViewBox: undefined,
        graphicalItemId: undefined
      },
      tooltipItemPayloads: [],
      settings: {
        shared: undefined,
        trigger: "hover",
        axisId: 0,
        active: false,
        defaultIndex: undefined
      }
    },
    reducers: {
      addTooltipEntrySettings: {
        reducer(e, t) {
          e.tooltipItemPayloads.push(t.payload);
        },
        prepare: rG()
      },
      replaceTooltipEntrySettings: {
        reducer(e, t) {
          var r = t.payload;
          var n = r.prev;
          var i = r.next;
          var a = rk(e).tooltipItemPayloads.indexOf(n);
          if (a > -1) {
            e.tooltipItemPayloads[a] = i;
          }
        },
        prepare: rG()
      },
      removeTooltipEntrySettings: {
        reducer(e, t) {
          var r = rk(e).tooltipItemPayloads.indexOf(t.payload);
          if (r > -1) {
            e.tooltipItemPayloads.splice(r, 1);
          }
        },
        prepare: rG()
      },
      setTooltipSettingsState(e, t) {
        e.settings = t.payload;
      },
      setActiveMouseOverItemIndex(e, t) {
        e.syncInteraction.active = false;
        e.syncInteraction.sourceViewBox = undefined;
        e.keyboardInteraction.active = false;
        e.itemInteraction.hover.active = true;
        e.itemInteraction.hover.index = t.payload.activeIndex;
        e.itemInteraction.hover.dataKey = t.payload.activeDataKey;
        e.itemInteraction.hover.graphicalItemId = t.payload.activeGraphicalItemId;
        e.itemInteraction.hover.coordinate = t.payload.activeCoordinate;
      },
      mouseLeaveChart(e) {
        e.itemInteraction.hover.active = false;
        e.axisInteraction.hover.active = false;
      },
      mouseLeaveItem(e) {
        e.itemInteraction.hover.active = false;
      },
      setActiveClickItemIndex(e, t) {
        e.syncInteraction.active = false;
        e.syncInteraction.sourceViewBox = undefined;
        e.itemInteraction.click.active = true;
        e.keyboardInteraction.active = false;
        e.itemInteraction.click.index = t.payload.activeIndex;
        e.itemInteraction.click.dataKey = t.payload.activeDataKey;
        e.itemInteraction.click.graphicalItemId = t.payload.activeGraphicalItemId;
        e.itemInteraction.click.coordinate = t.payload.activeCoordinate;
      },
      setMouseOverAxisIndex(e, t) {
        e.syncInteraction.active = false;
        e.syncInteraction.sourceViewBox = undefined;
        e.axisInteraction.hover.active = true;
        e.keyboardInteraction.active = false;
        e.axisInteraction.hover.index = t.payload.activeIndex;
        e.axisInteraction.hover.dataKey = t.payload.activeDataKey;
        e.axisInteraction.hover.coordinate = t.payload.activeCoordinate;
      },
      setMouseClickAxisIndex(e, t) {
        e.syncInteraction.active = false;
        e.syncInteraction.sourceViewBox = undefined;
        e.keyboardInteraction.active = false;
        e.axisInteraction.click.active = true;
        e.axisInteraction.click.index = t.payload.activeIndex;
        e.axisInteraction.click.dataKey = t.payload.activeDataKey;
        e.axisInteraction.click.coordinate = t.payload.activeCoordinate;
      },
      setSyncInteraction(e, t) {
        e.syncInteraction = t.payload;
      },
      setKeyboardInteraction(e, t) {
        e.keyboardInteraction.active = t.payload.active;
        e.keyboardInteraction.index = t.payload.activeIndex;
        e.keyboardInteraction.coordinate = t.payload.activeCoordinate;
      }
    }
  });
  var db = dg.actions;
  var dx = db.addTooltipEntrySettings;
  var dw = db.replaceTooltipEntrySettings;
  var dO = db.removeTooltipEntrySettings;
  var dA = db.setTooltipSettingsState;
  var dS = db.setActiveMouseOverItemIndex;
  var dE = db.mouseLeaveItem;
  var dP = db.mouseLeaveChart;
  var dj = db.setActiveClickItemIndex;
  var dk = db.setMouseOverAxisIndex;
  var dI = db.setMouseClickAxisIndex;
  var dC = db.setSyncInteraction;
  var dT = db.setKeyboardInteraction;
  var dM = dg.reducer;
  e.s(["addTooltipEntrySettings", 0, dx, "mouseLeaveChart", 0, dP, "mouseLeaveItem", 0, dE, "noInteraction", 0, dm, "removeTooltipEntrySettings", 0, dO, "replaceTooltipEntrySettings", 0, dw, "setActiveClickItemIndex", 0, dj, "setActiveMouseOverItemIndex", 0, dS, "setKeyboardInteraction", 0, dT, "setMouseClickAxisIndex", 0, dI, "setMouseOverAxisIndex", 0, dk, "setSyncInteraction", 0, dC, "setTooltipSettingsState", 0, dA, "tooltipReducer", 0, dM], 87957);
  e.s(["SetTooltipEntrySettings", 0, function (e) {
    var t = e.tooltipEntrySettings;
    var r = tk();
    var n = nC();
    var i = (0, tS.useRef)(null);
    (0, tS.useLayoutEffect)(() => {
      if (!n) {
        if (i.current === null) {
          r(dx(t));
        } else if (i.current !== t) {
          r(dw({
            prev: i.current,
            next: t
          }));
        }
        i.current = t;
      }
    }, [t, r, n]);
    (0, tS.useLayoutEffect)(() => () => {
      if (i.current) {
        r(dO(i.current));
        i.current = null;
      }
    }, [r]);
    return null;
  }], 60909);
  var d_ = e => e.options.defaultTooltipEventType;
  var dD = e => e.options.validateTooltipEventTypes;
  function dN(e, t, r) {
    if (e == null) {
      return t;
    }
    var n = e ? "axis" : "item";
    if (r == null) {
      return t;
    } else if (r.includes(n)) {
      return n;
    } else {
      return t;
    }
  }
  function dL(e, t) {
    return dN(t, d_(e), dD(e));
  }
  var dR = (e, t) => {
    var r;
    var n = Number(t);
    if (!eL(n) && t != null) {
      if (n >= 0) {
        if (e == null || (r = e[n]) == null) {
          return undefined;
        } else {
          return r.value;
        }
      } else {
        return undefined;
      }
    }
  };
  function dz(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function dB(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        dz(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        dz(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  var dF = (e, t, r, n) => {
    if (t == null) {
      return dm;
    }
    var i;
    var a;
    var o;
    i = e;
    a = t;
    o = r;
    var l = a === "axis" ? o === "click" ? i.axisInteraction.click : i.axisInteraction.hover : o === "click" ? i.itemInteraction.click : i.itemInteraction.hover;
    if (l == null) {
      return dm;
    }
    if (l.active) {
      return l;
    }
    if (e.keyboardInteraction.active) {
      return e.keyboardInteraction;
    }
    if (e.syncInteraction.active && e.syncInteraction.index != null) {
      return e.syncInteraction;
    }
    var u = e.settings.active === true;
    if (l.index != null) {
      if (u) {
        return dB(dB({}, l), {}, {
          active: true
        });
      }
    } else if (n != null) {
      return {
        active: true,
        coordinate: undefined,
        dataKey: undefined,
        index: n,
        graphicalItemId: undefined
      };
    }
    return dB(dB({}, dm), {}, {
      coordinate: l.coordinate
    });
  };
  var dU = (e, t, r, n) => {
    var i = e == null ? undefined : e.index;
    if (i == null) {
      return null;
    }
    var a = Number(i);
    if (!eZ(a)) {
      return i;
    }
    var o = Infinity;
    if (t.length > 0) {
      o = t.length - 1;
    }
    var l = Math.max(0, Math.min(a, o));
    var u = t[l];
    if (u == null) {
      return String(l);
    } else if (!function (e, t, r) {
      if (r == null || t == null) {
        return true;
      }
      var n = e8(e, t);
      return n == null || !ie(r) || function (e, t) {
        var r = function (e) {
          if (typeof e == "number") {
            if (Number.isFinite(e)) {
              return e;
            } else {
              return undefined;
            }
          }
          if (e instanceof Date) {
            var t = e.valueOf();
            if (Number.isFinite(t)) {
              return t;
            } else {
              return undefined;
            }
          }
          var r = Number(e);
          if (Number.isFinite(r)) {
            return r;
          } else {
            return undefined;
          }
        }(e);
        var n = t[0];
        var i = t[1];
        if (r === undefined) {
          return false;
        }
        var a = Math.min(n, i);
        var o = Math.max(n, i);
        return r >= a && r <= o;
      }(n, r);
    }(u, r, n)) {
      return null;
    } else {
      return String(l);
    }
  };
  var d$ = (e, t, r, n, i, a, o) => {
    if (a != null) {
      var l = o[0];
      var u = l == null ? undefined : l.getPosition(a);
      if (u != null) {
        return u;
      }
      var c = i == null ? undefined : i[Number(a)];
      if (c) {
        if (r === "horizontal") {
          return {
            x: c.coordinate,
            y: (n.top + t) / 2
          };
        } else {
          return {
            x: (n.left + e) / 2,
            y: c.coordinate
          };
        }
      }
    }
  };
  var dK = (e, t, r, n) => {
    if (t === "axis") {
      return e.tooltipItemPayloads;
    }
    if (e.tooltipItemPayloads.length === 0) {
      return [];
    }
    i = r === "hover" ? e.itemInteraction.hover.graphicalItemId : e.itemInteraction.click.graphicalItemId;
    if (e.syncInteraction.active && i == null) {
      return e.tooltipItemPayloads;
    }
    if (i == null && (n != null || e.keyboardInteraction.active)) {
      var i;
      var a = e.tooltipItemPayloads[0];
      if (a != null) {
        return [a];
      } else {
        return [];
      }
    }
    return e.tooltipItemPayloads.filter(e => {
      var t;
      return ((t = e.settings) == null ? undefined : t.graphicalItemId) === i;
    });
  };
  var dW = e => e.options.tooltipPayloadSearcher;
  var dV = e => e.tooltip;
  function dH(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function dG(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        dH(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        dH(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function dY(e) {
    if (typeof e == "string") {
      return e;
    }
  }
  var dq = (e, t, r, n, i, a, o) => {
    if (t != null && a != null) {
      var l = r.chartData;
      var u = r.computedData;
      var c = r.dataStartIndex;
      var s = r.dataEndIndex;
      return e.reduce((e, r) => {
        var d;
        var h = r.dataDefinedOnItem;
        var y = r.settings;
        var v = h ?? l;
        var m = Array.isArray(v) ? eX(v, c, s) : v;
        var g = (y == null ? undefined : y.dataKey) ?? n;
        var b = y == null ? undefined : y.nameKey;
        if (n && Array.isArray(m) && !Array.isArray(m[0]) && o === "axis") {
          if ((d = eV(m, n, i)) == null) {
            d = a(m, t, u, b);
          }
        } else {
          d = a(m, t, u, b);
        }
        if (Array.isArray(d)) {
          d.forEach(t => {
            var i = function (e) {
              if (e != null && typeof e == "object") {
                var t;
                var r = "name" in e ? function (e) {
                  if (typeof e == "string" || typeof e == "number") {
                    return e;
                  }
                }(e.name) : undefined;
                var n = "unit" in e ? function (e) {
                  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") {
                    return e;
                  }
                }(e.unit) : undefined;
                var i = "dataKey" in e ? typeof (t = e.dataKey) == "string" || typeof t == "number" ? t : typeof t == "function" ? e => t(e) : undefined : undefined;
                var a = "payload" in e ? e.payload : undefined;
                return {
                  name: r,
                  unit: n,
                  dataKey: i,
                  payload: a,
                  color: "color" in e ? dY(e.color) : undefined,
                  fill: "fill" in e ? dY(e.fill) : undefined
                };
              }
            }(t);
            var a = i == null ? undefined : i.name;
            var o = i == null ? undefined : i.dataKey;
            var l = i == null ? undefined : i.payload;
            var u = dG(dG({}, y), {}, {
              name: a,
              unit: i == null ? undefined : i.unit,
              color: (i == null ? undefined : i.color) ?? (y == null ? undefined : y.color),
              fill: (i == null ? undefined : i.fill) ?? (y == null ? undefined : y.fill)
            });
            e.push(to({
              tooltipEntrySettings: u,
              dataKey: o,
              payload: l,
              value: e8(l, o),
              name: a == null ? undefined : String(a)
            }));
          });
        } else {
          e.push(to({
            tooltipEntrySettings: y,
            dataKey: g,
            payload: d,
            value: e8(d, g),
            name: e8(d, b) ?? (y == null ? undefined : y.name)
          }));
        }
        return e;
      }, []);
    }
  };
  var dX = ea([cj, ci, ib], uZ);
  var dZ = ea([e => e.graphicalItems.cartesianItems, e => e.graphicalItems.polarItems], (e, t) => [...e, ...t]);
  var dQ = ea([i0, i1], ca);
  var dJ = ea([dZ, cj, dQ], cu, {
    memoizeOptions: {
      resultEqualityCheck: iJ
    }
  });
  var d0 = ea([dJ], e => e.filter(iZ));
  var d1 = ea([dJ], cp, {
    memoizeOptions: {
      resultEqualityCheck: iJ
    }
  });
  var d2 = ea([dJ], e => e.some(e => !e.data));
  var d5 = ea([d1, el], cv);
  var d3 = ea([d0, el, cj], iX);
  var d6 = ea([d5, cj, dJ, el, d2, d1], cb);
  var d4 = ea([cj], cD);
  var d8 = ea([cj], e => e.allowDataOverflow);
  var d7 = ea([d4, d8], ir);
  var d9 = ea([dJ], e => e.filter(iZ));
  var pe = ea([d3, d9, im, ig], cC);
  var pt = ea([pe, el, i0, d7], cM);
  var pr = ea([dJ], cf);
  var pn = ea([d5, cj, pr, cz, i0, ed], cF, {
    memoizeOptions: {
      resultEqualityCheck: iQ
    }
  });
  var pi = ea([cK, i0, i1], cW);
  var pa = ea([pi, i0], cX);
  var po = ea([cH, i0, i1], cW);
  var pl = ea([po, i0], cQ);
  var pu = ea([cY, i0, i1], cW);
  var pc = ea([pu, i0], c0);
  var ps = ea([pa, pc, pl], cB);
  var pf = ea([cj, d4, d7, pt, pn, ps, n5, i0], c5);
  var pd = ea([cj, n5, d5, d6, im, i0, pf], c8);
  var pp = ea([pd, cj, dX], se);
  var ph = ea([cj, pd, pp, i0], sr);
  var py = e => {
    var t = i0(e);
    var r = i1(e);
    return ss(e, t, r, false);
  };
  var pv = ea([cj, py], iM);
  var pm = ea([cj, dX, ph, pv], uX);
  var pg = ea([pm], i2);
  var pb = ea([n5, d6, cj, i0], sT);
  var px = ea([n5, d6, cj, i0], sh);
  var pw = ea([n5, cj, dX, pg, py, pb, px, i0], (e, t, r, n, i, a, o, l) => {
    if (t) {
      var u = t.type;
      var c = e9(e, l);
      if (n) {
        var s = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2;
        var f = u === "category" && n.bandwidth ? n.bandwidth() / s : 0;
        f = l === "angleAxis" && i != null && (i == null ? undefined : i.length) >= 2 ? eN(i[0] - i[1]) * 2 * f : f;
        if (c && o) {
          return o.map((e, t) => {
            var r = n.map(e);
            if (eZ(r)) {
              return {
                coordinate: r + f,
                value: e,
                index: t,
                offset: f
              };
            } else {
              return null;
            }
          }).filter(eY);
        } else {
          return n.domain().map((e, t) => {
            var r = n.map(e);
            if (eZ(r)) {
              return {
                coordinate: r + f,
                value: a ? a[e] : e,
                index: t,
                offset: f
              };
            } else {
              return null;
            }
          }).filter(eY);
        }
      }
    }
  });
  var pO = ea([d_, dD, e => e.tooltip.settings], (e, t, r) => dN(r.shared, e, t));
  var pA = e => e.tooltip.settings.trigger;
  var pS = e => e.tooltip.settings.defaultIndex;
  var pE = ea([dV, pO, pA, pS], dF);
  var pP = ea([pE, d5, ck, pd], dU);
  var pj = ea([pw, pP], dR);
  var pk = ea([pE], e => {
    if (e) {
      return e.dataKey;
    }
  });
  var pI = ea([pE], e => {
    if (e) {
      return e.graphicalItemId;
    }
  });
  var pC = ea([dV, pO, pA, pS], dK);
  var pT = ea([tc, ts, n5, tb, pw, pS, pC], d$);
  var pM = ea([pE, pT], (e, t) => e != null && e.coordinate ? e.coordinate : t);
  var p_ = ea([pE], e => {
    var t;
    return (t = e == null ? undefined : e.active) != null && t;
  });
  var pD = ea([pC, pP, el, ck, pj, dW, pO], dq);
  var pN = ea([pD], e => {
    if (e != null) {
      return Array.from(new Set(e.map(e => e.payload).filter(e => e != null)));
    }
  });
  e.s(["selectActiveLabel", 0, pj, "selectActiveTooltipCoordinate", 0, pM, "selectActiveTooltipDataKey", 0, pk, "selectActiveTooltipDataPoints", 0, pN, "selectActiveTooltipGraphicalItemId", 0, pI, "selectActiveTooltipIndex", 0, pP, "selectAllGraphicalItemsSettings", 0, dJ, "selectIsTooltipActive", 0, p_, "selectTooltipAxisDomain", 0, pd, "selectTooltipAxisRangeWithReverse", 0, pv, "selectTooltipAxisScale", 0, pg, "selectTooltipAxisTicks", 0, pw, "selectTooltipDisplayedData", 0, d5], 53926);
  var pL = rJ({
    name: "legend",
    initialState: {
      settings: {
        layout: "horizontal",
        align: "center",
        verticalAlign: "bottom",
        itemSorter: "value",
        position: undefined,
        offset: 0
      },
      size: {
        width: 0,
        height: 0
      },
      payload: []
    },
    reducers: {
      setLegendSize(e, t) {
        e.size.width = t.payload.width;
        e.size.height = t.payload.height;
      },
      setLegendSettings(e, t) {
        e.settings.align = t.payload.align;
        e.settings.layout = t.payload.layout;
        e.settings.verticalAlign = t.payload.verticalAlign;
        e.settings.itemSorter = t.payload.itemSorter;
        e.settings.position = t.payload.position;
        e.settings.offset = t.payload.offset;
      },
      addLegendPayload: {
        reducer(e, t) {
          e.payload.push(t.payload);
        },
        prepare: rG()
      },
      replaceLegendPayload: {
        reducer(e, t) {
          var r = t.payload;
          var n = r.prev;
          var i = r.next;
          var a = rk(e).payload.indexOf(n);
          if (a > -1) {
            e.payload[a] = i;
          }
        },
        prepare: rG()
      },
      removeLegendPayload: {
        reducer(e, t) {
          var r = rk(e).payload.indexOf(t.payload);
          if (r > -1) {
            e.payload.splice(r, 1);
          }
        },
        prepare: rG()
      }
    }
  });
  var pR = pL.actions;
  var pz = pR.setLegendSize;
  var pB = pR.setLegendSettings;
  var pF = pR.addLegendPayload;
  var pU = pR.replaceLegendPayload;
  var p$ = pR.removeLegendPayload;
  var pK = pL.reducer;
  e.s(["addLegendPayload", 0, pF, "legendReducer", 0, pK, "removeLegendPayload", 0, p$, "replaceLegendPayload", 0, pU, "setLegendSettings", 0, pB, "setLegendSize", 0, pz], 16686);
  e.s(["SetLegendPayload", 0, function (e) {
    var t = e.legendPayload;
    var r = tk();
    var n = nC();
    var i = (0, tS.useRef)(null);
    (0, tS.useLayoutEffect)(() => {
      if (!n) {
        if (i.current === null) {
          r(pF(t));
        } else if (i.current !== t) {
          r(pU({
            prev: i.current,
            next: t
          }));
        }
        i.current = t;
      }
    }, [r, n, t]);
    (0, tS.useLayoutEffect)(() => () => {
      if (i.current) {
        r(p$(i.current));
        i.current = null;
      }
    }, [r]);
    return null;
  }, "SetPolarLegendPayload", 0, function (e) {
    var t = e.legendPayload;
    var r = tk();
    var n = tM(n5);
    var i = (0, tS.useRef)(null);
    (0, tS.useLayoutEffect)(() => {
      if (n === "centric" || n === "radial") {
        if (i.current === null) {
          r(pF(t));
        } else if (i.current !== t) {
          r(pU({
            prev: i.current,
            next: t
          }));
        }
        i.current = t;
      }
    }, [r, n, t]);
    (0, tS.useLayoutEffect)(() => () => {
      if (i.current) {
        r(p$(i.current));
        i.current = null;
      }
    }, [r]);
    return null;
  }], 3850);
  var pW = (e, t) => [0, e * 3, t * 3 - e * 6, e * 3 - t * 3 + 1];
  var pV = (e, t) => e.map((e, r) => e * t ** r).reduce((e, t) => e + t);
  var pH = (e, t) => r => pV(pW(e, t), r);
  function pG() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) {
      t[r] = arguments[r];
    }
    if (t.length === 1) {
      switch (t[0]) {
        case "linear":
          return [0, 0, 1, 1];
        case "ease":
          return [0.25, 0.1, 0.25, 1];
        case "ease-in":
          return [0.42, 0, 1, 1];
        case "ease-out":
          return [0.42, 0, 0.58, 1];
        case "ease-in-out":
          return [0, 0, 0.58, 1];
        default:
          var n = (e => {
            var t;
            var r = e.split("(");
            if (r.length !== 2 || r[0] !== "cubic-bezier") {
              return null;
            }
            var n = (t = r[1]) == null || (t = t.split(")")[0]) == null ? undefined : t.split(",");
            if (n == null || n.length !== 4) {
              return null;
            }
            var i = n.map(e => parseFloat(e));
            return [i[0], i[1], i[2], i[3]];
          })(t[0]);
          if (n) {
            return n;
          }
      }
    }
    if (t.length === 4) {
      return t;
    } else {
      return [0, 0, 1, 1];
    }
  }
  function pY() {
    return ((e, t, r, n) => {
      var i = pH(e, r);
      var a = pH(t, n);
      var o = t => pV([...pW(e, r).map((e, t) => e * t).slice(1), 0], t);
      var l = e => e > 1 ? 1 : e < 0 ? 0 : e;
      var u = e => {
        var t = e > 1 ? 1 : e;
        var r = t;
        for (var n = 0; n < 8; ++n) {
          var u = i(r) - t;
          var c = o(r);
          if (Math.abs(u - t) < 0.0001 || c < 0.0001) {
            break;
          }
          r = l(r - u / c);
        }
        return a(r);
      };
      u.isStepper = false;
      return u;
    })(...pG(...arguments));
  }
  function pq(e = {}) {
    var t = e.stiff;
    var r = t === undefined ? 100 : t;
    var n = e.damping;
    var i = n === undefined ? 8 : n;
    var a = e.dt;
    var o = a === undefined ? 16.67 : a;
    var l = [0];
    var u = 0;
    var c = 0;
    for (var s = 0; s < 10000;) {
      var f = c * i;
      c += (-(u - 1) * r - f) * o / 1000;
      u += c * o / 1000;
      l.push(u);
      if (Math.abs(u - 1) < 0.0001 && Math.abs(c) < 0.0001) {
        break;
      }
      s++;
    }
    l[l.length - 1] = 1;
    var d = l.length - 1;
    return e => {
      if (e <= 0) {
        return 0;
      }
      if (e >= 1) {
        return 1;
      }
      var i = e * d;
      var a = Math.floor(i);
      return (l[a] ?? 0) + ((l[a + 1] ?? 0) - (l[a] ?? 0)) * (i - a);
    };
  }
  var pX = (0, tS.createContext)((e, t, r) => {
    var n;
    var i = a => {
      var o = t.tick(a);
      if (t.getState() === "active") {
        r(t.getInterpolated());
        if (t.getProgress() === 1) {
          t.complete();
          n = undefined;
          return;
        }
        n = e.setTimeout(i, o);
        return;
      }
      n = e.setTimeout(i, o);
    };
    n = e.setTimeout(i, 0);
    return () => {
      var e;
      if ((e = n) == null) {
        return undefined;
      } else {
        return e();
      }
    };
  });
  function pZ(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  function pQ() {
    var e;
    var t = function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(e = (0, tS.useState)(() => !fL.isSsr && !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) || function (e) {
      var t = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (t != null) {
        var r;
        var n;
        var i;
        var a;
        var o = [];
        var l = true;
        var u = false;
        try {
          i = (t = t.call(e)).next;
          false;
          for (; !(l = (r = i.call(t)).done) && (o.push(r.value), o.length !== 2); l = true);
        } catch (e) {
          u = true;
          n = e;
        } finally {
          try {
            if (!l && t.return != null && (a = t.return(), Object(a) !== a)) {
              return;
            }
          } finally {
            if (u) {
              throw n;
            }
          }
        }
        return o;
      }
    }(e) || function (e) {
      if (e) {
        if (typeof e == "string") {
          return pZ(e, 2);
        }
        var t = {}.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor) {
          t = e.constructor.name;
        }
        if (t === "Map" || t === "Set") {
          return Array.from(e);
        } else if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) {
          return pZ(e, 2);
        } else {
          return undefined;
        }
      }
    }(e) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
    var r = t[0];
    var n = t[1];
    (0, tS.useEffect)(() => {
      if (window.matchMedia) {
        var e = window.matchMedia("(prefers-reduced-motion: reduce)");
        var t = () => {
          n(e.matches);
        };
        e.addEventListener("change", t);
        return () => {
          e.removeEventListener("change", t);
        };
      }
    }, []);
    return r;
  }
  pX.Provider;
  var pJ = "init";
  var p0 = "pending";
  var p1 = "active";
  function p2(e) {
    return Math.max(0, e);
  }
  class p5 {
    getAnimationStartedTime() {
      return this.animationStartedTime;
    }
    getBeginStartedTime() {
      return this.beginStartedTime;
    }
    constructor(e) {
      var t;
      (function (e, t, r) {
        var n;
        if ((t = typeof (n = function (e, t) {
          if (typeof e != "object" || !e) {
            return e;
          }
          var r = e[Symbol.toPrimitive];
          if (r !== undefined) {
            var n = r.call(e, t || "default");
            if (typeof n != "object") {
              return n;
            }
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(t, "string")) == "symbol" ? n : n + "") in e) {
          Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          e[t] = r;
        }
      })(this, "state", pJ);
      this.animationId = e.animationId;
      this.onAnimationEnd = e.onAnimationEnd;
      this.animationDuration = p2(e.animationDuration);
      this.animationBegin = p2(e.animationBegin);
      this.progress = 0;
      this.from = e.from;
      this.to = e.to;
      this.easing = e.easing;
      if ((t = e.onAnimationStart) != null) {
        t.call(e);
      }
    }
    getState() {
      return this.state;
    }
    getEasing() {
      return this.easing;
    }
    getAnimationDuration() {
      return this.animationDuration;
    }
    tick(e) {
      if (this.getState() === pJ) {
        this.state = p0;
        this.beginStartedTime = e;
        return this.animationBegin;
      }
      if (this.getState() === p0) {
        if (this.beginStartedTime == null) {
          throw Error();
        }
        var t = e - this.beginStartedTime;
        if (t >= this.animationBegin) {
          this.state = p1;
          this.animationStartedTime = e;
          return this.nextAnimationUpdate(0);
        } else {
          return p2(this.animationBegin - t);
        }
      }
      if (this.getState() === p1) {
        if (this.animationStartedTime == null) {
          throw Error();
        }
        var r = e - this.animationStartedTime;
        this.setProgress(r / this.animationDuration);
        return this.nextAnimationUpdate(r);
      }
      return 0;
    }
    setProgress(e) {
      this.progress = Math.min(1, Math.max(0, e));
    }
    getProgress() {
      return this.progress;
    }
    complete() {
      this.progress = 1;
      if (this.state === "active") {
        var e;
        if ((e = this.onAnimationEnd) != null) {
          e.call(this);
        }
      }
      this.state = "completed";
    }
    getFrom() {
      return this.from;
    }
    getTo() {
      return this.to;
    }
    getAnimationId() {
      return this.animationId;
    }
    getAnimationBegin() {
      return this.animationBegin;
    }
  }
  class p3 extends p5 {
    nextAnimationUpdate() {
      return 0;
    }
    getInterpolated() {
      return this.easing(eW(this.getFrom(), this.getTo(), this.getProgress()));
    }
  }
  class p6 {
    setTimeout(e, t = 0) {
      var r = performance.now();
      var n = null;
      var i = a => {
        if (a - r >= t) {
          e(a);
        } else {
          n = requestAnimationFrame(i);
        }
      };
      n = requestAnimationFrame(i);
      return () => {
        if (n != null) {
          cancelAnimationFrame(n);
        }
      };
    }
  }
  function p4(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  var p8 = {
    begin: 0,
    duration: 1000,
    easing: "ease",
    isActive: true,
    canBegin: true,
    onAnimationEnd: () => {},
    onAnimationStart: () => {}
  };
  function p7(e) {
    var t;
    var r;
    var n;
    var i = fI(e, p8);
    var a = i.animationId;
    var o = i.isActive;
    var l = i.canBegin;
    var u = i.duration;
    var c = i.easing;
    var s = i.begin;
    var f = i.onAnimationEnd;
    var d = i.onAnimationStart;
    var p = i.children;
    var h = pQ();
    var y = o === "auto" ? !fL.isSsr && !h : o;
    t = i.animationController;
    r = (0, tS.useContext)(pX);
    var v = (0, tS.useMemo)(() => t ?? r, [t, r]);
    var m = function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(n = (0, tS.useState)(+!y)) || function (e) {
      var t = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (t != null) {
        var r;
        var n;
        var i;
        var a;
        var o = [];
        var l = true;
        var u = false;
        try {
          i = (t = t.call(e)).next;
          false;
          for (; !(l = (r = i.call(t)).done) && (o.push(r.value), o.length !== 2); l = true);
        } catch (e) {
          u = true;
          n = e;
        } finally {
          try {
            if (!l && t.return != null && (a = t.return(), Object(a) !== a)) {
              return;
            }
          } finally {
            if (u) {
              throw n;
            }
          }
        }
        return o;
      }
    }(n) || function (e) {
      if (e) {
        if (typeof e == "string") {
          return p4(e, 2);
        }
        var t = {}.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor) {
          t = e.constructor.name;
        }
        if (t === "Map" || t === "Set") {
          return Array.from(e);
        } else if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) {
          return p4(e, 2);
        } else {
          return undefined;
        }
      }
    }(n) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
    var g = m[0];
    var b = m[1];
    (0, tS.useEffect)(() => {
      if (!y) {
        b(1);
      }
    }, [y]);
    (0, tS.useEffect)(() => {
      var e = (e => {
        if (typeof e == "string") {
          switch (e) {
            case "ease":
            case "ease-in-out":
            case "ease-out":
            case "ease-in":
            case "linear":
              return pY(e);
            case "spring":
              return pq();
            default:
              if (e.split("(")[0] === "cubic-bezier") {
                return pY(e);
              }
          }
        }
        if (typeof e == "function") {
          return e;
        } else {
          return null;
        }
      })(c);
      if (y && l && e != null) {
        return v(new p6(), new p3({
          animationId: a,
          easing: e,
          animationDuration: u,
          animationBegin: s,
          onAnimationStart: d,
          onAnimationEnd: f,
          from: 0,
          to: 1
        }), b);
      } else {
        return eq;
      }
    }, [v, a, y, l, u, c, s, d, f]);
    return p(Number(g));
  }
  function p9(e, t = "animation-") {
    var r = (0, tS.useRef)(eU(t));
    var n = (0, tS.useRef)(e);
    if (n.current !== e) {
      r.current = eU(t);
      n.current = e;
    }
    return r.current;
  }
  function he(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  var ht = "index";
  var hr = "append";
  function hn(e, t, r = []) {
    var n = [];
    for (var i of r) {
      n.push({
        status: "removed",
        prev: i
      });
    }
    for (var a = 0; a < t.length; a++) {
      var o = e[a];
      var l = t[a];
      if (o != null) {
        n.push({
          status: "matched",
          prev: o,
          next: l
        });
      } else {
        n.push({
          status: "added",
          next: l
        });
      }
    }
    return n;
  }
  function hi(e, t, r) {
    var n;
    if (t == null) {
      return null;
    } else if (e == null) {
      return t.map(e => ({
        status: "added",
        next: e
      }));
    } else if (r === ht) {
      n = e.length / t.length;
      return hn(t.map((t, r) => e[Math.floor(r * n)]), t);
    } else if (r === hr) {
      return hn(t.map((t, r) => e[r]), t);
    } else {
      return function (e, t, r) {
        var n = function (e, t) {
          var r = new Map();
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            if (i != null) {
              var a = t(i, n);
              if (a != null && !r.has(a)) {
                r.set(a, i);
              }
            }
          }
          return r;
        }(e, r);
        var i = new Set();
        var a = t.map((e, t) => {
          var a = r(e, t);
          if (a != null) {
            var o = n.get(a);
            if (o !== undefined) {
              i.add(a);
              return o;
            }
          }
        });
        var o = [];
        for (var l of n) {
          var u = function (e) {
            if (Array.isArray(e)) {
              return e;
            }
          }(l) || function (e) {
            var t = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var r;
              var n;
              var i;
              var a;
              var o = [];
              var l = true;
              var u = false;
              try {
                i = (t = t.call(e)).next;
                false;
                for (; !(l = (r = i.call(t)).done) && (o.push(r.value), o.length !== 2); l = true);
              } catch (e) {
                u = true;
                n = e;
              } finally {
                try {
                  if (!l && t.return != null && (a = t.return(), Object(a) !== a)) {
                    return;
                  }
                } finally {
                  if (u) {
                    throw n;
                  }
                }
              }
              return o;
            }
          }(l) || function (e) {
            if (e) {
              if (typeof e == "string") {
                return he(e, 2);
              }
              var t = {}.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor) {
                t = e.constructor.name;
              }
              if (t === "Map" || t === "Set") {
                return Array.from(e);
              } else if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) {
                return he(e, 2);
              } else {
                return undefined;
              }
            }
          }(l) || function () {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
          var c = u[0];
          var s = u[1];
          if (!i.has(c)) {
            o.push(s);
          }
        }
        return hn(a, t, o);
      }(e, t, r);
    }
  }
  function ha(e, t) {
    var r = (0, tS.useRef)(e);
    var n = (0, tS.useRef)(t.current);
    var i = (0, tS.useRef)(true);
    if (r.current !== e) {
      r.current = e;
      n.current = t.current;
      i.current = false;
    }
    var a = (0, tS.useCallback)(function (e, r) {
      var a = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
      if (r === 0) {
        i.current = true;
        return;
      }
      if (r === 1) {
        n.current = e;
      }
      if (r > 0 && i.current && a) {
        t.current = e;
      }
    }, [t]);
    return {
      startValue: n.current,
      syncStepValue: a
    };
  }
  function ho(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  function hl(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  e.s(["matchAnimationItems", 0, hi, "matchAppend", 0, hr, "matchByIndex", 0, ht], 68444);
  e.s(["useAnimationStartSnapshot", 0, ha], 20819);
  e.s(["AnimatedItems", 0, function (e) {
    var r = e.animationInput;
    var n = e.animationIdPrefix;
    var i = e.items;
    var a = e.previousItemsRef;
    var o = e.isAnimationActive;
    var l = e.animationBegin;
    var u = e.animationDuration;
    var c = e.animationEasing;
    var s = e.onAnimationStart;
    var f = e.onAnimationEnd;
    var d = e.animationInterpolateFn;
    var p = e.animationMatchBy;
    var h = e.shouldUpdatePreviousRef;
    var y = e.children;
    var v = e.layout;
    var m = p9(r, n);
    var g = ha(m, a);
    var b = g.startValue ?? null;
    var x = hi(b, i, p ?? ht);
    return tS.createElement(p7, {
      animationId: m,
      begin: l,
      duration: u,
      isActive: o,
      easing: c,
      onAnimationEnd: f,
      onAnimationStart: s,
      key: m
    }, e => {
      var t = i == null ? i : d(x, e, v);
      var r = h ? h(e) : e > 0;
      g.syncStepValue(t, e, r);
      if (t == null) {
        return null;
      } else {
        return y(t, e, b == null);
      }
    });
  }, "useAnimationCallbacks", 0, function (e, t) {
    var r;
    var n = function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(r = (0, tS.useState)(false)) || function (e) {
      var t = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (t != null) {
        var r;
        var n;
        var i;
        var a;
        var o = [];
        var l = true;
        var u = false;
        try {
          i = (t = t.call(e)).next;
          false;
          for (; !(l = (r = i.call(t)).done) && (o.push(r.value), o.length !== 2); l = true);
        } catch (e) {
          u = true;
          n = e;
        } finally {
          try {
            if (!l && t.return != null && (a = t.return(), Object(a) !== a)) {
              return;
            }
          } finally {
            if (u) {
              throw n;
            }
          }
        }
        return o;
      }
    }(r) || function (e) {
      if (e) {
        if (typeof e == "string") {
          return ho(e, 2);
        }
        var t = {}.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor) {
          t = e.constructor.name;
        }
        if (t === "Map" || t === "Set") {
          return Array.from(e);
        } else if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) {
          return ho(e, 2);
        } else {
          return undefined;
        }
      }
    }(r) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
    var i = n[0];
    var a = n[1];
    return {
      isAnimating: i,
      handleAnimationStart: (0, tS.useCallback)(() => {
        if (typeof e == "function") {
          e();
        }
        a(true);
      }, [e]),
      handleAnimationEnd: (0, tS.useCallback)(() => {
        if (typeof t == "function") {
          t();
        }
        a(false);
      }, [t])
    };
  }], 56383);
  var hu = tS["useId".toString()] ?? (() => {
    var e;
    return (function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(e = tS.useState(() => eU("uid-"))) || function (e) {
      var t = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (t != null) {
        var r;
        var n;
        var i;
        var a;
        var o = [];
        var l = true;
        var u = false;
        try {
          i = (t = t.call(e)).next;
          false;
          for (; !(l = (r = i.call(t)).done) && (o.push(r.value), o.length !== 1); l = true);
        } catch (e) {
          u = true;
          n = e;
        } finally {
          try {
            if (!l && t.return != null && (a = t.return(), Object(a) !== a)) {
              return;
            }
          } finally {
            if (u) {
              throw n;
            }
          }
        }
        return o;
      }
    }(e) || function (e) {
      if (e) {
        if (typeof e == "string") {
          return hl(e, 1);
        }
        var t = {}.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor) {
          t = e.constructor.name;
        }
        if (t === "Map" || t === "Set") {
          return Array.from(e);
        } else if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) {
          return hl(e, 1);
        } else {
          return undefined;
        }
      }
    }(e) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }())[0];
  });
  e.s(["useId", 0, hu], 8316);
  var hc = (0, tS.createContext)(undefined);
  e.s(["RegisterGraphicalItemId", 0, e => {
    var t;
    var r;
    var n = e.id;
    var i = e.type;
    var a = e.children;
    t = `recharts-${i}`;
    r = hu();
    var o = n || (t ? `${t}-${r}` : r);
    return tS.createElement(hc.Provider, {
      value: o
    }, a(o));
  }], 1480);
  var hs = rJ({
    name: "graphicalItems",
    initialState: {
      cartesianItems: [],
      polarItems: []
    },
    reducers: {
      addCartesianGraphicalItem: {
        reducer(e, t) {
          e.cartesianItems.push(t.payload);
        },
        prepare: rG()
      },
      replaceCartesianGraphicalItem: {
        reducer(e, t) {
          var r = t.payload;
          var n = r.prev;
          var i = r.next;
          var a = rk(e).cartesianItems.indexOf(n);
          if (a > -1) {
            e.cartesianItems[a] = i;
          }
        },
        prepare: rG()
      },
      removeCartesianGraphicalItem: {
        reducer(e, t) {
          var r = rk(e).cartesianItems.indexOf(t.payload);
          if (r > -1) {
            e.cartesianItems.splice(r, 1);
          }
        },
        prepare: rG()
      },
      addPolarGraphicalItem: {
        reducer(e, t) {
          e.polarItems.push(t.payload);
        },
        prepare: rG()
      },
      removePolarGraphicalItem: {
        reducer(e, t) {
          var r = rk(e).polarItems.indexOf(t.payload);
          if (r > -1) {
            e.polarItems.splice(r, 1);
          }
        },
        prepare: rG()
      },
      replacePolarGraphicalItem: {
        reducer(e, t) {
          var r = t.payload;
          var n = r.prev;
          var i = r.next;
          var a = rk(e).polarItems.indexOf(n);
          if (a > -1) {
            e.polarItems[a] = i;
          }
        },
        prepare: rG()
      }
    }
  });
  var hf = hs.actions;
  var hd = hf.addCartesianGraphicalItem;
  var hp = hf.replaceCartesianGraphicalItem;
  var hh = hf.removeCartesianGraphicalItem;
  var hy = hf.addPolarGraphicalItem;
  var hv = hf.removePolarGraphicalItem;
  var hm = hf.replacePolarGraphicalItem;
  var hg = hs.reducer;
  var hb = (0, tS.memo)(e => {
    var t = tk();
    var r = (0, tS.useRef)(null);
    (0, tS.useLayoutEffect)(() => {
      if (r.current === null) {
        t(hd(e));
      } else if (r.current !== e) {
        t(hp({
          prev: r.current,
          next: e
        }));
      }
      r.current = e;
    }, [t, e]);
    (0, tS.useLayoutEffect)(() => () => {
      if (r.current) {
        t(hh(r.current));
        r.current = null;
      }
    }, [t]);
    return null;
  });
  var hx = (0, tS.memo)(e => {
    var t = tk();
    var r = (0, tS.useRef)(null);
    (0, tS.useLayoutEffect)(() => {
      if (r.current === null) {
        t(hy(e));
      } else if (r.current !== e) {
        t(hm({
          prev: r.current,
          next: e
        }));
      }
      r.current = e;
    }, [t, e]);
    (0, tS.useLayoutEffect)(() => () => {
      if (r.current) {
        t(hv(r.current));
        r.current = null;
      }
    }, [t]);
    return null;
  });
  e.s(["SetCartesianGraphicalItem", 0, hb, "SetPolarGraphicalItem", 0, hx], 4874);
  var hw = e.i(16568);
  var hO = ea(e => e.zIndex.zIndexMap, (e, t) => t, (e, t, r) => r, (e, t, r) => {
    if (t != null) {
      var n = e[t];
      if (n != null) {
        if (r) {
          return n.panoramaElement;
        } else {
          return n.element;
        }
      }
    }
  });
  var hA = ea(e => e.zIndex.zIndexMap, e => Array.from(new Set(Object.keys(e).map(e => parseInt(e, 10)).concat(Object.values(iI)))).sort((e, t) => e - t), {
    memoizeOptions: {
      resultEqualityCheck: function (e, t) {
        if (e.length === t.length) {
          for (var r = 0; r < e.length; r++) {
            if (e[r] !== t[r]) {
              return false;
            }
          }
          return true;
        }
        return false;
      }
    }
  });
  function hS(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function hE(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        hS(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        hS(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  var hP = {
    zIndexMap: Object.values(iI).reduce((e, t) => hE(hE({}, e), {}, {
      [t]: {
        element: undefined,
        panoramaElement: undefined,
        consumers: 0
      }
    }), {})
  };
  var hj = new Set(Object.values(iI));
  var hk = rJ({
    name: "zIndex",
    initialState: hP,
    reducers: {
      registerZIndexPortal: {
        reducer: (e, t) => {
          var r = t.payload.zIndex;
          if (e.zIndexMap[r]) {
            e.zIndexMap[r].consumers += 1;
          } else {
            e.zIndexMap[r] = {
              consumers: 1,
              element: undefined,
              panoramaElement: undefined
            };
          }
        },
        prepare: rG()
      },
      unregisterZIndexPortal: {
        reducer: (e, t) => {
          var r = t.payload.zIndex;
          if (e.zIndexMap[r]) {
            e.zIndexMap[r].consumers -= 1;
            if (e.zIndexMap[r].consumers <= 0 && !hj.has(r)) {
              delete e.zIndexMap[r];
            }
          }
        },
        prepare: rG()
      },
      registerZIndexPortalElement: {
        reducer: (e, t) => {
          var r = t.payload;
          var n = r.zIndex;
          var i = r.element;
          var a = r.isPanorama;
          if (e.zIndexMap[n]) {
            if (a) {
              e.zIndexMap[n].panoramaElement = i;
            } else {
              e.zIndexMap[n].element = i;
            }
          } else {
            e.zIndexMap[n] = {
              consumers: 0,
              element: a ? undefined : i,
              panoramaElement: a ? i : undefined
            };
          }
        },
        prepare: rG()
      },
      unregisterZIndexPortalElement: {
        reducer: (e, t) => {
          var r = t.payload.zIndex;
          if (e.zIndexMap[r]) {
            if (t.payload.isPanorama) {
              e.zIndexMap[r].panoramaElement = undefined;
            } else {
              e.zIndexMap[r].element = undefined;
            }
          }
        },
        prepare: rG()
      }
    }
  });
  var hI = hk.actions;
  var hC = hI.registerZIndexPortal;
  var hT = hI.unregisterZIndexPortal;
  var hM = hI.registerZIndexPortalElement;
  var h_ = hI.unregisterZIndexPortalElement;
  var hD = hk.reducer;
  function hN(e) {
    var t = e.zIndex;
    var r = e.children;
    var n = n4() && t !== undefined && t !== 0;
    var i = nC();
    var a = (0, tS.useRef)(undefined);
    var o = (0, tS.useRef)(new Set());
    var l = tk();
    var u = tM(e => hO(e, t, i));
    (0, tS.useLayoutEffect)(() => {
      if (!n) {
        var e = o.current;
        e.forEach(e => {
          l(hT({
            zIndex: e
          }));
        });
        e.clear();
        a.current = undefined;
        return;
      }
      if (!o.current.has(t)) {
        l(hC({
          zIndex: t
        }));
        o.current.add(t);
      }
      if (u) {
        a.current = u;
        var r = o.current;
        r.forEach(e => {
          if (e !== t) {
            l(hT({
              zIndex: e
            }));
            r.delete(e);
          }
        });
      }
    }, [l, t, n, u]);
    (0, tS.useLayoutEffect)(() => {
      var e = o.current;
      return () => {
        e.forEach(e => {
          l(hT({
            zIndex: e
          }));
        });
        e.clear();
      };
    }, [l]);
    if (!n) {
      return r;
    }
    var c = u ?? a.current;
    if (c) {
      return (0, hw.createPortal)(r, c);
    } else {
      return null;
    }
  }
  e.s(["ZIndexLayer", 0, hN], 35304);
  var hL = ["labelRef"];
  var hR = ["content"];
  function hz(e, t) {
    if (e == null) {
      return {};
    }
    var r;
    var n;
    var i = function (e, t) {
      if (e == null) {
        return {};
      }
      var r = {};
      for (var n in e) {
        if ({}.hasOwnProperty.call(e, n)) {
          if (t.indexOf(n) !== -1) {
            continue;
          }
          r[n] = e[n];
        }
      }
      return r;
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) {
        r = a[n];
        if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
          i[r] = e[r];
        }
      }
    }
    return i;
  }
  function hB(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function hF(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        hB(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        hB(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function hU() {
    return (hU = Object.assign.bind()).apply(null, arguments);
  }
  var h$ = (0, tS.createContext)(null);
  var hK = () => {
    var e = (0, tS.useContext)(h$);
    var t = nQ();
    return e || (t ? eJ(t) : undefined);
  };
  var hW = (0, tS.createContext)(null);
  var hV = e => e != null && typeof e == "function";
  var hH = e => e != null && "cx" in e && ez(e.cx);
  var hG = {
    angle: 0,
    offset: 5,
    zIndex: iI.label,
    position: "middle",
    textBreakAll: false
  };
  function hY(e) {
    var t;
    var r;
    var n;
    var i;
    var a;
    var o;
    var l;
    var c;
    var s;
    var f;
    var d = fI(e, hG);
    var p = d.viewBox;
    var h = d.parentViewBox;
    var y = d.position;
    var v = d.value;
    var m = d.children;
    var g = d.content;
    var b = d.className;
    var x = d.textBreakAll;
    var w = d.labelRef;
    t = (0, tS.useContext)(hW);
    r = tM(iH);
    var O = t || r;
    var A = hK();
    var S = function (e) {
      if (!hH(e)) {
        return e;
      }
      var t = e.cx;
      var r = e.cy;
      var n = e.outerRadius;
      var i = n * 2;
      return {
        x: t - n,
        y: r - n,
        width: i,
        upperWidth: i,
        lowerWidth: i,
        height: i
      };
    }(c = p == null ? y === "center" ? A : O ?? A : hH(p) ? p : eJ(p));
    if (!c || eH(v) && eH(m) && !(0, tS.isValidElement)(g) && typeof g != "function") {
      return null;
    }
    var E = hH(c) && (y === "insideStart" || y === "insideEnd" || y === "end");
    if (hH(c)) {
      if (!E) {
        f = ((e, t, r) => {
          var n = e.cx;
          var i = e.cy;
          var a = e.innerRadius;
          var o = e.outerRadius;
          var l = (e.startAngle + e.endAngle) / 2;
          if (r === "outside") {
            var u = iP(n, i, o + t, l);
            var c = u.x;
            return {
              x: c,
              y: u.y,
              textAnchor: c >= n ? "start" : "end",
              verticalAnchor: "middle"
            };
          }
          if (r === "center") {
            return {
              x: n,
              y: i,
              textAnchor: "middle",
              verticalAnchor: "middle"
            };
          }
          if (r === "centerTop") {
            return {
              x: n,
              y: i,
              textAnchor: "middle",
              verticalAnchor: "start"
            };
          }
          if (r === "centerBottom") {
            return {
              x: n,
              y: i,
              textAnchor: "middle",
              verticalAnchor: "end"
            };
          }
          var s = iP(n, i, (a + o) / 2, l);
          return {
            x: s.x,
            y: s.y,
            textAnchor: "middle",
            verticalAnchor: "middle"
          };
        })(c, d.offset, d.position);
      }
    } else if (S) {
      var P = e2({
        viewBox: S,
        position: y,
        offset: d.offset,
        parentViewBox: hH(h) ? undefined : h,
        clamp: true
      });
      f = hF(hF({
        x: P.x,
        y: P.y,
        textAnchor: P.horizontalAnchor,
        verticalAnchor: P.verticalAnchor
      }, P.width !== undefined ? {
        width: P.width
      } : {}), P.height !== undefined ? {
        height: P.height
      } : {});
    }
    var j = hF(hF(hF(hF({}, ((o = f) == null ? undefined : o.x) !== undefined ? {
      x: f.x
    } : {}), ((l = f) == null ? undefined : l.y) !== undefined ? {
      y: f.y
    } : {}), d), {}, {
      viewBox: c
    });
    if ((0, tS.isValidElement)(g)) {
      j.labelRef;
      var k = hz(j, hL);
      return (0, tS.cloneElement)(g, k);
    }
    if (typeof g == "function") {
      j.content;
      var I = hz(j, hR);
      s = (0, tS.createElement)(g, I);
      if ((0, tS.isValidElement)(s)) {
        return s;
      }
    } else {
      n = d.value;
      i = d.formatter;
      a = eH(d.children) ? n : d.children;
      s = typeof i == "function" ? i(a) : a;
    }
    var C = sq(d);
    if (E && hH(c)) {
      return ((e, t, r, n, i) => {
        var a;
        var o;
        var l = e.offset;
        var c = e.className;
        var s = i.cx;
        var f = i.cy;
        var d = i.innerRadius;
        var p = i.outerRadius;
        var h = i.startAngle;
        var y = i.endAngle;
        var v = i.clockWise;
        var m = (d + p) / 2;
        var g = eN(y - h) * Math.min(Math.abs(y - h), 360);
        var b = g >= 0 ? 1 : -1;
        switch (t) {
          case "insideStart":
            a = h + b * l;
            o = v;
            break;
          case "insideEnd":
            a = y - b * l;
            o = !v;
            break;
          case "end":
            a = y + b * l;
            o = v;
            break;
          default:
            throw Error(`Unsupported position ${t}`);
        }
        o = g <= 0 ? o : !o;
        var x = iP(s, f, m, a);
        var w = iP(s, f, m, a + (o ? 1 : -1) * 359);
        var O = `M${x.x},${x.y}
    A${m},${m},0,1,${+!o},
    ${w.x},${w.y}`;
        var A = eH(e.id) ? eU("recharts-radial-line-") : e.id;
        return tS.createElement("text", hU({}, n, {
          dominantBaseline: "central",
          className: u("recharts-radial-bar-label", c)
        }), tS.createElement("defs", null, tS.createElement("path", {
          id: A,
          d: O
        })), tS.createElement("textPath", {
          xlinkHref: `#${A}`
        }, r));
      })(d, y, s, C, c);
    } else if (f == null) {
      return null;
    } else {
      return tS.createElement(hN, {
        zIndex: d.zIndex
      }, tS.createElement(dc, hU({
        ref: w,
        className: u("recharts-label", b === undefined ? "" : b)
      }, C, f, {
        textAnchor: de(C.textAnchor) ? C.textAnchor : f.textAnchor,
        breakAll: x
      }), s));
    }
  }
  hY.displayName = "Label";
  e.s(["CartesianLabelContextProvider", 0, e => {
    var t = e.x;
    var r = e.y;
    var n = e.upperWidth;
    var i = e.lowerWidth;
    var a = e.width;
    var o = e.height;
    var l = e.children;
    var u = (0, tS.useMemo)(() => ({
      x: t,
      y: r,
      upperWidth: n,
      lowerWidth: i,
      width: a,
      height: o
    }), [t, r, n, i, a, o]);
    return tS.createElement(h$.Provider, {
      value: u
    }, l);
  }, "CartesianLabelFromLabelProp", 0, function (e) {
    var t = e.label;
    var r = e.labelRef;
    return ((e, t, r) => {
      if (!e) {
        return null;
      }
      var n = {
        viewBox: t,
        labelRef: r
      };
      if (e === true) {
        return tS.createElement(hY, hU({
          key: "label-implicit"
        }, n));
      } else if (eB(e)) {
        return tS.createElement(hY, hU({
          key: "label-implicit",
          value: e
        }, n));
      } else if ((0, tS.isValidElement)(e)) {
        if (e.type === hY) {
          return (0, tS.cloneElement)(e, hF({
            key: "label-implicit"
          }, n));
        } else {
          return tS.createElement(hY, hU({
            key: "label-implicit",
            content: e
          }, n));
        }
      } else if (hV(e)) {
        return tS.createElement(hY, hU({
          key: "label-implicit",
          content: e
        }, n));
      } else if (e && typeof e == "object") {
        return tS.createElement(hY, hU({}, e, {
          key: "label-implicit"
        }, n));
      } else {
        return null;
      }
    })(t, hK(), r) || null;
  }, "Label", 0, hY, "PolarLabelContextProvider", 0, e => {
    var t = e.cx;
    var r = e.cy;
    var n = e.innerRadius;
    var i = e.outerRadius;
    var a = e.startAngle;
    var o = e.endAngle;
    var l = e.clockWise;
    var u = e.children;
    var c = (0, tS.useMemo)(() => ({
      cx: t,
      cy: r,
      innerRadius: n,
      outerRadius: i,
      startAngle: a,
      endAngle: o,
      clockWise: l
    }), [t, r, n, i, a, o, l]);
    return tS.createElement(hW.Provider, {
      value: c
    }, u);
  }, "isLabelContentAFunction", 0, hV], 20722);
  var hq = ["valueAccessor"];
  var hX = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
  function hZ() {
    return (hZ = Object.assign.bind()).apply(null, arguments);
  }
  function hQ(e, t) {
    if (e == null) {
      return {};
    }
    var r;
    var n;
    var i = function (e, t) {
      if (e == null) {
        return {};
      }
      var r = {};
      for (var n in e) {
        if ({}.hasOwnProperty.call(e, n)) {
          if (t.indexOf(n) !== -1) {
            continue;
          }
          r[n] = e[n];
        }
      }
      return r;
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) {
        r = a[n];
        if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
          i[r] = e[r];
        }
      }
    }
    return i;
  }
  var hJ = e => {
    var t = Array.isArray(e.value) ? e.value[e.value.length - 1] : e.value;
    if (dt(t)) {
      return t;
    }
  };
  var h0 = (0, tS.createContext)(undefined);
  var h1 = h0.Provider;
  var h2 = (0, tS.createContext)(undefined);
  var h5 = h2.Provider;
  function h3(e) {
    var t = e.valueAccessor;
    var r = t === undefined ? hJ : t;
    var n = hQ(e, hq);
    var i = n.dataKey;
    n.clockWise;
    var a = n.id;
    var o = n.textBreakAll;
    var l = n.zIndex;
    var u = hQ(n, hX);
    var c = (0, tS.useContext)(h0);
    var s = (0, tS.useContext)(h2);
    var f = c || s;
    if (f && f.length) {
      return tS.createElement(hN, {
        zIndex: l ?? iI.label
      }, tS.createElement(sQ, {
        className: "recharts-label-list"
      }, f.map((e, t) => {
        var c = eH(i) ? r(e, t) : e8(e.payload, i);
        var s = eH(a) ? {} : {
          id: `${a}-${t}`
        };
        return tS.createElement(hY, hZ({
          key: `label-${t}`
        }, sq(e), u, s, {
          fill: n.fill ?? e.fill,
          parentViewBox: e.parentViewBox,
          value: c,
          textBreakAll: o,
          viewBox: e.viewBox,
          index: t,
          zIndex: 0
        }));
      })));
    } else {
      return null;
    }
  }
  h3.displayName = "LabelList";
  e.s(["CartesianLabelListContextProvider", 0, h1, "LabelListFromLabelProp", 0, function (e) {
    var t = e.label;
    if (t) {
      if (t === true) {
        return tS.createElement(h3, {
          key: "labelList-implicit"
        });
      } else if (tS.isValidElement(t) || hV(t)) {
        return tS.createElement(h3, {
          key: "labelList-implicit",
          content: t
        });
      } else if (typeof t == "object") {
        return tS.createElement(h3, hZ({
          key: "labelList-implicit"
        }, t, {
          type: String(t.type)
        }));
      } else {
        return null;
      }
    } else {
      return null;
    }
  }, "PolarLabelListContextProvider", 0, h5], 64237);
  e.s(["getClassNameFromUnknown", 0, function (e) {
    if (e && typeof e == "object" && "className" in e && typeof e.className == "string") {
      return e.className;
    } else {
      return "";
    }
  }], 9919);
  var h6 = rJ({
    name: "options",
    initialState: {
      chartName: "",
      tooltipPayloadSearcher: () => undefined,
      eventEmitter: undefined,
      defaultTooltipEventType: "axis"
    },
    reducers: {
      createEventEmitter: e => {
        if (e.eventEmitter == null) {
          e.eventEmitter = Symbol("rechartsEventEmitter");
        }
      }
    }
  });
  var h4 = h6.reducer;
  var h8 = h6.actions.createEventEmitter;
  e.s(["arrayTooltipSearcher", 0, (e, t) => {
    if (t && Array.isArray(e)) {
      var r = Number.parseInt(t, 10);
      if (!eL(r)) {
        return e[r];
      }
    }
  }, "createEventEmitter", 0, h8, "optionsReducer", 0, h4], 62123);
  e.i(66854);
  var h7 = {
    notify() {},
    get: () => []
  };
  var h9 = typeof window !== "undefined" && window.document !== undefined && window.document.createElement !== undefined;
  var ye = typeof navigator !== "undefined" && navigator.product === "ReactNative";
  var yt = h9 || ye ? tS.useLayoutEffect : tS.useEffect;
  function yr(e, t) {
    if (e === t) {
      return e !== 0 || t !== 0 || 1 / e == 1 / t;
    } else {
      return e != e && t != t;
    }
  }
  var yn = Symbol.for("react-redux-context");
  var yi = typeof globalThis !== "undefined" ? globalThis : {};
  var ya = function () {
    if (!tS.createContext) {
      return {};
    }
    let e = yi[yn] ??= new Map();
    let t = e.get(tS.createContext);
    if (!t) {
      t = tS.createContext(null);
      e.set(tS.createContext, t);
    }
    return t;
  }();
  function yo(e) {
    let {
      children: t,
      context: r,
      serverState: n,
      store: i
    } = e;
    let a = tS.useMemo(() => {
      let e = function (e) {
        let t;
        let r = h7;
        let n = 0;
        let i = false;
        function a() {
          if (u.onStateChange) {
            u.onStateChange();
          }
        }
        function o() {
          n++;
          if (!t) {
            let n;
            let i;
            t = e.subscribe(a);
            n = null;
            i = null;
            r = {
              clear() {
                n = null;
                i = null;
              },
              notify() {
                let e = n;
                while (e) {
                  e.callback();
                  e = e.next;
                }
              },
              get() {
                let e = [];
                let t = n;
                while (t) {
                  e.push(t);
                  t = t.next;
                }
                return e;
              },
              subscribe(e) {
                let t = true;
                let r = i = {
                  callback: e,
                  next: null,
                  prev: i
                };
                if (r.prev) {
                  r.prev.next = r;
                } else {
                  n = r;
                }
                return function () {
                  if (t && n !== null) {
                    t = false;
                    if (r.next) {
                      r.next.prev = r.prev;
                    } else {
                      i = r.prev;
                    }
                    if (r.prev) {
                      r.prev.next = r.next;
                    } else {
                      n = r.next;
                    }
                  }
                };
              }
            };
          }
        }
        function l() {
          n--;
          if (t && n === 0) {
            t();
            t = undefined;
            r.clear();
            r = h7;
          }
        }
        let u = {
          addNestedSub: function (e) {
            o();
            let t = r.subscribe(e);
            let n = false;
            return () => {
              if (!n) {
                n = true;
                t();
                l();
              }
            };
          },
          notifyNestedSubs: function () {
            r.notify();
          },
          handleChangeWrapper: a,
          isSubscribed: function () {
            return i;
          },
          trySubscribe: function () {
            if (!i) {
              i = true;
              o();
            }
          },
          tryUnsubscribe: function () {
            if (i) {
              i = false;
              l();
            }
          },
          getListeners: () => r
        };
        return u;
      }(i);
      return {
        store: i,
        subscription: e,
        getServerState: n ? () => n : undefined
      };
    }, [i, n]);
    let o = tS.useMemo(() => i.getState(), [i]);
    yt(() => {
      let {
        subscription: e
      } = a;
      e.onStateChange = e.notifyNestedSubs;
      e.trySubscribe();
      if (o !== i.getState()) {
        e.notifyNestedSubs();
      }
      return () => {
        e.tryUnsubscribe();
        e.onStateChange = undefined;
      };
    }, [a, o]);
    return tS.createElement((r || ya).Provider, {
      value: a
    }, t);
  }
  function yl(e = ya) {
    return function () {
      return tS.useContext(e);
    };
  }
  var yu = yl();
  var yc = rJ({
    name: "chartData",
    initialState: {
      chartData: undefined,
      computedData: undefined,
      dataStartIndex: 0,
      dataEndIndex: 0
    },
    reducers: {
      setChartData(e, t) {
        e.chartData = t.payload;
        if (t.payload == null) {
          e.dataStartIndex = 0;
          e.dataEndIndex = 0;
          return;
        }
        if (t.payload.length > 0 && e.dataEndIndex !== t.payload.length - 1) {
          e.dataEndIndex = t.payload.length - 1;
        }
      },
      setComputedData(e, t) {
        e.computedData = t.payload;
      },
      setDataStartEndIndexes(e, t) {
        var r = t.payload;
        var n = r.startIndex;
        var i = r.endIndex;
        if (n != null) {
          e.dataStartIndex = n;
        }
        if (i != null) {
          e.dataEndIndex = i;
        }
      }
    }
  });
  var ys = yc.actions;
  var yf = ys.setChartData;
  var yd = ys.setDataStartEndIndexes;
  ys.setComputedData;
  var yp = yc.reducer;
  function yh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function yy(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        yh(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        yh(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  var yv = (e, t, r, n, i) => {
    var a = (t == null ? undefined : t.length) ?? 0;
    if (a <= 1 || e == null) {
      return 0;
    }
    if (n === "angleAxis" && i != null && Math.abs(Math.abs(i[1] - i[0]) - 360) <= 0.000001) {
      var o = i[1] - i[0];
      var l = (t, r, n) => [e, e + o, e - o].some(e => (n ? e >= t : e > t) && e <= r);
      for (var u = 0; u < a; u++) {
        var c;
        var s = u > 0 ? (y = r[u - 1]) == null ? undefined : y.coordinate : (v = r[a - 1]) == null ? undefined : v.coordinate;
        var f = (m = r[u]) == null ? undefined : m.coordinate;
        var d = u >= a - 1 ? (g = r[0]) == null ? undefined : g.coordinate : (b = r[u + 1]) == null ? undefined : b.coordinate;
        var p = undefined;
        if (s != null && f != null && d != null) {
          if (eN(f - s) !== eN(d - f)) {
            var y;
            var v;
            var m;
            var g;
            var b;
            var x;
            var w = [];
            if (eN(d - f) === eN(i[1] - i[0])) {
              p = d;
              var O = f + i[1] - i[0];
              w[0] = Math.min(O, (O + s) / 2);
              w[1] = Math.max(O, (O + s) / 2);
            } else {
              p = s;
              var A = d + i[1] - i[0];
              w[0] = Math.min(f, (A + f) / 2);
              w[1] = Math.max(f, (A + f) / 2);
            }
            var S = [Math.min(f, (p + f) / 2), Math.max(f, (p + f) / 2)];
            if (l(S[0], S[1], false) || l(w[0], w[1], true)) {
              if ((x = r[u]) == null) {
                return undefined;
              } else {
                return x.index;
              }
            }
          } else if (l((Math.min(s, d) + f) / 2, (Math.max(s, d) + f) / 2, false)) {
            if ((c = r[u]) == null) {
              return undefined;
            } else {
              return c.index;
            }
          }
        }
      }
    } else if (t) {
      for (var E = 0; E < a; E++) {
        var P = t[E];
        if (P != null) {
          var j = t[E + 1];
          var k = t[E - 1];
          if (E === 0 && j != null && e <= (P.coordinate + j.coordinate) / 2 || E === a - 1 && k != null && e > (P.coordinate + k.coordinate) / 2 || E > 0 && E < a - 1 && k != null && j != null && e > (P.coordinate + k.coordinate) / 2 && e <= (P.coordinate + j.coordinate) / 2) {
            return P.index;
          }
        }
      }
    }
    return -1;
  };
  var ym = () => tM(ib);
  var yg = (e, t) => t;
  var yb = (e, t, r) => r;
  var yx = (e, t, r, n) => n;
  var yw = ea(pw, e => eA(e, e => e.coordinate));
  var yO = ea([dV, yg, yb, yx], dF);
  var yA = ea([yO, d5, ck, pd], dU);
  var yS = (e, t, r) => {
    if (t != null) {
      var n = dV(e);
      if (t === "axis") {
        if (r === "hover") {
          return n.axisInteraction.hover.dataKey;
        } else {
          return n.axisInteraction.click.dataKey;
        }
      } else if (r === "hover") {
        return n.itemInteraction.hover.dataKey;
      } else {
        return n.itemInteraction.click.dataKey;
      }
    }
  };
  var yE = ea([dV, yg, yb, yx], dK);
  var yP = ea([tc, ts, n5, tb, pw, yx, yE], d$);
  var yj = ea([yO, yP], (e, t) => {
    return e.coordinate ?? t;
  });
  var yk = ea([pw, yA], dR);
  var yI = ea([yE, yA, el, ck, yk, dW, yg], dq);
  var yC = ea([yO, yA], (e, t) => ({
    isActive: e.active && t != null,
    activeIndex: t
  }));
  var yT = (e, t, r, n, i, a, o, l) => {
    if (e && t && n && i && a) {
      if (t === "horizontal" || t === "vertical") {
        var u = e;
        var c = t;
        var s = n;
        var f = i;
        var d = a;
        var p = o;
        var h = l;
        if (u && s && f && d && (y = u.relativeX, v = u.relativeY, y >= h.left && y <= h.left + h.width && v >= h.top && v <= h.top + h.height)) {
          var y;
          var v;
          var m = yv(tl(u, c), p, d, s, f);
          var g = ((e, t, r, n) => {
            var i = t.find(e => e && e.index === r);
            if (i) {
              if (e === "horizontal") {
                return {
                  x: i.coordinate,
                  y: n.relativeY
                };
              }
              if (e === "vertical") {
                return {
                  x: n.relativeX,
                  y: i.coordinate
                };
              }
            }
            return {
              x: 0,
              y: 0
            };
          })(c, d, m, u);
          return {
            activeIndex: String(m),
            activeCoordinate: g
          };
        }
        return;
      }
      if (e && n && i && a && r) {
        var b = ik(e, r);
        if (b) {
          var x = yv(tu(b, t), o, a, n, i);
          var w = ((e, t, r, n) => {
            var i = t.find(e => e && e.index === r);
            if (i) {
              if (e === "centric") {
                var a = i.coordinate;
                var o = n.radius;
                return yy(yy(yy({}, n), iP(n.cx, n.cy, o, a)), {}, {
                  angle: a,
                  radius: o
                });
              }
              var l = i.coordinate;
              var u = n.angle;
              return yy(yy(yy({}, n), iP(n.cx, n.cy, l, u)), {}, {
                angle: u,
                radius: l
              });
            }
            return {
              angle: 0,
              clockWise: false,
              cx: 0,
              cy: 0,
              endAngle: 0,
              innerRadius: 0,
              outerRadius: 0,
              radius: 0,
              startAngle: 0,
              x: 0,
              y: 0
            };
          })(t, a, x, b);
          return {
            activeIndex: String(x),
            activeCoordinate: w
          };
        }
        return;
      }
    }
  };
  e.s(["combineActiveProps", 0, yT, "selectActiveCoordinate", 0, yj, "selectActiveLabel", 0, yk, "selectCoordinateForDefaultIndex", 0, yP, "selectIsTooltipActive", 0, yC, "selectOrderedTooltipTicks", 0, yw, "selectTooltipDataKey", 0, yS, "selectTooltipPayload", 0, yI, "useChartName", 0, ym], 59179);
  var yM = ea([(e, t) => t, n5, iH, i0, pv, pw, yw, tb], yT);
  function y_(e) {
    var t;
    var r;
    var n = e.currentTarget.getBoundingClientRect();
    if ("getBBox" in e.currentTarget && typeof e.currentTarget.getBBox == "function") {
      var i = e.currentTarget.getBBox();
      t = i.width > 0 ? n.width / i.width : 1;
      r = i.height > 0 ? n.height / i.height : 1;
    } else {
      var a = e.currentTarget;
      t = a.offsetWidth > 0 ? n.width / a.offsetWidth : 1;
      r = a.offsetHeight > 0 ? n.height / a.offsetHeight : 1;
    }
    var o = (e, i) => ({
      relativeX: Math.round((e - n.left) / t),
      relativeY: Math.round((i - n.top) / r)
    });
    if ("touches" in e) {
      return Array.from(e.touches).map(e => o(e.clientX, e.clientY));
    } else {
      return o(e.clientX, e.clientY);
    }
  }
  var yD = r$("mouseClick");
  var yN = nx();
  yN.startListening({
    actionCreator: yD,
    effect: (e, t) => {
      var r = e.payload;
      var n = yM(t.getState(), y_(r));
      if ((n == null ? undefined : n.activeIndex) != null) {
        t.dispatch(dI({
          activeIndex: n.activeIndex,
          activeDataKey: undefined,
          activeCoordinate: n.activeCoordinate
        }));
      }
    }
  });
  var yL = r$("mouseMove");
  var yR = nx();
  var yz = null;
  var yB = null;
  var yF = null;
  function yU(e, t) {
    if (t instanceof HTMLElement) {
      return `HTMLElement <${t.tagName} class="${t.className}">`;
    } else if (t === window) {
      return "global.window";
    } else if (e === "children" && typeof t == "object" && t !== null) {
      return "<<CHILDREN>>";
    } else {
      return t;
    }
  }
  function y$(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function yK(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        y$(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        y$(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  yR.startListening({
    actionCreator: yL,
    effect: (e, t) => {
      var r = e.payload;
      var n = t.getState().eventSettings;
      var i = n.throttleDelay;
      var a = n.throttledEvents;
      var o = a === "all" || (a == null ? undefined : a.includes("mousemove"));
      if (yz !== null) {
        cancelAnimationFrame(yz);
        yz = null;
      }
      if (yB !== null && (typeof i != "number" || !o)) {
        clearTimeout(yB);
        yB = null;
      }
      yF = y_(r);
      var l = () => {
        var e = t.getState();
        var r = dL(e, e.tooltip.settings.shared);
        if (!yF) {
          yz = null;
          yB = null;
          return;
        }
        if (r === "axis") {
          var n = yM(e, yF);
          if ((n == null ? undefined : n.activeIndex) != null) {
            t.dispatch(dk({
              activeIndex: n.activeIndex,
              activeDataKey: undefined,
              activeCoordinate: n.activeCoordinate
            }));
          } else {
            t.dispatch(dP());
          }
        }
        yz = null;
        yB = null;
      };
      if (o) {
        if (i === "raf") {
          yz = requestAnimationFrame(l);
        } else if (typeof i == "number" && yB === null) {
          yB = setTimeout(l, i);
        }
      } else {
        l();
      }
    }
  });
  var yW = rJ({
    name: "cartesianAxis",
    initialState: {
      xAxis: {},
      yAxis: {},
      zAxis: {}
    },
    reducers: {
      addXAxis: {
        reducer(e, t) {
          e.xAxis[t.payload.id] = t.payload;
        },
        prepare: rG()
      },
      replaceXAxis: {
        reducer(e, t) {
          var r = t.payload;
          var n = r.prev;
          var i = r.next;
          if (e.xAxis[n.id] !== undefined) {
            if (n.id !== i.id) {
              delete e.xAxis[n.id];
            }
            e.xAxis[i.id] = i;
          }
        },
        prepare: rG()
      },
      removeXAxis: {
        reducer(e, t) {
          delete e.xAxis[t.payload.id];
        },
        prepare: rG()
      },
      addYAxis: {
        reducer(e, t) {
          e.yAxis[t.payload.id] = t.payload;
        },
        prepare: rG()
      },
      replaceYAxis: {
        reducer(e, t) {
          var r = t.payload;
          var n = r.prev;
          var i = r.next;
          if (e.yAxis[n.id] !== undefined) {
            if (n.id !== i.id) {
              delete e.yAxis[n.id];
            }
            e.yAxis[i.id] = i;
          }
        },
        prepare: rG()
      },
      removeYAxis: {
        reducer(e, t) {
          delete e.yAxis[t.payload.id];
        },
        prepare: rG()
      },
      addZAxis: {
        reducer(e, t) {
          e.zAxis[t.payload.id] = t.payload;
        },
        prepare: rG()
      },
      replaceZAxis: {
        reducer(e, t) {
          var r = t.payload;
          var n = r.prev;
          var i = r.next;
          if (e.zAxis[n.id] !== undefined) {
            if (n.id !== i.id) {
              delete e.zAxis[n.id];
            }
            e.zAxis[i.id] = i;
          }
        },
        prepare: rG()
      },
      removeZAxis: {
        reducer(e, t) {
          delete e.zAxis[t.payload.id];
        },
        prepare: rG()
      },
      updateYAxisWidth(e, t) {
        var r = t.payload;
        var n = r.id;
        var i = r.width;
        var a = e.yAxis[n];
        if (a) {
          var l = a.widthHistory || [];
          if (l.length === 3 && l[0] === l[2] && i === l[1] && i !== a.width && Math.abs(i - (l[0] ?? 0)) <= 1) {
            return;
          }
          var u = [...l, i].slice(-3);
          e.yAxis[n] = yK(yK({}, a), {}, {
            width: i,
            widthHistory: u
          });
        }
      },
      updateXAxisHeight(e, t) {
        var r = t.payload;
        var n = r.id;
        var i = r.height;
        var a = e.xAxis[n];
        if (a) {
          var l = a.heightHistory || [];
          if (l.length === 3 && l[0] === l[2] && i === l[1] && i !== a.height && Math.abs(i - (l[0] ?? 0)) <= 1) {
            return;
          }
          var u = [...l, i].slice(-3);
          e.xAxis[n] = yK(yK({}, a), {}, {
            height: i,
            heightHistory: u
          });
        }
      }
    }
  });
  var yV = yW.actions;
  var yH = yV.addXAxis;
  var yG = yV.replaceXAxis;
  var yY = yV.removeXAxis;
  var yq = yV.addYAxis;
  var yX = yV.replaceYAxis;
  var yZ = yV.removeYAxis;
  yV.addZAxis;
  yV.replaceZAxis;
  yV.removeZAxis;
  var yQ = yV.updateYAxisWidth;
  var yJ = yV.updateXAxisHeight;
  var y0 = yW.reducer;
  e.s(["addXAxis", 0, yH, "addYAxis", 0, yq, "cartesianAxisReducer", 0, y0, "defaultAxisId", 0, 0, "removeXAxis", 0, yY, "removeYAxis", 0, yZ, "replaceXAxis", 0, yG, "replaceYAxis", 0, yX, "updateXAxisHeight", 0, yJ, "updateYAxisWidth", 0, yQ], 25512);
  var y1 = rJ({
    name: "referenceElements",
    initialState: {
      dots: [],
      areas: [],
      lines: []
    },
    reducers: {
      addDot: (e, t) => {
        e.dots.push(t.payload);
      },
      removeDot: (e, t) => {
        var r = rk(e).dots.findIndex(e => e === t.payload);
        if (r !== -1) {
          e.dots.splice(r, 1);
        }
      },
      addArea: (e, t) => {
        e.areas.push(t.payload);
      },
      removeArea: (e, t) => {
        var r = rk(e).areas.findIndex(e => e === t.payload);
        if (r !== -1) {
          e.areas.splice(r, 1);
        }
      },
      addLine: (e, t) => {
        e.lines.push(t.payload);
      },
      removeLine: (e, t) => {
        var r = rk(e).lines.findIndex(e => e === t.payload);
        if (r !== -1) {
          e.lines.splice(r, 1);
        }
      }
    }
  });
  var y2 = y1.actions;
  y2.addDot;
  y2.removeDot;
  y2.addArea;
  y2.removeArea;
  y2.addLine;
  y2.removeLine;
  var y5 = y1.reducer;
  var y3 = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  };
  var y6 = rJ({
    name: "brush",
    initialState: y3,
    reducers: {
      setBrushSettings: (e, t) => t.payload == null ? y3 : t.payload
    }
  });
  y6.actions.setBrushSettings;
  var y4 = y6.reducer;
  var y8 = {
    accessibilityLayer: true,
    barCategoryGap: "10%",
    barGap: 4,
    barSize: undefined,
    className: undefined,
    maxBarSize: undefined,
    stackOffset: "none",
    syncId: undefined,
    syncMethod: "index",
    baseValue: undefined,
    reverseStackOrder: false
  };
  var y7 = rJ({
    name: "rootProps",
    initialState: y8,
    reducers: {
      updateOptions: (e, t) => {
        e.accessibilityLayer = t.payload.accessibilityLayer;
        e.barCategoryGap = t.payload.barCategoryGap;
        e.barGap = t.payload.barGap ?? y8.barGap;
        e.barSize = t.payload.barSize;
        e.maxBarSize = t.payload.maxBarSize;
        e.stackOffset = t.payload.stackOffset;
        e.syncId = t.payload.syncId;
        e.syncMethod = t.payload.syncMethod;
        e.className = t.payload.className;
        e.baseValue = t.payload.baseValue;
        e.reverseStackOrder = t.payload.reverseStackOrder;
      }
    }
  });
  var y9 = y7.reducer;
  var ve = y7.actions.updateOptions;
  var vt = rJ({
    name: "polarAxis",
    initialState: {
      radiusAxis: {},
      angleAxis: {}
    },
    reducers: {
      addRadiusAxis(e, t) {
        e.radiusAxis[t.payload.id] = t.payload;
      },
      removeRadiusAxis(e, t) {
        delete e.radiusAxis[t.payload.id];
      },
      addAngleAxis(e, t) {
        e.angleAxis[t.payload.id] = t.payload;
      },
      removeAngleAxis(e, t) {
        delete e.angleAxis[t.payload.id];
      }
    }
  });
  var vr = vt.actions;
  vr.addRadiusAxis;
  vr.removeRadiusAxis;
  vr.addAngleAxis;
  vr.removeAngleAxis;
  var vn = vt.reducer;
  var vi = rJ({
    name: "polarOptions",
    initialState: null,
    reducers: {
      updatePolarOptions: (e, t) => e === null ? t.payload : (e.startAngle = t.payload.startAngle, e.endAngle = t.payload.endAngle, e.cx = t.payload.cx, e.cy = t.payload.cy, e.innerRadius = t.payload.innerRadius, e.outerRadius = t.payload.outerRadius, e)
    }
  });
  var va = vi.actions.updatePolarOptions;
  var vo = vi.reducer;
  e.s(["polarOptionsReducer", 0, vo, "updatePolarOptions", 0, va], 62568);
  var vl = r$("keyDown");
  var vu = r$("focus");
  var vc = r$("blur");
  var vs = nx();
  var vf = null;
  var vd = null;
  var vp = null;
  function vh(e) {
    e.persist();
    var t = e.currentTarget;
    return new Proxy(e, {
      get: (e, r) => {
        if (r === "currentTarget") {
          return t;
        }
        var n = Reflect.get(e, r);
        if (typeof n == "function") {
          return n.bind(e);
        } else {
          return n;
        }
      }
    });
  }
  vs.startListening({
    actionCreator: vl,
    effect: (e, t) => {
      vp = e.payload;
      if (vf !== null) {
        cancelAnimationFrame(vf);
        vf = null;
      }
      var r = t.getState().eventSettings;
      var n = r.throttleDelay;
      var i = r.throttledEvents;
      var a = i === "all" || i.includes("keydown");
      if (vd !== null && (typeof n != "number" || !a)) {
        clearTimeout(vd);
        vd = null;
      }
      var o = () => {
        try {
          var e;
          var r = t.getState();
          if (r.rootProps.accessibilityLayer === false) {
            return;
          }
          var n = r.tooltip.keyboardInteraction;
          var i = vp;
          if (i !== "ArrowRight" && i !== "ArrowLeft" && i !== "Enter") {
            return;
          }
          var a = dU(n, d5(r), ck(r), pd(r));
          var o = a == null ? -1 : Number(a);
          var l = !Number.isFinite(o) || o < 0;
          var u = pw(r);
          var c = d5(r);
          var s = dL(r, r.tooltip.settings.shared);
          if (i === "Enter") {
            if (l) {
              return;
            }
            var f = yP(r, s, "hover", String(n.index));
            t.dispatch(dT({
              active: !n.active,
              activeIndex: n.index,
              activeCoordinate: f
            }));
            return;
          }
          var d = sB(r);
          var p = d === "left-to-right" ? 1 : -1;
          var h = i === "ArrowRight" ? 1 : -1;
          if (l) {
            var y = ck(r);
            var v = pd(r);
            var m = e => ({
              active: false,
              index: String(e),
              dataKey: undefined,
              graphicalItemId: undefined,
              coordinate: undefined
            });
            e = -1;
            if (h * p > 0) {
              for (var g = 0; g < c.length; g++) {
                if (dU(m(g), c, y, v) != null) {
                  e = g;
                  break;
                }
              }
            } else {
              for (var b = c.length - 1; b >= 0; b--) {
                if (dU(m(b), c, y, v) != null) {
                  e = b;
                  break;
                }
              }
            }
            if (e < 0) {
              return;
            }
          } else {
            e = o + h * p;
            var x = (u == null ? undefined : u.length) || c.length;
            if (x === 0 || e >= x || e < 0) {
              return;
            }
          }
          var w = yP(r, s, "hover", String(e));
          t.dispatch(dT({
            active: true,
            activeIndex: e.toString(),
            activeCoordinate: w
          }));
        } finally {
          vf = null;
          vd = null;
        }
      };
      if (a) {
        if (n === "raf") {
          vf = requestAnimationFrame(o);
        } else if (typeof n == "number" && vd === null) {
          o();
          vp = null;
          vd = setTimeout(() => {
            if (vp) {
              o();
            } else {
              vd = null;
              vf = null;
            }
          }, n);
        }
      } else {
        o();
      }
    }
  });
  vs.startListening({
    actionCreator: vu,
    effect: (e, t) => {
      var r = t.getState();
      if (r.rootProps.accessibilityLayer !== false) {
        var n = r.tooltip.keyboardInteraction;
        if (!n.active && n.index == null) {
          var i = dL(r, r.tooltip.settings.shared);
          var a = yP(r, i, "hover", String("0"));
          t.dispatch(dT({
            active: true,
            activeIndex: "0",
            activeCoordinate: a
          }));
        }
      }
    }
  });
  vs.startListening({
    actionCreator: vc,
    effect: (e, t) => {
      var r = t.getState();
      if (r.rootProps.accessibilityLayer !== false) {
        var n = r.tooltip.keyboardInteraction;
        if (n.active) {
          t.dispatch(dT({
            active: false,
            activeIndex: n.index,
            activeCoordinate: n.coordinate
          }));
        }
      }
    }
  });
  var vy = r$("externalEvent");
  var vv = nx();
  var vm = new Map();
  var vg = new Map();
  var vb = new Map();
  vv.startListening({
    actionCreator: vy,
    effect: (e, t) => {
      var r = e.payload;
      var n = r.handler;
      var i = r.reactEvent;
      if (n != null) {
        var a = i.type;
        var o = vh(i);
        vb.set(a, {
          handler: n,
          reactEvent: o
        });
        var l = vm.get(a);
        if (l !== undefined) {
          cancelAnimationFrame(l);
          vm.delete(a);
        }
        var u = t.getState().eventSettings;
        var c = u.throttleDelay;
        var s = u.throttledEvents;
        var f = s === "all" || (s == null ? undefined : s.includes(a));
        var d = vg.get(a);
        if (d !== undefined && (typeof c != "number" || !f)) {
          clearTimeout(d);
          vg.delete(a);
        }
        var p = () => {
          var e = vb.get(a);
          try {
            if (!e) {
              return;
            }
            var r = e.handler;
            var n = e.reactEvent;
            var i = t.getState();
            var o = {
              activeCoordinate: pM(i),
              activeDataKey: pk(i),
              activeIndex: pP(i),
              activeLabel: pj(i),
              activeTooltipIndex: pP(i),
              isTooltipActive: p_(i)
            };
            if (r) {
              r(o, n);
            }
          } finally {
            vm.delete(a);
            vg.delete(a);
            vb.delete(a);
          }
        };
        if (!f) {
          p();
          return;
        }
        if (c === "raf") {
          var h = requestAnimationFrame(p);
          vm.set(a, h);
        } else if (typeof c == "number") {
          if (!vg.has(a)) {
            p();
            var y = setTimeout(p, c);
            vg.set(a, y);
          }
        } else {
          p();
        }
      }
    }
  });
  var vx = ea([dV], e => e.tooltipItemPayloads);
  var vw = ea([vx, (e, t) => t, (e, t, r) => r], (e, t, r) => {
    if (t != null) {
      var n = e.find(e => e.settings.graphicalItemId === r);
      if (n != null) {
        var i = n.getPosition;
        if (i != null) {
          return i(t);
        }
      }
    }
  });
  var vO = r$("touchMove");
  var vA = nx();
  var vS = null;
  var vE = null;
  var vP = null;
  var vj = null;
  vA.startListening({
    actionCreator: vO,
    effect: (e, t) => {
      var r = e.payload;
      if (r.touches != null && r.touches.length !== 0) {
        vj = vh(r);
        var n = t.getState().eventSettings;
        var i = n.throttleDelay;
        var a = n.throttledEvents;
        var o = a === "all" || a.includes("touchmove");
        if (vS !== null) {
          cancelAnimationFrame(vS);
          vS = null;
        }
        if (vE !== null && (typeof i != "number" || !o)) {
          clearTimeout(vE);
          vE = null;
        }
        vP = Array.from(r.touches).map(e => y_({
          clientX: e.clientX,
          clientY: e.clientY,
          currentTarget: r.currentTarget
        }));
        var l = () => {
          if (vj != null) {
            var e = t.getState();
            var r = dL(e, e.tooltip.settings.shared);
            if (r === "axis") {
              var n;
              var i = (n = vP) == null ? undefined : n[0];
              if (i == null) {
                vS = null;
                vE = null;
                return;
              }
              var a = yM(e, i);
              if ((a == null ? undefined : a.activeIndex) != null) {
                t.dispatch(dk({
                  activeIndex: a.activeIndex,
                  activeDataKey: undefined,
                  activeCoordinate: a.activeCoordinate
                }));
              }
            } else if (r === "item") {
              var l = vj.touches[0];
              if (document.elementFromPoint == null || l == null) {
                return;
              }
              var u = document.elementFromPoint(l.clientX, l.clientY);
              if (!u || !u.getAttribute) {
                return;
              }
              var c = u.getAttribute(ty);
              var s = u.getAttribute(tv) ?? undefined;
              var f = dJ(e).find(e => e.id === s);
              if (c == null || f == null || s == null) {
                return;
              }
              var d = f.dataKey;
              var p = vw(e, c, s);
              t.dispatch(dS({
                activeDataKey: d,
                activeIndex: c,
                activeCoordinate: p,
                activeGraphicalItemId: s
              }));
            }
            vS = null;
            vE = null;
          }
        };
        if (!o) {
          l();
          return;
        }
        if (i === "raf") {
          vS = requestAnimationFrame(l);
        } else if (typeof i == "number" && vE === null) {
          l();
          vj = null;
          vE = setTimeout(() => {
            if (vj) {
              l();
            } else {
              vE = null;
              vS = null;
            }
          }, i);
        }
      }
    }
  });
  var vk = rJ({
    name: "errorBars",
    initialState: {},
    reducers: {
      addErrorBar: (e, t) => {
        var r = t.payload;
        var n = r.itemId;
        var i = r.errorBar;
        e[n] ||= [];
        e[n].push(i);
      },
      replaceErrorBar: (e, t) => {
        var r = t.payload;
        var n = r.itemId;
        var i = r.prev;
        var a = r.next;
        e[n] &&= e[n].map(e => e.dataKey === i.dataKey && e.direction === i.direction ? a : e);
      },
      removeErrorBar: (e, t) => {
        var r = t.payload;
        var n = r.itemId;
        var i = r.errorBar;
        e[n] &&= e[n].filter(e => e.dataKey !== i.dataKey || e.direction !== i.direction);
      }
    }
  });
  var vI = vk.actions;
  vI.addErrorBar;
  vI.replaceErrorBar;
  vI.removeErrorBar;
  var vC = vk.reducer;
  var vT = {
    throttleDelay: "raf",
    throttledEvents: ["mousemove", "touchmove", "pointermove", "scroll", "wheel"]
  };
  var vM = rJ({
    name: "eventSettings",
    initialState: vT,
    reducers: {
      setEventSettings: (e, t) => {
        if (t.payload.throttleDelay != null) {
          e.throttleDelay = t.payload.throttleDelay;
        }
        if (t.payload.throttledEvents != null) {
          e.throttledEvents = t.payload.throttledEvents;
        }
      }
    }
  });
  var v_ = vM.actions.setEventSettings;
  var vD = vM.reducer;
  e.s(["eventSettingsReducer", 0, vD, "initialEventSettingsState", 0, vT, "setEventSettings", 0, v_], 47071);
  var vN = rJ({
    name: "renderedTicks",
    initialState: {
      xAxis: {},
      yAxis: {}
    },
    reducers: {
      setRenderedTicks: (e, t) => {
        var r = t.payload;
        var n = r.axisType;
        var i = r.axisId;
        var a = r.ticks;
        e[n][i] = a;
      },
      removeRenderedTicks: (e, t) => {
        var r = t.payload;
        var n = r.axisType;
        var i = r.axisId;
        delete e[n][i];
      }
    }
  });
  var vL = vN.actions;
  var vR = vL.setRenderedTicks;
  var vz = vL.removeRenderedTicks;
  var vB = vN.reducer;
  e.s(["removeRenderedTicks", 0, vz, "renderedTicksReducer", 0, vB, "setRenderedTicks", 0, vR], 95024);
  var vF = rL({
    brush: y4,
    cartesianAxis: y0,
    chartData: yp,
    errorBars: vC,
    eventSettings: vD,
    graphicalItems: hg,
    layout: nk,
    legend: pK,
    options: h4,
    polarAxis: vn,
    polarOptions: vo,
    referenceElements: y5,
    renderedTicks: vB,
    rootProps: y9,
    tooltip: dM,
    zIndex: hD
  });
  function vU(e, t = "Chart") {
    return function (e) {
      let t;
      let r;
      let n;
      let i = function (e) {
        let {
          thunk: t = true,
          immutableCheck: r = true,
          serializableCheck: n = true,
          actionCreatorCheck: i = true
        } = e ?? {};
        let a = new rK();
        if (t) {
          if (typeof t == "boolean") {
            a.push(rF);
          } else {
            a.push(rB(t.extraArgument));
          }
        }
        return a;
      };
      let {
        reducer: a,
        middleware: o,
        devTools: l = true,
        duplicateMiddlewareCheck: u = true,
        preloadedState: c,
        enhancers: s
      } = e || {};
      if (typeof a == "function") {
        t = a;
      } else if (rN(a)) {
        t = rL(a);
      } else {
        throw Error(nw(1));
      }
      r = typeof o == "function" ? o(i) : i();
      let f = rR;
      if (l) {
        f = rU({
          trace: false,
          ...(typeof l == "object" && l)
        });
      }
      n = function (...e) {
        return t => (r, n) => {
          let i = t(r, n);
          let a = () => {
            throw Error(rT(15));
          };
          let o = {
            getState: i.getState,
            dispatch: (e, ...t) => a(e, ...t)
          };
          a = rR(...e.map(e => e(o)))(i.dispatch);
          return {
            ...i,
            dispatch: a
          };
        };
      }(...r);
      let d = function (e) {
        let {
          autoBatch: t = true
        } = e ?? {};
        let r = new rK(n);
        if (t) {
          r.push(rq(typeof t == "object" ? t : undefined));
        }
        return r;
      };
      return function e(t, r, n) {
        if (typeof t != "function") {
          throw Error(rT(2));
        }
        if (typeof r == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") {
          throw Error(rT(0));
        }
        if (typeof r == "function" && n === undefined) {
          n = r;
          r = undefined;
        }
        if (n !== undefined) {
          if (typeof n != "function") {
            throw Error(rT(1));
          }
          return n(e)(t, r);
        }
        let i = t;
        let a = r;
        let o = new Map();
        let l = o;
        let u = 0;
        let c = false;
        function s() {
          if (l === o) {
            l = new Map();
            o.forEach((e, t) => {
              l.set(t, e);
            });
          }
        }
        function f() {
          if (c) {
            throw Error(rT(3));
          }
          return a;
        }
        function d(e) {
          if (typeof e != "function") {
            throw Error(rT(4));
          }
          if (c) {
            throw Error(rT(5));
          }
          let t = true;
          s();
          let r = u++;
          l.set(r, e);
          return function () {
            if (t) {
              if (c) {
                throw Error(rT(6));
              }
              t = false;
              s();
              l.delete(r);
              o = null;
            }
          };
        }
        function p(e) {
          if (!rN(e)) {
            throw Error(rT(7));
          }
          if (e.type === undefined) {
            throw Error(rT(8));
          }
          if (typeof e.type != "string") {
            throw Error(rT(17));
          }
          if (c) {
            throw Error(rT(9));
          }
          try {
            c = true;
            a = i(a, e);
          } finally {
            c = false;
          }
          (o = l).forEach(e => {
            e();
          });
          return e;
        }
        p({
          type: rD.INIT
        });
        return {
          dispatch: p,
          subscribe: d,
          getState: f,
          replaceReducer: function (e) {
            if (typeof e != "function") {
              throw Error(rT(10));
            }
            i = e;
            p({
              type: rD.REPLACE
            });
          },
          [rM]: function () {
            return {
              subscribe(e) {
                if (typeof e != "object" || e === null) {
                  throw Error(rT(11));
                }
                function t() {
                  if (e.next) {
                    e.next(f());
                  }
                }
                t();
                return {
                  unsubscribe: d(t)
                };
              },
              [rM]() {
                return this;
              }
            };
          }
        };
      }(t, c, f(...(typeof s == "function" ? s(d) : d())));
    }({
      reducer: vF,
      preloadedState: e,
      middleware: e => e({
        serializableCheck: false,
        immutableCheck: !["commonjs", "es6", "production"].includes("es6")
      }).concat([yN.middleware, yR.middleware, vs.middleware, vv.middleware, vA.middleware]),
      enhancers: e => {
        var t = e;
        if (typeof e == "function") {
          t = e();
        }
        return t.concat(rq({
          type: "raf"
        }));
      },
      devTools: fL.devToolsEnabled && {
        serialize: {
          replacer: yU
        },
        name: `recharts-${t}`
      }
    });
  }
  e.s(["RechartsStoreProvider", 0, function (e) {
    var t = e.preloadedState;
    var r = e.children;
    var n = e.reduxStoreName;
    var i = nC();
    var a = (0, tS.useRef)(null);
    if (i) {
      return r;
    } else {
      if (a.current == null) {
        a.current = vU(t, n);
      }
      return tS.createElement(yo, {
        context: tP,
        store: a.current
      }, r);
    }
  }], 24160);
  e.s(["ChartDataContextProvider", 0, e => {
    var t = e.chartData;
    var r = tk();
    var n = nC();
    (0, tS.useEffect)(() => n ? () => {} : (r(yf(t)), () => {
      r(yf(undefined));
    }), [t, r, n]);
    return null;
  }], 99545);
  var v$ = new Set(["axisLine", "tickLine", "activeBar", "activeDot", "activeLabel", "activeShape", "allowEscapeViewBox", "background", "cursor", "dot", "label", "line", "margin", "padding", "position", "shape", "style", "tick", "wrapperStyle", "radius", "throttledEvents"]);
  function vK(e, t) {
    for (var r of new Set([...Object.keys(e), ...Object.keys(t)])) {
      if (v$.has(r)) {
        if (e[r] == null && t[r] == null) {
          continue;
        }
        if (!function (e, t) {
          if (yr(e, t)) {
            return true;
          }
          if (typeof e != "object" || e === null || typeof t != "object" || t === null) {
            return false;
          }
          let r = Object.keys(e);
          let n = Object.keys(t);
          if (r.length !== n.length) {
            return false;
          }
          for (let n = 0; n < r.length; n++) {
            if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !yr(e[r[n]], t[r[n]])) {
              return false;
            }
          }
          return true;
        }(e[r], t[r])) {
          return false;
        }
      } else {
        var n;
        var i;
        n = e[r];
        i = t[r];
        if ((n != null || i != null) && (typeof n == "number" && typeof i == "number" ? n !== i && (n == n || i == i) : n !== i)) {
          return false;
        }
      }
    }
    return true;
  }
  e.s(["propsAreEqual", 0, vK], 75436);
  var vW = (0, tS.memo)(function (e) {
    var t = e.layout;
    var r = e.margin;
    var n = tk();
    var i = nC();
    (0, tS.useEffect)(() => {
      if (!i) {
        n(nE(t));
        n(nS(r));
      }
    }, [n, i, t, r]);
    return null;
  }, vK);
  e.s(["ReportMainChartProps", 0, vW], 25367);
  e.s(["ReportChartProps", 0, function (e) {
    var t = tk();
    (0, tS.useEffect)(() => {
      t(ve(e));
    }, [t, e]);
    return null;
  }], 67775);
  var vV = (0, tS.memo)(e => {
    var t = tk();
    (0, tS.useEffect)(() => {
      t(v_(e));
    }, [t, e]);
    return null;
  }, vK);
  e.s(["ReportEventSettings", 0, vV], 19779);
  var vH = () => {
    var e;
    return (e = tM(e => e.rootProps.accessibilityLayer)) == null || e;
  };
  var vG = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
  function vY() {
    return (vY = Object.assign.bind()).apply(null, arguments);
  }
  var vq = (0, tS.forwardRef)((e, t) => {
    var r = e.children;
    var n = e.width;
    var i = e.height;
    var a = e.viewBox;
    var o = e.className;
    var l = e.style;
    var c = e.title;
    var s = e.desc;
    var f = function (e, t) {
      if (e == null) {
        return {};
      }
      var r;
      var n;
      var i = function (e, t) {
        if (e == null) {
          return {};
        }
        var r = {};
        for (var n in e) {
          if ({}.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) !== -1) {
              continue;
            }
            r[n] = e[n];
          }
        }
        return r;
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) {
          r = a[n];
          if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
            i[r] = e[r];
          }
        }
      }
      return i;
    }(e, vG);
    var d = a || {
      width: n,
      height: i,
      x: 0,
      y: 0
    };
    var p = u("recharts-surface", o);
    return tS.createElement("svg", vY({}, sq(f), {
      className: p,
      width: n,
      height: i,
      style: l,
      viewBox: `${d.x} ${d.y} ${d.width} ${d.height}`,
      ref: t
    }), tS.createElement("title", null, c), tS.createElement("desc", null, s), r);
  });
  function vX(e) {
    var t = e.zIndex;
    var r = e.isPanorama;
    var n = (0, tS.useRef)(null);
    var i = tk();
    (0, tS.useLayoutEffect)(() => {
      if (n.current) {
        i(hM({
          zIndex: t,
          element: n.current,
          isPanorama: r
        }));
      }
      return () => {
        i(h_({
          zIndex: t,
          isPanorama: r
        }));
      };
    }, [i, t, r]);
    return tS.createElement("g", {
      tabIndex: -1,
      ref: n,
      className: `recharts-zIndex-layer_${t}`
    });
  }
  function vZ(e) {
    var t = e.children;
    var r = e.isPanorama;
    var n = tM(hA);
    if (!n || n.length === 0) {
      return t;
    }
    var i = n.filter(e => e < 0);
    var a = n.filter(e => e > 0);
    return tS.createElement(tS.Fragment, null, i.map(e => tS.createElement(vX, {
      key: e,
      zIndex: e,
      isPanorama: r
    })), t, a.map(e => tS.createElement(vX, {
      key: e,
      zIndex: e,
      isPanorama: r
    })));
  }
  e.s(["Surface", 0, vq], 80164);
  var vQ = ["children"];
  function vJ() {
    return (vJ = Object.assign.bind()).apply(null, arguments);
  }
  var v0 = {
    width: "100%",
    height: "100%",
    display: "block"
  };
  var v1 = (0, tS.forwardRef)((e, t) => {
    var r;
    var n;
    var i = n1();
    var a = n2();
    var o = vH();
    if (!eQ(i) || !eQ(a)) {
      return null;
    }
    var l = e.children;
    var u = e.otherAttributes;
    var c = e.title;
    var s = e.desc;
    if (u != null) {
      r = typeof u.tabIndex == "number" ? u.tabIndex : o ? 0 : undefined;
      n = typeof u.role == "string" ? u.role : o ? "application" : undefined;
    }
    return tS.createElement(vq, vJ({}, u, {
      title: c,
      desc: s,
      role: n,
      tabIndex: r,
      width: i,
      height: a,
      style: v0,
      ref: t
    }), l);
  });
  var v2 = e => {
    var t = e.children;
    var r = tM(nM);
    if (!r) {
      return null;
    }
    var n = r.width;
    var i = r.height;
    var a = r.y;
    var o = r.x;
    return tS.createElement(vq, {
      width: n,
      height: i,
      x: o,
      y: a
    }, t);
  };
  var v5 = (0, tS.forwardRef)((e, t) => {
    var r = e.children;
    var n = function (e, t) {
      if (e == null) {
        return {};
      }
      var r;
      var n;
      var i = function (e, t) {
        if (e == null) {
          return {};
        }
        var r = {};
        for (var n in e) {
          if ({}.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) !== -1) {
              continue;
            }
            r[n] = e[n];
          }
        }
        return r;
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) {
          r = a[n];
          if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
            i[r] = e[r];
          }
        }
      }
      return i;
    }(e, vQ);
    if (nC()) {
      return tS.createElement(v2, null, tS.createElement(vZ, {
        isPanorama: true
      }, r));
    } else {
      return tS.createElement(v1, vJ({
        ref: t
      }, n), tS.createElement(vZ, {
        isPanorama: false
      }, r));
    }
  });
  var v3 = new (e.i(26326).default)();
  var v6 = "recharts.syncEvent.tooltip";
  var v4 = "recharts.syncEvent.brush";
  function v8(e) {
    return e.tooltip.syncInteraction;
  }
  var v7 = ["x", "y"];
  function v9(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function me(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        v9(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        v9(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function mt(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  var mr = (0, tS.createContext)(null);
  var mn = (0, tS.createContext)(null);
  function mi(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function ma() {
    return (ma = Object.assign.bind()).apply(null, arguments);
  }
  function mo(e, t) {
    return function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(e) || function (e, t) {
      var r = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (r != null) {
        var n;
        var i;
        var a;
        var o;
        var l = [];
        var u = true;
        var c = false;
        try {
          a = (r = r.call(e)).next;
          if (t === 0) {
            if (Object(r) !== r) {
              return;
            }
            u = false;
          } else {
            for (; !(u = (n = a.call(r)).done) && (l.push(n.value), l.length !== t); u = true);
          }
        } catch (e) {
          c = true;
          i = e;
        } finally {
          try {
            if (!u && r.return != null && (o = r.return(), Object(o) !== o)) {
              return;
            }
          } finally {
            if (c) {
              throw i;
            }
          }
        }
        return l;
      }
    }(e, t) || function (e, t) {
      if (e) {
        if (typeof e == "string") {
          return ml(e, t);
        }
        var r = {}.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor) {
          r = e.constructor.name;
        }
        if (r === "Map" || r === "Set") {
          return Array.from(e);
        } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
          return ml(e, t);
        } else {
          return undefined;
        }
      }
    }(e, t) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function ml(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  e.s(["LegendPortalContext", 0, mn, "useLegendPortal", 0, () => (0, tS.useContext)(mn)], 44835);
  var mu = () => {
    var e;
    var t;
    var r;
    var n;
    var i;
    var a;
    var o;
    var l;
    var u;
    var c;
    var s;
    var f;
    e = tk();
    (0, tS.useEffect)(() => {
      e(h8());
    }, [e]);
    t = tM(ix);
    r = tM(iO);
    n = tk();
    i = tM(iw);
    a = tM(pw);
    o = n3();
    l = nQ();
    u = tM(e => e.rootProps.className);
    (0, tS.useEffect)(() => {
      if (t == null) {
        return eq;
      }
      var e = (e, u, c) => {
        if (r !== c && t === e) {
          if (u.payload.active === false) {
            n(dC({
              active: false,
              coordinate: undefined,
              dataKey: undefined,
              index: null,
              label: undefined,
              sourceViewBox: undefined,
              graphicalItemId: undefined
            }));
            return;
          }
          if (i === "index") {
            if (l && u != null && (s = u.payload) != null && s.coordinate && u.payload.sourceViewBox) {
              var s;
              var f;
              var d = u.payload.coordinate;
              var p = d.x;
              var h = d.y;
              var y = function (e, t) {
                if (e == null) {
                  return {};
                }
                var r;
                var n;
                var i = function (e, t) {
                  if (e == null) {
                    return {};
                  }
                  var r = {};
                  for (var n in e) {
                    if ({}.hasOwnProperty.call(e, n)) {
                      if (t.indexOf(n) !== -1) {
                        continue;
                      }
                      r[n] = e[n];
                    }
                  }
                  return r;
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e);
                  for (n = 0; n < a.length; n++) {
                    r = a[n];
                    if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
                      i[r] = e[r];
                    }
                  }
                }
                return i;
              }(d, v7);
              var v = u.payload.sourceViewBox;
              var m = v.x;
              var g = v.y;
              var b = v.width;
              var x = v.height;
              var w = me(me({}, y), {}, {
                x: l.x + (b ? (p - m) / b : 0) * l.width,
                y: l.y + (x ? (h - g) / x : 0) * l.height
              });
              n(me(me({}, u), {}, {
                payload: me(me({}, u.payload), {}, {
                  coordinate: w
                })
              }));
            } else {
              n(u);
            }
            return;
          }
          if (a != null) {
            if (typeof i == "function") {
              var O = i(a, {
                activeTooltipIndex: u.payload.index == null ? undefined : Number(u.payload.index),
                isTooltipActive: u.payload.active,
                activeIndex: u.payload.index == null ? undefined : Number(u.payload.index),
                activeLabel: u.payload.label,
                activeDataKey: u.payload.dataKey,
                activeCoordinate: u.payload.coordinate
              });
              f = a[O];
            } else if (i === "value") {
              f = a.find(e => String(e.value) === u.payload.label);
            }
            var A = u.payload.coordinate;
            if (A == null || l == null) {
              n(dC({
                active: false,
                coordinate: undefined,
                dataKey: undefined,
                index: null,
                label: undefined,
                sourceViewBox: undefined,
                graphicalItemId: undefined
              }));
              return;
            }
            if (f == null) {
              n(dC({
                active: false,
                coordinate: undefined,
                dataKey: undefined,
                index: null,
                label: undefined,
                sourceViewBox: u.payload.sourceViewBox,
                graphicalItemId: undefined
              }));
              return;
            }
            var S = A.x;
            var E = A.y;
            var P = Math.min(S, l.x + l.width);
            var j = Math.min(E, l.y + l.height);
            var k = {
              x: o === "horizontal" ? f.coordinate : P,
              y: o === "horizontal" ? j : f.coordinate
            };
            n(dC({
              active: u.payload.active,
              coordinate: k,
              dataKey: u.payload.dataKey,
              index: String(f.index),
              label: u.payload.label,
              sourceViewBox: u.payload.sourceViewBox,
              graphicalItemId: u.payload.graphicalItemId
            }));
          }
        }
      };
      v3.on(v6, e);
      return () => {
        v3.off(v6, e);
      };
    }, [u, n, r, t, i, a, o, l]);
    c = tM(ix);
    s = tM(iO);
    f = tk();
    (0, tS.useEffect)(() => {
      if (c == null) {
        return eq;
      }
      var e = (e, t, r) => {
        if (s !== r && c === e) {
          f(yd(t));
        }
      };
      v3.on(v4, e);
      return () => {
        v3.off(v4, e);
      };
    }, [f, s, c]);
    return null;
  };
  function mc(e) {
    if (typeof e == "number") {
      return e;
    }
    if (typeof e == "string") {
      var t = parseFloat(e);
      if (!Number.isNaN(t)) {
        return t;
      }
    }
    return 0;
  }
  var ms = (0, tS.forwardRef)((e, t) => {
    var r;
    var n;
    var i = (0, tS.useRef)(null);
    var a = mo((0, tS.useState)({
      containerWidth: mc((r = e.style) == null ? undefined : r.width),
      containerHeight: mc((n = e.style) == null ? undefined : n.height)
    }), 2);
    var o = a[0];
    var l = a[1];
    var u = (0, tS.useCallback)((e, t) => {
      l(r => {
        var n = Math.round(e);
        var i = Math.round(t);
        if (r.containerWidth === n && r.containerHeight === i) {
          return r;
        } else {
          return {
            containerWidth: n,
            containerHeight: i
          };
        }
      });
    }, []);
    var c = (0, tS.useCallback)(e => {
      if (typeof t == "function") {
        t(e);
      }
      if (i.current != null) {
        i.current.disconnect();
        i.current = null;
      }
      if (e != null && typeof ResizeObserver !== "undefined") {
        var r = e.getBoundingClientRect();
        u(r.width, r.height);
        var n = new ResizeObserver(e => {
          var t = e[0];
          if (t != null) {
            var r = t.contentRect;
            u(r.width, r.height);
          }
        });
        n.observe(e);
        i.current = n;
      }
    }, [t, u]);
    (0, tS.useEffect)(() => () => {
      var e = i.current;
      if (e != null) {
        e.disconnect();
      }
    }, [u]);
    return tS.createElement(tS.Fragment, null, tS.createElement(n8, {
      width: o.containerWidth,
      height: o.containerHeight
    }), tS.createElement("div", ma({
      ref: c
    }, e)));
  });
  var mf = (0, tS.forwardRef)((e, t) => {
    var r = e.width;
    var n = e.height;
    var i = mo((0, tS.useState)({
      containerWidth: mc(r),
      containerHeight: mc(n)
    }), 2);
    var a = i[0];
    var o = i[1];
    var l = (0, tS.useCallback)((e, t) => {
      o(r => {
        var n = Math.round(e);
        var i = Math.round(t);
        if (r.containerWidth === n && r.containerHeight === i) {
          return r;
        } else {
          return {
            containerWidth: n,
            containerHeight: i
          };
        }
      });
    }, []);
    var u = (0, tS.useCallback)(e => {
      if (typeof t == "function") {
        t(e);
      }
      if (e != null) {
        var r = e.getBoundingClientRect();
        l(r.width, r.height);
      }
    }, [t, l]);
    return tS.createElement(tS.Fragment, null, tS.createElement(n8, {
      width: a.containerWidth,
      height: a.containerHeight
    }), tS.createElement("div", ma({
      ref: u
    }, e)));
  });
  var md = (0, tS.forwardRef)((e, t) => {
    var r = e.width;
    var n = e.height;
    return tS.createElement(tS.Fragment, null, tS.createElement(n8, {
      width: r,
      height: n
    }), tS.createElement("div", ma({
      ref: t
    }, e)));
  });
  var mp = (0, tS.forwardRef)((e, t) => {
    var r = e.width;
    var n = e.height;
    if (typeof r == "string" || typeof n == "string") {
      return tS.createElement(mf, ma({}, e, {
        ref: t
      }));
    } else if (typeof r == "number" && typeof n == "number") {
      return tS.createElement(md, ma({}, e, {
        width: r,
        height: n,
        ref: t
      }));
    } else {
      return tS.createElement(tS.Fragment, null, tS.createElement(n8, {
        width: r,
        height: n
      }), tS.createElement("div", ma({
        ref: t
      }, e)));
    }
  });
  var mh = (0, tS.forwardRef)((e, t) => {
    var r;
    var n;
    var i;
    var a;
    var o;
    var l;
    var c = e.children;
    var s = e.className;
    var f = e.height;
    var d = e.onClick;
    var p = e.onContextMenu;
    var h = e.onDoubleClick;
    var y = e.onMouseDown;
    var v = e.onMouseEnter;
    var m = e.onMouseLeave;
    var g = e.onMouseMove;
    var b = e.onMouseUp;
    var x = e.onTouchEnd;
    var w = e.onTouchMove;
    var O = e.onTouchStart;
    var A = e.style;
    var S = e.width;
    var E = e.responsive;
    var P = e.dispatchTouchEvents;
    var j = P === undefined || P;
    var k = (0, tS.useRef)(null);
    var I = tk();
    var C = mo((0, tS.useState)(null), 2);
    var T = C[0];
    var M = C[1];
    var _ = mo((0, tS.useState)(null), 2);
    var D = _[0];
    var N = _[1];
    r = tk();
    a = (i = function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(n = (0, tS.useState)(null)) || function (e) {
      var t = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (t != null) {
        var r;
        var n;
        var i;
        var a;
        var o = [];
        var l = true;
        var u = false;
        try {
          i = (t = t.call(e)).next;
          false;
          for (; !(l = (r = i.call(t)).done) && (o.push(r.value), o.length !== 2); l = true);
        } catch (e) {
          u = true;
          n = e;
        } finally {
          try {
            if (!l && t.return != null && (a = t.return(), Object(a) !== a)) {
              return;
            }
          } finally {
            if (u) {
              throw n;
            }
          }
        }
        return o;
      }
    }(n) || function (e) {
      if (e) {
        if (typeof e == "string") {
          return mt(e, 2);
        }
        var t = {}.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor) {
          t = e.constructor.name;
        }
        if (t === "Map" || t === "Set") {
          return Array.from(e);
        } else if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) {
          return mt(e, 2);
        } else {
          return undefined;
        }
      }
    }(n) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }())[0];
    o = i[1];
    l = tM(tf);
    (0, tS.useEffect)(() => {
      if (a != null) {
        var e = a.getBoundingClientRect().width / a.offsetWidth;
        if (eZ(e) && e !== l) {
          r(nj(e));
        }
      }
    }, [a, r, l]);
    var L = o;
    var R = nq();
    var z = (R == null ? undefined : R.width) > 0 ? R.width : S;
    var B = (R == null ? undefined : R.height) > 0 ? R.height : f;
    var F = (0, tS.useCallback)(e => {
      L(e);
      if (typeof t == "function") {
        t(e);
      }
      M(e);
      N(e);
      if (e != null) {
        k.current = e;
      }
    }, [L, t, M, N]);
    var U = (0, tS.useCallback)(e => {
      I(yD(e));
      I(vy({
        handler: d,
        reactEvent: e
      }));
    }, [I, d]);
    var $ = (0, tS.useCallback)(e => {
      I(yL(e));
      I(vy({
        handler: v,
        reactEvent: e
      }));
    }, [I, v]);
    var K = (0, tS.useCallback)(e => {
      I(dP());
      I(vy({
        handler: m,
        reactEvent: e
      }));
    }, [I, m]);
    var W = (0, tS.useCallback)(e => {
      I(yL(e));
      I(vy({
        handler: g,
        reactEvent: e
      }));
    }, [I, g]);
    var V = (0, tS.useCallback)(() => {
      I(vu());
    }, [I]);
    var H = (0, tS.useCallback)(() => {
      I(vc());
    }, [I]);
    var G = (0, tS.useCallback)(e => {
      I(vl(e.key));
    }, [I]);
    var Y = (0, tS.useCallback)(e => {
      I(vy({
        handler: p,
        reactEvent: e
      }));
    }, [I, p]);
    var q = (0, tS.useCallback)(e => {
      I(vy({
        handler: h,
        reactEvent: e
      }));
    }, [I, h]);
    var X = (0, tS.useCallback)(e => {
      I(vy({
        handler: y,
        reactEvent: e
      }));
    }, [I, y]);
    var Z = (0, tS.useCallback)(e => {
      I(vy({
        handler: b,
        reactEvent: e
      }));
    }, [I, b]);
    var Q = (0, tS.useCallback)(e => {
      I(vy({
        handler: O,
        reactEvent: e
      }));
    }, [I, O]);
    var J = (0, tS.useCallback)(e => {
      if (j) {
        I(vO(e));
      }
      I(vy({
        handler: w,
        reactEvent: e
      }));
    }, [I, j, w]);
    var ee = (0, tS.useCallback)(e => {
      I(vy({
        handler: x,
        reactEvent: e
      }));
    }, [I, x]);
    return tS.createElement(mr.Provider, {
      value: T
    }, tS.createElement(mn.Provider, {
      value: D
    }, tS.createElement(E ? ms : mp, {
      width: z ?? (A == null ? undefined : A.width),
      height: B ?? (A == null ? undefined : A.height),
      className: u("recharts-wrapper", s),
      style: function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t] ?? {};
          if (t % 2) {
            mi(Object(r), true).forEach(function (t) {
              var n;
              var i;
              var a;
              n = e;
              i = t;
              a = r[t];
              if ((i = function (e) {
                var t = function (e, t) {
                  if (typeof e != "object" || !e) {
                    return e;
                  }
                  var r = e[Symbol.toPrimitive];
                  if (r !== undefined) {
                    var n = r.call(e, t || "default");
                    if (typeof n != "object") {
                      return n;
                    }
                    throw TypeError("@@toPrimitive must return a primitive value.");
                  }
                  return (t === "string" ? String : Number)(e);
                }(e, "string");
                if (typeof t == "symbol") {
                  return t;
                } else {
                  return t + "";
                }
              }(i)) in n) {
                Object.defineProperty(n, i, {
                  value: a,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                n[i] = a;
              }
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
          } else {
            mi(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
          }
        }
        return e;
      }({
        position: "relative",
        cursor: "default",
        width: z,
        height: B
      }, A),
      onClick: U,
      onContextMenu: Y,
      onDoubleClick: q,
      onFocus: V,
      onBlur: H,
      onKeyDown: G,
      onMouseDown: X,
      onMouseEnter: $,
      onMouseLeave: K,
      onMouseMove: W,
      onMouseUp: Z,
      onTouchEnd: ee,
      onTouchMove: J,
      onTouchStart: Q,
      ref: F
    }, tS.createElement(mu, null), c)));
  });
  var my = ea([tb], e => ({
    top: e.top,
    bottom: e.bottom,
    left: e.left,
    right: e.right
  }));
  var mv = ea([my, tc, ts], (e, t, r) => {
    if (e && t != null && r != null) {
      return {
        x: e.left,
        y: e.top,
        width: Math.max(0, t - e.left - e.right),
        height: Math.max(0, r - e.top - e.bottom)
      };
    }
  });
  var mm = () => tM(mv);
  function mg(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  e.s(["useActiveTooltipDataPoints", 0, () => tM(pN), "usePlotArea", 0, mm], 3260);
  var mb = (0, tS.createContext)(undefined);
  var mx = e => {
    var t;
    var r = e.children;
    var n = (function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(t = (0, tS.useState)(`${eU("recharts")}-clip`)) || function (e) {
      var t = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (t != null) {
        var r;
        var n;
        var i;
        var a;
        var o = [];
        var l = true;
        var u = false;
        try {
          i = (t = t.call(e)).next;
          false;
          for (; !(l = (r = i.call(t)).done) && (o.push(r.value), o.length !== 1); l = true);
        } catch (e) {
          u = true;
          n = e;
        } finally {
          try {
            if (!l && t.return != null && (a = t.return(), Object(a) !== a)) {
              return;
            }
          } finally {
            if (u) {
              throw n;
            }
          }
        }
        return o;
      }
    }(t) || function (e) {
      if (e) {
        if (typeof e == "string") {
          return mg(e, 1);
        }
        var t = {}.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor) {
          t = e.constructor.name;
        }
        if (t === "Map" || t === "Set") {
          return Array.from(e);
        } else if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) {
          return mg(e, 1);
        } else {
          return undefined;
        }
      }
    }(t) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }())[0];
    var i = mm();
    if (i == null) {
      return null;
    }
    var a = i.x;
    var o = i.y;
    var l = i.width;
    var u = i.height;
    return tS.createElement(mb.Provider, {
      value: n
    }, tS.createElement("defs", null, tS.createElement("clipPath", {
      id: n
    }, tS.createElement("rect", {
      x: a,
      y: o,
      height: u,
      width: l
    }))), r);
  };
  var mw = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
  var mO = (0, tS.forwardRef)((e, t) => {
    var r = e.width;
    var n = e.height;
    var i = e.responsive;
    var a = e.children;
    var o = e.className;
    var l = e.style;
    var u = e.compact;
    var c = e.title;
    var s = e.desc;
    var f = sG(function (e, t) {
      if (e == null) {
        return {};
      }
      var r;
      var n;
      var i = function (e, t) {
        if (e == null) {
          return {};
        }
        var r = {};
        for (var n in e) {
          if ({}.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) !== -1) {
              continue;
            }
            r[n] = e[n];
          }
        }
        return r;
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) {
          r = a[n];
          if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
            i[r] = e[r];
          }
        }
      }
      return i;
    }(e, mw));
    if (u) {
      return tS.createElement(tS.Fragment, null, tS.createElement(n8, {
        width: r,
        height: n
      }), tS.createElement(v5, {
        otherAttributes: f,
        title: c,
        desc: s
      }, a));
    } else {
      return tS.createElement(mh, {
        className: o,
        style: l,
        width: r,
        height: n,
        responsive: i != null && i,
        onClick: e.onClick,
        onMouseLeave: e.onMouseLeave,
        onMouseEnter: e.onMouseEnter,
        onMouseMove: e.onMouseMove,
        onMouseDown: e.onMouseDown,
        onMouseUp: e.onMouseUp,
        onContextMenu: e.onContextMenu,
        onDoubleClick: e.onDoubleClick,
        onTouchStart: e.onTouchStart,
        onTouchMove: e.onTouchMove,
        onTouchEnd: e.onTouchEnd
      }, tS.createElement(v5, {
        otherAttributes: f,
        title: c,
        desc: s,
        ref: t
      }, tS.createElement(mx, null, a)));
    }
  });
  function mA() {
    return (mA = Object.assign.bind()).apply(null, arguments);
  }
  function mS(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function mE(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        mS(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        mS(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function mP(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  function mj(e) {
    if (Array.isArray(e) && eB(e[0]) && eB(e[1])) {
      return e.join(" ~ ");
    } else {
      return e;
    }
  }
  e.s(["CategoricalChart", 0, mO], 60588);
  var mk = {
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  };
  var mI = {
    display: "block",
    paddingTop: 4,
    paddingBottom: 4,
    color: "#000"
  };
  var mC = {};
  var mT = e => {
    var t = e.separator;
    var r = t === undefined ? " : " : t;
    var n = e.contentStyle;
    var i = e.itemStyle;
    var a = e.labelStyle;
    var o = e.payload;
    var l = e.formatter;
    var c = e.itemSorter;
    var s = e.wrapperClassName;
    var f = e.labelClassName;
    var d = e.label;
    var p = e.labelFormatter;
    var h = e.accessibilityLayer;
    var y = mE(mE({}, mk), n);
    var v = mE({
      margin: 0
    }, a === undefined ? mC : a);
    var m = !eH(d);
    var g = m ? d : "";
    var b = u("recharts-default-tooltip", s);
    var x = u("recharts-tooltip-label", f);
    if (m && p && o != null) {
      g = p(d, o);
    }
    return tS.createElement("div", mA({
      className: b,
      style: y
    }, h !== undefined && h ? {
      role: "status",
      "aria-live": "assertive"
    } : {}), tS.createElement("p", {
      className: x,
      style: v
    }, tS.isValidElement(g) ? g : `${g}`), (() => {
      if (o && o.length) {
        var e = (c == null ? o : eA(o, c)).map((e, t) => {
          if (!e || e.type === "none") {
            return null;
          }
          var n = e.formatter || l || mj;
          var a = e.value;
          var u = e.name;
          var c = a;
          var s = u;
          var f = n(a, u, e, t, o);
          if (Array.isArray(f)) {
            var d = function (e) {
              if (Array.isArray(e)) {
                return e;
              }
            }(f) || function (e) {
              var t = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
              if (t != null) {
                var r;
                var n;
                var i;
                var a;
                var o = [];
                var l = true;
                var u = false;
                try {
                  i = (t = t.call(e)).next;
                  false;
                  for (; !(l = (r = i.call(t)).done) && (o.push(r.value), o.length !== 2); l = true);
                } catch (e) {
                  u = true;
                  n = e;
                } finally {
                  try {
                    if (!l && t.return != null && (a = t.return(), Object(a) !== a)) {
                      return;
                    }
                  } finally {
                    if (u) {
                      throw n;
                    }
                  }
                }
                return o;
              }
            }(f) || function (e) {
              if (e) {
                if (typeof e == "string") {
                  return mP(e, 2);
                }
                var t = {}.toString.call(e).slice(8, -1);
                if (t === "Object" && e.constructor) {
                  t = e.constructor.name;
                }
                if (t === "Map" || t === "Set") {
                  return Array.from(e);
                } else if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) {
                  return mP(e, 2);
                } else {
                  return undefined;
                }
              }
            }(f) || function () {
              throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
            c = d[0];
            s = d[1];
          } else {
            if (f == null) {
              return null;
            }
            c = f;
          }
          var p = mE(mE({}, mI), {}, {
            color: e.color || mI.color
          }, i);
          return tS.createElement("li", {
            className: "recharts-tooltip-item",
            key: `tooltip-item-${t}`,
            style: p
          }, eB(s) ? tS.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, s) : null, eB(s) ? tS.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, r) : null, tS.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, c), tS.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, e.unit || ""));
        });
        return tS.createElement("ul", {
          className: "recharts-tooltip-item-list",
          style: {
            padding: 0,
            margin: 0
          }
        }, e);
      }
      return null;
    })());
  };
  var mM = "recharts-tooltip-wrapper";
  var m_ = {
    visibility: "hidden"
  };
  function mD(e) {
    var t = e.allowEscapeViewBox;
    var r = e.coordinate;
    var n = e.key;
    var i = e.offset;
    var a = e.position;
    var o = e.reverseDirection;
    var l = e.tooltipDimension;
    var u = e.viewBox;
    var c = e.viewBoxDimension;
    if (a && ez(a[n])) {
      return a[n];
    }
    var s = r[n] - l - (i > 0 ? i : 0);
    var f = r[n] + i;
    if (t[n]) {
      if (o[n]) {
        return s;
      } else {
        return f;
      }
    }
    var d = u[n];
    if (d == null) {
      return 0;
    } else if (o[n]) {
      if (s < d) {
        return Math.max(f, d);
      } else {
        return Math.max(s, d);
      }
    } else if (c == null) {
      return 0;
    } else if (f + l > d + c) {
      return Math.max(s, d);
    } else {
      return Math.max(f, d);
    }
  }
  function mN(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function mL(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        mN(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        mN(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function mR(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  var mz = tS.memo(function (e) {
    var t;
    var r;
    var n;
    var i;
    var a;
    var o;
    var l;
    var c;
    var s;
    var f;
    var d;
    var p;
    var h;
    var y;
    var v;
    var m;
    var g;
    var b;
    var x;
    var w;
    var O;
    var A;
    var S;
    var P;
    var k;
    var I = pQ();
    var C = function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(O = tS.useState(() => ({
      dismissed: false,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      }
    }))) || function (e) {
      var t = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (t != null) {
        var r;
        var n;
        var i;
        var a;
        var o = [];
        var l = true;
        var u = false;
        try {
          i = (t = t.call(e)).next;
          false;
          for (; !(l = (r = i.call(t)).done) && (o.push(r.value), o.length !== 2); l = true);
        } catch (e) {
          u = true;
          n = e;
        } finally {
          try {
            if (!l && t.return != null && (a = t.return(), Object(a) !== a)) {
              return;
            }
          } finally {
            if (u) {
              throw n;
            }
          }
        }
        return o;
      }
    }(O) || function (e) {
      if (e) {
        if (typeof e == "string") {
          return mR(e, 2);
        }
        var t = {}.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor) {
          t = e.constructor.name;
        }
        if (t === "Map" || t === "Set") {
          return Array.from(e);
        } else if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) {
          return mR(e, 2);
        } else {
          return undefined;
        }
      }
    }(O) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
    var T = C[0];
    var M = C[1];
    tS.useEffect(() => {
      var t = t => {
        if (t.key === "Escape") {
          var n;
          var a;
          M({
            dismissed: true,
            dismissedAtCoordinate: {
              x: ((n = e.coordinate) == null ? undefined : n.x) ?? 0,
              y: ((a = e.coordinate) == null ? undefined : a.y) ?? 0
            }
          });
        }
      };
      document.addEventListener("keydown", t);
      return () => {
        document.removeEventListener("keydown", t);
      };
    }, [(A = e.coordinate) == null ? undefined : A.x, (S = e.coordinate) == null ? undefined : S.y]);
    if (T.dismissed && ((((P = e.coordinate) == null ? undefined : P.x) ?? 0) !== T.dismissedAtCoordinate.x || (((k = e.coordinate) == null ? undefined : k.y) ?? 0) !== T.dismissedAtCoordinate.y)) {
      M(mL(mL({}, T), {}, {
        dismissed: false
      }));
    }
    p = (t = {
      allowEscapeViewBox: e.allowEscapeViewBox,
      coordinate: e.coordinate,
      offsetLeft: typeof e.offset == "number" ? e.offset : e.offset.x,
      offsetTop: typeof e.offset == "number" ? e.offset : e.offset.y,
      position: e.position,
      reverseDirection: e.reverseDirection,
      tooltipBox: e.lastBoundingBox,
      useTranslate3d: e.useTranslate3d,
      viewBox: e.viewBox
    }).allowEscapeViewBox;
    h = t.coordinate;
    y = t.offsetTop;
    v = t.offsetLeft;
    m = t.position;
    g = t.reverseDirection;
    b = t.tooltipBox;
    x = t.useTranslate3d;
    w = t.viewBox;
    if (b && b.height > 0 && b.width > 0 && h) {
      n = (r = {
        translateX: f = mD({
          allowEscapeViewBox: p,
          coordinate: h,
          key: "x",
          offset: v,
          position: m,
          reverseDirection: g,
          tooltipDimension: b.width,
          viewBox: w,
          viewBoxDimension: w.width
        }),
        translateY: d = mD({
          allowEscapeViewBox: p,
          coordinate: h,
          key: "y",
          offset: y,
          position: m,
          reverseDirection: g,
          tooltipDimension: b.height,
          viewBox: w,
          viewBoxDimension: w.height
        }),
        useTranslate3d: x
      }).translateX;
      i = r.translateY;
      s = {
        transform: r.useTranslate3d ? `translate3d(${n}px, ${i}px, 0)` : `translate(${n}px, ${i}px)`
      };
    } else {
      s = m_;
    }
    var _ = {
      cssProperties: s,
      cssClasses: (o = (a = {
        translateX: f,
        translateY: d,
        coordinate: h
      }).coordinate, l = a.translateX, c = a.translateY, u(mM, {
        [`${mM}-right`]: ez(l) && o && ez(o.x) && l >= o.x,
        [`${mM}-left`]: ez(l) && o && ez(o.x) && l < o.x,
        [`${mM}-bottom`]: ez(c) && o && ez(o.y) && c >= o.y,
        [`${mM}-top`]: ez(c) && o && ez(o.y) && c < o.y
      }))
    };
    var D = _.cssClasses;
    var N = _.cssProperties;
    var L = e.hasPortalFromProps ? {} : mL(mL({
      transition: function (e) {
        if ((!e.prefersReducedMotion || e.isAnimationActive !== "auto") && e.isAnimationActive && e.active) {
          var t = typeof e.animationEasing == "string" ? e.animationEasing : "ease";
          return `transform ${e.animationDuration}ms ${t}`;
        }
      }({
        prefersReducedMotion: I,
        isAnimationActive: e.isAnimationActive,
        active: e.active,
        animationDuration: e.animationDuration,
        animationEasing: e.animationEasing
      })
    }, N), {}, {
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      left: 0
    });
    var R = mL(mL({}, L), {}, {
      visibility: !T.dismissed && e.active && e.hasPayload ? "visible" : "hidden"
    }, e.wrapperStyle);
    return tS.createElement("div", {
      xmlns: "http://www.w3.org/1999/xhtml",
      tabIndex: -1,
      className: D,
      style: R,
      ref: e.innerRef
    }, e.children);
  });
  function mB(e) {
    return e;
  }
  function mF(e) {
    return e == null || typeof e != "object" && typeof e != "function";
  }
  function mU(e) {
    return Object.getOwnPropertySymbols(e).filter(t => Object.prototype.propertyIsEnumerable.call(e, t));
  }
  function m$(e) {
    if (e == null) {
      if (e === undefined) {
        return "[object Undefined]";
      } else {
        return "[object Null]";
      }
    } else {
      return Object.prototype.toString.call(e);
    }
  }
  e.s(["getSymbols", 0, mU], 90824);
  e.s(["getTag", 0, m$], 82430);
  let mK = "[object RegExp]";
  let mW = "[object String]";
  let mV = "[object Number]";
  let mH = "[object Boolean]";
  let mG = "[object Arguments]";
  let mY = "[object Symbol]";
  let mq = "[object Date]";
  let mX = "[object Map]";
  let mZ = "[object Set]";
  let mQ = "[object Array]";
  let mJ = "[object ArrayBuffer]";
  let m0 = "[object Object]";
  let m1 = "[object DataView]";
  let m2 = "[object Uint8Array]";
  let m5 = "[object Uint8ClampedArray]";
  let m3 = "[object Uint16Array]";
  let m6 = "[object Uint32Array]";
  let m4 = "[object Int8Array]";
  let m8 = "[object Int16Array]";
  let m7 = "[object Int32Array]";
  let m9 = "[object Float32Array]";
  let ge = "[object Float64Array]";
  e.s(["argumentsTag", 0, mG, "arrayBufferTag", 0, mJ, "arrayTag", 0, mQ, "bigInt64ArrayTag", 0, "[object BigInt64Array]", "bigUint64ArrayTag", 0, "[object BigUint64Array]", "booleanTag", 0, mH, "dataViewTag", 0, m1, "dateTag", 0, mq, "errorTag", 0, "[object Error]", "float32ArrayTag", 0, m9, "float64ArrayTag", 0, ge, "functionTag", 0, "[object Function]", "int16ArrayTag", 0, m8, "int32ArrayTag", 0, m7, "int8ArrayTag", 0, m4, "mapTag", 0, mX, "numberTag", 0, mV, "objectTag", 0, m0, "regexpTag", 0, mK, "setTag", 0, mZ, "stringTag", 0, mW, "symbolTag", 0, mY, "uint16ArrayTag", 0, m3, "uint32ArrayTag", 0, m6, "uint8ArrayTag", 0, m2, "uint8ClampedArrayTag", 0, m5], 90659);
  let gt = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || e.g || function () {
    return this;
  }();
  function gr(e) {
    return gt.Buffer !== undefined && gt.Buffer.isBuffer(e);
  }
  function gn(e, t, r, n = new Map(), i) {
    let a = i?.(e, t, r, n);
    if (a !== undefined) {
      return a;
    }
    if (mF(e)) {
      return e;
    }
    if (n.has(e)) {
      return n.get(e);
    }
    if (Array.isArray(e)) {
      let t = Array(e.length);
      n.set(e, t);
      for (let a = 0; a < e.length; a++) {
        t[a] = gn(e[a], a, r, n, i);
      }
      if (Object.hasOwn(e, "index")) {
        t.index = e.index;
      }
      if (Object.hasOwn(e, "input")) {
        t.input = e.input;
      }
      return t;
    }
    if (e instanceof Date) {
      return new Date(e.getTime());
    }
    if (e instanceof RegExp) {
      let t = new RegExp(e.source, e.flags);
      t.lastIndex = e.lastIndex;
      return t;
    }
    if (e instanceof Map) {
      let t = new Map();
      n.set(e, t);
      for (let [a, o] of e) {
        t.set(a, gn(o, a, r, n, i));
      }
      return t;
    }
    if (e instanceof Set) {
      let t = new Set();
      n.set(e, t);
      for (let a of e) {
        t.add(gn(a, undefined, r, n, i));
      }
      return t;
    }
    if (gr(e)) {
      return e.subarray();
    }
    if (ArrayBuffer.isView(e) && !(e instanceof DataView)) {
      let t = new (Object.getPrototypeOf(e).constructor)(e.length);
      n.set(e, t);
      for (let a = 0; a < e.length; a++) {
        t[a] = gn(e[a], a, r, n, i);
      }
      return t;
    }
    if (e instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && e instanceof SharedArrayBuffer) {
      return e.slice(0);
    }
    if (e instanceof DataView) {
      let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
      n.set(e, t);
      gi(t, e, r, n, i);
      return t;
    }
    if (typeof File !== "undefined" && e instanceof File) {
      let t = new File([e], e.name, {
        type: e.type
      });
      n.set(e, t);
      gi(t, e, r, n, i);
      return t;
    }
    if (typeof Blob !== "undefined" && e instanceof Blob) {
      let t = new Blob([e], {
        type: e.type
      });
      n.set(e, t);
      gi(t, e, r, n, i);
      return t;
    }
    if (e instanceof Error) {
      let t = structuredClone(e);
      n.set(e, t);
      t.message = e.message;
      t.name = e.name;
      t.stack = e.stack;
      t.cause = e.cause;
      t.constructor = e.constructor;
      gi(t, e, r, n, i);
      return t;
    }
    if (e instanceof Boolean) {
      let t = new Boolean(e.valueOf());
      n.set(e, t);
      gi(t, e, r, n, i);
      return t;
    }
    if (e instanceof Number) {
      let t = new Number(e.valueOf());
      n.set(e, t);
      gi(t, e, r, n, i);
      return t;
    }
    if (e instanceof String) {
      let t = new String(e.valueOf());
      n.set(e, t);
      gi(t, e, r, n, i);
      return t;
    }
    if (typeof e == "object" && function (e) {
      switch (m$(e)) {
        case mG:
        case mQ:
        case mJ:
        case m1:
        case mH:
        case mq:
        case m9:
        case ge:
        case m4:
        case m8:
        case m7:
        case mX:
        case mV:
        case m0:
        case mK:
        case mZ:
        case mW:
        case mY:
        case m2:
        case m5:
        case m3:
        case m6:
          return true;
        default:
          return false;
      }
    }(e)) {
      let t = Object.create(Object.getPrototypeOf(e));
      n.set(e, t);
      gi(t, e, r, n, i);
      return t;
    }
    return e;
  }
  function gi(e, t, r = e, n, i) {
    let a = [...Object.keys(t), ...mU(t)];
    for (let o = 0; o < a.length; o++) {
      let l = a[o];
      let u = Object.getOwnPropertyDescriptor(e, l);
      if (u == null || u.writable) {
        e[l] = gn(t[l], l, r, n, i);
      }
    }
  }
  function ga(e, t, r, n, i = false) {
    if (t === e) {
      return true;
    }
    switch (typeof t) {
      case "object":
        return function (e, t, r, n, i = false) {
          if (t == null) {
            return true;
          }
          if (Array.isArray(t)) {
            return go(e, t, r, n);
          }
          if (t instanceof Map) {
            var a;
            var o;
            var l;
            var u;
            var c = e;
            var s = t;
            var f = r;
            var d = n;
            if (s.size === 0) {
              return true;
            }
            if (!(c instanceof Map)) {
              return false;
            }
            for (let [e, t] of s.entries()) {
              if (f(c.get(e), t, e, c, s, d) === false) {
                return false;
              }
            }
            return true;
          }
          if (t instanceof Set) {
            a = e;
            o = t;
            l = r;
            u = n;
            return o.size === 0 || a instanceof Set && go([...a], [...o], l, u);
          }
          let p = Object.keys(t);
          if (e == null) {
            return i && p.length === 0;
          }
          if (i) {
            if (mF(e)) {
              e = Object(e);
            }
          } else {
            let t = m$(e);
            if (t !== "[object Object]" && t !== "[object Arguments]") {
              return false;
            }
          }
          if (p.length === 0) {
            return true;
          }
          if (n?.has(t)) {
            return n.get(t) === e;
          }
          n?.set(t, e);
          try {
            for (let i = 0; i < p.length; i++) {
              let a = p[i];
              if (!(a in e) || t[a] === undefined && e[a] !== undefined || t[a] === null && e[a] !== null || !r(e[a], t[a], a, e, t, n)) {
                return false;
              }
            }
            return true;
          } finally {
            n?.delete(t);
          }
        }(e, t, r, n, i);
      case "function":
        if (Object.keys(t).length > 0) {
          return ga(e, {
            ...t
          }, r, n, i);
        }
        return ep(e, t);
      default:
        if (!ey(e)) {
          return ep(e, t);
        }
        if (i) {
          if (typeof t == "string") {
            return t === "";
          }
          return true;
        }
        return ep(e, t);
    }
  }
  function go(e, t, r, n) {
    if (t.length === 0) {
      return true;
    }
    if (!Array.isArray(e)) {
      return false;
    }
    let i = new Set();
    for (let a = 0; a < t.length; a++) {
      let o = t[a];
      let l = false;
      for (let u = 0; u < e.length; u++) {
        if (i.has(u)) {
          continue;
        }
        let c = e[u];
        let s = false;
        if (r(c, o, a, e, t, n)) {
          s = true;
        }
        if (s) {
          i.add(u);
          l = true;
          break;
        }
      }
      if (!l) {
        return false;
      }
    }
    return true;
  }
  function gl(e, t) {
    return function e(t, r, n) {
      if (typeof n != "function") {
        return e(t, r, () => undefined);
      } else {
        return ga(t, r, function e(t, r, i, a, o, l) {
          let u = n(t, r, i, a, o, l);
          if (u !== undefined) {
            return !!u;
          } else {
            return ga(t, r, e, l, false);
          }
        }, new Map(), true);
      }
    }(e, t, () => undefined);
  }
  function gu(e) {
    if (e === 0) {
      return 0;
    } else {
      return e;
    }
  }
  function gc(e, t = mB) {
    var r;
    if (eh(e)) {
      return function (e, t) {
        let r = new Map();
        for (let n = 0; n < e.length; n++) {
          let i = e[n];
          let a = t(i, n, e);
          if (!r.has(a)) {
            r.set(a, i);
          }
        }
        return Array.from(r.values());
      }(Array.from(e), (r = function (e) {
        var t;
        var r;
        if (e == null) {
          return mB;
        }
        switch (typeof e) {
          case "function":
            return e;
          case "object":
            if (Array.isArray(e) && e.length === 2) {
              return function (e, t) {
                var r;
                var a;
                var u;
                switch (typeof e) {
                  case "object":
                    if (Object.is(e?.valueOf(), -0)) {
                      e = "-0";
                    }
                    break;
                  case "number":
                    e = i(e);
                }
                a = r = t;
                u = (e, t, n, i) => {
                  let a;
                  if (a !== undefined) {
                    return a;
                  }
                  if (typeof r == "object") {
                    if (m$(r) === "[object Object]" && typeof r.constructor != "function") {
                      let e = {};
                      i.set(r, e);
                      gi(e, r, n, i);
                      return e;
                    }
                    switch (Object.prototype.toString.call(r)) {
                      case mV:
                      case mW:
                      case mH:
                        {
                          let e = new r.constructor(r?.valueOf());
                          gi(e, r);
                          return e;
                        }
                      case mG:
                        {
                          let e = {};
                          gi(e, r);
                          e.length = r.length;
                          e[Symbol.iterator] = r[Symbol.iterator];
                          return e;
                        }
                      default:
                        return;
                    }
                  }
                };
                t = gn(a, undefined, a, new Map(), u);
                return function (r) {
                  let a = l(r, e);
                  if (a === undefined) {
                    return function (e, t) {
                      let r;
                      if ((r = Array.isArray(t) ? t : typeof t == "string" && n(t) && !(t in Object(e)) ? o(t) : [t]).length === 0) {
                        return false;
                      }
                      let a = e;
                      for (let e = 0; e < r.length; e++) {
                        var l;
                        let t = i(r[e]);
                        if ((a == null || !Object.hasOwn(a, t)) && (!Array.isArray(a) && ((l = a) === null || typeof l != "object" || m$(l) !== "[object Arguments]") || !em(t) || !(Number(t) < a.length))) {
                          return false;
                        }
                        a = a[t];
                      }
                      return true;
                    }(r, e);
                  } else if (t === undefined) {
                    return a === undefined;
                  } else {
                    return gl(a, t);
                  }
                };
              }(e[0], e[1]);
            }
            t = gn(r = t = e, undefined, r, new Map(), undefined);
            return e => gl(e, t);
          default:
            return function (t) {
              return l(t, e);
            };
        }
      }(t), function (...e) {
        return r.apply(this, e.slice(0, 1));
      })).map(gu);
    } else {
      return [];
    }
  }
  function gs(e, t, r) {
    if (t === true) {
      return gc(e, r);
    } else if (typeof t == "function") {
      return gc(e, t);
    } else {
      return e;
    }
  }
  function gf(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  function gd(e, t) {
    return Math.abs(e.height - t.height) > 1 || Math.abs(e.left - t.left) > 1 || Math.abs(e.top - t.top) > 1 || Math.abs(e.width - t.width) > 1;
  }
  function gp(e) {
    var t = e.getBoundingClientRect();
    return {
      height: t.height,
      left: t.left,
      top: t.top,
      width: t.width
    };
  }
  function gh() {
    var e;
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var r = function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(e = (0, tS.useState)({
      height: 0,
      left: 0,
      top: 0,
      width: 0
    })) || function (e) {
      var t = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (t != null) {
        var r;
        var n;
        var i;
        var a;
        var o = [];
        var l = true;
        var u = false;
        try {
          i = (t = t.call(e)).next;
          false;
          for (; !(l = (r = i.call(t)).done) && (o.push(r.value), o.length !== 2); l = true);
        } catch (e) {
          u = true;
          n = e;
        } finally {
          try {
            if (!l && t.return != null && (a = t.return(), Object(a) !== a)) {
              return;
            }
          } finally {
            if (u) {
              throw n;
            }
          }
        }
        return o;
      }
    }(e) || function (e) {
      if (e) {
        if (typeof e == "string") {
          return gf(e, 2);
        }
        var t = {}.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor) {
          t = e.constructor.name;
        }
        if (t === "Map" || t === "Set") {
          return Array.from(e);
        } else if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) {
          return gf(e, 2);
        } else {
          return undefined;
        }
      }
    }(e) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
    var n = r[0];
    var i = r[1];
    var a = (0, tS.useRef)(null);
    var o = (0, tS.useRef)(n);
    o.current = n;
    var l = (0, tS.useCallback)(e => {
      if (a.current != null) {
        a.current.disconnect();
        a.current = null;
      }
      if (e != null) {
        var t = gp(e);
        if (gd(t, o.current)) {
          i(t);
        }
        if (typeof ResizeObserver !== "undefined") {
          var r = new ResizeObserver(() => {
            var t = gp(e);
            if (gd(t, o.current)) {
              i(t);
            }
          });
          r.observe(e);
          a.current = r;
        }
      }
    }, [...t]);
    (0, tS.useEffect)(() => () => {
      var e;
      if ((e = a.current) != null) {
        e.disconnect();
      }
    }, []);
    return [n, l];
  }
  e.s(["isBuffer", 0, gr], 48839);
  e.s(["getUniqPayload", 0, gs], 95011);
  e.s(["useElementOffset", 0, gh], 77720);
  var gy = ["x", "y", "top", "left", "width", "height", "className"];
  function gv() {
    return (gv = Object.assign.bind()).apply(null, arguments);
  }
  function gm(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  var gg = e => {
    var t = e.x;
    var r = t === undefined ? 0 : t;
    var n = e.y;
    var i = n === undefined ? 0 : n;
    var a = e.top;
    var o = a === undefined ? 0 : a;
    var l = e.left;
    var c = l === undefined ? 0 : l;
    var s = e.width;
    var f = s === undefined ? 0 : s;
    var d = e.height;
    var p = d === undefined ? 0 : d;
    var h = e.className;
    var y = function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] ?? {};
        if (t % 2) {
          gm(Object(r), true).forEach(function (t) {
            var n;
            var i;
            var a;
            n = e;
            i = t;
            a = r[t];
            if ((i = function (e) {
              var t = function (e, t) {
                if (typeof e != "object" || !e) {
                  return e;
                }
                var r = e[Symbol.toPrimitive];
                if (r !== undefined) {
                  var n = r.call(e, t || "default");
                  if (typeof n != "object") {
                    return n;
                  }
                  throw TypeError("@@toPrimitive must return a primitive value.");
                }
                return (t === "string" ? String : Number)(e);
              }(e, "string");
              if (typeof t == "symbol") {
                return t;
              } else {
                return t + "";
              }
            }(i)) in n) {
              Object.defineProperty(n, i, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              n[i] = a;
            }
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
        } else {
          gm(Object(r)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
        }
      }
      return e;
    }({
      x: r,
      y: i,
      top: o,
      left: c,
      width: f,
      height: p
    }, function (e, t) {
      if (e == null) {
        return {};
      }
      var r;
      var n;
      var i = function (e, t) {
        if (e == null) {
          return {};
        }
        var r = {};
        for (var n in e) {
          if ({}.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) !== -1) {
              continue;
            }
            r[n] = e[n];
          }
        }
        return r;
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) {
          r = a[n];
          if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
            i[r] = e[r];
          }
        }
      }
      return i;
    }(e, gy));
    if (ez(r) && ez(i) && ez(f) && ez(p) && ez(o) && ez(c)) {
      return tS.createElement("path", gv({}, sq(y), {
        className: u("recharts-cross", h),
        d: `M${r},${o}v${p}M${c},${i}h${f}`
      }));
    } else {
      return null;
    }
  };
  var gb = ["radius"];
  var gx = ["radius"];
  function gw(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function gO(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        gw(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        gw(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function gA() {
    return (gA = Object.assign.bind()).apply(null, arguments);
  }
  function gS(e, t) {
    if (e == null) {
      return {};
    }
    var r;
    var n;
    var i = function (e, t) {
      if (e == null) {
        return {};
      }
      var r = {};
      for (var n in e) {
        if ({}.hasOwnProperty.call(e, n)) {
          if (t.indexOf(n) !== -1) {
            continue;
          }
          r[n] = e[n];
        }
      }
      return r;
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) {
        r = a[n];
        if (t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r)) {
          i[r] = e[r];
        }
      }
    }
    return i;
  }
  function gE(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  function gP(e, t) {
    t ||= e.slice(0);
    return Object.freeze(Object.defineProperties(e, {
      raw: {
        value: Object.freeze(t)
      }
    }));
  }
  var gj = (e, t, r, n, i) => {
    var a = e_(r);
    var o = e_(n);
    var l = Math.min(Math.abs(a) / 2, Math.abs(o) / 2);
    var u = o >= 0 ? 1 : -1;
    var c = a >= 0 ? 1 : -1;
    var s = +(o >= 0 && a >= 0 || o < 0 && a < 0);
    if (l > 0 && Array.isArray(i)) {
      var f = [0, 0, 0, 0];
      for (var d = 0; d < 4; d++) {
        var p;
        var y = i[d] ?? 0;
        f[d] = y > l ? l : y;
      }
      p = eD(I ||= gP(["M", ",", ""]), e, t + u * f[0]);
      if (f[0] > 0) {
        p += eD(C ||= gP(["A ", ",", ",0,0,", ",", ",", ""]), f[0], f[0], s, e + c * f[0], t);
      }
      p += eD(T ||= gP(["L ", ",", ""]), e + r - c * f[1], t);
      if (f[1] > 0) {
        p += eD(M ||= gP(["A ", ",", ",0,0,", ",\n        ", ",", ""]), f[1], f[1], s, e + r, t + u * f[1]);
      }
      p += eD(_ ||= gP(["L ", ",", ""]), e + r, t + n - u * f[2]);
      if (f[2] > 0) {
        p += eD(D ||= gP(["A ", ",", ",0,0,", ",\n        ", ",", ""]), f[2], f[2], s, e + r - c * f[2], t + n);
      }
      p += eD(N ||= gP(["L ", ",", ""]), e + c * f[3], t + n);
      if (f[3] > 0) {
        p += eD(L ||= gP(["A ", ",", ",0,0,", ",\n        ", ",", ""]), f[3], f[3], s, e, t + n - u * f[3]);
      }
      p += "Z";
    } else if (l > 0 && i === +i && i > 0) {
      var v = Math.min(l, i);
      p = eD(R ||= gP(["M ", ",", "\n            A ", ",", ",0,0,", ",", ",", "\n            L ", ",", "\n            A ", ",", ",0,0,", ",", ",", "\n            L ", ",", "\n            A ", ",", ",0,0,", ",", ",", "\n            L ", ",", "\n            A ", ",", ",0,0,", ",", ",", " Z"]), e, t + u * v, v, v, s, e + c * v, t, e + r - c * v, t, v, v, s, e + r, t + u * v, e + r, t + n - u * v, v, v, s, e + r - c * v, t + n, e + c * v, t + n, v, v, s, e, t + n - u * v);
    } else {
      p = eD(z ||= gP(["M ", ",", " h ", " v ", " h ", " Z"]), e, t, r, n, -r);
    }
    return p;
  };
  var gk = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: false,
    isUpdateAnimationActive: false,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease"
  };
  var gI = e => {
    let t;
    let r;
    var n;
    var i = fI(e, gk);
    var a = (0, tS.useRef)(null);
    var o = function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(n = (0, tS.useState)(-1)) || function (e) {
      var t = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (t != null) {
        var r;
        var n;
        var i;
        var a;
        var o = [];
        var l = true;
        var u = false;
        try {
          i = (t = t.call(e)).next;
          false;
          for (; !(l = (r = i.call(t)).done) && (o.push(r.value), o.length !== 2); l = true);
        } catch (e) {
          u = true;
          n = e;
        } finally {
          try {
            if (!l && t.return != null && (a = t.return(), Object(a) !== a)) {
              return;
            }
          } finally {
            if (u) {
              throw n;
            }
          }
        }
        return o;
      }
    }(n) || function (e) {
      if (e) {
        if (typeof e == "string") {
          return gE(e, 2);
        }
        var t = {}.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor) {
          t = e.constructor.name;
        }
        if (t === "Map" || t === "Set") {
          return Array.from(e);
        } else if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) {
          return gE(e, 2);
        } else {
          return undefined;
        }
      }
    }(n) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
    var l = o[0];
    var c = o[1];
    (0, tS.useEffect)(() => {
      if (a.current && a.current.getTotalLength) {
        try {
          var e = a.current.getTotalLength();
          if (e) {
            c(e);
          }
        } catch (e) {}
      }
    }, []);
    var s = i.x;
    var f = i.y;
    var d = i.width;
    var p = i.height;
    var h = i.radius;
    var y = i.className;
    var v = i.animationEasing;
    var m = i.animationDuration;
    var g = i.animationBegin;
    var b = i.isAnimationActive;
    var x = i.isUpdateAnimationActive;
    var w = (0, tS.useRef)(d);
    var O = (0, tS.useRef)(p);
    var A = (0, tS.useRef)(s);
    var S = (0, tS.useRef)(f);
    var E = p9((0, tS.useMemo)(() => ({
      x: s,
      y: f,
      width: d,
      height: p,
      radius: h
    }), [s, f, d, p, h]), "rectangle-");
    if (s !== +s || f !== +f || d !== +d || p !== +p || d === 0 || p === 0) {
      return null;
    }
    var P = u("recharts-rectangle", y);
    if (!x) {
      var j = sq(i);
      j.radius;
      var k = gS(j, gb);
      return tS.createElement("path", gA({}, k, {
        x: e_(s),
        y: e_(f),
        width: e_(d),
        height: e_(p),
        radius: typeof h == "number" ? h : undefined,
        className: P,
        d: gj(s, f, d, p, h)
      }));
    }
    var I = w.current;
    var C = O.current;
    var T = A.current;
    var M = S.current;
    var _ = `0px ${l === -1 ? 1 : l}px`;
    var D = `${l}px ${l}px`;
    t = ["strokeDasharray"];
    r = typeof v == "string" ? v : gk.animationEasing;
    var N = t.map(e => `${e.replace(/([A-Z])/g, e => `-${e.toLowerCase()}`)} ${m}ms ${r}`).join(",");
    return tS.createElement(p7, {
      animationId: E,
      key: E,
      canBegin: l > 0,
      duration: m,
      easing: v,
      isActive: x,
      begin: g
    }, e => {
      var t;
      var r = eW(I, d, e);
      var n = eW(C, p, e);
      var o = eW(T, s, e);
      var l = eW(M, f, e);
      if (a.current) {
        w.current = r;
        O.current = n;
        A.current = o;
        S.current = l;
      }
      t = b ? e > 0 ? {
        transition: N,
        strokeDasharray: D
      } : {
        strokeDasharray: _
      } : {
        strokeDasharray: D
      };
      var u = sq(i);
      u.radius;
      var c = gS(u, gx);
      return tS.createElement("path", gA({}, c, {
        radius: typeof h == "number" ? h : undefined,
        className: P,
        d: gj(o, l, r, n, h),
        ref: a,
        style: gO(gO({}, t), i.style)
      }));
    });
  };
  function gC(e) {
    var t = e.cx;
    var r = e.cy;
    var n = e.radius;
    var i = e.startAngle;
    var a = e.endAngle;
    return {
      points: [iP(t, r, n, i), iP(t, r, n, a)],
      cx: t,
      cy: r,
      radius: n,
      startAngle: i,
      endAngle: a
    };
  }
  function gT(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function gM(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        gT(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        gT(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function g_() {
    return (g_ = Object.assign.bind()).apply(null, arguments);
  }
  function gD(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function gN(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        gD(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        gD(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function gL(e) {
    var t = e.cursor;
    var r = e.cursorComp;
    var n = e.cursorProps;
    if ((0, tS.isValidElement)(t)) {
      return (0, tS.cloneElement)(t, n);
    } else {
      return (0, tS.createElement)(r, n);
    }
  }
  function gR(e) {
    var t;
    var n;
    var i;
    var a;
    var o = e.coordinate;
    var l = e.payload;
    var c = e.index;
    var s = e.offset;
    var f = e.tooltipAxisBandSize;
    var d = e.layout;
    var p = e.cursor;
    var h = e.tooltipEventType;
    var y = e.chartName;
    if (!p || !o || y !== "ScatterChart" && h !== "axis") {
      return null;
    }
    if (y === "ScatterChart") {
      n = o;
      i = gg;
      a = iI.cursorLine;
    } else if (y === "BarChart") {
      t = f / 2;
      n = {
        stroke: "none",
        fill: "#ccc",
        x: d === "horizontal" ? o.x - t : s.left + 0.5,
        y: d === "horizontal" ? s.top + 0.5 : o.y - t,
        width: d === "horizontal" ? f : s.width - 1,
        height: d === "horizontal" ? s.height - 1 : f
      };
      i = gI;
      a = iI.cursorRectangle;
    } else if (d === "radial" && fm(o)) {
      var v = gC(o);
      var m = v.cx;
      var g = v.cy;
      var b = v.radius;
      n = {
        cx: m,
        cy: g,
        startAngle: v.startAngle,
        endAngle: v.endAngle,
        innerRadius: b,
        outerRadius: b
      };
      i = fN;
      a = iI.cursorLine;
    } else {
      n = {
        points: function (e, t, r) {
          if (e === "horizontal") {
            return [{
              x: t.x,
              y: r.top
            }, {
              x: t.x,
              y: r.top + r.height
            }];
          }
          if (e === "vertical") {
            return [{
              x: r.left,
              y: t.y
            }, {
              x: r.left + r.width,
              y: t.y
            }];
          }
          if (fm(t)) {
            if (e === "centric") {
              var n = t.cx;
              var i = t.cy;
              var a = t.innerRadius;
              var o = t.outerRadius;
              var l = t.angle;
              var u = iP(n, i, a, l);
              var c = iP(n, i, o, l);
              return [{
                x: u.x,
                y: u.y
              }, {
                x: c.x,
                y: c.y
              }];
            }
            return gC(t);
          }
        }(d, o, s)
      };
      i = fj;
      a = iI.cursorLine;
    }
    var x = typeof p == "object" && "className" in p ? p.className : undefined;
    var w = gN(gN(gN(gN({
      stroke: "#ccc",
      pointerEvents: "none"
    }, s), n), sY(p)), {}, {
      payload: l,
      payloadIndex: c,
      className: u("recharts-tooltip-cursor", x)
    });
    return tS.createElement(hN, {
      zIndex: e.zIndex ?? a
    }, tS.createElement(gL, {
      cursor: p,
      cursorComp: i,
      cursorProps: w
    }));
  }
  function gz(e) {
    var t;
    var r;
    var n;
    t = tM(cj);
    r = tM(pw);
    n = tM(pg);
    var i = t && n ? ta(gM(gM({}, t), {}, {
      scale: n
    }), r) : ta(undefined, r);
    var a = n0();
    var o = n3();
    var l = ym();
    if (i == null || a == null || o == null || l == null) {
      return null;
    } else {
      return tS.createElement(gR, g_({}, e, {
        offset: a,
        layout: o,
        tooltipAxisBandSize: i,
        chartName: l
      }));
    }
  }
  function gB(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function gF(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        gB(Object(r), true).forEach(function (t) {
          var n;
          var i;
          var a;
          n = e;
          i = t;
          a = r[t];
          if ((i = function (e) {
            var t = function (e, t) {
              if (typeof e != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r !== undefined) {
                var n = r.call(e, t || "default");
                if (typeof n != "object") {
                  return n;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (t === "string" ? String : Number)(e);
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return t + "";
            }
          }(i)) in n) {
            Object.defineProperty(n, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        gB(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function gU(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    for (var r = 0, n = Array(t); r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  function g$(e) {
    return e.dataKey;
  }
  var gK = [];
  var gW = {
    allowEscapeViewBox: {
      x: false,
      y: false
    },
    animationDuration: 400,
    animationEasing: "ease",
    axisId: 0,
    contentStyle: {},
    cursor: true,
    filterNull: true,
    includeHidden: false,
    isAnimationActive: "auto",
    itemSorter: "name",
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: {
      x: false,
      y: false
    },
    separator: " : ",
    trigger: "hover",
    useTranslate3d: false,
    wrapperStyle: {}
  };
  e.s(["Tooltip", 0, function (e) {
    var t;
    var r;
    var n;
    var i;
    var a;
    var o;
    var l;
    var u;
    var c;
    var f;
    var d = fI(e, gW);
    var p = d.active;
    var h = d.allowEscapeViewBox;
    var y = d.animationDuration;
    var v = d.animationEasing;
    var m = d.content;
    var g = d.filterNull;
    var b = d.isAnimationActive;
    var x = d.offset;
    var w = d.payloadUniqBy;
    var O = d.position;
    var A = d.reverseDirection;
    var S = d.useTranslate3d;
    var E = d.wrapperStyle;
    var P = d.cursor;
    var j = d.shared;
    var k = d.trigger;
    var I = d.defaultIndex;
    var C = d.portal;
    var T = d.axisId;
    var M = tk();
    var _ = typeof I == "number" ? String(I) : I;
    (0, tS.useEffect)(() => {
      M(dA({
        shared: j,
        trigger: k,
        axisId: T,
        active: p,
        defaultIndex: _
      }));
    }, [M, j, k, T, p, _]);
    var D = nQ();
    var N = vH();
    var L = tM(e => dL(e, j));
    var R = tM(e => yC(e, L, k, _)) ?? {};
    var z = R.activeIndex;
    var B = R.isActive;
    var F = tM(e => yI(e, L, k, _));
    var U = tM(e => yk(e, L, k, _));
    var $ = tM(e => yj(e, L, k, _));
    var K = (0, tS.useContext)(mr);
    var W = (f = p ?? B) != null && f;
    var V = function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(t = gh([F, W])) || function (e) {
      var t = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (t != null) {
        var r;
        var n;
        var i;
        var a;
        var o = [];
        var l = true;
        var u = false;
        try {
          i = (t = t.call(e)).next;
          false;
          for (; !(l = (r = i.call(t)).done) && (o.push(r.value), o.length !== 2); l = true);
        } catch (e) {
          u = true;
          n = e;
        } finally {
          try {
            if (!l && t.return != null && (a = t.return(), Object(a) !== a)) {
              return;
            }
          } finally {
            if (u) {
              throw n;
            }
          }
        }
        return o;
      }
    }(t) || function (e) {
      if (e) {
        if (typeof e == "string") {
          return gU(e, 2);
        }
        var t = {}.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor) {
          t = e.constructor.name;
        }
        if (t === "Map" || t === "Set") {
          return Array.from(e);
        } else if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) {
          return gU(e, 2);
        } else {
          return undefined;
        }
      }
    }(t) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
    var H = V[0];
    var G = V[1];
    var Y = L === "axis" ? U : undefined;
    r = tM(e => yS(e, L, k));
    n = tM(pI);
    i = tM(iO);
    a = tM(ix);
    o = tM(iw);
    u = ((l = tM(v8)) == null ? undefined : l.sourceViewBox) != null;
    c = nQ();
    (0, tS.useEffect)(() => {
      if (!u && a != null && i != null) {
        var e = dC({
          active: W,
          coordinate: $,
          dataKey: r,
          index: z,
          label: typeof Y == "number" ? String(Y) : Y,
          sourceViewBox: c,
          graphicalItemId: n
        });
        v3.emit(v6, a, e, i);
      }
    }, [u, $, r, n, z, Y, i, a, o, W, c]);
    var q = C ?? K;
    if (q == null || D == null || L == null) {
      return null;
    }
    var X = F ?? gK;
    if (!W) {
      X = gK;
    }
    if (g && X.length) {
      X = gs(X.filter(e => e.value != null && (e.hide !== true || d.includeHidden)), w, g$);
    }
    var Z = X.length > 0;
    var Q = gF(gF({}, d), {}, {
      payload: X,
      label: Y,
      active: W,
      activeIndex: z,
      coordinate: $,
      accessibilityLayer: N
    });
    var J = tS.createElement(mz, {
      allowEscapeViewBox: h,
      animationDuration: y,
      animationEasing: v,
      isAnimationActive: b,
      active: W,
      coordinate: $,
      hasPayload: Z,
      offset: x,
      position: O,
      reverseDirection: A,
      useTranslate3d: S,
      viewBox: D,
      wrapperStyle: E,
      lastBoundingBox: H,
      innerRef: G,
      hasPortalFromProps: !!C
    }, tS.isValidElement(m) ? tS.cloneElement(m, Q) : typeof m == "function" ? tS.createElement(m, Q) : tS.createElement(mT, Q));
    return tS.createElement(tS.Fragment, null, (0, hw.createPortal)(J, q), W && tS.createElement(gz, {
      cursor: P,
      tooltipEventType: L,
      coordinate: $,
      payload: X,
      index: z
    }));
  }], 81615);
}, 26326, (e, t, r) => {
  "use strict";

  var n = Object.prototype.hasOwnProperty;
  var i = "~";
  function a() {}
  function o(e, t, r) {
    this.fn = e;
    this.context = t;
    this.once = r || false;
  }
  function l(e, t, r, n, a) {
    if (typeof r != "function") {
      throw TypeError("The listener must be a function");
    }
    var l = new o(r, n || e, a);
    var u = i ? i + t : t;
    if (e._events[u]) {
      if (e._events[u].fn) {
        e._events[u] = [e._events[u], l];
      } else {
        e._events[u].push(l);
      }
    } else {
      e._events[u] = l;
      e._eventsCount++;
    }
    return e;
  }
  function u(e, t) {
    if (--e._eventsCount == 0) {
      e._events = new a();
    } else {
      delete e._events[t];
    }
  }
  function c() {
    this._events = new a();
    this._eventsCount = 0;
  }
  if (Object.create) {
    a.prototype = Object.create(null);
    if (!new a().__proto__) {
      i = false;
    }
  }
  c.prototype.eventNames = function () {
    var e;
    var t;
    var r = [];
    if (this._eventsCount === 0) {
      return r;
    }
    for (t in e = this._events) {
      if (n.call(e, t)) {
        r.push(i ? t.slice(1) : t);
      }
    }
    if (Object.getOwnPropertySymbols) {
      return r.concat(Object.getOwnPropertySymbols(e));
    } else {
      return r;
    }
  };
  c.prototype.listeners = function (e) {
    var t = i ? i + e : e;
    var r = this._events[t];
    if (!r) {
      return [];
    }
    if (r.fn) {
      return [r.fn];
    }
    for (var n = 0, a = r.length, o = Array(a); n < a; n++) {
      o[n] = r[n].fn;
    }
    return o;
  };
  c.prototype.listenerCount = function (e) {
    var t = i ? i + e : e;
    var r = this._events[t];
    if (r) {
      if (r.fn) {
        return 1;
      } else {
        return r.length;
      }
    } else {
      return 0;
    }
  };
  c.prototype.emit = function (e, t, r, n, a, o) {
    var l = i ? i + e : e;
    if (!this._events[l]) {
      return false;
    }
    var u;
    var c;
    var s = this._events[l];
    var f = arguments.length;
    if (s.fn) {
      if (s.once) {
        this.removeListener(e, s.fn, undefined, true);
      }
      switch (f) {
        case 1:
          s.fn.call(s.context);
          return true;
        case 2:
          s.fn.call(s.context, t);
          return true;
        case 3:
          s.fn.call(s.context, t, r);
          return true;
        case 4:
          s.fn.call(s.context, t, r, n);
          return true;
        case 5:
          s.fn.call(s.context, t, r, n, a);
          return true;
        case 6:
          s.fn.call(s.context, t, r, n, a, o);
          return true;
      }
      c = 1;
      u = Array(f - 1);
      for (; c < f; c++) {
        u[c - 1] = arguments[c];
      }
      s.fn.apply(s.context, u);
    } else {
      var d;
      var p = s.length;
      for (c = 0; c < p; c++) {
        if (s[c].once) {
          this.removeListener(e, s[c].fn, undefined, true);
        }
        switch (f) {
          case 1:
            s[c].fn.call(s[c].context);
            break;
          case 2:
            s[c].fn.call(s[c].context, t);
            break;
          case 3:
            s[c].fn.call(s[c].context, t, r);
            break;
          case 4:
            s[c].fn.call(s[c].context, t, r, n);
            break;
          default:
            if (!u) {
              d = 1;
              u = Array(f - 1);
              for (; d < f; d++) {
                u[d - 1] = arguments[d];
              }
            }
            s[c].fn.apply(s[c].context, u);
        }
      }
    }
    return true;
  };
  c.prototype.on = function (e, t, r) {
    return l(this, e, t, r, false);
  };
  c.prototype.once = function (e, t, r) {
    return l(this, e, t, r, true);
  };
  c.prototype.removeListener = function (e, t, r, n) {
    var a = i ? i + e : e;
    if (!this._events[a]) {
      return this;
    }
    if (!t) {
      u(this, a);
      return this;
    }
    var o = this._events[a];
    if (o.fn) {
      if (o.fn === t && (!n || !!o.once) && (!r || o.context === r)) {
        u(this, a);
      }
    } else {
      for (var l = 0, c = [], s = o.length; l < s; l++) {
        if (o[l].fn !== t || n && !o[l].once || r && o[l].context !== r) {
          c.push(o[l]);
        }
      }
      if (c.length) {
        this._events[a] = c.length === 1 ? c[0] : c;
      } else {
        u(this, a);
      }
    }
    return this;
  };
  c.prototype.removeAllListeners = function (e) {
    var t;
    if (e) {
      t = i ? i + e : e;
      if (this._events[t]) {
        u(this, t);
      }
    } else {
      this._events = new a();
      this._eventsCount = 0;
    }
    return this;
  };
  c.prototype.off = c.prototype.removeListener;
  c.prototype.addListener = c.prototype.on;
  c.prefixed = i;
  c.EventEmitter = c;
  t.exports = c;
}, 36469, (e, t, r) => {
  "use strict";

  var n = typeof Symbol == "function" && Symbol.for;
  var i = n ? Symbol.for("react.element") : 60103;
  var a = n ? Symbol.for("react.portal") : 60106;
  var o = n ? Symbol.for("react.fragment") : 60107;
  var l = n ? Symbol.for("react.strict_mode") : 60108;
  var u = n ? Symbol.for("react.profiler") : 60114;
  var c = n ? Symbol.for("react.provider") : 60109;
  var s = n ? Symbol.for("react.context") : 60110;
  var f = n ? Symbol.for("react.async_mode") : 60111;
  var d = n ? Symbol.for("react.concurrent_mode") : 60111;
  var p = n ? Symbol.for("react.forward_ref") : 60112;
  var h = n ? Symbol.for("react.suspense") : 60113;
  var y = n ? Symbol.for("react.suspense_list") : 60120;
  var v = n ? Symbol.for("react.memo") : 60115;
  var m = n ? Symbol.for("react.lazy") : 60116;
  var g = n ? Symbol.for("react.block") : 60121;
  var b = n ? Symbol.for("react.fundamental") : 60117;
  var x = n ? Symbol.for("react.responder") : 60118;
  var w = n ? Symbol.for("react.scope") : 60119;
  function O(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case i:
          switch (e = e.type) {
            case f:
            case d:
            case o:
            case u:
            case l:
            case h:
              return e;
            default:
              switch (e = e && e.$$typeof) {
                case s:
                case p:
                case m:
                case v:
                case c:
                  return e;
                default:
                  return t;
              }
          }
        case a:
          return t;
      }
    }
  }
  function A(e) {
    return O(e) === d;
  }
  r.AsyncMode = f;
  r.ConcurrentMode = d;
  r.ContextConsumer = s;
  r.ContextProvider = c;
  r.Element = i;
  r.ForwardRef = p;
  r.Fragment = o;
  r.Lazy = m;
  r.Memo = v;
  r.Portal = a;
  r.Profiler = u;
  r.StrictMode = l;
  r.Suspense = h;
  r.isAsyncMode = function (e) {
    return A(e) || O(e) === f;
  };
  r.isConcurrentMode = A;
  r.isContextConsumer = function (e) {
    return O(e) === s;
  };
  r.isContextProvider = function (e) {
    return O(e) === c;
  };
  r.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === i;
  };
  r.isForwardRef = function (e) {
    return O(e) === p;
  };
  r.isFragment = function (e) {
    return O(e) === o;
  };
  r.isLazy = function (e) {
    return O(e) === m;
  };
  r.isMemo = function (e) {
    return O(e) === v;
  };
  r.isPortal = function (e) {
    return O(e) === a;
  };
  r.isProfiler = function (e) {
    return O(e) === u;
  };
  r.isStrictMode = function (e) {
    return O(e) === l;
  };
  r.isSuspense = function (e) {
    return O(e) === h;
  };
  r.isValidElementType = function (e) {
    return typeof e == "string" || typeof e == "function" || e === o || e === d || e === u || e === l || e === h || e === y || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === v || e.$$typeof === c || e.$$typeof === s || e.$$typeof === p || e.$$typeof === b || e.$$typeof === x || e.$$typeof === w || e.$$typeof === g);
  };
  r.typeOf = O;
}, 21849, (e, t, r) => {
  "use strict";

  e.i(93677);
  t.exports = e.r(36469);
}, 80268, (e, t, r) => {
  "use strict";

  var n = e.r(10977);
  var i = typeof Object.is == "function" ? Object.is : function (e, t) {
    return e === t && (e !== 0 || 1 / e == 1 / t) || e != e && t != t;
  };
  var a = n.useState;
  var o = n.useEffect;
  var l = n.useLayoutEffect;
  var u = n.useDebugValue;
  function c(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !i(e, r);
    } catch (e) {
      return true;
    }
  }
  var s = typeof window === "undefined" || window.document === undefined || window.document.createElement === undefined ? function (e, t) {
    return t();
  } : function (e, t) {
    var r = t();
    var n = a({
      inst: {
        value: r,
        getSnapshot: t
      }
    });
    var i = n[0].inst;
    var s = n[1];
    l(function () {
      i.value = r;
      i.getSnapshot = t;
      if (c(i)) {
        s({
          inst: i
        });
      }
    }, [e, r, t]);
    o(function () {
      if (c(i)) {
        s({
          inst: i
        });
      }
      return e(function () {
        if (c(i)) {
          s({
            inst: i
          });
        }
      });
    }, [e]);
    u(r);
    return r;
  };
  r.useSyncExternalStore = n.useSyncExternalStore !== undefined ? n.useSyncExternalStore : s;
}, 86278, (e, t, r) => {
  "use strict";

  e.i(93677);
  t.exports = e.r(80268);
}, 93581, (e, t, r) => {
  "use strict";

  var n = e.r(10977);
  var i = e.r(86278);
  var a = typeof Object.is == "function" ? Object.is : function (e, t) {
    return e === t && (e !== 0 || 1 / e == 1 / t) || e != e && t != t;
  };
  var o = i.useSyncExternalStore;
  var l = n.useRef;
  var u = n.useEffect;
  var c = n.useMemo;
  var s = n.useDebugValue;
  r.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
    var f = l(null);
    if (f.current === null) {
      var d = {
        hasValue: false,
        value: null
      };
      f.current = d;
    } else {
      d = f.current;
    }
    var p = o(e, (f = c(function () {
      function e(e) {
        if (!u) {
          u = true;
          o = e;
          e = n(e);
          if (i !== undefined && d.hasValue) {
            var t = d.value;
            if (i(t, e)) {
              return l = t;
            }
          }
          return l = e;
        }
        t = l;
        if (a(o, e)) {
          return t;
        }
        var r = n(e);
        if (i !== undefined && i(t, r)) {
          o = e;
          return t;
        } else {
          o = e;
          return l = r;
        }
      }
      var o;
      var l;
      var u = false;
      var c = r === undefined ? null : r;
      return [function () {
        return e(t());
      }, c === null ? undefined : function () {
        return e(c());
      }];
    }, [t, r, n, i]))[0], f[1]);
    u(function () {
      d.hasValue = true;
      d.value = p;
    }, [p]);
    s(p);
    return p;
  };
}, 42782, (e, t, r) => {
  "use strict";

  e.i(93677);
  t.exports = e.r(93581);
}, 76869, (e, t, r) => {
  "use strict";

  var n = e.r(10977);
  var i = typeof Object.is == "function" ? Object.is : function (e, t) {
    return e === t && (e !== 0 || 1 / e == 1 / t) || e != e && t != t;
  };
  var a = n.useSyncExternalStore;
  var o = n.useRef;
  var l = n.useEffect;
  var u = n.useMemo;
  var c = n.useDebugValue;
  r.useSyncExternalStoreWithSelector = function (e, t, r, n, s) {
    var f = o(null);
    if (f.current === null) {
      var d = {
        hasValue: false,
        value: null
      };
      f.current = d;
    } else {
      d = f.current;
    }
    var p = a(e, (f = u(function () {
      function e(e) {
        if (!l) {
          l = true;
          a = e;
          e = n(e);
          if (s !== undefined && d.hasValue) {
            var t = d.value;
            if (s(t, e)) {
              return o = t;
            }
          }
          return o = e;
        }
        t = o;
        if (i(a, e)) {
          return t;
        }
        var r = n(e);
        if (s !== undefined && s(t, r)) {
          a = e;
          return t;
        } else {
          a = e;
          return o = r;
        }
      }
      var a;
      var o;
      var l = false;
      var u = r === undefined ? null : r;
      return [function () {
        return e(t());
      }, u === null ? undefined : function () {
        return e(u());
      }];
    }, [t, r, n, s]))[0], f[1]);
    l(function () {
      d.hasValue = true;
      d.value = p;
    }, [p]);
    c(p);
    return p;
  };
}, 66854, (e, t, r) => {
  "use strict";

  e.i(93677);
  t.exports = e.r(76869);
}]);
