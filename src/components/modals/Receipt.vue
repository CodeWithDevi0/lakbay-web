<script setup>
import { defineProps, defineEmits, watch, onUnmounted } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  receiptImage: String,
  tripTitle: String
});

defineEmits(['close']);

// Lock background scroll when modal is open
watch(() => props.isOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-[150] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
    <div class="bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh] animate-slide-up">
      
      <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-[#Fdfbf9]">
        <div>
          <h3 class="font-bold text-[#2A8B8B] text-lg">Travel Receipt</h3>
          <p class="text-xs text-gray-400">{{ tripTitle }}</p>
        </div>
        <button @click="$emit('close')" class="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
          <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <div class="overflow-y-auto flex-grow p-4 bg-gray-100 custom-scrollbar">
        <img :src="receiptImage" class="w-full h-auto rounded-2xl shadow-sm" alt="Travel Receipt" />
      </div>

      <div class="p-6 border-t border-gray-100 flex gap-3 bg-white">
        <button class="flex-1 border border-gray-200 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition">
          Download PDF
        </button>
        <button class="flex-1 bg-[#D97736] text-white py-3 rounded-xl font-bold shadow-md hover:bg-[#c4682c] transition">
          Share
        </button>
      </div>
    </div>
  </div>
</template>