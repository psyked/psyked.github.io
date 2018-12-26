webpackJsonp([0x79bc191f3daa],{1438:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/so-what-can-you-do-with-html5/index.md absPath of file >>> MarkdownRemark",html:'<p>For all the buzz it\'s getting, you\'d think HTML5 was an avalanche of new features crashing around the web.  Seems more like the first snow of the year - you know; the one everyone hopes will herald days off work and snowball fights, but then melts away overnight.  So I thought it was time I got off my ass and learned a bit more about HTML5 to see if it\'s really all people say it is.</p>\n<p>First things first - <strong>what features actually make up HTML5, and how widely supported are they? Turns out, there\'s already a site which tracks the features and their browser support:</strong></p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/litmus-eb23834e32f334d504b6755a831ef34e-41a8d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABjklEQVQoz3WS607jMBCF+wj4Et8TO3USl7akTZqE0i0rEOUigUD8gn+I938JJoGlIHUlK5rI/uYcn/Go1QpWp1XJmUeooGTOaW3jMuJTm9RWrqxZC15nRZm6yphOyU8E1ui7WilZcb5K1K70V7m7SNPtdHJ57P6Ok21s1uO0tUlj9Pf5PdwZteT8RPCFEoGQENEJJQVBGUZ5hAOjnqACo4XkB2ENtudaVtZ4fOQHLKM4JyhnpG9ESSBoydl/lAWfg7JRPRPhHGDS84HiguAM9DGqBrj5d+0RVM2gDLaPOatdnA0YaMLXoyNwC40KaIFxyfbKza/ApCghVa0qJev+V7bG/PHpqY1rKSDOQVAesA0bm9S9Pdy/Xu/eHp/en59f725fbnYvu+vO+xmLZpxNCIHiAPxpYyZ4oGSRsNNUr5VYunHj5NnYbGO9sa6dzmqXtFLubTdffnrxGmxLcR7cRW7PXXKW+U2wm9R0iW5i3d9I8F+B/XwkgeC5FDAVP8wJ0oLwYGyhjx31u5T8tP0B0W5Yz8WySYkAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="litmus"\n        title=""\n        src="/static/litmus-eb23834e32f334d504b6755a831ef34e-41a8d.png"\n        srcset="/static/litmus-eb23834e32f334d504b6755a831ef34e-bf474.png 158w,\n/static/litmus-eb23834e32f334d504b6755a831ef34e-d5dd3.png 315w,\n/static/litmus-eb23834e32f334d504b6755a831ef34e-41a8d.png 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><a href="http://www.findmebyip.com/litmus">http://www.findmebyip.com/litmus</a></p>\n<p>HTML5 is made up of a lot of things - storage, offline modes, video, audio, dynamic drawing, clever forms.  Make sense I guess - HTML5 is a cherry-picked set of features we can implement already with plugins and javascript.  Reading through the checklist it\'s clear that there\'s a couple of hands down winners on the adoption front, and total losers too.  None of them implement everything just yet though.</p>\n<p>CSS 3 is the most kick-ass part of the specification in my opinion - finally bringing things like native rounded corners, drop shadows and advanced dynamic graphics to the web.  The rest of it is all \'meh\' as it currently exists in acceptable formats.</p>\n<h2>Is it practical? No.</h2>\n<blockquote>\n<p>"Oh Internet Explorer, how your legacy haunts us." </p>\n</blockquote>\n<p>If the <a href="http://en.wikipedia.org/wiki/Usage_share_of_web_browsers">browser adoption statistics</a> are to be believed - even the most pessimistic ones - Internet Explorer\'s market share is not something to take lightly.  You can\'t ignore 40-60% of your users because they use a browser that isn\'t up to the same standard as its competitors.  I\'d dearly like too, but I can\'t.  Which means everything has to be developed without HTML5 &#x26; CSS 3, either using browser targeting and using multiple styles and coding options, or developed to the lowest common denominator - IE.</p>\n<p>You might say that things will eventually catch up - but considering IE6 is still at 10% market share, you\'re always going to be developing something for IE6, or IE7, or IE8.  None of which have very much HTML5 support at all.  IE9 isn\'t going to be available for users on Windows XP, which means the best they\'ll ever get is IE8, which means... argh, this really isn\'t going to work.</p>\n<p>If we\'re ever going to accept HTML5 as a development language for the web we\'re just going to have to adopt a more fractured development style than we use right now - develop twice, deploy once (with browser targeting).  HTML5 is effectively never coming to Internet Explorer, and if it does; by the time it\'s arrived it\'ll be too late for the party.</p>',frontmatter:{title:"So, what can you do with HTML5?",date:"April 14, 2010",tags:["html","html5","internet-explorer"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/link-voice-synthesis-in-adobe-air-2-0/",tags:["voice-synthesis"],title:"Link: Voice synthesis in Adobe AIR 2.0",date:"2010-04-09T07:56:27.000Z",description:null,image:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABZklEQVQoz6WRy2rCUBCG84huW+xTuOuiXYoWH8BVERW66MqWNkjUIl42wYrGCxoTLzkmRolIJCoxp/1NYilWV/0hh2HOfP/MnDBf/xCDb71eK4qiqqqu6/OjNE1DZrFYTKdT78rLQIQQ0zR9GGS5XK5UKtVqtVar1et1xJ+uOp1OsVjkeR4WgIFNJpN+vy/Lsg/PZjPLsmCRz+dRKggCXBDDETzLsvAqlUocxxUKhVdX3W7Xh1erlTfS0NVoNBqPx6IoooMkSQgajQZcBFfNZrPX6xmG4cNnROlus9lgHtPcWpYsSbZtn38wSukRoV5sYgtdHxIiEtIaDLT5HEnHcX4KvPO0M3UcnITjlLt7KRrlr67ZQKCVyRzg/f5M55OBUfIei30Eg7ngzQPD3DLMYyhkHwe7CHt3A1l+Tqdf4vG3ZDIVDqcikadEotVu/17wIoz/oRCC6a3tducc1jCWy2w2+/fBvgFoxFO9U/KE4AAAAABJRU5ErkJggg==",aspectRatio:1.7857142857142858,src:"/static/voice-synth-0d8beefb5596f392a84774a10b43de98-1a5b7.png",srcSet:"/static/voice-synth-0d8beefb5596f392a84774a10b43de98-05140.png 158w,\n/static/voice-synth-0d8beefb5596f392a84774a10b43de98-0131d.png 315w,\n/static/voice-synth-0d8beefb5596f392a84774a10b43de98-1a5b7.png 500w",sizes:"(max-width: 500px) 100vw, 500px"}}}}},next:{frontmatter:{path:"/blog/link-introducing-zaail-40-image-format-support-for-flash/",tags:["alchemy","flash-player"],title:"Link: Introducing ZaaIL – 40+ Image format support for Flash",date:"2010-04-28T07:55:13.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-so-what-can-you-do-with-html-5-f910cbaad516b3a010ba.js.map