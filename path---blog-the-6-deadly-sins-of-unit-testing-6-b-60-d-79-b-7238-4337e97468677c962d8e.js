webpackJsonp([0x675802e03f33],{1441:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/the-6-deadly-sins-of-unit-testing-6b60d79b7238/index.md absPath of file >>> MarkdownRemark",html:'<h1>The 6 Deadly Sins of Unit Testing</h1>\n<hr>\n<p>Not <em>all</em> of the traditional ‘7 deadly sins’ that we know and love apply to such abstract concepts as Unit Testing, but a fair few of them <em>do</em> apply and they plague us regularly in our efforts to create effective, useful tests for our source code. And much like the original 7, recognising and understanding ‘the enemy within’ helps us avoid falling into the same old traps.</p>\n<p>So without further ado, here’s my 6 Deadly Sins of Unit Testing:</p>\n<ul>\n<li>Gluttony</li>\n<li>Sloth</li>\n<li>Pride</li>\n<li>Vanity</li>\n<li>Ignorance</li>\n<li>Wastefulness</li>\n</ul>\n<h2>Gluttony</h2>\n<blockquote>\n<p>“We can’t test <em>just</em> that fragment — we have to test the <em>whole</em> process.”</p>\n</blockquote>\n<hr>\n<blockquote>\n<p>Your tests are bloated. They take <em>ages</em> to execute or they only actually ‘test’ a section of your code as a side-effect of running another function.</p>\n</blockquote>\n<p>If that sounds familiar, it means your code needs refactoring, abstracting or restructuring. Alternatively, it means that your test is actually an <a href="http://en.wikipedia.org/wiki/System_testing"><em>E2E</em></a> or <a href="http://en.wikipedia.org/wiki/Integration_testing"><em>Integration</em></a> test instead of a true <a href="http://en.wikipedia.org/wiki/Unit_testing"><em>Unit</em></a> test.</p>\n<p>Bloated tests are often a symptom of not following a Test Driven Development (TDD) approach to your coding and a sign of poor, non-modular code structures with too many interdependencies.</p>\n<p>Such tests lack an inherent focus, and a lack of focus means that your tests will suffer from more false-positives. Getting false-positives in your tests, and having them fail for reasons unrelated to what you’re trying to test, is unhelpful for a developer because it rarely gives you a good indication of the true issue. In most cases you’ll have multiple — unrelated — tests failing simultaneously, with most of those failures having no true connection to code you’re trying to test; and those multiple failures will be disguising the one or two <em>useful</em> tests that point you in the correct direction.</p>\n<p>And of course, bloated tests are slower and more resource intensive. An ideal testing environment is one where we have instant feedback as we code. If your tests are bloated, the likelihood of being able to have that instant feedback is much reduced.</p>\n<h2>Sloth</h2>\n<blockquote>\n<p>“Unit Tests are extra work. I don’t like extra work.”</p>\n</blockquote>\n<hr>\n<p>Slovenliness and the absence of unit tests usually boils down to one of two scenarios; the first being that in short, you’re too lazy to write unit tests. Well, let’s assume that’s not strictly true. You <em>do</em> want to write those unit tests, but you just can’t figure out how to make them work. <em>Believe me, I know the feeling.</em></p>\n<p>The second scenario is that the lack of unit tests is an indicator that the principles of Test Driven Development aren’t being followed, indicating also that there’s a lack of upfront planning, and perhaps that it’s one of those times when you’ve jumped straight into the code without an idea of how you’re going to solve the problem ahead of you when you start.</p>\n<blockquote>\n<p>Unfortunately for the lazy developer, the solution to absent or untestable code is perseverance and planning — the opposite of laziness!</p>\n</blockquote>\n<p>Learning to make tests that work reliably and effectively is a skill as important as learning to code. Adopting upfront planning isn’t a magic bullet that will help you write effective tests, but refactoring can be the cure-all solution that transforms ugly code into well-structured code.</p>\n<h2>Pride</h2>\n<blockquote>\n<p>“My code is perfect, it’s never going to change, so it doesn’t need tests.”</p>\n</blockquote>\n<hr>\n<blockquote>\n<p>No matter how perfect your code is for its intended purpose, it’s limited by just that — it’s <em>intended</em> purpose. And nobody sticks to using it for just what you intended.</p>\n</blockquote>\n<p>Your tests only follow the ideal scenario, and ignore invalid data and edge cases. You make the mistake of assuming requirements are never going to change. <em>Oh, how foolish you were.</em></p>\n<p>In these scenarios, you might as well have not written your tests in the first place. By only testing how your code behaves when you give it the data <em>it wants</em>, you’re failing on many levels:</p>\n<ol>\n<li>Your tests won’t detect failures caused by invalid data in the real world, and thus they won’t help prevent those errors from reaching the live environment.</li>\n<li>Edge cases and invalid data are essential methods for exploring the limitations of your code, and it <em>should</em> deal with it in a way that’s appropriate. Unit tests are a way of ensuring that you’ve planned for those limitations.</li>\n<li>Just as your tests serve to document how your code is designed to work, they should also document how it should behave when given invalid data — and that’s going to be invaluable in the future.</li>\n</ol>\n<p>Being too <em>Proud</em> of your code means that you’re not looking closely at its limitations, and that you’re making assumptions about the future requirements. In the real world your code needs to be robust <em>and</em> flexible, and you need your tests to make ensure that’s true of your code.</p>\n<h2>Vanity</h2>\n<blockquote>\n<p>“I have over 200 unit tests for my code, I don’t need any more.”</p>\n</blockquote>\n<hr>\n<p>Measuring the effectiveness of your unit tests is a tricky thing. Do you go for your gut feeling? Do you count the total number of tests you’ve created? How complex do your measurements have to be to properly judge that you’ve tested enough of your code?</p>\n<p>We often turn to things like Code Coverage — a metric that we can use to specifically measure which areas of our code are being executed during testing and thus judge which areas are in need of additional testing.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*oHQmbjLVNDJoBQP_ewDzmQ-825d51f2b0fe118f2b06230ef872671c-ed278.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 82.0469798657718%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsSAAALEgHS3X78AAADa0lEQVQozxWTWW/iBhSF/YurNhAwi40XMDZL1mkyCZCYLSEQ4wUDxjbgHRuwIWRhMotmpD6MVPVh+g/qvh3pSvdcfedcgA2O+G2ZDUq1SeZGhjmjws1p1j+uq2jbIHoO2ZtBwgIXV2RzhreNXNct3MpIW8/dWyTAbY6Fp5PB0ymtYNfDtGg1h/oDH5xWx9C9RXFesTtJSB6u+CQtIy0tx3jl6jhzZ+S7ThEITfjNibg7a82zl3xStG+HRov3z2pSpq2TgluY6qC9hO0g21Sx5jzXc0o3UuhMdKwC4L/nV3tiukTGRmpsgppbMdw7/70oW4mpl3ED5G0Z+bqJf9lBczc9C7c8ZWU7NfVgbYkCv3Tk7zm0Z6Nu47eX3h/vevXriv1l5d56v38fxn/0oQ2eeMvD387xL/3odzH2U4H2zME3/vD7MAkEPrHdkosQiRBTZNDUPzpma7spTpWkYWEbA/3JHPwrxP6R0uY0bZmZpZtVlVAgtoUD5r5ovFLMHGoODh/k+Myrm17f+XTCzBKDBWp62YA7+CyB7xrCaTDvoBOfZGapoYNIXhbwX/PuFmdHEWYYGaoxfXGpO/XgragYSc1FvADzndjzOrV/QnwP3K6Tb8+IaqbmDmyuMIDdnHbc4oUAnTGJqxEk2v9HxQZnlXGmoec5r6C78eUWWj/j/TBwC5XXVFVCGhpxZxYAfUfJHsaHZ3PRRxlUncrUbhq7IqMmJBdTnDzbhSeD7FQpMFNYsFE1oBglNV6gEy8HKGtCtJCenGyJ8a6aVBa12aJjvByzGjRYZDWXWIqxFzX9YqCikREdVFnnWS0U2NglAJ2j5n3i4RpsfogyNdCZ3i80zpVOeDo16WRtngiYw/0o+UlGR21Y6qAGT/F1aNLB1EcCGKyOHo18Y4xW2FRDyohadaDcDrzj5gTt6SRrl1pjlDEozik1JvjdPN9fHDUltKsT/bBh3O6E2ZTPWbB0H/lTAENgI6Mn7D5cj9L0nBA8Ujejaz8V7DBWSwtWRgmoigTTs2zYfIDzj/urMq3gFTFzK2O8WRO0RvgYtIy2TUpakZ/Xkb+eYz9eIUGDRAsLgdUV7M4kH+wCcM1hVDWav47krw5KdOy2d053LmtCrlyPXzwiFQ4/b8RuWJgW0HIzcfoAX3HhCLx4hD/20f8AEKR4QZesDZMAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 oHQmbjLVNDJoBQP ewDzmQ"\n        title=""\n        src="/static/1*oHQmbjLVNDJoBQP_ewDzmQ-825d51f2b0fe118f2b06230ef872671c-082ce.png"\n        srcset="/static/1*oHQmbjLVNDJoBQP_ewDzmQ-825d51f2b0fe118f2b06230ef872671c-c7cb1.png 158w,\n/static/1*oHQmbjLVNDJoBQP_ewDzmQ-825d51f2b0fe118f2b06230ef872671c-93041.png 315w,\n/static/1*oHQmbjLVNDJoBQP_ewDzmQ-825d51f2b0fe118f2b06230ef872671c-082ce.png 630w,\n/static/1*oHQmbjLVNDJoBQP_ewDzmQ-825d51f2b0fe118f2b06230ef872671c-c4006.png 945w,\n/static/1*oHQmbjLVNDJoBQP_ewDzmQ-825d51f2b0fe118f2b06230ef872671c-ed278.png 1192w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Code Coverage statistics — like Unit Tests themselves — are an indicator of quality code. If you have the stats, then you probably have the quality code.</p>\n<blockquote>\n<p>What constitutes ‘enough’ tests is reliant on your judgement, and it’s all too easy to get suckered in by numbers alone.</p>\n</blockquote>\n<p>Never assume that you have enough tests, or that simply achieving the fabled 100% Code Coverage statistic is going to be enough. Keep adding to the tests and expand your scenarios as new things crop up. Likewise you should also not assume that acheiving and maintaining 100% code coverage is going to solve all of your problems. All in all,</p>\n<blockquote>\n<p>Your statistics are not the only measure of success, so don’t get obsessed with them.</p>\n</blockquote>\n<h2>Ignorance</h2>\n<blockquote>\n<p>“I didn’t write that code, so I don’t need to test any of it.”</p>\n</blockquote>\n<hr>\n<p>There’s a natural separation between the code that you’ve <em>written</em> and the library or 3rd party plugin code that you’re <em>using</em> in your project, and with that comes the obvious border between what you <em>should</em> and <em>shouldn’t</em> be testing.</p>\n<p>The difficulty comes with the integration points between that externally developed code and your own. It’s easy to assume that other people’s code is stable and well-tested, but maintaining a willful ignorance because of that and not validating your expectations of their code can lead to more unexpected code <em>weirdness</em>.</p>\n<blockquote>\n<p>You can still have ‘Black Box’ code in your project and be ignorant of how it works, so long as you remember to test the point at which it’s integrated with your own.</p>\n</blockquote>\n<h2>Wastefulness</h2>\n<blockquote>\n<p>“I have loads of tests that all essentially say the same thing.”</p>\n</blockquote>\n<hr>\n<p>Pointless tests, duplicated tests, and tests that essentially all say the same thing. Sound familiar? <em>Wasteful</em> testing has a tendency to be a side-effect of your own <em>Vanity</em> in pursuit of the elusive ‘code coverage’ statistics or overall ‘number of test’ targets.</p>\n<p>In one sense, it’s logical to be incremental in your development. On the other hand, if an entire test or test suite fails on a single assertion, does it really matter if it’s failing because a single specific check fails or because several vague ‘incremental’ checks fail? Or put it this way; would you rather work with (and crucially, maintain) tests like this:</p>\n<p>check(\'expected api\', function() {<br>\n...<br>\nexpect(obj).toBeDefined();<br>\nexpect(obj).toBeType(\'object\');<br>\nexpect(obj.init).toBeDefined();<br>\nexpect(obj.init).toBeType(\'function\');<br>\nexpect(obj.init()).toBeType(\'object\')<br>\n...<br>\n});</p>\n<p>Or this?</p>\n<p>check(\'expected api\', function() {<br>\n...<br>\nexpect(obj.init()).toBeType(\'object\');<br>\n...<br>\n});</p>\n<p>They’re both going to fail when it comes to that final, specific check. Your verbosity isn’t really helping you at all here.</p>\n<blockquote>\n<p>‘<em>Keep it Lean’</em>, as they like to say in the Agile world.</p>\n</blockquote>\n<hr>\n<p>And there you have it — the six ‘deadly sins’ that undermine our efforts to develop and maintain effective Unit Tests for our code.</p>',frontmatter:{title:"The 6 Deadly Sins of Unit Testing",date:"September 28, 2014",tags:null,url:"https://medium.com/@psyked_james/the-6-deadly-sins-of-unit-testing-6b60d79b7238",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEDAgT/xAAWAQEBAQAAAAAAAAAAAAAAAAADAAH/2gAMAwEAAhADEAAAActc+Vy4wf/EABkQAAMBAQEAAAAAAAAAAAAAAAECEQASMv/aAAgBAQABBQILcfRQVqhWnch9/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEREiH/2gAIAQMBAT8ByCjP/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEREiH/2gAIAQIBAT8B2SyP/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAEQETEh/9oACAEBAAY/AleS6Z1l4f/EABsQAAMBAAMBAAAAAAAAAAAAAAABESExQWFR/9oACAEBAAE/IYqLUg75LLvh8gVziuoW17jEjd8Jn//aAAwDAQACAAMAAAAQm9//xAAXEQEBAQEAAAAAAAAAAAAAAAABACFB/9oACAEDAQE/EExnhf/EABYRAQEBAAAAAAAAAAAAAAAAAAEAIf/aAAgBAgEBPxAdYj//xAAcEAEAAwADAQEAAAAAAAAAAAABABEhMUFRobH/2gAIAQEAAT8QINCQu/WW5joaaF5XlZGNEDDhiKjn9yNqIdOzzbhBGoOF+T//2Q==",aspectRatio:1.6,src:"/static/1*EdvNML9-fMAhW7yrrntxWA-6e9346cda3aa0abbec1f6aa2d7eca5c7-f2ac0.jpeg",srcSet:"/static/1*EdvNML9-fMAhW7yrrntxWA-6e9346cda3aa0abbec1f6aa2d7eca5c7-567e3.jpeg 158w,\n/static/1*EdvNML9-fMAhW7yrrntxWA-6e9346cda3aa0abbec1f6aa2d7eca5c7-c3206.jpeg 315w,\n/static/1*EdvNML9-fMAhW7yrrntxWA-6e9346cda3aa0abbec1f6aa2d7eca5c7-f2ac0.jpeg 630w,\n/static/1*EdvNML9-fMAhW7yrrntxWA-6e9346cda3aa0abbec1f6aa2d7eca5c7-0c4a5.jpeg 945w,\n/static/1*EdvNML9-fMAhW7yrrntxWA-6e9346cda3aa0abbec1f6aa2d7eca5c7-4e530.jpeg 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}},description:"Much like the ‘original 7', recognising and understanding ‘the enemy within’ helps us avoid falling into the same old traps."}}},pathContext:{prev:{frontmatter:{path:"/blog/git-zero-to-git-hero-900578ab90c2/",tags:null,title:"Git Zero to Git Hero",date:"2014-09-14T21:58:01.486Z",description:"Mastering git requires a mentor. Let me be yours.",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGezPomkixP/8QAGRAAAwADAAAAAAAAAAAAAAAAAAECITEy/9oACAEBAAEFAkxRg0Rwz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABwQAAEDBQAAAAAAAAAAAAAAAAABAhADESFhcf/aAAgBAQAGPwIVLZ7DSpqP/8QAHBAAAgEFAQAAAAAAAAAAAAAAAAExESFBYXHh/9oACAEBAAE/IWV4X4rnUNjkU+l6HstGHD//2gAMAwEAAgADAAAAEKPP/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAh/9oACAEDAQE/EAyf/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/EFdtv//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExUWFBgZH/2gAIAQEAAT8QukQarYOOu4i0mB0K4+HuDeoQHpVbzCXilc+11jiJ8o//2Q==",aspectRatio:1.7777777777777777,src:"/static/1*fBeL90Mv68uUg15HtKliUA-c72b3c4a0a9f99c7c033f8e661eadef5-f2ac0.jpeg",srcSet:"/static/1*fBeL90Mv68uUg15HtKliUA-c72b3c4a0a9f99c7c033f8e661eadef5-567e3.jpeg 158w,\n/static/1*fBeL90Mv68uUg15HtKliUA-c72b3c4a0a9f99c7c033f8e661eadef5-c3206.jpeg 315w,\n/static/1*fBeL90Mv68uUg15HtKliUA-c72b3c4a0a9f99c7c033f8e661eadef5-f2ac0.jpeg 630w,\n/static/1*fBeL90Mv68uUg15HtKliUA-c72b3c4a0a9f99c7c033f8e661eadef5-0c4a5.jpeg 945w,\n/static/1*fBeL90Mv68uUg15HtKliUA-c72b3c4a0a9f99c7c033f8e661eadef5-4e530.jpeg 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}}}},next:{frontmatter:{path:"/blog/amateur-data-spelunking",tags:null,title:"Amateur data spelunking",date:"2014-10-07T16:37:30.166Z",description:"Raw data has a strangely alluring quality — it has the power to answer all of your questions, as well as the power to ask even more.",image:null}}}}}});
//# sourceMappingURL=path---blog-the-6-deadly-sins-of-unit-testing-6-b-60-d-79-b-7238-4337e97468677c962d8e.js.map