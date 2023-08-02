<template>
  <q-page class="row justify-center">
    <div class="items-center">
      <h4>Conteúdo da Página Principal</h4>
      {{ getListProducts }}
      <LoadingComponent
        :visible="getLoading"
      />
      <q-btn class="btnAmber" label="Sair" @click="logout()"></q-btn>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
// import CardProductComponent from '../../../common/components/CardProductComponent.vue';
import LoadingComponent from '../../../common/components/LoadingComponent.vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'MainContentComponent',

  components: {
    // CardProductComponent,
    LoadingComponent,
  },

  setup() {
    const router = useRouter();
    const search = ref('');
    const showPage = ref(true);
    const logado = ref(false);
    const products = ref([]);

    const logout = () => {
      console.log('Clicou em sair');
      router.push('login')
    };

    return {
      search,
      showPage,
      logado,
      products,
      logout,
    };
  },

  data() {
    return {
      // search: '',
      // logado: false,
    };
  },

  created() {
    this.listarProdutos();
    this.products = this.getListProducts;
    },

  computed: {
    ...mapGetters('main', ['getListProducts', 'getLoading']),
  },

  methods: {
    ...mapActions('main', ['listCep', 'listProducts']),

    onSubmit() {
      console.log('Clicou em buscar:', this.search);
      this.listCep(this.search);
    },

    addProduct(itemId: number) {
      console.log('Clicou em Adicionar:', itemId);
    },

    addFavoriteProduct(item: any) {
      console.log('Clicou em Favoritar:', item);
    },

    shareProduct(item: any) {
      console.log('Clicou em Compartilhar:', item);
    },

    buyProduct(item: any) {
      console.log('Clicou em Comprar:', item);
    },

    listarProdutosPrincipais() {
        console.log('listarProdutosPrincipais');
    },

    listarTodosProdutos() {
      console.log('listarTodosProdutos');
    },

    listarProdutos(){
      this.listProducts();
    }

  },
});
</script>
