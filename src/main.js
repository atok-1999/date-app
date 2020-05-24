import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import "firebase/firestore";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDng5k79sZYfz2USU5DN65uTfopAJVxwj4",
    libraries: "places"
  }
});

var firebaseConfig = {
  apiKey: "AIzaSyDekU34RkIaKyrW9PXaMYvHFpUV6Zu-bS0",
  authDomain: "dating-app-69e2e.firebaseapp.com",
  databaseURL: "https://dating-app-69e2e.firebaseio.com",
  projectId: "dating-app-69e2e",
  storageBucket: "dating-app-69e2e.appspot.com",
  messagingSenderId: "378673627606",
  appId: "1:378673627606:web:c8a59206a5c72986552477",
  measurementId: "G-XHRTFQP83C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
