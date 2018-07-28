webpackJsonp([0xb02c5ed2e24c],{1442:function(A,a){A.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/the-dom-monster/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/dom-monster-1ac668ca3c8752df6db369fc2abd9845-41a8d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAB9UlEQVQoz02SzWsTQRjG9x/xIl4UPHgTBS8V2yB4EKoH7VVbiP1M1bbaj2ST/cgmu+3WthH15MGTUvAQsagHq1gQ76KIrohivWjnndkknceZIVsKy7Iz7/u8zzO/WQvcBffBq2hFwArQQCcGBWbTAy/rEs2B5iECiOVsOQE2ZKkOyapII7Ed/ngz822jsJOoQUuyq3eN3gGvgG6DboCmQDPgRSW0QC7SAO3lTb9/7cyhOz0Hn46f3mUxWjWQl4lt81azgn2PEgu/te2mv8PmdN/D/mOPBo6vD51iiSd36jqh9jS2SqyS0y3QTVABbBTsmgXUfm0VPj3Ov6iffzJwsnm1513t4tfnE99fjQChZK4RK9sSqGi+6xAxxCrEXUuq2J168rqwMdkbnT08deLAZnDhc3OY/7TRqkpystgVw28BNAk2DJYHG7F0WXjtv/7L6Vzj3NE4d+Tj+qDkNaQ+KAusT17UnMiGWIRYAV9UExVtR1IFafXtg0vP5nPv712GUPB94+kYTxc0a0ZE+tjadlRHEEuKdkmVO//KyYfxL1v5P8ksZCBZRStpT6nIL2hOCqFY05sa2BWr2yQctD20XZm6WVrblOaM8rq5m1CdE2zMMLsPEVndPrIlK0tWklQ2t2IIabyu+SVibaWWoqHHsUGNjYf/ASwnBEpjZklnAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="The DOM Monster!"\n        title=""\n        src="/static/dom-monster-1ac668ca3c8752df6db369fc2abd9845-41a8d.png"\n        srcset="/static/dom-monster-1ac668ca3c8752df6db369fc2abd9845-bf474.png 158w,\n/static/dom-monster-1ac668ca3c8752df6db369fc2abd9845-d5dd3.png 315w,\n/static/dom-monster-1ac668ca3c8752df6db369fc2abd9845-41a8d.png 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>I\'m always on the look out for new yardsticks to measure by code by, and here\'s another one that I\'ve been introduced to recently. It\'s called <a href="http://mir.aculo.us/dom-monster/" title="The DOM Monster">the DOM Monster</a>, and it\'s something that you can drag and drop into your browser bookmarks bar, and then later click on to evaluate the current HTML page, based on things like its content, complexity, nesting levels and general content optimization.</p>\n<p>The monster gives you a report and a summary of what it\'s found, and it\'s generally a pretty good summary of best practices for your HTML and JavaScript construction, even if it\'s not linking you specifically to the original rules that govern this sort of thing.  All of which will improve your pages\' rendering speed, performance on older machines, and performance on mobile devices, which is what a lot of people care about nowadays.</p>',frontmatter:{title:"The DOM Monster",date:"March 24, 2011",tags:["javascript"],url:null,image:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAB9UlEQVQoz02SzWsTQRjG9x/xIl4UPHgTBS8V2yB4EKoH7VVbiP1M1bbaj2ST/cgmu+3WthH15MGTUvAQsagHq1gQ76KIrohivWjnndkknceZIVsKy7Iz7/u8zzO/WQvcBffBq2hFwArQQCcGBWbTAy/rEs2B5iECiOVsOQE2ZKkOyapII7Ed/ngz822jsJOoQUuyq3eN3gGvgG6DboCmQDPgRSW0QC7SAO3lTb9/7cyhOz0Hn46f3mUxWjWQl4lt81azgn2PEgu/te2mv8PmdN/D/mOPBo6vD51iiSd36jqh9jS2SqyS0y3QTVABbBTsmgXUfm0VPj3Ov6iffzJwsnm1513t4tfnE99fjQChZK4RK9sSqGi+6xAxxCrEXUuq2J168rqwMdkbnT08deLAZnDhc3OY/7TRqkpystgVw28BNAk2DJYHG7F0WXjtv/7L6Vzj3NE4d+Tj+qDkNaQ+KAusT17UnMiGWIRYAV9UExVtR1IFafXtg0vP5nPv712GUPB94+kYTxc0a0ZE+tjadlRHEEuKdkmVO//KyYfxL1v5P8ksZCBZRStpT6nIL2hOCqFY05sa2BWr2yQctD20XZm6WVrblOaM8rq5m1CdE2zMMLsPEVndPrIlK0tWklQ2t2IIabyu+SVibaWWoqHHsUGNjYf/ASwnBEpjZklnAAAAAElFTkSuQmCC",aspectRatio:1.7857142857142858,src:"/static/dom-monster-1ac668ca3c8752df6db369fc2abd9845-1a5b7.png",srcSet:"/static/dom-monster-1ac668ca3c8752df6db369fc2abd9845-05140.png 158w,\n/static/dom-monster-1ac668ca3c8752df6db369fc2abd9845-0131d.png 315w,\n/static/dom-monster-1ac668ca3c8752df6db369fc2abd9845-1a5b7.png 500w",sizes:"(max-width: 500px) 100vw, 500px"}}},description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/i-hate-using-avm1movie/",tags:["actionscript"],title:"I hate using AVM1Movie...",date:"2010-11-22T23:20:19.000Z",description:null,image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAUY6FISI6Wf/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIRAzL/2gAIAQEAAQUCWllbsynLlHPz/8QAFhEAAwAAAAAAAAAAAAAAAAAAEBEh/9oACAEDAQE/AYh//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8BV//EABgQAAMBAQAAAAAAAAAAAAAAAAAQETEh/9oACAEBAAY/AjmrCRf/xAAaEAADAQADAAAAAAAAAAAAAAAAAREhMUHx/9oACAEBAAE/IaRLtyCcqnUzRfE1gVqIkba7HNP/2gAMAwEAAgADAAAAEHjf/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAh/9oACAEDAQE/EHA2L//EABYRAQEBAAAAAAAAAAAAAAAAACEAEf/aAAgBAgEBPxDWJf/EABoQAQADAQEBAAAAAAAAAAAAAAEAESExUUH/2gAIAQEAAT8QOgsgg6szMBJwad2XajToi0+TIFmiKJFfAJyVACyKXR5P/9k=",aspectRatio:1.7857142857142858,src:"/static/avm1movie-hydra-ff368cb583c8ae50b3c20213741b5e54-2a90f.jpg",srcSet:"/static/avm1movie-hydra-ff368cb583c8ae50b3c20213741b5e54-cfd0b.jpg 158w,\n/static/avm1movie-hydra-ff368cb583c8ae50b3c20213741b5e54-92853.jpg 315w,\n/static/avm1movie-hydra-ff368cb583c8ae50b3c20213741b5e54-2a90f.jpg 500w",sizes:"(max-width: 500px) 100vw, 500px"}}}}},next:{frontmatter:{path:"/blog/link-face-tracking-and-3d-scene/",tags:["external-links","flash","face-detection","webcam"],title:"Link: Face-tracking and 3D Scene",date:"2011-03-28T07:56:05.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-the-dom-monster-a02ed67fa80fe2696aad.js.map