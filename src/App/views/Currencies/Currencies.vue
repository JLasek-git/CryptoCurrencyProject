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
    />
    <div class="buttons__wrapper mt-2">
      <ManagementButtons
        @observeClicked="addCurrencyAsFavorite"
        @showDetailsClicked="showCurrencyDetails"
        :isShowDetailsBtnDisabled="selectedCurrency[0].name === ''"
        :isObserveBtnDisabled="selectedCurrency[0].name === ''"
      />
    </div>
    <DefaultPopup v-model="isDetailsPopupVisible" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@vue/composition-api';
import DataTable from '@/Global/sharedComponents/DataTable.vue';
import TabsNavigation from '@/Global/sharedComponents/TabsNavigation.vue';
import {
  availableCurrenciesModes,
  CurrenciesWorkingModeEnum,
} from '@/App/enums/CurrenciesEnums';
import { CurrencyDataModel } from '@/App/models/CurrencyDataModel';
import {
  getCurrencies,
  addCurrencyToFavorite,
  removeFavoriteCurrency,
  getCurrencyDetails,
  getTokens,
} from '@/App/services/currencies.service';
import { currenciesHeaders } from '@/App/views/Currencies/data/currenciesHeaders';
import DefaultPopup from '@/Global/sharedComponents/DefaultPopup.vue';
import ManagementButtons from '@/Global/sharedComponents/ManagementButtons.vue';

export default defineComponent({
  setup() {
    const currentWorkingMode = ref(CurrenciesWorkingModeEnum.Currencies);
    const allCurrencies = ref<CurrencyDataModel[]>([]);
    const currencyDetails = ref<CurrencyDataModel>(new CurrencyDataModel());
    const selectedCurrency = ref<CurrencyDataModel[]>([
      new CurrencyDataModel(),
    ]);
    const isDetailsPopupVisible = ref(false);
    getCurrencies().then((response) => {
      allCurrencies.value = response;
    });

    async function addCurrencyAsFavorite(): Promise<void> {
      await addCurrencyToFavorite(selectedCurrency.value[0]);
    }

    async function removeCurrencyFromFavorite(): Promise<void> {
      await removeFavoriteCurrency(selectedCurrency.value[0].id);
    }

    async function showCurrencyDetails(): Promise<void> {
      currencyDetails.value = await getCurrencyDetails(
        selectedCurrency.value[0].id
      );

      isDetailsPopupVisible.value = true;
    }

    watch(currentWorkingMode, () => {
      switch (currentWorkingMode.value) {
        case CurrenciesWorkingModeEnum.Currencies:
          getCurrencies().then((response) => {
            allCurrencies.value = response;
          });
          break;
        case CurrenciesWorkingModeEnum.Tokens:
          getTokens().then((response) => {
            allCurrencies.value = response;
          });
          break;
        default:
          break;
      }
    });

    return {
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
    DefaultPopup,
    ManagementButtons,
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
