webpackJsonp([0x97e14cc17d9e],{1271:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/externalinterface-not-working-in-firefox/index.md absPath of file >>> MarkdownRemark",html:"<p>Here's a wierd one. Let's say you have a flash navigation - one of those old DHTML style drop-down ones, but done in flash and layered over the top of your page content. You can stick the wmode to transparent and have a transparent background for your flash.</p>\n<p>That's dandy - but in most browsers (ie. firefox) you'll run into problems interacting with the content underneath your flash movie, particulary hyperlinks. Hyperlinks and form fields just become inaccessible. Setting the wmode might make things transparent, but it doesn't help the 'click-through' aspect of transparency. So, what do you do? The solution I've been using is a JavaScript function which resizes the flash movie, activated using ExternalInterface.</p>\n<h3>The problem?</h3>\n<p>In Internet Explorer, it works fine. JavaScript calls, DOM elements resize. Firefox? No dice.</p>\n<h3>The solution.</h3>\n<p>The solution I found has prettymuch baffled me as to why it should work, but it does. Using the fully-qualified class name for ExternalInterface (<code>flash.external.ExternalInterface</code>) solved all of my Firefox woes.</p>\n<p>So quite simply - change your <code>ExternalInterface.call();</code> to <code>flash.external.ExternalInterface.call();</code></p>",frontmatter:{title:"ExternalInterface not working in Firefox?",date:"October 20, 2007",tags:["actionscript","externalinterface","firefox"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/xhtml-hyperlinks-and-separating-content-from-style/",tags:["html","javascript","hyperlinks","xhtml"],title:"XHTML, Hyperlinks and separating content from style.",date:"2007-10-15T20:58:51.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/fast-and-fresh-loading-graphics-with-ajaxloadinfo/",tags:["design","external-links"],title:"Fast and fresh loading graphics with ajaxload.info",date:"2007-10-21T13:45:29.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-externalinterface-not-working-in-firefox-12a20b917e8e3621d0cb.js.map