webpackJsonp([5],{"2B0V":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("mtWM"),s=a.n(i),l={name:"roleMgt",data:function(){return{search:{name:""},alldata:[],maindata:[],styleData:{tableHeight:0,searchHeight:0},tableShow:!0,pageData:{size:100,total:0,page:1},roleAdd:!1,rolename:"",editId:0,multipleSelection:[],menuList:{},editTitle:"新增角色",isEdit:!1,selectItem:[],filterText:"",treeArr:[],defaultProps:{children:"children",label:"label"}}},watch:{"$store.state.bodySize.height":function(e,t){this.styleData.searchHeight=document.querySelector(".searchView").offsetHeight,this.styleData.tableHeight=this.$api.getHeightFun(this.styleData.searchHeight),this.tableShow=!1,this.tableShow=!0},filterText:function(e){this.$refs.tree.filter(e)}},mounted:function(){this.styleData.searchHeight=document.querySelector(".searchView").offsetHeight,this.styleData.tableHeight=this.$api.getHeightFun(this.styleData.searchHeight),this.init()},computed:{},methods:{filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},toTree:function(e,t){for(var a,i=[],s=0;s<e.length;s++)if(e[s].resPid===t||e[s].pid===t){var l={id:e[s].id,label:e[s].resName,pid:e[s].resPid};(a=this.toTree(e,e[s].id)).length>0&&(l.children=a),i.push(l)}return i},resetChecked:function(){this.$refs.tree.setCheckedKeys([])},getData:function(){return this.$api.promise({method:"POST",url:"findRole",data:{}})},getMenuList:function(){return this.$api.promise({method:"POST",url:"findResource",data:{}})},init:function(){var e=this;s.a.all([this.getData(),this.getMenuList()]).then(s.a.spread(function(t,a){if(t.data&&t.data.code>0&&a.data&&a.data.code>0){e.menuMap(a.data.data),e.treeArr=e.toTree(a.data.data,-1);for(var i=0;i<t.data.data.length;i++)t.data.data[i].resStrsIds=t.data.data[i].resStrs,t.data.data[i].resStrs=e.getOwnMenu(t.data.data[i].resStrs);e.alldata=t.data.data,e.maindata=e.spliceFun(e.alldata,e.pageData.size,e.pageData.page-1)}else{var s=t.data.desc?t.data.desc:a.data.desc;e.$message.error(s)}})).catch(function(t){e.$message.error("接口异常："+t)})},getOwnMenu:function(e){for(var t=e.split(","),a=[],i=0;i<t.length;i++)a.push(this.menuList[t[i]]);return a.join(",")},menuMap:function(e){for(var t={},a=0;a<e.length;a++)t[e[a].id]=e[a].resName;this.menuList=t},delRole:function(e){var t=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){if(e&&(t.multipleSelection=[e.row.id]),0!==t.multipleSelection.length){var a=t.multipleSelection;t.$api.promise({method:"POST",url:"delRoleArr",data:a}).then(function(e){e.data&&e.data.code>0?(t.$message.success("删除成功！"),t.reData()):t.$message.error("删除失败，请稍后再试~")}).catch(function(e){t.$message.error("接口异常："+e)})}else t.$message({message:"请选择角色",type:"warning"})})},reData:function(){var e=this,t={};this.search.name&&(t={roleName:this.search.name}),this.$api.promise({method:"POST",url:"findRole",data:t}).then(function(t){if(t.data&&t.data.code>0){for(var a=0;a<t.data.data.length;a++)t.data.data[a].resStrs=e.getOwnMenu(t.data.data[a].resStrs);e.alldata=t.data.data,e.maindata=e.spliceFun(e.alldata,e.pageData.size,e.pageData.page-1)}else e.$message.error(t.data.desc)}).catch(function(t){e.$message.error("接口异常："+t)})},spliceFun:function(e,t,a){return this.pageData.total=e.length,e.slice(t*a,t*a+t)},handleEdit:function(e,t,a,i){var s=this;this.roleAdd=!0,e?(this.isEdit=!1,this.editTitle="新增角色信息",this.rolename="",this.editId=0,setTimeout(function(){s.$refs.tree.setCheckedKeys([])},300)):(this.isEdit=!0,this.editTitle="编辑角色信息",this.rolename=a,this.editId=t,setTimeout(function(){s.$refs.tree.setCheckedKeys(i.split(","))},300))},handleSizeChange:function(e){this.size=e,this.maindata=this.spliceFun(this.alldata,this.pageData.size,this.pageData.page-1)},handleCurrentChange:function(e){this.pageData.page=e,this.maindata=this.spliceFun(this.alldata,this.pageData.size,this.pageData.page-1)},handleSelectionChange:function(e){for(var t=[],a=0;a<e.length;a++)t.push(e[a].id);this.multipleSelection=t},submitForm:function(e){var t=this;if(this.rolename){var a=this.$refs.tree.getCheckedKeys();if(a.length){for(var i=[],s=0;s<a.length;s++)i.push({id:a[s]});var l=this.isEdit?"updateRole":"addRole",n=this.isEdit?"编辑成功！":"添加成功！",r={roleName:this.rolename,resList:i};this.isEdit&&(r.id=this.editId),this.$api.promise({method:"POST",url:l,data:r}).then(function(e){e.data&&e.data.code>0?(t.$message.success(n),t.reData(),t.roleAdd=!1):t.$message.error("操作失败，请稍后再试~")}).catch(function(e){t.$message.error("接口异常："+e)})}else this.$message({message:"请选择角色菜单",type:"warning"})}else this.$message({message:"请填写角色名",type:"warning"})}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"roleMgt"},[a("div",{staticClass:"searchView"},[e._v("\n    角色名称：\n    "),a("el-input",{staticClass:"search-input",attrs:{size:"small",clearable:"",placeholder:"请输入角色名称"},model:{value:e.search.name,callback:function(t){e.$set(e.search,"name",t)},expression:"search.name"}}),e._v(" "),a("el-button",{attrs:{size:"small",icon:"el-icon-search",type:"primary"},on:{click:e.reData}},[e._v("查询")])],1),e._v(" "),a("div",{staticClass:"panel"},[e._m(0),e._v(" "),a("div",{staticClass:"panel-body"},[a("div",{staticClass:"demo-table"},[e.tableShow?a("el-table",{attrs:{border:"",data:e.maindata,stripe:"",height:e.styleData.tableHeight},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"37"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"roleName",label:"角色名称",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"resStrs",label:"拥有菜单",width:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"createrName",label:"创建人",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"modifyName",label:"修改人",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"modifyTime",label:"修改时间",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"173",prop:"btnList"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"el-icon-edit",attrs:{size:"mini",type:"success"},on:{click:function(a){e.handleEdit(0,t.row.id,t.row.roleName,t.row.resStrsIds)}}},[e._v("编辑")]),e._v(" "),a("el-button",{staticClass:"el-icon-delete",attrs:{size:"mini",type:"danger"},on:{click:function(a){e.delRole(t)}}},[e._v("删除")])]}}])})],1):e._e()],1)])]),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":1,"page-sizes":[100,200,300,400],"page-size":e.pageData.size,layout:"total, sizes, prev, pager, next, jumper",total:e.pageData.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("div",{staticClass:"bottomBut"},[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(t){e.handleEdit(1,"","","")}}},[e._v("新增")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete"},on:{click:function(t){e.delRole()}}},[e._v("删除")])],1),e._v(" "),a("el-dialog",{attrs:{title:e.editTitle,visible:e.roleAdd},on:{"update:visible":function(t){e.roleAdd=t}}},[a("div",{staticClass:"rolename"},[a("span",[e._v("角色名：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入内容",size:"mini"},model:{value:e.rolename,callback:function(t){e.rolename=t},expression:"rolename"}})],1),e._v(" "),a("div",{staticClass:"tree"},[a("div",{staticClass:"header"},[e._v("系统全部菜单")]),e._v(" "),a("el-input",{attrs:{placeholder:"输入关键字进行过滤",size:"mini"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),a("div",{staticClass:"tree-block"},[a("el-tree",{ref:"tree",attrs:{data:e.treeArr,"show-checkbox":"","node-key":"id",props:e.defaultProps,"filter-node-method":e.filterNode,"expand-on-click-node":!0,"default-expand-all":""}})],1),e._v(" "),a("div",{staticClass:"buttons"},[a("el-button",{attrs:{size:"mini"},on:{click:e.resetChecked}},[e._v("清空")])],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.submitForm("addRules")}}},[e._v("确 定")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.roleAdd=!1}}},[e._v("取 消")])],1)])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"panel-heading"},[t("span",{staticClass:"heading"},[this._v("角色信息列表")])])}]};var r=a("VU/8")(l,n,!1,function(e){a("fixM")},null,null);t.default=r.exports},fixM:function(e,t){}});