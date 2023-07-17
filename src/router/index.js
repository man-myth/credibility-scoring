import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Loans from '../views/Loans.vue'
import Clients from '../views/Clients.vue'



const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/loans',
    name: 'Loans',
    component: Loans
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
