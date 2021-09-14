<template>
  <div class="flex flex-col gap-6 items-center">
    <Card :title="title.hardware" class="lg:w-3/5 w-full">
      <div class="flex text-gray-400 text-2xl px-10 py-6 justify-center">
        {{ firmware }}
      </div>
    </Card>
    <Card :title="title.software" class="lg:w-3/5 w-full">
      <div class="flex text-gray-400 text-2xl px-10 py-6 justify-center">
        {{ software }}
      </div>
    </Card>
    <Card :title="title.tool" class="lg:w-3/5 w-full">
      <div class="flex text-gray-400 text-2xl px-10 py-6 justify-center">
        {{ controlBox }}
      </div>
    </Card>
    <Card :title="title.controller" class="lg:w-3/5 w-full">
      <div class="flex text-gray-400 text-2xl px-10 py-6 justify-center">
        {{ tool }}
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import { ws } from '../websocket';

export default {
  components: {
    Card,
  },
  props: {
    temp: Object,
  },
  data() {
    return {
      title: {
        hardware: this.$t('Hardware') + this.$t('Version'),
        software: this.$t('Software') + this.$t('Version'),
        tool: this.$t('Tool') + this.$t('Number'),
        controller: this.$t('Controlbox') + this.$t('Number'),
      },
      firmware: '',
      software: '',
      controlBox: '',
      tool: '',
    };
  },
  methods: {
    sendPage(val) {
      const index = val;
      const sendPage = JSON.stringify({ page: index });
      ws.send(sendPage);
      console.log(sendPage);
    },
    checkFirmware() {
      if (this.temp.firmwareVersion !== undefined) {
        this.firmware = this.temp.firmwareVersion;
      }
    },
    checkSoftware() {
      if (this.temp.softwareVersion !== undefined) {
        this.software = this.temp.softwareVersion;
      }
    },
    checkControlBox() {
      if (this.temp.controlBoxNumber !== undefined) {
        this.controlBox = this.temp.controlBoxNumber;
      }
    },
    checkTool() {
      if (this.temp.toolNumber !== undefined) {
        this.tool = this.temp.toolNumber;
      }
    },
  },
  watch: {
    temp() {
      this.checkFirmware();
      this.checkSoftware();
      this.checkControlBox();
      this.checkTool();
    },
  },
  created() {
    ws.addEventListener('open', this.sendPage(10));
  },
};
</script>
