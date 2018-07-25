webpackJsonp([0x8457734c60b5],{1110:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/custom-character-set-embedding-in-flash/index.md absPath of file >>> MarkdownRemark",html:'<p>You know those lovely font embedding options?</p>\n<p>Wouldn\'t it be great if you could make your own character sets?</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/customfontembedding-9b5b3fecfed1154b658bd6810115e90d-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUCBAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABTai3EUDMs//EAB0QAAECBwAAAAAAAAAAAAAAAAEAAgMEERITIzH/2gAIAQEAAQUCxvUFuuXBtogE7v8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHBAAAQMFAAAAAAAAAAAAAAAAAgABESAiMlGR/9oACAEBAAY/AsC4gnSKWi6j/8QAGhAAAwADAQAAAAAAAAAAAAAAAAERIUGx8f/aAAgBAQABPyH0BtixFLFs4JBEOR//2gAMAwEAAgADAAAAEFjP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QJ//EABsQAAIDAQEBAAAAAAAAAAAAAAERACFBMbHw/9oACAEBAAE/ED8l5DDl2hBgoYnDmlZSEK48hAFY5hQQtR//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="customfontembedding.jpg"\n        title=""\n        src="/static/customfontembedding-9b5b3fecfed1154b658bd6810115e90d-e8574.jpg"\n        srcset="/static/customfontembedding-9b5b3fecfed1154b658bd6810115e90d-c94d9.jpg 158w,\n/static/customfontembedding-9b5b3fecfed1154b658bd6810115e90d-9885b.jpg 315w,\n/static/customfontembedding-9b5b3fecfed1154b658bd6810115e90d-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>As great as the default options are (All, Uppercase, Lowercase, Numerals) the latter 3 combined don\'t contain all of the visible characters - and the \'All\' option embeds thousands of other useless characters. So how about this?</p>\n<p>If you are bored with Flash taking ages to publish because you have (rather lazily!) embeded the full Unicode font set (I really have no idea what embedding 39477 characters achieves, Verdana - in the Windows Character map on my PC - only lists 665 chars) then this is a little bit of code I knocked up this morning that might help (someone could turn it into a class pretty application if they want!)</p>\n<p><strong>What do you need to do?</strong></p>\n<ol>\n<li>Copy and paste the code below into frame 1 of an FLA.</li>\n<li>Change the code in <strong>bold</strong>. The variable \'myString\' contains whatever characters you want to embed. In my example (which may be of use) I am embedding all the Verdana characters listed in the Windows Character Map. N.B. I have added a space at the start as this is an important character to embed! Note also that to embed a quotation mark you must write " and to embed an backslash you must write \\. You need to give your font set a name (in this example it is \'Dynamic Learning Character Set\' but you can put whatever you want). This is what will appear in the list when you click the \'Embed...\' button in Flash. Finally you need to specify a unique \'fontSetID\'. Flash seems to have taken the numbers 1 - 20 and 9999(!?!) so you can pick any number you like other than those.</li>\n<li>Press CTRL+ENTER to test the FLA and copy the XML that is generated in the output window.</li>\n<li>Open the file: C:Program FilesMacromediaFlash 8enFirst RunFontEmbeddingUnicodeTable.xml...and paste in your XML to the top (just under the <fontEmbeddingTable> node)</li>\n<li>Save the UnicodeTable.xml file and restart Flash. You should now see that you can embed your custom font into your SWF. If you need to add other characters you can just repeat the above steps to update UnicodeTable.xml and then republish your SWF file.</li>\n</ol>\n<p>This technique reduced my project publish time from 85 seconds to 22.</p>\n<p>var myString:String = " <strong>!"#$%&#x26;\'()*+,-./0123456789:;&#x3C;=>?@ABCDEFGHIJKLMNO</strong></p>\n<p>PQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹</p>\n<p>º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿAa</p>\n<p>AaAaCcCcCcCcDdÐdEeEeEeEeEeGgGgGgGgHhHhIiIiIiIiIi??JjKk?LlLlLl??LlNnNnNn?</p>\n<p>??OoOoOoŒœRrRrRrSsSsSsŠšTtTtTtUuUuUuUuUuUuWwYyŸZzZzŽž?ƒOoUu??????ˆ?¯??°?</p>\n<p>˜?`´~??;?????????????G????T?????????S??F??O???????aß?de??????µ???p??st?f</p>\n<p>????????????????????????????????????????????????????????????????????????</p>\n<p>????????????????????????????????????????????????????????????????????????</p>\n<p>??????????????????????????????????????????????????????–—?=‘’‚?“”„†‡•…‰\'?</p>\n<p>‹›??/n?£P?€?l?™?e???????-/·v8?˜?==????????"</p>\n<p>var nameOfFontSet:String = "<strong>My Character Set</strong>"var fontSetID:Number = <strong>50</strong></p>\n<p>generateCharSet( nameOfFontSet, fontSetID, myString);</p>\n<p>function generateCharSet (setName, setID, chars) {</p>\n<p>var outputXML:String = "&#x3C;glyphRange name="" + setName + "" id="" +</p>\n<p>setID + "">n"</p>\n<p>var numberOfChars:Number = chars.length;</p>\n<p>for (var i:Number=0; i&#x3C;=numberOfChars-1; i++) {</p>\n<p>var charCode:Number = chars.charCodeAt(i)</p>\n<p>var hexCode:String = convertTo4DigitHexValue(charCode.toString(16))</p>\n<p>outputXML += "t&#x3C;range min="0x" + hexCode + "" max="0x" +</p>\n<p>hexCode + "" />n"</p>\n<p>}</p>\n<p>outputXML += "</glyphRange>"</p>\n<p>trace("outputXML:n" + outputXML);</p>\n<p>}</p>\n<p>function convertTo4DigitHexValue (hexValue:String):String {</p>\n<p>var hexLength:Number = hexValue.length;</p>\n<p>var numberOfLeadingZerosRequired:Number = 4 - hexLength;</p>\n<p>for (var i:Number=0; i&#x3C;=numberOfLeadingZerosRequired-1; i++) {</p>\n<p>hexValue = "0" + hexValue;</p>\n<p>}</p>\n<p>return hexValue</p>\n<p>}</p>',frontmatter:{title:"Custom character-set embedding in Flash",date:"March 25, 2008",tags:["flash","fonts"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/flash-player-security-update/",tags:["flash","javascript","externalinterface","geturl"],title:"09/04/08 Flash Player security update",image:null,date:"2008-03-16T19:59:47.000Z"}},next:{frontmatter:{path:"/blog/superscript-and-subscript-with-actionscript/",tags:["actionscript","external-links","flash","fonts","text-formatting"],title:"Superscript and Subscript - with Actionscript*",image:null,date:"2008-03-30T21:11:21.000Z"}}}}}});
//# sourceMappingURL=path---blog-custom-character-set-embedding-in-flash-e3489e2d468cf7e05bde.js.map