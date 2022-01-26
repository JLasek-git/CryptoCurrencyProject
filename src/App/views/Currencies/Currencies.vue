<template>
  <div class="currencies__wrapper d-flex flex-column align-center justify-end">
    <TabsNavigation
      v-model="currentWorkingMode"
      :available-tabs="availableCurrenciesModes"
    />
    <List
      v-model="selectedCurrency"
      :list-items="allCurrencies"
      :list-headers="currenciesHeaders"
    />
    <v-btn @click="showCurrencyDetails">Click me</v-btn>
    <DefaultPopup v-model="isDetailsPopupVisible" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@vue/composition-api';
import List from '@/Global/sharedComponents/List.vue';
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
    const isDetailsPopupVisible = ref(true);
    getCurrencies().then((response) => {
      allCurrencies.value = response;
    });

    async function addCurrencyAsFavorite() {
      await addCurrencyToFavorite(selectedCurrency.value);
    }

    async function removeCurrencyFromFavorite() {
      await removeFavoriteCurrency(selectedCurrency.value.id);
    }

    async function showCurrencyDetails() {
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
    List,
    TabsNavigation,
    DefaultPopup,
  },
});
</script>

<style lang="scss" scoped>
.currencies__wrapper {
  width: 100%;
  height: 100%;
}
</style>
