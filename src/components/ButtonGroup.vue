<template>
  <div class="flex justify-start items-center flex-wrap">
    <div class="flex">
      <router-link
        to="/"
        :class="[
          $route.name === 'Home' ? 'text-white bg-gray-600' : 'text-gray-600',
        ]"
        class="
          text-base
          rounded-r-none
          flex
          justify-center
          px-4
          py-2
          rounded
          font-bold
          cursor-pointer
          border border-gray-600
        "
        @click="sendPage(0)"
      >
        {{ $t('Result') }}
      </router-link>
      <router-link
        :class="[
          $route.name === 'Chart' ? 'text-white bg-gray-600' : 'text-gray-600',
        ]"
        :to="{ name: 'Chart' }"
        class="
          text-base
          rounded-l-none
          border-l-0
          flex
          justify-center
          px-4
          py-2
          rounded
          font-bold
          cursor-pointer
          border border-gray-600
        "
        @click="sendPage(1)"
      >
        {{ $t('Chart') }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { ws } from '../websocket';

export default {

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
