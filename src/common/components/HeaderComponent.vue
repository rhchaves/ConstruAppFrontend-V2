<template>
  <div>
    <q-header
      reveal
      class="bg-white text-grey-8 no-wrap"
      style="border-bottom: solid 1px #ccc;"
    >
      <div style="margin: 0 auto; max-width: 1400px;">
        <q-toolbar class="">
          <!-- Título do header logado -->
          <q-toolbar-title shrink class="">
            <q-btn unelevated>
              <q-img
                :src="urlLogo"
                @click="redirectLogo"
                style="width: 150px"
              ></q-img>
            </q-btn>
          </q-toolbar-title>

          <!-- Mudar a lógica para carregar o endereço do login -->
          <div class="absolute-center">
            <q-input
              rounded
              outlined
              v-model="search"
              label="O que você procura?"
              dense
              @keydown.enter="searchFilter(search)"
              @select="search = ''"
              @blur="search = ''"
            >
              <q-btn @click="searchFilter(search)" flat>
                <q-icon name="search" />
              </q-btn>
            </q-input>
          </div>

          <!-- Icones lateral direita -->
          <div class="row items-center no-wrap absolute-right">
            <div class="btnAmber rounded-item row items-center no-wrap">
              <!-- Conta do usuário -->
                <q-avatar class="q-ml-sm q-mr-sm" size="26px">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              <q-btn flat to="/login">Entrar</q-btn>

              <!-- Menu retrátil (icone de 3 riscos) -->
              <q-btn flat icon="menu">
                <q-menu class="">
                  <q-list class="" style="min-width: 100px">
                    <q-item clickable v-close-popup>
                      <q-item-section>Minhas compras</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                      <q-item-section>Alterar dados</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                      <q-item-section>Sair</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
              <!-- Término da listagem dos itens no menu retrátil -->
            </div>

            <!-- Carrinho -->
            <q-btn class="q-mr-lg" flat icon="shopping_cart" to="shopping-cart">
              <q-badge
                rounded
                class="q-mr-sm q-mt-xs"
                color="red"
                text-color="white"
                floating
              >
                {{ quantityCart }}
                <!-- alterar para retorno da quantidade de itens no carrinho -->
              </q-badge>
            </q-btn>
          </div>
        </q-toolbar>
      </div>
    </q-header>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '../../store'

export default defineComponent({
  name: 'HeaderComponent',

  components: {
    // CategoriesComponent,
  },

  setup() {
    const router = useRouter();
    const store = useStore();

    const urlLogo = ref('logo-contruApp-v2.png');
    const search = ref('');
    const quantityCart = ref(0);
    const userTypeEnum = ref ({
        admin: 1,
        seller: 2,
        client: 3,
      });

    const redirectLogo = () => {
      console.log('Clicou no logo');
      router.push('login')

      // router.addRoute({})
      // router.push('/');

      // if (this.getLogado) {
      //   if (this.getUser.userType === this.userTypeEnum.admin) {
      //     this.$router.push('administrator');
      //   }

      //   if (this.getUser.userType === this.userTypeEnum.seller) {
      //     this.$router.push('seller');
      //   }

      //   if (this.getUser.userType === this.userTypeEnum.client) {
      //     if (this.$route.name !== 'main') {
      // this.$router.push('main');
      //     }
      //     this.resetCategoryProduct();
      //   }
      // }

      // if (this.getUserAddress.cep > 0) {
      //   if (this.$route.name !== 'main') {
      // this.$router.push('main');
      // }
      //     this.listAllProducts();
      //     this.resetCategoryProduct();
      // }
    };

    const searchFilter = (itemSearch: string) => {
      store.dispatch('main/listProductsByName', itemSearch);
      console.log('Clicou em filtrar:', itemSearch);
    };

    return {
      urlLogo,
      search,
      quantityCart,
      userTypeEnum,
      redirectLogo,
      searchFilter,

    };
  },

});
</script>
