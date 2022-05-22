<template>
  <div class="main-view__wrapper d-flex">
    <v-icon
      class="hamburger-menu-icon"
      :class="isHamburgerMenuVisible ? 'hidden' : ''"
      @click="isHamburgerMenuVisible = true"
    >
      {{ "mdi-menu" }}
    </v-icon>
    <NavigationDrawer
      v-model="isHamburgerMenuVisible"
      v-if="$route.meta.isNavigationDrawerVisible"
    />
    <div class="slot-content__wrapper">
      <slot></slot>
    </div>
  </div>
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
.main-view__wrapper {
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
    right: 10px;
    top: 10px;
    position: fixed;
    transition: 0.1s linear;

    &.hidden {
      right: -40px;
    }
  }

  & .slot-content__wrapper {
    width: 100%;
    height: 100%;
    padding: $base-layout-padding;
  }
}
</style>
