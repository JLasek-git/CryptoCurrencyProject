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
    routeIcon: "mdi-desktop-mac-dashboard",
  },
  {
    routeName: AppRoutesNamesEnum.Currencies,
    routeUrl: AppRoutesEnum.Currencies,
    routeIcon: "mdi-currency-usd",
  },
  {
    routeName: AppRoutesNamesEnum.Profile,
    routeUrl: AppRoutesEnum.Profile,
    routeIcon: "mdi-account",
  },
];
