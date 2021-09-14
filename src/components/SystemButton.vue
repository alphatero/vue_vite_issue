<template>
      <button
        class="
          transition-colors duration-500 ease-in-out
          bg-gray-400
          py-2
          px-4
          text-white text-2xl
          shadow-dark
          flex-1
          hover:bg-gray-600
          active:shadow-none active:bg-gray-600
        "
      >
        {{ title }}
        <slot> </slot>
      </button>
</template>

<script>
export default {
  props: ['title'],
};
</script>
