module.exports = [75263, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(9651);
  var d = a.i(1441);
  let e = {
    name: "timer-reset",
    size: 24,
    node: [["path", {
      d: "M10 2h4",
      key: "n1abiw"
    }], ["path", {
      d: "M12 14v-4",
      key: "1evpnu"
    }], ["path", {
      d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",
      key: "1ts96g"
    }], ["path", {
      d: "M9 17H4v5",
      key: "8t5av"
    }]]
  };
  e.node;
  let f = (0, d.default)(e);
  var g = a.i(68606);
  let h = {
    name: "users-round",
    size: 24,
    node: [["path", {
      d: "M18 21a8 8 0 0 0-16 0",
      key: "3ypg7q"
    }], ["circle", {
      cx: "10",
      cy: "8",
      r: "5",
      key: "o932ke"
    }], ["path", {
      d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",
      key: "10s06x"
    }]],
    aliases: ["users-2"]
  };
  h.node;
  let i = (0, d.default)(h);
  var j = a.i(16330);
  let k = {
    name: "undo-2",
    size: 24,
    node: [["path", {
      d: "M9 14 4 9l5-5",
      key: "102s5s"
    }], ["path", {
      d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
      key: "f3b9sd"
    }]]
  };
  k.node;
  let _Component = (0, d.default)(k);
  let m = {
    name: "keyboard",
    size: 24,
    node: [["path", {
      d: "M10 8h.01",
      key: "1r9ogq"
    }], ["path", {
      d: "M12 12h.01",
      key: "1mp3jc"
    }], ["path", {
      d: "M14 8h.01",
      key: "1primd"
    }], ["path", {
      d: "M16 12h.01",
      key: "1l6xoz"
    }], ["path", {
      d: "M18 8h.01",
      key: "emo2bl"
    }], ["path", {
      d: "M6 8h.01",
      key: "x9i8wu"
    }], ["path", {
      d: "M7 16h10",
      key: "wp8him"
    }], ["path", {
      d: "M8 12h.01",
      key: "czm47f"
    }], ["rect", {
      width: "20",
      height: "16",
      x: "2",
      y: "4",
      rx: "2",
      key: "18n3k1"
    }]]
  };
  m.node;
  let _Component2 = (0, d.default)(m);
  let o = {
    name: "clipboard-paste",
    size: 24,
    node: [["path", {
      d: "M11 14h10",
      key: "1w8e9d"
    }], ["path", {
      d: "M16 4h2a2 2 0 0 1 2 2v1.344",
      key: "1e62lh"
    }], ["path", {
      d: "m17 18 4-4-4-4",
      key: "z2g111"
    }], ["path", {
      d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113",
      key: "bjbb7m"
    }], ["rect", {
      x: "8",
      y: "2",
      width: "8",
      height: "4",
      rx: "1",
      key: "ublpy"
    }]]
  };
  o.node;
  let _Component3 = (0, d.default)(o);
  let q = {
    name: "arrow-left-right",
    size: 24,
    node: [["path", {
      d: "M8 3 4 7l4 4",
      key: "9rb6wj"
    }], ["path", {
      d: "M4 7h16",
      key: "6tx8e3"
    }], ["path", {
      d: "m16 21 4-4-4-4",
      key: "siv7j2"
    }], ["path", {
      d: "M20 17H4",
      key: "h6l3hr"
    }]]
  };
  q.node;
  let _Component4 = (0, d.default)(q);
  let _Component5 = ({
    min: a,
    max: d,
    unit: e = "วินาที",
    onMinChange: f,
    onMaxChange: g
  }) => {
    let [h, i] = (0, c.useState)(a != null ? String(a) : "");
    let [j, k] = (0, c.useState)(d != null ? String(d) : "");
    (0, c.useEffect)(() => {
      i(a != null ? String(a) : "");
    }, [a]);
    (0, c.useEffect)(() => {
      k(d != null ? String(d) : "");
    }, [d]);
    let l = a => {
      if (a.key === "Enter") {
        a.currentTarget.blur();
      }
    };
    return <div className="flex shrink-0 items-center gap-2 select-none"><div className="flex h-9 items-center rounded-xl border border-white/[0.1] bg-neutral-900/90 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.06)] transition-all focus-within:border-sky-500/60 focus-within:ring-1 focus-within:ring-sky-500/20"><span className="border-r border-white/[0.08] px-2.5 text-[10px] font-semibold text-neutral-400 tracking-tight">ต่ำสุด</span><input type="text" inputMode="decimal" value={h} onChange={a => {
          let b = a.target.value;
          if (b !== "" && !/^\d*\.?\d*$/.test(b) || (i(b), b.trim() === "" || b.endsWith("."))) {
            return;
          }
          let c = parseFloat(b);
          if (!isNaN(c) && c >= 0) {
            f?.(c);
          }
        }} onBlur={() => {
          if (h.trim() === "" || isNaN(Number(h))) {
            i(a != null ? String(a) : "0");
          } else {
            let b = Math.max(0, parseFloat(h));
            i(String(b));
            if (b !== a) {
              f?.(b);
            }
          }
        }} onKeyDown={l} className="h-full w-14 bg-transparent px-2 text-center text-sm font-semibold text-neutral-100 outline-none" /></div><span className="text-xs font-bold text-neutral-600">-</span><div className="flex h-9 items-center rounded-xl border border-white/[0.1] bg-neutral-900/90 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.06)] transition-all focus-within:border-sky-500/60 focus-within:ring-1 focus-within:ring-sky-500/20"><span className="border-r border-white/[0.08] px-2.5 text-[10px] font-semibold text-neutral-400 tracking-tight">สูงสุด</span><input type="text" inputMode="decimal" value={j} onChange={a => {
          let b = a.target.value;
          if (b !== "" && !/^\d*\.?\d*$/.test(b) || (k(b), b.trim() === "" || b.endsWith("."))) {
            return;
          }
          let c = parseFloat(b);
          if (!isNaN(c) && c >= 0) {
            g?.(c);
          }
        }} onBlur={() => {
          if (j.trim() === "" || isNaN(Number(j))) {
            k(d != null ? String(d) : "0");
          } else {
            let a = Math.max(0, parseFloat(j));
            k(String(a));
            if (a !== d) {
              g?.(a);
            }
          }
        }} onKeyDown={l} className="h-full w-14 bg-transparent px-2 text-center text-sm font-semibold text-neutral-100 outline-none" /></div><span className="ml-1 text-xs font-medium text-neutral-400">{e}</span></div>;
  };
  var t = a.i(66299);
  var u = a.i(22370);
  a.s(["default", 0, () => {
    let a;
    let {
      config: d,
      fetchConfig: e,
      saveConfig: h,
      resetConfig: k,
      setDelayRange: m,
      setTextMode: o,
      isDirty: q
    } = (0, t.useConfigStore)();
    let {
      toast: v
    } = (0, u.useToast)();
    (0, c.useEffect)(() => {
      e();
    }, [e]);
    (0, c.useEffect)(() => {
      if (!q) {
        return;
      }
      let a = setTimeout(async () => {
        let a = await h();
        if (a && a.success) {
          v.success("บันทึกการตั้งค่าหน่วงเวลาเรียบร้อยแล้ว", "สำเร็จ", 2000);
        }
      }, 500);
      return () => clearTimeout(a);
    }, [d, q, h, v]);
    let w = async () => {
      let a = await k();
      if (a.success) {
        v.info(a.message || "คืนค่าเริ่มต้นเรียบร้อยแล้ว", "รีเซ็ต", 2000);
      }
    };
    let x = [{
      key: "delay",
      name: "เวลาการรอขั้นตอนถัดไป",
      desc: "ระยะเวลารอก่อนดำเนินการขั้นตอนถัดไปในแต่ละหน้า (Step Delay)",
      icon: f,
      badgeStyle: "bg-sky-500/10 border-sky-500/25",
      iconColor: "text-sky-400"
    }, {
      key: "delayBetweenLinks",
      name: "ระยะเวลาเปลี่ยนลิ้งก์",
      desc: "ระยะเวลาหน่วงก่อนสลับไปยังลิงก์ปลายทางถัดไป (Link Delay)",
      icon: g.Link,
      badgeStyle: "bg-blue-500/10 border-blue-500/25",
      iconColor: "text-blue-400"
    }, {
      key: "delayBetweenGroups",
      name: "ระยะเวลาเปลี่ยนกลุ่ม",
      desc: "ระยะเวลาหน่วงก่อนสลับไปยังกลุ่มถัดไป (Group Delay)",
      icon: i,
      badgeStyle: "bg-indigo-500/10 border-indigo-500/25",
      iconColor: "text-indigo-400"
    }, {
      key: "nextRoundDelay",
      name: "ระยะเวลาเริ่มต้นรอบใหม่",
      desc: "ระยะเวลาหน่วงก่อนเริ่มกระบวนการทำงานรอบถัดไป (Round Delay)",
      icon: j.RotateCcw,
      badgeStyle: "bg-emerald-500/10 border-emerald-500/25",
      iconColor: "text-emerald-400"
    }];
    return <div className="\r\n\n        group relative\r\n\n        overflow-clip\r\n\n        rounded-2xl\r\n\n        bg-neutral-950\r\n\n        border border-white/[0.12]\r\n\n        p-5\r\n\n        shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]\r\n\n        transition-all\r\n\n        duration-200\r\n\n        ease-out\r\n\n      "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20 z-10" /><div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/[0.04] blur-2xl transition-all duration-300 group-hover:bg-white/[0.07]" /><div className="relative z-10"><div className="\r\n\n            sticky top-0 z-30\r\n\n            -mx-5 -mt-5 px-5 pt-5 pb-4\r\n\n            bg-neutral-950/90 backdrop-blur-md\r\n\n            border-b border-white/[0.08]\r\n\n            rounded-t-2xl\r\n\n            shadow-[0_8px_20px_rgba(0,0,0,0.45)]\r\n\n          "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20 z-40" /><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div className="min-w-0"><div className="flex items-center gap-2"><h3 className="text-base font-semibold text-sky-400 tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">การตั้งค่าพื้นฐานเกี่ยวกับการทำงาน</h3></div><p className="mt-1 text-xs text-neutral-400 leading-relaxed">ตั้งค่าระยะเวลาหน่วงในการทำงานของระบบ</p></div><button type="button" onClick={w} title="คืนค่าเริ่มต้น" className="\r\n\n                cursor-pointer\r\n\n                flex items-center gap-1.5\r\n\n                self-start sm:self-auto\r\n\n                rounded-xl\r\n\n                border border-white/10\r\n\n                bg-white/[0.03]\r\n\n                px-3 py-1.5\r\n\n                text-xs\r\n\n                font-medium\r\n\n                text-neutral-400\r\n\n                hover:bg-white/[0.08]\r\n\n                hover:text-neutral-200\r\n\n                transition-all\r\n\n                active:scale-95\r\n\n                shadow-[inset_0_1px_1px_rgba(0,0,0,0.4)]\r\n\n              "><_Component size={13} /><span>รีเซ็ตค่าเริ่มต้น</span></button></div></div><div className="mt-4 space-y-2.5">{(a = (d.textMode || "typing") === "typing", <div className="\r\n\n                  group/row relative\r\n\n                  overflow-hidden\r\n\n                  flex flex-col sm:flex-row sm:items-center justify-between gap-3\r\n\n                  rounded-xl\r\n\n                  border border-white/[0.08]\r\n\n                  bg-white/[0.02]\r\n\n                  hover:bg-white/[0.04]\r\n\n                  hover:border-white/[0.16]\r\n\n                  p-3.5\r\n\n                  shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]\r\n\n                  transition-all\r\n\n                  duration-200\r\n\n                "><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/10" /><div className="flex items-center gap-3.5 min-w-0"><div className="relative shrink-0"><div className={`
                        flex h-10 w-10 items-center justify-center rounded-xl border
                        ${a ? "bg-amber-500/10 border-amber-500/25" : "bg-blue-500/10 border-blue-500/25"}
                        shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]
                        transition-all duration-200
                      `}>{a ? <_Component2 size={18} className="text-amber-400" strokeWidth={2} /> : <_Component3 size={18} className="text-blue-400" strokeWidth={2} />}</div><button type="button" onClick={() => o(a ? "paste" : "typing")} title={a ? "คลิกเพื่อสลับเป็นโหมดวางทันที (Paste)" : "คลิกเพื่อสลับเป็นโหมดพิมพ์ข้อความ (Typing)"} className="\r\n\n                        cursor-pointer\r\n\n                        absolute -bottom-1 -right-1\r\n\n                        flex h-5 w-5 items-center justify-center\r\n\n                        rounded-full border border-white/20\r\n\n                        bg-neutral-800 text-neutral-300\r\n\n                        hover:bg-neutral-700 hover:text-white hover:border-white/40\r\n\n                        hover:scale-110 active:scale-95 transition-all\r\n\n                        shadow-[0_2px_4px_rgba(0,0,0,0.5)]\r\n\n                      "><_Component4 size={10} /></button></div><div className="min-w-0"><div className="flex items-center gap-2"><p className="text-sm font-semibold text-neutral-100 tracking-tight">รูปแบบการใส่ข้อความ</p><span className={`
                          rounded-md px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider border
                          ${a ? "bg-amber-500/10 text-amber-400 border-amber-500/25" : "bg-blue-500/10 text-blue-400 border-blue-500/25"}
                        `}>{a ? "เขียนข้อความ" : "วางข้อความ"}</span></div><p className="mt-0.5 text-xs text-neutral-400">{a ? "พิมพ์ข้อความทีละตัวอักษรเลียนแบบมนุษย์ (Typing Delay)" : "วางข้อความลงในกล่องโพสต์และคอมเมนต์ทันทีโดยไม่หน่วงเวลา (ความเร็วสูง)"}</p></div></div><div className="self-end sm:self-auto shrink-0">{a ? <_Component5 min={d.typingDelay?.min ?? 20} max={d.typingDelay?.max ?? 60} unit="วินาที" onMinChange={a => m("typingDelay", "min", a)} onMaxChange={a => m("typingDelay", "max", a)} /> : <div className="flex h-9 items-center rounded-xl border border-white/[0.08] bg-neutral-900/60 px-3.5 text-xs font-medium text-neutral-400">วางข้อความทันที</div>}</div></div>)}{x.map(a => {
            let _Component6 = a.icon;
            let e = d[a.key] || {
              min: 1,
              max: 3
            };
            return <div className="\r\n\n                  group/row relative\r\n\n                  overflow-hidden\r\n\n                  flex flex-col sm:flex-row sm:items-center justify-between gap-3\r\n\n                  rounded-xl\r\n\n                  border border-white/[0.08]\r\n\n                  bg-white/[0.02]\r\n\n                  hover:bg-white/[0.04]\r\n\n                  hover:border-white/[0.16]\r\n\n                  p-3.5\r\n\n                  shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]\r\n\n                  transition-all\r\n\n                  duration-200\r\n\n                " key={a.key}><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/10" /><div className="flex items-center gap-3.5 min-w-0"><div className={`
                      flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border
                      ${a.badgeStyle}
                      shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]
                    `}><_Component6 size={18} className={a.iconColor} strokeWidth={2} /></div><div className="min-w-0"><p className="text-sm font-semibold text-neutral-100 tracking-tight">{a.name}</p><p className="mt-0.5 text-xs text-neutral-400">{a.desc}</p></div></div><div className="self-end sm:self-auto shrink-0"><_Component5 min={e.min} max={e.max} unit="วินาที" onMinChange={b => m(a.key, "min", b)} onMaxChange={b => m(a.key, "max", b)} /></div></div>;
          })}</div></div><div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/20 to-transparent" /></div>;
  }], 75263);
}, 68606, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
    name: "link",
    size: 24,
    node: [["path", {
      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
      key: "1cjeqo"
    }], ["path", {
      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
      key: "19qd67"
    }]]
  };
  c.node;
  let d = (0, b.default)(c);
  a.s(["Link", 0, d], 68606);
}];

//# sourceMappingURL=client_0cxsix7._.js.map
