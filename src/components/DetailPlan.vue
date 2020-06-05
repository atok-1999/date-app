<template>
  <div>
    <div class="plan-title">{{ detailPlan.value.inputTitle1 }}</div>
    <div class="plan">
      <div class="add-plan">
        <div class="photo-spot">
          <img :src="detailPlan.value.spotPhoto" height="48" width="48" />
        </div>
      </div>
      <div class="time-schedule">
        <div class="times">
          <p>{{ detailPlan.value.items1 }}</p>
          <div>
            <div v-if="detailPlan.value.items2 === ''"></div>
            <div v-else>
              <p class="am">{{ detailPlan.value.items2 }}</p>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items3 === ''"></div>
            <div v-else>
              <p class="am">{{ detailPlan.value.items3 }}</p>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items4 === ''"></div>
            <div v-else>
              <p class="am">{{ detailPlan.value.items4 }}</p>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items5 === ''"></div>
            <div v-else>
              <p class="am">{{ detailPlan.value.items5 }}</p>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items6 === ''"></div>
            <div v-else>
              <p class="am">{{ detailPlan.value.items6 }}</p>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items7 === ''"></div>
            <div v-else>
              <p class="am">{{ detailPlan.value.items7 }}</p>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items8 === ''"></div>
            <div v-else>
              <p class="am">{{ detailPlan.value.items8 }}</p>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items9 === ''"></div>
            <div v-else>
              <p class="am">{{ detailPlan.value.items9 }}</p>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items10 === ''"></div>
            <div v-else>
              <p class="am">{{ detailPlan.value.items10 }}</p>
            </div>
          </div>
        </div>
        <div class="time-d">
          <div>
            {{ detailPlan.value.hours1 }}:{{ detailPlan.value.minutes1 }}
          </div>
          <div>
            <div v-if="detailPlan.value.items2 === ''"></div>
            <div v-else>
              <div class="pm">
                {{ detailPlan.value.hours2 }}:{{ detailPlan.value.minutes2 }}
              </div>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items3 === ''"></div>
            <div v-else>
              <div class="pm">
                {{ detailPlan.value.hours3 }}:{{ detailPlan.value.minutes3 }}
              </div>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items4 === ''"></div>
            <div v-else>
              <div class="pm">
                {{ detailPlan.value.hours4 }}:{{ detailPlan.value.minutes4 }}
              </div>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items5 === ''"></div>
            <div v-else>
              <div class="pm">
                {{ detailPlan.value.hours5 }}:{{ detailPlan.value.minutes5 }}
              </div>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items6 === ''"></div>
            <div v-else>
              <div class="pm">
                {{ detailPlan.value.hours6 }}:{{ detailPlan.value.minutes6 }}
              </div>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items7 === ''"></div>
            <div v-else>
              <div class="pm">
                {{ detailPlan.value.hours7 }}:{{ detailPlan.value.minutes7 }}
              </div>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items8 === ''"></div>
            <div v-else>
              <div class="pm">
                {{ detailPlan.value.hours8 }}:{{ detailPlan.value.minutes8 }}
              </div>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items9 === ''"></div>
            <div v-else>
              <div class="pm">
                {{ detailPlan.value.hours9 }}:{{ detailPlan.value.minutes9 }}
              </div>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items10 === ''"></div>
            <div v-else>
              <div class="pm">
                {{ detailPlan.value.hours10 }}:{{ detailPlan.value.minutes10 }}
              </div>
            </div>
          </div>
        </div>
        <div class="contents">
          <div>{{ detailPlan.value.inputPlan1 }}</div>
          <div>
            <div v-if="detailPlan.value.items2 === ''"></div>
            <div v-else>
              <div class="pm">{{ detailPlan.value.inputPlan2 }}</div>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items3 === ''"></div>
            <div v-else>
              <div class="pm">{{ detailPlan.value.inputPlan3 }}</div>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items4 === ''"></div>
            <div v-else>
              <div class="pm">{{ detailPlan.value.inputPlan4 }}</div>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items5 === ''"></div>
            <div v-else>
              <div class="pm">{{ detailPlan.value.inputPlan5 }}</div>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items6 === ''"></div>
            <div v-else>
              <div class="pm">{{ detailPlan.value.inputPlan6 }}</div>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items7 === ''"></div>
            <div v-else>
              <div class="pm">{{ detailPlan.value.inputPlan7 }}</div>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items8 === ''"></div>
            <div v-else>
              <div class="pm">{{ detailPlan.value.inputPlan8 }}</div>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items9 === ''"></div>
            <div v-else>
              <div class="pm">{{ detailPlan.value.inputPlan9 }}</div>
            </div>
          </div>
          <div>
            <div v-if="detailPlan.value.items10 === ''"></div>
            <div v-else>
              <div class="pm">{{ detailPlan.value.inputPlan10 }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="date">
      <div class="date-price">このデートプランの予算</div>
      <div class="money">¥{{ detailPlan.price1 }}〜{{ detailPlan.price2 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["detailPlan"]
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
  margin-left: 165px;
}
.plan {
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
  margin-top: 50px;
  padding-top: 20px;
  padding-right: 15px;
  height: 90%;
  color: #696969;
  border-right: 0.5px solid #696969;
  display: flex;
  flex-direction: column;
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
}
.contents {
  font-size: 13px;
  margin-left: 40px;
  margin-top: 69px;
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
  margin-left: 40px;
}
.money {
  padding-left: 20px;
}
</style>
