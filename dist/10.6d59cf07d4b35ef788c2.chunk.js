webpackJsonp([10],{518:function(t,s,a){"use strict";function i(t){r||a(575)}Object.defineProperty(s,"__esModule",{value:!0});var e=a(544),o=a(576),r=!1,n=a(184),c=i,l=n(e.a,o.a,!1,c,"data-v-7a799ef6",null);l.options.__file="src\\views\\detail.vue",s.default=l.exports},529:function(t,s,a){t.exports=a.p+"bdb93225bac32d22f1473e6b03c33b7f.png"},530:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB0CAYAAAC/ra0kAAABI0lEQVR4nO3RAQkAIBDAQLV/5zeFCOMuwWB7ZmaRdH4H8I65YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGmRtmbpi5YeaGXSYuBOT0ON7sAAAAAElFTkSuQmCC"},544:function(t,s,a){"use strict";var i=a(72),e=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t};s.a={data:function(){return{good:"",goods:"",selects:[],price:"",img:"",selectSucess:!0,order_attr:[]}},mounted:function(){this.details()},computed:e({},Object(i.b)(["user"])),methods:{tz:function(){this.$router.push({name:"shopcart"})},selectChange:function(){var t=this.selects,s=parseFloat(this.good.market_price);for(var a in t)if(t.hasOwnProperty(a)){var i=t[a],e=this.good.attrs;for(var o in e)if(e.hasOwnProperty(o)){var r=e[o];r.id==i&&(s+=parseFloat(r.attr_price))}}this.price=s;var n=this.good.products,c=!1;for(var l in n)if(n.hasOwnProperty(l)){var p=n[l];this.selects.sort().toString()==JSON.parse(p.goods_attr).sort().toString()&&(this.img=p.goods_attr_img,c=!0,this.selectSucess=!0)}c||(this.price=0,this.img="http://static.huijinjiu.com/135060426634397841.png",this.selectSucess=!1)},stockout:function(t){var s=this.good.products;for(var a in s)if(s.hasOwnProperty(a)){var i=s[a];if(0===i.goods_attr.indexOf(t))return!1}},details:function(){var t=this;this.ajax.get("/api/goods/"+t.$route.params.id).then(function(s){if(t.good=s.data.good,t.good.goods_type){var a=t.order_attr=t.good.goods_type.order_attr;for(var i in a)if(a.hasOwnProperty(i)){var e=a[i];t.selects.push(e.goods_attr[0].id)}}t.price=parseFloat(t.good.market_price),t.img=t.good.goods_img}).catch(function(t){404==t.status_code&&alert(t.message)})},addcart_m:function(){if(0==this.selectSucess)return this.$Message.error("请选择正确规格"),!1;var t=this,s={};this.good.attrs.length>0?(s.good_id=t.good.id,s.spe=this.selects):s.good_id=t.good.id,this.ajax.post("/api/cart/add",s).then(function(s){t.$Message.success("添加购物车成功")}).catch(function(t){422==t.status_code&&alert(error.message)})},logout_m:function(){this.$store.commit("logout")},buynow_m:function(){if(0==this.selectSucess)return this.$Message.error("请选择正确规格"),!1;var t=this,s={};this.good.attrs.length>0?(s.good_id=t.good.id,s.spe=this.selects):s.good_id=t.good.id,this.ajax.post("/api/BuyNowCart/cart",s).then(function(s){console.log(s.data.cart),t.goods=s.data.cart;var a=[];a.push(t.goods[0].rowId),t.$router.push({name:"submitorder",query:{rowId:a,type:"buynow"}})}).catch(function(t){422==t.status_code&&console.log(t.message)})}}}},575:function(t,s){},576:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"detail"},[i("div",{staticClass:"header"},[i("Row",[i("i-col",{attrs:{span:"1"}},[t._v("  \n\t\t\t\t")]),t._v(" "),i("i-col",{attrs:{span:"3"}},[i("img",{staticClass:"logo",attrs:{src:"http://static.huijinjiu.com/805351264090795932.png"}})]),t._v(" "),i("i-col",{attrs:{span:"2"}},[t._v(" ")]),t._v(" "),i("i-col",{attrs:{span:"15"}},[i("ul",[i("i-col",{attrs:{span:"5"}},[i("li",[i("a",{attrs:{href:""}},[t._v("商城首页")])])]),t._v(" "),i("i-col",{attrs:{span:"5"}},[i("li",[i("a",{attrs:{href:""}},[t._v("最新资讯")])])]),t._v(" "),i("i-col",{attrs:{span:"5"}},[i("li",[i("a",{attrs:{href:""}},[t._v("酒品分类")])])]),t._v(" "),i("i-col",{attrs:{span:"5"}},[i("li",[i("a",{attrs:{href:""}},[t._v("个人中心")])])]),t._v(" "),i("i-col",{attrs:{span:"4"}},[i("li",[i("a",{attrs:{href:""},on:{click:t.logout_m}},[t._v("退出")]),t._v("   \n\t\t\t\t\t\t\t\t"),i("a",{attrs:{href:""}},[t._v(t._s(t.user.userinfo.qq_user?t.user.userinfo.qq_user.nickname:t.user.userinfo.name))]),t._v(" "),i("a",{directives:[{name:"show",rawName:"v-show",value:t.user.userinfo.qq_user,expression:"user.userinfo.qq_user"}],attrs:{href:""}},[i("img",{attrs:{src:t.user.userinfo.qq_user?t.user.userinfo.qq_user.figureurl_qq_1:""}})])])])],1)]),t._v(" "),i("i-col",{staticStyle:{"font-size":"20px"},attrs:{span:"3"}},[i("a",{on:{click:t.tz}},[t._v("购物车")])])],1)],1),t._v(" "),i("div",{staticClass:"content"},[i("Row",[i("i-col",{attrs:{span:"8",offset:"1"}},[i("div",{staticClass:"s1"},[i("span",{staticStyle:{"font-size":"58px"}},[t._v("汇金")]),t._v(" "),i("span",{staticStyle:{"font-size":"42px"}},[t._v("原浆酒")]),t._v(" "),i("ul",[i("Row",[i("i-col",{attrs:{span:"6",offset:"4"}},[i("li",[t._v("芝香清冽")])]),t._v(" "),i("i-col",{attrs:{span:"6"}},[i("li",[t._v("醉时愉悦")])]),t._v(" "),i("i-col",{attrs:{span:"6"}},[i("li",[t._v("醒后喜悦")])])],1)],1),t._v(" "),i("ol",[i("i-col",{attrs:{span:"12"}},[t._v(" ")]),t._v(" "),i("i-col",{attrs:{span:"6"}},[i("li",[t._v("十年陈酿")])]),t._v(" "),i("i-col",{attrs:{span:"6"}},[i("li",[t._v("惊世绽放")])])],1),t._v(" "),i("Row",[i("i-col",{staticStyle:{"margin-top":"30px"},attrs:{span:"18"}},t._l(t.order_attr,function(s,a){return i("Row",{staticStyle:{"margin-top":"5px"}},[i("i-col",{staticStyle:{"text-align":"center","font-size":"15px","line-height":"45px"},attrs:{span:"4"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(s.attr_name)+"\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),i("i-col",{staticStyle:{"margin-top":"10px"},attrs:{span:"20"}},[i("RadioGroup",{attrs:{type:"button"},on:{input:function(s){t.selectChange()}},model:{value:t.selects[a],callback:function(s){t.$set(t.selects,a,s)},expression:"selects[index]"}},t._l(s.goods_attr,function(s,a){return i("Radio",{staticStyle:{"margin-left":"10px"},attrs:{size:"large",label:s.id,disabled:t.stockout(s.id)}},[t._v(t._s(s.attr_value))])}))],1)],1)})),t._v(" "),i("i-col",{attrs:{span:"6"}},[t._v(" ")])],1),t._v(" "),i("Row",[i("i-col",{attrs:{span:"12",offset:"1"}},[i("div",{staticClass:"money"},[t._v("\n\t\t\t\t\t\t\t\t\t¥\n\t\t\t\t\t\t\t\t\t"),i("span",{staticStyle:{"font-size":"28px"}},[t._v(t._s(t.price))])]),t._v(" "),i("i-col",{attrs:{span:"11"}},[t._v(" ")])],1)],1),t._v(" "),i("Row",[i("i-col",{attrs:{span:"6"}},[i("Button",{staticClass:"buy",on:{click:t.buynow_m}},[t._v("立即购买")])],1),t._v(" "),i("i-col",{attrs:{span:"6",offset:"5"}},[i("Button",{staticClass:"addcart",on:{click:t.addcart_m}},[t._v("加入购物车")])],1)],1)],1)]),t._v(" "),i("i-col",{attrs:{span:"14"}},[i("img",{staticClass:"img1",attrs:{src:t.img}})]),t._v(" "),i("i-col",{attrs:{span:"2"}},[t._v(" ")])],1)],1),t._v(" "),i("div",{staticClass:"center"}),t._v(" "),i("div",{staticClass:"footer"},[i("Row",[i("i-col",{attrs:{span:"6"}},[i("img",{attrs:{src:a(529)}})]),t._v(" "),i("i-col",{attrs:{span:"1"}},[i("ul",[i("li",[i("a",{attrs:{href:""}},[t._v("关于我们")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("联系我们")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("加入我们")])])])]),t._v(" "),i("i-col",{attrs:{span:"4",offset:"2"}},[i("p",{staticClass:"p1"},[t._v("注意未满十八岁,禁止购买!")])]),t._v(" "),i("i-col",{attrs:{span:"2",offset:"3"}},[i("div",{staticClass:"gz"},[t._v("\n\t\t\t\t\t\t关注公众号\n\t\t\t\t\t\t"),i("div",{staticClass:"we"},[t._v("\n\t\t\t\t\t\t\t加入我们\n\t\t\t\t\t\t")])])]),t._v(" "),i("i-col",{attrs:{span:"2",offset:"1"}},[i("img",{staticClass:"img3",attrs:{src:a(530)}})]),t._v(" "),i("i-col",{attrs:{span:"3"}},[t._v(" ")])],1)],1)])},e=[];i._withStripped=!0;var o={render:i,staticRenderFns:e};s.a=o}});