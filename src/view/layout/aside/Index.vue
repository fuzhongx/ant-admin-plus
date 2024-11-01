<template>
  <el-menu default-active="1" router  class="el-menu-vertical-demo dark-mode" :collapse="isCollapse" @open="handleOpen"
    @close="handleClose" text-color="#fff" active-text-color="rgb(64, 158, 255)" background-color="rgb(48, 65, 86)" >
    <template v-for="item in routes" :key="item.path">
    <template v-if="!item.children">
      <el-menu-item :index="item.path">
      <span>{{item.meta &&item.meta.title}}</span>
    </el-menu-item>
    </template>
    <el-sub-menu :index="1"  v-else>
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span> {{ item.meta && item.meta.title }}</span>
      </template>
      <template v-for="child in item.children" :key="child.path">
        <el-menu-item :index="child.path">{{ child.meta&&child.meta.title }}</el-menu-item>
      </template>
    </el-sub-menu>
  </template>
   <template >
   </template>
  </el-menu>
  
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import bus from '@/unilt/evenBus.js'

let isCollapse = ref(false)
 //路由
 const { options } = useRouter()
        const routes = options.routes
        const collapsed=ref('')
        const data = reactive({   
            selectedKeys: localStorage.getItem('selectedKeys') ? [localStorage.getItem('selectedKeys')] : [],//默认被选中哪一个
            openKeys: localStorage.getItem('openKeys') ? [localStorage.getItem('openKeys')] : [],//展开菜单
            src: 'https://foruda.gitee.com/images/1699583663424602079/6ae13aa7_1151004.png'
        })

onMounted(() => {
  bus.on('showCollapse', (data) => {
    isCollapse.value = data
  })

})
onUnmounted(() => {

})



const handleOpen = (key, keyPath) => {

}
const handleClose = (key, keyPath) => {

}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px;
  min-height: 400px;
}

.el-menu {
  height: 100vh;
}
</style>