import { AppRoutesEnum, AppRoutesNamesEnum } from "@/App/enums/AppRoutesEnums";

interface appRoutes {
  routeName: AppRoutesNamesEnum;
  routeUrl: AppRoutesEnum;
  routeIcon: string;
}

export const appAvailableRoutes: appRoutes[] = [
  {
    routeName: AppRoutesNamesEnum.Dashboard,
    routeUrl: AppRoutesEnum.Dashboard,
    routeIcon: "desktop",
  },
  {
    routeName: AppRoutesNamesEnum.Currencies,
    routeUrl: AppRoutesEnum.Currencies,
    routeIcon: "usd",
  },
  {
    routeName: AppRoutesNamesEnum.Trending,
    routeUrl: AppRoutesEnum.Trending,
    routeIcon: "trending-up",
  },
  {
    routeName: AppRoutesNamesEnum.Info,
    routeUrl: AppRoutesEnum.Info,
    routeIcon: "info",
  },
  {
    routeName: AppRoutesNamesEnum.Profile,
    routeUrl: AppRoutesEnum.Profile,
    routeIcon: "account",
  },
];
