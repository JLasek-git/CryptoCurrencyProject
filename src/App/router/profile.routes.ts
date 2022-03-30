import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { AppRoutesEnum, AppRoutesNamesEnum } from "@/App/enums/AppRoutesEnums";

Vue.use(VueRouter);
export const profileRoutes: Array<RouteConfig> = [
  {
    path: AppRoutesEnum.Profile,
    name: AppRoutesNamesEnum.Profile,
    component: () => import("@/App/views/Profile/Profile.vue"),
  },
];
