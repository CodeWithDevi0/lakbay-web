<script setup>
import { defineProps, defineEmits, watch, onUnmounted } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  destination: Object
});

defineEmits(['close', 'create-trip']);

const formatReviews = (count) => {
  return `(${count.toLocaleString()} reviews)`;
};

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
  <div v-if="isOpen && destination" @click.self="$emit('close')" class="fixed inset-0 z-[100] cursor-pointer flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 lg:p-8 animate-fade-in">
    
    <div class="bg-white w-full h-full sm:h-[90vh] max-w-7xl rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-slide-up flex flex-col md:flex-row relative cursor-default">
      
      <div class="w-full md:w-[45%] lg:w-[40%] xl:w-[35%] relative shrink-0 h-64 md:h-full">
        
        <div class="absolute top-0 left-0 right-0 p-5 flex justify-between items-center z-20 md:hidden">
          <button @click="$emit('close')" class="bg-white/80 p-2.5 rounded-full text-gray-700 hover:bg-white transition shadow-lg backdrop-blur-sm"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg></button>
          <div class="flex gap-3">
            <button class="bg-white/80 p-2.5 rounded-full text-gray-700 hover:bg-white transition shadow-lg backdrop-blur-sm"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg></button>
            <button class="bg-white/80 p-2.5 rounded-full text-red-500 hover:bg-white transition shadow-lg backdrop-blur-sm"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg></button>
          </div>
        </div>

        <img :src="destination.image" :alt="destination.name" class="w-full h-full object-cover">
        
        <button @click="$emit('close')" class="hidden md:flex absolute top-5 left-5 bg-white/70 p-3 rounded-full text-gray-700 hover:bg-white transition shadow-lg backdrop-blur-sm z-20"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg></button>
        
        <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 md:hidden"></div>
        
        <div class="absolute bottom-6 left-6 right-6 z-20 text-white md:hidden">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-[#2A8B8B] text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider">{{ destination.match }} MATCH</span>
            <span v-if="destination.lokal" class="bg-[#F4D03F] text-yellow-900 text-[10px] px-3 py-1.5 rounded-full font-bold tracking-wider">LOKAL PICK</span>
          </div>
          <h1 class="text-3xl font-extrabold tracking-tight mb-1">{{ destination.name }}</h1>
          <p class="text-sm text-gray-200 flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> {{ destination.location }}</p>
        </div>
      </div>

      <div class="flex-grow flex flex-col overflow-hidden bg-white relative h-full">
        
        <div class="flex-grow overflow-y-auto custom-scrollbar">
          
          <div class="hidden md:block p-8 pb-4 border-b border-gray-100 bg-white sticky top-0 z-10 shadow-sm">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h1 class="text-4xl font-extrabold text-[#2A8B8B] tracking-tight mb-1.5">{{ destination.name }}</h1>
                <p class="text-base text-gray-500 flex items-center gap-1.5"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> {{ destination.location }}</p>
              </div>
              <div class="flex gap-3">
                <button class="border border-gray-200 p-3 rounded-full text-gray-500 hover:text-[#2A8B8B] hover:border-teal-100 hover:bg-teal-50 transition shadow-sm"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg></button>
                <button class="border border-gray-200 p-3 rounded-full text-red-400 hover:text-red-500 hover:border-red-100 hover:bg-red-50 transition shadow-sm"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="bg-[#2A8B8B] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full tracking-wider">{{ destination.match }} MATCH</span>
              <span v-if="destination.lokal" class="bg-[#F4D03F]/30 text-yellow-900 text-[11px] px-3.5 py-1.5 rounded-full font-bold tracking-wider">LOKAL PICK</span>
            </div>
          </div>

          <div class="p-6 md:p-8 space-y-8">
            <div class="flex flex-wrap items-center gap-3">
              <div class="flex items-center gap-1.5">
                <svg class="w-6 h-6 text-[#F4D03F]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <span class="text-lg font-bold text-[#2A8B8B]">{{ destination.rating.toFixed(1) }}</span>
                <span class="text-sm text-gray-500 ml-1 mr-2">{{ formatReviews(destination.reviewCount) }}</span>
              </div>
              <span v-for="tag in destination.tags" :key="tag" class="bg-[#F4EBE1] text-[#2A8B8B] px-3.5 py-1 rounded-full text-xs font-bold shadow-sm">
                {{ tag }}
              </span>
            </div>

            <section>
              <h3 class="text-xl font-bold text-[#2A8B8B] mb-3">About</h3>
              <p class="text-gray-600 leading-relaxed text-sm md:text-base">{{ destination.about }}</p>
              
              <div v-if="destination.quickStats" class="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
                <div class="bg-[#fcf5ef] border border-orange-100 p-4 rounded-2xl flex flex-col justify-center items-center text-center">
                  <svg class="w-6 h-6 text-[#D97736] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <p class="text-xs text-gray-500 mb-1">Best Time</p>
                  <p class="text-sm font-bold text-[#2A8B8B]">{{ destination.quickStats.bestTime }}</p>
                </div>
                <div class="bg-[#fcf5ef] border border-orange-100 p-4 rounded-2xl flex flex-col justify-center items-center text-center">
                  <svg class="w-6 h-6 text-[#F4D03F] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                  <p class="text-xs text-gray-500 mb-1">Temperature</p>
                  <p class="text-sm font-bold text-[#2A8B8B]">{{ destination.quickStats.temp }}</p>
                </div>
                <div class="bg-[#fcf5ef] border border-orange-100 p-4 rounded-2xl flex flex-col justify-center items-center text-center">
                  <svg class="w-6 h-6 text-[#2A8B8B] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <p class="text-xs text-gray-500 mb-1">Duration</p>
                  <p class="text-sm font-bold text-[#2A8B8B]">{{ destination.quickStats.duration }}</p>
                </div>
                <div class="bg-[#fcf5ef] border border-orange-100 p-4 rounded-2xl flex flex-col justify-center items-center text-center">
                  <svg class="w-6 h-6 text-[#D97736] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                  <p class="text-xs text-gray-500 mb-1">Distance</p>
                  <p class="text-sm font-bold text-[#2A8B8B] truncate w-full px-2">{{ destination.quickStats.distance }}</p>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-xl font-bold text-[#2A8B8B] mb-4">Highlights</h3>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="highlight in destination.highlights" :key="highlight" class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-[#F4D03F] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                  <span class="text-sm font-medium text-gray-700">{{ highlight }}</span>
                </div>
              </div>
            </section>

            <section v-if="destination.popularActivities">
              <h3 class="text-xl font-bold text-[#2A8B8B] mb-4">Popular Activities</h3>
              <div class="flex flex-wrap gap-3">
                <div v-for="activity in destination.popularActivities" :key="activity" class="border border-[#2A8B8B]/30 bg-white shadow-sm px-4 py-2.5 rounded-full flex items-center gap-2 text-sm font-bold text-[#2A8B8B] hover:bg-teal-50 transition cursor-default">
                  <svg class="w-4 h-4 text-[#2A8B8B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
                  {{ activity }}
                </div>
              </div>
            </section>

            <section v-if="destination.routePreview">
              <h3 class="text-xl font-bold text-[#2A8B8B] mb-4">Route Preview</h3>
              <div class="w-full h-48 bg-blue-50 rounded-2xl mb-4 relative overflow-hidden border border-gray-200">
                <img :src="destination.routePreview.mapImage" class="w-full h-full object-cover opacity-70" alt="Map View">
                <div class="absolute inset-0 bg-gradient-to-t from-[#2A8B8B]/20 to-transparent mix-blend-multiply"></div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-4 w-full px-12">
                  <div class="w-8 h-8 bg-[#2A8B8B] rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold z-10 relative">1</div>
                  <div class="h-1 bg-white flex-grow shadow-sm"></div>
                  <div class="w-8 h-8 bg-[#D97736] rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold z-10 relative">2</div>
                </div>
              </div>
              
              <div class="grid grid-cols-3 gap-3">
                <div class="bg-[#fcf5ef] border border-orange-100 p-4 rounded-2xl flex flex-col justify-center items-center text-center">
                  <svg class="w-5 h-5 text-[#2A8B8B] mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 7m0 10V7m0 0l-6-3"></path></svg>
                  <p class="text-[11px] text-gray-500 mb-0.5">Distance</p>
                  <p class="text-sm font-bold text-[#2A8B8B]">{{ destination.routePreview.distance }}</p>
                </div>
                <div class="bg-[#fcf5ef] border border-orange-100 p-4 rounded-2xl flex flex-col justify-center items-center text-center">
                  <svg class="w-5 h-5 text-[#D97736] mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <p class="text-[11px] text-gray-500 mb-0.5">Travel Time</p>
                  <p class="text-sm font-bold text-[#2A8B8B]">{{ destination.routePreview.travelTime }}</p>
                </div>
                <div class="bg-[#fcf5ef] border border-orange-100 p-4 rounded-2xl flex flex-col justify-center items-center text-center">
                  <svg class="w-5 h-5 text-[#2A8B8B] mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <p class="text-[11px] text-gray-500 mb-0.5">Stops</p>
                  <p class="text-sm font-bold text-[#2A8B8B]">{{ destination.routePreview.stops }}</p>
                </div>
              </div>
            </section>

            <section v-if="destination.budgetBreakdown">
              <h3 class="text-xl font-bold text-[#2A8B8B] mb-4">Estimated Budget Breakdown</h3>
              <div class="bg-[#fcf5ef] rounded-3xl p-6 sm:p-8 border border-orange-100">
                <div class="flex justify-between items-center mb-6">
                  <span class="text-gray-600 font-medium">Total per person</span>
                  <span class="text-[#2A8B8B] font-bold text-lg">{{ destination.budgetBreakdown.total }}</span>
                </div>
                <hr class="border-orange-200/60 mb-6" />
                <div class="space-y-4">
                  <div class="flex justify-between items-center text-sm">
                    <div class="flex items-center gap-3 text-gray-600">
                      <svg class="w-4 h-4 text-[#2A8B8B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                      Accommodation
                    </div>
                    <span class="font-bold text-[#2A8B8B]">{{ destination.budgetBreakdown.accommodation }}</span>
                  </div>
                  <div class="flex justify-between items-center text-sm">
                    <div class="flex items-center gap-3 text-gray-600">
                      <svg class="w-4 h-4 text-[#D97736]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path></svg>
                      Food & Drinks
                    </div>
                    <span class="font-bold text-[#2A8B8B]">{{ destination.budgetBreakdown.food }}</span>
                  </div>
                  <div class="flex justify-between items-center text-sm">
                    <div class="flex items-center gap-3 text-gray-600">
                      <svg class="w-4 h-4 text-[#F4D03F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      Activities & Tours
                    </div>
                    <span class="font-bold text-[#2A8B8B]">{{ destination.budgetBreakdown.activities }}</span>
                  </div>
                  <div class="flex justify-between items-center text-sm">
                    <div class="flex items-center gap-3 text-gray-600">
                      <svg class="w-4 h-4 text-[#2A8B8B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                      Transportation
                    </div>
                    <span class="font-bold text-[#2A8B8B]">{{ destination.budgetBreakdown.transportation }}</span>
                  </div>
                </div>
              </div>
            </section>

            <section v-if="destination.gallery">
              <h3 class="text-xl font-bold text-[#2A8B8B] mb-4">Gallery</h3>
              <div class="flex gap-3 overflow-x-auto custom-scrollbar pb-4 -mx-6 px-6 md:mx-0 md:px-0">
                <img v-for="(img, idx) in destination.gallery" :key="idx" :src="img" class="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover shrink-0 border border-gray-100 shadow-sm" alt="Gallery Image">
              </div>
            </section>

          </div>
          
          <div class="border-t border-gray-100 bg-white p-4 sm:p-5 px-5 sm:px-8 shrink-0 flex justify-between items-center gap-4 w-full">
            <p class="text-[#2A8B8B] shrink-0">
              <span class="text-2xl sm:text-3xl font-extrabold text-[#D97736]">{{ destination.price }}</span>
              <span class="text-xs sm:text-sm font-medium text-gray-400"> / trip</span>
            </p>
            <div class="flex items-center justify-end gap-3 shrink-0">
              <button @click="$emit('close')" class="bg-white border-2 border-gray-200 text-gray-600 font-bold py-2 sm:py-2.5 px-4 sm:px-6 rounded-xl hover:bg-gray-50 transition shadow-sm text-xs sm:text-sm">
                Maybe Later
              </button>
              <button @click="$emit('create-trip')" class="bg-[#D97736] text-white font-bold py-2 sm:py-2.5 px-4 sm:px-6 rounded-xl hover:bg-[#c4682c] transition shadow-md text-xs sm:text-sm whitespace-nowrap">
                Create Trip
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template> 