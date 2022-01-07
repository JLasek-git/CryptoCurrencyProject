<template>
  <nav class="navigation-drawer__wrapper"></nav>
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
.navigation-drawer__wrapper {
  height: 100%;
  max-width: 360px;
  min-width: 360px;
  background: var(--v-primary-base);
}
</style>
