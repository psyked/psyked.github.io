webpackJsonp([36825017768580],{1171:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/flashjavascript-problems-in-a-net-content-managed-website/index.md absPath of file >>> MarkdownRemark",html:"<p>I have been trying to figure out how to set get a session cookie from Flash via Javascript. Yes, Flash does have a limited ability to set its own 'cookies' with something called <strong>LocalStorage</strong>, but there are a few advantages to actually creating 'real' cookies and working with those - not least because people understand browser cookies a little more than LocalStorage areas.</p>\n<p>The solution itself is pretty simple - you create a Javascript function to manipulate the cookie data, and then Flash uses the <strong>ExternalInteface.call</strong> function to access these javascript functions. If you want to go even more advanced, you can leverage getURL to create your Javascript functions in the first place - my favorate because it doesn’t need any external javascript.</p>\n<p>( Sometime I'll clean out the code and post an example, but for now we're going to concentrate more on the problems encountered when using this solution. )</p>\n<p>As I said, the solution is great and works in most situations however, this doesn’t work in the CMS we're using and I couldn’t figure out why. It turns that our problem was;</p>\n<h2>DOM Access</h2>\n<p>.Net pages put all the html inside a form and apparently this means that objects like embedded swfs become hidden from the Document Object Model in Internet Explorer.</p>\n<p>The solution to this is to “elevate” the object to be part of the window rather that the document. It seems that by creating a reference and using a different element in the heirarchy fixes DOM visibility issues. i.e.</p>\n<blockquote>\n<p>window.objectID = document.getElementById(objectID);</p>\n</blockquote>\n<p>A strange solution, huh? Ben Waldron has more information on this solution <a href=\"http://blogs.popart.com/ben-waldron/archive/2007/11/08/flash-externalinterface-in-asp-net-applications.aspx\">here</a>.</p>",frontmatter:{title:"(Flash/Javascript) problems in a .Net Content-Managed Website",date:"June 08, 2008",tags:["flash","javascript","net","cms","cookies","localstorage","moss"],url:null}}},pathContext:{prev:{frontmatter:{path:"/blog/flex-goes-open-source-what-does-this-mean/",tags:["flex","open-source"],title:"Flex goes Open-Source, what does this mean?",image:null,date:"2007-04-26T19:35:11.000Z"}},next:{frontmatter:{path:"/blog/flash-vs-silverlight-20/",tags:["flash","silverlight"],title:"Flash vs. Silverlight 2.0",image:null,date:"2008-09-27T11:57:55.000Z"}}}}}});
//# sourceMappingURL=path---blog-flashjavascript-problems-in-a-net-content-managed-website-a9921117c44846185a51.js.map