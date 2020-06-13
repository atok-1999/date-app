<template>
  <div class="content">
    <div>
      <div class="new-plans mb-5">新着のデートプラン</div>
      <span class="new ml-5">New Plans!</span>
      <v-row class="mx-2" v-for="(plan, index) in plans" :key="index">
        <v-col @click="showDetail(index)" class="photo-container" cols="5">
          <img :src="plan.spots[0].spotPhoto" width="130" height="115" />
        </v-col>
        <v-col cols="7">
          <div class="plan-title">{{ plan.title }}</div>
          <div class="price">
            <i class="fas fa-yen-sign"></i>
            {{ plan.priceFrom }}-{{ plan.priceTo }}
          </div>
          <div class="spots">
            <div class="spot-name">
              <i class="fas fa-tag">このプランに含まれるスポット</i>
            </div>
            <ul>
              <li>{{ plan.spots[0].spotName }}</li>
              <li>{{ plan.spots[1] ? plan.spots[1].spotName : "" }} etc.</li>
            </ul>
          </div>
          <v-row class="user-photo-container align-center">
            made by
            <v-avatar class="ml-2" color="#E0E0E0" size="35">
              <img v-if="plan.userPhoto" :src="plan.userPhoto" />
              <v-icon v-else dark>mdi-account</v-icon>
            </v-avatar>
          </v-row>
        </v-col>
        <v-divider class="mx-4" style="display: inline;"></v-divider>
      </v-row>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  computed: {
    plans() {
      return this.$store.getters.sortedPlans;
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("loadPlans");
  },
  methods: {
    showDetail(index) {
      const id = this.plans[index].id;

      this.$store.commit("setUserPhotoPostedPlan", this.plans[index].userPhoto);

      let docRef = firebase
        .firestore()
        .collection("users")
        .doc(this.plans[index].uid);

      docRef.get().then(doc => {
        this.$store.commit(
          "setUserNamePostedPlan",
          doc.data().userInfo.userName
        );
      });

      this.$router.push({
        name: "ShowPlan",
        params: {
          planId: id
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  min-height: 100vh;
}

.new-plans {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #efeded;
  padding: 6px 0;
  color: #333;
  font-size: 14px;
  border-bottom: 2px solid #d9b2ca;
}

.new {
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
  font-size: 22px;
}
.plan-title {
  height: 15px;
  font-size: 12px;
  border-right: 0.001rem solid rgb(102, 100, 100);
  border-left: 0.001rem solid rgb(102, 100, 100);
  text-align: center;
  margin: 5px;
}
.price {
  font-size: 12px;
  text-align: right;
  padding-left: 40px;
}
.spots {
  height: 80px;
  padding: 10px;
  font-size: 12px;
}

.spot-name {
  font-size: 2px;
}

.photo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-photo-container {
  margin-left: 75px;
  font-size: 14px;
}
</style>
