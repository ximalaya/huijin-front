webpackJsonp([27],{533:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(578),i=a(635),r=a(185),o=r(n.a,i.a,!1,null,null,null);o.options.__file="src\\views\\test5.vue",t.default=o.exports},578:function(e,t,a){"use strict";var n=a(43),i=a.n(n);t.a={data:function(){return{headers:{},apiurl:APIURL}},mounted:function(){this.headers={Authorization:"Bearer "+i.a.get("token"),Accept:"application/vnd.huijin.v1+json"}}}},635:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Upload",{attrs:{action:e.apiurl+"/api/upload",headers:e.headers,name:"image"}},[a("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[e._v("Upload files")])],1)},i=[];n._withStripped=!0;var r={render:n,staticRenderFns:i};t.a=r}});