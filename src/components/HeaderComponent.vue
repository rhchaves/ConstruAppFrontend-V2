<template>
  <div>
    <q-header
      class="bg-white text-grey-8 q-py-md"
      height-hint="58"
      style="border-bottom: solid 1px #ccc"
    >
      <q-toolbar class="">
        <div class="q-mr-xl"></div>
        <!-- Título do header logado -->
        <q-toolbar-title shrink class="row items-center no-wrap">
          <q-btn unelevated>
            <q-img
              :src="urlLogo"
              @click="redirectLogo"
              to="/"
              style="width: 150px"
            ></q-img>
          </q-btn>
        </q-toolbar-title>

        <!-- Mudar a lógica para carregar o endereço do login -->
        <div class="row items-center no-wrap">
          <q-input
            rounded
            outlined
            v-model="search"
            label="O que você procura?"
            dense
          >
            <q-btn flat>
              <q-icon name="search" />
            </q-btn>
          </q-input>
        </div>

        <q-space />

        <!-- Icones lateral direita -->
        <div class="q-gutter-sm row items-center no-wrap">
          <div class="btnAmber rounded-item row items-center no-wrap">
            <!-- Conta do usuário -->
            <div class="q-mr-sm">
              <q-avatar class="q-ml-sm q-mr-sm" size="26px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
              <!-- {{ getUser.name.split(' ').slice(0, 1).join(' ') }} -->
            </div>

            <q-btn flat to="/login">Entrar</q-btn>

            <!-- Menu retrátil (icone de 3 riscos) -->
            <q-btn flat icon="menu">
              <q-menu class="">
                <q-list class="amber" style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section>Minhas compras</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>Alterar dados</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item clickable v-close-popup>
                    <q-item-section>Sair</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
            <!-- Término da listagem dos itens no menu retrátil -->
          </div>

          <!-- Carrinho -->

          <div>
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

          <div class="q-ml-xl"></div>
        </div>
      </q-toolbar>
      <CategoriesComponent></CategoriesComponent>
    </q-header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CategoriesComponent from 'components/CategoriesComponent.vue';

export default defineComponent({
  name: 'HeaderComponent',

  components: {
    CategoriesComponent,
  },

  data() {
    return {
      urlLogo: 'logo-contruApp-v1.png',
      search: '',
      quantityCart: 0,
    };
  },

  setup() {
    return {
      redirectLogo() {
        console.log('teste');

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
      },
    };
  },
});
</script>
