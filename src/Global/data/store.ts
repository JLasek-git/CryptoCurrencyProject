import { reactive } from "@vue/composition-api";

interface State {
  snackbarVariables: {
    isNewUserRegistered: boolean;
    isUserLoginDataWrong: boolean;
  };
}

export const state = reactive<State>({
  snackbarVariables: {
    isNewUserRegistered: false,
    isUserLoginDataWrong: false,
  },
});
