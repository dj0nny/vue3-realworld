<template>
  <div v-if="!loading">
    <div v-if="!error">
      <Article v-for="(article, index) in articles" :key="index" :article="article" />
    </div>
    <div v-else>
      <i>{{ error }}</i>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import Article from './Article.vue';

export default {
  name: 'ArticlesList',
  components: {
    Article,
  },
  props: [
    'articles',
    'loading',
    'error',
  ],
};
</script>
