import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { AppRoutesEnum, AppRoutesNamesEnum } from '@/App/enums/AppRoutesEnums';

Vue.use(VueRouter);
export const currenciesRoutes: Array<RouteConfig> = [
  {
    path: AppRoutesEnum.Currencies,
    name: AppRoutesNamesEnum.Currencies,
    component: () => import('@/App/views/currencies.vue'),
  },
];
