<template>
  <div class="bg-white rounded-b-md mb:px-10">
    <div
      class="
        flex
        text-xl
        md:text-2xl
        text-gray-400
        mb-8
        gap-8
        lg:gap-20
        items-center
      "
    >
      <h4 class="text-right w-1/2">最小電壓值</h4>
      <h4 class="w-1/2">{{ minTorque }}</h4>
    </div>
    <div
      class="
        flex
        text-xl
        md:text-2xl
        text-gray-400
        mb-8
        gap-8
        lg:gap-20
        items-center
      "
    >
      <h4 class="text-right w-1/2">最小電壓值</h4>
      <div class="w-1/2">
        <NumberInput
          class="w-28"
          :max="3"
          :precision="2"
          v-model="minTorqueInput"
          @keyup.enter="sendVal()"
        >
        </NumberInput>
      </div>
    </div>
      <div class="flex text-gray-400 justify-center text-xl">
        <p>point:{{ totalPointNum }}</p>
      </div>
    <div class="flex justify-center gap-8 mt-16 mb-8">
      <button
        class="
          bg-transparent
          lucent:text-lucent-default
          border
          lucent:border-lucent-default
          font-bold
          py-2
          px-4
          rounded
          lucent:hover:bg-lucent-default lucent:hover:text-white
          w-24
        "
      >
        Reset
      </button>
      <button
        class="
          bg-transparent
          lucent:text-white
          border
          lucent:border-lucent-default lucent:bg-lucent-default
          font-bold
          py-2
          px-4
          rounded
          w-24
          lucent:hover:bg-lucent-dark
        "
        @click="sendVal()"
        :class="[
          totalPointNum >= 10 ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
        ]"
      >
        Confirm
      </button>
    </div>
    <div class="flex justify-center gap-8 border-t-2 border-gray-200 pt-10">
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
        {{ $t('Back') }}
      </router-link>
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
        :class="[
          totalPointNum > 0 ? '' : 'opacity-50 cursor-not-allowed pointer-events-none',
        ]"
        :to="{ name: 'CorrectionStep3' }"
      >
        {{ $t('Next') }}
      </router-link>
    </div>
  </div>
</template>

<script>
import NumberInput from './numeric-input.vue';
import { ws } from '../websocket';

export default {
  components: {
    NumberInput,
  },
  props: {
    minTorqueVoltage: Number,
    totalPointNum: Number,
  },
  data() {
    return {
      minTorqueInput: 0,
      isContinue: false,
    };
  },
  methods: {
    sendVal() {
      const sendVal = JSON.stringify({pointConfirm: 1,
        minTorqueInput: this.minTorqueInput * 1000,
      });
      ws.send(sendVal);
    },
    changePath() {
      this.$router.replace('/correction').catch();
    },
  },
  computed: {
    minTorque() {
      return this.minTorqueVoltage / 1000 || 0;
    },
  },
  mounted() {
    ws.addEventListener('open', (e)=> {
      console.log(e)
      this.changePath();
    })
    console.log(this.$route)
  },
};
</script>
