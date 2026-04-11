<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  destination: Object
});

const emit = defineEmits(['close']);

const formatReviews = (count) => {
  return `(${count} reviews)`;
};
</script>

<template>
  <div v-if="isOpen && destination" class="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 lg:p-8 animate-fade-in" @click.self="$emit('close')">
    
    <div class="bg-white w-full h-full sm:h-[90vh] max-w-7xl rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-slide-up flex flex-col">
      
      <div class="flex-grow flex flex-col md:flex-row overflow-hidden relative">
        
        <div class="absolute top-0 left-0 right-0 p-5 flex justify-between items-center z-20 md:hidden">
          <button @click="$emit('close')" class="bg-white/80 p-2.5 rounded-full text-gray-700 hover:bg-white transition shadow-lg backdrop-blur-sm"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg></button>
          <div class="flex gap-3">
            <button class="bg-white/80 p-2.5 rounded-full text-gray-700 hover:bg-white transition shadow-lg backdrop-blur-sm"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg></button>
            <button class="bg-white/80 p-2.5 rounded-full text-red-500 hover:bg-white transition shadow-lg backdrop-blur-sm"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg></button>
          </div>
        </div>

        <div class="md:w-[45%] lg:w-[40%] xl:w-[35%] relative shrink-0">
          <img :src="destination.image" :alt="destination.name" class="w-full h-72 sm:h-96 md:h-full object-cover">
          
          <button @click="$emit('close')" class="hidden md:flex absolute top-5 left-5 bg-white/70 p-3 rounded-full text-gray-700 hover:bg-white transition shadow-lg backdrop-blur-sm z-20"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg></button>
          
          <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 md:hidden"></div>
          
          <div class="absolute bottom-6 left-6 right-6 z-20 text-white md:hidden">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-[#2A8B8B] text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider">{{ destination.match }} MATCH</span>
              <span v-if="destination.lokal" class="bg-[#F4D03F] text-yellow-900 text-[10px] px-3 py-1.5 rounded-full font-bold tracking-wider">LOKAL</span>
            </div>
            <h1 class="text-3xl font-extrabold tracking-tight mb-1">{{ destination.name }}</h1>
            <p class="text-sm text-gray-200 flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> {{ destination.location }}</p>
          </div>
        </div>

        <div class="flex-grow overflow-y-auto custom-scrollbar bg-gray-50/50 flex flex-col pb-24 md:pb-0">
          
          <div class="hidden md:block p-8 pb-4 border-b border-gray-100 bg-white sticky top-0 z-10">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h1 class="text-4xl font-extrabold text-[#2A8B8B] tracking-tight mb-1.5">{{ destination.name }}</h1>
                <p class="text-base text-gray-500 flex items-center gap-1.5"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> {{ destination.location }}</p>
              </div>
              <div class="flex gap-3">
                <button class="border border-gray-200 p-3 rounded-full text-gray-500 hover:text-lakbay-teal hover:border-teal-100 hover:bg-teal-50 transition shadow-sm"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg></button>
                <button class="border border-gray-200 p-3 rounded-full text-red-400 hover:text-red-500 hover:border-red-100 hover:bg-red-50 transition shadow-sm"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="bg-[#2A8B8B] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full tracking-wider">{{ destination.match }} MATCH</span>
              <span v-if="destination.lokal" class="bg-[#F4D03F]/30 text-yellow-900 text-[11px] px-3.5 py-1.5 rounded-full font-bold tracking-wider">LOKAL</span>
              <div class="flex items-center gap-1 text-base ml-auto">
                <span class="text-2xl font-bold text-gray-800">{{ destination.rating.toFixed(1) }}</span>
                <svg class="w-6 h-6 text-[#F4D03F]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <span class="text-sm text-gray-400 font-medium">{{ formatReviews(destination.reviewCount) }}</span>
              </div>
            </div>
          </div>

          <div class="p-6 md:p-8 space-y-8">
            
            <div class="md:hidden flex items-center gap-2 border border-gray-100 bg-white p-4 rounded-xl shadow-sm">
              <span class="text-3xl font-bold text-gray-800">{{ destination.rating.toFixed(1) }}</span>
              <svg class="w-7 h-7 text-[#F4D03F]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <span class="text-sm text-gray-400 font-medium ml-1">{{ formatReviews(destination.reviewCount) }}</span>
            </div>

            <section>
              <h3 class="text-xl font-bold text-gray-800 mb-3">About</h3>
              <p class="text-gray-600 leading-relaxed text-sm md:text-base">{{ destination.about }}</p>
            </section>

            <section>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Highlights</h3>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div v-for="highlight in destination.highlights" :key="highlight" class="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-teal-50 hover:shadow-lg transition">
                  <svg class="w-5 h-5 text-[#2A8B8B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                  <span class="text-sm font-medium text-gray-700">{{ highlight }}</span>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-xl font-bold text-gray-800 mb-5">Reviews</h3>
              <div class="space-y-6">
                <div v-for="review in destination.reviews" :key="review.id" class="flex items-start gap-4 border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <img :src="review.avatar" :alt="review.name" class="w-10 h-10 rounded-full shrink-0">
                  <div class="flex-grow">
                    <p class="font-bold text-gray-700 text-sm">{{ review.name }}</p>
                    <div class="flex gap-0.5 text-[#F4D03F] mb-1.5 -ml-0.5">
                      <svg v-for="i in 5" :key="i" class="w-4 h-4" :fill="i <= review.rating ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                    </div>
                    <p class="text-gray-600 text-sm leading-relaxed">{{ review.comment }}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-100 bg-white p-5 px-6 shrink-0 mt-auto sticky bottom-0 z-[30]">
        <div class="flex justify-between items-center gap-4">
          <p class="text- lakbay-teal shrink-0">
            <span class="text-3xl font-extrabold text-[#D97736]">{{ destination.price }}</span>
            <span class="text-sm font-medium text-gray-400"> / trip</span>
          </p>
          <button class="w-full sm:w-auto bg-[#D97736] text-white font-bold py-3.5 px-10 rounded-xl hover:bg-[#c4682c] transition flex items-center justify-center gap-2.5 shadow-md">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
            Plan with Lakbay AI
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
@keyframes slide-up { from { transform: translateY(100%); } to { transform: translateY(0); } }
.animate-fade-in { animation: fade-in 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
.animate-slide-up { animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; }
</style>