<template>
  <div class="profile__wrapper">
    <CustomContainer :isIconVisible="false" />
  </div>
</template>

<script lang="ts">
import CustomContainer from "@/Global/sharedComponents/CustomContainer.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    return {};
  },
  components: { CustomContainer },
});
</script>

<style lang="scss" scoped>
.profile__wrapper {
  height: 100%;
}
</style>
