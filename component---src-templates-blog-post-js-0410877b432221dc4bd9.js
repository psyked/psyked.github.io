webpackJsonp([0x620f737b6699],{1705:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(1720),a=n(1721),i=n(1722),u=n(1723),c=n(1724);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=u,r.prototype.set=c,t.exports=r},1706:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(1728),a=n(1729),i=n(1730),u=n(1731),c=n(1732);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=u,r.prototype.set=c,t.exports=r},1707:function(t,e,n){var r=n(209),o=n(55),a=r(o,"Map");t.exports=a},1708:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(1733),a=n(1734),i=n(1735),u=n(1736),c=n(1737);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=u,r.prototype.set=c,t.exports=r},29:function(t,e,n){var r=n(55),o=r.Symbol;t.exports=o},125:function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}t.exports=n},81:function(t,e,n){function r(t,e){for(var n=t.length;n--;)if(o(t[n][0],e))return n;return-1}var o=n(1744);t.exports=r},1711:function(t,e,n){function r(t,e){e=o(e,t);for(var n=0,r=e.length;null!=t&&n<r;)t=t[a(e[n++])];return n&&n==r?t:void 0}var o=n(1714),a=n(1740);t.exports=r},82:function(t,e,n){function r(t){return null==t?void 0===t?c:u:l&&l in Object(t)?a(t):i(t)}var o=n(29),a=n(128),i=n(129),u="[object Null]",c="[object Undefined]",l=o?o.toStringTag:void 0;t.exports=r},1712:function(t,e,n){function r(t){if(!i(t)||a(t))return!1;var e=o(t)?v:l;return e.test(u(t))}var o=n(1746),a=n(1727),i=n(210),u=n(1741),c=/[\\^$.*+?()[\]{}|]/g,l=/^\[object .+?Constructor\]$/,s=Function.prototype,f=Object.prototype,p=s.toString,d=f.hasOwnProperty,v=RegExp("^"+p.call(d).replace(c,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},126:function(t,e,n){function r(t){if("string"==typeof t)return t;if(i(t))return a(t,r)+"";if(u(t))return s?s.call(t):"";var e=t+"";return"0"==e&&1/t==-c?"-0":e}var o=n(29),a=n(125),i=n(56),u=n(57),c=1/0,l=o?o.prototype:void 0,s=l?l.toString:void 0;t.exports=r},1714:function(t,e,n){function r(t,e){return o(t)?t:a(t,e)?[t]:i(u(t))}var o=n(56),a=n(1725),i=n(1739),u=n(85);t.exports=r},1715:function(t,e,n){var r=n(55),o=r["__core-js_shared__"];t.exports=o},127:function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},83:function(t,e,n){function r(t,e){var n=t.__data__;return o(e)?n["string"==typeof e?"string":"hash"]:n.map}var o=n(1726);t.exports=r},209:function(t,e,n){function r(t,e){var n=a(t,e);return o(n)?n:void 0}var o=n(1712),a=n(1718);t.exports=r},128:function(t,e,n){function r(t){var e=i.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[c]=n:delete t[c]),o}var o=n(29),a=Object.prototype,i=a.hasOwnProperty,u=a.toString,c=o?o.toStringTag:void 0;t.exports=r},1718:function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},1720:function(t,e,n){function r(){this.__data__=o?o(null):{},this.size=0}var o=n(84);t.exports=r},1721:function(t,e){function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n},1722:function(t,e,n){function r(t){var e=this.__data__;if(o){var n=e[t];return n===a?void 0:n}return u.call(e,t)?e[t]:void 0}var o=n(84),a="__lodash_hash_undefined__",i=Object.prototype,u=i.hasOwnProperty;t.exports=r},1723:function(t,e,n){function r(t){var e=this.__data__;return o?void 0!==e[t]:i.call(e,t)}var o=n(84),a=Object.prototype,i=a.hasOwnProperty;t.exports=r},1724:function(t,e,n){function r(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=o&&void 0===e?a:e,this}var o=n(84),a="__lodash_hash_undefined__";t.exports=r},1725:function(t,e,n){function r(t,e){if(o(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!a(t))||(u.test(t)||!i.test(t)||null!=e&&t in Object(e))}var o=n(56),a=n(57),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;t.exports=r},1726:function(t,e){function n(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=n},1727:function(t,e,n){function r(t){return!!a&&a in t}var o=n(1715),a=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=r},1728:function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},1729:function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():i.call(e,n,1),--this.size,!0}var o=n(81),a=Array.prototype,i=a.splice;t.exports=r},1730:function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);return n<0?void 0:e[n][1]}var o=n(81);t.exports=r},1731:function(t,e,n){function r(t){return o(this.__data__,t)>-1}var o=n(81);t.exports=r},1732:function(t,e,n){function r(t,e){var n=this.__data__,r=o(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var o=n(81);t.exports=r},1733:function(t,e,n){function r(){this.size=0,this.__data__={hash:new o,map:new(i||a),string:new o}}var o=n(1705),a=n(1706),i=n(1707);t.exports=r},1734:function(t,e,n){function r(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}var o=n(83);t.exports=r},1735:function(t,e,n){function r(t){return o(this,t).get(t)}var o=n(83);t.exports=r},1736:function(t,e,n){function r(t){return o(this,t).has(t)}var o=n(83);t.exports=r},1737:function(t,e,n){function r(t,e){var n=o(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var o=n(83);t.exports=r},1738:function(t,e,n){function r(t){var e=o(t,function(t){return n.size===a&&n.clear(),t}),n=e.cache;return e}var o=n(1748),a=500;t.exports=r},84:function(t,e,n){var r=n(209),o=r(Object,"create");t.exports=o},129:function(t,e){function n(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=n},55:function(t,e,n){var r=n(127),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},1739:function(t,e,n){var r=n(1738),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,function(t,n,r,o){e.push(r?o.replace(a,"$1"):n||t)}),e});t.exports=i},1740:function(t,e,n){function r(t){if("string"==typeof t||o(t))return t;var e=t+"";return"0"==e&&1/t==-a?"-0":e}var o=n(57),a=1/0;t.exports=r},1741:function(t,e){function n(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var r=Function.prototype,o=r.toString;t.exports=n},1744:function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},1745:function(t,e,n){function r(t,e,n){var r=null==t?void 0:o(t,e);return void 0===r?n:r}var o=n(1711);t.exports=r},56:function(t,e){var n=Array.isArray;t.exports=n},1746:function(t,e,n){function r(t){if(!a(t))return!1;var e=o(t);return e==u||e==c||e==i||e==l}var o=n(82),a=n(210),i="[object AsyncFunction]",u="[object Function]",c="[object GeneratorFunction]",l="[object Proxy]";t.exports=r},210:function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},130:function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},57:function(t,e,n){function r(t){return"symbol"==typeof t||a(t)&&o(t)==i}var o=n(82),a=n(130),i="[object Symbol]";t.exports=r},1748:function(t,e,n){function r(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(a);var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(r.Cache||o),n}var o=n(1708),a="Expected a function";r.Cache=o,t.exports=r},85:function(t,e,n){function r(t){return null==t?"":o(t)}var o=n(126);t.exports=r},271:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(3),a=r(o),i=function(t){var e=t.title,n=t.lead,r=t.image;return a.default.createElement("header",{style:{background:"grey",backgroundImage:"url("+r+")",backgroundSize:"cover",backgroundPosition:"center",position:"relative"}},a.default.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",background:"rgba(0,0,0,.6)"}}),a.default.createElement("div",{style:{color:"white",position:"relative",padding:"6em 2em 2em"}},a.default.createElement("header",null,a.default.createElement("h1",null,e)),n&&a.default.createElement("div",null,a.default.createElement("p",null,n))))};e.default=i,t.exports=e.default},274:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(3),a=r(o),i=n(7),u=r(i),c=n(19),l=r(c),s=function(t){var e=t.tags;return e?a.default.createElement("aside",null,"Tagged as:",e.map(function(t){var e=t.replace(/\W/gi,"-").toLowerCase();return a.default.createElement("span",{key:t},a.default.createElement(l.default,{to:"/tag/"+e},t))})):a.default.createElement("aside",null)};s.propTypes={tags:u.default.arrayOf(u.default.string)},e.default=s,t.exports=e.default},275:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(3),a=r(o),i=n(19),u=r(i),c=function(t){var e=t.tiles;return a.default.createElement("aside",{style:{width:"100%",height:"calc(33vw - 2em)",display:"flex",flexDirection:"row",justifyContent:"stretch"}},e&&e.filter(function(t){return!!t}).map(function(t,e){return a.default.createElement("section",{key:e,style:{display:"flex",flex:"1",padding:"2em",alignItems:"center",backgroundImage:"url("+t.frontmatter.image+")"}},a.default.createElement(u.default,{to:t.frontmatter.path},t.frontmatter.title))}))};e.default=c,t.exports=e.default},280:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.pageQuery=void 0;var u=n(3),c=r(u),l=n(62),s=r(l),f=n(19),p=(r(f),n(1745)),d=r(p),v=n(271),h=r(v),_=n(275),y=r(_),x=n(274),g=r(x),m=function(t){function e(){return o(this,e),a(this,t.apply(this,arguments))}return i(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark||{},e=t||{},n=e.frontmatter;n=void 0===n?{}:n;var r=n.title,o=n.tags,a=n.url,i=n.image,u=n.description,l=(0,d.default)(this.props,"data.site.siteMetadata.title"),f=this.props.pathContext,p=f.next,v=f.prev;return c.default.createElement("div",null,c.default.createElement(s.default,{title:r+" | "+l}),c.default.createElement(h.default,{title:r,lead:u,image:i}),c.default.createElement("div",{style:{padding:"1em 2em"},dangerouslySetInnerHTML:{__html:t.html}}),c.default.createElement(g.default,{tags:o}),a&&c.default.createElement("div",{className:"box"},"This article was originally published at ",c.default.createElement("a",{href:a},a)),c.default.createElement(y.default,{tiles:[v,p]}))},e}(c.default.Component);e.default=m;e.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-blog-post-js-0410877b432221dc4bd9.js.map