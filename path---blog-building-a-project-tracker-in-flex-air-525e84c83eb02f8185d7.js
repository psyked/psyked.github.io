webpackJsonp([38721406199853],{1229:function(A,a){A.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/building-a-project-tracker-in-flex-air/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/bugsummary-4cb18a2fe60bc47054f6acc202910476-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAejtrmZSoX//xAAaEAACAgMAAAAAAAAAAAAAAAACAwATARAz/9oACAEBAAEFAlqHK6BlIxXLX//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwGIiP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABoQAAEFAQAAAAAAAAAAAAAAABAAAQIRMXH/2gAIAQEABj8Ca1gjw//EABgQAQADAQAAAAAAAAAAAAAAAAEAIGEh/9oACAEBAAE/IUUHSZpkUj//2gAMAwEAAgADAAAAEK/v/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAERIWH/2gAIAQMBAT8QUVoyP//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxCsrP/EABsQAQEAAgMBAAAAAAAAAAAAAAEAEZEhMWHR/9oACAEBAAE/EFWkXqBHBvhAHOg+Q1rFi//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Bug Tracking in Flex & AIR"\n        title=""\n        src="/static/bugsummary-4cb18a2fe60bc47054f6acc202910476-e8574.jpg"\n        srcset="/static/bugsummary-4cb18a2fe60bc47054f6acc202910476-c94d9.jpg 158w,\n/static/bugsummary-4cb18a2fe60bc47054f6acc202910476-9885b.jpg 315w,\n/static/bugsummary-4cb18a2fe60bc47054f6acc202910476-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Ok, this isn\'t going to be a tutorial - not yet anyways.  So many projects, so little time to write about them.</p>\n<p>As part of my attempts to improve the way I work, I\'ve been on the look out for a private hosting solution for Subversion, that comes with project management tools like bug reporting, and - crucially - an API that I can work with in Actionscript.  My rather uninspired image above is the first draft of my bug tracking tool.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/unfuddle-9424ef6d2a2b461f1d712738df367345-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgb/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAbHaoLnRho//xAAbEAABBQEBAAAAAAAAAAAAAAADAQIEETMAE//aAAgBAQABBQIYxqLzHUtrUIDKum7f/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/AYF//8QAFhEAAwAAAAAAAAAAAAAAAAAAAhAS/9oACAECAQE/AaJf/8QAHRAAAQMFAQAAAAAAAAAAAAAAAAECchASITFBUf/aAAgBAQAGPwJmOGhLfBkaJE//xAAcEAACAgIDAAAAAAAAAAAAAAABEQAhUbExQaH/2gAIAQEAAT8hcV1fOIkmNdwLAFjPC1CBbEEAAqmzP//aAAwDAQACAAMAAAAQgB//xAAXEQEBAQEAAAAAAAAAAAAAAAABABEx/9oACAEDAQE/EF+kGX//xAAWEQEBAQAAAAAAAAAAAAAAAAABEQD/2gAIAQIBAT8QAZct3//EABwQAQADAAIDAAAAAAAAAAAAAAEAESExUWGh8P/aAAgBAQABPxBQ0uhVqPMHGZdlK9y70hb5ds+D0gwBHkduEqDgIf/Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Unfuddle Screenshot"\n        title=""\n        src="/static/unfuddle-9424ef6d2a2b461f1d712738df367345-e8574.jpg"\n        srcset="/static/unfuddle-9424ef6d2a2b461f1d712738df367345-c94d9.jpg 158w,\n/static/unfuddle-9424ef6d2a2b461f1d712738df367345-9885b.jpg 315w,\n/static/unfuddle-9424ef6d2a2b461f1d712738df367345-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>My searching has led me to a website called <a href="http://unfuddle.com/">Unfuddle</a>, which offers all of these things.  They have an API that works around url requests and HTTP headers authentication, which means that in theory (and practice) I can write Actionscript that can retrieve and write information to my unfuddle account.  All of their examples are in curl(!), but the principles are easy enough to translate, which is what I\'m working on right now in Flex.  Once I have things a little more concrete, I\'ll post a proper tutorial of some sorts.</p>\n<p>Unfuddle offers free accounts, as well as paid ones so if you wanna do the same as me, give it a whirl.  I\'ve even posted a small <a href="http://unfuddle.com/community/forums/6/topics/462">Flex example in the community forums</a> over at Unfuddle.</p>',frontmatter:{title:"Building a project tracker in Flex & AIR",date:"January 29, 2009",tags:["flex","air","subversion"],url:null,image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAejtrmZSoX//xAAaEAACAgMAAAAAAAAAAAAAAAACAwATARAz/9oACAEBAAEFAlqHK6BlIxXLX//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwGIiP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABoQAAEFAQAAAAAAAAAAAAAAABAAAQIRMXH/2gAIAQEABj8Ca1gjw//EABgQAQADAQAAAAAAAAAAAAAAAAEAIGEh/9oACAEBAAE/IUUHSZpkUj//2gAMAwEAAgADAAAAEK/v/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAERIWH/2gAIAQMBAT8QUVoyP//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxCsrP/EABsQAQEAAgMBAAAAAAAAAAAAAAEAEZEhMWHR/9oACAEBAAE/EFWkXqBHBvhAHOg+Q1rFi//Z",aspectRatio:1.7857142857142858,src:"/static/bugsummary-4cb18a2fe60bc47054f6acc202910476-2a90f.jpg",srcSet:"/static/bugsummary-4cb18a2fe60bc47054f6acc202910476-cfd0b.jpg 158w,\n/static/bugsummary-4cb18a2fe60bc47054f6acc202910476-92853.jpg 315w,\n/static/bugsummary-4cb18a2fe60bc47054f6acc202910476-2a90f.jpg 500w",sizes:"(max-width: 500px) 100vw, 500px"}}},description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/a-reason-why-photoshop-cs4-kicks-ass/",tags:null,title:"A reason why Photoshop CS4 kicks ass",date:"2009-01-28T09:02:54.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/creating-a-pdf-widget-on-acrobatcom/",tags:["flash","pdf"],title:"Creating a PDF Widget on Acrobat.com",date:"2009-02-02T09:02:28.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-building-a-project-tracker-in-flex-air-525e84c83eb02f8185d7.js.map