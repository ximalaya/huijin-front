webpackJsonp([13],{520:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(544),s=n(581),a=n(184),u=a(r.a,s.a,!1,null,null,null);u.options.__file="src\\views\\find_user.vue",t.default=u.exports},544:function(e,t,n){"use strict";t.a={data:function(){return{}},mounted:function(){var e=this,t=this.$route.query.token;this.ajax.defaults.headers.common.Authorization="Bearer "+t,this.ajax.get("/api/userinfo").then(function(n){var r={};r.token=t,r.user=n.data.user,e.$store.commit("login",r),e.$router.push({name:"home"})}).catch(function(t){403==t.status_code&&e.$Message.error(t.message),e.$router.push({name:"login"})})}}},581:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("登陆中..........")])},s=[];r._withStripped=!0;var a={render:r,staticRenderFns:s};t.a=a}});