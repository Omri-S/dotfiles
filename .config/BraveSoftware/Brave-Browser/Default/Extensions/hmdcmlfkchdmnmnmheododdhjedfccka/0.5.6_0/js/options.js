!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t){let n=null;var r;function o(){!function(){for(setting in n.bg.settings){let e=document.getElementById(setting);e&&(e.checked=n.bg.settings[setting])}document.getElementById("dropperCursor"+n.bg.settings.dropperCursor).checked=!0}(),document.getElementById("saveButton").onclick=()=>{!function(){for(setting in n.bg.settings){let e=document.getElementById(setting);e&&(n.bg.settings[setting]=e.checked)}n.bg.settings.dropperCursor=document.getElementById("dropperCursorcrosshair").checked?"crosshair":"default",n.bg.saveSettings();let e=document.getElementById("status");e.innerHTML="Options Saved.",setTimeout((function(){e.innerHTML=""}),750)}()}}r=function(){chrome.runtime.getBackgroundPage(e=>{!function(e){n=e,void 0===n.bg.version||n.bg.version<11?(chrome.runtime.sendMessage({type:"reload-background"}),setTimeout(o,1e3)):o()}(e)}),$("#donate-bitcoin").coinTipper({type:"donate",currency:"bitcoin",iso:"BTC",address:"19HekXcETbG8VWdywbEkKxzxp4fFm5YCUc",label:"Eye Dropper"}),document.getElementById("shortcutPageLink").onclick=()=>{chrome.tabs.create({url:"chrome://extensions/shortcuts"})}},"loading"!=document.readyState?r():document.addEventListener("DOMContentLoaded",r)}]);