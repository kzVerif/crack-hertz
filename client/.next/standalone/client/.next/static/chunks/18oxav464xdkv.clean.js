(globalThis.TURBOPACK ||= []).push([typeof document == "object" ? document.currentScript : undefined, 9727, e => {
  "use strict";

  var t = e.i(66497);
  var a = e.i(10977);
  var r = e.i(16568);
  var s = e.i(26696);
  var i = e.i(20850);
  var n = e.i(38973);
  var l = e.i(63915);
  var o = e.i(89126);
  var d = e.i(7229);
  var c = e.i(57445);
  var u = e.i(16791);
  var x = e.i(45281);
  var m = e.i(76582);
  let h = "hertz_dismiss_auto_update_dialog";
  let g = () => {
    let {
      config: e,
      isLoading: g,
      fetchConfig: p
    } = (0, m.useConfigStore)();
    let {
      toast: f
    } = (0, x.useToast)();
    let b = (0, a.useSyncExternalStore)(() => () => {}, () => true, () => false);
    let [w, y] = (0, a.useState)(false);
    let [v, k] = (0, a.useState)(null);
    let [j, N] = (0, a.useState)(false);
    let [C, _] = (0, a.useState)(null);
    (0, a.useEffect)(() => {
      p();
    }, [p]);
    (0, a.useEffect)(() => {
      if (g || e.autoUpdate === true) {
        return;
      }
      try {
        if (sessionStorage.getItem(h) === "true") {
          return;
        }
      } catch {}
      let t = false;
      (async () => {
        try {
          if (window.electronApi?.update?.check) {
            let e = await window.electronApi.update.check();
            if (e?.data && e.data.length > 0) {
              let a = e.data[0];
              if (!t && a) {
                k(a);
                y(true);
              }
            }
          }
        } catch (e) {
          console.warn("[AutoUpdateDialog] Error checking latest release:", e);
        }
      })();
      return () => {
        t = true;
      };
    }, [e.autoUpdate, g]);
    (0, a.useEffect)(() => {
      if (!window.electronApi?.update?.onProgress) {
        return;
      }
      let e = window.electronApi.update.onProgress(e => {
        _(e);
        if (e.status === "completed") {
          f.success("ดาวน์โหลดสำเร็จ กำลังเริ่มการติดตั้งและเปิดโปรแกรมใหม่...", "อัปเดตระบบ", 4000);
        } else if (e.status === "error") {
          f.error(e.message || "เกิดข้อผิดพลาดในการดาวน์โหลด", "ข้อผิดพลาด");
          N(false);
        } else if (e.status === "cancelled") {
          N(false);
        }
      });
      return () => {
        e();
      };
    }, [f]);
    let z = (0, a.useCallback)(async () => {
      if (j && window.electronApi?.update?.cancelDownload) {
        try {
          await window.electronApi.update.cancelDownload();
        } catch (e) {
          console.warn("[AutoUpdateDialog] Cancel download error:", e);
        }
        N(false);
      }
      try {
        sessionStorage.setItem(h, "true");
      } catch {}
      y(false);
    }, [j]);
    let S = async () => {
      if (!v) {
        return;
      }
      N(true);
      _({
        percent: 0,
        transferredMB: 0,
        totalMB: 0,
        speedMBs: 0,
        status: "downloading",
        message: "กำลังเชื่อมต่อเพื่อดาวน์โหลด..."
      });
      let e = v.downloadUrl || "";
      try {
        if (window.electronApi?.update?.startDownload) {
          let e = await window.electronApi.update.startDownload();
          if (!e?.success) {
            N(false);
            f.error(e?.message || "ไม่สามารถเริ่มดาวน์โหลดได้", "ข้อผิดพลาด");
          }
        } else if (e) {
          window.open(e, "_blank", "noopener,noreferrer");
          y(false);
        }
      } catch (e) {
        console.error("[AutoUpdateDialog] Failed to start download:", e);
        N(false);
        f.error("เกิดข้อผิดพลาดในการเริ่มดาวน์โหลด", "ข้อผิดพลาด");
      }
    };
    (0, a.useEffect)(() => {
      let e = e => {
        if (e.key === "Escape" && w && !j) {
          z();
        }
      };
      if (w) {
        window.addEventListener("keydown", e);
        return () => window.removeEventListener("keydown", e);
      }
    }, [w, j, z]);
    if (!b || !w || !v) {
      return null;
    }
    let M = C?.status === "completed";
    let D = <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200" onClick={e => {
      if (e.target === e.currentTarget && !j) {
        z();
      }
    }}><div role="dialog" aria-modal="true" aria-labelledby="auto-update-dialog-title" className="\n          relative w-full max-w-md\n          overflow-hidden rounded-2xl\n          border border-white/[0.12]\n          bg-neutral-950 p-6\n          shadow-[0_16px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)]\n          animate-in zoom-in-95 duration-150\n        "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20" /><div className="pointer-events-none absolute -left-12 -top-12 h-36 w-36 rounded-full bg-sky-500/10 blur-2xl" /><div className="flex items-start justify-between gap-3"><div className="flex items-center gap-3"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"><s.CloudDownload className="h-5 w-5" /></div><div><div className="flex items-center gap-2"><h3 id="auto-update-dialog-title" className="text-base font-semibold text-white tracking-tight">อัปเดตระบบ Hertz Manager</h3></div><p className="mt-0.5 text-xs text-neutral-400">{j ? "กำลังดาวน์โหลดและเตรียมติดตั้งอัตโนมัติ" : "พบเวอร์ชันใหม่พร้อมให้ดาวน์โหลดและติดตั้งแล้ว"}</p></div></div>{!j && <button type="button" onClick={z} aria-label="Close dialog" className="\n                cursor-pointer rounded-lg p-1.5 text-neutral-400\n                hover:bg-white/10 hover:text-white\n                active:scale-95 transition-all\n              "><l.X className="h-4 w-4" /></button>}</div><div className="mt-5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"><div className="flex items-center justify-between gap-2"><div className="flex items-center gap-2 min-w-0"><span className="text-sm font-bold text-neutral-100 font-mono tracking-tight truncate">{v.version}</span><span className="inline-flex items-center gap-1 rounded-md border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 text-[11px] font-semibold text-sky-400 shrink-0"><o.ChevronsUp size={11} />เวอร์ชันล่าสุด</span></div>{v.fileSize && v.fileSize !== "-" && <span className="inline-flex items-center gap-1 text-[11px] text-neutral-400 shrink-0"><n.HardDrive size={11} />{v.fileSize}</span>}</div><div className="mt-2 flex items-center gap-2 text-xs text-neutral-400"><span className="truncate text-neutral-300 font-medium">{v.title}</span>{v.releaseDate && <span className="inline-flex items-center gap-1 text-neutral-500 shrink-0"><i.Calendar size={11} />{v.releaseDate}</span>}</div>{v.changes && v.changes.length > 0 && !j && <div className="mt-3 border-t border-white/[0.06] pt-2.5"><div className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-400 mb-1.5"><d.Sparkles size={11} className="text-sky-400" /><span>บันทึกการเปลี่ยนแปลง:</span></div><ul className="space-y-1 text-xs text-neutral-300 max-h-24 overflow-y-auto pr-1">{v.changes.map((e, a) => <li className="flex items-start gap-1.5 text-[11px] leading-relaxed" key={a}><span className="text-sky-400 shrink-0 select-none">•</span><span className="break-words">{e.text}</span></li>)}</ul></div>}</div>{j && <div className="mt-4"><u.default percent={C?.percent ?? 0} transferredMB={C?.transferredMB ?? 0} totalMB={C?.totalMB ?? 0} speedMBs={C?.speedMBs ?? 0} status={C?.status ?? "downloading"} message={C?.message} /></div>}{!j && <p className="mt-3.5 text-[11px] text-neutral-400 leading-relaxed">เนื่องจากคุณไม่ได้เปิดใช้งานการอัปเดตอัตโนมัติไว้ สามารถกดปุ่ม <span className="text-sky-400 font-medium">"อัปเดต"</span> ด้านล่างเพื่อเริ่มดาวน์โหลดและติดตั้งเวอร์ชันล่าสุดได้ทันที</p>}<div className="mt-5 flex items-center justify-end gap-2.5">{j ? !M && <c.default type="button" variant="secondary" size="sm" onClick={z} className="w-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]"><span>ยกเลิกการดาวน์โหลด</span></c.default> : <t.Fragment><c.default type="button" variant="secondary" size="sm" onClick={z} className="w-24 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]"><span>ยกเลิก</span></c.default><c.default type="button" variant="primary" size="sm" onClick={S} className="w-28 shadow-[0_4px_12px_rgba(14,165,233,0.25)]"><s.CloudDownload size={13} /><span>อัปเดต</span></c.default></t.Fragment>}</div></div></div>;
    return (0, r.createPortal)(D, document.body);
  };
  e.s(["AutoUpdateDialog", 0, g, "default", 0, g]);
}, 57445, e => {
  "use strict";

  var t = e.i(66497);
  e.s(["default", 0, ({
    children: e,
    variant: a = "primary",
    size: r = "md",
    className: s = "",
    disabled: i,
    ...n
  }) => {
    let l = {
      primary: `
      bg-gradient-to-b from-blue-500 to-blue-600
      hover:from-blue-400 hover:to-blue-500
      text-white
      border border-blue-400/30
      active:scale-[0.98]
    `,
      secondary: `
      bg-gradient-to-b from-neutral-800 to-neutral-900
      hover:from-neutral-700 hover:to-neutral-800
      text-neutral-100
      border border-white/[0.12]
      hover:border-white/20
      active:scale-[0.98]
    `,
      danger: `
      bg-gradient-to-b from-rose-500 to-red-600
      hover:from-rose-400 hover:to-red-500
      text-white
      border border-rose-400/30
      active:scale-[0.98]
    `,
      ghost: `
      bg-transparent
      hover:bg-white/[0.08]
      text-neutral-300
      hover:text-white
      border border-transparent
      hover:border-white/10
      active:scale-[0.98]
    `
    };
    return <button {...n} disabled={i} className={`
        group relative
        inline-flex
        items-center
        justify-center
        overflow-hidden
        tracking-tight
        select-none
        transition-all
        duration-150
        ease-out
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-400/50
        disabled:opacity-40
        disabled:pointer-events-none
        disabled:scale-100
        cursor-pointer
        ${l[a]}
        ${{
      sm: "h-8 px-3 text-xs  gap-1.5 rounded-lg",
      md: "h-10 px-4 text-sm  gap-2 rounded-xl",
      lg: "h-12 px-6 text-base  gap-2.5 rounded-2xl"
    }[r]}
        ${s}
      `}>{a !== "ghost" && <span aria-hidden="true" className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/25 rounded-t" />}<span className="relative z-10 inline-flex items-center justify-center gap-[inherit]">{e}</span></button>;
  }]);
}, 45281, 85901, 71798, e => {
  "use strict";

  var t = e.i(66497);
  var a = e.i(10977);
  var r = e.i(40702);
  var s = e.i(2692);
  let i = {
    name: "circle-alert",
    size: 24,
    node: [["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }], ["line", {
      x1: "12",
      x2: "12",
      y1: "8",
      y2: "12",
      key: "1pkeuh"
    }], ["line", {
      x1: "12",
      x2: "12.01",
      y1: "16",
      y2: "16",
      key: "4dfq90"
    }]],
    aliases: ["alert-circle"]
  };
  i.node;
  let n = (0, s.default)(i);
  e.s(["AlertCircle", 0, n], 85901);
  let l = {
    name: "triangle-alert",
    size: 24,
    node: [["path", {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }], ["path", {
      d: "M12 9v4",
      key: "juzpu7"
    }], ["path", {
      d: "M12 17h.01",
      key: "p32p05"
    }]],
    aliases: ["alert-triangle"]
  };
  l.node;
  let o = (0, s.default)(l);
  e.s(["AlertTriangle", 0, o], 71798);
  let d = {
    name: "info",
    size: 24,
    node: [["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }], ["path", {
      d: "M12 16v-4",
      key: "1dtifu"
    }], ["path", {
      d: "M12 8h.01",
      key: "e9boi3"
    }]]
  };
  d.node;
  let c = (0, s.default)(d);
  var u = e.i(63915);
  let x = {
    name: "octagon-alert",
    size: 24,
    node: [["path", {
      d: "M12 16h.01",
      key: "1drbdi"
    }], ["path", {
      d: "M12 8v4",
      key: "1got3b"
    }], ["path", {
      d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",
      key: "1fd625"
    }]],
    aliases: ["alert-octagon"]
  };
  x.node;
  let m = (0, s.default)(x);
  var h = e.i(57445);
  let g = (0, a.createContext)(undefined);
  let p = {
    success: {
      icon: r.CheckCircle2,
      iconColor: "text-emerald-400",
      badgeBg: "bg-emerald-500/15 border-emerald-500/30",
      glowColor: "bg-emerald-500/15",
      borderAccent: "border-emerald-500/30",
      titleColor: "text-emerald-400"
    },
    error: {
      icon: n,
      iconColor: "text-red-400",
      badgeBg: "bg-red-500/15 border-red-500/30",
      glowColor: "bg-red-500/15",
      borderAccent: "border-red-500/30",
      titleColor: "text-red-400"
    },
    warning: {
      icon: o,
      iconColor: "text-amber-400",
      badgeBg: "bg-amber-500/15 border-amber-500/30",
      glowColor: "bg-amber-500/15",
      borderAccent: "border-amber-500/30",
      titleColor: "text-amber-400"
    },
    info: {
      icon: c,
      iconColor: "text-blue-400",
      badgeBg: "bg-blue-500/15 border-blue-500/30",
      glowColor: "bg-blue-500/15",
      borderAccent: "border-blue-500/30",
      titleColor: "text-blue-400"
    }
  };
  let f = {
    danger: {
      icon: m,
      iconColor: "text-red-400",
      badgeBg: "bg-red-500/15 border-red-500/30",
      glowColor: "bg-red-500/20",
      titleColor: "text-red-400",
      btnVariant: "danger"
    },
    primary: {
      icon: n,
      iconColor: "text-sky-400",
      badgeBg: "bg-sky-500/15 border-sky-500/30",
      glowColor: "bg-sky-500/20",
      titleColor: "text-sky-400",
      btnVariant: "primary"
    },
    secondary: {
      icon: c,
      iconColor: "text-blue-400",
      badgeBg: "bg-blue-500/15 border-blue-500/30",
      glowColor: "bg-blue-500/20",
      titleColor: "text-blue-400",
      btnVariant: "secondary"
    }
  };
  let b = ({
    children: e
  }) => {
    let r;
    let _Component2;
    let [i, n] = (0, a.useState)([]);
    let [l, o] = (0, a.useState)(null);
    let [d, c] = (0, a.useState)(false);
    let x = (0, a.useCallback)(e => {
      n(t => t.filter(t => t.id !== e));
    }, []);
    let m = (0, a.useCallback)(e => {
      n(t => t.map(t => t.id === e ? {
        ...t,
        isExiting: true
      } : t));
      setTimeout(() => {
        x(e);
      }, 250);
    }, [x]);
    let b = (0, a.useCallback)((e, t, a, r = 3500) => {
      let s = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      n(i => [...i, {
        id: s,
        type: e,
        message: t,
        title: a,
        duration: r,
        isExiting: false
      }]);
      if (r > 0) {
        setTimeout(() => {
          m(s);
        }, r);
      }
    }, [m]);
    let w = (0, a.useMemo)(() => ({
      success: (e, t, a) => b("success", e, t, a),
      error: (e, t, a) => b("error", e, t, a),
      warning: (e, t, a) => b("warning", e, t, a),
      info: (e, t, a) => b("info", e, t, a)
    }), [b]);
    let y = (0, a.useCallback)(e => {
      c(false);
      return new Promise(t => {
        o({
          options: e,
          resolve: t
        });
      });
    }, []);
    let v = e => {
      if (l) {
        c(true);
        setTimeout(() => {
          l.resolve(e);
          o(null);
          c(false);
        }, 200);
      }
    };
    return <g.Provider value={{
      toast: w,
      confirm: y,
      removeToast: x
    }}>{e}<div className="fixed bottom-5 right-5 z-[110] flex flex-col gap-3 w-88 pointer-events-none">{i.map(e => {
          let a = p[e.type];
          let _Component = a.icon;
          return <div className={`
                pointer-events-auto
                group relative
                flex
                items-start
                gap-3
                overflow-hidden
                rounded-2xl
                bg-gradient-to-r
                from-neutral-900/95
                via-neutral-950/75
                to-transparent
                p-4
                text-white
                shadow-[0_12px_32px_rgba(0,0,0,0.85)]
              
                ${e.isExiting ? "animate-toast-slide-out" : "animate-toast-slide-in"}
              `} key={e.id}><div className={`
                  pointer-events-none
                  absolute -left-8 -top-8
                  h-32 w-32
                  rounded-full
                  ${a.glowColor}
                  blur-2xl
                `} /><div className={`
                  relative z-10
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  ${a.badgeBg}
                  shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_2px_4px_rgba(0,0,0,0.3)]
                `}><_Component size={18} className={a.iconColor} strokeWidth={2.2} /></div><div className="relative z-10 flex-1 pt-0.5 min-w-0 pr-1">{e.title && <h4 className={`text-xs font-semibold uppercase tracking-wider ${a.titleColor}`}>{e.title}</h4>}<p className="text-sm font-medium text-neutral-200 leading-snug break-words">{e.message}</p></div><button type="button" onClick={() => m(e.id)} className="relative z-10 shrink-0 p-1 text-neutral-400 hover:text-white rounded-md transition-colors cursor-pointer active:scale-95" title="ปิด"><u.X size={15} /></button></div>;
        })}</div>{l && (_Component2 = (r = f[l.options.variant || "danger"] || f.danger).icon, <div className={`
              fixed
              inset-0
              z-[120]
              flex
              items-center
              justify-center
              bg-black/75
              backdrop-blur-sm
              p-4
              ${d ? "animate-backdrop-out" : "animate-backdrop-in"}
            `}><div className={`
                group relative
                w-full
                max-w-md
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.12]
                bg-gradient-to-r
                from-neutral-900/95
                via-neutral-950/90
                to-neutral-900/95
                p-5
                text-white
                shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.06)]
                backdrop-blur-xl
                ${d ? "animate-dialog-popup-out" : "animate-dialog-popup-in"}
              `}><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20 z-10" /><div className={`
                  pointer-events-none
                  absolute -left-10 -top-10
                  h-36 w-36
                  rounded-full
                  ${r.glowColor}
                  blur-3xl
                `} /><div className="relative z-10 flex items-start gap-3.5"><div className={`
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    ${r.badgeBg}
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_2px_4px_rgba(0,0,0,0.3)]
                  `}><_Component2 size={20} className={r.iconColor} strokeWidth={2.2} /></div><div className="min-w-0 flex-1 pt-0.5"><h4 className={`text-xs font-semibold uppercase tracking-wider ${r.titleColor}`}>{l.options.title}</h4><p className="mt-1.5 text-sm font-medium text-neutral-200 leading-relaxed break-words">{l.options.message}</p></div><button type="button" onClick={() => v(false)} className="relative z-10 shrink-0 p-1 text-neutral-400 hover:text-white rounded-md transition-colors cursor-pointer active:scale-95" title="ปิด"><u.X size={15} /></button></div><div className="relative z-10 my-4 h-px w-full bg-white/[0.08]" /><div className="relative z-10 flex items-center justify-end gap-2.5"><h.default variant="secondary" size="sm" onClick={() => v(false)} className="cursor-pointer px-4 text-xs font-semibold">{l.options.cancelText || "ยกเลิก"}</h.default><h.default variant={r.btnVariant} size="sm" onClick={() => v(true)} className="cursor-pointer px-5 text-xs font-semibold">{l.options.confirmText || "ยืนยัน"}</h.default></div></div></div>)}</g.Provider>;
  };
  e.s(["ToastProvider", 0, b, "default", 0, b, "useToast", 0, () => {
    let e = (0, a.useContext)(g);
    if (!e) {
      throw Error("useToast must be used within a ToastProvider");
    }
    return e;
  }], 45281);
}, 2692, e => {
  "use strict";

  var t = e.i(10977);
  let a = (...e) => e.filter((e, t, a) => !!e && e.trim() !== "" && a.indexOf(e) === t).join(" ").trim();
  let r = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  };
  let s = (0, t.createContext)({});
  let i = (0, t.forwardRef)(({
    color: e,
    size: i,
    width: n,
    height: l,
    strokeWidth: o,
    absoluteStrokeWidth: d,
    nonScalingStroke: c,
    className: u = "",
    children: x,
    iconNode: m = [],
    icon: h = {
      node: m,
      aliases: [],
      size: 24
    },
    ...g
  }, p) => {
    let {
      size: f = 24,
      strokeWidth: b = 2,
      absoluteStrokeWidth: w = false,
      nonScalingStroke: y = false,
      color: v = "currentColor",
      className: k = ""
    } = (0, t.useContext)(s) ?? {};
    let j = !!x || (e => {
      for (let t in e) {
        if (t.startsWith("aria-") || t === "role" || t === "title") {
          return true;
        }
      }
      return false;
    })(g);
    let [N, C, _ = []] = function (e, t = {}) {
      return function (e, t = {}) {
        let s = t.attributeNames ?? {};
        let i = e => s[e] ?? e;
        let n = e.size ?? e.width ?? r.width;
        let l = e.size ?? e.height ?? r.height;
        let o = e.aliases?.filter(e => typeof e == "string" && e.trim() !== "").map(e => `lucide-${e}`) ?? [];
        let d = [...(e.name ? [`lucide-${e.name}`] : []), ...o];
        let c = t.className?.split(" ").filter(Boolean) ?? [];
        let u = t.includeDefaultClasses === false ? a(...c) : a("lucide", ...d, ...c);
        let x = t.absoluteStrokeWidth ? Number(t.strokeWidth ?? r["stroke-width"]) * Number(e.size ?? e.width ?? r.width) / Number(t.size ?? t.width ?? r.width) : t.strokeWidth ?? r["stroke-width"];
        return ["svg", {
          ...Object.entries(r).reduce((e, [t, a]) => {
            e[i(t)] = a;
            return e;
          }, {}),
          ...("color" in t && t.color && {
            [i("stroke")]: t.color
          }),
          ...("size" in t && t.size != null && {
            [i("width")]: t.size,
            [i("height")]: t.size
          }),
          ...("width" in t && t.width != null && {
            [i("width")]: t.width
          }),
          ...("height" in t && t.height != null && {
            [i("height")]: t.height
          }),
          [i("stroke-width")]: x,
          ...(u && {
            [i("class")]: u
          }),
          [i("viewBox")]: `0 0 ${n} ${l}`,
          ...(t.hasA11yProp === false ? {
            [i("aria-hidden")]: "true"
          } : {}),
          ...("attributes" in t && t.attributes)
        }, e.node.map(e => {
          let [a, r, s] = e;
          let n = t.nonScalingStroke ? {
            [i("vector-effect")]: "non-scaling-stroke",
            ...r
          } : r;
          if (s) {
            return [a, n, s];
          } else {
            return [a, n];
          }
        })];
      }(e, {
        ...t,
        attributeNames: {
          ...t.attributeNames,
          class: "className",
          "stroke-width": "strokeWidth",
          "stroke-linecap": "strokeLinecap",
          "stroke-linejoin": "strokeLinejoin",
          "vector-effect": "vectorEffect"
        }
      });
    }(h, {
      color: e ?? v,
      width: n ?? i ?? f,
      height: l ?? i ?? f,
      strokeWidth: o ?? b,
      absoluteStrokeWidth: d ?? w,
      nonScalingStroke: c ?? y,
      className: a(k, u),
      hasA11yProp: j,
      attributes: g
    });
    return (0, t.createElement)(N, {
      ref: p,
      ...C
    }, [..._.map(([e, a]) => (0, t.createElement)(e, a)), ...(Array.isArray(x) ? x : [x])]);
  });
  e.s(["default", 0, function (e, a = [], r = []) {
    let s;
    let n = typeof e == "string" ? function (e, t, a = []) {
      if (t == null) {
        throw Error("[lucide]: iconNode is required when icon name is used");
      }
      return {
        name: e?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        size: 24,
        node: t,
        ...(a.length > 0 ? {
          aliases: a
        } : {})
      };
    }(e, a, r) : e;
    let l = (0, t.forwardRef)(({
      className: e,
      ...a
    }, r) => (0, t.createElement)(i, {
      ref: r,
      icon: n,
      className: e,
      ...a
    }));
    if (n.name) {
      l.displayName = (s = (e => {
        let t = "";
        let a = false;
        for (let r of e) {
          if (r === "-" || r === "_" || r <= " ") {
            a = t.length > 0;
            continue;
          }
          if (t.length === 0) {
            t += r.toLowerCase();
          } else {
            t += a ? r.toUpperCase() : r;
          }
          a = false;
        }
        return t;
      })(n.name)).charAt(0).toUpperCase() + s.slice(1);
    }
    return l;
  }], 2692);
}, 20850, 38973, e => {
  "use strict";

  var t = e.i(2692);
  let a = {
    name: "calendar",
    size: 24,
    node: [["path", {
      d: "M8 2v3",
      key: "1ioesn"
    }], ["path", {
      d: "M16 2v3",
      key: "otl347"
    }], ["rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      key: "h1oib"
    }], ["path", {
      d: "M3 9h18",
      key: "1pudct"
    }]]
  };
  a.node;
  let r = (0, t.default)(a);
  e.s(["Calendar", 0, r], 20850);
  let s = {
    name: "hard-drive",
    size: 24,
    node: [["path", {
      d: "M10 16h.01",
      key: "1bzywj"
    }], ["path", {
      d: "M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "18tbho"
    }], ["path", {
      d: "M21.946 12.013H2.054",
      key: "zqlbp7"
    }], ["path", {
      d: "M6 16h.01",
      key: "1pmjb7"
    }]]
  };
  s.node;
  let i = (0, t.default)(s);
  e.s(["HardDrive", 0, i], 38973);
}, 89126, 16791, e => {
  "use strict";

  var t = e.i(2692);
  let a = {
    name: "chevrons-up",
    size: 24,
    node: [["path", {
      d: "m17 11-5-5-5 5",
      key: "e8nh98"
    }], ["path", {
      d: "m17 18-5-5-5 5",
      key: "2avn1x"
    }]]
  };
  a.node;
  let r = (0, t.default)(a);
  e.s(["ChevronsUp", 0, r], 89126);
  var s = e.i(66497);
  let i = {
    name: "download",
    size: 24,
    node: [["path", {
      d: "M12 15V3",
      key: "m9g1x1"
    }], ["path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
      key: "ih7n3h"
    }], ["path", {
      d: "m7 10 5 5 5-5",
      key: "brsn70"
    }]]
  };
  i.node;
  let _Component3 = (0, t.default)(i);
  let l = {
    name: "gauge",
    size: 24,
    node: [["path", {
      d: "m12 14 4-4",
      key: "9kzdfg"
    }], ["path", {
      d: "M3.34 19a10 10 0 1 1 17.32 0",
      key: "19p75a"
    }]]
  };
  l.node;
  let _Component4 = (0, t.default)(l);
  var d = e.i(40702);
  var c = e.i(85901);
  e.s(["default", 0, ({
    percent: e = 0,
    transferredMB: t = 0,
    totalMB: a = 0,
    speedMBs: r = 0,
    status: i = "downloading",
    message: l,
    className: u = ""
  }) => {
    let x = Math.min(100, Math.max(0, e));
    let m = i === "completed" || x >= 100;
    let h = i === "error";
    let g = i === "cancelled";
    return <div className={`
        relative w-full overflow-hidden rounded-xl
        border border-white/[0.12]
        bg-neutral-950/80 p-4
        shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.12)]
        ${u}
      `}><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/20" /><div className="flex items-center justify-between gap-3 text-xs mb-2.5"><div className="flex items-center gap-1.5 min-w-0">{m ? <d.CheckCircle2 size={14} className="text-emerald-400 shrink-0" /> : h ? <c.AlertCircle size={14} className="text-rose-400 shrink-0" /> : <_Component3 size={14} className="text-sky-400 animate-bounce shrink-0" />}<span className={`font-semibold truncate ${m ? "text-emerald-400" : h ? "text-rose-400" : g ? "text-amber-400" : "text-neutral-200"}`}>{l || (m ? "ดาวน์โหลดสำเร็จ กำลังเตรียมติดตั้ง..." : h ? "เกิดข้อผิดพลาดในการดาวน์โหลด" : g ? "ยกเลิกการดาวน์โหลดแล้ว" : "กำลังดาวน์โหลดไฟล์ติดตั้ง...")}</span></div><span className="font-mono text-sm font-bold text-sky-400 shrink-0">{x}%</span></div><div className="\n          relative h-3 w-full overflow-hidden rounded-full\n          bg-neutral-900\n          border border-white/[0.08]\n          shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]\n        "><div style={{
          width: `${x}%`
        }} className={`
            relative h-full transition-all duration-150 ease-out rounded-full
            ${m ? "bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_12px_rgba(16,185,129,0.5)]" : h ? "bg-gradient-to-r from-rose-500 to-red-600 shadow-[0_0_12px_rgba(244,63,94,0.5)]" : "bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400 shadow-[0_0_14px_rgba(14,165,233,0.5)]"}
          `}><div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-white/40" />{!m && !h && !g && <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.25)_50%,transparent_100%)] animate-[shimmer_1.5s_infinite]" />}</div></div><div className="mt-2.5 flex items-center justify-between text-[11px] text-neutral-400"><div className="flex items-center gap-1 font-mono"><span>{t > 0 ? `${t} MB` : "-"}</span>{a > 0 && <span>/ {a} MB</span>}</div>{r > 0 && !m && <div className="flex items-center gap-1 text-sky-400/90 font-mono"><_Component4 size={11} /><span>{r} MB/s</span></div>}</div></div>;
  }], 16791);
}, 40702, e => {
  "use strict";

  var t = e.i(2692);
  let a = {
    name: "circle-check",
    size: 24,
    node: [["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }], ["path", {
      d: "m16 9-5.5 5.5L8 12",
      key: "xofnsj"
    }]],
    aliases: ["check-circle-2"]
  };
  a.node;
  let r = (0, t.default)(a);
  e.s(["CheckCircle2", 0, r], 40702);
}, 26696, e => {
  "use strict";

  var t = e.i(2692);
  let a = {
    name: "cloud-download",
    size: 24,
    node: [["path", {
      d: "M12 13v8l-4-4",
      key: "1f5nwf"
    }], ["path", {
      d: "m12 21 4-4",
      key: "1lfcce"
    }], ["path", {
      d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",
      key: "ui1hmy"
    }]],
    aliases: ["download-cloud"]
  };
  a.node;
  let r = (0, t.default)(a);
  e.s(["CloudDownload", 0, r], 26696);
}, 7229, e => {
  "use strict";

  var t = e.i(2692);
  let a = {
    name: "sparkles",
    size: 24,
    node: [["path", {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }], ["path", {
      d: "M20 2v4",
      key: "1rf3ol"
    }], ["path", {
      d: "M22 4h-4",
      key: "gwowj6"
    }], ["circle", {
      cx: "4",
      cy: "20",
      r: "2",
      key: "6kqj1y"
    }]],
    aliases: ["stars"]
  };
  a.node;
  let r = (0, t.default)(a);
  e.s(["Sparkles", 0, r], 7229);
}, 63915, e => {
  "use strict";

  var t = e.i(2692);
  let a = {
    name: "x",
    size: 24,
    node: [["path", {
      d: "M18 6 6 18",
      key: "1bl5f8"
    }], ["path", {
      d: "m6 6 12 12",
      key: "d8bk6v"
    }]]
  };
  a.node;
  let r = (0, t.default)(a);
  e.s(["X", 0, r], 63915);
}, 1347, e => {
  "use strict";

  var t = e.i(10977);
  let a = e => {
    let t;
    let a = new Set();
    let r = (e, r) => {
      let s = typeof e == "function" ? e(t) : e;
      if (!Object.is(s, t)) {
        let e = t;
        t = r ?? (typeof s != "object" || s === null) ? s : Object.assign({}, t, s);
        a.forEach(a => a(t, e));
      }
    };
    let s = () => t;
    let i = {
      setState: r,
      getState: s,
      getInitialState: () => n,
      subscribe: e => {
        a.add(e);
        return () => a.delete(e);
      }
    };
    let n = t = e(r, s, i);
    return i;
  };
  let r = e => {
    let r = e ? a(e) : a;
    let s = e => function (e, a = e => e) {
      let r = t.default.useSyncExternalStore(e.subscribe, t.default.useCallback(() => a(e.getState()), [e, a]), t.default.useCallback(() => a(e.getInitialState()), [e, a]));
      t.default.useDebugValue(r);
      return r;
    }(r, e);
    Object.assign(s, r);
    return s;
  };
  e.s(["create", 0, e => e ? r(e) : r], 1347);
}, 76582, e => {
  "use strict";

  var t = e.i(1347);
  let a = {
    hideScreen: false,
    autoUpdate: true,
    skipPending: true,
    remoteSyncEnabled: true,
    screenShareEnabled: false,
    webhook: {
      enabled: false,
      url: ""
    },
    textMode: "paste",
    typingDelay: {
      min: 20,
      max: 60
    },
    delay: {
      min: 3,
      max: 10
    },
    delayBetweenLinks: {
      min: 5,
      max: 15
    },
    delayBetweenGroups: {
      min: 15,
      max: 50
    },
    nextRoundDelay: {
      min: 10800,
      max: 21600
    }
  };
  let r = {
    safe: {
      hideScreen: false,
      textMode: "typing",
      typingDelay: {
        min: 30,
        max: 80
      },
      delay: {
        min: 2,
        max: 4.5
      },
      delayBetweenLinks: {
        min: 120,
        max: 300
      },
      delayBetweenGroups: {
        min: 300,
        max: 900
      },
      nextRoundDelay: {
        min: 3600,
        max: 7200
      }
    },
    normal: {
      hideScreen: false,
      textMode: "typing",
      typingDelay: {
        min: 20,
        max: 60
      },
      delay: {
        min: 1.5,
        max: 3.5
      },
      delayBetweenLinks: {
        min: 60,
        max: 180
      },
      delayBetweenGroups: {
        min: 180,
        max: 600
      },
      nextRoundDelay: {
        min: 1800,
        max: 3600
      }
    },
    fast: {
      hideScreen: true,
      textMode: "paste",
      typingDelay: {
        min: 10,
        max: 30
      },
      delay: {
        min: 1,
        max: 2
      },
      delayBetweenLinks: {
        min: 30,
        max: 60
      },
      delayBetweenGroups: {
        min: 60,
        max: 180
      },
      nextRoundDelay: {
        min: 600,
        max: 1200
      }
    }
  };
  let s = () => window.electronApi?.config ? window.electronApi.config : null;
  let i = (0, t.create)((e, t) => ({
    config: {
      ...a
    },
    savedConfig: {
      ...a
    },
    isLoading: true,
    isSaving: false,
    isDirty: false,
    error: null,
    fetchConfig: async () => {
      let t = s();
      if (!t) {
        e({
          isLoading: false
        });
        return;
      }
      e({
        isLoading: true,
        error: null
      });
      try {
        let r = (await t.get()) || a;
        e({
          config: {
            ...r
          },
          savedConfig: {
            ...r
          },
          isDirty: false,
          isLoading: false
        });
      } catch (a) {
        let t = a instanceof Error ? a.message : "Failed to fetch config";
        console.error("[CONFIG STORE] Failed to fetch config:", a);
        e({
          error: t,
          isLoading: false
        });
      }
    },
    saveConfig: async a => {
      let r = s();
      if (!r) {
        return {
          success: false,
          message: "Electron API not available"
        };
      }
      let i = a ? {
        ...t().config,
        ...a
      } : t().config;
      e({
        isSaving: true,
        error: null
      });
      try {
        let t = await r.save(i);
        if (t && t.success) {
          let a = t.data || i;
          e({
            config: {
              ...a
            },
            savedConfig: {
              ...a
            },
            isDirty: false,
            isSaving: false
          });
          return {
            success: true,
            message: t.message || "บันทึกการตั้งค่าเรียบร้อยแล้ว"
          };
        }
        throw Error(t?.message || "Failed to save configuration");
      } catch (a) {
        let t = a instanceof Error ? a.message : "Failed to save configuration";
        console.error("[CONFIG STORE] Failed to save config:", a);
        e({
          error: t,
          isSaving: false
        });
        return {
          success: false,
          message: t
        };
      }
    },
    resetConfig: async () => {
      let t = s();
      if (!t) {
        return {
          success: false,
          message: "Electron API not available"
        };
      }
      e({
        isSaving: true,
        error: null
      });
      try {
        let r = await t.reset();
        let s = r?.data || a;
        e({
          config: {
            ...s
          },
          savedConfig: {
            ...s
          },
          isDirty: false,
          isSaving: false
        });
        return {
          success: true,
          message: r?.message || "คืนค่าเริ่มต้นเรียบร้อยแล้ว"
        };
      } catch (a) {
        let t = a instanceof Error ? a.message : "Failed to reset configuration";
        console.error("[CONFIG STORE] Failed to reset config:", a);
        e({
          error: t,
          isSaving: false
        });
        return {
          success: false,
          message: t
        };
      }
    },
    updateConfig: a => {
      let r = {
        ...t().config,
        ...a
      };
      e({
        config: r,
        isDirty: JSON.stringify(r) !== JSON.stringify(t().savedConfig)
      });
    },
    setDelayRange: (a, r, s) => {
      let i = t().config;
      let n = i[a];
      let l = Number(s);
      let o = {
        ...n,
        [r]: Math.max(0, isNaN(l) ? 0 : l)
      };
      let d = {
        ...i,
        [a]: o
      };
      e({
        config: d,
        isDirty: JSON.stringify(d) !== JSON.stringify(t().savedConfig)
      });
    },
    setTextMode: a => {
      let r = {
        ...t().config,
        textMode: a
      };
      e({
        config: r,
        isDirty: JSON.stringify(r) !== JSON.stringify(t().savedConfig)
      });
    },
    setHideScreen: a => {
      let r = {
        ...t().config,
        hideScreen: a
      };
      e({
        config: r,
        isDirty: JSON.stringify(r) !== JSON.stringify(t().savedConfig)
      });
    },
    setToggleSetting: (a, r) => {
      let s = {
        ...t().config,
        [a]: r
      };
      e({
        config: s,
        isDirty: JSON.stringify(s) !== JSON.stringify(t().savedConfig)
      });
    },
    applyPreset: a => {
      let s = r[a];
      if (!s) {
        return;
      }
      let i = {
        ...t().config,
        ...s
      };
      e({
        config: i,
        isDirty: JSON.stringify(i) !== JSON.stringify(t().savedConfig)
      });
    },
    discardChanges: () => {
      e({
        config: {
          ...t().savedConfig
        },
        isDirty: false,
        error: null
      });
    }
  }));
  e.s(["CONFIG_PRESETS", 0, r, "DEFAULT_CONFIG", 0, a, "useConfigStore", 0, i]);
}]);
