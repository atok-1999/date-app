<template>
  <div v-if="dataReady">
    <div v-show="outputState === 'list'" class="output">
      <p class="route-map">Route Map</p>
      <div class="plan-map">
        <Map></Map>
      </div>
      <div class="plan-title">{{ plan.title }}</div>
      <div class="plan">
        <div v-for="(spot, index) in plan.spots" :key="index">
          <div class="spots">
            <div class="add-plan">
              <div class="photo-spot">
                <img
                  :src="spot.spotPhoto"
                  height="48"
                  width="48"
                  @click="detailSpot(index)"
                />
              </div>
            </div>
            <div class="time-schedule">
              <div class="times">
                <p class="am-pm">{{ spot.items1 }}</p>
              </div>
              <div class="time-d">
                <div class="time-minutes">
                  {{ spot.hours1 }}:{{ spot.minutes1 }}
                </div>
              </div>
              <div class="contents">
                <div>{{ spot.spotName }}</div>
                <div>{{ spot.inputPlan1 }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="date">
        <div class="date-price">このデートプランの予算</div>
        <div class="money">¥{{ plan.priceFrom }}〜{{ plan.priceTo }}</div>
      </div>
    </div>
    <div v-show="outputState === 'detail'" class="output">
      <img :src="detailPhoto" width="380" />
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
      <div class="back">
        <v-btn @click="showList">検索結果に戻る</v-btn>
      </div>
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
  data() {
    return {
      plan: null,
      dataReady: false,
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
  components: {
    Map
  },
  async mounted() {
    const planId = this.$route.params.planId;
    this.plan = await this.$store.dispatch("fetchPlan", planId);
    this.dataReady = true;
  },
  methods: {
    detailSpot(index) {
      this.outputState = "detail";

      let vm = this;
      const service = new google.maps.places.PlacesService(map);
      service.getDetails(
        {
          placeId: vm.plan.spots[index].placeId,
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
    showList() {
      this.outputState = "list";
    }
  }
};
</script>

<style scoped>
.pm {
  margin-top: 66px;
}
.am {
  margin-top: 50px;
}
.plan-title {
  margin-top: 49px;
  border: #707070;
  background-color: #434343;
  border-radius: 7px;
  width: 150px;
  height: 20px;
  text-align: center;
  color: #ffffff;
  font-size: 13px;
  padding-top: 2px;
  margin-left: 120px;
}
.plan {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
}
.spots {
  display: flex;
}
.add-plan {
  border: 1px solid #707070;
  width: 48px;
  height: 48px;
  text-align: center;
  margin-top: 56px;
  margin-left: 30px;
  margin-right: 31px;
  background-color: #e5e5e5;
}
.times {
  font-size: 13px;
  margin-top: 35px;
  padding-top: 20px;
  padding-right: 15px;
  height: 90%;
  color: #696969;
  border-right: 0.5px solid #696969;
  display: flex;
  flex-direction: column;
}
.am-pm {
  padding-top: 17px;
}
.time-schedule {
  display: flex;
}
.time-d {
  font-size: 13px;
  margin-left: 20px;
  margin-top: 70px;
  color: #696969;
  display: flex;
  flex-direction: column;
  padding-top: 3px;
}
.contents {
  font-size: 13px;
  margin-left: 40px;
  margin-top: 60px;
  color: #696969;
  display: flex;
  flex-direction: column;
}
.date-price {
  font-size: 10px;
  background-color: #d9b2ca;
  height: 23px;
  width: 149px;
  text-align: center;
  padding-top: 5px;
  color: #ffffff;
  margin-bottom: 10px;
}
.date {
  margin-top: 90px;
  margin-left: 50px;
  margin-bottom: 95px;
}
.money {
  padding-left: 20px;
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
  text-align: center;
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
.back {
  margin-left: 120px;
  margin-bottom: 30px;
  margin-top: 50px;
}
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
