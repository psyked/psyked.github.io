webpackJsonp([83793881871257],{1212:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/amateur-data-spelunking/index.md absPath of file >>> MarkdownRemark",html:'<h2>with New Relic Insights</h2>\n<hr>\n<p>In the complicated world of software development there are many, many ways to achieve the same end result, and when those results are visually indistinguishable from one another we end up grasping for some solid (measurable) data for support and reassurance that we are in fact not <em>making things worse</em>.</p>\n<p>In order to understand how well we’re doing we need to collect data, analyse it, extract the useful metrics and find a way to present that information. So, how do we go about that?</p>\n<hr>\n<h3>Harvesting raw data</h3>\n<blockquote>\n<p><em>“Raw data has a strangely alluring quality — it has the power to answer all of your questions, as well as the power to ask even more.”</em></p>\n</blockquote>\n<p>For a few of our projects we’re using a SaaS product called <strong>New Relic</strong><em>.</em> It works slightly like magic, but it essentially sits on our servers and monitors everything that the server does and transmits that data off to New Relic’s service from where you can then access that data.</p>\n<hr>\n<h3>Extracting data from New Relic</h3>\n<p>After logging in to New Relic, we get an initial dashboard that gives us a basic overview of our servers’ status, some performance metrics and specific details of the longest or most active processes on the server.</p>\n<p>This initial dashboard is great for exploring our data relatively quickly, but it’s often not focussed on the <em>business needs</em>, and it’s for that reason that we want to get our hands dirty, dig into the data and create our own custom dashboards that display only the metrics that we’re interested in and are suitable for a fancy permanently-visible display in the office.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*66PfOAVVvgdfXDfKuYl6fQ-467c9b84e1bbdfa605b4b414c8e99f28-85ae7.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 63.125%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAACM0lEQVQoz3VSTU/bQBDNv6g4UNKUthKC2Psxu+usd22v7XyQKIHQSgVaoaAEAohELZAieu2lkXoq9/zVjpPS9tKn0Xp2PO/tG69LnZZrN127kXSarrubN1KdWpZankWQxSL/TzRc0Mp0CWSgAs1BYmBOGeDWRDFw7nueT1gRlP1O/gRlhLLSbHaX5xmhREohhQABWslQALcxqWkgvvA94VeBkmVeFZRgBXPGWGk+n3e73TzPKYIxTnxvt1c5HK7dfHv29Ud59OnV+9M3Bx82D4fl4efN49F2vb3VOdja3cfeUhAEAKCUQiXGC6/bnf761cOLs5vy+d3G1cPG5T2u5YtZ+fJ+/eK+cjrdGM9enk6oEAW5oBC6AiooKWtKAgdOKaAgY7gKzpUUWqkgUFgXAIXtLM8iG4ZKBGo5M+fW2jhJhJSoRAHQC+est7eH0xlrtdZyiYJcqylTU7kNUMCECuWVVNyrFsf6XuXjuHJ8xgAeH38uFot6vS6EYE/Aq1JoEAMYx+E5IVBvvT4akihhKnh+9bD25TuJ3ds9xH6z2QzDcDVdQRa9d61++2g/PmymWagJkmvab7SpiZkO/diRyDG8QODVanVnZwcb/p5srXEuSdPUGoOW8PBAqTjUSRwpISTgr1PAGOuci6JIPqEgj8djfOAGvzk2ofr19TU69DwPtbBUBOfT6dQYg52w3CIK8u3t7WAwwD6cBEvIGY1GJycnLnGr2XDFt5PJpN/vJ0nyr+1f9AO8+8JiwfcAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 66PfOAVVvgdfXDfKuYl6fQ"\n        title=""\n        src="/static/1*66PfOAVVvgdfXDfKuYl6fQ-467c9b84e1bbdfa605b4b414c8e99f28-082ce.png"\n        srcset="/static/1*66PfOAVVvgdfXDfKuYl6fQ-467c9b84e1bbdfa605b4b414c8e99f28-c7cb1.png 158w,\n/static/1*66PfOAVVvgdfXDfKuYl6fQ-467c9b84e1bbdfa605b4b414c8e99f28-93041.png 315w,\n/static/1*66PfOAVVvgdfXDfKuYl6fQ-467c9b84e1bbdfa605b4b414c8e99f28-082ce.png 630w,\n/static/1*66PfOAVVvgdfXDfKuYl6fQ-467c9b84e1bbdfa605b4b414c8e99f28-c4006.png 945w,\n/static/1*66PfOAVVvgdfXDfKuYl6fQ-467c9b84e1bbdfa605b4b414c8e99f28-85e68.png 1260w,\n/static/1*66PfOAVVvgdfXDfKuYl6fQ-467c9b84e1bbdfa605b4b414c8e99f28-85ae7.png 1600w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Fortunately for us, creating such a dashboard is actually quite simple with <a href="https://docs.newrelic.com/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference"><strong>NRQL</strong></a> and <strong>New Relic <em>Insights</em></strong>, which gives us both an API to query the raw data and an easy way to generate auto-updating numbers, tables or charts. On top of that, we have a simple drag-and-drop dashboard creation tool that New Relic provides (shown above) and the ability to take each individual chart and display them on any HTML page as an iframe element, making them truly independant.</p>\n<p>With our tools determined, let’s look into the process of creating our first project dashboard…</p>\n<hr>\n<h4>Business Need #1:</h4>\n<h3>Number of active users</h3>\n<p>On our website we’re already using <em>Google Analytics</em>, which tells us how many users there are on the website, and how much traffic we’re getting from those users. We’re looking to <strong>only use</strong> <em>New Relic</em> for this data however, so the first thing we’re going to have to do is find a way of duplicating that real-time usage information.</p>\n<p>The obvious way to get this information is to count the number of active user ‘sessions’ on the website. To do that we’ll send the following <strong>NRQL</strong> to the Insights API:</p>\n<pre><code>SELECT uniqueCount(session) FROM PageView WHERE appName = \'{name}\'\n</code></pre>\n<p>Which in this case gives us <strong>104 sessions</strong>. That looks a little high for this website, but that’s because we haven’t specified a time range and it’s defaulting to 1 hour. <em>Google Analytics</em> does their real-time data in 5 minute slices, so we’ll try that next:</p>\n<pre><code>SELECT uniqueCount(session) FROM PageView WHERE appName = \'{name}\' SINCE 5 minutes ago\n</code></pre>\n<p>That gives us **10 sessions — **which is better — but it doesn’t quite compare to <em>Google Analytics</em> yet, which actually gives you some trending information. So let’s try a comparison with the last 5 minutes instead.</p>\n<pre><code>SELECT uniqueCount(session) FROM PageView WHERE appName = \'{name}\' SINCE 5 minutes ago COMPARE WITH 5 minutes ago\n</code></pre>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*CXq8YnNpC8Op7GjBZjloRw-7dc814276d87eba9839e2b5f2321a12a-5e365.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 74.93403693931397%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAABNklEQVQoz5WTPYuDQBCG/eX+B8HGQsHCNlhEDivBQgk2tkI0h0nEi4Jn/ELdM/e66zXHmTMvuDs76+POzI7cOI5D3w/DMBt0hL42iBDCVVUVx3FyvZ4vlyRJoijKsuyxQeC5ruvKsqyoYHyWZV3Xfd83Dea6bdumaVqqeUm9IyELjAfWNE2EumAgeNhzJj9Z4O0lKepiyHKy4zhhGGJtWZbruuC3hl0UBc/zpmnati2KoiAIh8OB7f0PY3qjUhQlCALP81RVfQE2DGO/38uyfDwefd/HV16AdV0Hj3G322mahijgRHlRc1SEFXIVRpKoE+5AkiTEjLtJ0/T9dDrHcRRG93vFbuEP+El4z8s+w4hqomJN99isGW6b9iNN0ZLZ7Zbn+VqGqyez7mHGxg5Z4F//ENksgN9LCFpnX4OzkgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 CXq8YnNpC8Op7GjBZjloRw"\n        title=""\n        src="/static/1*CXq8YnNpC8Op7GjBZjloRw-7dc814276d87eba9839e2b5f2321a12a-082ce.png"\n        srcset="/static/1*CXq8YnNpC8Op7GjBZjloRw-7dc814276d87eba9839e2b5f2321a12a-c7cb1.png 158w,\n/static/1*CXq8YnNpC8Op7GjBZjloRw-7dc814276d87eba9839e2b5f2321a12a-93041.png 315w,\n/static/1*CXq8YnNpC8Op7GjBZjloRw-7dc814276d87eba9839e2b5f2321a12a-082ce.png 630w,\n/static/1*CXq8YnNpC8Op7GjBZjloRw-7dc814276d87eba9839e2b5f2321a12a-5e365.png 758w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>That’s a much better real-time view, and it matches up pretty well with our existing data that was coming from <em>Google Analytics</em>.</p>\n<p>Simple numbers and comparisons are one way of looking at this data, but we can get a better idea of trends if we take larger slices of data and display them using charts. To get a simple chart of this data we can add a TIMESERIES, using this snippet of code:</p>\n<pre><code>SELECT uniqueCount(session) FROM PageView WHERE appName = \'{name}\' SINCE 6 hours ago TIMESERIES 1 minute\n</code></pre>\n<p>Which will generate this graph of minute-by-minute active session data:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*xVZmRd7PG4g_4WafRx1lEg-48c98668ed05b34c67cc5cd99d4c375c-65b1b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 36.5979381443299%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsSAAALEgHS3X78AAABDklEQVQY05VPu07DQBD0N9IhUYaGhgaJCqXgA+hSp6RDfACioCBFAomTiJAIISPiOLbvHJ/v9rz3MmfoIiHBFKvZWc2MNmCMFZQSQhCxaRr3Z1hrAyklAAgh/NL8B61ZKbWvOvdD3G8214BtqwPEWltHleWmbdbOc1Nbh3bf60/mO1dZt+DoPwyc1pNS9qLdTVKBsW+g7onI0Ax2MgLFtPUhPssHr2vtlRR1yOrrmBnfzBE7YXw4jo8mm/5nebHMDp7W3WV+Mks60835Ir16p72ouN3yy1XeXeXH0+R0vj17yT4AA1Bt82uFYSHuUjYq5ZjyIeWzCkeEP+bVAwU/B3k1LKXXQ8rnDJ8LQUF+AUwJiP/Qfam1AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 xVZmRd7PG4g 4WafRx1lEg"\n        title=""\n        src="/static/1*xVZmRd7PG4g_4WafRx1lEg-48c98668ed05b34c67cc5cd99d4c375c-082ce.png"\n        srcset="/static/1*xVZmRd7PG4g_4WafRx1lEg-48c98668ed05b34c67cc5cd99d4c375c-c7cb1.png 158w,\n/static/1*xVZmRd7PG4g_4WafRx1lEg-48c98668ed05b34c67cc5cd99d4c375c-93041.png 315w,\n/static/1*xVZmRd7PG4g_4WafRx1lEg-48c98668ed05b34c67cc5cd99d4c375c-082ce.png 630w,\n/static/1*xVZmRd7PG4g_4WafRx1lEg-48c98668ed05b34c67cc5cd99d4c375c-c4006.png 945w,\n/static/1*xVZmRd7PG4g_4WafRx1lEg-48c98668ed05b34c67cc5cd99d4c375c-85e68.png 1260w,\n/static/1*xVZmRd7PG4g_4WafRx1lEg-48c98668ed05b34c67cc5cd99d4c375c-65b1b.png 1552w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<hr>\n<h4>Business Need #2:</h4>\n<h3>Traffic and trending data</h3>\n<p>Knowing the number of users on our website is one part, but we also want to have an idea of how much content they’re interacting with while on our website, and for that we can simply count the number of PageViews:</p>\n<pre><code>SELECT count(*) FROM PageView WHERE appName = \'{name}\' TIMESERIES auto SINCE 1 day ago\n</code></pre>\n<p>Which will generate a chart like this (below) — which in this case is particularly useful for showing us when our peak load times are during a single day.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*2ip9GUDn2ADrrxl0d4x6tA-6a3b6465794d0662c6ab39236d2bd31d-5e365.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 74.93403693931397%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAABwUlEQVQoz41TS2/UMBDO70VC4kLVAgVxqApSJQonhEDideDEAXHhzJ3CoavdLZsN6VZdmsTrR5zEM7bDJF4CSLBlZI1mPPPNNx7bEYABAGst9GJ7cf8hlBZJKZL5PI7j5fI8TdNvSaJL3bat977dKISPjDFCCM651lpKSXozxv8Othb7Pi0iUCFyLgWHnjow9nJpkwOysutMgkQ0r6qqqMzmc4bAaY3vLxQD+4u5G7Jzm6lDeFya29P82Sknt2cGaJomMIcMovf/AH8S9ZXj5d2TvCcnMKIFk2rD0a3b+yu41x+y8urx9+1J9lk25EYNQIvwasEPYvaR6YdzdiTqkO3/PHNp3ZOU35pmu9OfYLobD/D6jF8bXdycZNfHnX67VEOrg/FiwbfG2d7XfHeSfRnAxPzmTGxNsjsnOa2d3niarpIKGue1dQrdSJl7s+IGhab59jg7CmCac2vtu3Nxf1Y8StjhnFHnD2K2PysOE/Z8wV8uxOOU780KOheFKOcgLkaq6QYWXjk6Z6xjQq5USQY4L0stdKUBa+tWZcmlqmm2vlV1zaQygOurGn5Jd+GI63IAtGjXBxs7u9tHsrsXTfoHAiNUZ8nS6tEAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 2ip9GUDn2ADrrxl0d4x6tA"\n        title=""\n        src="/static/1*2ip9GUDn2ADrrxl0d4x6tA-6a3b6465794d0662c6ab39236d2bd31d-082ce.png"\n        srcset="/static/1*2ip9GUDn2ADrrxl0d4x6tA-6a3b6465794d0662c6ab39236d2bd31d-c7cb1.png 158w,\n/static/1*2ip9GUDn2ADrrxl0d4x6tA-6a3b6465794d0662c6ab39236d2bd31d-93041.png 315w,\n/static/1*2ip9GUDn2ADrrxl0d4x6tA-6a3b6465794d0662c6ab39236d2bd31d-082ce.png 630w,\n/static/1*2ip9GUDn2ADrrxl0d4x6tA-6a3b6465794d0662c6ab39236d2bd31d-5e365.png 758w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p>Who needs Google Analytics, eh?</p>\n</blockquote>\n<hr>\n<h4>Business Need #3:</h4>\n<h3>Server health-check</h3>\n<p>Our stats so far are just replicating what we can get elsewhere, so now it’s time to tap into the more unique data that <em>New Relic</em> can offer us — what’s called the Apdex score — a measure of application response times and end-user satisfaction scores.</p>\n<p>In this case, there’s three different sets of scores that we want to pull in — the score for the application server, for our database server, and another for external websites and services. To do that we can use a query like this:</p>\n<pre><code>SELECT apdex(databaseDuration), apdex(duration), apdex(externalDuration) FROM Transaction WHERE appName =\'{name}\' TIMESERIES auto SINCE 1 day ago\n</code></pre>\n<p>Which will create a slightly different type of chart — by using commas to select three different sets of data, we get a multi-line chart.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*FcEvL6tFEDhzBQQrigdTig-81e66d3e76c9e1893cd5d69d2e8f6572-5e365.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75.19788918205805%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAABnUlEQVQoz41SyU7DMBDN/18RJ25IwAmpUoVUUZVFvXBEKtAlbWnahjpbG9tZHG9hnNIlnDJypJmJn98sz+JcnBvnXEqpGhhctiili++FPZm4rut5yHEchFDZwABvMcZijBNKCSEY4zTLgFkfrKyfU34P3lcLnlZaGJwqm5kBwwceNA7MjJKM0oTglGKKt5wgSUOVYk4jnUQF9nfxDpMkJaQQAvgNM/AVRR55kzSwaTjF0ZyGc+wvON5IEqhkl0RTRSMWb0I03Ppj8vPFshhKNz3DzLjgzYqFztmp7KIosjSFDZm2awahOs6p/MvUB3YAi32qAbeuMacVc1Pw+bQNOEmO4OMT5+G/d09lG6XBtAEtjCwlbLtaOri6+mcc06+5powOVA0MAWzLPKmEZlmpjC+ULkQpK8nksElp7hlFaE0PlVqyEgmR6mq0uny3Lwfzi4/lgviB3XI+79GkFTidfD1cd1qo1/Z7be/5QebZSZ7QBOHibry8GUxvx6vrkbuMPX/WdYYdb/boO08MzdavXbffRf1u+PYi81zpEoC/1b9j3UHWrBQAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 FcEvL6tFEDhzBQQrigdTig"\n        title=""\n        src="/static/1*FcEvL6tFEDhzBQQrigdTig-81e66d3e76c9e1893cd5d69d2e8f6572-082ce.png"\n        srcset="/static/1*FcEvL6tFEDhzBQQrigdTig-81e66d3e76c9e1893cd5d69d2e8f6572-c7cb1.png 158w,\n/static/1*FcEvL6tFEDhzBQQrigdTig-81e66d3e76c9e1893cd5d69d2e8f6572-93041.png 315w,\n/static/1*FcEvL6tFEDhzBQQrigdTig-81e66d3e76c9e1893cd5d69d2e8f6572-082ce.png 630w,\n/static/1*FcEvL6tFEDhzBQQrigdTig-81e66d3e76c9e1893cd5d69d2e8f6572-5e365.png 758w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<hr>\n<h4>Business Need #4:</h4>\n<h3>Most popular features &#x26; content</h3>\n<blockquote>\n<p>This is where it starts to get <em>really</em> interesting — what areas of your website are the most popular, and what are the most-used features?</p>\n</blockquote>\n<p>Accurately determining the answers to this really depends on your application and its structure, and you may actually have to start logging custom data with <em>New Relic</em> in order to find your answers more easily — up until this point we’ve just been using data from the out-of-the-box installation, no custom data needed.</p>\n<p>Our application has a few key areas, and these areas can — in part — be deduced by looking at the page URL and throwing a few wildcards into the query. To see the number of users in a section called ‘Planner’ we could add the condition…</p>\n<pre><code>AND pageUrl LIKE \'%planner%\'\n</code></pre>\n<p>… to our existing query to create …</p>\n<pre><code>SELECT uniqueCount(session) FROM PageView WHERE appName = \'{name}\' AND pageUrl LIKE \'%planner%\' SINCE 5 minutes ago COMPARE WITH 5 minutes ago\n</code></pre>\n<p>Which — when compared with our previous query — starts to give us a better picture of the proportional usage of certain features.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*mYFRdll8a91A4cz0QJzHyQ-474f6d658f460c3f009256ca665c0185-5e365.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 74.93403693931397%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAABEUlEQVQoz5WTTW6DMBCFuf8GsUKwgBOwQs0dOAC7BoJKRUoMpAQ7+CfQB6ZRVbUJfAszY/nBmxljCCGklPeV834K5MTtIUopo+suB5AeSHkiFUmS1/wtz7KsaZpxHIdhGP8BeqPv+/P5E+At3cQFMMZ0ioBSymamlFKsUqlFrOZIJ2KGc4FNPsdSo9RS2ryFk4sYxuI4DsOQEPLY5x+24ScIAs/zbNveLIYfRFEUOY6zWYxHVVWmaRZFsVmM05ZlwTZq5pyjmVd2RcPRmufitm1933dd92W3gz7Z7/P3PE3Tuq6fz1n3/ScrnS9zxunhNiBZX/D3qCj7OB5PoCxh+35n1n5Z3x4dbJ7zr39lJRB+AbCnZy1UM66uAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 mYFRdll8a91A4cz0QJzHyQ"\n        title=""\n        src="/static/1*mYFRdll8a91A4cz0QJzHyQ-474f6d658f460c3f009256ca665c0185-082ce.png"\n        srcset="/static/1*mYFRdll8a91A4cz0QJzHyQ-474f6d658f460c3f009256ca665c0185-c7cb1.png 158w,\n/static/1*mYFRdll8a91A4cz0QJzHyQ-474f6d658f460c3f009256ca665c0185-93041.png 315w,\n/static/1*mYFRdll8a91A4cz0QJzHyQ-474f6d658f460c3f009256ca665c0185-082ce.png 630w,\n/static/1*mYFRdll8a91A4cz0QJzHyQ-474f6d658f460c3f009256ca665c0185-5e365.png 758w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*CXq8YnNpC8Op7GjBZjloRw-7dc814276d87eba9839e2b5f2321a12a-5e365.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 74.93403693931397%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAABNklEQVQoz5WTPYuDQBCG/eX+B8HGQsHCNlhEDivBQgk2tkI0h0nEi4Jn/ELdM/e66zXHmTMvuDs76+POzI7cOI5D3w/DMBt0hL42iBDCVVUVx3FyvZ4vlyRJoijKsuyxQeC5ruvKsqyoYHyWZV3Xfd83Dea6bdumaVqqeUm9IyELjAfWNE2EumAgeNhzJj9Z4O0lKepiyHKy4zhhGGJtWZbruuC3hl0UBc/zpmnati2KoiAIh8OB7f0PY3qjUhQlCALP81RVfQE2DGO/38uyfDwefd/HV16AdV0Hj3G322mahijgRHlRc1SEFXIVRpKoE+5AkiTEjLtJ0/T9dDrHcRRG93vFbuEP+El4z8s+w4hqomJN99isGW6b9iNN0ZLZ7Zbn+VqGqyez7mHGxg5Z4F//ENksgN9LCFpnX4OzkgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 CXq8YnNpC8Op7GjBZjloRw"\n        title=""\n        src="/static/1*CXq8YnNpC8Op7GjBZjloRw-7dc814276d87eba9839e2b5f2321a12a-082ce.png"\n        srcset="/static/1*CXq8YnNpC8Op7GjBZjloRw-7dc814276d87eba9839e2b5f2321a12a-c7cb1.png 158w,\n/static/1*CXq8YnNpC8Op7GjBZjloRw-7dc814276d87eba9839e2b5f2321a12a-93041.png 315w,\n/static/1*CXq8YnNpC8Op7GjBZjloRw-7dc814276d87eba9839e2b5f2321a12a-082ce.png 630w,\n/static/1*CXq8YnNpC8Op7GjBZjloRw-7dc814276d87eba9839e2b5f2321a12a-5e365.png 758w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Assuming we’re interested in the usage of <em>specific</em> features like this, we can use the same technique out as many times as we want to get a loose idea of the popularity of our URLs.</p>\n<p>But what if we <em>can’t</em> determine the feature usage by URLs alone? What if we’re loading content using AJAX, or another technique that isn’t identifiable through the PageView metrics?</p>\n<p>One such area of our website that we have is the ‘Resource Viewer’ which uses the same base URL structure to display many different types of content. To inspect this kind of data, we need to be looking at our applications’ transaction data, with a query like this:</p>\n<pre><code>SELECT count(*) FROM Transaction WHERE appName = \'{name}\' AND name LIKE \'WebTransaction/Action/default/player/%\'\n</code></pre>\n<p>Again we’re using wildcards and URL-like inspection of our data, but we’re instead using it on our internal PHP-applications’ routing structure, to inspect the data that isn’t otherwise available. The result of such a query looks like this:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*KsFuj9lla6-ZZS93bazHgA-693cb81f6df7d403dabaf9f54066065c-5e365.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 74.93403693931397%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAABwklEQVQoz51TW4/BUBDu//XmHwgRlweXIBIhIkTwQBCvEpGIxC9w26a024o7LT2t7n411kqszWYnHDNzvm/mO5PBMaYzxgzDME3T/mHsO2Ts8toA4Ha73Wg0FARBfn+fCTNRFCVJ4t9sk0Tp47WBz53PZ/APh8Men/1e006WdSEFuAbIuhoRyLG+jEP3eyVd103DvIMeCY8hZezOIK+vpmnaHYHO0EIgSFNVlWiQBg6uTqcTMhwu8vm82+2uVCqISUin04nH40TO5XK1Wg0OOOl0ejwex2IxRVFsMr7z+TwSieCktgB5PB5k4E8mE6fTWa/X4WM0iUQimUy2Wi1qY5MHg4HL5ZpOp0RuNpvlcrlQKEBbsVgslUqNRgN5aPT7/Q6HYzgc3siYKrxutxuNRuFsNhufzwfNXq8XHKCRDwQCx+MRtUKhUCqVgvjbwDCqTCYDUL/fx9va7TZwvV4vHA7LsrxararVajabBRp5FOJ5PhgMkkx72ojxNgSKLG+3W5o2itLAoBZDplaLxQL45XJJMI424R9my8ZL0ATFNus1RMLBiW153oqfN4zWAE/CnmiqigOy/9QZOOvJ6E/zu4H4CYmHNlRsqXPWAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 KsFuj9lla6 ZZS93bazHgA"\n        title=""\n        src="/static/1*KsFuj9lla6-ZZS93bazHgA-693cb81f6df7d403dabaf9f54066065c-082ce.png"\n        srcset="/static/1*KsFuj9lla6-ZZS93bazHgA-693cb81f6df7d403dabaf9f54066065c-c7cb1.png 158w,\n/static/1*KsFuj9lla6-ZZS93bazHgA-693cb81f6df7d403dabaf9f54066065c-93041.png 315w,\n/static/1*KsFuj9lla6-ZZS93bazHgA-693cb81f6df7d403dabaf9f54066065c-082ce.png 630w,\n/static/1*KsFuj9lla6-ZZS93bazHgA-693cb81f6df7d403dabaf9f54066065c-5e365.png 758w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Which, whilst vaguely interesting, doesn’t really tell us anything about the <em>types</em> of resources that have been loaded. To do that, we need to give the API a little more information about how to group the results, by telling it the FACET of data that we’re interested in, like so:</p>\n<pre><code>SELECT count(*) FROM Transaction WHERE appName = \'{name}\' AND name LIKE \'WebTransaction/Action/default/player/%\' SINCE 1 day ago FACET name\n</code></pre>\n<p>Which gives us the much more useful and interesting specifics:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*jpdQ09c58s7hGubFA0t2Vg-e90466e4de9a1b783c040825d7fb10f2-5e365.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 74.93403693931397%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAACS0lEQVQoz42TW2sTQRTH8/0EQXxTNFEU/Qw+iFB8kfpQ7IMv0gpWa+otSVFBxUtfLLTY0qJJNrtz302ym+5udvZ+iWeTFkmh4J9hZi/zm3PmzH8qSRInSZKmaZZl5ZAk/16TJD9bMKHiuk632yWEGIZBKRNC6LqOUSld6JOzBXwljmMpZRCEY+nb7tgLAggXpUkEKWVZWhRpftKKuZbNYM/zIulNQjnJ4kmRT/5PZWQIqzOyi42VPfqWeC0RNFjQFGFDj1rch4cmDxt83CDmG31c7/t1Q24Yck33ul5ckb7f5+IHb196t1TdXK41H9Way9XXD6uvFqsvH9Q2Fmvr96+937z1Zf/K999X9/o3DoY3D4aX9wefTb+SZynvj9z2R2Pl/Gjtor56zli/MNi5O/i1wLbvGbsLfPuOqXyyjaFFtCT0pykXx2kDbI1c0t1qrV7/8Oz24YvHaLOJSB8LW9EMjQ4VPNSojjBSNORICSVJ8/y4YLCAZY0UdPi0vlT/9qRj9PjAohRRgtReFyNVVRVKCcZY0zTXdecKBoNjm39U53m90/tJGNYIQjCbUqr2VDhwoBljAFuWFUXRHFxMCukFbNT+2tlifbCHBhhlZQcYLkNrAGuqGoTh6aMqijyMUzlUhLLDBZiM8JkYB5NRQhDGYDrgTdME4BRcgE8cx0aYCsEhX34ipKHZbjkXsIrgAibPwVOP51J6s72V0U7UK/cM+aqUMTA/eP502nB14H5AcNu2oZjQOw6MLvT2VEdH8MWxpz9mt20meP4LR/MrC0NHYpMAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 jpdQ09c58s7hGubFA0t2Vg"\n        title=""\n        src="/static/1*jpdQ09c58s7hGubFA0t2Vg-e90466e4de9a1b783c040825d7fb10f2-082ce.png"\n        srcset="/static/1*jpdQ09c58s7hGubFA0t2Vg-e90466e4de9a1b783c040825d7fb10f2-c7cb1.png 158w,\n/static/1*jpdQ09c58s7hGubFA0t2Vg-e90466e4de9a1b783c040825d7fb10f2-93041.png 315w,\n/static/1*jpdQ09c58s7hGubFA0t2Vg-e90466e4de9a1b783c040825d7fb10f2-082ce.png 630w,\n/static/1*jpdQ09c58s7hGubFA0t2Vg-e90466e4de9a1b783c040825d7fb10f2-5e365.png 758w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*CpE2MdXDgtBI4552fDxIPA-5ea9683c98655f4af71f8357c76cb194-5e365.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 74.93403693931397%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAAB6UlEQVQoz5VT7a6bMAzl/R9v2m0ptIVyRSHkOyEQUtruGDZtUn/NisKJHSfn2CRLaUkpPR6PdV3pk9LfZUrPD3v8Y5m1tiyLpmn6rmua77Ztu/u9rsju7f39YUopZx1GCCFbYnTOjWPw3gNM84zj1+1ggM/knRcAotnOlBLWNcaI5ev1fsHe2/xh+xEAlPwiGel6vYLw+3+Mkpf0cOPcdqzruXGTtsG4YGzQdoQubTyAMp6c27B+8iH6aUFiFuZ4H8yxqE6X5lDWP4/nY1nn5+Zwuubn21d++ZlfDkX141Dm5W0HTHkmvZ9iBqloy8C5lEppLYTUWhOQUhsjhOBCoMI0a4M9xhgu5BwjZGeo3RxTz4aBSy4UY5yA1GxAmuoZRwi464dBSHJKhQ1+nNb1mYVpaXfa5wbMj0WdXwC+j+WN5qICVSJ8Il0QQoqKqm45EqlVuJmBtyBSoA9+4L4vcR1CAxcMa6UBQAdgmhe6eSV7EmkJYZKBmaQwDgOAnzxCdj3bo+SWEqV+QnOYYsvM1+n6p8gVuFHlt/rDv4cwQ05e1ju+3PpxXjL8bWOIaDIuGDhViG0F67EUqmMco/9dMIUQ9hg7+jCntGb7+5BSaHQGprWzdvsCODRJaWqPxntwFk3EE9j/W2T9AptdSowBzGbaAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 CpE2MdXDgtBI4552fDxIPA"\n        title=""\n        src="/static/1*CpE2MdXDgtBI4552fDxIPA-5ea9683c98655f4af71f8357c76cb194-082ce.png"\n        srcset="/static/1*CpE2MdXDgtBI4552fDxIPA-5ea9683c98655f4af71f8357c76cb194-c7cb1.png 158w,\n/static/1*CpE2MdXDgtBI4552fDxIPA-5ea9683c98655f4af71f8357c76cb194-93041.png 315w,\n/static/1*CpE2MdXDgtBI4552fDxIPA-5ea9683c98655f4af71f8357c76cb194-082ce.png 630w,\n/static/1*CpE2MdXDgtBI4552fDxIPA-5ea9683c98655f4af71f8357c76cb194-5e365.png 758w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*6LL4jeSBNsYXhK4OQhFpDQ-7ce43a8372ae286c7b372d254616771a-5e365.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 74.93403693931397%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAACS0lEQVQoz31Tu27UQBRdiYqKjpLvoELiA6iQKGmREBINoiAtERIFDwkBBaJIj1AiiMQC2QZQiBIqBFk/xmOvxzZ+yG+vPQ8Pd+yQKMVyi5mxfc+995w5nlDaUUoZY5xztVF68kipWB2QMMnzXNc1x3EC3184C0KI53nYUuERj/dyVQB+0rZtURRlWcGa5UXRNExVhd6wCyn/C4YBh/G47AW8kH0PzUYQ6+WPoq8p69pl13VACVYgOZwZJE44V5ml18xR+Br/vvEzNGo61i4Zu7Z/oAWBZRjABw9BFCkcxzEkTCSXmQxfbT/YeDx9irUz7+fnPmjfsyV847SWB2vZH0s3LNcloAJoAZpAiX9gKcnHl5vT627kwrhmUZ//ZFzedRS4baKN9Xhh6SZyXddEpoWQS1SVKBrAXIhm7SZ98SgsCsM0Wt+998s/O9UzICXabe2JF9qmqaa1bduxHXXAOEkSBRa9LLfuZp9vVUtWwrC0u7JnX9gxGQjW0q1nO57jQ1HobGGMEFKcMY6iSIFBW5rOkm8XS+OhzL/ePzQmbw/XDfWt4WLTrUmcmLpBlGA29BxdcMRZXZKUbfAu2bvKdi/dmT2/PS/HyxKC1sUsSXxtAENbC1nAGR9zHpygfNTzmtdmz1J1Ht/QTn55kwaubiBCRrXxMAI+7jw4oj8xkxihoLagVjCNE980EUyr5LJt3/dhj48EO+XBU1bmjOv7KAwiTdcWCxc6w+TDhaMwHAQDb/IVwSirSNtUyzzPwPxpmsJfVFYVrHXdQMJfmts2ydKpQXEAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 6LL4jeSBNsYXhK4OQhFpDQ"\n        title=""\n        src="/static/1*6LL4jeSBNsYXhK4OQhFpDQ-7ce43a8372ae286c7b372d254616771a-082ce.png"\n        srcset="/static/1*6LL4jeSBNsYXhK4OQhFpDQ-7ce43a8372ae286c7b372d254616771a-c7cb1.png 158w,\n/static/1*6LL4jeSBNsYXhK4OQhFpDQ-7ce43a8372ae286c7b372d254616771a-93041.png 315w,\n/static/1*6LL4jeSBNsYXhK4OQhFpDQ-7ce43a8372ae286c7b372d254616771a-082ce.png 630w,\n/static/1*6LL4jeSBNsYXhK4OQhFpDQ-7ce43a8372ae286c7b372d254616771a-5e365.png 758w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<hr>\n<p>That’s the extent of my <em>New Relic Insights</em> skills at the moment, so I’ll end with a final warning: make sure the stats you compare actually make sense, unlike some of the more <a href="http://tylervigen.com/">Spurious Correlations</a> that can be drawn from data.</p>',
frontmatter:{title:"Amateur data spelunking",date:"October 07, 2014",tags:["Medium"],url:"https://medium.com/@psyked_james/amateur-data-spelunking-bfe67ead9113",image:null,description:"Raw data has a strangely alluring quality — it has the power to answer all of your questions, as well as the power to ask even more."}}},pathContext:{prev:{frontmatter:{path:"/blog/the-6-deadly-sins-of-unit-testing/",tags:null,title:"The 6 Deadly Sins of Unit Testing",date:"2014-09-28T21:27:41.662Z",description:"Much like the ‘original 7', recognising and understanding ‘the enemy within’ helps us avoid falling into the same old traps.",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEDAgT/xAAWAQEBAQAAAAAAAAAAAAAAAAADAAH/2gAMAwEAAhADEAAAActc+Vy4wf/EABkQAAMBAQEAAAAAAAAAAAAAAAECEQASMv/aAAgBAQABBQILcfRQVqhWnch9/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEREiH/2gAIAQMBAT8ByCjP/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEREiH/2gAIAQIBAT8B2SyP/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAEQETEh/9oACAEBAAY/AleS6Z1l4f/EABsQAAMBAAMBAAAAAAAAAAAAAAABESExQWFR/9oACAEBAAE/IYqLUg75LLvh8gVziuoW17jEjd8Jn//aAAwDAQACAAMAAAAQm9//xAAXEQEBAQEAAAAAAAAAAAAAAAABACFB/9oACAEDAQE/EExnhf/EABYRAQEBAAAAAAAAAAAAAAAAAAEAIf/aAAgBAgEBPxAdYj//xAAcEAEAAwADAQEAAAAAAAAAAAABABEhMUFRobH/2gAIAQEAAT8QINCQu/WW5joaaF5XlZGNEDDhiKjn9yNqIdOzzbhBGoOF+T//2Q==",aspectRatio:1.6,src:"/static/1*EdvNML9-fMAhW7yrrntxWA-6e9346cda3aa0abbec1f6aa2d7eca5c7-f2ac0.jpeg",srcSet:"/static/1*EdvNML9-fMAhW7yrrntxWA-6e9346cda3aa0abbec1f6aa2d7eca5c7-567e3.jpeg 158w,\n/static/1*EdvNML9-fMAhW7yrrntxWA-6e9346cda3aa0abbec1f6aa2d7eca5c7-c3206.jpeg 315w,\n/static/1*EdvNML9-fMAhW7yrrntxWA-6e9346cda3aa0abbec1f6aa2d7eca5c7-f2ac0.jpeg 630w,\n/static/1*EdvNML9-fMAhW7yrrntxWA-6e9346cda3aa0abbec1f6aa2d7eca5c7-0c4a5.jpeg 945w,\n/static/1*EdvNML9-fMAhW7yrrntxWA-6e9346cda3aa0abbec1f6aa2d7eca5c7-4e530.jpeg 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}}}},next:{frontmatter:{path:"/blog/lolbot-or-how-i-learned-to-stop-worrying-and-love-my-mvp/",tags:["Medium","Hackathons","Agile","Development"],title:"LOLBot or: How I Learned to Stop Worrying and Love my MVP",date:"2015-04-05T23:42:54.971Z",description:"The ups and ups of adopting an MVP mentality for our Hackathon, and how it helped us achieve victory.",image:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsSAAALEgHS3X78AAACDUlEQVQozxWRyW7aYBSF/VQsKqWbKgqbSiRUhVg2GRiCGYyNmWyMscHxDzYesMGAwcxBkNKIJJWqtFK7qLroE3TXB+mqrnQ3Z/Gdc+89EMfS4Lbp2OZ2Nd0s3Of95sfXTy/PHxfu8HB/9+Vpv3SHA0tvAlVqyTpLaVGYwuLhQOD96yNIaYPxsL9ZTHfr+Ye7xcNuvXAsQ5a+fT5Mnf7UsV+e9ofdwuhatj0w9I4kNm6bfIEigmenkCeUttTrapaujm1zNhn3a1kGOd2u5rvVxFDlNhDnk+Hj/drpaU7fcEe2M+j1Tb0jAygWvUzEoxh245k1eFaWBBynE6l6hRFGPXXu9E1NFmqMril0LGIBaeY6mgJMTel1VSgcCsJwCEXhiwskk8GKZPokgMCEjl7FilSWr9HdTsvUlZ4sAjw5l+iH5WgytAaWpisAQpAQioQjERhFzz2LcOidz+c7Pn7j9594SxG5DFOmOkp71aF+Pnb//u6uNYrj6u7Q3C5dKBG/jMeuEonrFBb3JpO+wXGMyKWLBaJA4SxTEupMoyluQfLXjPjzXd6Ba5IkObastEQonUr8B7JYkcrVmJLH5PM4lc8xlWKtWvZiBY6ulKjkuT959gp9e8SngtVS3tIVli5DJJEmiUyeyHiwwDHekaUC6T3PA4DIC1y1ShfVlqgqoCnwt03BNAyvlLljLyejf362D/jGfr+TAAAAAElFTkSuQmCC",aspectRatio:2.2598870056497176,src:"/static/1*l1TNV0hQXW2y4HnQnFsfMA-25cf10cb3499069f6a0f2771c42ad7ee-7a72d.png",srcSet:"/static/1*l1TNV0hQXW2y4HnQnFsfMA-25cf10cb3499069f6a0f2771c42ad7ee-8baea.png 158w,\n/static/1*l1TNV0hQXW2y4HnQnFsfMA-25cf10cb3499069f6a0f2771c42ad7ee-69705.png 315w,\n/static/1*l1TNV0hQXW2y4HnQnFsfMA-25cf10cb3499069f6a0f2771c42ad7ee-7a72d.png 630w,\n/static/1*l1TNV0hQXW2y4HnQnFsfMA-25cf10cb3499069f6a0f2771c42ad7ee-514af.png 945w,\n/static/1*l1TNV0hQXW2y4HnQnFsfMA-25cf10cb3499069f6a0f2771c42ad7ee-5e778.png 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}}}}}}}});
//# sourceMappingURL=path---blog-amateur-data-spelunking-09896bf5be199f4d6dc5.js.map