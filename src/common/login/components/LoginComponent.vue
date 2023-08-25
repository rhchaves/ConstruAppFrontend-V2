<template>
  <q-page class="row justify-center items-center bg-light-blue-2">
    <div class="q-ma-lg">
      <q-form
        class=""
        method="POST"
        action=""
        @submit.prevent="loginAccountAsync()"
      >
        <h6 class="text-center">SUA CONTA PARA TUDO DA CONSTRUAPP</h6>

        <q-input
          v-model="inputUser.email"
          class=""
          label="Email"
          type="email"
          outlined
        />
          <!-- lazy-rules
          :rules="[
            val => /\S+@\S+\.\S+/.test(val) && val !== null && val.length > 5 ||
          'Preencha o email corretamente']" -->
        <!-- melhorar a veirificação do e-mail -->

        <q-input
          v-model="inputUser.password"
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

        <div class="column items-center bg-red">
          <q-btn class="btnAmber" label="Login" type="submit" :disable=!inputUser.password||!inputUser.email rounded/>
          <q-btn class="" label="Esqueci a senha" flat @click="$emit('forgotPasswordEmit')"/>
          <q-btn class="" label="Criar Conta" flat @click="$emit('registerClientEmit')"/>
          <div>
            <q-btn label="Termos de uso" flat/>
            <q-btn label="Política de privacidade" flat/>
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from '../../../store';
import { useRouter } from 'vue-router';
import { userType } from '../../interfaces/UserPerfil';

export default defineComponent({
  name: 'LoginComponent',

  setup () {
    const store = useStore();
    const router = useRouter();

    const inputUser = ref({
      email: '',
      password: '',
    });
    const isPwd = ref(true);

    const loginAccountAsync = async () => {
      const resp = await store.dispatch('login/loginAccountAsync', inputUser.value);
      const user = resp.type_user.toUpperCase();

      if (user === userType.SIMPLE_CLIENT || user === userType.PREMIUM_CLIENT || user === userType.MASTER_CLIENT) {
        router.push('/cliente/produtos');
      } else if (user === userType.SIMPLE_SELLER || user === userType.PREMIUM_SELLER || user === userType.MASTER_SELLER) {
        router.push('/vendedor');
      } else if (user === userType.SIMPLE_ADMIN || user === userType.CLIENT_ADMIN || user === userType.SELLER_ADMIN ||
                user === userType.PRODUCT_ADMIN || user === userType.GENERAL_ADMIN || user === userType.MASTER_ADMIN) {
        router.push('/administrador');
      }
    };

    return {
      inputUser,
      isPwd,
      loginAccountAsync,
    };
  },

});
</script>
