(globalThis.TURBOPACK ||= []).push([typeof document == "object" ? document.currentScript : undefined, 9741, e => {
  "use strict";

  var s = e.i(66497);
  var t = e.i(10977);
  e.s(["default", 0, ({
    icon: _Component,
    title: r,
    desc: n,
    description: a,
    action: i,
    children: l,
    className: d = "",
    iconColor: o = "text-blue-400",
    minHeight: c = "min-h-[320px]"
  }) => {
    let x = n ?? a;
    return <div className={`
        group relative overflow-hidden flex flex-1 w-full flex-col items-center justify-center
        rounded-2xl border border-white/[0.12] bg-neutral-950 p-8 text-center select-none
        shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]
        ${c}
        ${d}
      `}><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20" /><div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/[0.03] blur-2xl" />{_Component && <div className="\n            mb-4 flex h-16 w-16 items-center justify-center\n            rounded-2xl border border-white/[0.12] bg-neutral-900\n            shadow-[0_4px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)]\n          ">{_Component ? t.default.isValidElement(_Component) ? _Component : <_Component size={28} className={`${o} drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]`} strokeWidth={1.8} /> : null}</div>}{r && <h3 className="text-base font-semibold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">{r}</h3>}{x && <p className="mt-2 max-w-sm text-xs leading-relaxed text-neutral-400">{x}</p>}{i && <div className="mt-5">{i}</div>}{l}<div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black/25 to-transparent" /></div>;
  }]);
}, 10963, e => {
  "use strict";

  var s = e.i(66497);
  var t = e.i(10977);
  var r = e.i(66700);
  var n = e.i(55718);
  var a = e.i(31843);
  var i = e.i(40702);
  var l = e.i(89126);
  var d = e.i(57445);
  var o = e.i(9741);
  var c = e.i(16791);
  var x = e.i(45281);
  var p = e.i(20850);
  var m = e.i(6794);
  var h = e.i(66177);
  var u = e.i(2692);
  let b = {
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
  b.node;
  let _Component3 = (0, u.default)(b);
  var f = e.i(38973);
  let _Component4 = ({
    version: e,
    onUpdate: r,
    isUpdating: n = false
  }) => {
    let [a, o] = (0, t.useState)(!!e.isLatest);
    let c = e.isLatest ? {
      icon: l.ChevronsUp,
      badgeStyle: "bg-sky-500/10 border-sky-500/25",
      iconColor: "text-sky-400"
    } : {
      icon: _Component3,
      badgeStyle: e.isCurrent ? "bg-emerald-500/10 border-emerald-500/25" : "bg-white/[0.04] border-white/10",
      iconColor: e.isCurrent ? "text-emerald-400" : "text-neutral-400"
    };
    let _Component2 = c.icon;
    return <div className={`
        group/row relative
        overflow-hidden
        rounded-xl
        border
        transition-all
        duration-200
        p-4
        shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]
        ${e.isLatest ? "border-sky-500/30 bg-sky-500/[0.02] hover:bg-sky-500/[0.04] hover:border-sky-500/40" : e.isCurrent ? "border-emerald-500/30 bg-emerald-500/[0.02] hover:bg-emerald-500/[0.04] hover:border-emerald-500/40" : "border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.16]"}
      `}><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/10" /><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"><div className="flex items-start sm:items-center gap-3.5 min-w-0"><div className={`
              flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border
              ${c.badgeStyle}
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]
            `}><_Component2 size={18} className={c.iconColor} strokeWidth={2} /></div><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><span className="text-base font-bold text-neutral-100 tracking-tight">{e.version}</span>{e.isLatest && <span className="inline-flex items-center gap-1 rounded-md border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 text-[11px] font-semibold text-sky-400"><l.ChevronsUp size={11} />ล่าสุด</span>}{e.isCurrent && <span className="inline-flex items-center gap-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-400"><i.CheckCircle2 size={11} />ติดตั้งอยู่</span>}</div><div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-neutral-400"><span className="font-medium text-neutral-300 truncate">{e.title}</span><span className="inline-flex items-center gap-1 text-neutral-500"><p.Calendar size={12} />{e.releaseDate}</span>{e.fileSize && <span className="inline-flex items-center gap-1 text-neutral-500"><f.HardDrive size={12} />{e.fileSize}</span>}</div></div></div><div className="flex items-center gap-2 self-end sm:self-auto shrink-0 mt-2 sm:mt-0">{e.isCurrent ? <div className="flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]"><i.CheckCircle2 size={14} /><span>เวอร์ชันปัจจุบัน</span></div> : e.isLatest ? <d.default type="button" variant="primary" size="sm" disabled={n} onClick={() => r?.(e)} className="shadow-[0_2px_4px_rgba(0,0,0,0.3)]"><l.ChevronsUp size={14} /><span>อัปเดตเวอร์ชันนี้</span></d.default> : <d.default type="button" variant="secondary" size="sm" disabled={n} onClick={() => r?.(e)}><_Component3 size={14} /><span>ดาวน์โหลด</span></d.default>}{e.changes && e.changes.length > 0 && <button type="button" onClick={() => o(!a)} title={a ? "ซ่อนรายละเอียด" : "ดูรายละเอียดการเปลี่ยนแปลง"} className="\n                cursor-pointer\n                flex h-8 w-8 items-center justify-center\n                rounded-xl\n                border border-white/10\n                bg-white/[0.03]\n                text-neutral-400\n                hover:bg-white/[0.08]\n                hover:text-white\n                hover:border-white/20\n                transition-all\n                active:scale-95\n              ">{a ? <h.ChevronUp size={15} /> : <m.ChevronDown size={15} />}</button>}</div></div>{a && e.changes && e.changes.length > 0 && <div className="mt-3.5 pt-3 border-t border-white/[0.06]"><div className="mb-2 flex items-center justify-between"><span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">บันทึกการเปลี่ยนแปลง (Changelog)</span><span className="text-[11px] text-neutral-500">{e.changes.length} รายการ</span></div><div className="space-y-1.5">{e.changes.map((e, t) => <div className="\n                  rounded-lg\n                  bg-white/[0.02]\n                  border border-white/[0.04]\n                  px-3 py-2\n                  hover:bg-white/[0.04]\n                  hover:border-white/[0.08]\n                  transition-all\n                " key={t}><span className="text-xs text-neutral-300 leading-relaxed font-normal">{e.text}</span></div>)}</div></div>}</div>;
  };
  e.s(["default", 0, () => {
    let {
      toast: e,
      confirm: p
    } = (0, x.useToast)();
    let [m, h] = (0, t.useState)([]);
    let [u, b] = (0, t.useState)("v1.0.0");
    let [g, f] = (0, t.useState)(true);
    let [v, j] = (0, t.useState)(null);
    let [y, _] = (0, t.useState)(false);
    let [N, k] = (0, t.useState)(null);
    let [C] = (0, t.useState)("all");
    let [z] = (0, t.useState)("");
    (0, t.useEffect)(() => {
      if (!window.electronApi?.update?.onProgress) {
        return;
      }
      let s = window.electronApi.update.onProgress(s => {
        k(s);
        if (s.status === "completed") {
          e.success("ดาวน์โหลดสำเร็จ กำลังเริ่มการติดตั้งและเปิดโปรแกรมใหม่...", "อัปเดตระบบ", 4000);
        } else if (s.status === "error") {
          e.error(s.message || "เกิดข้อผิดพลาดในการดาวน์โหลด", "ข้อผิดพลาด");
          _(false);
        } else if (s.status === "cancelled") {
          _(false);
        }
      });
      return () => {
        s();
      };
    }, [e]);
    let L = (0, t.useCallback)(async () => {
      let e = [];
      let s = "v1.0.0";
      if (window.electronApi?.update?.check) {
        let t = await window.electronApi.update.check();
        if (t?.data && t.data.length > 0) {
          e = t.data;
        }
        if (t?.currentVersion) {
          s = t.currentVersion;
        }
      }
      return {
        resultData: e,
        appVer: s
      };
    }, []);
    (0, t.useEffect)(() => {
      let e = false;
      (async () => {
        try {
          let {
            resultData: s,
            appVer: t
          } = await L();
          if (!e) {
            h(s);
            b(t);
          }
        } catch (e) {
          console.error("[UpdateVersion] Error checking updates:", e);
        } finally {
          if (!e) {
            f(false);
          }
        }
      })();
      return () => {
        e = true;
      };
    }, [L]);
    let S = async () => {
      f(true);
      try {
        let {
          resultData: s,
          appVer: t
        } = await L();
        h(s);
        b(t);
        let r = s.find(e => e.isLatest);
        let n = s.find(e => e.isCurrent);
        if (r && n && r.version !== n.version) {
          e.info(`พบเวอร์ชันใหม่ (${r.version}) พร้อมให้อัปเดตแล้ว`, "พบอัปเดตใหม่", 3500);
        } else {
          e.success(`ระบบของคุณเป็นเวอร์ชันล่าสุด (${r?.version || t}) แล้ว`, "เวอร์ชันล่าสุด", 3000);
        }
      } catch (s) {
        console.error("[UpdateVersion] Error checking updates:", s);
        e.error("ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์อัปเดตได้", "เกิดข้อผิดพลาด");
      } finally {
        f(false);
      }
    };
    let M = async s => {
      let t = s.isLatest;
      if (!(await p({
        title: t ? `ยืนยันการอัปเดต ${s.version}` : `ยืนยันการดาวน์โหลด ${s.version}`,
        message: `คุณต้องการดาวน์โหลดและติดตั้งเวอร์ชัน ${s.version} (${s.title}) หรือไม่? ระบบจะเริ่มดาวน์โหลดและติดตั้งให้อัตโนมัติ`,
        confirmText: "เริ่มอัปเดต",
        cancelText: "ยกเลิก",
        variant: "primary"
      }))) {
        return;
      }
      j(s.version);
      let r = s.downloadUrl || "";
      try {
        if (window.electronApi?.update?.startDownload) {
          _(true);
          k({
            percent: 0,
            transferredMB: 0,
            totalMB: 0,
            speedMBs: 0,
            status: "downloading",
            message: "กำลังเชื่อมต่อเพื่อดาวน์โหลด..."
          });
          let s = await window.electronApi.update.startDownload();
          if (!s?.success) {
            _(false);
            e.error(s?.message || "ไม่สามารถเริ่มดาวน์โหลดได้", "ข้อผิดพลาด");
          }
        } else if (r) {
          window.open(r, "_blank");
        }
      } catch {
        _(false);
        e.error("เกิดข้อผิดพลาดระหว่างเริ่มดาวน์โหลด", "ข้อผิดพลาด");
      } finally {
        j(null);
      }
    };
    let U = async () => {
      if (window.electronApi?.update?.cancelDownload) {
        try {
          await window.electronApi.update.cancelDownload();
        } catch (e) {
          console.warn("Cancel download failed:", e);
        }
      }
      _(false);
    };
    let A = (0, t.useMemo)(() => m.filter(e => {
      if (C === "new") {
        if (!e.isLatest) {
          return false;
        }
      } else if (C === "history" && e.isLatest) {
        return false;
      }
      if (z.trim()) {
        let s = z.toLowerCase().trim();
        let t = e.version.toLowerCase().includes(s);
        let r = e.title.toLowerCase().includes(s);
        let n = e.changes.some(e => e.text.toLowerCase().includes(s));
        return t || r || n;
      }
      return true;
    }), [m, C, z]);
    return <div className="\n        group relative\n        overflow-clip\n        rounded-2xl\n        bg-neutral-950\n        border border-white/[0.12]\n        p-5\n        shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]\n        transition-all\n        duration-200\n        ease-out\n      "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20 z-10" /><div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/[0.04] blur-2xl transition-all duration-300 group-hover:bg-white/[0.07]" /><div className="relative z-10"><div className="\n            sticky top-0 z-30\n            -mx-5 -mt-5 px-5 pt-5 pb-4\n            bg-neutral-950/90 backdrop-blur-md\n            border-b border-white/[0.08]\n            rounded-t-2xl\n            shadow-[0_8px_20px_rgba(0,0,0,0.45)]\n          "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20 z-40" /><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><h3 className="text-base font-semibold text-sky-400 tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">การอัปเดตและเวอร์ชันระบบ</h3><span className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-xs text-neutral-300 font-mono">เวอร์ชันในเครื่อง: {u}</span>{!g && m.length > 0 && (m.some(e => e.isLatest && !e.isCurrent) ? <span className="inline-flex items-center gap-1 rounded-md border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 text-xs font-medium text-sky-400"><l.ChevronsUp size={12} />มีเวอร์ชันใหม่ ({m.find(e => e.isLatest)?.version})</span> : <span className="inline-flex items-center gap-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400"><i.CheckCircle2 size={12} />เป็นเวอร์ชันล่าสุดแล้ว</span>)}</div><p className="mt-1 text-xs text-neutral-400 leading-relaxed">ดึงข้อมูลเวอร์ชันล่าสุดโดยตรงจาก GitHub Releases (AntomyRider/HertzApk)</p></div><div className="flex items-center gap-2 self-start sm:self-auto shrink-0"><d.default type="button" variant="secondary" size="sm" onClick={S} disabled={g} className="w-full sm:w-auto shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">{g ? <n.Loader2 size={14} className="animate-spin text-sky-400" /> : <r.RefreshCw size={14} className="text-sky-400" />}<span>{g ? "กำลังตรวจสอบ..." : "ตรวจสอบอัปเดต"}</span></d.default></div></div></div>{y && N && <div className="mt-4 mb-3 space-y-2.5"><c.default percent={N.percent} transferredMB={N.transferredMB} totalMB={N.totalMB} speedMBs={N.speedMBs} status={N.status} message={N.message} />{N.status !== "completed" && <div className="flex justify-end"><d.default type="button" variant="secondary" size="sm" onClick={U} className="shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]"><span>ยกเลิกการดาวน์โหลด</span></d.default></div>}</div>}<div className="mt-3.5 space-y-2.5">{g && m.length === 0 ? <div className="flex flex-col items-center justify-center py-16 text-neutral-400 gap-3"><n.Loader2 size={24} className="animate-spin text-sky-400" /><span className="text-xs">กำลังตรวจสอบเวอร์ชันล่าสุดจาก GitHub Releases...</span></div> : A.length > 0 ? A.map(e => <_Component4 version={e} onUpdate={M} isUpdating={v === e.version} key={e.version} />) : <o.default icon={a.CircleFadingArrowUp} iconColor="text-neutral-500" title="ไม่พบเวอร์ชันที่ค้นหา" desc="ลองค้นหาด้วยคำอื่น หรือกดตรวจสอบอัปเดตใหม่อีกครั้ง" minHeight="min-h-[220px]" />}</div></div><div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/20 to-transparent" /></div>;
  }], 10963);
}, 6794, e => {
  "use strict";

  var s = e.i(2692);
  let t = {
    name: "chevron-down",
    size: 24,
    node: [["path", {
      d: "m6 9 6 6 6-6",
      key: "qrunsl"
    }]]
  };
  t.node;
  let r = (0, s.default)(t);
  e.s(["ChevronDown", 0, r], 6794);
}, 66177, e => {
  "use strict";

  var s = e.i(2692);
  let t = {
    name: "chevron-up",
    size: 24,
    node: [["path", {
      d: "m18 15-6-6-6 6",
      key: "153udz"
    }]]
  };
  t.node;
  let r = (0, s.default)(t);
  e.s(["ChevronUp", 0, r], 66177);
}, 66700, e => {
  "use strict";

  var s = e.i(2692);
  let t = {
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
  t.node;
  let r = (0, s.default)(t);
  e.s(["RefreshCw", 0, r], 66700);
}]);
