<template>
  <v-data-table
    v-bind="{ ...$attrs, ...$props }"
    item-key="name"
    items-per-page="2"
    :page="selectedPage"
    :item-class="() => 'currencies-table-item'"
    single-select
    @click:row="handleRowClick"
    hide-default-footer
    fixed-header
    height="90%"
  >
    <template v-slot:footer>
      <div
        class="data-table-footer__container d-flex align-center justify-end px-5"
      >
        <Pagination
          v-model="selectedPage"
          :total-pages="paginationPagesAmount"
        />
      </div>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, ref } from '@vue/composition-api';
import PageIndexButtons from '@/Global/sharedComponents/Pagination.vue';
import { CurrencyDataModel } from '@/App/models/CurrencyDataModel';
import { DataTableHeader, DataTableItemProps } from 'vuetify';
import Pagination from '@/Global/sharedComponents/Pagination.vue';

export default defineComponent({
  emits: ['input', 'showDetails', 'addToFavorite', 'removeFromFavorite'],
  props: {
    value: {
      type: Object as PropType<CurrencyDataModel>,
      required: true,
    },
    items: {
      type: Array as PropType<CurrencyDataModel[]>,
      required: true,
    },
    headers: {
      type: Array as PropType<DataTableHeader[]>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const isDeleteButtonVisible = ref(false);
    const selectedListItem = computed({
      get: () => props.value,
      set: (value) => {
        emit('input', value);
      },
    });
    const selectedPage = ref(1);

    function handleRowClick(
      clickedCurrency: CurrencyDataModel,
      row: DataTableItemProps
    ) {
      row.select(true);
      selectedListItem.value = clickedCurrency;
    }

    return {
      selectedListItem,
      selectedPage,
      isDeleteButtonVisible,
      handleRowClick,
    };
  },
  components: {
    PageIndexButtons,
    Pagination,
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

  & .data-table-footer__container {
    width: 100%;
    height: 75px;
    border-top: thin solid rgba(0, 0, 0, 0.12);
  }
}
</style>
