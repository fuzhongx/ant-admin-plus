<template>
    <div class="header-w-h">
        <div class="header-l">
            <svg-icon iconName="open" class="icon-fs-30" @click="btnCollapse" v-if="!isCollapses"></svg-icon>
            <svg-icon iconName="close" class="icon-fs-30" @click="btnCollapse" v-else></svg-icon>
        </div>
        <div class="header-r">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="a">Action 1</el-dropdown-item>
                        <el-dropdown-item command="b">Action 2</el-dropdown-item>
                        <el-dropdown-item command="c">Action 3</el-dropdown-item>
                        <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import bus from '@/unilt/evenBus.js'

const isCollapses = ref(false)

function btnCollapse() {
    isCollapses.value = !isCollapses.value
    bus.emit('showCollapse', isCollapses.value)
}

</script>

<style lang="scss" scoped>
.header-w-h {
    height: 60px;
    display: flex;
    justify-content: space-between;
}
.header-r{
    height: 60px;
    line-height: 60px;
    vertical-align: auto;
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