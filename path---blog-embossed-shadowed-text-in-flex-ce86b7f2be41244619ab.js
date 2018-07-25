webpackJsonp([0x9492712693cc],{1143:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/embossed-shadowed-text-in-flex/index.md absPath of file >>> MarkdownRemark",html:'<p>If you get it right, drop shadow effects can really improve the appearance and clarity of text.  <a href="http://markstar.co.uk/blog/">Mark</a> sent me the starting code for this a little gem a while ago, but I\'ve extended it to support Flexs\' CSS Styles support, and have been playing with different settings, which - with a bit of creativity - will give you anything from drop shadows to a bevelled appearance.</p>\n<p>There are 4 classes we\'ve created which are extensions to 4 basic Flex components - ShadowButton, ShadowLabel, ShadowText and ShadowText.  To each you can customise the shadows\' distance, angle, colour, alpha and blur amount.  Here\'s some examples of the usage, and output of these classes;</p>\n<h3>Bevelled text:</h3>\n<p>/[kml_flashembed movie="http://uploads.psyked.co.uk/2009/11/BevelTextExample.swf" height="206" width="500" /]</p>\n<pre><code>ShadowLabel, ShadowButton, ShadowText, ShadowCheckBox\n{\n    shadowColor: #ffffff;\n} \n</code></pre>\n<h3>Drop shadowed text:</h3>\n<p>/[kml_flashembed movie="http://uploads.psyked.co.uk/2009/11/ShadowTextExample.swf" height="206" width="500" /]</p>\n<pre><code>ShadowLabel, ShadowButton, ShadowText, ShadowCheckBox\n{\n    shadowColor: #333333;\n}\n</code></pre>\n<p>Aside from changing the background colour to make it all a little easier to see the final result, that\'s just a single variable in the CSS we\'ve changed. All we\'re actually doing is adding a Flash Player filter to the text objects, but we\'ve extended and hooked into the Flex component lifecycle to make things a little more flexible and reusable.</p>\n<h3>ShadowLabel</h3>\n<pre><code>package couk.psyked\n{\n    import flash.filters.DropShadowFilter;\n    import mx.controls.Label;\n\n    public class ShadowLabel extends Label \n    { \n        [Inspectable( defaultValue=1 )]\n        public var shadowDistance:Number = 1;\n\n        [Inspectable( defaultValue=45 )]\n        public var shadowAngle:Number = 45;\n\n        [Inspectable( defaultValue=0x003333 )]\n        public var shadowColor:Number = 0x003333;\n\n        [Inspectable( defaultValue=1 )]\n        public var shadowAlpha:Number = 1;\n\n        [Inspectable( defaultValue=0 )]\n        public var shadowBlur:Number = 0;\n\n        public function ShadowLabel() { \n            super(); \n        }\n\n        override protected function updateDisplayList( unscaledWidth:Number, unscaledHeight:Number ):void { \n            super.updateDisplayList( unscaledWidth, unscaledHeight );\n\n            if ( getStyle( "shadowDistance" )) { \n                shadowDistance = getStyle( "shadowDistance" );\n            }\n\n            if ( getStyle( "shadowAngle" )) { \n                shadowAngle = getStyle( "shadowAngle" );\n            }\n\n            if ( getStyle( "shadowColor" )) { \n                shadowColor = getStyle( "shadowColor" );\n            }\n\n            if ( getStyle( "shadowAlpha" )) { \n                shadowAlpha = getStyle( "shadowAlpha" );\n            }\n\n            if ( getStyle( "shadowBlur" )) { \n                shadowBlur = getStyle( "shadowBlur" );\n            }\n\n            textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )]\n        }\n\n        override protected function commitProperties():void { \n            super.commitProperties(); \n            textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )]\n        } \n    }\n}\n</code></pre>\n<h3>ShadowText</h3>\n<pre><code>package couk.psyked\n{\n    import flash.filters.DropShadowFilter;\n    import mx.controls.Text;\n\n    public class ShadowText extends Text { \n        [Inspectable( defaultValue=1 )]\n        public var shadowDistance:Number = 1;\n\n        [Inspectable( defaultValue=45 )]\n        public var shadowAngle:Number = 45;\n\n        [Inspectable( defaultValue=0x003333 )]\n        public var shadowColor:Number = 0x003333;\n\n        [Inspectable( defaultValue=1 )]\n        public var shadowAlpha:Number = 1;\n\n        [Inspectable( defaultValue=0 )]\n        public var shadowBlur:Number = 0;\n\n        public function ShadowText() { \n            super(); \n        }\n\n        override protected function updateDisplayList( unscaledWidth:Number, unscaledHeight:Number ):void { \n            super.updateDisplayList( unscaledWidth, unscaledHeight );\n\n            if ( getStyle( "shadowDistance" )) { \n                shadowDistance = getStyle( "shadowDistance" ); \n            }\n\n            if ( getStyle( "shadowAngle" )) { \n                shadowAngle = getStyle( "shadowAngle" ); \n            }\n\n            if ( getStyle( "shadowColor" )) { \n                shadowColor = getStyle( "shadowColor" ); \n            }\n\n            if ( getStyle( "shadowAlpha" )) { \n                shadowAlpha = getStyle( "shadowAlpha" ); \n            }\n\n            if ( getStyle( "shadowBlur" )) { \n                shadowBlur = getStyle( "shadowBlur" ); \n            } \n\n            textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )]\n        }\n\n        override protected function commitProperties():void { \n            super.commitProperties(); \n            textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )]\n        } \n    } \n}\n</code></pre>\n<h3>ShadowCheckBox</h3>\n<pre><code>package couk.psyked\n{\n    import flash.filters.DropShadowFilter;\n    import mx.controls.CheckBox;\n\n    public class ShadowCheckBox extends CheckBox { \n        [Inspectable( defaultValue=1 )]\n        public var shadowDistance:Number = 1;\n\n        [Inspectable( defaultValue=45 )]\n        public var shadowAngle:Number = 45;\n\n        [Inspectable( defaultValue=0x003333 )]\n        public var shadowColor:Number = 0x003333;\n\n        [Inspectable( defaultValue=1 )]\n        public var shadowAlpha:Number = 1;\n\n        [Inspectable( defaultValue=0 )]\n        public var shadowBlur:Number = 0;\n\n        public function ShadowCheckBox() { \n            super(); \n        }\n\n        override protected function updateDisplayList( unscaledWidth:Number, unscaledHeight:Number ):void { \n            super.updateDisplayList( unscaledWidth, unscaledHeight );\n\n            if ( getStyle( "shadowDistance" )) { \n                shadowDistance = getStyle( "shadowDistance" ); \n            }\n\n            if ( getStyle( "shadowAngle" )) { \n                shadowAngle = getStyle( "shadowAngle" ); \n            }\n\n            if ( getStyle( "shadowColor" )) { \n                shadowColor = getStyle( "shadowColor" ); \n            }\n\n            if ( getStyle( "shadowAlpha" )) { \n                shadowAlpha = getStyle( "shadowAlpha" ); \n            }\n\n            if ( getStyle( "shadowBlur" )) { \n                shadowBlur = getStyle( "shadowBlur" ); \n            } \n            \n            textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )]\n        }\n\n        override protected function commitProperties():void { \n            super.commitProperties(); \n            textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )]\n        }\n\n    } \n}\n</code></pre>\n<h3>ShadowButton</h3>\n<pre><code>package couk.psyked\n{\n    import flash.filters.DropShadowFilter;\n    import mx.controls.Button;\n\n    public class ShadowButton extends Button { \n        [Inspectable( defaultValue=1 )]\n        public var shadowDistance:Number = 1;\n\n        [Inspectable( defaultValue=45 )]\n        public var shadowAngle:Number = 45;\n\n        [Inspectable( defaultValue=0x003333 )]\n        public var shadowColor:Number = 0x003333;\n\n        [Inspectable( defaultValue=1 )]\n        public var shadowAlpha:Number = 1;\n\n        [Inspectable( defaultValue=0 )]\n        public var shadowBlur:Number = 0;\n\n        public function ShadowButton() { \n            super(); \n        }\n\n        override protected function updateDisplayList( unscaledWidth:Number, unscaledHeight:Number ):void { \n            super.updateDisplayList( unscaledWidth, unscaledHeight );\n\n            if ( getStyle( "shadowDistance" )) { \n                shadowDistance = getStyle( "shadowDistance" ); \n            }\n\n            if ( getStyle( "shadowAngle" )) { \n                shadowAngle = getStyle( "shadowAngle" ); \n            }\n\n            if ( getStyle( "shadowColor" )) { \n                shadowColor = getStyle( "shadowColor" ); \n            }\n\n            if ( getStyle( "shadowAlpha" )) { \n                shadowAlpha = getStyle( "shadowAlpha" ); \n            }\n\n            if ( getStyle( "shadowBlur" )) { \n                shadowBlur = getStyle( "shadowBlur" ); \n            } \n            \n            textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )]\n        }\n\n        override protected function commitProperties():void { \n            super.commitProperties(); \n            textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )]\n        }\n\n    } \n}\n</code></pre>',frontmatter:{title:"Embossed / Shadowed text in Flex",date:"November 09, 2009",tags:["flex"],url:null}}},pathContext:{prev:{frontmatter:{path:"/blog/essential-actionscript-3-classes-1/",tags:["actionscript","external-links"],title:"Essential ActionScript 3 Classes #1",image:null,date:"2008-05-09T08:30:48.000Z"}},next:{frontmatter:{path:"/blog/e-newsletter-the-benefits-of-using-adobe-air/",tags:["air","e-newsletter"],title:"E-Newsletter / The benefits of using Adobe AIR.",image:null,date:"2008-12-19T21:34:22.000Z"}}}}}});
//# sourceMappingURL=path---blog-embossed-shadowed-text-in-flex-ce86b7f2be41244619ab.js.map