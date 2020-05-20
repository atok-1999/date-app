<template>
  <div>
    <div class="page-title">メールアドレスで登録する</div>
    <div class="content">
      <div class="box">
        <div class="avatar-circle"></div>
        <v-form ref="form">
          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="10">
              <v-row>
                <v-text-field
                  v-model="userName"
                  label="ユーザーネーム"
                  prepend-icon="mdi-account"
                  color="#D9B2CA"
                ></v-text-field>
              </v-row>
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
                <div class="checkbox-container">
                  <input type="checkbox" class="checkbox-input" value />
                  <label for="checkbox" class="checkbox-parts"
                    >お知らせメールの配信を希望する</label
                  >
                </div>
              </v-row>
            </v-col>
            <v-col cols="1"></v-col>
          </v-row>
          <v-row>
            <div @click="signup" class="button mail-adress">登録する</div>
          </v-row>
          <v-row>
            <div class="button login">
              <router-link to="/login-registration">ログインする</router-link>
            </div>
          </v-row>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "@/main.js";

export default {
  data() {
    return {
      userName: "",
      mailAddress: "",
      password: "",
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.mailAddress, this.password)
        .then((cred) => {
          let userInfo = {
            uid: cred.user.uid,
            userName: this.userName,
          };
          return firebase
            .firestore()
            .collection("users")
            .doc(cred.user.uid)
            .set({
              userInfo,
            });
        })
        .then(() => {
          this.resetForm();
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    resetForm() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  height: 500px;
  width: 85%;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  text-align: center;
  padding: 30px;
}

.avatar-circle {
  height: 80px;
  width: 80px;
  background-color: #cecdcd;
  border-radius: 50%;
  margin: 0 auto;
}

//チェックボックス
.checkbox-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-left: 7px;

  & .checkbox-input {
    margin-right: 5px;
  }
}

.button {
  cursor: pointer;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  margin: 0 auto;

  &.mail-adress {
    background-color: #d9b2ca;
    padding: 10px 40px 10px 40px;
    margin-top: 30px;
  }

  &.login {
    padding: 10px 40px 10px 40px;

    & a {
      text-decoration: none;
      color: #d9b2ca;
    }
  }
}
</style>
