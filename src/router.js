import Vue from 'vue'
import Router from 'vue-router'
import router from './router'

import home from './views/index.vue'
import onlinePrint from './views/onlinePrint.vue'
import userMsg from './views/userMsg.vue'
import administrator from './views/administrator.vue'
import about from './views/about.vue'
import userOrderShow from './views/userOrderShow.vue'
import userHistoryShow from './views/userHistoryShow.vue'
import register from './views/userRegister.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import Token from './define.js'
Vue.use(Token);
Vue.use(VueAxios,axios);
Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/onlinePrint',
      name: 'onlinePrint',
      component: onlinePrint,
      meta:{requiresAuth:true},
      children: [
        {
          path: "all",
          name: "all",
          component: () => import('./components/masklibrary/masklibrary.vue'),
          children: [{
            path: "modelDetail",
            name: "modelDetail",
            component: () => import('./components/masklibrary/modelDetail.vue')
          }]
        },
        {
          path: "select",
          name: "select",
          component: () => import('./components/SelectPrinter/SelectPrinter1.vue'),
        },
        {
          path: "cartoon",
          name: "cartoon",
          component: () => import('./components/masklibrary/masklibrary.vue'),
          children: [{
            path: "modelDetail",
            name: "modelDetail",
            component: () => import('./components/masklibrary/modelDetail.vue')
          }]
        },
        {
          path: "innovate",
          name: "innovate",
          component: () => import('./components/masklibrary/masklibrary.vue'),
          children: [{
            path: "modelDetail",
            name: "modelDetail",
            component: () => import('./components/masklibrary/modelDetail.vue')
          }]
        },
        {
          path: "education",
          name: "education",
          component: () => import('./components/masklibrary/masklibrary.vue'),
          children: [{
            path: "modelDetail",
            name: "modelDetail",
            component: () => import('./components/masklibrary/modelDetail.vue')
          }]
        }
      ]
    },
    {
      path: '/userMsg',
      name: 'userMsg',
      component:userMsg,
      children: [{
        path: "historyPreview",
        name: "historyPreview",
        component: () => import('./components/userMsg/historyPreview.vue')
      },{
        path: "orderPreview",
        name: "orderPreview",
        component: () => import('./components/userMsg/orderPreview.vue')
      }
    ]
    },
    {
      path: "/userOrderShow",
      name: "userOrderShow",
      component:userOrderShow
    },
    {
      path: "/userHistoryShow",
      name: "userHistoryShow",
      component:userHistoryShow
    },
    {
      path:'/administrator',
      name:'administrator',
      component:administrator,
      children: [{
        path: "select1",
        name: "select1",
        component: () => import('./components/administrator/SelectPrinter1.vue')
      }]
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
    path: '/about',
      name: 'about',
      component: about,
      meta:{requiresAuth:true}  //这个是路由拦截用的，目前路由拦截功能暂时关闭了，不影响
    },
    {
      path: '/login',
        name: 'login',
        component: () => import('./views/userLogin'),
        meta:{requiresAuth:true}  //这个是路由拦截用的，目前路由拦截功能暂时关闭了，不影响
      }
  ]
})

/* 以下是拦截器部分 */
/*路由拦截*/
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