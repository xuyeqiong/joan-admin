import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', meta: { title: '首页' }, component: () => import('../views/home/index.vue') },
  { path: '/login', name: 'login', meta: { title: '登录' }, component: () => import('../views/login/index.vue') }
]
const router = createRouter({
  history: createWebHistory(), // 路由模式
  routes// 路由规则
})
export default router
