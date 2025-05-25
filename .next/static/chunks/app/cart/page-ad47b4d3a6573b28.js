(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{8291:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});let s=(0,a(5531).Z)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},5733:function(e,t,a){Promise.resolve().then(a.bind(a,6438))},6438:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var s=a(7437),r=a(2265),i=a(3046),o=a(4033),n=a(6691),l=a.n(n),c=a(5531);let d=(0,c.Z)("shopping-bag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);var m=a(8291);let p=(0,c.Z)("minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),u=(0,c.Z)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),x=(0,c.Z)("trash-2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),h=(0,c.Z)("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);var y=a(5925),f=a(2867);function g(){let e=(0,o.useRouter)(),t=(0,i.I0)(),a=(0,i.v9)(e=>e.cart.items),[n,c]=(0,r.useState)(!1),g=a.reduce((e,t)=>e+t.price*t.quantity,0),b=g>0?10:0,v=.1*g,j=(e,a)=>{a<1||t((0,f.$R)({id:e,quantity:a}))},w=e=>{t((0,f.h2)(e)),y.Am.success("Item removed from cart")},N=async()=>{if(0===a.length){y.Am.error("Your cart is empty");return}c(!0);try{await new Promise(e=>setTimeout(e,1e3)),e.push("/checkout")}catch(e){y.Am.error("Failed to proceed to checkout")}finally{c(!1)}};return 0===a.length?(0,s.jsx)("div",{className:"min-h-screen bg-gray-50 py-12",children:(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)(d,{className:"h-16 w-16 text-gray-400 mx-auto mb-4"}),(0,s.jsx)("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Your cart is empty"}),(0,s.jsx)("p",{className:"text-gray-600 mb-8",children:"Looks like you haven't added any items to your cart yet."}),(0,s.jsxs)("button",{onClick:()=>e.push("/products"),className:"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors",children:["Continue Shopping",(0,s.jsx)(m.Z,{className:"h-5 w-5"})]})]})})}):(0,s.jsx)("div",{className:"min-h-screen bg-gray-50 py-12",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Shopping Cart"}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row gap-8",children:[(0,s.jsx)("div",{className:"lg:w-2/3",children:(0,s.jsx)("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden",children:(0,s.jsx)("div",{className:"divide-y",children:a.map(e=>(0,s.jsxs)("div",{className:"p-6 flex items-center gap-6",children:[(0,s.jsx)("div",{className:"relative w-24 h-24 flex-shrink-0",children:(0,s.jsx)(l(),{src:e.image,alt:e.name,fill:!0,className:"object-cover rounded-lg"})}),(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsx)("h3",{className:"text-lg font-medium text-gray-900 mb-1",children:e.name}),(0,s.jsxs)("p",{className:"text-gray-500 mb-2",children:["$",e.price.toFixed(2)]}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsxs)("div",{className:"flex items-center border rounded-lg",children:[(0,s.jsx)("button",{onClick:()=>j(e.id,e.quantity-1),className:"px-3 py-1 text-gray-600 hover:text-gray-900",children:(0,s.jsx)(p,{className:"h-4 w-4"})}),(0,s.jsx)("span",{className:"px-3 py-1 text-gray-900",children:e.quantity}),(0,s.jsx)("button",{onClick:()=>j(e.id,e.quantity+1),className:"px-3 py-1 text-gray-600 hover:text-gray-900",children:(0,s.jsx)(u,{className:"h-4 w-4"})})]}),(0,s.jsx)("button",{onClick:()=>w(e.id),className:"text-red-600 hover:text-red-700",children:(0,s.jsx)(x,{className:"h-5 w-5"})})]})]}),(0,s.jsx)("div",{className:"text-right",children:(0,s.jsxs)("p",{className:"text-lg font-medium text-gray-900",children:["$",(e.price*e.quantity).toFixed(2)]})})]},e.id))})})}),(0,s.jsx)("div",{className:"lg:w-1/3",children:(0,s.jsxs)("div",{className:"bg-white rounded-xl shadow-sm p-6 sticky top-6",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Order Summary"}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,s.jsx)("span",{className:"text-gray-600",children:"Subtotal"}),(0,s.jsxs)("span",{className:"text-gray-900",children:["$",g.toFixed(2)]})]}),(0,s.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,s.jsx)("span",{className:"text-gray-600",children:"Shipping"}),(0,s.jsxs)("span",{className:"text-gray-900",children:["$",b.toFixed(2)]})]}),(0,s.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,s.jsx)("span",{className:"text-gray-600",children:"Tax"}),(0,s.jsxs)("span",{className:"text-gray-900",children:["$",v.toFixed(2)]})]}),(0,s.jsxs)("div",{className:"flex justify-between font-semibold text-gray-900 pt-4 border-t",children:[(0,s.jsx)("span",{children:"Total"}),(0,s.jsxs)("span",{children:["$",(g+b+v).toFixed(2)]})]})]}),(0,s.jsx)("button",{onClick:N,disabled:n,className:"w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed",children:n?(0,s.jsxs)("span",{className:"flex items-center justify-center",children:[(0,s.jsx)("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"}),"Processing..."]}):(0,s.jsxs)("span",{className:"flex items-center justify-center",children:["Proceed to Checkout",(0,s.jsx)(m.Z,{className:"h-5 w-5 ml-2"})]})}),(0,s.jsx)("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg",children:(0,s.jsxs)("div",{className:"flex items-start gap-3",children:[(0,s.jsx)(h,{className:"h-5 w-5 text-blue-600 mt-0.5"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-sm font-medium text-blue-900",children:"Secure Checkout"}),(0,s.jsx)("p",{className:"text-sm text-blue-700 mt-1",children:"Your payment information is encrypted and secure."})]})]})})]})})]})]})})}},2867:function(e,t,a){"use strict";a.d(t,{$R:function(){return o},Xq:function(){return r},h2:function(){return i}});let s=(0,a(9686).oM)({name:"cart",initialState:{items:[],totalItems:0,totalAmount:0},reducers:{addToCart:(e,t)=>{let a=e.items.find(e=>e.id===t.payload.id);a?a.quantity+=1:e.items.push({...t.payload,quantity:1}),e.totalItems=e.items.reduce((e,t)=>e+t.quantity,0),e.totalAmount=e.items.reduce((e,t)=>e+t.price*t.quantity,0)},removeFromCart:(e,t)=>{e.items=e.items.filter(e=>e.id!==t.payload),e.totalItems=e.items.reduce((e,t)=>e+t.quantity,0),e.totalAmount=e.items.reduce((e,t)=>e+t.price*t.quantity,0)},updateQuantity:(e,t)=>{let a=e.items.find(e=>e.id===t.payload.id);a&&(a.quantity=t.payload.quantity,e.totalItems=e.items.reduce((e,t)=>e+t.quantity,0),e.totalAmount=e.items.reduce((e,t)=>e+t.price*t.quantity,0))},clearCart:e=>{e.items=[],e.totalItems=0,e.totalAmount=0}}}),{addToCart:r,removeFromCart:i,updateQuantity:o,clearCart:n}=s.actions;t.ZP=s.reducer},5925:function(e,t,a){"use strict";let s,r;a.d(t,{Am:function(){return Z}});var i,o=a(2265);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,m=/\n+/g,p=(e,t)=>{let a="",s="",r="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+o+";":s+="f"==i[1]?p(o,i):i+"{"+p(o,"k"==i[1]?"":t)+"}":"object"==typeof o?s+=p(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=p.p?p.p(i,o):i+":"+o+";")}return a+(t&&r?t+"{"+r+"}":r)+s},u={},x=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+x(e[a]);return t}return e},h=(e,t,a,s,r)=>{var i;let o=x(e),n=u[o]||(u[o]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(o));if(!u[n]){let t=o!==e?e:(e=>{let t,a,s=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?s.shift():t[3]?(a=t[3].replace(m," ").trim(),s.unshift(s[0][a]=s[0][a]||{})):s[0][t[1]]=t[2].replace(m," ").trim();return s[0]})(e);u[n]=p(r?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&u.g?u.g:null;return a&&(u.g=u[n]),i=u[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=s?i+t.data:t.data+i),n},y=(e,t,a)=>e.reduce((e,s,r)=>{let i=t[r];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+s+(null==i?"":i)},"");function f(e){let t=this||{},a=e.call?e(t.p):e;return h(a.unshift?a.raw?y(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}f.bind({g:1});let g,b,v,j=f.bind({k:1});function w(e,t){let a=this||{};return function(){let s=arguments;function r(i,o){let n=Object.assign({},i),l=n.className||r.className;a.p=Object.assign({theme:b&&b()},n),a.o=/ *go\d+/.test(l),n.className=f.apply(a,s)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),g(c,n)}return t?t(r):r}}var N=e=>"function"==typeof e,k=(e,t)=>N(e)?e(t):e,$=(s=0,()=>(++s).toString()),q=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},C=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return C(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},A=[],E={toasts:[],pausedAt:void 0},F=e=>{E=C(E,e),A.forEach(e=>{e(E)})},M=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||$()}),I=e=>(t,a)=>{let s=M(t,e,a);return F({type:2,toast:s}),s.id},Z=(e,t)=>I("blank")(e,t);Z.error=I("error"),Z.success=I("success"),Z.loading=I("loading"),Z.custom=I("custom"),Z.dismiss=e=>{F({type:3,toastId:e})},Z.remove=e=>F({type:4,toastId:e}),Z.promise=(e,t,a)=>{let s=Z.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?k(t.success,e):void 0;return r?Z.success(r,{id:s,...a,...null==a?void 0:a.success}):Z.dismiss(s),e}).catch(e=>{let r=t.error?k(t.error,e):void 0;r?Z.error(r,{id:s,...a,...null==a?void 0:a.error}):Z.dismiss(s)}),e};var S=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,z=j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,_=j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,O=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${S} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${z} 0.15s ease-out forwards;
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
    animation: ${_} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,P=j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,T=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${P} 1s linear infinite;
`,D=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,L=j`
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
}`,R=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${D} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${L} 0.2s ease-out forwards;
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
`,V=w("div")`
  position: absolute;
`,Y=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,H=j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Q=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${H} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,X=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return void 0!==t?"string"==typeof t?o.createElement(Q,null,t):t:"blank"===a?null:o.createElement(Y,null,o.createElement(T,{...s}),"loading"!==a&&o.createElement(V,null,"error"===a?o.createElement(O,{...s}):o.createElement(R,{...s})))},B=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,G=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,J=w("div")`
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
`,K=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,U=(e,t)=>{let a=e.includes("top")?1:-1,[s,r]=q()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[B(a),G(a)];return{animation:t?`${j(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};o.memo(({toast:e,position:t,style:a,children:s})=>{let r=e.height?U(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(X,{toast:e}),n=o.createElement(K,{...e.ariaProps},k(e.message,e));return o.createElement(J,{className:e.className,style:{...r,...a,...e.style}},"function"==typeof s?s({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))}),i=o.createElement,p.p=void 0,g=i,b=void 0,v=void 0,f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`}},function(e){e.O(0,[326,718,686,971,938,744],function(){return e(e.s=5733)}),_N_E=e.O()}]);