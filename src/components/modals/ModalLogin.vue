<template>
    <MDBBtn
    color="primary"
    aria-controls="loginModal"
    size="sm" outline="secondary"
    @click="openModal()"
  >
    Вход
  </MDBBtn>
    <MDBModal
    id="loginModal"
    tabindex="-1"
    labelledby="loginModalLabel"
    v-model="modalLogin"
    @hide="closeModal()"
  >
  <MDBRow tag="form" class="g-3 needs-validation" novalidate @submit.prevent="onSubmit">
    <MDBModalHeader>
        <MDBModalTitle>Modal title</MDBModalTitle>
      </MDBModalHeader>
      <MDBModalBody>
        
      <!-- Email input -->
      <MDBInput
        type="email"
        label="Email address"
        id="form1Email"
        v-model="form1Email"
        wrapperClass="mb-1"
        :invalidFeedback="getErrors('form1Email')"
        @change="v$.form1Email.$touch()"
      />
      <div class="form-item mb-4" :class="{ errorInput:  getErrors('form1Email') }">
    <div class="error-text">{{ getErrors('form1Email') }}</div>
  </div>
      <!-- Password input -->
      <MDBInput
        type="password"
        label="Password"
        id="form1Password"
        v-model="form1Password"
        wrapperClass="mb-1"
        :invalidFeedback="getErrors('form1Password')"
        validFeedback="Looks good!"
        @change="v$.form1Password.$touch()"
      />
      <div class="form-item mb-4" :class="{ errorInput:  getErrors('form1Password') }">
    <div class="error-text">{{ getErrors('form1Password') }}</div>
  </div>
    
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" aria-label="close" @click.stop="closeModal()"> Закрыть </MDBBtn>
        <MDBBtn color="primary" type="submit"> Вход </MDBBtn>
      </MDBModalFooter>
    </MDBRow>
    </MDBModal>
    
    
  </template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import {
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBRow,
  MDBInput
} from 'mdb-vue-ui-kit';

export default {
    components: {
        MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBRow,
  MDBInput
    },
    setup () {
        return { v$: useVuelidate() }
    },
    data () {
        return {
            form1Email: '',
            form1Password: '',
            modalLogin: false,
        }
    },
    validations: {
        form1Password: {
            required
        },
        form1Email: {
            required
        }
    },
    methods: {
        onSubmit () {
            this.v$.$touch();
            // console.log(this.v$)
            if (!this.v$.$invalid) {
                const user = {
                    email: this.form1Email,
                    password: this.form1Password
                }
                console.log(user);
                this.closeModal();
            }
        },
        closeModal() {
            this.form1Email = '';
            this.form1Password = '';
            this.v$.$reset();
            this.modalLogin = false;
            return false;
        },
        openModal() {
            this.modalLogin = true;
        },
        getErrors(field) {
            console.log(this.v$[field].$errors.map((x) => x.$message).join(', '))
            return this.v$[field].$errors.map((x) => x.$message).join(', ')
        },
    }
}
</script>

<style>
.form-item .error-text {
    display: none;
    margin-bottom: 8px;
    font-size: 13.4px;
    color: brown;
}
.form-item.errorInput .error-text {
    display: block;
}
input.error {
    border-color: brown;
}
</style>