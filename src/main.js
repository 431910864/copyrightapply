
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/js/rem.js'
//import Vant, {Lazyload} from 'vant';
//import 'vant/lib/index.css';
//Vue.use(Lazyload);
//Vue.use(Vant);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
