<template>
  <div>
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
      <v-btn class="search-btn" depressed @click="search">検索</v-btn>
    </div>
    <div v-show="outputState === 'list'" class="output">
      <v-row>
        <v-col
          class="pa-0"
          v-for="(output, index) in outputs"
          :key="index"
          cols="4"
        >
          <div class="photo-container">
            <img
              @click="showDetail(index)"
              class="photo"
              height="105"
              width="123"
              :src="output.photos[0].getUrl()"
            />
            <v-btn
              @click="sendToFavSpots(index)"
              class="check-btn"
              fab
              dark
              x-small
              :color="
                favSpots.some(spot => spot.place_id === outputs[index].place_id)
                  ? 'pink'
                  : '#F5F5F5'
              "
            >
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
    <div v-show="outputState === 'detail'" class="output">
      <img :src="detailPhoto" width="340" />
      <div>{{ detailName }}</div>
      <div>{{ detailRating }}</div>
      <div>{{ detailBusinessStatus }}</div>
      <div>{{ detailAddress }}</div>
      <div v-for="(review, index) in detailReviews" :key="index">
        {{ review.author_name }}
        {{ review.rating }}
        {{ review.text }}
        <br />
      </div>
      <div>
        <a :href="detailUrl"></a>
      </div>
      <v-btn @click="showList">検索結果に戻る</v-btn>
    </div>
  </div>
</template>

<script
  type="text/javascript"
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDng5k79sZYfz2USU5DN65uTfopAJVxwj4&libraries=places"
></script>

<script>
export default {
  data() {
    return {
      outputState: "list",
      inputText: "",
      outputs: [],
      favSpots: [],
      detailName: "",
      detailPhoto: "",
      detailRating: "",
      detailBusinessStatus: "",
      detailAddress: "",
      detailReviews: [],
      detailUrl: ""
    };
  },
  methods: {
    search() {
      this.outputs = [];
      this.outputState = "list";
      let vm = this;

      const service = new google.maps.places.PlacesService(
        document.createElement("div")
      );
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
              vm.outputs.push(result);
            });
          }
        }
      );
      this.inputText = "";
    },
    showList() {
      this.outputState = "list";
    },
    showDetail(index) {
      this.outputState = "detail";

      let vm = this;
      const service = new google.maps.places.PlacesService(
        document.createElement("div")
      );
      service.getDetails(
        {
          placeId: vm.outputs[index].place_id,
          fields: [
            "name",
            "photos",
            "rating",
            "business_status",
            "formatted_address",
            "reviews",
            "url"
          ]
        },
        function(result, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            vm.detailName = result.name;
            vm.detailPhoto = result.photos[0].getUrl();
            vm.detailRating = result.rating;
            vm.detailBusinessStatus = result.business_status;
            vm.detailAddress = result.formatted_address;
            vm.detailReviews = result.reviews;
            vm.detailUrl = result.url;

            vm.businessStatusTranslate();
          }
        }
      );
    },
    businessStatusTranslate() {
      if (this.detailBusinessStatus === "OPERATIONAL") {
        this.detailBusinessStatus = "営業中";
      } else if (this.detailBusinessStatus === "CLOSED_TEMPORARILY") {
        this.detailBusinessStatus = "一時休業中";
      } else if (this.detailBusinessStatus === "CLOSED_PERMANENTLY") {
        this.detailBusinessStatus = "閉店";
      }
    },
    sendToFavSpots(index) {
      if (
        !this.favSpots.some(
          spot => spot.place_id === this.outputs[index].place_id
        )
      ) {
        this.favSpots.push({
          place_id: this.outputs[index].place_id,
          photoURl: this.outputs[index].photos[0].getUrl()
        });
      } else {
        this.favSpots.splice(
          this.favSpots.findIndex(
            spot => spot.place_id === this.outputs[index].place_id
          ),
          1
        );
      }
      this.$emit("addFavSpots", this.favSpots);
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

  & .search-btn {
    margin-left: 20px;
  }
}

.photo-container {
  position: relative;
}

.check-btn {
  position: absolute;
  top: 3%;
  right: 2%;
}

.output {
  max-width: 100%;
  margin: 0 5px;
  text-align: center;
}
</style>
