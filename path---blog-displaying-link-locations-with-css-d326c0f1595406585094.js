webpackJsonp([0x7a24b7382dc8],{1102:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/displaying-link-locations-with-css/index.md absPath of file >>> MarkdownRemark",html:"<h3>Why would you want too?</h3>\n<p>How often is it the case that you're not <em>quite</em> sure where a link is going to take you? Ok, so it's not a major issue for mainstream browsers - after all, that's what the \"Status bar\" is for. But beyond your normal browser operation - say on an unusual machine or if you're looking at a print-off - just how can you tell where a link should be going? If the link text is good, you might be able to track down the target page, but that's nothing compared to the usefullness of a full URL.</p>\n<p>Luckily with a smidgen of CSS and an up-to-date browser, you can solve at least a few of these problems in a nice, clever way. A List Apart covered this in the misty old era of 2002, back when I was still making HTML pages with notepad and cobbling together images with Trial versions of Paint Shop Pro. In the article, <a href=\"http://www.alistapart.com/articles/goingtoprint/\" title=\"Open link in a new window\">CSS Design: Going to Print</a>, they Eric Meyer covers - amongst other things - the issue of displaying 'Printed links', making links that are as useful in print as they are functional onscreen.</p>\n<h3>What do I have to do?</h3>\n<p>The long and short of it is this snippet of code;</p>\n<pre><code>#content a:link:after, \n#content a:visited:after { \n    content: \" (\" attr(href) \") \";\n    font-size: 90%;\n}\n</code></pre>\n<h3>How does it work?</h3>\n<p>Well, the ':after' selectors are pseudo-selectors under the CSS 2.1 spec, and can add styles to an imaginary object that is created after the chosen item. In this case, it's doubled up with the 'content:' property, one that can generate basic text. This is really the usage that the ':before', ':after' and 'content:' properties / selectors were invented for.</p>\n<p>Following the 'content:' property is a bit of calculation - about as complex as CSS calculations can get - and is effectively adding two strings and a property together to generate the content. The 'attr(href) ' is dynamically pulls in the href attribute of the selected HTML object. It could pretty much be used on any attribute, though.</p>\n<p>What's the final result? That's simple. Any links in the #content element of the page will automatically have their href / url displayed as text after the link itself. That way you can easily see where they go, without relying on things like the status bar. Especially useful if you're creating printable version of pages, because of how seemlessly it will display.</p>\n<p>It seems curious that I haven't seen this in action much - presumably because the article was so old before the major browsers caught up with the CSS 2 specs. Who knows?</p>\n<h3>In action...</h3>\n<p>Nick La, over at <a href=\"http://www.webdesignerwall.com/\" title=\"Open link in a new window\">Web Designer Wall</a>, uses a very similar technique for the comments section of his website. When you roll over the commenters' name, it displays - in plain text - the url associated with that commenter. This is however, done without this method, in favor of what I assume to be a nice cunning bit of ':hover' pseudoclasses and 'display:' properties. It just goes to show that this idea doesn't have to be limited to print stylesheets.</p>\n<p>There is now an example using this technique to display email address locations at <a href=\"http://css-tricks.com/better-email-links-featuring-css-attribute-selectors/\">http://css-tricks.com/better-email-links-featuring-css-attribute-selectors/</a>. Check it out!</p>",frontmatter:{title:"Displaying Link locations with CSS",date:"November 27, 2007",tags:["css","html","accessibility"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/snazzy-photoshop-tutorials-to-check-out/",tags:["design","external-links","photoshop","photoshop-resources"],title:"3 Snazzy Photoshop tutorials to check out…",date:"2007-11-26T08:00:43.000Z"}},next:{frontmatter:{path:"/blog/pimp-my-pc-improving-the-look-feel-and-general-efficiency/",tags:["downloadable-applications","performance-upgrades","windows-themes"],title:"Pimp My PC - Improving the look, feel and general efficiency",date:"2007-12-02T18:59:29.000Z"}}}}}});
//# sourceMappingURL=path---blog-displaying-link-locations-with-css-d326c0f1595406585094.js.map