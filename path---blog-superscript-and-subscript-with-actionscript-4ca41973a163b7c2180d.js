webpackJsonp([0xfead639bdfe2],{1433:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/superscript-and-subscript-with-actionscript/index.md absPath of file >>> MarkdownRemark",html:'<h3><strong>***</strong>And a little bit of custom-font magic...**</h3>\n<h3><img src="/content/images/2008/03/johnny.jpg" alt="johnny.jpg"></h3>\n<p>Although I do like writing lovely elegant code I\'m also a big fan of \'the cheap hack\'! Here\'s one I used last week to get round the age old problem of dynamic text boxes in Flash not supporting superscript and subscript. You need to do the following:</p>\n<ol>\n<li>Install the ggsuperscript and ggsubscript fonts, available from <a href="http://blog.ggshow.com/index.php/reference?cat=121" title="Open link in a new window">GG\'s Flash Blog</a></li>\n<li>Make sure that you have 2 dynamic text boxes offstage with the 2 fonts embedded.</li>\n<li>Then you can use the following code to insert text into a dynamic text box (in this example it\'s called \'textObject\')</li>\n<li>Job done!</li>\n</ol>\n<blockquote>\n<p>//#######################################</p>\n</blockquote>\n<p>var myString:String = "Adobe<sup>TM</sup> C<sub>2</sub>H<sub>4</sub>"; var supStartExpression:RegExp = new RegExp("<sup>", "g") var supEndExpression:RegExp = new RegExp("</sup>", "g") var subStartExpression:RegExp = new RegExp("<sub>", "g") var subEndExpression:RegExp = new RegExp("</sub>", "g")</p>\n<p>myString = myString.replace(supStartExpression, "<font face="GG Superscript">") myString = myString.replace(supEndExpression, "</font>") myString = myString.replace(subStartExpression, "<font face="GG Subscript">") myString = myString.replace(subEndExpression, "</font>")</p>\n<p>textObject.htmlText = myString</p>\n<p>//####################################### The above code uses the new AS3 \'replace\' method along with it\'s really cool new support for Regular Expressions (the "g" bit in the regular expression makes sure that it matches and replaces ALL instances of the string). Of course you could just use the <font> tags in your code and forget all the Regular Expression stuff. I was just being a ponce!</p>\n<p>If you could be bothered you could even extend the string class etc, etc. If you are using ActionScript 2.0 you could do something really nasty like:</p>\n<blockquote>\n<p>//#######################################</p>\n</blockquote>\n<p>String.prototype.replace = function(find, replace) { return this.split(find).join(replace); };</p>\n<p>var str = originalString.replace("<sup>", "<font face="GG Superscript">"); str = str.replace("</sup>", "</font>"); str = originalString.replace("<sub>", "<font face="GG Subscript">"); str = str.replace("</sub>", "</font>"); textField.htmlText = str;</p>\n<p>//####################################### Have fun.....</p>',frontmatter:{title:"Superscript and Subscript - with Actionscript*",date:"March 30, 2008",tags:["actionscript","external-links","flash","fonts","text-formatting"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/custom-character-set-embedding-in-flash/",tags:["flash","fonts"],title:"Custom character-set embedding in Flash",date:"2008-03-25T22:13:11.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/exploring-the-flash-cs3-flvplayback-component/",tags:["flash"],title:"Exploring the Flash CS3 FLVPlayback component",date:"2008-04-04T22:55:09.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-superscript-and-subscript-with-actionscript-4ca41973a163b7c2180d.js.map