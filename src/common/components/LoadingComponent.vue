<template>
  <div>
    <div class="q-gutter-md row">
      <q-inner-loading
        :showing="visible"
        label="Aguarde por favor..."
        label-class="text-teal"
        label-style="font-size: 1.1em"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoadingComponent',

  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
});
</script>
