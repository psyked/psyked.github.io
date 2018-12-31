webpackJsonp([0xaab754245b8c],{1409:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/pokeproject-from-static-html-to-react-to-nuxt/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*_ktZpY0rhoRFlnsM-7k8MA-166b718248f99f519c1c4c5f1b12e309-56bef.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 24.333333333333332%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAAsSAAALEgHS3X78AAAAoElEQVQY02OIObMHFe1OOLsh/fyi3AvTC69MyLvWm39pUtb5OSnnVsSd2YammAGNH3dmZ8rZVdnnZ+de7K7YXbpwcnbR+aa8i5Mzzi9MPLuRgObYszuAluRcnJl3ssFvVqlPRmL8hryiKxMzzs9PPLuBkGaIzRdm55/rjt7a5bKsLXFPY9GVyennFiYQtBnu55wL0/LPd5Vc6iq4OBGXnwFxf7eiAb07tQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1  ktZpY0rhoRFlnsM 7k8MA"\n        title=""\n        src="/static/1*_ktZpY0rhoRFlnsM-7k8MA-166b718248f99f519c1c4c5f1b12e309-082ce.png"\n        srcset="/static/1*_ktZpY0rhoRFlnsM-7k8MA-166b718248f99f519c1c4c5f1b12e309-c7cb1.png 158w,\n/static/1*_ktZpY0rhoRFlnsM-7k8MA-166b718248f99f519c1c4c5f1b12e309-93041.png 315w,\n/static/1*_ktZpY0rhoRFlnsM-7k8MA-166b718248f99f519c1c4c5f1b12e309-082ce.png 630w,\n/static/1*_ktZpY0rhoRFlnsM-7k8MA-166b718248f99f519c1c4c5f1b12e309-c4006.png 945w,\n/static/1*_ktZpY0rhoRFlnsM-7k8MA-166b718248f99f519c1c4c5f1b12e309-56bef.png 1200w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h1>PokéProject: from Static HTML, to React, to Nuxt.</h1>\n<p>This is the story of my development journey with <a href="https://www.pokeproject.co.uk/">PokéProject.</a> Hopefully this isn’t the complete story, and there’s much more to be told again in the future. This isn’t a tale of the perfect development lifecycle, and I’m sure that if I started this project from scratch again a fair number of alternate choices would have been made.</p>\n<p>Ready? <em>Let’s get going.</em></p>\n<h3>The idea 💡✨</h3>\n<p>The initial idea for PokéProject was to use the classic Pokémon games of my childhood as inspiration for codenames in my projects at work, as a sort of nostalgic injection of fun into the daily grind.</p>\n<p>Project codenames are a fairly big thing at <a href="https://www.mmtdigital.co.uk/">MMT Digital</a> — each project team picks a codename for themselves as a bonding exercise during the first sprint — and often go so far as to support that with limited-edition swag, such as branded mugs, t-shirts or similar items. One of these project kick-off meetings sparked the idea for me, and it took shape from then on.</p>\n<h3>The technical approach 🤔</h3>\n<p>I am primarily a Front End Developer, and my language of choice is JavaScript. For the very first version of PokéProject I figured that all I needed would be static HTML, CSS and some plain vanilla JavaScript. No frameworks, no Bootstrap templates, and certainly nothing to distract me from the core purpose of the project, which was to generate codenames.</p>\n<h3>The progress plateau 📉</h3>\n<p>This lean, framework-free approach served me well at the start, and even afforded me time enough to code and blog about my code, but eventually I stopped making enough progress each time to make documenting the journey on such a regular basis seem worthwhile. I managed 8 posts in total before I got to this point.</p>\n<p>After this initial phase, having something substantial enough to write about in what was essentially a few hours’ development each day was becoming too much hassle, and I stopped writing about it, even as development continued.</p>\n<h3>The need to rebuild</h3>\n<p>This was essentially the first phase of development — getting a prototype application up and running, and out in the wild. Phase two is when we take the idea further, and begin a large scale redevelopment to enable bigger and better things.</p>\n<p>When I say bigger and better things, I’m talking about a few key features that I felt were lacking with PokéProject, and were limiting its chances of success. These were primarily:</p>\n<ul>\n<li>Social Networking integration.</li>\n<li>The maintainability and long-term scalability of the source code.</li>\n<li>The limitations of my URL routing solution and the difficulty of deploying and maintaining it.</li>\n<li>The download size of the website and its data sources.</li>\n</ul>\n<p>Having focussed more on the prototype and shunning unfamiliar frameworks, it was becoming increasingly apparent that I was spending much more time developing solutions that others had already solved, rather than developing my own unique application features.</p>\n<h3>Static HTML</h3>\n<p>Static HTML is ultimately faster than anything that’s dynamically generated on the server side is going to be. The development server for PokéProject uses NGINX to serve static HTML, and it’s fast and scalable. Prior experience tells me that there’s going to be no problems with load or resource consumption — if we get enough traffic to cause issues, it’s not going to be NGINX which fails first.</p>\n<p>The setup that I went for was very low budget — my entire ‘website’ was a single index.html file which NGINX was configured to serve by default when a directly referenced file didn’t exist on the server. Regardless of the URL requested, the same index.html file contents would be returned and, the client-side JavaScript would evaluate the window.location property to determine what content to display on screen. A low budget, entirely custom approach to URL routing — simple, but it works. Or worked, initially.</p>\n<h3>Problems with Static HTML</h3>\n<p>The problems with static HTML really started to emerge when I wanted to push PokéProject into the social sphere, and make the content more easily sharable on platforms like Twitter and Facebook. When adding links to these platforms they make a request to fetch data about the linked page, and use that to populate a preview of the link. The trouble is my static HTML pages are essentially all the same HTML file, served in response to any URL request and the contents evaluated and rendered client-side based on the content, which is far from ideal for these server-based website previews. I really needed different, appropriate HTML to be served for each URL request — essentially, I needed server-side rendering.</p>\n<h4>Option 1: More Static HTML</h4>\n<p>One option that was open to me was the idea of pre-rendering my static HTML, building a one-off task to autogenerate a whole load of HTML files with different contents.</p>\n<p>To a certain extent I was already doing something similar — for the first version of the Twitter card integration I needed to create actual JPG format versions of my canvas rendering, so I built a script to do a one-off generation of the 721 Pokémon cards needed to support it — but generating potentially thousands of copies static HTML files in the appropriate URL structures didn’t seem the proper way, not least because the time it takes to update these on the server for each release was prohibitive.</p>\n<p>Another alternate option, and the one I actually took, was to investigate further the idea of building PokéProject in a proper framework, ideally one with server-side or ‘universal’ rendering support.</p>\n<p>Part of my decision making here was based on the fact that I <em>wanted</em> to use a framework. It’s not generally a sensible business decision to gamble on something you don’t understand when there’s a perfectly viable alternative available, but I did it anyway, mainly because I hadn’t used React before, and I wanted to change that.</p>\n<h3>✨Adopting React✨</h3>\n<p><a href="https://facebook.github.io/react/">React</a> is a component-based view rendering library, and the theory and thinking that’s gone into its conception makes it a really attractive library to be using.</p>\n<p>Once I had started it was really easy to transform my bespoke, standalone JavaScript code into React components, and once I had those it was startlingly easy to use, re-use and mash those components together to begin exploring a host of new directions for my application.</p>\n<h3>Problems with React</h3>\n<p>The problem was, my out-of-the-box React application didn’t support server-side rendering, which was kinda the main point of adopting it in the first place.</p>\n<p>React is very popular, and as a result there are loads of starter tutorials and bootstrap projects available. And I do mean loads. There’s even a website dedicated to helping you find one with the features that you need. I picked the first one I found that I found accessible, and ended up without the universal rendering support that I really needed from it in the first place.</p>\n<p>No problem, I thought, and picked another. Most of the structure was the same, and I spent an evening porting the code across, only to discover that ‘this’ template uses React <em>and</em> Redux. <a href="http://redux.js.org/">Redux</a> is a whole other deal — they even advise against taking on the two for the first time at the same time specifically on their website. Jump forward in time and wasted a few more days trying to figure out how <em>that</em> works, and I still don’t have a React app with server-side rendered content, and so I’m back to desperately researching React starter templates for one that’s a) easy enough for me to understand without lots of reading documentation and b) supports server side rendering, hot module reloading and everything else I think a project should have.</p>\n<p><img src="/0*2KNvsnYDrlwUVJ1h-bff3bef30f9520ac709afbacb558178c.gif"></p>\n<p>By this point, I’ve spent almost as much time trying to understand React and getting a template which just <em>works</em> that I spent developing the core of the application. I want to work on my application functionality, not the boring things like configuration and customisation — that’s the whole point of adopting a framework, abstracting away the dull, mundane bits of development.</p>\n<h3>Admitting defeat</h3>\n<p>I tried React because it offered to componentise my source code, give me a solid URL routing library, make me organise my source code better and offer server side rendering, but all I really ended up doing was realising ‘React’ as I understood it was more an umbrella term for a whole host of libraries, not one of which seemed to be intuitive enough for me to understand.</p>\n<h3>Finding Vue.js</h3>\n<p><a href="https://vuejs.org/">Vue.js,</a> had been a technology in my peripheral vision for a little while, and I started really looking at it again after my failures with React. It’s perhaps wrong to like a technology purely based on the branding of its website, but it has got that going for it as well. I don’t start with the documentation when looking at a technology, I start with the code examples, and I was quickly redirected to the Nuxt project because it advertised server-side rendering.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/0*4tLRWd_LC8UMCSPE-894032ca52b2201a7a6314f8358965b7-c995b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 307px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAC40lEQVQ4y42T+0/TUBTH9+/4gyKxYwgDYcAEJSYqIbiAoHG8kmF4GZDHNrDD6A+C+gPRBP2JxEnE6Mp4TCASlDnchmPIgCGvBdh4rF3bdY8Wb1sZAotyc3Jzeu/9nO859/QK9qINhrP/DkF0mGGIUADMXCCGpukTwQwnGaTDtZPds14X8GkuBnMSOMywIsia5VRvjdLSA/zVbQ9iMfLp/AvmZbEgmTvaIe5TJfapbNjqiyFE1KzYRHeP84dgmpPtdBiEuob0flg8qM77+OQSfP90XTH8vps9cLh4wV8kG9WJbUoH2y7oW1L0rZJhjbC0RHSnJElTnaC8a1laiByLDjeatZCuMU3/IHUYFnfWQen5witFSU2VsQ1l5V1Po9fMkxPuhQREmdrfmjLQCpRFBXIoowCSFohuFSfD1bH1ZfopE3up+8kL9vbbEKRD8vGX55FmCZAdgRM11efS8qHLN6Es1hLvVcQpFTntLRhJRG5OELmnt0tGEdKUMQBLDHBqr1p07XZcVmFcdhFrmYXxMnmKpuZsfWmnQRdBBHwMN4VmGx7HI81iRCUeaoGqys4k58VIZTHpnGXIYiQ3oPISoUqRpK5adK/zlQr4arvmRzMHH+aOdOR87rja8ygzvyJiF/lZpsiSV15vV0vb6tr17/7AfOkEE0SDJBkOEMD8fsyHYwSBA4cgCH6m/KgP9+I4ShIezMs3nIU3Pduj45PAWfi1iuPknHPZTwXYni+tAeDHT7a99lknivnmnSvaD0NfTFN+P3UAv9bq1t1b1uk5z87uN6sdxXC2c2YbiOJcXuv7ND41M8/n+PW7DSfIg1a51t12h9NqdxjGTGBjwjzNbwOHogLAnr/SgtA8YLLO4IT/AF5xbdgdi8B51vUGaDqcy2bbLEgeiIDFMaPVteEZM1pILtWjyiC2j/t2b+9QXLWgePvcYigUBra14wUruyg4wgp6MV84TB/9tyPP7fi7Pb7Cj9+JfuIS54CIVQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="0 4tLRWd LC8UMCSPE"\n        title=""\n        src="/static/0*4tLRWd_LC8UMCSPE-894032ca52b2201a7a6314f8358965b7-c995b.png"\n        srcset="/static/0*4tLRWd_LC8UMCSPE-894032ca52b2201a7a6314f8358965b7-dd81b.png 158w,\n/static/0*4tLRWd_LC8UMCSPE-894032ca52b2201a7a6314f8358965b7-c995b.png 307w"\n        sizes="(max-width: 307px) 100vw, 307px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>✨Adopting Nuxt✨</h3>\n<p>My experience with <a href="https://nuxtjs.org/">Nuxt</a> has been significantly better than that with React. Right from the start the example applications available on <a href="https://github.com/nuxt">GitHub</a> have ‘just worked’, and have been simple enough for me to muddle through without further reading and still offer all of the features I needed. Somehow, it’s more intuitive than React ever was.</p>\n<p>Quite literally, I was able to find, download, install and have a working local development and production server working as a proof of concept with an Express-based API, webpack code-splitting, hot module reloading and everything else in under an hour. Given that I couldn’t achieve the equivalent thing in <em>two weeks</em> of development with React, I was hooked on Nuxt fairly quickly.</p>\n<p>Perhaps it’s because the community is much smaller, or perhaps Nuxt is ultimately less flexible than React, but it does seem that there’s one way, and one way only to solve a problem — and I’m happy with that. Nuxt has an example for every feature I’ve needed, and I don’t feel the need to challenge the approach or the architecture, because it works. It does seems to hide more of the technical details of the website away from me, and autogenerates core parts of the application, but that hasn’t been a problem — it means I can focus more on my application, and making my unique stuff work, and forget about everything else.</p>\n<p>Since then, I’ve completely replaced <a href="https://www.pokeproject.co.uk/">PokéProject</a> with a Nuxt based version, and I’m excited for what the future has in store.</p>\n<hr>\n<p><em>Originally published at</em> <a href="https://www.psyked.co.uk/from-static-html-to-react-to-nuxt/"><em>www.psyked.co.uk</em></a> <em>on April 10, 2017.</em></p>',frontmatter:{title:"PokéProject: from Static HTML, to React, to Nuxt.",date:"April 10, 2017",tags:["JavaScript","React","Nuxt","Pokemon"],url:"https://medium.com/@psyked/pok%C3%A9project-from-static-html-to-react-to-nuxt-b6fbe42bab18",image:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAAsSAAALEgHS3X78AAAAoElEQVQY02OIObMHFe1OOLsh/fyi3AvTC69MyLvWm39pUtb5OSnnVsSd2YammAGNH3dmZ8rZVdnnZ+de7K7YXbpwcnbR+aa8i5Mzzi9MPLuRgObYszuAluRcnJl3ssFvVqlPRmL8hryiKxMzzs9PPLuBkGaIzRdm55/rjt7a5bKsLXFPY9GVyennFiYQtBnu55wL0/LPd5Vc6iq4OBGXnwFxf7eiAb07tQAAAABJRU5ErkJggg==",aspectRatio:4.109589041095891,src:"/static/1*_ktZpY0rhoRFlnsM-7k8MA-166b718248f99f519c1c4c5f1b12e309-7a72d.png",srcSet:"/static/1*_ktZpY0rhoRFlnsM-7k8MA-166b718248f99f519c1c4c5f1b12e309-8baea.png 158w,\n/static/1*_ktZpY0rhoRFlnsM-7k8MA-166b718248f99f519c1c4c5f1b12e309-69705.png 315w,\n/static/1*_ktZpY0rhoRFlnsM-7k8MA-166b718248f99f519c1c4c5f1b12e309-7a72d.png 630w,\n/static/1*_ktZpY0rhoRFlnsM-7k8MA-166b718248f99f519c1c4c5f1b12e309-514af.png 945w,\n/static/1*_ktZpY0rhoRFlnsM-7k8MA-166b718248f99f519c1c4c5f1b12e309-5e778.png 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}},description:"This is the story of my development journey with PokéProject. Hopefully this isn’t the complete story, and there’s much more to be told…"}}},pathContext:{prev:{frontmatter:{path:"/blog/overcoming-writers-block/",tags:["Medium"],title:"Overcoming writer’s block",date:"2017-02-19T20:05:00.000Z",description:"I like writing. That’s not always been the case — it certainly wasn’t my forte back when I needed it at school and with my University…",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABzDdlZIP/xAAaEAEAAQUAAAAAAAAAAAAAAAABABAREiEy/9oACAEBAAEFAsSt4cu3/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGBAAAgMAAAAAAAAAAAAAAAAAARARITH/2gAIAQEABj8CwOBT/8QAHRAAAgICAwEAAAAAAAAAAAAAAREAITFRQWFxkf/aAAgBAQABPyEVu7ETKpbhGx9MoUJz3CNPTFIcT//aAAwDAQACAAMAAAAQ5C//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPxCK/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QGf/EAB0QAQEAAwACAwAAAAAAAAAAAAERACExQVFh0eH/2gAIAQEAAT8QBesgXz5uTtlMr2YF0r7TAWQEA9Xr9ZRTS/JQ/c0ap7Hrn//Z",aspectRatio:1.4943960149439601,src:"/static/1*KPvEX43rnvaf5dwgWv_9yQ-e6c8d8dac370cdcf51938c9567f20d93-f2ac0.jpeg",srcSet:"/static/1*KPvEX43rnvaf5dwgWv_9yQ-e6c8d8dac370cdcf51938c9567f20d93-567e3.jpeg 158w,\n/static/1*KPvEX43rnvaf5dwgWv_9yQ-e6c8d8dac370cdcf51938c9567f20d93-c3206.jpeg 315w,\n/static/1*KPvEX43rnvaf5dwgWv_9yQ-e6c8d8dac370cdcf51938c9567f20d93-f2ac0.jpeg 630w,\n/static/1*KPvEX43rnvaf5dwgWv_9yQ-e6c8d8dac370cdcf51938c9567f20d93-0c4a5.jpeg 945w,\n/static/1*KPvEX43rnvaf5dwgWv_9yQ-e6c8d8dac370cdcf51938c9567f20d93-4e530.jpeg 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}}}},next:{frontmatter:{path:"/blog/from-static-html-to-react-to-nuxt/",tags:["web-development","pokeproject","nuxt","react"],title:"PokéProject: from Static HTML, to React, to Nuxt.",date:"2017-04-10T08:11:00.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-pokeproject-from-static-html-to-react-to-nuxt-875a1a313081148c6d66.js.map