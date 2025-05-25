(()=>{var e={};e.id=346,e.ids=[346],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},8431:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>d});var r=s(482),a=s(9108),o=s(2563),i=s.n(o),n=s(8300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let d=["",{children:["account",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,707)),"F:\\Next Js learning\\E-commerce-app1\\src\\app\\account\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,3764)),"F:\\Next Js learning\\E-commerce-app1\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"]}],c=["F:\\Next Js learning\\E-commerce-app1\\src\\app\\account\\page.tsx"],m="/account/page",u={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/account/page",pathname:"/account",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8192:(e,t,s)=>{Promise.resolve().then(s.bind(s,1881))},5299:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r=(0,s(7075).Z)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},1881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h});var r=s(2295),a=s(3729),o=s(2254),i=s(783),n=s.n(i),l=s(5299),d=s(7075);let c=(0,d.Z)("pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]),m=(0,d.Z)("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]);var u=s(8822),p=s(626),x=s(508),f=s(4669);function h(){let e=(0,o.useRouter)(),[t,s]=(0,a.useState)(!0),[i,d]=(0,a.useState)(!1),[h,g]=(0,a.useState)(null),[b,y]=(0,a.useState)({name:"",phone:"",address:""});(0,a.useEffect)(()=>{v()},[]);let v=async()=>{try{let e=await fetch("/api/auth/profile"),t=await e.json();if(!e.ok)throw Error(t.error||"Failed to fetch profile");g(t),y({name:t.name||"",phone:t.phone||"",address:t.address||""})}catch(t){f.Am.error("Failed to load profile"),e.push("/login")}finally{s(!1)}},j=async e=>{e.preventDefault(),s(!0);try{let e=await fetch("/api/auth/profile",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)}),t=await e.json();if(!e.ok)throw Error(t.error||"Failed to update profile");g(t),d(!1),f.Am.success("Profile updated successfully")}catch(e){f.Am.error(e instanceof Error?e.message:"Failed to update profile")}finally{s(!1)}},w=async()=>{try{if(!(await fetch("/api/auth",{method:"DELETE"})).ok)throw Error("Failed to logout");e.push("/login"),f.Am.success("Logged out successfully")}catch(e){f.Am.error("Failed to logout")}},N=e=>{let{name:t,value:s}=e.target;y(e=>({...e,[t]:s}))};return t?r.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:r.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"})}):h?r.jsx("div",{className:"min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:r.jsx("div",{className:"max-w-3xl mx-auto",children:(0,r.jsxs)("div",{className:"bg-white shadow rounded-lg",children:[(0,r.jsxs)("div",{className:"px-4 py-5 sm:px-6 flex justify-between items-center",children:[(0,r.jsxs)("div",{children:[r.jsx("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:"Account Information"}),r.jsx("p",{className:"mt-1 max-w-2xl text-sm text-gray-500",children:"Personal details and preferences."})]}),(0,r.jsxs)("div",{className:"flex space-x-3",children:[i?r.jsx("button",{onClick:()=>d(!1),className:"inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:"Cancel"}):(0,r.jsxs)("button",{onClick:()=>d(!0),className:"inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:[r.jsx(c,{className:"h-4 w-4 mr-2"}),"Edit Profile"]}),(0,r.jsxs)("button",{onClick:w,className:"inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:[r.jsx(m,{className:"h-4 w-4 mr-2"}),"Logout"]})]})]}),r.jsx("div",{className:"border-t border-gray-200 px-4 py-5 sm:px-6",children:i?(0,r.jsxs)("form",{onSubmit:j,className:"space-y-6",children:[(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Full Name"}),(0,r.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[r.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:r.jsx(u.Z,{className:"h-5 w-5 text-gray-400"})}),r.jsx("input",{type:"text",name:"name",id:"name",value:b.name,onChange:N,className:"block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})]})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700",children:"Phone Number"}),(0,r.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[r.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:r.jsx(p.Z,{className:"h-5 w-5 text-gray-400"})}),r.jsx("input",{type:"tel",name:"phone",id:"phone",value:b.phone,onChange:N,className:"block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})]})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"address",className:"block text-sm font-medium text-gray-700",children:"Address"}),(0,r.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[r.jsx("div",{className:"absolute top-3 left-3 flex items-start pointer-events-none",children:r.jsx(x.Z,{className:"h-5 w-5 text-gray-400"})}),r.jsx("textarea",{name:"address",id:"address",rows:3,value:b.address,onChange:N,className:"block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})]})]}),r.jsx("div",{className:"flex justify-end",children:r.jsx("button",{type:"submit",disabled:t,className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50",children:t?"Saving...":"Save Changes"})})]}):(0,r.jsxs)("dl",{className:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2",children:[(0,r.jsxs)("div",{className:"sm:col-span-1",children:[r.jsx("dt",{className:"text-sm font-medium text-gray-500",children:"Full name"}),r.jsx("dd",{className:"mt-1 text-sm text-gray-900",children:h?.name})]}),(0,r.jsxs)("div",{className:"sm:col-span-1",children:[r.jsx("dt",{className:"text-sm font-medium text-gray-500",children:"Email address"}),r.jsx("dd",{className:"mt-1 text-sm text-gray-900",children:h?.email})]}),(0,r.jsxs)("div",{className:"sm:col-span-1",children:[r.jsx("dt",{className:"text-sm font-medium text-gray-500",children:"Phone number"}),r.jsx("dd",{className:"mt-1 text-sm text-gray-900",children:h?.phone||"Not provided"})]}),(0,r.jsxs)("div",{className:"sm:col-span-2",children:[r.jsx("dt",{className:"text-sm font-medium text-gray-500",children:"Address"}),r.jsx("dd",{className:"mt-1 text-sm text-gray-900",children:h?.address||"Not provided"})]})]})})]})})}):r.jsx("div",{className:"min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[(0,r.jsxs)("div",{children:[r.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Welcome to Your Account"}),r.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Please sign in to view your account details"})]}),(0,r.jsxs)("div",{className:"mt-8 space-y-4",children:[(0,r.jsxs)(n(),{href:"/login",className:"w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:["Sign in to your account",r.jsx(l.Z,{className:"ml-2 h-4 w-4"})]}),(0,r.jsxs)("div",{className:"text-center",children:[r.jsx("span",{className:"text-sm text-gray-600",children:"Don't have an account? "}),r.jsx(n(),{href:"/register",className:"text-sm font-medium text-blue-600 hover:text-blue-500",children:"Create one now"})]})]})]})})}},707:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>o,__esModule:()=>a,default:()=>i});let r=(0,s(6843).createProxy)(String.raw`F:\Next Js learning\E-commerce-app1\src\app\account\page.tsx`),{__esModule:a,$$typeof:o}=r,i=r.default},4669:(e,t,s)=>{"use strict";s.d(t,{Am:()=>C});var r,a=s(3729);let o={data:""},i=e=>e||o,n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,c=(e,t)=>{let s="",r="",a="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?s=o+" "+i+";":r+="f"==o[1]?c(i,o):o+"{"+c(i,"k"==o[1]?"":t)+"}":"object"==typeof i?r+=c(i,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=c.p?c.p(o,i):o+":"+i+";")}return s+(t&&a?t+"{"+a+"}":a)+r},m={},u=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+u(e[s]);return t}return e},p=(e,t,s,r,a)=>{let o=u(e),i=m[o]||(m[o]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(o));if(!m[i]){let t=o!==e?e:(e=>{let t,s,r=[{}];for(;t=n.exec(e.replace(l,""));)t[4]?r.shift():t[3]?(s=t[3].replace(d," ").trim(),r.unshift(r[0][s]=r[0][s]||{})):r[0][t[1]]=t[2].replace(d," ").trim();return r[0]})(e);m[i]=c(a?{["@keyframes "+i]:t}:t,s?"":"."+i)}let p=s&&m.g?m.g:null;return s&&(m.g=m[i]),((e,t,s,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=s?e+t.data:t.data+e)})(m[i],t,r,p),i},x=(e,t,s)=>e.reduce((e,r,a)=>{let o=t[a];if(o&&o.call){let e=o(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+r+(null==o?"":o)},"");function f(e){let t=this||{},s=e.call?e(t.p):e;return p(s.unshift?s.raw?x(s,[].slice.call(arguments,1),t.p):s.reduce((e,s)=>Object.assign(e,s&&s.call?s(t.p):s),{}):s,i(t.target),t.g,t.o,t.k)}f.bind({g:1});let h,g,b,y=f.bind({k:1});function v(e,t){let s=this||{};return function(){let r=arguments;function a(o,i){let n=Object.assign({},o),l=n.className||a.className;s.p=Object.assign({theme:g&&g()},n),s.o=/ *go\d+/.test(l),n.className=f.apply(s,r)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),b&&d[0]&&b(n),h(d,n)}return t?t(a):a}}var j=e=>"function"==typeof e,w=(e,t)=>j(e)?e(t):e,N=(()=>{let e=0;return()=>(++e).toString()})(),k=((()=>{let e;return()=>e})(),(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return k(e,{type:e.toasts.find(e=>e.id===s.id)?1:0,toast:s});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}}),P=[],A={toasts:[],pausedAt:void 0},E=e=>{A=k(A,e),P.forEach(e=>{e(A)})},F={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},_=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||N()}),$=e=>(t,s)=>{let r=_(t,e,s);return E({type:2,toast:r}),r.id},C=(e,t)=>$("blank")(e,t);C.error=$("error"),C.success=$("success"),C.loading=$("loading"),C.custom=$("custom"),C.dismiss=e=>{E({type:3,toastId:e})},C.remove=e=>E({type:4,toastId:e}),C.promise=(e,t,s)=>{let r=C.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?w(t.success,e):void 0;return a?C.success(a,{id:r,...s,...null==s?void 0:s.success}):C.dismiss(r),e}).catch(e=>{let a=t.error?w(t.error,e):void 0;a?C.error(a,{id:r,...s,...null==s?void 0:s.error}):C.dismiss(r)}),e};var q=new Map,S=1e3,M=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Z=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,z=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,D=(v("div")`
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
    animation: ${Z} 0.15s ease-out forwards;
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
`,y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`),I=(v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${D} 1s linear infinite;
`,y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`),O=y`
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
}`,J=(v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${I} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${O} 0.2s ease-out forwards;
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
`,y`
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
  animation: ${J} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,r=a.createElement,c.p=void 0,h=r,g=void 0,b=void 0,f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,949,20],()=>s(8431));module.exports=r})();