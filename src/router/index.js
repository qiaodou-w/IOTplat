import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EnvDetail from "../views/EnvDetail";
import Login from "../views/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
	{
		path: "/login",
		name: 'Login',
		component: Login
	},
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      showTab: true //如果需要显示就加上这个
    }
  },
  {
    path: "/home/:category",
    name: "EnvironmentDetail",
    component: EnvDetail
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      showTab: true
    }
  },
  {
    path: "/control",
    name: "Control",
    component: () => import("../views/Control"),
    meta: {
      showTab: true
    }
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
