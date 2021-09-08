<template>
  <div class="flex border-2 border-gray-400 rounded-lg justify-between">
    <button
      v-if="control"
      @click="decrement"
      :disabled="numericValue <= min"
      class="text-2xl px-3 mb-1 mt-0.5 ml-0.5 rounded-l-lg text-center text-white"
      :class="[
        numericValue <= min
          ? 'bg-gray-200 pointer-events-none shadow-disabled'
          : ' shadow-dark bg-gray-400 hover:bg-gray-600 active:bg-gray-600 active:shadow-none',
      ]"
    >
      -
    </button>
    <input
      class="text-2xl w-3/5 px-2 focus:outline-none rounded-lg"
      ref="input"
      :value="numericValue"
      type="number"
      :max="max"
      :min="min"
      :precision="precision"
      :step="step"
      @input="inputHandler($event.target.value)"
    />
    <button
      v-if="control"
      @click="increment"
      class="
        text-2xl
        px-3
        mb-1
        mt-0.5
        mr-0.5
        rounded-r-lg
        bg-gray-400
        text-center text-white
        shadow-dark
        hover:bg-gray-600
        active:bg-gray-600 active:shadow-none
      "
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  name: 'NumericInput',
  props: {
    modelValue: Number,
    max: {
      type: Number,
      default: Infinity,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    precision: {
      type: Number,
      validator(val) {
        return val >= 0 && Number.isInteger(val);
      },
    },
    step: {
      type: Number,
      default: 1,
    },
    control: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      numericValue: 0,
      handler: Function,
    };
  },
  methods: {
    decrement() {
      const newNumber = this.toPrecision((this.numericValue -= this.step), this.precision);
      this.updateValue(newNumber);
    },
    increment() {
      const newNumber = this.toPrecision(this.numericValue += this.step, this.precision);
      this.updateValue(newNumber);
    },
    toNumber(val) {
      let num = parseFloat(val);
      // eslint-disable-next-line no-restricted-globals
      if (Number.isNaN(val) || !isFinite(val)) {
        num = 0;
      }
      return num;
    },
    inputHandler(val) {
      this.updateValue(this.toNumber(val), val);
    },
    updateValue(val, strVal = null) {
      const oldVal = this.numericValue;
      // eslint-disable-next-line no-param-reassign
      val = this.toPrecision(val, this.precision);
      if (val >= this.max) {
        // eslint-disable-next-line no-param-reassign
        val = this.max;
      }
      if (val <= this.min) {
        // eslint-disable-next-line no-param-reassign
        val = this.min;
      }
      if (val === oldVal) {
        this.$refs.input.value = strVal && val === this.toNumber(strVal) ? strVal : val;
        return;
      }
      this.numericValue = val;
      this.$emit('update:modelValue', val);
    },
    toPrecision(val, precision) {
      // val = Number(val);
      console.log('toPrecision');
      const newPrecision = precision + 1;
      return newPrecision !== undefined ? parseFloat(val.toFixed(newPrecision).slice(0, -1)) : val;
    },
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(val) {
        let newValue = val;
        if (newValue) {
          newValue = this.toPrecision(newValue, this.precision);
        }
        this.numericValue = newValue;
      },
    },
  },
};
</script>
