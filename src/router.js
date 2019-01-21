import VueRouter from "vue-router";
const Home = () => import("./components/Home.vue");
const Login = () => import("./components/Auth/Login.vue");
const SignUp = () => import("./components/Auth/SignUp.vue");
const Logout = () => import("./components/Auth/Logout.vue");

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
