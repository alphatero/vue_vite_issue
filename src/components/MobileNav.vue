<template>
  <div
    class="w-screen h-screen fixed left-0 top-0 z-50 flex justify-start transition-all duration-500"
    :class="[{ 'opacity-100': open, 'opacity-0 pointer-events-none': !open }]"
  >
    <div class="w-full h-full bg-gray-900/60 absolute top-0 left-0" @click="closeOverlay()" />
    <div
      class="w-4/5 max-w-md overflow-hidden flex flex-col transition-all duration-500"
      :class="{ 'animate-fadeRight z-10': open, 'animate-fadeLeft z-0': !open }"
    >
      <div class="h-12 lucent:bg-lucent border-b flex-none flex">
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
            lucent:hover:bg-lucent-dark lucent:active:bg-lucent-dark
            active:scale-[.70]
            rounded-lg
            scale-75
            transition-all
            cursor-pointer
          "
          @click="closeOverlay()"
        >
          <svg viewBox="0 0 32 32" class="flex-none w-12 h-12 stroke-current stroke-2">
            <line x1="0" y1="0" x2="32" y2="32" style="stroke-width: 4px" />
            <line x1="0" y1="32" x2="32" y2="0" style="stroke-width: 4px" />
          </svg>
        </div>
      </div>
      <div class="lucent:bg-lucent-light flex-1">
        <ul class="text-xl mobileNav">
          <li class="relative cursor-pointer px-6 py-3">
            <router-link
              @click="closeOverlay()"
              :to="{ name: 'Home' }"
              class="hover:text-black focus:text-black"
              :class="[
                $route.name === 'Home' || $route.name === 'Chart' ? 'text-black' : 'text-gray-500',
              ]"
              >{{ $t('Dashboard') }}</router-link
            >
          </li>
          <li class="relative cursor-pointer px-6 py-3">
            <router-link
              @click="closeOverlay()"
              :to="{ name: 'Correction' }"
              class="hover:text-black focus:text-black"
              :class="[
                $route.name === 'Correction' ||
                $route.name === 'CorrectionStep2' ||
                $route.name === 'CorrectionStep3' ||
                $route.name === 'CorrectionStep4'
                  ? 'text-black'
                  : 'text-gray-500',
              ]"
              >{{ $t('Correction') }}</router-link
            >
          </li>
          <li class="relative cursor-pointer px-6 py-3">
            <router-link
              @click="closeOverlay()"
              to="/parameter"
              class="hover:text-black focus:text-black"
              :class="[$route.name === 'Parameter' ? 'text-black' : 'text-gray-500']"
              >{{ $t('Parameter') }}</router-link
            >
          </li>
          <li class="relative cursor-pointer px-6 py-3">
            <router-link
              @click="closeOverlay()"
              to="/connection"
              class="hover:text-black focus:text-black"
              :class="[$route.name === 'Connection' ? 'text-black' : 'text-gray-500']"
              >{{ $t('Connect') }}</router-link
            >
          </li>
          <!-- <li
          class="
            relative
            cursor-pointer
            px-6
            py-3
            hover:text-black
            focus:text-black
          "
        >
          數據儲存
        </li> -->
          <li class="relative cursor-pointer px-6 py-3">
            <router-link
              @click="closeOverlay()"
              to="/system"
              class="hover:text-black focus:text-black"
              :class="[$route.name === 'System' ? 'text-black' : 'text-gray-500']"
              >{{ $t('System') }}</router-link
            >
          </li>
          <li class="relative cursor-pointer px-6 py-3 hover:text-black focus:text-black">
            <router-link
              @click="closeOverlay()"
              to="/info"
              class="hover:text-black focus:text-black"
              :class="[$route.name === 'Info' ? 'text-black' : 'text-gray-500']"
              >{{ $t('Info') }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobilNav',
  props: ['open', 'title'],
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
