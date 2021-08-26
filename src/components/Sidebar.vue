<template>
  <!-- Desktop sidebar -->
  <aside
    class="
      z-20
      hidden
      w-52
      overflow-y-auto
      bg-kemp bg-opacity-70
      md:block
      flex-shrink-0
    "
  >
    <div class="text-dark text-xl">
      <a href=""
        ><div
          class="
            h-16
            bg-contain bg-no-repeat bg-center bg-black
            kemp:bg-logo-kemp
            lucent:bg-logo-lucent
          "
        ></div
      ></a>
      <ul class="mt-6 text-gray-500">
        <li class="relative cursor-pointer px-6 py-3 hover:text-black focus:text-black">
          即時監控
        </li>
        <li class="relative cursor-pointer px-6 py-3 hover:text-black focus:text-black">
          扭力校正
        </li>
        <li class="relative cursor-pointer px-6 py-3 hover:text-black focus:text-black">
          參數設定
        </li>
        <li class="relative cursor-pointer px-6 py-3 hover:text-black focus:text-black">
          數據儲存
        </li>
        <li class="relative cursor-pointer px-6 py-3 hover:text-black focus:text-black">
          通訊連結
        </li>
        <li class="relative cursor-pointer px-6 py-3 hover:text-black focus:text-black">
          系統設置
        </li>
        <li class="relative cursor-pointer px-6 py-3 hover:text-black focus:text-black">
          資訊
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {};
</script>
