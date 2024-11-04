<template>
  <el-menu
    default-active="1"
    router
    class="el-menu-vertical-demo dark-mode"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    text-color="#fff"
    active-text-color="rgb(64, 158, 255)"
    background-color="rgb(48, 65, 86)"
  >
    <template v-for="items in routers" :key="items.path">
      <template v-if="!items.hidden">
        <el-menu-item
          :key="items.path"
          :index="items.path"
          v-if="hasOnlychildren(items)"
        >
          <el-icon><location /></el-icon>
          <span class="anticon"></span>
          <span>
            {{ items.children[0].meta && items.children[0].meta.title }}
          </span>
        </el-menu-item>
      </template>
      
        <el-sub-menu v-else>
          <template #title>
            <el-icon><location /></el-icon>
            <span class="anticon">{{
              items.meta && items.meta.title
            }}</span></template
          >
          <template v-if="items.children.length">
            <el-menu-item
              :index="childs.path"
              v-for="childs in items.children"
              :key="childs.path"
            >
              <template v-if="!childs.children">
                {{ childs.meta && childs.meta.title }}
              </template>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
  </el-menu>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import { onMounted, onUnmounted, reactive, ref } from "vue";
import bus from "@/unilt/evenBus.js";

let isCollapse = ref(false);
//路由
const { options } = useRouter();
const routers = options.routes;
console.log(routers, 11);
const collapsed = ref("");
const data = reactive({
  selectedKeys: localStorage.getItem("selectedKeys")
    ? [localStorage.getItem("selectedKeys")]
    : [], //默认被选中哪一个
  openKeys: localStorage.getItem("openKeys")
    ? [localStorage.getItem("openKeys")]
    : [], //展开菜单
});

//检测是否只有一个子路由
const hasOnlychildren = (data) => {
  console.log(data,1);
  if (!data.children) {
    return false;
  }
  //过滤隐藏的子路由
  const routes = data.children.filter(item=>item.children ? false : true);
  // 判断最终结果
  if (routes.length == 1) {
    console.log(data,'等于1');
    return true;
  } else {
    return false;
  }
 
};

onMounted(() => {
  bus.on("showCollapse", (data) => {
    isCollapse.value = data;
  });
});
onUnmounted(() => {});

const handleOpen = (key, keyPath) => {};
const handleClose = (key, keyPath) => {};
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
