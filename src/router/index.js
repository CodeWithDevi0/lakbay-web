import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import PlanView from '../views/PlanView.vue'
import TripsView from '../views/TripsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Login', component: LoginView },
    { path: '/plan', name: 'Plan', component: PlanView },
    { path: '/trips', name: 'Trips', component: TripsView }
  ]
})

export default router