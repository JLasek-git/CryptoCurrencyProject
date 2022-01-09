<template>
  <div class="currencies__wrapper d-flex flex-column align-center justify-end">
    <TabsNavigation />
    <List />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import List from '@/Global/sharedComponents/List.vue';
import TabsNavigation from '@/Global/sharedComponents/TabsNavigation.vue';

export default defineComponent({
  setup() {
    return {};
  },
  components: {
    List,
    TabsNavigation,
  },
});
</script>

<style lang="scss" scoped>
.currencies__wrapper {
  width: 100%;
  height: 100%;
}
</style>
