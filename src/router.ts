import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ResourceDetail from "@/views/ResourceDetail.vue";
import ResourceForm from "@/views/ResourceForm.vue";
import { useAuthStore } from "./stores/authStore";

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
    meta: {
      needAuth: true,
    },
    children: [
      {
        path: "gestion",
        component: () => import("@/views/admin/Management.vue"), // lazy loading
        name: "Management",
      },
      {
        path: "validation",
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
  {
    path: "/login",
    component: () => import("@/views/admin/Login.vue"), // lazy loading
    name: "Login",
  },
];

const router = createRouter({
  history: createWebHistory(), //import.meta.env.BASE_URL
  routes,
});

router.beforeEach((to, from, next) => {
  const { user } = useAuthStore();
  const isAuthenticated = user.accessToken;
  const isProtected = to.matched.some((route) => route.meta.needAuth);
  if (!isAuthenticated && isProtected) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
