<template>
    <MDBNavbar expand="lg" light bg="light" container>
      <MDBNavbarBrand href="/">CAT</MDBNavbarBrand>
      <MDBNavbarToggler
        @click="collapse1 = !collapse1"
        target="#navbarSupportedContent"
      ></MDBNavbarToggler>
      <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
        <MDBNavbarNav class="mb-2 mb-lg-0" right>
          <template v-if="isLoggedIn()">
            <MDBNavbarItem v-for="link in links" :key="link.id" :to="link.url" :active="$route.path == link.url">
                <span v-html="link.title"></span>
        </MDBNavbarItem>
          </template>
        <modalLogin v-if="!isLoggedIn()" />
  
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
import modalLogin from '@/components/modals/ModalLogin.vue'

export default {
  components: {
    MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  modalLogin
  },
  data () {
    return {
        collapse1: ref(false),
        links:[],
    }
  },
  created () {
    this.links = this.$store.getters.getMainMenuLinks;
  },
  methods: {
    isLoggedIn () {
      return this.$store.getters.checkAuth;
    }
  }
}
</script>