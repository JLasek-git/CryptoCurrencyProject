<template>
  <div class="profile__wrapper">
    <TabsNavigation
      v-model="currentProfileWorkingMode"
      :availableTabs="availableProfileModes"
    />
    <CustomContainer :isIconVisible="false" />
  </div>
</template>

<script lang="ts">
import CustomContainer from "@/Global/sharedComponents/CustomContainer.vue";
import TabsNavigation from "@/Global/sharedComponents/TabsNavigation.vue";
import { defineComponent, ref } from "@vue/composition-api";
import { availableProfileModes } from "@/App/views/Profile/data/profileModes";
import { ProfileWorkingModeEnum } from "@/App/enums/ProfileEnums";

export default defineComponent({
  setup() {
    const currentProfileWorkingMode = ref(ProfileWorkingModeEnum.Profile);
    return { availableProfileModes, currentProfileWorkingMode };
  },
  components: { CustomContainer, TabsNavigation },
});
</script>

<style lang="scss" scoped>
.profile__wrapper {
  height: 100%;
  padding-bottom: 100px;
}
</style>
