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
        to="/"
        label="Voltar a Home"
        no-caps
      />
    </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageErrorNotFound',
});
</script>
