(function(e){function t(t){for(var r,o,n=t[0],l=t[1],c=t[2],m=0,d=[];m<n.length;m++)o=n[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],r=!0,n=1;n<i.length;n++){var l=i[n];0!==a[l]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=i[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=r,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(i,r,function(t){return e[t]}.bind(null,r));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vuejs-movies-example/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var u=l;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"01ec":function(e,t,i){},"0212":function(e,t,i){"use strict";var r=i("b1d3"),a=i.n(r);a.a},"28eb":function(e,t,i){"use strict";var r=i("01ec"),a=i.n(r);a.a},"3b40":function(e,t,i){},"41a5":function(e,t,i){"use strict";var r=i("3b40"),a=i.n(r);a.a},"50a2":function(e,t,i){"use strict";var r=i("a078"),a=i.n(r);a.a},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("NavigationBar"),i("router-view"),i("footer-component")],1)},s=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("b-navbar",{staticStyle:{"font-size":"1.15rem"},attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[i("b-navbar-brand",{staticClass:"title",attrs:{"router-link":"",to:"/"}},[e._v("Vue Movies")]),i("b-navbar-toggle",{staticClass:"nav-pages-style",attrs:{target:"nav-collapse"}}),i("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[i("b-navbar-nav",[i("b-nav-item",{attrs:{"router-link":"",to:"/"}},[e._v("Home")]),i("b-nav-item",{attrs:{"router-link":"",to:"/movie"}},[e._v("Movie List")]),i("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[i("em",[e._v("Categories")])]},proxy:!0}])},e._l(e.options,(function(t){return i("b-dropdown-item",{attrs:{"router-link":"",to:t.value}},[e._v(e._s(t.text))])})),1)],1),i("b-navbar-nav",{staticClass:"ml-auto"},[i("b-nav-form",[i("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search Movie"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),i("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"},on:{click:function(t){return e.search()}}},[i("b-icon-search"),e._v(" Search")],1)],1)],1)],1)],1)],1)},n=[],l={name:"NavigationBar",props:{},data:function(){return{title:null,selected:"",options:[{text:"Comic",value:"/categories/comic"},{text:"Romantic",value:"/categories/romantic"},{text:"Adventure",value:"/categories/adventure"},{text:"Favourites",value:"/favourites"}]}},methods:{search:function(e){this.$router.push("/movie/"+this.title)}}},c=l,u=(i("d34d"),i("2877")),m=Object(u["a"])(c,o,n,!1,null,"80e73018",null),d=m.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("footer",{staticClass:"py-4 bg-dark text-white-50",attrs:{id:"footer-style"}},[i("div",{staticClass:"container text-center"},[i("small",[e._v("Copyright © Vue Movies Website. All Rights Reserved.")])])])])}],v={name:"FooterComponent"},h=v,g=(i("0212"),Object(u["a"])(h,f,p,!1,null,"7dfad199",null)),b=g.exports,C=i("5f5b");r["default"].use(C["a"]);var y={name:"App",components:{NavigationBar:d,FooterComponent:b},created:function(){console.log("ON-CREATED APP"),this.$store.dispatch("filmsStore/loadFilms")}},_=y,k=(i("5c0b"),Object(u["a"])(_,a,s,!1,null,null,null)),F=k.exports,x=i("8c4f"),S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hello"},[i("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":e.onSlideStart,"sliding-end":e.onSlideEnd},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},e._l(this.topRatedFilms,(function(t){return i("b-carousel-slide",{scopedSlots:e._u([{key:"img",fn:function(){return[i("img",{key:t.id,staticClass:"d-block img-fluid-grow w-100 img-responsive",staticStyle:{cursor:"pointer"},attrs:{src:t.imageHd,alt:"image slot"},on:{click:function(i){return e.directDetails(t.id)}}})]},proxy:!0}],null,!0)})})),1),i("category-slider",{attrs:{title:"Adventure Movies",category:"adventure"}}),i("category-slider",{attrs:{title:"Comic Movies",category:"comic"}}),i("category-slider",{attrs:{title:"Romantic Movies",category:"romantic"}})],1)},E=[],w=(i("4de4"),i("caad"),i("2532"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.title?i("h4",{staticClass:"font-sizeh4-mobile style-h4"},[e._v(e._s(e.title)+" "),i("router-link",{staticClass:"router-link-style",attrs:{to:{path:"/categories/"+this.category}}},[e._v(" Explore")])],1):e._e(),i("div",{staticClass:"scroll-parent"},[i("button",{staticClass:"move-left",class:{showButton:e.isButtonLeftActive},on:{click:function(t){return e.less()}}},[i("b-icon-chevron-left")],1),i("ul",{staticClass:"scrollable padding-mobile"},e._l(this.filmsToDisplay,(function(t){return i("li",{staticClass:"relative"},[i("star",{staticClass:"star",class:{isPreferred:t.prefer},model:{value:t.prefer,callback:function(i){e.$set(t,"prefer",i)},expression:"film.prefer"}}),i("img",{attrs:{src:t.image,alt:"Image Film"},on:{click:function(i){return e.directDetails(t.id)}}})],1)})),0),i("button",{staticClass:"move-right",on:{click:function(t){return e.more()}}},[i("b-icon-chevron-right")],1)])])}),D=[],A=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.change(t)}}},[e.value?i("i",{staticClass:"material-icons"},[e._v("star")]):e._e(),e.value?e._e():i("i",{staticClass:"material-icons"},[e._v("star_border")])])},$=[],I={name:"Star",props:{value:Boolean},data:function(){return{}},methods:{change:function(e){e.stopPropagation(),this.$emit("input",!this.value)}}},O=I,P=Object(u["a"])(O,A,$,!1,null,null,null),M=P.exports,T={name:"CategorySlider",components:{Star:M},props:{title:String,category:String},data:function(){return{isButtonLeftActive:!1,filmList:[],filmsToDisplay:[]}},created:function(){var e=this;console.log("ON-CREATED FilmList "),this.filmList=this.$store.getters["filmsStore/getFilms"],this.updateListToDisplay(),this.$store.watch((function(t){return e.$store.getters["filmsStore/getFilms"]}),(function(t,i){console.log("watch: ",t),e.filmList=t,e.updateListToDisplay()}),{deep:!0})},methods:{more:function(){this.$el.querySelector(".scrollable").scrollLeft+=300,0!=this.$el.querySelector(".scrollable").scrollLeft&&(this.isButtonLeftActive=!0)},less:function(){this.$el.querySelector(".scrollable").scrollLeft+=-300},updateListToDisplay:function(){var e=this;this.category&&(this.filmsToDisplay=this.filmList.filter((function(t){return t.categories.includes(e.category)})))},directDetails:function(e){console.log("number id: "+e),this.$router.push("/movieDetails/"+e)}}},j=T,L=(i("739b"),Object(u["a"])(j,w,D,!1,null,"40dc127c",null)),B=L.exports,N={name:"Home",components:{CategorySlider:B},props:{msg:String},data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(e){this.sliding=!0},onSlideEnd:function(e){this.sliding=!1},directDetails:function(e){console.log("number id: "+e),this.$router.push("/movieDetails/"+e)}},computed:{topRatedFilms:function(){return this.$store.getters["filmsStore/getFilms"].filter((function(e){return e.categories.includes("top-rated")}))}}},R=N,V=(i("8e77"),Object(u["a"])(R,S,E,!1,null,"01cb1138",null)),q=V.exports,z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"movies-page"},[e.searchValue?i("h2",[e._v('RESULTS for "'+e._s(e.searchValue)+'":')]):e.searchCategory?i("h2",[e._v("MOVIE CATEGORY: "+e._s(e.searchCategory))]):e.isFavourites?i("h2",[e._v("FAVOURITE MOVIES: "+e._s(e.searchCategory))]):i("h2",[e._v("ALL MOVIES")]),i("movie-list-serp",{staticStyle:{"margin-top":"100px"},attrs:{mySearch:e.searchValue,isPrefer:e.isFavourites,myCategory:e.searchCategory}}),i("button",{staticClass:"add-button",on:{click:function(t){return e.goToAddFilmPage()}}},[i("b-icon-plus",{staticClass:"icon-size"}),i("span",{staticClass:"add-movie-label"},[e._v("ADD MOVIE")])],1)],1)},H=[],U=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[this.allFilms.length>0?i("ul",{staticClass:"scrollable no-padding"},e._l(this.allFilms,(function(t){return i("li",[i("div",{staticClass:"image"},[i("star",{staticClass:"star",class:{isPreferred:t.prefer},model:{value:t.prefer,callback:function(i){e.$set(t,"prefer",i)},expression:"item.prefer"}}),i("img",{attrs:{src:t.image,alt:"Image Film"},on:{click:function(i){return e.directDetails(t.id)}}})],1)])})),0):i("h4",{staticClass:"no-item-found"},[e._v("No Item Found😢")])])},G=[],J={name:"MovieListSerp",components:{Star:M},props:["mySearch","myCategory","isPrefer"],data:function(){return{}},methods:{directDetails:function(e){console.log("number id: "+e),this.$router.push("/movieDetails/"+e)}},computed:{allFilms:function(){var e=this;return this.mySearch?this.$store.getters["filmsStore/getFilms"].filter((function(t){return t.title.toLowerCase().includes(e.mySearch.toLowerCase())})):this.myCategory?this.$store.getters["filmsStore/getFilms"].filter((function(t){return t.categories.includes(e.myCategory)})):this.isPrefer?this.$store.getters["filmsStore/getFilms"].filter((function(e){return 1==e.prefer})):this.$store.getters["filmsStore/getFilms"]}}},Y=J,W=(i("ad81"),Object(u["a"])(Y,U,G,!1,null,"ea59ad16",null)),K=W.exports,Q={name:"MoviesPage",components:{MovieListSerp:K},props:["isFavourites"],data:function(){return{}},methods:{goToAddFilmPage:function(){this.$router.push("/addFilm")}},computed:{searchValue:function(){return this.$route.params.title},searchCategory:function(){return this.$route.params.category}}},X=Q,Z=(i("50a2"),Object(u["a"])(X,z,H,!1,null,"42ff732f",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[e.filmDetail?i("div",{staticClass:"dark movie-details bg",style:{backgroundImage:"url("+e.filmDetail.image+")"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col style-col"},[i("h1",[e._v(e._s(e.filmDetail.title))]),i("p",[e._v(e._s(e.filmDetail.durata)+" "+e._s(e.filmDetail.year))]),i("p",{attrs:{id:"description"}},[e._v(e._s(e.filmDetail.description))]),i("div",{staticClass:"row cast"},[i("div",{staticClass:"col-2"},[e._v("CAST:")]),i("div",{staticClass:"col-10"},[e._v(e._s(e.filmDetail.cast))]),i("div",{staticClass:"col-2 category"},[e._v("CATEGORY:")]),i("div",{staticClass:"col-10"},e._l(e.filmDetail.categories,(function(t,r){return i("a",{key:t,staticClass:"capitalize categories",attrs:{href:""}},[e._v(" "+e._s(t)+" "),r+1<e.filmDetail.categories.length?i("span",[e._v(", ")]):e._e()])})),0),i("div",{staticClass:"col-2"},[e._v("LANGUAGE:")]),i("div",{staticClass:"col-10 span-remove"},[i("span",{staticStyle:{"margin-left":"50px"}}),e._v(e._s(e.filmDetail.language))])])]),i("div",{staticClass:"col"},[i("div",[i("img",{staticClass:"mediaImg",attrs:{src:e.filmDetail.image,width:"200",height:""}})]),i("div",{staticClass:"buttonTrailer"},[i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{btn:"","btn-primary":""}},[i("b-icon-play-fill"),e._v("TRAILER")],1),i("b-modal",{attrs:{id:"modal-1","hide-footer":""}},[i("iframe",{attrs:{width:"100%",height:"315",src:e.filmDetail.trailerPath,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1),i("div",{staticClass:"buttonPreferiti"},[i("button",{staticClass:"btn btn-primary display-style",on:{click:function(t){return e.toggleFavourite()}}},[i("star",{model:{value:e.filmDetail.prefer,callback:function(t){e.$set(e.filmDetail,"prefer",t)},expression:"filmDetail.prefer"}}),e._v("FAVOURITE ")],1)])])])]):e._e()])},ie=[],re=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("form",{on:{submit:e.checkForm}},[i("div",{staticClass:"form-group align-left"},[e._m(0),i("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"form-control mb-2",attrs:{type:"text",id:"inlineFormInput1",placeholder:"title"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),e.isErrorTitle?i("div",{staticClass:"text-red-style"},[e._v("Title required.")]):e._e()]),i("div",{staticClass:"form-group align-left"},[e._m(1),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"form-control mb-2",attrs:{name:"message",id:"inlineFormInput2",placeholder:"description"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),e.isErrorDescription?i("div",{staticClass:"text-red-style"},[e._v("Description required.")]):e._e()]),i("div",{staticClass:"text-left mb-3"},[i("div",{staticClass:"form-group align-left"},[e._v(" Category ")]),i("div",{staticClass:"form-group form-check inline align-left"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedCategories,expression:"checkedCategories"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"romantic",value:"romantic"},domProps:{checked:Array.isArray(e.checkedCategories)?e._i(e.checkedCategories,"romantic")>-1:e.checkedCategories},on:{change:function(t){var i=e.checkedCategories,r=t.target,a=!!r.checked;if(Array.isArray(i)){var s="romantic",o=e._i(i,s);r.checked?o<0&&(e.checkedCategories=i.concat([s])):o>-1&&(e.checkedCategories=i.slice(0,o).concat(i.slice(o+1)))}else e.checkedCategories=a}}}),i("label",{staticClass:"form-check-label",attrs:{for:"romantic"}},[e._v("Romantic")])]),i("div",{staticClass:"form-group form-check inline align-left"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedCategories,expression:"checkedCategories"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"comic",value:"comic"},domProps:{checked:Array.isArray(e.checkedCategories)?e._i(e.checkedCategories,"comic")>-1:e.checkedCategories},on:{change:function(t){var i=e.checkedCategories,r=t.target,a=!!r.checked;if(Array.isArray(i)){var s="comic",o=e._i(i,s);r.checked?o<0&&(e.checkedCategories=i.concat([s])):o>-1&&(e.checkedCategories=i.slice(0,o).concat(i.slice(o+1)))}else e.checkedCategories=a}}}),i("label",{staticClass:"form-check-label",attrs:{for:"comic"}},[e._v("Comic")])]),i("div",{staticClass:"form-group form-check inline align-left"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedCategories,expression:"checkedCategories"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"adventure",value:"adventure"},domProps:{checked:Array.isArray(e.checkedCategories)?e._i(e.checkedCategories,"adventure")>-1:e.checkedCategories},on:{change:function(t){var i=e.checkedCategories,r=t.target,a=!!r.checked;if(Array.isArray(i)){var s="adventure",o=e._i(i,s);r.checked?o<0&&(e.checkedCategories=i.concat([s])):o>-1&&(e.checkedCategories=i.slice(0,o).concat(i.slice(o+1)))}else e.checkedCategories=a}}}),i("label",{staticClass:"form-check-label",attrs:{for:"adventure"}},[e._v("Adventure")])])]),i("div",{staticClass:"form-group align-left"},[i("label",{staticClass:"left",attrs:{for:"inlineFormInput2"}},[e._v("Cast")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.cast,expression:"cast"}],staticClass:"form-control mb-2",attrs:{name:"message",id:"inlineFormInput2",placeholder:"cast"},domProps:{value:e.cast},on:{input:function(t){t.target.composing||(e.cast=t.target.value)}}})]),i("div",{staticClass:"form-group align-left"},[e._m(2),i("div",{staticClass:"input-image-display"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.image,expression:"image"}],staticClass:"form-control mb-2 input-width",attrs:{type:"text",id:"inlineFormInput5",placeholder:"image url"},domProps:{value:e.image},on:{input:function(t){t.target.composing||(e.image=t.target.value)}}}),i("span",{staticClass:"span-margin"},[e._v("or")]),i("input",{staticClass:"input-button",attrs:{type:"file",id:"avatar",name:"avatar",accept:"image/png, image/jpeg"},on:{change:e.onFileChanged}})]),e.isErrorImage?i("div",{staticClass:"text-red-style"},[e._v("Image required.")]):e._e()]),i("div",{staticClass:"form-group align-left"},[i("label",{staticClass:"left",attrs:{for:"inlineFormInput4"}},[e._v("Trailer")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.trailer,expression:"trailer"}],staticClass:"form-control mb-2",attrs:{type:"text",id:"inlineFormInput4",placeholder:"trailer embeded code"},domProps:{value:e.trailer},on:{input:function(t){t.target.composing||(e.trailer=t.target.value)}}})]),i("div",{staticClass:"form-group align-left custom-control custom-switch "},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.prefer,expression:"prefer"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customSwitches"},domProps:{checked:Array.isArray(e.prefer)?e._i(e.prefer,null)>-1:e.prefer},on:{change:function(t){var i=e.prefer,r=t.target,a=!!r.checked;if(Array.isArray(i)){var s=null,o=e._i(i,s);r.checked?o<0&&(e.prefer=i.concat([s])):o>-1&&(e.prefer=i.slice(0,o).concat(i.slice(o+1)))}else e.prefer=a}}}),i("label",{staticClass:"custom-control-label",attrs:{for:"customSwitches"}},[e._v("ADD TO FAVOURITES")])]),e._m(3)])])},ae=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("label",{staticClass:"left",attrs:{for:"inlineFormInput1"}},[e._v("Title "),i("span",{staticClass:"red"},[e._v("*")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("label",{staticClass:"left",attrs:{for:"inlineFormInput2"}},[e._v("Description "),i("span",{staticClass:"red"},[e._v("*")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("label",{attrs:{for:"inlineFormInput5"}},[e._v("Image "),i("span",{staticClass:"red"},[e._v("*")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"col-auto"},[i("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"submit"}},[e._v("Add Movie")])])}],se=(i("a4d3"),i("e01a"),{name:"FormComponent",components:{Star:M},props:{},data:function(){return{title:null,isErrorTitle:!1,description:null,isErrorDescription:!1,checkedCategories:[],cast:null,prefer:!1,image:null,isErrorImage:!1,trailer:null,imageBase64:null,id:10*Math.random()}},methods:{onFileChanged:function(e){var t=this,i=e.target.files[0],r=new FileReader;r.readAsDataURL(i),r.onload=function(){t.imageBase64=r.result},r.onerror=function(e){console.error("Error reading image: ",e)}},checkForm:function(e){e.preventDefault(),this.isFormInvalid()||(this.save(),this.resetForm())},isFormInvalid:function(){return this.compileErrors(),this.formHasErrors()},resetForm:function(){this.title="",this.description="",this.image=""},resetErrors:function(){this.isErrorTitle=!1,this.isErrorDescription=!1,this.isErrorImage=!1},compileErrors:function(){this.resetErrors(),this.title&&this.hasMinLength(this.title,5)||(this.isErrorTitle=!0),this.description&&this.hasMinLength(this.description,5)||(this.isErrorDescription=!0),this.image||this.imageBase64||(this.isErrorImage=!0)},formHasErrors:function(){var e=!1;return(this.isErrorTitle||this.isErrorDescription||this.isErrorImage)&&(e=!0),e},hasMinLength:function(e,t){return e.length>=t},save:function(){var e={title:this.title,description:this.description,categories:this.checkedCategories,cast:this.cast,prefer:this.prefer,image:this.image?this.image:this.imageBase64,trailerPath:this.trailer,id:this.id};console.log("save something .."),this.title?(this.$store.dispatch("filmsStore/callActionAddFilm",e),this.$router.push("../movie")):console.log("No update Film")}}}),oe=se,ne=(i("28eb"),Object(u["a"])(oe,re,ae,!1,null,"74034d6d",null)),le=ne.exports,ce={name:"MovieDetailsPage",props:{},data:function(){return{}},components:{Star:M},created:function(){console.log("detail created")},methods:{goBack:function(){this.$router.push("../")},toggleFavourite:function(){this.filmDetail.prefer=!this.filmDetail.prefer,console.log("ciao")}},computed:{paramID:function(){return this.$route.params.id},filmDetail:function(){return this.$store.getters["filmsStore/getFilmDetails"](this.paramID)}}},ue=ce,me=(i("e3da"),Object(u["a"])(ue,te,ie,!1,null,"6e69fd3c",null)),de=me.exports,fe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-auto left"},[i("b-button",{staticClass:"button-style",on:{click:function(t){return e.goBack()}}},[i("b-icon-chevron-left"),e._v("Back")],1)],1)]),i("form-component")],1)},pe=[],ve={name:"AddFilmPage",components:{FormComponent:le},props:{},data:function(){return{}},methods:{goBack:function(){this.$router.push("/movie")}}},he=ve,ge=(i("41a5"),Object(u["a"])(he,fe,pe,!1,null,"325f519a",null)),be=ge.exports;r["default"].use(x["a"]);var Ce=[{path:"/",name:"Home",component:q},{path:"/movie",name:"Movie",component:ee},{path:"/movie/:title",name:"MovieTitle",component:ee},{path:"/categories/:category",name:"MovieCategory",component:ee},{path:"/favourites",name:"MovieFavourites",component:ee,props:{isFavourites:!0}},{path:"/movieDetails/:id",name:"MovieDetails",component:de},{path:"/addFilm",name:"addFilm",component:be}],ye=new x["a"]({base:"/vuejs-movies-example",linkExactActiveClass:"active",routes:Ce,mode:"history"}),_e=ye,ke=i("2f62"),Fe=(i("c740"),i("2909")),xe=i("bc3a"),Se=i.n(xe),Ee={namespaced:!0,state:{allFilms:[]},getters:{getFilms:function(e){return e.allFilms},getFilmDetails:function(e){return function(t){var i=e.allFilms.findIndex((function(e){return e.id==t}));return e.allFilms[i]}}},mutations:{loadFilmsMutation:function(e){console.log("Mutation loadFilms"),Se.a.get("/vuejs-movies-example/films.json").then((function(t){var i,r=t.data.list;console.log("api call response"),(i=e.allFilms).push.apply(i,Object(Fe["a"])(r))}))},addFilm:function(e,t){console.log("state- add Film"),e.allFilms.push(t)}},actions:{loadFilms:function(e){e.commit("loadFilmsMutation")},callActionAddFilm:function(e,t){e.commit("addFilm",t)}}};r["default"].use(ke["a"]);var we=new ke["a"].Store({modules:{filmsStore:Ee}}),De=i("9483");Object(De["a"])("".concat("/vuejs-movies-example/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Ae=i("0759"),$e=i("7386");i("2dd8");r["default"].use(C["a"]),r["default"].component("BIcon",Ae["a"]),r["default"].component("BIconChevronLeft",$e["d"]),r["default"].component("BIconChevronRight",$e["e"]),r["default"].component("BIconPlus",$e["i"]),r["default"].component("BIconSearch",$e["j"]),r["default"].component("BIconPlayFill",$e["h"]),r["default"].config.productionTip=!1,new r["default"]({router:_e,store:we,render:function(e){return e(F)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var r=i("9c0c"),a=i.n(r);a.a},"739b":function(e,t,i){"use strict";var r=i("aa8a"),a=i.n(r);a.a},"81a3":function(e,t,i){},"8e77":function(e,t,i){"use strict";var r=i("c4a5"),a=i.n(r);a.a},"9c0c":function(e,t,i){},a078:function(e,t,i){},aa8a:function(e,t,i){},ad81:function(e,t,i){"use strict";var r=i("e2f1"),a=i.n(r);a.a},b1d3:function(e,t,i){},bc29:function(e,t,i){},c4a5:function(e,t,i){},d34d:function(e,t,i){"use strict";var r=i("81a3"),a=i.n(r);a.a},e2f1:function(e,t,i){},e3da:function(e,t,i){"use strict";var r=i("bc29"),a=i.n(r);a.a}});
//# sourceMappingURL=app.0a49be60.js.map