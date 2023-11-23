import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ResourceDetail from "@/views/ResourceDetail.vue";
import ResourceForm from "@/views/ResourceForm.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/resource/:id",
    component: ResourceDetail,
    name: "ResourceDetail",
  },
  {
    path: "/resourceform",
    component: ResourceForm,
    name: "ResourceForm",
  },
  {
    path: "/admin",
    component: () => import("@/views/Admin.vue"), // lazy loading
    name: "Admin",
    children: [
      {
        path: "gestion",
        component: () => import("@/views/admin/Management.vue"), // lazy loading
        name: "Management",
      },
      {
        path: "/validation",
        component: () => import("@/views/admin/Validation.vue"), // lazy loading
        name: "Validation",
      },
    ],
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
