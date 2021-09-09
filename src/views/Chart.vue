<template>
  <div
    class="
      rounded-md
      bg-white
      col-span-1
      row-span-1
      md:col-span-3 md:row-span-4
      order-4
      p-2
      flex flex-col
      items-center
      shadow
    "
  >
    <h4 class="text-3xl">Chart</h4>
    <Draw
      :datacollection="datacollection"
      :options="chartOptions"
      :labels="index"
      :width="300"
      :height="300"
    />
  </div>
</template>

<script>
import Draw from '../components/Draw.vue';
// import { ws } from '../websocket';

// const datasets = [5,6,8];

export default {
  components: {
    Draw,
  },
  props: {
    temp: Object,
  },
  data() {
    return {
      datacollection: {},
      tempChart: [],
      chartOptions: {
        elements: {
          point: {
            radius: 2,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Time',
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Torque',
              },
            },
          ],
        },
      },
      data: {
        chart: [],
        isChartEnd: 0,
        unit: 'Nm',
      },
    };
  },
  methods: {
    checkChart() {
      if (this.temp.chart !== undefined) {
        const chartArray = [];
        for (let i = 0; i < this.temp.chart.length; i += 1) {
          const value = this.temp.chart[i] / 1000;
          chartArray.push(value);
          console.log(chartArray);
        }
        console.log(`chartArray:${chartArray}`);
        if (this.temp.isChartEnd != null) {
          // console.log('isChart', temp.isChartEnd)
          console.log(`chartArray2:${chartArray}`);
          this.tempChart = this.tempChart.concat(chartArray);
          console.log('tempChart:', this.tempChart);
          if (this.temp.isChartEnd === 1) {
            this.handleChartDraw();
          }
        }
      }
    },
    handleChartDraw() {
      const index = [];
      for (let i = 0; i < this.tempChart.length; i += 1) {
        index.push(i);
      }
      this.datacollection = {
        labels: index,
        datasets: [
          {
            label: 'Torque',
            fill: false,
            borderColor: 'blue',
            data: this.tempChart,
          },
        ],
      };
      this.tempChart = [];
      localStorage.setItem('thisChart', JSON.stringify(this.datacollection));
    },
  },
  watch: {
    temp() {
      this.checkChart();
    },
  },
};
</script>
