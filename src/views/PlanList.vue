<template>
  <div class="content">
    <div v-show="list">
      <div class="new-plans mb-5">New Plans</div>
      <span class="new ml-5">New !</span>
      <v-row class="mx-2" v-for="(plan, index) in plans" :key="index">
        <div class="plan-spot" @click="detailPlan">
          <v-col cols="5">
            <img :src="plan.spots[0].spotPhoto" width="130" height="100" />
          </v-col>
          <v-col cols="7">
            <div class="plan-title">{{ plan.title }}</div>
            <div class="price">¥: {{ plan.priceFrom }}-{{ plan.priceTo }}</div>
            <div class="spots">
              <div class="spot-name">
                <i class="fas fa-tag">このプランに含まれるスポット例</i>
              </div>
              {{ plan.spots[0].spotName }}
            </div>
          </v-col>
          <v-divider class="mx-4" style="display: inline;"></v-divider>
        </div>
      </v-row>
    </div>
    <div v-show="showPlan">
      <v-btn @click="planList">新着プランに戻る</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    plans() {
      return this.$store.getters.sortedPlans;
    }
  },
  data() {
    return {
      list: true,
      showPlan: false
    };
  },
  mounted() {
    this.$store.dispatch("loadPlans");
  },
  methods: {
    detailPlan() {
      this.list = false;
      this.showPlan = true;
    },
    planList() {
      this.list = true;
      this.showPlan = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  min-height: 100vh;
  background-color: #eeeeee5d;
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
  font-size: 6px;
  text-align: right;
  padding-left: 40px;
  margin-bottom: 5px;
}
.spots {
  background-color: #ffffff;
  height: 56px;
  padding: 10px;
  font-size: 12px;
}
.plan-spot {
  display: flex;
}
.spot-name {
  font-size: 2px;
}
</style>
