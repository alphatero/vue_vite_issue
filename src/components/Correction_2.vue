<template>
  <div class="bg-white rounded-b-md p-10">
    <div class="flex justify-around text-gray-400 mb-8 gap-14">
      <h4 class="text-2xl text-right pr-10 flex-1">最小電壓值</h4>
      <h4 class="text-2xl flex-1">0.54</h4>
    </div>
    <div class="flex justify-around text-gray-400 mb-8 gap-14">
      <h4 class="text-2xl text-right pr-10 flex-1">最小電壓值</h4>
      <div class="flex-1">
        <NumberInput :max="3" :precision="2" v-model="minTorqueInput">
        </NumberInput>
      </div>
    </div>
    <div class="flex justify-center gap-8 my-16">
      <button
        class="
          bg-transparent
          lucent:text-lucent-default
          border
          lucent:border-lucent-default
          font-bold
          py-2
          px-4
          rounded
          lucent:hover:bg-lucent-default lucent:hover:text-white
          w-24
        "
      >
        Reset
      </button>
      <button
        class="
          bg-transparent
          lucent:text-white
          border
          lucent:border-lucent-default
          lucent:bg-lucent-default
          font-bold
          py-2
          px-4
          rounded
          w-24
          lucent:hover:bg-lucent-dark
        "
      >
        Confirm
      </button>
    </div>
    <div class="flex justify-center gap-8 border-t-2 border-gray-200 pt-10">
      <router-link
        tag="button"
        class="
          bg-gray-400
          hover:bg-gray-600
          text-white
          font-bold
          py-2
          px-4
          rounded
          w-24
          text-center
        "
        :to="{ name: 'CorrectionStep1' }"
      >
        {{ $t('Back') }}
      </router-link>
      <router-link
        tag="button"
        class="
          bg-gray-400
          hover:bg-gray-600
          text-white
          font-bold
          py-2
          px-4
          rounded
          w-24
          text-center
        "
        :class="[
          isContinue ? '' : 'opacity-50 cursor-not-allowed pointer-events-none',
        ]"
        :to="{ name: 'CorrectionStep3' }"
      >
        {{ $t('Next') }}
      </router-link>
    </div>
  </div>
</template>

<script>
import NumberInput from './numeric-input.vue';

export default {
  components: {
    NumberInput,
  },
  data() {
    return {
      minTorqueInput: 1,
      isContinue: false,
    };
  },
  methods: {},
};
</script>
