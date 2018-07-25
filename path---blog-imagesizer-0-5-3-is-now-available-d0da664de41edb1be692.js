webpackJsonp([0xfe15ee96538e],{1184:function(A,e){A.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/imagesizer-0-5-3-is-now-available/index.md absPath of file >>> MarkdownRemark",html:'<p>Wow.  Because I\'m so lazy at actually blogging about things, at least two full versions of ImageSizer have come and gone since my last post, so this is going to be a round-up of all of the cool things that\'ve been introduced to ImageSizer recently.</p>\n<h3>Individual files output</h3>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/new-output-screen-ab50c1ea54c38921353ba6d658d81ce4-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 74.4%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAMBBP/aAAwDAQACEAMQAAABmVMpXExnX//EABkQAAIDAQAAAAAAAAAAAAAAAAABAgMREv/aAAgBAQABBQKWCK1qb0QrOT//xAAWEQEBAQAAAAAAAAAAAAAAAAAAASH/2gAIAQMBAT8BS4//xAAWEQEBAQAAAAAAAAAAAAAAAAACABH/2gAIAQIBAT8BkVt//8QAFhABAQEAAAAAAAAAAAAAAAAAMRAg/9oACAEBAAY/AjDP/8QAGhABAAIDAQAAAAAAAAAAAAAAAQARITFRYf/aAAgBAQABPyFBeIhuiAq9mxe5hoSjV+z/2gAMAwEAAgADAAAAENgv/8QAFhEBAQEAAAAAAAAAAAAAAAAAACER/9oACAEDAQE/EKk1/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAx/9oACAECAQE/EDJzRv/EABoQAQEBAQEBAQAAAAAAAAAAAAEhEQAxcdH/2gAIAQEAAT8QFX0yPPw5bw40xPh2mOViPKsUsfzk9NaQ7//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Individual files output"\n        title=""\n        src="/static/new-output-screen-ab50c1ea54c38921353ba6d658d81ce4-e8574.jpg"\n        srcset="/static/new-output-screen-ab50c1ea54c38921353ba6d658d81ce4-c94d9.jpg 158w,\n/static/new-output-screen-ab50c1ea54c38921353ba6d658d81ce4-9885b.jpg 315w,\n/static/new-output-screen-ab50c1ea54c38921353ba6d658d81ce4-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p>"Hey, that sounds like a good idea."</p>\n</blockquote>\n<p>ImageSizer initially started as a batch image resizer, and still is, but it seems a little over-restrictive to only be able to export files in a folder or compressed archive.  So now we have an individual files output panel.  Tacked onto the previous encoding output screen is a new option in the top left corner, labelled "<strong>Individual file export options"</strong> (perhaps that needs rephrasing).  Click that and the view will shift, showing you a list of the files that\'ve just been resized, so you can grab individual files, instead of a single folder.</p>\n<p>It seems to work well for what I often want ImageSizer to be able to do when I\'m using it day-to-day, so that\'s what prompted this option!  That, and trying to figure out how to introduce the long-awaited \'Upload to Twitter\' option.  (Not available yet, but coming very soon!)</p>\n<h3>Image rotation</h3>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/image-rotation-e5c1e511924f9076478e101df184dcaa-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAEDQXNLMz//xAAaEAACAgMAAAAAAAAAAAAAAAAAAgEhIjFB/9oACAEBAAEFAn0s5DRXT//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPwFMZ//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/ASf/xAAXEAEAAwAAAAAAAAAAAAAAAAABIEGh/9oACAEBAAY/AhCtl//EABsQAAICAwEAAAAAAAAAAAAAAAABEUEQMYGx/9oACAEBAAE/IaItIsQMRPfWLxj/2gAMAwEAAgADAAAAEKDP/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/EGwZ/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QQk//xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMUGREP/aAAgBAQABPxB6IQMgI3XpEUKlPDEVsMmVKFjXs58+P//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Image Rotation"\n        title=""\n        src="/static/image-rotation-e5c1e511924f9076478e101df184dcaa-e8574.jpg"\n        srcset="/static/image-rotation-e5c1e511924f9076478e101df184dcaa-c94d9.jpg 158w,\n/static/image-rotation-e5c1e511924f9076478e101df184dcaa-9885b.jpg 315w,\n/static/image-rotation-e5c1e511924f9076478e101df184dcaa-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Image rotation!  Ok, at the moment it\'s a limited 90-degree step rotation, but I\'m sure that\'s useful for a lot of situations.  Images can easily be rotated using the buttons illustrated in the image above.</p>\n<h3>A Splash Screen.</h3>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/imagesizer-splash-2a3e1fa35a63a87a2e8a4872d5b7d998-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAWAQEBAQAAAAAAAAAAAAAAAAACAwT/2gAMAwEAAhADEAAAAYNy0UXMHt//xAAZEAACAwEAAAAAAAAAAAAAAAABAgASICH/2gAIAQEAAQUCCrXmBP/EABYRAQEBAAAAAAAAAAAAAAAAAAACMf/aAAgBAwEBPwFOP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABoQAQADAAMAAAAAAAAAAAAAAAEAETEQUXH/2gAIAQEAAT8hYV32YouUS3t5f//aAAwDAQACAAMAAAAQUy//xAAXEQEAAwAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/EGY2/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEx/9oACAECAQE/EImP/8QAHBABAAICAwEAAAAAAAAAAAAAAQARITFBYXHh/9oACAEBAAE/EDnbGfiNRoa4jc0YgZQB0w0RNPs//9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ImageSizer Splash screen"\n        title=""\n        src="/static/imagesizer-splash-2a3e1fa35a63a87a2e8a4872d5b7d998-e8574.jpg"\n        srcset="/static/imagesizer-splash-2a3e1fa35a63a87a2e8a4872d5b7d998-c94d9.jpg 158w,\n/static/imagesizer-splash-2a3e1fa35a63a87a2e8a4872d5b7d998-9885b.jpg 315w,\n/static/imagesizer-splash-2a3e1fa35a63a87a2e8a4872d5b7d998-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>It hasn\'t been easy developing ImageSizer, and as a result - I\'m sad to say - it hasn\'t always been smooth sailing.  My tendency to finish coding in the wee hours of the morning and immediately release exciting new things can often be blamed for the introduction of new issues.  ImageSizer has had its fair share of bugs, and those bugs tended to focus on the startup processes of the application, which makes an application Splash Screen sound like a good idea.  At least this way you can see the application is running, even if it hangs a bit while it fetches your settings.</p>\n<h3>Performance, memory usage, and Alchemy.</h3>\n<p>Oh yes.  This is the biggie, but it\'s one of those things that no-one really notices. It\'s the main reason development on ImageSizer might\'ve been seen to come to a halt.  I actually ended up spending over two months (well, my evenings for two months) rewriting just about everything - this time actually doing such things as Profiling the application, removing memory leaks and cutting down on the general memory footprint.</p>\n<p>Being an image-resizing application, ImageSizer needs to take a certain chunk of memory when it\'s working, but the difference between the latest versions and the earlier versions is that it will now not only give the memory back to the system, but will also try and cap the amount of memory it uses, without impeding performance.  \'Course I never took a benchmark at the start, but I assure you, it runs much better now!</p>\n<h3>Alchemy?</h3>\n<p>Goodbye ASyncJPEGEncoder, you served us well.  Unfortunately, Alchemy-powered JPEG encoders trump you hands down.  I\'m a novice at this stuff still, but I can at least follow tutorials and examples (I love you, Flash developer community!).  So ImageSizer\'s JPEG encoding is now done by an Alchemy encoder, which encodes your images anywhere between 4 and 100 times faster than the previous code, achieves a smaller file size on average, and retains the other settings, like the original Metadata.  Once we got that working, there was no contest.</p>\n<p>The only thing lacking at the moment is progress messages from the encoder, but I figure we can live with that until I get better at this Alchemy malarky.  Most of the time the delay in encoding is minimal, I just need to make the encoding progress screen a little more pretty.</p>\n<h3>Anything else?</h3>\n<p>It\'s also been written in PureMVC, so hopefully that structured development approach will help make it easier for me to develop more features in the future.</p>\n<p>And of course I\'m always looking to make the application more useful, even if we\'re not talking about new features.  A few visual elements have been tweaked, and the interface is moving to be more dynamic.  Most noticeable is probably the ouput settings panel on the first page, which has been split a little into a tabbed layout, or the options for the System Tray Icon, the Dock Menu, or the Screenshot detection and naming formats.  Doesn\'t sound very exciting, but all of these are either more intelligent in what they display (and thus, more useful) or are more customisable, to suit the users\' requirements.</p>\n<h3>GetSatisfaction</h3>\n<p>Oh yes.  I\'ve set up a community-powered support page on <a href="http://getsatisfaction.com/imagesizer">GetSatistfaction.com/ImageSizer</a>.</p>',frontmatter:{title:"ImageSizer 0.5.3 is now available!",date:"October 16, 2009",tags:["imagesizer","adobe","adobe-air","alchemy","getsatisfaction"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/getting-ftp-access-in-flex-builder/",tags:["flex","eclipse","flex-builder","ftp"],title:"Getting FTP access in Flex Builder...",date:"2009-10-14T09:15:41.000Z"}},next:{frontmatter:{path:"/blog/webcam-face-detection-spooky-goings-on/",tags:["flash","augmented-reality","halloween"],title:"Webcam + face detection = Spooky goings on...",date:"2009-10-23T13:27:16.000Z"}}}}}});
//# sourceMappingURL=path---blog-imagesizer-0-5-3-is-now-available-d0da664de41edb1be692.js.map