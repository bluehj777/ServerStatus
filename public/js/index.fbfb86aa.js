(function(e){function t(t){for(var c,o,s=t[0],u=t[1],d=t[2],i=0,l=[];i<s.length;i++)o=s[i],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);b&&b(t);while(l.length)l.shift()();return n.push.apply(n,d||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],c=!0,s=1;s<r.length;s++){var u=r[s];0!==a[u]&&(c=!1)}c&&(n.splice(t--,1),e=o(o.s=r[0]))}return e}var c={},a={index:0},n=[];function o(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=c,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(r,c,function(t){return e[t]}.bind(null,c));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var b=u;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0397":function(e,t,r){"use strict";r("ef3f")},"0fc8":function(e,t,r){},"1b4c":function(e,t,r){},"23ca":function(e,t,r){},"27bb":function(e,t,r){},3347:function(e,t,r){"use strict";r("1b4c")},4562:function(e,t,r){"use strict";r("77a7")},"47b2":function(e,t,r){},"4a1f":function(e,t,r){"use strict";r("f02e")},"4fd3":function(e,t,r){"use strict";r("0fc8")},"77a7":function(e,t,r){},"8e66":function(e,t,r){"use strict";r("23ca")},a766:function(e,t,r){"use strict";r("ee76")},bf50:function(e,t,r){"use strict";r("27bb")},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var c=r("7a23");function a(e,t,r,a,n,o){var s=Object(c["n"])("the-header"),u=Object(c["n"])("on-error"),d=Object(c["n"])("servers-table"),b=Object(c["n"])("update-time"),i=Object(c["n"])("servers-card"),l=Object(c["n"])("the-footer");return Object(c["i"])(),Object(c["d"])(c["a"],null,[Object(c["f"])(s),Object(c["q"])(Object(c["f"])(u,null,null,512),[[c["p"],!e.servers]]),Object(c["f"])(d,{servers:e.servers},null,8,["servers"]),Object(c["f"])(b,{updated:e.updated},null,8,["updated"]),Object(c["f"])(i,{servers:e.servers},null,8,["servers"]),Object(c["f"])(l)],64)}r("a9e3");var n=r("cebe"),o=r.n(n),s=Object(c["r"])("data-v-5c2c2624");Object(c["k"])("data-v-5c2c2624");var u={class:"ui vertical masthead center aligned segment",id:"header"},d=Object(c["f"])("div",{id:"header-content"},[Object(c["f"])("h1",{class:"ui inverted header"}," Server Status "),Object(c["f"])("p",null,"Servers' Probes Set up with ServerStatus")],-1);Object(c["j"])();var b=s((function(e,t,r,a,n,o){return Object(c["i"])(),Object(c["d"])("div",u,[d])})),i=Object(c["g"])({name:"TheHeader"});r("a766");i.render=b,i.__scopeId="data-v-5c2c2624";var l=i,f=Object(c["r"])("data-v-43089d0b");Object(c["k"])("data-v-43089d0b");var j=Object(c["e"])(" 若長時間出現此消息，請確保您已啟用Javascript！"),v=Object(c["f"])("br",null,null,-1),O=Object(c["e"])("否則雲監控主服務（服務端）未啟動或已關閉。 ");Object(c["j"])();var p=f((function(e,t,r,a,n,o){return Object(c["i"])(),Object(c["d"])("p",null,[j,v,O])})),g=Object(c["g"])({name:"OnError"});r("4fd3");g.render=p,g.__scopeId="data-v-43089d0b";var h=g,m=Object(c["r"])("data-v-4438aba3");Object(c["k"])("data-v-4438aba3");var S={class:"ui container"},y={class:"ui basic unstackable table",id:"table"},w=Object(c["f"])("thead",null,[Object(c["f"])("tr",null,[Object(c["f"])("th",{id:"status4"},"运行状态"),Object(c["f"])("th",{id:"name"},"节点名"),Object(c["f"])("th",{id:"type"},"类型"),Object(c["f"])("th",{id:"location"},"服务器位置"),Object(c["f"])("th",{id:"uptime"},"在线时间"),Object(c["f"])("th",{id:"load"},"负载"),Object(c["f"])("th",{id:"network"},"网络(B/s) ↓|↑"),Object(c["f"])("th",{id:"traffic"},"流量(B) ↓|↑"),Object(c["f"])("th",{id:"cpu"},"CPU"),Object(c["f"])("th",{id:"ram"},"内存"),Object(c["f"])("th",{id:"hdd"},"硬盘")])],-1),_={id:"servers"};Object(c["j"])();var x=m((function(e,t,r,a,n,o){var s=Object(c["n"])("table-item");return Object(c["i"])(),Object(c["d"])("div",S,[Object(c["f"])("table",y,[w,Object(c["f"])("tbody",_,[(Object(c["i"])(!0),Object(c["d"])(c["a"],null,Object(c["m"])(e.servers,(function(e,t){return Object(c["i"])(),Object(c["d"])(s,{key:t,server:e},null,8,["server"])})),128))])])])})),B=(r("99af"),r("b0c0"),r("d3b7"),r("25f0"),Object(c["r"])("data-v-c08d56ea"));Object(c["k"])("data-v-c08d56ea");var C={class:"bar",style:{width:"100%"}},k={class:"expandRow"},R={colspan:"12"},M={id:"expand_mem"},T={id:"expand_swap"},I={id:"expand_hdd"};Object(c["j"])();var P=B((function(e,t,r,a,n,o){return Object(c["i"])(),Object(c["d"])(c["a"],null,[Object(c["f"])("tr",{class:"tableRow",onClick:t[1]||(t[1]=function(t){return e.collapsed=!e.collapsed})},[Object(c["f"])("td",null,[Object(c["f"])("div",{class:["ui progress",{success:e.getStatus,error:!e.getStatus}]},[Object(c["f"])("div",C,[Object(c["f"])("span",null,Object(c["o"])(e.getStatus?"运行中":"维护中"),1)])],2)]),Object(c["f"])("td",null,Object(c["o"])(e.server.name),1),Object(c["f"])("td",null,Object(c["o"])(e.server.type),1),Object(c["f"])("td",null,Object(c["o"])(e.server.location),1),Object(c["f"])("td",null,Object(c["o"])(e.server.uptime||"–"),1),Object(c["f"])("td",null,Object(c["o"])(e.getStatus?e.server.load:"-"),1),Object(c["f"])("td",null,Object(c["o"])(e.getStatus?"".concat(e.tableRowByteConvert(e.server.network_rx)," | ").concat(e.tableRowByteConvert(e.server.network_tx)):"–"),1),Object(c["f"])("td",null,Object(c["o"])(e.getStatus?"".concat(e.tableRowByteConvert(e.server.network_in)," | ").concat(e.tableRowByteConvert(e.server.network_out)):"–"),1),Object(c["f"])("td",null,[Object(c["f"])("div",{class:["ui progress",e.getProcessBarStatus(e.getCpuStatus)]},[Object(c["f"])("div",{class:"bar",style:{width:"".concat(e.getCpuStatus.toString(),"%")}},Object(c["o"])(e.getStatus?"".concat(e.getCpuStatus.toString(),"%"):"维护中"),5)],2)]),Object(c["f"])("td",null,[Object(c["f"])("div",{class:["ui progress",e.getProcessBarStatus(e.getRAMStatus)]},[Object(c["f"])("div",{class:"bar",style:{width:"".concat(e.getRAMStatus.toString(),"%")}},Object(c["o"])(e.getStatus?"".concat(e.getRAMStatus.toString(),"%"):"维护中"),5)],2)]),Object(c["f"])("td",null,[Object(c["f"])("div",{class:["ui progress",e.getProcessBarStatus(e.getHDDStatus)]},[Object(c["f"])("div",{class:"bar",style:{width:"".concat(e.getHDDStatus.toString(),"%")}},Object(c["o"])(e.getStatus?"".concat(e.getHDDStatus.toString(),"%"):"维护中"),5)],2)])]),Object(c["f"])("tr",k,[Object(c["f"])("td",R,[Object(c["f"])("div",{class:{collapsed:e.collapsed},style:{"max-height":e.getStatus?"":"0"}},[Object(c["f"])("div",M,"内存信息: "+Object(c["o"])(e.getStatus?"".concat(e.expandRowByteConvert(1024*e.server.memory_used)," / ").concat(e.expandRowByteConvert(1024*e.server.memory_total)):"–"),1),Object(c["f"])("div",T,"交换分区: "+Object(c["o"])(e.getStatus?"".concat(e.expandRowByteConvert(1024*e.server.swap_used)," / ").concat(e.expandRowByteConvert(1024*e.server.swap_total)):"–"),1),Object(c["f"])("div",I,"硬盘信息: "+Object(c["o"])(e.getStatus?"".concat(e.expandRowByteConvert(1024*e.server.hdd_used*1024)," / ").concat(e.expandRowByteConvert(1024*e.server.hdd_total*1024)):"–"),1)],6)])])],64)})),F=r("5530"),A=(r("b680"),function(e){var t=Object(c["b"])((function(){return e.server.online4||e.server.online6})),r=Object(c["b"])((function(){return void 0===e.server.cpu?100:e.server.cpu})),a=Object(c["b"])((function(){return void 0===e.server.memory_total?100:Math.round(e.server.memory_used/e.server.memory_total*100)})),n=Object(c["b"])((function(){return void 0===e.server.hdd_total?100:Math.round(e.server.hdd_used/e.server.hdd_total*100)})),o=Object(c["b"])((function(){return function(e){return e>90?"error":e>70?"warning":"success"}})),s=Object(c["b"])((function(){return function(e){return e<1024?e.toFixed(0)+"B":e<1048576?(e/1024).toFixed(0)+"K":e<1073741824?(e/1024/1024).toFixed(1)+"M":e<1099511627776?(e/1024/1024/1024).toFixed(2)+"G":(e/1024/1024/1024/1024).toFixed(2)+"T"}})),u=Object(c["b"])((function(){return function(e){return e<1024?e.toFixed(0)+" B":e<1048576?(e/1024).toFixed(2)+" KiB":e<1073741824?(e/1024/1024).toFixed(2)+" MiB":e<1099511627776?(e/1024/1024/1024).toFixed(2)+" GiB":(e/1024/1024/1024/1024).toFixed(2)+" TiB"}}));return{getStatus:t,getCpuStatus:r,getRAMStatus:a,getHDDStatus:n,getProcessBarStatus:o,tableRowByteConvert:s,expandRowByteConvert:u}}),D=Object(c["g"])({name:"TableItem",props:{server:{type:Object,default:{}}},setup:function(e){var t=Object(c["l"])(!0),r=A(e);return Object(F["a"])({collapsed:t},r)}});r("0397");D.render=P,D.__scopeId="data-v-c08d56ea";var H=D,J=Object(c["g"])({name:"ServersTable",props:{servers:{type:Array,default:[]}},components:{TableItem:H}});r("8e66");J.render=x,J.__scopeId="data-v-4438aba3";var K=J,N=Object(c["r"])("data-v-6d4857d5");Object(c["k"])("data-v-6d4857d5");var U={class:"ui container",id:"updated"};Object(c["j"])();var E=N((function(e,t,r,a,n,o){return Object(c["i"])(),Object(c["d"])("div",U,"最后更新: "+Object(c["o"])(e.timeSince),1)})),G=Object(c["g"])({name:"UpdateTime",props:{updated:Number},setup:function(e){var t=Object(c["b"])((function(){var t=Date.now()/1e3;if(!e.updated)return"从未.";var r=Math.floor(t-e.updated),c=Math.floor(r/31536e3);return c>1?c+" 年前.":(c=Math.floor(r/2592e3),c>1?c+" 月前.":(c=Math.floor(r/86400),c>1?c+" 日前.":(c=Math.floor(r/3600),c>1?c+" 小时前.":(c=Math.floor(r/60),c>1?c+" 分钟前.":"几秒前."))))}));return{timeSince:t}}});r("4a1f");G.render=E,G.__scopeId="data-v-6d4857d5";var q=G,z=Object(c["r"])("data-v-710067dd");Object(c["k"])("data-v-710067dd");var L={class:"ui container",id:"cards"},Q={class:"ui doubling three column grid"};Object(c["j"])();var V=z((function(e,t,r,a,n,o){var s=Object(c["n"])("CardItem");return Object(c["i"])(),Object(c["d"])("div",L,[Object(c["f"])("div",Q,[(Object(c["i"])(!0),Object(c["d"])(c["a"],null,Object(c["m"])(e.servers,(function(e,t){return Object(c["i"])(),Object(c["d"])(s,{key:t,server:e},null,8,["server"])})),128))])])})),W=Object(c["r"])("data-v-07a8b2b1");Object(c["k"])("data-v-07a8b2b1");var X={class:"column"},Y={class:"ui fluid card"},Z={class:"card-header"},$={class:"ui tiny progress success"},ee={class:"card-content"};Object(c["j"])();var te=W((function(e,t,r,a,n,o){return Object(c["i"])(),Object(c["d"])("div",X,[Object(c["f"])("div",Y,[Object(c["f"])("div",Z,[Object(c["f"])("img",{src:"img/clients/".concat(e.server.region,".png"),alt:"".concat(e.server.region)},null,8,["src","alt"]),Object(c["f"])("span",null,Object(c["o"])(e.server.name),1),Object(c["f"])("p",null,Object(c["o"])(e.server.type),1)]),Object(c["f"])("div",$,[Object(c["f"])("div",{class:"bar",style:{width:e.getStatus?"".concat(e.getRAMStatus.toString(),"%"):"0%"}},null,4)]),Object(c["f"])("div",ee,[Object(c["f"])("p",null,"Network: "+Object(c["o"])("".concat(e.tableRowByteConvert(e.server.network_rx)," | ").concat(e.tableRowByteConvert(e.server.network_tx))),1),Object(c["f"])("p",null,"负载状态: "+Object(c["o"])("undefined"!==typeof e.server.load?e.server.load:"Offline"),1)])])])})),re=Object(c["g"])({name:"CardItem",props:{server:{type:Object,default:{}}},setup:function(e){var t=A(e),r=t.getStatus,c=t.getRAMStatus,a=t.tableRowByteConvert;return{getStatus:r,getRAMStatus:c,tableRowByteConvert:a}}});r("fe59");re.render=te,re.__scopeId="data-v-07a8b2b1";var ce=re,ae=Object(c["g"])({name:"ServersCard",props:{servers:Array},components:{CardItem:ce}});r("bf50");ae.render=V,ae.__scopeId="data-v-710067dd";var ne=ae,oe=Object(c["r"])("data-v-677846ca");Object(c["k"])("data-v-677846ca");var se=Object(c["e"])("Powered by "),ue=Object(c["f"])("a",{href:"https://blog.ni-co.moe"},"Shira Kaguzaka",-1),de=Object(c["e"])(" Template from "),be=Object(c["f"])("a",{href:"https://github.com/CokeMine/Hotaru_theme"},"Hotaru",-1);Object(c["j"])();var ie=oe((function(e,t,r,a,n,o){return Object(c["i"])(),Object(c["d"])("p",null,[se,ue,de,be])})),le=Object(c["g"])({name:"TheFooter"});r("3347");le.render=ie,le.__scopeId="data-v-677846ca";var fe=le,je=Object(c["g"])({name:"App",components:{TheHeader:l,OnError:h,ServersTable:K,ServersCard:ne,TheFooter:fe,UpdateTime:q},setup:function(){var e=Object(c["l"])(),t=Object(c["l"])();return Object(c["h"])((function(){return setInterval((function(){o.a.get("api.php").then((function(r){e.value=r.data.servers,t.value=Number(r.data.updated)})).catch((function(e){return console.log(e)}))}),2e3)})),{servers:e,updated:t}}});r("4562");je.render=a;var ve=je;Object(c["c"])(ve).mount("#app")},cebe:function(e,t){e.exports=axios},ee76:function(e,t,r){},ef3f:function(e,t,r){},f02e:function(e,t,r){},fe59:function(e,t,r){"use strict";r("47b2")}});
//# sourceMappingURL=index.fbfb86aa.js.map