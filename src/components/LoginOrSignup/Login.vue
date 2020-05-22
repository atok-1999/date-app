<template>
  <div class="content">
    <div class="privacy-policy">
      <a href="#">利用規約</a>と <a href="#">プライバシーポリシー</a>に同意の上
      <br />会員登録 / ログインして下さい
    </div>
    <div class="box">
      <div class="box-title">メールアドレスでログイン</div>
      <div class="inner-box-container">
        <div class="button mail-adress login">
          <router-link to="/login-with-email">ログインする</router-link>
        </div>
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
  justify-content: center;
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
  margin: 17px 0;
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

.button {
  cursor: pointer;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
  margin: 0 auto;

  &.mail-adress {
    background-color: #d9b2ca;
    padding: 10px 40px 10px 40px;
  }

  &.login {
    padding: 10px 40px 10px 40px;

    & a {
      text-decoration: none;
      color: #fff;
    }
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
