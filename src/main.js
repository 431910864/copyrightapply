
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import config from './config'
import '@/assets/js/rem.js'
import api from './api'
import locache from './assets/js/locache';

router.beforeEach((to, from, next) => {
  const token = store.state.Token;
  const isTokenPage = ['/editPassword', '/MyService'].map((item) => item.toLowerCase());
  if (!token && isTokenPage.includes(to.path.toLowerCase())) {
    next('/login');
    return;
  }
  next();
})
//import Vant, {Lazyload} from 'vant';
//import 'vant/lib/index.css';
//Vue.use(Lazyload);
//Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$axios = api;
Vue.prototype.$locache = locache;
Vue.prototype.$wx = config;
config.GetCode();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
