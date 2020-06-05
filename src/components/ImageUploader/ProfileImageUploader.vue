<template>
  <div>
    <!-- 画像だけが選択できるように accept を設定する -->
    <!-- アップロード中は disabled で選択できないようにする -->
    <input
      id="image-uploader"
      type="file"
      accept="image/*"
      :disabled="disabled"
      @change="onFileChange"
    />
    <label for="image-uploader">
      <div class="label-image-uploader">+</div>
    </label>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  props: ["ready", "uid"],
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.upload(file);
    },
    upload(file) {
      this.message = "アップロード中...";
      this.disabled = true;
      this.file = file;

      //Firebase StorageにはAuthorizedなUserしかアップロードできないため、
      //親コンポーネントで登録が完了されるまで画像を一時保存
      this.$emit("getImage", window.URL.createObjectURL(file));
    },
    actuallyUpload() {
      //登録が完了されたら
      if (this.ready === true) {
        // ref は reference の略。データの在り処＝住所を表すイメージ。
        const storageRef = firebase.storage().ref();
        // 同じ名前のファイルと区別できるように timestamp を追加して、ユニークなファイル名をつける
        const createdAt = new Date();
        const timestamp = createdAt.getTime();
        const uniqueFileName = timestamp + "_" + this.file.name;
        const fileRef = storageRef.child("images/" + uniqueFileName);
        // fileRef の場所に file を送る。 put は "置き換える" の意味。
        // uploadTask.on("state_changed", ...) を使う方法もあるが、ひとまず then で実装する
        fileRef
          .put(this.file)
          .then(() => fileRef.getDownloadURL())
          // 上の then のなかで snapshot.getDownloadURL().then(...) と書いてもいいが、
          // then で続けられるやつを return すると、外側に then を続けることができ、よみやすい
          // 例 fetch(...).then(res => res.json()).then(...)
          .then(url => {
            // storage にアップロードしたファイルに対応するドキュメントを保存する
            const image = {
              profileImageUrl: url
            };
            return firebase
              .firestore()
              .collection("users")
              .doc(this.uid)
              .set(image, { merge: true });
          })
          .then(() => {
            this.message = "アップロード完了！";
            setTimeout(() => {
              this.message = "";
              this.disabled = false;
            }, 1000);
          });
      }
    }
  },
  watch: {
    ready: function() {
      this.actuallyUpload();
    }
  },
  data() {
    return {
      disabled: false,
      message: "",
      file: ""
    };
  }
};
</script>

<style lang="scss" scoped>
#image-uploader {
  display: none;
}

.label-image-uploader {
  height: 22px;
  width: 22px;
  border-radius: 50%;
  background-color: rgb(217, 178, 202);
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgb(218, 145, 190);
  }
}
</style>
