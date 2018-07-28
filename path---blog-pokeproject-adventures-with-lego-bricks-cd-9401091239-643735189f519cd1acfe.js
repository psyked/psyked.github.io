webpackJsonp([0x68b4ee4914c0],{1397:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/pokeproject-adventures-with-lego-bricks-cd9401091239/index.md absPath of file >>> MarkdownRemark",html:'<p>By this point I’ve already mapped my colour palette of my source image to the available LEGO brick colours as described in <a href="https://medium.com/@psyked/pok%C3%A9project-adventures-with-lego-bricks-7f24c02f6d9d">my previous post,</a> and now I want to move beyond simple colour trickery and onto making this idea a physical reality.</p>\n<h4>Optimal Brick calculations 💰</h4>\n<p>Looking into the feasibility of actually purchasing LEGO bricks to make these sprites, it turns out it’s quite expensive. The bricks themselves average around £0.05 each, which puts the cost for a 64x64 pixel image at £204.80, which is <em>extreme.</em></p>\n<p>However, there’s economies to be made. If you can use fewer larger bricks to produce the same image, the effective cost-per-pixel can drop significantly, to around £0.01 per pixel, which saves quite a significant amount of cash.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*PQTitbDaP87fIPGqTqcq8A-0bbd1ff84b52071e5c159faa2889fb7d-c5fe9.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 93.93939393939394%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAAAsSAAALEgHS3X78AAACgElEQVQ4y3WUzW7aUBCF74u2D5EXyD6rPEFE93QR0URqpLBxUPgvYJIUjMFgIIABY4xt0kLoxx2FTdRZXB3fOz9nzgwo67dRLldzuZxlWePxeKjNdd3n5+dms1kqlQqFQrvdLmrDp1ar9ft98VELzxkNTNcdjkajyWRCPKfv+7PZbDqdvr6+8ul5Ht6A+XyOG0/cgFXgN+PFT8uyM5mMYRjVapXnMAwX2pbLZZIkAJLGcRwEgfthpFa9SrVn2R3bhgwelCIruYWY4zjdbpf7Xq8nYDAYQGGqTXWKxV+mSXsEUIdIoWrbdqfT4b5er5PX1AZotVo4SEdq/PjoXF05w2H2/h5tGo0Gtyfa6/UatgAuoyharVY0BSOycKni5TIaDFDp6ekJbhAjgN58bXiDOWEkGEAYavGpRvl8K53eJsk6PNpms9lut4fD4a+23W73/v7O+fb2Btjv97yCUZFL9ZJKVc7O+o5zn80yQ1ThjWDY4oE3mABqAgigIDUgRWrFYxyGEsC3ZMW22j5jHE7FVe3y0vjytVGp/Li9Pc2ZOjI2egOL+FTjkyWDHSfTUfF8vk8SPwiI4Q0PVKXzSNtG2wlHHyb3amgYlYsL5stwZUPgQwvCFpHAkGQEACSgYYI5j4K5d3ejm5up5+XzebhRXET6o02C0QL9JFiSipaKUYSTyWqxiOIYJaFNk5v/m4xTjzVU7fR3O/WtUa9fX1/nHh7YMKQiC7sNYB/AtMOqsrzw4ufJLnGioqI6zCL9i6EZGS8GZ5kKNwCYC2EAT5xg1c1kyufn/Ak0TJN8LK20J1mk589LwnkUzH952XS7wXqNWowOp5NImGBZTxFMNoQT/A9RShDxGy7p/AAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 PQTitbDaP87fIPGqTqcq8A"\n        title=""\n        src="/static/1*PQTitbDaP87fIPGqTqcq8A-0bbd1ff84b52071e5c159faa2889fb7d-082ce.png"\n        srcset="/static/1*PQTitbDaP87fIPGqTqcq8A-0bbd1ff84b52071e5c159faa2889fb7d-c7cb1.png 158w,\n/static/1*PQTitbDaP87fIPGqTqcq8A-0bbd1ff84b52071e5c159faa2889fb7d-93041.png 315w,\n/static/1*PQTitbDaP87fIPGqTqcq8A-0bbd1ff84b52071e5c159faa2889fb7d-082ce.png 630w,\n/static/1*PQTitbDaP87fIPGqTqcq8A-0bbd1ff84b52071e5c159faa2889fb7d-c4006.png 945w,\n/static/1*PQTitbDaP87fIPGqTqcq8A-0bbd1ff84b52071e5c159faa2889fb7d-85e68.png 1260w,\n/static/1*PQTitbDaP87fIPGqTqcq8A-0bbd1ff84b52071e5c159faa2889fb7d-c5fe9.png 1452w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Needless to say, I put a fair amount of effort into optimising expenditure.</p>\n<h4>It’s just not LEGO</h4>\n<p>In addition to the raw cost issue, it doesn’t really <em>feel</em> like a real project if everything is made of 1x1 bricks. That’s the kind of boring thing that an old style dot-matrix printer would output, and it doesn’t feel all that creative.</p>\n<p>As it transpires, this is exactly what <a href="http://nerdist.com/londons-lego-store-lets-you-buy-a-lego-mosaic-of-your-face/">a dedicated booth in the London LEGO shop</a> does, but I still think it’s a cop-out and I can do better.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*L3Wr47nE4EHdH1ufkMhLcg-131d7023bcb43a837e7ce21fcff9d437-877de.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACqklEQVQozwGfAmD9AM/Hw7m1t7WxsqiKk8aqcN2xIndjKA8RGRMTEBERD1tWUm5nYhEVG0c6Gah8Eph/UZaPl4R+gYqChY+GiADy7ObTy8jIwsCbjI21m3XHoDE5MyAOEBMuLCp+d3G1qJ/CtKlsZWISEg6geBSliEqjnaWnoqShnKCgmZwA8+7q8uzn08rDxb3A0rZ3wZkgJCMfKCorc25srKGYqJuTdm5oVE9OFBQSmnYZqYc5nZWXp4uIqo2Lq52eAO7p5O7o5Obe193W3OLKhtGpISooIzo7PCkqKi0tK1VRTycnJ0ZFSCQiH7GIG8KcN8K3tcqakst/cMWinQDs5+Hs5+Ls5t/r6O3o1ZHkuiBTSihYWWB0cnFiYWGelpOFf3+yqqqBdVrWrCHkvDbp39Xr5+jn4+Hp4d8A7enj7eji7Off7Ont59SV7sMeo4kuZWVtk4+NYmBgeHNxkImGzMLFyK9p4rUc4Lkt2cy25Nvc4dfT6eHfAPPv7vDs5u/q4e/r8evYl+a9INq1LIR7YW9scRwcGRkZGC8uLXFtdLqdR+S3I961J9/OqObg4+ri3urh3wDl1Znz8PPv6t/w6/Dr2Jnetx70ySqPezYsLjZpZmReW1tkYmQzMCXMpCnpuijarh/izJro4ufn39rq4t8Azasq5tu98e3r7uns69eY78Mhv50oem1GJSYoPDo4LSwrMzIyTEpGd2lAp4Yf3K0X4cV+5N3l593Z6uHeAIx+V9/b1PDq6O7o7OXTl5p/HRcVEUFBR2hlYxAREAwNDDMyMYeBgjEyOBASFGpXIMeweeXc3+Xc2Org3gC/ucHy7vDs5eH48u+so5IKCgkHCQslIyGJhIVYV1Y7PDtwbGx/eXqRjo+hmpyuqbLQyMji2dXl3Nrp4N3De3R9ZS4oPAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 L3Wr47nE4EHdH1ufkMhLcg"\n        title=""\n        src="/static/1*L3Wr47nE4EHdH1ufkMhLcg-131d7023bcb43a837e7ce21fcff9d437-082ce.png"\n        srcset="/static/1*L3Wr47nE4EHdH1ufkMhLcg-131d7023bcb43a837e7ce21fcff9d437-c7cb1.png 158w,\n/static/1*L3Wr47nE4EHdH1ufkMhLcg-131d7023bcb43a837e7ce21fcff9d437-93041.png 315w,\n/static/1*L3Wr47nE4EHdH1ufkMhLcg-131d7023bcb43a837e7ce21fcff9d437-082ce.png 630w,\n/static/1*L3Wr47nE4EHdH1ufkMhLcg-131d7023bcb43a837e7ce21fcff9d437-c4006.png 945w,\n/static/1*L3Wr47nE4EHdH1ufkMhLcg-131d7023bcb43a837e7ce21fcff9d437-85e68.png 1260w,\n/static/1*L3Wr47nE4EHdH1ufkMhLcg-131d7023bcb43a837e7ce21fcff9d437-877de.png 1280w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*Eg0GiHYzAPp18q6v1ty4gg-a14e50f26825bc5ac044b3e466720ef1-877de.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACqklEQVQozwGfAmD9ALk+Q8Vpb8BaX7lKT7pQVbZBRr1XXMJjabZFSb9eYrlVWcBjZ7pUVLlTTrdPTq5RP6ZrIKt7INSpQb+TKwCiTFCxc3isWFy+c3a1YmO1ZGavWlq4amqsg3qvnZKzoJTLvbXPuJykeCiGWh++mlC2izWwfiG9iSezhiYAYWFlX11gaW1zgH9+saSanY6Al4R1uKienI5/n5OFvLSozMa9282toHYfmHIivJY7q3skrnwdqXsfrX8gAGdqblZaXF1jZ2Rsc358eaibjLyzqLqyqYd4aI59b7atoq6djszBsrucXq19GKyAIq+DJZVrHaZ9I6x+IgBVVVZPUlV2fYV5go16fYCckYS2qZfFvK6RgG6IeWqcjYC9saOnmo6/saK5kkPHni+tgymhdyKSZhqccSAAS01PXGBlc3mBaW92YWdulZORsaSWt6mZuKubtKOSvbKkxbyylIJwwbu0vKuSsoMlwJEwoXUkn3chnHUfAFthZ2ZsclpeYj4/QmJlanB3f4uMjLWqnrWomp2Ne8W9s7CikauflOLd1eDTvruURbuMI6yBJqN4H6B0HgBiaXBMUFRhaG9ZXWBpb3ZgZ2xhZWmnoprGwLWclIqShHepnJG8tKzDuq/Ty8TDs5i+mkvFqFDJtGq4p4AAVlhaX2Rpb3d/bXV8XmNmYWhtZGtwiYyMmZOKs6yir6SYw7uy0cm/z8W6yMO62N3e19jUzs/K0NLU0NTYAG5ydXJ2eVteYWFobl1jaF1jZ4mRmMvT16mloJeQhpOKgLClmr+3rb61qtzd2tbc4M/T1tDU1s/S087R1AB5gYdHSk1VWV9cYmhrcHRobXNyeH6yt7zEw7+op6N2cGihmZDEwr6inJXk6uzT19rM0tPN0tPO0NPO0dVOjWj37mWj+QAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 Eg0GiHYzAPp18q6v1ty4gg"\n        title=""\n        src="/static/1*Eg0GiHYzAPp18q6v1ty4gg-a14e50f26825bc5ac044b3e466720ef1-082ce.png"\n        srcset="/static/1*Eg0GiHYzAPp18q6v1ty4gg-a14e50f26825bc5ac044b3e466720ef1-c7cb1.png 158w,\n/static/1*Eg0GiHYzAPp18q6v1ty4gg-a14e50f26825bc5ac044b3e466720ef1-93041.png 315w,\n/static/1*Eg0GiHYzAPp18q6v1ty4gg-a14e50f26825bc5ac044b3e466720ef1-082ce.png 630w,\n/static/1*Eg0GiHYzAPp18q6v1ty4gg-a14e50f26825bc5ac044b3e466720ef1-c4006.png 945w,\n/static/1*Eg0GiHYzAPp18q6v1ty4gg-a14e50f26825bc5ac044b3e466720ef1-85e68.png 1260w,\n/static/1*Eg0GiHYzAPp18q6v1ty4gg-a14e50f26825bc5ac044b3e466720ef1-877de.png 1280w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Who really wants to place 2,304 individual LEGO bricks, anyway?</p>\n<hr>\n<h4>In search of prior work.</h4>\n<p>I am a lazy programmer. I would much prefer to reuse someone else’s code than spend ages trying to figure it out myself, and to this end I Googled an endless variety of phrases looking for some kind of prior work around the optimal use of LEGO bricks in a two-dimensional plane, only to come up with absolutely nothing.</p>\n<p>I <em>did</em> read some fascinating articles about such things as <a href="https://d3plus.org/blog/behind-the-scenes/2014/07/08/largest-rect/">“An approximation algorithm for finding the largest rectangle inside a non-convex polygon”</a> and a helluva lot of posts about everything from <a href="https://en.wikipedia.org/wiki/Packing_problems">Bin Packing</a> to <a href="https://en.wikipedia.org/wiki/JPEG">JPEG compression</a> on StackOverflow and Wikipedia, but ultimately there’s nothing that I could find which was appropriate.</p>\n<blockquote>\n<p>It would appear that the optimal placement of an unlimited combination of arbitrarily-sized shapes within randomly shaped containers is not a high enough priority for the Computer Science community to have already solved effectively, much to my dismay.</p>\n</blockquote>\n<p>I was going to have to actually write the logic myself. 🤔</p>\n<hr>\n<h4>Writing it myself.</h4>\n<p>Changing the colours of an image with JavaScript and HTML5 canvas elements is fairly easy — you pull in the image data as an Array, and you loop through it to get the R,G,B,A values for each pixel, which you can modify on the fly. Simple enough, but it lacks understanding of pixel coordinates and any sense of neighbouring pixels.</p>\n<p>My solution was to copy the image data into a new data structure which could easily reference its neighbours, and then for each pixel iterate through the available LEGO bricks — first to find the nearest colour match, and then to find the largest possible brick which could fit anchored at that point.</p>\n<p>Given a few passes the outcome is quite acceptable.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*khfGNAUXONDNEk-K-2-InQ-0558fa36ecf0405017050cb7d71593dc-d67ba.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAE+UlEQVQ4y21Ua1BTVxA+IZDIo4GUBIIhAZIY8jIUQkKJSQTLyxZEQGlGHo6lFV9URm2LopaOBSnKjIIWQaGGAArqKALKxIgYBR8EtMhoZ6rtOO2PPn501JkOITlsuTdkrC375+ze3f3Od75z9yBWRDQiLDgimsOOFGeTQcx2lBBEeogRykP8d5KQF5WCgvlixIqUUhihfDIXIlSigGAOesNChVIvYuUIJWvYAhkw+FI5EStkYq/Ny9ioWBmMavL5lCNVaqqnR5qyicKJcoOGyzVvAvpy1RRiDQiXN3NFS0ESwSki4ur+cioAoD+ncr3+VU4P4weFe4IsVRilYnkw6W/Xs90f2xviSUCRUtH7XXUYVBm9WufraZ7GAh6SFOUJ61UG3SRTaACWIKZbKvCle/JbNUwSY2/2HOunHYhksCE7pO7pRRoc2+j9U9sued3ZWt1kT42qu2Ovsr6vOfXlY1sulJQVg19kOnCj46rnsQgZvAmnRBFAgqJirS/pSBDid+4O/PV2hwYmrq2BH+4aYfBMBtwbyITHwzlwtDbtVZhUa2NHygo9zFoqVJ1NX6gG5oFRaVwgQjmKRSRD7VtIVbZO/spyPm32wbBxxnIu0ylWJc5U7tZPX2pLBYSYuR6gvDk5LI1S08Mb+TByOQdqCkS7SPmqEqio8INoEjAnkVO8aUMSXDGvdFpO6fGULR/vqUjG3UcMM7dbtFCSErSFqNufJ44fOhkz9eNoHjwaKXBMDH0IZ6oTb8yl3EcGq450di5nXhwzKeDUvkiHuSIID9QL8Z1zsdgUw3B0Kr0hLye8g6gzf61+bh8uhPvXCxz3LGsc43Ms+5pTcKHYT0kCDr5HJQFLeT4HrlZRwdZGdd410fFoKxVbT3jhS+upM9e2+0B6Kqe1bQvj6JgpAIbNUdOT1jSYGMqHE0cyYOtG7TGPjkizTOymirYtOvg5/8mDThqMm32cD8/4zo60+eKH531cz674wd5tiu8rjYyByS4azG3maq8NmS7bnNAXKlQke7RVRnApiBok9MSUPZ8Z7Hd69TDSznaOttGw9bgPtrUwXI8sy+GbA6kv52pYhz6hN5v3+YMiKszoaQRoQv4o0B1sLFKQDGXiENnl9pQ/BlqSYKQ/x2W3ZOFrTVI8Zsl1Td4yznYcT5lRSEQlh0oDLo6dpEF5lu+3RN/BHXxv2qIQ92wLZAjp3l1Cnj2IycnsOZEC93tXOm/1ZODrXZmz1s738aRtLbafU2PrhXRcbuTAzRpvqPuIPpinZa5GqIYks0QUgZjcqPmxKUkkAZP0MZ82f6WDy41q52BrEj5Zn4xP18bj3gYdvnEh13XTxIXSdazfVqt5f2mjed2vHwMZWsC82Q375b9MWHKhs87gvG9dh+0317vMh5Ndwz3p2H7FgIkLqtkaOK2X8P5eERvRhVAuOXK8aCmSCHn/BVRyGytYvz+7ygH7gNrxZMiAf7bpYLJfClP9UY7xCwLXeJf/7NkD/hAeJSp6/fbF/p9bTTmLnJQsPbva9KU/2BqocLrSD+/8mP388Db6i1tNdBhr9XH21dFgSx6rxX2rxA3ISf3YggWOrPJDfoUZotFK42K8KjbkzmKudK07owjXC9g7GsuYL+o28+BtXhz5qySoZKTuYVFitKARGyoS1cqEOIFmobxcG5+9Mm3p+RWpcTFEvGq1hqJR8hfE+gchTd0zivf4wwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 khfGNAUXONDNEk K 2 InQ"\n        title=""\n        src="/static/1*khfGNAUXONDNEk-K-2-InQ-0558fa36ecf0405017050cb7d71593dc-082ce.png"\n        srcset="/static/1*khfGNAUXONDNEk-K-2-InQ-0558fa36ecf0405017050cb7d71593dc-c7cb1.png 158w,\n/static/1*khfGNAUXONDNEk-K-2-InQ-0558fa36ecf0405017050cb7d71593dc-93041.png 315w,\n/static/1*khfGNAUXONDNEk-K-2-InQ-0558fa36ecf0405017050cb7d71593dc-082ce.png 630w,\n/static/1*khfGNAUXONDNEk-K-2-InQ-0558fa36ecf0405017050cb7d71593dc-d67ba.png 661w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*Epnx95QXZr9PHyGC55A8oQ-d0649daaf462dd4d5e9c01f3188e7a07-d67ba.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFBUlEQVQ4y22TeVBTVxSHbwgkMQKJSBJC0gSSgImBhITIZkDAosMim2JBESwyQ90o2I6iXVSUolYcWpGKLbYsLiiDxoyREURFrEaogkuxtaJoHJDpYqE6EvPeafJCnFq5/7xz7jnne7977j2IJZqJbIslkntxRLIUwoncilRkwkIMLwEShyUgJycS8vSRIbZYQWJyfYgYVzoLuU73Qm8s7xmBTsTXP2ARV6oCD4lSbvNVSrlTYSQL5QV5oi+zhKSvS0PIjhpZ3CqSl6+AsPnykDeBrqIoku3rLlDW8KVqkPnyl9n88o5NZABAFtMSp/+kU3lCd77DSdVwSdvmsQj7k7kc+2ZLbSgB9FcH6XR7ubAnj3xwIp/iKFzgjqRZKeIKTUzMLc+ZCcCSqJskXER1xNcEMwhG2SJrK4abEaFgRRpn14suKtQXuQw0lCh26Svn3GwqUzedKFNXXG1OHhu+lQX5Rfng5p8GvBmqsgmWrQ3ONmO5hEZA0fLZU+wKERIc+5xh6mrQwMOebHh2Pw/0DfOgty0FRqyww9+ljHnLozrZvgHLHMrqN4ccOlIWbpgAo7XBDIQWK2mEwmgmCi7Klo+dPR6HP7iRa/7p3KJXfuoI86aSyJfNB94F632nO0ALre3o+EZeNzqQD096c2DnUsnHtv1j5RFklJM4gwCmhXvlFCyPhtP18ebWbyOxvouLsQ3rY7GWqjnmqwe1kDeXucqWt3mhRHP5h6DbLwdz4Z/HK83PHxVAa1X0BWvIfmRon00YG2M8Ttw5GgANpT7mllImdmm/GO/TqzC9imE+G+wCme8JG215daWawRuXcmD00Rrzna6s8cGbuXDxcDy+xIeqIIAdcWRC4Sq+y/Zre5zh3ikXywM9Dfu9zQV/2u6M/7iSbL7zGQXSU7xrjxQzvnp23g0etovHTT1J0N2eAbXViVC8Wlvl6COapZXZpaKNtJ0lwv6hVio8tEJH2uj40Fk6PnyBYhkzToVtxYF9W7IZhuedVHhicLY0VbBfFq4O17NEihhHb1U+PBKiePg7fNIXW+N67nXOhf6T7Fd/np+CD52h4jca3SyDl2Ph0PfpY9Ycz8qV1BpDhSsoxLxMRyHAEeSG3O1OQU4goZDtyZxpNCSP9OqTYKA72/LH3Sy8/6Qa77+cid01LsW7TqW/8hOLVuxb63ri/jEqrEueUm2r271e6EyhsQkWW2yd2qgIKXF2N6Z30umGeLjdtsDSZ1iAd59Kx426VOxpfy5uPKrBOvUJ+EdLufDbfmfY+wG1NTVsWipCOwgxfhIfNI3nOzE2+REEMFqrLKzZooXju1VmY/N8rOVgPF6/S4Odq43GOprTLD/reFD4Pns4I0zwV6xc2PR6uumBaJJFZ1VvlT8eMGZCZ2OiZeD6Cmzo3hpLW12ipePofKzHEIWZztDxfSXM8Tky4YuEUNFh68slRk4gkyOp+J3/A9W8uu2skfHrfDB1a8efXIvBn/VFw2ivEu63+Y7f1IksplZXOFM5FXgiv9ejhzjBb2vbs55DvMPkSHbZ8XJX+LWRDLoddLy0iPOoZgP171+aaGDSUSzn91KgIHX6Afut2u47wH6Z4oC3oUE0RM9J8LvyaSYPywjxusLmyDLskUB+pC9rXU2xx2jlhwKYxtcQTyVUIyf67i2WokmX7YeB2nBFmEYSOlk8YHZISlJ8UHNsnFpJnCY1lBSiEEzK+he4sPJk4o0ougAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 Epnx95QXZr9PHyGC55A8oQ"\n        title=""\n        src="/static/1*Epnx95QXZr9PHyGC55A8oQ-d0649daaf462dd4d5e9c01f3188e7a07-082ce.png"\n        srcset="/static/1*Epnx95QXZr9PHyGC55A8oQ-d0649daaf462dd4d5e9c01f3188e7a07-c7cb1.png 158w,\n/static/1*Epnx95QXZr9PHyGC55A8oQ-d0649daaf462dd4d5e9c01f3188e7a07-93041.png 315w,\n/static/1*Epnx95QXZr9PHyGC55A8oQ-d0649daaf462dd4d5e9c01f3188e7a07-082ce.png 630w,\n/static/1*Epnx95QXZr9PHyGC55A8oQ-d0649daaf462dd4d5e9c01f3188e7a07-d67ba.png 661w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>1x1 Bricks versus fairly-optimal various-sized Bricks</p>\n<p>It’s not the most optimal solution that might be technically possible, but it’s better than doing nothing at all to optimise the output.</p>\n<p>The biggest flaw is that it effectively scans through the image, top to bottom, left to right, to try and place bricks in an optimal fashion. Logically there could be better starting points for some shapes, ones which ultimately use less bricks to complete, but such an approach requires an infeasible number of passes to optimise, and that isn’t something I even want to try.</p>\n<p>So what’s next? Turns out there’s one more issue… a flaw in my logic.</p>\n<hr>\n<p>You can see the code in action here: <a href="https://www.pokeproject.co.uk/lego/">https://www.pokeproject.co.uk/lego/</a></p>\n<p><strong><em>Stay tuned for Part 3!</em></strong></p>\n<p><a href="https://medium.com/@psyked/pok%C3%A9project-adventures-with-lego-bricks-c7b9b8385276?source=linkShare-61a2d6b6c632-1497419972">Read Part 3 now!</a></p>',frontmatter:{title:"PokéProject: Adventures with LEGO Bricks",date:"June 07, 2017",tags:["Lego","Pokemon","JavaScript","Side Project"],url:"https://medium.com/@psyked/pok%C3%A9project-adventures-with-lego-bricks-cd9401091239",image:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAE+UlEQVQ4y21Ua1BTVxA+IZDIo4GUBIIhAZIY8jIUQkKJSQTLyxZEQGlGHo6lFV9URm2LopaOBSnKjIIWQaGGAArqKALKxIgYBR8EtMhoZ6rtOO2PPn501JkOITlsuTdkrC375+ze3f3Od75z9yBWRDQiLDgimsOOFGeTQcx2lBBEeogRykP8d5KQF5WCgvlixIqUUhihfDIXIlSigGAOesNChVIvYuUIJWvYAhkw+FI5EStkYq/Ny9ioWBmMavL5lCNVaqqnR5qyicKJcoOGyzVvAvpy1RRiDQiXN3NFS0ESwSki4ur+cioAoD+ncr3+VU4P4weFe4IsVRilYnkw6W/Xs90f2xviSUCRUtH7XXUYVBm9WufraZ7GAh6SFOUJ61UG3SRTaACWIKZbKvCle/JbNUwSY2/2HOunHYhksCE7pO7pRRoc2+j9U9sued3ZWt1kT42qu2Ovsr6vOfXlY1sulJQVg19kOnCj46rnsQgZvAmnRBFAgqJirS/pSBDid+4O/PV2hwYmrq2BH+4aYfBMBtwbyITHwzlwtDbtVZhUa2NHygo9zFoqVJ1NX6gG5oFRaVwgQjmKRSRD7VtIVbZO/spyPm32wbBxxnIu0ylWJc5U7tZPX2pLBYSYuR6gvDk5LI1S08Mb+TByOQdqCkS7SPmqEqio8INoEjAnkVO8aUMSXDGvdFpO6fGULR/vqUjG3UcMM7dbtFCSErSFqNufJ44fOhkz9eNoHjwaKXBMDH0IZ6oTb8yl3EcGq450di5nXhwzKeDUvkiHuSIID9QL8Z1zsdgUw3B0Kr0hLye8g6gzf61+bh8uhPvXCxz3LGsc43Ms+5pTcKHYT0kCDr5HJQFLeT4HrlZRwdZGdd410fFoKxVbT3jhS+upM9e2+0B6Kqe1bQvj6JgpAIbNUdOT1jSYGMqHE0cyYOtG7TGPjkizTOymirYtOvg5/8mDThqMm32cD8/4zo60+eKH531cz674wd5tiu8rjYyByS4azG3maq8NmS7bnNAXKlQke7RVRnApiBok9MSUPZ8Z7Hd69TDSznaOttGw9bgPtrUwXI8sy+GbA6kv52pYhz6hN5v3+YMiKszoaQRoQv4o0B1sLFKQDGXiENnl9pQ/BlqSYKQ/x2W3ZOFrTVI8Zsl1Td4yznYcT5lRSEQlh0oDLo6dpEF5lu+3RN/BHXxv2qIQ92wLZAjp3l1Cnj2IycnsOZEC93tXOm/1ZODrXZmz1s738aRtLbafU2PrhXRcbuTAzRpvqPuIPpinZa5GqIYks0QUgZjcqPmxKUkkAZP0MZ82f6WDy41q52BrEj5Zn4xP18bj3gYdvnEh13XTxIXSdazfVqt5f2mjed2vHwMZWsC82Q375b9MWHKhs87gvG9dh+0317vMh5Ndwz3p2H7FgIkLqtkaOK2X8P5eERvRhVAuOXK8aCmSCHn/BVRyGytYvz+7ygH7gNrxZMiAf7bpYLJfClP9UY7xCwLXeJf/7NkD/hAeJSp6/fbF/p9bTTmLnJQsPbva9KU/2BqocLrSD+/8mP388Db6i1tNdBhr9XH21dFgSx6rxX2rxA3ISf3YggWOrPJDfoUZotFK42K8KjbkzmKudK07owjXC9g7GsuYL+o28+BtXhz5qySoZKTuYVFitKARGyoS1cqEOIFmobxcG5+9Mm3p+RWpcTFEvGq1hqJR8hfE+gchTd0zivf4wwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/1*khfGNAUXONDNEk-K-2-InQ-0558fa36ecf0405017050cb7d71593dc-7a72d.png",srcSet:"/static/1*khfGNAUXONDNEk-K-2-InQ-0558fa36ecf0405017050cb7d71593dc-8baea.png 158w,\n/static/1*khfGNAUXONDNEk-K-2-InQ-0558fa36ecf0405017050cb7d71593dc-69705.png 315w,\n/static/1*khfGNAUXONDNEk-K-2-InQ-0558fa36ecf0405017050cb7d71593dc-7a72d.png 630w,\n/static/1*khfGNAUXONDNEk-K-2-InQ-0558fa36ecf0405017050cb7d71593dc-63813.png 661w",sizes:"(max-width: 630px) 100vw, 630px"}}},description:"Part 2: Making optimal use of the available bricks."}}},pathContext:{prev:{frontmatter:{path:"/blog/poképroject-adventures-with-lego-bricks-7f24c02f6d9d/",tags:["Lego","Pokemon","Canvas","Side Project","JavaScript"],title:"PokéProject: Adventures with LEGO Bricks",date:"2017-06-05T11:45:10.366Z",description:"Part 1: Using JavaScript and HTML5 canvas elements to convert images into 2 dimensional LEGO brick plans.",image:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsSAAALEgHS3X78AAADW0lEQVQoz21SaUwTQRRe1EQT44FnoiJiEFRUiBLwFlQOEUoMiRKFGJWAoiFIFDVQtYhBLXi1DYiIthaNEIIIKt4NCFY8qgZ64UJXq+1su0e30K2027qlxjTR9+PNe2++7803bwZyj5jL5WK90WhQqVQwDOsGBtw+ptd/V3xUIAii0WiMRuPfOuQLou12kiKtlNVut3vbec1ms5EUZR0aGrTRdpr+D9mLxto/tBdxB0mMjRmX07vBOieBK8v5qFzuiRmHF/yHbPtlZTNEp/lcVHx/XWRX0Qkvbdg57HA4iGEakUjIffs7d+xlbPTfjpDLzbBLxeNjuXUb55VGheXMLg6dJIzbUPu2su2ToKHrQYYkK5W/Jyp7E297SmNcmrhFLOq6qfnZ5yEzLg9ZpuxMv5adeDEn9nrR/LytEwrCd1SG3Ws/otUNFNSWrOBmRV8qDM7fuSB9ffSpLXlN+Wp93x/ZzIiGji9fhZ2fL7xQ7eWXJxTuFj6WuUdGhvwwZMpaD3S/3FgjmHYoM6m6ApCkd0aQ9+pOp/NcQ2taRfXB0vNHpZJcgWjnSR77YuxWfVdHeBU/+UJJjFgYJr4ym1cobGkeGRsDMYxHNsDwqqbmh6+edbyT337UdrWtQ/5OjhGeEy4/eVjW2lQre37ndXtuo/Tey2eftFqPXpbs/tdYMYzTJ/UpOxy+QAgFwAiAAaB6YNTCMKL/gWK4xWIhcAI347gJp0gLCkwmk9lCEITJbALADFAMoChAIWWvUtXbq9NoEKVaD39Fv32nCRIAFJhZOG6hSdZjVhyjcLYpaRsiaRs2NIhSFvY7QgFBQQnBcyUJcX2cHLu41l13U5eXPy9gzpSVy+MuZvLUxWt4uzKke7ZdyZjDSeequwt1Co7sflhNudIMoInTpq/0nyCKiFBEc6wCkbtapM7OmjrF329J8OrSZG7PgUXHUzg30uLPp06KSS7ueXMYVsQ/bQwRlvSAn9DiDYmbJgeWQeOb/SCKe9dwTXwrf2vQ0ihoRdDmkzPF72eNOrNotXRNYsnawPC1nf29lTC2u/lNwWWuFoGhiPjULTNC+KP9W8aOoU7XG2qkt46kLoxc57cqNIkXUPchcFzZsvV3YlLOxoZExsp1yuv9RFZL9wkBrw/p/w0k1LnjS2SKwQAAAABJRU5ErkJggg==",aspectRatio:1.288936627282492,src:"/static/1*NRj28widDkpcI5InJLhXJA-6304dae221ca5a52896754ded32888be-7a72d.png",srcSet:"/static/1*NRj28widDkpcI5InJLhXJA-6304dae221ca5a52896754ded32888be-8baea.png 158w,\n/static/1*NRj28widDkpcI5InJLhXJA-6304dae221ca5a52896754ded32888be-69705.png 315w,\n/static/1*NRj28widDkpcI5InJLhXJA-6304dae221ca5a52896754ded32888be-7a72d.png 630w,\n/static/1*NRj28widDkpcI5InJLhXJA-6304dae221ca5a52896754ded32888be-514af.png 945w,\n/static/1*NRj28widDkpcI5InJLhXJA-6304dae221ca5a52896754ded32888be-5e778.png 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}}}},next:{frontmatter:{path:"/blog/poképroject-adventures-with-lego-bricks-c7b9b8385276/",tags:["Lego","JavaScript","Pokemon","Pixel Art","Hackathons"],title:"PokéProject: Adventures with LEGO Bricks",date:"2017-06-07T22:26:30.011Z",description:"Part 3: From a theory to the real world.",image:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD60lEQVQ4y2NgQAM+bmZgOjfJhhEmFuVlVOrn51AB43sbWjOBaH8LFQaiQFyAHlhDdoC8qb2NXmlJlsftvDTPL+5mhv1ORoUiIDlfe0MmogwzNTeEMbkSXQzXVGX5/l+7MPDbxAL3P93JSf/d1Uxm2MczCIBdaicEVmgmw4ppkJ+CNpguiDFnBtE5YZrFXQlh/xe3e32/eizq37FtwX9b01y/tpvG/fcz8SgFe1nHmQVssKM5bhf2xHSDvaJtxKLfnhX7Z11X+N97l8L/7loa9XtRZOb/DtWKpwwMPKIw9WrictgN8lFjg7O3mU0Pi9PST0+PCbsxoaL5/+Ru3z8d+Rm/V1d0/I/T8b5RkWKxviDKZLmygIAgODwtlRkxDIwViwd7NVAwIixML+x/S1nA/9Jgj5/lfol/a7P8/3YGx//ts6r8W2vv8H/TnML/1dEJ3xkYBCRAeuw0bDENDBCJB3s1SCzWz1487L+mpumfFaFa/5a4Cf3NkXP4m6oe93eKjdzf/UkSvyfbOP73Y08KBqlvMw1mxuplHjlphv9ACAIe4ikTgiW1/m/2Efi9Xojhb7mGyb9qZ4e/65UY/h2Ikfy3ypj3v7+a1OK0eCUpkPpoGylGrIYaSFuDbRNVcLKLF5b7P5mB4X8rA8PfCtfyv3nWcX+DZGX/FnLx/spmE3ga7+D639NJJxuk3t1GH9OVOlI2DJEW/mAJBzOP8mrFoP/+cma3fOz9/ytqW/5WNrb9b+MVuBsYblIMukaSDErq4kKSujwg9exSuthj2lHWB+x0BX59qViV9LmLs9Z8XN2z519v4fSf02uX/mlNaP/qZxgYiaxHTlEPf05ZFLAU7Mp+59YZ9f4t/+sj2/4tKlnxf0nh6v8pHjn/Xcy9l4AzQFA2i5SCPFiPlrY2dsNClO0YxMW1wa5kF5U1LHIL/RspFXfV1TNyRnho1qEyqcrvXf6xt9Xs+HVAaoIdTBhxusyASx1Mxyu6Q9KjgJnbjOzc/wFu7qUwNdnCRYU9fjn/TfRNA8EJ2tSVWVRRE7uBjUalDA7yTDAbududve+06JU8Y+DlEoOXQhZO6xJt7C/BNQkQKHAyzXXBrrMzZ3CdYZPyP0wwqwQmJ8SupdAQUfJ/olf7V2dT3wSQ2OmMjYw4XdimAtErxcDGOjewfW1fUO9/eSFjO5i8oLCURGRw7uKK6PqfPs4hG0Fi////ZxBT0sJuYIFrHth1oZpB8Ufa9/6f0DzrP7eyNNhANQNjFrhCfgYJBnkWbjBbnhu3d9VMTCHhJ8rP7+wVsN7e2WsGkAcOJC1NcwYOAXGG/1f+w2OV2RJSbCmZOqGYAwAgAjOLcp/5AgAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/1*rU7_XZWxTWMKPwGjNcPFJg-88906d90e6f50d5ad351c159c7e0fe7b-7a72d.png",srcSet:"/static/1*rU7_XZWxTWMKPwGjNcPFJg-88906d90e6f50d5ad351c159c7e0fe7b-8baea.png 158w,\n/static/1*rU7_XZWxTWMKPwGjNcPFJg-88906d90e6f50d5ad351c159c7e0fe7b-69705.png 315w,\n/static/1*rU7_XZWxTWMKPwGjNcPFJg-88906d90e6f50d5ad351c159c7e0fe7b-7a72d.png 630w,\n/static/1*rU7_XZWxTWMKPwGjNcPFJg-88906d90e6f50d5ad351c159c7e0fe7b-63813.png 661w",sizes:"(max-width: 630px) 100vw, 630px"}}}}}}}}});
//# sourceMappingURL=path---blog-pokeproject-adventures-with-lego-bricks-cd-9401091239-643735189f519cd1acfe.js.map