webpackJsonp([0xfe15ee96538e],{1156:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter - Forty by HTML5 UP",author:"Hunter Chang"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/imagesizer-0-5-3-is-now-available/index.md absPath of file >>> MarkdownRemark",html:'<p>Wow.  Because I\'m so lazy at actually blogging about things, at least two full versions of ImageSizer have come and gone since my last post, so this is going to be a round-up of all of the cool things that\'ve been introduced to ImageSizer recently.</p>\n<h3>Individual files output</h3>\n<img class="alignnone size-full wp-image-972" title="Individual files output" src="http://uploads.psyked.co.uk/2009/10/new-output-screen.jpg" alt="Individual files output" width="500" height="372">\n<blockquote>&quot;Hey, that sounds like a good idea.&quot;</blockquote>\nImageSizer initially started as a batch image resizer, and still is, but it seems a little over-restrictive to only be able to export files in a folder or compressed archive. &#xA0;So now we have an individual files output panel. &#xA0;Tacked onto the previous encoding output screen is a new option in the top left corner, labelled &quot;<strong>Individual file export options&quot;</strong> (perhaps that needs rephrasing). &#xA0;Click that and the view will shift, showing you a list of the files that&apos;ve just been resized, so you can grab individual files, instead of a single folder.\n<p>It seems to work well for what I often want ImageSizer to be able to do when I\'m using it day-to-day, so that\'s what prompted this option!  That, and trying to figure out how to introduce the long-awaited \'Upload to Twitter\' option.  (Not available yet, but coming very soon!)</p>\n<h3>Image rotation</h3>\n<img class="alignnone size-full wp-image-973" title="Image Rotation" src="http://uploads.psyked.co.uk/2009/10/image-rotation.jpg" alt="Image Rotation" width="500" height="280">\n<p>Image rotation!  Ok, at the moment it\'s a limited 90-degree step rotation, but I\'m sure that\'s useful for a lot of situations.  Images can easily be rotated using the buttons illustrated in the image above.</p>\n<h3 style="font-size: 1.17em;">A Splash Screen.</h3>\n<img style="border: 0px initial initial;" title="ImageSizer Splash screen" src="http://uploads.psyked.co.uk/2009/10/imagesizer-splash.jpg" alt="ImageSizer Splash screen" width="500" height="280">\n<p>It hasn\'t been easy developing ImageSizer, and as a result - I\'m sad to say - it hasn\'t always been smooth sailing.  My tendency to finish coding in the wee hours of the morning and immediately release exciting new things can often be blamed for the introduction of new issues.  ImageSizer has had its fair share of bugs, and those bugs tended to focus on the startup processes of the application, which makes an application Splash Screen sound like a good idea.  At least this way you can see the application is running, even if it hangs a bit while it fetches your settings.</p>\n<h3>Performance, memory usage, and Alchemy.</h3>\nOh yes.  This is the biggie, but it\'s one of those things that no-one really notices. It\'s the main reason development on ImageSizer might\'ve been seen to come to a halt.  I actually ended up spending over two months (well, my evenings for two months) rewriting just about everything - this time actually doing such things as Profiling the application, removing memory leaks and cutting down on the general memory footprint.\n<p>Being an image-resizing application, ImageSizer needs to take a certain chunk of memory when it\'s working, but the difference between the latest versions and the earlier versions is that it will now not only give the memory back to the system, but will also try and cap the amount of memory it uses, without impeding performance.  \'Course I never took a benchmark at the start, but I assure you, it runs much better now!</p>\n<h3>Alchemy?</h3>\nGoodbye ASyncJPEGEncoder, you served us well.  Unfortunately, Alchemy-powered JPEG encoders trump you hands down.  I\'m a novice at this stuff still, but I can at least follow tutorials and examples (I love you, Flash developer community!).  So ImageSizer\'s JPEG encoding is now done by an Alchemy encoder, which encodes your images anywhere between 4 and 100 times faster than the previous code, achieves a smaller file size on average, and retains the other settings, like the original Metadata.  Once we got that working, there was no contest.\n<p>The only thing lacking at the moment is progress messages from the encoder, but I figure we can live with that until I get better at this Alchemy malarky.  Most of the time the delay in encoding is minimal, I just need to make the encoding progress screen a little more pretty.</p>\n<h3>Anything else?</h3>\nIt\'s also been written in PureMVC, so hopefully that structured development approach will help make it easier for me to develop more features in the future.\n<p>And of course I\'m always looking to make the application more useful, even if we\'re not talking about new features.  A few visual elements have been tweaked, and the interface is moving to be more dynamic.  Most noticeable is probably the ouput settings panel on the first page, which has been split a little into a tabbed layout, or the options for the System Tray Icon, the Dock Menu, or the Screenshot detection and naming formats.  Doesn\'t sound very exciting, but all of these are either more intelligent in what they display (and thus, more useful) or are more customisable, to suit the users\' requirements.</p>\n<h3>GetSatisfaction</h3>\nOh yes.  I\'ve set up a community-powered support page on <a href="http://getsatisfaction.com/imagesizer" target="_blank">GetSatistfaction.com/ImageSizer</a>.',frontmatter:{title:"ImageSizer 0.5.3 is now available!",date:"October 16, 2009",tags:["imagesizer","adobe","adobe-air","alchemy","getsatisfaction"]}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-imagesizer-0-5-3-is-now-available-f9e5f0c94b47101bd940.js.map