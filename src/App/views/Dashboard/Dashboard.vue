<template>
  <div class="dashboard__wrapper d-flex justify-space-between align-center">
    <div
      class="multiple-items-row__container d-flex justify-space-between overflow-auto"
    >
      <CustomContainer iconBgColor="#dfbb1a" iconName="trending-up" />
      <CustomContainer iconBgColor="#9b9b9b" iconName="trending-down" />
      <CustomContainer iconBgColor="#ee8e34" iconName="flame" />
    </div>
    <div class="long-row__container">
      <CustomContainer>
        <DataTable
          v-if="favoriteCurrencies.length > 0"
          :items="favoriteCurrencies"
          :headers="currenciesHeaders"
          simpleDataTable
        />
      </CustomContainer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import CustomContainer from "@/Global/sharedComponents/CustomContainer.vue";
import DataTable from "@/Global/sharedComponents/DataTable.vue";
import { getFavoriteCurrencies } from "@/App/services/currencies.service";
import { CurrencyDataModel } from "@/App/models/CurrencyDataModel";
import { currenciesHeaders } from "@/App/views/Currencies/data/currenciesHeaders";

export default defineComponent({
  setup() {
    const favoriteCurrencies = ref<CurrencyDataModel[]>([]);
    getFavoriteCurrencies().then((response) => {
      favoriteCurrencies.value = response;
    });
    return {
      currenciesHeaders,
      favoriteCurrencies,
    };
  },
  components: {
    DataTable,
    CustomContainer,
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
  }
}
</style>
