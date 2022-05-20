import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { profileRoutes } from "@/App/router/profile.routes";
import { dashboardRoutes } from "@/App/router/dashboard.routes";
import { currenciesRoutes } from "@/App/router/currencies.routes";
import { infoRoutes } from "@/App/router/info.routes";
import { trendingRoutes } from "@/App/router/trending.routes";

Vue.use(VueRouter);

export const appRoutes: Array<RouteConfig> = [
  ...dashboardRoutes,
  ...profileRoutes,
  ...currenciesRoutes,
  ...infoRoutes,
  ...trendingRoutes,
];
