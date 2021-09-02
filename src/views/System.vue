<template>
  <div class="flex flex-col gap-4 items-center justify-center">
    <!-- Device -->
    <Card :title="$t('DeviceRename')" class="md:w-3/5">
      <div class="flex flex-col px-4 py-6">
        <div class="flex text-gray-400">
          <label class="text-2xl w-1/3">Device</label>
          <input
            class="rounded border border-gray-600 text-2xl text-center w-1/3 "
            type="number"
            name="device"
            id="device"
          />
        </div>
        <div class="flex justify-center mt-8">
          <button
            class="rounded bg-gray-500 hover:bg-gray-700 text-white px-6 py-2"
          >
            {{ $t('Confirm') }}
          </button>
        </div>
      </div>
    </Card>

    <!-- Language -->
    <Card :title="$t('Language')" class="md:w-3/5">
      <div class="flex px-4 py-6 text-gray-400">
        <select
          class="w-40 text-2xl border border-gray-600 py-1 px-2"
          name="langSelect"
          id="langSelect"
        >
          <option value="">繁體中文</option>
          <option value="">繁體中文</option>
          <option value="">繁體中文</option>
          <option value="">繁體中文</option>
        </select>
      </div>
    </Card>

    <!-- Unit -->
    <Card :title="$t('Torque') + $t('Unit')" class="md:w-3/5">
      <div class="flex px-4 py-6 text-gray-400">
        <select
          class="w-40 text-2xl border border-gray-600 py-1 px-2"
          name="langSelect"
          id="langSelect"
        >
          <option value="0">Nm</option>
          <option value="1">kgf-cm</option>
          <option value="2">lb-in</option>
        </select>
      </div>
    </Card>

    <!-- Password setting -->
    <Card :title="$t('CodeSetting')" class="md:w-3/5 w-full">
      <div class="flex flex-col gap-10 px-4 py-6 text-gray-400">
        <ul
          class="
            grid grid-cols-3
            gap-3
            w-full
            md:w-4/5
            text-center text-xl
            md:text-2xl
          "
        >
          <li>
            <button class="">{{ $t('Master') }}</button>
          </li>
          <li>
            <button class="">{{ $t('Manager_1') }}</button>
          </li>
          <li>
            <button class="">{{ $t('Manager_2') }}</button>
          </li>
        </ul>
        <form class="grid grid-rows-3 py-4 gap-6">
          <div class="flex text-xl items-center">
            <label for="first_password" class="w-4/5 md:w-1/3">{{
              $t('CodeInput')
            }}</label>
            <input
              type="number"
              name="first_password"
              id="first_password"
              class="border border-gray-400 px-2 py-1"
              :placeholder="$t('CodeInputPlaceholder')"
            />
          </div>
          <div class="flex text-xl items-center">
            <label for="first_password " class="w-4/5 md:w-1/3">{{
              $t('CodeConfirm')
            }}</label>
            <input
              type="number"
              name="first_password"
              id="first_password"
              class="border border-gray-400 px-2 py-1"
              :placeholder="$t('CodeConfirmPlaceholder')"
            />
          </div>
          <div class="flex justify-center mt-4">
            <button
              type="submit"
              class="
                rounded
                bg-gray-500
                hover:bg-gray-700
                text-white
                px-6
                py-2
              "
            >
              {{ $t('Confirm') }}
            </button>
          </div>
        </form>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {};
  },
};
</script>
