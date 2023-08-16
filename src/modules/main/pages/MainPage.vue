<template>
  <q-page>
    <MainContentComponent v-if="showPage"/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '../../../store';
import MainContentComponent from '../components/MainContentComponent.vue';

export default defineComponent({
  name: 'MainPage',

  components: {
    MainContentComponent,
  },

  setup() {
    const store = useStore();

    // const showPage = computed(() => store.getters['login/getLogado']);
    const showPage = true;

    return {
      showPage,
    };
  },

});
</script>
