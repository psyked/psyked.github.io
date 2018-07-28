webpackJsonp([0xb23064d154d9],{1328:function(e,A){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/what-are-you-looking-at-introducing-screentweetr/index.md absPath of file >>> MarkdownRemark",html:'<p>Screentweetr is my latest little side project; an AIR application for uploading desktop screenshots to twitter image services. You can download it now, from the <a href="http://www.adobe.com/cfusion/marketplace/index.cfm?event=marketplace.offering&#x26;marketplaceid=1&#x26;publisherid=10603&#x26;offeringid=13500">AIR Marketplace</a>.</p>\n<p>[\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/screentweetr1-754c52494c216593f1a2e1feeb18742f-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABYBAQEBAAAAAAAAAAAAAAAAAAEAA//aAAwDAQACEAMQAAAB7WVc4qP/xAAWEAEBAQAAAAAAAAAAAAAAAAAQEQD/2gAIAQEAAQUC1I//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAcEAADAAEFAAAAAAAAAAAAAAAAAREQMUFhcZH/2gAIAQEAAT8hqGmzXonVZOxpdETjH//aAAwDAQACAAMAAAAQK/8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/EE2f/8QAHRABAAMAAQUAAAAAAAAAAAAAAQARMRAhQVFxkf/aAAgBAQABPxBLU+zvA+NRjSsXWiWT1nWoAwHo4//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Screentweetr"\n        title=""\n        src="/static/screentweetr1-754c52494c216593f1a2e1feeb18742f-e8574.jpg"\n        srcset="/static/screentweetr1-754c52494c216593f1a2e1feeb18742f-c94d9.jpg 158w,\n/static/screentweetr1-754c52494c216593f1a2e1feeb18742f-9885b.jpg 315w,\n/static/screentweetr1-754c52494c216593f1a2e1feeb18742f-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>So, what is Screentweetr?</h3>\n<p>Screentweetr is an application built on AIR (Adobe Integrated Runtime). It uses the <a href="http://twitpic.com/">TwitPic</a> service - which links in to your twitter account - and takes image data from your clipboard and allows you to quickly upload it directly to TwitPic, and the option to immediately tweet the same image on <a href="http://twitter.com/home">Twitter</a>.</p>\n<h3>How does it work?</h3>\n<p>You might have seen my previous post: <a href="http://www.psyked.co.uk/general-chit-chat/print-screen-detection-in-air.htm">"Print Screen detection in AIR"</a> - that\'s the core functionality. Using the classes discussed in that post, the application listens for bitmap data on the clipboard.  Add in the JPEG encoder classes of the AIR framework to turn raw bitmaps into JPEG files, and then use the TwitPic API to post the JPEG data along with twitter credentials.</p>\n<p>What the user sees, initially, is not much (apart from the welcome screen).  When you take a screenshot however, a chirpy little notification window appears and offers you a way to upload your screenshot.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/screentweetr2-9c06f735683f7f2046c0110515d31e90-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgX/xAAWAQEBAQAAAAAAAAAAAAAAAAADAgT/2gAMAwEAAhADEAAAAXLYsFqZFii//8QAHBAAAQMFAAAAAAAAAAAAAAAAAgABAxIUM0FC/9oACAEBAAEFAriNAbqSKktnj5//xAAZEQADAAMAAAAAAAAAAAAAAAAAAQIDFCH/2gAIAQMBAT8BrApXDYo//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEREhP/2gAIAQIBAT8BvJmj/8QAHRAAAQMFAQAAAAAAAAAAAAAAAAECIRAxQXGBkf/aAAgBAQAGPwLPhDE6StLjdH//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMUFR/9oACAEBAAE/IflaGHB0bESgLdhDTC89hrOsf//aAAwDAQACAAMAAAAQNC//xAAYEQEBAAMAAAAAAAAAAAAAAAABACGh8P/aAAgBAwEBPxBM78QGG//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQIBAT8QGgbTt//EABwQAQEAAgIDAAAAAAAAAAAAAAERACExQWFxkf/aAAgBAQABPxADbaUmjm6wWkIr4zRleLeVwkkI2/MXoUI21neoavtz/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Screentweetr"\n        title=""\n        src="/static/screentweetr2-9c06f735683f7f2046c0110515d31e90-e8574.jpg"\n        srcset="/static/screentweetr2-9c06f735683f7f2046c0110515d31e90-c94d9.jpg 158w,\n/static/screentweetr2-9c06f735683f7f2046c0110515d31e90-9885b.jpg 315w,\n/static/screentweetr2-9c06f735683f7f2046c0110515d31e90-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>The advantage really is in the process - no longer is it a case of "Print screen", [paste into image software, save,] open website, select file, upload, tag, post - it\'s now a case of "Print screen", tag, upload.  You don\'t even end up creating an actual file on your computer - it\'s all virtual. (Which maybe isn\'t all good, but hey).</p>\n<h3>Why did I build it?</h3>\n<p>Well first of all, it doesn\'t look like anyones\' made a similar application. In addition, the concept is really quite simple.  The core functionality took only a couple of days to put together from scratch.  (I\'ve spent a lot more time in total on the development but hey, that\'s the fun of learning all the time.)</p>\n<p>Building successful little applications relies on the application being a) good at what it does and b) focussed on its task.  Well, that\'s what I think.  Big companies with established multiple-task products have got there with many years and many developers - if you don\'t have that then you need to start small and focus on what you want the application do to, and do it well.</p>\n<p>For example; <a href="http://www.psyked.co.uk/adobe/apollo/imagesizer-version-049-released.htm">ImageSizer</a> takes images and resizes them.  That\'s its core function, and that\'s all its gonna do.  I know I haven\'t a hope of competing with professional software and all it\'s features, so I\'m not trying to compete.  If I\'m going to make an application that can add snazzy pixel bender effects to images, then it\'s going to be a separate application - and that\'s what Screentweetr is all about. It\'s taking a potential user scenario - the process of screenshot to twitter - and building an application to facilitate that.</p>\n<h3>What\'s in store for the future?</h3>\n<p>Oh my, where do we start? Well, there\'s three key elements to the future development; Visuals, Services and User experience. Visuals and user experience are just generally improving the look and feel of the application, and how it works.  Services were suggested by <a href="http://twitter.com/destroytoday">@destroytoday</a> and sounds like a good idea - basically adding support for more than one image uploading service. So, <a href="http://www.tweetphoto.com/index.php">TweetPhoto</a> is on the list to go alongside support for TwitPic.</p>\n<h3>Where can I download it?</h3>\n<p>That\'s simple.  Screentweetr is available for <a href="http://www.adobe.com/cfusion/marketplace/index.cfm?event=marketplace.offering&#x26;marketplaceid=1&#x26;publisherid=10603&#x26;offeringid=13500" title="Click here to visit the AIR Marketplace to download Screentweetr.">download from the Adobe AIR Marketplace</a>.  I\'ll get an install badge up on here soon, but for now, just go to the AIR Marketplace.</p>',frontmatter:{title:"What are you looking at? (Introducing Screentweetr)",date:"June 19, 2009",tags:["screentweetr","twitter","air","tweetphoto","twitpic"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/tweener-4-years-old-now/",tags:["actionscript"],title:"Tweener - 4 years old now(!)",date:"2009-06-18T23:20:34.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/link-posting-xml-data-without-using-httpservice/",tags:["external-links","flex","httpservice","post-tag","rest"],title:"Link: POSTing XML data, without using HTTPService",date:"2009-06-21T17:32:49.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-what-are-you-looking-at-introducing-screentweetr-858f308c355714a33bea.js.map