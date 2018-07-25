webpackJsonp([0x67d6f1f930d3],{1269:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/print-screen-detection-in-air/index.md absPath of file >>> MarkdownRemark",html:'<p>Here\'s a little something I\'ve been working on recently - Print Screen support in AIR. It has to be AIR because only AIR allows you to access the OS clipboard, and only AIR seems to have access to the full keyboard. There\'s a few things I\'ve looked at and various snippets of code, so I\'ll cover them in roughly the order I figured it all out...</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/printscreenmonitor-ce0e8ec170e4ea57f1f3414a63af2ce0-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAgADBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAes9iCcf/8QAGRAAAwADAAAAAAAAAAAAAAAAAAERAhAS/9oACAEBAAEFAoqsUcrcP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABcQAAMBAAAAAAAAAAAAAAAAAAAgMUH/2gAIAQEABj8CwhE//8QAHBAAAwABBQAAAAAAAAAAAAAAAAERIRBRcYGR/9oACAEBAAE/IXRlFwSLB9D2PmkRB//aAAwDAQACAAMAAAAQo8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAcEAACAwADAQAAAAAAAAAAAAAAAREhMVGBocH/2gAIAQEAAT8QXVYZF/Dg01pZJz6EKBOqKHJnp//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Print Screen Monitor"\n        title=""\n        src="/static/printscreenmonitor-ce0e8ec170e4ea57f1f3414a63af2ce0-e8574.jpg"\n        srcset="/static/printscreenmonitor-ce0e8ec170e4ea57f1f3414a63af2ce0-c94d9.jpg 158w,\n/static/printscreenmonitor-ce0e8ec170e4ea57f1f3414a63af2ce0-9885b.jpg 315w,\n/static/printscreenmonitor-ce0e8ec170e4ea57f1f3414a63af2ce0-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>Getting your Print Screen data.</h3>\n<p>This is actually easy enough - use the Clipboard class (available in AIR) .</p>\n<pre><code>import flash.desktop.Clipboard; \nimport flash.desktop.ClipboardFormats; \nimport flash.display.BitmapData;\n\nClipboard.generalClipboard.getData(ClipboardFormats.BITMAP_ FORMAT) as BitmapData;\n</code></pre>\n<p>If we want to use that on the stage, wrap the BitmapData in Bitmap:</p>\n<pre><code>new Bitmap(Clipboard.generalClipboard.getData(ClipboardFormats.BITMAP_FORMAT) as BitmapData);\n</code></pre>\n<p>That\'s easy enough, isn\'t it? Create a button or whatnot and you can grab your screenshot data.  But what if there\'s no BitmapData in the clipboard? That\'s easy too - use the <em>hasFormat</em> function of the Clipboard class: <code>Clipboard.generalClipboard.hasFormat(ClipboardFormats. BITMAP_FORMAT)</code> returns a boolean value - you\'d never guess.</p>\n<h3>Detecting Print Screen keypresses?</h3>\n<p>So, how about updating automatically?  Well, how about detecting keypresses - if we go have a little look in the AIR documentation [<a href="http://help.adobe.com/en_US/AS3LCR/Flash_10.0/flash/ui/Keyboard.html">link</a>] you\'ll see references to <code>Keyboard.KEYNAME_PRINTSCREEN</code>.  Sounds perfect, yes? Just make a key listener?</p>\n<p>Well no luck with that - AIR can\'t detect all non-glyph printing characters - it detects things like the Ctrl, Alt, Shift keys - but not the Print Screen key. Those events just don\'t fire. Makes you wonder what on earth the static constants are in the documentation and the classes for, because as far as I can tell, nothing is ever going to use those events...</p>\n<h3>Detecting changes to the Clipboard</h3>\n<p>Ok, so how about this for a solution: We can\'t detect the keypress of the Print Screen key - but we could poll the clipboard and watch for changes to it.  Mike Chambers\' Volume Monitor class does something similar [<a href="http://www.mikechambers.com/blog/2009/02/24/monitoring-system-volume-changes-with-adobe-air/">link</a>] with watching the local storage drives, so I\'ve stolen that idea. I\'m not going to go into full explainations of the code, but I\'ve put together a PrintScreenMonitor class.  It watches the clipboard  - dispatching an event when a new screenshot is added to the clipboard, another event when the screenshot changes, and another when the screenshot is removed from the clipboard.</p>\n<p>Here\'s a look at the implementation;</p>\n<pre><code>import couk.psyked.air.printscreen.events.PrintScreenMonitorEvent;\nimport couk.psyked.air.printscreen.PrintScreenMonitor;\n\nprivate var monitor:PrintScreenMonitor\n\nprivate function init():void { \n    monitor = new PrintScreenMonitor(100); \n    monitor.addEventListener(PrintScreenMonitorEvent.ADD\\_SCREENSHOT, updateImage); \n    monitor.addEventListener(PrintScreenMonitorEvent.CHANGE\\_SCREENSHOT, updateImage); \n    monitor.addEventListener(PrintScreenMonitorEvent.REMOVE_SCREENSHOT, removeImage); \n    monitor.watch(); \n}\n\nprivate function updateImage(e:PrintScreenMonitorEvent):void { \n    image.data = e.bitmap; \n}\n\nprivate function removeImage(e:PrintScreenMonitorEvent):void { \n    image.data = ""; \n} \n</code></pre>\n<p>So, there\'s 3 events - the PrintScreenMonitorEvent is the same as a normal event with an additional bitmap parameter and contains a Bitmap object. Unless of course the event type is a REMOVE_SCREENSHOT event!  The only other problematic thing I\'ve encountered is scope with the PrintScreenMonitor. The above example works, and there\'s a couple of downloadable examples here.</p>\n<h3>Downloads / Samples.</h3>\n<ul>\n<li><a href="http://www.psyked.co.uk/wp-content/uploads/2009/04/print_screen_monitor1.zip">Flex sample project.</a></li>\n<li>[Actionscript classes as a zip file.](/wp-content/uploads/2009/04/AS3 Classes.zip)</li>\n</ul>',frontmatter:{title:"Print Screen detection in AIR",date:"April 17, 2009",tags:["air"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/talking-about-flex-gumbo-new-features/",tags:["flex","flex-4","gumbo"],title:"Talking about: Flex Gumbo - new features",date:"2009-04-06T08:15:52.000Z"}},next:{frontmatter:{path:"/blog/flash-camp-birmingham/",tags:["flash"],title:"Flash Camp Birmingham",date:"2009-05-07T20:12:50.000Z"}}}}}});
//# sourceMappingURL=path---blog-print-screen-detection-in-air-7ad682e283d93742d262.js.map