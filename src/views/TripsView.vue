<script setup>
import { ref } from 'vue';

const activeTab = ref('All');
const tabs = ['All', 'Upcoming', 'Ongoing','Completed'];

const trips = ref([
  {
    id: 1, title: 'Kota Beach Resort', location: 'Bantayan Cebu, Philippines', date: 'Dec 20-25, 2024',
    status: 'Completed', spent: '₱5,550', totalBudget: '₱25,000', budgetPercent: 22,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
  }
]);
</script>

<template>
  <div class="p-6 sm:p-10 lg:p-12 max-w-5xl mx-auto">
    
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
      <h1 class="text-3xl font-bold text-[#2A8B8B]">Your Trips</h1>
      
      <div class="bg-white rounded-xl flex items-center px-4 py-2 border border-gray-200 shadow-sm w-full sm:w-72">
        <input type="text" placeholder="Search trips..." class="bg-transparent border-none outline-none w-full text-sm text-gray-700">
      </div>
    </div>

    <div class="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10">
      <div class="flex gap-2 bg-gray-100 p-1 rounded-xl">
        <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
                :class="['px-6 py-2 rounded-lg text-sm font-semibold transition', 
                         activeTab === tab ? 'bg-white text-[#D97736] shadow-sm' : 'text-gray-500 hover:text-gray-700']">
          {{ tab }}
        </button>
      </div>

      <div class="flex gap-4 w-full lg:w-auto">
        <div class="bg-orange-50 border border-orange-100 rounded-xl p-4 flex-1 lg:w-40">
          <p class="text-xs text-[#D97736] font-semibold uppercase tracking-wide mb-1">Total Spent</p>
          <p class="text-2xl font-bold text-gray-800">₱5,550</p>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'Upcoming'" class="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
      <p class="font-bold text-gray-500 text-lg">No upcoming trips yet</p>
      <p class="text-sm text-gray-400 mt-1">Time to start planning!</p>
    </div>

    <div v-else-if="activeTab === 'Ongoing'" class="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
      <p class="font-bold text-gray-500 text-lg">No upcoming trips yet</p>
      <p class="text-sm text-gray-400 mt-1">Time to start planning!</p>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div v-for="trip in trips" :key="trip.id" class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition">
        <div class="flex flex-col sm:flex-row h-full">
          <div class="w-full sm:w-2/5 h-48 sm:h-auto relative">
            <img :src="trip.image" class="absolute inset-0 w-full h-full object-cover" />
            <span class="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">{{ trip.status }}</span>
          </div>

          <div class="w-full sm:w-3/5 p-5 flex flex-col justify-between">
            <div>
              <h3 class="font-bold text-gray-800 text-lg mb-1">{{ trip.title }}</h3>
              <p class="text-xs text-gray-500 mb-4">{{ trip.date }}</p>
              
              <div class="mb-2">
                <div class="flex justify-between text-xs mb-1">
                  <span class="font-semibold text-gray-600">Budget</span>
                  <span class="font-bold text-[#2A8B8B]">{{ trip.budgetPercent }}%</span>
                </div>
                <div class="w-full bg-gray-100 rounded-full h-2">
                  <div class="bg-[#2A8B8B] h-2 rounded-full" :style="{ width: trip.budgetPercent + '%' }"></div>
                </div>
              </div>
            </div>

            <button class="w-full mt-4 border border-gray-200 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition">
              View Itinerary
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>