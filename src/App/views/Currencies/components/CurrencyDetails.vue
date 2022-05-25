<template>
  <div class="currency-details__wrapper d-flex justify-space-between">
    <div class="currency-info__container d-flex flex-column no-wrap">
      <InfoTextfield
        :infoValue="currencyDetails.quotes.USD.price"
        infoSuffix="$"
        infoLabel="Price"
      />
      <InfoTextfield
        :infoValue="currencyDetails.quotes.USD.percent_change_24h"
        infoSuffix="%"
        infoLabel="Price change(24h)"
      />

      <InfoTextfield
        :infoValue="currencyDetails.quotes.USD.volume_24h"
        infoSuffix="$"
        infoLabel="Trading Volume(24h)"
      />
      <InfoTextfield
        :infoValue="currencyDetails.quotes.USD.volume_24h_change_24h"
        infoSuffix="%"
        infoLabel="Trading Volume Change(24h)"
      />
      <InfoTextfield
        :infoValue="
          currencyDetails.quotes.USD.volume_24h /
          currencyDetails.quotes.USD.market_cap
        "
        infoSuffix="$"
        infoLabel="Volume / Market Cap"
      />
      <InfoTextfield
        :infoValue="currencyDetails.rank"
        infoSuffix=""
        infoLabel="Market Rank"
      />
      <InfoTextfield
        :infoValue="currencyDetails.quotes.USD.market_cap"
        infoSuffix="$"
        infoLabel="Market Cap"
      />
    </div>
    <div class="graph__container">Spark</div>
  </div>
</template>

<script lang="ts">
import { CurrencyDataModel } from "@/App/models/CurrencyDataModel";
import { defineComponent, PropType, ref } from "@vue/composition-api";
import InfoTextfield from "@/Global/sharedComponents/InfoTextfield.vue";

export default defineComponent({
  props: {
    currency: {
      type: Object as PropType<CurrencyDataModel>,
      default: new CurrencyDataModel(),
    },
  },
  setup(props) {
    const currencyDetails = ref(props.currency);

    return { currencyDetails };
  },
  components: {
    InfoTextfield,
  },
});
</script>

<style lang="scss" scoped>
.graph__container {
  width: 400px;
}
</style>
