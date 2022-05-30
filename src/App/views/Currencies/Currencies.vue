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
    />

    <div class="buttons__wrapper mt-2">
      <ManagementButtons
        @showDetailsClicked="showCurrencyDetails"
        :isShowDetailsBtnDisabled="selectedCurrency.name === ''"
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
import { defineComponent, ref } from "@vue/composition-api";
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
    const selectedCurrency = ref<CurrencyDataModel>(new CurrencyDataModel());

    setTimeout(() => {
      getCurrencies().then((response) => {
        allCurrencies.value = response;
      });
    }, 300);

    async function addAsFavorite(): Promise<void> {
      await addItemToObserved(selectedCurrency.value);
      selectedCurrency.value.isObserved = true;
      snackbarVariables.isCurrencyObserved = true;
    }

    async function removeFromFavorite(): Promise<void> {
      await removeItemFromObserved(selectedCurrency.value.id);
      selectedCurrency.value.isObserved = false;
      snackbarVariables.isCurrencyDeleted = true;
    }

    async function showCurrencyDetails(): Promise<void> {
      currencyDetails.value = await getCurrencyDetails(
        selectedCurrency.value.id
      );
      isDetailsPopupVisible.value = true;
    }

    function handleFavoriteIconClicked(value: CurrencyDataModel): void {
      selectedCurrency.value = value;
      if (selectedCurrency.value.isObserved) {
        removeFromFavorite();
      } else {
        addAsFavorite();
      }
    }

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
