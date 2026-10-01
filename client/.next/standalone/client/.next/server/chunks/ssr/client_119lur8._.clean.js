module.exports = [63389, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(3642);
  var d = a.i(54949);
  var e = a.i(1441);
  let f = {
    name: "settings-2",
    size: 24,
    node: [["path", {
      d: "M14 17H5",
      key: "gfn3mx"
    }], ["path", {
      d: "M19 7h-9",
      key: "6i9tg"
    }], ["circle", {
      cx: "17",
      cy: "17",
      r: "3",
      key: "18b49y"
    }], ["circle", {
      cx: "7",
      cy: "7",
      r: "3",
      key: "dfmy0x"
    }]]
  };
  f.node;
  let g = (0, e.default)(f);
  let h = {
    name: "sliders-horizontal",
    size: 24,
    node: [["path", {
      d: "M10 5H3",
      key: "1qgfaw"
    }], ["path", {
      d: "M12 19H3",
      key: "yhmn1j"
    }], ["path", {
      d: "M14 3v4",
      key: "1sua03"
    }], ["path", {
      d: "M16 17v4",
      key: "1q0r14"
    }], ["path", {
      d: "M21 12h-9",
      key: "1o4lsq"
    }], ["path", {
      d: "M21 19h-5",
      key: "1rlt1p"
    }], ["path", {
      d: "M21 5h-7",
      key: "1oszz2"
    }], ["path", {
      d: "M8 10v4",
      key: "tgpxqk"
    }], ["path", {
      d: "M8 12H3",
      key: "a7s4jb"
    }]]
  };
  h.node;
  let i = (0, e.default)(h);
  let j = {
    name: "database",
    size: 24,
    node: [["ellipse", {
      cx: "12",
      cy: "5",
      rx: "9",
      ry: "3",
      key: "msslwz"
    }], ["path", {
      d: "M3 5V19A9 3 0 0 0 21 19V5",
      key: "1wlel7"
    }], ["path", {
      d: "M3 12A9 3 0 0 0 21 12",
      key: "mv7ke4"
    }]]
  };
  j.node;
  let k = (0, e.default)(j);
  let l = {
    name: "circle-question-mark",
    size: 24,
    node: [["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }], ["path", {
      d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
      key: "1u773s"
    }], ["path", {
      d: "M12 17h.01",
      key: "p32p05"
    }]],
    aliases: ["help-circle", "circle-help"]
  };
  l.node;
  let m = (0, e.default)(l);
  var n = a.i(62252);
  a.s(["default", 0, () => {
    let a = (0, d.usePathname)();
    let e = [{
      label: "ตั้งค่าพื้นฐาน",
      href: "/settings",
      icon: g
    }, {
      label: "ตั้งค่าขั้นสูง",
      href: "/settings/advance",
      icon: i
    }, {
      label: "ข้อมูล",
      href: "/settings/data",
      icon: k
    }, {
      label: "อัปเดต",
      href: "/settings/update",
      icon: n.CircleFadingArrowUp
    }, {
      label: "ช่วยเหลือ",
      href: "/settings/help",
      icon: m
    }];
    return <aside className="w-56 shrink-0 select-none"><div className="\r\n\n          group relative\r\n\n          overflow-hidden\r\n\n          rounded-2xl\r\n\n          bg-neutral-950\r\n\n          border border-white/[0.12]\r\n\n          p-3\r\n\n          shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]\r\n\n          transition-all\r\n\n          duration-200\r\n\n          ease-out\r\n\n        "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20 z-10" /><div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-white/[0.04] blur-2xl transition-all duration-300 group-hover:bg-white/[0.07]" /><div className="relative z-10"><div className="px-3 py-2 flex items-center justify-between border-b border-white/[0.06] mb-2"><span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">การตั้งค่าระบบ</span><span className="h-1.5 w-1.5 rounded-full bg-sky-400/80 shadow-[0_0_6px_rgba(56,189,248,0.8)]" /></div><div className="space-y-1.5">{e.map(d => {
              let _Component = d.icon;
              let f = a === d.href;
              return <c.default href={d.href} className={`
                    group/link
                    flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-150
                    active:translate-y-[1px]
                    ${f ? "bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-blue-500/5 text-blue-400 border border-blue-500/30 shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] font-medium" : "text-neutral-400 hover:text-neutral-100 hover:bg-white/[0.04] hover:border-white/[0.08] border border-transparent font-normal"}
                  `} key={d.href}><div className={`
                      flex items-center justify-center rounded-lg p-1.5 transition-all
                      ${f ? "bg-blue-500/20 text-blue-400 border border-blue-500/40 shadow-[0_1px_2px_rgba(0,0,0,0.2)]" : "bg-white/[0.03] border border-white/[0.06] text-neutral-400 group-hover/link:text-white group-hover/link:border-white/[0.15]"}
                    `}><_Component size={16} strokeWidth={f ? 2.2 : 1.8} /></div><span className="tracking-tight">{d.label}</span></c.default>;
            })}</div></div><div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/20 to-transparent" /></div></aside>;
  }], 63389);
}, 62252, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
    name: "circle-fading-arrow-up",
    size: 24,
    node: [["path", {
      d: "M12 2a10 10 0 0 1 7.38 16.75",
      key: "175t95"
    }], ["path", {
      d: "m16 12-4-4-4 4",
      key: "177agl"
    }], ["path", {
      d: "M12 16V8",
      key: "1sbj14"
    }], ["path", {
      d: "M2.5 8.875a10 10 0 0 0-.5 3",
      key: "1vce0s"
    }], ["path", {
      d: "M2.83 16a10 10 0 0 0 2.43 3.4",
      key: "o3fkw4"
    }], ["path", {
      d: "M4.636 5.235a10 10 0 0 1 .891-.857",
      key: "1szpfk"
    }], ["path", {
      d: "M8.644 21.42a10 10 0 0 0 7.631-.38",
      key: "9yhvd4"
    }]]
  };
  c.node;
  let d = (0, b.default)(c);
  a.s(["CircleFadingArrowUp", 0, d], 62252);
}];

//# sourceMappingURL=client_119lur8._.js.map
