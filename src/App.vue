<template>
  <MainView>
    <router-view />
  </MainView>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import MainView from "@/Global/sharedComponents/MainView.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: {
    MainView,
  },
});
</script>

<style lang="scss">
html {
  overflow: auto;
}
</style>
