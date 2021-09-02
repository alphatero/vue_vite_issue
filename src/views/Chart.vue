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
      :datasets="dataset"
      :options="chartOptions"
      :labels="[1, 2, 3]"
      :width="300"
      :height="300"
    />
  </div>
</template>

<script>
import Draw from '../components/Draw.vue';

// const datasets = [5,6,8];

export default {
  components: {
    Draw,
  },
  data() {
    return {
      dataset: [
        {
          label: 'Torque',
          borderColor: 'blue',
          fill: false,
          data: [1, 2, 3],
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
};
</script>
