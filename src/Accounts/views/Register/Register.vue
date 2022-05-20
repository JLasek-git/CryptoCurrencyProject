<template>
  <AccountsLayout>
    <CForm>
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
        ]"
      />
    </CForm>
    <div class="buttons__container d-flex justify-space-around">
      <v-btn class="c-button-base mt-3"> Sign up </v-btn>
    </div>
  </AccountsLayout>
</template>

<script lang="ts">
import CForm from "@/Global/sharedComponents/CForm.vue";
import { defineComponent, ref } from "@vue/composition-api";
import { UserRegisterDataModel } from "@/Accounts/models/UserRegisterDataModel";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import AccountsLayout from "@/Accounts/components/AccountsLayout.vue";

export default defineComponent({
  components: { CForm, AccountsLayout },
  setup() {
    const userRegisterData = ref(new UserRegisterDataModel());

    const $v = useVuelidate(
      {
        userRegisterData: {
          login: { required },
          password: { required },
          confirmedPassword: { required },
        },
      },
      {
        userRegisterData,
      }
    );

    return {
      $v,
      userRegisterData,
    };
  },
});
</script>

<style lang="scss" scoped></style>
