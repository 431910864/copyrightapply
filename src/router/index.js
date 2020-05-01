
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history' 
})
//mode: 'history' 打包后本地运行空白

const turnTo = (to, access, next) => {

}

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title =to.meta.title;
  }
  //const token = getToken()
  next()
})

router.afterEach(to => {
  window.scrollTo(0, 0)
})

export default router
