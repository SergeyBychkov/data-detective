!function(){"use strict";var e,c,f,a,b,t={},d={};function n(e){var c=d[e];if(void 0!==c)return c.exports;var f=d[e]={id:e,loaded:!1,exports:{}};return t[e].call(f.exports,f,f.exports,n),f.loaded=!0,f.exports}n.m=t,n.c=d,e=[],n.O=function(c,f,a,b){if(!f){var t=1/0;for(u=0;u<e.length;u++){f=e[u][0],a=e[u][1],b=e[u][2];for(var d=!0,r=0;r<f.length;r++)(!1&b||t>=b)&&Object.keys(n.O).every((function(e){return n.O[e](f[r])}))?f.splice(r--,1):(d=!1,b<t&&(t=b));if(d){e.splice(u--,1);var o=a();void 0!==o&&(c=o)}}return c}b=b||0;for(var u=e.length;u>0&&e[u-1][2]>b;u--)e[u]=e[u-1];e[u]=[f,a,b]},n.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(c,{a:c}),c},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var b=Object.create(null);n.r(b);var t={};c=c||[null,f({}),f([]),f(f)];for(var d=2&a&&e;"object"==typeof d&&!~c.indexOf(d);d=f(d))Object.getOwnPropertyNames(d).forEach((function(c){t[c]=function(){return e[c]}}));return t.default=function(){return e},n.d(b,t),b},n.d=function(e,c){for(var f in c)n.o(c,f)&&!n.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:c[f]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(c,f){return n.f[f](e,c),c}),[]))},n.u=function(e){return"assets/js/"+({53:"935f2afb",77:"f8e1c034",304:"9b567688",341:"68d559e9",365:"04994dd7",453:"30a24c52",533:"b2b675dd",678:"51917f2b",696:"92245099",889:"3ed87ff7",948:"8717b14a",1083:"9f520be2",1342:"f3451fe5",1370:"cb27bb76",1418:"db589b3c",1421:"0c08ae2c",1477:"b2f554cd",1587:"1ab0be69",1633:"031793e1",1713:"a7023ddc",1914:"d9f32620",1976:"b647b723",2114:"448c5b7d",2217:"1ecb7b9e",2267:"59362658",2362:"e273c56f",2446:"1696fafc",2535:"814f3328",2752:"eeb7ce5e",2867:"772176c5",2914:"f2f02b05",3016:"476abd87",3085:"1f391b9e",3089:"a6aa9e1f",3205:"a80da1cf",3265:"c06b3fbf",3299:"c6c65275",3514:"73664a40",3520:"b0ab1070",3563:"1bd29514",3608:"9e4087bc",3718:"8a24f3cd",3992:"e28b30e2",4013:"01a85c17",4195:"c4f5d8e4",4447:"82c6f786",4461:"12b098a4",4758:"bdcf14e1",4764:"2d41c356",5350:"d6d0447d",5793:"506abf39",5834:"dbcbcb8e",5923:"cdae5aa7",6073:"7722217f",6103:"ccc49370",6107:"ab76b7ee",6526:"9ddf974c",6975:"131c70a1",7192:"a3326843",7245:"f9240702",7305:"ebfee794",7394:"999e5ba8",7414:"393be207",7491:"1b6b8e9a",7501:"3228d4af",7798:"4bf2d058",7879:"fcdfc8aa",7918:"17896441",8010:"278582e9",8211:"ec789025",8375:"5e361640",8450:"f21bad89",8598:"040449fe",8610:"6875c492",8636:"f4f34a3a",8780:"803646d3",8807:"ab8d38c6",8914:"b67b5567",9003:"925b3f96",9120:"ce754f31",9170:"b1ef6c7c",9199:"5fb5304d",9310:"64fe763a",9331:"ffeae624",9386:"347c9ef9",9388:"d47ef993",9514:"1be78505",9642:"7661071f",9700:"e16015ca",9885:"c2b4e041",9970:"9005de10"}[e]||e)+"."+{53:"20298b5e",77:"2461fe01",304:"f6294f7b",341:"66e1f814",365:"62000745",453:"5c5b9608",533:"d1f68f1a",678:"c23b947e",696:"206e77d1",889:"bee77a75",948:"babdd544",1083:"dc9c59f9",1342:"547365bd",1370:"246f8627",1418:"8027ff0d",1421:"0d056ed6",1477:"1585fc01",1587:"c1d805ef",1633:"e352f5e3",1713:"3b454086",1914:"8f5b83aa",1976:"664d3c10",2114:"ad12fa1d",2217:"e5a24308",2267:"49dde7fd",2362:"b23040e2",2446:"947e712d",2535:"c913f027",2572:"be066766",2752:"b9b5feb0",2867:"6903c9f3",2914:"22a4cdd2",3016:"fa7363c4",3085:"1d9a1f6b",3089:"39c9d699",3205:"3282b326",3265:"1b52b5f9",3299:"e198457d",3514:"54f3b71a",3520:"f681fb5b",3563:"40068d5c",3608:"9d9f8947",3718:"082dfa48",3938:"c349e334",3992:"d070edcc",4013:"9444e3f5",4195:"575f0ecb",4447:"a7b82254",4461:"b5c99777",4608:"3b8a9261",4758:"49607781",4764:"dcd7d5c5",5350:"37e66f0a",5684:"4c7d1162",5793:"973aa667",5834:"023a3ab9",5923:"609e1d33",6073:"003bcc00",6103:"ed95cfaf",6107:"6d060da5",6159:"9a9ef9a7",6526:"3124bc08",6975:"a3bfae3f",7192:"e17d0aed",7245:"27d54014",7305:"3f7540ef",7394:"4ef97431",7414:"860c8c5e",7491:"156698f1",7501:"0d460597",7566:"4d7dae17",7798:"0c54ec1e",7879:"59c59bad",7918:"2c3f5951",8010:"1a53f3f2",8211:"aa5bb201",8375:"1a6b8aed",8450:"6f8cf59d",8598:"b98f5eb4",8610:"10eff4fc",8636:"7b99a703",8780:"c6d38096",8807:"e671cb8d",8914:"c6bf2149",9003:"351a9d1b",9120:"f1aa0771",9170:"190d3fcb",9199:"5c2e41cb",9310:"a3e812b8",9331:"26c57bbc",9386:"f7716d11",9388:"f9bf35b9",9514:"0cd04f05",9642:"326faa19",9700:"2e831f9b",9727:"45367918",9885:"c7f8d988",9970:"5c5c29cb"}[e]+".js"},n.miniCssF=function(e){return"assets/css/styles.93f58ce6.css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},a={},b="data-detective-docusaurus:",n.l=function(e,c,f,t){if(a[e])a[e].push(c);else{var d,r;if(void 0!==f)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==b+f){d=i;break}}d||(r=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,n.nc&&d.setAttribute("nonce",n.nc),d.setAttribute("data-webpack",b+f),d.src=e),a[e]=[c];var s=function(c,f){d.onerror=d.onload=null,clearTimeout(l);var b=a[e];if(delete a[e],d.parentNode&&d.parentNode.removeChild(d),b&&b.forEach((function(e){return e(f)})),c)return c(f)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=s.bind(null,d.onerror),d.onload=s.bind(null,d.onload),r&&document.head.appendChild(d)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.gca=function(e){return e={17896441:"7918",59362658:"2267",92245099:"696","935f2afb":"53",f8e1c034:"77","9b567688":"304","68d559e9":"341","04994dd7":"365","30a24c52":"453",b2b675dd:"533","51917f2b":"678","3ed87ff7":"889","8717b14a":"948","9f520be2":"1083",f3451fe5:"1342",cb27bb76:"1370",db589b3c:"1418","0c08ae2c":"1421",b2f554cd:"1477","1ab0be69":"1587","031793e1":"1633",a7023ddc:"1713",d9f32620:"1914",b647b723:"1976","448c5b7d":"2114","1ecb7b9e":"2217",e273c56f:"2362","1696fafc":"2446","814f3328":"2535",eeb7ce5e:"2752","772176c5":"2867",f2f02b05:"2914","476abd87":"3016","1f391b9e":"3085",a6aa9e1f:"3089",a80da1cf:"3205",c06b3fbf:"3265",c6c65275:"3299","73664a40":"3514",b0ab1070:"3520","1bd29514":"3563","9e4087bc":"3608","8a24f3cd":"3718",e28b30e2:"3992","01a85c17":"4013",c4f5d8e4:"4195","82c6f786":"4447","12b098a4":"4461",bdcf14e1:"4758","2d41c356":"4764",d6d0447d:"5350","506abf39":"5793",dbcbcb8e:"5834",cdae5aa7:"5923","7722217f":"6073",ccc49370:"6103",ab76b7ee:"6107","9ddf974c":"6526","131c70a1":"6975",a3326843:"7192",f9240702:"7245",ebfee794:"7305","999e5ba8":"7394","393be207":"7414","1b6b8e9a":"7491","3228d4af":"7501","4bf2d058":"7798",fcdfc8aa:"7879","278582e9":"8010",ec789025:"8211","5e361640":"8375",f21bad89:"8450","040449fe":"8598","6875c492":"8610",f4f34a3a:"8636","803646d3":"8780",ab8d38c6:"8807",b67b5567:"8914","925b3f96":"9003",ce754f31:"9120",b1ef6c7c:"9170","5fb5304d":"9199","64fe763a":"9310",ffeae624:"9331","347c9ef9":"9386",d47ef993:"9388","1be78505":"9514","7661071f":"9642",e16015ca:"9700",c2b4e041:"9885","9005de10":"9970"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(c,f){var a=n.o(e,c)?e[c]:void 0;if(0!==a)if(a)f.push(a[2]);else if(/^(1303|532)$/.test(c))e[c]=0;else{var b=new Promise((function(f,b){a=e[c]=[f,b]}));f.push(a[2]=b);var t=n.p+n.u(c),d=new Error;n.l(t,(function(f){if(n.o(e,c)&&(0!==(a=e[c])&&(e[c]=void 0),a)){var b=f&&("load"===f.type?"missing":f.type),t=f&&f.target&&f.target.src;d.message="Loading chunk "+c+" failed.\n("+b+": "+t+")",d.name="ChunkLoadError",d.type=b,d.request=t,a[1](d)}}),"chunk-"+c,c)}},n.O.j=function(c){return 0===e[c]};var c=function(c,f){var a,b,t=f[0],d=f[1],r=f[2],o=0;if(t.some((function(c){return 0!==e[c]}))){for(a in d)n.o(d,a)&&(n.m[a]=d[a]);if(r)var u=r(n)}for(c&&c(f);o<t.length;o++)b=t[o],n.o(e,b)&&e[b]&&e[b][0](),e[t[o]]=0;return n.O(u)},f=self.webpackChunkdata_detective_docusaurus=self.webpackChunkdata_detective_docusaurus||[];f.forEach(c.bind(null,0)),f.push=c.bind(null,f.push.bind(f))}()}();