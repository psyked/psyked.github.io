webpackJsonp([0x67ef26645b2a,60335399758886],{115:function(e,t){e.exports={layoutContext:{}}},216:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=n(3),a=o(u),l=n(222),f=o(l),i=n(115),c=o(i);t.default=function(e){return a.default.createElement(f.default,r({},e,c.default))},e.exports=t.default},1696:function(e,t){},220:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(3),u=o(r),a=function(e){return u.default.createElement("footer",{id:"footer"})};t.default=a,e.exports=t.default},221:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(3),u=o(r),a=n(12),l=o(a),f=function(e){return u.default.createElement("header",{id:"header",className:"alt"},u.default.createElement(l.default,{to:"/",className:"logo"},"Home"),u.default.createElement(l.default,{to:"/blog/",className:"logo"},"Blog"))};f.propTypes={onToggleMenu:u.default.PropTypes.func},t.default=f,e.exports=t.default},222:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(3),f=o(l),i=n(22),c=o(i),s=n(12);n(1696);var d=n(221),p=o(d),m=n(220),h=o(m),y=function(e){function t(n){r(this,t);var o=u(this,e.call(this,n));return o.state={loading:"is-loading"},o}return a(t,e),t.prototype.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.prototype.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.prototype.render=function(){var e=this.props.children;return f.default.createElement("div",{className:"body "+this.state.loading},f.default.createElement(c.default,null,f.default.createElement("link",{rel:"stylesheet",href:(0,s.withPrefix)("skel.css")})),f.default.createElement(p.default,null),f.default.createElement("div",{id:"wrapper"},f.default.createElement("section",{id:"main"},f.default.createElement("section",{id:"one"},f.default.createElement("div",{className:"inner"},e(),f.default.createElement(h.default,null))))))},t}(f.default.Component);y.propTypes={children:f.default.PropTypes.func},t.default=y,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-9a8274731d7d975556be.js.map