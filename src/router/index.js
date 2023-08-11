import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Loans from '../views/Loans.vue'
import Clients from '../views/Clients.vue'
import NewClient from '../views/NewClient.vue'
import NewLoan from '../views/NewLoan.vue'
import Settings from '../views/Settings.vue'
import Notifications from '../views/Notifications.vue'
import EditClient from '../components/EditClient.vue'
import EditLoan from '../components/EditLoan.vue'


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
  {
    path: '/clients-new',
    name: 'NewClient',
    component: NewClient
  },
  {
    path: '/clients-edit',
    name: 'EditClient',
    component: EditClient,
    props: true
  },
  {
    path: '/loans-edit',
    name: 'EditLoan',
    component: EditLoan,
    props: true
  },
  {
    path: '/loans-new',
    name: 'NewLoan',
    component: NewLoan
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
