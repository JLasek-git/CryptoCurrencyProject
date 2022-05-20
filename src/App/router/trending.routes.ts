import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { AppRoutesEnum, AppRoutesNamesEnum } from "@/App/enums/AppRoutesEnums";

Vue.use(VueRouter);
export const trendingRoutes: Array<RouteConfig> = [
  {
    path: AppRoutesEnum.Trending,
    name: AppRoutesNamesEnum.Trending,
    component: () => import("@/App/views/Trending/Trending.vue"),
    meta: { isNavigationDrawerVisible: true },
  },
];
