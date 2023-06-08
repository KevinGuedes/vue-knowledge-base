import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView/HomeView.vue'

import SlotsCommuncation from '@/views/ComponentsInDepthView/components/SlotsCommuncation.vue'
import ComponentVModel from '@/views/ComponentsInDepthView/components/ComponentVModel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/components-in-depth',
      name: 'Components In Depth',
      component: () => import('@/views/ComponentsInDepthView/ComponentsInDepthView.vue'),
      children: [
        {
          path: 'slots',
          name: 'Slots',
          component: SlotsCommuncation
        },
        {
          path: 'component-v-model',
          name: 'Component v-Model',
          component: ComponentVModel
        }
      ]
    }
  ]
})

export default router
