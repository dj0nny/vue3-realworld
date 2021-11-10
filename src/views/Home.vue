<template>
  <div class="home-page">

    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">

        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link disabled" href="">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>

          <ArticlesList :articles="articles" :error="articlesError" :loading="articlesLoading" />

        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <Tags :tagsList="tags" :error="tagsError" :loading="tagsLoading" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Tags from '../components/Tags.vue';
import ArticlesList from '../components/ArticlesList.vue';

export default {
  name: 'Home',
  components: {
    Tags,
    ArticlesList,
  },
  setup() {
    const store = useStore();

    const tags = computed(() => store.state.tags.tagsList);
    const tagsLoading = computed(() => store.state.tags.isLoading);
    const tagsError = computed(() => store.state.tags.error);

    const articles = computed(() => store.state.articles.articlesList);
    const articlesLoading = computed(() => store.state.articles.isLoading);
    const articlesError = computed(() => store.state.articles.error);

    store.dispatch('tags/getTags');
    store.dispatch('articles/getArticles');

    return {
      tags,
      tagsLoading,
      tagsError,
      articles,
      articlesLoading,
      articlesError,
    };
  },
};
</script>
