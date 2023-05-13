import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import { get_token } from "../services/local.service";

const routes: RouteRecordRaw[] = [
  {
    name: "Auth",
    path: "/auth",
    component: () => import("../pages/Auth.vue"),
    meta: {
      need_auth: false,
    },
  },
  {
    name: "Home",
    path: "/",
    component: () => import("../pages/Home.vue"),
    meta: {
      need_auth: true,
    },
  },
];

const is_auth = async () => {
  const tokens = await get_token();

  return tokens.length > 0;
};

console.log(await is_auth());

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach(async (to, _, next) => {
  const publicPages = ["/auth"];
  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !(await is_auth())) {
    return next("/auth");
  }

  next();
});

export { router };
