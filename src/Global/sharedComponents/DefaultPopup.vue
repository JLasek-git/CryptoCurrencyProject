<template>
  <div
    v-if="isPopupVisible"
    class="default-popup__wrapper d-flex justify-space-between align-center"
  >
    <div class="navbar d-flex justify-center">
      <div class="nav-icons__container d-flex flex-column my-5">
        <v-icon
          v-for="(currency, index) in observedCurrencies"
          :key="index"
          class="text--text observed-currency-icon mb-4"
          @click="changeSelectedCurrency(currency, $event)"
        >
          {{ currency.icon }}
        </v-icon>
      </div>
    </div>
    <div class="details-window mr-16 d-flex flex-column">
      <div class="details__container">test</div>
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
import { computed, defineComponent, ref } from '@vue/composition-api';
import { ObservedCurrenciesItem } from '@/Global/interfaces/ObservedCurrenciesItem';
import { getObservedCurrencies } from '../services/global.service';

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const observedCurrencies = ref<ObservedCurrenciesItem[]>([]);

    getObservedCurrencies().then(
      (response) => (observedCurrencies.value = response)
    );

    function changeSelectedCurrency(
      currency: ObservedCurrenciesItem,
      event: {
        target: { classList: { add: (arg0: string) => void } };
      }
    ): void {
      const activeIcon = document.querySelector(
        '.observed-currency-icon.active'
      );
      activeIcon?.classList.remove('active');

      event.target.classList.add('active');
    }

    const isPopupVisible = computed({
      get: () => props.value,
      set: (value) => {
        emit('input', value);
      },
    });
    return {
      isPopupVisible,
      observedCurrencies,
      changeSelectedCurrency,
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

    & .nav-icons__container {
      width: 0;
      height: 0;
      & .observed-currency-icon {
        cursor: pointer;
        font-size: $details-icon-font-size;

        &.active {
          color: var(--v-accent-base) !important;
        }

        &:hover {
          color: var(--v-accent-base) !important;
        }
      }
    }
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
