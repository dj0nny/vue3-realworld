<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'SignUp' }">Don't have an account?</router-link>
          </p>

          <ul class="error-messages">
            <li v-for="(error, index) in loginError" :key="index">{{index}} {{ filterError(index) }}</li>
          </ul>

          <form @submit.prevent="fireLogin">
            <fieldset class="form-group">
              <input  v-model="email" class="form-control form-control-lg" type="text" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="password" class="form-control form-control-lg" type="password" placeholder="Password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
                Sign In
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const store = useStore();
    const router = useRouter();

    const email = ref('');
    const password = ref('');

    const loginError = computed(() => store.state.auth.error);

    const fireLogin = () => {
      const user = {
        email: email.value,
        password: password.value,
      };

      console.log(user);

      store.dispatch('auth/login', { user }).then(() => {
        router.push({ name: 'Home' });
      });
    };

    const filterError = (error) => `${loginError.value[error]}`;

    store.commit('auth/setError', null);

    return {
      email,
      password,
      fireLogin,
      loginError,
      filterError,
    };
  },
};
</script>
