webpackJsonp([28801640169690],{1114:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/building-duotone-fc7e0d9a3b9e/index.md absPath of file >>> MarkdownRemark",html:'<h1>Building “duotone”</h1>\n<h2>Applying filters to images and generating downloads with client-side Javascript</h2>\n<p>It all started with ^ this Tweet. ^</p>\n<p>Whist stumbling through my reading list I was impressed by the image filtering capabilities of the humble SVG, as demonstrated by <a href="https://css-tricks.com/using-svg-to-create-a-duotone-image-effect/">Lentie Ward’s article: ‘Using SVG to Create a Duotone Effect on Images’</a> and decided to explore this further.</p>\n<p>The end result is a single page application that I’ve imaginatively called <a href="https://psyked.github.io/duotone/">Duotone</a>, which allows you to select an image, apply a filter from a selection of presets and then download the resulting image as a new image file.</p>\n<p><img src="/portfolio-2018/1*lE_sbknlxyxnhGpo-iHxfQ-18bae738081a76d9781b0ffb58cf569a.gif"></p>\n<p>Duotone, in all its version 1 glory!</p>\n<h4>How Duotone images work</h4>\n<p>Achieving this effect isn’t actually too difficult, and involves two steps. The first is to make the entire image greyscale, and the second is to map the resulting image palette to a new colour palette, which in this case is a gradient made from blending two colours.</p>\n<p>Re-mapping the image gradient is different to applying a blend mode to an image or colourising it with a colour overlay, because it allows the output image to be constructed from more than a single colour.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*1v5wB-0SlpzMcdxODc75Fw-f5827b42d36a6c9c669ae64e3ef1a85e-56bef.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAACj0lEQVQozy2SeU8TURTF5+uJCwJdQLoDpbRFaYAuLC0FWgqFyk6FAprgAhKCQQMuqIgoGo17NPqHzLw3b9ZG/QaeV01uMnfm3XPu7943QmKZ9VxlfTdkRLSoBHo0p9twN+mBhNY1owxs0fQ2Td6Wkxty303Wu8YSKyy+pEQXlM5pRei9zpLrcmpTHtiWh+7R4T3af0u+mFU9rXpTWI8UlPQdmn1Ah+7SwR1eg9O+Nd4vVmJCaktO78jDu3L2Ic3u09xTmn9Bxl8RuETyChD8XVpqQx57TkYek+HdisWW3L/OKQQUQTN6SPLHZOINufyeTH6UJj9JM9+kqS9SZo92zyr+qBYtsvxLAgsUZ+7DgsJCyB1QfC28JZMfyPRXae6HOP9TXBD/xxUmFokIkO45pWNUhQx57hnNPqKZXSoAEsqpz9Lsd2n+RCxScVETS2Vx+Ze48udk+TcPJCXzBJUYGOSFt9IELA6oMLJPck9o/oiMHZKxI1J4J4F8/DUZPybog6ESqwxrj5dYclNG0hLRO6eUUErzd2pCa0zDSgJxHsGUivW2DyltvWowqTZ3aN6QjrU7PbrTpwfiqstn2K2my6fbqk3rOVMIJNRwWsXdQIbBuudZbImhD+6TX8k1hlVFJtAKXnpTu+7267BweowGuyGAgWsWlNgiS6zKsYoMqPh54ALOSyNKsJ/T+UDh1x0ew+HiSlsN78xpgwNqCJFSQ2kOEh5U2zP8tTWqtUQ0X1gDvMtrONzGhQYe9VbTWm0KjQ7O4ASJ23B6DXez4W3jcyJxNfOjxkazwW6iut5i2mr5qJazZcuZsuV0Wag7xR/22sqx1bSdN+11Zr2N5/iIV3Sw15jYUF1VRfMvqsoQ/gXePfaZ8iHnGAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 1v5wB 0SlpzMcdxODc75Fw"\n        title=""\n        src="/portfolio-2018/static/1*1v5wB-0SlpzMcdxODc75Fw-f5827b42d36a6c9c669ae64e3ef1a85e-082ce.png"\n        srcset="/portfolio-2018/static/1*1v5wB-0SlpzMcdxODc75Fw-f5827b42d36a6c9c669ae64e3ef1a85e-c7cb1.png 158w,\n/portfolio-2018/static/1*1v5wB-0SlpzMcdxODc75Fw-f5827b42d36a6c9c669ae64e3ef1a85e-93041.png 315w,\n/portfolio-2018/static/1*1v5wB-0SlpzMcdxODc75Fw-f5827b42d36a6c9c669ae64e3ef1a85e-082ce.png 630w,\n/portfolio-2018/static/1*1v5wB-0SlpzMcdxODc75Fw-f5827b42d36a6c9c669ae64e3ef1a85e-c4006.png 945w,\n/portfolio-2018/static/1*1v5wB-0SlpzMcdxODc75Fw-f5827b42d36a6c9c669ae64e3ef1a85e-56bef.png 1200w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*XLXpP_KYN2bmnlzwwHc1sQ-759a09ff4a582ff508267d2eff99e1f1-11e54.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAG1cS00DJI//8QAGhAAAgIDAAAAAAAAAAAAAAAAAAIBERITIv/aAAgBAQABBQLWjErgcEOO5Z//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwGn/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Bh//EABsQAAICAwEAAAAAAAAAAAAAAAABMTIQESGh/9oACAEBAAY/Au6LJr0siERj/8QAHRAAAgAHAQAAAAAAAAAAAAAAAAEQESExQYHB4f/aAAgBAQABPyGV7FjvqBv0wZjwQx//2gAMAwEAAgADAAAAEFT/AP/EABcRAQEBAQAAAAAAAAAAAAAAAAEAEVH/2gAIAQMBAT8QBacv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERUf/aAAgBAgEBPxCiPT//xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUGBYZHB/9oACAEBAAE/EMYrcNBO4I8LKgfYxsoc6yox6JhekRV0T//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 XLXpP KYN2bmnlzwwHc1sQ"\n        title=""\n        src="/portfolio-2018/static/1*XLXpP_KYN2bmnlzwwHc1sQ-759a09ff4a582ff508267d2eff99e1f1-af57e.jpeg"\n        srcset="/portfolio-2018/static/1*XLXpP_KYN2bmnlzwwHc1sQ-759a09ff4a582ff508267d2eff99e1f1-847f7.jpeg 158w,\n/portfolio-2018/static/1*XLXpP_KYN2bmnlzwwHc1sQ-759a09ff4a582ff508267d2eff99e1f1-93973.jpeg 315w,\n/portfolio-2018/static/1*XLXpP_KYN2bmnlzwwHc1sQ-759a09ff4a582ff508267d2eff99e1f1-af57e.jpeg 630w,\n/portfolio-2018/static/1*XLXpP_KYN2bmnlzwwHc1sQ-759a09ff4a582ff508267d2eff99e1f1-28cf9.jpeg 945w,\n/portfolio-2018/static/1*XLXpP_KYN2bmnlzwwHc1sQ-759a09ff4a582ff508267d2eff99e1f1-11e54.jpeg 1200w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Duotone on the left, Original image on the right</p>\n<h4>How I built Duotone (the application)</h4>\n<p>The <a href="https://psyked.github.io/duotone/">application itself</a> is a single static HTML page, which is hosted on GitHub Pages. It uses <a href="https://vuejs.org/">Vue.js</a> syntax with SASS for the page styling, <a href="https://nuxtjs.org/">Nuxt.js</a> to generate the static HTML page and <a href="https://github.com/eligrey/FileSaver.js">FileSaver.js</a> to generate the image downloads in the browser. And of course, the vast majority of the logic and techniques for actually achieving the effect in the first place was shamelessly appropriated from <a href="https://css-tricks.com/using-svg-to-create-a-duotone-image-effect/">Lentie Ward’s CSS Tricks article.</a></p>\n<p>Thus far <a href="https://psyked.github.io/duotone/">Duotone</a> has taken a few nights’ work to build. Nuxt.js has made the process of getting a working project template very simple and allowed me to concentrate on building working code and not on deployment processes or tooling.</p>\n<h4>What does the future hold?</h4>\n<p>Having a set number of templates hardcoded into the application is fairly limiting, so that’s the next thing to address — making the colour palettes completely customisable, and maybe even introducing an option for including more than two colours in the mapping gradient.</p>\n<hr>\n<p>There we are then. <a href="https://medium.com/@psyked/3-hour-hacks-d22772439d04">3 hour hack</a> #1 complete. 👍</p>',frontmatter:{title:"Building “duotone”",date:"March 13, 2018",tags:["Design","Duotone","Side Project","Nuxtjs"],url:"https://medium.com/@psyked/building-duotone-fc7e0d9a3b9e"}}},pathContext:{prev:{frontmatter:{path:"/blog/code-completion-and-other-flex-metadata-tricks/",tags:["actionscript","flex","flash","metadata"],title:"Code Completion and other Flex Metadata tricks...",image:null,date:"2009-01-12T14:08:08.000Z"}},next:{frontmatter:{path:"/blog/building-bridges-some-solutions/",tags:["flash","box2","building-bridges","christmas-game","mmt-digital"],title:"Building Bridges: Some solutions",image:null,date:"2009-12-23T23:15:54.000Z"}}}}}});
//# sourceMappingURL=path---blog-building-duotone-fc-7-e-0-d-9-a-3-b-9-e-549d1dd372579901c8a1.js.map