<template>
  <ProgressComponent v-if="loading" />
  <v-container v-else>
    <v-row no-gutters>
      <v-col v-for="item in games" :key="item.id" cols="6" sm="4">
        <CardComponent :nome="item.nome" :genero="item.genero" :preco="item.preco" :image="item.image" />
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
  nome: string,
  genero: string,
  preco: string,
  image: string
}

const loading = ref(false)
const games = ref<GameInterface[]>([]);

const loadGames = async () => {
  loading.value = true;
  await api.get('/games').then(res => {
    games.value = res.data;
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
