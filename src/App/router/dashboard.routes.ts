import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { AppRoutesEnum, AppRoutesNamesEnum } from '@/App/enums/AppRoutesEnums';

Vue.use(VueRouter);
export const dashboardRoutes: Array<RouteConfig> = [
  {
    path: AppRoutesEnum.Dashboard,
    name: AppRoutesNamesEnum.Dashboard,
    component: () => import('@/App/views/dashboardView/Dashboard.vue'),
  },
];
