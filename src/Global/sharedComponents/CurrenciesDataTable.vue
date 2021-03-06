<template>
  <v-data-table
    :items="dataTableItems"
    item-key="name"
    :items-per-page="itemsPerPage"
    :page="selectedPage"
    :headers="dataTableHeaders"
    :item-class="() => 'currencies-table-item'"
    :single-select="true"
    :style="
      !isDataTableSimple
        ? ''
        : 'background: transparent !important; border: none !important;'
    "
    @click:row="handleRowClick"
    @dblclick:row="$emit('rowDblClicked')"
    hide-default-footer
    fixed-header
    height="90%"
  >
    <!-- Slot for price percent change in 24h -->
    <template v-slot:[`item.quotes.USD.percent_change_24h`]="{ item }">
      <td
        :style="
          item.quotes.USD.percent_change_24h < 0
            ? 'color: var(--v-error-base) !important'
            : 'color: var(--v-success-base) !important'
        "
      >
        {{ item.quotes.USD.percent_change_24h }}
      </td>
    </template>
    <!-- -->

    <!-- Slot for price percent change in 7d -->
    <template v-slot:[`item.quotes.USD.percent_change_7d`]="{ item }">
      <td
        :style="
          item.quotes.USD.percent_change_7d < 0
            ? 'color: var(--v-error-base) !important'
            : 'color: var(--v-success-base) !important'
        "
      >
        {{ item.quotes.USD.percent_change_7d }}
      </td>
    </template>
    <!--  -->

    <!-- Slot for circulating supply -->
    <template v-slot:[`item.circulating_supply`]="{ item }">
      <td>{{ item.circulating_supply }} {{ item.symbol }}</td>
    </template>
    <!-- -->

    <!-- Slot for action buttons (observation) -->
    <template v-slot:[`item.actions`]="{ item }">
      <div class="actions__container">
        <v-icon
          small
          class="favorite-icon data-table-icon mr-5"
          :style="
            item.isObserved ? 'color: var(--v-warning-base) !important' : ''
          "
          @click="$emit('favoriteIconClicked', item)"
        >
          {{ "mdi-star" }}
        </v-icon>
      </div>
    </template>
    <!-- -->

    <!-- Slot for custom DataTable footer -->
    <template v-slot:footer>
      <div
        v-if="!isDataTableSimple"
        class="data-table-footer__container d-flex align-start justify-space-between"
      >
        <ItemsPerPage v-model="itemsPerPage" />
        <div class="pagination__wrapper d-flex justify-end">
          <Pagination
            v-if="totalPages > 1"
            v-model="selectedPage"
            :total-pages="totalPages"
          />
        </div>
      </div>
    </template>
    <!-- -->
  </v-data-table>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  PropType,
  ref,
  watch,
} from "@vue/composition-api";
import PageIndexButtons from "@/Global/sharedComponents/Pagination.vue";
import { CurrencyDataModel } from "@/App/models/CurrencyDataModel";
import { DataTableHeader, DataTableItemProps } from "vuetify";
import Pagination from "@/Global/sharedComponents/Pagination.vue";
import ItemsPerPage from "@/Global/sharedComponents/ItemsPerPage.vue";

export default defineComponent({
  emits: [
    "input",
    "showDetails",
    "addToFavorite",
    "removeFromFavorite",
    "rowDblClicked",
    "favoriteIconClicked",
  ],
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
    simpleDataTable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const isDeleteButtonVisible = ref(false);
    const isDataTableSimple = ref(props.simpleDataTable);
    const dataTableHeaders = ref(props.headers);
    const dataTableItems = computed(() => props.items);
    const selectedListItem = computed({
      get: () => props.value,
      set: (value) => {
        emit("input", value);
      },
    });
    const selectedPage = ref(1);
    const itemsPerPage = ref(10);
    const totalPages = computed(() =>
      Math.ceil(props.items.length / itemsPerPage.value)
    );

    function handleRowClick(
      clickedCurrency: CurrencyDataModel,
      row: DataTableItemProps
    ) {
      row.select(true);
      const selectedItemsArray = [];
      selectedItemsArray.push(clickedCurrency);
      selectedListItem.value = selectedItemsArray[0];
    }

    watch(itemsPerPage, () => {
      selectedPage.value = 1;
    });

    return {
      isDataTableSimple,
      selectedListItem,
      selectedPage,
      isDeleteButtonVisible,
      totalPages,
      itemsPerPage,
      dataTableItems,
      dataTableHeaders,
      handleRowClick,
    };
  },
  components: {
    PageIndexButtons,
    Pagination,
    ItemsPerPage,
  },
});
</script>

<style lang="scss" scoped>
.v-data-table::v-deep {
  overflow: auto;
  height: 100%;
  width: 100%;
  background: $dark-background-gradient;
  border: $base-border;
  border-radius: $base-border-radius;
  color: var(--v-text-base) !important;

  & .v-data-table-header {
    th {
      background: var(--v-primary-base) !important;
      color: var(--v-text-base) !important;
      padding: $small-padding 30px;
      .v-icon {
        color: var(--v-text-base) !important;
      }

      &.active {
        color: var(--v-accent-base) !important;

        & .v-icon {
          color: var(--v-accent-base) !important;
        }
      }

      & .v-data-table-header-mobile__wrapper {
        & .v-chip {
          background: var(--v-accent-base);
          color: var(--v-text-base);
        }

        & .v-input__slot {
          & label {
            color: var(--v-text-base) !important;
          }

          &::before {
            display: none;
          }
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

      @media (max-width: $mobile-width-breakpoint) {
        height: fit-content !important;
        border-bottom: thin solid var(--v-accent-base);
      }
    }
  }

  & .data-table-footer__container {
    border-top: thin solid rgba(0, 0, 0, 0.12);
    padding: $small-padding 30px;
  }

  .pagination__wrapper {
    height: 40px;
    width: fit-content !important;
  }
}
</style>
