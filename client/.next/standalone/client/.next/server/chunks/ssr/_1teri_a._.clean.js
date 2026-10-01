module.exports = [43114, a => {
  "use strict";

  var b = a.i(16547);
  var c = a.i(9651);
  var d = a.i(76950);
  var e = a.i(1441);
  let f = {
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
  f.node;
  let _Component = (0, e.default)(f);
  var h = a.i(15723);
  var i = a.i(22370);
  var j = a.i(13320);
  let _Component2 = ({
    onAccountAdded: a,
    className: e = ""
  }) => {
    let {
      toast: f
    } = (0, i.useToast)();
    let {
      isAdding: k,
      startAddingAccount: l,
      stopAddingAccount: m,
      initAccountListeners: n
    } = (0, j.default)();
    (0, c.useEffect)(() => {
      let b = n(b => {
        if (b?.success) {
          f.success("เพิ่มบัญชีเรียบร้อย!", "สำเร็จ");
          a?.();
        } else if (b?.code === null) {
          f.info("ยกเลิกการล็อกอิน", "แจ้งเตือน");
        } else {
          f.error(b?.message || "การล็อกอินไม่สำเร็จ", "ข้อผิดพลาด");
        }
      });
      return () => {
        b();
      };
    }, [n, a, f]);
    let o = async () => {
      if (k) {
        let a = await m();
        if (a.status === "stopped" || a.status === "not_running") {
          f.info("ยกเลิกกระบวนการแล้ว", "แจ้งเตือน");
        }
      } else {
        let a = await l();
        if (a.status !== "started" && a.status !== "already_running") {
          f.error(a.message || "ไม่สามารถเปิดระบบล็อกอินได้", "ข้อผิดพลาด");
        }
      }
    };
    return <div className={`relative flex items-center gap-3 ${e}`}><h.default variant={k ? "danger" : "primary"} onClick={o} className="cursor-pointer gap-2">{k ? <b.Fragment><d.Loader2 size={16} className="animate-spin text-white" /><span>หยุดการทำงาน</span></b.Fragment> : <b.Fragment><_Component size={16} /><span>เพิ่มบัญชี</span></b.Fragment>}</h.default></div>;
  };
  let _Component21 = ({
    count: a
  }) => <div className="flex items-center justify-between gap-2 mb-3"><div className="flex items-center gap-2"><h2 className="text-base font-semibold text-white">บัญชีผู้ใช้</h2><span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-neutral-300">{a}</span></div><_Component2 /></div>;
  var m = a.i(90257);
  var n = a.i(38169);
  let _Component22 = ({
    value: a,
    onChange: c,
    placeholder: d = "ค้นหาชื่อ หรือ ID...",
    className: e = ""
  }) => <div className={`mb-3 ${e}`}><div className="relative flex items-center h-9 w-full rounded-lg border border-white/10 bg-white/5 px-3 focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/20 transition-all"><m.Search size={14} className="text-neutral-400 shrink-0 mr-2" /><input type="text" value={a} onChange={a => c(a.target.value)} placeholder={d} className="h-full w-full bg-transparent text-xs text-white placeholder:text-neutral-500 outline-none" />{a && <button type="button" onClick={() => c("")} className="text-neutral-400 hover:text-white text-xs cursor-pointer"><n.X size={12} /></button>}</div></div>;
  var p = a.i(18032);
  var q = a.i(79162);
  let r = {
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
  r.node;
  let _Component3 = (0, e.default)(r);
  var t = a.i(3322);
  let _Component23 = ({
    searchQuery: a = "",
    selectedAccountId: e,
    onSelectAccount: f
  }) => {
    let {
      toast: g,
      confirm: h
    } = (0, i.useToast)();
    let {
      accounts: k,
      isLoading: l,
      deletingId: m,
      fetchAccounts: n,
      deleteAccount: o,
      initAccountListeners: r,
      openCustomProfile: u
    } = (0, j.default)();
    (0, c.useEffect)(() => {
      n();
      let a = r();
      return () => {
        a();
      };
    }, [n, r]);
    let v = async (a, b) => {
      if (!(await h({
        title: "ยืนยันการลบบัญชี",
        message: `คุณแน่ใจหรือไม่ว่าต้องการลบบัญชี "${b}" (ID: ${a})? ข้อมูลและเซสชันทั้งหมดจะถูกลบอย่างถาวร`,
        confirmText: "ลบบัญชี",
        cancelText: "ยกเลิก",
        variant: "danger"
      }))) {
        return;
      }
      let c = await o(a);
      if (c?.success) {
        g.success(`ลบบัญชี "${b}" เรียบร้อยแล้ว`, "สำเร็จ");
      } else {
        g.error(c?.message || "ไม่สามารถลบบัญชีได้", "ข้อผิดพลาด");
      }
    };
    let w = k.filter(b => {
      if (!a.trim()) {
        return true;
      }
      let c = a.toLowerCase().trim();
      let d = b.name?.toLowerCase().includes(c);
      let e = String(b.fbId || b.id || "").includes(c);
      return d || e;
    });
    if (l) {
      return <div className="flex h-48 w-full flex-col items-center justify-center gap-3 text-neutral-400"><d.Loader2 className="h-6 w-6 animate-spin text-blue-500" /><span className="text-xs font-medium">กำลังโหลดรายชื่อบัญชี...</span></div>;
    } else if (k.length === 0) {
      return <t.default icon={q.User} title="ยังไม่มีบัญชีในระบบ" desc={<b.Fragment>กดปุ่ม <span className="font-semibold text-blue-400">เพิ่มบัญชี</span> ด้านบนเพื่อเชื่อมต่อบัญชี Facebook</b.Fragment>} minHeight="min-h-[220px]" />;
    } else if (w.length === 0) {
      return <t.default title={<b.Fragment>ไม่พบบัญชีที่ตรงกับคำค้นหา “<span className="text-white font-medium">{a}</span>”</b.Fragment>} minHeight="min-h-[140px]" />;
    } else {
      return <div className="flex flex-col gap-3">{w.map(a => {
          let c = a.avatarLocal || a.avatar;
          let g = m === a.id;
          let h = e === a.id;
          return <div onClick={() => f?.(a)} className={`
              group relative overflow-hidden flex items-center justify-between
              rounded-2xl bg-neutral-950 p-3.5
              border transition-all duration-200 ease-out
              cursor-pointer select-none
              ${h ? "border-blue-500/50 shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(0,0,0,0.5)]" : "border-white/[0.12] hover:border-white/25 shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.5)]"}
              active:translate-y-[2px]
              active:shadow-[0_3px_0_rgba(0,0,0,0.45),0_6px_12px_rgba(0,0,0,0.25)]
            `} key={a.id}><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20" /><div className={`
                pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full blur-2xl transition-all duration-300
                ${h ? "bg-blue-500/[0.08] group-hover:bg-blue-500/[0.14]" : "bg-white/[0.03] group-hover:bg-white/[0.06]"}
              `} />{h && <div className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />}<div className="relative z-10 flex min-w-0 flex-1 items-center gap-3 pl-1"><div className={`
                  flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl
                  border bg-neutral-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.4)]
                  ${h ? "border-blue-400/60 ring-2 ring-blue-500/25" : "border-white/[0.12] group-hover:border-white/20"}
                `}>{c ? <img src={c} alt={a.name} className="h-full w-full object-cover" onError={a => {
                  a.currentTarget.style.display = "none";
                }} /> : <q.User size={20} className="text-neutral-400" />}</div><div className="min-w-0 flex-1"><h4 className={`truncate text-sm font-semibold tracking-tight transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)] ${h ? "text-white" : "text-neutral-200 group-hover:text-blue-400"}`} title={a.name}>{a.name}</h4><p className="mt-0.5 truncate text-xs text-neutral-400 font-mono" title={`ID: ${a.fbId || a.id}`}>ID: {a.fbId || a.id}</p></div></div><div className="relative z-20 ml-2 flex shrink-0 items-center gap-1"><button type="button" onClick={b => {
                b.stopPropagation();
                u({
                  userId: a.id,
                  name: a.name,
                  originalId: a.id,
                  isEdit: true,
                  avatarPreview: c || undefined
                });
              }} title="Custom Profile (ใส่ภาพ และ ชื่อ)" className="\n                  flex h-7 w-7 items-center justify-center rounded-lg border border-transparent\n                  text-neutral-400 transition-all duration-150\n                  hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400\n                  cursor-pointer\n                "><_Component3 size={14} /></button><button type="button" onClick={b => {
                b.stopPropagation();
                v(a.id, a.name);
              }} disabled={g} title="ลบบัญชีนี้" className="\n                  flex h-7 w-7 items-center justify-center rounded-lg border border-transparent\n                  text-neutral-400 transition-all duration-150\n                  hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400\n                  disabled:opacity-40 cursor-pointer\n                ">{g ? <d.Loader2 size={14} className="animate-spin text-red-400" /> : <p.Trash2 size={14} />}</button></div><div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black/25 to-transparent" /></div>;
        })}</div>;
    }
  };
  var v = a.i(55667);
  let _Component26 = ({
    hasAccounts: a
  }) => <t.default icon={v.Users} iconColor="text-neutral-400" title={a ? "กรุณาเลือกบัญชีผู้ใช้" : "ยังไม่มีบัญชีในระบบ"} desc={a ? "เลือกบัญชีจากรายชื่อฝั่งซ้ายเพื่อดูและจัดการข้อมูลกลุ่มสำหรับโพสต์อัตโนมัติ" : "คลิกปุ่ม \"เพิ่มบัญชี\" ที่ฝั่งซ้ายเพื่อเริ่มต้นเชื่อมต่อบัญชี Facebook"} minHeight="min-h-full" />;
  var x = a.i(54949);
  let y = {
    name: "folder",
    size: 24,
    node: [["path", {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }]]
  };
  y.node;
  let _Component8 = (0, e.default)(y);
  let A = {
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
  A.node;
  let B = (0, e.default)(A);
  let C = {
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
  C.node;
  let D = (0, e.default)(C);
  let E = {
    name: "folder-open",
    size: 24,
    node: [["path", {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }]]
  };
  E.node;
  let F = (0, e.default)(E);
  let G = {
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
  G.node;
  let H = (0, e.default)(G);
  var I = a.i(88115);
  var J = a.i(10652);
  let K = {
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
  K.node;
  let L = (0, e.default)(K);
  var M = a.i(76396);
  var N = a.i(68606);
  let O = ({
    label: a,
    className: c = "",
    ...d
  }) => <div className="flex flex-col gap-1.5">{a && <label className="text-sm font-medium text-neutral-300">{a}</label>}<input {...d} className={`h-9 w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-blue-500 ${c}`} /></div>;
  var P = a.i(44203);
  var Q = a.i(84877);
  let R = [{
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
  let S = ({
    value: a,
    randomReaction: c = false,
    isOpen: d,
    onToggle: e,
    onClose: f,
    onChange: g,
    disabled: h = false
  }) => {
    let i = R.find(b => b.type === a);
    return <div className="relative"><button type="button" onClick={e} disabled={h} className={`
          flex h-9 items-center gap-2
          rounded-md
          border
          px-3
          text-xs font-medium
          transition-all duration-200
          active:scale-[0.97]
          ${c ? "border-amber-500/40 bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30" : i ? i.activeColor : `
                border-white/[0.08]
                bg-white/[0.04]
                text-neutral-300
                hover:border-white/[0.12]
                hover:bg-white/[0.07]
                hover:text-white
              `}
        `}>{c ? <b.Fragment><span>สุ่มรีแอคชัน</span></b.Fragment> : i ? <b.Fragment><span className="text-base leading-none">{i.emoji}</span><span>{i.label}</span></b.Fragment> : <span>เลือกรีแอคชัน</span>}<Q.ChevronUp className={`
            ml-0.5
            h-3.5
            w-3.5
            text-neutral-500
            transition-transform
            duration-200
            ${d ? "rotate-180" : ""}
          `} /></button>{d && <b.Fragment><div className="fixed inset-0 z-20" onClick={f} /><div className="\n              absolute\n              bottom-full\n              left-0\n              z-30\n              mb-2\n              flex\n              items-center\n              gap-1\n              rounded-2xl\n              border\n              border-white/[0.08]\n              bg-neutral-900/90\n              p-1.5\n              shadow-[0_12px_35px_rgba(0,0,0,0.45)]\n              backdrop-blur-2xl\n              animate-in\n              fade-in\n              slide-in-from-bottom-1\n              duration-150\n            ">{R.map(c => {
            let d = a === c.type;
            return <button type="button" onClick={() => {
              var b;
              g(a === (b = c.type) ? "" : b);
              f();
            }} title={c.label} className={`
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
                    ${d ? `
                          bg-white/[0.10]
                          ring-1
                          ring-white/[0.12]
                        ` : ""}
                  `} key={c.type}><span className={`
                      leading-none
                      transition-transform
                      duration-150
                      ${d ? "scale-110" : "group-hover/reaction:scale-110"}
                    `}>{c.emoji}</span>{d && <span className="\n                        absolute\n                        bottom-1\n                        h-1\n                        w-1\n                        rounded-full\n                        bg-blue-400\n                        shadow-[0_0_6px_rgba(96,165,250,0.8)]\n                      " />}</button>;
          })}{a && <div className="mx-1 h-6 w-px bg-white/[0.08]" />}{a && <button type="button" onClick={() => {
            g("");
            f();
          }} title="ล้างรีแอคชัน" className="\n                  flex\n                  h-10\n                  w-10\n                  items-center\n                  justify-center\n                  rounded-xl\n                  text-neutral-500\n                  transition-all\n                  duration-150\n                  hover:bg-red-500/10\n                  hover:text-red-400\n                  active:scale-90\n                "><n.X className="h-4 w-4" strokeWidth={1.8} /></button>}</div></b.Fragment>}</div>;
  };
  let T = {
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
  T.node;
  let U = (0, e.default)(T);
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
  let W = (0, e.default)(V);
  var X = a.i(56663);
  let Y = ({
    randomContent: a,
    randomImage: c,
    randomReaction: d,
    onChangeRandomContent: e,
    onChangeRandomImage: f,
    onChangeRandomReaction: g,
    isOpen: h,
    onToggle: i,
    onClose: j,
    disabled: k = false
  }) => {
    let l = a || c || d;
    return <div className="relative"><button type="button" onClick={i} disabled={k} className={`
          flex h-9 items-center gap-2
          rounded-md
          border
          px-3
          text-xs font-medium
          transition-all duration-200
          active:scale-[0.97]
          ${l ? "border-blue-500/50 bg-blue-600/15 text-blue-300 ring-1 ring-blue-500/30" : `
                border-white/[0.08]
                bg-white/[0.04]
                text-neutral-300
                hover:border-white/[0.12]
                hover:bg-white/[0.07]
                hover:text-white
              `}
        `}><span>ตั้งค่ากลุ่ม</span><Q.ChevronUp className={`
            ml-0.5
            h-3.5
            w-3.5
            text-neutral-500
            transition-transform
            duration-200
            ${h ? "rotate-180" : ""}
          `} /></button>{h && <b.Fragment><div className="fixed inset-0 z-20" onClick={j} /><div className="\n              absolute\n              bottom-full\n              left-0\n              z-30\n              mb-2\n              w-72\n              rounded-2xl\n              border\n              border-white/[0.08]\n              bg-neutral-900/95\n              p-4\n              shadow-[0_12px_35px_rgba(0,0,0,0.55)]\n              backdrop-blur-2xl\n              animate-in\n              fade-in\n              slide-in-from-bottom-1\n              duration-150\n            "><div className="flex flex-col gap-4"><div className="flex items-center justify-between gap-4"><div className="flex min-w-0 items-center gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-neutral-900 text-neutral-300"><U size={18} strokeWidth={1.8} /></div><div className="flex min-w-0 flex-col gap-0.5"><span className="text-xs font-medium text-neutral-200">สุ่มเนื้อหา</span><span className="text-[10px] leading-4 text-neutral-400">สุ่มชุดข้อความในแต่ละโพสต์</span></div></div><X.default checked={a} onChange={e} /></div><div className="flex items-center justify-between gap-4"><div className="flex min-w-0 items-center gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-neutral-900 text-neutral-300"><B size={18} strokeWidth={1.8} /></div><div className="flex min-w-0 flex-col gap-0.5"><span className="text-xs font-medium text-neutral-200">สุ่มรูปภาพ</span><span className="text-[10px] leading-4 text-neutral-400">สุ่มภาพจากทั้งหมด</span></div></div><X.default checked={c} onChange={f} /></div><div className="flex items-center justify-between gap-4"><div className="flex min-w-0 items-center gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-neutral-900 text-neutral-300"><W size={18} strokeWidth={1.8} /></div><div className="flex min-w-0 flex-col gap-0.5"><span className="text-xs font-medium text-neutral-200">สุ่มรีแอคชัน</span><span className="text-[10px] leading-4 text-neutral-400">สุ่มความรู้สึกในแต่ละโพสต์</span></div></div><X.default checked={d} onChange={g} /></div></div></div></b.Fragment>}</div>;
  };
  let Z = ({
    onClose: a,
    initialData: e,
    mode: f,
    userId: g,
    onSuccess: j
  }) => {
    var k;
    let {
      toast: l
    } = (0, i.useToast)();
    let {
      createGroup: m,
      updateGroup: o,
      selectImages: q,
      getImagePreview: r,
      isCreating: s
    } = (0, I.default)();
    let t = f ? f === "edit" : !!e?.id || !!e?.path;
    let u = e?.link || [];
    let [v, w] = (0, c.useState)({
      name: e?.name || "",
      content: e?.content || "",
      comments: e?.comments || "",
      reaction: e?.reaction || "",
      link: u,
      linkText: u.join("\n"),
      newImages: [],
      existingImages: e?.images || [],
      randomContent: !!e?.randomContent,
      randomImage: !!e?.randomImage,
      randomReaction: !!e?.randomReaction
    });
    let [x, y] = (0, c.useState)(u.length > 0 ? "link" : "content");
    let [z, A] = (0, c.useState)(false);
    let [C, D] = (0, c.useState)(false);
    let [E, F] = (0, c.useState)(null);
    let [G, H] = (0, c.useState)(null);
    let [J, K] = (0, c.useState)(null);
    let [Q, R] = (0, c.useState)({});
    let T = (0, c.useRef)({});
    (0, c.useEffect)(() => {
      T.current = Q;
    }, [Q]);
    (0, c.useEffect)(() => {
      let a = true;
      (async () => {
        let b = [];
        if (e?.name) {
          for (let a of v.existingImages) {
            let c = `existing:${a}`;
            if (!T.current[c]) {
              b.push({
                key: c,
                promise: r({
                  groupName: e.name,
                  fileName: a,
                  userId: g
                })
              });
            }
          }
        }
        for (let a of v.newImages) {
          let c = `new:${a}`;
          if (!T.current[c]) {
            b.push({
              key: c,
              promise: r(a)
            });
          }
        }
        if (b.length === 0) {
          return;
        }
        let c = await Promise.all(b.map(async a => {
          try {
            let b = await a.promise;
            return {
              key: a.key,
              dataUrl: b
            };
          } catch {
            return {
              key: a.key,
              dataUrl: null
            };
          }
        }));
        if (a) {
          R(a => {
            let b = false;
            let d = {
              ...a
            };
            for (let a of c) {
              if (a.dataUrl && !d[a.key]) {
                d[a.key] = a.dataUrl;
                b = true;
              }
            }
            if (b) {
              return d;
            } else {
              return a;
            }
          });
        }
      })();
      return () => {
        a = false;
      };
    }, [v.existingImages, v.newImages, e?.name, g, r]);
    (0, c.useEffect)(() => {
      let b = b => {
        if (b.key === "Escape" && !s) {
          if (C) {
            D(false);
          } else if (z) {
            A(false);
          } else {
            a();
          }
        }
      };
      window.addEventListener("keydown", b);
      return () => window.removeEventListener("keydown", b);
    }, [s, z, C, a]);
    let U = async () => {
      try {
        let a = await q();
        if (a && a.length > 0) {
          if (J) {
            K(null);
          }
          w(b => {
            let c = [...b.newImages];
            for (let b of a) {
              if (!c.includes(b)) {
                c.push(b);
              }
            }
            return {
              ...b,
              newImages: c
            };
          });
        }
      } catch (a) {
        console.error("Failed to select images:", a);
        l.error("ไม่สามารถเลือกรูปภาพได้");
      }
    };
    let V = async b => {
      b.preventDefault();
      F(null);
      H(null);
      K(null);
      let c = (0, P.validateGroup)({
        name: v.name,
        link: v.link,
        content: v.content,
        comments: v.comments,
        reaction: v.reaction,
        newImages: v.newImages,
        existingImages: v.existingImages
      });
      if (!c.isValid) {
        if (c.errors.name) {
          F(c.errors.name);
        }
        if (c.errors.link) {
          H(c.errors.link);
          y("link");
        }
        if (c.errors.contentOrImage) {
          K(c.errors.contentOrImage);
          if (!c.errors.link) {
            y("content");
          }
        }
        l.error(c.message || "ข้อมูลกลุ่มไม่ถูกต้องหรือไม่ครบถ้วน");
        return;
      }
      let d = c.sanitizedData?.name || v.name.trim();
      try {
        if (t && e?.name) {
          let b = await o({
            oldName: e.name,
            name: d,
            content: v.content,
            comments: v.comments,
            reaction: v.reaction,
            link: v.link,
            images: v.newImages,
            existingImages: v.existingImages,
            randomContent: v.randomContent,
            randomImage: v.randomImage,
            randomReaction: v.randomReaction,
            userId: g
          });
          if (b.success) {
            l.success(b.message || "บันทึกการแก้ไขกลุ่มเรียบร้อย");
            j?.();
            a();
          } else {
            l.error(b.message || "ไม่สามารถแก้ไขข้อมูลกลุ่มได้");
          }
        } else {
          let b = await m({
            name: d,
            content: v.content,
            comments: v.comments,
            reaction: v.reaction,
            link: v.link,
            images: v.newImages,
            randomContent: v.randomContent,
            randomImage: v.randomImage,
            randomReaction: v.randomReaction,
            userId: g
          });
          if (b.success) {
            l.success(b.message || "สร้างกลุ่มเรียบร้อยแล้ว");
            j?.();
            a();
          } else {
            l.error(b.message || "ไม่สามารถสร้างกลุ่มได้");
          }
        }
      } catch (b) {
        let a = b instanceof Error ? b.message : "เกิดข้อผิดพลาดในการประมวลผล";
        l.error(a);
      }
    };
    let W = v.existingImages.length + v.newImages.length;
    return <div className="relative z-10 flex h-[640px] max-h-[80vh] w-full max-w-4xl flex-col rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl shadow-blue-500/5 transition-all"><div className="flex shrink-0 items-center justify-between border-b border-neutral-800 px-6 py-4"><div><h2 className="text-lg font-semibold text-white">{t ? `แก้ไขกลุ่ม: ${e?.name}` : "เพิ่มกลุ่มใหม่ (Add Group)"}</h2><p className="text-xs text-neutral-400">{t ? "แก้ไขเนื้อหาไฟล์ .txt, ลิงก์ และจัดการรูปภาพในกลุ่ม" : "สร้างโฟลเดอร์กลุ่มพร้อมไฟล์ content.txt, comments.txt, reaction.txt, link.txt และ image/"}</p></div><button type="button" onClick={a} disabled={s} aria-label="Close dialog" className="rounded-lg p-1.5 text-neutral-400 transition hover:bg-white/5 hover:text-white disabled:opacity-50"><n.X className="h-5 w-5" /></button></div><form onSubmit={V} className="flex min-h-0 flex-1 flex-col overflow-hidden p-6"><div className="grid min-h-0 flex-1 grid-cols-1 gap-6 md:grid-cols-2"><div className="flex min-h-0 flex-col gap-4"><div className="shrink-0"><O label="ชื่อหมวดหมู่ของกลุ่ม*" placeholder="ระบุชื่อกลุ่ม เช่น เสื้อผ้าแฟชั่น, รถยนต์มือสอง" value={v.name} onChange={a => {
                w(b => ({
                  ...b,
                  name: a.target.value
                }));
                if (E) {
                  F(null);
                }
              }} disabled={s} />{E && <p className="mt-1 text-xs text-red-400">{E}</p>}</div><div className={`flex min-h-0 flex-1 flex-col rounded-xl border ${J && W === 0 ? "border-red-500/50 bg-red-950/10" : "border-neutral-800/80 bg-neutral-900/40"} p-4 transition-colors`}><div className="flex items-center justify-between"><div><label className="text-sm font-medium text-neutral-200">รูปภาพประจำกลุ่ม</label>{J && W === 0 && <span className="block text-[11px] text-red-400">*ต้องการรูปภาพหรือเนื้อหา</span>}</div><h.default type="button" variant="secondary" size="sm" onClick={U} disabled={s} className="gap-1.5"><B className="h-3.5 w-3.5" />เลือกรูปภาพ</h.default></div><div className="mt-3 flex min-h-0 flex-1 flex-col">{W > 0 ? <div className="flex min-h-0 flex-1 flex-col space-y-2"><div className="flex shrink-0 items-center justify-between text-xs text-neutral-400"><span>ทั้งหมด {W} รูปภาพ</span></div><div className="grid min-h-0 flex-1 content-start grid-cols-1 gap-2 overflow-y-auto sm:grid-cols-2 pr-0.5">{v.existingImages.map(a => {
                      let c = Q[`existing:${a}`];
                      return <div className="group relative flex items-center justify-between gap-2.5 rounded-lg border border-neutral-800 bg-neutral-950 p-2 text-xs transition hover:border-neutral-700" key={`existing-${a}`}><div className="flex min-w-0 items-center gap-2.5"><div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 flex items-center justify-center">{c ? <img src={c} alt={a} className="h-full w-full object-cover" /> : <div className="flex h-full w-full items-center justify-center text-neutral-600"><B className="h-4 w-4 animate-pulse text-blue-400/60" /></div>}</div><div className="min-w-0 flex-1"><div className="flex items-center gap-1.5"><span className="truncate font-medium text-neutral-200" title={a}>{a}</span></div><span className="mt-0.5 block text-[10px] text-neutral-500">รูปภาพในกลุ่ม</span></div></div><button type="button" onClick={() => {
                          w(b => ({
                            ...b,
                            existingImages: b.existingImages.filter(b => b !== a)
                          }));
                        }} disabled={s} className="rounded-lg p-1.5 text-neutral-500 transition hover:bg-red-500/10 hover:text-red-400 disabled:opacity-50" title="ลบรูปภาพนี้"><p.Trash2 className="h-4 w-4" /></button></div>;
                    })}{v.newImages.map(a => {
                      let c;
                      let d = (c = a.split(/[\\/]/))[c.length - 1] || a;
                      let e = Q[`new:${a}`];
                      return <div className="group relative flex items-center justify-between gap-2.5 rounded-xl border border-blue-900/40 bg-blue-950/20 p-2 text-xs transition hover:border-blue-700/60" key={`new-${a}`}><div className="flex min-w-0 items-center gap-2.5"><div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-blue-900/40 bg-blue-950/40 flex items-center justify-center">{e ? <img src={e} alt={d} className="h-full w-full object-cover" /> : <div className="flex h-full w-full items-center justify-center text-neutral-600"><B className="h-4 w-4 animate-pulse text-green-400/60" /></div>}</div><div className="min-w-0 flex-1"><div className="flex items-center gap-1.5"><span className="truncate font-medium text-neutral-200" title={d}>{d}</span></div><span className="mt-0.5 block max-w-[130px] truncate text-[10px] text-neutral-500" title={a}>{a}</span></div></div><button type="button" onClick={() => {
                          w(b => ({
                            ...b,
                            newImages: b.newImages.filter(b => b !== a)
                          }));
                        }} disabled={s} className="rounded-lg p-1.5 text-neutral-500 transition hover:bg-red-500/10 hover:text-red-400 disabled:opacity-50" title="ลบรูปภาพนี้"><p.Trash2 className="h-4 w-4" /></button></div>;
                    })}</div></div> : <div className="flex min-h-0 flex-1 flex-col items-center justify-center rounded-lg border border-dashed border-neutral-800 py-6 text-center text-xs text-neutral-500"><B className="mb-1.5 h-7 w-7 text-neutral-600" />ยังไม่มีการเลือกรูปภาพ<span className="mt-0.5 text-[11px] text-neutral-600">(สามารถเลือกรูปภาพในภายหลังได้)</span></div>}</div></div></div><div className="flex flex-1 min-h-0 flex-col"><div className="flex flex-1 min-h-0 flex-col rounded-xl border border-neutral-800 bg-neutral-900/30"><div className="flex shrink-0 border-b border-neutral-800 bg-neutral-950/60 p-1"><button type="button" onClick={() => y("link")} className={`flex flex-1 items-center justify-center gap-2 rounded-md py-2 text-xs font-medium transition-all ${x === "link" ? "bg-neutral-800 text-white shadow-sm" : "text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200"}`}><N.Link className="h-3.5 w-3.5" />ลิงก์*{v.link.length > 0 ? <span className="h-1.5 w-1.5 rounded-full bg-purple-400" /> : G ? <span className="h-1.5 w-1.5 rounded-full bg-red-400" /> : null}</button><button type="button" onClick={() => y("content")} className={`flex flex-1 items-center justify-center gap-2 rounded-md py-2 text-xs font-medium transition-all ${x === "content" ? "bg-neutral-800 text-white shadow-sm" : "text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200"}`}><L className="h-3.5 w-3.5" />เนื้อหาโพสต์*{v.content.trim() ? <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> : J ? <span className="h-1.5 w-1.5 rounded-full bg-red-400" /> : null}</button><button type="button" onClick={() => y("comments")} className={`flex flex-1 items-center justify-center gap-2 rounded-md py-2 text-xs font-medium transition-all ${x === "comments" ? "bg-neutral-800 text-white shadow-sm" : "text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200"}`}><M.MessageSquare className="h-3.5 w-3.5" />คอมเมนต์{v.comments.trim() && <span className="h-1.5 w-1.5 rounded-full bg-green-400" />}</button></div><div className="flex min-h-0 flex-1 flex-col p-4">{x === "content" ? <div className="flex min-h-0 flex-1 flex-col"><div className="mb-1.5 flex shrink-0 items-center justify-between text-xs text-neutral-400"><span>ข้อความที่จะโพสต์ลงในกลุ่ม (ต้องมีเนื้อหา หรือรูปภาพ)</span>{v.content.includes("---") && <span className="text-[11px] text-blue-400">({(k = v.content) && k.includes("---") && k.split(/(?:^|\r?\n)\s*-{3,}\s*(?:\r?\n|$)/).map(a => a.trim()).filter(Boolean).length || 1} ชุดข้อความสุ่ม)</span>}</div><textarea placeholder="พิมพ์ข้อความสำหรับโพสต์ลงกลุ่ม... (ใช้ --- เพื่อคั่นสุ่มข้อความ หรือกดปุ่มด้านล่าง)" value={v.content} onChange={a => {
                    w(b => ({
                      ...b,
                      content: a.target.value
                    }));
                    if (J) {
                      K(null);
                    }
                  }} disabled={s} className={`
                        min-h-0
                        w-full
                        flex-1
                        resize-none
                        rounded-lg
                        border
                        ${J ? "border-red-500/60 focus:border-red-400" : "border-neutral-800 focus:border-blue-500"}
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
                    w(a => {
                      let b = a.content.trimEnd();
                      let c = b ? `${b}
---
` : "---\n";
                      return {
                        ...a,
                        content: c,
                        randomContent: true
                      };
                    });
                  }} disabled={s} className="mt-2.5 flex shrink-0 items-center justify-center gap-1.5 rounded-xl border border-dashed border-neutral-700/80 py-2 text-xs text-neutral-400 transition-all hover:border-blue-500/50 hover:bg-blue-500/5 hover:text-blue-300">+ เพิ่มชุดข้อความสุ่ม (---)</button>{J && <p className="mt-1 shrink-0 text-xs text-red-400">{J}</p>}</div> : x === "comments" ? <div className="flex min-h-0 flex-1 flex-col"><div className="mb-1.5 flex shrink-0 items-center justify-between text-xs text-neutral-400"><span>ข้อความคอมเมนต์ (จะใส่หรือไม่ใส่ก็ได้)</span><span className="text-[11px] text-neutral-500">{v.comments.length} ตัวอักษร</span></div><textarea placeholder="พิมพ์ข้อความคอมเมนต์ เช่น สนใจทักแชท, สอบถามรายละเอียดได้..." value={v.comments} onChange={a => w(b => ({
                    ...b,
                    comments: a.target.value
                  }))} disabled={s} className="\n                        min-h-0\n                        w-full\n                        flex-1\n                        resize-none\n                        rounded-lg\n                        border\n                        border-neutral-800\n                        bg-neutral-900/90\n                        p-3\n                        text-sm\n                        leading-normal\n                        text-white\n                        placeholder-neutral-500\n                        outline-none\n                        transition-colors\n                        focus:border-blue-500\n                        overflow-y-auto\n                      " /></div> : <div className="flex min-h-0 flex-1 flex-col"><div className="mb-1.5 flex shrink-0 items-center justify-between text-xs text-neutral-400"><span>รายการลิงก์เป้าหมาย (1 บรรทัดต่อ 1 ลิงก์)*</span><span className="text-[11px] text-neutral-500">ทั้งหมด {v.link.length} ลิงก์</span></div><textarea placeholder={`https://www.facebook.com/groups/123456789
https://www.facebook.com/groups/987654321`} value={v.linkText} onChange={a => {
                    let b = a.target.value;
                    let c = b.split(/\r?\n/).map(a => a.trim()).filter(Boolean);
                    w(a => ({
                      ...a,
                      linkText: b,
                      link: c
                    }));
                    if (G) {
                      H(null);
                    }
                  }} disabled={s} className={`
                        min-h-0
                        w-full
                        flex-1
                        resize-none
                        rounded-lg
                        border
                        ${G ? "border-red-500/60 focus:border-red-400" : "border-neutral-800 focus:border-blue-500"}
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
                      `} />{G && <p className="mt-1 shrink-0 text-xs text-red-400">{G}</p>}</div>}</div></div></div></div><div className="mt-4 flex shrink-0 items-center justify-between border-t border-neutral-800 pt-4"><div className="flex items-center gap-2"><S value={v.reaction} randomReaction={v.randomReaction} isOpen={z} onToggle={() => {
              A(a => !a);
              if (C) {
                D(false);
              }
            }} onClose={() => A(false)} onChange={a => w(b => ({
              ...b,
              reaction: a
            }))} disabled={s} /><Y randomContent={v.randomContent} randomImage={v.randomImage} randomReaction={v.randomReaction} onChangeRandomContent={a => w(b => ({
              ...b,
              randomContent: a
            }))} onChangeRandomImage={a => w(b => ({
              ...b,
              randomImage: a
            }))} onChangeRandomReaction={a => w(b => ({
              ...b,
              randomReaction: a
            }))} isOpen={C} onToggle={() => {
              D(a => !a);
              if (z) {
                A(false);
              }
            }} onClose={() => D(false)} disabled={s} /></div><div className="flex items-center gap-3"><h.default type="button" variant="secondary" onClick={a} disabled={s}>ยกเลิก</h.default><h.default type="submit" variant="primary" disabled={s} className="gap-2">{s && <d.Loader2 className="h-4 w-4 animate-spin" />}{t ? "บันทึกการแก้ไข" : "สร้างกลุ่ม"}</h.default></div></div></form></div>;
  };
  let $ = () => () => {};
  let _ = ({
    isOpen: a,
    onClose: d,
    initialData: e,
    mode: f,
    userId: g,
    onSuccess: h
  }) => {
    let i = (0, c.useSyncExternalStore)($, () => true, () => false);
    if (!a || !i) {
      return null;
    }
    let j = (f ? f === "edit" : e?.id || e?.path) ? `edit-${e?.name || "group"}` : `create-${e?.name || "new"}-${e?.link?.length || 0}`;
    return (0, J.createPortal)(<div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6"><div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={d} /><Z onClose={d} initialData={e} mode={f} userId={g} onSuccess={h} key={j} /></div>, document.body);
  };
  let aa = {
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
  let _Component4 = ({
    groupName: a,
    fileName: d,
    userId: e,
    totalImages: f,
    className: g = ""
  }) => {
    let {
      getImagePreview: h
    } = (0, I.default)();
    let [i, j] = (0, c.useState)(null);
    let [k, l] = (0, c.useState)(!!d);
    (0, c.useEffect)(() => {
      let b = true;
      if (!d) {
        j(null);
        l(false);
        return;
      }
      l(true);
      h({
        groupName: a,
        fileName: d,
        userId: e
      }).then(a => {
        if (b) {
          j(a);
          l(false);
        }
      }).catch(a => {
        console.error("Failed to load thumbnail:", a);
        if (b) {
          j(null);
          l(false);
        }
      });
      return () => {
        b = false;
      };
    }, [a, d, e, h]);
    return <div className={`relative aspect-square overflow-hidden rounded-xl border border-white/[0.12] bg-neutral-950 shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_6px_rgba(0,0,0,0.5)] ${g}`}>{k ? <div className="flex h-full w-full items-center justify-center bg-white/[0.02]"><div className="h-5 w-5 rounded-full border-2 border-white/20 border-t-blue-400 animate-spin" /></div> : i ? <b.Fragment><img src={i} alt={a} className="h-full w-full object-cover" />{f > 1 && <div className="absolute bottom-1 right-1 flex items-center gap-0.5 rounded-md bg-black/80 px-1 py-0.5 text-[9px] font-semibold text-white/90 shadow-sm backdrop-blur-xs"><B className="h-2.5 w-2.5" /><span>{f}</span></div>}</b.Fragment> : <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-gradient-to-b from-white/[0.04] to-transparent p-1 text-center text-neutral-500"><B className="h-4 w-4 text-neutral-600 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" /><span className="text-[9px] font-medium text-neutral-500 leading-tight">ไม่มีรูป</span></div>}</div>;
  };
  let _Component25 = ({
    searchQuery: a = "",
    userId: e
  } = {}) => {
    let f = (0, x.useParams)();
    let g = e ?? f?.id ?? undefined;
    let {
      toast: j,
      confirm: k
    } = (0, i.useToast)();
    let {
      groups: l,
      isLoading: m,
      statusFilter: o,
      isDeleting: q,
      fetchGroups: r,
      deleteGroup: s,
      toggleActiveGroup: u
    } = (0, I.default)();
    let [v, w] = (0, c.useState)(false);
    let [y, A] = (0, c.useState)(null);
    (0, c.useEffect)(() => {
      r(g);
    }, [g, r]);
    let B = async (a, b) => {
      try {
        let c = await u(a, g, b);
        if (c.success) {
          j.success(`กลุ่ม "${a}" ${c.isActive ? "เปิดใช้งาน (Active)" : "ปิดใช้งาน (Inactive)"} เรียบร้อยแล้ว`, "สถานะกลุ่ม");
        } else {
          j.error(c.message || "ไม่สามารถเปลี่ยนสถานะได้", "ข้อผิดพลาด");
        }
      } catch (a) {
        console.error("Failed to toggle active:", a);
        j.error("เกิดข้อผิดพลาดในการเปลี่ยนสถานะ", "ข้อผิดพลาด");
      }
    };
    let C = async a => {
      if (await k({
        title: "ยืนยันการลบกลุ่ม",
        message: `คุณแน่ใจหรือไม่ว่าต้องการลบกลุ่ม "${a}"? ข้อมูลโพสต์ คอมเมนต์ และรูปภาพทั้งหมดในกลุ่มนี้จะถูกลบอย่างถาวร`,
        confirmText: "ลบกลุ่ม",
        cancelText: "ยกเลิก",
        variant: "danger"
      })) {
        try {
          let b = await s(a, g);
          if (b?.success) {
            j.success(`ลบกลุ่ม "${a}" เรียบร้อยแล้ว`, "สำเร็จ");
          } else {
            j.error(b?.message || "ไม่สามารถลบกลุ่มได้", "ข้อผิดพลาด");
          }
        } catch (b) {
          let a = b instanceof Error ? b.message : "เกิดข้อผิดพลาดในการลบกลุ่ม";
          j.error(a, "ข้อผิดพลาด");
        }
      }
    };
    let E = async a => {
      try {
        if (window.electronApi?.group?.openFolder) {
          let b = await window.electronApi.group.openFolder(a, g);
          if (b && !b.success && b.message) {
            j.error(b.message);
          }
        } else {
          j.info("คำสั่งเปิดโฟลเดอร์ทำงานได้เฉพาะบน Electron App");
        }
      } catch (a) {
        console.error("Failed to open folder:", a);
        j.error("ไม่สามารถเปิดโฟลเดอร์ได้");
      }
    };
    let G = (0, c.useMemo)(() => {
      let b = l;
      if (o === "active") {
        b = b.filter(a => a.isActive !== false);
      } else if (o === "inactive") {
        b = b.filter(a => a.isActive === false);
      }
      if (!a.trim()) {
        return b;
      }
      let c = a.toLowerCase().trim();
      return b.filter(a => {
        let b = a.name?.toLowerCase().includes(c);
        let d = a.content?.toLowerCase().includes(c);
        let e = a.link?.some(a => a.toLowerCase().includes(c));
        return b || d || e;
      });
    }, [l, o, a]);
    return <div className="min-h-full">{m ? <div className="flex min-h-[300px] w-full flex-col items-center justify-center gap-3 text-neutral-400"><d.Loader2 className="h-7 w-7 animate-spin text-blue-500" /><span className="text-sm font-medium">กำลังโหลดข้อมูลกลุ่ม...</span></div> : G.length === 0 ? <t.default icon={_Component8} title="ไม่มีข้อมูลกลุ่ม" desc={a.trim() ? `ไม่พบกลุ่มที่ตรงกับคำค้นหา "${a}"` : o === "active" ? "ไม่มีกลุ่มที่เปิดใช้งานอยู่ในขณะนี้" : o === "inactive" ? "ไม่มีกลุ่มที่ปิดใช้งานอยู่ในขณะนี้" : "เริ่มต้นสร้างกลุ่มเพื่อจัดการข้อความโพสต์ รูปภาพ และลิงก์สำหรับบัญชีนี้"} minHeight="min-h-[400px]" action={<h.default type="button" onClick={() => {
        A(null);
        w(true);
      }} className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 cursor-pointer"><H className="h-4 w-4" />สร้างกลุ่มใหม่</h.default>} /> : <div className="min-h-full rounded-xl"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">{G.map(a => {
            let c = a.images && a.images.length > 0 ? a.images[0] : undefined;
            let d = a.reaction ? aa[a.reaction] : null;
            let e = a.isActive !== false;
            return <div onClick={() => void B(a.name, !e)} className={`
                    group relative flex flex-col justify-between overflow-hidden
                    rounded-2xl bg-neutral-950 p-4
                    border transition-all duration-300 ease-out
                    cursor-pointer select-none
                    ${e ? "border-white/[0.12] hover:border-emerald-400/40 shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]" : "border-rose-500/20 shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.05),inset_0_-1px_2px_rgba(0,0,0,0.5)] opacity-45 hover:opacity-75 blur-[0.6px] hover:blur-none"}
                    active:translate-y-[2px]
                    active:shadow-[0_3px_0_rgba(0,0,0,0.45),0_6px_12px_rgba(0,0,0,0.25)]
                  `} title={e ? `กลุ่ม "${a.name}" เปิดใช้งานอยู่ (คลิกที่การ์ดเพื่อปิด)` : `กลุ่ม "${a.name}" ปิดใช้งานอยู่ (คลิกที่การ์ดเพื่อเปิด)`} key={a.name}><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20" /><div className={`
                      pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full blur-2xl transition-all duration-300
                      ${e ? "bg-emerald-500/[0.05] group-hover:bg-emerald-500/[0.09]" : "bg-rose-500/[0.05] group-hover:bg-rose-500/[0.09]"}
                    `} /><div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/25 to-transparent" />{!e && <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-[1px] transition-all duration-300"><n.X className="h-20 w-20 text-rose-500 stroke-[2.5] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]" /></div>}<div className="relative z-10 flex items-start gap-3.5"><_Component4 groupName={a.name} fileName={c} userId={g} totalImages={a.imageCount || a.images?.length || 0} className="h-20 w-20 shrink-0" /><div className="flex min-w-0 flex-1 flex-col justify-between self-stretch py-0.5"><div><div className="flex items-start justify-between gap-2"><h3 className="min-w-0 truncate text-base font-semibold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)] transition-colors group-hover:text-blue-400" title={a.name}>{a.name}</h3><div className={`flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-0.5 shadow-sm ${e ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-emerald-500/10" : "border-rose-500/30 bg-rose-500/10 text-rose-400 shadow-rose-500/10"}`}><span className={`h-1.5 w-1.5 rounded-full ${e ? "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.7)]" : "bg-rose-400 shadow-[0_0_6px_rgba(251,113,133,0.6)]"}`} /><span className="text-[10px] font-semibold tracking-wide">{e ? "เปิดใช้งาน" : "ปิดใช้งาน"}</span></div></div></div><div className="mt-2 flex flex-wrap items-center gap-1.5">{a.link && a.link.length > 0 ? <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/25 bg-sky-500/10 px-2 py-0.5 text-[11px] font-medium text-sky-400 shadow-sm" title={a.link.join("\n")}><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400 shadow-[0_0_4px_rgba(56,189,248,0.6)]" /><span className="truncate">{a.link.length} ลิงก์</span></span> : <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-neutral-500"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-600" /><span>ไม่มีลิงก์</span></span>}{a.randomReaction ? <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 text-[11px] font-medium text-amber-300 shadow-sm" title="สุ่มรีแอคชันอัตโนมัติ (ไม่เอาโกรธ)"><span>🎲</span><span>สุ่มความรู้สึก</span></span> : d ? <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium shadow-sm ${d.badgeColor}`}><span>{d.emoji}</span><span>{d.label}</span></span> : null}{a.randomContent && <span className="inline-flex items-center gap-1 rounded-full border border-purple-500/30 bg-purple-500/15 px-2 py-0.5 text-[11px] font-medium text-purple-300 shadow-sm" title="สุ่มเนื้อหาตามตัวคั่น ---"><span>สุ่มเนื้อหา</span></span>}{a.randomImage && <span className="inline-flex items-center gap-1 rounded-full border border-indigo-500/30 bg-indigo-500/15 px-2 py-0.5 text-[11px] font-medium text-indigo-300 shadow-sm" title="สุ่ม 1 รูปภาพจากกลุ่ม"><span>สุ่ม 1 รูป</span></span>}</div></div></div><div className={`relative z-20 mt-3.5 border-t border-white/[0.08] pt-3 transition-all duration-300 ${!e ? "blur-sm opacity-35 pointer-events-none select-none" : ""}`} onClick={a => {
                if (e) {
                  a.stopPropagation();
                }
              }}><div className="flex items-center justify-between gap-2"><h.default type="button" onClick={b => {
                    b.stopPropagation();
                    A(a);
                    w(true);
                  }} variant="secondary" size="sm" className="flex-1 py-1.5 text-xs gap-1.5 cursor-pointer"><D className="h-3.5 w-3.5 text-neutral-300" />แก้ไข</h.default><h.default type="button" onClick={b => {
                    b.stopPropagation();
                    E(a.name);
                  }} title="เปิดโฟลเดอร์ใน Explorer" variant="secondary" size="sm" className="cursor-pointer"><F className="h-3.5 w-3.5 text-neutral-300" /></h.default><h.default type="button" onClick={b => {
                    b.stopPropagation();
                    C(a.name);
                  }} disabled={q} title="ลบกลุ่มนี้" variant="danger" size="sm" className="cursor-pointer"><p.Trash2 className="h-3.5 w-3.5" /></h.default></div></div></div>;
          })}</div></div>}<_ isOpen={v} onClose={() => {
        w(false);
        A(null);
      }} initialData={y} userId={g} onSuccess={() => void r(g)} /></div>;
  };
  var ad = a.i(79040);
  let _Component17 = ({
    userId: a
  } = {}) => {
    let {
      isCreateDialogOpen: c,
      createPrefillData: d,
      openCreateDialog: e,
      closeCreateDialog: f
    } = (0, I.default)();
    let g = (0, x.useParams)();
    let i = a ?? g?.id ?? undefined;
    return <div><h.default variant="primary" onClick={() => e(null)} className="cursor-pointer gap-2"><H className="h-4 w-4" />สร้างกลุ่มใหม่</h.default><_ isOpen={c} onClose={f} initialData={d} mode="create" userId={i} /></div>;
  };
  let _Component16 = () => null;
  let ag = {
    name: "wrench",
    size: 24,
    node: [["path", {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
      key: "1ngwbx"
    }]]
  };
  ag.node;
  let _Component5 = (0, e.default)(ag);
  let ai = {
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
  ai.node;
  let _Component9 = (0, e.default)(ai);
  let ak = {
    name: "chevron-right",
    size: 24,
    node: [["path", {
      d: "m9 18 6-6-6-6",
      key: "mthhwq"
    }]]
  };
  ak.node;
  let _Component7 = (0, e.default)(ak);
  let am = [{
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
    isOpen: a,
    onClose: d,
    userId: e,
    onSelectTool: f
  }) => {
    let [g, j] = (0, c.useState)(false);
    let {
      toast: k
    } = (0, i.useToast)();
    (0, c.useEffect)(() => {
      j(true);
    }, []);
    (0, c.useEffect)(() => {
      let b = b => {
        if (b.key === "Escape" && a) {
          d();
        }
      };
      window.addEventListener("keydown", b);
      return () => window.removeEventListener("keydown", b);
    }, [a, d]);
    if (a && g) {
      return (0, J.createPortal)(<div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6"><div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={d} /><div role="dialog" aria-modal="true" aria-labelledby="tools-dialog-title" className="\n          relative z-10 flex w-full max-w-lg flex-col overflow-hidden\n          rounded-2xl border border-white/[0.12]\n          bg-neutral-950\n          shadow-[0_16px_48px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]\n          transition-all duration-200 ease-out\n        "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20" /><div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" /><div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4"><div className="flex items-center gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"><_Component5 className="h-5 w-5" /></div><div><div className="flex items-center gap-2"><h2 id="tools-dialog-title" className="text-base font-semibold text-white tracking-tight">เครื่องมือช่วยเหลือ</h2></div><p className="mt-0.5 text-xs text-neutral-400">เลือกเครื่องมือจัดการกลุ่มและฟังก์ชันอัตโนมัติสำหรับบัญชีนี้</p></div></div><button type="button" onClick={d} aria-label="Close dialog" className="\n              cursor-pointer\n              rounded-lg p-1.5 text-neutral-400\n              hover:bg-white/10 hover:text-white\n              active:scale-95 transition-all\n            "><n.X className="h-5 w-5" /></button></div><div className="flex flex-col gap-3 p-6"><p className="text-xs font-medium text-neutral-400 select-none">ฟังก์ชันการทำงานที่พร้อมใช้งาน:</p><div className="space-y-2.5">{am.map(a => {
                let _Component6 = a.icon;
                return <div onClick={() => {
                  if (f) {
                    f(a.id);
                  } else {
                    k.info(`ฟังก์ชัน "${a.title}" กำลังเตรียมพร้อมสำหรับการเชื่อมต่อระบบ`, "แจ้งเตือน");
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
                    ${a.hoverBorder}
                  `} key={a.id}><div className="flex items-start gap-3.5 min-w-0"><div className={`
                        flex h-10 w-10 shrink-0 items-center justify-center
                        rounded-xl border ${a.borderColor} ${a.iconBg}
                        shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]
                        transition-transform duration-200 group-hover:scale-105
                      `}><_Component6 className={`h-5 w-5 ${a.iconColor}`} /></div><div className="min-w-0"><div className="flex items-center gap-2"><h3 className="text-sm font-semibold text-neutral-100 tracking-tight group-hover:text-white transition-colors">{a.title}</h3></div><p className="mt-1 text-xs text-neutral-400 leading-relaxed">{a.description}</p></div></div><div className="shrink-0 text-neutral-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white"><_Component7 className="h-5 w-5" /></div></div>;
              })}</div></div><div className="flex items-center justify-end border-t border-white/[0.08] px-6 py-3.5 bg-neutral-900/30"><h.default type="button" variant="secondary" size="sm" onClick={d}>ปิดหน้าต่าง</h.default></div></div></div>, document.body);
    } else {
      return null;
    }
  };
  var ao = a.i(5835);
  var ap = a.i(48416);
  var aq = a.i(72370);
  var ar = a.i(3236);
  var as = a.i(65196);
  var at = a.i(16330);
  var au = a.i(86053);
  let _Component0 = ({
    group: a,
    checked: c,
    onToggle: d
  }) => {
    let e = Array.isArray(a.link) ? a.link.length : 0;
    return <div onClick={d} className={`
        group/item relative flex items-center justify-between gap-3 p-3
        rounded-xl border text-xs cursor-pointer select-none
        transition-all duration-150
        ${c ? "bg-amber-500/[0.08] border-amber-500/30 text-amber-100 shadow-[inset_0_1px_0_rgba(245,158,11,0.15)]" : "bg-white/[0.02] border-white/[0.08] text-neutral-300 hover:bg-white/[0.04] hover:border-white/[0.16]"}
      `}><div className="flex items-center gap-3 min-w-0 flex-1"><div className={`
            flex h-4 w-4 shrink-0 items-center justify-center rounded-md border
            transition-all duration-150
            ${c ? "bg-amber-500 border-amber-400 text-neutral-950 shadow-sm" : "bg-neutral-900/80 border-white/20 group-hover/item:border-white/40"}
          `}>{c && <ap.Check className="h-3 w-3 stroke-[3]" />}</div><div className="flex items-center gap-2 min-w-0 flex-1"><_Component8 className="h-3.5 w-3.5 shrink-0 text-neutral-500 group-hover/item:text-amber-400 transition-colors" /><span className="truncate font-medium text-neutral-200 group-hover/item:text-white">{a.name}</span></div></div><div className="flex items-center gap-2 shrink-0"><span className={`
            rounded-md px-1.5 py-0.5 text-[10px] font-semibold border
            ${a.isActive !== false ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-red-500/10 text-red-400 border-red-500/20"}
          `}>{a.isActive !== false ? "เปิดใช้งาน" : "ปิดใช้งาน"}</span><div className="flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-neutral-400"><N.Link className="h-2.5 w-2.5" /><span>{e} ลิงก์</span></div></div></div>;
  };
  let _Component13 = ({
    isOpen: a,
    onClose: e,
    userId: f
  }) => {
    let [g, j] = (0, c.useState)(false);
    let {
      toast: k
    } = (0, i.useToast)();
    let {
      groups: l,
      fetchGroups: o,
      isLoading: p
    } = (0, I.default)();
    let [q, r] = (0, c.useState)("");
    let [s, u] = (0, c.useState)([]);
    let [w, x] = (0, c.useState)(true);
    let [y, A] = (0, c.useState)(false);
    let [B, C] = (0, c.useState)(false);
    let [D, E] = (0, c.useState)("");
    let [F, G] = (0, c.useState)("");
    let [H, K] = (0, c.useState)(null);
    let [L, M] = (0, c.useState)([]);
    let [N, O] = (0, c.useState)(false);
    (0, c.useEffect)(() => {
      j(true);
    }, []);
    (0, c.useEffect)(() => {
      if (a) {
        if (f) {
          o(f);
        }
        A(false);
        C(false);
        E("");
        G("");
        K(null);
        M([]);
        r("");
        O(false);
      }
    }, [a, f, o]);
    (0, c.useEffect)(() => {
      if (a && l.length > 0) {
        u(l.map(a => a.name));
        x(true);
      }
    }, [a, l]);
    (0, c.useEffect)(() => {}, [a, f, l, s]);
    (0, c.useEffect)(() => {
      let b = b => {
        if (b.key === "Escape" && a) {
          T();
        }
      };
      window.addEventListener("keydown", b);
      return () => window.removeEventListener("keydown", b);
    }, [a, y]);
    let P = (0, c.useMemo)(() => {
      if (!q.trim()) {
        return l;
      }
      let a = q.toLowerCase().trim();
      return l.filter(b => b.name.toLowerCase().includes(a));
    }, [l, q]);
    let Q = (0, c.useMemo)(() => l.filter(a => s.includes(a.name)).reduce((a, b) => a + (Array.isArray(b.link) ? b.link.length : 0), 0), [l, s]);
    let R = async () => {
      if (!f) {
        k.error("ไม่พบรหัสผู้ใช้ (User ID) ของบัญชีนี้", "ข้อผิดพลาด");
        return;
      }
      if (s.length === 0) {
        k.warning("กรุณาเลือกอย่างน้อย 1 กลุ่มเพื่อดำเนินการลบ", "แจ้งเตือน");
        return;
      }
      let a = l.filter(a => s.includes(a.name))[0];
      let b = Array.isArray(a?.link) ? a.link.length : 1;
      K({
        name: a?.name || s[0] || "กลุ่มเป้าหมาย",
        groupIndex: 1,
        totalGroups: Math.max(1, s.length),
        linkIndex: 1,
        totalLinks: Math.max(1, b)
      });
      A(true);
      C(false);
      M([]);
      E("กำลังส่งคำสั่งเริ่มต้นกระบวนการลบโพสต์รออนุมัติ...");
      G("กำลังเปิดเบราว์เซอร์เพื่อเริ่มกระบวนการ...");
      M([`[INIT] บัญชี UID: ${f}`, `[INIT] กำหนดเป้าหมาย ${s.length} กลุ่ม (${Q} ลิงก์)`, "กำลังเริ่มโปรเซสเบื้องหลังเพื่อดำเนินการในเบราว์เซอร์..."]);
      try {
        if (window.electronApi?.group?.deletePending) {
          let a = await window.electronApi.group.deletePending({
            userId: f,
            groupNames: w ? null : s
          });
          if (!a.success) {
            k.error(a.message || "ไม่สามารถเริ่มการลบโพสต์ได้", "ข้อผิดพลาด");
            A(false);
          }
        } else {
          setTimeout(() => {
            G("กำลังตรวจสอบโพสต์รออนุมัติ...");
          }, 800);
          setTimeout(() => {
            M(a => [...a, "[INFO] เปิดผ่าน Web Preview (จำลองกระบวนการสำเร็จ)"]);
            E("กระบวนการจำลองเสร็จสิ้น");
            G("ลบโพสต์รออนุมัติเสร็จสิ้นเรียบร้อยแล้ว");
            A(false);
            C(true);
          }, 2000);
        }
      } catch (b) {
        let a = b instanceof Error ? b.message : "เกิดข้อผิดพลาดในการเชื่อมต่อระบบ";
        k.error(a, "ข้อผิดพลาด");
        A(false);
      }
    };
    let S = (0, c.useMemo)(() => {
      if (B) {
        return 100;
      }
      if (!H) {
        return !!y * 25;
      }
      let a = Math.max(1, H.totalLinks);
      return Math.min(92, Math.max(25, Math.round((Math.min(a, Math.max(1, H.linkIndex)) - 0.3) / a * 100)));
    }, [B, H, y]);
    let T = () => {
      if (y) {
        O(true);
      } else {
        e();
      }
    };
    let U = async () => {
      if (f && window.electronApi?.group?.abortDeletePending) {
        try {
          await window.electronApi.group.abortDeletePending(f);
        } catch (a) {
          console.error("Failed to abort delete pending:", a);
        }
      }
      A(false);
      O(false);
      e();
    };
    if (a && g) {
      return (0, J.createPortal)(<div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6"><div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={T} /><div role="dialog" aria-modal="true" aria-labelledby="pending-dialog-title" className={`
          relative z-10 flex w-full max-w-lg flex-col overflow-hidden
          rounded-2xl border border-white/[0.12]
          bg-neutral-950
          shadow-[0_16px_48px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]
          transition-all duration-300 ease-out
          ${!y && !B ? "h-[650px] max-h-[85vh]" : "max-h-[85vh]"}
        `}><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20" /><div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl" /><div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4 shrink-0"><div className="flex items-center gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"><_Component9 className="h-5 w-5" /></div><div><div className="flex items-center gap-2"><h2 id="pending-dialog-title" className="text-base font-semibold text-white tracking-tight">ลบกลุ่มที่ติดอนุมัติ</h2></div><p className="mt-0.5 text-xs text-neutral-400">เลือกกลุ่มเป้าหมายเพื่อสแกนและลบโพสต์ที่ยังไม่ได้รับอนุมัติออกจากกลุ่ม</p></div></div><button type="button" onClick={T} aria-label="Close dialog" className="\n              cursor-pointer\n              rounded-lg p-1.5 text-neutral-400\n              hover:bg-white/10 hover:text-white\n              active:scale-95 transition-all\n            "><n.X className="h-5 w-5" /></button></div><div className="p-6 flex flex-col gap-4 flex-1 min-h-0 overflow-hidden">{y || B ? <div className="flex flex-col gap-4 flex-1 justify-center py-2 min-h-0"><div className="\n                  group relative flex flex-col justify-between\n                  overflow-hidden rounded-2xl border border-white/[0.12]\n                  bg-neutral-950 p-4 select-none\n                  shadow-[0_8px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.12)]\n                  shrink-0\n                "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20 z-10" /><div className={`pointer-events-none absolute -left-6 -top-6 h-20 w-20 rounded-full blur-xl transition-all duration-500 ${B ? "bg-emerald-500/15" : y ? "bg-amber-500/15" : "bg-white/[0.04]"}`} /><div className="relative z-10 flex items-center justify-between gap-3"><div className="flex items-center gap-3 min-w-0"><div className={`
                        flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border
                        transition-all duration-300
                        ${B ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.2)]" : y ? "bg-amber-500/15 border-amber-500/30 text-amber-400 shadow-[0_0_16px_rgba(245,158,11,0.2)]" : "bg-neutral-900 border-white/[0.08] text-neutral-400"}
                      `}>{B ? <aq.CheckCircle2 className="h-5 w-5 stroke-[2.5]" /> : <_Component8 className="h-5 w-5 stroke-[2.2]" />}</div><div className="flex flex-col min-w-0"><div className="flex items-center gap-2"><span className="truncate text-sm font-bold text-white tracking-wide">{H?.name || "กำลังเตรียมกลุ่ม..."}</span>{H && H.totalGroups > 1 && <span className="shrink-0 rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-medium text-neutral-400">กลุ่ม {H.groupIndex}/{H.totalGroups}</span>}</div><span className="text-[11px] text-neutral-400 flex items-center gap-1.5 mt-0.5"><v.Users className="h-3 w-3 text-neutral-500 shrink-0" /><span>เป้าหมายลบโพสต์รออนุมัติ</span></span></div></div><div className="shrink-0">{y ? <div className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 shadow-sm"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" /></span><span className="text-xs font-semibold text-amber-300">กำลังดำเนินการ</span></div> : B ? <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 shadow-sm"><aq.CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /><span className="text-xs font-semibold text-emerald-300">เสร็จสิ้น</span></div> : <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 shadow-sm"><au.Square className="h-3 w-3 text-neutral-400" /><span className="text-xs font-semibold text-neutral-400">หยุดการทำงาน</span></div>}</div></div><div className="relative z-10 mt-3.5 mb-2.5 flex items-center justify-between gap-3"><div className="flex items-center gap-2 min-w-0 flex-1">{y ? <d.Loader2 className="h-3.5 w-3.5 animate-spin text-amber-400 shrink-0" /> : B ? <ap.Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" /> : <ar.AlertCircle className="h-3.5 w-3.5 text-neutral-400 shrink-0" />}<p className="truncate text-xs font-medium text-neutral-200">{F || D || "กำลังประมวลผล..."}</p></div><div className={`
                      flex items-center gap-1.5 shrink-0 rounded-lg border px-2.5 py-1 select-none font-mono
                      ${B ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" : "border-amber-500/30 bg-amber-500/10 text-amber-300"}
                    `}><span className="text-[10px] font-sans font-semibold text-neutral-400 tracking-wider">TASK</span><span className="text-xs font-bold">{H ? `${H.linkIndex} / ${H.totalLinks}` : "- / -"}</span><span className="text-[10px] font-sans text-neutral-400">ลิงก์</span></div></div><div className="\n                    relative h-3 w-full overflow-hidden rounded-full\n                    bg-neutral-900 border border-white/[0.08]\n                    shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]\n                  ">{y && <div className="pointer-events-none absolute inset-0 opacity-25 bg-[linear-gradient(90deg,transparent_0%,rgba(245,158,11,0.5)_50%,transparent_100%)] animate-progress-shimmer" />}<div style={{
                    width: `${S}%`
                  }} className={`
                      relative h-full transition-all duration-500 ease-out rounded-full
                      ${B ? "bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_14px_rgba(16,185,129,0.5)]" : "bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500 shadow-[0_0_14px_rgba(245,158,11,0.5)] animate-progress-flow"}
                    `}><div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-white/40" />{y && <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.45)_50%,transparent_100%)] animate-progress-shimmer" />}</div></div></div>{y && <button type="button" onClick={T} className="\n                    shrink-0 cursor-pointer\n                    flex w-full items-center justify-center gap-2\n                    rounded-xl border border-rose-400/30\n                    bg-gradient-to-b from-rose-500 to-rose-600\n                    hover:from-rose-400 hover:to-rose-500\n                    py-3 text-xs font-semibold text-white\n                    shadow-[0_4px_12px_rgba(244,63,94,0.25)]\n                    active:scale-[0.99] transition-all\n                  "><au.Square className="h-4 w-4 fill-white text-white" /><span>หยุดการทำงาน</span></button>}</div> : <b.Fragment><div className="flex flex-col gap-3 rounded-xl border border-white/[0.08] bg-white/[0.015] p-3.5 flex-1 min-h-0"><div className="flex items-center justify-between shrink-0"><span className="text-xs font-semibold text-neutral-200">เลือกกลุ่มเป้าหมาย ({w ? "เลือกทั้งหมด" : `${s.length}/${l.length} กลุ่ม`})</span>{l.length > 0 && <button type="button" onClick={() => {
                    if (w) {
                      x(false);
                      u([]);
                    } else {
                      x(true);
                      u(l.map(a => a.name));
                    }
                  }} className="cursor-pointer text-[11px] font-medium text-amber-400 hover:text-amber-300 transition-colors">{w ? "ยกเลิกการเลือกทั้งหมด" : "เลือกกลุ่มทั้งหมด"}</button>}</div>{l.length > 3 && <div className="relative shrink-0"><m.Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-500" /><input type="text" value={q} onChange={a => r(a.target.value)} placeholder="ค้นหาชื่อกลุ่มในบัญชีนี้..." className="\n                        w-full rounded-lg border border-white/[0.08] bg-neutral-900/90\n                        py-1.5 pl-8 pr-3 text-xs text-neutral-200 placeholder-neutral-500\n                        focus:border-amber-500/40 focus:outline-none transition-all\n                      " /></div>}{p ? <div className="flex items-center justify-center flex-1 min-h-0 py-8 text-neutral-500 text-xs gap-2"><d.Loader2 className="h-4 w-4 animate-spin text-amber-400" />กำลังโหลดข้อมูลกลุ่ม...</div> : l.length === 0 ? <div className="py-2 flex-1 min-h-0 flex flex-col items-center justify-center"><t.default icon={_Component8} title="ไม่พบกลุ่มในบัญชีนี้" desc="ยังไม่มีการสร้างกลุ่มหรือนำเข้ารายการกลุ่มสำหรับบัญชีนี้" minHeight="min-h-full" className="flex-1 min-h-0 w-full" /></div> : P.length === 0 ? <div className="py-6 text-center text-xs text-neutral-500 flex-1 min-h-0 flex items-center justify-center">ไม่พบกลุ่มที่ตรงกับคำค้นหา “{q}”</div> : <div className="flex-1 min-h-0 overflow-y-auto space-y-1.5 pr-1">{P.map(a => {
                    let c = s.includes(a.name);
                    return <_Component0 group={a} checked={c} onToggle={() => {
                      var b;
                      let c;
                      b = a.name;
                      u(c = s.includes(b) ? s.filter(a => a !== b) : [...s, b]);
                      x(c.length === l.length);
                      return;
                    }} key={a.name} />;
                  })}</div>}{l.length > 0 && <div className="flex items-center justify-between border-t border-white/[0.06] pt-2 text-[11px] text-neutral-400 shrink-0"><span>กลุ่มที่เลือก: {s.length} กลุ่ม</span><span>รวมทั้งหมด: {Q} ลิงก์</span></div>}</div><button type="button" onClick={R} disabled={s.length === 0 || l.length === 0} className="\n                  shrink-0 cursor-pointer\n                  flex w-full items-center justify-center gap-2\n                  rounded-xl border border-amber-400/30\n                  bg-gradient-to-b from-amber-500 to-amber-600\n                  hover:from-amber-400 hover:to-amber-500\n                  py-3 text-xs font-semibold text-white\n                  shadow-[0_4px_12px_rgba(245,158,11,0.25)]\n                  active:scale-[0.99] transition-all\n                  disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100\n                "><ao.Play className="h-4 w-4 fill-white text-white" /><span>เริ่มการทำงาน</span></button></b.Fragment>}</div><div className="flex items-center justify-between border-t border-white/[0.08] px-6 py-3.5 bg-neutral-900/30 shrink-0">{B && <button type="button" onClick={() => {
              C(false);
              M([]);
            }} className="\n                cursor-pointer\n                flex items-center gap-1.5\n                rounded-lg border border-white/10 bg-white/[0.04]\n                px-3 py-1.5 text-xs font-medium text-neutral-300\n                hover:bg-white/[0.08] hover:text-white transition-all\n              "><at.RotateCcw className="h-3.5 w-3.5" /><span>เลือกกลุ่มใหม่</span></button>}<div className="ml-auto"><h.default type="button" variant="secondary" size="sm" onClick={T}>{B ? "ปิดหน้าต่าง" : y ? "หยุดการทำงาน" : "ยกเลิก"}</h.default></div></div></div>{N && <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4" onClick={a => a.stopPropagation()}><div className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/[0.12] bg-neutral-950 shadow-2xl shadow-black"><div className="flex items-center gap-3 border-b border-white/[0.08] px-5 py-4"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-amber-400"><as.AlertTriangle className="h-4 w-4" /></div><div><h4 className="text-sm font-semibold text-white">ยืนยันการหยุดทำงาน</h4><p className="mt-0.5 text-[10px] text-neutral-400">กระบวนการลบโพสต์กำลังดำเนินการอยู่</p></div></div><div className="px-5 py-4 text-xs leading-relaxed text-neutral-300">คุณแน่ใจหรือไม่ที่จะ <span className="font-semibold text-amber-400">หยุดการทำงาน</span> และปิดหน้าต่างนี้? ระบบจะยกเลิกกระบวนการที่กำลังทำงานอยู่ทันที</div><div className="flex items-center justify-end gap-2 border-t border-white/[0.08] bg-neutral-900/40 px-5 py-3.5"><h.default type="button" variant="secondary" size="sm" onClick={() => O(false)}>ดำเนินการต่อ</h.default><button type="button" onClick={U} className="\n                  cursor-pointer\n                  rounded-lg border border-amber-500/30 bg-amber-500\n                  px-3.5 py-1.5 text-xs font-semibold text-white\n                  hover:bg-amber-400 transition-all\n                ">ยืนยัน หยุดและปิด</button></div></div></div>}</div>, document.body);
    } else {
      return null;
    }
  };
  var ax = a.i(39541);
  var ay = a.i(62926);
  var az = a.i(94748);
  var aA = a.i(58262);
  let aB = {
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
  aB.node;
  let _Component11 = (0, e.default)(aB);
  let aD = {
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
  aD.node;
  let _Component1 = (0, e.default)(aD);
  var aF = a.i(84934);
  let aG = {
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
  aG.node;
  let _Component10 = (0, e.default)(aG);
  function aI(a) {
    if (a) {
      return a.normalize("NFKC").replace(/[\u200B-\u200D\uFEFF]/g, "").replace(/[\u0e47-\u0e4c]/g, "").replace(/[^\p{L}\p{N}\s]/gu, "").replace(/\s+/g, "").toLowerCase();
    } else {
      return "";
    }
  }
  let _Component14 = ({
    isOpen: a,
    onClose: e,
    userId: f
  }) => {
    let [g, j] = (0, c.useState)(false);
    let {
      toast: k
    } = (0, i.useToast)();
    let l = (0, I.default)(a => a.openCreateDialog);
    let [o, p] = (0, c.useState)([]);
    let [q, r] = (0, c.useState)(false);
    let [s, u] = (0, c.useState)("");
    let [w, x] = (0, c.useState)("");
    let [y, z] = (0, c.useState)(new Set());
    let [A, B] = (0, c.useState)("url");
    let [C, D] = (0, c.useState)(false);
    let [E, F] = (0, c.useState)(false);
    (0, c.useEffect)(() => {
      j(true);
    }, []);
    (0, c.useEffect)(() => {
      p([]);
      z(new Set());
      x("");
      u("");
      r(false);
      D(false);
      F(false);
    }, [a]);
    let G = () => {
      if (q && f && window.electronApi?.group?.abortGetJoined) {
        window.electronApi.group.abortGetJoined(f).catch(() => {});
      }
      p([]);
      z(new Set());
      x("");
      u("");
      r(false);
      D(false);
      F(false);
      e();
    };
    (0, c.useEffect)(() => {}, [a, f, k]);
    (0, c.useEffect)(() => {
      let b = b => {
        if (b.key === "Escape" && a && !q) {
          G();
        }
      };
      window.addEventListener("keydown", b);
      return () => window.removeEventListener("keydown", b);
    }, [a, q]);
    let H = (0, c.useMemo)(() => {
      let a = aI(w);
      if (a) {
        return o.filter(b => {
          let c = aI(b.name);
          let d = (b.id || "").toLowerCase();
          return c.includes(a) || d.includes(a);
        });
      } else {
        return o;
      }
    }, [o, w]);
    let K = async () => {
      if (!f) {
        k.error("ไม่พบข้อมูลบัญชีผู้ใช้ (userId)", "ข้อผิดพลาด");
        return;
      }
      r(true);
      u("กำลังเปิดเบราว์เซอร์เพื่อสแกนกลุ่ม...");
      z(new Set());
      try {
        let a = await window.electronApi.group.getJoined({
          userId: f
        });
        if (!a.success) {
          r(false);
          u("");
          k.error(a.message || "ไม่สามารถเริ่มการสแกนกลุ่มได้", "ข้อผิดพลาด");
        }
      } catch (a) {
        r(false);
        u("");
        k.error(a?.message || "เกิดข้อผิดพลาดในการเชื่อมต่อ IPC", "ข้อผิดพลาด");
      }
    };
    let L = async () => {
      if (f) {
        try {
          await window.electronApi.group.abortGetJoined(f);
          k.info("กำลังส่งคำสั่งยกเลิก...", "ยกเลิก");
        } catch (a) {
          k.error(a?.message || "ไม่สามารถยกเลิกได้", "ข้อผิดพลาด");
        }
      }
    };
    if (a && g) {
      return (0, J.createPortal)(<div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6"><div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => {
          if (!q) {
            G();
          }
        }} /><div role="dialog" aria-modal="true" className="\n          relative z-10 flex w-full max-w-3xl h-[650px] max-h-[80vh] flex-col overflow-hidden\n          rounded-2xl border border-white/[0.12]\n          bg-neutral-950\n          shadow-[0_16px_48px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.12)]\n          transition-all duration-200 ease-out\n        "><div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20" /><div className="pointer-events-none absolute -left-12 -top-12 h-36 w-36 rounded-full bg-cyan-500/10 blur-2xl" /><div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4 shrink-0"><div className="flex items-center gap-3.5"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"><v.Users className="h-5 w-5" /></div><div><div className="flex items-center gap-2"><h2 className="text-base font-semibold text-white tracking-tight">ค้นหากลุ่มที่เข้าร่วมแล้ว</h2>{f && <span className="font-mono text-[10px] py-0.5 px-2 bg-cyan-500/10 text-cyan-400/80 border border-cyan-500/20 rounded-full">UID: {f}</span>}</div><p className="mt-0.5 text-xs text-neutral-400">สแกนและดึงรายชื่อกลุ่ม Facebook ทั้งหมดที่บัญชีนี้เป็นสมาชิกอยู่</p></div></div><button type="button" disabled={q} onClick={G} aria-label="Close dialog" className="\n              cursor-pointer rounded-lg p-1.5 text-neutral-400\n              hover:bg-white/10 hover:text-white\n              active:scale-95 transition-all disabled:opacity-30\n            "><n.X className="h-5 w-5" /></button></div><div className="flex flex-col gap-3.5 p-6 overflow-hidden flex-1 min-h-0"><div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between shrink-0"><div className="relative flex-1"><input type="text" value={w} onChange={a => x(a.target.value)} placeholder="พิมพ์ค้นหาชื่อกลุ่ม (มีหรือไม่มีวรรณยุกต์ก็ได้)..." className="\n                  w-full bg-neutral-900 border border-white/10 hover:border-white/20\n                  rounded-xl py-2 pl-3.5 pr-9 text-xs text-cyan-200 placeholder:text-neutral-500\n                  outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20\n                  transition-all\n                " />{w ? <button type="button" onClick={() => x("")} className="absolute right-2.5 top-2.5 text-neutral-500 hover:text-white cursor-pointer"><n.X className="h-4 w-4" /></button> : <m.Search className="absolute right-3 top-2.5 h-4 w-4 text-neutral-500 pointer-events-none" />}</div><div className="shrink-0 flex items-center gap-2">{q ? <h.default type="button" variant="danger" size="sm" onClick={L} className="gap-1.5 cursor-pointer text-xs"><_Component1 className="h-3.5 w-3.5" /><span>หยุดสแกน</span></h.default> : <h.default type="button" variant="primary" size="sm" onClick={K} className="gap-1.5 cursor-pointer text-xs bg-cyan-600 hover:bg-cyan-500 border-cyan-400/30 text-white"><aA.RefreshCw className="h-3.5 w-3.5" /><span>{o.length > 0 ? "สแกนใหม่อีกครั้ง" : "เริ่มสแกนจาก Facebook"}</span></h.default>}</div></div>{q ? <div className="flex-1 min-h-0 flex flex-col"><t.default icon={<d.Loader2 className="h-7 w-7 text-cyan-400 animate-spin" />} title={s || "กำลังเชื่อมต่อระบบและสแกนหน้ากลุ่ม Facebook..."} desc="ระบบกำลังเลื่อนหน้าจออัตโนมัติเบื้องหลัง คุณสามารถรอหรือกดปุ่มหยุดสแกนได้ตลอดเวลา" minHeight="min-h-full" className="flex-1 min-h-0 w-full" action={<h.default type="button" variant="danger" size="sm" onClick={L} className="gap-2 cursor-pointer border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20"><_Component1 className="h-4 w-4" /><span>หยุดสแกน</span></h.default>} /></div> : o.length === 0 ? <div className="flex-1 min-h-0 flex flex-col"><t.default icon={v.Users} iconColor="text-cyan-400" title="ยังไม่มีข้อมูลกลุ่มที่สแกน" desc="กดปุ่ม 'เริ่มสแกนจาก Facebook' ด้านบนเพื่อเปิดเบราว์เซอร์และดึงรายชื่อกลุ่มที่คุณเข้าร่วมแล้วทั้งหมด" minHeight="min-h-full" className="flex-1 min-h-0 w-full" action={<h.default type="button" variant="primary" size="sm" onClick={K} className="gap-2 cursor-pointer bg-cyan-600 hover:bg-cyan-500 border-cyan-400/30 text-white"><aA.RefreshCw className="h-3.5 w-3.5" /><span>เริ่มสแกนจาก Facebook</span></h.default>} /></div> : H.length === 0 ? <div className="flex-1 min-h-0 flex flex-col"><t.default icon={m.Search} iconColor="text-cyan-400" title="ไม่พบกลุ่มที่ตรงกับคำค้นหา" desc={`ไม่พบชื่อกลุ่มที่มีคำว่า "${w}" ในรายการที่สแกนได้`} minHeight="min-h-full" className="flex-1 min-h-0 w-full" action={<h.default type="button" variant="secondary" size="sm" onClick={() => x("")} className="gap-1.5 cursor-pointer"><n.X className="h-3.5 w-3.5" /><span>ล้างคำค้นหา</span></h.default>} /></div> : <div className="flex flex-col gap-2 flex-1 min-h-0 overflow-hidden"><div className="flex flex-wrap items-center justify-between gap-2 bg-neutral-900/60 border border-white/[0.08] rounded-xl px-3.5 py-2 text-xs shrink-0"><label className="flex items-center gap-2 cursor-pointer select-none"><div onClick={() => {
                    if (y.size === H.length) {
                      z(new Set());
                    } else {
                      z(new Set(H.map(a => a.id)));
                    }
                  }} className={`
                      flex h-4 w-4 shrink-0 items-center justify-center rounded-md border
                      transition-all
                      ${y.size === H.length && H.length > 0 ? "bg-cyan-500 border-cyan-400 text-neutral-950" : "bg-neutral-900 border-white/20 hover:border-white/40"}
                    `}>{y.size === H.length && H.length > 0 && <ap.Check className="h-3 w-3 stroke-[3]" />}</div><span className="text-[11px] font-medium text-neutral-300">เลือกทั้งหมด (พบ {H.length} กลุ่ม | เลือกแล้ว {y.size} กลุ่ม)</span></label><div className="flex items-center gap-2"><div className="relative"><button type="button" onClick={() => D(!C)} className="flex items-center gap-1.5 bg-neutral-950 border border-white/10 hover:border-white/20 rounded-lg px-2.5 py-1 text-[11px] text-neutral-300 cursor-pointer transition-all"><span>{A === "url" ? "ลิงก์ URL" : "Group ID"}</span><az.ChevronDown className={`h-3 w-3 text-neutral-500 transition-transform ${C ? "rotate-180" : ""}`} /></button>{C && <b.Fragment><div className="fixed inset-0 z-20" onClick={() => D(false)} /><div className="absolute right-0 mt-1 z-30 w-28 rounded-lg border border-white/10 bg-neutral-950 p-1 shadow-xl flex flex-col gap-0.5"><button type="button" onClick={() => {
                          B("url");
                          D(false);
                        }} className={`px-2.5 py-1.5 text-left text-[11px] rounded cursor-pointer ${A === "url" ? "bg-cyan-500/10 text-cyan-300" : "text-neutral-400 hover:bg-white/5"}`}>ลิงก์ URL</button><button type="button" onClick={() => {
                          B("id");
                          D(false);
                        }} className={`px-2.5 py-1.5 text-left text-[11px] rounded cursor-pointer ${A === "id" ? "bg-cyan-500/10 text-cyan-300" : "text-neutral-400 hover:bg-white/5"}`}>Group ID</button></div></b.Fragment>}</div><button type="button" onClick={() => {
                    let a = o.filter(a => y.has(a.id));
                    if (a.length === 0) {
                      k.warning("กรุณาเลือกกลุ่มที่ต้องการคัดลอกอย่างน้อย 1 กลุ่ม", "แจ้งเตือน");
                      return;
                    }
                    let b = a.map(a => A === "id" ? a.id : a.url).join("\n");
                    navigator.clipboard.writeText(b);
                    F(true);
                    k.success(A === "id" ? `คัดลอก ID ทั้งหมด ${a.length} กลุ่มเรียบร้อยแล้ว` : `คัดลอกลิงก์ URL ทั้งหมด ${a.length} กลุ่มเรียบร้อยแล้ว`, "คัดลอกสำเร็จ");
                    setTimeout(() => F(false), 2000);
                  }} disabled={y.size === 0} className="\n                      flex items-center gap-1.5 px-3 py-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10\n                      text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 text-[11px] font-medium\n                      transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer\n                    ">{E ? <ap.Check className="h-3 w-3 text-emerald-400" /> : <ax.Copy className="h-3 w-3" />}<span>คัดลอก ({y.size})</span></button></div></div><div className="flex flex-col gap-1.5 overflow-y-auto flex-1 min-h-0 pr-1">{H.map(a => {
                  let c = y.has(a.id);
                  return <div onClick={() => {
                    var b;
                    b = a.id;
                    z(a => {
                      let c = new Set(a);
                      if (c.has(b)) {
                        c.delete(b);
                      } else {
                        c.add(b);
                      }
                      return c;
                    });
                    return;
                  }} className={`
                        group relative flex items-center justify-between gap-3 p-3
                        rounded-xl border text-xs cursor-pointer select-none transition-all duration-150
                        ${c ? "bg-cyan-500/[0.04] border-cyan-500/30 shadow-[inset_0_1px_0_rgba(6,182,212,0.15)]" : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12]"}
                      `} key={a.id}><div className="flex items-center gap-3 min-w-0 flex-1"><div className={`
                            flex h-4 w-4 shrink-0 items-center justify-center rounded-md border
                            transition-all
                            ${c ? "bg-cyan-500 border-cyan-400 text-neutral-950" : "bg-neutral-900 border-white/20 group-hover:border-white/40"}
                          `}>{c && <ap.Check className="h-3 w-3 stroke-[3]" />}</div><div className="relative shrink-0">{a.avatar ? <img src={a.avatar} alt={a.name} className="h-9 w-9 rounded-lg object-cover border border-white/10" /> : <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-neutral-900 text-xs font-semibold text-neutral-400">{a.name.slice(0, 1).toUpperCase()}</div>}</div><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><span className="truncate font-semibold text-neutral-200 group-hover:text-white transition-colors">{a.name}</span></div><div className="flex items-center gap-2 mt-0.5 text-[10px] text-neutral-400">{a.privacy && <span className="flex items-center gap-1">{a.privacy.includes("สาธารณะ") || a.privacy.toLowerCase().includes("public") ? <aF.Globe className="h-3 w-3 text-cyan-400" /> : <_Component10 className="h-3 w-3 text-amber-400" />}<span>{a.privacy}</span></span>}{a.members && <span>• {a.members}</span>}<span className="font-mono text-neutral-500 truncate max-w-[120px]">ID: {a.id}</span></div></div></div><div className="shrink-0 flex items-center gap-1.5" onClick={a => a.stopPropagation()}><a href={a.url} target="_blank" rel="noreferrer" title="เปิดหน้ากลุ่มบนเบราว์เซอร์" className="\n                            p-1.5 rounded-lg border border-white/10 bg-neutral-900/80\n                            text-neutral-400 hover:text-cyan-400 hover:border-cyan-500/30\n                            transition-all cursor-pointer flex items-center justify-center\n                          "><ay.ExternalLink className="h-3.5 w-3.5" /></a></div></div>;
                })}</div></div>}</div><div className="flex items-center justify-between border-t border-white/[0.08] px-6 py-3.5 bg-neutral-900/40 shrink-0"><h.default type="button" variant="secondary" size="sm" disabled={q} onClick={G}>ปิดหน้าต่าง</h.default><h.default type="button" variant="primary" size="sm" disabled={y.size === 0 || q} onClick={() => {
              let a = o.filter(a => y.has(a.id));
              let b = a.map(a => a.url);
              if (b.length === 0) {
                k.warning("กรุณาเลือกกลุ่มที่ต้องการนำเข้าอย่างน้อย 1 กลุ่ม", "แจ้งเตือน");
                return;
              }
              let c = a.length === 1 ? a[0].name : `${a[0].name} (${a.length} กลุ่ม)`;
              G();
              l({
                name: c,
                link: b
              });
              k.success(`ส่งออก ${b.length} ลิงก์ไปยังหน้าสร้างกลุ่มเรียบร้อยแล้ว`, "ส่งออกสำเร็จ");
            }} className="gap-2 cursor-pointer bg-cyan-600 hover:bg-cyan-500 border-cyan-400/30 text-white disabled:opacity-40"><_Component11 className="h-4 w-4" /><span>ส่งออกไปยังสร้างกลุ่มใหม่ ({y.size})</span></h.default></div></div></div>, document.body);
    } else {
      return null;
    }
  };
  let _Component15 = ({
    userId: a
  } = {}) => {
    let [d, e] = (0, c.useState)(false);
    let [f, g] = (0, c.useState)(false);
    let [i, j] = (0, c.useState)(false);
    let k = (0, x.useParams)();
    let l = a ?? k?.id ?? undefined;
    return <div><h.default variant="secondary" onClick={() => e(true)} className="cursor-pointer gap-2"><_Component5 className="h-4 w-4" />เครื่องมือ</h.default><_Component12 isOpen={d} onClose={() => e(false)} userId={l} onSelectTool={a => {
        if (a === "delete-pending-groups") {
          e(false);
          g(true);
        } else if (a === "scan-joined-groups") {
          e(false);
          j(true);
        }
      }} /><_Component13 isOpen={f} onClose={() => g(false)} userId={l} /><_Component14 isOpen={i} onClose={() => j(false)} userId={l} /></div>;
  };
  let _Component24 = ({
    userId: a
  } = {}) => {
    let {
      groups: d,
      statusFilter: e,
      setStatusFilter: f
    } = (0, I.default)();
    let g = (0, c.useMemo)(() => {
      let a = 0;
      let b = 0;
      for (let c of d) {
        if (c.isActive !== false) {
          a++;
        } else {
          b++;
        }
      }
      return {
        all: d.length,
        active: a,
        inactive: b
      };
    }, [d]);
    let h = [{
      id: "all",
      label: "กลุ่มทั้งหมด",
      count: g.all,
      color: "blue"
    }, {
      id: "active",
      label: "เปิดใช้งาน",
      count: g.active,
      color: "emerald"
    }, {
      id: "inactive",
      label: "ปิดใช้งาน",
      count: g.inactive,
      color: "red"
    }];
    return <div className="flex items-center justify-between "><ad.default options={h} value={e} onChange={f} /><div className="flex gap-3"><_Component15 userId={a} /><_Component16 /><_Component17 userId={a} /></div></div>;
  };
  let aM = {
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
  aM.node;
  let _Component19 = (0, e.default)(aM);
  let aO = {
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
  aO.node;
  let _Component18 = (0, e.default)(aO);
  var aQ = a.i(75140);
  let _Component20 = ({
    onClose: a
  }) => {
    let {
      toast: e
    } = (0, i.useToast)();
    let {
      customProfileInitialData: f,
      selectAvatar: g,
      saveCustomProfile: k
    } = (0, j.default)();
    let l = !!f?.isEdit;
    let m = f?.name || "";
    let o = f?.userId || "";
    let q = f?.avatarPreview || f?.imagePath || null;
    let [r, s] = (0, c.useState)(m);
    let [t, u] = (0, c.useState)(o);
    let [v, w] = (0, c.useState)(f?.imagePath || null);
    let [x, y] = (0, c.useState)(q);
    let [z, A] = (0, c.useState)(false);
    let [C, D] = (0, c.useState)(false);
    let [E, F] = (0, c.useState)(null);
    let G = (0, c.useRef)(null);
    (0, c.useEffect)(() => {
      let b = b => {
        if (b.key === "Escape" && !z) {
          a();
        }
      };
      window.addEventListener("keydown", b);
      return () => window.removeEventListener("keydown", b);
    }, [z, a]);
    let H = async () => {
      try {
        F(null);
        let a = await g();
        if (a) {
          w(a.filePath);
          y(a.previewUrl || a.filePath);
        }
      } catch (a) {
        console.error("Failed to select avatar:", a);
        e.error("ไม่สามารถเปิดหน้าต่างเลือกรูปภาพได้");
      }
    };
    let I = async b => {
      b.preventDefault();
      F(null);
      if (!r.trim()) {
        F("กรุณาระบุชื่อโปรไฟล์");
        return;
      }
      A(true);
      try {
        let b = await k({
          name: r.trim(),
          userId: t.trim() || undefined,
          imagePath: v || undefined,
          isEdit: l,
          originalId: f?.originalId || (l ? o : undefined)
        });
        if (b?.success) {
          e.success(b.message || "บันทึกโปรไฟล์สำเร็จ", "สำเร็จ");
          a();
        } else {
          F(b?.message || "ไม่สามารถบันทึกโปรไฟล์ได้");
          e.error(b?.message || "ไม่สามารถบันทึกโปรไฟล์ได้", "ข้อผิดพลาด");
        }
      } catch (b) {
        let a = b instanceof Error ? b.message : "เกิดข้อผิดพลาดในการบันทึก";
        F(a);
        e.error(a, "ข้อผิดพลาด");
      } finally {
        A(false);
      }
    };
    return <div className="\n        relative z-10 w-full max-w-md\n        rounded-2xl border border-white/[0.12]\n        bg-neutral-950 p-6 text-white shadow-2xl\n        shadow-[0_16px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)]\n      "><div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-white/20" /><div className="pointer-events-none absolute -left-12 -top-12 h-36 w-36 rounded-full bg-blue-500/[0.08] blur-3xl" /><div className="flex items-center justify-between pb-4 border-b border-white/[0.08]"><div className="flex items-center gap-2.5"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/25 text-blue-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"><aQ.Sparkles size={18} /></div><div><h3 className="text-base font-semibold text-white tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">{l ? "แก้ไขโปรไฟล์ (Custom Profile)" : "เพิ่มโปรไฟล์ (Custom Profile)"}</h3><p className="text-xs text-neutral-400">{l ? "ปรับแต่งชื่อและรูปภาพโปรไฟล์ของบัญชีนี้" : "กำหนดชื่อและรูปภาพโปรไฟล์ได้ตามต้องการ (ใส่ได้ 1 ภาพ)"}</p></div></div><button type="button" onClick={a} disabled={z} className="rounded-lg p-1.5 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-50 cursor-pointer"><n.X size={18} /></button></div><form onSubmit={I} className="mt-5 space-y-5"><div><div className="flex items-center justify-between mb-2"><label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">รูปภาพโปรไฟล์ (ใส่ได้ 1 ภาพ)</label><span className="text-[11px] font-medium text-blue-400/90 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">สูงสุด 1 ภาพ</span></div><div onDragOver={a => {
            a.preventDefault();
            D(true);
          }} onDragLeave={() => D(false)} onDrop={a => {
            a.preventDefault();
            D(false);
            F(null);
            let b = a.dataTransfer.files;
            if (!b || b.length === 0) {
              return;
            }
            let c = b[0];
            if (!c.type.startsWith("image/")) {
              F("กรุณาเลือกไฟล์รูปภาพเท่านั้น (.jpg, .jpeg, .png, .webp)");
              return;
            }
            let d = new FileReader();
            d.onload = () => {
              let a = d.result;
              w(a);
              y(a);
            };
            d.readAsDataURL(c);
          }} className={`
              relative flex flex-col items-center justify-center
              rounded-xl border-2 border-dashed p-4
              transition-all duration-200
              ${C ? "border-blue-400 bg-blue-500/[0.08]" : "border-white/[0.12] bg-neutral-900/60 hover:border-white/25 hover:bg-neutral-900"}
            `}>{x ? <div className="flex flex-col items-center gap-3"><div className="relative group/avatar"><div className="h-24 w-24 overflow-hidden rounded-2xl border-2 border-blue-500/40 shadow-[0_6px_16px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] bg-neutral-950"><img src={x} alt="Avatar Preview" className="h-full w-full object-cover" /></div><button type="button" onClick={H} title="เปลี่ยนรูปภาพ" className="\n                      absolute inset-0 flex flex-col items-center justify-center gap-1\n                      rounded-2xl bg-black/60 opacity-0 group-hover/avatar:opacity-100\n                      transition-opacity duration-150 backdrop-blur-xs cursor-pointer text-xs font-medium text-white\n                    "><_Component18 size={18} /><span>เปลี่ยนรูป</span></button></div><div className="flex items-center gap-2"><h.default type="button" variant="secondary" size="sm" onClick={H} disabled={z} className="gap-1.5 text-xs h-8"><_Component19 size={13} /><span>เลือกรูปใหม่</span></h.default><h.default type="button" variant="danger" size="sm" onClick={() => {
                  w(null);
                  y(null);
                  if (G.current) {
                    G.current.value = "";
                  }
                }} disabled={z} className="gap-1.5 text-xs h-8"><p.Trash2 size={13} /><span>ลบรูป</span></h.default></div></div> : <div className="flex flex-col items-center text-center"><div className="mb-2 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.12] bg-neutral-950/80 text-neutral-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"><B size={28} className="opacity-70" /></div><p className="text-xs font-medium text-neutral-200">ลากรูปภาพมาวางที่นี่ หรือคลิกปุ่มเพื่อเลือกรูป</p><p className="mt-1 text-[11px] text-neutral-400">รองรับ JPG, PNG, WEBP (ใส่ได้ 1 ภาพ)</p><div className="mt-3 flex items-center gap-2"><h.default type="button" variant="primary" size="sm" onClick={H} disabled={z} className="gap-1.5 text-xs h-8 cursor-pointer"><_Component19 size={13} /><span>เลือกรูปภาพ</span></h.default></div></div>}<input ref={G} type="file" accept="image/*" className="hidden" onChange={a => {
              let b = a.target.files;
              if (!b || b.length === 0) {
                return;
              }
              let c = b[0];
              if (!c.type.startsWith("image/")) {
                F("กรุณาเลือกไฟล์รูปภาพเท่านั้น");
                return;
              }
              let d = new FileReader();
              d.onload = () => {
                let a = d.result;
                w(a);
                y(a);
              };
              d.readAsDataURL(c);
            }} /></div></div><div><label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-300">ชื่อโปรไฟล์ / ชื่อบัญชี <span className="text-rose-400">*</span></label><div className="relative"><input type="text" required={true} placeholder="เช่น บัญชีหลัก, John Doe, ร้านค้าออนไลน์..." value={r} onChange={a => {
              s(a.target.value);
              if (E) {
                F(null);
              }
            }} disabled={z} className="\n                h-10 w-full rounded-xl border border-white/[0.12]\n                bg-neutral-900/90 px-3.5 text-sm text-white\n                placeholder-neutral-500 outline-none transition-all\n                focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50\n                shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]\n              " /></div></div><div><div className="flex items-center justify-between mb-1.5"><label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">Facebook UID / รหัสบัญชี</label><span className="text-[11px] text-neutral-500">{l ? "(ไม่สามารถเปลี่ยนรหัสได้)" : "(ไม่ใส่ก็ได้)"}</span></div><input type="text" placeholder={l ? t : "เช่น 1000847291823 หรือเว้นว่างให้ระบบสร้างอัตโนมัติ"} value={t} onChange={a => u(a.target.value)} disabled={z || l} className="\n              h-10 w-full rounded-xl border border-white/[0.12]\n              bg-neutral-900/90 px-3.5 text-sm font-mono text-white\n              placeholder-neutral-500 outline-none transition-all\n              focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50\n              disabled:opacity-50 disabled:cursor-not-allowed\n              shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]\n            " />{!l && <p className="mt-1 text-[11px] text-neutral-500 leading-normal">หากเว้นว่างไว้ ระบบจะสร้างรหัสประจำตัวให้อัตโนมัติ (<span className="font-mono text-neutral-400">custom_...</span>)</p>}</div>{E && <div className="rounded-lg bg-rose-500/10 border border-rose-500/25 px-3 py-2 text-xs text-rose-300">{E}</div>}<div className="flex items-center justify-end gap-3 pt-3 border-t border-white/[0.08]"><h.default type="button" variant="secondary" onClick={a} disabled={z} className="cursor-pointer">ยกเลิก</h.default><h.default type="submit" variant="primary" disabled={z} className="gap-2 cursor-pointer">{z && <d.Loader2 className="h-4 w-4 animate-spin text-white" />}<span>{l ? "บันทึกการแก้ไข" : "บันทึกโปรไฟล์"}</span></h.default></div></form></div>;
  };
  let aS = () => () => {};
  let _Component27 = () => {
    let {
      isCustomProfileOpen: a,
      closeCustomProfile: d
    } = (0, j.default)();
    let e = (0, c.useSyncExternalStore)(aS, () => true, () => false);
    if (a && e) {
      return (0, J.createPortal)(<div className="fixed inset-0 z-[100] flex items-center justify-center p-4"><div className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity" onClick={d} /><_Component20 onClose={d} /></div>, document.body);
    } else {
      return null;
    }
  };
  a.s(["default", 0, () => {
    let [a, e] = (0, c.useState)("");
    let {
      accounts: f,
      selectedAccountId: g,
      setSelectedAccountId: h,
      isLoading: i
    } = (0, j.default)();
    (0, c.useEffect)(() => {
      if (!g && f.length > 0) {
        h(f[0].id);
      }
    }, [f, g, h]);
    let k = f.find(a => a.id === g);
    return <div className="grid h-full min-h-0 w-full grid-cols-12 gap-6"><div className="col-span-4 xl:col-span-3 flex flex-col min-h-0 border-r border-white/10 pr-6"><_Component21 count={f.length} /><_Component22 value={a} onChange={e} /><div className="flex-1 min-h-0 overflow-y-auto pr-1"><_Component23 searchQuery={a} selectedAccountId={g} onSelectAccount={a => h(a.id)} /></div></div><div className="col-span-8 xl:col-span-9 flex flex-col min-h-0 overflow-hidden">{k ? <b.Fragment><div className="mb-4 shrink-0"><_Component24 userId={k.id} /></div><div className="flex-1 min-h-0 overflow-y-auto pr-1"><_Component25 userId={k.id} /></div></b.Fragment> : i ? <div className="flex h-full w-full items-center justify-center"><div className="flex flex-col items-center gap-3 text-neutral-400"><d.Loader2 className="h-7 w-7 animate-spin text-blue-500" /><span className="text-sm font-medium">กำลังโหลดข้อมูล...</span></div></div> : <_Component26 hasAccounts={f.length > 0} />}</div><_Component27 /></div>;
  }], 43114);
}, 44203, (a, b, c) => {
  let d = ["LIKE", "LOVE", "CARE", "HAHA", "WOW", "SAD", "ANGRY"];
  function e(a) {
    if (!a) {
      return [];
    }
    let b = [];
    if (Array.isArray(a)) {
      b = a.map(a => typeof a == "string" ? a.trim() : a && typeof a == "object" && a.url ? String(a.url).trim() : "").filter(Boolean);
    } else if (typeof a == "string") {
      b = a.split(/\r?\n/).map(a => a.trim()).filter(Boolean);
    }
    return b;
  }
  function f(a = {}) {
    let b = 0;
    if (Array.isArray(a.images)) {
      b += a.images.filter(Boolean).length;
    }
    if (Array.isArray(a.newImages)) {
      b += a.newImages.filter(Boolean).length;
    }
    if (Array.isArray(a.existingImages)) {
      b += a.existingImages.filter(Boolean).length;
    }
    if (typeof a.imageCount == "number" && a.imageCount > 0) {
      b = Math.max(b, a.imageCount);
    }
    return b;
  }
  function g(a = {}) {
    let b = {};
    let c = a.name != null ? String(a.name).trim() : "";
    if (!c) {
      b.name = "กรุณาระบุชื่อกลุ่ม (Group name is required)";
    }
    let h = e(a.link !== undefined ? a.link : a.links);
    if (h.length === 0) {
      b.link = "กรุณาระบุลิงก์กลุ่มเป้าหมายอย่างน้อย 1 ลิงก์ (At least 1 group link is required)";
    }
    let i = a.content != null ? String(a.content).trim() : "";
    let j = f(a);
    if (!(i.length > 0) && !(j > 0)) {
      b.contentOrImage = "ต้องระบุข้อความโพสต์ (Content) หรือรูปภาพ (Image) อย่างน้อย 1 อย่าง";
    }
    let k = "";
    if (a.reaction != null && String(a.reaction).trim() !== "") {
      let c = String(a.reaction).trim().toUpperCase();
      if (d.includes(c)) {
        k = c;
      } else {
        b.reaction = `Reaction ไม่ถูกต้อง (รองรับ: ${d.join(", ")})`;
      }
    }
    let l = "";
    if (a.comments != null) {
      l = String(a.comments).trim();
    } else if (a.comment != null) {
      l = String(a.comment).trim();
    }
    let m = Object.keys(b).length === 0;
    let n = b.name || b.link || b.contentOrImage || b.reaction || "";
    return {
      isValid: m,
      errors: b,
      message: n,
      sanitizedData: {
        name: c,
        links: h,
        content: i,
        comments: l,
        reaction: k,
        images: Array.isArray(a.images) ? a.images : [],
        existingImages: Array.isArray(a.existingImages) ? a.existingImages : [],
        newImages: Array.isArray(a.newImages) ? a.newImages : [],
        totalImagesCount: j,
        randomContent: !!a.randomContent,
        randomImage: !!a.randomImage,
        randomReaction: !!a.randomReaction
      }
    };
  }
  b.exports = {
    validateGroup: g,
    isValidGroup: function (a) {
      return g(a).isValid;
    },
    ALLOWED_REACTIONS: d,
    extractValidLinks: e,
    countTotalImages: f
  };
  b.exports.default = g;
}];

//# sourceMappingURL=_1teri_a._.js.map
