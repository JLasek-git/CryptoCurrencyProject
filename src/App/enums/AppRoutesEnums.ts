export enum AppRoutesEnum {
  Dashboard = '/',
  Currencies = '/Currencies',
  Followed = '/Followed',
  Trending = '/Trending',
  Info = '/Info',
  Profile = '/Profile',
}

export enum AppRoutesNamesEnum {
  Dashboard = 'dashboard',
  Currencies = 'currencies',
  Followed = 'followed',
  Trending = 'trending',
  Info = 'info',
  Profile = 'profile',
}

export const appAvailableRoutes = [
  {
    routeName: AppRoutesNamesEnum.Dashboard,
    routeUrl: AppRoutesEnum.Dashboard,
  },
  {
    routeName: AppRoutesNamesEnum.Currencies,
    routeUrl: AppRoutesEnum.Currencies,
  },
  {
    routeName: AppRoutesNamesEnum.Followed,
    routeUrl: AppRoutesEnum.Followed,
  },
  {
    routeName: AppRoutesNamesEnum.Trending,
    routeUrl: AppRoutesEnum.Trending,
  },
  {
    routeName: AppRoutesNamesEnum.Info,
    routeUrl: AppRoutesEnum.Info,
  },
  {
    routeName: AppRoutesNamesEnum.Profile,
    routeUrl: AppRoutesEnum.Profile,
  },
];
