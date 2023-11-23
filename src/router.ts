import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
//import About from "@/views/About.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/apropos",
    component: () => import("@/views/About.vue"), // lazy loading
    name: "About",
  },
];

const router = createRouter({
  history: createWebHistory(), //import.meta.env.BASE_URL
  routes,
});

export default router;
