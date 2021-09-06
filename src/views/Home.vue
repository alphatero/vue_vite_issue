<template>
  <div class="grid grid-flow-row gap-4 mb-8 grid-cols-1 md:grid-cols-4">
    <!-- Torque -->
    <Card class="md:order-1 md:row-span-2 text-center" :title="$t('Torque')">
      <DataView
        :current="newCurTorque"
        :target="newTarTorque"
        :max="newMaxTorque"
        :min="newMinTorque"
      />
    </Card>

    <!-- Time -->
    <Card class="md:order-2 md:row-span-2 text-center" :title="$t('Time')">
      <DataView
        :current="newCurTime"
        :target="newTarTime"
        :max="newMaxTime"
        :min="newMinTime"
      />
    </Card>

    <!-- Turns -->
    <Card class="md:order-3 md:row-span-2 text-center" :title="$t('Turns')">
      <DataView
        :current="newCurTurns"
        :target="newTarTurns"
        :max="newMaxTurns"
        :min="newMinTurns"
      />
    </Card>

    <!-- Link -->
    <ButtonGroup class="order-first md:order-4" />

    <!-- Result -->
    <Card
      class="md:row-span-2 md:order-5 text-center"
      :title="$t('Result')"
      :class="[
        $route.name === 'Chart' ? 'md:col-span-1' : 'md:col-span-3',
        { 'bg-white': this.result === 0 },
        { 'bg-green-500': this.result === 1 },
        { 'bg-red-500': this.result === 2 },
        { 'bg-orange': this.result === 3 },
        { 'bg-pink-600': this.result === 4 },
      ]"
    >
      <div
        class="
          text-white
          rounded-b-md
          flex
          items-center
          justify-center
          text-7xl
          p-10
        "
      >
        <h4 v-if="this.result === 1" class="flex-1">OK</h4>
        <h4 v-else-if="this.result === 2" class="flex-1">NG</h4>
        <h4 v-else-if="this.result === 3" class="flex-1">{{ $t('Floating') }}</h4>
        <h4 v-else-if="this.result === 4" class="flex-1">{{ $t('Strip') }}</h4>
      </div>
    </Card>

    <!-- Screw -->
    <Card
      class="md:order-6 md:row-span-1 md:row-start-2 md:col-start-4 text-center"
      :title="$t('Screw')"
      :class="{'bg-green-500': curScrew === totalScrew && curScrew !== 0}"
    >
      <div class="flex justify-center mt-2 p-4">
        <p class="text-3xl font-bold mr-2">{{ curScrew }}</p>
        <p class="text-3xl font-bold text-gray-500">/{{ totalScrew }}</p>
      </div>
        <p v-if="curScrew === totalScrew && curScrew !== 0" class="text-3xl font-bold text-white mb-4">All OK</p>
    </Card>

    <!-- Error code -->
    <Card class="md:order-7 md:row-span-2 text-center" :title="$t('ErrorCode')">
      <div class="flex-1 flex flex-col justify-center items-center">
        <h4 class="text-center p-2 text-xl" v-if="firstErrorCode !== 0">{{ firstErrorCode }}
          <span v-if="firstErrorCode === 'EA-01'">{{ $t('OverMaxTor') }}</span>
          <span v-else>{{ $t('OverMinTor') }}</span>
        </h4>
        <h4 class="text-center p-2 text-xl" v-if="secondErrorCode !== 0">{{ secondErrorCode }}
          <span v-if="firstErrorCode === 'EA-03'">{{ $t('OverMaxTime') }}</span>
          <span v-else-if="firstErrorCode === 'EA-04'">{{ $t('OverMinTime') }}</span>
          <span v-else-if="firstErrorCode === 'EA-05'">{{ $t('OverMaxTurns') }}</span>
          <span v-else>{{ $t('OverMinTurns') }}</span>
        </h4>
      </div>
    </Card>

    <router-view />
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import ButtonGroup from '../components/ButtonGroup.vue';
import DataView from '../components/DataView.vue';

export default {
  components: {
    Card,
    ButtonGroup,
    DataView,
  },
  props: {
    unit: {
      type: String,
      default: 'Num',
    },
    minSpecTorque: {
      type: Number,
      default: 200,
    },
    curTorque: {
      type: Number,
      default: 0,
    },
    tarTorque: {
      type: Number,
      default: 0,
    },
    maxTorque: {
      type: Number,
      default: 0,
    },
    minTorque: {
      type: Number,
      default: 0,
    },
    curTime: {
      type: Number,
      default: 0,
    },
    tarTime: {
      type: Number,
      default: 0,
    },
    maxTime: {
      type: Number,
      default: 0,
    },
    minTime: {
      type: Number,
      default: 0,
    },
    curTurns: {
      type: Number,
      default: 0,
    },
    tarTurns: {
      type: Number,
      default: 0,
    },
    maxTurns: {
      type: Number,
      default: 0,
    },
    minTurns: {
      type: Number,
      default: 0,
    },
    curScrew: {
      type: Number,
      default: 0,
    },
    totalScrew: {
      type: Number,
      default: 0,
    },
    result: {
      type: Number,
      default: 0,
    },
    errorCode: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      turns: {
        current: 0.2,
        target: 0.5,
        max: 1,
        min: 0.1,
      },
      screws: {
        current: 1,
        total: 5,
      },
      torError: 'EA-01',
      screw: 20,
    };
  },
  methods: {
    torqueFormat(val) {
      let newValue = 0;
      if (this.unit === 'Nm') {
        if (this.minSpecTorque >= 100) {
          newValue = val - (val % 10);
        } else {
          newValue = val;
        }
      } else {
        if (this.minSpecTorque >= 1000) {
          newValue = val - (val % 100);
        } else {
          newValue = val - (val % 10);
        }
      }
      return newValue / 1000;
    },
    handlerFirstErrorCode(val) {
      const result = val & 0x03;
      console.log('first errorcode:', result);
      if(result === 0x01) {
        return 'EA-01';
      } else if (result === 0x02) {
        return 'EA-02';
      } else {
        return 0;
      }
    },
    handlerSecondErrorCode(val) {
      const result = val & 0x3c;
      console.log('second errorcode:', result);
      if(result === 0x04) {
        return 'EA-03';
      } else if(result === 0x08) {
        return 'EA-04';
      } else if(result === 0x10) {
        return 'EA-05';
      } else if(result === 0x20) {
        return 'EA-06';
      } else {
        return 0
      }
    }
  },
  computed: {
    newCurTorque() {
      return this.torqueFormat(this.curTorque);
    },
    newTarTorque() {
      return this.torqueFormat(this.tarTorque);
    },
    newMaxTorque() {
      return this.torqueFormat(this.maxTorque);
    },
    newMinTorque() {
      return this.torqueFormat(this.minTorque);
    },
    newCurTime() {
      return this.curTime / 100;
    },
    newTarTime() {
      return this.tarTime / 100;
    },
    newMaxTime() {
      return this.maxTime / 100;
    },
    newMinTime() {
      return this.minTime / 100;
    },
    newCurTurns() {
      return this.curTurns / 10;
    },
    newTarTurns() {
      return this.tarTurns / 10;
    },
    newMaxTurns() {
      return this.maxTurns / 10;
    },
    newMinTurns() {
      return this.minTurns / 10;
    },
    firstErrorCode() {
      return this.handlerFirstErrorCode(this.errorCode);
    },
    secondErrorCode() {
      return this.handlerSecondErrorCode(this.errorCode);
    }
  },
};
</script>
