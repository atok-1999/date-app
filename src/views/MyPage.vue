<template>
  <div class="content">
    <div class="page-title">マイページ</div>
    <MyPageComponent></MyPageComponent>
  </div>
</template>

<script>
import MyPageComponent from "@/components/MyPage/MyPageComponent.vue";

export default {
  components: {
    MyPageComponent
  }
};
</script>

<style lang="scss" scoped>
.content {
  min-height: 100vh;
}

.page-title {
  background-color: #efeded;
  padding: 6px 0;
  color: #393939;
  font-size: 14px;
  text-align: center;
  border-bottom: 3px solid #d9b2ca;
}
</style>
