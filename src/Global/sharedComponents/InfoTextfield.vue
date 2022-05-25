<template>
  <div>
    <v-text-field
      :value="infoValue"
      :label="infoLabel"
      :suffix="infoSuffix"
      readonly
      disabled
      class="c-info-textfield"
    />
  </div>
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
    const infoValue = ref(props.infoValue);
    const infoLabel = ref(props.infoLabel);
    const infoSuffix = ref(props.infoSuffix);

    return {
      infoValue,
      infoLabel,
      infoSuffix,
    };
  },
});
</script>
