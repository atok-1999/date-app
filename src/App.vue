<template>
  <v-app>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
    <NavigationBar></NavigationBar>
  </v-app>
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

<style></style>
