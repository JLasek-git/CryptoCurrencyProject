import { CurrencyTypeEnum } from "../enums/CurrenciesEnums";

export class CurrencyDataModel {
  id = 0;
  name = "";
  currencyType = CurrencyTypeEnum.Currencies;
  price = "";
  day = "";
  week = "";
  cap = "";
  volume = "";
  circulation = "";
}
