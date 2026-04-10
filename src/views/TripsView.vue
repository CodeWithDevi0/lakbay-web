<script setup>
import { ref } from 'vue';

const activeTab = ref('All');
const tabs = ['All', 'Upcoming', 'Ongoing'];

const trips = ref([
  {
    id: 1,
    title: 'Kota Beach Resort',
    location: 'Bantayan Cebu, Philippines',
    date: 'Dec 20-25, 2024',
    status: 'Completed',
    spent: '₱5,550',
    totalBudget: '₱25,000',
    budgetPercent: 22,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
  }
]);
</script>

<template>
  <div class="pb-24 bg-gray-50 min-h-screen">
    <div class="bg-lakbay-orange pt-12 pb-4 px-6 flex items-center gap-3">
      <div class="bg-white rounded-xl flex-grow flex items-center px-3 py-2 shadow-inner">
        <input type="text" placeholder="Search trips ..." class="bg-transparent border-none outline-none w-full text-sm">
      </div>
    </div>

    <div class="flex px-6 mt-4 gap-2 overflow-x-auto">
      <button v-for="tab in tabs" :key="tab" 
              @click="activeTab = tab"
              :class="['px-5 py-1.5 rounded-full text-sm font-medium border', 
                       activeTab === tab ? 'text-lakbay-orange border-lakbay-orange bg-orange-50' : 'text-lakbay-teal border-lakbay-teal bg-white']">
        {{ tab }}
      </button>
    </div>

    <div class="px-6 mt-6">
      <div v-if="activeTab === 'Upcoming'" class="text-center mt-20 text-gray-500">
        <p class="font-semibold text-gray-700">No upcoming trips</p>
      </div>

      <div v-else class="space-y-6">
        <div v-for="trip in trips" :key="trip.id" class="bg-white rounded-2xl overflow-hidden shadow-md">
          <div class="relative h-40">
            <img :src="trip.image" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <span class="absolute top-3 left-3 bg-gray-600/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">{{ trip.status }}</span>
            <div class="absolute bottom-3 left-3 text-white">
              <h3 class="font-bold text-lg">{{ trip.title }}</h3>
              <p class="text-xs opacity-90">{{ trip.location }}</p>
            </div>
          </div>

          <div class="p-4">
            <div class="flex justify-between text-sm mb-1">
              <span class="font-medium text-gray-700">Budget</span>
              <span class="font-bold">{{ trip.budgetPercent }}%</span>
            </div>
            <div class="w-full bg-teal-100 rounded-full h-2.5 mb-1">
              <div class="bg-lakbay-teal h-2.5 rounded-full" :style="{ width: trip.budgetPercent + '%' }"></div>
            </div>
            
            <button class="w-full mt-4 border border-gray-300 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50">
              View Details >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>