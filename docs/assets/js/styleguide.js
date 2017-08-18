function hideElements(e){Array.prototype.forEach.call(e,hideElement)}function showElements(e){Array.prototype.forEach.call(e,showElement)}function hideElement(e){e.style.display="none"}function showElement(e){e.style.display=""}Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this,a=this;if(!document.documentElement.contains(t))return null;do{if(a.matches(e))return a;a=a.parentElement}while(null!==a);return null});var $hamburger=document.getElementById("hamburger"),$hamburger_menu=document.getElementById("guide_navigation");document.querySelector("#hamburger").addEventListener("click",function(e){e.preventDefault(),$hamburger.classList.toggle("hamburger-button-clicked"),$hamburger_menu.classList.toggle("guide-navigation-active")});for(var nav=document.querySelectorAll(".guide-navigation-item-parent"),i=0;i<nav.length;i++)nav[i].addEventListener("click",function(e){var t=this.getElementsByTagName("svg")[0];return this.classList.toggle("guide-navigation-item-parent--active"),t.classList.toggle("rotate-180-xs"),!1});var child=document.querySelector(".guide-navigation-link-child--active"),parent=child.closest(".guide-navigation-item-parent");parent.classList.toggle("guide-navigation-item-parent--active"),parent.getElementsByTagName("svg")[0].classList.toggle("rotate-180-xs");var subNav=document.querySelector(".subnav-container"),subNavItem=document.querySelectorAll(".subnav-link"),pageTitleHeight=128;window.onscroll=function(){document.body.scrollTop>=pageTitleHeight?subNav.classList.add("subnav-container--fixed"):subNav.classList.remove("subnav-container--fixed")};for(var i=0;i<subNavItem.length;i++)subNavItem[i].addEventListener("click",function(e){[].forEach.call(subNavItem,function(e){e.classList.remove("subnav-link--active")}),this.classList.add("subnav-link--active")});var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,a=_self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){switch(a.util.type(e)){case"Object":var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=a.util.clone(e[n]));return t;case"Array":return e.map&&e.map(function(e){return a.util.clone(e)})}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var s=(r=r||a.languages)[e];if(2==arguments.length){n=arguments[1];for(var i in n)n.hasOwnProperty(i)&&(s[i]=n[i]);return s}var l={};for(var o in s)if(s.hasOwnProperty(o)){if(o==t)for(var i in n)n.hasOwnProperty(i)&&(l[i]=n[i]);l[o]=s[o]}return a.languages.DFS(a.languages,function(t,a){a===r[e]&&t!=e&&(this[t]=l)}),r[e]=l},DFS:function(e,t,n,r){r=r||{};for(var s in e)e.hasOwnProperty(s)&&(t.call(e,s,e[s],n||s),"Object"!==a.util.type(e[s])||r[a.util.objId(e[s])]?"Array"!==a.util.type(e[s])||r[a.util.objId(e[s])]||(r[a.util.objId(e[s])]=!0,a.languages.DFS(e[s],t,s,r)):(r[a.util.objId(e[s])]=!0,a.languages.DFS(e[s],t,null,r)))}},plugins:{},highlightAll:function(e,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",n);for(var r,s=n.elements||document.querySelectorAll(n.selector),i=0;r=s[i++];)a.highlightElement(r,!0===e,n.callback)},highlightElement:function(t,n,r){for(var s,i,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(s=(l.className.match(e)||[,""])[1].toLowerCase(),i=a.languages[s]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+s);var o={element:t,language:s,grammar:i,code:t.textContent};if(a.hooks.run("before-sanity-check",o),o.code&&o.grammar)if(a.hooks.run("before-highlight",o),n&&_self.Worker){var u=new Worker(a.filename);u.onmessage=function(e){o.highlightedCode=e.data,a.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,r&&r.call(o.element),a.hooks.run("after-highlight",o),a.hooks.run("complete",o)},u.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else o.highlightedCode=a.highlight(o.code,o.grammar,o.language),a.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,r&&r.call(t),a.hooks.run("after-highlight",o),a.hooks.run("complete",o);else a.hooks.run("complete",o)},highlight:function(e,t,r){var s=a.tokenize(e,t);return n.stringify(a.util.encode(s),r)},tokenize:function(e,t){var n=a.Token,r=[e],s=t.rest;if(s){for(var i in s)t[i]=s[i];delete t.rest}e:for(var i in t)if(t.hasOwnProperty(i)&&t[i]){var l=t[i];l="Array"===a.util.type(l)?l:[l];for(var o=0;o<l.length;++o){var u=l[o],c=u.inside,g=!!u.lookbehind,m=!!u.greedy,d=0,p=u.alias;if(m&&!u.pattern.global){var h=u.pattern.toString().match(/[imuy]*$/)[0];u.pattern=RegExp(u.pattern.source,h+"g")}u=u.pattern||u;for(var f=0,v=0;f<r.length;v+=(r[f].matchedStr||r[f]).length,++f){var y=r[f];if(r.length>e.length)break e;if(!(y instanceof n)){u.lastIndex=0;var b=u.exec(y),k=1;if(!b&&m&&f!=r.length-1){if(u.lastIndex=v,!(b=u.exec(e)))break;for(var w=b.index+(g?b[1].length:0),E=b.index+b[0].length,P=f,S=v,A=r.length;A>P&&E>S;++P)S+=(r[P].matchedStr||r[P]).length,w>=S&&(++f,v=S);if(r[f]instanceof n||r[P-1].greedy)continue;k=P-f,y=e.slice(v,S),b.index-=v}if(b){g&&(d=b[1].length);var E=(w=b.index+d)+(b=b[0].slice(d)).length,L=y.slice(0,w),_=y.slice(E),N=[f,k];L&&N.push(L);var x=new n(i,c?a.tokenize(b,c):b,p,b,m);N.push(x),_&&N.push(_),Array.prototype.splice.apply(r,N)}}}}}return r},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,s=0;r=n[s++];)r(t)}}},n=a.Token=function(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.matchedStr=n||null,this.greedy=!!r};if(n.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(a){return n.stringify(a,t,e)}).join("");var s={type:e.type,content:n.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if("comment"==s.type&&(s.attributes.spellcheck="true"),e.alias){var i="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(s.classes,i)}a.hooks.run("wrap",s);var l="";for(var o in s.attributes)l+=(l?" ":"")+o+'="'+(s.attributes[o]||"")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+(l?" "+l:"")+">"+s.content+"</"+s.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,r=t.code,s=t.immediateClose;_self.postMessage(a.highlight(r,a.languages[n],n)),s&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(a.filename=r.src,document.addEventListener&&!r.hasAttribute("data-manual")&&("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),function(e){e.languages.sass=e.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,lookbehind:!0}}),e.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,inside:{atrule:/(?:@[\w-]+|[+=])/m}}}),delete e.languages.sass.atrule;var t=/((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i,a=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,{pattern:/(\s+)-(?=\s)/,lookbehind:!0}];e.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,inside:{punctuation:/:/,variable:t,operator:a}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:t,operator:a,important:e.languages.sass.important}}}),delete e.languages.sass.property,delete e.languages.sass.important,delete e.languages.sass.selector,e.languages.insertBefore("sass","punctuation",{selector:{pattern:/([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,lookbehind:!0}})}(Prism),hideElements(document.querySelectorAll(".tabgroup > div")),showElements(document.querySelectorAll(".tabgroup > div:first-of-type"));var tabs=document.querySelectorAll(".tabs a");Array.prototype.forEach.call(tabs,function(e){e.addEventListener("click",function(e){e.preventDefault();var t=e.target,a=t.closest(".tabs").dataset.tabgroup,n=t.closest(".tabs").querySelectorAll("a");Array.prototype.forEach.call(n,function(e){e.classList.remove("active")}),t.classList.add("active"),hideElements(document.querySelectorAll("#"+a+" > div")),showElement(document.querySelector(t.getAttribute("href")))})});