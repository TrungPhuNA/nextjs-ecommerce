(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{5467:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/NavbarMenu",function(){return a(2168)}])},8418:function(e,n,a){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var a=[],r=!0,t=!1,s=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(a.push(l.value),!n||a.length!==n);r=!0);}catch(i){t=!0,s=i}finally{try{r||null==c.return||c.return()}finally{if(t)throw s}}return a}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var t,s=(t=a(7294))&&t.__esModule?t:{default:t},l=a(6273),c=a(387),i=a(7190);var o={};function u(e,n,a,r){if(e&&l.isLocalURL(n)){e.prefetch(n,a,r).catch((function(e){0}));var t=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;o[n+"%"+a+(t?"%"+t:"")]=!0}}var f=function(e){var n,a=!1!==e.prefetch,t=c.useRouter(),f=s.default.useMemo((function(){var n=r(l.resolveHref(t,e.href,!0),2),a=n[0],s=n[1];return{href:a,as:e.as?l.resolveHref(t,e.as):s||a}}),[t,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,m=e.shallow,x=e.scroll,b=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var j=(n=s.default.Children.only(p))&&"object"===typeof n&&n.ref,g=r(i.useIntersection({rootMargin:"200px"}),2),y=g[0],N=g[1],w=s.default.useCallback((function(e){y(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,y]);s.default.useEffect((function(){var e=N&&a&&l.isLocalURL(d),n="undefined"!==typeof b?b:t&&t.locale,r=o[d+"%"+h+(n?"%"+n:"")];e&&!r&&u(t,d,h,{locale:n})}),[h,d,N,b,a,t]);var E={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,a,r,t,s,c,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(a))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[t?"replace":"push"](a,r,{shallow:s,locale:i,scroll:c}))}(e,t,d,h,v,m,x,b)},onMouseEnter:function(e){l.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(t,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var _="undefined"!==typeof b?b:t&&t.locale,k=t&&t.isLocaleDomain&&l.getDomainLocale(h,_,t&&t.locales,t&&t.domainLocales);E.href=k||l.addBasePath(l.addLocale(h,_,t&&t.defaultLocale))}return s.default.cloneElement(n,E)};n.default=f},7190:function(e,n,a){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var a=[],r=!0,t=!1,s=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(a.push(l.value),!n||a.length!==n);r=!0);}catch(i){t=!0,s=i}finally{try{r||null==c.return||c.return()}finally{if(t)throw s}}return a}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,a=e.disabled||!l,i=t.useRef(),o=r(t.useState(!1),2),u=o[0],f=o[1],d=t.useCallback((function(e){i.current&&(i.current(),i.current=void 0),a||u||e&&e.tagName&&(i.current=function(e,n,a){var r=function(e){var n=e.rootMargin||"",a=c.get(n);if(a)return a;var r=new Map,t=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;n&&a&&n(a)}))}),e);return c.set(n,a={id:n,observer:t,elements:r}),a}(a),t=r.id,s=r.observer,l=r.elements;return l.set(e,n),s.observe(e),function(){l.delete(e),s.unobserve(e),0===l.size&&(s.disconnect(),c.delete(t))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[a,n,u]);return t.useEffect((function(){if(!l&&!u){var e=s.requestIdleCallback((function(){return f(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[u]),[d,u]};var t=a(7294),s=a(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},2168:function(e,n,a){"use strict";a.r(n);var r=a(5893),t=a(1664),s=a(7294);n.default=function(){var e=(0,s.useState)(!1),n=e[0],a=e[1],l=function(e){e.stopPropagation(),a(!n)};return(0,r.jsxs)("div",{className:"header",children:[(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light",children:[(0,r.jsx)("a",{onClick:l,className:"header-icon-bars",children:(0,r.jsx)("span",{className:"navbar-brand",children:(0,r.jsx)("i",{className:n?"fa fa-check":"fa fa-bars"})})}),(0,r.jsx)(t.default,{href:"/",passHref:!0,children:(0,r.jsx)("a",{className:"navbar-brand header-logo",children:(0,r.jsx)("img",{src:"/logo.png",alt:""})})}),(0,r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"navbar-toggler-icon"})}),(0,r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,r.jsx)("form",{className:"d-flex header-search",children:(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"T\u1eeb kho\xe1 t\xecm ki\u1ebfm"})}),(0,r.jsxs)("ul",{className:"navbar-nav mb-2 mb-lg-0 header-icon",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{href:"",children:(0,r.jsx)("i",{className:"fa fa-shopping-cart"})})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{href:"",children:(0,r.jsx)("i",{className:"fa fa-bell"})})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{href:"",children:(0,r.jsx)("i",{className:"fa fa-user"})})})]})]})]})}),(0,r.jsxs)("div",{className:"nav-lists-category ".concat(n?"active":""),children:[(0,r.jsxs)("div",{className:"title",children:[(0,r.jsx)("span",{children:"Danh m\u1ee5c"}),(0,r.jsx)("span",{className:"close-nav",onClick:l,children:(0,r.jsx)("i",{className:"fa fa-times"})})]}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:"",children:[(0,r.jsx)("img",{src:"/c1.png",alt:""}),(0,r.jsx)("span",{children:"Danh m\u1ee5c 1"})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:"",children:[(0,r.jsx)("img",{src:"/c2.png",alt:""}),(0,r.jsx)("span",{children:"Danh m\u1ee5c 2"})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:"",className:"active",children:[(0,r.jsx)("img",{src:"/c3.png",alt:""}),(0,r.jsx)("span",{children:"Danh m\u1ee5c 3"})]})})]})]})]})}},1664:function(e,n,a){e.exports=a(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=5467,e(e.s=n);var n}));var n=e.O();_N_E=n}]);