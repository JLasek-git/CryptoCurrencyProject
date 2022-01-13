<template>
  <v-navigation-drawer class="navigation-drawer__wrapper" width="300">
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
          <v-icon class="mr-4" color="text">{{ appRoute.routeIcon }}</v-icon>
          <v-list-item-title class="nav-list-item-title">
            {{ appRoute.routeName }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { appAvailableRoutes } from '@/App/enums/AppRoutesEnums';

export default defineComponent({
  setup() {
    return { appAvailableRoutes };
  },
});
</script>

<style lang="scss" scoped>
.navigation-drawer__wrapper::v-deep {
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
