import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "order",
    component: () => import("../views/order.vue"),
  },
  {
    path: "/worker",
    name: "worker",
    component: () => import("../views/worker.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/listPopup",
    name: "listPopup",
    component:() => import("../components/order/workerListPopup.vue")
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/line/ad',
  routes
})

export default router
