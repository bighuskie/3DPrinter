import Vue from 'vue'
import Router from 'vue-router'
import onlinePrint from './views/onlinePrint.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'onlinePrint',
      component: onlinePrint
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('./views/About.vue')
    // }
  ]
})
