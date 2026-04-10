<script setup>
import { ref } from 'vue';

const destinations = ref([
  { id: 1, name: 'Kota Beach Resort', location: 'Bantayan, Cebu', distance: '380 km from Manila', price: '₱ 12,000', match: '92%', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Camiguin', location: 'Northern Mindanao', distance: '1,200 km from Manila', price: '₱ 9,000', match: '90%', image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=400&q=80' }
]);
</script>

<template>
  <div class="pb-24 pt-12 bg-lakbay-bg">
    <div class="px-6 mb-6">
      <h1 class="text-3xl font-serif font-bold text-lakbay-teal text-center mb-6">Lakbay<span class="text-lakbay-orange">+</span></h1>
    </div>

    <div class="bg-lakbay-orange rounded-t-3xl p-6 pb-8 text-white relative">
      <h2 class="text-lg font-semibold">Kamusta, Stefani! 👋</h2>
      <p class="text-sm opacity-90 mb-4">Plan your next adventure</p>
      
      <div class="bg-white rounded-full p-2 flex items-center shadow-lg relative -mb-12">
        <div class="flex-grow pl-4">
          <p class="text-xs text-gray-500 font-semibold mb-1">Tell me what you're looking for...</p>
          <button class="w-full bg-lakbay-teal text-white text-sm font-bold py-2 rounded-full">
            ✨ Get AI Recommendations
          </button>
        </div>
      </div>
    </div>

    <div class="px-6 mt-16 flex gap-4">
      <button class="flex-1 bg-white text-lakbay-teal border border-lakbay-teal py-2 rounded-full font-semibold text-sm shadow-sm flex justify-center items-center gap-1">
        + New Trip
      </button>
      <button class="flex-1 bg-white text-lakbay-teal border border-lakbay-teal py-2 rounded-full font-semibold text-sm shadow-sm flex justify-center items-center gap-1">
        Join Group
      </button>
    </div>

    <div class="px-6 mt-8">
      <h3 class="text-lakbay-teal font-bold mb-4">Suggested Destinations</h3>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="dest in destinations" :key="dest.id" class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 pb-3">
          <div class="relative h-32">
            <img :src="dest.image" class="w-full h-full object-cover" />
            <span class="absolute top-2 right-2 bg-lakbay-teal text-white text-xs px-2 py-1 rounded-full">{{ dest.match }} match</span>
          </div>
          <div class="px-3 pt-3">
            <h4 class="font-semibold text-lakbay-teal text-sm truncate">{{ dest.name }}</h4>
            <p class="text-xs text-gray-400 mt-1">{{ dest.location }}</p>
            <div class="flex justify-between items-center mt-2">
              <span class="text-lakbay-teal font-bold text-sm">{{ dest.price }}</span>
              <span class="bg-orange-200 text-orange-800 text-[10px] px-2 py-0.5 rounded-md font-semibold">Lokal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>