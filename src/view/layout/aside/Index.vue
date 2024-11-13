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
    <!-- <a-menu-item>
      <div v-if="collapsed">
        <span class="anticon"></span
        ><span class="Logo-title-fs-18"> 云平台 </span>
      </div>
      <div v-else>
        <span class="anticon"></span>
        <span class="Logo-title-fs-18"> 云平台 </span>
      </div>
    </a-menu-item> -->
    <template v-for="items in routers" :key="items.path">
      <template v-if="!items.hidden">
        <el-menu-item
          :key="items.path"
          v-if="hasOnlychildren(items)"
          :index="items.children[0].path"
        >
          <svg-icon
            :iconName="items.children[0].meta.icon"
            class="icon_all"
          ></svg-icon>
          <span class="anticon"></span>
          <span>
            {{ items.children[0].meta && items.children[0].meta.title }}
          </span>
        </el-menu-item>
        <!--子级-->
        <el-sub-menu v-else :index="items.children[0].path">
          <template #title>
            <svg-icon :iconName="items.meta.icon" class="icon_all"></svg-icon>
            <span class="anticon"></span>
            <span>
              {{ items.meta && items.meta.title }}
            </span>
          </template>

          <template v-if="items.children">
            <el-menu-item
              v-for="child in items.children"
              :key="child.path"
              :index="child.path"
            >
              <template v-if="!child.children">
                <svg-icon
                  :iconName="child.meta.icon"
                  class="icon_all"
                ></svg-icon>
                <span class="anticon"></span>
                <span>
                  {{ child.meta && child.meta.title }}
                </span>
              </template>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </template>
  </el-menu>
</template>
<script setup>
import { useRouter } from "vue-router";
import { onMounted, onUnmounted, reactive, ref } from "vue";
import bus from "@/unilt/evenBus.js";

let isCollapse = ref(false);
//路由
const { options } = useRouter();
const routers = options.routes;

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
  if (!data.children) {
    return false;
  }
  //过滤隐藏的子路由
  const routes = data.children.filter((item) => (item.children ? false : true));
  // 判断最终结果
  if (routes.length == 1) {
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
.icon_all {
  margin: 0 10px 0 0;
  font-size: 20px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 400px;
}

.el-menu {
  height: 100vh;
}
</style>
