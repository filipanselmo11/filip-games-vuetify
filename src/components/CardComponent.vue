<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="image" height="200px"></v-img>
    <v-card-title>
      {{ nome }}
    </v-card-title>
    <v-card-subtitle>
      {{ genero }} | {{  preco }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn>
        <span style="text-transform: none;">Detalhes</span>
      </v-btn>
    </v-card-actions>
  </v-card>
  <br/>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    image: {
      type: String as PropType<string>,
      required: true,
    },
    nome: {
      type: String as PropType<string>,
      default: '',
      required: true,
    },
    genero: {
      type: String as PropType<string>,
      default: '',
      required: true
    },
    preco: {
      type: String as PropType<string>,
      default: '',
      required: true
    },
  },
});
</script>
