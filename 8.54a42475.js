(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{118:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const l=document.getSelection();let c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch(o){}return a.remove(),c&&(l.removeAllRanges(),l.addRange(c)),n&&n.focus(),r};e.exports=n,e.exports.default=n},119:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,l,c]=t;if(n&&c){n=parseInt(n),c=parseInt(c);const e=n<c?1:-1;"-"!==l&&".."!==l&&"\u2025"!==l||(c+=e);for(let t=n;t!==c;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(98),r=a(22),o=a(25),s=a(87),i=a(3),u=a(79),p=a(78),m=a(91),d=a(95),h=a(96),b=a(94),y=a(81),g=a(85),f=a(99);var v=e=>l.a.createElement("svg",Object(i.a)({width:"20",height:"20",role:"img"},e),l.a.createElement("g",{fill:"#7a7a7a"},l.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),l.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"}))),k=a(97),j=a(67),E=a.n(j);const O=(e,t)=>"link"===e.type?Object(p.isSamePath)(e.href,t):"category"===e.type&&e.items.some((e=>O(e,t)));function C({item:e,onItemClick:t,collapsible:a,activePath:c,...r}){const{items:o,label:s}=e,p=O(e,c),m=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)((()=>{t.current=e}),[e]),t.current}(p),[d,h]=Object(n.useState)((()=>!!a&&(!p&&e.collapsed))),b=Object(n.useRef)(null),[y,g]=Object(n.useState)(void 0),f=(e=!0)=>{var t;g(e?`${null===(t=b.current)||void 0===t?void 0:t.scrollHeight}px`:void 0)};Object(n.useEffect)((()=>{p&&!m&&d&&h(!1)}),[p,m,d]);const v=Object(n.useCallback)((e=>{e.preventDefault(),y||f(),setTimeout((()=>h((e=>!e))),100)}),[y]);return 0===o.length?null:l.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":d}),key:s},l.a.createElement("a",Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&p,[E.a.menuLinkText]:!a}),onClick:a?v:void 0,href:a?"#!":void 0},r),s),l.a.createElement("ul",{className:"menu__list",ref:b,style:{height:y},onTransitionEnd:()=>{d||f(!1)}},o.map((e=>l.a.createElement(x,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:c})))))}function N({item:e,onItemClick:t,activePath:a,collapsible:n,...c}){const{href:r,label:o}=e,s=O(e,a);return l.a.createElement("li",{className:"menu__list-item",key:o},l.a.createElement(y.a,Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--active":s}),to:r},Object(g.a)(r)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},c),o))}function x(e){switch(e.item.type){case"category":return l.a.createElement(C,e);case"link":default:return l.a.createElement(N,e)}}var S=function({path:e,sidebar:t,sidebarCollapsible:a=!0,onCollapse:c,isHidden:r}){const[o,s]=Object(n.useState)(!1),{navbar:{hideOnScroll:i},hideableSidebar:y}=Object(p.useThemeConfig)(),{isAnnouncementBarClosed:g}=Object(m.a)(),{scrollY:j}=Object(b.a)();Object(d.a)(o);const O=Object(h.a)();return Object(n.useEffect)((()=>{O===h.b.desktop&&s(!1)}),[O]),l.a.createElement("div",{className:Object(u.a)(E.a.sidebar,{[E.a.sidebarWithHideableNavbar]:i,[E.a.sidebarHidden]:r})},i&&l.a.createElement(f.a,{tabIndex:-1,className:E.a.sidebarLogo}),l.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",E.a.menu,{"menu--show":o,[E.a.menuWithAnnouncementBar]:!g&&0===j})},l.a.createElement("button",{"aria-label":o?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{s(!o)}},o?l.a.createElement("span",{className:Object(u.a)(E.a.sidebarMenuIcon,E.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement(k.a,{className:E.a.sidebarMenuIcon,height:24,width:24})),l.a.createElement("ul",{className:"menu__list"},t.map((t=>l.a.createElement(x,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),s(!1)},collapsible:a,activePath:e}))))),y&&l.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(u.a)("button button--secondary button--outline",E.a.collapseSidebarButton),onClick:c},l.a.createElement(v,{className:E.a.collapseSidebarButtonIcon})))},T={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},_={Prism:a(23).a,theme:T};function P(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var I=/\r\n|\r|\n/,L=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},B=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},D=function(e,t){var a=e.plain,n=Object.create(null),l=e.styles.reduce((function(e,a){var n=a.languages,l=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=w({},e[t],l);e[t]=a})),e}),n);return l.root=a,l.plain=w({},a,{backgroundColor:null}),l};function $(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var M=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),P(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?D(e.theme,e.language):void 0;return t.themeDict=a})),P(this,"getLineProps",(function(e){var a=e.key,n=e.className,l=e.style,c=w({},$(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(c.style=r.plain),void 0!==l&&(c.style=void 0!==c.style?w({},c.style,l):l),void 0!==a&&(c.key=a),n&&(c.className+=" "+n),c})),P(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,l=a.length,c=t.getThemeDict(t.props);if(void 0!==c){if(1===l&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===l&&!n)return c[a[0]];var r=n?{display:"inline-block"}:{},o=a.map((function(e){return c[e]}));return Object.assign.apply(Object,[r].concat(o))}})),P(this,"getTokenProps",(function(e){var a=e.key,n=e.className,l=e.style,c=e.token,r=w({},$(e,["key","className","style","token"]),{className:"token "+c.types.join(" "),children:c.content,style:t.getStyleForToken(c),key:void 0});return void 0!==l&&(r.style=void 0!==r.style?w({},r.style,l):l),void 0!==a&&(r.key=a),n&&(r.className+=" "+n),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,l=e.children,c=this.getThemeDict(this.props),r=t.languages[a];return l({tokens:function(e){for(var t=[[]],a=[e],n=[0],l=[e.length],c=0,r=0,o=[],s=[o];r>-1;){for(;(c=n[r]++)<l[r];){var i=void 0,u=t[r],p=a[r][c];if("string"==typeof p?(u=r>0?u:["plain"],i=p):(u=B(u,p.type),p.alias&&(u=B(u,p.alias)),i=p.content),"string"==typeof i){var m=i.split(I),d=m.length;o.push({types:u,content:m[0]});for(var h=1;h<d;h++)L(o),s.push(o=[]),o.push({types:u,content:m[h]})}else r++,t.push(u),a.push(i),n.push(0),l.push(i.length)}r--,t.pop(),a.pop(),n.pop(),l.pop()}return L(o),s}(void 0!==r?t.tokenize(n,r,a):[n]),className:"prism-code language-"+a,style:void 0!==c?c.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component),A=a(118),R=a.n(A),H=a(119),W=a.n(H),z={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},F=a(86);var J=()=>{const{prism:e}=Object(p.useThemeConfig)(),{isDarkTheme:t}=Object(F.a)(),a=e.theme||z,n=e.darkTheme||a;return t?n:a},K=a(68),V=a.n(K);const Y=/{([\d,-]+)}/,q=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},G=/(?:title=")(.*)(?:")/;var Q=({children:e,className:t,metastring:a})=>{const{prism:c}=Object(p.useThemeConfig)(),[r,o]=Object(n.useState)(!1),[s,m]=Object(n.useState)(!1);Object(n.useEffect)((()=>{m(!0)}),[]);const d=Object(n.useRef)(null);let h=[],b="";const y=J(),g=Array.isArray(e)?e.join(""):e;if(a&&Y.test(a)){const e=a.match(Y)[1];h=W()(e).filter((e=>e>0))}a&&G.test(a)&&(b=a.match(G)[1]);let f=t&&t.replace(/language-/,"");!f&&c.defaultLanguage&&(f=c.defaultLanguage);let v=g.replace(/\n$/,"");if(0===h.length&&void 0!==f){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return q(["js","jsBlock"]);case"jsx":case"tsx":return q(["js","jsBlock","jsx"]);case"html":return q(["js","jsBlock","html"]);case"python":case"py":return q(["python"]);default:return q()}})(f),a=g.replace(/\n$/,"").split("\n");let n;for(let l=0;l<a.length;){const c=l+1,r=a[l].match(t);if(null!==r){switch(r.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${c},`;break;case"highlight-start":n=c;break;case"highlight-end":e+=`${n}-${c-1},`}a.splice(l,1)}else l+=1}h=W()(e),v=a.join("\n")}const k=()=>{R()(v),o(!0),setTimeout((()=>o(!1)),2e3)};return l.a.createElement(M,Object(i.a)({},_,{key:String(s),theme:y,code:v,language:f}),(({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:c})=>l.a.createElement(l.a.Fragment,null,b&&l.a.createElement("div",{style:t,className:V.a.codeBlockTitle},b),l.a.createElement("div",{className:V.a.codeBlockContent},l.a.createElement("div",{tabIndex:0,className:Object(u.a)(e,V.a.codeBlock,"thin-scrollbar",{[V.a.codeBlockWithTitle]:b})},l.a.createElement("div",{className:V.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=n({line:e,key:t});return h.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),l.a.createElement("div",Object(i.a)({key:t},a),e.map(((e,t)=>l.a.createElement("span",Object(i.a)({key:t},c({token:e,key:t}))))))})))),l.a.createElement("button",{ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(u.a)(V.a.copyButton),onClick:k},r?"Copied":"Copy")))))},U=(a(69),a(70)),X=a.n(U);var Z=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(p.useThemeConfig)();return t?l.a.createElement(e,a,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(u.a)("anchor",{[X.a.enhancedAnchor]:!n}),id:t}),a.children,l.a.createElement("a",{className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#")):l.a.createElement(e,a)},ee=a(71),te=a.n(ee);var ae={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?l.a.createElement(Q,e):l.a.createElement("code",e):t},a:e=>l.a.createElement(y.a,e),pre:e=>l.a.createElement("div",Object(i.a)({className:te.a.mdxCodeBlock},e)),h1:Z("h1"),h2:Z("h2"),h3:Z("h3"),h4:Z("h4"),h5:Z("h5"),h6:Z("h6")},ne=a(100),le=a(83),ce=a(72),re=a.n(ce);function oe({currentDocRoute:e,versionMetadata:t,children:a}){var o,i;const{siteConfig:m,isClient:d}=Object(r.default)(),{pluginId:h,permalinkToSidebar:b,docsSidebars:y,version:g}=t,f=b[e.path],k=y[f],[j,E]=Object(n.useState)(!1),[O,C]=Object(n.useState)(!1),N=Object(n.useCallback)((()=>{O&&C(!1),E(!j)}),[O]);return l.a.createElement(s.a,{key:d,searchMetadatas:{version:g,tag:Object(p.docVersionSearchTag)(h,g)}},l.a.createElement("div",{className:re.a.docPage},k&&l.a.createElement("div",{className:Object(u.a)(re.a.docSidebarContainer,{[re.a.docSidebarContainerHidden]:j}),onTransitionEnd:e=>{e.currentTarget.classList.contains(re.a.docSidebarContainer)&&j&&C(!0)},role:"complementary"},l.a.createElement(S,{key:f,sidebar:k,path:e.path,sidebarCollapsible:null===(o=null===(i=m.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===o||o,onCollapse:N,isHidden:O}),O&&l.a.createElement("div",{className:re.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:N,onClick:N},l.a.createElement(v,null))),l.a.createElement("main",{className:re.a.docMainContainer},l.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",re.a.docItemWrapper,{[re.a.docItemWrapperEnhanced]:j})},l.a.createElement(c.a,{components:ae},a)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,c=t.find((e=>Object(le.matchPath)(n.pathname,e)));return c?l.a.createElement(oe,{currentDocRoute:c,versionMetadata:a},Object(o.a)(t)):l.a.createElement(ne.default,e)}}}]);