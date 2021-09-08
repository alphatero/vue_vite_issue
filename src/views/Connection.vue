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

export default {
  components: {
    Card,
  },
  data() {
    return {
      title:{
        status:this.$t('ConnectStatus'),
        ip: 'IP'
      },
      ip: '192.168.1.112'
    };
  },
};
</script>
