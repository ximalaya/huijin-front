webpackJsonp([18],{523:function(t,e,c){"use strict";function a(t){n||c(601)}Object.defineProperty(e,"__esModule",{value:!0});var i=c(558),l=c(602),n=!1,r=c(185),_=a,s=r(i.a,l.a,!1,_,"data-v-256ac3c2",null);s.options.__file="src\\views\\allorders.vue",e.default=s.exports},558:function(t,e,c){"use strict";e.a={data:function(){return{complete_d:!0,pay_d:!1,receipt_d:!1,orderlist:[],page:1,pageSize:10}},mounted:function(){this.orderlist_m()},methods:{changepage:function(t){this.page=t,this.orderlist_m()},orderlist_m:function(){var t=this;this.ajax.get("/api/order",{params:{page:t.page}}).then(function(e){console.log(e.data.orders),t.orderlist=e.data.orders}).catch(function(t){404==t.status_code&&alert(t.message)})},allorders:function(){this.complete_d=!0,this.pay_d=!1,this.receipt_d=!1},pay:function(){this.complete_d=!1,this.pay_d=!0,this.receipt_d=!1},receipt:function(){this.receipt_d=!0,this.complete_d=!1,this.pay_d=!1}}}},601:function(t,e){},602:function(t,e,c){"use strict";var a=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",[c("Row",[c("i-col",{staticClass:"content",attrs:{span:"22"}},[c("ul",[c("li",[c("a",{class:{select:t.complete_d},on:{click:t.allorders}},[t._v("全部订单")])]),t._v(" "),c("li",[c("a",{class:{select:t.pay_d},on:{click:t.pay}},[t._v("待付款")])]),t._v(" "),c("li",[c("a",{class:{select:t.receipt_d},on:{click:t.receipt}},[t._v("待收货")])])]),t._v(" "),c("table",{staticStyle:{width:"100%",padding:"16px","border-collapse":"collapse"}},[c("tr",{staticStyle:{height:"35px",color:"#a7a7a7",background:"#f5f5f5"}},[c("td",{staticStyle:{"padding-left":"20px"}},[t._v("时间")]),t._v(" "),c("td",[t._v("订单详情")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("收货人")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("金额")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("全部状态")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("操作")])]),t._v(" "),c("Br"),t._v(" "),t._l(t.orderlist.data,function(e){return c("tbody",{staticStyle:{width:"100%"}},[c("tr",{staticStyle:{height:"35px",color:"#7e7e7e",background:"#f5f5f5"}},[c("td",{staticStyle:{"padding-left":"20px"}},[t._v(t._s(e.updated_at))]),t._v(" "),c("td",{attrs:{colspan:"4"}},[t._v("订单号: "+t._s(e.order_sn))]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("删除")])]),t._v(" "),t._l(e.order_goods,function(a){return t.complete_d?c("tr",{staticStyle:{height:"95px"}},[c("td",[c("div",{staticStyle:{width:"60px",height:"60px","margin-left":"20px",float:"left",background:"#000"}}),t._v(" "),c("div",{staticStyle:{flaot:"left","margin-left":"90px"}},[c("span",[t._v(" "+t._s(a.goods_name))]),c("Br"),t._v(" "),c("span",[t._v("官方商品")])],1)]),t._v(" "),c("td",[t._v("\n                                        X"+t._s(a.goods_number)+"\n                                    ")]),t._v(" "),c("td",{staticStyle:{"border-left":"2px solid #cccccc","text-align":"center"}},[t._v("\n                                        "+t._s(e.consignee)),c("Br"),t._v("\n                                        ID: "+t._s(e.id)+"\n                                    ")],1),t._v(" "),c("td",{staticStyle:{"border-left":"2px solid #cccccc","text-align":"center"}},[t._v("\n                                        总额"),c("Br"),t._v("\n                                        ￥"+t._s(e.goods_amount)),c("Br"),t._v("\n                                        在线支付\n                                    ")],1),t._v(" "),c("td",{staticStyle:{"border-left":"2px solid #cccccc","text-align":"center"}},[t._v("\n                                        已完成"),c("Br"),t._v(" "),c("a",[t._v("订单详情")])],1),t._v(" "),c("td",{staticStyle:{"border-left":"2px solid #cccccc","text-align":"center"}},[c("a",[t._v("再次购买")]),c("Br"),t._v(" "),c("a",[t._v("回购")]),c("Br"),t._v(" "),c("a",[t._v("代售")])],1)]):t._e()})],2)}),t._v(" "),t.pay_d?c("tr",{staticStyle:{height:"95px"}},[c("td",[c("div",{staticStyle:{width:"60px",height:"60px","margin-left":"20px",float:"left",background:"#000"}}),t._v(" "),c("div",{staticStyle:{flaot:"left","margin-left":"90px"}},[c("span",[t._v(" 精装酒")]),c("Br"),t._v(" "),c("span",[t._v("官方商品")])],1)]),t._v(" "),c("td",[t._v("\n                                    X1\n                                ")]),t._v(" "),c("td",{staticStyle:{"border-left":"2px solid #cccccc","text-align":"center"}},[t._v("\n                                    gxy"),c("Br"),t._v("\n                                    ID: 410***123\n                                ")],1),t._v(" "),c("td",{staticStyle:{"border-left":"2px solid #cccccc","text-align":"center"}},[t._v("\n                                    总额"),c("Br"),t._v("\n                                    ￥10000.00"),c("Br"),t._v("\n                                    在线支付\n                                ")],1),t._v(" "),c("td",{staticStyle:{"border-left":"2px solid #cccccc","text-align":"center"}},[t._v("\n                                    代付款"),c("Br"),t._v(" "),c("a",[t._v("订单详情")])],1),t._v(" "),c("td",{staticStyle:{"border-left":"2px solid #cccccc","text-align":"center"}},[c("a",[t._v("立即付款")]),c("Br"),t._v(" "),c("a",[t._v("取消订单")]),c("Br"),t._v(" "),c("a",[t._v("联系客服")])],1)]):t._e(),t._v(" "),t.receipt_d?c("tr",{staticStyle:{height:"95px"}},[c("td",[c("div",{staticStyle:{width:"60px",height:"60px","margin-left":"20px",float:"left",background:"#000"}}),t._v(" "),c("div",{staticStyle:{flaot:"left","margin-left":"90px"}},[c("span",[t._v(" 精装酒")]),c("Br"),t._v(" "),c("span",[t._v("官方商品")])],1)]),t._v(" "),c("td",[t._v("\n                                    X1\n                                ")]),t._v(" "),c("td",{staticStyle:{"border-left":"2px solid #cccccc","text-align":"center"}},[t._v("\n                                    gxy"),c("Br"),t._v("\n                                    ID: 410***123\n                                ")],1),t._v(" "),c("td",{staticStyle:{"border-left":"2px solid #cccccc","text-align":"center"}},[t._v("\n                                    总额"),c("Br"),t._v("\n                                    ￥10000.00"),c("Br"),t._v("\n                                    在线支付\n                                ")],1),t._v(" "),c("td",{staticStyle:{"border-left":"2px solid #cccccc","text-align":"center"}},[t._v("\n                                    待收货"),c("Br"),t._v(" "),c("a",[t._v("订单详情")])],1),t._v(" "),c("td",{staticStyle:{"border-left":"2px solid #cccccc","text-align":"center"}},[c("a",[t._v("确认收货")]),c("Br"),t._v(" "),c("a",[t._v("联系客服")])],1)]):t._e()],2),t._v(" "),c("Page",{staticClass:"paging",attrs:{total:t.orderlist.total,"page-size":t.pageSize,"show-total":""},on:{"on-change":t.changepage}})],1)],1)],1)])},i=[];a._withStripped=!0;var l={render:a,staticRenderFns:i};e.a=l}});