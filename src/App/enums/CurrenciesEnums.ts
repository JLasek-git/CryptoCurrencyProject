import { TabsNavigationItem } from "@/Global/interfaces/TabsNavigationItem";

export enum CurrenciesListNamesEnum {
  Currencies = "Currencies",
  Tokens = "Tokens",
}

export enum CurrencyTypeEnum {
  Currencies = 0,
  Tokens,
}

export const availableCurrenciesModes: TabsNavigationItem[] = [
  {
    displayName: CurrenciesListNamesEnum.Currencies,
    workingMode: CurrencyTypeEnum.Currencies,
  },
  {
    displayName: CurrenciesListNamesEnum.Tokens,
    workingMode: CurrencyTypeEnum.Tokens,
  },
];
