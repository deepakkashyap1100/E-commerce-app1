(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[346],{8291:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});let a=(0,s(5531).Z)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},6142:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});let a=(0,s(5531).Z)("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]])},2741:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});let a=(0,s(5531).Z)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]])},7972:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});let a=(0,s(5531).Z)("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]])},9693:function(e,t,s){Promise.resolve().then(s.bind(s,5243))},5243:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var a=s(7437),r=s(2265),o=s(4033),i=s(1396),n=s.n(i),l=s(8291),d=s(5531);let c=(0,d.Z)("pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]),m=(0,d.Z)("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]);var u=s(7972),p=s(2741),f=s(6142),x=s(5925);function h(){let e=(0,o.useRouter)(),[t,s]=(0,r.useState)(!0),[i,d]=(0,r.useState)(!1),[h,g]=(0,r.useState)(null),[y,b]=(0,r.useState)({name:"",phone:"",address:""});(0,r.useEffect)(()=>{v()},[]);let v=async()=>{try{let e=await fetch("/api/auth/profile"),t=await e.json();if(!e.ok)throw Error(t.error||"Failed to fetch profile");g(t),b({name:t.name||"",phone:t.phone||"",address:t.address||""})}catch(t){x.Am.error("Failed to load profile"),e.push("/login")}finally{s(!1)}},j=async e=>{e.preventDefault(),s(!0);try{let e=await fetch("/api/auth/profile",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)}),t=await e.json();if(!e.ok)throw Error(t.error||"Failed to update profile");g(t),d(!1),x.Am.success("Profile updated successfully")}catch(e){x.Am.error(e instanceof Error?e.message:"Failed to update profile")}finally{s(!1)}},w=async()=>{try{if(!(await fetch("/api/auth",{method:"DELETE"})).ok)throw Error("Failed to logout");e.push("/login"),x.Am.success("Logged out successfully")}catch(e){x.Am.error("Failed to logout")}},N=e=>{let{name:t,value:s}=e.target;b(e=>({...e,[t]:s}))};return t?(0,a.jsx)("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:(0,a.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"})}):h?(0,a.jsx)("div",{className:"min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:(0,a.jsx)("div",{className:"max-w-3xl mx-auto",children:(0,a.jsxs)("div",{className:"bg-white shadow rounded-lg",children:[(0,a.jsxs)("div",{className:"px-4 py-5 sm:px-6 flex justify-between items-center",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:"Account Information"}),(0,a.jsx)("p",{className:"mt-1 max-w-2xl text-sm text-gray-500",children:"Personal details and preferences."})]}),(0,a.jsxs)("div",{className:"flex space-x-3",children:[i?(0,a.jsx)("button",{onClick:()=>d(!1),className:"inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:"Cancel"}):(0,a.jsxs)("button",{onClick:()=>d(!0),className:"inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:[(0,a.jsx)(c,{className:"h-4 w-4 mr-2"}),"Edit Profile"]}),(0,a.jsxs)("button",{onClick:w,className:"inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:[(0,a.jsx)(m,{className:"h-4 w-4 mr-2"}),"Logout"]})]})]}),(0,a.jsx)("div",{className:"border-t border-gray-200 px-4 py-5 sm:px-6",children:i?(0,a.jsxs)("form",{onSubmit:j,className:"space-y-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Full Name"}),(0,a.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,a.jsx)(u.Z,{className:"h-5 w-5 text-gray-400"})}),(0,a.jsx)("input",{type:"text",name:"name",id:"name",value:y.name,onChange:N,className:"block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700",children:"Phone Number"}),(0,a.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,a.jsx)(p.Z,{className:"h-5 w-5 text-gray-400"})}),(0,a.jsx)("input",{type:"tel",name:"phone",id:"phone",value:y.phone,onChange:N,className:"block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"address",className:"block text-sm font-medium text-gray-700",children:"Address"}),(0,a.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,a.jsx)("div",{className:"absolute top-3 left-3 flex items-start pointer-events-none",children:(0,a.jsx)(f.Z,{className:"h-5 w-5 text-gray-400"})}),(0,a.jsx)("textarea",{name:"address",id:"address",rows:3,value:y.address,onChange:N,className:"block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})]})]}),(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsx)("button",{type:"submit",disabled:t,className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50",children:t?"Saving...":"Save Changes"})})]}):(0,a.jsxs)("dl",{className:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2",children:[(0,a.jsxs)("div",{className:"sm:col-span-1",children:[(0,a.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Full name"}),(0,a.jsx)("dd",{className:"mt-1 text-sm text-gray-900",children:null==h?void 0:h.name})]}),(0,a.jsxs)("div",{className:"sm:col-span-1",children:[(0,a.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Email address"}),(0,a.jsx)("dd",{className:"mt-1 text-sm text-gray-900",children:null==h?void 0:h.email})]}),(0,a.jsxs)("div",{className:"sm:col-span-1",children:[(0,a.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Phone number"}),(0,a.jsx)("dd",{className:"mt-1 text-sm text-gray-900",children:(null==h?void 0:h.phone)||"Not provided"})]}),(0,a.jsxs)("div",{className:"sm:col-span-2",children:[(0,a.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Address"}),(0,a.jsx)("dd",{className:"mt-1 text-sm text-gray-900",children:(null==h?void 0:h.address)||"Not provided"})]})]})})]})})}):(0,a.jsx)("div",{className:"min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Welcome to Your Account"}),(0,a.jsx)("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Please sign in to view your account details"})]}),(0,a.jsxs)("div",{className:"mt-8 space-y-4",children:[(0,a.jsxs)(n(),{href:"/login",className:"w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:["Sign in to your account",(0,a.jsx)(l.Z,{className:"ml-2 h-4 w-4"})]}),(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("span",{className:"text-sm text-gray-600",children:"Don't have an account? "}),(0,a.jsx)(n(),{href:"/register",className:"text-sm font-medium text-blue-600 hover:text-blue-500",children:"Create one now"})]})]})]})})}},5925:function(e,t,s){"use strict";let a,r;s.d(t,{Am:function(){return P}});var o,i=s(2265);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,m=/\n+/g,u=(e,t)=>{let s="",a="",r="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?s=o+" "+i+";":a+="f"==o[1]?u(i,o):o+"{"+u(i,"k"==o[1]?"":t)+"}":"object"==typeof i?a+=u(i,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=u.p?u.p(o,i):o+":"+i+";")}return s+(t&&r?t+"{"+r+"}":r)+a},p={},f=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+f(e[s]);return t}return e},x=(e,t,s,a,r)=>{var o;let i=f(e),n=p[i]||(p[i]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(i));if(!p[n]){let t=i!==e?e:(e=>{let t,s,a=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?a.shift():t[3]?(s=t[3].replace(m," ").trim(),a.unshift(a[0][s]=a[0][s]||{})):a[0][t[1]]=t[2].replace(m," ").trim();return a[0]})(e);p[n]=u(r?{["@keyframes "+n]:t}:t,s?"":"."+n)}let l=s&&p.g?p.g:null;return s&&(p.g=p[n]),o=p[n],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=a?o+t.data:t.data+o),n},h=(e,t,s)=>e.reduce((e,a,r)=>{let o=t[r];if(o&&o.call){let e=o(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"");function g(e){let t=this||{},s=e.call?e(t.p):e;return x(s.unshift?s.raw?h(s,[].slice.call(arguments,1),t.p):s.reduce((e,s)=>Object.assign(e,s&&s.call?s(t.p):s),{}):s,l(t.target),t.g,t.o,t.k)}g.bind({g:1});let y,b,v,j=g.bind({k:1});function w(e,t){let s=this||{};return function(){let a=arguments;function r(o,i){let n=Object.assign({},o),l=n.className||r.className;s.p=Object.assign({theme:b&&b()},n),s.o=/ *go\d+/.test(l),n.className=g.apply(s,a)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),y(d,n)}return t?t(r):r}}var N=e=>"function"==typeof e,k=(e,t)=>N(e)?e(t):e,E=(a=0,()=>(++a).toString()),A=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},$=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return $(e,{type:e.toasts.find(e=>e.id===s.id)?1:0,toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},C=[],F={toasts:[],pausedAt:void 0},Z=e=>{F=$(F,e),C.forEach(e=>{e(F)})},S=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||E()}),z=e=>(t,s)=>{let a=S(t,e,s);return Z({type:2,toast:a}),a.id},P=(e,t)=>z("blank")(e,t);P.error=z("error"),P.success=z("success"),P.loading=z("loading"),P.custom=z("custom"),P.dismiss=e=>{Z({type:3,toastId:e})},P.remove=e=>Z({type:4,toastId:e}),P.promise=(e,t,s)=>{let a=P.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?k(t.success,e):void 0;return r?P.success(r,{id:a,...s,...null==s?void 0:s.success}):P.dismiss(a),e}).catch(e=>{let r=t.error?k(t.error,e):void 0;r?P.error(r,{id:a,...s,...null==s?void 0:s.error}):P.dismiss(a)}),e};var M=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,_=j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,O=j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,D=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${M} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${_} 0.15s ease-out forwards;
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
    animation: ${O} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,I=j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,L=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${I} 1s linear infinite;
`,T=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,H=j`
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
}`,q=w("div")`
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
`,J=w("div")`
  position: absolute;
`,R=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,U=j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,V=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${U} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,W=({toast:e})=>{let{icon:t,type:s,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(V,null,t):t:"blank"===s?null:i.createElement(R,null,i.createElement(L,{...a}),"loading"!==s&&i.createElement(J,null,"error"===s?i.createElement(D,{...a}):i.createElement(q,{...a})))},Y=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,B=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,G=w("div")`
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
`,Q=(e,t)=>{let s=e.includes("top")?1:-1,[a,r]=A()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Y(s),B(s)];return{animation:t?`${j(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};i.memo(({toast:e,position:t,style:s,children:a})=>{let r=e.height?Q(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(W,{toast:e}),n=i.createElement(K,{...e.ariaProps},k(e.message,e));return i.createElement(G,{className:e.className,style:{...r,...s,...e.style}},"function"==typeof a?a({icon:o,message:n}):i.createElement(i.Fragment,null,o,n))}),o=i.createElement,u.p=void 0,y=o,b=void 0,v=void 0,g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`}},function(e){e.O(0,[933,971,938,744],function(){return e(e.s=9693)}),_N_E=e.O()}]);