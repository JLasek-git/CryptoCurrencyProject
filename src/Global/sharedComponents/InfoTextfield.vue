<template>
  <v-text-field
    :value="textfieldValue"
    :label="textfieldLabel"
    :suffix="textfieldSuffix"
    readonly
    disabled
    class="c-info-textfield my-3"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  props: {
    infoValue: {
      type: Number,
      required: true,
    },
    infoLabel: {
      type: String,
      required: true,
    },
    infoSuffix: {
      type: String,
      default: () => "",
    },
  },
  setup(props) {
    const textfieldValue = ref(props.infoValue);
    const textfieldLabel = ref(props.infoLabel);
    const textfieldSuffix = ref(props.infoSuffix);

    return {
      textfieldValue,
      textfieldLabel,
      textfieldSuffix,
    };
  },
});
</script>
