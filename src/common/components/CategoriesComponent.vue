<template>
  <div class="btnAmber row justify-center" style="height: 53px">
    <q-btn></q-btn>
    <!-- <q-btn
      v-for="category in categories"
      :key="category.id"
      class="btnAmber categories"
      :label="category.label"
      @click="filterCategories(category)"
    /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'CategoriesComponent',

  setup() {
    const categories = ref([]);

    return {
      categories,
    }
  },

  created() {
    this.listAllCategories();
    this.categories = this.getListCategories;
    },

  computed: {
    ...mapGetters('commonStorage', ['getListCategories', 'getLoading']),
  },

  methods: {
    ...mapActions('commonStorage', ['listCategories']),

    listAllCategories(){
      this.listCategories();
    },

    filterCategories() {
      // this.$emit('categoriesEmit', categories);
      console.log('Categoria');
    },

  },

  data() {
    return {
      listCategories: [
        { id: 1, name: 'construcao', label: 'Construção' },
        { id: 2, name: 'eletrica', label: 'Elétrica' },
        { id: 3, name: 'hidraulica', label: 'Hidráulica' },
        { id: 4, name: 'ferragens', label: 'Ferragens' },
        { id: 5, name: 'tintas', label: 'Tintas' },
        { id: 6, name: 'ferramentas', label: 'Ferramentas' },
      ],
    };
  },

});
</script>
