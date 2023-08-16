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
          v-model="user.email"
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

        <div class="column items-center bg-red">
          <q-btn class="btnAmber" label="Login" type="submit" :disable=!user.password||!user.email rounded/>
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

export default defineComponent({
  name: 'LoginComponent',

  setup () {
    const store = useStore();
    const router = useRouter();

    const user = ref({
      email: '',
      password: '',
    });
    const isPwd = ref(true);
    const userTypeEnum = {
      admin: 1,
      client: 2,
      seller: 3,
    };

    const loginAccountAsync = async () => {
      const resp = await store.dispatch('login/loginAccountAsync', user.value);

      console.log('Ação após login', resp);

      router.push('/main');

      // if (item === userTypeEnum.admin) {
      //   console.log('Entrou administrator :', item);
      //   router.push('/administrator');
      // } else if (item === userTypeEnum.client) {
      //   console.log('Entrou cliente :', item);
      //   router.push('/client');
      // } else if (item === userTypeEnum.seller) {
      //   console.log('Entrou vendedor :', item);
      //   router.push('/seller');
      // } else if (item === userTypeEnum.product) {
      //   console.log('Entrou produto :', item);
      //   router.push('/product');
      // } else if (item === userTypeEnum.shoppingCart) {
      //   console.log('Entrou carrinho :', item);
      //   router.push('/shopping-cart');
      // } else if (item === userTypeEnum.main) {
      //   console.log('Entrou principal :', item);
      //   router.push('/main');
      // }
    };

    return {
      user,
      isPwd,
      userTypeEnum,
      loginAccountAsync,
    };
  },

});
</script>
