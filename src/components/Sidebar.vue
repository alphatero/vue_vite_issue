<template>
  <!-- Desktop sidebar -->
  <aside
    class="
      z-20
      hidden
      w-52
      overflow-y-auto
      lucent:bg-lucent
      kemp:bg-kemp
      lucent:bg-opacity-70
      kemp:bg-opacity-70
      md:block
      flex-shrink-0
    "
  >
    <div class="text-dark text-xl">
      <a href=""
        ><div
          class="
            h-16
            bg-contain bg-no-repeat bg-center bg-black
            kemp:bg-logo-kemp
            lucent:bg-logo-lucent
          "
        ></div
      ></a>
      <ul class="mt-6 text-gray-500">
        <li class="relative cursor-pointer px-6 py-3">
          <router-link
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
            :to="{ name: 'Correction' }"
            class="hover:text-black focus:text-black"
            :class="[$route.name === 'Correttion' ? 'text-black' : 'text-gray-500']"
            >{{ $t('Correction') }}</router-link
          >
        </li>
        <li class="relative cursor-pointer px-6 py-3">
          <router-link
            to="/parameter"
            class="hover:text-black focus:text-black"
            :class="[$route.name === 'Parameter' ? 'text-black' : 'text-gray-500']"
            >{{ $t('Parameter') }}</router-link
          >
        </li>
        <li class="relative cursor-pointer px-6 py-3">
          <router-link
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
            to="/system"
            class="hover:text-black focus:text-black"
            :class="[$route.name === 'System' ? 'text-black' : 'text-gray-500']"
            >{{ $t('System') }}</router-link
          >
        </li>
        <li class="relative cursor-pointer px-6 py-3 hover:text-black focus:text-black">
          <router-link
            to="/info"
            class="hover:text-black focus:text-black"
            :class="[$route.name === 'Info' ? 'text-black' : 'text-gray-500']"
            >{{ $t('Info') }}</router-link
          >
        </li>
        <li v-if="modelValue !== 0" class="px-6 py-3">
          <p v-if="modelValue === 1" class="text-green-600">{{ $t('Master') }}</p>
          <p v-else-if="modelValue === 2" class="text-green-600">{{ $t('Manager_1') }}</p>
          <p v-else-if="modelValue === 3" class="text-green-600">{{ $t('Manager_2') }}</p>
        </li>
        <li class="px-6 py-3" v-if="modelValue !== 0">
          <button
            class="
              rounded-md
              border border-gray-500
              px-3
              py-1
              hover:text-white hover:bg-gray-500
              transition duration-500 ease-in-out
            "
            @click.prevent="toLogOut"
          >
            {{ $t('Logout') }}
          </button>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  props: ['data', 'modelValue'],
  data() {
    return {};
  },
  emits: ['update:modelValue'],
  methods: {
    toLogOut() {
      const isLogin = 6; // prepare logout
      sessionStorage.setItem('isLogin', isLogin);
      const account = 0;
      sessionStorage.setItem('account', account);
      this.$emit('update:modelValue', account);
      this.$emit('getLogout');
      this.$router.replace('/').catch();
    },
  },
};
</script>
