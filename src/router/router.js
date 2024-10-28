import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', name: 'Login', component: () => import('@/view/login/Login.vue'), meta: { title: '登录' } },
    {
        path: '/index', name: 'Index',
        component: () => import('@/view/layout/Index.vue'),
        meta: { title: '主页' }
    },
    {
        path: '/system',
        name: 'System',
        component: () => import('@/view/layout/Index.vue'),
        meta: { title: '系统管理' },
        children: [
            {
                path: '/scroll',
                name: 'Scroll',
                component: () => import('@/view/data/Index.vue'),
                meta: { title: '滚动' }
            },
        ]
    }, 
    {
        path: '/system',
        name: 'System',
        component: () => import('@/view/layout/Index.vue'),
        meta: { title: '系统管理' },
        children: [
            {
                path: '/user',
                name: 'User',
                component: () => import('@/view/system/User.vue'),
                meta: { title: '用户管理' }
            },
            {
                path: '/role',
                name: 'Role',
                component: () => import('@/view/system/Role.vue'),
                meta: { title: '角色管理' }
            },
            {
                path: '/dictionary',
                name: 'Dictionary',
                component: () => import('@/view/system/Dictionary.vue'),
                meta: { title: '字典管理' }
            },
        ]
    },
    {
        path: '/compoment',
        name: 'Compoment',
        component: () => import('@/view/layout/Index.vue'),
        meta: { title: '组件管理' },
        children: [
            {
                path: '/image',
                name: 'Image',
                component: () => import('@/view/compoment/Image.vue'),
                meta: { title: '图片预览' }
            },
            {
                path: '/fenye',
                name: 'Fenye',
                component: () => import('@/view/compoment/Fenye.vue'),
                meta: { title: '前端分页' }
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 