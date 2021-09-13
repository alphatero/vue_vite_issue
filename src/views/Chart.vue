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

export default {
  components: {
    Draw,
  },
  props: {
    temp: Object,
  },
  data() {
    return {
      indexArry: [],
      index: [],
      newChartArray: [],
      tempArray: [],
      arry: [
        {
          label: 'Torque',
          fill: false,
          borderColor: 'blue',
          data: [300, 700, 450, 750, 450],
        },
      ],
      datacollection: [
        {
          label: 'Torque',
          fill: false,
          borderColor: 'blue',
          data: this.tempChart,
        },
      ],
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
        }
        if (this.temp.isChartEnd != null) {
          // console.log('isChart', temp.isChartEnd)
          this.tempChart = this.tempChart.concat(chartArray);
          if (this.temp.isChartEnd === 1) {
            this.handleChartDraw();
          }
        }
      }
    },
    handleChartDraw() {
      this.indexArry = [];
      for (let i = 0; i < this.tempChart.length; i += 1) {
        this.indexArry.push(i);
      }
      console.log('index:', Object.keys(this.indexArry));
      console.log('tempchart', this.tempChart);
      this.tempChart = [];
      // localStorage.setItem('thisChart', JSON.stringify(this.datacollection));
    },
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
      // this.newChartArray = [];
    },
  },
  watch: {
    temp() {
      this.drawChart();
    },
  },
};
</script>
