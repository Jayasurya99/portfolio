(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{222:function(t,e,n){var content=n(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("7ac2e5fa",content,!0,{sourceMap:!1})},226:function(t,e,n){t.exports=n.p+"img/Launch.0c33167.png"},227:function(t,e,n){t.exports=n.p+"img/Test.e224846.png"},228:function(t,e,n){t.exports=n.p+"img/Updates.410c58a.png"},229:function(t,e,n){t.exports=n.p+"img/Contact.c440297.png"},230:function(t,e,n){"use strict";n(222)},231:function(t,e,n){var r=n(61)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Cinzel);"]),r.push([t.i,':root{--timing:500ms;--img-width:1080px;--outer-width:100vw;--center-padding:calc(var(--outer-width)/2 - var(--img-width)/2)}[v-cloak]{display:none}*{margin:0;padding:0;box-sizing:border-box}#app{width:100vw;height:auto;overflow-x:hidden;display:grid;grid-template-rows:auto 1fr;font-family:"Cinzel",serif}#information{max-width:100vw;padding:180px 5px 0;display:block}#information h1{width:60%;font-size:calc(18px + 2vw);color:#333;font-weight:100}#information p{margin-top:1em;font-size:calc(10px + .5vw);color:grey;font-family:sans-serif}#artwork{display:inline-block}#carousel{display:flex;margin-left:calc(50vw - 540px);margin-left:var(--center-padding);margin-top:30px}#carousel img{margin-right:10px;z-index:2;border-radius:5px;box-shadow:3px 5px 20px rgba(0,0,0,.5)}#btns,#carousel img{width:1080px;width:var(--img-width)}#btns{margin-left:calc(50vw - 540px);margin-left:var(--center-padding);display:flex;justify-content:space-around;align-items:flex-start;padding:1em 0;margin-bottom:2.26rem}#btns,button{position:relative}button{border:1px solid #ccc;background:none;padding:.5em 1.5em;font-size:calc(12px + .2vw)}.counter{color:#b3b3b3;position:absolute;right:10px;margin-top:0;font-size:12px;font-size:calc(12px + .1vw)}.fade-enter-active,.fade-leave-active{transition:opacity .5s;transition:opacity var(--timing);position:absolute}.fade-enter,.fade-leave-to{opacity:0}.slide-enter-active,.slide-leave-active{transition:.5s;transition:var(--timing)}.slide-leave-active{position:absolute;z-index:1}.slide-enter,.slide-leave-to{transform:scale(.7)}.slide-move{transition:.5s;transition:var(--timing)}@media (min-width:700px){:root{--img-width:80vw}}@media (min-width:850px){:root{--img-width:70vw}}@media (min-width:950px){:root{--img-width:60vw;--outer-width:70vw}#app{grid-template-rows:1fr;grid-template-columns:30vw 70vw}#information{justify-content:center}#information h1{width:60%;margin-left:10%;font-size:calc(18px + 1.5vw)}#information p{width:70%;margin-left:10%;margin-top:1em;font-size:calc(10px + .5vw)}#artwork{justify-content:start}.artid-container{width:100vw;width:var(--outer-width)}}',""]),t.exports=r},236:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{arts:[{id:"1",source:n(226)},{id:"2",source:n(227)},{id:"3",source:n(228)},{id:"4",source:n(229)}],hidden:[],counter:1}},methods:{nextArt:function(){if(this.arts.length>1){var t=this.arts.shift();this.hidden.push(t),this.counter++}},prevArt:function(){if(this.hidden.length>0){var t=this.hidden.pop();this.arts.unshift(t),this.counter--}}},computed:{currentArt:function(){return this.arts[0].id}}},o=(n(230),n(26)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),n("div",{attrs:{id:"artwork"}},[n("transition-group",{attrs:{id:"carousel",tag:"div",name:"slide"}},t._l(t.arts,(function(t){return n("img",{key:t.id,attrs:{src:t.source,alt:""}})})),0),t._v(" "),n("div",{attrs:{id:"btns"}},[n("button",{staticClass:"arrow",on:{click:t.prevArt}},[t._v("<")]),t._v(" "),n("button",{staticClass:"arrow",on:{click:t.nextArt}},[t._v(">")]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("p",{key:t.currentArt,staticClass:"counter"},[t._v(t._s(t.counter)+" / 4")])])],1)],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"information"}},[n("h1",[t._v("Crazy Design's Starts Here")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at quasi officiis sunt. Nemo ut, dolorem fuga quae velit ullam natus minima tenetur deleniti sequi voluptates minus temporibus accusantium incidunt.")])])}],!1,null,null,null);e.default=component.exports}}]);