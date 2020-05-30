<template>
  <div @input="submit">
    <p class="content">Ⅰ 写真を追加する</p>
    <div class="photo">+</div>
    <p class="content">Ⅱ 時間を入力</p>
    <div class="time">
      <v-col class="d-flex" cols="4" md="2">
        <v-select
          :items="items"
          label="AM/PM"
          dense
          v-model="items2"
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="4" md="2">
        <v-select
          :items="hours"
          label="hours"
          dense
          v-model="hours2"
        ></v-select>
      </v-col>
      <p class="middle">:</p>
      <v-col class="d-flex" cols="4" md="2">
        <v-select
          :items="minutes"
          label="minutes"
          dense
          v-model="minutes2"
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
        v-model="inputPlan2"
      ></v-textarea>
    </v-col>
    <div>
      <p class="choiceSpots">
        <v-icon>mdi-bookmark-multiple-outline</v-icon>Favorite Spots
      </p>
      <p class="ok">完了</p>
      <div class="spots"></div>
    </div>
    <div>
      <p class="choiceSpots"><v-icon>bookmarks</v-icon>recommended Spots</p>
      <div class="spots"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: ["AM", "PM"],
      hours: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
      minutes: ["00", "10", "20", "30", "40", "50"],
      inputPlan2: "",
      items2: "",
      hours2: "",
      minutes2: ""
    };
  },
  methods: {
    submit: function() {
      this.$emit("update", {
        inputPlan2: this.inputPlan2,
        items2: this.items2,
        hours2: this.hours2,
        minutes2: this.minutes2
      });
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
  padding-top: 45px;
  color: #707070;
  border: 0.8px solid #707070;
}
.spots {
  border: 0.3px solid #707070;
  width: 300px;
  height: 200px;
  margin-bottom: 40px;
}
.time {
  display: flex;
  padding-top: 0;
}
.middle {
  margin-top: 20px;
}
</style>
