(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return p});n(84),n(60),n(35),n(446),n(448);var a=n(7),r=n.n(a),o=n(0),l=n.n(o),i=n(33),c=n.n(i),s=n(192),u=n.n(s),m=n(196),d=(new Date).getFullYear(),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.allMarkdownRemark.edges,n=e.site.siteMetadata,a=n.title,r=n.description,o=t.map(function(e){return e.node}).reduce(function(e,t,n){var a=new Date(t.frontmatter.date).getFullYear();return e[a]||(e[a]={year:a,posts:[]}),e[a].posts.push(t),e},{});return l.a.createElement(m.a,null,l.a.createElement("div",{className:"bodyContent"},l.a.createElement(u.a,{htmlAttributes:{lang:"en"}},l.a.createElement("title",null,a),l.a.createElement("meta",{name:"description",content:r})),l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Recent Blog Posts")),l.a.createElement("h3",null,"Posts from ",d),l.a.createElement("ul",null,t.filter(function(e){return!!e.node.frontmatter.date}).filter(function(e){return new Date(e.node.frontmatter.date)>new Date(d+"-01-01")}).map(function(e){return l.a.createElement("li",{key:e.node.id},l.a.createElement(c.a,{to:e.node.frontmatter.path},e.node.frontmatter.title," (",e.node.frontmatter.date,")"))})),l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Blog Post Archive")),l.a.createElement("aside",{className:"box"},l.a.createElement("p",null,"This is a curated collection of published articles written by myself. Some legacy blog posts that lack substantial unique content have been culled. Some articles are copies that were originally published elsewhere. Formatting may have changed and assets or external resources may have been adversely affected by the passage of time and the evolution of technology.")),Object.keys(o).filter(function(e){return parseInt(e,10)<d}).sort(function(e,t){return t-e}).map(function(e){var t=o[e],n=t.year,a=t.posts;return l.a.createElement("section",{key:n},l.a.createElement("h3",null,"Posts from ",n),l.a.createElement("ul",{key:n},a.filter(function(e){return!!e.frontmatter.date}).filter(function(e){return new Date(e.frontmatter.date)<new Date(d+"-01-01")}).map(function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(c.a,{to:e.frontmatter.path},e.frontmatter.title," (",e.frontmatter.date,")"))})))})))},t}(l.a.Component);t.default=f;var p="3795380931"},193:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(33),l=n.n(o),i=n(197),c=(n(203),i.a.header.withConfig({displayName:"Header",componentId:"sc-9dymkm-0"})(["background:hsl(240,14%,19%);border-bottom:1px solid hsl(240,14%,99%);padding:0.5em;position:sticky;top:0;z-index:100;"])),s=Object(i.a)(l.a).withConfig({displayName:"Header__MenuLink",componentId:"sc-9dymkm-1"})(["margin-right:0.5em;color:hsl(240,14%,99%);padding:0.4em;margin-left:-0.4em;position:relative;&.active{background-color:hsl(346,88%,52%);&::after{top:100%;left:0%;border:solid transparent;content:'';height:0;width:0;position:absolute;pointer-events:none;border-color:hsla(346,88%,52%,0);border-top-color:hsl(346,88%,52%);border-left-color:hsl(346,88%,52%);border-width:0.25em;}}"]);t.a=function(e){return r.a.createElement(c,null,r.a.createElement("nav",{className:"bodyContent"},r.a.createElement(s,{to:"/",activeClassName:"active",exact:!0},"Home"),r.a.createElement(s,{to:"/blog/",activeClassName:"active"},"Blog Archive"),r.a.createElement(s,{to:"/speaking/",activeClassName:"active"},"Public Speaking")))}},194:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("footer",{id:"footer"})}},196:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),l=n.n(o),i=n(4),c=n.n(i),s=n(192),u=n.n(s),m=n(193),d=n(194),f=(n(204),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement("div",null,l.a.createElement(u.a,{htmlAttributes:{lang:"en"}}),l.a.createElement(m.a,null),l.a.createElement("main",null,e),l.a.createElement(d.a,null))},t}(l.a.Component));f.propTypes={children:c.a.func},t.a=f},446:function(e,t,n){var a=n(25),r=n(34);n(447)("keys",function(){return function(e){return r(a(e))}})},447:function(e,t,n){var a=n(11),r=n(19),o=n(18);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],l={};l[e]=t(n),a(a.S+a.F*o(function(){n(1)}),"Object",l)}},448:function(e,t,n){"use strict";var a=n(11),r=n(27),o=n(25),l=n(18),i=[].sort,c=[1,2,3];a(a.P+a.F*(l(function(){c.sort(void 0)})||!l(function(){c.sort(null)})||!n(449)(i)),"Array",{sort:function(e){return void 0===e?i.call(o(this)):i.call(o(this),r(e))}})},449:function(e,t,n){"use strict";var a=n(18);e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-783e14e7d71230abc585.js.map