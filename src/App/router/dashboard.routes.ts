import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { AppRoutesEnum, AppRoutesNamesEnum } from "@/App/enums/AppRoutesEnums";

Vue.use(VueRouter);
export const dashboardRoutes: Array<RouteConfig> = [
  {
    path: AppRoutesEnum.Dashboard,
    name: AppRoutesNamesEnum.Dashboard,
    component: () => import("@/App/views/Dashboard/Dashboard.vue"),
    meta: { isNavigationDrawerVisible: true },
  },
];
