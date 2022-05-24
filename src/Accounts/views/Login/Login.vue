<template>
  <AccountsLayout>
    <CForm ref="loginForm">
      <v-text-field
        color="accent"
        label="Login"
        v-model="loginData.login"
        :rules="[!$v.loginData.login.required.$invalid || 'Login is required']"
      />
      <v-text-field
        color="accent"
        label="Password"
        type="password"
        v-model="loginData.password"
        :rules="[
          !$v.loginData.password.required.$invalid || 'Password is required',
        ]"
      />
    </CForm>
    <div
      class="login-utils__container d-flex justify-space-between align-center"
    >
      <v-checkbox
        class="c-checkbox"
        color="accent"
        v-model="loginData.isRememberChecked"
        label="Remember me"
      />
      <span class="basic-login-data" @click="fillLoginData"
        >Use basic login data</span
      >
    </div>
    <template #buttons>
      <v-btn class="c-button-base mt-3" @click="login"> Login </v-btn>
      <v-btn
        class="c-button-neutral--outlined mt-3"
        @click="$router.push(AccountRoutesEnum.CreateAccount)"
      >
        Sign up
      </v-btn>
    </template>
  </AccountsLayout>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { AccountRoutesEnum } from "@/Accounts/enums/AccountRoutesEnum";
import { UserLoginDataModel } from "@/Accounts/models/UserLoginDataModel";
import { loginUser } from "@/Accounts/services/account.service";
import router from "@/router";
import { AppRoutesEnum } from "@/App/enums/AppRoutesEnums";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import CForm from "@/Global/sharedComponents/CForm.vue";
import AccountsLayout from "@/Accounts/components/AccountsLayout.vue";
import Snackbar from "@/Global/sharedComponents/Snackbar.vue";
import { state } from "@/Global/data/store";

export default defineComponent({
  components: { CForm, AccountsLayout, Snackbar },
  setup() {
    const { snackbarVariables } = state;
    const loginData = ref(new UserLoginDataModel());
    const loginForm = ref<InstanceType<typeof CForm>>();

    async function login(): Promise<void> {
      if (loginForm.value?.validateForm()) {
        if (await loginUser(loginData.value)) {
          router.push(AppRoutesEnum.Dashboard);
        } else {
          snackbarVariables.isUserLoginDataWrong = true;
        }
      }
    }

    function fillLoginData(): void {
      loginData.value.login = "admin";
      loginData.value.password = "admin";
    }

    const $v = useVuelidate(
      {
        loginData: {
          login: { required },
          password: { required },
        },
      },
      { loginData }
    );

    return {
      $v,
      login,
      fillLoginData,
      loginData,
      loginForm,
      AccountRoutesEnum,
      snackbarVariables,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-utils__container {
  width: 100%;

  & .basic-login-data {
    color: var(--v-accent-base);
    font-size: 14px;
    cursor: pointer;

    &:hover {
      font-weight: 500;
    }
  }
}
</style>
