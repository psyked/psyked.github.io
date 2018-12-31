webpackJsonp([0xbd47dff0567a],{1406:function(A,e){A.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/pokeproject-dev-diary-day-six/index.md absPath of file >>> MarkdownRemark",html:'<p>Sometimes you wish you’d never started.</p>\n<p>Well, day six was a bit of a depressing development experience.</p>\n<p>What a depressing evening that was.</p>\n<p>To cut a long story short, I started out with the aim improving the SEO of PokéProject by upgrading the website to use HTTPS, because that’s generally better and it has <a href="http://thenextweb.com/google/2015/12/17/unsecured-websites-are-about-to-get-hammered-in-googles-search-ranking/#gref">an impact on your Google rankings</a>. I used <a href="https://letsencrypt.org/">LetsEncrypt</a> to get the certificates (which worked fine) and navigated the mysterious world of Nginx config files successfully, rebooted and we had the certificates all sorted.</p>\n<p>Emboldened by this, I decided to go one step further, and that’s where it all fell apart. Because adding HTTPS was so unexpectedly simple, I thought I’d go a step further and add the <a href="https://developers.google.com/speed/pagespeed/module/">Pagespeed module</a> to my server as well, bringing features like automated optimisations to bear. It turns out that’s much more complicated in practice. Three hours later and every website on the same box is offline and I can’t bring them back.</p>\n<blockquote>\n<p>“Just get it back online.”</p>\n</blockquote>\n<p>My micro-deadlines get smaller and simpler, my success criteria re-defines itself to <em>“just get it back online”</em> and in the end — at gone midnight — I end up reverting to a backup snapshot of the box.</p>\n<h4>Retrospective</h4>\n<p>Wow, that was humiliating. In retrospect I certainly shouldn’t have tried something so complicated as recompiling nginx without practicing it first in a safe environment, and in the same vein I really shouldn’t be working without decent backups or multiple environments.</p>\n<p>In my day job we use multiple environments — Local, Dev, QA &#x26; Production — all of the time, so why did I think my side-projects should be any different?</p>\n<p>Ugh. Well, lesson learned. Next time we’ll look at something a little more interesting, and stop mucking around with things we don’t understand.</p>\n<hr>\n<p>PokéProject is (fortunately) back online at: <a href="https://www.pokeproject.co.uk">https://www.pokeproject.co.uk</a></p>',frontmatter:{title:"PokéProject Dev Diary: Day Six",date:"September 26, 2016",tags:["Ssl","Nginx","Pokemon","Agile","Hackathon"],url:"https://medium.com/@psyked/pok%C3%A9project-dev-diary-day-six-c263ef30fd0c",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABnoFOIUD/AP/EABgQAAMBAQAAAAAAAAAAAAAAAAACAxES/9oACAEBAAEFApNwJJXlh//EABgRAAIDAAAAAAAAAAAAAAAAAAECEBEh/9oACAEDAQE/AUFjY//EABgRAAMBAQAAAAAAAAAAAAAAAAABAgMh/9oACAECAQE/AdG5rgj/xAAZEAABBQAAAAAAAAAAAAAAAAABAAIQQVH/2gAIAQEABj8COouuP//EABkQAAMBAQEAAAAAAAAAAAAAAAABESExQf/aAAgBAQABPyFFYqWN+FEvuQej/9oADAMBAAIAAwAAABCAD//EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAwEBPxApjJGb/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARMf/aAAgBAgEBPxDYrstBv//EABkQAAMBAQEAAAAAAAAAAAAAAAABEUExkf/aAAgBAQABPxBBTh9g1KianVCLI//Z",aspectRatio:2.56,src:"/static/1*p5_Ies7YdsgoJcMFxHQoHg-6a5de12e08fae9e02858503f203e0187-f2ac0.jpeg",srcSet:"/static/1*p5_Ies7YdsgoJcMFxHQoHg-6a5de12e08fae9e02858503f203e0187-567e3.jpeg 158w,\n/static/1*p5_Ies7YdsgoJcMFxHQoHg-6a5de12e08fae9e02858503f203e0187-c3206.jpeg 315w,\n/static/1*p5_Ies7YdsgoJcMFxHQoHg-6a5de12e08fae9e02858503f203e0187-f2ac0.jpeg 630w,\n/static/1*p5_Ies7YdsgoJcMFxHQoHg-6a5de12e08fae9e02858503f203e0187-0c4a5.jpeg 945w,\n/static/1*p5_Ies7YdsgoJcMFxHQoHg-6a5de12e08fae9e02858503f203e0187-952fc.jpeg 1024w",sizes:"(max-width: 630px) 100vw, 630px"}}},description:"Move fast, break shit."}}},pathContext:{prev:{frontmatter:{path:"/blog/poképroject-dev-diary-day-five/",tags:["JavaScript","CSS","Pokemon","Canvas","Agile"],title:"PokéProject Dev Diary: Day Five",date:"2016-09-20T20:11:03.647Z",description:"Move fast, change things.",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMFAgT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABo7W4nnYRX//EABsQAAICAwEAAAAAAAAAAAAAAAIDAAEREhMj/9oACAEBAAEFAk+dNPUGIF5csla9pyCp/8QAFREBAQAAAAAAAAAAAAAAAAAAABL/2gAIAQMBAT8BS//EABcRAQADAAAAAAAAAAAAAAAAAAAREmH/2gAIAQIBAT8BlbH/xAAdEAACAQQDAAAAAAAAAAAAAAAAARICAxMhMUGh/9oACAEBAAY/Alb7SGzIquUSl4bZpH//xAAbEAEAAgIDAAAAAAAAAAAAAAABABExUUFxof/aAAgBAQABPyEG2D3KozqHKQWOYu5owYryjUKAn//aAAwDAQACAAMAAAAQGA//xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhYf/aAAgBAwEBPxCKrRdH/8QAFhEBAQEAAAAAAAAAAAAAAAAAADEB/9oACAECAQE/EIjV/8QAHRABAQACAgMBAAAAAAAAAAAAAREAIUFRMWGh0f/aAAgBAQABPxC1q2ZqnZ9zhB2dsvOg8F3miGsAEnu4raj50wUc0Cv7n//Z",aspectRatio:1.5,src:"/static/1*Kp3dePIQiFvW6HuPg7Dxpg-06afbdec54774c60f910c7967f66616d-f2ac0.jpeg",srcSet:"/static/1*Kp3dePIQiFvW6HuPg7Dxpg-06afbdec54774c60f910c7967f66616d-567e3.jpeg 158w,\n/static/1*Kp3dePIQiFvW6HuPg7Dxpg-06afbdec54774c60f910c7967f66616d-c3206.jpeg 315w,\n/static/1*Kp3dePIQiFvW6HuPg7Dxpg-06afbdec54774c60f910c7967f66616d-f2ac0.jpeg 630w,\n/static/1*Kp3dePIQiFvW6HuPg7Dxpg-06afbdec54774c60f910c7967f66616d-0c4a5.jpeg 945w,\n/static/1*Kp3dePIQiFvW6HuPg7Dxpg-06afbdec54774c60f910c7967f66616d-4e530.jpeg 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}}}},next:{frontmatter:{path:"/blog/poképroject-dev-diary-day-seven/",tags:["SEO","Digital Marketing","Hackathon","Pokemon"],title:"PokéProject Dev Diary: Day Seven",date:"2016-10-06T21:01:01.030Z",description:"This thing ain’t gonna market itself.",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHYkdhEcr//xAAcEAABAwUAAAAAAAAAAAAAAAABAgMRABIhMTL/2gAIAQEAAQUCmum2psCQooGDv//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABoQAAICAwAAAAAAAAAAAAAAAAARAWEQEjH/2gAIAQEABj8CLRG3R3n/xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhQWH/2gAIAQEAAT8hqIMVsbNMie2ECuzhgA8mXP/aAAwDAQACAAMAAAAQG8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAeEAACAgEFAQAAAAAAAAAAAAABEQAxIUFhcYGx0f/aAAgBAQABPxB8ETj5BluQ5BfXELeaHm1o91CviaiikvIpgTUOGgKn/9k=",aspectRatio:1.5,src:"/static/1*9N5G_8K-XFMZxRNJAYtpBQ-83560993cf95101ff78b57d2414ec898-f2ac0.jpeg",srcSet:"/static/1*9N5G_8K-XFMZxRNJAYtpBQ-83560993cf95101ff78b57d2414ec898-567e3.jpeg 158w,\n/static/1*9N5G_8K-XFMZxRNJAYtpBQ-83560993cf95101ff78b57d2414ec898-c3206.jpeg 315w,\n/static/1*9N5G_8K-XFMZxRNJAYtpBQ-83560993cf95101ff78b57d2414ec898-f2ac0.jpeg 630w,\n/static/1*9N5G_8K-XFMZxRNJAYtpBQ-83560993cf95101ff78b57d2414ec898-0c4a5.jpeg 945w,\n/static/1*9N5G_8K-XFMZxRNJAYtpBQ-83560993cf95101ff78b57d2414ec898-4e530.jpeg 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}}}}}}}});
//# sourceMappingURL=path---blog-pokeproject-dev-diary-day-six-af8be0bdb738c8f2f8ad.js.map