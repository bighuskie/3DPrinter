import Vue from 'vue'
import Router from 'vue-router'
import router from './router'
import onlinePrint from './views/onlinePrint.vue'
import {getCookie,setCookie,delCookie} from '../public/lib/util/util';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Token from './define.js'
Vue.use(Token);
Vue.use(VueAxios,axios);
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'onlinePrint',
      component: onlinePrint,
      meta:{requiresAuth:true}
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/userLogin.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/userRegister.vue')
    },
    {
      path: '/status',
      name: 'status',
      component: () => import('./views/userRegister.vue'),
      meta:{requiresAuth:true}
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log('拦截')
  //判断要去的路由有没有requiresAuth
  if (to.meta.requiresAuth) {  
    if (Token.tokenMsg=='') {  
      next();
    }
    else{
      next({
        path: '/login'
      });
    }
  } else {
    next(); //如果无需token,那么随它去吧
  }
})
// http request 拦截器
axios.interceptors.request.use(
  config => {    
    if (Token.tokenMsg!=='') {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.authorization = `token ${tokenMsg}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });
// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          router.replace({
            path: '/login'
          });
      }
    }
    return Promise.reject(error.response.data);   // 返回接口返回的错误信息
  });