<script setup>
import { defineProps, defineEmits, watch, onUnmounted } from 'vue';

const props = defineProps({ isOpen: Boolean });
defineEmits(['close']);

watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 p-4">
    <div class="bg-white w-full max-w-md rounded-[2rem] overflow-hidden shadow-2xl animate-fade-in relative max-h-[90vh] flex flex-col">
      
      <div class="bg-[#D97736] px-6 py-5 flex justify-between items-center text-white shrink-0">
        <h3 class="font-medium text-lg">Join Group</h3>
        <button @click="$emit('close')" class="bg-white text-gray-800 rounded-full p-1.5 shadow-sm hover:scale-105 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
      </div>
      
      <div class="p-8 overflow-y-auto">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-gray-400 font-bold text-lg">#</span>
          <label class="font-bold text-gray-700 text-sm">Group Code</label>
        </div>
        
        <div class="flex gap-3 mb-8">
          <div class="relative flex-grow">
            <input type="text" placeholder="E.G., CEBU2024" class="w-full border border-gray-200 bg-gray-50 rounded-full pl-5 pr-20 py-3 outline-none focus:ring-2 focus:ring-[#2A8B8B] text-sm text-gray-700 uppercase font-medium">
            <button class="absolute right-1.5 top-1.5 bottom-1.5 bg-[#D97736] text-white text-xs px-4 rounded-full hover:bg-[#c4682c] transition font-bold">Paste</button>
          </div>
        </div>

        <div class="flex items-center justify-center gap-4 mb-8">
          <div class="h-px bg-gray-200 flex-1"></div>
          <span class="text-xs text-gray-400 font-bold tracking-widest uppercase">Or</span>
          <div class="h-px bg-gray-200 flex-1"></div>
        </div>

        <button class="w-full border-2 border-gray-100 bg-white text-gray-700 font-bold py-3.5 rounded-xl shadow-sm hover:bg-gray-50 transition flex justify-center items-center gap-2 mb-4">
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
          Join via Link
        </button>
        
        <p class="text-center text-xs text-gray-400 mb-8">Ask your trip organizer for the group code.</p>

        <div class="border-t border-gray-100 pt-8">
          <p class="text-center text-sm text-gray-500 mb-4 font-medium">Are you hosting a trip?</p>
          <button class="w-full bg-[#2A8B8B] text-white font-bold py-3.5 rounded-xl shadow-md hover:bg-[#217070] transition flex justify-center items-center gap-2">
            Generate Host Link
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
