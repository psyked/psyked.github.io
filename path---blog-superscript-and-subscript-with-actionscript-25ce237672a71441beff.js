webpackJsonp([0xfead639bdfe2],{1339:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/superscript-and-subscript-with-actionscript/index.md absPath of file >>> MarkdownRemark",html:'<h3><strong>***</strong>And a little bit of custom-font magic...**</h3>\n<h3><img src="/content/images/2008/03/johnny.jpg" alt="johnny.jpg"></h3>\n<p>Although I do like writing lovely elegant code I\'m also a big fan of \'the cheap hack\'! Here\'s one I used last week to get round the age old problem of dynamic text boxes in Flash not supporting superscript and subscript. You need to do the following:</p>\n<ol>\n<li>Install the ggsuperscript and ggsubscript fonts, available from <a href="http://blog.ggshow.com/index.php/reference?cat=121" title="Open link in a new window">GG\'s Flash Blog</a></li>\n<li>Make sure that you have 2 dynamic text boxes offstage with the 2 fonts embedded.</li>\n<li>Then you can use the following code to insert text into a dynamic text box (in this example it\'s called \'textObject\')</li>\n<li>Job done!</li>\n</ol>\n<blockquote>\n<p>//#######################################</p>\n</blockquote>\n<p>var myString:String = "Adobe<sup>TM</sup> C<sub>2</sub>H<sub>4</sub>"; var supStartExpression:RegExp = new RegExp("<sup>", "g") var supEndExpression:RegExp = new RegExp("</sup>", "g") var subStartExpression:RegExp = new RegExp("<sub>", "g") var subEndExpression:RegExp = new RegExp("</sub>", "g")</p>\n<p>myString = myString.replace(supStartExpression, "<font face="GG Superscript">") myString = myString.replace(supEndExpression, "</font>") myString = myString.replace(subStartExpression, "<font face="GG Subscript">") myString = myString.replace(subEndExpression, "</font>")</p>\n<p>textObject.htmlText = myString</p>\n<p>//####################################### The above code uses the new AS3 \'replace\' method along with it\'s really cool new support for Regular Expressions (the "g" bit in the regular expression makes sure that it matches and replaces ALL instances of the string). Of course you could just use the <font> tags in your code and forget all the Regular Expression stuff. I was just being a ponce!</p>\n<p>If you could be bothered you could even extend the string class etc, etc. If you are using ActionScript 2.0 you could do something really nasty like:</p>\n<blockquote>\n<p>//#######################################</p>\n</blockquote>\n<p>String.prototype.replace = function(find, replace) { return this.split(find).join(replace); };</p>\n<p>var str = originalString.replace("<sup>", "<font face="GG Superscript">"); str = str.replace("</sup>", "</font>"); str = originalString.replace("<sub>", "<font face="GG Subscript">"); str = str.replace("</sub>", "</font>"); textField.htmlText = str;</p>\n<p>//####################################### Have fun.....</p>',frontmatter:{title:"Superscript and Subscript - with Actionscript*",date:"March 30, 2008",tags:["actionscript","external-links","flash","fonts","text-formatting"],url:null}}},pathContext:{prev:{frontmatter:{path:"/blog/targeting-multiple-browsers-with-css-and-some-javascript-trickery/",tags:["css","javascript"],title:"Targeting multiple browsers with CSS... and some Javascript trickery.",image:null,date:"2009-11-28T08:00:19.000Z"}},next:{frontmatter:{path:"/blog/talking-about-flex-gumbo-new-features/",tags:["flex","flex-4","gumbo"],title:"Talking about: Flex Gumbo - new features",image:null,date:"2009-04-06T08:15:52.000Z"}}}}}});
//# sourceMappingURL=path---blog-superscript-and-subscript-with-actionscript-25ce237672a71441beff.js.map