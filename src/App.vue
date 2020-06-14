<template>
  <div class="back-color">
    <div class="screen">
      <v-app>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
        <NavigationBar></NavigationBar>
      </v-app>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import firebase from "firebase";

export default {
  components: {
    Header,
    Footer,
    NavigationBar
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // vuexにuidを渡す
        this.$store.commit("setUserId", user.uid);
      } else {
        this.$store.commit("setUserId", null);
      }
    });
  }
};
</script>

<style>
@media screen and (min-width: 481px) {
  .screen {
    width: 375px;
    filter: drop-shadow(0px 0px 10px #696969);
    margin-left: 35%;
    padding-top: 2%;
    padding-bottom: 2%;
  }
  .back-color {
    background-color: #f3f3f2;
  }
}
@media screen and (max-width: 480px) {
  .screen {
    width: 100%;
  }
}
</style>
