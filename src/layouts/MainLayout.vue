<template>
  <q-layout view="lHh Lpr lFf">
    <div style="margin: 0 auto; max-width: 1920px">
      <!-- <HeaderComponent
          :visibleSearchField="true"
          :visibleMenu="true"
          :visibleLogin="true"
        /> -->
      <HeaderComponent></HeaderComponent>
    </div>

    <!-- Conteúdo principal da página -->
    <q-page-container>
      <!-- router-view é responsável por chamar a rota da página que será exibida -->
      <router-view />
    </q-page-container>

    <FooterComponent />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HeaderComponent from '../common/components/HeaderComponent.vue';
import FooterComponent from '../common/components/FooterComponent.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    HeaderComponent,
    FooterComponent,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
