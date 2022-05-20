<template>
  <AccountsLayout>
    <CForm ref="registerForm">
      <v-text-field
        color="accent"
        label="Login"
        v-model="userRegisterData.login"
        :rules="[
          !$v.userRegisterData.login.required.$invalid || 'Login is required',
        ]"
      />
      <v-text-field
        color="accent"
        label="Password"
        type="password"
        v-model="userRegisterData.password"
        :rules="[
          !$v.userRegisterData.password.required.$invalid ||
            'Password is required',
        ]"
      />
      <v-text-field
        color="accent"
        label="Confirm passowrd"
        type="password"
        v-model="userRegisterData.confirmedPassword"
        :rules="[
          !$v.userRegisterData.confirmedPassword.required.$invalid ||
            'Password confirmation is required',
          !$v.userRegisterData.confirmedPassword.isPasswordMatching.$invalid ||
            'Passwords are not the same',
        ]"
      />
    </CForm>
    <div class="buttons__container d-flex justify-space-around">
      <v-btn class="c-button-base mt-3" @click="createAccount"> Sign up </v-btn>
    </div>
  </AccountsLayout>
</template>

<script lang="ts">
import CForm from "@/Global/sharedComponents/CForm.vue";
import { defineComponent, ref } from "@vue/composition-api";
import { UserRegisterDataModel } from "@/Accounts/models/UserRegisterDataModel";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import router from "@/router";
import AccountsLayout from "@/Accounts/components/AccountsLayout.vue";
import { registerNewUser } from "@/Accounts/services/account.service";
import { AccountRoutesEnum } from "@/Accounts/enums/AccountRoutesEnum";

export default defineComponent({
  components: { CForm, AccountsLayout },
  setup() {
    const userRegisterData = ref(new UserRegisterDataModel());
    const registerForm = ref<InstanceType<typeof CForm>>();

    async function createAccount(): Promise<void> {
      console.log(registerForm.value?.validateForm());
      if (registerForm.value?.validateForm()) {
        await registerNewUser(userRegisterData.value);
        router.push(AccountRoutesEnum.Login);
      }
    }

    // Had to make custom rule becouse sameAs from vuelidate is probably bugged
    function passwordIsSame(): boolean {
      return (
        userRegisterData.value.confirmedPassword ===
        userRegisterData.value.password
      );
    }

    const $v = useVuelidate(
      {
        userRegisterData: {
          login: { required },
          password: { required },
          confirmedPassword: {
            required,
            isPasswordMatching: passwordIsSame,
          },
        },
      },
      {
        userRegisterData,
      }
    );

    return {
      $v,
      registerForm,
      userRegisterData,
      createAccount,
    };
  },
});
</script>

<style lang="scss" scoped></style>
