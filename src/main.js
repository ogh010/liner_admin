import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/css/css.css'
import vuetify from './plugins/vuetify'
import mixin from './mixin'

Vue.config.productionTip = false
Vue.mixin(mixin)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
