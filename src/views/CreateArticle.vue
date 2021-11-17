<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">

          <div class="col-md-10 offset-md-1 col-xs-12">
            <form>
              <fieldset>
                <fieldset class="form-group">
                  <input type="text" v-model="title" class="form-control form-control-lg" placeholder="Article Title">
                </fieldset>
                <fieldset class="form-group">
                  <input type="text" v-model="description" class="form-control" placeholder="What's this article about?">
                </fieldset>
                <fieldset class="form-group">
                  <textarea v-model="body" class="form-control" rows="8" placeholder="Write your article (in markdown)"></textarea>
                </fieldset>
                <fieldset class="form-group">
                  <input type="text" v-model="tags" class="form-control" placeholder="Enter tags">
                  <div class="tag-list"></div>
                </fieldset>
                <button class="btn btn-lg pull-xs-right btn-primary" type="button">
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'CreateArticle',
  setup() {
    const title = ref('');
    const description = ref('');
    const body = ref('');
    const tags = ref('');

    return {
      title,
      description,
      body,
      tags,
    };
  },
};
</script>
