(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return d});n(286),n(532);var a=n(7),r=n.n(a),l=n(0),o=n.n(l),i=(n(33),n(192)),c=n.n(i),m=n(230),s=n(196),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.allMarkdownRemark.edges,n=e.site.siteMetadata,a=n.title,r=n.description;return o.a.createElement(s.a,null,o.a.createElement("div",{className:"bodyContent"},o.a.createElement(c.a,{htmlAttributes:{lang:"en"}},o.a.createElement("title",null,a),o.a.createElement("meta",{name:"description",content:r})),o.a.createElement("header",{className:"major"},o.a.createElement("h2",null,"Public Speaking")),t.map(function(e){var t=e.node,n=t.frontmatter,a=n.title,r=n.presentedAt,l=t.html;return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",null,o.a.createElement("header",null,o.a.createElement("h3",null,a),o.a.createElement("p",null,"Presented at: ",r.map(function(e){var t=e.name,n=e.date,a=e.link,r=e.recording;return o.a.createElement("span",null,o.a.createElement("a",{href:a},t+", "+Object(m.format)(new Date(n),"Do MMMM YYYY")),!!r&&o.a.createElement(o.a.Fragment,null," ",o.a.createElement("a",{href:r},"[View Recording]")))}))),o.a.createElement("main",{dangerouslySetInnerHTML:{__html:l}})),o.a.createElement("hr",null))})))},t}(l.Component);t.default=u;var d="389212072"},193:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(33),o=n.n(l),i=n(197),c=(n(203),i.a.header.withConfig({displayName:"Header",componentId:"sc-9dymkm-0"})(["background:hsl(240,14%,19%);border-bottom:1px solid hsl(240,14%,99%);padding:0.5em;position:sticky;top:0;z-index:100;"])),m=Object(i.a)(o.a).withConfig({displayName:"Header__MenuLink",componentId:"sc-9dymkm-1"})(["margin-right:0.5em;color:hsl(240,14%,99%);padding:0.4em;margin-left:-0.4em;position:relative;&.active{background-color:hsl(346,88%,52%);&::after{top:100%;left:0%;border:solid transparent;content:'';height:0;width:0;position:absolute;pointer-events:none;border-color:hsla(346,88%,52%,0);border-top-color:hsl(346,88%,52%);border-left-color:hsl(346,88%,52%);border-width:0.25em;}}"]);t.a=function(e){return r.a.createElement(c,null,r.a.createElement("nav",{className:"bodyContent"},r.a.createElement(m,{to:"/",activeClassName:"active",exact:!0},"Home"),r.a.createElement(m,{to:"/blog/",activeClassName:"active"},"Blog Archive"),r.a.createElement(m,{to:"/speaking/",activeClassName:"active"},"Public Speaking")))}},194:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("footer",{id:"footer"})}},196:function(e,t,n){"use strict";var a=n(7),r=n.n(a),l=n(0),o=n.n(l),i=n(4),c=n.n(i),m=n(192),s=n.n(m),u=n(193),d=n(194),p=(n(204),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(s.a,{htmlAttributes:{lang:"en"}}),o.a.createElement(u.a,null),o.a.createElement("main",null,e),o.a.createElement(d.a,null))},t}(o.a.Component));p.propTypes={children:c.a.func},t.a=p},532:function(e,t,n){var a=n(26).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||n(20)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-speaking-jsx-12d5fdec613b0ba3e8e3.js.map