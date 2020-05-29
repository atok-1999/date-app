<template>
  <div>
    <div class="switch-page">
      <div
        @click="showRegistration"
        class="switch"
        :class="pageState === 'registration' ? 'darken-color' : ''"
      >会員登録</div>
      <div
        @click="showLogin"
        class="switch"
        :class="pageState === 'login' ? 'darken-color' : ''"
      >ログイン</div>
    </div>
    <div
      :class="
        pageState === 'registration' ? 'underline-left' : 'underline-right'
      "
    ></div>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-text>
          <div class="dialog-text">
            <div>あなたは既にログインしています。</div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#d9b2ca" text @click="dialog = false" to="/">ホームに戻る</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <Signup v-if="pageState === 'registration'"></Signup>
    <Login v-if="pageState === 'login'"></Login>
  </div>
</template>

<script>
import Login from "@/components/LoginOrSignup/Login.vue";
import Signup from "@/components/LoginOrSignup/Signup.vue";
import firebase from "firebase";

export default {
  components: {
    Login,
    Signup
  },
  data() {
    return {
      pageState: "registration",
      dialog: false
    };
  },
  methods: {
    showRegistration() {
      this.pageState = "registration";
    },
    showLogin() {
      this.pageState = "login";
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.dialog = true;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.switch-page {
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

.dialog-text {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
