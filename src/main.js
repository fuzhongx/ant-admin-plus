import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router/router.js'
import '@/unilt/svg.js'
import SvgIcon from '@/components/SvgIcon/Index.vue'
import VirtualScroller from 'vue3-virtual-scroller';
import 'vue3-virtual-scroller/dist/vue3-virtual-scroller.css';
import 'animate.css';


// 定义特性标志
window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

const app=createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(VirtualScroller)
.component('svg-icon',SvgIcon)
app.mount('#app')
