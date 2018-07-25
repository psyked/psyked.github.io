webpackJsonp([89733463542544],{1031:function(t,i){t.exports={data:{site:{siteMetadata:{title:"Gatsby Starter - Forty by HTML5 UP",author:"Hunter Chang"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/application-information-class-for-air/index.md absPath of file >>> MarkdownRemark",html:"<p>Extracting the application information for an AIR application is in some ways a simple process - it's not like the process is too difficult - it's a bit of E4X on some data that is readily accessible from the application itself.  But if you're like me, then repeatedly accessing this information is a bit of a tiresome process.  So, I made a class that can do it for you...</p>\n<p>ApplicationInfo, as I've so cunningly called it, is a class that gives you information straight from the application descriptor file - including application name, version, description and even the filepaths to the application icons.  I wouldn't say it's perfect - projects in their first iterations rarely are - but it's a start.</p>\n<h3><strong>Download</strong></h3>\n<a href=\"http://uploads.psyked.co.uk/2008/11/applicationinfo.zip\">Download the ApplicationInfo class.</a>\n<h3><strong>About</strong></h3>\nThe class is designed for Flex, but will work fine for pure AS3. Most of the functions are static, so you don't need to instanciate the class before you use it, and hopefully it gives you all of the information you'll need.\n<h3><strong>Using ApplicationInfo</strong></h3>\nStep 1: Import the class, Step 2: Use it!\n<pre>import couk.psyked.air.ApplicationInfo;\nprivate var appVersion:String = ApplicationInfo.appVersion;</pre>\nThe variables that are available are;\n<ul>\n\t<li>appID</li>\n\t<li>appName</li>\n\t<li>appVersion</li>\n\t<li>appFilename</li>\n\t<li>appDescription</li>\n\t<li>appCopyright</li>\n\t<li>appIcon16URL</li>\n\t<li>appIcon32URL</li>\n\t<li>appIcon48URL</li>\n\t<li>appIcon128URL</li>\n</ul>\n<p>The last four are the paths to the application icon - useful I think, if you want to make things a little more dynamic.  I've used them as a data-binded source path for an image loader component, and it worked pretty well.</p>\n<p>I'm hoping to put the class on Google code or something - make a project of it and see if anyones interested in expanding it or incorporating it into another project - that's all the rage thesedays, isn't it?</p>",frontmatter:{title:"Application Information Class for AIR",date:"December 01, 2008",tags:["actionscript","air","applicationinfo"]}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-application-information-class-for-air-4820f81d633aa57514f2.js.map