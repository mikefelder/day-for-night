var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscalc-cssfilters-cssgradients-csstransforms-flexbox-touchevents-addtest-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,s,i,a;for(var f in x)if(x.hasOwnProperty(f)){if(e=[],n=x[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),_.push((r?"":"no-")+a.join("-"))}}function s(e){var n=C.className,t=Modernizr._config.classPrefix||"";if(T&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),T?C.className.baseVal=n:C.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):T?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e,n){if("object"==typeof e)for(var t in e)j(e,t)&&a(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),r=Modernizr[o[0]];if(2==o.length&&(r=r[o[1]]),"undefined"!=typeof r)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),s([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function f(){var e=n.body;return e||(e=i(T?"svg":"body"),e.fake=!0),e}function l(e,t,o,r){var s,a,l,u,c="modernizr",d=i("div"),p=f();if(parseInt(o,10))for(;o--;)l=i("div"),l.id=r?r[o]:c+(o+1),d.appendChild(l);return s=i("style"),s.type="text/css",s.id="s"+c,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),a=t(d,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=u,C.offsetHeight):d.parentNode.removeChild(d),!!a}function u(e,n){return!!~(""+e).indexOf(n)}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?d(r,t||n):r);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(m(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];r--;)s.push("("+m(n[r])+":"+o+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function g(e,n,r,s){function a(){l&&(delete O.style,delete O.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var f=h(e,r);if(!o(f,"undefined"))return f}for(var l,d,p,m,g,v=["modernizr","tspan","samp"];!O.style&&v.length;)l=!0,O.modElem=i(v.shift()),O.style=O.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],g=O.style[m],u(m,"-")&&(m=c(m)),O.style[m]!==t){if(s||o(r,"undefined"))return a(),"pfx"==n?m:!0;try{O.style[m]=r}catch(y){}if(O.style[m]!=g)return a(),"pfx"==n?m:!0}return a(),!1}function v(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?g(a,n,r,s):(a=(e+" "+N.join(i+" ")+i).split(" "),p(a,n,t))}function y(e,n,o){return v(e,t,t,n,o)}var _=[],x=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){x.push({name:e,fn:n,options:t})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var C=n.documentElement,T="svg"===C.nodeName.toLowerCase(),b=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=b,Modernizr.addTest("csscalc",function(){var e="width:",n="calc(10px);",t=i("a");return t.style.cssText=e+b.join(n+e),!!t.style.length}),Modernizr.addTest("cssgradients",function(){for(var e,n="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",o="",r=0,s=b.length-1;s>r;r++)e=0===r?"to ":"",o+=n+b[r]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(o+=n+"-webkit-"+t);var a=i("a"),f=a.style;return f.cssText=o,(""+f.backgroundImage).indexOf("gradient")>-1});var S="CSS"in e&&"supports"in e.CSS,P="supportsCSS"in e;Modernizr.addTest("supports",S||P);var j;!function(){var e={}.hasOwnProperty;j=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),w._l={},w.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=a});var z=w.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",b.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");z(o,function(e){t=9===e.offsetTop})}return t});var k="Moz O ms Webkit",E=w._config.usePrefixes?k.split(" "):[];w._cssomPrefixes=E;var N=w._config.usePrefixes?k.toLowerCase().split(" "):[];w._domPrefixes=N;var A={elem:i("modernizr")};Modernizr._q.push(function(){delete A.elem});var O={style:A.elem.style};Modernizr._q.unshift(function(){delete O.style}),w.testAllProps=v,w.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return y("filter","blur(2px)");var e=i("a");return e.style.cssText=b.join("filter:blur(2px); "),!!e.style.length&&(n.documentMode===t||n.documentMode>9)}),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),r(),s(_),delete w.addTest,delete w.addAsyncTest;for(var q=0;q<Modernizr._q.length;q++)Modernizr._q[q]();e.Modernizr=Modernizr}(window,document);


Modernizr.addTest('textstroke', function() {
	var h1 = document.createElement('h1');
	return !(!('webkitTextStroke' in h1.style) && !('textStroke' in h1.style));
});

}
/*
     FILE ARCHIVED ON 00:39:23 Oct 04, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:46:37 Oct 15, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.796
  exclusion.robots: 0.038
  exclusion.robots.policy: 0.02
  esindex: 0.014
  cdx.remote: 124.406
  LoadShardBlock: 341.157 (3)
  PetaboxLoader3.datanode: 416.255 (5)
  load_resource: 3835.982 (2)
  PetaboxLoader3.resolve: 3601.867 (2)
*/