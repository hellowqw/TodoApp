// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router/router'
import Element from 'element-ui';
import 'css/element-ui.css'
import 'css/mixin.less'
Vue.use(Element, { size: 'small' });
Vue.config.productionTip = false
// 访问首页时跳转'/index'
router.beforeEach((to, from, next) => {
  if(to.fullPath==='/'){
    next('/home')
  }else{
    next()
  }
  
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
