import { createStore } from 'vuex';

import tags from './modules/tags';
import articles from './modules/articles';
import auth from './modules/auth';

export default createStore({
  modules: {
    tags,
    articles,
    auth,
  },
});
