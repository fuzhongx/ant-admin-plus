<template>
   <div  class="animate__animated animate__fadeInLeft">
  <div class="header-h-40 header-p" >
    <label for="username">用户名</label>
    <el-input placeholder="请输入用户名" class="inp-w-60" />
    <label for="phone" class="label-l-10">手机号</label>
    <el-input placeholder="请输入手机号" class="inp-w-60" />
    <el-button type="primary" class="btn-l-10" @click="selectbtn">查询</el-button>
    <el-button type="primary">添加</el-button>
  </div>
  <div>
    <el-table
      :data="data.dataTable"
      stripe
      style="width: 100%;outline: none;border: none;"
      class="table-p-t-30"
      :cell-style="{ textAlign: 'center' }"
      :header-cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column  fixed="left" label="序号" header-align="center" :index="indexMethod"  type="index"  min-width="60"/>
      <el-table-column prop="userName" label="用户名" header-align="center" />
      <el-table-column prop="sex" label="性别" header-align="center" />
      <el-table-column prop="age" label="年龄" header-align="center" />
      <el-table-column label="手机号" header-align="center">{{ data.rolePhone }}</el-table-column>
      <el-table-column prop='roleName' label="角色" header-align="center" style="border: 1px solid #c05252;width: 30px;height: 20px;"/>
      <el-table-column label="头像" header-align="center" style="border: 1px solid #c05252;width: 30px;height: 20px;"> </el-table-column>
      <el-table-column prop="create_data" label="创建时间" header-align="center"/>
      <el-table-column prop="updata_data" label="修改时间" header-align="center"/>
      <el-table-column fixed="right" label="操作">
        <!-- 编辑 -->
        <template #default>
          <el-dialog v-model="dialogFormVisible" title="Shipping address" :modal="false" :fullscreen="false" >
            <el-form :model="form">
              <el-form-item
                label="Promotion name"
                :label-width="formLabelWidth" >
                <el-input autocomplete="off" />
              </el-form-item>
              <el-form-item label="Zones" :label-width="formLabelWidth">
                <el-select placeholder="Please select a zone">
                  <el-option label="Zone No.1" value="shanghai" />
                  <el-option label="Zone No.2" value="beijing" />
                </el-select>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">
                  Confirm
                </el-button>
              </span>
            </template>
          </el-dialog>
          <el-button link type="primary" size="small"
            @click="dialogFormVisible = true">编辑</el-button>
          <el-button link type="primary" size="small">删除</el-button>
          <el-button link type="primary" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script setup>

import { userList,selectRole } from "@/api/system.js";
import { onMounted, reactive, ref } from "vue";
const dialogFormVisible = ref(false);
var data = reactive({
  dataTable: [],
  roleTable:[],
  rolePhone:'',
  roleIcon:''
});

onMounted(()=>{
 
})
const indexMethod = (index) => {
  return index + 1
}
// const selectbtn=()=>{
//   selectRole({
//     roleName:'%E4%BD%A0%E5%A5%BD',
//     pageNum:1,
//     pageSize:10
//   }).then(res=>{
//     console.log(res,'查询');
//   })
// }
userList().then((res) => {
  console.log(res, "用户");
  data.dataTable = res.data.data;
  data.dataTable.map((val)=>{
    val.id=parseInt(val.id)
    var data=new Date(val.create_data)
    var times=new Date(val.updata_data)
    val.create_data=data.toLocaleString()
    val.updata_data=times.toLocaleString()
    data.roleTable=val.imgUrl
    data.rolePhone=val.imgUrl.slice(0,11)
    data.roleIcon=val.imgUrl.slice(12)
  })
});

</script>

<style lang="scss" scoped>
/* 移除表格行点击时出现的黑色边框 */
:v-deep .el-table tr:focus {
  outline:none
}
.el-table__header {
  outline: none;
  border: none;
}
.label-l-10{
  margin-left: 20px;
}
.header-p {
  padding: 10px;
}
.table-p-t-30 {
  padding-top: 30px;
  outline: none;
  border: none;
}
.btn-l-10 {
  margin-left: 10px;
}
.box-w-h-100 {
  width: 100%;
  height: 100%;
}
.header-w-h-60 {
  height: 40px;
  background: rgb(231, 133, 133);
}
.inp-w-60 {
  width: 15%;
  margin-left: 10px;
}

</style>
