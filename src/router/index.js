import Vue from 'vue'
import Router from 'vue-router'
import Danmaku from '@/components/danmaku'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Danmaku',
      component: Danmaku
    }
  ]
})
