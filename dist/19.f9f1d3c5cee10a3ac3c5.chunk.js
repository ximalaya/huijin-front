webpackJsonp([19],{527:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(560),s=n(609),u=n(185),a=u(r.a,s.a,!1,null,null,null);a.options.__file="src\\views\\find_user.vue",t.default=a.exports},560:function(e,t,n){"use strict";var r=n(43),s=n.n(r);t.a={data:function(){return{}},mounted:function(){var e=this,t=this.$route.query.token;s.a.set("token",t),this.ajax.get("/api/userinfo").then(function(n){var r={};r.token=t,r.user=n.data.user,e.$store.commit("login",r),e.$router.push({name:"home_content"})}).catch(function(t){403==t.status_code&&e.$Message.error(t.message),e.$router.push({name:"login"})})}}},609:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("登陆中..........")])},s=[];r._withStripped=!0;var u={render:r,staticRenderFns:s};t.a=u}});