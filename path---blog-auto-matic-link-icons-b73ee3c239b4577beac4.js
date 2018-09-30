webpackJsonp([5405724473581],{1210:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/auto-matic-link-icons/index.md absPath of file >>> MarkdownRemark",html:"<p>CSS 2.1 has many new wonderful capabilities, and I'm going to show you one of my latest tricks I've picked up - automatic link icons.</p>\n<p>First, a look at the end result :-</p>\n<p><img src=\"auto-matic-link-icons.png\"></p>\n<p>Now, you may have seen similar things on a few websites already, wikipedia certainly makes use of the technique to highlight external links. The astute of you may notice that the 'external' link isn't actually external - think of it more as 'absolute'. How do we achieve these results automatically? Well, that's with the power of the new CSS selectors. <a href=\"http://www.456bereastreet.com/archive/200509/css_21_selectors_part_1/\">456BereaSt.</a> has a nice article on them, but the stuff we're concerned with is the attribute selectors.</p>\n<p>Attribute selectors are done with [square brackets], and can include simple conditional statements, with some options for wildcards thrown in to boot. The easiest way for me to explain is to show you...</p>\n<p>Here's a simple 'absolute' link selector - a[href=\"http:\"] - this will target all the 'a' tags, with the attribute 'href' which is equal to \"http:\". Interesting, but its not very useful, because the attribute would need to be exactly \"http:\" for it to work. So, we add the ^ operator, which means 'starts with'. So ( a[href^=\"http:\"] ) means any link with a href attribute that starts with 'http:' - thus, every external link.</p>\n<p>Another operator we can use is $, which means 'ends with'. So a[href$='.pdf'] is any links that end with .pdf. Now we know how to automatically treat different links differently. Oh, and it works fine in all the most recent browsers (IE7, Firefox) And won't have any effect on browsers that don't understand the selectors, so its safe to use.</p>\n<p>Now, styling the links is really a matter of personal preference, (and your design), but I the infamous <a href=\"http://www.famfamfam.com/\">famfamfam</a> silk icon set will help you out here. Once you've got your icons, a little clever implimentation of styles will enable you to indent your link slightly to add you icon in as a background image. Thus;</p>\n<script src=\"https://gist.github.com/1074526.js\"> </script>\n<p>And you're away - limited only by your icon supply, and the volume of conditional statements you want to make! Here's mine - covering external links, mailto links, and common document formats...</p>\n<script src=\"https://gist.github.com/1074522.js\"> </script>",frontmatter:{title:"Auto-matic Link Icons",date:"July 10, 2007",tags:["css","icons"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/free-fonts-free-vectors/",tags:["design","resources"],title:"Free Fonts, Free Vectors",date:"2007-06-30T09:43:31.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/little-html-mysteries-alt-vs-title/",tags:["html","validation"],title:"Little HTML mysteries...  alt vs. title",date:"2007-07-18T19:04:20.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-auto-matic-link-icons-b73ee3c239b4577beac4.js.map