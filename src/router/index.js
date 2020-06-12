import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import LoginOrSignup from "@/views/LoginOrSignup.vue";
import SignupWithEmail from "@/views/SignupWithEmail.vue";
import LoginWithEmail from "@/views/LoginWithEmail.vue";
import CreatePlan from "@/views/CreatePlan.vue";
import MyPage from "@/views/MyPage.vue";
import ShowPlan from "@/views/ShowPlan.vue";
import PlanList from "@/views/PlanList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login-or-signup",
    name: "LoginOrSignup",
    component: LoginOrSignup,
  },
  {
    path: "/signup-with-email",
    name: "SignupWithEmail",
    component: SignupWithEmail,
  },
  {
    path: "/login-with-email",
    name: "LoginWithEmail",
    component: LoginWithEmail,
  },
  {
    path: "/create-plan",
    name: "CreatePlan",
    component: CreatePlan,
  },
  {
    path: "/my-page",
    name: "MyPage",
    component: MyPage,
  },
  {
    path: "/show-plan/:planId",
    name: "ShowPlan",
    component: ShowPlan,
  },
  {
    path: "/plan-list",
    name: "PlanList",
    component: PlanList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
