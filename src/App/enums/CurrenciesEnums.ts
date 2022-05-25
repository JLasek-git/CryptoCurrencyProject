import { TabsNavigationItem } from "@/Global/interfaces/TabsNavigationItem";

export enum CurrenciesListNamesEnum {
  Currencies = "Currencies",
}

export enum CurrencyTypeEnum {
  Currencies = 0,
}

export const availableCurrenciesModes: TabsNavigationItem[] = [
  {
    displayName: CurrenciesListNamesEnum.Currencies,
    workingMode: CurrencyTypeEnum.Currencies,
  },
];
