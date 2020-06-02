<template>
  <div>
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
      <div class="plan-title">{{ plan.inputTitle1 }}</div>
      <div class="plan">
        <div class="add-plan"></div>
        <div class="time-schedule">
          <div class="times">
            <p>{{ plan.items1 }}</p>
            <div>
              <div v-if="plan.items2 === ''"></div>
              <div v-else>
                <p class="am">{{ plan.items2 }}</p>
              </div>
            </div>
            <div>
              <div v-if="plan.items3 === ''"></div>
              <div v-else>
                <p class="am">{{ plan.items3 }}</p>
              </div>
            </div>
            <div>
              <div v-if="plan.items4 === ''"></div>
              <div v-else>
                <p class="am">{{ plan.items4 }}</p>
              </div>
            </div>
            <div>
              <div v-if="plan.items5 === ''"></div>
              <div v-else>
                <p class="am">{{ plan.items5 }}</p>
              </div>
            </div>
            <div>
              <div v-if="plan.items6 === ''"></div>
              <div v-else>
                <p class="am">{{ plan.items6 }}</p>
              </div>
            </div>
            <div>
              <div v-if="plan.items6 === ''"></div>
              <div v-else>
                <p class="am">{{ plan.items6 }}</p>
              </div>
            </div>
            <div>
              <div v-if="plan.items7 === ''"></div>
              <div v-else>
                <p class="am">{{ plan.items7 }}</p>
              </div>
            </div>
            <div>
              <div v-if="plan.items8 === ''"></div>
              <div v-else>
                <p class="am">{{ plan.items8 }}</p>
              </div>
            </div>
            <div>
              <div v-if="plan.items9 === ''"></div>
              <div v-else>
                <p class="am">{{ plan.items9 }}</p>
              </div>
            </div>
            <div>
              <div v-if="plan.items10 === ''"></div>
              <div v-else>
                <p class="am">{{ plan.items10 }}</p>
              </div>
            </div>
          </div>
          <div class="time-d">
            <div>{{ plan.hours1 }}:{{ plan.minutes1 }}</div>
            <div>
              <div v-if="plan.items2 === ''"></div>
              <div v-else>
                <div class="pm">{{ plan.hours2 }}:{{ plan.minutes2 }}</div>
              </div>
            </div>
            <div>
              <div v-if="plan.items3 === ''"></div>
              <div v-else>
                <div class="pm">{{ plan.hours3 }}:{{ plan.minutes3 }}</div>
              </div>
            </div>
            <div>
              <div v-if="plan.items4 === ''"></div>
              <div v-else>
                <div class="pm">{{ plan.hours4 }}:{{ plan.minutes4 }}</div>
              </div>
            </div>
            <div>
              <div v-if="plan.items5 === ''"></div>
              <div v-else>
                <div class="pm">{{ plan.hours5 }}:{{ plan.minutes5 }}</div>
              </div>
            </div>
            <div>
              <div v-if="plan.items6 === ''"></div>
              <div v-else>
                <div class="pm">{{ plan.hours6 }}:{{ plan.minutes6 }}</div>
              </div>
            </div>
            <div>
              <div v-if="plan.items7 === ''"></div>
              <div v-else>
                <div class="pm">{{ plan.hours7 }}:{{ plan.minutes7 }}</div>
              </div>
            </div>
            <div>
              <div v-if="plan.items8 === ''"></div>
              <div v-else>
                <div class="pm">{{ plan.hours8 }}:{{ plan.minutes8 }}</div>
              </div>
            </div>
            <div>
              <div v-if="plan.items9 === ''"></div>
              <div v-else>
                <div class="pm">{{ plan.hours9 }}:{{ plan.minutes9 }}</div>
              </div>
            </div>
            <div>
              <div v-if="plan.items10 === ''"></div>
              <div v-else>
                <div class="pm">{{ plan.hours10 }}:{{ plan.minutes10 }}</div>
              </div>
            </div>
          </div>
          <div class="contents">
            <div>{{ plan.inputPlan1 }}</div>
            <div>
              <div v-if="plan.items2 === ''"></div>
              <div v-else>
                <div class="pm">{{ plan.inputPlan2 }}</div>
              </div>
            </div>
            <div>
              <div v-if="plan.items3 === ''"></div>
              <div v-else>
                <div class="pm">{{ plan.inputPlan3 }}</div>
              </div>
            </div>
            <div>
              <div v-if="plan.items4 === ''"></div>
              <div v-else>
                <div class="pm">{{ plan.inputPlan4 }}</div>
              </div>
            </div>
            <div>
              <div v-if="plan.items5 === ''"></div>
              <div v-else>
                <div class="pm">{{ plan.inputPlan5 }}</div>
              </div>
            </div>
            <div>
              <div v-if="plan.items6 === ''"></div>
              <div v-else>
                <div class="pm">{{ plan.inputPlan6 }}</div>
              </div>
            </div>
            <div>
              <div v-if="plan.items7 === ''"></div>
              <div v-else>
                <div class="pm">{{ plan.inputPlan7 }}</div>
              </div>
            </div>
            <div>
              <div v-if="plan.items8 === ''"></div>
              <div v-else>
                <div class="pm">{{ plan.inputPlan8 }}</div>
              </div>
            </div>
            <div>
              <div v-if="plan.items9 === ''"></div>
              <div v-else>
                <div class="pm">{{ plan.inputPlan9 }}</div>
              </div>
            </div>
            <div>
              <div v-if="plan.items10 === ''"></div>
              <div v-else>
                <div class="pm">{{ plan.inputPlan10 }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="popUp" v-show="showContent">
      <div id="create">
        <div v-on:click="close" class="close">close</div>
        <SubPages @complete="create"></SubPages>
      </div>
    </div>
    <div class="choice-spots">
      <div>
        <v-icon>mdi-bookmark-multiple-outline</v-icon>Favorite Spots
      </div>
      <div class="fav-spots">
        <v-col>
          <v-row v-for="(favSpot, index) in favSpotsInfo" :key="index">
            <!-- favSpotはスポットごとのplace_idです -->
            <div @click="detail(index)">{{ favSpot }}</div>

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
          </v-row>
        </v-col>
      </div>
    </div>

    <div>
      <p class="choice-spots">
        <v-icon>mdi-bookmark</v-icon>recommended Spots
      </p>
      <div class="spots"></div>
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
      pageState: "create",
      showContent: false,
      example: true,
      good: false,
      detailName: "",
      detailPhoto: "",
      detailRating: "",
      detailBusinessStatus: "",
      detailAddress: "",
      detailReviews: [],
      detailUrl: "",
      plan: ""
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
    detail(index) {
      let vm = this;
      const service = new google.maps.places.PlacesService(map);
      service.getDetails(
        {
          placeId: vm.favSpotsInfo,
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
            console.log(result.name);
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
    create: function(plan) {
      this.plan = plan;
      this.showContent = false;
      this.example = false;
      this.good = true;
    }
  },
  props: {
    favSpotsInfo: {
      type: Array
    }
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
.add-plan {
  border: 1px solid #707070;
  width: 48px;
  height: 48px;
  text-align: center;
  padding-top: 10px;
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
  width: 97px;
  height: 20px;
  text-align: center;
  color: #ffffff;
  font-size: 13px;
  padding-top: 2px;
  margin-left: 185px;
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
  color: #696969;
  border-right: 0.5px solid #696969;
}
.time-schedule {
  display: flex;
}
.content {
  font-size: 13px;
  margin-left: 70px;
  margin-top: 55px;
  color: #696969;
}
#popUp {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1600px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-left: 35px;
}
.spots {
  border: 0.3px solid #707070;
  width: 300px;
  height: 200px;
  margin-bottom: 40px;
  margin-left: 35px;
}
.fav-spots {
  border: 0.3px solid #707070;
  width: 300px;
  height: 200px;
  margin: 9px 35px 40px 0;
}
.times {
  font-size: 13px;
  margin-top: 50px;
  padding-top: 20px;
  padding-right: 15px;
  height: 90%;
  color: #696969;
  border-right: 0.5px solid #696969;
  display: flex;
  flex-direction: column;
}
.time-d {
  font-size: 13px;
  margin-left: 20px;
  margin-top: 70px;
  color: #696969;
  display: flex;
  flex-direction: column;
}
.contents {
  font-size: 13px;
  margin-left: 40px;
  margin-top: 69px;
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
</style>
