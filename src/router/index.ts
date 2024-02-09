/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    component: () => import('../pages/HomePage.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
