<template>
  <div>
    <input
      class="border border-gray-600 text-2xl w-3/5 px-2"
      ref="input"
      :value="modelValue"
      type="number"
      :max="max"
      :min="min"
      :precision="precision"
      @input="inputHandler($event.target.value)"
    />
  </div>
</template>

<script>
export default {
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
  },
  data() {
    return {
      numericValue: null,
      handler: Function,
    };
  },
  methods: {
    toNumber(val) {
      let num = parseFloat(val);
      if (isNaN(val) || !isFinite(val)) {
        num = 0;
      }
      return num;
    },
    inputHandler(val) {
      this.updateValue(this.toNumber(val), val);
    },
    updateValue: function (val, strVal = null) {
      const oldVal = this.numericValue;
      val = this.toPrecision(val, this.precision);
      if (val >= this.max) {
        val = this.max;
      }
      if (val <= this.min) {
        val = this.min;
      }
      if (val === oldVal) {
        this.$refs.input.value =
          strVal && val === this.toNumber(strVal) ? strVal : val;
        return;
      }
      this.numericValue = val;
      this.$emit('update:modelValue', val);
    },
    toPrecision(val, precision) {
      //val = Number(val);
      let newPrecision = precision + 1
      return newPrecision !== undefined ? parseFloat(val.toFixed(newPrecision).slice(0,-1)) : val;
    },
  },
  watch: {
    numericValue: {
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
