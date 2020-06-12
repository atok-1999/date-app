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

export default {
  components: {
    Header,
    Footer,
    NavigationBar
  }
};
</script>

<style></style>
