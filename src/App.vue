<script setup>
import { RouterView, useRoute } from 'vue-router'
import TopNavbar from './components/TopNavbar.vue' // <-- 1. Import your new separated component!

const route = useRoute()

// Tells Vue to hide the TopNavbar if the user is on the Login page
const hideNavScreens = ['Login']
</script>

<template>
  <div class="min-h-screen bg-gray-50/30 font-sans text-[#333333] overflow-y-scroll">
    
    <TopNavbar v-if="!hideNavScreens.includes(route.name)" />

    <main class="w-full">
      <RouterView />
    </main>

  </div>
</template>