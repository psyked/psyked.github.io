webpackJsonp([88515143727939],{1114:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/actionscript-debugging/index.md absPath of file >>> MarkdownRemark",html:'<p>This is a simple little segment of code that i find very useful to work my way through flash files. It basically lists all the properties (which includes direct children) of the target movieclip. Here\'s a few implimentations...</p>\n<p>(Set <code>n</code> beforehand with something like <code>var n = my_mc</code>)</p>\n<pre><code>for(var i in n){\ntrace(i+" : "+n[i]);\n};\n</code></pre>\n<p>and thats it in a nutshell. Your output will be something like this;</p>\n<pre><code>property : value\n</code></pre>\n<p>Ok, so thats not a very good example, but try it and you\'ll see.\nHere\'s a function-based version for you...</p>\n<pre><code>traceProperties = function(movieclip){\nn = movieclip;\nfor(i in n){\ntrace(i+" : "+n[i]);\n}\n}\n</code></pre>\n<p>and it\'s Actionscript 2.0 sibling...</p>\n<pre><code>function traceProperties(n:Object):Void{\nfor(var i in n){\ntrace(i+" : "+n[i]);\n}\n}\n</code></pre>',frontmatter:{title:"ActionScript Debugging",date:"February 28, 2007",tags:["actionscript"]}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-actionscript-debugging-8cb1df64c9226f217995.js.map