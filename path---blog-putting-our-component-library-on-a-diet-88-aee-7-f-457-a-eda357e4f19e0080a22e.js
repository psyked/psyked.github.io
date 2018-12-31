webpackJsonp([32031186749192],{1412:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/putting-our-component-library-on-a-diet-88aee7f457a/index.md absPath of file >>> MarkdownRemark",html:'<p>Photo by <a href="https://unsplash.com/photos/bSpqe48INMg?utm_source=unsplash&#x26;utm_medium=referral&#x26;utm_content=creditCopyText">Bernard Hermant</a> on <a href="https://unsplash.com/search/photos/balloon?utm_source=unsplash&#x26;utm_medium=referral&#x26;utm_content=creditCopyText">Unsplash</a></p>\n<p>A shared set of components is a great idea, so long as using those components doesn’t bloat your client applications. This is a brief tale of how we got it wrong, what the cause of our issues was, and how we fixed it.</p>\n<hr>\n<h4>Introduction</h4>\n<p>At c<a href="http://tech.comparethemarket.com">omparethemarket.com</a> we produce an internal library of React Components which are used across different portions of our website, which is part of a strategy that we refer to as ‘inner sourcing.’ It’s a great idea for getting consistency across our sites, but we soon realised that we had a bit of a problem with performance, page weight and download times.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*GP4hZgcAS1FRAoOs6NEj1A-a91fb0cf410c5192f36c6d1646f340e5-d19de.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 16.129032258064516%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAIAAAAcOLh5AAAACXBIWXMAAAsSAAALEgHS3X78AAAAmElEQVQI1x2Jyw6CMBAA+f9fM5JoAoIIfYdCYelugbY30clcJlPUylhnUVfBrJ6TGEFYINu7mctlMMKqYbpJxTjzj3utRamFltJpBwqK+l1fwxrJP4xd9rKp+LoBrGYhh/5ADIBIhPsGGGhecVloDyGfuei7Z9t27IKzpn1ZPU3DYPtyVO0GI+IR/6SYzphyjkTRbzH9Kn4BupmjRZG5uWEAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 GP4hZgcAS1FRAoOs6NEj1A"\n        title=""\n        src="/static/1*GP4hZgcAS1FRAoOs6NEj1A-a91fb0cf410c5192f36c6d1646f340e5-082ce.png"\n        srcset="/static/1*GP4hZgcAS1FRAoOs6NEj1A-a91fb0cf410c5192f36c6d1646f340e5-c7cb1.png 158w,\n/static/1*GP4hZgcAS1FRAoOs6NEj1A-a91fb0cf410c5192f36c6d1646f340e5-93041.png 315w,\n/static/1*GP4hZgcAS1FRAoOs6NEj1A-a91fb0cf410c5192f36c6d1646f340e5-082ce.png 630w,\n/static/1*GP4hZgcAS1FRAoOs6NEj1A-a91fb0cf410c5192f36c6d1646f340e5-d19de.png 930w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>A (cropped) screenshot of the network chart from WebPageTest.org</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*tJ0KsYyUuJHv1N5niwnztA-81cd9db03918d611c37fcb92ff304e58-74a12.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 13.999999999999998%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAIAAAAcOLh5AAAACXBIWXMAAAsSAAALEgHS3X78AAAAk0lEQVQI1w2M2w6DIBAF/f8fbNPUikaQ2y4Li1z0wZLMwyRnciZx4G93P+kU8GZolsO9wrwoGJP0LIFXQ4vyu0+ainTpvar5QI1lEia61DVVx9fADg+V2qNDUZA/m/H5trGNx9Sf2J8D8ktpW69Unsk7RxQQICBGoswpEfVamBMiCLGcmQfWmKvVu7cYRuy/BHzWPzoXpu5B/7M2AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 tJ0KsYyUuJHv1N5niwnztA"\n        title=""\n        src="/static/1*tJ0KsYyUuJHv1N5niwnztA-81cd9db03918d611c37fcb92ff304e58-082ce.png"\n        srcset="/static/1*tJ0KsYyUuJHv1N5niwnztA-81cd9db03918d611c37fcb92ff304e58-c7cb1.png 158w,\n/static/1*tJ0KsYyUuJHv1N5niwnztA-81cd9db03918d611c37fcb92ff304e58-93041.png 315w,\n/static/1*tJ0KsYyUuJHv1N5niwnztA-81cd9db03918d611c37fcb92ff304e58-082ce.png 630w,\n/static/1*tJ0KsYyUuJHv1N5niwnztA-81cd9db03918d611c37fcb92ff304e58-c4006.png 945w,\n/static/1*tJ0KsYyUuJHv1N5niwnztA-81cd9db03918d611c37fcb92ff304e58-85e68.png 1260w,\n/static/1*tJ0KsYyUuJHv1N5niwnztA-81cd9db03918d611c37fcb92ff304e58-38b38.png 1890w,\n/static/1*tJ0KsYyUuJHv1N5niwnztA-81cd9db03918d611c37fcb92ff304e58-74a12.png 2000w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>A (cropped) screenshot from the Chrome DevTools</p>\n<p>The screenshots (above) shows some stats from one of our pages, which was using an early version of our component library. From this we could see that the Javascript file needed to load our page was around 300 KB in size, and uncompressed on the customer’s browser to a meaty 1.2 MB of raw code. 😱</p>\n<p>The indicative performance impact of this single file — as shown in the WebPageTest.org snapshot above — is approximately half a second. That’s half a second of the browser doing literally nothing other than downloading, parsing and executing this file, during which it displays a nothing to the user.</p>\n<blockquote>\n<p>Generally speaking, the majority of website performance issues are Front-End problems, and not hardware or network issues.</p>\n</blockquote>\n<p><a href="https://www.stevesouders.com/blog/2012/02/10/the-performance-golden-rule/" title="https://www.stevesouders.com/blog/2012/02/10/the-performance-golden-rule/"><strong>the Performance Golden Rule</strong><br>\n<em>Yesterday I did a workshop at Google Ventures for some of their portfolio companies. I didn’t know how much performance…</em>www.stevesouders.com</a><a href="https://www.stevesouders.com/blog/2012/02/10/the-performance-golden-rule/"></a></p>\n<p>This single file is actually a React application which renders the whole page. It is render-blocking, meaning that it must be downloaded and parsed by the browser before anything on the page can display, and thus this one single file is one big problem for performance.</p>\n<h3>Page Size Matters</h3>\n<p>Everything about Page Speed and Performance is all intermingled, but Javascript file size is a good indicator of how long the file will take to download, be parsed by the browser, and then execute.</p>\n<p>There’s a certain amount of file size we can’t avoid with our Javascript. We need libraries like React for the experience we’re developing, and a shared library of components is a sensible idea, but something somewhere has gone horribly wrong if our output bundle size is so huge. — In some cases, we were seeing reports of<strong>+500Kb</strong> file size being introduced on the addition of a single button, so something wasn’t correct.</p>\n<h3>Experiment Driven Development</h3>\n<p>To take a closer look at what’s going on, we created a simple React application, looked at the application size, added a single (styled Button) component, and looked at the application size again.</p>\n<p>The <a href="https://facebook.github.io/create-react-app/">create-react-app</a> tool outputs some pretty decent metrics as part of its default build process, so this became our quick-and-easy, side-effect free environment for testing the impact our library has on build sizes. (There could quite conceivably be issues elsewhere in the code of those making these reports, so it’s important to have a reliable benchmark.)</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*ClStjmpOU1aVgY8WToWyBw-88504fb44e65395c2b76024c8de8cb5a-74a12.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 31.95%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsSAAALEgHS3X78AAABCUlEQVQY01WQ3U+CYBjFX3BgF6QIjuIjawHDWKkQGOC0G7e2rgTReHn5vqjV//8HBGNT2c7db+c55zlgaMIbJx3MI/IFErMYPO6AvAOK34q10e1bMphFuBoQz199A2Gqf6KAszNpVYle+bD9Vj7/ODejLIRreyA3mHcL3skFt5hsSnn7M/n4pezkbGaXqbSpBC+/W+ecg0g97E33mBo0TPY5NxfXpbjK79+L8RL1tADXwrOZMlPBq0ZGfKUfcSVoOl/Upu2sDh8uYF8/Ys25DgW0AQU3Y8waH/A28CTZZ15jycvoRUQ+HTrftmLMepJiZCDWSq/nsBnsArNWwjt1cjy2UmIadmIV/x+liUKKvvi4OwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 ClStjmpOU1aVgY8WToWyBw"\n        title=""\n        src="/static/1*ClStjmpOU1aVgY8WToWyBw-88504fb44e65395c2b76024c8de8cb5a-082ce.png"\n        srcset="/static/1*ClStjmpOU1aVgY8WToWyBw-88504fb44e65395c2b76024c8de8cb5a-c7cb1.png 158w,\n/static/1*ClStjmpOU1aVgY8WToWyBw-88504fb44e65395c2b76024c8de8cb5a-93041.png 315w,\n/static/1*ClStjmpOU1aVgY8WToWyBw-88504fb44e65395c2b76024c8de8cb5a-082ce.png 630w,\n/static/1*ClStjmpOU1aVgY8WToWyBw-88504fb44e65395c2b76024c8de8cb5a-c4006.png 945w,\n/static/1*ClStjmpOU1aVgY8WToWyBw-88504fb44e65395c2b76024c8de8cb5a-85e68.png 1260w,\n/static/1*ClStjmpOU1aVgY8WToWyBw-88504fb44e65395c2b76024c8de8cb5a-38b38.png 1890w,\n/static/1*ClStjmpOU1aVgY8WToWyBw-88504fb44e65395c2b76024c8de8cb5a-74a12.png 2000w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>On the left: The out-of-the-box app. On the right: With a single component added.</p>\n<p>It’s not quite +500 KB gzipped, but 75 KB is still an excessive amount of code for a single styled Button. Looking at the output bundles, it soon became clear that what was happening is that when we include any component, we’re also getting the source code of a dozen other components whose source code is also included in our library, but isn’t actually being used by our sample application. Not good.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*jIJwzDv3t26povgiIjAo3Q-ae66bec75c129dbaeda981358016de07-2f776.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.64999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBBP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAeOUGJH/xAAZEAEAAgMAAAAAAAAAAAAAAAAAASEREkH/2gAIAQEAAQUCnVFKZcl//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFhAAAwAAAAAAAAAAAAAAAAAAECAx/9oACAEBAAY/AhE//8QAHBAAAgICAwAAAAAAAAAAAAAAASEAEUGBEFFx/9oACAEBAAE/IUIWfJTDcLZbhas98ENT/9oADAMBAAIAAwAAABDcD//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/EKf/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPxCH/8QAHBABAQACAgMAAAAAAAAAAAAAAREAITFBcYGh/9oACAEBAAE/EIUyQvAfmK13vBieMbVUarhlbSRuX1lNpG6TNkdZ/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 jIJwzDv3t26povgiIjAo3Q"\n        title=""\n        src="/static/1*jIJwzDv3t26povgiIjAo3Q-ae66bec75c129dbaeda981358016de07-af57e.jpeg"\n        srcset="/static/1*jIJwzDv3t26povgiIjAo3Q-ae66bec75c129dbaeda981358016de07-847f7.jpeg 158w,\n/static/1*jIJwzDv3t26povgiIjAo3Q-ae66bec75c129dbaeda981358016de07-93973.jpeg 315w,\n/static/1*jIJwzDv3t26povgiIjAo3Q-ae66bec75c129dbaeda981358016de07-af57e.jpeg 630w,\n/static/1*jIJwzDv3t26povgiIjAo3Q-ae66bec75c129dbaeda981358016de07-28cf9.jpeg 945w,\n/static/1*jIJwzDv3t26povgiIjAo3Q-ae66bec75c129dbaeda981358016de07-0d474.jpeg 1260w,\n/static/1*jIJwzDv3t26povgiIjAo3Q-ae66bec75c129dbaeda981358016de07-66f39.jpeg 1890w,\n/static/1*jIJwzDv3t26povgiIjAo3Q-ae66bec75c129dbaeda981358016de07-2f776.jpeg 2000w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Photo by <a href="https://unsplash.com/photos/466ENaLuhLY?utm_source=unsplash&#x26;utm_medium=referral&#x26;utm_content=creditCopyText">Markus Spiske</a> on <a href="https://unsplash.com/search/photos/dead-code?utm_source=unsplash&#x26;utm_medium=referral&#x26;utm_content=creditCopyText">Unsplash</a></p>\n<h4>Tree Shaking / Dead code elimination</h4>\n<p>All of this additional code for unused components is increasing our bundle size, but I had expected Webpack — with its native support for <a href="https://webpack.js.org/guides/tree-shaking/">dead code elimination</a> — to automagically remove that unused library code and deliver a more optimised bundle.</p>\n<p><a href="https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/" title="https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/"><strong>Reduce JavaScript Payloads with Tree Shaking | Web Fundamentals | Google Developers</strong><br>\n<em>Knowing where to begin optimizing your application\'s JavaScript can be daunting. If you\'re taking advantage of modern…</em>developers.google.com</a><a href="https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/"></a></p>\n<p>So, why didn’t it?</p>\n<p>The answer to this question is complex and fairly specific to our project, but it involves our Babel configuration, our CommonJS output format and our use of CSS modules. All of these elements combine to create library bundles which fundamentally cannot be tree-shaken by Webpack.</p>\n<p>So, how to we build a tree-shakable library bundle?</p>\n<h3>A better bundler… with rollup.js</h3>\n<p>After a lot of experimenting with different options and configurations for Webpack, we eventually realised that it was ‘the wrong tool for the job’ when it came to building our bundle of library components. As a replacement we picked <a href="https://rollupjs.org/guide/en">rollup.js</a>, which amongst other perks is better at producing library bundles that supports dead code elimination.</p>\n<p><a href="https://rollupjs.org/guide/en" title="https://rollupjs.org/guide/en"><strong>rollup.js</strong><br>\n<em>Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex…</em>rollupjs.org</a><a href="https://rollupjs.org/guide/en"></a></p>\n<p>Our consumer applications still use Webpack to package our final React applications, but using rollup.js for our library bundles now means that when Webpack compiles its output, it’s able to tree shake our library code and eliminate the components that aren’t used.</p>\n<p>And the final results?</p>\n<p>On our example project, switching to Rollup-bundled libraries immediately saves an extra 22 KB out of 75 KB (almost 30%) with literally no changes to the example application itself.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*IfqILOaabFh4BSnX1HcOIQ-a16ab31c997bad068084d84c3e365de7-74a12.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 32.3%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsSAAALEgHS3X78AAABAklEQVQY02MQMI6Sto7n0w9nVAlk0ghh0YtkVA1iUA5kUAEhUbMYCatYHv1wIJtJM4xFJwIuBUKiprHSlgni5vFS1nFyjqly7tkClvGMakEQaQmguGWChEU80AJ5pzQZ90xes1iEZhHzWFn7JGmbBHmHJBmbeC7tUGaNEJDlYGlxq3gZ20RZ20QFhyQpqzgO7RAmjWCEZh7jWAmrJAGDKG7dcGagHqUABuUAuLSAabyERQKffiSXTjiTaiCaLIOAUaSsTYKISTSHVhijKpJ/wEjYNFrWJl7IKIpdE4ssg5hprKJ9CtDnQkYxXDphKAarBEqaxynZpwgZRYuaxgEtR5MFAMsHQx758ubeAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 IfqILOaabFh4BSnX1HcOIQ"\n        title=""\n        src="/static/1*IfqILOaabFh4BSnX1HcOIQ-a16ab31c997bad068084d84c3e365de7-082ce.png"\n        srcset="/static/1*IfqILOaabFh4BSnX1HcOIQ-a16ab31c997bad068084d84c3e365de7-c7cb1.png 158w,\n/static/1*IfqILOaabFh4BSnX1HcOIQ-a16ab31c997bad068084d84c3e365de7-93041.png 315w,\n/static/1*IfqILOaabFh4BSnX1HcOIQ-a16ab31c997bad068084d84c3e365de7-082ce.png 630w,\n/static/1*IfqILOaabFh4BSnX1HcOIQ-a16ab31c997bad068084d84c3e365de7-c4006.png 945w,\n/static/1*IfqILOaabFh4BSnX1HcOIQ-a16ab31c997bad068084d84c3e365de7-85e68.png 1260w,\n/static/1*IfqILOaabFh4BSnX1HcOIQ-a16ab31c997bad068084d84c3e365de7-38b38.png 1890w,\n/static/1*IfqILOaabFh4BSnX1HcOIQ-a16ab31c997bad068084d84c3e365de7-74a12.png 2000w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>On the left: Create-react-app using our library packaged with Webpack, on the right: using the library packaged with rollup.</p>\n<p>Even more exciting is the effect when we applied this same updated library to a real-world example, which yielded optimisations closer to 60% of the total file size:</p>\n<pre><code>File sizes after gzip:  287.02 KB (-430.7 KB)  build/static/js/main.5978ff57.js\n</code></pre>\n<p><strong>430.7 KB</strong> saved from our output bundle, thanks to using a tree-shakable React Component library, bundled with properly-configured Rollup instead of our out-of-the-box Webpack configuration.</p>\n<h3>Summary</h3>\n<p>Our React Component library was part of a natural evolution from several projects, but we took our eye off the performance impact of the code that we were building and it quickly snowballed into something that had detrimental effect on the projects that included it.</p>\n<p>The root cause of this problem was our bundling strategy, and the fact that it couldn’t determine which code was necessary to render the components, so it always included everything.</p>\n<p>The solution was to shift our bundling strategy into Rollup and also to change our Babel configuration to one that better supported dead-code elimination.</p>\n<p>Webpack isn’t a bad tool, but it has to be configured properly and used for the correct tasks, and because of the gradual nature of our project evolution, our setup wasn’t suitable. Pausing, evaluating, and spending some time focussing on our build processes has allowed us to make these gains.</p>\n<h3>Key Takeaways</h3>\n<ul>\n<li>Javascript syntax patterns, such as CommonJS, have different side effects when it comes to dead-code elimination in your code bundler.</li>\n<li>Webpack is good for bundling projects, but Rollup is better for libraries.</li>\n<li>You’re still going to need Babel, regardless of whether you’re working with Webpack or Rollup. It’s the Babel configuration which has the biggest effect on the outcome.</li>\n<li>Test, test and test again, and do it in an environment that is representative of your anticipated customers’ workspace.</li>\n</ul>\n<hr>\n<h3>Bonus: Create-React-App 2 &#x26; Webpack 4</h3>\n<p>Since originally penning this article, we’ve had clients update to using <a href="https://github.com/facebook/create-react-app">create-react-app</a> version 2 and Webpack 4, which delivers even more benefits to our bundle size and performance, with no additional code changes.</p>\n<p>Repeating the tests with version 2 yields these results in our example application:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*2JGy_KCP4AB-c-MooUlH0g-b37a6d70d7191106f598afaa651d853c-74a12.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 33.800000000000004%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsSAAALEgHS3X78AAABOklEQVQY01WQW0/CQBCFWwGLQEAuQhFJtV0qoCzSikAgQpT66hYplLKllUsk8RX/v0MoqSYn+zDfzM45w8jDr1xrkVTmcWwGbz8YpINYeEWSadplbZvvuGmVnjcsrjw+gbpEDj17FXpOUrU4bIUVGqgYMOMBkcQfzKuec9m2TyvjUMXgGpSrW6w88oczzUVaofzLVtB3vPYdqhoelki8PuNbi+jdBHxl245AdsLoJ6La/gI03FwPlmi4krV1oecmnmiwauy9iQSsSq+b4vNS1jby21rofwLlsMlIx825jgsfg2J4yiDC3Lx7qSRyVjNz3WUKqDpPNGZsSd9T8U9mvuNePNLI/YQ9nKp0BBIJYxNotkmjNTNQGkHFp95d+qt8207CMasT388hM56iwarYdVKKFcMzFv2fRPovKVBPH/Q736oAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 2JGy KCP4AB c MooUlH0g"\n        title=""\n        src="/static/1*2JGy_KCP4AB-c-MooUlH0g-b37a6d70d7191106f598afaa651d853c-082ce.png"\n        srcset="/static/1*2JGy_KCP4AB-c-MooUlH0g-b37a6d70d7191106f598afaa651d853c-c7cb1.png 158w,\n/static/1*2JGy_KCP4AB-c-MooUlH0g-b37a6d70d7191106f598afaa651d853c-93041.png 315w,\n/static/1*2JGy_KCP4AB-c-MooUlH0g-b37a6d70d7191106f598afaa651d853c-082ce.png 630w,\n/static/1*2JGy_KCP4AB-c-MooUlH0g-b37a6d70d7191106f598afaa651d853c-c4006.png 945w,\n/static/1*2JGy_KCP4AB-c-MooUlH0g-b37a6d70d7191106f598afaa651d853c-85e68.png 1260w,\n/static/1*2JGy_KCP4AB-c-MooUlH0g-b37a6d70d7191106f598afaa651d853c-38b38.png 1890w,\n/static/1*2JGy_KCP4AB-c-MooUlH0g-b37a6d70d7191106f598afaa651d853c-74a12.png 2000w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>On the left: Create-react-app 2, on the right: with our library added</p>\n<p>And here’s a real world example of the bundle size output on <strong>create-react-app</strong> version 1.1.4:</p>\n<pre><code>File sizes after gzip:\n\n  188.49 KB  build/static/js/main.53169928.js  112.37 KB  build/static/js/BasicQuestions.9168ec4c.chunk.js  110.43 KB  build/static/js/ComplexQuestions.5706b399.chunk.js  110.4 KB   build/static/js/SubQuestions.194d1d33.chunk.js  110.3 KB   build/static/js/CustomQuestions.736521d5.chunk.js\n\nFile sizes after gzip:\n\n  255.75 KB  build/static/js/main.b68bc851.js  846 B      build/static/css/main.a86b8cd7.css\n</code></pre>\n<p>And the same real-world project again, this time using <strong>create-react-app</strong> version 2:</p>\n<pre><code>File sizes after gzip:\n\n  112.58 KB              build/static/js/7.58c36855.chunk.js  66.56 KB               build/static/js/0.72b13458.chunk.js  65.62 KB (-122.87 KB)  build/static/js/main.20b9faa3.chunk.js  40.56 KB               build/static/js/1.ac53a9a6.chunk.js  3.32 KB (-109.06 KB)   build/static/js/BasicQuestions.6df1fce5.chunk.js  1.47 KB (-108.96 KB)   build/static/js/ComplexQuestions.61562335.chunk.js  1.44 KB (-108.97 KB)   build/static/js/SubQuestions.d5066422.chunk.js  1.24 KB (-109.06 KB)   build/static/js/CustomQuestions.b2e5a8af.chunk.js  1.24 KB                build/static/js/runtime~main.6da60b22.js\n\nFile sizes after gzip:\n\n  156.02 KB              build/static/js/1.c932bec8.chunk.js  89.89 KB (-165.86 KB)  build/static/js/main.2f744215.chunk.js  837 B (-9 B)           build/static/css/main.8ee9f0fa.chunk.css  763 B                  build/static/js/runtime~main.229c360f.js\n</code></pre>\n<p>A ‘simple’ upgrade that implements cleverer bundle splitting for shared code libraries, and we’ve automatically saved even more 100’s of KB across the site, which is pretty neat. 👍</p>',frontmatter:{title:"Putting our Component library on a diet.",date:"November 06, 2018",tags:["JavaScript","Rollup","Webpack","Front End Development","Tech"],url:"https://medium.com/comparethemarket/putting-our-component-library-on-a-diet-88aee7f457a",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEDBP/EABYBAQEBAAAAAAAAAAAAAAAAAAIBBP/aAAwDAQACEAMQAAABd8+nK7DKf//EABoQAAICAwAAAAAAAAAAAAAAAAECAAMQESH/2gAIAQEAAQUCrJFbk7DSs4Vef//EABYRAQEBAAAAAAAAAAAAAAAAAAABIf/aAAgBAwEBPwGVj//EABoRAAICAwAAAAAAAAAAAAAAAAABAhIDESL/2gAIAQIBAT8ByVt0yLno/8QAHBAAAQMFAAAAAAAAAAAAAAAAAQACEBESIYGh/9oACAEBAAY/AqtGULdx2f/EABwQAAMAAgMBAAAAAAAAAAAAAAABESExQVFhgf/aAAgBAQABPyFOQpzejJSl26GTEno6tcNfBlsW7Z//2gAMAwEAAgADAAAAEDD/AP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxDQEJNX/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARMXH/2gAIAQIBAT8QAWnLgQCVP//EABsQAQADAQEBAQAAAAAAAAAAAAEAEWEhMUGB/9oACAEBAAE/EAhQo8D6y3p/WxBUsHlLanUrADXEM5c4lfdd3YVRVVn/2Q==",aspectRatio:1.5003750937734435,src:"/static/1*-urAq0XXMQ4RSLRAiP600Q-ea5369ab9cfc9e5960af3ebe660d0879-f2ac0.jpeg",srcSet:"/static/1*-urAq0XXMQ4RSLRAiP600Q-ea5369ab9cfc9e5960af3ebe660d0879-567e3.jpeg 158w,\n/static/1*-urAq0XXMQ4RSLRAiP600Q-ea5369ab9cfc9e5960af3ebe660d0879-c3206.jpeg 315w,\n/static/1*-urAq0XXMQ4RSLRAiP600Q-ea5369ab9cfc9e5960af3ebe660d0879-f2ac0.jpeg 630w,\n/static/1*-urAq0XXMQ4RSLRAiP600Q-ea5369ab9cfc9e5960af3ebe660d0879-0c4a5.jpeg 945w,\n/static/1*-urAq0XXMQ4RSLRAiP600Q-ea5369ab9cfc9e5960af3ebe660d0879-211f3.jpeg 1260w,\n/static/1*-urAq0XXMQ4RSLRAiP600Q-ea5369ab9cfc9e5960af3ebe660d0879-0150a.jpeg 1890w,\n/static/1*-urAq0XXMQ4RSLRAiP600Q-ea5369ab9cfc9e5960af3ebe660d0879-85f6c.jpeg 2000w",sizes:"(max-width: 630px) 100vw, 630px"}}},description:"Performance matters, and “Houston, we have a problem.”"}}},pathContext:{prev:{frontmatter:{path:"/blog/eslint-visual-studio-code-editor-integration-for-the-win/",tags:["JavaScript","Eslint","Visual Studio Code","Developer Tools","Tech"],title:"ESLint + Visual Studio Code: Editor integration For The Win",date:"2018-10-18T09:31:36.220Z",description:"Coding is complicated so  it helps to have a ‘helping hand’ while you work.",image:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsSAAALEgHS3X78AAADIklEQVRIx5VV21LTUBTtX+gDI5e2NM2lSU7uJ0kLIgi+KKMz4ic5Co6OiMKTzuAo179RB/+ly3VOilJtIT7sOSdts7r2Xnuv3bi4+Dk8Oj7D0cnZ8PjkHPp+GUfj9+MTFef/xuk5vh6d4tv3H2h8/HSI2aY1NDoemh0XLdNDy6jOtu1Xp1XdF/j9fLuH+cU/scBoGR5uz7Txbm8fjb0PB8OO4WM1KId5kCMoC4hBgWip1Hc3zeDL6nPLS2DYIbpONBaWG2OuZWPn1Rs0dom6yH8mIO4zUpFBZjlMJ0bbEOiYARa7VXSsQAP+HWYvZpY2tndeo6FoNkn7HsE2gj5kIJEUJZlJGE6Ijj0OMglUsWTZ8FIB7r3fx522g9hNsSoKlH6OOMgQDZhyX6UZ/waZxnAMUDFsd30EPkF6CSICB1YMiz+ygwTdXjSW7o0MFWCLNSzIbInhsIZmSEA/hi1GZ1gB12KoUp5lyoUv8YA1FIlEujZAtFwi21hCyFM9OyLVAtUCnFM19DKUnoQTMeWlgvVjLVf4B2UOUeT6pVoMd/c+sEY+IjJU9fPcBF6U6VQtUYVKWSteVxTVNhkBV6hy3yOjSMJNMrJNNMh/iaIZmgIJAWUvRUile0GqU1cq39SD/zJkDZuczyzOUQ76iKmybccwrJDMhD6vA5ssSsuBz8InqwMINrPJZp72ci2GykF6NAFXZvBKCS+v1L5sE8VOj6AV1lO5Q5XzqNDGkIVU20vh0lkmtcrNk6IZOpxhiQ1RYsBezAVVZuv0JJmGSmnW05yu9MRJkQRcp+PkPPOsgEwL7Ty2oOpxqoFru42alISToma5T4Yr7MV1v8Qyn92Qk0PD9TM5dVomAuYjhsrC1rQ3lnzuaxcSozG8amW1Znkwcpy7IkfhVZMTcBydhA1Plraf1LOvOY6eYqiYrYlSM10j2Crvgmbrs40UoOnWYnhQ7QX+2LiyeNS9Q0O4/OyyB/9eUNWSSvRwbKsl9Xb3PWbmulyHbrUa21Pimu+aXMG3uEafv9hB4/TsHJuPt7D5ZKs6R/GoZlTvPsPDzac4/PwFvwCQeojD7uSImQAAAABJRU5ErkJggg==",aspectRatio:.7604290822407628,src:"/static/1*xsrntccR6nCD51Gr9zKwvg-c83a04117dffca0c5162e8201047a586-7a72d.png",srcSet:"/static/1*xsrntccR6nCD51Gr9zKwvg-c83a04117dffca0c5162e8201047a586-8baea.png 158w,\n/static/1*xsrntccR6nCD51Gr9zKwvg-c83a04117dffca0c5162e8201047a586-69705.png 315w,\n/static/1*xsrntccR6nCD51Gr9zKwvg-c83a04117dffca0c5162e8201047a586-7a72d.png 630w,\n/static/1*xsrntccR6nCD51Gr9zKwvg-c83a04117dffca0c5162e8201047a586-514af.png 945w,\n/static/1*xsrntccR6nCD51Gr9zKwvg-c83a04117dffca0c5162e8201047a586-6eb3d.png 1260w,\n/static/1*xsrntccR6nCD51Gr9zKwvg-c83a04117dffca0c5162e8201047a586-a1865.png 1276w",sizes:"(max-width: 630px) 100vw, 630px"}}}}},next:{frontmatter:{path:"/blog/recognition-and-rewards/",tags:["Workplace Culture","Recognition Rewards","Software Development","Workplace Relations","Life At Ctm"],title:"Recognition and Rewards",date:"2018-12-04T13:44:59.927Z",description:"Incentivising gratitude in the workplace",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAgUD/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQMEAv/aAAwDAQACEAMQAAAB05WpG3SFClfKq7mTIuLP/8QAHBAAAgICAwAAAAAAAAAAAAAAAAECERIhECIx/9oACAEBAAEFAlN1kxbJIvI7G2K6jkiHvH//xAAXEQEBAQEAAAAAAAAAAAAAAAABABAR/9oACAEDAQE/AQJLuf/EABoRAAICAwAAAAAAAAAAAAAAAAECADEQESH/2gAIAQIBAT8Bd23cDciqDeP/xAAbEAADAAIDAAAAAAAAAAAAAAAAAREQISAxMv/aAAgBAQAGPwLcuYeWjTG9Q6HeH//EABsQAAMAAwEBAAAAAAAAAAAAAAABESExURBx/9oACAEBAAE/IenOCJoqMWF5WJ2ScnWWViQ6I6Z2VrH66NBOxvLbu2f/2gAMAwEAAgADAAAAEIcUDP/EABcRAQEBAQAAAAAAAAAAAAAAAAEAETH/2gAIAQMBAT8QzcsVCWctv//EABgRAAMBAQAAAAAAAAAAAAAAAAABETEh/9oACAECAQE/EMOC6XToJRtn/8QAHxABAQABBAMBAQAAAAAAAAAAAREAITFRYUGBsXHw/9oACAEBAAE/EJSNwbyd94J1icTIoKPWWYgGhCp2YAodWXojr8zaKGo3f+mJ8cEVSEhx+5Qi/Gy9YIG7RHROfuIhVW73Kx185f5Oc//Z",aspectRatio:.7722007722007722,src:"/static/1*NxKaG9HNtdzjS5jkKPevwA-51bee6fdf30907f500ef90cecbfc9972-f2ac0.jpeg",srcSet:"/static/1*NxKaG9HNtdzjS5jkKPevwA-51bee6fdf30907f500ef90cecbfc9972-567e3.jpeg 158w,\n/static/1*NxKaG9HNtdzjS5jkKPevwA-51bee6fdf30907f500ef90cecbfc9972-c3206.jpeg 315w,\n/static/1*NxKaG9HNtdzjS5jkKPevwA-51bee6fdf30907f500ef90cecbfc9972-f2ac0.jpeg 630w,\n/static/1*NxKaG9HNtdzjS5jkKPevwA-51bee6fdf30907f500ef90cecbfc9972-0c4a5.jpeg 945w,\n/static/1*NxKaG9HNtdzjS5jkKPevwA-51bee6fdf30907f500ef90cecbfc9972-211f3.jpeg 1260w,\n/static/1*NxKaG9HNtdzjS5jkKPevwA-51bee6fdf30907f500ef90cecbfc9972-0150a.jpeg 1890w,\n/static/1*NxKaG9HNtdzjS5jkKPevwA-51bee6fdf30907f500ef90cecbfc9972-85f6c.jpeg 2000w",sizes:"(max-width: 630px) 100vw, 630px"}}}}}}}}});
//# sourceMappingURL=path---blog-putting-our-component-library-on-a-diet-88-aee-7-f-457-a-eda357e4f19e0080a22e.js.map