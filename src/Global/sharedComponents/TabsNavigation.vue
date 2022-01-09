<template>
  <v-tabs
    class="tabs-navigation-items__wrapper d-flex align-end justify-start px-5"
    height="60px"
    active-class="tabs-item-active"
    :hide-slider="true"
  >
    <v-tab class="tabs-nav-item" v-for="(tab, i) in tabsItems" :key="i">
      {{ tab.name }}
    </v-tab>
  </v-tabs>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const tabsItems = ref([
      {
        name: 'Currencies',
      },
      {
        name: 'Tokens',
      },
    ]);

    return { tabsItems };
  },
});
</script>

<style lang="scss" scoped>
.tabs-navigation-items__wrapper::v-deep {
  & .v-item-group {
    background: transparent !important;

    & .v-slide-group__content {
      align-items: flex-end;

      & .tabs-nav-item {
        color: var(--v-text-base) !important;
        text-transform: none !important;
        width: 140px;
        height: 45px;
        background: var(--v-secondary-base);
        border-radius: $base-border-radius $base-border-radius 0 0;
        border: $base-border;
        transition: 0.2s linear;

        &::before {
          border-radius: $base-border-radius $base-border-radius 0 0;
        }

        &.tabs-item-active {
          height: 50px;
          background: var(--v-primary-base);
          font-weight: bold;
        }
      }
    }
  }
}
</style>
