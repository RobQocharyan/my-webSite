/*! For license information please see 39.d6bc18f4.chunk.js.LICENSE.txt */
(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[39],{3039:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return H}});var t=r(5671),o=r(3144),i=r(136),u=r(2882),s=r(8687),l=r(6933),a=r(2791),c=r(5987),f=r(4942),p=r(885),g="Paginator_paginator__CUDH5",h="Paginator_selectedPage__7dQ9F",d="Paginator_pageNumber__0d1+p",v=r(1694),y=r.n(v),m=r(184),P=function(n){for(var e=n.totalItemCount,r=n.pageSize,t=n.currentPage,o=n.onPageChanged,i=n.portionSize,u=void 0===i?10:i,s=Math.ceil(e/r),l=[],c=1;c<=s;c++)l.push(c);var v=Math.ceil(s/u),P=(0,a.useState)(1),j=(0,p.Z)(P,2),w=j[0],x=j[1],C=(w-1)*u+1,b=w*u;return(0,m.jsxs)("div",{className:g,children:[w>1&&(0,m.jsx)("button",{onClick:function(){x(w-1)},children:"PREV"}),l.filter((function(n){return n>=C&&n<=b})).map((function(n){return(0,m.jsx)("span",{className:y()((0,f.Z)({},h,t===n),d),onClick:function(e){o(n)},children:n},n)})),v>w&&(0,m.jsx)("button",{onClick:function(){x(w+1)},children:"NEXT"})]})},j=r(3504),w=r(7712),x="Users_userPhoto__rAGoM",C=function(n){var e=n.user,r=n.followingInProgress,t=n.unfollow,o=n.follow;return(0,m.jsxs)("div",{children:[(0,m.jsxs)("span",{children:[(0,m.jsx)("div",{children:(0,m.jsx)(j.OL,{to:"/Profile/"+e.id,children:(0,m.jsx)("img",{src:null!=e.photos.small?e.photos.small:w,alt:"HI",className:x})})}),(0,m.jsx)("div",{children:e.followed?(0,m.jsx)("button",{disabled:r.some((function(n){return n===e.id})),onClick:function(){t(e.id)},children:"UnFollow"}):(0,m.jsx)("button",{disabled:r.some((function(n){return n===e.id})),onClick:function(){o(e.id)},children:"Follow"})})]}),(0,m.jsxs)("span",{children:[(0,m.jsxs)("span",{children:[(0,m.jsx)("div",{children:e.name}),(0,m.jsx)("div",{children:e.status})]}),(0,m.jsxs)("span",{children:[(0,m.jsx)("div",{children:"user.location.country"}),(0,m.jsx)("div",{children:"user.location.city"})]})]})]})},b=["currentPage","totalItemCount","pageSize","onPageChanged","users","followingInProgress","unfollow","follow"],S=function(n){var e=n.currentPage,r=n.totalItemCount,t=n.pageSize,o=n.onPageChanged,i=n.users,u=n.followingInProgress,s=n.unfollow,l=n.follow;(0,c.Z)(n,b);return(0,m.jsxs)("div",{children:[(0,m.jsx)(P,{currentPage:e,onPageChanged:o,totalItemCount:r,pageSize:t}),(0,m.jsx)("div",{children:i.map((function(n){return(0,m.jsx)(C,{user:n,followingInProgress:u,unfollow:s,follow:l},n.id)}))})]})},k=r(9394),I=r(7781),z="NOT_FOUND";var _=function(n,e){return n===e};function O(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,o=void 0===t?_:t,i=r.maxSize,u=void 0===i?1:i,s=r.resultEqualityCheck,l=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(o),a=1===u?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:z},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return z}return{get:t,put:function(e,o){t(e)===z&&(r.unshift({key:e,value:o}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(u,l);function c(){var e=a.get(arguments);if(e===z){if(e=n.apply(null,arguments),s){var r=a.getEntries(),t=r.find((function(n){return s(n.value,e)}));t&&(e=t.value)}a.put(arguments,e)}return e}return c.clearCache=function(){return a.clear()},c}function Z(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function A(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var i,u=0,s={memoizeOptions:void 0},l=t.pop();if("object"===typeof l&&(s=l,l=t.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var a=s,c=a.memoizeOptions,f=void 0===c?r:c,p=Array.isArray(f)?f:[f],g=Z(t),h=n.apply(void 0,[function(){return u++,l.apply(null,arguments)}].concat(p)),d=n((function(){for(var n=[],e=g.length,r=0;r<e;r++)n.push(g[r].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(d,{resultFunc:l,memoizedResultFunc:h,dependencies:g,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),d};return o}var F=A(O),E=F((function(n){return n.usersPage.users}),(function(n,e){return n.filter((function(n){return!0}))})),N=function(n){return n.usersPage.pageSize},U=function(n){return n.usersPage.totalUsersCount},D=function(n){return n.usersPage.currentPage},q=function(n){return n.usersPage.isFetching},M=function(n){return n.usersPage.followingInProgress},R=function(n){(0,i.Z)(r,n);var e=(0,u.Z)(r);function r(){var n;(0,t.Z)(this,r);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return(n=e.call.apply(e,[this].concat(i))).onPageChanged=function(e){var r=n.props.pageSize;n.props.getUsers(e,r)},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){var n=this.props,e=n.currentPage,r=n.pageSize;this.props.getUsers(e,r)}},{key:"render",value:function(){return(0,m.jsxs)(m.Fragment,{children:[this.props.isFetching?(0,m.jsx)(k.Z,{}):null,(0,m.jsx)(S,{totalItemCount:this.props.totalItemCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress})]})}}]),r}(a.Component),H=(0,I.qC)((0,s.$j)((function(n){return{users:E(n),pageSize:N(n),totalItemCount:U(n),currentPage:D(n),isFetching:q(n),followingInProgress:M(n)}}),{follow:l.ZN,unfollow:l.fv,setCurrentPage:l.D4,getUsers:l.D7}))(R)},1694:function(n,e){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var n=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)n.push(r);else if(Array.isArray(r)){if(r.length){var u=o.apply(null,r);u&&n.push(u)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var s in r)t.call(r,s)&&r[s]&&n.push(s);else n.push(r.toString())}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(n.exports=r)}()},7712:function(n,e,r){"use strict";n.exports=r.p+"static/media/user.79d205e5316b8cfc6190.jpg"},5987:function(n,e,r){"use strict";r.d(e,{Z:function(){return o}});var t=r(3366);function o(n,e){if(null==n)return{};var r,o,i=(0,t.Z)(n,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(o=0;o<u.length;o++)r=u[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}}}]);
//# sourceMappingURL=39.d6bc18f4.chunk.js.map