<template>
  <v-list class="main-list"> </v-list>
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
.main-list {
  width: 100%;
  height: calc(100% - 100px);
  background: $dark-background-gradient;
  border: $base-border;
  border-radius: $base-border-radius;
}
</style>
