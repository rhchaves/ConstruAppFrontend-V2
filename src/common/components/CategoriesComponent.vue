<template>
  <div class="btnAmber row justify-center no-wrap" style="height: 53px">
    <q-btn
      v-for="category in categories"
      :key="category.categoryId"
      class="btnAmber categories"
      :label="category.label"
      @click="filterCategories(category)"
    />
  </div>
</template>

<script lang="ts">
import { computed, onMounted, defineComponent } from 'vue';
import { useStore } from '../../store'

export default defineComponent({
  name: 'CategoriesComponent',

  setup() {
    // utilização dos serviços
    const store = useStore();

    // registrar as propriedades computadas
    const categories = computed(() => store.getters['commonStore/getListCategories']);

    // criar as "funções"
    onMounted(() => {
      store.dispatch('commonStore/listCategories');
    })

    const filterCategories = (category: any) => {
      store.dispatch('main/listProductsByCategory', category.categoryId);
    };

    return {
      store,
      categories,
      filterCategories,
    }
  },

});
</script>
