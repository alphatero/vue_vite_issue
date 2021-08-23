<template>
  <div class="grid grid-flow-col gap-4 mb-8 grid-cols-2 md:grid-cols-4">
    <Card />
    <Card />
    <Card />

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
      msg: 'hello',
    };
  },
};
</script>
