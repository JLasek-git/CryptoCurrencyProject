<template>
  <div class="currencies__wrapper d-flex flex-column align-center justify-end">
    <TabsNavigation
      v-model="currentWorkingMode"
      :available-tabs="availableCurrenciesModes"
    />
    <List />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import List from '@/Global/sharedComponents/List.vue';
import TabsNavigation from '@/Global/sharedComponents/TabsNavigation.vue';
import {
  availableCurrenciesModes,
  CurrenciesWorkingModeEnum,
} from '@/App/enums/CurrenciesEnums';

export default defineComponent({
  setup() {
    const currentWorkingMode = ref(CurrenciesWorkingModeEnum.Currencies);

    return {
      availableCurrenciesModes,
      currentWorkingMode,
    };
  },
  components: {
    List,
    TabsNavigation,
  },
});
</script>

<style lang="scss" scoped>
.currencies__wrapper {
  width: 100%;
  height: 100%;
}
</style>
