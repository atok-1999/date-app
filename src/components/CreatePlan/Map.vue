<template>
  <div>
    <div id="map">
      <GmapMap
        :center="{ lat: 34.7019399, lng: 135.51002519999997 }"
        :zoom="13"
        map-type-id="roadmap"
        style="width: 304px; height: 180px; margin-left: 22px; margin-top:19px;"
      >
      </GmapMap>
    </div>
  </div>
</template>

<script>
export default {
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
