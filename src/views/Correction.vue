<template>
  <div class="flex justify-center">
    <Card :title="title" class="md:w-9/12 w-full">
      <div class="bg-white rounded-b-md p-10">
        <div class="grid grid-cols-4 gap-10 m-auto mb-10 text-xl">
          <div
            class="py-2"
            :class="[
              $route.name === 'CorrectionStep1'
                ? 'border-b-4 lucent:border-lucent-default kemp:border-kemp'
                : '',
            ]"
          >
            <p
              class="uppercase  font-bold px-2 text-center"
              :class="[
                $route.name === 'CorrectionStep1'
                  ? 'lucent:text-lucent-default kemp:text-kemp'
                  : 'text-gray-400',
              ]"
            >
              Step 1
            </p>
          </div>
          <div
            class="py-2"
            :class="[
              $route.name === 'CorrectionStep2'
                ? 'border-b-4 lucent:border-lucent-default kemp:border-kemp'
                : '',
            ]"
          >
            <p
              class="uppercase font-bold px-2 text-center"
              :class="[
                $route.name === 'CorrectionStep2'
                  ? 'lucent:text-lucent-default kemp:text-kemp'
                  : 'text-gray-400',
              ]"
            >
              Step 2</p>
          </div>
          <div class="border-gray-500 py-2">
            <p class="uppercase text-gray-400 font-bold px-2">Step 3</p>
          </div>
          <div class="border-gray-500 py-2">
            <p class="uppercase text-gray-400 font-bold px-2">Step 4</p>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </Card>
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
      title: this.$t('Correction'),
    };
  },
};
</script>
