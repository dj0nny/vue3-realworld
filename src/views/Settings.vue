<template>
  <div class="settings-page" v-bind="!userLoading">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Your Settings</h1>

            <form>
              <fieldset>
                <fieldset class="form-group">
                  <input class="form-control" type="text" placeholder="URL of profile picture">
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg" type="text" placeholder="Your Name">
                </fieldset>
                <fieldset class="form-group">
                    <textarea class="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea>
                </fieldset>
                <fieldset class="form-group">
                    <input class="form-control form-control-lg" type="text" placeholder="Email">
                </fieldset>
                <fieldset class="form-group">
                    <input class="form-control form-control-lg" type="password" placeholder="Password">
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right">
                    Update Settings
                </button>
              </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Settings',
  setup() {
    const store = useStore();

    const userLoading = computed(() => store.state.auth.isLoading);

    const urlProfile = ref('');
    const name = ref('');
    const bio = ref('');
    const email = ref('');
    const password = ref('');

    return {
      userLoading,
      urlProfile,
      name,
      bio,
      email,
      password,
    };
  },
};
</script>
