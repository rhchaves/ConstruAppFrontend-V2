<template>
  <q-page class="row justify-center items-center bg-grey">
    <div class="items-center q-ma-lg">
      <LoginComponent
        v-if="!forgotPassword && !registerClient"
        @forgotPasswordEmit="forgotPassword = !forgotPassword"
        @registerClientEmit="registerClient = !registerClient"
      />

      <ForgotPasswordComponent
        v-if="forgotPassword && !registerClient"
        @loginEmit="forgotPassword = !forgotPassword"
      />

      <RegisterClientComponent
        v-if="registerClient && !forgotPassword"
        @loginEmit="registerClient = !registerClient"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LoginComponent from '../components/LoginComponent.vue';
import ForgotPasswordComponent from '../components/ForgotPasswordComponent.vue';
import RegisterClientComponent from '../components/RegisterClientComponent.vue';

export default defineComponent({
  name: 'LoginContentComponent',

  components: {
    LoginComponent,
    ForgotPasswordComponent,
    RegisterClientComponent,
  },

  setup () {
    const user = ref({
      email: '',
      password: '',
    });

    const forgotPassword = ref(false);
    const registerClient = ref(false);

    return {
      user,
      forgotPassword,
      registerClient,
    };
  },

});
</script>
