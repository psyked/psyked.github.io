webpackJsonp([0x9028a35bd88a],{1326:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/ie8-beta-goes-public-and-what-are-those-new-features/index.md absPath of file >>> MarkdownRemark",html:'<h3>Or to be more specific, what the hell are the "Accelerators" and the "Web Slices"?</h3>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ie8beta-805f7b275e0853bfeffc501bfe83ba1e-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAetrPGJUG//EABcQAQEBAQAAAAAAAAAAAAAAAAASAQL/2gAIAQEAAQUCzta04nE4/8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQMBAT8Bp//EABcRAAMBAAAAAAAAAAAAAAAAAAACEWH/2gAIAQIBAT8BbCMf/8QAFhABAQEAAAAAAAAAAAAAAAAAADEQ/9oACAEBAAY/AkTIj//EABoQAQEAAgMAAAAAAAAAAAAAAAEAESExUWH/2gAIAQEAAT8hwaTiQOI2LtLxT0r/2gAMAwEAAgADAAAAEEcv/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARQf/aAAgBAwEBPxAOrG//xAAYEQACAwAAAAAAAAAAAAAAAAAAASExYf/aAAgBAgEBPxCSVGaH/8QAHBABAAMAAgMAAAAAAAAAAAAAAQARITFRcZHB/9oACAEBAAE/ECxDAc7FelQRwe5WBVObh2Hklj5z/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ie8beta"\n        title=""\n        src="/static/ie8beta-805f7b275e0853bfeffc501bfe83ba1e-e8574.jpg"\n        srcset="/static/ie8beta-805f7b275e0853bfeffc501bfe83ba1e-c94d9.jpg 158w,\n/static/ie8beta-805f7b275e0853bfeffc501bfe83ba1e-9885b.jpg 315w,\n/static/ie8beta-805f7b275e0853bfeffc501bfe83ba1e-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>You can download the Internet Explorer 8 Beta from <a href="http://www.microsoft.com/windows/internet-explorer/beta/default.aspx">http://www.microsoft.com/windows/internet-explorer/beta/default.aspx</a>.  Overall, it\'s quite an interesting update - and most noticeably it shows a distinct push on the innovation front.  Since I\'m talking about it, I\'ll go over a few of the noticeable new features, and then get onto the specifics of the "accelerator" and "web slices" features.</p>\n<h3>Imitation</h3>\n<p>Is the sincerest form of flattery, you know.  IE8 maintains a lot of the IE7 layout, but it has a lot of features that look like they\'ve been ripped right out of Google Chrome - right down to the naming conventions and feature sets.  They\'ve even toned down the shiny \'Web 2.0\' graphics for more flat graphics, and used colour-coded tabs and warnings.  It\'s looking promising for developers too - instead of the development tools being an add-on, they\'re built into the application.  There\'s a developer panel with the hierarchical information and inheritance patterns like which Firebug gives Firefox, and the system memory profiling that Chrome offers users.  It\'s like Christmas come early.</p>\n<p>Oh, and there\'s \'InPrivate\' browsing, aka \'Incognito\', aka \'porn-mode\'.</p>\n<h3>Innovation</h3>\n<p>It appears that Microsoft aren\'t content to just sit around poaching ideas from other browsers, either.  Some of the new features are called \'<a href="http://www.microsoft.com/windows/internet-explorer/beta/features/accelerators.aspx">Accelerators</a>\' and \'<a href="http://www.microsoft.com/windows/internet-explorer/beta/features/web-slices.aspx">Web Slices</a>\'.  Never heard of them?  Nope, neither had I.  And neither had many other people - presumably because this appears to all be powered by a new Microsoft-invented technology.</p>\n<h3>What are Accelerators?</h3>\n<p>Well, it seems like Accelerators are an enhanced form of the <a href="http://www.opensearch.org/Home">OpenSearch</a> microformat - the one that powers that search box in the top right hand of Internet Explorer and Firefox.  Only now, with a bit of browser integration jiggery-pokery, you can have your search results accessible from the right-click menu of the browser.</p>\n<p>You can read all about the technology behind Accelerators (imaginatively called OpenService) at the MSDN site: <a href="http://msdn.microsoft.com/en-us/library/cc304166(VS.85).aspx">http://msdn.microsoft.com/en-us/library/cc304166(VS.85).aspx</a></p>\n<h3>What are Web Slices?</h3>\n<p>It looks like these are an enhanced form of the good old bookmark.  They certainly seem to appear in the same place as the good old bookmark.  What\'s different is that they have a preview window associated with them, and presumably from the development side of things you first have to make a stand-alone portion of the page that can be loaded (much like you would an AJAX page I guess) and then add the IE-specific browser integration stuff to your HTML pages.</p>\n<p>You can read the Microsoft Developer Network documentation and tutorials at: <a href="http://msdn.microsoft.com/en-us/library/cc956158(VS.85).aspx">http://msdn.microsoft.com/en-us/library/cc956158(VS.85).aspx</a></p>\n<h3>Demo:</h3>\n<p>If you\'ve got Internet Explorer 8, then you might want to check out the IE8-enabled ebay demo page: <a href="http://ie8.ebay.com/">http://ie8.ebay.com/</a></p>\n<h3>What do I think of them?</h3>\n<p>I\'m a bit wary of these new features, and what they represent for developers.  We bemoan Internet Explorer for not innovating, but when they do start innovating they bring in all kinds of new formats and technologies which they\'ve made themselves.  Which then means we have to go making browser-specific scripts and hacks to make everything work... which we\'ll moan even more about - after all, we\'ve spent years building around the existing differences in browsers, and have only recently managed to lumber into the light of universal, cross platform, technologies.  And then they throw more in the mix!</p>\n<p>In addition to that, I find the whole iconised-rollover thing that the Web Slices have going on is a bit over the top, and will likely annoy the hell out of me if I start seeing it pop up everywhere.  Maybe that\'s just the Ebay demo page, but I don\'t like the idea.  But then, maybe I\'m just disliking change because it\'s change.</p>\n<p>And the Accelerators?  Nice idea, but a little over the top on the right-click menu, if you ask me.</p>\n<p>That\'s not to say the ideas are bad or not useful, just more that I don\'t like them.  Yet.</p>',frontmatter:{title:"IE8 Beta goes public - and what are those new features?",date:"December 18, 2008",tags:["ie8","internet-explorer","microsoft","opensearch","openservice"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/imagesizer-updated-to-version-039/",tags:["imagesizer","air-applications"],title:"ImageSizer - updated to version 0.3.9!",date:"2008-12-16T09:17:05.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/mmm-cookies-in-actionscript-javascript/",tags:["actionscript","javascript","cookies"],title:"Mmm... Cookies. In ActionScript / JavaScript.",date:"2008-12-19T08:43:03.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-ie-8-beta-goes-public-and-what-are-those-new-features-b11615168acbac3c0a72.js.map