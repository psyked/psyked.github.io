webpackJsonp([69082465553667],{1138:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/fish-eye-menu-in-actionscript-20/index.md absPath of file >>> MarkdownRemark",html:'<p>A little while ago we had to do a Fish Eye menu - the magnification effect you see on the Mac OSX dock menu - but we had to do it in ActionScript 2.0, rather than ActionScript 3.0.</p>\n<p>Now, <a href="http://www.shinedraw.com/">Shine Draw</a> have been kind enough to put a version of this out into the wild, but it\'s in AS3 <a href="http://www.shinedraw.com/animation-effect/flash-and-silverlight-fish-eye-menu/">[link]</a>. Of course AS3 is faster and nicer, but there are still some out there who want their stuff targetted for Flash Player 8 - which means AS1 or AS2 only - so I backwards converted Shine Draw\'s lovely class-based demo to a timeline-scripted AS2 version.</p>\n<h2>Demo</h2>\n<p>[kml_flashembed movie="<a href="http://www.psyked.co.uk/downloads/fisheyemenu%5C_as2.swf">http://www.psyked.co.uk/downloads/fisheyemenu_as2.swf</a>" height="280" width="500" /]</p>\n<p><strong>Download:</strong> <a href="http://www.psyked.co.uk/wp-content/uploads/2008/10/fisheyemenu_as2.zip">Fish Eye Menu [Flash CS3, Flash Player 8, AS3, 110KB]</a></p>\n<h2>The process;</h2>\n<p>Actually, it wasn\'t too hard to backwards convert the AS3 version - the three main things to do are to</p>\n<ol>\n<li>Take the code out of a document class structure, and onto the timeline - which in reality is mostly a copy and paste job, a bit of commenting out, and changing the events or function calls that initalise the code.</li>\n<li>Change variables and parameters, linkages and library classes; <strong>.scaleX</strong> to <strong>._xscale</strong>, event names and listener arrangements, and library item classes.</li>\n<li>Rewrite code dealing with depths or the display list. - This is actually the most difficult part of the conversion, and really highlights how difficult depths were to work with, pre AS3.</li>\n</ol>\n<p>There\'s a little bit of code commenting in there, but if you\'re interested in seeing how the two compare, I would suggest you head over to Shine Draw, download the AS3 version, download this version, and look at them side-by-side.</p>\n<h2>Resources;</h2>\n<ul>\n<li><a href="http://www.shinedraw.com/animation-effect/flash-and-silverlight-fish-eye-menu/">Shine Draw - flash and Silverlight: Fish Eye Menu</a> (yes, there\'s a Silverlight equivilent!)</li>\n<li><strong>Update:</strong> <a href="http://gist.github.com/518634">The timeline code, available on GitHub</a></li>\n</ul>',frontmatter:{title:"Fish Eye Menu in ActionScript 2.0",date:"October 12, 2008",tags:["flash","actionscript"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/fotb-day-one/",tags:["flash","conferences","flash-on-the-beach","fotb"],title:"FOTB: Day One",image:null,date:"2008-09-30T07:39:27.000Z"}},next:{frontmatter:{path:"/blog/tweener-and-256-levels-of-recursion-were-exceeded-in-one-action-list/",tags:["actionscript"],title:'Tweener and "256 levels of recursion were exceeded in one action list"',image:null,date:"2008-10-13T08:30:52.000Z"}}}}}});
//# sourceMappingURL=path---blog-fish-eye-menu-in-actionscript-20-9ea9a28ab77680a5b35c.js.map