<template>
  <div class="custom-container__wrapper">Custom</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.custom-container__wrapper {
  width: 100%;
  height: 100%;
  background-color: var(--v-secondary-base);
  border: $base-border;
  border-radius: $base-border-radius;
}
</style>
