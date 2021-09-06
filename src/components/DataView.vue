<template>
  <div class="p-4 flex flex-col justify-between h-full">
    <div class="flex justify-center w-full my-2 ">
      <div class="flex-1"></div>
      <div class="flex-1 text-3xl font-bold text-center">{{ current }}</div>
      <div class="flex-1 text-xl flex self-end text-gray-400 justify-end">
        NN
      </div>
    </div>
    <div class="flex flex-col w-full text-gray-400  text-xl">
      <div class="flex">
        <p>{{ $t("Target") }}: {{ target }}</p>
      </div>
      <div class="flex justify-between mt-2 ">
        <p>{{ $t("Max") }}: {{ max }}</p>
        <p>{{ $t("Min") }}: {{ min }}</p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["current", "target", "max", "min"],
  data() {
    return {};
  },
};
</script>
