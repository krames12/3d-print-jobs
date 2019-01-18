import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Auth/Login.vue";
import SignUp from "./components/Auth/SignUp.vue";
import Logout from "./components/Auth/Logout.vue";

export default new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/sign-up", component: SignUp },
    { path: "/logout", component: Logout }
  ]
});
