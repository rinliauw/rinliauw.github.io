(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Ab3M:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h})),n.d(e,"pageQuery",(function(){return p}));var r=n("q1tI"),o=n.n(r),i=n("Wbzz"),c=n("9Dj+"),a=n("H8eV"),u=n("ma3e"),l=n("vOnD").c.hr.withConfig({displayName:"horizontal-rule__HorizontalRule",componentId:"sc-1fv28uv-0"})(["background-color:",";height:0.25rem;margin-bottom:",";border:0;"],(function(t){return t.theme.colors.complementary}),(function(t){return t.theme.spacing[4]})),f=n("A2+M"),m=n("f0fW"),s=n("n08P"),p="950260203",h=function(t){var e,n=t.data,r=t.location,p=n.mdx,h=(null===(e=n.site.siteMetadata)||void 0===e||e.title,n.previous),d=n.next,b=Object(m.i)(p.frontmatter.featured);return o.a.createElement(c.a,{location:r},o.a.createElement(a.a,{title:p.frontmatter.title,description:p.frontmatter.description||p.excerpt,url:r.href}),o.a.createElement(s.a,{itemScope:!0,itemType:"http://schema.org/Article"},o.a.createElement(s.c,null,o.a.createElement("h1",{itemProp:"headline"},p.frontmatter.title),o.a.createElement("p",null,p.frontmatter.date),o.a.createElement(l,null),p.frontmatter.featured&&void 0!==b?o.a.createElement("p",null,o.a.createElement(m.a,{image:b,alt:p.frontmatter.title})):null),o.a.createElement(f.MDXRenderer,null,p.body),o.a.createElement(l,null)),o.a.createElement(s.b,null,o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,h&&o.a.createElement(i.Link,{to:"/projects"+h.fields.slug,rel:"prev"},o.a.createElement(u.a,null)," ",h.frontmatter.title)),o.a.createElement("li",null,d&&o.a.createElement(i.Link,{to:"/projects"+d.fields.slug,rel:"next"},d.frontmatter.title," ",o.a.createElement(u.b,null))))))}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),c=n("Bnag");t.exports=function(t){return r(t)||o(t)||i(t)||c()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},X8hv:function(t,e,n){var r=n("sXyB"),o=n("RIqP"),i=n("lSNA"),c=n("8OQS");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=n("q1tI"),f=n("7ljp").mdx,m=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,i=c(t,["scope","children"]),a=m(e),s=l.useMemo((function(){if(!n)return null;var t=u({React:l,mdx:f},a),e=Object.keys(t),i=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+n])).apply(void 0,[{}].concat(o(i)))}),[n,e]);return l.createElement(s,u({},i))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},n08P:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i}));var r=n("vOnD"),o=r.c.nav.withConfig({displayName:"article__ArticleFooterNav",componentId:"l40u4c-0"})(["ul{margin:0;padding:0;list-style:none;font-size:",";@media (min-width:","){display:flex;flex-wrap:wrap;justify-content:space-between;}a{border-radius:4px;padding:",";color:",";&:hover{background-color:",";color ",";}}}"],(function(t){return t.theme.fontSize[0]}),(function(t){return t.theme.breakpoints.tablet_portrait}),(function(t){return t.theme.spacing[2]}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.backgroundLight}),(function(t){return t.theme.colors.primaryLight})),i=r.c.header.withConfig({displayName:"article__ArticleHeader",componentId:"l40u4c-1"})(["font-size:",";@media (min-width:","){font-size:",";}font-family:",";h1{margin:0 "," 0 0;}p{font-size:",";@media (min-width:","){font-size:",";}span{color:",";}}"],(function(t){return t.theme.fontSize[0]}),(function(t){return t.theme.breakpoints.tablet_portrait}),(function(t){return t.theme.fontSize[1]}),(function(t){return t.theme.fonts.serif}),(function(t){return t.theme.spacing[4]}),(function(t){return t.theme.fontSize[0]}),(function(t){return t.theme.breakpoints.tablet_portrait}),(function(t){return t.theme.fontSize[1]}),(function(t){return t.theme.colors.textDark})),c=r.c.article.withConfig({displayName:"article__Article",componentId:"l40u4c-2"})(["font-size:",";@media (min-width:","){font-size:",";}a{color:",";border-bottom-style:dotted;border-bottom-width:2px;border-bottom-color:",";:hover,:focus{color:",";border-bottom-style:solid;border-bottom-width:3px;border-bottom-color:",";}}h1,h2,h3,h4,h5,h6{font-family:",";font-weight:lighter;color:",";}p{line-height:",";--baseline-multiplier:0.179;--x-height-multiplier:0.35;margin:0 0 "," 0;padding:0;}ul,ol{margin:0 0 "," 0;padding:0 0 0 ",";list-style-position:outside;list-style-image:none;li{padding-left:",";margin-bottom:",";}}li{>{p{margin-bottom:",";}ul{margin-left:",";margin-top:",";}}*:last-child{margin-bottom:0;}}blockquote{color:",";margin-left:-",";margin-right:",";padding:0 0 0 ",";border-left:0.25rem solid ",";font-size:",";margin-bottom:",";>{:last-child{margin-bottom:",";}ul,ol{list-style-position:inside;}}}table{width:100%;margin-bottom:",";border-collapse:collapse;border-spacing:",";thead{tr{th{border-bottom:1px solid ",";}}border-bottom:1px solid white;}}"],(function(t){return t.theme.fontSize[0]}),(function(t){return t.theme.breakpoints.tablet_portrait}),(function(t){return t.theme.fontSize[1]}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.primaryLight}),(function(t){return t.theme.colors.complementary}),(function(t){return t.theme.fonts.serif}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.lineHeights.relaxed}),(function(t){return t.theme.spacing[8]}),(function(t){return t.theme.spacing[8]}),(function(t){return t.theme.spacing[4]}),(function(t){return t.theme.spacing[2]}),(function(t){return t.theme.spacing[4]}),(function(t){return t.theme.spacing[4]}),(function(t){return t.theme.spacing[8]}),(function(t){return t.theme.spacing[4]}),(function(t){return t.theme.colors.textDark}),(function(t){return t.theme.spacing[6]}),(function(t){return t.theme.spacing[8]}),(function(t){return t.theme.spacing[6]}),(function(t){return t.theme.colors.complementary}),(function(t){return t.theme.fontSize[1]}),(function(t){return t.theme.spacing[8]}),(function(t){return t.theme.spacing[0]}),(function(t){return t.theme.spacing[8]}),(function(t){return t.theme.spacing[1]}),(function(t){return t.theme.colors.text}))},sXyB:function(t,e,n){var r=n("SksO"),o=n("b48C");function i(e,n,c){return o()?t.exports=i=Reflect.construct:t.exports=i=function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}t.exports=i}}]);
//# sourceMappingURL=component---src-templates-project-post-tsx-35158dc48c9518b1f654.js.map