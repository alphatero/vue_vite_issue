<template>
  <div class="bg-white rounded-b-md mb:px-10">
    <!-- main -->
    <div class="flex text-xl md:text-2xl text-gray-400 mb-8 gap-8 lg:gap-20 items-center">
      <h4 class="text-right w-1/2">{{ $t('MaxTorque') }}</h4>
      <h4 class="w-1/2">{{ maxTorqueVoltage }}</h4>
    </div>
    <div class="flex text-xl md:text-2xl text-gray-400 mb-8 gap-8 lg:gap-20 items-center">
      <h4 class="text-right w-1/2">{{ $t('TorqueSensoer') }}</h4>
      <div class="w-1/2">
        <NumberInput
          class="w-28"
          :max="3"
          :precision="2"
          v-model="maxTorqueInput"
          @keyup.enter="maxTorqueInput > 0 && sendVal()"
        >
        </NumberInput>
      </div>
    </div>
    <div class="flex text-gray-400 justify-center text-xl">
      <p>point:{{ curPointNum }}/{{ totalPointNum }}</p>
    </div>

    <!-- button group -->
    <div class="flex justify-center gap-8 mt-16 mb-8">
      <button
        class="
          bg-transparent
          lucent:text-lucent
          border
          lucent:border-lucent
          font-bold
          py-2
          px-4
          rounded
          lucent:hover:bg-lucent lucent:hover:text-white
          w-24
        "
        @click="handleReset()"
      >
        Reset
      </button>
      <button
        class="
          bg-transparent
          lucent:text-white
          border
          lucent:border-lucent lucent:bg-lucent
          font-bold
          py-2
          px-4
          rounded
          w-24
          lucent:hover:bg-lucent-dark
        "
        @click="sendVal()"
        :class="[
          curPointNum >= totalPointNum || maxTorqueInput === 0
            ? 'opacity-50 cursor-not-allowed pointer-events-none'
            : '',
        ]"
      >
        Confirm
      </button>
    </div>
    <div class="flex justify-between gap-8 border-t-2 border-gray-200 pt-10">
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
          curPointNum === totalPointNum ? '' : 'opacity-50 cursor-not-allowed pointer-events-none',
        ]"
        :to="{ name: 'CorrectionStep4' }"
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
    temp: Object,
  },
  data() {
    return {
      maxTorqueInput: 0,
      unit: 'Nm',
      maxTorqueVoltage: 0,
      curPointNum: 0,
      totalPointNum: 0,
    };
  },
  methods: {
    sendPage(val) {
      const index = val;
      const sendPage = JSON.stringify({ page: index });
      ws.send(sendPage);
      console.log(sendPage);
    },
    sendVal() {
      const sendVal = JSON.stringify({
        pointConfirm: 1,
        maxTorqueInput: this.maxTorqueInput * 1000,
      });
      ws.send(sendVal);
    },
    changePath() {
      this.$router.replace('/correction').catch();
    },
    handleReset() {
      console.log('reset: 1');
      const sendReset = JSON.stringify({ reset: 1 });
      ws.send(sendReset);
    },
    initData() {
      if (this.temp.unit !== undefined) {
        this.unit = this.temp.unit;
      }
      if (this.temp.maxTorqueVoltage !== undefined) {
        this.maxTorqueVoltage = parseInt(this.temp.maxTorqueVoltage, 10) / 1000;
      }
      if (this.temp.minSpecTorque !== undefined) {
        this.minSpecTorque = parseInt(this.temp.minSpecTorque, 10);
      }
      if (this.temp.curPointNum !== undefined) {
        this.curPointNum = parseInt(this.temp.curPointNum, 10);
      }
      if (this.temp.totalPointNum !== undefined) {
        this.totalPointNum = parseInt(this.temp.totalPointNum, 10);
      }
      if (this.temp.maxTorqueInput !== undefined) {
        this.toPrecision();
      }
    },
    toPrecision() {
      if (this.unit === 'Nm' && this.minSpecTorque > 100) {
        this.precision = 2;
      } else if (this.unit === 'Nm' && this.minSpecTorque < 100) {
        this.precision = 3;
      } else if (this.unit !== 'Nm' && this.minSpecTorque > 1000) {
        this.precision = 2;
      } else if (this.unit !== 'Nm' && this.minSpecTorque < 1000) {
        this.precision = 3;
      }
    },
  },
  watch: {
    temp() {
      this.initData();
    },
  },
  created() {
    ws.addEventListener('open', this.sendPage(4));
  },
};
</script>
