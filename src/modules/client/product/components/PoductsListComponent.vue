<template>
  <q-page class="">
    <section class="row justify-center" >
      <CardProductComponent
      v-for="product in products"
      :key="product.productId"
      :idItem="product.productId"
      :labelItem="product.label"
      :priceItem="product.price"
      :imageItem="product.imageUri"
      @addCartItemEmit="addProduct(product)"
      @addFavoriteItemEmit="addFavoriteProduct(product)"
      @shareItemEmit="shareProduct(product)"
      @buyItemEmit="buyProduct(product)"
      />
    </section>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useStore } from '../../../../store';
import CardProductComponent from '../../../../common/components/CardProductComponent.vue';
import { Product } from '../../../../common/interfaces/Product';

export default defineComponent({
  name: 'PoductsListComponent',

  components: {
    CardProductComponent,
  },

  props: {
    products: {
      type: Array as PropType<Product[]>,
      required: true,
    },
  },

  setup() {
    // utilização dos serviços
    const store = useStore();

    const addProduct = (product: Product) => {
      store.dispatch('shoppingCart/addToCartAsync', product);
      console.log('Clicou em addProduct:', product);
    };

    const addFavoriteProduct = (product: Product) => {
      console.log('Clicou em addFavoriteProduct:', product);
    };

    const shareProduct = (product: Product) => {
      console.log('Clicou em shareProduct:', product);
    };

    const buyProduct = (product: Product) => {
      store.dispatch('product/insertProductDetail', product);
      console.log('Clicou em buyProduct:', product);
    };

    return {
      addProduct,
      addFavoriteProduct,
      shareProduct,
      buyProduct,
    };
  },


});
</script>
