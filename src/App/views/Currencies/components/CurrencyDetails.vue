<template>
  <div class="currency-details__wrapper d-flex flex-column">
    <v-text-field
      label="Name"
      readonly
      disabled
      class="c-info-textfield"
      :value="currencyDetails.name"
    />
    <v-text-field
      label="Price"
      readonly
      disabled
      class="c-info-textfield"
      :value="currencyDetails.price"
    />
    <v-text-field
      label="24h"
      readonly
      disabled
      class="c-info-textfield"
      :value="currencyDetails.day"
    />
    <v-text-field
      label="7d"
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
    <v-text-field
      label="Volume"
      readonly
      disabled
      class="c-info-textfield"
      :value="currencyDetails.volume"
    />
    <v-text-field
      label="Circulation"
      readonly
      disabled
      class="c-info-textfield"
      :value="currencyDetails.circulation"
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
