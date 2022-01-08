import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { AppRoutesEnum, AppRoutesNamesEnum } from '@/App/enums/AppRoutesEnums';

Vue.use(VueRouter);
export const infoRoutes: Array<RouteConfig> = [
  {
    path: AppRoutesEnum.Info,
    name: AppRoutesNamesEnum.Info,
    component: () => import('@/Home.vue'),
  },
];
