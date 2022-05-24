<template>
  <v-navigation-drawer
    v-model="isHamburgerMenuVisible"
    absolute
    temporary
    class="navigation-drawer__wrapper"
  >
    <!-- Icon to close hamburger menu -->
    <v-icon
      class="hamburger-close-icon text--text"
      @click="isHamburgerMenuVisible = false"
    >
      {{ "mdi-close" }}
    </v-icon>
    <!-- -->

    <v-list class="navigation-drarwer-items-list">
      <!-- User avatar in navigation drawer -->
      <v-list-item-avatar
        class="user-avatar__container d-flex flex-column justify-center align-center mx-auto mt-10"
      >
        <v-img
          class="profile-avatar"
          src="../assets/noUserImg.png"
          alt="User avatar"
        />
      </v-list-item-avatar>
      <!-- -->

      <!-- Username in navigation drawer -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 text--text">
            Username
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- -->

      <!-- Navigation drawer links -->
      <v-list-item-group>
        <v-list-item
          link
          v-for="(appRoute, index) in appAvailableRoutes"
          :key="index"
          class="nav-list-item text--text"
          active-class="item-active"
          :to="appRoute.routeUrl"
        >
          <v-list-item-icon>
            <v-icon class="text--text">
              {{ appRoute.routeIcon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ appRoute.routeName }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <!-- -->
    </v-list>

    <template v-slot:append>
      <!-- Logout button -->
      <div class="logout-button__container d-flex justify-center align-center">
        <v-btn class="c-button-delete" @click="logoutUser">Logout</v-btn>
      </div>
      <!-- -->
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";
import { appAvailableRoutes } from "@/App/data/appRoutes";
import router from "@/router";
import { AccountRoutesEnum } from "@/Accounts/enums/AccountRoutesEnum";
export default defineComponent({
  emits: ["input"],
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const isHamburgerMenuVisible = computed({
      get: () => props.value,
      set: (value) => {
        emit("input", value);
      },
    });

    function logoutUser(): void {
      localStorage.clear();
      router.push(AccountRoutesEnum.Login);
    }

    return { logoutUser, appAvailableRoutes, isHamburgerMenuVisible };
  },
});
</script>

<style lang="scss" scoped>
.navigation-drawer__wrapper::v-deep {
  position: relative;
  border-top-right-radius: 25px;
  min-width: 300px;
  background: $dark-background-gradient;

  & .hamburger-close-icon {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  & .navigation-drarwer-items-list {
    width: 100%;
    height: fit-content;

    & .user-avatar__container {
      width: 70px !important;
      height: 70px !important;
    }
  }

  & .logout-button__container {
    margin-bottom: $base-layout-padding;
  }
}
</style>
