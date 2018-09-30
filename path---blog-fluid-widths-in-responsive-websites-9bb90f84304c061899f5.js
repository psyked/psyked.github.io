webpackJsonp([0x7e95ea66312a],{1283:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/fluid-widths-in-responsive-websites/index.md absPath of file >>> MarkdownRemark",html:'<p>I’ve recently worked with the team behind the Derby University website [<a href="https://www.derby.ac.uk/">https://www.derby.ac.uk/</a>] and one of the details that I really like about the implementation of the design is that it features more than just fluid widths, it also features fluid font sizes. I’ll get onto what that means in another post, but for now I want to talk a little about using fluid widths.</p>\n<h3>Fluid widths — Pros &#x26; Cons</h3>\n<h4>Pros</h4>\n<p>There more variations to device size than can be reasonably handled with media queries and fixed or pixel-based widths, so fluid widths are a more practical and thus more useful for website layout and making the best use of the screen viewport.</p>\n<p>Using fluid widths you can reasonably expect your layout to remain as intended, and expand or shrink elements predictably, even if you haven’t designed the website for a specific resolution.</p>\n<h4>Cons</h4>\n<p>When fluid and fixed width elements meet there are issues. A commonplace and difficult issue to resolve is consistently achieving readable and balanced text within a fluid width design. Fixed font sizes equate to a fixed height, with individual variable character widths.</p>\n<p><a href="https://baymard.com/blog/line-length-readability" title="https://baymard.com/blog/line-length-readability"><strong>Readability: the Optimal Line Length</strong><br>\n<em>Having the right amount of characters on each line is key to the readability of your text. It shouldn’t merely be your…</em>baymard.com</a><a href="https://baymard.com/blog/line-length-readability"></a></p>\n<p>Maximum and minimum text line lengths are recommended for readability, but sticking to these has the effect of setting fixed width upper and lower width bounds for any block of text, even if you’re aiming for a fluid layout.</p>\n<p>Media queries and fluid gutters between elements are popular strategies for coping with the challenge of matching fluid widths and fixed font sizes, but they’re often just clever tricks to fill the gaps with whitespace. Wouldn’t it be nicer if the font sizes scaled with the page instead?</p>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*Key4MifVtUocntQlHnMM9g.jpeg"></p>\n<p>Photo by <a href="https://unsplash.com/photos/xjZl9zm6Sds?utm_source=unsplash&#x26;utm_medium=referral&#x26;utm_content=creditCopyText">chuttersnap</a> on <a href="https://unsplash.com/search/photos/whitespace?utm_source=unsplash&#x26;utm_medium=referral&#x26;utm_content=creditCopyText">Unsplash</a></p>',frontmatter:{title:"Fluid widths in responsive websites.",date:"July 11, 2018",tags:["Medium","Web Development","Responsive Web Design","CSS","Front End Development"],url:"https://medium.com/@psyked/fluid-widths-in-responsive-websites-2a02499295d9",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAQADAgQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAfUeRBNQ5Q9ixk//xAAZEAEBAQADAAAAAAAAAAAAAAAAERICAxD/2gAIAQEAAQUC8iIjs1nhYqtv/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGBAAAgMAAAAAAAAAAAAAAAAAACAhIjH/2gAIAQEABj8Caukr/8QAGxAAAgIDAQAAAAAAAAAAAAAAAAEQESExUXH/2gAIAQEAAT8hKk8Qsq9dD4d4ZQw6f//aAAwDAQACAAMAAAAQlNmz/8QAFREBAQAAAAAAAAAAAAAAAAAAEEH/2gAIAQMBAT8QIf/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EABwQAAMAAwADAAAAAAAAAAAAAAABESFBUWFxof/aAAgBAQABPxCeSOkPZfCx6fR8k1mGCC1tdt2iWBj2yW2JFmR//9k=",aspectRatio:.667779632721202,src:"/static/1*Key4MifVtUocntQlHnMM9g-c1e846483b5c0fce69f4f7c26515ef7a-f2ac0.jpeg",srcSet:"/static/1*Key4MifVtUocntQlHnMM9g-c1e846483b5c0fce69f4f7c26515ef7a-567e3.jpeg 158w,\n/static/1*Key4MifVtUocntQlHnMM9g-c1e846483b5c0fce69f4f7c26515ef7a-c3206.jpeg 315w,\n/static/1*Key4MifVtUocntQlHnMM9g-c1e846483b5c0fce69f4f7c26515ef7a-f2ac0.jpeg 630w,\n/static/1*Key4MifVtUocntQlHnMM9g-c1e846483b5c0fce69f4f7c26515ef7a-0c4a5.jpeg 945w,\n/static/1*Key4MifVtUocntQlHnMM9g-c1e846483b5c0fce69f4f7c26515ef7a-4e530.jpeg 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}},description:"Front End Design Principle Rambles #1"}}},pathContext:{prev:{frontmatter:{path:"/blog/the-importance-of-psychological-safety-in-a-team/",tags:["agileontap"],title:"[The importance of] Psychological Safety in a team",date:"2018-06-08T12:42:00.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/rethinking-my-personal-website/",tags:["Blogging","Gatsbyjs"],title:"Rethinking my “personal” website.",date:"2018-07-29T19:41:59.179Z",description:"Repositioning, repurposing and ultimately rebuilding and replacing my Ghost blog with a Gatsby static site.",image:null}}}}}});
//# sourceMappingURL=path---blog-fluid-widths-in-responsive-websites-9bb90f84304c061899f5.js.map