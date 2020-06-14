<template>
  <div class="container">
    <div class="page-title">メールアドレスでログインする</div>
    <div class="content">
      <div class="box">
        <v-form ref="form">
          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="10">
              <v-row>
                <v-text-field
                  v-model="mailAddress"
                  type="email"
                  label="メールアドレス"
                  prepend-icon="mdi-email"
                  color="#D9B2CA"
                ></v-text-field>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="password"
                  type="password"
                  label="パスワード"
                  prepend-icon="mdi-lock"
                  color="#D9B2CA"
                ></v-text-field>
              </v-row>
              <v-row>
                <div class="error-message">{{ errMessage }}</div>
              </v-row>
            </v-col>
            <v-col cols="1"></v-col>
          </v-row>
          <v-row>
            <v-btn
              @click.stop="login"
              :loading="loading"
              :disabled="loading"
              depressed
              color="#d9b2ca"
              width="130"
              class="login-btn white--text"
            >ログインする</v-btn>
          </v-row>
          <v-row class="button signup">
            <router-link to="/signup-with-email">新規会員登録する</router-link>
          </v-row>
        </v-form>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-text>
              <div class="dialog-text">
                <div>ログインしました。</div>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#d9b2ca" text @click="dialog = false" to="/">ホームに戻る</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "@/main.js";

export default {
  data() {
    return {
      mailAddress: "",
      password: "",
      errMessage: "",
      loading: false,
      dialog: false
    };
  },
  methods: {
    login() {
      this.setLoader();

      firebase
        .auth()
        .signInWithEmailAndPassword(this.mailAddress, this.password)
        .catch(err => {
          this.errMessage = err.message;
        });
    },
    setLoader() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 3000);
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
.container {
  min-height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
}

.page-title {
  background-color: #efeded;
  padding: 6px 0;
  color: #393939;
  font-size: 14px;
  text-align: center;
  border-bottom: 3px solid #d9b2ca;
}

.box {
  height: 350px;
  width: 85%;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  text-align: center;
  padding: 30px;
}

.button {
  cursor: pointer;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  margin: 0 auto;

  &.login {
    background-color: #d9b2ca;
    padding: 10px 40px 10px 40px;
  }
  &.signup {
    padding: 10px 40px 10px 40px;
  }

  & a {
    text-decoration: none;
    color: #d9b2ca;
    margin: 0 auto;
  }
}

.login-btn {
  margin: 0 auto;
  font-weight: bold;
}

.dialog-text {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.error-message {
  color: red;
}
</style>
