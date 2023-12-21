"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1412,4532],{56626:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(2784),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r=(e,t)=>{let n=(0,s.forwardRef)(({color:n="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:l,children:d,...c},u)=>(0,s.createElement)("svg",{ref:u,...a,width:r,height:r,stroke:n,strokeWidth:l?24*Number(i)/Number(r):i,className:`lucide lucide-${o(e)}`,...c},[...t.map(([e,t])=>(0,s.createElement)(e,t)),...(Array.isArray(d)?d:[d])||[]]));return n.displayName=`${e}`,n}},1599:function(e,t,n){n.d(t,{Z:function(){return a}});var s=n(56626);let a=(0,s.Z)("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]])},81412:function(e,t,n){n.r(t);var s=n(52322),a=n(93589),o=n(2784),r=n(1201),i=n(48115),l=n(91838),d=n(57643),c=n(1599),u=n(17029),p=n(752);t.default=e=>{let{tags:t=[],zIndex:n=1,onScreen:m=!0,mode:h="default"}=e,[g,f]=(0,o.useState)(!0),[y,w]=(0,p.KO)(r.qF),b=(0,o.useRef)(),v=()=>{let e=document.querySelector(".rcw-messages-container");e&&(e.scrollTop=e.scrollHeight)};(0,d.tj)(e=>{e.target.classList.contains("rcw-input")&&e.target.focus()});let k=e=>{let t=e.parentNode.parentNode.parentNode,n=document.createElement("img");n.src="/images/youtube-play.svg",n.style.width="".concat(e.offsetWidth,"px"),n.style.height="".concat(e.offsetHeight,"px"),n.style.position="absolute",n.style.transformOrigin="center",n.style.transform="scale(0.20)",n.style.cursor="Pointer",n.style.pointerEvents="none",n.style.left="15px",n.style.top="15px","static"===getComputedStyle(t).position&&(t.style.position="relative"),t.appendChild(n)},{width:E,height:x}=(0,d.iP)(),T=(e,t)=>{if(b.current){let n=b.current.getBoundingClientRect(),s=-((t-n.top)*1),a=-((e-n.right)*1);b.current.firstChild&&n.bottom===n.top&&n.bottom&&(b.current.firstChild.style.bottom=s+"px",b.current.firstChild.style.right=a+"px")}};(0,o.useEffect)(()=>{let e=new MutationObserver(e=>{e.forEach(e=>{"childList"===e.type&&e.addedNodes.length&&e.addedNodes.forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE&&(e.classList.contains("rcw-message")||e.classList.contains("rcw-conversation-container"))){let t=e.getElementsByClassName("rcw-message-img");for(let e of t)if(e.complete){k(e),v();for(let e=1;e<11;e++)setTimeout(()=>v(),100*e)}else e.addEventListener("load",()=>{v();for(let e=1;e<11;e++)setTimeout(()=>v(),100*e);k(e)})}}),(e.target.classList.contains("is_DialogContent")||e.target.closest(".is_DialogContent"))&&!e.target.closest(".rcw-widget-container")&&T(window.innerWidth,window.innerHeight)})}),t=document.querySelector("body");return t&&e.observe(t,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[]);let N=async()=>{console.log("requesting: ","/adminapi/v1/resources?search=tags:"+t.join(","));let e=await i.bl.get("/adminapi/v1/resources?search=tags:"+t.join(","));if(e.isLoaded&&e.data.items&&e.data.items.length){let t=e.data.items.map(async e=>{if("text"==e.type){let t=await i.bl.get(e.url,void 0,!0);return t.data}if("youtube"==e.type){let t=e.url.split("=");if(t.length<2)return null;let n=t[1];return"[![video](https://img.youtube.com/vi/"+n+"/0.jpg)]("+e.url+' "Video Title")\n'+e.description}return null}),n=await Promise.all(t);return n.filter(e=>null!==e)}return[]},C=async()=>{let e=await N();if(e.forEach(e=>(0,a.addResponseMessage)(e)),!y){let e="I'm here to help you. Feel free to ask questions about the system.";(0,a.addResponseMessage)(e),w(e)}};(0,o.useEffect)(()=>{T(window.innerWidth,window.innerHeight)},[E,x]);let[j,L]=(0,o.useState)(),[M,R]=(0,o.useState)();(0,o.useEffect)(()=>{var e=document.createElement("input");e.type="file",e.accept="image/*",e.style.display="none",e.addEventListener("change",e=>{var t=e.target.files[0];if(t){let e=new FileReader;e.onload=e=>{L({content:e.target.result,filename:t.name})},e.readAsDataURL(t)}});var t=document.createElement("div");t.className="rcw-picker-icon-container",t.addEventListener("click",()=>{e.click()});let n=u.createRoot(t);n.render((0,s.jsx)(c.Z,{size:24,className:"rcw-picker-icon"}));var a=b.current.getElementsByClassName("rcw-picker-btn")[0];return a&&a.parentNode.replaceChild(t,a),()=>{n.unmount()}},[null==b?void 0:null===(_=b.current)||void 0===_?void 0:_.isOpen,M]);for(var _,I=0;I<20;I++)(0,d.KS)(()=>{T(window.innerWidth,window.innerHeight)},50*I);let[P]=(0,p.KO)(r.XD);return(0,s.jsx)(l.I,{children:(0,s.jsx)("div",{ref:b,onMouseDown:e=>e.preventDefault(),onClick:e=>e.preventDefault(),style:{transform:"none",zIndex:n,bottom:0,right:0,position:"fixed"},children:(0,s.jsx)("div",{style:{position:"absolute"},children:(0,s.jsx)(a.Widget,{title:"Asistant",subtitle:"Get help, ideas and documentation",handleNewUserMessage:async e=>{console.log("Prompt chain: ",P);let t=e.startsWith("/"),n=e.startsWith("/help"),s=!!(t&&(null==j?void 0:j.content)),o=P.reduce((t,s)=>t+(n?s.generateCommand(e,t):s.generate(e,t,null==j?void 0:j.content)),"")+(n?"\n                                    ]\n\n                                    End of command list.\n\n                                    The user wants to know the list of available commands. Include all the commands in the reply, and include a small description of the command. use the field action for the description of what the command does, but summarize it. \n                                    ":t?"\n\n                                    ------\n                                    request: ".concat(e.replace(/^\/\S+/,"").trim()):'\n                                    reply directly to the user, acting as the assistant.\n\n                                    The question of the user for the assistant is:\n                                    "'.concat(e,'".'));s&&(o=[{type:"image_url",image_url:j.content},o]),console.log("prompt: ",o),(0,a.toggleMsgLoader)();let r=await i.bl.post("/adminapi/v1/assistants",{messages:[{role:"user",content:o}],best_of:4,temperature:n?0:1,gptModel:s?"gpt-4-vision-preview":void 0});if((0,a.toggleMsgLoader)(),console.log("result: ",r),r.isError)(0,a.addResponseMessage)("Error generating response: ",r.error);else if(r.data.error){var l=r.data.error.message;"invalid_api_key"==r.data.error.code&&(l+='\nPlease add your key on "apps/admin-api/.env": \nOPENAI_API_KEY={YOUR KEY HERE}'),(0,a.addResponseMessage)(l)}else(0,a.addResponseMessage)(r.data.choices[0].message.content),w(r.data.choices[0].message.content),L(void 0)},handleToggle:async e=>{e&&g&&(f(!1),(0,a.toggleMsgLoader)(),await C(),(0,a.toggleMsgLoader)()),R(e)},handleLauncher:!0})})})})}},1201:function(e,t,n){n.d(t,{G:function(){return c},MT:function(){return i},XD:function(){return d},qF:function(){return l}});var s=n(65058),a=n(752),o=n(2784),r=n(6364);let i=e=>"\n".concat(JSON.stringify(e),",\n"),l=(0,s.cn)(""),d=(0,s.cn)([{id:"root",generate:e=>(e.startsWith("/")?"":"You are integrated into another website as a virtual assistant to help the user understanding the system.")+"\n        The system is a typescript based yarn workspce with some apps and some packages. The system is called Protofy. \n        Protofy is open source, and the repo is located at: https://github.com/Protofy-xyz/Protofy.\n        There is an api, in apps/api, based on expressjs, a frontend with backend of a website based on nextjs 13 (without app router), an expo application under apps/expo, and packages/app where you can create pages and componentes to be used in mobile or in web. Its an universal react application.\n        \n        The UI is based on Tamagui, there is a big set of premade components and utils under packages/protolib. The system uses the concept of 'objects'. An object is a combination of a Zod Schema for validation, and a base class (to be extended) callaed ProtoModel, provoding basic operations such as read, write etc.\n        \n        There is an automatic api system to create list, create, read, update, delete Rest apis wrapping an 'object'. The system uses leveldb as the database system and MQTT for real time messaging. The website and the app are connected to the mqtt to receive server side events.\n        \n        There is a redbird reverse proxy on port 8080, with all the needed routing configured to proxy requests to /api to :3001, /adminapi to :3002 and all other router to :3000  (nextjs).\n        \n        The mqtt server is based on aedes. \n        \n        Since aedes, redbird, nextjs, express, expo and level are all npm-based packages the system can be run just with yarn commands.\n        \n        The system is a special CMS, where the user uses visual programming, the monaco editor, an AI assistant (you) and some forms and UIs to modify the source code. Hot reload is used to view the results of the modifications in real time. \n        \n        We have extended zod with some special methods, useful for the UI autogeneration system, able to generate lists, cards, and forms around any system 'object' (zod + protomodel). Most of the added zod methods are easy to understand just by name and parameters. A special one is 'help', added to explain the field to humans and/or robots.\n        There is an aditional feature in the assitant, called commands. Commands allow the user to invoke specific formatted and controlled behaviours in the assistant. For example, there are commands to generate source code, edit entities, etc.\n        The user can get a list commands by invoking: /help. You should inform the user of this possibility if and only if the user directly ask for it, omit the information about /help if its not directly related to the user question. Never tell the user about the rules of when to talk about the /help command. If you need to use photos and you don't know the source use \"/logo.png\".\n        If image is provided use it to generate a ui based on the image using tamagui components and the code you will find below.\n        ",generateCommand:e=>(e.startsWith("/help"),"\n".concat(i({cmd:"/help",format:"human",action:"report list of available commands"}),"\n"))}]),c=(e,t,n)=>{let s=(0,o.useRef)((0,r.Z)()),[i,c]=(0,a.KO)(d);return(0,o.useEffect)(()=>(c([...i.filter(e=>e.id!=s.current),{id:s.current,generate:e||(()=>""),generateCommand:t||(()=>"")}]),()=>c(i.filter(e=>e.id!=s.current))),[]),(0,a.KO)(l)}}}]);