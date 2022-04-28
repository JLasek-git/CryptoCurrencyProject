<template>
  <v-navigation-drawer class="navigation-drawer__wrapper" width="250">
    <div class="profile-info d-flex flex-column justify-center align-center">
      <div class="profile-avatar"></div>
      <h3 class="profile-name">Username</h3>
    </div>
    <v-list flat>
      <v-list-item-group>
        <v-list-item
          v-for="(appRoute, index) in appAvailableRoutes"
          :key="index"
          class="nav-list-item"
          active-class="item-active"
          :to="appRoute.routeUrl"
        >
          <v-img
            class="mr-4"
            contain
            :src="require(`../assets/${appRoute.routeIcon}.svg`)"
          />
          <v-list-item-title class="nav-list-item-title">
            {{ appRoute.routeName }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <div class="logout-button__container d-flex justify-center align-end">
      <v-btn class="c-button-delete" @click="logoutUser">Logout</v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { appAvailableRoutes } from "@/App/data/appRoutes";
import router from "@/router";
import { AccountRoutesEnum } from "@/Accounts/enums/AccountRoutesEnum";

export default defineComponent({
  setup() {
    function logoutUser(): void {
      localStorage.clear();
      router.push(AccountRoutesEnum.Login);
    }

    return { logoutUser, appAvailableRoutes };
  },
});
</script>

<style lang="scss" scoped>
.navigation-drawer__wrapper::v-deep {
  border-top-right-radius: 25px;
  min-width: 250px;
  .profile-info {
    max-height: 220px;
    min-height: 220px;
    color: var(--v-text-base);

    & .profile-avatar {
      width: 90px;
      height: 90px;
      background: var(--v-text-base);
      border-radius: 50%;
    }
  }
  .v-navigation-drawer__content {
    background: $dark-background-gradient;
    & .v-list {
      background: transparent;
      & .nav-list-item {
        & .nav-list-item-title {
          font-size: $medium-font-size;
          color: var(--v-text-base);
          transition: 0.3s linear;
        }

        &:hover > .nav-list-item-title {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
