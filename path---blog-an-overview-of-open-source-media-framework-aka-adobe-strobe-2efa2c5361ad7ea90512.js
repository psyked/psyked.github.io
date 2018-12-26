webpackJsonp([0xc26291414de5],{1212:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/an-overview-of-open-source-media-framework-aka-adobe-strobe/index.md absPath of file >>> MarkdownRemark",html:'<p>OSMF (Open Source Media Framework) is a new Open Source project from Adobe, designed to make deploying complex video players in the Flash Platform a little bit easier.  <a href="http://www.jodieorourke.com/view.php?id=111&#x26;blog=news">Jodie O\'Rourke did a presentation for FlashMidlands on "Intro to OSMF"</a>, and here\'s my thoughts and notes from that presentation.</p>\n<h3>Download OSMF (and the official project page):</h3>\n<ul>\n<li><a href="http://www.opensourcemediaframework.com/">http://www.opensourcemediaframework.com/</a></li>\n<li><a href="http://midlands.webmail.mmtdigital.co.uk/exchweb/bin/redir.asp?URL=http://opensource.adobe.com/wiki/display/osmf/Open%2BSource%2BMedia%2BFramework">http://opensource.adobe.com/wiki/display/osmf/Open+Source+Media+Framework</a></li>\n<li>You can find more technical details &#x26; code examples on <a href="http://www.jodieorourke.com/view.php?id=111&#x26;blog=news">Jodie\'s blog.</a></li>\n</ul>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/osmf-7fc010766225b0e2d7737f706e19682c-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAECAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAAB5SUJRmF//8QAGRAAAgMBAAAAAAAAAAAAAAAAAAEQETFB/9oACAEBAAEFAuFixx//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAYEAEBAAMAAAAAAAAAAAAAAAABABARIf/aAAgBAQABPyEFE8wVTbv/2gAMAwEAAgADAAAAEPP/AP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABwQAQACAQUAAAAAAAAAAAAAAAEAIRFBUYGxwf/aAAgBAQABPxBEPZeCdxttzGBczhzcydZ//9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="OSMF"\n        title=""\n        src="/static/osmf-7fc010766225b0e2d7737f706e19682c-e8574.jpg"\n        srcset="/static/osmf-7fc010766225b0e2d7737f706e19682c-c94d9.jpg 158w,\n/static/osmf-7fc010766225b0e2d7737f706e19682c-9885b.jpg 315w,\n/static/osmf-7fc010766225b0e2d7737f706e19682c-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>Why OSMF is needed:</h3>\n<p>Flash video is one of the primary driving forces behind the popularity of the Flash Plugin, but for something so key to the plugin its awfully difficult to implement anything clever.  The basic components such as FLVPlayback are buggy and the basic elements, such as NetStream are frustratingly quirky and difficult to extend.  We’re all familiar with the idea of a playlist and also annoyingly familiar with the idea of in-content advertising, but to actually implement any of this ourselves we have to build it from the ground up.  YouTube have done it, Hulu have done it, CBS, BBC, ITV, E4 and many more all use similar concepts, but they’re all built from scratch each time.</p>\n<p>OSMF is coming as a framework for developing exactly this kind of functionality in a completely flexible way, lowering the ‘barrier to entry’ for developing this sort of thing, and promising to encapsulate all of the known bugfixes and hacks for the inconsistencies of the current technologies in a nice clean new element.  (That, and because of something Silverlight does or is threatening to do.)</p>\n<h3>For non-techies:</h3>\n<p>OSMF represents a scalable technology that can equally be deployed for really simple or really complex projects.  As the FLVPlayback component offers a single video file to play, MediaPlayer (the base class for OSMF) offers a playlist of files to play, and can play them either sequentially or in parallel, or both.  OSMF does not however, currently have a visual representation of the playback controls.  That has to be added in addition to the OSMF framework.</p>\n<h3>In more detail:</h3>\n<p>Instead of passing a single file path to load and play, with OSMF you can pass a list of files, and details of how you’d like to play them.  (You can of course only pass a single file if you like.)  So you could pass in 5 flv files, and tell it to play them in sequence, or you could pass in an image file and an audio file and tell it to play them in parallel.  Or you could pass in a video file and an audio file separately and play them in parallel.  Or, using some of the more advanced features, you could pass a video file with audio and a separate audio file, and tell it to mute the video and play the audio instead.  OSMF is being built to handle practically any file type that Flash can play, and do anything with them.</p>\n<p>The way it works is by using metadata, traits, and a whole lot of clever bytearray stuff on the files it loads.  The key traits that govern what you can do with files are ‘spatial’ and ‘temporal’ traits.  A video can be spatial and temporal, an image spatial but not temporal, and an audio file temporal but not spatial, and there’s a whole load of clever ways to work with it and make your code flexible.</p>\n<p>It also has a load of features to deal with different content delivery methods, such as http, rtmp and streaming servers.  It has built-in support for things like stream switching (switching to lower quality source streams if your bandwidth is low) and session authentication tokens.</p>\n<p>Further to that is the concept of plugins – the idea that you have the core OSMF code and then can bolt on extra features you need.  The first plugin that’s publicly available is for the <em>Akamai</em> CDN, making streaming flash video from the Akamai network much much simpler.</p>\n<h3>Current status:</h3>\n<p>OSMF is being actively developed by Adobe, it’s 3 or 4 months old, is on an average 4 week release cycle, and is on Alpha 0.4 – Alpha 0.5 is due in a few weeks’ time.  It, unfortunately, doesn\'t support SWF playback support alongside the normal video / audio / image files, but apparently it\'s in the works.</p>\n<p>The downside right now is that the minimum requirement is Flash Player 10 (because of vector code and bytearray introspection), and it’s not a fully released product.  But at least we can start using some of its features soon, even if it’s not quite ready for the mainstream just yet.</p>',frontmatter:{title:"An overview of Open Source Media Framework (aka. Adobe Strobe)",date:"August 12, 2009",tags:["flash","framework","osmf"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/imagesizer-updated-again/",tags:["imagesizer"],title:"ImageSizer updated! (again)",date:"2009-07-24T16:27:03.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/rotating-bitmapdata/",tags:["actionscript","bitmapdata"],title:"Rotating BitmapData with Actionscript 3",date:"2009-09-15T21:00:07.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-an-overview-of-open-source-media-framework-aka-adobe-strobe-2efa2c5361ad7ea90512.js.map