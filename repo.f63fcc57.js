!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=138)}({138:function(e,r){function t(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){c=!0,u=e},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw u}}}}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}fetch("https://api.github.com/users/Wirus006/repos?sort=created").then((function(e){return e.json()})).then((function(e){var r,n=t(e);try{for(n.s();!(r=n.n()).done;){var o=r.value,i=o.name,u=o.html_url,a=o.description,c=o.forks_count,l=document.querySelector(".repositories--js");null==a&&(a="Brak opisu.");var s='\n            <li class="repositories__item">\n            <article class="repositories__about">\n                <h2 class="repositories__title"><a class="repositories__link" href="'.concat(u,'">').concat(i,'</a></h2>\n                <div class="repositories__div">\n                    <p class="repositories__describe">\n                        ').concat(a,'\n                    </p>\n                    <p class="repositories__forks">forks: ').concat(c,"</p>\n                </div>\n            </article>\n            </li>\n            ");l.innerHTML+=s}}catch(e){n.e(e)}finally{n.f()}})).catch((function(e){console.log("nie udało się pobrać danych: ".concat(e))}))}});