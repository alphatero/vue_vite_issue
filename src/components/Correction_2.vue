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
      <h4 class="text-right w-1/2">{{ $t('MinTorque') }}</h4>
      <h4 class="w-1/2">{{ minTorqueVoltage }}</h4>
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
      <h4 class="text-right w-1/2">{{ $t('TorqueSensoer') }}</h4>
      <div class="w-1/2">
        <NumberInput
          class="w-28"
          :min="0"
          :precision="precision"
          v-model="minTorqueInput"
          @keyup.enter="minTorqueInput > 0 && sendVal()"
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
          totalPointNum >= 10 || minTorqueInput === 0
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
          totalPointNum > 0
            ? ''
            : 'opacity-50 cursor-not-allowed pointer-events-none',
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

// we don't need maximum range because maybe torquesensor's value larger than range

export default {
  components: {
    NumberInput,
  },
  props: {
    temp: Object,
  },
  data() {
    return {
      minTorqueInput: 0,
      unit: 'Nm',
      precision: 2,
      minSpecTorque: 0,
      minTorqueVoltage: 0,
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
        minTorqueInput: this.minTorqueInput * 1000,
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
      if (this.temp.minTorqueVoltage !== undefined) {
        this.minTorqueVoltage = parseInt(this.temp.minTorqueVoltage, 10) / 1000;
      }
      if (this.temp.minSpecTorque !== undefined) {
        this.minSpecTorque = parseInt(this.temp.minSpecTorque, 10);
      }
      if (this.temp.totalPointNum !== undefined) {
        this.totalPointNum = parseInt(this.temp.totalPointNum, 10);
      }
      if (this.temp.minTorqueInput !== undefined) {
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
    ws.addEventListener('open', this.sendPage(3));
  },
};
</script>
