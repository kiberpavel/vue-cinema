import api from '../api/api';

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';

export default {
  namespaced: true,
  state: {
    myStatus: '',
  },
  getters: {
    isNotAutorized: (state) => state.myStatus === '' || typeof state.myStatus === 'undefined',
  },
  mutations: {
    setMyStatus(state, payload) {
      state.myStatus = payload;
    },
  },
  actions: {
    LOGIN({ commit }, payload) {
      return new Promise((resolve, reject) => {
        api.loginUser(payload)
          .then(({ data }) => {
            commit('setMyStatus', data.meta.token);
            api.setHeader('Authorization', `Bearer ${data.meta.token}`);
            resolve(data);
          })
          .catch();
      });
    },
    REGISTER: ({ commit }, { name, email, password }) => {
      api.registerUser({ name, email, password })
        .then(({ data }) => {
          if (data.meta.token) {
            commit('setMyStatus', data.meta.token);
            api.setHeader('Authorization', `Bearer ${data.meta.token}`);
          }
        });
    },
    LOGOUT: ({ commit }) => {
      commit('setMyStatus', undefined);
    },
  },
};
