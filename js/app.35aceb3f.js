(function(e){function t(t){for(var r,c,i=t[0],l=t[1],u=t[2],f=0,d=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/CISA-Log4J-DB-Frontend/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2e65":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=(n("4de4"),n("d3b7"),n("b0c0"),{class:"q-pa-md"}),o=["href"],c=["href"],i={class:"full-width row flex-center text-accent q-gutter-sm"};function l(e,t,n,l,u,s){var f=Object(r["C"])("q-td"),d=Object(r["C"])("q-icon"),p=Object(r["C"])("q-input"),b=Object(r["C"])("q-btn"),j=Object(r["C"])("q-th"),h=Object(r["C"])("q-tr"),m=Object(r["C"])("q-table");return Object(r["y"])(),Object(r["g"])("div",a,[Object(r["j"])(m,{class:"my-sticky-header-table",title:"CISA Log4J Database",filter:u.filter,"no-data-label":"I didn't find anything for you","no-results-label":"The filter didn't uncover any results","virtual-scroll":"","rows-per-page-options":[0],pagination:u.pagination,"onUpdate:pagination":t[1]||(t[1]=function(e){return u.pagination=e}),rows:u.log4jData,columns:u.columns},{"body-cell-Vendor_link":Object(r["F"])((function(e){return[Object(r["j"])(f,{props:e},{default:Object(r["F"])((function(){return[Object(r["h"])("div",null,[Object(r["h"])("a",{href:e.value,target:"_blank"},"External Link ",8,o)])]})),_:2},1032,["props"])]})),"body-cell-Reporter":Object(r["F"])((function(e){return[Object(r["j"])(f,{props:e},{default:Object(r["F"])((function(){return[Object(r["h"])("a",{href:e.value,target:"_blank"},"Reporter",8,c)]})),_:2},1032,["props"])]})),"top-left":Object(r["F"])((function(){return[Object(r["j"])(p,{dense:"",debounce:"300",modelValue:u.filter,"onUpdate:modelValue":t[0]||(t[0]=function(e){return u.filter=e}),placeholder:"Search"},{append:Object(r["F"])((function(){return[Object(r["j"])(d,{name:"search"})]})),_:1},8,["modelValue"])]})),"no-data":Object(r["F"])((function(e){var t=e.icon,n=e.message,a=e.filter;return[Object(r["h"])("div",i,[Object(r["j"])(d,{size:"2em",name:"sentiment_dissatisfied"}),Object(r["h"])("span",null," Well this is sad... "+Object(r["D"])(n),1),Object(r["j"])(d,{size:"2em",name:a?"filter_b_and_w":t},null,8,["name"])])]})),"top-right":Object(r["F"])((function(){return[Object(r["j"])(b,{color:"primary","icon-right":"archive",label:"Export to csv","no-caps":"",onClick:s.exportTable},null,8,["onClick"])]})),header:Object(r["F"])((function(e){return[Object(r["j"])(h,{props:e},{default:Object(r["F"])((function(){return[(Object(r["y"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(e.cols,(function(t){return Object(r["y"])(),Object(r["f"])(j,{key:t.name,props:e,class:"text-italic text-purple"},{default:Object(r["F"])((function(){return[Object(r["i"])(Object(r["D"])(t.label),1)]})),_:2},1032,["props"])})),128))]})),_:2},1032,["props"])]})),_:1},8,["filter","pagination","rows","columns"])])}var u=n("b85c"),s=(n("a15b"),n("ac1f"),n("1276"),n("caad"),n("2532"),n("fb6a"),n("99af"),n("d81d"),n("a434"),n("159b"),n("498a"),n("a357")),f=n("b3fe"),d=n("1da1"),p=(n("96cf"),n("bc3a")),b=n.n(p),j={getLog4jData:function(){return Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://raw.githubusercontent.com/cisagov/log4j-affected-db/develop/SOFTWARE-LIST.md");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()}},h={name:"LayoutDefault",components:{},data:function(){var e=this;return{pagination:Object(r["A"])({rowsPerPage:0}),filter:Object(r["A"])(""),q:Object(f["a"])(),log4jData:[],columns:[{name:"Vendor",label:"Vendor",field:"Vendor",sortable:!0},{name:"Product",label:"Product",field:"Product"},{name:"Affected_Version",label:"Affected Version",field:"Affected_Version"},{name:"Patched_Version",label:"Patched Version",field:"Patched_Version"},{name:"Status",label:"Status",field:"Status",sortable:!0},{name:"Vendor_link",label:"Vendor link",field:"Vendor_link",format:function(t){return e.formatLinks(t)}},{name:"Notes",label:"Notes",field:"Notes"},{name:"References",label:"References",field:"References"},{name:"Reporter",label:"Reporter",field:"Reporter",format:function(t){return e.formatLinks(t)}},{name:"Last Updated",label:"Last Updated",field:"Last Updated",sortable:!0}],fields:["Vendor","Product","Affected_Version","Patched_Version","Status","Vendor_link","Notes","References","Reporter","Last Updated"]}},methods:{wrapCsvValue:function(e,t){var n=void 0!==t?t(e):e;return n=void 0===n||null===n?"":String(n),n=n.split('"').join('""'),'"'.concat(n,'"')},printData:function(){console.log(this.log4jData)},formatLinks:function(e){return e&&e.includes("](")?e.split("](")[1].slice(0,-1):e},exportTable:function(){var e=this,t=[this.columns.map((function(t){return e.wrapCsvValue(t.label)}))].concat(this.log4jData.map((function(t){return e.columns.map((function(n){return e.wrapCsvValue("function"===typeof n.field?n.field(t):t[void 0===n.field?n.name:n.field],n.format)})).join(",")}))).join("\r\n"),n=Object(s["a"])("table-export.csv",t,"text/csv");!0!==n&&this.q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})},getLog4jData:function(){var e=this;j.getLog4jData().then((function(t){e.log4jData=e.parseData(t)})).catch((function(e){return console.log(e.message)}))},parseData:function(e){var t=this,n=[];if(e=e.split("| ------ | ------- | ----------------- | ---------------- | ------ | ------------ | ----- | ---------- | -------- | ------------ |")[1],!e)return console.log("Couldn't parse data from CISA readme. They probably changed the format again."),[];var r,a=e.split("\n").filter((function(e){return e})),o=Object(u["a"])(a);try{var c=function(){i=r.value;var e=i.split("|").splice(1,10);l={},t.fields.forEach((function(t,n){e[n]&&(l[t]=e[n].trim())})),n.push(l)};for(o.s();!(r=o.n()).done;){var i,l;c()}}catch(s){o.e(s)}finally{o.f()}return n}},created:function(){this.getLog4jData()}},m=(n("7cf5"),n("a819"),n("6b0d")),g=n.n(m),O=n("eaac"),v=n("db86"),y=n("27f9"),_=n("0016"),w=n("9c40"),V=n("bd08"),k=n("357e"),x=n("93dc"),D=n.n(x);const P=g()(h,[["render",l]]);var C=P;D()(h,"components",{QTable:O["a"],QTd:v["a"],QInput:y["a"],QIcon:_["a"],QBtn:w["a"],QTr:V["a"],QTh:k["a"]});var L=n("b05d"),S=(n("c867"),n("e54f"),n("05bc"),n("573e"),n("35fc"),{config:{},plugins:{}});Object(r["e"])(C).use(L["a"],S).mount("#app")},"7cf5":function(e,t,n){"use strict";n("898e")},"898e":function(e,t,n){},a819:function(e,t,n){"use strict";n("2e65")},c867:function(e,t,n){}});
//# sourceMappingURL=app.35aceb3f.js.map