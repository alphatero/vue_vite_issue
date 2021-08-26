<template>
  <div class="shadow rounded-md bg-white">
    <div class="bg-kemp rounded-t-md p-3 ">
      <h5 class="font-bold text-xl ">{{ title }}</h5>
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
