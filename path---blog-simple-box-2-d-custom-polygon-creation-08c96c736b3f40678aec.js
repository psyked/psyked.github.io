webpackJsonp([0x8b260bac948a],{1426:function(A,e){A.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/simple-box2d-custom-polygon-creation/index.md absPath of file >>> MarkdownRemark",html:'<p>I\'ve been working on some classes to simplify Box2D for Actionscript developers (See <a href="http://www.psyked.co.uk/actionscript/simplifying-box2das3.htm">previous post</a> for a quick intro).  The latest update to these classes introduces couple of minor ideas, and one gosh-darned awesome idea, if I do say so myself.  Let\'s start with the awesome things, and move on from there...</p>\n<h3>Awesome thing: Creating Custom Polygons</h3>\n<p>Or rather the methods for creating them.  Shapes in Box2D come in three basic flavours - circle, rectangle and custom polygon.  Moreover, everything must be convex (no inny bits), have no more than 8 sides, and can\'t have holes.  On the plus side you can still make larger, more complex objects out of smaller ones - but it all involves a lot of thinking.</p>\n<p>So, here\'s the solution - or rather, the options.</p>\n<p><strong>Polygon creation option #1 - Creating a polygon from an array of points.</strong></p>\n<p>Using some clever triangulation code from <a href="http://www.splashdust.net/2009/10/box2d-mouse-drawing-now-with-ear-clipping/">Splashdust.net</a>, there\'s a simple method for creating any custom shape from an array of Point objects.  With this method you can create a shape with any number of sides, and not worry about whether the shape is concave or convex.  It\'ll still break if the edges of your shape interest each other, and doesn\'t support holes in the objects you\'re creating, but it\'s a start.</p>\n<object width="500" height="280">\n<param name="movie" value="/content/images/2010/01/ComplexPolygonExample.swf">\n<embed src="/content/images/2010/01/ComplexPolygonExample.swf" width="500" height="280">\n</embed>\n</object>\n<pre><code>var array:Array = [ \n    new Point( 0, 0 ), \n    new Point( 10, 0 ),\n    new Point( 10, 10 ), \n    new Point( 20, 10 ), \n    new Point( 20, 0 ), \n    new Point( 30, 0 ), \n    new Point( 30, 30 ), \n    new Point( 0, 30 ) \n];\n\nworld.createComplexPolygon( 50, 50, array );\n</code></pre>\n<p><strong>Polygon creation option #2 - Creating a polygon from a shape in a library.</strong></p>\n<p><strong><a href="flashshapedemo.jpg">\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/flashshapedemo-d380b041afd8e774624f382253d0ab80-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQCAwUG/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABey+gWSJYD//EABoQAQADAAMAAAAAAAAAAAAAAAIBAxEEEhX/2gAIAQEAAQUCtSrj0HlS71SCxPEowmDH/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Bp//EAB0QAAICAQUAAAAAAAAAAAAAAAABAhEDITEyM1H/2gAIAQEABj8Cnku0lojgiMvSpK0daKWx/8QAGxAAAwEBAAMAAAAAAAAAAAAAAAERITFxkbH/2gAIAQEAAT8hlug3906M/I9jkWEZWLSh9GIK4nEf/9oADAMBAAIAAwAAABDXD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABcRAAMBAAAAAAAAAAAAAAAAAAEQETH/2gAIAQIBAT8QNav/xAAbEAEBAAIDAQAAAAAAAAAAAAABEQAxIUFRkf/aAAgBAQABPxBFgA4NlD26fMUaoZbwUKuHXOSBkBN4UjiFPT7gfzwOjP/Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="flashshapedemo"\n        title=""\n        src="/static/flashshapedemo-d380b041afd8e774624f382253d0ab80-e8574.jpg"\n        srcset="/static/flashshapedemo-d380b041afd8e774624f382253d0ab80-c94d9.jpg 158w,\n/static/flashshapedemo-d380b041afd8e774624f382253d0ab80-9885b.jpg 315w,\n/static/flashshapedemo-d380b041afd8e774624f382253d0ab80-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </a></strong></p>\n<p>This is where things get cool.  Creating a shape from a series of points is all well and good, but it\'s a laborious process to set up and modify.  You can create a shape in the Flash IDE, add your symbol to your library and import it to Box2D.  Currently this method only supports single shapes on a single layer, and only straight edges - but multiple shapes, layers and curved edges are definitely on the list for the future.</p>\n<object width="500" height="280">\n<param name="movie" value="/content/images/2010/01/LibraryShapeExample.swf">\n<embed src="/content/images/2010/01/LibraryShapeExample.swf" width="500" height="280">\n</embed>\n</object>\n<pre><code>world.createPolyFromLibraryShape( 300, 100, "sampleShape", "vectorassets.swf" );\n</code></pre>\n<h3>Minor thing #1: Mouse interaction</h3>\n<p>What fun is a simulation if you can\'t interact with it? So we now have an easy way to add mouse joints to move things about.  In the next version it\'s my plan to add a method for filtering out objects, presumably based on each bodies userData.</p>\n<pre><code>world.mouseInteraction = true;\n</code></pre>\n<h3>Minor thing #2: Framerate-independent animation.</h3>\n<p>I stole this idea wholeheartedly from <a href="http://actionsnippet.com/?p=1471">QuickBox2D</a>.  Too good an idea to pass up I\'m afraid, this just means that the simulation of the Box2D world is based on a timer, not a framerate.  In theory then, the simulation doesn\'t slow down or speed up depending on the framerate - which is useful for many things, like graphic-intensive applications and/or memory optimisation.</p>\n<pre><code>world.framerateIndependantAnimation = true;\n</code></pre>\n<p>And here\'s some code for a quick example with framerate independent animation and mouse interaction enabled;</p>\n<pre><code>var options:Box2DWorldOptions = new Box2DWorldOptions( 500, 280, 30, 9.8 );\n    options.setWorldEdges( true, true, true, true );\nvar world:Box2DWorld = Box2DUtils.createBoxedWorld( options );\n    world.debugDraw = true;\n    world.mouseInteractExclusions = new Array();\n    world.mouseInteraction = true;\n    world.framerateIndependantAnimation = true;\naddChild( world );\n</code></pre>\n<p>I\'ve compiled all of my source files into a handy project file if you want to take a look.  Documentation and comments are a bit sparse, but hopefully it\'ll prove useful!</p>\n<h2><a href="/content/images/2010/01/box2dutils.zip">Download the project files [Zip, 48kb]</a></h2>\n<p><a href="simples.jpg">\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/simples-51da6ce8b7bf93f345149ce9624cd8f1-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBAgT/xAAWAQEBAQAAAAAAAAAAAAAAAAADAQT/2gAMAwEAAhADEAAAAUF0jo1EkT//xAAaEAACAwEBAAAAAAAAAAAAAAAAAQIRIRIx/9oACAEBAAEFAonevCJdN+//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIRMf/aAAgBAwEBPwGTpCw//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8BJ//EABoQAAEFAQAAAAAAAAAAAAAAABAAAQIxYXH/2gAIAQEABj8CVcMscf/EABsQAAIDAAMAAAAAAAAAAAAAAAABESExUWHR/9oACAEBAAE/IUKorzy0RtfpgTQOisLNJ//aAAwDAQACAAMAAAAQGw//xAAWEQADAAAAAAAAAAAAAAAAAAAAASH/2gAIAQMBAT8QdAtD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAhMf/aAAgBAgEBPxAC7Pb/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMVFBYf/aAAgBAQABPxAa35cHrTdq258jENKCZ9HSEpg3yYi4Mw5LcV+i3yf/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="simples"\n        title=""\n        src="/static/simples-51da6ce8b7bf93f345149ce9624cd8f1-e8574.jpg"\n        srcset="/static/simples-51da6ce8b7bf93f345149ce9624cd8f1-c94d9.jpg 158w,\n/static/simples-51da6ce8b7bf93f345149ce9624cd8f1-9885b.jpg 315w,\n/static/simples-51da6ce8b7bf93f345149ce9624cd8f1-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </a></p>\n<p>Simples!</p>',frontmatter:{title:"Simple Box2D - Custom Polygon creation.",date:"January 11, 2010",tags:["actionscript","box2d"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/simplifying-box2das3/",tags:["actionscript","box2d"],title:"Simplifying Box2DAS3...",date:"2010-01-08T08:25:15.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/demo-source-simple-box2d-with-curved-edges/",tags:["box2d","actionscript"],title:"Demo & Source: Simple Box2D, with curved edges!",date:"2010-01-13T23:38:35.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-simple-box-2-d-custom-polygon-creation-08c96c736b3f40678aec.js.map