import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: ()=>import('../views/main.vue'),
  },
  {
    path: '/albamon',
    name: 'albamon',
    component: ()=>import('../views/albamon.vue'),
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: '/line/ad',
  routes
})

export default router
