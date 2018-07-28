webpackJsonp([0x9492712693cc],{1184:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/embossed-shadowed-text-in-flex/index.md absPath of file >>> MarkdownRemark",html:'<p>If you get it right, drop shadow effects can really improve the appearance and clarity of text.  <a href="http://markstar.co.uk/blog/">Mark</a> sent me the starting code for this a little gem a while ago, but I\'ve extended it to support Flexs\' CSS Styles support, and have been playing with different settings, which - with a bit of creativity - will give you anything from drop shadows to a bevelled appearance.</p>\n<p>There are 4 classes we\'ve created which are extensions to 4 basic Flex components - ShadowButton, ShadowLabel, ShadowText and ShadowText.  To each you can customise the shadows\' distance, angle, colour, alpha and blur amount.  Here\'s some examples of the usage, and output of these classes;</p>\n<h3>Bevelled text:</h3>\n<p>[kml_flashembed movie="<a href="http://uploads.psyked.co.uk/2009/11/BevelTextExample.swf">http://uploads.psyked.co.uk/2009/11/BevelTextExample.swf</a>" height="206" width="500" /]</p>\n<pre><code>ShadowLabel, ShadowButton, ShadowText, ShadowCheckBox\n{\nshadowColor: #ffffff;\n} \n</code></pre>\n<h3>Drop shadowed text:</h3>\n<p>[kml_flashembed movie="<a href="http://uploads.psyked.co.uk/2009/11/ShadowTextExample.swf">http://uploads.psyked.co.uk/2009/11/ShadowTextExample.swf</a>" height="206" width="500" /]</p>\n<pre><code>ShadowLabel, ShadowButton, ShadowText, ShadowCheckBox\n{\nshadowColor: #333333;\n}\n</code></pre>\n<p>Aside from changing the background colour to make it all a little easier to see the final result, that\'s just a single variable in the CSS we\'ve changed. All we\'re actually doing is adding a Flash Player filter to the text objects, but we\'ve extended and hooked into the Flex component lifecycle to make things a little more flexible and reusable.</p>\n<h3>ShadowLabel</h3>\n<pre><code>package couk.psyked\n{\nimport flash.filters.DropShadowFilter;\nimport mx.controls.Label;\n</code></pre>\n<p>public class ShadowLabel extends Label { [Inspectable( defaultValue=1 )] public var shadowDistance:Number = 1;</p>\n<p>[Inspectable( defaultValue=45 )] public var shadowAngle:Number = 45;</p>\n<p>[Inspectable( defaultValue=0x003333 )] public var shadowColor:Number = 0x003333;</p>\n<p>[Inspectable( defaultValue=1 )] public var shadowAlpha:Number = 1;</p>\n<p>[Inspectable( defaultValue=0 )] public var shadowBlur:Number = 0;</p>\n<p>public function ShadowLabel() { super(); }</p>\n<p>override protected function updateDisplayList( unscaledWidth:Number, unscaledHeight:Number ):void { super.updateDisplayList( unscaledWidth, unscaledHeight );</p>\n<p>if ( getStyle( "shadowDistance" )) { shadowDistance = getStyle( "shadowDistance" ); }</p>\n<p>if ( getStyle( "shadowAngle" )) { shadowAngle = getStyle( "shadowAngle" ); }</p>\n<p>if ( getStyle( "shadowColor" )) { shadowColor = getStyle( "shadowColor" ); }</p>\n<p>if ( getStyle( "shadowAlpha" )) { shadowAlpha = getStyle( "shadowAlpha" ); }</p>\n<p>if ( getStyle( "shadowBlur" )) { shadowBlur = getStyle( "shadowBlur" ); }</p>\n<p>textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )]; }</p>\n<p>override protected function commitProperties():void { super.commitProperties(); textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )]; } } }</p>\n<h3>ShadowText</h3>\n<pre><code>package couk.psyked\n{\nimport flash.filters.DropShadowFilter;\nimport mx.controls.Text;\n</code></pre>\n<p>public class ShadowText extends Text { [Inspectable( defaultValue=1 )] public var shadowDistance:Number = 1;</p>\n<p>[Inspectable( defaultValue=45 )] public var shadowAngle:Number = 45;</p>\n<p>[Inspectable( defaultValue=0x003333 )] public var shadowColor:Number = 0x003333;</p>\n<p>[Inspectable( defaultValue=1 )] public var shadowAlpha:Number = 1;</p>\n<p>[Inspectable( defaultValue=0 )] public var shadowBlur:Number = 0;</p>\n<p>public function ShadowText() { super(); }</p>\n<p>override protected function updateDisplayList( unscaledWidth:Number, unscaledHeight:Number ):void { super.updateDisplayList( unscaledWidth, unscaledHeight );</p>\n<p>if ( getStyle( "shadowDistance" )) { shadowDistance = getStyle( "shadowDistance" ); }</p>\n<p>if ( getStyle( "shadowAngle" )) { shadowAngle = getStyle( "shadowAngle" ); }</p>\n<p>if ( getStyle( "shadowColor" )) { shadowColor = getStyle( "shadowColor" ); }</p>\n<p>if ( getStyle( "shadowAlpha" )) { shadowAlpha = getStyle( "shadowAlpha" ); }</p>\n<p>if ( getStyle( "shadowBlur" )) { shadowBlur = getStyle( "shadowBlur" ); } textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )]; }</p>\n<p>override protected function commitProperties():void { super.commitProperties(); textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )]; } } }</p>\n<h3>ShadowCheckBox</h3>\n<pre><code>package couk.psyked\n{\nimport flash.filters.DropShadowFilter;\nimport mx.controls.CheckBox;\n</code></pre>\n<p>public class ShadowCheckBox extends CheckBox { [Inspectable( defaultValue=1 )] public var shadowDistance:Number = 1;</p>\n<p>[Inspectable( defaultValue=45 )] public var shadowAngle:Number = 45;</p>\n<p>[Inspectable( defaultValue=0x003333 )] public var shadowColor:Number = 0x003333;</p>\n<p>[Inspectable( defaultValue=1 )] public var shadowAlpha:Number = 1;</p>\n<p>[Inspectable( defaultValue=0 )] public var shadowBlur:Number = 0;</p>\n<p>public function ShadowCheckBox() { super(); }</p>\n<p>override protected function updateDisplayList( unscaledWidth:Number, unscaledHeight:Number ):void { super.updateDisplayList( unscaledWidth, unscaledHeight );</p>\n<p>if ( getStyle( "shadowDistance" )) { shadowDistance = getStyle( "shadowDistance" ); }</p>\n<p>if ( getStyle( "shadowAngle" )) { shadowAngle = getStyle( "shadowAngle" ); }</p>\n<p>if ( getStyle( "shadowColor" )) { shadowColor = getStyle( "shadowColor" ); }</p>\n<p>if ( getStyle( "shadowAlpha" )) { shadowAlpha = getStyle( "shadowAlpha" ); }</p>\n<p>if ( getStyle( "shadowBlur" )) { shadowBlur = getStyle( "shadowBlur" ); } textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )]; }</p>\n<p>override protected function commitProperties():void { super.commitProperties(); textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )]; }</p>\n<p>} }</p>\n<h3>ShadowButton</h3>\n<pre><code>package couk.psyked\n{\nimport flash.filters.DropShadowFilter;\nimport mx.controls.Button;\n</code></pre>\n<p>public class ShadowButton extends Button { [Inspectable( defaultValue=1 )] public var shadowDistance:Number = 1;</p>\n<p>[Inspectable( defaultValue=45 )] public var shadowAngle:Number = 45;</p>\n<p>[Inspectable( defaultValue=0x003333 )] public var shadowColor:Number = 0x003333;</p>\n<p>[Inspectable( defaultValue=1 )] public var shadowAlpha:Number = 1;</p>\n<p>[Inspectable( defaultValue=0 )] public var shadowBlur:Number = 0;</p>\n<p>public function ShadowButton() { super(); }</p>\n<p>override protected function updateDisplayList( unscaledWidth:Number, unscaledHeight:Number ):void { super.updateDisplayList( unscaledWidth, unscaledHeight );</p>\n<p>if ( getStyle( "shadowDistance" )) { shadowDistance = getStyle( "shadowDistance" ); }</p>\n<p>if ( getStyle( "shadowAngle" )) { shadowAngle = getStyle( "shadowAngle" ); }</p>\n<p>if ( getStyle( "shadowColor" )) { shadowColor = getStyle( "shadowColor" ); }</p>\n<p>if ( getStyle( "shadowAlpha" )) { shadowAlpha = getStyle( "shadowAlpha" ); }</p>\n<p>if ( getStyle( "shadowBlur" )) { shadowBlur = getStyle( "shadowBlur" ); } textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )]; }</p>\n<p>override protected function commitProperties():void { super.commitProperties(); textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )]; }</p>\n<p>} }</p>',frontmatter:{title:"Embossed / Shadowed text in Flex",date:"November 09, 2009",tags:["flex"]}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-embossed-shadowed-text-in-flex-884d17813d2a961fc363.js.map