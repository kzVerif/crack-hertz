module.exports = [85099, a => {
  "use strict";

  a.s(["default", () => b]);
  let b = (0, a.i(70225).registerClientReference)(function () {
    throw Error("Attempted to call the default export of [project]/client/components/settings/sidebar.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
  }, "[project]/client/components/settings/sidebar.tsx", "default");
}, 90590, a => {
  "use strict";

  var b = a.i(85099);
  a.n(b);
}, 67326, a => {
  "use strict";

  var b = a.i(39100);
  var c = a.i(90590);
  a.s(["default", 0, ({
    children: a
  }) => <div className="flex h-full w-full gap-4"><c.default /><main className="min-w-0 flex-1 overflow-y-auto pr-1">{a}</main></div>]);
}, 42863, function (a) {
  a.n(a.i(67326));
}];

//# sourceMappingURL=client_08fhlr9._.js.map
