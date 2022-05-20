<template>
  <div
    class="info__wrapper d-flex flex-column justify-space-around align-center"
  >
    <InfoItem />
    <InfoItem :isImageOnRight="true" />
    <InfoItem />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import InfoItem from "./components/InfoItem.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: { InfoItem },
});
</script>

<style lang="scss" scoped>
.info__wrapper {
  height: 100%;
}
</style>
