<template>
  <div class="flex h-screen theme-lucent">
    <!-- <Sidebar v-model="account" v-on:getLogout="checkLogout" /> -->
    <div class="flex flex-col flex-1 w-full bg-gray-50">
      <Navbar v-bind="data" />

      <main class="h-full overflow-y-auto bg-gray-100">
        <div class="container px-6 mx-auto grid py-10">
          <router-view v-bind="data"></router-view>

        </div>
      </main>
    </div>
  </div>

</template>

<script>
import Navbar from './components/Navbar.vue';
import { ws } from './websocket';

export default {
  data() {
    return {
      data: {
        temp: {},
      },
      account: 0,
      isLogout: false,
    };
  },
  components: {
    // Sidebar,
    Navbar,
    // Modal,
  },
  methods: {
    listen(e) {
      const data = JSON.parse(e.data);
      this.data.temp = data;
      console.log('this data:', data);
      if (data.language === 0) {
        this.$i18n.locale = 'ch';
      } else if (data.language === 1) {
        this.$i18n.locale = 'en';
      }
      if (data.isPassword === 1) {
        this.account = 1;
      } else if (data.isPassword === 2) {
        this.account = 2;
      } else if (data.isPassword === 3) {
        this.account = 3;
      }
    },
    changePath() {
      const link = window.location.pathname;
      const word = 'correction';
      if (link.includes(word)) {
        console.log('include');
        this.$router.replace('/correction').catch();
      }
    },
    checkAccount() {
      this.account = parseInt(sessionStorage.getItem('account'), 10);
      console.log(`this account: ${this.account}`);
    },
    checkLogout() {
      this.isLogout = true;
    },
    afterLogout() {
      this.isLogout = false;
      const isLogin = 0;
      sessionStorage.setItem('isLogin', isLogin);
      this.$router.replace('/').catch();
    },
  },
  created() {
    const vm = this;
    // vm.changePath();
    this.checkAccount();
    ws.addEventListener('open', vm.changePath());
    ws.addEventListener('message', vm.listen);
  },

};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
