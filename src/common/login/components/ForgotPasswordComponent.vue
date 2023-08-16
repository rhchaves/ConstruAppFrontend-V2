<template>
  <q-page class="row justify-center items-center bg-blue">
    <div class="q-ma-lg">
      <q-form
        class=""
        method="POST"
        action=""
        @submit.prevent="sendEmail()"
      >
        <h4 class="text-center">Esqueci minha senha</h4>
        <h6 class="text-center">Com qual e-mail você se cadastrou?</h6>
        <p class="text-center">Enviaremos um link que expira em <strong>1 hora</strong> para que você possa redefinir sua senha.</p>

        <q-input
          v-model="email"
          class=""
          label="Email"
          type="email"
          outlined
          lazy-rules
          :rules="[ val => val && val !== '' || 'Preencha o email']"
        />

        <div class="column items-center bg-red">
          <q-btn class="btnAmber" label="Enviar" type="submit" rounded/>
          <q-btn class="" label="Entrar" flat @click="$emit('loginEmit')"/>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from '../../../store';

export default defineComponent({
  name: 'ForgotPasswordComponent',

  setup() {
    const store = useStore();

    const email = ref('');

    const sendEmail = () => {
      store.dispatch('login/sendEmailAsync');
      console.log('Função sendEmail', email);
    };

    return {
      email,
      sendEmail,
    };
  },

});
</script>
