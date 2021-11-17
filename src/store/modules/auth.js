import axiosInstance from '../../api';

export default {
  namespaced: true,
  state: {
    user: null,
    isLoading: false,
    error: null,
    isAuthenticated: localStorage.getItem('token'),
  },
  getters: {
    checkAuth(state) {
      return state.isAuthenticated;
    },
    getCurrentUser(state) {
      return state.user;
    },
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setAuth(state, payload) {
      state.isAuthenticated = payload;
    },
  },
  actions: {
    getUser({ commit }) {
      commit('setLoading', true);
      commit('setError', null);

      if (localStorage.getItem('token')) {
        return new Promise((resolve, reject) => {
          axiosInstance.get('/user', {
            headers: {
              Authorization: `Token ${localStorage.getItem('token')}`,
            },
          }).then(({ data }) => {
            commit('setUser', data.user);
            commit('setAuth', localStorage.getItem('token'));
            resolve(data.user);
          }).catch(() => {
            localStorage.removeItem('token');
            commit('setAuth', null);
            reject();
          });
        });
      }
      return false;
    },
    register({ commit }, payload) {
      commit('setLoading', true);
      commit('setError', null);

      return new Promise((resolve, reject) => {
        axiosInstance.post('/users', payload).then(({ data }) => {
          commit('setUser', data.user);
          localStorage.setItem('token', data.user.token);
          commit('setAuth', data.user.token);
          commit('setLoading', false);
          resolve(data.user);
        }).catch(({ response }) => {
          commit('setError', response.data.errors);
          commit('setLoading', false);
          reject(response.data.errors);
        });
      });
    },
    login({ commit }, payload) {
      commit('setLoading', true);
      commit('setError', null);

      return new Promise((resolve, reject) => {
        axiosInstance.post('/users/login', payload).then(({ data }) => {
          commit('setUser', data.user);
          localStorage.setItem('token', data.user.token);
          commit('setAuth', data.user.token);
          commit('setLoading', false);
          resolve(data.user);
        }).catch(({ response }) => {
          commit('setError', response.data.errors);
          commit('setLoading', false);
          reject(response.data.errors);
        });
      });
    },
  },
};
