<template>
  <div v-if="dataReady">
    <div class="plan-title">{{ plan.title }}</div>
    <div class="plan">
      <div v-for="(spot, index) in plan.spots" :key="index">
        <div class="spots">
          <div class="add-plan">
            <div class="photo-spot">
              <img :src="spot.spotPhoto" height="48" width="48" />
            </div>
          </div>
          <div class="time-schedule">
            <div class="times">
              <p class="am-pm">{{ spot.items1 }}</p>
            </div>
            <div class="time-d">
              <div>{{ spot.hours1 }}:{{ spot.minutes1 }}</div>
            </div>
            <div class="contents">
              <div>{{ spot.inputPlan1 }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="date">
      <div class="date-price">このデートプランの予算</div>
      <div class="money">¥{{ plan.priceFrom }}〜{{ plan.priceTo }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plan: null,
      dataReady: false
    };
  },
  async mounted() {
    const planId = this.$route.params.planId;
    this.plan = await this.$store.dispatch("fetchPlan", planId);
    this.dataReady = true;
  }
};
</script>

<style scoped>
.pm {
  margin-top: 66px;
}
.am {
  margin-top: 50px;
}
.plan-title {
  margin-top: 49px;
  border: #707070;
  background-color: #434343;
  border-radius: 7px;
  width: 150px;
  height: 20px;
  text-align: center;
  color: #ffffff;
  font-size: 13px;
  padding-top: 2px;
  margin-left: 120px;
}
.plan {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
}
.spots {
  display: flex;
}
.add-plan {
  border: 1px solid #707070;
  width: 48px;
  height: 48px;
  text-align: center;
  margin-top: 56px;
  margin-left: 30px;
  margin-right: 31px;
  background-color: #e5e5e5;
}
.times {
  font-size: 13px;
  margin-top: 35px;
  padding-top: 20px;
  padding-right: 15px;
  height: 90%;
  color: #696969;
  border-right: 0.5px solid #696969;
  display: flex;
  flex-direction: column;
}
.am-pm {
  padding-top: 17px;
}
.time-schedule {
  display: flex;
}
.time-d {
  font-size: 13px;
  margin-left: 20px;
  margin-top: 70px;
  color: #696969;
  display: flex;
  flex-direction: column;
}
.contents {
  font-size: 13px;
  margin-left: 40px;
  margin-top: 69px;
  color: #696969;
  display: flex;
  flex-direction: column;
}
.date-price {
  font-size: 10px;
  background-color: #d9b2ca;
  height: 23px;
  width: 149px;
  text-align: center;
  padding-top: 5px;
  color: #ffffff;
  margin-bottom: 10px;
}
.date {
  margin-top: 90px;
  margin-left: 50px;
  margin-bottom: 95px;
}
.money {
  padding-left: 20px;
}
</style>
