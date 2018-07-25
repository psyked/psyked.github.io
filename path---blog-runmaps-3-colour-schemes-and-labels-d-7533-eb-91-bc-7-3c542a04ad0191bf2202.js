webpackJsonp([0x7acb043940eb],{1371:function(a,t){a.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/runmaps-3-colour-schemes-and-labels-d7533eb91bc7/index.md absPath of file >>> MarkdownRemark",html:'<h1>RunMaps 3: Colour Schemes and Labels</h1>\n<p>In my previous posts I’ve discussed <a href="https://medium.com/@psyked/generating-run-maps-with-node-js-52738014d3dc">the initial development of my RunMaps side-project</a> and the subsequent <a href="https://medium.com/@psyked/runmaps-v2-0-breaking-free-of-mapbox-dbe3c3ca1a01">switch over to using Overpass API</a> instead of the initial Mapbox APIs. Now it’s time to pick up where we left the original development; improving the visuals by adding place labels and map markers.</p>\n<h4>Colour scheming</h4>\n<p>Coming up with colour schemes for maps is hard. Fortunately there’s existing map providers like Ordinance Survey which have made their colour schemes easy to access (I grabbed some from <a href="https://www.ordnancesurvey.co.uk/blog/2017/12/effective-basemaps/">this article</a>) and with some effort devoted to mapping those colour schemes to the rendered SVGs I can transform the output so that it looks a little more familiar:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*c8Awb6Y_n4MI_Tqf9IH4og-c8bcd52d4ccdf5a0feec1950b312d66f-56bef.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAABZklEQVQoz01R2W7cMAzc//+4okCBLrpJmtiWZV28qT6X3jhFAYoQKA5nOLq5ozmygjtFFoU5yZ3NcE4+wykqaFvjN9SdLTpBfQTwFidi+tkKtqJmszF4NwP2o+lb1Zc87it8S/i94W8xfELoBMdUtW4ehMx2ECeStNEPkES6N3pF2kZfYKyCBXu89qc0vJgD+TkpFLqCUhOpytW4Gw+lyD2QDLmX91I/yMA+mS/Zk/7NI9mFq1BlKvIMjTtkhqiXo74X3oMh8Bc4yEO8f21e8SFQcSQKAFXhRlgi9rEv8JroAdJIT2YKh8SaPQ300+TQ/QKwKNawYPA6pHSo+0gVlkJ3tHXOMb9kh4Zrc5Wm3NR7kV9hgXhb8CdJHZy6LPNPeJBA9tOjybfnf17b+qT4Z1Zko64be8m8ZkrMvfGW8AF6dK2gbc7oh//BxIakfUgmAYilOTfOZIjUmQ61BnIUaaicme7t4y+Bri4DUGDRKQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 c8Awb6Y n4MI Tqf9IH4og"\n        title=""\n        src="/portfolio-2018/static/1*c8Awb6Y_n4MI_Tqf9IH4og-c8bcd52d4ccdf5a0feec1950b312d66f-082ce.png"\n        srcset="/portfolio-2018/static/1*c8Awb6Y_n4MI_Tqf9IH4og-c8bcd52d4ccdf5a0feec1950b312d66f-c7cb1.png 158w,\n/portfolio-2018/static/1*c8Awb6Y_n4MI_Tqf9IH4og-c8bcd52d4ccdf5a0feec1950b312d66f-93041.png 315w,\n/portfolio-2018/static/1*c8Awb6Y_n4MI_Tqf9IH4og-c8bcd52d4ccdf5a0feec1950b312d66f-082ce.png 630w,\n/portfolio-2018/static/1*c8Awb6Y_n4MI_Tqf9IH4og-c8bcd52d4ccdf5a0feec1950b312d66f-c4006.png 945w,\n/portfolio-2018/static/1*c8Awb6Y_n4MI_Tqf9IH4og-c8bcd52d4ccdf5a0feec1950b312d66f-56bef.png 1200w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*ld4DFJUILdJwdk_3akVZnA-f98201c66c8e0e574f998383520cceac-56bef.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAABeUlEQVQoz1VS7W6kMAzcJzhtYzv0x+q2QMJXtwuBxGGrvv9z3QR0PyqBFWDG4xlzsd1L/M6t0sfCTRSf8Wi7vbx3+bzK+TPZ+SVjloLPJ+DyH/3iJvEUeYjS7dWg+AyonXe75Cp8W802ZflUgH+Rbf+yqC7zkNgv1K0SVAaVUeURyS/iYzVAI1mXCu23sopTC30P/Y0+Zmpmqp9cB7rP5v409y9x0YLc6/v0wyceZNyH7QzbGFja9NY8uF253VCl3QTnJoBcdWrqWYZMfTT1xi5d7GFYOjCPYNpM4warlc/vw7ftlOvl7f643qYykY/8SDLDnbLTy8nkLpXhEUaJV/kr2knBl36jfvlz89fbaJoFsrIgCCCLzYN80o4YxSXwgaNnQITSq3kGagO5QB7zR3LrobSfyvu5yWOxpQshs3ozw0o+0JSwAmo34wKPUXr0DaZ+wgIyL54LuVTYwD+wo3GJ3alxZW1Ur1yy1ZJLv5tmpUavf+erC/8Ae1NW1cVE6aUAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 ld4DFJUILdJwdk 3akVZnA"\n        title=""\n        src="/portfolio-2018/static/1*ld4DFJUILdJwdk_3akVZnA-f98201c66c8e0e574f998383520cceac-082ce.png"\n        srcset="/portfolio-2018/static/1*ld4DFJUILdJwdk_3akVZnA-f98201c66c8e0e574f998383520cceac-c7cb1.png 158w,\n/portfolio-2018/static/1*ld4DFJUILdJwdk_3akVZnA-f98201c66c8e0e574f998383520cceac-93041.png 315w,\n/portfolio-2018/static/1*ld4DFJUILdJwdk_3akVZnA-f98201c66c8e0e574f998383520cceac-082ce.png 630w,\n/portfolio-2018/static/1*ld4DFJUILdJwdk_3akVZnA-f98201c66c8e0e574f998383520cceac-c4006.png 945w,\n/portfolio-2018/static/1*ld4DFJUILdJwdk_3akVZnA-f98201c66c8e0e574f998383520cceac-56bef.png 1200w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>(left) Inspired by the OS ‘Outdoor’ styles, (right) Inspired by the OS ‘Night Mode’ styles</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*Qkd5f8KrNqbSjMRW72LqKA-74df4a7c77085b6f1c5f2d9ea896004e-56bef.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAABv0lEQVQozyWR627iMBCF8/5vVa1gFRDdLQgCJAXSEAeS+H6JZ0ylnXQl/7LnnPPNcYZoIZpoRuwa6G/g+5QMggW0CXQKOk0ak1P2KT2ztp+SAy9iVIguw6BS1DSdjFCitaqOUcowRDAOxBj7wTKur40sW35S3YlMSYJgKDXDqCNoCDJF40zvzxvfbBtdGXW3ppP3rT+u4Px7umyw2uApnyaBc9h/MVF5gZbPV8mn9vO1X8Ahx93yVeTf++XrzyLtFqlcpWqNxa8gykASJ3/EhEHMk0InZj89+sMKy7/puMLDEquc0lKR44XOJh3fXbOTvA1agJeETQCG9oyOkxE1RG+iL76rNTTv8LkmENwu0uoN9rnuyo7fmPwyZgyGZxQbAw+uj3acV7A8WTH0n67+eNVbfy/MbW/Xy7B+E9cPy6tBVDo8IIwQVDajUu/UGe08GWRVYmVg9ZOdk5fB869HZZuLafdC3JB+ZKy1ZQSLgWcw905V2dnFKwgCRhbVIHnjxnbUDy4Y1EfVFZ252Gm0492yKzY3nFQWPfWmfzqXEayflJStD8oZIdqr7JtJPKEt4+M4+d5EruUzBmOH592wfzJ6K6gNXuu/AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 Qkd5f8KrNqbSjMRW72LqKA"\n        title=""\n        src="/portfolio-2018/static/1*Qkd5f8KrNqbSjMRW72LqKA-74df4a7c77085b6f1c5f2d9ea896004e-082ce.png"\n        srcset="/portfolio-2018/static/1*Qkd5f8KrNqbSjMRW72LqKA-74df4a7c77085b6f1c5f2d9ea896004e-c7cb1.png 158w,\n/portfolio-2018/static/1*Qkd5f8KrNqbSjMRW72LqKA-74df4a7c77085b6f1c5f2d9ea896004e-93041.png 315w,\n/portfolio-2018/static/1*Qkd5f8KrNqbSjMRW72LqKA-74df4a7c77085b6f1c5f2d9ea896004e-082ce.png 630w,\n/portfolio-2018/static/1*Qkd5f8KrNqbSjMRW72LqKA-74df4a7c77085b6f1c5f2d9ea896004e-c4006.png 945w,\n/portfolio-2018/static/1*Qkd5f8KrNqbSjMRW72LqKA-74df4a7c77085b6f1c5f2d9ea896004e-56bef.png 1200w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*tfS-ZObVpt-3VbuAwJ760A-ac2a6113ce6c202561f92fa35bcb028f-56bef.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAABFklEQVQoz1VRAW4DMQjr/x+5qVKbBAyEu31gJrm2m4SQdZxtTG7HNNZ0nBnsCzi/ZBTYmBVTPSRCp+uest/2jFXkCVaGqTaOc4IEC4F18abezYXkt+KNaMuc05MrkB/oeNR/E9UD7upWtDBhnXn5vZ198Tfwg4rUCuLYXxiHCzkGl4pl9iH/jVebVyqj564LM226SgOGQ/5lvlRoMgHvy0fClcy9SNBXWhsPscYUHC1yWll9LufO29ZtwA2jruhO5nhyZ4sxE5Q7t/Pft6mbRc0866qZNqyRbzYU7TyCwNCvzPkib5V3Tj4SR4ou2uvx0J/9vpiDx/855ibjRWaqegyAgcV0gN1GrDtzREV6qnY3qIzv+9cvMFwry41l43YAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 tfS ZObVpt 3VbuAwJ760A"\n        title=""\n        src="/portfolio-2018/static/1*tfS-ZObVpt-3VbuAwJ760A-ac2a6113ce6c202561f92fa35bcb028f-082ce.png"\n        srcset="/portfolio-2018/static/1*tfS-ZObVpt-3VbuAwJ760A-ac2a6113ce6c202561f92fa35bcb028f-c7cb1.png 158w,\n/portfolio-2018/static/1*tfS-ZObVpt-3VbuAwJ760A-ac2a6113ce6c202561f92fa35bcb028f-93041.png 315w,\n/portfolio-2018/static/1*tfS-ZObVpt-3VbuAwJ760A-ac2a6113ce6c202561f92fa35bcb028f-082ce.png 630w,\n/portfolio-2018/static/1*tfS-ZObVpt-3VbuAwJ760A-ac2a6113ce6c202561f92fa35bcb028f-c4006.png 945w,\n/portfolio-2018/static/1*tfS-ZObVpt-3VbuAwJ760A-ac2a6113ce6c202561f92fa35bcb028f-56bef.png 1200w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>(left) Inspired by the OS ‘Road’ styles, (right) Inspired by the OS ‘Light’ styles</p>\n<h4>Adding labels</h4>\n<p>Those maps are looking pretty neat now, but they’re still missing labels that give the locations more context. The data is all available, all part of the OpenStreetMap responses, but most of the time that information is attached as a <em>Point</em> object in the GeoJSON — rather than a <em>Path</em> or a _Line _— so they don’t appear visually.</p>\n<p>Although the chaining syntax of D3.js still feels a little unnatural, I’ve now learnt that it’s the easiest path to rendering objects with geolocation data. All I have to do is create a new element in the SVG and then apply a transform based on the projection, using some code like this:</p>\n<p>const projection = d3.geoMercator();<br>\nconst path = d3.geoPath().projection(projection);</p>\n<p>svg<br>\n.selectAll(".label")<br>\n.data(thingsWithNames)<br>\n.enter()<br>\n.append("text")<br>\n.attr("transform", function (<em>d</em>) {<br>\nreturn "translate(" + path.centroid(d) + ")";<br>\n})<br>\n.style("text-anchor", "middle")<br>\n.text(function (<em>d</em>) {<br>\nreturn d.properties.name;<br>\n})</p>\n<p>And I immediately get an output like this:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*TDweZYj9lQ0k-FVilbYf7g-64f2bac204fe37cab39451fa8d0ac06c-74a12.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAABzklEQVQozy1R17ajMBDL//9SbgqdpZdACBC6sY1NS+G+7iS7c/xg+4w0kmb3ek3P11S3he/Z4SWI43Ce6bat68rXhVOKOMfbNtOpihMjjp2ubxCqMG6ez3EH4G1bHg/+eEyElb6vZWnCxn59MMqrvLoUTVShKOssL1a9wKybknPCWP8fTIeGDh2Mquv8LAiSJDnBn3udxKmrqKKqKrIin89nUZDOp/M1iaaZLgt7v+cPGHTO87CuAyGtqqqn00kUReg+HuEiKYoCP8K3Doef5HbxAzdJLssyfMBAg3GLuqptS7AtiAJ0AwtIEASgOMqyrOs6PGVFMQzNDd1rmiBU//M8A83AOmAhpCub1LC1n/1BliVd10CFpmmmaQLetC0vsuO71+IGzH/AZZXdixvjPdiGeF/v6Zr6+/3ecyF/H8YCXvqW5zl5HXQ4n0a8ruwbGOk46yFzxrBt6XDSPClRNI64rFLdUmzHFCVBN1SQOj67dSO/vyv0f8Bwez5hVZxxHF8vaXbLiyyMHMe1TNuI8yi5ReHVMwOlbG90RGWbE4rmie5gXRD6OJJhQHzhmHZNf0d9m91z0zJsxwpCv6yKri06VJKxJRMmbMgGHtHiL4k6AwQq14sLAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 TDweZYj9lQ0k FVilbYf7g"\n        title=""\n        src="/portfolio-2018/static/1*TDweZYj9lQ0k-FVilbYf7g-64f2bac204fe37cab39451fa8d0ac06c-082ce.png"\n        srcset="/portfolio-2018/static/1*TDweZYj9lQ0k-FVilbYf7g-64f2bac204fe37cab39451fa8d0ac06c-c7cb1.png 158w,\n/portfolio-2018/static/1*TDweZYj9lQ0k-FVilbYf7g-64f2bac204fe37cab39451fa8d0ac06c-93041.png 315w,\n/portfolio-2018/static/1*TDweZYj9lQ0k-FVilbYf7g-64f2bac204fe37cab39451fa8d0ac06c-082ce.png 630w,\n/portfolio-2018/static/1*TDweZYj9lQ0k-FVilbYf7g-64f2bac204fe37cab39451fa8d0ac06c-c4006.png 945w,\n/portfolio-2018/static/1*TDweZYj9lQ0k-FVilbYf7g-64f2bac204fe37cab39451fa8d0ac06c-85e68.png 1260w,\n/portfolio-2018/static/1*TDweZYj9lQ0k-FVilbYf7g-64f2bac204fe37cab39451fa8d0ac06c-38b38.png 1890w,\n/portfolio-2018/static/1*TDweZYj9lQ0k-FVilbYf7g-64f2bac204fe37cab39451fa8d0ac06c-74a12.png 2000w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>That’s a lot of labels.</p>\n<p>Okay, that’s a lot of labels. Obviously there’s some prioritisation and filtering of labels to be done. I’ll cut it back to ‘places’ — items marked specifically as hamlets, villages, towns and cities — and get a far more readable version of the map that looks like this:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*N65LzygOc9_wrgXBK9ac4Q-8a09586e2395fc1ae304b13aead7d385-74a12.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAABe0lEQVQozzVS2W7bMBDM/39ckaJAHbuuI4nizT25DPJYSnaBBcmHGczMDt/M0AY1CDk9WBpRHkZm1A3H4GOMxiA0t4V3n67c0Qy0t0l8O8gHjr6/rcka81V7bex7B7ZY9G/WP6FdNvjh4GfBh/QDPOcgz2uiu8FUEEuigcQ7+oXiWX2hO5LDtiE45UzNk9beW9f6Up5MO6zi5HeFzmXi9Dhr52YKUHyOW47rvt5yWWNZW3NT9WX7JNPzzeJVslBRSkKppC3FzbtHjgtjinnJEkC520n++mIb0K2e4RnMFbwJZGw7Y5iyt8t72B9MJTS/wt3TDaSwnrZL3Sv40/xreUXugKtgni4yLst2zyUkDAW2RB/YtzHaeGYWaaptkqcFbK4V1wdkuZ4rzBtf1Bqwz7TMaKA7qD/qHP9tj/HSPKqWWRJVdWwp8hZpF6kR1s/8O6NrWkBLPzzCm529PXc2PwBpA5ltAc7QEqoENiSqzKlPfY1ZShX6BLzU5R9ynyvKZGz8TwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 N65LzygOc9 wrgXBK9ac4Q"\n        title=""\n        src="/portfolio-2018/static/1*N65LzygOc9_wrgXBK9ac4Q-8a09586e2395fc1ae304b13aead7d385-082ce.png"\n        srcset="/portfolio-2018/static/1*N65LzygOc9_wrgXBK9ac4Q-8a09586e2395fc1ae304b13aead7d385-c7cb1.png 158w,\n/portfolio-2018/static/1*N65LzygOc9_wrgXBK9ac4Q-8a09586e2395fc1ae304b13aead7d385-93041.png 315w,\n/portfolio-2018/static/1*N65LzygOc9_wrgXBK9ac4Q-8a09586e2395fc1ae304b13aead7d385-082ce.png 630w,\n/portfolio-2018/static/1*N65LzygOc9_wrgXBK9ac4Q-8a09586e2395fc1ae304b13aead7d385-c4006.png 945w,\n/portfolio-2018/static/1*N65LzygOc9_wrgXBK9ac4Q-8a09586e2395fc1ae304b13aead7d385-85e68.png 1260w,\n/portfolio-2018/static/1*N65LzygOc9_wrgXBK9ac4Q-8a09586e2395fc1ae304b13aead7d385-38b38.png 1890w,\n/portfolio-2018/static/1*N65LzygOc9_wrgXBK9ac4Q-8a09586e2395fc1ae304b13aead7d385-74a12.png 2000w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>A much better balance of detail.</p>\n<p>Reintroducing the route to this map gives the following output, which is much closer to the end result I was looking for:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*w4ALp74pUYzMQl3Nt8p3aA-00395e831c4a15ea11b0c04ca159ed7d-74a12.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAABg0lEQVQozzWS6WokMQyE5/2fbVmSwOaY2+32LVmyLIf8jLtnFgw2QkV9KvmgWnUQoE/xyg2I8hikSl3rGLwdpVmpahf/4uIX96qK0mEKD5t466OfH4VmfPqSXqC53pE1ZLkkOXn4WPCvxddcr61vzbtBPcxrdnfF6cAjtmo5XFd4q+Kpu0znSrbCUtEKJwJHUnqHLuXpPJWTc+dnpdyzFwySXceoDCqIxadgU1hWc0zZhGwA7HR9Yu9iery5GAEvNUpxLbnsTHTG3c/J3ajGkO6peRTuuou/v1kHdi378Ix9yfG9lUhlZXDVL8e3P/7yyTk49AbPjo7YMsuOncta0O3wVbc8OPMJ40WSZzA5nu/mlP0Sq8u4RPqsfRkDxmPm1kAEpngiVLCQbR8Y21G3LJPFf6KAzSUyczSUFcXNdHX8xx7jubBt1W0uiYpY1hh4CbS2VgLeb+k9VQuSUXLf0sHDzvmIiuYHIJkmfuprwxlMaX4rUmGOffpLSC2XRjesH+X+C3c6KvrNY8JEAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 w4ALp74pUYzMQl3Nt8p3aA"\n        title=""\n        src="/portfolio-2018/static/1*w4ALp74pUYzMQl3Nt8p3aA-00395e831c4a15ea11b0c04ca159ed7d-082ce.png"\n        srcset="/portfolio-2018/static/1*w4ALp74pUYzMQl3Nt8p3aA-00395e831c4a15ea11b0c04ca159ed7d-c7cb1.png 158w,\n/portfolio-2018/static/1*w4ALp74pUYzMQl3Nt8p3aA-00395e831c4a15ea11b0c04ca159ed7d-93041.png 315w,\n/portfolio-2018/static/1*w4ALp74pUYzMQl3Nt8p3aA-00395e831c4a15ea11b0c04ca159ed7d-082ce.png 630w,\n/portfolio-2018/static/1*w4ALp74pUYzMQl3Nt8p3aA-00395e831c4a15ea11b0c04ca159ed7d-c4006.png 945w,\n/portfolio-2018/static/1*w4ALp74pUYzMQl3Nt8p3aA-00395e831c4a15ea11b0c04ca159ed7d-85e68.png 1260w,\n/portfolio-2018/static/1*w4ALp74pUYzMQl3Nt8p3aA-00395e831c4a15ea11b0c04ca159ed7d-38b38.png 1890w,\n/portfolio-2018/static/1*w4ALp74pUYzMQl3Nt8p3aA-00395e831c4a15ea11b0c04ca159ed7d-74a12.png 2000w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>All of this is achieved with the fairly simple steps of parsing GeoJSON data objects, having D3.js render them as SVG elements and then styling the output with standard CSS styles. The zoom levels, the aspect ratios, and the route data are all easy to tweak and get me much closer to my end goal, which is still to generate images that can be easily printed as posters.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*lNgkj0G0-dvJm--E5OE2yw-95159be20023a2fd95660b4742252b2e-b54a2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 160%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAIAAACdAM/hAAAACXBIWXMAAAsSAAALEgHS3X78AAAETklEQVQ4y21V23KbSBDl/79p33ZrK4kdK5ItyUgIcRlg7tNzQd7HPQOy46RS1UUNQ5/uPn2jIOJzshSt8tZFm5KdZ4fnbzIn56N0YcIhpbtC4YmH5ACOdyWb/iCrtpvfD3ewkY31KiPn9fZPbufPmJ8KhZYtog3JxKB+Q8ZoPsAfXObP4JA85x3rDx+qq1grvFef+P90O+f4CVLIcBnlQatunmn9HIKxRgC8Iuc7VQdqNgwDvXBfSl+Z2BWN/cb8Nia9xEY+8qvaM33BK0UB8xSn0e91uE7+2Lmn1j129NTR9848FYN/ZnardWfMEIPGa20eLvpHZ47Kd29zsKFv3Xd46+lHZ5+Y2U36KNRZ8HMRZjmavR0rM1RInqBzTxuYb+2G2aOJ/VIF66MAQMpaiaviVy0aLZsCoVKUtH8MLw9St1b1kirmtkKerWGOBnSRJ+nsCACQkl+Map0ZtGqKpRLkZK/bUskrrjS+uYGgLaEKVzUAgOETzpAFzJS4FPdKzM6yi0bkukM8EKP77Nkwo7uMuV92cCCmcz6rtvhog+CV6fItnJjlKUUNb1BCLHAO0fncAL8EksFLS0anPNP9yQyIqgdPctMKWFTrBdaqJU8rkZywj6aTgUl3EeNOjgfijeOtzJzBFiYqkBdTBVn5Z4v8g/PazDfDwq61DyPfq+ZVTdk8n85rCCgswCv5Ja/NZ7C7JW9CiyKP8lU1pZwu0ObjacVzeUIWjOwQkZ4qw+vi177PgznQrjdb1R71VAtR8aEUfana0jSnSRy4KsE8bL+Y03PxDltHyqCZXWQNPTC1AR7BywbPoxpOGhnuXyU7JjmK4VRet8Uytxq5vd3COhu3m5fhjO4f7NbwXBVrGXmBqRKunMyLTdMQj6O/rmCjlq4IXnoSIai3t0hxFOGsqA5Rvu8tR2noadvTgdFB01CkPLQOianKr2N/QA9hpeSaRzb6F8ygiwO43DM6u4lObca/StPmwcAkqqXprWZKdwk3GO8cfIVpB/g2+xUck2F0bN3+qg7Cv9cZtNGeHguYJqw0n2hdiSKULjBMNbZqTA48r/ZZ2F55LhxGMt/mvQ0M5U2IZZL1dDCcBuFbFZkOHML8qdK7ATsjORedlF1BC8Yv6/7t5m95vFcrDqKCxGLloWxpU+uNsODvHFIQLefXwgR7WxZdCFra3tIUvLaktMti0XLRmWAGW+v8b8maWB42aKO6wke37ArNzHk3/WP8gAkLUfuoYI5IKZLaK2xoJMInZeOIWtiQAyyE5Uf+TfpupOogvqJPkB5mzxe9/W9pG6TNJ4kDqPpkhG8oKliJsy1aUz4Of70KlGRygS/MA6d6O/09uhr9s6xrvm5vlKq5/mivz8r1+O8VIaqz2pzkEwqea54Mqqp8f5abPf9Sm2cPCsG8zZ5Tg4hSNEQi//RmKlZ7IDn/+pebc7a1i5yiQcLBpbWHF/4vlEEEXQSd/wHKlORmw/maZQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 lNgkj0G0 dvJm  E5OE2yw"\n        title=""\n        src="/portfolio-2018/static/1*lNgkj0G0-dvJm--E5OE2yw-95159be20023a2fd95660b4742252b2e-082ce.png"\n        srcset="/portfolio-2018/static/1*lNgkj0G0-dvJm--E5OE2yw-95159be20023a2fd95660b4742252b2e-c7cb1.png 158w,\n/portfolio-2018/static/1*lNgkj0G0-dvJm--E5OE2yw-95159be20023a2fd95660b4742252b2e-93041.png 315w,\n/portfolio-2018/static/1*lNgkj0G0-dvJm--E5OE2yw-95159be20023a2fd95660b4742252b2e-082ce.png 630w,\n/portfolio-2018/static/1*lNgkj0G0-dvJm--E5OE2yw-95159be20023a2fd95660b4742252b2e-c4006.png 945w,\n/portfolio-2018/static/1*lNgkj0G0-dvJm--E5OE2yw-95159be20023a2fd95660b4742252b2e-b54a2.png 1000w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*3wfHrb9nskMuVi1gOBkOEA-9255eeb3c584703e2f7332c07d5523c9-b54a2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 160%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAIAAACdAM/hAAAACXBIWXMAAAsSAAALEgHS3X78AAAEqUlEQVQ4y0WV2XLjNhBF+f+flZlUauyxJVsrKXEFQKwEF8nzkpcckJmkCqUygV5u377dzoI3dV1K2Vmjuq76OL3dq2txOx3O+4/jW16cz9fPz8tuO5fiULf33edrcT9XdZFNYxiCGwc/Rj8OrmryS3HM76dOVIQjtPda9I11yvl+mQdr1f74kxzHyz57zHEew/Ybo+V5ngapmqopcP56TJzHFJ/L6Iyu6tI5HQdXN7fb/ZIRD89lGqboQzAxOufNNA3LlML1upOy4YlPfGLC6NZk42MesqK6aC15eM4jIcr75XTeV+U1DlaptmnvbVtu0alrmaN3fX47gSsGm22ld6q2VvrB5VZdtWhUq7XoRM2xRlI2pvM4TKPnhKAJBJwMqM9lUrpVfUvgKrqdVaXXwWtI8vSC8soLIYAGF1h6p8kP2IyoTVPB9r/YRj9Mgw3GeeWsarvSGAV+SOaViPhQC+2k8myMzjvDQyKcX4idIkZUhVFZ5fz2qsUA69VsxIYGY5w9pgHYy+/v7WAkVF3VN+hAEnVdgIKIy2YwJgNOEsm8nSlsUTeLIZh5Hp7EDoaGayPi2qQN46oon0SCxXbrbG+0MEaqvqMc+JxW/Xw9Zu9sXVdd2xBi8JZKyZ/pXrZNjR1G9IOeKyWa5i5lDU/cjCjDGXRqtNp/fH4eDtc8D96CKePBWgNHQEVeUnRVXeGPyEhCZhA6Z/+jw5pe3IvB9dxnLx/HY3Hfnc5vh9O5uE1TgO2v4B/BLzGM3o7BzdY88KedVPEY/z5/TNQ1x2x3vnz/uef88fr+5/uH6bqnpjWVqG5BtFEJ29ahl0twD6Of1iwcqX6N46+vZ9aq+nW/+/7y+uPjUOVX3VTDYAEMmciDwSyroqxvSC2uDM/BfTFFU5gg7FTkL5+Hb2/vh/2+zM/M+uV6QCFwTguc1Zw0XrLrVae1olQhWsPlI2bf3j/f//qhf77y3ved0ZJ9wqAjLCg1pidhcNoZlUhdO0efEOqIPPOyLI5HdznFxKRUsqPbsMpUMRJtVzFYQjRk4wkk4DeWgWE2dDbHEIKVtFt0bdtUZdnU5TbJdFt09RDtvAwzqmIYvSE0mltSzT5TqklyY1bYg+W9hqDyTsFkRklYM7OaweqlNpJPLMmJcECRkUHI+rGMrEG4AdUQ8EkTm3bAwFYbkdT7bgdy9E9EdNpTQ9dmmKI7IPdKtG1NYCDRaJAr2TrX07lhcJAHzzgvaQrH7WRrHuOTeu1Ko02bOAa4TVi4TzOwiTSRxOU6hT4tA3YFvUnEtiXanldJs4DYSpJ+9ol/joTNtmqaOoEfU2gSZJSX2BZtWeLfwDmTZKzQVrCVpwQ17RAYYtc+lsgm4zOFkyJ7pnFFam5lEgp7lNT3Lf2gGWlLz+vSHcO2m+d1B0shOBkM4xYTT5FNAg1a49ylWNFvkuIV5SX+gxG6bWUlUb1oMtqLQNg+DDe6D+sMPtfO0WEaQy/4O79dr/n5VuV5eb7V+a3J+X+WbaSTFlQYQomzbPIxLZopkB8WWAnc/Ppa+I+HcwM/dXHF+f+dui5QrIsib34P5rZS12Hoyzo/F4equxmnWOPayX8AxujHI++YJDgAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 3wfHrb9nskMuVi1gOBkOEA"\n        title=""\n        src="/portfolio-2018/static/1*3wfHrb9nskMuVi1gOBkOEA-9255eeb3c584703e2f7332c07d5523c9-082ce.png"\n        srcset="/portfolio-2018/static/1*3wfHrb9nskMuVi1gOBkOEA-9255eeb3c584703e2f7332c07d5523c9-c7cb1.png 158w,\n/portfolio-2018/static/1*3wfHrb9nskMuVi1gOBkOEA-9255eeb3c584703e2f7332c07d5523c9-93041.png 315w,\n/portfolio-2018/static/1*3wfHrb9nskMuVi1gOBkOEA-9255eeb3c584703e2f7332c07d5523c9-082ce.png 630w,\n/portfolio-2018/static/1*3wfHrb9nskMuVi1gOBkOEA-9255eeb3c584703e2f7332c07d5523c9-c4006.png 945w,\n/portfolio-2018/static/1*3wfHrb9nskMuVi1gOBkOEA-9255eeb3c584703e2f7332c07d5523c9-b54a2.png 1000w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>(above) a few trial maps generated as portrait aspect-ratio poster sizes.</p>\n<h4>Next…?</h4>\n<p>It doesn’t stop here. Now that I’ve got a proof of concept that I’m happy with, my next step is to go back to the initial idea, revisit my original inspiration and get creative to transform what’s essentially a custom map into a piece of art. Stay tuned!</p>',frontmatter:{title:"RunMaps 3: Colour Schemes and Labels",date:"May 26, 2018",tags:null}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-runmaps-3-colour-schemes-and-labels-d-7533-eb-91-bc-7-3c542a04ad0191bf2202.js.map