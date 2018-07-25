webpackJsonp([0xeaac1f4a83],{1009:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Gatsby Starter - Forty by HTML5 UP",author:"Hunter Chang"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/actionscript-geturl-vs-externalinterface-when-why/index.md absPath of file >>> MarkdownRemark",html:"<p>This post all stems from a project I've been working on very recently, making a drop-down menu in flash, that sits in a HTML page.  <em><strong>What we're talking in relation to here is, getting flash to execute JavaScript DOM functions.</strong></em></p>\n<p>Now, there are couple of ways for Flash to interact with its host page.  The first one that springs to mind is <a href=\"http://livedocs.adobe.com/flash/8/main/wwhelp/wwhimpl/common/html/wwhelp.htm?context=LiveDocs_Parts&amp;file=00001730.html\" title=\"Open link in a new window\" target=\"_blank\">getURL()</a>, the same function that enables flash to load webpages.  The second requires a little more preparation, and is <a href=\"http://livedocs.adobe.com/flash/8/main/wwhelp/wwhimpl/common/html/wwhelp.htm?context=LiveDocs_Parts&amp;file=00002200.html\" title=\"Open link in a new window\" target=\"_blank\">ExternalInterface.call()</a>.  Both have an upside and both a downside.  One's old-school and one's new-school.  There are however, real reasons why you should use one instead of the other in different situations.</p>\n<h3>getURL</h3>\n<ul>\n\t<li>getURL takes advantage of the abilities of your browser.  After all, http: isn't the only thing your browser can do.  You can (amongst other things) call javascript directly.  So, instead of passing a new url through the getURL function, you could pass a javascript function, which would execute on the page.  You could, theoretically, pass an entire javascript function as a single string, and execute javascript on your html page - without the function existing in the html.</li>\n\t<li>The downside to this is that getURL overrides anything the browser is trying to execute.  So, if you've got a stack of javascript functions that are executing, getURL will effectively kill them. - Once flash executes the getURL function, kiss your other functions goodbye.</li>\n</ul>\n<h3>ExternalInterface</h3>\n<ul>\n\t<li>ExternalInterface is an ActionScript 2 'gateway' for JavaScript / ActionScript communication.  As well as it's ability for two-way communication, ExternalInterface doesn't kill off other scripts running in the browser.</li>\n\t<li>The downside, from a flexibility point-of-view is that ExternalInterface can only call existing functions in either language, it can't create them on the fly.  Which is more secure, I suppose.</li>\n</ul>\n<h3>So, to summarise:</h3>\n<strong>getURL:</strong> Kills running scripts, but doesn't need a named function to exist\n<p><strong>ExternalInterface:</strong> Doesn't kill running scripts, but does need a named function to exist</p>",frontmatter:{title:"ActionScript: getURL vs. ExternalInterface - When & Why",date:"September 23, 2007",tags:["actionscript","javascript"]}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-actionscript-geturl-vs-externalinterface-when-why-4dbf301a6c723f7b7d2d.js.map