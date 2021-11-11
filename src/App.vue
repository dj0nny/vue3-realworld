<template>
  <Navigation />
  <router-view/>
  <Footer />
</template>

<script>
import { useStore } from 'vuex';

import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
  },
  setup() {
    const store = useStore();

    store.dispatch('auth/getUser');
  },
};
</script>
