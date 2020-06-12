import Vue from "vue";
import Vuex from "vuex";

import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    plans: [
      // {
      //   id: 123,
      //   spots: [
      //     {
      //       locationName: "家"
      //     }
      //   ]
      // }
    ]
  },
  mutations: {
    setPlans(state, plans) {
      state.plans = plans;
    },
    addPlan(state, plan) {
      state.plans.push(plan);
    }
  },
  actions: {
    loadPlans({ commit }) {
      firebase
        .firestore()
        .collection("plans")
        .orderBy("createdAt")
        .limit(10)
        .get()
        .then(collection => {
          const plans = collection.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            };
          });
          commit("setPlans", plans);
        });
    },
    async fetchPlan({ commit, state }, planId) {
      const plan = state.plans.find(plan => {
        return plan.id === planId;
      });
      if (plan) {
        return plan;
      } else {
        const doc = await firebase
          .firestore()
          .collection("plans")
          .doc(planId)
          .get();
        const plan = {
          id: doc.id,
          ...doc.data()
        };
        commit("addPlan", plan);
        return plan;

        // componentのなかで
        // this.$store.dispatch("fetchPlan", 123).then(plan => {

        // })
        // firebase
        //   .firestore()
        //   .collection("plans")
        //   .doc(planId)
        //   .get()
        //   .then(doc => {
        //     commit("addPlan", {
        //       id: doc.id,
        //       ...doc.data()
        //     });
        //   });
      }
    },
    async addPlan({ commit }, plan) {
      // firestore に保存する
      // おわったら
      // store に保存する（＝ mutation を commit する）
      const res = await firebase
        .firestore()
        .collection("plans")
        .add({
          ...plan,
          createdAt: new Date()
        });
      const planPosted = {
        id: res.id,
        ...plan
      };
      commit("addPlan", planPosted);
      return planPosted;
    }
  },
  getters: {
    sortedPlans(state) {
      return state.plans.sort((lhs, rhs) => {
        return lhs.createdAt - rhs.createdAt;
      });
    }
  }
});
