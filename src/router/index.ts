import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Partners from '@/views/Partners.vue'
import Students from '@/views/Students.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/students',
      name: 'students',
      component: Students
    },
    {
      path: '/partners',
      name: 'partners',
      component: Partners
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/legal/TermsView.vue')
    },
    {
      path: '/policy',
      name: 'policy',
      component: () => import('../views/legal/PolicyView.vue')
    },
    {
      path: '/requisites',
      name: 'requisites',
      component: () => import('../views/legal/RequisitesView.vue')
    }
  ]
})

export default router
