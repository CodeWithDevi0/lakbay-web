<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const members = ref([
  { name: 'Stephanie', role: 'Organizer', img: 'https://i.pravatar.cc/150?u=s' },
  { name: 'Arjean', role: 'Member', img: 'https://i.pravatar.cc/150?u=a' },
  { name: 'Kenneth', role: 'Member', img: 'https://i.pravatar.cc/150?u=k' },
  { name: 'YuKen', role: 'Member', img: 'https://i.pravatar.cc/150?u=y' }
]);

const expenses = ref([
  { category: 'Accommodation', sub: 'Hotels & Lodging', amount: 10180, icon: '🏨' },
  { category: 'Food & Dining', sub: 'Meals & Snacks', amount: 7635, icon: '🍽️' },
  { category: 'Transportation', sub: 'Flights & Taxi', amount: 5200, icon: '🚗' },
  { category: 'Activities', sub: 'Tours & Fees', amount: 2435, icon: '🎟️' }
]);
</script>

<template>
  <div class="pb-24 pt-10 min-h-screen bg-[#F8FAFB]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
      
      <div class="flex items-center gap-5 mb-12">
        <button @click="router.back()" class="p-4 bg-white border-2 border-gray-100 hover:border-[#2A8B8B] hover:bg-teal-50 rounded-3xl transition-all shadow-md group">
          <svg class="w-6 h-6 text-gray-600 group-hover:text-[#2A8B8B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <h1 class="text-4xl font-black text-gray-800 uppercase tracking-tighter">4 IDIOTS</h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div class="lg:col-span-5 space-y-8">
          <div class="flex items-center gap-3">
            <div class="w-3 h-8 bg-[#2A8B8B] rounded-full shadow-sm shadow-teal-900/20"></div>
            <h3 class="text-sm font-black text-[#2A8B8B] uppercase tracking-[0.3em]">Trip Members</h3>
          </div>
          
          <div class="grid gap-5">
            <div v-for="m in members" :key="m.name" class="flex items-center justify-between p-6 bg-white rounded-[2.5rem] border-2 border-gray-100 shadow-lg shadow-black/[0.02] hover:border-[#2A8B8B]/60 transition-all group">
              <div class="flex items-center gap-5">
                <img :src="m.img" class="w-16 h-16 rounded-3xl object-cover border-4 border-[#F8FAFB] shadow-md group-hover:border-teal-50 transition-colors" />
                <div>
                  <p class="font-black text-gray-800 text-xl">{{ m.name }}</p>
                  <p class="text-[11px] text-gray-400 font-black uppercase tracking-widest">{{ m.role }}</p>
                </div>
              </div>
              <span v-if="m.role === 'Organizer'" class="text-[10px] font-black text-[#2A8B8B] bg-teal-50 px-4 py-2 rounded-2xl border-2 border-teal-100 uppercase">Organizer</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-8">
          <div class="flex items-center gap-3">
            <div class="w-3 h-8 bg-[#2A8B8B] rounded-full shadow-sm shadow-teal-900/20"></div>
            <h3 class="text-sm font-black text-[#2A8B8B] uppercase tracking-[0.3em]">Trip Receipt</h3>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div class="summary-card-orange border-4 hover:scale-[1.02] transition-transform">
              <p class="text-xs font-black text-[#D97736] uppercase tracking-[0.2em] mb-3">Total Expenses</p>
              <p class="text-6xl font-black text-gray-800 tracking-tighter">₱25,450</p>
            </div>
            <div class="summary-card-teal border-4 hover:scale-[1.02] transition-transform">
              <p class="text-xs font-black text-[#2A8B8B] uppercase tracking-[0.2em] mb-3">Per Person</p>
              <p class="text-6xl font-black text-gray-800 tracking-tighter">₱8,483</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div v-for="ex in expenses" :key="ex.category" class="flex items-center justify-between p-8 bg-white rounded-[3rem] border-2 border-gray-100 shadow-md hover:border-[#D97736]/50 transition-all">
              <div class="flex items-center gap-6">
                <div class="w-16 h-16 bg-[#F8FAFB] border-2 border-gray-200 rounded-[1.5rem] flex items-center justify-center text-3xl shadow-inner">{{ ex.icon }}</div>
                <div>
                  <p class="font-black text-[#2A8B8B] text-xl">{{ ex.category }}</p>
                  <p class="text-[11px] text-[#D97736] font-black uppercase tracking-widest">{{ ex.sub }}</p>
                </div>
              </div>
              <p class="font-black text-gray-800 text-2xl tracking-tighter">₱{{ ex.amount.toLocaleString() }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>