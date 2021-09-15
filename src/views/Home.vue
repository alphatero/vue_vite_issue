<template>
  <div class="grid grid-flow-row gap-4 mb-8 grid-cols-1 lg:grid-cols-4">
    <!-- Torque -->
    <Card class="md:order-1 md:row-span-2 text-center" :title="'Torque'">
      <p>Hellow World</p>
    </Card>


  </div>
</template>

<script>
import Card from '../components/Card.vue';


export default {
  components: {
    Card,

  },
  props: {
    temp: Object,
  },
  data() {
    return {
    };
  },  
};
</script>
