<template>
  <div class="currencies__wrapper d-flex flex-column align-center justify-end">
    <TabsNavigation
      v-model="currentWorkingMode"
      :available-tabs="availableCurrenciesModes"
    />
    <CurrenciesDataTable
      v-model="selectedCurrency"
      :items="allCurrencies"
      :headers="currenciesHeaders"
      @rowDblClicked="showCurrencyDetails"
      @favoriteIconClicked="handleFavoriteIconClicked"
      @deleteIconClicked="handleDeleteIconClicked"
    />

    <div class="buttons__wrapper mt-2">
      <ManagementButtons
        @observeClicked="addAsFavorite"
        @showDetailsClicked="showCurrencyDetails"
        @deleteClicked="removeFromFavorite"
        :isShowDetailsBtnDisabled="selectedCurrency[0].name === ''"
        :isObserveBtnDisabled="selectedCurrency[0].name === ''"
        :observeButtonVisible="selectedCurrency[0].isObserved === false"
        :deleteBtnVisible="selectedCurrency[0].isObserved === true"
      />
    </div>
    <DefaultCurrencyPopup
      v-model="isDetailsPopupVisible"
      :title="currencyDetails.name"
    >
      <CurrencyDetails :currency="currencyDetails" />
    </DefaultCurrencyPopup>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "@vue/composition-api";
import CurrenciesDataTable from "@/Global/sharedComponents/CurrenciesDataTable.vue";
import TabsNavigation from "@/Global/sharedComponents/TabsNavigation.vue";
import {
  availableCurrenciesModes,
  CurrencyTypeEnum,
} from "@/App/enums/CurrenciesEnums";
import { CurrencyDataModel } from "@/App/models/CurrencyDataModel";
import {
  getCurrencies,
  getCurrencyDetails,
  getTokens,
} from "@/App/services/currencies.service";
import {
  addItemToObserved,
  removeItemFromObserved,
} from "@/App/services/user.service";
import CurrencyDetails from "@/App/views/Currencies/components/CurrencyDetails.vue";
import { currenciesHeaders } from "@/App/views/Currencies/data/currenciesHeaders";
import DefaultCurrencyPopup from "@/Global/sharedComponents/DefaultCurrencyPopup.vue";
import ManagementButtons from "@/Global/sharedComponents/ManagementButtons.vue";
import { state } from "@/Global/data/store";
import Snackbar from "@/Global/sharedComponents/Snackbar.vue";
export default defineComponent({
  setup() {
    const { snackbarVariables } = state;
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

    async function addAsFavorite(): Promise<void> {
      await addItemToObserved(selectedCurrency.value[0]);
      selectedCurrency.value[0].isObserved = true;
      snackbarVariables.isCurrencyObserved = true;
    }

    async function removeFromFavorite(): Promise<void> {
      await removeItemFromObserved(selectedCurrency.value[0].id);
      selectedCurrency.value[0].isObserved = false;
      snackbarVariables.isCurrencyDeleted = true;
    }

    async function showCurrencyDetails(): Promise<void> {
      currencyDetails.value = await getCurrencyDetails(
        selectedCurrency.value[0].id,
        selectedCurrency.value[0].currencyType
      );
      isDetailsPopupVisible.value = true;
    }

    function handleFavoriteIconClicked(value: CurrencyDataModel): void {
      selectedCurrency.value[0] = value;
      if (selectedCurrency.value[0].isObserved) {
        removeFromFavorite();
      } else {
        addAsFavorite();
      }
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
      handleFavoriteIconClicked,
      currencyDetails,
      allCurrencies,
      selectedCurrency,
      currenciesHeaders,
      currentWorkingMode,
      availableCurrenciesModes,
      isDetailsPopupVisible,
      showCurrencyDetails,
      addAsFavorite,
      removeFromFavorite,
      snackbarVariables,
    };
  },
  components: {
    CurrenciesDataTable,
    TabsNavigation,
    DefaultCurrencyPopup,
    ManagementButtons,
    CurrencyDetails,
    Snackbar,
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
