import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('../pages/Home')
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
