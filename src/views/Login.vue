<template>
  <Loading :isLoading="isLoading" />
  <div class="flex justify-center">
    <Card :title="$t('LoginTitle')" class="sm:w-4/5 md:w-3/5 w-full">
      <form action="" @submit.prevent="submitPassword()">
        <div class="grid md:grid-cols-3 p-4 gap-3 text-xl items-center">
          <label for="password  flex-1">{{ $t('CodeInput') }}</label>
          <div class="flex-1 relative w-full col-span-2 lg:max-w-[200px]">
            <input
              name="password"
              id="password"
              class="border border-gray-300 rounded-md px-2 py-1 w-full"
              type="password"
              v-model="password"
              pattern="[0-9]*"
              inputmode="numeric"
              maxlength="8"
              @change="checkPasswordFormat"
              @keyup.enter="submitPassword"
              :class="[isError ? 'ring-1 ring-red-500' : 'focus:ring-1 focus:ring-gray-400']"
            />
            <div
              v-if="isError"
              class="text-red-500 absolute top-0 w-6 h-full right-0 py-3 mr-3 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M11
                  15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48
                  2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2
                  11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="flex justify-center py-4">
          <button
            type="submit"
            class="rounded-md lucent:bg-lucent text-white py-2 px-4"
            :class="[isError || password.length === 0 ? ' lucent:bg-lucent-light' : '']"
          >
            {{ $t('Confirm') }}
          </button>
        </div>
      </form>
    </Card>
  </div>

</template>

<script>
import Card from '../components/Card.vue';
import { ws } from '../websocket';
import Loading from '../components/Loading.vue';

export default {
  components: {
    Card,
    Loading,

  },
  props: {
    temp: Object,
  },
  emits: ['updateAccount'],
  data() {
    return {
      password: '',
      isError: false,
      isLogin: 0,
      isLoading: false,
      path: '',
      isLogout: false,
      account: 0,
    };
  },
  methods: {
    checkPasswordFormat() {
      const len = this.password.length;
      if (len < 4) {
        this.isError = true;
      } else {
        this.isError = false;
      }
    },
    submitPassword() {
      if (this.isError === false && this.password.length >= 4) {
        console.log(`password: ${this.password}`);
        const passwordLen = this.password.length;
        const password = parseInt(this.password, 10);
        const sendPassword = JSON.stringify({ password, passwordLen });
        ws.send(sendPassword);
      }
    },
    checkPassword() {
      const msg = this.$t('TimeoutAlert');
      if (this.temp.isPassword !== undefined) {
        const isPassword = parseInt(this.temp.isPassword, 10);
        if (isPassword === 0) {
          this.isLogin = 0;
          this.isLoading = false;
          this.account = 0;
        } else if (isPassword === 1) {
          this.isLogin = 1; // master
          this.account = 1;
        } else if (isPassword === 2) {
          this.isLogin = 2; // manager
          this.account = 2;
        } else if (isPassword === 3) {
          this.isLogin = 2;
          this.account = 3;
        } else if (isPassword === 4) {
          this.isLogin = 4;
          this.account = 0;
          this.$router.push('signup').catch(() => {});
        } else if (isPassword === 5) {
          this.isLogin = 0;
          this.account = 0;
          this.isLoading = false;
          alert(msg);
        }

        console.log(`isLogin${this.isLogin}`);
        this.path = sessionStorage.getItem('toPath');
        console.log(`toPath${this.path}`);
        console.log(`account${this.account}`);
        sessionStorage.setItem('account', this.account);
        if (this.$route.path !== this.path) {
          this.$router.push(this.path).catch();
        }
        if (this.isLogin !== 0) {
          sessionStorage.setItem('isLogin', this.isLogin);
        }
        this.isLoading = false;
      } else {
        // this.isLoading = true;
      }
    },
    // checkLogout() {
    //   console.log('check logout');
    //   this.isLogin = parseInt(sessionStorage.getItem('isLogin'), 10);
    //   if (this.isLogin === 6 && !Number.isNaN(this.isLogin)) {
    //     this.isLogin = 0;
    //     this.account = 0;
    //     sessionStorage.setItem('account', this.account);
    //     this.$emit('updateAccount');
    //     sessionStorage.setItem('isLogin', this.isLogin);
    //     console.log('logout');
    //     this.isLogout = true;
    //   }
    // },
  },
  watch: {
    password() {
      this.checkPasswordFormat();
    },
    temp() {
      this.checkPassword();
    },
  },
};
</script>
