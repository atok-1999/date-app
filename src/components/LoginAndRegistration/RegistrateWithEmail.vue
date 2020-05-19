<template>
  <div>
    <div class="title">メールアドレスで登録する</div>
    <div class="content">
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.title {
  background-color: #efeded;
  padding: 6px 0;
  color: #393939;
  font-size: 14px;
  text-align: center;
  border-bottom: 3px solid #d9b2ca;
}

.box {
  height: 300px;
  width: 85%;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  text-align: center;
}
</style>
