<template>
  <q-page>
    <CategoriesComponent />
    <MainContentComponent />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MainContentComponent from '../components/MainContentComponent.vue';
import CategoriesComponent from '../../../common/components/CategoriesComponent.vue';

export default defineComponent({
  name: 'MainPage',

  components: {
    MainContentComponent,
    CategoriesComponent,
  },

  setup() {
    const search = ref('');
    const showPage = ref(true);

    return {
      search,
      showPage,
    };
  },

});
</script>
