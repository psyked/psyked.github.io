(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{233:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});a(24),a(25),a(13),a(50),a(148);var n=a(0),r=a.n(n),o=a(70),i=a.n(o),l=a(242),c=a.n(l),s=a(243);var m=(new Date).getFullYear(),p=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data,t=e.allMarkdownRemark.edges,a=e.site.siteMetadata,n=a.title,o=a.description,l=t.map(function(e){return e.node}).reduce(function(e,t,a){var n=new Date(t.frontmatter.date).getFullYear();return e[n]||(e[n]={year:n,posts:[]}),e[n].posts.push(t),e},{});return r.a.createElement(s.a,null,r.a.createElement("div",{className:"bodyContent"},r.a.createElement(c.a,{htmlAttributes:{lang:"en"}},r.a.createElement("title",null,n),r.a.createElement("meta",{name:"description",content:o})),r.a.createElement("header",{className:"major"},r.a.createElement("h2",null,"Recent Blog Posts")),r.a.createElement("h3",null,"Posts from ",m),r.a.createElement("ul",null,t.filter(function(e){return!!e.node.frontmatter.date}).filter(function(e){return new Date(e.node.frontmatter.date)>new Date(m+"-01-01")}).map(function(e){return r.a.createElement("li",{key:e.node.id},r.a.createElement(i.a,{to:e.node.frontmatter.path},e.node.frontmatter.title," (",e.node.frontmatter.date,")"))})),r.a.createElement("header",{className:"major"},r.a.createElement("h2",null,"Blog Post Archive")),r.a.createElement("aside",{className:"box"},r.a.createElement("p",null,"This is a curated collection of published articles written by myself. Some legacy blog posts that lack substantial unique content have been culled. Some articles are copies that were originally published elsewhere. Formatting may have changed and assets or external resources may have been adversely affected by the passage of time and the evolution of technology.")),Object.keys(l).filter(function(e){return parseInt(e,10)<m}).sort(function(e,t){return t-e}).map(function(e){var t=l[e],a=t.year,n=t.posts;return r.a.createElement("section",{key:a},r.a.createElement("h3",null,"Posts from ",a),r.a.createElement("ul",{key:a},n.filter(function(e){return!!e.frontmatter.date}).filter(function(e){return new Date(e.frontmatter.date)<new Date(m+"-01-01")}).map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(i.a,{to:e.frontmatter.path},e.frontmatter.title," (",e.frontmatter.date,")"))})))})))},n}(r.a.Component);t.default=p;var d="3813560791"},243:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(242),i=a.n(o),l=a(70),c=a.n(l),s=a(241),m=a(251);var p=s.a.label.withConfig({displayName:"ThemeSwitch__SwitchWrapper",componentId:"sc-1gyffmx-0"})(["background-color:#ddd;border-radius:18px;cursor:pointer;display:inline-block;height:20px;padding:3px;position:relative;vertical-align:top;width:56px;box-sizing:content-box;"]),d=s.a.span.withConfig({displayName:"ThemeSwitch__Label",componentId:"sc-1gyffmx-1"})(["background:#ffd700 none repeat scroll 0 0;border-radius:inherit;display:block;font-size:10px;height:inherit;position:relative;text-transform:uppercase;transition:all 0.15s ease-out 0s;::before,::after{line-height:1;margin-top:-0.5em;position:absolute;top:50%;transition:inherit;}"]),u=s.a.span.withConfig({displayName:"ThemeSwitch__Handle",componentId:"sc-1gyffmx-2"})(["background-color:#fff;border-radius:10px;height:18px;left:4px;position:absolute;top:4px;transition:left 0.15s ease-out 0s;width:18px;::before{background-color:#f9f9f9;border-radius:6px;content:'';height:12px;left:50%;margin:-6px 0 0 -6px;position:absolute;top:50%;width:12px;}"]),f=s.a.input.withConfig({displayName:"ThemeSwitch__Input",componentId:"sc-1gyffmx-3"})(["left:0;opacity:0;position:absolute;top:0;:checked ~ ","{background:#eceeef none repeat scroll 0 0;}:checked ~ ","{left:40px;}"],d,u),h=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(m.ThemeToggler,null,function(e){var t=e.theme,a=e.toggleTheme;return r.a.createElement(p,{className:"switch"},r.a.createElement(f,{type:"checkbox",onChange:function(e){return a(e.target.checked?"dark":"light")},checked:"dark"===t}),r.a.createElement(d,null),r.a.createElement(u,null))})},n}(r.a.Component),g=s.a.header.withConfig({displayName:"Header",componentId:"sc-9dymkm-0"})(["max-width:60em;margin:0 auto;position:sticky;z-index:100;display:block;margin-bottom:-68px;padding-top:0.5em;"]),y=s.a.nav.withConfig({displayName:"Header__Nav",componentId:"sc-9dymkm-1"})(["border-radius:0.3em;background:hsl(240,14%,19%);padding:0.5em 0.2em 0.5em 0.7em;top:0;display:inline-block;border:1px solid var(--text-color);"]),b=Object(s.a)(c.a).withConfig({displayName:"Header__MenuLink",componentId:"sc-9dymkm-2"})(["margin-right:0.5em;padding:0.4em;margin-left:-0.4em;&,a{&,:link,:active,:visited,:hover{color:hsl(240,14%,99%);}}&:last-child{margin-right:0;}&.active{border-radius:0.15em;background-color:hsl(346,88%,52%);}"]),v=s.a.div.withConfig({displayName:"Header__Wrapper",componentId:"sc-9dymkm-3"})(["display:flex;justify-content:space-between;align-items:center;padding:0 1em;"]),E=function(e){return r.a.createElement(g,null,r.a.createElement(v,null,r.a.createElement(y,null,r.a.createElement(b,{to:"/",activeClassName:"active",exact:"true"},"Home"),r.a.createElement(b,{to:"/blog/",activeClassName:"active"},"Blog Archive"),r.a.createElement(b,{to:"/speaking/",activeClassName:"active"},"Public Speaking")),r.a.createElement(h,null)))},k=function(e){return r.a.createElement("footer",{id:"footer"})};a(252);var w=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{htmlAttributes:{lang:"en"}}),r.a.createElement(E,null),r.a.createElement("main",null,e),r.a.createElement(k,null))},n}(r.a.Component);t.a=w}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-e828f8abe81908b4bbcd.js.map