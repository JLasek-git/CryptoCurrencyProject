import { reactive } from "@vue/composition-api";

interface State {
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
