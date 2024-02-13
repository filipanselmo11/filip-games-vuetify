<template>
  <ProgressComponent v-if="loading" />
  <v-container v-else>
    <v-row no-gutters>
      <v-col v-for="item in games" :key="item.id" cols="6" sm="4">
        <CardComponent :name="item.name" :gender="item.gender" :price="item.price" :image="item.image" />
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

interface GameInterface {
  id: number,
  name: string,
  gender: string,
  price: string,
  image: string
}

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
  await api.get('/gameImages').then(res =>{
    console.log('GAME IMAGES ', res.data);
    games.value = res.data;
  }).catch(error => {
    console.log('ERROR ', error);
  });
  loading.value = false;
}

// const loadGameImages = async () => {
//   loading.value = true;

// };

onMounted(() => {
  console.log('OI cai aqui');
  loadGames();
});
</script>
