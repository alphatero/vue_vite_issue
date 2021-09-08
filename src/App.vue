<template>
  <div class="flex h-screen theme-lucent ">
    <Sidebar />
    <div class="flex flex-col flex-1 w-full bg-gray-50">
      <Navbar  v-bind="data"/>


      <main class="h-full overflow-y-auto bg-gray-100">
        <div class="container px-6 mx-auto grid py-10">
          <router-view v-bind="data"></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
import { ws } from './websocket';

export default {
  data() {
    return {
      data: {},
    }
  },
  components: {
    Sidebar,
    Navbar,
  },
  methods: {
    listen(e) {
      const data = JSON.parse(e.data);
      this.data = data
      console.log('this data:', data)
    },
    path() {
      const page = 1;
      const sendPage = JSON.stringify({ page: page });
      if (ws.readyState === 1) {
        ws.send(sendPage);
      }
    }
  },
  created() {
    const vm = this;
    ws.addEventListener('open', vm.path)
    vm.path();
    ws.addEventListener('message', vm.listen);
  }
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
