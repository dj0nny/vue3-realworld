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
  },
  actions: {
    getUser({ commit }) {
      commit('setLoading', true);
      commit('setError', null);

      if (localStorage.getItem('token')) {
        axiosInstance.get('/user', {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
          },
        }).then(({ data }) => {
          commit('setUser', data.user);
        }).catch(({ response }) => {
          commit('setError', response.data.error);
        }).finally(() => {
          commit('setLoading', false);
        });
      }
      commit('setLoading', false);
    },
    register({ commit }, payload) {
      commit('setLoading', true);
      commit('setError', null);

      return new Promise((resolve, reject) => {
        axiosInstance.post('/users', payload).then(({ data }) => {
          commit('setUser', data.user);
          localStorage.setItem('token', data.user.token);
          resolve(data.user);
        }).catch(({ response }) => {
          commit('setError', response.data.errors);
          reject(response.data.errors);
        }).finally(() => {
          commit('setLoading', false);
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
          resolve(data.user);
        }).catch(({ response }) => {
          commit('setError', response.data.errors);
          reject(response.data.errors);
        }).finally(() => {
          commit('setLoading', false);
        });
      });
    },
  },
};
