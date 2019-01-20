import Vue from 'vue'
import Router from 'vue-router'
import onlinePrint from './views/onlinePrint.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/onlinePrint'
    },
    {
      path: '/onlinePrint',
      name: 'onlinePrint',
      component: onlinePrint,
      children: [{
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
      path: '/login',
      name: 'login',
      component: () => import('./views/userLogin.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/about')
    }
  ]
})