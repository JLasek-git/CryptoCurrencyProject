<template>
  <v-navigation-drawer
    v-model="isHamburgerMenuVisible"
    absolute
    temporary
    class="navigation-drawer__wrapper"
  >
    <v-icon
      class="hamburger-close-icon"
      @click="isHamburgerMenuVisible = false"
    >
      {{ "mdi-close" }}
    </v-icon>
    <div>
      <div class="profile-info d-flex flex-column justify-center align-center">
        <v-img
          class="profile-avatar"
          src="../assets/noUserImg.png"
          alt="User avatar"
          contain
        />
        <h3 class="profile-name mt-2">Username</h3>
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
    </div>

    <div
      class="logout-button__container d-flex justify-center align-center py-10"
    >
      <v-btn class="c-button-delete" @click="logoutUser">Logout</v-btn>
    </div>
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
  border-top-right-radius: 25px;
  min-width: 300px;
  .profile-info {
    max-height: 220px;
    min-height: 220px;
    color: var(--v-text-base);

    & .profile-avatar {
      max-height: 90px !important;
      max-width: 90px !important;
      border-radius: 50%;
    }
  }
  .v-navigation-drawer__content {
    position: relative;
    background: $dark-background-gradient;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .hamburger-close-icon {
      position: absolute;
      right: 10px;
      top: 10px;
      font-size: 32px;
      color: var(--v-accent-base);
    }
    & .v-list {
      background: transparent;
      height: fit-content;
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
