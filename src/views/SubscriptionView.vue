<script setup>
import { ref, computed } from 'vue';

// Manage the toggle state
const activePlan = ref('Pro');

// Data for the plans based on your Figma design
const plans = {
  Plus: {
    title: 'Lakbay+ PLUS',
    price: '₱99',
    period: '/month',
    subtext: 'Billed monthly. Cancel anytime.',
    savings: null,
    buttonText: 'Get Plus',
    features: [
      'Ad-free travel planning',
      'Basic AI Destination Matcher',
      'Up to 3 Active Group Trips',
      'Standard Email Support'
    ]
  },
  Pro: {
    title: 'Lakbay+ PRO',
    price: '₱199',
    period: '/month',
    subtext: 'Just ₱17/day',
    savings: '⚡ Save ₱1,089 (30% off)',
    buttonText: 'Upgrade to Premium',
    features: [
      'Everything in PLUS, plus:',
      'Unlimited Group Trips & Collaborators',
      'Advanced AI Itinerary Builder',
      'Offline Maps & Itinerary Access',
      'Priority 24/7 Support'
    ]
  }
};

const currentPlan = computed(() => plans[activePlan.value]);

// NEW: Data for the Comparison Table
const comparisonData = ref([
  { feature: 'Maximum Trips', basic: '3 trips', premium: 'Unlimited' },
  { feature: 'AI Suggestions', basic: '5/day', premium: 'Unlimited' },
  { feature: 'Route Optimization', basic: '—', premium: 'Included', isCheck: true },
  { feature: 'Offline Maps', basic: '—', premium: 'Included', isCheck: true },
  { feature: 'Priority Support', basic: '—', premium: 'Included', isCheck: true },
]);
</script>

<template>
  <div class="min-h-screen bg-gray-50/50 pb-24 font-sans">
    
    <div class="bg-gradient-to-b from-[#2A8B8B] to-[#1e6666] pt-12 pb-32 px-6 relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[4rem] shadow-md">
      <div class="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-[#D97736] opacity-10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div class="max-w-3xl mx-auto text-center relative z-10">
        
        <div class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
          <svg class="w-4 h-4 text-[#F4D03F]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          Limited Offer
        </div>

        <div class="flex justify-center mb-6">
          <div class="bg-[#F4EBE1] p-3 rounded-2xl shadow-lg border-2 border-white/20">
            <img src="@/assets/images/lakbay_logo.png" alt="Lakbay Logo" class="w-16 h-16 object-contain drop-shadow-sm" />
          </div>
        </div>
        
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
          {{ currentPlan.title }}
        </h1>
        <p class="text-white/90 text-lg sm:text-xl max-w-xl mx-auto font-medium">
          Unlock the full potential of your travel planning experience.
        </p>
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 -mt-20 relative z-20">
      
      <div class="flex justify-center mb-8">
        <div class="bg-white p-1.5 rounded-full shadow-lg border border-gray-100 flex items-center w-full max-w-sm relative">
          
          <button 
            @click="activePlan = 'Plus'" 
            :class="['flex-1 py-3 rounded-full text-sm font-bold transition-all duration-300 z-10', 
                     activePlan === 'Plus' ? 'bg-[#2A8B8B] text-white shadow-md' : 'text-gray-500 hover:text-gray-700']"
          >
            Plus
          </button>
          
          <button 
            @click="activePlan = 'Pro'" 
            :class="['flex-1 py-3 rounded-full text-sm font-bold transition-all duration-300 z-10 relative', 
                     activePlan === 'Pro' ? 'bg-[#2A8B8B] text-white shadow-md' : 'text-gray-500 hover:text-gray-700']"
          >
            Pro
            <span class="absolute -top-3 -right-2 bg-[#D97736] text-white text-[9px] sm:text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-sm border border-white uppercase tracking-wider transform rotate-3">
              Save 30%
            </span>
          </button>
        </div>
      </div>

      <div class="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
        
        <div class="p-8 sm:p-12 md:w-1/2 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-gray-100 bg-[#Fdfbf9]">
          
          <div class="mb-6">
            <div class="flex items-baseline justify-center gap-1 text-[#2A8B8B]">
              <span class="text-5xl sm:text-6xl font-extrabold tracking-tighter">{{ currentPlan.price }}</span>
              <span class="text-lg font-bold opacity-80">{{ currentPlan.period }}</span>
            </div>
            <p class="text-gray-500 font-medium mt-2">{{ currentPlan.subtext }}</p>
          </div>

          <div v-if="currentPlan.savings" class="mb-6">
            <span class="bg-orange-100 text-[#D97736] px-4 py-1.5 rounded-full text-sm font-bold border border-orange-200 shadow-sm">
              {{ currentPlan.savings }}
            </span>
          </div>

          <button class="w-full bg-[#D97736] text-white font-bold py-4 rounded-xl shadow-[0_8px_20px_rgba(217,119,54,0.3)] hover:bg-[#c4682c] hover:-translate-y-0.5 transition-all duration-200 text-lg">
            {{ currentPlan.buttonText }}
          </button>

          <p class="text-xs text-gray-400 mt-6 font-medium">
            Cancel anytime • 7-day money-back guarantee
          </p>
        </div>

        <div class="p-8 sm:p-12 md:w-1/2 bg-white">
          <div class="flex items-center gap-2 mb-6">
            <svg class="w-6 h-6 text-[#F4D03F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
            <h3 class="text-xl font-bold text-gray-800">Premium Features</h3>
          </div>

          <ul class="space-y-4">
            <li v-for="(feature, index) in currentPlan.features" :key="index" class="flex items-start gap-3">
              <div class="bg-teal-50 text-[#2A8B8B] rounded-full p-1 shrink-0 mt-0.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span class="text-gray-600 font-medium text-sm sm:text-base">{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-16 bg-white rounded-3xl border border-[#2A8B8B]/20 overflow-hidden shadow-sm">
        <div class="text-center py-6 border-b border-gray-100">
          <h3 class="text-[#2A8B8B] font-bold text-lg">What You Get with Premium</h3>
        </div>
        
        <div class="divide-y divide-gray-100">
          <div v-for="(row, idx) in comparisonData" :key="idx" class="flex items-center justify-between py-4 px-6 sm:px-10 hover:bg-gray-50 transition">
            <span class="text-gray-500 text-sm font-medium w-1/3">{{ row.feature }}</span>
            <span class="text-gray-400 text-sm w-1/3 text-center">{{ row.basic }}</span>
            <div class="text-[#2A8B8B] font-bold text-sm w-1/3 text-right flex justify-end">
              <svg v-if="row.isCheck" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              <span v-else>{{ row.premium }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center gap-6 sm:gap-10 text-gray-400 text-xs font-bold uppercase tracking-wider mt-8 mb-8">
        <span class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg> Secure Payment</span>
        <span class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg> Used by 10K+ Travelers</span>
      </div>

    </div>
  </div>
</template>