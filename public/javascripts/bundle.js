!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){!function(t){"use strict";var n=function(){return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:t,mimeType:function(e){var n=t(e).toLowerCase();return(r="application/font-woff",{woff:r,woff2:r,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[n]||"";var r},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise(function(t){e.toBlob(t)}):function(e){return new Promise(function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);t(new Blob([o],{type:"image/png"}))})}(e)},resolveUrl:function(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href},getAndEncode:function(e){var t=3e4;c.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime());return new Promise(function(n){var r,o=new XMLHttpRequest;if(o.onreadystatechange=function(){if(4!==o.readyState)return;if(200!==o.status)return void(r?n(r):u("cannot fetch resource: "+e+", status: "+o.status));var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];n(e)},t.readAsDataURL(o.response)},o.ontimeout=function(){r?n(r):u("timeout of "+t+"ms occured while fetching resource: "+e)},o.responseType="blob",o.timeout=t,o.open("GET",e,!0),o.send(),c.impl.options.imagePlaceholder){var i=c.impl.options.imagePlaceholder.split(/,/);i&&i[1]&&(r=i[1])}function u(e){console.error(e),n("")}})},uid:(e=0,function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+e++}),delay:function(e){return function(t){return new Promise(function(n){setTimeout(function(){n(t)},e)})}},asArray:function(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return new Promise(function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=n,r.src=e})},width:function(e){var t=n(e,"border-left-width"),r=n(e,"border-right-width");return e.scrollWidth+t+r},height:function(e){var t=n(e,"border-top-width"),r=n(e,"border-bottom-width");return e.scrollHeight+t+r}};var e;function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function n(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}}(),r=function(){var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(e,n,i){return t(e)?Promise.resolve(e).then(r).then(function(t){var r=Promise.resolve(e);return t.forEach(function(e){r=r.then(function(t){return o(t,e,n,i)})}),r}):Promise.resolve(e)},shouldProcess:t,impl:{readUrls:r,inline:o}};function t(t){return-1!==t.search(e)}function r(t){for(var r,o=[];null!==(r=e.exec(t));)o.push(r[1]);return o.filter(function(e){return!n.isDataUrl(e)})}function o(e,t,r,o){return Promise.resolve(t).then(function(e){return r?n.resolveUrl(e,r):e}).then(o||n.getAndEncode).then(function(e){return n.dataAsUrl(e,n.mimeType(t))}).then(function(r){return e.replace(function(e){return new RegExp("(url\\(['\"]?)("+n.escape(e)+")(['\"]?\\))","g")}(t),"$1"+r+"$3")})}}(),o=function(){return{resolveAll:function(){return e(document).then(function(e){return Promise.all(e.map(function(e){return e.resolve()}))}).then(function(e){return e.join("\n")})},impl:{readAll:e}};function e(){return Promise.resolve(n.asArray(document.styleSheets)).then(function(e){var t=[];return e.forEach(function(e){try{n.asArray(e.cssRules||[]).forEach(t.push.bind(t))}catch(t){console.log("Error while reading CSS rules from "+e.href,t.toString())}}),t}).then(function(e){return e.filter(function(e){return e.type===CSSRule.FONT_FACE_RULE}).filter(function(e){return r.shouldProcess(e.style.getPropertyValue("src"))})}).then(function(t){return t.map(e)});function e(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return r.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}}}(),i=function(){return{inlineAll:function t(o){if(!(o instanceof Element))return Promise.resolve(o);return function(e){var t=e.style.getPropertyValue("background");return t?r.inlineAll(t).then(function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))}).then(function(){return e}):Promise.resolve(e)}(o).then(function(){return o instanceof HTMLImageElement?e(o).inline():Promise.all(n.asArray(o.childNodes).map(function(e){return t(e)}))})},impl:{newImage:e}};function e(e){return{inline:function(t){return n.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(t||n.getAndEncode).then(function(t){return n.dataAsUrl(t,n.mimeType(e.src))}).then(function(t){return new Promise(function(n,r){e.onload=n,e.onerror=r,e.src=t})})}}}}(),u={imagePlaceholder:void 0,cacheBust:!1},c={toSvg:a,toPng:function(e,t){return s(e,t||{}).then(function(e){return e.toDataURL()})},toJpeg:function(e,t){return s(e,t=t||{}).then(function(e){return e.toDataURL("image/jpeg",t.quality||1)})},toBlob:function(e,t){return s(e,t||{}).then(n.canvasToBlob)},toPixelData:function(e,t){return s(e,t||{}).then(function(t){return t.getContext("2d").getImageData(0,0,n.width(e),n.height(e)).data})},impl:{fontFaces:o,images:i,util:n,inliner:r,options:{}}};function a(e,t){return function(e){void 0===e.imagePlaceholder?c.impl.options.imagePlaceholder=u.imagePlaceholder:c.impl.options.imagePlaceholder=e.imagePlaceholder;void 0===e.cacheBust?c.impl.options.cacheBust=u.cacheBust:c.impl.options.cacheBust=e.cacheBust}(t=t||{}),Promise.resolve(e).then(function(e){return function(e,t,r){if(!r&&t&&!t(e))return Promise.resolve();return Promise.resolve(e).then(function(e){return e instanceof HTMLCanvasElement?n.makeImage(e.toDataURL()):e.cloneNode(!1)}).then(function(r){return function(e,t,r){var o=e.childNodes;return 0===o.length?Promise.resolve(t):function(e,t,n){var r=Promise.resolve();return t.forEach(function(t){r=r.then(function(){return l(t,n)}).then(function(t){t&&e.appendChild(t)})}),r}(t,n.asArray(o),r).then(function(){return t})}(e,r,t)}).then(function(t){return function(e,t){return t instanceof Element?Promise.resolve().then(function(){var r,o;r=window.getComputedStyle(e),o=t.style,r.cssText?o.cssText=r.cssText:function(e,t){n.asArray(e).forEach(function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))})}(r,o)}).then(function(){[":before",":after"].forEach(function(r){!function(r){var o=window.getComputedStyle(e,r),i=o.getPropertyValue("content");if(""!==i&&"none"!==i){var u=n.uid();t.className=t.className+" "+u;var c=document.createElement("style");c.appendChild(function(e,t,r){var o="."+e+":"+t,i=r.cssText?function(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}(r):function(e){return n.asArray(e).map(function(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}).join("; ")+";"}(r);return document.createTextNode(o+"{"+i+"}")}(u,r,o)),t.appendChild(c)}}(r)})}).then(function(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}).then(function(){t instanceof SVGElement&&(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t instanceof SVGRectElement&&["width","height"].forEach(function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)}))}).then(function(){return t}):t}(e,t)})}(e,t.filter,!0)}).then(f).then(h).then(function(e){t.bgcolor&&(e.style.backgroundColor=t.bgcolor);t.width&&(e.style.width=t.width+"px");t.height&&(e.style.height=t.height+"px");t.style&&Object.keys(t.style).forEach(function(n){e.style[n]=t.style[n]});return e}).then(function(r){return function(e,t,r){return Promise.resolve(e).then(function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)}).then(n.escapeXhtml).then(function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"}).then(function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+r+'">'+e+"</svg>"}).then(function(e){return"data:image/svg+xml;charset=utf-8,"+e})}(r,t.width||n.width(e),t.height||n.height(e))})}function s(e,t){return a(e,t).then(n.makeImage).then(n.delay(100)).then(function(r){var o=function(e){var r=document.createElement("canvas");if(r.width=t.width||n.width(e),r.height=t.height||n.height(e),t.bgcolor){var o=r.getContext("2d");o.fillStyle=t.bgcolor,o.fillRect(0,0,r.width,r.height)}return r}(e);return o.getContext("2d").drawImage(r,0,0),o})}function l(e,t,r){if(!r&&t&&!t(e))return Promise.resolve();return Promise.resolve(e).then(o).then(function(n){return i(e,n,t)}).then(function(t){return u(e,t)});function o(e){return e instanceof HTMLCanvasElement?n.makeImage(e.toDataURL()):e.cloneNode(!1)}function i(e,t,r){var o=e.childNodes;return 0===o.length?Promise.resolve(t):function(e,t,n){var r=Promise.resolve();return t.forEach(function(t){r=r.then(function(){return l(t,n)}).then(function(t){t&&e.appendChild(t)})}),r}(t,n.asArray(o),r).then(function(){return t});function i(e,t,n){var r=Promise.resolve();return t.forEach(function(t){r=r.then(function(){return l(t,n)}).then(function(t){t&&e.appendChild(t)})}),r}}function u(e,t){return t instanceof Element?Promise.resolve().then(function(){!function(e,t){e.cssText?t.cssText=e.cssText:function(e,t){n.asArray(e).forEach(function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))})}(e,t)}(window.getComputedStyle(e),t.style)}).then(function(){[":before",":after"].forEach(function(r){!function(r){var o=window.getComputedStyle(e,r),i=o.getPropertyValue("content");if(""===i||"none"===i)return;var u=n.uid();t.className=t.className+" "+u;var c=document.createElement("style");c.appendChild(function(e,t,r){var o="."+e+":"+t,i=r.cssText?function(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}(r):function(e){return n.asArray(e).map(function(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}).join("; ")+";"}(r);return document.createTextNode(o+"{"+i+"}")}(u,r,o)),t.appendChild(c)}(r)})}).then(function(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value);e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}).then(function(){if(!(t instanceof SVGElement))return;if(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(t instanceof SVGRectElement))return;["width","height"].forEach(function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)})}).then(function(){return t}):t;function r(){function r(e,t){if(e.cssText)t.cssText=e.cssText;else r(e,t);function r(e,t){n.asArray(e).forEach(function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))})}}r(window.getComputedStyle(e),t.style)}function o(){function r(r){var o=window.getComputedStyle(e,r),i=o.getPropertyValue("content");if(i===""||i==="none")return;var u=n.uid();t.className=t.className+" "+u;var c=document.createElement("style");function a(e,t,r){var o="."+e+":"+t,i=r.cssText?u(r):c(r);return document.createTextNode(o+"{"+i+"}");function u(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function c(e){return n.asArray(e).map(t).join("; ")+";";function t(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}}}c.appendChild(a(u,r,o)),t.appendChild(c)}[":before",":after"].forEach(function(e){r(e)})}function i(){if(e instanceof HTMLTextAreaElement)t.innerHTML=e.value;if(e instanceof HTMLInputElement)t.setAttribute("value",e.value)}function u(){if(!(t instanceof SVGElement))return;if(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(t instanceof SVGRectElement))return;["width","height"].forEach(function(e){var n=t.getAttribute(e);if(!n)return;t.style.setProperty(e,n)})}}}function f(e){return o.resolveAll().then(function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e})}function h(e){return i.inlineAll(e).then(function(){return e})}e.exports=c}()},function(e,t,n){!function(){var e=n(0),t=document.getElementById("to-image"),r=document.getElementById("result-image-div");t.onclick=function(){var t=document.getElementById("result-content");e.toPng(t,{quality:.95}).then(function(e){var t=new Image;t.src=e,r.appendChild(t)})};var o,i=!0;function u(){o.readyState==XMLHttpRequest.DONE&&200==o.status&&console.log(o.responseText)}document.getElementById("stts").onclick=function(){(o=new XMLHttpRequest).open("POST","/users/transform"),o.setRequestHeader("Content-Type","application/json"),o.send(JSON.stringify({isT:i,text:document.getElementById("poem-text").innerText})),o.onreadystatechange=u}}()}]);