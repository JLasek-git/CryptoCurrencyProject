<template>
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
      @itemClicked="$emit('dashboardItemClicked', currency.id)"
    />
  </CustomContainer>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import DashboardCurrencyItem from "@/App/views/Dashboard/components/DashbordCurrencyItem.vue";
import CustomContainer from "@/Global/sharedComponents/CustomContainer.vue";
import { CurrencyListModel } from "@/App/models/CurrencyListModel";
import { getTopRankCurrencies } from "@/App/services/currencies.service";

export default defineComponent({
  emits: ["dashboardItemClicked"],
  setup() {
    const topCurrencies = ref<CurrencyListModel[]>([]);

    getTopRankCurrencies().then((response) => {
      topCurrencies.value = response;
    });

    return {
      topCurrencies,
    };
  },
  components: {
    DashboardCurrencyItem,
    CustomContainer,
  },
});
</script>
