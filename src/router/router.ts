import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import { is_auth } from "../services/local.service";
import HomeVue from "../pages/Home.vue";
import AccountVue from "../pages/Account.vue";
import AuthVue from "../pages/Auth.vue";

const routes: RouteRecordRaw[] = [
  {
    name: "Auth",
    path: "/auth",
    component: AuthVue,
    meta: {
      need_auth: false,
    },
  },
  {
    name: "Home",
    path: "/",
    component:HomeVue,
    meta: {
      need_auth: true,
    },
  },
  {
    name: "Account",
    path: "/account",
    component: AccountVue,
    meta: {
      need_auth: true,
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach( (to, _, next) => {
  const publicPages = ["/auth"];
  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !is_auth()) {
    return next("/auth");
  }

  next();
});

export { router };
