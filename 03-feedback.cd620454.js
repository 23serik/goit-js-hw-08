function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var r,i,o,a,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function S(e){return l=e,u=setTimeout(O,t),c?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function O(){var e=g();if(j(e))return h(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?m(n,o-(e-l)):n}(e))}function h(e){return u=void 0,v&&r?b(e):(r=i=void 0,a)}function w(){var e=g(),n=j(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(O,t),b(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=i=u=void 0},w.flush=function(){return void 0===u?a:h(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),S=b.querySelector("input"),j=b.querySelector("textarea");let O={};b.addEventListener("input",e(t)((e=>{"message"===e.target.name&&""!==e.target.value?(O.message=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify({...O}))):"email"===e.target.name&&""!==e.target.value&&(O.email=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify({...O})))}),500)),b.addEventListener("submit",(e=>{if(""!==S.value&&""!==j.value)return e.preventDefault(),console.log("elements",O),localStorage.removeItem("feedback-form-state"),void e.target.reset();alert("ПОРОЖНЄ ПОЛЕ")})),function(){const e=localStorage.getItem("feedback-form-state");if(e){const{email:t,message:n}=JSON.parse(e);O={email:t,message:n},S.value=t||"",j.value=n||""}}();
//# sourceMappingURL=03-feedback.cd620454.js.map
