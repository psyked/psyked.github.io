webpackJsonp([0x62912bf77ca0],{1227:function(a,t){a.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/building-bridges-some-solutions/index.md absPath of file >>> MarkdownRemark",html:'<p>In a non-too-subtle way, I thought I\'d drum up a bit more enthusiasm for <a href="http://www.mmtdigital.co.uk/Flash/ChristmasGame2009/Building_Bridges.html">this years\' Christmas Game</a>, by showing you a few of the solutions that people have come up with for the levels.</p>\n<h3>Type 1: The Basic solution.</h3>\n<p>[\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/basic-25f40a4a915661b7cbd6055688c2aa57-41a8d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACoklEQVQozxXJ6U9SAQAA8PcP9Fe0tfrWx/rYZoZa0xAVj2ReTLEmHqk1cxhqHlwKItB7CHI+eO9xiQjyLgShkFLLK6FY7dncctp0dlkm2+/bDyC8M6rHLMtwpborD1F3pOK4ooUdnBhQtj/g3Lpceftqdf611tLrjUVXliO4dyncJhVtZHbOz89/nv0F1t4nPbAKsU5HcDiZxNPMl9C8K0IGfV7HrFlnsYJWG4gg+knFqNaAzi2vBFYS6f39jexX5vsJ8PnXn+j2HoqvrzFHzNm/jyen2R+/E7t71Hr2Tfbbh6PTpW0mnt73xrZNc3F7ILF7cJzMMDMo7iaTgC+1A6IU5CIhF+VLbsJUyhRKaJ04iJJ6Nw15aJU9pIIXNQjx0k1rUBLyLRn9Ub13GfTEAY0JkyNzGozWYpQGoZWuqAIOT7tojYtWY9SEk1RhlArNUSI5aoRUo7TO6QcxJ2B1wu2WKQkclmHRPq1+RAYqXbFJlJQ7CAlMSBzkqI0UW0mxDR+xk1IHMYEQCjSut/STNy4BnlBC5U/KsYjSjpvNmEcvozZT8a00vbF1Iba1G1p9ZXO7IQc5ZgkOWXGxGReZFkUzztm8mwD+OkG8XXXH3B6nz4pSMjf1XDI8ONg/9GLgwqD4mXhSpoTnYYwIeimPEyPfxZnDU+bwOHNwBHR3tz/t7eqZMnQY8TYoINSHH3Y+aamrETTV59RVC3rFzRAh0M136oN9ltCQTmcxQlSEzHzKAA3V9xtrOK1yk9CwKIT8bcZwvUBQW8ricYt53JJadn5D97NWAy4E/bk14Px+aVVxXiW7oIlXDhSW8wsrmjkiS4U0UD7m5UoXSvh9Bex6FofPKuPfKeHdezRWIQtxx72V474q+QKnZ6qorOkut6WgjP8f6MCdwDQz2v4AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="basic"\n        title=""\n        src="/static/basic-25f40a4a915661b7cbd6055688c2aa57-41a8d.png"\n        srcset="/static/basic-25f40a4a915661b7cbd6055688c2aa57-bf474.png 158w,\n/static/basic-25f40a4a915661b7cbd6055688c2aa57-d5dd3.png 315w,\n/static/basic-25f40a4a915661b7cbd6055688c2aa57-41a8d.png 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Oh yes, it works for the first level, but just you try that on some of the later ones...</p>\n<h3>Type 2: Adding some support</h3>\n<p>[\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/secure-95a0c169d673c620d7d84d6b0b900e9d-41a8d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACqklEQVQozwGfAmD9AL6zoJV2SKWHWZVzQqqUbs7Jv5NrVbOHd66FdLiWhoNjTVRBI3FYNGlRK8XBvLPDvG+NgNXd2f////j9/QDR1MuxqpStp5fBvKfJybnc5eO5tq/Avba7t7G9u7SwrqakpputrZ+TkYmZoKyzxMq3zMjd6enV4erl7vUA4/r8xtrprL3R0OXw5fz+3vT24Pf7yN3nv9Lfxtnk2O72xNjmx9zpssXYo7THqLbH2+zyzd/ooaitsL26ALXEy5iqt52wwZ2vv7TM1qrBzqO5yJmrvZ6tvp6xxZ21xZSoupapu5isvpuwwZitvp2xw6G6yK+KUsMpBAClpql3pY2Trb2XrcCUqr2Uq76Rqr6Xr8KPsMGGkJCMmKmPsMWNqr+RrL+Qq8KRq7+VqryVsMSXlZetNyoArrfEjqzAk63Ala/Ck67BjarBjqy/mai6rbLBsqKiuKKou667yLnBt669t7qu3Ojl7vX47PP14+vu2e7uAMPPz8DT1cLU1sTV18LW1K+3r8i1wNC1vaatvJmvw5Ctw42mu7+vure0woGkspGUkKqppcnLyOvu7Pn49wB+gHqCgn2Bg32Bgnx/hH6FoKbDtsKOp7tvn7pznrh1nrh1n7pynLeqqruwtLlrcWpkXlplYVx4dnHR2NYAaWRfaGRfaWRfaWNeZmhksqiynLDFapu3cZy3cJy4b5y4b5u4bpy3bJu7jKina3BeYFpYY2BbWVNPeXp2AFtVS1tVTFtWTFlSTGJgTIqln22evGqbtGiatWibtWiatWmatWiatHCet2qZtFdZWFNJP1RNRFVORVFJQABGUV9GUWBGUWFFT15QXWxXiK9Wi7VVibNWirRVirRVirRVirRWirNajbVairBHWGtDTVtET19ET15FUF8y1pw2StEaSAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="secure"\n        title=""\n        src="/static/secure-95a0c169d673c620d7d84d6b0b900e9d-41a8d.png"\n        srcset="/static/secure-95a0c169d673c620d7d84d6b0b900e9d-bf474.png 158w,\n/static/secure-95a0c169d673c620d7d84d6b0b900e9d-d5dd3.png 315w,\n/static/secure-95a0c169d673c620d7d84d6b0b900e9d-41a8d.png 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>That\'s the basic principle for solving the later levels...</p>\n<h3>Type 3: Support overkill</h3>\n<p>[\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/sturdy-ad549c92fa885215046a8dc1138e1f71-41a8d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACqklEQVQozwGfAmD9AL2xnZFxQqKCU5FuPKiRaszGvI9mT6+FdKqDcV9JLk87HlZBI2hOKWJIIcG9uq/Au2qLftPc2P////j8/ADS1s+zr5uuq57Bv6zKy73f6Oe+vLfEwry9vLeusKirrqWsrqaytKiYmJKZoa61xcy/0c3e6urS3ujj7fQA4vr7xNfnqrrPzeLt5Pz+3PL13vb6xdnlvM7cydrn1+31wNTixdnmsMPWo7THprXH1+nwy97noqeqr7m0ALLByZSos52wwJuuv7LJ1Ki/zaG4x5mrvZ2wwp+xwp2wwZWou5apu5msvpywwZmsv5uvwaC6yK+JU8MiAQCkpKlzo4qRrL2Zr8KTqryUrL6Sqr6Wr7+OoqyQpruLrMGOrMCQrMGPrMCNq8GWr8KYrb6WssWYl5qtPzQAsLjGkq/ElrDCnLXHla/DjqrBjKu/j67Blo+MqpCYtLG/tbC9ubC8vq67yLqv3Onm8fb57/X35u7x3PDxAMLNzL3Q0cDR0sXV18LV0rHAt8mut9++w7O1w6+pt9y7wMW4wYGnvrGvvqirtoiQjqainsPFw+fq6Pj39wB8fniAgHt9fXeJiIOCiIOKoae6sb6Xqbukqrqprr2Hp76cqLvErLbAt8SQqrJwc2hkXlpkYFt0c27M1NMAamZhZ2Nfa2djcWtnZ2hlu6ivq7XGiqG30LO72Le9pqi4rrHAw6mzrbDDmqSlaG1eYFpZYmBcWVRQenp3AFxVS1lSSV5XTmNbU2BfSqOjnaCrwJiisoSit3eetXGZsmqbtV6YtWibtmqZtFdZWFNKPlNMQ1RNQ1NLQQBFUWJFUWNFUWNET2BFVmtOg6xRiLVNh7NOh7NQh7NQiLRSiLNVibRajLVYibBHWW5DTV9DT2FDT2FEUGJolJ8JBen6qwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="sturdy"\n        title=""\n        src="/static/sturdy-ad549c92fa885215046a8dc1138e1f71-41a8d.png"\n        srcset="/static/sturdy-ad549c92fa885215046a8dc1138e1f71-bf474.png 158w,\n/static/sturdy-ad549c92fa885215046a8dc1138e1f71-d5dd3.png 315w,\n/static/sturdy-ad549c92fa885215046a8dc1138e1f71-41a8d.png 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>One things\' for sure, it ain\'t goin\' down lightly.</p>\n<h3>Type 4: The Leap of Faith</h3>\n<p>[\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/leapoffaith-bd1a06107355ef1669d90850121e54e2-41a8d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACo0lEQVQozxXC608SAQAA8PtvWn9An2pzqGSiTLN4KaQJOVAEedbSLJc6AnwCagKHvESPN3dw3MMDDgS0pibR0qzMWmqr9SFXba1W/fYDKHjJpmcFDEKrpg6yKrY2qNleDmy4ExnTYAsGo5zLY57TCC5IW84X81ScJgatZnvUyltusBOTwLPqU2R1LuS3kilXsYAcfHifhkNZHMGRCInB0bDP7ZkLQvaZqbHHrmA8v0Fsb0XX4yLXjQC9Crw7OU7ubkVzL56fnp38/nN49v3o56/NN6fZymFp/+Pe1x/F/ePN15+Q4p4PKa2i5Vdfvu0efQ6GS1ihCsSSyQGHecIbsnmQaLmyktsBsQ0LRC6GM65YDkzQthV8ZoWYDVL2WG4xTIGJvDNRmA+tzQfXAPe0GSEqjnjca5mB1rbAEL4cptJwFg5hsxA1AWXMoRwYyRBx0h6jTcGcLUxFsqXC7gFWrgCJDIYWMlgxj6/n8E06gUIpmCLypcL2y3i5AkYpGsmWEwQYzliDGSpB7WRLaBF9Ut2pHr0F1AqZWtmrUsp06n6NSjECIiNQypsJoXQujsP+dGQbpaf82G0vaVwmHYH0Olow2fxadf+ocRxQyCRyqVghE/f1SNSqroc++/1AUW9yKiRCqbzf4iMgCFc503fd+KAH17kJazC7ZDd2dwm7RQKgs4Mnauf8K+S13ZR0asGI3ksNWoZuidrFYpHXMz/kIvrsqMqR1rkwPYhqPVTv6Hgjk8FuZgGtV2qushhCLrv18sXrfJ4CJJVuUjx871pjDYfNEI8ZpCApW4QVztQAiCqdSbWH6tY9aGu4xGHXA3VsEYMtYrZ21TYLmHw535zkT2JslaWuSVDbLGRrF7jmNPcR3G5G/jfBHdNYU89wLUtQ39L5FychjDBVALhhAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="leapoffaith"\n        title=""\n        src="/static/leapoffaith-bd1a06107355ef1669d90850121e54e2-41a8d.png"\n        srcset="/static/leapoffaith-bd1a06107355ef1669d90850121e54e2-bf474.png 158w,\n/static/leapoffaith-bd1a06107355ef1669d90850121e54e2-d5dd3.png 315w,\n/static/leapoffaith-bd1a06107355ef1669d90850121e54e2-41a8d.png 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>It doesn\'t all have to join up, you know.  You could just build ramps!</p>\n<h3>Type 5: That\'s a ropey one...</h3>\n<p>[\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ropey-8ca82a386eff761cdca50e0fab6cab33-41a8d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACoklEQVQozyXP708ScQDH8XvQ/9JqPelRD2tLbSbmryCEBaY4fy0xbWrm0HTOCRoqIKCSioKHx9e76+AuOO4XYEKaRlPMHFYzlr/GWmlaaWa5vR68Pw8/EEuMGuszHZ2ygfoMxFSzEGH7KgqIzobp9lrS2G5vua+4eUktvlwqOj8TZIhgQN3TupxYPTk5OTw+hmJLc/iUAUyaw5w7GvUlkp99JMozJE1iAb/HR6GwawSAkQGDzjrqJsKvqPlIYmtr+dN2MrUPbfw6mn2/BdhYLPk1efRnfe/Hx4PfkcQXLrb+cjUZ390LrSSjiW0yujbumYXJ2bXdb68/bI7BAGP8kCc8Z3Z5bRhvm+Y88/EpYWHcF7EgzOkcwQUbHjTAfiNMW93MMCZYAGvDQ2P+CKrND104B0044LpxrQEwZsAbpxgjwhoRzoIKg5gwiIf63bwJCP1A6EZ4PSL0IbwJCZiwsNlkBlcuQhg1oweCAfAmNGiYFrQuvgfwfW5Oj/DdLlYLs22TrH6Sxt0MxeBrm6dPD3e/72/spFZTKSi0uMi9XQouLYeXV4Lxped+zALTGietGSWaJ9hmO+3EBA71jwNOB5O9ht4plyM6F9lJ7f48PIA0rU1P2prPtLRrnk64X6AMSghdXR3aLosHYxGMaxrz19joVue0uraiRCFT3ZM31te+eReHKlTK/4rKixVVlaoHFqTOzpmcAcyB4Q5c52TKrFT1EFk7TD922CvVd4tk0pIieWFBTuOjekguzpKLRXKJqDBfVFyc1WAfeDjGqga9qiGqdIgqtnorh7zlg171M6raSt4plBZkXr2dnSa+lZ6XeQ3KyFNm5BX9k6u4ISkTdwCJzivResSnuoizkGgJWY9XqsVuSKuuZ8vTcpRpOYr0XOVfVK6bfs29/bYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ropey"\n        title=""\n        src="/static/ropey-8ca82a386eff761cdca50e0fab6cab33-41a8d.png"\n        srcset="/static/ropey-8ca82a386eff761cdca50e0fab6cab33-bf474.png 158w,\n/static/ropey-8ca82a386eff761cdca50e0fab6cab33-d5dd3.png 315w,\n/static/ropey-8ca82a386eff761cdca50e0fab6cab33-41a8d.png 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Rope bridges. Flexible, and surprisingly strong.</p>\n<h3>Type 6: The unconventional solution</h3>\n<p>[\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/unconventional-15095579fd4d96fc5ea9916ca05b9eda-41a8d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACpUlEQVQozxXK209SAQCA8fNn9NxDzz311jL1wfKSiRooCnhhOG/oIjRFzUxl6HDeUFGOcDwoCBzhHDgXzo1LghYY5iWXWi6ns9w0V+aWSbr99j19AOsBh59nwD2i4caH8yMN8Sg7WCVAe5sxXUu7IleQclued69acLcy687bIIOG6Pr+jvWdrWQyeXF5CaxuxNF5g3N2jCVnliLE7sE+6UN4BqcJFHFZYdjocsGIyzI6pDOanWh4GX8f3Tk6Wt873j89B76enLAb2w52NXHw8+BfcvfX+d6fv8s7h1xi9/raOr1gN74xH7et9OIkEpzDo5+Pz2JfDiGrGcWdAElTyskug8M/4WDdS2u2wApILg3ZGYOTh1yMzcMb5whdd0dvU9lAi3oYpoxoyExFHD2FoVsAQFARkzdq9i1CeMTkCY06OJubxzB+xU1uIl7KG2CJMLdA0SgZcmG4mzU52dGFyPi4yZWdCnDvlthYjI/HgokPfCLuDxN+xL9JcYeftjbXthgv/8bGae281h7Qzgc5lFuj6cAK//3s94+rK6BVo25tVd9Uo9Z0aLrM7s5Z2koiaJBDCMyK2V/DZOcM/Qqi2mFaC1M8xvWBlrFhPYEuAPVVFbWK8ms18vKG+op2s7VtNqwahGvkkhpFRYPB02RmmkCyaZpqg6hmyA/bKXBisLREKC8rAaRiobREJCsVSYuElQqxGoRVFl4z0V0hEcll4uaRbiVI1RnxhklCBZIqkFBD9MuBdklxvkxSBAiyUm9kp+U9ul8oEtZMkvUWprJHJ3j8ID8zpbyluXrar5hA66Z8ShOunPI2QmxZmz4v474gOx1Iy5HceCJNzSzOKH0h7Pc96ydz1KbULPG1zFp9QT9VoPWI+jDhNR1apCefqobSssTpubL/YXeQon5VNQoAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="unconventional"\n        title=""\n        src="/static/unconventional-15095579fd4d96fc5ea9916ca05b9eda-41a8d.png"\n        srcset="/static/unconventional-15095579fd4d96fc5ea9916ca05b9eda-bf474.png 158w,\n/static/unconventional-15095579fd4d96fc5ea9916ca05b9eda-d5dd3.png 315w,\n/static/unconventional-15095579fd4d96fc5ea9916ca05b9eda-41a8d.png 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Sometimes the best solution isn\'t the most obvious.</p>\n<p>Like the look of that?  Well, go check out our <a href="http://www.mmtdigital.co.uk/Flash/ChristmasGame2009/Building_Bridges.html">Christmas Game: Building Bridges</a>, and see what you can come up with!</p>',frontmatter:{title:"Building Bridges: Some solutions",date:"December 23, 2009",tags:["flash","box2","building-bridges","christmas-game","mmt-digital"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/building-bridges-a-box2d-powered-seasonal-game/",tags:["box2d","flash","christmas-game"],title:'"Building Bridges", a Box2D - powered Seasonal Game',date:"2009-12-18T13:47:54.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/the-results-of-my-annual-code-something-different-this-christmas-idea/",tags:["actionscript","box2d"],title:'The results of my annual "code something different this Christmas" idea.',date:"2010-01-04T08:23:39.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-building-bridges-some-solutions-660effcc06aebc743bae.js.map