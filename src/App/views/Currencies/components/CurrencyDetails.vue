<template>
  <div class="currency-details__wrapper d-flex overflow-hidden">
    <div class="currency-info__container d-flex flex-column no-wrap pa-5">
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
    <v-card
      class="graph__container text--text pa-5 overflow-auto"
      max-width="600"
      elevation="0"
      color="transparent"
    >
    </v-card>
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

    return { currencyDetails, labels, values };
  },
  components: {
    InfoTextfield,
  },
});
</script>

<style lang="scss" scoped>
.currency-details__wrapper {
  max-height: 650px;
  .graph__container {
    border-left: $base-border !important;
    border-radius: 0 !important;
  }
}
</style>
