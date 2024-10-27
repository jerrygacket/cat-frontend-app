<template>
    <MDBNavbar expand="lg" light bg="light" container>
      <MDBNavbarBrand href="#">CAT</MDBNavbarBrand>
      <MDBNavbarToggler
        @click="collapse1 = !collapse1"
        target="#navbarSupportedContent"
      ></MDBNavbarToggler>
      <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
        <MDBNavbarNav class="mb-2 mb-lg-0" right>
            <MDBNavbarItem v-for="link in links" :key="link.title" :to="link.url" :active="$route.path == link.url">
                <span v-html="link.title"></span>
        </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  </template>

<script>
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse
} from 'mdb-vue-ui-kit';
import { ref } from 'vue';

export default {
  components: {
    MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse
  },
  data () {
    return {
        collapse1: ref(false),
        links:[]
    }
  },
  created () {
    this.links = this.$store.getters.getMainMenuLinkks;
  }
}
</script>