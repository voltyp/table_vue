import Vue from 'vue';
import App from './App.vue';
import store from './store';
import DateFilter from './filters/date.filter';
import moneyFilter from './filters/money.filter';
import './components';

import './assets/sass/index.scss';

Vue.config.productionTip = false;
Vue.filter('date', DateFilter);
Vue.filter('money', moneyFilter);
new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
