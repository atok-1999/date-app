<template>
  <div>
    <div v-show="outputState === 'list'" class="output">
      <p class="route-map">Route Map</p>
      <div class="plan-map">
        <Map></Map>
      </div>
      <div class="create-plan" v-on:click="open">デートプランの作成</div>
      <div v-show="example">
        <div class="plan-title">Title</div>
        <div class="plan">
          <div class="add-plan"></div>
          <div class="time-schedule">
            <div class="time">
              <p>AM</p>
              <p>PM</p>
            </div>
            <div class="content">Dating Plan</div>
          </div>
        </div>
      </div>
      <div v-show="good">
        <div class="planTitle">
          <p class="planContent">Ⅰ タイトルを入力する</p>
          <v-col cols="8" sm="6">
            <v-text-field
              class="text-field"
              label="Title"
              outlined
              dense
              v-model="inputTitle1"
            ></v-text-field>
          </v-col>
        </div>
        <div class="plans">
          <div v-for="(spot, index) in spots" :key="index">
            <div class="plan-content">
              <div class="add-plan">
                <div class="photo-spot">
                  <img :src="spot.spotPhoto" height="48" width="48" />
                </div>
              </div>
              <div class="time-schedule">
                <div class="times">
                  <p class="am-pm">{{ spot.items1 }}</p>
                </div>
                <div class="border"></div>
                <div class="time-d">
                  <div>{{ spot.hours1 }}:{{ spot.minutes1 }}</div>
                </div>
                <div class="contents">
                  <div>
                    <i class="fas fa-map-marker-alt"> {{ spot.spotName }}</i>
                  </div>
                  <div>{{ spot.inputPlan1 }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="popUp" v-show="showContent">
        <div id="create">
          <div v-on:click="close" class="close">close</div>
          <SubPages
            :fav-photo="favSpotsInfo"
            :spots.sync="spots"
            :create="create"
          ></SubPages>
        </div>
      </div>
      <div class="choice-spots">
        <div><v-icon>mdi-bookmark-multiple-outline</v-icon>Favorite Spots</div>
        <div class="fav-spots">
          <div
            class="pho"
            v-for="(favSpot, index) in favSpotsInfo"
            :key="index"
          >
            <div>
              <!-- favSpotはスポットごとのplace_idです -->
              <div class="photofav">
                <img
                  @click="detail(index)"
                  class="photo"
                  height="100"
                  width="100"
                  :src="favSpot.photoURl"
                />
              </div>
              <!-- <div>
                <p class="choice-spots">
                  <v-icon>mdi-bookmark-multiple-outline</v-icon>recommended
                  Spots
                </p>
                <div class="spots"></div>
              </div>-->
            </div>
          </div>
        </div>
      </div>
      <div class="price" v-show="good">
        <div class="price-name">合計の予算を入力する</div>
        <v-col class="d-flex" cols="8" md="2">
          <v-select
            :items="price"
            dense
            v-model="price1"
            class="select"
          ></v-select>
          <span class="nyoro">〜</span>
          <v-select
            :items="price"
            dense
            v-model="price2"
            class="select"
          ></v-select>
        </v-col>
      </div>
      <div class="submit" v-show="good">
        <span class="link" @click="post">投稿</span>
      </div>
    </div>
    <div v-show="outputState === 'detail'" class="output">
      <img :src="detailPhoto" width="340" />
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
import Map from "@/components/CreatePlan/Map.vue";
import SubPages from "@/components/CreatePlan/SubPages/SubPages.vue";

export default {
  components: {
    Map,
    SubPages
  },
  data() {
    return {
      spots: [],
      plans: [],
      pageState: "create",
      showContent: false,
      outputState: "list",
      example: true,
      good: false,
      detailName: "",
      detailPhoto: "",
      detailRating: "",
      detailBusinessStatus: "",
      detailAddress: "",
      detailReviews: [],
      detailUrl: "",
      inputTitle1: "",
      price1: "",
      price2: "",
      price: [
        "0",
        "1000",
        "2000",
        "3000",
        "4000",
        "5000",
        "6000",
        "7000",
        "8000",
        "9000",
        "10000",
        "15000",
        "20000",
        "20000以上"
      ]
    };
  },
  methods: {
    create() {
      this.pageState = "create";
    },
    search() {
      this.pageState = "search";
    },
    open: function() {
      this.showContent = true;
    },
    close: function() {
      this.showContent = false;
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
          placeId: vm.favSpotsInfo[index].place_id,
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
    create: function() {
      this.showContent = false;
      this.example = false;
      this.good = true;
    },
    post: function() {
      this.plans.push();
      console.log(this.plans);
      const plan = {
        spots: this.spots,
        title: this.inputTitle1,
        priceFrom: this.price1,
        priceTo: this.price2
      };
      this.$store.dispatch("addPlan", plan).then(plan => {
        this.$router.push({
          name: "ShowPlan",
          params: {
            planId: plan.id
          }
        });
      });
    }
  },
  props: ["favSpotsInfo"]
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
.create-plan {
  color: #ffffff;
  font-size: 12px;
  background-color: #d9b2ca;
  width: 220px;
  height: 44px;
  border-radius: 50px;
  padding-left: 56px;
  padding-top: 14px;
  margin-left: 78px;
  margin-top: 45px;
  margin-bottom: 62px;
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
}
.time {
  font-size: 13px;
  margin-top: 20px;
  padding-right: 10px;
  padding-top: 40px;
  height: 150px;
  border-right: 0.5px solid #696969;
  color: #696969;
}
.time-schedule {
  display: flex;
}
.content {
  font-size: 13px;
  margin-left: 70px;
  margin-top: 75px;
  color: #696969;
}
#popUp {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 2400px; */
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
}
#create {
  z-index: 2;
  width: 90%;
  padding: 1em;
  background: #fff;
  border-radius: 5px;
}
.close {
  margin-left: 85%;
}
.choice-spots {
  margin-bottom: 9px;
  color: #3b3b3b;
  margin-top: 50px;
  margin-left: 15px;
}
.spots {
  border: 0.3px solid #707070;
  width: 330px;
  height: 220px;
  margin-bottom: 40px;
  margin-left: 15px;
}
.fav-spots {
  border: 0.3px solid #707070;
  width: 340px;
  height: 220px;
  margin: 9px 35px 40px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 5px;
  padding-top: 5px;
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
.time-d {
  font-size: 13px;
  margin-top: 70px;
  margin-left: 20px;
  color: #696969;
  display: flex;
  flex-direction: column;
}
.contents {
  font-size: 13px;
  margin-left: 40px;
  margin-top: 60px;
  color: #696969;
  display: flex;
  flex-direction: column;
}
.pm {
  margin-top: 66px;
}
.am {
  margin-top: 50px;
}
.photofav {
  height: 100px;
  width: 100px;
  margin: 3px 5px 0 5px;
}

.pho {
  height: 100px;
}
.nyoro {
  margin: 10px;
}
.select {
  margin: 0;
}
.price {
  margin-left: 33px;
}
.price-name {
  font-size: 10px;
  background-color: #d9b2ca;
  height: 23px;
  width: 149px;
  text-align: center;
  padding-top: 5px;
  color: #ffffff;
  margin-bottom: 10px;
  margin-left: 15px;
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
.submit {
  width: 185px;
  height: 39px;
  background-color: #d9b2ca;
  border-radius: 50px;
  margin: 126px 95px 91px 95px;
  text-align: center;
  padding-top: 7px;
}
.link {
  text-decoration: none;
  color: #ffffff;
  font-size: 15px;
}
.planContent {
  background-color: #d9b2ca;
  padding-top: 3px;
  padding-left: 10px;
  text-align: left;
  margin: 25px 0 10px 15px;
  height: 21px;
  width: 124px;
  font-size: 9px;
  color: #ffffff;
}
.planTitle {
  margin-left: 33px;
}
.plan-content {
  display: flex;
  margin-left: 20px;
  height: 20%;
}
.plans {
  display: flex;
  flex-direction: column;
}
</style>
