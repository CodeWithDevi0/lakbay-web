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
        <h3 class="font-medium text-lg">Scan Receipt</h3>
        <button @click="$emit('close')" class="bg-white text-gray-800 rounded-full p-1.5 shadow-sm hover:scale-105 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
      </div>
      
      <div class="p-8">
        <div class="border-2 border-dashed border-gray-300 rounded-3xl p-8 flex flex-col items-center justify-center bg-gray-50 relative">
          
          <div class="bg-white border border-gray-100 w-20 h-20 rounded-2xl flex items-center justify-center text-[#D97736] shadow-sm mb-6">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"></path></svg>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-2">Scan Your Receipt</h3>
          <p class="text-sm text-gray-500 mb-8 text-center">Use your camera or upload an image to extract data automatically.</p>

          <button class="w-full bg-[#2A8B8B] text-white font-bold py-3.5 rounded-xl shadow-md hover:bg-[#217070] transition flex justify-center items-center gap-2 mb-4">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Scan with Camera
          </button>
          
          <button class="w-full bg-white border border-gray-200 text-gray-700 font-bold py-3.5 rounded-xl shadow-sm hover:bg-gray-50 transition flex justify-center items-center gap-2">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
            Upload Image
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
