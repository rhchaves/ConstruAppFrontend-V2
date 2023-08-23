<template>
  <q-page class="row justify-center items-center bg-green">
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
import { computed, defineComponent, ref, watch } from 'vue';
import { useStore } from '../../../store';
import { useRouter } from 'vue-router';
import LoginComponent from '../components/LoginComponent.vue';
import ForgotPasswordComponent from '../components/ForgotPasswordComponent.vue';
import RegisterClientComponent from '../components/RegisterClientComponent.vue';

export default defineComponent({
  name: 'LoginPage',

  components: {
    LoginComponent,
    ForgotPasswordComponent,
    RegisterClientComponent,
  },

  setup() {
    const store = useStore();
    const router = useRouter();

    const logado = computed(() => store.getters['login/getLogado']);
    const user = computed(() => store.getters['login/getLoginData']);

    const forgotPassword = ref(false);
    const registerClient = ref(false);

    watch(logado, () => {
      console.log('dados do usuário', user.value);
      if (logado.value === false) {
        store.dispatch('login/logoutAsync');
        console.log('saiu');
        router.push('login');
      }
    });

    return {
      logado,
      user,
      forgotPassword,
      registerClient,
    };
  },
});
</script>
