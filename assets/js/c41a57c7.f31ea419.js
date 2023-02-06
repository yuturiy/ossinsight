"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2305,486],{88579:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(67294),l=a(39960),o=a(45344),c=a(90244),r=a(93978),i=a(5605),s=a(39807),m=a(69417);function u(e){let{stats:t,showTable:a=!1}=e;return n.createElement(c.Z,{className:"clearTable"},n.createElement(r.Z,null,n.createElement(m.Z,null,a?n.createElement(i.Z,null,"Table"):void 0,n.createElement(i.Z,null,"Index"),n.createElement(i.Z,null,"Calls"))),n.createElement(s.Z,null,t.map((e=>n.createElement(m.Z,{key:`${e.tableName}.${e.indexName}`},a?n.createElement(i.Z,null,n.createElement(l.Z,{to:`/stats/tables/${e.tableName}`},e.tableName)):void 0,n.createElement(i.Z,null,e.indexName),n.createElement(i.Z,null,n.createElement(o.Z,{value:e.calls??0,hasComma:!0,duration:200,size:14})))))))}},98322:(e,t,a)=>{a.d(t,{Y:()=>o});var n=a(67294),l=a(73766);function o(e,t){(0,n.useEffect)((()=>{const a=(0,l.v)(e,t);return()=>(0,l.r)(a)}),[e,t])}},72179:(e,t,a)=>{a.r(t),a.d(t,{default:()=>V});var n=a(67294),l=a(88242),o=a(16550),c=a(6971),r=a(88579),i=a(14850),s=a(90244),m=a(93978),u=a(5605),d=a(39807),h=a(69417),E=a(21448);function p(e){let{infos:t}=e;return n.createElement(s.Z,{className:"clearTable"},n.createElement(m.Z,null,n.createElement(h.Z,null,n.createElement(u.Z,null,"Index Name"),n.createElement(u.Z,null,"Columns"),n.createElement(u.Z,null,"Clustered"),n.createElement(u.Z,null,"Visible"),n.createElement(u.Z,null,"Unique"))),n.createElement(d.Z,null,t.map((e=>n.createElement(h.Z,{key:e.indexName},n.createElement(u.Z,null,e.indexName),n.createElement(u.Z,null,e.columns.split(",").map((e=>n.createElement(E.Z,{key:e,size:"small",label:e,sx:{m:.25}})))),n.createElement(u.Z,null,e.clustered),n.createElement(u.Z,null,e.isVisible),n.createElement(u.Z,null,e.nonUnique?"NO":"YES"))))))}var g=a(23508),Z=a(31486),b=a.n(Z),f=a(61802),v=a(76992),y=a(47028),k=a(29618);const N=[{key:"tableSchema"},{key:"tableName"},{key:"tableRows",humanFormat:{}},{key:"avgRowLength",humanFormat:{unit:"B"}},{key:"dataLength",humanFormat:{unit:"B"}},{key:"indexLength",humanFormat:{unit:"B"}},{key:"createTime"},{key:"tableCollation"},{key:"createOptions"},{key:"rowIdShardingInfo"},{key:"pkType"}];function x(e){let{info:t}=e;return n.createElement(v.Z,null,n.createElement(k.Z,{expandIcon:n.createElement(g.Z,null)},"Table Info"),n.createElement(y.Z,null,n.createElement(s.Z,{className:"clearTable",size:"small"},n.createElement(d.Z,null,N.map((e=>{let{key:a,humanFormat:l}=e;return n.createElement(h.Z,{key:a},n.createElement(u.Z,{sx:{fontWeight:"bold"}},a),n.createElement(u.Z,null,(0,f.N6)(l)?b()((0,f.ES)(null==t?void 0:t[a],0),l):(0,f.ES)(null==t?void 0:t[a],"--")))}))))))}var w=a(20486),I=a(98322),B=a(39960),T=a(36336),C=a(62348),S=a(18661),L=a(61953),F=a(64489);function V(){const{params:{slug:e}}=(0,o.$B)(),[t,a]=(0,n.useState)("index-usage"),{data:r}=(0,c.WV)("stats-table-info",{tableName:e},!1,!0);return(0,n.useMemo)((()=>0===(null==r?void 0:r.data.length)),[r])?n.createElement(w.default,null):n.createElement(l.Z,{title:`Stats - ${e}`},n.createElement(T.Z,{maxWidth:"lg"},n.createElement(F.Z,{sx:{my:2}},n.createElement(B.Z,{to:"/stats"},"Stats"),n.createElement("span",null,"Tables"),n.createElement("span",null,e)),n.createElement(x,{info:null==r?void 0:r.data[0]}),n.createElement(C.Z,{onChange:(e,t)=>a(t),value:t,sx:{mt:2}},n.createElement(S.Z,{label:"Index Usage",value:"index-usage"}),n.createElement(S.Z,{label:"Index Info",value:"index-info"}),n.createElement(S.Z,{label:"DDL",value:"ddl"})),"index-usage"===t?n.createElement(z,{slug:e}):void 0,"index-info"===t?n.createElement(A,{slug:e}):void 0,"ddl"===t?n.createElement(W,{slug:e}):void 0,n.createElement(L.Z,{height:16})))}function z(e){let{slug:t}=e;const{data:a,reload:l}=(0,c.WV)("stats-index-usage",{tableName:t},!1,!0,"unique");return(0,I.Y)(l,1e3),n.createElement(r.Z,{stats:(null==a?void 0:a.data)??[]})}function A(e){let{slug:t}=e;const{data:a}=(0,c.WV)("stats-index-info",{tableName:t},!1,!0);return n.createElement(p,{infos:(null==a?void 0:a.data)??[]})}function W(e){let{slug:t}=e;const{data:a}=(0,c.WV)("stats-table-ddl",{tableName:t},!1,!0),l=(0,n.useMemo)((()=>null==a?void 0:a.data[0]["Create Table"]),[a]);return l?n.createElement(i.Z,{className:"language-sql"},l):null}},8106:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),l=a(86010),o=a(95999);const c={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function r(e){let{code:t,className:a}=e;const[r,i]=(0,n.useState)(!1),s=(0,n.useRef)(void 0),m=(0,n.useCallback)((()=>{var e;e=t,navigator.clipboard.writeText(e).catch(console.error),i(!0),s.current=window.setTimeout((()=>{i(!1)}),1e3)}),[t]);return(0,n.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),n.createElement("button",{type:"button","aria-label":r?(0,o.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,o.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,o.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",a,c.copyButton,r&&c.copyButtonCopied),onClick:m},n.createElement("span",{className:c.copyButtonIcons,"aria-hidden":"true"},n.createElement("svg",{className:c.copyButtonIcon,viewBox:"0 0 24 24"},n.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),n.createElement("svg",{className:c.copyButtonSuccessIcon,viewBox:"0 0 24 24"},n.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}},88242:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(87462),l=a(51624),o=a(67294),c=a(61802),r=a(61953);function i(e){let{children:t,header:a,dark:i,sideWidth:s,Side:m,footer:u=!0,...d}=e;return(0,o.useLayoutEffect)((()=>{var e;const t=location.hash.replace(/^#/,"");null==(e=document.getElementById(t))||e.scrollIntoView()}),[]),o.createElement(l.Z,(0,n.Z)({},d,{customFooter:u,header:a,sideWidth:s,side:s&&(0,c.nf)(m)?o.createElement(r.Z,{component:"aside",width:s,position:"sticky",top:"calc(var(--ifm-navbar-height) + 76px)",height:0,zIndex:0},o.createElement(r.Z,{marginTop:"-76px",height:"calc(100vh - var(--ifm-navbar-height))"},o.createElement(m,null))):void 0}),o.createElement("div",{hidden:!0,style:{height:72}}),o.createElement("div",{style:{paddingLeft:s,paddingRight:s}},o.createElement("main",{style:{"--ifm-container-width-xl":"1200px"}},t)))}},20486:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(67294),l=a(95999),o=a(1944),c=a(51624),r=a(16550),i=a(29630),s=a(70754);function m(){const e=(0,r.k6)(),[t,a]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{var t,n;let{pathname:l,search:o,hash:c}=window.location;o=null==(t=o)?void 0:t.replace(/^\?/,""),c=null==(n=c)?void 0:n.replace(/^#/,"");const[r,...i]=l.split("/");if("analyze"===r){if(i.length>=1&&i.length<=2)return void e.replace({pathname:l,search:o,hash:c});if(0===i.length)return void e.replace({pathname:"/analyze/pingcap/tidb",search:o,hash:c})}a(!0)}),[]),n.createElement(n.Fragment,null,n.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})?void 0:"Loading...",description:"The comprehensive Open Source Software insight tool by analyzing massive events from GitHub, powered by TiDB, the best insight building database of data agility.",image:"/img/screenshots/homepage.png"}),n.createElement(c.Z,{disableAuth:!0},t?n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))):n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement(i.Z,{variant:"body1",fontSize:24},"Loading... \xa0",n.createElement(s.Z,{sx:{display:"inline-block"},size:24})))))))}}}]);