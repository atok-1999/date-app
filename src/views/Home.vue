<template>
  <div>
    <div class="home">Home</div>
    <div>ログイン状態:{{ loginState }}</div>
    <v-btn @click="signOut">ログアウト</v-btn>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      loginState: ""
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.loginState = "ログイン中";
      } else {
        this.loginState = "ログアウト中";
      }
    });
  },
  methods: {
    signOut() {
      firebase.auth().signOut();
    }
  }
};
</script>

<style></style>
