import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { globalRoutes } from "@/Global/router/global.routes";
import { appRoutes } from "@/App/router/app.routes";
import { adminRoutes } from "@/Admin/router/admin.routes";
import { accountRoutes } from "@/Accounts/router/account.routes";
import { AccountRoutesEnum } from "@/Accounts/enums/AccountRoutesEnum";
import "@/plugins/compostionApi";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  ...globalRoutes,
  ...appRoutes,
  ...adminRoutes,
  ...accountRoutes,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach(() => {
  if (router.currentRoute.path === "/") {
    router.push(AccountRoutesEnum.Login);
  }
});

export default router;
