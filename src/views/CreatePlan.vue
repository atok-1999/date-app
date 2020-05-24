<template>
  <div>
    <div class="plan-map">
      <Map></Map>
    </div>
  </div>
</template>

<script>
import Map from "@/components/CreatePlan/Map.vue";

export default {
  components: {
    Map
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
</style>
