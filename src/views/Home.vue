<template>
  <div class="grid grid-flow-row gap-4 mb-8 grid-cols-1 md:grid-cols-4">
    <!-- Torque -->
    <Card class="md:order-1 md:row-span-2 text-center" :title="$t('Torque')">
      <DataView
        :current="curTorque"
        :target="tarTorque"
        :max="maxTorque"
        :min="minTorque"
        :unit="unit"
      />
    </Card>

    <!-- Time -->
    <Card class="md:order-2 md:row-span-2 text-center" :title="$t('Time')">
      <DataView :current="curTime" :target="tarTime" :max="maxTime" :min="minTime" :unit="'sec'" />
    </Card>

    <!-- Turns -->
    <Card class="md:order-3 md:row-span-2 text-center" :title="$t('Turns')">
      <DataView
        :current="curTurns"
        :target="tarTurns"
        :max="maxTurns"
        :min="minTurns"
        :unit="'turns'"
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
      <div class="text-white rounded-b-md flex items-center justify-center text-7xl p-10">
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
      :class="{ 'bg-green-500': curScrew === totalScrew && curScrew !== 0 }"
    >
      <div class="flex justify-center mt-2 p-4">
        <p class="text-3xl font-bold mr-2">{{ curScrew }}</p>
        <p class="text-3xl font-bold text-gray-500">/{{ totalScrew }}</p>
      </div>
      <p
        v-if="curScrew === totalScrew && curScrew !== 0"
        class="text-3xl font-bold text-white mb-4"
      >
        All OK
      </p>
    </Card>

    <!-- Error code -->
    <Card class="md:order-7 md:row-span-2 text-center" :title="$t('ErrorCode')">
      <div class="flex-1 flex flex-col justify-center items-center">
        <h4 class="text-center p-2 text-xl" v-if="firstErrorCode !== 0">
          {{ firstErrorCode }}
          <span v-if="firstErrorCode === 'EA-01'">{{ $t('OverMaxTor') }}</span>
          <span v-else>{{ $t('OverMinTor') }}</span>
        </h4>
        <h4 class="text-center p-2 text-xl" v-if="secondErrorCode !== 0">
          {{ secondErrorCode }}
          <span v-if="firstErrorCode === 'EA-03'">{{ $t('OverMaxTime') }}</span>
          <span v-else-if="firstErrorCode === 'EA-04'">{{ $t('OverMinTime') }}</span>
          <span v-else-if="firstErrorCode === 'EA-05'">{{ $t('OverMaxTurns') }}</span>
          <span v-else>{{ $t('OverMinTurns') }}</span>
        </h4>
      </div>
    </Card>

    <router-view v-bind="chartData" />
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import ButtonGroup from '../components/ButtonGroup.vue';
import DataView from '../components/DataView.vue';
import { ws } from '../websocket';

export default {
  components: {
    Card,
    ButtonGroup,
    DataView,
  },
  props: {
    temp: Object,
  },
  data() {
    return {
      chartData: {
        temp: {},
      },
      unit: 'Nm',
      curTorque: 0,
      tarTorque: 0,
      maxTorque: 0,
      minTorque: 0,
      curTime: 0,
      tarTime: 0,
      maxTime: 0,
      minTime: 0,
      curTurns: 0,
      tarTurns: 0,
      maxTurns: 0,
      minTurns: 0,
      result: 0,
      firstErrorCode: '',
      secondErrorCode: '',
      curScrew: 0,
      totalScrew: 0,
    };
  },
  methods: {
    sendPage(val) {
      const index = val;
      const sendPage = JSON.stringify({ page: index });
      ws.send(sendPage);
      console.log(sendPage);
    },
    checkUnit() {
      if (this.temp.unit !== undefined) {
        this.unit = this.temp.unit;
      }
    },
    checkTorque() {
      if (this.temp.curTorque !== undefined) {
        this.curTorque = this.torqueFormat(parseInt(this.temp.curTorque, 10));
      }
      if (this.temp.tarTorque !== undefined) {
        this.tarTorque = this.torqueFormat(parseInt(this.temp.tarTorque, 10));
      }
      if (this.temp.maxTorque !== undefined) {
        this.maxTorque = this.torqueFormat(parseInt(this.temp.maxTorque, 10));
      }
      if (this.temp.minTorque !== undefined) {
        this.minTorque = this.torqueFormat(parseInt(this.temp.minTorque, 10));
      }
    },
    torqueFormat(val) {
      let newValue = 0;
      if (this.unit === 'Nm') {
        if (this.minSpecTorque >= 100) {
          newValue = val - (val % 10);
        } else {
          newValue = val;
        }
      } else if (this.minSpecTorque >= 1000) {
        newValue = val - (val % 100);
      } else {
        newValue = val - (val % 10);
      }
      return newValue / 1000;
    },
    checkTime() {
      if (this.temp.curTime !== undefined) {
        this.curTime = parseInt(this.temp.curTime, 10) / 100;
      }
      if (this.temp.tarTime !== undefined) {
        this.tarTime = parseInt(this.temp.tarTime, 10) / 100;
      }
      if (this.temp.maxTime !== undefined) {
        this.maxTime = parseInt(this.temp.maxTime, 10) / 100;
      }
      if (this.temp.minTime !== undefined) {
        this.minTime = parseInt(this.temp.minTime, 10) / 100;
      }
    },
    checkTurns() {
      if (this.temp.curTurns !== undefined) {
        this.curTurns = parseInt(this.temp.curTurns, 10) / 10;
      }
      if (this.temp.tarTurns !== undefined) {
        this.tarTurns = parseInt(this.temp.tarTurns, 10) / 10;
      }
      if (this.temp.maxTurns !== undefined) {
        this.maxTurns = parseInt(this.temp.maxTurns, 10) / 10;
      }
      if (this.temp.minTurns !== undefined) {
        this.minTurns = parseInt(this.temp.minTurns, 10) / 10;
      }
    },
    checkResult() {
      if (this.temp.result !== undefined) {
        this.result = parseInt(this.temp.result, 10);
      }
    },
    checkScrew() {
      if (this.temp.curScrew !== undefined) {
        this.curScrew = parseInt(this.temp.curScrew, 10);
      }
      if (this.temp.totalScrew !== undefined) {
        this.totalScrew = parseInt(this.temp.totalScrew, 10);
      }
    },
    checkErrorCode() {
      if (this.temp.errorCode !== undefined) {
        this.firstErrorCode = this.handlerFirstErrorCode(this.temp.errorCode);
        this.secondErrorCode = this.handlerSecondErrorCode(this.temp.errorCode);
      }
    },
    handlerFirstErrorCode(val) {
      const result = val & 0x03;
      console.log('first errorcode:', result);
      if (result === 0x01) {
        return 'EA-01';
      }
      if (result === 0x02) {
        return 'EA-02';
      }
      return 0;
    },
    handlerSecondErrorCode(val) {
      const result = val & 0x3c;
      console.log('second errorcode:', result);
      if (result === 0x04) {
        return 'EA-03';
      }
      if (result === 0x08) {
        return 'EA-04';
      }
      if (result === 0x10) {
        return 'EA-05';
      }
      if (result === 0x20) {
        return 'EA-06';
      }
      return 0;
    },
    postChart() {
      this.chartData.temp = this.temp;
    },
  },
  watch: {
    temp() {
      this.checkUnit();
      this.checkTorque();
      this.checkTime();
      this.checkTurns();
      this.checkResult();
      this.checkScrew();
      this.checkErrorCode();
      this.postChart();
    },
  },

  created() {
    ws.addEventListener('open', this.sendPage(0));
  },
};
</script>
