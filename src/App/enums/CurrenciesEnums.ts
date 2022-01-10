import { TabsNavigationItem } from '@/Global/interfaces/TabsNavigationItem';

export enum CurrenciesListNamesEnum {
  Currencies = 'Currencies',
  Tokens = 'Tokens',
}

export enum CurrenciesWorkingModeEnum {
  Currencies = 0,
  Tokens,
}

export const availableCurrenciesModes: TabsNavigationItem[] = [
  {
    displayName: CurrenciesListNamesEnum.Currencies,
    workingMode: CurrenciesWorkingModeEnum.Currencies,
  },
  {
    displayName: CurrenciesListNamesEnum.Tokens,
    workingMode: CurrenciesWorkingModeEnum.Tokens,
  },
];
