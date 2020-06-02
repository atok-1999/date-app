<template>
  <div class="navigation-bar">
    <div @click="homeClicked">
      <v-icon>{{ home }}</v-icon>
    </div>
    <div @click="searchClicked">
      <v-icon>{{ search }}</v-icon>
    </div>
    <div @click="heartClicked">
      <v-icon>{{ heart }}</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: "mdi-home-outline",
      search: "mdi-magnify",
      heart: "mdi-heart-outline"
    };
  },
  methods: {
    homeClicked() {
      this.home = "mdi-home";
      this.$router.push("/");

      setTimeout(() => {
        this.home = "mdi-home-outline";
      }, 1000);
    },
    searchClicked() {
      this.$router.push("/");
    },
    heartClicked() {
      this.heart = "mdi-heart";
      this.$router.push("/my-page");

      setTimeout(() => {
        this.heart = "mdi-heart-outline";
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.navigation-bar {
  position: sticky;
  bottom: 0%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  min-width: 100%;
  background-color: #fff;
  border-top: 1px solid rgb(226, 226, 226);
}
</style>
