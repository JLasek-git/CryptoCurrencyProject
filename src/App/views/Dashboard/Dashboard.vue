<template>
  <div class="dashboard__wrapper d-flex justify-space-between align-center">
    <div class="multiple-items-row__container d-flex justify-space-between">
      <CustomContainer />
      <CustomContainer />
      <CustomContainer />
    </div>
    <div class="long-row__container">
      <CustomContainer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import CustomContainer from "@/Global/sharedComponents/CustomContainer.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: {
    CustomContainer,
  },
});
</script>

<style lang="scss" scoped>
.dashboard__wrapper {
  width: 100%;
  height: 100%;
  flex-wrap: wrap;

  & .multiple-items-row__container {
    width: 100%;
    height: 50%;

    & > * {
      margin-left: 24px;

      &:nth-child(1) {
        margin-left: 0 !important;
      }
    }
  }

  & .long-row__container {
    width: 100%;
    height: 45%;
  }
}
</style>
