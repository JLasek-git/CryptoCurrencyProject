<template>
  <v-app class="app__wrapper d-flex">
    <NavigationDrawer
      v-model="isHamburgerMenuVisible"
      v-if="$route.meta.isNavigationDrawerVisible"
    />

    <v-main class="slot-content__wrapper">
      <v-icon
        v-if="$route.meta.isNavigationDrawerVisible"
        class="hamburger-menu-icon"
        @click="isHamburgerMenuVisible = true"
      >
        {{ "mdi-menu" }}
      </v-icon>
      <v-container class="page-content__container" fluid>
        <slot></slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import NavigationDrawer from "@/Global/sharedComponents/NavigationDrawer.vue";
import router from "vue-router";
export default defineComponent({
  setup() {
    const isHamburgerMenuVisible = ref(false);

    return {
      isHamburgerMenuVisible,
      router,
    };
  },
  components: {
    NavigationDrawer,
  },
});
</script>

<style lang="scss" scoped>
.app__wrapper::v-deep {
  position: relative;
  height: 100%;
  width: 100%;

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
