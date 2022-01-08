import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { AppRoutesEnum, AppRoutesNamesEnum } from '@/App/enums/AppRoutesEnums';

Vue.use(VueRouter);
export const followedRoutes: Array<RouteConfig> = [
  {
    path: AppRoutesEnum.Followed,
    name: AppRoutesNamesEnum.Followed,
    component: () => import('@/Home.vue'),
  },
];
