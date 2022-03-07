<template>
  <div class="page-index__wrapper d-flex justify-end">
    <v-pagination
      v-model="page"
      :length="pagesAmount"
      :total-visible="5"
      circle
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  emits: ['input'],
  props: {
    value: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const page = computed({
      get: () => props.value,
      set: (newPageIndex) => {
        emit('input', newPageIndex);
      },
    });
    const pagesAmount = computed(() => props.totalPages);
    return { page, pagesAmount };
  },
});
</script>

<style lang="scss" scoped>
.page-index__wrapper::v-deep {
  width: 100%;
  & .v-pagination__navigation,
  & .v-pagination__item {
    background: transparent !important;
    color: var(--v-text-base) !important;
    box-shadow: none;
  }

  & .v-pagination__navigation {
    transition: 0.1s linear;

    & .v-icon {
      color: var(--v-text-base) !important;
    }

    &:hover {
      background: var(--v-accent-base) !important;
    }
  }

  .v-pagination__item {
    &--active {
      background: var(--v-accent-base) !important;
    }
  }
}
</style>
