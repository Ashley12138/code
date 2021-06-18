import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Find',
    name: 'Find',
    component: () => import('../views/Find.vue')
  },
  {
    path: '/Proto',
    name: 'Proto',
    component: () => import('../views/Prototype.vue')
  },
  {
    path: '/Question',
    name: 'Question',
    component: () => import('../views/Question.vue')
  },
  {
    path: '/BecomePioneer',
    name: 'BecomePioneer',
    component: () => import('../views/BecomePioneer.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
