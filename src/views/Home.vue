<template>
  <div>
    <Header></Header>
    <img class="image" src='@/assets/header-logo/header-top.png'>
    <div class="container">
      <div class="make">Dating plan を作る</div>
    </div>
    <div class="circle-container">
      <div class="center">
        <div class="circle-menu">
          <i class="fas fa-crown"></i>
          <span>Ranking</span>
        </div>
      </div>
      <div class="circle">
        <div class="circle-menu">
          <i class="fas fa-search"></i>
          <span>Search</span>
        </div>
        <div class="circle-menu">
          <i class="fas fa-heart"></i>
          <span>Favorite</span>
        </div>
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
}
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
  color: #D1AABE;
  border: 1px solid #D1AABE;
  border-radius: 16px;
  font-size: 12px;
}

.center {
  margin-left: 125px;
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
  margin-left: 75px;
}

.circle-container {
  margin-top: 25px;
}
</style>