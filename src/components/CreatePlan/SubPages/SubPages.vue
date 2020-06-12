<template>
  <div>
    <div>
      <p class="number">Plan{{ stepNumber }}</p>
      <Input1SubPage
        @update="updatePlan"
        :photo-fav="favPhoto"
        :is-next-page="isNext"
        @nextCleard="nextCleard"
      >
      </Input1SubPage>

      <div v-show="stepNumber === 1" class="page-1">
        <div @click="nextStep" class="page">Next</div>
      </div>
      <div v-show="stepNumber !== 1">
        <div class="page-2">
          <div @click="backStep" class="page">Back</div>
          <div @click="nextStep" class="page">Next</div>
        </div>
      </div>
      <div @click="createdPlan" class="complete">Complete</div>
    </div>
  </div>
</template>

<script>
import Input1SubPage from "@/components/CreatePlan/SubPages/Input1.vue";

export default {
  components: {
    Input1SubPage
  },
  data: function() {
    return {
      stepNumber: 1,
      plan: {
        spotPhoto: null,
        inputPlan1: "",
        items1: "",
        hours1: "",
        minutes1: ""
      },
      isNext: false
    };
  },
  methods: {
    backStep: function() {
      this.stepNumber--;
    },
    nextStep: function() {
      this.stepNumber++;
      this.spots.push(this.plan);
      this.plan = {
        spotPhoto: null,
        inputPlan1: "",
        items1: "",
        hours1: "",
        minutes1: ""
      };
      console.log(this.spots);

      this.isNext = true;
    },
    updatePlan: function(planData) {
      this.plan = Object.assign(this.plan, planData);
    },
    createdPlan: function() {
      this.spots.push(this.plan);
      this.$emit("update:spots", this.spots);
      this.create();
    },
    nextCleard() {
      this.isNext = false;
    }
  },
  props: {
    favPhoto: Array,
    spots: Array,
    create: Function
  }
};
</script>

<style scoped>
.number {
  margin-bottom: 49px;
  margin-top: 32px;
}
.page {
  width: 50px;
  color: #3b3b3b;
}
.page-1 {
  margin-left: 80%;
  width: 50px;
}
.page-2 {
  display: flex;
  justify-content: space-between;
  margin-left: 8%;
  margin-right: 8%;
}
.page-10 {
  width: 50px;
  margin-right: 70%;
}
.complete {
  width: 132px;
  height: 32px;
  margin: 36px auto;
  background-color: #d9b2ca;
  border-radius: 50px;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  padding-top: 5px;
}
</style>
