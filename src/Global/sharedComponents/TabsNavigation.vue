<template>
  <v-tabs
    class="tabs-navigation-items__wrapper d-flex align-end justify-start px-5"
    height="60px"
    v-model="selectedTab"
    active-class="tabs-item-active"
    :hide-slider="true"
  >
    <v-tab class="tabs-nav-item" v-for="(tab, i) in tabsToSelect" :key="i">
      {{ tab.displayName }}
    </v-tab>
  </v-tabs>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from "@vue/composition-api";
import { TabsNavigationItem } from "@/Global/interfaces/TabsNavigationItem";
export default defineComponent({
  emits: ["input"],
  props: {
    value: {
      type: Number,
      default: 0,
    },
    availableTabs: {
      type: Array as PropType<TabsNavigationItem[]>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const selectedTab = computed({
      get: () => props.value,
      set: (value) => {
        emit("input", value);
      },
    });
    const tabsToSelect = ref(props.availableTabs);

    return { selectedTab, tabsToSelect };
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
        height: 40px;
        background: var(--v-secondary-base);
        border-radius: $base-border-radius $base-border-radius 0 0;
        border: $base-border;
        border-bottom: none;
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
