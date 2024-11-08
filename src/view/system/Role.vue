<template>
  <div class="header-h-40 header-p">
    <label for="username">角色名称</label>
    <el-input
      placeholder="请输入角色名称"
      class="inp-w-60"
      v-model="data.headerFrom.selectName"
    />
    <el-button type="primary" class="btn-l-10" @click="selectBtn"
      >查询</el-button
    >
    <el-button type="primary"   @click="dialogFormVisible = true">添加</el-button>
  </div>
  <div>
    <el-table
      :data="data.dataTable"
      stripe
      style="width: 100%"
      class="table-p-t-30"
      fit
      :cell-style="{ textAlign: 'center' }"
      :header-cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column prop="id" label="序号" header-align="center" />
      <el-table-column prop="roleName" label="角色名称" header-align="center" />
      <el-table-column
        prop="create_data"
        label="创建时间"
        header-align="center"
      />
      <el-table-column
        prop="updata_data"
        label="修改时间"
        header-align="center"
      />
      <el-table-column fixed="right" label="操作" v-slot="scope">
        <!-- 添加角色 -->
          <el-dialog
            v-model="dialogFormVisible"
            title="Shipping address"
            :modal="false"
            :fullscreen="false"
          >
            <el-form :model="form">
              <el-form-item
                label="Promotion name"
                :label-width="formLabelWidth"
              >
                <el-input autocomplete="off" v-model="data.headerFrom.selectName"/>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary"  @click="addBtn">
                  Confirm
                </el-button>
              </span>
            </template>
          </el-dialog>
           <!-- 角色详情 -->
           <el-dialog
            v-model="detailsDialog"
            title="角色详情"
            :modal="false"
            :fullscreen="false"
          >
            <el-form :model="detailsForm">
              <el-form-item
                label="ID"
                :label-width="formLabelWidth"
              >
                <el-input autocomplete="off" v-model="data.detailsForm.id"/>
              </el-form-item>
              <el-form-item
                label="角色名称"
                :label-width="formLabelWidth"
              >
                <el-input autocomplete="off" v-model="data.detailsForm.roleName"/>
              </el-form-item>
              <el-form-item
                label="创建时间"
                :label-width="formLabelWidth"
              >
                <el-input autocomplete="off" v-model="data.detailsForm.createTime"/>
              </el-form-item>
              <el-form-item
                label="更新时间"
                :label-width="formLabelWidth"
              >
                <el-input autocomplete="off" v-model="data.detailsForm.updateTime"/>
              </el-form-item>
            </el-form>
          </el-dialog>
          <el-button link type="primary" size="small" @click="dialogFormVisible = true">编辑</el-button>
          <el-button link type="primary" size="small" @click="deleteBtn(scope.row.id)">删除</el-button>
          <el-button link type="primary" size="small" @click="xiangqing(scope.row)">详情</el-button>
   
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { roleList, selectRole, addRole ,deleteRole,Roles} from "@/api/system.js";
import { onMounted, reactive, ref } from "vue";
const dialogFormVisible = ref(false);
const detailsDialog = ref(false);
const data = reactive({
  dataTable: [],
  headerFrom: {
    selectName: "",
  },
  detailsForm:{
    id:'',
    roleName:'',
    createTime:'',
    updateTime:''
  }
});

onMounted(() => {
  
});
function xiangqing(row){
  detailsDialog.value=true
  data.detailsForm.id=row.id
  data.detailsForm.roleName=row.roleName
  data.detailsForm.createTime=row.create_data
  data.detailsForm.updateTime=row.updata_data
  
}
function deleteBtn(data){
  deleteRole({
    id:data
  }).then(res=>{
    roleList()
  })
}
function addBtn() {
  addRole({
    roleName: data.headerFrom.selectName,
  }).then((res) => {
    console.log(res, '添加角色');
    roleList()
  });
  dialogFormVisible.value = false
}
function selectBtn() {
  selectRole({
    roleName: data.headerFrom.selectName,
    pageNum: 1,
    pageSize: 10,
  }).then((res) => {
    data.dataTable = res.data.data;
    console.log(data.headerFrom.selectName, "查询");
  });
}
roleList().then((res) => {
  data.dataTable = res.data.data;
});
</script>

<style lang="scss" scoped>
/* 移除表格行点击时出现的黑色边框 */
.label-l-10 {
  margin-left: 20px;
}
.header-p {
  padding: 10px;
}
.table-p-t-30 {
  padding-top: 30px;
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
