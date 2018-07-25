webpackJsonp([21718768402815],{1300:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/pokeproject-adventures-with-lego-r-bricks/index.md absPath of file >>> MarkdownRemark",html:'<p>Using JavaScript and HTML5 canvas elements to convert images into 2 dimensional LEGO brick plans.</p>\n<h3>Part 1: From image sprite to pixel art.</h3>\n<p>What’s the difference between the image sprites included in the original Game Boy games and Retro Pixel art? If you ask me, it’s just a matter of scale — scale the images up, and suddenly it’s art.</p>\n<p><img src="/content/images/2017/09/1-ahfgymTGsLrv5DvRElUX4A.png" alt="Art, for reference.">\n<em>Art, for reference.</em></p>\n<p>But simply printing this ‘pixel art’ out at a large size isn’t really impressive. After all, why bother? — you could just as easily go with a higher resolution version of the same image. You could print a version of the pixel art on something the size of a postage stamp, but just as easily print it on a sheet of paper, or on a large poster — there’s no constraints on standard printing, after all. What’s more visually impressive is mixing media. If you made your pixel art out of lego for example; well, that’s more interesting.</p>\n<h3>💡 From this idea, PokéProject: LEGO Edition was born.</h3>\n<p>LEGO bricks come in a variety of colours and with a fairly rigid set of dimensions. The smallest of these is the 1x1 brick, approximately 8mm square in size. If we could recreate a 32x32 pixel sprite that’d give us something just over 25cm square in size, and a 96x96 sprite would be just under 77cm square, which sounds like it could make some impressive pieces for wall art.</p>\n<p>So, how to make this a reality?</p>\n<h3>Data sources and harvesting</h3>\n<p>The first thing I needed to do was discover what LEGO bricks were available, and in what colours. Information for the available colours is readily available from <a href="https://bricks.stackexchange.com/questions/75/how-many-different-colours-of-lego-bricks-are-there">a variety of sources,</a> including RGB and Hex colour mappings, so it was easy enough to grab that data.</p>\n<p>To find out what bricks were actually available to purchase (given that a lot of bricks are not available to purchase individually and on demand) I had to visit the <a href="https://shop.lego.com/en-GB/Pick-a-Brick">official LEGO Pick-A-Brick service,</a> and essentially scrape the entirety of their search results to collate a data store of the available bricks for use in my calculations.</p>\n<p>I’ve made <a href="https://github.com/psyked/LEGO-Bricks-Data">the results of my data harvesting efforts available on GitHub.</a></p>\n<h3>Palette mapping</h3>\n<p>The original Game Boy Colour could support over 32,000 colours [<a href="https://en.wikipedia.org/wiki/List_of_video_game_console_palettes#Game_Boy_Color">source</a>], but LEGO Bricks only come in 40 or so [<a href="http://lego.wikia.com/wiki/Colour_Palette">source</a>]. The first challenge was to map those two palettes together and visualise the outcome.</p>\n<p><img src="/content/images/2017/10/1-m0a0IO5JS4BninOLPPt97A.jpeg" alt="Directly mapping colours to colours wasn’t especially hard to implement — and the effects weren’t too bad either."></p>\n<p><em>Directly mapping colours to colours wasn’t especially hard to implement — and the effects weren’t too bad either.</em></p>\n<p>For the first pass at this colour mapping, I used what was essentially a <a href="https://stackoverflow.com/a/13587077/377961">Euclidean distance</a> calculation, treating the colour of each pixel in the source image as a number and finding the nearest match in the more limited lego colours palette.</p>\n<h3>Introducing… perceptual Colour Matching theory</h3>\n<p>After a little testing, it emerged that the simple colour matches being used weren’t quite up to scratch. As an example, the lightest of colours — which were quite clearly a grey, green or blue — would be matched with the light pink colour, because that’s the closest match from a programmatic point of view, or important details would get lost when there’s not a lot of contrast.</p>\n<p><img src="/content/images/2017/10/1-IHN_O3KWkc8rDCfBRVPSzg.png" alt="DeltaE colour matching on the left, Euclidean distance in the middle, source sprite on the right.">\n<em>DeltaE colour matching on the left, Euclidean distance in the middle, source sprite on the right.</em></p>\n<p>Fortunately lots of smart people have already figured this out and solved it several times over, and come up with standard formulas for calculating colour matches based on human perception. With the help of <a href="https://stackoverflow.com/a/29247003/377961">StackOverflow</a> and the <a href="http://zschuessler.github.io/DeltaE/">DeltaE library</a> I was able to make some great improvements in the colour matching, enabling a much more nuanced palette map.</p>\n<p><img src="/content/images/2017/10/1-VEuetcvPBJ0MeubZVG8mpg.png" alt="DeltaE (the 1976 version) colour matching isn’t half bad.">\n<em>DeltaE (the 1976 version) colour matching isn’t half bad.</em></p>\n<p>There are actually three versions of the DeltaE / LAB perceptual colour matching calculations, so with a little experimentation I was able to try them out until I found one that seemed to work well across the board.</p>\n<h3>Expanding the data set</h3>\n<p>It was at this point in time I stumbled across an interesting piece of information — not all of the available LEGO bricks are actually available through Pick-A-Brick, but many of them <em>are</em> available through the <a href="https://www.lego.com/en-gb/service/replacementparts/sale">replacement parts service,</a> providing you know the part id of the brick itself.</p>\n<p>This data set was a little more difficult to put together, but it’s essentially the same principle — scraping the official LEGO website and putting it into a JSON data set for my source code to use.</p>\n<p>The effect of this that it massively expands the available brick colours and dimensions, which in turn greatly improves the quality of the colour matching in our models.</p>\n<p><img src="/content/images/2017/10/1-NRj28widDkpcI5InJLhXJA.png" alt="LEGO Brick colour matching, using the available bricks from the replacement parts service.">\n<em>LEGO Brick colour matching, using the available bricks from the replacement parts service.</em></p>\n<p>Finally happy with the outcome of mapping sprite pixel colours to LEGO brick colours, I decided to tackle the next challenge — making efficient use of LEGO bricks.</p>\n<hr>\n<h2>Making optimal use of the available bricks.</h2>\n<p>By this point I’ve already mapped my colour palette of my source image to the available LEGO brick colours as described in my previous post, and now I want to move beyond simple colour trickery and onto making this idea a physical reality.</p>\n<h3>Optimal Brick calculations 💰</h3>\n<p>Looking into the feasibility of actually purchasing LEGO bricks to make these sprites, it turns out it’s quite expensive. The bricks themselves average around £0.05 each, which puts the cost for a 64x64 pixel image at £204.80, which is <em>extreme.</em></p>\n<p>However, there’s economies to be made. If you can use fewer larger bricks to produce the same image, the effective cost-per-pixel can drop significantly, to around £0.01 per pixel, which saves quite a significant amount of cash.</p>\n<p><img src="/content/images/2017/10/1-PQTitbDaP87fIPGqTqcq8A.png" alt="Needless to say, I put a fair amount of effort into optimising expenditure.">\n<em>Needless to say, I put a fair amount of effort into optimising expenditure.</em></p>\n<h3>It’s just not LEGO</h3>\n<p>In addition to the raw cost issue, it doesn’t really feel like a <em>real</em> project if everything is made of 1x1 bricks. That’s the kind of boring thing that an old style dot-matrix printer would output, and it doesn’t feel all that creative.</p>\n<p>As it transpires, this is exactly what <a href="http://nerdist.com/londons-lego-store-lets-you-buy-a-lego-mosaic-of-your-face/">a dedicated booth in the London LEGO shop</a> does, but I still think it’s a cop-out and I can do better.</p>\n<p><img src="/content/images/2017/10/1-L3Wr47nE4EHdH1ufkMhLcg.png"></p>\n<p><img src="/content/images/2017/10/1-Eg0GiHYzAPp18q6v1ty4gg.png" alt="Who really wants to place 2,304 individual LEGO bricks, anyway?">\n<em>Who really wants to place 2,304 individual LEGO bricks, anyway?</em></p>\n<hr>\n<h3>In search of prior work.</h3>\n<p>I am a lazy programmer. I would much prefer to reuse someone else’s code than spend ages trying to figure it out myself, and to this end I Googled an endless variety of phrases looking for some kind of prior work around the optimal use of LEGO bricks in a two-dimensional plane, only to come up with absolutely nothing.</p>\n<p>I <em>did</em> read some fascinating articles about such things as <a href="https://d3plus.org/blog/behind-the-scenes/2014/07/08/largest-rect/">“An approximation algorithm for finding the largest rectangle inside a non-convex polygon”</a> and a helluva lot of posts about everything from <a href="https://en.wikipedia.org/wiki/Packing_problems">Bin Packing</a> to <a href="https://en.wikipedia.org/wiki/JPEG">JPEG compression</a> on StackOverflow and Wikipedia, but ultimately there’s nothing that I could find which was appropriate.</p>\n<blockquote>\n<p>It would appear that the optimal placement of an unlimited combination of arbitrarily-sized shapes within randomly shaped containers is not a high enough priority for the Computer Science community to have already solved effectively, much to my dismay.</p>\n</blockquote>\n<p>I was going to have to actually write the logic myself. 🤔</p>\n<hr>\n<h3>Writing it myself.</h3>\n<p>Changing the colours of an image with JavaScript and HTML5 canvas elements is fairly easy — you pull in the image data as an Array, and you loop through it to get the R,G,B,A values for each pixel, which you can modify on the fly. Simple enough, but it lacks understanding of pixel coordinates and any sense of neighbouring pixels.</p>\n<p>My solution was to copy the image data into a new data structure which could easily reference its neighbours, and then for each pixel iterate through the available LEGO bricks — first to find the nearest colour match, and then to find the largest possible brick which could fit anchored at that point.</p>\n<p>Given a few passes the outcome is quite acceptable.</p>\n<p><img src="/content/images/2017/10/1-khfGNAUXONDNEk-K-2-InQ.png" alt="1x1 Bricks">\n<img src="/content/images/2017/10/1-Epnx95QXZr9PHyGC55A8oQ.png" alt="Fairly-optimal various sized bricks">\n<em>1x1 Bricks versus fairly-optimal various-sized Bricks</em></p>\n<p>It’s not the most optimal solution that might be technically possible, but it’s better than doing nothing at all to optimise the output.</p>\n<p>The biggest flaw is that it effectively scans through the image, top to bottom, left to right, to try and place bricks in an optimal fashion. Logically there could be better starting points for some shapes, ones which ultimately use less bricks to complete, but such an approach requires an infeasible number of passes to optimise, and that isn’t something I even want to try.</p>\n<p>So what’s next? Turns out there’s one more issue… a flaw in my logic.</p>\n<h2>From a theory to the real world.</h2>\n<p>PokéProject: LEGO Edition started with colour mapping and developed into a calculation of optimal brick placement, and now I’m planning to put some money on the line and actually purchase some bricks and make this project into a tangible reality.</p>\n<h3>Realistic Brick calculations</h3>\n<p>So what’s next? Turns out there’s one more issue… a flaw in my logic.</p>\n<p>I had incorrectly assumed that all of the LEGO brick colours I’d grabbed from the internet were available as 1x1 bricks, and my ‘algorithm’ was based around that assumption. When I actually went to go and purchase those bricks… then I had a problem. And for some sprites, it was quite a problem.</p>\n<p>I’ve highlighted the problematic pixels in these images:</p>\n<p><img src="/content/images/2017/10/1-rU7_XZWxTWMKPwGjNcPFJg.png" alt="Highlighting the invalid / unavailable pixels in Magenta"><img src="/content/images/2017/10/1-_Ca4g3bvmBZYkOfLDjsUdw.png" alt="Highlighting the invalid / unavailable pixels in Magenta"><img src="/content/images/2017/10/1-EwrUQTt0cCVQurrcolcHLA.png" alt="Highlighting the invalid / unavailable pixels in Magenta">\n<em>Highlighting the invalid / unavailable pixels in Magenta</em></p>\n<p>So, how best to deal with this issue?</p>\n<p>I’m loathe to simply remove those pixel colours from the pool — I like what I’ve achieved with the colour matching, and besides we only have 41 LEGO colours to play with as it is — don’t want to reduce that pool any further.</p>\n<p>My solution was to take those invalid bricks and find the next best fitting brick colour, repeatedly updating and looping through the image data and recalculating a next-best colour match for each pixel of the sprite until I had an acceptable match.</p>\n<p><img src="/content/images/2017/10/1-JiEovDUZyrhOyrc8EJAH5g.png" alt="The same sprites with next-best colour matching for invalid pixels"><img src="/content/images/2017/10/1-G-RzM3iSz_Ne5WWRLYMFrA.png" alt="The same sprites with next-best colour matching for invalid pixels">\n<img src="/content/images/2017/10/1-EwrUQTt0cCVQurrcolcHLA-1.png" alt="The same sprites with next-best colour matching for invalid pixels">\n<em>The same sprites with next-best colour matching for invalid pixels</em></p>\n<p>Naturally, I went through quite a bit of trial and error to get to this stage — I tried selecting average pixel colours from neighbours, but that generally lost details, and I tried some complicated contrast-based comparisons to bleed similar colours into neighbouring invalid pixels, but that didn’t work well either. The simplest solution was the best — calculating a prioritised list of matching colours for each brick, and regressing through that list whenever the bricks we wanted didn’t actually exist.</p>\n<hr>\n<h3>Making the jump from theoretical to physical</h3>\n<p><em>Finally,</em> I have a working sprite-to-lego-brick conversion tool at my disposal. It calculates nearest matching bricks, does some optimisation, and spits out a sensible shopping list of items to purchase.</p>\n<p>Placing my order with the online LEGO store was (unfortunately) a fairly laborious process, because there doesn’t seem to be a nice bulk ordering system, but after about half an hour of manual entry I managed to get every individual brick in the basket. £37.69 paid to the LEGO store online and in the next 7–10 working days, the raw materials for my new creation should be with me.</p>\n<p>My LEGO Pokemon sprite tool is online, if you’d like to create a pattern and see the list of Bricks for it yourself: <a href="https://www.pokeproject.co.uk/lego/">https://www.pokeproject.co.uk/lego/</a></p>\n<hr>\n<h3>Beyond Pokémon 🔮</h3>\n<p>The exciting opportunity for this project now is that I have the start of a fairly generic image-to-LEGO pattern generator, which I might evolve into a proper standalone project over the next few months. After all, wouldn’t it be fun to turn more Retro games artwork into LEGO patterns? or webcam images, or profile photos or works of art? So many possibilities!</p>\n<hr>',frontmatter:{title:"PokéProject: Adventures with LEGO® Bricks",date:"October 05, 2017",tags:["pokeproject","nuxt","lego"],url:null}}},pathContext:{prev:{frontmatter:{path:"/blog/pokeproject-dev-diary-day-four-25aed272eb17/",tags:null,title:"PokéProject Dev Diary: Day Four",image:"https://cdn-images-1.medium.com/max/1200/1*ar_BjfWyVqeI7iWpilFueQ.png",date:"2016-09-19T19:16:16.296Z"}},next:{frontmatter:{path:"/blog/pokeproject-adventures-with-lego-bricks-cd9401091239/",tags:null,title:"PokéProject: Adventures with LEGO Bricks",image:"https://cdn-images-1.medium.com/max/1200/1*khfGNAUXONDNEk-K-2-InQ.png",date:"2017-06-07T06:48:12.747Z"}}}}}});
//# sourceMappingURL=path---blog-pokeproject-adventures-with-lego-r-bricks-960e672f74ab953cf677.js.map