<script setup>
import { ref } from 'vue';

const groups = ref([
  {
    id: 'sinko',
    name: 'SINKO',
    status: 'COMPLETE',
    destination: 'Kota Beach Resort, Cebu',
    dates: 'Mar 25 - Mar 30, 2026',
    memberCount: 4,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600',
    avatars: ['https://i.pravatar.cc/150?u=1', 'https://i.pravatar.cc/150?u=2', 'https://i.pravatar.cc/150?u=3', 'https://i.pravatar.cc/150?u=4']
  },
  {
    id: '4-idiots',
    name: '4 IDIOTS',
    status: 'ONGOING',
    destination: 'Canibad Beach, Samal',
    dates: 'April 10 - 15, 2026',
    memberCount: 4,
    image: 'https://images.unsplash.com/photo-1539139113444-e43401f3b3ef?w=600',
    avatars: ['https://i.pravatar.cc/150?u=a', 'https://i.pravatar.cc/150?u=b', 'https://i.pravatar.cc/150?u=c', 'https://i.pravatar.cc/150?u=d']
  }
]);
</script>

<template>
  <div class="pb-24 pt-10 min-h-screen bg-[#F8FAFB]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
      
      <div class="flex justify-between items-center mb-10">
        <h1 class="text-3xl font-black text-[#2A8B8B] tracking-tight">Travel Groups</h1>
        <button class="bg-[#2A8B8B] text-white p-4 rounded-2xl shadow-xl shadow-teal-900/20 hover:shadow-teal-900/40 transition-all hover:-translate-y-1 active:scale-95">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" stroke-width="3" stroke-linecap="round"/></svg>
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <router-link v-for="group in groups" :key="group.id" :to="`/groups/${group.id}`" 
          class="bg-white rounded-[3rem] border-2 border-gray-100 ring-4 ring-black/[0.02] p-8 flex flex-col xl:flex-row items-center gap-10 hover:border-[#2A8B8B] hover:ring-[#2A8B8B]/10 hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-300 group relative overflow-hidden shadow-md">
          
          <div class="absolute top-6 right-8 flex items-center gap-2 bg-[#F8FAFB] px-4 py-1.5 rounded-full border border-gray-100">
            <span class="text-[10px] font-black text-gray-500 uppercase tracking-widest">{{ group.status }}</span>
            <svg class="w-4 h-4 text-[#D97736]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>

          <div class="w-48 h-48 rounded-full overflow-hidden shrink-0 border-[8px] border-gray-50 shadow-lg group-hover:border-teal-50 transition-colors">
            <img :src="group.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>

          <div class="flex-grow text-center xl:text-left">
            <h2 class="text-4xl font-black text-gray-800 mb-5 tracking-tighter group-hover:text-[#2A8B8B] transition-colors">{{ group.name }}</h2>
            
            <div class="space-y-4">
              <div class="flex items-center justify-center xl:justify-start gap-4">
                <div class="p-3 bg-teal-50 rounded-2xl text-[#2A8B8B] border-2 border-teal-100 shadow-sm">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke-width="2.5"/></svg>
                </div>
                <span class="font-black text-[#D97736] text-xl tracking-tight">{{ group.destination }}</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>