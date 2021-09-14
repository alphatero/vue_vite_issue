<template>
  <div class="flex justify-center">
    <Card :title="$t('Correction')" class="lg:w-9/12 w-full">
      <div class="bg-white rounded-b-md p-2 sm:p-10">
        <div
          class="
            grid grid-cols-4
            gap-1
            lg:gap-10
            mb-16
            text-base
            lg:text-lg
            max-w-lg
            mx-auto
          "
        >
          <div
            class="py-2"
            :class="[
              $route.name === 'CorrectionStep1'
                ? 'border-b-4 lucent:border-lucent kemp:border-kemp'
                : '',
            ]"
          >
            <p
              class="uppercase font-bold px-2 text-center"
              :class="[
                $route.name === 'CorrectionStep1'
                  ? 'lucent:text-lucent kemp:text-kemp'
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
                ? 'border-b-4 lucent:border-lucent kemp:border-kemp'
                : '',
            ]"
          >
            <p
              class="uppercase font-bold px-2 text-center"
              :class="[
                $route.name === 'CorrectionStep2'
                  ? 'lucent:text-lucent kemp:text-kemp'
                  : 'text-gray-400',
              ]"
            >
              Step 2
            </p>
          </div>
          <div
            class="py-2"
            :class="[
              $route.name === 'CorrectionStep3'
                ? 'border-b-4 lucent:border-lucent kemp:border-kemp'
                : '',
            ]"
          >
            <p
              class="uppercase font-bold px-2 text-center"
              :class="[
                $route.name === 'CorrectionStep3'
                  ? 'lucent:text-lucent kemp:text-kemp'
                  : 'text-gray-400',
              ]"
            >
              Step 3
            </p>
          </div>
          <div
            class="py-2"
            :class="[
              $route.name === 'CorrectionStep4'
                ? 'border-b-4 lucent:border-lucent kemp:border-kemp'
                : '',
            ]"
          >
            <p
              class="uppercase font-bold px-2 text-center"
              :class="[
                $route.name === 'CorrectionStep4'
                  ? 'lucent:text-lucen kemp:text-kemp'
                  : 'text-gray-400',
              ]"
            >
              Step 4
            </p>
          </div>
        </div>
        <router-view
          v-bind="tempData"
        ></router-view>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  props: {
    temp: Object,
  },
  components: {
    Card,
  },
  data() {
    return {
      tempData: {
        temp: {},
      },
    };
  },
  methods: {
    postTemp() {
      this.tempData.temp = this.temp;
    },
  },
  watch: {
    temp() {
      this.postTemp();
    },
  },
  created() {
    console.log('route', this.$route);
  },
};
</script>
