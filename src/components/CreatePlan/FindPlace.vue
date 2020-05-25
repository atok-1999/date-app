<template>
  <div>
    <Map></Map>
    <div class="text-field-container">
      <v-text-field
        class="text-field"
        outlined
        rounded
        dense
        prepend-inner-icon="mdi-magnify"
        placeholder="渋谷 ランチ"
        color="#d9b2ca"
        v-model="inputText"
      ></v-text-field>
      <v-btn class="btn" depressed @click="search">検索</v-btn>
    </div>
    <div class="output">
      <v-row>
        <v-col class="pa-0" v-for="(photo, index) in photos" :key="index" cols="4">
          <img class="photo" height="105" width="121" :src="photo" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script
  type="text/javascript"
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDng5k79sZYfz2USU5DN65uTfopAJVxwj4&libraries=places"
></script>

<script>
import Map from "@/components/CreatePlan/Map.vue";

export default {
  components: {
    Map
  },
  data() {
    return {
      inputText: "",
      photos: []
    };
  },
  methods: {
    search() {
      const vm = this;
      const service = new google.maps.places.PlacesService(map);
      service.textSearch(
        {
          location: new google.maps.LatLng(35.7, 139.7),
          radius: 50,
          query: this.inputText
        },
        function(results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            results.forEach(result => {
              console.log(result);
              vm.insertPhotos(result);
            });
          }
        }
      );
      this.inputText = "";
    },
    insertPhotos(result) {
      this.photos.push(result.photos[0].getUrl());
    }
  }
};
</script>

<style lang="scss" scoped>
.text-field-container {
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  margin-bottom: 20px;

  & .text-field {
    margin-top: 20px;
  }

  & .btn {
    margin-left: 20px;
  }
}

.output {
  max-width: 100%;
}
</style>
