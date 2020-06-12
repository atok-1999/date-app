<template>
  <div v-on:input="submit">
    <div v-show="outputState === 'list'" class="output">
      <p class="content">Ⅱ 写真を追加する</p>
      <div class="photo" @click="choiceSpotPhoto">
        <div v-show="plus" class="plus">+</div>
        <div v-show="photoChoice" class="choice-photos">
          <img
            :src="spotPhoto"
            height="100"
            width="100"
            @click="detail(index)"
          />
        </div>
      </div>
      <p class="content">Ⅲ 時間を入力</p>
      <div class="time">
        <v-col class="d-flex" cols="4" md="2">
          <v-select
            :items="items"
            label="AM/PM"
            dense
            v-model="items1"
          ></v-select>
        </v-col>
        <v-col class="d-flex" cols="4" md="2">
          <v-select
            :items="hours"
            label="hours"
            dense
            v-model="hours1"
          ></v-select>
        </v-col>
        <p class="middle">:</p>
        <v-col class="d-flex" cols="4" md="2">
          <v-select
            :items="minutes"
            label="minutes"
            dense
            v-model="minutes1"
          ></v-select>
        </v-col>
      </div>
      <p class="content">Ⅳ プランを入力</p>
      <v-col cols="12" sm="6">
        <v-textarea
          label="Plan"
          auto-grow
          outlined
          rows="2"
          row-height="15"
          v-model="inputPlan1"
        ></v-textarea>
      </v-col>
      <div>
        <p class="choiceSpots">
          <v-icon>mdi-bookmark-multiple-outline</v-icon>Favorite Spots
        </p>
        <div class="ok" @click="setPhoto">完了</div>
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
              <v-checkbox
                v-model="choicePhotos"
                v-show="button"
                :value="photoFav[index].photoURl"
              ></v-checkbox>
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
      <img :src="detailPhoto" width="300" />
      <div class="return">
        <i class="fas fa-undo-alt"></i>
        <span>画像一覧に戻る</span>
      </div>
      <div class="shop-container">
        <div class="shop-name">{{ detailName }}</div>
        <div class="detailBusinessStatus">{{ detailBusinessStatus }}</div>
      </div>
      <div class="detailAddress">{{ detailAddress }}</div>
      <div class="shokurepo-container">
        <div class="syokurepo">みんなの口コミ</div>
      </div>
      <div v-for="(review, index) in detailReviews" :key="index">
        <div class="text-container">
          <div class="name-container">
            <div class="name">{{ review.author_name }}</div>
            <div class="rate">評価：{{ review.rating }} / 5</div>
          </div>
          <div class="text">{{ review.text }}</div>
        </div>
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
  data: function() {
    return {
      items: ["AM", "PM"],
      hours: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
      minutes: ["00", "10", "20", "30", "40", "50"],
      inputPlan1: "",
      items1: "",
      hours1: "",
      minutes1: "",
      outputState: "list",
      detailName: "",
      detailPhoto: "",
      detailRating: "",
      detailBusinessStatus: "",
      detailAddress: "",
      detailReviews: [],
      detailUrl: "",
      button: false,
      spotPhoto: null,
      choicePhotos: [],
      plus: true,
      photoChoice: false
    };
  },
  methods: {
    submit: function() {
      this.$emit("update", {
        inputPlan1: this.inputPlan1,
        items1: this.items1,
        hours1: this.hours1,
        minutes1: this.minutes1,
        spotPhoto: this.spotPhoto
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
    },
    choiceSpotPhoto() {
      this.button = true;
    },
    setPhoto(index) {
      this.plus = false;
      this.photoChoice = true;
      this.spotPhoto = this.choicePhotos[0];
      this.choicePhotos.splice(index, 1);
      // this.button = false;
    }
  },
  props: {
    photoFav: Array,
    isNextPage: Boolean
  },
  watch: {
    isNextPage() {
      if (this.isNextPage === true) {
        this.inputPlan1 = "";
        this.items1 = "";
        this.hours1 = "";
        this.minutes1 = "";
        this.spotPhoto = null;

        this.$emit("nextCleard");
      }
    }
  }
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
.plus {
  padding-top: 45px;
}
.choice-photos {
  padding-top: 8px;
}
.return {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 15px;
  font-size: 10px;
}

.fa-undo-alt {
  font-size: 10px;
  padding-top: 3px;
  margin-right: 5px;
}

.shop-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 65px 0 0 15px;
}

.shop-name {
  border: 1px solid black;
}

.detailBusinessStatus {
  margin-left: 30px;
  color: #ad8ea1;
  font-size: 12px;
}

.detailAddress {
  width: 260px;
  height: 38px;
  margin-left: 15px;
  margin-top: 15px;
  font-size: 12px;
}

.syokurepo {
  width: 160px;
  height: 24px;
  border-radius: 50px;
  background-color: #777777;
  color: white;
  font-size: 11px;
  line-height: 24px;
  margin-top: 70px;
  margin-left: 15px;
}

.name-container {
  width: 100px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 13px;
}

.text-container {
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  margin-left: 15px;
}

.text {
  font-size: 11px;
  width: 260px;
}
</style>
