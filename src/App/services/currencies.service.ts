import { CurrencyListModel } from "./../models/CurrencyListModel";
import { CurrencyDataModel } from "../models/CurrencyDataModel";
import { state } from "@/Global/data/store";
import { getCurrencyItems } from "@/Global/utils/requests";

export async function getCurrencies(): Promise<CurrencyDataModel[]> {
  state.loadings.isGetDataLoadingVisible = true;
  const currencies = await getCurrencyItems<CurrencyDataModel[]>("/tickers");

  state.loadings.isGetDataLoadingVisible = false;
  return currencies;
}

export async function getCurrencyDetails(
  id: string
): Promise<CurrencyDataModel> {
  state.loadings.isGetDataLoadingVisible = true;
  const currencyDetails = await getCurrencyItems<CurrencyDataModel>(
    `/tickers/${id}`
  );
  state.loadings.isGetDataLoadingVisible = false;
  return currencyDetails;
}

export async function getTopRankCurrencies(): Promise<CurrencyListModel[]> {
  const currencyListItems = await getCurrencyItems<CurrencyListModel[]>(
    "/coins"
  );

  return currencyListItems.slice(0, 3);
}
