webpackJsonp([0xdd41cd4ba08],{1290:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/talking-about-flex-gumbo-new-features/index.md absPath of file >>> MarkdownRemark",html:'<p>After seeing <a href="http://www.ashorten.com/">Andrew Shorten\'s</a> presentation on Flex 4 (Gumbo) and Flash Catalyst at <a href="http://www.flashmidlands.com/">#FlashMidlands</a> this weekend, I thought it would be a good time to post a few Flex 4 links and a few thoughts.</p>\n<p>Flex 4 is looking exciting - Flex is one helluva good tool anyway, so the step from the Flash IDE to Flex builder that I experienced is hard to top when going from Flex 3 to Flex 4, but there are a few nice features that I remember from the presentation. <em>[Note - this is all done from memory, so please correct me if I\'ve said anything incorrect.]</em></p>\n<p><em>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/flex4-980a76448fd1ad10c2853df16776042f-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHKU6joiH//xAAYEAACAwAAAAAAAAAAAAAAAAABEwASIP/aAAgBAQABBQJpBZL4/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFhAAAwAAAAAAAAAAAAAAAAAAASBR/9oACAEBAAY/AjG//8QAGRAAAwADAAAAAAAAAAAAAAAAAAEREEFh/9oACAEBAAE/IeAaFSuFZWVn/9oADAMBAAIAAwAAABAzz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABwQAQACAQUAAAAAAAAAAAAAAAEAEVEhMUFhgf/aAAgBAQABPxBo4IlUNfd4BoCy6Im+I5o5p3M//9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Flex 4"\n        title=""\n        src="/static/flex4-980a76448fd1ad10c2853df16776042f-e8574.jpg"\n        srcset="/static/flex4-980a76448fd1ad10c2853df16776042f-c94d9.jpg 158w,\n/static/flex4-980a76448fd1ad10c2853df16776042f-9885b.jpg 315w,\n/static/flex4-980a76448fd1ad10c2853df16776042f-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </em></p>\n<h3>Remote services - autogeneration of data models.</h3>\n<p>Flex 4 has a whole load of new wizard-type processes for automatically generating classes and data models for remote services, using a combination of introspection and descriptors.  Livecycle and PHP are the main (most widely supported) languages for this, but it will also work for webservices or httpservices written in any language, such as ASP.Net.</p>\n<p>Data models are basically classes in actionscript that represent objects stored in other places/locations.  I spent days putting together data models manually for my side-project on the Unfuddle API, so to hear that Flex 4 can autogenerate these is really cool (and slightly disheartening).</p>\n<h3>Flash CS4 support</h3>\n<p>Another biggie as far as my workflow is concerned - flash CS4 and Flex play well together.  Both in terms of the display of custom Flash components in the Design view, and also for switching between Flex and Flash - there\'s gonna be a button for moving between the two really easily.</p>\n<h3>Event handler autogeneration</h3>\n<p>Not a massive change, but Flex 4 can now generate event handler functions.  Instead of having to create your function when you create or setup an event listener, Flex 4 can generate these functions for you, just like it autocompletes your function or variable names.</p>\n<h3>Declarative graphics</h3>\n<p>Degrafa might have started this, it might not - but it certainly looks like it\'s been the inspiration for this feature.  Using MXML, you can now define graphics - shapes, strokes and fills.  It integrates closely with Flash Catalyst, and its nice to see community initiated projects like Degrafa being brought into the overall Flex product.</p>\n<h3>Unit testing, Network monitor</h3>\n<p><a href="http://opensource.adobe.com/wiki/display/flexunit/FlexUnit">FlexUnit</a> is going to be part of Flex 4, as is a new Network Monitor panel - both debugging, testing and optimization features for Flex professional. Network monitor, as you might expect, monitors and reports the network connections that your Flex project makes and records the data sent and recieved so you can get a better picture of what\'s going on.</p>\n<h2>What they didn\'t get right...</h2>\n<h3>Templates</h3>\n<p>Templates, templates templates.  Project templates are being introduced, but so far it just seems like you can customise the default template - not actually create and manage multiple project templates.  Dropped the ball there - multiple custom project templates could have been such a great feature...</p>\n<h2>Flex 4 resources</h2>\n<p>Flex 4 is due for release in the latter quarter of this year.  Nothing specific, of course.  You can get hold of a work-in-progress version of Flex 4 from the Adobe opensource site, and find a few more resources here;</p>\n<ul>\n<li>Adobe Opensource - Flex SDK: <a href="http://opensource.adobe.com/wiki/display/flexsdk/Gumbo">http://opensource.adobe.com/wiki/display/flexsdk/Gumbo</a></li>\n<li>Flex Gumbo Language reference: <a href="http://livedocs.adobe.com/flex/gumbo/langref/">http://livedocs.adobe.com/flex/gumbo/langref/</a></li>\n</ul>',frontmatter:{title:"Talking about: Flex Gumbo - new features",date:"April 06, 2009",tags:["flex","flex-4","gumbo"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/imagesizer-feedback-screen-fail/",tags:["imagesizer"],title:"ImageSizer - feedback screen fail. :-/",date:"2009-03-29T16:06:05.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/print-screen-detection-in-air/",tags:["air"],title:"Print Screen detection in AIR",date:"2009-04-17T08:23:06.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-talking-about-flex-gumbo-new-features-a839fbfc7adde7a554a5.js.map