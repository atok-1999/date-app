<template>
  <div>
    <Header></Header>
    <p class="route-map">Route Map</p>
    <div class="plan-map">
      <Map></Map>
    </div>
    <DetailPlan :detail-plan="$route.params"></DetailPlan>
  </div>
</template>

<script>
import Map from "@/components/CreatePlan/Map.vue";
import Header from "@/components/Header.vue";
import DetailPlan from "@/components/DetailPlan.vue";
export default {
  components: {
    DetailPlan,
    Map,
    Header
  }
};
</script>

<style scoped>
.plan-map {
  width: 348px;
  height: 218px;
  border: 0.5px solid #b7b7b7;
  border-radius: 5px;
  margin-left: 13px;
}
.route-map {
  font-size: 15px;
  width: 100px;
  height: 23px;
  margin-left: 24px;
  margin-bottom: 10px;
  margin-top: 43px;
  color: #222222;
  font-family: "Arial", sans-serif;
}
</style>
