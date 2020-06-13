<template>
  <div>
    <Header></Header>
    <MyPageComponent></MyPageComponent>
  </div>
</template>

<script>
import MyPageComponent from "@/components/MyPage/MyPageComponent.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    MyPageComponent,
    Header
  }
};
</script>

<style>
.page-title {
  background-color: #efeded;
  padding: 6px 0;
  color: #393939;
  font-size: 14px;
  text-align: center;
  border-bottom: 3px solid #d9b2ca;
}
</style>
