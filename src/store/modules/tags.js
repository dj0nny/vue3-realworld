import axiosInstance from '../../api';

export default {
  namespaced: true,
  state: {
    tagsList: [],
    isLoading: false,
    error: null,
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setTags(state, payload) {
      state.tagsList = payload;
    },
  },
  actions: {
    getTags({ commit }) {
      commit('setLoading', true);
      commit('setError', null);

      axiosInstance.get('/tags').then((res) => {
        const { tags } = res.data;
        commit('setTags', tags);
      }).catch(({ response }) => {
        commit('setError', response.data.errors);
      }).finally(() => {
        commit('setLoading', false);
      });
    },
  },
};
