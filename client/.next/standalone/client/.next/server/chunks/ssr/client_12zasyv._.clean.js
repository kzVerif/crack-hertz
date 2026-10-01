module.exports = [28427, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(9651);
  var d = a.i(54949);
  var e = a.i(44146);
  var f = a.i(70834);
  var g = a.i(31876);
  var h = a.i(39541);
  var i = a.i(48416);
  var j = a.i(40374);
  var k = a.i(3236);
  var l = a.i(76950);
  var m = a.i(82236);
  var n = a.i(19819);
  var o = a.i(1441);
  let p = {
    name: "rotate-cw",
    size: 24,
    node: [["path", {
      d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
      key: "1p45f6"
    }], ["path", {
      d: "M21 3v5h-5",
      key: "1q7to0"
    }]]
  };
  p.node;
  let _Component = (0, o.default)(p);
  var r = a.i(22370);
  var s = a.i(15723);
  a.s(["default", 0, function () {
    let a = (0, d.useRouter)();
    let {
      key: o,
      hwid: p,
      keyDetails: t,
      isAuthenticated: u,
      isInitialLoading: v,
      isActivating: w,
      isResettingHwid: x,
      isOffline: y,
      error: z,
      statusMessage: A,
      initAuth: B,
      fetchHwid: C,
      activateKey: D,
      resetHwid: E,
      logout: F,
      clearError: G
    } = (0, e.useAuthStore)();
    let {
      toast: H
    } = (0, r.useToast)();
    let [I, J] = (0, c.useState)("");
    let [K, L] = (0, c.useState)(false);
    (0, c.useEffect)(() => {
      B();
      C();
    }, [B, C]);
    (0, c.useEffect)(() => {
      if (o?.code) {
        J(o.code);
      }
    }, [o]);
    let M = async b => {
      b.preventDefault();
      G();
      if (!I.trim()) {
        H.error("กรุณากรอก License Key", "ข้อผิดพลาด");
        return;
      }
      let c = await D(I.trim());
      if (c.success) {
        H.success(c.message || "เปิดใช้งาน License Key และผูกเครื่องนี้สำเร็จเรียบร้อยแล้ว", "ยืนยันสิทธิ์สำเร็จ", 4000);
        setTimeout(() => {
          a.replace("/");
        }, 600);
      } else {
        H.error(c.error || "รหัสคีย์ไม่ถูกต้องหรือหมดอายุ", "ไม่สำเร็จ");
      }
    };
    let N = async () => {
      if (!I.trim()) {
        H.error("กรุณาระบุ License Key ก่อนรีเซ็ต HWID", "ข้อผิดพลาด");
        return;
      }
      G();
      let a = await E(I.trim());
      if (a.success) {
        await F();
        H.success(a.message || "รีเซ็ต HWID เรียบร้อยแล้ว สามารถกดเปิดใช้งานได้ทันที", "สำเร็จ");
      } else {
        H.error(a.error || "ไม่สามารถรีเซ็ต HWID ได้", "ไม่สำเร็จ");
      }
    };
    let O = async () => {
      if (await F()) {
        J("");
        H.info("ลบ License Key ออกจากเครื่องแล้ว", "ออกจากระบบ");
      }
    };
    return <div className="w-full max-w-md space-y-3"><div className="mb-1"><h1 className="text-lg font-semibold text-white tracking-tight">ยืนยันสิทธิ์การใช้งาน</h1><p className="text-xs text-neutral-500 mt-0.5">กรอก License Key เพื่อเปิดใช้งานระบบ</p></div><div className="\n          group/row relative overflow-hidden rounded-xl\n          border border-white/[0.08] bg-white/[0.02]\n          p-3\n          shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]\n        "><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/10" /><div className="flex items-center justify-between gap-2 mb-2"><div className="flex items-center gap-2.5"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-emerald-500/10 border-emerald-500/25"><g.Cpu size={15} className="text-emerald-400" /></div><span className="text-xs font-medium text-neutral-200">Hardware ID</span></div><button type="button" onClick={() => {
            if (p) {
              navigator.clipboard.writeText(p);
              L(true);
              H.success("คัดลอก HWID เรียบร้อย", "สำเร็จ");
              setTimeout(() => L(false), 2000);
            }
          }} disabled={!p} className="\n              inline-flex items-center gap-1.5 px-2 py-1\n              rounded-lg text-[11px] font-medium\n              border border-white/[0.08] bg-white/[0.03]\n              hover:bg-white/[0.08] text-neutral-400 hover:text-white\n              transition-all disabled:opacity-40 cursor-pointer\n              active:scale-95\n            ">{K ? <b.Fragment><i.Check size={12} className="text-emerald-400" /><span className="text-emerald-400">คัดลอกแล้ว</span></b.Fragment> : <b.Fragment><h.Copy size={12} /><span>คัดลอก</span></b.Fragment>}</button></div><div className="rounded-lg border border-white/[0.06] bg-neutral-900 px-2.5 py-1.5 font-mono text-[11px] text-neutral-400 select-all break-all tracking-wide">{p || "กำลังโหลด..."}</div></div><form onSubmit={M} className="\n          group/row relative overflow-hidden rounded-xl\n          border border-white/[0.08] bg-white/[0.02]\n          p-3\n          shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]\n          space-y-3\n        "><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/10" /><div className="flex items-center justify-between"><div className="flex items-center gap-2.5"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-amber-500/10 border-amber-500/25"><f.KeyRound size={15} className="text-amber-400" /></div><div><p className="text-xs font-medium text-neutral-200">{u ? "คีย์ปัจจุบัน" : "License Key"}</p><p className="text-[10px] text-neutral-500">{u ? "เชื่อมต่อกับเซิร์ฟเวอร์สำเร็จ" : "กรอกรหัสจากผู้ดูแลระบบ"}</p></div></div>{u && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider border bg-emerald-500/10 text-emerald-400 border-emerald-500/25"><j.ShieldCheck size={11} />Active</span>}{v && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-neutral-800 text-neutral-400"><l.Loader2 size={11} className="animate-spin" />ตรวจสอบ</span>}</div>{u && t && <div className="rounded-lg border border-white/[0.06] bg-neutral-900 p-2.5 space-y-1.5 text-[11px]"><div className="flex items-center justify-between"><span className="text-neutral-500">วันหมดอายุ</span><span className="font-medium text-neutral-200">{t.expiresAt ? new Date(t.expiresAt).toLocaleDateString("th-TH", {
                year: "numeric",
                month: "short",
                day: "numeric"
              }) : "ไม่มีกำหนด"}</span></div>{typeof t.remainingDays == "number" && <div className="flex items-center justify-between"><span className="text-neutral-500">คงเหลือ</span><span className="font-medium text-amber-400">{t.remainingDays} วัน</span></div>}</div>}<div className="space-y-1"><label className="text-[11px] font-medium text-neutral-400">รหัสคีย์</label><input type="text" value={I} onChange={a => J(a.target.value.toUpperCase())} placeholder="HERTZ-XXXX-XXXX-XXXX" disabled={w || v} className="\n              h-9 w-full rounded-md\n              border border-neutral-800 bg-neutral-900\n              px-3 text-sm font-mono text-white\n              outline-none transition-colors\n              placeholder:text-neutral-600\n              focus:border-blue-500\n              tracking-wider uppercase\n              disabled:opacity-50\n            " /></div>{z && <div className="flex flex-col gap-2 rounded-lg border border-rose-500/20 bg-rose-500/[0.06] p-2.5 text-[11px] text-rose-300"><div className="flex items-start gap-2"><k.AlertCircle size={14} className="shrink-0 mt-px text-rose-400" /><span>{z}</span></div>{(z.includes("Hardware ID") || z.includes("HWID")) && <div className="pt-1.5 border-t border-rose-500/20 flex justify-end"><button type="button" onClick={N} disabled={x || w} className="\n                    inline-flex items-center gap-1.5 px-2.5 py-1 rounded\n                    bg-rose-500/20 hover:bg-rose-500/30 text-rose-200\n                    text-[11px] font-medium transition cursor-pointer\n                    disabled:opacity-50 active:scale-95\n                  ">{x ? <b.Fragment><l.Loader2 size={12} className="animate-spin text-rose-300" /><span>กำลังรีเซ็ต HWID...</span></b.Fragment> : <b.Fragment><_Component size={12} /><span>รีเซ็ต HWID เพื่อปลดล็อคเครื่อง</span></b.Fragment>}</button></div>}</div>}{y && A && <div className="flex items-start gap-2 rounded-lg border border-amber-500/20 bg-amber-500/[0.06] p-2.5 text-[11px] text-amber-300"><k.AlertCircle size={14} className="shrink-0 mt-px text-amber-400" /><span>{A}</span></div>}<div className="flex gap-2 pt-1"><s.default type="submit" variant="primary" size="sm" disabled={w || x || v} className="flex-1">{w ? <b.Fragment><l.Loader2 size={14} className="animate-spin" /><span>กำลังเปิดใช้งาน...</span></b.Fragment> : u ? <b.Fragment><f.KeyRound size={14} /><span>เปลี่ยนคีย์</span></b.Fragment> : <b.Fragment><j.ShieldCheck size={14} /><span>เปิดใช้งาน</span></b.Fragment>}</s.default>{u && <b.Fragment><s.default type="button" variant="secondary" size="sm" onClick={() => {
              H.success("เข้าสู่ระบบพร้อมใช้งานเรียบร้อยแล้ว", "ยืนยันสิทธิ์สำเร็จ", 3000);
              a.replace("/");
            }}><span>เข้าสู่ระบบ</span><n.ArrowRight size={14} /></s.default><s.default type="button" variant="ghost" size="sm" onClick={O}><m.LogOut size={14} /></s.default></b.Fragment>}</div></form></div>;
  }], 28427);
}, 48416, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
    name: "check",
    size: 24,
    node: [["path", {
      d: "M20 6 9 17l-5-5",
      key: "1gmf2c"
    }]]
  };
  c.node;
  let d = (0, b.default)(c);
  a.s(["Check", 0, d], 48416);
}, 39541, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
    name: "copy",
    size: 24,
    node: [["rect", {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea"
    }], ["path", {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf"
    }]]
  };
  c.node;
  let d = (0, b.default)(c);
  a.s(["Copy", 0, d], 39541);
}, 70834, 31876, 40374, 82236, 19819, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
    name: "key-round",
    size: 24,
    node: [["path", {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }], ["circle", {
      cx: "16.5",
      cy: "7.5",
      r: ".5",
      fill: "currentColor",
      key: "w0ekpg"
    }]]
  };
  c.node;
  let d = (0, b.default)(c);
  a.s(["KeyRound", 0, d], 70834);
  let e = {
    name: "cpu",
    size: 24,
    node: [["path", {
      d: "M12 20v2",
      key: "1lh1kg"
    }], ["path", {
      d: "M12 2v2",
      key: "tus03m"
    }], ["path", {
      d: "M17 20v2",
      key: "1rnc9c"
    }], ["path", {
      d: "M17 2v2",
      key: "11trls"
    }], ["path", {
      d: "M2 12h2",
      key: "1t8f8n"
    }], ["path", {
      d: "M2 17h2",
      key: "7oei6x"
    }], ["path", {
      d: "M2 7h2",
      key: "asdhe0"
    }], ["path", {
      d: "M20 12h2",
      key: "1q8mjw"
    }], ["path", {
      d: "M20 17h2",
      key: "1fpfkl"
    }], ["path", {
      d: "M20 7h2",
      key: "1o8tra"
    }], ["path", {
      d: "M7 20v2",
      key: "4gnj0m"
    }], ["path", {
      d: "M7 2v2",
      key: "1i4yhu"
    }], ["rect", {
      x: "4",
      y: "4",
      width: "16",
      height: "16",
      rx: "2",
      key: "1vbyd7"
    }], ["rect", {
      x: "8",
      y: "8",
      width: "8",
      height: "8",
      rx: "1",
      key: "z9xiuo"
    }]]
  };
  e.node;
  let f = (0, b.default)(e);
  a.s(["Cpu", 0, f], 31876);
  let g = {
    name: "shield-check",
    size: 24,
    node: [["path", {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }], ["path", {
      d: "m9 12 2 2 4-4",
      key: "dzmm74"
    }]]
  };
  g.node;
  let h = (0, b.default)(g);
  a.s(["ShieldCheck", 0, h], 40374);
  let i = {
    name: "log-out",
    size: 24,
    node: [["path", {
      d: "m16 17 5-5-5-5",
      key: "1bji2h"
    }], ["path", {
      d: "M21 12H9",
      key: "dn1m92"
    }], ["path", {
      d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
      key: "1uf3rs"
    }]]
  };
  i.node;
  let j = (0, b.default)(i);
  a.s(["LogOut", 0, j], 82236);
  let k = {
    name: "arrow-right",
    size: 24,
    node: [["path", {
      d: "M5 12h14",
      key: "1ays0h"
    }], ["path", {
      d: "m12 5 7 7-7 7",
      key: "xquz4c"
    }]]
  };
  k.node;
  let l = (0, b.default)(k);
  a.s(["ArrowRight", 0, l], 19819);
}, 76950, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
    name: "loader-circle",
    size: 24,
    node: [["path", {
      d: "M21 12a9 9 0 1 1-6.219-8.56",
      key: "13zald"
    }]],
    aliases: ["loader-2"]
  };
  c.node;
  let d = (0, b.default)(c);
  a.s(["Loader2", 0, d], 76950);
}, 14077, (a, b, c) => {
  "use strict";

  Object.defineProperty(c, "__esModule", {
    value: true
  });
  var d = {
    actionAsyncStorage: function () {
      return f.actionAsyncStorage;
    },
    workAsyncStorage: function () {
      return g.workAsyncStorage;
    },
    workUnitAsyncStorage: function () {
      return h.workUnitAsyncStorage;
    }
  };
  for (var e in d) {
    Object.defineProperty(c, e, {
      enumerable: true,
      get: d[e]
    });
  }
  let f = a.r(20635);
  let g = a.r(56704);
  let h = a.r(32319);
  if ((typeof c.default == "function" || typeof c.default == "object" && c.default !== null) && c.default.__esModule === undefined) {
    Object.defineProperty(c.default, "__esModule", {
      value: true
    });
    Object.assign(c.default, c);
    b.exports = c.default;
  }
}];

//# sourceMappingURL=client_12zasyv._.js.map
