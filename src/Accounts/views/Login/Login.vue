<template>
  <div class="login__wrapper d-flex flex-column justify-center align-center">
    <div class="login-inputs__container">
      <v-text-field label="Login" v-model="loginData.login" />
      <v-text-field
        label="Password"
        type="password"
        v-model="loginData.password"
      />
    </div>
    <div class="forget-password__container d-flex justify-end">
      <span
        class="forget-password-text"
        @click="$router.push(AccountRoutesEnum.ResetPassword)"
        >Forget password</span
      >
    </div>
    <v-btn class="c-button-base mt-3" elevation="0" @click="login">
      Login
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { AccountRoutesEnum } from "@/Accounts/enums/AccountRoutesEnum";
import { UserLoginDataModel } from "@/Accounts/models/UserLoginDataModel";
import { loginUser } from "@/Accounts/services/account.service";
import router from "@/router";
import { AppRoutesEnum } from "@/App/enums/AppRoutesEnums";

export default defineComponent({
  setup() {
    const loginData = ref(new UserLoginDataModel());

    async function login() {
      if (await loginUser(loginData.value)) {
        router.push(AppRoutesEnum.Dashboard);
      }
    }

    return { login, loginData, AccountRoutesEnum };
  },
});
</script>

<style lang="scss" scoped>
.login__wrapper {
  height: 100%;

  & .forget-password__container {
    width: 20%;
    & .forget-password-text {
      cursor: pointer;
      color: var(--v-error-base);
      font-size: $regular-font-size;

      &:hover {
        color: red;
        transition: 0.3s linear;
      }
    }
  }

  & .login-inputs__container {
    width: 20%;
  }
}
</style>
