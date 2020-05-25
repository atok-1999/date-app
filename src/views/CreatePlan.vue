<template>
  <div class="content">
    <div class="switch-page">
      <div @click="showEdit" class="switch" :class="pageState === 'edit' ? 'darken-color' : ''">編集</div>
      <div
        @click="showSearch"
        class="switch"
        :class="pageState === 'search' ? 'darken-color' : ''"
      >スポット検索</div>
    </div>
    <div :class="pageState === 'edit' ? 'underline-left' : 'underline-right'"></div>
    <Edit v-if="pageState === 'edit'"></Edit>
    <FindPlace v-if="pageState === 'search'"></FindPlace>
  </div>
</template>

<script>
import Edit from "@/components/CreatePlan/Edit.vue";
import FindPlace from "@/components/CreatePlan/FindPlace.vue";

export default {
  components: {
    FindPlace,
    Edit
  },
  data() {
    return {
      pageState: "search"
    };
  },
  methods: {
    showEdit() {
      this.pageState = "edit";
    },
    showSearch() {
      this.pageState = "search";
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
