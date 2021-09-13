<template>
  <canvas ref="myChart" :width="width" :height="height"></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'LineChart',
  props: {
    width: {
      type: Number,
      validator: (value) => value > 0,
    },

    height: {
      type: Number,
      validator: (value) => value > 0,
    },

    newChartArray: {
      type: Array,
    },

    labels: Array,
    type: {
      type: String,
      default: 'line',
    },
    options: Object,
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    datasets(newDatasets) {
      console.log('chart');
      this.chart.data.datasets = newDatasets;
      this.chart.update();
    },
    newChartArray: {
      handler() {
        console.log(this.$refs.myChart);
        this.chart = new Chart(this.$refs.myChart, {
          type: this.type,
          data: {
            labels: this.labels,
            datasets: [
              {
                label: 'Torque',
                borderColor: 'blue',
                fill: false,
                data: this.newChartArray,
              },
            ],
          },
          options: this.options,
        });
      },
    },
  },
  mounted() {
    this.chart = new Chart(this.$refs.myChart, {
      type: this.type,
      data: {
        labels: this.labels,
        datasets: this.datasets,
      },
      options: this.options,
    });
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  },
};
</script>
