<template>
  <div>
    <div class="switchPage">
      <div
        @click="showRegistration"
        class="switch"
        :class="pageState === 'registration' ? 'darken-color' : ''"
      >
        会員登録
      </div>
      <div
        @click="showLogin"
        class="switch"
        :class="pageState === 'login' ? 'darken-color' : ''"
      >
        ログイン
      </div>
    </div>
    <div
      :class="
        pageState === 'registration' ? 'underline-left' : 'underline-right'
      "
    ></div>
    <Registration v-if="pageState === 'registration'"></Registration>
    <Login v-if="pageState === 'login'"></Login>
  </div>
</template>

<script>
import Login from "@/components/LoginAndRegistration/Login.vue";
import Registration from "@/components/LoginAndRegistration/Registration.vue";

export default {
  components: {
    Login,
    Registration,
  },
  data() {
    return {
      pageState: "registration",
    };
  },
  methods: {
    showRegistration() {
      this.pageState = "registration";
    },
    showLogin() {
      this.pageState = "login";
    },
  },
};
</script>

<style lang="scss" scoped>
.switchPage {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #efeded;
  padding: 6px 0;
  color: #a8a8a8;
  font-size: 14px;
}

.switch {
  display: flex;
  justify-content: center;
  width: 100%;
}

.darken-color {
  color: #000;
}

.underline-left {
  height: 3px;
  width: 50%;
  background-color: #d9b2ca;
}

.underline-right {
  height: 3px;
  width: 50%;
  transform: translateX(100%);
  background-color: #d9b2ca;
}
</style>
