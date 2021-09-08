<template>
  <div>
    <div class="flex justify-around font-bold text-gray-400 text-3xl mb-12">
      <h3>目前設定值</h3>
    </div>
    <div class="flex justify-around font-bold text-gray-400 mb-8 gap-14">
      <h4 class="text-2xl text-right pr-10 flex-1">Slope</h4>
      <h4 class="text-2xl flex-1">{{ newSlope }}</h4>
    </div>
    <div class="flex justify-around font-bold text-gray-400 mb-14 gap-14">
      <h4 class="text-2xl text-right pr-10 flex-1">Intercept</h4>
      <h4 class="text-2xl flex-1">{{ newIntercept }}</h4>
    </div>
    <div class="flex justify-center">
      <router-link
        tag="button"
        class="
          bg-gray-400
          hover:bg-gray-600
          text-white
          font-bold
          py-2
          px-4
          rounded
          w-24
          text-center
        "
        :to="{ name: 'CorrectionStep2' }"
        @click="sendPage(3)"
      >
        {{ $t('Next') }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { ws } from '../websocket'

export default {
  props:{
    intercept: {
      type: Number,
      default: 0
    },
    slope: {
      type: Number,
      default: 0
    },
  },
  methods: {
    sendPage(val) {
      const index = val;
      const sendPage = JSON.stringify({ page: index });
      ws.send(sendPage);
      console.log(sendPage);
    },
  },
  computed: {
    newSlope() {
      return this.slope / 100;
    },
    newIntercept() {
      return this.intercept / 100;
    }
  },
  created() {
    ws.addEventListener('open', this.sendPage(2))
  }
};
</script>
