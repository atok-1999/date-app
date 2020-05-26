<template>
  <div>
    <span>編集画面だよ</span>
    <Map></Map>
    <div class="favorite-spots">
      <div>
        <v-icon>mdi-bookmark-multiple-outline</v-icon>Favorite Spots
      </div>
      <v-col>
        <v-row v-for="(favSpot, index) in favSpotsInfo" :key="index">
          <!-- favSpotはスポットごとのplace_idです -->
          <div>{{ favSpot }}</div>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<script>
import Map from "@/components/CreatePlan/Map.vue";

export default {
  components: {
    Map
  },
  props: ["favSpotsInfo"]
};
</script>

<style>
.plan-map {
  width: 348px;
  height: 218px;
  border: 0.5px solid #b7b7b7;
  border-radius: 5px;
  margin-left: 13px;
}
</style>
