<script setup>
import { defineProps, defineEmits, watch, onUnmounted } from 'vue';

const props = defineProps({ isOpen: Boolean });
defineEmits(['close']);

// Lock background scroll when modal is open
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

// Cleanup if component is destroyed
onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 p-4">
    <div class="bg-white w-full max-w-md rounded-[2rem] overflow-hidden shadow-2xl animate-fade-in relative max-h-[90vh] flex flex-col">
      
      <div class="bg-[#D97736] px-6 py-5 flex justify-between items-center text-white shrink-0">
        <h3 class="font-medium text-lg">Plan New Trip</h3>
        <button @click="$emit('close')" class="bg-white text-gray-800 rounded-full p-1.5 shadow-sm hover:scale-105 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
      </div>
      
      <div class="p-6 overflow-y-auto custom-scrollbar">
        <div class="space-y-5">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Trip Title</label>
            <input type="text" placeholder="e.g., Summer Cebu Adventure" class="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#2A8B8B] text-sm text-gray-700 placeholder-gray-400 bg-gray-50">
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Destination</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <input type="text" placeholder="e.g., Cebu, Philippines" class="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-[#2A8B8B] text-sm text-gray-700 placeholder-gray-400 bg-gray-50">
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex-1">
              <label class="block text-sm font-semibold text-gray-700 mb-2">Start Date</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <input type="date" class="w-full border border-gray-200 rounded-xl pl-11 pr-3 py-3.5 outline-none focus:ring-2 focus:ring-[#2A8B8B] text-sm text-gray-700 bg-gray-50">
              </div>
            </div>
            <div class="flex-1">
              <label class="block text-sm font-semibold text-gray-700 mb-2">End Date</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <input type="date" class="w-full border border-gray-200 rounded-xl pl-11 pr-3 py-3.5 outline-none focus:ring-2 focus:ring-[#2A8B8B] text-sm text-gray-700 bg-gray-50">
              </div>
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Initial Budget</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span class="text-gray-500 font-bold">₱</span>
              </div>
              <input type="number" placeholder="10000" class="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-[#2A8B8B] text-sm text-gray-700 placeholder-gray-400 bg-gray-50">
            </div>
          </div>

          <button class="w-full bg-[#D97736] text-white font-bold py-4 rounded-xl shadow-md hover:bg-[#c4682c] transition mt-2">
            Start Adventure
          </button>
        </div>
      </div>
    </div>
  </div>
</template>