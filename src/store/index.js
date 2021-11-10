import { createStore } from 'vuex';

import tags from './modules/tags';
import articles from './modules/articles';

export default createStore({
  modules: {
    tags,
    articles,
  },
});
