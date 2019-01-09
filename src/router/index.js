import Vue from 'vue'
import Router from 'vue-router'
import ElementUi from '@/components/ElementUi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/elementUi',
      name: 'ElementUi',
      component: ElementUi
    }
  ]
})
