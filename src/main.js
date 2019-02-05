import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import VueCookies from 'vue-cookies'
import '../theme/index.css' //element主题色更换
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Token from './define.js'
Vue.prototype.Token = Token;
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.use(VueCookies)
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')