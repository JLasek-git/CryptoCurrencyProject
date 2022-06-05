<template>
  <div class="custom-container__wrapper">
    <div class="container-header d-flex align-center">
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
      <h2 class="container-title ml-4">{{ title }}</h2>
    </div>
    <div class="slot__container overflow-auto">
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
    containerTitle: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const containerIconColor = ref(props.iconBgColor);
    const isContainerIconVisible = ref(props.isIconVisible);
    const containerIconName = ref(props.iconName);
    const title = ref(props.containerTitle);
    return {
      containerIconColor,
      isContainerIconVisible,
      containerIconName,
      title,
    };
  },
});
</script>

<style lang="scss" scoped>
.custom-container__wrapper {
  display: flex;
  align-items: flex-end;
  position: relative;
  width: 100%;
  min-width: 330px;
  height: 100%;
  background-color: var(--v-secondary-base);
  border: $base-border;
  border-radius: $base-border-radius;
  color: var(--v-text-base);

  & .container-header {
    position: absolute;
    top: 10px;
    left: 10px;
    & .container-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }

  & .slot__container {
    height: 100%;
    padding-top: 80px;
    width: 100%;
  }
}
</style>
