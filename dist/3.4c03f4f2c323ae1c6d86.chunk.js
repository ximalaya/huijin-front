webpackJsonp([3],{514:function(t,e,a){"use strict";function s(t){n||a(574)}Object.defineProperty(e,"__esModule",{value:!0});var r=a(544),o=a(575),n=!1,i=a(185),c=s,p=i(r.a,o.a,!1,c,"data-v-9cf963ea",null);p.options.__file="src\\views\\companyReg.vue",e.default=p.exports},544:function(t,e,a){"use strict";var s=a(43);a.n(s);e.a={data:function(){return{time_d:60,phone_login_d:!0,checked_d:!1,sended_d:!1,resArr:[],formValidate:{account_d:"",password_d:""},ruleValidate:{account_d:[{required:!0,message:" 账号不能为空",trigger:"blur"},{type:"string",min:8,message:"账号长度不少于8个字符",trigger:"blur"}],password_d:[{required:!0,message:" 密码不能为空",trigger:"blur"},{type:"string",min:8,message:"密码长度不少于8个字符",trigger:"blur"}]},phoneFormValidate:{phone_d:"",code_d:""},phoneRuleValidate:{phone_d:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{type:"string",len:11,message:"请输入11位手机号",trigger:"blur"}],code_d:[{required:!0,message:" 验证码不能为空",trigger:"blur"},{type:"string",len:4,message:"请输入四位验证码",trigger:"blur"}]}}},mounted:function(){var t=document.createElement("script");t.type="text/javascript",t.src="//captcha.luosimao.com/static/dist/api.js",t.onload=onload,document.body.appendChild(t),window.getCaptchaResponse=this.getCaptchaResponse},methods:{phone_login_m:function(t){var e=this,a=this;this.$refs[t].validate(function(t){t?(e.$Message.success("登陆成功"),a.ajax.post("/api/login",{phone:a.phoneFormValidate.phone_d,code:a.phoneFormValidate.code_d}).then(function(t){a.$store.commit("login",t.data),a.$route.query.redirect?a.$router.push({path:a.$route.query.redirect}):a.$router.push({name:"home"})}).catch(function(t){403==t.status_code&&(a.$Message.error(t.message),LUOCAPTCHA.reset())})):e.$Message.error("登录失败")})},phone_reset_m:function(t){this.$refs[t].resetFields()},getCaptchaResponse:function(t){var e=this;this.ajax.post("/api/checkcaptcha",{captcha:t}).then(function(t){e.checked_d=!0}).catch(function(t){400==t.status_code&&(alert(t.message),LUOCAPTCHA.reset())})},send_code_m:function(){var t=this;this.ajax.post("/api/sendcode",{phone:t.phoneFormValidate.phone_d}).then(function(e){t.Interval(),t.sended_d=!0}).catch(function(t){400==t.status_code&&alert(t.message)})},Interval:function(){var t=this,e=function(){0==--t.time_d&&(clearInterval(a),t.time_d=60,t.checked_d=!1,t.sended_d=!1,LUOCAPTCHA.reset())},a=setInterval(e,1e3)},account_login_m:function(t){var e=this;this.$refs[t].validate(function(t){t?e.$Message.success("登陆成功"):e.$Message.error("登录失败")})}}}},545:function(t,e,a){t.exports=a.p+"4318fb99ec5ca71fae0d726d8c781caa.png"},574:function(t,e){},575:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Layout",{staticClass:"layout"},[s("Header",{staticClass:"header"},[s("Row",[s("i-col",{attrs:{span:"3",offset:"1"}},[s("img",{staticClass:"logo",attrs:{src:"http://static.huijinjiu.com/LOGO.png"}})]),t._v(" "),s("i-col",{staticStyle:{"font-size":"23px","margin-top":"30px"},attrs:{span:"3",offset:"1"}},[t._v(" 欢迎登录\n        ")]),t._v(" "),s("i-col",{staticStyle:{"font-size":"16px","margin-top":"60px"},attrs:{span:"2",offset:"14"}},[t._v("\n            已有帐号?  "),s("a",{staticStyle:{color:"red"}},[t._v("请登录")])])],1)],1),t._v(" "),s("div",{staticClass:"content"},[s("div",[s("Card",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticStyle:{"margin-top":"76px",width:"430px","margin-left":"auto","margin-right":"auto"}},[s("img",{attrs:{src:a(576)}}),t._v(" "),s("div",[s("Form",{ref:"phoneFormValidate",attrs:{model:t.phoneFormValidate,rules:t.phoneRuleValidate}},[s("FormItem",{attrs:{prop:"phone_d"}},[s("Input",{staticClass:"phone",attrs:{type:"text",placeholder:"请输入常用手机号",clearable:"",size:"large"},model:{value:t.phoneFormValidate.phone_d,callback:function(e){t.$set(t.phoneFormValidate,"phone_d",e)},expression:"phoneFormValidate.phone_d"}},[s("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v(" 中国+86 ")])])],1),t._v(" "),s("Row",{directives:[{name:"show",rawName:"v-show",value:11==t.phoneFormValidate.phone_d.length,expression:"phoneFormValidate.phone_d.length==11"}],staticStyle:{margin:"0 4%","margin-bottom":"18px"}},[s("div",{staticClass:"l-captcha",attrs:{"data-site-key":"a61ebded8b92ba71b5272a5f60fc1be7","data-callback":"getCaptchaResponse"}})]),t._v(" "),s("FormItem",{attrs:{prop:"code_d"}},[s("Input",{attrs:{type:"text",placeholder:"请输入短信验证码",clearable:"",size:"large"},model:{value:t.phoneFormValidate.code_d,callback:function(e){t.$set(t.phoneFormValidate,"code_d",e)},expression:"phoneFormValidate.code_d"}},[s("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("手机验证码")]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.checked_d,expression:"!checked_d"}],staticStyle:{cursor:"pointer"},attrs:{slot:"append"},on:{click:t.send_code_m},slot:"append"},[t._v("请先进行人机验证")]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.checked_d&&!t.sended_d,expression:"checked_d&&!sended_d"}],staticStyle:{cursor:"pointer"},attrs:{slot:"append"},on:{click:t.send_code_m},slot:"append"},[t._v("发送验证码")]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.sended_d,expression:"sended_d"}],staticStyle:{cursor:"pointer"},attrs:{slot:"append"},slot:"append"},[t._v(t._s(t.time_d)+"s后重新获取")])])],1),t._v(" "),s("FormItem",[s("Checkbox",[t._v("\n                      我已阅读并同意"),s("a",[t._v(" <<喜马拉雅用户注册协议和隐私条款>> ")])]),t._v(" "),s("Button",{staticClass:"login",on:{click:function(e){t.phone_login_m("phoneFormValidate")}}},[t._v("\n                      下一步\n                  ")]),t._v(" "),s("div",{staticStyle:{"margin-top":"15px"}},[s("a",[s("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:a(545)}}),t._v(" "),s("span",{staticStyle:{color:"black"}},[t._v("个人用户注册")])])])],1)],1)],1)]),t._v(" "),s("Card",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticStyle:{"margin-top":"76px",width:"430px","margin-left":"auto","margin-right":"auto"}},[s("img",{attrs:{src:a(577)}}),t._v(" "),s("Form",[s("FormItem",{staticStyle:{"margin-top":"20px"}},[s("Input",{attrs:{type:"text",placeholder:"设置数字与字母的密码"}},[s("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("设置密码")])])],1),t._v(" "),s("FormItem",[s("Input",{attrs:{type:"text",placeholder:"再次输入密码"}},[s("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("确认密码")])])],1),t._v(" "),s("FormItem",[s("Button",{staticClass:"login"},[t._v("立即注册")])],1)],1),t._v(" "),s("div",{staticStyle:{"margin-top":"15px"}},[s("a",[s("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:a(545)}}),t._v(" "),s("span",{staticStyle:{color:"black"}},[t._v("个人用户注册")])])])],1),t._v(" "),s("Card",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticStyle:{"margin-top":"76px",width:"430px","margin-left":"auto","margin-right":"auto"}},[s("img",{attrs:{src:a(578)}}),t._v(" "),s("Form",[s("FormItem",[t._v("\n                  公司名称:        "),s("Input",{staticStyle:{width:"300px"},attrs:{type:"text"}})],1),t._v(" "),s("FormItem",[s("div",{staticStyle:{float:"left"}},[t._v("\n                      公司所在地:     \n                  ")]),t._v(" "),s("al-selector",{staticStyle:{width:"300px",float:"left"},attrs:{level:"2"},model:{value:t.resArr,callback:function(e){t.resArr=e},expression:"resArr"}})],1),t._v(" "),s("FormItem",[t._v("\n                  公司详细地址: "),s("Input",{staticStyle:{width:"300px"},attrs:{type:"text"}})],1),t._v(" "),s("FormItem",[s("div",{staticStyle:{float:"left"}},[t._v("\n                  上传营业执照:\n                  ")]),t._v(" "),s("Upload",{attrs:{action:"//jsonplaceholder.typicode.com/posts/"}},[s("Button",[t._v("上传")])],1)],1),t._v(" "),s("FormItem",[s("div",{staticStyle:{float:"left"}},[t._v("\n                  上传商标注册证:\n                  ")]),t._v(" "),s("Upload",{attrs:{action:"//jsonplaceholder.typicode.com/posts/"}},[s("Button",[t._v("上传")])],1)],1),t._v(" "),s("FormItem",[t._v("\n                  公司人数:        "),s("Input",{staticStyle:{width:"300px"},attrs:{type:"text"}})],1),t._v(" "),s("FormItem",[t._v("\n                  公司行业:        "),s("Input",{staticStyle:{width:"300px"},attrs:{type:"text"}})],1),t._v(" "),s("FormItem",[t._v("\n                  公司性质:        "),s("Input",{staticStyle:{width:"300px"},attrs:{type:"text"}})],1),t._v(" "),s("FormItem",[t._v("\n                  公司营业额:    \n                   "),s("Input",{staticStyle:{width:"300px"},attrs:{type:"text"}})],1),t._v(" "),s("FormItem",[t._v("\n                      联系人姓名:    \n                  "),s("Input",{staticStyle:{width:"300px"},attrs:{type:"text"}})],1),t._v(" "),s("FormItem",[t._v("\n                  所在部门:        "),s("Input",{staticStyle:{width:"300px"},attrs:{type:"text"}})],1),t._v(" "),s("FormItem",[t._v("\n                  验证手机:        "),s("Input",{staticStyle:{width:"300px"},attrs:{type:"text"}})],1),t._v(" "),s("FormItem",[s("Button",{staticStyle:{width:"300px","margin-left":"78px"}},[t._v("立即验证")])],1),t._v(" "),s("FormItem",[s("Checkbox",[t._v("\n                      我已阅读并同意"),s("a",[t._v(" <<喜马拉雅用户注册协议和隐私条款>> ")])]),t._v(" "),s("Button",{staticClass:"login",on:{click:function(e){t.phone_login_m("phoneFormValidate")}}},[t._v("\n                      立即注册\n                  ")])],1)],1)],1)],1)]),t._v(" "),s("div",{staticClass:"footer"},[s("div",{staticStyle:{width:"750px","margin-left":"auto","margin-right":"auto",height:"14px"}},[s("ul",[s("li",[s("a",{attrs:{href:""}},[t._v("关于我们")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("联系我们")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("人才招聘")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("商家入驻")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("广告服务")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("手机京东")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("友情链接")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("销售联盟")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("京东社区")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("京东公益")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("English Site")])])])]),t._v(" "),s("div",{staticStyle:{width:"240px","margin-left":"auto","margin-right":"auto","padding-top":"16px"}},[t._v("\n        Copyright©2004-2018 京东JD.com版权所有\n      ")])])],1)],1)},r=[];s._withStripped=!0;var o={render:s,staticRenderFns:r};e.a=o},576:function(t,e,a){t.exports=a.p+"33899d6c099336aa1b53fb580ed01896.png"},577:function(t,e,a){t.exports=a.p+"d46d6bf9b82be68d5ce05e4ed9fbab5e.png"},578:function(t,e,a){t.exports=a.p+"8e38cb08673f83d36f0eb725c16b49ab.png"}});