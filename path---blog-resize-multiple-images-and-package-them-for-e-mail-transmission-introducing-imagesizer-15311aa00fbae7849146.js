webpackJsonp([0x5c32884b3b32],{1418:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/resize-multiple-images-and-package-them-for-e-mail-transmission-introducing-imagesizer/index.md absPath of file >>> MarkdownRemark",html:'<p>Or should I say, <em>finally</em> introducing ImageSizer.  If you\'ve been here previously in the last couple of weeks, you might have noticed that a couple of links to an ImageSizer application have been floating around.  Back in September (at Flash on the Beach) <a href="http://www.mmtdigital.co.uk/RVE31d5c7769e694a7cbc286c1c1b2c4fd8,,.aspx">Mark</a>, our far-to-clever-for-his-own-good student showed me the inital work on an application he\'d been working on for a couple of days - the subtley named ImageSizer.</p>\n<p>Two months later and I\'m finally getting around to implimenting what I offered him then, that we\'d post it online and see what people think.  Well, here it is.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/imagesizer1-567d204c73eb2fb8e9b1ef2c896fcca8-90d21.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75.60975609756098%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAckWqxC0T//EABkQAAIDAQAAAAAAAAAAAAAAAAECABEhEP/aAAgBAQABBQJsg5t1oQtP/8QAFxEAAwEAAAAAAAAAAAAAAAAAARARQf/aAAgBAwEBPwGjF//EABURAQEAAAAAAAAAAAAAAAAAABAh/9oACAECAQE/Aaf/xAAXEAADAQAAAAAAAAAAAAAAAAAAECEx/9oACAEBAAY/AncUP//EABoQAQEBAQADAAAAAAAAAAAAAAERACExUXH/2gAIAQEAAT8hCBj9zr2Z0Xka94ipzAWN/9oADAMBAAIAAwAAABCQ/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAASH/2gAIAQMBAT8Qpa//xAAWEQEBAQAAAAAAAAAAAAAAAAABEEH/2gAIAQIBAT8QDU//xAAaEAEBAQEBAQEAAAAAAAAAAAABEQAhMVFx/9oACAEBAAE/EEpJPQT8NzxE+YikJzIxI8YiCO5W7zkGdd//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="imagesizer1"\n        title=""\n        src="/static/imagesizer1-567d204c73eb2fb8e9b1ef2c896fcca8-af57e.jpg"\n        srcset="/static/imagesizer1-567d204c73eb2fb8e9b1ef2c896fcca8-847f7.jpg 158w,\n/static/imagesizer1-567d204c73eb2fb8e9b1ef2c896fcca8-93973.jpg 315w,\n/static/imagesizer1-567d204c73eb2fb8e9b1ef2c896fcca8-af57e.jpg 630w,\n/static/imagesizer1-567d204c73eb2fb8e9b1ef2c896fcca8-90d21.jpg 820w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>You can use the AIR Install Badge to install ImageSizer, or visit the <a href="http://www.psyked.co.uk/imagesizer-air-application">dedicated ImageSizer page.</a></p>\n<p>ImageSizer, as <a href="http://www.psyked.co.uk/imagesizer-air-application">Marks\' explanation</a> will tell, is an AIR application, designed in Fireworks and built in Flex, and what it does is provides you with a drag-and-drop interface for adding a bunch of Photos, resizing / renaming them, and then outputting them as a .zip file whereever you want.  It was designed for enabling non-techies to take massive images off their multi-megapixel cameras, easily resize and package them for sending via e-mail.</p>\n<p>What I really liked about the application was Marks\' focus on the user interaction - not something that comes easily in an early stage prototype.  For example in the final stage of the zipping process, instead of prompting the user with a browse window to save the zip file, the application presents you with an icon, which you can drag and drop out of the application - so you don\'t have to work with the annoying folder structures, you can just drop the files onto your desktop, or an open explorer / finder window.</p>\n<p>The application impliments the AIR Update Framework too, so we could see some more features being added in the future, in Marks\' copious amounts of spare time...</p>',frontmatter:{title:"Resize multiple images and package them for e-mail transmission - introducing ImageSizer!",date:"December 02, 2008",tags:["imagesizer","air","fzip"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/adm-application-descriptor-manager/",tags:["adobe-air"],title:"ADM - Application Descriptor Manager",date:"2008-12-02T09:00:22.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/my-splash-screen-example-updated-with-applicationinfo-class/",tags:["air","applicationinfo"],title:"My Splash Screen example - updated with ApplicationInfo class",date:"2008-12-02T12:30:50.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-resize-multiple-images-and-package-them-for-e-mail-transmission-introducing-imagesizer-15311aa00fbae7849146.js.map