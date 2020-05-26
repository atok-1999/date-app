<template>
  <div>
    <div id="map">
      <GmapMap
        :center="{ lat: 35.7, lng: 139.7 }"
        :zoom="13"
        map-type-id="roadmap"
        style="width: 304px; height: 180px; margin-left: 22px; margin-top:19px;"
      ></GmapMap>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
#map {
  height: 100%;
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
