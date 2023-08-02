<template>
  <q-page class="row justify-center items-center">
    <div class="items-center">
      <h3>Página do Vendedor</h3>
    </div>
    <SellerContentComponent/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SellerContentComponent from '../components/SellerContentComponent.vue';

export default defineComponent({
  name: 'SellerPage',

  components: {
    SellerContentComponent,
  },

});
</script>
