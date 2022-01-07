<template>
  <v-navigation-drawer class="navigation-drawer__wrapper" width="300">
    <div class="profile-info d-flex flex-column justify-center align-center">
      <div class="profile-avatar"></div>
      <h3 class="profile-name">Username</h3>
    </div>
    <v-list flat>
      <v-list-item-group>
        <v-list-item
          v-for="navTab in navigationTabs"
          :key="navTab"
          class="nav-list-item"
          active-class="item-active"
        >
          <v-list-item-title class="nav-list-item-title">
            {{ navTab }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const navigationTabs = ref([
      'Dashboard',
      'Currencies',
      'Followed',
      'Trending',
      'Info',
      'Profile',
    ]);

    return { navigationTabs };
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
      width: 110px;
      height: 110px;
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
        }
      }
    }
  }
}
</style>
