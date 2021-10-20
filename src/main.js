import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import './assets/css/main.css'
import './assets/icon/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios';
import VueAxios from "vue-axios";
import index from "./store";

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAxios,axios)
Vue.use(router)
Vue.use(Vuex)


new Vue({
  el: '#app',
  router,
  store: new Vuex.Store(index),
  render: h => h(App)
})
