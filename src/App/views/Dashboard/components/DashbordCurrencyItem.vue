<template>
  <div
    class="mx-5 py-5 currency-item__container d-flex justify-space-between"
    @click="$emit('itemClicked')"
  >
    <span class="currency-name"> {{ name }} </span>
    <span> {{ info }} </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  emits: ["itemClicked"],
  props: {
    currencyName: {
      type: String,
      required: true,
    },
    infoToDisplay: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const name = ref(props.currencyName);
    const info = ref(props.infoToDisplay);
    return {
      name,
      info,
    };
  },
});
</script>

<style lang="scss" scoped>
.currency-item__container {
  cursor: pointer;
  border-bottom: $base-border;

  &:hover {
    background: $active-gradient !important;
  }

  .currency-name {
    font-weight: bold;
  }
}
</style>
