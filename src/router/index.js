import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginAndRegistration from "../views/LoginAndRegistration.vue";
import RegistrateWithEmail from "@/components/LoginAndRegistration/RegistrateWithEmail.vue";

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
    path: "/login-registration",
    name: "LoginAndRegistration",
    component: LoginAndRegistration,
  },
  {
    path: "/registrate-with-email",
    name: "RegistrateWithEmail",
    component: RegistrateWithEmail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
