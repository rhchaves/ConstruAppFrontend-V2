<template>
  <q-page class="row justify-center">
    <section class="row justify-center q-mt-xl" style="max-width: 1300px; max-height: 750px">

      <h4 v-if="!products">Conteúdo da Página Principal</h4>

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

      <LoadingComponent
        :visible="loading"
      />
    </section>
  </q-page>
</template>

<script lang="ts">
import { computed, onMounted, defineComponent, ref, watch } from 'vue';
import { useStore } from '../../../store';
import { useRouter } from 'vue-router';
import CardProductComponent from '../../../common/components/CardProductComponent.vue';
import LoadingComponent from '../../../common/components/LoadingComponent.vue';

export default defineComponent({
  name: 'MainContentComponent',

  components: {
    CardProductComponent,
    LoadingComponent,
  },

  setup() {
    // utilização dos serviços
    const store = useStore();
    const router = useRouter();

    // registrar as propriedades computadas
    const loading = computed(() => store.getters['main/getLoading']);
    const allProducts = computed(() => store.getters['main/getListAllProducts']);
    const productsByCategory = computed(() => store.getters['main/getListProductsByCategory']);
    const productsByName = computed(() => store.getters['main/getListProductsByName']);

    let products = ref();


    // criar as "funções"
    onMounted(() => {
      store.dispatch('main/listProductsAsync');
      console.log('Criou a página e carregou products:', products);
    });

    watch([allProducts, productsByCategory, productsByName], () => {

      if (productsByName.value.length > 0) {
        console.log('productsByName', productsByName.value);
        products.value = productsByName.value;
      } else if (productsByCategory.value.length > 0) {
        console.log('productsByCategory', productsByCategory.value);
        products.value = productsByCategory.value;
      } else {
        console.log('allProducts', allProducts.value);
        products.value = allProducts.value;
      }
      console.log('products.value', products.value);
    });

    const logout = () => {
      router.push('login')
    };

    const addProduct = (product: any) => {
      store.dispatch('shoppingCart/addToCartAsync', product);
      console.log('Clicou em addProduct:', product);
    };

    const addFavoriteProduct = (product: any) => {
      console.log('Clicou em addFavoriteProduct:', product);
    };

    const shareProduct = (product: any) => {
      console.log('Clicou em shareProduct:', product);
    };

    const buyProduct = (product: any) => {
      store.dispatch('product/insertProductPage', product);
      router.push('product');
      console.log('Clicou em buyProduct:', product);
    };

    return {
      loading,
      products,
      logout,
      addProduct,
      addFavoriteProduct,
      shareProduct,
      buyProduct,
    };
  },

});
</script>
