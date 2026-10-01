(globalThis.TURBOPACK ||= []).push([typeof document == "object" ? document.currentScript : undefined, 98051, e => {
  "use strict";

  var s = e.i(66497);
  var t = e.i(10977);
  var a = e.i(3139);
  var r = e.i(59742);
  var n = e.i(63889);
  var i = e.i(60199);
  var l = e.i(1880);
  var d = e.i(55169);
  var c = e.i(85082);
  var o = e.i(85901);
  var x = e.i(55718);
  var h = e.i(68680);
  var m = e.i(24971);
  var p = e.i(2692);
  let u = {
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
  u.node;
  let _Component = (0, p.default)(u);
  var y = e.i(45281);
  var j = e.i(57445);
  e.s(["default", 0, function () {
    let e = (0, a.useRouter)();
    let {
      key: p,
      hwid: u,
      keyDetails: g,
      isAuthenticated: f,
      isInitialLoading: v,
      isActivating: k,
      isResettingHwid: w,
      isOffline: N,
      error: z,
      statusMessage: C,
      initAuth: M,
      fetchHwid: _,
      activateKey: D,
      resetHwid: L,
      logout: H,
      clearError: X
    } = (0, r.useAuthStore)();
    let {
      toast: A
    } = (0, y.useToast)();
    let [I, K] = (0, t.useState)("");
    let [S, T] = (0, t.useState)(false);
    (0, t.useEffect)(() => {
      M();
      _();
    }, [M, _]);
    (0, t.useEffect)(() => {
      if (p?.code) {
        K(p.code);
      }
    }, [p]);
    let R = async s => {
      s.preventDefault();
      X();
      if (!I.trim()) {
        A.error("กรุณากรอก License Key", "ข้อผิดพลาด");
        return;
      }
      let t = await D(I.trim());
      if (t.success) {
        sessionStorage.setItem("hertz_startup_toast_shown", "1");
        A.success(t.message || "เปิดใช้งาน License Key และผูกเครื่องนี้สำเร็จเรียบร้อยแล้ว", "ยืนยันสิทธิ์สำเร็จ", 4000);
        setTimeout(() => {
          e.replace("/");
        }, 600);
      } else {
        A.error(t.error || "รหัสคีย์ไม่ถูกต้องหรือหมดอายุ", "ไม่สำเร็จ");
      }
    };
    let F = async () => {
      if (!I.trim()) {
        A.error("กรุณาระบุ License Key ก่อนรีเซ็ต HWID", "ข้อผิดพลาด");
        return;
      }
      X();
      let e = await L(I.trim());
      if (e.success) {
        await H();
        A.success(e.message || "รีเซ็ต HWID เรียบร้อยแล้ว สามารถกดเปิดใช้งานได้ทันที", "สำเร็จ");
      } else {
        A.error(e.error || "ไม่สามารถรีเซ็ต HWID ได้", "ไม่สำเร็จ");
      }
    };
    let W = async () => {
      if (await H()) {
        K("");
        A.info("ลบ License Key ออกจากเครื่องแล้ว", "ออกจากระบบ");
      }
    };
    return <div className="w-full max-w-md space-y-3"><div className="mb-1"><h1 className="text-lg font-semibold text-white tracking-tight">ยืนยันสิทธิ์การใช้งาน</h1><p className="text-xs text-neutral-500 mt-0.5">กรอก License Key เพื่อเปิดใช้งานระบบ</p></div><div className="\n          group/row relative overflow-hidden rounded-xl\n          border border-white/[0.08] bg-white/[0.02]\n          p-3\n          shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]\n        "><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/10" /><div className="flex items-center justify-between gap-2 mb-2"><div className="flex items-center gap-2.5"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-emerald-500/10 border-emerald-500/25"><i.Cpu size={15} className="text-emerald-400" /></div><span className="text-xs font-medium text-neutral-200">Hardware ID</span></div><button type="button" onClick={() => {
            if (u) {
              navigator.clipboard.writeText(u);
              T(true);
              A.success("คัดลอก HWID เรียบร้อย", "สำเร็จ");
              setTimeout(() => T(false), 2000);
            }
          }} disabled={!u} className="\n              inline-flex items-center gap-1.5 px-2 py-1\n              rounded-lg text-[11px] font-medium\n              border border-white/[0.08] bg-white/[0.03]\n              hover:bg-white/[0.08] text-neutral-400 hover:text-white\n              transition-all disabled:opacity-40 cursor-pointer\n              active:scale-95\n            ">{S ? <s.Fragment><d.Check size={12} className="text-emerald-400" /><span className="text-emerald-400">คัดลอกแล้ว</span></s.Fragment> : <s.Fragment><l.Copy size={12} /><span>คัดลอก</span></s.Fragment>}</button></div><div className="rounded-lg border border-white/[0.06] bg-neutral-900 px-2.5 py-1.5 font-mono text-[11px] text-neutral-400 select-all break-all tracking-wide">{u || "กำลังโหลด..."}</div></div><form onSubmit={R} className="\n          group/row relative overflow-hidden rounded-xl\n          border border-white/[0.08] bg-white/[0.02]\n          p-3\n          shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]\n          space-y-3\n        "><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/10" /><div className="flex items-center justify-between"><div className="flex items-center gap-2.5"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-amber-500/10 border-amber-500/25"><n.KeyRound size={15} className="text-amber-400" /></div><div><p className="text-xs font-medium text-neutral-200">{f ? "คีย์ปัจจุบัน" : "License Key"}</p><p className="text-[10px] text-neutral-500">{f ? "เชื่อมต่อกับเซิร์ฟเวอร์สำเร็จ" : "กรอกรหัสจากผู้ดูแลระบบ"}</p></div></div>{f && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider border bg-emerald-500/10 text-emerald-400 border-emerald-500/25"><c.ShieldCheck size={11} />Active</span>}{v && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-neutral-800 text-neutral-400"><x.Loader2 size={11} className="animate-spin" />ตรวจสอบ</span>}</div>{f && g && <div className="rounded-lg border border-white/[0.06] bg-neutral-900 p-2.5 space-y-1.5 text-[11px]"><div className="flex items-center justify-between"><span className="text-neutral-500">วันหมดอายุ</span><span className="font-medium text-neutral-200">{g.expiresAt ? new Date(g.expiresAt).toLocaleDateString("th-TH", {
                year: "numeric",
                month: "short",
                day: "numeric"
              }) : "ไม่มีกำหนด"}</span></div>{typeof g.remainingDays == "number" && <div className="flex items-center justify-between"><span className="text-neutral-500">คงเหลือ</span><span className="font-medium text-amber-400">{g.remainingDays} วัน</span></div>}</div>}<div className="space-y-1"><label className="text-[11px] font-medium text-neutral-400">รหัสคีย์</label><input type="text" value={I} onChange={e => K(e.target.value.toUpperCase())} placeholder="HERTZ-XXXX-XXXX-XXXX" disabled={k || v} className="\n              h-9 w-full rounded-md\n              border border-neutral-800 bg-neutral-900\n              px-3 text-sm font-mono text-white\n              outline-none transition-colors\n              placeholder:text-neutral-600\n              focus:border-blue-500\n              tracking-wider uppercase\n              disabled:opacity-50\n            " /></div>{z && <div className="flex flex-col gap-2 rounded-lg border border-rose-500/20 bg-rose-500/[0.06] p-2.5 text-[11px] text-rose-300"><div className="flex items-start gap-2"><o.AlertCircle size={14} className="shrink-0 mt-px text-rose-400" /><span>{z}</span></div>{(z.includes("Hardware ID") || z.includes("HWID")) && <div className="pt-1.5 border-t border-rose-500/20 flex justify-end"><button type="button" onClick={F} disabled={w || k} className="\n                    inline-flex items-center gap-1.5 px-2.5 py-1 rounded\n                    bg-rose-500/20 hover:bg-rose-500/30 text-rose-200\n                    text-[11px] font-medium transition cursor-pointer\n                    disabled:opacity-50 active:scale-95\n                  ">{w ? <s.Fragment><x.Loader2 size={12} className="animate-spin text-rose-300" /><span>กำลังรีเซ็ต HWID...</span></s.Fragment> : <s.Fragment><_Component size={12} /><span>รีเซ็ต HWID เพื่อปลดล็อคเครื่อง</span></s.Fragment>}</button></div>}</div>}{N && C && <div className="flex items-start gap-2 rounded-lg border border-amber-500/20 bg-amber-500/[0.06] p-2.5 text-[11px] text-amber-300"><o.AlertCircle size={14} className="shrink-0 mt-px text-amber-400" /><span>{C}</span></div>}<div className="flex gap-2 pt-1"><j.default type="submit" variant="primary" size="sm" disabled={k || w || v} className="flex-1">{k ? <s.Fragment><x.Loader2 size={14} className="animate-spin" /><span>กำลังเปิดใช้งาน...</span></s.Fragment> : f ? <s.Fragment><n.KeyRound size={14} /><span>เปลี่ยนคีย์</span></s.Fragment> : <s.Fragment><c.ShieldCheck size={14} /><span>เปิดใช้งาน</span></s.Fragment>}</j.default>{f && <s.Fragment><j.default type="button" variant="secondary" size="sm" onClick={() => {
              sessionStorage.setItem("hertz_startup_toast_shown", "1");
              A.success("เข้าสู่ระบบพร้อมใช้งานเรียบร้อยแล้ว", "ยืนยันสิทธิ์สำเร็จ", 3000);
              e.replace("/");
            }}><span>เข้าสู่ระบบ</span><m.ArrowRight size={14} /></j.default><j.default type="button" variant="ghost" size="sm" onClick={W}><h.LogOut size={14} /></j.default></s.Fragment>}</div></form></div>;
  }], 98051);
}, 55169, e => {
  "use strict";

  var s = e.i(2692);
  let t = {
    name: "check",
    size: 24,
    node: [["path", {
      d: "M20 6 9 17l-5-5",
      key: "1gmf2c"
    }]]
  };
  t.node;
  let a = (0, s.default)(t);
  e.s(["Check", 0, a], 55169);
}, 1880, e => {
  "use strict";

  var s = e.i(2692);
  let t = {
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
  t.node;
  let a = (0, s.default)(t);
  e.s(["Copy", 0, a], 1880);
}, 63889, 60199, 85082, 68680, 24971, e => {
  "use strict";

  var s = e.i(2692);
  let t = {
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
  t.node;
  let a = (0, s.default)(t);
  e.s(["KeyRound", 0, a], 63889);
  let r = {
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
  r.node;
  let n = (0, s.default)(r);
  e.s(["Cpu", 0, n], 60199);
  let i = {
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
  i.node;
  let l = (0, s.default)(i);
  e.s(["ShieldCheck", 0, l], 85082);
  let d = {
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
  d.node;
  let c = (0, s.default)(d);
  e.s(["LogOut", 0, c], 68680);
  let o = {
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
  o.node;
  let x = (0, s.default)(o);
  e.s(["ArrowRight", 0, x], 24971);
}, 55718, e => {
  "use strict";

  var s = e.i(2692);
  let t = {
    name: "loader-circle",
    size: 24,
    node: [["path", {
      d: "M21 12a9 9 0 1 1-6.219-8.56",
      key: "13zald"
    }]],
    aliases: ["loader-2"]
  };
  t.node;
  let a = (0, s.default)(t);
  e.s(["Loader2", 0, a], 55718);
}, 3139, (e, s, t) => {
  s.exports = e.r(96232);
}]);
