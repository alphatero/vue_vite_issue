<template>
  <div
    class="
      w-screen
      h-screen
      fixed
      left-0
      top-0
      z-50
      flex
      justify-center
      transition-all
      duration-500
    "
    :class="[
      { 'opacity-100': open, 'opacity-0 pointer-events-none': !open },
      { 'items-center p-3': !top, 'items-start p-10': top },
    ]"
  >
    <div
      class="w-full h-full bg-gray-900/60 absolute top-0 left-0"
      :class="{ 'pointer-events-none': noclose }"
      @click="closeOverlay()"
    />
    <div
      class="
        w-full
        md:w-9/12
        max-w-md
        shadow-2xl
        rounded-lg
        overflow-hidden
        flex flex-col
        transition-all
        duration-500
      "
      :class="{ 'animate-fadeIn z-10': open, 'animate-fadeOut z-0': !open }"
    >
      <div class="h-12 bg-white border-b flex-none flex">
        <div class="flex-1 leading-10 flex items-center pl-4 font-bold text-gray-600">
          {{ title }}
        </div>
        <div
          class="
            flex-none
            w-12
            h-12
            text-3xl
            flex
            justify-center
            items-center
            hover:bg-gray-200
            active:bg-gray-300 active:scale-[.70]
            rounded-lg
            scale-75
            transition-all
            cursor-pointer
          "
          @click="closeOverlay()"
        >
          <svg viewBox="0 0 32 32" class="flex-none w-4 h-4 stroke-current stroke-2">
            <line x1="0" y1="0" x2="32" y2="32" style="stroke-width: 3px" />
            <line x1="0" y1="32" x2="32" y2="0" style="stroke-width: 3px" />
          </svg>
        </div>
      </div>
      <div class="bg-gray-300 flex-1">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoolModal',
  props: ['open', 'title', 'top', 'noclose'],
  data() {
    return {};
  },
  mounted() {
    // setTimeout(this.delay,500)
  },
  methods: {
    delay() {
      // this.open = true
    },
    closeOverlay() {
      this.$emit('close');
    },
  },
};
</script>
