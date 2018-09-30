webpackJsonp([34609281715558],{1222:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/building-a-humanised-command-line-interface-with-node-js/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*h89l_KJR8w2NrzQXtPCAmw-2f907534aeeb5fd6a8677478eff28ffc-2f776.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.10000000000001%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABbWuQNYgR/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAMBEBEy/9oACAEBAAEFAhLNmk9n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxABAAMAAAAAAAAAAAAAAAAAAQARIP/aAAgBAQAGPwKNuf/EABoQAAEFAQAAAAAAAAAAAAAAAAEAEBFBsVH/2gAIAQEAAT8hkIg8nGorI63/2gAMAwEAAgADAAAAEMD/AP/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPxCsf//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxCNf//EABsQAAMAAwEBAAAAAAAAAAAAAAABESExQVHw/9oACAEBAAE/EEhVuL0ked7ueMqNqfhi8+EKz//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 h89l KJR8w2NrzQXtPCAmw"\n        title=""\n        src="/static/1*h89l_KJR8w2NrzQXtPCAmw-2f907534aeeb5fd6a8677478eff28ffc-af57e.jpeg"\n        srcset="/static/1*h89l_KJR8w2NrzQXtPCAmw-2f907534aeeb5fd6a8677478eff28ffc-847f7.jpeg 158w,\n/static/1*h89l_KJR8w2NrzQXtPCAmw-2f907534aeeb5fd6a8677478eff28ffc-93973.jpeg 315w,\n/static/1*h89l_KJR8w2NrzQXtPCAmw-2f907534aeeb5fd6a8677478eff28ffc-af57e.jpeg 630w,\n/static/1*h89l_KJR8w2NrzQXtPCAmw-2f907534aeeb5fd6a8677478eff28ffc-28cf9.jpeg 945w,\n/static/1*h89l_KJR8w2NrzQXtPCAmw-2f907534aeeb5fd6a8677478eff28ffc-0d474.jpeg 1260w,\n/static/1*h89l_KJR8w2NrzQXtPCAmw-2f907534aeeb5fd6a8677478eff28ffc-66f39.jpeg 1890w,\n/static/1*h89l_KJR8w2NrzQXtPCAmw-2f907534aeeb5fd6a8677478eff28ffc-2f776.jpeg 2000w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Photo by <a href="https://unsplash.com/photos/R4WCbazrD1g?utm_source=unsplash&#x26;utm_medium=referral&#x26;utm_content=creditCopyText">Rock’n Roll Monkey</a> on <a href="https://unsplash.com/search/photos/robot-face?utm_source=unsplash&#x26;utm_medium=referral&#x26;utm_content=creditCopyText">Unsplash</a></p>\n<h1>Building a humanised command-line interface with Node.js</h1>\n<h2>Because config management sucks.</h2>\n<h3>Background</h3>\n<p>As a by-product of my day-to-day software development work I have created a lot of specific-task automation scripts. If there’s a task that I need to perform on a fairly regular basis that involves multiple steps and which <em>could</em> be automated, I <em>will</em> (eventually) write myself a script to automate it.</p>\n<p>I do this because — generally speaking — I enjoy writing the scripts and because abstracting mundane tasks into these scripts reduces the cognitive overhead and frees my time up for thinking about other aspects of my day-to-day job.</p>\n<h4>Configurable code</h4>\n<p>It’s well established that hard-coding values into code instantly makes it less reusable, and that extracting those values into code variables is logical because it then becomes easier to reliably make broad changes to the code.</p>\n<p>To make a script reusable without actually editing source code each time there are two common strategies. One of them is passing configuration as arguments on the command line, and the other is creating and editing a config file which stores the options in a more long-lived format. Command line arguments are good for one-off commands and config files are great for repeated reuse with the same settings.</p>\n<h4>Problem</h4>\n<p>Both command line arguments and configuration files require knowledge of the available options and a measure of preparation — neither is quite as easy as a GUI (Graphical User Interface) could make the experience, and neither of them typically have an intuitive interface.</p>\n<p>I always assume that in a few months’ time I will have completely forgotten everything about how to configure my scripts, and with no hope of finding assistance on StackOverflow or Google I need to ensure that I make them straightforward and operator-friendly.</p>\n<hr>\n<h3>A humanised experience 🤖</h3>\n<p>Essentially I want my command-line interfaces to be a little more human in their interactions with me and behave more like an artificial assistant like Alexa or Siri and less like a computer. That’s a <em>humanized experience.</em></p>\n<p>Without further ado, let’s make a simple script <em>more human.</em></p>\n<h4>Core code</h4>\n<p>(Below) I have a Node.js script which communicates with the GitHub API to retrieve stats about a repository. It’s currently set up to take a configuration file in JSON format and also returns the output as JSON.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*9wYVk5O73upqdOuwzQRhsg-0a90cdb975131d4d197322eb0c5b6c61-74a12.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 89.35000000000001%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAACyklEQVQ4y52U2U4UQRiF5yW8MREYYKbprXpfprcZNtkGA4QYE1wGdGAQEYy+gPHGe+OFL1vHU7MkMGhAL06qu1N1/u9fqms/fv6S/fOPuLj6LM8/fILS4OIag/fXo/UB4hn59vQCX799l7WjV2eo103ZtEPMmR4WTYG5hoWZBQMz8wae1O/X7IKJR4/nZWd1G7Wz/qUMzRhxXEmRduCkOUTUgh2kMJ0Ehojvldq3oDnY3j2UtZN3A6R2jHZUIHczxCKFZUVomgGWlKwQ2nj9m3Q7wtyijc2dA9R6xwNoDQcBo3iMFnG17LHh0Iyy/tHQ1DMkySq8oIDrpvCcFIJ6CN0dw9fHp1hqRsi9EjHNnLDgmiGkof4/hscnAyxpIURcwGIjbD+GCBOYXjw+8GfDm4FuGb7pnSIyfARFBT3MmHICn3U0WU9VR+2Gbr5PTJVup3xyBs2JkcQlgoRiyhE77YlRc6alAimDm+Tqvd4YG75iDXU9RRWUSLI2orBEzvoFrKcysC2lcCihDC1VimhM64+mgd9nFy1s7OzTkClriwKpl7G7CRyS6ao5nE1BGWzQklfA8HLS0TCIR4FIavOMsBO4PKdzsLu7h6i97PXhay7WwwoVN6xEbbjtTXRJvByq52cQy4eIs01kBSdghfvcFvJsDUW+hY5bjs7SeG/vuSLsQ2/6iEigUlK1M70Wo/L6kc7kd4PzaZNauKTymQVTNlVJuFeVxCGhRsKt7sGI0Go62CTZml9glVQhaazOPoKyizSrkLRzZFE2rHPFGjtqAjgZk85PajhpitQbAh1SpCQqiR/FHbjJGuexDcdLIJLWkNwnuWqWPjWTxrjLJJTDpswbgVTXzfXVTcmZFg8xDZvRTRGSJkCDRBM1p6RM+QuTG9vs8uXVF+klFdrtp7LqrKPobKCs1pEWq2gNtXJH6ZSyck36/Fu9OOrJ3waNUlgYImr/AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 9wYVk5O73upqdOuwzQRhsg"\n        title=""\n        src="/static/1*9wYVk5O73upqdOuwzQRhsg-0a90cdb975131d4d197322eb0c5b6c61-082ce.png"\n        srcset="/static/1*9wYVk5O73upqdOuwzQRhsg-0a90cdb975131d4d197322eb0c5b6c61-c7cb1.png 158w,\n/static/1*9wYVk5O73upqdOuwzQRhsg-0a90cdb975131d4d197322eb0c5b6c61-93041.png 315w,\n/static/1*9wYVk5O73upqdOuwzQRhsg-0a90cdb975131d4d197322eb0c5b6c61-082ce.png 630w,\n/static/1*9wYVk5O73upqdOuwzQRhsg-0a90cdb975131d4d197322eb0c5b6c61-c4006.png 945w,\n/static/1*9wYVk5O73upqdOuwzQRhsg-0a90cdb975131d4d197322eb0c5b6c61-85e68.png 1260w,\n/static/1*9wYVk5O73upqdOuwzQRhsg-0a90cdb975131d4d197322eb0c5b6c61-38b38.png 1890w,\n/static/1*9wYVk5O73upqdOuwzQRhsg-0a90cdb975131d4d197322eb0c5b6c61-74a12.png 2000w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>getstats.json</p>\n<p>What the code (above) is doing is using the <strong>node-fetch</strong> module to make a request to the GitHub GraphQL API, and then it’s taking the response from that API and doing a bit of processing on the responses before spitting them back out as a string.</p>\n<p>The information that’s absent from the source code and which is supplied by the config file is the <strong>repository owner</strong>, the <strong>repository name</strong>, a <strong>start date</strong> and an <strong>end date</strong>, all of which are used to identify the target repository and filter the response data.</p>\n<p>For completeness, the GraphQL query used looks like this (below):</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*WgKscWyWBMi_hdV0cR26Ew-451743e6014dd979cb34c4d3ba31cbf0-ecca1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 131.0119695321001%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsSAAALEgHS3X78AAADT0lEQVRIx6VV227cVBSdd14QEogkbZKZZnwb2+f4cnwbl0YNl3J5QHwDUgVtiigVpYiiIiUzDS0t4ktAvFR8nBdr29Nk4kxLWh6WzvblLJ+99trbg2fP/mke/DLH7Nffm4Ojp5gd/Yb5w8eYEYeMZX04f4y53D96gkPGB7NHOJg/wqGshLzz84PD5s+//m4Gt+/cw7tvjZpQlXBVhchJUe9oxOMQcZAgtzQKW8PeCWC5Gls7HoZDG5vExsjB5sjG9qUJ3nhzrfny+s1mcPfH+83FkYe6vNx8VO8iTyqkUQUTc01KJBGRVkh0AR2X0KZEmpaICJVViA2fmZof8rH/zR0Mvv/hJ6xvOQjCHHtRjZjreJLAWgFb4C1dS0y4gcGFbQc39m93hBsk9MIMU54sUUW70fHTc2PCvRe23dOEPlOy+dDyTk5zfKoV18uxG2TY6J8wzqdIqwoqKZAybTlpGnMlRIYkypGFBRQ1TLICWZIjJALGhnu3qeHX+992hGtbdiv+h+Y9GBJJGu4L4ARcg0W8uJ6o/GzKouEHcY2KOo4XGh6n659OvQ+v1fBUyjaFzRERHoleVOXlyj6P7UWVz2iosyncKIPyDTS/GFJopTLaySAMJe7uT6ilkve0YZy1iOjXi0PvhHBt04Yh4W5+GYbCy0ZFaE1iErUxySUDn0XSsTwz8EnmM45pcmmOY0IxdsiXr+hpe7JzpeydpOxIylsrjL0bTZHrst14bNzJfxt7RVHYerSNS72cV+yStlNUr1Mk5bSsUUxrpPRhToixDbsnp3EjbohZDKNzDg4ZCiUyQ8NTPzF2UlSwnBA3b313YuyIBFfjbjhYk5f7bpUPz9hGGvx9EpZ9Df3zatjvFLZPSsv4rNjLqrzK3GLs9X6VFQelx2YXQk3rhM/NTb8FvCcGV2HnSTGzJgLVmVsGypDD4cayhoaEe2U3HKKgM3Zr6GjRLSxMa3i1MDfvh9ItYnJOoNF4iVCO6y8mdkENx0szz+rFVn9qTxa93E/Z5ddr3U3s/1WUu/fuN3IR8qckc02+9qqQfTIc6MPuN/rOxk77paEVYvQaGLsR3l6/hOtf3cLgydM/mt29j/HJZ1801z79HK8D7sWVq9eag9lR8y+XeWHDz2yEEgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 WgKscWyWBMi hdV0cR26Ew"\n        title=""\n        src="/static/1*WgKscWyWBMi_hdV0cR26Ew-451743e6014dd979cb34c4d3ba31cbf0-082ce.png"\n        srcset="/static/1*WgKscWyWBMi_hdV0cR26Ew-451743e6014dd979cb34c4d3ba31cbf0-c7cb1.png 158w,\n/static/1*WgKscWyWBMi_hdV0cR26Ew-451743e6014dd979cb34c4d3ba31cbf0-93041.png 315w,\n/static/1*WgKscWyWBMi_hdV0cR26Ew-451743e6014dd979cb34c4d3ba31cbf0-082ce.png 630w,\n/static/1*WgKscWyWBMi_hdV0cR26Ew-451743e6014dd979cb34c4d3ba31cbf0-c4006.png 945w,\n/static/1*WgKscWyWBMi_hdV0cR26Ew-451743e6014dd979cb34c4d3ba31cbf0-85e68.png 1260w,\n/static/1*WgKscWyWBMi_hdV0cR26Ew-451743e6014dd979cb34c4d3ba31cbf0-ecca1.png 1838w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>query.gql</p>\n<p>Now we’ve got the code, how do we actually execute it and fetch our data?</p>\n<h4>Executing scripts with command line options</h4>\n<p>Without a humanised journey, I’d use a command like this (below) to execute my script return the repository stats:</p>\n<p>node index.js psyked psyked.github.io 2018-08-08 2018-08-12</p>\n<h4>Executing scripts with config files</h4>\n<p>If I was taking the config file approach, I’d create a <code>.json</code> file with those settings in, save it as <code>psyked-config.json</code> in the same directory and then use the command (below) to run it:</p>\n<p>node index.js ./psyked-config.json</p>\n<p>It’s a little less to type on each execution and does ensure that the options would be the same each time, but it’s still not user friendly <em>enough.</em></p>\n<h4>Humanised command line experiences</h4>\n<p>The <em>humanised</em> approach starts with only the simplest command (below):</p>\n<p>node index.js</p>\n<p>From then on it switches over to an interactive experience, which looks like this (below) — asking questions, hinting at responses and finally mapping inputs into the same data structure that would exist in a proper config file.</p>\n<p><img src="/1*a5eNNjsXIESU_a1EsTpqUA-7b5d53899a93389ac618aba3be4367c4.gif"></p>\n<p>This experience is all facilitated by a module called <strong>Inquirer</strong>, which adds a really simple layer of code that supports several common types of question to the command line.</p>\n<p><a href="https://github.com/SBoudrias/Inquirer.js" title="https://github.com/SBoudrias/Inquirer.js"><strong>SBoudrias/Inquirer.js</strong><br>\n_Inquirer.js - A collection of common interactive command line user interfaces._github.com</a><a href="https://github.com/SBoudrias/Inquirer.js"></a></p>\n<p>Inquirer can prompt for several types of data, chain questions together, validate the responses and more. To achieve the questions used in the screen capture above I’m using the following code (below):</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*IRQ0WOaSRF9lV_-gu4ydbQ-b76b2a5fdcac5cb643a4e9afb221e92c-ecca1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 90.42437431991294%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAACW0lEQVQ4y5VUTWsTURSdvQsXFkzJR9OknWQ+Mh+ZmTeZmUxiqyKuii7aqqAuFAUbCm3QJkqoixhs8QNcKP4KRRDxx73jfTNJF5rUZHG4zPDu4Z57znvSz1+/+eD1EKOT93w4OsXwzQnSeprWOTB6+w6D4yH/9v0Hlw67fSwtlbiybiC/UkWGam5NRUFWkBXf2XVkcoT8bIhzFy4u80dP9rjU6x/zasVDzNqc2QF01kLNb8PyQ9hBlFTTDaGZ/kwY1LeypqOz34XU6w2gl024RGK4Maq6hwodUgwPWp1BtTyoJqP/Liq6k9S/oRoMuWIVzzoHkJ4fvUJhVYFrRzBYCMNrQKlRs+ZAVuqoqFQJ4lsgIdac8wkzhQo26020/Rje9RbY1Ra8K3FCXpvA9anR+4ds+oQlDTbtwSC5qs2gk1SdCDQ7lVqtjTFluqmE2aIC3w5RZwGsMBzvzUsOT+QvJHmZbN90YrRZE961FoIbbfhUTZ9cd/xx43RDpksua7CsBjTakZhucvDMEHX2dDMmrKBNpoRBE+5GDJOkaxZLYiP2KCBWMI1s5g7DegTfJGOCAHYUkjF+IjcxqL4goXDZIMkKNYlAy0qawRROgoUkZ/JyksM4SHNosEYynciegJh24vZ/J3xBhDnZEHcZkRXCakRnEifxUcYRmouw/3KAcq0BJ74Jz9tAQFdQN9JAKxT0BLXzodO6CiUVe/uHkA66R/zS5SJW6dkS8SnQqyFejuK4zoOSbII4+OOnHS59/vKVb93axu69h3znzn0IbC+I3bsPsHV7h3/4+In/AXqlYV+gkV4CAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 IRQ0WOaSRF9lV  gu4ydbQ"\n        title=""\n        src="/static/1*IRQ0WOaSRF9lV_-gu4ydbQ-b76b2a5fdcac5cb643a4e9afb221e92c-082ce.png"\n        srcset="/static/1*IRQ0WOaSRF9lV_-gu4ydbQ-b76b2a5fdcac5cb643a4e9afb221e92c-c7cb1.png 158w,\n/static/1*IRQ0WOaSRF9lV_-gu4ydbQ-b76b2a5fdcac5cb643a4e9afb221e92c-93041.png 315w,\n/static/1*IRQ0WOaSRF9lV_-gu4ydbQ-b76b2a5fdcac5cb643a4e9afb221e92c-082ce.png 630w,\n/static/1*IRQ0WOaSRF9lV_-gu4ydbQ-b76b2a5fdcac5cb643a4e9afb221e92c-c4006.png 945w,\n/static/1*IRQ0WOaSRF9lV_-gu4ydbQ-b76b2a5fdcac5cb643a4e9afb221e92c-85e68.png 1260w,\n/static/1*IRQ0WOaSRF9lV_-gu4ydbQ-b76b2a5fdcac5cb643a4e9afb221e92c-ecca1.png 1838w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>index.js</p>\n<p>… and that’s about it. Humanised command-line interfaces with Node.js.</p>\n<p>The big advantage that this approach has over other options is that playing around with the data feels so much easier. Putting all the values on a single line feels like an arduous process, especially if you make a mistake. Creating and editing multiple config files is much the same, but following an old-school wizard approach to running scripts? That’s fun. 🎩</p>\n<hr>\n<h3>Conclusion?</h3>\n<p>The <strong>Inquirer.js</strong> module makes it easy to make command line interfaces more operator friendly. It’s simple to author the questions and map the results into our code, and the experience at the outcome far outweighs the effort spent configuring the module.</p>',frontmatter:{title:"Building a humanised command-line interface with Node.js",date:"August 13, 2018",tags:["JavaScript","Nodejs","Command Line Interface","User Experience","Tech"],url:"https://medium.com/comparethemarket/building-a-humanised-command-line-interface-with-node-js-d951273a3d94",image:null,description:"Because config management sucks."}}},pathContext:{prev:{frontmatter:{path:"/blog/rethinking-my-personal-website/",tags:["Blogging","Gatsbyjs"],title:"Rethinking my “personal” website.",date:"2018-07-29T19:41:59.179Z",description:"Repositioning, repurposing and ultimately rebuilding and replacing my Ghost blog with a Gatsby static site.",image:null}},next:{frontmatter:{path:"/blog/colours-a-lightning-talk/",tags:["Front End Development","Side Project","Presentations","Colour","Tech"],title:"Colours: A lightning Talk ⚡️",date:"2018-09-24T12:32:50.599Z",description:"I find colours fascinating, and I write code that goes into websites, so there’s bound to be a natural intersection between those two…",image:null}}}}}});
//# sourceMappingURL=path---blog-building-a-humanised-command-line-interface-with-node-js-6ef546844fe270b9ec2c.js.map