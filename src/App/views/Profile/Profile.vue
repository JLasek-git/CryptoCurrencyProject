<template>
  <div class="profile__wrapper">
    <TabsNavigation
      v-model="currentProfileWorkingMode"
      :availableTabs="availableProfileModes"
    />
    <CustomContainer :isIconVisible="false">
      <ProfileInfoView
        v-if="currentProfileWorkingMode === ProfileWorkingModeEnum.Profile"
      />
      <ProfileEditView
        v-else-if="currentProfileWorkingMode === ProfileWorkingModeEnum.Edit"
      />
      <VerificationView
        v-else-if="
          currentProfileWorkingMode === ProfileWorkingModeEnum.Verification
        "
      />
      <SettingsView
        v-else-if="
          currentProfileWorkingMode === ProfileWorkingModeEnum.Settings
        "
      />
    </CustomContainer>
  </div>
</template>

<script lang="ts">
import CustomContainer from "@/Global/sharedComponents/CustomContainer.vue";
import TabsNavigation from "@/Global/sharedComponents/TabsNavigation.vue";
import { defineComponent, ref } from "@vue/composition-api";
import { availableProfileModes } from "@/App/views/Profile/data/profileModes";
import { ProfileWorkingModeEnum } from "@/App/enums/ProfileEnums";
import ProfileInfoView from "./components/ProfileInfoView.vue";
import ProfileEditView from "./components/ProfileEditView.vue";
import SettingsView from "./components/SettingsView.vue";
import VerificationView from "./components/VerificationView.vue";

export default defineComponent({
  setup() {
    const currentProfileWorkingMode = ref(ProfileWorkingModeEnum.Profile);
    return {
      availableProfileModes,
      currentProfileWorkingMode,
      ProfileWorkingModeEnum,
    };
  },
  components: {
    CustomContainer,
    TabsNavigation,
    ProfileInfoView,
    ProfileEditView,
    SettingsView,
    VerificationView,
  },
});
</script>

<style lang="scss" scoped>
.profile__wrapper {
  height: 100%;
  padding-bottom: 100px;
}
</style>
