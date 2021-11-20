import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios';
import App from './App.vue';
import router from './router/index';
import store from './store';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$store = store;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(Vuex);

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem('store', JSON.stringify(state));
});

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    this.$store.commit('initialiseStore');
  },
}).$mount('#app');
