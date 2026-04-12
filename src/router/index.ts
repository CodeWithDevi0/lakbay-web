import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import PlanView from '../views/PlanView.vue'
import TripsView from '../views/TripsView.vue'
import ProfileView from '../views/ProfileView.vue'
import SubscriptionView from '../views/SubscriptionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/login', 
      name: 'Login', 
      component: LoginView 
    },
    { 
      path: '/plan', 
      name: 'Plan', 
      component: PlanView 
    },
    { 
      path: '/trips', 
      name: 'Trips', 
      component: TripsView 
    },
    { 
      path: '/profile', 
      name: 'Profile', 
      component: ProfileView 
    },
    { 
      path: '/subscription', 
      name: 'Subscription', 
      component: SubscriptionView 
    },
    { 
      path: '/trip_details', 
      name: 'TripDetails',
      component: () => import('@/views/TripDetailsView.vue') 
    } // <-- Fixed the closing brace and indentation here
  ]
})

export default router