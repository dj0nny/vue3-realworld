import { createStore } from 'vuex';

import tags from './modules/tags';

export default createStore({
  modules: {
    tags,
  },
});
