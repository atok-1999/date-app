<template>
  <div class="content">
    <div class="privacy-policy">
      <a href="#">利用規約</a>と
      <a href="#">プライバシーポリシー</a>に同意の上
      <br />会員登録 / ログインして下さい
    </div>
    <div class="box">
      <div class="box-title">SNSで登録 / ログイン</div>
      <div class="inner-box-container">
        <div class="inner-box line">LINE</div>
        <div class="inner-box twitter">Twitter</div>
        <div class="inner-box instagram">Instagram</div>
      </div>
    </div>
    <div class="box">
      <div class="box-title">メールアドレスで登録</div>
      <div class="inner-box-container">
        <router-link to="/signup-with-email">
          <div class="inner-box mail-adress">登録する</div>
        </router-link>
      </div>
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
  justify-content: flex-start;
  height: 100%;
  max-width: 100%;
  margin-top: 75px;
}

.privacy-policy {
  font-size: 7px;
  text-align: center;
  color: #393939;
  margin-bottom: 10px;
}

.box {
  height: 140px;
  width: 90%;
  border: 1px solid #bbbbbb7e;
  border-radius: 5px;
  text-align: center;
  margin: 17px 0 5px 0;
}

.box-title {
  font-size: 12px;
  font-weight: 600;
  color: #393939;
  margin: 20px 0;
}

.inner-box-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.inner-box {
  cursor: pointer;
  border-radius: 5px;
  font-size: 13px;
  color: #fff;
  padding: 10px 20px 10px 20px;

  &.mail-adress {
    background-color: #d9b2ca;
    padding: 10px 30px 10px 30px;
    font-weight: bold;
  }
  &.line {
    background-color: #2bc331;
  }
  &.twitter {
    background-color: #389cff;
  }
  &.instagram {
    background: #f09433;
    background: -moz-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }
}

a {
  color: #6fcdfe;
  text-decoration: none;
  &:hover {
    color: #37b6fa;
  }
}
</style>
