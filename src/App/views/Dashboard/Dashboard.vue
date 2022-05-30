<template>
  <div class="dashboard__wrapper d-flex justify-space-between align-center">
    <div
      class="multiple-items-row__container d-flex justify-space-between overflow-auto"
    >
      <CustomContainer
        iconBgColor="#dfbb1a"
        iconName="trophy-outline"
        containerTitle="Top rank"
      >
        <DashboardCurrencyItem
          v-for="currency in topCurrencies"
          :key="currency.id"
          :currencyName="currency.name"
          :infoToDisplay="currency.rank"
          @itemClicked="showCurrencyDetails(currency.id)"
        />
      </CustomContainer>
      <CustomContainer iconBgColor="#9b9b9b" iconName="trending-down">
      </CustomContainer>
      <CustomContainer iconBgColor="#ee8e34" iconName="flame">
      </CustomContainer>
    </div>
    <div class="long-row__container">
      <CustomContainer>
        <CurrenciesDataTable
          v-if="favoriteCurrencies.length > 0"
          v-model="selectedCurrency"
          :items="favoriteCurrencies"
          :headers="currenciesHeaders"
          @rowDblClicked="showCurrencyDetails"
          @favoriteIconClicked="handleFavoriteIconClicked"
          simpleDataTable
        />
      </CustomContainer>
    </div>
    <DefaultCurrencyPopup
      :title="currencyDetails.name"
      v-model="isPopupVisible"
    >
      <CurrencyDetails :currency="currencyDetails" />
    </DefaultCurrencyPopup>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import CustomContainer from "@/Global/sharedComponents/CustomContainer.vue";
import CurrenciesDataTable from "@/Global/sharedComponents/CurrenciesDataTable.vue";
import {
  getCurrencyDetails,
  getTopRankCurrencies,
} from "@/App/services/currencies.service";
import {
  getUserObservedItems,
  removeItemFromObserved,
} from "@/App/services/user.service";
import CurrencyDetails from "@/App/views/Currencies/components/CurrencyDetails.vue";
import { CurrencyDataModel } from "@/App/models/CurrencyDataModel";
import { currenciesHeaders } from "@/App/views/Currencies/data/currenciesHeaders";
import DefaultCurrencyPopup from "@/Global/sharedComponents/DefaultCurrencyPopup.vue";
import { state } from "@/Global/data/store";
import DashboardCurrencyItem from "@/App/views/Dashboard/components/DashbordCurrencyItem.vue";
import { CurrencyListModel } from "@/App/models/CurrencyListModel";

export default defineComponent({
  setup() {
    const favoriteCurrencies = ref<CurrencyDataModel[]>([]);
    const isPopupVisible = ref(false);
    const topCurrencies = ref<CurrencyListModel[]>([]);
    const selectedCurrency = ref<CurrencyDataModel[]>([]);
    const currencyDetails = ref(new CurrencyDataModel());
    const { snackbarVariables } = state;

    getUserObservedItems().then((response) => {
      favoriteCurrencies.value = response;
    });

    getTopRankCurrencies().then((response) => {
      topCurrencies.value = response;
    });

    async function showCurrencyDetails(id?: string): Promise<void> {
      if (id) {
        currencyDetails.value = await getCurrencyDetails(id);
      } else {
        currencyDetails.value = await getCurrencyDetails(
          selectedCurrency.value[0].id
        );
      }
      isPopupVisible.value = true;
    }

    function handleFavoriteIconClicked(value: CurrencyDataModel): void {
      selectedCurrency.value[0] = value;
      removeItemFromObserved(selectedCurrency.value[0].id);
      selectedCurrency.value[0].isObserved = false;

      snackbarVariables.isCurrencyDeleted = true;
    }

    return {
      handleFavoriteIconClicked,
      showCurrencyDetails,
      isPopupVisible,
      selectedCurrency,
      currenciesHeaders,
      favoriteCurrencies,
      currencyDetails,
      topCurrencies,
    };
  },
  components: {
    CurrenciesDataTable,
    CustomContainer,
    DefaultCurrencyPopup,
    CurrencyDetails,
    DashboardCurrencyItem,
  },
});
</script>

<style lang="scss" scoped>
.dashboard__wrapper {
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  color: var(--v-text-base);

  & .multiple-items-row__container {
    width: 100%;
    height: 40%;

    & > * {
      margin-left: 24px;

      &:nth-child(1) {
        margin-left: 0 !important;
      }
    }
  }

  & .long-row__container {
    width: 100%;
    height: 50%;

    @media (max-width: $mobile-width-breakpoint) {
      margin-top: 24px;
      height: 100%;
    }
  }
}
</style>
