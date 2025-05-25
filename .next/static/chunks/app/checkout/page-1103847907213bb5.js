(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{3157:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});let a=(0,s(5531).Z)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},1738:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});let a=(0,s(5531).Z)("credit-card",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]])},1961:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});let a=(0,s(5531).Z)("truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]])},9829:function(e,t,s){Promise.resolve().then(s.bind(s,7718))},7718:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return b}});var a=s(7437),r=s(2265),i=s(3046),l=s(4033),o=s(6691),n=s.n(o),c=s(3157),d=s(5531);let m=(0,d.Z)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);var u=s(1961),x=s(1738);let p=(0,d.Z)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);var f=s(5925);function b(){let e=(0,l.useRouter)(),t=(0,i.v9)(e=>e.cart.items),[s,o]=(0,r.useState)(!1),[d,b]=(0,r.useState)({firstName:"",lastName:"",email:"",phone:"",address:"",city:"",state:"",zipCode:"",country:"",cardNumber:"",cardName:"",expiryDate:"",cvv:""}),g=t.reduce((e,t)=>e+t.price*t.quantity,0),h=.1*g,y=e=>{let{name:t,value:s}=e.target;b(e=>({...e,[t]:s}))},j=async t=>{t.preventDefault(),o(!0);try{await new Promise(e=>setTimeout(e,2e3)),f.Am.success("Payment successful!"),e.push("/checkout/success")}catch(e){f.Am.error("Payment failed. Please try again.")}finally{o(!1)}};return(0,a.jsx)("div",{className:"min-h-screen bg-gray-50 py-12",children:(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row gap-8",children:[(0,a.jsx)("div",{className:"lg:w-2/3",children:(0,a.jsxs)("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-6",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Checkout"}),(0,a.jsxs)("div",{className:"flex items-center justify-between mb-8",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center",children:(0,a.jsx)(c.Z,{className:"h-5 w-5"})}),(0,a.jsx)("span",{className:"ml-2 text-sm font-medium text-gray-900",children:"Cart"})]}),(0,a.jsx)("div",{className:"flex-1 h-0.5 bg-blue-600 mx-4"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center",children:(0,a.jsx)(m,{className:"h-5 w-5"})}),(0,a.jsx)("span",{className:"ml-2 text-sm font-medium text-gray-900",children:"Payment"})]}),(0,a.jsx)("div",{className:"flex-1 h-0.5 bg-gray-200 mx-4"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center",children:(0,a.jsx)(u.Z,{className:"h-5 w-5"})}),(0,a.jsx)("span",{className:"ml-2 text-sm font-medium text-gray-400",children:"Shipping"})]})]}),(0,a.jsxs)("form",{onSubmit:j,className:"space-y-6",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"First Name"}),(0,a.jsx)("input",{type:"text",name:"firstName",value:d.firstName,onChange:y,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Last Name"}),(0,a.jsx)("input",{type:"text",name:"lastName",value:d.lastName,onChange:y,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),(0,a.jsx)("input",{type:"email",name:"email",value:d.email,onChange:y,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Phone"}),(0,a.jsx)("input",{type:"tel",name:"phone",value:d.phone,onChange:y,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Address"}),(0,a.jsx)("input",{type:"text",name:"address",value:d.address,onChange:y,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"City"}),(0,a.jsx)("input",{type:"text",name:"city",value:d.city,onChange:y,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"State"}),(0,a.jsx)("input",{type:"text",name:"state",value:d.state,onChange:y,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"ZIP Code"}),(0,a.jsx)("input",{type:"text",name:"zipCode",value:d.zipCode,onChange:y,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]})]}),(0,a.jsxs)("div",{className:"border-t pt-6 mt-6",children:[(0,a.jsx)("h2",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Payment Information"}),(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Card Number"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{type:"text",name:"cardNumber",value:d.cardNumber,onChange:y,required:!0,placeholder:"1234 5678 9012 3456",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"}),(0,a.jsx)(x.Z,{className:"h-5 w-5 text-gray-400 absolute right-3 top-2.5"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Name on Card"}),(0,a.jsx)("input",{type:"text",name:"cardName",value:d.cardName,onChange:y,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Expiry Date"}),(0,a.jsx)("input",{type:"text",name:"expiryDate",value:d.expiryDate,onChange:y,required:!0,placeholder:"MM/YY",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"CVV"}),(0,a.jsx)("input",{type:"text",name:"cvv",value:d.cvv,onChange:y,required:!0,placeholder:"123",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]})]})]})]}),(0,a.jsx)("button",{type:"submit",disabled:s,className:"w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed",children:s?(0,a.jsxs)("span",{className:"flex items-center justify-center",children:[(0,a.jsx)(p,{className:"h-5 w-5 animate-spin mr-2"}),"Processing..."]}):"Complete Purchase"})]})]})}),(0,a.jsx)("div",{className:"lg:w-1/3",children:(0,a.jsxs)("div",{className:"bg-white rounded-xl shadow-sm p-6 sticky top-6",children:[(0,a.jsx)("h2",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Order Summary"}),(0,a.jsx)("div",{className:"space-y-4 mb-6",children:t.map(e=>(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("div",{className:"relative w-16 h-16",children:(0,a.jsx)(n(),{src:e.image,alt:e.name,fill:!0,className:"object-cover rounded-lg"})}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("h3",{className:"text-sm font-medium text-gray-900",children:e.name}),(0,a.jsxs)("p",{className:"text-sm text-gray-500",children:["Qty: ",e.quantity]})]}),(0,a.jsxs)("p",{className:"text-sm font-medium text-gray-900",children:["$",(e.price*e.quantity).toFixed(2)]})]},e.id))}),(0,a.jsxs)("div",{className:"border-t pt-4 space-y-2",children:[(0,a.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,a.jsx)("span",{className:"text-gray-600",children:"Subtotal"}),(0,a.jsxs)("span",{className:"text-gray-900",children:["$",g.toFixed(2)]})]}),(0,a.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,a.jsx)("span",{className:"text-gray-600",children:"Shipping"}),(0,a.jsxs)("span",{className:"text-gray-900",children:["$","10.00"]})]}),(0,a.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,a.jsx)("span",{className:"text-gray-600",children:"Tax"}),(0,a.jsxs)("span",{className:"text-gray-900",children:["$",h.toFixed(2)]})]}),(0,a.jsxs)("div",{className:"flex justify-between font-semibold text-gray-900 pt-2 border-t",children:[(0,a.jsx)("span",{children:"Total"}),(0,a.jsxs)("span",{children:["$",(g+10+h).toFixed(2)]})]})]}),(0,a.jsx)("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg",children:(0,a.jsxs)("div",{className:"flex items-start gap-3",children:[(0,a.jsx)(m,{className:"h-5 w-5 text-blue-600 mt-0.5"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-sm font-medium text-blue-900",children:"Secure Checkout"}),(0,a.jsx)("p",{className:"text-sm text-blue-700 mt-1",children:"Your payment information is encrypted and secure."})]})]})})]})})]})})})}},5925:function(e,t,s){"use strict";let a,r;s.d(t,{Am:function(){return S}});var i,l=s(2265);let o={data:""},n=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||o,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,m=/\n+/g,u=(e,t)=>{let s="",a="",r="";for(let i in e){let l=e[i];"@"==i[0]?"i"==i[1]?s=i+" "+l+";":a+="f"==i[1]?u(l,i):i+"{"+u(l,"k"==i[1]?"":t)+"}":"object"==typeof l?a+=u(l,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=l&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=u.p?u.p(i,l):i+":"+l+";")}return s+(t&&r?t+"{"+r+"}":r)+a},x={},p=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+p(e[s]);return t}return e},f=(e,t,s,a,r)=>{var i;let l=p(e),o=x[l]||(x[l]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(l));if(!x[o]){let t=l!==e?e:(e=>{let t,s,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(s=t[3].replace(m," ").trim(),a.unshift(a[0][s]=a[0][s]||{})):a[0][t[1]]=t[2].replace(m," ").trim();return a[0]})(e);x[o]=u(r?{["@keyframes "+o]:t}:t,s?"":"."+o)}let n=s&&x.g?x.g:null;return s&&(x.g=x[o]),i=x[o],n?t.data=t.data.replace(n,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),o},b=(e,t,s)=>e.reduce((e,a,r)=>{let i=t[r];if(i&&i.call){let e=i(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function g(e){let t=this||{},s=e.call?e(t.p):e;return f(s.unshift?s.raw?b(s,[].slice.call(arguments,1),t.p):s.reduce((e,s)=>Object.assign(e,s&&s.call?s(t.p):s),{}):s,n(t.target),t.g,t.o,t.k)}g.bind({g:1});let h,y,j,v=g.bind({k:1});function N(e,t){let s=this||{};return function(){let a=arguments;function r(i,l){let o=Object.assign({},i),n=o.className||r.className;s.p=Object.assign({theme:y&&y()},o),s.o=/ *go\d+/.test(n),o.className=g.apply(s,a)+(n?" "+n:""),t&&(o.ref=l);let c=e;return e[0]&&(c=o.as||e,delete o.as),j&&c[0]&&j(o),h(c,o)}return t?t(r):r}}var w=e=>"function"==typeof e,k=(e,t)=>w(e)?e(t):e,C=(a=0,()=>(++a).toString()),$=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},q=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return q(e,{type:e.toasts.find(e=>e.id===s.id)?1:0,toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},E=[],z={toasts:[],pausedAt:void 0},P=e=>{z=q(z,e),E.forEach(e=>{e(z)})},Z=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||C()}),A=e=>(t,s)=>{let a=Z(t,e,s);return P({type:2,toast:a}),a.id},S=(e,t)=>A("blank")(e,t);S.error=A("error"),S.success=A("success"),S.loading=A("loading"),S.custom=A("custom"),S.dismiss=e=>{P({type:3,toastId:e})},S.remove=e=>P({type:4,toastId:e}),S.promise=(e,t,s)=>{let a=S.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?k(t.success,e):void 0;return r?S.success(r,{id:a,...s,...null==s?void 0:s.success}):S.dismiss(a),e}).catch(e=>{let r=t.error?k(t.error,e):void 0;r?S.error(r,{id:a,...s,...null==s?void 0:s.error}):S.dismiss(a)}),e};var F=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,D=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,M=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,_=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${D} 0.15s ease-out forwards;
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
    animation: ${M} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,O=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,I=N("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${O} 1s linear infinite;
`,T=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,H=v`
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
}`,V=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${T} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${H} 0.2s ease-out forwards;
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
`,L=N("div")`
  position: absolute;
`,Y=N("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Q=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,R=N("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,B=({toast:e})=>{let{icon:t,type:s,iconTheme:a}=e;return void 0!==t?"string"==typeof t?l.createElement(R,null,t):t:"blank"===s?null:l.createElement(Y,null,l.createElement(I,{...a}),"loading"!==s&&l.createElement(L,null,"error"===s?l.createElement(_,{...a}):l.createElement(V,{...a})))},G=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,J=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,K=N("div")`
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
`,U=N("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,W=(e,t)=>{let s=e.includes("top")?1:-1,[a,r]=$()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(s),J(s)];return{animation:t?`${v(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};l.memo(({toast:e,position:t,style:s,children:a})=>{let r=e.height?W(e.position||t||"top-center",e.visible):{opacity:0},i=l.createElement(B,{toast:e}),o=l.createElement(U,{...e.ariaProps},k(e.message,e));return l.createElement(K,{className:e.className,style:{...r,...s,...e.style}},"function"==typeof a?a({icon:i,message:o}):l.createElement(l.Fragment,null,i,o))}),i=l.createElement,u.p=void 0,h=i,y=void 0,j=void 0,g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`}},function(e){e.O(0,[326,718,971,938,744],function(){return e(e.s=9829)}),_N_E=e.O()}]);