<template>
  <div class="flex flex-col gap-4 items-center">
    <Card :title="title.status" class="md:w-3/5 w-full">
      <div class="flex py-10 px-6"></div>
    </Card>
    <Card :title="title.ip" class="md:w-3/5 w-full">
      <div class="flex py-10 px-6 justify-center text-2xl text-gray-600">
        <h3>{{ip}}</h3>
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
        status: this.$t('ConnectStatus'),
        ip: 'IP',
      },
      ip: '192.168.1.110',
    };
  },
  methods: {
    sendPage(val) {
      const index = val;
      const sendPage = JSON.stringify({ page: index });
      ws.send(sendPage);
      console.log(sendPage);
    },
    checkIp() {
      if (this.temp.ip1 !== undefined) {
        this.ip = `${this.temp.ip1}.${this.temp.ip2}.${this.temp.ip3}.${this.temp.ip4}`;
      }
    },
  },
  watch: {
    temp() {
      this.checkIp();
    },
  },
  created() {
    ws.addEventListener('open', this.sendPage(8));
  },
};
</script>
