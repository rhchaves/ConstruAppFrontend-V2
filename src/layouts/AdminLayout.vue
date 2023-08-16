<template>
  <q-layout view="hHh LpR fFf">
    <q-page-container class=""> <!-- Conteúdo principal da página -->
      <router-view /> <!-- router-view é responsável por chamar a rota da página que será exibida -->
      <q-page >
        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[20, 120]">
          <q-btn class="btnAmber z-max" fab icon="keyboard_arrow_up" />
        </q-page-scroller>
        <FooterComponent class="absolute-bottom"/>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterComponent from '../common/components/FooterComponent.vue';

export default defineComponent({
  name: 'AdminLayout',

  components: {
    FooterComponent,
  },

  setup() {
    return {
    };
  },
});
</script>
