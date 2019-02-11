webpackJsonp([0xd68901dfe4fc],{1326:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/utf-8-bot-file-encoding-conversion-with-air/index.md absPath of file >>> MarkdownRemark",html:'<p>Well, here it is, my first Adobe AIR application from Flash.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/utf-8bot-80ad4b9eff8a2a0aaacf56157d44560c-41a8d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACqklEQVQozwGfAmD9ADZcIztfKEdqNFR2QUZzLDlrHjttHz1wIUB0I0F3JUh6KGd5LEqALE2EMFOJNVOMNVeQOVyXN3SNtnB0cQA7XSg4XiaEl2i8wZiwuYvAyZzCzKfByqTCy6XBy6TJ0Ky8wpJLfy1NgzBRhzNmmExyoVdmmkhbi5V/h0gAP2MrOmEplqZ42tiw4+O46Oi95ua96Oi/5ua96ee/9/XK09+rS38wToIyTYMvhKpwp8OYlLiBk7p2ncCBAEBmLUZpNWOBT2GDRVd7O1d8O1N7M1N7M2aCP4mmZ2uSS12IPkl8LU6BMk6CMm2ZVYWscIiwdJK3gI+2fQBAYi5Rb0JUeUAzXxwrWBE0XxlgglGEnH1nh1dAbyQ2bRxBdSdJfC9NgDJRhDVYijxgkkZilUhom05rnlEAQWIvXXZPSmc7LFcUSG84bnRCvMC29u/+u8C2c3xHVH9BRHYpSnwwTX8yUoM2VYg6WIs8XJBAYJVEZZlJADxdK01sO150UkJaMkNjOn2UfsHQu8vaysLRvIOahlN5SUR1J0p7Mk1/NFKCN1WIO1qNQF+RQ2OWR2eaTAA7Wik9XyxQdTqBmltxjEqVqHeMuXtkoVeRu4l8lnA3aR1Hdi5JeS9NfTNRgjdVhzxZjEBdkENilUhmmUwAOlooPWAqQGYsRGkxTW07XnRSlaeZeJF1kqiTTnY4P24mRXMtSHcvTHszUH83VYU8WYlBXY9DYZRIZZdMAElrOEFnLD5lJzpdJjtbJ0JkLHWIfVhqVWp+cTJdGz1sI0NzJ0d3K0x8MFGBNVWGOVqLPl+RQmKYRmicSwBjcF1Zb15Va1pPY1RDW1JXa2GBi45sfHZ2gIVWZV1MZE9KZU5LZk9KZU5MZ09NaVJPa1NSbVVTcFdVclgh7hHj386kwgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="utf-8bot.png"\n        title=""\n        src="/static/utf-8bot-80ad4b9eff8a2a0aaacf56157d44560c-41a8d.png"\n        srcset="/static/utf-8bot-80ad4b9eff8a2a0aaacf56157d44560c-bf474.png 158w,\n/static/utf-8bot-80ad4b9eff8a2a0aaacf56157d44560c-d5dd3.png 315w,\n/static/utf-8bot-80ad4b9eff8a2a0aaacf56157d44560c-41a8d.png 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>What does it do? Well, it takes an ANSI or Latin1 encoded text file, and spits it out in UTF-8 format. The need is pretty basic, and as is the core code, but it did give me an opportunity to delve into some of the ActionScript libraries that come with AIR. Mainly connected with the <strong>FileSystem</strong>, <strong>NativeDragDrop</strong> and classes related to custom chromes.</p>\n<p>I particulary like the drag and drop classes - they turned out to be far easier than I\'d expected. FileSystem on the other hand, turned out to be a bit more of a bugger to get working correctly. I was also mildly surprised how easy it was to lock the application to the bottom of the screen, just with some cunning use of `stage.maximise` and `stageAlign.BOTTOM`.</p>\n<p>Anyway, I hope I can write some more in detail \'tutorials\' about a few of the things I\'ve learnt at a later date, and take you through the code, but for now...</p>\n<p><strong>[Download the AIR File](<a href="http://www.psyked.co.uk/downloads/UTF-8">http://www.psyked.co.uk/downloads/UTF-8</a> Bot.air "Open link in a new window") (Requires the <a href="http://get.adobe.com/air/" title="Open link in a new window">Adobe AIR Runtime</a>)</strong></p>\n<p><strong><a href="http://www.psyked.co.uk/wp-content/uploads/2008/04/UTF-8_Bot_Source.zip" title="Open link in a new window">Download the source code</a> (Requires Flash CS3)</strong></p>\n<p>Oh, and a little disclaimer; I\'ve tested this repeatedly, and not noticed any problems, but just you know, be careful and don\'t put anything crucial into the application. This is an experimental project, not a commercial one.</p>',frontmatter:{title:"UTF-8 Bot - file encoding conversion with AIR",date:"April 08, 2008",tags:["flash","adobe","air","cs3"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/playing-with-air/",tags:["air-applications","ansi","xml"],title:"Playing with Air...",date:"2008-04-07T07:00:15.000Z"}},next:{frontmatter:{path:"/blog/on-air-london-review/",tags:["adobe","mdm-zinc","work"],title:"on AIR London / Review",date:"2008-04-11T07:30:35.000Z"}}}}}});
//# sourceMappingURL=path---blog-utf-8-bot-file-encoding-conversion-with-air-b417c840529c3857fe46.js.map