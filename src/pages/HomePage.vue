<template>
  <ProgressComponent v-if="loading" />
  <v-container v-else>
    <v-row no-gutters>
      <v-col v-for="item in games" :key="item.id" cols="6" md="4" sm="2">
        <CardComponent :name="item.name" :gender="item.gender" :price="item.price" :url-image="item.urlImage" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { api } from '@/services/api';
import { onMounted } from 'vue';
import CardComponent from '@/components/CardComponent.vue';
import ProgressComponent from '@/components/ProgressComponent.vue';
import GameInterface from '@/interfaces/types';

const loading = ref(false)
const games = ref<GameInterface[]>([]);

const loadGames = async () => {
  loading.value = true;
  await api.get('/games').then(res => {
    console.log('GAMES ', res.data.games);
    games.value = res.data.games;
  }).catch(error => {
    console.log('ERRO ', error);
  });
  loading.value = false;
}

onMounted(() => {
  console.log('OI cai aqui');
  loadGames();
});
</script>
