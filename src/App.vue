<script setup>
import { RouterView, useRoute } from 'vue-router'
import TopNavbar from './components/TopNavbar.vue'
import MainFooter from './components/MainFooter.vue'

const route = useRoute()

// Tells Vue to hide Nav/Footer on Login
const hideNavScreens = ['Login']
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#Fdfbf9] font-sans text-[#333333] overflow-x-hidden">
    
    <TopNavbar v-if="!hideNavScreens.includes(route.name)" />

    <main class="w-full flex-grow flex flex-col">
      <RouterView />
    </main>

    <MainFooter v-if="!hideNavScreens.includes(route.name)" />

  </div>
</template>