<template>
  <div>
    <div>
      <p class="number">Plan{{ stepNumber }}</p>
      <Input1SubPage
        v-show="stepNumber === 1"
        @update="updatePlan"
        :photo-fav="favPhoto"
      >
      </Input1SubPage>
      <Input2SubPage
        v-show="stepNumber === 2"
        @update="updatePlan"
        :photo-fav="favPhoto"
      >
      </Input2SubPage>

      <Input3SubPage
        v-show="stepNumber === 3"
        @update="updatePlan"
        :photo-fav="favPhoto"
      >
      </Input3SubPage>

      <Input4SubPage
        v-show="stepNumber === 4"
        @update="updatePlan"
        :photo-fav="favPhoto"
      >
      </Input4SubPage>
      <Input5SubPage
        v-show="stepNumber === 5"
        @update="updatePlan"
        :photo-fav="favPhoto"
      >
      </Input5SubPage>
      <Input6SubPage
        v-show="stepNumber === 6"
        @update="updatePlan"
        :photo-fav="favPhoto"
      >
      </Input6SubPage>
      <Input7SubPage
        v-show="stepNumber === 7"
        @update="updatePlan"
        :photo-fav="favPhoto"
      >
      </Input7SubPage>
      <Input8SubPage
        v-show="stepNumber === 8"
        @update="updatePlan"
        :photo-fav="favPhoto"
      >
      </Input8SubPage>
      <Input9SubPage
        v-show="stepNumber === 9"
        @update="updatePlan"
        :photo-fav="favPhoto"
      >
      </Input9SubPage>
      <Input10SubPage
        v-show="stepNumber === 10"
        @update="updatePlan"
        :photo-fav="favPhoto"
      >
      </Input10SubPage>

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
import Input2SubPage from "@/components/CreatePlan/SubPages/Input2.vue";
import Input3SubPage from "@/components/CreatePlan/SubPages/Input3.vue";
import Input4SubPage from "@/components/CreatePlan/SubPages/Input4.vue";
import Input5SubPage from "@/components/CreatePlan/SubPages/Input5.vue";
import Input6SubPage from "@/components/CreatePlan/SubPages/Input6.vue";
import Input7SubPage from "@/components/CreatePlan/SubPages/Input7.vue";
import Input8SubPage from "@/components/CreatePlan/SubPages/Input8.vue";
import Input9SubPage from "@/components/CreatePlan/SubPages/Input9.vue";
import Input10SubPage from "@/components/CreatePlan/SubPages/Input10.vue";

export default {
  components: {
    Input1SubPage,
    Input2SubPage,
    Input3SubPage,
    Input4SubPage,
    Input5SubPage,
    Input6SubPage,
    Input7SubPage,
    Input8SubPage,
    Input9SubPage,
    Input10SubPage
  },
  data: function() {
    return {
      stepNumber: 1,
      plan: {
        spotPhoto: null,
        inputTitle1: "",
        inputPlan1: "",
        items1: "",
        hours1: "",
        minutes1: "",
        inputPlan2: "",
        items2: "",
        hours2: "",
        minutes2: "",
        inputPlan3: "",
        items3: "",
        hours3: "",
        minutes3: "",
        inputPlan4: "",
        items4: "",
        hours4: "",
        minutes4: "",
        inputPlan5: "",
        items5: "",
        hours5: "",
        minutes5: "",
        inputPlan6: "",
        items6: "",
        hours6: "",
        minutes6: "",
        inputPlan7: "",
        items7: "",
        hours7: "",
        minutes7: "",
        inputPlan8: "",
        items8: "",
        hours8: "",
        minutes8: "",
        inputPlan9: "",
        items9: "",
        hours9: "",
        minutes9: "",
        inputPlan10: "",
        items10: "",
        hours10: "",
        minutes10: ""
      }
    };
  },
  methods: {
    backStep: function() {
      this.stepNumber--;
    },
    nextStep: function() {
      this.stepNumber++;
    },
    updatePlan: function(planData) {
      Object.assign(this.plan, planData);
    },
    createdPlan: function() {
      this.$emit("complete", this.plan);
    }
  },
  props: ["favPhoto"]
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
