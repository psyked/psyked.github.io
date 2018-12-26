webpackJsonp([0xa0bb87fb85f8],{1349:function(A,a){A.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/introducing-imagesizer-042/index.md absPath of file >>> MarkdownRemark",html:'<p>Well, I\'m a bit slack on the whole updates front - ImageSizer 0.4.0 and 0.4.1 have already slipped under the radar without a blog post - but with the latest release I thought I\'d draw a little attention to it, not least because it fixes a bit an annoying bug that I introduced in version 0.4.1!</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/imagesizer042-5457dafc4a3e45a32d5622bda5b49d54-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBP/EABYBAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAB49RtWIH/xAAWEAEBAQAAAAAAAAAAAAAAAAAQAUH/2gAIAQEAAQUCjp//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAVEAEBAAAAAAAAAAAAAAAAAAAgIf/aAAgBAQAGPwKr/8QAGBABAAMBAAAAAAAAAAAAAAAAEQABEDH/2gAIAQEAAT8huqgX3Khz/9oADAMBAAIAAwAAABBwH//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABsQAQACAgMAAAAAAAAAAAAAAAEAEUFxITFR/9oACAEBAAE/ELYpb4PY5R3BudW4pzCf/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ImageSizer 0.4.2"\n        title=""\n        src="/static/imagesizer042-5457dafc4a3e45a32d5622bda5b49d54-e8574.jpg"\n        srcset="/static/imagesizer042-5457dafc4a3e45a32d5622bda5b49d54-c94d9.jpg 158w,\n/static/imagesizer042-5457dafc4a3e45a32d5622bda5b49d54-9885b.jpg 315w,\n/static/imagesizer042-5457dafc4a3e45a32d5622bda5b49d54-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>So, what\'s new in the latest version?</h3>\n<p>Well, one of the things that I\'ve found a lot of AIR applications are missing at the moment, is the ability to configure their settings - particulary those things mentioned by Serge Jespers in his post: <strong>"6 AIR features that may annoy your users"</strong> [<a href="http://www.webkitchen.be/2008/12/17/best-practices-6-air-features-that-may-annoy-your-users/">link</a>].  Back with version 0.3.10 I introduced some Pixel Bender filters to the application.  Version 0.4 introduced the Application Settings window - although it only appeared to work.  Version 0.4.1 expanded on this by introducing some backend code that actually stored the settings, but had a glaring typo that meant the whole thing didn\'t work.  Version 0.4.2 in short, fixes this.</p>\n<h3>So, what settings have we introduced?</h3>\n<p><strong>Remembering window position and dimensions;</strong>\n<strong>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/imagesizerpreferences-46a0dbb1b7db706b2c3fde85846e84cc-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBAgT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAc8KbWNQD//EABcQAAMBAAAAAAAAAAAAAAAAAAIQETH/2gAIAQEAAQUCrHav/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRABAAIDAAAAAAAAAAAAAAAAARAhABFB/9oACAEBAAE/IQOgca5FJP/aAAwDAQACAAMAAAAQc8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAdEAEAAgAHAAAAAAAAAAAAAAABABEhMUFRYZGh/9oACAEBAAE/EKsFrEhFk7i7FRtvEbaexbZ//9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ImageSizer - Window Preferences"\n        title=""\n        src="/static/imagesizerpreferences-46a0dbb1b7db706b2c3fde85846e84cc-e8574.jpg"\n        srcset="/static/imagesizerpreferences-46a0dbb1b7db706b2c3fde85846e84cc-c94d9.jpg 158w,\n/static/imagesizerpreferences-46a0dbb1b7db706b2c3fde85846e84cc-9885b.jpg 315w,\n/static/imagesizerpreferences-46a0dbb1b7db706b2c3fde85846e84cc-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </strong></p>\n<p><strong>Visual Effects;</strong></p>\n<p><strong>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/imagesizervisualeffects-62f899195802cbd120dadc974a804d16-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAcxVOsWIP//EABcQAAMBAAAAAAAAAAAAAAAAAAEQETH/2gAIAQEAAQUCoY1f/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAQUAAAAAAAAAAAAAAAAAABEgIUFh/9oACAEBAAE/IVLIxt//2gAMAwEAAgADAAAAENDP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGxABAAICAwAAAAAAAAAAAAAAAQARECExcaH/2gAIAQEAAT8QCABa2RNnwxS9FTm6wz//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ImageSizer - Visual Effects"\n        title=""\n        src="/static/imagesizervisualeffects-62f899195802cbd120dadc974a804d16-e8574.jpg"\n        srcset="/static/imagesizervisualeffects-62f899195802cbd120dadc974a804d16-c94d9.jpg 158w,\n/static/imagesizervisualeffects-62f899195802cbd120dadc974a804d16-9885b.jpg 315w,\n/static/imagesizervisualeffects-62f899195802cbd120dadc974a804d16-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </strong></p>\n<p><strong>Automatic Updates;</strong></p>\n<p><strong>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/imagesizerautomaticupdates-a5c8c3b268ed28753962cd464b55668c-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAcxVOsWIP//EABcQAAMBAAAAAAAAAAAAAAAAAAEQETH/2gAIAQEAAQUCoY1f/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAgMBAAAAAAAAAAAAAAAAAREAICFR/9oACAEBAAE/IXLXCRyt/9oADAMBAAIAAwAAABCQz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABwQAQACAQUAAAAAAAAAAAAAAAEAETEQIUFxsf/aAAgBAQABPxAAAKtyIwPIpwVM3Wv/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ImageSizer - Automatic Updates"\n        title=""\n        src="/static/imagesizerautomaticupdates-a5c8c3b268ed28753962cd464b55668c-e8574.jpg"\n        srcset="/static/imagesizerautomaticupdates-a5c8c3b268ed28753962cd464b55668c-c94d9.jpg 158w,\n/static/imagesizerautomaticupdates-a5c8c3b268ed28753962cd464b55668c-9885b.jpg 315w,\n/static/imagesizerautomaticupdates-a5c8c3b268ed28753962cd464b55668c-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </strong></p>\n<h3>Download ImageSizer 0.4.2</h3>\n<p><object width="215" height="180" data="/airapps/AIRInstallBadge.swf" type="application/x-shockwave-flash"><param name="flashvars" value="airversion=1.5&amp;appname=ImageSizer&amp;appurl=http://psyked.co.uk/airapps/ImageSizer042.air&amp;appid=couk.psyked.ImageSizer&amp;pubid=07510AB144CCA2FB1C33EE50283E9A7AD43F7966.1&amp;appversion=0.4.2&amp;titlecolor=#339999" /><param name="src" value="/airapps/AIRInstallBadge.swf" /></object></p>\n<h3>Known issues:</h3>\n<p>Unfortunately, no sooner than I\'d released this version, I noticed another problem with it.  Or potential problem with it.  I haven\'t built in any defaults to the application.  So my clever code to enable users to turn off the automatic updates now means that - because there\'s no settings existing - the automatic updates will be turned off.  Ideally, it should remain turned on!  Darn those logical errors!</p>\n<p>My next things to explore are <strong>"Start on Login"</strong>, <strong>"System Tray/Dock Icons"</strong> and <strong>"Google Analytics tracking"</strong>.</p>',frontmatter:{title:"Introducing ImageSizer 0.4.2",date:"January 20, 2009",tags:["imagesizer"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/geocoding-uk-postcodes-with-google-map-api/",tags:["google-maps"],title:"Geocoding UK Postcodes with Google Map API",date:"2009-01-20T10:55:49.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/auto-shapes-for-defraga/",tags:["flex","degrafa","drawing-api"],title:"Auto shapes for Degrafa",date:"2009-01-22T10:52:14.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-introducing-imagesizer-042-9cde2a60890e09afb2bf.js.map