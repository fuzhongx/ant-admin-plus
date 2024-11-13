<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <asides />
      </el-aside>
      <el-container>
        <el-header>
          <headers />
        </el-header>
        <el-main>
          <mains  class="animate__animated animate__fadeInLeft mains_h_100"/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import asides from '@/view/layout/aside/Index.vue'
import headers from '@/view/layout/header/Index.vue'
import mains from '@/view/layout/main/Index.vue'

</script>

<style lang="scss" scoped>
.mains_h_100{
  height: 100%;
}
.el-aside {
    width: var(--el-aside-width,auto);
  }
.el-header {
  width: 100%;
  height: 60px;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid #d8dce5;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
}</style> 