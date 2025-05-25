(()=>{var e={};e.id=565,e.ids=[565],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},2432:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c});var a=s(482),r=s(9108),i=s(2563),o=s.n(i),n=s(8300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let c=["",{children:["cart",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,6895)),"F:\\Next Js learning\\E-commerce-app1\\src\\app\\cart\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,3764)),"F:\\Next Js learning\\E-commerce-app1\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"]}],d=["F:\\Next Js learning\\E-commerce-app1\\src\\app\\cart\\page.tsx"],p="/cart/page",x={require:s,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/cart/page",pathname:"/cart",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7294:(e,t,s)=>{Promise.resolve().then(s.bind(s,1455))},5299:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});let a=(0,s(7075).Z)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},1455:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f});var a=s(2295),r=s(3729),i=s(6013),o=s(2254),n=s(1223),l=s.n(n),c=s(7075);let d=(0,c.Z)("shopping-bag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);var p=s(5299);let x=(0,c.Z)("minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),m=(0,c.Z)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),u=(0,c.Z)("trash-2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),h=(0,c.Z)("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);var g=s(4669),y=s(7393);function f(){let e=(0,o.useRouter)(),t=(0,i.I0)(),s=(0,i.v9)(e=>e.cart.items),[n,c]=(0,r.useState)(!1),f=s.reduce((e,t)=>e+t.price*t.quantity,0),b=f>0?10:0,v=.1*f,j=(e,s)=>{s<1||t((0,y.$R)({id:e,quantity:s}))},N=e=>{t((0,y.h2)(e)),g.Am.success("Item removed from cart")},w=async()=>{if(0===s.length){g.Am.error("Your cart is empty");return}c(!0);try{await new Promise(e=>setTimeout(e,1e3)),e.push("/checkout")}catch(e){g.Am.error("Failed to proceed to checkout")}finally{c(!1)}};return 0===s.length?a.jsx("div",{className:"min-h-screen bg-gray-50 py-12",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"text-center",children:[a.jsx(d,{className:"h-16 w-16 text-gray-400 mx-auto mb-4"}),a.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Your cart is empty"}),a.jsx("p",{className:"text-gray-600 mb-8",children:"Looks like you haven't added any items to your cart yet."}),(0,a.jsxs)("button",{onClick:()=>e.push("/products"),className:"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors",children:["Continue Shopping",a.jsx(p.Z,{className:"h-5 w-5"})]})]})})}):a.jsx("div",{className:"min-h-screen bg-gray-50 py-12",children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Shopping Cart"}),(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row gap-8",children:[a.jsx("div",{className:"lg:w-2/3",children:a.jsx("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden",children:a.jsx("div",{className:"divide-y",children:s.map(e=>(0,a.jsxs)("div",{className:"p-6 flex items-center gap-6",children:[a.jsx("div",{className:"relative w-24 h-24 flex-shrink-0",children:a.jsx(l(),{src:e.image,alt:e.name,fill:!0,className:"object-cover rounded-lg"})}),(0,a.jsxs)("div",{className:"flex-1",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-1",children:e.name}),(0,a.jsxs)("p",{className:"text-gray-500 mb-2",children:["$",e.price.toFixed(2)]}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsxs)("div",{className:"flex items-center border rounded-lg",children:[a.jsx("button",{onClick:()=>j(e.id,e.quantity-1),className:"px-3 py-1 text-gray-600 hover:text-gray-900",children:a.jsx(x,{className:"h-4 w-4"})}),a.jsx("span",{className:"px-3 py-1 text-gray-900",children:e.quantity}),a.jsx("button",{onClick:()=>j(e.id,e.quantity+1),className:"px-3 py-1 text-gray-600 hover:text-gray-900",children:a.jsx(m,{className:"h-4 w-4"})})]}),a.jsx("button",{onClick:()=>N(e.id),className:"text-red-600 hover:text-red-700",children:a.jsx(u,{className:"h-5 w-5"})})]})]}),a.jsx("div",{className:"text-right",children:(0,a.jsxs)("p",{className:"text-lg font-medium text-gray-900",children:["$",(e.price*e.quantity).toFixed(2)]})})]},e.id))})})}),a.jsx("div",{className:"lg:w-1/3",children:(0,a.jsxs)("div",{className:"bg-white rounded-xl shadow-sm p-6 sticky top-6",children:[a.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Order Summary"}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"text-gray-600",children:"Subtotal"}),(0,a.jsxs)("span",{className:"text-gray-900",children:["$",f.toFixed(2)]})]}),(0,a.jsxs)("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"text-gray-600",children:"Shipping"}),(0,a.jsxs)("span",{className:"text-gray-900",children:["$",b.toFixed(2)]})]}),(0,a.jsxs)("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"text-gray-600",children:"Tax"}),(0,a.jsxs)("span",{className:"text-gray-900",children:["$",v.toFixed(2)]})]}),(0,a.jsxs)("div",{className:"flex justify-between font-semibold text-gray-900 pt-4 border-t",children:[a.jsx("span",{children:"Total"}),(0,a.jsxs)("span",{children:["$",(f+b+v).toFixed(2)]})]})]}),a.jsx("button",{onClick:w,disabled:n,className:"w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed",children:n?(0,a.jsxs)("span",{className:"flex items-center justify-center",children:[a.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"}),"Processing..."]}):(0,a.jsxs)("span",{className:"flex items-center justify-center",children:["Proceed to Checkout",a.jsx(p.Z,{className:"h-5 w-5 ml-2"})]})}),a.jsx("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg",children:(0,a.jsxs)("div",{className:"flex items-start gap-3",children:[a.jsx(h,{className:"h-5 w-5 text-blue-600 mt-0.5"}),(0,a.jsxs)("div",{children:[a.jsx("h3",{className:"text-sm font-medium text-blue-900",children:"Secure Checkout"}),a.jsx("p",{className:"text-sm text-blue-700 mt-1",children:"Your payment information is encrypted and secure."})]})]})})]})})]})]})})}},6895:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>r,default:()=>o});let a=(0,s(6843).createProxy)(String.raw`F:\Next Js learning\E-commerce-app1\src\app\cart\page.tsx`),{__esModule:r,$$typeof:i}=a,o=a.default},4669:(e,t,s)=>{"use strict";s.d(t,{Am:()=>M});var a,r=s(3729);let i={data:""},o=e=>e||i,n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,d=(e,t)=>{let s="",a="",r="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?s=i+" "+o+";":a+="f"==i[1]?d(o,i):i+"{"+d(o,"k"==i[1]?"":t)+"}":"object"==typeof o?a+=d(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=d.p?d.p(i,o):i+":"+o+";")}return s+(t&&r?t+"{"+r+"}":r)+a},p={},x=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+x(e[s]);return t}return e},m=(e,t,s,a,r)=>{let i=x(e),o=p[i]||(p[i]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(i));if(!p[o]){let t=i!==e?e:(e=>{let t,s,a=[{}];for(;t=n.exec(e.replace(l,""));)t[4]?a.shift():t[3]?(s=t[3].replace(c," ").trim(),a.unshift(a[0][s]=a[0][s]||{})):a[0][t[1]]=t[2].replace(c," ").trim();return a[0]})(e);p[o]=d(r?{["@keyframes "+o]:t}:t,s?"":"."+o)}let m=s&&p.g?p.g:null;return s&&(p.g=p[o]),((e,t,s,a)=>{a?t.data=t.data.replace(a,e):-1===t.data.indexOf(e)&&(t.data=s?e+t.data:t.data+e)})(p[o],t,a,m),o},u=(e,t,s)=>e.reduce((e,a,r)=>{let i=t[r];if(i&&i.call){let e=i(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function h(e){let t=this||{},s=e.call?e(t.p):e;return m(s.unshift?s.raw?u(s,[].slice.call(arguments,1),t.p):s.reduce((e,s)=>Object.assign(e,s&&s.call?s(t.p):s),{}):s,o(t.target),t.g,t.o,t.k)}h.bind({g:1});let g,y,f,b=h.bind({k:1});function v(e,t){let s=this||{};return function(){let a=arguments;function r(i,o){let n=Object.assign({},i),l=n.className||r.className;s.p=Object.assign({theme:y&&y()},n),s.o=/ *go\d+/.test(l),n.className=h.apply(s,a)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),f&&c[0]&&f(n),g(c,n)}return t?t(r):r}}var j=e=>"function"==typeof e,N=(e,t)=>j(e)?e(t):e,w=(()=>{let e=0;return()=>(++e).toString()})(),k=((()=>{let e;return()=>e})(),(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return k(e,{type:e.toasts.find(e=>e.id===s.id)?1:0,toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}}),$=[],q={toasts:[],pausedAt:void 0},P=e=>{q=k(q,e),$.forEach(e=>{e(q)})},_={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},A=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||w()}),F=e=>(t,s)=>{let a=A(t,e,s);return P({type:2,toast:a}),a.id},M=(e,t)=>F("blank")(e,t);M.error=F("error"),M.success=F("success"),M.loading=F("loading"),M.custom=F("custom"),M.dismiss=e=>{P({type:3,toastId:e})},M.remove=e=>P({type:4,toastId:e}),M.promise=(e,t,s)=>{let a=M.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?N(t.success,e):void 0;return r?M.success(r,{id:a,...s,...null==s?void 0:s.success}):M.dismiss(a),e}).catch(e=>{let r=t.error?N(t.error,e):void 0;r?M.error(r,{id:a,...s,...null==s?void 0:s.error}):M.dismiss(a)}),e};var C=new Map,Z=1e3,E=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,S=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,z=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,I=(v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${E} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${S} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${z} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`),O=(v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${I} 1s linear infinite;
`,b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`),D=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,G=(v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${O} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${D} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,v("div")`
  position: absolute;
`,v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`);v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${G} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,a=r.createElement,d.p=void 0,g=a,y=void 0,f=void 0,h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[554,223,20],()=>s(2432));module.exports=a})();