(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["search","ContentCard"],{"02f4":function(t,e,n){var r=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var a,o,c=String(i(e)),s=r(n),l=c.length;return s<0||s>=l?t?"":void 0:(a=c.charCodeAt(s),a<55296||a>56319||s+1===l||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):a:t?c.slice(s,s+2):o-56320+(a-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0516":function(t,e,n){},"0fc9":function(t,e,n){var r=n("3a38"),i=Math.max,a=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):a(t,e)}},"14e0":function(t,e,n){var r=n("63b6"),i=n("5d6b");r(r.S+r.F*(Number.parseInt!=i),"Number",{parseInt:i})},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"1a88":function(t,e,n){"use strict";var r=n("d367"),i=n.n(r);i.a},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),a=n("79e5"),o=n("be13"),c=n("2b4c"),s=n("520a"),l=c("species"),u=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=c(t),h=!a(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),p=h?!a(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[f](""),!e}):void 0;if(!h||!p||"replace"===t&&!u||"split"===t&&!d){var g=/./[f],v=n(o,f,""[t],function(t,e,n,r,i){return e.exec===s?h&&!i?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),m=v[0],b=v[1];r(String.prototype,t,m),i(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"241e":function(t,e,n){var r=n("25eb");t.exports=function(t){return Object(r(t))}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"2fdb":function(t,e,n){"use strict";var r=n("5ca1"),i=n("d2c8"),a="includes";r(r.P+r.F*n("5147")(a),"String",{includes:function(t){return!!~i(this,t,a).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"335c":function(t,e,n){var r=n("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"355d":function(t,e){e.f={}.propertyIsEnumerable},"36c3":function(t,e,n){var r=n("335c"),i=n("25eb");t.exports=function(t){return r(i(t))}},"374d":function(t,e,n){"use strict";var r=n("0516"),i=n.n(r);i.a},"379d":function(t,e,n){},"386d":function(t,e,n){"use strict";var r=n("cb7c"),i=n("83a1"),a=n("5f1b");n("214f")("search",1,function(t,e,n,o){return[function(n){var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=o(n,t,this);if(e.done)return e.value;var c=r(t),s=String(this),l=c.lastIndex;i(l,0)||(c.lastIndex=0);var u=a(c,s);return i(c.lastIndex,l)||(c.lastIndex=l),null===u?-1:u.index}]})},"3a38":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"3a3d":function(t,e,n){n("14e0"),t.exports=n("584a").Number.parseInt},4917:function(t,e,n){"use strict";var r=n("cb7c"),i=n("9def"),a=n("0390"),o=n("5f1b");n("214f")("match",1,function(t,e,n,c){return[function(n){var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=c(n,t,this);if(e.done)return e.value;var s=r(t),l=String(this);if(!s.global)return o(s,l);var u=s.unicode;s.lastIndex=0;var d,f=[],h=0;while(null!==(d=o(s,l))){var p=String(d[0]);f[h]=p,""===p&&(s.lastIndex=a(l,i(s.lastIndex),u)),h++}return 0===h?null:f}]})},"4b23":function(t,e,n){"use strict";var r=n("6ac5"),i=n.n(r);i.a},"4db0":function(t,e,n){},"4f1a":function(t,e,n){"use strict";var r=n("4db0"),i=n.n(r);i.a},5147:function(t,e,n){var r=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(i){}}return!0}},5176:function(t,e,n){t.exports=n("51b6")},"51b6":function(t,e,n){n("a3c3"),t.exports=n("584a").Object.assign},"520a":function(t,e,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,a=String.prototype.replace,o=i,c="lastIndex",s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[c]||0!==e[c]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(o=function(t){var e,n,o,u,d=this;return l&&(n=new RegExp("^"+d.source+"$(?!\\s)",r.call(d))),s&&(e=d[c]),o=i.call(d,t),s&&o&&(d[c]=d.global?o.index+o[0].length:e),l&&o&&o.length>1&&a.call(o[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)}),o}),t.exports=o},"538f":function(t,e,n){"use strict";var r=n("6ff8"),i=n.n(r);i.a},5559:function(t,e,n){var r=n("dbdb")("keys"),i=n("62a0");t.exports=function(t){return r[t]||(r[t]=i(t))}},"5b4e":function(t,e,n){var r=n("36c3"),i=n("b447"),a=n("0fc9");t.exports=function(t){return function(e,n,o){var c,s=r(e),l=i(s.length),u=a(o,l);if(t&&n!=n){while(l>u)if(c=s[u++],c!=c)return!0}else for(;l>u;u++)if((t||u in s)&&s[u]===n)return t||u||0;return!t&&-1}}},"5d6b":function(t,e,n){var r=n("e53d").parseInt,i=n("a1ce").trim,a=n("e692"),o=/^[-+]?0[xX]/;t.exports=8!==r(a+"08")||22!==r(a+"0x16")?function(t,e){var n=i(String(t),3);return r(n,e>>>0||(o.test(n)?16:10))}:r},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"62a0":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},6453:function(t,e,n){"use strict";t.exports=(t=>encodeURIComponent(t).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`))},6762:function(t,e,n){"use strict";var r=n("5ca1"),i=n("c366")(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"6ac5":function(t,e,n){},"6b4c":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"6ff8":function(t,e,n){},"70f1":function(t,e,n){t.exports=n("3a3d")},"72bf":function(t,e,n){"use strict";const r=n("6453"),i=n("f234");function a(t){switch(t.arrayFormat){case"index":return(e,n,r)=>{return null===n?[c(e,t),"[",r,"]"].join(""):[c(e,t),"[",c(r,t),"]=",c(n,t)].join("")};case"bracket":return(e,n)=>{return null===n?[c(e,t),"[]"].join(""):[c(e,t),"[]=",c(n,t)].join("")};default:return(e,n)=>{return null===n?c(e,t):[c(e,t),"=",c(n,t)].join("")}}}function o(t){let e;switch(t.arrayFormat){case"index":return(t,n,r)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===r[t]&&(r[t]={}),r[t][e[1]]=n):r[t]=n};case"bracket":return(t,n,r)=>{e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==r[t]?r[t]=[].concat(r[t],n):r[t]=[n]:r[t]=n};default:return(t,e,n)=>{void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}function c(t,e){return e.encode?e.strict?r(t):encodeURIComponent(t):t}function s(t,e){return e.decode?i(t):t}function l(t){return Array.isArray(t)?t.sort():"object"===typeof t?l(Object.keys(t)).sort((t,e)=>Number(t)-Number(e)).map(e=>t[e]):t}function u(t){const e=t.indexOf("?");return-1===e?"":t.slice(e+1)}function d(t,e){e=Object.assign({decode:!0,arrayFormat:"none"},e);const n=o(e),r=Object.create(null);if("string"!==typeof t)return r;if(t=t.trim().replace(/^[?#&]/,""),!t)return r;for(const i of t.split("&")){let[t,a]=i.replace(/\+/g," ").split("=");a=void 0===a?null:s(a,e),n(s(t,e),a,r)}return Object.keys(r).sort().reduce((t,e)=>{const n=r[e];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?t[e]=l(n):t[e]=n,t},Object.create(null))}e.extract=u,e.parse=d,e.stringify=((t,e)=>{if(!t)return"";e=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},e);const n=a(e),r=Object.keys(t);return!1!==e.sort&&r.sort(e.sort),r.map(r=>{const i=t[r];if(void 0===i)return"";if(null===i)return c(r,e);if(Array.isArray(i)){const t=[];for(const e of i.slice())void 0!==e&&t.push(n(r,e,t.length));return t.join("&")}return c(r,e)+"="+c(i,e)}).filter(t=>t.length>0).join("&")}),e.parseUrl=((t,e)=>{const n=t.indexOf("#");return-1!==n&&(t=t.slice(0,n)),{url:t.split("?")[0]||"",query:d(u(t),e)}})},7445:function(t,e,n){var r=n("63b6"),i=n("5d6b");r(r.G+r.F*(parseInt!=i),{parseInt:i})},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},9306:function(t,e,n){"use strict";var r=n("c3a1"),i=n("9aa9"),a=n("355d"),o=n("241e"),c=n("335c"),s=Object.assign;t.exports=!s||n("294c")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r})?function(t,e){var n=o(t),s=arguments.length,l=1,u=i.f,d=a.f;while(s>l){var f,h=c(arguments[l++]),p=u?r(h).concat(u(h)):r(h),g=p.length,v=0;while(g>v)d.call(h,f=p[v++])&&(n[f]=h[f])}return n}:s},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},"9e55":function(t,e,n){"use strict";var r=n("379d"),i=n.n(r);i.a},a1ce:function(t,e,n){var r=n("63b6"),i=n("25eb"),a=n("294c"),o=n("e692"),c="["+o+"]",s="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),d=function(t,e,n){var i={},c=a(function(){return!!o[t]()||s[t]()!=s}),l=i[t]=c?e(f):o[t];n&&(i[n]=l),r(r.P+r.F*c,"String",i)},f=d.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},a21f:function(t,e,n){var r=n("584a"),i=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},a3c3:function(t,e,n){var r=n("63b6");r(r.S+r.F,"Object",{assign:n("9306")})},aae3:function(t,e,n){var r=n("d3f4"),i=n("2d95"),a=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),a=n("2aba"),o=n("7726"),c=n("32e9"),s=n("84f2"),l=n("2b4c"),u=l("iterator"),d=l("toStringTag"),f=s.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(h),g=0;g<p.length;g++){var v,m=p[g],b=h[m],y=o[m],_=y&&y.prototype;if(_&&(_[u]||c(_,u,f),_[d]||c(_,d,m),s[m]=f,b))for(v in r)_[v]||a(_,v,r[v],!0)}},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},b447:function(t,e,n){var r=n("3a38"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},b8e3:function(t,e){t.exports=!0},b9e9:function(t,e,n){n("7445"),t.exports=n("584a").parseInt},c3a1:function(t,e,n){var r=n("e6f3"),i=n("1691");t.exports=Object.keys||function(t){return r(t,i)}},d2c8:function(t,e,n){var r=n("aae3"),i=n("be13");t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},d367:function(t,e,n){},d39d:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("MdCard",{staticClass:"card-content height-100"},[n("MdCardMedia",{attrs:{"md-ratio":"16:9"}},[n("img",{attrs:{src:t.data.thumbnail||"https://placeholdit.co//i/320x180?bg=CCC&fc=000&text=Platzhalter",alt:"Thumbnail for ~"+t.data.title+"~"}})]),n("MdCardHeader",[n("h2",{staticClass:"md-title"},[t._v("\n        "+t._s(t.data.title||"Titel")+"\n      ")]),n("div",{staticClass:"md-subhead"},[n("div",{staticClass:"tags"},[n("MdIcon",[t._v("label")]),t._l((t.data.tags||[]).slice(0,this.$config.card.displayedTags),function(e,r){return n("span",{key:r+"-"+e},[t._v("\n            "+t._s(e)+",\n          ")])})],2)])]),n("MdCardContent",[t._v("\n      "+t._s((t.data.description||"Beschreibung...").substring(0,300))+t._s((t.data.description||"").length>300?"...":"")+"\n    ")]),n("MdCardActions",[n("div",{staticClass:"providerName"},[t._v("\n        "+t._s(t.data.providerName)+"\n      ")]),t.data._id?n("MdButton",{class:{"md-primary":t.readOnly},on:{click:function(e){t.dialog.active=!0}}},[t._v("\n        "+t._s(t.$lang.buttons.open)+"\n      ")]):t._e(),1!=t.readOnly?n("RouterLink",{attrs:{to:{path:"/edit/"+t.data._id}}},[n("MdButton",{staticClass:"md-primary"},[t._v("\n          "+t._s(t.$lang.buttons.edit)+"\n        ")])],1):t._e()],1)],1),n("ConfirmDialog",{attrs:{config:t.dialog},on:{confirm:t.onConfirm}})],1)},i=[],a=function(){return n.e("ConfirmDialog").then(n.bind(null,"9135"))},o={name:"ContentForm",components:{ConfirmDialog:a},props:{data:{type:Object,required:!0},readOnly:{type:Boolean,default:!1}},data:function(){return{dialog:{active:!1,title:this.$lang.contentCard.dialog.title,content:this.$lang.contentCard.dialog.content,confirm:this.$lang.contentCard.dialog.confirm,cancle:this.$lang.contentCard.dialog.cancle}}},methods:{onConfirm:function(){window.open(this.$config.API.baseUrl+this.$config.API.viewContentPath+this.data._id,"_blank")}}},c=o,s=(n("538f"),n("2877")),l=Object(s["a"])(c,r,i,!1,null,"f8ce5b8a",null);l.options.__file="contentCard.vue";e["default"]=l.exports},dbdb:function(t,e,n){var r=n("584a"),i=n("e53d"),a="__core-js_shared__",o=i[a]||(i[a]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},dc23:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{attrs:{id:"search-input"}},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.searchQuery,expression:"searchQuery",modifiers:{lazy:!0}}],attrs:{id:"search-query-input",placeholder:t.$lang.searchContent.search_for+"..."},domProps:{value:t.searchQuery},on:{change:function(e){t.searchQuery=e.target.value}}}),n("br"),t.searchQuery?n("span",{attrs:{id:"resultHeadline"}},[n("b",[t._v(t._s(t.pagination.totalEntrys))]),t._v(" "+t._s(t.$lang.searchContent.searchResults_for)+" "),n("b",[t._v('"'+t._s(t.searchQuery)+'"')])]):t._e()]),n("div",{staticClass:"md-layout"},[n("SearchFilter",{on:{newFilter:t.updateFilter}})],1),n("div",{staticClass:"md-layout-item items-per-page-picker"},[n("MdField",[n("label",{attrs:{for:"itemsPerPage"}},[t._v("\n        "+t._s(t.$lang.searchContent.items_per_page)+"\n      ")]),n("MdSelect",{attrs:{id:"itemsPerPage",name:"itemsPerPage"},model:{value:t.pagination.itemsPerPage,callback:function(e){t.$set(t.pagination,"itemsPerPage",t._n(e))},expression:"pagination.itemsPerPage"}},[n("MdOption",{attrs:{value:"12"}},[t._v("\n          12\n        ")]),n("MdOption",{attrs:{value:"24"}},[t._v("\n          24\n        ")]),n("MdOption",{attrs:{value:"48"}},[t._v("\n          48\n        ")]),n("MdOption",{attrs:{value:"48"}},[t._v("\n          96\n        ")])],1)],1)],1),1!=t.readOnly?n("div",{attrs:{id:"viewToggle"}},[n("MdButton",{staticClass:"md-toggle",class:{"md-primary md-raised":t.gutter},on:{click:function(e){t.gutter=!0}}},[t._v("\n      "+t._s(t.$lang.buttons.card)+"\n    ")]),n("MdButton",{staticClass:"md-toggle",class:{"md-primary md-raised":!t.gutter},on:{click:function(e){t.gutter=!1,t.tableEnabled=!0}}},[t._v("\n      "+t._s(t.$lang.buttons.list)+"\n    ")])],1):t._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:t.gutter,expression:"gutter"}],staticClass:"grid",attrs:{"md-gutter":""}},t._l(t.data,function(e){return n("div",{key:e._id+"#card",staticClass:"card-wrapper grid-xs-12 grid-s-6 grid-m-6 grid-l-4 grid-xl-3 height-100"},[n("ContentCard",{staticClass:"height-100",attrs:{data:e,"read-only":t.readOnly}})],1)}),0),t.tableEnabled&&1!=t.readOnly?n("table",{directives:[{name:"show",rawName:"v-show",value:!t.gutter,expression:"!gutter"}]},[n("thead",[n("tr",[n("th",[t._v(t._s(t.$lang.edit.form.title))]),n("th",[t._v(t._s(t.$lang.edit.form.url))]),n("th",{staticClass:"hide-s"},[t._v("\n          "+t._s(t.$lang.edit.form.license)+"\n        ")]),n("th",{staticClass:"hide-m"},[t._v("\n          "+t._s(t.$lang.edit.form.categorie)+"\n        ")])])]),t._l(t.data,function(e){return n("ContentRow",{key:e._id+"#table",attrs:{"content-data":e},on:{delete:t.deleteEntry}})})],2):t._e(),0==t.data.length?n("MdEmptyState",{staticClass:"md-primary",attrs:{"md-icon":"error_outline","md-label":t.$lang.searchContent.nothing_found,"md-description":t.$lang.searchContent.nothing_found_help}}):t._e(),n("Pagination",{attrs:{config:t.pagination},on:{pageChanged:t.pageChanged}})],1)},i=[],a=(n("ac6a"),n("5176")),o=n.n(a),c=(n("386d"),n("e814")),s=n.n(c),l=(n("cadf"),n("551c"),n("097d"),n("d39d")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[1==t.config.page?n("MdButton",{staticClass:"md-icon-button md-raised",attrs:{disabled:""}},[n("MdIcon",[t._v("arrow_back")])],1):n("MdButton",{staticClass:"md-icon-button md-raised",on:{click:function(e){t.config.page-=1}}},[n("MdIcon",[t._v("arrow_back")])],1),n("MdButton",{staticClass:"md-button md-primary md-raised",attrs:{id:"pageNumber"}},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.pageString,expression:"pageString",modifiers:{lazy:!0}}],attrs:{type:"number",min:"1",max:t.maxPages},domProps:{value:t.pageString},on:{change:function(e){t.pageString=e.target.value}}})]),t.config.page==t.maxPages?n("MdButton",{staticClass:"md-icon-button md-raised",attrs:{disabled:""}},[n("MdIcon",[t._v("arrow_forward")])],1):n("MdButton",{staticClass:"md-icon-button md-raised",on:{click:function(e){t.config.page+=1}}},[n("MdIcon",[t._v("arrow_forward")])],1)],1)},d=[],f=n("70f1"),h=n.n(f),p=(n("6b54"),{name:"Pagination",props:{config:{type:Object,required:!0}},data:function(){return{pageString:"1",maxPages:"1"}},watch:{"config.totalEntrys":function(){this.calcMaxPages()},"config.itemsPerPage":function(){this.calcMaxPages()},"config.page":function(){this.config.scroll&&window.scroll(this.config.scroll),this.pageString=this.config.page.toString(),this.$emit("pageChanged",this.config.page)},pageString:function(t){t&&(this.config.page=h()(this.pageString))}},created:function(){this.pageString=this.config.page.toString(),this.calcMaxPages()},methods:{calcMaxPages:function(){this.maxPages=(Math.ceil(this.config.totalEntrys/this.config.itemsPerPage)||1).toString()}}}),g=p,v=(n("1a88"),n("2877")),m=Object(v["a"])(g,u,d,!1,null,"639fa931",null);m.options.__file="pagination.vue";var b=m.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter"},[t._l(t.activeFilter,function(e){return n("MdChip",{key:e[0],attrs:{"md-clickable":"","md-deletable":""},on:{click:function(n){t.visibleProvider=e[0]},"md-delete":function(n){n.stopPropagation(),t.removeFilter(e[0],!0)}},model:{value:t.activeFilter,callback:function(e){t.activeFilter=e},expression:"activeFilter"}},[t._v("\n    "+t._s(e[1].displayString)+"\n  ")])}),n("MdMenu",{attrs:{"md-direction":"bottom-end"}},[n("MdButton",{attrs:{"md-menu-trigger":""}},[n("MdIcon",[n("i",{staticClass:"material-icons"},[t._v("\n          add\n        ")])]),t._v("\n      FILTER HINZUFÜGEN\n    ")],1),n("MdMenuContent",[t.isApplied("provider")?t._e():n("MdMenuItem",{on:{click:function(e){t.visibleProvider="provider"}}},[t._v("\n        Provider\n      ")]),t.isApplied("createdat")?t._e():n("MdMenuItem",{on:{click:function(e){t.visibleProvider="createdat"}}},[t._v("\n        Erstellt am\n      ")])],1)],1),n("ProviderFilterDialog",{attrs:{identifier:"provider",active:"provider"==t.visibleProvider},on:{set:t.setFilter,cancle:t.cancle}}),n("CreatedatFilterDialog",{attrs:{identifier:"createdat",active:"createdat"==t.visibleProvider},on:{set:t.setFilter,cancle:t.cancle}})],2)},_=[],C=(n("6762"),n("2fdb"),n("f499")),x=n.n(C),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MdDialog",{attrs:{"md-active":t.isActive},on:{"update:mdActive":function(e){t.isActive=e}}},[n("MdDialogTitle",[t._v(t._s(t.$lang.filter.provider.modal_title))]),n("div",{attrs:{id:"provider-picker"}},[n("MdField",[n("label",{attrs:{for:"selectedProviders"}},[t._v("\n        "+t._s(t.$lang.filter.provider.placeholder)+"\n      ")]),n("MdSelect",{attrs:{id:"selectedProviders","md-dense":""},model:{value:t.selectedProviders,callback:function(e){t.selectedProviders=e},expression:"selectedProviders"}},[n("MdOption",{attrs:{value:""}},[t._v("\n          kein Provider\n        ")]),n("MdOption",{attrs:{value:"Khan Academy"}},[t._v("\n          Khan Academy\n        ")]),n("MdOption",{attrs:{value:"Serlo"}},[t._v("\n          Serlo\n        ")]),n("MdOption",{attrs:{value:"Youtube"}},[t._v("\n          Youtube\n        ")]),n("MdOption",{attrs:{value:"LEIFI Physik"}},[t._v("\n          LEIFI Physik\n        ")])],1)],1)],1),n("MdDialogActions",[n("MdButton",{on:{click:t.onCancle}},[t._v("\n      "+t._s(t.$lang.buttons.cancel)+"\n    ")]),n("MdButton",{staticClass:"md-primary",on:{click:t.onConfirm}},[t._v("\n      "+t._s(t.$lang.buttons.add)+"\n    ")])],1)],1)},M=[],P={name:"DialogConfirm",props:{identifier:{type:String,default:""},active:{type:Boolean}},data:function(){return{isActive:!1,selectedProviders:"",apiQuery:{},urlQuery:{}}},watch:{active:function(t){this.isActive=t},isActive:function(t){0==t&&this.onCancle()}},created:function(){this.$parent.$on("reset",this.resetProviders)},methods:{onConfirm:function(){var t;0!=this.selectedProviders.length?(this.apiQuery["providerName[$match]"]=this.selectedProviders,this.urlQuery={provider:this.selectedProviders},t="Provider: ".concat(this.selectedProviders)):(this.apiQuery={},this.urlQuery={},t=null),this.$emit("set",this.identifier,{apiQuery:this.apiQuery,urlQuery:this.urlQuery,displayString:t})},onCancle:function(){this.$emit("cancle")},resetProviders:function(t){t==this.identifier&&(this.selectedProviders="")}}},D=P,S=(n("4f1a"),Object(v["a"])(D,$,M,!1,null,"ab5e3e16",null));S.options.__file="provider.vue";var w=S.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MdDialog",{attrs:{"md-active":t.isActive},on:{"update:mdActive":function(e){t.isActive=e}}},[n("MdDialogTitle",[t._v(t._s(t.$lang.filter.createdAt.modal_title))]),n("div",{attrs:{id:"provider-picker"}},[n("MdDatepicker",{attrs:{"md-disabled-dates":t.disabledFromDates},model:{value:t.createdDateRange.from,callback:function(e){t.$set(t.createdDateRange,"from",e)},expression:"createdDateRange.from"}},[n("label",[t._v(t._s(t.$lang.filter.createdAt.from))])]),n("MdDatepicker",{attrs:{"md-disabled-dates":t.disabledToDates},model:{value:t.createdDateRange.to,callback:function(e){t.$set(t.createdDateRange,"to",e)},expression:"createdDateRange.to"}},[n("label",[t._v(t._s(t.$lang.filter.createdAt.to))])])],1),n("MdDialogActions",[n("MdButton",{on:{click:t.onCancle}},[t._v("\n      "+t._s(t.$lang.buttons.cancel)+"\n    ")]),n("MdButton",{staticClass:"md-primary",on:{click:t.onConfirm}},[t._v("\n      "+t._s(t.$lang.buttons.add)+"\n    ")])],1)],1)},A=[],O={name:"DialogConfirm",props:{identifier:{type:String,default:""},active:{type:Boolean}},data:function(){return{isActive:!1,createdDateRange:{from:void 0,to:void 0},apiQuery:{},urlQuery:{}}},computed:{firstDayOfAWeek:{get:function(){return 1}}},watch:{active:function(t){this.isActive=t},isActive:function(t){0==t&&this.onCancle()},"createdDateRange.from":function(){this.orderDated()},"createdDateRange.to":function(){this.orderDated()}},created:function(){this.$parent.$on("reset",this.resetDates)},methods:{onConfirm:function(){var t,e,n;if(this.createdDateRange.from||this.createdDateRange.to){if(this.createdDateRange.from){var r=new Date(this.createdDateRange.from);this.apiQuery["createdAt[$gte]"]=this.createdDateRange.from,this.urlQuery.createdAtFrom=this.createdDateRange.from,e="".concat(r.getDate(),".").concat(r.getMonth()+1,".").concat(r.getFullYear())}else delete this.apiQuery["createdAt[$gte]"],delete this.urlQuery.createdAtFrom,e="∞";if(this.createdDateRange.to){var i=new Date(this.createdDateRange.to);this.apiQuery["createdAt[$lte]"]=this.createdDateRange.to,this.urlQuery.createdAtTo=this.createdDateRange.to,n="".concat(i.getDate(),".").concat(i.getMonth()+1,".").concat(i.getFullYear())}else delete this.apiQuery["createdAt[$gte]"],delete this.urlQuery.createdAtTo,n="∞";t="".concat(e," - ").concat(n)}else this.apiQuery={},t=null,this.urlQuery={};this.$emit("set",this.identifier,{apiQuery:this.apiQuery,urlQuery:this.urlQuery,displayString:t})},onCancle:function(){this.$emit("cancle")},resetDates:function(t){t==this.identifier&&(this.createdDateRange.from=void 0,this.createdDateRange.to=void 0)},disabledFromDates:function(t){var e=new Date;return e<t},disabledToDates:function(t){var e=new Date;return e<t},orderDated:function(){var t=this.createdDateRange.from,e=this.createdDateRange.to;t&&e&&(this.createdDateRange.from=Math.min(t,e),this.createdDateRange.to=Math.max(t,e))}}},I=O,R=(n("4b23"),Object(v["a"])(I,F,A,!1,null,"4ef9b583",null));R.options.__file="date.vue";var k=R.exports,E={name:"SearchFilter",components:{ProviderFilterDialog:w,CreatedatFilterDialog:k},data:function(){return{visibleProvider:"",activeFilter:[]}},watch:{activeFilter:function(){this.sendNewQuery()}},methods:{setFilter:function(t,e){this.visibleProvider="",e=JSON.parse(x()(e)),this.removeFilter(t,!1),this.activeFilter.push([t,e])},removeFilter:function(t,e){this.activeFilter=this.activeFilter.filter(function(e){return e[0]!=t}),e&&this.$emit("reset",t)},cancle:function(){this.visibleProvider=""},sendNewQuery:function(){var t={},e={};this.activeFilter.forEach(function(n){o()(t,n[1].apiQuery),o()(e,n[1].urlQuery)},{}),this.$emit("newFilter",t,e)},isApplied:function(t){return this.activeFilter.map(function(t){return t[0]}).includes(t)}}},Q=E,j=Object(v["a"])(Q,y,_,!1,null,"118584be",null);j.options.__file="filter.vue";var L=j.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{class:{changed:t.isDirty},attrs:{id:"contentForm"},on:{submit:function(e){return e.preventDefault(),t.validateBeforeSubmit(e)},change:t.itemChanged}},[n("td",[n("MdField",{class:{"md-input-invalid":t.errors.has("title")}},[n("MdInput",{attrs:{type:"text"},model:{value:t.contentData.title,callback:function(e){t.$set(t.contentData,"title",e)},expression:"contentData.title"}}),n("span",{staticClass:"md-error"},[t._v("\n        "+t._s(t.errors.first("title"))+"\n      ")])],1)],1),n("td",[n("MdField",{class:{"md-input-invalid":t.errors.has("url")}},[n("MdInput",{model:{value:t.contentData.url,callback:function(e){t.$set(t.contentData,"url",e)},expression:"contentData.url"}}),n("span",{staticClass:"md-error"},[t._v("\n        "+t._s(t.errors.first("url"))+"\n      ")])],1)],1),n("td",{staticClass:"hide-s"},[n("MdField",[n("MdInput",{attrs:{name:"license"},model:{value:t.contentData.licenses,callback:function(e){t.$set(t.contentData,"licenses",e)},expression:"contentData.licenses"}})],1)],1),n("td",{staticClass:"hide-m"},[n("MdField",[n("MdSelect",{attrs:{id:"contentCategory",name:"contentCategory"},model:{value:t.contentData.contentCategory,callback:function(e){t.$set(t.contentData,"contentCategory",e)},expression:"contentData.contentCategory"}},[n("MdOption",{attrs:{value:""}}),n("MdOption",{attrs:{value:"atomic"}},[t._v("\n          Atomic\n        ")]),n("MdOption",{attrs:{value:"interactive"}},[t._v("\n          Interactive\n        ")])],1)],1)],1),n("td",[n("MdButton",{staticClass:"md-icon-button",on:{click:function(e){t.dialog.active=!0}}},[n("MdIcon",[t._v("delete")])],1),n("ConfirmDialog",{attrs:{config:t.dialog},on:{confirm:t.deleteContent}}),n("MdButton",{staticClass:"md-icon-button md-primary",attrs:{type:"submit"}},[n("MdIcon",[t._v("save")])],1)],1)])},B=[],N=(n("4917"),n("a026")),q=n("7bb1");N["default"].use(q["a"]);var U=function(){return n.e("ConfirmDialog").then(n.bind(null,"9135"))},z={name:"ContentTableRow",components:{ConfirmDialog:U},props:{contentData:{type:Object,default:function(){return{}}}},data:function(){return{isDirty:!1,dialog:{active:!1,title:this.$lang.edit.dialog.title,content:this.$lang.edit.dialog.content,confirm:this.$lang.edit.dialog.confirm,cancle:this.$lang.edit.dialog.cancle}}},watch:{"data.contentCategory":function(){this.itemChanged()},"data.licenses":function(){this.itemChanged()}},methods:{required:function(t){return t&&""!=t},isUrl:function(t){return t.match(/[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&\/\/=]*)/gi)},maxLength:function(t,e){return t.length<=e},validateBeforeSubmit:function(){if(this.isUrl(this.contentData.url)&&this.required(this.contentData.title))return alert("Form Submitted!"),void this.submitContent();alert("Correct the errors!")},submitContent:function(){this.clearItemChanged(),this.$route.params.id?this.$http.patch(this.$config.API.contentServerUrl+this.$config.API.pushContentPath+this.contentData._id,this.contentData,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}):this.$http.post(this.$config.API.contentServerUrl+this.$config.API.pushContentPath,this.contentData,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}})},itemChanged:function(){this.isDirty=!0},clearItemChanged:function(){this.isDirty=!1},deleteContent:function(){var t=this;this.clearItemChanged(),this.$http.delete(this.$config.API.contentServerUrl+this.$config.API.pushContentPath+this.contentData._id,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then(function(){t.$router.push({path:"/"})}),this.$emit("delete",this.contentData._id)}}},H=z,G=(n("9e55"),Object(v["a"])(H,T,B,!1,null,"6586ed68",null));G.options.__file="editForm-table.vue";var V=G.exports,J=n("72bf"),Y={name:"ContentList",components:{ContentCard:l["default"],Pagination:b,ContentRow:V,SearchFilter:L},props:{readOnly:{type:Boolean}},data:function(){return{data:[],gutter:!0,tableEnabled:!1,searchQuery:"",apiFilterQuery:{},urlQuery:{},pagination:{page:1,itemsPerPage:12,totalEntrys:0,buttonRange:2,scroll:{top:0,left:0,behavior:"smooth"}}}},watch:{searchQuery:function(t,e){t!=e&&(""!=e&&(this.pagination.page=1),this.loadContent())},"pagination.page":function(t,e){t!=e&&this.loadContent()},"pagination.itemsPerPage":function(t,e){t!=e&&(this.pagination.page=1,this.loadContent())}},created:function(){if(this.$router)this.searchQuery=this.$route.query.q||"",this.pagination.page=s()(this.$route.query.p)||1;else{var t=J.parse(location.search)||{};this.searchQuery=t.q||"",this.pagination.page=s()(t.p)||1}this.loadContent(),window.onhashchange=this.urlChangeHandler},methods:{pageChanged:function(t){this.pagination.page=t,this.loadContent()},updateURL:function(t){if(this.$router)this.$router.push({query:t});else if(history.pushState){var e="".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname,"?").concat(J.stringify(t));window.history.pushState({path:e},"",e)}},loadContent:function(){var t=this,e=this.pagination.page||1,n=this.searchQuery||"";this.urlQuery.q=n,this.urlQuery.p=e,this.updateURL(this.urlQuery);var r={$limit:this.pagination.itemsPerPage,$skip:this.pagination.itemsPerPage*(e-1),"_all[$match]":n},i=J.stringify(o()(r,this.apiFilterQuery)),a=0==n.length?this.$config.API.getContentPath:"".concat(this.$config.API.searchContentPath,"?").concat(i);this.$http.get(this.$config.API.serverServerUrl+a,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then(function(e){t.data=e.data.data,t.pagination.totalEntrys=e.data.total}).catch(function(t){console.error(t)})},urlChangeHandler:function(){if(this.$router)this.searchQuery=this.$route.query.q,this.pagination.page=s()(this.$route.query.p);else{var t=J.parse(location.search);this.searchQuery!=t.q&&(this.searchQuery=t.q),this.pagination.page!=s()(t.p)&&(this.pagination.page=s()(t.p))}},updateFilter:function(t,e){this.apiFilterQuery=t,this.urlQuery=e,this.loadContent()},deleteEntry:function(t){var e=this;this.data.forEach(function(n,r){n._id==t&&e.data.splice(r,1)})}}},Z=Y,K=(n("374d"),Object(v["a"])(Z,r,i,!1,null,"44896ba2",null));K.options.__file="search.vue";e["default"]=K.exports},e692:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e6f3:function(t,e,n){var r=n("07e3"),i=n("36c3"),a=n("5b4e")(!1),o=n("5559")("IE_PROTO");t.exports=function(t,e){var n,c=i(t),s=0,l=[];for(n in c)n!=o&&r(c,n)&&l.push(n);while(e.length>s)r(c,n=e[s++])&&(~a(l,n)||l.push(n));return l}},e814:function(t,e,n){t.exports=n("b9e9")},f234:function(t,e,n){"use strict";var r="%[a-f0-9]{2}",i=new RegExp(r,"gi"),a=new RegExp("("+r+")+","gi");function o(t,e){try{return decodeURIComponent(t.join(""))}catch(i){}if(1===t.length)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],o(n),o(r))}function c(t){try{return decodeURIComponent(t)}catch(r){for(var e=t.match(i),n=1;n<e.length;n++)t=o(e,n).join(""),e=t.match(i);return t}}function s(t){var e={"%FE%FF":"��","%FF%FE":"��"},n=a.exec(t);while(n){try{e[n[0]]=decodeURIComponent(n[0])}catch(l){var r=c(n[0]);r!==n[0]&&(e[n[0]]=r)}n=a.exec(t)}e["%C2"]="�";for(var i=Object.keys(e),o=0;o<i.length;o++){var s=i[o];t=t.replace(new RegExp(s,"g"),e[s])}return t}t.exports=function(t){if("string"!==typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return s(t)}}},f499:function(t,e,n){t.exports=n("a21f")}}]);
//# sourceMappingURL=search.f3a2af2b.js.map