<template>
  <div class="flex flex-col gap-4 items-center justify-center">
    <!-- Device -->
    <Card :title="$t('DeviceRename')" class="lg:w-3/5 w-full">
      <div class="flex flex-col px-4 py-6">
        <div class="flex text-gray-400">
          <label class="text-2xl w-1/3">Device</label>
          <input
            class="rounded border border-gray-600 text-2xl text-center w-1/4 py-1 flex-1"
            type="number"
            name="device"
            id="device"
            v-model="device"
          />
          <div class="flex-1"></div>
        </div>
        <div class="flex justify-center mt-8">
          <button
            @click="sendDevice"
            class="rounded bg-gray-500 hover:bg-gray-700 text-white px-6 py-2"
          >
            {{ $t('Confirm') }}
          </button>
        </div>
      </div>
    </Card>

    <!-- Language -->
    <Card :title="$t('Language')" class="lg:w-3/5 w-full">
      <div class="flex px-4 py-6 text-gray-400">
        <select
          class="w-40 text-2xl border border-gray-600 py-1 px-2"
          name="langSelect"
          id="langSelect"
          v-model="$i18n.locale"
          @change="sendLan()"
        >
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.name">
            {{ lang.text }}
          </option>
        </select>
      </div>
    </Card>

    <!-- Unit -->
    <Card :title="$t('Torque') + $t('Unit')" class="lg:w-3/5 w-full">
      <div class="flex px-4 py-6 text-gray-400">
        <select
          class="w-40 text-2xl border border-gray-600 py-1 px-2"
          name="langSelect"
          id="langSelect"
          v-model="selectUnit"
        >
          <option
            :value="{ value: unit.value, name: unit.name }"
            v-for="(unit, i) in units"
            :key="i"
          >
            {{ unit.name }}
          </option>
        </select>
      </div>
    </Card>

    <!-- Password setting -->
    <Card :title="$t('CodeSetting')" class="lg:w-3/5 w-full">
      <div class="flex flex-col gap-10 px-4 py-6 text-gray-400">
        <ul class="flex gap-6 w-full md:w-4/5 text-center text-xl md:text-2xl">
          <li>
            <button class="">{{ $t('Master') }}</button>
          </li>
          <li>
            <button class="">{{ $t('Manager_1') }}</button>
          </li>
          <li>
            <button class="">{{ $t('Manager_2') }}</button>
          </li>
        </ul>
        <form class="grid grid-rows-3 py-4 gap-6">
          <div class="flex text-base sm:text-xl items-center gap-4 sm:gap-8">
            <label for="first_password" class="w-16 sm:w-1/3">{{ $t('CodeInput') }}</label>
            <input
              type="number"
              name="first_password"
              id="first_password"
              class="border border-gray-400 px-2 py-1 w-40 sm:w-auto"
              :placeholder="$t('CodeInputPlaceholder')"
            />
          </div>
          <div class="flex text-base sm:text-xl items-center gap-4 sm:gap-8">
            <label for="first_password_confirm " class="w-16 sm:w-1/3">{{
              $t('CodeConfirm')
            }}</label>
            <input
              type="number"
              name="first_password_confirm"
              id="first_password_confirm"
              class="border border-gray-400 px-2 py-1 w-40 sm:w-auto"
              :placeholder="$t('CodeConfirmPlaceholder')"
            />
          </div>
          <div class="flex justify-center mt-4">
            <button
              type="submit"
              class="rounded bg-gray-500 hover:bg-gray-700 text-white px-6 py-2"
            >
              {{ $t('Confirm') }}
            </button>
          </div>
        </form>
      </div>
    </Card>

    <div class="flex flex-col gap-16 mt-10 w-full md:w-2/5">
      <!-- System Reset -->
      <SystemButton :title="$t('SystemReset')" />

      <!-- Time Sync -->
      <SystemButton :title="$t('TimeReset')" />

      <!-- System update -->
      <router-link
        to="/"
        class="
          transition-colors
          duration-500
          ease-in-out
          bg-gray-400
          py-2
          px-4
          text-white text-2xl
          shadow-dark
          flex-1
          hover:bg-gray-600
          text-center
          active:shadow-none active:bg-gray-600
        "
        >{{ $t('Update') }}</router-link
      >
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import SystemButton from '../components/SystemButton.vue';
import { ws } from '../websocket';

export default {
  components: {
    Card,
    SystemButton,
  },
  props: {
    temp: Object,
  },
  data() {
    return {
      langs: [
        { name: 'ch', text: '繁體中文', value: 0 },
        { name: 'en', text: 'English', value: 1 },
      ],
      selectUnit: { value: 0, name: 'Nm' },
      units: [
        { value: 0, name: 'Nm' },
        { value: 1, name: 'kgf-cm' },
        { value: 2, name: 'lb-in' },
      ],
      language: 0,
      device: 0,
    };
  },
  methods: {
    sendPage(val) {
      const index = val;
      const sendPage = JSON.stringify({ page: index });
      ws.send(sendPage);
      console.log(sendPage);
    },
    checkDevice() {
      if (this.temp.device !== undefined) {
        this.device = parseInt(this.temp.device, 10);
      }
    },
    checkUnit() {
      if (this.temp.unit !== undefined) {
        const unit = parseInt(this.temp.unit, 10);
        if (unit === 0) {
          this.selectUnit = { value: 0, name: 'Nm' };
        } else if (unit === 1) {
          this.selectUnit = { value: 1, name: 'kgf-cm' };
        } else if (unit === 2) {
          this.selectUnit = { value: 2, name: 'lb-in' };
        }
      }
    },
    sendDevice() {
      const sendDevice = JSON.stringify({ device: parseInt(this.device, 10) });
      ws.send(sendDevice);
    },
    sendLan() {
      let lang = 0;
      if (this.$i18n.locale === 'ch') lang = 0;
      if (this.$i18n.locale === 'en') lang = 1;
      console.log('lan:', lang);
      const sendLan = JSON.stringify({ language: lang });
      ws.send(sendLan);
    },
  },
  watch: {
    temp() {
      this.checkUnit();
      this.checkDevice();
    },
  },
  created() {
    ws.addEventListener('open', this.sendPage(9));
  },
};
</script>

<style>
input::placeholder {
  font-size: 14px;
  opacity: 0.4;
}
</style>
