(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28926,e=>{"use strict";var t=e.i(66497),r=e.i(2692);let a={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};a.node;let s=(0,r.default)(a);var l=e.i(64282),n=e.i(55718),i=e.i(57445),o=e.i(93652);let c=()=>{let{isAllRunning:e,isActionLoading:r,startAll:a,cancelAll:c}=(0,o.default)(),d=r("all"),x=async()=>{d||(e?await c():await a())};return(0,t.jsx)("div",{children:(0,t.jsx)(i.default,{variant:e?"danger":"primary",size:"md",onClick:x,disabled:d,children:d?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.Loader2,{size:16,className:"animate-spin"}),(0,t.jsx)("span",{children:e?"กำลังหยุดทั้งหมด...":"กำลังเริ่มทั้งหมด..."})]}):e?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Square,{size:15,className:"fill-current"}),(0,t.jsx)("span",{children:"หยุดทำงานทั้งหมด"})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{size:16}),(0,t.jsx)("span",{children:"เริ่มทำงานทั้งหมด"})]})})})};var d=e.i(10977);let x={name:"list",size:24,node:[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]]};x.node;let u=(0,r.default)(x);var h=e.i(32705);let p={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};p.node;let m=(0,r.default)(p),g={blue:{activeBorder:"border-blue-500/40",activeRing:"ring-1 ring-blue-500/25",activeTopLine:"bg-blue-400/40",activeSoftLight:"bg-blue-500/[0.12]",activeIcon:"text-blue-400",activeCountText:"text-blue-300",activeGlow:"shadow-blue-500/10"},emerald:{activeBorder:"border-emerald-500/40",activeRing:"ring-1 ring-emerald-500/25",activeTopLine:"bg-emerald-400/40",activeSoftLight:"bg-emerald-500/[0.12]",activeIcon:"text-emerald-400",activeCountText:"text-emerald-300",activeGlow:"shadow-emerald-500/10"},amber:{activeBorder:"border-amber-500/40",activeRing:"ring-1 ring-amber-500/25",activeTopLine:"bg-amber-400/40",activeSoftLight:"bg-amber-500/[0.12]",activeIcon:"text-amber-400",activeCountText:"text-amber-300",activeGlow:"shadow-amber-500/10"},rose:{activeBorder:"border-rose-500/40",activeRing:"ring-1 ring-rose-500/25",activeTopLine:"bg-rose-400/40",activeSoftLight:"bg-rose-500/[0.12]",activeIcon:"text-rose-400",activeCountText:"text-rose-300",activeGlow:"shadow-rose-500/10"},red:{activeBorder:"border-red-500/40",activeRing:"ring-1 ring-red-500/25",activeTopLine:"bg-red-400/40",activeSoftLight:"bg-red-500/[0.12]",activeIcon:"text-red-400",activeCountText:"text-red-300",activeGlow:"shadow-red-500/10"},purple:{activeBorder:"border-purple-500/40",activeRing:"ring-1 ring-purple-500/25",activeTopLine:"bg-purple-400/40",activeSoftLight:"bg-purple-500/[0.12]",activeIcon:"text-purple-400",activeCountText:"text-purple-300",activeGlow:"shadow-purple-500/10"}},b={sm:{button:"h-8 px-3 text-xs gap-2 rounded-xl",icon:"h-3.5 w-3.5",text:"text-xs",count:"text-[11px] pl-2.5 ml-1.5"},md:{button:"h-10 px-3.5 text-sm gap-2.5 rounded-xl",icon:"h-4 w-4",text:"text-sm",count:"text-xs pl-3 ml-2"},lg:{button:"h-12 px-4.5 text-base gap-3 rounded-2xl",icon:"h-5 w-5",text:"text-base",count:"text-sm pl-3.5 ml-2.5"}},f=({items:e,options:r,value:a,onChange:s,className:l="",size:n="md",disabled:i=!1})=>{let o=e??r??[],[c,x]=(0,d.useState)(()=>o[0]?.id??o[0]?.value),u=void 0!==a?a:c,h=b[n]??b.md;return(0,t.jsx)("div",{className:`
        inline-flex items-center gap-2 rounded-2xl
        border border-white/[0.08] bg-neutral-950/80 p-1.5
        shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.05)]
        backdrop-blur-md
        ${i?"opacity-50 pointer-events-none":""}
        ${l}
      `,children:o.map(e=>{let r,a=e.id??e.value,l=u===a,n=i||e.disabled,o=e.color&&g[e.color]?e.color:"blue",c=g[o];return(0,t.jsxs)("button",{type:"button",disabled:n,onClick:()=>{!i&&(s?s(a):x(a))},className:`
              group relative
              flex items-center
              overflow-hidden
              border
              ${h.button}
              cursor-pointer select-none
              transition-all duration-200 ease-out

              ${l?`
                    bg-neutral-950
                    ${c.activeBorder}
                    ${c.activeRing}
                    ${c.activeGlow}
                    text-white
                    shadow-[0_4px_0_rgba(0,0,0,0.45),0_10px_20px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.16),inset_0_-1px_2px_rgba(0,0,0,0.5)]
                    active:translate-y-[2px]
                    active:shadow-[0_2px_0_rgba(0,0,0,0.45),0_4px_8px_rgba(0,0,0,0.25)]
                  `:`
                    bg-neutral-950/70
                    border-white/[0.08]
                    text-neutral-400
                    hover:text-neutral-200
                    hover:border-white/[0.14]
                    hover:bg-neutral-900/80
                    shadow-[0_3px_0_rgba(0,0,0,0.35),0_6px_12px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.08),inset_0_-1px_1px_rgba(0,0,0,0.4)]
                    hover:shadow-[0_4px_0_rgba(0,0,0,0.4),0_8px_16px_rgba(0,0,0,0.22),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_1px_rgba(0,0,0,0.4)]
                    active:translate-y-[1.5px]
                    active:shadow-[0_1.5px_0_rgba(0,0,0,0.35),0_3px_6px_rgba(0,0,0,0.18)]
                  `}
              ${n?"opacity-40 cursor-not-allowed pointer-events-none":""}
            `,children:[(0,t.jsx)("div",{className:`
                pointer-events-none
                absolute inset-x-2.5 top-0
                h-px
                transition-all duration-200
                ${l?c.activeTopLine:"bg-white/10 group-hover:bg-white/20"}
              `}),(0,t.jsx)("div",{className:`
                pointer-events-none
                absolute -left-6 -top-6
                h-16 w-16
                rounded-full
                blur-xl
                transition-all duration-300
                ${l?c.activeSoftLight:"bg-white/[0.02] group-hover:bg-white/[0.05]"}
              `}),(0,t.jsxs)("div",{className:"relative z-10 flex items-center gap-[inherit]",children:[e.icon&&(0,t.jsx)(t.Fragment,{children:d.default.isValidElement(e.icon)?(0,t.jsx)("span",{className:`
                        shrink-0 transition-transform duration-200 group-hover:scale-105
                        ${l?`${c.activeIcon} drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]`:"text-neutral-500 group-hover:text-neutral-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"}
                      `,children:e.icon}):(r=e.icon,(0,t.jsx)(r,{className:`
                            ${h.icon} shrink-0
                            transition-transform duration-200 group-hover:scale-105
                            ${l?`${c.activeIcon} drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]`:"text-neutral-500 group-hover:text-neutral-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"}
                          `,strokeWidth:1.8}))}),(0,t.jsx)("span",{className:`
                  font-medium whitespace-nowrap
                  ${h.text}
                  ${l?"text-white font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]":"text-neutral-400 group-hover:text-neutral-200"}
                `,children:e.label}),"number"==typeof e.count&&(0,t.jsx)("span",{className:`
                    border-l
                    font-semibold tabular-nums
                    ${h.count}
                    ${l?`border-white/[0.15] ${c.activeCountText} drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]`:"border-white/[0.08] text-neutral-500 group-hover:text-neutral-300"}
                  `,children:e.count})]}),(0,t.jsx)("div",{className:"\n                pointer-events-none\n                absolute\n                inset-x-0\n                bottom-0\n                h-2.5\n                bg-gradient-to-t\n                from-black/25\n                to-transparent\n              "})]},String(a))})})};var v=e.i(66842);let w=({className:e="",size:r="md",value:a,onChange:s})=>{let{accounts:l}=(0,v.default)(),{workerFilter:n,setWorkerFilter:i,isUserRunning:c}=(0,o.default)(),x=(0,d.useMemo)(()=>{let e=0,t=0;for(let r of l)c(r.id)?e++:t++;return{all:l.length,running:e,idle:t}},[l,c]),p=(0,d.useMemo)(()=>[{id:"all",label:"ข้อมูลทั้งหมด",count:x.all,icon:u,color:"blue"},{id:"running",label:"กำลังทำงาน",count:x.running,icon:h.Play,color:"emerald"},{id:"idle",label:"ว่างงาน",count:x.idle,icon:m,color:"amber"}],[x]);return(0,t.jsx)(f,{items:p,value:a??n,onChange:s??i,size:r,className:e})};var _=e.i(55932),j=e.i(9741);let k=({userId:e,userName:r,className:a=""})=>{let{isUserRunning:c,isActionLoading:d,startUser:x,cancelUser:u}=(0,o.default)(),h=c(e),p=d(e),m=async t=>{t.stopPropagation(),p||(h?await u(e):await x(e))};return(0,t.jsx)(i.default,{variant:h?"danger":"primary",size:"sm",onClick:m,disabled:p,className:`shadow-sm ${a}`,title:h?`หยุดการทำงานของ ${r||e}`:`เริ่มการทำงานของ ${r||e}`,children:p?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.Loader2,{size:13,className:"animate-spin"}),(0,t.jsx)("span",{children:h?"กำลังหยุด...":"กำลังเริ่ม..."})]}):h?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Square,{size:12,className:"fill-current"}),(0,t.jsx)("span",{children:"หยุดทำงาน"})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{size:13}),(0,t.jsx)("span",{children:"เริ่มทำงาน"})]})})};var y=e.i(14024),N=e.i(40702),S=e.i(26874),$=e.i(24091),L=e.i(83870);let z={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]};z.node;let M=(0,r.default)(z);var C=e.i(28719);let T=({userId:e,stats:r,className:a=""})=>{let{accountStats:s,fetchAccountStats:l,initStatsListeners:n}=(0,C.default)(),i=e?String(e):"";(0,d.useEffect)(()=>{if(i){l(i);let e=n();return()=>{e()}}},[i,l,n]);let o=r||(i?s[i]:null),c=[{label:"ทั้งหมด",value:o?.total??0,icon:y.ListChecks,color:"text-blue-400",iconColor:"text-blue-400/15"},{label:"สำเร็จ",value:o?.success??0,icon:N.CheckCircle2,color:"text-emerald-400",iconColor:"text-emerald-400/15"},{label:"ผิดพลาด",value:o?.failed??0,icon:S.XCircle,color:"text-rose-400",iconColor:"text-rose-400/15"},{label:"โพสต์",value:o?.post??0,icon:$.Send,color:"text-sky-400",iconColor:"text-sky-400/15"},{label:"คอมเมนต์",value:o?.comment??0,icon:L.MessageSquare,color:"text-amber-400",iconColor:"text-amber-400/15"},{label:"ความรู้สึก",value:o?.reaction??0,icon:M,color:"text-pink-400",iconColor:"text-pink-400/15"}];return(0,t.jsx)("div",{className:`grid grid-cols-3 gap-2 ${a}`,children:c.map(e=>{let r=e.icon;return(0,t.jsxs)("div",{className:"\n              group relative\n              h-[52px]\n              overflow-hidden\n              rounded-xl\n              bg-neutral-950\n              border border-white/[0.12]\n              px-2.5 py-1.5\n              shadow-[0_4px_0_rgba(0,0,0,0.35),0_8px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.5)]\n              transition-all duration-200 ease-out select-none\n              hover:border-white/20\n            ",children:[(0,t.jsx)("div",{className:"pointer-events-none absolute inset-x-2 top-0 h-px bg-white/20 z-10"}),(0,t.jsx)("div",{className:"pointer-events-none absolute -left-5 -top-5 h-12 w-12 rounded-full bg-white/[0.04] blur-lg transition-all duration-300 group-hover:bg-white/[0.07]"}),(0,t.jsxs)("div",{className:"relative z-10",children:[(0,t.jsx)("p",{className:"text-[10px] font-medium text-neutral-400 leading-tight",children:e.label}),(0,t.jsx)("p",{className:`
                  text-base font-semibold tracking-tight leading-tight mt-0.5
                  ${e.color}
                  drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]
                `,children:e.value.toLocaleString()})]}),(0,t.jsx)(r,{size:40,strokeWidth:1.2,className:`
                pointer-events-none
                absolute
                -right-1
                -bottom-1.5
                ${e.iconColor}
                drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]
                transition-transform duration-300
                group-hover:scale-105 group-hover:-rotate-3
              `}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-t from-black/20 to-transparent"})]},e.label)})})};var A=e.i(46034);let I=({isRunning:e=!1,className:r="",size:a=20})=>(0,t.jsx)("div",{className:`relative flex items-center justify-center select-none m-0 p-0 leading-none ${r}`,style:{width:a,height:a},title:e?"กำลังทำงาน (เดิน)":"สแตนด์บาย (ยืนนิ่ง)",children:(0,t.jsxs)("svg",{viewBox:"0 0 24 24",width:a,height:a,className:"block overflow-visible",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsxs)("defs",{children:[(0,t.jsxs)("filter",{id:"green-visor-glow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[(0,t.jsx)("feGaussianBlur",{stdDeviation:"0.8",result:"blur"}),(0,t.jsx)("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]}),(0,t.jsx)("style",{children:`
            /* ========== 1. ท่ายืนนิ่ง โทน NEUTRAL ========== */
            .char-idle-breath {
              animation: idle-breathe 2.4s ease-in-out infinite;
              transform-origin: 12px 21px;
            }
            @keyframes idle-breathe {
              0%, 100% {
                transform: translateY(0px) scale(1);
              }
              50% {
                transform: translateY(-0.5px) scaleY(1.02);
              }
            }

            /* ========== 2. ท่าเดิน 2D (WALKING) โทน เขียว ========== */
            /* ลำตัวโยกขึ้นลงตามจังหวะก้าวเดิน (Bobbing) */
            .char-walk-body {
              animation: walk-bob 0.38s ease-in-out infinite alternate;
              transform-origin: 12px 21px;
            }
            @keyframes walk-bob {
              0% { transform: translateY(0.4px); }
              100% { transform: translateY(-0.7px); }
            }

            /* ขาซ้ายก้าวเดิน */
            .char-walk-leg-l {
              animation: walk-leg-cycle-l 0.76s ease-in-out infinite;
              transform-origin: 10px 16px;
            }
            @keyframes walk-leg-cycle-l {
              0% { transform: rotate(-24deg); }
              50% { transform: rotate(24deg); }
              100% { transform: rotate(-24deg); }
            }

            /* ขาขวาก้าวเดิน (สลับจังหวะ) */
            .char-walk-leg-r {
              animation: walk-leg-cycle-r 0.76s ease-in-out infinite;
              transform-origin: 14px 16px;
            }
            @keyframes walk-leg-cycle-r {
              0% { transform: rotate(24deg); }
              50% { transform: rotate(-24deg); }
              100% { transform: rotate(24deg); }
            }

            /* แขนซ้ายแกว่งตามจังหวะเดิน */
            .char-walk-arm-l {
              animation: walk-arm-cycle-l 0.76s ease-in-out infinite;
              transform-origin: 7.5px 12px;
            }
            @keyframes walk-arm-cycle-l {
              0% { transform: rotate(20deg); }
              50% { transform: rotate(-20deg); }
              100% { transform: rotate(20deg); }
            }

            /* แขนขวาแกว่งตามจังหวะเดิน (สลับด้าน) */
            .char-walk-arm-r {
              animation: walk-arm-cycle-r 0.76s ease-in-out infinite;
              transform-origin: 16.5px 12px;
            }
            @keyframes walk-arm-cycle-r {
              0% { transform: rotate(-20deg); }
              50% { transform: rotate(20deg); }
              100% { transform: rotate(-20deg); }
            }
          `})]}),e?(0,t.jsxs)("g",{className:"char-walk-body",children:[(0,t.jsx)("path",{d:"M7.5 12 L5.5 15.8",stroke:"#059669",strokeWidth:"2.3",strokeLinecap:"round",className:"char-walk-arm-l"}),(0,t.jsx)("path",{d:"M10 16.5 L10 21 L8.5 21.6",stroke:"#047857",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",className:"char-walk-leg-l"}),(0,t.jsx)("rect",{x:"7.5",y:"11",width:"9",height:"6.2",rx:"2.2",fill:"#059669",stroke:"#10b981",strokeWidth:"1"}),(0,t.jsx)("circle",{cx:"12",cy:"14",r:"1.1",fill:"#34d399"}),(0,t.jsx)("path",{d:"M14 16.5 L14 21 L15.5 21.6",stroke:"#10b981",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",className:"char-walk-leg-r"}),(0,t.jsx)("rect",{x:"5.8",y:"5.2",width:"1.6",height:"3.2",rx:"0.8",fill:"#10b981"}),(0,t.jsx)("rect",{x:"16.6",y:"5.2",width:"1.6",height:"3.2",rx:"0.8",fill:"#10b981"}),(0,t.jsx)("rect",{x:"7",y:"2.5",width:"10",height:"8.8",rx:"4.4",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.1"}),(0,t.jsx)("rect",{x:"8.5",y:"4.8",width:"7",height:"3.6",rx:"1.8",fill:"#34d399",filter:"url(#green-visor-glow)"}),(0,t.jsx)("path",{d:"M16.5 12 L18.5 15.8",stroke:"#34d399",strokeWidth:"2.3",strokeLinecap:"round",className:"char-walk-arm-r"})]}):(0,t.jsxs)("g",{className:"char-idle-breath",children:[(0,t.jsx)("path",{d:"M7.5 12 L5.8 16",stroke:"#525252",strokeWidth:"2.2",strokeLinecap:"round"}),(0,t.jsx)("path",{d:"M9.5 16.5 L9.5 21.2 L8 21.8",stroke:"#525252",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M14.5 16.5 L14.5 21.2 L16 21.8",stroke:"#525252",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("rect",{x:"7.5",y:"11",width:"9",height:"6.2",rx:"2.2",fill:"#262626",stroke:"#404040",strokeWidth:"1"}),(0,t.jsx)("circle",{cx:"12",cy:"14",r:"1.1",fill:"#525252"}),(0,t.jsx)("rect",{x:"5.8",y:"5.2",width:"1.6",height:"3.2",rx:"0.8",fill:"#525252"}),(0,t.jsx)("rect",{x:"16.6",y:"5.2",width:"1.6",height:"3.2",rx:"0.8",fill:"#525252"}),(0,t.jsx)("rect",{x:"7",y:"2.5",width:"10",height:"8.8",rx:"4.4",fill:"#171717",stroke:"#404040",strokeWidth:"1.1"}),(0,t.jsx)("rect",{x:"8.5",y:"4.8",width:"7",height:"3.6",rx:"1.8",fill:"#737373",opacity:"0.85"}),(0,t.jsx)("path",{d:"M16.5 12 L18.2 16",stroke:"#525252",strokeWidth:"2.2",strokeLinecap:"round"})]})]})}),F=({userId:e,task:r,groupName:a,groupCurrent:s=0,groupTotal:l=0,linkCurrent:n=0,linkTotal:i=0,className:c=""})=>{let x,u,h,{isUserRunning:p,tasks:m,groupInfo:g,taskTimers:b}=(0,o.default)(),f=e?String(e):"",v=!!f&&p(f),[w,_]=d.default.useState(0),[j,k]=d.default.useState(0),y=f?b[f]:void 0,N=y?.endTime||0;d.default.useEffect(()=>{if(!v)return;let e=setInterval(()=>{_(e=>e+1)},1e3);return()=>{clearInterval(e),_(0)}},[v]),d.default.useEffect(()=>{if(!N||!v)return;let e=()=>{let e=Math.max(0,(N-Date.now())/1e3);return k(e),e>0},t=setTimeout(e,0),r=setInterval(()=>{e()||clearInterval(r)},100);return()=>{clearTimeout(t),clearInterval(r),k(0)}},[N,v]);let S=r||(v?m[f]||"กำลังเริ่มงาน...":"-"),$=(e=>{if(e<=0)return"";let t=Math.max(0,e),r=Math.floor(t/3600),a=Math.floor(t%3600/60),s=Math.floor(t%60);return r>0?`${r} ชม. ${a} นาที`:a>0?`${a} นาที ${s} วินาที`:`${t.toFixed(1)} วินาที`})(j),L=/\b\d+(\.\d+)?s$/i.test(S.trim()),z=v&&$&&!L,M=a||v&&g[f]?.groupName||"-",C=g[f]?.groupCurrent??s,T=g[f]?.groupTotal??l,F=g[f]?.linkCurrent??n,W=g[f]?.linkTotal??i;return(0,t.jsxs)("div",{className:`
        group relative flex flex-col justify-between
        overflow-hidden rounded-xl border border-white/[0.12]
        bg-neutral-950 p-2.5 select-none
        shadow-[0_4px_0_rgba(0,0,0,0.35),0_8px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.5)]
        transition-all duration-200 hover:border-white/20
        ${c}
      `,children:[(0,t.jsx)("div",{className:"pointer-events-none absolute inset-x-2 top-0 h-px bg-white/20 z-10"}),(0,t.jsx)("div",{className:`pointer-events-none absolute -left-5 -top-5 h-12 w-12 rounded-full blur-lg transition-all duration-300 ${v?"bg-blue-500/[0.08] group-hover:bg-blue-500/[0.12]":"bg-white/[0.03] group-hover:bg-white/[0.06]"}`}),(0,t.jsxs)("div",{className:"relative z-10 flex flex-col gap-2",children:[(0,t.jsx)("div",{className:"flex flex-col gap-1",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,t.jsx)("div",{className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-200 ${v?"bg-emerald-500/15 border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]":"bg-neutral-900 border-white/[0.08]"}`,children:(0,t.jsx)(I,{isRunning:v,size:20})}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("span",{className:`text-[10px] uppercase tracking-wider transition-colors duration-200 ${v?"text-neutral-400":"text-neutral-500"}`,children:"TASK"}),(0,t.jsxs)("div",{className:`flex max-w-[185px] items-baseline gap-1.5 overflow-hidden text-xs font-medium leading-snug transition-colors duration-200 ${v?"text-neutral-300":"text-neutral-500"}`,children:[(0,t.jsx)("span",{className:"truncate",children:S}),z&&(0,t.jsx)("span",{className:"shrink-0 font-mono text-[11px] font-semibold text-emerald-400",children:$})]})]})]}),(0,t.jsx)("span",{className:`rounded-md border px-1.5 py-0.5 font-mono text-[10px] shadow-sm transition-colors duration-200 ${v?"border-blue-500/25 bg-blue-500/15 font-semibold text-blue-400":"border-white/[0.08] bg-neutral-900 font-medium text-neutral-500"}`,children:(x=Math.floor(w/3600),u=Math.floor(w%3600/60),h=Math.floor(w%60),x>0?`${x} ชม. ${u} นาที`:u>0?`${u} นาที ${h} วิ`:`${h} วิ`)})]})}),(0,t.jsx)("div",{className:"h-px w-full bg-white/[0.06]"}),(0,t.jsx)("div",{className:"flex flex-col gap-1",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,t.jsx)("div",{className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-200 ${v?"bg-sky-400/15 border-sky-400/30 shadow-[0_0_12px_rgba(56,189,248,0.15)]":"bg-neutral-900 border-white/[0.08]"}`,children:(0,t.jsx)(A.Users,{size:20,className:`shrink-0 transition-colors duration-200 ${v?"text-sky-400":"text-neutral-500"}`})}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsxs)("span",{className:`text-[10px] uppercase tracking-wider transition-colors duration-200 ${v?"text-neutral-400":"text-neutral-500"}`,children:["GROUPS ",v&&T>1?`(${C}/${T})`:""]}),(0,t.jsx)("p",{className:`max-w-[180px] truncate text-xs font-medium leading-snug transition-colors duration-200 ${v?"text-neutral-300":"text-neutral-500"}`,children:M})]})]}),(0,t.jsxs)("span",{className:`rounded-md border px-1.5 py-0.5 font-mono text-[10px] shadow-sm transition-colors duration-200 ${v?"border-sky-500/25 bg-sky-500/15 font-semibold text-sky-400":"border-white/[0.08] bg-neutral-900 font-medium text-neutral-500"}`,children:[F," / ",W]})]})})]}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-t from-black/25 to-transparent"})]})},W=({account:e})=>{let{isUserRunning:r}=(0,o.default)(),a=r(e.id),s=e.avatarLocal||e.avatar;return(0,t.jsxs)("div",{className:`
        group relative flex min-h-0 flex-col overflow-hidden
        rounded-2xl border bg-neutral-950 p-3.5
        select-none transition-all duration-200
        border-white/[0.12] shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.5)] hover:border-white/20
      `,children:[(0,t.jsx)("div",{className:"pointer-events-none absolute inset-x-3 top-0 z-10 h-px bg-white/20"}),(0,t.jsx)("div",{className:`
          pointer-events-none absolute -left-10 -top-10 h-24 w-24
          rounded-full blur-2xl transition-all duration-300
          ${a?"bg-blue-500/[0.12]":"bg-white/[0.03] group-hover:bg-white/[0.06]"}
        `}),(0,t.jsxs)("div",{className:"relative z-10 flex min-w-0 items-center justify-between gap-3 pl-1",children:[(0,t.jsxs)("div",{className:"flex min-w-0 items-center gap-3",children:[(0,t.jsx)("div",{className:`
              relative flex h-11 w-11 shrink-0 items-center justify-center
              overflow-hidden rounded-xl border bg-neutral-900
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.4)]
              ${a?"border-blue-400/60 ring-2 ring-blue-500/25":"border-white/[0.12] group-hover:border-white/20"}
            `,children:s?(0,t.jsx)("img",{src:s,alt:e.name,className:"h-full w-full object-cover",onError:e=>{e.currentTarget.style.display="none"}}):(0,t.jsx)(_.User,{size:20,className:"text-neutral-400"})}),(0,t.jsxs)("div",{className:"min-w-0",children:[(0,t.jsx)("h4",{className:"truncate text-sm font-semibold tracking-tight text-white",children:e.name}),(0,t.jsxs)("p",{className:"mt-0.5 truncate font-mono text-xs text-neutral-400",children:["ID: ",e.fbId||e.id]})]})]}),(0,t.jsx)("div",{className:"relative z-20 shrink-0",children:(0,t.jsx)(k,{userId:e.id,userName:e.name})})]}),(0,t.jsx)("div",{className:"relative z-10 mt-3.5 border-t border-white/[0.08] pt-3",children:(0,t.jsx)(F,{userId:e.id})}),(0,t.jsx)("div",{className:"relative z-10 mt-3 border-t border-white/[0.08] pt-3",children:(0,t.jsx)(T,{userId:e.id})}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black/25 to-transparent"})]})},R=()=>{let{accounts:e,isLoading:r,fetchAccounts:a,initAccountListeners:s}=(0,v.default)(),{workerFilter:l,isUserRunning:i,initPostListeners:c}=(0,o.default)();(0,d.useEffect)(()=>{a();let e=s(),t=c();return()=>{e(),t()}},[a,s,c]);let x=(0,d.useMemo)(()=>"running"===l?e.filter(e=>i(e.id)):"idle"===l?e.filter(e=>!i(e.id)):e,[e,l,i]);return r?(0,t.jsxs)("div",{className:"flex flex-1 min-h-[380px] w-full flex-col items-center justify-center gap-3 text-neutral-400",children:[(0,t.jsx)(n.Loader2,{className:"h-6 w-6 animate-spin text-blue-500"}),(0,t.jsx)("span",{className:"text-xs font-medium",children:"กำลังโหลดข้อมูล Worker..."})]}):0===e.length?(0,t.jsx)(j.default,{icon:_.User,title:"ยังไม่มีบัญชีในระบบ",desc:(0,t.jsxs)(t.Fragment,{children:["กรุณาเพิ่มบัญชี Facebook ที่หน้า"," ",(0,t.jsx)("span",{className:"font-semibold text-blue-400",children:"Accounts"})," ","ก่อนเริ่มต้นใช้งาน Worker"]}),minHeight:"min-h-[380px]"}):0===x.length?(0,t.jsx)(j.default,{icon:_.User,iconColor:"text-neutral-400",title:"running"===l?"ไม่มีบัญชีที่กำลังทำงานอยู่ในขณะนี้":"ไม่มีบัญชีที่ยังไม่ทำงาน (กำลังทำงานครบทุกบัญชีแล้ว)",desc:"running"===l?"กดปุ่มเริ่มงานที่บัญชีที่ต้องการเพื่อเริ่มทำงาน หรือกดปุ่มเริ่มงานทั้งหมดด้านบน":"คุณสามารถสลับดูที่แท็บ ข้อมูลทั้งหมด หรือ กำลังทำงาน เพื่อดูสถานะ",minHeight:"min-h-[380px]"}):(0,t.jsx)("div",{className:"grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:x.map(e=>(0,t.jsx)(W,{account:e},e.id))})};e.s(["default",0,()=>(0,t.jsxs)("div",{className:"flex flex-col gap-6 flex-1 min-h-0 w-full",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between gap-4 shrink-0",children:[(0,t.jsx)(w,{}),(0,t.jsx)(c,{})]}),(0,t.jsx)("section",{className:"flex-1 flex flex-col min-h-0 w-full",children:(0,t.jsx)(R,{})})]})],28926)},9741,e=>{"use strict";var t=e.i(66497),r=e.i(10977);e.s(["default",0,({icon:e,title:a,desc:s,description:l,action:n,children:i,className:o="",iconColor:c="text-blue-400",minHeight:d="min-h-[320px]"})=>{let x=s??l;return(0,t.jsxs)("div",{className:`
        group relative overflow-hidden flex flex-1 w-full flex-col items-center justify-center
        rounded-2xl border border-white/[0.12] bg-neutral-950 p-8 text-center select-none
        shadow-[0_6px_0_rgba(0,0,0,0.45),0_12px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.5)]
        ${d}
        ${o}
      `,children:[(0,t.jsx)("div",{className:"pointer-events-none absolute inset-x-3 top-0 h-px bg-white/20"}),(0,t.jsx)("div",{className:"pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/[0.03] blur-2xl"}),e&&(0,t.jsx)("div",{className:"\n            mb-4 flex h-16 w-16 items-center justify-center\n            rounded-2xl border border-white/[0.12] bg-neutral-900\n            shadow-[0_4px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)]\n          ",children:e?r.default.isValidElement(e)?e:(0,t.jsx)(e,{size:28,className:`${c} drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]`,strokeWidth:1.8}):null}),a&&(0,t.jsx)("h3",{className:"text-base font-semibold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]",children:a}),x&&(0,t.jsx)("p",{className:"mt-2 max-w-sm text-xs leading-relaxed text-neutral-400",children:x}),n&&(0,t.jsx)("div",{className:"mt-5",children:n}),i,(0,t.jsx)("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black/25 to-transparent"})]})}])},26874,e=>{"use strict";var t=e.i(2692);let r={name:"circle-x",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-circle"]};r.node;let a=(0,t.default)(r);e.s(["XCircle",0,a],26874)},14024,e=>{"use strict";var t=e.i(2692);let r={name:"list-checks",size:24,node:[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]]};r.node;let a=(0,t.default)(r);e.s(["ListChecks",0,a],14024)},83870,e=>{"use strict";var t=e.i(2692);let r={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};r.node;let a=(0,t.default)(r);e.s(["MessageSquare",0,a],83870)},32705,e=>{"use strict";var t=e.i(2692);let r={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};r.node;let a=(0,t.default)(r);e.s(["Play",0,a],32705)},55932,e=>{"use strict";var t=e.i(2692);let r={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};r.node;let a=(0,t.default)(r);e.s(["User",0,a],55932)},28719,e=>{"use strict";var t=e.i(1347);let r=()=>window.electronApi?.stats?window.electronApi.stats:null,a={total:0,success:0,failed:0,pending:0,post:0,comment:0,reaction:0},s=0,l=null,n=null,i=null,o=(0,t.create)((e,t)=>({overallStats:{...a},accountStats:{},dailyStats:[],dailyRange:1,isLoading:!0,error:null,fetchOverallStats:async()=>{let t=r();if(!t)return void e({isLoading:!1});try{let r=await t.getAll();e({overallStats:{total:r?.total??0,success:r?.success??0,failed:r?.failed??0,pending:r?.pending??0,updatedAt:r?.updatedAt},isLoading:!1,error:null})}catch(r){let t=r instanceof Error?r.message:"Failed to fetch overall stats";console.error("Failed to fetch overall stats:",r),e({error:t,isLoading:!1})}},fetchAccountStats:async t=>{let a=r();if(!a)return null;let s=String(t);try{let t=await a.getUser(s),r={total:t?.total??0,success:t?.success??0,failed:t?.failed??0,pending:t?.pending??0,post:t?.post??0,comment:t?.comment??0,reaction:t?.reaction??0,updatedAt:t?.updatedAt,userId:s};return e(e=>({accountStats:{...e.accountStats,[s]:r}})),r}catch(e){return console.error(`Failed to fetch stats for user ${s}:`,e),null}},fetchDailyStats:async a=>{let s=r();if(!s)return;let l="number"==typeof a?a:t().dailyRange;e({dailyRange:l});try{let t=await s.getDaily(l);e({dailyStats:Array.isArray(t)?t:[]})}catch(e){console.error("Failed to fetch daily stats:",e)}},fetchAll:async(r=14)=>{e({isLoading:!0,error:null}),await Promise.allSettled([t().fetchOverallStats(),t().fetchDailyStats(r)]),e({isLoading:!1})},recordOutcome:async(t,s)=>{let l=String(t);e(e=>{let t=e.overallStats,r=e.accountStats[l]||{...a,userId:l};return{overallStats:{...t,total:t.total+1,[s]:(t[s]||0)+1},accountStats:{...e.accountStats,[l]:{...r,total:r.total+1,[s]:(r[s]||0)+1}}}});let n=r();if(n)try{await n.record(l,s)}catch(e){console.error("Failed to record stat outcome:",e)}},setOverallStats:t=>{e(e=>({overallStats:{...e.overallStats,...t}}))},resetStats:()=>{e({overallStats:{...a},accountStats:{},dailyStats:[],error:null})},removeUserStat:t=>{let r=String(t);e(e=>{let t={...e.accountStats};return delete t[r],{accountStats:t}})},resetUserStats:async s=>{let l=r();if(!l)return!1;let n=String(s);try{let r=await l.resetUser(n);if(r?.success)return e(e=>({accountStats:{...e.accountStats,[n]:{...a,userId:n}}})),await Promise.allSettled([t().fetchOverallStats(),t().fetchDailyStats()]),!0;return!1}catch(e){return console.error(`Failed to reset stats for user ${n}:`,e),!1}},resetAllStats:async()=>{let s=r();if(!s)return!1;try{let r=await s.resetAll();if(r?.success)return e({overallStats:{...a},accountStats:{},dailyStats:[]}),await Promise.allSettled([t().fetchOverallStats(),t().fetchDailyStats()]),!0;return!1}catch(e){return console.error("Failed to reset all stats:",e),!1}},initStatsListeners:()=>{let r=window.electronApi?.post?window.electronApi.post:null;return r?.onProgress?(s++,l||(l=r.onProgress(r=>{let s=r.outcome||(r.success?"success":"failed");if(!["success","failed","pending"].includes(s))return;let l=String(r.userId),o=!!(r.stats?.isFullSuccess??"success"===s),c=!!(r.stats?.hasFailed??"failed"===s),d=!!(r.stats?.isPending??"pending"===s),x=!!(r.stats?.postSuccess??"success"===s),u="number"==typeof r.stats?.commentCount?r.stats.commentCount:r.comment?.success&&"number"==typeof r.comment.count?r.comment.count:0,h="boolean"==typeof r.stats?.reactionSuccess?+!!r.stats.reactionSuccess:r.reaction?.success&&"already_reacted"!==r.reaction.outcome?1:0;e(e=>{let t=e.overallStats,r=e.accountStats[l]||{...a,userId:l};return{overallStats:{...t,total:t.total+1,success:t.success+ +!!o,failed:t.failed+ +!!c,pending:t.pending+ +!!d},accountStats:{...e.accountStats,[l]:{...r,total:r.total+1,success:r.success+ +!!o,failed:r.failed+ +!!c,pending:r.pending+ +!!d,post:(r.post||0)+ +!!x,comment:(r.comment||0)+u,reaction:(r.reaction||0)+h}}}}),i=l,n&&clearTimeout(n),n=setTimeout(()=>{n=null;let e=i;t().fetchOverallStats(),t().fetchDailyStats(),e&&t().fetchAccountStats(e)},3e3)})),()=>{0===(s=Math.max(0,s-1))&&(l&&(l(),l=null),n&&(clearTimeout(n),n=null))}):()=>{}}}));e.s(["default",0,o,"useStatsStore",0,o])}]);