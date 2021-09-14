<template>
  <div
    class="
      rounded-md
      bg-white
      col-span-1
      row-span-1
      lg:col-span-3 lg:row-span-4
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

export default {
  components: {
    Draw,
  },
  props: {
    temp: Object,
  },
  data() {
    return {
      index: [],
      newChartArray: [],
      datacollection: [
        {
          label: 'Torque',
          fill: false,
          borderColor: 'blue',
          data: this.tempChart,
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
  methods: {
    drawChart() {
      if (this.temp.chart !== undefined) {
        let result = [];
        if (localStorage.getItem('chart')) {
          result = JSON.parse(localStorage.getItem('chart'));
          console.log('memory', result);
        }
        const first = Object.keys(this.temp.chart).map((key) => this.temp.chart[key] / 1000);
        console.log('result', result, typeof (result));

        if (this.temp.isChartEnd !== undefined) {
          result = result.concat(first);
          console.log('freeze', result);
          localStorage.setItem('chart', JSON.stringify(result));
          if (this.temp.isChartEnd === 1) {
            this.finishChart(result);
          }
        }
      }
    },
    finishChart(result) {
      const index = [];
      for (let i = 0; i < result.length; i += 1) {
        index.push(i);
      }
      this.newChartArray = Object.freeze(result);
      console.log(this.newChartArray);
      localStorage.setItem('chart', []);
      this.index = index;
    },
  },
  watch: {
    temp() {
      this.drawChart();
    },
  },
};
</script>
