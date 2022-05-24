<template>
  <v-app class="app__wrapper d-flex">
    <NavigationDrawer
      v-model="isHamburgerMenuVisible"
      v-if="$route.meta.isNavigationDrawerVisible"
    />

    <!-- App main content -->
    <v-main class="slot-content__wrapper">
      <!-- Hamburger menu icon -->
      <v-icon
        v-if="$route.meta.isNavigationDrawerVisible"
        class="hamburger-menu-icon"
        @click="isHamburgerMenuVisible = true"
      >
        {{ "mdi-menu" }}
      </v-icon>
      <!-- -->

      <v-container class="page-content__container" fluid>
        <slot></slot>
      </v-container>
    </v-main>
    <!-- -->
    <!-- Snackbars to display actions result  -->

    <!-- Items observation snackbars -->
    <Snackbar
      v-model="snackbarVariables.isCurrencyObserved"
      snackbarType="success"
    >
      Item addes as observed.
    </Snackbar>
    <Snackbar
      v-model="snackbarVariables.isCurrencyDeleted"
      snackbarType="success"
    >
      Item succesfully deleted from observed.
    </Snackbar>
    <!-- -->

    <!-- Account snackabrs -->
    <Snackbar
      v-model="snackbarVariables.isUserLoginDataWrong"
      snackbarType="error"
    >
      Wrong login or password!
    </Snackbar>
    <Snackbar
      v-model="snackbarVariables.isNewUserRegistered"
      snackbarType="success"
    >
      New user has been registered.
    </Snackbar>
    <!--  -->

    <!-- -->
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import NavigationDrawer from "@/Global/sharedComponents/NavigationDrawer.vue";
import router from "vue-router";
import Snackbar from "./Snackbar.vue";
import { state } from "@/Global/data/store";
export default defineComponent({
  setup() {
    const { snackbarVariables } = state;
    const isHamburgerMenuVisible = ref(false);

    return {
      snackbarVariables,
      isHamburgerMenuVisible,
      router,
    };
  },
  components: {
    NavigationDrawer,
    Snackbar,
  },
});
</script>

<style lang="scss" scoped>
.app__wrapper::v-deep {
  position: relative;
  height: 100vh;
  width: 100vw;

  & .hamburger-menu-icon {
    background-color: var(--v-accent-base);
    color: var(--v-text-base);
    font-size: 32px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 15px;
    top: 15px;
    position: fixed;
    transition: 0.1s linear;
    z-index: 30;
  }

  & .v-main {
    & .v-main__wrap {
      position: absolute;
      inset: 0;
      background: var(--v-text-base);
    }
  }

  & .page-content__container {
    width: 100%;
    height: 100%;
    padding: $base-layout-padding;

    @media (max-width: $mobile-width-breakpoint) {
      padding: $base-layout-padding 5px;
    }
  }
}
</style>
