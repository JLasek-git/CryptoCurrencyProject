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
