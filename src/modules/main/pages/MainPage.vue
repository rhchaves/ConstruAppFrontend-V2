<template>
  <q-page class="row justify-center items-center">
    <div class="items-center">
      <h3>Página Principal</h3>
    </div>
    <MainContentComponent />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MainContentComponent from '../components/MainContentComponent.vue';

export default defineComponent({
  name: 'MainPage',

  components: {
    MainContentComponent,
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
