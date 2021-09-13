<template >
  <div
    v-if="isLoading"
    wire:loading
    class="
      fixed
      top-0
      left-0
      right-0
      bottom-0
      w-full
      h-screen
      z-50
      overflow-hidden
      bg-gray-100
      opacity-75
      flex flex-col
      items-center
      justify-center
    "
  >
    <div
      class="loader ease-linear rounded-full border-8 border-t-8 border-gray-400 h-20 w-20 mb-4"
    ></div>
    <!-- <h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
    <p class="w-1/3 text-center text-white">
      This may take a few seconds, please don't close this page.
    </p> -->
  </div>
</template>

<script>
export default {
  props: ['isLoading'],
};
</script>
