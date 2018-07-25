webpackJsonp([0x656ab5906700],{1338:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/runmaps-v2-0-breaking-free-of-mapbox-dbe3c3ca1a01/index.md absPath of file >>> MarkdownRemark",html:'<h1>RunMaps v2.0: Breaking free of Mapbox</h1>\n<p>In my previous post, <a href="https://medium.com/@psyked/generating-run-maps-with-node-js-52738014d3dc">‘Generating Run Maps with Node.js’</a>, I talked through the winding path that eventually led me to a place where I’d hooked up data from my activities on Fitbit with data from the Mapbox APIs and created a scalable vector image representation of my activity. It’s been a few weeks since that last post, I’ve had the opportunity to develop this project further, and now I’m going to talk about the next significant change; <em>dropping Mapbox.</em></p>\n<h4>Why drop Mapbox?</h4>\n<p><a href="https://www.mapbox.com/">Mapbox</a> is pretty neat, but it’s an entire ecosystem of tools geared towards delivering custom styled maps, and I wasn’t really using it correctly. All I actually wanted was GeoJSON data representing an area, and I got that by unpacking their APIs and then stitching and re-rendering the content myself. It was a rough solution based on what I understood at the time, but when I started reviewing the end result it became apparent that something wasn’t right with the data I was receiving.</p>\n<p>Take a closer look at this image, and you’ll see a few problems — which I’ve outlined in red — that come with the approach of stitching together SVG tiles:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*XDK58wHmThVh24H1t35QNA-9b1deec526a6895dc14b6dc9fe7272a3-74a12.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 54.199999999999996%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABtUlEQVQoz1VS23KdMAz0//9ZnvqStmmStknOBXy4GIzNHW+0PphJmNHYyNJqV5Latg3LshzmnEPf9+C3ruvh530YhuPOb57naPQlHBVCiJdpmuLJAIImYPoJsG1hP7dv5ziO3/IVnbRUKRWw1sJ7H99WMtiZJXYEZA6BElP6VHpMgQSkMaAXwGGSpLrCVGrM6x2ErCg/qfnKWkWZErgGStqOXhCU1RsyLTScztCPEzr511qjrmu0bRstgTFHLWQiCVNdIrDSDsjqDLDCoPx4gzm9R3AClWUZz6Io4jmKCmNMBFYb+2dbzNkZS2vu/dmbLYjwIq29XmCzS7y7rkMjrAhUC0h5u6G+nFBVFTp5U7GZAkKGi6lEOo4eRSlcD3nrrmeRfPffTh94enzENcvRSH/rv8+yEQMGeWcPwySgq3dYex8lp4lxuqP00TUGzU3fd1BYF/9ekL2+RIbOiPQ/v9BzzVwXFJsq+xZBl32R09RoHIz3PazIsRLbSaLVOTop4M7vGMTMjwfop5+hfP4NJbsWnKyHAIc8z6Pcr2CUSB+XnMU5CK4KC7NnXgbV/H8N7K2sWfgEsCdVG0lEaN4AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 XDK58wHmThVh24H1t35QNA"\n        title=""\n        src="/portfolio-2018/static/1*XDK58wHmThVh24H1t35QNA-9b1deec526a6895dc14b6dc9fe7272a3-082ce.png"\n        srcset="/portfolio-2018/static/1*XDK58wHmThVh24H1t35QNA-9b1deec526a6895dc14b6dc9fe7272a3-c7cb1.png 158w,\n/portfolio-2018/static/1*XDK58wHmThVh24H1t35QNA-9b1deec526a6895dc14b6dc9fe7272a3-93041.png 315w,\n/portfolio-2018/static/1*XDK58wHmThVh24H1t35QNA-9b1deec526a6895dc14b6dc9fe7272a3-082ce.png 630w,\n/portfolio-2018/static/1*XDK58wHmThVh24H1t35QNA-9b1deec526a6895dc14b6dc9fe7272a3-c4006.png 945w,\n/portfolio-2018/static/1*XDK58wHmThVh24H1t35QNA-9b1deec526a6895dc14b6dc9fe7272a3-85e68.png 1260w,\n/portfolio-2018/static/1*XDK58wHmThVh24H1t35QNA-9b1deec526a6895dc14b6dc9fe7272a3-38b38.png 1890w,\n/portfolio-2018/static/1*XDK58wHmThVh24H1t35QNA-9b1deec526a6895dc14b6dc9fe7272a3-74a12.png 2000w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Invalid / cropped area shapes from Mapbox API responses.</p>\n<p>Those horizontal and vertical lines are the hard edges of what should be large shapes on the map. In the Mapbox API responses they’ve been cropped and the shapes from adjacent tiles overlap, a behaviour that’s based around the slicing up of the map data into Vector Tiles. That’s a problem for me because I actually want the unadulterated shapes, and I want the ability to style those shapes with semi-transparent colours, which I can’t do that if the shapes are overlapping.</p>\n<h4>Alternative data sources 💡</h4>\n<p>Fortunately I’ve already been exploring alternative sources of mapping data (more on that later) and deduced that I could probably get all of the data that I need directly from <a href="https://www.openstreetmap.org/">OpenStreetMap</a> — they even have a public (no login!) way of fetching that data directly from their servers: the <a href="https://wiki.openstreetmap.org/wiki/Overpass_API">Overpass API.</a></p>\n<h4>Stepping stones 👟</h4>\n<p>My efforts bumbling through code so far have left me with the ability to render a map using prefabricated GeoJSON data (aka. the data I get back from the Mapbox API), with the knowledge that I can generate simple GeoJSON objects using GPS coordinates from Fitbit data, and with a strategy for rendering the whole lot as SVG objects in a browser using D3.js.</p>\n<h4>Cutting out Mapbox ✂️</h4>\n<p>The existing [Mapbox-powered] rendering process looks like this:</p>\n<ol>\n<li>Load route data from Fitbit</li>\n<li>Calculate the map centre point and bounds</li>\n<li>Pass the bounds to the Mapbox JS library and let it fetch the MVT response</li>\n<li>Unpack the MVT protobuff response and convert it to GeoJSON Tiles</li>\n<li>Use D3 to render each GeoJSON tile as an SVG object</li>\n<li>Use D3 to position each SVG tile correctly on-screen</li>\n<li>Generate a GeoJSON representation of the route data from Fitbit</li>\n<li>Use D3 to render the GeoJSON route over the top of the SVG tiles</li>\n</ol>\n<p>It works, but it’s a lot of back-and-forth between libraries and is more complex than I’d like. However, substituting Mapbox for the Overpass API gives me the following render process:</p>\n<ol>\n<li>Load route data from Fitbit</li>\n<li>Calculate the map centre point and bounds</li>\n<li>Pass the bounds to the Overpass API</li>\n<li>Convert the API response to GeoJSON using the osmtogeojson library</li>\n<li>Use D3 to render the single GeoJSON object as an SVG</li>\n<li>Generate a GeoJSON representation of the route data from Fitbit</li>\n<li>Use D3 to render the GeoJSON route over the top of the SVG tiles</li>\n</ol>\n<p>It’s arguably <em>one less</em> step than before, but the key gain here is that the GeoJSON response we get hasn’t been sliced up or cropped in any way, and there’s no tiles to worry about. Naturally there’s a lot that’s changed in the response data; Mapbox does a good job of curating its map information whereas the response from the Overpass API is a little more freeform, but the core details are still the same, which is all I need.</p>\n<h4>Working with The Overpass API</h4>\n<p>The <a href="https://wiki.openstreetmap.org/wiki/Overpass_API">Overpass API</a> allows queries to OpenStreetMap using Overpass QL, with an URL such as the one below, which takes bounding box coordinates that define a rectangular area and returns XML for all of the geography and amenities in the specified area.</p>\n<p><a href="https://api.openstreetmap.org/api/0.6/map?bbox=-0.6428667113485337,52.58258428865147,-0.4982212886514664,52.727229711348535">https://api.openstreetmap.org/api/0.6/map?bbox=-0.6428667113485337,52.58258428865147,-0.4982212886514664,52.727229711348535</a></p>\n<p>The output is an impressive 10Mb of XML data, so I’m not going to include it here, but it includes (a lot of) elements like this:</p>\n<way id="250040917" visible="true" version="3" changeset="49132008" timestamp="2017-05-31T10:58:44Z" user="brianboru" uid="9065">  \n  <nd ref="2565612416"/>  \n  <nd ref="2565612409"/>  \n  <nd ref="2565612404"/>  \n  <nd ref="2565612402"/>  \n  <nd ref="2565612400"/>  \n  <nd ref="2565612399"/>  \n  <nd ref="2565612397"/>  \n  <nd ref="2565612395"/>  \n  <nd ref="2565612394"/>  \n  <nd ref="2565612392"/>  \n  <nd ref="2565612391"/>  \n  <nd ref="2565612390"/>  \n  <nd ref="2565612388"/>  \n  <nd ref="4880073434"/>  \n  <tag k="highway" v="trunk_link"/>  \n  <tag k="highways_england:area" v="6"/>  \n  <tag k="oneway" v="yes"/>  \n  <tag k="operator" v="Highways England"/>  \n</way>\n<p>Of course, that’s not GeoJSON data, which is what I really want. Fortunately there’s already a Javascript module that makes things easy called <strong>osmtogeojson</strong> which I can integrate using the following code:</p>\n<p>import osmtogeojson from "osmtogeojson";<br>\nimport axios from "axios";</p>\n<p>const data = await axios<br>\n.get(`<a href="https://api.openstreetmap.org/api/0.6/map?bbox=$%7Bx0%7D,$%7By0%7D,$%7Bx1%7D,$%7By1%7D%5C%60">https://api.openstreetmap.org/api/0.6/map?bbox=${x0},${y0},${x1},${y1}`</a>)<br>\n.then(({ request: { <em>responseXML</em> } }) => responseXML);</p>\n<p>const osmgeojsondata = osmtogeojson(data);</p>\n<p>What does the combined output look like? Much the same, fortunately, except there’s no cropping or tiling mess to worry about. Hurrah! 🎉</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*TB_SVvse2S-qdgFHkrsDxA-c4fe29e81d3367d9d8cf20d6626cc61a-74a12.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAABDUlEQVQoz1XRTXKDMAwFYO5/NRbZcgIWgSRACEkKLf3wm2amWnhkSe/HcvVT4vV6PR6P+/3+fD73fVfJ+V1Csq7rtm26WwlFA5XqXkIJRdrv91tb66uEoopkHMcgw17JVJVcJMSnaVqWZZ5nJzu32+16vcpRy8P7DyzihMhYou97o5JhGNBhmUoYwBKxKm92iX/E5/MZxjRxRiRkL5cLlq7ruECqRazKVijjA5bj1nNFBwbTNE1d123bouCIPlIDFUBWTfOz1blEWOicTqeAYz5vPJSzp88O57/AraKehXkIFwSimfnDNnC2F/95ZE4s2ZYEki9X5u3lAOczs7bk+VVImh4MSSpfla4ThesvkoVCg8Ed6VMAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 TB SVvse2S qdgFHkrsDxA"\n        title=""\n        src="/portfolio-2018/static/1*TB_SVvse2S-qdgFHkrsDxA-c4fe29e81d3367d9d8cf20d6626cc61a-082ce.png"\n        srcset="/portfolio-2018/static/1*TB_SVvse2S-qdgFHkrsDxA-c4fe29e81d3367d9d8cf20d6626cc61a-c7cb1.png 158w,\n/portfolio-2018/static/1*TB_SVvse2S-qdgFHkrsDxA-c4fe29e81d3367d9d8cf20d6626cc61a-93041.png 315w,\n/portfolio-2018/static/1*TB_SVvse2S-qdgFHkrsDxA-c4fe29e81d3367d9d8cf20d6626cc61a-082ce.png 630w,\n/portfolio-2018/static/1*TB_SVvse2S-qdgFHkrsDxA-c4fe29e81d3367d9d8cf20d6626cc61a-c4006.png 945w,\n/portfolio-2018/static/1*TB_SVvse2S-qdgFHkrsDxA-c4fe29e81d3367d9d8cf20d6626cc61a-85e68.png 1260w,\n/portfolio-2018/static/1*TB_SVvse2S-qdgFHkrsDxA-c4fe29e81d3367d9d8cf20d6626cc61a-38b38.png 1890w,\n/portfolio-2018/static/1*TB_SVvse2S-qdgFHkrsDxA-c4fe29e81d3367d9d8cf20d6626cc61a-74a12.png 2000w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Finally, much improved mapping data, without any cropping weirdness!</p>\n<hr>\n<p>Next up, I’m going to take these SVGs and apply some snazzy styling to make the output look 👌.</p>',frontmatter:{title:"RunMaps v2.0: Breaking free of Mapbox",date:"May 26, 2018",tags:["Mapbox","Openstreetmap","Side Project","D3js","Geojson"],url:"https://medium.com/@psyked/runmaps-v2-0-breaking-free-of-mapbox-dbe3c3ca1a01"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-runmaps-v-2-0-breaking-free-of-mapbox-dbe-3-c-3-ca-1-a-01-408ce78de1bee98b30f9.js.map