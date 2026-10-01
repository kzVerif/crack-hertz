module.exports = [22110, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(9651);
  var d = a.i(70834);
  var e = a.i(31876);
  var f = a.i(39541);
  var g = a.i(48416);
  var h = a.i(40374);
  var i = a.i(58262);
  var j = a.i(82236);
  var k = a.i(76950);
  var l = a.i(18244);
  var m = a.i(19819);
  var n = a.i(54949);
  var o = a.i(3642);
  var p = a.i(44146);
  var q = a.i(22370);
  a.s(["default", 0, () => {
    let a = (0, n.useRouter)();
    let {
      key: r,
      hwid: s,
      keyDetails: t,
      isAuthenticated: u,
      isOffline: v,
      isResettingHwid: w,
      resetHwid: x,
      logout: y,
      fetchHwid: z
    } = (0, p.useAuthStore)();
    let {
      toast: A,
      confirm: B
    } = (0, q.useToast)();
    let [C, D] = (0, c.useState)(false);
    let [E, F] = (0, c.useState)(false);
    let [G, H] = (0, c.useState)(false);
    (0, c.useEffect)(() => {
      if (!s) {
        z();
      }
    }, [s, z]);
    let I = async () => {
      let b = r?.code;
      if (!b) {
        A.error("ไม่พบรหัส License Key สำหรับการรีเซ็ต HWID", "ข้อผิดพลาด");
        return;
      }
      if (!(await B({
        title: "ยืนยันการรีเซ็ต HWID",
        message: `คุณต้องการรีเซ็ตการผูก Hardware ID สำหรับคีย์ "${b}" หรือไม่? หลังจากรีเซ็ต ระบบจะออกจากระบบในเครื่องนี้เพื่อให้คุณนำคีย์ไปเปิดใช้งานบนเครื่องใหม่ได้ทันที`,
        confirmText: "ยืนยันรีเซ็ต HWID",
        cancelText: "ยกเลิก",
        variant: "primary"
      }))) {
        return;
      }
      let c = await x(b);
      if (c.success) {
        A.success(c.message || "รีเซ็ต HWID สำเร็จ และออกจากระบบเรียบร้อย สามารถนำคีย์ไปเปิดใช้งานบนเครื่องใหม่ได้ทันที", "รีเซ็ต HWID สำเร็จ");
        await y();
        a.push("/auth");
      } else {
        A.error(c.error || "ไม่สามารถรีเซ็ต HWID ได้ โปรดลองใหม่อีกครั้ง", "รีเซ็ต HWID ล้มเหลว");
      }
    };
    let J = async () => {
      if (await B({
        title: "ยืนยันการออกจากระบบ",
        message: "คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ? ข้อมูล License Key จะถูกลบออกจากเครื่องนี้ และต้องเปิดใช้งานใหม่อีกครั้งเพื่อเข้าถึงระบบ",
        confirmText: "ออกจากระบบ",
        cancelText: "ยกเลิก",
        variant: "danger"
      })) {
        H(true);
        try {
          if (await y()) {
            A.info("ลบข้อมูล License Key และออกจากระบบเรียบร้อยแล้ว", "ออกจากระบบสำเร็จ");
            a.push("/auth");
          } else {
            A.error("ไม่สามารถออกจากระบบได้ กรุณาลองใหม่อีกครั้ง", "ข้อผิดพลาด");
          }
        } finally {
          H(false);
        }
      }
    };
    return <div className="space-y-3"><div className="\n          group/row relative\n          overflow-hidden\n          flex flex-col sm:flex-row sm:items-center justify-between gap-3\n          rounded-xl\n          border border-white/[0.08]\n          bg-white/[0.02]\n          hover:bg-white/[0.04]\n          hover:border-white/[0.16]\n          p-3.5\n          shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]\n          transition-all\n          duration-200\n        "><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/10" /><div className="flex items-center gap-3.5 min-w-0"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-emerald-500/10 border-emerald-500/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"><e.Cpu size={18} className="text-emerald-400" strokeWidth={2} /></div><div className="min-w-0"><p className="text-sm font-semibold text-neutral-100 tracking-tight">Hardware ID (HWID)</p><p className="mt-0.5 text-xs text-neutral-400">รหัสประจำเครื่องคอมพิวเตอร์นี้ สำหรับลงทะเบียนและผูกสิทธิ์ใช้งาน</p></div></div><div className="self-end sm:self-auto shrink-0 flex items-center gap-2 w-full sm:w-auto"><div className="flex h-9 items-center rounded-xl border border-white/[0.1] bg-neutral-900/90 px-3 font-mono text-xs text-neutral-300 select-all max-w-[220px] truncate shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]">{s || "กำลังดึง HWID..."}</div><button type="button" onClick={() => {
            if (s) {
              navigator.clipboard.writeText(s);
              D(true);
              A.success("คัดลอกรหัส Hardware ID ประจำเครื่องลงในคลิปบอร์ดเรียบร้อย", "คัดลอก HWID แล้ว");
              setTimeout(() => D(false), 2000);
            }
          }} title="คัดลอกรหัส HWID" className="flex h-9 items-center gap-1.5 px-3 rounded-xl border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 text-neutral-200 hover:text-white text-xs font-medium transition-all cursor-pointer">{C ? <b.Fragment><g.Check size={13} className="text-emerald-400" /><span className="text-emerald-400">คัดลอกแล้ว</span></b.Fragment> : <b.Fragment><f.Copy size={13} /><span>คัดลอก</span></b.Fragment>}</button></div></div><div className="\n          group/row relative\n          overflow-hidden\n          flex flex-col sm:flex-row sm:items-center justify-between gap-3\n          rounded-xl\n          border border-white/[0.08]\n          bg-white/[0.02]\n          hover:bg-white/[0.04]\n          hover:border-white/[0.16]\n          p-3.5\n          shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]\n          transition-all\n          duration-200\n        "><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/10" /><div className="flex items-center gap-3.5 min-w-0"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-amber-500/10 border-amber-500/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"><d.KeyRound size={18} className="text-amber-400" strokeWidth={2} /></div><div className="min-w-0"><div className="flex items-center gap-2"><p className="text-sm font-semibold text-neutral-100 tracking-tight">License Key (รหัสเปิดใช้งาน)</p>{u ? <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400"><h.ShieldCheck size={11} /><span>{v ? "OFFLINE" : "ACTIVE"}</span></span> : <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-500/15 border border-rose-500/30 text-rose-300"><l.ShieldAlert size={11} /><span>INACTIVE</span></span>}</div><p className="mt-0.5 text-xs text-neutral-400">{(() => {
                if (!u) {
                  return "ยังไม่ได้เปิดใช้งาน License Key";
                }
                if (v) {
                  return "ใช้งานในโหมดออฟไลน์ (Offline Grace)";
                }
                if (t?.remainingDays !== undefined) {
                  if (t.remainingDays < 0) {
                    return "คีย์หมดอายุการใช้งานแล้ว";
                  }
                  if (t.remainingDays === 0) {
                    return "จะหมดอายุภายในวันนี้";
                  }
                  let a = t.expiresAt ? new Date(t.expiresAt).toLocaleDateString("th-TH", {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                  }) : null;
                  return `คงเหลือ ${t.remainingDays} วัน ${a ? `(หมดอายุ ${a})` : ""}`;
                }
                return "สิทธิ์การใช้งานตลอดชีพ (Lifetime) หรือไม่มีกำหนด";
              })()}</p></div></div><div className="self-end sm:self-auto shrink-0 flex items-center gap-2 w-full sm:w-auto">{u && r?.code ? <b.Fragment><div className="flex h-9 items-center rounded-xl border border-white/[0.1] bg-neutral-900/90 px-3 font-mono text-xs text-amber-200 tracking-wider select-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]">{r.code}</div><button type="button" onClick={() => {
              let a = r?.code;
              if (a) {
                navigator.clipboard.writeText(a);
                F(true);
                A.success("คัดลอกรหัส License Key ลงในคลิปบอร์ดเรียบร้อย", "คัดลอก Key แล้ว");
                setTimeout(() => F(false), 2000);
              }
            }} title="คัดลอกรหัส License Key" className="flex h-9 items-center gap-1.5 px-3 rounded-xl border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 text-neutral-200 hover:text-white text-xs font-medium transition-all cursor-pointer">{E ? <b.Fragment><g.Check size={13} className="text-emerald-400" /><span className="text-emerald-400">คัดลอกแล้ว</span></b.Fragment> : <b.Fragment><f.Copy size={13} /><span>คัดลอก</span></b.Fragment>}</button></b.Fragment> : <o.default href="/auth" className="flex h-9 items-center gap-1.5 px-3.5 rounded-xl border border-sky-500/40 bg-sky-500/15 hover:bg-sky-500/25 active:scale-95 text-sky-300 hover:text-sky-200 text-xs font-medium transition-all cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.2)]"><span>เปิดใช้งานคีย์</span><m.ArrowRight size={13} /></o.default>}</div></div>{u && <div className="\n            group/row relative\n            overflow-hidden\n            flex flex-col sm:flex-row sm:items-center justify-between gap-3\n            rounded-xl\n            border border-white/[0.08]\n            bg-white/[0.02]\n            hover:bg-white/[0.04]\n            hover:border-white/[0.16]\n            p-3.5\n            shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]\n            transition-all\n            duration-200\n          "><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/10" /><div className="flex items-center gap-3.5 min-w-0"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-sky-500/10 border-sky-500/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"><i.RefreshCw size={18} className="text-sky-400" strokeWidth={2} /></div><div className="min-w-0"><p className="text-sm font-semibold text-neutral-100 tracking-tight">การจัดการสิทธิ์ (License Actions)</p><p className="mt-0.5 text-xs text-neutral-400">รีเซ็ตการผูกสิทธิ์สำหรับย้ายไปใช้งานบนเครื่องอื่น หรือออกจากระบบเพื่อเปลี่ยนคีย์</p></div></div><div className="self-end sm:self-auto shrink-0 flex items-center gap-2.5 w-full sm:w-auto"><button type="button" onClick={I} disabled={w} title="รีเซ็ตการผูกสิทธิ์ Hardware ID เพื่อย้ายไปใช้งานบนเครื่องใหม่" className="\n                flex h-9 items-center justify-center gap-1.5 px-3.5 rounded-xl\n                border border-amber-500/35 bg-amber-500/10 hover:bg-amber-500/20 active:scale-95\n                text-amber-300 hover:text-amber-200 text-xs font-medium transition-all\n                cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed\n                shadow-[0_1px_2px_rgba(0,0,0,0.2)]\n              ">{w ? <b.Fragment><k.Loader2 size={13} className="animate-spin text-amber-400" /><span>กำลังรีเซ็ต...</span></b.Fragment> : <b.Fragment><i.RefreshCw size={13} /><span>รีเซ็ต HWID</span></b.Fragment>}</button><button type="button" onClick={J} disabled={G} title="ออกจากระบบ และลบ License Key ออกจากเครื่องนี้" className="\n                flex h-9 items-center justify-center gap-1.5 px-3.5 rounded-xl\n                border border-rose-500/35 bg-rose-500/10 hover:bg-rose-500/20 active:scale-95\n                text-rose-300 hover:text-rose-200 text-xs font-medium transition-all\n                cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed\n                shadow-[0_1px_2px_rgba(0,0,0,0.2)]\n              ">{G ? <b.Fragment><k.Loader2 size={13} className="animate-spin text-rose-400" /><span>กำลังออกจากระบบ...</span></b.Fragment> : <b.Fragment><j.LogOut size={13} /><span>ออกจากระบบ</span></b.Fragment>}</button></div></div>}</div>;
  }]);
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
}, 58262, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
    name: "refresh-cw",
    size: 24,
    node: [["path", {
      d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
      key: "v9h5vc"
    }], ["path", {
      d: "M21 3v5h-5",
      key: "1q7to0"
    }], ["path", {
      d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
      key: "3uifl3"
    }], ["path", {
      d: "M8 16H3v5",
      key: "1cv678"
    }]]
  };
  c.node;
  let d = (0, b.default)(c);
  a.s(["RefreshCw", 0, d], 58262);
}, 18244, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
    name: "shield-alert",
    size: 24,
    node: [["path", {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }], ["path", {
      d: "M12 8v4",
      key: "1got3b"
    }], ["path", {
      d: "M12 16h.01",
      key: "1drbdi"
    }]]
  };
  c.node;
  let d = (0, b.default)(c);
  a.s(["ShieldAlert", 0, d], 18244);
}];

//# sourceMappingURL=client_0rr8uoz._.js.map
