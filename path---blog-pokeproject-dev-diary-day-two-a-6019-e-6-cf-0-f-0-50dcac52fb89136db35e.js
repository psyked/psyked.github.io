webpackJsonp([0xcf81ba1929de],{1322:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/pokeproject-dev-diary-day-two-a6019e6cf0f0/index.md absPath of file >>> MarkdownRemark",html:'<h1>PokéProject Dev Diary: Day Two</h1>\n<h2>Where we refine the design.</h2>\n<p>A few days have passed since we started development [see days <a href="https://medium.com/@psyked/pok%C3%A9project-dev-diary-prologue-d214a44c348f#.su79ueao5">0</a>, <a href="https://medium.com/@psyked/pok%C3%A9project-dev-diary-day-one-8a77a252bf0a#.2c15a2on6">1</a>], so there’s been a little time to sit down, review the prototype and refine our product vision.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*lEV7DsAymsMz79d5bbTjCw-57a00f38998cb1771afbf5797888749e-2f776.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAdVEmVED/8QAGRAAAwADAAAAAAAAAAAAAAAAAAECEBIx/9oACAEBAAEFAm8boojh/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAwEBAQAAAAAAAAAAAAAAAAERIWHw/9oACAEBAAE/IZFuiDXuDlpVn//aAAwDAQACAAMAAAAQEC//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAEAAwADAQAAAAAAAAAAAAABABEhMYHwUf/aAAgBAQABPxC9Vmd5E1CtHBWyll9kGB3xiPnyWqi1n//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 lEV7DsAymsMz79d5bbTjCw"\n        title=""\n        src="/portfolio-2018/static/1*lEV7DsAymsMz79d5bbTjCw-57a00f38998cb1771afbf5797888749e-af57e.jpeg"\n        srcset="/portfolio-2018/static/1*lEV7DsAymsMz79d5bbTjCw-57a00f38998cb1771afbf5797888749e-847f7.jpeg 158w,\n/portfolio-2018/static/1*lEV7DsAymsMz79d5bbTjCw-57a00f38998cb1771afbf5797888749e-93973.jpeg 315w,\n/portfolio-2018/static/1*lEV7DsAymsMz79d5bbTjCw-57a00f38998cb1771afbf5797888749e-af57e.jpeg 630w,\n/portfolio-2018/static/1*lEV7DsAymsMz79d5bbTjCw-57a00f38998cb1771afbf5797888749e-28cf9.jpeg 945w,\n/portfolio-2018/static/1*lEV7DsAymsMz79d5bbTjCw-57a00f38998cb1771afbf5797888749e-0d474.jpeg 1260w,\n/portfolio-2018/static/1*lEV7DsAymsMz79d5bbTjCw-57a00f38998cb1771afbf5797888749e-66f39.jpeg 1890w,\n/portfolio-2018/static/1*lEV7DsAymsMz79d5bbTjCw-57a00f38998cb1771afbf5797888749e-2f776.jpeg 2000w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>If you draw things on paper it totally looks like proper rapid prototyping.</p>\n<p>What’s going to be our unique selling point — the thing to distinguish us from every other code name generator out there — is the visuals, so we’re going to prioritise them and tackle them first.</p>\n<p>I like to check out websites like <a href="https://dribbble.com/search?q=pokemon">Dribbble</a> and <a href="http://codepen.io/search/pens?q=pokemon&#x26;limit=all&#x26;type=type-pens">CodePen</a> for ideas, and having done that I think big, bright themed colour blocks are the way to go. Combined with a bit of colour sourcing from <a href="https://color.adobe.com/explore/newest/">Kuler</a> and pulling in a font that’s a near match to the official Pokemon logo (well, as much as any of the fonts can be), the prototype now looks like this:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*YPTutZleLI2l25SCJZ45cg-47c0ceddf37dfeb56fdb5a54222c239e-85ae7.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 72.75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAACzElEQVQ4y22QWU8TURiG578IXugFRTbRaEJiYtAYo0lh2kTCYiO0ApHFRm1FtigqQwu0nZm2YbkjIBqktSyBSsDlgpBoonShbAUsGCLIHWZez5ROmTZcPOc7OfN+z3fOUMvL37AR8gsHvzdxeLCLw7+7+LO1hr1IGPvbG4TwiexJNRIW9nc2sLMeEtaDPwSK8a4LLyaCEOmc3YT16zZMc79gjmGai0Rr5ydSCabY3vJZxpeIYJ7dAONdA5Vq9uF0p18gINW0GCWXDyDL5sMFzo/Ldh8ucj4oLD5ks37kkjOF1YdTHUfZFNOikBLt8wnEJVA5XADZhJwYmVwQjWPLaJ9ZhX48jMcTazBMhlH5LoQ28gpmagl3BwNItwZwnj/uk6AyyVSRDJtYiZDc7Ay3gmLDEIqMAyhsGUVJwyAUXAgZ/ArS2VA8e1QToTLFQxnZopBdQaupD4fDNuxaedRpGaTaQshreotLr704xwaR3CeRIMyKTgwix/Idvb2tmPc0Y57Vw6hpxfXmfnQwr3C1vgtpZKA4+ERhGh+EnHTy08/2bOJGeQu4fAW894swq3mAdosVnJ1D/kMTEf6Egl8iJPaKUE+1Xsh5pvuI2nuT8NQzWK3V48DYhoWSajjMVjznbNCV1qBB44JRN0Py00jup/qU7yHRS+gvcMF+cxj92jqMvKzCSHklth41wFVjgL5Kh/qyJ3DeJvmC0Wi+LwmKU7kRR+0Cq/LAoX6DKUMNpgeLMdCoxD+zBYEKPQxX8lB6rQJ29TjJu5DQG4Oyk0WCJyGH6gO6aSIsroW76A6a1RoslFXDSZdAq2xCl3IomuFpF+S9EpJQiAppUeiGhR4Bo2LQo3Sg4xZ5SnU37BoWzoJJONWeuCxWhbiDdguUuMQn0G5ZeIw8f4wI3GALPeBoIlKNJssgv9DxDWNS8cnH4SMS927ZWfwSglTJd+E/bT46pg4YyQIAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 YPTutZleLI2l25SCJZ45cg"\n        title=""\n        src="/portfolio-2018/static/1*YPTutZleLI2l25SCJZ45cg-47c0ceddf37dfeb56fdb5a54222c239e-082ce.png"\n        srcset="/portfolio-2018/static/1*YPTutZleLI2l25SCJZ45cg-47c0ceddf37dfeb56fdb5a54222c239e-c7cb1.png 158w,\n/portfolio-2018/static/1*YPTutZleLI2l25SCJZ45cg-47c0ceddf37dfeb56fdb5a54222c239e-93041.png 315w,\n/portfolio-2018/static/1*YPTutZleLI2l25SCJZ45cg-47c0ceddf37dfeb56fdb5a54222c239e-082ce.png 630w,\n/portfolio-2018/static/1*YPTutZleLI2l25SCJZ45cg-47c0ceddf37dfeb56fdb5a54222c239e-c4006.png 945w,\n/portfolio-2018/static/1*YPTutZleLI2l25SCJZ45cg-47c0ceddf37dfeb56fdb5a54222c239e-85e68.png 1260w,\n/portfolio-2018/static/1*YPTutZleLI2l25SCJZ45cg-47c0ceddf37dfeb56fdb5a54222c239e-85ae7.png 1600w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>How Slowbro appears: Water / Psychic Pokémon</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*R8RyGzF6XQ_iPRnIK3nKKg-b71662517f69e7cf2b0e74ec492719b9-58fd0.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 72.75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAACa0lEQVQ4y42T/0sTcRjH73+RzIpw39xGaYXshyLxp0IhiKCiwiLqhwjRilQyoebd5n0Zy4FQv0i/VFKtclrb7JcQl0R386buW2yDQu234t59Pnc33WyD/fC+5+65e17P83ye55jV1QRyqqJtlfL48/sn/hL9+pHGRiGLrWIOm8Wsqcp7QxtUhay2WcqhlElpmeQ3jfHOZbSH71ZA5Yvl4VsogosXdLGm9S2YNr5jqfjPZRU1XzQP73waTDMrYy+naM2cghZOhltS4BQV3R4JKnCJMuyC4bfzsv6OPtsFBU3e79gzboqVNcLSGJeUBFUb+fDopIqx2TVSrYq7b1IYCafQP5PC+Wnij6xh+D3RWxUPyPtL0zKsQhLugBFfFuMgIAfJ5hCTelYbbzxbJ2T0ShF0B2I4KKpof7wIF7cMu7iiV2kzY4zYHTG6U4cZljppkIP9io/h63j19AqaBqO4fy+IM5NLODCR3C6AWrtYjjNUAazISEq3jMuIDZ1D6YIVIc8JhHkfhmfToGfulCqLUGoDy3KSA28JZHFn5AkQuInFGz2IhiREOBGvn71Ep7AMC+1AqAbVBpKPKHC/tI6xawNQ+45BHejAl9HbGOzn4bksoHN0HtZAqjGg3jYBWoPr6L4VAus+hJmzx/Ghqx0n+1jsmyqRocnmOScbqNAcSiuvomsqgVPcHK4+EvHp+Wn0DvFo9cv6ehmJG6zQbkLpjvWE4rgYfAGPPwKLX/l/ePWABKJVT9sAdwhLOMwn0CapRqI6EFMambrG0MvulsvrYCXTtBGVW6wHrWQwux3VC6ts/wm1dq6yO8qg+gdOWD3+nzz85gAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 R8RyGzF6XQ iPRnIK3nKKg"\n        title=""\n        src="/portfolio-2018/static/1*R8RyGzF6XQ_iPRnIK3nKKg-b71662517f69e7cf2b0e74ec492719b9-082ce.png"\n        srcset="/portfolio-2018/static/1*R8RyGzF6XQ_iPRnIK3nKKg-b71662517f69e7cf2b0e74ec492719b9-c7cb1.png 158w,\n/portfolio-2018/static/1*R8RyGzF6XQ_iPRnIK3nKKg-b71662517f69e7cf2b0e74ec492719b9-93041.png 315w,\n/portfolio-2018/static/1*R8RyGzF6XQ_iPRnIK3nKKg-b71662517f69e7cf2b0e74ec492719b9-082ce.png 630w,\n/portfolio-2018/static/1*R8RyGzF6XQ_iPRnIK3nKKg-b71662517f69e7cf2b0e74ec492719b9-58fd0.png 800w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*eNQP3j3lIjIUE2agboYI4Q-8a923990772a34079407ea110aab57a9-58fd0.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAACNElEQVQ4y5WSXU/TUBjHm+iFMNZui0FELxeiJr6ECxO88FL9Ht54o3FmRNQvoJ/AGDUmmBiMgmKUGIyysbZ0gLzoNkK7icjcYGNru3YzIaF/T9u9dOgSdvHLc87J8/zOc56WWpfWjIXVHxBTeSOzVUFB3UW+uIOfGwo2snoVzbGuktHqpLOa8eu3isRqxqAKiUEU40Fjc/E6NpduoCQOoZy6B10cJAQIQejS7er6lo1EzpJ3SbxjQ9aaOGQUE0FQaogy1DCFUpgyCFBChCkC1w1FOAGZ64Uc7oASPQWZ90Oe6YPM9tg5oTqGGU0XpbA+NMEdhsq6sR0dQCF2E9vLV5Hj+pH/FkB2MYDc0jXk+PNWjp3rq2PWUyrLoE6EhmJi7d3If+lEetINlfNAYw/ij3AI8rSL5HVY+WZuUz2B2ntgIk8z2Jmj8fmRF6/ve4GvLsTf9oIdPgKdc5ELPXXZXuk/QsVKYqDPMJDedCE2fgErU5fw/uk5TDw8RuZ33LpQrebtq0NbSGNt1Iv46GnEnvUj+sCHSuws1ucvY+sTjRJHtyfUSEFmkkFy3I9d/iQWXvgx+6QHyYlux3Pb6ZCnIb7zQQpdhLxyBXOvzuB58AAqgnN2+/0oRFgmhbERD2aH/Uh96MP846P4/rLLmq31J0Ta6pAmT2aQ/khDGuskM3NheYSc8YzV1f9EDiFt2JtabJaWBQYlIqoIjc5sqfO5DQfVSlaLNYkcYVr+e05Hyw7bo+H4C8xvVf7ju/GqAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 eNQP3j3lIjIUE2agboYI4Q"\n        title=""\n        src="/portfolio-2018/static/1*eNQP3j3lIjIUE2agboYI4Q-8a923990772a34079407ea110aab57a9-082ce.png"\n        srcset="/portfolio-2018/static/1*eNQP3j3lIjIUE2agboYI4Q-8a923990772a34079407ea110aab57a9-c7cb1.png 158w,\n/portfolio-2018/static/1*eNQP3j3lIjIUE2agboYI4Q-8a923990772a34079407ea110aab57a9-93041.png 315w,\n/portfolio-2018/static/1*eNQP3j3lIjIUE2agboYI4Q-8a923990772a34079407ea110aab57a9-082ce.png 630w,\n/portfolio-2018/static/1*eNQP3j3lIjIUE2agboYI4Q-8a923990772a34079407ea110aab57a9-58fd0.png 800w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*m25zYP6mICe5CQefjw2cYQ-988410de45d3326bcc076a4b70ec79de-58fd0.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAACZ0lEQVQ4y5WS70sTcRzH938U2YNQ23Znk6lFOV0QFfQg+g1iA1vbaNPd5mzZpkZzw23WwKdFv0zIlZnUIx8Lzt1u88ckN8RZiCGlVkgEwb373t1yN0laD15877j393Wfz/fzVWxkF/jFzAI+La7wW2ub+PX1B36ub2Hj4xq+r67vyrfVLzLW+c2Vz1jJ5HiFLxuFPzPMd6efoSc9iL6lEfR/eINA7iV6c1H4CIHcK/QuRcV3AT/5Fl4eRWj5dZ5RBHMjvD87DEXZlJknYH/cwhNQFjNjb+w6armbaOA8OJ7qhpZ1oSHlRSPnhT7ZhfrkbeyZNIrZfTGTAC+sgkuhSbRDwilSnXBBydrRkh5A5/wT3E0P4TIXgvf9IO7MP0fH7EM0p+5BzTJitrBfQkEnHPgDRUICwrOSbcNBthXlrAXKlA0HOAsqklYo422ojLcW8gkGckeRUCQvFNYq1gn9xH00Rvuge+xHzbsuUEk7qkgn1HbO8S8hIe6AetqOY0M90LVGoLP146T7AU65IlC9sIGelTL0jup2FQptHCLV1QdCOG2w48TFKzjr9qG6+RY0bvKzyULLJQhJiCObJmzQD0TQ5AriXFMTzpts0Bo8oIwtUI+TKpOlChNSO9Qcg9oxD1SXrNBe9eCoPYi6jjDoRzZQ04zUSSlCMRRnoJp2om7MjGs1dTgSZmDtdMJquIDyGTIUVja8Us6QFq+DA5opBofHb6AyZYX+rQlnnhqh4vIy2RUrEpIB8GJl+VV6LkiFSmkyICVZK+bat1ulZEOROxQ7ZbRMVlRJXIKSdVF0VHnHXyv8X+SO386Q9pT2By9hAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 m25zYP6mICe5CQefjw2cYQ"\n        title=""\n        src="/portfolio-2018/static/1*m25zYP6mICe5CQefjw2cYQ-988410de45d3326bcc076a4b70ec79de-082ce.png"\n        srcset="/portfolio-2018/static/1*m25zYP6mICe5CQefjw2cYQ-988410de45d3326bcc076a4b70ec79de-c7cb1.png 158w,\n/portfolio-2018/static/1*m25zYP6mICe5CQefjw2cYQ-988410de45d3326bcc076a4b70ec79de-93041.png 315w,\n/portfolio-2018/static/1*m25zYP6mICe5CQefjw2cYQ-988410de45d3326bcc076a4b70ec79de-082ce.png 630w,\n/portfolio-2018/static/1*m25zYP6mICe5CQefjw2cYQ-988410de45d3326bcc076a4b70ec79de-58fd0.png 800w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>And Magicarp, Pikachu and Tangela</p>\n<h4>Bonus Round: Going Online</h4>\n<p>For extra bonus points, we’ve even gone to the extent of dropping this onto a subdomain on my main website — <a href="http://pokeproject.psyked.co.uk/">http://pokeproject.psyked.co.uk/</a> — so that we can start getting some basic feedback from the guys and gals at the office.</p>\n<h4>Retrospective</h4>\n<p>We’ve got something barebones complete and online really quickly, which I’m pleased to succeed at, but we’re really lacking on the usability side of things — refreshing the screen for a new result each time sucks, as does the lack of permalinks or any other way to share what you see.</p>\n<p>I do like the visuals so far, but I don’t think they’re punchy or inimitable enough to be considered ‘final’, so there’s more work to be done there.</p>\n<h4>Next Steps</h4>\n<p>One thing that’s bugging me is actually <a href="https://gist.github.com/shri/9754992">the JSON data that I pulled off GitHub</a> — it’s not complete or contiguous when you look at it in detail — and the missing bits of data are causing the occasional Javascript error and breaking my code. My plan for the next session is to find — or create — my own, more optimised, more reliable data set to work with. But before that, we’ll do some testing and get user feedback from my as-yet-unsuspecting work colleagues.</p>\n<p><strong>Edit:</strong> PokéProject is now online @ <a href="https://www.pokeproject.co.uk/">https://www.pokeproject.co.uk/</a></p>',frontmatter:{title:"PokéProject Dev Diary: Day Two",date:"September 14, 2016",tags:["Design","UX","Hackathon","Pokemon","Agile"],url:"https://medium.com/@psyked/pokeproject-dev-diary-day-two-a6019e6cf0f0"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-pokeproject-dev-diary-day-two-a-6019-e-6-cf-0-f-0-50dcac52fb89136db35e.js.map