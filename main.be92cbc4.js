parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SuC1":[function(require,module,exports) {
console.log("hi there");var e=new AudioContext,n=document.querySelector(".navMain"),t=document.querySelector(".canHazBurger");t.addEventListener("click",function(e){n.classList.toggle("hidden")});var c=[{note:"C",key:"Z",frequency:261.626,active:!1},{note:"Db",key:"S",frequency:277.183,active:!1},{note:"D",key:"X",frequency:293.665,active:!1},{note:"Eb",key:"D",frequency:311.127,active:!1},{note:"E",key:"C",frequency:329.628,active:!1},{note:"F",key:"V",frequency:349.228,active:!1},{note:"Gb",key:"G",frequency:369.994,active:!1},{note:"Ab",key:"H",frequency:391.995,active:!1},{note:"A",key:"N",frequency:440,active:!1},{note:"Bb",key:"J",frequency:466.164,active:!1},{note:"B",key:"M",frequency:493.883,active:!1}];function o(e){return c.find(function(n){return"Key".concat(n.key)===e})}function a(){c.forEach(function(e){document.querySelector('[data-note="'.concat(e.note,'"]')).classList.toggle("active",e.active),null!=e.oscillator&&(e.oscillator.stop(),e.oscillator.disconnect())});var e=c.filter(function(e){return e.active}),n=1/e.length;e.forEach(function(e){i(e,n)})}function i(n,t){e.createGain().gain.value=t;var c=e.createOscillator();c.frequency.value=n.frequency,c.type="sine",c.connect(e.destination),c.start(),n.oscillator=c}document.addEventListener("keydown",function(e){if(!e.repeat){var n=o(e.code);null!=n&&(n.active=!0,a())}}),document.addEventListener("keyup",function(e){var n=o(e.code);null!=n&&(n.active=!1,a())});
},{}],"wzVr":[function(require,module,exports) {
var e=document.getElementById("quiz-form"),t=document.querySelectorAll(".answer"),c=document.querySelectorAll(".question-item"),r=document.getElementById("alert");function s(){var e=0;t.forEach(function(t){if(t.checked){var c=t.closest(".question-item");"true"===t.value?(c.classList.add("correct"),c.classList.remove("incorrect"),e++):(c.classList.remove("correct"),c.classList.add("incorrect"),e--)}}),3===e&&(r.classList.add("active"),setTimeout(function(){return r.classList.remove("active")},1500))}e.addEventListener("submit",function(e){e.preventDefault(),c.forEach(function(e){e.classList.add("incorrect")}),s()});
},{}],"d6sW":[function(require,module,exports) {
"use strict";require("./piano.js"),require("./quiz.js");
},{"./piano.js":"SuC1","./quiz.js":"wzVr"}]},{},["d6sW"], null)