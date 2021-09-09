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
        :to="{ name: 'CorrectionStep1' }"
      >
        {{ $t('Return') }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { ws } from '../websocket';

export default {
  props: {
    temp: Object,
  },
  data() {
    return {
      slope: 0,
      intercept: 0,
    };
  },
  methods: {
    checkVal() {
      if (this.temp.slope !== undefined) {
        this.slope = parseInt(this.temp.slope, 10) / 100;
      }
      if (this.temp.intercept !== undefined) {
        this.intercept = parseInt(this.temp.intercept, 10) / 100;
      }
    },
    sendPage(val) {
      const index = val;
      const sendPage = JSON.stringify({ page: index });
      ws.send(sendPage);
      console.log(sendPage);
    },
  },
  watch: {
    temp() {
      this.checkVal();
    },
  },
  created() {
    ws.addEventListener('open', this.sendPage(2));
  },
};
</script>
