<template>
  <q-page class="row justify-center items-center">
    <div class="items-center">
      <h3>Página de Carrinho de Compras</h3>
    </div>
    <ShoppingCartContentComponent/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ShoppingCartContentComponent from '../components/ShoppingCartContentComponent.vue';

export default defineComponent({
  name: 'ShoppingCartPage',

  components: {
    ShoppingCartContentComponent,
  },

});
</script>
