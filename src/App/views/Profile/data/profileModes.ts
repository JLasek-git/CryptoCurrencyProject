import { TabsNavigationItem } from "@/Global/interfaces/TabsNavigationItem";
import {
  ProfileModesNamesEnum,
  ProfileWorkingModeEnum,
} from "@/App/enums/ProfileEnums";

export const availableProfileModes: TabsNavigationItem[] = [
  {
    displayName: ProfileModesNamesEnum.Profile,
    workingMode: ProfileWorkingModeEnum.Profile,
  },
  {
    displayName: ProfileModesNamesEnum.Edit,
    workingMode: ProfileWorkingModeEnum.Edit,
  },
  {
    displayName: ProfileModesNamesEnum.Verification,
    workingMode: ProfileWorkingModeEnum.Verification,
  },
  {
    displayName: ProfileModesNamesEnum.Settings,
    workingMode: ProfileWorkingModeEnum.Settings,
  },
];
