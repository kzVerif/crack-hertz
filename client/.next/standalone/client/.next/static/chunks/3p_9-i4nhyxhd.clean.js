(globalThis.TURBOPACK ||= []).push([typeof document == "object" ? document.currentScript : undefined, 37683, e => {
  "use strict";

  var t = e.i(66497);
  var s = e.i(10977);
  var r = e.i(55718);
  var n = e.i(2692);
  let a = {
    name: "user-plus",
    size: 24,
    node: [["path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      key: "1yyitq"
    }], ["circle", {
      cx: "9",
      cy: "7",
      r: "4",
      key: "nufk8"
    }], ["line", {
      x1: "19",
      x2: "19",
      y1: "8",
      y2: "14",
      key: "1bvyxn"
    }], ["line", {
      x1: "22",
      x2: "16",
      y1: "11",
      y2: "11",
      key: "1shjgl"
    }]]
  };
  a.node;
  let _Component = (0, n.default)(a);
  var i = e.i(57445);
  var o = e.i(45281);
  var d = e.i(66842);
  let _Component2 = ({
    onAccountAdded: e,
    className: n = ""
  }) => {
    let {
      toast: a
    } = (0, o.useToast)();
    let {
      isAdding: c,
      startAddingAccount: x,
      stopAddingAccount: m,
      initAccountListeners: u
    } = (0, d.default)();
    (0, s.useEffect)(() => {
      let t = u(t => {
        if (t?.success) {
          a.success("เพิ่มบัญชีเรียบร้อย!", "สำเร็จ");
          e?.();
        } else if (t?.code === null) {
          a.info("ยกเลิกการล็อกอิน", "แจ้งเตือน");
        } else {
          a.error(t?.message || "การล็อกอินไม่สำเร็จ", "ข้อผิดพลาด");
        }
      });
      return () => {
        t();
      };
    }, [u, e, a]);
    let h = async () => {
      if (c) {
        let e = await m();
        if (e.status === "stopped" || e.status === "not_running") {
          a.info("ยกเลิกกระบวนการแล้ว", "แจ้งเตือน");
        }
      } else {
        let e = await x();
        if (e.status !== "started" && e.status !== "already_running") {
          a.error(e.message || "ไม่สามารถเปิดระบบล็อกอินได้", "ข้อผิดพลาด");
        }
      }
    };
    return <div className={`relative flex items-center gap-3 ${n}`}><i.default variant={c ? "danger" : "primary"} onClick={h} className="cursor-pointer gap-2">{c ? <t.Fragment><r.Loader2 size={16} className="animate-spin text-white" /><span>หยุดการทำงาน</span></t.Fragment> : <t.Fragment><_Component size={16} /><span>เพิ่มบัญชี</span></t.Fragment>}</i.default></div>;
  };
  let _Component21 = ({
    count: e
  }) => <div className="flex items-center justify-between gap-2 mb-3"><div className="flex items-center gap-2"><h2 className="text-base font-semibold text-white">บัญชีผู้ใช้</h2><span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-neutral-300">{e}</span></div><_Component2 /></div>;
  var m = e.i(67494);
  var u = e.i(63915);
  let _Component22 = ({
    value: e,
    onChange: s,
    placeholder: r = "ค้นหาชื่อ หรือ ID...",
    className: n = ""
  }) => <div className={`mb-3 ${n}`}><div className="relative flex items-center h-9 w-full rounded-lg border border-white/10 bg-white/5 px-3 focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/20 transition-all"><m.Search size={14} className="text-neutral-400 shrink-0 mr-2" /><input type="text" value={e} onChange={e => s(e.target.value)} placeholder={r} className="h-full w-full bg-transparent text-xs text-white placeholder:text-neutral-500 outline-none" />{e && <button type="button" onClick={() => s("")} className="text-neutral-400 hover:text-white text-xs cursor-pointer"><u.X size={12} /></button>}</div></div>;
  var p = e.i(83382);
  var b = e.i(55932);
  let g = {
    name: "user-cog",
    size: 24,
    node: [["path", {
      d: "M10 15H6a4 4 0 0 0-4 4v2",
      key: "1nfge6"
    }], ["path", {
      d: "m14.305 16.53.923-.382",
      key: "1itpsq"
    }], ["path", {
      d: "m15.228 13.852-.923-.383",
      key: "eplpkm"
    }], ["path", {
      d: "m16.852 12.228-.383-.923",
      key: "13v3q0"
    }], ["path", {
      d: "m16.852 17.772-.383.924",
      key: "1i8mnm"
    }], ["path", {
      d: "m19.148 12.228.383-.923",
      key: "1q8j1v"
    }], ["path", {
      d: "m19.53 18.696-.382-.924",
      key: "vk1qj3"
    }], ["path", {
      d: "m20.772 13.852.924-.383",
      key: "n880s0"
    }], ["path", {
      d: "m20.772 16.148.924.383",
      key: "1g6xey"
    }], ["circle", {
      cx: "18",
      cy: "15",
      r: "3",
      key: "gjjjvw"
    }], ["circle", {
      cx: "9",
      cy: "7",
      r: "4",
      key: "nufk8"
    }]]
  };
  g.node;
  let _Component3 = (0, n.default)(g);
  var j = e.i(9741);
  let _Component23 = ({
    searchQuery: e = "",
    selectedAccountId: n,
    onSelectAccount: a
  }) => {
    let {
      toast: l,
      confirm: i
    } = (0, o.useToast)();
    let {
      accounts: c,
      isLoading: x,
      deletingId: m,
      fetchAccounts: u,
      deleteAccount: h,
      initAccountListeners: g,
      openCustomProfile: w
    } = (0, d.default)();
    (0, s.useEffect)(() => {
      u();
      let e = g();
      return () => {
        e();
      };
    }, [u, g]);
    let v = async (e, t) => {
      if (!(await i({
        title: "ยืนยันการลบบัญชี",
        message: `คุณแน่ใจหรือไม่ว่าต้องการลบบัญชี "${t}" (ID: ${e})? ข้อมูลและเซสชันทั้งหมดจะถูกลบอย่างถาวร`,
        confirmText: "ลบบัญชี",
        cancelText: "ยกเลิก",
        variant: "danger"
      }))) {
        return;
      }
      let s = await h(e);
      if (s?.success) {
        l.success(`ลบบัญชี "${t}" เรียบร้อยแล้ว`, "สำเร็จ");
      } else {
        l.error(s?.message || "ไม่สามารถลบบัญชีได้", "ข้อผิดพลาด");
      }
    };
    let y = c.filter(t => {
      if (!e.trim()) {
        return true;
      }
      let s = e.toLowerCase().trim();
      let r = t.name?.toLowerCase().includes(s);
      let n = String(t.fbId || t.id || "").includes(s);
      return r || n;
    });
    if (x) {
      return <div className="flex h-48 w-full flex-col items-center justify-center gap-3 text-neutral-400"><r.Loader2 className="h-6 w-6 animate-spin text-blue-500" /><span className="text-xs font-medium">กำลังโหลดรายชื่อบัญชี...</span></div>;
    } else if (c.length === 0) {
      return <j.default icon={b.User} title="ยังไม่มีบัญชีในระบบ" desc={<t.Fragment>กดปุ่ม <span className="font-semibold text-blue-400">เพิ่มบัญชี</span> ด้านบนเพื่อเชื่อมต่อบัญชี Facebook</t.Fragment>} minHeight="min-h-[220px]" />;
    } else if (y.length === 0) {
      return <j.default title={<t.Fragment>ไม่พบบัญชีที่ตรงกับคำค้นหา “<span className="text-white font-medium">{e}</span>”</t.Fragment>} minHeight="min-h-[140px]" />;
    } else {
      return <div className="flex flex-col gap-3">{y.map(e => {
          let s = e.avatarLocal || e.avatar;
          let l = m === e.id;
          let i = n === e.id;
          return <div onClick={() => a?.(e)} className={`
              group relative overflow-hidden flex items-center justify-between
              rounded-2xl bg-neutral-950 p-3.5
              border transition-all duration-200 ease-out
              cursor-pointer select-none
              ${i ? "border-blue-500/50 shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(0,0,0,0.5)]" : "border-white/[0.12] hover:border-white/25 shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.5)]"}
              active:translate-y-[2px]
              active:shadow-[0_3px_0_rgba(0,0,0,0.45),0_6px_12px_rgba(0,0,0,0.25)]
            `} key={e.id}><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20" /><div className={`
                pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full blur-2xl transition-all duration-300
                ${i ? "bg-blue-500/[0.08] group-hover:bg-blue-500/[0.14]" : "bg-white/[0.03] group-hover:bg-white/[0.06]"}
              `} />{i && <div className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />}<div className="relative z-10 flex min-w-0 flex-1 items-center gap-3 pl-1"><div className={`
                  flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl
                  border bg-neutral-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.4)]
                  ${i ? "border-blue-400/60 ring-2 ring-blue-500/25" : "border-white/[0.12] group-hover:border-white/20"}
                `}>{s ? <img src={s} alt={e.name} className="h-full w-full object-cover" onError={e => {
                  e.currentTarget.style.display = "none";
                }} /> : <b.User size={20} className="text-neutral-400" />}</div><div className="min-w-0 flex-1"><h4 className={`truncate text-sm font-semibold tracking-tight transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)] ${i ? "text-white" : "text-neutral-200 group-hover:text-blue-400"}`} title={e.name}>{e.name}</h4><p className="mt-0.5 truncate text-xs text-neutral-400 font-mono" title={`ID: ${e.fbId || e.id}`}>ID: {e.fbId || e.id}</p></div></div><div className="relative z-20 ml-2 flex shrink-0 items-center gap-1"><button type="button" onClick={t => {
                t.stopPropagation();
                w({
                  userId: e.id,
                  name: e.name,
                  originalId: e.id,
                  isEdit: true,
                  avatarPreview: s || undefined
                });
              }} title="Custom Profile (ใส่ภาพ และ ชื่อ)" className="\n                  flex h-7 w-7 items-center justify-center rounded-lg border border-transparent\n                  text-neutral-400 transition-all duration-150\n                  hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400\n                  cursor-pointer\n                "><_Component3 size={14} /></button><button type="button" onClick={t => {
                t.stopPropagation();
                v(e.id, e.name);
              }} disabled={l} title="ลบบัญชีนี้" className="\n                  flex h-7 w-7 items-center justify-center rounded-lg border border-transparent\n                  text-neutral-400 transition-all duration-150\n                  hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400\n                  disabled:opacity-40 cursor-pointer\n                ">{l ? <r.Loader2 size={14} className="animate-spin text-red-400" /> : <p.Trash2 size={14} />}</button></div><div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black/25 to-transparent" /></div>;
        })}</div>;
    }
  };
  var v = e.i(46034);
  let _Component26 = ({
    hasAccounts: e
  }) => <j.default icon={v.Users} iconColor="text-neutral-400" title={e ? "กรุณาเลือกบัญชีผู้ใช้" : "ยังไม่มีบัญชีในระบบ"} desc={e ? "เลือกบัญชีจากรายชื่อฝั่งซ้ายเพื่อดูและจัดการข้อมูลกลุ่มสำหรับโพสต์อัตโนมัติ" : "คลิกปุ่ม \"เพิ่มบัญชี\" ที่ฝั่งซ้ายเพื่อเริ่มต้นเชื่อมต่อบัญชี Facebook"} minHeight="min-h-full" />;
  var N = e.i(3139);
  let k = {
    name: "folder",
    size: 24,
    node: [["path", {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }]]
  };
  k.node;
  let _ = (0, n.default)(k);
  let C = {
    name: "image",
    size: 24,
    node: [["rect", {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn"
    }], ["circle", {
      cx: "9",
      cy: "9",
      r: "2",
      key: "af1f0g"
    }], ["path", {
      d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
      key: "1xmnt7"
    }]]
  };
  C.node;
  let I = (0, n.default)(C);
  let z = {
    name: "pen-line",
    size: 24,
    node: [["path", {
      d: "M13 21h8",
      key: "1jsn5i"
    }], ["path", {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }]],
    aliases: ["edit-3"]
  };
  z.node;
  let S = (0, n.default)(z);
  let $ = {
    name: "folder-open",
    size: 24,
    node: [["path", {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }]]
  };
  $.node;
  let A = (0, n.default)($);
  let E = {
    name: "plus",
    size: 24,
    node: [["path", {
      d: "M5 12h14",
      key: "1ays0h"
    }], ["path", {
      d: "M12 5v14",
      key: "s699le"
    }]]
  };
  E.node;
  let L = (0, n.default)(E);
  var M = e.i(58259);
  var P = e.i(16568);
  let R = {
    name: "file-text",
    size: 24,
    node: [["path", {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }], ["path", {
      d: "M14 2v5a1 1 0 0 0 1 1h5",
      key: "wfsgrz"
    }], ["path", {
      d: "M10 9H8",
      key: "b1mrlr"
    }], ["path", {
      d: "M16 13H8",
      key: "t4e002"
    }], ["path", {
      d: "M16 17H8",
      key: "z1uh3a"
    }]]
  };
  R.node;
  let T = (0, n.default)(R);
  var D = e.i(83870);
  var F = e.i(15887);
  let H = ({
    label: e,
    className: s = "",
    ...r
  }) => <div className="flex flex-col gap-1.5">{e && <label className="text-sm font-medium text-neutral-300">{e}</label>}<input {...r} className={`h-9 w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-blue-500 ${s}`} /></div>;
  var U = e.i(96649);
  var G = e.i(66177);
  let O = [{
    type: "LIKE",
    label: "ถูกใจ",
    emoji: "👍",
    activeColor: "border-blue-500 bg-blue-600/25 text-blue-400 ring-1 ring-blue-500/50"
  }, {
    type: "LOVE",
    label: "รักเลย",
    emoji: "❤️",
    activeColor: "border-red-500 bg-red-600/25 text-red-400 ring-1 ring-red-500/50"
  }, {
    type: "CARE",
    label: "ห่วงใย",
    emoji: "🥰",
    activeColor: "border-amber-500 bg-amber-600/25 text-amber-400 ring-1 ring-amber-500/50"
  }, {
    type: "HAHA",
    label: "ฮ่าๆ",
    emoji: "😂",
    activeColor: "border-yellow-500 bg-yellow-600/25 text-yellow-400 ring-1 ring-yellow-500/50"
  }, {
    type: "WOW",
    label: "ว้าว",
    emoji: "😮",
    activeColor: "border-yellow-500 bg-yellow-600/25 text-yellow-400 ring-1 ring-yellow-500/50"
  }, {
    type: "SAD",
    label: "เศร้า",
    emoji: "😢",
    activeColor: "border-sky-500 bg-sky-600/25 text-sky-400 ring-1 ring-sky-500/50"
  }, {
    type: "ANGRY",
    label: "โกรธ",
    emoji: "😡",
    activeColor: "border-orange-500 bg-orange-600/25 text-orange-400 ring-1 ring-orange-500/50"
  }];
  let _Component4 = ({
    value: e,
    randomReaction: s = false,
    isOpen: r,
    onToggle: n,
    onClose: a,
    onChange: l,
    disabled: i = false
  }) => {
    let o = O.find(t => t.type === e);
    return <div className="relative"><button type="button" onClick={n} disabled={i} className={`
          flex h-9 items-center gap-2
          rounded-md
          border
          px-3
          text-xs font-medium
          transition-all duration-200
          active:scale-[0.97]
          ${s ? "border-amber-500/40 bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30" : o ? o.activeColor : `
                border-white/[0.08]
                bg-white/[0.04]
                text-neutral-300
                hover:border-white/[0.12]
                hover:bg-white/[0.07]
                hover:text-white
              `}
        `}>{s ? <t.Fragment><span>สุ่มรีแอคชัน</span></t.Fragment> : o ? <t.Fragment><span className="text-base leading-none">{o.emoji}</span><span>{o.label}</span></t.Fragment> : <span>เลือกรีแอคชัน</span>}<G.ChevronUp className={`
            ml-0.5
            h-3.5
            w-3.5
            text-neutral-500
            transition-transform
            duration-200
            ${r ? "rotate-180" : ""}
          `} /></button>{r && <t.Fragment><div className="fixed inset-0 z-20" onClick={a} /><div className="\n              absolute\n              bottom-full\n              left-0\n              z-30\n              mb-2\n              flex\n              items-center\n              gap-1\n              rounded-2xl\n              border\n              border-white/[0.08]\n              bg-neutral-900/90\n              p-1.5\n              shadow-[0_12px_35px_rgba(0,0,0,0.45)]\n              backdrop-blur-2xl\n              animate-in\n              fade-in\n              slide-in-from-bottom-1\n              duration-150\n            ">{O.map(s => {
            let r = e === s.type;
            return <button type="button" onClick={() => {
              var t;
              l(e === (t = s.type) ? "" : t);
              a();
            }} title={s.label} className={`
                    group/reaction
                    relative
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    text-xl
                    transition-all
                    duration-150
                    hover:-translate-y-0.5
                    hover:bg-white/[0.08]
                    active:scale-90
                    ${r ? `
                          bg-white/[0.10]
                          ring-1
                          ring-white/[0.12]
                        ` : ""}
                  `} key={s.type}><span className={`
                      leading-none
                      transition-transform
                      duration-150
                      ${r ? "scale-110" : "group-hover/reaction:scale-110"}
                    `}>{s.emoji}</span>{r && <span className="\n                        absolute\n                        bottom-1\n                        h-1\n                        w-1\n                        rounded-full\n                        bg-blue-400\n                        shadow-[0_0_6px_rgba(96,165,250,0.8)]\n                      " />}</button>;
          })}{e && <div className="mx-1 h-6 w-px bg-white/[0.08]" />}{e && <button type="button" onClick={() => {
            l("");
            a();
          }} title="ล้างรีแอคชัน" className="\n                  flex\n                  h-10\n                  w-10\n                  items-center\n                  justify-center\n                  rounded-xl\n                  text-neutral-500\n                  transition-all\n                  duration-150\n                  hover:bg-red-500/10\n                  hover:text-red-400\n                  active:scale-90\n                "><u.X className="h-4 w-4" strokeWidth={1.8} /></button>}</div></t.Fragment>}</div>;
  };
  let B = {
    name: "square-text",
    size: 24,
    node: [["rect", {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      key: "afitv7"
    }], ["path", {
      d: "M7 8h8",
      key: "1jbsf9"
    }], ["path", {
      d: "M7 12h10",
      key: "b7w52i"
    }], ["path", {
      d: "M7 16h6",
      key: "1vyc9m"
    }]]
  };
  B.node;
  let W = (0, n.default)(B);
  let V = {
    name: "face-slightly-smiling",
    size: 24,
    node: [["path", {
      d: "M15 10V9",
      key: "4dkmfx"
    }], ["path", {
      d: "M16.472 15a6 6 0 01-8.943 0",
      key: "7qomzy"
    }], ["path", {
      d: "M9 10V9",
      key: "1lazqi"
    }], ["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }]],
    aliases: ["smile"]
  };
  V.node;
  let X = (0, n.default)(V);
  var J = e.i(71661);
  let K = ({
    randomContent: e,
    randomImage: s,
    randomReaction: r,
    onChangeRandomContent: n,
    onChangeRandomImage: a,
    onChangeRandomReaction: l,
    isOpen: i,
    onToggle: o,
    onClose: d,
    disabled: c = false
  }) => {
    let x = e || s || r;
    return <div className="relative"><button type="button" onClick={o} disabled={c} className={`
          flex h-9 items-center gap-2
          rounded-md
          border
          px-3
          text-xs font-medium
          transition-all duration-200
          active:scale-[0.97]
          ${x ? "border-blue-500/50 bg-blue-600/15 text-blue-300 ring-1 ring-blue-500/30" : `
                border-white/[0.08]
                bg-white/[0.04]
                text-neutral-300
                hover:border-white/[0.12]
                hover:bg-white/[0.07]
                hover:text-white
              `}
        `}><span>ตั้งค่ากลุ่ม</span><G.ChevronUp className={`
            ml-0.5
            h-3.5
            w-3.5
            text-neutral-500
            transition-transform
            duration-200
            ${i ? "rotate-180" : ""}
          `} /></button>{i && <t.Fragment><div className="fixed inset-0 z-20" onClick={d} /><div className="\n              absolute\n              bottom-full\n              left-0\n              z-30\n              mb-2\n              w-72\n              rounded-2xl\n              border\n              border-white/[0.08]\n              bg-neutral-900/95\n              p-4\n              shadow-[0_12px_35px_rgba(0,0,0,0.55)]\n              backdrop-blur-2xl\n              animate-in\n              fade-in\n              slide-in-from-bottom-1\n              duration-150\n            "><div className="flex flex-col gap-4"><div className="flex items-center justify-between gap-4"><div className="flex min-w-0 items-center gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-neutral-900 text-neutral-300"><W size={18} strokeWidth={1.8} /></div><div className="flex min-w-0 flex-col gap-0.5"><span className="text-xs font-medium text-neutral-200">สุ่มเนื้อหา</span><span className="text-[10px] leading-4 text-neutral-400">สุ่มชุดข้อความในแต่ละโพสต์</span></div></div><J.default checked={e} onChange={n} /></div><div className="flex items-center justify-between gap-4"><div className="flex min-w-0 items-center gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-neutral-900 text-neutral-300"><I size={18} strokeWidth={1.8} /></div><div className="flex min-w-0 flex-col gap-0.5"><span className="text-xs font-medium text-neutral-200">สุ่มรูปภาพ</span><span className="text-[10px] leading-4 text-neutral-400">สุ่มภาพจากทั้งหมด</span></div></div><J.default checked={s} onChange={a} /></div><div className="flex items-center justify-between gap-4"><div className="flex min-w-0 items-center gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-neutral-900 text-neutral-300"><X size={18} strokeWidth={1.8} /></div><div className="flex min-w-0 flex-col gap-0.5"><span className="text-xs font-medium text-neutral-200">สุ่มรีแอคชัน</span><span className="text-[10px] leading-4 text-neutral-400">สุ่มความรู้สึกในแต่ละโพสต์</span></div></div><J.default checked={r} onChange={l} /></div></div></div></t.Fragment>}</div>;
  };
  let Y = ({
    onClose: e,
    initialData: n,
    mode: a,
    userId: l,
    onSuccess: d
  }) => {
    var c;
    let {
      toast: x
    } = (0, o.useToast)();
    let {
      createGroup: m,
      updateGroup: h,
      selectImages: b,
      getImagePreview: g,
      isCreating: f
    } = (0, M.default)();
    let j = a ? a === "edit" : !!n?.id || !!n?.path;
    let w = n?.link || [];
    let [v, y] = (0, s.useState)({
      name: n?.name || "",
      content: n?.content || "",
      comments: n?.comments || "",
      reaction: n?.reaction || "",
      link: w,
      linkText: w.join("\n"),
      newImages: [],
      existingImages: n?.images || [],
      randomContent: !!n?.randomContent,
      randomImage: !!n?.randomImage,
      randomReaction: !!n?.randomReaction
    });
    let [N, k] = (0, s.useState)(w.length > 0 ? "link" : "content");
    let [_, C] = (0, s.useState)(false);
    let [z, S] = (0, s.useState)(false);
    let [$, A] = (0, s.useState)(null);
    let [E, L] = (0, s.useState)(null);
    let [P, R] = (0, s.useState)(null);
    let [G, O] = (0, s.useState)({});
    let B = (0, s.useRef)({});
    (0, s.useEffect)(() => {
      B.current = G;
    }, [G]);
    (0, s.useEffect)(() => {
      let e = true;
      (async () => {
        let t = [];
        if (n?.name) {
          for (let e of v.existingImages) {
            let s = `existing:${e}`;
            if (!B.current[s]) {
              t.push({
                key: s,
                promise: g({
                  groupName: n.name,
                  fileName: e,
                  userId: l
                })
              });
            }
          }
        }
        for (let e of v.newImages) {
          let s = `new:${e}`;
          if (!B.current[s]) {
            t.push({
              key: s,
              promise: g(e)
            });
          }
        }
        if (t.length === 0) {
          return;
        }
        let s = await Promise.all(t.map(async e => {
          try {
            let t = await e.promise;
            return {
              key: e.key,
              dataUrl: t
            };
          } catch {
            return {
              key: e.key,
              dataUrl: null
            };
          }
        }));
        if (e) {
          O(e => {
            let t = false;
            let r = {
              ...e
            };
            for (let e of s) {
              if (e.dataUrl && !r[e.key]) {
                r[e.key] = e.dataUrl;
                t = true;
              }
            }
            if (t) {
              return r;
            } else {
              return e;
            }
          });
        }
      })();
      return () => {
        e = false;
      };
    }, [v.existingImages, v.newImages, n?.name, l, g]);
    (0, s.useEffect)(() => {
      let t = t => {
        if (t.key === "Escape" && !f) {
          if (z) {
            S(false);
          } else if (_) {
            C(false);
          } else {
            e();
          }
        }
      };
      window.addEventListener("keydown", t);
      return () => window.removeEventListener("keydown", t);
    }, [f, _, z, e]);
    let W = async () => {
      try {
        let e = await b();
        if (e && e.length > 0) {
          if (P) {
            R(null);
          }
          y(t => {
            let s = [...t.newImages];
            for (let t of e) {
              if (!s.includes(t)) {
                s.push(t);
              }
            }
            return {
              ...t,
              newImages: s
            };
          });
        }
      } catch (e) {
        console.error("Failed to select images:", e);
        x.error("ไม่สามารถเลือกรูปภาพได้");
      }
    };
    let V = async t => {
      t.preventDefault();
      A(null);
      L(null);
      R(null);
      let s = (0, U.validateGroup)({
        name: v.name,
        link: v.link,
        content: v.content,
        comments: v.comments,
        reaction: v.reaction,
        newImages: v.newImages,
        existingImages: v.existingImages
      });
      if (!s.isValid) {
        if (s.errors.name) {
          A(s.errors.name);
        }
        if (s.errors.link) {
          L(s.errors.link);
          k("link");
        }
        if (s.errors.contentOrImage) {
          R(s.errors.contentOrImage);
          if (!s.errors.link) {
            k("content");
          }
        }
        x.error(s.message || "ข้อมูลกลุ่มไม่ถูกต้องหรือไม่ครบถ้วน");
        return;
      }
      let r = s.sanitizedData?.name || v.name.trim();
      try {
        if (j && n?.name) {
          let t = await h({
            oldName: n.name,
            name: r,
            content: v.content,
            comments: v.comments,
            reaction: v.reaction,
            link: v.link,
            images: v.newImages,
            existingImages: v.existingImages,
            randomContent: v.randomContent,
            randomImage: v.randomImage,
            randomReaction: v.randomReaction,
            userId: l
          });
          if (t.success) {
            x.success(t.message || "บันทึกการแก้ไขกลุ่มเรียบร้อย");
            d?.();
            e();
          } else {
            x.error(t.message || "ไม่สามารถแก้ไขข้อมูลกลุ่มได้");
          }
        } else {
          let t = await m({
            name: r,
            content: v.content,
            comments: v.comments,
            reaction: v.reaction,
            link: v.link,
            images: v.newImages,
            randomContent: v.randomContent,
            randomImage: v.randomImage,
            randomReaction: v.randomReaction,
            userId: l
          });
          if (t.success) {
            x.success(t.message || "สร้างกลุ่มเรียบร้อยแล้ว");
            d?.();
            e();
          } else {
            x.error(t.message || "ไม่สามารถสร้างกลุ่มได้");
          }
        }
      } catch (t) {
        let e = t instanceof Error ? t.message : "เกิดข้อผิดพลาดในการประมวลผล";
        x.error(e);
      }
    };
    let X = v.existingImages.length + v.newImages.length;
    return <div className="relative z-10 flex h-[640px] max-h-[80vh] w-full max-w-4xl flex-col rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl shadow-blue-500/5 transition-all"><div className="flex shrink-0 items-center justify-between border-b border-neutral-800 px-6 py-4"><div><h2 className="text-lg font-semibold text-white">{j ? `แก้ไขกลุ่ม: ${n?.name}` : "เพิ่มกลุ่มใหม่ (Add Group)"}</h2><p className="text-xs text-neutral-400">{j ? "แก้ไขเนื้อหาไฟล์ .txt, ลิงก์ และจัดการรูปภาพในกลุ่ม" : "สร้างโฟลเดอร์กลุ่มพร้อมไฟล์ content.txt, comments.txt, reaction.txt, link.txt และ image/"}</p></div><button type="button" onClick={e} disabled={f} aria-label="Close dialog" className="rounded-lg p-1.5 text-neutral-400 transition hover:bg-white/5 hover:text-white disabled:opacity-50"><u.X className="h-5 w-5" /></button></div><form onSubmit={V} className="flex min-h-0 flex-1 flex-col overflow-hidden p-6"><div className="grid min-h-0 flex-1 grid-cols-1 gap-6 md:grid-cols-2"><div className="flex min-h-0 flex-col gap-4"><div className="shrink-0"><H label="ชื่อหมวดหมู่ของกลุ่ม*" placeholder="ระบุชื่อกลุ่ม เช่น เสื้อผ้าแฟชั่น, รถยนต์มือสอง" value={v.name} onChange={e => {
                y(t => ({
                  ...t,
                  name: e.target.value
                }));
                if ($) {
                  A(null);
                }
              }} disabled={f} />{$ && <p className="mt-1 text-xs text-red-400">{$}</p>}</div><div className={`flex min-h-0 flex-1 flex-col rounded-xl border ${P && X === 0 ? "border-red-500/50 bg-red-950/10" : "border-neutral-800/80 bg-neutral-900/40"} p-4 transition-colors`}><div className="flex items-center justify-between"><div><label className="text-sm font-medium text-neutral-200">รูปภาพประจำกลุ่ม</label>{P && X === 0 && <span className="block text-[11px] text-red-400">*ต้องการรูปภาพหรือเนื้อหา</span>}</div><i.default type="button" variant="secondary" size="sm" onClick={W} disabled={f} className="gap-1.5"><I className="h-3.5 w-3.5" />เลือกรูปภาพ</i.default></div><div className="mt-3 flex min-h-0 flex-1 flex-col">{X > 0 ? <div className="flex min-h-0 flex-1 flex-col space-y-2"><div className="flex shrink-0 items-center justify-between text-xs text-neutral-400"><span>ทั้งหมด {X} รูปภาพ</span></div><div className="grid min-h-0 flex-1 content-start grid-cols-1 gap-2 overflow-y-auto sm:grid-cols-2 pr-0.5">{v.existingImages.map(e => {
                      let s = G[`existing:${e}`];
                      return <div className="group relative flex items-center justify-between gap-2.5 rounded-lg border border-neutral-800 bg-neutral-950 p-2 text-xs transition hover:border-neutral-700" key={`existing-${e}`}><div className="flex min-w-0 items-center gap-2.5"><div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 flex items-center justify-center">{s ? <img src={s} alt={e} className="h-full w-full object-cover" /> : <div className="flex h-full w-full items-center justify-center text-neutral-600"><I className="h-4 w-4 animate-pulse text-blue-400/60" /></div>}</div><div className="min-w-0 flex-1"><div className="flex items-center gap-1.5"><span className="truncate font-medium text-neutral-200" title={e}>{e}</span></div><span className="mt-0.5 block text-[10px] text-neutral-500">รูปภาพในกลุ่ม</span></div></div><button type="button" onClick={() => {
                          y(t => ({
                            ...t,
                            existingImages: t.existingImages.filter(t => t !== e)
                          }));
                        }} disabled={f} className="rounded-lg p-1.5 text-neutral-500 transition hover:bg-red-500/10 hover:text-red-400 disabled:opacity-50" title="ลบรูปภาพนี้"><p.Trash2 className="h-4 w-4" /></button></div>;
                    })}{v.newImages.map(e => {
                      let s;
                      let r = (s = e.split(/[\\/]/))[s.length - 1] || e;
                      let n = G[`new:${e}`];
                      return <div className="group relative flex items-center justify-between gap-2.5 rounded-xl border border-blue-900/40 bg-blue-950/20 p-2 text-xs transition hover:border-blue-700/60" key={`new-${e}`}><div className="flex min-w-0 items-center gap-2.5"><div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-blue-900/40 bg-blue-950/40 flex items-center justify-center">{n ? <img src={n} alt={r} className="h-full w-full object-cover" /> : <div className="flex h-full w-full items-center justify-center text-neutral-600"><I className="h-4 w-4 animate-pulse text-green-400/60" /></div>}</div><div className="min-w-0 flex-1"><div className="flex items-center gap-1.5"><span className="truncate font-medium text-neutral-200" title={r}>{r}</span></div><span className="mt-0.5 block max-w-[130px] truncate text-[10px] text-neutral-500" title={e}>{e}</span></div></div><button type="button" onClick={() => {
                          y(t => ({
                            ...t,
                            newImages: t.newImages.filter(t => t !== e)
                          }));
                        }} disabled={f} className="rounded-lg p-1.5 text-neutral-500 transition hover:bg-red-500/10 hover:text-red-400 disabled:opacity-50" title="ลบรูปภาพนี้"><p.Trash2 className="h-4 w-4" /></button></div>;
                    })}</div></div> : <div className="flex min-h-0 flex-1 flex-col items-center justify-center rounded-lg border border-dashed border-neutral-800 py-6 text-center text-xs text-neutral-500"><I className="mb-1.5 h-7 w-7 text-neutral-600" />ยังไม่มีการเลือกรูปภาพ<span className="mt-0.5 text-[11px] text-neutral-600">(สามารถเลือกรูปภาพในภายหลังได้)</span></div>}</div></div></div><div className="flex flex-1 min-h-0 flex-col"><div className="flex flex-1 min-h-0 flex-col rounded-xl border border-neutral-800 bg-neutral-900/30"><div className="flex shrink-0 border-b border-neutral-800 bg-neutral-950/60 p-1"><button type="button" onClick={() => k("link")} className={`flex flex-1 items-center justify-center gap-2 rounded-md py-2 text-xs font-medium transition-all ${N === "link" ? "bg-neutral-800 text-white shadow-sm" : "text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200"}`}><F.Link className="h-3.5 w-3.5" />ลิงก์*{v.link.length > 0 ? <span className="h-1.5 w-1.5 rounded-full bg-purple-400" /> : E ? <span className="h-1.5 w-1.5 rounded-full bg-red-400" /> : null}</button><button type="button" onClick={() => k("content")} className={`flex flex-1 items-center justify-center gap-2 rounded-md py-2 text-xs font-medium transition-all ${N === "content" ? "bg-neutral-800 text-white shadow-sm" : "text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200"}`}><T className="h-3.5 w-3.5" />เนื้อหาโพสต์*{v.content.trim() ? <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> : P ? <span className="h-1.5 w-1.5 rounded-full bg-red-400" /> : null}</button><button type="button" onClick={() => k("comments")} className={`flex flex-1 items-center justify-center gap-2 rounded-md py-2 text-xs font-medium transition-all ${N === "comments" ? "bg-neutral-800 text-white shadow-sm" : "text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200"}`}><D.MessageSquare className="h-3.5 w-3.5" />คอมเมนต์{v.comments.trim() && <span className="h-1.5 w-1.5 rounded-full bg-green-400" />}</button></div><div className="flex min-h-0 flex-1 flex-col p-4">{N === "content" ? <div className="flex min-h-0 flex-1 flex-col"><div className="mb-1.5 flex shrink-0 items-center justify-between text-xs text-neutral-400"><span>ข้อความที่จะโพสต์ลงในกลุ่ม (ต้องมีเนื้อหา หรือรูปภาพ)</span>{v.content.includes("---") && <span className="text-[11px] text-blue-400">({(c = v.content) && c.includes("---") && c.split(/(?:^|\r?\n)\s*-{3,}\s*(?:\r?\n|$)/).map(e => e.trim()).filter(Boolean).length || 1} ชุดข้อความสุ่ม)</span>}</div><textarea placeholder="พิมพ์ข้อความสำหรับโพสต์ลงกลุ่ม... (ใช้ --- เพื่อคั่นสุ่มข้อความ หรือกดปุ่มด้านล่าง)" value={v.content} onChange={e => {
                    y(t => ({
                      ...t,
                      content: e.target.value
                    }));
                    if (P) {
                      R(null);
                    }
                  }} disabled={f} className={`
                        min-h-0
                        w-full
                        flex-1
                        resize-none
                        rounded-lg
                        border
                        ${P ? "border-red-500/60 focus:border-red-400" : "border-neutral-800 focus:border-blue-500"}
                        bg-neutral-900/90
                        p-3
                        text-sm
                        leading-normal
                        text-white
                        placeholder-neutral-500
                        outline-none
                        transition-colors
                        overflow-y-auto
                      `} /><button type="button" onClick={() => {
                    y(e => {
                      let t = e.content.trimEnd();
                      let s = t ? `${t}
---
` : "---\n";
                      return {
                        ...e,
                        content: s,
                        randomContent: true
                      };
                    });
                  }} disabled={f} className="mt-2.5 flex shrink-0 items-center justify-center gap-1.5 rounded-xl border border-dashed border-neutral-700/80 py-2 text-xs text-neutral-400 transition-all hover:border-blue-500/50 hover:bg-blue-500/5 hover:text-blue-300">+ เพิ่มชุดข้อความสุ่ม (---)</button>{P && <p className="mt-1 shrink-0 text-xs text-red-400">{P}</p>}</div> : N === "comments" ? <div className="flex min-h-0 flex-1 flex-col"><div className="mb-1.5 flex shrink-0 items-center justify-between text-xs text-neutral-400"><span>ข้อความคอมเมนต์ (จะใส่หรือไม่ใส่ก็ได้)</span><span className="text-[11px] text-neutral-500">{v.comments.length} ตัวอักษร</span></div><textarea placeholder="พิมพ์ข้อความคอมเมนต์ เช่น สนใจทักแชท, สอบถามรายละเอียดได้..." value={v.comments} onChange={e => y(t => ({
                    ...t,
                    comments: e.target.value
                  }))} disabled={f} className="\n                        min-h-0\n                        w-full\n                        flex-1\n                        resize-none\n                        rounded-lg\n                        border\n                        border-neutral-800\n                        bg-neutral-900/90\n                        p-3\n                        text-sm\n                        leading-normal\n                        text-white\n                        placeholder-neutral-500\n                        outline-none\n                        transition-colors\n                        focus:border-blue-500\n                        overflow-y-auto\n                      " /></div> : <div className="flex min-h-0 flex-1 flex-col"><div className="mb-1.5 flex shrink-0 items-center justify-between text-xs text-neutral-400"><span>รายการลิงก์เป้าหมาย (1 บรรทัดต่อ 1 ลิงก์)*</span><span className="text-[11px] text-neutral-500">ทั้งหมด {v.link.length} ลิงก์</span></div><textarea placeholder={`https://www.facebook.com/groups/123456789
https://www.facebook.com/groups/987654321`} value={v.linkText} onChange={e => {
                    let t = e.target.value;
                    let s = t.split(/\r?\n/).map(e => e.trim()).filter(Boolean);
                    y(e => ({
                      ...e,
                      linkText: t,
                      link: s
                    }));
                    if (E) {
                      L(null);
                    }
                  }} disabled={f} className={`
                        min-h-0
                        w-full
                        flex-1
                        resize-none
                        rounded-lg
                        border
                        ${E ? "border-red-500/60 focus:border-red-400" : "border-neutral-800 focus:border-blue-500"}
                        bg-neutral-900/90
                        p-3
                        font-mono
                        text-sm
                        leading-normal
                        text-white
                        placeholder-neutral-500
                        outline-none
                        transition-colors
                        overflow-y-auto
                      `} />{E && <p className="mt-1 shrink-0 text-xs text-red-400">{E}</p>}</div>}</div></div></div></div><div className="mt-4 flex shrink-0 items-center justify-between border-t border-neutral-800 pt-4"><div className="flex items-center gap-2"><_Component4 value={v.reaction} randomReaction={v.randomReaction} isOpen={_} onToggle={() => {
              C(e => !e);
              if (z) {
                S(false);
              }
            }} onClose={() => C(false)} onChange={e => y(t => ({
              ...t,
              reaction: e
            }))} disabled={f} /><K randomContent={v.randomContent} randomImage={v.randomImage} randomReaction={v.randomReaction} onChangeRandomContent={e => y(t => ({
              ...t,
              randomContent: e
            }))} onChangeRandomImage={e => y(t => ({
              ...t,
              randomImage: e
            }))} onChangeRandomReaction={e => y(t => ({
              ...t,
              randomReaction: e
            }))} isOpen={z} onToggle={() => {
              S(e => !e);
              if (_) {
                C(false);
              }
            }} onClose={() => S(false)} disabled={f} /></div><div className="flex items-center gap-3"><i.default type="button" variant="secondary" onClick={e} disabled={f}>ยกเลิก</i.default><i.default type="submit" variant="primary" disabled={f} className="gap-2">{f && <r.Loader2 className="h-4 w-4 animate-spin" />}{j ? "บันทึกการแก้ไข" : "สร้างกลุ่ม"}</i.default></div></div></form></div>;
  };
  let Z = () => () => {};
  let Q = ({
    isOpen: e,
    onClose: r,
    initialData: n,
    mode: a,
    userId: l,
    onSuccess: i
  }) => {
    let o = (0, s.useSyncExternalStore)(Z, () => true, () => false);
    if (!e || !o) {
      return null;
    }
    let d = (a ? a === "edit" : n?.id || n?.path) ? `edit-${n?.name || "group"}` : `create-${n?.name || "new"}-${n?.link?.length || 0}`;
    return (0, P.createPortal)(<div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6"><div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={r} /><Y onClose={r} initialData={n} mode={a} userId={l} onSuccess={i} key={d} /></div>, document.body);
  };
  let ee = {
    LIKE: {
      label: "ถูกใจ",
      emoji: "👍",
      badgeColor: "border-blue-500/30 bg-blue-500/15 text-blue-300"
    },
    LOVE: {
      label: "รักเลย",
      emoji: "❤️",
      badgeColor: "border-rose-500/30 bg-rose-500/15 text-rose-300"
    },
    CARE: {
      label: "ห่วงใย",
      emoji: "🥰",
      badgeColor: "border-amber-500/30 bg-amber-500/15 text-amber-300"
    },
    HAHA: {
      label: "ฮ่าๆ",
      emoji: "😂",
      badgeColor: "border-yellow-500/30 bg-yellow-500/15 text-yellow-300"
    },
    WOW: {
      label: "ว้าว",
      emoji: "😮",
      badgeColor: "border-amber-500/30 bg-amber-500/15 text-amber-300"
    },
    SAD: {
      label: "เศร้า",
      emoji: "😢",
      badgeColor: "border-sky-500/30 bg-sky-500/15 text-sky-300"
    },
    ANGRY: {
      label: "โกรธ",
      emoji: "😡",
      badgeColor: "border-orange-500/30 bg-orange-500/15 text-orange-300"
    }
  };
  let _Component5 = ({
    groupName: e,
    fileName: r,
    userId: n,
    totalImages: a,
    className: l = ""
  }) => {
    let {
      getImagePreview: i
    } = (0, M.default)();
    let [o, d] = (0, s.useState)(null);
    let [c, x] = (0, s.useState)(!!r);
    (0, s.useEffect)(() => {
      let t = true;
      if (!r) {
        d(null);
        x(false);
        return;
      }
      x(true);
      i({
        groupName: e,
        fileName: r,
        userId: n
      }).then(e => {
        if (t) {
          d(e);
          x(false);
        }
      }).catch(e => {
        console.error("Failed to load thumbnail:", e);
        if (t) {
          d(null);
          x(false);
        }
      });
      return () => {
        t = false;
      };
    }, [e, r, n, i]);
    return <div className={`relative aspect-square overflow-hidden rounded-xl border border-white/[0.12] bg-neutral-950 shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_6px_rgba(0,0,0,0.5)] ${l}`}>{c ? <div className="flex h-full w-full items-center justify-center bg-white/[0.02]"><div className="h-5 w-5 rounded-full border-2 border-white/20 border-t-blue-400 animate-spin" /></div> : o ? <t.Fragment><img src={o} alt={e} className="h-full w-full object-cover" />{a > 1 && <div className="absolute bottom-1 right-1 flex items-center gap-0.5 rounded-md bg-black/80 px-1 py-0.5 text-[9px] font-semibold text-white/90 shadow-sm backdrop-blur-xs"><I className="h-2.5 w-2.5" /><span>{a}</span></div>}</t.Fragment> : <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-gradient-to-b from-white/[0.04] to-transparent p-1 text-center text-neutral-500"><I className="h-4 w-4 text-neutral-600 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" /><span className="text-[9px] font-medium text-neutral-500 leading-tight">ไม่มีรูป</span></div>}</div>;
  };
  let _Component25 = ({
    searchQuery: e = "",
    userId: n
  } = {}) => {
    let a = (0, N.useParams)();
    let l = n ?? a?.id ?? undefined;
    let {
      toast: d,
      confirm: c
    } = (0, o.useToast)();
    let {
      groups: x,
      isLoading: m,
      statusFilter: h,
      isDeleting: b,
      fetchGroups: g,
      deleteGroup: f,
      toggleActiveGroup: w
    } = (0, M.default)();
    let [v, y] = (0, s.useState)(false);
    let [k, C] = (0, s.useState)(null);
    (0, s.useEffect)(() => {
      g(l);
    }, [l, g]);
    let I = async (e, t) => {
      try {
        let s = await w(e, l, t);
        if (s.success) {
          d.success(`กลุ่ม "${e}" ${s.isActive ? "เปิดใช้งาน (Active)" : "ปิดใช้งาน (Inactive)"} เรียบร้อยแล้ว`, "สถานะกลุ่ม");
        } else {
          d.error(s.message || "ไม่สามารถเปลี่ยนสถานะได้", "ข้อผิดพลาด");
        }
      } catch (e) {
        console.error("Failed to toggle active:", e);
        d.error("เกิดข้อผิดพลาดในการเปลี่ยนสถานะ", "ข้อผิดพลาด");
      }
    };
    let z = async e => {
      if (await c({
        title: "ยืนยันการลบกลุ่ม",
        message: `คุณแน่ใจหรือไม่ว่าต้องการลบกลุ่ม "${e}"? ข้อมูลโพสต์ คอมเมนต์ และรูปภาพทั้งหมดในกลุ่มนี้จะถูกลบอย่างถาวร`,
        confirmText: "ลบกลุ่ม",
        cancelText: "ยกเลิก",
        variant: "danger"
      })) {
        try {
          let t = await f(e, l);
          if (t?.success) {
            d.success(`ลบกลุ่ม "${e}" เรียบร้อยแล้ว`, "สำเร็จ");
          } else {
            d.error(t?.message || "ไม่สามารถลบกลุ่มได้", "ข้อผิดพลาด");
          }
        } catch (t) {
          let e = t instanceof Error ? t.message : "เกิดข้อผิดพลาดในการลบกลุ่ม";
          d.error(e, "ข้อผิดพลาด");
        }
      }
    };
    let $ = async e => {
      try {
        if (window.electronApi?.group?.openFolder) {
          let t = await window.electronApi.group.openFolder(e, l);
          if (t && !t.success && t.message) {
            d.error(t.message);
          }
        } else {
          d.info("คำสั่งเปิดโฟลเดอร์ทำงานได้เฉพาะบน Electron App");
        }
      } catch (e) {
        console.error("Failed to open folder:", e);
        d.error("ไม่สามารถเปิดโฟลเดอร์ได้");
      }
    };
    let E = (0, s.useMemo)(() => {
      let t = x;
      if (h === "active") {
        t = t.filter(e => e.isActive !== false);
      } else if (h === "inactive") {
        t = t.filter(e => e.isActive === false);
      }
      if (!e.trim()) {
        return t;
      }
      let s = e.toLowerCase().trim();
      return t.filter(e => {
        let t = e.name?.toLowerCase().includes(s);
        let r = e.content?.toLowerCase().includes(s);
        let n = e.link?.some(e => e.toLowerCase().includes(s));
        return t || r || n;
      });
    }, [x, h, e]);
    return <div className="min-h-full">{m ? <div className="flex min-h-[300px] w-full flex-col items-center justify-center gap-3 text-neutral-400"><r.Loader2 className="h-7 w-7 animate-spin text-blue-500" /><span className="text-sm font-medium">กำลังโหลดข้อมูลกลุ่ม...</span></div> : E.length === 0 ? <j.default icon={_} title="ไม่มีข้อมูลกลุ่ม" desc={e.trim() ? `ไม่พบกลุ่มที่ตรงกับคำค้นหา "${e}"` : h === "active" ? "ไม่มีกลุ่มที่เปิดใช้งานอยู่ในขณะนี้" : h === "inactive" ? "ไม่มีกลุ่มที่ปิดใช้งานอยู่ในขณะนี้" : "เริ่มต้นสร้างกลุ่มเพื่อจัดการข้อความโพสต์ รูปภาพ และลิงก์สำหรับบัญชีนี้"} minHeight="min-h-[400px]" action={<i.default type="button" onClick={() => {
        C(null);
        y(true);
      }} className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 cursor-pointer"><L className="h-4 w-4" />สร้างกลุ่มใหม่</i.default>} /> : <div className="min-h-full rounded-xl"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">{E.map(e => {
            let s = e.images && e.images.length > 0 ? e.images[0] : undefined;
            let r = e.reaction ? ee[e.reaction] : null;
            let n = e.isActive !== false;
            return <div onClick={() => void I(e.name, !n)} className={`
                    group relative flex flex-col justify-between overflow-hidden
                    rounded-2xl bg-neutral-950 p-4
                    border transition-all duration-300 ease-out
                    cursor-pointer select-none
                    ${n ? "border-white/[0.12] hover:border-emerald-400/40 shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]" : "border-rose-500/20 shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.05),inset_0_-1px_2px_rgba(0,0,0,0.5)] opacity-45 hover:opacity-75 blur-[0.6px] hover:blur-none"}
                    active:translate-y-[2px]
                    active:shadow-[0_3px_0_rgba(0,0,0,0.45),0_6px_12px_rgba(0,0,0,0.25)]
                  `} title={n ? `กลุ่ม "${e.name}" เปิดใช้งานอยู่ (คลิกที่การ์ดเพื่อปิด)` : `กลุ่ม "${e.name}" ปิดใช้งานอยู่ (คลิกที่การ์ดเพื่อเปิด)`} key={e.name}><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20" /><div className={`
                      pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full blur-2xl transition-all duration-300
                      ${n ? "bg-emerald-500/[0.05] group-hover:bg-emerald-500/[0.09]" : "bg-rose-500/[0.05] group-hover:bg-rose-500/[0.09]"}
                    `} /><div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/25 to-transparent" />{!n && <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-[1px] transition-all duration-300"><u.X className="h-20 w-20 text-rose-500 stroke-[2.5] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]" /></div>}<div className="relative z-10 flex items-start gap-3.5"><_Component5 groupName={e.name} fileName={s} userId={l} totalImages={e.imageCount || e.images?.length || 0} className="h-20 w-20 shrink-0" /><div className="flex min-w-0 flex-1 flex-col justify-between self-stretch py-0.5"><div><div className="flex items-start justify-between gap-2"><h3 className="min-w-0 truncate text-base font-semibold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)] transition-colors group-hover:text-blue-400" title={e.name}>{e.name}</h3><div className={`flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-0.5 shadow-sm ${n ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-emerald-500/10" : "border-rose-500/30 bg-rose-500/10 text-rose-400 shadow-rose-500/10"}`}><span className={`h-1.5 w-1.5 rounded-full ${n ? "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.7)]" : "bg-rose-400 shadow-[0_0_6px_rgba(251,113,133,0.6)]"}`} /><span className="text-[10px] font-semibold tracking-wide">{n ? "เปิดใช้งาน" : "ปิดใช้งาน"}</span></div></div></div><div className="mt-2 flex flex-wrap items-center gap-1.5">{e.link && e.link.length > 0 ? <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/25 bg-sky-500/10 px-2 py-0.5 text-[11px] font-medium text-sky-400 shadow-sm" title={e.link.join("\n")}><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400 shadow-[0_0_4px_rgba(56,189,248,0.6)]" /><span className="truncate">{e.link.length} ลิงก์</span></span> : <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-neutral-500"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-600" /><span>ไม่มีลิงก์</span></span>}{e.randomReaction ? <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 text-[11px] font-medium text-amber-300 shadow-sm" title="สุ่มรีแอคชันอัตโนมัติ (ไม่เอาโกรธ)"><span>🎲</span><span>สุ่มความรู้สึก</span></span> : r ? <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium shadow-sm ${r.badgeColor}`}><span>{r.emoji}</span><span>{r.label}</span></span> : null}{e.randomContent && <span className="inline-flex items-center gap-1 rounded-full border border-purple-500/30 bg-purple-500/15 px-2 py-0.5 text-[11px] font-medium text-purple-300 shadow-sm" title="สุ่มเนื้อหาตามตัวคั่น ---"><span>สุ่มเนื้อหา</span></span>}{e.randomImage && <span className="inline-flex items-center gap-1 rounded-full border border-indigo-500/30 bg-indigo-500/15 px-2 py-0.5 text-[11px] font-medium text-indigo-300 shadow-sm" title="สุ่ม 1 รูปภาพจากกลุ่ม"><span>สุ่ม 1 รูป</span></span>}</div></div></div><div className={`relative z-20 mt-3.5 border-t border-white/[0.08] pt-3 transition-all duration-300 ${!n ? "blur-sm opacity-35 pointer-events-none select-none" : ""}`} onClick={e => {
                if (n) {
                  e.stopPropagation();
                }
              }}><div className="flex items-center justify-between gap-2"><i.default type="button" onClick={t => {
                    t.stopPropagation();
                    C(e);
                    y(true);
                  }} variant="secondary" size="sm" className="flex-1 py-1.5 text-xs gap-1.5 cursor-pointer"><S className="h-3.5 w-3.5 text-neutral-300" />แก้ไข</i.default><i.default type="button" onClick={t => {
                    t.stopPropagation();
                    $(e.name);
                  }} title="เปิดโฟลเดอร์ใน Explorer" variant="secondary" size="sm" className="cursor-pointer"><A className="h-3.5 w-3.5 text-neutral-300" /></i.default><i.default type="button" onClick={t => {
                    t.stopPropagation();
                    z(e.name);
                  }} disabled={b} title="ลบกลุ่มนี้" variant="danger" size="sm" className="cursor-pointer"><p.Trash2 className="h-3.5 w-3.5" /></i.default></div></div></div>;
          })}</div></div>}<Q isOpen={v} onClose={() => {
        y(false);
        C(null);
      }} initialData={k} userId={l} onSuccess={() => void g(l)} /></div>;
  };
  var er = e.i(62980);
  let _Component17 = ({
    userId: e
  } = {}) => {
    let {
      isCreateDialogOpen: s,
      createPrefillData: r,
      openCreateDialog: n,
      closeCreateDialog: a
    } = (0, M.default)();
    let l = (0, N.useParams)();
    let o = e ?? l?.id ?? undefined;
    return <div><i.default variant="primary" onClick={() => n(null)} className="cursor-pointer gap-2"><L className="h-4 w-4" />สร้างกลุ่มใหม่</i.default><Q isOpen={s} onClose={a} initialData={r} mode="create" userId={o} /></div>;
  };
  let _Component16 = () => null;
  let el = {
    name: "wrench",
    size: 24,
    node: [["path", {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
      key: "1ngwbx"
    }]]
  };
  el.node;
  let _Component6 = (0, n.default)(el);
  let eo = {
    name: "clock-alert",
    size: 24,
    node: [["path", {
      d: "M12 6v6l4 2",
      key: "mmk7yg"
    }], ["path", {
      d: "M20 12v5",
      key: "12wsvk"
    }], ["path", {
      d: "M20 21h.01",
      key: "1p6o6n"
    }], ["path", {
      d: "M21.25 8.2A10 10 0 1 0 16 21.16",
      key: "17fp9f"
    }]]
  };
  eo.node;
  let _Component9 = (0, n.default)(eo);
  let ec = {
    name: "chevron-right",
    size: 24,
    node: [["path", {
      d: "m9 18 6-6-6-6",
      key: "mthhwq"
    }]]
  };
  ec.node;
  let _Component8 = (0, n.default)(ec);
  let em = [{
    id: "scan-joined-groups",
    title: "ค้นหากลุ่มที่เข้าร่วมแล้ว",
    description: "สแกนและดึงรายชื่อกลุ่ม Facebook ทั้งหมดที่บัญชีนี้เป็นสมาชิกอยู่ เพื่อนำเข้าสู่ระบบอัตโนมัติ",
    icon: v.Users,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    borderColor: "border-cyan-500/25",
    hoverBorder: "hover:border-cyan-500/40 hover:bg-cyan-500/[0.03]"
  }, {
    id: "delete-pending-groups",
    title: "ลบกลุ่มที่ติดอนุมัติ",
    description: "ตรวจสอบและลบลิงก์กลุ่มที่โพสต์แล้วขึ้นสถานะรออนุมัติ (Pending) หรือติดแอดมินออกจากระบบ",
    icon: _Component9,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    borderColor: "border-amber-500/25",
    hoverBorder: "hover:border-amber-500/40 hover:bg-amber-500/[0.03]"
  }];
  let _Component12 = ({
    isOpen: e,
    onClose: r,
    userId: n,
    onSelectTool: a
  }) => {
    let [l, d] = (0, s.useState)(false);
    let {
      toast: c
    } = (0, o.useToast)();
    (0, s.useEffect)(() => {
      d(true);
    }, []);
    (0, s.useEffect)(() => {
      let t = t => {
        if (t.key === "Escape" && e) {
          r();
        }
      };
      window.addEventListener("keydown", t);
      return () => window.removeEventListener("keydown", t);
    }, [e, r]);
    if (e && l) {
      return (0, P.createPortal)(<div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6"><div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={r} /><div role="dialog" aria-modal="true" aria-labelledby="tools-dialog-title" className="\n          relative z-10 flex w-full max-w-lg flex-col overflow-hidden\n          rounded-2xl border border-white/[0.12]\n          bg-neutral-950\n          shadow-[0_16px_48px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]\n          transition-all duration-200 ease-out\n        "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20" /><div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" /><div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4"><div className="flex items-center gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"><_Component6 className="h-5 w-5" /></div><div><div className="flex items-center gap-2"><h2 id="tools-dialog-title" className="text-base font-semibold text-white tracking-tight">เครื่องมือช่วยเหลือ</h2></div><p className="mt-0.5 text-xs text-neutral-400">เลือกเครื่องมือจัดการกลุ่มและฟังก์ชันอัตโนมัติสำหรับบัญชีนี้</p></div></div><button type="button" onClick={r} aria-label="Close dialog" className="\n              cursor-pointer\n              rounded-lg p-1.5 text-neutral-400\n              hover:bg-white/10 hover:text-white\n              active:scale-95 transition-all\n            "><u.X className="h-5 w-5" /></button></div><div className="flex flex-col gap-3 p-6"><p className="text-xs font-medium text-neutral-400 select-none">ฟังก์ชันการทำงานที่พร้อมใช้งาน:</p><div className="space-y-2.5">{em.map(e => {
                let _Component7 = e.icon;
                return <div onClick={() => {
                  if (a) {
                    a(e.id);
                  } else {
                    c.info(`ฟังก์ชัน "${e.title}" กำลังเตรียมพร้อมสำหรับการเชื่อมต่อระบบ`, "แจ้งเตือน");
                  }
                }} className={`
                    group relative
                    flex items-center justify-between gap-4
                    rounded-xl border border-white/[0.08]
                    bg-white/[0.02] p-4
                    shadow-[0_2px_0_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]
                    transition-all duration-200
                    cursor-pointer
                    hover:border-white/[0.2]
                    active:scale-[0.99]
                    ${e.hoverBorder}
                  `} key={e.id}><div className="flex items-start gap-3.5 min-w-0"><div className={`
                        flex h-10 w-10 shrink-0 items-center justify-center
                        rounded-xl border ${e.borderColor} ${e.iconBg}
                        shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]
                        transition-transform duration-200 group-hover:scale-105
                      `}><_Component7 className={`h-5 w-5 ${e.iconColor}`} /></div><div className="min-w-0"><div className="flex items-center gap-2"><h3 className="text-sm font-semibold text-neutral-100 tracking-tight group-hover:text-white transition-colors">{e.title}</h3></div><p className="mt-1 text-xs text-neutral-400 leading-relaxed">{e.description}</p></div></div><div className="shrink-0 text-neutral-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white"><_Component8 className="h-5 w-5" /></div></div>;
              })}</div></div><div className="flex items-center justify-end border-t border-white/[0.08] px-6 py-3.5 bg-neutral-900/30"><i.default type="button" variant="secondary" size="sm" onClick={r}>ปิดหน้าต่าง</i.default></div></div></div>, document.body);
    } else {
      return null;
    }
  };
  var eh = e.i(32705);
  var ep = e.i(55169);
  var eb = e.i(40702);
  var eg = e.i(85901);
  var ef = e.i(71798);
  var ej = e.i(14326);
  var ew = e.i(64282);
  let _Component0 = ({
    group: e,
    checked: s,
    onToggle: r
  }) => {
    let n = Array.isArray(e.link) ? e.link.length : 0;
    return <div onClick={r} className={`
        group/item relative flex items-center justify-between gap-3 p-3
        rounded-xl border text-xs cursor-pointer select-none
        transition-all duration-150
        ${s ? "bg-amber-500/[0.08] border-amber-500/30 text-amber-100 shadow-[inset_0_1px_0_rgba(245,158,11,0.15)]" : "bg-white/[0.02] border-white/[0.08] text-neutral-300 hover:bg-white/[0.04] hover:border-white/[0.16]"}
      `}><div className="flex items-center gap-3 min-w-0 flex-1"><div className={`
            flex h-4 w-4 shrink-0 items-center justify-center rounded-md border
            transition-all duration-150
            ${s ? "bg-amber-500 border-amber-400 text-neutral-950 shadow-sm" : "bg-neutral-900/80 border-white/20 group-hover/item:border-white/40"}
          `}>{s && <ep.Check className="h-3 w-3 stroke-[3]" />}</div><div className="flex items-center gap-2 min-w-0 flex-1"><_ className="h-3.5 w-3.5 shrink-0 text-neutral-500 group-hover/item:text-amber-400 transition-colors" /><span className="truncate font-medium text-neutral-200 group-hover/item:text-white">{e.name}</span></div></div><div className="flex items-center gap-2 shrink-0"><span className={`
            rounded-md px-1.5 py-0.5 text-[10px] font-semibold border
            ${e.isActive !== false ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-red-500/10 text-red-400 border-red-500/20"}
          `}>{e.isActive !== false ? "เปิดใช้งาน" : "ปิดใช้งาน"}</span><div className="flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-neutral-400"><F.Link className="h-2.5 w-2.5" /><span>{n} ลิงก์</span></div></div></div>;
  };
  let _Component13 = ({
    isOpen: e,
    onClose: n,
    userId: a
  }) => {
    let [l, d] = (0, s.useState)(false);
    let {
      toast: c
    } = (0, o.useToast)();
    let {
      groups: x,
      fetchGroups: h,
      isLoading: p
    } = (0, M.default)();
    let [b, g] = (0, s.useState)("");
    let [f, w] = (0, s.useState)([]);
    let [y, N] = (0, s.useState)(true);
    let [k, C] = (0, s.useState)(false);
    let [I, z] = (0, s.useState)(false);
    let [S, $] = (0, s.useState)("");
    let [A, E] = (0, s.useState)("");
    let [L, R] = (0, s.useState)(null);
    let [T, D] = (0, s.useState)([]);
    let [F, H] = (0, s.useState)(false);
    (0, s.useEffect)(() => {
      d(true);
    }, []);
    (0, s.useEffect)(() => {
      if (e) {
        if (a) {
          h(a);
        }
        C(false);
        z(false);
        $("");
        E("");
        R(null);
        D([]);
        g("");
        H(false);
      }
    }, [e, a, h]);
    (0, s.useEffect)(() => {
      if (e && x.length > 0) {
        w(x.map(e => e.name));
        N(true);
      }
    }, [e, x]);
    (0, s.useEffect)(() => {
      if (!e || !window.electronApi?.group?.onDeletePendingStatus) {
        return;
      }
      let t = window.electronApi.group.onDeletePendingStatus(e => {
        if (!e?.userId || !a || e.userId === a) {
          if (e?.message) {
            let t = String(e.message);
            D(e => [...e, t]);
            $(t);
            let s = function (e) {
              if (!e) {
                return "";
              }
              let t = e.replace(/^\[(DELETE-PENDING|INIT|INFO|SUCCESS|WARNING|ERROR)\]\s*/i, "").trim();
              if (t.includes("กำลังเปิดหน้าตรวจสอบโพสต์รออนุมัติ")) {
                return "กำลังเปิดหน้าตรวจสอบโพสต์รออนุมัติ...";
              }
              let s = t.match(/ตรวจพบโพสต์รออนุมัติ\s*(\d+)\s*โพสต์/);
              if (s) {
                return `ตรวจพบโพสต์รออนุมัติ ${s[1]} โพสต์`;
              }
              if (t.includes("ไม่มีโพสต์ค้างรออนุมัติ")) {
                return "ไม่มีโพสต์ค้างรออนุมัติในกลุ่มนี้";
              }
              let r = t.match(/กำลังคลิกลบโพสต์\s*(#\d+)?/);
              if (r) {
                return `กำลังส่งคำสั่งลบโพสต์ ${r[1] || ""}`.trim();
              }
              let n = t.match(/ลบโพสต์สำเร็จ\s*(#\d+)?/);
              if (n) {
                return `ลบโพสต์สำเร็จ ${n[1] || ""}`.trim();
              }
              if (t.includes("รีโหลดหน้าเพื่อตรวจสอบยืนยัน")) {
                return "รีโหลดตรวจสอบยืนยันโพสต์คงเหลือ...";
              }
              if (t.includes("เกลี้ยงสะอาด 100%")) {
                return "ตรวจสอบแล้ว ลบโพสต์ค้างเกลี้ยงสะอาด 100%";
              }
              let a = t.match(/สรุปกลุ่ม.*?ลบสำเร็จ:\s*(\d+).*?ข้อผิดพลาด:\s*(\d+)/);
              if (a) {
                return `สรุปกลุ่มนี้ ลบสำเร็จ ${a[1]} โพสต์`;
              } else if (t.includes("กำลังดำเนินการกลุ่ม")) {
                return "กำลังเข้าสู่กลุ่มเพื่อตรวจสอบโพสต์...";
              } else if (t.includes("กำลังเปิดเบราว์เซอร์")) {
                return "กำลังเปิดเบราว์เซอร์ในโหมดเบื้องหลัง...";
              } else if (t.includes("กำลังเตรียมระบบเบราว์เซอร์")) {
                return "กำลังเตรียมระบบเบราว์เซอร์...";
              } else if (t.includes("http://") || t.includes("https://")) {
                return t.replace(/https?:\/\/[^\s]+/g, "หน้ารายการโพสต์");
              } else {
                return t;
              }
            }(t);
            if (s) {
              E(s);
            }
            let r = t.match(/กำลังดำเนินการกลุ่ม\s*\[(\d+)\/(\d+)\]:\s*([^(]+?)(?:\s*\(ลิงก์\s*(\d+)\/(\d+)\))?$/);
            if (r) {
              let e = parseInt(r[1], 10);
              let t = parseInt(r[2], 10);
              let s = r[3].trim();
              let n = r[4] ? parseInt(r[4], 10) : 1;
              let a = r[5] ? parseInt(r[5], 10) : 1;
              R(r => ({
                name: s || r?.name || "กลุ่มเป้าหมาย",
                groupIndex: e,
                totalGroups: t,
                linkIndex: n,
                totalLinks: a
              }));
            }
          }
          if (e?.progress) {
            let t = e.progress;
            R(e => {
              let s = t.groupName || e?.name || "กลุ่มเป้าหมาย";
              let r = x.find(e => e.name === s);
              let n = Array.isArray(r?.link) ? r.link.length : 1;
              return {
                name: s,
                groupIndex: t.groupIndex ?? e?.groupIndex ?? 1,
                totalGroups: t.totalGroups ?? e?.totalGroups ?? f.length,
                linkIndex: t.linkIndex ?? t.current ?? e?.linkIndex ?? 1,
                totalLinks: t.totalLinks ?? t.total ?? n
              };
            });
          }
          if (e?.type === "completed" || e?.type === "done") {
            C(false);
            z(true);
            E("ลบโพสต์รออนุมัติเสร็จสิ้นเรียบร้อยแล้ว");
          } else if (e?.type === "exit" && e.code !== 0 && e.code !== undefined) {
            C(false);
            E("กระบวนการสิ้นสุด");
          } else if (e?.type === "error") {
            C(false);
            E("เกิดข้อผิดพลาดในการทำงาน");
          }
        }
      });
      return () => {
        t();
      };
    }, [e, a, x, f]);
    (0, s.useEffect)(() => {
      let t = t => {
        if (t.key === "Escape" && e) {
          B();
        }
      };
      window.addEventListener("keydown", t);
      return () => window.removeEventListener("keydown", t);
    }, [e, k]);
    let U = (0, s.useMemo)(() => {
      if (!b.trim()) {
        return x;
      }
      let e = b.toLowerCase().trim();
      return x.filter(t => t.name.toLowerCase().includes(e));
    }, [x, b]);
    let G = (0, s.useMemo)(() => x.filter(e => f.includes(e.name)).reduce((e, t) => e + (Array.isArray(t.link) ? t.link.length : 0), 0), [x, f]);
    let O = async () => {
      if (!a) {
        c.error("ไม่พบรหัสผู้ใช้ (User ID) ของบัญชีนี้", "ข้อผิดพลาด");
        return;
      }
      if (f.length === 0) {
        c.warning("กรุณาเลือกอย่างน้อย 1 กลุ่มเพื่อดำเนินการลบ", "แจ้งเตือน");
        return;
      }
      let e = x.filter(e => f.includes(e.name))[0];
      let t = Array.isArray(e?.link) ? e.link.length : 1;
      R({
        name: e?.name || f[0] || "กลุ่มเป้าหมาย",
        groupIndex: 1,
        totalGroups: Math.max(1, f.length),
        linkIndex: 1,
        totalLinks: Math.max(1, t)
      });
      C(true);
      z(false);
      D([]);
      $("กำลังส่งคำสั่งเริ่มต้นกระบวนการลบโพสต์รออนุมัติ...");
      E("กำลังเปิดเบราว์เซอร์เพื่อเริ่มกระบวนการ...");
      D([`[INIT] บัญชี UID: ${a}`, `[INIT] กำหนดเป้าหมาย ${f.length} กลุ่ม (${G} ลิงก์)`, "กำลังเริ่มโปรเซสเบื้องหลังเพื่อดำเนินการในเบราว์เซอร์..."]);
      try {
        if (window.electronApi?.group?.deletePending) {
          let e = await window.electronApi.group.deletePending({
            userId: a,
            groupNames: y ? null : f
          });
          if (!e.success) {
            c.error(e.message || "ไม่สามารถเริ่มการลบโพสต์ได้", "ข้อผิดพลาด");
            C(false);
          }
        } else {
          setTimeout(() => {
            E("กำลังตรวจสอบโพสต์รออนุมัติ...");
          }, 800);
          setTimeout(() => {
            D(e => [...e, "[INFO] เปิดผ่าน Web Preview (จำลองกระบวนการสำเร็จ)"]);
            $("กระบวนการจำลองเสร็จสิ้น");
            E("ลบโพสต์รออนุมัติเสร็จสิ้นเรียบร้อยแล้ว");
            C(false);
            z(true);
          }, 2000);
        }
      } catch (t) {
        let e = t instanceof Error ? t.message : "เกิดข้อผิดพลาดในการเชื่อมต่อระบบ";
        c.error(e, "ข้อผิดพลาด");
        C(false);
      }
    };
    let q = (0, s.useMemo)(() => {
      if (I) {
        return 100;
      }
      if (!L) {
        return !!k * 25;
      }
      let e = Math.max(1, L.totalLinks);
      return Math.min(92, Math.max(25, Math.round((Math.min(e, Math.max(1, L.linkIndex)) - 0.3) / e * 100)));
    }, [I, L, k]);
    let B = () => {
      if (k) {
        H(true);
      } else {
        n();
      }
    };
    let W = async () => {
      if (a && window.electronApi?.group?.abortDeletePending) {
        try {
          await window.electronApi.group.abortDeletePending(a);
        } catch (e) {
          console.error("Failed to abort delete pending:", e);
        }
      }
      C(false);
      H(false);
      n();
    };
    if (e && l) {
      return (0, P.createPortal)(<div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6"><div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={B} /><div role="dialog" aria-modal="true" aria-labelledby="pending-dialog-title" className={`
          relative z-10 flex w-full max-w-lg flex-col overflow-hidden
          rounded-2xl border border-white/[0.12]
          bg-neutral-950
          shadow-[0_16px_48px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]
          transition-all duration-300 ease-out
          ${!k && !I ? "h-[650px] max-h-[85vh]" : "max-h-[85vh]"}
        `}><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20" /><div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl" /><div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4 shrink-0"><div className="flex items-center gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"><_Component9 className="h-5 w-5" /></div><div><div className="flex items-center gap-2"><h2 id="pending-dialog-title" className="text-base font-semibold text-white tracking-tight">ลบกลุ่มที่ติดอนุมัติ</h2></div><p className="mt-0.5 text-xs text-neutral-400">เลือกกลุ่มเป้าหมายเพื่อสแกนและลบโพสต์ที่ยังไม่ได้รับอนุมัติออกจากกลุ่ม</p></div></div><button type="button" onClick={B} aria-label="Close dialog" className="\n              cursor-pointer\n              rounded-lg p-1.5 text-neutral-400\n              hover:bg-white/10 hover:text-white\n              active:scale-95 transition-all\n            "><u.X className="h-5 w-5" /></button></div><div className="p-6 flex flex-col gap-4 flex-1 min-h-0 overflow-hidden">{k || I ? <div className="flex flex-col gap-4 flex-1 justify-center py-2 min-h-0"><div className="\n                  group relative flex flex-col justify-between\n                  overflow-hidden rounded-2xl border border-white/[0.12]\n                  bg-neutral-950 p-4 select-none\n                  shadow-[0_8px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.12)]\n                  shrink-0\n                "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20 z-10" /><div className={`pointer-events-none absolute -left-6 -top-6 h-20 w-20 rounded-full blur-xl transition-all duration-500 ${I ? "bg-emerald-500/15" : k ? "bg-amber-500/15" : "bg-white/[0.04]"}`} /><div className="relative z-10 flex items-center justify-between gap-3"><div className="flex items-center gap-3 min-w-0"><div className={`
                        flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border
                        transition-all duration-300
                        ${I ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.2)]" : k ? "bg-amber-500/15 border-amber-500/30 text-amber-400 shadow-[0_0_16px_rgba(245,158,11,0.2)]" : "bg-neutral-900 border-white/[0.08] text-neutral-400"}
                      `}>{I ? <eb.CheckCircle2 className="h-5 w-5 stroke-[2.5]" /> : <_ className="h-5 w-5 stroke-[2.2]" />}</div><div className="flex flex-col min-w-0"><div className="flex items-center gap-2"><span className="truncate text-sm font-bold text-white tracking-wide">{L?.name || "กำลังเตรียมกลุ่ม..."}</span>{L && L.totalGroups > 1 && <span className="shrink-0 rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-medium text-neutral-400">กลุ่ม {L.groupIndex}/{L.totalGroups}</span>}</div><span className="text-[11px] text-neutral-400 flex items-center gap-1.5 mt-0.5"><v.Users className="h-3 w-3 text-neutral-500 shrink-0" /><span>เป้าหมายลบโพสต์รออนุมัติ</span></span></div></div><div className="shrink-0">{k ? <div className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 shadow-sm"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" /></span><span className="text-xs font-semibold text-amber-300">กำลังดำเนินการ</span></div> : I ? <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 shadow-sm"><eb.CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /><span className="text-xs font-semibold text-emerald-300">เสร็จสิ้น</span></div> : <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 shadow-sm"><ew.Square className="h-3 w-3 text-neutral-400" /><span className="text-xs font-semibold text-neutral-400">หยุดการทำงาน</span></div>}</div></div><div className="relative z-10 mt-3.5 mb-2.5 flex items-center justify-between gap-3"><div className="flex items-center gap-2 min-w-0 flex-1">{k ? <r.Loader2 className="h-3.5 w-3.5 animate-spin text-amber-400 shrink-0" /> : I ? <ep.Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" /> : <eg.AlertCircle className="h-3.5 w-3.5 text-neutral-400 shrink-0" />}<p className="truncate text-xs font-medium text-neutral-200">{A || S || "กำลังประมวลผล..."}</p></div><div className={`
                      flex items-center gap-1.5 shrink-0 rounded-lg border px-2.5 py-1 select-none font-mono
                      ${I ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" : "border-amber-500/30 bg-amber-500/10 text-amber-300"}
                    `}><span className="text-[10px] font-sans font-semibold text-neutral-400 tracking-wider">TASK</span><span className="text-xs font-bold">{L ? `${L.linkIndex} / ${L.totalLinks}` : "- / -"}</span><span className="text-[10px] font-sans text-neutral-400">ลิงก์</span></div></div><div className="\n                    relative h-3 w-full overflow-hidden rounded-full\n                    bg-neutral-900 border border-white/[0.08]\n                    shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]\n                  ">{k && <div className="pointer-events-none absolute inset-0 opacity-25 bg-[linear-gradient(90deg,transparent_0%,rgba(245,158,11,0.5)_50%,transparent_100%)] animate-progress-shimmer" />}<div style={{
                    width: `${q}%`
                  }} className={`
                      relative h-full transition-all duration-500 ease-out rounded-full
                      ${I ? "bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_14px_rgba(16,185,129,0.5)]" : "bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500 shadow-[0_0_14px_rgba(245,158,11,0.5)] animate-progress-flow"}
                    `}><div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-white/40" />{k && <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.45)_50%,transparent_100%)] animate-progress-shimmer" />}</div></div></div>{k && <button type="button" onClick={B} className="\n                    shrink-0 cursor-pointer\n                    flex w-full items-center justify-center gap-2\n                    rounded-xl border border-rose-400/30\n                    bg-gradient-to-b from-rose-500 to-rose-600\n                    hover:from-rose-400 hover:to-rose-500\n                    py-3 text-xs font-semibold text-white\n                    shadow-[0_4px_12px_rgba(244,63,94,0.25)]\n                    active:scale-[0.99] transition-all\n                  "><ew.Square className="h-4 w-4 fill-white text-white" /><span>หยุดการทำงาน</span></button>}</div> : <t.Fragment><div className="flex flex-col gap-3 rounded-xl border border-white/[0.08] bg-white/[0.015] p-3.5 flex-1 min-h-0"><div className="flex items-center justify-between shrink-0"><span className="text-xs font-semibold text-neutral-200">เลือกกลุ่มเป้าหมาย ({y ? "เลือกทั้งหมด" : `${f.length}/${x.length} กลุ่ม`})</span>{x.length > 0 && <button type="button" onClick={() => {
                    if (y) {
                      N(false);
                      w([]);
                    } else {
                      N(true);
                      w(x.map(e => e.name));
                    }
                  }} className="cursor-pointer text-[11px] font-medium text-amber-400 hover:text-amber-300 transition-colors">{y ? "ยกเลิกการเลือกทั้งหมด" : "เลือกกลุ่มทั้งหมด"}</button>}</div>{x.length > 3 && <div className="relative shrink-0"><m.Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-500" /><input type="text" value={b} onChange={e => g(e.target.value)} placeholder="ค้นหาชื่อกลุ่มในบัญชีนี้..." className="\n                        w-full rounded-lg border border-white/[0.08] bg-neutral-900/90\n                        py-1.5 pl-8 pr-3 text-xs text-neutral-200 placeholder-neutral-500\n                        focus:border-amber-500/40 focus:outline-none transition-all\n                      " /></div>}{p ? <div className="flex items-center justify-center flex-1 min-h-0 py-8 text-neutral-500 text-xs gap-2"><r.Loader2 className="h-4 w-4 animate-spin text-amber-400" />กำลังโหลดข้อมูลกลุ่ม...</div> : x.length === 0 ? <div className="py-2 flex-1 min-h-0 flex flex-col items-center justify-center"><j.default icon={_} title="ไม่พบกลุ่มในบัญชีนี้" desc="ยังไม่มีการสร้างกลุ่มหรือนำเข้ารายการกลุ่มสำหรับบัญชีนี้" minHeight="min-h-full" className="flex-1 min-h-0 w-full" /></div> : U.length === 0 ? <div className="py-6 text-center text-xs text-neutral-500 flex-1 min-h-0 flex items-center justify-center">ไม่พบกลุ่มที่ตรงกับคำค้นหา “{b}”</div> : <div className="flex-1 min-h-0 overflow-y-auto space-y-1.5 pr-1">{U.map(e => {
                    let s = f.includes(e.name);
                    return <_Component0 group={e} checked={s} onToggle={() => {
                      var t;
                      let s;
                      t = e.name;
                      w(s = f.includes(t) ? f.filter(e => e !== t) : [...f, t]);
                      N(s.length === x.length);
                      return;
                    }} key={e.name} />;
                  })}</div>}{x.length > 0 && <div className="flex items-center justify-between border-t border-white/[0.06] pt-2 text-[11px] text-neutral-400 shrink-0"><span>กลุ่มที่เลือก: {f.length} กลุ่ม</span><span>รวมทั้งหมด: {G} ลิงก์</span></div>}</div><button type="button" onClick={O} disabled={f.length === 0 || x.length === 0} className="\n                  shrink-0 cursor-pointer\n                  flex w-full items-center justify-center gap-2\n                  rounded-xl border border-amber-400/30\n                  bg-gradient-to-b from-amber-500 to-amber-600\n                  hover:from-amber-400 hover:to-amber-500\n                  py-3 text-xs font-semibold text-white\n                  shadow-[0_4px_12px_rgba(245,158,11,0.25)]\n                  active:scale-[0.99] transition-all\n                  disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100\n                "><eh.Play className="h-4 w-4 fill-white text-white" /><span>เริ่มการทำงาน</span></button></t.Fragment>}</div><div className="flex items-center justify-between border-t border-white/[0.08] px-6 py-3.5 bg-neutral-900/30 shrink-0">{I && <button type="button" onClick={() => {
              z(false);
              D([]);
            }} className="\n                cursor-pointer\n                flex items-center gap-1.5\n                rounded-lg border border-white/10 bg-white/[0.04]\n                px-3 py-1.5 text-xs font-medium text-neutral-300\n                hover:bg-white/[0.08] hover:text-white transition-all\n              "><ej.RotateCcw className="h-3.5 w-3.5" /><span>เลือกกลุ่มใหม่</span></button>}<div className="ml-auto"><i.default type="button" variant="secondary" size="sm" onClick={B}>{I ? "ปิดหน้าต่าง" : k ? "หยุดการทำงาน" : "ยกเลิก"}</i.default></div></div></div>{F && <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4" onClick={e => e.stopPropagation()}><div className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/[0.12] bg-neutral-950 shadow-2xl shadow-black"><div className="flex items-center gap-3 border-b border-white/[0.08] px-5 py-4"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-amber-400"><ef.AlertTriangle className="h-4 w-4" /></div><div><h4 className="text-sm font-semibold text-white">ยืนยันการหยุดทำงาน</h4><p className="mt-0.5 text-[10px] text-neutral-400">กระบวนการลบโพสต์กำลังดำเนินการอยู่</p></div></div><div className="px-5 py-4 text-xs leading-relaxed text-neutral-300">คุณแน่ใจหรือไม่ที่จะ <span className="font-semibold text-amber-400">หยุดการทำงาน</span> และปิดหน้าต่างนี้? ระบบจะยกเลิกกระบวนการที่กำลังทำงานอยู่ทันที</div><div className="flex items-center justify-end gap-2 border-t border-white/[0.08] bg-neutral-900/40 px-5 py-3.5"><i.default type="button" variant="secondary" size="sm" onClick={() => H(false)}>ดำเนินการต่อ</i.default><button type="button" onClick={W} className="\n                  cursor-pointer\n                  rounded-lg border border-amber-500/30 bg-amber-500\n                  px-3.5 py-1.5 text-xs font-semibold text-white\n                  hover:bg-amber-400 transition-all\n                ">ยืนยัน หยุดและปิด</button></div></div></div>}</div>, document.body);
    } else {
      return null;
    }
  };
  var eN = e.i(1880);
  var ek = e.i(16054);
  var e_ = e.i(6794);
  var eC = e.i(66700);
  let eI = {
    name: "folder-plus",
    size: 24,
    node: [["path", {
      d: "M12 10v6",
      key: "1bos4e"
    }], ["path", {
      d: "M9 13h6",
      key: "1uhe8q"
    }], ["path", {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }]]
  };
  eI.node;
  let _Component11 = (0, n.default)(eI);
  let eS = {
    name: "circle-stop",
    size: 24,
    node: [["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }], ["rect", {
      x: "9",
      y: "9",
      width: "6",
      height: "6",
      rx: "1",
      key: "1ssd4o"
    }]],
    aliases: ["stop-circle"]
  };
  eS.node;
  let _Component1 = (0, n.default)(eS);
  var eA = e.i(36158);
  let eE = {
    name: "lock",
    size: 24,
    node: [["rect", {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1"
    }], ["path", {
      d: "M7 11V7a5 5 0 0 1 10 0v4",
      key: "fwvmzm"
    }]]
  };
  eE.node;
  let _Component10 = (0, n.default)(eE);
  function eM(e) {
    if (e) {
      return e.normalize("NFKC").replace(/[\u200B-\u200D\uFEFF]/g, "").replace(/[\u0e47-\u0e4c]/g, "").replace(/[^\p{L}\p{N}\s]/gu, "").replace(/\s+/g, "").toLowerCase();
    } else {
      return "";
    }
  }
  let _Component14 = ({
    isOpen: e,
    onClose: n,
    userId: a
  }) => {
    let [l, d] = (0, s.useState)(false);
    let {
      toast: c
    } = (0, o.useToast)();
    let x = (0, M.default)(e => e.openCreateDialog);
    let [h, p] = (0, s.useState)([]);
    let [b, g] = (0, s.useState)(false);
    let [f, w] = (0, s.useState)("");
    let [y, N] = (0, s.useState)("");
    let [k, _] = (0, s.useState)(new Set());
    let [C, I] = (0, s.useState)("url");
    let [z, S] = (0, s.useState)(false);
    let [$, A] = (0, s.useState)(false);
    (0, s.useEffect)(() => {
      d(true);
    }, []);
    (0, s.useEffect)(() => {
      p([]);
      _(new Set());
      N("");
      w("");
      g(false);
      S(false);
      A(false);
    }, [e]);
    let E = () => {
      if (b && a && window.electronApi?.group?.abortGetJoined) {
        window.electronApi.group.abortGetJoined(a).catch(() => {});
      }
      p([]);
      _(new Set());
      N("");
      w("");
      g(false);
      S(false);
      A(false);
      n();
    };
    (0, s.useEffect)(() => {
      if (!e || !window.electronApi?.group?.onJoinedGroupsStatus) {
        return;
      }
      let t = window.electronApi.group.onJoinedGroupsStatus(e => {
        if (!e.userId || !a || String(e.userId) === String(a)) {
          if (e.type === "status" || e.type === "progress") {
            w(e.message || "กำลังประมวลผล...");
          } else if (e.type === "completed") {
            g(false);
            w("");
            if (Array.isArray(e.groups)) {
              p(e.groups);
              c.success(`ค้นพบกลุ่มที่เข้าร่วมแล้วทั้งหมด ${e.groups.length} กลุ่ม`, "สแกนสำเร็จ");
            }
          } else if (e.type === "error") {
            g(false);
            w("");
            c.error(e.message || "เกิดข้อผิดพลาดในการสแกนกลุ่ม", "ข้อผิดพลาด");
          } else if (e.type === "aborted") {
            g(false);
            w("");
            c.info("การสแกนกลุ่มถูกยกเลิกแล้ว", "แจ้งเตือน");
          }
        }
      });
      return () => {
        t();
      };
    }, [e, a, c]);
    (0, s.useEffect)(() => {
      let t = t => {
        if (t.key === "Escape" && e && !b) {
          E();
        }
      };
      window.addEventListener("keydown", t);
      return () => window.removeEventListener("keydown", t);
    }, [e, b]);
    let L = (0, s.useMemo)(() => {
      let e = eM(y);
      if (e) {
        return h.filter(t => {
          let s = eM(t.name);
          let r = (t.id || "").toLowerCase();
          return s.includes(e) || r.includes(e);
        });
      } else {
        return h;
      }
    }, [h, y]);
    let R = async () => {
      if (!a) {
        c.error("ไม่พบข้อมูลบัญชีผู้ใช้ (userId)", "ข้อผิดพลาด");
        return;
      }
      g(true);
      w("กำลังเปิดเบราว์เซอร์เพื่อสแกนกลุ่ม...");
      _(new Set());
      try {
        let e = await window.electronApi.group.getJoined({
          userId: a
        });
        if (!e.success) {
          g(false);
          w("");
          c.error(e.message || "ไม่สามารถเริ่มการสแกนกลุ่มได้", "ข้อผิดพลาด");
        }
      } catch (e) {
        g(false);
        w("");
        c.error(e?.message || "เกิดข้อผิดพลาดในการเชื่อมต่อ IPC", "ข้อผิดพลาด");
      }
    };
    let T = async () => {
      if (a) {
        try {
          await window.electronApi.group.abortGetJoined(a);
          c.info("กำลังส่งคำสั่งยกเลิก...", "ยกเลิก");
        } catch (e) {
          c.error(e?.message || "ไม่สามารถยกเลิกได้", "ข้อผิดพลาด");
        }
      }
    };
    if (e && l) {
      return (0, P.createPortal)(<div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6"><div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => {
          if (!b) {
            E();
          }
        }} /><div role="dialog" aria-modal="true" className="\n          relative z-10 flex w-full max-w-3xl h-[650px] max-h-[80vh] flex-col overflow-hidden\n          rounded-2xl border border-white/[0.12]\n          bg-neutral-950\n          shadow-[0_16px_48px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.12)]\n          transition-all duration-200 ease-out\n        "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20" /><div className="pointer-events-none absolute -left-12 -top-12 h-36 w-36 rounded-full bg-cyan-500/10 blur-2xl" /><div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4 shrink-0"><div className="flex items-center gap-3.5"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"><v.Users className="h-5 w-5" /></div><div><div className="flex items-center gap-2"><h2 className="text-base font-semibold text-white tracking-tight">ค้นหากลุ่มที่เข้าร่วมแล้ว</h2>{a && <span className="font-mono text-[10px] py-0.5 px-2 bg-cyan-500/10 text-cyan-400/80 border border-cyan-500/20 rounded-full">UID: {a}</span>}</div><p className="mt-0.5 text-xs text-neutral-400">สแกนและดึงรายชื่อกลุ่ม Facebook ทั้งหมดที่บัญชีนี้เป็นสมาชิกอยู่</p></div></div><button type="button" disabled={b} onClick={E} aria-label="Close dialog" className="\n              cursor-pointer rounded-lg p-1.5 text-neutral-400\n              hover:bg-white/10 hover:text-white\n              active:scale-95 transition-all disabled:opacity-30\n            "><u.X className="h-5 w-5" /></button></div><div className="flex flex-col gap-3.5 p-6 overflow-hidden flex-1 min-h-0"><div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between shrink-0"><div className="relative flex-1"><input type="text" value={y} onChange={e => N(e.target.value)} placeholder="พิมพ์ค้นหาชื่อกลุ่ม (มีหรือไม่มีวรรณยุกต์ก็ได้)..." className="\n                  w-full bg-neutral-900 border border-white/10 hover:border-white/20\n                  rounded-xl py-2 pl-3.5 pr-9 text-xs text-cyan-200 placeholder:text-neutral-500\n                  outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20\n                  transition-all\n                " />{y ? <button type="button" onClick={() => N("")} className="absolute right-2.5 top-2.5 text-neutral-500 hover:text-white cursor-pointer"><u.X className="h-4 w-4" /></button> : <m.Search className="absolute right-3 top-2.5 h-4 w-4 text-neutral-500 pointer-events-none" />}</div><div className="shrink-0 flex items-center gap-2">{b ? <i.default type="button" variant="danger" size="sm" onClick={T} className="gap-1.5 cursor-pointer text-xs"><_Component1 className="h-3.5 w-3.5" /><span>หยุดสแกน</span></i.default> : <i.default type="button" variant="primary" size="sm" onClick={R} className="gap-1.5 cursor-pointer text-xs bg-cyan-600 hover:bg-cyan-500 border-cyan-400/30 text-white"><eC.RefreshCw className="h-3.5 w-3.5" /><span>{h.length > 0 ? "สแกนใหม่อีกครั้ง" : "เริ่มสแกนจาก Facebook"}</span></i.default>}</div></div>{b ? <div className="flex-1 min-h-0 flex flex-col"><j.default icon={<r.Loader2 className="h-7 w-7 text-cyan-400 animate-spin" />} title={f || "กำลังเชื่อมต่อระบบและสแกนหน้ากลุ่ม Facebook..."} desc="ระบบกำลังเลื่อนหน้าจออัตโนมัติเบื้องหลัง คุณสามารถรอหรือกดปุ่มหยุดสแกนได้ตลอดเวลา" minHeight="min-h-full" className="flex-1 min-h-0 w-full" action={<i.default type="button" variant="danger" size="sm" onClick={T} className="gap-2 cursor-pointer border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20"><_Component1 className="h-4 w-4" /><span>หยุดสแกน</span></i.default>} /></div> : h.length === 0 ? <div className="flex-1 min-h-0 flex flex-col"><j.default icon={v.Users} iconColor="text-cyan-400" title="ยังไม่มีข้อมูลกลุ่มที่สแกน" desc="กดปุ่ม 'เริ่มสแกนจาก Facebook' ด้านบนเพื่อเปิดเบราว์เซอร์และดึงรายชื่อกลุ่มที่คุณเข้าร่วมแล้วทั้งหมด" minHeight="min-h-full" className="flex-1 min-h-0 w-full" action={<i.default type="button" variant="primary" size="sm" onClick={R} className="gap-2 cursor-pointer bg-cyan-600 hover:bg-cyan-500 border-cyan-400/30 text-white"><eC.RefreshCw className="h-3.5 w-3.5" /><span>เริ่มสแกนจาก Facebook</span></i.default>} /></div> : L.length === 0 ? <div className="flex-1 min-h-0 flex flex-col"><j.default icon={m.Search} iconColor="text-cyan-400" title="ไม่พบกลุ่มที่ตรงกับคำค้นหา" desc={`ไม่พบชื่อกลุ่มที่มีคำว่า "${y}" ในรายการที่สแกนได้`} minHeight="min-h-full" className="flex-1 min-h-0 w-full" action={<i.default type="button" variant="secondary" size="sm" onClick={() => N("")} className="gap-1.5 cursor-pointer"><u.X className="h-3.5 w-3.5" /><span>ล้างคำค้นหา</span></i.default>} /></div> : <div className="flex flex-col gap-2 flex-1 min-h-0 overflow-hidden"><div className="flex flex-wrap items-center justify-between gap-2 bg-neutral-900/60 border border-white/[0.08] rounded-xl px-3.5 py-2 text-xs shrink-0"><label className="flex items-center gap-2 cursor-pointer select-none"><div onClick={() => {
                    if (k.size === L.length) {
                      _(new Set());
                    } else {
                      _(new Set(L.map(e => e.id)));
                    }
                  }} className={`
                      flex h-4 w-4 shrink-0 items-center justify-center rounded-md border
                      transition-all
                      ${k.size === L.length && L.length > 0 ? "bg-cyan-500 border-cyan-400 text-neutral-950" : "bg-neutral-900 border-white/20 hover:border-white/40"}
                    `}>{k.size === L.length && L.length > 0 && <ep.Check className="h-3 w-3 stroke-[3]" />}</div><span className="text-[11px] font-medium text-neutral-300">เลือกทั้งหมด (พบ {L.length} กลุ่ม | เลือกแล้ว {k.size} กลุ่ม)</span></label><div className="flex items-center gap-2"><div className="relative"><button type="button" onClick={() => S(!z)} className="flex items-center gap-1.5 bg-neutral-950 border border-white/10 hover:border-white/20 rounded-lg px-2.5 py-1 text-[11px] text-neutral-300 cursor-pointer transition-all"><span>{C === "url" ? "ลิงก์ URL" : "Group ID"}</span><e_.ChevronDown className={`h-3 w-3 text-neutral-500 transition-transform ${z ? "rotate-180" : ""}`} /></button>{z && <t.Fragment><div className="fixed inset-0 z-20" onClick={() => S(false)} /><div className="absolute right-0 mt-1 z-30 w-28 rounded-lg border border-white/10 bg-neutral-950 p-1 shadow-xl flex flex-col gap-0.5"><button type="button" onClick={() => {
                          I("url");
                          S(false);
                        }} className={`px-2.5 py-1.5 text-left text-[11px] rounded cursor-pointer ${C === "url" ? "bg-cyan-500/10 text-cyan-300" : "text-neutral-400 hover:bg-white/5"}`}>ลิงก์ URL</button><button type="button" onClick={() => {
                          I("id");
                          S(false);
                        }} className={`px-2.5 py-1.5 text-left text-[11px] rounded cursor-pointer ${C === "id" ? "bg-cyan-500/10 text-cyan-300" : "text-neutral-400 hover:bg-white/5"}`}>Group ID</button></div></t.Fragment>}</div><button type="button" onClick={() => {
                    let e = h.filter(e => k.has(e.id));
                    if (e.length === 0) {
                      c.warning("กรุณาเลือกกลุ่มที่ต้องการคัดลอกอย่างน้อย 1 กลุ่ม", "แจ้งเตือน");
                      return;
                    }
                    let t = e.map(e => C === "id" ? e.id : e.url).join("\n");
                    navigator.clipboard.writeText(t);
                    A(true);
                    c.success(C === "id" ? `คัดลอก ID ทั้งหมด ${e.length} กลุ่มเรียบร้อยแล้ว` : `คัดลอกลิงก์ URL ทั้งหมด ${e.length} กลุ่มเรียบร้อยแล้ว`, "คัดลอกสำเร็จ");
                    setTimeout(() => A(false), 2000);
                  }} disabled={k.size === 0} className="\n                      flex items-center gap-1.5 px-3 py-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10\n                      text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 text-[11px] font-medium\n                      transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer\n                    ">{$ ? <ep.Check className="h-3 w-3 text-emerald-400" /> : <eN.Copy className="h-3 w-3" />}<span>คัดลอก ({k.size})</span></button></div></div><div className="flex flex-col gap-1.5 overflow-y-auto flex-1 min-h-0 pr-1">{L.map(e => {
                  let s = k.has(e.id);
                  return <div onClick={() => {
                    var t;
                    t = e.id;
                    _(e => {
                      let s = new Set(e);
                      if (s.has(t)) {
                        s.delete(t);
                      } else {
                        s.add(t);
                      }
                      return s;
                    });
                    return;
                  }} className={`
                        group relative flex items-center justify-between gap-3 p-3
                        rounded-xl border text-xs cursor-pointer select-none transition-all duration-150
                        ${s ? "bg-cyan-500/[0.04] border-cyan-500/30 shadow-[inset_0_1px_0_rgba(6,182,212,0.15)]" : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12]"}
                      `} key={e.id}><div className="flex items-center gap-3 min-w-0 flex-1"><div className={`
                            flex h-4 w-4 shrink-0 items-center justify-center rounded-md border
                            transition-all
                            ${s ? "bg-cyan-500 border-cyan-400 text-neutral-950" : "bg-neutral-900 border-white/20 group-hover:border-white/40"}
                          `}>{s && <ep.Check className="h-3 w-3 stroke-[3]" />}</div><div className="relative shrink-0">{e.avatar ? <img src={e.avatar} alt={e.name} className="h-9 w-9 rounded-lg object-cover border border-white/10" /> : <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-neutral-900 text-xs font-semibold text-neutral-400">{e.name.slice(0, 1).toUpperCase()}</div>}</div><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><span className="truncate font-semibold text-neutral-200 group-hover:text-white transition-colors">{e.name}</span></div><div className="flex items-center gap-2 mt-0.5 text-[10px] text-neutral-400">{e.privacy && <span className="flex items-center gap-1">{e.privacy.includes("สาธารณะ") || e.privacy.toLowerCase().includes("public") ? <eA.Globe className="h-3 w-3 text-cyan-400" /> : <_Component10 className="h-3 w-3 text-amber-400" />}<span>{e.privacy}</span></span>}{e.members && <span>• {e.members}</span>}<span className="font-mono text-neutral-500 truncate max-w-[120px]">ID: {e.id}</span></div></div></div><div className="shrink-0 flex items-center gap-1.5" onClick={e => e.stopPropagation()}><a href={e.url} target="_blank" rel="noreferrer" title="เปิดหน้ากลุ่มบนเบราว์เซอร์" className="\n                            p-1.5 rounded-lg border border-white/10 bg-neutral-900/80\n                            text-neutral-400 hover:text-cyan-400 hover:border-cyan-500/30\n                            transition-all cursor-pointer flex items-center justify-center\n                          "><ek.ExternalLink className="h-3.5 w-3.5" /></a></div></div>;
                })}</div></div>}</div><div className="flex items-center justify-between border-t border-white/[0.08] px-6 py-3.5 bg-neutral-900/40 shrink-0"><i.default type="button" variant="secondary" size="sm" disabled={b} onClick={E}>ปิดหน้าต่าง</i.default><i.default type="button" variant="primary" size="sm" disabled={k.size === 0 || b} onClick={() => {
              let e = h.filter(e => k.has(e.id));
              let t = e.map(e => e.url);
              if (t.length === 0) {
                c.warning("กรุณาเลือกกลุ่มที่ต้องการนำเข้าอย่างน้อย 1 กลุ่ม", "แจ้งเตือน");
                return;
              }
              let s = e.length === 1 ? e[0].name : `${e[0].name} (${e.length} กลุ่ม)`;
              E();
              x({
                name: s,
                link: t
              });
              c.success(`ส่งออก ${t.length} ลิงก์ไปยังหน้าสร้างกลุ่มเรียบร้อยแล้ว`, "ส่งออกสำเร็จ");
            }} className="gap-2 cursor-pointer bg-cyan-600 hover:bg-cyan-500 border-cyan-400/30 text-white disabled:opacity-40"><_Component11 className="h-4 w-4" /><span>ส่งออกไปยังสร้างกลุ่มใหม่ ({k.size})</span></i.default></div></div></div>, document.body);
    } else {
      return null;
    }
  };
  let _Component15 = ({
    userId: e
  } = {}) => {
    let [r, n] = (0, s.useState)(false);
    let [a, l] = (0, s.useState)(false);
    let [o, d] = (0, s.useState)(false);
    let c = (0, N.useParams)();
    let x = e ?? c?.id ?? undefined;
    return <div><i.default variant="secondary" onClick={() => n(true)} className="cursor-pointer gap-2"><_Component6 className="h-4 w-4" />เครื่องมือ</i.default><_Component12 isOpen={r} onClose={() => n(false)} userId={x} onSelectTool={e => {
        if (e === "delete-pending-groups") {
          n(false);
          l(true);
        } else if (e === "scan-joined-groups") {
          n(false);
          d(true);
        }
      }} /><_Component13 isOpen={a} onClose={() => l(false)} userId={x} /><_Component14 isOpen={o} onClose={() => d(false)} userId={x} /></div>;
  };
  let _Component24 = ({
    userId: e
  } = {}) => {
    let {
      groups: r,
      statusFilter: n,
      setStatusFilter: a
    } = (0, M.default)();
    let l = (0, s.useMemo)(() => {
      let e = 0;
      let t = 0;
      for (let s of r) {
        if (s.isActive !== false) {
          e++;
        } else {
          t++;
        }
      }
      return {
        all: r.length,
        active: e,
        inactive: t
      };
    }, [r]);
    let i = [{
      id: "all",
      label: "กลุ่มทั้งหมด",
      count: l.all,
      color: "blue"
    }, {
      id: "active",
      label: "เปิดใช้งาน",
      count: l.active,
      color: "emerald"
    }, {
      id: "inactive",
      label: "ปิดใช้งาน",
      count: l.inactive,
      color: "red"
    }];
    return <div className="flex items-center justify-between "><er.default options={i} value={n} onChange={a} /><div className="flex gap-3"><_Component15 userId={e} /><_Component16 /><_Component17 userId={e} /></div></div>;
  };
  let eD = {
    name: "upload",
    size: 24,
    node: [["path", {
      d: "M12 3v12",
      key: "1x0j5s"
    }], ["path", {
      d: "m17 8-5-5-5 5",
      key: "7q97r8"
    }], ["path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
      key: "ih7n3h"
    }]]
  };
  eD.node;
  let _Component19 = (0, n.default)(eD);
  let eH = {
    name: "camera",
    size: 24,
    node: [["path", {
      d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
      key: "18u6gg"
    }], ["circle", {
      cx: "12",
      cy: "13",
      r: "3",
      key: "1vg3eu"
    }]]
  };
  eH.node;
  let _Component18 = (0, n.default)(eH);
  var eG = e.i(7229);
  let _Component20 = ({
    onClose: e
  }) => {
    let {
      toast: n
    } = (0, o.useToast)();
    let {
      customProfileInitialData: a,
      selectAvatar: l,
      saveCustomProfile: c
    } = (0, d.default)();
    let x = !!a?.isEdit;
    let m = a?.name || "";
    let h = a?.userId || "";
    let b = a?.avatarPreview || a?.imagePath || null;
    let [g, f] = (0, s.useState)(m);
    let [j, w] = (0, s.useState)(h);
    let [v, y] = (0, s.useState)(a?.imagePath || null);
    let [N, k] = (0, s.useState)(b);
    let [_, C] = (0, s.useState)(false);
    let [z, S] = (0, s.useState)(false);
    let [$, A] = (0, s.useState)(null);
    let E = (0, s.useRef)(null);
    (0, s.useEffect)(() => {
      let t = t => {
        if (t.key === "Escape" && !_) {
          e();
        }
      };
      window.addEventListener("keydown", t);
      return () => window.removeEventListener("keydown", t);
    }, [_, e]);
    let L = async () => {
      try {
        A(null);
        let e = await l();
        if (e) {
          y(e.filePath);
          k(e.previewUrl || e.filePath);
        }
      } catch (e) {
        console.error("Failed to select avatar:", e);
        n.error("ไม่สามารถเปิดหน้าต่างเลือกรูปภาพได้");
      }
    };
    let M = async t => {
      t.preventDefault();
      A(null);
      if (!g.trim()) {
        A("กรุณาระบุชื่อโปรไฟล์");
        return;
      }
      C(true);
      try {
        let t = await c({
          name: g.trim(),
          userId: j.trim() || undefined,
          imagePath: v || undefined,
          isEdit: x,
          originalId: a?.originalId || (x ? h : undefined)
        });
        if (t?.success) {
          n.success(t.message || "บันทึกโปรไฟล์สำเร็จ", "สำเร็จ");
          e();
        } else {
          A(t?.message || "ไม่สามารถบันทึกโปรไฟล์ได้");
          n.error(t?.message || "ไม่สามารถบันทึกโปรไฟล์ได้", "ข้อผิดพลาด");
        }
      } catch (t) {
        let e = t instanceof Error ? t.message : "เกิดข้อผิดพลาดในการบันทึก";
        A(e);
        n.error(e, "ข้อผิดพลาด");
      } finally {
        C(false);
      }
    };
    return <div className="\n        relative z-10 w-full max-w-md\n        rounded-2xl border border-white/[0.12]\n        bg-neutral-950 p-6 text-white shadow-2xl\n        shadow-[0_16px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)]\n      "><div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-white/20" /><div className="pointer-events-none absolute -left-12 -top-12 h-36 w-36 rounded-full bg-blue-500/[0.08] blur-3xl" /><div className="flex items-center justify-between pb-4 border-b border-white/[0.08]"><div className="flex items-center gap-2.5"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/25 text-blue-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"><eG.Sparkles size={18} /></div><div><h3 className="text-base font-semibold text-white tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">{x ? "แก้ไขโปรไฟล์ (Custom Profile)" : "เพิ่มโปรไฟล์ (Custom Profile)"}</h3><p className="text-xs text-neutral-400">{x ? "ปรับแต่งชื่อและรูปภาพโปรไฟล์ของบัญชีนี้" : "กำหนดชื่อและรูปภาพโปรไฟล์ได้ตามต้องการ (ใส่ได้ 1 ภาพ)"}</p></div></div><button type="button" onClick={e} disabled={_} className="rounded-lg p-1.5 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-50 cursor-pointer"><u.X size={18} /></button></div><form onSubmit={M} className="mt-5 space-y-5"><div><div className="flex items-center justify-between mb-2"><label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">รูปภาพโปรไฟล์ (ใส่ได้ 1 ภาพ)</label><span className="text-[11px] font-medium text-blue-400/90 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">สูงสุด 1 ภาพ</span></div><div onDragOver={e => {
            e.preventDefault();
            S(true);
          }} onDragLeave={() => S(false)} onDrop={e => {
            e.preventDefault();
            S(false);
            A(null);
            let t = e.dataTransfer.files;
            if (!t || t.length === 0) {
              return;
            }
            let s = t[0];
            if (!s.type.startsWith("image/")) {
              A("กรุณาเลือกไฟล์รูปภาพเท่านั้น (.jpg, .jpeg, .png, .webp)");
              return;
            }
            let r = new FileReader();
            r.onload = () => {
              let e = r.result;
              y(e);
              k(e);
            };
            r.readAsDataURL(s);
          }} className={`
              relative flex flex-col items-center justify-center
              rounded-xl border-2 border-dashed p-4
              transition-all duration-200
              ${z ? "border-blue-400 bg-blue-500/[0.08]" : "border-white/[0.12] bg-neutral-900/60 hover:border-white/25 hover:bg-neutral-900"}
            `}>{N ? <div className="flex flex-col items-center gap-3"><div className="relative group/avatar"><div className="h-24 w-24 overflow-hidden rounded-2xl border-2 border-blue-500/40 shadow-[0_6px_16px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] bg-neutral-950"><img src={N} alt="Avatar Preview" className="h-full w-full object-cover" /></div><button type="button" onClick={L} title="เปลี่ยนรูปภาพ" className="\n                      absolute inset-0 flex flex-col items-center justify-center gap-1\n                      rounded-2xl bg-black/60 opacity-0 group-hover/avatar:opacity-100\n                      transition-opacity duration-150 backdrop-blur-xs cursor-pointer text-xs font-medium text-white\n                    "><_Component18 size={18} /><span>เปลี่ยนรูป</span></button></div><div className="flex items-center gap-2"><i.default type="button" variant="secondary" size="sm" onClick={L} disabled={_} className="gap-1.5 text-xs h-8"><_Component19 size={13} /><span>เลือกรูปใหม่</span></i.default><i.default type="button" variant="danger" size="sm" onClick={() => {
                  y(null);
                  k(null);
                  if (E.current) {
                    E.current.value = "";
                  }
                }} disabled={_} className="gap-1.5 text-xs h-8"><p.Trash2 size={13} /><span>ลบรูป</span></i.default></div></div> : <div className="flex flex-col items-center text-center"><div className="mb-2 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.12] bg-neutral-950/80 text-neutral-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"><I size={28} className="opacity-70" /></div><p className="text-xs font-medium text-neutral-200">ลากรูปภาพมาวางที่นี่ หรือคลิกปุ่มเพื่อเลือกรูป</p><p className="mt-1 text-[11px] text-neutral-400">รองรับ JPG, PNG, WEBP (ใส่ได้ 1 ภาพ)</p><div className="mt-3 flex items-center gap-2"><i.default type="button" variant="primary" size="sm" onClick={L} disabled={_} className="gap-1.5 text-xs h-8 cursor-pointer"><_Component19 size={13} /><span>เลือกรูปภาพ</span></i.default></div></div>}<input ref={E} type="file" accept="image/*" className="hidden" onChange={e => {
              let t = e.target.files;
              if (!t || t.length === 0) {
                return;
              }
              let s = t[0];
              if (!s.type.startsWith("image/")) {
                A("กรุณาเลือกไฟล์รูปภาพเท่านั้น");
                return;
              }
              let r = new FileReader();
              r.onload = () => {
                let e = r.result;
                y(e);
                k(e);
              };
              r.readAsDataURL(s);
            }} /></div></div><div><label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-300">ชื่อโปรไฟล์ / ชื่อบัญชี <span className="text-rose-400">*</span></label><div className="relative"><input type="text" required={true} placeholder="เช่น บัญชีหลัก, John Doe, ร้านค้าออนไลน์..." value={g} onChange={e => {
              f(e.target.value);
              if ($) {
                A(null);
              }
            }} disabled={_} className="\n                h-10 w-full rounded-xl border border-white/[0.12]\n                bg-neutral-900/90 px-3.5 text-sm text-white\n                placeholder-neutral-500 outline-none transition-all\n                focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50\n                shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]\n              " /></div></div><div><div className="flex items-center justify-between mb-1.5"><label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">Facebook UID / รหัสบัญชี</label><span className="text-[11px] text-neutral-500">{x ? "(ไม่สามารถเปลี่ยนรหัสได้)" : "(ไม่ใส่ก็ได้)"}</span></div><input type="text" placeholder={x ? j : "เช่น 1000847291823 หรือเว้นว่างให้ระบบสร้างอัตโนมัติ"} value={j} onChange={e => w(e.target.value)} disabled={_ || x} className="\n              h-10 w-full rounded-xl border border-white/[0.12]\n              bg-neutral-900/90 px-3.5 text-sm font-mono text-white\n              placeholder-neutral-500 outline-none transition-all\n              focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50\n              disabled:opacity-50 disabled:cursor-not-allowed\n              shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]\n            " />{!x && <p className="mt-1 text-[11px] text-neutral-500 leading-normal">หากเว้นว่างไว้ ระบบจะสร้างรหัสประจำตัวให้อัตโนมัติ (<span className="font-mono text-neutral-400">custom_...</span>)</p>}</div>{$ && <div className="rounded-lg bg-rose-500/10 border border-rose-500/25 px-3 py-2 text-xs text-rose-300">{$}</div>}<div className="flex items-center justify-end gap-3 pt-3 border-t border-white/[0.08]"><i.default type="button" variant="secondary" onClick={e} disabled={_} className="cursor-pointer">ยกเลิก</i.default><i.default type="submit" variant="primary" disabled={_} className="gap-2 cursor-pointer">{_ && <r.Loader2 className="h-4 w-4 animate-spin text-white" />}<span>{x ? "บันทึกการแก้ไข" : "บันทึกโปรไฟล์"}</span></i.default></div></form></div>;
  };
  let eq = () => () => {};
  let _Component27 = () => {
    let {
      isCustomProfileOpen: e,
      closeCustomProfile: r
    } = (0, d.default)();
    let n = (0, s.useSyncExternalStore)(eq, () => true, () => false);
    if (e && n) {
      return (0, P.createPortal)(<div className="fixed inset-0 z-[100] flex items-center justify-center p-4"><div className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity" onClick={r} /><_Component20 onClose={r} /></div>, document.body);
    } else {
      return null;
    }
  };
  e.s(["default", 0, () => {
    let [e, n] = (0, s.useState)("");
    let {
      accounts: a,
      selectedAccountId: l,
      setSelectedAccountId: i,
      isLoading: o
    } = (0, d.default)();
    (0, s.useEffect)(() => {
      if (!l && a.length > 0) {
        i(a[0].id);
      }
    }, [a, l, i]);
    let c = a.find(e => e.id === l);
    return <div className="grid h-full min-h-0 w-full grid-cols-12 gap-6"><div className="col-span-4 xl:col-span-3 flex flex-col min-h-0 border-r border-white/10 pr-6"><_Component21 count={a.length} /><_Component22 value={e} onChange={n} /><div className="flex-1 min-h-0 overflow-y-auto pr-1"><_Component23 searchQuery={e} selectedAccountId={l} onSelectAccount={e => i(e.id)} /></div></div><div className="col-span-8 xl:col-span-9 flex flex-col min-h-0 overflow-hidden">{c ? <t.Fragment><div className="mb-4 shrink-0"><_Component24 userId={c.id} /></div><div className="flex-1 min-h-0 overflow-y-auto pr-1"><_Component25 userId={c.id} /></div></t.Fragment> : o ? <div className="flex h-full w-full items-center justify-center"><div className="flex flex-col items-center gap-3 text-neutral-400"><r.Loader2 className="h-7 w-7 animate-spin text-blue-500" /><span className="text-sm font-medium">กำลังโหลดข้อมูล...</span></div></div> : <_Component26 hasAccounts={a.length > 0} />}</div><_Component27 /></div>;
  }], 37683);
}, 96649, (e, t, s) => {
  let r = ["LIKE", "LOVE", "CARE", "HAHA", "WOW", "SAD", "ANGRY"];
  function n(e) {
    if (!e) {
      return [];
    }
    let t = [];
    if (Array.isArray(e)) {
      t = e.map(e => typeof e == "string" ? e.trim() : e && typeof e == "object" && e.url ? String(e.url).trim() : "").filter(Boolean);
    } else if (typeof e == "string") {
      t = e.split(/\r?\n/).map(e => e.trim()).filter(Boolean);
    }
    return t;
  }
  function a(e = {}) {
    let t = 0;
    if (Array.isArray(e.images)) {
      t += e.images.filter(Boolean).length;
    }
    if (Array.isArray(e.newImages)) {
      t += e.newImages.filter(Boolean).length;
    }
    if (Array.isArray(e.existingImages)) {
      t += e.existingImages.filter(Boolean).length;
    }
    if (typeof e.imageCount == "number" && e.imageCount > 0) {
      t = Math.max(t, e.imageCount);
    }
    return t;
  }
  function l(e = {}) {
    let t = {};
    let s = e.name != null ? String(e.name).trim() : "";
    if (!s) {
      t.name = "กรุณาระบุชื่อกลุ่ม (Group name is required)";
    }
    let i = n(e.link !== undefined ? e.link : e.links);
    if (i.length === 0) {
      t.link = "กรุณาระบุลิงก์กลุ่มเป้าหมายอย่างน้อย 1 ลิงก์ (At least 1 group link is required)";
    }
    let o = e.content != null ? String(e.content).trim() : "";
    let d = a(e);
    if (!(o.length > 0) && !(d > 0)) {
      t.contentOrImage = "ต้องระบุข้อความโพสต์ (Content) หรือรูปภาพ (Image) อย่างน้อย 1 อย่าง";
    }
    let c = "";
    if (e.reaction != null && String(e.reaction).trim() !== "") {
      let s = String(e.reaction).trim().toUpperCase();
      if (r.includes(s)) {
        c = s;
      } else {
        t.reaction = `Reaction ไม่ถูกต้อง (รองรับ: ${r.join(", ")})`;
      }
    }
    let x = "";
    if (e.comments != null) {
      x = String(e.comments).trim();
    } else if (e.comment != null) {
      x = String(e.comment).trim();
    }
    let m = Object.keys(t).length === 0;
    let u = t.name || t.link || t.contentOrImage || t.reaction || "";
    return {
      isValid: m,
      errors: t,
      message: u,
      sanitizedData: {
        name: s,
        links: i,
        content: o,
        comments: x,
        reaction: c,
        images: Array.isArray(e.images) ? e.images : [],
        existingImages: Array.isArray(e.existingImages) ? e.existingImages : [],
        newImages: Array.isArray(e.newImages) ? e.newImages : [],
        totalImagesCount: d,
        randomContent: !!e.randomContent,
        randomImage: !!e.randomImage,
        randomReaction: !!e.randomReaction
      }
    };
  }
  t.exports = {
    validateGroup: l,
    isValidGroup: function (e) {
      return l(e).isValid;
    },
    ALLOWED_REACTIONS: r,
    extractValidLinks: n,
    countTotalImages: a
  };
  t.exports.default = l;
}]);
