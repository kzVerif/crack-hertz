module.exports = [18858, (a, b, c) => {
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
  let d = a.r(39100);
  let e = a.r(75162);
  function f() {
    return <e.HTTPAccessErrorFallback status={404} message="This page could not be found." />;
  }
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 2404, function (a) {
  a.n(a.i(18858));
}, 65607, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  Object.defineProperty(c, "styles", {
    enumerable: true,
    get: function () {
      return d;
    }
  });
  let d = {
    error: {
      fontFamily: "system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"",
      height: "100vh",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    desc: {
      display: "inline-block"
    },
    h1: {
      display: "inline-block",
      margin: "0 20px 0 0",
      padding: "0 23px 0 0",
      fontSize: 24,
      fontWeight: 500,
      verticalAlign: "top",
      lineHeight: "49px"
    },
    h2: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: "49px",
      margin: 0
    }
  };
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}, 75162, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  Object.defineProperty(c, "HTTPAccessErrorFallback", {
    enumerable: true,
    get: function () {
      return f;
    }
  });
  let d = a.r(39100);
  let e = a.r(65607);
  function f({
    status: a,
    message: b
  }) {
    return <d.Fragment><title>{`${a}: ${b}`}</title><div style={e.styles.error}><div><style dangerouslySetInnerHTML={{
            __html: "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"
          }} /><h1 className="next-error-h1" style={e.styles.h1}>{a}</h1><div style={e.styles.desc}><h2 style={e.styles.h2}>{b}</h2></div></div></div></d.Fragment>;
  }
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}];

//# sourceMappingURL=097k_next_dist_client_components_16kv2me._.js.map
