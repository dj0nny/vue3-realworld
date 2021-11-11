<template>
  <div class="tag-list" v-if="!loading">
    <span v-if="error"><i>{{ error }}</i></span>
    <div v-else>
      <div v-if="tagList">
        <a href="" class="tag-pill tag-default" v-for="(tag, index) in tagList" :key="index">{{ tag }}</a>
      </div>
      <div v-else>
         No tags are here... yet.
      </div>
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
