import axios from "axios";
import { state } from "@/Global/data/store";

export async function getCurrencyItems<T>(requestUrl: string): Promise<T> {
  const requestResponse = await axios.get(
    `${state.baseRequestUrl}${requestUrl}`
  );
  return requestResponse.data;
}
