<template>
  <q-page class="row justify-center">
    <div class="items-center">
      <h4>Conteúdo da Página do Vendedor</h4>
      <q-btn class="btnAmber" label="Sair" @click="logout()"></q-btn>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'SellerContentComponent',

  setup() {
    const router = useRouter();

    const logout = () => {
      console.log('Clicou em sair');
      router.push('login')
    };

    return {
      logout,
    };
  },

});
</script>
