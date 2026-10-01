module.exports = [45222, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(9651);
  var d = a.i(10652);
  var e = a.i(93241);
  var f = a.i(39860);
  var g = a.i(28469);
  var h = a.i(38169);
  var i = a.i(72040);
  var j = a.i(75140);
  var k = a.i(15723);
  var l = a.i(53611);
  var m = a.i(22370);
  var n = a.i(66299);
  let o = () => {
    let {
      config: a,
      isLoading: o,
      fetchConfig: p
    } = (0, n.useConfigStore)();
    let {
      toast: q
    } = (0, m.useToast)();
    let r = (0, c.useSyncExternalStore)(() => () => {}, () => true, () => false);
    let [s, t] = (0, c.useState)(false);
    let [u, v] = (0, c.useState)(null);
    let [w, x] = (0, c.useState)(false);
    let [y, z] = (0, c.useState)(null);
    (0, c.useEffect)(() => {
      p();
    }, [p]);
    (0, c.useEffect)(() => {
      if (!o && a.autoUpdate !== true) {
        (async () => {})();
        return () => {};
      }
    }, [a.autoUpdate, o]);
    (0, c.useEffect)(() => {}, [q]);
    let A = (0, c.useCallback)(async () => {
      t(false);
    }, [w]);
    let B = async () => {
      if (!u) {
        return;
      }
      x(true);
      z({
        percent: 0,
        transferredMB: 0,
        totalMB: 0,
        speedMBs: 0,
        status: "downloading",
        message: "กำลังเชื่อมต่อเพื่อดาวน์โหลด..."
      });
      let a = u.downloadUrl || "";
      try {
        if (a) {
          window.open(a, "_blank", "noopener,noreferrer");
          t(false);
        }
      } catch (a) {
        console.error("[AutoUpdateDialog] Failed to start download:", a);
        x(false);
        q.error("เกิดข้อผิดพลาดในการเริ่มดาวน์โหลด", "ข้อผิดพลาด");
      }
    };
    (0, c.useEffect)(() => {
      let a = a => {
        if (a.key === "Escape" && s && !w) {
          A();
        }
      };
      if (s) {
        window.addEventListener("keydown", a);
        return () => window.removeEventListener("keydown", a);
      }
    }, [s, w, A]);
    if (!r || !s || !u) {
      return null;
    }
    let C = y?.status === "completed";
    let D = <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200" onClick={a => {
      if (a.target === a.currentTarget && !w) {
        A();
      }
    }}><div role="dialog" aria-modal="true" aria-labelledby="auto-update-dialog-title" className="\n          relative w-full max-w-md\n          overflow-hidden rounded-2xl\n          border border-white/[0.12]\n          bg-neutral-950 p-6\n          shadow-[0_16px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)]\n          animate-in zoom-in-95 duration-150\n        "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20" /><div className="pointer-events-none absolute -left-12 -top-12 h-36 w-36 rounded-full bg-sky-500/10 blur-2xl" /><div className="flex items-start justify-between gap-3"><div className="flex items-center gap-3"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"><e.CloudDownload className="h-5 w-5" /></div><div><div className="flex items-center gap-2"><h3 id="auto-update-dialog-title" className="text-base font-semibold text-white tracking-tight">อัปเดตระบบ Hertz Manager</h3></div><p className="mt-0.5 text-xs text-neutral-400">{w ? "กำลังดาวน์โหลดและเตรียมติดตั้งอัตโนมัติ" : "พบเวอร์ชันใหม่พร้อมให้ดาวน์โหลดและติดตั้งแล้ว"}</p></div></div>{!w && <button type="button" onClick={A} aria-label="Close dialog" className="\n                cursor-pointer rounded-lg p-1.5 text-neutral-400\n                hover:bg-white/10 hover:text-white\n                active:scale-95 transition-all\n              "><h.X className="h-4 w-4" /></button>}</div><div className="mt-5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"><div className="flex items-center justify-between gap-2"><div className="flex items-center gap-2 min-w-0"><span className="text-sm font-bold text-neutral-100 font-mono tracking-tight truncate">{u.version}</span><span className="inline-flex items-center gap-1 rounded-md border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 text-[11px] font-semibold text-sky-400 shrink-0"><i.ChevronsUp size={11} />เวอร์ชันล่าสุด</span></div>{u.fileSize && u.fileSize !== "-" && <span className="inline-flex items-center gap-1 text-[11px] text-neutral-400 shrink-0"><g.HardDrive size={11} />{u.fileSize}</span>}</div><div className="mt-2 flex items-center gap-2 text-xs text-neutral-400"><span className="truncate text-neutral-300 font-medium">{u.title}</span>{u.releaseDate && <span className="inline-flex items-center gap-1 text-neutral-500 shrink-0"><f.Calendar size={11} />{u.releaseDate}</span>}</div>{u.changes && u.changes.length > 0 && !w && <div className="mt-3 border-t border-white/[0.06] pt-2.5"><div className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-400 mb-1.5"><j.Sparkles size={11} className="text-sky-400" /><span>บันทึกการเปลี่ยนแปลง:</span></div><ul className="space-y-1 text-xs text-neutral-300 max-h-24 overflow-y-auto pr-1">{u.changes.map((a, c) => <li className="flex items-start gap-1.5 text-[11px] leading-relaxed" key={c}><span className="text-sky-400 shrink-0 select-none">•</span><span className="break-words">{a.text}</span></li>)}</ul></div>}</div>{w && <div className="mt-4"><l.default percent={y?.percent ?? 0} transferredMB={y?.transferredMB ?? 0} totalMB={y?.totalMB ?? 0} speedMBs={y?.speedMBs ?? 0} status={y?.status ?? "downloading"} message={y?.message} /></div>}{!w && <p className="mt-3.5 text-[11px] text-neutral-400 leading-relaxed">เนื่องจากคุณไม่ได้เปิดใช้งานการอัปเดตอัตโนมัติไว้ สามารถกดปุ่ม <span className="text-sky-400 font-medium">"อัปเดต"</span> ด้านล่างเพื่อเริ่มดาวน์โหลดและติดตั้งเวอร์ชันล่าสุดได้ทันที</p>}<div className="mt-5 flex items-center justify-end gap-2.5">{w ? !C && <k.default type="button" variant="secondary" size="sm" onClick={A} className="w-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]"><span>ยกเลิกการดาวน์โหลด</span></k.default> : <b.Fragment><k.default type="button" variant="secondary" size="sm" onClick={A} className="w-24 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]"><span>ยกเลิก</span></k.default><k.default type="button" variant="primary" size="sm" onClick={B} className="w-28 shadow-[0_4px_12px_rgba(14,165,233,0.25)]"><e.CloudDownload size={13} /><span>อัปเดต</span></k.default></b.Fragment>}</div></div></div>;
    return (0, d.createPortal)(D, document.body);
  };
  a.s(["AutoUpdateDialog", 0, o, "default", 0, o]);
}, 39860, 28469, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
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
  c.node;
  let d = (0, b.default)(c);
  a.s(["Calendar", 0, d], 39860);
  let e = {
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
  e.node;
  let f = (0, b.default)(e);
  a.s(["HardDrive", 0, f], 28469);
}, 72040, 53611, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
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
  c.node;
  let d = (0, b.default)(c);
  a.s(["ChevronsUp", 0, d], 72040);
  var e = a.i(16547);
  let f = {
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
  f.node;
  let _Component = (0, b.default)(f);
  let h = {
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
  h.node;
  let _Component2 = (0, b.default)(h);
  var j = a.i(72370);
  var k = a.i(3236);
  a.s(["default", 0, ({
    percent: a = 0,
    transferredMB: b = 0,
    totalMB: c = 0,
    speedMBs: d = 0,
    status: f = "downloading",
    message: h,
    className: l = ""
  }) => {
    let m = Math.min(100, Math.max(0, a));
    let n = f === "completed" || m >= 100;
    let o = f === "error";
    let p = f === "cancelled";
    return <div className={`
        relative w-full overflow-hidden rounded-xl
        border border-white/[0.12]
        bg-neutral-950/80 p-4
        shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.12)]
        ${l}
      `}><div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/20" /><div className="flex items-center justify-between gap-3 text-xs mb-2.5"><div className="flex items-center gap-1.5 min-w-0">{n ? <j.CheckCircle2 size={14} className="text-emerald-400 shrink-0" /> : o ? <k.AlertCircle size={14} className="text-rose-400 shrink-0" /> : <_Component size={14} className="text-sky-400 animate-bounce shrink-0" />}<span className={`font-semibold truncate ${n ? "text-emerald-400" : o ? "text-rose-400" : p ? "text-amber-400" : "text-neutral-200"}`}>{h || (n ? "ดาวน์โหลดสำเร็จ กำลังเตรียมติดตั้ง..." : o ? "เกิดข้อผิดพลาดในการดาวน์โหลด" : p ? "ยกเลิกการดาวน์โหลดแล้ว" : "กำลังดาวน์โหลดไฟล์ติดตั้ง...")}</span></div><span className="font-mono text-sm font-bold text-sky-400 shrink-0">{m}%</span></div><div className="\n          relative h-3 w-full overflow-hidden rounded-full\n          bg-neutral-900\n          border border-white/[0.08]\n          shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]\n        "><div style={{
          width: `${m}%`
        }} className={`
            relative h-full transition-all duration-150 ease-out rounded-full
            ${n ? "bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_12px_rgba(16,185,129,0.5)]" : o ? "bg-gradient-to-r from-rose-500 to-red-600 shadow-[0_0_12px_rgba(244,63,94,0.5)]" : "bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400 shadow-[0_0_14px_rgba(14,165,233,0.5)]"}
          `}><div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-white/40" />{!n && !o && !p && <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.25)_50%,transparent_100%)] animate-[shimmer_1.5s_infinite]" />}</div></div><div className="mt-2.5 flex items-center justify-between text-[11px] text-neutral-400"><div className="flex items-center gap-1 font-mono"><span>{b > 0 ? `${b} MB` : "-"}</span>{c > 0 && <span>/ {c} MB</span>}</div>{d > 0 && !n && <div className="flex items-center gap-1 text-sky-400/90 font-mono"><_Component2 size={11} /><span>{d} MB/s</span></div>}</div></div>;
  }], 53611);
}, 93241, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
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
  c.node;
  let d = (0, b.default)(c);
  a.s(["CloudDownload", 0, d], 93241);
}, 75140, a => {
  "use strict";

  var b = a.i(1441);
  let c = {
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
  c.node;
  let d = (0, b.default)(c);
  a.s(["Sparkles", 0, d], 75140);
}, 91402, a => {
  "use strict";

  var b = a.i(9651);
  let c = a => {
    let b;
    let c = new Set();
    let d = (a, d) => {
      let e = typeof a == "function" ? a(b) : a;
      if (!Object.is(e, b)) {
        let a = b;
        b = d ?? (typeof e != "object" || e === null) ? e : Object.assign({}, b, e);
        c.forEach(c => c(b, a));
      }
    };
    let e = () => b;
    let f = {
      setState: d,
      getState: e,
      getInitialState: () => g,
      subscribe: a => {
        c.add(a);
        return () => c.delete(a);
      }
    };
    let g = b = a(d, e, f);
    return f;
  };
  let d = a => {
    let d = a ? c(a) : c;
    let e = a => function (a, c = a => a) {
      let d = b.default.useSyncExternalStore(a.subscribe, b.default.useCallback(() => c(a.getState()), [a, c]), b.default.useCallback(() => c(a.getInitialState()), [a, c]));
      b.default.useDebugValue(d);
      return d;
    }(d, a);
    Object.assign(e, d);
    return e;
  };
  a.s(["create", 0, a => a ? d(a) : d], 91402);
}, 66299, a => {
  "use strict";

  var b = a.i(91402);
  let c = {
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
  let d = {
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
  let e = (0, b.create)((a, b) => ({
    config: {
      ...c
    },
    savedConfig: {
      ...c
    },
    isLoading: true,
    isSaving: false,
    isDirty: false,
    error: null,
    fetchConfig: async () => {
      a({
        isLoading: false
      });
    },
    saveConfig: async a => ({
      success: false,
      message: "Electron API not available"
    }),
    resetConfig: async () => ({
      success: false,
      message: "Electron API not available"
    }),
    updateConfig: c => {
      let d = {
        ...b().config,
        ...c
      };
      a({
        config: d,
        isDirty: JSON.stringify(d) !== JSON.stringify(b().savedConfig)
      });
    },
    setDelayRange: (c, d, e) => {
      let f = b().config;
      let g = f[c];
      let h = Number(e);
      let i = {
        ...g,
        [d]: Math.max(0, isNaN(h) ? 0 : h)
      };
      let j = {
        ...f,
        [c]: i
      };
      a({
        config: j,
        isDirty: JSON.stringify(j) !== JSON.stringify(b().savedConfig)
      });
    },
    setTextMode: c => {
      let d = {
        ...b().config,
        textMode: c
      };
      a({
        config: d,
        isDirty: JSON.stringify(d) !== JSON.stringify(b().savedConfig)
      });
    },
    setHideScreen: c => {
      let d = {
        ...b().config,
        hideScreen: c
      };
      a({
        config: d,
        isDirty: JSON.stringify(d) !== JSON.stringify(b().savedConfig)
      });
    },
    setToggleSetting: (c, d) => {
      let e = {
        ...b().config,
        [c]: d
      };
      a({
        config: e,
        isDirty: JSON.stringify(e) !== JSON.stringify(b().savedConfig)
      });
    },
    applyPreset: c => {
      let e = d[c];
      if (!e) {
        return;
      }
      let f = {
        ...b().config,
        ...e
      };
      a({
        config: f,
        isDirty: JSON.stringify(f) !== JSON.stringify(b().savedConfig)
      });
    },
    discardChanges: () => {
      a({
        config: {
          ...b().savedConfig
        },
        isDirty: false,
        error: null
      });
    }
  }));
  a.s(["CONFIG_PRESETS", 0, d, "DEFAULT_CONFIG", 0, c, "useConfigStore", 0, e]);
}];

//# sourceMappingURL=client_0-bolk0._.js.map
