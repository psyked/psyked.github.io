webpackJsonp([0xb0ed27af973],{1441:function(A,e){A.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/testing-performance-speed-and-best-practices-with-lighthouse/index.md absPath of file >>> MarkdownRemark",html:'<h1>Testing Performance, Speed and Best Practices with Lighthouse</h1>\n<blockquote>\n<p><em>Lighthouse is an open-source, automated tool for improving the quality of your web apps.</em></p>\n</blockquote>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/0*gOsG-4Rh7_nf219f-dcba6126ba88ec95f4eb055376066f33-11e54.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.58333333333334%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//aAAwDAQACEAMQAAABa6Xc1MShv//EABsQAAEFAQEAAAAAAAAAAAAAAAIAAQMREhMh/9oACAEBAAEFAoxR88PVjL4Ug5c7X//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABYRAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPwERf//EABwQAQACAQUAAAAAAAAAAAAAAAEAMREDEBIiUf/aAAgBAQAGPwLtUeN7GQTyONMlT//EABkQAAMBAQEAAAAAAAAAAAAAAAABEUFRIf/aAAgBAQABPyGjTWdmYjgugyCx5iiiEW9LKP/aAAwDAQACAAMAAAAQOP8A/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQEQ/9oACAEDAQE/EKuf/8QAFhEAAwAAAAAAAAAAAAAAAAAAEBEh/9oACAECAQE/EIIf/8QAGxABAQEBAQADAAAAAAAAAAAAAREhAEExUWH/2gAIAQEAAT8QJdUbMD9vMtqDhYXXjv7b0gToY8F4hSTS+3kxDPi9/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="0 gOsG 4Rh7 nf219f"\n        title=""\n        src="/static/0*gOsG-4Rh7_nf219f-dcba6126ba88ec95f4eb055376066f33-af57e.jpg"\n        srcset="/static/0*gOsG-4Rh7_nf219f-dcba6126ba88ec95f4eb055376066f33-847f7.jpg 158w,\n/static/0*gOsG-4Rh7_nf219f-dcba6126ba88ec95f4eb055376066f33-93973.jpg 315w,\n/static/0*gOsG-4Rh7_nf219f-dcba6126ba88ec95f4eb055376066f33-af57e.jpg 630w,\n/static/0*gOsG-4Rh7_nf219f-dcba6126ba88ec95f4eb055376066f33-28cf9.jpg 945w,\n/static/0*gOsG-4Rh7_nf219f-dcba6126ba88ec95f4eb055376066f33-11e54.jpg 1200w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Web Development is an ever changing landscape, and as such we use a variety of tools to evaluate what we do. Like many others with a vested interest in the web, Google has its own projects, and <a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a> is one of them.</p>\n<p>I find the Lighthouse tool <em>particularly</em> interesting for two reasons — firstly because it looks at a few of the more recent specs like <strong>Progressive Web Apps</strong> and the difficult-to-evaluate concepts like perceived speed, and secondly because it’s developed by Google, which implies that it’s looking at the kind of website optimisations that Google cares about when indexing a website.</p>\n<h3>What Lighthouse checks</h3>\n<p>A few of the things that Lighthouse currently tests for are:</p>\n<ul>\n<li>Offline/flaky connection support</li>\n<li>Page load performance</li>\n<li>Progressive Enhancement</li>\n<li>Secure connection (HTTPS)</li>\n<li>Mobile-friendliness</li>\n<li>Page render speed / avoiding “jank”</li>\n<li>Modern accessibility tags</li>\n</ul>\n<h3>Running Lighthouse</h3>\n<p>There are two ways to run a set of Lighthouse tests. One method is through a Chrome Extension, which you can install through the <a href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk">Chrome Web Store</a> or as a Node module on <a href="https://www.npmjs.com/package/lighthouse">NPM.</a></p>\n<p>And if you’re interested in an example report, take a look at <a href="https://googlechrome.github.io/lighthouse/viewer/?gist=9573cb9302e15405026b40098c8fd342">the report for www.psyked.co.uk</a></p>\n<hr>\n<p><em>Originally published at</em> <a href="https://www.psyked.co.uk/testing-performance-speed-and-best-practices-with-lighthouse/"><em>www.psyked.co.uk</em></a> <em>on January 28, 2017.</em></p>',frontmatter:{title:"Testing Performance, Speed and Best Practices with Lighthouse",date:"January 28, 2017",tags:["Web Development","Performance Testing"],url:"https://medium.com/@psyked/testing-performance-speed-and-best-practices-with-lighthouse-109803ce90ba",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//aAAwDAQACEAMQAAABa6Xc1MShv//EABsQAAEFAQEAAAAAAAAAAAAAAAIAAQMREhMh/9oACAEBAAEFAoxR88PVjL4Ug5c7X//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABYRAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPwERf//EABwQAQACAQUAAAAAAAAAAAAAAAEAMREDEBIiUf/aAAgBAQAGPwLtUeN7GQTyONMlT//EABkQAAMBAQEAAAAAAAAAAAAAAAABEUFRIf/aAAgBAQABPyGjTWdmYjgugyCx5iiiEW9LKP/aAAwDAQACAAMAAAAQOP8A/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQEQ/9oACAEDAQE/EKuf/8QAFhEAAwAAAAAAAAAAAAAAAAAAEBEh/9oACAECAQE/EIIf/8QAGxABAQEBAQADAAAAAAAAAAAAAREhAEExUWH/2gAIAQEAAT8QJdUbMD9vMtqDhYXXjv7b0gToY8F4hSTS+3kxDPi9/9k=",aspectRatio:1.5018773466833542,src:"/static/0*gOsG-4Rh7_nf219f-dcba6126ba88ec95f4eb055376066f33-f2ac0.jpg",srcSet:"/static/0*gOsG-4Rh7_nf219f-dcba6126ba88ec95f4eb055376066f33-567e3.jpg 158w,\n/static/0*gOsG-4Rh7_nf219f-dcba6126ba88ec95f4eb055376066f33-c3206.jpg 315w,\n/static/0*gOsG-4Rh7_nf219f-dcba6126ba88ec95f4eb055376066f33-f2ac0.jpg 630w,\n/static/0*gOsG-4Rh7_nf219f-dcba6126ba88ec95f4eb055376066f33-0c4a5.jpg 945w,\n/static/0*gOsG-4Rh7_nf219f-dcba6126ba88ec95f4eb055376066f33-4e530.jpg 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}},description:"Lighthouse is an open-source, automated tool for improving the quality of your web apps."}}},pathContext:{prev:{frontmatter:{path:"/blog/scribbling-away-during-meetings/",tags:["Design","Productivity"],title:"Scribbling away during meetings.",date:"2017-01-24T18:49:23.000Z",description:"I’ve become quite keen on making what’s known as “sketch notes” during meetings and presentations. It’s something that I first encountered…",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAejOa06KHhX/xAAZEAACAwEAAAAAAAAAAAAAAAAAAQIREiL/2gAIAQEAAQUCUdJdJVUxbMI//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEh/9oACAEDAQE/Aa1//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8BGf/EABsQAAEEAwAAAAAAAAAAAAAAAAABAiExMkGR/9oACAEBAAY/ArkcmyyDJOFH/8QAGxABAAIDAQEAAAAAAAAAAAAAAQARITFxQWH/2gAIAQEAAT8hFEwRXpUIgw+MsbB0lC+m5v2F5P/aAAwDAQACAAMAAAAQ5x//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPxAKx//EABcRAQADAAAAAAAAAAAAAAAAAAABESH/2gAIAQIBAT8Qgpj/xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUFhcaHB/9oACAEBAAE/ELWWs77iCQFCFGdHmNy83gR7IDFpacv2GiLmMn3FV80eU//Z",aspectRatio:1.5056461731493098,src:"/static/1*V8WgG38jMeJ2lITvnlLM5A-eb75f8d6cd080b9d0b21fdb590d9bf1e-f2ac0.jpeg",srcSet:"/static/1*V8WgG38jMeJ2lITvnlLM5A-eb75f8d6cd080b9d0b21fdb590d9bf1e-567e3.jpeg 158w,\n/static/1*V8WgG38jMeJ2lITvnlLM5A-eb75f8d6cd080b9d0b21fdb590d9bf1e-c3206.jpeg 315w,\n/static/1*V8WgG38jMeJ2lITvnlLM5A-eb75f8d6cd080b9d0b21fdb590d9bf1e-f2ac0.jpeg 630w,\n/static/1*V8WgG38jMeJ2lITvnlLM5A-eb75f8d6cd080b9d0b21fdb590d9bf1e-0c4a5.jpeg 945w,\n/static/1*V8WgG38jMeJ2lITvnlLM5A-eb75f8d6cd080b9d0b21fdb590d9bf1e-4e530.jpeg 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}}}},next:{frontmatter:{path:"/blog/hallmarks-of-a-modern-development-workflow-continuous-integration-deployment-811b2545be39/",tags:["Medium"],title:"Hallmarks of a Modern development workflow — Continuous Integration & Deployment",date:"2017-01-30T09:15:00.000Z",description:"Software Development is a creative process, and as such it’s important to minimise the things which can disrupt your flow.",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAHlVm8YD//EABgQAQADAQAAAAAAAAAAAAAAAAEAEBES/9oACAEBAAEFAg2JldLf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxABAAMAAAAAAAAAAAAAAAAAEAEhMf/aAAgBAQAGPwKodf/EABsQAAICAwEAAAAAAAAAAAAAAAERAFEQITFB/9oACAEBAAE/IS9BnqIdOKHSJKs//9oADAMBAAIAAwAAABDDD//EABYRAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPxAxf//EABcRAAMBAAAAAAAAAAAAAAAAAAEQEUH/2gAIAQIBAT8QF1f/xAAcEAEAAgIDAQAAAAAAAAAAAAABABExkSFBYYH/2gAIAQEAAT8QbpHwuOe6wsmo8obafA1iXFuf/9k=",aspectRatio:1.6,src:"/static/1*E1XjKEGR0WniQFa2W1IIeg-88e56c7b4d111132901014635f2f93c1-f2ac0.jpeg",srcSet:"/static/1*E1XjKEGR0WniQFa2W1IIeg-88e56c7b4d111132901014635f2f93c1-567e3.jpeg 158w,\n/static/1*E1XjKEGR0WniQFa2W1IIeg-88e56c7b4d111132901014635f2f93c1-c3206.jpeg 315w,\n/static/1*E1XjKEGR0WniQFa2W1IIeg-88e56c7b4d111132901014635f2f93c1-f2ac0.jpeg 630w,\n/static/1*E1XjKEGR0WniQFa2W1IIeg-88e56c7b4d111132901014635f2f93c1-0c4a5.jpeg 945w,\n/static/1*E1XjKEGR0WniQFa2W1IIeg-88e56c7b4d111132901014635f2f93c1-4e530.jpeg 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}}}}}}}});
//# sourceMappingURL=path---blog-testing-performance-speed-and-best-practices-with-lighthouse-60ac16b99b06bfe52e12.js.map