webpackJsonp([89733463542544],{1061:function(t,i){t.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/application-information-class-for-air/index.md absPath of file >>> MarkdownRemark",html:"<p>Extracting the application information for an AIR application is in some ways a simple process - it's not like the process is too difficult - it's a bit of E4X on some data that is readily accessible from the application itself.  But if you're like me, then repeatedly accessing this information is a bit of a tiresome process.  So, I made a class that can do it for you...</p>\n<p>ApplicationInfo, as I've so cunningly called it, is a class that gives you information straight from the application descriptor file - including application name, version, description and even the filepaths to the application icons.  I wouldn't say it's perfect - projects in their first iterations rarely are - but it's a start.</p>\n<h3><strong>Download</strong></h3>\n<p><a href=\"http://uploads.psyked.co.uk/2008/11/applicationinfo.zip\">Download the ApplicationInfo class.</a></p>\n<h3><strong>About</strong></h3>\n<p>The class is designed for Flex, but will work fine for pure AS3. Most of the functions are static, so you don't need to instanciate the class before you use it, and hopefully it gives you all of the information you'll need.</p>\n<h3><strong>Using ApplicationInfo</strong></h3>\n<p>Step 1: Import the class, Step 2: Use it!</p>\n<p>import couk.psyked.air.ApplicationInfo;\nprivate var appVersion:String = ApplicationInfo.appVersion;</p>\n<p>The variables that are available are;</p>\n<ul>\n<li>appID</li>\n<li>appName</li>\n<li>appVersion</li>\n<li>appFilename</li>\n<li>appDescription</li>\n<li>appCopyright</li>\n<li>appIcon16URL</li>\n<li>appIcon32URL</li>\n<li>appIcon48URL</li>\n<li>appIcon128URL</li>\n</ul>\n<p>The last four are the paths to the application icon - useful I think, if you want to make things a little more dynamic.  I've used them as a data-binded source path for an image loader component, and it worked pretty well.</p>\n<p>I'm hoping to put the class on Google code or something - make a project of it and see if anyones interested in expanding it or incorporating it into another project - that's all the rage thesedays, isn't it?</p>",frontmatter:{title:"Application Information Class for AIR",date:"December 01, 2008",tags:["actionscript","air","applicationinfo"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/darn-them-xml-namespaces/",tags:["actionscript","flex","e4x","namespaces","xml"],title:"Darn them XML namespaces!",date:"2008-12-01T08:30:17.000Z"}},next:{frontmatter:{path:"/blog/getting-your-source-code-hosted-on-google-code/",tags:["actionscript","air","applicationinfo","google-code","subversion"],title:"Getting your source code hosted on Google Code...",date:"2008-12-01T17:00:58.000Z"}}}}}});
//# sourceMappingURL=path---blog-application-information-class-for-air-243a2fc8d37db4923029.js.map