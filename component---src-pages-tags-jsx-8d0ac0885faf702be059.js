(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{235:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return s});var a=n(0),o=n.n(a),r=n(582),i=n.n(r),l=n(241),c=n.n(l),u=n(70),f=n.n(u),d=n(242);t.default=function(e){var t=e.data,n=t.allMarkdownRemark.group,a=t.site.siteMetadata.title;return o.a.createElement(d.a,null,o.a.createElement("div",{className:"bodyContainer"},o.a.createElement("div",{className:"inner"},o.a.createElement("div",{className:"bodyContent"},o.a.createElement(c.a,{title:a,htmlAttributes:{lang:"en"}}),o.a.createElement("h1",null,"Tags"),o.a.createElement("ul",null,n.map(function(e){return o.a.createElement("li",{key:e.fieldValue},o.a.createElement(f.a,{to:"/tag/"+i()(e.fieldValue)+"/"},e.fieldValue," (",e.totalCount,")"))}))))))};var s="1503817944"},242:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(241),i=n.n(r),l=n(70),c=n.n(l),u=n(240),f=n(253);var d=u.a.label.withConfig({displayName:"ThemeSwitch__SwitchWrapper",componentId:"sc-1gyffmx-0"})(["background-color:white;border-radius:18px;cursor:pointer;display:inline-block;height:20px;padding:3px;position:relative;vertical-align:top;width:56px;box-sizing:content-box;"]),s=u.a.span.withConfig({displayName:"ThemeSwitch__Label",componentId:"sc-1gyffmx-1"})(["background:goldenrod none repeat scroll 0 0;border-radius:inherit;display:block;font-size:10px;height:inherit;position:relative;text-transform:uppercase;transition:all 0.15s ease-out 0s;::before,::after{line-height:1;margin-top:-0.5em;position:absolute;top:50%;transition:inherit;}"]),p=u.a.span.withConfig({displayName:"ThemeSwitch__Handle",componentId:"sc-1gyffmx-2"})(["background-color:white;border-radius:10px;height:18px;left:4px;position:absolute;top:4px;transition:left 0.15s ease-out 0s;width:18px;::before{border-radius:6px;content:'';height:12px;left:50%;margin:-6px 0 0 -6px;position:absolute;top:50%;width:12px;}"]),m=u.a.input.withConfig({displayName:"ThemeSwitch__Input",componentId:"sc-1gyffmx-3"})(["left:0;opacity:0;position:absolute;top:0;:checked ~ ","{background:black none repeat scroll 0 0;}:checked ~ ","{left:37px;}"],s,p),h=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return o.a.createElement(f.ThemeToggler,null,function(e){var t=e.theme,n=e.toggleTheme;return o.a.createElement(d,{className:"switch"},o.a.createElement(m,{type:"checkbox",onChange:function(e){return n(e.target.checked?"dark":"light")},checked:"dark"===t}),o.a.createElement(s,null),o.a.createElement(p,null))})},a}(o.a.Component),x=u.a.header.withConfig({displayName:"Header",componentId:"sc-9dymkm-0"})(["display:block;background:hsl(240,14%,19%);padding-left:calc((100vw - 60em) / 2);padding-right:calc((100vw - 60em) / 2);"]),g=u.a.nav.withConfig({displayName:"Header__Nav",componentId:"sc-9dymkm-1"})(["max-width:60em;margin:0 auto;padding:0.5em 0.2em 0.5em 0.7em;width:100%;display:block;"]),v=Object(u.a)(c.a).withConfig({displayName:"Header__MenuLink",componentId:"sc-9dymkm-2"})(["margin-right:0.5em;padding:0.4em;&,a{&,:link,:active,:visited,:hover{color:hsl(240,14%,99%);}}&:last-child{margin-right:0;}&.active{border-radius:0.15em;background-color:hsl(346,88%,52%);}"]),b=u.a.div.withConfig({displayName:"Header__Wrapper",componentId:"sc-9dymkm-3"})(["display:flex;justify-content:space-between;align-items:center;padding:0 1em;"]),y=function(e){return o.a.createElement(x,null,o.a.createElement(b,null,o.a.createElement(g,null,o.a.createElement(v,{to:"/",activeClassName:"active",exact:"true"},"Home"),o.a.createElement(v,{to:"/blog/",activeClassName:"active"},"Blog Archive"),o.a.createElement(v,{to:"/projects/",activeClassName:"active"},"Projects"),o.a.createElement(v,{to:"/speaking/",activeClassName:"active"},"Public Speaking")),o.a.createElement(h,null)))},E=n(255),k=u.a.aside.withConfig({displayName:"Footer__Overlay",componentId:"n5fjzj-0"})(["position:absolute;width:100%;height:100%;top:0px;left:0px;background:hsla(240,100%,12%,0.6);z-index:1;"]),w=u.a.li.withConfig({displayName:"Footer__TwitterLink",componentId:"n5fjzj-1"})(["background:#00acee;a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),j=u.a.li.withConfig({displayName:"Footer__GitHubLink",componentId:"n5fjzj-2"})(["background:#181818;a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),_=u.a.li.withConfig({displayName:"Footer__LinkedInLink",componentId:"n5fjzj-3"})(["background:#0077b5;a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),C=u.a.li.withConfig({displayName:"Footer__MediumLink",componentId:"n5fjzj-4"})(["background:#37b042;a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),N=u.a.li.withConfig({displayName:"Footer__InstagramLink",componentId:"n5fjzj-5"})(["background:#d6249f;background:radial-gradient( circle at 30% 107%,#fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90% );a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),I=function(e){return o.a.createElement("footer",{id:"footer",style:{backgroundColor:e.colour||"hsla(240, 100%, 12%, 0.6)",position:"relative",marginTop:"-1em",padding:"1em 0 3em"}},o.a.createElement(k,null),o.a.createElement("div",{className:"bodyContainer",style:{zIndex:2,position:"relative",color:"white"}},o.a.createElement("div",{className:"bodyContent"},o.a.createElement("h3",null,"Elsewhere, on social media;"),o.a.createElement("ul",{className:"external-profiles"},o.a.createElement(w,null,o.a.createElement("a",{href:"//twitter.com/psyked"},o.a.createElement("span",null,o.a.createElement(E.e,null),"Twitter"))),o.a.createElement(N,null,o.a.createElement("a",{href:"//instagram.com/psyked"},o.a.createElement("span",null,o.a.createElement(E.b,null),"Instagram"))),o.a.createElement(j,null,o.a.createElement("a",{href:"//github.com/psyked"},o.a.createElement("span",null,o.a.createElement(E.a,null),"GitHub"))),o.a.createElement(_,null,o.a.createElement("a",{href:"//linkedin.com/in/jamesford"},o.a.createElement("span",null,o.a.createElement(E.c,null),"LinkedIn"))),o.a.createElement(C,null,o.a.createElement("a",{href:"//medium.com/@psyked"},o.a.createElement("span",null,o.a.createElement(E.d,null),"Medium")))))))};n(254);var A=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e,t=this.props,n=t.children,a=t.keyColour;return a&&a.muted&&(e=a.muted),o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{htmlAttributes:{lang:"en"}}),o.a.createElement(y,null),o.a.createElement("main",null,n),o.a.createElement(I,{colour:e}))},a}(o.a.Component);t.a=A},248:function(e,t,n){var a=n(260).Symbol;e.exports=a},258:function(e,t,n){n(71);var a=Array.isArray;e.exports=a},259:function(e,t,n){var a=n(265),o=n(280),r="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||o(e)&&a(e)==r}},260:function(e,t,n){var a=n(277),o="object"==typeof self&&self&&self.Object===Object&&self,r=a||o||Function("return this")();e.exports=r},265:function(e,t,n){var a=n(248),o=n(278),r=n(279),i="[object Null]",l="[object Undefined]",c=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?l:i:c&&c in Object(e)?o(e):r(e)}},269:function(e,t,n){var a=n(281);e.exports=function(e){return null==e?"":a(e)}},277:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(276))},278:function(e,t,n){n(49),n(69),n(13);var a=n(248),o=Object.prototype,r=o.hasOwnProperty,i=o.toString,l=a?a.toStringTag:void 0;e.exports=function(e){var t=r.call(e,l),n=e[l];try{e[l]=void 0;var a=!0}catch(c){}var o=i.call(e);return a&&(t?e[l]=n:delete e[l]),o}},279:function(e,t,n){n(49),n(69),n(13);var a=Object.prototype.toString;e.exports=function(e){return a.call(e)}},280:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},281:function(e,t,n){n(49),n(69),n(13);var a=n(248),o=n(282),r=n(258),i=n(259),l=1/0,c=a?a.prototype:void 0,u=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(r(t))return o(t,e)+"";if(i(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-l?"-0":n}},282:function(e,t){e.exports=function(e,t){for(var n=-1,a=null==e?0:e.length,o=Array(a);++n<a;)o[n]=t(e[n],n,e);return o}},582:function(e,t,n){var a=n(583)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=a},583:function(e,t,n){n(14),n(244);var a=n(584),o=n(585),r=n(588),i=RegExp("['’]","g");e.exports=function(e){return function(t){return a(r(o(t).replace(i,"")),e,"")}}},584:function(e,t){e.exports=function(e,t,n,a){var o=-1,r=null==e?0:e.length;for(a&&r&&(n=e[++o]);++o<r;)n=t(n,e[o],o,e);return n}},585:function(e,t,n){n(14),n(244);var a=n(586),o=n(269),r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(r,a).replace(i,"")}},586:function(e,t,n){var a=n(587)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=a},587:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},588:function(e,t,n){n(97);var a=n(589),o=n(590),r=n(269),i=n(591);e.exports=function(e,t,n){return e=r(e),void 0===(t=n?void 0:t)?o(e)?i(e):a(e):e.match(t)||[]}},589:function(e,t,n){n(97);var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(a)||[]}},590:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},591:function(e,t,n){n(97),n(244);var a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+a+"]",r="\\d+",i="[\\u2700-\\u27bf]",l="[a-z\\xdf-\\xf6\\xf8-\\xff]",c="[^\\ud800-\\udfff"+a+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",u="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",d="[A-Z\\xc0-\\xd6\\xd8-\\xde]",s="(?:"+l+"|"+c+")",p="(?:"+d+"|"+c+")",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",h="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",u,f].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),x="(?:"+[i,u,f].join("|")+")"+h,g=RegExp([d+"?"+l+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,d,"$"].join("|")+")",p+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,d+s,"$"].join("|")+")",d+"?"+s+"+(?:['’](?:d|ll|m|re|s|t|ve))?",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,x].join("|"),"g");e.exports=function(e){return e.match(g)||[]}}}]);
//# sourceMappingURL=component---src-pages-tags-jsx-8d0ac0885faf702be059.js.map