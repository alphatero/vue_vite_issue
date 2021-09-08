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
      :newChartArray="newChartArray"
      :options="chartOptions"
      :labels="index"
      :width="300"
      :height="300"
    />
  </div>
</template>

<script>
import Draw from '../components/Draw.vue';
//import { ws } from '../websocket';

// const datasets = [5,6,8];

export default {
  components: {
    Draw,
  },
  props: {
    newChart: Array,
    newChartEnd: Number,
  },
  data() {
    return {
      data_chart: [],
      newChartArray: [],
      index: [],
      dataset: [
        {
          label: 'Torque',
          borderColor: 'blue',
          fill: false,
          data: this.newCartArray,
        },
      ],
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
    };
  },

  computed: {

  },

  watch: {
    newChart:{
      handler: function (newVal, val) {
        if(this.chart === null) {
          this.data_chart = val;
        } else {
          this.data_chart = newVal;
        const result = Object.keys(this.data_chart).map((key) => this.data_chart[key] / 1000)
        console.log('data_chart', result)
        const index = []
        for(let i=0; i< this.data_chart.length; i++) {
          index.push(i)
        }
        this.index = index;
        this.newChartArray = result;
        }
      }
    }
  },
};
</script>
