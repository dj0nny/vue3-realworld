<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'SignIn' }">Have an account?</router-link>
          </p>

          <ul class="error-messages">
            <li v-for="(error, index) in registrationError" :key="index">{{index}} {{ filterError(index) }}</li>
          </ul>

          <form @submit.prevent="fireRegistration">
            <fieldset class="form-group">
              <input v-model="username" class="form-control form-control-lg" type="text" placeholder="Your Name">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="email" class="form-control form-control-lg" type="text" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="password" class="form-control form-control-lg" type="password" placeholder="Password">
            </fieldset>
            <button type="submit" class="btn btn-lg btn-primary pull-xs-right">
                Sign up
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'Register',
  setup() {
    const store = useStore();
    const router = useRouter();

    const username = ref('');
    const email = ref('');
    const password = ref('');

    const registrationError = computed(() => store.state.auth.error);

    const fireRegistration = () => {
      const user = {
        username: username.value,
        email: email.value,
        password: password.value,
      };

      store.dispatch('auth/register', { user }).then(() => {
        router.push({ name: 'Home' });
      });
    };

    const filterError = (error) => `${registrationError.value[error]}`;

    store.commit('auth/setError', null);

    return {
      username,
      email,
      password,
      fireRegistration,
      registrationError,
      filterError,
    };
  },
};
</script>
