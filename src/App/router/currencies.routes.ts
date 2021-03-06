import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { AppRoutesEnum, AppRoutesNamesEnum } from "@/App/enums/AppRoutesEnums";
import router from "@/router";

Vue.use(VueRouter);
export const currenciesRoutes: Array<RouteConfig> = [
  {
    path: AppRoutesEnum.Currencies,
    name: AppRoutesNamesEnum.Currencies,
    component: () => import("@/App/views/Currencies/Currencies.vue"),
    meta: { isNavigationDrawerVisible: true },
  },
];
