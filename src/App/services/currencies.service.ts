import { CurrencyDataModel } from "../models/CurrencyDataModel";
import axios from "axios";
import { state } from "@/Global/data/store";

export async function getCurrencies(): Promise<CurrencyDataModel[]> {
  state.loadings.isGetDataLoadingVisible = true;
  const currencies = await axios.get("https://api.coinpaprika.com/v1/tickers");
  state.loadings.isGetDataLoadingVisible = false;
  return currencies.data;
}

export async function getCurrencyDetails(
  id: string
): Promise<CurrencyDataModel> {
  state.loadings.isGetDataLoadingVisible = true;
  const currencyDetails = await axios.get(
    `https://api.coinpaprika.com/v1/tickers/${id}`
  );
  state.loadings.isGetDataLoadingVisible = false;
  return currencyDetails.data;
}
