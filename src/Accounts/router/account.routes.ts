import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import {
  AccountRoutesEnum,
  AccountRoutesNameEnum,
} from "../enums/AccountRoutesEnum";

Vue.use(VueRouter);

export const accountRoutes: Array<RouteConfig> = [
  {
    path: AccountRoutesEnum.Login,
    name: AccountRoutesNameEnum.Login,
    component: () => import("@/Accounts/views/Login/Login.vue"),
    meta: { isNavigationDrawerVisible: false },
  },
];
