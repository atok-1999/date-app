<template>
  <div>
    <Header></Header>
    <img class="image" src="@/assets/header-logo/header-top.png" />
    <div class="container">
      <router-link to="/create-plan" style="text-decoration: none;">
        <div class="make">Dating plan を作る</div>
      </router-link>
    </div>
    <div class="circle-container">
      <div class="center">
        <router-link to="/" style="text-decoration: none;">
          <div class="circle-menu">
            <i class="fas fa-crown"></i>
            <span>Ranking</span>
          </div>
        </router-link>
      </div>
      <div class="circle">
        <router-link to="/" style="text-decoration: none;">
          <div class="circle-menu">
            <i class="fas fa-search"></i>
            <span>Search</span>
          </div>
        </router-link>
        <router-link to="/" style="text-decoration: none;">
          <div class="circle-menu">
            <i class="fas fa-heart"></i>
            <span>Favorite</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.image {
  display: block;
  width: 100%;
  margin-top: 30px;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
}

.make {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 139px;
  height: 32px;
  color: #d1aabe;
  border: 1px solid #d1aabe;
  border-radius: 16px;
  font-size: 12px;
}

.center {
  margin-left: 132px;
}

.circle-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background-color: #d9b2ca;
  margin: 5px 10px;
  color: #ffffff;
  font-size: 12px;
  text-align: center;
  .fas {
    font-size: 20px;
    margin-bottom: 5px;
  }
}
.circle {
  display: flex;
  margin-left: 82px;
}

.circle-container {
  margin-top: 25px;
}
</style>
