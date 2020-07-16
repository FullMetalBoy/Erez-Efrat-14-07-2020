(this["webpackJsonpherolo-shopping-list"]=this["webpackJsonpherolo-shopping-list"]||[]).push([[0],{231:function(e,t,a){e.exports=a(448)},448:function(e,t,a){"use strict";a.r(t);a(232);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),i=a(27),l=a(16),u=a(206),m=a(458),s=a(40),d=Object(s.a)(),p=a(45),E=a(459),v=a(457),f=a(462),h=a(460),b=a(207),y=a.n(b),D=(a(240),function(e){return function(t){var a=t.input,n=t.label,c=t.meta,o="field ".concat(c.error&&c.touched?"error":"");return r.a.createElement("div",{className:o},r.a.createElement("label",null,n),r.a.createElement(e,Object.assign({selected:a.value},a,{autoComplete:"off"})),function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t))}(c))}}),g=D("input"),R=D(y.a),I=Object(h.a)({form:"itemForm",validate:function(e){var t={};return e.name||(t.name="You must enter an item name"),e.store||(t.store="You must enter a store name"),e.price||(t.price="You must enter a price"),e.price&&isNaN(Number(e.price))&&(t.price="You must enter a valid price"),e.estDeliveryDate||(t.estDeliveryDate="You must select a date"),t}})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit((function(t){e.onSubmit(t),e.reset()})),className:"ui form error"},r.a.createElement(f.a,{name:"name",component:g,label:"Item Name"}),r.a.createElement(f.a,{name:"store",component:g,label:"Store Name"}),r.a.createElement(f.a,{name:"price",component:g,label:"Price (USD)"}),r.a.createElement(f.a,{name:"estDeliveryDate",component:R,label:"Est. Delivery Date",dateFormat:"DD-MM-YYYY"}),r.a.createElement("button",{className:"ui button primary"},"Submit"))})),O=a(140),S=a.n(O),w=a(209),x=a(210),j=a.n(x).a.create({baseURL:"https://api.exchangeratesapi.io"}),N=function(e){return{type:"ADD_ITEM",payload:e=Object(p.a)(Object(p.a)({},e),{},{price:parseFloat(e.price),estDeliveryDate:e.estDeliveryDate.toLocaleDateString()})}},T=function(e){return{type:"RECEIVE_ITEM",payload:e}},_=a(220),C=a(461),k=a(463),L=function(e){return r.a.createElement(k.a,{celled:!0},r.a.createElement(k.a.Header,null,r.a.createElement(k.a.Row,null,e.headers.map((function(e){return r.a.createElement(k.a.HeaderCell,{key:e},e)})))),r.a.createElement(k.a.Body,null,e.rows.map((function(t,a){var n=e.keys.map((function(e,a){return r.a.createElement(k.a.Cell,{key:a},t[e])}));return r.a.createElement(k.a.Row,{key:a},n)}))))};L.defaultProps={headers:[],keys:[],rows:[]};var F=L,Y=function(e){var t=e.itemsRows,a=e.aggregatedItemsRows,c=Object(n.useState)(0),o=Object(_.a)(c,2),i=o[0],l=o[1],u=[{menuItem:"Items",render:function(){return r.a.createElement(C.a.Pane,null,r.a.createElement(F,{headers:["Name","Store","Price (USD/ILS)","Est. Delivery Date","Received?"],keys:["name","store","price","estDeliveryDate","received"],rows:t}))}},{menuItem:"Stores",render:function(){return r.a.createElement(C.a.Pane,null,r.a.createElement(F,{headers:["Store","Sum of all Orders (USD/ILS)"],keys:["name","sum"],rows:a}))}}];return r.a.createElement(C.a,{panes:u,activeIndex:i,onTabChange:function(e,t){var a=t.activeIndex;return l(a)}})},M=function(e,t){var a=e.reduce((function(e,t){var a=e.find((function(e){return e.name===t.store}));return a||(a={name:t.store,sum:0},e.push(a)),a.sum+=t.price,e}),[]);return a.forEach((function(e){return e.sum="".concat(e.sum," / ").concat((e.sum*t).toFixed(2))})),a},U=Object(i.b)((function(e){return{items:e.items,exchangeRate:e.exchangeRate}}),{addItem:N,receiveItem:T})((function(e){var t=e.items,a=e.exchangeRate,n=e.addItem,c=e.receiveItem,o=t.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{price:"".concat(e.price," / ").concat((e.price*a).toFixed(2)),received:r.a.createElement(E.a,{onClick:function(){return c(e)}},"Received")})})),i=M(t,a);return r.a.createElement("div",null,r.a.createElement(Y,{itemsRows:o,aggregatedItemsRows:i}),r.a.createElement(I,{onSubmit:n}),r.a.createElement(v.a,null),r.a.createElement(E.a,{onClick:function(){return d.push("/Erez-Efrat-14-07-2020/received")}},"Go To Received"))})),P=Object(i.b)((function(e){return{receivedItems:e.receivedItems,exchangeRate:e.exchangeRate}}),{addItem:N,receiveItem:T})((function(e){var t=e.receivedItems,a=e.exchangeRate,n=t.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{price:"".concat(e.price," / ").concat((e.price*a).toFixed(2))})})),c=M(t,a);return r.a.createElement("div",null,r.a.createElement(Y,{itemsRows:n,aggregatedItemsRows:c}),r.a.createElement(v.a,null),r.a.createElement(E.a,{onClick:function(){return d.push("/Erez-Efrat-14-07-2020/List")}},"Go To List"))})),H=Object(i.b)((function(e){return{exchangeRate:e.exchangeRate}}),{fetchRate:function(){return function(){var e=Object(w.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new URLSearchParams).append("symbols","ILS"),a.append("base","USD"),e.prev=3,e.next=6,j.get("latest",a);case 6:n=e.sent,t({type:"FETCH_RATE",payload:n.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:"FETCH_ERROR",payload:"exchange service unavailable"});case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.fetchRate,a=e.exchangeRate,c=isNaN(a)?r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},"Exchange Service Unavailable")):"";return Object(n.useEffect)((function(){t();var e=setInterval((function(){t()}),1e4);return function(){clearInterval(e)}}),[]),r.a.createElement("div",{className:"ui container"},r.a.createElement(m.b,{history:d},r.a.createElement("div",null,c,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/Erez-Efrat-14-07-2020/list",component:U}),r.a.createElement(m.a,{path:"/Erez-Efrat-14-07-2020/received",component:P})))))})),z=a(464),A=a(99),V=[{name:"item 1",store:"amazon",price:20,estDeliveryDate:(new Date).toLocaleDateString()},{name:"item 2",store:"ebay",price:30,estDeliveryDate:(new Date).toLocaleDateString()},{name:"item 3",store:"ebay",price:40,estDeliveryDate:(new Date).toLocaleDateString()}],G=Object(l.c)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":return[].concat(Object(A.a)(e),[t.payload]);case"RECEIVE_ITEM":return e.filter((function(e){return e.name!=t.payload.name}));default:return e}},receivedItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_ITEM":return[].concat(Object(A.a)(e),[t.payload]);default:return e}},exchangeRate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_RATE":return t.payload.rates.ILS;case"FETCH_ERROR":return t.payload;default:return e}},form:z.a}),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,X=Object(l.e)(G,J(Object(l.a)(u.a)));o.a.render(r.a.createElement(i.a,{store:X},r.a.createElement(H,null)),document.querySelector("#root"))}},[[231,1,2]]]);
//# sourceMappingURL=main.dface30c.chunk.js.map