<template>
  <div class="content">
    <Header></Header>
    <!-- 編集・スポット画面切替バー -->
    <div class="switch-page">
      <div @click="showEdit" class="switch" :class="pageState === 'edit' ? 'darken-color' : ''">編集</div>
      <div
        @click="showSearch"
        class="switch"
        :class="pageState === 'search' ? 'darken-color' : ''"
      >スポット検索</div>
    </div>
    <div :class="pageState === 'edit' ? 'underline-left' : 'underline-right'"></div>
    <!-- 編集画面＆スポット検索 -->
    <Edit v-show="pageState === 'edit'" :favSpotsInfo="favSpots"></Edit>
    <FindPlace v-show="pageState === 'search'" @addFavSpots="addFavSpots"></FindPlace>
  </div>
</template>

<script>
import Edit from "@/components/CreatePlan/Edit.vue";
import FindPlace from "@/components/CreatePlan/FindPlace.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    FindPlace,
    Edit,
    Header
  },
  data() {
    return {
      pageState: "edit",
      favSpots: []
    };
  },
  methods: {
    showEdit() {
      this.pageState = "edit";
    },
    showSearch() {
      this.pageState = "search";
    },
    addFavSpots(spots) {
      this.favSpots = spots;
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  max-width: 100%;
}

.switch-page {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #efeded;
  padding: 6px 0;
  color: #a8a8a8;
  font-size: 14px;
}

.switch {
  display: flex;
  justify-content: center;
  width: 100%;
}

.darken-color {
  color: #000;
}

.underline-left {
  height: 3px;
  width: 50%;
  background-color: #d9b2ca;
}

.underline-right {
  height: 3px;
  width: 50%;
  transform: translateX(100%);
  background-color: #d9b2ca;
}
</style>
