<template>
  <div class="q-ma-md">
    <!-- card  -->
    <q-card class="my-card">
      <q-card-section horizontal>
        <!-- carrega a imagem do card -->
        <div class="" style="width: 200px; height: 200px;">
          <q-img
            :src='"public" + imageItem'
            style="width: 100%; height: 100%;"
          />
        </div>
        <!-- exibir botões -->
        <q-card-actions vertical class="justify-around absolute-right" >
          <q-btn class="btnAmber" icon="add_shopping_cart" @click="$emit('addCartItemEmit', idItem)"/>
          <q-btn class="btnAmber" icon="favorite_border" @click="$emit('addFavoriteItemEmit', idItem)"/>
          <q-btn class="btnAmber" icon="share" @click="$emit('shareItemEmit', idItem)"/>
        </q-card-actions>

      </q-card-section>
      <!-- exibir texto e botão comprar -->
      <q-card-section class="row">
        <div class="col col-md-7">
          <span><b>{{ labelItem }}</b></span><br>
          <span><b>R${{ priceItem }}</b></span>
        </div>
        <div class="col col-md-5">
          <q-btn class="btnAmber" rounded @click="$emit('buyItemEmit', idItem)">Comprar</q-btn>
        </div>
      </q-card-section>

    </q-card>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardProductComponent',

  props: {
    idItem: {
      type: Number,
      required: true,
    },
    nameItem: {
      type: String,
      required: false,
    },
    labelItem: {
      type: String,
      required: true,
    },
    priceItem: {
      type: Number,
      required: true,
    },
    imageItem: {
      type: String,
      required: false,
    },
    altImageItem: {
      type: String,
      required: false,
      default: 'Imagem do produto',
    },
  },

});
</script>
