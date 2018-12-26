webpackJsonp([0xe83d01782bad],{1265:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/executing-multiple-xmlhttprequests-successfully/index.md absPath of file >>> MarkdownRemark",html:'<p>So I\'m hacking together a simple client-side AJAX - based on <a href="http://en.wikipedia.org/wiki/AHAH">AHAH</a> - and all of the example scripts only work with a single request.  Attempting to use the same script twice meant that the results would overwrite each other.  Ughh.</p>\n<p>The problem it turned out, was as a simple as the latter requests replacing the newer request, because their references were being overwritten.  So instead of using a single variable, I figured "why not pass the references around in the functions".  Here it is then, an AHAH-based set of AJAX functions, that works for multiple simultaneous function calls.</p>\n<pre><code>function loadExternalContentDone(req, url, target) {\n    if (req.readyState == 4) { \n        if (req.status == 200) { \n            document.getElementById(target).innerHTML = req.responseText;\n        } else {\n            document.getElementById(target).innerHTML=" loadExternalContent Error:\\n"+ req.status + "\\n" +req.statusText;\n        }\n    }\n}\nfunction loadExternalContent(url, target) {\n    var req;\n    document.getElementById(target).innerHTML = \' Fetching data...\';\n    if (window.XMLHttpRequest) {\n        req = new XMLHttpRequest();\n    } else if (window.ActiveXObject) {\n        req = new ActiveXObject("Microsoft.XMLHTTP");\n    }\n    if (req !== undefined) {\n        req.onreadystatechange = function() {loadExternalContentDone(req, url, target);};\n        req.open("GET", url, true);\n        req.send("");\n    }\n}\nfunction loadContent(name, div) {\n    loadExternalContent(name,div);\n    return false;\n}\n</code></pre>',frontmatter:{title:"Executing multiple XMLHTTPRequests - successfully.",date:"December 03, 2008",tags:["javascript","ajax","xmlhttprequest"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/my-splash-screen-example-updated-with-applicationinfo-class/",tags:["air","applicationinfo"],title:"My Splash Screen example - updated with ApplicationInfo class",date:"2008-12-02T12:30:50.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/air-recipes-tips-and-tricks-for-air-application-development/",tags:["air"],title:"AIR Recipes: Tips and Tricks for AIR Application Development",date:"2008-12-04T11:00:12.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-executing-multiple-xmlhttprequests-successfully-26554087d489a64d1478.js.map