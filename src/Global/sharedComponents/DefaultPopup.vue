<template>
  <div
    v-if="isPopupVisible"
    class="default-popup__wrapper d-flex justify-space-between align-center"
  >
    <div class="navbar">
      <div class="nav-icons__container d-flex flex-column my-5">
        <v-icon color="white">mdi-currency-usd</v-icon>
      </div>
    </div>
    <div class="details-window mr-16 d-flex flex-column">
      <div class="details__container"></div>
      <div class="buttons__wrapper d-flex justify-end ma-5">
        <v-btn
          class="c-button-delete--outlined"
          @click="isPopupVisible = false"
        >
          Close
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const isPopupVisible = computed({
      get: () => props.value,
      set: (value) => {
        emit('input', value);
      },
    });
    return {
      isPopupVisible,
    };
  },
});
</script>

<style lang="scss" scoped>
.default-popup__wrapper {
  position: absolute;
  inset: 0 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 20;

  & .navbar {
    width: 60px;
    background: var(--v-primary-base);
    height: 100%;
  }

  & .details-window {
    background: var(--v-primary-base);
    width: 80%;
    height: 80%;
    border: $base-border;
    border-radius: $base-border-radius;

    & .details__container {
      height: 100%;
      overflow: auto;
    }
  }
}
</style>
