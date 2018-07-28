webpackJsonp([0xdc6080995e89],{1291:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/generating-images-for-download-with-html5-and-canvas/index.md absPath of file >>> MarkdownRemark",html:"<h2>Summary</h2>\n<p>With a clever bit of trickery from HTML5 and JavaScript, it is possible to trigger a browser download of anything that can be generated in a canvas element, regardless of whether that element is visible or not. This works in modern <a href=\"https://caniuse.com/#feat=download\">browsers which support the 'download' attribute</a> and <a href=\"https://caniuse.com/#feat=canvas\">which support the 'canvas' element.</a></p>\n<h2>Introduction</h2>\n<p>In most browsers a canvas image can already be natively saved through the right-click menu, and what this technique is doing is essentially automating, or forcing, this action on the users' behalf. One of the advantages with this technique - besides the improved user experience - is that you have a chance to cleanly re-render the canvas element and essentially modify the output before the browser begins saving the image. </p>\n<p>This means you can adjust the resolution, the aspect ratio, add watermarks or even modify the image data before it's downloaded by the user. Of course, the original right-click menu and functionality still exists, so you can't use this as a method of stopping users from saving your images completely, but it does mean that you can give them a better experience using your website.</p>\n<h2>Real-world example</h2>\n<p>I've used this technique on <a href=\"https://www.pokeproject.co.uk/\">PokéProject</a>, with what I call the <a href=\"https://www.pokeproject.co.uk/instagram/\">'Highresinator'.</a> PokéProject takes the pixel art from the original Pokémon GameBoy games, and scales it up from the original 32x32 pixel images into wallpaper backgrounds for desktop computers or mobile devices.</p>\n<p><a href=\"https://www.pokeproject.co.uk/instagram/gengar\"><img src=\"/content/images/2017/04/pokeproject.png\" alt=\"Real world example on PokéProject\"></a></p>\n<p>As you can see in the image above, as part of this process I'm generating a canvas-based preview of the wallpaper image, but that preview canvas isn't the correct resolution for any downloads. To fix this I've added a short form with download buttons, and clicking any of those buttons will generate the artwork shown on the canvas at the specified resolution.</p>\n<p><img src=\"/content/images/2017/04/downloadpokeproject.gif\" alt=\"Animated example of PokéProject\"></p>\n<h2>Example code</h2>\n<p>The key steps to this process are simple. First you have to generate an off-screen canvas element, into which you draw your image, and then you create an anchor element with a download attribute, transfer the users' click event to this element, and a download will be triggered.</p>\n<p>Let's look at some sample code. </p>\n<p>First, we're going to need a simple website which contains a canvas element:</p>\n<pre><code>&#x3C;html>\n    &#x3C;head>\n        &#x3C;title>Canvas Downloads&#x3C;/title>\n    &#x3C;/head>\n    &#x3C;body>\n        &#x3C;canvas id=\"myCanvas\" width=\"100\" height=\"100\">&#x3C;/canvas>\n        &#x3C;a id=\"downloadLink\" href=\"#\">Download Canvas&#x3C;/a>\n    &#x3C;/body>\n&#x3C;/html>\n</code></pre>\n<p>Next we use JavaScript to render something simple on the canvas - a bright red box, for example:</p>\n<pre><code>&#x3C;script>\n    var canvasElement = document.getElementById('myCanvas')\n    var drawingContext = canvasElement.getContext('2d')\n    drawingContext.fillStyle = '#ff0000'\n    drawingContext.fillRect(10, 10, 80, 80)\n&#x3C;/script>\n</code></pre>\n<p><img src=\"/content/images/2017/04/preview.png\" alt=\"Demo preview\"></p>\n<p>That works, but it's not very reusable - so let's refactor it a little:</p>\n<pre><code>&#x3C;script>\n    function renderCanvas(canvasElement) {\n        var drawingContext = canvasElement.getContext('2d')\n        drawingContext.fillStyle = '#ff0000'\n        drawingContext.fillRect(10, 10, 80, 80)\n    }\n    var canvasElement = document.getElementById('myCanvas')\n    renderCanvas(canvasElement)\n&#x3C;/script>\n</code></pre>\n<p>That's a bit more reusable - we're still doing the same actions, but we've made the canvas element that we draw to reusable.</p>\n<p><img src=\"/content/images/2017/04/rightclickpreview.png\" alt=\"Demo right click preview\"></p>\n<p>Our users can currently right click on the canvas element and save it locally. Let's add a button which will perform this action for them automatically.</p>\n<pre><code>&#x3C;script>\n    function renderCanvas(canvasElement) {\n        var drawingContext = canvasElement.getContext('2d')\n        drawingContext.fillStyle = '#ff0000'\n        drawingContext.fillRect(10, 10, 80, 80)\n    }\n    var canvasElement = document.getElementById('myCanvas')\n    renderCanvas(canvasElement)\n\n    var linkElement = document.getElementById('downloadLink')\n    linkElement.addEventListener('click', function() {\n        var newCanvas = document.createElement('canvas')\n        newCanvas.width = 100\n        newCanvas.height = 100\n\n        renderCanvas(newCanvas)\n\n        let fakeDownloadElement = document.createElement('a')\n        document.body.appendChild(fakeDownloadElement)\n        fakeDownloadElement.setAttribute('href', newCanvas.toDataURL('image/png', 1.0))\n        fakeDownloadElement.setAttribute('download', 'red-square.png')\n        fakeDownloadElement.style.display = ''\n\n        fakeDownloadElement.click()\n\n        document.body.removeChild(element)\n    })\n&#x3C;/script>\n</code></pre>\n<p>That's a lot of new code, but there's a few simple steps to this process:</p>\n<ol>\n<li>We create a new canvas DOM element, which is not added to the main page DOM and therefore is not visible.</li>\n<li>We re-use our original canvas drawing logic, to draw a red box into our new (invisible) canvas element</li>\n<li>We create a hyperlink element in the page DOM, set the element URL to be an bytedata representation of the canvas element (in png format as well, for transparency)</li>\n<li>We set the 'download' attribute on the new element, specifying the download filename <em>and</em> changing the default browser behaviour and have it download the data as a file rather than trying to navigate to an URL</li>\n<li>We fake a click event on our new hyperlink element, to trigger the file save</li>\n<li>We remove the link element from the DOM and clean up afterwards</li>\n</ol>\n<p><img src=\"/content/images/2017/04/canvaspreview-2.gif\" alt=\"Canvas download image preview\"></p>\n<p>This code is currently just saving exactly what's in the canvas. Let's make things a little more interesting - we're going to change the size of the download and the colour of the box.</p>\n<pre><code>&#x3C;script>\n    function renderCanvas(canvasElement, colour) {\n        var drawingContext = canvasElement.getContext('2d')\n        drawingContext.fillStyle = colour\n        drawingContext.fillRect(10, 10, canvasElement.width - 20, canvasElement.height - 20)\n    }\n    var canvasElement = document.getElementById('myCanvas')\n    renderCanvas(canvasElement, '#ff0000')\n\n    var linkElement = document.getElementById('downloadLink')\n    linkElement.addEventListener('click', function() {\n        var newCanvas = document.createElement('canvas')\n        newCanvas.width = 320\n        newCanvas.height = 240\n\n        renderCanvas(newCanvas, '#00ff00')\n\n        let fakeDownloadElement = document.createElement('a')\n        document.body.appendChild(fakeDownloadElement)\n        fakeDownloadElement.setAttribute('href', newCanvas.toDataURL('image/png', 1.0))\n        fakeDownloadElement.setAttribute('download', 'green-rectangle.png')\n        fakeDownloadElement.style.display = ''\n\n        fakeDownloadElement.click()\n\n        document.body.removeChild(element)\n    })\n&#x3C;/script>\n</code></pre>\n<p>What we've done here is change the render function slightly, so that it takes a colour parameter to the render function, and we've changed the box drawing logic, so that it draws a rectangle inside the edges of the canvas, regardless of the canvas size. </p>\n<p>A user will now see a preview of a red box, but if they click on the download link, they'll get a green rectangle downloaded instead. They could still click on the original canvas and save that of course, but that's not the point of this exercise, and there are other ways of preventing that behaviour.</p>\n<p><img src=\"/content/images/2017/04/canvaspreview.gif\" alt=\"Canvas download image preview\"></p>\n<p>We've achieved all of this on the client-side - no server-based image generation at all. This is the logic which underpins the wallpaper downloads of PokéProject <a href=\"https://www.pokeproject.co.uk/\">[link]</a>, which has a number of pre-set image download links at fixed and custom resolutions.</p>\n<p><a href=\"https://codepen.io/psyked/pen/WjpaMQ\">You can see a working example on CodePen.</a></p>",frontmatter:{title:"Generating images for download with HTML5 and Canvas",date:"May 01, 2017",tags:["html5","javascript","canvas"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/how-to-effectively-kill-your-agile-team/",tags:["agile"],title:"How to effectively kill your Agile Team",date:"2017-04-26T08:03:00.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/uploading-files-to-trello-with-node-js/",tags:["nodejs","trello"],title:"Uploading files to Trello with Node.js",date:"2017-05-18T20:38:43.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-generating-images-for-download-with-html-5-and-canvas-92cee93313de45470c40.js.map