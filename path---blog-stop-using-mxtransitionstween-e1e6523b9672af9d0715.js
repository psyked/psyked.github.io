webpackJsonp([79957449264585],{1454:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/stop-using-mxtransitionstween/index.md absPath of file >>> MarkdownRemark",html:"<p>If you're still using Flash's inbuilt <strong>Tween </strong>classes for you scripted animations, I suggest you stop - and start making things easier for yourself by using <strong>Tweener </strong>instead. Tweener is a class that replaces Tween, works for Actionscript 2 and Actionscript 3, offers a simpler interface for creating tweens, and has a larger range of easing options to work with.</p>\n<h3><strong>What's wrong with Tween?</strong></h3>\nThe Tween class is ok - up to a point. It does what it's supposed to, but once you start trying to integrate it with serious full-on Actionscripting you'll notice a few snags.  If you're dynamically creating and removing objects, and then want to dynamically modify the tweens, your tweens will likely go crazy.  Start a new Tween and there's very little way you can stop it - even by removing its subject. Stacking Tweens doesn't go down well either - if you create one to move an object left to right, and then mid-animation another to move it back to the left, things go ok until the point that the first animation should finish - whereupon your object will flick back to the finishing position of the first, and then resume the second animation.\n<p>Moreso than that however, is the hassle needed to create an animation with Tween;</p>\n<pre><span>import mx.transitions.Tween;</span>\n<span>import mx.transitions.easing.*;</span>\n<span>var xPosT:Tween = new Tween(myMovieClip, \"_x\", Bounce.easeOut, 0,\nStage.width, 3, true);</span>\n<span>xPosT.onMotionFinished = function() {</span>\n<span style=\"padding-left: 30px;\">// movement finished</span>\n<span>};</span></pre>\n<h3><strong>Why is Tweener better?</strong></h3>\nFirst up, there's no problems with mixing and matching, no misplaced motion crazyness.  You can apply and reapply tweens to your hearts content, and they all work.\n<p>Secondly, the interface is simpler - you can setup a tween with less lines of code, and you don't have to worry about managing objects to execute functions once your tween has run its course. And a single line of code can handle all of the attributes you want changing for a single object - no separate Tween objects for each attribute, just a single Tweener line for all the attributes (on the same object, under the same time and easing style).</p>\n<pre>import caurina.transitions.Tweener;\n\nTweener.addTween(myMovieClip, {_x:Stage.width, time:1, transition:\"linear\",\n onComplete:onCompleteHandler});\n\nfunction onCompleteHander():Void {\n<span style=\"padding-left: 30px;\">// movement finished</span>\n};</pre>\n<p>Thirdly, you don't have to worry about things like start variables - just the end variables.  Which makes far more sense.  In most situations I find I'm only adding the current position of an object as the start variable to Tween.  In Tweener, that's taken as the automatic variable - after all, if you want to set a different position for the object before the tween starts, you just do that on the line above.</p>\n<p>Lastly, there's a invaluable <strong>delay</strong> attribute.  It's a built-in timer for your animations - how useful is that!  Want an animation to start after 10 seconds? Easy - just add 'delay:10' to your Tweener line.</p>\n<h2>Resources</h2>\n<ul>\n\t<li><a href=\"http://code.google.com/p/tweener/\" target=\"_blank\">Download Tweener from its Google Code location</a></li>\n</ul>",frontmatter:{title:"Stop using mx.transitions.Tween;",date:"July 12, 2008",tags:["flash","actionscript"]}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-stop-using-mxtransitionstween-e1e6523b9672af9d0715.js.map