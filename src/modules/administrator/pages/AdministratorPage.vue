<template>
  <q-page class="row justify-center items-center">
    <div class="items-center">
      <h3>Página do Administrador</h3>
    </div>
    <AdministratorContentComponent/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AdministratorContentComponent from '../components/AdministratorContentComponent.vue';

export default defineComponent({
  name: 'AdministratorPage',

  components: {
    AdministratorContentComponent,
  },

});
</script>
