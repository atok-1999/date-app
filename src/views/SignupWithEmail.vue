<template>
  <div>
    <div class="page-title">メールアドレスで登録する</div>
    <div class="content">
      <div class="box">
        <div class="image-container">
          <v-avatar color="#E0E0E0" size="70">
            <img v-if="imageFromChild" :src="imageFromChild" />
            <v-icon v-else dark large>mdi-account</v-icon>
          </v-avatar>
          <ImageUploader
            :ready="readyToUploadImage"
            :uid="uid"
            @getImage="blobImage"
            class="image-uploader"
          ></ImageUploader>
        </div>
        <v-form ref="form">
          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="10">
              <v-row>
                <v-text-field
                  v-model="userName"
                  label="ユーザーネーム"
                  prepend-icon="mdi-account"
                  color="#D9B2CA"
                ></v-text-field>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="mailAddress"
                  type="email"
                  label="メールアドレス"
                  prepend-icon="mdi-email"
                  color="#D9B2CA"
                ></v-text-field>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="password"
                  type="password"
                  label="パスワード"
                  prepend-icon="mdi-lock"
                  color="#D9B2CA"
                ></v-text-field>
              </v-row>
              <!-- <v-row>
                <div class="checkbox-container">
                  <input type="checkbox" class="checkbox-input" value />
                  <label for="checkbox" class="checkbox-parts">お知らせメールの配信を希望する</label>
                </div>
              </v-row>-->
              <v-row>
                <div class="error-message">{{ errMessage }}</div>
              </v-row>
            </v-col>
            <v-col cols="1"></v-col>
          </v-row>
          <v-row>
            <v-btn
              @click.stop="signup"
              :loading="loading"
              :disabled="loading"
              depressed
              color="#d9b2ca"
              width="130"
              class="signup-btn white--text"
            >登録する</v-btn>
          </v-row>
          <v-row>
            <div class="button login">
              <router-link to="/login-or-signup">ログインする</router-link>
            </div>
          </v-row>
          <v-dialog v-model="dialog" max-width="290">
            <v-card>
              <v-card-text>
                <div class="dialog-text">
                  <div>ありがとうございます。</div>
                  <div>会員登録が完了致しました。</div>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#d9b2ca" text @click="dialog = false" to="/">ホームに戻る</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="alreadyAMember" max-width="290">
            <v-card>
              <v-card-text>
                <div class="dialog-text">
                  <div>あなたは既にログインしています。</div>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#d9b2ca" text @click="alreadyAMember = false" to="/">ホームに戻る</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "@/main.js";
import ImageUploader from "@/components/ImageUploader/ImageUploader.vue";

export default {
  components: {
    ImageUploader
  },
  data() {
    return {
      userName: "",
      mailAddress: "",
      password: "",
      dialog: false,
      loading: false,
      errMessage: "",
      alreadyAMember: false,
      imageFromChild: "",
      uid: "",
      readyToUploadImage: false
    };
  },
  methods: {
    signup() {
      this.setLoader();

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.mailAddress, this.password)
        .then(cred => {
          let userInfo = {
            uid: cred.user.uid,
            userName: this.userName
          };

          this.uid = userInfo.uid;

          return firebase
            .firestore()
            .collection("users")
            .doc(cred.user.uid)
            .set({
              userInfo
            });
        })
        .then(() => {
          this.readyToUploadImage = true;

          this.resetForm();

          this.dialog = true;
        })
        .catch(err => {
          this.errMessage = err.message;
        });
    },
    resetForm() {
      this.$refs.form.reset();
    },
    setLoader() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
    blobImage(blobImage) {
      this.imageFromChild = blobImage;
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user && this.readyToUploadImage === false) {
        this.alreadyAMember = true;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.page-title {
  background-color: #efeded;
  padding: 6px 0;
  color: #393939;
  font-size: 14px;
  text-align: center;
  border-bottom: 3px solid #d9b2ca;
}

.box {
  height: 500px;
  width: 85%;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  text-align: center;
  padding: 30px;
}

//チェックボックス
.checkbox-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-left: 7px;

  & .checkbox-input {
    margin-right: 5px;
  }
}

.signup-btn {
  margin: 0 auto;
  font-weight: bold;
}

.button {
  cursor: pointer;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  margin: 0 auto;

  &.login {
    padding: 10px 40px 10px 40px;

    & a {
      text-decoration: none;
      color: #d9b2ca;
    }
  }
}

.dialog-text {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.error-message {
  color: red;
}

//画像アップロード
.image-container {
  position: relative;
}

.image-uploader {
  position: absolute;
  right: 37%;
  top: 77%;
}
</style>
