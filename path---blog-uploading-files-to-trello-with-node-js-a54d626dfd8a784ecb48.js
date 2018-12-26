webpackJsonp([0xf94f8b94ae95],{1468:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/uploading-files-to-trello-with-node-js/index.md absPath of file >>> MarkdownRemark",html:"<p><a href=\"https://trello.com/\">Trello</a> is one of my favourite low-budget Content Management Systems for bootstrapped projects (that is to say, projects with zero budget and not projects which use the bootstrap css framework.)</p>\n<p>One of the more recent things I've had to do is upload files from my local machine and store them against a card in Trello. To achieve this I'm using Node.js and the <a href=\"https://github.com/adunkman/node-trello\">node-trello</a> module, with the following code:</p>\n<pre><code class=\"language-javascript\">const fs = require('fs')\nconst path = require('path')\nconst Trello = require('node-trello')\nconst t = new Trello(trelloAuthKey, trelloAuthToken)\n\nt.post(`/1/cards/${cardId}/attachments`, { attachment: fs.createReadStream(path.resolve(__dirname, 'path/to/file.doc')) }, function (err, attachments) {\n  if (err) throw err;\n  console.log(attachments);\n})\n</code></pre>\n<p>As you can see, the process of uploading files with this module is really simple. All you need to know is your Trello API credentials, the Id of the target card, and the path to the file to be uploaded on the local machine.</p>",frontmatter:{title:"Uploading files to Trello with Node.js",date:"May 18, 2017",tags:["nodejs","trello"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/generating-images-for-download-with-html5-and-canvas/",tags:["html5","javascript","canvas"],title:"Generating images for download with HTML5 and Canvas",date:"2017-05-01T08:57:00.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/poképroject-adventures-with-lego-bricks-7f24c02f6d9d/",tags:["Medium","Lego","Pokemon","Canvas","Side Project","JavaScript"],title:"PokéProject: Adventures with LEGO Bricks",date:"2017-06-05T11:45:10.366Z",description:"Part 1: Using JavaScript and HTML5 canvas elements to convert images into 2 dimensional LEGO brick plans.",image:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsSAAALEgHS3X78AAADW0lEQVQoz21SaUwTQRRe1EQT44FnoiJiEFRUiBLwFlQOEUoMiRKFGJWAoiFIFDVQtYhBLXi1DYiIthaNEIIIKt4NCFY8qgZ64UJXq+1su0e30K2027qlxjTR9+PNe2++7803bwZyj5jL5WK90WhQqVQwDOsGBtw+ptd/V3xUIAii0WiMRuPfOuQLou12kiKtlNVut3vbec1ms5EUZR0aGrTRdpr+D9mLxto/tBdxB0mMjRmX07vBOieBK8v5qFzuiRmHF/yHbPtlZTNEp/lcVHx/XWRX0Qkvbdg57HA4iGEakUjIffs7d+xlbPTfjpDLzbBLxeNjuXUb55VGheXMLg6dJIzbUPu2su2ToKHrQYYkK5W/Jyp7E297SmNcmrhFLOq6qfnZ5yEzLg9ZpuxMv5adeDEn9nrR/LytEwrCd1SG3Ws/otUNFNSWrOBmRV8qDM7fuSB9ffSpLXlN+Wp93x/ZzIiGji9fhZ2fL7xQ7eWXJxTuFj6WuUdGhvwwZMpaD3S/3FgjmHYoM6m6ApCkd0aQ9+pOp/NcQ2taRfXB0vNHpZJcgWjnSR77YuxWfVdHeBU/+UJJjFgYJr4ym1cobGkeGRsDMYxHNsDwqqbmh6+edbyT337UdrWtQ/5OjhGeEy4/eVjW2lQre37ndXtuo/Tey2eftFqPXpbs/tdYMYzTJ/UpOxy+QAgFwAiAAaB6YNTCMKL/gWK4xWIhcAI347gJp0gLCkwmk9lCEITJbALADFAMoChAIWWvUtXbq9NoEKVaD39Fv32nCRIAFJhZOG6hSdZjVhyjcLYpaRsiaRs2NIhSFvY7QgFBQQnBcyUJcX2cHLu41l13U5eXPy9gzpSVy+MuZvLUxWt4uzKke7ZdyZjDSeequwt1Co7sflhNudIMoInTpq/0nyCKiFBEc6wCkbtapM7OmjrF329J8OrSZG7PgUXHUzg30uLPp06KSS7ueXMYVsQ/bQwRlvSAn9DiDYmbJgeWQeOb/SCKe9dwTXwrf2vQ0ihoRdDmkzPF72eNOrNotXRNYsnawPC1nf29lTC2u/lNwWWuFoGhiPjULTNC+KP9W8aOoU7XG2qkt46kLoxc57cqNIkXUPchcFzZsvV3YlLOxoZExsp1yuv9RFZL9wkBrw/p/w0k1LnjS2SKwQAAAABJRU5ErkJggg==",aspectRatio:1.288936627282492,src:"/static/1*NRj28widDkpcI5InJLhXJA-6304dae221ca5a52896754ded32888be-7a72d.png",srcSet:"/static/1*NRj28widDkpcI5InJLhXJA-6304dae221ca5a52896754ded32888be-8baea.png 158w,\n/static/1*NRj28widDkpcI5InJLhXJA-6304dae221ca5a52896754ded32888be-69705.png 315w,\n/static/1*NRj28widDkpcI5InJLhXJA-6304dae221ca5a52896754ded32888be-7a72d.png 630w,\n/static/1*NRj28widDkpcI5InJLhXJA-6304dae221ca5a52896754ded32888be-514af.png 945w,\n/static/1*NRj28widDkpcI5InJLhXJA-6304dae221ca5a52896754ded32888be-5e778.png 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}}}}}}}});
//# sourceMappingURL=path---blog-uploading-files-to-trello-with-node-js-a54d626dfd8a784ecb48.js.map