<template>
  <div>
    <div v-if="!showFavPlans">
      <div class="Mypage">My page</div>
      <div class="photo-container">
        <div class="user-photo">
          <v-avatar class="mr-2" color="#E0E0E0" size="50">
            <img v-if="userName !== 'ゲスト'" :src="profileImage" />
            <v-icon v-else dark large>mdi-account</v-icon>
          </v-avatar>
          <div class="user-info">{{ userName }}さんのマイページです</div>
        </div>
      </div>
      <div class="circle-container">
        <div class="center">
          <div class="circle-menu">
            <i class="fas fa-crown"></i>
            <span>Profile</span>
          </div>
        </div>
        <div class="circle">
          <div class="circle-container1">
            <div class="circle-menu" @click="showFavPlans = !showFavPlans">
              <i class="fas fa-heart"></i>
              <span>Favorite</span>
            </div>
          </div>
          <div class="circle-container2">
            <div class="circle-menu">
              <i class="fas fa-star"></i>
              <span>Created</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Favorite v-else @return="showFavPlans = !showFavPlans"></Favorite>
  </div>
</template>

<script>
import firebase from "firebase";
import Favorite from "@/components/MyPage/Favorite.vue";

export default {
  components: {
    Favorite
  },
  data() {
    return {
      userName: "",
      profileImage: "",
      showFavPlans: false
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

.circle-container1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 3%;
}

.circle-container2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 3%;
}

.circle {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  margin-bottom: 33%;
}

.center {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15%;
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
  color: #ffffff;
  font-size: 12px;
  .fas {
    font-size: 20px;
    margin-bottom: 5px;
  }
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
