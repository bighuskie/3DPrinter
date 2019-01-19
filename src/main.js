import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import VueCookies from 'vue-cookies'
import Vuetify from 'vuetify'

// import 'element-ui/lib/theme-chalk/index.css';
import '../theme/index.css'//element主题色更换
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'vuetify/dist/vuetify.min.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);
Vue.use(ElementUI);
Vue.use(VueCookies)
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
