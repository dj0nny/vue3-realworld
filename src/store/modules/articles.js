import axiosInstance from '../../api';

export default {
  namespaced: true,
  state: {
    articlesList: null,
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
    setArticles(state, payload) {
      state.articlesList = payload;
    },
  },
  actions: {
    getArticles({ commit }) {
      commit('setLoading', true);
      commit('setError', null);

      axiosInstance.get('/articles').then((res) => {
        const { articles } = res.data;
        commit('setArticles', articles);
      }).catch(({ response }) => {
        commit('setError', response.data.errors);
      }).finally(() => {
        commit('setLoading', false);
      });
    },
  },
  createArticle({ commit }) {
    commit('setLoading', true);
    commit('setError, false');

    // return new Promise((resolve, reject) => {
    //   axiosInstance.post('/articles');
    // });
  },
};
