(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{199:function(t,e,r){var n=r(207).Symbol;t.exports=n},205:function(t,e){var r=Array.isArray;t.exports=r},206:function(t,e,r){var n=r(212),o=r(226),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&n(t)==i}},207:function(t,e,r){var n=r(223),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();t.exports=i},212:function(t,e,r){var n=r(199),o=r(224),i=r(225),a="[object Null]",s="[object Undefined]",u=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?s:a:u&&u in Object(t)?o(t):i(t)}},213:function(t,e,r){var n=r(247)(Object,"create");t.exports=n},214:function(t,e,r){var n=r(322);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},215:function(t,e,r){var n=r(328);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},216:function(t,e,r){var n=r(227);t.exports=function(t){return null==t?"":n(t)}},223:function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(83))},224:function(t,e,r){var n=r(199),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=n?n.toStringTag:void 0;t.exports=function(t){var e=i.call(t,s),r=t[s];try{t[s]=void 0;var n=!0}catch(u){}var o=a.call(t);return n&&(e?t[s]=r:delete t[s]),o}},225:function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},226:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},227:function(t,e,r){var n=r(199),o=r(228),i=r(205),a=r(206),s=1/0,u=n?n.prototype:void 0,c=u?u.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return o(e,t)+"";if(a(e))return c?c.call(e):"";var r=e+"";return"0"==r&&1/e==-s?"-0":r}},228:function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}},247:function(t,e,r){var n=r(309),o=r(314);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},248:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},249:function(t,e,r){"use strict";var n=r(8);e.__esModule=!0,e.default=void 0;var o,i=n(r(7)),a=n(r(37)),s=n(r(85)),u=n(r(86)),c=n(r(0)),l=n(r(4)),f=function(t){var e=(0,u.default)({},t),r=e.resolutions,n=e.sizes,o=e.critical;return r&&(e.fixed=r,delete e.resolutions),n&&(e.fluid=n,delete e.sizes),o&&(e.loading="eager"),e},d=Object.create({}),p=function(t){var e=f(t),r=e.fluid?e.fluid.src:e.fixed.src;return d[r]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,v=g&&window.IntersectionObserver,y=new WeakMap;var b=function(t,e){var r=(void 0===o&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=new window.IntersectionObserver(function(t){t.forEach(function(t){if(y.has(t.target)){var e=y.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(o.unobserve(t.target),y.delete(t.target),e())}})},{rootMargin:"200px"})),o);return r&&(r.observe(t),y.set(t,e)),function(){r.unobserve(t),y.delete(t)}},m=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',r=t.sizes?'sizes="'+t.sizes+'" ':"",n=t.srcSetWebp?"<source type='image/webp' srcset=\""+t.srcSetWebp+'" '+r+"/>":"",o=t.srcSet?'srcset="'+t.srcSet+'" ':"",i=t.title?'title="'+t.title+'" ':"",a=t.alt?'alt="'+t.alt+'" ':'alt="" ',s=t.width?'width="'+t.width+'" ':"",u=t.height?'height="'+t.height+'" ':"",c=t.crossOrigin?'crossorigin="'+t.crossOrigin+'" ':"";return"<picture>"+n+"<img "+(t.loading?'loading="'+t.loading+'" ':"")+s+u+r+o+e+a+i+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},_=c.default.forwardRef(function(t,e){var r=t.sizes,n=t.srcSet,o=t.src,i=t.style,a=t.onLoad,l=t.onError,f=t.loading,d=(0,s.default)(t,["sizes","srcSet","src","style","onLoad","onError","loading"]);return c.default.createElement("img",(0,u.default)({sizes:r,srcSet:n,src:o},d,{onLoad:a,onError:l,ref:e,loading:f,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});_.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var x=function(t){function e(e){var r;(r=t.call(this,e)||this).seenBefore=g&&p(e),r.addNoScript=!(e.critical&&!e.fadeIn),r.useIOSupport=!h&&v&&!e.critical&&!r.seenBefore;var n=e.critical||g&&(h||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&e.fadeIn},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)((0,a.default)(r))),r.handleRef=r.handleRef.bind((0,a.default)((0,a.default)(r))),r}(0,i.default)(e,t);var r=e.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(t){var e=this;this.useIOSupport&&t&&(this.cleanUpListeners=b(t,function(){var t=p(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:t}),e.setState({isVisible:!0},function(){return e.setState({imgLoaded:t,imgCached:!!e.imageRef.current.currentSrc})})}))},r.handleImageLoaded=function(){var t,e,r;t=this.props,e=f(t),r=e.fluid?e.fluid.src:e.fixed.src,d[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var t=f(this.props),e=t.title,r=t.alt,n=t.className,o=t.style,i=void 0===o?{}:o,a=t.imgStyle,s=void 0===a?{}:a,l=t.placeholderStyle,d=void 0===l?{}:l,p=t.placeholderClassName,h=t.fluid,g=t.fixed,v=t.backgroundColor,y=t.durationFadeIn,b=t.Tag,x=t.itemProp,S=t.loading,w=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,u.default)({opacity:w?1:0,transition:O?"opacity "+y+"ms":"none"},s),E="boolean"==typeof v?"lightgray":v,L={transitionDelay:y+"ms"},z=(0,u.default)({opacity:this.state.imgLoaded?0:1},O&&L,s,d),I={title:e,alt:this.state.isVisible?"":r,style:z,className:p};if(h){var R=h;return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),E&&c.default.createElement(b,{title:e,style:(0,u.default)({backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&L)}),R.base64&&c.default.createElement(_,(0,u.default)({src:R.base64},I)),R.tracedSVG&&c.default.createElement(_,(0,u.default)({src:R.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement(_,{alt:r,title:e,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,u.default)({alt:r,title:e,loading:S},R))}}))}if(g){var C=g,T=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},i);return"inherit"===i.display&&delete T.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},E&&c.default.createElement(b,{title:e,style:(0,u.default)({backgroundColor:E,width:C.width,opacity:this.state.imgLoaded?0:1,height:C.height},O&&L)}),C.base64&&c.default.createElement(_,(0,u.default)({src:C.base64},I)),C.tracedSVG&&c.default.createElement(_,(0,u.default)({src:C.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,C.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),c.default.createElement(_,{alt:r,title:e,width:C.width,height:C.height,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,u.default)({alt:r,title:e,loading:S},C))}}))}return null},e}(c.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var S=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string}),w=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string});x.propTypes={resolutions:S,sizes:w,fixed:S,fluid:w,fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"])};var O=x;e.default=O},298:function(t,e,r){var n=r(299);t.exports=function(t,e,r){var o=null==t?void 0:n(t,e);return void 0===o?r:o}},299:function(t,e,r){var n=r(300),o=r(332);t.exports=function(t,e){for(var r=0,i=(e=n(e,t)).length;null!=t&&r<i;)t=t[o(e[r++])];return r&&r==i?t:void 0}},300:function(t,e,r){var n=r(205),o=r(301),i=r(302),a=r(216);t.exports=function(t,e){return n(t)?t:o(t,e)?[t]:i(a(t))}},301:function(t,e,r){var n=r(205),o=r(206),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,e){if(n(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||a.test(t)||!i.test(t)||null!=e&&t in Object(e)}},302:function(t,e,r){var n=r(303),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=n(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,function(t,r,n,o){e.push(n?o.replace(i,"$1"):r||t)}),e});t.exports=a},303:function(t,e,r){var n=r(304),o=500;t.exports=function(t){var e=n(t,function(t){return r.size===o&&r.clear(),t}),r=e.cache;return e}},304:function(t,e,r){var n=r(305),o="Expected a function";function i(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(o);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(i.Cache||n),r}i.Cache=n,t.exports=i},305:function(t,e,r){var n=r(306),o=r(327),i=r(329),a=r(330),s=r(331);function u(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=s,t.exports=u},306:function(t,e,r){var n=r(307),o=r(319),i=r(326);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(i||o),string:new n}}},307:function(t,e,r){var n=r(308),o=r(315),i=r(316),a=r(317),s=r(318);function u(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=s,t.exports=u},308:function(t,e,r){var n=r(213);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},309:function(t,e,r){var n=r(310),o=r(311),i=r(248),a=r(313),s=/^\[object .+?Constructor\]$/,u=Function.prototype,c=Object.prototype,l=u.toString,f=c.hasOwnProperty,d=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(n(t)?d:s).test(a(t))}},310:function(t,e,r){var n=r(212),o=r(248),i="[object AsyncFunction]",a="[object Function]",s="[object GeneratorFunction]",u="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var e=n(t);return e==a||e==s||e==i||e==u}},311:function(t,e,r){var n,o=r(312),i=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!i&&i in t}},312:function(t,e,r){var n=r(207)["__core-js_shared__"];t.exports=n},313:function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},314:function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},315:function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},316:function(t,e,r){var n=r(213),o="__lodash_hash_undefined__",i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return r===o?void 0:r}return i.call(e,t)?e[t]:void 0}},317:function(t,e,r){var n=r(213),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},318:function(t,e,r){var n=r(213),o="__lodash_hash_undefined__";t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?o:e,this}},319:function(t,e,r){var n=r(320),o=r(321),i=r(323),a=r(324),s=r(325);function u(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=s,t.exports=u},320:function(t,e){t.exports=function(){this.__data__=[],this.size=0}},321:function(t,e,r){var n=r(214),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0||(r==e.length-1?e.pop():o.call(e,r,1),--this.size,0))}},322:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},323:function(t,e,r){var n=r(214);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},324:function(t,e,r){var n=r(214);t.exports=function(t){return n(this.__data__,t)>-1}},325:function(t,e,r){var n=r(214);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},326:function(t,e,r){var n=r(247)(r(207),"Map");t.exports=n},327:function(t,e,r){var n=r(215);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},328:function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},329:function(t,e,r){var n=r(215);t.exports=function(t){return n(this,t).get(t)}},330:function(t,e,r){var n=r(215);t.exports=function(t){return n(this,t).has(t)}},331:function(t,e,r){var n=r(215);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},332:function(t,e,r){var n=r(206),o=1/0;t.exports=function(t){if("string"==typeof t||n(t))return t;var e=t+"";return"0"==e&&1/t==-o?"-0":e}}}]);
//# sourceMappingURL=14-b12f60143be7b0c0b45c.js.map