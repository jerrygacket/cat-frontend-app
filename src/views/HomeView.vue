<template>
  <div>
    <main>
      <template v-if="isLoggedIn">
        <HomePageCards />
      </template>
  </main>
  </div>
</template>

<script>
import HomePageCards from '@/components/HomePageCards.vue';

export default {
  components: {
    HomePageCards
  },
  methods: {
    isLoggedIn () {
      return this.$store.getters.checkAuth;
    }
  }
}
</script>