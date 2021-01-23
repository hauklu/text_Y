import Vue from 'vue'
import Router from 'vue-router'
import module1 from './module/module1'

Vue.use(Router)

var router = new Router({
  routes: [
    ...module1
  ],
  scrollBehavior: () => ({
    x: 0,
    y: 0
  })
})

router.beforeEach((to, from, next) => {
  // 页面头标题
  document.title = to.meta.title
  next()
})

export default router
