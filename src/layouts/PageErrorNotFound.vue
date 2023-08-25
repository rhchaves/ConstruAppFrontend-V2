<template>
  <q-layout
    class="bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">
        Oops. <br />Não encontramos essa página
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        label="Voltar"
        no-caps
        @click="redirectToLastPage()"
      />
    </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'PageErrorNotFound',

  setup() {
    const router = useRouter();

    const redirectToLastPage = (() => {
      router.back();
    })
    return{
      redirectToLastPage,
    };
  },

});
</script>
