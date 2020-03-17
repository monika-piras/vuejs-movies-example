import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import { BootstrapVue,BIcon, BIconChevronLeft, BIconChevronRight} from 'bootstrap-vue';

import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.component('BIcon', BIcon);
Vue.component('BIconChevronLeft', BIconChevronLeft);
Vue.component('BIconChevronRight', BIconChevronRight);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
