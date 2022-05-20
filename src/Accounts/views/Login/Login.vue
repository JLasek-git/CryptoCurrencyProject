<template>
  <div class="login__wrapper d-flex flex-column justify-center align-center">
    <h1 class="login-page-header">Crypto Currency</h1>
    <div class="login-inputs__container">
      <CForm ref="loginForm">
        <v-text-field
          color="accent"
          label="Login"
          v-model="loginData.login"
          :rules="[
            !$v.loginData.login.required.$invalid || 'Login is required',
          ]"
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
    </div>
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
    <div class="buttons__container d-flex justify-space-around">
      <v-btn class="c-button-base mt-3" elevation="0" @click="login">
        Login
      </v-btn>
      <v-btn class="c-button-base--outlined mt-3" elevation="0">
        Sign up
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api";
import { AccountRoutesEnum } from "@/Accounts/enums/AccountRoutesEnum";
import { UserLoginDataModel } from "@/Accounts/models/UserLoginDataModel";
import { loginUser } from "@/Accounts/services/account.service";
import router from "@/router";
import { AppRoutesEnum } from "@/App/enums/AppRoutesEnums";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import CForm from "@/Global/sharedComponents/CForm.vue";

export default defineComponent({
  components: { CForm },
  setup() {
    const loginData = ref(new UserLoginDataModel());
    const loginForm = ref<InstanceType<typeof CForm>>();

    async function login(): Promise<void> {
      if (loginForm.value?.validateForm()) {
        if (await loginUser(loginData.value)) {
          router.push(AppRoutesEnum.Dashboard);
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
    };
  },
});
</script>

<style lang="scss" scoped>
.login__wrapper::v-deep {
  height: 100%;

  & .login-utils__container {
    width: 20%;

    & .basic-login-data {
      color: var(--v-accent-base);
      font-size: 14px;
      cursor: pointer;

      &:hover {
        font-weight: 500;
      }
    }
  }

  & .login-inputs__container,
  .buttons__container {
    width: 20%;
  }

  & .login-page-header {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
}
</style>
