webpackJsonp([92824725106020],{1228:function(A,t){A.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/i-hate-using-avm1movie/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/avm1movie-hydra-ff368cb583c8ae50b3c20213741b5e54-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAUY6FISI6Wf/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIRAzL/2gAIAQEAAQUCWllbsynLlHPz/8QAFhEAAwAAAAAAAAAAAAAAAAAAEBEh/9oACAEDAQE/AYh//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8BV//EABgQAAMBAQAAAAAAAAAAAAAAAAAQETEh/9oACAEBAAY/AjmrCRf/xAAaEAADAQADAAAAAAAAAAAAAAAAAREhMUHx/9oACAEBAAE/IaRLtyCcqnUzRfE1gVqIkba7HNP/2gAMAwEAAgADAAAAEHjf/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAh/9oACAEDAQE/EHA2L//EABYRAQEBAAAAAAAAAAAAAAAAACEAEf/aAAgBAgEBPxDWJf/EABoQAQADAQEBAAAAAAAAAAAAAAEAESExUUH/2gAIAQEAAT8QOgsgg6szMBJwad2XajToi0+TIFmiKJFfAJyVACyKXR5P/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="avm1movie hydra"\n        title=""\n        src="/portfolio-2018/static/avm1movie-hydra-ff368cb583c8ae50b3c20213741b5e54-e8574.jpg"\n        srcset="/portfolio-2018/static/avm1movie-hydra-ff368cb583c8ae50b3c20213741b5e54-c94d9.jpg 158w,\n/portfolio-2018/static/avm1movie-hydra-ff368cb583c8ae50b3c20213741b5e54-9885b.jpg 315w,\n/portfolio-2018/static/avm1movie-hydra-ff368cb583c8ae50b3c20213741b5e54-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Developer beware.  AVM1Movie content (running ActionScript 2 content inside ActionScript 3 movies) is a spiralling nexus of doom that will lead to your eventual insanity, if you persist in walking down that path.</p>\n<p>Seriously.  I\'d love to catalogue the many intricacies and weird behaviours of AVM1Movie content, but that would mean being able to understand and explain them - which I can\'t do. The bottom line is that ActionScript 2 content in an ActionScript 3 movie doesn\'t behave the same as an ActionScript 2 movie does on its own.  Certain things just flat-out don\'t work, or don\'t work \'a certain way\'.  Others that you thought did work actually work slightly or completely different, but do start working correctly with some encouragement.</p>\n<h3>Want some examples?</h3>\n<p>Goodness knows if they\'re always repeatable, but these certainly happened to me...</p>\n<ul>\n<li>In AS2, draw a rectangle, with a width of 130 pixels.  Measure the width.  What is the width, according to Flash? 89 pixels.  Fan-tastic.  Cast the width as a Number (even though it was already a number) before you start drawing, and try again.  What is the width this time, according to Flash? 130 pixels.</li>\n<li>Dynamically generate an XML structure in AS2, using the <strong>addElement</strong> or <strong>createElement</strong> methods.  It works in AS2 on its own, nothing works when it\'s loaded as AVM1.  Rewrite the function to create everything as a String and call <strong>parseXML</strong> on it.  It all works.</li>\n<li>Try calling a function.  Function doesn\'t work.  Set an enterFrame listener, and call the function a single frame later.  It works.</li>\n</ul>\n<p>AVM1Movie has done its utmost to ruin my sanity - don\'t let it ruin yours. Avoid doing anything technically complicated in it, rewrite it all in AS3 if you can!</p>',frontmatter:{title:"I hate using AVM1Movie...",date:"November 22, 2010",tags:["actionscript"],url:null}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-i-hate-using-avm-1-movie-ba611cba60fc63d412e2.js.map