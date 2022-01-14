import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "order",
    component: () => import("../views/order.vue"),
    beforeEnter (to, from, next) {
      if (!localStorage.getItem('ln_co')) {
        next({ name: 'login'})
      } else {
        next()
      }
    }
  },
  {
    path: "/worker",
    name: "worker",
    component: () => import("../views/worker.vue"),
    beforeEnter (to, from, next) {
      if (!localStorage.getItem('ln_co')) {
        next({ name: 'login'})
      } else {
        next()
      }
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/listPopup",
    name: "listPopup",
    component:() => import("../components/worker/WorkerAuthPopup.vue"),
    beforeEnter (to, from, next) {
      if (!localStorage.getItem('ln_co')) {
        next({ name: 'login'})
      } else {
        next()
      }
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/line/ad',
  routes
})

export default router
