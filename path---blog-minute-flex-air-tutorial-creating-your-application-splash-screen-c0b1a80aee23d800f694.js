webpackJsonp([0x9ebd7f63ad5b],{1369:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/minute-flex-air-tutorial-creating-your-application-splash-screen/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/mysplashscreen-922026cdcf37b1f32f9c01e7d81b8381-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEDAgT/xAAWAQEBAQAAAAAAAAAAAAAAAAADAgT/2gAMAwEAAhADEAAAAezUHgZEhY//xAAZEAACAwEAAAAAAAAAAAAAAAAAAQIREjH/2gAIAQEAAQUCyUT7bNMk3f8A/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAB/9oACAEDAQE/AcLRv//EABcRAQEBAQAAAAAAAAAAAAAAAAEAAhH/2gAIAQIBAT8BRsjy/8QAFRABAQAAAAAAAAAAAAAAAAAAESD/2gAIAQEABj8CWv/EAB0QAAICAQUAAAAAAAAAAAAAAAABETFBIWFxgZH/2gAIAQEAAT8hVZODp4IsFQolqbhlD//aAAwDAQACAAMAAAAQ6y//xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhMf/aAAgBAwEBPxCK4PTD/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAERITH/2gAIAQIBAT8QZekBZ//EABwQAQACAgMBAAAAAAAAAAAAAAEAIRFxQVFh0f/aAAgBAQABPxAkK8GghUxzYjWDIFp7NaHB1HD8EYF4dT//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="mysplashscreen"\n        title=""\n        src="/static/mysplashscreen-922026cdcf37b1f32f9c01e7d81b8381-e8574.jpg"\n        srcset="/static/mysplashscreen-922026cdcf37b1f32f9c01e7d81b8381-c94d9.jpg 158w,\n/static/mysplashscreen-922026cdcf37b1f32f9c01e7d81b8381-9885b.jpg 315w,\n/static/mysplashscreen-922026cdcf37b1f32f9c01e7d81b8381-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Ah, the old splash screen - a familiar thing for anyone using Adobe products, I should imagine.</p>\n<p>I\'m going to skip the arguements for and against a splash screen on your application, and assume there\'s a valid reason for having one - this is mainly a \'show and tell\' with my code, followed by a few technical musings, and links to the project files.</p>\n<h3>Show and tell.</h3>\n<p>As Flex / AIR applications go, this is very basic.  We\'re using the default WindowedApplication because it\'s easy, adding a transparent-backgrounded png image to the stage, and a small ActionScript function, which positions the window in the centre of the users\' main screen.</p>\n<pre><code>  &#x3C;?xml version="1.0" encoding="utf-8"?>\n  &#x3C;mx:WindowedApplication xmlns:mx="http://www.adobe.com/2006/mxml"\n  layout="absolute" title="My Splash Screen" cornerRadius="0"\n  showFlexChrome="false" height="280" width="500"\n  applicationComplete="init();">\n  &#x3C;mx:Script>\n  &#x3C;!\\[CDATA\\[\n  private function init():void {\n        var splashScreen:NativeWindow = this.nativeWindow;\n        splashScreen.x = (Screen.mainScreen.visibleBounds.width -\n  splashScreen.width) / 2;\n        splashScreen.y = (Screen.mainScreen.visibleBounds.height -\n  splashScreen.height) / 2;\n  }\n  \\]\\]>\n  &#x3C;/mx:Script>\n  &#x3C;mx:Image x="0" y="0" source="images/splash/splash-bg.png" width="100%" \n  height="100%" creationCompleteEffect="Fade" click="NativeApplication.nativeApplication.exit();"/>\n  &#x3C;mx:Label text="Click on the box to close the application."\n  horizontalCenter="0" verticalCenter="0"/>\n  &#x3C;/mx:WindowedApplication>\n</code></pre>\n<p>The main things to note are that:</p>\n<ul>\n<li>Our WindowedApplication has a cornerRadius of 0 - which removes the default rounded corners effect so we can use squared corners on our image.</li>\n<li>To make things more pretty I\'ve added a Fade effect to the image on creationComplete.  - Note that the effect has to be added to the image or a container on the stage, rather than the applicationComplete function of the parent WindowedApplication component.</li>\n<li>The window is positioned on the users\' scren with Script, rather than properties. - It gives a little more flexibility to do things like this with scripts rather than properties.</li>\n<li>To get the nice drop shadow effect, the drop shadow is actually on the png image.  Transparency is enabled by modifying the -app.xml settings of the main MXML file in Flex.</li>\n</ul>\n<h3>Technical Musings,</h3>\n<p><strong>Disclaimer:</strong> I\'m still getting into Flex (heck, after 2 years doing Flash full time, I only just get the idea that I\'m doing things the \'right\' way) and so I might not have the most sensible application architecture ideas...</p>\n<p>A splash screen has two main purposes;</p>\n<p>The first, practical benefit is that a splash screen can load and display faster than the rest of the application.  I get the impression that this isn\'t going to help if your AIR application hangs while loading, because the whole application is connected, but if you\'re transferring data over network connections, decrypting or unpacking files in an asyncronous way, then a splash screen is likely to have a percieved performance boost.</p>\n<p>The other \'benefit\' I can see is from an organisational point of view, (and this is where I lack practical experience) - the inital Class of an AIR application doesn\'t have to be the one that contains <em>everything</em>.  It is almost just a gateway for initalizing the other Classes that make up the application.  I\'m sure there\'s a whole Design Pattern around this sort of thing, but I think that if you make your applications\' default window the one that initalises the other windows and classes used by the application, it makes a whole lot more sense.</p>\n<p>So my advice would be to make the applications\' default class the splash screen, and have the splash screen initalise all other windows.  Does anyone have an opinion on this? I\'d love to know...</p>\n<h3>Source files:</h3>\n<ul>\n<li><a href="http://uploads.psyked.co.uk/2008/11/splash-screen-demo.zip">Click here to download the Flex Project Archive.</a></li>\n</ul>\n<h3>Future Development...</h3>\n<p>Given a little more time, you could incorporate more things, like status messages and event handlers, to update the splash screen as the application loads - kinda like Photoshop - or you could (should?) extend parts of the display - like the version number - to read in variables dynamically from the application settings file.  All things for a followup tutorial, methinks.</p>',frontmatter:{title:"10 minute Flex / AIR tutorial - Creating your Application Splash Screen.",date:"November 26, 2008",tags:["flex","air","splash-screen","tutorial"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/desktop-mashups/",tags:["macros","microsoft-office","vba"],title:"Desktop Mashups?",date:"2008-11-25T09:45:27.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/interesting-things-in-adobe-labs-adobe-wave/",tags:["adobe-wave","air"],title:"Interesting things in Adobe Labs - Adobe Wave",date:"2008-11-27T08:48:59.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-minute-flex-air-tutorial-creating-your-application-splash-screen-c0b1a80aee23d800f694.js.map