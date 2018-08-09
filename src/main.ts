import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import Icon from 'vue2-svg-icon/Icon.vue';

import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';
import { GraphView } from '@/GraphView';

const gv = new GraphView({});

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.component('icon', Icon);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
