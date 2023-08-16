<template>
  <q-page class="row justify-center items-center bg-green">
    <div class="items-center">
      <LoginContentComponent/>
    </div>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import { useStore } from '../../../store';
import { useRouter } from 'vue-router';
import LoginContentComponent from '../components/LoginContentComponent.vue';

export default defineComponent({
  name: 'LoginPage',

  components: {
    LoginContentComponent,
  },

  setup() {
    const store = useStore();
    const router = useRouter();

    const logado = computed(() => store.getters['login/getLogado']);
    const user = computed(() => store.getters['login/getLoginData']);

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
    };
  },
});
</script>
