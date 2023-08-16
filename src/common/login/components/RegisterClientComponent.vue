<template>
  <q-page class="row justify-center items-center bg-blue">
    <div class="q-ma-lg">
      <q-form
        class=""
        method="POST"
        action=""
        @submit.prevent="registerClient()"
      >
        <h4 class="text-center">Preencha os dados abaixo:</h4>

        <q-input
          v-model="user.email"
          class=""
          label="Email"
          type="email"
          outlined
          lazy-rules
          :rules="[ val => val && val !== '' || 'Preencha o email']"
        />

        <q-input
          v-model="user.password"
          class=""
          label="Senha"
          :type="isPwd ? 'password' : 'text'"
          outlined
          lazy-rules
          :rules="[ val => val !== null && val != '' && val.length >= 3 ||
          'Preencha a senha corretamente']"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <q-checkbox v-model="user.termsAndPolicies" label="Declaro que li e aceito os <a>termos e condições</a>  e a política de privacidade"/>

        <div class="column items-center bg-red">
          <q-btn class="btnAmber" label="Cadastrar" type="submit" :disable=!user rounded/>
          <q-btn class="" label="Já tenho uma conta" flat @click="$emit('loginEmit')"/>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from '../../../store';

export default defineComponent({
  name: 'RegisterClientComponent',

  setup() {
    const store = useStore();

    const user = ref({
      email: '',
      password: '',
      termsAndPolicies: ref(false),
    });
    const isPwd = ref(true);

    const registerClient = () => {
      store.dispatch('login/registerClientAsync');
      console.log('Função registerClient', user);
    };

    return {
      user,
      isPwd,
      registerClient,
    };
  },

});
</script>
