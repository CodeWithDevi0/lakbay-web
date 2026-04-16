<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'


// Carousel logic
const currentIndex = ref(0)
let autoplayInterval = null

const reviews = ref([
  {
    stars: 5,
    text: "Premium totally changed how we plan trips! The route optimization saved us hours, and offline maps were a lifesaver in Palawan!",
    author: "Maria Santos, Frequent Traveler"
  },
  {
    stars: 5,
    text: "Best travel investment I've made this year. The AI recommendations found hidden gems we would've never discovered on our own!",
    author: "James Ong, Adventure Seeker"
  },
  {
    stars: 5,
    text: "Used this for our honeymoon across 3 countries. Seamless offline navigation and real-time updates made everything stress-free.",
    author: "Lisa & Miguel, Happy Couple"
  },
  {
    stars: 5,
    text: "The group planning feature is genius! My friends and I finally coordinated without endless messaging threads. Highly recommend!",
    author: "Alex Rivera, Group Trip Organizer"
  },
  {
    stars: 5,
    text: "Weather alerts and local tips saved us from a typhoon delay. This app literally kept us safe. 10/10 would recommend.",
    author: "Priya Sharma, Solo Traveler"
  }
])

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % reviews.value.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + reviews.value.length) % reviews.value.length
}

const goToSlide = (index) => {
  currentIndex.value = index
  resetAutoplay()
}

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 5000) // Changes every 5 seconds
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

const resetAutoplay = () => {
  stopAutoplay()
  startAutoplay()
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})
</script>   

<template>
   
   <h3 class="text-3xl text-[#2A8B8B] font-bold mb-8 text-center text-shadow-lg">Recent User Reviews</h3>

      <!-- Testimonial Carousel -->
      <div class="max-w-4xl mx-auto bg-gradient-to-br from-[#f8fdfd] to-[#e6f4f4] rounded-2xl p-8 border border-teal-100 relative shadow-sm mb-6">
        
        <!-- Carousel Container -->
        <div class="relative">
          <!-- Track -->
          <div class="overflow-hidden">
            <div 
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            >
              <div 
                v-for="(review, idx) in reviews" 
                :key="idx"
                class="flex-shrink-0 w-full px-2"
              >
                <!-- Stars -->
                <div class="flex gap-1 text-[#F4D03F] mb-4">
                  <svg 
                    v-for="star in review.stars" 
                    :key="star"
                    class="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                
                <!-- Review Text -->
                <p class="text-gray-600 font-medium italic mb-4 text-sm sm:text-base leading-relaxed">
                  "{{ review.text }}"
                </p>
                
                <!-- Author -->
                <p class="text-gray-400 text-xs font-bold uppercase tracking-wide">
                  - {{ review.author }}
                </p>
              </div>
            </div>
          </div>
          
          <!-- Navigation Dots -->
          <div class="flex justify-center gap-2 mt-6 mb-3">
            <button
              v-for="(review, idx) in reviews"
              :key="'dot-' + idx"
              @click="goToSlide(idx)"
              class="h-2.5 rounded-full transition-all duration-300"
              :class="currentIndex === idx ? 'bg-teal-500 w-6' : 'bg-gray-300 w-2.5 hover:bg-teal-300'"
            ></button>
          </div>
          
          <!-- Prev/Next Buttons -->
          <div class="flex justify-center gap-4 mt-2">
            <button
              @click="prevSlide"
              class="bg-white/80 backdrop-blur-sm text-teal-600 hover:bg-teal-500 hover:text-white p-2 rounded-full shadow-md transition-all duration-200 border border-teal-200 w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              ←
            </button>
            <button
              @click="nextSlide"
              class="bg-white/80 backdrop-blur-sm text-teal-600 hover:bg-teal-500 hover:text-white p-2 rounded-full shadow-md transition-all duration-200 border border-teal-200 w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              →
            </button>
          </div>
        </div>
      </div>
   
</template>
