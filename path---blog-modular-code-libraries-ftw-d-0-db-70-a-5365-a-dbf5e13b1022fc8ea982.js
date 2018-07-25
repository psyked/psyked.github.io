webpackJsonp([0xb71ee8a22d66],{1287:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/modular-code-libraries-ftw-d0db70a5365a/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*pZ9iKrsUlMQIo_isecaj0A-e6595624f1f3e934b0ba694994343ba7-85ae7.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 31.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsSAAALEgHS3X78AAABc0lEQVQY0wXBW0vCUAAA4P2QHiPCKKIwsLvaTp4sXc3t7KKbOrc5s205Z855aXZZN9AeCoQuLwXhkxAEFfQS/a++D/PR7LAtvzUNRzc7Cj1UEYlHAYgbkl5hYufRzUct+3Nnvl+XG2qmelC3skWDy2VgUivw2AhM8KG1m3r2/jTvVSQvn3ZKqauyJqSAmFoGG8mzolQk9vaF/eOu7xw1rmq5EitasXmdXsLau5MgsCJsobbOuDlSZahuCmZl0rUd1653aqrGIwfFbVr+tkqXzmENQLMgtvLk6lwC+ziND/IUgyKrdapn4INSzIGRsr59d8wKUvMExRSKb3Lw78H7xRcsYrHDwQOZ5rlaIpjEKuvodYd8QSFzO0zimz2WajG40qDsC/FeyxhJAgKW5aXPvnPrKjmS8O2GKqiWqdDhXQyMz3yF1540mYJsOrhMy/bI5a+ft8Z8pTMdqC5SU0zXU8RRU28lom2/P7hscTBUrXp0gvgHKImPEs6lEAgAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 pZ9iKrsUlMQIo isecaj0A"\n        title=""\n        src="/portfolio-2018/static/1*pZ9iKrsUlMQIo_isecaj0A-e6595624f1f3e934b0ba694994343ba7-082ce.png"\n        srcset="/portfolio-2018/static/1*pZ9iKrsUlMQIo_isecaj0A-e6595624f1f3e934b0ba694994343ba7-c7cb1.png 158w,\n/portfolio-2018/static/1*pZ9iKrsUlMQIo_isecaj0A-e6595624f1f3e934b0ba694994343ba7-93041.png 315w,\n/portfolio-2018/static/1*pZ9iKrsUlMQIo_isecaj0A-e6595624f1f3e934b0ba694994343ba7-082ce.png 630w,\n/portfolio-2018/static/1*pZ9iKrsUlMQIo_isecaj0A-e6595624f1f3e934b0ba694994343ba7-c4006.png 945w,\n/portfolio-2018/static/1*pZ9iKrsUlMQIo_isecaj0A-e6595624f1f3e934b0ba694994343ba7-85e68.png 1260w,\n/portfolio-2018/static/1*pZ9iKrsUlMQIo_isecaj0A-e6595624f1f3e934b0ba694994343ba7-85ae7.png 1600w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h1>Modular Code Libraries FTW</h1>\n<h2>Thanks to the fact that I work alongside a bunch of awesome people, today I’ve been introduced to the <a href="https://date-fns.org/">date-fns</a> library, and it struck a chord with me because it the epitomises a way of thinking about creating manageable, maintainable source code.</h2>\n<p>Code is ultimately a solution to a problem. As developers we’re constantly writing code, and the more code we write, the more experience we acquire, the better we get. A big advantage to having previously written code is in being able to reuse that same solution in the future. The advantage to using other people’s code, when it comes in the form of a library or a framework, is in being able to use their solutions without having to invest your own time in the fine details of a solution.</p>\n<h4>Modules?</h4>\n<p>Modular code (for the purposes of this piece at least) are those reusable snippets of code which we copy &#x26; paste between projects, or those small, tightly-focussed libraries of code with a well-defined scope and purpose. <a href="http://momentjs.com/">Moment.js</a> and <a href="http://jariz.github.io/vibrant.js/">Vibrant.js</a> are two examples of libraries which I’ve used recently, in addition to <a href="https://date-fns.org/">date-fns.</a> The key thing about these libraries is that they’re simple enough to drop into an existing project and quickly get it working without having to restructure large swathes of the existing code.</p>\n<h4>Modules vs. Frameworks</h4>\n<p>Frameworks are a larger beast to introduce to — or remove from — a project. For everything they offer, it’s not really flexibility and universal suitability that’s high on the priorities of a framework.</p>\n<p>Adopting <a href="https://facebook.github.io/react/">React</a>, <a href="https://angularjs.org/">Angular</a>, <a href="http://backbonejs.org/">Backbone</a> or any of the other Javascript frameworks out there ends up locking your source code into its own patterns. Once you’ve adopted a framework you’re more-or-less stuck with it, with the structure, with its quirks, with its ways of thinking, and you can’t escape it without a considerable effort and an evitable rewrite. Modules on the other hand, those you <em>can</em> effectively find drop-in replacements for.</p>\n<h4>Easier to manage, easier to maintain.</h4>\n<p>Being able to easily replace portions of your source code is great for shifting requirements, and seems like a great idea for developing code in line with the Agile methodology. It’s entirely possible to develop without using a framework, and if you do so you don’t lose that flexibility. Modules also have a much shorter learning curve than an entire framework, so it’s much easier to get to grips with them and use them properly, the learning curve is shallower for the codebase as a whole and thus the long-term maintenance of a project is easier to handle.</p>\n<p>In short I prefer a modular, libraries-based codebase than a particular popular-right-now framework. And <a href="https://date-fns.org/">date-fns</a> is one of the better implementations of a format-agnostic library of code that I’ve seen.</p>',frontmatter:{title:"Modular Code Libraries FTW",date:"January 12, 2017",tags:["JavaScript","Web Development","Frameworks"],url:"https://medium.com/@psyked/modular-code-libraries-ftw-d0db70a5365a"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-modular-code-libraries-ftw-d-0-db-70-a-5365-a-dbf5e13b1022fc8ea982.js.map