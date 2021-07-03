import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // 首页
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  // 注册
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  // 登录
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  // 找项目
  {
    path: '/Find',
    name: 'Find',
    component: () => import('../views/Find.vue')
  },
  // 原型广场
  {
    path: '/Proto',
    name: 'Proto',
    component: () => import('../views/Prototype.vue')
  },
  // 常见问题
  {
    path: '/Question',
    name: 'Question',
    component: () => import('../views/Question.vue')
  },
  // 帮助中心
  {
    path: '/Help',
    name: 'Help',
    component: () => import('../views/Help.vue')
  },
  // 成为开发者
  {
    path: '/BecomePioneer',
    name: 'BecomePioneer',
    component: () => import('../views/BecomePioneer.vue')
  },
  // 项目详情
  {
    path: '/Detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  },
  // 发布项目（还没写）
  {
    path: '/Publish',
    name: 'Publish',
    component: () => import('../views/Publish.vue')
  },
  // 我是需求方/开发者
  {
    path: '/Category',
    name: 'Category',
    component: () => import('../views/Category.vue')
  },
  // 点击我是需求方/开发者下方的列表
  {
    path: '/ListMenu',
    name: 'ListMenu',
    component: () => import('../views/ListMenu.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
