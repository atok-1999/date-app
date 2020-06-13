<template>
  <div>
    <div class="Mypage">My page</div>
    <div class="photo-container">
      <div class="user-photo">
        <v-avatar color="#E0E0E0" size="40">
          <img v-if="userName !== 'ゲスト'" :src="profileImage" />
          <v-icon v-else dark large>mdi-account</v-icon>
        </v-avatar>
        <div class="user-info">{{ userName }}さんのマイページです</div>
      </div>
    </div>
    <div class="circle-container">
      <div class="center">
        <router-link to="/" style="text-decoration: none;">
          <div class="circle-menu">
            <i class="fas fa-crown"></i>
            <span>Profile</span>
          </div>
        </router-link>
      </div>
      <div class="circle">
        <router-link to="/plan-list" style="text-decoration: none;">
          <div class="circle-menu">
            <i class="fas fa-search"></i>
            <span>Favorite</span>
          </div>
        </router-link>
        <router-link to="/" style="text-decoration: none;">
          <div class="circle-menu">
            <i class="fas fa-heart"></i>
            <span>Created</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      userName: "",
      profileImage: ""
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let docRef = firebase
          .firestore()
          .collection("users")
          .doc(user.uid);

        docRef.get().then(doc => {
          this.profileImage = doc.data().profileImageUrl;
          this.userName = doc.data().userInfo.userName;
        });
      } else {
        this.userName = "ゲスト";
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.Mypage {
  width: 100%;
  height: 46px;
  background-color: #f4f4f4;
  color: black;
  margin-top: 10px;
  text-align: center;
  line-height: 46px;
}

.photo-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
}

.user-photo {
  width: 90%;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #c7c7c7;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 13px;
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
  margin-top: 50px;
  margin-bottom: 174px;
}
.options {
  margin-top: 10px;
}

.user-photo {
  text-align: center;
}

.user-info {
  text-align: center;
  margin: 15px 0;
}
</style>
