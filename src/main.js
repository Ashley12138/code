// import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import "./assets/font/iconfont.css"
import "./assets/font/iconfont"

// 定义公共方法
// import axios from "axios";
// Vue.prototype.axios=axios.create({
//   baseURL:"https://codemart.com/api"
// });

// 引入echarts
// import echarts from "echarts"
// Vue.prototype.$echarts = echarts

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
// const app = createApp(App)
// app.mount('#app')