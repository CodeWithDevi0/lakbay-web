<script setup>
import { ref } from 'vue';

// 1. Import your extracted Data
import { destinationsData } from '@/assets/destinations.js';

// 2. Import your external Modal Components
import DestinationPanel from '@/components/modals/DestinationPanel.vue';
import NewTripModal from '@/components/modals/NewTrip.vue';
import JoinGroupModal from '@/components/modals/JoinGroup.vue';
import ScanReceiptModal from '@/components/modals/ScanReceipt.vue';

// 3. Make data reactive
const destinations = ref(destinationsData);

// 4. Manage Modal States
const activeModal = ref(null); 
const selectedDestination = ref(null); 
const isDetailsOpen = ref(false);

const closeModal = () => { activeModal.value = null; };
const openDetails = (dest) => { selectedDestination.value = dest; isDetailsOpen.value = true; };
const closeDetails = () => { isDetailsOpen.value = false; };
</script>

<template>
  <div class="pb-24 pt-10 min-h-screen bg-gray-50/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="bg-gradient-to-r from-[#D97736] to-[#E59866] rounded-3xl p-6 sm:p-8 lg:p-12 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 mb-8 sm:mb-10 relative overflow-hidden">
        <div class="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div class="md:w-1/2 relative z-10 text-center md:text-left">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 flex items-center justify-center md:justify-start gap-2">Kamusta, YuKen! 👋</h2>
          <p class="text-white/90 text-base sm:text-lg">Plan your next group adventure.</p>
        </div>
        <div class="md:w-1/2 w-full max-w-lg relative z-10">
          <div class="bg-white rounded-3xl sm:rounded-full p-2 sm:p-1.5 flex flex-col sm:flex-row items-center shadow-xl border border-white/20 gap-2 sm:gap-0">
            <input type="text" placeholder="Tell me what you're looking for..." class="flex-grow w-full bg-transparent border-none outline-none px-4 py-2 sm:py-0 text-gray-700 text-sm placeholder-gray-400 text-center sm:text-left">
            <button class="w-full sm:w-auto bg-[#2A8B8B] text-white text-sm font-bold py-3 sm:py-3 px-8 rounded-2xl sm:rounded-full hover:bg-[#217070] transition shadow-sm whitespace-nowrap shrink-0">✨ Ask AI</button>
          </div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-12">
        <button @click="activeModal = 'newTrip'" class="w-full sm:w-auto bg-white text-[#2A8B8B] border border-[#2A8B8B]/30 py-3 px-8 rounded-full font-bold text-sm shadow-sm hover:bg-teal-50 transition">+ Create New Trip</button>
        <button @click="activeModal = 'joinGroup'" class="w-full sm:w-auto bg-white text-[#2A8B8B] border border-[#2A8B8B]/30 py-3 px-8 rounded-full font-bold text-sm shadow-sm hover:bg-teal-50 transition">Join Group</button>
        <button @click="activeModal = 'scanReceipt'" class="w-full sm:w-auto bg-white text-[#D97736] border border-[#D97736]/30 py-3 px-8 rounded-full font-bold text-sm shadow-sm hover:bg-orange-50 transition sm:ml-auto">📷 Scan Receipt</button>
      </div>

      <div>
        <h3 class="text-2xl text-[#2A8B8B] font-bold mb-6">Suggested Destinations</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="dest in destinations" :key="dest.id" @click="openDetails(dest)" class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group cursor-pointer">
            <div class="relative h-48">
              <img :src="dest.image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span class="absolute top-3 right-3 bg-[#2A8B8B] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">{{ dest.match }} match</span>
            </div>
            <div class="p-5">
              <h4 class="font-bold text-[#2A8B8B] text-lg truncate mb-1">{{ dest.name }}</h4>
              <p class="text-xs text-gray-400">{{ dest.location }}</p>
              <div class="flex justify-between items-center mt-4 border-t border-gray-50 pt-4">
                <span class="text-[#D97736] font-bold text-base">{{ dest.price }}</span>
                <span v-if="dest.lokal" class="bg-[#F4D03F]/20 text-yellow-800 text-[10px] px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">Lokal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DestinationPanel 
      :is-open="isDetailsOpen" 
      :destination="selectedDestination" 
      @close="closeDetails" 
      @create-trip="closeDetails(); activeModal = 'newTrip'" 
    />
    
    <NewTripModal :is-open="activeModal === 'newTrip'" @close="closeModal" />
    <JoinGroupModal :is-open="activeModal === 'joinGroup'" @close="closeModal" />
    <ScanReceiptModal :is-open="activeModal === 'scanReceipt'" @close="closeModal" />

  </div>
</template>