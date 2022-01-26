<template>
  <div class="default-popup__wrapper d-flex justify-space-between align-center">
    <div class="navbar"></div>
    <div class="details-window mr-16"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.default-popup__wrapper {
  position: absolute;
  inset: 0 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 20;

  .navbar {
    width: 80px;
    background: blue;
    height: 100%;
  }

  .details-window {
    background: blue;
    width: 80%;
    height: 80%;
  }
}
</style>
