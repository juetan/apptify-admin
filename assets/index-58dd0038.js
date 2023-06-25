import{g as fe,n as ge,R as me,T as he,e as ke}from"./index-02a6652d.js";import{d as $,m as f,j as c,t as ye,q as N,p as K,ae as Ce,k as be,N as $e,a2 as _,x as L,f as P,K as T,o as k,e as y,z as g,a6 as I,ax as Se,I as se,y as A,i as ze,r as V,a as b,w as M,G as w,F as we,A as C,B as z,T as Ie,c as ie,Q as H,R as ne,s as Q,l as X,U as Ve,O as Pe,a1 as Oe,af as Le}from"./index-a2b9888c.js";import{a as je,b as Be}from"./use-overflow-ce853a25.js";var ht=$({name:"ResizeObserver",emits:["resize"],setup(e,{emit:t,slots:n}){let o;const a=f(),i=c(()=>ye(a.value)?a.value.$el:a.value),r=s=>{s&&(o=new ge(l=>{const u=l[0];t("resize",u)}),o.observe(s))},d=()=>{o&&(o.disconnect(),o=null)};return N(i,s=>{o&&d(),s&&r(s)}),K(()=>{i.value&&r(i.value)}),Ce(()=>{d()}),()=>{var s,l;const u=fe((l=(s=n.default)==null?void 0:s.call(n))!=null?l:[]);return u?be(u,{ref:a},!0):null}}});const _e=({itemRef:e,selector:t,index:n,parentClassName:o})=>{const a=f(-1),i=c(()=>{var l;return(l=n==null?void 0:n.value)!=null?l:a.value}),r=f(),d=()=>{var l,u,h;let v=(u=(l=e.value)==null?void 0:l.parentElement)!=null?u:void 0;if(o)for(;v&&!v.className.includes(o);)v=(h=v.parentElement)!=null?h:void 0;return v},s=()=>{if(_(n==null?void 0:n.value)&&r.value&&e.value){const l=Array.from(r.value.querySelectorAll(t)).indexOf(e.value);l!==a.value&&(a.value=l)}};return N(e,()=>{e.value&&!r.value&&(r.value=d())}),K(()=>{e.value&&(r.value=d()),s()}),$e(()=>s()),{computedIndex:i}},ue=Symbol("ArcoAvatarGroup"),Fe=$({name:"IconImageClose",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=P("icon"),o=c(()=>[n,`${n}-image-close`,{[`${n}-spin`]:e.spin}]),a=c(()=>{const r={};return e.size&&(r.fontSize=T(e.size)?`${e.size}px`:e.size),e.rotate&&(r.transform=`rotate(${e.rotate}deg)`),r});return{cls:o,innerStyle:a,onClick:r=>{t("click",r)}}}}),Me=["stroke-width","stroke-linecap","stroke-linejoin"],Ne=Se('<path d="M41 26V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h17"></path><path d="m24 33 9-8.5V27s-2 1-3.5 2.5C27.841 31.159 27 33 27 33h-3Zm0 0-3.5-4.5L17 33h7Z"></path><path d="M20.5 28.5 17 33h7l-3.5-4.5ZM33 24.5 24 33h3s.841-1.841 2.5-3.5C31 28 33 27 33 27v-2.5Z" fill="currentColor" stroke="none"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M46 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.95-4.782 1.74 1.74-3.045 3.046 3.046 3.046-1.74 1.74-3.047-3.045-3.046 3.046-1.74-1.74 3.046-3.047-3.046-3.046 1.74-1.74 3.046 3.046 3.046-3.046Z" fill="currentColor" stroke="none"></path><path d="M17 15h-2v2h2v-2Z"></path>',5),Te=[Ne];function Ae(e,t,n,o,a,i){return k(),y("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:g(e.cls),style:I(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...r)=>e.onClick&&e.onClick(...r))},Te,14,Me)}var U=L(Fe,[["render",Ae]]);const Re=Object.assign(U,{install:(e,t)=>{var n;const o=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(o+U.name,U)}});var Ze=Object.defineProperty,oe=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable,re=(e,t,n)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,le=(e,t)=>{for(var n in t||(t={}))Ee.call(t,n)&&re(e,n,t[n]);if(oe)for(var n of oe(t))Ue.call(t,n)&&re(e,n,t[n]);return e};const We=$({name:"Avatar",components:{ResizeObserver:me,IconImageClose:Re,IconLoading:se},props:{shape:{type:String,default:"circle"},imageUrl:String,size:Number,autoFixFontSize:{type:Boolean,default:!0},triggerType:{type:String,default:"button"},triggerIconStyle:{type:Object}},emits:{click:e=>!0,error:()=>!0,load:()=>!0},setup(e,{slots:t,emit:n,attrs:o}){const{shape:a,size:i,autoFixFontSize:r,triggerType:d,triggerIconStyle:s}=A(e),l=P("avatar"),u=ze(ue,void 0),h=f(),v=f(),R=c(()=>{var p;return(p=u==null?void 0:u.shape)!=null?p:a.value}),S=c(()=>{var p;return(p=u==null?void 0:u.size)!=null?p:i.value}),j=c(()=>{var p;return(p=u==null?void 0:u.autoFixFontSize)!=null?p:r.value}),m=f(!1),O=f(!1),J=f(!0),Y=f(!1),Z=u?_e({itemRef:h,selector:`.${l}`}).computedIndex:f(-1),ce=c(()=>{var p;const B=T(S.value)?{width:`${S.value}px`,height:`${S.value}px`,fontSize:`${S.value/2}px`}:{};return u&&(B.zIndex=u.zIndexAscend?Z.value+1:u.total-Z.value,B.marginLeft=Z.value!==0?`-${((p=S.value)!=null?p:40)/4}px`:"0"),B}),de=Ge({triggerIconStyle:s==null?void 0:s.value,inlineStyle:o.style,triggerType:d.value}),E=()=>{!m.value&&!e.imageUrl&&Ie(()=>{var p;if(!v.value||!h.value)return;const B=v.value.clientWidth,ee=(p=S.value)!=null?p:h.value.offsetWidth,te=ee/(B+8);ee&&te<1&&(v.value.style.transform=`scale(${te}) translateX(-50%)`),J.value=!0})};K(()=>{var p;(p=v.value)!=null&&p.firstElementChild&&["IMG","PICTURE"].includes(v.value.firstElementChild.tagName)&&(m.value=!0),j.value&&E()}),N(i,()=>{j.value&&E()});const pe=c(()=>[l,`${l}-${R.value}`]),ve=c(()=>m.value||e.imageUrl?`${l}-image`:`${l}-text`);return{prefixCls:l,itemRef:h,cls:pe,outerStyle:ce,wrapperRef:v,wrapperCls:ve,computedTriggerIconStyle:de,isImage:m,shouldLoad:J,isLoaded:Y,hasError:O,onClick:p=>{n("click",p)},handleResize:()=>{j.value&&E()},handleImgLoad:()=>{Y.value=!0,n("load")},handleImgError:()=>{O.value=!0,n("error")}}}}),Ge=({triggerType:e,inlineStyle:t={},triggerIconStyle:n={}})=>{let o={};return e==="button"&&(!n||n&&!n.color)&&t&&t.backgroundColor&&(o={color:t.backgroundColor}),le(le({},n),o)},De=["src"];function qe(e,t,n,o,a,i){const r=V("IconImageClose"),d=V("IconLoading"),s=V("resize-observer");return k(),y("div",{ref:"itemRef",style:I(e.outerStyle),class:g([e.cls,{[`${e.prefixCls}-with-trigger-icon`]:!!e.$slots["trigger-icon"]}]),onClick:t[2]||(t[2]=(...l)=>e.onClick&&e.onClick(...l))},[b(s,{onResize:e.handleResize},{default:M(()=>[w("span",{ref:"wrapperRef",class:g(e.wrapperCls)},[e.imageUrl?(k(),y(we,{key:0},[e.hasError?C(e.$slots,"error",{key:0},()=>[w("div",{class:g(`${e.prefixCls}-image-icon`)},[b(r)],2)]):z("v-if",!0),!(e.hasError||!e.shouldLoad)&&!e.isLoaded?C(e.$slots,"default",{key:1},()=>[w("div",{class:g(`${e.prefixCls}-image-icon`)},[b(d)],2)]):z("v-if",!0),e.hasError||!e.shouldLoad?z("v-if",!0):(k(),y("img",{key:2,src:e.imageUrl,style:I({width:e.size+"px",height:e.size+"px"}),alt:"avatar",onLoad:t[0]||(t[0]=(...l)=>e.handleImgLoad&&e.handleImgLoad(...l)),onError:t[1]||(t[1]=(...l)=>e.handleImgError&&e.handleImgError(...l))},null,44,De))],64)):C(e.$slots,"default",{key:1})],2)]),_:3},8,["onResize"]),e.$slots["trigger-icon"]?(k(),y("div",{key:0,class:g(`${e.prefixCls}-trigger-icon-${e.triggerType}`),style:I(e.computedTriggerIconStyle)},[C(e.$slots,"trigger-icon")],6)):z("v-if",!0)],6)}var F=L(We,[["render",qe]]);const xe=$({name:"Popover",components:{Trigger:he},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},title:String,content:String,trigger:{type:[String,Array],default:"hover"},position:{type:String,default:"top"},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupContainer:{type:[String,Object]}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:t}){const n=P("popover"),o=f(e.defaultPopupVisible),a=c(()=>{var s;return(s=e.popupVisible)!=null?s:o.value}),i=s=>{o.value=s,t("update:popupVisible",s),t("popupVisibleChange",s)},r=c(()=>[`${n}-popup-content`,e.contentClass]),d=c(()=>[`${n}-popup-arrow`,e.arrowClass]);return{prefixCls:n,computedPopupVisible:a,contentCls:r,arrowCls:d,handlePopupVisibleChange:i}}});function He(e,t,n,o,a,i){const r=V("trigger");return k(),ie(r,{class:g(e.prefixCls),trigger:e.trigger,position:e.position,"popup-visible":e.computedPopupVisible,"popup-offset":10,"content-class":e.contentCls,"content-style":e.contentStyle,"arrow-class":e.arrowCls,"arrow-style":e.arrowStyle,"show-arrow":"","popup-container":e.popupContainer,"animation-name":"zoom-in-fade-out","auto-fit-transform-origin":"",onPopupVisibleChange:e.handlePopupVisibleChange},{content:M(()=>[w("div",{class:g(`${e.prefixCls}-title`)},[C(e.$slots,"title",{},()=>[H(ne(e.title),1)])],2),w("div",{class:g(`${e.prefixCls}-content`)},[C(e.$slots,"content",{},()=>[H(ne(e.content),1)])],2)]),default:M(()=>[C(e.$slots,"default")]),_:3},8,["class","trigger","position","popup-visible","content-class","content-style","arrow-class","arrow-style","popup-container","onPopupVisibleChange"])}var W=L(xe,[["render",He]]);const Ke=Object.assign(W,{install:(e,t)=>{Q(e,t);const n=X(t);e.component(n+W.name,W)}}),G=$({name:"AvatarGroup",props:{shape:{type:String,default:"circle"},size:Number,autoFixFontSize:{type:Boolean,default:!0},maxCount:{type:Number,default:0},zIndexAscend:{type:Boolean,default:!1},maxStyle:{type:Object},maxPopoverTriggerProps:{type:Object}},setup(e,{slots:t}){const{shape:n,size:o,autoFixFontSize:a,zIndexAscend:i}=A(e),r=P("avatar-group"),d=f(0);return Ve(ue,Pe({shape:n,size:o,autoFixFontSize:a,zIndexAscend:i,total:d})),()=>{var s,l;const u=ke((l=(s=t.default)==null?void 0:s.call(t))!=null?l:[]),h=e.maxCount>0?u.slice(0,e.maxCount):u,v=e.maxCount>0?u.slice(e.maxCount):[];return d.value!==h.length&&(d.value=h.length),b("div",{class:r},[h,v.length>0&&b(Ke,e.maxPopoverTriggerProps,{default:()=>[b(F,{class:`${r}-max-count-avatar`,style:e.maxStyle},{default:()=>[H("+"),v.length]})],content:()=>b("div",null,[v])})])}}}),kt=Object.assign(F,{Group:G,install:(e,t)=>{Q(e,t);const n=X(t);e.component(n+F.name,F),e.component(n+G.name,G)}}),ae=["red","orangered","orange","gold","lime","green","cyan","blue","arcoblue","purple","pinkpurple","magenta","gray"],Qe=$({name:"Tag",components:{IconHover:je,IconClose:Be,IconLoading:se},props:{color:{type:String},size:{type:String},bordered:{type:Boolean,default:!1},visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},checked:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,default:!0}},emits:{"update:visible":e=>!0,"update:checked":e=>!0,close:e=>!0,check:(e,t)=>!0},setup(e,{emit:t}){const{size:n}=A(e),o=P("tag"),a=c(()=>e.color&&ae.includes(e.color)),i=c(()=>e.color&&!ae.includes(e.color)),r=f(e.defaultVisible),d=f(e.defaultChecked),s=c(()=>{var m;return(m=e.visible)!=null?m:r.value}),l=c(()=>{var m;return e.checkable?(m=e.checked)!=null?m:d.value:!0}),{mergedSize:u}=Oe(n),h=c(()=>u.value==="mini"?"small":u.value),v=m=>{r.value=!1,t("update:visible",!1),t("close",m)},R=m=>{if(e.checkable){const O=!l.value;d.value=O,t("update:checked",O),t("check",O,m)}},S=c(()=>[o,`${o}-size-${h.value}`,{[`${o}-loading`]:e.loading,[`${o}-hide`]:!s.value,[`${o}-${e.color}`]:a.value,[`${o}-bordered`]:e.bordered,[`${o}-checkable`]:e.checkable,[`${o}-checked`]:l.value,[`${o}-custom-color`]:i.value}]),j=c(()=>{if(i.value)return{backgroundColor:e.color}});return{prefixCls:o,cls:S,style:j,computedVisible:s,computedChecked:l,handleClick:R,handleClose:v}}});function Xe(e,t,n,o,a,i){const r=V("icon-close"),d=V("icon-hover"),s=V("icon-loading");return e.computedVisible?(k(),y("span",{key:0,class:g(e.cls),style:I(e.style),onClick:t[0]||(t[0]=(...l)=>e.handleClick&&e.handleClick(...l))},[e.$slots.icon?(k(),y("span",{key:0,class:g(`${e.prefixCls}-icon`)},[C(e.$slots,"icon")],2)):z("v-if",!0),C(e.$slots,"default"),e.closable?(k(),ie(d,{key:1,role:"button","aria-label":"Close",prefix:e.prefixCls,class:g(`${e.prefixCls}-close-btn`),onClick:Le(e.handleClose,["stop"])},{default:M(()=>[C(e.$slots,"close-icon",{},()=>[b(r)])]),_:3},8,["prefix","class","onClick"])):z("v-if",!0),e.loading?(k(),y("span",{key:2,class:g(`${e.prefixCls}-loading-icon`)},[b(s)],2)):z("v-if",!0)],6)):z("v-if",!0)}var D=L(Qe,[["render",Xe]]);const yt=Object.assign(D,{install:(e,t)=>{Q(e,t);const n=X(t);e.component(n+D.name,D)}}),Je=$({name:"IconLeft",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=P("icon"),o=c(()=>[n,`${n}-left`,{[`${n}-spin`]:e.spin}]),a=c(()=>{const r={};return e.size&&(r.fontSize=T(e.size)?`${e.size}px`:e.size),e.rotate&&(r.transform=`rotate(${e.rotate}deg)`),r});return{cls:o,innerStyle:a,onClick:r=>{t("click",r)}}}}),Ye=["stroke-width","stroke-linecap","stroke-linejoin"],et=w("path",{d:"M32 8.4 16.444 23.956 32 39.513"},null,-1),tt=[et];function nt(e,t,n,o,a,i){return k(),y("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:g(e.cls),style:I(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...r)=>e.onClick&&e.onClick(...r))},tt,14,Ye)}var q=L(Je,[["render",nt]]);const Ct=Object.assign(q,{install:(e,t)=>{var n;const o=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(o+q.name,q)}});function ot(e){const t=f(e);return[t,o=>{t.value=o}]}var bt=$({name:"RenderFunction",props:{renderFunc:{type:Function,required:!0}},render(){return this.renderFunc(this.$attrs)}});function $t(e,t){const{value:n}=A(t),[o,a]=ot(_(n.value)?e:n.value);return N(n,r=>{_(r)&&a(void 0)}),[c(()=>_(n.value)?o.value:n.value),a,o]}const rt=$({name:"IconDragDotVertical",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=P("icon"),o=c(()=>[n,`${n}-drag-dot-vertical`,{[`${n}-spin`]:e.spin}]),a=c(()=>{const r={};return e.size&&(r.fontSize=T(e.size)?`${e.size}px`:e.size),e.rotate&&(r.transform=`rotate(${e.rotate}deg)`),r});return{cls:o,innerStyle:a,onClick:r=>{t("click",r)}}}}),lt=["stroke-width","stroke-linecap","stroke-linejoin"],at=w("path",{d:"M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z",fill:"currentColor",stroke:"none"},null,-1),st=w("path",{d:"M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z"},null,-1),it=[at,st];function ut(e,t,n,o,a,i){return k(),y("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:g(e.cls),style:I(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...r)=>e.onClick&&e.onClick(...r))},it,14,lt)}var x=L(rt,[["render",ut]]);const St=Object.assign(x,{install:(e,t)=>{var n;const o=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(o+x.name,x)}});export{kt as A,Ct as I,ht as R,yt as T,bt as a,$t as b,St as c,ot as u};
