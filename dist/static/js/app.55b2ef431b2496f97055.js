webpackJsonp([1],Array(44).concat([function(t,e,a){function s(t){a(114)}var c=a(3)(a(75),a(132),s,null,null);t.exports=c.exports},function(t,e,a){"use strict";var s=a(9),c=a(140),i=a(127),n=(a.n(i),a(130)),r=a.n(n),o=a(129),l=a.n(o),u=a(131),h=a.n(u),v=a(128),d=a.n(v),p=a(126),f=a.n(p);s.default.use(c.a),e.a=new c.a({routes:[{path:"/",component:l.a,children:[{path:"recommend",component:h.a},{path:"hot",component:d.a},{path:"find",component:f.a}]},{path:"/PlaySong",component:r.a}]})},function(t,e,a){"use strict";var s=a(79),c=a.n(s),i=a(9),n=a(142),r=a(52),o=a.n(r);i.default.use(n.a),e.a=new n.a.Store({state:{},mutations:{seachResult:function(t,e){console.log("搜索完成--改变状态"),console.log(e),t.seachResult=e},playSong:function(t,e){console.log("推送歌曲为当前播放"),t.currentMusic=e},lastResult:function(t,e){console.log("推送最新音乐"),t.newMusic=e},pushHot:function(t,e){console.log("推送最热音乐列表"),t.hotlist=e}},actions:{seachSong:function(t,e){return console.log("开始搜索---异步"),new c.a(function(e,a){o.a.get("./static/song.json").then(function(a){var s=a.data.slice(0,5);t.commit("seachResult",s),e()}).catch(function(t){console.log(t),reject()})})},getLast:function(t){return new c.a(function(e,a){o.a.get("./static/song.json").then(function(a){console.log("axios获取最新音乐列表"),t.commit("lastResult",a.data),e()}).catch(function(t){console.log(t),a()})})},gethot:function(t){return new c.a(function(e,a){o.a.get("./static/song.json").then(function(a){console.log("axios获取最热音乐列表"),t.commit("pushHot",a.data.slice(5,10)),e()}).catch(function(t){console.log(t),a()})})}}})},function(t,e){},function(t,e){},,function(t,e,a){function s(t){a(119)}var c=a(3)(a(70),a(137),s,null,null);t.exports=c.exports},,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{seachValue:"",clock:"",seachResult:{}}},computed:{showSeach:function(){return"搜索："+this.seachValue}},methods:{cancelSeach:function(){this.seachValue="",this.seachResult={}},getValue:function(t){this.seachValue=t.target.value},seaching:function(){var t=this;this.clock&&clearTimeout(this.clock),this.clock=setTimeout(function(){console.log("准备搜索");var e=t.seachValue;t.$store.dispatch("seachSong",e).then(function(){t.seachResult=t.$store.state.seachResult})},1e3)},playSong:function(t){t&&(console.log(t),this.$store.commit("playSong",t),this.$router.push({path:"/playsong"}))}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(44),c=a.n(s);e.default={components:{PlayList:c.a},data:function(){return{hotlist:{}}},created:function(){var t=this;this.$store.dispatch("gethot").then(function(){t.hotlist=t.$store.state.hotlist})}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{routerActive:0}},created:function(){"/"==this.$router.currentRoute.fullPath&&this.$router.push({path:"/Recommend"})},methods:{tabRouther:function(t){this.routerActive=t}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["newlist"],methods:{readyPlay:function(t){this.$store.commit("playSong",t),this.$router.push({path:"/playsong"})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{isplay:!1,currentMusic:{}}},created:function(){this.$store.state.currentMusic&&(this.currentMusic=this.$store.state.currentMusic)},mounted:function(){document.querySelector("audio");this.isplay=!0},methods:{setlrc:function(t){for(var e=parseInt(t/60),a=t-60*e,s=this.addPad(e),c=this.addPad(a),i=s+":"+c,n=document.querySelectorAll(".words p"),r=(document.querySelector(".words"),document.querySelector(".words>ul")),o=n[0].offsetHeight,l=0;l<n.length;l++)if(n[l+1]&&i>=n[l].attributes.datatime.value&&i<n[l+1].attributes.datatime.value){var u="translateY("+-o*(l-1)+"px)";n[l].style.color="#d43b32",n[l-1]&&(n[l-1].style.color="white"),n[l+1].style.color="white",r.style.transform=u}},addPad:function(t){return t<10?t="0"+t:t}},watch:{isplay:function(){var t=document.querySelector("audio"),e=this;if(this.isplay){t.play();var a=setInterval(function(){"/playsong"==e.$router.currentRoute.fullPath?e.setlrc(t.currentTime):clearInterval(a)},1e3)}else this.isplay||t.pause()}},computed:{lrc:function(){for(var t=this.currentMusic.lyric,e=t.split("\n"),a=[],s=/^\[(.+)\](.*)/,c=0;c<e.length;c++)if(e[c]){var i={},n=e[c].match(s)[1],r=e[c].match(s)[2];r&&(i[n]=r,a.push(i))}return a}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(44),c=a.n(s);e.default={components:{PlayList:c.a},data:function(){return{newlist:{}}},created:function(){var t=this;this.$store.dispatch("getLast").then(function(){t.getlist()})},methods:{getlist:function(){console.log("获取最新音乐"),this.newlist=this.$store.state.newMusic}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(9),c=a(50),i=a.n(c),n=a(45),r=a(48),o=(a.n(r),a(49)),l=a.n(o),u=a(47),h=(a.n(u),a(46));s.default.use(l.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:n.a,store:h.a,template:"<App/>",components:{App:i.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,function(t,e,a){function s(t){a(116)}var c=a(3)(a(71),a(134),s,null,null);t.exports=c.exports},function(t,e,a){function s(t){a(120)}var c=a(3)(a(72),a(138),s,"data-v-6fc4e056",null);t.exports=c.exports},function(t,e,a){function s(t){a(121)}var c=a(3)(a(73),a(139),s,null,null);t.exports=c.exports},function(t,e,a){function s(t){a(118)}var c=a(3)(a(74),a(136),s,null,null);t.exports=c.exports},function(t,e,a){function s(t){a(115)}var c=a(3)(a(76),a(133),s,null,null);t.exports=c.exports},function(t,e,a){function s(t){a(117)}var c=a(3)(a(77),a(135),s,null,null);t.exports=c.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"playlist"}},[a("ul",{staticClass:"new-music-list"},t._l(t.newlist,function(e,s){return a("li",{on:{click:function(a){t.readyPlay(e)}}},[a("div",{staticClass:"number"},[t._v(t._s(s+1))]),t._v(" "),a("h4",[t._v(t._s(e.name))]),t._v(" "),a("p",[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-SQ"}})]),a("span",[t._v(t._s(e.author))])]),t._v(" "),a("i",{staticClass:"playbtn"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-play-copy"}})])])])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{backgroundImage:"url("+t.currentMusic.filter+")"},attrs:{id:"playsong"}},[a("div",{staticClass:"pointer"},[a("img",{class:{leave:!t.isplay},attrs:{src:"https://s3.music.126.net/m/s/img/needle.png?702cf6d95f29e2e594f53a3caab50e12"}})]),t._v(" "),a("div",{staticClass:"dsic"},[a("div",{staticClass:"dsic-ct"},[t.isplay?a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},on:{click:function(e){t.isplay=!t.isplay}}},[a("use",{attrs:{"xlink:href":"#icon-play-copy"}})]):t._e(),t._v(" "),t.isplay?t._e():a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},on:{click:function(e){t.isplay=!t.isplay}}},[a("use",{attrs:{"xlink:href":"#icon-pause"}})]),t._v(" "),a("img",{staticClass:"dsic-circle",class:{pasue:!t.isplay},attrs:{src:"https://s3.music.126.net/m/s/img/disc.png?d3bdd1080a72129346aa0b4b4964b75f"}}),t._v(" "),a("img",{staticClass:"dsic-light",attrs:{src:"https://s3.music.126.net/m/s/img/disc_light.png?2bb24f3fd11569809b817b4988f12bc7"}}),t._v(" "),a("img",{staticClass:"dsic-photo",class:{pasue:!t.isplay},attrs:{src:t.currentMusic.cover}})])]),t._v(" "),a("div",{staticClass:"lrc"},[a("h4",[t._v(t._s(t.currentMusic.name))]),t._v(" "),a("div",{staticClass:"words"},[a("ul",t._l(t.lrc,function(e){return a("p",{attrs:{dataTime:Object.keys(e)}},[t._v(t._s(Object.values(e).join()))])}))])]),t._v(" "),a("footer",[a("a",{on:{click:function(e){t.$router.push({path:"/"})}}},[t._v("打开")]),t._v(" "),a("a",{staticClass:"main",on:{click:function(e){t.$router.push({path:"/"})}}},[t._v("下载")])]),t._v(" "),a("audio",{attrs:{src:t.currentMusic.url}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"find"}},[a("div",{staticClass:"seach-ct"},[a("div",{staticClass:"seach"},[a("svg",{staticClass:"seach-btn",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-seach"}})]),t._v(" "),a("input",{staticClass:"seach-content",attrs:{placeholder:"搜索歌手、专辑、歌曲"},domProps:{value:t.seachValue},on:{input:function(e){t.getValue(e)},keydown:t.seaching}}),t._v(" "),a("svg",{staticClass:"seach-cancel",class:{cancel:!t.seachValue},attrs:{"aria-hidden":"true"},on:{click:function(e){t.cancelSeach()}}},[a("use",{attrs:{"xlink:href":"#icon-cancelcircle"}})])]),t._v(" "),t.seachValue?a("div",{staticClass:"result"},[a("p",[t._v(t._s(t.showSeach))]),t._v(" "),a("ul",t._l(t.seachResult,function(e){return a("li",{on:{click:function(a){t.playSong(e)}}},[a("span",[t._v(t._s(e.name))]),a("span",[t._v(t._s(e.author))])])}))]):t._e(),t._v(" "),t.seachValue?t._e():a("div",{staticClass:"hot-seach"},[a("h4",[t._v("热门搜索")]),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("告白气球")]),t._v(" "),a("li",[t._v("Justin Drew Bieber")]),t._v(" "),a("li",[t._v("see you again")]),t._v(" "),a("li",[t._v("周杰伦")]),t._v(" "),a("li",[t._v("陈奕迅")]),t._v(" "),a("li",[t._v("The show")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"recommend"}},[t._m(0),t._v(" "),a("div",{staticClass:"new-music"},[a("h2",[t._v("最新音乐")]),t._v(" "),a("PlayList",{attrs:{newlist:t.newlist}})],1),t._v(" "),a("footer",[a("div",{staticClass:"logo"},[a("svg",{staticClass:"logosvg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 460 88"}},[a("path",{attrs:{"fill-rule":"evenodd",fill:"#e60012",d:"M0,17.171C0,7.688,7.819,0,17.466,0h54.583 c9.646,0,17.466,7.688,17.466,17.171v53.658c0,4.742-1.705,8.789-5.116,12.142c-3.411,3.354-7.527,5.03-12.351,5.03H17.466 C7.819,88.001,0,80.313,0,70.829V17.171z"}}),a("path",{attrs:{fill:"#fff",d:"m63.6 29c-2.874-1.817-6.396-2.814-10.02-2.993l-.808-2.892.024.027c-.031-.086-.059-.17-.086-.252l-.239-.855c-.552-2.473.454-3.653.969-4.078.088-.064.179-.129.277-.192 2.364-1.535 5.731.924 5.92 1.068 1.494 1.403 4.229 1.75 5.704.314 1.491-1.451 1.136-4.165-.354-5.617-2.32-2.258-9.443-5.885-15.504-1.951-5.45 3.537-5.558 8.515-4.662 11.392l1.086 3.893c-1.819.51-3.564 1.241-5.159 2.191-5.967 3.559-8.96 9.565-8.212 16.479.767 7.097 6.216 12.247 12.957 12.247 7.157 0 12.978-5.668 12.978-12.636-.097-1.664-.077-1.644-.307-3.131-.224-1.451-2.422-8.271-2.422-8.271 1.35.304 2.613.801 3.702 1.489 12.307 7.788 7.186 20.18 6.955 20.726-3.389 7.919-10.78 12.646-20.277 12.973-6.188.214-12.12-2.041-16.697-6.346-4.829-4.537-7.598-10.895-7.598-17.44 0-9.859 6.369-18.812 15.847-22.274 1.973-.722 3.567-2.776 2.476-5.162-.859-1.875-3.185-2.52-5.158-1.798-12.44 4.546-20.798 16.294-20.798 29.23 0 8.552 3.619 16.857 9.929 22.788 5.819 5.469 13.307 8.445 21.19 8.444.358 0 .719-.006 1.078-.018 12.422-.427 22.536-6.984 27.04-17.509 2.812-6.392 4.38-20.857-9.827-29.85m-12.768 16.15c0 2.868-2.397 5.202-5.344 5.202-3.271 0-5.073-2.898-5.365-5.592-.555-5.135 2.2-7.926 4.609-9.363.977-.582 2.051-1.038 3.172-1.369 0 0 2.598 8.05 2.801 9.297.223 1.379.127 1.825.127 1.825"}}),a("g",{attrs:{fill:"#101010"}},[a("path",{attrs:{d:"m142.75 65.867c0 0-.516-4.094 0-4.726 11.981-14.67 11.718-34.407 11.718-34.407h7.344c-.126.678-3.794 25.512-19.06 39.13"}}),a("path",{attrs:{d:"m162.48 65.867c0 0 .516-4.094 0-4.726-11.981-14.67-12.603-34.407-12.603-34.407h-7.345c.126.678 4.681 25.512 19.948 39.13"}}),a("path",{attrs:{d:"m120.71 65.867c0 0-.515-4.094 0-4.726 11.981-14.67 12.644-34.407 12.644-34.407h7.345c-.126.678-4.721 25.512-19.989 39.13"}}),a("path",{attrs:{d:"m140.44 65.867c0 0 .516-4.094 0-4.726-11.98-14.67-11.677-34.407-11.677-34.407h-7.345c.126.678 3.755 25.512 19.02 39.13"}}),a("path",{attrs:{d:"m163.65 15.904h-45.905c-5.649-.067-7.345-.93-7.345-2.708 0 1.133 0 55.958 0 61.37h8.263v-54.15h41.31c2.741 0 4.591.871 4.591 3.61v43.32c0 2.523-1.514 3.124-8.996 3.947-.636.07-1.104 3.272-1.104 3.272h9.181c5.537 0 9.182-2.029 9.182-8.122v-42.42c0-6.093-3.645-8.123-9.182-8.123"}}),a("path",{attrs:{d:"m259.13 21.319h58.759c-.166-2.751-.963-4.513-3.673-4.513h-58.759c.167 2.752.963 4.513 3.673 4.513"}}),a("path",{attrs:{d:"m316.06 35.761h-62.43c.166 2.751.964 4.513 3.672 4.513h62.43c-.167-2.752-.963-4.513-3.672-4.513"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"m378.49 61.03h-37.642v-4.512h37.642v4.512"}}),a("path",{attrs:{d:"m363.8 20.426v-6.318h-8.255v6.318h8.255"}}),a("path",{attrs:{d:"m387.67 18.612h-59.678c.167 2.751.964 4.513 3.673 4.513h59.677c-.166-2.752-.963-4.513-3.672-4.513"}}),a("path",{attrs:{d:"m389.51 35.761h-63.35c.166 2.751.963 4.513 3.673 4.513h63.35c-.166-2.752-.963-4.513-3.673-4.513"}}),a("path",{attrs:{d:"m317.72 64.11c-1.168-4.204-3.503-12.11-3.503-12.11h-8.263c0 0 2.677 9.02 3.742 12.521.523 1.718.286 2.467.16 3.387-.326 2.373-1.394 2.144-3.902 2.144h-35.806c-4.287 0-4.971-3.768-4.361-5.528 2.349-6.791 8.263-24.368 8.263-24.368h-8.263c0 0-5.711 17.13-8.01 23.951-.566 1.68-.422 3.659-.25 4.479.924 4.414 4.279 5.979 8.951 5.979h43.15c4.672 0 7.272-1.567 8.196-5.981.173-.821.523-2.234-.101-4.479"}}),a("path",{attrs:{d:"m376.65 42.98h-38.561c-3.396.032-5.509-.172-5.509-.902 0 0 0 21.352 0 26.18 0 6.094 2.727 6.317 8.264 6.317h45.904v-24.368c.0001-6.095-4.561-7.222-10.1-7.222m1.836 8.124v18.954h-33.97c-2.74 0-3.672-.643-3.672-2.707v-19.857h33.05c2.739 0 4.59-.237 4.59 1.805v1.805"}}),a("path",{attrs:{d:"m344.52 31.25v-.902-2.708h-8.263v2.708c0 2.157.702 4.296 1.537 5.744h11.08c-2.74 0-4.357-2.104-4.357-4.842"}}),a("path",{attrs:{d:"m383.08 30.346v-2.708h-8.263v2.708.902c0 2.738-1.617 4.842-4.362 4.842h11.1c.836-1.448 1.526-3.587 1.526-5.744"}}),a("path",{attrs:{d:"m425.31 25.832v41.519c0 2.523-.153 3.124-7.634 3.947-.637.07-2.061 3.386-2.061 3.386h9.396c5.102 0 8.572-1.367 8.561-6.431-.026-11.852 0-42.42 0-42.42h-8.262"}}),a("path",{attrs:{d:"m459.74 71.3c.586.993 0 1.354 0 1.354-5.779-1.489-13.224-9.586-15.15-22.45h8.263c-.0001-.0001 1.37 11.738 6.885 21.1"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"m234.35 29.432h-35.818v-4.492h35.818v4.492"}}),a("path",{attrs:{d:"m233.43 15.904h-34.888c-6.191 0-8.263-.859-8.263-2.708 0 1.133 0 11.732 0 17.15 0 6.093 1.809 9.02 7.345 9.02h35.807 9.181v-15.343c-.002-6.093-3.646-8.123-9.182-8.123m.918 18.953h-32.13c-2.741 0-3.672-.871-3.672-3.609v-10.831h32.13c2.74 0 3.672-.032 3.672 2.708v11.732"}}),a("path",{attrs:{d:"m205.2 46.25c-3.938 5.417-12.175 14.665-23.18 20.2-.637.319-2.384 1.805-1.836 1.805 1.147 0 .479 0 3.672 0 7.262 0 27.05-13.988 29.609-22h-8.263"}}),a("path",{attrs:{d:"m223.1 46.25c-4.625 10.639-14.276 21.563-26.854 27.08-.654.286-1.926 1.24-1.377 1.24 1.376 0 2.066 0 2.754 0 8.409 0 29.902-12.262 33.741-28.317h-8.264"}}),a("path",{attrs:{d:"m247.2 53.02c0-6.095-3.645-10.944-9.181-10.944h-43.15c-1.977-.045-3.645-.172-4.132-1.241-.352-.771-1.376-.676-1.376-.676-1.069 6.146-2.452 10.509-8.263 13.538-.25.105-1.524 1.292-.688 1.354 1.619.119 4.143-.324 5.508-.677 3.185-.823 6.293-4.333 8.952-7.785h39.479c2.757.011 4.59.984 4.59 3.724v9.477c0 4.106-.745 11.507-14.502 11.507-.64 0-1.104 3.272-1.104 3.272h7.345c9.767 0 16.525-3.325 16.525-15.456v-6.093z"}}),a("path",{attrs:{d:"m455.61 39.37h-43.15c-2.741 0-4.344.015-4.132-2.595.224-2.775 1.377-17.262 1.377-17.262 3.71-.003 31.04-.176 46.13-1.016.884-.05.896-4.114 0-4.062-15.1.884-46.13.563-46.13.563h-8.264c0 0-.927 15.14-1.376 21.1-.453 6.01 3.186 7.785 8.722 7.785h50.5c-.165-2.75-.962-4.511-3.672-4.511"}}),a("path",{attrs:{d:"m398.69 71.3c-.585.993 0 1.354 0 1.354 5.778-1.489 13.682-9.586 15.608-22.45h-8.264c0-.0001-1.829 11.738-7.344 21.1"}})])])]),t._v(" "),a("div",{staticClass:"logo-btn"},[t._v("打开APP,发现更多好音乐>")]),t._v(" "),a("div",{staticClass:"company"},[t._v("网易公司版权所有©1997-2017   杭州乐读科技有限公司运营")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"last-music"},[a("h2",[t._v("推荐歌单")]),t._v(" "),a("div",{staticClass:"last-list"},[a("li",[a("img",{attrs:{src:"http://p1.music.126.net/MFf56dl-NrFJCEAPCrWwUA==/18578447976559047.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"}}),t._v(" "),a("span",[t._v("xxxx")]),t._v(" "),a("p",[t._v("七夕快到了，单身狗有话要说……")])]),t._v(" "),a("li",[a("img",{attrs:{src:"https://p1.music.126.net/2MsstS-M9w5-li0aRy3sUQ==/1380986606815861.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"}}),t._v(" "),a("span",[t._v("xxxx")]),t._v(" "),a("p",[t._v("【旋律控】超级好听的英文歌")])]),t._v(" "),a("li",[a("img",{attrs:{src:"https://p1.music.126.net/fmzly7H5vgnWfQKhYbf_Mg==/18580646999809695.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"}}),t._v(" "),a("span",[t._v("xxxx")]),t._v(" "),a("p",[t._v("暑假补作业BGM")])]),t._v(" "),a("li",[a("img",{attrs:{src:"https://p1.music.126.net/FJAxNkFoq3dGiS9tz_bGgQ==/3405187512421439.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"}}),t._v(" "),a("span",[t._v("xxxx")]),t._v(" "),a("p",[t._v("【欧美男团】秒杀耳朵系列")])]),t._v(" "),a("li",[a("img",{attrs:{src:"https://p1.music.126.net/aLLgf1lW_hONTjsWfG4MFQ==/19136999881699849.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"}}),t._v(" "),a("span",[t._v("xxxx")]),t._v(" "),a("p",[t._v("唯美纯音｜一个小小的青春故事。")])]),t._v(" "),a("li",[a("img",{attrs:{src:"https://p1.music.126.net/ykforko5-tkvOSk_SKZ6iQ==/18942386323619651.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"}}),t._v(" "),a("span",[t._v("xxxx")]),t._v(" "),a("p",[t._v("华语 | 一见如故，觉得与阁下甚是投缘")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"main"}},[a("div",{staticClass:"topbar"},[a("header",[a("svg",{staticClass:"topsvg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 284 50","data-reactid":"6"}},[a("g",{attrs:{fill:"#fff","data-reactid":"7"}},[a("path",{attrs:{d:"m36.37 14.412c-2.115-1.367-4.707-2.117-7.377-2.251l-.595-2.174.018.021c-.023-.064-.043-.127-.063-.189l-.176-.643c-.406-1.86.333-2.748.713-3.067.064-.048.131-.097.204-.145 1.74-1.154 4.218.695 4.357.804 1.1 1.055 3.112 1.315 4.198.236 1.098-1.091.836-3.132-.261-4.223-1.708-1.698-6.95-4.426-11.41-1.467-4.01 2.659-4.09 6.402-3.431 8.565l.8 2.927c-1.339.383-2.624.933-3.797 1.647-4.391 2.676-6.594 7.192-6.04 12.391.564 5.335 4.575 9.208 9.536 9.208 5.267 0 9.551-4.262 9.551-9.501-.071-1.251-.057-1.236-.226-2.354-.165-1.091-1.783-6.218-1.783-6.218.994.229 1.923.602 2.725 1.12 9.06 5.856 5.289 15.176 5.118 15.583-2.495 5.954-7.934 9.509-14.923 9.754-4.555.16-8.919-1.535-12.289-4.772-3.554-3.41-5.591-8.189-5.591-13.11 0-7.414 4.687-14.14 11.662-16.749 1.453-.542 2.625-2.087 1.822-3.881-.632-1.41-2.344-1.895-3.796-1.352-9.156 3.418-15.307 12.251-15.307 21.981 0 6.43 2.664 12.675 7.308 17.14 4.283 4.111 9.793 6.349 15.595 6.349.264 0 .529-.004.793-.014 9.142-.32 16.585-5.251 19.9-13.164 2.071-4.807 3.225-15.684-7.231-22.445m-9.396 12.139c0 2.157-1.764 3.911-3.933 3.911-2.407 0-3.734-2.179-3.949-4.204-.408-3.861 1.619-5.959 3.392-7.04.719-.438 1.509-.781 2.335-1.029 0 0 1.912 6.05 2.061 6.99.164 1.037.094 1.372.094 1.372","data-reactid":"8"}}),a("path",{attrs:{d:"m80.12 40.04c0 0-.333-2.724 0-3.144 7.73-9.758 7.56-22.887 7.56-22.887h4.738c-.082.452-2.448 16.971-12.298 26.03","data-reactid":"9"}}),a("path",{attrs:{d:"m92.85 40.04c0 0 .333-2.724 0-3.144-7.729-9.758-8.131-22.887-8.131-22.887h-4.739c.082.452 3.02 16.971 12.87 26.03","data-reactid":"10"}}),a("path",{attrs:{d:"m66.12 40.04c0 0-.332-2.724 0-3.144 7.711-9.758 8.138-22.887 8.138-22.887h4.727c-.081.452-3.038 16.971-12.865 26.03","data-reactid":"11"}}),a("path",{attrs:{d:"m78.82 40.04c0 0 .332-2.724 0-3.144-7.71-9.758-7.515-22.887-7.515-22.887h-4.728c.081.452 2.417 16.971 12.243 26.03","data-reactid":"12"}}),a("path",{attrs:{d:"m93.1 6.82l-28.11.201c-3.618-.045-5-.822-5-2.01 0 .757 0 37.4 0 41.02l5-.006v-36h26c1.756 0 3 .17 3 2v29c0 1.688-1.27 2.27-6.06 2.818-.408.047-.708 2.188-.708 2.188h5.881c3.547 0 5.881-1.355 5.881-5.428v-28.351c.0001-4.072-2.333-5.428-5.88-5.428","data-reactid":"13"}}),a("path",{attrs:{d:"m154.33 10.02h37.67c-.106-1.835-.617-3.01-2.354-3.01h-37.67c.106 1.833.618 3.01 2.354 3.01","data-reactid":"14"}}),a("path",{attrs:{d:"m191.6 20.02h-40.624c.108 1.835.627 3.01 2.39 3.01h40.623c-.108-1.835-.628-3.01-2.389-3.01","data-reactid":"15"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"m232 37.03h-25.01v-3.01h25.01v3.01","data-reactid":"16"}}),a("path",{attrs:{d:"m221.98 10.02v-3.996h-5v3.995h5","data-reactid":"17"}}),a("path",{attrs:{d:"m237.61 9.03h-38.613c.107 1.816.623 2.979 2.376 2.979h38.614c-.107-1.817-.623-2.979-2.377-2.979","data-reactid":"18"}}),a("path",{attrs:{d:"m238.62 20.05h-40.771c.106 1.835.619 3.01 2.363 3.01h40.771c-.107-1.836-.619-3.01-2.363-3.01","data-reactid":"19"}}),a("path",{attrs:{d:"m192.76 39.03c-.751-2.811-2.252-8.094-2.252-8.094h-5.314c0 0 1.721 6.03 2.406 8.371.337 1.148.185 1.649.104 2.265-.21 1.587-.896 1.433-2.51 1.433h-23.03c-2.757 0-3.196-2.519-2.805-3.695 1.51-4.541 5.313-16.293 5.313-16.293h-5.313c0 0-3.673 11.45-5.153 16.01-.364 1.123-.271 2.446-.16 2.994.595 2.951 2.752 3.998 5.757 3.998h27.749c3 0 4.677-1.048 5.271-3.999.108-.549.332-1.493-.068-2.994","data-reactid":"20"}}),a("path",{attrs:{d:"m230.34 24.87h-24.816c-2.188.021-3.546-.115-3.546-.602 0 0 0 14.237 0 17.453 0 4.063 1.755 4.212 5.317 4.212h29.545v-16.248c0-4.064-2.936-4.815-6.5-4.815m1.65 5.563v12.585h-22.665c-1.747 0-2.343-.427-2.343-1.798v-13.185h22.08c1.748 0 2.928-.157 2.928 1.198v1.2","data-reactid":"21"}}),a("path",{attrs:{d:"m210.24 17.581v-.642-1.926h-5.235v1.926c0 1.534.444 3.056.974 4.086h7.02c-1.736 0-2.762-1.495-2.762-3.444","data-reactid":"22"}}),a("path",{attrs:{d:"m233.98 16.939v-1.926h-5.236v1.926.642c0 1.949-1.023 3.444-2.764 3.444h7.03c.53-1.029.967-2.551.967-4.086","data-reactid":"23"}}),a("path",{attrs:{d:"m261.99 13.02v28c0 1.704-.629 2.146-5.625 2.702-.426.047-1.377 2.285-1.377 2.285h6.276c3.407 0 5.726-.923 5.718-4.341-.018-8 0-28.638 0-28.638l-4.992-.008","data-reactid":"24"}}),a("path",{attrs:{d:"m283.82 44.12c.38.664 0 .904 0 .904-3.755-.994-8.592-6.405-9.842-15h5.367c.0001 0 .891 7.844 4.475 14.1","data-reactid":"25"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"m138.98 16.02h-23.99v-2.994h23.99v2.994","data-reactid":"26"}}),a("path",{attrs:{d:"m138.02 6.771h-22.663c-4.02 0-5.367-.559-5.367-1.76 0 .736 0 7.626 0 11.147 0 3.961 1.175 5.867 4.771 5.867h23.259 5.963v-9.974c0-3.961-2.367-5.28-5.963-5.28m.971 12.257h-21.648c-1.761 0-2.36-.543-2.36-2.253v-6.759h21.649c1.761 0 2.36-.02 2.36 1.69v7.322z","data-reactid":"27"}}),a("path",{attrs:{d:"m120 27.05c-2.535 3.611-7.836 9.777-14.92 13.465-.411.214-1.535 1.204-1.182 1.204.738 0 .308 0 2.363 0 4.674 0 17.408-9.327 19.06-14.669h-5.318","data-reactid":"28"}}),a("path",{attrs:{d:"m131.52 27.05c-2.977 7.094-9.188 14.377-17.283 18.05-.421.19-1.24.827-.887.827.886 0 1.33 0 1.773 0 5.411 0 19.244-8.176 21.715-18.881h-5.318","data-reactid":"29"}}),a("path",{attrs:{d:"m147 31.62c0-4.074-2.461-7.6-6.01-7.6h-28c-1.267-.03-1.884.167-2.197-.548-.226-.516-.883-.452-.883-.452-.686 4.109-1.573 7.03-5.299 9.05-.159.07-.978.863-.441.905 1.038.079 2.656-.217 3.532-.453 2.042-.551 3.583-3.196 5.288-5.504h26c1.769.007 2.712.957 2.712 2.788v6.337c0 2.745-.478 7.693-9.3 7.693-.411 0-.708 2.188-.708 2.188h4.709c6.263 0 10.598-2.224 10.598-10.334v-4.072z","data-reactid":"30"}}),a("path",{attrs:{d:"m280.64 22.968h-27.681c-1.758 0-2.786.011-2.65-1.763.145-1.885.884-11.729.884-11.729 2.38-.002 19.912-.12 29.595-.69.567-.033.575-2.796 0-2.76-10.47.648-34.798.995-34.798.995s-.693 9.675-.98 13.724c-.291 4.081 2.043 5.29 5.595 5.29h32.392c-.107-1.87-.619-3.067-2.357-3.067","data-reactid":"31"}}),a("path",{attrs:{d:"m244.15 44.12c-.369.664 0 .904 0 .904 3.641-.994 8.617-6.405 9.83-15h-5.203c0 0-1.152 7.844-4.627 14.1","data-reactid":"32"}})])]),t._v(" "),a("a",{staticClass:"download-btn"},[t._v("下载APP")])]),t._v(" "),a("nav",[a("router-link",{staticClass:"link",attrs:{to:"/recommend"}},[a("li",{class:{current:0==t.routerActive},on:{click:function(e){t.routerActive=0}}},[t._v("推荐音乐")])]),t._v(" "),a("router-link",{staticClass:"link",attrs:{to:"/hot"}},[a("li",{class:{current:1==t.routerActive},on:{click:function(e){t.routerActive=1}}},[t._v("热歌榜")])]),t._v(" "),a("router-link",{staticClass:"link",attrs:{to:"/find"}},[a("li",{class:{current:2==t.routerActive},on:{click:function(e){t.routerActive=2}}},[t._v("搜索")])])],1)]),t._v(" "),a("div",{staticClass:"layout"},[a("router-view")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1),t._v(" "),a("router-link",{attrs:{to:"/bb"}},[t._v("11")])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"hot"}},[t._m(0),t._v(" "),a("PlayList",{attrs:{newlist:t.hotlist}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hot-ct"},[a("div",{staticClass:"hot-img"}),t._v(" "),a("div",{staticClass:"hot-time"},[t._v("更新日期:")])])}]}}]),[78]);
//# sourceMappingURL=app.55b2ef431b2496f97055.js.map