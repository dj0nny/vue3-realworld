<template>
  <div class="tag-list" v-if="!loading">
    <span v-if="error"><i>{{ error }}</i></span>
    <div v-else>
      <a href="" class="tag-pill tag-default" v-for="(index, tag) in tagList" :key="index">{{ tag }}</a>
    </div>
  </div>
  <span v-else>Loading...</span>
</template>

<script>
export default {
  name: 'Tags',
  props: [
    'tagList',
    'error',
    'loading',
  ],
};
</script>
