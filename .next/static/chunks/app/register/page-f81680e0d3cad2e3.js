(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{7216:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});let r=(0,s(5531).Z)("eye-off",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]])},9670:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});let r=(0,s(5531).Z)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},5589:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});let r=(0,s(5531).Z)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]])},1295:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});let r=(0,s(5531).Z)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]])},7972:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});let r=(0,s(5531).Z)("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]])},2060:function(e,t,s){Promise.resolve().then(s.bind(s,4218))},4218:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var r=s(7437),a=s(2265),o=s(4033),i=s(1396),n=s.n(i),l=s(7972),c=s(1295),d=s(5589),m=s(7216),u=s(9670),p=s(5925);function f(){let e=(0,o.useRouter)(),[t,s]=(0,a.useState)(!1),[i,f]=(0,a.useState)(!1),[h,x]=(0,a.useState)({name:"",email:"",password:"",confirmPassword:""}),y=async t=>{if(t.preventDefault(),s(!0),h.password!==h.confirmPassword){p.Am.error("Passwords do not match"),s(!1);return}try{let t=await fetch("/api/auth",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:h.name,email:h.email,password:h.password})}),s=await t.json();if(!t.ok)throw Error(s.error||"Registration failed");p.Am.success("Registration successful!"),e.push("/login")}catch(e){p.Am.error(e instanceof Error?e.message:"Registration failed")}finally{s(!1)}},b=e=>{let{name:t,value:s}=e.target;x(e=>({...e,[t]:s}))};return(0,r.jsxs)("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[(0,r.jsxs)("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[(0,r.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Create your account"}),(0,r.jsxs)("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Already have an account?"," ",(0,r.jsx)(n(),{href:"/login",className:"font-medium text-blue-600 hover:text-blue-500",children:"Sign in"})]})]}),(0,r.jsx)("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:(0,r.jsxs)("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[(0,r.jsxs)("form",{className:"space-y-6",onSubmit:y,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Full Name"}),(0,r.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,r.jsx)(l.Z,{className:"h-5 w-5 text-gray-400"})}),(0,r.jsx)("input",{id:"name",name:"name",type:"text",autoComplete:"name",required:!0,value:h.name,onChange:b,className:"block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"Enter your full name"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),(0,r.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,r.jsx)(c.Z,{className:"h-5 w-5 text-gray-400"})}),(0,r.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,value:h.email,onChange:b,className:"block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"Enter your email"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),(0,r.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,r.jsx)(d.Z,{className:"h-5 w-5 text-gray-400"})}),(0,r.jsx)("input",{id:"password",name:"password",type:i?"text":"password",autoComplete:"new-password",required:!0,value:h.password,onChange:b,className:"block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"Create a password"}),(0,r.jsx)("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center",children:(0,r.jsx)("button",{type:"button",onClick:()=>f(!i),className:"text-gray-400 hover:text-gray-500 focus:outline-none",children:i?(0,r.jsx)(m.Z,{className:"h-5 w-5"}):(0,r.jsx)(u.Z,{className:"h-5 w-5"})})})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"confirmPassword",className:"block text-sm font-medium text-gray-700",children:"Confirm Password"}),(0,r.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,r.jsx)(d.Z,{className:"h-5 w-5 text-gray-400"})}),(0,r.jsx)("input",{id:"confirmPassword",name:"confirmPassword",type:i?"text":"password",autoComplete:"new-password",required:!0,value:h.confirmPassword,onChange:b,className:"block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"Confirm your password"})]})]}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{type:"submit",disabled:t,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",children:t?"Creating account...":"Create account"})})]}),(0,r.jsxs)("div",{className:"mt-6",children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"absolute inset-0 flex items-center",children:(0,r.jsx)("div",{className:"w-full border-t border-gray-300"})}),(0,r.jsx)("div",{className:"relative flex justify-center text-sm",children:(0,r.jsx)("span",{className:"px-2 bg-white text-gray-500",children:"Or continue with"})})]}),(0,r.jsxs)("div",{className:"mt-6 grid grid-cols-2 gap-3",children:[(0,r.jsxs)("button",{type:"button",className:"w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",children:[(0,r.jsx)("span",{className:"sr-only",children:"Sign up with Google"}),(0,r.jsx)("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})})]}),(0,r.jsxs)("button",{type:"button",className:"w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",children:[(0,r.jsx)("span",{className:"sr-only",children:"Sign up with Facebook"}),(0,r.jsx)("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})]})]})]})]})})]})}},5925:function(e,t,s){"use strict";let r,a;s.d(t,{Am:function(){return S}});var o,i=s(2265);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,m=/\n+/g,u=(e,t)=>{let s="",r="",a="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?s=o+" "+i+";":r+="f"==o[1]?u(i,o):o+"{"+u(i,"k"==o[1]?"":t)+"}":"object"==typeof i?r+=u(i,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=u.p?u.p(o,i):o+":"+i+";")}return s+(t&&a?t+"{"+a+"}":a)+r},p={},f=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+f(e[s]);return t}return e},h=(e,t,s,r,a)=>{var o;let i=f(e),n=p[i]||(p[i]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(i));if(!p[n]){let t=i!==e?e:(e=>{let t,s,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(s=t[3].replace(m," ").trim(),r.unshift(r[0][s]=r[0][s]||{})):r[0][t[1]]=t[2].replace(m," ").trim();return r[0]})(e);p[n]=u(a?{["@keyframes "+n]:t}:t,s?"":"."+n)}let l=s&&p.g?p.g:null;return s&&(p.g=p[n]),o=p[n],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=r?o+t.data:t.data+o),n},x=(e,t,s)=>e.reduce((e,r,a)=>{let o=t[a];if(o&&o.call){let e=o(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+r+(null==o?"":o)},"");function y(e){let t=this||{},s=e.call?e(t.p):e;return h(s.unshift?s.raw?x(s,[].slice.call(arguments,1),t.p):s.reduce((e,s)=>Object.assign(e,s&&s.call?s(t.p):s),{}):s,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let b,g,w,v=y.bind({k:1});function j(e,t){let s=this||{};return function(){let r=arguments;function a(o,i){let n=Object.assign({},o),l=n.className||a.className;s.p=Object.assign({theme:g&&g()},n),s.o=/ *go\d+/.test(l),n.className=y.apply(s,r)+(l?" "+l:""),t&&(n.ref=i);let c=e;return e[0]&&(c=n.as||e,delete n.as),w&&c[0]&&w(n),b(c,n)}return t?t(a):a}}var N=e=>"function"==typeof e,k=(e,t)=>N(e)?e(t):e,C=(r=0,()=>(++r).toString()),E=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},$=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return $(e,{type:e.toasts.find(e=>e.id===s.id)?1:0,toast:s});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},Z=[],z={toasts:[],pausedAt:void 0},P=e=>{z=$(z,e),Z.forEach(e=>{e(z)})},A=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||C()}),F=e=>(t,s)=>{let r=A(t,e,s);return P({type:2,toast:r}),r.id},S=(e,t)=>F("blank")(e,t);S.error=F("error"),S.success=F("success"),S.loading=F("loading"),S.custom=F("custom"),S.dismiss=e=>{P({type:3,toastId:e})},S.remove=e=>P({type:4,toastId:e}),S.promise=(e,t,s)=>{let r=S.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?k(t.success,e):void 0;return a?S.success(a,{id:r,...s,...null==s?void 0:s.success}):S.dismiss(r),e}).catch(e=>{let a=t.error?k(t.error,e):void 0;a?S.error(a,{id:r,...s,...null==s?void 0:s.error}):S.dismiss(r)}),e};var M=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,O=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,_=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,q=j("div")`
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
    animation: ${O} 0.15s ease-out forwards;
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
`,D=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,I=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${D} 1s linear infinite;
`,H=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,L=v`
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
}`,R=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,T=j("div")`
  position: absolute;
`,B=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,V=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,G=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${V} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:s,iconTheme:r}=e;return void 0!==t?"string"==typeof t?i.createElement(G,null,t):t:"blank"===s?null:i.createElement(B,null,i.createElement(I,{...r}),"loading"!==s&&i.createElement(T,null,"error"===s?i.createElement(q,{...r}):i.createElement(R,{...r})))},U=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,K=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,Q=j("div")`
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
`,W=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let s=e.includes("top")?1:-1,[r,a]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[U(s),K(s)];return{animation:t?`${v(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};i.memo(({toast:e,position:t,style:s,children:r})=>{let a=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(J,{toast:e}),n=i.createElement(W,{...e.ariaProps},k(e.message,e));return i.createElement(Q,{className:e.className,style:{...a,...s,...e.style}},"function"==typeof r?r({icon:o,message:n}):i.createElement(i.Fragment,null,o,n))}),o=i.createElement,u.p=void 0,b=o,g=void 0,w=void 0,y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`}},function(e){e.O(0,[933,971,938,744],function(){return e(e.s=2060)}),_N_E=e.O()}]);