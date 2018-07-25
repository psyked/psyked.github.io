webpackJsonp([0xc072ff3e84c1],{1052:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/air-files-downloading-as-zips/index.md absPath of file >>> MarkdownRemark",html:"<p>Well, here's a mercifully easy to solve problem with Adobe AIR.</p>\n<p>A couple of people pointed out that Internet Explorer was saving my .air download files as .zip format - even going so far as to change the filename extension to .zip. (Firefox is fine, and doesn't do this.) AIR packages are based on the Zip format, so the file contents itself aren't actually being changed - but when the end user recieves the file, this is going to change the application that handles the file on their local machine.</p>\n<p>In the case of Windows, the file explorer will extract the archive, and the user will be looking at a bunch of useless folders and compiled source files. Without the .air extension, or the .air resource forks, then the installation process for your shiny new AIR App. just isn't going to start.</p>\n<p>Given that .air files are based on zip archives, it isn't too much of a mystery to see where the .zip associations come from, but I never thought that IE would go sofar as to rename files for you!</p>\n<p>Well, the problem here is server mime-types<a href=\"http://en.wikipedia.org/wiki/Internet_media_type\">[1]</a> - file associations that the webserver uses to decide how to deliver content. I've encountered a similar issue with .flv (Flash Video) files before - and here we are again. What you need to do is completely server-side, and get the mime-type \"<code>application/vnd.adobe.air-application-installer-package+zip</code>\" associated with .air files.</p>\n<h2>Read the official notes;</h2>\n<ul>\n<li><a href=\"http://labs.adobe.com/wiki/index.php/AIR:Release_Notes#Setting_the_MIME_type_on_your_Web_server_for_AIR_applications\">AIR:Release Notes - Setting the MIME type</a></li>\n</ul>",frontmatter:{title:"AIR files downloading as .zips?",date:"April 11, 2008",tags:["troubleshooting"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/on-air-london-review/",tags:["adobe","mdm-zinc","work"],title:"on AIR London / Review",date:"2008-04-11T07:30:35.000Z"}},next:{frontmatter:{path:"/blog/adobe-air-is/",tags:["flash","director","framework","mdm-zinc"],title:"Adobe AIR is...",date:"2008-04-13T11:00:08.000Z"}}}}}});
//# sourceMappingURL=path---blog-air-files-downloading-as-zips-3fdc31c96bc634df2001.js.map