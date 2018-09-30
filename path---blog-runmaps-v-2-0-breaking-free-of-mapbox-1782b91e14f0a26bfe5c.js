webpackJsonp([0xeb3f83f7d211],{1428:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/runmaps-v2-0-breaking-free-of-mapbox-dbe3c3ca1a01/index.md absPath of file >>> MarkdownRemark",html:'<p>In my previous post, <a href="https://medium.com/@psyked/generating-run-maps-with-node-js-52738014d3dc">‘Generating Run Maps with Node.js’</a>, I talked through the winding path that eventually led me to a place where I’d hooked up data from my activities on Fitbit with data from the Mapbox APIs and created a scalable vector image representation of my activity. It’s been a few weeks since that last post, I’ve had the opportunity to develop this project further, and now I’m going to talk about the next significant change; <em>dropping Mapbox.</em></p>\n<h4>Why drop Mapbox?</h4>\n<p><a href="https://www.mapbox.com/">Mapbox</a> is pretty neat, but it’s an entire ecosystem of tools geared towards delivering custom styled maps, and I wasn’t really using it correctly. All I actually wanted was GeoJSON data representing an area, and I got that by unpacking their APIs and then stitching and re-rendering the content myself. It was a rough solution based on what I understood at the time, but when I started reviewing the end result it became apparent that something wasn’t right with the data I was receiving.</p>\n<p>Take a closer look at this image, and you’ll see a few problems — which I’ve outlined in red — that come with the approach of stitching together SVG tiles:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*XDK58wHmThVh24H1t35QNA-f4b8dc3b12937f23de6775d40d0198b8-56bef.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 54.166666666666664%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABq0lEQVQoz01S2XLbMAzU//9YnvrUTBOnbp3YSSzroijqIiV5g4VNjjWDAQSAi8WS2bZtWJYlWd/3GMcR/NZ1TXnG0zSl+Hq9ajzPs/5HnCwWvPfqQwhwziXgdED66KMRgL2sP57PYkNMxEld1ymo1plfQgLjxz6eoRGYnrksFmMjGV/v04dhwCQMvOvg8y+EOxMa2bMnDb2zznRNJjZZSRKRIYF5sLUWfWvQfx5VQ8pxuVzQNA2MMbpJBOMZBZzKC3xdYnsQN4J2AlDlZ5jDXgBa1HUtVqmvqpufhWnbtjcNCeI7i3D+RLAm6UOxCTjIaqYsYI8HWW9QhmRNMLKsigL16QNFWSrbLMhaVC80FbypsUk8y2rUKN7uLI3u4z9GyVPT4nTEy/NvfH0Lc2HY7F9vNTFd2QvldeixjIPqSLHjRU3TjN62MLI289S62u9w/PumGo7Ctnx9xtA7jGKZJoWN90E0WNPDjaa3LXUrqzq5bStsu/M3bJGjO71jPB1gfj2h2L2g3P1BRpq8eiuT8jxX2o9g8XHTc3ghmnEABzsnj18GmX9vqm8v8Q+8+VR6x5ZUigAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 XDK58wHmThVh24H1t35QNA"\n        title=""\n        src="/static/1*XDK58wHmThVh24H1t35QNA-f4b8dc3b12937f23de6775d40d0198b8-082ce.png"\n        srcset="/static/1*XDK58wHmThVh24H1t35QNA-f4b8dc3b12937f23de6775d40d0198b8-c7cb1.png 158w,\n/static/1*XDK58wHmThVh24H1t35QNA-f4b8dc3b12937f23de6775d40d0198b8-93041.png 315w,\n/static/1*XDK58wHmThVh24H1t35QNA-f4b8dc3b12937f23de6775d40d0198b8-082ce.png 630w,\n/static/1*XDK58wHmThVh24H1t35QNA-f4b8dc3b12937f23de6775d40d0198b8-c4006.png 945w,\n/static/1*XDK58wHmThVh24H1t35QNA-f4b8dc3b12937f23de6775d40d0198b8-56bef.png 1200w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Invalid / cropped area shapes from Mapbox API responses.</p>\n<p>Those horizontal and vertical lines are the hard edges of what should be large shapes on the map. In the Mapbox API responses they’ve been cropped and the shapes from adjacent tiles overlap, a behaviour that’s based around the slicing up of the map data into Vector Tiles. That’s a problem for me because I actually want the unadulterated shapes, and I want the ability to style those shapes with semi-transparent colours, which I can’t do that if the shapes are overlapping.</p>\n<h4>Alternative data sources 💡</h4>\n<p>Fortunately I’ve already been exploring alternative sources of mapping data (more on that later) and deduced that I could probably get all of the data that I need directly from <a href="https://www.openstreetmap.org/">OpenStreetMap</a> — they even have a public (no login!) way of fetching that data directly from their servers: the <a href="https://wiki.openstreetmap.org/wiki/Overpass_API">Overpass API.</a></p>\n<h4>Stepping stones 👟</h4>\n<p>My efforts bumbling through code so far have left me with the ability to render a map using prefabricated GeoJSON data (aka. the data I get back from the Mapbox API), with the knowledge that I can generate simple GeoJSON objects using GPS coordinates from Fitbit data, and with a strategy for rendering the whole lot as SVG objects in a browser using D3.js.</p>\n<h4>Cutting out Mapbox ✂️</h4>\n<p>The existing [Mapbox-powered] rendering process looks like this:</p>\n<ol>\n<li>Load route data from Fitbit</li>\n<li>Calculate the map centre point and bounds</li>\n<li>Pass the bounds to the Mapbox JS library and let it fetch the MVT response</li>\n<li>Unpack the MVT protobuff response and convert it to GeoJSON Tiles</li>\n<li>Use D3 to render each GeoJSON tile as an SVG object</li>\n<li>Use D3 to position each SVG tile correctly on-screen</li>\n<li>Generate a GeoJSON representation of the route data from Fitbit</li>\n<li>Use D3 to render the GeoJSON route over the top of the SVG tiles</li>\n</ol>\n<p>It works, but it’s a lot of back-and-forth between libraries and is more complex than I’d like. However, substituting Mapbox for the Overpass API gives me the following render process:</p>\n<ol>\n<li>Load route data from Fitbit</li>\n<li>Calculate the map centre point and bounds</li>\n<li>Pass the bounds to the Overpass API</li>\n<li>Convert the API response to GeoJSON using the osmtogeojson library</li>\n<li>Use D3 to render the single GeoJSON object as an SVG</li>\n<li>Generate a GeoJSON representation of the route data from Fitbit</li>\n<li>Use D3 to render the GeoJSON route over the top of the SVG tiles</li>\n</ol>\n<p>It’s arguably <em>one less</em> step than before, but the key gain here is that the GeoJSON response we get hasn’t been sliced up or cropped in any way, and there’s no tiles to worry about. Naturally there’s a lot that’s changed in the response data; Mapbox does a good job of curating its map information whereas the response from the Overpass API is a little more freeform, but the core details are still the same, which is all I need.</p>\n<h4>Working with The Overpass API</h4>\n<p>The <a href="https://wiki.openstreetmap.org/wiki/Overpass_API">Overpass API</a> allows queries to OpenStreetMap using Overpass QL, with an URL such as the one below, which takes bounding box coordinates that define a rectangular area and returns XML for all of the geography and amenities in the specified area.</p>\n<p><a href="https://api.openstreetmap.org/api/0.6/map?bbox=-0.6428667113485337,52.58258428865147,-0.4982212886514664,52.727229711348535">https://api.openstreetmap.org/api/0.6/map?bbox=-0.6428667113485337,52.58258428865147,-0.4982212886514664,52.727229711348535</a></p>\n<p>The output is an impressive 10Mb of XML data, so I’m not going to include it here, but it includes (a lot of) elements like this:</p>\n<way id="250040917" visible="true" version="3" changeset="49132008" timestamp="2017-05-31T10:58:44Z" user="brianboru" uid="9065">  \n  <nd ref="2565612416"/>  \n  <nd ref="2565612409"/>  \n  <nd ref="2565612404"/>  \n  <nd ref="2565612402"/>  \n  <nd ref="2565612400"/>  \n  <nd ref="2565612399"/>  \n  <nd ref="2565612397"/>  \n  <nd ref="2565612395"/>  \n  <nd ref="2565612394"/>  \n  <nd ref="2565612392"/>  \n  <nd ref="2565612391"/>  \n  <nd ref="2565612390"/>  \n  <nd ref="2565612388"/>  \n  <nd ref="4880073434"/>  \n  <tag k="highway" v="trunk_link"/>  \n  <tag k="highways_england:area" v="6"/>  \n  <tag k="oneway" v="yes"/>  \n  <tag k="operator" v="Highways England"/>  \n</way>\n<p>Of course, that’s not GeoJSON data, which is what I really want. Fortunately there’s already a Javascript module that makes things easy called <strong>osmtogeojson</strong> which I can integrate using the following code:</p>\n<p>import osmtogeojson from "osmtogeojson";<br>\nimport axios from "axios";</p>\n<p>const data = await axios<br>\n.get(`<a href="https://api.openstreetmap.org/api/0.6/map?bbox=$%7Bx0%7D,$%7By0%7D,$%7Bx1%7D,$%7By1%7D%5C%60">https://api.openstreetmap.org/api/0.6/map?bbox=${x0},${y0},${x1},${y1}`</a>)<br>\n.then(({ request: { <em>responseXML</em> } }) => responseXML);</p>\n<p>const osmgeojsondata = osmtogeojson(data);</p>\n<p>What does the combined output look like? Much the same, fortunately, except there’s no cropping or tiling mess to worry about. Hurrah! 🎉</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*TB_SVvse2S-qdgFHkrsDxA-c4fe29e81d3367d9d8cf20d6626cc61a-74a12.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAABDUlEQVQoz1XRTXKDMAwFYO5/NRbZcgIWgSRACEkKLf3wm2amWnhkSe/HcvVT4vV6PR6P+/3+fD73fVfJ+V1Csq7rtm26WwlFA5XqXkIJRdrv91tb66uEoopkHMcgw17JVJVcJMSnaVqWZZ5nJzu32+16vcpRy8P7DyzihMhYou97o5JhGNBhmUoYwBKxKm92iX/E5/MZxjRxRiRkL5cLlq7ruECqRazKVijjA5bj1nNFBwbTNE1d123bouCIPlIDFUBWTfOz1blEWOicTqeAYz5vPJSzp88O57/AraKehXkIFwSimfnDNnC2F/95ZE4s2ZYEki9X5u3lAOczs7bk+VVImh4MSSpfla4ThesvkoVCg8Ed6VMAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 TB SVvse2S qdgFHkrsDxA"\n        title=""\n        src="/static/1*TB_SVvse2S-qdgFHkrsDxA-c4fe29e81d3367d9d8cf20d6626cc61a-082ce.png"\n        srcset="/static/1*TB_SVvse2S-qdgFHkrsDxA-c4fe29e81d3367d9d8cf20d6626cc61a-c7cb1.png 158w,\n/static/1*TB_SVvse2S-qdgFHkrsDxA-c4fe29e81d3367d9d8cf20d6626cc61a-93041.png 315w,\n/static/1*TB_SVvse2S-qdgFHkrsDxA-c4fe29e81d3367d9d8cf20d6626cc61a-082ce.png 630w,\n/static/1*TB_SVvse2S-qdgFHkrsDxA-c4fe29e81d3367d9d8cf20d6626cc61a-c4006.png 945w,\n/static/1*TB_SVvse2S-qdgFHkrsDxA-c4fe29e81d3367d9d8cf20d6626cc61a-85e68.png 1260w,\n/static/1*TB_SVvse2S-qdgFHkrsDxA-c4fe29e81d3367d9d8cf20d6626cc61a-38b38.png 1890w,\n/static/1*TB_SVvse2S-qdgFHkrsDxA-c4fe29e81d3367d9d8cf20d6626cc61a-74a12.png 2000w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Finally, much improved mapping data, without any cropping weirdness!</p>\n<hr>\n<p>Next up, I’m going to take these SVGs and apply some snazzy styling to make the output look 👌.</p>',frontmatter:{title:"RunMaps v2.0: Breaking free of Mapbox",date:"May 26, 2018",tags:["Mapbox","Openstreetmap","Side Project","D3js","Geojson"],url:"https://medium.com/@psyked/runmaps-v2-0-breaking-free-of-mapbox-dbe3c3ca1a01",image:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABq0lEQVQoz01S2XLbMAzU//9YnvrUTBOnbp3YSSzroijqIiV5g4VNjjWDAQSAi8WS2bZtWJYlWd/3GMcR/NZ1TXnG0zSl+Hq9ajzPs/5HnCwWvPfqQwhwziXgdED66KMRgL2sP57PYkNMxEld1ymo1plfQgLjxz6eoRGYnrksFmMjGV/v04dhwCQMvOvg8y+EOxMa2bMnDb2zznRNJjZZSRKRIYF5sLUWfWvQfx5VQ8pxuVzQNA2MMbpJBOMZBZzKC3xdYnsQN4J2AlDlZ5jDXgBa1HUtVqmvqpufhWnbtjcNCeI7i3D+RLAm6UOxCTjIaqYsYI8HWW9QhmRNMLKsigL16QNFWSrbLMhaVC80FbypsUk8y2rUKN7uLI3u4z9GyVPT4nTEy/NvfH0Lc2HY7F9vNTFd2QvldeixjIPqSLHjRU3TjN62MLI289S62u9w/PumGo7Ctnx9xtA7jGKZJoWN90E0WNPDjaa3LXUrqzq5bStsu/M3bJGjO71jPB1gfj2h2L2g3P1BRpq8eiuT8jxX2o9g8XHTc3ghmnEABzsnj18GmX9vqm8v8Q+8+VR6x5ZUigAAAABJRU5ErkJggg==",aspectRatio:1.8461538461538463,src:"/static/1*XDK58wHmThVh24H1t35QNA-f4b8dc3b12937f23de6775d40d0198b8-7a72d.png",srcSet:"/static/1*XDK58wHmThVh24H1t35QNA-f4b8dc3b12937f23de6775d40d0198b8-8baea.png 158w,\n/static/1*XDK58wHmThVh24H1t35QNA-f4b8dc3b12937f23de6775d40d0198b8-69705.png 315w,\n/static/1*XDK58wHmThVh24H1t35QNA-f4b8dc3b12937f23de6775d40d0198b8-7a72d.png 630w,\n/static/1*XDK58wHmThVh24H1t35QNA-f4b8dc3b12937f23de6775d40d0198b8-514af.png 945w,\n/static/1*XDK58wHmThVh24H1t35QNA-f4b8dc3b12937f23de6775d40d0198b8-5e778.png 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}},description:"Replacing Mapbox API Vector Tiles with the OpenStreetMap Overpass API, for fun, profit and better output rendering."}}},pathContext:{prev:{frontmatter:{path:"/blog/culture-of-fear/",tags:["Medium","Software Development","Project Management","Software Engineering","Thought Leadership","Strategy"],title:"Culture of fear",date:"2018-03-29T13:19:47.428Z",description:"Yes, it’s a project from Hell, but who’s to blame?",image:{childImageSharp:{sizes:{base64:"data:image/png;base64,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",aspectRatio:.8333333333333334,src:"/static/1*q9eE6JDx90bujWY6Da8lhQ-fc29a66a020b167b96aba8deb0531dcc-7a72d.png",srcSet:"/static/1*q9eE6JDx90bujWY6Da8lhQ-fc29a66a020b167b96aba8deb0531dcc-8baea.png 158w,\n/static/1*q9eE6JDx90bujWY6Da8lhQ-fc29a66a020b167b96aba8deb0531dcc-69705.png 315w,\n/static/1*q9eE6JDx90bujWY6Da8lhQ-fc29a66a020b167b96aba8deb0531dcc-7a72d.png 630w,\n/static/1*q9eE6JDx90bujWY6Da8lhQ-fc29a66a020b167b96aba8deb0531dcc-514af.png 945w,\n/static/1*q9eE6JDx90bujWY6Da8lhQ-fc29a66a020b167b96aba8deb0531dcc-5e778.png 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}}}},next:{frontmatter:{path:"/blog/runmaps-3-colour-schemes-and-labels/",tags:["Mapping","Side Project","D3js","SVG"],title:"RunMaps 3: Colour Schemes and Labels",date:"2018-05-26T14:22:30.597Z",description:"Now it's time to pick up where we left the original development; improving the visuals by adding place labels and map markers.",image:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAABiUlEQVQozy1S227jIBDN///aSqtWWjVNm9Y25s4MMwND1MfFTiUkLuJwblxUqw4CdCl+kUClNAapUu91DD6G0jypuhv/4sK79KqKrcMEXg6w1segn58Osvp0a72AuN6RNeT2ldqnh6vBvzu+5Potx6N0EtTLnObtrjgZeERGw+F7h1dsjrrLdK+0I5gKe6NE4EhK79Bb+WWeyKlzLqZIrakl39BLtg1iZ1BByC4Fk/y2r7eU15C3UvbJ+iv7BNNzTXkT8IKBi5Nkk1uj2+zyGe1SMYS0RHbYqOsJfjxYx8ygPMmxmxTfpIRadgaLbru9/vH3Kyfv5gbvlj5QMrVTds62oO16BKhnyJk/Md4lOS5bDvdl/chui+gymkjX2s0YMJ6eRUAaHJkNnsFANn1glNuZZTLwT7QA20jrtAbNorgj7el59jllj1FPzcQCs21WKm1njZ6NJyuSA65LfEt1Ly1hS7PI2fbl/AzPqIh7pQYgngRRMLHP7Ke3SoU5dC3YQpRchBas17z+B99OKm0F29kdAAAAAElFTkSuQmCC",aspectRatio:2,src:"/static/1*w4ALp74pUYzMQl3Nt8p3aA-7deb149afe31e8b997ed26eb3755d633-7a72d.png",srcSet:"/static/1*w4ALp74pUYzMQl3Nt8p3aA-7deb149afe31e8b997ed26eb3755d633-8baea.png 158w,\n/static/1*w4ALp74pUYzMQl3Nt8p3aA-7deb149afe31e8b997ed26eb3755d633-69705.png 315w,\n/static/1*w4ALp74pUYzMQl3Nt8p3aA-7deb149afe31e8b997ed26eb3755d633-7a72d.png 630w,\n/static/1*w4ALp74pUYzMQl3Nt8p3aA-7deb149afe31e8b997ed26eb3755d633-514af.png 945w,\n/static/1*w4ALp74pUYzMQl3Nt8p3aA-7deb149afe31e8b997ed26eb3755d633-5e778.png 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}}}}}}}});
//# sourceMappingURL=path---blog-runmaps-v-2-0-breaking-free-of-mapbox-1782b91e14f0a26bfe5c.js.map