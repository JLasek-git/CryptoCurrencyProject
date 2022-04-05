import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { AppRoutesEnum, AppRoutesNamesEnum } from "@/App/enums/AppRoutesEnums";

Vue.use(VueRouter);
export const currenciesRoutes: Array<RouteConfig> = [
  {
    path: AppRoutesEnum.Currencies,
    name: AppRoutesNamesEnum.Currencies,
    component: () => import("@/App/views/Currencies/Currencies.vue"),
<<<<<<< HEAD
=======
    meta: { isNavigationDrawerVisible: true },
>>>>>>> fcce6f0abdab534171ce6a3a98990818aeab17e2
  },
];
