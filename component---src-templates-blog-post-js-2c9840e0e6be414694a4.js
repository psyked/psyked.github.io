(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{237:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(242),o=a.n(i),l=a(70),c=a.n(l),m=a(349),s=a.n(m),p=a(279),d=(a(336),a(280)),u=a.n(d),h=a(266),g=a(495),f=a.n(g),E=function(e){var t=e.tiles;return r.a.createElement("aside",{className:""+f.a.tileContainer},t&&t.filter(function(e){return!!e}).map(function(e,t){return r.a.createElement("section",{key:t,className:f.a.tile},r.a.createElement(c.a,{to:e.frontmatter.path},e.frontmatter.image&&e.frontmatter.image.childImageSharp&&r.a.createElement("aside",{className:f.a.imageContainer},r.a.createElement(u.a,{sizes:e.frontmatter.image.childImageSharp.sizes,outerWrapperClassName:f.a.wrapper,className:f.a.wrapper})),r.a.createElement("div",{className:f.a.blackout}),r.a.createElement("h3",{className:f.a.link},e.frontmatter.title),r.a.createElement("p",{className:f.a.description},e.frontmatter.description),r.a.createElement("p",{className:f.a.date},Object(h.format)(new Date(e.frontmatter.date),"DD MMM YYYY"))))}))},b=(a(14),a(496)),y=a.n(b),v=function(e){var t=e.tags;return t?r.a.createElement("aside",null,r.a.createElement("span",{className:y.a.tagsLabel},"Tagged as:"),t.map(function(e,a){var n=e.replace(/\W/gi,"-").toLowerCase();return r.a.createElement("span",{key:e,className:y.a.tag},r.a.createElement(c.a,{to:"/tag/"+n},e),a!==t.length-1&&r.a.createElement("span",null,", "))})):r.a.createElement("aside",null)},w=a(497),k=a.n(w),_=function(e){var t=e.url;return t?r.a.createElement("aside",{className:k.a.root},"This article was originally published at ",r.a.createElement("a",{href:t},t)):r.a.createElement("aside",null)},x=a(243);a.d(t,"pageQuery",function(){return C});var N=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.markdownRemark||{},t=(e||{}).frontmatter,a=(t=void 0===t?{}:t).title,n=t.tags,i=t.url,l=t.image,c=t.description,m=(e||{}).frontmatter,d=void 0===m?{}:m,u=s()(this.props,"data.site.siteMetadata.title"),h=this.props.pageContext,g=h.next,f=h.prev;return r.a.createElement(x.a,null,r.a.createElement(o.a,{title:a+" | "+u,htmlAttributes:{lang:"en"}},r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:site",content:"@psyked"}),r.a.createElement("meta",{name:"twitter:creator",content:d.creator}),r.a.createElement("meta",{name:"twitter:title",content:a}),r.a.createElement("meta",{name:"twitter:description",content:c}),l&&l.childImageSharp&&r.a.createElement("meta",{name:"twitter:image",content:l.childImageSharp.sizes.src})),r.a.createElement(p.a,d),r.a.createElement("div",{className:"bodyContent"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),r.a.createElement("hr",{className:"endPost"}),r.a.createElement(_,{url:i}),r.a.createElement(v,{tags:n})),r.a.createElement(E,{tiles:[g,f]}))},n}(r.a.Component),C=(t.default=N,"32222268")},243:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(242),o=a.n(i),l=a(70),c=a.n(l),m=a(241),s=a(251);var p=m.a.label.withConfig({displayName:"ThemeSwitch__SwitchWrapper",componentId:"sc-1gyffmx-0"})(["background-color:#ddd;border-radius:18px;cursor:pointer;display:inline-block;height:20px;padding:3px;position:relative;vertical-align:top;width:56px;box-sizing:content-box;"]),d=m.a.span.withConfig({displayName:"ThemeSwitch__Label",componentId:"sc-1gyffmx-1"})(["background:#ffd700 none repeat scroll 0 0;border-radius:inherit;display:block;font-size:10px;height:inherit;position:relative;text-transform:uppercase;transition:all 0.15s ease-out 0s;::before,::after{line-height:1;margin-top:-0.5em;position:absolute;top:50%;transition:inherit;}"]),u=m.a.span.withConfig({displayName:"ThemeSwitch__Handle",componentId:"sc-1gyffmx-2"})(["background-color:#fff;border-radius:10px;height:18px;left:4px;position:absolute;top:4px;transition:left 0.15s ease-out 0s;width:18px;::before{background-color:#f9f9f9;border-radius:6px;content:'';height:12px;left:50%;margin:-6px 0 0 -6px;position:absolute;top:50%;width:12px;}"]),h=m.a.input.withConfig({displayName:"ThemeSwitch__Input",componentId:"sc-1gyffmx-3"})(["left:0;opacity:0;position:absolute;top:0;:checked ~ ","{background:#eceeef none repeat scroll 0 0;}:checked ~ ","{left:40px;}"],d,u),g=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(s.ThemeToggler,null,function(e){var t=e.theme,a=e.toggleTheme;return r.a.createElement(p,{className:"switch"},r.a.createElement(h,{type:"checkbox",onChange:function(e){return a(e.target.checked?"dark":"light")},checked:"dark"===t}),r.a.createElement(d,null),r.a.createElement(u,null))})},n}(r.a.Component),f=m.a.header.withConfig({displayName:"Header",componentId:"sc-9dymkm-0"})(["max-width:60em;margin:0 auto;position:sticky;z-index:100;display:block;margin-bottom:-68px;padding-top:0.5em;"]),E=m.a.nav.withConfig({displayName:"Header__Nav",componentId:"sc-9dymkm-1"})(["border-radius:0.3em;background:hsl(240,14%,19%);padding:0.5em 0.2em 0.5em 0.7em;top:0;display:inline-block;border:1px solid var(--text-color);"]),b=Object(m.a)(c.a).withConfig({displayName:"Header__MenuLink",componentId:"sc-9dymkm-2"})(["margin-right:0.5em;padding:0.4em;margin-left:-0.4em;&,a{&,:link,:active,:visited,:hover{color:hsl(240,14%,99%);}}&:last-child{margin-right:0;}&.active{border-radius:0.15em;background-color:hsl(346,88%,52%);}"]),y=m.a.div.withConfig({displayName:"Header__Wrapper",componentId:"sc-9dymkm-3"})(["display:flex;justify-content:space-between;align-items:center;padding:0 1em;"]),v=function(e){return r.a.createElement(f,null,r.a.createElement(y,null,r.a.createElement(E,null,r.a.createElement(b,{to:"/",activeClassName:"active",exact:"true"},"Home"),r.a.createElement(b,{to:"/blog/",activeClassName:"active"},"Blog Archive"),r.a.createElement(b,{to:"/speaking/",activeClassName:"active"},"Public Speaking")),r.a.createElement(g,null)))},w=function(e){return r.a.createElement("footer",{id:"footer"})};a(252);var k=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{htmlAttributes:{lang:"en"}}),r.a.createElement(v,null),r.a.createElement("main",null,e),r.a.createElement(w,null))},n}(r.a.Component);t.a=k},279:function(e,t,a){"use strict";a(24),a(25),a(13),a(50);var n=a(0),r=a.n(n),i=(a(70),a(280)),o=a.n(i),l=a(266),c=a(241);var m=c.a.header.withConfig({displayName:"Banner__Wrapper",componentId:"hibpma-0"})(["background:center center / cover hsl(240,100%,12%);position:relative;padding-top:calc(68px + 2em);padding-bottom:3em;margin-top:-1em;"]),s=c.a.aside.withConfig({displayName:"Banner__Overlay",componentId:"hibpma-1"})(["position:absolute;width:100%;height:100%;top:0px;left:0px;background:hsla(240,100%,12%,0.6);"]),p=c.a.aside.withConfig({displayName:"Banner__ImageContainer",componentId:"hibpma-2"})(["position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;}"]),d=Object(c.a)(o.a).withConfig({displayName:"Banner__ImageWrapper",componentId:"hibpma-3"})(["height:100%;"]);t.a=function(e){var t=e.title,a=e.date,n=e.description,i=e.image,o=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["title","date","description","image"]);return r.a.createElement(m,o,i&&i.childImageSharp&&r.a.createElement(p,null,r.a.createElement(d,i.childImageSharp)),r.a.createElement(s,null),r.a.createElement("div",{className:"bodyContent",style:{color:"white",position:"relative"}},!!t&&r.a.createElement("header",null,r.a.createElement("h1",null,t)),!!n&&r.a.createElement("div",null,r.a.createElement("h2",null,n)),!!a&&r.a.createElement("aside",null,"Published: ",Object(l.format)(new Date(a),"DD MMM YYYY"))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-2c9840e0e6be414694a4.js.map