webpackJsonp([0x67ef26645b2a,60335399758886],{124:function(e,t){e.exports={layoutContext:{}}},268:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(3),u=o(r),l=n(276),i=o(l),c=n(124),f=o(c);t.default=function(e){return u.default.createElement(i.default,a({},e,f.default))},e.exports=t.default},1752:function(e,t){},272:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(3),r=o(a),u=function(e){return r.default.createElement("footer",{id:"footer"})};t.default=u,e.exports=t.default},273:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(3),r=o(a),u=n(19),l=o(u),i=n(379),c=o(i),f=function(e){return r.default.createElement("header",{className:c.default.root},r.default.createElement("nav",null,r.default.createElement(l.default,{to:"/",className:c.default.menuLink,activeClassName:c.default.active,exact:!0},"Home"),r.default.createElement(l.default,{to:"/blog/",className:c.default.menuLink,activeClassName:c.default.active},"Archive")))};t.default=f,e.exports=t.default},379:function(e,t){e.exports={menuLink:"src-components----header-module---menuLink---17w_4",active:"src-components----header-module---active---2pIok",root:"src-components----header-module---root---3b321"}},276:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(3),i=o(l),c=n(62),f=o(c),s=n(19);n(1752);var d=n(273),p=o(d),m=n(272),h=o(m),v=function(e){function t(n){a(this,t);var o=r(this,e.call(this,n));return o.state={loading:"is-loading"},o}return u(t,e),t.prototype.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.prototype.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.prototype.render=function(){var e=this.props.children;return i.default.createElement("div",{className:"body "+this.state.loading},i.default.createElement(f.default,null,i.default.createElement("link",{rel:"stylesheet",href:(0,s.withPrefix)("skel.css")})),i.default.createElement(p.default,null),i.default.createElement("div",{id:"wrapper"},i.default.createElement("section",{id:"main"},i.default.createElement("section",{id:"one"},i.default.createElement("div",{className:"inner"},e(),i.default.createElement(h.default,null))))))},t}(i.default.Component);v.propTypes={children:i.default.PropTypes.func},t.default=v,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-c9f449d0336e728e8b6b.js.map