<template>
  <div
    class="currency-details__wrapper d-flex justify-space-between aling-start flex-wrap"
  >
    <div class="info-textfields-container">
      <v-text-field
        label="Price"
        readonly
        disabled
        class="c-info-textfield"
        :value="currencyDetails.price"
      />
      <v-text-field
        label="24h %"
        readonly
        disabled
        class="c-info-textfield"
        :value="currencyDetails.day"
      />
    </div>
    <div class="info-textfields-container">
      <v-text-field
        label="7d %"
        readonly
        disabled
        class="c-info-textfield"
        :value="currencyDetails.week"
      />
      <v-text-field
        label="Cap"
        readonly
        disabled
        class="c-info-textfield"
        :value="currencyDetails.cap"
      />
    </div>
    <div class="info-textfields-container">
      <v-text-field
        label="Volume(24h)"
        readonly
        disabled
        class="c-info-textfield"
        :value="currencyDetails.volume"
      />
      <v-text-field
        label="Circulating Supply"
        readonly
        disabled
        class="c-info-textfield"
        :value="currencyDetails.circulation"
      />
    </div>
    <v-sparkline
      :value="currencyDetails.priceChanges"
      color="white"
      line-width="2"
      width="500"
      padding="16"
    />
  </div>
</template>

<script lang="ts">
import { CurrencyDataModel } from "@/App/models/CurrencyDataModel";
import { defineComponent, PropType, ref } from "@vue/composition-api";

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
});
</script>

<style lang="scss" scoped></style>
