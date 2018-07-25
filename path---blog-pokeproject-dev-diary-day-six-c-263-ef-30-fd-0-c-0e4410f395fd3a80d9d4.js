webpackJsonp([0xbea84cd4038b],{1305:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/pok%C3%A9project-dev-diary-day-six-c263ef30fd0c/index.md absPath of file >>> MarkdownRemark",html:'<h1>PokéProject Dev Diary: Day Six</h1>\n<h2>Move fast, break shit.</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*p5_Ies7YdsgoJcMFxHQoHg-6a5de12e08fae9e02858503f203e0187-756b3.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 39.0625%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABnoFOIUD/AP/EABgQAAMBAQAAAAAAAAAAAAAAAAACAxES/9oACAEBAAEFApNwJJXlh//EABgRAAIDAAAAAAAAAAAAAAAAAAECEBEh/9oACAEDAQE/AUFjY//EABgRAAMBAQAAAAAAAAAAAAAAAAABAgMh/9oACAECAQE/AdG5rgj/xAAZEAABBQAAAAAAAAAAAAAAAAABAAIQQVH/2gAIAQEABj8COouuP//EABkQAAMBAQEAAAAAAAAAAAAAAAABESExQf/aAAgBAQABPyFFYqWN+FEvuQej/9oADAMBAAIAAwAAABCAD//EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAwEBPxApjJGb/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARMf/aAAgBAgEBPxDYrstBv//EABkQAAMBAQEAAAAAAAAAAAAAAAABEUExkf/aAAgBAQABPxBBTh9g1KianVCLI//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 p5 Ies7YdsgoJcMFxHQoHg"\n        title=""\n        src="/portfolio-2018/static/1*p5_Ies7YdsgoJcMFxHQoHg-6a5de12e08fae9e02858503f203e0187-af57e.jpeg"\n        srcset="/portfolio-2018/static/1*p5_Ies7YdsgoJcMFxHQoHg-6a5de12e08fae9e02858503f203e0187-847f7.jpeg 158w,\n/portfolio-2018/static/1*p5_Ies7YdsgoJcMFxHQoHg-6a5de12e08fae9e02858503f203e0187-93973.jpeg 315w,\n/portfolio-2018/static/1*p5_Ies7YdsgoJcMFxHQoHg-6a5de12e08fae9e02858503f203e0187-af57e.jpeg 630w,\n/portfolio-2018/static/1*p5_Ies7YdsgoJcMFxHQoHg-6a5de12e08fae9e02858503f203e0187-28cf9.jpeg 945w,\n/portfolio-2018/static/1*p5_Ies7YdsgoJcMFxHQoHg-6a5de12e08fae9e02858503f203e0187-756b3.jpeg 1024w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Sometimes you wish you’d never started.</p>\n<p>Well, day six was a bit of a depressing development experience.</p>\n<p>What a depressing evening that was.</p>\n<p>To cut a long story short, I started out with the aim improving the SEO of PokéProject by upgrading the website to use HTTPS, because that’s generally better and it has <a href="http://thenextweb.com/google/2015/12/17/unsecured-websites-are-about-to-get-hammered-in-googles-search-ranking/#gref">an impact on your Google rankings</a>. I used <a href="https://letsencrypt.org/">LetsEncrypt</a> to get the certificates (which worked fine) and navigated the mysterious world of Nginx config files successfully, rebooted and we had the certificates all sorted.</p>\n<p>Emboldened by this, I decided to go one step further, and that’s where it all fell apart. Because adding HTTPS was so unexpectedly simple, I thought I’d go a step further and add the <a href="https://developers.google.com/speed/pagespeed/module/">Pagespeed module</a> to my server as well, bringing features like automated optimisations to bear. It turns out that’s much more complicated in practice. Three hours later and every website on the same box is offline and I can’t bring them back.</p>\n<blockquote>\n<p>“Just get it back online.”</p>\n</blockquote>\n<p>My micro-deadlines get smaller and simpler, my success criteria re-defines itself to <em>“just get it back online”</em> and in the end — at gone midnight — I end up reverting to a backup snapshot of the box.</p>\n<h4>Retrospective</h4>\n<p>Wow, that was humiliating. In retrospect I certainly shouldn’t have tried something so complicated as recompiling nginx without practicing it first in a safe environment, and in the same vein I really shouldn’t be working without decent backups or multiple environments.</p>\n<p>In my day job we use multiple environments — Local, Dev, QA &#x26; Production — all of the time, so why did I think my side-projects should be any different?</p>\n<p>Ugh. Well, lesson learned. Next time we’ll look at something a little more interesting, and stop mucking around with things we don’t understand.</p>\n<hr>\n<p>PokéProject is (fortunately) back online at: <a href="https://www.pokeproject.co.uk">https://www.pokeproject.co.uk</a></p>',frontmatter:{title:"PokéProject Dev Diary: Day Six",date:"September 26, 2016",tags:["Ssl","Nginx","Pokemon","Agile","Hackathon"],url:"https://medium.com/@psyked/pok%C3%A9project-dev-diary-day-six-c263ef30fd0c"}}},pathContext:{prev:{frontmatter:{path:"/blog/poképroject-dev-diary-day-three-31afdf3e1302/",tags:["JavaScript","Nodejs","Agile","Pokemon"],title:"PokéProject Dev Diary: Day Three",image:"https://cdn-images-1.medium.com/max/1200/1*Jdy8DfU9xn_2jW8i8O3s6g.gif",date:"2016-09-17T13:21:53.274Z"}},next:{frontmatter:{path:"/blog/poképroject-dev-diary-day-seven-dc096bdac274/",tags:["SEO","Digital Marketing","Hackathon","Pokemon"],title:"PokéProject Dev Diary: Day Seven",image:"https://cdn-images-1.medium.com/max/1200/1*9N5G_8K-XFMZxRNJAYtpBQ.jpeg",date:"2016-10-06T21:01:01.030Z"}}}}}});
//# sourceMappingURL=path---blog-pokeproject-dev-diary-day-six-c-263-ef-30-fd-0-c-0e4410f395fd3a80d9d4.js.map