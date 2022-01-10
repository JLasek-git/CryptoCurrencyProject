<template>
  <v-app>
    <v-main>
      <MainView>
        <router-view />
      </MainView>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import MainView from '@/Global/sharedComponents/MainView.vue';

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

.v-main {
  position: absolute;
  inset: 0;
  background: var(--v-text-base);
}
</style>
