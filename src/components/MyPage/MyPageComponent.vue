<template>
  <div>
    <h1>Mypage</h1>
    <div class="user-photo">
      <v-avatar color="#E0E0E0" size="70">
        <img v-if="userName !== 'ゲスト'" :src="profileImage" />
        <v-icon v-else dark large>mdi-account</v-icon>
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
      <div class="option">
        <v-icon class="icon">mdi-cog</v-icon>設定
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      userName: "",
      profileImage: ""
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let docRef = firebase
          .firestore()
          .collection("users")
          .doc(user.uid);

        docRef.get().then(doc => {
          this.profileImage = doc.data().profileImageUrl;
          this.userName = doc.data().userInfo.userName;
        });
      } else {
        this.userName = "ゲスト";
      }
    });
  }
};
</script>

<style lang="scss" scoped>
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
