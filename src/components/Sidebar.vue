<template>
  <!-- Desktop sidebar -->
  <aside
    class="
      z-20
      hidden
      w-52
      overflow-y-auto
      lucent:bg-lucent-default
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
              $route.name === 'Home' || $route.name === 'Chart'
                ? 'text-black'
                : 'text-gray-500',
            ]"
            >{{ $t('Dashboard') }}</router-link
          >
        </li>
        <li class="relative cursor-pointer px-6 py-3">
          <router-link
            :to="{ name: 'Correction' }"
            class="hover:text-black focus:text-black"
            >{{ $t('Correction') }}</router-link
          >
        </li>
        <li class="relative cursor-pointer px-6 py-3">
          <router-link
            to="/parameter"
            class="hover:text-black focus:text-black"
            :class="[
              $route.name === 'Parameter' ? 'text-black' : 'text-gray-500',
            ]"
            >{{ $t('Parameter') }}</router-link
          >
        </li>
        <li class="relative cursor-pointer px-6 py-3">
          <router-link
            to="/connection"
            class="hover:text-black focus:text-black"
            :class="[
              $route.name === 'Connection' ? 'text-black' : 'text-gray-500',
            ]"
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
        <li
          class="
            relative
            cursor-pointer
            px-6
            py-3
            hover:text-black
            focus:text-black
          "
        >
          <router-link
            to="/info"
            class="hover:text-black focus:text-black"
            :class="[$route.name === 'Info' ? 'text-black' : 'text-gray-500']"
            >{{ $t('Info') }}</router-link
          >
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { ws } from '../websocket';

export default {
  props: ['data'],
  data() {
    return {};
  },
  methods: {
    sendPage(val) {
      const index = val;
      const sendPage = JSON.stringify({ page: index });
      ws.send(sendPage);
      console.log(sendPage);
    },
  },
};
</script>
