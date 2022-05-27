import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import { store, key } from './store'
// 加載全局樣式
import './styles/index.scss'

createApp(App)
  .use(Router)// 挂载路由
  .use(store, key)
  .mount('#app')// 渲染到根节点
