<template>
    <MDBRow class="m-4">
        <MDBCol class="d-flex justify-content-center" v-for="link in links" :key="link.id">
            <MDBCard text="center">
        <MDBCardBody>
        <MDBCardTitle><span v-html="link.title"></span></MDBCardTitle>
        <MDBCardText>
            <span v-html="link.description"></span>
        </MDBCardText>
        <MDBBtn color="primary" tag="router-link" :to="link.url">Перейти</MDBBtn>
    </MDBCardBody>
    </MDBCard>
        </MDBCol>
    </MDBRow>
</template>

<script>
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBCol,
    MDBRow
} from 'mdb-vue-ui-kit';
import { ref } from 'vue';

export default {
  components: {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBCol,
    MDBRow
  },
  data () {
    return {
        collapse1: ref(false),
        links:[]
    }
  },
  created () {
    this.links = this.$store.getters.getHomePageLinks;
  }
}
</script>