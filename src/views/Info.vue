<template>
  <div class="flex flex-col gap-6 items-center">
    <Card :title="title.hardware" class="md:w-3/5 w-full">
        <div class="flex text-gray-400 text-2xl px-10 py-6 justify-center">
            {{ hardware }}
        </div>
    </Card>
    <Card :title="title.software" class="md:w-3/5 w-full">
        <div class="flex text-gray-400 text-2xl px-10 py-6 justify-center">
            {{ software }}
        </div>
    </Card>
    <Card :title="title.tool" class="md:w-3/5 w-full">
        <div class="flex text-gray-400 text-2xl px-10 py-6 justify-center">
            {{ toolNumber }}
        </div>
    </Card>
    <Card :title="title.controller" class="md:w-3/5 w-full">
        <div class="flex text-gray-400 text-2xl px-10 py-6 justify-center">
            {{ controllerNumber }}
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
      title: {
        hardware: this.$t('Hardware') + this.$t('Version'),
        software: this.$t('Software') + this.$t('Version'),
        tool: this.$t('Tool') + this.$t('Number'),
        controller: this.$t('Controlbox') + this.$t('Number'),
      },
      hardware: '1.0.222',
      software: '1.0.222',
      toolNumber: '1.0000',
      controllerNumber: '1.22222',
    };
  },
};
</script>
