webpackJsonp([0x6461bc1bd051],{1091:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/bbc-uses-air-to-install-a-list-of-swear-words-to-users-machines/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/bbc-swear-e9e611abe55649998a5d68184c61fa63-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUBAwT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABbxXlhuBX/8QAGxABAAICAwAAAAAAAAAAAAAAAQIDABAREjL/2gAIAQEAAQUCnZ1STq31yhn/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAYEAEAAwEAAAAAAAAAAAAAAAABABARIf/aAAgBAQAGPwLMgpfK/8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAIRBBYcH/2gAIAQEAAT8hOs9OHggH3GnREN0Ve4//2gAMAwEAAgADAAAAED/P/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/EFJc/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/EAVyf//EABwQAQADAQADAQAAAAAAAAAAAAEAETEhUXGx8f/aAAgBAQABPxBq53CjWeZzYS6CdfV5BvIRbBAt9/JWcFw2p8hk/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="bbc swear"\n        title=""\n        src="/static/bbc-swear-e9e611abe55649998a5d68184c61fa63-e8574.jpg"\n        srcset="/static/bbc-swear-e9e611abe55649998a5d68184c61fa63-c94d9.jpg 158w,\n/static/bbc-swear-e9e611abe55649998a5d68184c61fa63-9885b.jpg 315w,\n/static/bbc-swear-e9e611abe55649998a5d68184c61fa63-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><strong>James Cannings</strong> from <strong>MMT Digital</strong> alerted me to this, and has written a post about it at: <a href="http://www.mmtdigital.co.uk/monkeymagic">http://www.mmtdigital.co.uk/monkeymagic</a>, and here\'s my thoughts on it:</p>\n<p>You can install the BBC Sport’s Desktop Monkey at: <a href="http://news.bbc.co.uk/sport1/hi/olympics/monkey/7479984.stm">http://news.bbc.co.uk/sport1/hi/olympics/monkey/7479984.stm</a></p>\n<p>If you do however, you’ll be unwittingly installing a rather comprehensive list of offensive words as a plain text file to your hard drive. Once it\'s installed, go to your application directory (Program Files) and <strong>BBC Olympics</strong> > <strong>assets</strong> > <strong>data</strong> > <a href="http://www.psyked.co.uk/wp-content/uploads/2008/08/bbc-swear.txt"><strong>bbc-swear.txt</strong></a> and you\'ll be privvy to a 15kb, 1399 lines long list of bad words.</p>\n<p>This is such an ridiculous error that I’m practically lost for words. For an audience as big as the BBC’s you think they’d be mindful about offending people – every other part of the development must have undergone a review process – but bundling a highly offensive text file with your application?</p>\n<h2>Why?</h2>\n<p>Perhaps there’s a reason for the BBC’s Olympics Application to contain a list of restricted words, but for the love of god, don’t store them in an unencrypted text file that’s written to the user’s hard drive - store it in a database format, a non .txt extension, encrypted storage, or even on a remote server – but <strong>do not store it as a text file!</strong></p>\n<h2>On the funny side...</h2>\n<p>Most of these words I haven’t heard since school, and many of them I’ve never heard of.  Although, beyond childish giggles, this isn\'t really funny - I don\'t think its nessessary, and looking at the contents, I have doubts about how useful it really is...</p>\n<h2>No really, why?</h2>\n<p>From an efficiency (programatic) point of view, the text file has some truly odd contents...</p>\n<p>If you’re going to search for the word ‘tosser’ then do a <strong>regular expression</strong> for the word ‘tosser’ – and perhaps a regular expression for the l33t-speak variant – don’t just search for these words:</p>\n<blockquote>\n<p>“to$$ers, to**er, to55er, to55ers, tosser, tosser, tossers, tossurs”</p>\n</blockquote>\n<p>Because a slight misspelling is going to get past, is it not?</p>\n<p>Anyway, there’s much that can be said about it - and I\'m sure much will be said about it.  <a href="http://www.ashorten.com/2008/07/17/bbc-olympics-coverage-on-your-desktop-with-air-and-on-the-web-with-flash-player/">Andrew Shorten</a> has been promoting it, I wonder what he has to say?</p>',frontmatter:{title:"BBC uses Adobe AIR to install a list of swear words to users machines.",date:"August 05, 2008",tags:["bbc","olypmics","swearing"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/exempli-gratia-using-tweener/",tags:["flash","actionscript","animation","google-code","open-source"],title:"Exempli Gratia : Using Tweener",image:null,date:"2008-07-18T18:53:31.000Z"}},next:{frontmatter:{path:"/blog/bbc-sports-air-application-removes-its-offensive-language/",tags:["air","auto-updating","bbc","olympics","swearing"],title:"BBC Sports' AIR Application removes its offensive language",image:null,date:"2008-08-05T15:39:07.000Z"}}}}}});
//# sourceMappingURL=path---blog-bbc-uses-air-to-install-a-list-of-swear-words-to-users-machines-69547ab5f42f193b02f5.js.map