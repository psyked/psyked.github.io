(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{236:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),i=a(241),o=a.n(i),l=a(351),c=a.n(l),m=a(245),s=(a(300),a(70)),d=a.n(s),p=a(247),u=a.n(p),h=a(249),g=a(576),f=a.n(g),E=function(e){var t=e.tiles;return r.a.createElement("aside",{className:""+f.a.tileContainer},t&&t.filter(function(e){return!!e}).map(function(e,t){return r.a.createElement("section",{key:t,className:f.a.tile},r.a.createElement(d.a,{to:e.frontmatter.path},e.frontmatter.image&&e.frontmatter.image.childImageSharp&&r.a.createElement("aside",{className:f.a.imageContainer},r.a.createElement(u.a,{sizes:e.frontmatter.image.childImageSharp.sizes,outerWrapperClassName:f.a.wrapper,className:f.a.wrapper})),r.a.createElement("div",{className:f.a.blackout}),r.a.createElement("h3",{className:f.a.link},e.frontmatter.title),r.a.createElement("p",{className:f.a.description},e.frontmatter.description),r.a.createElement("p",{className:f.a.date},Object(h.format)(new Date(e.frontmatter.date),"DD MMM YYYY"))))}))},v=(a(14),a(577)),b=a.n(v),y=function(e){var t=e.tags;return t?r.a.createElement("aside",null,r.a.createElement("span",{className:b.a.tagsLabel},"Tagged as:"),t.map(function(e,a){var n=e.replace(/\W/gi,"-").toLowerCase();return r.a.createElement("span",{key:e,className:b.a.tag},r.a.createElement(d.a,{to:"/tag/"+n},e),a!==t.length-1&&r.a.createElement("span",null,", "))})):r.a.createElement("aside",null)},w=a(578),k=a.n(w),x=function(e){var t=e.url;return t?r.a.createElement("aside",{className:k.a.root},"This article was originally published at ",r.a.createElement("a",{href:t},t)):r.a.createElement("aside",null)},_=a(242);a.d(t,"pageQuery",function(){return N});var C=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.markdownRemark||{},t=(e||{}).frontmatter,a=(t=void 0===t?{}:t).title,n=t.tags,i=t.url,l=t.image,s=t.description,d=(e||{}).frontmatter,p=void 0===d?{}:d,u=c()(this.props,"data.site.siteMetadata.title"),h=c()(p,"image_credit"),g=this.props.pageContext,f=g.next,v=g.prev;return r.a.createElement(_.a,null,r.a.createElement(o.a,{title:a+" | "+u,htmlAttributes:{lang:"en"}},r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:site",content:"@psyked"}),r.a.createElement("meta",{name:"twitter:creator",content:p.creator}),r.a.createElement("meta",{name:"twitter:title",content:a}),r.a.createElement("meta",{name:"twitter:description",content:s}),l&&l.childImageSharp&&r.a.createElement("meta",{name:"twitter:image",content:l.childImageSharp.sizes.src})),r.a.createElement(m.a,Object.assign({},p,{imageCreditMarkdown:h})),r.a.createElement("div",{className:"bodyContainer"},r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:"bodyContent"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),r.a.createElement("hr",{className:"endPost"}),r.a.createElement(x,{url:i}),r.a.createElement(y,{tags:n})))),r.a.createElement(E,{tiles:[f,v]}))},n}(r.a.Component),N=(t.default=C,"1757975163")},242:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(241),o=a.n(i),l=a(70),c=a.n(l),m=a(240),s=a(253);var d=m.a.label.withConfig({displayName:"ThemeSwitch__SwitchWrapper",componentId:"sc-1gyffmx-0"})(["background-color:white;border-radius:18px;cursor:pointer;display:inline-block;height:20px;padding:3px;position:relative;vertical-align:top;width:56px;box-sizing:content-box;"]),p=m.a.span.withConfig({displayName:"ThemeSwitch__Label",componentId:"sc-1gyffmx-1"})(["background:goldenrod none repeat scroll 0 0;border-radius:inherit;display:block;font-size:10px;height:inherit;position:relative;text-transform:uppercase;transition:all 0.15s ease-out 0s;::before,::after{line-height:1;margin-top:-0.5em;position:absolute;top:50%;transition:inherit;}"]),u=m.a.span.withConfig({displayName:"ThemeSwitch__Handle",componentId:"sc-1gyffmx-2"})(["background-color:white;border-radius:10px;height:18px;left:4px;position:absolute;top:4px;transition:left 0.15s ease-out 0s;width:18px;::before{border-radius:6px;content:'';height:12px;left:50%;margin:-6px 0 0 -6px;position:absolute;top:50%;width:12px;}"]),h=m.a.input.withConfig({displayName:"ThemeSwitch__Input",componentId:"sc-1gyffmx-3"})(["left:0;opacity:0;position:absolute;top:0;:checked ~ ","{background:black none repeat scroll 0 0;}:checked ~ ","{left:37px;}"],p,u),g=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(s.ThemeToggler,null,function(e){var t=e.theme,a=e.toggleTheme;return r.a.createElement(d,{className:"switch"},r.a.createElement(h,{type:"checkbox",onChange:function(e){return a(e.target.checked?"dark":"light")},checked:"dark"===t}),r.a.createElement(p,null),r.a.createElement(u,null))})},n}(r.a.Component),f=m.a.header.withConfig({displayName:"Header",componentId:"sc-9dymkm-0"})(["display:block;background:hsl(240,14%,19%);padding-left:calc((100vw - 60em) / 2);padding-right:calc((100vw - 60em) / 2);"]),E=m.a.nav.withConfig({displayName:"Header__Nav",componentId:"sc-9dymkm-1"})(["max-width:60em;margin:0 auto;padding:0.5em 0.2em 0.5em 0.7em;width:100%;display:block;"]),v=Object(m.a)(c.a).withConfig({displayName:"Header__MenuLink",componentId:"sc-9dymkm-2"})(["margin-right:0.5em;padding:0.4em;&,a{&,:link,:active,:visited,:hover{color:hsl(240,14%,99%);}}&:last-child{margin-right:0;}&.active{border-radius:0.15em;background-color:hsl(346,88%,52%);}"]),b=m.a.div.withConfig({displayName:"Header__Wrapper",componentId:"sc-9dymkm-3"})(["display:flex;justify-content:space-between;align-items:center;padding:0 1em;"]),y=function(e){return r.a.createElement(f,null,r.a.createElement(b,null,r.a.createElement(E,null,r.a.createElement(v,{to:"/",activeClassName:"active",exact:"true"},"Home"),r.a.createElement(v,{to:"/blog/",activeClassName:"active"},"Blog Archive"),r.a.createElement(v,{to:"/projects/",activeClassName:"active"},"Projects"),r.a.createElement(v,{to:"/speaking/",activeClassName:"active"},"Public Speaking")),r.a.createElement(g,null)))},w=a(255),k=m.a.aside.withConfig({displayName:"Footer__Overlay",componentId:"n5fjzj-0"})(["position:absolute;width:100%;height:100%;top:0px;left:0px;background:hsla(240,100%,12%,0.6);z-index:1;"]),x=m.a.li.withConfig({displayName:"Footer__TwitterLink",componentId:"n5fjzj-1"})(["background:#00acee;a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),_=m.a.li.withConfig({displayName:"Footer__GitHubLink",componentId:"n5fjzj-2"})(["background:#181818;a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),C=m.a.li.withConfig({displayName:"Footer__LinkedInLink",componentId:"n5fjzj-3"})(["background:#0077b5;a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),N=m.a.li.withConfig({displayName:"Footer__MediumLink",componentId:"n5fjzj-4"})(["background:#37b042;a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),I=m.a.li.withConfig({displayName:"Footer__InstagramLink",componentId:"n5fjzj-5"})(["background:#d6249f;background:radial-gradient( circle at 30% 107%,#fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90% );a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),j=function(e){return r.a.createElement("footer",{id:"footer",style:{backgroundColor:e.colour||"hsla(240, 100%, 12%, 0.6)",position:"relative",marginTop:"-1em",padding:"1em 0 3em"}},r.a.createElement(k,null),r.a.createElement("div",{className:"bodyContainer",style:{zIndex:2,position:"relative",color:"white"}},r.a.createElement("div",{className:"bodyContent"},r.a.createElement("h3",null,"Elsewhere, on social media;"),r.a.createElement("ul",{className:"external-profiles"},r.a.createElement(x,null,r.a.createElement("a",{href:"//twitter.com/psyked"},r.a.createElement("span",null,r.a.createElement(w.e,null),"Twitter"))),r.a.createElement(I,null,r.a.createElement("a",{href:"//instagram.com/psyked"},r.a.createElement("span",null,r.a.createElement(w.b,null),"Instagram"))),r.a.createElement(_,null,r.a.createElement("a",{href:"//github.com/psyked"},r.a.createElement("span",null,r.a.createElement(w.a,null),"GitHub"))),r.a.createElement(C,null,r.a.createElement("a",{href:"//linkedin.com/in/jamesford"},r.a.createElement("span",null,r.a.createElement(w.c,null),"LinkedIn"))),r.a.createElement(N,null,r.a.createElement("a",{href:"//medium.com/@psyked"},r.a.createElement("span",null,r.a.createElement(w.d,null),"Medium")))))))};a(254);var z=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e,t=this.props,a=t.children,n=t.keyColour;return n&&n.muted&&(e=n.muted),r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{htmlAttributes:{lang:"en"}}),r.a.createElement(y,null),r.a.createElement("main",null,a),r.a.createElement(j,{colour:e}))},n}(r.a.Component);t.a=z},245:function(e,t,a){"use strict";a(24),a(25),a(13),a(50),a(18);var n=a(0),r=a.n(n),i=a(247),o=a.n(i),l=a(249),c=a(240),m=a(256),s=a.n(m);var d=c.a.header.withConfig({displayName:"Banner__Wrapper",componentId:"hibpma-0"})(["background:center center / cover hsl(240,100%,12%);position:relative;padding-top:calc(68px + 2em);padding-bottom:3em;padding-left:calc((100vw - 60em) / 2);padding-right:calc((100vw - 60em) / 2);"]),p=c.a.aside.withConfig({displayName:"Banner__Overlay",componentId:"hibpma-1"})(["position:absolute;width:100%;height:100%;top:0px;left:0px;background:hsla(240,100%,12%,0.6);z-index:1;"]),u=c.a.figure.withConfig({displayName:"Banner__ImageContainer",componentId:"hibpma-2"})(["position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;margin:0;}"]),h=Object(c.a)(o.a).withConfig({displayName:"Banner__ImageWrapper",componentId:"hibpma-3"})(["height:100%;"]),g=c.a.figcaption.withConfig({displayName:"Banner__ImageCredit",componentId:"hibpma-4"})(["position:absolute;bottom:1em;right:1.6em;font-size:0.6em;color:white;z-index:2;text-align:right;"]);t.a=function(e){var t,a=e.title,n=e.date,i=e.description,o=e.image,c=e.imageCredit,m=e.imageCreditMarkdown,f=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["title","date","description","image","imageCredit","imageCreditMarkdown"]);return o&&o.colors&&o.colors.muted&&(t=o.colors.muted),r.a.createElement(d,Object.assign({style:{minHeight:"320px",background:t}},f),o&&o.childImageSharp&&r.a.createElement(u,null,r.a.createElement(h,o.childImageSharp),!!c&&r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(g,null,"Cover image credit: ",c)),!!m&&r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(g,null,"Cover image credit:"," ",r.a.createElement(s.a,{source:m,renderers:{paragraph:function(e){var t=e.children;return r.a.createElement("span",null,t)}}})))),r.a.createElement(p,null),r.a.createElement("div",{className:"bodyContent",style:{color:"white",position:"relative",zIndex:2}},!!a&&r.a.createElement("header",null,r.a.createElement("h1",null,a)),!!i&&r.a.createElement("div",null,r.a.createElement("h2",null,i)),!!n&&r.a.createElement("aside",null,"Published: ",Object(l.format)(new Date(n),"DD MMM YYYY"))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-aa22fa6a7f7b116ccea4.js.map