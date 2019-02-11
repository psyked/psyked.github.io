webpackJsonp([0xf9a0cc6f2171],{1084:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter - Forty by HTML5 UP",author:"Hunter Chang"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/exempli-gratia-using-tweener/index.md absPath of file >>> MarkdownRemark",html:'<blockquote>Tweener (caurina.transitions.Tweener) is a Class used to create tweenings and other transitions via ActionScript code for projects built on the Flash platform.</blockquote>\nTo use Tweener in your projects, the first step is to download the class files that will work with your project from <a href="http://code.google.com/p/tweener/" target="_blank">the Google Code page for Tweener</a>, and then we&apos;ll get started.\n<h2>Download Tweener</h2>\n<a href="http://code.google.com/p/tweener/" target="_blank"><img class="alignnone size-full wp-image-271" title="googelcode" src="http://uploads.psyked.co.uk/2008/07/googelcode.jpg" alt="" width="500" height="280"></a>\n<p>There are currently 3 versions of the Tweener class, one for (AS2) Flash player 7 &#x26; Flash Lite 2, one for (AS2) Flash Player 8, and one for (AS3) Flash Player 9. For which one you download is down to your project, but the interface and implimentation is pretty much the same across each of the versions.</p>\n<p>I\'m going to assume we\'re working with the Actionscript 2 version of Tweener for these demonstrations.</p>\n<h2>Add Tweener to your project</h2>\nOnce you\'ve downloaded the Tweener files, the easiest way (if you\'re not using a central class repository or custom class locations in Flash) to add Tweener is to unzip the folders in the zip file to the same location as your source file, so the \'caurina\' folder should be located in the same directory as your fla. Then, in your actionscript panel type;\n<pre>import caurina.transitions.Tweener;</pre>\n<h2>Move stuff!</h2>\nTweener should now be ready for use.  Create a MovieClip to start working with on the stage. You add tweens with the Tweener.addTween(); function, which takes two attributes: the target, and an object containing the tween variables.  The <a href="http://hosted.zeh.com.br/tweener/docs/en-us/" target="_blank">Tweener documentation</a> lists all of the possible parameters, but the basic ones you will need are <strong>time</strong>, <strong>transition </strong>and the <strong>attribute </strong>you\'re manipulating. You can only add each one once, but you can add more than once attribute with a single line of code (an advantage over Flash\'s inbuilt mx.transitions.Tween class)\n<pre>Tweener.addTween(myMovie, {_x:10, _y:10, time:1, transition:"linear"});</pre>\nThe setup of any tween is pretty simple.  There\'s two variables that tweener accepts - the object to apply the tween too, and an object that contains all of the tween attributes, including the variables to affect, the transition type (as a string) and the time for the tween to take (measured in seconds).\n<p>The code above will move \'myMovie\' from its current position to 10, 10 over 1 second, with a linear (no easing) movement.  We add easing by simply changing the transition property - my personal fave is "easeInOutQuad".  That\'s simple enough, but what about when you want a more complex series of animations?  Well, that\'s when you need to start...</p>\n<h2>Timing it</h2>\nIf you weren\'t using Tweener, you\'d have a horrible job here, stacking functions to execute when another is complete.  Tweener however, has a <strong>delay</strong> feature.  You can declare all the tweens you want in a single block, and add the delay attribute to them to have them execute <em>when </em>you want.\n<pre>Tweener.addTween(myMovie, {_x:10, _y:10, time:1, transition:"linear"});\nTweener.addTween(myMovie, {_x:200, _y:50, delay:1, time:1,\ntransition:"linear"});</pre>\nThat should be a nice two-stage animation - no mess, no fuss.\n<p>Compared to other methods of implimenting these kind of animations in other systems, Tweener is a breeze! And did I mention that it doesn\'t matter what order you add your tween attributes? Handy!</p>\n<h2>Calling functions after your animation is done</h2>\nOf course, if you\'re tweening with Actionscript, its damn likely that you\'ll want to execute functions either during or after your animations are complete.  Unsurprisingly, that\'s also pretty easy to do, it\'s just another attribute to be added to your line of code, \'<strong>onComplete</strong>\' or \'<strong>onUpdate</strong>\' (which is like onProgress). Passing parameters to your functions is also as easy as adding \'<strong>onCompleteParams</strong>\' or \'<strong>onUpdateParams</strong>\'.\n<pre>Tweener.addTween(myMovie, {_x:10, _y:10, time:1,\ntransition:"easeInOutQuad", onComplete:onCompleteHander});\n<p>function onCompleteHandler():Void {\ntrace(this);\n}</p>\n<p>Tweener.addTween(myMovie, {_x:50, _y:50, time:1, delay:1, transition:\n"easeInOutQuad", onComplete:onCompleteHanderTwo, onCompleteParams:[myMovie]});</p>\n<p>function onCompleteHanderTwo(this:MovieClip):Void {\ntrace(this);\n}</pre>\nMercifully, the scope of the function isn\'t much changed when it\'s executed than when its declared, because of the way Tweener seems to work - and even if you are having scoping problems, the simplicity of adding parameters to your functions helps out a lot.</p>\n<p>Anyway, that\'s about all I have to say about Tweener - it\'s great, and it really helped me out recently on a really tight deadline!</p>\n<h2>Resources</h2>\n<ul>\n\t<li><a href="http://hosted.zeh.com.br/tweener/docs/en-us/" target="_blank">Tweener Documentation</a></li>\n\t<li><a href="http://hosted.zeh.com.br/tweener/docs/en-us/misc/transitions.html" target="_blank">Tweener Tween Types Reference</a></li>\n</ul>',frontmatter:{title:"Exempli Gratia : Using Tweener",date:"July 18, 2008",tags:["flash","actionscript","animation","google-code","open-source"]}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-exempli-gratia-using-tweener-7a2cc0c11d00200f4bc3.js.map