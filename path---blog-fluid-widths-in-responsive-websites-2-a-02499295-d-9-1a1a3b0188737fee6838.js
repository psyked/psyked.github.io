webpackJsonp([0x6626dc65ea98],{1208:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/fluid-widths-in-responsive-websites-2a02499295d9/index.md absPath of file >>> MarkdownRemark",html:'<h1>Fluid widths in responsive websites.</h1>\n<h2>Front End Design Principle Rambles #1</h2>\n<p>I’ve recently worked with the team behind the Derby University website [<a href="https://www.derby.ac.uk/">https://www.derby.ac.uk/</a>] and one of the details that I really like about the implementation of the design is that it features more than just fluid widths, it also features fluid font sizes. I’ll get onto what that means in another post, but for now I want to talk a little about using fluid widths.</p>\n<h3>Fluid widths — Pros &#x26; Cons</h3>\n<h4>Pros</h4>\n<p>There more variations to device size than can be reasonably handled with media queries and fixed or pixel-based widths, so fluid widths are a more practical and thus more useful for website layout and making the best use of the screen viewport.</p>\n<p>Using fluid widths you can reasonably expect your layout to remain as intended, and expand or shrink elements predictably, even if you haven’t designed the website for a specific resolution.</p>\n<h4>Cons</h4>\n<p>When fluid and fixed width elements meet there are issues. A commonplace and difficult issue to resolve is consistently achieving readable and balanced text within a fluid width design. Fixed font sizes equate to a fixed height, with individual variable character widths.</p>\n<p><a href="https://baymard.com/blog/line-length-readability" title="https://baymard.com/blog/line-length-readability"><strong>Readability: the Optimal Line Length</strong><br>\n<em>Having the right amount of characters on each line is key to the readability of your text. It shouldn’t merely be your…</em>baymard.com</a><a href="https://baymard.com/blog/line-length-readability"></a></p>\n<p>Maximum and minimum text line lengths are recommended for readability, but sticking to these has the effect of setting fixed width upper and lower width bounds for any block of text, even if you’re aiming for a fluid layout.</p>\n<p>Media queries and fluid gutters between elements are popular strategies for coping with the challenge of matching fluid widths and fixed font sizes, but they’re often just clever tricks to fill the gaps with whitespace. Wouldn’t it be nicer if the font sizes scaled with the page instead?</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*Key4MifVtUocntQlHnMM9g-75ce94c404b7cfae44e2b91b535f95d4-2f776.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 149.8%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAQADAgQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAfUeRBNQ5Q9ixk//xAAZEAEBAAMBAAAAAAAAAAAAAAARAAIDEhD/2gAIAQEAAQUC8IiLY84JM3d//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGBAAAgMAAAAAAAAAAAAAAAAAACAhIjH/2gAIAQEABj8Caukr/8QAGxAAAgIDAQAAAAAAAAAAAAAAAAEQESExUXH/2gAIAQEAAT8hKl8Qtq9dD4d4ZQw6f//aAAwDAQACAAMAAAAQlNiz/8QAFREBAQAAAAAAAAAAAAAAAAAAEEH/2gAIAQMBAT8QIf/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EABsQAAMAAwEBAAAAAAAAAAAAAAABEUFRkTFh/9oACAEBAAE/EJ9I2Q8laLFaXT3LcCCsbXLdoimyWWQkjH//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 Key4MifVtUocntQlHnMM9g"\n        title=""\n        src="/portfolio-2018/static/1*Key4MifVtUocntQlHnMM9g-75ce94c404b7cfae44e2b91b535f95d4-af57e.jpeg"\n        srcset="/portfolio-2018/static/1*Key4MifVtUocntQlHnMM9g-75ce94c404b7cfae44e2b91b535f95d4-847f7.jpeg 158w,\n/portfolio-2018/static/1*Key4MifVtUocntQlHnMM9g-75ce94c404b7cfae44e2b91b535f95d4-93973.jpeg 315w,\n/portfolio-2018/static/1*Key4MifVtUocntQlHnMM9g-75ce94c404b7cfae44e2b91b535f95d4-af57e.jpeg 630w,\n/portfolio-2018/static/1*Key4MifVtUocntQlHnMM9g-75ce94c404b7cfae44e2b91b535f95d4-28cf9.jpeg 945w,\n/portfolio-2018/static/1*Key4MifVtUocntQlHnMM9g-75ce94c404b7cfae44e2b91b535f95d4-0d474.jpeg 1260w,\n/portfolio-2018/static/1*Key4MifVtUocntQlHnMM9g-75ce94c404b7cfae44e2b91b535f95d4-66f39.jpeg 1890w,\n/portfolio-2018/static/1*Key4MifVtUocntQlHnMM9g-75ce94c404b7cfae44e2b91b535f95d4-2f776.jpeg 2000w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Photo by <a href="https://unsplash.com/photos/xjZl9zm6Sds?utm_source=unsplash&#x26;utm_medium=referral&#x26;utm_content=creditCopyText">chuttersnap</a> on <a href="https://unsplash.com/search/photos/whitespace?utm_source=unsplash&#x26;utm_medium=referral&#x26;utm_content=creditCopyText">Unsplash</a></p>',frontmatter:{title:"Fluid widths in responsive websites.",date:"July 11, 2018",tags:null}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-fluid-widths-in-responsive-websites-2-a-02499295-d-9-1a1a3b0188737fee6838.js.map