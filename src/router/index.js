import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'

import auth from '../store/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/tests',
      name: 'Тесты',
      component: () => import('../views/TestsView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/results',
      name: 'Результаты',
      component: () => import('../views/ResultsView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Не найдено',
      component: NotFound
    }
  ]
});

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from) => {
  console.log(auth.getters.checkAuth())
  if (to.meta.requiresAuth && !auth.getters.checkAuth()) {
    return '/';
  }
})

export default router
