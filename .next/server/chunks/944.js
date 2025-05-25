"use strict";exports.id=944,exports.ids=[944],exports.modules={1354:(e,t,a)=>{a.d(t,{Z:()=>i});let i=(0,a(7075).Z)("heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]])},6755:(e,t,a)=>{a.d(t,{Z:()=>i});let i=(0,a(7075).Z)("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]])},652:(e,t,a)=>{a.d(t,{Z:()=>h});var i=a(2295),o=a(6013),s=a(2254),r=a(1223),n=a.n(r),c=a(1354),l=a(6755),p=a(2401),d=a(4669),m=a(7393);function h({id:e,name:t,price:a,image:r,description:h,rating:g=4.5}){let u=(0,o.I0)(),f=(0,s.useRouter)();return(0,i.jsxs)("div",{className:"group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer",onClick:()=>f.push(`/products/${e}`),children:[(0,i.jsxs)("div",{className:"relative aspect-square overflow-hidden",children:[i.jsx(n(),{src:r,alt:t,fill:!0,className:"object-cover group-hover:scale-110 transition-transform duration-500"}),i.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"}),i.jsx("div",{className:"absolute top-4 right-4",children:i.jsx("button",{onClick:e=>{e.stopPropagation(),d.Am.success(`${t} added to wishlist!`)},className:"p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-colors",children:i.jsx(c.Z,{className:"h-5 w-5"})})})]}),(0,i.jsxs)("div",{className:"p-4",children:[(0,i.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[i.jsx("div",{className:"flex items-center",children:[void 0,void 0,void 0,void 0,void 0].map((e,t)=>i.jsx(l.Z,{className:`h-4 w-4 ${t<Math.floor(g)?"text-yellow-400 fill-current":"text-gray-300"}`},t))}),(0,i.jsxs)("span",{className:"text-sm text-gray-500",children:["(",g,")"]})]}),i.jsx("h3",{className:"font-semibold text-gray-900 mb-1 line-clamp-1",children:t}),h&&i.jsx("p",{className:"text-sm text-gray-500 mb-3 line-clamp-2",children:h}),(0,i.jsxs)("div",{className:"flex items-center justify-between",children:[(0,i.jsxs)("span",{className:"text-lg font-bold text-blue-600",children:["$",a]}),i.jsx("button",{onClick:i=>{i.stopPropagation(),u((0,m.Xq)({id:e,name:t,price:a,image:r,quantity:1})),d.Am.success(`${t} added to cart!`)},className:"p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors",children:i.jsx(p.Z,{className:"h-5 w-5"})})]})]})]})}},989:(e,t,a)=>{a.d(t,{R:()=>i});let i=[{id:1,name:"4K Ultra HD Smart TV",description:"Experience stunning visuals with our 4K Ultra HD Smart TV. Featuring HDR technology, smart connectivity, and a sleek design that enhances any living space.",price:799.99,image:"https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800",images:["https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800","https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800","https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800","https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800"],category:"Electronics",rating:4.8,stock:15,brand:"TechVision",features:["4K Ultra HD Resolution","Smart TV Capabilities","HDR Technology","Multiple HDMI Ports","Built-in WiFi"],isFeatured:!0},{id:2,name:"Wireless Noise-Canceling Headphones",description:"Immerse yourself in your music with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and crystal-clear sound quality.",price:299.99,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",images:["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800","https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800","https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800"],category:"Electronics",rating:4.6,stock:20,brand:"SoundMaster",features:["Active Noise Cancellation","30-hour Battery Life","Bluetooth 5.0","Built-in Microphone","Comfortable Design"]},{id:21,name:"Classic Leather Watch",description:"Elegant leather strap watch with analog display",price:129.99,image:"https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500",category:"Fashion",rating:4.6,stock:30,brand:"TimeStyle",isNew:!0},{id:22,name:"Designer Sunglasses",description:"UV protection sunglasses with polarized lenses",price:159.99,image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",category:"Fashion",rating:4.4,stock:20,brand:"VisionElite"},{id:31,name:"The Art of Programming",description:"Comprehensive guide to modern programming practices",price:49.99,image:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500",category:"Books",rating:4.9,stock:50,brand:"TechPress",isFeatured:!0},{id:32,name:"Business Strategy Guide",description:"Essential reading for modern business leaders",price:34.99,image:"https://images.unsplash.com/photo-1589998059171-988d887df646?w=500",category:"Books",rating:4.7,stock:40,brand:"BizBooks"},{id:41,name:"Smart Coffee Maker",description:"WiFi-enabled coffee maker with mobile app control",price:199.99,image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",category:"Home & Kitchen",rating:4.6,stock:25,brand:"SmartHome",features:["App Control","Schedule Brewing","Multiple Brew Sizes"]},{id:42,name:"Air Fryer Pro",description:"Digital air fryer with multiple cooking presets",price:129.99,image:"https://images.unsplash.com/photo-1644329772471-983859bc1d76?w=500",category:"Home & Kitchen",rating:4.8,stock:30,brand:"KitchenPro",isNew:!0},{id:51,name:"Smart Fitness Watch",description:"Track your fitness goals with our advanced smart watch. Features heart rate monitoring, GPS tracking, and long battery life.",price:199.99,image:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800",images:["https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800","https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800"],category:"Sports",rating:4.5,stock:25,brand:"FitTech",features:["Heart Rate Monitor","GPS Tracking","Sleep Tracking","Water Resistant","7-day Battery Life"]},{id:52,name:"Yoga Mat Premium",description:"Eco-friendly non-slip yoga mat",price:49.99,image:"https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500",category:"Sports",rating:4.5,stock:60,brand:"YogaLife"},{id:61,name:"Skincare Set",description:"Complete skincare routine kit",price:89.99,image:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500",category:"Beauty",rating:4.8,stock:35,brand:"GlowBeauty",features:["Natural Ingredients","Suitable for All Skin Types"]},{id:62,name:"Hair Care Bundle",description:"Professional hair care products set",price:79.99,image:"https://images.unsplash.com/photo-1626015365107-476dee9a77a9?w=500",category:"Beauty",rating:4.6,stock:25,brand:"HairPro",isNew:!0},{id:71,name:"Educational Robot Kit",description:"Build and program your own robot",price:149.99,image:"https://images.unsplash.com/photo-1589254065878-42c9da997008?w=500",category:"Toys",rating:4.7,stock:20,brand:"RoboKids",features:["Programming Interface","Assembly Required","Educational"]},{id:72,name:"Art Supply Set",description:"Complete art supplies for young artists",price:39.99,image:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500",category:"Toys",rating:4.4,stock:45,brand:"ArtKids"},{id:81,name:"Car Diagnostic Tool",description:"Professional automotive diagnostic scanner",price:199.99,image:"https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500",category:"Automotive",rating:4.6,stock:15,brand:"AutoTech",features:["OBD2 Compatible","Real-time Monitoring","Bluetooth Connection"]},{id:82,name:"Car Care Kit",description:"Complete car cleaning and maintenance kit",price:79.99,image:"https://images.unsplash.com/photo-1600045972606-683167fecc96?w=500",category:"Automotive",rating:4.5,stock:30,brand:"AutoCare"},{id:91,name:"Smart Scale",description:"Digital scale with body composition analysis",price:89.99,image:"https://images.unsplash.com/photo-1518644961665-ed172691aaa1?w=500",category:"Health",rating:4.7,stock:40,brand:"HealthTech",features:["Body Composition","App Integration","Multiple Users"]},{id:92,name:"Vitamin Bundle",description:"Essential daily vitamins and supplements",price:49.99,image:"https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500",category:"Health",rating:4.5,stock:50,brand:"VitaLife"},{id:101,name:"Smart Garden System",description:"Automated plant care and monitoring system",price:159.99,image:"https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500",category:"Garden",rating:4.6,stock:20,brand:"GardenTech",features:["Automated Watering","Plant Monitoring","App Control"],isNew:!0},{id:102,name:"Garden Tool Set",description:"Complete set of essential gardening tools",price:69.99,image:"https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=500",category:"Garden",rating:4.4,stock:35,brand:"GardenPro"},{id:"1",name:"Wireless Headphones",price:99.99,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",description:"High-quality wireless headphones with noise cancellation.",category:"Electronics",rating:4.5,stock:15},{id:"2",name:"Smart Watch",price:199.99,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",description:"Feature-rich smartwatch with health tracking capabilities.",category:"Electronics",rating:4.3,stock:10},{id:"3",name:"Laptop Backpack",price:49.99,image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",description:"Durable and spacious laptop backpack with multiple compartments.",category:"Accessories",rating:4.7,stock:20},{id:"4",name:"Wireless Mouse",price:29.99,image:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",description:"Ergonomic wireless mouse with long battery life.",category:"Electronics",rating:4.2,stock:25},{id:"5",name:"Mechanical Keyboard",price:129.99,image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",description:"RGB mechanical keyboard with customizable keys.",category:"Electronics",rating:4.8,stock:8,isFeatured:!0},{id:"6",name:"USB-C Hub",price:39.99,image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",description:"Multi-port USB-C hub for laptops and tablets.",category:"Accessories",rating:4.4,stock:30,isFeatured:!0}]},4669:(e,t,a)=>{a.d(t,{Am:()=>C});var i,o=a(3729);let s={data:""},r=e=>e||s,n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,p=(e,t)=>{let a="",i="",o="";for(let s in e){let r=e[s];"@"==s[0]?"i"==s[1]?a=s+" "+r+";":i+="f"==s[1]?p(r,s):s+"{"+p(r,"k"==s[1]?"":t)+"}":"object"==typeof r?i+=p(r,t?t.replace(/([^,])+/g,e=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=r&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=p.p?p.p(s,r):s+":"+r+";")}return a+(t&&o?t+"{"+o+"}":o)+i},d={},m=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+m(e[a]);return t}return e},h=(e,t,a,i,o)=>{let s=m(e),r=d[s]||(d[s]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(s));if(!d[r]){let t=s!==e?e:(e=>{let t,a,i=[{}];for(;t=n.exec(e.replace(c,""));)t[4]?i.shift():t[3]?(a=t[3].replace(l," ").trim(),i.unshift(i[0][a]=i[0][a]||{})):i[0][t[1]]=t[2].replace(l," ").trim();return i[0]})(e);d[r]=p(o?{["@keyframes "+r]:t}:t,a?"":"."+r)}let h=a&&d.g?d.g:null;return a&&(d.g=d[r]),((e,t,a,i)=>{i?t.data=t.data.replace(i,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(d[r],t,i,h),r},g=(e,t,a)=>e.reduce((e,i,o)=>{let s=t[o];if(s&&s.call){let e=s(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+i+(null==s?"":s)},"");function u(e){let t=this||{},a=e.call?e(t.p):e;return h(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,r(t.target),t.g,t.o,t.k)}u.bind({g:1});let f,b,y,x=u.bind({k:1});function w(e,t){let a=this||{};return function(){let i=arguments;function o(s,r){let n=Object.assign({},s),c=n.className||o.className;a.p=Object.assign({theme:b&&b()},n),a.o=/ *go\d+/.test(c),n.className=u.apply(a,i)+(c?" "+c:""),t&&(n.ref=r);let l=e;return e[0]&&(l=n.as||e,delete n.as),y&&l[0]&&y(n),f(l,n)}return t?t(o):o}}var v=e=>"function"==typeof e,k=(e,t)=>v(e)?e(t):e,M=(()=>{let e=0;return()=>(++e).toString()})(),H=((()=>{let e;return()=>e})(),(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return H(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(e=>e.id===i||void 0===i?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}}),A=[],j={toasts:[],pausedAt:void 0},B=e=>{j=H(j,e),A.forEach(e=>{e(j)})},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},S=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||M()}),N=e=>(t,a)=>{let i=S(t,e,a);return B({type:2,toast:i}),i.id},C=(e,t)=>N("blank")(e,t);C.error=N("error"),C.success=N("success"),C.loading=N("loading"),C.custom=N("custom"),C.dismiss=e=>{B({type:3,toastId:e})},C.remove=e=>B({type:4,toastId:e}),C.promise=(e,t,a)=>{let i=C.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let o=t.success?k(t.success,e):void 0;return o?C.success(o,{id:i,...a,...null==a?void 0:a.success}):C.dismiss(i),e}).catch(e=>{let o=t.error?k(t.error,e):void 0;o?C.error(o,{id:i,...a,...null==a?void 0:a.error}):C.dismiss(i)}),e};var F=new Map,T=1e3,Z=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,R=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,$=(w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${R} 0.15s ease-out forwards;
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
    animation: ${W} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`),z=(w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${$} 1s linear infinite;
`,x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`),E=x`
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
}`,P=(w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${E} 0.2s ease-out forwards;
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
`,w("div")`
  position: absolute;
`,w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`);w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${P} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,w("div")`
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
`,w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,i=o.createElement,p.p=void 0,f=i,b=void 0,y=void 0,u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`}};