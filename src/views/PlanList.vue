<template>
  <div class="content">
    <div class="new-plans mb-5">New Plans</div>
    <span class="new ml-5">New !</span>
    <v-row class="mx-2" v-for="(plan, index) in plans" :key="index">
      <v-col cols="5">
        <img :src="plan.spots[0].spotPhoto" width="130" height="100" />
      </v-col>
      <v-col cols="7">
        <div>{{ plan.title }}</div>
        <div>¥: {{ plan.priceFrom }}-{{ plan.priceTo }}</div>
        <div>Spots: スポットの名前1, 2...</div>
      </v-col>
      <v-divider class="mx-4" style="display: inline;"></v-divider>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    plans() {
      return this.$store.getters.sortedPlans;
    }
  },
  mounted() {
    this.$store.dispatch("loadPlans");
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
</style>
