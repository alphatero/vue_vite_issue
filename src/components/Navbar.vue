<template>
  <header
    class="
      z-10
      lucent:bg-lucent-default
      kemp:bg-kemp
      lucent:bg-opacity-70
      kemp:bg-opacity-70
      shadow-md
      flex
      md:flex-row-reverse
      flex-row
      justify-between
    "
  >
    <div class="bg-black flex h-16 order-first md:order-last">
      <h5 class="text-white my-auto text-3xl px-5">Device {{ newDevice }}</h5>
    </div>
    <div
      class="
        kemp:bg-logo-kemp
        lucent:bg-logo-lucent
        h-16
        bg-contain bg-no-repeat bg-center
        md:order-first
        w-1/3
        md:hidden
        justify-self-center
      "
    ></div>
    <div class="bg-black text-white flex justify-center items-center md:hidden">
      <a class="text-white my-auto text-3xl px-5 cursor-pointer">Menu</a>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    device: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      newDevice:0
    };
  },
  watch: {
    device: {
      handler: function(newVal, val) {
        if(newVal!==null) {
          this.newDevice = newVal
        } else {
          this.newDevice = val;
        }
      }
    }
  }
};
</script>
