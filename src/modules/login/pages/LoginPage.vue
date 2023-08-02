<template>
  <q-page class="row justify-center items-center">
    <div class="items-center">
      <h3>Página de Login</h3>
      <LoginContentComponent/>

      <ForgotPasswordComponent
      v-if="true"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ForgotPasswordComponent from '../components/ForgotPasswordComponent.vue';
import LoginContentComponent from '../components/LoginContentComponent.vue';

export default defineComponent({
  name: 'LoginPage',

  components: {
    ForgotPasswordComponent,
    LoginContentComponent,
  },

  setup() {
    const user = ref({
      email: '',
      password: '',
    });

    return {
      user,

    };
  },
});
</script>
