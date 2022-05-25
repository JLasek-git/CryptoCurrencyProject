<template>
  <div class="mx-5 py-5 currency-item__container d-flex justify-space-between">
    <span class="currency-name"> Currency name </span>
    <span> {{ 51.21 }}% </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
.currency-item__container {
  border-bottom: $base-border;

  .currency-name {
    font-weight: bold;
  }
}
</style>
