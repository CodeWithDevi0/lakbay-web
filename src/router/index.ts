import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import PlanView from '../views/PlanView.vue'
import TripsView from '../views/TripsView.vue'
import ProfileView from '../views/ProfileView.vue' // <-- 1. Import your new profile view here
import SubscriptionView from '../views/SubscriptionView.vue' // Add this import

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', name: 'Login', component: LoginView },
    { path: '/plan', name: 'Plan', component: PlanView },
    { path: '/trips', name: 'Trips', component: TripsView },
    { path: '/profile', name: 'Profile', component: ProfileView }, // <-- 2. Add the route here
    { path: '/subscription', name: 'Subscription', component: SubscriptionView }
  ]
})

export default router