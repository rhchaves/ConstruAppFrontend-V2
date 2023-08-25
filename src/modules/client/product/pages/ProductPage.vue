<template>
  <q-page class="flex flex-center">
    <!-- div provisória para ajustar o tamanho da tela -->
    <div class="" style="max-width: 1200px;">

      <CategoriesComponent/>
      <PoductsListComponent :products="products" v-if="isProductDetailEmpty"/>
      <ProductDetailsComponent v-else/>

      <LoadingComponent
      :visible="loading"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, watch, ref } from 'vue';
import { useStore } from '../../../../store';
import { useRouter } from 'vue-router';
import CategoriesComponent from '../../../../common/components/CategoriesComponent.vue';
import PoductsListComponent from '../components/PoductsListComponent.vue';
import ProductDetailsComponent from '../components/ProductDetailsComponent.vue';
import LoadingComponent from '../../../../common/components/LoadingComponent.vue';

export default defineComponent({
  name: 'ProductPage',

  components: {
    CategoriesComponent,
    PoductsListComponent,
    ProductDetailsComponent,
    LoadingComponent,
  },

  setup() {
    // utilização dos serviços
    const store = useStore();
    const router = useRouter();

    // registrar as propriedades computadas
    const loading = computed(() => store.getters['product/getLoading']);
    const allProducts = computed(() => store.getters['product/getListAllProducts']);
    const productsByCategory = computed(() => store.getters['product/getListProductsByCategory']);
    const productsByName = computed(() => store.getters['product/getListProductsByName']);
    const productDetail = computed(() => store.getters['product/getProductDetail']);


    //Logado? exibir dados no header


    // Verifica se o productDetail está vazio
    const isProductDetailEmpty = computed(() => Object.keys(productDetail.value).length === 0);

    let products = ref();

    // criar as "funções"
    onMounted(() => {
      store.dispatch('product/listProductsAsync');
      console.log('Criou a página e carregou os produtos:', products);
    });

    watch([allProducts, productsByCategory, productsByName, productDetail], () => {

      if (productsByName.value.length > 0) {
        products.value = productsByName.value;
      } else if (productsByCategory.value.length > 0) {
        products.value = productsByCategory.value;
      } else {
        products.value = allProducts.value;
      }
    });

    const logout = () => {
      router.push('/login')
    };

    return {
      loading,
      productDetail,
      isProductDetailEmpty,
      products,
      logout,
    };
  },

});
</script>
