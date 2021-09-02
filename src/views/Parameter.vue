<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-4">
      <button
        class="
          bg-gray-400
          hover:bg-gray-600
          rounded
          text-2xl text-white
          py-2
          px-5
          shadow
        "
      >
        import file
      </button>
      <button
        class="
          bg-gray-400
          hover:bg-gray-600
          rounded
          text-2xl text-white
          py-2
          px-5
          shadow
        "
      >
        export file
      </button>
    </div>
    <Card :title="$t('Torque')">
      <div class="flex p-4 gap-4 items-center text-gray-400 text-xl">
        <label for="Target">{{ $t('Target') }}{{ $t('Torque') }}</label>
        <NumberInput v-model="tarTorque" />
      </div>
      <div class="flex p-4 gap-4 items-center text-gray-400 text-xl">
        <label for="Target">{{ $t('Max') }}{{ $t('Torque') }}</label>
        <NumberInput v-model="maxTorque" />
      </div>
      <div class="flex p-4 gap-4 items-center text-gray-400 text-xl">
        <label for="Target">{{ $t('Min') }}{{ $t('Torque') }}</label>
        <NumberInput v-model="minTorque" />
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import NumberInput from '../components/numeric-input.vue';

export default {
  components: {
    Card,
    NumberInput,
  },
  data() {
    return {
      tarTorque: 0,
    };
  },
};
</script>
