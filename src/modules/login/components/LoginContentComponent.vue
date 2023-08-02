<template>
  <div class="items-center">
    <h4>Conteúdo Login</h4>

    <div class="items-center">
      <q-btn class="btnAmber q-mt-md" label="Página Admin" @click="login(1)"></q-btn>
    </div>
    <div class="items-center">
      <q-btn class="btnAmber q-mt-md" label="Página Cliente" @click="login(2)"></q-btn>
    </div>
    <div class="items-center">
      <q-btn class="btnAmber q-mt-md" label="Página Vendedor" @click="login(3)"></q-btn>
    </div>
    <div class="items-center">
      <q-btn class="btnAmber q-mt-md" label="Página Produto" @click="login(4)"></q-btn>
    </div>
    <div class="items-center">
      <q-btn class="btnAmber q-mt-md" label="Página Carrinho" @click="login(5)"></q-btn>
    </div>
    <div class="items-center">
      <q-btn class="btnAmber q-mt-md" label="Página Principal" @click="login(6)"></q-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'LoginContentComponent',

  setup () {
    const router = useRouter();

    const options = [
      {
        label: 'Admin',
        value: 1,
      },
      {
        label: 'Cliente',
        value: 2
      },
      {
        label: 'Vendedor',
        value: 3,
      },
      {
        label: 'Produto',
        value: 4,
      },
      {
        label: 'Carrinho',
        value: 5,
      },
      {
        label: 'Principal',
        value: 6,
      },
    ];

    const user = ref({
      email: '',
      password: '',
    });

    const userTypeEnum = {
      admin: 1,
      client: 2,
      seller: 3,
      product: 4,
      shoppingCart: 5,
      main: 6,
    };

    const login = (item: any) => {
      console.log('Clicou em login:', item);

      if (item === userTypeEnum.admin) {
        console.log('Entrou administrator :', item);
        router.push('/administrator');
      } else if (item === userTypeEnum.client) {
        console.log('Entrou cliente :', item);
        router.push('/client');
      } else if (item === userTypeEnum.seller) {
        console.log('Entrou vendedor :', item);
        router.push('/seller');
      } else if (item === userTypeEnum.product) {
        console.log('Entrou produto :', item);
        router.push('/product');
      } else if (item === userTypeEnum.shoppingCart) {
        console.log('Entrou carrinho :', item);
        router.push('/shopping-cart');
      } else if (item === userTypeEnum.main) {
        console.log('Entrou principal :', item);
        router.push('/main');
      }
    };

    return {
      options,
      user,
      userTypeEnum,
      login,
    };
  },

});
</script>
