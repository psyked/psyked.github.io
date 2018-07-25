webpackJsonp([55890072942475],{1359:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/syncronising-scrollpane-components-in-actionscript-2/index.md absPath of file >>> MarkdownRemark",html:'<p>This is perhaps an unusual one - and one I haven\'t seen anyone else make much fuss over, so here goes.</p>\n<p>Using the standard Version 2 components (Flash MX2004+) I\'ve been trying to link the movement of three components together. "No biggie" you\'d think. You can after all, set listeners on the .scroll property of the component instance, and then use that to set the .scroll properties of the other instances. Well yes, that\'s true - but looking closely at the movement of the ScrollPanes, you can see a slight lag in their movement. A bit of frantic scrolling can throw the whole thing out of place.</p>\n<pre><code>var ScrollPaneListener:Object = new Object();\n//\nScrollPaneListener.scroll = function(){\n    scrollpaneinstance2.vPosition = scrollpaneinstance1.vPosition;\n    scrollpaneinstance3.hPosition = scrollpaneinstance1.hPosition;\n}\nscrollpaneinstance1.addEventListener("scroll", ScrollPaneListener);\n</code></pre>\n<p>You should see in this example, that the ScrollPanes can go out of sync, particulary while dragging the scrollbar. - And the effect is even more pronounced with really complex contents.</p>\n<p>[kml_flashembed movie="<a href="http://uploads.psyked.co.uk/ScrollPanesExampleVersion1.swf">http://uploads.psyked.co.uk/ScrollPanesExampleVersion1.swf</a>" height="300" width="400" /]</p>\n<p>After a bit of digging, I found out that the \'x\' and \'y\' scroll properties (not the same as \'_x\' and \'_y\') are updated at longer intervals, so can miss out on movements and give inaccurate positions. The solution? Thankfully we can dig into the components themselves with ActionScript, and pull out the properties we want. So, in place of our inital code, we can use;</p>\n<pre><code>var ScrollPaneListener:Object = new Object();\n//\nScrollPaneListener.scroll = function(){ \n    scrollpaneinstance2.vPosition = scrollpaneinstance1.spContentHolder.\\_y;\n    scrollpaneinstance3.hPosition = scrollpaneinstance1.spContentHolder.\\_x;\n}\nscrollpaneinstance1.addEventListener("scroll", ScrollPaneListener);\n</code></pre>\n<p>And in this example, the ScrollPanes should always be at identical scroll positions, even with some pretty intensive contents.</p>\n<p>[kml_flashembed movie="<a href="http://uploads.psyked.co.uk/ScrollPanesExampleVersion2.swf">http://uploads.psyked.co.uk/ScrollPanesExampleVersion2.swf</a>" height="300" width="400" /]</p>\n<p>The code is now far more accurate, because it always gets the same position as the actual position of the components\' on stage, although it\'s slightly more resource-intensive. (Only slightly)</p>',frontmatter:{title:"Syncronising ScrollPane Components in ActionScript 2.",date:"November 04, 2007",tags:["actionscript","component","scrollpane-component"],url:null}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-syncronising-scrollpane-components-in-actionscript-2-72a60410fa1cbd5fcb89.js.map