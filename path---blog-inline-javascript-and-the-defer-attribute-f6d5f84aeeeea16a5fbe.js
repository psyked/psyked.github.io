webpackJsonp([24781381460324],{1247:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/inline-javascript-and-the-defer-attribute/index.md absPath of file >>> MarkdownRemark",html:"<p>We use javascript to load our Flash elements into Webpages - it just makes life so much easier. There's many ways you can go about it, but one is to use inline Javascript to handle function calls to your <strong>document.write();</strong> or <strong>innerHTML();</strong> functions. Naturally, these functions scrape through our HTML and do their business, targeting and replacing elements with the embed/object code for our Flash movies.</p>\n<p>You might call us slackers, or you might base it on our faulty understanding of the defer attribute (and <a href=\"http://www.websiteoptimization.com/speed/tweak/defer/\" title=\"Open link in a new window\">this site</a> will confirm it), but we thought that adding the defer attribute to our inline code thus;</p>\n<pre><code>&#x3C;script type=\"text/javascript\" defer>\n    addFlash('flashdiv');\n&#x3C;/script>\n</code></pre>\n<p>Would mean that the inline script wouldn't be executed until the whole page is loaded. So you could effectively add the code anywhere in the page - say, the header - and it didn't matter. Well, what works in Internet Explorer doesn't always work in Firefox (et al.).</p>\n<p>The code itself is running a <strong>getElementByID()</strong> call, so the element it's looking for needs to exist on the page for the script to function properly. If the function call is made when the entire page is loaded, then the element you're targeting will exist, and obviously if you're calling the function inline - before the appropriate section of the page has been rendered - then the element won't exist. Think the defer attribute would solve it? Alas, you are wrong.</p>\n<h2>Browser differences?</h2>\n<p>In Internet Explorer, the defer attribute works like this (pausing script execution until the page has rendered), but in Firefox the code seems to execute at the moment it is encountered, and not display the results until the page has finished rendering. So, if you're trying to cut corners in Firefox, it just ain't gonna work.</p>\n<h2>In summary;</h2>\n<p>Make sure your inline code is still able to execute without the defer attribute - otherwise it won't play ball.</p>",frontmatter:{title:"Inline Javascript and the defer attribute",date:"May 11, 2008",tags:["javascript","embedding-flash"],url:null}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-inline-javascript-and-the-defer-attribute-f6d5f84aeeeea16a5fbe.js.map