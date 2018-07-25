webpackJsonp([0xf5fffab77f3],{1141:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/duotone-version-2/index.md absPath of file >>> MarkdownRemark",html:'<h2>Refactoring and enhancing an MVP</h2>\n<p>If there’s one thing I’ve learnt from successful projects over the past few years it’s the value of identifying and building the Minimum Viable Product (MVP) and then enhancing it post-release.</p>\n<p>Keeping the project scope narrow allowed me to build and release <a href="https://psyked.github.io/duotone/">Duotone</a> after a couple of evenings’ effort. <a href="https://medium.com/@psyked/building-duotone-fc7e0d9a3b9e">(Read my initial post about Duotone here.)</a> I haven’t shown the source code to anyone though, because it’s not exactly portfolio-worthy. However now that the project is publicly-available I can start building up a backlog of enhancement tasks for the core product.</p>\n<hr>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*-mcN2nl3eJLzIYq5PCQi_g-1fb3e39dfd455754f1d0a809eb296113-56bef.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAAC5UlEQVQozw2R+0uTYRTH3/+jC0pCqU3TLl4zc1IalUJEKQUJWZQhlYW69/5c3829012dc9OZDZuKOWflqonztuXassma+tf0wPnhcHg+h+d8P9xaDs+mtW85sv0P7R2i3QLKHMHlfRrZJx/S2u8jGMngJ2Fi9Kp1dqUEmIqk4RLI961o3j0rZ0/QxQxJFtBmHn3P4VQBpQ/hTNrMr9t8KXP2COwc4r5F1BlE7RPySWGoSBw+wQ89CBHHL52b3MGTSY0BK/vEs2v+8hcnC3A+QxkfTGv6lmUgZq13KAYqVFD+hGnwFD94Why6E8SjSZ3bOIBLGeLcZK8t6weIX6PgBw3tkbV9tJOHH9Pa61WtbUK9qEsXbXKtQ2UkW9Hqg2RL575mQfIfRD+pKWaxxdHAKn0VNYsxOr6FI1kUToH+ZdI5Sxnc4AKNbtDgUM6opqtuwO7iVjNwMw8ndulogmhxEv5NAzv4xRLpmScvPlOjU+yYhjcDuMWHmsZhpa70LuBHIVBhlcUNnYtmYaoAPUmLsKb1hJEcI95tAuLaWIIEU7R6ROj5BGnC+jSqd3+2Nftws0e55Ye1LijErdyXPyh3rLKEQNzChGWPkT+leVMjPw8wS/GuX+kJY3tK74uNPV4ZbZnEVVbJYJHOm6VnUSv3LYd382AuTd5G0MOg0hUQ700pD2fU3pDycgG8i+L+CDV6lAqzeBYLTHKzUyrDPOtvz5q5jTxiMhN5NJ5A75fhmyXwfB4aJ0CdC7A72wKoya0Wy8Mn+UFWp4WhyhHpkk05h4U6l8p1z+GuELo/o3ZMgY4g6pjBNyZhgxvU2NUrduWCVS7XxAqLVGlhvxUvjSo3pqjRj696IJtwlbpcZVNrnLBxHNW74eUxtdqmMJIprdZlg1ms0qUah8oaBje4YXtQaw2Q6z5covIcm9a7QNs0MykbNJEBNU5wzQsvjEilRCglPNvCqoyK5VS8Mqa0+gmLrdEDi2XTf58FmbhK/7IlAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1  mcN2nl3eJLzIYq5PCQi g"\n        title=""\n        src="/portfolio-2018/static/1*-mcN2nl3eJLzIYq5PCQi_g-1fb3e39dfd455754f1d0a809eb296113-082ce.png"\n        srcset="/portfolio-2018/static/1*-mcN2nl3eJLzIYq5PCQi_g-1fb3e39dfd455754f1d0a809eb296113-c7cb1.png 158w,\n/portfolio-2018/static/1*-mcN2nl3eJLzIYq5PCQi_g-1fb3e39dfd455754f1d0a809eb296113-93041.png 315w,\n/portfolio-2018/static/1*-mcN2nl3eJLzIYq5PCQi_g-1fb3e39dfd455754f1d0a809eb296113-082ce.png 630w,\n/portfolio-2018/static/1*-mcN2nl3eJLzIYq5PCQi_g-1fb3e39dfd455754f1d0a809eb296113-c4006.png 945w,\n/portfolio-2018/static/1*-mcN2nl3eJLzIYq5PCQi_g-1fb3e39dfd455754f1d0a809eb296113-56bef.png 1200w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*afAgT9m7mk3dBdilBLvmgA-d049688c12344e0c9eb6bfecff9f125a-11e54.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAADBf/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABXz8TZ02DD//EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMSBBH/2gAIAQEAAQUC3idL6FJ8RrmeMxaE5n//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwFX/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEh/9oACAECAQE/AdR//8QAGRAAAgMBAAAAAAAAAAAAAAAAAAEQESFB/9oACAEBAAY/AqElwqNZh//EABkQAQADAQEAAAAAAAAAAAAAAAEAEUExIf/aAAgBAQABPyFyjFZKdKRrWMqFAzy50iIqU//aAAwDAQACAAMAAAAQ/wDv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEhEf/aAAgBAwEBPxCCxD//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAECAQE/EKKen//EAB0QAQACAgIDAAAAAAAAAAAAAAERIQBhMVFxgcH/2gAIAQEAAT8QUwYErQp36wIAMgIpN4yhVbGd/cnG05RW7vNg4YbfPeL2A3zn/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 afAgT9m7mk3dBdilBLvmgA"\n        title=""\n        src="/portfolio-2018/static/1*afAgT9m7mk3dBdilBLvmgA-d049688c12344e0c9eb6bfecff9f125a-af57e.jpeg"\n        srcset="/portfolio-2018/static/1*afAgT9m7mk3dBdilBLvmgA-d049688c12344e0c9eb6bfecff9f125a-847f7.jpeg 158w,\n/portfolio-2018/static/1*afAgT9m7mk3dBdilBLvmgA-d049688c12344e0c9eb6bfecff9f125a-93973.jpeg 315w,\n/portfolio-2018/static/1*afAgT9m7mk3dBdilBLvmgA-d049688c12344e0c9eb6bfecff9f125a-af57e.jpeg 630w,\n/portfolio-2018/static/1*afAgT9m7mk3dBdilBLvmgA-d049688c12344e0c9eb6bfecff9f125a-28cf9.jpeg 945w,\n/portfolio-2018/static/1*afAgT9m7mk3dBdilBLvmgA-d049688c12344e0c9eb6bfecff9f125a-11e54.jpeg 1200w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Duotone output on the left, Original on the right.</p>\n<h4>More features, or better features?</h4>\n<p>That’s a trick question really. It’s rarely a good idea to add more features and more complexity to an MVP. It’s the very nature of an MVP codebase to be functional but hideous, so the first task should really one of consolidation and reducing complexity that to make future development easier.</p>\n<h4>Going from Proof-of-Concept to more manageable code</h4>\n<p>One of the biggest challenges with the current codebase is code duplication — duplication bordering on the unwieldy. Let’s have a look at some source code; truncated, for the sake of sanity, as the actual code is several times longer!</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*EE8z5BQY5L-bjSzx8dPcJQ-b1eac5a3d10581d1ddc711b76d8b8399-f7721.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 95.25773195876289%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAADOUlEQVQ4y5VUW2/cRBjdX4EQbZo08e7aHnt9G9/G9tqbrUIq9QUp2TSFLH2gby0XpShFolWaOz8AxA9ASDxW4vf5cMZJGiVNQTwczcxn+/jMOd9M7927v9vXP+/j+OSXdv/4DPvHp3hLHJyc4e3RKQ4PT4jzml7r8fD0rHt+yPXBcTdv3xwc4Y8//2p7z7/dxWef3GsDEcILJDwZwAw8rIxcDCwBkzBsB8vC6Wp6vDewsWBYWLpvYrFvY8kU+HTRwObWTtvb/fGndmFZwJeqVasN8skYxYMGyWoNP8rh+CmcICPSDoJr201gj64gRin6Voj502fo/bD7Cgv3bUhZIIkVJEm8IIEbpRi6EgM7wlBch+nIa7DcGCtDD1/Nv0Hv+909GIaLadKgzGqkmUKoFPycCFO4JLe8+BrRzbkmXL4k1ArvLJkYcSupzBEXBdJJBRFSJYkcTTiKP1D1H4QWhJfC5MNRnMFN826rBn3pWxHDuQE7fG+FKeRNwr2OUMkK61GF1ahETKVRnEIlGX3NINMMEW0ICoUkz2lJAUm/bYdWOLcpXDSZZoa1aIz1vET1eQPVlPhiWmHaVFAPJ2geTaHWauQPG2TjCdbjBqGXYfDhlvdwlyknVDb2FaowR5qozruI0IkLtkvIH7psEZ18l6z4iIeXKTdxDZlUCLm9gB563JpunctA+to3cXsL3ZpyQAUlfcmYcrZawZUpfK2QpLYfd+b/r5Qdpiy4Hb9TpzB8n/JFohcYXOLjCq9SfhCWqAMmyKMWUlnGpGMqjYiAiftZznSpPGXicd6pvl0hU9Z9OA1JmhY8yzWyusCjpkAzLpEx3ZLJZ6wrnXI9wZqs/z3lVJYd4TQuoIoKHvsvp5qIo0M1UiomzpDop/B4itzzsDpCjleEL1/B6I9QxCTh8fN5c3i8TQQ/cPihw1bRa4drl2vh84bRhLrOd/U7+geG6WPn6bO29+K7l7h7pw+H96EYhSSMIAkn5BiECCKJQF8OVDC0PBjCxwpHa+DBHvowWF82vc622fYcvV9/+73d3HiCrSdft7PtHWwSsw5zzB6fz3Vt8/E5ZhfQtY2L+db2vN2YfYkj3vr/ABXJiCQalX15AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 EE8z5BQY5L bjSzx8dPcJQ"\n        title=""\n        src="/portfolio-2018/static/1*EE8z5BQY5L-bjSzx8dPcJQ-b1eac5a3d10581d1ddc711b76d8b8399-082ce.png"\n        srcset="/portfolio-2018/static/1*EE8z5BQY5L-bjSzx8dPcJQ-b1eac5a3d10581d1ddc711b76d8b8399-c7cb1.png 158w,\n/portfolio-2018/static/1*EE8z5BQY5L-bjSzx8dPcJQ-b1eac5a3d10581d1ddc711b76d8b8399-93041.png 315w,\n/portfolio-2018/static/1*EE8z5BQY5L-bjSzx8dPcJQ-b1eac5a3d10581d1ddc711b76d8b8399-082ce.png 630w,\n/portfolio-2018/static/1*EE8z5BQY5L-bjSzx8dPcJQ-b1eac5a3d10581d1ddc711b76d8b8399-c4006.png 945w,\n/portfolio-2018/static/1*EE8z5BQY5L-bjSzx8dPcJQ-b1eac5a3d10581d1ddc711b76d8b8399-85e68.png 1260w,\n/portfolio-2018/static/1*EE8z5BQY5L-bjSzx8dPcJQ-b1eac5a3d10581d1ddc711b76d8b8399-38b38.png 1890w,\n/portfolio-2018/static/1*EE8z5BQY5L-bjSzx8dPcJQ-b1eac5a3d10581d1ddc711b76d8b8399-f7721.png 1940w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>This code is fairly complex, there’s a lot of duplication going on and a lot more SVG markup than actual script. Maintaining this isn’t going to be easy, and the code isn’t awfully readable, so that’s one of the highest priority things to improve.</p>\n<p>Looking closer at a small code snippet, we have the following, which splits and remaps RGB colour channels — represented in values from 0.0 to 1.0.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*is6ewKVqoINvK0KykCCG-Q-ca6169efff0b25b114f621e825a4d22a-a96e5.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 29.005524861878452%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABV0lEQVQY022P2U7CQBSGeQ9jgLLUQpfpAqXQmbZTgyCRN1FAudXE91BWE8Br9Ql4EHyR+R2WeGG8+HLW/885mdfXGWazpZhOlziyODL7w6En5/MlJqediawnsn6ZzrF4W4nd7ltkcueqCCoePNUGUQmIZsMwCUzDgmsROKYFXeYWkT1iQ/Nc6I4NS85U4kD3PJRVExdVV3x8fknDsgnuJ+LKZUhaLYRJhHo7BpP5dULRZhR1xhB0YjS6MTzOEPY4WD+Fn3LwIEVPaltNjtXmHRlFtdBpcPRrEdphCH6ZIOgmiGkLNylFJ6bwI4ZmW4o5R8ykKaXwohB2M4TvUoQkQN2PsN4b5vNV4es1uJoLW3PgVFyo8u182UBBXr9H2VOyUCyaB3IFA1lFl1FHtmTgTKlC1T2xWm9EZjAai7vhA34ZnBj+z61ksGd0isOx3L/H49Oz2G634gd2iO/y1x3HHwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 is6ewKVqoINvK0KykCCG Q"\n        title=""\n        src="/portfolio-2018/static/1*is6ewKVqoINvK0KykCCG-Q-ca6169efff0b25b114f621e825a4d22a-082ce.png"\n        srcset="/portfolio-2018/static/1*is6ewKVqoINvK0KykCCG-Q-ca6169efff0b25b114f621e825a4d22a-c7cb1.png 158w,\n/portfolio-2018/static/1*is6ewKVqoINvK0KykCCG-Q-ca6169efff0b25b114f621e825a4d22a-93041.png 315w,\n/portfolio-2018/static/1*is6ewKVqoINvK0KykCCG-Q-ca6169efff0b25b114f621e825a4d22a-082ce.png 630w,\n/portfolio-2018/static/1*is6ewKVqoINvK0KykCCG-Q-ca6169efff0b25b114f621e825a4d22a-c4006.png 945w,\n/portfolio-2018/static/1*is6ewKVqoINvK0KykCCG-Q-ca6169efff0b25b114f621e825a4d22a-85e68.png 1260w,\n/portfolio-2018/static/1*is6ewKVqoINvK0KykCCG-Q-ca6169efff0b25b114f621e825a4d22a-a96e5.png 1448w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Dealing with colours as individual RGB channels and as values from 0 to 1 like this is unfamiliar, but with a little refactoring work we can make this more readable, familiar and maintainable, so that it looks like this:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*Ph48PTFnLjbG29GhkeD3lQ-371e6cd13ac0b25ff1f4583f1bf1c549-36be9.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 18.91891891891892%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAAx0lEQVQY023MQY6CQBAFUO6hia5GMY2t0AiCM4cTmllpjNGVJi418RKD3ehBuEf96cZkEh0WL/m/qlKOvj/wozSVxu2mUZZPNr90paF0BaX+ITs3e6rrmpwJjyiezCEMLhIEXwv4nym8IAafzeEvUkwT06cxhkzA9cJ3xHiEbt+l8+VKDjNHPguJm+VoHMILo4bNLhdgwaxhn32M/FauJ9DpDehwPJGz3e1pKQss84KyvECWySebm1789Vy2Iim/sVpvqKru9Avj+rbvJ9r4rwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 Ph48PTFnLjbG29GhkeD3lQ"\n        title=""\n        src="/portfolio-2018/static/1*Ph48PTFnLjbG29GhkeD3lQ-371e6cd13ac0b25ff1f4583f1bf1c549-082ce.png"\n        srcset="/portfolio-2018/static/1*Ph48PTFnLjbG29GhkeD3lQ-371e6cd13ac0b25ff1f4583f1bf1c549-c7cb1.png 158w,\n/portfolio-2018/static/1*Ph48PTFnLjbG29GhkeD3lQ-371e6cd13ac0b25ff1f4583f1bf1c549-93041.png 315w,\n/portfolio-2018/static/1*Ph48PTFnLjbG29GhkeD3lQ-371e6cd13ac0b25ff1f4583f1bf1c549-082ce.png 630w,\n/portfolio-2018/static/1*Ph48PTFnLjbG29GhkeD3lQ-371e6cd13ac0b25ff1f4583f1bf1c549-c4006.png 945w,\n/portfolio-2018/static/1*Ph48PTFnLjbG29GhkeD3lQ-371e6cd13ac0b25ff1f4583f1bf1c549-36be9.png 1110w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>The colour values are essentially the same in these two snippets, but the latter one is much easier to manage. Instead of hard-coding multiple SVG filters in our source code we did in the original version, I’ve created a function to generate the SVG markup from the supplied Hexadecimal codes.</p>\n<p>Once we can replace our hardcoded SVG markup with Javascript source code values, we can easily extend our filter effects and beyond two-colour transformations, like this:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*Tuv9QsOeuJbYF9-Uwykq9A-a4e6a58676999729e86578d9e75e90eb-7d028.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 15.261627906976743%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsSAAALEgHS3X78AAAAoUlEQVQI153MOw6CQBSFYTZgYWEDOsgEw2PAhQlG3YQWFsbE3gAzYKM2uA+CruceJ4AbsPiSP7k512jfH8pyBSkrKlSFotTUQHcuK8iyVwz9u8vy1rfeXjOJpmnJOJ0vMCc2efMQzA3hRAJsEXR4HGHKfThCdG1xD3wZwfZDzNwATiy6jck8Go0t7A9HMur6Rel6hyTd0ird4E+U6B/3x5O+A9iJRmr5Y2wAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 Tuv9QsOeuJbYF9 Uwykq9A"\n        title=""\n        src="/portfolio-2018/static/1*Tuv9QsOeuJbYF9-Uwykq9A-a4e6a58676999729e86578d9e75e90eb-082ce.png"\n        srcset="/portfolio-2018/static/1*Tuv9QsOeuJbYF9-Uwykq9A-a4e6a58676999729e86578d9e75e90eb-c7cb1.png 158w,\n/portfolio-2018/static/1*Tuv9QsOeuJbYF9-Uwykq9A-a4e6a58676999729e86578d9e75e90eb-93041.png 315w,\n/portfolio-2018/static/1*Tuv9QsOeuJbYF9-Uwykq9A-a4e6a58676999729e86578d9e75e90eb-082ce.png 630w,\n/portfolio-2018/static/1*Tuv9QsOeuJbYF9-Uwykq9A-a4e6a58676999729e86578d9e75e90eb-c4006.png 945w,\n/portfolio-2018/static/1*Tuv9QsOeuJbYF9-Uwykq9A-a4e6a58676999729e86578d9e75e90eb-85e68.png 1260w,\n/portfolio-2018/static/1*Tuv9QsOeuJbYF9-Uwykq9A-a4e6a58676999729e86578d9e75e90eb-7d028.png 1376w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<hr>\n<h4>User Interface (UI) enhancements</h4>\n<p>Having simple Hexadecimal colours representing the filters in Duotone suddenly makes new features a whole lot easier to implement. As a UI enhancement I’ve swapped out the filter selection dropdown for a heavily visual list, demonstrating the gradient colours used in each filter.</p>\n<p><img src="/portfolio-2018/1*dfcatQafd-1zeFuKUnABPw-7929360f71bc01849d197eb85d881f3f.gif"></p>\n<p>Version 2 of Duotone, in all its glory.</p>\n<h3>Conclusion</h3>\n<p>An MVP is meant to be rough-and-ready code, which means that your post-release efforts are best focussed on refactoring and consolidating your codebase rather than adding new features.</p>\n<p>Refactoring source code and making it more manageable is an enabler for new enhancements, either on the technical or user experience side of things.</p>',frontmatter:{title:"Duotone: Version 2",date:"March 20, 2018",tags:["Software Development","Side Project","Duotone"],url:"https://medium.com/@psyked/version-2-bb6e7a08644d"}}},pathContext:{prev:{frontmatter:{path:"/blog/e-newsletter-the-benefits-of-using-adobe-air/",tags:["air","e-newsletter"],title:"E-Newsletter / The benefits of using Adobe AIR.",image:null,date:"2008-12-19T21:34:22.000Z"}},next:{frontmatter:{path:"/blog/displaying-link-locations-with-css/",tags:["css","html","accessibility"],title:"Displaying Link locations with CSS",image:null,date:"2007-11-27T08:01:15.000Z"}}}}}});
//# sourceMappingURL=path---blog-duotone-version-2-14fa6698df5196092227.js.map