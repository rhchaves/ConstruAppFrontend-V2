<template>
  <q-page class="row justify-center items-center">
    <div class="items-center">
      <h3>Página do CLiente</h3>
    </div>
    <ClientContentComponent/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ClientContentComponent from '../components/ClientContentComponent.vue';

export default defineComponent({
  name: 'ClientPage',

  components: {
    ClientContentComponent,
  },

});
</script>
