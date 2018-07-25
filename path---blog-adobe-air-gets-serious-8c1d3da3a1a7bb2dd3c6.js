webpackJsonp([0xbdf1420d1bf2],{1091:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/adobe-air-gets-serious/index.md absPath of file >>> MarkdownRemark",html:'<p>Adobe have just released their first major update to AIR since its release, Adobe AIR 1.1 (catchy!). - The release notes of which you can read <a href="http://download.macromedia.com/pub/air/documentation/1_1/adobe_air_1-1_faq.pdf">here</a>.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/air11-602951807874dc04801203fc90cab8a8-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAME/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAd+m6JqK/8QAGhAAAgIDAAAAAAAAAAAAAAAAAAIBAxMUIP/aAAgBAQABBQLUqIrUxrx//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFhAAAwAAAAAAAAAAAAAAAAAAIDKh/9oACAEBAAY/Alpf/8QAHBAAAgICAwAAAAAAAAAAAAAAAAERIRAxYXGh/9oACAEBAAE/IXdPWxCSjRwejSe0Qsf/2gAMAwEAAgADAAAAEEzP/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QZ//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABsQAQACAwEBAAAAAAAAAAAAAAEAESExYUGR/9oACAEBAAE/ENQJegYr3MAZAAC3R2A+/qC0CdgRQUcgVP/Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="air11"\n        title=""\n        src="/portfolio-2018/static/air11-602951807874dc04801203fc90cab8a8-e8574.jpg"\n        srcset="/portfolio-2018/static/air11-602951807874dc04801203fc90cab8a8-c94d9.jpg 158w,\n/portfolio-2018/static/air11-602951807874dc04801203fc90cab8a8-9885b.jpg 315w,\n/portfolio-2018/static/air11-602951807874dc04801203fc90cab8a8-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Aside from a few tweaks and general updates, and a few requested features making an appearance, the focus for most people seems to be the multilingual capabilities. There\'s a whole 10 new languages supported.</p>\n<blockquote>\n<p>Brazilian Portuguese, Chinese (Traditional and Simplified), French, German, Italian, Japanese, Korean, Russian and Spanish.</p>\n</blockquote>\n<p>Strangely enough, that\'s not very exciting. Well, I guess it makes up a large proportion of the target markets, and covers most of the character sets - but 10 languages seems a little low. Meh.</p>\n<p>Releasing a product (of this sort) to a global market - without multilingual support - seemed a bit strange, (or maybe it just highlighted how much we take for granted the features of established products), but now we have those important capabilities. Releasing AIR was always going to be a balancing act for Adobe - you want to release a market-ready product, but also get the product out of the realm of Beta.</p>\n<h2>Getting serious?</h2>\n<p>While home users and developers may be fine with Beta products, businesses and corporations are not so hot with unestablished products, and we\'ve had some concerns over the capabilities of AIR and AIR applications over \'locked-down\' networks. Luckily AIR 1.1 goes some way to addressing these issues with it\'s enhanced Enterprise support;</p>\n<blockquote>\n<p><strong>Q: Are there any new deployment features for developers or enterprises?</strong> A: Yes. Developers are now able to silently install the runtime and application with their native installers through the standard Adobe AIR Distribution License Agreement. Enterprises can deploy the runtime and Adobe AIR applications using tools such as Microsoft SMS, IBM Tivoli, or any deployment tool that supports silent installs.</p>\n</blockquote>\n<p>So that\'s silent installs. And not the malware kind - it looks like this is more aimed at network administrators, and allowing them to manage AIR on a corporate network. So instead of AIR being a mysterious product that IT Support techies could dismiss out-of-hand for having no network control, AIR is now more compatible with the unilateral install policies of many business and educational institutions. - You can even install the runtime but restrict the products that can be installed, apparently.</p>\n<p>All we need now is some more real-world information about how an AIR application, with all its\' Desktop to Browser, File Saving, Database having magic works on various networks. There\'s a <a href="http://download.macromedia.com/pub/air/documentation/1_1/air_admin_guide.pdf">useful document on the Adobe site for IT Administrators</a>, that details a lot of the technical specifics, but it\'s time we found some time to check it out...</p>\n<h3><strong>Bug highlights;</strong></h3>\n<p>Some of the bugs that have been fixed are just strange - the kind of things you\'d never expect to find...</p>\n<blockquote>\n<p>Windows: copy/paste doesn\'t work if caps lock is on</p>\n</blockquote>\n<p>On Windows, AIR applications can now be uninstalled even if AIR has already been uninstalled.</p>\n<h3><strong>Getting updated;</strong></h3>\n<p><strong>Client:</strong> All existing users of the Adobe AIR 1.0 runtime will get a notification and/or automatic download/update to the Adobe AIR 1.1 runtime within approx. 30 days of the 1.1 release (Adobe AIR has a 30 day automatic update check-cycle thingie).</p>\n<p><strong>Developers:</strong> Dreamweaver developers can <a href="http://kb.adobe.com/selfservice/viewContent.do?externalId=kb403908&#x26;sliceId=1&#x26;devcon=f1b">get the updated extension here</a>. Flash and Flex developers get a little kick in the teeth and have to go through <a href="http://kb.adobe.com/selfservice/viewContent.do?externalId=kb403682&#x26;sliceId=1">this technote for Flash</a> or <a href="http://www.adobe.com/devnet/flex/articles/flex_air1.1.html">this technote for Flex</a> to update to AIR 1.1.</p>\n<h2>Resources;</h2>\n<ul>\n<li><a href="http://get.adobe.com/air/">Get Adobe AIR 1.1</a></li>\n<li><a href="http://www.adobe.com/go/air1-1faq">AIR for IT administrators</a></li>\n<li><a href="http://www.adobe.com/go/air1-1faq">Adobe AIR 1.1 Release notes</a></li>\n</ul>',frontmatter:{title:"Adobe AIR gets serious?",date:"June 18, 2008",tags:null,url:null}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-adobe-air-gets-serious-8c1d3da3a1a7bb2dd3c6.js.map