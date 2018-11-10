webpackJsonp([0xbded4423d00c],{1239:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/creating-outlook-calendar-events-through-http-links/index.md absPath of file >>> MarkdownRemark",html:'<p>You mightn\'t think it was possible, the lack of implimentations you see for it on a day-to-day basis, but actually you can create Calendar events for a wide range of email / organiser clients using the iCalendar file format.</p>\n<p>From the users\' point of view, your Calendar event appears as every other hyperlink does in your html pages - but when they click on the link, instead of being taken to a new page, Outlook opens up an \'add event\' just as if they\'d clicked on a meeting request (in Outlook).</p>\n<p>From the developers\' point of view, once you have your server configured correctly, it\'s just a case of creating and linking to an .ics file instead of a .htm file - at which point the client\'s email software should take over.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/icalendar-129731eee78332cff1b9c354dfbf8100-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHUZ3SBcr//xAAVEAEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAQABBQIr/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFhAAAwAAAAAAAAAAAAAAAAAAECAx/9oACAEBAAY/AhE//8QAGBAAAwEBAAAAAAAAAAAAAAAAAAERIVH/2gAIAQEAAT8hpG8ZvQhJQiP/2gAMAwEAAgADAAAAEKzP/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/EGV//8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oACAECAQE/EKuP/8QAGhABAAIDAQAAAAAAAAAAAAAAAQARIUFR4f/aAAgBAQABPxBI1bnUFrdUTwwHCKCmY8p//9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="icalendar"\n        title=""\n        src="/static/icalendar-129731eee78332cff1b9c354dfbf8100-e8574.jpg"\n        srcset="/static/icalendar-129731eee78332cff1b9c354dfbf8100-c94d9.jpg 158w,\n/static/icalendar-129731eee78332cff1b9c354dfbf8100-9885b.jpg 315w,\n/static/icalendar-129731eee78332cff1b9c354dfbf8100-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>Does it work for me?</h2>\n<p>I don\'t know - try clicking on <a href="http://www.psyked.co.uk/icalendar.ics">this link</a>.  If MIME types are incorrectly set you\'ll probably see a plain text file, and if you don\'t have an application setup that\'s compatable with iCalendar events, you\'ll probably just be asked to save the file to your hard drive.</p>\n<h2>How do you create a Calendar event then?</h2>\n<p>First up, you need to sort out your MIME-types.  I\'m not going into that because it can get a little too complex, but just make sure you have the file extension .ics registered under the MIME-type "<strong>text/calendar</strong>" - if you\'re lucky it might already be setup!</p>\n<p>Next, you need to make the actual file, which is simple in one sense and complex in another.  iCalendar files are plain text files, so you just need notepad or something to create them, but they do have a very specific format. Wikipedia has a very <a href="http://en.wikipedia.org/wiki/ICalendar#Core_object">simple example</a>, so we\'re going to use that as a basis for our sample file.</p>\n<p>So lets create a working example - and we\'ll use the Flash on the Beach conference as a basis.</p>\n<p>This is the example on Wikipedia;</p>\n<pre><code>BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//hacksw/handcal//NONSGML v1.0//EN\nBEGIN:VEVENT\nDTSTART:19970714T170000Z\nDTEND:19970715T035959Z\nSUMMARY:Bastille Day Party\nEND:VEVENT\nEND:VCALENDAR\n</code></pre>\n<p>The framework we need to keep is pretty self explanitory - there\'s elements like the beginning and ending of portions of the file, and a basic framework for the dates and summary.  According to the RFC iCalendar specification, VERSION and PRODID are both required, so we\'ll leave those in also - which just leaves us with some customizing to do on the dates and summary information;</p>\n<pre><code>BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//hacksw/handcal//NONSGML v1.0//EN\nBEGIN:VEVENT\nDTSTART:20080928T000000Z\nDTEND:20081001T000000Z\nSUMMARY:Flash on the Beach 08 Conference\nDESCRIPTION:Flash on the Beach 08 is here again!\nWow, Flash on the Beach is in it\'s third year already! FOTB06 was awesome,\nFOTB07 was even better, and we are now pulling out all the stops to make\nFOTB08 the best yet! We have the best talent around speaking, new speakers\nto FOTB, the Inspired Sessions, workshops, parties and more! It\'s gonna rock!\nEND:VEVENT\nEND:VCALENDAR\n</code></pre>\n<p>You can see that there\'s practically no special formatting for the actual content - just plain text.  (Which is a shock after working with XML and CDATA for so long.)  And date formatting is just a condensed string - 1/11/2008, 15:30:00 just becomes 20081101T153000Z.</p>\n<p>Whack that into notepad, change the file extension to .ics and you\'re away!</p>\n<h2>That\'s it?</h2>\n<p>That really is it. It\'s an incredibly easy thing to customize - I\'d really recommend you skim through the <a href="http://tools.ietf.org/html/rfc2445">spec for iCalendar</a> if you\'re thinking of doing more clever things - there\'s formats and properties that control priorities, due dates, durations, status, alarms, journal entries - practically everything that Outlook does (beyond emails) can be done with the iCalendar format.</p>\n<h2>Resources</h2>\n<ul>\n<li><a href="http://en.wikipedia.org/wiki/ICalendar">iCalendar information on Wikipedia</a></li>\n<li><a href="http://tools.ietf.org/html/rfc2445">iCalendar technical specification</a></li>\n</ul>',frontmatter:{title:"Creating Outlook Calendar events through hyperlinks",date:"August 07, 2008",tags:["html","http-link","icalendar","outlook"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/bbc-sports-air-application-removes-its-offensive-language/",tags:["air","auto-updating","bbc","olympics","swearing"],title:"BBC Sports' AIR Application removes its offensive language",date:"2008-08-05T15:39:07.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/actionscript-2-to-actionscript-3-communication-try-flashinterface/",tags:["external-links"],title:"Actionscript 2 to Actionscript 3 communication? try FlashInterface...",date:"2008-08-20T08:00:38.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-creating-outlook-calendar-events-through-http-links-e9055fdbeb8da00a47cd.js.map