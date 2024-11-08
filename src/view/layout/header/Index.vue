<template>
    <div class="header-w-h">
        <div class="header-l">
            <svg-icon iconName="open" class="icon-fs-30" @click="btnCollapse" v-if="!isCollapses"></svg-icon>
            <svg-icon iconName="close" class="icon-fs-30" @click="btnCollapse" v-else></svg-icon>
        </div>
        <div class="header-m">
        <el-breadcrumb :separator-icon="ArrowRight" v-for="item in navs" :key="item.paht">
            <el-breadcrumb-item :to=item.path>{{item.path}}</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        <div class="header-r">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    <svg-icon iconName="admin" class="admin_icon_20"></svg-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="a">Action 1</el-dropdown-item>
                        <el-dropdown-item command="b">Action 2</el-dropdown-item>
                        <el-dropdown-item command="c">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { useRoute} from "vue-router";
import { computed, onMounted, reactive, ref} from 'vue';
import bus from '@/unilt/evenBus.js'

const isCollapses = ref(false)

const {route}=useRoute()
console.log(route,1);
const navs=computed(()=>{
    return route.matched
})
onMounted(()=>{
   
})
function btnCollapse() {
    isCollapses.value = !isCollapses.value
    bus.emit('showCollapse', isCollapses.value)
}
function handleCommand(res){
console.log(res);
}


</script>

<style lang="scss" scoped>
.admin_icon_20{
    font-size: 30px;
}
.el-breadcrumb {
    font-size: 15px;
    line-height: 4;
    padding-left: 20px;
    float: left;

}
.header-w-h {
    height: 60px;
    
}
.header-r{
    height: 60px;
    line-height: 60px;
    vertical-align: auto;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header-m,.header-l{
    float: left;
}
.el-dropdown {
    vertical-align: baseline;

}
.icon-fs-30 {
    height: 60px;
    font-size: 30px;
    line-height: 60px;
    color: rgb(88, 87, 87);
}

</style>