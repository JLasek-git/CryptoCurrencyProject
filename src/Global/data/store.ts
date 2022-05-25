import { reactive } from "@vue/composition-api";

interface State {
  baseRequestUrl: string;
  snackbarVariables: {
    isNewUserRegistered: boolean;
    isUserLoginDataWrong: boolean;
    isCurrencyObserved: boolean;
    isCurrencyDeleted: boolean;
  };
  loadings: {
    isGetDataLoadingVisible: boolean;
  };
}

export const state = reactive<State>({
  baseRequestUrl: "https://api.coinpaprika.com/v1",
  snackbarVariables: {
    isNewUserRegistered: false,
    isUserLoginDataWrong: false,
    isCurrencyObserved: false,
    isCurrencyDeleted: false,
  },
  loadings: {
    isGetDataLoadingVisible: false,
  },
});
