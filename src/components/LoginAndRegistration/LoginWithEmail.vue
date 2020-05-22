<template>
  <div>
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
            </v-col>
            <v-col cols="1"></v-col>
          </v-row>
          <v-row>
            <div @click="login" class="button mail-adress login">
              ログインする
            </div>
          </v-row>
          <v-row class="button signup">
            <router-link to="/registrate-with-email">
              新規会員登録する
            </router-link>
          </v-row>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mailAddress: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("logged in!");
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
</style>
