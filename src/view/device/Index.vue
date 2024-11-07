<template>
  <div class="header-h-40 header-p">
    <label for="传感器名称">传感器名称</label>
    <el-input placeholder="Approved by" class="inp-w-60" />
    <el-button type="primary" class="btn-l-10">查询</el-button>
    <el-button type="primary">添加</el-button>
  </div>
  <div>
    <el-table
      :data="data.dataTable"
      stripe
      style="width: 100%"
      class="table-p-t-10"
      fit
      :cell-style="{ textAlign: 'center' }"
      :header-cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column prop="id" label="序号" header-align="center" />
      <el-table-column prop="deviceName" label="名称" header-align="center" />
      <el-table-column prop="ip" label="IP地址" header-align="center" />
      <el-table-column prop="position" label="初始位置" header-align="center" />
      <el-table-column
        prop="create_time"
        label="创建时间"
        header-align="center"
      />
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
</template>

<script setup>
import { ElMessageBox } from "element-plus";

import { deviceListCom, putDevice } from "@/api/device.js";
import { reactive, ref } from "vue";
const dialogFormVisible = ref(false);
const data = reactive({
  dataTable: [],
});
deviceListCom().then((res) => {
  console.log(res, "设备");
  data.dataTable = res.data.data;
  console.log(data.dataTable);
});
</script>

<style lang="scss" scoped>
.header-p {
  padding: 10px;
}
.table-p-t-10 {
  padding-top: 10px;
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
::v-deep .el-card__body {
  padding: 0px !important;
}
</style>
