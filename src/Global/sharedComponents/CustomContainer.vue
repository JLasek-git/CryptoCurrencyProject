div
<template>
  <div class="custom-container__wrapper">
    <div
      v-if="isContainerIconVisible"
      class="container-icon d-flex justify-center align-center"
      :style="`background: ${containerIconColor}`"
    >
      <v-img
        contain
        width="35px"
        height="35px"
        :src="require(`../assets/${containerIconName}.svg`)"
      />
    </div>
    <div class="slot__container">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  props: {
    iconBgColor: {
      type: String,
      default: "#00ADB5",
    },
    isIconVisible: {
      type: Boolean,
      default: true,
    },
    iconName: {
      type: String,
      default: "star",
    },
  },
  setup(props) {
    const containerIconColor = ref(props.iconBgColor);
    const isContainerIconVisible = ref(props.isIconVisible);
    const containerIconName = ref(props.iconName);
    return {
      containerIconColor,
      isContainerIconVisible,
      containerIconName,
    };
  },
});
</script>

<style lang="scss" scoped>
.custom-container__wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--v-secondary-base);
  border: $base-border;
  border-radius: $base-border-radius;
  color: var(--v-text-base);

  & .container-icon {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    left: 10px;
    top: 10px;
  }
}
</style>
