!function(e){var t={};function o(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){let o=null,l={},r={},a=null,s=null,c=null,i=null,d=null,u=null,m=null,p=null;var g;function y(){let e=document.getElementById("colors-palette-change");if(o.bg.plus()){e.style.display="inline",u.innerHTML='<span class="small-caps b">Plus</span>',u.className="ed-external link hint--right hint--no-animate block pv1 ph2 mt1 db silver no-underline";let t="You unlocked Plus. Thanks!";"free"===o.bg.plus()&&(t="Unlocked for free. Want to donate for future development?"),u.setAttribute("aria-label",t)}else x(o.bg.defaultPalette),e.style.display="none";u.style.display="block"}function f(){for(let e of document.getElementsByClassName("ed-external"))e.dataset.url&&(e.onclick=()=>{chrome.tabs.create({url:e.dataset.url})})}function b(){chrome.tabs.getSelected(null,e=>{!function(e){let t=!0,n="";void 0===e.url||0==e.url.indexOf("chrome")?(n="Chrome doesn't allow <i>extensions</i> to play with special Chrome pages like this one. <pre>chrome://...</pre>",t=!1):0==e.url.indexOf("https://chrome.google.com/webstore")?(n="Chrome doesn't allow its <i>extensions</i> to play on Web Store.",t=!1):0==e.url.indexOf("file")&&(n="Chrome doesn't allow its <i>extensions</i> to play with your local pages.",t=!1);let l=document.getElementById("pick");if(t)l.onclick=()=>{o.bg.useTab(e),o.bg.activate(),window.close()};else{let e=document.getElementById("pick-message");e.innerHTML=`<h3 class="normal">&#128542; Whoops. Can't pick from this page</h3><p>${n}</p>`,e.style.display="block",l.style.display="none"}}(e)}),l={current:document.getElementById("box-current"),new:document.getElementById("box-new")},h(),v(),document.getElementById("colors-history-clear").onclick=()=>{mscConfirm({title:"Wipe It?",subtitle:`Really clear palette ${o.bg.getPaletteName()}?`,okText:"Yes, Wipe It!",cancelText:"No",onOk:()=>{chrome.runtime.sendMessage({type:"clear-history"},()=>{v(),h()})}})},document.getElementById("colors-history-export").onclick=()=>{!function(){let e=o.bg.getPalette().colors,t="";if(o.bg.plus()){t+='"RGB Hex","Date","Source","RGB Hex3","HSL","RGB","HTML Keyword"',t+="\n";for(let n of e){let e="function"==typeof n.t?new Date(n.t()):new Date(n.t),l=`${e.getFullYear()}-${("0"+(e.getMonth()+1)).slice(-2)}-${("0"+e.getDate()).slice(-2)} ${("0"+e.getHours()).slice(-2)}:${("0"+e.getMinutes()).slice(-2)}:${("0"+e.getSeconds()).slice(-2)}`;t+=`"${n.h}","${l}","${o.bg.color_sources[n.s]}"`,n=pusher.color(n.h);let r=[n.hex3(),n.html("hsl"),n.html("rgb"),n.html("keyword")];for(let e of r)t+=`,"${e}"`;t+="\n"}}else{t+='"RGB Hex","RGB Hex3","HSL","RGB","HTML Keyword"',t+="\n";for(let o of e){let e="function"==typeof o.t?new Date(o.t()):new Date(o.t);e.getFullYear(),("0"+(e.getMonth()+1)).slice(-2),("0"+e.getDate()).slice(-2),("0"+e.getHours()).slice(-2),("0"+e.getMinutes()).slice(-2),("0"+e.getSeconds()).slice(-2),t+=`"${o.h}"`,o=pusher.color(o.h);let n=[o.hex3(),o.html("hsl"),o.html("rgb"),o.html("keyword")];for(let e of n)t+=`,"${e}"`;t+="\n"}}let n="data:text/csv;base64,"+btoa(t),l=document.createElement("a");l.setAttribute("href",n),l.setAttribute("download","export.csv"),l.click()}()},function(){let e=document.getElementById("colors-palette-change");i=document.getElementById("colors-palette"),d=document.getElementById("palette-name"),e.onclick=()=>{i.style.display="none"===i.style.display?"inline-block":"none"},w()}(),y()}function h(){E("current",o.bg.getColor()),E("new",o.bg.getColor())}function k(e){mscConfirm({title:`Destroy Palette '${e}'?`,subtitle:`Really destroy palette ${e}?`,okText:"Yes, Destroy It!",cancelText:"No",onOk:()=>{let t=e===o.bg.getPaletteName();o.bg.destroyPalette(e),t?x("default"):w()}})}function v(){let e=document.getElementById("colors-history"),t=document.getElementById("colors-history-instructions"),l=(document.getElementById("colors-history-toolbar"),document.getElementsByClassName("eb-history-tool-noempty")),r="",a=o.bg.getPalette();for(let e of a.colors)r+=C(e.h);e.innerHTML=r;for(let e of document.getElementsByClassName("colors-history-square"))e.onmouseover=()=>{E("new",e.dataset.color)},e.onclick=()=>{E("current",e.dataset.color),o.bg.setColor(e.dataset.color,!1),T(e.dataset.color)};if(a.colors.length>0)for(n of(t.innerHTML="Hover over squares to preview.",l))n.style.display="";else for(n of(t.innerHTML="History is empty, try to pick some colors first.",l))n.style.display="none";e.onmouseenter=()=>{t.innerHTML="Click on square to select and copy to clipboard."},e.onmouseleave=()=>{t.innerHTML="Hover over squares to preview.."}}function w(){let e='<a href="#" class="dib link dim ph2 ml1 white bg-dark-green br1 b--dark-green mb1" id="new-palette">new</a>',t=o.bg.getPaletteName();d.innerHTML=t,d.dataset.palette=t;for(let t of o.bg.getPaletteNames()){e+=`<span class="nowrap dib"><a href="#" class="ed-palette dib link dim pl2 pr1 ml1 white bg-light-purple br1 b--light-purple mb1" data-palette="${t}">${t}`;let n=o.bg.getPalette(t).colors.length;n>0&&(e+=`<span class="dib pink pl1">${n}</span>`),"default"!==t&&(e+=`\n                <a class="ed-palette-destroy link dib w1 hint--top hint--no-animate hint--rounded" aria-label="Destroy Palette ${t}!" data-palette="${t}" href="#">\n                <svg class="dim v-mid" viewBox="0 0 1792 1792" style="fill:gray;width:14px;">\n                <use xlink:href="/img/icons.svg#fa-ban">\n                </svg>\n                </a>`),e+="</a></span>"}i.innerHTML=e;for(let e of document.getElementsByClassName("ed-palette"))e.onclick=()=>{let o=e.dataset.palette;o!==t&&x(o)};for(let e of document.getElementsByClassName("ed-palette-destroy"))e.onclick=()=>{k(e.dataset.palette)};document.getElementById("new-palette").onclick=()=>{mscPrompt({title:"Name the Color Palette",okText:"Create Palette",cancelText:"Cancel",placeholder:"palette",onOk:e=>{!function(e){null!==e&&x(o.bg.createPalette(e).name)}(e)}})}}function x(e){o.bg.changePalette(e),w(),v()}function B(e){"button-about"===e?(a.style.display="none",s.style.display="none"):(a.style.display="block",s.style.display="block"),"tab-cp"!==e&&m&&m.destroy();for(let t in r)t.match(/-active$/)&&t!==e+"-active"||t.match(/-link$/)&&t===e+"-link"?r[t].style.display="none":r[t].style.display="inline-block";!function(e){let t=!1;for(let o of document.getElementsByClassName("content-page"))o.id===e+"-content"?(o.style.display="block",t=!0):o.style.display="none";if(t)"tab-cp"===e&&$();else{let t=new XMLHttpRequest;t.open("GET",`/${e}.html`),t.onload=()=>{t.status>=200&&t.status<400&&(c.insertAdjacentHTML("afterend",t.responseText),f(),"tab-cp"===e&&function(){let e=document.createElement("script");e.onload=()=>{p=document.getElementById("colorpicker-input"),p.value=o.bg.getColor(),$()},e.src="/inc/color-picker/color-picker.js",document.head.appendChild(e),document.getElementById("colorpicker-select").onclick=()=>{let e=m.target.value.toLowerCase();E("current",e),o.bg.setColor(e,!0,2),v()}}())},t.send()}}(e)}function E(e,t){if(l[e]){let o=[(t=pusher.color(t)).hex6(),t.hex3(),t.html("keyword"),t.html("hsl"),t.html("rgb")],n="";for(let e of o)n+=`<span class="mr1 bg-white br1 ph1 mb1 dib"><code>${e}</code></span>`;l[e].innerHTML=n,l[e].style="background: "+t.hex6()}}function C(e){return`<div class="fl dib dim mr1 br1 mb1 ba b--gray colors-history-square" data-color="${e}" style="background-color: ${e}">&nbsp;</div>`}function $(){function e(e){E("new","#"+e),m.target.value="#"+e}function t(){try{let e=m.target.value.toLowerCase();E("new",e),m.set(e)}catch(e){}}m=new CP(p),m.on("start",e),m.on("drag",e),m.on("enter",()=>{document.getElementById("colorpicker").appendChild(m.picker)}),m.target.onkeyup=t,m.target.oncut=t,m.target.onpaste=t,m.target.oninput=t,m.enter()}function T(e){m&&(m.target.value=e,m.set(e))}g=function(){(function(){for(let e of document.getElementsByClassName("ed-tab"))e.onclick=()=>{B(e.id)};for(let e of document.getElementsByClassName("ed-tab-in"))r[e.id]=e})(),f(),chrome.runtime.getBackgroundPage(e=>{!function(e){o=e,void 0===o.bg.version||o.bg.version<17?(chrome.runtime.sendMessage({type:"reload-background"}),setTimeout(b,1e3)):b()}(e)}),c=document.getElementById("content"),a=document.getElementById("color-boxes"),s=document.getElementById("color-history"),u=document.getElementById("plus-badge"),u.style.display="none"},"loading"!=document.readyState?g():document.addEventListener("DOMContentLoaded",g)}]);