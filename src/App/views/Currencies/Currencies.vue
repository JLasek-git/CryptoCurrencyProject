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
        @deleteClicked="removeCurrencyFromFavorite"
        :isShowDetailsBtnDisabled="selectedCurrency[0].name === ''"
        :isObserveBtnDisabled="selectedCurrency[0].name === ''"
        :observeButtonVisible="selectedCurrency[0].isObserved === false"
        :deleteBtnVisible="selectedCurrency[0].isObserved === true"
      />
    </div>
    <DefaultCurrencyPopup
      v-if="isDetailsPopupVisible"
      v-model="currencyDetails"
      @closeButtonClicked="isDetailsPopupVisible = false"
    >
      <div class="d-flex flex-column">
        <span>
          {{ currencyDetails.name }}
        </span>
        <span>
          {{ currencyDetails.price }}
        </span>
        <span>
          {{ currencyDetails.day }}
        </span>
        <span>
          {{ currencyDetails.week }}
        </span>
        <span>
          {{ currencyDetails.cap }}
        </span>
        <span>
          {{ currencyDetails.volume }}
        </span>
        <span>
          {{ currencyDetails.circulation }}
        </span>
      </div>
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
import { currenciesHeaders } from "@/App/views/Currencies/data/currenciesHeaders";
import DefaultCurrencyPopup from "@/Global/sharedComponents/DefaultCurrencyPopup.vue";
import ManagementButtons from "@/Global/sharedComponents/ManagementButtons.vue";
import { state } from "@/Global/data/store";
export default defineComponent({
  setup() {
    const currentWorkingMode = ref(CurrencyTypeEnum.Currencies);
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
      selectedCurrency.value[0].isObserved = true;
      await addCurrencyToFavorite(selectedCurrency.value[0]);
    }

    async function removeCurrencyFromFavorite(): Promise<void> {
      selectedCurrency.value[0].isObserved = false;
      await removeFavoriteCurrency(selectedCurrency.value[0].name);
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
