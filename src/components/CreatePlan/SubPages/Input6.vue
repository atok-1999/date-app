<template>
  <div v-on:input="submit">
    <div v-show="outputState === 'list'" class="output">
      <p class="content">Ⅰ 写真を追加する</p>
      <div class="photo">+</div>
      <p class="content">Ⅱ 時間を入力</p>
      <div class="time">
        <v-col class="d-flex" cols="4" md="2">
          <v-select
            :items="items"
            label="AM/PM"
            dense
            v-model="items6"
          ></v-select>
        </v-col>
        <v-col class="d-flex" cols="4" md="2">
          <v-select
            :items="hours"
            label="hours"
            dense
            v-model="hours6"
          ></v-select>
        </v-col>
        <p class="middle">:</p>
        <v-col class="d-flex" cols="4" md="2">
          <v-select
            :items="minutes"
            label="minutes"
            dense
            v-model="minutes6"
          ></v-select>
        </v-col>
      </div>
      <p class="content">Ⅲ プランを入力</p>
      <v-col cols="12" sm="6">
        <v-textarea
          label="Plan"
          auto-grow
          outlined
          rows="2"
          row-height="15"
          v-model="inputPlan6"
        ></v-textarea>
      </v-col>
      <div>
        <p class="choiceSpots">
          <v-icon>mdi-bookmark-multiple-outline</v-icon>Favorite Spots
        </p>
        <p class="ok">完了</p>
        <div class="spots">
          <div class="pho" v-for="(photo, index) in photoFav" :key="index">
            <div class="photofav">
              <img
                @click="detail(index)"
                class="photos"
                height="85"
                width="85"
                :src="photo.photoURl"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="choiceSpots">
          <v-icon>mdi-bookmark-multiple-outline</v-icon>recommended Spots
        </p>
        <div class="spots"></div>
      </div>
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
      <v-btn @click="showList">プラン作成に戻る</v-btn>
    </div>
  </div>
</template>

<script
  type="text/javascript"
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDng5k79sZYfz2USU5DN65uTfopAJVxwj4&libraries=places"
></script>

<script>
export default {
  data: function() {
    return {
      items: ["AM", "PM"],
      hours: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
      minutes: ["00", "10", "20", "30", "40", "50"],
      inputTitle6: "",
      inputPlan6: "",
      items6: "",
      hours6: "",
      minutes6: "",
      outputState: "list",
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
    submit: function() {
      this.$emit("update", {
        inputTitle6: this.inputTitle6,
        inputPlan6: this.inputPlan6,
        items6: this.items6,
        hours6: this.hours6,
        minutes6: this.minutes6
      });
    },
    showList() {
      this.outputState = "list";
    },
    detail(index) {
      this.outputState = "detail";

      let vm = this;
      const service = new google.maps.places.PlacesService(map);
      service.getDetails(
        {
          placeId: vm.photoFav[index].place_id,
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
    }
  },
  props: ["photoFav"]
};
</script>

<style scoped>
.content {
  background-color: #d9b2ca;
  padding-top: 3px;
  padding-left: 10px;
  text-align: left;
  margin: 25px 0 10px 0;
  height: 21px;
  width: 124px;
  font-size: 9px;
  color: #ffffff;
}
.ok {
  width: 43px;
  height: 17px;
  background-color: #656565;
  border-radius: 5px;
  color: #ffffff;
  font-size: 10px;
  text-align: center;
  padding-top: 1px;
  margin-left: 82%;
  margin-right: 0;
  margin-bottom: 9px;
}
.choiceSpots {
  margin-bottom: 9px;
  color: #3b3b3b;
  margin-top: 41px;
}
.photo {
  width: 116px;
  height: 116px;
  text-align: center;
  padding-top: 45px;
  color: #707070;
  border: 0.8px solid #707070;
}
.spots {
  border: 0.3px solid #707070;
  width: 300px;
  height: 220px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 5px;
  padding-top: 5px;
}
.time {
  display: flex;
  padding-top: 0;
}
.middle {
  margin-top: 20px;
}
.photos {
  margin: 3px 5px 0 5px;
}
</style>
