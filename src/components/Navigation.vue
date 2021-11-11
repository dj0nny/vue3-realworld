<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">conduit</router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" :to="{ name: 'Create' }" v-if="isAuth">
            <i class="ion-compose"></i>&nbsp;New Article
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" :to="{ name: 'Settings' }" v-if="isAuth">
            <i class="ion-gear-a"></i>&nbsp;Settings
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" :to="{ name: 'SignIn' }" v-if="!isAuth">Sign in</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" :to="{ name: 'SignUp' }" v-if="!isAuth">Sign up</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Navigation',
  setup() {
    const store = useStore();

    const isAuth = computed(() => store.getters['auth/checkAuth']);

    return {
      isAuth,
    };
  },
};
</script>
