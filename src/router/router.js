import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [    
    {
      path: '/',
      name: 'index',
      component: () => import ('view/index'),
      children:[
        {
          path: '/home',
          name: 'home',
          component: () => import ('view/home/home')
        },
        {
          path: '/collect',
          name: 'collect',
          component: () => import ('view/collect/collect')
        },
      ]
    }
  ]
})
