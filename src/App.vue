<template>
  <div class="flex h-screen theme-k">
    <Sidebar />
       <div class="flex flex-col flex-1 w-full bg-gray-50  ">
      <Navbar />

      <main class="h-full overflow-y-auto">
        <div class="container px-6 mx-auto grid py-10">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>