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
import { computed, onMounted, defineComponent, ref } from 'vue';
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
    const search = ref('');
    const showPage = ref(true);
    const logado = ref(false);
    const loading = computed(() => store.getters['main/getLoading']);
    const products = computed(() => store.getters['main/getListProducts']);

    // criar as "funções"
    onMounted(() => {
      store.dispatch('main/listProducts');
    });

    const logout = () => {
      console.log('Clicou em sair');
      router.push('login')
    };

    const onSubmit = () => {
      console.log('Clicou em buscar:', search);
    };

    const addProduct = (product: any) => {
      console.log('Clicou em addProduct:', product);
    };

    const addFavoriteProduct = (product: any) => {
      console.log('Clicou em addFavoriteProduct:', product);
    };

    const shareProduct = (product: any) => {
      console.log('Clicou em shareProduct:', product);
    };

    const buyProduct = (product: any) => {
      console.log('Clicou em buyProduct:', product);
    };

    return {
      search,
      showPage,
      logado,
      loading,
      products,
      logout,
      onSubmit,
      addProduct,
      addFavoriteProduct,
      shareProduct,
      buyProduct,
    };
  },

});
</script>
