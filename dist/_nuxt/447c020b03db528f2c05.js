(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{152:function(t,n,e){var content=e(159);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(36).default)("142a4d64",content,!0,{sourceMap:!1})},154:function(t,n,e){"use strict";var r=e(5),o=e(155)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e(73)("find")},155:function(t,n,e){var r=e(26),o=e(72),c=e(27),d=e(18),l=e(156);t.exports=function(t,n){var e=1==t,f=2==t,v=3==t,h=4==t,m=6==t,w=5==t||m,_=n||l;return function(n,l,y){for(var x,k,P=c(n),j=o(P),A=r(l,y,3),$=d(j.length),J=0,C=e?_(n,$):f?_(n,0):void 0;$>J;J++)if((w||J in j)&&(k=A(x=j[J],J,P),t))if(e)C[J]=k;else if(k)switch(t){case 3:return!0;case 5:return x;case 6:return J;case 2:C.push(x)}else if(h)return!1;return m?-1:v||h?h:C}}},156:function(t,n,e){var r=e(157);t.exports=function(t,n){return new(r(t))(n)}},157:function(t,n,e){var r=e(8),o=e(98),c=e(2)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[c])&&(n=void 0)),void 0===n?Array:n}},158:function(t,n,e){"use strict";var r=e(152);e.n(r).a},159:function(t,n,e){(t.exports=e(35)(!1)).push([t.i,".container[data-v-68b329d4]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;line-height:1.5}article *[data-v-68b329d4]{margin-bottom:1rem}aside[data-v-68b329d4]{min-width:280px;max-width:280px;padding-left:2rem}.title[data-v-68b329d4]{font-size:2rem}",""])},163:function(t,n,e){"use strict";e.r(n);e(154);var r={head:function(){return{title:this.post.title,meta:[{name:"twitter:title",content:this.post.title},{name:"twitter:description",content:this.post.content},{name:"twitter:image",content:"https://i.imgur.com/UYP2umJ.png"},{name:"twitter:card",content:"summary_large_image"}]}},data:function(){return{id:this.$route.params.id}},computed:{post:function(){var t=this;return this.$store.state.posts.all.find((function(n){return n.id===t.id}))},relatedPosts:function(){var t=this;return this.$store.state.posts.all.filter((function(n){return n.id!==t.id}))}}},o=(e(158),e(13)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("article",[e("h1",{staticClass:"title"},[t._v(t._s(t.post.title))]),t._v(" "),e("p",[t._v(t._s(t.post.content))])]),t._v(" "),e("aside",[e("h3",[t._v("Posts you might enjoy")]),t._v(" "),e("ul",t._l(t.relatedPosts,(function(n){return e("li",[e("nuxt-link",{attrs:{to:{name:"posts-id",params:{id:n.id}}}},[t._v(t._s(n.title))])],1)})),0)])])}),[],!1,null,"68b329d4",null);n.default=component.exports}}]);