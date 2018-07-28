webpackJsonp([0xc7c7a47dcb7f],{1313:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/tweener-and-256-levels-of-recursion-were-exceeded-in-one-action-list/index.md absPath of file >>> MarkdownRemark",html:"<p>Tweeners' great, but I came across one little problem the other day: when I tried to remove an externally loaded swf from the stage while it was mid-animation, Tweener could bring the whole Flash movie to a halt with the error '256 levels of recursion were exceeded in one action list'.</p>\n<p>Obviously that's bad - because this particular error completely stops the flash player with no warning to the end user.  And the fact that external content - which I have no control over - can cause this is doubly bad.</p>\n<p>All is not lost however, because Tweener has a useful little function: <strong>Tweener.removeAllTweens();</strong> ok, so it can interfere with everything on your flash movie as well, but at least it's stopping the recursion errors.</p>\n<p>So, if you try to remove a loaded swf file with .removeMovieClip(), you might find that it's using Tweener.  And if so, call Tweener.removeAllTweens() before you call .removeMovieClip() and you'll be fine.  Phew! case closed.</p>\n<h2>Resources;</h2>\n<ul>\n<li><a href=\"http://hosted.zeh.com.br/tweener/docs/en-us/\">Tweener Documentation</a> - <a href=\"http://hosted.zeh.com.br/tweener/docs/en-us/methods/Tweener_removeAllTweens.html\">removeAllTweens();</a></li>\n</ul>",frontmatter:{title:'Tweener and "256 levels of recursion were exceeded in one action list"',date:"October 13, 2008",tags:["actionscript"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/fish-eye-menu-in-actionscript-20/",tags:["flash","actionscript"],title:"Fish Eye Menu in ActionScript 2.0",date:"2008-10-12T13:01:05.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/flash-player-10-is-live/",tags:["flash"],title:"Flash Player 10 is Live",date:"2008-10-15T12:20:15.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-tweener-and-256-levels-of-recursion-were-exceeded-in-one-action-list-42120393a7f572b86650.js.map