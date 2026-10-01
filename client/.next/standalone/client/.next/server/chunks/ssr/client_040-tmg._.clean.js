module.exports = [49016, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(9651);
  var d = a.i(14285);
  var e = a.i(93241);
  var f = a.i(1441);
  let g = {
    name: "skip-forward",
    size: 24,
    node: [["path", {
      d: "M21 4v16",
      key: "7j8fe9"
    }], ["path", {
      d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
      key: "zs4d6"
    }]]
  };
  g.node;
  let h = (0, f.default)(g);
  var i = a.i(84934);
  let j = {
    name: "screen-share",
    size: 24,
    node: [["path", {
      d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",
      key: "i8wdob"
    }], ["path", {
      d: "M8 21h8",
      key: "1ev6f3"
    }], ["path", {
      d: "M12 17v4",
      key: "1riwvh"
    }], ["path", {
      d: "m17 8 5-5",
      key: "fqif7o"
    }], ["path", {
      d: "M17 3h5v5",
      key: "1o3tu8"
    }]]
  };
  j.node;
  let k = (0, f.default)(j);
  let l = {
    name: "bell",
    size: 24,
    node: [["path", {
      d: "M10.268 21a2 2 0 0 0 3.464 0",
      key: "vwvbt9"
    }], ["path", {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }]]
  };
  l.node;
  let _Component2 = (0, f.default)(l);
  var n = a.i(2906);
  var o = a.i(56663);
  var p = a.i(66299);
  var q = a.i(22370);
  a.s(["default", 0, () => {
    let {
      config: a,
      fetchConfig: f,
      setHideScreen: g,
      setToggleSetting: j,
      saveConfig: l,
      updateConfig: r
    } = (0, p.useConfigStore)();
    let {
      toast: s
    } = (0, q.useToast)();
    let t = typeof a.webhook?.url == "string" ? a.webhook.url : "";
    let u = a.webhook?.enabled ?? false;
    let [v, w] = (0, c.useState)(false);
    (0, c.useEffect)(() => {
      f();
    }, [f]);
    let x = (0, c.useRef)(null);
    let y = async (a, b) => {
      let c = await l({
        webhook: {
          enabled: a,
          url: b
        }
      });
      if (!c?.success) {
        s.error(c?.message || "บันทึกไม่สำเร็จ", "ล้มเหลว", 2500);
      }
    };
    (0, c.useEffect)(() => () => {
      if (x.current) {
        clearTimeout(x.current);
      }
    }, []);
    let z = async () => {
      let a = window.electronApi?.config;
      if (!a?.testWebhook) {
        s.error("ไม่สามารถทดสอบได้ (ไม่พบการเชื่อมต่อระบบ)", "ล้มเหลว", 2500);
        return;
      }
      w(true);
      try {
        let b = await a.testWebhook({
          url: t.trim()
        });
        if (b?.success) {
          s.success(b.message || "ส่งข้อความทดสอบแล้ว", "สำเร็จ", 3000);
        } else {
          s.error(b?.message || "ส่งไม่สำเร็จ", "ล้มเหลว", 3000);
        }
      } finally {
        w(false);
      }
    };
    let A = [{
      key: "remoteSyncEnabled",
      name: "เชื่อมต่อเซิร์ฟเวอร์ควบคุม (Remote Sync)",
      desc: "อนุญาตให้ส่งข้อมูลสถานะ/สถิติ/กลุ่มโพสต์ไปยังเซิร์ฟเวอร์ และรับคำสั่งควบคุมระยะไกล — หากปิดไว้ ระบบจะไม่ส่งข้อมูลใดๆ ออกนอกเครื่อง",
      icon: i.Globe,
      badgeStyle: "bg-sky-500/10 border-sky-500/25",
      iconColor: "text-sky-400",
      checked: a.remoteSyncEnabled ?? false
    }, {
      key: "screenShareEnabled",
      name: "อนุญาตให้แชร์หน้าจอ",
      desc: "อนุญาตให้สตรีมหน้าจอเครื่องนี้ไปยังเซิร์ฟเวอร์เพื่อมอนิเตอร์ระยะไกล (ต้องเปิดการเชื่อมต่อเซิร์ฟเวอร์ก่อนจึงจะมีผล)",
      icon: k,
      badgeStyle: "bg-rose-500/10 border-rose-500/25",
      iconColor: "text-rose-400",
      checked: a.screenShareEnabled ?? false
    }, {
      key: "browser",
      name: "เปิดการแสดงบราวเซอร์",
      desc: "แสดงหน้าต่าง Chromium บราวเซอร์ขณะระบบกำลังโพสต์ เพื่อให้มองเห็นขั้นตอนการทำงานสด",
      icon: d.Monitor,
      badgeStyle: "bg-cyan-500/10 border-cyan-500/25",
      iconColor: "text-cyan-400",
      checked: !a.hideScreen
    }, {
      key: "autoUpdate",
      name: "อัปเดตอัตโนมัติ",
      desc: "ตรวจสอบและอัปเดตระบบอัตโนมัติเมื่อมีเวอร์ชันใหม่ออกมา",
      icon: e.CloudDownload,
      badgeStyle: "bg-purple-500/10 border-purple-500/25",
      iconColor: "text-purple-400",
      checked: a.autoUpdate ?? true
    }, {
      key: "skipPending",
      name: "ข้ามกลุ่มที่ติดอนุมัติอัตโนมัติ",
      desc: "ข้ามกลุ่มปลายทางที่โพสต์ก่อนหน้านี้ยังค้างอยู่ในสถานะรอแอดมินอนุมัติ",
      icon: h,
      badgeStyle: "bg-emerald-500/10 border-emerald-500/25",
      iconColor: "text-emerald-400",
      checked: a.skipPending ?? false
    }];
    return <div className="\r\n\n        group relative\r\n\n        overflow-clip\r\n\n        rounded-2xl\r\n\n        bg-neutral-950\r\n\n        border border-white/[0.12]\r\n\n        p-5\r\n\n        shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]\r\n\n        transition-all\r\n\n        duration-200\r\n\n        ease-out\r\n\n      "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20 z-10" /><div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/[0.04] blur-2xl transition-all duration-300 group-hover:bg-white/[0.07]" /><div className="relative z-10"><div className="\r\n\n            sticky top-0 z-30\r\n\n            -mx-5 -mt-5 px-5 pt-5 pb-4\r\n\n            bg-neutral-950/90 backdrop-blur-md\r\n\n            border-b border-white/[0.08]\r\n\n            rounded-t-2xl\r\n\n            shadow-[0_8px_20px_rgba(0,0,0,0.45)]\r\n\n          "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20 z-40" /><div className="flex items-center justify-between"><div className="min-w-0"><div className="flex items-center gap-2"><h3 className="text-base font-semibold text-sky-400 tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">ตั้งค่าการทำงานขั้นสูง</h3></div><p className="mt-1 text-xs text-neutral-400 leading-relaxed">ตั้งค่าการทำงานอัตโนมัติ การแสดงผลบราวเซอร์ และตัวเลือกพิเศษของระบบ</p></div></div></div><div className="mt-4 space-y-2.5">{A.map(c => {
            let _Component = c.icon;
            return <div className="\r\n\n                  group/item relative\r\n\n                  overflow-hidden\r\n\n                  flex items-center justify-between gap-3\r\n\n                  rounded-xl\r\n\n                  border border-white/[0.08]\r\n\n                  bg-white/[0.02]\r\n\n                  hover:bg-white/[0.04]\r\n\n                  hover:border-white/[0.16]\r\n\n                  p-3.5\r\n\n                  shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]\r\n\n                  transition-all\r\n\n                  duration-200\r\n\n                " key={c.key}><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/10" /><div className="flex items-center gap-3.5 min-w-0"><div className={`
                      flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border
                      ${c.badgeStyle}
                      shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]
                    `}><_Component size={18} className={c.iconColor} strokeWidth={2} /></div><div className="min-w-0"><p className="text-sm font-semibold text-neutral-100 tracking-tight">{c.name}</p><p className="mt-0.5 text-xs text-neutral-400 leading-relaxed">{c.desc}</p></div></div><div className="shrink-0 ml-4"><o.default checked={c.checked} onChange={b => ((b, c) => {
                  if (b === "browser") {
                    g(!c);
                    l({
                      hideScreen: !c
                    });
                    s.success("บันทึกการตั้งค่าเรียบร้อยแล้ว", "สำเร็จ", 2000);
                  } else if (b === "autoUpdate" || b === "skipPending") {
                    j(b, c);
                    l({
                      [b]: c
                    });
                    s.success("บันทึกการตั้งค่าเรียบร้อยแล้ว", "สำเร็จ", 2000);
                  } else if (b === "remoteSyncEnabled" || b === "screenShareEnabled") {
                    let d = {
                      remoteSyncEnabled: b === "remoteSyncEnabled" ? c : !!c || a.remoteSyncEnabled === true,
                      screenShareEnabled: b === "screenShareEnabled" ? c : !!c && a.screenShareEnabled === true
                    };
                    let e = window.electronApi?.config;
                    if (!e?.setRemoteSync) {
                      s.error("ไม่สามารถเปลี่ยนการตั้งค่านี้ได้ (ไม่พบการเชื่อมต่อระบบ)", "ล้มเหลว", 2500);
                      return;
                    }
                    j("remoteSyncEnabled", d.remoteSyncEnabled);
                    j("screenShareEnabled", d.screenShareEnabled);
                    e.setRemoteSync(d).then(a => {
                      if (a?.success) {
                        s.success(a.message || "บันทึกการตั้งค่าเรียบร้อยแล้ว", "สำเร็จ", 2000);
                      } else {
                        s.error(a?.message || "บันทึกการตั้งค่าไม่สำเร็จ", "ล้มเหลว", 2500);
                      }
                      f();
                    });
                  }
                })(c.key, b)} /></div></div>;
          })}</div><div className="\r\n\n            group/item relative\r\n\n            overflow-hidden\r\n\n            rounded-xl\r\n\n            border border-white/[0.08]\r\n\n            bg-white/[0.02]\r\n\n            hover:bg-white/[0.04]\r\n\n            hover:border-white/[0.16]\r\n\n            p-3.5\r\n\n            mt-2.5\r\n\n            shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]\r\n\n            transition-all\r\n\n            duration-200\r\n\n          "><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/10" /><div className="flex items-center justify-between gap-3"><div className="flex items-center gap-3.5 min-w-0"><div className="\r\n\n                  flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border\r\n\n                  bg-emerald-500/10 border-emerald-500/25\r\n\n                  shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]\r\n\n                "><_Component2 size={18} className="text-emerald-400" strokeWidth={2} /></div><div className="min-w-0"><p className="text-sm font-semibold text-neutral-100 tracking-tight">แจ้งเตือนผ่าน Webhook</p><p className="mt-0.5 text-xs text-neutral-400 leading-relaxed">ส่งสรุปผลรอบโพสต์และเหตุขัดข้องไปยัง Discord Webhook (บันทึกอัตโนมัติ)</p></div></div><div className="shrink-0 ml-4"><o.default checked={u} onChange={a => {
                let b;
                r({
                  webhook: {
                    enabled: a,
                    url: b = t.trim()
                  }
                });
                y(a, b);
                s.success(a ? "เปิดใช้งาน Webhook เรียบร้อยแล้ว" : "ปิดใช้งาน Webhook เรียบร้อยแล้ว", "สำเร็จ", 2000);
              }} /></div></div><div className={`
              grid transition-all duration-300 ease-out
              ${u ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}
            `} aria-hidden={!u}><div className="overflow-hidden"><div className="flex flex-wrap items-center gap-2"><input type="text" value={t} onChange={a => {
                  var b;
                  r({
                    webhook: {
                      enabled: u,
                      url: b = a.target.value
                    }
                  });
                  if (x.current) {
                    clearTimeout(x.current);
                  }
                  x.current = setTimeout(() => {
                    y(u, b.trim());
                  }, 800);
                }} placeholder="https://discord.com/api/webhooks/..." spellCheck={false} tabIndex={u ? 0 : -1} className="\r\n\n                    min-w-0 flex-1\r\n\n                    rounded-lg border border-white/[0.12] bg-neutral-900\r\n\n                    px-3 py-2 text-xs text-neutral-100\r\n\n                    placeholder:text-neutral-500\r\n\n                    focus:border-sky-500/50 focus:outline-none\r\n\n                    transition-colors\r\n\n                  " /><button type="button" onClick={() => void z()} disabled={v || !t.trim()} tabIndex={u ? 0 : -1} className="\r\n\n                    flex items-center gap-1.5 rounded-lg border border-white/[0.12] bg-white/[0.04]\r\n\n                    px-3 py-2 text-xs font-medium text-neutral-200\r\n\n                    hover:bg-white/[0.08] active:scale-95\r\n\n                    disabled:opacity-40 disabled:cursor-not-allowed\r\n\n                    transition-all cursor-pointer\r\n\n                  "><n.Send size={13} strokeWidth={2} />{v ? "กำลังส่ง..." : "ทดสอบ"}</button></div></div></div></div></div><div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/20 to-transparent" /></div>;
  }], 49016);
}, 56663, a => {
  "use strict";

  var b = a.i(16547);
  a.s(["default", 0, ({
    checked: a = false,
    onChange: c,
    disabled: d = false,
    ...e
  }) => <label className={`relative inline-flex ${d ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}><input {...e} type="checkbox" checked={a} disabled={d} onChange={a => c?.(a.target.checked)} className="sr-only" /><div className={`relative h-6 w-13 rounded-md border transition-all duration-200 ${a ? "bg-blue-600 border-blue-400/40 shadow-[0_0_10px_rgba(37,99,235,0.3),inset_0_1px_2px_rgba(0,0,0,0.2)]" : "bg-neutral-900 border-white/[0.08] shadow-[inset_0_1px_3px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.05)]"}`}><div className={`absolute left-0.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-md bg-gradient-to-b from-white to-neutral-200 shadow-[0_2px_4px_rgba(0,0,0,0.4),0_1px_1px_rgba(0,0,0,0.2)] transition-transform duration-200 ${a ? "translate-x-7 -translate-y-1/2" : "translate-x-0 -translate-y-1/2"}`} /></div></label>]);
}, 84934, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
    name: "globe",
    size: 24,
    node: [["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }], ["path", {
      d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
      key: "13o1zl"
    }], ["path", {
      d: "M2 12h20",
      key: "9i4pu4"
    }]]
  };
  c.node;
  let d = (0, b.default)(c);
  a.s(["Globe", 0, d], 84934);
}];

//# sourceMappingURL=client_040-tmg._.js.map
