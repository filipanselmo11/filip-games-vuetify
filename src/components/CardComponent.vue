<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="image" height="200px"></v-img>
    <v-card-title>
      {{ name }}
    </v-card-title>
    <v-card-subtitle>
      {{ gender }} | {{  price }}
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
    name: {
      type: String as PropType<string>,
      default: '',
      required: true,
    },
    gender: {
      type: String as PropType<string>,
      default: '',
      required: true
    },
    price: {
      type: String as PropType<string>,
      default: '',
      required: true
    },
  },
});
</script>
