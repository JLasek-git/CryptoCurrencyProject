<template>
  <div class="currencies__wrapper d-flex flex-column align-center justify-end">
    <TabsNavigation
      v-model="currentWorkingMode"
      :available-tabs="availableCurrenciesModes"
    />
    <DataTable
      v-model="selectedCurrency"
      :items="allCurrencies"
      :headers="currenciesHeaders"
      @rowDblClicked="showCurrencyDetails"
    />
    <div class="buttons__wrapper mt-2">
      <ManagementButtons
        @observeClicked="addCurrencyAsFavorite"
        @showDetailsClicked="showCurrencyDetails"
        @deleteClicked="removeCurrencyFromFavorite"
        :isShowDetailsBtnDisabled="selectedCurrency[0].name === ''"
        :isObserveBtnDisabled="selectedCurrency[0].name === ''"
        :observeButtonVisible="selectedCurrency[0].isObserved === false"
        :deleteBtnVisible="selectedCurrency[0].isObserved === true"
      />
    </div>
    <DefaultCurrencyPopup
      v-model="isDetailsPopupVisible"
      :title="currencyDetails.name"
      @closeButtonClicked="isDetailsPopupVisible = false"
    >
      <CurrencyDetails :currency="currencyDetails" />
    </DefaultCurrencyPopup>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "@vue/composition-api";
import DataTable from "@/Global/sharedComponents/DataTable.vue";
import TabsNavigation from "@/Global/sharedComponents/TabsNavigation.vue";
import {
  availableCurrenciesModes,
  CurrencyTypeEnum,
} from "@/App/enums/CurrenciesEnums";
import { CurrencyDataModel } from "@/App/models/CurrencyDataModel";
import {
  getCurrencies,
  addCurrencyToFavorite,
  removeFavoriteCurrency,
  getCurrencyDetails,
  getTokens,
} from "@/App/services/currencies.service";
import CurrencyDetails from "@/App/views/Currencies/components/CurrencyDetails.vue";
import { currenciesHeaders } from "@/App/views/Currencies/data/currenciesHeaders";
import DefaultCurrencyPopup from "@/Global/sharedComponents/DefaultCurrencyPopup.vue";
import ManagementButtons from "@/Global/sharedComponents/ManagementButtons.vue";
import { state } from "@/Global/data/store";
export default defineComponent({
  setup() {
    const isDetailsPopupVisible = ref(false);
    const currentWorkingMode = ref(CurrencyTypeEnum.Currencies);
    const allCurrencies = ref<CurrencyDataModel[]>([]);
    const currencyDetails = ref<CurrencyDataModel>(new CurrencyDataModel());
    const selectedCurrency = ref<CurrencyDataModel[]>([
      new CurrencyDataModel(),
    ]);
    getCurrencies().then((response) => {
      allCurrencies.value = response;
    });

    async function addCurrencyAsFavorite(): Promise<void> {
      await addCurrencyToFavorite(selectedCurrency.value[0]);
      selectedCurrency.value[0].isObserved = true;
    }

    async function removeCurrencyFromFavorite(): Promise<void> {
      await removeFavoriteCurrency(selectedCurrency.value[0].id);
      selectedCurrency.value[0].isObserved = false;
    }

    async function showCurrencyDetails(): Promise<void> {
      currencyDetails.value = await getCurrencyDetails(
        selectedCurrency.value[0].id,
        currentWorkingMode.value
      );

      isDetailsPopupVisible.value = true;
    }

    watch(currentWorkingMode, () => {
      switch (currentWorkingMode.value) {
        case CurrencyTypeEnum.Currencies:
          getCurrencies().then((response) => {
            allCurrencies.value = response;
          });
          break;
        case CurrencyTypeEnum.Tokens:
          getTokens().then((response) => {
            allCurrencies.value = response;
          });
          break;
        default:
          break;
      }
    });

    return {
      state,
      currencyDetails,
      allCurrencies,
      selectedCurrency,
      currenciesHeaders,
      currentWorkingMode,
      availableCurrenciesModes,
      isDetailsPopupVisible,
      showCurrencyDetails,
      addCurrencyAsFavorite,
      removeCurrencyFromFavorite,
    };
  },
  components: {
    DataTable,
    TabsNavigation,
    DefaultCurrencyPopup,
    ManagementButtons,
    CurrencyDetails,
  },
});
</script>

<style lang="scss" scoped>
.currencies__wrapper {
  width: 100%;
  height: 100%;

  .buttons__wrapper {
    min-height: 40px !important;
    width: 100%;
  }
}
</style>
