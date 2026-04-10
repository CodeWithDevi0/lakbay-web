<template>
  <div class="min-h-screen flex flex-col pt-20 px-6 bg-lakbay-bg relative">
    <div class="flex justify-center mb-10">
      <h1 class="text-5xl font-bold text-lakbay-orange tracking-tighter">LAKBAY<span class="text-lakbay-teal">+</span></h1>
    </div>

    <div class="bg-white rounded-3xl p-6 shadow-lg flex-grow mb-10">
      <h2 class="text-center text-xl font-bold text-lakbay-teal mb-2">Welcome Back!</h2>
      <p class="text-center text-sm text-lakbay-teal mb-8">Sign in to continue your travel planning</p>

      <form @submit.prevent="$router.push('/plan')">
        <div class="mb-4">
          <label class="block text-sm font-semibold text-lakbay-orange mb-1">Email Address</label>
          <input type="email" placeholder="Your@email.com" class="w-full bg-orange-50 border border-orange-100 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-lakbay-orange">
        </div>

        <div class="mb-2">
          <label class="block text-sm font-semibold text-lakbay-orange mb-1">Password</label>
          <input type="password" placeholder="Enter your password" class="w-full bg-orange-50 border border-orange-100 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-lakbay-orange">
        </div>
        
        <div class="flex justify-end mb-6">
          <a href="#" class="text-xs text-gray-500 hover:text-lakbay-teal">Forgot Password?</a>
        </div>

        <button type="submit" class="w-full bg-lakbay-orange text-white font-bold py-3 rounded-xl shadow-md hover:bg-orange-700 transition">
          Sign In
        </button>
      </form>

      <div class="mt-6 border-t border-gray-200 relative">
        <span class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-2 text-xs text-gray-400">Or continue with</span>
      </div>

      <button class="w-full mt-6 border border-gray-300 bg-white text-gray-700 font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50">
        Google
      </button>
    </div>
  </div>
</template>