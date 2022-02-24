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
    <div class="buttons__wrapper d-flex justify-end mt-2">
      <v-btn
        :disabled="selectedCurrency.name === ''"
        class="c-button-base mx-3"
        elevation="0"
        @click="showCurrencyDetails"
      >
        Show details
      </v-btn>
      <v-btn
        :disabled="selectedCurrency.name === ''"
        class="c-button-base--outlined"
        elevation="0"
        @click="observeCurrency"
      >
        Observe
      </v-btn>
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

export default defineComponent({
  setup() {
    const currentWorkingMode = ref(CurrenciesWorkingModeEnum.Currencies);
    const allCurrencies = ref<CurrencyDataModel[]>([]);
    const currencyDetails = ref<CurrencyDataModel>(new CurrencyDataModel());
    const selectedCurrency = ref<CurrencyDataModel>(new CurrencyDataModel());
    const isDetailsPopupVisible = ref(false);
    getCurrencies().then((response) => {
      allCurrencies.value = response;
    });

    async function addCurrencyAsFavorite(): Promise<void> {
      await addCurrencyToFavorite(selectedCurrency.value);
    }

    async function removeCurrencyFromFavorite(): Promise<void> {
      await removeFavoriteCurrency(selectedCurrency.value.id);
    }

    async function showCurrencyDetails(): Promise<void> {
      currencyDetails.value = await getCurrencyDetails(
        selectedCurrency.value.id
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
  },
});
</script>

<style lang="scss" scoped>
.currencies__wrapper {
  width: 100%;
  height: 100%;

  & .buttons__wrapper {
    min-height: 40px;
    width: 100%;
  }
}
</style>
