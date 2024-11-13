<template>
  <div  class="animate__animated animate__fadeInLeft content_h_100" >
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
    <el-button type="primary"   @click="data.addDialogFormVisible = true">添加</el-button>
  </div>
  <div>
    <el-table
      :data="data.dataTable"
      stripe
      class="table-p-t-30"
      fit
      :cell-style="{ textAlign: 'center' }"
      :header-cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column prop="id" label="序号" header-align="center"  :index="indexMethod"  type="index" min-width="60"/>
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
            v-model="data.addDialogFormVisible"
            title="添加角色"
            :modal="false"
          >
            <el-form :model="form">
              <el-form-item
                label="角色名称"
                :label-width="formLabelWidth"
              >
                <el-input autocomplete="off" v-model="data.headerFrom.selectName"/>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="data.addDialogFormVisible = false">取消</el-button>
                <el-button type="primary"  @click="addBtn">
                  确定
                </el-button>
              </span>
            </template>
          </el-dialog>
            <!-- 编辑角色 -->
            <el-dialog
            v-model="data.BianjiDialog"
            title="编辑角色"
            :modal="false"
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
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="data.BianjiDialog = false">取消</el-button>
                <el-button type="primary"  @click="BianjiBtn(scope.row.id)">
                  确定
                </el-button>
              </span>
            </template>
          </el-dialog>
           <!-- 角色详情 -->
           <el-dialog
            v-model="data.detailsDialog"
            title="角色详情"
            :modal="false"
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
          <el-button link type="primary" size="small" @click="Bianji(scope.row)">编辑</el-button>
          <el-button link type="primary" size="small" @click="deleteBtn(scope.row.id)">删除</el-button>
          <el-button link type="primary" size="small" @click="xiangqing(scope.row)">详情</el-button>
   
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script setup>
import axios from "axios";
import { roleList, selectRole, addRole ,deleteRole,BianjiRoles} from "@/api/system.js";
import { onMounted, reactive, ref } from "vue";

const data = reactive({
  dialogFormVisible:false,
  addDialogFormVisible:false,
  detailsDialog:false,
  BianjiDialog:false,
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
  List()
});
const indexMethod = (index) => {
  return index + 1
}
function Bianji(row){
  data.BianjiDialog=true
  data.detailsForm.id=row.id
  data.detailsForm.roleName=row.roleName
  data.detailsForm.createTime=row.create_data
  data.detailsForm.updateTime=row.updata_data
}
function BianjiBtn(){
  BianjiRoles({
    id:data.detailsForm.id,
    roleName: data.detailsForm.roleName,
  }).then(res=>{
    List()
    data.BianjiDialog=false
  })

}
function xiangqing(row){
  data.detailsDialog=true
  data.detailsForm.id=row.id
  data.detailsForm.roleName=row.roleName
  data.detailsForm.createTime=row.create_data
  data.detailsForm.updateTime=row.updata_data
  
}
function deleteBtn(data){
  deleteRole({
    id:data
  }).then(res=>{
    List()
  })
}
function addBtn() {
  addRole({
    roleName: data.headerFrom.selectName,
  }).then((res) => {
    List()
    data.addDialogFormVisible = false
  });
  
}
function selectBtn() {
  axios.get( process.env.VUE_APP_FLAG+'/role',{
    params:{
      roleName:data.headerFrom.selectName,
      pageNum: 1,
      pageSize: 10,
    }
  }).then(res=>{
    List()
  })
  // selectRole({
  //   params:{
  //     roleName:data.headerFrom.selectName,
  //     pageNum: 1,
  //     pageSize: 10,
  //   }
  // }).then((res) => {
  //   List()
  // });
}
function List(){
  roleList().then((res) => {
  console.log(data.loading,88);
  data.dataTable = res.data.data;
  data.dataTable.map((val)=>{
    val.id=parseInt(val.id)
    var data=new Date(val.create_data)
    var times=new Date(val.updata_data)
    val.create_data=data.toLocaleString()
    val.updata_data=times.toLocaleString()
});
});
}
</script>

<style lang="scss" scoped>
.content_h_100{
  height: 100%;
}
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
