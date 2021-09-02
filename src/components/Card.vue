<template>
  <div class="shadow rounded-md bg-white flex flex-col">
    <div class="lucent:bg-lucent-default kemp:bg-kemp rounded-t-md p-3 flex-none">
      <h5 class="font-bold text-2xl ">{{ title }}</h5>
    </div>

      <slot></slot>

  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['title','className']
}
</script>
