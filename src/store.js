import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  mutations: {
    initialiseStore(state) {
      // Check if the ID exists
      if (localStorage.getItem('store')) {
        // Replace the state object with the stored item
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store'))),
        );
      }
    },
  },
  namespaced: true,
  modules: {
    user,
  },
});

export default store;
