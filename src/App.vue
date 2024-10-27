<template>
  <MDBContainer fluid>
    <navBar />
    <RouterView />
  </MDBContainer>
</template>

<script>
import navBar from '@/components/NavBar.vue';
import { MDBContainer } from "mdb-vue-ui-kit";
export default {
  components: {
    MDBContainer,
    navBar
  },
  
}
</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color:blue
  }
}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
