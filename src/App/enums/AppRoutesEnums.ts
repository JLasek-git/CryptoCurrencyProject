export enum AppRoutesEnum {
  Dashboard = "/dashboard",
  Currencies = "/currencies",
  Trending = "/trending",
  Info = "/info",
  Profile = "/profile",
}

export enum AppRoutesNamesEnum {
  Dashboard = "Dashboard",
  Currencies = "Currencies",
  Trending = "Trending",
  Info = "Info",
  Profile = "Profile",
}

export const appAvailableRoutes = [
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
    routeName: AppRoutesNamesEnum.Trending,
    routeUrl: AppRoutesEnum.Trending,
    routeIcon: "mdi-trending-up",
  },
  {
    routeName: AppRoutesNamesEnum.Info,
    routeUrl: AppRoutesEnum.Info,
    routeIcon: "mdi-information",
  },
  {
    routeName: AppRoutesNamesEnum.Profile,
    routeUrl: AppRoutesEnum.Profile,
    routeIcon: "mdi-account",
  },
];
