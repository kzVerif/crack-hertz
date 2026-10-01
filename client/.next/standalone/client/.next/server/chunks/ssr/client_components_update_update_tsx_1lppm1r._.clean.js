module.exports = [3603, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(9651);
  var d = a.i(58262);
  var e = a.i(76950);
  var f = a.i(62252);
  var g = a.i(72370);
  var h = a.i(72040);
  var i = a.i(15723);
  var j = a.i(3322);
  var k = a.i(53611);
  var l = a.i(22370);
  var m = a.i(39860);
  var n = a.i(94748);
  var o = a.i(84877);
  var p = a.i(1441);
  let q = {
    name: "chevrons-down",
    size: 24,
    node: [["path", {
      d: "m7 6 5 5 5-5",
      key: "1lc07p"
    }], ["path", {
      d: "m7 13 5 5 5-5",
      key: "1d48rs"
    }]]
  };
  q.node;
  let _Component2 = (0, p.default)(q);
  var s = a.i(28469);
  let _Component3 = ({
    version: a,
    onUpdate: d,
    isUpdating: e = false
  }) => {
    let [f, j] = (0, c.useState)(!!a.isLatest);
    let k = a.isLatest ? {
      icon: h.ChevronsUp,
      badgeStyle: "bg-sky-500/10 border-sky-500/25",
      iconColor: "text-sky-400"
    } : {
      icon: _Component2,
      badgeStyle: a.isCurrent ? "bg-emerald-500/10 border-emerald-500/25" : "bg-white/[0.04] border-white/10",
      iconColor: a.isCurrent ? "text-emerald-400" : "text-neutral-400"
    };
    let _Component = k.icon;
    return <div className={`
        group/row relative
        overflow-hidden
        rounded-xl
        border
        transition-all
        duration-200
        p-4
        shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]
        ${a.isLatest ? "border-sky-500/30 bg-sky-500/[0.02] hover:bg-sky-500/[0.04] hover:border-sky-500/40" : a.isCurrent ? "border-emerald-500/30 bg-emerald-500/[0.02] hover:bg-emerald-500/[0.04] hover:border-emerald-500/40" : "border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.16]"}
      `}><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/10" /><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"><div className="flex items-start sm:items-center gap-3.5 min-w-0"><div className={`
              flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border
              ${k.badgeStyle}
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]
            `}><_Component size={18} className={k.iconColor} strokeWidth={2} /></div><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><span className="text-base font-bold text-neutral-100 tracking-tight">{a.version}</span>{a.isLatest && <span className="inline-flex items-center gap-1 rounded-md border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 text-[11px] font-semibold text-sky-400"><h.ChevronsUp size={11} />ล่าสุด</span>}{a.isCurrent && <span className="inline-flex items-center gap-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-400"><g.CheckCircle2 size={11} />ติดตั้งอยู่</span>}</div><div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-neutral-400"><span className="font-medium text-neutral-300 truncate">{a.title}</span><span className="inline-flex items-center gap-1 text-neutral-500"><m.Calendar size={12} />{a.releaseDate}</span>{a.fileSize && <span className="inline-flex items-center gap-1 text-neutral-500"><s.HardDrive size={12} />{a.fileSize}</span>}</div></div></div><div className="flex items-center gap-2 self-end sm:self-auto shrink-0 mt-2 sm:mt-0">{a.isCurrent ? <div className="flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]"><g.CheckCircle2 size={14} /><span>เวอร์ชันปัจจุบัน</span></div> : a.isLatest ? <i.default type="button" variant="primary" size="sm" disabled={e} onClick={() => d?.(a)} className="shadow-[0_2px_4px_rgba(0,0,0,0.3)]"><h.ChevronsUp size={14} /><span>อัปเดตเวอร์ชันนี้</span></i.default> : <i.default type="button" variant="secondary" size="sm" disabled={e} onClick={() => d?.(a)}><_Component2 size={14} /><span>ดาวน์โหลด</span></i.default>}{a.changes && a.changes.length > 0 && <button type="button" onClick={() => j(!f)} title={f ? "ซ่อนรายละเอียด" : "ดูรายละเอียดการเปลี่ยนแปลง"} className="\n                cursor-pointer\n                flex h-8 w-8 items-center justify-center\n                rounded-xl\n                border border-white/10\n                bg-white/[0.03]\n                text-neutral-400\n                hover:bg-white/[0.08]\n                hover:text-white\n                hover:border-white/20\n                transition-all\n                active:scale-95\n              ">{f ? <o.ChevronUp size={15} /> : <n.ChevronDown size={15} />}</button>}</div></div>{f && a.changes && a.changes.length > 0 && <div className="mt-3.5 pt-3 border-t border-white/[0.06]"><div className="mb-2 flex items-center justify-between"><span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">บันทึกการเปลี่ยนแปลง (Changelog)</span><span className="text-[11px] text-neutral-500">{a.changes.length} รายการ</span></div><div className="space-y-1.5">{a.changes.map((a, c) => <div className="\n                  rounded-lg\n                  bg-white/[0.02]\n                  border border-white/[0.04]\n                  px-3 py-2\n                  hover:bg-white/[0.04]\n                  hover:border-white/[0.08]\n                  transition-all\n                " key={c}><span className="text-xs text-neutral-300 leading-relaxed font-normal">{a.text}</span></div>)}</div></div>}</div>;
  };
  a.s(["default", 0, () => {
    let {
      toast: a,
      confirm: m
    } = (0, l.useToast)();
    let [n, o] = (0, c.useState)([]);
    let [p, q] = (0, c.useState)("v1.0.0");
    let [r, s] = (0, c.useState)(true);
    let [u, v] = (0, c.useState)(null);
    let [w, x] = (0, c.useState)(false);
    let [y, z] = (0, c.useState)(null);
    let [A] = (0, c.useState)("all");
    let [B] = (0, c.useState)("");
    (0, c.useEffect)(() => {}, [a]);
    let C = (0, c.useCallback)(async () => ({
      resultData: [],
      appVer: "v1.0.0"
    }), []);
    (0, c.useEffect)(() => {
      let a = false;
      (async () => {
        try {
          let {
            resultData: b,
            appVer: c
          } = await C();
          if (!a) {
            o(b);
            q(c);
          }
        } catch (a) {
          console.error("[UpdateVersion] Error checking updates:", a);
        } finally {
          if (!a) {
            s(false);
          }
        }
      })();
      return () => {
        a = true;
      };
    }, [C]);
    let D = async () => {
      s(true);
      try {
        let {
          resultData: b,
          appVer: c
        } = await C();
        o(b);
        q(c);
        let d = b.find(a => a.isLatest);
        let e = b.find(a => a.isCurrent);
        if (d && e && d.version !== e.version) {
          a.info(`พบเวอร์ชันใหม่ (${d.version}) พร้อมให้อัปเดตแล้ว`, "พบอัปเดตใหม่", 3500);
        } else {
          a.success(`ระบบของคุณเป็นเวอร์ชันล่าสุด (${d?.version || c}) แล้ว`, "เวอร์ชันล่าสุด", 3000);
        }
      } catch (b) {
        console.error("[UpdateVersion] Error checking updates:", b);
        a.error("ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์อัปเดตได้", "เกิดข้อผิดพลาด");
      } finally {
        s(false);
      }
    };
    let E = async b => {
      let c = b.isLatest;
      if (!(await m({
        title: c ? `ยืนยันการอัปเดต ${b.version}` : `ยืนยันการดาวน์โหลด ${b.version}`,
        message: `คุณต้องการดาวน์โหลดและติดตั้งเวอร์ชัน ${b.version} (${b.title}) หรือไม่? ระบบจะเริ่มดาวน์โหลดและติดตั้งให้อัตโนมัติ`,
        confirmText: "เริ่มอัปเดต",
        cancelText: "ยกเลิก",
        variant: "primary"
      }))) {
        return;
      }
      v(b.version);
      let d = b.downloadUrl || "";
      try {
        if (d) {
          window.open(d, "_blank");
        }
      } catch {
        x(false);
        a.error("เกิดข้อผิดพลาดระหว่างเริ่มดาวน์โหลด", "ข้อผิดพลาด");
      } finally {
        v(null);
      }
    };
    let F = async () => {
      x(false);
    };
    let G = (0, c.useMemo)(() => n.filter(a => {
      if (A === "new") {
        if (!a.isLatest) {
          return false;
        }
      } else if (A === "history" && a.isLatest) {
        return false;
      }
      if (B.trim()) {
        let b = B.toLowerCase().trim();
        let c = a.version.toLowerCase().includes(b);
        let d = a.title.toLowerCase().includes(b);
        let e = a.changes.some(a => a.text.toLowerCase().includes(b));
        return c || d || e;
      }
      return true;
    }), [n, A, B]);
    return <div className="\n        group relative\n        overflow-clip\n        rounded-2xl\n        bg-neutral-950\n        border border-white/[0.12]\n        p-5\n        shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]\n        transition-all\n        duration-200\n        ease-out\n      "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20 z-10" /><div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/[0.04] blur-2xl transition-all duration-300 group-hover:bg-white/[0.07]" /><div className="relative z-10"><div className="\n            sticky top-0 z-30\n            -mx-5 -mt-5 px-5 pt-5 pb-4\n            bg-neutral-950/90 backdrop-blur-md\n            border-b border-white/[0.08]\n            rounded-t-2xl\n            shadow-[0_8px_20px_rgba(0,0,0,0.45)]\n          "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20 z-40" /><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><h3 className="text-base font-semibold text-sky-400 tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">การอัปเดตและเวอร์ชันระบบ</h3><span className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-xs text-neutral-300 font-mono">เวอร์ชันในเครื่อง: {p}</span>{!r && n.length > 0 && (n.some(a => a.isLatest && !a.isCurrent) ? <span className="inline-flex items-center gap-1 rounded-md border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 text-xs font-medium text-sky-400"><h.ChevronsUp size={12} />มีเวอร์ชันใหม่ ({n.find(a => a.isLatest)?.version})</span> : <span className="inline-flex items-center gap-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400"><g.CheckCircle2 size={12} />เป็นเวอร์ชันล่าสุดแล้ว</span>)}</div><p className="mt-1 text-xs text-neutral-400 leading-relaxed">ดึงข้อมูลเวอร์ชันล่าสุดโดยตรงจาก GitHub Releases (AntomyRider/HertzApk)</p></div><div className="flex items-center gap-2 self-start sm:self-auto shrink-0"><i.default type="button" variant="secondary" size="sm" onClick={D} disabled={r} className="w-full sm:w-auto shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">{r ? <e.Loader2 size={14} className="animate-spin text-sky-400" /> : <d.RefreshCw size={14} className="text-sky-400" />}<span>{r ? "กำลังตรวจสอบ..." : "ตรวจสอบอัปเดต"}</span></i.default></div></div></div>{w && y && <div className="mt-4 mb-3 space-y-2.5"><k.default percent={y.percent} transferredMB={y.transferredMB} totalMB={y.totalMB} speedMBs={y.speedMBs} status={y.status} message={y.message} />{y.status !== "completed" && <div className="flex justify-end"><i.default type="button" variant="secondary" size="sm" onClick={F} className="shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]"><span>ยกเลิกการดาวน์โหลด</span></i.default></div>}</div>}<div className="mt-3.5 space-y-2.5">{r && n.length === 0 ? <div className="flex flex-col items-center justify-center py-16 text-neutral-400 gap-3"><e.Loader2 size={24} className="animate-spin text-sky-400" /><span className="text-xs">กำลังตรวจสอบเวอร์ชันล่าสุดจาก GitHub Releases...</span></div> : G.length > 0 ? G.map(a => <_Component3 version={a} onUpdate={E} isUpdating={u === a.version} key={a.version} />) : <j.default icon={f.CircleFadingArrowUp} iconColor="text-neutral-500" title="ไม่พบเวอร์ชันที่ค้นหา" desc="ลองค้นหาด้วยคำอื่น หรือกดตรวจสอบอัปเดตใหม่อีกครั้ง" minHeight="min-h-[220px]" />}</div></div><div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/20 to-transparent" /></div>;
  }], 3603);
}];

//# sourceMappingURL=client_components_update_update_tsx_1lppm1r._.js.map
