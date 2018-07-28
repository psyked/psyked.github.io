webpackJsonp([0x9364fe70b0bb],{1369:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/using-bindable-changewatcher-in-actionscript-only-classes/index.md absPath of file >>> MarkdownRemark",html:"<h3>What are you talking about?</h3>\n<p>Recently I've been toying around with using [Bindable] Metadata in Flex and AS3, namely trying to not only make it so that my static variables can be used as bindings in Flex, but also that I can detect when the variables change.</p>\n<h3>How do you do that?</h3>\n<p>There's a few ways you can do that, and a whole plethora of other blogs that will give you rundowns on how.  What you need to look for are the ChangeWatcher and BindingUtils classes [<a href=\"http://livedocs.adobe.com/flex/3/html/help.html?content=databinding_7.html\">livedocs</a>].  There doesn't seem to be anything in particular thats different between them, ChangeWatcher lets you define a variable and function to call on changes, and BindingUtils lets you define functions to call when variables are set or properties change - all in all, not much difference.</p>\n<h3>But...</h3>\n<p>What none of the examples mention however, is that all of the tutorials on this are covering script in MXML components or extending existing MXML components and are therefore all using the Flex framework.  You can add in all the ChangeWatcher.watch()'s you want and get no errors, but if you're not extending the Flex framework, nothing is going to work!</p>\n<h3>So.</h3>\n<p>So, if you want to detect binding changes in an ActionScript-only class, you need to do it in something that's extending a Flex component, otherwise it just won't work!  Obvious really, but it took me a good few hours to figure out.  I haven't done extensive testing to see what the lowest level component to extend was, but I've plumbed for extending the UIComponent, and all of my binding detections work.</p>\n<p>pulic class ImageSizerApplicationConfig extends UIComponent</p>",frontmatter:{title:"Using [Bindable] & ChangeWatcher in ActionScript-only classes",date:"January 19, 2009",tags:["actionscript","flex","binding","components"],url:null}}},pathContext:{prev:{frontmatter:{path:"/blog/utf-8-bot-file-encoding-conversion-with-air/",tags:["flash","adobe","air","cs3"],title:"UTF-8 Bot - file encoding conversion with AIR",image:null,date:"2008-04-08T00:23:09.000Z"}},next:{frontmatter:{path:"/blog/using-google-analytics-in-flash/",tags:["actionscript","flash","google-analytics"],title:"Using Google Analytics in Flash",image:null,date:"2009-01-06T09:20:18.000Z"}}}}}});
//# sourceMappingURL=path---blog-using-bindable-changewatcher-in-actionscript-only-classes-6b5a99eec96d1e498498.js.map