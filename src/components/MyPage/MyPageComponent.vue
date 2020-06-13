<template>
  <div>
    <div class="Mypage">My page</div>
    <div class="user-photo">
      <v-avatar color="#E0E0E0" size="70">
        <v-icon dark large>mdi-account</v-icon>
      </v-avatar>
    </div>
    <div class="user-info">こんにちは、{{ userName }}さん</div>
    <div class="options">
      <div class="option first">
        <v-icon class="icon">mdi-account</v-icon>プロフィール
      </div>
      <div class="option">
        <v-icon class="icon">mdi-star</v-icon>自分のデートプラン
      </div>
      <div class="option">
        <v-icon class="icon">mdi-heart</v-icon>いいねしたデートプラン
      </div>
      <div class="option"><v-icon class="icon">mdi-cog</v-icon>設定</div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      userName: ""
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.userName = user.email;
      } else {
        this.userName = "ゲスト";
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.Mypage {
  width: 100%;
  height: 46px;
  margin-top: 15px;
  background-color: #F4F4F4;
  font-size: 15px;
  text-align: center;
  line-height: 46px;
  color: #000000;
}

.options {
  margin-top: 10px;
}

.option {
  padding: 12px 0;
  margin: 0;
  border-bottom: 1px solid rgb(231, 231, 231);

  &.first {
    border-top: 1px solid rgb(231, 231, 231);
  }
}

.icon {
  margin: 0 10px;
}

.user-photo {
  text-align: center;
}

.user-info {
  text-align: center;
  margin: 15px 0;
}
</style>
