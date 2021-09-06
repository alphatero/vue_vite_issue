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
      <div class="flex flex-col py-6">
        <div class="flex p-4 gap-4 items-center text-gray-400 text-xl">
          <label for="Target" class="w-1/4">{{ $t('Target') }}{{ $t('Torque') }}</label>
          <NumberInput v-model="tarTorque" :control="true" :precision="1"/>
        </div>
        <div class="flex p-4 gap-4 items-center text-gray-400 text-xl">
          <label for="Target" class="w-1/4">{{ $t('Max') }}{{ $t('Torque') }}</label>
          <NumberInput v-model="maxTorque" :control="true" :precision="1"/>
        </div>
        <div class="flex p-4 gap-4 items-center text-gray-400 text-xl">
          <label for="Target" class="w-1/4">{{ $t('Min') }}{{ $t('Torque') }}</label>
          <NumberInput v-model="minTorque" :control="true" :precision="1"/>
        </div>
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
      tarTorque: 1,
      minTorque: 0,
      maxTorque: 0, 
    };
  },
};
</script>
