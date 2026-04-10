<script setup>
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
// Hide the bottom nav on the login screen
const hideNavScreens = ['Login']
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex justify-center font-sans text-lakbay-text">
    <div class="w-full max-w-md bg-[#F4EBE1] min-h-screen shadow-2xl relative overflow-x-hidden">
      
      <RouterView />

      <nav v-if="!hideNavScreens.includes(route.name)" 
           class="absolute bottom-0 w-full bg-white border-t border-gray-200 flex justify-around py-3 pb-6">
        <router-link to="/plan" class="flex flex-col items-center text-gray-400 hover:text-[#2A8B8B]" active-class="text-[#2A8B8B]">
          <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
          <span class="text-xs font-medium">Plan</span>
        </router-link>
        <router-link to="/trips" class="flex flex-col items-center text-gray-400 hover:text-[#2A8B8B]" active-class="text-[#2A8B8B]">
          <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
          <span class="text-xs font-medium">Trips</span>
        </router-link>
        <router-link to="/profile" class="flex flex-col items-center text-gray-400 hover:text-[#2A8B8B]" active-class="text-[#2A8B8B]">
          <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          <span class="text-xs font-medium">Profile</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>