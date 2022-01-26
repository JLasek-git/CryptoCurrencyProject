<template>
  <v-data-table
    :items="allListItems"
    item-key="name"
    :item-class="() => 'currencies-table-item'"
    :headers="allListHeaders"
    single-select
    @click:row="handleRowClick"
    fixed-header
    height="90%"
  />
</template>

<script lang="ts">
import { defineComponent, computed, PropType, ref } from '@vue/composition-api';
import PageIndexButtons from '@/Global/sharedComponents/PageIndexButtons.vue';
import vuescroll from 'vuescroll';
import { CurrencyDataModel } from '@/App/models/CurrencyDataModel';
import { DataTableHeader, DataTableItemProps } from 'vuetify';

export default defineComponent({
  emits: ['input', 'showDetails', 'addToFavorite', 'removeFromFavorite'],
  props: {
    value: {
      type: Object as PropType<CurrencyDataModel>,
      required: true,
    },
    listItems: {
      type: Array as PropType<CurrencyDataModel[]>,
      required: true,
    },
    listHeaders: {
      type: Array as PropType<DataTableHeader[]>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const allListItems = computed(() => props.listItems);
    const allListHeaders = ref(props.listHeaders);
    const isDeleteButtonVisible = ref(false);
    const selectedListItem = computed({
      get: () => props.value,
      set: (value) => {
        emit('input', value);
      },
    });
    const selectedPageIndex = ref(1);

    function handleRowClick(
      clickedCurrency: CurrencyDataModel,
      row: DataTableItemProps
    ) {
      console.log(row);
      row.select(true);
      selectedListItem.value = clickedCurrency;
    }

    return {
      allListItems,
      allListHeaders,
      selectedListItem,
      selectedPageIndex,
      isDeleteButtonVisible,
      handleRowClick,
    };
  },
  components: {
    vuescroll,
    PageIndexButtons,
  },
});
</script>

<style lang="scss" scoped>
.v-data-table::v-deep {
  overflow: hidden;
  width: 100%;
  height: calc(100% - 150px);
  background: $dark-background-gradient;
  border: $base-border;
  border-radius: $base-border-radius;
  color: var(--v-text-base) !important;

  & .v-data-table-header {
    th {
      background: var(--v-primary-base) !important;
      color: var(--v-text-base) !important;
      padding: 0 30px;
      .v-icon {
        color: var(--v-text-base) !important;
      }

      &.active {
        color: var(--v-accent-base) !important;

        & .v-icon {
          color: var(--v-accent-base) !important;
        }
      }
    }
  }

  tbody {
    tr {
      cursor: pointer;
      height: 80px;

      &:hover {
        background: $active-gradient !important;
      }

      td {
        padding: 0 30px !important;
        min-width: 165px;
      }

      &.v-data-table__selected {
        background: $active-gradient !important;
      }
    }
  }

  & .v-data-footer {
    .v-icon {
      color: var(--v-accent-base);
    }

    & .v-select__selections {
      color: var(--v-text-base);
    }

    & .v-input__slot {
      &::before {
        border-color: var(--v-accent-base) !important;
      }
    }
  }
}
</style>
