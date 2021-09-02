<template>
  <div class="w-full">
    <canvas ref="myChart" :width="width" :height="height"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  name: 'LineChart',
  props: {
    width: {
      type: Number,
      validator: value => value > 0
    },

    height: {
      type: Number,
      validator: value => value > 0
    },

    labels: Array,

    datasets: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      default: 'line'
    },
    options: Object
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    datasets(newDatasets) {
        if (this.chart !== null) {
            this.chart.data.datasets = newDatasets;
            this.chart.update();
        } 
    }
  },
  mounted() {
    console.log(this.$refs.myChart);
    this.chart = new Chart(this.$refs.myChart, {
      type: this.type,
      data: {
        labels: this.labels,
        datasets: this.datasets
      },
      options: this.options
    });
  },
//   beforeUnmount () {
//     if (this.chart) {
//       this.chart.destroy()
//     }
//   }
}
</script>
