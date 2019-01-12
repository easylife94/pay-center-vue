import Vue from 'vue'
import Router from 'vue-router'
import ElementUi from '@/components/ElementUi'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import ChannelManager from '@/components/ChannelManager'
import Test from '@/components/Test'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: 'channel',
          name: 'ChannelManager',
          component: ChannelManager
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/elementUi',
      name: 'ElementUi',
      component: ElementUi
    }
  ]
})

// 登录验证
router.beforeEach((to, from, next) => {
  // 遍历所有匹配路由记录下的元信息
  if (to.matched.some(record => record.meta.requireAuth)) {
    // 从localStorage中获取用户信息
    if (window.localStorage.getItem('userInfo') == null) {
      next({
        path: '/login',
        query: {redirect: to.fullPath}// 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
