<template>
  <div class="main-view__wrapper d-flex">
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
  height: 100%;
  width: 100%;

  & .slot-content__wrapper {
    width: 100%;
    height: 100%;
    padding: $base-layout-padding;
  }
}
</style>
