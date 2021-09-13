<template>
  <Loading :isLoading="isLoading" />
  <!-- Import and Export file -->
  <div class="flex flex-col gap-4">
    <div class="flex gap-4">
      <button class="bg-gray-400 hover:bg-gray-600 rounded text-2xl text-white py-2 px-5 shadow">
        {{ $t('Import') }} {{ $t('Parameter') }}
      </button>
      <button class="bg-gray-400 hover:bg-gray-600 rounded text-2xl text-white py-2 px-5 shadow">
        {{ $t('Export') }} {{ $t('Parameter') }}
      </button>
    </div>

    <!-- Torque -->
    <Card :title="$t('Torque')">
      <div class="flex flex-col py-6">
        <div class="flex-col md:flex-row flex p-4 gap-4 md:items-center text-gray-400 text-xl">
          <label for="tarTorque" class="w-full md:w-1/4"
            >{{ $t('Target') }}{{ $t('Torque') }}</label
          >
          <div class="flex items-center gap-2 md:gap-4">
            <NumberInput
              :name="'tarTorque'"
              v-model="tarTorque"
              :control="true"
              :min="0"
              :precision="precision"
              :max="max"
              class="w-44"
            />
            <p class="text-base md:text-xl">{{ unit }}</p>
          </div>
        </div>
        <div class="flex-col md:flex-row flex p-4 gap-4 md:items-center text-gray-400 text-xl">
          <label for="maxTorque" class="w-full md:w-1/4">{{ $t('Max') }}{{ $t('Torque') }}</label>
          <div class="flex items-center gap-2 md:gap-4">
            <NumberInput
              :name="'maxTorque'"
              v-model="maxTorque"
              :control="true"
              :min="0"
              :precision="precision"
              :max="max * 1.1"
              class="w-44"
            />
            <p class="text-base md:text-xl">{{ unit }}</p>
          </div>
        </div>
        <div class="flex-col md:flex-row flex p-4 gap-4 md:items-center text-gray-400 text-xl">
          <label for="minTorque" class="w-full md:w-1/4">{{ $t('Min') }}{{ $t('Torque') }}</label>
          <div class="flex items-center gap-2 md:gap-4">
            <NumberInput
              :name="'minTorque'"
              v-model="minTorque"
              :control="true"
              :min="0"
              :precision="precision"
              :max="tarTorque"
              class="w-44"
            />
            <p class="text-base md:text-xl">{{ unit }}</p>
          </div>
        </div>
      </div>
    </Card>

    <!-- Time -->
    <Card :title="$t('Time')">
      <div class="flex flex-col py-6">
        <div class="flex-col md:flex-row flex p-4 gap-4 md:items-center text-gray-400 text-xl">
          <label for="tarTime" class="w-full md:w-1/4">{{ $t('Target') }}{{ $t('Time') }}</label>
          <div class="flex items-center gap-2 md:gap-4">
            <NumberInput
              :name="'tarTime'"
              v-model="tarTime"
              :control="true"
              :min="0"
              :precision="2"
              :max="10"
              :step="0.01"
              class="w-44"
            />
            <p class="text-base md:text-xl">Sec</p>
          </div>
        </div>
        <div class="flex-col md:flex-row flex p-4 gap-4 md:items-center text-gray-400 text-xl">
          <label for="maxTime" class="w-full md:w-1/4">{{ $t('Max') }}{{ $t('Time') }}</label>
          <div class="flex items-center gap-2 md:gap-4">
            <NumberInput
              :name="'maxTime'"
              v-model="maxTime"
              :control="true"
              :min="0"
              :precision="2"
              :max="10"
              class="w-44"
            />
            <p class="text-base md:text-xl">Sec</p>
          </div>
        </div>
        <div class="flex-col md:flex-row flex p-4 gap-4 md:items-center text-gray-400 text-xl">
          <label for="minTime" class="w-full md:w-1/4">{{ $t('Min') }}{{ $t('Time') }}</label>
          <div class="flex items-center gap-2 md:gap-4">
            <NumberInput
              :name="'minTime'"
              v-model="minTime"
              :control="true"
              :min="0"
              :precision="2"
              :max="10"
              class="w-44"
            />
            <p class="text-base md:text-xl">Sec</p>
          </div>
        </div>
      </div>
    </Card>

    <!-- Turns -->
    <Card :title="$t('Turns')">
      <div class="flex flex-col py-6">
        <div class="flex-col md:flex-row flex p-4 gap-4 md:items-center text-gray-400 text-xl">
          <label for="tarTurns" class="w-full md:w-1/4">{{ $t('Target') }}{{ $t('Turns') }}</label>
          <div class="flex items-center gap-2 md:gap-4">
            <NumberInput
              :name="'tarTurns'"
              v-model="tarTurns"
              :control="true"
              :min="0"
              :precision="1"
              :step="0.1"
              :max="99"
              class="w-44"
            />
            <p class="text-base md:text-xl">Turns</p>
          </div>
        </div>
        <div class="flex-col md:flex-row flex p-4 gap-4 md:items-center text-gray-400 text-xl">
          <label for="maxTurns" class="w-full md:w-1/4">{{ $t('Max') }}{{ $t('Turns') }}</label>
          <div class="flex items-center gap-2 md:gap-4">
            <NumberInput
              :name="'maxTurns'"
              v-model="maxTurns"
              :control="true"
              :min="0"
              :precision="1"
              :step="0.1"
              :max="99"
              class="w-44"
            />
            <p class="text-base md:text-xl">Turns</p>
          </div>
        </div>
        <div class="flex-col md:flex-row flex p-4 gap-4 md:items-center text-gray-400 text-xl">
          <label for="minTurns" class="w-full md:w-1/4">{{ $t('Min') }}{{ $t('Turns') }}</label>
          <div class="flex items-center gap-2 md:gap-4">
            <NumberInput
              :name="'minTurns'"
              v-model="minTurns"
              :control="true"
              :min="0"
              :precision="1"
              :step="0.1"
              :max="99"
              class="w-44"
            />
            <p class="text-base md:text-xl">Turns</p>
          </div>
        </div>
      </div>
    </Card>

    <!-- Screw -->
    <Card :title="$t('Screw')">
      <div class="flex flex-col py-6">
        <div
          class="
            flex-col
            md:flex-row
            flex
            p-4
            gap-4
            md:items-center
            text-gray-400 text-xl
            border-b border-gray-200
          "
        >
          <label for="totalScrew" class="w-full md:w-1/4">{{ $t('Screw') }}</label>
          <div class="flex items-center gap-2 md:gap-4">
            <NumberInput
              :name="'totalScrew'"
              v-model="totalScrew"
              :control="true"
              :min="0"
              :max="99"
              :step="1"
              :precision="0"
              class="w-44"
            />
            <p class="text-base md:text-xl">Pcs</p>
          </div>
        </div>

        <div class="flex flex-col p-4 text-gray-400">
          <h3 class="text-2xl py-2">{{ $t('Count') }}{{ $t('Lock') }}</h3>
          <div class="flex flex-col py-2 gap-2">
            <div class="flex flex-col gap-2 text-xl">
              <div class="flex gap-2 items-center">
                <input
                  name="countLock"
                  v-model="countLock"
                  type="radio"
                  id="countLockYes"
                  value="0"
                />
                <label for="countLockYes">{{ $t('Yes') }}</label>
              </div>
              <div class="flex gap-2 items-center">
                <input
                  name="countLock"
                  v-model="countLock"
                  type="radio"
                  id="countLockNo"
                  value="1"
                />
                <label for="countLockNo">{{ $t('No') }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>

    <!-- Speed -->
    <Card :title="$t('Speed')">
      <div class="flex flex-col py-6">
        <div class="flex-col md:flex-row flex p-4 gap-4 md:items-center text-gray-400 text-xl">
          <label for="speed" class="w-full md:w-1/4">{{ $t('Speed') }}</label>
          <div class="flex items-center gap-2 md:gap-4">
            <NumberInput
              :name="'speed'"
              v-model="speed"
              :control="true"
              :min="0"
              :max="1300"
              :step="1"
              :precision="0"
              class="w-44"
            />
            <p class="text-base md:text-xl">Rpm</p>
          </div>
        </div>
      </div>
    </Card>

    <!-- Lockrule -->
    <Card :title="$t('Lockrule')">
      <div class="flex flex-col py-6">
        <div class="flex flex-col p-4 text-gray-400 border-b border-gray-200">
          <h3 class="text-2xl py-2">{{ $t('NgLock') }}</h3>
          <div class="flex flex-col py-2 gap-2">
            <div class="flex flex-col gap-2 text-xl">
              <div class="flex gap-2 items-center">
                <input v-model="ngLock" type="radio" id="ngLockYes" value="0" />
                <label for="ngLockYes">{{ $t('Yes') }}</label>
              </div>
              <div class="flex gap-2 items-center">
                <input v-model="ngLock" type="radio" id="ngLockNo" value="1" />
                <label for="ngLockNo">{{ $t('No') }}</label>
              </div>
            </div>
          </div>

          <div class="flex pt-6 pb-2 gap-4 flex-wrap">
            <div class="flex items-center gap-2">
              <input
                class=""
                type="checkbox"
                name="lockSelect_overMinTorque"
                id="lockSelect_overMaxTorque"
                :true-value="1"
                :false-value="0"
                v-model="overMaxTorque"
                :disabled="overMaxTorque === 2"
              />
              <label for="lockSelect_overMaxTorque">{{ $t('OverMaxTor') }}</label>
            </div>
            <div class="flex items-center gap-2">
              <input
                class=""
                type="checkbox"
                name="lockSelect_overMinTorque"
                id="lockSelect_overMinTorque"
                :true-value="1"
                :false-value="0"
                v-model="overMinTorque"
                :disabled="overMinTorque === 2"
              />
              <label for="lockSelect_overMinTorque">{{ $t('OverMinTor') }}</label>
            </div>
            <div class="flex items-center gap-2">
              <input
                class=""
                type="checkbox"
                name="lockSelect_overMaxTime"
                id="lockSelect_overMaxTime"
                :true-value="1"
                :false-value="0"
                v-model="overMaxTime"
                :disabled="overMaxTime === 2"
              />
              <label for="lockSelect_overMaxTime">{{ $t('OverMaxTime') }}</label>
            </div>
            <div class="flex items-center gap-2">
              <input
                class=""
                type="checkbox"
                name="lockSelect_overMinTime"
                id="lockSelect_overMinTime"
                :true-value="1"
                :false-value="0"
                v-model="overMinTime"
                :disabled="overMinTime === 2"
              />
              <label for="lockSelect_overMinTime">{{ $t('OverMinTime') }}</label>
            </div>
            <div class="flex items-center gap-2">
              <input
                class=""
                type="checkbox"
                name="lockSelect_overMaxTurns"
                id="lockSelect_overMaxTurns"
                :true-value="1"
                :false-value="0"
                v-model="overMaxTurns"
                :disabled="overMaxTurns === 2"
              />
              <label for="lockSelect_overMaxTurns">{{ $t('OverMaxTurns') }}</label>
            </div>
            <div class="flex items-center gap-2">
              <input
                class=""
                type="checkbox"
                name="lockSelect_overMinTurns"
                id="lockSelect_overMinTurns"
                :true-value="1"
                :false-value="0"
                v-model="overMinTurns"
                :disabled="overMinTurns === 2"
              />
              <label for="lockSelect_overMinTurns">{{ $t('OverMinTurns') }}</label>
            </div>
          </div>
        </div>

        <div class="flex flex-col p-4 text-gray-400">
          <h3 class="text-2xl py-2">{{ $t('Advance') }}{{ $t('Lock') }}</h3>
          <div class="flex flex-col py-2 gap-2">
            <div class="flex flex-col gap-2 text-xl">
              <div class="flex gap-2 items-center">
                <input
                  name="lockSelect"
                  v-model="lockSelect"
                  type="radio"
                  id="lockSelectNone"
                  value="0"
                />
                <label for="lockSelectNone">{{ $t('None') }}</label>
              </div>
              <div class="flex gap-2 items-center">
                <input
                  name="lockSelect"
                  v-model="lockSelect"
                  type="radio"
                  id="lockSelectIO"
                  value="1"
                />
                <label for="lockSelectIO">{{ $t('IOLock') }}</label>
              </div>
              <div class="flex gap-2 items-center">
                <input
                  name="lockSelect"
                  v-model="lockSelect"
                  type="radio"
                  id="lockSelectScan"
                  value="2"
                />
                <label for="lockSelectScan">{{ $t('ScanLock') }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>

    <div class="flex justify-center mt-4">
      <button
        class="
          lucent:bg-lucent-default lucent:hover:bg-lucent-dark lucent:active:bg-lucent-dark
          hover:text-white
          actvie:text-white
          active:shadow-none
          py-2
          px-4
          rounded
          shadow-solid
        "
        @click="sendParameter"
      >
        {{ $t('SendSetting') }}
      </button>
    </div>
  </div>

  <!-- Setting finish -->
  <modal :title="setModal" :top="true" :open="setOver" @close="setOver = false">
    <div class="flex py-4 justify-center bg-gray-100">
      <h5 class="text-2xl">{{ $t('Complete') }}</h5>
    </div>
    <div class="flex justify-end py-2 px-4 bg-gray-50">
      <button
        class="lucent:bg-lucent-default lucent:hover:bg-lucent-dark px-4 py-2 rounded"
        @click="setOver = false"
      >
        {{ $t('Close') }}
      </button>
    </div>
  </modal>

  <!-- Import paramter file -->
  <modal :title="importModal" :open="importOver" :top="true">
    <div class="flex py-6 justify-center bg-gray-100 p">
      <div class="flex flex-1 border border-gray-300 rounded-lg mx-4">
        <label
          class="
            flex flex-col flex-1
            items-center
            px-4
            py-2
            bg-white
            text-gray-400
            rounded-l-lg
            tracking-wide
            uppercase
            border border-blue
            cursor-pointer
            hover:text-gray-600
          "
        >
          <span class="mt-2 text-base leading-normal">{{ file }}</span>
          <input ref="import" type="file" class="hidden" @change="selectedFile()" accept=".json" />
        </label>
        <button
          class="
            border
            transition-all
            lucent:border-lucent-default
            lucent:text-lucent-default
            lucent:hover:bg-lucent-default
            lucent:hover:text-white
            bg-white
            rounded-r-lg
            px-3
          "
        >
          {{ $t('Import') }}
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
import Loading from '../components/Loading.vue';
import Modal from '../components/Modal.vue';
import Card from '../components/Card.vue';
import NumberInput from '../components/numeric-input.vue';
import { ws } from '../websocket';

export default {
  components: {
    Card,
    NumberInput,
    Loading,
    Modal,
  },
  props: {
    temp: Object,
  },
  data() {
    return {
      tarTorque: 0,
      minTorque: 0,
      maxTorque: 0,
      minSpecTorque: 0,
      precision: 2,
      unit: '',
      tarTime: 0,
      maxTime: 0,
      minTime: 0,
      tarTurns: 0,
      maxTurns: 0,
      minTurns: 0,
      totalScrew: 0,
      countLock: '0',
      speed: 0,
      ngLock: '0',
      lockSelect: '2',
      isLoading: true,
      setOver: false,
      importOver: true,
      setParamOk: 0,
      overMaxTorque: 0,
      overMinTorque: 0,
      overMaxTurns: 0,
      overMinTurns: 0,
      overMaxTime: 0,
      overMinTime: 0,
      judgeSelect: 0,
      max: 0,
      min: 0,
      setModal: this.$t('SetModal'),
      importModal: `${this.$t('Import')} ${this.$t('Parameter')}`,
      file: 'Choose file',
      tempFile: {},
    };
  },
  methods: {
    sendPage(val) {
      const index = val;
      const sendPage = JSON.stringify({ page: index });
      ws.send(sendPage);
      console.log(sendPage);
    },
    init() {
      this.isLoading = false;
      this.checkUnit();
      this.checkTorque();
      this.checkTime();
      this.checkTurns();
      this.checkScrew();
      this.checkSpeed();
      this.checkLockRule();
    },
    checkUnit() {
      if (this.temp.unit !== undefined) {
        this.unit = this.temp.unit;
        if (this.temp.maxSpecTorque !== undefined) {
          this.max = parseInt(this.temp.maxSpecTorque, 10) / 1000;
        }
        if (this.unit !== 'Nm') {
          this.minSpecTorque = parseInt(this.temp.minSpecTorque, 10);
          this.maxSpecTorque = parseInt(this.temp.minSpecTorque, 10);
        }
        this.minSpecTorque = parseInt(this.minSpecTorque, 10) / 10;
        this.maxSpecTorque = parseInt(this.minSpecTorque, 10) / 10;
        this.getPrecision();
      }
    },
    getPrecision() {
      if (this.minSpecTorque > 100) {
        if (this.unit === 'Nm') {
          this.precision = 2;
          console.log('Nm and prec:2');
        }
        this.precision = 1;
        console.log('not Nm and prec:1');
      } else {
        if (this.unit === 'Nm') {
          this.precision = 3;
          console.log('Nm and prec:3');
        }
        this.precision = 2;
        console.log('not Nm and prec:2');
      }
    },
    checkTorque() {
      if (this.temp.tarTorque !== undefined) {
        this.tarTorque = this.torqueFormat(parseInt(this.temp.tarTorque, 10));
      }
      if (this.temp.tarTorque !== undefined) {
        this.maxTorque = this.torqueFormat(parseInt(this.temp.maxTorque, 10));
      }
      if (this.temp.tarTorque !== undefined) {
        this.minTorque = this.torqueFormat(parseInt(this.temp.minTorque, 10));
      }
    },
    torqueFormat(val) {
      let newValue = 0;
      if (this.minSpecTorque >= 100) {
        if (this.unit === 'Nm') {
          newValue = val - (val % 10);
        }
        newValue = val - (val % 100);
      } else {
        if (this.unit === 'Nm') {
          newValue = val;
        }
        newValue = val - (val % 10);
      }
      return newValue / 1000;
    },
    checkTime() {
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
    checkScrew() {
      if (this.temp.totalScrew !== undefined) {
        this.totalScrew = this.temp.totalScrew;
      }
    },
    checkSpeed() {
      if (this.temp.speed !== undefined) {
        this.speed = this.temp.speed;
      }
    },
    checkLockRule() {
      if (this.temp.ngLock !== undefined) {
        this.ngLock = this.temp.ngLock;
      }
      if (this.temp.overMaxTorque !== undefined) {
        this.overMaxTorque = this.temp.overMaxTorque;
      }
      if (this.temp.overMinTorque !== undefined) {
        this.overMinTorque = this.temp.overMinTorque;
      }
      if (this.temp.overMaxTime !== undefined) {
        this.overMaxTime = this.temp.overMaxTime;
      }
      if (this.temp.overMinTime !== undefined) {
        this.overMinTime = this.temp.overMinTime;
      }
      if (this.temp.overMaxTurns !== undefined) {
        this.overMaxTurns = this.temp.overMaxTurns;
      }
      if (this.temp.overMinTurns !== undefined) {
        this.overMinTurns = this.temp.overMinTurns;
      }
      if (this.temp.lockSelect !== undefined) {
        this.lockSelect = this.temp.lockSelect;
      }
    },
    sendParameter() {
      this.packageParameter();
    },
    packageParameter() {
      const sendObj = {
        tarTorque: this.torqueRev(this.tarTorque),
        maxTorque: this.torqueRev(this.maxTorque),
        minTorque: this.torqueRev(this.minTorque),
        tarTime: this.timeRev(this.tarTime),
        maxTime: this.timeRev(this.maxTime),
        minTime: this.timeRev(this.minTime),
        tarTurns: this.turnsRev(this.tarTurns),
        maxTurns: this.turnsRev(this.maxTurns),
        minTurns: this.turnsRev(this.minTurns),
        totalScrew: this.totalScrew,
        speed: this.speed,
        ngLock: parseInt(this.ngLock, 10),
        overMaxTorque: this.overMaxTorque,
        overMinTorque: this.overMinTorque,
        overMaxTurns: this.overMaxTurns,
        overMinTurns: this.overMinTurns,
        overMaxTime: this.overMaxTime,
        overMinTime: this.overMinTime,
        lockSelect: this.lockSelect,
        judgeSelect: parseInt(this.judgeSelect, 10),
        countLock: parseInt(this.countLock, 10),
      };
      console.log(sendObj);
    },
    torqueRev(val) {
      return val * 1000;
    },
    timeRev(val) {
      return val * 100;
    },
    turnsRev(val) {
      return val * 10;
    },
    selectedFile() {
      console.log('select a file');
      console.log(this.$refs.import.files[0]);
      const imporFile = this.$refs.import.files[0];
      this.file = imporFile.name;
      // eslint-disable-next-line no-useless-return
      if (!imporFile || imporFile.type !== 'application/json') return;
      const reader = new FileReader();
      reader.readAsText(imporFile, 'UTF-8');
      reader.onload = (evt) => {
        this.tempFile = evt.target.result;
      };
      reader.onerror = (evt) => {
        console.error(evt);
      };
    },
    importParameter() {},
  },
  watch: {
    temp() {
      this.init();
    },
  },
  created() {
    ws.addEventListener('open', this.sendPage(6));
  },
};
</script>
