<template>
  <div class="flex justify-center">
    <Card :title="$t('Correction')" class="md:w-9/12 w-full">
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
                ? 'border-b-4 lucent:border-lucent-default kemp:border-kemp'
                : '',
            ]"
          >
            <p
              class="uppercase font-bold px-2 text-center"
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
              Step 2
            </p>
          </div>
          <div
            class="py-2"
            :class="[
              $route.name === 'CorrectionStep3'
                ? 'border-b-4 lucent:border-lucent-default kemp:border-kemp'
                : '',
            ]"
          >
            <p
              class="uppercase font-bold px-2 text-center"
              :class="[
                $route.name === 'CorrectionStep3'
                  ? 'lucent:text-lucent-default kemp:text-kemp'
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
                ? 'border-b-4 lucent:border-lucent-default kemp:border-kemp'
                : '',
            ]"
          >
            <p
              class="uppercase font-bold px-2 text-center"
              :class="[
                $route.name === 'CorrectionStep4'
                  ? 'lucent:text-lucent-default kemp:text-kemp'
                  : 'text-gray-400',
              ]"
            >
              Step 4
            </p>
          </div>
        </div>
        <router-view
          :slope="slope"
          :intercept="intercept"
          :minTorqueVoltage="minTorqueVoltage"
          :totalPointNum="totalPointNum"
          :curPointNum="curPointNum"
        ></router-view>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  props: {
    slope: Number,
    intercept: Number,
    minTorqueVoltage: Number,
    maxTorqueVoltage: Number,
    totalPointNum: Number,
    curPointNum: Number,
  },
  components: {
    Card,
  },
  data() {
    return {
    };
  },
  created() {
    console.log(this.$route);
  },
};
</script>
