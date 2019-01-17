import Vue from "vue";
import VueRouter from "vue-router";

import store from "./store/index";

import App from "./App.vue";
import Home from "./components/Home.vue";
import Login from "./components/Auth/Login.vue";
import SignUp from "./components/Auth/SignUp.vue";
import Logout from "./components/Auth/Logout.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/sign-up", component: SignUp },
    { path: "/logout", component: Logout }
  ]
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
