import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/home-view/HomeView.vue'

import BeyondBasicsWithSlots from '@/views/components-in-depth-view/components/BeyondBasicsWithSlots.vue'
import ComponentVModel from '@/views/components-in-depth-view/components/ComponentVModel.vue'

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
      component: () => import('@/views/components-in-depth-view/ComponentsInDepthView.vue'),
      children: [
        {
          path: 'slots',
          name: 'Slots', //lazy load this route
          component: BeyondBasicsWithSlots
        },
        {
          path: 'component-v-model',
          name: 'Component v-model', //lazy load this route
          component: ComponentVModel
        }
      ]
    }
  ]
})

export default router
