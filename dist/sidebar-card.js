/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,o=null)=>{for(;e!==o;){const o=e.nextSibling;t.removeChild(e),e=o}},o=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${o}--\x3e`,s=new RegExp(`${o}|${i}`),n="$lit$";class r{constructor(t,e){this.parts=[],this.element=e;const i=[],r=[],l=document.createTreeWalker(e.content,133,null,!1);let h=0,u=-1,p=0;const{strings:m,values:{length:g}}=t;for(;p<g;){const t=l.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:o}=e;let i=0;for(let t=0;t<o;t++)a(e[t].name,n)&&i++;for(;i-- >0;){const e=m[p],o=c.exec(e)[2],i=o.toLowerCase()+n,r=t.getAttribute(i);t.removeAttribute(i);const a=r.split(s);this.parts.push({type:"attribute",index:u,name:o,strings:a}),p+=a.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),l.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(o)>=0){const o=t.parentNode,r=e.split(s),l=r.length-1;for(let e=0;e<l;e++){let i,s=r[e];if(""===s)i=d();else{const t=c.exec(s);null!==t&&a(t[2],n)&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-n.length)+t[3]),i=document.createTextNode(s)}o.insertBefore(i,t),this.parts.push({type:"node",index:++u})}""===r[l]?(o.insertBefore(d(),t),i.push(t)):t.data=r[l],p+=l}}else if(8===t.nodeType)if(t.data===o){const e=t.parentNode;null!==t.previousSibling&&u!==h||(u++,e.insertBefore(d(),t)),h=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(i.push(t),u--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(o,e+1));)this.parts.push({type:"node",index:-1}),p++}}else l.currentNode=r.pop()}for(const t of i)t.parentNode.removeChild(t)}}const a=(t,e)=>{const o=t.length-e.length;return o>=0&&t.slice(o)===e},l=t=>-1!==t.index,d=()=>document.createComment(""),c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:o},parts:i}=t,s=document.createTreeWalker(o,133,null,!1);let n=p(i),r=i[n],a=-1,l=0;const d=[];let c=null;for(;s.nextNode();){a++;const t=s.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(d.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==r&&r.index===a;)r.index=null!==c?-1:r.index-l,n=p(i,n),r=i[n]}d.forEach((t=>t.parentNode.removeChild(t)))}const u=t=>{let e=11===t.nodeType?0:1;const o=document.createTreeWalker(t,133,null,!1);for(;o.nextNode();)e++;return e},p=(t,e=-1)=>{for(let o=e+1;o<t.length;o++){const e=t[o];if(l(e))return o}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,g=t=>"function"==typeof t&&m.has(t),f={},y={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class w{constructor(t,e,o){this.__parts=[],this.template=t,this.processor=e,this.options=o}update(t){let e=0;for(const o of this.__parts)void 0!==o&&o.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),o=[],i=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let n,r=0,a=0,d=s.nextNode();for(;r<i.length;)if(n=i[r],l(n)){for(;a<n.index;)a++,"TEMPLATE"===d.nodeName&&(o.push(d),s.currentNode=d.content),null===(d=s.nextNode())&&(s.currentNode=o.pop(),d=s.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(d.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,n.name,n.strings,this.options));r++}else this.__parts.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),S=` ${o} `;class v{constructor(t,e,o,i){this.strings=t,this.values=e,this.type=o,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let r=0;r<t;r++){const t=this.strings[r],a=t.lastIndexOf("\x3c!--");s=(a>-1||s)&&-1===t.indexOf("--\x3e",a+1);const l=c.exec(t);e+=null===l?t+(s?S:i):t.substr(0,l.index)+l[1]+l[2]+n+l[3]+o}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==b&&(e=b.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class C{constructor(t,e,o){this.dirty=!0,this.element=t,this.name=e,this.strings=o,this.parts=[];for(let t=0;t<o.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new k(this)}_getValue(){const t=this.strings,e=t.length-1,o=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=o[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!x(t))return t}let i="";for(let s=0;s<e;s++){i+=t[s];const e=o[s];if(void 0!==e){const t=e.value;if(_(t)||!x(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||_(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class T{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(d()),this.endNode=t.appendChild(d())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=d()),t.__insert(this.endNode=d())}insertAfterPart(t){t.__insert(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(_(t)?t!==this.value&&this.__commitText(t):t instanceof v?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):x(t)?this.__commitIterable(t):t===y?(this.value=y,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,o="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=o:this.__commitNode(document.createTextNode(o)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof w&&this.value.template===e)this.value.update(t.values);else{const o=new w(e,t.processor,this.options),i=o._clone();o.update(t.values),this.__commitNode(i),this.value=o}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let o,i=0;for(const s of t)o=e[i],void 0===o&&(o=new T(this.options),e.push(o),0===i?o.appendIntoPart(this):o.insertAfterPart(e[i-1])),o.setValue(s),o.commit(),i++;i<e.length&&(e.length=i,this.clear(o&&o.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,o){if(this.value=void 0,this.__pendingValue=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=o}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class E extends C{constructor(t,e,o){super(t,e,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new R(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class R extends k{}let q=!1;(()=>{try{const t={get capture(){return q=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class M{constructor(t,e,o){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=o,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,o=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=N(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const N=t=>t&&(q?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function A(t){let e=$.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},$.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(o);return i=e.keyString.get(s),void 0===i&&(i=new r(t,t.getTemplateElement()),e.keyString.set(s,i)),e.stringsArray.set(t.strings,i),i}const $=new Map,O=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const V=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,o,i){const s=e[0];if("."===s){return new E(t,e.slice(1),o).parts}if("@"===s)return[new M(t,e.slice(1),i.eventContext)];if("?"===s)return[new P(t,e.slice(1),o)];return new C(t,e,o).parts}handleTextExpression(t){return new T(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const U=(t,...e)=>new v(t,e,"html",V)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,H=(t,e)=>`${t}--${e}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),I=!1);const F=t=>e=>{const i=H(e.type,t);let s=$.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},$.set(i,s));let n=s.stringsArray.get(e.strings);if(void 0!==n)return n;const a=e.strings.join(o);if(n=s.keyString.get(a),void 0===n){const o=e.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(o,t),n=new r(e,o),s.keyString.set(a,n)}return s.stringsArray.set(e.strings,n),n},L=["html","svg"],z=new Set,W=(t,e,o)=>{z.add(t);const i=o?o.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:n}=s;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,t);const r=document.createElement("style");for(let t=0;t<n;t++){const e=s[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{L.forEach((e=>{const o=$.get(H(e,t));void 0!==o&&o.keyString.forEach((t=>{const{element:{content:e}}=t,o=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{o.add(t)})),h(t,o)}))}))})(t);const a=i.content;o?function(t,e,o=null){const{element:{content:i},parts:s}=t;if(null==o)return void i.appendChild(e);const n=document.createTreeWalker(i,133,null,!1);let r=p(s),a=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===o&&(a=u(e),o.parentNode.insertBefore(e,o));-1!==r&&s[r].index===l;){if(a>0){for(;-1!==r;)s[r].index+=a,r=p(s,r);return}r=p(s,r)}}(o,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(o){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),h(o,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const j={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},D=(t,e)=>e!==t&&(e==e||t==t),B={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:D},J="finalized";class X extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,o)=>{const i=this._attributeNameForProperty(o,e);void 0!==i&&(this._attributeToPropertyMap.set(i,o),t.push(i))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=B){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const o="symbol"==typeof t?Symbol():`__${t}`,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this.requestUpdateInternal(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||B}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(J)||t.finalize(),this[J]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const o of e)this.createProperty(o,t[o])}}static _attributeNameForProperty(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,o=D){return o(t,e)}static _propertyValueFromAttribute(t,e){const o=e.type,i=e.converter||j,s="function"==typeof i?i:i.fromAttribute;return s?s(t,o):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const o=e.type,i=e.converter;return(i&&i.toAttribute||j.toAttribute)(t,o)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,o){e!==o&&this._attributeToProperty(t,o)}_propertyToAttribute(t,e,o=B){const i=this.constructor,s=i._attributeNameForProperty(t,o);if(void 0!==s){const t=i._propertyValueToAttribute(e,o);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const o=this.constructor,i=o._attributeToPropertyMap.get(t);if(void 0!==i){const t=o.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=o._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,o){let i=!0;if(void 0!==t){const s=this.constructor;o=o||s.getPropertyOptions(t),s._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}X[J]=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Y=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class K{constructor(t,e){if(e!==G)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Y?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Q=(t,...e)=>{const o=e.reduce(((e,o,i)=>e+(t=>{if(t instanceof K)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[i+1]),t[0]);return new K(o,G)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const Z={};class tt extends X{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,o)=>t.reduceRight(((t,o)=>Array.isArray(o)?e(o,t):(t.add(o),t)),o),o=e(t,new Set),i=[];o.forEach((t=>i.unshift(t))),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!Y){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new K(String(e),G)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Y?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Z&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return Z}}function et(){return document.querySelector("hc-main")?document.querySelector("hc-main").hass:document.querySelector("home-assistant")?document.querySelector("home-assistant").hass:void 0}function ot(t){return document.querySelector("hc-main")?document.querySelector("hc-main").provideHass(t):document.querySelector("home-assistant")?document.querySelector("home-assistant").provideHass(t):void 0}function it(t,e,o=null){if((t=new Event(t,{bubbles:!0,cancelable:!1,composed:!0})).detail=e||{},o)o.dispatchEvent(t);else{var i=function(){var t=document.querySelector("hc-main");return t?(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("hc-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-view")||t.querySelector("hui-panel-view"):(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=document.querySelector("home-assistant"))&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root"))&&t.shadowRoot)&&t.querySelector("ha-app-layout"))&&t.querySelector("#view"))&&t.firstElementChild}();i&&i.dispatchEvent(t)}}async function st(t,e,o=!1){let i=t;"string"==typeof e&&(e=e.split(/(\$| )/)),""===e[e.length-1]&&e.pop();for(const[t,s]of e.entries())if(s.trim().length){if(!i)return null;i.localName&&i.localName.includes("-")&&await customElements.whenDefined(i.localName),i.updateComplete&&await i.updateComplete,i="$"===s?o&&t==e.length-1?[i.shadowRoot]:i.shadowRoot:o&&t==e.length-1?i.querySelectorAll(s):i.querySelector(s)}return i}async function nt(t,e=!1){const o=document.querySelector("hc-main")||document.querySelector("home-assistant");it("hass-more-info",{entityId:t},o);const i=await async function(t,e,o=!1,i=1e4){return Promise.race([st(t,e,o),new Promise(((t,e)=>setTimeout((()=>e(new Error("timeout"))),i)))]).catch((t=>{if(!t.message||"timeout"!==t.message)throw t;return null}))}(o,"$ ha-more-info-dialog");return i&&(i.large=e),i}tt.finalized=!0,tt.render=(t,o,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,n=O.has(o),r=I&&11===o.nodeType&&!!o.host,a=r&&!z.has(s),l=a?document.createDocumentFragment():o;if(((t,o,i)=>{let s=O.get(o);void 0===s&&(e(o,o.firstChild),O.set(o,s=new T(Object.assign({templateFactory:A},i))),s.appendInto(o)),s.setValue(t),s.commit()})(t,l,Object.assign({templateFactory:F(s)},i)),a){const t=O.get(l);O.delete(l);const i=t.value instanceof w?t.value.template:void 0;W(s,l,i),e(o,o.firstChild),o.appendChild(l),O.set(o,t)}!n&&r&&window.ShadyCSS.styleElement(o.host)},tt.shadowRootOptions={mode:"open"};const rt="lovelace-player-device-id";function at(){if(!localStorage[rt]){const t=()=>Math.floor(1e5*(1+Math.random())).toString(16).substring(1);window.fully&&"function"==typeof fully.getDeviceId?localStorage[rt]=fully.getDeviceId():localStorage[rt]=`${t()}${t()}-${t()}${t()}`}return localStorage[rt]}let lt=at();const dt=new URLSearchParams(window.location.search);var ct,ht,ut,pt;dt.get("deviceID")&&null!==(ct=dt.get("deviceID"))&&("clear"===ct?localStorage.removeItem(rt):localStorage[rt]=ct,lt=at()),(pt=ht||(ht={})).language="language",pt.system="system",pt.comma_decimal="comma_decimal",pt.decimal_comma="decimal_comma",pt.space_comma="space_comma",pt.none="none",function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ut||(ut={}));var mt=["closed","locked","off"],gt=function(t,e,o,i){i=i||{},o=null==o?{}:o;var s=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return s.detail=o,t.dispatchEvent(s),s},ft=function(t){gt(window,"haptic",t)};const yt="SIDEBAR-CARD",wt=require("moment/min/moment-with-locales");function bt(t,e){let o=25,i=75,s=!1;t.width&&("number"==typeof t.width?(o=t.width,i=100-o):"object"==typeof t.width&&(o=t.desktop,i=100-o,s=!0));let n="\n    #customSidebarWrapper { \n      display:flex;\n      flex-direction:row;\n      overflow:hidden;\n    }\n    #customSidebar.hide {\n      display:none!important;\n      width:0!important;\n    }\n    #view.hideSidebar {\n      width:100%!important;\n    }\n  ";return s?e<=t.breakpoints.mobile?0==t.width.mobile?n+="\n          #customSidebar {\n            width:"+t.width.mobile+`%;\n            overflow:hidden;\n            display:none;\n            ${t.hideTopMenu?"":"margin-top: calc(var(--header-height) + env(safe-area-inset-top));"}\n          } \n          #view {\n            width:`+(100-t.width.mobile)+`%;\n          ${t.hideTopMenu?"padding-top:0!important;margin-top:0!important;":""}\n          }\n        `:n+="\n          #customSidebar {\n            width:"+t.width.mobile+`%;\n            overflow:hidden;\n            ${t.hideTopMenu?"":"margin-top: calc(var(--header-height) + env(safe-area-inset-top));"}\n          } \n          #view {\n            width:`+(100-t.width.mobile)+`%;\n          ${t.hideTopMenu?"padding-top:0!important;margin-top:0!important;":""}\n          }\n        `:e<=t.breakpoints.tablet?0==t.width.tablet?n+="\n          #customSidebar {\n            width:"+t.width.tablet+`%;\n            overflow:hidden;\n            display:none;\n            ${t.hideTopMenu?"":"margin-top: calc(var(--header-height) + env(safe-area-inset-top));"}\n          } \n          #view {\n            width:`+(100-t.width.tablet)+`%;\n          ${t.hideTopMenu?"padding-top:0!important;margin-top:0!important;":""}\n          }\n        `:n+="\n          #customSidebar {\n            width:"+t.width.tablet+`%;\n            overflow:hidden;\n            ${t.hideTopMenu?"":"margin-top: calc(var(--header-height) + env(safe-area-inset-top));"}\n          } \n          #view {\n            width:`+(100-t.width.tablet)+`%;\n          ${t.hideTopMenu?"padding-top:0!important;margin-top:0!important;":""}\n          }\n        `:0==t.width.tablet?n+="\n          #customSidebar {\n            width:"+t.width.desktop+`%;\n            overflow:hidden;\n            display:none;\n            ${t.hideTopMenu?"":"margin-top: calc(var(--header-height) + env(safe-area-inset-top));"}\n          } \n          #view {\n            width:`+(100-t.width.desktop)+`%;\n          ${t.hideTopMenu?"padding-top:0!important;margin-top:0!important;":""}\n          }\n        `:n+="\n          #customSidebar {\n            width:"+t.width.desktop+`%;\n            overflow:hidden;\n            ${t.hideTopMenu?"":"margin-top: calc(var(--header-height) + env(safe-area-inset-top));"}\n          } \n          #view {\n            width:`+(100-t.width.desktop)+`%;\n          ${t.hideTopMenu?"padding-top:0!important;margin-top:0!important;":""}\n          }\n        `:n+="\n      #customSidebar {\n        width:"+o+`%;\n        overflow:hidden;\n        ${t.hideTopMenu?"":"margin-top: calc(var(--header-height) + env(safe-area-inset-top));"}\n      } \n      #view {\n        width:`+i+`%;\n      ${t.hideTopMenu?"padding-top:0!important;margin-top:0!important;":""}\n      }\n    `,n}function St(){let t=document.querySelector("home-assistant");if(t=t&&t.shadowRoot,t=t&&t.querySelector("home-assistant-main"),t=t&&t.shadowRoot,t=t&&t.querySelector("ha-drawer partial-panel-resolver"),t=t&&t.shadowRoot||t,t=t&&t.querySelector("ha-panel-lovelace"),t=t&&t.shadowRoot,t=t&&t.querySelector("hui-root"),t){const e=t.lovelace;return e.current_view=t.___curView,e}return null}async function vt(t,e,o){const i=await Pt();if(i.config.sidebar){!0===Object.assign({},i.config.sidebar).debug&&console.info(`%c${yt}: %c ${t.padEnd(24)} -> %c ${e}`,"color: chartreuse; background: black; font-weight: 700;","color: yellow; background: black; font-weight: 700;","",o)}}async function _t(t,e,o){const i=await Pt();if(i.config.sidebar){!0===Object.assign({},i.config.sidebar).debug&&console.error(`%c${yt}: %c ${t.padEnd(24)} -> %c ${e}`,"color: red; background: black; font-weight: 700;","color: white; background: black; font-weight: 700;","color:red",o)}}function xt(){let t=document.querySelector("home-assistant");return t=t&&t.shadowRoot,t=t&&t.querySelector("home-assistant-main"),t=t&&t.shadowRoot,t=t&&t.querySelector("ha-drawer partial-panel-resolver"),t=t&&t.shadowRoot||t,t=t&&t.querySelector("ha-panel-lovelace"),t=t&&t.shadowRoot,t=t&&t.querySelector("hui-root"),t}function Ct(t,e=window.location.href){const o=t.replace(/[\[\]]/g,"\\$&"),i=new RegExp("[?&]"+o+"(=([^&#]*)|&|#|$)").exec(e);return i?i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):"":null}function kt(t,e){const o=document.body.clientWidth;t.querySelector("#customSidebarStyle").textContent=bt(e,o);const i=xt(),s=i.shadowRoot.querySelector(".header");vt("updateStyling",s?"Home Assistant header found!":"Home Assistant header not found!");const n=i.shadowRoot.querySelector("ch-footer");vt("updateStyling",n?"Home Assistant footer found!":"Home Assistant footer not found!");const r=Ct("sidebarOff"),a=i.shadowRoot.getElementById("view");e.hideTopMenu&&!0===e.hideTopMenu&&e.showTopMenuOnMobile&&!0===e.showTopMenuOnMobile&&o<=e.breakpoints.mobile&&null==r?(s&&(vt("updateStyling","Action: Show Home Assistant header!"),s.style.display="block"),a&&(a.style.minHeight="calc(100vh - var(--header-height))"),n&&(vt("updateStyling","Action: Show Home Assistant footer!"),n.style.display="flex")):e.hideTopMenu&&!0===e.hideTopMenu&&null==r&&(s&&(vt("updateStyling","Action: Hide Home Assistant header!"),s.style.display="none"),n&&(vt("updateStyling","Action: Hide Home Assistant footer!"),n.style.display="none"),a&&(a.style.minHeight="calc(100vh)"))}function Tt(t){return new Promise((e=>setTimeout(e,t)))}async function Pt(){let t;for(;!t;)t=St(),t||await Tt(500);return t}async function Et(){const t=await Pt();if(t.config.sidebar){const e=Object.assign({},t.config.sidebar);if(!e.width||e.width&&"number"==typeof e.width&&e.width>0&&e.width<100||e.width&&"object"==typeof e.width){const t=xt(),o=function(){let t=document.querySelector("home-assistant");return t=t&&t.shadowRoot,t=t&&t.querySelector("home-assistant-main"),t=t&&t.shadowRoot,t=t&&t.querySelector("ha-drawer ha-sidebar"),t}(),i=function(){let t=document.querySelector("home-assistant");return t=t&&t.shadowRoot,t=t&&t.querySelector("home-assistant-main"),t=t&&t.shadowRoot,t=t&&t.querySelector("ha-drawer"),t=t&&t.shadowRoot,t=t&&t.querySelector(".mdc-drawer-app-content"),t}(),s=function(){let t=document.querySelector("home-assistant");return t=t&&t.shadowRoot,t=t&&t.querySelector("home-assistant-main"),t=t&&t.shadowRoot,t=t&&t.querySelector("ha-drawer"),t=t&&t.shadowRoot,t=t&&t.querySelector(".mdc-drawer"),t}(),n=Ct("sidebarOff");e.hideTopMenu&&!0===e.hideTopMenu&&null==n&&(t.shadowRoot.querySelector("ch-header")&&(t.shadowRoot.querySelector("ch-header").style.display="none"),t.shadowRoot.querySelector("app-header")&&(t.shadowRoot.querySelector("app-header").style.display="none"),t.shadowRoot.querySelector("ch-footer")&&(t.shadowRoot.querySelector("ch-footer").style.display="none"),t.shadowRoot.getElementById("view")&&(t.shadowRoot.getElementById("view").style.minHeight="calc(100vh)")),e.hideHassSidebar&&!0===e.hideHassSidebar&&null==n&&(o&&(o.style.display="none"),i&&(i.style.marginLeft="0"),s&&(s.style.display="none")),e.breakpoints?e.breakpoints&&(e.breakpoints.mobile||(e.breakpoints.mobile=768),e.breakpoints.tablet||(e.breakpoints.tablet=1024)):e.breakpoints={tablet:1024,mobile:768};let r=t.shadowRoot.querySelector("div"),a=bt(e,document.body.clientWidth),l=document.createElement("style");l.setAttribute("id","customSidebarStyle"),r.appendChild(l),l.type="text/css",l.styleSheet?l.styleSheet.cssText=a:l.appendChild(document.createTextNode(a));let d=r.querySelector("#view");const c=document.createElement("div");c.setAttribute("id","customSidebarWrapper"),d.parentNode.insertBefore(c,d);let h=document.createElement("div");h.setAttribute("id","customSidebar"),c.appendChild(h),c.appendChild(d),await async function(t,e){const o=document.createElement("sidebar-card");o.setConfig(e),o.hass=et(),t.appendChild(o)}(h,e),function(t,e,o,i){window.addEventListener("resize",(function(){kt(t,e)}),!0),"hideOnPath"in e&&(window.addEventListener("location-changed",(()=>{e.hideOnPath.includes(window.location.pathname)?(o.classList.add("hideSidebar"),i.classList.add("hide")):(o.classList.remove("hideSidebar"),i.classList.remove("hide"))})),e.hideOnPath.includes(window.location.pathname)&&(vt("subscribeEvents","Disable sidebar for this path"),o.classList.add("hideSidebar"),i.classList.add("hide")))}(r,e,d,h),setTimeout((function(){kt(r,e)}),1)}else _t("buildSidebar","Error sidebar in width config!")}else vt("buildSidebar","No sidebar in config found!")}customElements.define("sidebar-card",class extends tt{constructor(){super(),this.templateLines=[],this.clock=!1,this.digitalClock=!1,this.twelveHourVersion=!1,this.digitalClockWithSeconds=!1,this.period=!1,this.date=!1,this.dateFormat="DD MMMM",this.topCard=null,this.bottomCard=null,this.CUSTOM_TYPE_PREFIX="custom:"}static get properties(){return{hass:{},config:{},active:{}}}render(){const t=this.config.sidebarMenu,e="title"in this.config&&this.config.title,o="style"in this.config;return this.clock=!!this.config.clock&&this.config.clock,this.digitalClock=!!this.config.digitalClock&&this.config.digitalClock,this.digitalClockWithSeconds=!!this.config.digitalClockWithSeconds&&this.config.digitalClockWithSeconds,this.twelveHourVersion=!!this.config.twelveHourVersion&&this.config.twelveHourVersion,this.period=!!this.config.period&&this.config.period,this.date=!!this.config.date&&this.config.date,this.dateFormat=this.config.dateFormat?this.config.dateFormat:"DD MMMM",this.topCard=this.config.topCard?this.config.topCard:null,this.bottomCard=this.config.bottomCard?this.config.bottomCard:null,U`
      ${o?U`
            <style>
              ${this.config.style}
            </style>
          `:U``}

      <div class="sidebar-inner">
        ${this.digitalClock?U`
              <h1 class="digitalClock${e?" with-title":""}${this.digitalClockWithSeconds?" with-seconds":""}"></h1>
            `:U``}
        ${this.clock?U`
              <div class="clock">
                <div class="wrap">
                  <span class="hour"></span>
                  <span class="minute"></span>
                  <span class="second"></span>
                  <span class="dot"></span>
                </div>
              </div>
            `:U``}
        ${e?U`
              <h1>${e}</h1>
            `:U``}
        ${this.date?U`
              <h2 class="date"></h2>
            `:U``}
          ${this.topCard?U`
                <div class="top"></div>
              `:U``}
        ${t&&t.length>0?U`
              <ul class="sidebarMenu">
                ${t.map((t=>U`
                    <li @click="${t=>this._menuAction(t)}" class="${t.state&&"off"!=this.hass.states[t.state].state&&"unavailable"!=this.hass.states[t.state].state?"active":""}" data-type="${t.action}" data-path="${t.navigation_path?t.navigation_path:""}" data-menuitem="${JSON.stringify(t)}">
                      <span>${t.name}</span>
                      ${t.icon?U`
                            <ha-icon @click="${t=>this._menuAction(t)}" icon="${t.icon}"></ha-icon>
                          `:U``}
                    </li>
                  `))}
              </ul>
            `:U``}
        ${this.config.template?U`
              <ul class="template">
                ${this.templateLines.map((t=>U`
                    <li>${t}</li>
                  `))}
              </ul>
            `:U``}
        ${this.bottomCard?U`
              <div class="bottom"></div>
            `:U``}
      </div>
    `}_runClock(){let t,e;const o=new Date;let i=o.getHours().toString();const s=o.getHours(),n=(s+11)%12+1,r=o.getMinutes(),a=o.getSeconds(),l=Math.floor((60*n+r)/2),d=6*r,c=6*a;if(this.clock&&(this.shadowRoot.querySelector(".hour").style.transform=`rotate(${l}deg)`,this.shadowRoot.querySelector(".minute").style.transform=`rotate(${d}deg)`,this.shadowRoot.querySelector(".second").style.transform=`rotate(${c}deg)`),this.digitalClock&&!this.twelveHourVersion){const t=r.toString();if(e=i.length<2?"0"+i+":":i+":",this.digitalClockWithSeconds){e+=t.length<2?"0"+t+":":t+":";const o=a.toString();e+=o.length<2?"0"+o:o}else e+=t.length<2?"0"+t:t;this.shadowRoot.querySelector(".digitalClock").textContent=e}else if(this.digitalClock&&this.twelveHourVersion&&!this.period){t=o.getHours(),t%=12,t=t||12,i=t.toString();const s=r.toString();if(e=i.length<2?"0"+i+":":i+":",this.digitalClockWithSeconds){e+=s.length<2?"0"+s+":":s+":";const t=a.toString();e+=t.length<2?"0"+t:t}else e+=s.length<2?"0"+s:s;this.shadowRoot.querySelector(".digitalClock").textContent=e}else if(this.digitalClock&&this.twelveHourVersion&&this.period){var h=s>=12?"pm":"am";t=o.getHours(),t%=12,t=t||12,i=t.toString();const n=r.toString();if(e=i.length<2?"0"+i+":":i+":",this.digitalClockWithSeconds){e+=n.length<2?"0"+n+":":n+":";const t=a.toString();e+=t.length<2?"0"+t:t}else e+=n.length<2?"0"+n:n;e+=" "+h,this.shadowRoot.querySelector(".digitalClock").textContent=e}}_runDate(){const t=wt();t.locale(this.hass.language),this.shadowRoot.querySelector(".date").textContent=t.format(this.dateFormat)}updateSidebarSize(t){const e=this.shadowRoot.querySelector(".sidebar-inner");t.shadowRoot.querySelector("ch-header")||t.shadowRoot.querySelector("app-header"),Ct("sidebarOff");e&&(e.style.width=this.offsetWidth+"px",this.config.hideTopMenu?(e.style.height=`${window.innerHeight}px`,e.style.top="0px"):(e.style.height=`calc(${window.innerHeight}px - var(--header-height))`,e.style.top="var(--header-height)"))}firstUpdated(){ot(this);let t=xt();t.shadowRoot.querySelectorAll("paper-tab").forEach((t=>{vt("firstUpdated","Menu item found"),t.addEventListener("click",(()=>{this._updateActiveMenu()}))}));const e=this;if(this.clock||this.digitalClock){const t=1e3;e._runClock(),setInterval((function(){e._runClock()}),t)}if(this.date){const t=36e5;e._runDate(),setInterval((function(){e._runDate()}),t)}setTimeout((()=>{e.updateSidebarSize(t),e._updateActiveMenu()}),1),window.addEventListener("resize",(function(){e.updateSidebarSize(t)}),!0),this.bottomCard&&setTimeout((()=>{var t={type:this.bottomCard.type};if(vt("firstUpdated","Bottom card: ",t=Object.assign({},t,this.bottomCard.cardOptions)),t&&"object"==typeof t&&t.type){let e=t.type;e=e.startsWith(this.CUSTOM_TYPE_PREFIX)?e.substr(this.CUSTOM_TYPE_PREFIX.length):`hui-${e}-card`;const o=document.createElement(e);if(o.setConfig(t),o.hass=et(),this.shadowRoot.querySelector(".bottom").appendChild(o),ot(o),this.bottomCard.cardStyle&&""!=this.bottomCard.cardStyle){let t=this.bottomCard.cardStyle,e=0,i=setInterval((function(){if(o&&o.shadowRoot){window.clearInterval(i);var s=document.createElement("style");s.innerHTML=t,o.shadowRoot.appendChild(s)}else 10==++e&&window.clearInterval(i)}),100)}}else _t("firstUpdated","Bottom card config error!")}),2),this.topCard&&setTimeout((()=>{var t={type:this.topCard.type};if(vt("firstUpdated","Top card: ",t=Object.assign({},t,this.topCard.cardOptions)),t&&"object"==typeof t&&t.type){let e=t.type;e=e.startsWith(this.CUSTOM_TYPE_PREFIX)?e.substr(this.CUSTOM_TYPE_PREFIX.length):`hui-${e}-card`;const o=document.createElement(e);if(o.setConfig(t),o.hass=et(),this.shadowRoot.querySelector(".top").appendChild(o),ot(o),this.topCard.cardStyle&&""!=this.topCard.cardStyle){let t=this.topCard.cardStyle,e=0,i=setInterval((function(){if(o&&o.shadowRoot){window.clearInterval(i);var s=document.createElement("style");s.innerHTML=t,o.shadowRoot.appendChild(s)}else 10==++e&&window.clearInterval(i)}),100)}}else _t("firstUpdated","Top card config error!")}),2)}_updateActiveMenu(){this.shadowRoot.querySelectorAll('ul.sidebarMenu li[data-type="navigate"]').forEach((t=>{t.classList.remove("active")}));let t=this.shadowRoot.querySelector('ul.sidebarMenu li[data-path="'+document.location.pathname+'"]');t&&t.classList.add("active")}_menuAction(t){if(t.target.dataset&&t.target.dataset.menuitem||t.target.parentNode.dataset&&t.target.parentNode.dataset.menuitem){const e=JSON.parse(t.target.dataset.menuitem||t.target.parentNode.dataset.menuitem);this._customAction(e),this._updateActiveMenu()}}_customAction(t){switch(t.action){case"more-info":(t.entity||t.camera_image)&&nt(t.entity?t.entity:t.camera_image);break;case"navigate":t.navigation_path&&function(t,e,o){void 0===o&&(o=!1),o?history.replaceState(null,"",e):history.pushState(null,"",e),gt(window,"location-changed",{replace:o})}(window,t.navigation_path);break;case"url":t.url_path&&window.open(t.url_path);break;case"toggle":t.entity&&(!function(t,e){(function(t,e,o){void 0===o&&(o=!0);var i,s=function(t){return t.substr(0,t.indexOf("."))}(e),n="group"===s?"homeassistant":s;switch(s){case"lock":i=o?"unlock":"lock";break;case"cover":i=o?"open_cover":"close_cover";break;default:i=o?"turn_on":"turn_off"}t.callService(n,i,{entity_id:e})})(t,e,mt.includes(t.states[e].state))}(this.hass,t.entity),ft("success"));break;case"call-service":{if(!t.service)return void ft("failure");const[e,o]=t.service.split(".",2);this.hass.callService(e,o,t.service_data),ft("success")}}}setConfig(t){this.config=t,this.config.template&&function(t,e,o,i=!0){t||(t=et().connection);let s={user:et().user.name,browser:lt,hash:location.hash.substr(1)||" ",...o.variables},n=o.template,r=o.entity_ids;t.subscribeMessage((t=>{if(i){let o=String(t.result);const i=/_\([^)]*\)/g;o=o.replace(i,(t=>et().localize(t.substring(2,t.length-1))||t)),e(o)}else e(t.result)}),{type:"render_template",template:n,variables:s,entity_ids:r})}(null,(t=>{this.templateLines=t.match(/<li>([^]*?)<\/li>/g).map((function(t){return t.replace(/<\/?li>/g,"")})),this.requestUpdate()}),{template:this.config.template,variables:{config:this.config},entity_ids:this.config.entity_ids})}getCardSize(){return 1}static get styles(){return Q`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        // --face-color: #FFF;
        // --face-border-color: #FFF;
        // --clock-hands-color: #000;
        // --clock-seconds-hand-color: #FF4B3E;
        // --clock-middle-background: #FFF;
        // --clock-middle-border: #000;
        // --sidebar-background: #FFF;
        // --sidebar-text-color: #000;
        // --sidebar-icon-color: #000;
        // --sidebar-selected-text-color: #000;
        // --sidebar-selected-icon-color: #000;
        background-color:  var(--sidebar-background, var(--paper-listbox-background-color, var(--primary-background-color, #fff)));
      }
      .sidebar-inner {
        padding: 20px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        position: fixed;
        width: 0;
      }
      .sidebarMenu {
        list-style: none;
        margin: 20px 0;
        padding: 20px 0;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }
      .sidebarMenu li {
        color: var(--sidebar-text-color, #000);
        position: relative;
        padding: 10px 20px;
        border-radius: 12px;
        font-size: 18px;
        line-height: 24px;
        font-weight: 300;
        white-space: normal;
        display: block;
        cursor: pointer;
      }
      .sidebarMenu li ha-icon {
        float: right;
        color: var(--sidebar-icon-color, #000);
      }
      .sidebarMenu li.active {
        color: var(--sidebar-selected-text-color);
      }
      .sidebarMenu li.active ha-icon {
        color: var(--sidebar-selected-icon-color, rgb(247, 217, 89));
      }
      .sidebarMenu li.active::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--sidebar-selected-icon-color, #000);
        opacity: 0.12;
        border-radius: 12px;
      }
      h1 {
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 32px;
        line-height: 32px;
        font-weight: 200;
        color: var(--sidebar-text-color, #000);
        cursor: default;
      }
      h1.digitalClock {
        font-size: 60px;
        line-height: 60px;
        cursor: default;
      }
      h1.digitalClock.with-seconds {
        font-size: 48px;
        line-height: 48px;
        cursor: default;
      }
      h1.digitalClock.with-title {
        margin-bottom: 0;
        cursor: default;
      }
      h2 {
        margin: 0;
        font-size: 26px;
        line-height: 26px;
        font-weight: 200;
        color: var(--sidebar-text-color, #000);
        cursor: default;
      }
      .template {
        margin: 0;
        padding: 0;
        list-style: none;
        color: var(--sidebar-text-color, #000);
      }

      .template li {
        display: block;
        color: inherit;
        font-size: 18px;
        line-height: 24px;
        font-weight: 300;
        white-space: normal;
      }

      .clock {
        margin: 20px 0;
        position: relative;
        padding-top: calc(100% - 10px);
        width: calc(100% - 10px);
        border-radius: 100%;
        background: var(--face-color, #fff);
        font-family: 'Montserrat';
        border: 5px solid var(--face-border-color, #fff);
        box-shadow: inset 2px 3px 8px 0 rgba(0, 0, 0, 0.1);
      }

      .clock .wrap {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }

      .clock .minute,
      .clock .hour {
        position: absolute;
        height: 28%;
        width: 6px;
        margin: auto;
        top: -27%;
        left: 0;
        bottom: 0;
        right: 0;
        background: var(--clock-hands-color, #000);
        transform-origin: bottom center;
        transform: rotate(0deg);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
        z-index: 1;
      }

      .clock .minute {
        position: absolute;
        height: 41%;
        width: 4px;
        top: -38%;
        left: 0;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
        transform: rotate(90deg);
      }

      .clock .second {
        position: absolute;
        top: -48%;
        height: 48%;
        width: 2px;
        margin: auto;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 4px;
        background: var(--clock-seconds-hand-color, #ff4b3e);
        transform-origin: bottom center;
        transform: rotate(180deg);
        z-index: 1;
      }

      .clock .dot {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 12px;
        height: 12px;
        border-radius: 100px;
        background: var(--clock-middle-background, #fff);
        border: 2px solid var(--clock-middle-border, #000);
        border-radius: 100px;
        margin: auto;
        z-index: 1;
      }

      .top {
        display: flex;
        margin-top: auto;
      }
      .bottom {
        display: flex;
        margin-top: auto;
      }
    `}}),console.info(`%c  ${yt.padEnd(24)}%c\n  Version: ${"0.1.8.4".padEnd(9)}      `,"color: chartreuse; background: black; font-weight: 700;","color: white; background: dimgrey; font-weight: 700;"),Et(),setTimeout((()=>{window.addEventListener("location-changed",(()=>{const t=xt();if(!t)return;const e=t.shadowRoot.querySelector("div").querySelector("#customSidebarWrapper");e&&e.querySelector("#customSidebar")||Et()}))}),1e3);
