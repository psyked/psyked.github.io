webpackJsonp([85427942444005],{1217:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/little-html-mysteries-alt-vs-title/index.md absPath of file >>> MarkdownRemark",html:"<p>This is something that I've had a wee bit of an issue with recently, but I thought I'd mention it now. Why not, eh?</p>\n<p>For the uninitiated, alt tags are <em>alternative text</em>, a label if you will, that is used to explain the <em>content</em> of an image, when images are blocked or you're on some rubbishy connection. (or a non-standard or non-desktop browser like mobile web) Alt tags are also a basic requirement of the W3C WAI guidelines, and must be included for Accessible websites - something that is most important for UK based websites - which have to be accessible, under UK Disability Discrimination laws.</p>\n<p><em>Title</em> tags on the other hand, perform the same basic function, but for any element of the page, not just images. So, you can describe where links will take you, that sort of thing. This all comes from the expanded later versions of web standards, usually xhtml standards, whereas the alt tag is a much older and comes from the earlier html standards.</p>\n<h2>What's the problem?</h2>\n<p>The issue I encountered recently, is due to the progressive alterations in browser behaviour, changing their interpretations of the page rendering, and a limitation of our own Content Management System at MMT, which currently only generates alt attributes and not title attributes.</p>\n<h2>When did this become an issue?</h2>\n<p>Historically, tooltips have appeared displaying the alt attribute of images in Internet Explorer, ignoring title attribute all the way up to version 6, whereas the title attribute is used for tooltips in other browsers. Internet Explorer 7 changes all this, and now the title attribute overrides the alt attribute, if it exists. Infuriatingly, browsers like Firefox don't use the alt attribute for tooltips at all, and only use the title attribute. The behaviour of both browsers would now indicate that title attributes are the way to go - both browsers use them as the primary source of tooltips, but the W3C reccommendations (and the legal validation requirements) are holding us to using alt attributes as well.</p>\n<h2>Why?</h2>\n<p>Practically, I can't see a difference in the information that is encoded into either of these attributes, it's slightly inefficient text duplications, caused by slightly outdated schemas that still require alt tagged images. Browsers follow the W3C guidelines, so the overriding properties of title vs. alt tags must be part of the spec? And if that's the case, why isn't the alt tag depriciated? And if that's the case, why do we need to include depriciated attributes?</p>",frontmatter:{title:"Little HTML mysteries...  alt vs. title",date:"July 18, 2007",tags:["html","validation"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/auto-matic-link-icons/",tags:["css","icons"],title:"Auto-matic Link Icons",date:"2007-07-10T17:42:17.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/smashing-flash-websites/",tags:["design","flash","blogroll"],title:"2 Smashing Flash Websites...",date:"2007-07-20T19:31:46.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-little-html-mysteries-alt-vs-title-6bb0fbcda621dfc54d3e.js.map