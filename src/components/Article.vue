<template>
  <div class="article-preview">
    <div class="article-meta">
      <router-link :to="{ name: '' }"><img :src="article.author.image"/></router-link>
      <div class="info">
        <router-link :to="{ name: '' }" class="author">{{ article.author.username }}</router-link>
        <span class="date">{{ new Date(article.createdAt).toDateString() }}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
    <router-link :to="{ name: 'ArticleDetails', params: { slug: article.slug } }" class="preview-link">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: [
    'article',
  ],
};
</script>
