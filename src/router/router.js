import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: '/', name: 'Login',  hidden: true, component: () => import('@/view/login/Login.vue'), meta: { title: '登录' } },
    {
        path: '/index', name: 'Index',
        component: () => import('@/view/layout/Index.vue'),
        meta: { title: '工作台' },
        redirect:'/homeindex',
        children: [
            {
                path: '/homeindex', name: 'HomeIndex',
                component: () => import('@/view/home/Index.vue'),
                meta: { title: '主页',icon:'home' }
            },
        ]
    },
    {
        path: '/device', name: 'Device',
        component: () => import('@/view/layout/Index.vue'),
        meta: { title: '设备管理' },
        children: [
            {
                path: '/deviceIndex', name: 'DeviceIndex',
                component: () => import('@/view/device/Index.vue'),
                meta: { title: '设备详情',icon:'device' }
            },
        ]
    },
    {
        path: '/error',
        name: 'Error',
        component: () => import('@/view/layout/Index.vue'),
        meta: { title: '报警管理' },
        children: [
            {
                path: '/errorindex',
                name: 'ErrorIndex',
                component: () => import('@/view/error/Index.vue'),
                meta: { title: '报警详情',icon:'error' },
            },
        ]

    },
    {
        path: '/datas',
        name: 'Datas',
        component: () => import('@/view/layout/Index.vue'),
        meta: { title: '数据检测' },
        children: [
            {
                path: '/datasIndex',
                name: 'DatasIndex',
                component: () => import('@/view/data/Index.vue'),
                meta: { title: '监测结果',icon:'datas' },
            },
        ]

    },
    {
        path: '/video',
        name: 'Video',
        component: () => import('@/view/layout/Index.vue'),
        meta: { title: '大华视频' },
        children: [
            {
                path: '/videoIndex',
                name: 'VideoIndex',
                component: () => import('@/view/video/Index.vue'),
                meta: { title: '大华视频',icon:'video' },
            },
        ]

    },
    {
        path: '/system',
        name: 'System',
        component: () => import('@/view/layout/Index.vue'),
        meta: { title: '系统管理',icon:'system' },
        children: [
            {
                path: '/user',
                name: 'User',
                component: () => import('@/view/system/User.vue'),
                meta: { title: '用户管理',icon:'user' }
            },
            {
                path: '/role',
                name: 'Role',
                component: () => import('@/view/system/Role.vue'),
                meta: { title: '角色管理',icon:'role' }
            },
            {
                path: '/dictionary',
                name: 'Dictionary',
                component: () => import('@/view/system/Dictionary.vue'),
                meta: { title: '字典管理',icon:'home' }
            },
        ]
    },
    {
        path: '/compoment',
        name: 'Compoment',
        component: () => import('@/view/layout/Index.vue'),
        meta: { title: '组件管理',icon:'compoment' },
        children: [
            {
                path: '/image',
                name: 'Image',
                component: () => import('@/view/compoment/Image.vue'),
                meta: { title: '图片预览',icon:'' }
            },
            {
                path: '/fenye',
                name: 'Fenye',
                component: () => import('@/view/compoment/Fenye.vue'),
                meta: { title: '前端分页',icon:'' }
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router 