<template>
  <div class="items-per-page-select__container">
    <v-select
      v-model="selectedItemsAmount"
      class="items-per-page"
      :items="itemsPerPageOptions"
      :menu-props="{ minWidth: 80 }"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  emits: ["input"],
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const itemsPerPageOptions = ref([3, 5, 10, 20, 30, 40, 50]);
    const selectedItemsAmount = computed({
      get: () => props.value,
      set: (value) => emit("input", value),
    });
    return { itemsPerPageOptions, selectedItemsAmount };
  },
});
</script>

<style lang="scss" scoped>
.items-per-page-select__container::v-deep {
  width: 100%;
  max-width: 50px !important;

  .items-per-page {
    color: var(--v-text-base) !important;

    padding-top: 0 !important;
    margin-top: 0 !important;

    & .v-input__slot {
      margin-bottom: 0 !important;
      &::before {
        border-color: var(--v-text-base) !important;
      }
    }

    & .v-icon {
      color: var(--v-text-base);
    }

    & .v-select__selection {
      color: var(--v-text-base);
    }
  }
}
</style>
