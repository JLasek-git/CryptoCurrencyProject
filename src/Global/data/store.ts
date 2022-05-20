import { reactive } from "@vue/composition-api";
import { ObservedCurrenciesItem } from "../interfaces/ObservedCurrenciesItem";

interface State {
  observedCurrencies: ObservedCurrenciesItem[];
  snackbarVariables: {
    isNewUserRegistered: boolean;
    isUserLoginDataWrong: boolean;
  };
}

export const state = reactive<State>({
  observedCurrencies: [],
  snackbarVariables: {
    isNewUserRegistered: false,
    isUserLoginDataWrong: false,
  },
});
