webpackJsonp([8],{"8ZgC":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={name:"transfer",data:function(){this.$createElement;return{data:function(e){for(var t=[],a=1;a<=15;a++)t.push({key:a,label:"备选项 "+a,disabled:a%4==0});return t}(),value3:[1],renderFunc:function(e,t){return e("span",null,[t.key," - ",t.label])}}},methods:{handleChange:function(e,t,a){console.log(e,t,a)}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"transfer"},[a("el-transfer",{attrs:{filterable:"","left-default-checked":[2,3],"right-default-checked":[1],"render-content":e.renderFunc,titles:["Source","Target"],"button-texts":["到左边","到右边"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:e.data},on:{change:e.handleChange},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}},[a("el-button",{staticClass:"transfer-footer",attrs:{slot:"left-footer",size:"small"},slot:"left-footer"},[e._v("操作")]),e._v(" "),a("el-button",{staticClass:"transfer-footer",attrs:{slot:"right-footer",size:"small"},slot:"right-footer"},[e._v("操作")])],1)],1)},staticRenderFns:[]},r=a("VU/8")(l,n,!1,null,null,null);t.default=r.exports}});
//# sourceMappingURL=8.cb4c524d47d82bf15086.js.map