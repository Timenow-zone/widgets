!function(){function t(t){return t&&t.t?t.default:t}var e,o,n,r,i,l,a,s={},d=[],_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,u=Array.isArray;function p(t,e){for(var o in e)t[o]=e[o];return t}function c(t){var e=t.parentNode;e&&e.removeChild(t)}function h(t,o,n){var r,i,l,a={};for(l in o)"key"==l?r=o[l]:"ref"==l?i=o[l]:a[l]=o[l];if(arguments.length>2&&(a.children=arguments.length>3?e.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(l in t.defaultProps)void 0===a[l]&&(a[l]=t.defaultProps[l]);return f(t,a,r,i,null)}function f(t,e,r,i,l){var a={type:t,props:e,key:r,ref:i,e:null,o:null,n:0,r:null,i:void 0,l:null,a:null,constructor:void 0,s:null==l?++n:l,d:-1};return null==l&&null!=o.vnode&&o.vnode(a),a}function m(t){return t.children}function w(t,e){this.props=t,this.context=e}function g(t,e){if(null==e)return t.o?g(t.o,t.d+1):null;for(var o;e<t.e.length;e++)if(null!=(o=t.e[e])&&null!=o.r)return o.r;return"function"==typeof t.type?g(t):null}function v(t){(!t.i&&(t.i=!0)&&r.push(t)&&!b._++||i!==o.debounceRendering)&&((i=o.debounceRendering)||l)(b)}function b(){var t,e,o,n,i,l,s,d,_;for(r.sort(a);t=r.shift();)t.i&&(e=r.length,n=void 0,i=void 0,l=void 0,d=(s=(o=t).s).r,(_=o.u)&&(n=[],i=[],(l=p({},s)).s=s.s+1,M(_,l,s,o.p,void 0!==_.ownerSVGElement,null!=s.a?[d]:null,n,null==d?g(s):d,s.a,i),l.o.e[l.d]=l,E(n,l,i),l.r!=d&&function t(e){var o,n;if(null!=(e=e.o)&&null!=e.l){for(e.r=e.l.base=null,o=0;o<e.e.length;o++)if(null!=(n=e.e[o])&&null!=n.r){e.r=e.l.base=n.r;break}return t(e)}}(l)),r.length>e&&r.sort(a));b._=0}function y(t,e,o,n,r,i,l,a,_,p,c){var h,w,v,b,y,k,S,C,z,E=0,R=n&&n.e||d,L=R.length,I=L,T=e.length;for(o.e=[],h=0;h<T;h++)null!=(b=o.e[h]=null==(b=e[h])||"boolean"==typeof b||"function"==typeof b?null:b.constructor==String||"number"==typeof b||"bigint"==typeof b?f(null,b,null,null,b):u(b)?f(m,{children:b},null,null,null):b.n>0?f(b.type,b.props,b.key,b.ref?b.ref:null,b.s):b)?(b.o=o,b.n=o.n+1,b.d=h,-1===(C=function(t,e,o,n){var r=t.key,i=t.type,l=o-1,a=o+1,s=e[o];if(null===s||s&&r==s.key&&i===s.type)return o;if(n>(null!=s?1:0))for(;l>=0||a<e.length;){if(l>=0){if((s=e[l])&&r==s.key&&i===s.type)return l;l--}if(a<e.length){if((s=e[a])&&r==s.key&&i===s.type)return a;a++}}return -1}(b,R,S=h+E,I))?v=s:(v=R[C]||s,R[C]=void 0,I--),M(t,b,v,r,i,l,a,_,p,c),y=b.r,(w=b.ref)&&v.ref!=w&&(v.ref&&P(v.ref,null,b),c.push(w,b.l||y,b)),null==k&&null!=y&&(k=y),(z=v===s||null===v.s)?-1==C&&E--:C!==S&&(C===S+1?E++:C>S?I>T-S?E+=C-S:E--:E=C<S&&C==S-1?C-S:0),S=h+E,"function"==typeof b.type?(C!==S||v.e===b.e?_=function t(e,o,n){for(var r,i=e.e,l=0;i&&l<i.length;l++)(r=i[l])&&(r.o=e,o="function"==typeof r.type?t(r,o,n):x(n,r.r,o));return o}(b,_,t):void 0!==b.i?_=b.i:y&&(_=y.nextSibling),b.i=void 0):y&&(_=C!==S||z?x(t,y,_):y.nextSibling),"function"==typeof o.type&&(o.i=_)):(v=R[h])&&null==v.key&&v.r&&(v.r==_&&(_=g(v),"function"==typeof o.type&&(o.i=_)),N(v,v,!1),R[h]=null);for(o.r=k,h=L;h--;)null!=R[h]&&("function"==typeof o.type&&null!=R[h].r&&R[h].r==_&&(o.i=R[h].r.nextSibling),N(R[h],R[h]))}function x(t,e,o){return e!=o&&t.insertBefore(e,o||null),e.nextSibling}function k(t,e,o){"-"===e[0]?t.setProperty(e,null==o?"":o):t[e]=null==o?"":"number"!=typeof o||_.test(e)?o:o+"px"}function S(t,e,o,n,r){var i;t:if("style"===e){if("string"==typeof o)t.style.cssText=o;else{if("string"==typeof n&&(t.style.cssText=n=""),n)for(e in n)o&&e in o||k(t.style,e,"");if(o)for(e in o)n&&o[e]===n[e]||k(t.style,e,o[e])}}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase() in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=o,o?n?o.u=n.u:(o.u=Date.now(),t.addEventListener(e,i?z:C,i)):t.removeEventListener(e,i?z:C,i);else if("dangerouslySetInnerHTML"!==e){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==e&&"height"!==e&&"href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&"rowSpan"!==e&&"colSpan"!==e&&"role"!==e&&e in t)try{t[e]=null==o?"":o;break t}catch(t){}"function"==typeof o||(null==o||!1===o&&"-"!==e[4]?t.removeAttribute(e):t.setAttribute(e,o))}}function C(t){var e=this.l[t.type+!1];if(t.t){if(t.t<=e.u)return}else t.t=Date.now();return e(o.event?o.event(t):t)}function z(t){return this.l[t.type+!0](o.event?o.event(t):t)}function M(t,n,r,i,l,a,d,_,h,f){var v,b,x,k,C,z,M,E,P,N,L,I,T,D,F,U=n.type;if(void 0!==n.constructor)return null;null!=r.a&&(h=r.a,_=n.r=r.r,n.a=null,a=[_]),(v=o.n)&&v(n);t:if("function"==typeof U)try{if(E=n.props,P=(v=U.contextType)&&i[v.l],N=v?P?P.props.value:v.o:i,r.l?M=(b=n.l=r.l).o=b.c:("prototype"in U&&U.prototype.render?n.l=b=new U(E,N):(n.l=b=new w(E,N),b.constructor=U,b.render=R),P&&P.sub(b),b.props=E,b.state||(b.state={}),b.context=N,b.p=i,x=b.i=!0,b.a=[],b.h=[]),null==b.f&&(b.f=b.state),null!=U.getDerivedStateFromProps&&(b.f==b.state&&(b.f=p({},b.f)),p(b.f,U.getDerivedStateFromProps(E,b.f))),k=b.props,C=b.state,b.s=n,x)null==U.getDerivedStateFromProps&&null!=b.componentWillMount&&b.componentWillMount(),null!=b.componentDidMount&&b.a.push(b.componentDidMount);else{if(null==U.getDerivedStateFromProps&&E!==k&&null!=b.componentWillReceiveProps&&b.componentWillReceiveProps(E,N),!b.r&&(null!=b.shouldComponentUpdate&&!1===b.shouldComponentUpdate(E,b.f,N)||n.s===r.s)){for(n.s!==r.s&&(b.props=E,b.state=b.f,b.i=!1),n.r=r.r,n.e=r.e,n.e.forEach(function(t){t&&(t.o=n)}),L=0;L<b.h.length;L++)b.a.push(b.h[L]);b.h=[],b.a.length&&d.push(b);break t}null!=b.componentWillUpdate&&b.componentWillUpdate(E,b.f,N),null!=b.componentDidUpdate&&b.a.push(function(){b.componentDidUpdate(k,C,z)})}if(b.context=N,b.props=E,b.u=t,b.r=!1,I=o._,T=0,"prototype"in U&&U.prototype.render){for(b.state=b.f,b.i=!1,I&&I(n),v=b.render(b.props,b.state,b.context),D=0;D<b.h.length;D++)b.a.push(b.h[D]);b.h=[]}else do b.i=!1,I&&I(n),v=b.render(b.props,b.state,b.context),b.state=b.f;while(b.i&&++T<25)b.state=b.f,null!=b.getChildContext&&(i=p(p({},i),b.getChildContext())),x||null==b.getSnapshotBeforeUpdate||(z=b.getSnapshotBeforeUpdate(k,C)),y(t,u(F=null!=v&&v.type===m&&null==v.key?v.props.children:v)?F:[F],n,r,i,l,a,d,_,h,f),b.base=n.r,n.a=null,b.a.length&&d.push(b),M&&(b.c=b.o=null)}catch(t){n.s=null,h||null!=a?(n.r=_,n.a=!!h,a[a.indexOf(_)]=null):(n.r=r.r,n.e=r.e),o.r(t,n,r)}else null==a&&n.s===r.s?(n.e=r.e,n.r=r.r):n.r=function(t,o,n,r,i,l,a,d,_){var p,h,f,m=n.props,w=o.props,v=o.type,b=0;if("svg"===v&&(i=!0),null!=l){for(;b<l.length;b++)if((p=l[b])&&"setAttribute"in p==!!v&&(v?p.localName===v:3===p.nodeType)){t=p,l[b]=null;break}}if(null==t){if(null===v)return document.createTextNode(w);t=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,w.is&&w),l=null,d=!1}if(null===v)m===w||d&&t.data===w||(t.data=w);else{if(l=l&&e.call(t.childNodes),h=(m=n.props||s).dangerouslySetInnerHTML,f=w.dangerouslySetInnerHTML,!d){if(null!=l)for(m={},b=0;b<t.attributes.length;b++)m[t.attributes[b].name]=t.attributes[b].value;(f||h)&&(f&&(h&&f.m==h.m||f.m===t.innerHTML)||(t.innerHTML=f&&f.m||""))}if(function(t,e,o,n,r){var i;for(i in o)"children"===i||"key"===i||i in e||S(t,i,null,o[i],n);for(i in e)r&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||o[i]===e[i]||S(t,i,e[i],o[i],n)}(t,w,m,i,d),f)o.e=[];else if(y(t,u(b=o.props.children)?b:[b],o,n,r,i&&"foreignObject"!==v,l,a,l?l[0]:n.e&&g(n,0),d,_),null!=l)for(b=l.length;b--;)null!=l[b]&&c(l[b]);d||("value"in w&&void 0!==(b=w.value)&&(b!==t.value||"progress"===v&&!b||"option"===v&&b!==m.value)&&S(t,"value",b,m.value,!1),"checked"in w&&void 0!==(b=w.checked)&&b!==t.checked&&S(t,"checked",b,m.checked,!1))}return t}(r.r,n,r,i,l,a,d,h,f);(v=o.diffed)&&v(n)}function E(t,e,n){e.i=void 0;for(var r=0;r<n.length;r++)P(n[r],n[++r],n[++r]);o.l&&o.l(e,t),t.some(function(e){try{t=e.a,e.a=[],t.some(function(t){t.call(e)})}catch(t){o.r(t,e.s)}})}function P(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){o.r(t,n)}}function N(t,e,n){var r,i;if(o.unmount&&o.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.r||P(r,null,e)),null!=(r=t.l)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){o.r(t,e)}r.base=r.u=null,t.l=void 0}if(r=t.e)for(i=0;i<r.length;i++)r[i]&&N(r[i],e,n||"function"!=typeof t.type);n||null==t.r||c(t.r),t.o=t.r=t.i=void 0}function R(t,e,o){return this.constructor(t,o)}function L(t,n,r){var i,l,a,d;o.o&&o.o(t,n),l=(i="function"==typeof r)?null:r&&r.e||n.e,a=[],d=[],M(n,t=(!i&&r||n).e=h(m,null,[t]),l||s,s,void 0!==n.ownerSVGElement,!i&&r?[r]:l?null:n.firstChild?e.call(n.childNodes):null,a,!i&&r?r:l?l.r:n.firstChild,i,d),E(a,t,d)}function I(t,o,n){var r,i,l,a,s=p({},t.props);for(l in t.type&&t.type.defaultProps&&(a=t.type.defaultProps),o)"key"==l?r=o[l]:"ref"==l?i=o[l]:s[l]=void 0===o[l]&&void 0!==a?a[l]:o[l];return arguments.length>2&&(s.children=arguments.length>3?e.call(arguments,2):n),f(t.type,s,r||t.key,i||t.ref,null)}function T(){return(T=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}e=d.slice,o={r:function(t,e,o,n){for(var r,i,l;e=e.o;)if((r=e.l)&&!r.o)try{if((i=r.constructor)&&null!=i.getDerivedStateFromError&&(r.setState(i.getDerivedStateFromError(t)),l=r.i),null!=r.componentDidCatch&&(r.componentDidCatch(t,n||{}),l=r.i),l)return r.c=r}catch(e){t=e}throw t}},n=0,w.prototype.setState=function(t,e){var o;o=null!=this.f&&this.f!==this.state?this.f:this.f=p({},this.state),"function"==typeof t&&(t=t(p({},o),this.props)),t&&p(o,t),null!=t&&this.s&&(e&&this.h.push(e),v(this))},w.prototype.forceUpdate=function(t){this.s&&(this.r=!0,t&&this.a.push(t),v(this))},w.prototype.render=m,r=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,a=function(t,e){return t.s.n-e.s.n},b._=0;var D=["context","children"];function F(t){return this.getChildContext=function(){return t.context},I(t.children,function(t,e){if(null==t)return{};var o,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)e.indexOf(o=i[n])>=0||(r[o]=t[o]);return r}(t,D))}function U(){var t=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(t),this._vdom=h(F,T({},this._props,{context:t.detail.context}),function t(e,o){if(3===e.nodeType)return e.data;if(1!==e.nodeType)return null;var n=[],r={},i=0,l=e.attributes,a=e.childNodes;for(i=l.length;i--;)"slot"!==l[i].name&&(r[l[i].name]=l[i].value,r[A(l[i].name)]=l[i].value);for(i=a.length;i--;){var s=t(a[i],null),d=a[i].slot;d?r[d]=h(W,{name:d},s):n[i]=s}var _=o?h(W,null,n):n;return h(o||e.nodeName.toLowerCase(),r,_)}(this,this.w)),(this.hasAttribute("hydrate")?function t(e,o){L(e,o,t)}:L)(this._vdom,this.g)}function A(t){return t.replace(/-(\w)/g,function(t,e){return e?e.toUpperCase():""})}function j(t,e,o){if(this._vdom){var n={};n[t]=o=null==o?void 0:o,n[A(t)]=o,this._vdom=I(this._vdom,n),L(this._vdom,this.g)}}function $(){L(this._vdom=null,this.g)}function W(t,e){var o=this;return h("slot",T({},t,{ref:function(t){t?(o.ref=t,o.v||(o.v=function(t){t.stopPropagation(),t.detail.context=e},t.addEventListener("_preact",o.v))):o.ref.removeEventListener("_preact",o.v)}}))}var O=function(){for(var t,e,o=0,n="";o<arguments.length;)(t=arguments[o++])&&(e=function t(e){var o,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e){if(Array.isArray(e))for(o=0;o<e.length;o++)e[o]&&(n=t(e[o]))&&(r&&(r+=" "),r+=n);else for(o in e)e[o]&&(r&&(r+=" "),r+=o)}return r}(t))&&(n&&(n+=" "),n+=e);return n},H={};H='*,:before,:after{box-sizing:border-box;border:0 solid #e5e7eb}:before,:after{--tw-content:""}html{-webkit-text-size-adjust:100%;tab-size:4;font-feature-settings:normal;font-variation-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}body{line-height:inherit;margin:0}hr{color:inherit;border-top-width:1px;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-feature-settings:inherit;font-variation-settings:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:#0000;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{margin:0;padding:0;list-style:none}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after,::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.block{display:block}.resize{resize:both}.rounded{border-radius:.25rem}.border{border-width:1px}.shadow{--tw-shadow:0 1px 3px 0 #0000001a,0 1px 2px -1px #0000001a;--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px #00000040;--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a;--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 #0000000d;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px #0000001a,0 8px 10px -6px #0000001a;--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.widget{text-transform:uppercase;justify-content:center;align-items:center;padding-top:.5rem;padding-bottom:.5rem;display:flex}.font-family{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Noto Sans,Liberation Sans,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}';var Z=function(t){let e,o,n;if(t.startsWith("#")){let r=t.slice(1),i=4===r.length||3===r.length,l=i?1:2;e=parseInt(r.substring(0,l),16),o=parseInt(r.substring(l,2*l),16),n=parseInt(r.substring(2*l,3*l),16),i&&(e=16*e+e,o=16*o+o,n=16*n+n)}else if(t.startsWith("rgb")){let r=t.substring(t.indexOf("(")+1,t.lastIndexOf(")")).split(/,\s*/);[e,o,n]=r.map(Number)}else throw Error("Color format not recognized. Please input HEX, RGB, or RGBA format.");let r=(.299*e+.587*o+.114*n)/255;return r>.5?"black":"white"},B=function(t,e){let o,n,r,i;if("#"===t[0]&&(9===t.length||5===t.length)){let e=9===t.length?t.slice(1):t.slice(1).split("").map(t=>t+t).join(""),l=parseInt(e,16);o=l>>24&255,n=l>>16&255,r=l>>8&255,i=(255&l)/255}else if("#"===t[0]&&(7===t.length||4===t.length)){let e=7===t.length?t.slice(1):t.slice(1).split("").map(t=>t+t).join(""),l=parseInt(e,16);o=l>>16,n=l>>8&255,r=255&l,i=1}else if(t.startsWith("rgb")){let e=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.?\d*))?\)/i);if(e)o=parseInt(e[1],10),n=parseInt(e[2],10),r=parseInt(e[3],10),i=void 0!==e[4]?parseFloat(e[4]):1;else throw Error("Invalid color format")}else throw Error("Invalid color format");let l=e<0?0:255,a=e<0?-e:e;return(o=Math.round((l-o)*a)+o,n=Math.round((l-n)*a)+n,r=Math.round((l-r)*a)+r,"#"===t[0]&&(9===t.length||5===t.length))?`#${(16777216+(o<<16)+(n<<8)+r).toString(16).slice(1)}${(255*i).toString(16).padStart(2,"0")}`:"#"===t[0]?`#${(16777216+(o<<16)+(n<<8)+r).toString(16).slice(1)}`:t.startsWith("rgba")?`rgba(${o}, ${n}, ${r}, ${i})`:`rgb(${o}, ${n}, ${r})`},G={};G={allowFonts:["Sono","Roboto Mono","Sometype Mono","Inconsolata","Source Code Pro","IBM Plex Mono","Space Mono","Ubuntu Mono","Nanum Gothic Coding","Courier Prime","JetBrains Mono","Fira Mono","Cousine","Anonymous Pro","Noto Sans Mono","Fira Code","Overpass Mono","B612 Mono","Victor Mono","Chivo Mono","Azeret Mono","Martian Mono","Red Hat Mono","M PLUS Code Latin","M PLUS 1 Code","Spline Sans Mono"]};let V=String.fromCodePoint(104,116,116,112,115,58,47,47,116,105,109,101,110,111,119,46,122,111,110,101,47),q=t(G).allowFonts;!function(t,e,o,n){function r(){var e=Reflect.construct(HTMLElement,[],r);return e.w=t,e.g=n&&n.shadow?e.attachShadow({mode:n.mode||"open"}):e,e}(r.prototype=Object.create(HTMLElement.prototype)).constructor=r,r.prototype.connectedCallback=U,r.prototype.attributeChangedCallback=j,r.prototype.disconnectedCallback=$,o=o||t.observedAttributes||Object.keys(t.propTypes||{}),r.observedAttributes=o,o.forEach(function(t){Object.defineProperty(r.prototype,t,{get:function(){return this._vdom.props[t]},set:function(e){this._vdom?this.attributeChangedCallback(t,null,e):(this._props||(this._props={}),this._props[t]=e,this.connectedCallback());var o=typeof e;null!=e&&"string"!==o&&"boolean"!==o&&"number"!==o||this.setAttribute(t,e)}})}),customElements.define(e||t.tagName||t.displayName||t.name,r)}(class extends w{constructor(t){super(t),this.containerRef=null,this.zoneContainerRef=null,this.dateContainerRef=null,this.loadGoogleFont=t=>{if(t){let e=document.createElement("link");e.href=`https://fonts.googleapis.com/css2?family=${t.replace(/\s/g,"+")}:wght@700&display=swap`,e.rel="stylesheet",document.head.appendChild(e)}},this.handleResize=()=>{if(this.containerRef){let t=this.props.locale||"en",e=["bg","ko"].some(e=>t.startsWith(e)),o=this.containerRef.offsetWidth,n=(o||1)/(e?8:6),r=(o||1)/15;this.setState({fontSize:n,fontSizeTitle:r})}},this.updateTimeAndDateString=()=>{let{locale:t,timeZone:e,seconds:o,period:n}=this.props,r=new Date,i="",l="",a="",s=!1;try{i=r.toLocaleTimeString(t,{timeZone:e,hour:"numeric",minute:"numeric",second:void 0!==n?void 0:""===o?"numeric":o,hour12:void 0!==n}),l=r.toLocaleDateString(t,{timeZone:e,weekday:"short",year:"numeric",month:"short",day:"numeric"}),a=r.toLocaleDateString(t,{timeZone:e,timeZoneName:""===this.props.timeZoneName?void 0:this.props.timeZoneName})}catch(t){s=!0}this.setState({timeString:i,dateString:l,timeZoneName:a,isError:s})},this.interval,this.state={isDark:!1,isError:!1,timeString:"",dateString:"",timeZoneName:"",fontSize:16,fontSizeTitle:16}}componentDidMount(){this.updateTimeAndDateString(),this.interval=setInterval(this.updateTimeAndDateString,1e3),window.addEventListener("resize",this.handleResize),this.handleResize(),this.loadGoogleFont(this.props.fontFamily)}componentDidUpdate(t){t.fontFamily!==this.props.fontFamily&&this.loadGoogleFont(this.props.fontFamily)}componentWillUnmount(){clearInterval(this.interval)}render(){let{backgroundColor:e,background:o,fontFamily:n,caption:r,rounded:i,shadow:l,border:a,width:s,align:d,date:_}=this.props,u=r||!1,p=["widget","font-family"];l&&p.push(l);let c={color:Z(e?.toLowerCase()||"#ffffff"),...o&&{background:o?.toLowerCase()||"#ffffff"},...e&&{backgroundColor:e?.toLowerCase()||"#ffffff"}},f={fontFamily:q.some(t=>t===n)?this.props.fontFamily:"monospace"};return h(m,null,h("style",null,t(H)),h("div",{"data-version":"0.1.1",className:O(p),ref:t=>this.containerRef=t,style:{...c,...void 0!==i&&{borderRadius:`${i}rem`},...void 0!==a&&{borderColor:B(e?.toLowerCase()||"#ffffff",-.25),borderWidth:"1px"},minWidth:80,...void 0!==s&&{width:parseInt(s?.toString()||"0",10)||void 0}}},h("div",{className:O(`text-${d||"center"}`)},this.state.timeString?h(m,null,u&&h("div",{style:{fontSize:this.state.fontSizeTitle}},r),h("a",{title:this.state.timeZoneName,style:{fontSize:this.state.fontSize,...f},href:V,target:"_blank",rel:"noopener noreferrer"},this.state.timeString),void 0!==_&&h(m,null,h("div",{title:this.state.timeZoneName,ref:t=>this.dateContainerRef=t,onClick:()=>{this.zoneContainerRef?.style.setProperty("display","block"),this.dateContainerRef?.style.setProperty("display","none")},style:{fontSize:this.state.fontSizeTitle,cursor:"pointer"}},this.state.dateString),h("div",{title:this.state.dateString,onClick:()=>{this.zoneContainerRef?.style.setProperty("display","none"),this.dateContainerRef?.style.setProperty("display","block")},ref:t=>this.zoneContainerRef=t,style:{fontSize:this.state.fontSizeTitle,display:"none",cursor:"pointer"}},this.state.timeZoneName))):h(m,null,"..."),this.state.isError&&h("div",null,"Error"))))}},"timenow-zone-sdcw",["rounded","seconds","caption","locale","shadow","border","period","font-family","date","background-color","background","time-zone-name","time-zone"],{shadow:!0})}();
//# sourceMappingURL=SimpleDigitalClockWidget.js.map
