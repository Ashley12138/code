import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import "./assets/font/iconfont.css"
import "./assets/font/iconfont"

// Vue.use(ElementUI);

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
// const app = createApp(App)
// app.mount('#app')