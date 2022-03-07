<template>
  <div class="items-per-page-select__container">
    <v-select
      v-model="selectedItemsAmount"
      class="items-per-page"
      :items="itemsPerPageOptions"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  emits: ['input'],
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
      set: (value) => emit('input', value),
    });
    return { itemsPerPageOptions, selectedItemsAmount };
  },
});
</script>

<style lang="scss" scoped>
.items-per-page-select__container::v-deep {
  width: 100%;
  max-width: 80px;

  .items-per-page {
    color: white !important;

    & .v-input__slot {
      &::before {
        border-color: white !important;
      }
    }

    & .v-icon {
      color: white;
    }

    & .v-select__selection {
      color: white;
    }
  }
}
</style>
