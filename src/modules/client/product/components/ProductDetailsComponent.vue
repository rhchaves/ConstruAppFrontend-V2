<template>
  <q-page class="row justify-center">

    <!-- seção principal da página -->
    <section class="row justify-center no-wrap q-mt-xl bg-red">
      <div class="flex flex-center product-img bg-green">
        <img :src="product.imageUri" alt="" class="my-product">
      </div>
      <div class="q-ma-lg bg-blue">
        <h2 class="q-ma-lg">{{ product.label }}</h2>
        <h5 class="q-ma-lg">{{ product.description }}</h5>
        <h4 class="q-ma-lg">{{ formattedPrice }}</h4>
        <div class="col col-md-5">
          <q-btn class="btnAmber q-ma-lg q-mt-xl"
            rounded @click="addToCart()">Adicionar ao Carrinho</q-btn>
        </div>
      </div>
    </section>

  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '../../../../store';

export default defineComponent({
  name: 'ProductDetailsComponent',

  setup() {
    // utilização dos serviços
    const store = useStore();

    // registrar as propriedades computadas
    const product = computed(() => store.getters['product/getProductDetail']);

    // Formata o preço no padrão brasileiro
    const formattedPrice = computed(() => {
      return product.value.price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    });

    // criar as "funções"
    const addToCart = () => {
      console.log('Clicou em addToCart');
    };

    return {
      product,
      formattedPrice,
      addToCart,
    };
  },

});
</script>
