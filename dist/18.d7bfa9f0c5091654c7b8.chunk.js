webpackJsonp([18],{526:function(t,e,i){"use strict";function n(t){o||i(621)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(571),c=i(622),o=!1,s=i(185),r=n,l=s(a.a,c.a,!1,r,"data-v-26058d31",null);l.options.__file="src\\views\\resalePublish.vue",e.default=l.exports},571:function(t,e,i){"use strict";e.a={data:function(){return{imgName:"",visible:!1,uploadList:[],account_d:!1,unique:"",formdata:{sale_user_phone:"",price:"",introduction:""},creditedAccount:{real_name:"",deposit_bank:"",account_number:"",phone:"",notice:""},accountList:"",selectAccount:""}},mounted:function(){this.uploadList=this.$refs.upload.fileList,this.getUnique(),this.getAccount()},methods:{getUnique:function(){var t=this;this.ajax.get("/api/unique/"+t.$route.params.unique_good_id).then(function(e){t.unique=e.data.unique_good,console.log(t.unique)}).catch(function(t){404==t.status_code&&alert(t.message)})},getAccount:function(){var t=this;this.ajax.get("/api/ownerCreditedAccount").then(function(e){console.log(e.data),t.accountList=e.data.account}).catch(function(t){422==t.status_code&&alert(t.message)})},createCreditedAccount:function(){var t=this;this.ajax.post("/api/UserCreditedAccount",t.creditedAccount).then(function(t){console.log(t.data)}).catch(function(t){422==t.status_code&&alert(t.message)})},addAccount_m:function(){this.account_d=!0},handleView:function(t){this.imgName=t,this.visible=!0},handleRemove:function(t){var e=this.$refs.upload.fileList;this.$refs.upload.fileList.splice(e.indexOf(t),1)},handleSuccess:function(t,e){e.url="https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar",e.name="7eb99afb9d5f317c912f08b5212fd69a"},handleFormatError:function(t){this.$Notice.warning({title:"The file format is incorrect",desc:"File format of "+t.name+" is incorrect, please select jpg or png."})},handleMaxSize:function(t){this.$Notice.warning({title:"Exceeding file size limit",desc:"File  "+t.name+" is too large, no more than 2M."})},handleBeforeUpload:function(){var t=this.uploadList.length<5;return t||this.$Notice.warning({title:"Up to five pictures can be uploaded."}),t}}}},621:function(t,e){},622:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"layout"},[i("Layout",[i("Row",[i("i-col",{staticClass:"content",attrs:{span:"22"}},[i("div",{staticStyle:{"font-size":"16px","font-weight":"bold",border:"1px solid #b4b2b3",height:"34px","line-height":"34px","text-indent":"1em"}},[t._v("\n          转售商品信息\n        ")]),t._v(" "),i("div",{staticStyle:{width:"600px","margin-left":"150px","margin-top":"20px","line-height":"40px"}},[i("Card",{directives:[{name:"show",rawName:"v-show",value:t.account_d,expression:"account_d"}],staticStyle:{width:"950px","margin-left":"auto","margin-right":"auto","padding-left":"55px","padding-top":"55px",position:"fixed","z-index":"999"}},[i("table",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("真实姓名")]),t._v(" "),i("td",[i("Input",{staticStyle:{width:"300px"},attrs:{type:"text",placeholder:"请输入真实姓名"},model:{value:t.creditedAccount.real_name,callback:function(e){t.$set(t.creditedAccount,"real_name",e)},expression:"creditedAccount.real_name"}})],1)]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("开户银行/支付宝")]),t._v(" "),i("td",[i("Input",{staticStyle:{width:"300px"},attrs:{type:"text",placeholder:"选择您要收款的银行名称"},model:{value:t.creditedAccount.deposit_bank,callback:function(e){t.$set(t.creditedAccount,"deposit_bank",e)},expression:"creditedAccount.deposit_bank"}})],1)]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("银行账号/支付宝账号")]),t._v(" "),i("td",[i("Input",{staticStyle:{width:"300px"},attrs:{type:"text",placeholder:"请输入您的账户号码"},model:{value:t.creditedAccount.account_number,callback:function(e){t.$set(t.creditedAccount,"account_number",e)},expression:"creditedAccount.account_number"}})],1)]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("手机号")]),t._v(" "),i("td",[i("Input",{staticStyle:{width:"300px"},attrs:{type:"text",placeholder:"请输入手机号"},model:{value:t.creditedAccount.phone,callback:function(e){t.$set(t.creditedAccount,"phone",e)},expression:"creditedAccount.phone"}})],1)]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("会员备注")]),t._v(" "),i("td",[i("Input",{staticStyle:{width:"300px"},attrs:{type:"textarea",rows:5},model:{value:t.creditedAccount.notice,callback:function(e){t.$set(t.creditedAccount,"notice",e)},expression:"creditedAccount.notice"}})],1)])]),t._v(" "),i("Button",{staticStyle:{width:"124px",background:"#fd706e",border:"1px solid fe4947",color:"white"},on:{click:t.createCreditedAccount}},[t._v("确认添加")]),t._v(" "),i("Button",{staticStyle:{width:"124px",background:"#fd706e",border:"1px solid fe4947",color:"white"}},[t._v("重置修改")])],1),t._v("\n          商品名称: "+t._s(t.unique.goods_name)+"\n\n          "),i("Br"),t._v(" 生产日期:    2013年1月1日\n          "),i("Br"),t._v(" 产品规格:    500ml 产品浓度:    50°\n          "),i("Br"),t._v(" 产品类型:    收藏版 原酒 产品年限:    10年\n          "),i("Br"),t._v(" 商品描述:    \n          "),i("Input",{staticStyle:{width:"300px"},attrs:{type:"textarea"},model:{value:t.formdata.introduction,callback:function(e){t.$set(t.formdata,"introduction",e)},expression:"formdata.introduction"}}),t._v(" "),i("Br"),t._v(" 收款方式:   \n          "),i("Select",{staticStyle:{width:"150px"},model:{value:t.selectAccount,callback:function(e){t.selectAccount=e},expression:"selectAccount"}},t._l(t.accountList,function(e){return i("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.deposit_bank+e.account_number))])})),t._v(" "),i("Button",{staticStyle:{background:"red",color:"white",width:"120px","margin-left":"25px"},on:{click:t.addAccount_m}},[t._v("添加账户")]),t._v("\n          服务说明\n          "),i("a",[t._v("查看说明>>")]),t._v(" "),i("Br"),t._v(" 商品价格:    \n          "),i("Input",{staticStyle:{width:"300px"},attrs:{type:"text"},model:{value:t.formdata.price,callback:function(e){t.$set(t.formdata,"price",e)},expression:"formdata.price"}}),t._v(" "),i("Br"),t._v(" 商品图片:    \n          "),i("Input",{staticStyle:{width:"300px","letter-spacing":"2px"},attrs:{type:"text",placeholder:"请上传商品的亮点图片,吸引买家更快下单."}}),t._v(" "),i("Br"),t._v(" "),t._l(t.uploadList,function(e){return i("div",{staticClass:"demo-upload-list"},["finished"===e.status?[i("img",{attrs:{src:e.url}}),t._v(" "),i("div",{staticClass:"demo-upload-list-cover"},[i("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(i){t.handleView(e.name)}}}),t._v(" "),i("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(i){t.handleRemove(e)}}})],1)]:[e.showProgress?i("Progress",{attrs:{percent:e.percentage,"hide-info":""}}):t._e()]],2)}),t._v(" "),i("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"200px",height:"100px","margin-left":"84px"},attrs:{"show-upload-list":!1,"on-success":t.handleSuccess,format:["jpg","jpeg","png"],"max-size":2048,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"before-upload":t.handleBeforeUpload,multiple:"",type:"drag",action:"//jsonplaceholder.typicode.com/posts/"}},[i("div",{staticStyle:{width:"200px",height:"100px","line-height":"100px"}},[i("Icon",{attrs:{type:"camera",size:"30"}})],1)]),t._v(" "),i("Modal",{attrs:{title:"View Image"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible?i("img",{staticStyle:{width:"100%"},attrs:{src:"https://o5wwk8baw.qnssl.com/"+t.imgName+"/large"}}):t._e()])],2),t._v(" "),i("div",{staticStyle:{"margin-top":"30px","font-size":"16px","font-weight":"bold",border:"1px solid #b4b2b3",height:"34px","line-height":"34px","text-indent":"1em"}},[t._v("\n          卖家联系方式\n        ")]),t._v(" "),i("div",{staticStyle:{"margin-left":"150px","margin-top":"10px"}},[t._v("\n          卖家手机号:    \n          "),i("Input",{staticStyle:{width:"300px"},attrs:{type:"text",placeholder:""},model:{value:t.formdata.sale_user_phone,callback:function(e){t.$set(t.formdata,"sale_user_phone",e)},expression:"formdata.sale_user_phone"}}),t._v(" "),i("Br")],1),t._v(" "),i("Button",{staticStyle:{"margin-top":"10px","margin-left":"252px",width:"120px",background:"#ff2d24",color:"white"}},[t._v("发布")])],1)],1)],1)],1)},a=[];n._withStripped=!0;var c={render:n,staticRenderFns:a};e.a=c}});