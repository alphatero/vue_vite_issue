<template>
    <div class="w-full">
        <LineChart :chart-data="datacollection" :options="chartOptions"/>
    </div>
</template>

<script>
import LineChart from '../LineChart.js'

export default {
    components: {
        LineChart,
    },
    data () {
    return {
      datacollection: {},
      tempChart: [],
      chartOptions: {
        elements: {
          point: {
            radius: 2
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Time'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Torque'
            }
          }]
        }
      },
      data: {
        chart: [],
        isChartEnd: 0,
        unit: 'Nm'
      }
    }
  },
}
</script>