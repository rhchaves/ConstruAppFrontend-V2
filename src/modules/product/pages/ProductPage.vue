<template>
  <q-page class="row justify-center items-center">
    <div class="items-center">
      <h3>Página de Produtos</h3>
    </div>
    <ProductContentComponent/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductContentComponent from '../components/ProductContentComponent.vue';
export default defineComponent({
  name: 'ProductPage',

  components: {
    ProductContentComponent,
  }
});
</script>
