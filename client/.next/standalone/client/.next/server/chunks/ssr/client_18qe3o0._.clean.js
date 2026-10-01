module.exports = [24547, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(9651);
  var d = c;
  var e = a.i(86347);
  var f = a.i(64187);
  var g = a.i(80468);
  var h = a.i(10864);
  var i = a.i(32929);
  var j = a.i(47525);
  function k() {
    return (k = Object.assign.bind()).apply(null, arguments);
  }
  var l = a => {
    var b = a.cx;
    var d = a.cy;
    var f = a.r;
    var g = a.className;
    var l = (0, e.clsx)("recharts-dot", g);
    if ((0, j.isNumber)(b) && (0, j.isNumber)(d) && (0, j.isNumber)(f)) {
      return c.createElement("circle", k({}, (0, i.svgPropertiesNoEvents)(a), (0, h.adaptEventHandlers)(a), {
        className: l,
        cx: b,
        cy: d,
        r: f
      }));
    } else {
      return null;
    }
  };
  var m = a.i(33856);
  var n = a.i(89367);
  var o = a.i(79370);
  var p = a.i(77340);
  var q = ["points"];
  function r(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function s(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        r(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        r(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  function t() {
    return (t = Object.assign.bind()).apply(null, arguments);
  }
  function u(a) {
    var b = a.option;
    var d = a.dotProps;
    var f = a.className;
    if ((0, c.isValidElement)(b)) {
      return (0, c.cloneElement)(b, d);
    }
    if (typeof b == "function") {
      return b(d);
    }
    var g = (0, e.clsx)(f, typeof b != "boolean" ? b.className : "");
    var h = d ?? {};
    h.points;
    var i = function (a, b) {
      if (a == null) {
        return {};
      }
      var c;
      var d;
      var e = function (a, b) {
        if (a == null) {
          return {};
        }
        var c = {};
        for (var d in a) {
          if ({}.hasOwnProperty.call(a, d)) {
            if (b.indexOf(d) !== -1) {
              continue;
            }
            c[d] = a[d];
          }
        }
        return c;
      }(a, b);
      if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(a);
        for (d = 0; d < f.length; d++) {
          c = f[d];
          if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
            e[c] = a[c];
          }
        }
      }
      return e;
    }(h, q);
    return c.createElement(l, t({}, i, {
      className: g
    }));
  }
  function v(a) {
    var b = a.points;
    var d = a.dot;
    var e = a.className;
    var g = a.dotClassName;
    var h = a.dataKey;
    var i = a.baseProps;
    var j = a.needClip;
    var k = a.clipPathId;
    var l = a.zIndex;
    var q = l === undefined ? p.DefaultZIndexes.scatter : l;
    if (b == null || !d && b.length !== 1) {
      return null;
    }
    var r = (0, m.isClipDot)(d);
    var v = (0, n.svgPropertiesAndEventsFromUnknown)(d);
    var w = b.map((a, e) => {
      var k = s(s(s({
        r: 3
      }, i), v), {}, {
        index: e,
        cx: a.x ?? undefined,
        cy: a.y ?? undefined,
        dataKey: h,
        value: a.value,
        payload: a.payload,
        points: b
      });
      return c.createElement(u, {
        key: `dot-${e}`,
        option: d,
        dotProps: k,
        className: g
      });
    });
    var x = {};
    if (j && k != null) {
      x.clipPath = `url(#clipPath-${r ? "" : "dots-"}${k})`;
    }
    return c.createElement(o.ZIndexLayer, {
      zIndex: q
    }, c.createElement(f.Layer, t({
      className: e
    }, x), w));
  }
  var w = a.i(66067);
  var x = a.i(61537);
  var y = a.i(25855);
  var z = a.i(98164);
  function A(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function B(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        A(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        A(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  var C = a => {
    var b;
    var d = a.point;
    var e = a.childIndex;
    var g = a.mainColor;
    var j = a.activeDot;
    var k = a.dataKey;
    var m = a.clipPath;
    if (j === false || d.x == null || d.y == null) {
      return null;
    }
    var n = B(B(B({}, {
      index: e,
      dataKey: k,
      cx: d.x,
      cy: d.y,
      r: 4,
      fill: g ?? "none",
      strokeWidth: 2,
      stroke: "#fff",
      payload: d.payload,
      value: d.value
    }), (0, i.svgPropertiesNoEventsFromUnknown)(j)), (0, h.adaptEventHandlers)(j));
    b = (0, c.isValidElement)(j) ? (0, c.cloneElement)(j, n) : typeof j == "function" ? j(n) : c.createElement(l, n);
    return c.createElement(f.Layer, {
      className: "recharts-active-dot",
      clipPath: m
    }, b);
  };
  function D(a) {
    var b = a.points;
    var d = a.mainColor;
    var e = a.activeDot;
    var f = a.itemDataKey;
    var g = a.clipPath;
    var h = a.zIndex;
    var i = h === undefined ? p.DefaultZIndexes.activeDot : h;
    var k = (0, x.useAppSelector)(y.selectActiveTooltipIndex);
    var l = (0, z.useActiveTooltipDataPoints)();
    if (b == null || l == null) {
      return null;
    }
    var m = b.find(a => l.includes(a.payload));
    if ((0, j.isNullish)(m)) {
      return null;
    } else {
      return c.createElement(o.ZIndexLayer, {
        zIndex: i
      }, c.createElement(C, {
        point: m,
        childIndex: Number(k),
        mainColor: d,
        dataKey: f,
        activeDot: e,
        clipPath: g
      }));
    }
  }
  var E = a.i(45863);
  var F = a.i(1578);
  function G(a, b) {
    var e = (0, x.useAppSelector)(b => (0, F.selectXAxisSettings)(b, a));
    var f = (0, x.useAppSelector)(a => (0, F.selectYAxisSettings)(a, b));
    var g = (e == null ? undefined : e.allowDataOverflow) ?? F.implicitXAxis.allowDataOverflow;
    var h = (f == null ? undefined : f.allowDataOverflow) ?? F.implicitYAxis.allowDataOverflow;
    return {
      needClip: g || h,
      needClipX: g,
      needClipY: h
    };
  }
  function H(a) {
    var b = a.xAxisId;
    var d = a.yAxisId;
    var e = a.clipPathId;
    var f = (0, z.usePlotArea)();
    var g = G(b, d);
    var h = g.needClipX;
    var i = g.needClipY;
    var j = g.needClip;
    var k = (0, x.useAppSelector)(a => (0, F.selectXAxisRange)(a, b, false));
    var l = (0, x.useAppSelector)(a => (0, F.selectYAxisRange)(a, d, false));
    if (!j || !f) {
      return null;
    }
    var m = f.x;
    var n = f.y;
    var o = f.width;
    var p = f.height;
    var q = h && k ? Math.min(k[0], k[1]) : m - o / 2;
    var r = i && l ? Math.min(l[0], l[1]) : n - p / 2;
    var s = h && k ? Math.abs(k[1] - k[0]) : o * 2;
    var t = i && l ? Math.abs(l[1] - l[0]) : p * 2;
    return c.createElement("clipPath", {
      id: `clipPath-${e}`
    }, c.createElement("rect", {
      x: q,
      y: r,
      width: s,
      height: t
    }));
  }
  var I = a.i(99650);
  var J = a.i(58328);
  var K = a.i(150);
  var L = a.i(60585);
  var M = a.i(39537);
  var N = a.i(12711);
  function O(a, b) {
    var d;
    return ((d = a.graphicalItems.cartesianItems.find(a => a.id === b)) == null ? undefined : d.xAxisId) ?? N.defaultAxisId;
  }
  function P(a, b) {
    var d;
    return ((d = a.graphicalItems.cartesianItems.find(a => a.id === b)) == null ? undefined : d.yAxisId) ?? N.defaultAxisId;
  }
  var Q = (a, b, c) => (0, F.selectAxisWithScale)(a, "xAxis", O(a, b), c);
  var R = (a, b, c) => (0, F.selectTicksOfGraphicalItem)(a, "xAxis", O(a, b), c);
  var S = (a, b, c) => (0, F.selectAxisWithScale)(a, "yAxis", P(a, b), c);
  var T = (a, b, c) => (0, F.selectTicksOfGraphicalItem)(a, "yAxis", P(a, b), c);
  var U = (0, I.createSelector)([J.selectChartLayout, Q, S, R, T], (a, b, c, d, e) => (0, w.isCategoricalAxis)(a, "xAxis") ? (0, w.getBandSizeOfAxis)(b, d, false) : (0, w.getBandSizeOfAxis)(c, e, false));
  var V = (0, I.createSelector)([F.selectUnfilteredCartesianItems, (a, b) => b], (a, b) => a.filter(a => a.type === "area").find(a => a.id === b));
  var W = a => {
    var b = (0, J.selectChartLayout)(a);
    if ((0, w.isCategoricalAxis)(b, "xAxis")) {
      return "yAxis";
    } else {
      return "xAxis";
    }
  };
  var X = (a, b, c) => (0, F.selectStackGroups)(a, W(a), W(a) === "yAxis" ? P(a, b) : O(a, b), c);
  var Y = (0, I.createSelector)([V, X], (a, b) => {
    if (a != null && b != null) {
      var c;
      var d = a.stackId;
      var e = (0, L.getStackSeriesIdentifier)(a);
      if (d != null && e != null) {
        var f = (c = b[d]) == null ? undefined : c.stackedData;
        var g = f == null ? undefined : f.find(a => a.key === e);
        if (g != null) {
          return g.map(a => [a[0], a[1]]);
        }
      }
    }
  });
  var Z = (0, I.createSelector)([V, X], (a, b) => {
    if (a != null && a.stackId != null && b != null) {
      var c = b[a.stackId];
      if (c != null) {
        return c.graphicalItems.map(a => a.dataKey).filter(j.isNotNil);
      }
    }
  });
  var $ = (0, I.createSelector)([J.selectChartLayout, Q, S, R, T, Y, K.selectChartDataWithIndexesIfNotInPanoramaPosition3, U, V, M.selectChartBaseValue, Z], (a, b, c, d, e, f, g, h, i, k, l) => {
    var m;
    var n = g.chartData;
    var o = g.dataStartIndex;
    var p = g.dataEndIndex;
    if (i != null && (a === "horizontal" || a === "vertical") && b != null && c != null && d != null && e != null && d.length !== 0 && e.length !== 0 && h != null) {
      var q;
      var r;
      var s;
      var t;
      var u;
      var v;
      var x;
      var y;
      var z;
      var A;
      var B;
      var C;
      var D;
      var E;
      var F;
      var G;
      var H;
      var I;
      var J;
      var K;
      var L;
      var M;
      var N = i.data;
      if ((m = N && N.length > 0 ? N : n == null ? undefined : n.slice(o, p + 1)) != null) {
        t = (s = (q = {
          layout: a,
          xAxis: b,
          yAxis: c,
          xAxisTicks: d,
          yAxisTicks: e,
          dataStartIndex: o,
          areaSettings: i,
          stackedData: f,
          displayedData: m,
          chartBaseValue: k,
          bandSize: h,
          stackDataKeys: l
        }).areaSettings).connectNulls;
        u = s.baseValue;
        v = s.dataKey;
        x = q.stackedData;
        y = q.layout;
        z = q.chartBaseValue;
        A = q.xAxis;
        B = q.yAxis;
        C = q.displayedData;
        D = q.dataStartIndex;
        E = q.xAxisTicks;
        F = q.yAxisTicks;
        G = q.bandSize;
        H = q.stackDataKeys;
        I = x && x.length;
        J = ((a, b, c, d, e) => {
          var f = c ?? b;
          if ((0, j.isNumber)(f)) {
            return f;
          }
          var g = a === "horizontal" ? e : d;
          var h = g.scale.domain();
          if (g.type === "number") {
            var i = Math.max(h[0], h[1]);
            var k = Math.min(h[0], h[1]);
            if (f === "dataMin") {
              return k;
            } else if (f === "dataMax" || i < 0) {
              return i;
            } else {
              return Math.max(Math.min(h[0], h[1]), 0);
            }
          }
          if (f === "dataMin") {
            return h[0];
          } else if (f === "dataMax") {
            return h[1];
          } else {
            return h[0];
          }
        })(y, z, u, A, B);
        K = y === "horizontal";
        L = false;
        M = C.map((a, b) => {
          if (I) {
            f = x[D + b];
          } else {
            var d;
            var f;
            var h = (0, w.getValueByDataKey)(a, v);
            if (Array.isArray(h)) {
              f = h;
              L = true;
            } else {
              f = [J, h];
            }
          }
          var i = ((d = f) == null ? undefined : d[1]) ?? null;
          var j = (0, w.getValueByDataKey)(a, v);
          var k = I && j == null && H != null && H.length > 0 && H.every(b => (0, w.getValueByDataKey)(a, b) == null);
          var l = i == null || I && !t && j == null || k;
          if (K) {
            return {
              x: (0, w.getCateCoordinateOfLine)({
                axis: A,
                ticks: E,
                bandSize: G,
                entry: a,
                index: b
              }),
              y: l ? null : B.scale.map(i) ?? null,
              value: f,
              payload: a
            };
          } else {
            return {
              x: l ? null : A.scale.map(i) ?? null,
              y: (0, w.getCateCoordinateOfLine)({
                axis: B,
                ticks: F,
                bandSize: G,
                entry: a,
                index: b
              }),
              value: f,
              payload: a
            };
          }
        });
        r = I || L ? M.map(a => {
          var b;
          var c;
          var d = Array.isArray(a.value) ? a.value[0] : null;
          if (K) {
            return {
              x: a.x,
              y: d != null && a.y != null && (c = B.scale.map(d)) != null ? c : null,
              payload: a.payload
            };
          } else {
            return {
              x: d != null && (b = A.scale.map(d)) != null ? b : null,
              y: a.y,
              payload: a.payload
            };
          }
        }) : K ? B.scale.map(J) : A.scale.map(J);
        return {
          points: M,
          baseLine: r ?? 0,
          isRange: L
        };
      }
    }
  });
  var _ = a.i(90013);
  var aa = a.i(670);
  var ab = a.i(3219);
  var ac = a.i(85146);
  var ad = a.i(40147);
  var ae = a.i(30889);
  var af = a.i(24026);
  var ag = a.i(11448);
  var ah = a.i(50272);
  function ai(a) {
    var b = (0, i.svgPropertiesNoEventsFromUnknown)(a);
    if (b != null) {
      var c = b.r;
      var d = b.strokeWidth;
      var e = Number(c);
      var f = Number(d);
      if (Number.isNaN(e) || e < 0) {
        e = 3;
      }
      if (Number.isNaN(f) || f < 0) {
        f = 2;
      }
      return {
        r: e,
        strokeWidth: f
      };
    }
    return {
      r: 3,
      strokeWidth: 2
    };
  }
  var aj = a.i(82478);
  var ak = a.i(85773);
  var al = a.i(8679);
  var am = a.i(67187);
  var an = a.i(49241);
  var ao = ["animationElapsedTime", "isAnimating", "isEntrance", "layout", "isRange", "stroke", "connectNulls"];
  var ap = ["id", "baseLine"];
  function aq() {
    return (aq = Object.assign.bind()).apply(null, arguments);
  }
  function ar(a, b) {
    if (a == null) {
      return {};
    }
    var c;
    var d;
    var e = function (a, b) {
      if (a == null) {
        return {};
      }
      var c = {};
      for (var d in a) {
        if ({}.hasOwnProperty.call(a, d)) {
          if (b.indexOf(d) !== -1) {
            continue;
          }
          c[d] = a[d];
        }
      }
      return c;
    }(a, b);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(a);
      for (d = 0; d < f.length; d++) {
        c = f[d];
        if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
          e[c] = a[c];
        }
      }
    }
    return e;
  }
  function as(a) {
    var b;
    var d;
    var e = a.alpha;
    var f = a.baseLine;
    var g = a.points;
    var h = a.strokeWidth;
    var i = (b = g[0]) == null ? undefined : b.x;
    var k = (d = g[g.length - 1]) == null ? undefined : d.x;
    if (!(0, am.isWellBehavedNumber)(i) || !(0, am.isWellBehavedNumber)(k)) {
      return null;
    }
    var l = e * Math.abs(i - k);
    var m = Math.max(...g.map(a => a.y || 0));
    if ((0, j.isNumber)(f)) {
      m = Math.max(f, m);
    } else if (f && Array.isArray(f) && f.length) {
      m = Math.max(...f.map(a => a.y || 0), m);
    }
    if ((0, j.isNumber)(m)) {
      return c.createElement("rect", {
        x: i < k ? i : i - l,
        y: 0,
        width: l,
        height: Math.floor(m + (h ? parseInt(`${h}`, 10) : 1))
      });
    } else {
      return null;
    }
  }
  function at(a) {
    var b;
    var d;
    var e = a.alpha;
    var f = a.baseLine;
    var g = a.points;
    var h = a.strokeWidth;
    var i = (b = g[0]) == null ? undefined : b.y;
    var k = (d = g[g.length - 1]) == null ? undefined : d.y;
    if (!(0, am.isWellBehavedNumber)(i) || !(0, am.isWellBehavedNumber)(k)) {
      return null;
    }
    var l = e * Math.abs(i - k);
    var m = Math.max(...g.map(a => a.x || 0));
    if ((0, j.isNumber)(f)) {
      m = Math.max(f, m);
    } else if (f && Array.isArray(f) && f.length) {
      m = Math.max(...f.map(a => a.x || 0), m);
    }
    if ((0, j.isNumber)(m)) {
      return c.createElement("rect", {
        x: 0,
        y: i < k ? i : i - l,
        width: m + (h ? parseInt(`${h}`, 10) : 1),
        height: Math.floor(l)
      });
    } else {
      return null;
    }
  }
  function au(a) {
    var b = a.alpha;
    var d = a.layout;
    var e = a.points;
    var f = a.baseLine;
    var g = a.strokeWidth;
    if (d === "vertical") {
      return c.createElement(at, {
        alpha: b,
        points: e,
        baseLine: f,
        strokeWidth: g
      });
    } else {
      return c.createElement(as, {
        alpha: b,
        points: e,
        baseLine: f,
        strokeWidth: g
      });
    }
  }
  var av = ["id"];
  var aw = ["activeDot", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "fill", "fillOpacity", "hide", "isAnimationActive", "legendType", "stroke", "xAxisId", "yAxisId"];
  function ax() {
    return (ax = Object.assign.bind()).apply(null, arguments);
  }
  function ay(a, b) {
    if (a == null) {
      return {};
    }
    var c;
    var d;
    var e = function (a, b) {
      if (a == null) {
        return {};
      }
      var c = {};
      for (var d in a) {
        if ({}.hasOwnProperty.call(a, d)) {
          if (b.indexOf(d) !== -1) {
            continue;
          }
          c[d] = a[d];
        }
      }
      return c;
    }(a, b);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(a);
      for (d = 0; d < f.length; d++) {
        c = f[d];
        if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
          e[c] = a[c];
        }
      }
    }
    return e;
  }
  function az(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function aA(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        az(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        az(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  var aB = {
    activeDot: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
    animationMatchBy: ad.matchByIndex,
    animationInterpolateFn: (a, b) => a == null ? [] : b === 1 ? a.flatMap(a => a.status === "removed" ? [] : [a.next]) : a.flatMap(a => a.status === "matched" ? [aA(aA({}, a.next), {}, {
      x: (0, j.interpolate)(a.prev.x, a.next.x, b),
      y: (0, j.interpolate)(a.prev.y, a.next.y, b)
    })] : a.status === "added" ? [a.next] : []),
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
    shape: function (a) {
      var d = a.animationElapsedTime;
      var e = d === undefined ? 1 : d;
      var g = a.isAnimating;
      var h = a.isEntrance;
      var j = a.layout;
      var k = a.isRange;
      var l = a.stroke;
      var m = a.connectNulls;
      var n = ar(a, ao);
      var o = j === "vertical" ? "vertical" : "horizontal";
      var p = m != null && m;
      var q = (0, an.useId)();
      var r = n.id;
      var s = n.baseLine;
      var t = ar(n, ap);
      var u = (0, i.svgPropertiesNoEvents)(t);
      var v = c.createElement(al.Curve, aq({}, n, {
        id: r,
        baseLine: s,
        connectNulls: p,
        stroke: "none",
        className: "recharts-area-area",
        layout: o
      }));
      var w = l !== "none" && c.createElement(al.Curve, aq({}, u, {
        className: "recharts-area-curve",
        layout: o,
        type: n.type,
        connectNulls: p,
        fill: "none",
        stroke: l,
        points: n.points
      }));
      var x = l !== "none" && k && Array.isArray(s) && c.createElement(al.Curve, aq({}, u, {
        className: "recharts-area-curve",
        layout: o,
        type: n.type,
        connectNulls: p,
        fill: "none",
        stroke: l,
        points: s
      }));
      if (h !== undefined && h && (g !== undefined && g || e < 1)) {
        return c.createElement(f.Layer, null, c.createElement("defs", null, c.createElement("clipPath", {
          id: q
        }, c.createElement(au, {
          alpha: e,
          points: n.points ?? [],
          baseLine: s,
          layout: o,
          strokeWidth: n.strokeWidth
        }))), c.createElement(f.Layer, {
          clipPath: `url(#${q})`
        }, v, w, x));
      } else {
        return c.createElement(c.Fragment, null, v, w, x);
      }
    },
    xAxisId: 0,
    yAxisId: 0,
    zIndex: p.DefaultZIndexes.area
  };
  function aC(a, b) {
    if (a && a !== "none") {
      return a;
    } else {
      return b;
    }
  }
  var aD = d.memo(a => {
    var b = a.dataKey;
    var c = a.data;
    var e = a.stroke;
    var f = a.strokeWidth;
    var g = a.fill;
    var h = a.name;
    var i = a.hide;
    var k = a.unit;
    var l = a.formatter;
    var m = a.tooltipType;
    var n = a.id;
    var o = {
      dataDefinedOnItem: c,
      getPosition: j.noop,
      settings: {
        stroke: e,
        strokeWidth: f,
        fill: g,
        dataKey: b,
        nameKey: undefined,
        name: (0, w.getTooltipNameProp)(h, b),
        hide: i,
        type: m,
        color: aC(e, g),
        unit: k,
        formatter: l,
        graphicalItemId: n
      }
    };
    return d.createElement(E.SetTooltipEntrySettings, {
      tooltipEntrySettings: o
    });
  });
  function aE(a) {
    var b = a.clipPathId;
    var c = a.points;
    var e = a.props;
    var f = e.needClip;
    var g = e.dot;
    var h = e.dataKey;
    var j = (0, i.svgPropertiesNoEvents)(e);
    return d.createElement(v, {
      points: c,
      dot: g,
      className: "recharts-area-dots",
      dotClassName: "recharts-area-dot",
      dataKey: h,
      baseProps: j,
      needClip: f,
      clipPathId: b
    });
  }
  function aF(a) {
    var b = a.showLabels;
    var c = a.children;
    var e = a.points.map(a => {
      var d = {
        x: a.x ?? 0,
        y: a.y ?? 0,
        width: 0,
        lowerWidth: 0,
        upperWidth: 0,
        height: 0
      };
      return aA(aA({}, d), {}, {
        value: a.value,
        payload: a.payload,
        parentViewBox: undefined,
        viewBox: d,
        fill: undefined
      });
    });
    return d.createElement(g.CartesianLabelListContextProvider, {
      value: b ? e : undefined
    }, c);
  }
  function aG(a) {
    var b = a.points;
    var c = a.baseLine;
    var e = a.needClip;
    var g = a.clipPathId;
    var h = a.props;
    var i = a.animationElapsedTime;
    var j = a.isAnimating;
    var k = a.isEntrance;
    var l = h.layout;
    var m = h.type;
    var o = h.stroke;
    var p = h.connectNulls;
    var q = h.isRange;
    var r = h.shape;
    var s = h.id;
    var t = ay(h, av);
    var u = aA(aA({}, (0, n.svgPropertiesAndEvents)(t)), {}, {
      id: s,
      points: b,
      connectNulls: p,
      type: m,
      baseLine: c,
      layout: l,
      stroke: o,
      isRange: q,
      animationElapsedTime: i,
      isAnimating: j,
      isEntrance: k
    });
    return d.createElement(d.Fragment, null, (b == null ? undefined : b.length) > 1 && d.createElement(f.Layer, {
      clipPath: e ? `url(#clipPath-${g})` : undefined
    }, d.createElement(aj.Shape, {
      option: r,
      DefaultShape: aB.shape,
      shapeProps: u
    })), d.createElement(aE, {
      points: b,
      props: t,
      clipPathId: g
    }));
  }
  function aH(a) {
    var b;
    var c = a.needClip;
    var e = a.clipPathId;
    var f = a.props;
    var h = a.previousPointsRef;
    var i = a.previousBaselineRef;
    var k = f.points;
    var l = f.baseLine;
    var m = f.isAnimationActive;
    var n = f.animationBegin;
    var o = f.animationDuration;
    var p = f.animationEasing;
    var q = f.animationMatchBy;
    var r = f.animationInterpolateFn;
    var s = (0, d.useMemo)(() => ({
      points: k,
      baseLine: l
    }), [k, l]);
    var t = (0, ae.useAnimationStartSnapshot)(s, i);
    var u = (0, J.useCartesianChartLayout)();
    var v = (0, ac.useAnimationCallbacks)(f.onAnimationStart, f.onAnimationEnd);
    var w = v.isAnimating;
    var x = v.handleAnimationStart;
    var y = v.handleAnimationEnd;
    var z = t.startValue;
    if (u == null) {
      return null;
    } else {
      b = Array.isArray(l) && Array.isArray(z) ? (0, ad.matchAnimationItems)(z, l, q) : Array.isArray(l) ? (0, ad.matchAnimationItems)(null, l, q) : null;
      return d.createElement(ac.AnimatedItems, {
        animationInput: s,
        animationIdPrefix: "recharts-area-",
        items: k,
        previousItemsRef: h,
        isAnimationActive: m,
        animationBegin: n,
        animationDuration: o,
        animationEasing: p,
        onAnimationStart: x,
        onAnimationEnd: y,
        animationInterpolateFn: r,
        animationMatchBy: q,
        layout: u
      }, (a, h, i) => {
        var m;
        m = h === 1 ? l : Array.isArray(l) ? r(b, h, u) : i ? l : function (a, b, c) {
          if ((0, j.isNumber)(a)) {
            var d = (0, j.isNumber)(b) ? b : undefined;
            return (0, j.interpolate)(d, a, c);
          }
          if ((0, j.isNullish)(a) || (0, j.isNan)(a)) {
            var e = (0, j.isNumber)(b) ? b : undefined;
            return (0, j.interpolate)(e, 0, c);
          }
          return a;
        }(l, z, h);
        t.syncStepValue(m, h);
        return d.createElement(aF, {
          showLabels: !w,
          points: k
        }, f.children, d.createElement(aG, {
          points: a,
          baseLine: m,
          needClip: c,
          clipPathId: e,
          props: f,
          animationElapsedTime: h,
          isAnimating: w || h < 1,
          isEntrance: i
        }), d.createElement(g.LabelListFromLabelProp, {
          label: f.label
        }));
      });
    }
  }
  function aI(a) {
    var b = a.needClip;
    var c = a.clipPathId;
    var e = a.props;
    var f = (0, d.useRef)(null);
    var g = (0, d.useRef)();
    return d.createElement(aH, {
      needClip: b,
      clipPathId: c,
      props: e,
      previousPointsRef: f,
      previousBaselineRef: g
    });
  }
  class aJ extends d.PureComponent {
    render() {
      var a = this.props;
      var b = a.hide;
      var c = a.dot;
      var g = a.points;
      var h = a.className;
      var i = a.top;
      var j = a.left;
      var k = a.needClip;
      var l = a.xAxisId;
      var n = a.yAxisId;
      var p = a.width;
      var q = a.height;
      var r = a.id;
      var s = a.baseLine;
      var t = a.zIndex;
      if (b) {
        return null;
      }
      var u = (0, e.clsx)("recharts-area", h);
      var v = ai(c);
      var w = v.r;
      var x = v.strokeWidth;
      var y = (0, m.isClipDot)(c);
      var z = w * 2 + x;
      var A = k ? `url(#clipPath-${y ? "" : "dots-"}${r})` : undefined;
      return d.createElement(o.ZIndexLayer, {
        zIndex: t
      }, d.createElement(f.Layer, {
        className: u
      }, k && d.createElement("defs", null, d.createElement(H, {
        clipPathId: r,
        xAxisId: l,
        yAxisId: n
      }), !y && d.createElement("clipPath", {
        id: `clipPath-dots-${r}`
      }, d.createElement("rect", {
        x: j - z / 2,
        y: i - z / 2,
        width: p + z,
        height: q + z
      }))), d.createElement(aI, {
        needClip: k,
        clipPathId: r,
        props: this.props
      })), d.createElement(D, {
        points: g,
        mainColor: aC(this.props.stroke, this.props.fill),
        itemDataKey: this.props.dataKey,
        activeDot: this.props.activeDot,
        clipPath: A
      }), this.props.isRange && Array.isArray(s) && d.createElement(D, {
        points: s,
        mainColor: aC(this.props.stroke, this.props.fill),
        itemDataKey: this.props.dataKey,
        activeDot: this.props.activeDot,
        clipPath: A
      }));
    }
  }
  function aK(a) {
    var c = a.activeDot;
    var e = a.animationBegin;
    var f = a.animationDuration;
    var g = a.animationEasing;
    var h = a.connectNulls;
    var i = a.dot;
    var j = a.fill;
    var k = a.fillOpacity;
    var l = a.hide;
    var m = a.isAnimationActive;
    var n = a.legendType;
    var o = a.stroke;
    var p = a.xAxisId;
    var q = a.yAxisId;
    var r = ay(a, aw);
    var s = (0, J.useChartLayout)();
    var t = (0, aa.useChartName)();
    var u = G(p, q).needClip;
    var v = (0, _.useIsPanorama)();
    var w = (0, x.useAppSelector)(b => $(b, a.id, v)) ?? {};
    var y = w.points;
    var A = w.isRange;
    var B = w.baseLine;
    var C = (0, z.usePlotArea)();
    if (s !== "horizontal" && s !== "vertical" || C == null || t !== "AreaChart" && t !== "ComposedChart") {
      return null;
    }
    var D = C.height;
    var E = C.width;
    var F = C.x;
    var H = C.y;
    if (y && y.length) {
      return d.createElement(aJ, ax({}, r, {
        activeDot: c,
        animationBegin: e,
        animationDuration: f,
        animationEasing: g,
        baseLine: B,
        connectNulls: h,
        dot: i,
        fill: j,
        fillOpacity: k,
        height: D,
        hide: l,
        layout: s,
        isAnimationActive: m,
        isRange: A,
        legendType: n,
        needClip: u,
        points: y,
        stroke: o,
        width: E,
        left: F,
        top: H,
        xAxisId: p,
        yAxisId: q
      }));
    } else {
      return null;
    }
  }
  var _Component5 = d.memo(function (a) {
    var b = (0, af.resolveDefaultProps)(a, aB);
    var c = (0, _.useIsPanorama)();
    return d.createElement(ag.RegisterGraphicalItemId, {
      id: b.id,
      type: "area"
    }, a => {
      var e;
      var f;
      var g;
      var h;
      var i;
      return d.createElement(d.Fragment, null, d.createElement(ab.SetLegendPayload, {
        legendPayload: (e = b.dataKey, f = b.name, g = b.stroke, h = b.fill, i = b.legendType, [{
          inactive: b.hide,
          dataKey: e,
          type: i,
          color: aC(g, h),
          value: (0, w.getTooltipNameProp)(f, e),
          payload: b
        }])
      }), d.createElement(aD, {
        dataKey: b.dataKey,
        data: b.data,
        stroke: b.stroke,
        strokeWidth: b.strokeWidth,
        fill: b.fill,
        name: b.name,
        hide: b.hide,
        unit: b.unit,
        formatter: b.formatter,
        tooltipType: b.tooltipType,
        id: a
      }), d.createElement(ah.SetCartesianGraphicalItem, {
        type: "area",
        id: a,
        data: b.data,
        dataKey: b.dataKey,
        xAxisId: b.xAxisId,
        yAxisId: b.yAxisId,
        zAxisId: 0,
        stackId: (0, w.getNormalizedStackId)(b.stackId),
        hide: b.hide,
        barSize: undefined,
        baseValue: b.baseValue,
        isPanorama: c,
        connectNulls: b.connectNulls
      }), d.createElement(aK, ax({}, b, {
        id: a
      })));
    });
  }, ak.propsAreEqual);
  _Component5.displayName = "Area";
  var aM = a.i(61053);
  var aN = a.i(59963);
  var aO = a.i(94954);
  var aP = a.i(71835);
  var aQ = a.i(61888);
  var aR = a.i(42299);
  var aS = a.i(32932);
  function aT() {
    return (aT = Object.assign.bind()).apply(null, arguments);
  }
  function aU(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  var aV = function (a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        aU(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        aU(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
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
  }, a.i(70759).initialEventSettingsState);
  var aW = (0, c.forwardRef)(function (a, b) {
    var e = (0, af.resolveDefaultProps)(a.categoricalChartProps, aV);
    var f = a.chartName;
    var g = a.defaultTooltipEventType;
    var h = a.validateTooltipEventTypes;
    var i = a.tooltipPayloadSearcher;
    var j = a.categoricalChartProps;
    return c.createElement(aN.RechartsStoreProvider, {
      preloadedState: {
        options: {
          chartName: f,
          defaultTooltipEventType: g,
          validateTooltipEventTypes: h,
          tooltipPayloadSearcher: i,
          eventEmitter: undefined
        }
      },
      reduxStoreName: j.id ?? f
    }, c.createElement(aO.ChartDataContextProvider, {
      chartData: j.data
    }), c.createElement(aP.ReportMainChartProps, {
      layout: e.layout,
      margin: e.margin
    }), c.createElement(aR.ReportEventSettings, {
      throttleDelay: e.throttleDelay,
      throttledEvents: e.throttledEvents
    }), c.createElement(aQ.ReportChartProps, {
      baseValue: e.baseValue,
      accessibilityLayer: e.accessibilityLayer,
      barCategoryGap: e.barCategoryGap,
      maxBarSize: e.maxBarSize,
      stackOffset: e.stackOffset,
      barGap: e.barGap,
      barSize: e.barSize,
      syncId: e.syncId,
      syncMethod: e.syncMethod,
      className: e.className,
      reverseStackOrder: e.reverseStackOrder
    }), c.createElement(aS.CategoricalChart, aT({}, e, {
      ref: b
    })));
  });
  var aX = ["axis"];
  var _Component7 = (0, c.forwardRef)((a, b) => c.createElement(aW, {
    chartName: "AreaChart",
    defaultTooltipEventType: "axis",
    validateTooltipEventTypes: aX,
    tooltipPayloadSearcher: aM.arrayTooltipSearcher,
    categoricalChartProps: a,
    ref: b
  }));
  var aZ = a.i(8492);
  var a$ = a.i(93748);
  var a_ = a.i(49502);
  function a0(a) {
    var b = a.width;
    var c = a.height;
    var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var e = (d % 180 + 180) % 180 * Math.PI / 180;
    var f = Math.atan(c / b);
    return Math.abs(e > f && e < Math.PI - f ? c / Math.sin(e) : b / Math.cos(e));
  }
  function a1(a, b) {
    if (b < 1) {
      return [];
    }
    if (b === 1) {
      return a;
    }
    var c = [];
    for (var d = 0; d < a.length; d += b) {
      var e = a[d];
      if (e !== undefined) {
        c.push(e);
      }
    }
    return c;
  }
  function a2(a, b, c, d, e) {
    if (a * b < a * d || a * b > a * e) {
      return false;
    }
    var f = c();
    return a * (b - a * f / 2 - d) >= 0 && a * (b + a * f / 2 - e) <= 0;
  }
  function a3(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function a4(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        a3(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        a3(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  function a5(a, b, c) {
    var d;
    var e;
    var f;
    var g;
    var h;
    var k = a.tick;
    var l = a.ticks;
    var m = a.viewBox;
    var n = a.minTickGap;
    var o = a.orientation;
    var p = a.interval;
    var q = a.tickFormatter;
    var r = a.unit;
    var s = a.angle;
    if (!l || !l.length || !k) {
      return [];
    }
    if ((0, j.isNumber)(p) || a_.Global.isSsr) {
      return a1(l, ((0, j.isNumber)(p) ? p : 0) + 1) ?? [];
    }
    var t = o === "top" || o === "bottom" ? "width" : "height";
    var u = r && t === "width" ? (0, a$.getStringSize)(r, {
      fontSize: b,
      letterSpacing: c
    }) : {
      width: 0,
      height: 0
    };
    var v = (a, d) => {
      var e;
      var f = typeof q == "function" ? q(a.value, d) : a.value;
      if (t === "width") {
        e = (0, a$.getStringSize)(f, {
          fontSize: b,
          letterSpacing: c
        });
        return a0({
          width: e.width + u.width,
          height: e.height + u.height
        }, s);
      } else {
        return (0, a$.getStringSize)(f, {
          fontSize: b,
          letterSpacing: c
        })[t];
      }
    };
    var w = l[0];
    var x = l[1];
    var y = l.length >= 2 && w != null && x != null ? (0, j.mathSign)(x.coordinate - w.coordinate) : 1;
    d = t === "width";
    e = m.x;
    f = m.y;
    g = m.width;
    h = m.height;
    var z = y === 1 ? {
      start: d ? e : f,
      end: d ? e + g : f + h
    } : {
      start: d ? e + g : f + h,
      end: d ? e : f
    };
    if (p === "equidistantPreserveStart") {
      return function (a, b, c, d, e) {
        var f;
        for (var g = (d || []).slice(), h = b.start, i = b.end, j = 0, k = 1, l = h; k <= g.length;) {
          if (f = function () {
            var b;
            var f = d == null ? undefined : d[j];
            if (f === undefined) {
              return {
                v: a1(d, k)
              };
            }
            var g = j;
            var m = () => {
              if (b === undefined) {
                b = c(f, g);
              }
              return b;
            };
            var n = f.coordinate;
            var o = j === 0 || a2(a, n, m, l, i);
            if (!o) {
              j = 0;
              l = h;
              k += 1;
            }
            if (o) {
              l = n + a * (m() / 2 + e);
              j += k;
            }
          }()) {
            return f.v;
          }
        }
        return [];
      }(y, z, v, l, n);
    } else if (p === "equidistantPreserveEnd") {
      return function (a, b, c, d, e) {
        var f = (d || []).slice().length;
        if (f === 0) {
          return [];
        }
        var g = b.start;
        var h = b.end;
        for (var i = 1; i <= f; i++) {
          for (var j, k = (f - 1) % i, l = g, m = true, n = k; n < f && ((j = function () {
            var b;
            var f = d[n];
            if (f == null) {
              return 0;
            }
            var g = n;
            var i = () => {
              if (b === undefined) {
                b = c(f, g);
              }
              return b;
            };
            var j = f.coordinate;
            var o = n === k || a2(a, j, i, l, h);
            if (!o) {
              m = false;
              return 1;
            }
            if (o) {
              l = j + a * (i() / 2 + e);
            }
          }()) === 0 || j !== 1); n += i);
          if (m) {
            var o = [];
            for (var p = k; p < f; p += i) {
              var q = d[p];
              if (q != null) {
                o.push(q);
              }
            }
            return o;
          }
        }
        return [];
      }(y, z, v, l, n);
    } else {
      return (p === "preserveStart" || p === "preserveStartEnd" ? function (a, b, c, d, e, f) {
        var g = (d || []).slice();
        var h = g.length;
        var i = b.start;
        var j = b.end;
        if (f) {
          var k = d[h - 1];
          if (k != null) {
            var l = c(k, h - 1);
            var m = a * (k.coordinate + a * l / 2 - j);
            g[h - 1] = k = a4(a4({}, k), {}, {
              tickCoord: m > 0 ? k.coordinate - m * a : k.coordinate
            });
            if (k.tickCoord != null && a2(a, k.tickCoord, () => l, i, j)) {
              j = k.tickCoord - a * (l / 2 + e);
              g[h - 1] = a4(a4({}, k), {}, {
                isShow: true
              });
            }
          }
        }
        for (var n = f ? h - 1 : h, o = function (b) {
            var d;
            var f = g[b];
            if (f == null) {
              return 1;
            }
            var h = f;
            var k = () => {
              if (d === undefined) {
                d = c(f, b);
              }
              return d;
            };
            if (b === 0) {
              var l = a * (h.coordinate - a * k() / 2 - i);
              g[b] = h = a4(a4({}, h), {}, {
                tickCoord: l < 0 ? h.coordinate - l * a : h.coordinate
              });
            } else {
              g[b] = h = a4(a4({}, h), {}, {
                tickCoord: h.coordinate
              });
            }
            if (h.tickCoord != null && a2(a, h.tickCoord, k, i, j)) {
              i = h.tickCoord + a * (k() / 2 + e);
              g[b] = a4(a4({}, h), {}, {
                isShow: true
              });
            }
          }, p = 0; p < n; p++) {
          if (o(p)) {
            continue;
          }
        }
        return g;
      }(y, z, v, l, n, p === "preserveStartEnd") : function (a, b, c, d, e) {
        var f = (d || []).slice();
        var g = f.length;
        var h = b.start;
        var i = b.end;
        var j = function (b) {
          var d;
          var j = f[b];
          if (j == null) {
            return 1;
          }
          var k = j;
          var l = () => {
            if (d === undefined) {
              d = c(j, b);
            }
            return d;
          };
          if (b === g - 1) {
            var m = a * (k.coordinate + a * l() / 2 - i);
            f[b] = k = a4(a4({}, k), {}, {
              tickCoord: m > 0 ? k.coordinate - m * a : k.coordinate
            });
          } else {
            f[b] = k = a4(a4({}, k), {}, {
              tickCoord: k.coordinate
            });
          }
          if (k.tickCoord != null && a2(a, k.tickCoord, l, h, i)) {
            i = k.tickCoord - a * (l() / 2 + e);
            f[b] = a4(a4({}, k), {}, {
              isShow: true
            });
          }
        };
        for (var k = g - 1; k >= 0; k--) {
          if (j(k)) {
            continue;
          }
        }
        return f;
      }(y, z, v, l, n)).filter(a => a.isShow);
    }
  }
  var a6 = a.i(99521);
  function a7() {}
  var a8 = a.i(79728);
  var a9 = a.i(17037);
  var ba = a.i(52514);
  var bb = a.i(23820);
  function bc(a) {
    if (!a || typeof a != "object") {
      return false;
    }
    let b = Object.getPrototypeOf(a);
    return (b === null || b === Object.prototype || Object.getPrototypeOf(b) === null) && Object.prototype.toString.call(a) === "[object Object]";
  }
  var bd = a.i(76475);
  var be = a.i(16219);
  var bf = a.i(85910);
  var bg = a.i(11715);
  var bh = a.i(43339);
  var bi = ["axisLine", "width", "height", "className", "hide", "ticks", "axisType", "axisId"];
  function bj(a, b) {
    return function (a) {
      if (Array.isArray(a)) {
        return a;
      }
    }(a) || function (a, b) {
      var c = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (c != null) {
        var d;
        var e;
        var f;
        var g;
        var h = [];
        var i = true;
        var j = false;
        try {
          f = (c = c.call(a)).next;
          if (b === 0) {
            if (Object(c) !== c) {
              return;
            }
            i = false;
          } else {
            for (; !(i = (d = f.call(c)).done) && (h.push(d.value), h.length !== b); i = true);
          }
        } catch (a) {
          j = true;
          e = a;
        } finally {
          try {
            if (!i && c.return != null && (g = c.return(), Object(g) !== g)) {
              return;
            }
          } finally {
            if (j) {
              throw e;
            }
          }
        }
        return h;
      }
    }(a, b) || function (a, b) {
      if (a) {
        if (typeof a == "string") {
          return bk(a, b);
        }
        var c = {}.toString.call(a).slice(8, -1);
        if (c === "Object" && a.constructor) {
          c = a.constructor.name;
        }
        if (c === "Map" || c === "Set") {
          return Array.from(a);
        } else if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) {
          return bk(a, b);
        } else {
          return undefined;
        }
      }
    }(a, b) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function bk(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  function bl() {
    return (bl = Object.assign.bind()).apply(null, arguments);
  }
  function bm(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function bn(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        bm(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        bm(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  var bo = {
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
    zIndex: p.DefaultZIndexes.axis
  };
  function bp(a) {
    var b = a.x;
    var d = a.y;
    var f = a.width;
    var g = a.height;
    var h = a.orientation;
    var j = a.mirror;
    var k = a.axisLine;
    var l = a.otherSvgProps;
    if (!k) {
      return null;
    }
    var m = bn(bn(bn({}, l), (0, i.svgPropertiesNoEvents)(k)), {}, {
      fill: "none"
    });
    if (h === "top" || h === "bottom") {
      var n = +(h === "top" && !j || h === "bottom" && j);
      m = bn(bn({}, m), {}, {
        x1: b,
        y1: d + n * g,
        x2: b + f,
        y2: d + n * g
      });
    } else {
      var o = +(h === "left" && !j || h === "right" && j);
      m = bn(bn({}, m), {}, {
        x1: b + o * f,
        y1: d,
        x2: b + o * f,
        y2: d + g
      });
    }
    return c.createElement("line", bl({}, m, {
      className: (0, e.clsx)("recharts-cartesian-axis-line", (0, a6.default)(k, "className"))
    }));
  }
  function bq(a) {
    var b;
    var d = a.option;
    var f = a.tickProps;
    var g = a.value;
    var h = (0, e.clsx)(f.className, "recharts-cartesian-axis-tick-value");
    if (c.isValidElement(d)) {
      b = c.cloneElement(d, bn(bn({}, f), {}, {
        className: h
      }));
    } else if (typeof d == "function") {
      b = d(bn(bn({}, f), {}, {
        className: h
      }));
    } else {
      var i = "recharts-cartesian-axis-tick-value";
      if (typeof d != "boolean") {
        i = (0, e.clsx)(i, (0, bg.getClassNameFromUnknown)(d));
      }
      b = c.createElement(be.Text, bl({}, f, {
        className: i
      }), g);
    }
    return b;
  }
  function br(a) {
    var b = a.ticks;
    var d = a.axisType;
    var e = a.axisId;
    var f = (0, x.useAppDispatch)();
    var g = (0, c.useRef)(null);
    (0, c.useEffect)(() => {
      if (e != null && d != null) {
        var a;
        var c = b.map(a => ({
          value: a.value,
          coordinate: a.coordinate,
          offset: a.offset,
          index: a.index
        }));
        var h = g.current;
        if (h == null || h.axisId !== e || h.axisType !== d || !(a = h.ticks, function a(b, c, d, e, f, g, h) {
          let i = h(b, c, d, e, f, g);
          if (i !== undefined) {
            return i;
          }
          if (typeof b == typeof c) {
            switch (typeof b) {
              case "bigint":
              case "string":
              case "boolean":
              case "symbol":
              case "undefined":
              case "function":
                return b === c;
              case "number":
                return b === c || Object.is(b, c);
            }
          }
          return function b(c, d, e, f) {
            if (Object.is(c, d)) {
              return true;
            }
            let g = (0, a9.getTag)(c);
            let h = (0, a9.getTag)(d);
            if (g === "[object Arguments]") {
              g = ba.objectTag;
            }
            if (h === "[object Arguments]") {
              h = ba.objectTag;
            }
            if (g !== h) {
              return false;
            }
            switch (g) {
              case ba.stringTag:
                return c.toString() === d.toString();
              case ba.numberTag:
                return (0, bd.eq)(c.valueOf(), d.valueOf());
              case ba.booleanTag:
              case ba.dateTag:
              case ba.symbolTag:
                return Object.is(c.valueOf(), d.valueOf());
              case ba.regexpTag:
                return c.source === d.source && c.flags === d.flags;
              case ba.functionTag:
                return c === d;
            }
            let i = (e = e ?? new Map()).get(c);
            let j = e.get(d);
            if (i != null && j != null) {
              return i === d;
            }
            e.set(c, d);
            e.set(d, c);
            try {
              switch (g) {
                case ba.mapTag:
                  if (c.size !== d.size) {
                    return false;
                  }
                  for (let [b, g] of c.entries()) {
                    if (!d.has(b) || !a(g, d.get(b), b, c, d, e, f)) {
                      return false;
                    }
                  }
                  return true;
                case ba.setTag:
                  {
                    if (c.size !== d.size) {
                      return false;
                    }
                    let b = Array.from(c.values());
                    let g = Array.from(d.values());
                    for (let h = 0; h < b.length; h++) {
                      let i = b[h];
                      let j = g.findIndex(b => a(i, b, undefined, c, d, e, f));
                      if (j === -1) {
                        return false;
                      }
                      g.splice(j, 1);
                    }
                    return true;
                  }
                case ba.arrayTag:
                case ba.uint8ArrayTag:
                case ba.uint8ClampedArrayTag:
                case ba.uint16ArrayTag:
                case ba.uint32ArrayTag:
                case ba.bigUint64ArrayTag:
                case ba.int8ArrayTag:
                case ba.int16ArrayTag:
                case ba.int32ArrayTag:
                case ba.bigInt64ArrayTag:
                case ba.float32ArrayTag:
                case ba.float64ArrayTag:
                  if ((0, bb.isBuffer)(c) !== (0, bb.isBuffer)(d) || c.length !== d.length) {
                    return false;
                  }
                  for (let b = 0; b < c.length; b++) {
                    if (!a(c[b], d[b], b, c, d, e, f)) {
                      return false;
                    }
                  }
                  return true;
                case ba.arrayBufferTag:
                  if (c.byteLength !== d.byteLength) {
                    return false;
                  }
                  return b(new Uint8Array(c), new Uint8Array(d), e, f);
                case ba.dataViewTag:
                  if (c.byteLength !== d.byteLength || c.byteOffset !== d.byteOffset) {
                    return false;
                  }
                  return b(new Uint8Array(c), new Uint8Array(d), e, f);
                case ba.errorTag:
                  return c.name === d.name && c.message === d.message;
                case ba.objectTag:
                  {
                    if (!b(c.constructor, d.constructor, e, f) && (!bc(c) || !bc(d))) {
                      return false;
                    }
                    let g = [...Object.keys(c), ...(0, a8.getSymbols)(c)];
                    let h = [...Object.keys(d), ...(0, a8.getSymbols)(d)];
                    if (g.length !== h.length) {
                      return false;
                    }
                    for (let b = 0; b < g.length; b++) {
                      let h = g[b];
                      let i = c[h];
                      if (!Object.hasOwn(d, h)) {
                        return false;
                      }
                      let j = d[h];
                      if (!a(i, j, h, c, d, e, f)) {
                        return false;
                      }
                    }
                    return true;
                  }
                default:
                  return false;
              }
            } finally {
              e.delete(c);
              e.delete(d);
            }
          }(b, c, g, h);
        }(a, c, undefined, undefined, undefined, undefined, a7))) {
          g.current = {
            ticks: c,
            axisId: e,
            axisType: d
          };
          f((0, bh.setRenderedTicks)({
            ticks: c,
            axisId: e,
            axisType: d
          }));
        }
      }
    }, [f, b, e, d]);
    (0, c.useEffect)(() => e == null || d == null ? j.noop : () => {
      f((0, bh.removeRenderedTicks)({
        axisId: e,
        axisType: d
      }));
    }, [f, e, d]);
    return null;
  }
  var bs = (0, c.forwardRef)((a, b) => {
    var d = a.ticks;
    var g = a.tick;
    var k = a.tickLine;
    var l = a.stroke;
    var m = a.tickFormatter;
    var n = a.unit;
    var q = a.padding;
    var r = a.tickTextProps;
    var s = a.orientation;
    var t = a.mirror;
    var u = a.x;
    var v = a.y;
    var w = a.width;
    var x = a.height;
    var y = a.tickSize;
    var z = a.tickMargin;
    var A = a.fontSize;
    var B = a.letterSpacing;
    var C = a.getTicksConfig;
    var D = a.events;
    var E = a.axisType;
    var F = a.axisId;
    var G = a5(bn(bn({}, C), {}, {
      ticks: d === undefined ? [] : d
    }), A, B);
    var H = (0, i.svgPropertiesNoEvents)(C);
    var I = (0, i.svgPropertiesNoEventsFromUnknown)(g);
    var J = (0, be.isValidTextAnchor)(H.textAnchor) ? H.textAnchor : function (a, b) {
      switch (a) {
        case "left":
          if (b) {
            return "start";
          } else {
            return "end";
          }
        case "right":
          if (b) {
            return "end";
          } else {
            return "start";
          }
        default:
          return "middle";
      }
    }(s, t);
    var K = function (a, b) {
      switch (a) {
        case "left":
        case "right":
          return "middle";
        case "top":
          if (b) {
            return "start";
          } else {
            return "end";
          }
        default:
          if (b) {
            return "end";
          } else {
            return "start";
          }
      }
    }(s, t);
    var L = {};
    if (typeof k == "object") {
      L = k;
    }
    var M = bn(bn({}, H), {}, {
      fill: "none"
    }, L);
    var N = G.map(a => bn({
      entry: a
    }, function (a, b, c, d, e, f, g, h, i) {
      var k;
      var l;
      var m;
      var n;
      var o;
      var p;
      var q = h ? -1 : 1;
      var r = a.tickSize || g;
      var s = (0, j.isNumber)(a.tickCoord) ? a.tickCoord : a.coordinate;
      switch (f) {
        case "top":
          k = l = a.coordinate;
          p = (m = (n = c + !h * e) - q * r) - q * i;
          o = s;
          break;
        case "left":
          m = n = a.coordinate;
          o = (k = (l = b + !h * d) - q * r) - q * i;
          p = s;
          break;
        case "right":
          m = n = a.coordinate;
          o = (k = (l = b + h * d) + q * r) + q * i;
          p = s;
          break;
        default:
          k = l = a.coordinate;
          p = (m = (n = c + h * e) + q * r) + q * i;
          o = s;
      }
      return {
        line: {
          x1: k,
          y1: m,
          x2: l,
          y2: n
        },
        tick: {
          x: o,
          y: p
        }
      };
    }(a, u, v, w, x, s, y, t, z)));
    var O = N.map(a => {
      var b = a.entry;
      var d = a.line;
      return c.createElement(f.Layer, {
        className: "recharts-cartesian-axis-tick",
        key: `tick-${b.value}-${b.coordinate}-${b.tickCoord}`
      }, k && c.createElement("line", bl({}, M, d, {
        className: (0, e.clsx)("recharts-cartesian-axis-tick-line", (0, a6.default)(k, "className"))
      })));
    });
    var P = N.map((a, b) => {
      var i = a.entry;
      var j = a.tick;
      var k = bn(bn(bn(bn({
        verticalAnchor: K
      }, H), {}, {
        textAnchor: J,
        stroke: "none",
        fill: l
      }, j), {}, {
        index: b,
        payload: i,
        visibleTicksCount: G.length,
        tickFormatter: m,
        padding: q
      }, r), {}, {
        angle: (r == null ? undefined : r.angle) ?? H.angle ?? 0
      });
      var o = bn(bn({}, k), I);
      return c.createElement(f.Layer, bl({
        className: "recharts-cartesian-axis-tick-label",
        key: `tick-label-${i.value}-${i.coordinate}-${i.tickCoord}`
      }, (0, h.adaptEventsOfChild)(D, i, b)), g && c.createElement(bq, {
        option: g,
        tickProps: o,
        value: `${typeof m == "function" ? m(i.value, b) : i.value}${n || ""}`
      }));
    });
    return c.createElement("g", {
      className: `recharts-cartesian-axis-ticks recharts-${E}-ticks`
    }, c.createElement(br, {
      ticks: G,
      axisId: F,
      axisType: E
    }), P.length > 0 && c.createElement(o.ZIndexLayer, {
      zIndex: p.DefaultZIndexes.label
    }, c.createElement("g", {
      className: `recharts-cartesian-axis-tick-labels recharts-${E}-tick-labels`,
      ref: b
    }, P)), O.length > 0 && c.createElement("g", {
      className: `recharts-cartesian-axis-tick-lines recharts-${E}-tick-lines`
    }, O));
  });
  var bt = (0, c.forwardRef)((a, b) => {
    var d = a.axisLine;
    var g = a.width;
    var h = a.height;
    var j = a.className;
    var k = a.hide;
    var l = a.ticks;
    var m = a.axisType;
    var n = a.axisId;
    var p = function (a, b) {
      if (a == null) {
        return {};
      }
      var c;
      var d;
      var e = function (a, b) {
        if (a == null) {
          return {};
        }
        var c = {};
        for (var d in a) {
          if ({}.hasOwnProperty.call(a, d)) {
            if (b.indexOf(d) !== -1) {
              continue;
            }
            c[d] = a[d];
          }
        }
        return c;
      }(a, b);
      if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(a);
        for (d = 0; d < f.length; d++) {
          c = f[d];
          if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
            e[c] = a[c];
          }
        }
      }
      return e;
    }(a, bi);
    var q = bj((0, c.useState)(""), 2);
    var r = q[0];
    var s = q[1];
    var t = bj((0, c.useState)(""), 2);
    var u = t[0];
    var v = t[1];
    var w = (0, c.useRef)(null);
    (0, c.useImperativeHandle)(b, () => ({
      getCalculatedWidth: () => {
        var b;
        return (a => {
          var b = a.ticks;
          var c = a.label;
          var d = a.labelGapWithTick;
          var e = a.tickSize;
          var f = a.tickMargin;
          var g = 0;
          if (b) {
            Array.from(b).forEach(a => {
              if (a) {
                var b = a.getBoundingClientRect();
                if (b.width > g) {
                  g = b.width;
                }
              }
            });
            var h = c ? c.getBoundingClientRect().width : 0;
            return Math.round(g + ((e === undefined ? 0 : e) + (f === undefined ? 0 : f)) + h + (c ? d === undefined ? 5 : d : 0));
          }
          return 0;
        })({
          ticks: w.current,
          label: (b = a.labelRef) == null ? undefined : b.current,
          labelGapWithTick: 5,
          tickSize: a.tickSize,
          tickMargin: a.tickMargin
        });
      },
      getCalculatedHeight: () => {
        var b;
        return (a => {
          var b = a.ticks;
          var c = a.label;
          var d = a.labelGapWithTick;
          var e = a.tickSize;
          var f = a.tickMargin;
          var g = 0;
          if (b) {
            Array.from(b).forEach(a => {
              if (a) {
                var b = a.getBoundingClientRect();
                if (b.height > g) {
                  g = b.height;
                }
              }
            });
            var h = c ? c.getBoundingClientRect().height : 0;
            return Math.round(g + ((e === undefined ? 0 : e) + (f === undefined ? 0 : f)) + h + (c ? d === undefined ? 5 : d : 0));
          }
          return 0;
        })({
          ticks: w.current,
          label: (b = a.labelRef) == null ? undefined : b.current,
          labelGapWithTick: 5,
          tickSize: a.tickSize,
          tickMargin: a.tickMargin
        });
      }
    }));
    var x = (0, c.useCallback)(a => {
      if (a) {
        var b = a.getElementsByClassName("recharts-cartesian-axis-tick-value");
        w.current = b;
        var c = b[0];
        if (c) {
          var d = window.getComputedStyle(c);
          var e = d.fontSize;
          var f = d.letterSpacing;
          if (e !== r || f !== u) {
            s(e);
            v(f);
          }
        }
      }
    }, [r, u]);
    if (k || g != null && g <= 0 || h != null && h <= 0) {
      return null;
    } else {
      return c.createElement(o.ZIndexLayer, {
        zIndex: a.zIndex
      }, c.createElement(f.Layer, {
        className: (0, e.clsx)("recharts-cartesian-axis", j)
      }, c.createElement(bp, {
        x: a.x,
        y: a.y,
        width: g,
        height: h,
        orientation: a.orientation,
        mirror: a.mirror,
        axisLine: d,
        otherSvgProps: (0, i.svgPropertiesNoEvents)(a)
      }), c.createElement(bs, {
        ref: x,
        axisType: m,
        events: p,
        fontSize: r,
        getTicksConfig: a,
        height: a.height,
        letterSpacing: u,
        mirror: a.mirror,
        orientation: a.orientation,
        padding: a.padding,
        stroke: a.stroke,
        tick: a.tick,
        tickFormatter: a.tickFormatter,
        tickLine: a.tickLine,
        tickMargin: a.tickMargin,
        tickSize: a.tickSize,
        tickTextProps: a.tickTextProps,
        ticks: l,
        unit: a.unit,
        width: a.width,
        x: a.x,
        y: a.y,
        axisId: n
      }), c.createElement(bf.CartesianLabelContextProvider, {
        x: a.x,
        y: a.y,
        width: a.width,
        height: a.height,
        lowerWidth: a.width,
        upperWidth: a.width
      }, c.createElement(bf.CartesianLabelFromLabelProp, {
        label: a.label,
        labelRef: a.labelRef
      }), a.children)));
    }
  });
  var bu = c.forwardRef((a, b) => {
    var d = (0, af.resolveDefaultProps)(a, bo);
    return c.createElement(bt, bl({}, d, {
      ref: b
    }));
  });
  bu.displayName = "CartesianAxis";
  var bv = (0, c.createContext)({
    grid: {
      stroke: "#ccc",
      fill: "none"
    }
  });
  bv.Provider;
  var bw = ["x1", "y1", "x2", "y2", "key"];
  var bx = ["offset"];
  var by = ["xAxisId", "yAxisId"];
  var bz = ["xAxisId", "yAxisId"];
  function bA(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function bB(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        bA(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        bA(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  function bC() {
    return (bC = Object.assign.bind()).apply(null, arguments);
  }
  function bD(a, b) {
    if (a == null) {
      return {};
    }
    var c;
    var d;
    var e = function (a, b) {
      if (a == null) {
        return {};
      }
      var c = {};
      for (var d in a) {
        if ({}.hasOwnProperty.call(a, d)) {
          if (b.indexOf(d) !== -1) {
            continue;
          }
          c[d] = a[d];
        }
      }
      return c;
    }(a, b);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(a);
      for (d = 0; d < f.length; d++) {
        c = f[d];
        if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
          e[c] = a[c];
        }
      }
    }
    return e;
  }
  var bE = a => {
    var b = a.fill;
    if (!b || b === "none") {
      return null;
    }
    var d = a.fillOpacity;
    var e = a.x;
    var f = a.y;
    var g = a.width;
    var h = a.height;
    var i = a.ry;
    return c.createElement("rect", {
      x: e,
      y: f,
      ry: i,
      width: g,
      height: h,
      stroke: "none",
      fill: b,
      fillOpacity: d,
      className: "recharts-cartesian-grid-bg"
    });
  };
  function bF(a) {
    var b = a.option;
    var d = a.lineItemProps;
    if (c.isValidElement(b)) {
      e = c.cloneElement(b, d);
    } else if (typeof b == "function") {
      e = b(d);
    } else {
      var e;
      var g = d.x1;
      var h = d.y1;
      var j = d.x2;
      var k = d.y2;
      var l = d.key;
      var m = bD(d, bw);
      var n = (0, i.svgPropertiesNoEvents)(m) ?? {};
      n.offset;
      var o = bD(n, bx);
      var p = Array.isArray(o.strokeDasharray) ? o.strokeDasharray.join(",") : o.strokeDasharray;
      e = c.createElement("line", bC({}, o, {
        strokeDasharray: p,
        x1: g,
        y1: h,
        x2: j,
        y2: k,
        fill: "none",
        key: l
      }));
    }
    return e;
  }
  function bG(a) {
    var b = a.x;
    var d = a.width;
    var e = a.horizontal;
    var f = e === undefined || e;
    var g = a.horizontalPoints;
    if (!f || !g || !g.length) {
      return null;
    }
    a.xAxisId;
    a.yAxisId;
    var h = bD(a, by);
    var i = g.map((a, e) => {
      var g = bB(bB({}, h), {}, {
        x1: b,
        y1: a,
        x2: b + d,
        y2: a,
        key: `line-${e}`,
        index: e
      });
      return c.createElement(bF, {
        key: `line-${e}`,
        option: f,
        lineItemProps: g
      });
    });
    return c.createElement("g", {
      className: "recharts-cartesian-grid-horizontal"
    }, i);
  }
  function bH(a) {
    var b = a.y;
    var d = a.height;
    var e = a.vertical;
    var f = e === undefined || e;
    var g = a.verticalPoints;
    if (!f || !g || !g.length) {
      return null;
    }
    a.xAxisId;
    a.yAxisId;
    var h = bD(a, bz);
    var i = g.map((a, e) => {
      var g = bB(bB({}, h), {}, {
        x1: a,
        y1: b,
        x2: a,
        y2: b + d,
        key: `line-${e}`,
        index: e
      });
      return c.createElement(bF, {
        option: f,
        lineItemProps: g,
        key: `line-${e}`
      });
    });
    return c.createElement("g", {
      className: "recharts-cartesian-grid-vertical"
    }, i);
  }
  function bI(a) {
    var b = a.horizontalFill;
    var d = a.fillOpacity;
    var e = a.x;
    var f = a.y;
    var g = a.width;
    var h = a.height;
    var i = a.horizontalPoints;
    var j = a.horizontal;
    if (j !== undefined && !j || !b || !b.length || i == null) {
      return null;
    }
    var k = i.map(a => Math.round(a + f - f)).sort((a, b) => a - b);
    if (f !== k[0]) {
      k.unshift(0);
    }
    var l = k.map((a, i) => {
      var j = k[i + 1];
      var l = j == null ? f + h - a : j - a;
      if (l <= 0) {
        return null;
      }
      var m = i % b.length;
      return c.createElement("rect", {
        key: `react-${i}`,
        y: a,
        x: e,
        height: l,
        width: g,
        stroke: "none",
        fill: b[m],
        fillOpacity: d,
        className: "recharts-cartesian-grid-bg"
      });
    });
    return c.createElement("g", {
      className: "recharts-cartesian-gridstripes-horizontal"
    }, l);
  }
  function bJ(a) {
    var b = a.vertical;
    var d = a.verticalFill;
    var e = a.fillOpacity;
    var f = a.x;
    var g = a.y;
    var h = a.width;
    var i = a.height;
    var j = a.verticalPoints;
    if (b !== undefined && !b || !d || !d.length) {
      return null;
    }
    var k = j.map(a => Math.round(a + f - f)).sort((a, b) => a - b);
    if (f !== k[0]) {
      k.unshift(0);
    }
    var l = k.map((a, b) => {
      var j = k[b + 1];
      var l = j == null ? f + h - a : j - a;
      if (l <= 0) {
        return null;
      }
      var m = b % d.length;
      return c.createElement("rect", {
        key: `react-${b}`,
        x: a,
        y: g,
        width: l,
        height: i,
        stroke: "none",
        fill: d[m],
        fillOpacity: e,
        className: "recharts-cartesian-grid-bg"
      });
    });
    return c.createElement("g", {
      className: "recharts-cartesian-gridstripes-vertical"
    }, l);
  }
  var bK = (a, b) => {
    var c = a.xAxis;
    var d = a.width;
    var e = a.height;
    var f = a.offset;
    return (0, w.getCoordinatesOfGrid)(a5(bB(bB(bB({}, bo), c), {}, {
      ticks: (0, w.getTicksOfAxis)(c, true),
      viewBox: {
        x: 0,
        y: 0,
        width: d,
        height: e
      }
    })), f.left, f.left + f.width, b);
  };
  var bL = (a, b) => {
    var c = a.yAxis;
    var d = a.width;
    var e = a.height;
    var f = a.offset;
    return (0, w.getCoordinatesOfGrid)(a5(bB(bB(bB({}, bo), c), {}, {
      ticks: (0, w.getTicksOfAxis)(c, true),
      viewBox: {
        x: 0,
        y: 0,
        width: d,
        height: e
      }
    })), f.top, f.top + f.height, b);
  };
  var bM = {
    horizontal: true,
    vertical: true,
    horizontalPoints: [],
    verticalPoints: [],
    verticalFill: [],
    horizontalFill: [],
    xAxisId: 0,
    yAxisId: 0,
    syncWithTicks: false,
    zIndex: p.DefaultZIndexes.grid
  };
  function _Component(a) {
    var i = (0, J.useChartWidth)();
    var k = (0, J.useChartHeight)();
    var l = (0, J.useOffsetInternal)();
    var m = bB(bB({}, (0, af.resolveDefaultProps)(a, bM)), {}, {
      x: (0, j.isNumber)(a.x) ? a.x : l.left,
      y: (0, j.isNumber)(a.y) ? a.y : l.top,
      width: (0, j.isNumber)(a.width) ? a.width : l.width,
      height: (0, j.isNumber)(a.height) ? a.height : l.height
    });
    var n = m.xAxisId;
    var p = m.yAxisId;
    var q = m.x;
    var r = m.y;
    var s = m.width;
    var t = m.height;
    var u = m.syncWithTicks;
    var v = m.horizontalValues;
    var w = m.verticalValues;
    var y = (0, _.useIsPanorama)();
    var z = (0, x.useAppSelector)(a => (0, F.selectAxisPropsNeededForCartesianGridTicksGenerator)(a, "xAxis", n, y));
    var A = (0, x.useAppSelector)(a => (0, F.selectAxisPropsNeededForCartesianGridTicksGenerator)(a, "yAxis", p, y));
    var B = (0, c.useContext)(bv);
    var C = {
      stroke: m.stroke ?? B.grid.stroke,
      strokeWidth: m.strokeWidth ?? B.grid.strokeWidth,
      strokeOpacity: m.strokeOpacity ?? B.grid.strokeOpacity,
      strokeDasharray: m.strokeDasharray ?? B.grid.strokeDasharray
    };
    if (!(0, am.isPositiveNumber)(s) || !(0, am.isPositiveNumber)(t) || !(0, j.isNumber)(q) || !(0, j.isNumber)(r)) {
      return null;
    }
    var D = m.verticalCoordinatesGenerator || bK;
    var E = m.horizontalCoordinatesGenerator || bL;
    var G = m.horizontalPoints;
    var H = m.verticalPoints;
    if ((!G || !G.length) && typeof E == "function") {
      var I = v && v.length;
      var K = E({
        yAxis: A ? bB(bB({}, A), {}, {
          ticks: I ? v : A.ticks
        }) : undefined,
        width: i ?? s,
        height: k ?? t,
        offset: l
      }, !!I || u);
      (0, aZ.warn)(Array.isArray(K), `horizontalCoordinatesGenerator should return Array but instead it returned [${typeof K}]`);
      if (Array.isArray(K)) {
        G = K;
      }
    }
    if ((!H || !H.length) && typeof D == "function") {
      var L = w && w.length;
      var M = D({
        xAxis: z ? bB(bB({}, z), {}, {
          ticks: L ? w : z.ticks
        }) : undefined,
        width: i ?? s,
        height: k ?? t,
        offset: l
      }, !!L || u);
      (0, aZ.warn)(Array.isArray(M), `verticalCoordinatesGenerator should return Array but instead it returned [${typeof M}]`);
      if (Array.isArray(M)) {
        H = M;
      }
    }
    return c.createElement(o.ZIndexLayer, {
      zIndex: m.zIndex
    }, c.createElement("g", {
      className: "recharts-cartesian-grid"
    }, c.createElement(bE, {
      fill: m.fill ?? B.grid.fill,
      fillOpacity: m.fillOpacity ?? B.grid.fillOpacity,
      x: m.x,
      y: m.y,
      width: m.width,
      height: m.height,
      ry: m.ry
    }), c.createElement(bI, bC({}, m, {
      horizontalPoints: G
    })), c.createElement(bJ, bC({}, m, {
      verticalPoints: H
    })), c.createElement(bG, bC({}, m, C, {
      offset: l,
      horizontalPoints: G,
      xAxis: z,
      yAxis: A
    })), c.createElement(bH, bC({}, m, C, {
      offset: l,
      verticalPoints: H,
      xAxis: z,
      yAxis: A
    }))));
  }
  _Component.displayName = "CartesianGrid";
  var bO = a.i(10652);
  var bP = a.i(13655);
  var bQ = a.i(58794);
  var bR = a.i(61881);
  var bS = a.i(58456);
  var bT = a.i(41317);
  let bU = Math.cos;
  let bV = Math.sin;
  let bW = Math.sqrt;
  let bX = Math.PI;
  let bY = bX * 2;
  bW(3);
  let bZ = {
    draw(a, b) {
      let c = bW(b / bX);
      a.moveTo(c, 0);
      a.arc(0, 0, c, 0, bY);
    }
  };
  let b$ = bW(1 / 3);
  let b_ = b$ * 2;
  let b0 = bV(bX / 10) / bV(bX * 7 / 10);
  let b1 = bV(bY / 10) * b0;
  let b2 = -bU(bY / 10) * b0;
  let b3 = bW(3);
  bW(3);
  let b4 = bW(3) / 2;
  let b5 = 1 / bW(12);
  let b6 = (b5 / 2 + 1) * 3;
  var b7 = ["type", "size", "sizeType"];
  function b8() {
    return (b8 = Object.assign.bind()).apply(null, arguments);
  }
  function b9(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function ca(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        b9(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        b9(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  var cb = {
    symbolCircle: bZ,
    symbolCross: {
      draw(a, b) {
        let c = bW(b / 5) / 2;
        a.moveTo(c * -3, -c);
        a.lineTo(-c, -c);
        a.lineTo(-c, c * -3);
        a.lineTo(c, c * -3);
        a.lineTo(c, -c);
        a.lineTo(c * 3, -c);
        a.lineTo(c * 3, c);
        a.lineTo(c, c);
        a.lineTo(c, c * 3);
        a.lineTo(-c, c * 3);
        a.lineTo(-c, c);
        a.lineTo(c * -3, c);
        a.closePath();
      }
    },
    symbolDiamond: {
      draw(a, b) {
        let c = bW(b / b_);
        let d = c * b$;
        a.moveTo(0, -c);
        a.lineTo(d, 0);
        a.lineTo(0, c);
        a.lineTo(-d, 0);
        a.closePath();
      }
    },
    symbolSquare: {
      draw(a, b) {
        let c = bW(b);
        let d = -c / 2;
        a.rect(d, d, c, c);
      }
    },
    symbolStar: {
      draw(a, b) {
        let c = bW(b * 0.8908130915292852);
        let d = b1 * c;
        let e = b2 * c;
        a.moveTo(0, -c);
        a.lineTo(d, e);
        for (let b = 1; b < 5; ++b) {
          let f = bY * b / 5;
          let g = bU(f);
          let h = bV(f);
          a.lineTo(h * c, -g * c);
          a.lineTo(g * d - h * e, h * d + g * e);
        }
        a.closePath();
      }
    },
    symbolTriangle: {
      draw(a, b) {
        let c = -bW(b / (b3 * 3));
        a.moveTo(0, c * 2);
        a.lineTo(-b3 * c, -c);
        a.lineTo(b3 * c, -c);
        a.closePath();
      }
    },
    symbolWye: {
      draw(a, b) {
        let c = bW(b / b6);
        let d = c / 2;
        let e = c * b5;
        let f = c * b5 + c;
        let g = -d;
        a.moveTo(d, e);
        a.lineTo(d, f);
        a.lineTo(g, f);
        a.lineTo(d * -0.5 - b4 * e, b4 * d + e * -0.5);
        a.lineTo(d * -0.5 - b4 * f, b4 * d + f * -0.5);
        a.lineTo(g * -0.5 - b4 * f, b4 * g + f * -0.5);
        a.lineTo(d * -0.5 + b4 * e, e * -0.5 - b4 * d);
        a.lineTo(d * -0.5 + b4 * f, f * -0.5 - b4 * d);
        a.lineTo(g * -0.5 + b4 * f, f * -0.5 - b4 * g);
        a.closePath();
      }
    }
  };
  var cc = Math.PI / 180;
  var cd = a => {
    var b = a.type;
    var d = b === undefined ? "circle" : b;
    var f = a.size;
    var g = f === undefined ? 64 : f;
    var h = a.sizeType;
    var i = h === undefined ? "area" : h;
    var k = ca(ca({}, function (a, b) {
      if (a == null) {
        return {};
      }
      var c;
      var d;
      var e = function (a, b) {
        if (a == null) {
          return {};
        }
        var c = {};
        for (var d in a) {
          if ({}.hasOwnProperty.call(a, d)) {
            if (b.indexOf(d) !== -1) {
              continue;
            }
            c[d] = a[d];
          }
        }
        return c;
      }(a, b);
      if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(a);
        for (d = 0; d < f.length; d++) {
          c = f[d];
          if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
            e[c] = a[c];
          }
        }
      }
      return e;
    }(a, b7)), {}, {
      type: d,
      size: g,
      sizeType: i
    });
    var l = "circle";
    if (typeof d == "string") {
      l = d;
    }
    var m = k.className;
    var o = k.cx;
    var p = k.cy;
    var q = (0, n.svgPropertiesAndEvents)(k);
    if ((0, j.isNumber)(o) && (0, j.isNumber)(p) && (0, j.isNumber)(g)) {
      return c.createElement("path", b8({}, q, {
        className: (0, e.clsx)("recharts-symbols", m),
        transform: `translate(${o}, ${p})`,
        d: (() => {
          var a;
          a = l;
          var b = cb[`symbol${(0, j.upperFirst)(a)}`] || bZ;
          var c = function (a, b) {
            let c = null;
            let d = (0, bT.withPath)(e);
            function e() {
              let e;
              c ||= e = d();
              a.apply(this, arguments).draw(c, +b.apply(this, arguments));
              if (e) {
                c = null;
                return e + "" || null;
              }
            }
            a = typeof a == "function" ? a : (0, bS.default)(a || bZ);
            b = typeof b == "function" ? b : (0, bS.default)(b === undefined ? 64 : +b);
            e.type = function (b) {
              if (arguments.length) {
                a = typeof b == "function" ? b : (0, bS.default)(b);
                return e;
              } else {
                return a;
              }
            };
            e.size = function (a) {
              if (arguments.length) {
                b = typeof a == "function" ? a : (0, bS.default)(+a);
                return e;
              } else {
                return b;
              }
            };
            e.context = function (a) {
              if (arguments.length) {
                c = a == null ? null : a;
                return e;
              } else {
                return c;
              }
            };
            return e;
          }().type(b).size(((a, b, c) => {
            if (b === "area") {
              return a;
            }
            switch (c) {
              case "cross":
                return a * 5 * a / 9;
              case "diamond":
                return a * 0.5 * a / Math.sqrt(3);
              case "square":
                return a * a;
              case "star":
                var d = cc * 18;
                return a * 1.25 * a * (Math.tan(d) - Math.tan(d * 2) * Math.tan(d) ** 2);
              case "triangle":
                return Math.sqrt(3) * a * a / 4;
              case "wye":
                return (21 - Math.sqrt(3) * 10) * a * a / 8;
              default:
                return Math.PI * a * a / 4;
            }
          })(g, i, l))();
          if (c !== null) {
            return c;
          }
        })()
      }));
    } else {
      return null;
    }
  };
  function ce() {
    return (ce = Object.assign.bind()).apply(null, arguments);
  }
  function cf(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function cg(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        cf(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        cf(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  cd.registerSymbol = (a, b) => {
    cb[`symbol${(0, j.upperFirst)(a)}`] = b;
  };
  var ch = {
    align: "center",
    iconSize: 14,
    inactiveColor: "#ccc",
    layout: "horizontal",
    verticalAlign: "middle",
    labelStyle: {}
  };
  function ci(a) {
    var b = a.data;
    var d = a.iconType;
    var e = a.inactiveColor;
    var f = 32 / 6;
    var g = 32 / 3;
    var h = b.inactive ? e : b.color;
    var i = d ?? b.type;
    if (i === "none") {
      return null;
    }
    if (i === "plainline") {
      return c.createElement("line", {
        strokeWidth: 4,
        fill: "none",
        stroke: h,
        strokeDasharray: function (a) {
          if (typeof a == "object" && a !== null && "strokeDasharray" in a) {
            return String(a.strokeDasharray);
          }
        }(b.payload),
        x1: 0,
        y1: 16,
        x2: 32,
        y2: 16,
        className: "recharts-legend-icon"
      });
    }
    if (i === "line") {
      return c.createElement("path", {
        strokeWidth: 4,
        fill: "none",
        stroke: h,
        d: `M0,${16}h${g}
            A${f},${f},0,1,1,${g * 2},${16}
            H${32}M${g * 2},${16}
            A${f},${f},0,1,1,${g},${16}`,
        className: "recharts-legend-icon"
      });
    }
    if (i === "rect") {
      return c.createElement("path", {
        stroke: "none",
        fill: h,
        d: `M0,${4}h${32}v${24}h${-32}z`,
        className: "recharts-legend-icon"
      });
    }
    if (c.isValidElement(b.legendIcon)) {
      var j = cg({}, b);
      delete j.legendIcon;
      return c.cloneElement(b.legendIcon, j);
    }
    return c.createElement(cd, {
      fill: h,
      cx: 16,
      cy: 16,
      size: 32,
      sizeType: "diameter",
      type: i
    });
  }
  function cj(a) {
    var b = a.payload;
    var d = a.iconSize;
    var f = a.layout;
    var g = a.formatter;
    var i = a.inactiveColor;
    var j = a.iconType;
    var k = a.labelStyle;
    var l = {
      x: 0,
      y: 0,
      width: 32,
      height: 32
    };
    var m = {
      display: f === "horizontal" ? "inline-block" : "block",
      marginRight: 10,
      whiteSpace: "nowrap"
    };
    var n = {
      display: "inline-block",
      verticalAlign: "middle",
      marginRight: 4
    };
    return b.map((b, f) => {
      var o = b.formatter || g;
      var p = (0, e.clsx)({
        "recharts-legend-item": true,
        [`legend-item-${f}`]: true,
        inactive: b.inactive
      });
      if (b.type === "none") {
        return null;
      }
      var q = typeof k == "object" ? cg({}, k) : {};
      q.color = b.inactive ? i : q.color || b.color;
      if (q.whiteSpace == null) {
        q.whiteSpace = "normal";
      }
      if (q.overflowWrap == null) {
        q.overflowWrap = "break-word";
      }
      var r = o ? o(b.value, b, f) : b.value;
      return c.createElement("li", ce({
        className: p,
        style: m,
        key: `legend-item-${f}`
      }, (0, h.adaptEventsOfChild)(a, b, f)), c.createElement(bR.Surface, {
        width: d,
        height: d,
        viewBox: l,
        style: n,
        "aria-label": b.value == null ? "legend icon" : `${b.value} legend icon`
      }, c.createElement(ci, {
        data: b,
        iconType: j,
        inactiveColor: i
      })), c.createElement("span", {
        className: "recharts-legend-item-text",
        style: q
      }, r));
    });
  }
  var ck = a => {
    var b = (0, af.resolveDefaultProps)(a, ch);
    var d = b.payload;
    var e = b.layout;
    var f = b.align;
    if (d && d.length) {
      return c.createElement("ul", {
        className: "recharts-default-legend",
        style: {
          padding: 0,
          margin: 0,
          textAlign: e === "horizontal" ? f : "left"
        }
      }, c.createElement(cj, ce({}, b, {
        payload: d
      })));
    } else {
      return null;
    }
  };
  var cl = a.i(79946);
  var cm = a.i(14992);
  var cn = a.i(28162);
  var co = a.i(81478);
  var cp = a.i(17602);
  var cq = (0, I.createSelector)([cp.selectChartWidth, cp.selectChartHeight, cp.selectMargin], (a, b, c) => ({
    x: c.left || 0,
    y: c.top || 0,
    width: Math.max(a - (c.left || 0) - (c.right || 0), 0),
    height: Math.max(b - (c.top || 0) - (c.bottom || 0), 0)
  }));
  var cr = a.i(61325);
  var cs = ["contextPayload"];
  function ct() {
    return (ct = Object.assign.bind()).apply(null, arguments);
  }
  function cu(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  function cv(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function cw(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        cv(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        cv(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  function cx(a) {
    return a.value;
  }
  function cy(a) {
    var b = a.contextPayload;
    var d = function (a, b) {
      if (a == null) {
        return {};
      }
      var c;
      var d;
      var e = function (a, b) {
        if (a == null) {
          return {};
        }
        var c = {};
        for (var d in a) {
          if ({}.hasOwnProperty.call(a, d)) {
            if (b.indexOf(d) !== -1) {
              continue;
            }
            c[d] = a[d];
          }
        }
        return c;
      }(a, b);
      if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(a);
        for (d = 0; d < f.length; d++) {
          c = f[d];
          if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
            e[c] = a[c];
          }
        }
      }
      return e;
    }(a, cs);
    var e = (0, cl.getUniqPayload)(b, a.payloadUniqBy, cx);
    var f = cw(cw({}, d), {}, {
      payload: e
    });
    if (c.isValidElement(a.content)) {
      return c.cloneElement(a.content, f);
    } else if (typeof a.content == "function") {
      return c.createElement(a.content, f);
    } else {
      return c.createElement(ck, f);
    }
  }
  function cz(a) {
    var b = a.align;
    var d = a.layout;
    var e = a.verticalAlign;
    var f = a.itemSorter;
    var g = a.position;
    var h = a.offset;
    var i = (0, x.useAppDispatch)();
    (0, c.useLayoutEffect)(() => {
      i((0, co.setLegendSettings)({
        align: b,
        layout: d,
        verticalAlign: e,
        itemSorter: f,
        position: g,
        offset: h
      }));
    }, [i, b, d, e, f, g, h]);
    return null;
  }
  function cA(a) {
    var b = a.width;
    var d = a.height;
    var e = (0, x.useAppDispatch)();
    (0, c.useLayoutEffect)(() => {
      e((0, co.setLegendSize)({
        width: b,
        height: d
      }));
    }, [e, b, d]);
    (0, c.useLayoutEffect)(() => () => {
      e((0, co.setLegendSize)({
        width: 0,
        height: 0
      }));
    }, [e]);
    return null;
  }
  var cB = {
    align: "center",
    iconSize: 14,
    inactiveColor: "#ccc",
    itemSorter: "value",
    labelStyle: {},
    layout: "auto",
    verticalAlign: "bottom",
    offset: 0
  };
  var _Component4 = c.memo(function (a) {
    var b;
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;
    var j;
    var k;
    var t = (0, af.resolveDefaultProps)(a, cB);
    var u = a.layout && a.layout !== "auto" ? a.layout : (b = t.position) === "left" || b === "right" || b === "insideLeft" || b === "insideRight" ? "vertical" : "horizontal";
    var v = (0, x.useAppSelector)(cm.selectLegendPayload);
    var w = (0, bQ.useLegendPortal)();
    var y = (0, J.useMargin)();
    var z = (0, x.useAppSelector)(a => {
      var b;
      if ((b = t.position) == null) {
        return null;
      } else if ((0, bP.isOutsidePosition)(b)) {
        return cq(a);
      } else {
        return (0, cr.selectChartViewBox)(a);
      }
    });
    var A = t.width;
    var B = t.height;
    var C = t.wrapperStyle;
    var D = t.portal;
    var E = D == null && (t.position == null || (0, bP.isOutsidePosition)(t.position));
    var F = function (a) {
      if (Array.isArray(a)) {
        return a;
      }
    }(d = (0, cn.useElementOffset)([v])) || function (a) {
      var b = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (b != null) {
        var c;
        var d;
        var e;
        var f;
        var g = [];
        var h = true;
        var i = false;
        try {
          e = (b = b.call(a)).next;
          false;
          for (; !(h = (c = e.call(b)).done) && (g.push(c.value), g.length !== 2); h = true);
        } catch (a) {
          i = true;
          d = a;
        } finally {
          try {
            if (!h && b.return != null && (f = b.return(), Object(f) !== f)) {
              return;
            }
          } finally {
            if (i) {
              throw d;
            }
          }
        }
        return g;
      }
    }(d) || function (a) {
      if (a) {
        if (typeof a == "string") {
          return cu(a, 2);
        }
        var b = {}.toString.call(a).slice(8, -1);
        if (b === "Object" && a.constructor) {
          b = a.constructor.name;
        }
        if (b === "Map" || b === "Set") {
          return Array.from(a);
        } else if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) {
          return cu(a, 2);
        } else {
          return undefined;
        }
      }
    }(d) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
    var G = F[0];
    var H = F[1];
    var I = (0, J.useChartWidth)();
    var K = (0, J.useChartHeight)();
    if (I == null || K == null || t.position != null && z == null) {
      return null;
    }
    var L = I - ((y == null ? undefined : y.left) || 0) - ((y == null ? undefined : y.right) || 0);
    var M = u === "vertical" && B != null ? {
      height: B
    } : u === "horizontal" ? {
      width: A || L
    } : null;
    var N = t.position == null ? null : (0, bP.getCartesianPosition)({
      viewBox: z ?? {
        x: 0,
        y: 0,
        width: I,
        height: K
      },
      position: t.position,
      offset: t.offset ?? 0
    });
    e = t.position;
    f = t.offset ?? 0;
    var O = e === "top" ? {
      top: G.height + f
    } : e === "bottom" ? {
      top: -G.height - f
    } : e === "left" ? {
      left: G.width + f
    } : e === "right" ? {
      left: -G.width - f
    } : {};
    var P = u === "vertical" ? ((z == null ? undefined : z.width) ?? 0) / 2 : (z == null ? undefined : z.width) ?? 0;
    var Q = u === "horizontal" ? ((z == null ? undefined : z.height) ?? 0) / 2 : (z == null ? undefined : z.height) ?? 0;
    var R = N ? {
      width: "max-content",
      height: "max-content",
      maxWidth: P,
      maxHeight: Q,
      overflowY: "auto",
      top: N.y + (O.top ?? 0),
      left: N.x + (O.left ?? 0),
      transform: function (a, b) {
        if (a === "start" && b === "start") {
          return "";
        }
        var d = {
          start: "0",
          middle: "-50%",
          end: "-100%"
        }[b] ?? "0";
        return `translate(${a === "inherit" ? "0" : {
          start: "0",
          middle: "-50%",
          end: "-100%"
        }[a]}, ${d})`;
      }(N.horizontalAnchor, N.verticalAnchor)
    } : (i = t.layout, j = t.align, k = t.verticalAlign, C && (C.left !== undefined && C.left !== null || C.right !== undefined && C.right !== null) || (g = j === "center" && i === "vertical" ? {
      left: ((I || 0) - G.width) / 2
    } : j === "right" ? {
      right: y && y.right || 0
    } : {
      left: y && y.left || 0
    }), C && (C.top !== undefined && C.top !== null || C.bottom !== undefined && C.bottom !== null) || (h = k === "middle" ? {
      top: ((K || 0) - G.height) / 2
    } : k === "bottom" ? {
      bottom: y && y.bottom || 0
    } : {
      top: y && y.top || 0
    }), cw(cw({}, g), h));
    var S = D ? C : cw(cw({
      position: "absolute",
      width: (M == null ? undefined : M.width) || A || "auto",
      height: (M == null ? undefined : M.height) || B || "auto"
    }, R), C);
    var T = D ?? w;
    if (T == null || v == null) {
      return null;
    }
    var U = c.createElement("div", {
      className: "recharts-legend-wrapper",
      style: S,
      ref: H
    }, c.createElement(cz, {
      layout: u,
      align: t.align,
      verticalAlign: t.verticalAlign,
      itemSorter: t.itemSorter,
      position: t.position,
      offset: t.offset
    }), E && c.createElement(cA, G), c.createElement(cy, ct({}, t, {
      layout: u
    }, M, {
      margin: y,
      chartWidth: I,
      chartHeight: K,
      contextPayload: v
    })));
    return (0, bO.createPortal)(U, T);
  }, ak.propsAreEqual);
  _Component4.displayName = "Legend";
  var cD = c;
  var cE = ["animationElapsedTime", "isAnimating", "isEntrance", "visibleLength", "strokeDasharray", "connectNulls"];
  function cF() {
    return (cF = Object.assign.bind()).apply(null, arguments);
  }
  function cG(a, b) {
    return `${b}px ${a}px`;
  }
  var cH = a.i(95487);
  var cI = ["children"];
  var cJ = (0, c.createContext)({
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
  function cK(a) {
    var b = a.children;
    var d = function (a, b) {
      if (a == null) {
        return {};
      }
      var c;
      var d;
      var e = function (a, b) {
        if (a == null) {
          return {};
        }
        var c = {};
        for (var d in a) {
          if ({}.hasOwnProperty.call(a, d)) {
            if (b.indexOf(d) !== -1) {
              continue;
            }
            c[d] = a[d];
          }
        }
        return c;
      }(a, b);
      if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(a);
        for (d = 0; d < f.length; d++) {
          c = f[d];
          if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
            e[c] = a[c];
          }
        }
      }
      return e;
    }(a, cI);
    return c.createElement(cJ.Provider, {
      value: d
    }, b);
  }
  var cL = (a, b, c, d) => (0, F.selectAxisWithScale)(a, "xAxis", b, d);
  var cM = (a, b, c, d) => (0, F.selectTicksOfGraphicalItem)(a, "xAxis", b, d);
  var cN = (a, b, c, d) => (0, F.selectAxisWithScale)(a, "yAxis", c, d);
  var cO = (a, b, c, d) => (0, F.selectTicksOfGraphicalItem)(a, "yAxis", c, d);
  var cP = (0, I.createSelector)([J.selectChartLayout, cL, cN, cM, cO], (a, b, c, d, e) => (0, w.isCategoricalAxis)(a, "xAxis") ? (0, w.getBandSizeOfAxis)(b, d, false) : (0, w.getBandSizeOfAxis)(c, e, false));
  function cQ(a) {
    return a.type === "line";
  }
  var cR = (0, I.createSelector)([F.selectUnfilteredCartesianItems, (a, b, c, d, e) => e], (a, b) => a.filter(cQ).find(a => a.id === b));
  var cS = (0, I.createSelector)([J.selectChartLayout, cL, cN, cM, cO, cR, cP, K.selectChartDataWithIndexesIfNotInPanoramaPosition4], (a, b, c, d, e, f, g, h) => {
    var i;
    var k = h.chartData;
    var l = h.dataStartIndex;
    var m = h.dataEndIndex;
    if (f != null && b != null && c != null && d != null && e != null && d.length !== 0 && e.length !== 0 && g != null && (a === "horizontal" || a === "vertical")) {
      var n;
      var o;
      var p;
      var q;
      var r;
      var s;
      var t;
      var u;
      var v = f.dataKey;
      var x = f.data;
      if ((i = x != null && x.length > 0 ? x : k == null ? undefined : k.slice(l, m + 1)) != null) {
        o = (n = {
          layout: a,
          xAxis: b,
          yAxis: c,
          xAxisTicks: d,
          yAxisTicks: e,
          dataKey: v,
          bandSize: g,
          displayedData: i
        }).layout;
        p = n.xAxis;
        q = n.yAxis;
        r = n.xAxisTicks;
        s = n.yAxisTicks;
        t = n.dataKey;
        u = n.bandSize;
        return n.displayedData.map((a, b) => {
          var c = (0, w.getValueByDataKey)(a, t);
          if (o === "horizontal") {
            var d = (0, w.getCateCoordinateOfLine)({
              axis: p,
              ticks: r,
              bandSize: u,
              entry: a,
              index: b
            });
            var e = (0, j.isNullish)(c) ? null : q.scale.map(c);
            return {
              x: d,
              y: e ?? null,
              value: c,
              payload: a
            };
          }
          var f = (0, j.isNullish)(c) ? null : p.scale.map(c);
          var g = (0, w.getCateCoordinateOfLine)({
            axis: q,
            ticks: s,
            bandSize: u,
            entry: a,
            index: b
          });
          if (f == null || g == null) {
            return null;
          } else {
            return {
              x: f,
              y: g,
              value: c,
              payload: a
            };
          }
        }).filter(Boolean);
      }
    }
  });
  var cT = ["id"];
  var cU = ["type", "layout", "connectNulls", "needClip", "shape", "strokeDasharray"];
  var cV = ["activeDot", "animateNewValues", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "hide", "isAnimationActive", "label", "legendType", "xAxisId", "yAxisId", "id"];
  function cW() {
    return (cW = Object.assign.bind()).apply(null, arguments);
  }
  function cX(a, b) {
    if (a == null) {
      return {};
    }
    var c;
    var d;
    var e = function (a, b) {
      if (a == null) {
        return {};
      }
      var c = {};
      for (var d in a) {
        if ({}.hasOwnProperty.call(a, d)) {
          if (b.indexOf(d) !== -1) {
            continue;
          }
          c[d] = a[d];
        }
      }
      return c;
    }(a, b);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(a);
      for (d = 0; d < f.length; d++) {
        c = f[d];
        if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
          e[c] = a[c];
        }
      }
    }
    return e;
  }
  function cY(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function cZ(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        cY(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        cY(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  var c$ = {
    activeDot: true,
    animateNewValues: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
    animationInterpolateFn: (a, b) => {
      if (a == null) {
        return [];
      }
      if (b === 1) {
        return a.flatMap(a => a.status === "removed" ? [] : [a.next]);
      }
      var c = function (a) {
        var b = 0;
        var c = 0;
        for (var d of a) {
          if (d.status === "matched" && d.prev.x != null && d.next.x != null) {
            b += d.next.x - d.prev.x;
            c++;
          }
        }
        if (c > 0) {
          return b / c;
        } else {
          return 0;
        }
      }(a);
      var d = [];
      for (var e of a) {
        if (e.status === "matched") {
          d.push(cZ(cZ({}, e.next), {}, {
            x: (0, j.interpolate)(e.prev.x, e.next.x, b),
            y: (0, j.interpolate)(e.prev.y, e.next.y, b)
          }));
        } else if (e.status === "added") {
          if (e.next.x != null) {
            var f = e.next.x - c;
            d.push(cZ(cZ({}, e.next), {}, {
              x: (0, j.interpolate)(f, e.next.x, b),
              y: e.next.y
            }));
          } else {
            d.push(e.next);
          }
        } else if (e.status === "removed" && e.prev.x != null) {
          var g = e.prev.x + c;
          d.push(cZ(cZ({}, e.prev), {}, {
            x: (0, j.interpolate)(e.prev.x, g, b),
            y: e.prev.y
          }));
        }
      }
      return d;
    },
    animationMatchBy: ad.matchByIndex,
    connectNulls: false,
    dot: true,
    fill: "#fff",
    hide: false,
    isAnimationActive: "auto",
    label: false,
    legendType: "line",
    shape: function (a) {
      a.animationElapsedTime;
      a.isAnimating;
      a.isEntrance;
      var b = a.visibleLength;
      var d = a.strokeDasharray;
      var e = a.connectNulls;
      var f = function (a, b) {
        if (a == null) {
          return {};
        }
        var c;
        var d;
        var e = function (a, b) {
          if (a == null) {
            return {};
          }
          var c = {};
          for (var d in a) {
            if ({}.hasOwnProperty.call(a, d)) {
              if (b.indexOf(d) !== -1) {
                continue;
              }
              c[d] = a[d];
            }
          }
          return c;
        }(a, b);
        if (Object.getOwnPropertySymbols) {
          var f = Object.getOwnPropertySymbols(a);
          for (d = 0; d < f.length; d++) {
            c = f[d];
            if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
              e[c] = a[c];
            }
          }
        }
        return e;
      }(a, cE);
      if (b != null) {
        var g;
        var i = f.pathRef;
        var j = function (a) {
          try {
            return a && a.getTotalLength && a.getTotalLength() || 0;
          } catch (a) {
            return 0;
          }
        }((i == null ? undefined : i.current) ?? null);
        g = d ? function (a, b, c) {
          var d = c.length % 2 != 0 ? [...c, ...c] : c;
          var e = d.reduce((a, b) => a + b, 0);
          if (!e) {
            return cG(b, a);
          }
          var f = Math.floor(a / e);
          var g = a % e;
          var h = [];
          for (var i = 0, j = 0; i < d.length; j += d[i] ?? 0, ++i) {
            var l = d[i];
            if (l != null && j + l > g) {
              h = [...d.slice(0, i), g - j];
              break;
            }
          }
          var m = h.length % 2 == 0 ? [0, b] : [b];
          return [...function (a, b) {
            var c = [];
            for (var d = 0; d < b; ++d) {
              c.push(...a);
            }
            return c;
          }(d, f), ...h, ...m].map(a => `${a}px`).join(", ");
        }(b, j, `${d}`.split(/[,\s]+/gim).map(a => parseFloat(a))) : cG(j, b);
      } else if (d != null) {
        g = String(d);
      }
      return c.createElement(al.Curve, cF({}, f, {
        connectNulls: e != null && e,
        strokeDasharray: g
      }));
    },
    stroke: "#3182bd",
    strokeWidth: 1,
    xAxisId: 0,
    yAxisId: 0,
    zIndex: p.DefaultZIndexes.line,
    type: "linear"
  };
  var c_ = cD.memo(a => {
    var b = a.dataKey;
    var c = a.data;
    var d = a.stroke;
    var e = a.strokeWidth;
    var f = a.fill;
    var g = a.name;
    var h = a.hide;
    var i = a.unit;
    var k = a.formatter;
    var l = a.tooltipType;
    var m = a.id;
    var n = {
      dataDefinedOnItem: c,
      getPosition: j.noop,
      settings: {
        stroke: d,
        strokeWidth: e,
        fill: f,
        dataKey: b,
        nameKey: undefined,
        name: (0, w.getTooltipNameProp)(g, b),
        hide: h,
        type: l,
        color: d,
        unit: i,
        formatter: k,
        graphicalItemId: m
      }
    };
    return cD.createElement(E.SetTooltipEntrySettings, {
      tooltipEntrySettings: n
    });
  });
  function c0(a) {
    var b = a.clipPathId;
    var c = a.points;
    var d = a.props;
    var e = d.dot;
    var f = d.dataKey;
    var g = d.needClip;
    d.id;
    var h = cX(d, cT);
    var j = (0, i.svgPropertiesNoEvents)(h);
    return cD.createElement(v, {
      points: c,
      dot: e,
      className: "recharts-line-dots",
      dotClassName: "recharts-line-dot",
      dataKey: f,
      baseProps: j,
      needClip: g,
      clipPathId: b
    });
  }
  function c1(a) {
    var b = a.showLabels;
    var c = a.children;
    var d = a.points;
    var e = (0, cD.useMemo)(() => d == null ? undefined : d.map(a => {
      var d = {
        x: a.x ?? 0,
        y: a.y ?? 0,
        width: 0,
        lowerWidth: 0,
        upperWidth: 0,
        height: 0
      };
      return cZ(cZ({}, d), {}, {
        value: a.value,
        payload: a.payload,
        viewBox: d,
        parentViewBox: undefined,
        fill: undefined
      });
    }), [d]);
    return cD.createElement(g.CartesianLabelListContextProvider, {
      value: b ? e : undefined
    }, c);
  }
  function c2(a) {
    var b = a.clipPathId;
    var c = a.pathRef;
    var d = a.points;
    var e = a.props;
    var f = a.animationElapsedTime;
    var g = a.isAnimating;
    var h = a.isEntrance;
    var i = a.visibleLength;
    var j = e.type;
    var k = e.layout;
    var l = e.connectNulls;
    var m = e.needClip;
    var o = e.shape;
    var p = e.strokeDasharray;
    var q = cX(e, cU);
    var r = cZ(cZ({}, (0, n.svgPropertiesAndEvents)(q)), {}, {
      fill: "none",
      className: "recharts-line-curve",
      clipPath: m ? `url(#clipPath-${b})` : undefined,
      points: d,
      type: j,
      layout: k,
      connectNulls: l,
      strokeDasharray: p ?? e.strokeDasharray,
      pathRef: c,
      animationElapsedTime: f,
      isAnimating: g,
      isEntrance: !!e.animateNewValues && h,
      visibleLength: i
    });
    return cD.createElement(cD.Fragment, null, (d == null ? undefined : d.length) > 1 && cD.createElement(aj.Shape, {
      option: o,
      DefaultShape: c$.shape,
      shapeProps: r
    }), cD.createElement(c0, {
      points: d,
      clipPathId: b,
      props: e
    }));
  }
  function c3(a) {
    var b;
    var d;
    var e;
    var f;
    var h = a.clipPathId;
    var i = a.props;
    var j = a.pathRef;
    var k = a.previousPointsRef;
    var l = i.points;
    var m = i.isAnimationActive;
    var n = i.animationBegin;
    var o = i.animationDuration;
    var p = i.animationEasing;
    var q = i.animationMatchBy;
    var r = i.animationInterpolateFn;
    var s = i.layout;
    var t = function (a) {
      try {
        return a && a.getTotalLength && a.getTotalLength() || 0;
      } catch (a) {
        return 0;
      }
    }(j.current);
    var u = (0, ac.useAnimationCallbacks)(i.onAnimationStart, i.onAnimationEnd);
    var v = u.isAnimating;
    var w = u.handleAnimationStart;
    var x = u.handleAnimationEnd;
    b = (0, c.useRef)(0);
    d = (0, c.useRef)(0);
    e = (0, c.useRef)(false);
    if ((f = (0, c.useRef)(l)).current !== l) {
      b.current = d.current;
      f.current = l;
    }
    var y = (0, c.useCallback)((a, c) => {
      if (e.current) {
        return null;
      }
      var f = Math.min((0, cH.round)(b.current + a * c), c);
      if (a > 0 && c > 0 && (d.current = Math.max(d.current, f), f >= c)) {
        e.current = true;
        return null;
      } else {
        return f;
      }
    }, []);
    var z = (0, cD.useCallback)(a => a > 0 && t > 0, [t]);
    return cD.createElement(c1, {
      points: l,
      showLabels: !v
    }, i.children, cD.createElement(ac.AnimatedItems, {
      animationInput: l,
      animationIdPrefix: "recharts-line-",
      items: l,
      previousItemsRef: k,
      isAnimationActive: m,
      animationBegin: n,
      animationDuration: o,
      animationEasing: p,
      onAnimationStart: w,
      onAnimationEnd: x,
      animationInterpolateFn: r,
      animationMatchBy: q,
      shouldUpdatePreviousRef: z,
      layout: s
    }, (a, b, c) => {
      var d = v || b < 1;
      var e = d ? y(b, t) : null;
      return cD.createElement(c2, {
        props: i,
        points: a,
        clipPathId: h,
        pathRef: j,
        animationElapsedTime: b,
        isAnimating: d,
        isEntrance: c,
        visibleLength: e
      });
    }), cD.createElement(g.LabelListFromLabelProp, {
      label: i.label
    }));
  }
  function c4(a) {
    var b = a.clipPathId;
    var c = a.props;
    var d = (0, cD.useRef)(null);
    var e = (0, cD.useRef)(null);
    return cD.createElement(c3, {
      props: c,
      clipPathId: b,
      previousPointsRef: d,
      pathRef: e
    });
  }
  var c5 = (a, b) => {
    return {
      x: a.x ?? undefined,
      y: a.y ?? undefined,
      value: a.value,
      errorVal: (0, w.getValueByDataKey)(a.payload, b)
    };
  };
  class c6 extends cD.Component {
    render() {
      var a = this.props;
      var b = a.hide;
      var c = a.dot;
      var d = a.points;
      var g = a.className;
      var h = a.xAxisId;
      var i = a.yAxisId;
      var j = a.top;
      var k = a.left;
      var l = a.width;
      var n = a.height;
      var p = a.id;
      var q = a.needClip;
      var r = a.zIndex;
      if (b) {
        return null;
      }
      var s = (0, e.clsx)("recharts-line", g);
      var t = ai(c);
      var u = t.r;
      var v = t.strokeWidth;
      var w = (0, m.isClipDot)(c);
      var x = u * 2 + v;
      var y = q ? `url(#clipPath-${w ? "" : "dots-"}${p})` : undefined;
      return cD.createElement(o.ZIndexLayer, {
        zIndex: r
      }, cD.createElement(f.Layer, {
        className: s
      }, q && cD.createElement("defs", null, cD.createElement(H, {
        clipPathId: p,
        xAxisId: h,
        yAxisId: i
      }), !w && cD.createElement("clipPath", {
        id: `clipPath-dots-${p}`
      }, cD.createElement("rect", {
        x: k - x / 2,
        y: j - x / 2,
        width: l + x,
        height: n + x
      }))), cD.createElement(cK, {
        xAxisId: h,
        yAxisId: i,
        data: d,
        dataPointFormatter: c5,
        errorBarOffset: 0
      }, cD.createElement(c4, {
        props: this.props,
        clipPathId: p
      }))), cD.createElement(D, {
        activeDot: this.props.activeDot,
        points: d,
        mainColor: this.props.stroke,
        itemDataKey: this.props.dataKey,
        clipPath: y
      }));
    }
  }
  function c7(a) {
    var b = (0, af.resolveDefaultProps)(a, c$);
    var c = b.activeDot;
    var d = b.animateNewValues;
    var e = b.animationBegin;
    var f = b.animationDuration;
    var g = b.animationEasing;
    var h = b.connectNulls;
    var i = b.dot;
    var j = b.hide;
    var k = b.isAnimationActive;
    var l = b.label;
    var m = b.legendType;
    var n = b.xAxisId;
    var o = b.yAxisId;
    var p = b.id;
    var q = cX(b, cV);
    var r = G(n, o).needClip;
    var s = (0, z.usePlotArea)();
    var t = (0, J.useChartLayout)();
    var u = (0, _.useIsPanorama)();
    var v = (0, x.useAppSelector)(a => cS(a, n, o, u, p));
    if (t !== "horizontal" && t !== "vertical" || v == null || s == null) {
      return null;
    }
    var w = s.height;
    var y = s.width;
    var A = s.x;
    var B = s.y;
    return cD.createElement(c6, cW({}, q, {
      id: p,
      connectNulls: h,
      dot: i,
      activeDot: c,
      animateNewValues: d,
      animationBegin: e,
      animationDuration: f,
      animationEasing: g,
      isAnimationActive: k,
      hide: j,
      label: l,
      legendType: m,
      xAxisId: n,
      yAxisId: o,
      points: v,
      layout: t,
      height: w,
      width: y,
      left: A,
      top: B,
      needClip: r
    }));
  }
  var _Component6 = cD.memo(function (a) {
    var b = (0, af.resolveDefaultProps)(a, c$);
    var c = (0, _.useIsPanorama)();
    return cD.createElement(ag.RegisterGraphicalItemId, {
      id: b.id,
      type: "line"
    }, a => {
      var d;
      var e;
      var f;
      var g;
      return cD.createElement(cD.Fragment, null, cD.createElement(ab.SetLegendPayload, {
        legendPayload: (d = b.dataKey, e = b.name, f = b.stroke, g = b.legendType, [{
          inactive: b.hide,
          dataKey: d,
          type: g,
          color: f,
          value: (0, w.getTooltipNameProp)(e, d),
          payload: b
        }])
      }), cD.createElement(c_, {
        dataKey: b.dataKey,
        data: b.data,
        stroke: b.stroke,
        strokeWidth: b.strokeWidth,
        fill: b.fill,
        name: b.name,
        hide: b.hide,
        unit: b.unit,
        formatter: b.formatter,
        tooltipType: b.tooltipType,
        id: a
      }), cD.createElement(ah.SetCartesianGraphicalItem, {
        type: "line",
        id: a,
        data: b.data,
        xAxisId: b.xAxisId,
        yAxisId: b.yAxisId,
        zAxisId: 0,
        dataKey: b.dataKey,
        hide: b.hide,
        isPanorama: c
      }), cD.createElement(c7, cW({}, b, {
        id: a
      })));
    });
  }, ak.propsAreEqual);
  _Component6.displayName = "Line";
  var c9 = a.i(72886);
  var da = a.i(59778);
  var db = ["domain", "range"];
  var dc = ["domain", "range"];
  function dd(a, b) {
    if (a == null) {
      return {};
    }
    var c;
    var d;
    var e = function (a, b) {
      if (a == null) {
        return {};
      }
      var c = {};
      for (var d in a) {
        if ({}.hasOwnProperty.call(a, d)) {
          if (b.indexOf(d) !== -1) {
            continue;
          }
          c[d] = a[d];
        }
      }
      return c;
    }(a, b);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(a);
      for (d = 0; d < f.length; d++) {
        c = f[d];
        if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
          e[c] = a[c];
        }
      }
    }
    return e;
  }
  function de(a, b) {
    return a === b || !!Array.isArray(a) && a.length === 2 && !!Array.isArray(b) && b.length === 2 && a[0] === b[0] && a[1] === b[1];
  }
  function df(a, b) {
    if (a === b) {
      return true;
    }
    var c = a.domain;
    var d = a.range;
    var e = dd(a, db);
    var f = b.domain;
    var g = b.range;
    var h = dd(b, dc);
    return !!de(c, f) && !!de(d, g) && (0, ak.propsAreEqual)(e, h);
  }
  var dg = a.i(2996);
  var dh = ["type"];
  var di = ["dangerouslySetInnerHTML", "ticks", "scale"];
  var dj = ["id", "scale"];
  function dk() {
    return (dk = Object.assign.bind()).apply(null, arguments);
  }
  function dl(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function dm(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        dl(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        dl(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  function dn(a, b) {
    if (a == null) {
      return {};
    }
    var c;
    var d;
    var e = function (a, b) {
      if (a == null) {
        return {};
      }
      var c = {};
      for (var d in a) {
        if ({}.hasOwnProperty.call(a, d)) {
          if (b.indexOf(d) !== -1) {
            continue;
          }
          c[d] = a[d];
        }
      }
      return c;
    }(a, b);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(a);
      for (d = 0; d < f.length; d++) {
        c = f[d];
        if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
          e[c] = a[c];
        }
      }
    }
    return e;
  }
  function dp(a) {
    var b = (0, x.useAppDispatch)();
    var d = (0, c.useRef)(null);
    var e = (0, J.useCartesianChartLayout)();
    var f = a.type;
    var g = dn(a, dh);
    var h = (0, dg.getAxisTypeBasedOnLayout)(e, "xAxis", f);
    var i = (0, c.useMemo)(() => {
      if (h != null) {
        return dm(dm({}, g), {}, {
          type: h
        });
      }
    }, [g, h]);
    (0, c.useLayoutEffect)(() => {
      if (i != null) {
        if (d.current === null) {
          b((0, N.addXAxis)(i));
        } else if (d.current !== i) {
          b((0, N.replaceXAxis)({
            prev: d.current,
            next: i
          }));
        }
        d.current = i;
      }
    }, [i, b]);
    (0, c.useLayoutEffect)(() => () => {
      if (d.current) {
        b((0, N.removeXAxis)(d.current));
        d.current = null;
      }
    }, [b]);
    return null;
  }
  var dq = a => {
    var b = a.xAxisId;
    var d = a.className;
    var f = a.height;
    var g = a.label;
    var h = (0, c.useRef)(null);
    var i = (0, c.useRef)(null);
    var j = (0, x.useAppSelector)(cr.selectAxisViewBox);
    var k = (0, _.useIsPanorama)();
    var l = (0, x.useAppDispatch)();
    var m = "xAxis";
    var n = (0, x.useAppSelector)(a => (0, F.selectTicksOfAxis)(a, m, b, k));
    var o = (0, x.useAppSelector)(a => (0, F.selectXAxisSize)(a, b));
    var p = (0, x.useAppSelector)(a => (0, F.selectXAxisPosition)(a, b));
    var q = (0, x.useAppSelector)(a => (0, F.selectXAxisSettingsNoDefaults)(a, b));
    (0, c.useLayoutEffect)(() => {
      if (f === "auto" && !!o && !(0, bf.isLabelContentAFunction)(g) && !(0, c.isValidElement)(g) && q != null) {
        var a = h.current;
        if (a) {
          var d = a.getCalculatedHeight();
          if (Math.round(o.height) !== Math.round(d)) {
            l((0, N.updateXAxisHeight)({
              id: b,
              height: d
            }));
          }
        }
      }
    }, [n, o, l, g, b, f, q]);
    if (o == null || p == null || q == null) {
      return null;
    }
    a.dangerouslySetInnerHTML;
    a.ticks;
    a.scale;
    var r = dn(a, di);
    q.id;
    q.scale;
    var s = dn(q, dj);
    return c.createElement(bu, dk({}, r, s, {
      ref: h,
      labelRef: i,
      x: p.x,
      y: p.y,
      width: o.width,
      height: o.height,
      className: (0, e.clsx)(`recharts-${m} ${m}`, d),
      viewBox: j,
      ticks: n,
      axisType: m,
      axisId: b
    }));
  };
  var dr = {
    allowDataOverflow: F.implicitXAxis.allowDataOverflow,
    allowDecimals: F.implicitXAxis.allowDecimals,
    allowDuplicatedCategory: F.implicitXAxis.allowDuplicatedCategory,
    angle: F.implicitXAxis.angle,
    axisLine: bo.axisLine,
    height: F.implicitXAxis.height,
    hide: false,
    includeHidden: F.implicitXAxis.includeHidden,
    interval: F.implicitXAxis.interval,
    label: false,
    minTickGap: F.implicitXAxis.minTickGap,
    mirror: F.implicitXAxis.mirror,
    orientation: F.implicitXAxis.orientation,
    padding: F.implicitXAxis.padding,
    reversed: F.implicitXAxis.reversed,
    scale: F.implicitXAxis.scale,
    tick: F.implicitXAxis.tick,
    tickCount: F.implicitXAxis.tickCount,
    tickLine: bo.tickLine,
    tickSize: bo.tickSize,
    type: F.implicitXAxis.type,
    niceTicks: F.implicitXAxis.niceTicks,
    xAxisId: 0
  };
  var _Component2 = c.memo(a => {
    var b = (0, af.resolveDefaultProps)(a, dr);
    return c.createElement(c.Fragment, null, c.createElement(dp, {
      allowDataOverflow: b.allowDataOverflow,
      allowDecimals: b.allowDecimals,
      allowDuplicatedCategory: b.allowDuplicatedCategory,
      angle: b.angle,
      dataKey: b.dataKey,
      domain: b.domain,
      height: b.height,
      hide: b.hide,
      id: b.xAxisId,
      includeHidden: b.includeHidden,
      interval: b.interval,
      minTickGap: b.minTickGap,
      mirror: b.mirror,
      name: b.name,
      orientation: b.orientation,
      padding: b.padding,
      reversed: b.reversed,
      scale: b.scale,
      tick: b.tick,
      tickCount: b.tickCount,
      tickFormatter: b.tickFormatter,
      ticks: b.ticks,
      type: b.type,
      unit: b.unit,
      niceTicks: b.niceTicks
    }), c.createElement(dq, b));
  }, df);
  _Component2.displayName = "XAxis";
  var dt = ["type"];
  var du = ["dangerouslySetInnerHTML", "ticks", "scale"];
  var dv = ["id", "scale"];
  function dw() {
    return (dw = Object.assign.bind()).apply(null, arguments);
  }
  function dx(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function dy(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        dx(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        dx(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  function dz(a, b) {
    if (a == null) {
      return {};
    }
    var c;
    var d;
    var e = function (a, b) {
      if (a == null) {
        return {};
      }
      var c = {};
      for (var d in a) {
        if ({}.hasOwnProperty.call(a, d)) {
          if (b.indexOf(d) !== -1) {
            continue;
          }
          c[d] = a[d];
        }
      }
      return c;
    }(a, b);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(a);
      for (d = 0; d < f.length; d++) {
        c = f[d];
        if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
          e[c] = a[c];
        }
      }
    }
    return e;
  }
  function dA(a) {
    var b = (0, x.useAppDispatch)();
    var d = (0, c.useRef)(null);
    var e = (0, J.useCartesianChartLayout)();
    var f = a.type;
    var g = dz(a, dt);
    var h = (0, dg.getAxisTypeBasedOnLayout)(e, "yAxis", f);
    var i = (0, c.useMemo)(() => {
      if (h != null) {
        return dy(dy({}, g), {}, {
          type: h
        });
      }
    }, [h, g]);
    (0, c.useLayoutEffect)(() => {
      if (i != null) {
        if (d.current === null) {
          b((0, N.addYAxis)(i));
        } else if (d.current !== i) {
          b((0, N.replaceYAxis)({
            prev: d.current,
            next: i
          }));
        }
        d.current = i;
      }
    }, [i, b]);
    (0, c.useLayoutEffect)(() => () => {
      if (d.current) {
        b((0, N.removeYAxis)(d.current));
        d.current = null;
      }
    }, [b]);
    return null;
  }
  function dB(a) {
    var b = a.yAxisId;
    var d = a.className;
    var f = a.width;
    var g = a.label;
    var h = (0, c.useRef)(null);
    var i = (0, c.useRef)(null);
    var j = (0, x.useAppSelector)(cr.selectAxisViewBox);
    var k = (0, _.useIsPanorama)();
    var l = (0, x.useAppDispatch)();
    var m = "yAxis";
    var n = (0, x.useAppSelector)(a => (0, F.selectYAxisSize)(a, b));
    var o = (0, x.useAppSelector)(a => (0, F.selectYAxisPosition)(a, b));
    var p = (0, x.useAppSelector)(a => (0, F.selectTicksOfAxis)(a, m, b, k));
    var q = (0, x.useAppSelector)(a => (0, F.selectYAxisSettingsNoDefaults)(a, b));
    (0, c.useLayoutEffect)(() => {
      if (f === "auto" && !!n && !(0, bf.isLabelContentAFunction)(g) && !(0, c.isValidElement)(g) && q != null) {
        var a = h.current;
        if (a) {
          var d = a.getCalculatedWidth();
          if (Math.round(n.width) !== Math.round(d)) {
            l((0, N.updateYAxisWidth)({
              id: b,
              width: d
            }));
          }
        }
      }
    }, [p, n, l, g, b, f, q]);
    if (n == null || o == null || q == null) {
      return null;
    }
    a.dangerouslySetInnerHTML;
    a.ticks;
    a.scale;
    var r = dz(a, du);
    q.id;
    q.scale;
    var s = dz(q, dv);
    return c.createElement(bu, dw({}, r, s, {
      ref: h,
      labelRef: i,
      x: o.x,
      y: o.y,
      tickTextProps: f === "auto" ? {
        width: undefined
      } : {
        width: f
      },
      width: n.width,
      height: n.height,
      className: (0, e.clsx)(`recharts-${m} ${m}`, d),
      viewBox: j,
      ticks: p,
      axisType: m,
      axisId: b
    }));
  }
  var dC = {
    allowDataOverflow: F.implicitYAxis.allowDataOverflow,
    allowDecimals: F.implicitYAxis.allowDecimals,
    allowDuplicatedCategory: F.implicitYAxis.allowDuplicatedCategory,
    angle: F.implicitYAxis.angle,
    axisLine: bo.axisLine,
    hide: false,
    includeHidden: F.implicitYAxis.includeHidden,
    interval: F.implicitYAxis.interval,
    label: false,
    minTickGap: F.implicitYAxis.minTickGap,
    mirror: F.implicitYAxis.mirror,
    orientation: F.implicitYAxis.orientation,
    padding: F.implicitYAxis.padding,
    reversed: F.implicitYAxis.reversed,
    scale: F.implicitYAxis.scale,
    tick: F.implicitYAxis.tick,
    tickCount: F.implicitYAxis.tickCount,
    tickLine: bo.tickLine,
    tickSize: bo.tickSize,
    type: F.implicitYAxis.type,
    niceTicks: F.implicitYAxis.niceTicks,
    width: F.implicitYAxis.width,
    yAxisId: 0
  };
  var _Component3 = c.memo(a => {
    var b = (0, af.resolveDefaultProps)(a, dC);
    return c.createElement(c.Fragment, null, c.createElement(dA, {
      interval: b.interval,
      id: b.yAxisId,
      scale: b.scale,
      type: b.type,
      domain: b.domain,
      allowDataOverflow: b.allowDataOverflow,
      dataKey: b.dataKey,
      allowDuplicatedCategory: b.allowDuplicatedCategory,
      allowDecimals: b.allowDecimals,
      tickCount: b.tickCount,
      padding: b.padding,
      includeHidden: b.includeHidden,
      reversed: b.reversed,
      ticks: b.ticks,
      width: b.width,
      orientation: b.orientation,
      mirror: b.mirror,
      hide: b.hide,
      unit: b.unit,
      name: b.name,
      angle: b.angle,
      minTickGap: b.minTickGap,
      tick: b.tick,
      tickFormatter: b.tickFormatter,
      niceTicks: b.niceTicks
    }), c.createElement(dB, b));
  }, df);
  _Component3.displayName = "YAxis";
  var dE = a.i(75875);
  let dF = [{
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
  let dG = [{
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
  a.s(["default", 0, () => {
    let [a, d] = (0, c.useState)(1);
    let {
      dailyStats: e,
      fetchDailyStats: f,
      initStatsListeners: g
    } = (0, dE.useStatsStore)();
    (0, c.useEffect)(() => {
      f(a);
    }, [a, f]);
    (0, c.useEffect)(() => {
      let a = g();
      return () => a();
    }, [g]);
    let h = (0, c.useMemo)(() => {
      if (a === 1) {
        if (e && e.length > 0 && e[0]?.date?.includes(":")) {
          return e.map(a => {
            let b = a.total || a.success + a.failed + a.pending;
            return {
              date: a.date,
              total: b,
              success: a.success,
              failed: a.failed,
              pending: a.pending
            };
          });
        } else {
          return ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"].map(a => ({
            date: a,
            total: 0,
            success: 0,
            failed: 0,
            pending: 0
          }));
        }
      }
      if (e && e.length > 0) {
        return e.map(a => {
          let b = a.total || a.success + a.failed + a.pending;
          return {
            date: function (a) {
              try {
                let b = a.split("-");
                if (b.length === 3) {
                  return new Date(Number(b[0]), Number(b[1]) - 1, Number(b[2])).toLocaleDateString("th-TH", {
                    day: "numeric",
                    month: "short"
                  });
                }
                return a;
              } catch {
                return a;
              }
            }(a.date),
            total: b,
            success: a.success,
            failed: a.failed,
            pending: a.pending
          };
        });
      }
      let b = [];
      let c = new Date();
      for (let d = a - 1; d >= 0; d--) {
        let a = new Date(c);
        a.setDate(a.getDate() - d);
        b.push({
          date: a.toLocaleDateString("th-TH", {
            day: "numeric",
            month: "short"
          }),
          total: 0,
          success: 0,
          failed: 0,
          pending: 0
        });
      }
      return b;
    }, [e, a]);
    let i = (0, c.useMemo)(() => {
      let a = 0;
      for (let b of h) {
        let c = b.total ?? b.success + b.failed + b.pending;
        if (c > a) {
          a = c;
        }
      }
      return a;
    }, [h]);
    return <div className="group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-neutral-950 shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)] transition-all duration-200 ease-out"><div className="pointer-events-none absolute inset-x-3 top-0 z-20 h-px bg-white/20" /><div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-white/[0.04] blur-2xl transition-all duration-300 group-hover:bg-white/[0.07]" /><div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/20 to-transparent" /><div className="relative z-10 flex items-center justify-between px-6 py-5"><div><h2 className="text-sm font-semibold text-white">สถิติการทำงาน</h2><p className="mt-1 text-xs text-neutral-500">ภาพรวมกิจกรรมในช่วงเวลาที่เลือก</p></div><div className="flex items-center rounded-lg border border-white/10 bg-white/[0.03] p-1">{dG.map(c => <button onClick={() => d(c.value)} className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${a === c.value ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"}`} key={c.value}>{c.label}</button>)}</div></div><div className="h-[240px] w-full px-3 pb-5"><c9.ResponsiveContainer width="100%" height="100%" style={{
          outline: "none"
        }}><_Component7 accessibilityLayer={false} style={{
            outline: "none"
          }} data={h} margin={{
            top: 10,
            right: 12,
            left: -8,
            bottom: 0
          }}><defs>{dF.map(a => <linearGradient id={`${a.key}Gradient`} x1="0" y1="0" x2="0" y2="1" key={a.key}><stop offset="0%" stopColor={a.color} stopOpacity={0.3} /><stop offset="100%" stopColor={a.color} stopOpacity={0} /></linearGradient>)}</defs><_Component vertical={false} stroke="rgba(255,255,255,0.06)" /><_Component2 dataKey="date" axisLine={false} tickLine={false} tickMargin={10} minTickGap={a === 90 ? 24 : a === 30 ? 16 : 8} tick={{
              fill: "#737373",
              fontSize: 11
            }} /><_Component3 axisLine={false} tickLine={false} tickMargin={8} width={36} allowDecimals={false} domain={[0, () => Math.max(i, 4)]} tick={{
              fill: "#737373",
              fontSize: 11
            }} tickFormatter={a => a >= 1000 ? `${(a / 1000).toFixed(1)}k` : String(a)} /><da.Tooltip cursor={{
              stroke: "rgba(255,255,255,0.12)"
            }} content={({
              active: a,
              payload: c,
              label: d
            }) => {
              if (!a || !c?.length) {
                return null;
              }
              let e = h.find(a => a.date === d);
              let f = e?.total ?? c.reduce((a, b) => a + Number(b.value || 0), 0);
              return <div className="rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 shadow-xl"><div className="flex items-center justify-between gap-4 border-b border-white/10 pb-1.5 mb-1.5"><p className="text-[11px] font-medium text-neutral-400">{d}</p><span className="text-[11px] font-semibold text-sky-400">รวม {f.toLocaleString("th-TH")}</span></div><div className="space-y-0.5">{c.filter(a => a.dataKey !== "total").map(a => {
                    let c = dF.find(b => b.key === String(a.dataKey));
                    return <div className="flex items-center justify-between gap-3 text-xs font-semibold text-white" key={String(a.dataKey)}><div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full" style={{
                          backgroundColor: a.color
                        }} /><span className="font-normal text-neutral-300">{c?.label ?? String(a.dataKey)}</span></div><span>{Number(a.value ?? 0).toLocaleString("th-TH")}</span></div>;
                  })}</div></div>;
            }} /><_Component4 iconType="circle" iconSize={8} wrapperStyle={{
              fontSize: 11,
              color: "#a3a3a3",
              paddingTop: 12
            }} />{dF.map(a => <_Component5 type="monotone" dataKey={a.key} name={a.label} stroke={a.color} strokeWidth={2} fill={`url(#${a.key}Gradient)`} dot={false} activeDot={{
              r: 4,
              strokeWidth: 2,
              stroke: a.color,
              fill: "#171717"
            }} key={a.key} />)}<_Component6 type="monotone" dataKey="total" name="ทั้งหมด" stroke="#38bdf8" strokeWidth={1.5} strokeDasharray="4 4" dot={false} activeDot={{
              r: 4,
              strokeWidth: 2,
              stroke: "#38bdf8",
              fill: "#0f172a"
            }} /></_Component7></c9.ResponsiveContainer></div></div>;
  }], 24547);
}, 13440, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(9651);
  var _Component8 = a => null;
  _Component8.displayName = "Cell";
  var e = a.i(99521);
  var f = a.i(86347);
  var g = a.i(99650);
  var h = a.i(150);
  var i = a.i(61325);
  var j = a.i(66067);
  var k = a.i(1578);
  var l = a.i(58328);
  var m = a.i(51934);
  var n = a.i(51554);
  var o = a.i(39537);
  var p = a.i(88249);
  var q = a => a.graphicalItems.polarItems;
  var r = (0, g.createSelector)([m.pickAxisType, n.pickAxisId], k.itemAxisPredicate);
  var s = (0, g.createSelector)([q, k.selectBaseAxis, r], k.combineGraphicalItemsSettings);
  var t = (0, g.createSelector)([s], k.combineGraphicalItemsData);
  var u = (0, g.createSelector)([t, h.selectChartDataAndAlwaysIgnoreIndexes], k.combineDisplayedData);
  var v = (0, g.createSelector)([u, k.selectBaseAxis, s], k.combineAppliedValues);
  (0, g.createSelector)([u, k.selectBaseAxis, s], (a, b, c) => c.length > 0 ? a.flatMap(a => c.flatMap(c => {
    return {
      value: (0, j.getValueByDataKey)(a, b.dataKey ?? c.dataKey),
      errorDomain: []
    };
  })).filter(Boolean) : (b == null ? undefined : b.dataKey) != null ? a.map(a => ({
    value: (0, j.getValueByDataKey)(a, b.dataKey),
    errorDomain: []
  })) : a.map(a => ({
    value: a,
    errorDomain: []
  })));
  var w = () => undefined;
  var x = (0, g.createSelector)([u, k.selectBaseAxis, s, k.selectAllErrorBarSettings, m.pickAxisType, h.selectChartDataSliceIgnoringIndexes], k.combineDomainOfAllAppliedNumericalValuesIncludingErrorValues);
  var y = (0, g.createSelector)([k.selectBaseAxis, k.selectDomainDefinition, k.selectDomainFromUserPreference, w, x, w, l.selectChartLayout, m.pickAxisType], k.combineNumericalDomain);
  var z = (0, g.createSelector)([k.selectBaseAxis, l.selectChartLayout, u, v, o.selectStackOffsetType, m.pickAxisType, y], k.combineAxisDomain);
  var A = (0, g.createSelector)([z, k.selectRenderableAxisSettings, k.selectRealScaleType], k.combineNiceTicks);
  var B = (0, g.createSelector)([k.selectBaseAxis, z, A, m.pickAxisType], k.combineAxisDomainWithNiceTicks);
  function C(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function D(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        C(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        C(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  (0, g.createSelector)([k.selectRealScaleType, B], p.combineCheckedDomain);
  var E = (0, g.createSelector)([q, (a, b) => b], (a, b) => a.filter(a => a.type === "pie").find(a => a.id === b));
  var F = [];
  var G = (a, b, c) => (c == null ? undefined : c.length) === 0 ? F : c;
  var H = (0, g.createSelector)([h.selectChartDataAndAlwaysIgnoreIndexes, E, G], (a, b, c) => {
    var d;
    var e = a.chartData;
    if (b != null && ((d = (b == null ? undefined : b.data) != null && b.data.length > 0 ? b.data : e) && d.length || c == null || (d = c.map(a => D(D({}, b.presentationProps), a.props))), d != null)) {
      return d;
    }
  });
  var I = (0, g.createSelector)([H, E, G], (a, b, c) => {
    if (a != null && b != null) {
      return a.map((a, d) => {
        var e;
        var f;
        var g = (0, j.getValueByDataKey)(a, b.nameKey, b.name);
        f = c != null && (e = c[d]) != null && (e = e.props) != null && e.fill ? c[d].props.fill : typeof a == "object" && a != null && "fill" in a ? a.fill : b.fill;
        return {
          value: (0, j.getTooltipNameProp)(g, b.dataKey),
          dataKey: b.dataKey,
          color: f,
          payload: a,
          type: b.legendType
        };
      });
    }
  });
  var J = (0, g.createSelector)([H, E, G, i.selectChartOffsetInternal], (a, b, c, d) => {
    if (b != null && a != null) {
      return function (a) {
        var c;
        var d;
        var e = a.pieSettings;
        var f = a.displayedData;
        var g = a.cells;
        var h = a.offset;
        var i = e.cornerRadius;
        var k = e.startAngle;
        var l = e.endAngle;
        var m = e.dataKey;
        var n = e.nameKey;
        var o = e.tooltipType;
        var p = Math.abs(e.minAngle);
        var q = (0, R.mathSign)(l - k) * Math.min(Math.abs(l - k), 360);
        var r = Math.abs(q);
        var s = f.length <= 1 ? 0 : e.paddingAngle ?? 0;
        var t = f.filter(a => (0, j.getValueByDataKey)(a, m, 0) !== 0).length;
        var u = f.reduce((a, b) => {
          var c = (0, j.getValueByDataKey)(b, m, 0);
          return a + ((0, R.isNumber)(c) ? c : 0);
        }, 0);
        var v = p > 0 && u > 0 && f.some(a => {
          var b = (0, j.getValueByDataKey)(a, m, 0);
          var c = ((0, R.isNumber)(b) ? b : 0) / u;
          return b !== 0 && c * r < p;
        }) ? p : 0;
        var w = r - t * v - (r >= 360 ? t : t - 1) * s;
        if (u > 0) {
          c = f.map((a, b) => {
            var c;
            var f;
            var l;
            var p;
            var r;
            var t;
            var x;
            var y;
            var z;
            var A = (0, j.getValueByDataKey)(a, m, 0);
            var B = (0, j.getValueByDataKey)(a, n, b);
            c = h.top;
            f = h.left;
            l = h.width;
            p = h.height;
            r = (0, Q.getMaxRadius)(l, p);
            t = f + (0, R.getPercentValue)(e.cx, l, l / 2);
            x = c + (0, R.getPercentValue)(e.cy, p, p / 2);
            var C = {
              cx: t,
              cy: x,
              innerRadius: (0, R.getPercentValue)(e.innerRadius, r, 0),
              outerRadius: (y = e.outerRadius, typeof y == "function" ? (0, R.getPercentValue)(y(a), r, r * 0.8) : (0, R.getPercentValue)(y, r, r * 0.8)),
              maxRadius: e.maxRadius || Math.sqrt(l * l + p * p) / 2
            };
            var D = ((0, R.isNumber)(A) ? A : 0) / u;
            var E = ap(ap({}, a), g && g[b] && g[b].props);
            var F = E != null && "fill" in E && typeof E.fill == "string" ? E.fill : e.fill;
            var G = (z = b ? d.endAngle + (0, R.mathSign)(q) * s * (A !== 0) : k) + (0, R.mathSign)(q) * ((A !== 0 ? v : 0) + D * w);
            var H = (z + G) / 2;
            var I = (C.innerRadius + C.outerRadius) / 2;
            var J = [{
              name: B,
              value: A,
              payload: E,
              dataKey: m,
              type: o,
              color: F,
              fill: F,
              graphicalItemId: e.id
            }];
            var K = (0, Q.polarToCartesian)(C.cx, C.cy, I, H);
            return d = ap(ap(ap(ap({}, e.presentationProps), {}, {
              percent: D,
              cornerRadius: typeof i == "string" ? parseFloat(i) : i,
              name: B,
              tooltipPayload: J,
              midAngle: H,
              middleRadius: I,
              tooltipPosition: K
            }, E), C), {}, {
              value: A,
              dataKey: m,
              startAngle: z,
              endAngle: G,
              payload: E,
              paddingAngle: A !== 0 ? (0, R.mathSign)(q) * s : 0
            });
          });
        }
        return c;
      }({
        offset: d,
        pieSettings: b,
        displayedData: a,
        cells: c
      });
    }
  });
  var K = a.i(61537);
  var L = a.i(64187);
  var M = a.i(8679);
  var N = a.i(5877);
  var O = a.i(16219);
  var P = a.i(33856);
  var Q = a.i(66158);
  var R = a.i(47525);
  var S = a.i(10864);
  var T = a.i(82478);
  var U = a.i(14720);
  var V = a.i(45863);
  var W = a.i(25855);
  var X = a.i(3219);
  var Y = a.i(54190);
  var Z = a.i(85146);
  var $ = a.i(40147);
  var _ = a.i(24026);
  var aa = a.i(11448);
  var ab = a.i(50272);
  var ac = a.i(32929);
  var ad = a.i(80468);
  var ae = a.i(85910);
  var af = a.i(79370);
  var ag = a.i(77340);
  var ah = a.i(11715);
  var ai = ["key"];
  var aj = ["onMouseEnter", "onClick", "onMouseLeave"];
  var ak = ["id"];
  var al = ["id"];
  function am() {
    return (am = Object.assign.bind()).apply(null, arguments);
  }
  function an(a, b) {
    if (a == null) {
      return {};
    }
    var c;
    var d;
    var e = function (a, b) {
      if (a == null) {
        return {};
      }
      var c = {};
      for (var d in a) {
        if ({}.hasOwnProperty.call(a, d)) {
          if (b.indexOf(d) !== -1) {
            continue;
          }
          c[d] = a[d];
        }
      }
      return c;
    }(a, b);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(a);
      for (d = 0; d < f.length; d++) {
        c = f[d];
        if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
          e[c] = a[c];
        }
      }
    }
    return e;
  }
  function ao(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function ap(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        ao(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        ao(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  var aq = N.Sector;
  function ar(a) {
    var b = (0, c.useMemo)(() => (0, P.findAllByType)(a.children, _Component8), [a.children]);
    var e = (0, K.useAppSelector)(c => I(c, a.id, b));
    if (e == null) {
      return null;
    } else {
      return c.createElement(X.SetPolarLegendPayload, {
        legendPayload: e
      });
    }
  }
  var as = c.memo(a => {
    var b = a.dataKey;
    var d = a.nameKey;
    var e = a.sectors;
    var f = a.stroke;
    var g = a.strokeWidth;
    var h = a.fill;
    var i = a.name;
    var k = a.hide;
    var l = a.tooltipType;
    var m = a.formatter;
    var n = a.id;
    var o = function (a) {
      if (a != null && typeof a != "boolean" && typeof a != "function") {
        if (c.isValidElement(a)) {
          var b;
          var d = (b = a.props) == null ? undefined : b.fill;
          if (typeof d == "string") {
            return d;
          } else {
            return undefined;
          }
        }
        var e = a.fill;
        if (typeof e == "string") {
          return e;
        } else {
          return undefined;
        }
      }
    }(a.activeShape);
    var p = {
      dataDefinedOnItem: e.map(a => {
        var b = a.tooltipPayload;
        if (o == null || b == null) {
          return b;
        } else {
          return b.map(a => ap(ap({}, a), {}, {
            color: o,
            fill: o
          }));
        }
      }),
      getPosition: a => {
        var b;
        if ((b = e[Number(a)]) == null) {
          return undefined;
        } else {
          return b.tooltipPosition;
        }
      },
      settings: {
        stroke: f,
        strokeWidth: g,
        fill: h,
        dataKey: b,
        nameKey: d,
        name: (0, j.getTooltipNameProp)(i, b),
        hide: k,
        type: l,
        color: h,
        unit: "",
        formatter: m,
        graphicalItemId: n
      }
    };
    return c.createElement(V.SetTooltipEntrySettings, {
      tooltipEntrySettings: p
    });
  });
  function at(a) {
    var b = a.sectors;
    var d = a.props;
    var e = a.showLabels;
    var g = d.label;
    var h = d.labelLine;
    var i = d.dataKey;
    if (!e || !g || !b) {
      return null;
    }
    var k = (0, ac.svgPropertiesNoEvents)(d);
    var l = (0, ac.svgPropertiesNoEventsFromUnknown)(g);
    var m = (0, ac.svgPropertiesNoEventsFromUnknown)(h);
    var n = typeof g == "object" && "offsetRadius" in g && typeof g.offsetRadius == "number" && g.offsetRadius || 20;
    var o = b.map((a, b) => {
      var d;
      var e;
      var o = (a.startAngle + a.endAngle) / 2;
      var p = (0, Q.polarToCartesian)(a.cx, a.cy, a.outerRadius + n, o);
      var q = ap(ap(ap(ap({}, k), a), {}, {
        stroke: "none"
      }, l), {}, {
        index: b,
        textAnchor: (d = p.x) > (e = a.cx) ? "start" : d < e ? "end" : "middle"
      }, p);
      var r = ap(ap(ap(ap({}, k), a), {}, {
        fill: "none",
        stroke: a.fill
      }, m), {}, {
        index: b,
        points: [(0, Q.polarToCartesian)(a.cx, a.cy, a.outerRadius, o), p],
        key: "line"
      });
      return c.createElement(af.ZIndexLayer, {
        zIndex: ag.DefaultZIndexes.label,
        key: `label-${a.startAngle}-${a.endAngle}-${a.midAngle}-${b}`
      }, c.createElement(L.Layer, null, h && ((a, b) => {
        if (c.isValidElement(a)) {
          return c.cloneElement(a, b);
        }
        if (typeof a == "function") {
          return a(b);
        }
        var d = (0, f.clsx)("recharts-pie-label-line", typeof a != "boolean" ? a.className : "");
        b.key;
        var e = an(b, ai);
        return c.createElement(M.Curve, am({}, e, {
          type: "linear",
          className: d
        }));
      })(h, r), ((a, b, d) => {
        if (c.isValidElement(a)) {
          return c.cloneElement(a, b);
        }
        var e = d;
        if (typeof a == "function" && (e = a(b), c.isValidElement(e))) {
          return e;
        }
        var g = (0, f.clsx)("recharts-pie-label-text", (0, ah.getClassNameFromUnknown)(a));
        return c.createElement(O.Text, am({}, b, {
          alignmentBaseline: "middle",
          className: g
        }), e);
      })(g, q, (0, j.getValueByDataKey)(a, i))));
    });
    return c.createElement(L.Layer, {
      className: "recharts-pie-labels"
    }, o);
  }
  function au(a) {
    var b = a.sectors;
    var d = a.props;
    var e = a.showLabels;
    var f = d.label;
    if (typeof f == "object" && f != null && "position" in f) {
      return c.createElement(ad.LabelListFromLabelProp, {
        label: f
      });
    } else {
      return c.createElement(at, {
        sectors: b,
        props: d,
        showLabels: e
      });
    }
  }
  function av(a) {
    var b;
    var d;
    var e;
    var f;
    var g;
    var h = a.sectors;
    var i = a.activeShape;
    var j = a.inactiveShape;
    var k = a.allOtherPieProps;
    var l = a.shape;
    var m = a.id;
    var n = a.animationElapsedTime;
    var o = a.isAnimating;
    var p = a.isEntrance;
    var q = (0, K.useAppSelector)(W.selectActiveTooltipIndex);
    var r = (0, K.useAppSelector)(W.selectActiveTooltipDataKey);
    var s = (0, K.useAppSelector)(W.selectActiveTooltipGraphicalItemId);
    var t = k.onMouseEnter;
    var u = k.onClick;
    var v = k.onMouseLeave;
    var w = an(k, aj);
    b = k.dataKey;
    d = (0, K.useAppDispatch)();
    var x = (a, c) => e => {
      if (t != null) {
        t(a, c, e);
      }
      d((0, U.setActiveMouseOverItemIndex)({
        activeIndex: String(c),
        activeDataKey: b,
        activeCoordinate: a.tooltipPosition,
        activeGraphicalItemId: m
      }));
    };
    e = (0, K.useAppDispatch)();
    var y = (a, b) => c => {
      if (v != null) {
        v(a, b, c);
      }
      e((0, U.mouseLeaveItem)());
    };
    f = k.dataKey;
    g = (0, K.useAppDispatch)();
    var z = (a, b) => c => {
      if (u != null) {
        u(a, b, c);
      }
      g((0, U.setActiveClickItemIndex)({
        activeIndex: String(b),
        activeDataKey: f,
        activeCoordinate: a.tooltipPosition,
        activeGraphicalItemId: m
      }));
    };
    if (h == null || h.length === 0) {
      return null;
    } else {
      return c.createElement(c.Fragment, null, h.map((a, b) => {
        if ((a == null ? undefined : a.startAngle) === 0 && (a == null ? undefined : a.endAngle) === 0 && h.length !== 1) {
          return null;
        }
        var d = s == null || s === m;
        var e = String(b) === q && (r == null || k.dataKey === r) && d;
        var f = i && e ? i : q ? j : null;
        var g = ap(ap({}, a), {}, {
          stroke: a.stroke,
          tabIndex: -1,
          index: b,
          isActive: e,
          animationElapsedTime: n,
          isAnimating: o,
          isEntrance: p,
          [Y.DATA_ITEM_INDEX_ATTRIBUTE_NAME]: b,
          [Y.DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]: m
        });
        return c.createElement(L.Layer, am({
          key: `sector-${a == null ? undefined : a.startAngle}-${a == null ? undefined : a.endAngle}-${a.midAngle}-${b}`,
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, (0, S.adaptEventsOfChild)(w, a, b), {
          onMouseEnter: x(a, b),
          onMouseLeave: y(a, b),
          onClick: z(a, b)
        }), c.createElement(T.Shape, {
          option: f ?? l,
          DefaultShape: aq,
          shapeProps: g
        }));
      }));
    }
  }
  function aw(a) {
    var b = a.showLabels;
    var d = a.sectors;
    var e = a.children;
    var f = (0, c.useMemo)(() => b && d ? d.map(a => ({
      value: a.value,
      payload: a.payload,
      clockWise: false,
      parentViewBox: undefined,
      viewBox: {
        cx: a.cx,
        cy: a.cy,
        innerRadius: a.innerRadius,
        outerRadius: a.outerRadius,
        startAngle: a.startAngle,
        endAngle: a.endAngle,
        clockWise: false
      },
      fill: a.fill
    })) : [], [d, b]);
    return c.createElement(ad.PolarLabelListContextProvider, {
      value: b ? f : undefined
    }, e);
  }
  function ax(a) {
    var g = a.props;
    var h = a.previousSectorsRef;
    var i = a.id;
    var j = g.sectors;
    var k = g.activeShape;
    var m = g.inactiveShape;
    var n = g.animationInterpolateFn;
    var o = (0, Z.useAnimationCallbacks)(g.onAnimationStart, g.onAnimationEnd);
    var p = o.isAnimating;
    var q = o.handleAnimationStart;
    var r = o.handleAnimationEnd;
    var s = (0, l.usePolarChartLayout)();
    if (s == null) {
      return null;
    }
    var t = j[0];
    return c.createElement(aw, {
      showLabels: !p,
      sectors: j
    }, c.createElement(Z.AnimatedItems, {
      animationInput: g,
      animationIdPrefix: "recharts-pie-",
      items: j,
      previousItemsRef: h,
      isAnimationActive: g.isAnimationActive,
      animationBegin: g.animationBegin,
      animationDuration: g.animationDuration,
      animationEasing: g.animationEasing,
      onAnimationStart: q,
      onAnimationEnd: r,
      animationInterpolateFn: n,
      animationMatchBy: g.animationMatchBy,
      layout: s
    }, (a, b, d) => c.createElement(L.Layer, null, c.createElement(av, {
      sectors: a,
      activeShape: k,
      inactiveShape: m,
      allOtherPieProps: g,
      shape: g.shape,
      id: i,
      animationElapsedTime: b,
      isAnimating: p || b < 1,
      isEntrance: d
    }))), c.createElement(au, {
      showLabels: !p,
      sectors: j,
      props: g
    }), c.createElement(ae.PolarLabelContextProvider, {
      cx: (t == null ? undefined : t.cx) ?? 0,
      cy: (t == null ? undefined : t.cy) ?? 0,
      innerRadius: (t == null ? undefined : t.innerRadius) ?? 0,
      outerRadius: (t == null ? undefined : t.outerRadius) ?? 0,
      startAngle: g.startAngle,
      endAngle: g.endAngle,
      clockWise: false
    }, g.children));
  }
  var ay = {
    animationBegin: 400,
    animationDuration: 1500,
    animationEasing: "ease",
    animationInterpolateFn: (a, b) => {
      if (a == null) {
        return [];
      }
      var c = [];
      var d = a.find(a => a.status !== "removed");
      var f = d ? d.next.startAngle : 0;
      a.forEach((a, d) => {
        if (a.status !== "removed") {
          var g = d > 0 ? (0, e.default)(a.next, "paddingAngle", 0) : 0;
          if (a.status === "matched") {
            var h = (0, R.interpolate)(a.prev.endAngle - a.prev.startAngle, a.next.endAngle - a.next.startAngle, b);
            var i = ap(ap({}, a.next), {}, {
              startAngle: f + g,
              endAngle: f + h + g
            });
            c.push(i);
            f = i.endAngle;
          } else {
            var j = (0, R.interpolate)(0, a.next.endAngle - a.next.startAngle, b);
            var k = ap(ap({}, a.next), {}, {
              startAngle: f + g,
              endAngle: f + j + g
            });
            c.push(k);
            f = k.endAngle;
          }
        }
      });
      return c;
    },
    animationMatchBy: $.matchAppend,
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
    shape: aq,
    startAngle: 0,
    stroke: "#fff",
    zIndex: ag.DefaultZIndexes.area
  };
  function az(a) {
    var b = a.id;
    var e = an(a, ak);
    var g = a.hide;
    var h = a.className;
    var i = a.rootTabIndex;
    var j = (0, c.useMemo)(() => (0, P.findAllByType)(a.children, _Component8), [a.children]);
    var k = (0, K.useAppSelector)(a => J(a, b, j));
    var l = (0, c.useRef)(null);
    var m = (0, f.clsx)("recharts-pie", h);
    if (g || k == null) {
      l.current = null;
      return c.createElement(L.Layer, {
        tabIndex: i,
        className: m
      });
    } else {
      return c.createElement(af.ZIndexLayer, {
        zIndex: a.zIndex
      }, c.createElement(as, {
        dataKey: a.dataKey,
        nameKey: a.nameKey,
        sectors: k,
        stroke: a.stroke,
        strokeWidth: a.strokeWidth,
        fill: a.fill,
        name: a.name,
        hide: a.hide,
        tooltipType: a.tooltipType,
        formatter: a.formatter,
        id: b,
        activeShape: a.activeShape
      }), c.createElement(L.Layer, {
        tabIndex: i,
        className: m
      }, c.createElement(ax, {
        props: ap(ap({}, e), {}, {
          sectors: k
        }),
        previousSectorsRef: l,
        id: b
      })));
    }
  }
  function _Component9(a) {
    var b = (0, _.resolveDefaultProps)(a, ay);
    var d = b.id;
    var e = an(b, al);
    var f = (0, ac.svgPropertiesNoEvents)(e);
    return c.createElement(aa.RegisterGraphicalItemId, {
      id: d,
      type: "pie"
    }, a => c.createElement(c.Fragment, null, c.createElement(ab.SetPolarGraphicalItem, {
      type: "pie",
      id: a,
      data: e.data,
      dataKey: e.dataKey,
      hide: e.hide,
      angleAxisId: 0,
      radiusAxisId: 0,
      name: e.name,
      nameKey: e.nameKey,
      tooltipType: e.tooltipType,
      legendType: e.legendType,
      fill: e.fill,
      cx: e.cx,
      cy: e.cy,
      startAngle: e.startAngle,
      endAngle: e.endAngle,
      paddingAngle: e.paddingAngle,
      minAngle: e.minAngle,
      innerRadius: e.innerRadius,
      outerRadius: e.outerRadius,
      cornerRadius: e.cornerRadius,
      presentationProps: f,
      maxRadius: b.maxRadius
    }), c.createElement(ar, am({}, e, {
      id: a
    })), c.createElement(az, am({}, e, {
      id: a
    }))));
  }
  _Component9.displayName = "Pie";
  var aB = a.i(61053);
  var aC = a.i(59963);
  var aD = a.i(94954);
  var aE = a.i(71835);
  var aF = a.i(61888);
  var aG = a.i(42299);
  var aH = a.i(93090);
  function aI(a) {
    var b = (0, K.useAppDispatch)();
    (0, c.useEffect)(() => {
      b((0, aH.updatePolarOptions)(a));
    }, [b, a]);
    return null;
  }
  var aJ = a.i(32932);
  var aK = a.i(70759);
  var aL = ["layout"];
  function aM() {
    return (aM = Object.assign.bind()).apply(null, arguments);
  }
  function aN(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  var aO = function (a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        aN(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        aN(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
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
  }, aK.initialEventSettingsState);
  var aP = (0, c.forwardRef)(function (a, b) {
    var e = (0, _.resolveDefaultProps)(a.categoricalChartProps, aO);
    var f = e.layout;
    var g = function (a, b) {
      if (a == null) {
        return {};
      }
      var c;
      var d;
      var e = function (a, b) {
        if (a == null) {
          return {};
        }
        var c = {};
        for (var d in a) {
          if ({}.hasOwnProperty.call(a, d)) {
            if (b.indexOf(d) !== -1) {
              continue;
            }
            c[d] = a[d];
          }
        }
        return c;
      }(a, b);
      if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(a);
        for (d = 0; d < f.length; d++) {
          c = f[d];
          if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
            e[c] = a[c];
          }
        }
      }
      return e;
    }(e, aL);
    var h = a.chartName;
    var i = a.defaultTooltipEventType;
    var j = a.validateTooltipEventTypes;
    var k = a.tooltipPayloadSearcher;
    return c.createElement(aC.RechartsStoreProvider, {
      preloadedState: {
        options: {
          chartName: h,
          defaultTooltipEventType: i,
          validateTooltipEventTypes: j,
          tooltipPayloadSearcher: k,
          eventEmitter: undefined
        }
      },
      reduxStoreName: e.id ?? h
    }, c.createElement(aD.ChartDataContextProvider, {
      chartData: e.data
    }), c.createElement(aE.ReportMainChartProps, {
      layout: f,
      margin: e.margin
    }), c.createElement(aG.ReportEventSettings, {
      throttleDelay: e.throttleDelay,
      throttledEvents: e.throttledEvents
    }), c.createElement(aF.ReportChartProps, {
      baseValue: undefined,
      accessibilityLayer: e.accessibilityLayer,
      barCategoryGap: e.barCategoryGap,
      maxBarSize: e.maxBarSize,
      stackOffset: e.stackOffset,
      barGap: e.barGap,
      barSize: e.barSize,
      syncId: e.syncId,
      syncMethod: e.syncMethod,
      className: e.className,
      reverseStackOrder: e.reverseStackOrder
    }), c.createElement(aI, {
      cx: e.cx,
      cy: e.cy,
      startAngle: e.startAngle,
      endAngle: e.endAngle,
      innerRadius: e.innerRadius,
      outerRadius: e.outerRadius
    }), c.createElement(aJ.CategoricalChart, aM({}, g, {
      ref: b
    })));
  });
  function aQ(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function aR(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        aQ(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        aQ(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  var aS = ["item"];
  var aT = aR(aR({}, aO), {}, {
    layout: "centric",
    startAngle: 0,
    endAngle: 360
  });
  var _Component0 = (0, c.forwardRef)((a, b) => {
    var d = (0, _.resolveDefaultProps)(a, aT);
    return c.createElement(aP, {
      chartName: "PieChart",
      defaultTooltipEventType: "item",
      validateTooltipEventTypes: aS,
      tooltipPayloadSearcher: aB.arrayTooltipSearcher,
      categoricalChartProps: d,
      ref: b
    });
  });
  var aV = a.i(72886);
  var aW = a.i(59778);
  var aX = a.i(75875);
  a.s(["default", 0, () => {
    let {
      overallStats: a,
      fetchOverallStats: e,
      initStatsListeners: f
    } = (0, aX.useStatsStore)();
    (0, c.useEffect)(() => {
      e();
      let a = f();
      return () => a();
    }, [e, f]);
    let g = [{
      key: "success",
      label: "สำเร็จ",
      value: a.success,
      color: "#22c55e"
    }, {
      key: "failed",
      label: "ผิดพลาด",
      value: a.failed,
      color: "#ef4444"
    }, {
      key: "pending",
      label: "ติดอนุมัติ",
      value: a.pending,
      color: "#eab308"
    }];
    let h = a.total;
    let i = h === 0;
    let j = i ? [{
      key: "empty",
      label: "ไม่มีข้อมูล",
      value: 1,
      color: "rgba(255,255,255,0.06)"
    }] : g;
    return <div className="group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-neutral-950 shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)] transition-all duration-200 ease-out"><div className="pointer-events-none absolute inset-x-3 top-0 z-20 h-px bg-white/20" /><div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-white/[0.04] blur-2xl transition-all duration-300 group-hover:bg-white/[0.07]" /><div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/20 to-transparent" /><div className="relative z-10 px-6 py-5"><h2 className="text-sm font-semibold text-white">สรุปสถานะการทำงาน</h2><p className="mt-1 text-xs text-neutral-500">สัดส่วนคำขอตามผลลัพธ์การทำงาน</p></div><div className="relative h-[200px] w-full px-3 pb-5"><aV.ResponsiveContainer width="100%" height="100%" style={{
          outline: "none"
        }}><_Component0 accessibilityLayer={false} style={{
            outline: "none"
          }}><aW.Tooltip cursor={false} content={({
              active: a,
              payload: c
            }) => {
              if (!a || !c?.length || i) {
                return null;
              }
              let d = c[0];
              return <div className="rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 shadow-xl"><div className="flex items-center gap-2 text-sm font-semibold text-white"><span className="h-1.5 w-1.5 rounded-full" style={{
                    backgroundColor: d.payload.color
                  }} /><span>{d.payload.label}</span><span>{Number(d.value ?? 0).toLocaleString("th-TH")}</span></div></div>;
            }} /><_Component9 data={j} dataKey="value" nameKey="label" innerRadius="65%" outerRadius="90%" paddingAngle={!i * 3} cornerRadius={4} stroke="none" isAnimationActive={false}>{j.map(a => <_Component8 fill={a.color} key={a.key} />)}</_Component9></_Component0></aV.ResponsiveContainer><div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pb-5"><span className="text-xl font-semibold text-white">{h.toLocaleString("th-TH")}</span><span className="text-[11px] text-neutral-500">รายการทั้งหมด</span></div></div><div className="flex items-center justify-center gap-4 pb-5">{g.map(a => <div className="flex items-center gap-1.5 text-xs text-neutral-400" key={a.key}><span className="h-1.5 w-1.5 rounded-full" style={{
            backgroundColor: a.color
          }} />{a.label}</div>)}</div></div>;
  }], 13440);
}, 21128, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(9651);
  var d = a.i(93301);
  var e = a.i(72370);
  var f = a.i(36972);
  var g = a.i(22426);
  var h = a.i(75875);
  a.s(["default", 0, () => {
    let {
      overallStats: a,
      fetchOverallStats: i,
      initStatsListeners: j
    } = (0, h.useStatsStore)();
    (0, c.useEffect)(() => {
      i();
      let a = j();
      return () => a();
    }, [i, j]);
    let k = [{
      label: "ทั้งหมด",
      value: a.total,
      icon: d.ListChecks,
      color: "text-blue-400",
      iconColor: "text-blue-400/20",
      glow: "shadow-blue-500/10"
    }, {
      label: "สำเร็จ",
      value: a.success,
      icon: e.CheckCircle2,
      color: "text-emerald-400",
      iconColor: "text-emerald-400/20",
      glow: "shadow-emerald-500/10"
    }, {
      label: "ผิดพลาด",
      value: a.failed,
      icon: f.XCircle,
      color: "text-red-400",
      iconColor: "text-red-400/20",
      glow: "shadow-red-500/10"
    }, {
      label: "ติดอนุมัติ",
      value: a.pending,
      icon: g.Clock3,
      color: "text-amber-400",
      iconColor: "text-amber-400/20",
      glow: "shadow-amber-500/10"
    }];
    return <div className="grid grid-cols-4 gap-4">{k.map(a => {
        let _Component1 = a.icon;
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
            `} key={a.label}><div className="\n                pointer-events-none\n                absolute inset-x-3 top-0\n                h-px\n                bg-white/20\n              " /><div className="\n                pointer-events-none\n                absolute -left-10 -top-10\n                h-24 w-24\n                rounded-full\n                bg-white/[0.04]\n                blur-2xl\n                transition-all duration-300\n                group-hover:bg-white/[0.07]\n              " /><div className="relative z-10"><p className="text-sm font-medium text-neutral-300">{a.label}</p><p className={`
                  mt-0.5
                  text-3xl
                  font-semibold
                  tracking-tight
                  ${a.color}

                  drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]
                `}>{a.value.toLocaleString()}</p></div><_Component1 size={90} strokeWidth={1.2} className={`
                pointer-events-none
                absolute
                -right-1
                -bottom-4

                ${a.iconColor}

                drop-shadow-[0_3px_4px_rgba(0,0,0,0.4)]

                transition-transform
                duration-300
                group-hover:scale-105
                group-hover:-rotate-3
              `} /><div className="\n                pointer-events-none\n                absolute\n                inset-x-0\n                bottom-0\n                h-4\n                bg-gradient-to-t\n                from-black/20\n                to-transparent\n              " /></div>;
      })}</div>;
  }]);
}, 99521, 86347, 99650, 150, 76475, 14992, 58456, 95487, 47525, 67187, 13655, 66067, 17602, 54190, 61325, 61537, 90013, 8492, 72886, 58328, 39537, 66158, 77340, 2996, 51934, 51554, 60585, 88249, 1578, 32929, 89367, 64187, 41317, 10864, 8679, 24026, 5877, 49502, 93748, 16219, 33856, 82478, 14720, 45863, 25855, 81478, 3219, 40147, 30889, 85146, 49241, 11448, 50272, 79370, 85910, 80468, 11715, 61053, 670, 12711, 93090, 70759, 43339, 59963, 94954, 85773, 71835, 61888, 42299, 61881, 58794, 98164, 32932, 79728, 17037, 52514, 23820, 79946, 28162, 59778, a => {
  "use strict";

  function b(a) {
    return a === "__proto__";
  }
  let c = /\.|(\[(?:[^[\]]*|(["'])(?:(?!\2)[^\\]|\\.)*?\2)\])/;
  function d(a) {
    switch (typeof a) {
      case "number":
      case "symbol":
      default:
        return false;
      case "string":
        if (a === "" || a.startsWith(".") || a.endsWith(".")) {
          return false;
        }
        return c.test(a);
    }
  }
  function e(a) {
    if (typeof a == "string" || typeof a == "symbol") {
      return a;
    } else if (Object.is(a?.valueOf?.(), -0)) {
      return "-0";
    } else {
      return String(a);
    }
  }
  function f(a) {
    return typeof a == "symbol" || a instanceof Symbol;
  }
  function g(a) {
    var b;
    if (Array.isArray(a)) {
      return a.map(e);
    }
    if (typeof a == "symbol") {
      return [a];
    }
    a = (b = a) == null ? "" : function a(b) {
      if (typeof b == "string") {
        return b;
      }
      if (Array.isArray(b)) {
        return b.map(a).join(",");
      }
      if (f(b)) {
        return b.toString();
      }
      let c = b + "";
      if (c === "0" && Object.is(Number(b), -0)) {
        return "-0";
      } else {
        return c;
      }
    }(b);
    let c = [];
    let d = a.length;
    if (d === 0) {
      return c;
    }
    let g = 0;
    let h = "";
    let i = "";
    let j = false;
    let k = false;
    let l = /^-?\d+(?:\.\d+)?$/;
    for (a.charCodeAt(0) === 46 && c.push(""); g < d;) {
      let b = a[g];
      if (i) {
        if (b === "\\" && g + 1 < d) {
          h += a[++g];
        } else if (b === i) {
          i = "";
        } else {
          h += b;
        }
      } else if (j) {
        if (b === "\"" || b === "'") {
          i = b;
          k = true;
        } else if (b === "]") {
          j = false;
          if (!k && h.includes(".") && !l.test(h)) {
            let a = h.split(".");
            for (let b = 0; b < a.length; b++) {
              if (a[b] !== "") {
                c.push(a[b]);
              }
            }
          } else {
            c.push(h);
          }
          h = "";
        } else {
          h += b;
        }
      } else if (b === "[") {
        j = true;
        k = false;
        if (h) {
          c.push(h);
          h = "";
        }
      } else if (b === ".") {
        if (h) {
          c.push(h);
          h = "";
        }
        let b = a[g + 1];
        if (b === undefined || b === ".") {
          c.push("");
        }
      } else {
        h += b;
      }
      g++;
    }
    if (h) {
      c.push(h);
    }
    return c;
  }
  function h(a, c, f) {
    if (a == null) {
      return f;
    }
    switch (typeof c) {
      case "string":
        {
          if (b(c)) {
            return f;
          }
          let e = a[c];
          if (e === undefined) {
            if (d(c) && !Object.hasOwn(a, c)) {
              return h(a, g(c), f);
            } else {
              return f;
            }
          }
          return e;
        }
      case "number":
      case "symbol":
        {
          if (typeof c == "number") {
            c = e(c);
          }
          let b = a[c];
          if (b === undefined) {
            return f;
          }
          return b;
        }
      default:
        {
          if (Array.isArray(c)) {
            var i = a;
            var j = c;
            var k = f;
            if (j.length === 0) {
              return k;
            }
            let d = i;
            for (let a = 0; a < j.length; a++) {
              if (d == null || b(j[a])) {
                return k;
              }
              d = d[j[a]];
            }
            if (d === undefined) {
              return k;
            } else {
              return d;
            }
          }
          if (b(c = Object.is(c?.valueOf(), -0) ? "-0" : String(c))) {
            return f;
          }
          let d = a[c];
          if (d === undefined) {
            return f;
          }
          return d;
        }
    }
  }
  function i() {
    var a;
    var b;
    for (var c = 0, d = "", e = arguments.length; c < e; c++) {
      if ((a = arguments[c]) && (b = function a(b) {
        var c;
        var d;
        var e = "";
        if (typeof b == "string" || typeof b == "number") {
          e += b;
        } else if (typeof b == "object") {
          if (Array.isArray(b)) {
            var f = b.length;
            for (c = 0; c < f; c++) {
              if (b[c] && (d = a(b[c]))) {
                if (e) {
                  e += " ";
                }
                e += d;
              }
            }
          } else {
            for (d in b) {
              if (b[d]) {
                if (e) {
                  e += " ";
                }
                e += d;
              }
            }
          }
        }
        return e;
      }(a))) {
        if (d) {
          d += " ";
        }
        d += b;
      }
    }
    return d;
  }
  a.s(["default", 0, h], 99521);
  a.s(["clsx", 0, i], 86347);
  var j;
  var k;
  var l;
  var m;
  var n;
  var o;
  var p;
  var q;
  var r;
  var s;
  var t;
  var u;
  var v;
  var w;
  var x;
  var y;
  var z;
  var B;
  var C;
  var D;
  var E;
  var F;
  var G;
  var H;
  var I;
  var J;
  var K;
  var L = Symbol("NOT_FOUND");
  var M = a => Array.isArray(a) ? a : [a];
  var N = 0;
  var O = class {
    revision = N;
    _value;
    _lastValue;
    _isEqual = P;
    constructor(a, b = P) {
      this._value = this._lastValue = a;
      this._isEqual = b;
    }
    get value() {
      return this._value;
    }
    set value(a) {
      if (this.value !== a) {
        this._value = a;
        this.revision = ++N;
      }
    }
  };
  function P(a, b) {
    return a === b;
  }
  function Q(a) {
    if (!(a instanceof O)) {
      console.warn("Not a valid cell! ", a);
    }
    return a.value;
  }
  var R = (a, b) => false;
  function S() {
    return function (a = P) {
      return new O(null, a);
    }(R);
  }
  var T = a => {
    let b = a.collectionTag;
    if (b === null) {
      b = a.collectionTag = S();
    }
    Q(b);
  };
  var U = 0;
  var V = Object.getPrototypeOf({});
  var W = class {
    constructor(a) {
      this.value = a;
      this.value = a;
      this.tag.value = a;
    }
    proxy = new Proxy(this, X);
    tag = S();
    tags = {};
    children = {};
    collectionTag = null;
    id = U++;
  };
  var X = {
    get: (a, b) => function () {
      let {
        value: c
      } = a;
      let d = Reflect.get(c, b);
      if (typeof b == "symbol" || b in V) {
        return d;
      }
      if (typeof d == "object" && d !== null) {
        var e;
        let c = a.children[b];
        if (c === undefined) {
          c = a.children[b] = Array.isArray(e = d) ? new Y(e) : new W(e);
        }
        if (c.tag) {
          Q(c.tag);
        }
        return c.proxy;
      }
      {
        let c = a.tags[b];
        if (c === undefined) {
          (c = a.tags[b] = S()).value = d;
        }
        Q(c);
        return d;
      }
    }(),
    ownKeys: a => {
      T(a);
      return Reflect.ownKeys(a.value);
    },
    getOwnPropertyDescriptor: (a, b) => Reflect.getOwnPropertyDescriptor(a.value, b),
    has: (a, b) => Reflect.has(a.value, b)
  };
  var Y = class {
    constructor(a) {
      this.value = a;
      this.value = a;
      this.tag.value = a;
    }
    proxy = new Proxy([this], Z);
    tag = S();
    tags = {};
    children = {};
    collectionTag = null;
    id = U++;
  };
  var Z = {
    get: ([a], b) => {
      if (b === "length") {
        T(a);
      }
      return X.get(a, b);
    },
    ownKeys: ([a]) => X.ownKeys(a),
    getOwnPropertyDescriptor: ([a], b) => X.getOwnPropertyDescriptor(a, b),
    has: ([a], b) => X.has(a, b)
  };
  var $ = (a, b) => a === b;
  var _ = typeof WeakRef === "undefined" ? class {
    constructor(a) {
      this.value = a;
    }
    deref() {
      return this.value;
    }
  } : WeakRef;
  function aa() {
    return {
      s: 0,
      v: undefined,
      o: null,
      p: null
    };
  }
  function ab(a, b = {}) {
    let c;
    let d = aa();
    let {
      resultEqualityCheck: e
    } = b;
    let f = 0;
    function g() {
      let b;
      let g = d;
      let {
        length: h
      } = arguments;
      for (let a = 0; a < h; a++) {
        let b = arguments[a];
        if (typeof b == "function" || typeof b == "object" && b !== null) {
          let a = g.o;
          if (a === null) {
            g.o = a = new WeakMap();
          }
          let c = a.get(b);
          if (c === undefined) {
            g = aa();
            a.set(b, g);
          } else {
            g = c;
          }
        } else {
          let a = g.p;
          if (a === null) {
            g.p = a = new Map();
          }
          let c = a.get(b);
          if (c === undefined) {
            g = aa();
            a.set(b, g);
          } else {
            g = c;
          }
        }
      }
      let i = g;
      if (g.s === 1) {
        b = g.v;
      } else {
        b = a.apply(null, arguments);
        f++;
        if (e) {
          var j;
          let a = (j = c) instanceof _ ? j.deref() : j;
          if (a != null && e(a, b)) {
            b = a;
            if (f !== 0) {
              f--;
            }
          }
          c = typeof b == "object" && b !== null || typeof b == "function" ? new _(b) : b;
        }
      }
      i.s = 1;
      i.v = b;
      return b;
    }
    g.clearCache = () => {
      d = aa();
      g.resetResultsCount();
    };
    g.resultsCount = () => f;
    g.resetResultsCount = () => {
      f = 0;
    };
    return g;
  }
  function ac(a, ...b) {
    let c = typeof a == "function" ? {
      memoize: a,
      memoizeOptions: b
    } : a;
    let d = (...a) => {
      let b;
      let d;
      let e = 0;
      let f = 0;
      let g = {};
      let h = a.pop();
      if (typeof h == "object") {
        g = h;
        h = a.pop();
      }
      (function (a, b = `expected a function, instead received ${typeof a}`) {
        if (typeof a != "function") {
          throw TypeError(b);
        }
      })(h, `createSelector expects an output function after the inputs, but received: [${typeof h}]`);
      let {
        memoize: i,
        memoizeOptions: j = [],
        argsMemoize: k = ab,
        argsMemoizeOptions: l = []
      } = {
        ...c,
        ...g
      };
      let m = M(j);
      let n = M(l);
      (function (a, b = "expected all items to be functions, instead received the following types: ") {
        if (!a.every(a => typeof a == "function")) {
          let c = a.map(a => typeof a == "function" ? `function ${a.name || "unnamed"}()` : typeof a).join(", ");
          throw TypeError(`${b}[${c}]`);
        }
      })(b = Array.isArray(a[0]) ? a[0] : a, "createSelector expects all input-selectors to be functions, but received the following types: ");
      let o = b;
      let p = i(function () {
        e++;
        return h.apply(null, arguments);
      }, ...m);
      return Object.assign(k(function () {
        f++;
        let a = function (a, b) {
          let c = [];
          let {
            length: d
          } = a;
          for (let e = 0; e < d; e++) {
            c.push(a[e].apply(null, b));
          }
          return c;
        }(o, arguments);
        return d = p.apply(null, a);
      }, ...n), {
        resultFunc: h,
        memoizedResultFunc: p,
        dependencies: o,
        dependencyRecomputations: () => f,
        resetDependencyRecomputations: () => {
          f = 0;
        },
        lastResult: () => d,
        recomputations: () => e,
        resetRecomputations: () => {
          e = 0;
        },
        memoize: i,
        argsMemoize: k
      });
    };
    Object.assign(d, {
      withTypes: () => d
    });
    return d;
  }
  var ad = ac(ab);
  var ae = Object.assign((a, b = ad) => {
    (function (a, b = `expected an object, instead received ${typeof a}`) {
      if (typeof a != "object") {
        throw TypeError(b);
      }
    })(a, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof a}`);
    let c = Object.keys(a);
    return b(c.map(b => a[b]), (...a) => a.reduce((a, b, d) => {
      a[c[d]] = b;
      return a;
    }, {}));
  }, {
    withTypes: () => ae
  });
  a.s(["createSelector", 0, ad, "createSelectorCreator", 0, ac, "lruMemoize", 0, function (a, b) {
    let c;
    let {
      equalityCheck: d = $,
      maxSize: e = 1,
      resultEqualityCheck: f
    } = typeof b == "object" ? b : {
      equalityCheck: b
    };
    let g = function (a, b) {
      if (a === null || b === null || a.length !== b.length) {
        return false;
      }
      let {
        length: c
      } = a;
      for (let e = 0; e < c; e++) {
        if (!d(a[e], b[e])) {
          return false;
        }
      }
      return true;
    };
    let h = 0;
    let i = e <= 1 ? {
      get: a => c && g(c.key, a) ? c.value : L,
      put(a, b) {
        c = {
          key: a,
          value: b
        };
      },
      getEntries: () => c ? [c] : [],
      clear() {
        c = undefined;
      }
    } : function (a, b) {
      let c = [];
      function d(a) {
        let d = c.findIndex(c => b(a, c.key));
        if (d > -1) {
          let a = c[d];
          if (d > 0) {
            c.splice(d, 1);
            c.unshift(a);
          }
          return a.value;
        }
        return L;
      }
      return {
        get: d,
        put: function (b, e) {
          if (d(b) === L) {
            c.unshift({
              key: b,
              value: e
            });
            if (c.length > a) {
              c.pop();
            }
          }
        },
        getEntries: function () {
          return c;
        },
        clear: function () {
          c = [];
        }
      };
    }(e, g);
    function j() {
      let b = i.get(arguments);
      if (b === L) {
        b = a.apply(null, arguments);
        h++;
        if (f) {
          let a = i.getEntries().find(a => f(a.value, b));
          if (a) {
            b = a.value;
            if (h !== 0) {
              h--;
            }
          }
        }
        i.put(arguments, b);
      }
      return b;
    }
    j.clearCache = () => {
      i.clear();
      j.resetResultsCount();
    };
    j.resultsCount = () => h;
    j.resetResultsCount = () => {
      h = 0;
    };
    return j;
  }, "weakMapMemoize", 0, ab], 99650);
  var af = a => a.chartData;
  var ag = ad([af], a => {
    var b = a.chartData != null ? a.chartData.length - 1 : 0;
    return {
      chartData: a.chartData,
      computedData: a.computedData,
      dataEndIndex: b,
      dataStartIndex: 0
    };
  });
  var ah = (a, b, c, d) => d ? ag(a) : af(a);
  var ai = ad([ah], a => {
    var b = a.chartData;
    var c = a.dataStartIndex;
    var d = a.dataEndIndex;
    if (b != null) {
      return b.slice(c, d + 1);
    } else {
      return [];
    }
  });
  var aj = ad([ag], a => {
    var b = a.chartData;
    var c = a.dataStartIndex;
    var d = a.dataEndIndex;
    if (b != null) {
      return b.slice(c, d + 1);
    } else {
      return [];
    }
  });
  var ak = ad([af], a => {
    var b = a.chartData;
    var c = a.dataStartIndex;
    var d = a.dataEndIndex;
    if (b != null) {
      return b.slice(c, d + 1);
    } else {
      return [];
    }
  });
  function al(a, b) {
    return a === b || Number.isNaN(a) && Number.isNaN(b);
  }
  function am(a) {
    var b;
    return a != null && typeof a != "function" && Number.isSafeInteger(b = a.length) && b >= 0;
  }
  function an(a) {
    return a !== null && (typeof a == "object" || typeof a == "function");
  }
  a.s(["selectChartDataAndAlwaysIgnoreIndexes", 0, ag, "selectChartDataSliceIfNotInPanorama", 0, ai, "selectChartDataSliceIgnoringIndexes", 0, aj, "selectChartDataSliceWithIndexes", 0, ak, "selectChartDataWithIndexes", 0, af, "selectChartDataWithIndexesIfNotInPanoramaPosition3", 0, (a, b, c) => c ? ag(a) : af(a), "selectChartDataWithIndexesIfNotInPanoramaPosition4", 0, ah], 150);
  a.s(["eq", 0, al], 76475);
  let ao = /^(?:0|[1-9]\d*)$/;
  function ap(a, b = Number.MAX_SAFE_INTEGER) {
    switch (typeof a) {
      case "number":
        return Number.isInteger(a) && a >= 0 && a < b;
      case "symbol":
        return false;
      case "string":
        return ao.test(a);
    }
  }
  function aq(a, b, c) {
    return !!an(c) && (typeof b == "number" && !!am(c) && !!ap(b) && b < c.length || typeof b == "string" && b in c) && al(c[b], a);
  }
  function ar(a) {
    if (typeof a == "symbol") {
      return 1;
    } else if (a === null) {
      return 2;
    } else if (a === undefined) {
      return 3;
    } else {
      return (a != a) * 4;
    }
  }
  let as = (a, b, c) => {
    if (a !== b) {
      let d = ar(a);
      let e = ar(b);
      if (d === e && d === 0) {
        if (a < b) {
          if (c === "desc") {
            return 1;
          } else {
            return -1;
          }
        }
        if (a > b) {
          if (c === "desc") {
            return -1;
          } else {
            return 1;
          }
        }
      }
      if (c === "desc") {
        return e - d;
      } else {
        return d - e;
      }
    }
    return 0;
  };
  let at = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
  let au = /^\w*$/;
  function av(a, ...b) {
    let c = b.length;
    if (c > 1 && aq(a, b[0], b[1])) {
      b = [];
    } else if (c > 2 && aq(b[0], b[1], b[2])) {
      b = [b[0]];
    }
    return function (a, b, c) {
      if (a == null) {
        return [];
      }
      if (!Array.isArray(a)) {
        a = am(a) ? Array.from(a) : Object.values(a);
      }
      if (!Array.isArray(b)) {
        b = b == null ? [null] : [b];
      }
      if (b.length === 0) {
        b = [null];
      }
      if (!Array.isArray(c)) {
        c = c == null ? [] : [c];
      }
      c = c.map(a => String(a));
      let d = (a, b) => {
        let c = a;
        let d = 0;
        for (; d < b.length && c != null; ++d) {
          c = c[b[d]];
        }
        if (d > 0 && d === b.length) {
          return c;
        } else {
          return undefined;
        }
      };
      let e = b.map(a => {
        var b;
        if (Array.isArray(a) && a.length === 1) {
          a = a[0];
        }
        if (a == null || typeof a == "function" || Array.isArray(a) || !Array.isArray(b = a) && (typeof b == "number" || typeof b == "boolean" || b == null || f(b) || typeof b == "string" && (au.test(b) || !at.test(b)) || 0)) {
          return a;
        } else {
          return {
            key: a,
            path: g(a)
          };
        }
      });
      return a.map(a => ({
        original: a,
        criteria: e.map(b => ((a, b) => {
          if (a == null) {
            return b;
          }
          if (b != null) {
            if (typeof a == "object" && "key" in a) {
              if (Object.hasOwn(b, a.key)) {
                return b[a.key];
              } else {
                return d(b, a.path);
              }
            } else if (typeof a == "function") {
              return a(b);
            } else if (Array.isArray(a)) {
              return d(b, a);
            } else {
              return b[a];
            }
          }
        })(b, a))
      })).slice().sort((a, b) => {
        for (let d = 0; d < e.length; d++) {
          let e = as(a.criteria[d], b.criteria[d], c[d]);
          if (e !== 0) {
            return e;
          }
        }
        return 0;
      }).map(a => a.original);
    }(a, function (a, b = 1) {
      let c = [];
      let d = Math.floor(b);
      let e = (a, b) => {
        for (let f = 0; f < a.length; f++) {
          let g = a[f];
          if (Array.isArray(g) && b < d) {
            e(g, b + 1);
          } else {
            c.push(g);
          }
        }
      };
      e(a, 0);
      return c;
    }(b), ["asc"]);
  }
  var aw = a => a.legend.settings;
  var ax = a => a.legend.size;
  var ay = ad([a => a.legend.payload, aw], (a, b) => {
    var c = b.itemSorter;
    var d = a.flat(1);
    if (c) {
      return av(d, c);
    } else {
      return d;
    }
  });
  function az(a) {
    if (typeof a == "object" && "length" in a) {
      return a;
    } else {
      return Array.from(a);
    }
  }
  function aA(a) {
    return function () {
      return a;
    };
  }
  function aB(a, b) {
    if ((e = a.length) > 1) {
      var c;
      var d;
      for (var e, f = 1, g = a[b[0]], h = g.length; f < e; ++f) {
        d = g;
        g = a[b[f]];
        c = 0;
        for (; c < h; ++c) {
          g[c][1] += g[c][0] = isNaN(d[c][1]) ? d[c][0] : d[c][1];
        }
      }
    }
  }
  function aC(a) {
    for (var b = a.length, c = Array(b); --b >= 0;) {
      c[b] = b;
    }
    return c;
  }
  function aD(a, b) {
    return a[b];
  }
  function aE(a) {
    let b = [];
    b.key = a;
    return b;
  }
  function aF(a, b = 4) {
    var c = 10 ** b;
    var d = Math.round(a * c) / c;
    if (Object.is(d, -0)) {
      return 0;
    } else {
      return d;
    }
  }
  function aG(a) {
    for (var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) {
      c[d - 1] = arguments[d];
    }
    return a.reduce((a, b, d) => {
      var e = c[d - 1];
      if (typeof e == "string") {
        return a + e + b;
      } else if (e !== undefined) {
        return a + aF(e) + b;
      } else {
        return a + b;
      }
    }, "");
  }
  a.s(["selectLegendPayload", 0, ay, "selectLegendSettings", 0, aw, "selectLegendSize", 0, ax], 14992);
  Array.prototype.slice;
  a.s(["default", 0, aA], 58456);
  a.s(["round", 0, aF, "roundTemplateLiteral", 0, aG], 95487);
  var aH = a => a === 0 ? 0 : a > 0 ? 1 : -1;
  var aI = a => typeof a == "number" && a != +a;
  var aJ = a => typeof a == "string" && a.length > 1 && a.indexOf("%") === a.length - 1;
  var aK = a => (typeof a == "number" || a instanceof Number) && !aI(a);
  var aL = a => aK(a) || typeof a == "string";
  var aM = 0;
  var aN = a => {
    var b = ++aM;
    return `${a || ""}${b}`;
  };
  function aO(a, b) {
    var c;
    var d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var e = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    if (!aK(a) && typeof a != "string") {
      return d;
    }
    if (aJ(a)) {
      if (b == null) {
        return d;
      }
      var f = a.indexOf("%");
      c = b * parseFloat(a.slice(0, f)) / 100;
    } else {
      c = +a;
    }
    if (aI(c)) {
      c = d;
    }
    if (e && b != null && c > b) {
      c = b;
    }
    return c;
  }
  var aP = a => {
    if (!Array.isArray(a)) {
      return false;
    }
    for (var b = a.length, c = {}, d = 0; d < b; d++) {
      if (c[String(a[d])]) {
        return true;
      } else {
        c[String(a[d])] = true;
      }
    }
    return false;
  };
  function aQ(a, b, c) {
    if (aK(a) && aK(b)) {
      return aF(a + c * (b - a));
    } else {
      return b;
    }
  }
  function aR(a, b, c) {
    if (a && a.length) {
      return a.find(a => a && (typeof b == "function" ? b(a) : h(a, b)) === c);
    }
  }
  var aS = a => a == null;
  var aT = a => aS(a) ? a : `${a.charAt(0).toUpperCase()}${a.slice(1)}`;
  function aU(a) {
    return a != null;
  }
  function aV() {}
  function aW(a, b, c) {
    if (Array.isArray(a) && a && b + c !== 0) {
      return a.slice(b, c + 1);
    } else {
      return a;
    }
  }
  function aX(a) {
    return Number.isFinite(a);
  }
  function aY(a) {
    return typeof a == "number" && a > 0 && Number.isFinite(a);
  }
  function aZ(a) {
    if (a) {
      return {
        x: a.x,
        y: a.y,
        upperWidth: "upperWidth" in a ? a.upperWidth : a.width,
        lowerWidth: "lowerWidth" in a ? a.lowerWidth : a.width,
        width: a.width,
        height: a.height
      };
    }
  }
  function a$(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function a_(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        a$(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        a$(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  a.s(["findEntryInArray", 0, aR, "getPercentValue", 0, aO, "hasDuplicate", 0, aP, "interpolate", 0, aQ, "isNan", 0, aI, "isNotNil", 0, aU, "isNullish", 0, aS, "isNumOrStr", 0, aL, "isNumber", 0, aK, "isPercent", 0, aJ, "mathSign", 0, aH, "noop", 0, aV, "uniqueId", 0, aN, "upperFirst", 0, aT], 47525);
  a.s(["isPositiveNumber", 0, aY, "isWellBehavedNumber", 0, aX], 67187);
  var a0 = a => {
    var b = a.viewBox;
    var c = a.position;
    var d = a.offset;
    var e = d === undefined ? 0 : d;
    var f = a.parentViewBox;
    var g = a.clamp;
    var h = aZ(b);
    var i = h.x;
    var j = h.y;
    var k = h.height;
    var l = h.upperWidth;
    var m = h.lowerWidth;
    var n = i + (l - m) / 2;
    var o = (i + n) / 2;
    var p = (l + m) / 2;
    var q = k >= 0 ? 1 : -1;
    var r = q * e;
    var s = q > 0 ? "end" : "start";
    var t = q > 0 ? "start" : "end";
    var u = l >= 0 ? 1 : -1;
    var v = u * e;
    var w = u > 0 ? "end" : "start";
    var x = u > 0 ? "start" : "end";
    if (c === "top") {
      var y = {
        x: i + l / 2,
        y: j - r,
        horizontalAnchor: "middle",
        verticalAnchor: s
      };
      if (g && f) {
        y.height = Math.max(j - f.y, 0);
        y.width = l;
      }
      return y;
    }
    if (c === "bottom") {
      var z = {
        x: n + m / 2,
        y: j + k + r,
        horizontalAnchor: "middle",
        verticalAnchor: t
      };
      if (g && f) {
        z.height = Math.max(f.y + f.height - (j + k), 0);
        z.width = m;
      }
      return z;
    }
    if (c === "left") {
      var A = {
        x: o - v,
        y: j + k / 2,
        horizontalAnchor: w,
        verticalAnchor: "middle"
      };
      if (g && f) {
        A.width = Math.max(A.x - f.x, 0);
        A.height = k;
      }
      return A;
    }
    if (c === "right") {
      var B = {
        x: o + p + v,
        y: j + k / 2,
        horizontalAnchor: x,
        verticalAnchor: "middle"
      };
      if (g && f) {
        B.width = Math.max(f.x + f.width - B.x, 0);
        B.height = k;
      }
      return B;
    }
    var C = g && f ? {
      width: p,
      height: k
    } : {};
    if (c === "insideLeft") {
      return a_({
        x: o + v,
        y: j + k / 2,
        horizontalAnchor: x,
        verticalAnchor: "middle"
      }, C);
    } else if (c === "insideRight") {
      return a_({
        x: o + p - v,
        y: j + k / 2,
        horizontalAnchor: w,
        verticalAnchor: "middle"
      }, C);
    } else if (c === "insideTop") {
      return a_({
        x: i + l / 2,
        y: j + r,
        horizontalAnchor: "middle",
        verticalAnchor: t
      }, C);
    } else if (c === "insideBottom") {
      return a_({
        x: n + m / 2,
        y: j + k - r,
        horizontalAnchor: "middle",
        verticalAnchor: s
      }, C);
    } else if (c === "insideTopLeft") {
      return a_({
        x: i + v,
        y: j + r,
        horizontalAnchor: x,
        verticalAnchor: t
      }, C);
    } else if (c === "insideTopRight") {
      return a_({
        x: i + l - v,
        y: j + r,
        horizontalAnchor: w,
        verticalAnchor: t
      }, C);
    } else if (c === "insideBottomLeft") {
      return a_({
        x: n + v,
        y: j + k - r,
        horizontalAnchor: x,
        verticalAnchor: s
      }, C);
    } else if (c === "insideBottomRight") {
      return a_({
        x: n + m - v,
        y: j + k - r,
        horizontalAnchor: w,
        verticalAnchor: s
      }, C);
    } else if (c && typeof c == "object" && (aK(c.x) || aJ(c.x)) && (aK(c.y) || aJ(c.y))) {
      return a_({
        x: i + aO(c.x, p),
        y: j + aO(c.y, k),
        horizontalAnchor: "end",
        verticalAnchor: "end"
      }, C);
    } else {
      return a_({
        x: i + l / 2,
        y: j + k / 2,
        horizontalAnchor: "middle",
        verticalAnchor: "middle"
      }, C);
    }
  };
  var a1 = ["top", "left", "right", "bottom"];
  function a2(a) {
    return a != null && (typeof a == "object" || a1.includes(a));
  }
  function a3(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function a4(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        a3(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        a3(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  function a5(a, b, c) {
    if (aS(a) || aS(b)) {
      return c;
    } else if (aL(b)) {
      return h(a, b, c);
    } else if (typeof b == "function") {
      return b(a);
    } else {
      return c;
    }
  }
  a.s(["getCartesianPosition", 0, a0, "isOutsidePosition", 0, a2], 13655);
  var a6 = (a, b, c) => {
    if (b && c) {
      var d = c.width;
      var e = c.height;
      var f = b.align;
      var g = b.verticalAlign;
      var h = b.layout;
      var i = b.position;
      var j = b.offset;
      var k = j === undefined ? 0 : j;
      if (i != null) {
        if (a2(i)) {
          if (i === "top" && aK(a.top)) {
            return a4(a4({}, a), {}, {
              top: a.top + (e || 0) + k
            });
          }
          if (i === "bottom" && aK(a.bottom)) {
            return a4(a4({}, a), {}, {
              bottom: a.bottom + (e || 0) + k
            });
          }
          if (i === "left" && aK(a.left)) {
            return a4(a4({}, a), {}, {
              left: a.left + (d || 0) + k
            });
          }
          if (i === "right" && aK(a.right)) {
            return a4(a4({}, a), {}, {
              right: a.right + (d || 0) + k
            });
          }
        }
        return a;
      }
      if ((h === "vertical" || h === "horizontal" && g === "middle") && f !== "center" && aK(a[f])) {
        return a4(a4({}, a), {}, {
          [f]: a[f] + (d || 0)
        });
      }
      if ((h === "horizontal" || h === "vertical" && f === "center") && g !== "middle" && aK(a[g])) {
        return a4(a4({}, a), {}, {
          [g]: a[g] + (e || 0)
        });
      }
    }
    return a;
  };
  var a7 = (a, b) => a === "horizontal" && b === "xAxis" || a === "vertical" && b === "yAxis" || a === "centric" && b === "angleAxis" || a === "radial" && b === "radiusAxis";
  var a8 = {
    sign: a => {
      var b;
      var c = a.length;
      if (!(c <= 0)) {
        var d = (b = a[0]) == null ? undefined : b.length;
        if (d != null && !(d <= 0)) {
          for (var e = 0; e < d; ++e) {
            var f = 0;
            var g = 0;
            for (var h = 0; h < c; ++h) {
              var i = a[h];
              var j = i == null ? undefined : i[e];
              if (j != null) {
                var k = j[1];
                var l = j[0];
                var m = aI(k) ? l : k;
                if (m >= 0) {
                  j[0] = f;
                  f += m;
                  j[1] = f;
                } else {
                  j[0] = g;
                  g += m;
                  j[1] = g;
                }
              }
            }
          }
        }
      }
    },
    expand: function (a, b) {
      if ((d = a.length) > 0) {
        var c;
        var d;
        var e;
        for (var f = 0, g = a[0].length; f < g; ++f) {
          for (e = c = 0; c < d; ++c) {
            e += a[c][f][1] || 0;
          }
          if (e) {
            for (c = 0; c < d; ++c) {
              a[c][f][1] /= e;
            }
          }
        }
        aB(a, b);
      }
    },
    none: aB,
    silhouette: function (a, b) {
      if ((c = a.length) > 0) {
        var c;
        for (var d = 0, e = a[b[0]], f = e.length; d < f; ++d) {
          for (var g = 0, h = 0; g < c; ++g) {
            h += a[g][d][1] || 0;
          }
          e[d][1] += e[d][0] = -h / 2;
        }
        aB(a, b);
      }
    },
    wiggle: function (a, b) {
      if ((e = a.length) > 0 && (d = (c = a[b[0]]).length) > 0) {
        var c;
        for (var d, e, f = 0, g = 1; g < d; ++g) {
          for (var h = 0, i = 0, j = 0; h < e; ++h) {
            var k = a[b[h]];
            var l = k[g][1] || 0;
            var m = (l - (k[g - 1][1] || 0)) / 2;
            for (var n = 0; n < h; ++n) {
              var o = a[b[n]];
              m += (o[g][1] || 0) - (o[g - 1][1] || 0);
            }
            i += l;
            j += m * l;
          }
          c[g - 1][1] += c[g - 1][0] = f;
          if (i) {
            f -= j / i;
          }
        }
        c[g - 1][1] += c[g - 1][0] = f;
        aB(a, b);
      }
    },
    positive: a => {
      var b;
      var c = a.length;
      if (!(c <= 0)) {
        var d = (b = a[0]) == null ? undefined : b.length;
        if (d != null && !(d <= 0)) {
          for (var e = 0; e < d; ++e) {
            var f = 0;
            for (var g = 0; g < c; ++g) {
              var h = a[g];
              var i = h == null ? undefined : h[e];
              if (i != null) {
                var j = aI(i[1]) ? i[0] : i[1];
                if (j >= 0) {
                  i[0] = f;
                  f += j;
                  i[1] = f;
                } else {
                  i[0] = 0;
                  i[1] = 0;
                }
              }
            }
          }
        }
      }
    }
  };
  var a9 = (a, b, c) => {
    var e = a8[c] ?? aB;
    var f = function () {
      var a = aA([]);
      var b = aC;
      var c = aB;
      var d = aD;
      function e(e) {
        var f;
        var g;
        var h = Array.from(a.apply(this, arguments), aE);
        var i = h.length;
        var j = -1;
        for (let a of e) {
          f = 0;
          ++j;
          for (; f < i; ++f) {
            (h[f][j] = [0, +d(a, h[f].key, j, e)]).data = a;
          }
        }
        f = 0;
        g = az(b(h));
        for (; f < i; ++f) {
          h[g[f]].index = f;
        }
        c(h, g);
        return h;
      }
      e.keys = function (b) {
        if (arguments.length) {
          a = typeof b == "function" ? b : aA(Array.from(b));
          return e;
        } else {
          return a;
        }
      };
      e.value = function (a) {
        if (arguments.length) {
          d = typeof a == "function" ? a : aA(+a);
          return e;
        } else {
          return d;
        }
      };
      e.order = function (a) {
        if (arguments.length) {
          b = a == null ? aC : typeof a == "function" ? a : aA(Array.from(a));
          return e;
        } else {
          return b;
        }
      };
      e.offset = function (a) {
        if (arguments.length) {
          c = a == null ? aB : a;
          return e;
        } else {
          return c;
        }
      };
      return e;
    }().keys(b).value((a, b) => Number(a5(a, b, 0))).order(aC).offset(e)(a);
    f.forEach((c, d) => {
      c.forEach((c, e) => {
        var f = a5(a[e], b[d], 0);
        if (Array.isArray(f) && f.length === 2 && aK(f[0]) && aK(f[1])) {
          c[0] = f[0];
          c[1] = f[1];
        }
      });
    });
    return f;
  };
  var ba = (a, b, c) => {
    if (a != null && Object.keys(a).length !== 0) {
      let d;
      return [(d = Object.keys(a).reduce((d, e) => {
        var f = a[e];
        if (!f) {
          return d;
        }
        var g = f.stackedData.reduce((a, d) => {
          var e;
          var f = [Math.min(...(e = aW(d, b, c).flat(2).filter(aK))), Math.max(...e)];
          if (aX(f[0]) && aX(f[1])) {
            return [Math.min(a[0], f[0]), Math.max(a[1], f[1])];
          } else {
            return a;
          }
        }, [Infinity, -Infinity]);
        return [Math.min(g[0], d[0]), Math.max(g[1], d[1])];
      }, [Infinity, -Infinity]))[0] === Infinity ? 0 : d[0], d[1] === -Infinity ? 0 : d[1]];
    }
  };
  var bb = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
  var bc = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
  var bd = (a, b, c) => {
    if (a && a.scale && a.scale.bandwidth) {
      var d = a.scale.bandwidth();
      if (!c || d > 0) {
        return d;
      }
    }
    if (a && b && b.length >= 2) {
      var e = av(b, a => a.coordinate);
      var f = [];
      var g = 0;
      for (var h = 1, i = e.length; h < i; h++) {
        var j;
        var k;
        var l = (((j = e[h]) == null ? undefined : j.coordinate) || 0) - (((k = e[h - 1]) == null ? undefined : k.coordinate) || 0);
        f.push(l);
        g = Math.max(l, g);
      }
      var m = g * 0.0001;
      var n = Infinity;
      for (var o of f) {
        if (o > m) {
          n = Math.min(o, n);
        }
      }
      if (n === Infinity) {
        return 0;
      } else {
        return n;
      }
    }
    if (c) {
      return undefined;
    } else {
      return 0;
    }
  };
  function be(a) {
    var b = a.tooltipEntrySettings;
    var c = a.dataKey;
    var d = a.payload;
    var e = a.value;
    var f = a.name;
    return a4(a4({}, b), {}, {
      dataKey: c,
      payload: d,
      value: e,
      name: f
    });
  }
  var bf = (a, b) => b === "horizontal" ? a.relativeX : b === "vertical" ? a.relativeY : undefined;
  var bg = (a, b) => b === "centric" ? a.angle : a.radius;
  a.s(["MAX_VALUE_REG", 0, bc, "MIN_VALUE_REG", 0, bb, "appendOffsetOfLegend", 0, a6, "calculateCartesianTooltipPos", 0, bf, "calculatePolarTooltipPos", 0, bg, "getBandSizeOfAxis", 0, bd, "getCateCoordinateOfLine", 0, function (a) {
    var b = a.axis;
    var c = a.ticks;
    var d = a.bandSize;
    var e = a.entry;
    var f = a.index;
    var g = a.dataKey;
    if (b.type === "category") {
      if (!b.allowDuplicatedCategory && b.dataKey && !aS(e[b.dataKey])) {
        var h = aR(c, "value", e[b.dataKey]);
        if (h) {
          return h.coordinate + d / 2;
        }
      }
      if (c != null && c[f]) {
        return c[f].coordinate + d / 2;
      } else {
        return null;
      }
    }
    var i = a5(e, aS(g) ? b.dataKey : g);
    var j = b.scale.map(i);
    if (aK(j)) {
      return j;
    } else {
      return null;
    }
  }, "getCoordinatesOfGrid", 0, (a, b, c, d) => {
    if (d) {
      return a.map(a => a.coordinate);
    }
    var e;
    var f;
    var g = a.map(a => {
      if (a.coordinate === b) {
        e = true;
      }
      if (a.coordinate === c) {
        f = true;
      }
      return a.coordinate;
    });
    if (!e) {
      g.push(b);
    }
    if (!f) {
      g.push(c);
    }
    return g;
  }, "getDomainOfStackGroups", 0, ba, "getNormalizedStackId", 0, function (a) {
    if (a == null) {
      return undefined;
    } else {
      return String(a);
    }
  }, "getStackedData", 0, a9, "getTicksOfAxis", 0, (a, b, c) => {
    if (!a) {
      return null;
    }
    var d = a.duplicateDomain;
    var e = a.type;
    var f = a.range;
    var g = a.scale;
    var h = a.realScaleType;
    var i = a.isCategorical;
    var j = a.categoricalDomain;
    var k = a.tickCount;
    var l = a.ticks;
    var m = a.niceTicks;
    var n = a.axisType;
    if (!g) {
      return null;
    }
    var o = h === "scaleBand" && g.bandwidth ? g.bandwidth() / 2 : 2;
    var p = (b || c) && e === "category" && g.bandwidth ? g.bandwidth() / o : 0;
    p = n === "angleAxis" && f && f.length >= 2 ? aH(f[0] - f[1]) * 2 * p : p;
    if (b && (l || m)) {
      return (l || m || []).map((a, b) => {
        var c = d ? d.indexOf(a) : a;
        var e = g.map(c);
        if (aX(e)) {
          return {
            coordinate: e + p,
            value: a,
            offset: p,
            index: b
          };
        } else {
          return null;
        }
      }).filter(aU);
    } else if (i && j) {
      return j.map((a, b) => {
        var c = g.map(a);
        if (aX(c)) {
          return {
            coordinate: c + p,
            value: a,
            index: b,
            offset: p
          };
        } else {
          return null;
        }
      }).filter(aU);
    } else if (g.ticks && !c && k != null) {
      return g.ticks(k).map((a, b) => {
        var c = g.map(a);
        if (aX(c)) {
          return {
            coordinate: c + p,
            value: a,
            index: b,
            offset: p
          };
        } else {
          return null;
        }
      }).filter(aU);
    } else {
      return g.domain().map((a, b) => {
        var c = g.map(a);
        if (aX(c)) {
          return {
            coordinate: c + p,
            value: d ? d[a] : a,
            index: b,
            offset: p
          };
        } else {
          return null;
        }
      }).filter(aU);
    }
  }, "getTooltipEntry", 0, be, "getTooltipNameProp", 0, function (a, b) {
    if (a != null) {
      return String(a);
    } else if (typeof b == "string") {
      return b;
    } else {
      return undefined;
    }
  }, "getValueByDataKey", 0, a5, "isCategoricalAxis", 0, a7], 66067);
  var bh = a => a.layout.width;
  var bi = a => a.layout.height;
  var bj = a => a.layout.scale;
  var bk = a => a.layout.margin;
  a.s(["selectChartHeight", 0, bi, "selectChartWidth", 0, bh, "selectContainerScale", 0, bj, "selectMargin", 0, bk], 17602);
  var bl = ad(a => a.cartesianAxis.xAxis, a => Object.values(a));
  var bm = ad(a => a.cartesianAxis.yAxis, a => Object.values(a));
  var bn = "data-recharts-item-index";
  var bo = "data-recharts-item-id";
  function bp(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function bq(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        bp(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        bp(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  a.s(["DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME", 0, bo, "DATA_ITEM_INDEX_ATTRIBUTE_NAME", 0, bn, "DEFAULT_X_AXIS_HEIGHT", 0, 30, "DEFAULT_Y_AXIS_WIDTH", 0, 60], 54190);
  var br = ad([bh, bi, bk, a => a.brush.height, function (a) {
    return bm(a).reduce((a, b) => b.orientation !== "left" || b.mirror || b.hide ? a : a + (typeof b.width == "number" ? b.width : 60), 0);
  }, function (a) {
    return bm(a).reduce((a, b) => b.orientation !== "right" || b.mirror || b.hide ? a : a + (typeof b.width == "number" ? b.width : 60), 0);
  }, function (a) {
    return bl(a).reduce((a, b) => b.orientation !== "top" || b.mirror || b.hide ? a : a + (typeof b.height == "number" ? b.height : 30), 0);
  }, function (a) {
    return bl(a).reduce((a, b) => b.orientation !== "bottom" || b.mirror || b.hide ? a : a + (typeof b.height == "number" ? b.height : 30), 0);
  }, aw, ax], (a, b, c, d, e, f, g, h, i, j) => {
    var k = {
      left: (c.left || 0) + e,
      right: (c.right || 0) + f
    };
    var l = bq(bq({}, {
      top: (c.top || 0) + g,
      bottom: (c.bottom || 0) + h
    }), k);
    var m = l.bottom;
    l.bottom += d;
    var n = a - (l = a6(l, i, j)).left - l.right;
    var o = b - l.top - l.bottom;
    return bq(bq({
      brushBottom: m
    }, l), {}, {
      width: Math.max(n, 0),
      height: Math.max(o, 0)
    });
  });
  var bs = ad(br, a => ({
    x: a.left,
    y: a.top,
    width: a.width,
    height: a.height
  }));
  var bt = ad(bh, bi, (a, b) => ({
    x: 0,
    y: 0,
    width: a,
    height: b
  }));
  function bu(a) {
    var b;
    if (a) {
      if ((a = f(b = a) ? NaN : Number(b)) === Infinity || a === -Infinity) {
        return (a < 0 ? -1 : 1) * Number.MAX_VALUE;
      } else if (a == a) {
        return a;
      } else {
        return 0;
      }
    } else if (a === 0) {
      return a;
    } else {
      return 0;
    }
  }
  function bv(a, b, c) {
    if (c && typeof c != "number" && aq(a, b, c)) {
      b = c = undefined;
    }
    a = bu(a);
    if (b === undefined) {
      b = a;
      a = 0;
    } else {
      b = bu(b);
    }
    c = c === undefined ? a < b ? 1 : -1 : bu(c);
    let d = Math.max(Math.ceil((b - a) / (c || 1)), 0);
    let e = Array(d);
    for (let b = 0; b < d; b++) {
      e[b] = a;
      a += c;
    }
    return e;
  }
  a.s(["selectAxisViewBox", 0, bt, "selectChartOffsetInternal", 0, br, "selectChartViewBox", 0, bs], 61325);
  var bw = a.i(9651);
  var bx = a.i(22865);
  var by = (0, bw.createContext)(null);
  var bz = a => a;
  var bA = () => {
    var a = (0, bw.useContext)(by);
    if (a) {
      return a.store.dispatch;
    } else {
      return bz;
    }
  };
  var bB = () => {};
  var bC = () => bB;
  var bD = (a, b) => a === b;
  function bE(a) {
    var b = (0, bw.useContext)(by);
    var c = (0, bw.useMemo)(() => b ? b => {
      if (b != null) {
        return a(b);
      }
    } : bB, [b, a]);
    return (0, bx.useSyncExternalStoreWithSelector)(b ? b.subscription.addNestedSub : bC, b ? b.store.getState : bB, b ? b.store.getState : bB, c, bD);
  }
  a.s(["useAppDispatch", 0, bA, "useAppSelector", 0, bE], 61537);
  var bF = Symbol.for("immer-nothing");
  var bG = Symbol.for("immer-draftable");
  var bH = Symbol.for("immer-state");
  function bI(a) {
    throw Error(`[Immer] minified error nr: ${a}. Full error at: https://bit.ly/3cXEKWf`);
  }
  var bJ = Object;
  var bK = bJ.getPrototypeOf;
  var bL = "constructor";
  var bM = "prototype";
  var bN = "configurable";
  var bO = "enumerable";
  var bP = "writable";
  var bQ = "value";
  var bR = a => !!a && !!a[bH];
  function bS(a) {
    return !!a && (bV(a) || b_(a) || !!a[bG] || !!a[bL]?.[bG] || b0(a) || b1(a));
  }
  var bT = bJ[bM][bL].toString();
  var bU = new WeakMap();
  function bV(a) {
    if (!a || !b2(a)) {
      return false;
    }
    let b = bK(a);
    if (b === null || b === bJ[bM]) {
      return true;
    }
    let c = bJ.hasOwnProperty.call(b, bL) && b[bL];
    if (c === Object) {
      return true;
    }
    if (!b3(c)) {
      return false;
    }
    let d = bU.get(c);
    if (d === undefined) {
      d = Function.toString.call(c);
      bU.set(c, d);
    }
    return d === bT;
  }
  function bW(a, b, c = true) {
    if (bX(a) === 0) {
      (c ? Reflect.ownKeys(a) : bJ.keys(a)).forEach(c => {
        b(c, a[c], a);
      });
    } else {
      a.forEach((c, d) => b(d, c, a));
    }
  }
  function bX(a) {
    let b = a[bH];
    if (b) {
      return b.type_;
    } else if (b_(a)) {
      return 1;
    } else if (b0(a)) {
      return 2;
    } else {
      return !!b1(a) * 3;
    }
  }
  var bY = (a, b, c = bX(a)) => c === 2 ? a.has(b) : bJ[bM].hasOwnProperty.call(a, b);
  var bZ = (a, b, c = bX(a)) => c === 2 ? a.get(b) : a[b];
  var b$ = (a, b, c, d = bX(a)) => {
    if (d === 2) {
      a.set(b, c);
    } else if (d === 3) {
      a.add(c);
    } else {
      a[b] = c;
    }
  };
  var b_ = Array.isArray;
  var b0 = a => a instanceof Map;
  var b1 = a => a instanceof Set;
  var b2 = a => typeof a == "object";
  var b3 = a => typeof a == "function";
  var b4 = a => a.modified_ ? a.copy_ : a.base_;
  function b5(a, b) {
    if (b0(a)) {
      return new Map(a);
    }
    if (b1(a)) {
      return new Set(a);
    }
    if (b_(a)) {
      return Array[bM].slice.call(a);
    }
    let c = bV(a);
    if (b !== true && (b !== "class_only" || c)) {
      let b = bK(a);
      if (b !== null && c) {
        return {
          ...a
        };
      }
      let d = bJ.create(b);
      return bJ.assign(d, a);
    }
    {
      let b = bJ.getOwnPropertyDescriptors(a);
      delete b[bH];
      let c = Reflect.ownKeys(b);
      for (let d = 0; d < c.length; d++) {
        let e = c[d];
        let f = b[e];
        if (f[bP] === false) {
          f[bP] = true;
          f[bN] = true;
        }
        if (f.get || f.set) {
          b[e] = {
            [bN]: true,
            [bP]: true,
            [bO]: f[bO],
            [bQ]: a[e]
          };
        }
      }
      return bJ.create(bK(a), b);
    }
  }
  function b6(a, b = false) {
    if (!b8(a) && !bR(a) && !!bS(a)) {
      if (bX(a) > 1) {
        bJ.defineProperties(a, {
          set: b7,
          add: b7,
          clear: b7,
          delete: b7
        });
      }
      bJ.freeze(a);
      if (b) {
        bW(a, (a, b) => {
          b6(b, true);
        }, false);
      }
    }
    return a;
  }
  var b7 = {
    [bQ]: function () {
      bI(2);
    }
  };
  function b8(a) {
    return a === null || !b2(a) || bJ.isFrozen(a);
  }
  var b9 = "MapSet";
  var ca = "Patches";
  var cb = "ArrayMethods";
  var cc = {};
  function cd(a) {
    let b = cc[a];
    if (!b) {
      bI(0);
    }
    return b;
  }
  var ce = a => !!cc[a];
  function cf(a, b) {
    if (b) {
      a.patchPlugin_ = cd(ca);
      a.patches_ = [];
      a.inversePatches_ = [];
      a.patchListener_ = b;
    }
  }
  function cg(a) {
    ch(a);
    a.drafts_.forEach(cj);
    a.drafts_ = null;
  }
  function ch(a) {
    if (a === ed) {
      ed = a.parent_;
    }
  }
  var ci = a => ed = {
    drafts_: [],
    parent_: ed,
    immer_: a,
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0,
    handledSet_: new Set(),
    processedForPatches_: new Set(),
    mapSetPlugin_: ce(b9) ? cd(b9) : undefined,
    arrayMethodsPlugin_: ce(cb) ? cd(cb) : undefined
  };
  function cj(a) {
    let b = a[bH];
    if (b.type_ === 0 || b.type_ === 1) {
      b.revoke_();
    } else {
      b.revoked_ = true;
    }
  }
  function ck(a, b) {
    b.unfinalizedDrafts_ = b.drafts_.length;
    let c = b.drafts_[0];
    if (a !== undefined && a !== c) {
      if (c[bH].modified_) {
        cg(b);
        bI(4);
      }
      if (bS(a)) {
        a = cl(b, a);
      }
      let {
        patchPlugin_: d
      } = b;
      if (d) {
        d.generateReplacementPatches_(c[bH].base_, a, b);
      }
    } else {
      a = cl(b, c);
    }
    (function (a, b, c = false) {
      if (!a.parent_ && a.immer_.autoFreeze_ && a.canAutoFreeze_) {
        b6(b, c);
      }
    })(b, a, true);
    cg(b);
    if (b.patches_) {
      b.patchListener_(b.patches_, b.inversePatches_);
    }
    if (a !== bF) {
      return a;
    } else {
      return undefined;
    }
  }
  function cl(a, b) {
    if (b8(b)) {
      return b;
    }
    let c = b[bH];
    if (!c) {
      return cr(b, a.handledSet_, a);
    }
    if (!cn(c, a)) {
      return b;
    }
    if (!c.modified_) {
      return c.base_;
    }
    if (!c.finalized_) {
      let {
        callbacks_: b
      } = c;
      if (b) {
        while (b.length > 0) {
          b.pop()(a);
        }
      }
      cq(c, a);
    }
    return c.copy_;
  }
  function cm(a) {
    a.finalized_ = true;
    a.scope_.unfinalizedDrafts_--;
  }
  var cn = (a, b) => a.scope_ === b;
  var co = [];
  function cp(a, b, c, d) {
    let e = a.copy_ || a.base_;
    let f = a.type_;
    if (d !== undefined && bZ(e, d, f) === b) {
      b$(e, d, c, f);
      return;
    }
    if (!a.draftLocations_) {
      let b = a.draftLocations_ = new Map();
      bW(e, (a, c) => {
        if (bR(c)) {
          let d = b.get(c) || [];
          d.push(a);
          b.set(c, d);
        }
      });
    }
    for (let d of a.draftLocations_.get(b) ?? co) {
      b$(e, d, c, f);
    }
  }
  function cq(a, b) {
    if (a.modified_ && !a.finalized_ && (a.type_ === 3 || a.type_ === 1 && a.allIndicesReassigned_ || (a.assigned_?.size ?? 0) > 0)) {
      let {
        patchPlugin_: c
      } = b;
      if (c) {
        let d = c.getPath(a);
        if (d) {
          c.generatePatches_(a, d, b);
        }
      }
      cm(a);
    }
  }
  function cr(a, b, c) {
    if ((!!c.immer_.autoFreeze_ || !(c.unfinalizedDrafts_ < 1)) && !bR(a) && !b.has(a) && !!bS(a) && !b8(a)) {
      b.add(a);
      bW(a, (d, e) => {
        if (bR(e)) {
          let b = e[bH];
          if (cn(b, c)) {
            b$(a, d, b4(b), a.type_);
            cm(b);
          }
        } else if (bS(e)) {
          cr(e, b, c);
        }
      });
    }
    return a;
  }
  var cs = {
    get(a, b) {
      var c;
      var d;
      var e;
      var f;
      let g;
      if (b === bH) {
        return a;
      }
      let h = a.scope_.arrayMethodsPlugin_;
      let i = a.type_ === 1 && typeof b == "string";
      if (i && h?.isArrayOperationMethod(b)) {
        return h.createMethodInterceptor(a, b);
      }
      let j = a.copy_ || a.base_;
      if (!bY(j, b, a.type_)) {
        let d;
        c = a;
        if (d = cv(j, b)) {
          if (bQ in d) {
            return d[bQ];
          } else {
            return d.get?.call(c.draft_);
          }
        } else {
          return undefined;
        }
      }
      let k = j[b];
      if (a.finalized_ || !bS(k) || i && a.operationMethod && h?.isMutatingArrayMethod(a.operationMethod) && Number.isInteger(g = +b) && String(g) === b) {
        return k;
      }
      if (k === cu(a.base_, b) || (d = a, e = b, f = k, d.type_ === 1 && !!d.allIndicesReassigned_ && !d.assigned_?.get(e) && bS(f) && !f[bH] && d.baseRefs_.has(f))) {
        cx(a);
        let c = a.type_ === 1 ? +b : b;
        let d = cz(a.scope_, k, a, c);
        return a.copy_[c] = d;
      }
      return k;
    },
    has: (a, b) => b in (a.copy_ || a.base_),
    ownKeys: a => Reflect.ownKeys(a.copy_ || a.base_),
    set(a, b, c) {
      let d = cv(a.copy_ || a.base_, b);
      if (d?.set) {
        d.set.call(a.draft_, c);
        return true;
      }
      if (!a.modified_) {
        let d = cu(a.copy_ || a.base_, b);
        let e = d?.[bH];
        if (e && e.base_ === c) {
          a.copy_[b] = c;
          a.assigned_.set(b, false);
          return true;
        }
        if ((c === d ? c !== 0 || 1 / c == 1 / d : c != c && d != d) && (c !== undefined || bY(a.base_, b, a.type_))) {
          return true;
        }
        cx(a);
        cw(a);
      }
      return a.copy_[b] === c && (c !== undefined || !!bY(a.copy_, b, a.type_)) || !!Number.isNaN(c) && !!Number.isNaN(a.copy_[b]) || (a.copy_[b] = c, a.assigned_.set(b, true), !function (a, b, c) {
        let {
          scope_: d
        } = a;
        if (bR(c)) {
          let e = c[bH];
          if (cn(e, d)) {
            e.callbacks_.push(function () {
              cx(a);
              cp(a, c, b4(e), b);
            });
          }
        } else if (bS(c)) {
          a.callbacks_.push(function () {
            let e = a.copy_ || a.base_;
            if (a.type_ === 3) {
              if (e.has(c)) {
                cr(c, d.handledSet_, d);
              }
            } else if (bZ(e, b, a.type_) === c && d.drafts_.length > 1 && (a.assigned_.get(b) ?? false) === true && a.copy_) {
              cr(bZ(a.copy_, b, a.type_), d.handledSet_, d);
            }
          });
        }
      }(a, b, c), true);
    },
    deleteProperty: (a, b) => {
      cx(a);
      if (cu(a.base_, b) !== undefined || b in a.base_) {
        a.assigned_.set(b, false);
        cw(a);
      } else {
        a.assigned_.delete(b);
      }
      if (a.copy_) {
        delete a.copy_[b];
      }
      return true;
    },
    getOwnPropertyDescriptor(a, b) {
      let c = a.copy_ || a.base_;
      let d = Reflect.getOwnPropertyDescriptor(c, b);
      if (d) {
        return {
          [bP]: true,
          [bN]: a.type_ !== 1 || b !== "length",
          [bO]: d[bO],
          [bQ]: c[b]
        };
      } else {
        return d;
      }
    },
    defineProperty() {
      bI(11);
    },
    getPrototypeOf: a => bK(a.base_),
    setPrototypeOf() {
      bI(12);
    }
  };
  var ct = {};
  for (let a in cs) {
    let b = cs[a];
    ct[a] = function () {
      let a = arguments;
      a[0] = a[0][0];
      return b.apply(this, a);
    };
  }
  function cu(a, b) {
    let c = a[bH];
    return (c ? c.copy_ || c.base_ : a)[b];
  }
  function cv(a, b) {
    if (!(b in a)) {
      return;
    }
    let c = bK(a);
    while (c) {
      let a = Object.getOwnPropertyDescriptor(c, b);
      if (a) {
        return a;
      }
      c = bK(c);
    }
  }
  function cw(a) {
    if (!a.modified_) {
      a.modified_ = true;
      if (a.parent_) {
        cw(a.parent_);
      }
    }
  }
  function cx(a) {
    if (!a.copy_) {
      a.assigned_ = new Map();
      a.copy_ = b5(a.base_, a.scope_.immer_.useStrictShallowCopy_);
    }
  }
  ct.deleteProperty = function (a, b) {
    return ct.set.call(this, a, b, undefined);
  };
  ct.set = function (a, b, c) {
    return cs.set.call(this, a[0], b, c, a[0]);
  };
  var cy = class {
    constructor(a) {
      this.autoFreeze_ = true;
      this.useStrictShallowCopy_ = false;
      this.useStrictIteration_ = false;
      this.produce = (a, b, c) => {
        let d;
        if (b3(a) && !b3(b)) {
          let c = b;
          b = a;
          let d = this;
          return function (a = c, ...e) {
            return d.produce(a, a => b.call(this, a, ...e));
          };
        }
        if (!b3(b)) {
          bI(6);
        }
        if (c !== undefined && !b3(c)) {
          bI(7);
        }
        if (bS(a)) {
          let e = ci(this);
          let f = cz(e, a, undefined);
          let g = true;
          try {
            d = b(f);
            g = false;
          } finally {
            if (g) {
              cg(e);
            } else {
              ch(e);
            }
          }
          cf(e, c);
          return ck(d, e);
        }
        if (a && b2(a)) {
          bI(1);
        } else {
          if ((d = b(a)) === undefined) {
            d = a;
          }
          if (d === bF) {
            d = undefined;
          }
          if (this.autoFreeze_) {
            b6(d, true);
          }
          if (c) {
            let b = [];
            let e = [];
            cd(ca).generateReplacementPatches_(a, d, {
              patches_: b,
              inversePatches_: e
            });
            c(b, e);
          }
          return d;
        }
      };
      this.produceWithPatches = (a, b) => {
        let c;
        let d;
        if (b3(a)) {
          return (b, ...c) => this.produceWithPatches(b, b => a(b, ...c));
        } else {
          return [this.produce(a, b, (a, b) => {
            c = a;
            d = b;
          }), c, d];
        }
      };
      if ((a => typeof a == "boolean")(a?.autoFreeze)) {
        this.setAutoFreeze(a.autoFreeze);
      }
      if ((a => typeof a == "boolean")(a?.useStrictShallowCopy)) {
        this.setUseStrictShallowCopy(a.useStrictShallowCopy);
      }
      if ((a => typeof a == "boolean")(a?.useStrictIteration)) {
        this.setUseStrictIteration(a.useStrictIteration);
      }
    }
    createDraft(a) {
      if (!bS(a)) {
        bI(8);
      }
      if (bR(a)) {
        a = cA(a);
      }
      let b = ci(this);
      let c = cz(b, a, undefined);
      c[bH].isManual_ = true;
      ch(b);
      return c;
    }
    finishDraft(a, b) {
      let c = a && a[bH];
      if (!c || !c.isManual_) {
        bI(9);
      }
      let {
        scope_: d
      } = c;
      cf(d, b);
      return ck(undefined, d);
    }
    setAutoFreeze(a) {
      this.autoFreeze_ = a;
    }
    setUseStrictShallowCopy(a) {
      this.useStrictShallowCopy_ = a;
    }
    setUseStrictIteration(a) {
      this.useStrictIteration_ = a;
    }
    shouldUseStrictIteration() {
      return this.useStrictIteration_;
    }
    applyPatches(a, b) {
      let c;
      for (c = b.length - 1; c >= 0; c--) {
        let d = b[c];
        if (d.path.length === 0 && d.op === "replace") {
          a = d.value;
          break;
        }
      }
      if (c > -1) {
        b = b.slice(c + 1);
      }
      let d = cd(ca).applyPatches_;
      if (bR(a)) {
        return d(a, b);
      } else {
        return this.produce(a, a => d(a, b));
      }
    }
  };
  function cz(a, b, c, d) {
    let [e, f] = b0(b) ? cd(b9).proxyMap_(b, c) : b1(b) ? cd(b9).proxySet_(b, c) : function (a, b) {
      let c = b_(a);
      let d = {
        type_: +!!c,
        scope_: b ? b.scope_ : ed,
        modified_: false,
        finalized_: false,
        assigned_: undefined,
        parent_: b,
        base_: a,
        draft_: null,
        copy_: null,
        revoke_: null,
        isManual_: false,
        callbacks_: undefined
      };
      let e = d;
      let f = cs;
      if (c) {
        e = [d];
        f = ct;
      }
      let {
        revoke: g,
        proxy: h
      } = Proxy.revocable(e, f);
      d.draft_ = h;
      d.revoke_ = g;
      return [h, d];
    }(b, c);
    (c?.scope_ ?? ed).drafts_.push(e);
    f.callbacks_ = c?.callbacks_ ?? [];
    f.key_ = d;
    if (c && d !== undefined) {
      c.callbacks_.push(function (a) {
        if (!f || !cn(f, a)) {
          return;
        }
        a.mapSetPlugin_?.fixSetContents(f);
        let b = b4(f);
        cp(c, f.draft_ ?? f, b, d);
        cq(f, a);
      });
    } else {
      f.callbacks_.push(function (a) {
        a.mapSetPlugin_?.fixSetContents(f);
        let {
          patchPlugin_: b
        } = a;
        if (f.modified_ && b) {
          b.generatePatches_(f, [], a);
        }
      });
    }
    return e;
  }
  function cA(a) {
    if (!bR(a)) {
      bI(10);
    }
    return function a(b) {
      let c;
      if (!bS(b) || b8(b)) {
        return b;
      }
      let d = b[bH];
      let e = true;
      if (d) {
        if (!d.modified_) {
          return d.base_;
        }
        d.finalized_ = true;
        c = b5(b, d.scope_.immer_.useStrictShallowCopy_);
        e = d.scope_.immer_.shouldUseStrictIteration();
      } else {
        c = b5(b, true);
      }
      bW(c, (b, d) => {
        b$(c, b, a(d));
      }, e);
      if (d) {
        d.finalized_ = false;
      }
      return c;
    }(a);
  }
  var cB = globalThis.Iterator;
  cB?.from;
  var cC = new cy().produce;
  function cD(a) {
    return `Minified Redux error #${a}; visit https://redux.js.org/Errors?code=${a} for the full message or use the non-minified dev environment for full errors. `;
  }
  var cE = typeof Symbol == "function" && Symbol.observable || "@@observable";
  var cF = () => Math.random().toString(36).substring(7).split("").join(".");
  var cG = {
    INIT: `@@redux/INIT${cF()}`,
    REPLACE: `@@redux/REPLACE${cF()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${cF()}`
  };
  function cH(a) {
    if (typeof a != "object" || a === null) {
      return false;
    }
    let b = a;
    while (Object.getPrototypeOf(b) !== null) {
      b = Object.getPrototypeOf(b);
    }
    return Object.getPrototypeOf(a) === b || Object.getPrototypeOf(a) === null;
  }
  function cI(a) {
    let b;
    let c = Object.keys(a);
    let d = {};
    for (let b = 0; b < c.length; b++) {
      let e = c[b];
      if (typeof a[e] == "function") {
        d[e] = a[e];
      }
    }
    let e = Object.keys(d);
    try {
      Object.keys(d).forEach(a => {
        let b = d[a];
        if (b(undefined, {
          type: cG.INIT
        }) === undefined) {
          throw Error(cD(12));
        }
        if (b(undefined, {
          type: cG.PROBE_UNKNOWN_ACTION()
        }) === undefined) {
          throw Error(cD(13));
        }
      });
    } catch (a) {
      b = a;
    }
    return function (a = {}, c) {
      if (b) {
        throw b;
      }
      let f = false;
      let g = {};
      for (let b = 0; b < e.length; b++) {
        let h = e[b];
        let i = d[h];
        let j = a[h];
        let k = i(j, c);
        if (k === undefined) {
          if (c) {
            c.type;
          }
          throw Error(cD(14));
        }
        g[h] = k;
        f = f || k !== j;
      }
      if (f = f || e.length !== Object.keys(a).length) {
        return g;
      } else {
        return a;
      }
    };
  }
  function cJ(...a) {
    if (a.length === 0) {
      return a => a;
    } else if (a.length === 1) {
      return a[0];
    } else {
      return a.reduce((a, b) => (...c) => a(b(...c)));
    }
  }
  function cK(a) {
    return cH(a) && "type" in a && typeof a.type == "string";
  }
  function cL(a) {
    return ({
      dispatch: b,
      getState: c
    }) => d => e => typeof e == "function" ? e(b, c, a) : d(e);
  }
  var cM = cL();
  function cN() {
    if (arguments.length != 0) {
      if (typeof arguments[0] == "object") {
        return cJ;
      } else {
        return cJ.apply(null, arguments);
      }
    }
  }
  function cO(a, b) {
    function c(...d) {
      if (b) {
        let c = b(...d);
        if (!c) {
          throw Error(du(0));
        }
        return {
          type: a,
          payload: c.payload,
          ...("meta" in c && {
            meta: c.meta
          }),
          ...("error" in c && {
            error: c.error
          })
        };
      }
      return {
        type: a,
        payload: d[0]
      };
    }
    c.toString = () => `${a}`;
    c.type = a;
    c.match = b => cK(b) && b.type === a;
    return c;
  }
  var cP = class a extends Array {
    constructor(...b) {
      super(...b);
      Object.setPrototypeOf(this, a.prototype);
    }
    static get [Symbol.species]() {
      return a;
    }
    concat(...a) {
      return super.concat.apply(this, a);
    }
    prepend(...b) {
      if (b.length === 1 && Array.isArray(b[0])) {
        return new a(...b[0].concat(this));
      } else {
        return new a(...b.concat(this));
      }
    }
  };
  function cQ(a) {
    if (bS(a)) {
      return cC(a, () => {});
    } else {
      return a;
    }
  }
  function cR(a, b, c) {
    if (a.has(b)) {
      return a.get(b);
    } else {
      return a.set(b, c(b)).get(b);
    }
  }
  var cS = "RTK_autoBatch";
  var cT = () => a => ({
    payload: a,
    meta: {
      [cS]: true
    }
  });
  var cU = a => b => {
    setTimeout(b, a);
  };
  var cV = (a = {
    type: "raf"
  }) => b => (...c) => {
    let d = b(...c);
    let e = true;
    let f = false;
    let g = false;
    let h = new Set();
    let i = a.type === "tick" ? queueMicrotask : a.type === "raf" ? cU(10) : a.type === "callback" ? a.queueNotification : cU(a.timeout);
    let j = () => {
      g = false;
      if (f) {
        f = false;
        h.forEach(a => a());
      }
    };
    return Object.assign({}, d, {
      subscribe(a) {
        let b = d.subscribe(() => e && a());
        h.add(a);
        return () => {
          b();
          h.delete(a);
        };
      },
      dispatch(a) {
        try {
          if ((f = !(e = !a?.meta?.[cS])) && !g) {
            g = true;
            i(j);
          }
          return d.dispatch(a);
        } finally {
          e = true;
        }
      }
    });
  };
  function cW(a) {
    let b;
    let c = {};
    let d = [];
    let e = {
      addCase(a, b) {
        let d = typeof a == "string" ? a : a.type;
        if (!d) {
          throw Error(du(28));
        }
        if (d in c) {
          throw Error(du(29));
        }
        c[d] = b;
        return e;
      },
      addAsyncThunk: (a, b) => {
        if (b.pending) {
          c[a.pending.type] = b.pending;
        }
        if (b.rejected) {
          c[a.rejected.type] = b.rejected;
        }
        if (b.fulfilled) {
          c[a.fulfilled.type] = b.fulfilled;
        }
        if (b.settled) {
          d.push({
            matcher: a.settled,
            reducer: b.settled
          });
        }
        return e;
      },
      addMatcher: (a, b) => {
        d.push({
          matcher: a,
          reducer: b
        });
        return e;
      },
      addDefaultCase: a => {
        b = a;
        return e;
      }
    };
    a(e);
    return [c, d, b];
  }
  var cX = Symbol.for("rtk-slice-createasyncthunk");
  (ec = cY || {}).reducer = "reducer";
  ec.reducerWithPrepare = "reducerWithPrepare";
  ec.asyncThunk = "asyncThunk";
  var cY = ec;
  var cZ = function ({
    creators: a
  } = {}) {
    let b = a?.asyncThunk?.[cX];
    return function (a) {
      let c;
      let {
        name: d,
        reducerPath: e = d
      } = a;
      if (!d) {
        throw Error(du(11));
      }
      let f = (typeof a.reducers == "function" ? a.reducers(function () {
        function a(a, b) {
          return {
            _reducerDefinitionType: "asyncThunk",
            payloadCreator: a,
            ...b
          };
        }
        a.withTypes = () => a;
        return {
          reducer: a => Object.assign({
            [a.name]: (...b) => a(...b)
          }[a.name], {
            _reducerDefinitionType: "reducer"
          }),
          preparedReducer: (a, b) => ({
            _reducerDefinitionType: "reducerWithPrepare",
            prepare: a,
            reducer: b
          }),
          asyncThunk: a
        };
      }()) : a.reducers) || {};
      let g = Object.keys(f);
      let h = {};
      let i = {};
      let j = {};
      let k = [];
      let l = {
        addCase(a, b) {
          let c = typeof a == "string" ? a : a.type;
          if (!c) {
            throw Error(du(12));
          }
          if (c in i) {
            throw Error(du(13));
          }
          i[c] = b;
          return l;
        },
        addMatcher: (a, b) => {
          k.push({
            matcher: a,
            reducer: b
          });
          return l;
        },
        exposeAction: (a, b) => {
          j[a] = b;
          return l;
        },
        exposeCaseReducer: (a, b) => {
          h[a] = b;
          return l;
        }
      };
      function m() {
        let [b = {}, c = [], d] = typeof a.extraReducers == "function" ? cW(a.extraReducers) : [a.extraReducers];
        let e = {
          ...b,
          ...i
        };
        return function (a, b) {
          let c;
          let [d, e, f] = cW(b);
          if (typeof a == "function") {
            c = () => cQ(a());
          } else {
            let b = cQ(a);
            c = () => b;
          }
          function g(a = c(), b) {
            let h = [d[b.type], ...e.filter(({
              matcher: a
            }) => a(b)).map(({
              reducer: a
            }) => a)];
            if (h.filter(a => !!a).length === 0) {
              h = [f];
            }
            return h.reduce((a, c) => {
              if (c) {
                if (bR(a)) {
                  let d = c(a, b);
                  if (d === undefined) {
                    return a;
                  } else {
                    return d;
                  }
                } else {
                  if (bS(a)) {
                    return cC(a, a => c(a, b));
                  }
                  let d = c(a, b);
                  if (d === undefined) {
                    if (a === null) {
                      return a;
                    }
                    throw Error("A case reducer on a non-draftable value must not return undefined");
                  }
                  return d;
                }
              }
              return a;
            }, a);
          }
          g.getInitialState = c;
          return g;
        }(a.initialState, a => {
          for (let b in e) {
            a.addCase(b, e[b]);
          }
          for (let b of k) {
            a.addMatcher(b.matcher, b.reducer);
          }
          for (let b of c) {
            a.addMatcher(b.matcher, b.reducer);
          }
          if (d) {
            a.addDefaultCase(d);
          }
        });
      }
      g.forEach(c => {
        let e = f[c];
        let g = {
          reducerName: c,
          type: `${d}/${c}`,
          createNotation: typeof a.reducers == "function"
        };
        if (e._reducerDefinitionType === "asyncThunk") {
          (function ({
            type: a,
            reducerName: b
          }, c, d, e) {
            if (!e) {
              throw Error(du(18));
            }
            let {
              payloadCreator: f,
              fulfilled: g,
              pending: h,
              rejected: i,
              settled: j,
              options: k
            } = c;
            let l = e(a, f, k);
            d.exposeAction(b, l);
            if (g) {
              d.addCase(l.fulfilled, g);
            }
            if (h) {
              d.addCase(l.pending, h);
            }
            if (i) {
              d.addCase(l.rejected, i);
            }
            if (j) {
              d.addMatcher(l.settled, j);
            }
            d.exposeCaseReducer(b, {
              fulfilled: g || c$,
              pending: h || c$,
              rejected: i || c$,
              settled: j || c$
            });
          })(g, e, l, b);
        } else {
          (function ({
            type: a,
            reducerName: b,
            createNotation: c
          }, d, e) {
            let f;
            let g;
            if ("reducer" in d) {
              if (c && d._reducerDefinitionType !== "reducerWithPrepare") {
                throw Error(du(17));
              }
              f = d.reducer;
              g = d.prepare;
            } else {
              f = d;
            }
            e.addCase(a, f).exposeCaseReducer(b, f).exposeAction(b, g ? cO(a, g) : cO(a));
          })(g, e, l);
        }
      });
      let n = a => a;
      let o = new Map();
      let p = new WeakMap();
      function q(a, b) {
        c ||= m();
        return c(a, b);
      }
      function r() {
        c ||= m();
        return c.getInitialState();
      }
      function s(b, c = false) {
        function d(a) {
          let e = a[b];
          if (e === undefined && c) {
            e = cR(p, d, r);
          }
          return e;
        }
        function e(b = n) {
          let d = cR(o, c, () => new WeakMap());
          return cR(d, b, () => {
            let d = {};
            for (let [e, f] of Object.entries(a.selectors ?? {})) {
              d[e] = function (a, b, c, d) {
                function e(f, ...g) {
                  let h = b(f);
                  if (h === undefined && d) {
                    h = c();
                  }
                  return a(h, ...g);
                }
                e.unwrapped = a;
                return e;
              }(f, b, () => cR(p, b, r), c);
            }
            return d;
          });
        }
        return {
          reducerPath: b,
          getSelectors: e,
          get selectors() {
            return e(d);
          },
          selectSlice: d
        };
      }
      let t = {
        name: d,
        reducer: q,
        actions: j,
        caseReducers: h,
        getInitialState: r,
        ...s(e),
        injectInto(a, {
          reducerPath: b,
          ...c
        } = {}) {
          let d = b ?? e;
          a.inject({
            reducerPath: d,
            reducer: q
          }, c);
          return {
            ...t,
            ...s(d, true)
          };
        }
      };
      return t;
    };
  }();
  function c$() {}
  var c_ = "listener";
  var c0 = "completed";
  var c1 = "cancelled";
  var c2 = `task-${c1}`;
  var c3 = `task-${c0}`;
  var c4 = `${c_}-${c1}`;
  var c5 = `${c_}-${c0}`;
  var c6 = class {
    constructor(a) {
      this.code = a;
      this.message = `task ${c1} (reason: ${a})`;
    }
    code;
    name = "TaskAbortError";
    message;
  };
  var c7 = (a, b) => {
    if (typeof a != "function") {
      throw TypeError(du(32));
    }
  };
  var c8 = () => {};
  var c9 = (a, b = c8) => {
    a.catch(b);
    return a;
  };
  var da = (a, b) => {
    a.addEventListener("abort", b, {
      once: true
    });
    return () => a.removeEventListener("abort", b);
  };
  var db = a => {
    if (a.aborted) {
      throw new c6(a.reason);
    }
  };
  function dc(a, b) {
    let c = c8;
    return new Promise((d, e) => {
      let f = () => e(new c6(a.reason));
      if (a.aborted) {
        f();
      } else {
        c = da(a, f);
        b.finally(() => c()).then(d, e);
      }
    }).finally(() => {
      c = c8;
    });
  }
  var dd = async (a, b) => {
    try {
      await Promise.resolve();
      let b = await a();
      return {
        status: "ok",
        value: b
      };
    } catch (a) {
      return {
        status: a instanceof c6 ? "cancelled" : "rejected",
        error: a
      };
    } finally {
      b?.();
    }
  };
  var de = a => b => c9(dc(a, b).then(b => {
    db(a);
    return b;
  }));
  var df = a => {
    let b = de(a);
    return a => b(new Promise(b => setTimeout(b, a)));
  };
  var {
    assign: dg
  } = Object;
  var dh = {};
  var di = "listenerMiddleware";
  var dj = a => {
    let {
      type: b,
      actionCreator: c,
      matcher: d,
      predicate: e,
      effect: f
    } = a;
    if (b) {
      e = cO(b).match;
    } else if (c) {
      b = c.type;
      e = c.match;
    } else if (d) {
      e = d;
    } else if (e) ;else {
      throw Error(du(21));
    }
    c7(f, "options.listener");
    return {
      predicate: e,
      type: b,
      effect: f
    };
  };
  var dk = dg(a => {
    let {
      type: b,
      predicate: c,
      effect: d
    } = dj(a);
    return {
      id: ((a = 21) => {
        let b = "";
        let c = a;
        while (c--) {
          b += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[Math.random() * 64 | 0];
        }
        return b;
      })(),
      effect: d,
      type: b,
      predicate: c,
      pending: new Set(),
      unsubscribe: () => {
        throw Error(du(22));
      }
    };
  }, {
    withTypes: () => dk
  });
  var dl = (a, b) => {
    let {
      type: c,
      effect: d,
      predicate: e
    } = dj(b);
    return Array.from(a.values()).find(a => (typeof c == "string" ? a.type === c : a.predicate === e) && a.effect === d);
  };
  var dm = a => {
    a.pending.forEach(a => {
      a.abort(c4);
    });
  };
  var dn = (a, b, c) => {
    try {
      a(b, c);
    } catch (a) {
      setTimeout(() => {
        throw a;
      }, 0);
    }
  };
  var dp = dg(cO(`${di}/add`), {
    withTypes: () => dp
  });
  var dq = cO(`${di}/removeAll`);
  var dr = dg(cO(`${di}/remove`), {
    withTypes: () => dr
  });
  var ds = (...a) => {
    console.error(`${di}/error`, ...a);
  };
  var dt = (a = {}) => {
    let b = new Map();
    let c = new Map();
    let {
      extra: d,
      onError: e = ds
    } = a;
    c7(e, "onError");
    let f = a => {
      var c;
      (c = dl(b, a) ?? dk(a)).unsubscribe = () => b.delete(c.id);
      b.set(c.id, c);
      return a => {
        c.unsubscribe();
        if (a?.cancelActive) {
          dm(c);
        }
      };
    };
    dg(f, {
      withTypes: () => f
    });
    let g = a => {
      let c = dl(b, a);
      if (c) {
        c.unsubscribe();
        if (a.cancelActive) {
          dm(c);
        }
      }
      return !!c;
    };
    dg(g, {
      withTypes: () => g
    });
    let h = async (a, g, h, i) => {
      var j;
      var k;
      let l;
      let m = new AbortController();
      j = m.signal;
      l = async (a, b) => {
        db(j);
        let c = () => {};
        let d = [new Promise((b, d) => {
          let e = f({
            predicate: a,
            effect: (a, c) => {
              c.unsubscribe();
              b([a, c.getState(), c.getOriginalState()]);
            }
          });
          c = () => {
            e();
            d();
          };
        })];
        if (b != null) {
          d.push(new Promise(a => setTimeout(a, b, null)));
        }
        try {
          let a = await dc(j, Promise.race(d));
          db(j);
          return a;
        } finally {
          c();
        }
      };
      let n = (a, b) => c9(l(a, b));
      let o = [];
      try {
        let e;
        a.pending.add(m);
        e = c.get(a) ?? 0;
        c.set(a, e + 1);
        await Promise.resolve(a.effect(g, dg({}, h, {
          getOriginalState: i,
          condition: (a, b) => n(a, b).then(Boolean),
          take: n,
          delay: df(m.signal),
          pause: de(m.signal),
          extra: d,
          signal: m.signal,
          fork: (k = m.signal, (a, b) => {
            c7(a, "taskExecutor");
            let c = new AbortController();
            da(k, () => c.abort(k.reason));
            let d = dd(async () => {
              db(k);
              db(c.signal);
              let b = await a({
                pause: de(c.signal),
                delay: df(c.signal),
                signal: c.signal
              });
              db(c.signal);
              return b;
            }, () => c.abort(c3));
            if (b?.autoJoin) {
              o.push(d.catch(c8));
            }
            return {
              result: de(k)(d),
              cancel() {
                c.abort(c2);
              }
            };
          }),
          unsubscribe: a.unsubscribe,
          subscribe: () => {
            b.set(a.id, a);
          },
          cancelActiveListeners: () => {
            a.pending.forEach((a, b, c) => {
              if (a !== m) {
                a.abort(c4);
                c.delete(a);
              }
            });
          },
          cancel: () => {
            m.abort(c4);
            a.pending.delete(m);
          },
          throwIfCancelled: () => {
            db(m.signal);
          }
        })));
      } catch (a) {
        if (!(a instanceof c6)) {
          dn(e, a, {
            raisedBy: "effect"
          });
        }
      } finally {
        let b;
        await Promise.all(o);
        m.abort(c5);
        if ((b = c.get(a) ?? 1) === 1) {
          c.delete(a);
        } else {
          c.set(a, b - 1);
        }
        a.pending.delete(m);
      }
    };
    let i = () => {
      for (let a of c.keys()) {
        dm(a);
      }
      b.clear();
    };
    return {
      middleware: a => c => d => {
        let j;
        if (!cK(d)) {
          return c(d);
        }
        if (dp.match(d)) {
          return f(d.payload);
        }
        if (dq.match(d)) {
          i();
          return;
        }
        if (dr.match(d)) {
          return g(d.payload);
        }
        let k = a.getState();
        let l = () => {
          if (k === dh) {
            throw Error(du(23));
          }
          return k;
        };
        try {
          j = c(d);
          if (b.size > 0) {
            let c = a.getState();
            for (let f of Array.from(b.values())) {
              let b = false;
              try {
                b = f.predicate(d, c, k);
              } catch (a) {
                b = false;
                dn(e, a, {
                  raisedBy: "predicate"
                });
              }
              if (b) {
                h(f, d, a, l);
              }
            }
          }
        } finally {
          k = dh;
        }
        return j;
      },
      startListening: f,
      stopListening: g,
      clearListeners: i
    };
  };
  function du(a) {
    return `Minified Redux Toolkit error #${a}; visit https://redux-toolkit.js.org/Errors?code=${a} for the full message or use the non-minified dev environment for full errors. `;
  }
  var dv = cZ({
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
      setLayout(a, b) {
        a.layoutType = b.payload;
      },
      setChartSize(a, b) {
        a.width = b.payload.width;
        a.height = b.payload.height;
      },
      setMargin(a, b) {
        a.margin.top = b.payload.top ?? 0;
        a.margin.right = b.payload.right ?? 0;
        a.margin.bottom = b.payload.bottom ?? 0;
        a.margin.left = b.payload.left ?? 0;
      },
      setScale(a, b) {
        a.scale = b.payload;
      }
    }
  });
  var dw = dv.actions;
  var dx = dw.setMargin;
  var dy = dw.setLayout;
  var dz = dw.setChartSize;
  var dA = dw.setScale;
  var dB = dv.reducer;
  var dC = (0, bw.createContext)(null);
  var dD = () => (0, bw.useContext)(dC) != null;
  a.s(["useIsPanorama", 0, dD], 90013);
  var dE = a => a.brush;
  var dF = ad([dE, br, bk], (a, b, c) => ({
    height: a.height,
    x: aK(a.x) ? a.x : b.left,
    y: aK(a.y) ? a.y : b.top + b.height + b.brushBottom - ((c == null ? undefined : c.bottom) || 0),
    width: aK(a.width) ? a.width : b.width
  }));
  function dG(a, b) {
    for (var c = arguments.length, d = Array(c > 2 ? c - 2 : 0), e = 2; e < c; e++) {
      d[e - 2] = arguments[e];
    }
    if (typeof console !== "undefined" && console.warn && (b === undefined && console.warn("LogUtils requires an error message argument"), !a)) {
      if (b === undefined) {
        console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      } else {
        var f = 0;
        console.warn(b.replace(/%s/g, () => d[f++]));
      }
    }
  }
  a.s(["warn", 0, dG], 8492);
  var dH = "100%";
  var dI = "100%";
  var dJ = {
    width: -1,
    height: -1
  };
  var dK = (a, b, c) => {
    var d = c.width;
    var e = d === undefined ? dH : d;
    var f = c.height;
    var g = f === undefined ? dI : f;
    var h = c.aspect;
    var i = c.maxHeight;
    var j = aJ(e) ? a : Number(e);
    var k = aJ(g) ? b : Number(g);
    if (h && h > 0) {
      if (j) {
        k = j / h;
      } else if (k) {
        j = k * h;
      }
      if (i && k != null && k > i) {
        k = i;
      }
    }
    return {
      calculatedWidth: j,
      calculatedHeight: k
    };
  };
  var dL = {
    width: 0,
    height: 0,
    overflow: "visible"
  };
  var dM = {
    width: 0,
    overflowX: "visible"
  };
  var dN = {
    height: 0,
    overflowY: "visible"
  };
  var dO = {};
  var dP = ["aspect", "initialDimension", "width", "height", "minWidth", "minHeight", "maxHeight", "children", "debounce", "id", "className", "onResize", "style"];
  function dQ() {
    return (dQ = Object.assign.bind()).apply(null, arguments);
  }
  function dR(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function dS(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        dR(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        dR(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  function dT(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  var dU = (0, bw.createContext)(dJ);
  function dV(a) {
    var b = a.children;
    var c = a.width;
    var d = a.height;
    var e = (0, bw.useMemo)(() => ({
      width: c,
      height: d
    }), [c, d]);
    if (aY(e.width) && aY(e.height)) {
      return bw.createElement(dU.Provider, {
        value: e
      }, b);
    } else {
      return null;
    }
  }
  var dW = () => (0, bw.useContext)(dU);
  var dX = (0, bw.forwardRef)((a, b) => {
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var j = a.aspect;
    var k = a.initialDimension;
    var l = k === undefined ? dJ : k;
    var m = a.width;
    var n = a.height;
    var o = a.minWidth;
    var p = o === undefined ? 0 : o;
    var q = a.minHeight;
    var r = a.maxHeight;
    var s = a.children;
    var t = a.debounce;
    var u = t === undefined ? 0 : t;
    var v = a.id;
    var w = a.className;
    var x = a.onResize;
    var y = a.style;
    var z = function (a, b) {
      if (a == null) {
        return {};
      }
      var c;
      var d;
      var e = function (a, b) {
        if (a == null) {
          return {};
        }
        var c = {};
        for (var d in a) {
          if ({}.hasOwnProperty.call(a, d)) {
            if (b.indexOf(d) !== -1) {
              continue;
            }
            c[d] = a[d];
          }
        }
        return c;
      }(a, b);
      if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(a);
        for (d = 0; d < f.length; d++) {
          c = f[d];
          if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
            e[c] = a[c];
          }
        }
      }
      return e;
    }(a, dP);
    var A = (0, bw.useRef)(null);
    var B = (0, bw.useRef)();
    B.current = x;
    (0, bw.useImperativeHandle)(b, () => A.current);
    var C = function (a) {
      if (Array.isArray(a)) {
        return a;
      }
    }(c = (0, bw.useState)({
      containerWidth: l.width,
      containerHeight: l.height
    })) || function (a) {
      var b = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (b != null) {
        var c;
        var d;
        var e;
        var f;
        var g = [];
        var h = true;
        var i = false;
        try {
          e = (b = b.call(a)).next;
          false;
          for (; !(h = (c = e.call(b)).done) && (g.push(c.value), g.length !== 2); h = true);
        } catch (a) {
          i = true;
          d = a;
        } finally {
          try {
            if (!h && b.return != null && (f = b.return(), Object(f) !== f)) {
              return;
            }
          } finally {
            if (i) {
              throw d;
            }
          }
        }
        return g;
      }
    }(c) || function (a) {
      if (a) {
        if (typeof a == "string") {
          return dT(a, 2);
        }
        var b = {}.toString.call(a).slice(8, -1);
        if (b === "Object" && a.constructor) {
          b = a.constructor.name;
        }
        if (b === "Map" || b === "Set") {
          return Array.from(a);
        } else if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) {
          return dT(a, 2);
        } else {
          return undefined;
        }
      }
    }(c) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
    var D = C[0];
    var E = C[1];
    var F = (0, bw.useCallback)((a, b) => {
      E(c => {
        var d = Math.round(a);
        var e = Math.round(b);
        if (c.containerWidth === d && c.containerHeight === e) {
          return c;
        } else {
          return {
            containerWidth: d,
            containerHeight: e
          };
        }
      });
    }, []);
    (0, bw.useEffect)(() => {
      if (A.current == null || typeof ResizeObserver === "undefined") {
        return aV;
      }
      var a = a => {
        var b;
        var c = a[0];
        if (c != null) {
          var d = c.contentRect;
          var e = d.width;
          var f = d.height;
          F(e, f);
          if ((b = B.current) != null) {
            b.call(B, e, f);
          }
        }
      };
      if (u > 0) {
        a = function (a, b = 0, c = {}) {
          let {
            leading: d = true,
            trailing: e = true
          } = c;
          return function (a, b = 0, c = {}) {
            let d;
            if (typeof c != "object") {
              c = {};
            }
            let {
              leading: e = false,
              trailing: f = true,
              maxWait: g
            } = c;
            let h = [,,];
            if (e) {
              h[0] = "leading";
            }
            if (f) {
              h[1] = "trailing";
            }
            let i = null;
            let j = function (a, b, {
              signal: c,
              edges: d
            } = {}) {
              let e;
              let f = null;
              let g = d != null && d.includes("leading");
              let h = d == null || d.includes("trailing");
              let i = () => {
                if (f !== null) {
                  a.apply(e, f);
                  e = undefined;
                  f = null;
                }
              };
              let j = null;
              let k = () => {
                if (j != null) {
                  clearTimeout(j);
                }
                j = setTimeout(() => {
                  j = null;
                  if (h) {
                    i();
                  }
                  l();
                }, b);
              };
              let l = () => {
                if (j !== null) {
                  clearTimeout(j);
                  j = null;
                }
                e = undefined;
                f = null;
              };
              let m = function (...a) {
                if (c?.aborted) {
                  return;
                }
                e = this;
                f = a;
                let b = j == null;
                k();
                if (g && b) {
                  i();
                }
              };
              m.schedule = k;
              m.cancel = l;
              m.flush = () => {
                i();
              };
              c?.addEventListener("abort", l, {
                once: true
              });
              return m;
            }(function (...b) {
              d = a.apply(this, b);
              i = null;
            }, b, {
              edges: h
            });
            let k = function (...b) {
              if (g != null && (i === null && (i = Date.now()), Date.now() - i >= g)) {
                if (e || f) {
                  d = a.apply(this, b);
                }
                i = Date.now();
                j.cancel();
                j.schedule();
                return d;
              } else {
                j.apply(this, b);
                return d;
              }
            };
            k.cancel = j.cancel;
            k.flush = () => {
              j.flush();
              return d;
            };
            return k;
          }(a, b, {
            leading: d,
            maxWait: b,
            trailing: e
          });
        }(a, u, {
          trailing: true,
          leading: false
        });
      }
      var b = new ResizeObserver(a);
      var c = A.current.getBoundingClientRect();
      F(c.width, c.height);
      b.observe(A.current);
      return () => {
        b.disconnect();
      };
    }, [F, u]);
    var G = D.containerWidth;
    var H = D.containerHeight;
    dG(!j || j > 0, "The aspect(%s) must be greater than zero.", j);
    var I = dK(G, H, {
      width: m,
      height: n,
      aspect: j,
      maxHeight: r
    });
    var J = I.calculatedWidth;
    var K = I.calculatedHeight;
    dG(G < 0 || H < 0 || J != null && J > 0 || K != null && K > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", J, K, m, n, p, q, j);
    return bw.createElement("div", dQ({
      id: v ? `${v}` : undefined,
      className: i("recharts-responsive-container", w),
      style: dS(dS({}, y === undefined ? {} : y), {}, {
        width: m,
        height: n,
        minWidth: p,
        minHeight: q,
        maxHeight: r
      }),
      ref: A
    }, z), bw.createElement("div", {
      style: (e = (d = {
        width: m,
        height: n
      }).width, f = d.height, g = aJ(e), h = aJ(f), g && h ? dL : g ? dM : h ? dN : dO)
    }, bw.createElement(dV, {
      width: J,
      height: K
    }, s)));
  });
  var dY = (0, bw.forwardRef)((a, b) => {
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var i = dW();
    if (aY(i.width) && aY(i.height)) {
      return a.children;
    }
    d = (c = {
      width: a.width,
      height: a.height,
      aspect: a.aspect
    }).width;
    e = c.height;
    f = c.aspect;
    g = d;
    h = e;
    if (g === undefined && h === undefined) {
      g = dH;
      h = dI;
    } else if (g === undefined) {
      g = f && f > 0 ? undefined : dH;
    } else if (h === undefined) {
      h = f && f > 0 ? undefined : dI;
    }
    var j = {
      width: g,
      height: h
    };
    var k = j.width;
    var l = j.height;
    var m = dK(undefined, undefined, {
      width: k,
      height: l,
      aspect: a.aspect,
      maxHeight: a.maxHeight
    });
    var n = m.calculatedWidth;
    var o = m.calculatedHeight;
    if (aK(n) && aK(o)) {
      return bw.createElement(dV, {
        width: n,
        height: o
      }, a.children);
    } else {
      return bw.createElement(dX, dQ({}, a, {
        width: k,
        height: l,
        ref: b
      }));
    }
  });
  a.s(["ResponsiveContainer", 0, dY, "useResponsiveContainerContext", 0, dW], 72886);
  var dZ = () => {
    var a;
    var b = dD();
    var c = bE(bs);
    var d = bE(dF);
    var e = (a = bE(dE)) == null ? undefined : a.padding;
    if (b && d && e) {
      return {
        width: d.width - e.left - e.right,
        height: d.height - e.top - e.bottom,
        x: e.left,
        y: e.top
      };
    } else {
      return c;
    }
  };
  var d$ = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    brushBottom: 0
  };
  var d_ = () => {
    return bE(br) ?? d$;
  };
  var d0 = () => bE(bh);
  var d1 = () => bE(bi);
  var d2 = a => a.layout.layoutType;
  var d3 = () => bE(d2);
  var d4 = a => {
    var b = a.layout.layoutType;
    if (b === "centric" || b === "radial") {
      return b;
    }
  };
  var d5 = () => d3() !== undefined;
  var d6 = a => {
    var b = bA();
    var c = dD();
    var d = a.width;
    var e = a.height;
    var f = dW();
    var g = d;
    var h = e;
    if (f) {
      g = f.width > 0 ? f.width : d;
      h = f.height > 0 ? f.height : e;
    }
    (0, bw.useEffect)(() => {
      if (!c && aY(g) && aY(h)) {
        b(dz({
          width: g,
          height: h
        }));
      }
    }, [b, c, g, h]);
    return null;
  };
  function d7(a, b) {
    return function (a) {
      if (Array.isArray(a)) {
        return a;
      }
    }(a) || function (a, b) {
      var c = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (c != null) {
        var d;
        var e;
        var f;
        var g;
        var h = [];
        var i = true;
        var j = false;
        try {
          f = (c = c.call(a)).next;
          if (b === 0) {
            if (Object(c) !== c) {
              return;
            }
            i = false;
          } else {
            for (; !(i = (d = f.call(c)).done) && (h.push(d.value), h.length !== b); i = true);
          }
        } catch (a) {
          j = true;
          e = a;
        } finally {
          try {
            if (!i && c.return != null && (g = c.return(), Object(g) !== g)) {
              return;
            }
          } finally {
            if (j) {
              throw e;
            }
          }
        }
        return h;
      }
    }(a, b) || function (a, b) {
      if (a) {
        if (typeof a == "string") {
          return d8(a, b);
        }
        var c = {}.toString.call(a).slice(8, -1);
        if (c === "Object" && a.constructor) {
          c = a.constructor.name;
        }
        if (c === "Map" || c === "Set") {
          return Array.from(a);
        } else if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) {
          return d8(a, b);
        } else {
          return undefined;
        }
      }
    }(a, b) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function d8(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  function d9(a) {
    if (Array.isArray(a) && a.length === 2) {
      var b = d7(a, 2);
      var c = b[0];
      var d = b[1];
      if (aX(c) && aX(d)) {
        return true;
      }
    }
    return false;
  }
  function ea(a, b, c) {
    if (c) {
      return a;
    } else {
      return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
    }
  }
  function eb(a, b) {
    if (b && typeof a != "function" && Array.isArray(a) && a.length === 2) {
      var c;
      var d;
      var e = d7(a, 2);
      var f = e[0];
      var g = e[1];
      if (aX(f)) {
        c = f;
      } else if (typeof f == "function") {
        return;
      }
      if (aX(g)) {
        d = g;
      } else if (typeof g == "function") {
        return;
      }
      var h = [c, d];
      if (d9(h)) {
        return h;
      }
    }
  }
  a.s(["ReportChartSize", 0, d6, "selectChartLayout", 0, d2, "selectPolarChartLayout", 0, d4, "useCartesianChartLayout", 0, () => {
    var a = d3();
    if (a === "horizontal" || a === "vertical") {
      return a;
    }
  }, "useChartHeight", 0, d1, "useChartLayout", 0, d3, "useChartWidth", 0, d0, "useIsInChartContext", 0, d5, "useMargin", 0, () => bE(a => a.layout.margin), "useOffsetInternal", 0, d_, "usePolarChartLayout", 0, () => bE(d4), "useViewBox", 0, dZ], 58328);
  var ec;
  var ed;
  var ee;
  var ef;
  var eg = true;
  var eh = "[DecimalError] ";
  var ei = eh + "Invalid argument: ";
  var ej = eh + "Exponent out of range: ";
  var ek = Math.floor;
  var el = Math.pow;
  var em = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  var en = ek(1286742750677284.5);
  var eo = {};
  function ep(a, b) {
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;
    var j;
    var k = a.constructor;
    var l = k.precision;
    if (!a.s || !b.s) {
      if (!b.s) {
        b = new k(a);
      }
      if (eg) {
        return ez(b, l);
      } else {
        return b;
      }
    }
    i = a.d;
    j = b.d;
    g = a.e;
    e = b.e;
    i = i.slice();
    if (f = g - e) {
      if (f < 0) {
        d = i;
        f = -f;
        h = j.length;
      } else {
        d = j;
        e = g;
        h = i.length;
      }
      if (f > (h = (g = Math.ceil(l / 7)) > h ? g + 1 : h + 1)) {
        f = h;
        d.length = 1;
      }
      d.reverse();
      while (f--) {
        d.push(0);
      }
      d.reverse();
    }
    if ((h = i.length) - (f = j.length) < 0) {
      f = h;
      d = j;
      j = i;
      i = d;
    }
    c = 0;
    while (f) {
      c = (i[--f] = i[f] + j[f] + c) / 10000000 | 0;
      i[f] %= 10000000;
    }
    if (c) {
      i.unshift(c);
      ++e;
    }
    h = i.length;
    while (i[--h] == 0) {
      i.pop();
    }
    b.d = i;
    b.e = e;
    if (eg) {
      return ez(b, l);
    } else {
      return b;
    }
  }
  function eq(a, b, c) {
    if (a !== ~~a || a < b || a > c) {
      throw Error(ei + a);
    }
  }
  function er(a) {
    var b;
    var c;
    var d;
    var e = a.length - 1;
    var f = "";
    var g = a[0];
    if (e > 0) {
      f += g;
      b = 1;
      for (; b < e; b++) {
        if (c = 7 - (d = a[b] + "").length) {
          f += ew(c);
        }
        f += d;
      }
      if (c = 7 - (d = (g = a[b]) + "").length) {
        f += ew(c);
      }
    } else if (g === 0) {
      return "0";
    }
    while (g % 10 == 0) {
      g /= 10;
    }
    return f + g;
  }
  eo.absoluteValue = eo.abs = function () {
    var a = new this.constructor(this);
    a.s &&= 1;
    return a;
  };
  eo.comparedTo = eo.cmp = function (a) {
    var b;
    var c;
    var d;
    var e;
    a = new this.constructor(a);
    if (this.s !== a.s) {
      return this.s || -a.s;
    }
    if (this.e !== a.e) {
      if (this.e > a.e ^ this.s < 0) {
        return 1;
      } else {
        return -1;
      }
    }
    d = this.d.length;
    b = 0;
    c = d < (e = a.d.length) ? d : e;
    for (; b < c; ++b) {
      if (this.d[b] !== a.d[b]) {
        if (this.d[b] > a.d[b] ^ this.s < 0) {
          return 1;
        } else {
          return -1;
        }
      }
    }
    if (d === e) {
      return 0;
    } else if (d > e ^ this.s < 0) {
      return 1;
    } else {
      return -1;
    }
  };
  eo.decimalPlaces = eo.dp = function () {
    var a = this.d.length - 1;
    var b = (a - this.e) * 7;
    if (a = this.d[a]) {
      for (; a % 10 == 0; a /= 10) {
        b--;
      }
    }
    if (b < 0) {
      return 0;
    } else {
      return b;
    }
  };
  eo.dividedBy = eo.div = function (a) {
    return es(this, new this.constructor(a));
  };
  eo.dividedToIntegerBy = eo.idiv = function (a) {
    var b = this.constructor;
    return ez(es(this, new b(a), 0, 1), b.precision);
  };
  eo.equals = eo.eq = function (a) {
    return !this.cmp(a);
  };
  eo.exponent = function () {
    return eu(this);
  };
  eo.greaterThan = eo.gt = function (a) {
    return this.cmp(a) > 0;
  };
  eo.greaterThanOrEqualTo = eo.gte = function (a) {
    return this.cmp(a) >= 0;
  };
  eo.isInteger = eo.isint = function () {
    return this.e > this.d.length - 2;
  };
  eo.isNegative = eo.isneg = function () {
    return this.s < 0;
  };
  eo.isPositive = eo.ispos = function () {
    return this.s > 0;
  };
  eo.isZero = function () {
    return this.s === 0;
  };
  eo.lessThan = eo.lt = function (a) {
    return this.cmp(a) < 0;
  };
  eo.lessThanOrEqualTo = eo.lte = function (a) {
    return this.cmp(a) < 1;
  };
  eo.logarithm = eo.log = function (a) {
    var b;
    var c = this.constructor;
    var d = c.precision;
    var e = d + 5;
    if (a === undefined) {
      a = new c(10);
    } else if ((a = new c(a)).s < 1 || a.eq(ef)) {
      throw Error(eh + "NaN");
    }
    if (this.s < 1) {
      throw Error(eh + (this.s ? "NaN" : "-Infinity"));
    }
    if (this.eq(ef)) {
      return new c(0);
    } else {
      eg = false;
      b = es(ex(this, e), ex(a, e), e);
      eg = true;
      return ez(b, d);
    }
  };
  eo.minus = eo.sub = function (a) {
    a = new this.constructor(a);
    if (this.s == a.s) {
      return eA(this, a);
    } else {
      return ep(this, (a.s = -a.s, a));
    }
  };
  eo.modulo = eo.mod = function (a) {
    var b;
    var c = this.constructor;
    var d = c.precision;
    if (!(a = new c(a)).s) {
      throw Error(eh + "NaN");
    }
    if (this.s) {
      eg = false;
      b = es(this, a, 0, 1).times(a);
      eg = true;
      return this.minus(b);
    } else {
      return ez(new c(this), d);
    }
  };
  eo.naturalExponential = eo.exp = function () {
    return et(this);
  };
  eo.naturalLogarithm = eo.ln = function () {
    return ex(this);
  };
  eo.negated = eo.neg = function () {
    var a = new this.constructor(this);
    a.s = -a.s || 0;
    return a;
  };
  eo.plus = eo.add = function (a) {
    a = new this.constructor(a);
    if (this.s == a.s) {
      return ep(this, a);
    } else {
      return eA(this, (a.s = -a.s, a));
    }
  };
  eo.precision = eo.sd = function (a) {
    var b;
    var c;
    var d;
    if (a !== undefined && !!a !== a && a !== 1 && a !== 0) {
      throw Error(ei + a);
    }
    b = eu(this) + 1;
    c = (d = this.d.length - 1) * 7 + 1;
    if (d = this.d[d]) {
      for (; d % 10 == 0; d /= 10) {
        c--;
      }
      for (d = this.d[0]; d >= 10; d /= 10) {
        c++;
      }
    }
    if (a && b > c) {
      return b;
    } else {
      return c;
    }
  };
  eo.squareRoot = eo.sqrt = function () {
    var a;
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h = this.constructor;
    if (this.s < 1) {
      if (!this.s) {
        return new h(0);
      }
      throw Error(eh + "NaN");
    }
    a = eu(this);
    eg = false;
    if ((e = Math.sqrt(+this)) == 0 || e == Infinity) {
      if (((b = er(this.d)).length + a) % 2 == 0) {
        b += "0";
      }
      e = Math.sqrt(b);
      a = ek((a + 1) / 2) - (a < 0 || a % 2);
      d = new h(b = e == Infinity ? "5e" + a : (b = e.toExponential()).slice(0, b.indexOf("e") + 1) + a);
    } else {
      d = new h(e.toString());
    }
    e = g = (c = h.precision) + 3;
    while (true) {
      d = (f = d).plus(es(this, f, g + 2)).times(0.5);
      if (er(f.d).slice(0, g) === (b = er(d.d)).slice(0, g)) {
        b = b.slice(g - 3, g + 1);
        if (e == g && b == "4999") {
          ez(f, c + 1, 0);
          if (f.times(f).eq(this)) {
            d = f;
            break;
          }
        } else if (b != "9999") {
          break;
        }
        g += 4;
      }
    }
    eg = true;
    return ez(d, c);
  };
  eo.times = eo.mul = function (a) {
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;
    var j;
    var k = this.constructor;
    var l = this.d;
    var m = (a = new k(a)).d;
    if (!this.s || !a.s) {
      return new k(0);
    }
    a.s *= this.s;
    c = this.e + a.e;
    if ((i = l.length) < (j = m.length)) {
      f = l;
      l = m;
      m = f;
      g = i;
      i = j;
      j = g;
    }
    f = [];
    d = g = i + j;
    while (d--) {
      f.push(0);
    }
    for (d = j; --d >= 0;) {
      b = 0;
      e = i + d;
      while (e > d) {
        h = f[e] + m[d] * l[e - d - 1] + b;
        f[e--] = h % 10000000 | 0;
        b = h / 10000000 | 0;
      }
      f[e] = (f[e] + b) % 10000000 | 0;
    }
    while (!f[--g]) {
      f.pop();
    }
    if (b) {
      ++c;
    } else {
      f.shift();
    }
    a.d = f;
    a.e = c;
    if (eg) {
      return ez(a, k.precision);
    } else {
      return a;
    }
  };
  eo.toDecimalPlaces = eo.todp = function (a, b) {
    var c = this;
    var d = c.constructor;
    c = new d(c);
    if (a === undefined) {
      return c;
    } else {
      eq(a, 0, 1000000000);
      if (b === undefined) {
        b = d.rounding;
      } else {
        eq(b, 0, 8);
      }
      return ez(c, a + eu(c) + 1, b);
    }
  };
  eo.toExponential = function (a, b) {
    var c;
    var d = this;
    var e = d.constructor;
    if (a === undefined) {
      c = eB(d, true);
    } else {
      eq(a, 0, 1000000000);
      if (b === undefined) {
        b = e.rounding;
      } else {
        eq(b, 0, 8);
      }
      c = eB(d = ez(new e(d), a + 1, b), true, a + 1);
    }
    return c;
  };
  eo.toFixed = function (a, b) {
    var c;
    var d;
    var e = this.constructor;
    if (a === undefined) {
      return eB(this);
    } else {
      eq(a, 0, 1000000000);
      if (b === undefined) {
        b = e.rounding;
      } else {
        eq(b, 0, 8);
      }
      c = eB((d = ez(new e(this), a + eu(this) + 1, b)).abs(), false, a + eu(d) + 1);
      if (this.isneg() && !this.isZero()) {
        return "-" + c;
      } else {
        return c;
      }
    }
  };
  eo.toInteger = eo.toint = function () {
    var a = this.constructor;
    return ez(new a(this), eu(this) + 1, a.rounding);
  };
  eo.toNumber = function () {
    return +this;
  };
  eo.toPower = eo.pow = function (a) {
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h = this;
    var i = h.constructor;
    var j = +(a = new i(a));
    if (!a.s) {
      return new i(ef);
    }
    if (!(h = new i(h)).s) {
      if (a.s < 1) {
        throw Error(eh + "Infinity");
      }
      return h;
    }
    if (h.eq(ef)) {
      return h;
    }
    d = i.precision;
    if (a.eq(ef)) {
      return ez(h, d);
    }
    g = (b = a.e) >= (c = a.d.length - 1);
    f = h.s;
    if (g) {
      if ((c = j < 0 ? -j : j) <= 9007199254740991) {
        e = new i(ef);
        b = Math.ceil(d / 7 + 4);
        eg = false;
        while (c % 2 && eC((e = e.times(h)).d, b), (c = ek(c / 2)) !== 0) {
          eC((h = h.times(h)).d, b);
        }
        eg = true;
        if (a.s < 0) {
          return new i(ef).div(e);
        } else {
          return ez(e, d);
        }
      }
    } else if (f < 0) {
      throw Error(eh + "NaN");
    }
    f = f < 0 && a.d[Math.max(b, c)] & 1 ? -1 : 1;
    h.s = 1;
    eg = false;
    e = a.times(ex(h, d + 12));
    eg = true;
    (e = et(e)).s = f;
    return e;
  };
  eo.toPrecision = function (a, b) {
    var c;
    var d;
    var e = this;
    var f = e.constructor;
    if (a === undefined) {
      c = eu(e);
      d = eB(e, c <= f.toExpNeg || c >= f.toExpPos);
    } else {
      eq(a, 1, 1000000000);
      if (b === undefined) {
        b = f.rounding;
      } else {
        eq(b, 0, 8);
      }
      c = eu(e = ez(new f(e), a, b));
      d = eB(e, a <= c || c <= f.toExpNeg, a);
    }
    return d;
  };
  eo.toSignificantDigits = eo.tosd = function (a, b) {
    var c = this.constructor;
    if (a === undefined) {
      a = c.precision;
      b = c.rounding;
    } else {
      eq(a, 1, 1000000000);
      if (b === undefined) {
        b = c.rounding;
      } else {
        eq(b, 0, 8);
      }
    }
    return ez(new c(this), a, b);
  };
  eo.toString = eo.valueOf = eo.val = eo.toJSON = eo[Symbol.for("nodejs.util.inspect.custom")] = function () {
    var a = eu(this);
    var b = this.constructor;
    return eB(this, a <= b.toExpNeg || a >= b.toExpPos);
  };
  var es = function () {
    function a(a, b) {
      var c;
      var d = 0;
      var e = a.length;
      for (a = a.slice(); e--;) {
        c = a[e] * b + d;
        a[e] = c % 10000000 | 0;
        d = c / 10000000 | 0;
      }
      if (d) {
        a.unshift(d);
      }
      return a;
    }
    function b(a, b, c, d) {
      var e;
      var f;
      if (c != d) {
        f = c > d ? 1 : -1;
      } else {
        for (e = f = 0; e < c; e++) {
          if (a[e] != b[e]) {
            f = a[e] > b[e] ? 1 : -1;
            break;
          }
        }
      }
      return f;
    }
    function c(a, b, c) {
      var d = 0;
      for (; c--;) {
        a[c] -= d;
        d = +(a[c] < b[c]);
        a[c] = d * 10000000 + a[c] - b[c];
      }
      while (!a[0] && a.length > 1) {
        a.shift();
      }
    }
    return function (d, e, f, g) {
      var h;
      var i;
      var j;
      var k;
      var l;
      var m;
      var n;
      var o;
      var p;
      var q;
      var r;
      var s;
      var t;
      var u;
      var v;
      var w;
      var x;
      var y;
      var z = d.constructor;
      var A = d.s == e.s ? 1 : -1;
      var B = d.d;
      var C = e.d;
      if (!d.s) {
        return new z(d);
      }
      if (!e.s) {
        throw Error(eh + "Division by zero");
      }
      i = d.e - e.e;
      x = C.length;
      v = B.length;
      o = (n = new z(A)).d = [];
      j = 0;
      while (C[j] == (B[j] || 0)) {
        ++j;
      }
      if (C[j] > (B[j] || 0)) {
        --i;
      }
      if ((s = f == null ? f = z.precision : g ? f + (eu(d) - eu(e)) + 1 : f) < 0) {
        return new z(0);
      }
      s = s / 7 + 2 | 0;
      j = 0;
      if (x == 1) {
        k = 0;
        C = C[0];
        s++;
        for (; (j < v || k) && s--; j++) {
          t = k * 10000000 + (B[j] || 0);
          o[j] = t / C | 0;
          k = t % C | 0;
        }
      } else {
        if ((k = 10000000 / (C[0] + 1) | 0) > 1) {
          C = a(C, k);
          B = a(B, k);
          x = C.length;
          v = B.length;
        }
        u = x;
        q = (p = B.slice(0, x)).length;
        while (q < x) {
          p[q++] = 0;
        }
        (y = C.slice()).unshift(0);
        w = C[0];
        if (C[1] >= 5000000) {
          ++w;
        }
        do {
          k = 0;
          if ((h = b(C, p, x, q)) < 0) {
            r = p[0];
            if (x != q) {
              r = r * 10000000 + (p[1] || 0);
            }
            if ((k = r / w | 0) > 1) {
              if (k >= 10000000) {
                k = 9999999;
              }
              m = (l = a(C, k)).length;
              q = p.length;
              if ((h = b(l, p, m, q)) == 1) {
                k--;
                c(l, x < m ? y : C, m);
              }
            } else {
              if (k == 0) {
                h = k = 1;
              }
              l = C.slice();
            }
            if ((m = l.length) < q) {
              l.unshift(0);
            }
            c(p, l, q);
            if (h == -1) {
              q = p.length;
              if ((h = b(C, p, x, q)) < 1) {
                k++;
                c(p, x < q ? y : C, q);
              }
            }
            q = p.length;
          } else if (h === 0) {
            k++;
            p = [0];
          }
          o[j++] = k;
          if (h && p[0]) {
            p[q++] = B[u] || 0;
          } else {
            p = [B[u]];
            q = 1;
          }
        } while ((u++ < v || p[0] !== undefined) && s--);
      }
      if (!o[0]) {
        o.shift();
      }
      n.e = i;
      return ez(n, g ? f + eu(n) + 1 : f);
    };
  }();
  function et(a, b) {
    var c;
    var d;
    var e;
    var f;
    var g;
    var h = 0;
    var i = 0;
    var j = a.constructor;
    var k = j.precision;
    if (eu(a) > 16) {
      throw Error(ej + eu(a));
    }
    if (!a.s) {
      return new j(ef);
    }
    if (b == null) {
      eg = false;
      g = k;
    } else {
      g = b;
    }
    f = new j(0.03125);
    while (a.abs().gte(0.1)) {
      a = a.times(f);
      i += 5;
    }
    g += Math.log(el(2, i)) / Math.LN10 * 2 + 5 | 0;
    c = d = e = new j(ef);
    j.precision = g;
    while (true) {
      d = ez(d.times(a), g);
      c = c.times(++h);
      if (er((f = e.plus(es(d, c, g))).d).slice(0, g) === er(e.d).slice(0, g)) {
        while (i--) {
          e = ez(e.times(e), g);
        }
        j.precision = k;
        if (b == null) {
          eg = true;
          return ez(e, k);
        } else {
          return e;
        }
      }
      e = f;
    }
  }
  function eu(a) {
    var b = a.e * 7;
    for (var c = a.d[0]; c >= 10; c /= 10) {
      b++;
    }
    return b;
  }
  function ev(a, b, c) {
    if (b > a.LN10.sd()) {
      eg = true;
      if (c) {
        a.precision = c;
      }
      throw Error(eh + "LN10 precision limit exceeded");
    }
    return ez(new a(a.LN10), b);
  }
  function ew(a) {
    var b = "";
    for (; a--;) {
      b += "0";
    }
    return b;
  }
  function ex(a, b) {
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;
    var j;
    var k;
    var l = 1;
    var m = a;
    var n = m.d;
    var o = m.constructor;
    var p = o.precision;
    if (m.s < 1) {
      throw Error(eh + (m.s ? "NaN" : "-Infinity"));
    }
    if (m.eq(ef)) {
      return new o(0);
    }
    if (b == null) {
      eg = false;
      j = p;
    } else {
      j = b;
    }
    if (m.eq(10)) {
      if (b == null) {
        eg = true;
      }
      return ev(o, j);
    }
    o.precision = j += 10;
    d = (c = er(n)).charAt(0);
    if (!(Math.abs(f = eu(m)) < 1500000000000000)) {
      i = ev(o, j + 2, p).times(f + "");
      m = ex(new o(d + "." + c.slice(1)), j - 10).plus(i);
      o.precision = p;
      if (b == null) {
        eg = true;
        return ez(m, p);
      } else {
        return m;
      }
    }
    while (d < 7 && d != 1 || d == 1 && c.charAt(1) > 3) {
      d = (c = er((m = m.times(a)).d)).charAt(0);
      l++;
    }
    f = eu(m);
    if (d > 1) {
      m = new o("0." + c);
      f++;
    } else {
      m = new o(d + "." + c.slice(1));
    }
    h = g = m = es(m.minus(ef), m.plus(ef), j);
    k = ez(m.times(m), j);
    e = 3;
    while (true) {
      g = ez(g.times(k), j);
      if (er((i = h.plus(es(g, new o(e), j))).d).slice(0, j) === er(h.d).slice(0, j)) {
        h = h.times(2);
        if (f !== 0) {
          h = h.plus(ev(o, j + 2, p).times(f + ""));
        }
        h = es(h, new o(l), j);
        o.precision = p;
        if (b == null) {
          eg = true;
          return ez(h, p);
        } else {
          return h;
        }
      }
      h = i;
      e += 2;
    }
  }
  function ey(a, b) {
    var c;
    var d;
    var e;
    if ((c = b.indexOf(".")) > -1) {
      b = b.replace(".", "");
    }
    if ((d = b.search(/e/i)) > 0) {
      if (c < 0) {
        c = d;
      }
      c += +b.slice(d + 1);
      b = b.substring(0, d);
    } else if (c < 0) {
      c = b.length;
    }
    d = 0;
    while (b.charCodeAt(d) === 48) {
      ++d;
    }
    for (e = b.length; b.charCodeAt(e - 1) === 48;) {
      --e;
    }
    if (b = b.slice(d, e)) {
      e -= d;
      a.e = ek((c = c - d - 1) / 7);
      a.d = [];
      d = (c + 1) % 7;
      if (c < 0) {
        d += 7;
      }
      if (d < e) {
        if (d) {
          a.d.push(+b.slice(0, d));
        }
        e -= 7;
        while (d < e) {
          a.d.push(+b.slice(d, d += 7));
        }
        d = 7 - (b = b.slice(d)).length;
      } else {
        d -= e;
      }
      while (d--) {
        b += "0";
      }
      a.d.push(+b);
      if (eg && (a.e > en || a.e < -en)) {
        throw Error(ej + c);
      }
    } else {
      a.s = 0;
      a.e = 0;
      a.d = [0];
    }
    return a;
  }
  function ez(a, b, c) {
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;
    var j;
    var k;
    var l = a.d;
    g = 1;
    f = l[0];
    for (; f >= 10; f /= 10) {
      g++;
    }
    if ((d = b - g) < 0) {
      d += 7;
      e = b;
      j = l[k = 0];
    } else {
      if ((k = Math.ceil((d + 1) / 7)) >= (f = l.length)) {
        return a;
      }
      j = f = l[k];
      g = 1;
      for (; f >= 10; f /= 10) {
        g++;
      }
      d %= 7;
      e = d - 7 + g;
    }
    if (c !== undefined) {
      h = j / (f = el(10, g - e - 1)) % 10 | 0;
      i = b < 0 || l[k + 1] !== undefined || j % f;
      i = c < 4 ? (h || i) && (c == 0 || c == (a.s < 0 ? 3 : 2)) : h > 5 || h == 5 && (c == 4 || i || c == 6 && (d > 0 ? e > 0 ? j / el(10, g - e) : 0 : l[k - 1]) % 10 & 1 || c == (a.s < 0 ? 8 : 7));
    }
    if (b < 1 || !l[0]) {
      if (i) {
        f = eu(a);
        l.length = 1;
        b = b - f - 1;
        l[0] = el(10, (7 - b % 7) % 7);
        a.e = ek(-b / 7) || 0;
      } else {
        l.length = 1;
        l[0] = a.e = a.s = 0;
      }
      return a;
    }
    if (d == 0) {
      l.length = k;
      f = 1;
      k--;
    } else {
      l.length = k + 1;
      f = el(10, 7 - d);
      l[k] = e > 0 ? (j / el(10, g - e) % el(10, e) | 0) * f : 0;
    }
    if (i) {
      while (true) {
        if (k == 0) {
          if ((l[0] += f) == 10000000) {
            l[0] = 1;
            ++a.e;
          }
          break;
        } else {
          l[k] += f;
          if (l[k] != 10000000) {
            break;
          }
          l[k--] = 0;
          f = 1;
        }
      }
    }
    for (d = l.length; l[--d] === 0;) {
      l.pop();
    }
    if (eg && (a.e > en || a.e < -en)) {
      throw Error(ej + eu(a));
    }
    return a;
  }
  function eA(a, b) {
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;
    var j;
    var k;
    var l;
    var m = a.constructor;
    var n = m.precision;
    if (!a.s || !b.s) {
      if (b.s) {
        b.s = -b.s;
      } else {
        b = new m(a);
      }
      if (eg) {
        return ez(b, n);
      } else {
        return b;
      }
    }
    i = a.d;
    l = b.d;
    d = b.e;
    j = a.e;
    i = i.slice();
    if (g = j - d) {
      if (k = g < 0) {
        c = i;
        g = -g;
        h = l.length;
      } else {
        c = l;
        d = j;
        h = i.length;
      }
      if (g > (e = Math.max(Math.ceil(n / 7), h) + 2)) {
        g = e;
        c.length = 1;
      }
      c.reverse();
      e = g;
      while (e--) {
        c.push(0);
      }
      c.reverse();
    } else {
      if (k = (e = i.length) < (h = l.length)) {
        h = e;
      }
      e = 0;
      for (; e < h; e++) {
        if (i[e] != l[e]) {
          k = i[e] < l[e];
          break;
        }
      }
      g = 0;
    }
    if (k) {
      c = i;
      i = l;
      l = c;
      b.s = -b.s;
    }
    h = i.length;
    e = l.length - h;
    for (; e > 0; --e) {
      i[h++] = 0;
    }
    for (e = l.length; e > g;) {
      if (i[--e] < l[e]) {
        for (f = e; f && i[--f] === 0;) {
          i[f] = 9999999;
        }
        --i[f];
        i[e] += 10000000;
      }
      i[e] -= l[e];
    }
    while (i[--h] === 0) {
      i.pop();
    }
    for (; i[0] === 0; i.shift()) {
      --d;
    }
    if (i[0]) {
      b.d = i;
      b.e = d;
      if (eg) {
        return ez(b, n);
      } else {
        return b;
      }
    } else {
      return new m(0);
    }
  }
  function eB(a, b, c) {
    var d;
    var e = eu(a);
    var f = er(a.d);
    var g = f.length;
    if (b) {
      if (c && (d = c - g) > 0) {
        f = f.charAt(0) + "." + f.slice(1) + ew(d);
      } else if (g > 1) {
        f = f.charAt(0) + "." + f.slice(1);
      }
      f = f + (e < 0 ? "e" : "e+") + e;
    } else if (e < 0) {
      f = "0." + ew(-e - 1) + f;
      if (c && (d = c - g) > 0) {
        f += ew(d);
      }
    } else if (e >= g) {
      f += ew(e + 1 - g);
      if (c && (d = c - e - 1) > 0) {
        f = f + "." + ew(d);
      }
    } else {
      if ((d = e + 1) < g) {
        f = f.slice(0, d) + "." + f.slice(d);
      }
      if (c && (d = c - g) > 0) {
        if (e + 1 === g) {
          f += ".";
        }
        f += ew(d);
      }
    }
    if (a.s < 0) {
      return "-" + f;
    } else {
      return f;
    }
  }
  function eC(a, b) {
    if (a.length > b) {
      a.length = b;
      return true;
    }
  }
  function eD(a) {
    if (!a || typeof a != "object") {
      throw Error(eh + "Object expected");
    }
    var b;
    var c;
    var d;
    var e = ["precision", 1, 1000000000, "rounding", 0, 8, "toExpNeg", -Infinity, 0, "toExpPos", 0, Infinity];
    for (b = 0; b < e.length; b += 3) {
      if ((d = a[c = e[b]]) !== undefined) {
        if (ek(d) === d && d >= e[b + 1] && d <= e[b + 2]) {
          this[c] = d;
        } else {
          throw Error(ei + c + ": " + d);
        }
      }
    }
    if ((d = a[c = "LN10"]) !== undefined) {
      if (d == Math.LN10) {
        this[c] = new this(d);
      } else {
        throw Error(ei + c + ": " + d);
      }
    }
    return this;
  }
  var ee = function a(b) {
    var c;
    var d;
    var e;
    function f(a) {
      if (!(this instanceof f)) {
        return new f(a);
      }
      this.constructor = f;
      if (a instanceof f) {
        this.s = a.s;
        this.e = a.e;
        this.d = (a = a.d) ? a.slice() : a;
        return;
      }
      if (typeof a == "number") {
        if (a * 0 != 0) {
          throw Error(ei + a);
        }
        if (a > 0) {
          this.s = 1;
        } else if (a < 0) {
          a = -a;
          this.s = -1;
        } else {
          this.s = 0;
          this.e = 0;
          this.d = [0];
          return;
        }
        if (a === ~~a && a < 10000000) {
          this.e = 0;
          this.d = [a];
          return;
        }
        return ey(this, a.toString());
      }
      if (typeof a != "string") {
        throw Error(ei + a);
      }
      if (a.charCodeAt(0) === 45) {
        a = a.slice(1);
        this.s = -1;
      } else {
        this.s = 1;
      }
      if (em.test(a)) {
        ey(this, a);
      } else {
        throw Error(ei + a);
      }
    }
    f.prototype = eo;
    f.ROUND_UP = 0;
    f.ROUND_DOWN = 1;
    f.ROUND_CEIL = 2;
    f.ROUND_FLOOR = 3;
    f.ROUND_HALF_UP = 4;
    f.ROUND_HALF_DOWN = 5;
    f.ROUND_HALF_EVEN = 6;
    f.ROUND_HALF_CEIL = 7;
    f.ROUND_HALF_FLOOR = 8;
    f.clone = a;
    f.config = f.set = eD;
    if (b === undefined) {
      b = {};
    }
    if (b) {
      c = 0;
      e = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
      while (c < e.length) {
        if (!b.hasOwnProperty(d = e[c++])) {
          b[d] = this[d];
        }
      }
    }
    f.config(b);
    return f;
  }({
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
  });
  ef = new ee(1);
  let eE = ee;
  function eF(a) {
    if (a === 0) {
      return 1;
    } else {
      return Math.floor(new eE(a).abs().log(10).toNumber()) + 1;
    }
  }
  function eG(a, b, c) {
    for (var d = new eE(a), e = 0, f = []; d.lt(b) && e < 100000;) {
      f.push(d.toNumber());
      d = d.add(c);
      e++;
    }
    return f;
  }
  function eH(a, b) {
    return function (a) {
      if (Array.isArray(a)) {
        return a;
      }
    }(a) || function (a, b) {
      var c = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (c != null) {
        var d;
        var e;
        var f;
        var g;
        var h = [];
        var i = true;
        var j = false;
        try {
          f = (c = c.call(a)).next;
          if (b === 0) {
            if (Object(c) !== c) {
              return;
            }
            i = false;
          } else {
            for (; !(i = (d = f.call(c)).done) && (h.push(d.value), h.length !== b); i = true);
          }
        } catch (a) {
          j = true;
          e = a;
        } finally {
          try {
            if (!i && c.return != null && (g = c.return(), Object(g) !== g)) {
              return;
            }
          } finally {
            if (j) {
              throw e;
            }
          }
        }
        return h;
      }
    }(a, b) || function (a, b) {
      if (a) {
        if (typeof a == "string") {
          return eI(a, b);
        }
        var c = {}.toString.call(a).slice(8, -1);
        if (c === "Object" && a.constructor) {
          c = a.constructor.name;
        }
        if (c === "Map" || c === "Set") {
          return Array.from(a);
        } else if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) {
          return eI(a, b);
        } else {
          return undefined;
        }
      }
    }(a, b) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function eI(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  var eJ = a => {
    var b = eH(a, 2);
    var c = b[0];
    var d = b[1];
    var e = c;
    var f = d;
    if (c > d) {
      e = d;
      f = c;
    }
    return [e, f];
  };
  var eK = (a, b, c) => {
    if (a.lte(0)) {
      return new eE(0);
    }
    var d = eF(a.toNumber());
    var e = new eE(10).pow(d);
    var f = a.div(e);
    var g = d !== 1 ? 0.05 : 0.1;
    var h = new eE(Math.ceil(f.div(g).toNumber())).add(c).mul(g).mul(e);
    return new eE(b ? h.toNumber() : Math.ceil(h.toNumber()));
  };
  var eL = (a, b, c) => {
    if (a.lte(0)) {
      return new eE(0);
    }
    var e = [1, 2, 2.5, 5];
    var f = Math.floor(new eE(a.toNumber()).abs().log(10).toNumber());
    var g = new eE(10).pow(f);
    var h = a.div(g).toNumber();
    var i = e.findIndex(a => a >= h - 1e-10);
    if (i === -1) {
      g = g.mul(10);
      i = 0;
    }
    if ((i += c) >= e.length) {
      var j = Math.floor(i / e.length);
      i %= e.length;
      g = g.mul(new eE(10).pow(j));
    }
    var k = new eE(e[i] ?? 1).mul(g);
    if (b) {
      return k;
    } else {
      return new eE(Math.ceil(k.toNumber()));
    }
  };
  function eM(a, b, c, d) {
    var e;
    var f = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var g = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : eK;
    if (!Number.isFinite((b - a) / (c - 1))) {
      return {
        step: new eE(0),
        tickMin: new eE(0),
        tickMax: new eE(0)
      };
    }
    var h = g(new eE(b).sub(a).div(c - 1), d, f);
    var i = Math.ceil((e = a <= 0 && b >= 0 ? new eE(0) : (e = new eE(a).add(b).div(2)).sub(new eE(e).mod(h))).sub(a).div(h).toNumber());
    var j = Math.ceil(new eE(b).sub(e).div(h).toNumber());
    var k = i + j + 1;
    if (k > c) {
      return eM(a, b, c, d, f + 1, g);
    } else {
      if (k < c) {
        j = b > 0 ? j + (c - k) : j;
        i = b > 0 ? i : i + (c - k);
      }
      return {
        step: h,
        tickMin: e.sub(new eE(i).mul(h)),
        tickMax: e.add(new eE(j).mul(h))
      };
    }
  }
  function eN(a) {
    var b = eH(a, 2);
    var c = b[0];
    var d = b[1];
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
    var f = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    var g = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "auto";
    var h = Math.max(e, 2);
    var i = eH(eJ([c, d]), 2);
    var j = i[0];
    var k = i[1];
    if (j === -Infinity || k === Infinity) {
      var l = k === Infinity ? [j, ...Array(e - 1).fill(Infinity)] : [...Array(e - 1).fill(-Infinity), k];
      if (c > d) {
        return l.reverse();
      } else {
        return l;
      }
    }
    if (j === k) {
      return ((a, b, c) => {
        var d = new eE(1);
        var e = new eE(a);
        if (!e.isint() && c) {
          var f = Math.abs(a);
          if (f < 1) {
            d = new eE(10).pow(eF(a) - 1);
            e = new eE(Math.floor(e.div(d).toNumber())).mul(d);
          } else if (f > 1) {
            e = new eE(Math.floor(a));
          }
        } else if (a === 0) {
          e = new eE(Math.floor((b - 1) / 2));
        } else if (!c) {
          e = new eE(Math.floor(a));
        }
        var g = Math.floor((b - 1) / 2);
        var h = [];
        for (var i = 0; i < b; i++) {
          h.push(e.add(new eE(i - g).mul(d)).toNumber());
        }
        return h;
      })(j, e, f);
    }
    var m = eM(j, k, h, f, 0, g === "snap125" ? eL : eK);
    var n = m.step;
    var o = eG(m.tickMin, m.tickMax.add(new eE(0.1).mul(n)), n);
    if (c > d) {
      return o.reverse();
    } else {
      return o;
    }
  }
  function eO(a, b) {
    var c = eH(a, 2);
    var d = c[0];
    var e = c[1];
    var f = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    var g = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "auto";
    var h = eH(eJ([d, e]), 2);
    var i = h[0];
    var j = h[1];
    if (i === -Infinity || j === Infinity) {
      return [d, e];
    }
    if (i === j) {
      return [i];
    }
    var k = Math.max(b, 2);
    var l = (g === "snap125" ? eL : eK)(new eE(j).sub(i).div(k - 1), f, 0);
    var m = [...eG(new eE(i), new eE(j), l), j];
    if (f === false) {
      var n = (m = m.map(a => Math.round(a))).length - 1;
      if (n > 0 && m[n] === m[n - 1]) {
        m = m.slice(0, n);
      }
    }
    if (d > e) {
      return m.reverse();
    } else {
      return m;
    }
  }
  var eP = a => a.rootProps.barCategoryGap;
  var eQ = a => a.rootProps.stackOffset;
  var eR = a => a.rootProps.reverseStackOrder;
  var eS = a => a.options.chartName;
  var eT = a => a.rootProps.syncId;
  var eU = a => a.rootProps.syncMethod;
  var eV = a => a.options.eventEmitter;
  function eW(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function eX(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        eW(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        eW(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  a.s(["selectBarCategoryGap", 0, eP, "selectChartBaseValue", 0, a => a.rootProps.baseValue, "selectChartName", 0, eS, "selectEventEmitter", 0, eV, "selectReverseStackOrder", 0, eR, "selectStackOffsetType", 0, eQ, "selectSyncId", 0, eT, "selectSyncMethod", 0, eU], 39537);
  var eY = Math.PI / 180;
  var eZ = (a, b, c, d) => ({
    x: a + Math.cos(-eY * d) * c,
    y: b + Math.sin(-eY * d) * c
  });
  function e$(a, b, c = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 0,
    height: 0,
    brushBottom: 0
  }) {
    return Math.min(Math.abs(a - (c.left || 0) - (c.right || 0)), Math.abs(b - (c.top || 0) - (c.bottom || 0))) / 2;
  }
  var e_ = (a, b) => {
    var c;
    var d;
    var e;
    var f;
    var g = ((a, b) => {
      var c;
      var d;
      var e;
      var f;
      var g = a.x;
      var h = a.y;
      var i = b.cx;
      var j = b.cy;
      c = {
        x: g,
        y: h
      };
      d = {
        x: i,
        y: j
      };
      e = c.x;
      f = c.y;
      var k = Math.sqrt((e - d.x) ** 2 + (f - d.y) ** 2);
      if (k <= 0) {
        return {
          radius: k,
          angle: 0
        };
      }
      var l = Math.acos((g - i) / k);
      if (h > j) {
        l = Math.PI * 2 - l;
      }
      return {
        radius: k,
        angle: l * 180 / Math.PI,
        angleInRadian: l
      };
    })({
      x: a.relativeX,
      y: a.relativeY
    }, b);
    var h = g.radius;
    var i = g.angle;
    var j = b.innerRadius;
    var k = b.outerRadius;
    if (h < j || h > k || h === 0) {
      return null;
    }
    e = Math.min(Math.floor((c = b.startAngle) / 360), Math.floor((d = b.endAngle) / 360));
    var l = {
      startAngle: c - e * 360,
      endAngle: d - e * 360
    };
    var m = l.startAngle;
    var n = l.endAngle;
    var o = i;
    if (m <= n) {
      while (o > n) {
        o -= 360;
      }
      while (o < m) {
        o += 360;
      }
      f = o >= m && o <= n;
    } else {
      while (o > m) {
        o -= 360;
      }
      while (o < n) {
        o += 360;
      }
      f = o >= n && o <= m;
    }
    if (f) {
      return eX(eX({}, b), {}, {
        radius: h,
        angle: o + Math.min(Math.floor(b.startAngle / 360), Math.floor(b.endAngle / 360)) * 360
      });
    } else {
      return null;
    }
  };
  a.s(["RADIAN", 0, eY, "getMaxRadius", 0, e$, "inRangeOfSector", 0, e_, "polarToCartesian", 0, eZ], 66158);
  var e0 = {
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
  a.s(["DefaultZIndexes", 0, e0], 77340);
  var e1 = {
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
    zIndex: e0.axis
  };
  var e2 = {
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
    zIndex: e0.axis
  };
  var e3 = (a, b) => {
    if (a && b) {
      if (a != null && a.reversed) {
        return [b[1], b[0]];
      } else {
        return b;
      }
    }
  };
  function e4(a, b, c) {
    if (c !== "auto") {
      return c;
    } else if (a != null) {
      if (a7(a, b)) {
        return "category";
      } else {
        return "number";
      }
    } else {
      return undefined;
    }
  }
  function e5(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function e6(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        e5(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        e5(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  a.s(["getAxisTypeBasedOnLayout", 0, e4], 2996);
  var e7 = {
    allowDataOverflow: e1.allowDataOverflow,
    allowDecimals: e1.allowDecimals,
    allowDuplicatedCategory: false,
    dataKey: undefined,
    domain: undefined,
    id: e1.angleAxisId,
    includeHidden: false,
    name: undefined,
    reversed: e1.reversed,
    scale: e1.scale,
    tick: e1.tick,
    tickCount: undefined,
    ticks: undefined,
    type: e1.type,
    unit: undefined,
    niceTicks: "auto"
  };
  var e8 = {
    allowDataOverflow: e2.allowDataOverflow,
    allowDecimals: e2.allowDecimals,
    allowDuplicatedCategory: e2.allowDuplicatedCategory,
    dataKey: undefined,
    domain: undefined,
    id: e2.radiusAxisId,
    includeHidden: e2.includeHidden,
    name: undefined,
    reversed: e2.reversed,
    scale: e2.scale,
    tick: e2.tick,
    tickCount: e2.tickCount,
    ticks: undefined,
    type: e2.type,
    unit: undefined,
    niceTicks: "auto"
  };
  var e9 = ad([(a, b) => {
    if (b != null) {
      return a.polarAxis.angleAxis[b];
    }
  }, d4], (a, b) => {
    if (a != null) {
      return a;
    }
    var d = e4(b, "angleAxis", e7.type) ?? "category";
    return e6(e6({}, e7), {}, {
      type: d
    });
  });
  var fa = ad([(a, b) => a.polarAxis.radiusAxis[b], d4], (a, b) => {
    if (a != null) {
      return a;
    }
    var d = e4(b, "radiusAxis", e8.type) ?? "category";
    return e6(e6({}, e8), {}, {
      type: d
    });
  });
  var fb = a => a.polarOptions;
  var fc = ad([bh, bi, br], e$);
  var fd = ad([fb, fc], (a, b) => {
    if (a != null) {
      return aO(a.innerRadius, b, 0);
    }
  });
  var fe = ad([fb, fc], (a, b) => {
    if (a != null) {
      return aO(a.outerRadius, b, b * 0.8);
    }
  });
  var ff = ad([fb], a => a == null ? [0, 0] : [a.startAngle, a.endAngle]);
  ad([e9, ff], e3);
  var fg = ad([fc, fd, fe], (a, b, c) => {
    if (a != null && b != null && c != null) {
      return [b, c];
    }
  });
  ad([fa, fg], e3);
  var fh = ad([d2, fb, fd, fe, bh, bi], (a, b, c, d, e, f) => {
    if ((a === "centric" || a === "radial") && b != null && c != null && d != null) {
      var g = b.cx;
      var h = b.cy;
      var i = b.startAngle;
      var j = b.endAngle;
      return {
        cx: aO(g, e, e / 2),
        cy: aO(h, f, f / 2),
        innerRadius: c,
        outerRadius: d,
        startAngle: i,
        endAngle: j,
        clockWise: false
      };
    }
  });
  var fi = (a, b) => b;
  a.s(["pickAxisType", 0, fi], 51934);
  var fj = (a, b, c) => c;
  function fk(a) {
    if (a == null) {
      return undefined;
    } else {
      return a.id;
    }
  }
  function fl(a, b, c) {
    var d = b.chartData;
    var e = d === undefined ? [] : d;
    var f = c.allowDuplicatedCategory;
    var g = c.dataKey;
    var h = new Map();
    a.forEach(a => {
      var c = a.data ?? e;
      if (c != null && c.length !== 0) {
        var d = fk(a);
        c.forEach((b, c) => {
          var e;
          var i = g == null || f ? c : String(a5(b, g, null));
          var j = a5(b, a.dataKey, 0);
          Object.assign(e = h.has(i) ? h.get(i) : {}, {
            [d]: j
          });
          h.set(i, e);
        });
      }
    });
    return Array.from(h.values());
  }
  function fm(a) {
    return "stackId" in a && a.stackId != null && a.dataKey != null;
  }
  a.s(["pickAxisId", 0, fj], 51554);
  a.s(["getStackSeriesIdentifier", 0, fk], 60585);
  var fn = (a, b) => a === b || a != null && b != null && a[0] === b[0] && a[1] === b[1];
  function fo(a, b) {
    return !!Array.isArray(a) && !!Array.isArray(b) && a.length === 0 && b.length === 0 || a === b;
  }
  var fp = a => {
    var b = d2(a);
    if (b === "horizontal") {
      return "xAxis";
    } else if (b === "vertical") {
      return "yAxis";
    } else if (b === "centric") {
      return "angleAxis";
    } else {
      return "radiusAxis";
    }
  };
  var fq = a => a.tooltip.settings.axisId;
  function fr(a) {
    if (a != null) {
      var b = a.ticks;
      var c = a.bandwidth;
      var d = a.range();
      var e = [Math.min(...d), Math.max(...d)];
      return {
        domain: () => a.domain(),
        range: function (a) {
          function b() {
            return a.apply(this, arguments);
          }
          b.toString = function () {
            return a.toString();
          };
          return b;
        }(() => e),
        rangeMin: () => e[0],
        rangeMax: () => e[1],
        isInRange(a) {
          var b = e[0];
          var c = e[1];
          if (b <= c) {
            return a >= b && a <= c;
          } else {
            return a >= c && a <= b;
          }
        },
        bandwidth: c ? () => c.call(a) : undefined,
        ticks: b ? c => b.call(a, c) : undefined,
        map: (b, c) => {
          var d = a(b);
          if (d != null) {
            if (a.bandwidth && c != null && c.position) {
              var e = a.bandwidth();
              switch (c.position) {
                case "middle":
                  d += e / 2;
                  break;
                case "end":
                  d += e;
              }
            }
            return d;
          }
        }
      };
    }
  }
  var fs = (a, b) => {
    if (b != null) {
      if (a !== "linear") {
        return b;
      } else {
        if (!d9(b)) {
          var c;
          var d;
          for (var e = 0; e < b.length; e++) {
            var f = b[e];
            if (aX(f)) {
              if (c === undefined || f < c) {
                c = f;
              }
              if (d === undefined || f > d) {
                d = f;
              }
            }
          }
          if (c !== undefined && d !== undefined) {
            return [c, d];
          } else {
            return undefined;
          }
        }
        return b;
      }
    }
  };
  function ft(a, b) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(a);
        break;
      default:
        this.range(b).domain(a);
    }
    return this;
  }
  function fu(a, b) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        if (typeof a == "function") {
          this.interpolator(a);
        } else {
          this.range(a);
        }
        break;
      default:
        this.domain(a);
        if (typeof b == "function") {
          this.interpolator(b);
        } else {
          this.range(b);
        }
    }
    return this;
  }
  a.s(["combineCheckedDomain", 0, fs], 88249);
  a.s([], 64939);
  a.i(64939);
  a.s([], 75590);
  a.i(75590);
  class fv extends Map {
    constructor(a, b = fx) {
      super();
      Object.defineProperties(this, {
        _intern: {
          value: new Map()
        },
        _key: {
          value: b
        }
      });
      if (a != null) {
        for (const [b, c] of a) {
          this.set(b, c);
        }
      }
    }
    get(a) {
      return super.get(fw(this, a));
    }
    has(a) {
      return super.has(fw(this, a));
    }
    set(a, b) {
      return super.set(function ({
        _intern: a,
        _key: b
      }, c) {
        let d = b(c);
        if (a.has(d)) {
          return a.get(d);
        } else {
          a.set(d, c);
          return c;
        }
      }(this, a), b);
    }
    delete(a) {
      return super.delete(function ({
        _intern: a,
        _key: b
      }, c) {
        let d = b(c);
        if (a.has(d)) {
          c = a.get(d);
          a.delete(d);
        }
        return c;
      }(this, a));
    }
  }
  function fw({
    _intern: a,
    _key: b
  }, c) {
    let d = b(c);
    if (a.has(d)) {
      return a.get(d);
    } else {
      return c;
    }
  }
  function fx(a) {
    if (a !== null && typeof a == "object") {
      return a.valueOf();
    } else {
      return a;
    }
  }
  let fy = Symbol("implicit");
  function fz() {
    var a = new fv();
    var b = [];
    var c = [];
    var d = fy;
    function e(e) {
      let f = a.get(e);
      if (f === undefined) {
        if (d !== fy) {
          return d;
        }
        a.set(e, f = b.push(e) - 1);
      }
      return c[f % c.length];
    }
    e.domain = function (c) {
      if (!arguments.length) {
        return b.slice();
      }
      b = [];
      a = new fv();
      for (let d of c) {
        if (!a.has(d)) {
          a.set(d, b.push(d) - 1);
        }
      }
      return e;
    };
    e.range = function (a) {
      if (arguments.length) {
        c = Array.from(a);
        return e;
      } else {
        return c.slice();
      }
    };
    e.unknown = function (a) {
      if (arguments.length) {
        d = a;
        return e;
      } else {
        return d;
      }
    };
    e.copy = function () {
      return fz(b, c).unknown(d);
    };
    ft.apply(e, arguments);
    return e;
  }
  function fA() {
    var a;
    var b;
    var c = fz().unknown(undefined);
    var d = c.domain;
    var e = c.range;
    var f = 0;
    var g = 1;
    var h = false;
    var i = 0;
    var j = 0;
    var k = 0.5;
    function l() {
      var c = d().length;
      var l = g < f;
      var m = l ? g : f;
      var n = l ? f : g;
      a = (n - m) / Math.max(1, c - i + j * 2);
      if (h) {
        a = Math.floor(a);
      }
      m += (n - m - a * (c - i)) * k;
      b = a * (1 - i);
      if (h) {
        m = Math.round(m);
        b = Math.round(b);
      }
      var o = function (a, b, c) {
        a *= 1;
        b *= 1;
        c = (e = arguments.length) < 2 ? (b = a, a = 0, 1) : e < 3 ? 1 : +c;
        for (var d = -1, e = Math.max(0, Math.ceil((b - a) / c)) | 0, f = Array(e); ++d < e;) {
          f[d] = a + d * c;
        }
        return f;
      }(c).map(function (b) {
        return m + a * b;
      });
      return e(l ? o.reverse() : o);
    }
    delete c.unknown;
    c.domain = function (a) {
      if (arguments.length) {
        d(a);
        return l();
      } else {
        return d();
      }
    };
    c.range = function (a) {
      if (arguments.length) {
        [f, g] = a;
        f *= 1;
        g *= 1;
        return l();
      } else {
        return [f, g];
      }
    };
    c.rangeRound = function (a) {
      [f, g] = a;
      f *= 1;
      g *= 1;
      h = true;
      return l();
    };
    c.bandwidth = function () {
      return b;
    };
    c.step = function () {
      return a;
    };
    c.round = function (a) {
      if (arguments.length) {
        h = !!a;
        return l();
      } else {
        return h;
      }
    };
    c.padding = function (a) {
      if (arguments.length) {
        i = Math.min(1, j = +a);
        return l();
      } else {
        return i;
      }
    };
    c.paddingInner = function (a) {
      if (arguments.length) {
        i = Math.min(1, a);
        return l();
      } else {
        return i;
      }
    };
    c.paddingOuter = function (a) {
      if (arguments.length) {
        j = +a;
        return l();
      } else {
        return j;
      }
    };
    c.align = function (a) {
      if (arguments.length) {
        k = Math.max(0, Math.min(1, a));
        return l();
      } else {
        return k;
      }
    };
    c.copy = function () {
      return fA(d(), [f, g]).round(h).paddingInner(i).paddingOuter(j).align(k);
    };
    return ft.apply(l(), arguments);
  }
  function fB() {
    return function a(b) {
      var c = b.copy;
      b.padding = b.paddingOuter;
      delete b.paddingInner;
      delete b.paddingOuter;
      b.copy = function () {
        return a(c());
      };
      return b;
    }(fA.apply(null, arguments).paddingInner(1));
  }
  let fC = Math.sqrt(50);
  let fD = Math.sqrt(10);
  let fE = Math.sqrt(2);
  function fF(a, b, c) {
    let d;
    let e;
    let f;
    let g = (b - a) / Math.max(0, c);
    let h = Math.floor(Math.log10(g));
    let i = g / Math.pow(10, h);
    let j = i >= fC ? 10 : i >= fD ? 5 : i >= fE ? 2 : 1;
    if (h < 0) {
      d = Math.round(a * (f = Math.pow(10, -h) / j));
      e = Math.round(b * f);
      if (d / f < a) {
        ++d;
      }
      if (e / f > b) {
        --e;
      }
      f = -f;
    } else {
      d = Math.round(a / (f = Math.pow(10, h) * j));
      e = Math.round(b / f);
      if (d * f < a) {
        ++d;
      }
      if (e * f > b) {
        --e;
      }
    }
    if (e < d && c >= 0.5 && c < 2) {
      return fF(a, b, c * 2);
    } else {
      return [d, e, f];
    }
  }
  function fG(a, b, c) {
    b *= 1;
    a *= 1;
    if (!((c *= 1) > 0)) {
      return [];
    }
    if (a === b) {
      return [a];
    }
    let d = b < a;
    let [e, f, g] = d ? fF(b, a, c) : fF(a, b, c);
    if (!(f >= e)) {
      return [];
    }
    let h = f - e + 1;
    let i = Array(h);
    if (d) {
      if (g < 0) {
        for (let a = 0; a < h; ++a) {
          i[a] = -((f - a) / g);
        }
      } else {
        for (let a = 0; a < h; ++a) {
          i[a] = (f - a) * g;
        }
      }
    } else if (g < 0) {
      for (let a = 0; a < h; ++a) {
        i[a] = -((e + a) / g);
      }
    } else {
      for (let a = 0; a < h; ++a) {
        i[a] = (e + a) * g;
      }
    }
    return i;
  }
  function fH(a, b, c) {
    return fF(a *= 1, b *= 1, c *= 1)[2];
  }
  function fI(a, b, c) {
    b *= 1;
    a *= 1;
    c *= 1;
    let d = b < a;
    let e = d ? fH(b, a, c) : fH(a, b, c);
    return (d ? -1 : 1) * (e < 0 ? -(1 / e) : e);
  }
  function fJ(a, b) {
    if (a == null || b == null) {
      return NaN;
    } else if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else if (a >= b) {
      return 0;
    } else {
      return NaN;
    }
  }
  function fK(a, b) {
    if (a == null || b == null) {
      return NaN;
    } else if (b < a) {
      return -1;
    } else if (b > a) {
      return 1;
    } else if (b >= a) {
      return 0;
    } else {
      return NaN;
    }
  }
  function fL(a) {
    let b;
    let c;
    let d;
    function e(a, d, f = 0, g = a.length) {
      if (f < g) {
        if (b(d, d) !== 0) {
          return g;
        }
        do {
          let b = f + g >>> 1;
          if (c(a[b], d) < 0) {
            f = b + 1;
          } else {
            g = b;
          }
        } while (f < g);
      }
      return f;
    }
    if (a.length !== 2) {
      b = fJ;
      c = (b, c) => fJ(a(b), c);
      d = (b, c) => a(b) - c;
    } else {
      b = a === fJ || a === fK ? a : fM;
      c = a;
      d = a;
    }
    return {
      left: e,
      center: function (a, b, c = 0, f = a.length) {
        let g = e(a, b, c, f - 1);
        if (g > c && d(a[g - 1], b) > -d(a[g], b)) {
          return g - 1;
        } else {
          return g;
        }
      },
      right: function (a, d, e = 0, f = a.length) {
        if (e < f) {
          if (b(d, d) !== 0) {
            return f;
          }
          do {
            let b = e + f >>> 1;
            if (c(a[b], d) <= 0) {
              e = b + 1;
            } else {
              f = b;
            }
          } while (e < f);
        }
        return e;
      }
    };
  }
  function fM() {
    return 0;
  }
  function fN(a) {
    if (a === null) {
      return NaN;
    } else {
      return +a;
    }
  }
  let fO = fL(fJ);
  let fP = fO.right;
  function fQ(a, b, c) {
    a.prototype = b.prototype = c;
    c.constructor = a;
  }
  function fR(a, b) {
    var c = Object.create(a.prototype);
    for (var d in b) {
      c[d] = b[d];
    }
    return c;
  }
  function fS() {}
  fO.left;
  fL(fN).center;
  var fT = "\\s*([+-]?\\d+)\\s*";
  var fU = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var fV = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var fW = /^#([0-9a-f]{3,8})$/;
  var fX = RegExp(`^rgb\\(${fT},${fT},${fT}\\)$`);
  var fY = RegExp(`^rgb\\(${fV},${fV},${fV}\\)$`);
  var fZ = RegExp(`^rgba\\(${fT},${fT},${fT},${fU}\\)$`);
  var f$ = RegExp(`^rgba\\(${fV},${fV},${fV},${fU}\\)$`);
  var f_ = RegExp(`^hsl\\(${fU},${fV},${fV}\\)$`);
  var f0 = RegExp(`^hsla\\(${fU},${fV},${fV},${fU}\\)$`);
  var f1 = {
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
  function f2() {
    return this.rgb().formatHex();
  }
  function f3() {
    return this.rgb().formatRgb();
  }
  function f4(a) {
    var b;
    var c;
    a = (a + "").trim().toLowerCase();
    if (b = fW.exec(a)) {
      c = b[1].length;
      b = parseInt(b[1], 16);
      if (c === 6) {
        return f5(b);
      } else if (c === 3) {
        return new f8(b >> 8 & 15 | b >> 4 & 240, b >> 4 & 15 | b & 240, (b & 15) << 4 | b & 15, 1);
      } else if (c === 8) {
        return f6(b >> 24 & 255, b >> 16 & 255, b >> 8 & 255, (b & 255) / 255);
      } else if (c === 4) {
        return f6(b >> 12 & 15 | b >> 8 & 240, b >> 8 & 15 | b >> 4 & 240, b >> 4 & 15 | b & 240, ((b & 15) << 4 | b & 15) / 255);
      } else {
        return null;
      }
    } else if (b = fX.exec(a)) {
      return new f8(b[1], b[2], b[3], 1);
    } else if (b = fY.exec(a)) {
      return new f8(b[1] * 255 / 100, b[2] * 255 / 100, b[3] * 255 / 100, 1);
    } else if (b = fZ.exec(a)) {
      return f6(b[1], b[2], b[3], b[4]);
    } else if (b = f$.exec(a)) {
      return f6(b[1] * 255 / 100, b[2] * 255 / 100, b[3] * 255 / 100, b[4]);
    } else if (b = f_.exec(a)) {
      return ge(b[1], b[2] / 100, b[3] / 100, 1);
    } else if (b = f0.exec(a)) {
      return ge(b[1], b[2] / 100, b[3] / 100, b[4]);
    } else if (f1.hasOwnProperty(a)) {
      return f5(f1[a]);
    } else if (a === "transparent") {
      return new f8(NaN, NaN, NaN, 0);
    } else {
      return null;
    }
  }
  function f5(a) {
    return new f8(a >> 16 & 255, a >> 8 & 255, a & 255, 1);
  }
  function f6(a, b, c, d) {
    if (d <= 0) {
      a = b = c = NaN;
    }
    return new f8(a, b, c, d);
  }
  function f7(a, b, c, d) {
    var e;
    if (arguments.length == 1) {
      if (!((e = a) instanceof fS)) {
        e = f4(e);
      }
      if (e) {
        return new f8((e = e.rgb()).r, e.g, e.b, e.opacity);
      } else {
        return new f8();
      }
    } else {
      return new f8(a, b, c, d == null ? 1 : d);
    }
  }
  function f8(a, b, c, d) {
    this.r = +a;
    this.g = +b;
    this.b = +c;
    this.opacity = +d;
  }
  function f9() {
    return `#${gd(this.r)}${gd(this.g)}${gd(this.b)}`;
  }
  function ga() {
    let a = gb(this.opacity);
    return `${a === 1 ? "rgb(" : "rgba("}${gc(this.r)}, ${gc(this.g)}, ${gc(this.b)}${a === 1 ? ")" : `, ${a})`}`;
  }
  function gb(a) {
    if (isNaN(a)) {
      return 1;
    } else {
      return Math.max(0, Math.min(1, a));
    }
  }
  function gc(a) {
    return Math.max(0, Math.min(255, Math.round(a) || 0));
  }
  function gd(a) {
    return ((a = gc(a)) < 16 ? "0" : "") + a.toString(16);
  }
  function ge(a, b, c, d) {
    if (d <= 0) {
      a = b = c = NaN;
    } else if (c <= 0 || c >= 1) {
      a = b = NaN;
    } else if (b <= 0) {
      a = NaN;
    }
    return new gg(a, b, c, d);
  }
  function gf(a) {
    if (a instanceof gg) {
      return new gg(a.h, a.s, a.l, a.opacity);
    }
    if (!(a instanceof fS)) {
      a = f4(a);
    }
    if (!a) {
      return new gg();
    }
    if (a instanceof gg) {
      return a;
    }
    var b = (a = a.rgb()).r / 255;
    var c = a.g / 255;
    var d = a.b / 255;
    var e = Math.min(b, c, d);
    var f = Math.max(b, c, d);
    var g = NaN;
    var h = f - e;
    var i = (f + e) / 2;
    if (h) {
      g = b === f ? (c - d) / h + (c < d) * 6 : c === f ? (d - b) / h + 2 : (b - c) / h + 4;
      h /= i < 0.5 ? f + e : 2 - f - e;
      g *= 60;
    } else {
      h = i > 0 && i < 1 ? 0 : g;
    }
    return new gg(g, h, i, a.opacity);
  }
  function gg(a, b, c, d) {
    this.h = +a;
    this.s = +b;
    this.l = +c;
    this.opacity = +d;
  }
  function gh(a) {
    if ((a = (a || 0) % 360) < 0) {
      return a + 360;
    } else {
      return a;
    }
  }
  function gi(a) {
    return Math.max(0, Math.min(1, a || 0));
  }
  function gj(a, b, c) {
    return (a < 60 ? b + (c - b) * a / 60 : a < 180 ? c : a < 240 ? b + (c - b) * (240 - a) / 60 : b) * 255;
  }
  function gk(a, b, c, d, e) {
    var f = a * a;
    var g = f * a;
    return ((1 - a * 3 + f * 3 - g) * b + (4 - f * 6 + g * 3) * c + (1 + a * 3 + f * 3 - g * 3) * d + g * e) / 6;
  }
  fQ(fS, f4, {
    copy(a) {
      return Object.assign(new this.constructor(), this, a);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: f2,
    formatHex: f2,
    formatHex8: function () {
      return this.rgb().formatHex8();
    },
    formatHsl: function () {
      return gf(this).formatHsl();
    },
    formatRgb: f3,
    toString: f3
  });
  fQ(f8, f7, fR(fS, {
    brighter(a) {
      a = a == null ? 1.4285714285714286 : Math.pow(1.4285714285714286, a);
      return new f8(this.r * a, this.g * a, this.b * a, this.opacity);
    },
    darker(a) {
      a = a == null ? 0.7 : Math.pow(0.7, a);
      return new f8(this.r * a, this.g * a, this.b * a, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new f8(gc(this.r), gc(this.g), gc(this.b), gb(this.opacity));
    },
    displayable() {
      return this.r >= -0.5 && this.r < 255.5 && this.g >= -0.5 && this.g < 255.5 && this.b >= -0.5 && this.b < 255.5 && this.opacity >= 0 && this.opacity <= 1;
    },
    hex: f9,
    formatHex: f9,
    formatHex8: function () {
      return `#${gd(this.r)}${gd(this.g)}${gd(this.b)}${gd((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
    },
    formatRgb: ga,
    toString: ga
  }));
  fQ(gg, function (a, b, c, d) {
    if (arguments.length == 1) {
      return gf(a);
    } else {
      return new gg(a, b, c, d == null ? 1 : d);
    }
  }, fR(fS, {
    brighter(a) {
      a = a == null ? 1.4285714285714286 : Math.pow(1.4285714285714286, a);
      return new gg(this.h, this.s, this.l * a, this.opacity);
    },
    darker(a) {
      a = a == null ? 0.7 : Math.pow(0.7, a);
      return new gg(this.h, this.s, this.l * a, this.opacity);
    },
    rgb() {
      var a = this.h % 360 + (this.h < 0) * 360;
      var b = isNaN(a) || isNaN(this.s) ? 0 : this.s;
      var c = this.l;
      var d = c + (c < 0.5 ? c : 1 - c) * b;
      var e = c * 2 - d;
      return new f8(gj(a >= 240 ? a - 240 : a + 120, e, d), gj(a, e, d), gj(a < 120 ? a + 240 : a - 120, e, d), this.opacity);
    },
    clamp() {
      return new gg(gh(this.h), gi(this.s), gi(this.l), gb(this.opacity));
    },
    displayable() {
      return (this.s >= 0 && this.s <= 1 || isNaN(this.s)) && this.l >= 0 && this.l <= 1 && this.opacity >= 0 && this.opacity <= 1;
    },
    formatHsl() {
      let a = gb(this.opacity);
      return `${a === 1 ? "hsl(" : "hsla("}${gh(this.h)}, ${gi(this.s) * 100}%, ${gi(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
    }
  }));
  let gl = a => () => a;
  function gm(a, b) {
    var c = b - a;
    if (c) {
      return function (b) {
        return a + b * c;
      };
    } else {
      return gl(isNaN(a) ? b : a);
    }
  }
  let gn = function a(b) {
    var c;
    var d = (c = +b) == 1 ? gm : function (a, b) {
      var d;
      var e;
      var f;
      if (b - a) {
        d = a;
        e = b;
        d = Math.pow(d, f = c);
        e = Math.pow(e, f) - d;
        f = 1 / f;
        return function (a) {
          return Math.pow(d + a * e, f);
        };
      } else {
        return gl(isNaN(a) ? b : a);
      }
    };
    function e(a, b) {
      var c = d((a = f7(a)).r, (b = f7(b)).r);
      var e = d(a.g, b.g);
      var f = d(a.b, b.b);
      var g = gm(a.opacity, b.opacity);
      return function (b) {
        a.r = c(b);
        a.g = e(b);
        a.b = f(b);
        a.opacity = g(b);
        return a + "";
      };
    }
    e.gamma = a;
    return e;
  }(1);
  function go(a) {
    return function (b) {
      var c;
      var d;
      var e = b.length;
      var f = Array(e);
      var g = Array(e);
      var h = Array(e);
      for (c = 0; c < e; ++c) {
        d = f7(b[c]);
        f[c] = d.r || 0;
        g[c] = d.g || 0;
        h[c] = d.b || 0;
      }
      f = a(f);
      g = a(g);
      h = a(h);
      d.opacity = 1;
      return function (a) {
        d.r = f(a);
        d.g = g(a);
        d.b = h(a);
        return d + "";
      };
    };
  }
  function gp(a, b) {
    a *= 1;
    b *= 1;
    return function (c) {
      return a * (1 - c) + b * c;
    };
  }
  go(function (a) {
    var b = a.length - 1;
    return function (c) {
      var d = c <= 0 ? c = 0 : c >= 1 ? (c = 1, b - 1) : Math.floor(c * b);
      var e = a[d];
      var f = a[d + 1];
      var g = d > 0 ? a[d - 1] : e * 2 - f;
      var h = d < b - 1 ? a[d + 2] : f * 2 - e;
      return gk((c - d / b) * b, g, e, f, h);
    };
  });
  go(function (a) {
    var b = a.length;
    return function (c) {
      var d = Math.floor(((c %= 1) < 0 ? ++c : c) * b);
      var e = a[(d + b - 1) % b];
      var f = a[d % b];
      var g = a[(d + 1) % b];
      var h = a[(d + 2) % b];
      return gk((c - d / b) * b, e, f, g, h);
    };
  });
  var gq = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var gr = RegExp(gq.source, "g");
  function gs(a, b) {
    var c;
    var d;
    var e = typeof b;
    if (b == null || e === "boolean") {
      return gl(b);
    } else {
      return (e === "number" ? gp : e === "string" ? (d = f4(b)) ? (b = d, gn) : function (a, b) {
        var c;
        var d;
        var e;
        var f;
        var g;
        var h = gq.lastIndex = gr.lastIndex = 0;
        var i = -1;
        var j = [];
        var k = [];
        a += "";
        b += "";
        while ((e = gq.exec(a)) && (f = gr.exec(b))) {
          if ((g = f.index) > h) {
            g = b.slice(h, g);
            if (j[i]) {
              j[i] += g;
            } else {
              j[++i] = g;
            }
          }
          if ((e = e[0]) === (f = f[0])) {
            if (j[i]) {
              j[i] += f;
            } else {
              j[++i] = f;
            }
          } else {
            j[++i] = null;
            k.push({
              i: i,
              x: gp(e, f)
            });
          }
          h = gr.lastIndex;
        }
        if (h < b.length) {
          g = b.slice(h);
          if (j[i]) {
            j[i] += g;
          } else {
            j[++i] = g;
          }
        }
        if (j.length < 2) {
          if (k[0]) {
            c = k[0].x;
            return function (a) {
              return c(a) + "";
            };
          } else {
            d = b;
            return function () {
              return d;
            };
          }
        } else {
          b = k.length;
          return function (a) {
            var c;
            for (var d = 0; d < b; ++d) {
              j[(c = k[d]).i] = c.x(a);
            }
            return j.join("");
          };
        }
      } : b instanceof f4 ? gn : b instanceof Date ? function (a, b) {
        var c = new Date();
        a *= 1;
        b *= 1;
        return function (d) {
          c.setTime(a * (1 - d) + b * d);
          return c;
        };
      } : !ArrayBuffer.isView(c = b) || c instanceof DataView ? Array.isArray(b) ? function (a, b) {
        var c;
        var d = b ? b.length : 0;
        var e = a ? Math.min(d, a.length) : 0;
        var f = Array(e);
        var g = Array(d);
        for (c = 0; c < e; ++c) {
          f[c] = gs(a[c], b[c]);
        }
        for (; c < d; ++c) {
          g[c] = b[c];
        }
        return function (a) {
          for (c = 0; c < e; ++c) {
            g[c] = f[c](a);
          }
          return g;
        };
      } : typeof b.valueOf != "function" && typeof b.toString != "function" || isNaN(b) ? function (a, b) {
        var c;
        var d = {};
        var e = {};
        if (a === null || typeof a != "object") {
          a = {};
        }
        if (b === null || typeof b != "object") {
          b = {};
        }
        for (c in b) {
          if (c in a) {
            d[c] = gs(a[c], b[c]);
          } else {
            e[c] = b[c];
          }
        }
        return function (a) {
          for (c in d) {
            e[c] = d[c](a);
          }
          return e;
        };
      } : gp : function (a, b) {
        b ||= [];
        var c;
        var d = a ? Math.min(b.length, a.length) : 0;
        var e = b.slice();
        return function (f) {
          for (c = 0; c < d; ++c) {
            e[c] = a[c] * (1 - f) + b[c] * f;
          }
          return e;
        };
      })(a, b);
    }
  }
  function gt(a, b) {
    a *= 1;
    b *= 1;
    return function (c) {
      return Math.round(a * (1 - c) + b * c);
    };
  }
  function gu(a) {
    return +a;
  }
  var gv = [0, 1];
  function gw(a) {
    return a;
  }
  function gx(a, b) {
    var c;
    if (b -= a *= 1) {
      return function (c) {
        return (c - a) / b;
      };
    } else {
      c = isNaN(b) ? NaN : 0.5;
      return function () {
        return c;
      };
    }
  }
  function gy(a, b, c) {
    var d = a[0];
    var e = a[1];
    var f = b[0];
    var g = b[1];
    if (e < d) {
      d = gx(e, d);
      f = c(g, f);
    } else {
      d = gx(d, e);
      f = c(f, g);
    }
    return function (a) {
      return f(d(a));
    };
  }
  function gz(a, b, c) {
    var d = Math.min(a.length, b.length) - 1;
    var e = Array(d);
    var f = Array(d);
    var g = -1;
    for (a[d] < a[0] && (a = a.slice().reverse(), b = b.slice().reverse()); ++g < d;) {
      e[g] = gx(a[g], a[g + 1]);
      f[g] = c(b[g], b[g + 1]);
    }
    return function (b) {
      var c = fP(a, b, 1, d) - 1;
      return f[c](e[c](b));
    };
  }
  function gA(a, b) {
    return b.domain(a.domain()).range(a.range()).interpolate(a.interpolate()).clamp(a.clamp()).unknown(a.unknown());
  }
  function gB() {
    var a;
    var b;
    var c;
    var d;
    var e;
    var f;
    var g = gv;
    var h = gv;
    var i = gs;
    var j = gw;
    function k() {
      var a;
      var b;
      var c;
      var i = Math.min(g.length, h.length);
      if (j !== gw) {
        a = g[0];
        b = g[i - 1];
        if (a > b) {
          c = a;
          a = b;
          b = c;
        }
        j = function (c) {
          return Math.max(a, Math.min(b, c));
        };
      }
      d = i > 2 ? gz : gy;
      e = f = null;
      return l;
    }
    function l(b) {
      if (b == null || isNaN(b *= 1)) {
        return c;
      } else {
        return (e ||= d(g.map(a), h, i))(a(j(b)));
      }
    }
    l.invert = function (c) {
      return j(b((f ||= d(h, g.map(a), gp))(c)));
    };
    l.domain = function (a) {
      if (arguments.length) {
        g = Array.from(a, gu);
        return k();
      } else {
        return g.slice();
      }
    };
    l.range = function (a) {
      if (arguments.length) {
        h = Array.from(a);
        return k();
      } else {
        return h.slice();
      }
    };
    l.rangeRound = function (a) {
      h = Array.from(a);
      i = gt;
      return k();
    };
    l.clamp = function (a) {
      if (arguments.length) {
        j = !!a || gw;
        return k();
      } else {
        return j !== gw;
      }
    };
    l.interpolate = function (a) {
      if (arguments.length) {
        i = a;
        return k();
      } else {
        return i;
      }
    };
    l.unknown = function (a) {
      if (arguments.length) {
        c = a;
        return l;
      } else {
        return c;
      }
    };
    return function (c, d) {
      a = c;
      b = d;
      return k();
    };
  }
  function gC() {
    return gB()(gw, gw);
  }
  function gD(a, b) {
    if (!isFinite(a) || a === 0) {
      return null;
    }
    var c = (a = b ? a.toExponential(b - 1) : a.toExponential()).indexOf("e");
    var d = a.slice(0, c);
    return [d.length > 1 ? d[0] + d.slice(2) : d, +a.slice(c + 1)];
  }
  function gE(a) {
    if (a = gD(Math.abs(a))) {
      return a[1];
    } else {
      return NaN;
    }
  }
  var gF = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function gG(a) {
    var b;
    if (!(b = gF.exec(a))) {
      throw Error("invalid format: " + a);
    }
    return new gH({
      fill: b[1],
      align: b[2],
      sign: b[3],
      symbol: b[4],
      zero: b[5],
      width: b[6],
      comma: b[7],
      precision: b[8] && b[8].slice(1),
      trim: b[9],
      type: b[10]
    });
  }
  function gH(a) {
    this.fill = a.fill === undefined ? " " : a.fill + "";
    this.align = a.align === undefined ? ">" : a.align + "";
    this.sign = a.sign === undefined ? "-" : a.sign + "";
    this.symbol = a.symbol === undefined ? "" : a.symbol + "";
    this.zero = !!a.zero;
    this.width = a.width === undefined ? undefined : +a.width;
    this.comma = !!a.comma;
    this.precision = a.precision === undefined ? undefined : +a.precision;
    this.trim = !!a.trim;
    this.type = a.type === undefined ? "" : a.type + "";
  }
  function gI(a, b) {
    var c = gD(a, b);
    if (!c) {
      return a + "";
    }
    var d = c[0];
    var e = c[1];
    if (e < 0) {
      return "0." + Array(-e).join("0") + d;
    } else if (d.length > e + 1) {
      return d.slice(0, e + 1) + "." + d.slice(e + 1);
    } else {
      return d + Array(e - d.length + 2).join("0");
    }
  }
  gG.prototype = gH.prototype;
  gH.prototype.toString = function () {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };
  let gJ = {
    "%": (a, b) => (a * 100).toFixed(b),
    b: a => Math.round(a).toString(2),
    c: a => a + "",
    d: function (a) {
      if (Math.abs(a = Math.round(a)) >= 1e+21) {
        return a.toLocaleString("en").replace(/,/g, "");
      } else {
        return a.toString(10);
      }
    },
    e: (a, b) => a.toExponential(b),
    f: (a, b) => a.toFixed(b),
    g: (a, b) => a.toPrecision(b),
    o: a => Math.round(a).toString(8),
    p: (a, b) => gI(a * 100, b),
    r: gI,
    s: function (a, b) {
      var c = gD(a, b);
      if (!c) {
        m = undefined;
        return a.toPrecision(b);
      }
      var d = c[0];
      var e = c[1];
      var f = e - (m = Math.max(-8, Math.min(8, Math.floor(e / 3))) * 3) + 1;
      var g = d.length;
      if (f === g) {
        return d;
      } else if (f > g) {
        return d + Array(f - g + 1).join("0");
      } else if (f > 0) {
        return d.slice(0, f) + "." + d.slice(f);
      } else {
        return "0." + Array(1 - f).join("0") + gD(a, Math.max(0, b + f - 1))[0];
      }
    },
    X: a => Math.round(a).toString(16).toUpperCase(),
    x: a => Math.round(a).toString(16)
  };
  function gK(a) {
    return a;
  }
  var gL = Array.prototype.map;
  var gM = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function gN(a, b, c, d) {
    var e;
    var f;
    var g = fI(a, b, c);
    switch ((d = gG(d == null ? ",f" : d)).type) {
      case "s":
        var h = Math.max(Math.abs(a), Math.abs(b));
        if (d.precision == null && !isNaN(f = Math.max(0, Math.max(-8, Math.min(8, Math.floor(gE(h) / 3))) * 3 - gE(Math.abs(g))))) {
          d.precision = f;
        }
        return p(d, h);
      case "":
      case "e":
      case "g":
      case "p":
      case "r":
        if (d.precision == null && !isNaN(f = Math.max(0, gE(Math.abs(Math.max(Math.abs(a), Math.abs(b))) - (e = Math.abs(e = g))) - gE(e)) + 1)) {
          d.precision = f - (d.type === "e");
        }
        break;
      case "f":
      case "%":
        if (d.precision == null && !isNaN(f = Math.max(0, -gE(Math.abs(g))))) {
          d.precision = f - (d.type === "%") * 2;
        }
    }
    return o(d);
  }
  function gO(a) {
    var b = a.domain;
    a.ticks = function (a) {
      var c = b();
      return fG(c[0], c[c.length - 1], a == null ? 10 : a);
    };
    a.tickFormat = function (a, c) {
      var d = b();
      return gN(d[0], d[d.length - 1], a == null ? 10 : a, c);
    };
    a.nice = function (c) {
      if (c == null) {
        c = 10;
      }
      var d;
      var e;
      var f = b();
      var g = 0;
      var h = f.length - 1;
      var i = f[g];
      var j = f[h];
      var k = 10;
      for (j < i && (e = i, i = j, j = e, e = g, g = h, h = e); k-- > 0;) {
        if ((e = fH(i, j, c)) === d) {
          f[g] = i;
          f[h] = j;
          return b(f);
        }
        if (e > 0) {
          i = Math.floor(i / e) * e;
          j = Math.ceil(j / e) * e;
        } else if (e < 0) {
          i = Math.ceil(i * e) / e;
          j = Math.floor(j * e) / e;
        } else {
          break;
        }
        d = e;
      }
      return a;
    };
    return a;
  }
  function gP() {
    var a = gC();
    a.copy = function () {
      return gA(a, gP());
    };
    ft.apply(a, arguments);
    return gO(a);
  }
  function gQ(a) {
    var b;
    function c(a) {
      if (a == null || isNaN(a *= 1)) {
        return b;
      } else {
        return a;
      }
    }
    c.invert = c;
    c.domain = c.range = function (b) {
      if (arguments.length) {
        a = Array.from(b, gu);
        return c;
      } else {
        return a.slice();
      }
    };
    c.unknown = function (a) {
      if (arguments.length) {
        b = a;
        return c;
      } else {
        return b;
      }
    };
    c.copy = function () {
      return gQ(a).unknown(b);
    };
    a = arguments.length ? Array.from(a, gu) : [0, 1];
    return gO(c);
  }
  function gR(a, b) {
    a = a.slice();
    var c;
    var d = 0;
    var e = a.length - 1;
    var f = a[d];
    var g = a[e];
    if (g < f) {
      c = d;
      d = e;
      e = c;
      c = f;
      f = g;
      g = c;
    }
    a[d] = b.floor(f);
    a[e] = b.ceil(g);
    return a;
  }
  function gS(a) {
    return Math.log(a);
  }
  function gT(a) {
    return Math.exp(a);
  }
  function gU(a) {
    return -Math.log(-a);
  }
  function gV(a) {
    return -Math.exp(-a);
  }
  function gW(a) {
    if (isFinite(a)) {
      return +("1e" + a);
    } else if (a < 0) {
      return 0;
    } else {
      return a;
    }
  }
  function gX(a) {
    return (b, c) => -a(-b, c);
  }
  function gY(a) {
    let b;
    let c;
    let d = a(gS, gT);
    let e = d.domain;
    let f = 10;
    function g() {
      var g;
      var h;
      b = (g = f) === Math.E ? Math.log : g === 10 && Math.log10 || g === 2 && Math.log2 || (g = Math.log(g), a => Math.log(a) / g);
      c = (h = f) === 10 ? gW : h === Math.E ? Math.exp : a => Math.pow(h, a);
      if (e()[0] < 0) {
        b = gX(b);
        c = gX(c);
        a(gU, gV);
      } else {
        a(gS, gT);
      }
      return d;
    }
    d.base = function (a) {
      if (arguments.length) {
        f = +a;
        return g();
      } else {
        return f;
      }
    };
    d.domain = function (a) {
      if (arguments.length) {
        e(a);
        return g();
      } else {
        return e();
      }
    };
    d.ticks = a => {
      let d;
      let g;
      let h = e();
      let i = h[0];
      let j = h[h.length - 1];
      let k = j < i;
      if (k) {
        [i, j] = [j, i];
      }
      let l = b(i);
      let m = b(j);
      let n = a == null ? 10 : +a;
      let o = [];
      if (!(f % 1) && m - l < n) {
        l = Math.floor(l);
        m = Math.ceil(m);
        if (i > 0) {
          for (; l <= m; ++l) {
            for (d = 1; d < f; ++d) {
              if (!((g = l < 0 ? d / c(-l) : d * c(l)) < i)) {
                if (g > j) {
                  break;
                }
                o.push(g);
              }
            }
          }
        } else {
          for (; l <= m; ++l) {
            for (d = f - 1; d >= 1; --d) {
              if (!((g = l > 0 ? d / c(-l) : d * c(l)) < i)) {
                if (g > j) {
                  break;
                }
                o.push(g);
              }
            }
          }
        }
        if (o.length * 2 < n) {
          o = fG(i, j, n);
        }
      } else {
        o = fG(l, m, Math.min(m - l, n)).map(c);
      }
      if (k) {
        return o.reverse();
      } else {
        return o;
      }
    };
    d.tickFormat = (a, e) => {
      if (a == null) {
        a = 10;
      }
      if (e == null) {
        e = f === 10 ? "s" : ",";
      }
      if (typeof e != "function") {
        if (!(f % 1) && (e = gG(e)).precision == null) {
          e.trim = true;
        }
        e = o(e);
      }
      if (a === Infinity) {
        return e;
      }
      let g = Math.max(1, f * a / d.ticks().length);
      return a => {
        let d = a / c(Math.round(b(a)));
        if (d * f < f - 0.5) {
          d *= f;
        }
        if (d <= g) {
          return e(a);
        } else {
          return "";
        }
      };
    };
    d.nice = () => e(gR(e(), {
      floor: a => c(Math.floor(b(a))),
      ceil: a => c(Math.ceil(b(a)))
    }));
    return d;
  }
  function gZ() {
    let a = gY(gB()).domain([1, 10]);
    a.copy = () => gA(a, gZ()).base(a.base());
    ft.apply(a, arguments);
    return a;
  }
  function g$(a) {
    return function (b) {
      return Math.sign(b) * Math.log1p(Math.abs(b / a));
    };
  }
  function g_(a) {
    return function (b) {
      return Math.sign(b) * Math.expm1(Math.abs(b)) * a;
    };
  }
  function g0(a) {
    var b = 1;
    var c = a(g$(1), g_(b));
    c.constant = function (c) {
      if (arguments.length) {
        return a(g$(b = +c), g_(b));
      } else {
        return b;
      }
    };
    return gO(c);
  }
  function g1() {
    var a = g0(gB());
    a.copy = function () {
      return gA(a, g1()).constant(a.constant());
    };
    return ft.apply(a, arguments);
  }
  function g2(a) {
    return function (b) {
      if (b < 0) {
        return -Math.pow(-b, a);
      } else {
        return Math.pow(b, a);
      }
    };
  }
  function g3(a) {
    if (a < 0) {
      return -Math.sqrt(-a);
    } else {
      return Math.sqrt(a);
    }
  }
  function g4(a) {
    if (a < 0) {
      return -a * a;
    } else {
      return a * a;
    }
  }
  function g5(a) {
    var b = a(gw, gw);
    var c = 1;
    b.exponent = function (b) {
      if (arguments.length) {
        if ((c = +b) == 1) {
          return a(gw, gw);
        } else if (c === 0.5) {
          return a(g3, g4);
        } else {
          return a(g2(c), g2(1 / c));
        }
      } else {
        return c;
      }
    };
    return gO(b);
  }
  function g6() {
    var a = g5(gB());
    a.copy = function () {
      return gA(a, g6()).exponent(a.exponent());
    };
    ft.apply(a, arguments);
    return a;
  }
  function g7() {
    return g6.apply(null, arguments).exponent(0.5);
  }
  function g8(a) {
    return Math.sign(a) * a * a;
  }
  function g9() {
    var a;
    var b = gC();
    var c = [0, 1];
    var d = false;
    function e(c) {
      var e;
      var f = Math.sign(e = b(c)) * Math.sqrt(Math.abs(e));
      if (isNaN(f)) {
        return a;
      } else if (d) {
        return Math.round(f);
      } else {
        return f;
      }
    }
    e.invert = function (a) {
      return b.invert(g8(a));
    };
    e.domain = function (a) {
      if (arguments.length) {
        b.domain(a);
        return e;
      } else {
        return b.domain();
      }
    };
    e.range = function (a) {
      if (arguments.length) {
        b.range((c = Array.from(a, gu)).map(g8));
        return e;
      } else {
        return c.slice();
      }
    };
    e.rangeRound = function (a) {
      return e.range(a).round(true);
    };
    e.round = function (a) {
      if (arguments.length) {
        d = !!a;
        return e;
      } else {
        return d;
      }
    };
    e.clamp = function (a) {
      if (arguments.length) {
        b.clamp(a);
        return e;
      } else {
        return b.clamp();
      }
    };
    e.unknown = function (b) {
      if (arguments.length) {
        a = b;
        return e;
      } else {
        return a;
      }
    };
    e.copy = function () {
      return g9(b.domain(), c).round(d).clamp(b.clamp()).unknown(a);
    };
    ft.apply(e, arguments);
    return gO(e);
  }
  function ha(a, b) {
    let c;
    if (b === undefined) {
      for (let b of a) {
        if (b != null && (c < b || c === undefined && b >= b)) {
          c = b;
        }
      }
    } else {
      let d = -1;
      for (let e of a) {
        if ((e = b(e, ++d, a)) != null && (c < e || c === undefined && e >= e)) {
          c = e;
        }
      }
    }
    return c;
  }
  function hb(a, b) {
    let c;
    if (b === undefined) {
      for (let b of a) {
        if (b != null && (c > b || c === undefined && b >= b)) {
          c = b;
        }
      }
    } else {
      let d = -1;
      for (let e of a) {
        if ((e = b(e, ++d, a)) != null && (c > e || c === undefined && e >= e)) {
          c = e;
        }
      }
    }
    return c;
  }
  function hc(a, b) {
    return (a == null || !(a >= a)) - (b == null || !(b >= b)) || (a < b ? -1 : +(a > b));
  }
  function hd(a, b, c) {
    let d = a[b];
    a[b] = a[c];
    a[c] = d;
  }
  function he() {
    var a;
    var b = [];
    var c = [];
    var d = [];
    function e() {
      var a = 0;
      var e = Math.max(1, c.length);
      for (d = Array(e - 1); ++a < e;) {
        d[a - 1] = function (a, b, c = fN) {
          if (!!(d = a.length) && !isNaN(b *= 1)) {
            if (b <= 0 || d < 2) {
              return +c(a[0], 0, a);
            }
            if (b >= 1) {
              return +c(a[d - 1], d - 1, a);
            }
            var d;
            var e = (d - 1) * b;
            var f = Math.floor(e);
            var g = +c(a[f], f, a);
            return g + (c(a[f + 1], f + 1, a) - g) * (e - f);
          }
        }(b, a / e);
      }
      return f;
    }
    function f(b) {
      if (b == null || isNaN(b *= 1)) {
        return a;
      } else {
        return c[fP(d, b)];
      }
    }
    f.invertExtent = function (a) {
      var e = c.indexOf(a);
      if (e < 0) {
        return [NaN, NaN];
      } else {
        return [e > 0 ? d[e - 1] : b[0], e < d.length ? d[e] : b[b.length - 1]];
      }
    };
    f.domain = function (a) {
      if (!arguments.length) {
        return b.slice();
      }
      b = [];
      for (let c of a) {
        if (c != null && !isNaN(c *= 1)) {
          b.push(c);
        }
      }
      b.sort(fJ);
      return e();
    };
    f.range = function (a) {
      if (arguments.length) {
        c = Array.from(a);
        return e();
      } else {
        return c.slice();
      }
    };
    f.unknown = function (b) {
      if (arguments.length) {
        a = b;
        return f;
      } else {
        return a;
      }
    };
    f.quantiles = function () {
      return d.slice();
    };
    f.copy = function () {
      return he().domain(b).range(c).unknown(a);
    };
    return ft.apply(f, arguments);
  }
  function hf() {
    var a;
    var b = 0;
    var c = 1;
    var d = 1;
    var e = [0.5];
    var f = [0, 1];
    function g(b) {
      if (b != null && b <= b) {
        return f[fP(e, b, 0, d)];
      } else {
        return a;
      }
    }
    function h() {
      var a = -1;
      for (e = Array(d); ++a < d;) {
        e[a] = ((a + 1) * c - (a - d) * b) / (d + 1);
      }
      return g;
    }
    g.domain = function (a) {
      if (arguments.length) {
        [b, c] = a;
        b *= 1;
        c *= 1;
        return h();
      } else {
        return [b, c];
      }
    };
    g.range = function (a) {
      if (arguments.length) {
        d = (f = Array.from(a)).length - 1;
        return h();
      } else {
        return f.slice();
      }
    };
    g.invertExtent = function (a) {
      var g = f.indexOf(a);
      if (g < 0) {
        return [NaN, NaN];
      } else if (g < 1) {
        return [b, e[0]];
      } else if (g >= d) {
        return [e[d - 1], c];
      } else {
        return [e[g - 1], e[g]];
      }
    };
    g.unknown = function (b) {
      if (arguments.length) {
        a = b;
      }
      return g;
    };
    g.thresholds = function () {
      return e.slice();
    };
    g.copy = function () {
      return hf().domain([b, c]).range(f).unknown(a);
    };
    return ft.apply(gO(g), arguments);
  }
  function hg() {
    var a;
    var b = [0.5];
    var c = [0, 1];
    var d = 1;
    function e(e) {
      if (e != null && e <= e) {
        return c[fP(b, e, 0, d)];
      } else {
        return a;
      }
    }
    e.domain = function (a) {
      if (arguments.length) {
        d = Math.min((b = Array.from(a)).length, c.length - 1);
        return e;
      } else {
        return b.slice();
      }
    };
    e.range = function (a) {
      if (arguments.length) {
        c = Array.from(a);
        d = Math.min(b.length, c.length - 1);
        return e;
      } else {
        return c.slice();
      }
    };
    e.invertExtent = function (a) {
      var d = c.indexOf(a);
      return [b[d - 1], b[d]];
    };
    e.unknown = function (b) {
      if (arguments.length) {
        a = b;
        return e;
      } else {
        return a;
      }
    };
    e.copy = function () {
      return hg().domain(b).range(c).unknown(a);
    };
    return ft.apply(e, arguments);
  }
  o = (n = function (a) {
    var b;
    var c;
    var d;
    var e = a.grouping === undefined || a.thousands === undefined ? gK : (b = gL.call(a.grouping, Number), c = a.thousands + "", function (a, d) {
      for (var e = a.length, f = [], g = 0, h = b[0], i = 0; e > 0 && h > 0 && (i + h + 1 > d && (h = Math.max(1, d - i)), f.push(a.substring(e -= h, e + h)), !((i += h + 1) > d));) {
        h = b[g = (g + 1) % b.length];
      }
      return f.reverse().join(c);
    });
    var f = a.currency === undefined ? "" : a.currency[0] + "";
    var g = a.currency === undefined ? "" : a.currency[1] + "";
    var h = a.decimal === undefined ? "." : a.decimal + "";
    var i = a.numerals === undefined ? gK : (d = gL.call(a.numerals, String), function (a) {
      return a.replace(/[0-9]/g, function (a) {
        return d[+a];
      });
    });
    var j = a.percent === undefined ? "%" : a.percent + "";
    var k = a.minus === undefined ? "−" : a.minus + "";
    var l = a.nan === undefined ? "NaN" : a.nan + "";
    function n(a, b) {
      var c = (a = gG(a)).fill;
      var d = a.align;
      var n = a.sign;
      var o = a.symbol;
      var p = a.zero;
      var q = a.width;
      var r = a.comma;
      var s = a.precision;
      var t = a.trim;
      var u = a.type;
      if (u === "n") {
        r = true;
        u = "g";
      } else if (!gJ[u]) {
        if (s === undefined) {
          s = 12;
        }
        t = true;
        u = "g";
      }
      if (p || c === "0" && d === "=") {
        p = true;
        c = "0";
        d = "=";
      }
      var v = (b && b.prefix !== undefined ? b.prefix : "") + (o === "$" ? f : o === "#" && /[boxX]/.test(u) ? "0" + u.toLowerCase() : "");
      var w = (o === "$" ? g : /[%p]/.test(u) ? j : "") + (b && b.suffix !== undefined ? b.suffix : "");
      var x = gJ[u];
      var y = /[defgprs%]/.test(u);
      function z(a) {
        var b;
        var f;
        var g;
        var j = v;
        var o = w;
        if (u === "c") {
          o = x(a) + o;
          a = "";
        } else {
          var z = (a *= 1) < 0 || 1 / a < 0;
          a = isNaN(a) ? l : x(Math.abs(a), s);
          if (t) {
            a = function (a) {
              var b;
              a: for (var c = a.length, d = 1, e = -1; d < c; ++d) {
                switch (a[d]) {
                  case ".":
                    e = b = d;
                    break;
                  case "0":
                    if (e === 0) {
                      e = d;
                    }
                    b = d;
                    break;
                  default:
                    if (!+a[d]) {
                      break a;
                    }
                    if (e > 0) {
                      e = 0;
                    }
                }
              }
              if (e > 0) {
                return a.slice(0, e) + a.slice(b + 1);
              } else {
                return a;
              }
            }(a);
          }
          if (z && +a == 0 && n !== "+") {
            z = false;
          }
          j = (z ? n === "(" ? n : k : n === "-" || n === "(" ? "" : n) + j;
          o = (u !== "s" || isNaN(a) || m === undefined ? "" : gM[8 + m / 3]) + o + (z && n === "(" ? ")" : "");
          if (y) {
            b = -1;
            f = a.length;
            while (++b < f) {
              if ((g = a.charCodeAt(b)) < 48 || g > 57) {
                o = (g === 46 ? h + a.slice(b + 1) : a.slice(b)) + o;
                a = a.slice(0, b);
                break;
              }
            }
          }
        }
        if (r && !p) {
          a = e(a, Infinity);
        }
        var A = j.length + a.length + o.length;
        var B = A < q ? Array(q - A + 1).join(c) : "";
        if (r && p) {
          a = e(B + a, B.length ? q - o.length : Infinity);
          B = "";
        }
        switch (d) {
          case "<":
            a = j + a + o + B;
            break;
          case "=":
            a = j + B + a + o;
            break;
          case "^":
            a = B.slice(0, A = B.length >> 1) + j + a + o + B.slice(A);
            break;
          default:
            a = B + j + a + o;
        }
        return i(a);
      }
      s = s === undefined ? 6 : /[gprs]/.test(u) ? Math.max(1, Math.min(21, s)) : Math.max(0, Math.min(20, s));
      z.toString = function () {
        return a + "";
      };
      return z;
    }
    return {
      format: n,
      formatPrefix: function (a, b) {
        var c = Math.max(-8, Math.min(8, Math.floor(gE(b) / 3))) * 3;
        var d = Math.pow(10, -c);
        var e = n(((a = gG(a)).type = "f", a), {
          suffix: gM[8 + c / 3]
        });
        return function (a) {
          return e(d * a);
        };
      }
    };
  }({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  })).format;
  p = n.formatPrefix;
  let hh = new Date();
  let hi = new Date();
  function hj(a, b, c, d) {
    function e(b) {
      a(b = arguments.length == 0 ? new Date() : new Date(+b));
      return b;
    }
    e.floor = b => {
      a(b = new Date(+b));
      return b;
    };
    e.ceil = c => {
      a(c = new Date(c - 1));
      b(c, 1);
      a(c);
      return c;
    };
    e.round = a => {
      let b = e(a);
      let c = e.ceil(a);
      if (a - b < c - a) {
        return b;
      } else {
        return c;
      }
    };
    e.offset = (a, c) => {
      b(a = new Date(+a), c == null ? 1 : Math.floor(c));
      return a;
    };
    e.range = (c, d, f) => {
      let g;
      let h = [];
      c = e.ceil(c);
      f = f == null ? 1 : Math.floor(f);
      if (!(c < d) || !(f > 0)) {
        return h;
      }
      do {
        h.push(g = new Date(+c));
        b(c, f);
        a(c);
      } while (g < c && c < d);
      return h;
    };
    e.filter = c => hj(b => {
      if (b >= b) {
        while (a(b), !c(b)) {
          b.setTime(b - 1);
        }
      }
    }, (a, d) => {
      if (a >= a) {
        if (d < 0) {
          while (++d <= 0) {
            while (b(a, -1), !c(a));
          }
        } else {
          while (--d >= 0) {
            while (b(a, 1), !c(a));
          }
        }
      }
    });
    if (c) {
      e.count = (b, d) => {
        hh.setTime(+b);
        hi.setTime(+d);
        a(hh);
        a(hi);
        return Math.floor(c(hh, hi));
      };
      e.every = a => isFinite(a = Math.floor(a)) && a > 0 ? a > 1 ? e.filter(d ? b => d(b) % a == 0 : b => e.count(0, b) % a == 0) : e : null;
    }
    return e;
  }
  let hk = hj(a => {
    a.setMonth(0, 1);
    a.setHours(0, 0, 0, 0);
  }, (a, b) => {
    a.setFullYear(a.getFullYear() + b);
  }, (a, b) => b.getFullYear() - a.getFullYear(), a => a.getFullYear());
  hk.every = a => isFinite(a = Math.floor(a)) && a > 0 ? hj(b => {
    b.setFullYear(Math.floor(b.getFullYear() / a) * a);
    b.setMonth(0, 1);
    b.setHours(0, 0, 0, 0);
  }, (b, c) => {
    b.setFullYear(b.getFullYear() + c * a);
  }) : null;
  hk.range;
  let hl = hj(a => {
    a.setUTCMonth(0, 1);
    a.setUTCHours(0, 0, 0, 0);
  }, (a, b) => {
    a.setUTCFullYear(a.getUTCFullYear() + b);
  }, (a, b) => b.getUTCFullYear() - a.getUTCFullYear(), a => a.getUTCFullYear());
  hl.every = a => isFinite(a = Math.floor(a)) && a > 0 ? hj(b => {
    b.setUTCFullYear(Math.floor(b.getUTCFullYear() / a) * a);
    b.setUTCMonth(0, 1);
    b.setUTCHours(0, 0, 0, 0);
  }, (b, c) => {
    b.setUTCFullYear(b.getUTCFullYear() + c * a);
  }) : null;
  hl.range;
  let hm = hj(a => {
    a.setDate(1);
    a.setHours(0, 0, 0, 0);
  }, (a, b) => {
    a.setMonth(a.getMonth() + b);
  }, (a, b) => b.getMonth() - a.getMonth() + (b.getFullYear() - a.getFullYear()) * 12, a => a.getMonth());
  hm.range;
  let hn = hj(a => {
    a.setUTCDate(1);
    a.setUTCHours(0, 0, 0, 0);
  }, (a, b) => {
    a.setUTCMonth(a.getUTCMonth() + b);
  }, (a, b) => b.getUTCMonth() - a.getUTCMonth() + (b.getUTCFullYear() - a.getUTCFullYear()) * 12, a => a.getUTCMonth());
  hn.range;
  function ho(a) {
    return hj(b => {
      b.setDate(b.getDate() - (b.getDay() + 7 - a) % 7);
      b.setHours(0, 0, 0, 0);
    }, (a, b) => {
      a.setDate(a.getDate() + b * 7);
    }, (a, b) => (b - a - (b.getTimezoneOffset() - a.getTimezoneOffset()) * 60000) / 604800000);
  }
  let hp = ho(0);
  let hq = ho(1);
  let hr = ho(2);
  let hs = ho(3);
  let ht = ho(4);
  let hu = ho(5);
  let hv = ho(6);
  function hw(a) {
    return hj(b => {
      b.setUTCDate(b.getUTCDate() - (b.getUTCDay() + 7 - a) % 7);
      b.setUTCHours(0, 0, 0, 0);
    }, (a, b) => {
      a.setUTCDate(a.getUTCDate() + b * 7);
    }, (a, b) => (b - a) / 604800000);
  }
  hp.range;
  hq.range;
  hr.range;
  hs.range;
  ht.range;
  hu.range;
  hv.range;
  let hx = hw(0);
  let hy = hw(1);
  let hz = hw(2);
  let hA = hw(3);
  let hB = hw(4);
  let hC = hw(5);
  let hD = hw(6);
  hx.range;
  hy.range;
  hz.range;
  hA.range;
  hB.range;
  hC.range;
  hD.range;
  let hE = hj(a => a.setHours(0, 0, 0, 0), (a, b) => a.setDate(a.getDate() + b), (a, b) => (b - a - (b.getTimezoneOffset() - a.getTimezoneOffset()) * 60000) / 86400000, a => a.getDate() - 1);
  hE.range;
  let hF = hj(a => {
    a.setUTCHours(0, 0, 0, 0);
  }, (a, b) => {
    a.setUTCDate(a.getUTCDate() + b);
  }, (a, b) => (b - a) / 86400000, a => a.getUTCDate() - 1);
  hF.range;
  let hG = hj(a => {
    a.setUTCHours(0, 0, 0, 0);
  }, (a, b) => {
    a.setUTCDate(a.getUTCDate() + b);
  }, (a, b) => (b - a) / 86400000, a => Math.floor(a / 86400000));
  hG.range;
  let hH = hj(a => {
    a.setTime(a - a.getMilliseconds() - a.getSeconds() * 1000 - a.getMinutes() * 60000);
  }, (a, b) => {
    a.setTime(+a + b * 3600000);
  }, (a, b) => (b - a) / 3600000, a => a.getHours());
  hH.range;
  let hI = hj(a => {
    a.setUTCMinutes(0, 0, 0);
  }, (a, b) => {
    a.setTime(+a + b * 3600000);
  }, (a, b) => (b - a) / 3600000, a => a.getUTCHours());
  hI.range;
  let hJ = hj(a => {
    a.setTime(a - a.getMilliseconds() - a.getSeconds() * 1000);
  }, (a, b) => {
    a.setTime(+a + b * 60000);
  }, (a, b) => (b - a) / 60000, a => a.getMinutes());
  hJ.range;
  let hK = hj(a => {
    a.setUTCSeconds(0, 0);
  }, (a, b) => {
    a.setTime(+a + b * 60000);
  }, (a, b) => (b - a) / 60000, a => a.getUTCMinutes());
  hK.range;
  let hL = hj(a => {
    a.setTime(a - a.getMilliseconds());
  }, (a, b) => {
    a.setTime(+a + b * 1000);
  }, (a, b) => (b - a) / 1000, a => a.getUTCSeconds());
  hL.range;
  let hM = hj(() => {}, (a, b) => {
    a.setTime(+a + b);
  }, (a, b) => b - a);
  function hN(a, b, c, d, e, f) {
    let g = [[hL, 1, 1000], [hL, 5, 5000], [hL, 15, 15000], [hL, 30, 30000], [f, 1, 60000], [f, 5, 300000], [f, 15, 900000], [f, 30, 1800000], [e, 1, 3600000], [e, 3, 10800000], [e, 6, 21600000], [e, 12, 43200000], [d, 1, 86400000], [d, 2, 172800000], [c, 1, 604800000], [b, 1, 2592000000], [b, 3, 7776000000], [a, 1, 31536000000]];
    function h(b, c, d) {
      let e = Math.abs(c - b) / d;
      let f = fL(([,, a]) => a).right(g, e);
      if (f === g.length) {
        return a.every(fI(b / 31536000000, c / 31536000000, d));
      }
      if (f === 0) {
        return hM.every(Math.max(fI(b, c, d), 1));
      }
      let [h, i] = g[e / g[f - 1][2] < g[f][2] / e ? f - 1 : f];
      return h.every(i);
    }
    return [function (a, b, c) {
      let d = b < a;
      if (d) {
        [a, b] = [b, a];
      }
      let e = c && typeof c.range == "function" ? c : h(a, b, c);
      let f = e ? e.range(a, +b + 1) : [];
      if (d) {
        return f.reverse();
      } else {
        return f;
      }
    }, h];
  }
  hM.every = a => isFinite(a = Math.floor(a)) && a > 0 ? a > 1 ? hj(b => {
    b.setTime(Math.floor(b / a) * a);
  }, (b, c) => {
    b.setTime(+b + c * a);
  }, (b, c) => (c - b) / a) : hM : null;
  hM.range;
  let [hO, hP] = hN(hl, hn, hx, hG, hI, hK);
  let [hQ, hR] = hN(hk, hm, hp, hE, hH, hJ);
  function hS(a) {
    if (a.y >= 0 && a.y < 100) {
      var b = new Date(-1, a.m, a.d, a.H, a.M, a.S, a.L);
      b.setFullYear(a.y);
      return b;
    }
    return new Date(a.y, a.m, a.d, a.H, a.M, a.S, a.L);
  }
  function hT(a) {
    if (a.y >= 0 && a.y < 100) {
      var b = new Date(Date.UTC(-1, a.m, a.d, a.H, a.M, a.S, a.L));
      b.setUTCFullYear(a.y);
      return b;
    }
    return new Date(Date.UTC(a.y, a.m, a.d, a.H, a.M, a.S, a.L));
  }
  function hU(a, b, c) {
    return {
      y: a,
      m: b,
      d: c,
      H: 0,
      M: 0,
      S: 0,
      L: 0
    };
  }
  var hV = {
    "-": "",
    _: " ",
    0: "0"
  };
  var hW = /^\s*\d+/;
  var hX = /^%/;
  var hY = /[\\^$*+?|[\]().{}]/g;
  function hZ(a, b, c) {
    var d = a < 0 ? "-" : "";
    var e = (d ? -a : a) + "";
    var f = e.length;
    return d + (f < c ? Array(c - f + 1).join(b) + e : e);
  }
  function h$(a) {
    return a.replace(hY, "\\$&");
  }
  function h_(a) {
    return RegExp("^(?:" + a.map(h$).join("|") + ")", "i");
  }
  function h0(a) {
    return new Map(a.map((a, b) => [a.toLowerCase(), b]));
  }
  function h1(a, b, c) {
    var d = hW.exec(b.slice(c, c + 1));
    if (d) {
      a.w = +d[0];
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function h2(a, b, c) {
    var d = hW.exec(b.slice(c, c + 1));
    if (d) {
      a.u = +d[0];
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function h3(a, b, c) {
    var d = hW.exec(b.slice(c, c + 2));
    if (d) {
      a.U = +d[0];
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function h4(a, b, c) {
    var d = hW.exec(b.slice(c, c + 2));
    if (d) {
      a.V = +d[0];
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function h5(a, b, c) {
    var d = hW.exec(b.slice(c, c + 2));
    if (d) {
      a.W = +d[0];
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function h6(a, b, c) {
    var d = hW.exec(b.slice(c, c + 4));
    if (d) {
      a.y = +d[0];
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function h7(a, b, c) {
    var d = hW.exec(b.slice(c, c + 2));
    if (d) {
      a.y = +d[0] + (+d[0] > 68 ? 1900 : 2000);
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function h8(a, b, c) {
    var d = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(b.slice(c, c + 6));
    if (d) {
      a.Z = d[1] ? 0 : -(d[2] + (d[3] || "00"));
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function h9(a, b, c) {
    var d = hW.exec(b.slice(c, c + 1));
    if (d) {
      a.q = d[0] * 3 - 3;
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function ia(a, b, c) {
    var d = hW.exec(b.slice(c, c + 2));
    if (d) {
      a.m = d[0] - 1;
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function ib(a, b, c) {
    var d = hW.exec(b.slice(c, c + 2));
    if (d) {
      a.d = +d[0];
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function ic(a, b, c) {
    var d = hW.exec(b.slice(c, c + 3));
    if (d) {
      a.m = 0;
      a.d = +d[0];
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function id(a, b, c) {
    var d = hW.exec(b.slice(c, c + 2));
    if (d) {
      a.H = +d[0];
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function ie(a, b, c) {
    var d = hW.exec(b.slice(c, c + 2));
    if (d) {
      a.M = +d[0];
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function ig(a, b, c) {
    var d = hW.exec(b.slice(c, c + 2));
    if (d) {
      a.S = +d[0];
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function ih(a, b, c) {
    var d = hW.exec(b.slice(c, c + 3));
    if (d) {
      a.L = +d[0];
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function ii(a, b, c) {
    var d = hW.exec(b.slice(c, c + 6));
    if (d) {
      a.L = Math.floor(d[0] / 1000);
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function ij(a, b, c) {
    var d = hX.exec(b.slice(c, c + 1));
    if (d) {
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function ik(a, b, c) {
    var d = hW.exec(b.slice(c));
    if (d) {
      a.Q = +d[0];
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function il(a, b, c) {
    var d = hW.exec(b.slice(c));
    if (d) {
      a.s = +d[0];
      return c + d[0].length;
    } else {
      return -1;
    }
  }
  function im(a, b) {
    return hZ(a.getDate(), b, 2);
  }
  function io(a, b) {
    return hZ(a.getHours(), b, 2);
  }
  function ip(a, b) {
    return hZ(a.getHours() % 12 || 12, b, 2);
  }
  function iq(a, b) {
    return hZ(1 + hE.count(hk(a), a), b, 3);
  }
  function ir(a, b) {
    return hZ(a.getMilliseconds(), b, 3);
  }
  function is(a, b) {
    return ir(a, b) + "000";
  }
  function it(a, b) {
    return hZ(a.getMonth() + 1, b, 2);
  }
  function iu(a, b) {
    return hZ(a.getMinutes(), b, 2);
  }
  function iv(a, b) {
    return hZ(a.getSeconds(), b, 2);
  }
  function iw(a) {
    var b = a.getDay();
    if (b === 0) {
      return 7;
    } else {
      return b;
    }
  }
  function ix(a, b) {
    return hZ(hp.count(hk(a) - 1, a), b, 2);
  }
  function iy(a) {
    var b = a.getDay();
    if (b >= 4 || b === 0) {
      return ht(a);
    } else {
      return ht.ceil(a);
    }
  }
  function iz(a, b) {
    a = iy(a);
    return hZ(ht.count(hk(a), a) + (hk(a).getDay() === 4), b, 2);
  }
  function iA(a) {
    return a.getDay();
  }
  function iB(a, b) {
    return hZ(hq.count(hk(a) - 1, a), b, 2);
  }
  function iC(a, b) {
    return hZ(a.getFullYear() % 100, b, 2);
  }
  function iD(a, b) {
    return hZ((a = iy(a)).getFullYear() % 100, b, 2);
  }
  function iE(a, b) {
    return hZ(a.getFullYear() % 10000, b, 4);
  }
  function iF(a, b) {
    var c = a.getDay();
    return hZ((a = c >= 4 || c === 0 ? ht(a) : ht.ceil(a)).getFullYear() % 10000, b, 4);
  }
  function iG(a) {
    var b = a.getTimezoneOffset();
    return (b > 0 ? "-" : (b *= -1, "+")) + hZ(b / 60 | 0, "0", 2) + hZ(b % 60, "0", 2);
  }
  function iH(a, b) {
    return hZ(a.getUTCDate(), b, 2);
  }
  function iI(a, b) {
    return hZ(a.getUTCHours(), b, 2);
  }
  function iJ(a, b) {
    return hZ(a.getUTCHours() % 12 || 12, b, 2);
  }
  function iK(a, b) {
    return hZ(1 + hF.count(hl(a), a), b, 3);
  }
  function iL(a, b) {
    return hZ(a.getUTCMilliseconds(), b, 3);
  }
  function iM(a, b) {
    return iL(a, b) + "000";
  }
  function iN(a, b) {
    return hZ(a.getUTCMonth() + 1, b, 2);
  }
  function iO(a, b) {
    return hZ(a.getUTCMinutes(), b, 2);
  }
  function iP(a, b) {
    return hZ(a.getUTCSeconds(), b, 2);
  }
  function iQ(a) {
    var b = a.getUTCDay();
    if (b === 0) {
      return 7;
    } else {
      return b;
    }
  }
  function iR(a, b) {
    return hZ(hx.count(hl(a) - 1, a), b, 2);
  }
  function iS(a) {
    var b = a.getUTCDay();
    if (b >= 4 || b === 0) {
      return hB(a);
    } else {
      return hB.ceil(a);
    }
  }
  function iT(a, b) {
    a = iS(a);
    return hZ(hB.count(hl(a), a) + (hl(a).getUTCDay() === 4), b, 2);
  }
  function iU(a) {
    return a.getUTCDay();
  }
  function iV(a, b) {
    return hZ(hy.count(hl(a) - 1, a), b, 2);
  }
  function iW(a, b) {
    return hZ(a.getUTCFullYear() % 100, b, 2);
  }
  function iX(a, b) {
    return hZ((a = iS(a)).getUTCFullYear() % 100, b, 2);
  }
  function iY(a, b) {
    return hZ(a.getUTCFullYear() % 10000, b, 4);
  }
  function iZ(a, b) {
    var c = a.getUTCDay();
    return hZ((a = c >= 4 || c === 0 ? hB(a) : hB.ceil(a)).getUTCFullYear() % 10000, b, 4);
  }
  function i$() {
    return "+0000";
  }
  function i_() {
    return "%";
  }
  function i0(a) {
    return +a;
  }
  function i1(a) {
    return Math.floor(a / 1000);
  }
  function i2(a) {
    return new Date(a);
  }
  function i3(a) {
    if (a instanceof Date) {
      return +a;
    } else {
      return +new Date(+a);
    }
  }
  function i4(a, b, c, d, e, f, g, h, i, j) {
    var k = gC();
    var l = k.invert;
    var m = k.domain;
    var n = j(".%L");
    var o = j(":%S");
    var p = j("%I:%M");
    var q = j("%I %p");
    var r = j("%a %d");
    var s = j("%b %d");
    var t = j("%B");
    var u = j("%Y");
    function v(a) {
      return (i(a) < a ? n : h(a) < a ? o : g(a) < a ? p : f(a) < a ? q : d(a) < a ? e(a) < a ? r : s : c(a) < a ? t : u)(a);
    }
    k.invert = function (a) {
      return new Date(l(a));
    };
    k.domain = function (a) {
      if (arguments.length) {
        return m(Array.from(a, i3));
      } else {
        return m().map(i2);
      }
    };
    k.ticks = function (b) {
      var c = m();
      return a(c[0], c[c.length - 1], b == null ? 10 : b);
    };
    k.tickFormat = function (a, b) {
      if (b == null) {
        return v;
      } else {
        return j(b);
      }
    };
    k.nice = function (a) {
      var c = m();
      if (!a || typeof a.range != "function") {
        a = b(c[0], c[c.length - 1], a == null ? 10 : a);
      }
      if (a) {
        return m(gR(c, a));
      } else {
        return k;
      }
    };
    k.copy = function () {
      return gA(k, i4(a, b, c, d, e, f, g, h, i, j));
    };
    return k;
  }
  function i5() {
    return ft.apply(i4(hQ, hR, hk, hm, hp, hE, hH, hJ, hL, r).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
  }
  function i6() {
    return ft.apply(i4(hO, hP, hl, hn, hx, hF, hI, hK, hL, s).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
  }
  function i7() {
    var a;
    var b;
    var c;
    var d;
    var e;
    var f = 0;
    var g = 1;
    var h = gw;
    var i = false;
    function j(b) {
      if (b == null || isNaN(b *= 1)) {
        return e;
      } else {
        return h(c === 0 ? 0.5 : (b = (d(b) - a) * c, i ? Math.max(0, Math.min(1, b)) : b));
      }
    }
    function k(a) {
      return function (b) {
        var c;
        var d;
        if (arguments.length) {
          [c, d] = b;
          h = a(c, d);
          return j;
        } else {
          return [h(0), h(1)];
        }
      };
    }
    j.domain = function (e) {
      if (arguments.length) {
        [f, g] = e;
        a = d(f *= 1);
        b = d(g *= 1);
        c = a === b ? 0 : 1 / (b - a);
        return j;
      } else {
        return [f, g];
      }
    };
    j.clamp = function (a) {
      if (arguments.length) {
        i = !!a;
        return j;
      } else {
        return i;
      }
    };
    j.interpolator = function (a) {
      if (arguments.length) {
        h = a;
        return j;
      } else {
        return h;
      }
    };
    j.range = k(gs);
    j.rangeRound = k(gt);
    j.unknown = function (a) {
      if (arguments.length) {
        e = a;
        return j;
      } else {
        return e;
      }
    };
    return function (e) {
      d = e;
      a = e(f);
      b = e(g);
      c = a === b ? 0 : 1 / (b - a);
      return j;
    };
  }
  function i8(a, b) {
    return b.domain(a.domain()).interpolator(a.interpolator()).clamp(a.clamp()).unknown(a.unknown());
  }
  function i9() {
    var a = gO(i7()(gw));
    a.copy = function () {
      return i8(a, i9());
    };
    return fu.apply(a, arguments);
  }
  function ja() {
    var a = gY(i7()).domain([1, 10]);
    a.copy = function () {
      return i8(a, ja()).base(a.base());
    };
    return fu.apply(a, arguments);
  }
  function jb() {
    var a = g0(i7());
    a.copy = function () {
      return i8(a, jb()).constant(a.constant());
    };
    return fu.apply(a, arguments);
  }
  function jc() {
    var a = g5(i7());
    a.copy = function () {
      return i8(a, jc()).exponent(a.exponent());
    };
    return fu.apply(a, arguments);
  }
  function jd() {
    return jc.apply(null, arguments).exponent(0.5);
  }
  function je() {
    var a = [];
    var b = gw;
    function c(c) {
      if (c != null && !isNaN(c *= 1)) {
        return b((fP(a, c, 1) - 1) / (a.length - 1));
      }
    }
    c.domain = function (b) {
      if (!arguments.length) {
        return a.slice();
      }
      a = [];
      for (let c of b) {
        if (c != null && !isNaN(c *= 1)) {
          a.push(c);
        }
      }
      a.sort(fJ);
      return c;
    };
    c.interpolator = function (a) {
      if (arguments.length) {
        b = a;
        return c;
      } else {
        return b;
      }
    };
    c.range = function () {
      return a.map((c, d) => b(d / (a.length - 1)));
    };
    c.quantiles = function (b) {
      return Array.from({
        length: b + 1
      }, (c, d) => function (a, b) {
        if (!!(c = (a = Float64Array.from(function* (a, b) {
          if (b === undefined) {
            for (let b of a) {
              if (b != null && (b *= 1) >= b) {
                yield b;
              }
            }
          } else {
            let c = -1;
            for (let d of a) {
              if ((d = b(d, ++c, a)) != null && (d *= 1) >= d) {
                yield d;
              }
            }
          }
        }(a, undefined))).length) && !isNaN(b *= 1)) {
          if (b <= 0 || c < 2) {
            return hb(a);
          }
          if (b >= 1) {
            return ha(a);
          }
          var c;
          var d = (c - 1) * b;
          var e = Math.floor(d);
          var f = ha(function a(b, c, d = 0, e = Infinity, f) {
            c = Math.floor(c);
            d = Math.floor(Math.max(0, d));
            e = Math.floor(Math.min(b.length - 1, e));
            if (!(d <= c) || !(c <= e)) {
              return b;
            }
            for (f = f === undefined ? hc : function (a = fJ) {
              if (a === fJ) {
                return hc;
              }
              if (typeof a != "function") {
                throw TypeError("compare is not a function");
              }
              return (b, c) => {
                let d = a(b, c);
                if (d || d === 0) {
                  return d;
                } else {
                  return (a(c, c) === 0) - (a(b, b) === 0);
                }
              };
            }(f); e > d;) {
              if (e - d > 600) {
                let g = e - d + 1;
                let h = c - d + 1;
                let i = Math.log(g);
                let j = Math.exp(i * 2 / 3) * 0.5;
                let k = Math.sqrt(i * j * (g - j) / g) * 0.5 * (h - g / 2 < 0 ? -1 : 1);
                let l = Math.max(d, Math.floor(c - h * j / g + k));
                let m = Math.min(e, Math.floor(c + (g - h) * j / g + k));
                a(b, c, l, m, f);
              }
              let g = b[c];
              let h = d;
              let i = e;
              hd(b, d, c);
              if (f(b[e], g) > 0) {
                hd(b, d, e);
              }
              while (h < i) {
                hd(b, h, i);
                ++h;
                --i;
                while (f(b[h], g) < 0) {
                  ++h;
                }
                while (f(b[i], g) > 0) {
                  --i;
                }
              }
              if (f(b[d], g) === 0) {
                hd(b, d, i);
              } else {
                hd(b, ++i, e);
              }
              if (i <= c) {
                d = i + 1;
              }
              if (c <= i) {
                e = i - 1;
              }
            }
            return b;
          }(a, e).subarray(0, e + 1));
          return f + (hb(a.subarray(e + 1)) - f) * (d - e);
        }
      }(a, d / b));
    };
    c.copy = function () {
      return je(b).domain(a);
    };
    return fu.apply(c, arguments);
  }
  function jf() {
    var a;
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h = 0;
    var i = 0.5;
    var j = 1;
    var k = 1;
    var l = gw;
    var m = false;
    function n(a) {
      if (isNaN(a *= 1)) {
        return g;
      } else {
        a = 0.5 + ((a = +f(a)) - b) * (k * a < k * b ? d : e);
        return l(m ? Math.max(0, Math.min(1, a)) : a);
      }
    }
    function o(a) {
      return function (b) {
        var c;
        var d;
        var e;
        if (arguments.length) {
          [c, d, e] = b;
          l = function (a, b) {
            if (b === undefined) {
              b = a;
              a = gs;
            }
            for (var c = 0, d = b.length - 1, e = b[0], f = Array(d < 0 ? 0 : d); c < d;) {
              f[c] = a(e, e = b[++c]);
            }
            return function (a) {
              var b = Math.max(0, Math.min(d - 1, Math.floor(a *= d)));
              return f[b](a - b);
            };
          }(a, [c, d, e]);
          return n;
        } else {
          return [l(0), l(0.5), l(1)];
        }
      };
    }
    n.domain = function (g) {
      if (arguments.length) {
        [h, i, j] = g;
        a = f(h *= 1);
        b = f(i *= 1);
        c = f(j *= 1);
        d = a === b ? 0 : 0.5 / (b - a);
        e = b === c ? 0 : 0.5 / (c - b);
        k = b < a ? -1 : 1;
        return n;
      } else {
        return [h, i, j];
      }
    };
    n.clamp = function (a) {
      if (arguments.length) {
        m = !!a;
        return n;
      } else {
        return m;
      }
    };
    n.interpolator = function (a) {
      if (arguments.length) {
        l = a;
        return n;
      } else {
        return l;
      }
    };
    n.range = o(gs);
    n.rangeRound = o(gt);
    n.unknown = function (a) {
      if (arguments.length) {
        g = a;
        return n;
      } else {
        return g;
      }
    };
    return function (g) {
      f = g;
      a = g(h);
      b = g(i);
      c = g(j);
      d = a === b ? 0 : 0.5 / (b - a);
      e = b === c ? 0 : 0.5 / (c - b);
      k = b < a ? -1 : 1;
      return n;
    };
  }
  function jg() {
    var a = gO(jf()(gw));
    a.copy = function () {
      return i8(a, jg());
    };
    return fu.apply(a, arguments);
  }
  function jh() {
    var a = gY(jf()).domain([0.1, 1, 10]);
    a.copy = function () {
      return i8(a, jh()).base(a.base());
    };
    return fu.apply(a, arguments);
  }
  function ji() {
    var a = g0(jf());
    a.copy = function () {
      return i8(a, ji()).constant(a.constant());
    };
    return fu.apply(a, arguments);
  }
  function jj() {
    var a = g5(jf());
    a.copy = function () {
      return i8(a, jj()).exponent(a.exponent());
    };
    return fu.apply(a, arguments);
  }
  function jk() {
    return jj.apply(null, arguments).exponent(0.5);
  }
  r = (q = function (a) {
    var b = a.dateTime;
    var c = a.date;
    var d = a.time;
    var e = a.periods;
    var f = a.days;
    var g = a.shortDays;
    var h = a.months;
    var i = a.shortMonths;
    var j = h_(e);
    var k = h0(e);
    var l = h_(f);
    var m = h0(f);
    var n = h_(g);
    var o = h0(g);
    var p = h_(h);
    var q = h0(h);
    var r = h_(i);
    var s = h0(i);
    var t = {
      a: function (a) {
        return g[a.getDay()];
      },
      A: function (a) {
        return f[a.getDay()];
      },
      b: function (a) {
        return i[a.getMonth()];
      },
      B: function (a) {
        return h[a.getMonth()];
      },
      c: null,
      d: im,
      e: im,
      f: is,
      g: iD,
      G: iF,
      H: io,
      I: ip,
      j: iq,
      L: ir,
      m: it,
      M: iu,
      p: function (a) {
        return e[+(a.getHours() >= 12)];
      },
      q: function (a) {
        return 1 + ~~(a.getMonth() / 3);
      },
      Q: i0,
      s: i1,
      S: iv,
      u: iw,
      U: ix,
      V: iz,
      w: iA,
      W: iB,
      x: null,
      X: null,
      y: iC,
      Y: iE,
      Z: iG,
      "%": i_
    };
    var u = {
      a: function (a) {
        return g[a.getUTCDay()];
      },
      A: function (a) {
        return f[a.getUTCDay()];
      },
      b: function (a) {
        return i[a.getUTCMonth()];
      },
      B: function (a) {
        return h[a.getUTCMonth()];
      },
      c: null,
      d: iH,
      e: iH,
      f: iM,
      g: iX,
      G: iZ,
      H: iI,
      I: iJ,
      j: iK,
      L: iL,
      m: iN,
      M: iO,
      p: function (a) {
        return e[+(a.getUTCHours() >= 12)];
      },
      q: function (a) {
        return 1 + ~~(a.getUTCMonth() / 3);
      },
      Q: i0,
      s: i1,
      S: iP,
      u: iQ,
      U: iR,
      V: iT,
      w: iU,
      W: iV,
      x: null,
      X: null,
      y: iW,
      Y: iY,
      Z: i$,
      "%": i_
    };
    var v = {
      a: function (a, b, c) {
        var d = n.exec(b.slice(c));
        if (d) {
          a.w = o.get(d[0].toLowerCase());
          return c + d[0].length;
        } else {
          return -1;
        }
      },
      A: function (a, b, c) {
        var d = l.exec(b.slice(c));
        if (d) {
          a.w = m.get(d[0].toLowerCase());
          return c + d[0].length;
        } else {
          return -1;
        }
      },
      b: function (a, b, c) {
        var d = r.exec(b.slice(c));
        if (d) {
          a.m = s.get(d[0].toLowerCase());
          return c + d[0].length;
        } else {
          return -1;
        }
      },
      B: function (a, b, c) {
        var d = p.exec(b.slice(c));
        if (d) {
          a.m = q.get(d[0].toLowerCase());
          return c + d[0].length;
        } else {
          return -1;
        }
      },
      c: function (a, c, d) {
        return y(a, b, c, d);
      },
      d: ib,
      e: ib,
      f: ii,
      g: h7,
      G: h6,
      H: id,
      I: id,
      j: ic,
      L: ih,
      m: ia,
      M: ie,
      p: function (a, b, c) {
        var d = j.exec(b.slice(c));
        if (d) {
          a.p = k.get(d[0].toLowerCase());
          return c + d[0].length;
        } else {
          return -1;
        }
      },
      q: h9,
      Q: ik,
      s: il,
      S: ig,
      u: h2,
      U: h3,
      V: h4,
      w: h1,
      W: h5,
      x: function (a, b, d) {
        return y(a, c, b, d);
      },
      X: function (a, b, c) {
        return y(a, d, b, c);
      },
      y: h7,
      Y: h6,
      Z: h8,
      "%": ij
    };
    function w(a, b) {
      return function (c) {
        var d;
        var e;
        var f;
        var g = [];
        var h = -1;
        var i = 0;
        var j = a.length;
        for (c instanceof Date || (c = new Date(+c)); ++h < j;) {
          if (a.charCodeAt(h) === 37) {
            g.push(a.slice(i, h));
            if ((e = hV[d = a.charAt(++h)]) != null) {
              d = a.charAt(++h);
            } else {
              e = d === "e" ? " " : "0";
            }
            if (f = b[d]) {
              d = f(c, e);
            }
            g.push(d);
            i = h + 1;
          }
        }
        g.push(a.slice(i, h));
        return g.join("");
      };
    }
    function x(a, b) {
      return function (c) {
        var d;
        var e;
        var f = hU(1900, undefined, 1);
        if (y(f, a, c += "", 0) != c.length) {
          return null;
        }
        if ("Q" in f) {
          return new Date(f.Q);
        }
        if ("s" in f) {
          return new Date(f.s * 1000 + ("L" in f ? f.L : 0));
        }
        if (!!b && !("Z" in f)) {
          f.Z = 0;
        }
        if ("p" in f) {
          f.H = f.H % 12 + f.p * 12;
        }
        if (f.m === undefined) {
          f.m = "q" in f ? f.q : 0;
        }
        if ("V" in f) {
          if (f.V < 1 || f.V > 53) {
            return null;
          }
          if (!("w" in f)) {
            f.w = 1;
          }
          if ("Z" in f) {
            d = (e = (d = hT(hU(f.y, 0, 1))).getUTCDay()) > 4 || e === 0 ? hy.ceil(d) : hy(d);
            d = hF.offset(d, (f.V - 1) * 7);
            f.y = d.getUTCFullYear();
            f.m = d.getUTCMonth();
            f.d = d.getUTCDate() + (f.w + 6) % 7;
          } else {
            d = (e = (d = hS(hU(f.y, 0, 1))).getDay()) > 4 || e === 0 ? hq.ceil(d) : hq(d);
            d = hE.offset(d, (f.V - 1) * 7);
            f.y = d.getFullYear();
            f.m = d.getMonth();
            f.d = d.getDate() + (f.w + 6) % 7;
          }
        } else if ("W" in f || "U" in f) {
          if (!("w" in f)) {
            f.w = "u" in f ? f.u % 7 : +("W" in f);
          }
          e = "Z" in f ? hT(hU(f.y, 0, 1)).getUTCDay() : hS(hU(f.y, 0, 1)).getDay();
          f.m = 0;
          f.d = "W" in f ? (f.w + 6) % 7 + f.W * 7 - (e + 5) % 7 : f.w + f.U * 7 - (e + 6) % 7;
        }
        if ("Z" in f) {
          f.H += f.Z / 100 | 0;
          f.M += f.Z % 100;
          return hT(f);
        } else {
          return hS(f);
        }
      };
    }
    function y(a, b, c, d) {
      var e;
      var f;
      for (var g = 0, h = b.length, i = c.length; g < h;) {
        if (d >= i) {
          return -1;
        }
        if ((e = b.charCodeAt(g++)) === 37) {
          if (!(f = v[(e = b.charAt(g++)) in hV ? b.charAt(g++) : e]) || (d = f(a, c, d)) < 0) {
            return -1;
          }
        } else if (e != c.charCodeAt(d++)) {
          return -1;
        }
      }
      return d;
    }
    t.x = w(c, t);
    t.X = w(d, t);
    t.c = w(b, t);
    u.x = w(c, u);
    u.X = w(d, u);
    u.c = w(b, u);
    return {
      format: function (a) {
        var b = w(a += "", t);
        b.toString = function () {
          return a;
        };
        return b;
      },
      parse: function (a) {
        var b = x(a += "", false);
        b.toString = function () {
          return a;
        };
        return b;
      },
      utcFormat: function (a) {
        var b = w(a += "", u);
        b.toString = function () {
          return a;
        };
        return b;
      },
      utcParse: function (a) {
        var b = x(a += "", true);
        b.toString = function () {
          return a;
        };
        return b;
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
  q.parse;
  s = q.utcFormat;
  q.utcParse;
  a.s(["scaleBand", 0, fA, "scaleDiverging", 0, jg, "scaleDivergingLog", 0, jh, "scaleDivergingPow", 0, jj, "scaleDivergingSqrt", 0, jk, "scaleDivergingSymlog", 0, ji, "scaleIdentity", 0, gQ, "scaleImplicit", 0, fy, "scaleLinear", 0, gP, "scaleLog", 0, gZ, "scaleOrdinal", 0, fz, "scalePoint", 0, fB, "scalePow", 0, g6, "scaleQuantile", 0, he, "scaleQuantize", 0, hf, "scaleRadial", 0, g9, "scaleSequential", 0, i9, "scaleSequentialLog", 0, ja, "scaleSequentialPow", 0, jc, "scaleSequentialQuantile", 0, je, "scaleSequentialSqrt", 0, jd, "scaleSequentialSymlog", 0, jb, "scaleSqrt", 0, g7, "scaleSymlog", 0, g1, "scaleThreshold", 0, hg, "scaleTime", 0, i5, "scaleUtc", 0, i6, "tickFormat", 0, gN], 8339);
  a.i(8339);
  a.s(["scaleBand", 0, fA, "scaleDiverging", 0, jg, "scaleDivergingLog", 0, jh, "scaleDivergingPow", 0, jj, "scaleDivergingSqrt", 0, jk, "scaleDivergingSymlog", 0, ji, "scaleIdentity", 0, gQ, "scaleImplicit", 0, fy, "scaleLinear", 0, gP, "scaleLog", 0, gZ, "scaleOrdinal", 0, fz, "scalePoint", 0, fB, "scalePow", 0, g6, "scaleQuantile", 0, he, "scaleQuantize", 0, hf, "scaleRadial", 0, g9, "scaleSequential", 0, i9, "scaleSequentialLog", 0, ja, "scaleSequentialPow", 0, jc, "scaleSequentialQuantile", 0, je, "scaleSequentialSqrt", 0, jd, "scaleSequentialSymlog", 0, jb, "scaleSqrt", 0, g7, "scaleSymlog", 0, g1, "scaleThreshold", 0, hg, "scaleTime", 0, i5, "scaleUtc", 0, i6, "tickFormat", 0, gN], 79086);
  var jl = a.i(79086);
  function jm(a, b, c) {
    if (typeof a == "function") {
      return a.copy().domain(b).range(c);
    }
    if (a != null) {
      var d = function (a) {
        if (a in jl && typeof jl[a] == "function") {
          return jl[a]();
        }
        var b = `scale${aT(a)}`;
        if (b in jl && typeof jl[b] == "function") {
          return jl[b]();
        }
      }(a);
      if (d != null) {
        d.domain(b).range(c);
        return d;
      }
    }
  }
  function jn(a, b, c, d) {
    if (c != null && d != null) {
      if (typeof a.scale == "function") {
        return jm(a.scale, c, d);
      } else {
        return jm(b, c, d);
      }
    }
  }
  var jo = (a, b, c) => {
    if (a != null) {
      var d = a.scale;
      var e = a.type;
      if (d === "auto") {
        if (e === "category" && c && (c.indexOf("LineChart") >= 0 || c.indexOf("AreaChart") >= 0 || c.indexOf("ComposedChart") >= 0 && !b)) {
          return "point";
        } else if (e === "category") {
          return "band";
        } else {
          return "linear";
        }
      }
      if (typeof d == "string") {
        if (`scale${aT(d)}` in jl) {
          return d;
        } else {
          return "point";
        }
      }
    }
  };
  function jp(a, b) {
    if (a) {
      var c = b ?? a.domain();
      var d = c.map(b => {
        return a(b) ?? 0;
      });
      var e = a.range();
      if (c.length !== 0 && !(e.length < 2)) {
        return a => {
          var f = function (a, b) {
            for (var c = 0, d = a.length, e = a[0] < a[a.length - 1]; c < d;) {
              var f = Math.floor((c + d) / 2);
              if (e ? a[f] < b : a[f] > b) {
                c = f + 1;
              } else {
                d = f;
              }
            }
            return c;
          }(d, a);
          if (f <= 0) {
            return c[0];
          } else if (f >= c.length) {
            return c[c.length - 1];
          } else if (Math.abs(a - (d[f - 1] ?? 0)) <= Math.abs(a - (d[f] ?? 0))) {
            return c[f - 1];
          } else {
            return c[f];
          }
        };
      }
    }
  }
  function jq(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function jr(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        jq(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        jq(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  function js(a, b) {
    return function (a) {
      if (Array.isArray(a)) {
        return a;
      }
    }(a) || function (a, b) {
      var c = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (c != null) {
        var d;
        var e;
        var f;
        var g;
        var h = [];
        var i = true;
        var j = false;
        try {
          f = (c = c.call(a)).next;
          if (b === 0) {
            if (Object(c) !== c) {
              return;
            }
            i = false;
          } else {
            for (; !(i = (d = f.call(c)).done) && (h.push(d.value), h.length !== b); i = true);
          }
        } catch (a) {
          j = true;
          e = a;
        } finally {
          try {
            if (!i && c.return != null && (g = c.return(), Object(g) !== g)) {
              return;
            }
          } finally {
            if (j) {
              throw e;
            }
          }
        }
        return h;
      }
    }(a, b) || function (a, b) {
      if (a) {
        if (typeof a == "string") {
          return jt(a, b);
        }
        var c = {}.toString.call(a).slice(8, -1);
        if (c === "Object" && a.constructor) {
          c = a.constructor.name;
        }
        if (c === "Map" || c === "Set") {
          return Array.from(a);
        } else if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) {
          return jt(a, b);
        } else {
          return undefined;
        }
      }
    }(a, b) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function jt(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  var ju = [0, "auto"];
  var jv = {
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
  var jw = (a, b) => a.cartesianAxis.xAxis[b];
  var jx = (a, b) => {
    var c = jw(a, b);
    if (c == null) {
      return jv;
    } else {
      return c;
    }
  };
  var jy = {
    allowDataOverflow: false,
    allowDecimals: true,
    allowDuplicatedCategory: true,
    angle: 0,
    dataKey: undefined,
    domain: ju,
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
  var jz = (a, b) => a.cartesianAxis.yAxis[b];
  var jA = (a, b) => {
    var c = jz(a, b);
    if (c == null) {
      return jy;
    } else {
      return c;
    }
  };
  var jB = {
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
  var jC = (a, b) => {
    var c = a.cartesianAxis.zAxis[b];
    if (c == null) {
      return jB;
    } else {
      return c;
    }
  };
  var jD = (a, b, c) => {
    switch (b) {
      case "xAxis":
        return jx(a, c);
      case "yAxis":
        return jA(a, c);
      case "zAxis":
        return jC(a, c);
      case "angleAxis":
        return e9(a, c);
      case "radiusAxis":
        return fa(a, c);
      default:
        throw Error(`Unexpected axis type: ${b}`);
    }
  };
  var jE = (a, b, c) => {
    switch (b) {
      case "xAxis":
        return jx(a, c);
      case "yAxis":
        return jA(a, c);
      case "angleAxis":
        return e9(a, c);
      case "radiusAxis":
        return fa(a, c);
      default:
        throw Error(`Unexpected axis type: ${b}`);
    }
  };
  var jF = a => a.graphicalItems.cartesianItems.some(a => a.type === "bar") || a.graphicalItems.polarItems.some(a => a.type === "radialBar");
  function jG(a, b) {
    return c => {
      switch (a) {
        case "xAxis":
          return "xAxisId" in c && c.xAxisId === b;
        case "yAxis":
          return "yAxisId" in c && c.yAxisId === b;
        case "zAxis":
          return "zAxisId" in c && c.zAxisId === b;
        case "angleAxis":
          return "angleAxisId" in c && c.angleAxisId === b;
        case "radiusAxis":
          return "radiusAxisId" in c && c.radiusAxisId === b;
        default:
          return false;
      }
    };
  }
  var jH = a => a.graphicalItems.cartesianItems;
  var jI = ad([fi, fj], jG);
  var jJ = (a, b, c) => a.filter(c).filter(a => (b == null ? undefined : b.includeHidden) === true || !a.hide);
  var jK = ad([jH, jD, jI], jJ, {
    memoizeOptions: {
      resultEqualityCheck: fo
    }
  });
  var jL = ad([jK], a => a.filter(a => a.type === "area" || a.type === "bar").filter(fm));
  var jM = a => a.filter(a => !("stackId" in a) || a.stackId === undefined);
  var jN = ad([jK], jM);
  var jO = a => a.map(a => a.data).filter(Boolean).flat(1);
  var jP = ad([jK], a => a.some(a => !a.data));
  var jQ = ad([jK], jO, {
    memoizeOptions: {
      resultEqualityCheck: fo
    }
  });
  var jR = (a, b) => {
    var c = b.chartData;
    var d = b.dataStartIndex;
    var e = b.dataEndIndex;
    if (a.length > 0) {
      return a;
    } else {
      return (c === undefined ? [] : c).slice(d, e + 1);
    }
  };
  var jS = ad([jQ, ah], jR);
  var jT = (a, b, c) => (b == null ? undefined : b.dataKey) != null ? a.map(a => ({
    value: a5(a, b.dataKey)
  })) : c.length > 0 ? c.map(a => a.dataKey).flatMap(b => a.map(a => ({
    value: a5(a, b)
  }))) : a.map(a => ({
    value: a
  }));
  var jU = (a, b, c, d, e, f) => {
    var g = d.chartData;
    var h = d.dataStartIndex;
    var i = d.dataEndIndex;
    var j = jT(a, b, c);
    if (e && (b == null ? undefined : b.dataKey) != null && f.length > 0) {
      return [...(g === undefined ? [] : g).slice(h, i + 1).map(a => ({
        value: a5(a, b.dataKey)
      })).filter(a => a.value != null), ...j];
    } else {
      return j;
    }
  };
  var jV = ad([jS, jD, jK, ah, jP, jQ], jU);
  function jW(a) {
    if (aL(a) || a instanceof Date) {
      var b = Number(a);
      if (aX(b)) {
        return b;
      }
    }
  }
  function jX(a) {
    if (Array.isArray(a)) {
      var b = [jW(a[0]), jW(a[1])];
      if (d9(b)) {
        return b;
      } else {
        return undefined;
      }
    }
    var c = jW(a);
    if (c != null) {
      return [c, c];
    }
  }
  function jY(a) {
    return a.map(jW).filter(aU);
  }
  function jZ(a, b) {
    var c = jW(a);
    var d = jW(b);
    if (c == null && d == null) {
      return 0;
    } else if (c == null) {
      return -1;
    } else if (d == null) {
      return 1;
    } else {
      return c - d;
    }
  }
  var j$ = ad([jV], a => a == null ? undefined : a.map(a => a.value).sort(jZ));
  function j_(a, b) {
    switch (a) {
      case "xAxis":
        return b.direction === "x";
      case "yAxis":
        return b.direction === "y";
      default:
        return false;
    }
  }
  var j0 = a => {
    var b = fp(a);
    var c = fq(a);
    return jE(a, b, c);
  };
  var j1 = ad([j0], a => a == null ? undefined : a.dataKey);
  var j2 = ad([jL, ah, j0], fl);
  var j3 = (a, b, c, d) => Object.fromEntries(Object.entries(b.reduce((a, b) => {
    if (b.stackId == null) {
      return a;
    }
    var c = a[b.stackId];
    if (c == null) {
      c = [];
    }
    c.push(b);
    a[b.stackId] = c;
    return a;
  }, {})).map(b => {
    var e = js(b, 2);
    var f = e[0];
    var g = e[1];
    var h = d ? [...g].reverse() : g;
    return [f, {
      stackedData: a9(a, h.map(fk), c),
      graphicalItems: h
    }];
  }));
  var j4 = ad([j2, jL, eQ, eR], j3);
  var j5 = (a, b, c, d) => {
    var e = b.dataStartIndex;
    var f = b.dataEndIndex;
    if (d == null && c !== "zAxis") {
      return ba(a, e, f);
    }
  };
  var j6 = ad([jD], a => a.allowDataOverflow);
  var j7 = a => {
    if (a == null || !("domain" in a)) {
      return ju;
    }
    if (a.domain != null) {
      return a.domain;
    }
    if ("ticks" in a && a.ticks != null) {
      if (a.type === "number") {
        var c = jY(a.ticks);
        return [Math.min(...c), Math.max(...c)];
      }
      if (a.type === "category") {
        return a.ticks.map(String);
      }
    }
    return (a == null ? undefined : a.domain) ?? ju;
  };
  var j8 = ad([jD], j7);
  var j9 = ad([j8, j6], eb);
  var ka = ad([j4, af, fi, j9], j5, {
    memoizeOptions: {
      resultEqualityCheck: fn
    }
  });
  var kb = a => a.errorBars;
  function kc() {
    for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) {
      b[c] = arguments[c];
    }
    var d = b.filter(Boolean);
    if (d.length !== 0) {
      var e = d.flat();
      return [Math.min(...e), Math.max(...e)];
    }
  }
  function kd(a, b, c, d, e) {
    var f;
    var g;
    var h = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
    if (c.length > 0) {
      c.forEach(a => {
        var c;
        var i = a.data != null ? [...a.data] : h;
        var j = (c = d[a.id]) == null ? undefined : c.filter(a => j_(e, a));
        i.forEach(c => {
          var e = a5(c, b.dataKey ?? a.dataKey);
          var h = function (a, b, c) {
            if (!c || !c.length) {
              return [];
            }
            if (typeof b != "number" || aI(b)) {
              if (Array.isArray(b)) {
                var d;
                var e = jY(b);
                if (e.length > 0) {
                  d = Math.max(...e);
                }
              }
            } else {
              d = b;
            }
            if (d == null) {
              return [];
            } else {
              return jY(c.flatMap(b => {
                var c;
                var e;
                var f = a5(a, b.dataKey);
                if (Array.isArray(f)) {
                  var g = js(f, 2);
                  c = g[0];
                  e = g[1];
                } else {
                  c = e = f;
                }
                if (aX(c) && aX(e)) {
                  return [d - c, d + e];
                }
              }));
            }
          }(c, e, j);
          if (h.length >= 2) {
            var i = Math.min(...h);
            var k = Math.max(...h);
            if (f == null || i < f) {
              f = i;
            }
            if (g == null || k > g) {
              g = k;
            }
          }
          var l = jX(e);
          if (l != null) {
            f = f == null ? l[0] : Math.min(f, l[0]);
            g = g == null ? l[1] : Math.max(g, l[1]);
          }
        });
      });
    }
    if ((b == null ? undefined : b.dataKey) != null && c.length === 0) {
      a.forEach(a => {
        var c = jX(a5(a, b.dataKey));
        if (c != null) {
          f = f == null ? c[0] : Math.min(f, c[0]);
          g = g == null ? c[1] : Math.max(g, c[1]);
        }
      });
    }
    if (aX(f) && aX(g)) {
      return [f, g];
    }
  }
  var ke = ad([jS, jD, jN, kb, fi, ai], kd, {
    memoizeOptions: {
      resultEqualityCheck: fn
    }
  });
  function kf(a) {
    var b = a.value;
    if (aL(b) || b instanceof Date) {
      return b;
    }
  }
  var kg = a => a.referenceElements.dots;
  var kh = (a, b, c) => a.filter(a => a.ifOverflow === "extendDomain").filter(a => b === "xAxis" ? a.xAxisId === c : a.yAxisId === c);
  var ki = ad([kg, fi, fj], kh);
  var kj = a => a.referenceElements.areas;
  var kk = ad([kj, fi, fj], kh);
  var kl = a => a.referenceElements.lines;
  var km = ad([kl, fi, fj], kh);
  var kn = (a, b) => {
    if (a != null) {
      var c = jY(a.map(a => b === "xAxis" ? a.x : a.y));
      if (c.length !== 0) {
        return [Math.min(...c), Math.max(...c)];
      }
    }
  };
  var ko = ad(ki, fi, kn);
  var kp = (a, b) => {
    if (a != null) {
      var c = jY(a.flatMap(a => [b === "xAxis" ? a.x1 : a.y1, b === "xAxis" ? a.x2 : a.y2]));
      if (c.length !== 0) {
        return [Math.min(...c), Math.max(...c)];
      }
    }
  };
  var kq = ad([kk, fi], kp);
  var kr = (a, b) => {
    if (a != null) {
      var c = a.flatMap(a => b === "xAxis" ? function (a) {
        if (a.x != null) {
          return jY([a.x]);
        }
        var b;
        var c = (b = a.segment) == null ? undefined : b.map(a => a.x);
        if (c == null || c.length === 0) {
          return [];
        } else {
          return jY(c);
        }
      }(a) : function (a) {
        if (a.y != null) {
          return jY([a.y]);
        }
        var b;
        var c = (b = a.segment) == null ? undefined : b.map(a => a.y);
        if (c == null || c.length === 0) {
          return [];
        } else {
          return jY(c);
        }
      }(a));
      if (c.length !== 0) {
        return [Math.min(...c), Math.max(...c)];
      }
    }
  };
  var ks = ad([km, fi], kr);
  var kt = ad(ko, ks, kq, (a, b, c) => kc(a, c, b));
  var ku = (a, b, c, d, e, f, g, h, i) => {
    if (c != null) {
      return c;
    }
    var j = g === "vertical" && h === "xAxis" || g === "horizontal" && h === "yAxis" ? kc(d, f, e) : kc(f, e);
    var k = function (a, b, c) {
      if (c || b != null) {
        if (typeof a == "function" && b != null) {
          try {
            var d = a(b, c);
            if (d9(d)) {
              return ea(d, b, c);
            }
          } catch (a) {}
        }
        if (Array.isArray(a) && a.length === 2) {
          var e;
          var f;
          var g = d7(a, 2);
          var h = g[0];
          var i = g[1];
          if (h === "auto") {
            if (b != null) {
              e = Math.min(...b);
            }
          } else if (aK(h)) {
            e = h;
          } else if (typeof h == "function") {
            try {
              if (b != null) {
                e = h(b == null ? undefined : b[0]);
              }
            } catch (a) {}
          } else if (typeof h == "string" && bb.test(h)) {
            var j = bb.exec(h);
            if (j == null || j[1] == null || b == null) {
              e = undefined;
            } else {
              var k = +j[1];
              e = b[0] - k;
            }
          } else {
            e = b == null ? undefined : b[0];
          }
          if (i === "auto") {
            if (b != null) {
              f = Math.max(...b);
            }
          } else if (aK(i)) {
            f = i;
          } else if (typeof i == "function") {
            try {
              if (b != null) {
                f = i(b == null ? undefined : b[1]);
              }
            } catch (a) {}
          } else if (typeof i == "string" && bc.test(i)) {
            var l = bc.exec(i);
            if (l == null || l[1] == null || b == null) {
              f = undefined;
            } else {
              var m = +l[1];
              f = b[1] + m;
            }
          } else {
            f = b == null ? undefined : b[1];
          }
          var n = [e, f];
          if (d9(n)) {
            if (b == null) {
              return n;
            } else {
              return ea(n, b, c);
            }
          }
        }
      }
    }(b, j, a.allowDataOverflow);
    return k ?? (a.allowDataOverflow && j == null && i != null ? i : k);
  };
  var kv = ad([jD], a => {
    if (a != null && a.type === "number" && "ticks" in a && a.ticks != null) {
      var b = jY(a.ticks);
      if (b.length !== 0) {
        return [Math.min(...b), Math.max(...b)];
      }
    }
  }, {
    memoizeOptions: {
      resultEqualityCheck: fn
    }
  });
  var kw = ad([jD, j8, j9, ka, ke, kt, d2, fi, kv], ku, {
    memoizeOptions: {
      resultEqualityCheck: fn
    }
  });
  var kx = [0, 1];
  var ky = (a, b, c, d, e, f, g) => {
    if (a != null && c != null && c.length !== 0 || g !== undefined) {
      var h;
      var j = a.dataKey;
      var k = a.type;
      var l = a7(b, f);
      if (l && j == null) {
        return bv(0, (c == null ? undefined : c.length) ?? 0);
      } else if (k === "category") {
        h = d.map(kf).filter(a => a != null);
        if (l && (a.dataKey == null || a.allowDuplicatedCategory && aP(h))) {
          return bv(0, d.length);
        } else if (a.allowDuplicatedCategory) {
          return h;
        } else {
          return Array.from(new Set(h));
        }
      } else if (e !== "expand" || l) {
        return g;
      } else {
        return kx;
      }
    }
  };
  var kz = ad([jD, d2, jS, jV, eQ, fi, kw], ky);
  var kA = ad([jD, jF, eS], jo);
  var kB = (a, b, c) => {
    var d = b.niceTicks;
    if (d !== "none") {
      var e = j7(b);
      var f = Array.isArray(e) && (e[0] === "auto" || e[1] === "auto");
      if ((d === "snap125" || d === "adaptive") && b != null && b.tickCount && d9(a)) {
        if (f) {
          return eN(a, b.tickCount, b.allowDecimals, d);
        }
        if (b.type === "number") {
          return eO(a, b.tickCount, b.allowDecimals, d);
        }
      }
      if (d === "auto" && c === "linear" && b != null && b.tickCount) {
        if (f && d9(a)) {
          return eN(a, b.tickCount, b.allowDecimals, "adaptive");
        }
        if (b.type === "number" && d9(a)) {
          return eO(a, b.tickCount, b.allowDecimals, "adaptive");
        }
      }
    }
  };
  var kC = ad([kz, jE, kA], kB);
  var kD = (a, b, c, d) => {
    if (d !== "angleAxis" && (a == null ? undefined : a.type) === "number" && d9(b) && Array.isArray(c) && c.length > 0) {
      return [Math.min(b[0], c[0] ?? 0), Math.max(b[1], c[c.length - 1] ?? 0)];
    }
    return b;
  };
  var kE = ad([jD, kz, kC, fi], kD);
  var kF = ad(jV, jD, (a, b) => {
    if (b && b.type === "number") {
      var c = Infinity;
      var d = Array.from(jY(a.map(a => a.value))).sort((a, b) => a - b);
      var e = d[0];
      var f = d[d.length - 1];
      if (e == null || f == null) {
        return Infinity;
      }
      var g = f - e;
      if (g === 0) {
        return Infinity;
      }
      for (var h = 0; h < d.length - 1; h++) {
        var i = d[h];
        var j = d[h + 1];
        if (i != null && j != null) {
          c = Math.min(c, j - i);
        }
      }
      return c / g;
    }
  });
  var kG = ad(kF, d2, eP, br, (a, b, c, d, e) => e, (a, b, c, d, e) => {
    if (!aX(a)) {
      return 0;
    }
    var f = b === "vertical" ? d.height : d.width;
    if (e === "gap") {
      return a * f / 2;
    }
    if (e === "no-gap") {
      var g = aO(c, a * f);
      var h = a * f / 2;
      return h - g - (h - g) / f * g;
    }
    return 0;
  });
  var kH = ad(jx, (a, b, c) => {
    var d = jx(a, b);
    if (d == null || typeof d.padding != "string") {
      return 0;
    } else {
      return kG(a, "xAxis", b, c, d.padding);
    }
  }, (a, b) => {
    if (a == null) {
      return {
        left: 0,
        right: 0
      };
    }
    var e = a.padding;
    if (typeof e == "string") {
      return {
        left: b,
        right: b
      };
    } else {
      return {
        left: (e.left ?? 0) + b,
        right: (e.right ?? 0) + b
      };
    }
  });
  var kI = ad(jA, (a, b, c) => {
    var d = jA(a, b);
    if (d == null || typeof d.padding != "string") {
      return 0;
    } else {
      return kG(a, "yAxis", b, c, d.padding);
    }
  }, (a, b) => {
    if (a == null) {
      return {
        top: 0,
        bottom: 0
      };
    }
    var e = a.padding;
    if (typeof e == "string") {
      return {
        top: b,
        bottom: b
      };
    } else {
      return {
        top: (e.top ?? 0) + b,
        bottom: (e.bottom ?? 0) + b
      };
    }
  });
  var kJ = ad([br, kH, dF, dE, (a, b, c) => c], (a, b, c, d, e) => {
    var f = d.padding;
    if (e) {
      return [f.left, c.width - f.right];
    } else {
      return [a.left + b.left, a.left + a.width - b.right];
    }
  });
  var kK = ad([br, d2, kI, dF, dE, (a, b, c) => c], (a, b, c, d, e, f) => {
    var g = e.padding;
    if (f) {
      return [d.height - g.bottom, g.top];
    } else if (b === "horizontal") {
      return [a.top + a.height - c.bottom, a.top + c.top];
    } else {
      return [a.top + c.top, a.top + a.height - c.bottom];
    }
  });
  var kL = (a, b, c, d) => {
    var e;
    switch (b) {
      case "xAxis":
        return kJ(a, c, d);
      case "yAxis":
        return kK(a, c, d);
      case "zAxis":
        if ((e = jC(a, c)) == null) {
          return undefined;
        } else {
          return e.range;
        }
      case "angleAxis":
        return ff(a);
      case "radiusAxis":
        return fg(a, c);
      default:
        return;
    }
  };
  var kM = ad([jD, kL], e3);
  var kN = ad([kA, kE], fs);
  var kO = ad([jD, kA, kN, kM], jn);
  var kP = (a, b, c, d) => {
    if (c != null && c.dataKey != null) {
      var e = c.type;
      var f = c.scale;
      if (a7(a, d) && (e === "number" || f !== "auto")) {
        return b.map(a => a.value);
      }
    }
  };
  var kQ = ad([d2, jV, jE, fi], kP);
  var kR = ad([kO], fr);
  var kS = ad([kO], function (a) {
    if (a != null) {
      if ("invert" in a && typeof a.invert == "function") {
        return a.invert.bind(a);
      } else {
        return jp(a, undefined);
      }
    }
  });
  var kT = ad([kO, j$], jp);
  function kU(a, b) {
    if (a.id < b.id) {
      return -1;
    } else {
      return +(a.id > b.id);
    }
  }
  ad([jK, kb, fi], (a, b, c) => a.flatMap(a => b[a.id]).filter(Boolean).filter(a => j_(c, a)));
  var kV = (a, b) => b;
  var kW = (a, b, c) => c;
  var kX = ad(bl, kV, kW, (a, b, c) => a.filter(a => a.orientation === b).filter(a => a.mirror === c).sort(kU));
  var kY = ad(bm, kV, kW, (a, b, c) => a.filter(a => a.orientation === b).filter(a => a.mirror === c).sort(kU));
  var kZ = (a, b) => {
    var c = typeof b.height == "number" ? b.height : 30;
    return {
      width: a.width,
      height: c
    };
  };
  var k$ = ad(br, jx, kZ);
  var k_ = ad(bi, br, kX, kV, kW, (a, b, c, d, e) => {
    var f;
    var g = {};
    c.forEach(c => {
      var h = kZ(b, c);
      if (f == null) {
        f = ((a, b, c) => {
          switch (b) {
            case "top":
              return a.top;
            case "bottom":
              return c - a.bottom;
            default:
              return 0;
          }
        })(b, d, a);
      }
      var i = d === "top" && !e || d === "bottom" && e;
      g[c.id] = f - Number(i) * h.height;
      f += (i ? -1 : 1) * h.height;
    });
    return g;
  });
  var k0 = ad(bh, br, kY, kV, kW, (a, b, c, d, e) => {
    var f;
    var g = {};
    c.forEach(c => {
      var h = {
        width: typeof c.width == "number" ? c.width : 60,
        height: b.height
      };
      if (f == null) {
        f = ((a, b, c) => {
          switch (b) {
            case "left":
              return a.left;
            case "right":
              return c - a.right;
            default:
              return 0;
          }
        })(b, d, a);
      }
      var i = d === "left" && !e || d === "right" && e;
      g[c.id] = f - Number(i) * h.width;
      f += (i ? -1 : 1) * h.width;
    });
    return g;
  });
  var k1 = ad([br, jx, (a, b) => {
    var c = jx(a, b);
    if (c != null) {
      return k_(a, c.orientation, c.mirror);
    }
  }, (a, b) => b], (a, b, c, d) => {
    if (b != null) {
      var e = c == null ? undefined : c[d];
      if (e == null) {
        return {
          x: a.left,
          y: 0
        };
      } else {
        return {
          x: a.left,
          y: e
        };
      }
    }
  });
  var k2 = ad([br, jA, (a, b) => {
    var c = jA(a, b);
    if (c != null) {
      return k0(a, c.orientation, c.mirror);
    }
  }, (a, b) => b], (a, b, c, d) => {
    if (b != null) {
      var e = c == null ? undefined : c[d];
      if (e == null) {
        return {
          x: 0,
          y: a.top
        };
      } else {
        return {
          x: e,
          y: a.top
        };
      }
    }
  });
  var k3 = ad(br, jA, (a, b) => ({
    width: typeof b.width == "number" ? b.width : 60,
    height: a.height
  }));
  var k4 = (a, b, c, d) => {
    if (c != null) {
      var e = c.allowDuplicatedCategory;
      var f = c.type;
      var g = c.dataKey;
      var h = a7(a, d);
      var i = b.map(a => a.value);
      var j = i.filter(a => a != null);
      if (g && h && f === "category" && e && aP(j)) {
        return i;
      }
    }
  };
  var k5 = ad([d2, jV, jD, fi], k4);
  var k6 = ad([d2, (a, b, c) => {
    switch (b) {
      case "xAxis":
        return jx(a, c);
      case "yAxis":
        return jA(a, c);
      default:
        throw Error(`Unexpected axis type: ${b}`);
    }
  }, kA, kR, k5, kQ, kL, kC, fi], (a, b, c, d, e, f, g, h, i) => {
    if (b != null) {
      var j = a7(a, i);
      return {
        angle: b.angle,
        interval: b.interval,
        minTickGap: b.minTickGap,
        orientation: b.orientation,
        tick: b.tick,
        tickCount: b.tickCount,
        tickFormatter: b.tickFormatter,
        ticks: b.ticks,
        type: b.type,
        unit: b.unit,
        axisType: i,
        categoricalDomain: f,
        duplicateDomain: e,
        isCategorical: j,
        niceTicks: h,
        range: g,
        realScaleType: c,
        scale: d
      };
    }
  });
  var k7 = ad([d2, jE, kA, kR, kC, kL, k5, kQ, fi], (a, b, c, d, e, f, g, h, i) => {
    if (b != null && d != null) {
      var j = a7(a, i);
      var k = b.type;
      var l = b.ticks;
      var m = b.tickCount;
      var n = c === "scaleBand" && typeof d.bandwidth == "function" ? d.bandwidth() / 2 : 2;
      var o = k === "category" && d.bandwidth ? d.bandwidth() / n : 0;
      o = i === "angleAxis" && f != null && f.length >= 2 ? aH(f[0] - f[1]) * 2 * o : o;
      var p = l || e;
      if (p) {
        return p.map((a, b) => {
          var c = g ? g.indexOf(a) : a;
          var e = d.map(c);
          if (aX(e)) {
            return {
              index: b,
              coordinate: e + o,
              value: a,
              offset: o
            };
          } else {
            return null;
          }
        }).filter(aU);
      } else if (j && h) {
        return h.map((a, b) => {
          var c = d.map(a);
          if (aX(c)) {
            return {
              coordinate: c + o,
              value: a,
              index: b,
              offset: o
            };
          } else {
            return null;
          }
        }).filter(aU);
      } else if (d.ticks) {
        return d.ticks(m).map((a, b) => {
          var c = d.map(a);
          if (aX(c)) {
            return {
              coordinate: c + o,
              value: a,
              index: b,
              offset: o
            };
          } else {
            return null;
          }
        }).filter(aU);
      } else {
        return d.domain().map((a, b) => {
          var c = d.map(a);
          if (aX(c)) {
            return {
              coordinate: c + o,
              value: g ? g[a] : a,
              index: b,
              offset: o
            };
          } else {
            return null;
          }
        }).filter(aU);
      }
    }
  });
  var k8 = ad([d2, jE, kR, kL, k5, kQ, fi], (a, b, c, d, e, f, g) => {
    if (b != null && c != null && d != null && d[0] !== d[1]) {
      var h = a7(a, g);
      var i = b.tickCount;
      var j = 0;
      j = g === "angleAxis" && (d == null ? undefined : d.length) >= 2 ? aH(d[0] - d[1]) * 2 * j : j;
      if (h && f) {
        return f.map((a, b) => {
          var d = c.map(a);
          if (aX(d)) {
            return {
              coordinate: d + j,
              value: a,
              index: b,
              offset: j
            };
          } else {
            return null;
          }
        }).filter(aU);
      } else if (c.ticks) {
        return c.ticks(i).map((a, b) => {
          var d = c.map(a);
          if (aX(d)) {
            return {
              coordinate: d + j,
              value: a,
              index: b,
              offset: j
            };
          } else {
            return null;
          }
        }).filter(aU);
      } else {
        return c.domain().map((a, b) => {
          var d = c.map(a);
          if (aX(d)) {
            return {
              coordinate: d + j,
              value: e ? e[a] : a,
              index: b,
              offset: j
            };
          } else {
            return null;
          }
        }).filter(aU);
      }
    }
  });
  var k9 = ad(jD, kR, (a, b) => {
    if (a != null && b != null) {
      return jr(jr({}, a), {}, {
        scale: b
      });
    }
  });
  var la = ad([jD, kA, kz, kM], jn);
  var lb = ad([la], fr);
  ad((a, b, c) => jC(a, c), lb, (a, b) => {
    if (a != null && b != null) {
      return jr(jr({}, a), {}, {
        scale: b
      });
    }
  });
  var lc = ad([d2, bl, bm], (a, b, c) => {
    switch (a) {
      case "horizontal":
        if (b.some(a => a.reversed)) {
          return "right-to-left";
        } else {
          return "left-to-right";
        }
      case "vertical":
        if (c.some(a => a.reversed)) {
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
  var ld = (a, b, c) => {
    var d;
    if ((d = a.renderedTicks[b]) == null) {
      return undefined;
    } else {
      return d[c];
    }
  };
  var le = ad([ld], a => {
    if (a && a.length !== 0) {
      return b => {
        var c;
        var d = Infinity;
        var e = a[0];
        for (var f of a) {
          var g = Math.abs(f.coordinate - b);
          if (g < d) {
            d = g;
            e = f;
          }
        }
        if ((c = e) == null) {
          return undefined;
        } else {
          return c.value;
        }
      };
    }
  });
  a.s(["combineAllAppliedValues", 0, jU, "combineAppliedValues", 0, jT, "combineAreasDomain", 0, kp, "combineAxisDomain", 0, ky, "combineAxisDomainWithNiceTicks", 0, kD, "combineCategoricalDomain", 0, kP, "combineDisplayedData", 0, jR, "combineDomainOfAllAppliedNumericalValuesIncludingErrorValues", 0, kd, "combineDomainOfStackGroups", 0, j5, "combineDotsDomain", 0, kn, "combineDuplicateDomain", 0, k4, "combineGraphicalItemsData", 0, jO, "combineGraphicalItemsSettings", 0, jJ, "combineLinesDomain", 0, kr, "combineNiceTicks", 0, kB, "combineNumericalDomain", 0, ku, "combineStackGroups", 0, j3, "filterGraphicalNotStackedItems", 0, jM, "filterReferenceElements", 0, kh, "getDomainDefinition", 0, j7, "implicitXAxis", 0, jv, "implicitYAxis", 0, jy, "itemAxisPredicate", 0, jG, "mergeDomains", 0, kc, "selectAllErrorBarSettings", 0, kb, "selectAxisDomain", 0, kz, "selectAxisInverseDataSnapScale", 0, kT, "selectAxisInverseScale", 0, kS, "selectAxisInverseTickSnapScale", 0, le, "selectAxisPropsNeededForCartesianGridTicksGenerator", 0, k6, "selectAxisRange", 0, kL, "selectAxisScale", 0, kR, "selectAxisWithScale", 0, k9, "selectBaseAxis", 0, jD, "selectChartDirection", 0, lc, "selectDomainDefinition", 0, j8, "selectDomainFromUserPreference", 0, j9, "selectHasBar", 0, jF, "selectRealScaleType", 0, kA, "selectReferenceAreas", 0, kj, "selectReferenceDots", 0, kg, "selectReferenceLines", 0, kl, "selectRenderableAxisSettings", 0, jE, "selectRenderedTicksOfAxis", 0, ld, "selectStackGroups", 0, j4, "selectTicksOfAxis", 0, k7, "selectTicksOfGraphicalItem", 0, k8, "selectTooltipAxis", 0, j0, "selectTooltipAxisDataKey", 0, j1, "selectUnfilteredCartesianItems", 0, jH, "selectXAxisPosition", 0, k1, "selectXAxisRange", 0, kJ, "selectXAxisSettings", 0, jx, "selectXAxisSettingsNoDefaults", 0, jw, "selectXAxisSize", 0, k$, "selectYAxisPosition", 0, k2, "selectYAxisRange", 0, kK, "selectYAxisSettings", 0, jA, "selectYAxisSettingsNoDefaults", 0, jz, "selectYAxisSize", 0, k3], 1578);
  var lf = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
  function lg(a) {
    return typeof a == "string" && lf.includes(a);
  }
  var lh = new Set(["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"]);
  function li(a) {
    return typeof a == "string" && lh.has(a);
  }
  function lj(a) {
    return typeof a == "string" && a.startsWith("data-");
  }
  function lk(a) {
    if (typeof a != "object" || a === null) {
      return {};
    }
    var b = {};
    for (var c in a) {
      if (Object.prototype.hasOwnProperty.call(a, c) && (li(c) || lj(c))) {
        b[c] = a[c];
      }
    }
    return b;
  }
  function ll(a) {
    if (a == null) {
      return null;
    } else if ((0, bw.isValidElement)(a) && typeof a.props == "object" && a.props !== null) {
      return lk(a.props);
    } else if (typeof a != "object" || Array.isArray(a)) {
      return null;
    } else {
      return lk(a);
    }
  }
  function lm(a) {
    var b = {};
    for (var c in a) {
      if (Object.prototype.hasOwnProperty.call(a, c) && (li(c) || lj(c) || lg(c))) {
        b[c] = a[c];
      }
    }
    return b;
  }
  a.s(["isDataAttribute", 0, lj, "isSvgElementPropKey", 0, li, "svgPropertiesNoEvents", 0, lk, "svgPropertiesNoEventsFromUnknown", 0, ll], 32929);
  a.s(["svgPropertiesAndEvents", 0, lm, "svgPropertiesAndEventsFromUnknown", 0, function (a) {
    if (a == null) {
      return null;
    } else if ((0, bw.isValidElement)(a)) {
      return lm(a.props);
    } else if (typeof a != "object" || Array.isArray(a)) {
      return null;
    } else {
      return lm(a);
    }
  }], 89367);
  var ln = ["children", "className"];
  function lo() {
    return (lo = Object.assign.bind()).apply(null, arguments);
  }
  var lp = bw.forwardRef((a, b) => {
    var c = a.children;
    var d = a.className;
    var e = function (a, b) {
      if (a == null) {
        return {};
      }
      var c;
      var d;
      var e = function (a, b) {
        if (a == null) {
          return {};
        }
        var c = {};
        for (var d in a) {
          if ({}.hasOwnProperty.call(a, d)) {
            if (b.indexOf(d) !== -1) {
              continue;
            }
            c[d] = a[d];
          }
        }
        return c;
      }(a, b);
      if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(a);
        for (d = 0; d < f.length; d++) {
          c = f[d];
          if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
            e[c] = a[c];
          }
        }
      }
      return e;
    }(a, ln);
    var f = i("recharts-layer", d);
    return bw.createElement("g", lo({
      className: f
    }, lm(e), {
      ref: b
    }), c);
  });
  function lq(a) {
    this._context = a;
  }
  function lr(a) {
    return new lq(a);
  }
  a.s(["Layer", 0, lp], 64187);
  lq.prototype = {
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
    point: function (a, b) {
      a *= 1;
      b *= 1;
      switch (this._point) {
        case 0:
          this._point = 1;
          if (this._line) {
            this._context.lineTo(a, b);
          } else {
            this._context.moveTo(a, b);
          }
          break;
        case 1:
          this._point = 2;
        default:
          this._context.lineTo(a, b);
      }
    }
  };
  let ls = Math.PI;
  let lt = ls * 2;
  let lu = lt - 0.000001;
  function lv(a) {
    this._ += a[0];
    for (let b = 1, c = a.length; b < c; ++b) {
      this._ += arguments[b] + a[b];
    }
  }
  class lw {
    constructor(a) {
      this._x0 = this._y0 = this._x1 = this._y1 = null;
      this._ = "";
      this._append = a == null ? lv : function (a) {
        let b = Math.floor(a);
        if (!(b >= 0)) {
          throw Error(`invalid digits: ${a}`);
        }
        if (b > 15) {
          return lv;
        }
        let c = 10 ** b;
        return function (a) {
          this._ += a[0];
          for (let b = 1, d = a.length; b < d; ++b) {
            this._ += Math.round(arguments[b] * c) / c + a[b];
          }
        };
      }(a);
    }
    moveTo(a, b) {
      this._append`M${this._x0 = this._x1 = +a},${this._y0 = this._y1 = +b}`;
    }
    closePath() {
      if (this._x1 !== null) {
        this._x1 = this._x0;
        this._y1 = this._y0;
        this._append`Z`;
      }
    }
    lineTo(a, b) {
      this._append`L${this._x1 = +a},${this._y1 = +b}`;
    }
    quadraticCurveTo(a, b, c, d) {
      this._append`Q${+a},${+b},${this._x1 = +c},${this._y1 = +d}`;
    }
    bezierCurveTo(a, b, c, d, e, f) {
      this._append`C${+a},${+b},${+c},${+d},${this._x1 = +e},${this._y1 = +f}`;
    }
    arcTo(a, b, c, d, e) {
      a *= 1;
      b *= 1;
      c *= 1;
      d *= 1;
      if ((e *= 1) < 0) {
        throw Error(`negative radius: ${e}`);
      }
      let f = this._x1;
      let g = this._y1;
      let h = c - a;
      let i = d - b;
      let j = f - a;
      let k = g - b;
      let l = j * j + k * k;
      if (this._x1 === null) {
        this._append`M${this._x1 = a},${this._y1 = b}`;
      } else if (l > 0.000001) {
        if (Math.abs(k * h - i * j) > 0.000001 && e) {
          let m = c - f;
          let n = d - g;
          let o = h * h + i * i;
          let p = Math.sqrt(o);
          let q = Math.sqrt(l);
          let r = e * Math.tan((ls - Math.acos((o + l - (m * m + n * n)) / (p * 2 * q))) / 2);
          let s = r / q;
          let t = r / p;
          if (Math.abs(s - 1) > 0.000001) {
            this._append`L${a + s * j},${b + s * k}`;
          }
          this._append`A${e},${e},0,0,${+(k * m > j * n)},${this._x1 = a + t * h},${this._y1 = b + t * i}`;
        } else {
          this._append`L${this._x1 = a},${this._y1 = b}`;
        }
      }
    }
    arc(a, b, c, d, e, f) {
      a *= 1;
      b *= 1;
      c *= 1;
      f = !!f;
      if (c < 0) {
        throw Error(`negative radius: ${c}`);
      }
      let g = c * Math.cos(d);
      let h = c * Math.sin(d);
      let i = a + g;
      let j = b + h;
      let k = f ^ 1;
      let l = f ? d - e : e - d;
      if (this._x1 === null) {
        this._append`M${i},${j}`;
      } else if (Math.abs(this._x1 - i) > 0.000001 || Math.abs(this._y1 - j) > 0.000001) {
        this._append`L${i},${j}`;
      }
      if (c) {
        if (l < 0) {
          l = l % lt + lt;
        }
        if (l > lu) {
          this._append`A${c},${c},0,1,${k},${a - g},${b - h}A${c},${c},0,1,${k},${this._x1 = i},${this._y1 = j}`;
        } else if (l > 0.000001) {
          this._append`A${c},${c},0,${+(l >= ls)},${k},${this._x1 = a + c * Math.cos(e)},${this._y1 = b + c * Math.sin(e)}`;
        }
      }
    }
    rect(a, b, c, d) {
      this._append`M${this._x0 = this._x1 = +a},${this._y0 = this._y1 = +b}h${c *= 1}v${+d}h${-c}Z`;
    }
    toString() {
      return this._;
    }
  }
  function lx(a) {
    let b = 3;
    a.digits = function (c) {
      if (!arguments.length) {
        return b;
      }
      if (c == null) {
        b = null;
      } else {
        let a = Math.floor(c);
        if (!(a >= 0)) {
          throw RangeError(`invalid digits: ${c}`);
        }
        b = a;
      }
      return a;
    };
    return () => new lw(b);
  }
  function ly(a) {
    return a[0];
  }
  function lz(a) {
    return a[1];
  }
  function lA(a, b) {
    var c = aA(true);
    var d = null;
    var e = lr;
    var f = null;
    var g = lx(h);
    function h(h) {
      var i;
      var j;
      var k;
      var l = (h = az(h)).length;
      var m = false;
      if (d == null) {
        f = e(k = g());
      }
      i = 0;
      for (; i <= l; ++i) {
        if ((!(i < l) || !c(j = h[i], i, h)) === m) {
          if (m = !m) {
            f.lineStart();
          } else {
            f.lineEnd();
          }
        }
        if (m) {
          f.point(+a(j, i, h), +b(j, i, h));
        }
      }
      if (k) {
        f = null;
        return k + "" || null;
      }
    }
    a = typeof a == "function" ? a : a === undefined ? ly : aA(a);
    b = typeof b == "function" ? b : b === undefined ? lz : aA(b);
    h.x = function (b) {
      if (arguments.length) {
        a = typeof b == "function" ? b : aA(+b);
        return h;
      } else {
        return a;
      }
    };
    h.y = function (a) {
      if (arguments.length) {
        b = typeof a == "function" ? a : aA(+a);
        return h;
      } else {
        return b;
      }
    };
    h.defined = function (a) {
      if (arguments.length) {
        c = typeof a == "function" ? a : aA(!!a);
        return h;
      } else {
        return c;
      }
    };
    h.curve = function (a) {
      if (arguments.length) {
        e = a;
        if (d != null) {
          f = e(d);
        }
        return h;
      } else {
        return e;
      }
    };
    h.context = function (a) {
      if (arguments.length) {
        if (a == null) {
          d = f = null;
        } else {
          f = e(d = a);
        }
        return h;
      } else {
        return d;
      }
    };
    return h;
  }
  function lB(a, b, c) {
    var d = null;
    var e = aA(true);
    var f = null;
    var g = lr;
    var h = null;
    var i = lx(j);
    function j(j) {
      var k;
      var l;
      var m;
      var n;
      var o;
      var p = (j = az(j)).length;
      var q = false;
      var r = Array(p);
      var s = Array(p);
      if (f == null) {
        h = g(o = i());
      }
      k = 0;
      for (; k <= p; ++k) {
        if ((!(k < p) || !e(n = j[k], k, j)) === q) {
          if (q = !q) {
            l = k;
            h.areaStart();
            h.lineStart();
          } else {
            h.lineEnd();
            h.lineStart();
            m = k - 1;
            for (; m >= l; --m) {
              h.point(r[m], s[m]);
            }
            h.lineEnd();
            h.areaEnd();
          }
        }
        if (q) {
          r[k] = +a(n, k, j);
          s[k] = +b(n, k, j);
          h.point(d ? +d(n, k, j) : r[k], c ? +c(n, k, j) : s[k]);
        }
      }
      if (o) {
        h = null;
        return o + "" || null;
      }
    }
    function k() {
      return lA().defined(e).curve(g).context(f);
    }
    a = typeof a == "function" ? a : a === undefined ? ly : aA(+a);
    b = typeof b == "function" ? b : b === undefined ? aA(0) : aA(+b);
    c = typeof c == "function" ? c : c === undefined ? lz : aA(+c);
    j.x = function (b) {
      if (arguments.length) {
        a = typeof b == "function" ? b : aA(+b);
        d = null;
        return j;
      } else {
        return a;
      }
    };
    j.x0 = function (b) {
      if (arguments.length) {
        a = typeof b == "function" ? b : aA(+b);
        return j;
      } else {
        return a;
      }
    };
    j.x1 = function (a) {
      if (arguments.length) {
        d = a == null ? null : typeof a == "function" ? a : aA(+a);
        return j;
      } else {
        return d;
      }
    };
    j.y = function (a) {
      if (arguments.length) {
        b = typeof a == "function" ? a : aA(+a);
        c = null;
        return j;
      } else {
        return b;
      }
    };
    j.y0 = function (a) {
      if (arguments.length) {
        b = typeof a == "function" ? a : aA(+a);
        return j;
      } else {
        return b;
      }
    };
    j.y1 = function (a) {
      if (arguments.length) {
        c = a == null ? null : typeof a == "function" ? a : aA(+a);
        return j;
      } else {
        return c;
      }
    };
    j.lineX0 = j.lineY0 = function () {
      return k().x(a).y(b);
    };
    j.lineY1 = function () {
      return k().x(a).y(c);
    };
    j.lineX1 = function () {
      return k().x(d).y(b);
    };
    j.defined = function (a) {
      if (arguments.length) {
        e = typeof a == "function" ? a : aA(!!a);
        return j;
      } else {
        return e;
      }
    };
    j.curve = function (a) {
      if (arguments.length) {
        g = a;
        if (f != null) {
          h = g(f);
        }
        return j;
      } else {
        return g;
      }
    };
    j.context = function (a) {
      if (arguments.length) {
        if (a == null) {
          f = h = null;
        } else {
          h = g(f = a);
        }
        return j;
      } else {
        return f;
      }
    };
    return j;
  }
  function lC(a, b, c) {
    a._context.bezierCurveTo((a._x0 * 2 + a._x1) / 3, (a._y0 * 2 + a._y1) / 3, (a._x0 + a._x1 * 2) / 3, (a._y0 + a._y1 * 2) / 3, (a._x0 + a._x1 * 4 + b) / 6, (a._y0 + a._y1 * 4 + c) / 6);
  }
  function lD(a) {
    this._context = a;
  }
  function lE() {}
  function lF(a) {
    this._context = a;
  }
  function lG(a) {
    this._context = a;
  }
  lw.prototype;
  a.s(["withPath", 0, lx], 41317);
  lD.prototype = {
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
          lC(this, this._x1, this._y1);
        case 2:
          this._context.lineTo(this._x1, this._y1);
      }
      if (this._line || this._line !== 0 && this._point === 1) {
        this._context.closePath();
      }
      this._line = 1 - this._line;
    },
    point: function (a, b) {
      a *= 1;
      b *= 1;
      switch (this._point) {
        case 0:
          this._point = 1;
          if (this._line) {
            this._context.lineTo(a, b);
          } else {
            this._context.moveTo(a, b);
          }
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          this._context.lineTo((this._x0 * 5 + this._x1) / 6, (this._y0 * 5 + this._y1) / 6);
        default:
          lC(this, a, b);
      }
      this._x0 = this._x1;
      this._x1 = a;
      this._y0 = this._y1;
      this._y1 = b;
    }
  };
  lF.prototype = {
    areaStart: lE,
    areaEnd: lE,
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
    point: function (a, b) {
      a *= 1;
      b *= 1;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._x2 = a;
          this._y2 = b;
          break;
        case 1:
          this._point = 2;
          this._x3 = a;
          this._y3 = b;
          break;
        case 2:
          this._point = 3;
          this._x4 = a;
          this._y4 = b;
          this._context.moveTo((this._x0 + this._x1 * 4 + a) / 6, (this._y0 + this._y1 * 4 + b) / 6);
          break;
        default:
          lC(this, a, b);
      }
      this._x0 = this._x1;
      this._x1 = a;
      this._y0 = this._y1;
      this._y1 = b;
    }
  };
  lG.prototype = {
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
    point: function (a, b) {
      a *= 1;
      b *= 1;
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          var c = (this._x0 + this._x1 * 4 + a) / 6;
          var d = (this._y0 + this._y1 * 4 + b) / 6;
          if (this._line) {
            this._context.lineTo(c, d);
          } else {
            this._context.moveTo(c, d);
          }
          break;
        case 3:
          this._point = 4;
        default:
          lC(this, a, b);
      }
      this._x0 = this._x1;
      this._x1 = a;
      this._y0 = this._y1;
      this._y1 = b;
    }
  };
  class lH {
    constructor(a, b) {
      this._context = a;
      this._x = b;
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
    point(a, b) {
      a *= 1;
      b *= 1;
      switch (this._point) {
        case 0:
          this._point = 1;
          if (this._line) {
            this._context.lineTo(a, b);
          } else {
            this._context.moveTo(a, b);
          }
          break;
        case 1:
          this._point = 2;
        default:
          if (this._x) {
            this._context.bezierCurveTo(this._x0 = (this._x0 + a) / 2, this._y0, this._x0, b, a, b);
          } else {
            this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + b) / 2, a, this._y0, a, b);
          }
      }
      this._x0 = a;
      this._y0 = b;
    }
  }
  function lI(a) {
    this._context = a;
  }
  lI.prototype = {
    areaStart: lE,
    areaEnd: lE,
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      if (this._point) {
        this._context.closePath();
      }
    },
    point: function (a, b) {
      a *= 1;
      b *= 1;
      if (this._point) {
        this._context.lineTo(a, b);
      } else {
        this._point = 1;
        this._context.moveTo(a, b);
      }
    }
  };
  function lJ(a, b, c) {
    var d = a._x1 - a._x0;
    var e = b - a._x1;
    var f = (a._y1 - a._y0) / (d || e < 0 && -0);
    var g = (c - a._y1) / (e || d < 0 && -0);
    return ((f < 0 ? -1 : 1) + (g < 0 ? -1 : 1)) * Math.min(Math.abs(f), Math.abs(g), Math.abs((f * e + g * d) / (d + e)) * 0.5) || 0;
  }
  function lK(a, b) {
    var c = a._x1 - a._x0;
    if (c) {
      return ((a._y1 - a._y0) * 3 / c - b) / 2;
    } else {
      return b;
    }
  }
  function lL(a, b, c) {
    var d = a._x0;
    var e = a._y0;
    var f = a._x1;
    var g = a._y1;
    var h = (f - d) / 3;
    a._context.bezierCurveTo(d + h, e + h * b, f - h, g - h * c, f, g);
  }
  function lM(a) {
    this._context = a;
  }
  function lN(a) {
    this._context = new lO(a);
  }
  function lO(a) {
    this._context = a;
  }
  function lP(a) {
    this._context = a;
  }
  function lQ(a) {
    var b;
    var c;
    var d = a.length - 1;
    var e = Array(d);
    var f = Array(d);
    var g = Array(d);
    e[0] = 0;
    f[0] = 2;
    g[0] = a[0] + a[1] * 2;
    b = 1;
    for (; b < d - 1; ++b) {
      e[b] = 1;
      f[b] = 4;
      g[b] = a[b] * 4 + a[b + 1] * 2;
    }
    e[d - 1] = 2;
    f[d - 1] = 7;
    g[d - 1] = a[d - 1] * 8 + a[d];
    b = 1;
    for (; b < d; ++b) {
      c = e[b] / f[b - 1];
      f[b] -= c;
      g[b] -= c * g[b - 1];
    }
    e[d - 1] = g[d - 1] / f[d - 1];
    b = d - 2;
    for (; b >= 0; --b) {
      e[b] = (g[b] - e[b + 1]) / f[b];
    }
    f[d - 1] = (a[d] + e[d - 1]) / 2;
    b = 0;
    for (; b < d - 1; ++b) {
      f[b] = a[b + 1] * 2 - e[b + 1];
    }
    return [e, f];
  }
  function lR(a, b) {
    this._context = a;
    this._t = b;
  }
  lM.prototype = {
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
          lL(this, this._t0, lK(this, this._t0));
      }
      if (this._line || this._line !== 0 && this._point === 1) {
        this._context.closePath();
      }
      this._line = 1 - this._line;
    },
    point: function (a, b) {
      var c = NaN;
      b *= 1;
      if ((a *= 1) !== this._x1 || b !== this._y1) {
        switch (this._point) {
          case 0:
            this._point = 1;
            if (this._line) {
              this._context.lineTo(a, b);
            } else {
              this._context.moveTo(a, b);
            }
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            lL(this, lK(this, c = lJ(this, a, b)), c);
            break;
          default:
            lL(this, this._t0, c = lJ(this, a, b));
        }
        this._x0 = this._x1;
        this._x1 = a;
        this._y0 = this._y1;
        this._y1 = b;
        this._t0 = c;
      }
    }
  };
  (lN.prototype = Object.create(lM.prototype)).point = function (a, b) {
    lM.prototype.point.call(this, b, a);
  };
  lO.prototype = {
    moveTo: function (a, b) {
      this._context.moveTo(b, a);
    },
    closePath: function () {
      this._context.closePath();
    },
    lineTo: function (a, b) {
      this._context.lineTo(b, a);
    },
    bezierCurveTo: function (a, b, c, d, e, f) {
      this._context.bezierCurveTo(b, a, d, c, f, e);
    }
  };
  lP.prototype = {
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
      var a = this._x;
      var b = this._y;
      var c = a.length;
      if (c) {
        if (this._line) {
          this._context.lineTo(a[0], b[0]);
        } else {
          this._context.moveTo(a[0], b[0]);
        }
        if (c === 2) {
          this._context.lineTo(a[1], b[1]);
        } else {
          var d = lQ(a);
          var e = lQ(b);
          for (var f = 0, g = 1; g < c; ++f, ++g) {
            this._context.bezierCurveTo(d[0][f], e[0][f], d[1][f], e[1][f], a[g], b[g]);
          }
        }
      }
      if (this._line || this._line !== 0 && c === 1) {
        this._context.closePath();
      }
      this._line = 1 - this._line;
      this._x = this._y = null;
    },
    point: function (a, b) {
      this._x.push(+a);
      this._y.push(+b);
    }
  };
  lR.prototype = {
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
    point: function (a, b) {
      a *= 1;
      b *= 1;
      switch (this._point) {
        case 0:
          this._point = 1;
          if (this._line) {
            this._context.lineTo(a, b);
          } else {
            this._context.moveTo(a, b);
          }
          break;
        case 1:
          this._point = 2;
        default:
          if (this._t <= 0) {
            this._context.lineTo(this._x, b);
            this._context.lineTo(a, b);
          } else {
            var c = this._x * (1 - this._t) + a * this._t;
            this._context.lineTo(c, this._y);
            this._context.lineTo(c, b);
          }
      }
      this._x = a;
      this._y = b;
    }
  };
  var lS = a => "radius" in a && "startAngle" in a && "endAngle" in a;
  var lT = (a, b) => {
    if (!a || typeof a == "function" || typeof a == "boolean") {
      return null;
    }
    var c = a;
    if ((0, bw.isValidElement)(a)) {
      c = a.props;
    }
    if (typeof c != "object" && typeof c != "function") {
      return null;
    }
    var d = {};
    Object.keys(c).forEach(a => {
      if (lg(a) && typeof c[a] == "function") {
        d[a] = b || (b => c[a](c, b));
      }
    });
    return d;
  };
  function lU() {
    return (lU = Object.assign.bind()).apply(null, arguments);
  }
  function lV(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function lW(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        lV(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        lV(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  a.s(["adaptEventHandlers", 0, lT, "adaptEventsOfChild", 0, (a, b, c) => {
    if (a === null || typeof a != "object" && typeof a != "function") {
      return null;
    }
    var d = null;
    Object.keys(a).forEach(e => {
      var f = a[e];
      if (lg(e) && typeof f == "function") {
        d ||= {};
        d[e] = a => {
          f(b, c, a);
          return null;
        };
      }
    });
    return d;
  }, "isPolarCoordinate", 0, lS], 10864);
  var lX = {
    curveBasisClosed: function (a) {
      return new lF(a);
    },
    curveBasisOpen: function (a) {
      return new lG(a);
    },
    curveBasis: function (a) {
      return new lD(a);
    },
    curveBumpX: function (a) {
      return new lH(a, true);
    },
    curveBumpY: function (a) {
      return new lH(a, false);
    },
    curveLinearClosed: function (a) {
      return new lI(a);
    },
    curveLinear: lr,
    curveMonotoneX: function (a) {
      return new lM(a);
    },
    curveMonotoneY: function (a) {
      return new lN(a);
    },
    curveNatural: function (a) {
      return new lP(a);
    },
    curveStep: function (a) {
      return new lR(a, 0.5);
    },
    curveStepAfter: function (a) {
      return new lR(a, 1);
    },
    curveStepBefore: function (a) {
      return new lR(a, 0);
    }
  };
  var lY = a => aX(a.x) && aX(a.y);
  var lZ = a => a.base != null && lY(a.base) && lY(a);
  var l$ = a => a.x;
  var l_ = a => a.y;
  var l0 = a => {
    var b = a.className;
    var c = a.points;
    var d = a.path;
    var e = a.pathRef;
    var f = d3();
    if ((!c || !c.length) && !d) {
      return null;
    }
    var g = {
      type: a.type,
      points: a.points,
      baseLine: a.baseLine,
      layout: a.layout || f,
      connectNulls: a.connectNulls
    };
    var h = c && c.length ? (a => {
      var b = a.type;
      var c = a.points;
      var d = c === undefined ? [] : c;
      var e = a.baseLine;
      var f = a.layout;
      var g = a.connectNulls;
      var h = g !== undefined && g;
      var i = ((a, b) => {
        if (typeof a == "function") {
          return a;
        }
        var c = `curve${aT(a)}`;
        if ((c === "curveMonotone" || c === "curveBump") && b) {
          var d = lX[`${c}${b === "vertical" ? "Y" : "X"}`];
          if (d) {
            return d;
          }
        }
        return lX[c] || lr;
      })(b === undefined ? "linear" : b, f);
      var j = h ? d.filter(lY) : d;
      if (Array.isArray(e)) {
        var k = d.map((a, b) => lW(lW({}, a), {}, {
          base: e[b]
        }));
        return (f === "vertical" ? lB().y(l_).x1(l$).x0(a => a.base.x) : lB().x(l$).y1(l_).y0(a => a.base.y)).defined(lZ).curve(i)(h ? k.filter(lZ) : k);
      }
      return (f === "vertical" && aK(e) ? lB().y(l_).x1(l$).x0(e) : aK(e) ? lB().x(l$).y1(l_).y0(e) : lA().x(l$).y(l_)).defined(lY).curve(i)(j);
    })(g) : d;
    return bw.createElement("path", lU({}, lk(a), lT(a), {
      className: i("recharts-curve", b),
      d: h === null ? undefined : h,
      ref: e
    }));
  };
  function l1(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function l2(a, b) {
    var c = function (a) {
      for (var b = 1; b < arguments.length; b++) {
        var c = arguments[b] ?? {};
        if (b % 2) {
          l1(Object(c), true).forEach(function (b) {
            var d;
            var e;
            var f;
            d = a;
            e = b;
            f = c[b];
            if ((e = function (a) {
              var b = function (a, b) {
                if (typeof a != "object" || !a) {
                  return a;
                }
                var c = a[Symbol.toPrimitive];
                if (c !== undefined) {
                  var d = c.call(a, b || "default");
                  if (typeof d != "object") {
                    return d;
                  }
                  throw TypeError("@@toPrimitive must return a primitive value.");
                }
                return (b === "string" ? String : Number)(a);
              }(a, "string");
              if (typeof b == "symbol") {
                return b;
              } else {
                return b + "";
              }
            }(e)) in d) {
              Object.defineProperty(d, e, {
                value: f,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              d[e] = f;
            }
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
        } else {
          l1(Object(c)).forEach(function (b) {
            Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
          });
        }
      }
      return a;
    }({}, a);
    return Object.keys(b).reduce((a, c) => {
      if (a[c] === undefined && b[c] !== undefined) {
        a[c] = b[c];
      }
      return a;
    }, c);
  }
  function l3() {
    return (l3 = Object.assign.bind()).apply(null, arguments);
  }
  function l4(a, b) {
    b ||= a.slice(0);
    return Object.freeze(Object.defineProperties(a, {
      raw: {
        value: Object.freeze(b)
      }
    }));
  }
  a.s(["Curve", 0, l0], 8679);
  a.s(["resolveDefaultProps", 0, l2], 24026);
  var l5 = a => {
    var b = a.cx;
    var c = a.cy;
    var d = a.radius;
    var e = a.angle;
    var f = a.sign;
    var g = a.isExternal;
    var h = a.cornerRadius;
    var i = a.cornerIsExternal;
    var j = h * (g ? 1 : -1) + d;
    var k = Math.asin(h / j) / eY;
    var l = i ? e : e + f * k;
    var m = eZ(b, c, j, l);
    return {
      center: m,
      circleTangency: eZ(b, c, d, l),
      lineTangency: eZ(b, c, j * Math.cos(k * eY), i ? e - f * k : e),
      theta: k
    };
  };
  var l6 = a => {
    var b = a.cx;
    var c = a.cy;
    var d = a.innerRadius;
    var e = a.outerRadius;
    var f = a.startAngle;
    var g = a.endAngle;
    var h = aH(g - f) * Math.min(Math.abs(g - f), 359.999);
    var i = f + h;
    var j = eZ(b, c, e, f);
    var k = eZ(b, c, e, i);
    var l = aG(t ||= l4(["M ", ",", "\n    A ", ",", ",0,\n    ", ",", ",\n    ", ",", "\n  "]), j.x, j.y, e, e, +(Math.abs(h) > 180), +(f > i), k.x, k.y);
    if (d > 0) {
      var m = eZ(b, c, d, f);
      var n = eZ(b, c, d, i);
      l += aG(u ||= l4(["L ", ",", "\n            A ", ",", ",0,\n            ", ",", ",\n            ", ",", " Z"]), n.x, n.y, d, d, +(Math.abs(h) > 180), +(f <= i), m.x, m.y);
    } else {
      l += aG(v ||= l4(["L ", ",", " Z"]), b, c);
    }
    return l;
  };
  var l7 = {
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
  var l8 = a => {
    var b;
    var c = l2(a, l7);
    var d = c.cx;
    var e = c.cy;
    var f = c.innerRadius;
    var g = c.outerRadius;
    var h = c.cornerRadius;
    var j = c.forceCornerRadius;
    var k = c.cornerIsExternal;
    var l = c.startAngle;
    var m = c.endAngle;
    var n = c.className;
    if (g < f || l === m) {
      return null;
    }
    var o = i("recharts-sector", n);
    var p = g - f;
    var q = aO(h, p, 0, true);
    b = q > 0 && Math.abs(l - m) < 360 ? (a => {
      var b = a.cx;
      var c = a.cy;
      var d = a.innerRadius;
      var e = a.outerRadius;
      var f = a.cornerRadius;
      var g = a.forceCornerRadius;
      var h = a.cornerIsExternal;
      var i = a.startAngle;
      var j = a.endAngle;
      var k = aH(j - i);
      var l = l5({
        cx: b,
        cy: c,
        radius: e,
        angle: i,
        sign: k,
        cornerRadius: f,
        cornerIsExternal: h
      });
      var m = l.circleTangency;
      var n = l.lineTangency;
      var o = l.theta;
      var p = l5({
        cx: b,
        cy: c,
        radius: e,
        angle: j,
        sign: -k,
        cornerRadius: f,
        cornerIsExternal: h
      });
      var q = p.circleTangency;
      var r = p.lineTangency;
      var s = p.theta;
      var t = h ? Math.abs(i - j) : Math.abs(i - j) - o - s;
      if (t < 0) {
        if (g) {
          return aG(w ||= l4(["M ", ",", "\n        a", ",", ",0,0,1,", ",0\n        a", ",", ",0,0,1,", ",0\n      "]), n.x, n.y, f, f, f * 2, f, f, -(f * 2));
        } else {
          return l6({
            cx: b,
            cy: c,
            innerRadius: d,
            outerRadius: e,
            startAngle: i,
            endAngle: j
          });
        }
      }
      var u = aG(x ||= l4(["M ", ",", "\n    A", ",", ",0,0,", ",", ",", "\n    A", ",", ",0,", ",", ",", ",", "\n    A", ",", ",0,0,", ",", ",", "\n  "]), n.x, n.y, f, f, +(k < 0), m.x, m.y, e, e, +(t > 180), +(k < 0), q.x, q.y, f, f, +(k < 0), r.x, r.y);
      if (d > 0) {
        var v = l5({
          cx: b,
          cy: c,
          radius: d,
          angle: i,
          sign: k,
          isExternal: true,
          cornerRadius: f,
          cornerIsExternal: h
        });
        var A = v.circleTangency;
        var B = v.lineTangency;
        var C = v.theta;
        var D = l5({
          cx: b,
          cy: c,
          radius: d,
          angle: j,
          sign: -k,
          isExternal: true,
          cornerRadius: f,
          cornerIsExternal: h
        });
        var E = D.circleTangency;
        var F = D.lineTangency;
        var G = D.theta;
        var H = h ? Math.abs(i - j) : Math.abs(i - j) - C - G;
        if (H < 0 && f === 0) {
          return `${u}L${b},${c}Z`;
        }
        u += aG(y ||= l4(["L", ",", "\n      A", ",", ",0,0,", ",", ",", "\n      A", ",", ",0,", ",", ",", ",", "\n      A", ",", ",0,0,", ",", ",", "Z"]), F.x, F.y, f, f, +(k < 0), E.x, E.y, d, d, +(H > 180), +(k > 0), A.x, A.y, f, f, +(k < 0), B.x, B.y);
      } else {
        u += aG(z ||= l4(["L", ",", "Z"]), b, c);
      }
      return u;
    })({
      cx: d,
      cy: e,
      innerRadius: f,
      outerRadius: g,
      cornerRadius: Math.min(q, p / 2),
      forceCornerRadius: j,
      cornerIsExternal: k,
      startAngle: l,
      endAngle: m
    }) : l6({
      cx: d,
      cy: e,
      innerRadius: f,
      outerRadius: g,
      startAngle: l,
      endAngle: m
    });
    return bw.createElement("path", l3({}, lm(c), {
      className: o,
      d: b
    }));
  };
  a.s(["Sector", 0, l8], 5877);
  var l9 = {
    devToolsEnabled: true,
    isSsr: true
  };
  function ma(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  a.s(["Global", 0, l9], 49502);
  var mb = function (a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        ma(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        ma(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }({}, {
    cacheSize: 2000,
    enableCache: true
  });
  var mc = new class {
    constructor(a) {
      (function (a, b, c) {
        var d;
        if ((b = typeof (d = function (a, b) {
          if (typeof a != "object" || !a) {
            return a;
          }
          var c = a[Symbol.toPrimitive];
          if (c !== undefined) {
            var d = c.call(a, b || "default");
            if (typeof d != "object") {
              return d;
            }
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return (b === "string" ? String : Number)(a);
        }(b, "string")) == "symbol" ? d : d + "") in a) {
          Object.defineProperty(a, b, {
            value: c,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          a[b] = c;
        }
      })(this, "cache", new Map());
      this.maxSize = a;
    }
    get(a) {
      var b = this.cache.get(a);
      if (b !== undefined) {
        this.cache.delete(a);
        this.cache.set(a, b);
      }
      return b;
    }
    set(a, b) {
      if (this.cache.has(a)) {
        this.cache.delete(a);
      } else if (this.cache.size >= this.maxSize) {
        var c = this.cache.keys().next().value;
        if (c != null) {
          this.cache.delete(c);
        }
      }
      this.cache.set(a, b);
    }
    clear() {
      this.cache.clear();
    }
    size() {
      return this.cache.size;
    }
  }(mb.cacheSize);
  var md = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre"
  };
  var me = "recharts_measurement_span";
  var mf = (a, b) => {
    try {
      var c = document.getElementById(me);
      if (!c) {
        (c = document.createElement("span")).setAttribute("id", me);
        c.setAttribute("aria-hidden", "true");
        document.body.appendChild(c);
      }
      Object.assign(c.style, md, b);
      c.textContent = `${a}`;
      var d = c.getBoundingClientRect();
      return {
        width: d.width,
        height: d.height
      };
    } catch (a) {
      return {
        width: 0,
        height: 0
      };
    }
  };
  function mg(a) {
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (a == null || l9.isSsr) {
      return {
        width: 0,
        height: 0
      };
    }
    if (!mb.enableCache) {
      return mf(a, h);
    }
    b = h.fontSize || "";
    c = h.fontFamily || "";
    d = h.fontWeight || "";
    e = h.fontStyle || "";
    f = h.letterSpacing || "";
    g = h.textTransform || "";
    var i = `${a}|${b}|${c}|${d}|${e}|${f}|${g}`;
    var j = mc.get(i);
    if (j) {
      return j;
    }
    var k = mf(a, h);
    mc.set(i, k);
    return k;
  }
  function mh(a, b) {
    return function (a) {
      if (Array.isArray(a)) {
        return a;
      }
    }(a) || function (a, b) {
      var c = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (c != null) {
        var d;
        var e;
        var f;
        var g;
        var h = [];
        var i = true;
        var j = false;
        try {
          f = (c = c.call(a)).next;
          if (b === 0) {
            if (Object(c) !== c) {
              return;
            }
            i = false;
          } else {
            for (; !(i = (d = f.call(c)).done) && (h.push(d.value), h.length !== b); i = true);
          }
        } catch (a) {
          j = true;
          e = a;
        } finally {
          try {
            if (!i && c.return != null && (g = c.return(), Object(g) !== g)) {
              return;
            }
          } finally {
            if (j) {
              throw e;
            }
          }
        }
        return h;
      }
    }(a, b) || function (a, b) {
      if (a) {
        if (typeof a == "string") {
          return mi(a, b);
        }
        var c = {}.toString.call(a).slice(8, -1);
        if (c === "Object" && a.constructor) {
          c = a.constructor.name;
        }
        if (c === "Map" || c === "Set") {
          return Array.from(a);
        } else if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) {
          return mi(a, b);
        } else {
          return undefined;
        }
      }
    }(a, b) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function mi(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  a.s(["getStringSize", 0, mg], 93748);
  var mj = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
  var mk = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
  var ml = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/;
  var mm = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/;
  var mn = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 16,
    in: 96,
    Q: 96 / 101.6,
    px: 1
  };
  var mo = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
  class mp {
    static parse(a) {
      var c = mh(mm.exec(a) ?? [], 3);
      var d = c[1];
      var e = c[2];
      if (d == null) {
        return mp.NaN;
      } else {
        return new mp(parseFloat(d), e ?? "");
      }
    }
    constructor(a, b) {
      this.num = a;
      this.unit = b;
      this.num = a;
      this.unit = b;
      if (aI(a)) {
        this.unit = "";
      }
      if (b !== "" && !ml.test(b)) {
        this.num = NaN;
        this.unit = "";
      }
      if (function (a) {
        return mo.includes(a);
      }(b)) {
        this.num = function (a, b) {
          return a * mn[b];
        }(a, b);
        this.unit = "px";
      }
    }
    add(a) {
      if (this.unit !== a.unit) {
        return new mp(NaN, "");
      } else {
        return new mp(this.num + a.num, this.unit);
      }
    }
    subtract(a) {
      if (this.unit !== a.unit) {
        return new mp(NaN, "");
      } else {
        return new mp(this.num - a.num, this.unit);
      }
    }
    multiply(a) {
      if (this.unit !== "" && a.unit !== "" && this.unit !== a.unit) {
        return new mp(NaN, "");
      } else {
        return new mp(this.num * a.num, this.unit || a.unit);
      }
    }
    divide(a) {
      if (this.unit !== "" && a.unit !== "" && this.unit !== a.unit) {
        return new mp(NaN, "");
      } else {
        return new mp(this.num / a.num, this.unit || a.unit);
      }
    }
    toString() {
      return `${this.num}${this.unit}`;
    }
    isNaN() {
      return aI(this.num);
    }
  }
  function mq(a) {
    if (a == null || a.includes("NaN")) {
      return "NaN";
    }
    for (var b = a; b.includes("*") || b.includes("/");) {
      var d = mh(mj.exec(b) ?? [], 4);
      var e = d[1];
      var f = d[2];
      var g = d[3];
      var h = mp.parse(e ?? "");
      var i = mp.parse(g ?? "");
      var j = f === "*" ? h.multiply(i) : h.divide(i);
      if (j.isNaN()) {
        return "NaN";
      }
      b = b.replace(mj, j.toString());
    }
    while (b.includes("+") || /.-\d+(?:\.\d+)?/.test(b)) {
      var l = mh(mk.exec(b) ?? [], 4);
      var m = l[1];
      var n = l[2];
      var o = l[3];
      var p = mp.parse(m ?? "");
      var q = mp.parse(o ?? "");
      var r = n === "+" ? p.add(q) : p.subtract(q);
      if (r.isNaN()) {
        return "NaN";
      }
      b = b.replace(mk, r.toString());
    }
    return b;
  }
  k = "NaN";
  l = new mp(NaN, "");
  if ((k = typeof (j = function (a, b) {
    if (typeof a != "object" || !a) {
      return a;
    }
    var c = a[Symbol.toPrimitive];
    if (c !== undefined) {
      var d = c.call(a, b || "default");
      if (typeof d != "object") {
        return d;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (b === "string" ? String : Number)(a);
  }(k, "string")) == "symbol" ? j : j + "") in mp) {
    Object.defineProperty(mp, k, {
      value: l,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    mp[k] = l;
  }
  var mr = /\(([^()]*)\)/;
  function ms(a) {
    var b = function (a) {
      try {
        var b;
        b = a.replace(/\s+/g, "");
        b = function (a) {
          for (var b, c = a; (b = mr.exec(c)) != null;) {
            var d = mh(b, 2)[1];
            c = c.replace(mr, mq(d));
          }
          return c;
        }(b);
        return b = mq(b);
      } catch (a) {
        return "NaN";
      }
    }(a.slice(5, -1));
    if (b === "NaN") {
      return "";
    } else {
      return b;
    }
  }
  var mt = ["x", "y", "lineHeight", "capHeight", "fill", "scaleToFit", "textAnchor", "verticalAnchor"];
  var mu = ["dx", "dy", "angle", "className", "breakAll"];
  function mv() {
    return (mv = Object.assign.bind()).apply(null, arguments);
  }
  function mw(a, b) {
    if (a == null) {
      return {};
    }
    var c;
    var d;
    var e = function (a, b) {
      if (a == null) {
        return {};
      }
      var c = {};
      for (var d in a) {
        if ({}.hasOwnProperty.call(a, d)) {
          if (b.indexOf(d) !== -1) {
            continue;
          }
          c[d] = a[d];
        }
      }
      return c;
    }(a, b);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(a);
      for (d = 0; d < f.length; d++) {
        c = f[d];
        if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
          e[c] = a[c];
        }
      }
    }
    return e;
  }
  function mx(a, b) {
    return function (a) {
      if (Array.isArray(a)) {
        return a;
      }
    }(a) || function (a, b) {
      var c = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (c != null) {
        var d;
        var e;
        var f;
        var g;
        var h = [];
        var i = true;
        var j = false;
        try {
          f = (c = c.call(a)).next;
          if (b === 0) {
            if (Object(c) !== c) {
              return;
            }
            i = false;
          } else {
            for (; !(i = (d = f.call(c)).done) && (h.push(d.value), h.length !== b); i = true);
          }
        } catch (a) {
          j = true;
          e = a;
        } finally {
          try {
            if (!i && c.return != null && (g = c.return(), Object(g) !== g)) {
              return;
            }
          } finally {
            if (j) {
              throw e;
            }
          }
        }
        return h;
      }
    }(a, b) || function (a, b) {
      if (a) {
        if (typeof a == "string") {
          return my(a, b);
        }
        var c = {}.toString.call(a).slice(8, -1);
        if (c === "Object" && a.constructor) {
          c = a.constructor.name;
        }
        if (c === "Map" || c === "Set") {
          return Array.from(a);
        } else if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) {
          return my(a, b);
        } else {
          return undefined;
        }
      }
    }(a, b) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function my(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  var mz = /[ \f\n\r\t\v\u2028\u2029]+/;
  var mA = a => {
    var b = a.children;
    var c = a.breakAll;
    var d = a.style;
    try {
      var e = [];
      if (!aS(b)) {
        e = c ? b.toString().split("") : b.toString().split(mz);
      }
      var f = e.map(a => ({
        word: a,
        width: mg(a, d).width
      }));
      var g = c ? 0 : mg("\xA0", d).width;
      return {
        wordsWithComputedWidth: f,
        spaceWidth: g
      };
    } catch (a) {
      return null;
    }
  };
  function mB(a) {
    return a === "start" || a === "middle" || a === "end" || a === "inherit";
  }
  function mC(a) {
    return aS(a) || typeof a == "string" || typeof a == "number" || typeof a == "boolean";
  }
  var mD = (a, b, c, d) => a.reduce((a, e) => {
    var f = e.word;
    var g = e.width;
    var h = a[a.length - 1];
    if (h && g != null && (b == null || d || h.width + g + c < Number(b))) {
      h.words.push(f);
      h.width += g + c;
    } else {
      a.push({
        words: [f],
        width: g
      });
    }
    return a;
  }, []);
  var mE = a => a.reduce((a, b) => a.width > b.width ? a : b);
  var mF = (a, b, c, d, e, f, g, h) => {
    var i = mA({
      breakAll: c,
      style: d,
      children: a.slice(0, b) + "…"
    });
    if (!i) {
      return [false, []];
    }
    var j = mD(i.wordsWithComputedWidth, f, g, h);
    return [j.length > e || mE(j).width > Number(f), j];
  };
  var mG = a => [{
    words: aS(a) ? [] : a.toString().split(mz),
    width: undefined
  }];
  var mH = "#808080";
  var mI = {
    angle: 0,
    breakAll: false,
    capHeight: "0.71em",
    fill: mH,
    lineHeight: "1em",
    scaleToFit: false,
    textAnchor: "start",
    verticalAnchor: "end",
    x: 0,
    y: 0
  };
  var mJ = (0, bw.forwardRef)((a, b) => {
    var c;
    var d = l2(a, mI);
    var e = d.x;
    var f = d.y;
    var g = d.lineHeight;
    var h = d.capHeight;
    var j = d.fill;
    var k = d.scaleToFit;
    var l = d.textAnchor;
    var m = d.verticalAnchor;
    var n = mw(d, mt);
    var o = (0, bw.useMemo)(() => (a => {
      var b = a.width;
      var c = a.scaleToFit;
      var d = a.children;
      var e = a.style;
      var f = a.breakAll;
      var g = a.maxLines;
      if ((b || c) && !l9.isSsr) {
        var h = mA({
          breakAll: f,
          children: d,
          style: e
        });
        if (!h) {
          return mG(d);
        }
        var i = h.wordsWithComputedWidth;
        var j = h.spaceWidth;
        return ((a, b, c, d, e) => {
          var f;
          var g = a.maxLines;
          var h = a.children;
          var i = a.style;
          var j = a.breakAll;
          var k = aK(g);
          var l = String(h);
          var m = mD(b, d, c, e);
          if (!k || e || !(m.length > g) && !(mE(m).width > Number(d))) {
            return m;
          }
          for (var n = 0, o = l.length - 1, p = 0; n <= o && p <= l.length - 1;) {
            var q = Math.floor((n + o) / 2);
            var r = mx(mF(l, q - 1, j, i, g, d, c, e), 2);
            var s = r[0];
            var t = r[1];
            var u = mx(mF(l, q, j, i, g, d, c, e), 1)[0];
            if (!s && !u) {
              n = q + 1;
            }
            if (s && u) {
              o = q - 1;
            }
            if (!s && u) {
              f = t;
              break;
            }
            p++;
          }
          return f || m;
        })({
          breakAll: f,
          children: d,
          maxLines: g,
          style: e
        }, i, j, b, !!c);
      }
      return mG(d);
    })({
      breakAll: n.breakAll,
      children: n.children,
      maxLines: n.maxLines,
      scaleToFit: k,
      style: n.style,
      width: n.width
    }), [n.breakAll, n.children, n.maxLines, k, n.style, n.width]);
    var p = n.dx;
    var q = n.dy;
    var r = n.angle;
    var s = n.className;
    var t = n.breakAll;
    var u = mw(n, mu);
    if (!aL(e) || !aL(f) || o.length === 0) {
      return null;
    }
    var v = Number(e) + (aK(p) ? p : 0);
    var w = Number(f) + (aK(q) ? q : 0);
    if (!aX(v) || !aX(w)) {
      return null;
    }
    switch (m) {
      case "start":
        c = ms(`calc(${h})`);
        break;
      case "middle":
        c = ms(`calc(${(o.length - 1) / 2} * -${g} + (${h} / 2))`);
        break;
      default:
        c = ms(`calc(${o.length - 1} * -${g})`);
    }
    var x = [];
    var y = o[0];
    if (k && y != null) {
      var z = y.width;
      var A = n.width;
      x.push(`scale(${aK(A) && aK(z) ? A / z : 1})`);
    }
    if (r) {
      x.push(`rotate(${r}, ${v}, ${w})`);
    }
    if (x.length) {
      u.transform = x.join(" ");
    }
    return bw.createElement("text", mv({}, lm(u), {
      ref: b,
      x: v,
      y: w,
      className: i("recharts-text", s),
      textAnchor: l,
      fill: j.includes("url") ? mH : j
    }), o.map((a, b) => {
      var d = a.words.join(t ? "" : " ");
      return bw.createElement("tspan", {
        x: v,
        dy: b === 0 ? c : g,
        key: `${d}-${b}`
      }, d);
    }));
  });
  mJ.displayName = "Text";
  a.s(["Text", 0, mJ, "isRenderableText", 0, mC, "isValidTextAnchor", 0, mB], 16219);
  var mK = a.i(82249);
  var mL = a => typeof a == "string" ? a : a ? a.displayName || a.name || "Component" : "";
  var mM = null;
  var mN = null;
  var mO = a => {
    if (a === mM && Array.isArray(mN)) {
      return mN;
    }
    var b = [];
    bw.Children.forEach(a, a => {
      if (!aS(a)) {
        if ((0, mK.isFragment)(a)) {
          b = b.concat(mO(a.props.children));
        } else {
          b.push(a);
        }
      }
    });
    mN = b;
    mM = a;
    return b;
  };
  function mP(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function mQ(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        mP(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        mP(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  a.s(["findAllByType", 0, function (a, b) {
    var c = [];
    var d = [];
    d = Array.isArray(b) ? b.map(a => mL(a)) : [mL(b)];
    mO(a).forEach(a => {
      var b = h(a, "type.displayName") || h(a, "type.name");
      if (b && d.indexOf(b) !== -1) {
        c.push(a);
      }
    });
    return c;
  }, "isClipDot", 0, a => !a || typeof a != "object" || !("clipDot" in a) || !!a.clipDot], 33856);
  a.s(["Shape", 0, function (a) {
    var b;
    var c;
    var d = a.option;
    var e = a.DefaultShape;
    var f = a.shapeProps;
    var g = a.activeClassName;
    var h = a.inActiveClassName;
    var i = function (a) {
      if ("index" in a) {
        var b = a.index;
        if (typeof b == "number" || typeof b == "string") {
          return b;
        } else {
          return undefined;
        }
      }
    }(f);
    c = (0, bw.isValidElement)(d) ? (0, bw.cloneElement)(d, (b = (0, bw.isValidElement)(d) ? d.props : d, mQ(mQ({}, f), b))) : d === e ? bw.createElement(e, f) : typeof d == "function" ? d(f, i) : typeof d == "object" ? bw.createElement(e, mQ(mQ({}, f), d)) : bw.createElement(e, f);
    if ("isActive" in f && f.isActive === true) {
      return bw.createElement(lp, {
        className: g === undefined ? "recharts-active-shape" : g
      }, c);
    } else {
      return bw.createElement(lp, {
        className: h === undefined ? "recharts-shape" : h
      }, c);
    }
  }], 82478);
  var mR = {
    active: false,
    index: null,
    dataKey: undefined,
    graphicalItemId: undefined,
    coordinate: undefined
  };
  var mS = cZ({
    name: "tooltip",
    initialState: {
      itemInteraction: {
        click: mR,
        hover: mR
      },
      axisInteraction: {
        click: mR,
        hover: mR
      },
      keyboardInteraction: mR,
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
        reducer(a, b) {
          a.tooltipItemPayloads.push(b.payload);
        },
        prepare: cT()
      },
      replaceTooltipEntrySettings: {
        reducer(a, b) {
          var c = b.payload;
          var d = c.prev;
          var e = c.next;
          var f = cA(a).tooltipItemPayloads.indexOf(d);
          if (f > -1) {
            a.tooltipItemPayloads[f] = e;
          }
        },
        prepare: cT()
      },
      removeTooltipEntrySettings: {
        reducer(a, b) {
          var c = cA(a).tooltipItemPayloads.indexOf(b.payload);
          if (c > -1) {
            a.tooltipItemPayloads.splice(c, 1);
          }
        },
        prepare: cT()
      },
      setTooltipSettingsState(a, b) {
        a.settings = b.payload;
      },
      setActiveMouseOverItemIndex(a, b) {
        a.syncInteraction.active = false;
        a.syncInteraction.sourceViewBox = undefined;
        a.keyboardInteraction.active = false;
        a.itemInteraction.hover.active = true;
        a.itemInteraction.hover.index = b.payload.activeIndex;
        a.itemInteraction.hover.dataKey = b.payload.activeDataKey;
        a.itemInteraction.hover.graphicalItemId = b.payload.activeGraphicalItemId;
        a.itemInteraction.hover.coordinate = b.payload.activeCoordinate;
      },
      mouseLeaveChart(a) {
        a.itemInteraction.hover.active = false;
        a.axisInteraction.hover.active = false;
      },
      mouseLeaveItem(a) {
        a.itemInteraction.hover.active = false;
      },
      setActiveClickItemIndex(a, b) {
        a.syncInteraction.active = false;
        a.syncInteraction.sourceViewBox = undefined;
        a.itemInteraction.click.active = true;
        a.keyboardInteraction.active = false;
        a.itemInteraction.click.index = b.payload.activeIndex;
        a.itemInteraction.click.dataKey = b.payload.activeDataKey;
        a.itemInteraction.click.graphicalItemId = b.payload.activeGraphicalItemId;
        a.itemInteraction.click.coordinate = b.payload.activeCoordinate;
      },
      setMouseOverAxisIndex(a, b) {
        a.syncInteraction.active = false;
        a.syncInteraction.sourceViewBox = undefined;
        a.axisInteraction.hover.active = true;
        a.keyboardInteraction.active = false;
        a.axisInteraction.hover.index = b.payload.activeIndex;
        a.axisInteraction.hover.dataKey = b.payload.activeDataKey;
        a.axisInteraction.hover.coordinate = b.payload.activeCoordinate;
      },
      setMouseClickAxisIndex(a, b) {
        a.syncInteraction.active = false;
        a.syncInteraction.sourceViewBox = undefined;
        a.keyboardInteraction.active = false;
        a.axisInteraction.click.active = true;
        a.axisInteraction.click.index = b.payload.activeIndex;
        a.axisInteraction.click.dataKey = b.payload.activeDataKey;
        a.axisInteraction.click.coordinate = b.payload.activeCoordinate;
      },
      setSyncInteraction(a, b) {
        a.syncInteraction = b.payload;
      },
      setKeyboardInteraction(a, b) {
        a.keyboardInteraction.active = b.payload.active;
        a.keyboardInteraction.index = b.payload.activeIndex;
        a.keyboardInteraction.coordinate = b.payload.activeCoordinate;
      }
    }
  });
  var mT = mS.actions;
  var mU = mT.addTooltipEntrySettings;
  var mV = mT.replaceTooltipEntrySettings;
  var mW = mT.removeTooltipEntrySettings;
  var mX = mT.setTooltipSettingsState;
  var mY = mT.setActiveMouseOverItemIndex;
  var mZ = mT.mouseLeaveItem;
  var m$ = mT.mouseLeaveChart;
  var m_ = mT.setActiveClickItemIndex;
  var m0 = mT.setMouseOverAxisIndex;
  var m1 = mT.setMouseClickAxisIndex;
  var m2 = mT.setSyncInteraction;
  var m3 = mT.setKeyboardInteraction;
  var m4 = mS.reducer;
  a.s(["addTooltipEntrySettings", 0, mU, "mouseLeaveChart", 0, m$, "mouseLeaveItem", 0, mZ, "noInteraction", 0, mR, "removeTooltipEntrySettings", 0, mW, "replaceTooltipEntrySettings", 0, mV, "setActiveClickItemIndex", 0, m_, "setActiveMouseOverItemIndex", 0, mY, "setKeyboardInteraction", 0, m3, "setMouseClickAxisIndex", 0, m1, "setMouseOverAxisIndex", 0, m0, "setSyncInteraction", 0, m2, "setTooltipSettingsState", 0, mX, "tooltipReducer", 0, m4], 14720);
  a.s(["SetTooltipEntrySettings", 0, function (a) {
    var b = a.tooltipEntrySettings;
    var c = bA();
    var d = dD();
    var e = (0, bw.useRef)(null);
    (0, bw.useLayoutEffect)(() => {
      if (!d) {
        if (e.current === null) {
          c(mU(b));
        } else if (e.current !== b) {
          c(mV({
            prev: e.current,
            next: b
          }));
        }
        e.current = b;
      }
    }, [b, c, d]);
    (0, bw.useLayoutEffect)(() => () => {
      if (e.current) {
        c(mW(e.current));
        e.current = null;
      }
    }, [c]);
    return null;
  }], 45863);
  var m5 = a => a.options.defaultTooltipEventType;
  var m6 = a => a.options.validateTooltipEventTypes;
  function m7(a, b, c) {
    if (a == null) {
      return b;
    }
    var d = a ? "axis" : "item";
    if (c == null) {
      return b;
    } else if (c.includes(d)) {
      return d;
    } else {
      return b;
    }
  }
  function m8(a, b) {
    return m7(b, m5(a), m6(a));
  }
  var m9 = (a, b) => {
    var c;
    var d = Number(b);
    if (!aI(d) && b != null) {
      if (d >= 0) {
        if (a == null || (c = a[d]) == null) {
          return undefined;
        } else {
          return c.value;
        }
      } else {
        return undefined;
      }
    }
  };
  function na(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function nb(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        na(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        na(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  var nc = (a, b, c, d) => {
    if (b == null) {
      return mR;
    }
    var e;
    var f;
    var g;
    e = a;
    f = b;
    g = c;
    var h = f === "axis" ? g === "click" ? e.axisInteraction.click : e.axisInteraction.hover : g === "click" ? e.itemInteraction.click : e.itemInteraction.hover;
    if (h == null) {
      return mR;
    }
    if (h.active) {
      return h;
    }
    if (a.keyboardInteraction.active) {
      return a.keyboardInteraction;
    }
    if (a.syncInteraction.active && a.syncInteraction.index != null) {
      return a.syncInteraction;
    }
    var i = a.settings.active === true;
    if (h.index != null) {
      if (i) {
        return nb(nb({}, h), {}, {
          active: true
        });
      }
    } else if (d != null) {
      return {
        active: true,
        coordinate: undefined,
        dataKey: undefined,
        index: d,
        graphicalItemId: undefined
      };
    }
    return nb(nb({}, mR), {}, {
      coordinate: h.coordinate
    });
  };
  var nd = (a, b, c, d) => {
    var e = a == null ? undefined : a.index;
    if (e == null) {
      return null;
    }
    var f = Number(e);
    if (!aX(f)) {
      return e;
    }
    var g = Infinity;
    if (b.length > 0) {
      g = b.length - 1;
    }
    var h = Math.max(0, Math.min(f, g));
    var i = b[h];
    if (i == null) {
      return String(h);
    } else if (!function (a, b, c) {
      if (c == null || b == null) {
        return true;
      }
      var d = a5(a, b);
      return d == null || !d9(c) || function (a, b) {
        var c = function (a) {
          if (typeof a == "number") {
            if (Number.isFinite(a)) {
              return a;
            } else {
              return undefined;
            }
          }
          if (a instanceof Date) {
            var b = a.valueOf();
            if (Number.isFinite(b)) {
              return b;
            } else {
              return undefined;
            }
          }
          var c = Number(a);
          if (Number.isFinite(c)) {
            return c;
          } else {
            return undefined;
          }
        }(a);
        var d = b[0];
        var e = b[1];
        if (c === undefined) {
          return false;
        }
        var f = Math.min(d, e);
        var g = Math.max(d, e);
        return c >= f && c <= g;
      }(d, c);
    }(i, c, d)) {
      return null;
    } else {
      return String(h);
    }
  };
  var ne = (a, b, c, d, e, f, g) => {
    if (f != null) {
      var h = g[0];
      var i = h == null ? undefined : h.getPosition(f);
      if (i != null) {
        return i;
      }
      var j = e == null ? undefined : e[Number(f)];
      if (j) {
        if (c === "horizontal") {
          return {
            x: j.coordinate,
            y: (d.top + b) / 2
          };
        } else {
          return {
            x: (d.left + a) / 2,
            y: j.coordinate
          };
        }
      }
    }
  };
  var nf = (a, b, c, d) => {
    if (b === "axis") {
      return a.tooltipItemPayloads;
    }
    if (a.tooltipItemPayloads.length === 0) {
      return [];
    }
    e = c === "hover" ? a.itemInteraction.hover.graphicalItemId : a.itemInteraction.click.graphicalItemId;
    if (a.syncInteraction.active && e == null) {
      return a.tooltipItemPayloads;
    }
    if (e == null && (d != null || a.keyboardInteraction.active)) {
      var e;
      var f = a.tooltipItemPayloads[0];
      if (f != null) {
        return [f];
      } else {
        return [];
      }
    }
    return a.tooltipItemPayloads.filter(a => {
      var b;
      return ((b = a.settings) == null ? undefined : b.graphicalItemId) === e;
    });
  };
  var ng = a => a.options.tooltipPayloadSearcher;
  var nh = a => a.tooltip;
  function ni(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function nj(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        ni(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        ni(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  function nk(a) {
    if (typeof a == "string") {
      return a;
    }
  }
  var nl = (a, b, c, d, e, f, g) => {
    if (b != null && f != null) {
      var h = c.chartData;
      var i = c.computedData;
      var j = c.dataStartIndex;
      var k = c.dataEndIndex;
      return a.reduce((a, c) => {
        var m;
        var o = c.dataDefinedOnItem;
        var p = c.settings;
        var q = o ?? h;
        var r = Array.isArray(q) ? aW(q, j, k) : q;
        var s = (p == null ? undefined : p.dataKey) ?? d;
        var t = p == null ? undefined : p.nameKey;
        if (d && Array.isArray(r) && !Array.isArray(r[0]) && g === "axis") {
          if ((m = aR(r, d, e)) == null) {
            m = f(r, b, i, t);
          }
        } else {
          m = f(r, b, i, t);
        }
        if (Array.isArray(m)) {
          m.forEach(b => {
            var e = function (a) {
              if (a != null && typeof a == "object") {
                var b;
                var c = "name" in a ? function (a) {
                  if (typeof a == "string" || typeof a == "number") {
                    return a;
                  }
                }(a.name) : undefined;
                var d = "unit" in a ? function (a) {
                  if (typeof a == "string" || typeof a == "number" || typeof a == "boolean") {
                    return a;
                  }
                }(a.unit) : undefined;
                var e = "dataKey" in a ? typeof (b = a.dataKey) == "string" || typeof b == "number" ? b : typeof b == "function" ? a => b(a) : undefined : undefined;
                var f = "payload" in a ? a.payload : undefined;
                return {
                  name: c,
                  unit: d,
                  dataKey: e,
                  payload: f,
                  color: "color" in a ? nk(a.color) : undefined,
                  fill: "fill" in a ? nk(a.fill) : undefined
                };
              }
            }(b);
            var f = e == null ? undefined : e.name;
            var g = e == null ? undefined : e.dataKey;
            var h = e == null ? undefined : e.payload;
            var i = nj(nj({}, p), {}, {
              name: f,
              unit: e == null ? undefined : e.unit,
              color: (e == null ? undefined : e.color) ?? (p == null ? undefined : p.color),
              fill: (e == null ? undefined : e.fill) ?? (p == null ? undefined : p.fill)
            });
            a.push(be({
              tooltipEntrySettings: i,
              dataKey: g,
              payload: h,
              value: a5(h, g),
              name: f == null ? undefined : String(f)
            }));
          });
        } else {
          a.push(be({
            tooltipEntrySettings: p,
            dataKey: s,
            payload: m,
            value: a5(m, s),
            name: a5(m, t) ?? (p == null ? undefined : p.name)
          }));
        }
        return a;
      }, []);
    }
  };
  var nm = ad([j0, jF, eS], jo);
  var nn = ad([a => a.graphicalItems.cartesianItems, a => a.graphicalItems.polarItems], (a, b) => [...a, ...b]);
  var no = ad([fp, fq], jG);
  var np = ad([nn, j0, no], jJ, {
    memoizeOptions: {
      resultEqualityCheck: fo
    }
  });
  var nq = ad([np], a => a.filter(fm));
  var nr = ad([np], jO, {
    memoizeOptions: {
      resultEqualityCheck: fo
    }
  });
  var ns = ad([np], a => a.some(a => !a.data));
  var nt = ad([nr, af], jR);
  var nu = ad([nq, af, j0], fl);
  var nv = ad([nt, j0, np, af, ns, nr], jU);
  var nw = ad([j0], j7);
  var nx = ad([j0], a => a.allowDataOverflow);
  var ny = ad([nw, nx], eb);
  var nz = ad([np], a => a.filter(fm));
  var nA = ad([nu, nz, eQ, eR], j3);
  var nB = ad([nA, af, fp, ny], j5);
  var nC = ad([np], jM);
  var nD = ad([nt, j0, nC, kb, fp, ak], kd, {
    memoizeOptions: {
      resultEqualityCheck: fn
    }
  });
  var nE = ad([kg, fp, fq], kh);
  var nF = ad([nE, fp], kn);
  var nG = ad([kj, fp, fq], kh);
  var nH = ad([nG, fp], kp);
  var nI = ad([kl, fp, fq], kh);
  var nJ = ad([nI, fp], kr);
  var nK = ad([nF, nJ, nH], kc);
  var nL = ad([j0, nw, ny, nB, nD, nK, d2, fp], ku);
  var nM = ad([j0, d2, nt, nv, eQ, fp, nL], ky);
  var nN = ad([nM, j0, nm], kB);
  var nO = ad([j0, nM, nN, fp], kD);
  var nP = a => {
    var b = fp(a);
    var c = fq(a);
    return kL(a, b, c, false);
  };
  var nQ = ad([j0, nP], e3);
  var nR = ad([j0, nm, nO, nQ], jn);
  var nS = ad([nR], fr);
  var nT = ad([d2, nv, j0, fp], k4);
  var nU = ad([d2, nv, j0, fp], kP);
  var nV = ad([d2, j0, nm, nS, nP, nT, nU, fp], (a, b, c, d, e, f, g, h) => {
    if (b) {
      var i = b.type;
      var j = a7(a, h);
      if (d) {
        var k = c === "scaleBand" && d.bandwidth ? d.bandwidth() / 2 : 2;
        var l = i === "category" && d.bandwidth ? d.bandwidth() / k : 0;
        l = h === "angleAxis" && e != null && (e == null ? undefined : e.length) >= 2 ? aH(e[0] - e[1]) * 2 * l : l;
        if (j && g) {
          return g.map((a, b) => {
            var c = d.map(a);
            if (aX(c)) {
              return {
                coordinate: c + l,
                value: a,
                index: b,
                offset: l
              };
            } else {
              return null;
            }
          }).filter(aU);
        } else {
          return d.domain().map((a, b) => {
            var c = d.map(a);
            if (aX(c)) {
              return {
                coordinate: c + l,
                value: f ? f[a] : a,
                index: b,
                offset: l
              };
            } else {
              return null;
            }
          }).filter(aU);
        }
      }
    }
  });
  var nW = ad([m5, m6, a => a.tooltip.settings], (a, b, c) => m7(c.shared, a, b));
  var nX = a => a.tooltip.settings.trigger;
  var nY = a => a.tooltip.settings.defaultIndex;
  var nZ = ad([nh, nW, nX, nY], nc);
  var n$ = ad([nZ, nt, j1, nM], nd);
  var n_ = ad([nV, n$], m9);
  var n0 = ad([nZ], a => {
    if (a) {
      return a.dataKey;
    }
  });
  var n1 = ad([nZ], a => {
    if (a) {
      return a.graphicalItemId;
    }
  });
  var n2 = ad([nh, nW, nX, nY], nf);
  var n3 = ad([bh, bi, d2, br, nV, nY, n2], ne);
  var n4 = ad([nZ, n3], (a, b) => a != null && a.coordinate ? a.coordinate : b);
  var n5 = ad([nZ], a => {
    var b;
    return (b = a == null ? undefined : a.active) != null && b;
  });
  var n6 = ad([n2, n$, af, j1, n_, ng, nW], nl);
  var n7 = ad([n6], a => {
    if (a != null) {
      return Array.from(new Set(a.map(a => a.payload).filter(a => a != null)));
    }
  });
  a.s(["selectActiveLabel", 0, n_, "selectActiveTooltipCoordinate", 0, n4, "selectActiveTooltipDataKey", 0, n0, "selectActiveTooltipDataPoints", 0, n7, "selectActiveTooltipGraphicalItemId", 0, n1, "selectActiveTooltipIndex", 0, n$, "selectAllGraphicalItemsSettings", 0, np, "selectIsTooltipActive", 0, n5, "selectTooltipAxisDomain", 0, nM, "selectTooltipAxisRangeWithReverse", 0, nQ, "selectTooltipAxisScale", 0, nS, "selectTooltipAxisTicks", 0, nV, "selectTooltipDisplayedData", 0, nt], 25855);
  var n8 = cZ({
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
      setLegendSize(a, b) {
        a.size.width = b.payload.width;
        a.size.height = b.payload.height;
      },
      setLegendSettings(a, b) {
        a.settings.align = b.payload.align;
        a.settings.layout = b.payload.layout;
        a.settings.verticalAlign = b.payload.verticalAlign;
        a.settings.itemSorter = b.payload.itemSorter;
        a.settings.position = b.payload.position;
        a.settings.offset = b.payload.offset;
      },
      addLegendPayload: {
        reducer(a, b) {
          a.payload.push(b.payload);
        },
        prepare: cT()
      },
      replaceLegendPayload: {
        reducer(a, b) {
          var c = b.payload;
          var d = c.prev;
          var e = c.next;
          var f = cA(a).payload.indexOf(d);
          if (f > -1) {
            a.payload[f] = e;
          }
        },
        prepare: cT()
      },
      removeLegendPayload: {
        reducer(a, b) {
          var c = cA(a).payload.indexOf(b.payload);
          if (c > -1) {
            a.payload.splice(c, 1);
          }
        },
        prepare: cT()
      }
    }
  });
  var n9 = n8.actions;
  var oa = n9.setLegendSize;
  var ob = n9.setLegendSettings;
  var oc = n9.addLegendPayload;
  var od = n9.replaceLegendPayload;
  var oe = n9.removeLegendPayload;
  var of = n8.reducer;
  a.s(["addLegendPayload", 0, oc, "legendReducer", 0, of, "removeLegendPayload", 0, oe, "replaceLegendPayload", 0, od, "setLegendSettings", 0, ob, "setLegendSize", 0, oa], 81478);
  a.s(["SetLegendPayload", 0, function (a) {
    var b = a.legendPayload;
    var c = bA();
    var d = dD();
    var e = (0, bw.useRef)(null);
    (0, bw.useLayoutEffect)(() => {
      if (!d) {
        if (e.current === null) {
          c(oc(b));
        } else if (e.current !== b) {
          c(od({
            prev: e.current,
            next: b
          }));
        }
        e.current = b;
      }
    }, [c, d, b]);
    (0, bw.useLayoutEffect)(() => () => {
      if (e.current) {
        c(oe(e.current));
        e.current = null;
      }
    }, [c]);
    return null;
  }, "SetPolarLegendPayload", 0, function (a) {
    var b = a.legendPayload;
    var c = bA();
    var d = bE(d2);
    var e = (0, bw.useRef)(null);
    (0, bw.useLayoutEffect)(() => {
      if (d === "centric" || d === "radial") {
        if (e.current === null) {
          c(oc(b));
        } else if (e.current !== b) {
          c(od({
            prev: e.current,
            next: b
          }));
        }
        e.current = b;
      }
    }, [c, d, b]);
    (0, bw.useLayoutEffect)(() => () => {
      if (e.current) {
        c(oe(e.current));
        e.current = null;
      }
    }, [c]);
    return null;
  }], 3219);
  var og = (a, b) => [0, a * 3, b * 3 - a * 6, a * 3 - b * 3 + 1];
  var oh = (a, b) => a.map((a, c) => a * b ** c).reduce((a, b) => a + b);
  var oi = (a, b) => c => oh(og(a, b), c);
  function oj() {
    for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) {
      b[c] = arguments[c];
    }
    if (b.length === 1) {
      switch (b[0]) {
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
          var d = (a => {
            var b;
            var c = a.split("(");
            if (c.length !== 2 || c[0] !== "cubic-bezier") {
              return null;
            }
            var d = (b = c[1]) == null || (b = b.split(")")[0]) == null ? undefined : b.split(",");
            if (d == null || d.length !== 4) {
              return null;
            }
            var e = d.map(a => parseFloat(a));
            return [e[0], e[1], e[2], e[3]];
          })(b[0]);
          if (d) {
            return d;
          }
      }
    }
    if (b.length === 4) {
      return b;
    } else {
      return [0, 0, 1, 1];
    }
  }
  function ok() {
    return ((a, b, c, d) => {
      var e = oi(a, c);
      var f = oi(b, d);
      var g = b => oh([...og(a, c).map((a, b) => a * b).slice(1), 0], b);
      var h = a => a > 1 ? 1 : a < 0 ? 0 : a;
      var i = a => {
        var b = a > 1 ? 1 : a;
        var c = b;
        for (var d = 0; d < 8; ++d) {
          var i = e(c) - b;
          var j = g(c);
          if (Math.abs(i - b) < 0.0001 || j < 0.0001) {
            break;
          }
          c = h(c - i / j);
        }
        return f(c);
      };
      i.isStepper = false;
      return i;
    })(...oj(...arguments));
  }
  function ol(a = {}) {
    var b = a.stiff;
    var c = b === undefined ? 100 : b;
    var d = a.damping;
    var e = d === undefined ? 8 : d;
    var f = a.dt;
    var g = f === undefined ? 16.67 : f;
    var h = [0];
    var i = 0;
    var j = 0;
    for (var k = 0; k < 10000;) {
      var l = j * e;
      j += (-(i - 1) * c - l) * g / 1000;
      i += j * g / 1000;
      h.push(i);
      if (Math.abs(i - 1) < 0.0001 && Math.abs(j) < 0.0001) {
        break;
      }
      k++;
    }
    h[h.length - 1] = 1;
    var m = h.length - 1;
    return a => {
      if (a <= 0) {
        return 0;
      }
      if (a >= 1) {
        return 1;
      }
      var e = a * m;
      var f = Math.floor(e);
      return (h[f] ?? 0) + ((h[f + 1] ?? 0) - (h[f] ?? 0)) * (e - f);
    };
  }
  var om = (0, bw.createContext)((a, b, c) => {
    var d;
    var e = f => {
      var g = b.tick(f);
      if (b.getState() === "active") {
        c(b.getInterpolated());
        if (b.getProgress() === 1) {
          b.complete();
          d = undefined;
          return;
        }
        d = a.setTimeout(e, g);
        return;
      }
      d = a.setTimeout(e, g);
    };
    d = a.setTimeout(e, 0);
    return () => {
      var a;
      if ((a = d) == null) {
        return undefined;
      } else {
        return a();
      }
    };
  });
  function on(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  function oo() {
    var a;
    var b = function (a) {
      if (Array.isArray(a)) {
        return a;
      }
    }(a = (0, bw.useState)(() => !l9.isSsr && !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) || function (a) {
      var b = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (b != null) {
        var c;
        var d;
        var e;
        var f;
        var g = [];
        var h = true;
        var i = false;
        try {
          e = (b = b.call(a)).next;
          false;
          for (; !(h = (c = e.call(b)).done) && (g.push(c.value), g.length !== 2); h = true);
        } catch (a) {
          i = true;
          d = a;
        } finally {
          try {
            if (!h && b.return != null && (f = b.return(), Object(f) !== f)) {
              return;
            }
          } finally {
            if (i) {
              throw d;
            }
          }
        }
        return g;
      }
    }(a) || function (a) {
      if (a) {
        if (typeof a == "string") {
          return on(a, 2);
        }
        var b = {}.toString.call(a).slice(8, -1);
        if (b === "Object" && a.constructor) {
          b = a.constructor.name;
        }
        if (b === "Map" || b === "Set") {
          return Array.from(a);
        } else if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) {
          return on(a, 2);
        } else {
          return undefined;
        }
      }
    }(a) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
    var c = b[0];
    var d = b[1];
    (0, bw.useEffect)(() => {
      if (window.matchMedia) {
        var a = window.matchMedia("(prefers-reduced-motion: reduce)");
        var b = () => {
          d(a.matches);
        };
        a.addEventListener("change", b);
        return () => {
          a.removeEventListener("change", b);
        };
      }
    }, []);
    return c;
  }
  om.Provider;
  var op = "init";
  var oq = "pending";
  var or = "active";
  function os(a) {
    return Math.max(0, a);
  }
  class ot {
    getAnimationStartedTime() {
      return this.animationStartedTime;
    }
    getBeginStartedTime() {
      return this.beginStartedTime;
    }
    constructor(a) {
      var b;
      (function (a, b, c) {
        var d;
        if ((b = typeof (d = function (a, b) {
          if (typeof a != "object" || !a) {
            return a;
          }
          var c = a[Symbol.toPrimitive];
          if (c !== undefined) {
            var d = c.call(a, b || "default");
            if (typeof d != "object") {
              return d;
            }
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return (b === "string" ? String : Number)(a);
        }(b, "string")) == "symbol" ? d : d + "") in a) {
          Object.defineProperty(a, b, {
            value: c,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          a[b] = c;
        }
      })(this, "state", op);
      this.animationId = a.animationId;
      this.onAnimationEnd = a.onAnimationEnd;
      this.animationDuration = os(a.animationDuration);
      this.animationBegin = os(a.animationBegin);
      this.progress = 0;
      this.from = a.from;
      this.to = a.to;
      this.easing = a.easing;
      if ((b = a.onAnimationStart) != null) {
        b.call(a);
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
    tick(a) {
      if (this.getState() === op) {
        this.state = oq;
        this.beginStartedTime = a;
        return this.animationBegin;
      }
      if (this.getState() === oq) {
        if (this.beginStartedTime == null) {
          throw Error();
        }
        var b = a - this.beginStartedTime;
        if (b >= this.animationBegin) {
          this.state = or;
          this.animationStartedTime = a;
          return this.nextAnimationUpdate(0);
        } else {
          return os(this.animationBegin - b);
        }
      }
      if (this.getState() === or) {
        if (this.animationStartedTime == null) {
          throw Error();
        }
        var c = a - this.animationStartedTime;
        this.setProgress(c / this.animationDuration);
        return this.nextAnimationUpdate(c);
      }
      return 0;
    }
    setProgress(a) {
      this.progress = Math.min(1, Math.max(0, a));
    }
    getProgress() {
      return this.progress;
    }
    complete() {
      this.progress = 1;
      if (this.state === "active") {
        var a;
        if ((a = this.onAnimationEnd) != null) {
          a.call(this);
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
  class ou extends ot {
    nextAnimationUpdate() {
      return 0;
    }
    getInterpolated() {
      return this.easing(aQ(this.getFrom(), this.getTo(), this.getProgress()));
    }
  }
  class ov {
    setTimeout(a, b = 0) {
      var c = performance.now();
      var d = null;
      var e = f => {
        if (f - c >= b) {
          a(f);
        } else {
          d = requestAnimationFrame(e);
        }
      };
      d = requestAnimationFrame(e);
      return () => {
        if (d != null) {
          cancelAnimationFrame(d);
        }
      };
    }
  }
  function ow(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  var ox = {
    begin: 0,
    duration: 1000,
    easing: "ease",
    isActive: true,
    canBegin: true,
    onAnimationEnd: () => {},
    onAnimationStart: () => {}
  };
  function oy(a) {
    var b;
    var c;
    var d;
    var e = l2(a, ox);
    var f = e.animationId;
    var g = e.isActive;
    var h = e.canBegin;
    var i = e.duration;
    var j = e.easing;
    var k = e.begin;
    var l = e.onAnimationEnd;
    var m = e.onAnimationStart;
    var n = e.children;
    var o = oo();
    var p = g === "auto" ? !l9.isSsr && !o : g;
    b = e.animationController;
    c = (0, bw.useContext)(om);
    var q = (0, bw.useMemo)(() => b ?? c, [b, c]);
    var r = function (a) {
      if (Array.isArray(a)) {
        return a;
      }
    }(d = (0, bw.useState)(+!p)) || function (a) {
      var b = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (b != null) {
        var c;
        var d;
        var e;
        var f;
        var g = [];
        var h = true;
        var i = false;
        try {
          e = (b = b.call(a)).next;
          false;
          for (; !(h = (c = e.call(b)).done) && (g.push(c.value), g.length !== 2); h = true);
        } catch (a) {
          i = true;
          d = a;
        } finally {
          try {
            if (!h && b.return != null && (f = b.return(), Object(f) !== f)) {
              return;
            }
          } finally {
            if (i) {
              throw d;
            }
          }
        }
        return g;
      }
    }(d) || function (a) {
      if (a) {
        if (typeof a == "string") {
          return ow(a, 2);
        }
        var b = {}.toString.call(a).slice(8, -1);
        if (b === "Object" && a.constructor) {
          b = a.constructor.name;
        }
        if (b === "Map" || b === "Set") {
          return Array.from(a);
        } else if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) {
          return ow(a, 2);
        } else {
          return undefined;
        }
      }
    }(d) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
    var s = r[0];
    var t = r[1];
    (0, bw.useEffect)(() => {
      if (!p) {
        t(1);
      }
    }, [p]);
    (0, bw.useEffect)(() => {
      var a = (a => {
        if (typeof a == "string") {
          switch (a) {
            case "ease":
            case "ease-in-out":
            case "ease-out":
            case "ease-in":
            case "linear":
              return ok(a);
            case "spring":
              return ol();
            default:
              if (a.split("(")[0] === "cubic-bezier") {
                return ok(a);
              }
          }
        }
        if (typeof a == "function") {
          return a;
        } else {
          return null;
        }
      })(j);
      if (p && h && a != null) {
        return q(new ov(), new ou({
          animationId: f,
          easing: a,
          animationDuration: i,
          animationBegin: k,
          onAnimationStart: m,
          onAnimationEnd: l,
          from: 0,
          to: 1
        }), t);
      } else {
        return aV;
      }
    }, [q, f, p, h, i, j, k, m, l]);
    return n(Number(s));
  }
  function oz(a, b = "animation-") {
    var c = (0, bw.useRef)(aN(b));
    var d = (0, bw.useRef)(a);
    if (d.current !== a) {
      c.current = aN(b);
      d.current = a;
    }
    return c.current;
  }
  function oA(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  var oB = "index";
  var oC = "append";
  function oD(a, b, c = []) {
    var d = [];
    for (var e of c) {
      d.push({
        status: "removed",
        prev: e
      });
    }
    for (var f = 0; f < b.length; f++) {
      var g = a[f];
      var h = b[f];
      if (g != null) {
        d.push({
          status: "matched",
          prev: g,
          next: h
        });
      } else {
        d.push({
          status: "added",
          next: h
        });
      }
    }
    return d;
  }
  function oE(a, b, c) {
    var d;
    if (b == null) {
      return null;
    } else if (a == null) {
      return b.map(a => ({
        status: "added",
        next: a
      }));
    } else if (c === oB) {
      d = a.length / b.length;
      return oD(b.map((b, c) => a[Math.floor(c * d)]), b);
    } else if (c === oC) {
      return oD(b.map((b, c) => a[c]), b);
    } else {
      return function (a, b, c) {
        var d = function (a, b) {
          var c = new Map();
          for (var d = 0; d < a.length; d++) {
            var e = a[d];
            if (e != null) {
              var f = b(e, d);
              if (f != null && !c.has(f)) {
                c.set(f, e);
              }
            }
          }
          return c;
        }(a, c);
        var e = new Set();
        var f = b.map((a, b) => {
          var f = c(a, b);
          if (f != null) {
            var g = d.get(f);
            if (g !== undefined) {
              e.add(f);
              return g;
            }
          }
        });
        var g = [];
        for (var h of d) {
          var i = function (a) {
            if (Array.isArray(a)) {
              return a;
            }
          }(h) || function (a) {
            var b = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
            if (b != null) {
              var c;
              var d;
              var e;
              var f;
              var g = [];
              var h = true;
              var i = false;
              try {
                e = (b = b.call(a)).next;
                false;
                for (; !(h = (c = e.call(b)).done) && (g.push(c.value), g.length !== 2); h = true);
              } catch (a) {
                i = true;
                d = a;
              } finally {
                try {
                  if (!h && b.return != null && (f = b.return(), Object(f) !== f)) {
                    return;
                  }
                } finally {
                  if (i) {
                    throw d;
                  }
                }
              }
              return g;
            }
          }(h) || function (a) {
            if (a) {
              if (typeof a == "string") {
                return oA(a, 2);
              }
              var b = {}.toString.call(a).slice(8, -1);
              if (b === "Object" && a.constructor) {
                b = a.constructor.name;
              }
              if (b === "Map" || b === "Set") {
                return Array.from(a);
              } else if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) {
                return oA(a, 2);
              } else {
                return undefined;
              }
            }
          }(h) || function () {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
          var j = i[0];
          var k = i[1];
          if (!e.has(j)) {
            g.push(k);
          }
        }
        return oD(f, b, g);
      }(a, b, c);
    }
  }
  function oF(a, b) {
    var c = (0, bw.useRef)(a);
    var d = (0, bw.useRef)(b.current);
    var e = (0, bw.useRef)(true);
    if (c.current !== a) {
      c.current = a;
      d.current = b.current;
      e.current = false;
    }
    var f = (0, bw.useCallback)(function (a, c) {
      var f = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
      if (c === 0) {
        e.current = true;
        return;
      }
      if (c === 1) {
        d.current = a;
      }
      if (c > 0 && e.current && f) {
        b.current = a;
      }
    }, [b]);
    return {
      startValue: d.current,
      syncStepValue: f
    };
  }
  function oG(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  function oH(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  a.s(["matchAnimationItems", 0, oE, "matchAppend", 0, oC, "matchByIndex", 0, oB], 40147);
  a.s(["useAnimationStartSnapshot", 0, oF], 30889);
  a.s(["AnimatedItems", 0, function (a) {
    var c = a.animationInput;
    var d = a.animationIdPrefix;
    var e = a.items;
    var f = a.previousItemsRef;
    var g = a.isAnimationActive;
    var h = a.animationBegin;
    var i = a.animationDuration;
    var j = a.animationEasing;
    var k = a.onAnimationStart;
    var l = a.onAnimationEnd;
    var m = a.animationInterpolateFn;
    var n = a.animationMatchBy;
    var o = a.shouldUpdatePreviousRef;
    var p = a.children;
    var q = a.layout;
    var r = oz(c, d);
    var s = oF(r, f);
    var t = s.startValue ?? null;
    var u = oE(t, e, n ?? oB);
    return bw.createElement(oy, {
      animationId: r,
      begin: h,
      duration: i,
      isActive: g,
      easing: j,
      onAnimationEnd: l,
      onAnimationStart: k,
      key: r
    }, a => {
      var b = e == null ? e : m(u, a, q);
      var c = o ? o(a) : a > 0;
      s.syncStepValue(b, a, c);
      if (b == null) {
        return null;
      } else {
        return p(b, a, t == null);
      }
    });
  }, "useAnimationCallbacks", 0, function (a, b) {
    var c;
    var d = function (a) {
      if (Array.isArray(a)) {
        return a;
      }
    }(c = (0, bw.useState)(false)) || function (a) {
      var b = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (b != null) {
        var c;
        var d;
        var e;
        var f;
        var g = [];
        var h = true;
        var i = false;
        try {
          e = (b = b.call(a)).next;
          false;
          for (; !(h = (c = e.call(b)).done) && (g.push(c.value), g.length !== 2); h = true);
        } catch (a) {
          i = true;
          d = a;
        } finally {
          try {
            if (!h && b.return != null && (f = b.return(), Object(f) !== f)) {
              return;
            }
          } finally {
            if (i) {
              throw d;
            }
          }
        }
        return g;
      }
    }(c) || function (a) {
      if (a) {
        if (typeof a == "string") {
          return oG(a, 2);
        }
        var b = {}.toString.call(a).slice(8, -1);
        if (b === "Object" && a.constructor) {
          b = a.constructor.name;
        }
        if (b === "Map" || b === "Set") {
          return Array.from(a);
        } else if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) {
          return oG(a, 2);
        } else {
          return undefined;
        }
      }
    }(c) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
    var e = d[0];
    var f = d[1];
    return {
      isAnimating: e,
      handleAnimationStart: (0, bw.useCallback)(() => {
        if (typeof a == "function") {
          a();
        }
        f(true);
      }, [a]),
      handleAnimationEnd: (0, bw.useCallback)(() => {
        if (typeof b == "function") {
          b();
        }
        f(false);
      }, [b])
    };
  }], 85146);
  var oI = bw["useId".toString()] ?? (() => {
    var a;
    return (function (a) {
      if (Array.isArray(a)) {
        return a;
      }
    }(a = bw.useState(() => aN("uid-"))) || function (a) {
      var b = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (b != null) {
        var c;
        var d;
        var e;
        var f;
        var g = [];
        var h = true;
        var i = false;
        try {
          e = (b = b.call(a)).next;
          false;
          for (; !(h = (c = e.call(b)).done) && (g.push(c.value), g.length !== 1); h = true);
        } catch (a) {
          i = true;
          d = a;
        } finally {
          try {
            if (!h && b.return != null && (f = b.return(), Object(f) !== f)) {
              return;
            }
          } finally {
            if (i) {
              throw d;
            }
          }
        }
        return g;
      }
    }(a) || function (a) {
      if (a) {
        if (typeof a == "string") {
          return oH(a, 1);
        }
        var b = {}.toString.call(a).slice(8, -1);
        if (b === "Object" && a.constructor) {
          b = a.constructor.name;
        }
        if (b === "Map" || b === "Set") {
          return Array.from(a);
        } else if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) {
          return oH(a, 1);
        } else {
          return undefined;
        }
      }
    }(a) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }())[0];
  });
  a.s(["useId", 0, oI], 49241);
  var oJ = (0, bw.createContext)(undefined);
  a.s(["RegisterGraphicalItemId", 0, a => {
    var b;
    var c;
    var d = a.id;
    var e = a.type;
    var f = a.children;
    b = `recharts-${e}`;
    c = oI();
    var g = d || (b ? `${b}-${c}` : c);
    return bw.createElement(oJ.Provider, {
      value: g
    }, f(g));
  }], 11448);
  var oK = cZ({
    name: "graphicalItems",
    initialState: {
      cartesianItems: [],
      polarItems: []
    },
    reducers: {
      addCartesianGraphicalItem: {
        reducer(a, b) {
          a.cartesianItems.push(b.payload);
        },
        prepare: cT()
      },
      replaceCartesianGraphicalItem: {
        reducer(a, b) {
          var c = b.payload;
          var d = c.prev;
          var e = c.next;
          var f = cA(a).cartesianItems.indexOf(d);
          if (f > -1) {
            a.cartesianItems[f] = e;
          }
        },
        prepare: cT()
      },
      removeCartesianGraphicalItem: {
        reducer(a, b) {
          var c = cA(a).cartesianItems.indexOf(b.payload);
          if (c > -1) {
            a.cartesianItems.splice(c, 1);
          }
        },
        prepare: cT()
      },
      addPolarGraphicalItem: {
        reducer(a, b) {
          a.polarItems.push(b.payload);
        },
        prepare: cT()
      },
      removePolarGraphicalItem: {
        reducer(a, b) {
          var c = cA(a).polarItems.indexOf(b.payload);
          if (c > -1) {
            a.polarItems.splice(c, 1);
          }
        },
        prepare: cT()
      },
      replacePolarGraphicalItem: {
        reducer(a, b) {
          var c = b.payload;
          var d = c.prev;
          var e = c.next;
          var f = cA(a).polarItems.indexOf(d);
          if (f > -1) {
            a.polarItems[f] = e;
          }
        },
        prepare: cT()
      }
    }
  });
  var oL = oK.actions;
  var oM = oL.addCartesianGraphicalItem;
  var oN = oL.replaceCartesianGraphicalItem;
  var oO = oL.removeCartesianGraphicalItem;
  var oP = oL.addPolarGraphicalItem;
  var oQ = oL.removePolarGraphicalItem;
  var oR = oL.replacePolarGraphicalItem;
  var oS = oK.reducer;
  var oT = (0, bw.memo)(a => {
    var b = bA();
    var c = (0, bw.useRef)(null);
    (0, bw.useLayoutEffect)(() => {
      if (c.current === null) {
        b(oM(a));
      } else if (c.current !== a) {
        b(oN({
          prev: c.current,
          next: a
        }));
      }
      c.current = a;
    }, [b, a]);
    (0, bw.useLayoutEffect)(() => () => {
      if (c.current) {
        b(oO(c.current));
        c.current = null;
      }
    }, [b]);
    return null;
  });
  var oU = (0, bw.memo)(a => {
    var b = bA();
    var c = (0, bw.useRef)(null);
    (0, bw.useLayoutEffect)(() => {
      if (c.current === null) {
        b(oP(a));
      } else if (c.current !== a) {
        b(oR({
          prev: c.current,
          next: a
        }));
      }
      c.current = a;
    }, [b, a]);
    (0, bw.useLayoutEffect)(() => () => {
      if (c.current) {
        b(oQ(c.current));
        c.current = null;
      }
    }, [b]);
    return null;
  });
  a.s(["SetCartesianGraphicalItem", 0, oT, "SetPolarGraphicalItem", 0, oU], 50272);
  var oV = a.i(10652);
  var oW = ad(a => a.zIndex.zIndexMap, (a, b) => b, (a, b, c) => c, (a, b, c) => {
    if (b != null) {
      var d = a[b];
      if (d != null) {
        if (c) {
          return d.panoramaElement;
        } else {
          return d.element;
        }
      }
    }
  });
  var oX = ad(a => a.zIndex.zIndexMap, a => Array.from(new Set(Object.keys(a).map(a => parseInt(a, 10)).concat(Object.values(e0)))).sort((a, b) => a - b), {
    memoizeOptions: {
      resultEqualityCheck: function (a, b) {
        if (a.length === b.length) {
          for (var c = 0; c < a.length; c++) {
            if (a[c] !== b[c]) {
              return false;
            }
          }
          return true;
        }
        return false;
      }
    }
  });
  function oY(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function oZ(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        oY(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        oY(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  var o$ = {
    zIndexMap: Object.values(e0).reduce((a, b) => oZ(oZ({}, a), {}, {
      [b]: {
        element: undefined,
        panoramaElement: undefined,
        consumers: 0
      }
    }), {})
  };
  var o_ = new Set(Object.values(e0));
  var o0 = cZ({
    name: "zIndex",
    initialState: o$,
    reducers: {
      registerZIndexPortal: {
        reducer: (a, b) => {
          var c = b.payload.zIndex;
          if (a.zIndexMap[c]) {
            a.zIndexMap[c].consumers += 1;
          } else {
            a.zIndexMap[c] = {
              consumers: 1,
              element: undefined,
              panoramaElement: undefined
            };
          }
        },
        prepare: cT()
      },
      unregisterZIndexPortal: {
        reducer: (a, b) => {
          var c = b.payload.zIndex;
          if (a.zIndexMap[c]) {
            a.zIndexMap[c].consumers -= 1;
            if (a.zIndexMap[c].consumers <= 0 && !o_.has(c)) {
              delete a.zIndexMap[c];
            }
          }
        },
        prepare: cT()
      },
      registerZIndexPortalElement: {
        reducer: (a, b) => {
          var c = b.payload;
          var d = c.zIndex;
          var e = c.element;
          var f = c.isPanorama;
          if (a.zIndexMap[d]) {
            if (f) {
              a.zIndexMap[d].panoramaElement = e;
            } else {
              a.zIndexMap[d].element = e;
            }
          } else {
            a.zIndexMap[d] = {
              consumers: 0,
              element: f ? undefined : e,
              panoramaElement: f ? e : undefined
            };
          }
        },
        prepare: cT()
      },
      unregisterZIndexPortalElement: {
        reducer: (a, b) => {
          var c = b.payload.zIndex;
          if (a.zIndexMap[c]) {
            if (b.payload.isPanorama) {
              a.zIndexMap[c].panoramaElement = undefined;
            } else {
              a.zIndexMap[c].element = undefined;
            }
          }
        },
        prepare: cT()
      }
    }
  });
  var o1 = o0.actions;
  var o2 = o1.registerZIndexPortal;
  var o3 = o1.unregisterZIndexPortal;
  var o4 = o1.registerZIndexPortalElement;
  var o5 = o1.unregisterZIndexPortalElement;
  var o6 = o0.reducer;
  function o7(a) {
    var b = a.zIndex;
    var c = a.children;
    var d = d5() && b !== undefined && b !== 0;
    var e = dD();
    var f = (0, bw.useRef)(undefined);
    var g = (0, bw.useRef)(new Set());
    var h = bA();
    var i = bE(a => oW(a, b, e));
    (0, bw.useLayoutEffect)(() => {
      if (!d) {
        var a = g.current;
        a.forEach(a => {
          h(o3({
            zIndex: a
          }));
        });
        a.clear();
        f.current = undefined;
        return;
      }
      if (!g.current.has(b)) {
        h(o2({
          zIndex: b
        }));
        g.current.add(b);
      }
      if (i) {
        f.current = i;
        var c = g.current;
        c.forEach(a => {
          if (a !== b) {
            h(o3({
              zIndex: a
            }));
            c.delete(a);
          }
        });
      }
    }, [h, b, d, i]);
    (0, bw.useLayoutEffect)(() => {
      var a = g.current;
      return () => {
        a.forEach(a => {
          h(o3({
            zIndex: a
          }));
        });
        a.clear();
      };
    }, [h]);
    if (!d) {
      return c;
    }
    var j = i ?? f.current;
    if (j) {
      return (0, oV.createPortal)(c, j);
    } else {
      return null;
    }
  }
  a.s(["ZIndexLayer", 0, o7], 79370);
  var o8 = ["labelRef"];
  var o9 = ["content"];
  function pa(a, b) {
    if (a == null) {
      return {};
    }
    var c;
    var d;
    var e = function (a, b) {
      if (a == null) {
        return {};
      }
      var c = {};
      for (var d in a) {
        if ({}.hasOwnProperty.call(a, d)) {
          if (b.indexOf(d) !== -1) {
            continue;
          }
          c[d] = a[d];
        }
      }
      return c;
    }(a, b);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(a);
      for (d = 0; d < f.length; d++) {
        c = f[d];
        if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
          e[c] = a[c];
        }
      }
    }
    return e;
  }
  function pb(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function pc(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        pb(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        pb(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  function pd() {
    return (pd = Object.assign.bind()).apply(null, arguments);
  }
  var pe = (0, bw.createContext)(null);
  var pf = () => {
    var a = (0, bw.useContext)(pe);
    var b = dZ();
    return a || (b ? aZ(b) : undefined);
  };
  var pg = (0, bw.createContext)(null);
  var ph = a => a != null && typeof a == "function";
  var pi = a => a != null && "cx" in a && aK(a.cx);
  var pj = {
    angle: 0,
    offset: 5,
    zIndex: e0.label,
    position: "middle",
    textBreakAll: false
  };
  function pk(a) {
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var j;
    var k;
    var l;
    var m = l2(a, pj);
    var n = m.viewBox;
    var o = m.parentViewBox;
    var p = m.position;
    var q = m.value;
    var r = m.children;
    var s = m.content;
    var t = m.className;
    var u = m.textBreakAll;
    var v = m.labelRef;
    b = (0, bw.useContext)(pg);
    c = bE(fh);
    var w = b || c;
    var x = pf();
    var y = function (a) {
      if (!pi(a)) {
        return a;
      }
      var b = a.cx;
      var c = a.cy;
      var d = a.outerRadius;
      var e = d * 2;
      return {
        x: b - d,
        y: c - d,
        width: e,
        upperWidth: e,
        lowerWidth: e,
        height: e
      };
    }(j = n == null ? p === "center" ? x : w ?? x : pi(n) ? n : aZ(n));
    if (!j || aS(q) && aS(r) && !(0, bw.isValidElement)(s) && typeof s != "function") {
      return null;
    }
    var z = pi(j) && (p === "insideStart" || p === "insideEnd" || p === "end");
    if (pi(j)) {
      if (!z) {
        l = ((a, b, c) => {
          var d = a.cx;
          var e = a.cy;
          var f = a.innerRadius;
          var g = a.outerRadius;
          var h = (a.startAngle + a.endAngle) / 2;
          if (c === "outside") {
            var i = eZ(d, e, g + b, h);
            var j = i.x;
            return {
              x: j,
              y: i.y,
              textAnchor: j >= d ? "start" : "end",
              verticalAnchor: "middle"
            };
          }
          if (c === "center") {
            return {
              x: d,
              y: e,
              textAnchor: "middle",
              verticalAnchor: "middle"
            };
          }
          if (c === "centerTop") {
            return {
              x: d,
              y: e,
              textAnchor: "middle",
              verticalAnchor: "start"
            };
          }
          if (c === "centerBottom") {
            return {
              x: d,
              y: e,
              textAnchor: "middle",
              verticalAnchor: "end"
            };
          }
          var k = eZ(d, e, (f + g) / 2, h);
          return {
            x: k.x,
            y: k.y,
            textAnchor: "middle",
            verticalAnchor: "middle"
          };
        })(j, m.offset, m.position);
      }
    } else if (y) {
      var A = a0({
        viewBox: y,
        position: p,
        offset: m.offset,
        parentViewBox: pi(o) ? undefined : o,
        clamp: true
      });
      l = pc(pc({
        x: A.x,
        y: A.y,
        textAnchor: A.horizontalAnchor,
        verticalAnchor: A.verticalAnchor
      }, A.width !== undefined ? {
        width: A.width
      } : {}), A.height !== undefined ? {
        height: A.height
      } : {});
    }
    var B = pc(pc(pc(pc({}, ((g = l) == null ? undefined : g.x) !== undefined ? {
      x: l.x
    } : {}), ((h = l) == null ? undefined : h.y) !== undefined ? {
      y: l.y
    } : {}), m), {}, {
      viewBox: j
    });
    if ((0, bw.isValidElement)(s)) {
      B.labelRef;
      var C = pa(B, o8);
      return (0, bw.cloneElement)(s, C);
    }
    if (typeof s == "function") {
      B.content;
      var D = pa(B, o9);
      k = (0, bw.createElement)(s, D);
      if ((0, bw.isValidElement)(k)) {
        return k;
      }
    } else {
      d = m.value;
      e = m.formatter;
      f = aS(m.children) ? d : m.children;
      k = typeof e == "function" ? e(f) : f;
    }
    var E = lm(m);
    if (z && pi(j)) {
      return ((a, b, c, d, e) => {
        var f;
        var g;
        var h = a.offset;
        var j = a.className;
        var k = e.cx;
        var l = e.cy;
        var m = e.innerRadius;
        var n = e.outerRadius;
        var o = e.startAngle;
        var p = e.endAngle;
        var q = e.clockWise;
        var r = (m + n) / 2;
        var s = aH(p - o) * Math.min(Math.abs(p - o), 360);
        var t = s >= 0 ? 1 : -1;
        switch (b) {
          case "insideStart":
            f = o + t * h;
            g = q;
            break;
          case "insideEnd":
            f = p - t * h;
            g = !q;
            break;
          case "end":
            f = p + t * h;
            g = q;
            break;
          default:
            throw Error(`Unsupported position ${b}`);
        }
        g = s <= 0 ? g : !g;
        var u = eZ(k, l, r, f);
        var v = eZ(k, l, r, f + (g ? 1 : -1) * 359);
        var w = `M${u.x},${u.y}
    A${r},${r},0,1,${+!g},
    ${v.x},${v.y}`;
        var x = aS(a.id) ? aN("recharts-radial-line-") : a.id;
        return bw.createElement("text", pd({}, d, {
          dominantBaseline: "central",
          className: i("recharts-radial-bar-label", j)
        }), bw.createElement("defs", null, bw.createElement("path", {
          id: x,
          d: w
        })), bw.createElement("textPath", {
          xlinkHref: `#${x}`
        }, c));
      })(m, p, k, E, j);
    } else if (l == null) {
      return null;
    } else {
      return bw.createElement(o7, {
        zIndex: m.zIndex
      }, bw.createElement(mJ, pd({
        ref: v,
        className: i("recharts-label", t === undefined ? "" : t)
      }, E, l, {
        textAnchor: mB(E.textAnchor) ? E.textAnchor : l.textAnchor,
        breakAll: u
      }), k));
    }
  }
  pk.displayName = "Label";
  a.s(["CartesianLabelContextProvider", 0, a => {
    var b = a.x;
    var c = a.y;
    var d = a.upperWidth;
    var e = a.lowerWidth;
    var f = a.width;
    var g = a.height;
    var h = a.children;
    var i = (0, bw.useMemo)(() => ({
      x: b,
      y: c,
      upperWidth: d,
      lowerWidth: e,
      width: f,
      height: g
    }), [b, c, d, e, f, g]);
    return bw.createElement(pe.Provider, {
      value: i
    }, h);
  }, "CartesianLabelFromLabelProp", 0, function (a) {
    var b = a.label;
    var c = a.labelRef;
    return ((a, b, c) => {
      if (!a) {
        return null;
      }
      var d = {
        viewBox: b,
        labelRef: c
      };
      if (a === true) {
        return bw.createElement(pk, pd({
          key: "label-implicit"
        }, d));
      } else if (aL(a)) {
        return bw.createElement(pk, pd({
          key: "label-implicit",
          value: a
        }, d));
      } else if ((0, bw.isValidElement)(a)) {
        if (a.type === pk) {
          return (0, bw.cloneElement)(a, pc({
            key: "label-implicit"
          }, d));
        } else {
          return bw.createElement(pk, pd({
            key: "label-implicit",
            content: a
          }, d));
        }
      } else if (ph(a)) {
        return bw.createElement(pk, pd({
          key: "label-implicit",
          content: a
        }, d));
      } else if (a && typeof a == "object") {
        return bw.createElement(pk, pd({}, a, {
          key: "label-implicit"
        }, d));
      } else {
        return null;
      }
    })(b, pf(), c) || null;
  }, "Label", 0, pk, "PolarLabelContextProvider", 0, a => {
    var b = a.cx;
    var c = a.cy;
    var d = a.innerRadius;
    var e = a.outerRadius;
    var f = a.startAngle;
    var g = a.endAngle;
    var h = a.clockWise;
    var i = a.children;
    var j = (0, bw.useMemo)(() => ({
      cx: b,
      cy: c,
      innerRadius: d,
      outerRadius: e,
      startAngle: f,
      endAngle: g,
      clockWise: h
    }), [b, c, d, e, f, g, h]);
    return bw.createElement(pg.Provider, {
      value: j
    }, i);
  }, "isLabelContentAFunction", 0, ph], 85910);
  var pl = ["valueAccessor"];
  var pm = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
  function pn() {
    return (pn = Object.assign.bind()).apply(null, arguments);
  }
  function po(a, b) {
    if (a == null) {
      return {};
    }
    var c;
    var d;
    var e = function (a, b) {
      if (a == null) {
        return {};
      }
      var c = {};
      for (var d in a) {
        if ({}.hasOwnProperty.call(a, d)) {
          if (b.indexOf(d) !== -1) {
            continue;
          }
          c[d] = a[d];
        }
      }
      return c;
    }(a, b);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(a);
      for (d = 0; d < f.length; d++) {
        c = f[d];
        if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
          e[c] = a[c];
        }
      }
    }
    return e;
  }
  var pp = a => {
    var b = Array.isArray(a.value) ? a.value[a.value.length - 1] : a.value;
    if (mC(b)) {
      return b;
    }
  };
  var pq = (0, bw.createContext)(undefined);
  var pr = pq.Provider;
  var ps = (0, bw.createContext)(undefined);
  var pt = ps.Provider;
  function pu(a) {
    var b = a.valueAccessor;
    var c = b === undefined ? pp : b;
    var d = po(a, pl);
    var e = d.dataKey;
    d.clockWise;
    var f = d.id;
    var g = d.textBreakAll;
    var h = d.zIndex;
    var i = po(d, pm);
    var j = (0, bw.useContext)(pq);
    var k = (0, bw.useContext)(ps);
    var l = j || k;
    if (l && l.length) {
      return bw.createElement(o7, {
        zIndex: h ?? e0.label
      }, bw.createElement(lp, {
        className: "recharts-label-list"
      }, l.map((a, b) => {
        var j = aS(e) ? c(a, b) : a5(a.payload, e);
        var k = aS(f) ? {} : {
          id: `${f}-${b}`
        };
        return bw.createElement(pk, pn({
          key: `label-${b}`
        }, lm(a), i, k, {
          fill: d.fill ?? a.fill,
          parentViewBox: a.parentViewBox,
          value: j,
          textBreakAll: g,
          viewBox: a.viewBox,
          index: b,
          zIndex: 0
        }));
      })));
    } else {
      return null;
    }
  }
  pu.displayName = "LabelList";
  a.s(["CartesianLabelListContextProvider", 0, pr, "LabelListFromLabelProp", 0, function (a) {
    var b = a.label;
    if (b) {
      if (b === true) {
        return bw.createElement(pu, {
          key: "labelList-implicit"
        });
      } else if (bw.isValidElement(b) || ph(b)) {
        return bw.createElement(pu, {
          key: "labelList-implicit",
          content: b
        });
      } else if (typeof b == "object") {
        return bw.createElement(pu, pn({
          key: "labelList-implicit"
        }, b, {
          type: String(b.type)
        }));
      } else {
        return null;
      }
    } else {
      return null;
    }
  }, "PolarLabelListContextProvider", 0, pt], 80468);
  a.s(["getClassNameFromUnknown", 0, function (a) {
    if (a && typeof a == "object" && "className" in a && typeof a.className == "string") {
      return a.className;
    } else {
      return "";
    }
  }], 11715);
  var pv = cZ({
    name: "options",
    initialState: {
      chartName: "",
      tooltipPayloadSearcher: () => undefined,
      eventEmitter: undefined,
      defaultTooltipEventType: "axis"
    },
    reducers: {
      createEventEmitter: a => {
        if (a.eventEmitter == null) {
          a.eventEmitter = Symbol("rechartsEventEmitter");
        }
      }
    }
  });
  var pw = pv.reducer;
  var px = pv.actions.createEventEmitter;
  a.s(["arrayTooltipSearcher", 0, (a, b) => {
    if (b && Array.isArray(a)) {
      var c = Number.parseInt(b, 10);
      if (!aI(c)) {
        return a[c];
      }
    }
  }, "createEventEmitter", 0, px, "optionsReducer", 0, pw], 61053);
  a.i(19617);
  var py = {
    notify() {},
    get: () => []
  };
  var pz = typeof navigator !== "undefined" && navigator.product === "ReactNative";
  var pA = pz ? bw.useLayoutEffect : bw.useEffect;
  function pB(a, b) {
    if (a === b) {
      return a !== 0 || b !== 0 || 1 / a == 1 / b;
    } else {
      return a != a && b != b;
    }
  }
  var pC = Symbol.for("react-redux-context");
  var pD = typeof globalThis !== "undefined" ? globalThis : {};
  var pE = function () {
    if (!bw.createContext) {
      return {};
    }
    let a = pD[pC] ??= new Map();
    let b = a.get(bw.createContext);
    if (!b) {
      b = bw.createContext(null);
      a.set(bw.createContext, b);
    }
    return b;
  }();
  function pF(a) {
    let {
      children: b,
      context: c,
      serverState: d,
      store: e
    } = a;
    let f = bw.useMemo(() => {
      let a = function (a) {
        let b;
        let c = py;
        let d = 0;
        let e = false;
        function f() {
          if (i.onStateChange) {
            i.onStateChange();
          }
        }
        function g() {
          d++;
          if (!b) {
            let d;
            let e;
            b = a.subscribe(f);
            d = null;
            e = null;
            c = {
              clear() {
                d = null;
                e = null;
              },
              notify() {
                let a = d;
                while (a) {
                  a.callback();
                  a = a.next;
                }
              },
              get() {
                let a = [];
                let b = d;
                while (b) {
                  a.push(b);
                  b = b.next;
                }
                return a;
              },
              subscribe(a) {
                let b = true;
                let c = e = {
                  callback: a,
                  next: null,
                  prev: e
                };
                if (c.prev) {
                  c.prev.next = c;
                } else {
                  d = c;
                }
                return function () {
                  if (b && d !== null) {
                    b = false;
                    if (c.next) {
                      c.next.prev = c.prev;
                    } else {
                      e = c.prev;
                    }
                    if (c.prev) {
                      c.prev.next = c.next;
                    } else {
                      d = c.next;
                    }
                  }
                };
              }
            };
          }
        }
        function h() {
          d--;
          if (b && d === 0) {
            b();
            b = undefined;
            c.clear();
            c = py;
          }
        }
        let i = {
          addNestedSub: function (a) {
            g();
            let b = c.subscribe(a);
            let d = false;
            return () => {
              if (!d) {
                d = true;
                b();
                h();
              }
            };
          },
          notifyNestedSubs: function () {
            c.notify();
          },
          handleChangeWrapper: f,
          isSubscribed: function () {
            return e;
          },
          trySubscribe: function () {
            if (!e) {
              e = true;
              g();
            }
          },
          tryUnsubscribe: function () {
            if (e) {
              e = false;
              h();
            }
          },
          getListeners: () => c
        };
        return i;
      }(e);
      return {
        store: e,
        subscription: a,
        getServerState: d ? () => d : undefined
      };
    }, [e, d]);
    let g = bw.useMemo(() => e.getState(), [e]);
    pA(() => {
      let {
        subscription: a
      } = f;
      a.onStateChange = a.notifyNestedSubs;
      a.trySubscribe();
      if (g !== e.getState()) {
        a.notifyNestedSubs();
      }
      return () => {
        a.tryUnsubscribe();
        a.onStateChange = undefined;
      };
    }, [f, g]);
    return bw.createElement((c || pE).Provider, {
      value: f
    }, b);
  }
  function pG(a = pE) {
    return function () {
      return bw.useContext(a);
    };
  }
  var pH = pG();
  var pI = cZ({
    name: "chartData",
    initialState: {
      chartData: undefined,
      computedData: undefined,
      dataStartIndex: 0,
      dataEndIndex: 0
    },
    reducers: {
      setChartData(a, b) {
        a.chartData = b.payload;
        if (b.payload == null) {
          a.dataStartIndex = 0;
          a.dataEndIndex = 0;
          return;
        }
        if (b.payload.length > 0 && a.dataEndIndex !== b.payload.length - 1) {
          a.dataEndIndex = b.payload.length - 1;
        }
      },
      setComputedData(a, b) {
        a.computedData = b.payload;
      },
      setDataStartEndIndexes(a, b) {
        var c = b.payload;
        var d = c.startIndex;
        var e = c.endIndex;
        if (d != null) {
          a.dataStartIndex = d;
        }
        if (e != null) {
          a.dataEndIndex = e;
        }
      }
    }
  });
  var pJ = pI.actions;
  var pK = pJ.setChartData;
  var pL = pJ.setDataStartEndIndexes;
  pJ.setComputedData;
  var pM = pI.reducer;
  function pN(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function pO(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        pN(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        pN(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  var pP = (a, b, c, d, e) => {
    var f = (b == null ? undefined : b.length) ?? 0;
    if (f <= 1 || a == null) {
      return 0;
    }
    if (d === "angleAxis" && e != null && Math.abs(Math.abs(e[1] - e[0]) - 360) <= 0.000001) {
      var g = e[1] - e[0];
      var h = (b, c, d) => [a, a + g, a - g].some(a => (d ? a >= b : a > b) && a <= c);
      for (var i = 0; i < f; i++) {
        var j;
        var k = i > 0 ? (p = c[i - 1]) == null ? undefined : p.coordinate : (q = c[f - 1]) == null ? undefined : q.coordinate;
        var l = (r = c[i]) == null ? undefined : r.coordinate;
        var m = i >= f - 1 ? (s = c[0]) == null ? undefined : s.coordinate : (t = c[i + 1]) == null ? undefined : t.coordinate;
        var n = undefined;
        if (k != null && l != null && m != null) {
          if (aH(l - k) !== aH(m - l)) {
            var p;
            var q;
            var r;
            var s;
            var t;
            var u;
            var v = [];
            if (aH(m - l) === aH(e[1] - e[0])) {
              n = m;
              var w = l + e[1] - e[0];
              v[0] = Math.min(w, (w + k) / 2);
              v[1] = Math.max(w, (w + k) / 2);
            } else {
              n = k;
              var x = m + e[1] - e[0];
              v[0] = Math.min(l, (x + l) / 2);
              v[1] = Math.max(l, (x + l) / 2);
            }
            var y = [Math.min(l, (n + l) / 2), Math.max(l, (n + l) / 2)];
            if (h(y[0], y[1], false) || h(v[0], v[1], true)) {
              if ((u = c[i]) == null) {
                return undefined;
              } else {
                return u.index;
              }
            }
          } else if (h((Math.min(k, m) + l) / 2, (Math.max(k, m) + l) / 2, false)) {
            if ((j = c[i]) == null) {
              return undefined;
            } else {
              return j.index;
            }
          }
        }
      }
    } else if (b) {
      for (var z = 0; z < f; z++) {
        var A = b[z];
        if (A != null) {
          var B = b[z + 1];
          var C = b[z - 1];
          if (z === 0 && B != null && a <= (A.coordinate + B.coordinate) / 2 || z === f - 1 && C != null && a > (A.coordinate + C.coordinate) / 2 || z > 0 && z < f - 1 && C != null && B != null && a > (A.coordinate + C.coordinate) / 2 && a <= (A.coordinate + B.coordinate) / 2) {
            return A.index;
          }
        }
      }
    }
    return -1;
  };
  var pQ = () => bE(eS);
  var pR = (a, b) => b;
  var pS = (a, b, c) => c;
  var pT = (a, b, c, d) => d;
  var pU = ad(nV, a => av(a, a => a.coordinate));
  var pV = ad([nh, pR, pS, pT], nc);
  var pW = ad([pV, nt, j1, nM], nd);
  var pX = (a, b, c) => {
    if (b != null) {
      var d = nh(a);
      if (b === "axis") {
        if (c === "hover") {
          return d.axisInteraction.hover.dataKey;
        } else {
          return d.axisInteraction.click.dataKey;
        }
      } else if (c === "hover") {
        return d.itemInteraction.hover.dataKey;
      } else {
        return d.itemInteraction.click.dataKey;
      }
    }
  };
  var pY = ad([nh, pR, pS, pT], nf);
  var pZ = ad([bh, bi, d2, br, nV, pT, pY], ne);
  var p$ = ad([pV, pZ], (a, b) => {
    return a.coordinate ?? b;
  });
  var p_ = ad([nV, pW], m9);
  var p0 = ad([pY, pW, af, j1, p_, ng, pR], nl);
  var p1 = ad([pV, pW], (a, b) => ({
    isActive: a.active && b != null,
    activeIndex: b
  }));
  var p2 = (a, b, c, d, e, f, g, h) => {
    if (a && b && d && e && f) {
      if (b === "horizontal" || b === "vertical") {
        var i = a;
        var j = b;
        var k = d;
        var l = e;
        var m = f;
        var n = g;
        var o = h;
        if (i && k && l && m && (p = i.relativeX, q = i.relativeY, p >= o.left && p <= o.left + o.width && q >= o.top && q <= o.top + o.height)) {
          var p;
          var q;
          var r = pP(bf(i, j), n, m, k, l);
          var s = ((a, b, c, d) => {
            var e = b.find(a => a && a.index === c);
            if (e) {
              if (a === "horizontal") {
                return {
                  x: e.coordinate,
                  y: d.relativeY
                };
              }
              if (a === "vertical") {
                return {
                  x: d.relativeX,
                  y: e.coordinate
                };
              }
            }
            return {
              x: 0,
              y: 0
            };
          })(j, m, r, i);
          return {
            activeIndex: String(r),
            activeCoordinate: s
          };
        }
        return;
      }
      if (a && d && e && f && c) {
        var t = e_(a, c);
        if (t) {
          var u = pP(bg(t, b), g, f, d, e);
          var v = ((a, b, c, d) => {
            var e = b.find(a => a && a.index === c);
            if (e) {
              if (a === "centric") {
                var f = e.coordinate;
                var g = d.radius;
                return pO(pO(pO({}, d), eZ(d.cx, d.cy, g, f)), {}, {
                  angle: f,
                  radius: g
                });
              }
              var h = e.coordinate;
              var i = d.angle;
              return pO(pO(pO({}, d), eZ(d.cx, d.cy, h, i)), {}, {
                angle: i,
                radius: h
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
          })(b, f, u, t);
          return {
            activeIndex: String(u),
            activeCoordinate: v
          };
        }
        return;
      }
    }
  };
  a.s(["combineActiveProps", 0, p2, "selectActiveCoordinate", 0, p$, "selectActiveLabel", 0, p_, "selectCoordinateForDefaultIndex", 0, pZ, "selectIsTooltipActive", 0, p1, "selectOrderedTooltipTicks", 0, pU, "selectTooltipDataKey", 0, pX, "selectTooltipPayload", 0, p0, "useChartName", 0, pQ], 670);
  var p3 = ad([(a, b) => b, d2, fh, fp, nQ, nV, pU, br], p2);
  function p4(a) {
    var b;
    var c;
    var d = a.currentTarget.getBoundingClientRect();
    if ("getBBox" in a.currentTarget && typeof a.currentTarget.getBBox == "function") {
      var e = a.currentTarget.getBBox();
      b = e.width > 0 ? d.width / e.width : 1;
      c = e.height > 0 ? d.height / e.height : 1;
    } else {
      var f = a.currentTarget;
      b = f.offsetWidth > 0 ? d.width / f.offsetWidth : 1;
      c = f.offsetHeight > 0 ? d.height / f.offsetHeight : 1;
    }
    var g = (a, e) => ({
      relativeX: Math.round((a - d.left) / b),
      relativeY: Math.round((e - d.top) / c)
    });
    if ("touches" in a) {
      return Array.from(a.touches).map(a => g(a.clientX, a.clientY));
    } else {
      return g(a.clientX, a.clientY);
    }
  }
  var p5 = cO("mouseClick");
  var p6 = dt();
  p6.startListening({
    actionCreator: p5,
    effect: (a, b) => {
      var c = a.payload;
      var d = p3(b.getState(), p4(c));
      if ((d == null ? undefined : d.activeIndex) != null) {
        b.dispatch(m1({
          activeIndex: d.activeIndex,
          activeDataKey: undefined,
          activeCoordinate: d.activeCoordinate
        }));
      }
    }
  });
  var p7 = cO("mouseMove");
  var p8 = dt();
  var p9 = null;
  var qa = null;
  var qb = null;
  function qc(a, b) {
    if (b instanceof HTMLElement) {
      return `HTMLElement <${b.tagName} class="${b.className}">`;
    } else if (b === window) {
      return "global.window";
    } else if (a === "children" && typeof b == "object" && b !== null) {
      return "<<CHILDREN>>";
    } else {
      return b;
    }
  }
  function qd(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function qe(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        qd(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        qd(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  p8.startListening({
    actionCreator: p7,
    effect: (a, b) => {
      var c = a.payload;
      var d = b.getState().eventSettings;
      var e = d.throttleDelay;
      var f = d.throttledEvents;
      var g = f === "all" || (f == null ? undefined : f.includes("mousemove"));
      if (p9 !== null) {
        cancelAnimationFrame(p9);
        p9 = null;
      }
      if (qa !== null && (typeof e != "number" || !g)) {
        clearTimeout(qa);
        qa = null;
      }
      qb = p4(c);
      var h = () => {
        var a = b.getState();
        var c = m8(a, a.tooltip.settings.shared);
        if (!qb) {
          p9 = null;
          qa = null;
          return;
        }
        if (c === "axis") {
          var d = p3(a, qb);
          if ((d == null ? undefined : d.activeIndex) != null) {
            b.dispatch(m0({
              activeIndex: d.activeIndex,
              activeDataKey: undefined,
              activeCoordinate: d.activeCoordinate
            }));
          } else {
            b.dispatch(m$());
          }
        }
        p9 = null;
        qa = null;
      };
      if (g) {
        if (e === "raf") {
          p9 = requestAnimationFrame(h);
        } else if (typeof e == "number" && qa === null) {
          qa = setTimeout(h, e);
        }
      } else {
        h();
      }
    }
  });
  var qf = cZ({
    name: "cartesianAxis",
    initialState: {
      xAxis: {},
      yAxis: {},
      zAxis: {}
    },
    reducers: {
      addXAxis: {
        reducer(a, b) {
          a.xAxis[b.payload.id] = b.payload;
        },
        prepare: cT()
      },
      replaceXAxis: {
        reducer(a, b) {
          var c = b.payload;
          var d = c.prev;
          var e = c.next;
          if (a.xAxis[d.id] !== undefined) {
            if (d.id !== e.id) {
              delete a.xAxis[d.id];
            }
            a.xAxis[e.id] = e;
          }
        },
        prepare: cT()
      },
      removeXAxis: {
        reducer(a, b) {
          delete a.xAxis[b.payload.id];
        },
        prepare: cT()
      },
      addYAxis: {
        reducer(a, b) {
          a.yAxis[b.payload.id] = b.payload;
        },
        prepare: cT()
      },
      replaceYAxis: {
        reducer(a, b) {
          var c = b.payload;
          var d = c.prev;
          var e = c.next;
          if (a.yAxis[d.id] !== undefined) {
            if (d.id !== e.id) {
              delete a.yAxis[d.id];
            }
            a.yAxis[e.id] = e;
          }
        },
        prepare: cT()
      },
      removeYAxis: {
        reducer(a, b) {
          delete a.yAxis[b.payload.id];
        },
        prepare: cT()
      },
      addZAxis: {
        reducer(a, b) {
          a.zAxis[b.payload.id] = b.payload;
        },
        prepare: cT()
      },
      replaceZAxis: {
        reducer(a, b) {
          var c = b.payload;
          var d = c.prev;
          var e = c.next;
          if (a.zAxis[d.id] !== undefined) {
            if (d.id !== e.id) {
              delete a.zAxis[d.id];
            }
            a.zAxis[e.id] = e;
          }
        },
        prepare: cT()
      },
      removeZAxis: {
        reducer(a, b) {
          delete a.zAxis[b.payload.id];
        },
        prepare: cT()
      },
      updateYAxisWidth(a, b) {
        var c = b.payload;
        var d = c.id;
        var e = c.width;
        var f = a.yAxis[d];
        if (f) {
          var h = f.widthHistory || [];
          if (h.length === 3 && h[0] === h[2] && e === h[1] && e !== f.width && Math.abs(e - (h[0] ?? 0)) <= 1) {
            return;
          }
          var i = [...h, e].slice(-3);
          a.yAxis[d] = qe(qe({}, f), {}, {
            width: e,
            widthHistory: i
          });
        }
      },
      updateXAxisHeight(a, b) {
        var c = b.payload;
        var d = c.id;
        var e = c.height;
        var f = a.xAxis[d];
        if (f) {
          var h = f.heightHistory || [];
          if (h.length === 3 && h[0] === h[2] && e === h[1] && e !== f.height && Math.abs(e - (h[0] ?? 0)) <= 1) {
            return;
          }
          var i = [...h, e].slice(-3);
          a.xAxis[d] = qe(qe({}, f), {}, {
            height: e,
            heightHistory: i
          });
        }
      }
    }
  });
  var qg = qf.actions;
  var qh = qg.addXAxis;
  var qi = qg.replaceXAxis;
  var qj = qg.removeXAxis;
  var qk = qg.addYAxis;
  var ql = qg.replaceYAxis;
  var qm = qg.removeYAxis;
  qg.addZAxis;
  qg.replaceZAxis;
  qg.removeZAxis;
  var qn = qg.updateYAxisWidth;
  var qo = qg.updateXAxisHeight;
  var qp = qf.reducer;
  a.s(["addXAxis", 0, qh, "addYAxis", 0, qk, "cartesianAxisReducer", 0, qp, "defaultAxisId", 0, 0, "removeXAxis", 0, qj, "removeYAxis", 0, qm, "replaceXAxis", 0, qi, "replaceYAxis", 0, ql, "updateXAxisHeight", 0, qo, "updateYAxisWidth", 0, qn], 12711);
  var qq = cZ({
    name: "referenceElements",
    initialState: {
      dots: [],
      areas: [],
      lines: []
    },
    reducers: {
      addDot: (a, b) => {
        a.dots.push(b.payload);
      },
      removeDot: (a, b) => {
        var c = cA(a).dots.findIndex(a => a === b.payload);
        if (c !== -1) {
          a.dots.splice(c, 1);
        }
      },
      addArea: (a, b) => {
        a.areas.push(b.payload);
      },
      removeArea: (a, b) => {
        var c = cA(a).areas.findIndex(a => a === b.payload);
        if (c !== -1) {
          a.areas.splice(c, 1);
        }
      },
      addLine: (a, b) => {
        a.lines.push(b.payload);
      },
      removeLine: (a, b) => {
        var c = cA(a).lines.findIndex(a => a === b.payload);
        if (c !== -1) {
          a.lines.splice(c, 1);
        }
      }
    }
  });
  var qr = qq.actions;
  qr.addDot;
  qr.removeDot;
  qr.addArea;
  qr.removeArea;
  qr.addLine;
  qr.removeLine;
  var qs = qq.reducer;
  var qt = {
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
  var qu = cZ({
    name: "brush",
    initialState: qt,
    reducers: {
      setBrushSettings: (a, b) => b.payload == null ? qt : b.payload
    }
  });
  qu.actions.setBrushSettings;
  var qv = qu.reducer;
  var qw = {
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
  var qx = cZ({
    name: "rootProps",
    initialState: qw,
    reducers: {
      updateOptions: (a, b) => {
        a.accessibilityLayer = b.payload.accessibilityLayer;
        a.barCategoryGap = b.payload.barCategoryGap;
        a.barGap = b.payload.barGap ?? qw.barGap;
        a.barSize = b.payload.barSize;
        a.maxBarSize = b.payload.maxBarSize;
        a.stackOffset = b.payload.stackOffset;
        a.syncId = b.payload.syncId;
        a.syncMethod = b.payload.syncMethod;
        a.className = b.payload.className;
        a.baseValue = b.payload.baseValue;
        a.reverseStackOrder = b.payload.reverseStackOrder;
      }
    }
  });
  var qy = qx.reducer;
  var qz = qx.actions.updateOptions;
  var qA = cZ({
    name: "polarAxis",
    initialState: {
      radiusAxis: {},
      angleAxis: {}
    },
    reducers: {
      addRadiusAxis(a, b) {
        a.radiusAxis[b.payload.id] = b.payload;
      },
      removeRadiusAxis(a, b) {
        delete a.radiusAxis[b.payload.id];
      },
      addAngleAxis(a, b) {
        a.angleAxis[b.payload.id] = b.payload;
      },
      removeAngleAxis(a, b) {
        delete a.angleAxis[b.payload.id];
      }
    }
  });
  var qB = qA.actions;
  qB.addRadiusAxis;
  qB.removeRadiusAxis;
  qB.addAngleAxis;
  qB.removeAngleAxis;
  var qC = qA.reducer;
  var qD = cZ({
    name: "polarOptions",
    initialState: null,
    reducers: {
      updatePolarOptions: (a, b) => a === null ? b.payload : (a.startAngle = b.payload.startAngle, a.endAngle = b.payload.endAngle, a.cx = b.payload.cx, a.cy = b.payload.cy, a.innerRadius = b.payload.innerRadius, a.outerRadius = b.payload.outerRadius, a)
    }
  });
  var qE = qD.actions.updatePolarOptions;
  var qF = qD.reducer;
  a.s(["polarOptionsReducer", 0, qF, "updatePolarOptions", 0, qE], 93090);
  var qG = cO("keyDown");
  var qH = cO("focus");
  var qI = cO("blur");
  var qJ = dt();
  var qK = null;
  var qL = null;
  var qM = null;
  function qN(a) {
    a.persist();
    var b = a.currentTarget;
    return new Proxy(a, {
      get: (a, c) => {
        if (c === "currentTarget") {
          return b;
        }
        var d = Reflect.get(a, c);
        if (typeof d == "function") {
          return d.bind(a);
        } else {
          return d;
        }
      }
    });
  }
  qJ.startListening({
    actionCreator: qG,
    effect: (a, b) => {
      qM = a.payload;
      if (qK !== null) {
        cancelAnimationFrame(qK);
        qK = null;
      }
      var c = b.getState().eventSettings;
      var d = c.throttleDelay;
      var e = c.throttledEvents;
      var f = e === "all" || e.includes("keydown");
      if (qL !== null && (typeof d != "number" || !f)) {
        clearTimeout(qL);
        qL = null;
      }
      var g = () => {
        try {
          var a;
          var c = b.getState();
          if (c.rootProps.accessibilityLayer === false) {
            return;
          }
          var d = c.tooltip.keyboardInteraction;
          var e = qM;
          if (e !== "ArrowRight" && e !== "ArrowLeft" && e !== "Enter") {
            return;
          }
          var f = nd(d, nt(c), j1(c), nM(c));
          var g = f == null ? -1 : Number(f);
          var h = !Number.isFinite(g) || g < 0;
          var i = nV(c);
          var j = nt(c);
          var k = m8(c, c.tooltip.settings.shared);
          if (e === "Enter") {
            if (h) {
              return;
            }
            var l = pZ(c, k, "hover", String(d.index));
            b.dispatch(m3({
              active: !d.active,
              activeIndex: d.index,
              activeCoordinate: l
            }));
            return;
          }
          var m = lc(c);
          var n = m === "left-to-right" ? 1 : -1;
          var o = e === "ArrowRight" ? 1 : -1;
          if (h) {
            var p = j1(c);
            var q = nM(c);
            var r = a => ({
              active: false,
              index: String(a),
              dataKey: undefined,
              graphicalItemId: undefined,
              coordinate: undefined
            });
            a = -1;
            if (o * n > 0) {
              for (var s = 0; s < j.length; s++) {
                if (nd(r(s), j, p, q) != null) {
                  a = s;
                  break;
                }
              }
            } else {
              for (var t = j.length - 1; t >= 0; t--) {
                if (nd(r(t), j, p, q) != null) {
                  a = t;
                  break;
                }
              }
            }
            if (a < 0) {
              return;
            }
          } else {
            a = g + o * n;
            var u = (i == null ? undefined : i.length) || j.length;
            if (u === 0 || a >= u || a < 0) {
              return;
            }
          }
          var v = pZ(c, k, "hover", String(a));
          b.dispatch(m3({
            active: true,
            activeIndex: a.toString(),
            activeCoordinate: v
          }));
        } finally {
          qK = null;
          qL = null;
        }
      };
      if (f) {
        if (d === "raf") {
          qK = requestAnimationFrame(g);
        } else if (typeof d == "number" && qL === null) {
          g();
          qM = null;
          qL = setTimeout(() => {
            if (qM) {
              g();
            } else {
              qL = null;
              qK = null;
            }
          }, d);
        }
      } else {
        g();
      }
    }
  });
  qJ.startListening({
    actionCreator: qH,
    effect: (a, b) => {
      var c = b.getState();
      if (c.rootProps.accessibilityLayer !== false) {
        var d = c.tooltip.keyboardInteraction;
        if (!d.active && d.index == null) {
          var e = m8(c, c.tooltip.settings.shared);
          var f = pZ(c, e, "hover", String("0"));
          b.dispatch(m3({
            active: true,
            activeIndex: "0",
            activeCoordinate: f
          }));
        }
      }
    }
  });
  qJ.startListening({
    actionCreator: qI,
    effect: (a, b) => {
      var c = b.getState();
      if (c.rootProps.accessibilityLayer !== false) {
        var d = c.tooltip.keyboardInteraction;
        if (d.active) {
          b.dispatch(m3({
            active: false,
            activeIndex: d.index,
            activeCoordinate: d.coordinate
          }));
        }
      }
    }
  });
  var qO = cO("externalEvent");
  var qP = dt();
  var qQ = new Map();
  var qR = new Map();
  var qS = new Map();
  qP.startListening({
    actionCreator: qO,
    effect: (a, b) => {
      var c = a.payload;
      var d = c.handler;
      var e = c.reactEvent;
      if (d != null) {
        var f = e.type;
        var g = qN(e);
        qS.set(f, {
          handler: d,
          reactEvent: g
        });
        var h = qQ.get(f);
        if (h !== undefined) {
          cancelAnimationFrame(h);
          qQ.delete(f);
        }
        var i = b.getState().eventSettings;
        var j = i.throttleDelay;
        var k = i.throttledEvents;
        var l = k === "all" || (k == null ? undefined : k.includes(f));
        var m = qR.get(f);
        if (m !== undefined && (typeof j != "number" || !l)) {
          clearTimeout(m);
          qR.delete(f);
        }
        var n = () => {
          var a = qS.get(f);
          try {
            if (!a) {
              return;
            }
            var c = a.handler;
            var d = a.reactEvent;
            var e = b.getState();
            var g = {
              activeCoordinate: n4(e),
              activeDataKey: n0(e),
              activeIndex: n$(e),
              activeLabel: n_(e),
              activeTooltipIndex: n$(e),
              isTooltipActive: n5(e)
            };
            if (c) {
              c(g, d);
            }
          } finally {
            qQ.delete(f);
            qR.delete(f);
            qS.delete(f);
          }
        };
        if (!l) {
          n();
          return;
        }
        if (j === "raf") {
          var o = requestAnimationFrame(n);
          qQ.set(f, o);
        } else if (typeof j == "number") {
          if (!qR.has(f)) {
            n();
            var p = setTimeout(n, j);
            qR.set(f, p);
          }
        } else {
          n();
        }
      }
    }
  });
  var qT = ad([nh], a => a.tooltipItemPayloads);
  var qU = ad([qT, (a, b) => b, (a, b, c) => c], (a, b, c) => {
    if (b != null) {
      var d = a.find(a => a.settings.graphicalItemId === c);
      if (d != null) {
        var e = d.getPosition;
        if (e != null) {
          return e(b);
        }
      }
    }
  });
  var qV = cO("touchMove");
  var qW = dt();
  var qX = null;
  var qY = null;
  var qZ = null;
  var q$ = null;
  qW.startListening({
    actionCreator: qV,
    effect: (a, b) => {
      var c = a.payload;
      if (c.touches != null && c.touches.length !== 0) {
        q$ = qN(c);
        var d = b.getState().eventSettings;
        var e = d.throttleDelay;
        var f = d.throttledEvents;
        var g = f === "all" || f.includes("touchmove");
        if (qX !== null) {
          cancelAnimationFrame(qX);
          qX = null;
        }
        if (qY !== null && (typeof e != "number" || !g)) {
          clearTimeout(qY);
          qY = null;
        }
        qZ = Array.from(c.touches).map(a => p4({
          clientX: a.clientX,
          clientY: a.clientY,
          currentTarget: c.currentTarget
        }));
        var h = () => {
          if (q$ != null) {
            var a = b.getState();
            var c = m8(a, a.tooltip.settings.shared);
            if (c === "axis") {
              var d;
              var e = (d = qZ) == null ? undefined : d[0];
              if (e == null) {
                qX = null;
                qY = null;
                return;
              }
              var f = p3(a, e);
              if ((f == null ? undefined : f.activeIndex) != null) {
                b.dispatch(m0({
                  activeIndex: f.activeIndex,
                  activeDataKey: undefined,
                  activeCoordinate: f.activeCoordinate
                }));
              }
            } else if (c === "item") {
              var h = q$.touches[0];
              if (document.elementFromPoint == null || h == null) {
                return;
              }
              var i = document.elementFromPoint(h.clientX, h.clientY);
              if (!i || !i.getAttribute) {
                return;
              }
              var j = i.getAttribute(bn);
              var k = i.getAttribute(bo) ?? undefined;
              var l = np(a).find(a => a.id === k);
              if (j == null || l == null || k == null) {
                return;
              }
              var m = l.dataKey;
              var n = qU(a, j, k);
              b.dispatch(mY({
                activeDataKey: m,
                activeIndex: j,
                activeCoordinate: n,
                activeGraphicalItemId: k
              }));
            }
            qX = null;
            qY = null;
          }
        };
        if (!g) {
          h();
          return;
        }
        if (e === "raf") {
          qX = requestAnimationFrame(h);
        } else if (typeof e == "number" && qY === null) {
          h();
          q$ = null;
          qY = setTimeout(() => {
            if (q$) {
              h();
            } else {
              qY = null;
              qX = null;
            }
          }, e);
        }
      }
    }
  });
  var q_ = cZ({
    name: "errorBars",
    initialState: {},
    reducers: {
      addErrorBar: (a, b) => {
        var c = b.payload;
        var d = c.itemId;
        var e = c.errorBar;
        a[d] ||= [];
        a[d].push(e);
      },
      replaceErrorBar: (a, b) => {
        var c = b.payload;
        var d = c.itemId;
        var e = c.prev;
        var f = c.next;
        a[d] &&= a[d].map(a => a.dataKey === e.dataKey && a.direction === e.direction ? f : a);
      },
      removeErrorBar: (a, b) => {
        var c = b.payload;
        var d = c.itemId;
        var e = c.errorBar;
        a[d] &&= a[d].filter(a => a.dataKey !== e.dataKey || a.direction !== e.direction);
      }
    }
  });
  var q0 = q_.actions;
  q0.addErrorBar;
  q0.replaceErrorBar;
  q0.removeErrorBar;
  var q1 = q_.reducer;
  var q2 = {
    throttleDelay: "raf",
    throttledEvents: ["mousemove", "touchmove", "pointermove", "scroll", "wheel"]
  };
  var q3 = cZ({
    name: "eventSettings",
    initialState: q2,
    reducers: {
      setEventSettings: (a, b) => {
        if (b.payload.throttleDelay != null) {
          a.throttleDelay = b.payload.throttleDelay;
        }
        if (b.payload.throttledEvents != null) {
          a.throttledEvents = b.payload.throttledEvents;
        }
      }
    }
  });
  var q4 = q3.actions.setEventSettings;
  var q5 = q3.reducer;
  a.s(["eventSettingsReducer", 0, q5, "initialEventSettingsState", 0, q2, "setEventSettings", 0, q4], 70759);
  var q6 = cZ({
    name: "renderedTicks",
    initialState: {
      xAxis: {},
      yAxis: {}
    },
    reducers: {
      setRenderedTicks: (a, b) => {
        var c = b.payload;
        var d = c.axisType;
        var e = c.axisId;
        var f = c.ticks;
        a[d][e] = f;
      },
      removeRenderedTicks: (a, b) => {
        var c = b.payload;
        var d = c.axisType;
        var e = c.axisId;
        delete a[d][e];
      }
    }
  });
  var q7 = q6.actions;
  var q8 = q7.setRenderedTicks;
  var q9 = q7.removeRenderedTicks;
  var ra = q6.reducer;
  a.s(["removeRenderedTicks", 0, q9, "renderedTicksReducer", 0, ra, "setRenderedTicks", 0, q8], 43339);
  var rb = cI({
    brush: qv,
    cartesianAxis: qp,
    chartData: pM,
    errorBars: q1,
    eventSettings: q5,
    graphicalItems: oS,
    layout: dB,
    legend: of,
    options: pw,
    polarAxis: qC,
    polarOptions: qF,
    referenceElements: qs,
    renderedTicks: ra,
    rootProps: qy,
    tooltip: m4,
    zIndex: o6
  });
  function rc(a, b = "Chart") {
    return function (a) {
      let b;
      let c;
      let d;
      let e = function (a) {
        let {
          thunk: b = true,
          immutableCheck: c = true,
          serializableCheck: d = true,
          actionCreatorCheck: e = true
        } = a ?? {};
        let f = new cP();
        if (b) {
          if (typeof b == "boolean") {
            f.push(cM);
          } else {
            f.push(cL(b.extraArgument));
          }
        }
        return f;
      };
      let {
        reducer: f,
        middleware: g,
        devTools: h = true,
        duplicateMiddlewareCheck: i = true,
        preloadedState: j,
        enhancers: k
      } = a || {};
      if (typeof f == "function") {
        b = f;
      } else if (cH(f)) {
        b = cI(f);
      } else {
        throw Error(du(1));
      }
      c = typeof g == "function" ? g(e) : e();
      let l = cJ;
      if (h) {
        l = cN({
          trace: false,
          ...(typeof h == "object" && h)
        });
      }
      d = function (...a) {
        return b => (c, d) => {
          let e = b(c, d);
          let f = () => {
            throw Error(cD(15));
          };
          let g = {
            getState: e.getState,
            dispatch: (a, ...b) => f(a, ...b)
          };
          f = cJ(...a.map(a => a(g)))(e.dispatch);
          return {
            ...e,
            dispatch: f
          };
        };
      }(...c);
      let m = function (a) {
        let {
          autoBatch: b = true
        } = a ?? {};
        let c = new cP(d);
        if (b) {
          c.push(cV(typeof b == "object" ? b : undefined));
        }
        return c;
      };
      return function a(b, c, d) {
        if (typeof b != "function") {
          throw Error(cD(2));
        }
        if (typeof c == "function" && typeof d == "function" || typeof d == "function" && typeof arguments[3] == "function") {
          throw Error(cD(0));
        }
        if (typeof c == "function" && d === undefined) {
          d = c;
          c = undefined;
        }
        if (d !== undefined) {
          if (typeof d != "function") {
            throw Error(cD(1));
          }
          return d(a)(b, c);
        }
        let e = b;
        let f = c;
        let g = new Map();
        let h = g;
        let i = 0;
        let j = false;
        function k() {
          if (h === g) {
            h = new Map();
            g.forEach((a, b) => {
              h.set(b, a);
            });
          }
        }
        function l() {
          if (j) {
            throw Error(cD(3));
          }
          return f;
        }
        function m(a) {
          if (typeof a != "function") {
            throw Error(cD(4));
          }
          if (j) {
            throw Error(cD(5));
          }
          let b = true;
          k();
          let c = i++;
          h.set(c, a);
          return function () {
            if (b) {
              if (j) {
                throw Error(cD(6));
              }
              b = false;
              k();
              h.delete(c);
              g = null;
            }
          };
        }
        function n(a) {
          if (!cH(a)) {
            throw Error(cD(7));
          }
          if (a.type === undefined) {
            throw Error(cD(8));
          }
          if (typeof a.type != "string") {
            throw Error(cD(17));
          }
          if (j) {
            throw Error(cD(9));
          }
          try {
            j = true;
            f = e(f, a);
          } finally {
            j = false;
          }
          (g = h).forEach(a => {
            a();
          });
          return a;
        }
        n({
          type: cG.INIT
        });
        return {
          dispatch: n,
          subscribe: m,
          getState: l,
          replaceReducer: function (a) {
            if (typeof a != "function") {
              throw Error(cD(10));
            }
            e = a;
            n({
              type: cG.REPLACE
            });
          },
          [cE]: function () {
            return {
              subscribe(a) {
                if (typeof a != "object" || a === null) {
                  throw Error(cD(11));
                }
                function b() {
                  if (a.next) {
                    a.next(l());
                  }
                }
                b();
                return {
                  unsubscribe: m(b)
                };
              },
              [cE]() {
                return this;
              }
            };
          }
        };
      }(b, j, l(...(typeof k == "function" ? k(m) : m())));
    }({
      reducer: rb,
      preloadedState: a,
      middleware: a => a({
        serializableCheck: false,
        immutableCheck: !["commonjs", "es6", "production"].includes("es6")
      }).concat([p6.middleware, p8.middleware, qJ.middleware, qP.middleware, qW.middleware]),
      enhancers: a => {
        var b = a;
        if (typeof a == "function") {
          b = a();
        }
        return b.concat(cV({
          type: "raf"
        }));
      },
      devTools: l9.devToolsEnabled && {
        serialize: {
          replacer: qc
        },
        name: `recharts-${b}`
      }
    });
  }
  a.s(["RechartsStoreProvider", 0, function (a) {
    var b = a.preloadedState;
    var c = a.children;
    var d = a.reduxStoreName;
    var e = dD();
    var f = (0, bw.useRef)(null);
    if (e) {
      return c;
    } else {
      if (f.current == null) {
        f.current = rc(b, d);
      }
      return bw.createElement(pF, {
        context: by,
        store: f.current
      }, c);
    }
  }], 59963);
  a.s(["ChartDataContextProvider", 0, a => {
    var b = a.chartData;
    var c = bA();
    var d = dD();
    (0, bw.useEffect)(() => d ? () => {} : (c(pK(b)), () => {
      c(pK(undefined));
    }), [b, c, d]);
    return null;
  }], 94954);
  var rd = new Set(["axisLine", "tickLine", "activeBar", "activeDot", "activeLabel", "activeShape", "allowEscapeViewBox", "background", "cursor", "dot", "label", "line", "margin", "padding", "position", "shape", "style", "tick", "wrapperStyle", "radius", "throttledEvents"]);
  function re(a, b) {
    for (var c of new Set([...Object.keys(a), ...Object.keys(b)])) {
      if (rd.has(c)) {
        if (a[c] == null && b[c] == null) {
          continue;
        }
        if (!function (a, b) {
          if (pB(a, b)) {
            return true;
          }
          if (typeof a != "object" || a === null || typeof b != "object" || b === null) {
            return false;
          }
          let c = Object.keys(a);
          let d = Object.keys(b);
          if (c.length !== d.length) {
            return false;
          }
          for (let d = 0; d < c.length; d++) {
            if (!Object.prototype.hasOwnProperty.call(b, c[d]) || !pB(a[c[d]], b[c[d]])) {
              return false;
            }
          }
          return true;
        }(a[c], b[c])) {
          return false;
        }
      } else {
        var d;
        var e;
        d = a[c];
        e = b[c];
        if ((d != null || e != null) && (typeof d == "number" && typeof e == "number" ? d !== e && (d == d || e == e) : d !== e)) {
          return false;
        }
      }
    }
    return true;
  }
  a.s(["propsAreEqual", 0, re], 85773);
  var rf = (0, bw.memo)(function (a) {
    var b = a.layout;
    var c = a.margin;
    var d = bA();
    var e = dD();
    (0, bw.useEffect)(() => {
      if (!e) {
        d(dy(b));
        d(dx(c));
      }
    }, [d, e, b, c]);
    return null;
  }, re);
  a.s(["ReportMainChartProps", 0, rf], 71835);
  a.s(["ReportChartProps", 0, function (a) {
    var b = bA();
    (0, bw.useEffect)(() => {
      b(qz(a));
    }, [b, a]);
    return null;
  }], 61888);
  var rg = (0, bw.memo)(a => {
    var b = bA();
    (0, bw.useEffect)(() => {
      b(q4(a));
    }, [b, a]);
    return null;
  }, re);
  a.s(["ReportEventSettings", 0, rg], 42299);
  var rh = () => {
    var a;
    return (a = bE(a => a.rootProps.accessibilityLayer)) == null || a;
  };
  var ri = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
  function rj() {
    return (rj = Object.assign.bind()).apply(null, arguments);
  }
  var rk = (0, bw.forwardRef)((a, b) => {
    var c = a.children;
    var d = a.width;
    var e = a.height;
    var f = a.viewBox;
    var g = a.className;
    var h = a.style;
    var j = a.title;
    var k = a.desc;
    var l = function (a, b) {
      if (a == null) {
        return {};
      }
      var c;
      var d;
      var e = function (a, b) {
        if (a == null) {
          return {};
        }
        var c = {};
        for (var d in a) {
          if ({}.hasOwnProperty.call(a, d)) {
            if (b.indexOf(d) !== -1) {
              continue;
            }
            c[d] = a[d];
          }
        }
        return c;
      }(a, b);
      if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(a);
        for (d = 0; d < f.length; d++) {
          c = f[d];
          if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
            e[c] = a[c];
          }
        }
      }
      return e;
    }(a, ri);
    var m = f || {
      width: d,
      height: e,
      x: 0,
      y: 0
    };
    var n = i("recharts-surface", g);
    return bw.createElement("svg", rj({}, lm(l), {
      className: n,
      width: d,
      height: e,
      style: h,
      viewBox: `${m.x} ${m.y} ${m.width} ${m.height}`,
      ref: b
    }), bw.createElement("title", null, j), bw.createElement("desc", null, k), c);
  });
  function rl(a) {
    var b = a.zIndex;
    var c = a.isPanorama;
    var d = (0, bw.useRef)(null);
    var e = bA();
    (0, bw.useLayoutEffect)(() => {
      if (d.current) {
        e(o4({
          zIndex: b,
          element: d.current,
          isPanorama: c
        }));
      }
      return () => {
        e(o5({
          zIndex: b,
          isPanorama: c
        }));
      };
    }, [e, b, c]);
    return bw.createElement("g", {
      tabIndex: -1,
      ref: d,
      className: `recharts-zIndex-layer_${b}`
    });
  }
  function rm(a) {
    var b = a.children;
    var c = a.isPanorama;
    var d = bE(oX);
    if (!d || d.length === 0) {
      return b;
    }
    var e = d.filter(a => a < 0);
    var f = d.filter(a => a > 0);
    return bw.createElement(bw.Fragment, null, e.map(a => bw.createElement(rl, {
      key: a,
      zIndex: a,
      isPanorama: c
    })), b, f.map(a => bw.createElement(rl, {
      key: a,
      zIndex: a,
      isPanorama: c
    })));
  }
  a.s(["Surface", 0, rk], 61881);
  var rn = ["children"];
  function ro() {
    return (ro = Object.assign.bind()).apply(null, arguments);
  }
  var rp = {
    width: "100%",
    height: "100%",
    display: "block"
  };
  var rq = (0, bw.forwardRef)((a, b) => {
    var c;
    var d;
    var e = d0();
    var f = d1();
    var g = rh();
    if (!aY(e) || !aY(f)) {
      return null;
    }
    var h = a.children;
    var i = a.otherAttributes;
    var j = a.title;
    var k = a.desc;
    if (i != null) {
      c = typeof i.tabIndex == "number" ? i.tabIndex : g ? 0 : undefined;
      d = typeof i.role == "string" ? i.role : g ? "application" : undefined;
    }
    return bw.createElement(rk, ro({}, i, {
      title: j,
      desc: k,
      role: d,
      tabIndex: c,
      width: e,
      height: f,
      style: rp,
      ref: b
    }), h);
  });
  var rr = a => {
    var b = a.children;
    var c = bE(dF);
    if (!c) {
      return null;
    }
    var d = c.width;
    var e = c.height;
    var f = c.y;
    var g = c.x;
    return bw.createElement(rk, {
      width: d,
      height: e,
      x: g,
      y: f
    }, b);
  };
  var rs = (0, bw.forwardRef)((a, b) => {
    var c = a.children;
    var d = function (a, b) {
      if (a == null) {
        return {};
      }
      var c;
      var d;
      var e = function (a, b) {
        if (a == null) {
          return {};
        }
        var c = {};
        for (var d in a) {
          if ({}.hasOwnProperty.call(a, d)) {
            if (b.indexOf(d) !== -1) {
              continue;
            }
            c[d] = a[d];
          }
        }
        return c;
      }(a, b);
      if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(a);
        for (d = 0; d < f.length; d++) {
          c = f[d];
          if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
            e[c] = a[c];
          }
        }
      }
      return e;
    }(a, rn);
    if (dD()) {
      return bw.createElement(rr, null, bw.createElement(rm, {
        isPanorama: true
      }, c));
    } else {
      return bw.createElement(rq, ro({
        ref: b
      }, d), bw.createElement(rm, {
        isPanorama: false
      }, c));
    }
  });
  var rt = new (a.i(37350).default)();
  var ru = "recharts.syncEvent.tooltip";
  var rv = "recharts.syncEvent.brush";
  function rw(a) {
    return a.tooltip.syncInteraction;
  }
  var rx = ["x", "y"];
  function ry(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function rz(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        ry(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        ry(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  function rA(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  var rB = (0, bw.createContext)(null);
  var rC = (0, bw.createContext)(null);
  function rD(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function rE() {
    return (rE = Object.assign.bind()).apply(null, arguments);
  }
  function rF(a, b) {
    return function (a) {
      if (Array.isArray(a)) {
        return a;
      }
    }(a) || function (a, b) {
      var c = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (c != null) {
        var d;
        var e;
        var f;
        var g;
        var h = [];
        var i = true;
        var j = false;
        try {
          f = (c = c.call(a)).next;
          if (b === 0) {
            if (Object(c) !== c) {
              return;
            }
            i = false;
          } else {
            for (; !(i = (d = f.call(c)).done) && (h.push(d.value), h.length !== b); i = true);
          }
        } catch (a) {
          j = true;
          e = a;
        } finally {
          try {
            if (!i && c.return != null && (g = c.return(), Object(g) !== g)) {
              return;
            }
          } finally {
            if (j) {
              throw e;
            }
          }
        }
        return h;
      }
    }(a, b) || function (a, b) {
      if (a) {
        if (typeof a == "string") {
          return rG(a, b);
        }
        var c = {}.toString.call(a).slice(8, -1);
        if (c === "Object" && a.constructor) {
          c = a.constructor.name;
        }
        if (c === "Map" || c === "Set") {
          return Array.from(a);
        } else if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) {
          return rG(a, b);
        } else {
          return undefined;
        }
      }
    }(a, b) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function rG(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  a.s(["LegendPortalContext", 0, rC, "useLegendPortal", 0, () => (0, bw.useContext)(rC)], 58794);
  var rH = () => {
    var a;
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;
    var j;
    var k;
    var l;
    a = bA();
    (0, bw.useEffect)(() => {
      a(px());
    }, [a]);
    b = bE(eT);
    c = bE(eV);
    d = bA();
    e = bE(eU);
    f = bE(nV);
    g = d3();
    h = dZ();
    i = bE(a => a.rootProps.className);
    (0, bw.useEffect)(() => {
      if (b == null) {
        return aV;
      }
      var a = (a, i, j) => {
        if (c !== j && b === a) {
          if (i.payload.active === false) {
            d(m2({
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
          if (e === "index") {
            if (h && i != null && (k = i.payload) != null && k.coordinate && i.payload.sourceViewBox) {
              var k;
              var l;
              var m = i.payload.coordinate;
              var n = m.x;
              var o = m.y;
              var p = function (a, b) {
                if (a == null) {
                  return {};
                }
                var c;
                var d;
                var e = function (a, b) {
                  if (a == null) {
                    return {};
                  }
                  var c = {};
                  for (var d in a) {
                    if ({}.hasOwnProperty.call(a, d)) {
                      if (b.indexOf(d) !== -1) {
                        continue;
                      }
                      c[d] = a[d];
                    }
                  }
                  return c;
                }(a, b);
                if (Object.getOwnPropertySymbols) {
                  var f = Object.getOwnPropertySymbols(a);
                  for (d = 0; d < f.length; d++) {
                    c = f[d];
                    if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
                      e[c] = a[c];
                    }
                  }
                }
                return e;
              }(m, rx);
              var q = i.payload.sourceViewBox;
              var r = q.x;
              var s = q.y;
              var t = q.width;
              var u = q.height;
              var v = rz(rz({}, p), {}, {
                x: h.x + (t ? (n - r) / t : 0) * h.width,
                y: h.y + (u ? (o - s) / u : 0) * h.height
              });
              d(rz(rz({}, i), {}, {
                payload: rz(rz({}, i.payload), {}, {
                  coordinate: v
                })
              }));
            } else {
              d(i);
            }
            return;
          }
          if (f != null) {
            if (typeof e == "function") {
              var w = e(f, {
                activeTooltipIndex: i.payload.index == null ? undefined : Number(i.payload.index),
                isTooltipActive: i.payload.active,
                activeIndex: i.payload.index == null ? undefined : Number(i.payload.index),
                activeLabel: i.payload.label,
                activeDataKey: i.payload.dataKey,
                activeCoordinate: i.payload.coordinate
              });
              l = f[w];
            } else if (e === "value") {
              l = f.find(a => String(a.value) === i.payload.label);
            }
            var x = i.payload.coordinate;
            if (x == null || h == null) {
              d(m2({
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
            if (l == null) {
              d(m2({
                active: false,
                coordinate: undefined,
                dataKey: undefined,
                index: null,
                label: undefined,
                sourceViewBox: i.payload.sourceViewBox,
                graphicalItemId: undefined
              }));
              return;
            }
            var y = x.x;
            var z = x.y;
            var A = Math.min(y, h.x + h.width);
            var B = Math.min(z, h.y + h.height);
            var C = {
              x: g === "horizontal" ? l.coordinate : A,
              y: g === "horizontal" ? B : l.coordinate
            };
            d(m2({
              active: i.payload.active,
              coordinate: C,
              dataKey: i.payload.dataKey,
              index: String(l.index),
              label: i.payload.label,
              sourceViewBox: i.payload.sourceViewBox,
              graphicalItemId: i.payload.graphicalItemId
            }));
          }
        }
      };
      rt.on(ru, a);
      return () => {
        rt.off(ru, a);
      };
    }, [i, d, c, b, e, f, g, h]);
    j = bE(eT);
    k = bE(eV);
    l = bA();
    (0, bw.useEffect)(() => {
      if (j == null) {
        return aV;
      }
      var a = (a, b, c) => {
        if (k !== c && j === a) {
          l(pL(b));
        }
      };
      rt.on(rv, a);
      return () => {
        rt.off(rv, a);
      };
    }, [l, k, j]);
    return null;
  };
  function rI(a) {
    if (typeof a == "number") {
      return a;
    }
    if (typeof a == "string") {
      var b = parseFloat(a);
      if (!Number.isNaN(b)) {
        return b;
      }
    }
    return 0;
  }
  var rJ = (0, bw.forwardRef)((a, b) => {
    var c;
    var d;
    var e = (0, bw.useRef)(null);
    var f = rF((0, bw.useState)({
      containerWidth: rI((c = a.style) == null ? undefined : c.width),
      containerHeight: rI((d = a.style) == null ? undefined : d.height)
    }), 2);
    var g = f[0];
    var h = f[1];
    var i = (0, bw.useCallback)((a, b) => {
      h(c => {
        var d = Math.round(a);
        var e = Math.round(b);
        if (c.containerWidth === d && c.containerHeight === e) {
          return c;
        } else {
          return {
            containerWidth: d,
            containerHeight: e
          };
        }
      });
    }, []);
    var j = (0, bw.useCallback)(a => {
      if (typeof b == "function") {
        b(a);
      }
      if (e.current != null) {
        e.current.disconnect();
        e.current = null;
      }
      if (a != null && typeof ResizeObserver !== "undefined") {
        var c = a.getBoundingClientRect();
        i(c.width, c.height);
        var d = new ResizeObserver(a => {
          var b = a[0];
          if (b != null) {
            var c = b.contentRect;
            i(c.width, c.height);
          }
        });
        d.observe(a);
        e.current = d;
      }
    }, [b, i]);
    (0, bw.useEffect)(() => () => {
      var a = e.current;
      if (a != null) {
        a.disconnect();
      }
    }, [i]);
    return bw.createElement(bw.Fragment, null, bw.createElement(d6, {
      width: g.containerWidth,
      height: g.containerHeight
    }), bw.createElement("div", rE({
      ref: j
    }, a)));
  });
  var rK = (0, bw.forwardRef)((a, b) => {
    var c = a.width;
    var d = a.height;
    var e = rF((0, bw.useState)({
      containerWidth: rI(c),
      containerHeight: rI(d)
    }), 2);
    var f = e[0];
    var g = e[1];
    var h = (0, bw.useCallback)((a, b) => {
      g(c => {
        var d = Math.round(a);
        var e = Math.round(b);
        if (c.containerWidth === d && c.containerHeight === e) {
          return c;
        } else {
          return {
            containerWidth: d,
            containerHeight: e
          };
        }
      });
    }, []);
    var i = (0, bw.useCallback)(a => {
      if (typeof b == "function") {
        b(a);
      }
      if (a != null) {
        var c = a.getBoundingClientRect();
        h(c.width, c.height);
      }
    }, [b, h]);
    return bw.createElement(bw.Fragment, null, bw.createElement(d6, {
      width: f.containerWidth,
      height: f.containerHeight
    }), bw.createElement("div", rE({
      ref: i
    }, a)));
  });
  var rL = (0, bw.forwardRef)((a, b) => {
    var c = a.width;
    var d = a.height;
    return bw.createElement(bw.Fragment, null, bw.createElement(d6, {
      width: c,
      height: d
    }), bw.createElement("div", rE({
      ref: b
    }, a)));
  });
  var rM = (0, bw.forwardRef)((a, b) => {
    var c = a.width;
    var d = a.height;
    if (typeof c == "string" || typeof d == "string") {
      return bw.createElement(rK, rE({}, a, {
        ref: b
      }));
    } else if (typeof c == "number" && typeof d == "number") {
      return bw.createElement(rL, rE({}, a, {
        width: c,
        height: d,
        ref: b
      }));
    } else {
      return bw.createElement(bw.Fragment, null, bw.createElement(d6, {
        width: c,
        height: d
      }), bw.createElement("div", rE({
        ref: b
      }, a)));
    }
  });
  var rN = (0, bw.forwardRef)((a, b) => {
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var j = a.children;
    var k = a.className;
    var l = a.height;
    var m = a.onClick;
    var n = a.onContextMenu;
    var o = a.onDoubleClick;
    var p = a.onMouseDown;
    var q = a.onMouseEnter;
    var r = a.onMouseLeave;
    var s = a.onMouseMove;
    var t = a.onMouseUp;
    var u = a.onTouchEnd;
    var v = a.onTouchMove;
    var w = a.onTouchStart;
    var x = a.style;
    var y = a.width;
    var z = a.responsive;
    var A = a.dispatchTouchEvents;
    var B = A === undefined || A;
    var C = (0, bw.useRef)(null);
    var D = bA();
    var E = rF((0, bw.useState)(null), 2);
    var F = E[0];
    var G = E[1];
    var H = rF((0, bw.useState)(null), 2);
    var I = H[0];
    var J = H[1];
    c = bA();
    f = (e = function (a) {
      if (Array.isArray(a)) {
        return a;
      }
    }(d = (0, bw.useState)(null)) || function (a) {
      var b = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (b != null) {
        var c;
        var d;
        var e;
        var f;
        var g = [];
        var h = true;
        var i = false;
        try {
          e = (b = b.call(a)).next;
          false;
          for (; !(h = (c = e.call(b)).done) && (g.push(c.value), g.length !== 2); h = true);
        } catch (a) {
          i = true;
          d = a;
        } finally {
          try {
            if (!h && b.return != null && (f = b.return(), Object(f) !== f)) {
              return;
            }
          } finally {
            if (i) {
              throw d;
            }
          }
        }
        return g;
      }
    }(d) || function (a) {
      if (a) {
        if (typeof a == "string") {
          return rA(a, 2);
        }
        var b = {}.toString.call(a).slice(8, -1);
        if (b === "Object" && a.constructor) {
          b = a.constructor.name;
        }
        if (b === "Map" || b === "Set") {
          return Array.from(a);
        } else if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) {
          return rA(a, 2);
        } else {
          return undefined;
        }
      }
    }(d) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }())[0];
    g = e[1];
    h = bE(bj);
    (0, bw.useEffect)(() => {
      if (f != null) {
        var a = f.getBoundingClientRect().width / f.offsetWidth;
        if (aX(a) && a !== h) {
          c(dA(a));
        }
      }
    }, [f, c, h]);
    var K = g;
    var L = dW();
    var M = (L == null ? undefined : L.width) > 0 ? L.width : y;
    var N = (L == null ? undefined : L.height) > 0 ? L.height : l;
    var O = (0, bw.useCallback)(a => {
      K(a);
      if (typeof b == "function") {
        b(a);
      }
      G(a);
      J(a);
      if (a != null) {
        C.current = a;
      }
    }, [K, b, G, J]);
    var P = (0, bw.useCallback)(a => {
      D(p5(a));
      D(qO({
        handler: m,
        reactEvent: a
      }));
    }, [D, m]);
    var Q = (0, bw.useCallback)(a => {
      D(p7(a));
      D(qO({
        handler: q,
        reactEvent: a
      }));
    }, [D, q]);
    var R = (0, bw.useCallback)(a => {
      D(m$());
      D(qO({
        handler: r,
        reactEvent: a
      }));
    }, [D, r]);
    var S = (0, bw.useCallback)(a => {
      D(p7(a));
      D(qO({
        handler: s,
        reactEvent: a
      }));
    }, [D, s]);
    var T = (0, bw.useCallback)(() => {
      D(qH());
    }, [D]);
    var U = (0, bw.useCallback)(() => {
      D(qI());
    }, [D]);
    var V = (0, bw.useCallback)(a => {
      D(qG(a.key));
    }, [D]);
    var W = (0, bw.useCallback)(a => {
      D(qO({
        handler: n,
        reactEvent: a
      }));
    }, [D, n]);
    var X = (0, bw.useCallback)(a => {
      D(qO({
        handler: o,
        reactEvent: a
      }));
    }, [D, o]);
    var Y = (0, bw.useCallback)(a => {
      D(qO({
        handler: p,
        reactEvent: a
      }));
    }, [D, p]);
    var Z = (0, bw.useCallback)(a => {
      D(qO({
        handler: t,
        reactEvent: a
      }));
    }, [D, t]);
    var $ = (0, bw.useCallback)(a => {
      D(qO({
        handler: w,
        reactEvent: a
      }));
    }, [D, w]);
    var _ = (0, bw.useCallback)(a => {
      if (B) {
        D(qV(a));
      }
      D(qO({
        handler: v,
        reactEvent: a
      }));
    }, [D, B, v]);
    var aa = (0, bw.useCallback)(a => {
      D(qO({
        handler: u,
        reactEvent: a
      }));
    }, [D, u]);
    return bw.createElement(rB.Provider, {
      value: F
    }, bw.createElement(rC.Provider, {
      value: I
    }, bw.createElement(z ? rJ : rM, {
      width: M ?? (x == null ? undefined : x.width),
      height: N ?? (x == null ? undefined : x.height),
      className: i("recharts-wrapper", k),
      style: function (a) {
        for (var b = 1; b < arguments.length; b++) {
          var c = arguments[b] ?? {};
          if (b % 2) {
            rD(Object(c), true).forEach(function (b) {
              var d;
              var e;
              var f;
              d = a;
              e = b;
              f = c[b];
              if ((e = function (a) {
                var b = function (a, b) {
                  if (typeof a != "object" || !a) {
                    return a;
                  }
                  var c = a[Symbol.toPrimitive];
                  if (c !== undefined) {
                    var d = c.call(a, b || "default");
                    if (typeof d != "object") {
                      return d;
                    }
                    throw TypeError("@@toPrimitive must return a primitive value.");
                  }
                  return (b === "string" ? String : Number)(a);
                }(a, "string");
                if (typeof b == "symbol") {
                  return b;
                } else {
                  return b + "";
                }
              }(e)) in d) {
                Object.defineProperty(d, e, {
                  value: f,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                d[e] = f;
              }
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
          } else {
            rD(Object(c)).forEach(function (b) {
              Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
            });
          }
        }
        return a;
      }({
        position: "relative",
        cursor: "default",
        width: M,
        height: N
      }, x),
      onClick: P,
      onContextMenu: W,
      onDoubleClick: X,
      onFocus: T,
      onBlur: U,
      onKeyDown: V,
      onMouseDown: Y,
      onMouseEnter: Q,
      onMouseLeave: R,
      onMouseMove: S,
      onMouseUp: Z,
      onTouchEnd: aa,
      onTouchMove: _,
      onTouchStart: $,
      ref: O
    }, bw.createElement(rH, null), j)));
  });
  var rO = ad([br], a => ({
    top: a.top,
    bottom: a.bottom,
    left: a.left,
    right: a.right
  }));
  var rP = ad([rO, bh, bi], (a, b, c) => {
    if (a && b != null && c != null) {
      return {
        x: a.left,
        y: a.top,
        width: Math.max(0, b - a.left - a.right),
        height: Math.max(0, c - a.top - a.bottom)
      };
    }
  });
  var rQ = () => bE(rP);
  function rR(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  a.s(["useActiveTooltipDataPoints", 0, () => bE(n7), "usePlotArea", 0, rQ], 98164);
  var rS = (0, bw.createContext)(undefined);
  var rT = a => {
    var b;
    var c = a.children;
    var d = (function (a) {
      if (Array.isArray(a)) {
        return a;
      }
    }(b = (0, bw.useState)(`${aN("recharts")}-clip`)) || function (a) {
      var b = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (b != null) {
        var c;
        var d;
        var e;
        var f;
        var g = [];
        var h = true;
        var i = false;
        try {
          e = (b = b.call(a)).next;
          false;
          for (; !(h = (c = e.call(b)).done) && (g.push(c.value), g.length !== 1); h = true);
        } catch (a) {
          i = true;
          d = a;
        } finally {
          try {
            if (!h && b.return != null && (f = b.return(), Object(f) !== f)) {
              return;
            }
          } finally {
            if (i) {
              throw d;
            }
          }
        }
        return g;
      }
    }(b) || function (a) {
      if (a) {
        if (typeof a == "string") {
          return rR(a, 1);
        }
        var b = {}.toString.call(a).slice(8, -1);
        if (b === "Object" && a.constructor) {
          b = a.constructor.name;
        }
        if (b === "Map" || b === "Set") {
          return Array.from(a);
        } else if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) {
          return rR(a, 1);
        } else {
          return undefined;
        }
      }
    }(b) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }())[0];
    var e = rQ();
    if (e == null) {
      return null;
    }
    var f = e.x;
    var g = e.y;
    var h = e.width;
    var i = e.height;
    return bw.createElement(rS.Provider, {
      value: d
    }, bw.createElement("defs", null, bw.createElement("clipPath", {
      id: d
    }, bw.createElement("rect", {
      x: f,
      y: g,
      height: i,
      width: h
    }))), c);
  };
  var rU = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
  var rV = (0, bw.forwardRef)((a, b) => {
    var c = a.width;
    var d = a.height;
    var e = a.responsive;
    var f = a.children;
    var g = a.className;
    var h = a.style;
    var i = a.compact;
    var j = a.title;
    var k = a.desc;
    var l = lk(function (a, b) {
      if (a == null) {
        return {};
      }
      var c;
      var d;
      var e = function (a, b) {
        if (a == null) {
          return {};
        }
        var c = {};
        for (var d in a) {
          if ({}.hasOwnProperty.call(a, d)) {
            if (b.indexOf(d) !== -1) {
              continue;
            }
            c[d] = a[d];
          }
        }
        return c;
      }(a, b);
      if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(a);
        for (d = 0; d < f.length; d++) {
          c = f[d];
          if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
            e[c] = a[c];
          }
        }
      }
      return e;
    }(a, rU));
    if (i) {
      return bw.createElement(bw.Fragment, null, bw.createElement(d6, {
        width: c,
        height: d
      }), bw.createElement(rs, {
        otherAttributes: l,
        title: j,
        desc: k
      }, f));
    } else {
      return bw.createElement(rN, {
        className: g,
        style: h,
        width: c,
        height: d,
        responsive: e != null && e,
        onClick: a.onClick,
        onMouseLeave: a.onMouseLeave,
        onMouseEnter: a.onMouseEnter,
        onMouseMove: a.onMouseMove,
        onMouseDown: a.onMouseDown,
        onMouseUp: a.onMouseUp,
        onContextMenu: a.onContextMenu,
        onDoubleClick: a.onDoubleClick,
        onTouchStart: a.onTouchStart,
        onTouchMove: a.onTouchMove,
        onTouchEnd: a.onTouchEnd
      }, bw.createElement(rs, {
        otherAttributes: l,
        title: j,
        desc: k,
        ref: b
      }, bw.createElement(rT, null, f)));
    }
  });
  function rW() {
    return (rW = Object.assign.bind()).apply(null, arguments);
  }
  function rX(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function rY(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        rX(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        rX(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  function rZ(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  function r$(a) {
    if (Array.isArray(a) && aL(a[0]) && aL(a[1])) {
      return a.join(" ~ ");
    } else {
      return a;
    }
  }
  a.s(["CategoricalChart", 0, rV], 32932);
  var r_ = {
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  };
  var r0 = {
    display: "block",
    paddingTop: 4,
    paddingBottom: 4,
    color: "#000"
  };
  var r1 = {};
  var r2 = a => {
    var b = a.separator;
    var c = b === undefined ? " : " : b;
    var d = a.contentStyle;
    var e = a.itemStyle;
    var f = a.labelStyle;
    var g = a.payload;
    var h = a.formatter;
    var j = a.itemSorter;
    var k = a.wrapperClassName;
    var l = a.labelClassName;
    var m = a.label;
    var n = a.labelFormatter;
    var o = a.accessibilityLayer;
    var p = rY(rY({}, r_), d);
    var q = rY({
      margin: 0
    }, f === undefined ? r1 : f);
    var r = !aS(m);
    var s = r ? m : "";
    var t = i("recharts-default-tooltip", k);
    var u = i("recharts-tooltip-label", l);
    if (r && n && g != null) {
      s = n(m, g);
    }
    return bw.createElement("div", rW({
      className: t,
      style: p
    }, o !== undefined && o ? {
      role: "status",
      "aria-live": "assertive"
    } : {}), bw.createElement("p", {
      className: u,
      style: q
    }, bw.isValidElement(s) ? s : `${s}`), (() => {
      if (g && g.length) {
        var a = (j == null ? g : av(g, j)).map((a, b) => {
          if (!a || a.type === "none") {
            return null;
          }
          var d = a.formatter || h || r$;
          var f = a.value;
          var i = a.name;
          var j = f;
          var k = i;
          var l = d(f, i, a, b, g);
          if (Array.isArray(l)) {
            var m = function (a) {
              if (Array.isArray(a)) {
                return a;
              }
            }(l) || function (a) {
              var b = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
              if (b != null) {
                var c;
                var d;
                var e;
                var f;
                var g = [];
                var h = true;
                var i = false;
                try {
                  e = (b = b.call(a)).next;
                  false;
                  for (; !(h = (c = e.call(b)).done) && (g.push(c.value), g.length !== 2); h = true);
                } catch (a) {
                  i = true;
                  d = a;
                } finally {
                  try {
                    if (!h && b.return != null && (f = b.return(), Object(f) !== f)) {
                      return;
                    }
                  } finally {
                    if (i) {
                      throw d;
                    }
                  }
                }
                return g;
              }
            }(l) || function (a) {
              if (a) {
                if (typeof a == "string") {
                  return rZ(a, 2);
                }
                var b = {}.toString.call(a).slice(8, -1);
                if (b === "Object" && a.constructor) {
                  b = a.constructor.name;
                }
                if (b === "Map" || b === "Set") {
                  return Array.from(a);
                } else if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) {
                  return rZ(a, 2);
                } else {
                  return undefined;
                }
              }
            }(l) || function () {
              throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
            j = m[0];
            k = m[1];
          } else {
            if (l == null) {
              return null;
            }
            j = l;
          }
          var n = rY(rY({}, r0), {}, {
            color: a.color || r0.color
          }, e);
          return bw.createElement("li", {
            className: "recharts-tooltip-item",
            key: `tooltip-item-${b}`,
            style: n
          }, aL(k) ? bw.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, k) : null, aL(k) ? bw.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, c) : null, bw.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, j), bw.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, a.unit || ""));
        });
        return bw.createElement("ul", {
          className: "recharts-tooltip-item-list",
          style: {
            padding: 0,
            margin: 0
          }
        }, a);
      }
      return null;
    })());
  };
  var r3 = "recharts-tooltip-wrapper";
  var r4 = {
    visibility: "hidden"
  };
  function r5(a) {
    var b = a.allowEscapeViewBox;
    var c = a.coordinate;
    var d = a.key;
    var e = a.offset;
    var f = a.position;
    var g = a.reverseDirection;
    var h = a.tooltipDimension;
    var i = a.viewBox;
    var j = a.viewBoxDimension;
    if (f && aK(f[d])) {
      return f[d];
    }
    var k = c[d] - h - (e > 0 ? e : 0);
    var l = c[d] + e;
    if (b[d]) {
      if (g[d]) {
        return k;
      } else {
        return l;
      }
    }
    var m = i[d];
    if (m == null) {
      return 0;
    } else if (g[d]) {
      if (k < m) {
        return Math.max(l, m);
      } else {
        return Math.max(k, m);
      }
    } else if (j == null) {
      return 0;
    } else if (l + h > m + j) {
      return Math.max(k, m);
    } else {
      return Math.max(l, m);
    }
  }
  function r6(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function r7(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        r6(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        r6(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  function r8(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  var r9 = bw.memo(function (a) {
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var j;
    var k;
    var l;
    var m;
    var n;
    var o;
    var p;
    var q;
    var r;
    var s;
    var t;
    var u;
    var v;
    var w;
    var x;
    var y;
    var A;
    var C;
    var D = oo();
    var E = function (a) {
      if (Array.isArray(a)) {
        return a;
      }
    }(w = bw.useState(() => ({
      dismissed: false,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      }
    }))) || function (a) {
      var b = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (b != null) {
        var c;
        var d;
        var e;
        var f;
        var g = [];
        var h = true;
        var i = false;
        try {
          e = (b = b.call(a)).next;
          false;
          for (; !(h = (c = e.call(b)).done) && (g.push(c.value), g.length !== 2); h = true);
        } catch (a) {
          i = true;
          d = a;
        } finally {
          try {
            if (!h && b.return != null && (f = b.return(), Object(f) !== f)) {
              return;
            }
          } finally {
            if (i) {
              throw d;
            }
          }
        }
        return g;
      }
    }(w) || function (a) {
      if (a) {
        if (typeof a == "string") {
          return r8(a, 2);
        }
        var b = {}.toString.call(a).slice(8, -1);
        if (b === "Object" && a.constructor) {
          b = a.constructor.name;
        }
        if (b === "Map" || b === "Set") {
          return Array.from(a);
        } else if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) {
          return r8(a, 2);
        } else {
          return undefined;
        }
      }
    }(w) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
    var F = E[0];
    var G = E[1];
    bw.useEffect(() => {
      var b = b => {
        if (b.key === "Escape") {
          var d;
          var f;
          G({
            dismissed: true,
            dismissedAtCoordinate: {
              x: ((d = a.coordinate) == null ? undefined : d.x) ?? 0,
              y: ((f = a.coordinate) == null ? undefined : f.y) ?? 0
            }
          });
        }
      };
      document.addEventListener("keydown", b);
      return () => {
        document.removeEventListener("keydown", b);
      };
    }, [(x = a.coordinate) == null ? undefined : x.x, (y = a.coordinate) == null ? undefined : y.y]);
    if (F.dismissed && ((((A = a.coordinate) == null ? undefined : A.x) ?? 0) !== F.dismissedAtCoordinate.x || (((C = a.coordinate) == null ? undefined : C.y) ?? 0) !== F.dismissedAtCoordinate.y)) {
      G(r7(r7({}, F), {}, {
        dismissed: false
      }));
    }
    n = (b = {
      allowEscapeViewBox: a.allowEscapeViewBox,
      coordinate: a.coordinate,
      offsetLeft: typeof a.offset == "number" ? a.offset : a.offset.x,
      offsetTop: typeof a.offset == "number" ? a.offset : a.offset.y,
      position: a.position,
      reverseDirection: a.reverseDirection,
      tooltipBox: a.lastBoundingBox,
      useTranslate3d: a.useTranslate3d,
      viewBox: a.viewBox
    }).allowEscapeViewBox;
    o = b.coordinate;
    p = b.offsetTop;
    q = b.offsetLeft;
    r = b.position;
    s = b.reverseDirection;
    t = b.tooltipBox;
    u = b.useTranslate3d;
    v = b.viewBox;
    if (t && t.height > 0 && t.width > 0 && o) {
      d = (c = {
        translateX: l = r5({
          allowEscapeViewBox: n,
          coordinate: o,
          key: "x",
          offset: q,
          position: r,
          reverseDirection: s,
          tooltipDimension: t.width,
          viewBox: v,
          viewBoxDimension: v.width
        }),
        translateY: m = r5({
          allowEscapeViewBox: n,
          coordinate: o,
          key: "y",
          offset: p,
          position: r,
          reverseDirection: s,
          tooltipDimension: t.height,
          viewBox: v,
          viewBoxDimension: v.height
        }),
        useTranslate3d: u
      }).translateX;
      e = c.translateY;
      k = {
        transform: c.useTranslate3d ? `translate3d(${d}px, ${e}px, 0)` : `translate(${d}px, ${e}px)`
      };
    } else {
      k = r4;
    }
    var H = {
      cssProperties: k,
      cssClasses: (g = (f = {
        translateX: l,
        translateY: m,
        coordinate: o
      }).coordinate, h = f.translateX, j = f.translateY, i(r3, {
        [`${r3}-right`]: aK(h) && g && aK(g.x) && h >= g.x,
        [`${r3}-left`]: aK(h) && g && aK(g.x) && h < g.x,
        [`${r3}-bottom`]: aK(j) && g && aK(g.y) && j >= g.y,
        [`${r3}-top`]: aK(j) && g && aK(g.y) && j < g.y
      }))
    };
    var I = H.cssClasses;
    var J = H.cssProperties;
    var K = a.hasPortalFromProps ? {} : r7(r7({
      transition: function (a) {
        if ((!a.prefersReducedMotion || a.isAnimationActive !== "auto") && a.isAnimationActive && a.active) {
          var b = typeof a.animationEasing == "string" ? a.animationEasing : "ease";
          return `transform ${a.animationDuration}ms ${b}`;
        }
      }({
        prefersReducedMotion: D,
        isAnimationActive: a.isAnimationActive,
        active: a.active,
        animationDuration: a.animationDuration,
        animationEasing: a.animationEasing
      })
    }, J), {}, {
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      left: 0
    });
    var L = r7(r7({}, K), {}, {
      visibility: !F.dismissed && a.active && a.hasPayload ? "visible" : "hidden"
    }, a.wrapperStyle);
    return bw.createElement("div", {
      xmlns: "http://www.w3.org/1999/xhtml",
      tabIndex: -1,
      className: I,
      style: L,
      ref: a.innerRef
    }, a.children);
  });
  function sa(a) {
    return a;
  }
  function sb(a) {
    return a == null || typeof a != "object" && typeof a != "function";
  }
  function sc(a) {
    return Object.getOwnPropertySymbols(a).filter(b => Object.prototype.propertyIsEnumerable.call(a, b));
  }
  function sd(a) {
    if (a == null) {
      if (a === undefined) {
        return "[object Undefined]";
      } else {
        return "[object Null]";
      }
    } else {
      return Object.prototype.toString.call(a);
    }
  }
  a.s(["getSymbols", 0, sc], 79728);
  a.s(["getTag", 0, sd], 17037);
  let se = "[object RegExp]";
  let sf = "[object String]";
  let sg = "[object Number]";
  let sh = "[object Boolean]";
  let si = "[object Arguments]";
  let sj = "[object Symbol]";
  let sk = "[object Date]";
  let sl = "[object Map]";
  let sm = "[object Set]";
  let sn = "[object Array]";
  let so = "[object ArrayBuffer]";
  let sp = "[object Object]";
  let sq = "[object DataView]";
  let sr = "[object Uint8Array]";
  let ss = "[object Uint8ClampedArray]";
  let st = "[object Uint16Array]";
  let su = "[object Uint32Array]";
  let sv = "[object Int8Array]";
  let sw = "[object Int16Array]";
  let sx = "[object Int32Array]";
  let sy = "[object Float32Array]";
  let sz = "[object Float64Array]";
  a.s(["argumentsTag", 0, si, "arrayBufferTag", 0, so, "arrayTag", 0, sn, "bigInt64ArrayTag", 0, "[object BigInt64Array]", "bigUint64ArrayTag", 0, "[object BigUint64Array]", "booleanTag", 0, sh, "dataViewTag", 0, sq, "dateTag", 0, sk, "errorTag", 0, "[object Error]", "float32ArrayTag", 0, sy, "float64ArrayTag", 0, sz, "functionTag", 0, "[object Function]", "int16ArrayTag", 0, sw, "int32ArrayTag", 0, sx, "int8ArrayTag", 0, sv, "mapTag", 0, sl, "numberTag", 0, sg, "objectTag", 0, sp, "regexpTag", 0, se, "setTag", 0, sm, "stringTag", 0, sf, "symbolTag", 0, sj, "uint16ArrayTag", 0, st, "uint32ArrayTag", 0, su, "uint8ArrayTag", 0, sr, "uint8ClampedArrayTag", 0, ss], 52514);
  let sA = typeof globalThis == "object" && globalThis || typeof self == "object" && self || a.g || function () {
    return this;
  }();
  function sB(a) {
    return sA.Buffer !== undefined && sA.Buffer.isBuffer(a);
  }
  function sC(a, b, c, d = new Map(), e) {
    let f = e?.(a, b, c, d);
    if (f !== undefined) {
      return f;
    }
    if (sb(a)) {
      return a;
    }
    if (d.has(a)) {
      return d.get(a);
    }
    if (Array.isArray(a)) {
      let b = Array(a.length);
      d.set(a, b);
      for (let f = 0; f < a.length; f++) {
        b[f] = sC(a[f], f, c, d, e);
      }
      if (Object.hasOwn(a, "index")) {
        b.index = a.index;
      }
      if (Object.hasOwn(a, "input")) {
        b.input = a.input;
      }
      return b;
    }
    if (a instanceof Date) {
      return new Date(a.getTime());
    }
    if (a instanceof RegExp) {
      let b = new RegExp(a.source, a.flags);
      b.lastIndex = a.lastIndex;
      return b;
    }
    if (a instanceof Map) {
      let b = new Map();
      d.set(a, b);
      for (let [f, g] of a) {
        b.set(f, sC(g, f, c, d, e));
      }
      return b;
    }
    if (a instanceof Set) {
      let b = new Set();
      d.set(a, b);
      for (let f of a) {
        b.add(sC(f, undefined, c, d, e));
      }
      return b;
    }
    if (sB(a)) {
      return a.subarray();
    }
    if (ArrayBuffer.isView(a) && !(a instanceof DataView)) {
      let b = new (Object.getPrototypeOf(a).constructor)(a.length);
      d.set(a, b);
      for (let f = 0; f < a.length; f++) {
        b[f] = sC(a[f], f, c, d, e);
      }
      return b;
    }
    if (a instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && a instanceof SharedArrayBuffer) {
      return a.slice(0);
    }
    if (a instanceof DataView) {
      let b = new DataView(a.buffer.slice(0), a.byteOffset, a.byteLength);
      d.set(a, b);
      sD(b, a, c, d, e);
      return b;
    }
    if (typeof File !== "undefined" && a instanceof File) {
      let b = new File([a], a.name, {
        type: a.type
      });
      d.set(a, b);
      sD(b, a, c, d, e);
      return b;
    }
    if (typeof Blob !== "undefined" && a instanceof Blob) {
      let b = new Blob([a], {
        type: a.type
      });
      d.set(a, b);
      sD(b, a, c, d, e);
      return b;
    }
    if (a instanceof Error) {
      let b = structuredClone(a);
      d.set(a, b);
      b.message = a.message;
      b.name = a.name;
      b.stack = a.stack;
      b.cause = a.cause;
      b.constructor = a.constructor;
      sD(b, a, c, d, e);
      return b;
    }
    if (a instanceof Boolean) {
      let b = new Boolean(a.valueOf());
      d.set(a, b);
      sD(b, a, c, d, e);
      return b;
    }
    if (a instanceof Number) {
      let b = new Number(a.valueOf());
      d.set(a, b);
      sD(b, a, c, d, e);
      return b;
    }
    if (a instanceof String) {
      let b = new String(a.valueOf());
      d.set(a, b);
      sD(b, a, c, d, e);
      return b;
    }
    if (typeof a == "object" && function (a) {
      switch (sd(a)) {
        case si:
        case sn:
        case so:
        case sq:
        case sh:
        case sk:
        case sy:
        case sz:
        case sv:
        case sw:
        case sx:
        case sl:
        case sg:
        case sp:
        case se:
        case sm:
        case sf:
        case sj:
        case sr:
        case ss:
        case st:
        case su:
          return true;
        default:
          return false;
      }
    }(a)) {
      let b = Object.create(Object.getPrototypeOf(a));
      d.set(a, b);
      sD(b, a, c, d, e);
      return b;
    }
    return a;
  }
  function sD(a, b, c = a, d, e) {
    let f = [...Object.keys(b), ...sc(b)];
    for (let g = 0; g < f.length; g++) {
      let h = f[g];
      let i = Object.getOwnPropertyDescriptor(a, h);
      if (i == null || i.writable) {
        a[h] = sC(b[h], h, c, d, e);
      }
    }
  }
  function sE(a, b, c, d, e = false) {
    if (b === a) {
      return true;
    }
    switch (typeof b) {
      case "object":
        return function (a, b, c, d, e = false) {
          if (b == null) {
            return true;
          }
          if (Array.isArray(b)) {
            return sF(a, b, c, d);
          }
          if (b instanceof Map) {
            var f;
            var g;
            var h;
            var i;
            var j = a;
            var k = b;
            var l = c;
            var m = d;
            if (k.size === 0) {
              return true;
            }
            if (!(j instanceof Map)) {
              return false;
            }
            for (let [a, b] of k.entries()) {
              if (l(j.get(a), b, a, j, k, m) === false) {
                return false;
              }
            }
            return true;
          }
          if (b instanceof Set) {
            f = a;
            g = b;
            h = c;
            i = d;
            return g.size === 0 || f instanceof Set && sF([...f], [...g], h, i);
          }
          let n = Object.keys(b);
          if (a == null) {
            return e && n.length === 0;
          }
          if (e) {
            if (sb(a)) {
              a = Object(a);
            }
          } else {
            let b = sd(a);
            if (b !== "[object Object]" && b !== "[object Arguments]") {
              return false;
            }
          }
          if (n.length === 0) {
            return true;
          }
          if (d?.has(b)) {
            return d.get(b) === a;
          }
          d?.set(b, a);
          try {
            for (let e = 0; e < n.length; e++) {
              let f = n[e];
              if (!(f in a) || b[f] === undefined && a[f] !== undefined || b[f] === null && a[f] !== null || !c(a[f], b[f], f, a, b, d)) {
                return false;
              }
            }
            return true;
          } finally {
            d?.delete(b);
          }
        }(a, b, c, d, e);
      case "function":
        if (Object.keys(b).length > 0) {
          return sE(a, {
            ...b
          }, c, d, e);
        }
        return al(a, b);
      default:
        if (!an(a)) {
          return al(a, b);
        }
        if (e) {
          if (typeof b == "string") {
            return b === "";
          }
          return true;
        }
        return al(a, b);
    }
  }
  function sF(a, b, c, d) {
    if (b.length === 0) {
      return true;
    }
    if (!Array.isArray(a)) {
      return false;
    }
    let e = new Set();
    for (let f = 0; f < b.length; f++) {
      let g = b[f];
      let h = false;
      for (let i = 0; i < a.length; i++) {
        if (e.has(i)) {
          continue;
        }
        let j = a[i];
        let k = false;
        if (c(j, g, f, a, b, d)) {
          k = true;
        }
        if (k) {
          e.add(i);
          h = true;
          break;
        }
      }
      if (!h) {
        return false;
      }
    }
    return true;
  }
  function sG(a, b) {
    return function a(b, c, d) {
      if (typeof d != "function") {
        return a(b, c, () => undefined);
      } else {
        return sE(b, c, function a(b, c, e, f, g, h) {
          let i = d(b, c, e, f, g, h);
          if (i !== undefined) {
            return !!i;
          } else {
            return sE(b, c, a, h, false);
          }
        }, new Map(), true);
      }
    }(a, b, () => undefined);
  }
  function sH(a) {
    if (a === 0) {
      return 0;
    } else {
      return a;
    }
  }
  function sI(a, b = sa) {
    var c;
    if (am(a)) {
      return function (a, b) {
        let c = new Map();
        for (let d = 0; d < a.length; d++) {
          let e = a[d];
          let f = b(e, d, a);
          if (!c.has(f)) {
            c.set(f, e);
          }
        }
        return Array.from(c.values());
      }(Array.from(a), (c = function (a) {
        var b;
        var c;
        if (a == null) {
          return sa;
        }
        switch (typeof a) {
          case "function":
            return a;
          case "object":
            if (Array.isArray(a) && a.length === 2) {
              return function (a, b) {
                var c;
                var f;
                var i;
                switch (typeof a) {
                  case "object":
                    if (Object.is(a?.valueOf(), -0)) {
                      a = "-0";
                    }
                    break;
                  case "number":
                    a = e(a);
                }
                f = c = b;
                i = (a, b, d, e) => {
                  let f;
                  if (f !== undefined) {
                    return f;
                  }
                  if (typeof c == "object") {
                    if (sd(c) === "[object Object]" && typeof c.constructor != "function") {
                      let a = {};
                      e.set(c, a);
                      sD(a, c, d, e);
                      return a;
                    }
                    switch (Object.prototype.toString.call(c)) {
                      case sg:
                      case sf:
                      case sh:
                        {
                          let a = new c.constructor(c?.valueOf());
                          sD(a, c);
                          return a;
                        }
                      case si:
                        {
                          let a = {};
                          sD(a, c);
                          a.length = c.length;
                          a[Symbol.iterator] = c[Symbol.iterator];
                          return a;
                        }
                      default:
                        return;
                    }
                  }
                };
                b = sC(f, undefined, f, new Map(), i);
                return function (c) {
                  let f = h(c, a);
                  if (f === undefined) {
                    return function (a, b) {
                      let c;
                      if ((c = Array.isArray(b) ? b : typeof b == "string" && d(b) && !(b in Object(a)) ? g(b) : [b]).length === 0) {
                        return false;
                      }
                      let f = a;
                      for (let a = 0; a < c.length; a++) {
                        var h;
                        let b = e(c[a]);
                        if ((f == null || !Object.hasOwn(f, b)) && (!Array.isArray(f) && ((h = f) === null || typeof h != "object" || sd(h) !== "[object Arguments]") || !ap(b) || !(Number(b) < f.length))) {
                          return false;
                        }
                        f = f[b];
                      }
                      return true;
                    }(c, a);
                  } else if (b === undefined) {
                    return f === undefined;
                  } else {
                    return sG(f, b);
                  }
                };
              }(a[0], a[1]);
            }
            b = sC(c = b = a, undefined, c, new Map(), undefined);
            return a => sG(a, b);
          default:
            return function (b) {
              return h(b, a);
            };
        }
      }(b), function (...a) {
        return c.apply(this, a.slice(0, 1));
      })).map(sH);
    } else {
      return [];
    }
  }
  function sJ(a, b, c) {
    if (b === true) {
      return sI(a, c);
    } else if (typeof b == "function") {
      return sI(a, b);
    } else {
      return a;
    }
  }
  function sK(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  function sL(a, b) {
    return Math.abs(a.height - b.height) > 1 || Math.abs(a.left - b.left) > 1 || Math.abs(a.top - b.top) > 1 || Math.abs(a.width - b.width) > 1;
  }
  function sM(a) {
    var b = a.getBoundingClientRect();
    return {
      height: b.height,
      left: b.left,
      top: b.top,
      width: b.width
    };
  }
  function sN() {
    var a;
    var b = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var c = function (a) {
      if (Array.isArray(a)) {
        return a;
      }
    }(a = (0, bw.useState)({
      height: 0,
      left: 0,
      top: 0,
      width: 0
    })) || function (a) {
      var b = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (b != null) {
        var c;
        var d;
        var e;
        var f;
        var g = [];
        var h = true;
        var i = false;
        try {
          e = (b = b.call(a)).next;
          false;
          for (; !(h = (c = e.call(b)).done) && (g.push(c.value), g.length !== 2); h = true);
        } catch (a) {
          i = true;
          d = a;
        } finally {
          try {
            if (!h && b.return != null && (f = b.return(), Object(f) !== f)) {
              return;
            }
          } finally {
            if (i) {
              throw d;
            }
          }
        }
        return g;
      }
    }(a) || function (a) {
      if (a) {
        if (typeof a == "string") {
          return sK(a, 2);
        }
        var b = {}.toString.call(a).slice(8, -1);
        if (b === "Object" && a.constructor) {
          b = a.constructor.name;
        }
        if (b === "Map" || b === "Set") {
          return Array.from(a);
        } else if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) {
          return sK(a, 2);
        } else {
          return undefined;
        }
      }
    }(a) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
    var d = c[0];
    var e = c[1];
    var f = (0, bw.useRef)(null);
    var g = (0, bw.useRef)(d);
    g.current = d;
    var h = (0, bw.useCallback)(a => {
      if (f.current != null) {
        f.current.disconnect();
        f.current = null;
      }
      if (a != null) {
        var b = sM(a);
        if (sL(b, g.current)) {
          e(b);
        }
        if (typeof ResizeObserver !== "undefined") {
          var c = new ResizeObserver(() => {
            var b = sM(a);
            if (sL(b, g.current)) {
              e(b);
            }
          });
          c.observe(a);
          f.current = c;
        }
      }
    }, [...b]);
    (0, bw.useEffect)(() => () => {
      var a;
      if ((a = f.current) != null) {
        a.disconnect();
      }
    }, []);
    return [d, h];
  }
  a.s(["isBuffer", 0, sB], 23820);
  a.s(["getUniqPayload", 0, sJ], 79946);
  a.s(["useElementOffset", 0, sN], 28162);
  var sO = ["x", "y", "top", "left", "width", "height", "className"];
  function sP() {
    return (sP = Object.assign.bind()).apply(null, arguments);
  }
  function sQ(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  var sR = a => {
    var b = a.x;
    var c = b === undefined ? 0 : b;
    var d = a.y;
    var e = d === undefined ? 0 : d;
    var f = a.top;
    var g = f === undefined ? 0 : f;
    var h = a.left;
    var j = h === undefined ? 0 : h;
    var k = a.width;
    var l = k === undefined ? 0 : k;
    var m = a.height;
    var n = m === undefined ? 0 : m;
    var o = a.className;
    var p = function (a) {
      for (var b = 1; b < arguments.length; b++) {
        var c = arguments[b] ?? {};
        if (b % 2) {
          sQ(Object(c), true).forEach(function (b) {
            var d;
            var e;
            var f;
            d = a;
            e = b;
            f = c[b];
            if ((e = function (a) {
              var b = function (a, b) {
                if (typeof a != "object" || !a) {
                  return a;
                }
                var c = a[Symbol.toPrimitive];
                if (c !== undefined) {
                  var d = c.call(a, b || "default");
                  if (typeof d != "object") {
                    return d;
                  }
                  throw TypeError("@@toPrimitive must return a primitive value.");
                }
                return (b === "string" ? String : Number)(a);
              }(a, "string");
              if (typeof b == "symbol") {
                return b;
              } else {
                return b + "";
              }
            }(e)) in d) {
              Object.defineProperty(d, e, {
                value: f,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              d[e] = f;
            }
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
        } else {
          sQ(Object(c)).forEach(function (b) {
            Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
          });
        }
      }
      return a;
    }({
      x: c,
      y: e,
      top: g,
      left: j,
      width: l,
      height: n
    }, function (a, b) {
      if (a == null) {
        return {};
      }
      var c;
      var d;
      var e = function (a, b) {
        if (a == null) {
          return {};
        }
        var c = {};
        for (var d in a) {
          if ({}.hasOwnProperty.call(a, d)) {
            if (b.indexOf(d) !== -1) {
              continue;
            }
            c[d] = a[d];
          }
        }
        return c;
      }(a, b);
      if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(a);
        for (d = 0; d < f.length; d++) {
          c = f[d];
          if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
            e[c] = a[c];
          }
        }
      }
      return e;
    }(a, sO));
    if (aK(c) && aK(e) && aK(l) && aK(n) && aK(g) && aK(j)) {
      return bw.createElement("path", sP({}, lm(p), {
        className: i("recharts-cross", o),
        d: `M${c},${g}v${n}M${j},${e}h${l}`
      }));
    } else {
      return null;
    }
  };
  var sS = ["radius"];
  var sT = ["radius"];
  function sU(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function sV(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        sU(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        sU(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  function sW() {
    return (sW = Object.assign.bind()).apply(null, arguments);
  }
  function sX(a, b) {
    if (a == null) {
      return {};
    }
    var c;
    var d;
    var e = function (a, b) {
      if (a == null) {
        return {};
      }
      var c = {};
      for (var d in a) {
        if ({}.hasOwnProperty.call(a, d)) {
          if (b.indexOf(d) !== -1) {
            continue;
          }
          c[d] = a[d];
        }
      }
      return c;
    }(a, b);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(a);
      for (d = 0; d < f.length; d++) {
        c = f[d];
        if (b.indexOf(c) === -1 && {}.propertyIsEnumerable.call(a, c)) {
          e[c] = a[c];
        }
      }
    }
    return e;
  }
  function sY(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  function sZ(a, b) {
    b ||= a.slice(0);
    return Object.freeze(Object.defineProperties(a, {
      raw: {
        value: Object.freeze(b)
      }
    }));
  }
  var s$ = (a, b, c, d, e) => {
    var f = aF(c);
    var g = aF(d);
    var h = Math.min(Math.abs(f) / 2, Math.abs(g) / 2);
    var i = g >= 0 ? 1 : -1;
    var j = f >= 0 ? 1 : -1;
    var k = +(g >= 0 && f >= 0 || g < 0 && f < 0);
    if (h > 0 && Array.isArray(e)) {
      var l = [0, 0, 0, 0];
      for (var m = 0; m < 4; m++) {
        var n;
        var p = e[m] ?? 0;
        l[m] = p > h ? h : p;
      }
      n = aG(B ||= sZ(["M", ",", ""]), a, b + i * l[0]);
      if (l[0] > 0) {
        n += aG(C ||= sZ(["A ", ",", ",0,0,", ",", ",", ""]), l[0], l[0], k, a + j * l[0], b);
      }
      n += aG(D ||= sZ(["L ", ",", ""]), a + c - j * l[1], b);
      if (l[1] > 0) {
        n += aG(E ||= sZ(["A ", ",", ",0,0,", ",\n        ", ",", ""]), l[1], l[1], k, a + c, b + i * l[1]);
      }
      n += aG(F ||= sZ(["L ", ",", ""]), a + c, b + d - i * l[2]);
      if (l[2] > 0) {
        n += aG(G ||= sZ(["A ", ",", ",0,0,", ",\n        ", ",", ""]), l[2], l[2], k, a + c - j * l[2], b + d);
      }
      n += aG(H ||= sZ(["L ", ",", ""]), a + j * l[3], b + d);
      if (l[3] > 0) {
        n += aG(I ||= sZ(["A ", ",", ",0,0,", ",\n        ", ",", ""]), l[3], l[3], k, a, b + d - i * l[3]);
      }
      n += "Z";
    } else if (h > 0 && e === +e && e > 0) {
      var q = Math.min(h, e);
      n = aG(J ||= sZ(["M ", ",", "\n            A ", ",", ",0,0,", ",", ",", "\n            L ", ",", "\n            A ", ",", ",0,0,", ",", ",", "\n            L ", ",", "\n            A ", ",", ",0,0,", ",", ",", "\n            L ", ",", "\n            A ", ",", ",0,0,", ",", ",", " Z"]), a, b + i * q, q, q, k, a + j * q, b, a + c - j * q, b, q, q, k, a + c, b + i * q, a + c, b + d - i * q, q, q, k, a + c - j * q, b + d, a + j * q, b + d, q, q, k, a, b + d - i * q);
    } else {
      n = aG(K ||= sZ(["M ", ",", " h ", " v ", " h ", " Z"]), a, b, c, d, -c);
    }
    return n;
  };
  var s_ = {
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
  var s0 = a => {
    let b;
    let c;
    var d;
    var e = l2(a, s_);
    var f = (0, bw.useRef)(null);
    var g = function (a) {
      if (Array.isArray(a)) {
        return a;
      }
    }(d = (0, bw.useState)(-1)) || function (a) {
      var b = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (b != null) {
        var c;
        var d;
        var e;
        var f;
        var g = [];
        var h = true;
        var i = false;
        try {
          e = (b = b.call(a)).next;
          false;
          for (; !(h = (c = e.call(b)).done) && (g.push(c.value), g.length !== 2); h = true);
        } catch (a) {
          i = true;
          d = a;
        } finally {
          try {
            if (!h && b.return != null && (f = b.return(), Object(f) !== f)) {
              return;
            }
          } finally {
            if (i) {
              throw d;
            }
          }
        }
        return g;
      }
    }(d) || function (a) {
      if (a) {
        if (typeof a == "string") {
          return sY(a, 2);
        }
        var b = {}.toString.call(a).slice(8, -1);
        if (b === "Object" && a.constructor) {
          b = a.constructor.name;
        }
        if (b === "Map" || b === "Set") {
          return Array.from(a);
        } else if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) {
          return sY(a, 2);
        } else {
          return undefined;
        }
      }
    }(d) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
    var h = g[0];
    var j = g[1];
    (0, bw.useEffect)(() => {
      if (f.current && f.current.getTotalLength) {
        try {
          var a = f.current.getTotalLength();
          if (a) {
            j(a);
          }
        } catch (a) {}
      }
    }, []);
    var k = e.x;
    var l = e.y;
    var m = e.width;
    var n = e.height;
    var o = e.radius;
    var p = e.className;
    var q = e.animationEasing;
    var r = e.animationDuration;
    var s = e.animationBegin;
    var t = e.isAnimationActive;
    var u = e.isUpdateAnimationActive;
    var v = (0, bw.useRef)(m);
    var w = (0, bw.useRef)(n);
    var x = (0, bw.useRef)(k);
    var y = (0, bw.useRef)(l);
    var z = oz((0, bw.useMemo)(() => ({
      x: k,
      y: l,
      width: m,
      height: n,
      radius: o
    }), [k, l, m, n, o]), "rectangle-");
    if (k !== +k || l !== +l || m !== +m || n !== +n || m === 0 || n === 0) {
      return null;
    }
    var A = i("recharts-rectangle", p);
    if (!u) {
      var B = lm(e);
      B.radius;
      var C = sX(B, sS);
      return bw.createElement("path", sW({}, C, {
        x: aF(k),
        y: aF(l),
        width: aF(m),
        height: aF(n),
        radius: typeof o == "number" ? o : undefined,
        className: A,
        d: s$(k, l, m, n, o)
      }));
    }
    var D = v.current;
    var E = w.current;
    var F = x.current;
    var G = y.current;
    var H = `0px ${h === -1 ? 1 : h}px`;
    var I = `${h}px ${h}px`;
    b = ["strokeDasharray"];
    c = typeof q == "string" ? q : s_.animationEasing;
    var J = b.map(a => `${a.replace(/([A-Z])/g, a => `-${a.toLowerCase()}`)} ${r}ms ${c}`).join(",");
    return bw.createElement(oy, {
      animationId: z,
      key: z,
      canBegin: h > 0,
      duration: r,
      easing: q,
      isActive: u,
      begin: s
    }, a => {
      var b;
      var c = aQ(D, m, a);
      var d = aQ(E, n, a);
      var g = aQ(F, k, a);
      var h = aQ(G, l, a);
      if (f.current) {
        v.current = c;
        w.current = d;
        x.current = g;
        y.current = h;
      }
      b = t ? a > 0 ? {
        transition: J,
        strokeDasharray: I
      } : {
        strokeDasharray: H
      } : {
        strokeDasharray: I
      };
      var i = lm(e);
      i.radius;
      var j = sX(i, sT);
      return bw.createElement("path", sW({}, j, {
        radius: typeof o == "number" ? o : undefined,
        className: A,
        d: s$(g, h, c, d, o),
        ref: f,
        style: sV(sV({}, b), e.style)
      }));
    });
  };
  function s1(a) {
    var b = a.cx;
    var c = a.cy;
    var d = a.radius;
    var e = a.startAngle;
    var f = a.endAngle;
    return {
      points: [eZ(b, c, d, e), eZ(b, c, d, f)],
      cx: b,
      cy: c,
      radius: d,
      startAngle: e,
      endAngle: f
    };
  }
  function s2(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function s3(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        s2(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        s2(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  function s4() {
    return (s4 = Object.assign.bind()).apply(null, arguments);
  }
  function s5(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function s6(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        s5(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        s5(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  function s7(a) {
    var b = a.cursor;
    var c = a.cursorComp;
    var d = a.cursorProps;
    if ((0, bw.isValidElement)(b)) {
      return (0, bw.cloneElement)(b, d);
    } else {
      return (0, bw.createElement)(c, d);
    }
  }
  function s8(a) {
    var b;
    var d;
    var e;
    var f;
    var g = a.coordinate;
    var h = a.payload;
    var j = a.index;
    var k = a.offset;
    var l = a.tooltipAxisBandSize;
    var m = a.layout;
    var n = a.cursor;
    var o = a.tooltipEventType;
    var p = a.chartName;
    if (!n || !g || p !== "ScatterChart" && o !== "axis") {
      return null;
    }
    if (p === "ScatterChart") {
      d = g;
      e = sR;
      f = e0.cursorLine;
    } else if (p === "BarChart") {
      b = l / 2;
      d = {
        stroke: "none",
        fill: "#ccc",
        x: m === "horizontal" ? g.x - b : k.left + 0.5,
        y: m === "horizontal" ? k.top + 0.5 : g.y - b,
        width: m === "horizontal" ? l : k.width - 1,
        height: m === "horizontal" ? k.height - 1 : l
      };
      e = s0;
      f = e0.cursorRectangle;
    } else if (m === "radial" && lS(g)) {
      var q = s1(g);
      var r = q.cx;
      var s = q.cy;
      var t = q.radius;
      d = {
        cx: r,
        cy: s,
        startAngle: q.startAngle,
        endAngle: q.endAngle,
        innerRadius: t,
        outerRadius: t
      };
      e = l8;
      f = e0.cursorLine;
    } else {
      d = {
        points: function (a, b, c) {
          if (a === "horizontal") {
            return [{
              x: b.x,
              y: c.top
            }, {
              x: b.x,
              y: c.top + c.height
            }];
          }
          if (a === "vertical") {
            return [{
              x: c.left,
              y: b.y
            }, {
              x: c.left + c.width,
              y: b.y
            }];
          }
          if (lS(b)) {
            if (a === "centric") {
              var d = b.cx;
              var e = b.cy;
              var f = b.innerRadius;
              var g = b.outerRadius;
              var h = b.angle;
              var i = eZ(d, e, f, h);
              var j = eZ(d, e, g, h);
              return [{
                x: i.x,
                y: i.y
              }, {
                x: j.x,
                y: j.y
              }];
            }
            return s1(b);
          }
        }(m, g, k)
      };
      e = l0;
      f = e0.cursorLine;
    }
    var u = typeof n == "object" && "className" in n ? n.className : undefined;
    var v = s6(s6(s6(s6({
      stroke: "#ccc",
      pointerEvents: "none"
    }, k), d), ll(n)), {}, {
      payload: h,
      payloadIndex: j,
      className: i("recharts-tooltip-cursor", u)
    });
    return bw.createElement(o7, {
      zIndex: a.zIndex ?? f
    }, bw.createElement(s7, {
      cursor: n,
      cursorComp: e,
      cursorProps: v
    }));
  }
  function s9(a) {
    var b;
    var c;
    var d;
    b = bE(j0);
    c = bE(nV);
    d = bE(nS);
    var e = b && d ? bd(s3(s3({}, b), {}, {
      scale: d
    }), c) : bd(undefined, c);
    var f = d_();
    var g = d3();
    var h = pQ();
    if (e == null || f == null || g == null || h == null) {
      return null;
    } else {
      return bw.createElement(s8, s4({}, a, {
        offset: f,
        layout: g,
        tooltipAxisBandSize: e,
        chartName: h
      }));
    }
  }
  function ta(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      if (b) {
        d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        });
      }
      c.push.apply(c, d);
    }
    return c;
  }
  function tb(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b] ?? {};
      if (b % 2) {
        ta(Object(c), true).forEach(function (b) {
          var d;
          var e;
          var f;
          d = a;
          e = b;
          f = c[b];
          if ((e = function (a) {
            var b = function (a, b) {
              if (typeof a != "object" || !a) {
                return a;
              }
              var c = a[Symbol.toPrimitive];
              if (c !== undefined) {
                var d = c.call(a, b || "default");
                if (typeof d != "object") {
                  return d;
                }
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return (b === "string" ? String : Number)(a);
            }(a, "string");
            if (typeof b == "symbol") {
              return b;
            } else {
              return b + "";
            }
          }(e)) in d) {
            Object.defineProperty(d, e, {
              value: f,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            d[e] = f;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
      } else {
        ta(Object(c)).forEach(function (b) {
          Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
      }
    }
    return a;
  }
  function tc(a, b) {
    if (b == null || b > a.length) {
      b = a.length;
    }
    for (var c = 0, d = Array(b); c < b; c++) {
      d[c] = a[c];
    }
    return d;
  }
  function td(a) {
    return a.dataKey;
  }
  var te = [];
  var tf = {
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
  a.s(["Tooltip", 0, function (a) {
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;
    var j;
    var l;
    var m = l2(a, tf);
    var n = m.active;
    var o = m.allowEscapeViewBox;
    var p = m.animationDuration;
    var q = m.animationEasing;
    var r = m.content;
    var s = m.filterNull;
    var t = m.isAnimationActive;
    var u = m.offset;
    var v = m.payloadUniqBy;
    var w = m.position;
    var x = m.reverseDirection;
    var y = m.useTranslate3d;
    var z = m.wrapperStyle;
    var A = m.cursor;
    var B = m.shared;
    var C = m.trigger;
    var D = m.defaultIndex;
    var E = m.portal;
    var F = m.axisId;
    var G = bA();
    var H = typeof D == "number" ? String(D) : D;
    (0, bw.useEffect)(() => {
      G(mX({
        shared: B,
        trigger: C,
        axisId: F,
        active: n,
        defaultIndex: H
      }));
    }, [G, B, C, F, n, H]);
    var I = dZ();
    var J = rh();
    var K = bE(a => m8(a, B));
    var L = bE(a => p1(a, K, C, H)) ?? {};
    var M = L.activeIndex;
    var N = L.isActive;
    var O = bE(a => p0(a, K, C, H));
    var P = bE(a => p_(a, K, C, H));
    var Q = bE(a => p$(a, K, C, H));
    var R = (0, bw.useContext)(rB);
    var S = (l = n ?? N) != null && l;
    var T = function (a) {
      if (Array.isArray(a)) {
        return a;
      }
    }(b = sN([O, S])) || function (a) {
      var b = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (b != null) {
        var c;
        var d;
        var e;
        var f;
        var g = [];
        var h = true;
        var i = false;
        try {
          e = (b = b.call(a)).next;
          false;
          for (; !(h = (c = e.call(b)).done) && (g.push(c.value), g.length !== 2); h = true);
        } catch (a) {
          i = true;
          d = a;
        } finally {
          try {
            if (!h && b.return != null && (f = b.return(), Object(f) !== f)) {
              return;
            }
          } finally {
            if (i) {
              throw d;
            }
          }
        }
        return g;
      }
    }(b) || function (a) {
      if (a) {
        if (typeof a == "string") {
          return tc(a, 2);
        }
        var b = {}.toString.call(a).slice(8, -1);
        if (b === "Object" && a.constructor) {
          b = a.constructor.name;
        }
        if (b === "Map" || b === "Set") {
          return Array.from(a);
        } else if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) {
          return tc(a, 2);
        } else {
          return undefined;
        }
      }
    }(b) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
    var U = T[0];
    var V = T[1];
    var W = K === "axis" ? P : undefined;
    c = bE(a => pX(a, K, C));
    d = bE(n1);
    e = bE(eV);
    f = bE(eT);
    g = bE(eU);
    i = ((h = bE(rw)) == null ? undefined : h.sourceViewBox) != null;
    j = dZ();
    (0, bw.useEffect)(() => {
      if (!i && f != null && e != null) {
        var a = m2({
          active: S,
          coordinate: Q,
          dataKey: c,
          index: M,
          label: typeof W == "number" ? String(W) : W,
          sourceViewBox: j,
          graphicalItemId: d
        });
        rt.emit(ru, f, a, e);
      }
    }, [i, Q, c, d, M, W, e, f, g, S, j]);
    var X = E ?? R;
    if (X == null || I == null || K == null) {
      return null;
    }
    var Y = O ?? te;
    if (!S) {
      Y = te;
    }
    if (s && Y.length) {
      Y = sJ(Y.filter(a => a.value != null && (a.hide !== true || m.includeHidden)), v, td);
    }
    var Z = Y.length > 0;
    var $ = tb(tb({}, m), {}, {
      payload: Y,
      label: W,
      active: S,
      activeIndex: M,
      coordinate: Q,
      accessibilityLayer: J
    });
    var _ = bw.createElement(r9, {
      allowEscapeViewBox: o,
      animationDuration: p,
      animationEasing: q,
      isAnimationActive: t,
      active: S,
      coordinate: Q,
      hasPayload: Z,
      offset: u,
      position: w,
      reverseDirection: x,
      useTranslate3d: y,
      viewBox: I,
      wrapperStyle: z,
      lastBoundingBox: U,
      innerRef: V,
      hasPortalFromProps: !!E
    }, bw.isValidElement(r) ? bw.cloneElement(r, $) : typeof r == "function" ? bw.createElement(r, $) : bw.createElement(r2, $));
    return bw.createElement(bw.Fragment, null, (0, oV.createPortal)(_, X), S && bw.createElement(s9, {
      cursor: A,
      tooltipEventType: K,
      coordinate: Q,
      payload: Y,
      index: M
    }));
  }], 59778);
}, 37350, (a, b, c) => {
  "use strict";

  var d = Object.prototype.hasOwnProperty;
  var e = "~";
  function f() {}
  function g(a, b, c) {
    this.fn = a;
    this.context = b;
    this.once = c || false;
  }
  function h(a, b, c, d, f) {
    if (typeof c != "function") {
      throw TypeError("The listener must be a function");
    }
    var h = new g(c, d || a, f);
    var i = e ? e + b : b;
    if (a._events[i]) {
      if (a._events[i].fn) {
        a._events[i] = [a._events[i], h];
      } else {
        a._events[i].push(h);
      }
    } else {
      a._events[i] = h;
      a._eventsCount++;
    }
    return a;
  }
  function i(a, b) {
    if (--a._eventsCount == 0) {
      a._events = new f();
    } else {
      delete a._events[b];
    }
  }
  function j() {
    this._events = new f();
    this._eventsCount = 0;
  }
  if (Object.create) {
    f.prototype = Object.create(null);
    if (!new f().__proto__) {
      e = false;
    }
  }
  j.prototype.eventNames = function () {
    var a;
    var b;
    var c = [];
    if (this._eventsCount === 0) {
      return c;
    }
    for (b in a = this._events) {
      if (d.call(a, b)) {
        c.push(e ? b.slice(1) : b);
      }
    }
    if (Object.getOwnPropertySymbols) {
      return c.concat(Object.getOwnPropertySymbols(a));
    } else {
      return c;
    }
  };
  j.prototype.listeners = function (a) {
    var b = e ? e + a : a;
    var c = this._events[b];
    if (!c) {
      return [];
    }
    if (c.fn) {
      return [c.fn];
    }
    for (var d = 0, f = c.length, g = Array(f); d < f; d++) {
      g[d] = c[d].fn;
    }
    return g;
  };
  j.prototype.listenerCount = function (a) {
    var b = e ? e + a : a;
    var c = this._events[b];
    if (c) {
      if (c.fn) {
        return 1;
      } else {
        return c.length;
      }
    } else {
      return 0;
    }
  };
  j.prototype.emit = function (a, b, c, d, f, g) {
    var h = e ? e + a : a;
    if (!this._events[h]) {
      return false;
    }
    var i;
    var j;
    var k = this._events[h];
    var l = arguments.length;
    if (k.fn) {
      if (k.once) {
        this.removeListener(a, k.fn, undefined, true);
      }
      switch (l) {
        case 1:
          k.fn.call(k.context);
          return true;
        case 2:
          k.fn.call(k.context, b);
          return true;
        case 3:
          k.fn.call(k.context, b, c);
          return true;
        case 4:
          k.fn.call(k.context, b, c, d);
          return true;
        case 5:
          k.fn.call(k.context, b, c, d, f);
          return true;
        case 6:
          k.fn.call(k.context, b, c, d, f, g);
          return true;
      }
      j = 1;
      i = Array(l - 1);
      for (; j < l; j++) {
        i[j - 1] = arguments[j];
      }
      k.fn.apply(k.context, i);
    } else {
      var m;
      var n = k.length;
      for (j = 0; j < n; j++) {
        if (k[j].once) {
          this.removeListener(a, k[j].fn, undefined, true);
        }
        switch (l) {
          case 1:
            k[j].fn.call(k[j].context);
            break;
          case 2:
            k[j].fn.call(k[j].context, b);
            break;
          case 3:
            k[j].fn.call(k[j].context, b, c);
            break;
          case 4:
            k[j].fn.call(k[j].context, b, c, d);
            break;
          default:
            if (!i) {
              m = 1;
              i = Array(l - 1);
              for (; m < l; m++) {
                i[m - 1] = arguments[m];
              }
            }
            k[j].fn.apply(k[j].context, i);
        }
      }
    }
    return true;
  };
  j.prototype.on = function (a, b, c) {
    return h(this, a, b, c, false);
  };
  j.prototype.once = function (a, b, c) {
    return h(this, a, b, c, true);
  };
  j.prototype.removeListener = function (a, b, c, d) {
    var f = e ? e + a : a;
    if (!this._events[f]) {
      return this;
    }
    if (!b) {
      i(this, f);
      return this;
    }
    var g = this._events[f];
    if (g.fn) {
      if (g.fn === b && (!d || !!g.once) && (!c || g.context === c)) {
        i(this, f);
      }
    } else {
      for (var h = 0, j = [], k = g.length; h < k; h++) {
        if (g[h].fn !== b || d && !g[h].once || c && g[h].context !== c) {
          j.push(g[h]);
        }
      }
      if (j.length) {
        this._events[f] = j.length === 1 ? j[0] : j;
      } else {
        i(this, f);
      }
    }
    return this;
  };
  j.prototype.removeAllListeners = function (a) {
    var b;
    if (a) {
      b = e ? e + a : a;
      if (this._events[b]) {
        i(this, b);
      }
    } else {
      this._events = new f();
      this._eventsCount = 0;
    }
    return this;
  };
  j.prototype.off = j.prototype.removeListener;
  j.prototype.addListener = j.prototype.on;
  j.prefixed = e;
  j.EventEmitter = j;
  b.exports = j;
}, 73666, (a, b, c) => {
  "use strict";

  var d = typeof Symbol == "function" && Symbol.for;
  var e = d ? Symbol.for("react.element") : 60103;
  var f = d ? Symbol.for("react.portal") : 60106;
  var g = d ? Symbol.for("react.fragment") : 60107;
  var h = d ? Symbol.for("react.strict_mode") : 60108;
  var i = d ? Symbol.for("react.profiler") : 60114;
  var j = d ? Symbol.for("react.provider") : 60109;
  var k = d ? Symbol.for("react.context") : 60110;
  var l = d ? Symbol.for("react.async_mode") : 60111;
  var m = d ? Symbol.for("react.concurrent_mode") : 60111;
  var n = d ? Symbol.for("react.forward_ref") : 60112;
  var o = d ? Symbol.for("react.suspense") : 60113;
  var p = d ? Symbol.for("react.suspense_list") : 60120;
  var q = d ? Symbol.for("react.memo") : 60115;
  var r = d ? Symbol.for("react.lazy") : 60116;
  var s = d ? Symbol.for("react.block") : 60121;
  var t = d ? Symbol.for("react.fundamental") : 60117;
  var u = d ? Symbol.for("react.responder") : 60118;
  var v = d ? Symbol.for("react.scope") : 60119;
  function w(a) {
    if (typeof a == "object" && a !== null) {
      var b = a.$$typeof;
      switch (b) {
        case e:
          switch (a = a.type) {
            case l:
            case m:
            case g:
            case i:
            case h:
            case o:
              return a;
            default:
              switch (a = a && a.$$typeof) {
                case k:
                case n:
                case r:
                case q:
                case j:
                  return a;
                default:
                  return b;
              }
          }
        case f:
          return b;
      }
    }
  }
  function x(a) {
    return w(a) === m;
  }
  c.AsyncMode = l;
  c.ConcurrentMode = m;
  c.ContextConsumer = k;
  c.ContextProvider = j;
  c.Element = e;
  c.ForwardRef = n;
  c.Fragment = g;
  c.Lazy = r;
  c.Memo = q;
  c.Portal = f;
  c.Profiler = i;
  c.StrictMode = h;
  c.Suspense = o;
  c.isAsyncMode = function (a) {
    return x(a) || w(a) === l;
  };
  c.isConcurrentMode = x;
  c.isContextConsumer = function (a) {
    return w(a) === k;
  };
  c.isContextProvider = function (a) {
    return w(a) === j;
  };
  c.isElement = function (a) {
    return typeof a == "object" && a !== null && a.$$typeof === e;
  };
  c.isForwardRef = function (a) {
    return w(a) === n;
  };
  c.isFragment = function (a) {
    return w(a) === g;
  };
  c.isLazy = function (a) {
    return w(a) === r;
  };
  c.isMemo = function (a) {
    return w(a) === q;
  };
  c.isPortal = function (a) {
    return w(a) === f;
  };
  c.isProfiler = function (a) {
    return w(a) === i;
  };
  c.isStrictMode = function (a) {
    return w(a) === h;
  };
  c.isSuspense = function (a) {
    return w(a) === o;
  };
  c.isValidElementType = function (a) {
    return typeof a == "string" || typeof a == "function" || a === g || a === m || a === i || a === h || a === o || a === p || typeof a == "object" && a !== null && (a.$$typeof === r || a.$$typeof === q || a.$$typeof === j || a.$$typeof === k || a.$$typeof === n || a.$$typeof === t || a.$$typeof === u || a.$$typeof === v || a.$$typeof === s);
  };
  c.typeOf = w;
}, 82249, (a, b, c) => {
  "use strict";

  b.exports = a.r(73666);
}, 74295, (a, b, c) => {
  "use strict";

  var d = a.r(9651);
  d.useState;
  d.useEffect;
  d.useLayoutEffect;
  d.useDebugValue;
  c.useSyncExternalStore = d.useSyncExternalStore !== undefined ? d.useSyncExternalStore : function (a, b) {
    return b();
  };
}, 61272, (a, b, c) => {
  "use strict";

  b.exports = a.r(74295);
}, 32173, (a, b, c) => {
  "use strict";

  var d = a.r(9651);
  var e = a.r(61272);
  var f = typeof Object.is == "function" ? Object.is : function (a, b) {
    return a === b && (a !== 0 || 1 / a == 1 / b) || a != a && b != b;
  };
  var g = e.useSyncExternalStore;
  var h = d.useRef;
  var i = d.useEffect;
  var j = d.useMemo;
  var k = d.useDebugValue;
  c.useSyncExternalStoreWithSelector = function (a, b, c, d, e) {
    var l = h(null);
    if (l.current === null) {
      var m = {
        hasValue: false,
        value: null
      };
      l.current = m;
    } else {
      m = l.current;
    }
    var n = g(a, (l = j(function () {
      function a(a) {
        if (!i) {
          i = true;
          g = a;
          a = d(a);
          if (e !== undefined && m.hasValue) {
            var b = m.value;
            if (e(b, a)) {
              return h = b;
            }
          }
          return h = a;
        }
        b = h;
        if (f(g, a)) {
          return b;
        }
        var c = d(a);
        if (e !== undefined && e(b, c)) {
          g = a;
          return b;
        } else {
          g = a;
          return h = c;
        }
      }
      var g;
      var h;
      var i = false;
      var j = c === undefined ? null : c;
      return [function () {
        return a(b());
      }, j === null ? undefined : function () {
        return a(j());
      }];
    }, [b, c, d, e]))[0], l[1]);
    i(function () {
      m.hasValue = true;
      m.value = n;
    }, [n]);
    k(n);
    return n;
  };
}, 22865, (a, b, c) => {
  "use strict";

  b.exports = a.r(32173);
}, 19836, (a, b, c) => {
  "use strict";

  var d = a.r(9651);
  var e = typeof Object.is == "function" ? Object.is : function (a, b) {
    return a === b && (a !== 0 || 1 / a == 1 / b) || a != a && b != b;
  };
  var f = d.useSyncExternalStore;
  var g = d.useRef;
  var h = d.useEffect;
  var i = d.useMemo;
  var j = d.useDebugValue;
  c.useSyncExternalStoreWithSelector = function (a, b, c, d, k) {
    var l = g(null);
    if (l.current === null) {
      var m = {
        hasValue: false,
        value: null
      };
      l.current = m;
    } else {
      m = l.current;
    }
    var n = f(a, (l = i(function () {
      function a(a) {
        if (!h) {
          h = true;
          f = a;
          a = d(a);
          if (k !== undefined && m.hasValue) {
            var b = m.value;
            if (k(b, a)) {
              return g = b;
            }
          }
          return g = a;
        }
        b = g;
        if (e(f, a)) {
          return b;
        }
        var c = d(a);
        if (k !== undefined && k(b, c)) {
          f = a;
          return b;
        } else {
          f = a;
          return g = c;
        }
      }
      var f;
      var g;
      var h = false;
      var i = c === undefined ? null : c;
      return [function () {
        return a(b());
      }, i === null ? undefined : function () {
        return a(i());
      }];
    }, [b, c, d, k]))[0], l[1]);
    h(function () {
      m.hasValue = true;
      m.value = n;
    }, [n]);
    j(n);
    return n;
  };
}, 19617, (a, b, c) => {
  "use strict";

  b.exports = a.r(19836);
}];

//# sourceMappingURL=client_18qe3o0._.js.map
