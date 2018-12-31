webpackJsonp([75313786331289],{1289:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/flex-quick-tip-printing-an-objects-contents/index.md absPath of file >>> MarkdownRemark",html:"<p>You quickly learn in Actionscript 3 that tracing an objects' contents is not always that simple.  Commands such as <strong>trace(myObject);</strong> often yeild the highly infuriating <strong>[object Object]</strong> return, which tells you mostly nothing of what you actually wanted to know.  After that you can move on to more advanced trace logic, like the handy;</p>\n<pre><code>for(var i in n) {\n    trace(i+\":\"+n\\[i\\]);\n}\n</code></pre>\n<p>But that's a lot of stuff to type, and often yeilds infuriatingly long stacks of parameter traces.</p>\n<p>Flex can make things a little easier, with this useful utility class, the cunningly named <strong>ObjectUtil</strong> class.  Simply import the class (<strong>import mx.utils.ObjectUtil;</strong>) and call the following method; <strong>trace(ObjectUtil.toString(myObject));</strong> and you'll get a nice output of all the properties of your object.</p>\n<p>Kudos to flextutor.org for this, in their original post \"<a href=\"http://www.flextutor.org/flex-tips-suggestions/how-to-print-an-object-content-in-flex/\">How to print an objects' contents in Flex</a>.\"  I thought I'd repost it here though, not least because there seems to be an issue loading their site as I' m writing this article.</p>",frontmatter:{title:"Flex Quick Tip: Printing an Objects' contents",date:"June 15, 2009",tags:["actionscript"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/link-rendering-native-system-icons-in-air/",tags:["air","icons"],title:"Link: Rendering native system icons in AIR",date:"2009-05-22T08:05:43.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/link-creating-a-snazzy-background-in-flex-4/",tags:["flex","degrafa","flex-4","spark"],title:"Link: Creating a snazzy background in Flex 4",date:"2009-06-15T08:41:05.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-flex-quick-tip-printing-an-objects-contents-129b6656a93c16fde778.js.map