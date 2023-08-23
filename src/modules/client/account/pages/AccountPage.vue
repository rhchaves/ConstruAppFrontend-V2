<template>
  <q-page class="row justify-center items-center">
    <div class="items-center">
      <h3>Página do CLiente</h3>
    </div>
    <AccountContentComponent/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AccountContentComponent from '../components/AccountContentComponent.vue';

export default defineComponent({
  name: 'AccountPage',

  components: {
    AccountContentComponent,
  },

});
</script>
