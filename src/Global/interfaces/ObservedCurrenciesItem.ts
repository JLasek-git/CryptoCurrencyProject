import { CurrencyTypeEnum } from "@/App/enums/CurrenciesEnums";

export interface ObservedCurrenciesItem {
  name: string;
  icon: string;
  type: CurrencyTypeEnum;
}
