import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { AppRoutesEnum, AppRoutesNamesEnum } from '@/App/enums/AppRoutesEnums';

Vue.use(VueRouter);

export const appRoutes: Array<RouteConfig> = [
  {
    path: AppRoutesEnum.Dashboard,
    name: AppRoutesNamesEnum.Dashboard,
    component: () => import('@/Home.vue'),
  },
  {
    path: AppRoutesEnum.Currencies,
    name: AppRoutesNamesEnum.Currencies,
    component: () => import('@/Home.vue'),
  },
  {
    path: AppRoutesEnum.Followed,
    name: AppRoutesNamesEnum.Followed,
    component: () => import('@/Home.vue'),
  },
  {
    path: AppRoutesEnum.Trending,
    name: AppRoutesNamesEnum.Trending,
    component: () => import('@/Home.vue'),
  },
  {
    path: AppRoutesEnum.Info,
    name: AppRoutesNamesEnum.Info,
    component: () => import('@/Home.vue'),
  },
  {
    path: AppRoutesEnum.Profile,
    name: AppRoutesNamesEnum.Profile,
    component: () => import('@/Home.vue'),
  },
];
