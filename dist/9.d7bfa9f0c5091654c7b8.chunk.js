webpackJsonp([9],{534:function(e,t,a){"use strict";function s(e){n||a(636)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(579),r=a(637),n=!1,i=a(185),l=s,d=i(o.a,r.a,!1,l,"data-v-0d169be5",null);d.options.__file="src\\views\\login.vue",t.default=d.exports},579:function(e,t,a){"use strict";var s=a(43);a.n(s);t.a={data:function(){return{apiurl:APIURL,time_d:60,phone_login_d:!0,checked_d:!1,sended_d:!1,formValidate:{account_d:"",password_d:""},ruleValidate:{account_d:[{required:!0,message:" 账号不能为空",trigger:"blur"},{type:"string",min:8,message:"账号长度不少于8个字符",trigger:"blur"}],password_d:[{required:!0,message:" 密码不能为空",trigger:"blur"},{type:"string",min:8,message:"密码长度不少于8个字符",trigger:"blur"}]},phoneFormValidate:{phone_d:"",code_d:""},phoneRuleValidate:{phone_d:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{type:"string",len:11,message:"请输入11位手机号",trigger:"blur"}],code_d:[{required:!0,message:" 验证码不能为空",trigger:"blur"},{type:"string",len:4,message:"请输入四位验证码",trigger:"blur"}]}}},mounted:function(){var e=document.createElement("script");e.type="text/javascript",e.src="//captcha.luosimao.com/static/dist/api.js",e.onload=onload,document.body.appendChild(e),window.getCaptchaResponse=this.getCaptchaResponse},methods:{phone_login_m:function(e){var t=this,a=this;this.$refs[e].validate(function(e){e?(t.$Message.success("登陆成功"),a.ajax.post("/api/login",{phone:a.phoneFormValidate.phone_d,code:a.phoneFormValidate.code_d}).then(function(e){a.$store.commit("login",e.data),a.$route.query.redirect?a.$router.push({path:a.$route.query.redirect}):a.$router.push({name:"home_content"})}).catch(function(e){403==e.status_code&&(a.$Message.error(e.message),LUOCAPTCHA.reset())})):t.$Message.error("登录失败")})},phone_reset_m:function(e){this.$refs[e].resetFields()},getCaptchaResponse:function(e){var t=this;this.ajax.post("/api/checkcaptcha",{captcha:e}).then(function(e){t.checked_d=!0}).catch(function(e){400==e.status_code&&(alert(e.message),LUOCAPTCHA.reset())})},send_code_m:function(){var e=this;this.ajax.post("/api/sendcode",{phone:e.phoneFormValidate.phone_d}).then(function(t){e.Interval(),e.sended_d=!0}).catch(function(e){400==e.status_code&&alert(e.message)})},Interval:function(){var e=this,t=function(){0==--e.time_d&&(clearInterval(a),e.time_d=60,e.checked_d=!1,e.sended_d=!1,LUOCAPTCHA.reset())},a=setInterval(t,1e3)},account_login_m:function(e){var t=this;this.$refs[e].validate(function(e){e?t.$Message.success("登陆成功"):t.$Message.error("登录失败")})}}}},636:function(e,t){},637:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Layout",{staticClass:"layout"},[s("Header",{staticClass:"header"},[s("Row",[s("i-col",{attrs:{span:"3",offset:"1"}},[s("img",{staticClass:"logo",attrs:{src:"http://static.huijinjiu.com/LOGO.png"}})]),e._v(" "),s("i-col",{staticStyle:{"font-size":"23px","margin-top":"30px"},attrs:{span:"3",offset:"1"}},[e._v(" 欢迎登录\n          ")]),e._v(" "),s("i-col",{attrs:{span:"16"}})],1)],1),e._v(" "),s("div",{staticClass:"content"},[s("div",{staticStyle:{width:"405px","margin-left":"auto","margin-right":"auto"}},[s("Card",{staticStyle:{"margin-top":"76px"}},[s("Row",{staticStyle:{"border-bottom":"2px solid #bfbfbf",height:"49px"}},[s("i-col",{attrs:{span:"18",offset:"3"}},[s("ul",[s("i-col",{attrs:{span:"24"}},[s("li",{staticClass:"phone_login",class:{select:e.phone_login_d},on:{click:function(t){e.phone_login_d=!0}}},[e._v("\n                  手机登录\n                ")])])],1)]),e._v(" "),s("i-col",{attrs:{span:"3"}},[e._v(" ")])],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.phone_login_d,expression:"phone_login_d"}]},[s("Form",{ref:"phoneFormValidate",attrs:{model:e.phoneFormValidate,rules:e.phoneRuleValidate}},[s("Row",[s("i-col",{attrs:{span:"22",offset:"1"}},[s("FormItem",{attrs:{prop:"phone_d"}},[s("Input",{staticClass:"phone",attrs:{type:"text",placeholder:"请输入手机号码",clearable:"",size:"large"},model:{value:e.phoneFormValidate.phone_d,callback:function(t){e.$set(e.phoneFormValidate,"phone_d",t)},expression:"phoneFormValidate.phone_d"}},[s("Icon",{attrs:{slot:"prepend",type:"android-phone-portrait"},slot:"prepend"})],1)],1)],1),e._v(" "),s("i-col",{attrs:{span:"1"}},[e._v(" ")])],1),e._v(" "),s("Row",{directives:[{name:"show",rawName:"v-show",value:11==e.phoneFormValidate.phone_d.length,expression:"phoneFormValidate.phone_d.length==11"}],staticStyle:{margin:"0 4%","margin-bottom":"18px"}},[s("div",{staticClass:"l-captcha",attrs:{"data-site-key":"a61ebded8b92ba71b5272a5f60fc1be7","data-callback":"getCaptchaResponse"}})]),e._v(" "),s("Row",[s("i-col",{attrs:{span:"22",offset:"1"}},[s("FormItem",{attrs:{prop:"code_d"}},[s("Input",{attrs:{type:"text",placeholder:"请输入短信验证码",clearable:"",size:"large"},model:{value:e.phoneFormValidate.code_d,callback:function(t){e.$set(e.phoneFormValidate,"code_d",t)},expression:"phoneFormValidate.code_d"}},[s("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("手机验证码")]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.checked_d,expression:"!checked_d"}],staticStyle:{cursor:"pointer"},attrs:{slot:"append"},on:{click:e.send_code_m},slot:"append"},[e._v("请先进行人机验证")]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.checked_d&&!e.sended_d,expression:"checked_d&&!sended_d"}],staticStyle:{cursor:"pointer"},attrs:{slot:"append"},on:{click:e.send_code_m},slot:"append"},[e._v("发送验证码")]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.sended_d,expression:"sended_d"}],staticStyle:{cursor:"pointer"},attrs:{slot:"append"},slot:"append"},[e._v(e._s(e.time_d)+"s后重新获取")])])],1)],1),e._v(" "),s("i-col",{attrs:{span:"1"}},[e._v(" ")])],1),e._v(" "),s("FormItem",[s("Row",[s("i-col",{attrs:{span:"22",offset:"1"}},[s("Row",[s("i-col",{attrs:{span:"24"}},[s("Button",{staticClass:"login",on:{click:function(t){e.phone_login_m("phoneFormValidate")}}},[e._v("\n                        登录\n                      ")])],1)],1)],1),e._v(" "),s("i-col",{attrs:{span:"1"}},[e._v(" ")])],1)],1),e._v(" "),s("Row",[s("i-col",{attrs:{span:"4"}},[s("div",[s("a",{staticStyle:{color:"black"},attrs:{href:e.apiurl+"/auth/qq"}},[s("img",{staticStyle:{"vertical-align":"middle","padding-left":"18px"},attrs:{src:a(638)}}),e._v("QQ")])])]),e._v(" "),s("i-col",{attrs:{span:"5",offset:"2"}},[s("div",[s("a",{staticStyle:{color:"black"}},[s("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:a(639)}}),e._v("微信")])])]),e._v(" "),s("i-col",{attrs:{span:"13"}})],1)],1)],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.phone_login_d,expression:"!phone_login_d"}],staticClass:"form1"},[s("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate}},[s("FormItem",{attrs:{prop:"account_d"}},[s("Row",{staticStyle:{"margin-top":"28px"}},[s("i-col",{attrs:{span:"22",offset:"1"}},[s("Input",{attrs:{type:"text",placeholder:"请输入账号",clearable:"",size:"large"},model:{value:e.formValidate.account_d,callback:function(t){e.$set(e.formValidate,"account_d",t)},expression:"formValidate.account_d"}},[s("Icon",{attrs:{slot:"prepend",type:"person"},slot:"prepend"})],1)],1),e._v(" "),s("i-col",{attrs:{span:"1"}},[e._v(" ")])],1)],1),e._v(" "),s("FormItem",{attrs:{prop:"password_d"}},[s("Row",[s("i-col",{attrs:{span:"22",offset:"1"}},[s("Input",{attrs:{type:"password",placeholder:"请输入密码",clearable:"",size:"large"},model:{value:e.formValidate.password_d,callback:function(t){e.$set(e.formValidate,"password_d",t)},expression:"formValidate.password_d"}},[s("Icon",{attrs:{slot:"prepend",type:"locked"},slot:"prepend"})],1)],1),e._v(" "),s("i-col",{attrs:{span:"1"}},[e._v(" ")])],1)],1),e._v(" "),s("FormItem",[s("Row",[s("i-col",{attrs:{span:"22",offset:"1"}},[s("Button",{staticClass:"login1",on:{click:function(t){e.account_login_m("formValidate")}}},[e._v("\n                      登录\n                    ")])],1),e._v(" "),s("i-col",{attrs:{span:"1"}},[e._v(" ")])],1)],1)],1)],1)],1)],1)]),e._v(" "),s("div",{staticClass:"footer"},[s("div",{staticStyle:{width:"750px","margin-left":"auto","margin-right":"auto",height:"14px"}},[s("ul",[s("li",[s("a",{attrs:{href:""}},[e._v("关于我们  ")])]),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("  联系我们  ")])]),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("  人才招聘  ")])]),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("  商家入驻  ")])]),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("  广告服务  ")])]),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("  手机京东  ")])]),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("  友情链接  ")])]),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("  销售联盟  ")])]),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("  京东社区  ")])]),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("  京东公益  ")])]),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("  English Site")])])])]),e._v(" "),s("div",{staticStyle:{width:"240px","margin-left":"auto","margin-right":"auto","padding-top":"16px"}},[e._v("\n          Copyright©2004-2018 京东JD.com版权所有\n        ")])])],1)],1)},o=[];s._withStripped=!0;var r={render:s,staticRenderFns:o};t.a=r},638:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAClUlEQVQ4jY2Tz4uXVRTGP8+573emHxhDi4FIDBFCohZF9CfMKnAxICFFheTC0a27dm2khSDhooVII5owINLC/0CiVRQSJZPpFBIJQYq/vu+9T4v7fr/zvq8mHTiLe+49z33Oc87R0onrAGDQQoZkKAEq+wXvAm8AuwEBN4AfjC5jnSOKycLTxMzUB2Qho+RVmc+AvTzdNi0+Jet8HzBwB1YpHBds/A8wgD2Cc4iTc0KGhsUZWD4ulWNYT0p+1KUsDqIGqRxlQrLSWmUoo8grinKsyjSwm4YPLXZZ7DK8B/w8fCaUymGlvEoYLZ38lUj5T+TlOaAMOa4V85Ya3+0n06pR+DvCb86kQgbrTnmUXgw1ZRWxPGZXSCvQ3O1jYeMcbZnGCqadp1SZdmihHAjw/mGVxo4Nkn+jKdgx18utgAJw20Vfzbu5nXsgVOdsoAnypZqYazkImzqjCwUmGeSL4wYKXm+AV8adwLq5XWflIQRBP7xZfxnYUvB4a6856wpZDBzVUbOqo18svh8jBrDVo4atE6i0RGbmkjvpqBLUc8b6fIT3Txh+HKhgfod4gYgJCqp314XZRojCDgp/jACvBmijH1H4VETZoqRXKZOq3QzFgmmCNnZGU24ofL6fa+tCeBpfA3/34jttnRW+SrQdraohUaqbLRd9CbzUy7vvNtYbJsbSR6Jc6o3BsshvgzdrzbwDJOBbNbnF2o318nZZxsQhJn6opVPX65KTv5DK2qjp9zp6z3bnB0AGnh+A5TjjnD4GaHhYJTLpCItIUQ73mD43Ev2ZwUlg67Sn6eBMmZhdVN21ZvQBg1H6T7tl+ISig0BFEjT937rdPOsSF5Dfl7wPeA1Y7l78Bfxk6xsK6zS+P16LfwFCTh7TIB/mbwAAAABJRU5ErkJggg=="},639:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAC+UlEQVQ4jY2VTaiXRRTGf8+Z9//+Bcm01IpIb2IkEX3t2hQVRYtAq12LonJl22gRGFFQrQIXgYskQWglQR/SNpKIbFNG4SLIFn2gGIqo977vzHla/O/Fey9aPrM7M+d5njNzZkbrPUdi+uzoW48jIYUFgieFHsRsAwL5ZMKxJI8EqiDCokZlvgwEomMVDAj2hvUSMLdyUgQgyt/CH6W8F2jLl+h6byUx05zQ1/42y58K3b9aaDWESPJkWDuHUo8vLDqMYDaAm4V+vhayWSVGaC6IH4EdxgBEnz1rckrf+q8tX7cq7zxw5r+IU2aS3XcdZWpMRAui6TXMHQCyAL6w2ApeJ3yL5anhxas5Dce6vk7eUwrdNN5JcfwDbBBiiPGArN1dlrmMPJP2eYLbI/Wbxdbi+B7YdCXyVvKGEDwBbFiMnXbk7hYVy5/IZVeR6DLesfyKgjMWX16t/JJ6LuR4fJn9H9bUKS2S2tUHwjo0lpEa9dUgzkbqUZkPgOeBI0Iry0/uC8GWZbFbG8m09oSDsRtJtMWOnZKPyvpsjHps6MZDNdpTNerby0klrZ/16VIA3VWjPWsgsiDDNCc7Ag4nnLM5GBaTVt5t0Z7JyDeAX5cZUmf8x5KKMZPsDqfyXuTjJTvA34ZjAam18J7SChJvKZTRgiSPCm1fzD8XLdpXK2zPvD+N2Q8+AOxrJYcsrYW5SIDlS6lcGMqI0GOX8/VLl+QR4wvA2pkKY6TeXLYNCNL27qU0CySYtMlBYMvSLcnIjzsR1WJfyXg9lQCTFSeH6bJ72XgH8oeYU8CNfe0jHC8sNjY16sEhFv7SxtwO0E1q96eITSyqXSMuCK0F2sXu0kbjszFqZF7zdYz6UFj/y7AcgrWyWCjDw1XtrGVCaOm1OWHlPcCp1Q17ZTKBNT+U4ZEhhm8KwYzrsho2P41RtzW194HxKq4ASOX+Fm1b4pVdMvsCkmnr6duEodTZQVA2y9qFuRvYLCTj00InUvl5U/u9uNCUDGVgifRfvn11TAtmEmsAAAAASUVORK5CYII="}});