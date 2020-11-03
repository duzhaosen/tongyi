import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import VueLazyload from 'vue-lazyload'

Vue.use(ViewUI)
Vue.use(VueLazyload,{
  loading: "image/load.gif",
  error: "image/error.jpg"
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  ViewUI,
  VueLazyload,
  render: h => h(App)
}).$mount('#app')
